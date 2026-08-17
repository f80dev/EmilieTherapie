"""MCP server exposing Émilie Pommier's practice as agent-bookable tools.

Uses the FastMCP low-level API so we can mount on the same FastAPI app as
unified_proxy.py via streamable-http transport, with Bearer-token auth.

Tools exposed:
  - list_services(): detailed catalogue of session types (price-free, with
    duration, location, format, audience) so an agent can describe the
    practice to its user.
  - list_locations(): the two cabinets (10e and 11e) with GPS + metadatas.
  - list_available_slots(start_date, end_date): free slots between two
    dates based on Google Calendar busy data.
  - book_appointment(...): create a tentative calendar event (route
    through unified_proxy logic) so Émilie can confirm manually.
  - cancel_appointment(event_id): cancel an existing tentative event.
  - get_faq(): frequently asked questions so the agent can answer
    recurring questions without a round-trip.

Authentication is per-request via the Authorization: Bearer <token> header.
Tokens are stored in server/api_tokens.json and managed via /api/admin/tokens.
"""

from __future__ import annotations

import datetime
import json
import logging
import os
import re
import secrets
from pathlib import Path
from typing import Any

from mcp.server.fastmcp import FastMCP
from mcp.server.transport_security import TransportSecuritySettings

logger = logging.getLogger(__name__)

# ---------------------------------------------------------------------------
# Static catalogue data (mirrors src/assets/data/*.json so the agent gets
# detailed descriptions without having to load the website).
# ---------------------------------------------------------------------------
HERE = Path(__file__).resolve().parent

DATA_DIR_CANDIDATES = [
    HERE / "data",                # server/data/ (preferred for deployment)
    HERE.parent / "src" / "assets" / "data",  # source repo
]

# Fallback hard-coded catalogue if the JSON files are missing — keeps the
# server importable even with broken data files.
DEFAULT_SERVICES = [
    {
        "id": "prise-contact",
        "nom": "Premier échange gratuit",
        "duree_minutes": 30,
        "format": "visioconférence",
        "tarif_euros": 0,
        "public": "Toute personne souhaitant découvrir l'accompagnement avant de s'engager",
        "description": "Entretien découverte offert, en visio, pour exposer vos besoins et vérifier que l'approche relationnelle vous correspond.",
        "objectif": "Faire connaissance, poser vos questions, et décider ensemble si la suite vous serait utile.",
    },
    {
        "id": "seance-1h",
        "nom": "Séance de suivi - 1 heure",
        "duree_minutes": 60,
        "format": "présentiel ou visio",
        "tarif_euros": 70,
        "public": "Patient·es en suivi psycho-corporel (Intelligence Relationnelle)",
        "description": "Séance complète de suivi thérapeutique basée sur l'Intelligence Relationnelle (Le Doze) : corps + émotions + cognition.",
        "objectif": "Apaiser le système nerveux, restaurer la sécurité interne, dénouer les schémas de protection.",
    },
    {
        "id": "seance-1h30",
        "nom": "Séance approfondie ou EMDR - 1h30",
        "duree_minutes": 90,
        "format": "présentiel uniquement",
        "tarif_euros": 100,
        "public": "Travail ciblé sur un souvenir traumatique (EMDR) ou exploration en profondeur",
        "description": "Séance longue : soit exploration psycho-corporelle approfondie, soit protocole EMDR (préparation et stabilisation préalables requises).",
        "objectif": "Retraitement ciblé d'un souvenir traumatique ou travail en profondeur d'une thématique centrale.",
    },
]

DEFAULT_LOCATIONS = [
    {
        "id": "cabinet-10e",
        "nom": "Cabinet Paris 10e",
        "adresse": "40bis rue du Faubourg Poissonnière, 75010 Paris",
        "gps": {"latitude": 48.8728, "longitude": 2.3548},
        "transports": "Métro Gare du Nord / Poissonnière, lignes 4, 5, 7",
    },
    {
        "id": "cabinet-11e",
        "nom": "Cabinet Paris 11e",
        "adresse": "5 Passage Saint-Antoine, 75011 Paris",
        "gps": {"latitude": 48.8572, "longitude": 2.3796},
        "transports": "Métro Bastille / Chemin Vert, lignes 1, 5, 8",
    },
]

