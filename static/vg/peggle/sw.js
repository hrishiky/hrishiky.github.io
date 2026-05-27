const overrides = {};

self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));

self.addEventListener('message', e => {
  if (e.data.type === 'CLEAR') {
    for (const k in overrides) delete overrides[k];
    e.source.postMessage({ type: 'ACK', action: 'CLEAR' });
  }
  if (e.data.type === 'OVERRIDE') {
    overrides[e.data.filename] = e.data.buffer;
    e.source.postMessage({ type: 'ACK', filename: e.data.filename });
  }
});

self.addEventListener('fetch', e => {
  const filename = e.request.url.split('/').pop().split('?')[0];
  if (overrides[filename]) {
    e.respondWith(new Response(overrides[filename]));
  }
});
