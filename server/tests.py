from unified_proxy import get_calendar_service

YOUR_EMAIL = "pommier.therapeute@gmail.com"

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
