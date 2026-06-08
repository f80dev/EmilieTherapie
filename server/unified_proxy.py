# Standalone proxy: Calendar busy slots + Tasks creation
# No external script dependency — calls Google APIs directly via requests
import json
import os
import urllib.parse
import urllib.request
from typing import Any

from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse

TOKEN_PATH = os.environ.get("GOOGLE_TOKEN", "/app/google_token.json")
TOKEN_URI = "https://oauth2.googleapis.com/token"
CAL_SCOPES = ["https://www.googleapis.com/auth/calendar"]
TASK_SCOPES = ["https://www.googleapis.com/auth/tasks"]
TASKLIST_ID = "MjlDa2tRTnk1Mjl2T1FYcA"

ALLOWED_ORIGINS = [
    "https://f80dev.github.io",
    "https://emilietherapie.netlify.app",
    "https://emiliepommier.fr"
]
ALLOWED_REFERERS = [".github.io", "netlify.app", "vercel.app", "cloudflarepages.com"]

app = FastAPI()


@app.middleware("http")
async def verify_referer(request: Request, call_next):
    origin = request.headers.get("origin", "")
    referer = request.headers.get("referer", "")
    path = request.url.path

    if path == "/health":
        return await call_next(request)

    if path.startswith("/api"):
        allowed = (
            origin in ALLOWED_ORIGINS
            or any(r in referer for r in ALLOWED_REFERERS) if referer else False
        )
        if not allowed:
            return JSONResponse(status_code=403, content={"error": "Forbidden"})

    return await call_next(request)


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["GET", "POST", "OPTIONS"],
    allow_headers=["Content-Type"],
)


def get_access_token(scope: str) -> str:
    with open(TOKEN_PATH) as f:
        token = json.load(f)
    body = urllib.parse.urlencode({
        "client_id": token["client_id"],
        "client_secret": token["client_secret"],
        "refresh_token": token["refresh_token"],
        "grant_type": "refresh_token",
    }).encode()
    req = urllib.request.Request(TOKEN_URI, data=body, method="POST")
    req.add_header("Content-Type", "application/x-www-form-urlencoded")
    with urllib.request.urlopen(req) as resp:
        return json.loads(resp.read())["access_token"]


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
    access_token = get_access_token(CAL_SCOPES[0])
    time_min = f"{start}T00:00:00Z"
    time_max = f"{end}T23:59:59Z"
    url = (
        "https://www.googleapis.com/calendar/v3/calendars/primary/events"
        f"?timeMin={time_min}&timeMax={time_max}"
        f"&singleEvents=true&orderBy=startTime"
    )
    req = urllib.request.Request(url)
    req.add_header("Authorization", f"Bearer {access_token}")
    with urllib.request.urlopen(req) as resp:
        data = json.loads(resp.read())
    busy_map: dict[str, list[dict[str, Any]]] = {}
    for event in data.get("items", []):
        for slot in event_to_busy_slots(event):
            busy_map.setdefault(slot["date"], []).append({"time": slot["time"], "duration": slot["duration"]})
    return busy_map


@app.post("/api/tasks/add-task")
def add_task(body: dict[str, str]) -> dict[str, Any]:
    title = body.get("title", "")
    notes = body.get("notes", "")
    access_token = get_access_token(TASK_SCOPES[0])
    task_body = json.dumps({"title": title, "notes": notes, "status": "needsAction"}).encode()
    req = urllib.request.Request(
        f"https://tasks.googleapis.com/tasks/v1/lists/{TASKLIST_ID}/tasks",
        data=task_body, method="POST"
    )
    req.add_header("Authorization", f"Bearer {access_token}")
    req.add_header("Content-Type", "application/json")
    with urllib.request.urlopen(req) as resp:
        return json.loads(resp.read())


@app.get("/health")
def health() -> dict[str, str]:
    return {"status": "ok"}


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8080)
