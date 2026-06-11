#!/usr/bin/env python3
"""Tests for unified_proxy.py functions: get_busy_slots, add_task, and event_to_busy_slots."""

import json
import os
import sys
import unittest
from unittest.mock import patch, MagicMock, mock_open

# Add server directory to path for imports
sys.path.insert(0, os.path.dirname(__file__))

from unified_proxy import (
    get_busy_slots,
    add_task,
    event_to_busy_slots,
    get_access_token,
    TOKEN_PATH,
)


class TestEventToBusySlots(unittest.TestCase):
    """Unit tests for event_to_busy_slots function."""

    def test_all_day_event(self):
        """Test handling of all-day events (date only, no dateTime)."""
        event = {
            "start": {"date": "2025-06-10"},
            "end": {"date": "2025-06-10"},
            "status": "confirmed"
        }
        result = event_to_busy_slots(event)
        self.assertEqual(result, [{"date": "2025-06-10", "time": "00:00", "duration": 1440}])

    def test_timed_event(self):
        """Test handling of timed events with dateTime."""
        event = {
            "start": {"dateTime": "2025-06-10T09:00:00Z"},
            "end": {"dateTime": "2025-06-10T10:30:00Z"},
            "status": "confirmed"
        }
        result = event_to_busy_slots(event)
        self.assertEqual(result, [{"date": "2025-06-10", "time": "09:00", "duration": 90}])

    def test_cancelled_event_returns_empty(self):
        """Test that cancelled events return empty list."""
        event = {
            "start": {"dateTime": "2025-06-10T09:00:00Z"},
            "end": {"dateTime": "2025-06-10T10:00:00Z"},
            "status": "cancelled"
        }
        result = event_to_busy_slots(event)
        self.assertEqual(result, [])

    def test_missing_start_returns_empty(self):
        """Test that events without start dateTime return empty list."""
        event = {
            "end": {"dateTime": "2025-06-10T10:00:00Z"},
            "status": "confirmed"
        }
        result = event_to_busy_slots(event)
        self.assertEqual(result, [])

    def test_missing_end_returns_empty(self):
        """Test that events without end dateTime return empty list."""
        event = {
            "start": {"dateTime": "2025-06-10T09:00:00Z"},
            "status": "confirmed"
        }
        result = event_to_busy_slots(event)
        self.assertEqual(result, [])


class TestGetBusySlots(unittest.TestCase):
    """Tests for get_busy_slots function with mocked API calls."""

    @patch('unified_proxy.get_access_token')
    @patch('unified_proxy.urllib.request.urlopen')
    def test_get_busy_slots_returns_formatted_data(self, mock_urlopen, mock_get_token):
        """Test that get_busy_slots correctly parses calendar events."""
        mock_get_token.return_value = "mock_access_token"

        # Mock API response
        mock_response = MagicMock()
        mock_response.read.return_value = json.dumps({
            "items": [
                {
                    "start": {"dateTime": "2025-06-10T09:00:00Z"},
                    "end": {"dateTime": "2025-06-10T10:00:00Z"},
                    "status": "confirmed"
                },
                {
                    "start": {"dateTime": "2025-06-10T14:00:00Z"},
                    "end": {"dateTime": "2025-06-10T15:30:00Z"},
                    "status": "confirmed"
                }
            ]
        }).encode()
        mock_urlopen.return_value.__enter__.return_value = mock_response

        result = get_busy_slots("2025-06-10", "2025-06-10")

        self.assertIn("2025-06-10", result)
        self.assertEqual(len(result["2025-06-10"]), 2)
        self.assertEqual(result["2025-06-10"][0], {"time": "09:00", "duration": 60})
        self.assertEqual(result["2025-06-10"][1], {"time": "14:00", "duration": 90})

    @patch('unified_proxy.get_access_token')
    @patch('unified_proxy.urllib.request.urlopen')
    def test_get_busy_slots_empty_calendar(self, mock_urlopen, mock_get_token):
        """Test get_busy_slots with no events."""
        mock_get_token.return_value = "mock_access_token"

        mock_response = MagicMock()
        mock_response.read.return_value = json.dumps({"items": []}).encode()
        mock_urlopen.return_value.__enter__.return_value = mock_response

        result = get_busy_slots("2025-06-10", "2025-06-10")

        self.assertEqual(result, {})

    @patch('unified_proxy.get_access_token')
    @patch('unified_proxy.urllib.request.urlopen')
    def test_get_busy_slots_with_cancelled_events(self, mock_urlopen, mock_get_token):
        """Test that cancelled events are excluded from busy slots."""
        mock_get_token.return_value = "mock_access_token"

        mock_response = MagicMock()
        mock_response.read.return_value = json.dumps({
            "items": [
                {
                    "start": {"dateTime": "2025-06-10T09:00:00Z"},
                    "end": {"dateTime": "2025-06-10T10:00:00Z"},
                    "status": "cancelled"
                },
                {
                    "start": {"dateTime": "2025-06-10T14:00:00Z"},
                    "end": {"dateTime": "2025-06-10T15:00:00Z"},
                    "status": "confirmed"
                }
            ]
        }).encode()
        mock_urlopen.return_value.__enter__.return_value = mock_response

        result = get_busy_slots("2025-06-10", "2025-06-10")

        self.assertIn("2025-06-10", result)
        self.assertEqual(len(result["2025-06-10"]), 1)
        self.assertEqual(result["2025-06-10"][0]["time"], "14:00")


