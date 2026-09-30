"""Minimal MiniMax M3 chat completion client (urllib stdlib).

Reads the API key from the MINIMAX_API_KEY env var. If the key is missing
and MINIMAX_MOCK=1 is set, returns a canned educational answer so the rest
of the system can be tested without hitting the upstream API.

Endpoint: POST https://api.minimax.chat/v1/text/chatcompletion_v2
Auth: Bearer <MINIMAX_API_KEY>
Model: MiniMax-M3
"""

from __future__ import annotations

import json
import os
import urllib.error
import urllib.request


class MiniMaxError(RuntimeError):
    """Raised on any failure calling MiniMax M3."""


class MiniMaxClient:
    def __init__(self) -> None:
        self.api_key = os.environ.get("MINIMAX_API_KEY", "").strip()
        self.mock = bool(os.environ.get("MINIMAX_MOCK")) or not self.api_key
        # Lazy: only validate connectivity if a real call is attempted.

    def chat(
        self,
        messages: list[dict],
        system: str | None = None,
        temperature: float = 0.4,
        max_tokens: int = 800,
    ) -> str:
        if self.mock:
            return self._mock_answer(messages)

        url = "https://api.minimax.chat/v1/text/chatcompletion_v2"
        full_messages: list[dict] = []
        if system:
            full_messages.append({"role": "system", "content": system})
        full_messages.extend(messages)

        body = json.dumps(
            {
                "model": "MiniMax-M3",
                "messages": full_messages,
                "temperature": temperature,
                "max_tokens": max_tokens,
            }
        ).encode("utf-8")

        last_err: Exception | None = None
        for attempt in (1, 2):
            try:
                req = urllib.request.Request(url, data=body, method="POST")
                req.add_header("Authorization", f"Bearer {self.api_key}")
                req.add_header("Content-Type", "application/json")
                with urllib.request.urlopen(req, timeout=30) as resp:
                    payload = json.loads(resp.read().decode("utf-8"))
                return self._extract(payload)
            except urllib.error.HTTPError as e:
                raw = e.read().decode("utf-8", errors="replace")[: 400]
                if e.code in (429, 500, 502, 503, 504) and attempt == 1:
                    last_err = MiniMaxError(f"upstream {e.code}: {raw}")
                    continue
                raise MiniMaxError(f"upstream {e.code}: {raw}") from e
            except urllib.error.URLError as e:
                raise MiniMaxError(f"network error: {e.reason}") from e
        assert last_err is not None
        raise last_err

    @staticmethod
    def _extract(payload: dict) -> str:
        try:
            choices = payload["choices"]
            return choices[0]["message"]["content"]
        except (KeyError, IndexError, TypeError) as e:
            raise MiniMaxError(f"unexpected payload shape: {payload}") from e

    @staticmethod
    def _mock_answer(messages: list[dict]) -> str:
        # Detect the last user question for a topical canned reply.
        user_msg = ""
        for m in reversed(messages):
            if m.get("role") == "user":
                user_msg = m.get("content", "").lower()
                break
        if "emdr" in user_msg:
            return (
                "[MOCK] L'EMDR est une approche thérapeutique créée par Francine "
                "Shapiro en 1987, qui utilise la stimulation bilatérale (mouvements "
                "oculaires, tapotements) pour faciliter le retraitement des souvenirs "
                "traumatiques. Elle figure dans les recommandations de l'OMS depuis "
                "2013 pour le psychotraumatisme. Pour un avis personnalisé, prenez RDV."
            )
        if "attachement" in user_msg or "bowlby" in user_msg:
            return (
                "[MOCK] La théorie de l'attachement (Bowlby, Ainsworth) distingue "
                "quatre styles : sécurisé, anxieux, évitant, désorganisé. Ces styles "
                "influent sur la manière dont nous entrons en relation à l'âge adulte. "
                "Pour aller plus loin, Emilie peut vous recevoir en cabinet ou en visio."
            )
        if "polyvagale" in user_msg or "porges" in user_msg:
            return (
                "[MOCK] La théorie polyvagale de Stephen Porges décrit trois circuits "
                "du système nerveux autonome : engagement social (ventral), mobilisation "
                "(sympathique), et immobilisation (dorsal). Elle éclaire les réactions "
                "dissociatives dans le trauma complexe."
            )
        if "intelligence relationnelle" in user_msg or "le doze" in user_msg:
            return (
                "[MOCK] L'Intelligence Relationnelle est une approche développée par "
                "le Dr François Le Doze, fondée sur les neurosciences affectives et la "
                "théorie de l'attachement. Elle postule que la souffrance naît d'une "
                "blessure du lien et que la guérison passe par une relation thérapeutique "
                "consciente et engagée."
            )
        if "dissociation" in user_msg or "salmona" in user_msg:
            return (
                "[MOCK] La dissociation traumatique, travaillée notamment par le Dr "
                "Muriel Salmona, est une stratégie de survie du cerveau face à une "
                "douleur intolérable. Elle se traduit par dépersonnalisation, déréalisation, "
                "et survient souvent dans les traumatismes complexes ou développementaux."
            )
        return (
            "[MOCK] Je suis un psybot de démonstration. Je n'ai pas de clé MiniMax M3 "
            "configurée (MINIMAX_API_KEY manquant) et MINIMAX_MOCK=1 est actif. "
            "Posez une question sur l'EMDR, l'Intelligence Relationnelle, l'attachement, "
            "la polyvagale ou la dissociation, et je vous donnerai un exemple de réponse."
        )