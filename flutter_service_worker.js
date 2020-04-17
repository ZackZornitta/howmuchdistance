'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "c0dce8a47b1a6174ffed075458db19e8",
"assets/assets/res/chart_data.csv": "588a0906b00ebb91984a1a8d17a93086",
"assets/assets/res/index_data.csv": "7f33e44ee3b16efc2957423b609910bd",
"assets/assets/res/workplaces_gb.csv": "61ac9550e9b081dc781f0cd153f2c357",
"assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/LICENSE": "c39128bfe831e4eaa92dd00207675f77",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "91659cd95adfc34b1426258c43378f09",
"/": "91659cd95adfc34b1426258c43378f09",
"main.dart.js": "bcef311981813efa2acf4e7dfa72f765",
"manifest.json": "e15fc26e192615f5bd111e2bbd59c7b9"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