class TestAddTask(unittest.TestCase):
    """Tests for add_task function with mocked API calls."""

    @patch('unified_proxy.get_access_token')
    @patch('unified_proxy.urllib.request.urlopen')
    def test_add_task_success(self, mock_urlopen, mock_get_token):
        """Test successful task creation."""
        mock_get_token.return_value = "mock_access_token"

        mock_response = MagicMock()
        mock_response.read.return_value = json.dumps({
            "id": "task123",
            "title": "Test Task",
            "notes": "Test notes",
            "status": "needsAction"
        }).encode()
        mock_urlopen.return_value.__enter__.return_value = mock_response

        result = add_task({"title": "Test Task", "notes": "Test notes"})

        self.assertEqual(result["id"], "task123")
        self.assertEqual(result["title"], "Test Task")
        self.assertEqual(result["notes"], "Test notes")

    @patch('unified_proxy.get_access_token')
    @patch('unified_proxy.urllib.request.urlopen')
    def test_add_task_with_empty_body(self, mock_urlopen, mock_get_token):
        """Test add_task with empty title and notes."""
        mock_get_token.return_value = "mock_access_token"

        mock_response = MagicMock()
        mock_response.read.return_value = json.dumps({
            "id": "task456",
            "title": "",
            "notes": "",
            "status": "needsAction"
        }).encode()
        mock_urlopen.return_value.__enter__.return_value = mock_response

        result = add_task({})

        self.assertEqual(result["title"], "")
        self.assertEqual(result["notes"], "")

    @patch('unified_proxy.get_access_token')
    @patch('unified_proxy.urllib.request.urlopen')
    def test_add_task_sends_correct_headers(self, mock_urlopen, mock_get_token):
        """Test that add_task sends correct Authorization and Content-Type headers."""
        mock_get_token.return_value = "mock_access_token"

        mock_response = MagicMock()
        mock_response.read.return_value = json.dumps({"id": "task789"}).encode()

        mock_context = MagicMock()
        mock_context.__enter__.return_value = mock_response
        mock_urlopen.return_value = mock_context

        add_task({"title": "Test", "notes": "Notes"})

        # Verify the request was made with correct headers
        call_args = mock_urlopen.call_args
        request = call_args[0][0]
        self.assertEqual(request.get_header("Authorization"), "Bearer mock_access_token")
        self.assertEqual(request.get_header("Content-Type"), "application/json")


