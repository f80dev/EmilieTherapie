"""Psybot local dev server — RAG + ReAct-style agent loop on DeepSeek.

Run with:
    cd ~/psy-site/server
    DEEPSEEK_API_KEY=sk-... python3 -m psybot_local
    # or
    DEEPSEEK_API_KEY=sk-... uvicorn psybot_local:app --port 8000

Why a separate file: the prod unified_proxy.py is shared with the booking
form, and we don't want RAG/agent code to ship in the same artifact. This
module is the dev playground. Same contract as prod /api/psybot/chat:
    POST /api/psybot/chat  {message, session_id?, history?}
        -> {answer, sources, emergency, trajectory}
"""

from __future__ import annotations

import os
import re
from pathlib import Path
from typing import Any

from fastapi import FastAPI, HTTPException
from pydantic import BaseModel, Field

# Local imports — these all live in the same dir in dev.
from rag import KnowledgeBase  # type: ignore
from llm import DeepSeekClient, DeepSeekError, make_client  # type: ignore


# ---------------------------------------------------------------------------
# Config
# ---------------------------------------------------------------------------

KNOWLEDGE_DIR = os.environ.get("PSYBOT_KNOWLEDGE_DIR", "knowledge")
MAX_ITERS = int(os.environ.get("PSYBOT_MAX_ITERS", "3"))
LLM_TEMPERATURE = float(os.environ.get("PSYBOT_TEMPERATURE", "0.4"))
LLM_MAX_TOKENS = int(os.environ.get("PSYBOT_MAX_TOKENS", "700"))


# ---------------------------------------------------------------------------
# Emergency detection (carried over from prod unified_proxy.py)
# ---------------------------------------------------------------------------

_EMERGENCY_RE = re.compile(
    r"\b(suicide|suicid|me\s+tuer|me\s+faire\s+mal|en\s+finir|plus\s+envie\s+de\s+vivre|"
    r"mourir|idees\s+suicid|tuer|mutiler|me\s+blesser|je\s+veux\s+disparaitre|"
    r"ça\s+va\s+pas|je\s+suis\s+au\s+fond|je\s+n[\\'e]en\s+peux\s+plus)\b",
    re.IGNORECASE,
)

_EMERGENCY_MESSAGE = (
    "Ce que vous décrivez semble être une détresse importante. "
    "Je ne suis pas un professionnel de santé et je ne peux pas vous aider directement.\n\n"
    "En France, vous pouvez appeler :\n"
    "• le **3114** (numéro national de prévention du suicide, gratuit, 24h/24, 7j/7)\n"
    "• le **15** (SAMU) en cas d'urgence\n"
    "• le **114** par SMS si vous êtes sourd·e ou malentendant·e\n\n"
    "Si vous êtes en danger immédiat, contactez un proche ou les secours. "
    "Vous n'êtes pas seul·e."
)


# ---------------------------------------------------------------------------
# ReAct-style agent tools
# ---------------------------------------------------------------------------
#
# Each tool is a plain Python function with a docstring + type hints.
# The agent loop calls them in turn, based on the LLM's tool_choice output.
# We deliberately keep this hand-rolled (no dspy.ReAct) so the dev loop is fast
# and dependency-light. DSPy can be plugged in later if/when we want prompt
# optimization.

SYSTEM_PROMPT_TEMPLATE = """Tu es Psybot, l'assistant conversationnel du cabinet d'Emilie Pommier, \
thérapeute à Paris 10e/11e et en visio. Emilie pratique l'Intelligence Relationnelle \
(modélisée par le Dr François Le Doze), l'EMDR, la thérapie sensori-motrice et les TCC. \
Son premier échange (30 minutes) est offert, sur rendez-vous : https://emiliepommier.fr/#rdv

Ton rôle est strictement INFORMATIONNEL.

RÈGLES ABSOLUES (aucune exception) :
1. Tu ne poses AUCUN diagnostic, AUCUN avis thérapeutique personnalisé, AUCUNE promesse de guérison.
2. Tu ne remplaces jamais un professionnel de santé mentale.
3. Si l'utilisateur exprime une détresse aiguë ou une urgence, tu réponds par le message d'urgence ci-dessous, rien d'autre :
   « {emergency} »
4. Tu t'appuies sur les passages de contexte fournis pour répondre. Si la question dépasse ce cadre, dis-le explicitement (« je n'ai pas d'information fiable sur ce sujet précis »).
5. Tu termines tes réponses par une invitation douce à prendre RDV quand c'est pertinent.
6. Tu es sobre, bienveillant, jamais dramatique. Tu vouvoies l'utilisateur.

OUTIL DISPONIBLE — `search_knowledge` :
- À utiliser quand la question porte sur un sujet précis (EMDR, attachement, IR, polyvagale, blessure psychique, déontologie).
- Tu reçois en retour une liste de passages RAG (source, titre, extrait).
- Tu n'inventes JAMAIS de référence à un passage que tu n'as pas reçu.

CONTEXTE (passages RAG, tu dois t'appuyer dessus) :
{context}
"""


