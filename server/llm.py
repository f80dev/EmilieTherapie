"""Minimal Xiaomi MiMo chat completion client (urllib stdlib).

Reads the API key from the ``MIMO_API_KEY`` env var (or ``.env`` via python-dotenv).

Endpoint (Xiaomi MiMo, OpenAI-compatible):
    POST https://api.mimo.mi.com/v1/chat/completions
Auth: ``Authorization: Bearer <MIMO_API_KEY>``
Default model: ``mimo-v2-flash`` (Lite-plan compatible; verify in console).
"""

from __future__ import annotations

import json
import os
import urllib.error
import urllib.request

# Load .env file if present (silently ignored if python-dotenv is absent).
try:
    from dotenv import load_dotenv
    load_dotenv()
except ImportError:
    pass  # python-dotenv not installed, rely on system env vars


# ---------------------------------------------------------------------------
# Configuration
# ---------------------------------------------------------------------------

_MIMO_API_URL_DEFAULT = "https://api.mimo.mi.com/v1/chat/completions"
_MIMO_DEFAULT_MODEL_DEFAULT = "mimo-v2-flash"
_MIMO_TIMEOUT_SEC_DEFAULT = 30.0


class MiMoError(RuntimeError):
    """Raised on any failure calling MiMo."""


# ---------------------------------------------------------------------------
# Real client
# ---------------------------------------------------------------------------

class MiMoClient:
    """Calls the Xiaomi MiMo chat-completion endpoint.

    Raises ``MiMoError`` at construction time if ``MIMO_API_KEY`` is missing.
    """

    mock: bool = False

    def __init__(self) -> None:
        # Read env at construction time so tests can monkeypatch overrides.
        self.api_key = os.environ.get("MIMO_API_KEY", "").strip()
        self.api_url = os.environ.get("MIMO_API_URL", _MIMO_API_URL_DEFAULT).strip()
        self.model = os.environ.get("MIMO_MODEL", _MIMO_DEFAULT_MODEL_DEFAULT).strip()
        self.timeout = float(os.environ.get("MIMO_TIMEOUT", str(_MIMO_TIMEOUT_SEC_DEFAULT)))
        if not self.api_key:
            raise MiMoError("MIMO_API_KEY environment variable is not set")

    def chat(
        self,
        messages: list[dict],
        system: str | None = None,
        temperature: float = 0.4,
        max_tokens: int = 800,
    ) -> str:
        full_messages: list[dict] = []
        if system:
            full_messages.append({"role": "system", "content": system})
        full_messages.extend(messages)

        body = json.dumps(
            {
                "model": self.model,
                "messages": full_messages,
                "temperature": temperature,
                "max_tokens": max_tokens,
            }
        ).encode("utf-8")

        last_err: Exception | None = None
        for attempt in (1, 2):
            try:
                req = urllib.request.Request(self.api_url, data=body, method="POST")
                req.add_header("Authorization", f"Bearer {self.api_key}")
                req.add_header("Content-Type", "application/json")
                with urllib.request.urlopen(req, timeout=self.timeout) as resp:
                    payload = json.loads(resp.read().decode("utf-8"))
                return self._extract(payload)
            except urllib.error.HTTPError as e:
                raw = e.read().decode("utf-8", errors="replace")[: 400]
                if e.code in (408, 429, 500, 502, 503, 504) and attempt == 1:
                    last_err = MiMoError(f"upstream {e.code}: {raw}")
                    continue
                raise MiMoError(f"upstream {e.code}: {raw}") from e
            except urllib.error.URLError as e:
                raise MiMoError(f"network error: {e.reason}") from e
        assert last_err is not None
        raise last_err

    @staticmethod
    def _extract(payload: dict) -> str:
        """Pull ``choices[0].message.content`` from an OpenAI-style payload."""
        try:
            return payload["choices"][0]["message"]["content"]
        except (KeyError, IndexError, TypeError) as e:
            raise MiMoError(f"unexpected payload shape: {payload}") from e


# ---------------------------------------------------------------------------
# Mock client — opt-in, for local dev / sandbox / offline testing
# ---------------------------------------------------------------------------

_DEFAULT_SYSTEM_MOCK = (
    "Tu es un assistant thérapeutique bienveillant et professionnel, "
    "spécialisé en EMDR, en théorie de l'attachement, en théorie polyvagale "
    "et en intelligence relationnelle. Réponds de manière concise, empathique "
    "et fondée sur ces approches."
)


class _MiMoMockClient:
    """No-network client that returns a pedagogical stub. ``MIMO_MOCK=1`` selects it."""

    mock: bool = True

    def __init__(self) -> None:
        self.api_key = "mock"
        self.api_url = "<mock>"
        self.model = "mock"
        self.timeout = 0.0
        self._system = _DEFAULT_SYSTEM_MOCK

    def chat(
        self,
        messages: list[dict],
        system: str | None = None,
        temperature: float = 0.4,
        max_tokens: int = 800,
    ) -> str:
        user_msg = ""
        for m in reversed(messages):
            if m.get("role") == "user":
                user_msg = (m.get("content") or "").lower()
                break
        if "emdr" in user_msg:
            return (
                "[Mode mock — MiMo] L'EMDR (Eye Movement Desensitization and "
                "Reprocessing) est une approche thérapeutique développée par "
                "Francine Shapiro, utilisée pour traiter les traumatismes psychiques."
            )
        if "intelligence relationnelle" in user_msg or "le doze" in user_msg:
            return (
                "[Mode mock — MiMo] L'Intelligence Relationnelle, modélisée par "
                "le Dr François Le Doze, explore la manière dont le cerveau social "
                "influence nos liens aux autres."
            )
        return (
            "[Mode mock — MiMo] Merci pour votre message. "
            "Cela sera traité par le système MiMo une fois configuré."
        )


def make_client() -> MiMoClient | _MiMoMockClient:
    """Factory: return a mock client when ``MIMO_MOCK=1``, else a real ``MiMoClient``.

    The real client raises ``MiMoError`` if the key is missing; callers that
    want graceful fallback should catch it and call ``make_client`` again with
    ``MIMO_MOCK`` forced.
    """
    if os.environ.get("MIMO_MOCK", "").strip().lower() in ("1", "true", "yes"):
        return _MiMoMockClient()
    return MiMoClient()