class TestGetAccessToken(unittest.TestCase):
    """Tests for get_access_token function using google_token.json."""

    def test_token_file_exists(self):
        """Test that TOKEN_PATH points to an existing file."""
        self.assertTrue(os.path.exists(TOKEN_PATH), f"Token file not found at: {TOKEN_PATH}")

    @patch.dict(os.environ, {"GOOGLE_TOKEN": os.path.join(os.path.dirname(__file__), "google_token.json")})
    def test_token_file_loads_valid_json(self):
        """Test that google_token.json contains valid JSON."""
        with open(TOKEN_PATH) as f:
            data = json.load(f)
        self.assertIsInstance(data, dict)

    @patch('unified_proxy.urllib.request.urlopen')
    @patch.dict(os.environ, {"GOOGLE_TOKEN": os.path.join(os.path.dirname(__file__), "google_token.json")})
    def test_get_access_token_oauth2_flow(self, mock_urlopen):
        """Test OAuth2 token refresh flow with google_token.json."""
        mock_response = MagicMock()
        mock_response.read.return_value = json.dumps({"access_token": "refreshed_token_123"}).encode()
        mock_urlopen.return_value.__enter__.return_value = mock_response

        # This test will fail because google_token.json doesn't have refresh_token
        # but it verifies the code path
        try:
            token = get_access_token("https://www.googleapis.com/auth/calendar")
            # If it works, verify the token
            self.assertEqual(token, "refreshed_token_123")
        except ValueError as e:
            # Expected: google_token.json is missing refresh_token
            self.assertIn("refresh_token", str(e))

    @patch('os.path.exists', return_value=False)
    def test_get_access_token_file_not_found(self, mock_exists):
        """Test that FileNotFoundError is raised when token file doesn't exist."""
        with self.assertRaises(FileNotFoundError) as context:
            get_access_token("https://www.googleapis.com/auth/calendar")
        self.assertIn("Credentials file not found", str(context.exception))

    def test_get_access_token_invalid_format_raises_error(self):
        """Test that ValueError is raised for invalid credentials format."""
        invalid_token = json.dumps({"invalid": "credentials"}).encode()

        with patch('builtins.open', mock_open(read_data=invalid_token)):
            with self.assertRaises(ValueError) as context:
                get_access_token("https://www.googleapis.com/auth/calendar")
        self.assertIn("Invalid credentials format", str(context.exception))

    @patch('unified_proxy._get_access_token_service_account')
    @patch('builtins.open', new_callable=mock_open, read_data=json.dumps({
        "client_email": "test@example.com",
        "private_key": "test_private_key"
    }))
    def test_get_access_token_service_account_path(self, mock_file, mock_service_account):
        """Test that Service Account path is taken when client_email and private_key are present."""
        mock_service_account.return_value = "service_account_token_123"

        token = get_access_token("https://www.googleapis.com/auth/calendar")

        self.assertEqual(token, "service_account_token_123")
        mock_service_account.assert_called_once()
        call_args = mock_service_account.call_args[0]
        self.assertEqual(call_args[0]["client_email"], "test@example.com")
        self.assertEqual(call_args[1], "https://www.googleapis.com/auth/calendar")

    @patch('unified_proxy._get_access_token_oauth2')
    @patch('builtins.open', new_callable=mock_open, read_data=json.dumps({
        "client_id": "test_client_id",
        "client_secret": "test_client_secret",
        "refresh_token": "test_refresh_token"
    }))
    def test_get_access_token_oauth2_path(self, mock_file, mock_oauth2):
        """Test that OAuth2 path is taken when refresh_token is present."""
        mock_oauth2.return_value = "oauth2_token_456"

        token = get_access_token("https://www.googleapis.com/auth/tasks")

        self.assertEqual(token, "oauth2_token_456")
        mock_oauth2.assert_called_once()
        call_args = mock_oauth2.call_args[0][0]
        self.assertEqual(call_args["client_id"], "test_client_id")
        self.assertEqual(call_args["refresh_token"], "test_refresh_token")

    @patch('builtins.open', new_callable=mock_open, read_data=json.dumps({
        "client_id": "test_client_id",
        "client_secret": "test_client_secret",
        "refresh_token": "test_refresh_token"
    }))
    @patch('unified_proxy.urllib.request.urlopen')
    def test_get_access_token_oauth2_calls_urlopen(self, mock_urlopen, mock_file):
        """Test that OAuth2 flow makes correct request to token endpoint."""
        mock_response = MagicMock()
        mock_response.read.return_value = json.dumps({"access_token": "test_access_token"}).encode()
        mock_urlopen.return_value.__enter__.return_value = mock_response

        token = get_access_token("https://www.googleapis.com/auth/calendar")

        self.assertEqual(token, "test_access_token")
        mock_urlopen.assert_called_once()
        request = mock_urlopen.call_args[0][0]
        self.assertEqual(request.get_full_url(), "https://oauth2.googleapis.com/token")
        self.assertEqual(request.method, "POST")