def tool_search_knowledge(query: str) -> dict[str, Any]:
    """Search the psybot knowledge base for passages relevant to the query.

    Args:
        query: the user's question (rephrased if needed for the RAG index).

    Returns:
        {"hits": [{"title": str, "source": str, "snippet": str, "score": float}, ...]}
    """
    # Lazy import to avoid loading the KB at module import time (slow).
    if not hasattr(tool_search_knowledge, "_kb"):
        tool_search_knowledge._kb = KnowledgeBase(KNOWLEDGE_DIR)  # type: ignore[attr-defined]
    kb: KnowledgeBase = tool_search_knowledge._kb  # type: ignore[attr-defined]
    hits = kb.search(query, top_k=3)
    return {"hits": hits}


def tool_detect_emergency(text: str) -> dict[str, Any]:
    """Return whether the text matches an emergency pattern.

    Args:
        text: raw user message (not RAG context).

    Returns:
        {"emergency": bool, "message": str}
    """
    if _EMERGENCY_RE.search(text or ""):
        return {"emergency": True, "message": _EMERGENCY_MESSAGE}
    return {"emergency": False, "message": ""}


TOOLS = {
    "search_knowledge": tool_search_knowledge,
    "detect_emergency": tool_detect_emergency,
}


# ---------------------------------------------------------------------------
# Agent loop (max 3 iters, hand-rolled ReAct)
# ---------------------------------------------------------------------------

_DECISION_PROMPT = """Tu es un agent ReAct. Tu reçois un message utilisateur et une trajectoire (vide au début).
Tu dois choisir UNE action par tour, au choix :
- {{"action": "search_knowledge", "query": "..."}}   pour chercher dans la base
- {{"action": "detect_emergency", "text": "..."}}     pour vérifier une détresse
- {{"action": "finish", "answer": "..."}}             pour répondre à l'utilisateur

RÈGLES :
- Tu réponds UNIQUEMENT par un objet JSON, rien d'autre.
- Si tu as déjà assez d'information (passages RAG + pas d'urgence détectée), choisis `finish` avec la réponse rédigée.
- `answer` doit être du français, bienveillant, court (≤ 6 phrases), citer 3114 si détresse.
- Ne JAMAIS inventer de référence. Si `search_knowledge` n'a rien renvoyé, dis-le.

Trajectoire actuelle :
{trajectory}

Prochaine action (JSON strict) :"""


def _agent_decide(client: Any, trajectory: list[dict]) -> dict[str, Any]:
    """Ask the LLM for the next action. Returns parsed JSON dict."""
    import json

    traj_str = "\n".join(
        f"[{i}] {t['action']}({t.get('args', {})}) -> {json.dumps(t.get('result', {}), ensure_ascii=False)[:400]}"
        for i, t in enumerate(trajectory)
    ) or "(vide)"

    raw = client.chat(
        messages=[{"role": "user", "content": _DECISION_PROMPT.format(trajectory=traj_str)}],
        system="Tu es un agent ReAct strict. Tu réponds UNIQUEMENT en JSON.",
        temperature=0.0,
        max_tokens=400,
    )
    # Try to parse a JSON object from the raw text.
    text = raw.strip()
    # Strip code fences if any.
    if text.startswith("```"):
        text = re.sub(r"^```(?:json)?\s*", "", text)
        text = re.sub(r"\s*```$", "", text)
    # Find the first {...} block.
    m = re.search(r"\{.*\}", text, re.DOTALL)
    if not m:
        # Fallback: treat as a finish with the raw text.
        return {"action": "finish", "answer": raw.strip()[:1500]}
    try:
        return json.loads(m.group(0))
    except Exception:
        return {"action": "finish", "answer": raw.strip()[:1500]}