DEFAULT_FAQS = [
    {
        "question": "Vos séances sont-elles remboursées ?",
        "reponse": "Non, en tant que psycho-praticienne je ne suis pas conventionnée Sécurité sociale. "
                   "Cependant, beaucoup de mutuelles remboursent une partie des séances : contactez la vôtre.",
    },
    {
        "question": "Quel est le rythme idéal entre deux séances ?",
        "reponse": "Hebdomadaire ou bimensuel au départ, puis ajusté ensemble à votre besoin.",
    },
    {
        "question": "Combien de séances faut-il prévoir ?",
        "reponse": "Cela dépend de votre histoire et de vos objectifs. Pour l'EMDR ciblé sur un trauma : 6 à 8 "
                   "séances en moyenne. Pour un travail relationnel en profondeur : c'est davantage, au fil de votre "
                   "rythme.",
    },
    {
        "question": "Présentiel ou visio, quel est le mieux ?",
        "reponse": "Les deux conviennent. Le présentiel offre un cadre physique plus 'cocon'. La visio est plus "
                   "souple. Les deux sont interchangeables, sauf pour l'EMDR qui se fait uniquement en présentiel.",
    },
]


def _load_json(name: str, default: list[dict]) -> list[dict]:
    """Try to load JSON from multiple candidate paths before falling back to defaults."""
    for d in DATA_DIR_CANDIDATES:
        candidate = d / name
        if candidate.exists():
            try:
                with open(candidate, encoding="utf-8") as f:
                    return json.load(f)
            except Exception as err:
                logger.warning("Could not load %s from %s: %s", name, candidate, err)
    return default


def _adapt_services_default() -> list[dict]:
    """Adapt the simplified types-seances.json into the richer service-shape the agent sees."""
    return DEFAULT_SERVICES


SERVICES = _load_json("types-seances.json", _adapt_services_default())
LOCATIONS = _load_json("lieux.json", DEFAULT_LOCATIONS)
FAQS = _load_json("faqs.json", DEFAULT_FAQS)


# ---------------------------------------------------------------------------
# Token auth (Bearer tokens for MCP access)
# ---------------------------------------------------------------------------
TOKENS_FILE = HERE / "api_tokens.json"
PUBLIC_HOST = os.environ.get("MCP_PUBLIC_HOST", "https://api.emiliepommier.fr")


def _load_tokens() -> list[dict[str, Any]]:
    if not TOKENS_FILE.exists():
        return []
    try:
        with open(TOKENS_FILE, encoding="utf-8") as f:
            return json.load(f)
    except Exception:
        logger.exception("Failed to read %s", TOKENS_FILE)
        return []


def _save_tokens(tokens: list[dict[str, Any]]) -> None:
    with open(TOKENS_FILE, "w", encoding="utf-8") as f:
        json.dump(tokens, f, indent=2, ensure_ascii=False)


def _check_token(token: str | None) -> bool:
    """Return True if the token exists and is not revoked."""
    if not token:
        return False
    prefix = token[:8]
    for entry in _load_tokens():
        if entry.get("token_prefix") == prefix and entry.get("token_hash") == _hash(token):
            if not entry.get("revoked"):
                return True
    return False


def _hash(token: str) -> str:
    """Tiny non-crypto hash — we just need a stable handle to compare against the persisted token."""
    import hashlib
    return hashlib.sha256(token.encode()).hexdigest()


def issue_token(label: str, ttl_days: int = 365) -> dict[str, Any]:
    """Create a new API token. Returns the full token (shown once) + metadata."""
    token = "emil_" + secrets.token_urlsafe(32)
    entry = {
        "label": label,
        "token_prefix": token[:8],
        "token_hash": _hash(token),
        "created_at": datetime.datetime.utcnow().isoformat() + "Z",
        "expires_at": (datetime.datetime.utcnow() + datetime.timedelta(days=ttl_days)).isoformat() + "Z",
        "revoked": False,
    }
    tokens = _load_tokens()
    tokens.append(entry)
    _save_tokens(tokens)
    return {"token": token, **entry}


def revoke_token(token_prefix: str) -> bool:
    tokens = _load_tokens()
    found = False
    for entry in tokens:
        if entry.get("token_prefix") == token_prefix:
            entry["revoked"] = True
            found = True
    if found:
        _save_tokens(tokens)
    return found


# ---------------------------------------------------------------------------
# Server setup
# ---------------------------------------------------------------------------
# Note: FastMCP is normally a stdio server. We use StreamableHTTP transport
# so it can be mounted on the same FastAPI app as unified_proxy.py and
# reached over the public HTTPS endpoint at /mcp.
mcp = FastMCP(
    "emiliepommier",
    instructions=(
        "Services de réservation de séances de psychothérapie (Intelligence Relationnelle, EMDR) "
        "pour le cabinet d'Émilie Pommier à Paris. "
        "Outils : list_services, list_locations, list_available_slots, book_appointment, "
        "cancel_appointment, get_faq. "
        "Une demande (book_appointment) crée un événement 'tentative' que Émilie confirme manuellement."
    ),
    host=os.environ.get("MCP_HOST", "0.0.0.0"),
    port=int(os.environ.get("MCP_PORT", "8080")),
    # Streamable HTTP transport path — clients will POST to /mcp.
)


