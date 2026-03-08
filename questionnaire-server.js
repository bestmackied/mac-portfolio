const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3002;
const SAVE_PATH = path.join(__dirname, 'questionnaire-responses.json');
const HTML_PATH = path.join(__dirname, 'public', 'questionnaire.html');

const server = http.createServer((req, res) => {
  if (req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(fs.readFileSync(HTML_PATH, 'utf-8'));
  } else if (req.method === 'POST') {
    let body = '';
    req.on('data', c => body += c);
    req.on('end', () => {
      fs.writeFileSync(SAVE_PATH, body, 'utf-8');
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ ok: true }));
    });
  }
});

server.listen(PORT, '127.0.0.1', () => {
  console.log(`Questionnaire at http://localhost:${PORT}`);
});
