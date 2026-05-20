const CACHE_NAME = "eventim-br-v1";

self.addEventListener("install", () => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        }),
      );
    }),
  );
  event.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", (event) => {
  // Ignore Expo bundles and JS files to prevent caching issues
  if (
    event.request.url.includes("/_expo/") ||
    event.request.url.includes(".js")
  ) {
    return;
  }

  // Network-first strategy, optional cache fallback for simple assets
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request)),
  );
});