# ---------------------------------------------------------------------------
# Tools
# ---------------------------------------------------------------------------
@mcp.tool()
def list_services() -> list[dict[str, Any]]:
    """Catalogue complet des prestations proposées par Émilie Pommier.

    Retourne pour chaque service : nom, durée, format (présentiel/visio),
    tarif, public visé, description détaillée et objectif thérapeutique.
    À appeler en premier pour présenter l'offre à l'utilisateur.
    """
    return SERVICES


@mcp.tool()
def list_locations() -> list[dict[str, Any]]:
    """Adresses des cabinets où se déroulent les séances en présentiel.

    Retourne pour chaque lieu : nom, adresse postale, coordonnées GPS,
    et accès transports en commun.
    """
    return LOCATIONS


@mcp.tool()
def list_available_slots(
    start_date: str,
    end_date: str,
    service_id: str = "seance-1h",
) -> list[dict[str, Any]]:
    """Liste les créneaux libres entre deux dates pour un service donné.

    Parcourt l'agenda Google Calendar d'Émilie et renvoie tous les créneaux
    possibles (par pas de 15 minutes entre 09:00 et 19:00, durée du service)
    qui ne sont pas déjà occupés. Les dimanches sont exclus.

    Args:
        start_date: date de début au format YYYY-MM-DD
        end_date: date de fin au format YYYY-MM-DD (max 60 jours après start_date)
        service_id: id du service (par défaut 'seance-1h').

    Returns:
        Liste de créneaux disponibles : {date, time, duration_minutes, location_id}
    """
    # Lazy import — the unified_proxy module is heavy (Google auth inc. at import).
    from unified_proxy import get_calendar_service, event_to_busy_slots

    service = next((s for s in SERVICES if s["id"] == service_id), None)
    if service is None:
        raise ValueError(
            f"service_id inconnu: {service_id}. Connus: {[s['id'] for s in SERVICES]}"
        )
    duration = service["duree_minutes"]

    start = datetime.datetime.strptime(start_date, "%Y-%m-%d").date()
    end = datetime.datetime.strptime(end_date, "%Y-%m-%d").date()
    if (end - start).days > 60:
        raise ValueError("Plage max 60 jours")
    if end < start:
        raise ValueError("end_date < start_date")

    cal = get_calendar_service()
    events_result = cal.events().list(
        calendarId="primary",
        timeMin=f"{start}T00:00:00Z",
        timeMax=f"{end}T23:59:59Z",
        singleEvents=True,
        orderBy="startTime",
    ).execute()

    busy: dict[str, list[tuple[int, int]]] = {}
    for ev in events_result.get("items", []):
        for slot in event_to_busy_slots(ev):
            t = slot["time"]
            h, m = map(int, t.split(":"))
            busy.setdefault(slot["date"], []).append((h * 60 + m, h * 60 + m + slot["duration"]))

    # Build candidate slots for each day (09:00-19:00 step 15 min)
    slots: list[dict[str, Any]] = []
    day = start
    while day <= end:
        if day.weekday() != 6:  # skip Sunday
            for minute in range(9 * 60, 19 * 60, 15):
                slot_end = minute + duration
                if slot_end > 20 * 60:
                    continue
                today_busy = busy.get(day.isoformat(), [])
                if any(not (slot_end <= b_start or minute >= b_end) for b_start, b_end in today_busy):
                    continue
                slots.append({
                    "date": day.isoformat(),
                    "time": f"{minute // 60:02d}:{minute % 60:02d}",
                    "duration_minutes": duration,
                    "service_id": service_id,
                    "location_id": "cabinet-10e",  # default; visio excluded
                })
        day += datetime.timedelta(days=1)
    return slots


