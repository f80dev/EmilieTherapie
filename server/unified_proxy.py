# Standalone proxy: Calendar busy slots + Tasks creation
# Uses google-api-python-client for Google Calendar and Tasks APIs
import datetime
import json
import os
import re
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from typing import Any, Dict
import logging

# Configure logging
logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware

from google.oauth2 import service_account
from googleapiclient.discovery import build

SCOPES = [
    "https://www.googleapis.com/auth/calendar",
    "https://www.googleapis.com/auth/tasks",
    "https://www.googleapis.com/auth/userinfo.email",
    "openid"
]
TASKLIST_ID = "@default"

_calendar_service = None
_tasks_service = None

# Ionos SMTP configuration
SMTP_HOST = os.environ.get("SMTP_HOST", "smtp.ionos.fr")
SMTP_PORT = int(os.environ.get("SMTP_PORT", "587")) #voir https://www.ionos.fr/assistance/email/sujets-generaux/messagerie-ionos-donnees-de-serveur-pour-imap-pop3-et-smtp/
SMTP_USER = os.environ.get("SMTP_USER", "")
SMTP_PASSWORD = os.environ.get("SMTP_PASSWORD", "")

ALLOWED_ORIGINS = [
    "https://f80dev.github.io",
    "https://emilietherapie.netlify.app",
    "https://emiliepommier.fr",
    "http://localhost:4200",
    "http://127.0.0.1:4200"
]
ALLOWED_REFERERS = [".github.io", "netlify.app", "vercel.app", "cloudflarepages.com"]

EMAIL="pommier.therapeute@gmail.com"
BASE_URL = os.environ.get("BASE_URL", "http://localhost:8080")
app = FastAPI()

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=ALLOWED_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


SERVICE_ACCOUNT_PATH = "google_account.json"


def get_credentials():
    """Get Google credentials from Service Account (no OAuth/browser needed)."""
    secret=os.getenv("google_account")
    return service_account.Credentials.from_service_account_info(info=json.loads(secret))


    return service_account.Credentials.from_service_account_file(
        SERVICE_ACCOUNT_PATH, scopes=SCOPES
    )


def get_calendar_service():
    """Get or create the Google Calendar service instance."""
    global _calendar_service
    if _calendar_service is None:
        creds = get_credentials()
        _calendar_service = build('calendar', 'v3', credentials=creds)
    return _calendar_service


def get_tasks_service():
    """Get or create the Google Tasks service instance."""
    global _tasks_service
    if _tasks_service is None:
        creds = get_credentials()
        _tasks_service = build('tasks', 'v1', credentials=creds)
    return _tasks_service


def send_email_smtp(to_email: str, subject: str, body: str, is_html: bool = False) -> dict:
    """Send an email using Ionos SMTP server.

    Args:
        to_email: Recipient email address
        subject: Email subject
        body: Email body
        is_html: Whether the body is HTML content

    Returns:
        Dictionary with status and message info
    """
    if not SMTP_PASSWORD:
        raise Exception("SMTP credentials not configured. Set SMTP_USER and SMTP_PASSWORD environment variables.")

    msg = MIMEMultipart('alternative')
    msg['to'] = to_email
    msg['from'] = SMTP_USER
    msg['subject'] = subject

    if is_html:
        part = MIMEText(body, 'html')
    else:
        part = MIMEText(body, 'plain')

    msg.attach(part)

    try:
        with smtplib.SMTP(SMTP_HOST, SMTP_PORT,timeout=30) as server:
          server.ehlo()
          server.starttls()
          server.login(SMTP_USER, SMTP_PASSWORD)
          server.sendmail(msg["from"], [to_email], msg.as_string())

        logger.info(f"Email sent successfully to {to_email}")
        return {"status": "sent", "to": to_email, "subject": subject}
    except Exception as e:
        logger.error(f"Failed to send email to {to_email}: {e}")
        raise RuntimeError(f"Failed to send email to {to_email}: {e}")

