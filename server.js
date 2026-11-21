import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = process.env.PORT || 3000;
const PUBLIC_DIR = __dirname;

const MIME_TYPES = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.docx': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
};

const server = http.createServer((req, res) => {
  // CORS Headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  const parsedUrl = new URL(req.url, `http://${req.headers.host}`);
  let pathname = parsedUrl.pathname;

  // REST API Endpoints (as defined in SRS Section 3.1 & 3.2)
  if (pathname.startsWith('/api/')) {
    res.setHeader('Content-Type', 'application/json');

    // 1. Health check & status
    if (pathname === '/api/status') {
      res.writeHead(200);
      res.end(JSON.stringify({ status: 'ok', app: 'AniTrack API', version: '1.0.0' }));
      return;
    }

    // 2. Authentication (FR1, FR11)
    if (pathname === '/api/auth/login' && req.method === 'POST') {
      let body = '';
      req.on('data', chunk => { body += chunk; });
      req.on('end', () => {
        try {
          const data = JSON.parse(body || '{}');
          const username = data.username || 'Harish';
          const token = `jwt.${Buffer.from(username).toString('base64')}.${Date.now()}`;
          res.writeHead(200);
          res.end(JSON.stringify({
            token,
            user: {
              username,
              displayName: username,
              email: `${username.toLowerCase()}@anitrack.io`,
              avatar: './assets/avatar.png'
            }
          }));
        } catch (e) {
          res.writeHead(400);
          res.end(JSON.stringify({ error: 'Invalid JSON payload' }));
        }
      });
      return;
    }

    // Default API 404
    res.writeHead(404);
    res.end(JSON.stringify({ error: 'API route not found' }));
    return;
  }

  // Static File Serving
  if (pathname === '/' || pathname === '') {
    pathname = '/index.html';
  }

  const filePath = path.join(PUBLIC_DIR, decodeURIComponent(pathname));

  // Security: prevent path traversal outside workspace
  if (!filePath.startsWith(PUBLIC_DIR)) {
    res.writeHead(403);
    res.end('Forbidden');
    return;
  }

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      // SPA Fallback: serve index.html for unknown web paths
      const indexFile = path.join(PUBLIC_DIR, 'index.html');
      fs.readFile(indexFile, (readErr, content) => {
        if (readErr) {
          res.writeHead(404);
          res.end('Not Found');
        } else {
          res.writeHead(200, { 'Content-Type': 'text/html' });
          res.end(content);
        }
      });
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    fs.readFile(filePath, (readErr, content) => {
      if (readErr) {
        res.writeHead(500);
        res.end('Error loading file');
      } else {
        res.writeHead(200, { 'Content-Type': contentType });
        res.end(content);
      }
    });
  });
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`AniTrack Server is running at http://localhost:${PORT}`);
});
