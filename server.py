import http.server
import socketserver
import os
import sys

PORT = 3000
os.chdir(os.path.dirname(os.path.abspath(__file__)))

class Handler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Access-Control-Allow-Origin', '*')
        super().end_headers()

with socketserver.TCPServer(("", PORT), Handler) as httpd:
    print(f"====================================================")
    print(f" AniTrack is running at http://localhost:{PORT}")
    print(f"====================================================")
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\nStopping server.")
