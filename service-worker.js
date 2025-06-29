self.addEventListener("install", function (e) {
  e.waitUntil(
    caches.open("bunavi-cache").then(function (cache) {
      return cache.addAll([
        "/index.html",
        "/style.css",
        "/script.js",
        "/assets/logo.png",
        "/assets/kehamilan.png",
        "/assets/perawatan-bayi.png",
        "/assets/ibu-anak.png"
      ]);
    })
  );
});

self.addEventListener("fetch", function (e) {
  e.respondWith(
    caches.match(e.request).then(function (response) {
      return response || fetch(e.request);
    })
  );
});
