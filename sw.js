const VERSION = 'v3.0';
const CACHE = `seraph-${VERSION}`;
const PRECACHE = [
  './', 'index.html', 'app.js?v=1.30', 'games-data.js?v=1.30', 'manifest.json',
  'icons/icon-192x192.png', 'icons/icon-512x512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE)
      // add one by one: a single missing file must not break the whole install
      .then(cache => Promise.allSettled(PRECACHE.map(u => cache.add(u))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;   // game iframes, thumbnails, analytics: never touched

  // Pages: network first so updates show up immediately, cache when offline
  if (req.mode === 'navigate') {
    event.respondWith(
      fetch(req)
        .then(res => { const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)); return res; })
        .catch(() => caches.match(req, { ignoreSearch: true }).then(r => r || caches.match('index.html')))
    );
    return;
  }

  // Static files: serve from cache, refresh in the background
  event.respondWith(
    caches.open(CACHE).then(cache =>
      cache.match(req).then(hit => {
        const fresh = fetch(req).then(res => { if (res.ok) cache.put(req, res.clone()); return res; });
        return hit || fresh;
      })
    ).catch(() => fetch(req))
  );
});