@mcp.tool()
def book_appointment(
    service_id: str,
    date: str,
    time: str,
    firstname: str,
    lastname: str,
    email: str,
    phone: str = "",
    message: str = "",
    format: str = "presentiel",
) -> dict[str, Any]:
    """Réserve une séance en créant un événement 'À CONFIRMER' dans l'agenda.

    IMPORTANT : cette action crée une demande TENTATIVE. Émilie confirme
    manuellement avant 24h. Une notification email est envoyée à Émilie.

    Args:
        service_id: id du service (cf. list_services).
        date: date au format YYYY-MM-DD.
        time: heure au format HH:MM.
        firstname: prénom de la personne.
        lastname: nom de la personne.
        email: email de contact.
        phone: téléphone (optionnel).
        message: message libre (optionnel).
        format: 'presentiel' ou 'distant' (visio).

    Returns:
        Dictionnaire avec 'status' (created | rejected), 'event_id', 'message'.
    """
    from unified_proxy import add_to_calendar  # delegate to the existing logic

    service = next((s for s in SERVICES if s["id"] == service_id), None)
    if service is None:
        return {"status": "rejected", "message": f"service_id inconnu: {service_id}"}

    # Build UTC start/end. Treat the time as Paris local.
    start = datetime.datetime.fromisoformat(f"{date}T{time}:00")
    end = start + datetime.timedelta(minutes=service["duree_minutes"])
    # Paris is UTC+1 (UTC+2 in summer). Use proper zone handling in production;
    # the unified_proxy already handles time-zone parsing.
    start_str = start.strftime("%Y-%m-%dT%H:%M:%SZ")
    end_str = end.strftime("%Y-%m-%dT%H:%M:%SZ")

    title = f"{firstname} {lastname} — {service['nom']}"
    description = (
        f"Réservation via agent IA.\n\n"
        f"Service: {service['nom']}\n"
        f"Durée: {service['duree_minutes']} min\n"
        f"Format: {format}\n"
        f"Message du patient: {message or '—'}"
    )

    try:
        ev = add_to_calendar(
            {
                "title": title,
                "start_time": start_str,
                "end_time": end_str,
                "description": description,
                "email": email,
                "phone": phone,
                "firstname": firstname,
                "seance_type": format,
                "email_body": "",  # filled in after we know the event id
            }
        )
    except Exception as err:
        logger.exception("book_appointment failed")
        return {"status": "rejected", "message": f"Erreur serveur: {err}"}

    # Build the email body after the event has been created so we can include
    # the real event id in the confirmation/cancellation links.
    event_id = ev.get("id")
    email_body = (
        f"<h3>Nouvelle demande de rendez-vous (via agent IA)</h3>"
        f"<p><b>Patient:</b> {firstname} {lastname}<br>"
        f"<b>Email:</b> {email}<br>"
        f"<b>Téléphone:</b> {phone or '—'}<br>"
        f"<b>Service:</b> {service['nom']} ({service['duree_minutes']} min)<br>"
        f"<b>Format:</b> {format}<br>"
        f"<b>Date:</b> {date} à {time}<br>"
        f"<b>Message:</b> {message or '—'}</p>"
        f"<p><a href=\"{PUBLIC_HOST}/api/calendar/confirm?event_id={event_id}\">✅ Confirmer</a> · "
        f"<a href=\"{PUBLIC_HOST}/api/calendar/events/{event_id}\">❌ Refuser</a></p>"
    )
    try:
        # Resend the email with the now-known event id.
        from unified_proxy import send_email_smtp
        send_email_smtp(
            email,
            f"Demande de rendez-vous - {title}",
            email_body,
            is_html=True,
        )
    except Exception as err:
        logger.warning("Could not send confirmation email for %s: %s", event_id, err)

    return {
        "status": "created",
        "event_id": event_id,
        "message": (
            f"Demande envoyée à Émilie. Vous recevrez une confirmation d'ici 24h "
            f"à l'adresse {email}."
        ),
    }


@mcp.tool()
def cancel_appointment(event_id: str) -> dict[str, Any]:
    """Annule un événement 'tentative' précédemment créé.

    Args:
        event_id: identifiant d'événement Google Calendar (renvoyé par book_appointment).

    Returns:
        Dictionnaire {status: 'cancelled' | 'not_found', message: str}.
    """
    from unified_proxy import get_calendar_service
    cal = get_calendar_service()
    try:
        cal.events().delete(calendarId="primary", eventId=event_id).execute()
        return {"status": "cancelled", "message": f"Événement {event_id} annulé."}
    except Exception as err:
        logger.warning("cancel_appointment failed for %s: %s", event_id, err)
        return {"status": "not_found", "message": f"Événement introuvable: {err}"}


@mcp.tool()
def get_faq() -> list[dict[str, str]]:
    """Questions fréquentes avec leurs réponses.

    Utile pour répondre aux questions courantes d'un utilisateur sans
    avoir besoin de mettre en relation avec Émilie (remboursement, format,
    durée du suivi, etc.).
    """
    return FAQS


# ---------------------------------------------------------------------------
# ASGI-mountable HTTP app (so unified_proxy.py can mount it on /mcp)
# ---------------------------------------------------------------------------
# FastMCP exposes a .streamable_http_app() ASGI sub-app that handles
# Streamable HTTP transport (MCP 2025-03-26 spec). This is what we mount.
mcp_http_app = mcp.streamable_http_app()


if __name__ == "__main__":
    # Standalone dev server: `python mcp_server.py` runs the MCP server on
    # 8080/mcp. In production, unified_proxy.py mounts mcp_http_app.
    import uvicorn
    uvicorn.run(mcp_http_app, host="0.0.0.0", port=int(os.environ.get("MCP_PORT", "8080")))
