#!/usr/bin/env python3
"""Google Tasks proxy for EmilieTherapie — adds RDV tasks to emilietherapie tasklist."""

import json, subprocess, signal, sys
from http.server import HTTPServer, BaseHTTPRequestHandler
from urllib.parse import parse_qs

TASKLIST_ID = "MjlDa2tRTnk1Mjl2T1FYcA"
GAPI = "/home/hhoareau/.hermes/skills/productivity/google-workspace/scripts/google_api.py"

class TaskHandler(BaseHTTPRequestHandler):
    def do_OPTIONS(self):
        self.send_response(204)
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "POST")
        self.send_header("Access-Control-Allow-Headers", "Content-Type")
        self.end_headers()

    def do_POST(self):
        if self.path != "/add-task":
            self.send_response(404)
            self.end_headers()
            return

        length = int(self.headers.get("Content-Length", 0))
        body = self.rfile.read(length).decode()
        data = json.loads(body)
        title = data.get("title", "")
        notes = data.get("notes", "")

        # Call google_api.py to create the task
        result = subprocess.run(
            ["python", GAPI, "tasks", "create", title,
             "--tasklist", TASKLIST_ID, "--notes", notes],
            capture_output=True, text=True
        )

        self.send_response(200)
        self.send_header("Content-Type", "application/json")
        self.send_header("Access-Control-Allow-Origin", "*")
        self.end_headers()
        self.wfile.write(result.stdout.encode())

    def log_message(self, fmt, *args):
        pass  # silence server logs

if __name__ == "__main__":
    port = int(sys.argv[1]) if len(sys.argv) > 1 else 3001
    server = HTTPServer(("localhost", port), TaskHandler)
    print(f"Tasks proxy running on port {port}", flush=True)
    server.serve_forever()