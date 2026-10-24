import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { extname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('.', import.meta.url));
const types = { '.html': 'text/html; charset=utf-8', '.svg': 'image/svg+xml' };

const server = createServer(async (request, response) => {
  const pathname = new URL(request.url, 'http://127.0.0.1').pathname;
  const file = pathname === '/' ? 'index.html' : pathname.replace(/^\//, '');
  const path = join(root, file);
  try {
    const body = await readFile(path);
    response.writeHead(200, { 'Content-Type': types[extname(path)] ?? 'application/octet-stream', 'Cache-Control': 'no-store' });
    response.end(body);
  } catch {
    response.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    response.end('Not found');
  }
});

server.listen(4173, '127.0.0.1', () => console.log('Local exercise: http://127.0.0.1:4173'));
for (const signal of ['SIGINT', 'SIGTERM']) process.on(signal, () => server.close());
