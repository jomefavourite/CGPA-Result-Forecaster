const staticApp = "CGPA_Result_Forecaster-v1";

//cache the assets that will be needed offline
const assets = [
  "/",
  "/index.html",
  "/css/style.css",
  "/css/style.css.map",
  "/sass/_base.scss",
  "/sass/style.scss",
  "/sass/_medium.scss",
  "/main.js",
  "images/calculator-logo-72.png",
  "images/calculator-logo-96.png",
  "images/calculator-logo-124.png",
  "images/calculator-logo-144.png",
  "images/calculator-logo-152.png",
  "images/calculator-logo-512.png",
  "images/calculator-logo.png",
];

/*Attach an event listener to the service worker processor(self) to listen to the install event */
self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticApp).then(cache => {
      cache.addAll(assets);
    })
  );
});

//fetch cache
self.addEventListener("fetch", fetchCache => {
  fetchCache.respondWith(
    caches.match(fetchCache.request).then(response => {
      return response || fetch(fetchCache.request);
    })
  );
});
