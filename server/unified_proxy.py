# Standalone proxy: Calendar busy slots + Tasks creation
# Uses google-api-python-client for Google Calendar and Tasks APIs
import os
from typing import Any
import logging

# Configure logging
logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)

from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse

from google.oauth2 import service_account
from googleapiclient.discovery import build

SCOPES = [
    "https://www.googleapis.com/auth/calendar",
    "https://www.googleapis.com/auth/tasks"
]
TASKLIST_ID = "@default"

_calendar_service = None
_tasks_service = None

ALLOWED_ORIGINS = [
    "https://f80dev.github.io",
    "https://emilietherapie.netlify.app",
    "https://emiliepommier.fr",
    "http://localhost:4200",
    "http://127.0.0.1:4200"
]
ALLOWED_REFERERS = [".github.io", "netlify.app", "vercel.app", "cloudflarepages.com"]

app = FastAPI()


SERVICE_ACCOUNT_PATH = r"C:\Users\hhoar\IdeaProjects\EmilieTherapie\server\google_service_account.json"


def get_credentials():
    """Get Google credentials from Service Account (no OAuth/browser needed)."""
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
        calendarId='primary',
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

    from urllib.parse import quote
    encoded_tasklist_id = quote(TASKLIST_ID, safe='')

    result = service.tasks().insert(
        tasklist=encoded_tasklist_id,
        body=task_body
    ).execute()

    logger.info(f"Task created: {result.get('id')}")
    return result


@app.get("/health")
def health() -> dict[str, str]:
    return {"status": "ok"}


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8080)
