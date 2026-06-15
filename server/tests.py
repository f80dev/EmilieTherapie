from unified_proxy import get_calendar_service, send_email_smtp, app

YOUR_EMAIL = "hhoareau@gmail.com"

try:
    from fastapi.testclient import TestClient
except ImportError:
    # Fallback for older FastAPI versions
    from starlette.testclient import TestClient

client = TestClient(app)

def test_direct_access():
  service = get_calendar_service()
  # REMPLACEZ par votre email personnel configuré dans le partage

  try:
    # On utilise .calendars().get() au lieu de .calendarList().list()
    calendar = service.calendars().get(calendarId=YOUR_EMAIL).execute()
    print(f"Succès ! Accès au calendrier : {calendar.get('summary')}")
    return calendar
  except Exception as e:
    print(f"Échec : {e}")


def test_get_slot():
  time_min = f"2026-06-01T00:00:00Z"
  time_max = f"2026-06-30T23:59:59Z"
  service = get_calendar_service()
  events_result = service.events().list(
    calendarId=YOUR_EMAIL,
    timeMin=time_min,
    timeMax=time_max,
    singleEvents=True,
    orderBy='startTime'
  ).execute()

  assert len(events_result.items)>0


def test_send_email_smtp():
    """Test sending an email via SMTP using Ionos server."""
    result = send_email_smtp(
        to_email=YOUR_EMAIL,
        subject="Test Email - pytest",
        body="This is a test email sent via SMTP to verify the configuration.",
        is_html=False
    )
    assert result["status"] == "sent"
    assert result["to"] == YOUR_EMAIL
    print(f"Email sent successfully to {YOUR_EMAIL}")


def test_send_email_api():
    """Test the /api/email/send web service endpoint."""
    response = client.post(
        "/api/email/send",
        json={
            "to": YOUR_EMAIL,
            "subject": "Test Email API - pytest",
            "body": "This is a test email sent via the /api/email/send endpoint.",
            "is_html": False
        }
    )
    assert response.status_code == 200
    data = response.json()
    assert data["status"] == "sent"
    assert data["to"] == YOUR_EMAIL
    print(f"Email sent successfully via API to {YOUR_EMAIL}")


def test_send_email_api_missing_fields():
    """Test the /api/email/send endpoint with missing required fields."""
    response = client.post(
        "/api/email/send",
        json={
            "to": YOUR_EMAIL
            # Missing subject and body
        }
    )
    assert response.status_code == 400
    data = response.json()
    assert "detail" in data
    print("Missing fields validation works correctly")