@app.get("/api/userinfo")
def get_user_profile_info() -> Dict[str, Any]:
  """Récupère les informations du compte utilisateur (Email, Nom, ID).
    http://localhost:8080/api/userinfo
  Args:
      credentials: L'objet credentials (contenant le token) que tu passes
                   habituellement à build('tasks', 'v1', credentials=...)
  """
  try:
    # On crée le service oauth2 en réutilisant les mêmes credentials
    oauth2_service = build('oauth2', 'v2', credentials=get_credentials())

    # On appelle l'endpoint userinfo
    user_info = oauth2_service.userinfo().get().execute()

    # Structure de la réponse :
    # {'id': '...', 'email': 'user@gmail.com', 'verified_email': True, 'name': '...', ...}
    return user_info

  except Exception as e:
    logger.error(f"Impossible de récupérer les infos utilisateur : {e}")
    return {}






def event_to_busy_slots(event: dict[str, Any]) -> list[dict[str, Any]]:
    if event.get("status") == "cancelled":
        return []
    start = event.get("start", {})
    end = event.get("end", {})
    if "date" in start and "dateTime" not in start:
        return [{"date": start["date"], "time": "00:00", "duration": 1440}]
    start_raw = start.get("dateTime", "")
    end_raw = end.get("dateTime", "")
    if not start_raw or not end_raw:
        return []
    date_str = start_raw[:10]
    start_h = int(start_raw[11:13])
    start_m = int(start_raw[14:16])
    end_h = int(end_raw[11:13])
    end_m = int(end_raw[14:16])
    duration = (end_h * 60 + end_m) - (start_h * 60 + start_m)
    return [{"date": date_str, "time": f"{start_h:02d}:{start_m:02d}", "duration": duration}]




@app.get("/api/calendar/busy")
def get_busy_slots(start: str, end: str) -> dict[str, list[dict[str, Any]]]:
    """Get busy slots from Google Calendar using google-api-python-client.

    Args:
        start: Start date in YYYY-MM-DD format
        end: End date in YYYY-MM-DD format

    Returns:
        Dictionary mapping dates to list of busy slots with time and duration
    """
    service = get_calendar_service()
    time_min = f"{start}T00:00:00Z"
    time_max = f"{end}T23:59:59Z"

    events_result = service.events().list(
        calendarId=EMAIL,
        timeMin=time_min,
        timeMax=time_max,
        singleEvents=True,
        orderBy='startTime'
    ).execute()

    busy_map: dict[str, list[dict[str, Any]]] = {}
    for event in events_result.get('items', []):
        for slot in event_to_busy_slots(event):
            busy_map.setdefault(slot["date"], []).append({"time": slot["time"], "duration": slot["duration"]})
    return busy_map


@app.get("/api/calendar/list")
def list_pending_events() -> list[dict[str, Any]]:
  """Récupère la liste de tous les événements à confirmer du calendrier.
    test http://localhost:8080/api/calendar/list
  """
  try:
    service = get_calendar_service()

    # Récupérer les événements des 60 prochains jours
    from datetime import datetime, timedelta, timezone
    now = datetime.now(timezone.utc)
    time_min = now.isoformat()
    time_max = (now + timedelta(days=60)).isoformat()

    events_result = service.events().list(
        calendarId=EMAIL,
        timeMin=time_min,
        timeMax=time_max,
        singleEvents=True,
        orderBy='startTime'
    ).execute()

    items = events_result.get('items', [])

    # Filtrer les événements "À CONFIRMER" (status tentative)
    formatted_events = [
      {
        "id": item.get("id"),
        "summary": item.get("summary", ""),
        "description": item.get("description", ""),
        "start": item.get("start", {}).get("dateTime", ""),
        "end": item.get("end", {}).get("dateTime", ""),
        "status": item.get("status", ""),
        "colorId": item.get("colorId", "")
      }
      for item in items
      if item.get("status") == "tentative" or (item.get("summary") or "").startswith("À CONFIRMER")
    ]

    logger.info(f"{len(formatted_events)} événements à confirmer trouvés.")
    return formatted_events

  except Exception as e:
    logger.error(f"Erreur lors de la récupération des événements: {e}")
    raise HTTPException(status_code=500, detail=str(e))



