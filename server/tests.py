import json
from unittest.mock import patch, mock_open

import pytest
from fastapi.testclient import TestClient

from unified_proxy import app

client = TestClient(app,base_url="http://localhost:3001")


class MockResponse:
    def __init__(self, data):
        self._data = data

    def read(self):
        return json.dumps(self._data).encode()

    def __enter__(self):
        return self

    def __exit__(self, *args):
        pass


def mock_urlopen(req):
    url = req.full_url if hasattr(req, 'full_url') else req.get_full_url()
    if "calendar/v3" in url:
        return MockResponse({
            "items": [
                {
                    "id": "event1",
                    "status": "confirmed",
                    "start": {"dateTime": "2025-01-15T09:00:00+01:00"},
                    "end": {"dateTime": "2025-01-15T10:30:00+01:00"}
                },
                {
                    "id": "event2",
                    "status": "confirmed",
                    "start": {"dateTime": "2025-01-15T14:00:00+01:00"},
                    "end": {"dateTime": "2025-01-15T15:00:00+01:00"}
                },
                {
                    "id": "event3",
                    "status": "cancelled",
                    "start": {"dateTime": "2025-01-16T10:00:00+01:00"},
                    "end": {"dateTime": "2025-01-16T11:00:00+01:00"}
                }
            ]
        })
    elif "tasks/v1" in url:
        return MockResponse({
            "id": "task123",
            "title": req.data.decode() if req.data else "",
            "status": "needsAction"
        })
    raise ValueError(f"Unexpected URL: {url}")


@pytest.fixture
def mock_token():
    token_data = json.dumps({
        "client_id": "test_client_id",
        "client_secret": "test_client_secret",
        "refresh_token": "test_refresh_token"
    })
    with patch("builtins.open", mock_open(read_data=token_data)):
        yield


class TestCalendarBusySlots:
    """Tests for GET /api/calendar/busy endpoint."""

    def test_get_busy_slots_returns_dict(self, mock_token):
        with patch("urllib.request.urlopen", mock_urlopen):
            response = client.get("/api/calendar/busy?start=2025-01-15&end=2025-01-15")
        assert response.status_code == 200
        assert isinstance(response.json(), dict)

    def test_get_busy_slots_contains_date(self, mock_token):
        with patch("urllib.request.urlopen", mock_urlopen):
            response = client.get("/api/calendar/busy?start=2025-01-15&end=2025-01-15")
        data = response.json()
        assert "2025-01-15" in data

    def test_get_busy_slots_has_time_and_duration(self, mock_token):
        with patch("urllib.request.urlopen", mock_urlopen):
            response = client.get("/api/calendar/busy?start=2025-01-15&end=2025-01-15")
        data = response.json()
        slots = data["2025-01-15"]
        assert len(slots) == 2
        assert slots[0]["time"] == "09:00"
        assert slots[0]["duration"] == 90
        assert slots[1]["time"] == "14:00"
        assert slots[1]["duration"] == 60

    def test_get_busy_slots_excludes_cancelled_events(self, mock_token):
        with patch("urllib.request.urlopen", mock_urlopen):
            response = client.get("/api/calendar/busy?start=2025-01-15&end=2025-01-16")
        data = response.json()
        if "2025-01-16" in data:
            for slot in data["2025-01-16"]:
                assert slot.get("status") != "cancelled"
        assert "2025-01-16" not in data or len(data.get("2025-01-16", [])) == 0

    def test_get_busy_slots_missing_params_returns_422(self):
        response = client.get("/api/calendar/busy")
        assert response.status_code == 422


class TestAddTask:
    """Tests for POST /api/tasks/add-task endpoint."""

    def test_add_task_returns_dict(self, mock_token):
        with patch("urllib.request.urlopen", mock_urlopen):
            response = client.post(
                "/api/tasks/add-task",
                json={"title": "Test Task", "notes": "Test notes"}
            )
        assert response.status_code == 200
        assert isinstance(response.json(), dict)

    def test_add_task_with_title_only(self, mock_token):
        with patch("urllib.request.urlopen", mock_urlopen):
            response = client.post(
                "/api/tasks/add-task",
                json={"title": "Only Title Task"}
            )
        assert response.status_code == 200
        data = response.json()
        assert "id" in data
        assert data["status"] == "needsAction"

    def test_add_task_with_title_and_notes(self, mock_token):
        with patch("urllib.request.urlopen", mock_urlopen):
            response = client.post(
                "/api/tasks/add-task",
                json={"title": "Task with notes", "notes": "Important details here"}
            )
        assert response.status_code == 200
        data = response.json()
        assert "id" in data

    def test_add_task_empty_body(self, mock_token):
        with patch("urllib.request.urlopen", mock_urlopen):
            response = client.post("/api/tasks/add-task", json={})
        assert response.status_code == 200


class TestHealthEndpoint:
    """Tests for GET /health endpoint."""

    def test_health_returns_ok(self):
        response = client.get("/health")
        assert response.status_code == 200
        assert response.json() == {"status": "ok"}


class TestEventToBusySlots:
    """Tests for the event_to_busy_slots helper function."""

    def test_confirmed_event_with_datetimestamp(self):
        from unified_proxy import event_to_busy_slots
        event = {
            "status": "confirmed",
            "start": {"dateTime": "2025-01-15T09:00:00+01:00"},
            "end": {"dateTime": "2025-01-15T10:30:00+01:00"}
        }
        slots = event_to_busy_slots(event)
        assert len(slots) == 1
        assert slots[0]["date"] == "2025-01-15"
        assert slots[0]["time"] == "09:00"
        assert slots[0]["duration"] == 90

    def test_cancelled_event_returns_empty(self):
        from unified_proxy import event_to_busy_slots
        event = {
            "status": "cancelled",
            "start": {"dateTime": "2025-01-15T09:00:00+01:00"},
            "end": {"dateTime": "2025-01-15T10:30:00+01:00"}
        }
        slots = event_to_busy_slots(event)
        assert slots == []

    def test_all_day_event_with_date_only(self):
        from unified_proxy import event_to_busy_slots
        event = {
            "status": "confirmed",
            "start": {"date": "2025-01-15"},
            "end": {"date": "2025-01-15"}
        }
        slots = event_to_busy_slots(event)
        assert len(slots) == 1
        assert slots[0]["date"] == "2025-01-15"
        assert slots[0]["time"] == "00:00"
        assert slots[0]["duration"] == 1440

    def test_event_missing_datetimestamp_returns_empty(self):
        from unified_proxy import event_to_busy_slots
        event = {
            "status": "confirmed",
            "start": {},
            "end": {}
        }
        slots = event_to_busy_slots(event)
        assert slots == []
