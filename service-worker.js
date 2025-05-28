self.addEventListener('install', e => {
  self.skipWaiting();
  e.waitUntil(caches.open('placeholder-v1').then(cache =>
    cache.addAll([
      '/',
      '/index.html',
      '/app.js',
      '/manifest.json',
      'https://fonts.googleapis.com/css2?family=Inter:wght@300;700&display=swap',
      'https://cdn.jsdelivr.net/npm/chart.js'
    ])
  ));
});
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request)
      .then(response => response || fetch(e.request))
  );
});