def get_tasklist_id_by_name(service, target_name: str) -> str | None:
  """Récupère l'ID d'une tasklist à partir de son nom."""
  # Appel à l'API pour lister les tasklists
  results = service.tasklists().list(maxResults=50).execute()
  items = results.get('items', [])
  logger.info(f"Task lists found: {[item.get('title') for item in items]}")

  if not items:
    logger.warning("Aucune liste de tâches trouvée.")
    return None

  for item in items:
    # On compare le titre (ex: "My Tasks", "Projets Pro")
    logger.info(f"Comparing '{item['title'].lower()}' with '{target_name.lower()}'")
    if item['title'].lower() == target_name.lower():
      return item['id']  # C'est cette chaîne de caractères qu'il te faut

  return None




@app.post("/api/tasks/add-task")
def add_task(body: dict[str, str]) -> dict[str, Any]:
    """Add a task to Google Tasks using google-api-python-client.

    Args:
        body: Dictionary with 'title' and optional 'notes' keys

    Returns:
        The created task resource
    """
    title = body.get("title", "")
    notes = body.get("notes", "")

    service = get_tasks_service()
    task_body = {
        'title': title,
        'notes': notes,
        'status': 'needsAction'
    }

    tasklist_id=get_tasklist_id_by_name(service,"my tasks")
    logger.info(f"Task list lookup result: tasklist_id={tasklist_id}")
    if tasklist_id is None:
        raise HTTPException(status_code=400, detail="Task list 'my tasks' not found. Please create it first.")
    result = service.tasks().insert(
        tasklist=tasklist_id,
        body=task_body
    ).execute()

    logger.info(f"Task created: {result.get('id')}")
    return result


@app.post("/api/calendar/add-to-calendar")
def add_to_calendar(body: dict[str, str]) -> dict[str, Any]:
    """Add an appointment request to Google Calendar as a tentative event to be confirmed.

    Args:
        body: Dictionary with 'title', 'start_time', 'end_time', 'description', 'email', 'phone', 'seance_type'

    Returns:
        The created calendar event resource
    """
    title = body.get("title", "")
    start_time = body.get("start_time", "")
    end_time = body.get("end_time", "")
    description = body.get("description", "")
    email = body.get("email", "")
    phone = body.get("phone", "")
    firstname=body.get("firstname", "")
    seance_type = body.get("seance_type", "")

    service = get_calendar_service()

    # Create event with "À CONFIRMER" tag in the title and description
    event_body = {
        'summary': f"À CONFIRMER - {title}",
        'description': f"{description}\n\nEmail: {email}\nTéléphone: {phone}\nType: {seance_type}\n\nStatut: En attente de confirmation",
        'start': {
            'dateTime': start_time,
            'timeZone': 'Europe/Paris',
        },
        'end': {
            'dateTime': end_time,
            'timeZone': 'Europe/Paris',
        },
        'transparency': 'transparent',  # Shows as free/busy
        'status': 'tentative',  # Indicates the event is not yet confirmed
        'colorId': '3',  # Orange color to highlight "to confirm" status
    }

    result = service.events().insert(
        calendarId=EMAIL,
        body=event_body
    ).execute()

    event_id = result.get('id')

    # Ajouter les liens de confirmation et d'annulation à la description
    confirm_link = f"{BASE_URL}/api/calendar/confirm/{event_id}"
    cancel_link = f"{BASE_URL}/api/calendar/events/{event_id}"

    #result['description'] = f"{description}\n\nEmail: {email}\nTéléphone: {phone}\nType: {seance_type}\n\nStatut: En attente de confirmation\n\n---\nLiens :\n✅ Confirmer le rendez-vous : POST {confirm_link}\n❌ Annuler le rendez-vous : DELETE {cancel_link}"
    result['description'] = f"{description}\n\nEmail: {email}\nTéléphone: {phone}\nType: {seance_type}\n\nStatut: En attente de confirmation"

    # Mettre à jour l'événement avec les liens
    updated_event = service.events().update(
        calendarId=EMAIL,
        eventId=event_id,
        body=result
    ).execute()

    # DEBUG: Log the actual start_time value to diagnose the format issue
    print(f"[DEBUG] start_time value before parsing: '{start_time}'")
    print(f"[DEBUG] start_time repr: {repr(start_time)}")

    # Handle both Z suffix (UTC) and timezone offset (+02:00) formats
    try:
        # Try Z suffix format first (UTC)
        parsed_time = datetime.datetime.strptime(start_time, "%Y-%m-%dT%H:%M:%SZ")
    except ValueError:
        # Fall back to timezone offset format (+02:00 or -05:00 etc.)
        try:
            parsed_time = datetime.datetime.strptime(start_time, "%Y-%m-%dT%H:%M:%S%z")
        except ValueError:
            # Fall back to format with milliseconds but no timezone
            import logging
            logging.warning(f"add_to_calendar: date '{start_time}' doesn't match Z or %z formats, trying .SSS format")
            parsed_time = datetime.datetime.strptime(start_time, "%Y-%m-%dT%H:%M:%S.%f")

    start_time = datetime.datetime.strftime(parsed_time, "%d/%m/%Y à %H:%M")

    email_subject = f"Demande de rendez-vous - {title}"
    email_body = f"""
    Bonjour {firstname},

    J'ai bien reçu Votre demande de rendez-vous pour le {start_time}.
    Merci d'attendre la confirmation de ma disponibilité pour l'inscrire dans votre agenda.

    À bientôt,
    Emilie

    ---
    Emilie Pommier - Thérapeute
    """

    send_email_smtp(email, email_subject, email_body, is_html=False)

    logger.info(f"Calendar event created: {event_id} on calendar {EMAIL}")
    return updated_event