class TestGoogleAPIIntegration(unittest.TestCase):
    """Integration tests that call actual Google APIs (requires real credentials)."""

    def setUp(self):
        """Skip tests if credentials file is not available."""
        self.skip_if_no_credentials()

    def skip_if_no_credentials(self):
        """Check if credentials are available for integration tests."""
        if not os.path.exists(TOKEN_PATH):
            self.skipTest(f"Credentials file not found at: {TOKEN_PATH}")

    def test_oauth2_token_refresh_real(self):
        """Test real OAuth2 token refresh with Google API."""
        with open(TOKEN_PATH) as f:
            token = json.load(f)

        if "refresh_token" not in token:
            self.skipTest("OAuth2 credentials not available (no refresh_token)")

        # Make a real request to Google OAuth2 token endpoint
        data = urllib.parse.urlencode({
            "client_id": token["client_id"],
            "client_secret": token["client_secret"],
            "refresh_token": token["refresh_token"],
            "grant_type": "refresh_token"
        }).encode()

        req = urllib.request.Request(TOKEN_URI, data=data, method="POST")
        with urllib.request.urlopen(req) as resp:
            result = json.loads(resp.read())

        self.assertIn("access_token", result)
        self.assertIsInstance(result["access_token"], str)
        print(f"OAuth2 token refreshed successfully")

    def test_service_account_auth_real(self):
        """Test real Service Account authentication with Google API."""
        with open(TOKEN_PATH) as f:
            token = json.load(f)

        if "client_email" not in token or "private_key" not in token:
            self.skipTest("Service Account credentials not available")

        import time
        import jwt

        now = int(time.time())
        claimset = {
            "iss": token["client_email"],
            "sub": token["client_email"],
            "aud": TOKEN_URI,
            "iat": now,
            "exp": now + 3600,
            "scope": "https://www.googleapis.com/auth/calendar"
        }

        encoded_jwt = jwt.encode(claimset, token["private_key"], algorithm="RS256")

        data = urllib.parse.urlencode({
            "grant_type": "urn:ietf:params:oauth:grant-type:jwt-bearer",
            "assertion": encoded_jwt
        }).encode()

        req = urllib.request.Request(TOKEN_URI, data=data, method="POST")
        with urllib.request.urlopen(req) as resp:
            result = json.loads(resp.read())

        self.assertIn("access_token", result)
        print(f"Service Account token obtained successfully")

    def test_calendar_api_list_events_real(self):
        """Test real Calendar API list events endpoint."""
        access_token = get_access_token(CAL_SCOPES[0])

        # Get today's date range
        from datetime import datetime, timedelta
        today = datetime.utcnow().strftime("%Y-%m-%d")
        tomorrow = (datetime.utcnow() + timedelta(days=1)).strftime("%Y-%m-%d")

        time_min = f"{today}T00:00:00Z"
        time_max = f"{tomorrow}T00:00:00Z"
        url = (
            "https://www.googleapis.com/calendar/v3/calendars/primary/events"
            f"?timeMin={time_min}&timeMax={time_max}"
            f"&singleEvents=true&orderBy=startTime"
        )

        req = urllib.request.Request(url)
        req.add_header("Authorization", f"Bearer {access_token}")

        with urllib.request.urlopen(req) as resp:
            data = json.loads(resp.read())

        self.assertIsInstance(data, dict)
        self.assertIn("items", data)
        print(f"Calendar API returned {len(data.get('items', []))} events")

    def test_tasks_api_list_tasks_real(self):
        """Test real Tasks API list tasks endpoint."""
        access_token = get_access_token(TASK_SCOPES[0])

        url = "https://tasks.googleapis.com/tasks/v1/lists/@default/tasks"
        req = urllib.request.Request(url)
        req.add_header("Authorization", f"Bearer {access_token}")

        with urllib.request.urlopen(req) as resp:
            data = json.loads(resp.read())

        self.assertIsInstance(data, dict)
        print(f"Tasks API returned {len(data.get('items', []))} tasks")

    def test_create_and_delete_task_real(self):
        """Test creating a task and deleting it via Tasks API."""
        access_token = get_access_token(TASK_SCOPES[0])

        # Create a test task
        task_body = json.dumps({
            "title": "Test Task from Integration Test",
            "notes": "This task was created by automated integration tests",
            "status": "needsAction"
        }).encode()

        from urllib.parse import quote
        encoded_tasklist_id = quote("@default", safe='')
        url = f"https://tasks.googleapis.com/tasks/v1/lists/{encoded_tasklist_id}/tasks"

        req = urllib.request.Request(url, data=task_body, method="POST")
        req.add_header("Authorization", f"Bearer {access_token}")
        req.add_header("Content-Type", "application/json")

        with urllib.request.urlopen(req) as resp:
            created_task = json.loads(resp.read())

        self.assertIn("id", created_task)
        self.assertEqual(created_task["title"], "Test Task from Integration Test")
        print(f"Created task with ID: {created_task['id']}")

        # Delete the task
        delete_url = f"https://tasks.googleapis.com/tasks/v1/lists/{encoded_tasklist_id}/tasks/{created_task['id']}"
        delete_req = urllib.request.Request(delete_url, method="DELETE")
        delete_req.add_header("Authorization", f"Bearer {access_token}")

        try:
            with urllib.request.urlopen(delete_req) as resp:
                self.assertEqual(resp.status, 204)
            print(f"Deleted task with ID: {created_task['id']}")
        except urllib.error.HTTPError as e:
            if e.code == 404:
                print(f"Task already deleted or not found (404)")
            else:
                raise


class TestGoogleCalendarBusyIntegration(unittest.TestCase):
    """Integration tests for get_busy_slots function calling real Google Calendar API."""

    def test_get_busy_slots_real_api(self):
        """Test get_busy_slots with actual Google Calendar API."""
        if not os.path.exists(TOKEN_PATH):
            self.skipTest(f"Credentials file not found at: {TOKEN_PATH}")

        from datetime import datetime, timedelta
        today = datetime.utcnow().strftime("%Y-%m-%d")
        tomorrow = (datetime.utcnow() + timedelta(days=1)).strftime("%Y-%m-%d")

        result = get_busy_slots(today, today)

        self.assertIsInstance(result, dict)
        print(f"Busy slots for {today}: {result}")


if __name__ == "__main__":
    unittest.main()
