"""Minimal MiMo chat completion client (urllib stdlib).

Reads the API key from the MIMO_API_KEY env var.

Endpoint: POST https://api.mimo.ai/v1/text/chatcompletion_v2
Auth: Bearer <MIMO_API_KEY>
Model: MiMo
"""

from __future__ import annotations

import json
import os
import urllib.error
import urllib.request

# Load .env file if present
try:
    from dotenv import load_dotenv
    load_dotenv()
except ImportError:
    pass  # python-dotenv not installed, rely on system env vars


class MiMoError(RuntimeError):
    """Raised on any failure calling MiMo."""


class MiMoClient:
    def __init__(self) -> None:
        self.api_key = os.environ.get("MIMO_API_KEY", "").strip()
        if not self.api_key:
            raise MiMoError("MIMO_API_KEY environment variable is not set")

    def chat(
        self,
        messages: list[dict],
        system: str | None = None,
        temperature: float = 0.4,
        max_tokens: int = 800,
    ) -> str:
        url = "https://api.mimo.ai/v1/text/chatcompletion_v2"
        full_messages: list[dict] = []
        if system:
            full_messages.append({"role": "system", "content": system})
        full_messages.extend(messages)

        body = json.dumps(
            {
                "model": "MiMo",
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
                    last_err = MiMoError(f"upstream {e.code}: {raw}")
                    continue
                raise MiMoError(f"upstream {e.code}: {raw}") from e
            except urllib.error.URLError as e:
                raise MiMoError(f"network error: {e.reason}") from e
        assert last_err is not None
        raise last_err

    @staticmethod
    def _extract(payload: dict) -> str:
        try:
            choices = payload["choices"]
            return choices[0]["message"]["content"]
        except (KeyError, IndexError, TypeError) as e:
            raise MiMoError(f"unexpected payload shape: {payload}") from e


# ---------------------------------------------------------------------------
# Mock mode support (useful when MIMO_API_KEY is not set)
# ---------------------------------------------------------------------------

_MOCK = os.environ.get("MIMO_MOCK", "").strip().lower() in ("1", "true", "yes")

if _MOCK:
    _DEFAULT_SYSTEM = (
        "Tu es un assistant thérapeutique bienveillant et professionnel, spécialisé en EMDR, "
        "en théorie de l'attachement, en théorie polyvagale et en intelligence relationnelle. "
        "Réponds de manière concise, empathique et fondée sur ces approches."
    )

    class MiMoClient:
        """Mock client that returns pedagogical responses without calling any API."""

        def __init__(self) -> None:
            self.api_key = "mock"
            self._system = _DEFAULT_SYSTEM

        def chat(
            self,
            messages: list[dict],
            system: str | None = None,
            temperature: float = 0.4,
            max_tokens: int = 800,
        ) -> str:
            return (
                f"[Mode mock — MiMo] Merci pour votre message. "
                f"Cela sera traité par le système MiMo une fois configuré."
            )
