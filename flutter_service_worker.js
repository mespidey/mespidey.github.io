'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "f8d58609b9bafb56bb058bb607a77b2e",
"assets/AssetManifest.bin.json": "a1f13911612a4fe1ad3e757dde3e319f",
"assets/AssetManifest.json": "cad5db24341b794109332035445889f5",
"assets/assets/background_sunset.png": "e22ea36980f9ee02576acbe45efe1356",
"assets/assets/ben10_banner.png": "ad4be210cb48a0acf1e02e1c413860d9",
"assets/assets/beyond.png": "e039c61278978011b849319b3c98a002",
"assets/assets/brain.png": "afd0b72c1dc4952ebf3d862cabfb942e",
"assets/assets/character_and_tools.png": "fd71c63fd8186c8da9ebbfc5c213d33e",
"assets/assets/cloud.png": "3c64681428e8c543efebb6fa3acd8090",
"assets/assets/cnect.png": "9a97493fa62ab611091985443a6f744a",
"assets/assets/Courier_of_Commands.pdf": "1b1b917c3191477e257a931d8c368274",
"assets/assets/dance_central_banner.png": "3d065417109a251ed0fcc26505ffb97f",
"assets/assets/doom.jpeg": "f795f1122c3d2e05e1ca0dae99e09ce3",
"assets/assets/Gengar_Jumping.gif": "9e312e04a887299a2ad1e5709e1a8aaa",
"assets/assets/grass_ground.png": "d4b6db28e86d90b6e7d2860970a684e8",
"assets/assets/m.jpg": "0c9a2a38d79b91e6b5b9f57dd451994b",
"assets/assets/mario_run.gif": "77d3021214a2e3d5274f0e5c8986d85e",
"assets/assets/maro.png": "bea52ba003c20ac434808e9bd53ab836",
"assets/assets/movement.gif": "fa49d40cc844215116ec58a4c65d3da5",
"assets/assets/p.png": "620bd022ca338d7db6f58e27bf4cdc40",
"assets/assets/pdf_pixel.png": "a4701da76e2e4e311ced2f8a28145e85",
"assets/assets/pikachu_run.gif": "a3031402f7cd5115c600e2d25b080d15",
"assets/assets/portal.png": "0149c6aa846c48cd0fceb49083574069",
"assets/assets/power.jpg": "4a4195efa8826b421f6eeb087a59ddab",
"assets/assets/redball_side.png": "79053182d5565272d571feaac3527cc8",
"assets/assets/sonc.jpg": "cc563aa7cc4ce0f19c0535e3011cee77",
"assets/assets/sounds/merged_bootup.mp3": "a08080ebc3b0b3f3f5832659ea8aeef4",
"assets/assets/spiderman.png": "1c1aea2b30cd598440ce0a62c37159d9",
"assets/assets/Step_By_Step.pdf": "c2f530da1851cc5ae5a87e5379a329b4",
"assets/assets/super.jpg": "b5a1e19ec67849ce26e8c9e44d9af1eb",
"assets/assets/The_Code_Scroll.pdf": "c2558adc930bca9c900621cf4d445f7c",
"assets/assets/unreal.png": "f75e14736f5e9b2c0be966e890803c91",
"assets/assets/up.jpeg": "af02276855b0196c28128726270ce559",
"assets/assets/web.png": "711a646517a0f579d185892f87e12011",
"assets/Courier_of_Commands.pdf": "1b1b917c3191477e257a931d8c368274",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "04efbcb5af157d539d5bf124b3beda39",
"assets/mario_run.gif": "77d3021214a2e3d5274f0e5c8986d85e",
"assets/NOTICES": "407caa07f8da388a1ea6c09e114bab9b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/Step_By_Step.pdf": "c2f530da1851cc5ae5a87e5379a329b4",
"assets/The_Code_Scroll.pdf": "c2558adc930bca9c900621cf4d445f7c",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "d6090fc5cd6e01d62661e724224be69f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "f33767a8cccbbc01d44f7436525474cf",
"/": "f33767a8cccbbc01d44f7436525474cf",
"main.dart.js": "c813f132e0be72fa251aa16f93d85777",
"manifest.json": "bf24c84c3bf99672a631c4f84464e793",
"version.json": "60a71d692c6e6a566ef45d00a046e4e4"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
