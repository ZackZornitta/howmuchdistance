'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "3c3a9721e44d4e0825c9bedb8ff2db79",
"assets/assets/res/all_data_selected.csv": "a622b392fe575c3042deaf89ee50d319",
"assets/assets/res/country_facts.csv": "40c5421916f5b92a329c82b668d89d47",
"assets/assets/res/latest_index_data.csv": "b2a235ef761a4bdbb0714176da133b69",
"assets/chart_data.csv": "588a0906b00ebb91984a1a8d17a93086",
"assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/index_data.csv": "7f33e44ee3b16efc2957423b609910bd",
"assets/LICENSE": "80554064a40182ab3c52b1ca72339530",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/res/all_data_selected.csv": "c688927d0fb7acb7a1646fe7cdb7db83",
"assets/res/chart_data.csv": "588a0906b00ebb91984a1a8d17a93086",
"assets/res/country_facts.csv": "406febd3f1d73b4a01338227c571ed9e",
"assets/res/index_data.csv": "7f33e44ee3b16efc2957423b609910bd",
"assets/res/latest_index_data.csv": "3b6ec1cba2bca7c79b6abf7e223b0142",
"assets/res/workplaces_gb.csv": "61ac9550e9b081dc781f0cd153f2c357",
"assets/workplaces_gb.csv": "61ac9550e9b081dc781f0cd153f2c357",
"favicon.ico": "074b6718eeff652e8baa19006c12e609",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "552e78cda22c41ee667e5f43cd8ce62a",
"icons/Icon-512.png": "3375f696ee4c98881f2de2c50abd75a2",
"index.html": "47aaaf5c19b9f4ddc4adb44cc5d2e536",
"/": "47aaaf5c19b9f4ddc4adb44cc5d2e536",
"main.dart.js": "f6a1a885be5914af880fa3a2f98f88e2",
"manifest.json": "e15fc26e192615f5bd111e2bbd59c7b9",
"res/chart_data.csv": "588a0906b00ebb91984a1a8d17a93086",
"res/index_data.csv": "7f33e44ee3b16efc2957423b609910bd",
"res/workplaces_gb.csv": "61ac9550e9b081dc781f0cd153f2c357"
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