@app.post("/api/sendemail")
def send_email(body: dict[str, str]) -> str:
  service = get_calendar_service()
  event = service.events().get(calendarId=EMAIL, eventId=body.get("event_id")).execute()
  description = event.get("description", "")
  email_match = re.search(r'Email:\s*([^\n]+)', description)
  client_email = email_match.group(1).strip() if email_match else None
  if client_email:
    send_email_smtp(to_email=client_email,subject="Message",body=body.get("body"),is_html=False)
    return "Email sent"
  else:
    return "No email sent"


@app.post("/api/calendar/confirm/{event_id}")
def confirm_event(event_id: str) -> dict[str, Any]:
    """Confirme un événement en changeant son statut à confirmed et enlevant le préfixe 'À CONFIRMER'."""
    try:
        service = get_calendar_service()

        # Récupérer l'événement
        event = service.events().get(calendarId=EMAIL, eventId=event_id).execute()

        # Modifier le titre enlevant le préfixe "À CONFIRMER - "
        summary = event.get("summary", "")
        if summary.startswith("À CONFIRMER - "):
            summary = summary[15:]  # Enlever "À CONFIRMER - "
        elif summary.startswith("À CONFIRMER "):
            summary = summary[13:]  # Enlever "À CONFIRMER "

        # Mettre à jour l'événement
        event["summary"] = summary
        event["status"] = "confirmed"
        event["colorId"] = "2"  # Green color for confirmed

        result = service.events().update(
            calendarId=EMAIL,
            eventId=event_id,
            body=event
        ).execute()

        logger.info(f"Événement confirmé: {event_id}")

        # Envoyer un email de confirmation
        description = event.get("description", "")
        email_match = re.search(r'Email:\s*([^\n]+)', description)
        client_email = email_match.group(1).strip() if email_match else None
        lieu_rendezvous="https://meet.google.com/asj-rmvq-bwb" if "visio" in event["description"] else "lieu geographique"


        if client_email and "@" in client_email:
            # Extraire les infos pour l'email
            start = event.get("start", {}).get("dateTime", "")
            end = event.get("end", {}).get("dateTime", "")

            # Formater la date et l'heure
            if start:
                try:
                    from datetime import datetime
                    start_dt = datetime.fromisoformat(start.replace('Z', '+00:00'))
                      start_str = start_dt.strftime("%d/%m/%Y à %H:%M")
                  except:
                    start_str = start
            else:
                start_str = "Non spécifiée"



            # Envoyer l'email de confirmation
            try:
                email_subject = f"Confirmation de votre rendez-vous - {summary}"
                email_body = f"""
Bonjour,

Votre rendez-vous a été confirmé :

📅 Date : {start_str}
📝 Titre : {summary}

  {lieu_rendezvous}


Je me réjouis de vous rencontrer.

À bientôt,
Emilie

---
Emilie Pommier - Thérapeute
"""

                send_email_smtp(client_email, email_subject, email_body, is_html=False)
                logger.info(f"Email de confirmation envoyé à {client_email}")
            except Exception as email_error:
                logger.error(f"Erreur lors de l'envoi de l'email de confirmation: {email_error}")
                # On ne bloque pas la confirmation si l'email échoue
        else:
            logger.warning(f"Impossible d'extraire l'email client pour l'événement {event_id}")

        return result

    except Exception as e:
        logger.error(f"Erreur lors de la confirmation de l'événement: {e}")
        raise HTTPException(status_code=500, detail=str(e))


