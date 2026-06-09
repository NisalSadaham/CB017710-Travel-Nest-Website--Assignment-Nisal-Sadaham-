const CACHE_NAME = "travelnest-v1";

const FILES_TO_CACHE = [
  "./",

  "./index.html",
  "./Destinations.html",
  "./destination-details.html",
  "./feedback.html",
  "./Travel-mood.html",
  "./Trip-Budget-planner.html",
  "./Trip-Generator.html",

  "./CSS/styles.css",

  "./Javascript/script.js",
  "./Javascript/destination.js",
  "./Javascript/destination-details.js",
  "./Javascript/feedback.js",
  "./Javascript/mood.js",
  "./Javascript/budget.js",
  "./Javascript/Trip-generator.js",

  "./offline.html"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(FILES_TO_CACHE))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});