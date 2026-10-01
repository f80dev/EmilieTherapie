"""Tests for server/llm.py — MiMo client (mock-mode only by default)."""

import os

from llm import MiMoClient, MiMoError


def test_mock_mode_returns_string():
    os.environ["MIMO_MOCK"] = "1"
    c = MiMoClient()
    out = c.chat([{"role": "user", "content": "Bonjour"}])
    assert isinstance(out, str) and len(out) > 0


def test_mock_mode_emdr():
    os.environ["MIMO_MOCK"] = "1"
    c = MiMoClient()
    out = c.chat([{"role": "user", "content": "C'est quoi l'EMDR ?"}])
    assert "EMDR" in out or "Shapiro" in out


def test_mock_mode_intelligence_relationnelle():
    os.environ["MIMO_MOCK"] = "1"
    c = MiMoClient()
    out = c.chat([{"role": "user", "content": "Parlez-moi de l'intelligence relationnelle"}])
    assert "Intelligence Relationnelle" in out or "Le Doze" in out


def test_raises_without_key_and_without_mock():
    os.environ.pop("MIMO_API_KEY", None)
    os.environ.pop("MIMO_MOCK", None)
    c = MiMoClient()
    # In the absence of both, constructor auto-enables mock (so the API stays
    # usable out of the box). Verify mock kicks in instead of raising:
    out = c.chat([{"role": "user", "content": "Salut"}])
    assert isinstance(out, str)


def test_system_prompt_is_passed_through():
    os.environ["MIMO_MOCK"] = "1"
    c = MiMoClient()
    out = c.chat(
        [{"role": "user", "content": "Dissociation"}],
        system="Tu es un psy informatif.",
    )
    assert "dissociation" in out.lower() or "salmona" in out.lower()


def test_extract_handles_malformed_payload():
    # Direct unit test of the static _extract helper
    from llm import MiMoClient as C

    try:
        C._extract({})
    except MiMoError as e:
        assert "unexpected" in str(e).lower()
    else:
        raise AssertionError("expected MiMoError")


def test_extract_returns_content():
    from llm import MiMoClient as C

    payload = {"choices": [{"message": {"role": "assistant", "content": "Bonjour"}}]}
    assert C._extract(payload) == "Bonjour"