def _run_agent(
    client: Any,
    message: str,
    history: list[dict] | None = None,
) -> dict[str, Any]:
    """Run the ReAct-style loop and return the structured result."""
    trajectory: list[dict] = []
    sources: list[dict] = []
    emergency = False
    emergency_message = ""
    final_answer = ""

    # Optional: include a short history hint in the first iteration.
    for it in range(MAX_ITERS):
        decision = _agent_decide(client, trajectory)

        action = decision.get("action")
        args = decision.get("args") or {}
        # Allow the LLM to put action-specific fields at the root too.
        if action == "search_knowledge" and "query" in decision and "query" not in args:
            args["query"] = decision["query"]
        if action == "detect_emergency" and "text" in decision and "text" not in args:
            args["text"] = decision["text"]
        if action == "finish" and "answer" in decision and "answer" not in args:
            args["answer"] = decision["answer"]

        if action == "finish":
            final_answer = (args.get("answer") or "").strip()
            if not final_answer:
                final_answer = (
                    "Je n'ai pas d'information fiable sur ce sujet précis. "
                    "Vous pouvez prendre rendez-vous avec Emilie pour en discuter : "
                    "https://emiliepommier.fr/#rdv"
                )
            trajectory.append({"action": "finish", "args": {}, "result": {"truncated": True}})
            break

        if action in TOOLS:
            try:
                result = TOOLS[action](**args)
            except TypeError as e:
                result = {"error": f"bad tool args: {e}"}
            except Exception as e:  # noqa: BLE001
                result = {"error": f"tool failed: {e}"}

            trajectory.append({"action": action, "args": args, "result": result})

            if action == "search_knowledge" and isinstance(result, dict):
                sources = [
                    {"title": h["title"], "source": h["source"], "score": h["score"]}
                    for h in result.get("hits", [])
                ]
            elif action == "detect_emergency" and isinstance(result, dict):
                if result.get("emergency"):
                    emergency = True
                    emergency_message = result.get("message", _EMERGENCY_MESSAGE)
                    # Short-circuit: return the safety message verbatim.
                    return {
                        "answer": emergency_message,
                        "sources": [],
                        "emergency": True,
                        "trajectory": trajectory,
                    }
        else:
            # Unknown action: force finish with a guardrail message.
            final_answer = (
                "Je n'ai pas pu traiter votre demande. Vous pouvez prendre RDV : "
                "https://emiliepommier.fr/#rdv"
            )
            trajectory.append({"action": action, "args": {}, "result": {"error": "unknown action"}})
            break
    else:
        # Loop exhausted without a finish.
        final_answer = (
            "Je n'ai pas pu aller au bout de l'analyse. "
            "Vous pouvez prendre RDV avec Emilie pour en discuter : "
            "https://emiliepommier.fr/#rdv"
        )

    return {
        "answer": final_answer,
        "sources": sources,
        "emergency": emergency,
        "trajectory": trajectory,
    }


# ---------------------------------------------------------------------------
# FastAPI app
# ---------------------------------------------------------------------------

app = FastAPI(title="Psybot Local Dev", version="0.1.0")


class ChatIn(BaseModel):
    # Pydantic checks only the bare minimum (non-empty). Length validation is
    # done in the route so it can return HTTP 400 (matching prod) instead of
    # Pydantic's 422.
    message: str = Field(..., min_length=1)
    session_id: str | None = None
    history: list[dict] | None = None


class ChatOut(BaseModel):
    answer: str
    sources: list[dict]
    emergency: bool
    trajectory: list[dict] = []


@app.get("/api/health/psybot")
def health() -> dict[str, Any]:
    """Local health endpoint. Mirrors prod shape minus llm_mock flag."""
    try:
        client = make_client()
    except Exception as e:  # noqa: BLE001
        raise HTTPException(status_code=503, detail=f"LLM client unavailable: {e}")
    # Warm the KB so health reflects cold-start cost.
    try:
        tool_search_knowledge("EMDR")
    except Exception as e:  # noqa: BLE001
        raise HTTPException(status_code=503, detail=f"KB unavailable: {e}")
    return {
        "status": "ok",
        "llm_mock": bool(getattr(client, "mock", False)),
        "max_iters": MAX_ITERS,
        "knowledge_dir": str(Path(KNOWLEDGE_DIR).resolve()),
    }


@app.post("/api/psybot/chat", response_model=ChatOut)
def chat(body: ChatIn) -> ChatOut:
    """Same contract as prod (modulo the optional `trajectory` debug field)."""
    message = body.message.strip()
    if not message:
        raise HTTPException(status_code=400, detail="message is required")
    if len(message) > 1500:
        raise HTTPException(status_code=400, detail="message too long (1500 chars max)")

    # Fast-path emergency check (before any LLM call) — same as prod.
    if _EMERGENCY_RE.search(message):
        return ChatOut(
            answer=_EMERGENCY_MESSAGE,
            sources=[],
            emergency=True,
            trajectory=[{"action": "emergency_shortcut", "result": {"matched": True}}],
        )

    try:
        client = make_client()
    except DeepSeekError as e:
        raise HTTPException(status_code=503, detail=f"LLM unavailable: {e}")

    try:
        result = _run_agent(client, message, body.history)
    except DeepSeekError as e:
        raise HTTPException(status_code=502, detail=f"LLM upstream error: {e}")

    return ChatOut(**result)


if __name__ == "__main__":
    import uvicorn  # type: ignore

    port = int(os.environ.get("PORT", "8000"))
    uvicorn.run(app, host="127.0.0.1", port=port)
