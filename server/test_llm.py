"""Tests for server/llm.py — Xiaomi MiMo client (live API).

The real MiMo client is exercised against the configured endpoint. Tests skip
gracefully when ``MIMO_API_KEY`` is missing or the network is unreachable, so
``pytest`` stays green in sandboxes / CI without secrets.

Set ``MIMO_MOCK=1`` to run these tests against the mock client explicitly.
"""

from __future__ import annotations

import os
import socket

import pytest

from llm import MiMoClient, MiMoError, _MiMoMockClient, make_client


# ---------------------------------------------------------------------------
# Helpers
# ---------------------------------------------------------------------------

def _has_api_key() -> bool:
    return bool(os.environ.get("MIMO_API_KEY", "").strip())


def _endpoint_reachable(url: str, timeout: float = 2.0) -> bool:
    """Best-effort TCP probe of the API host. Returns False on any failure."""
    try:
        host = url.split("://", 1)[1].split("/", 1)[0]
        if ":" in host:
            host, port = host.rsplit(":", 1)
            port = int(port)
        else:
            port = 443
        with socket.create_connection((host, port), timeout=timeout):
            return True
    except Exception:
        return False


@pytest.fixture
def real_client() -> MiMoClient:
    """Build a real MiMoClient; skip the test if the key is missing."""
    if not _has_api_key():
        pytest.skip("MIMO_API_KEY not set — live API tests skipped")
    return MiMoClient()


# ---------------------------------------------------------------------------
# Construction & config
# ---------------------------------------------------------------------------

def test_constructor_requires_api_key(monkeypatch):
    monkeypatch.delenv("MIMO_API_KEY", raising=False)
    with pytest.raises(MiMoError, match="MIMO_API_KEY"):
        MiMoClient()


def test_constructor_accepts_key(monkeypatch):
    monkeypatch.setenv("MIMO_API_KEY", "test-key-xyz")
    c = MiMoClient()
    assert c.api_key == "test-key-xyz"
    assert c.mock is False
    assert c.model == "mimo-v2-flash"
    assert c.api_url.startswith("https://")


def test_constructor_respects_overrides(monkeypatch):
    monkeypatch.setenv("MIMO_API_KEY", "k")
    monkeypatch.setenv("MIMO_MODEL", "mimo-v2-pro")
    monkeypatch.setenv("MIMO_API_URL", "https://example.com/v1/chat")
    c = MiMoClient()
    assert c.model == "mimo-v2-pro"
    assert c.api_url == "https://example.com/v1/chat"


# ---------------------------------------------------------------------------
# Mock factory (opt-in)
# ---------------------------------------------------------------------------

def test_make_client_returns_real_when_no_mock(monkeypatch):
    monkeypatch.delenv("MIMO_MOCK", raising=False)
    monkeypatch.setenv("MIMO_API_KEY", "k")
    c = make_client()
    assert isinstance(c, MiMoClient)
    assert c.mock is False


def test_make_client_returns_mock_when_flag_set(monkeypatch):
    monkeypatch.setenv("MIMO_MOCK", "1")
    monkeypatch.setenv("MIMO_API_KEY", "k")
    c = make_client()
    assert isinstance(c, _MiMoMockClient)
    assert c.mock is True


def test_mock_client_emdr():
    c = _MiMoMockClient()
    out = c.chat([{"role": "user", "content": "C'est quoi l'EMDR ?"}])
    assert "EMDR" in out
    assert "Shapiro" in out


def test_mock_client_intelligence_relationnelle():
    c = _MiMoMockClient()
    out = c.chat([{"role": "user", "content": "Parlez-moi de l'intelligence relationnelle"}])
    assert "Intelligence Relationnelle" in out or "Le Doze" in out


# ---------------------------------------------------------------------------
# Payload extraction (pure, no network)
# ---------------------------------------------------------------------------

def test_extract_returns_content():
    payload = {"choices": [{"message": {"role": "assistant", "content": "Bonjour"}}]}
    assert MiMoClient._extract(payload) == "Bonjour"


def test_extract_handles_malformed_payload():
    with pytest.raises(MiMoError, match="unexpected payload shape"):
        MiMoClient._extract({})


def test_extract_handles_non_dict_message():
    with pytest.raises(MiMoError):
        MiMoClient._extract({"choices": [{"message": "not a dict"}]})


# ---------------------------------------------------------------------------
# Live API (skip cleanly when key absent or network unreachable)
# ---------------------------------------------------------------------------

@pytest.mark.skipif(not _has_api_key(), reason="MIMO_API_KEY not set")
def test_live_ping(real_client: MiMoClient):
    """One-shot ping to the configured MiMo endpoint."""
    if not _endpoint_reachable(real_client.api_url):
        pytest.skip("MiMo endpoint unreachable from this host")
    out = real_client.chat(
        [{"role": "user", "content": "Réponds uniquement: OK"}],
        max_tokens=10,
    )
    assert isinstance(out, str)
    assert len(out.strip()) > 0


@pytest.mark.skipif(not _has_api_key(), reason="MIMO_API_KEY not set")
def test_live_system_prompt_is_passed_through(real_client: MiMoClient):
    if not _endpoint_reachable(real_client.api_url):
        pytest.skip("MiMo endpoint unreachable from this host")
    out = real_client.chat(
        [{"role": "user", "content": "Dissociation"}],
        system="Tu es un psy informatif.",
        max_tokens=50,
    )
    assert isinstance(out, str)
    assert len(out.strip()) > 0


@pytest.mark.skipif(not _has_api_key(), reason="MIMO_API_KEY not set")
def test_live_unreachable_raises_mimo_error(monkeypatch):
    """Force an unreachable host and confirm we get MiMoError, not a raw URLError."""
    monkeypatch.setenv("MIMO_API_KEY", "k")
    monkeypatch.setenv("MIMO_API_URL", "https://does-not-exist.invalid/v1/chat")
    c = MiMoClient()
    with pytest.raises(MiMoError):
        c.chat([{"role": "user", "content": "ping"}], max_tokens=5)
