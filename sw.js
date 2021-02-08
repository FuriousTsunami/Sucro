// Define Cache Prerequisites
const cacheName = "CacheV1";
const filestoCache = [
  "/",
  "/index.html",
  "/app.js",
  "/CNAME",
  "/CSS/body.css",
  "/CSS/custom.css",
  "/CSS/heading.css",
  "/CSS/main.css",
  "/JavaScript/bootstrap.min.js",
  "/JavaScript/easing.min.js",
  "/JavaScript/fa.min.js",
  "/JavaScript/jquery.min.js",
  "/JavaScript/main.js",
  "/Images/cake.png",
  "/Images/circus.png",
  "/Images/game.png",
  "/Images/LumiJS.png",
  "/Images/safe.png",
  "/Images/submarine.png",
  "/Images/Sucro.png",
];

// Install ServiceWorker
self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(cacheName)
    .then(cache => cache.addAll(filesToCache))
  );
});

// Activate ServiceWorker
self.addEventListener("activate", e => self.clients.claim());

// Use ServiceWorker
self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request)
    .then(response => response ? response : fetch(e.request))
  )
});