@app.delete("/api/calendar/events/{event_id}")
def delete_event(event_id: str) -> dict[str, Any]:
    """Supprime un événement du calendrier et envoie un email d'annulation au client."""
    try:
        service = get_calendar_service()

        # Récupérer d'abord l'événement pour avoir les infos avant suppression
        event = service.events().get(calendarId=EMAIL, eventId=event_id).execute()

        # Extraire l'email du client depuis la description
        description = event.get("description", "")
        email_match = re.search(r'Email:\s*([^\n]+)', description)
        client_email = email_match.group(1).strip() if email_match else None

        summary = event.get("summary", "")
        # Enlever le préfixe "À CONFIRMER - " si présent
        if summary.startswith("À CONFIRMER - "):
            summary = summary[15:]
        elif summary.startswith("À CONFIRMER "):
            summary = summary[13:]

        start = event.get("start", {}).get("dateTime", "")
        if start:
            try:
                from datetime import datetime
                start_dt = datetime.fromisoformat(start.replace('Z', '+00:00'))
                start_str = start_dt.strftime("%d/%m/%Y à %H:%M")
            except:
                start_str = start
        else:
            start_str = "Non spécifiée"

        # Supprimer l'événement
        service.events().delete(calendarId=EMAIL, eventId=event_id).execute()
        logger.info(f"Événement supprimé: {event_id}")

        # Envoyer un email d'annulation au client
        if client_email and "@" in client_email:
            try:
                email_subject = f"Annulation de votre demande de rendez-vous"
                email_body = f"""
Bonjour,

Problème de disponibilité, votre demande de rendez-vous a été annulée :

📅 Date proposée : {start_str}
📝 Séance : {summary}

Si vous souhaitez prendre un nouveau rendez-vous, vous pouvez faire une nouvelle demande via le formulaire de réservation.

Je reste à votre disposition pour toute question.

À bientôt,
Emilie

---
Emilie Pommier - Thérapeute
"""

                send_email_smtp(client_email, email_subject, email_body, is_html=False)
                logger.info(f"Email d'annulation envoyé à {client_email}")
            except Exception as email_error:
                logger.error(f"Erreur lors de l'envoi de l'email d'annulation: {email_error}")
        else:
            logger.warning(f"Impossible d'extraire l'email client pour l'événement {event_id}")

        return {"status": "deleted", "eventId": event_id}

    except Exception as e:
        logger.error(f"Erreur lors de la suppression de l'événement: {e}")
        raise HTTPException(status_code=500, detail=str(e))


@app.post("/api/email/send")
def send_email(body: dict[str, str]) -> dict[str, Any]:
    """Send an email using Ionos SMTP server.

    Args:
        body: Dictionary with 'to', 'subject', 'body', and optional 'is_html' keys

    Returns:
        Status of the sent email
    """
    to_email = body.get("to", "")
    subject = body.get("subject", "")
    email_body = body.get("body", "")
    is_html = body.get("is_html", False)

    if not to_email or not subject or not email_body:
        raise HTTPException(status_code=400, detail="Missing required fields: to, subject, body")

    try:
        result = send_email_smtp(to_email, subject, email_body, is_html)
        logger.info(f"Email sent to {to_email}")
        return result

    except Exception as e:
        logger.error(f"Erreur lors de l'envoi de l'email: {e}")
        raise HTTPException(status_code=500, detail=str(e))


@app.get("/api/health")
def health() -> dict[str, str]:
    return {"status": "ok"}

@app.get("/api/status_variables")
def status_variable() -> dict:
    #http://127.0.0.1:8080/status
    return {"SMTP_USER": SMTP_USER,
            "SMTP_PASSWORD": SMTP_PASSWORD[:5]+"..",
            "SMTP_SERVER":SMTP_HOST,
            "SMTP_PORT":SMTP_PORT
            }



if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8080)
