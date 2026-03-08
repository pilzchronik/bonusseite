var CACHE_NAME = 'archiv-cache-v3';
var urlsToCache = [
  '/bonusseite/archiv/',
  '/bonusseite/archiv/index.html',
  '/bonusseite/archiv/manifest.json'
];

self.addEventListener('install', function(event) {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('activate', function(event) {
  event.waitUntil(self.clients.claim());
  // Löscht alte Caches, damit die neue Version greift
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Gibt die gecachte Version zurück oder lädt sie aus dem Netz
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
