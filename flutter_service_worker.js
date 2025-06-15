'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "00171bc94d7b4e9e62d4e915df54ec5e",
".git/config": "21aba193a50f415bd8e5c3163d496819",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "b3104e39581226a983aa48a947899420",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "470f83b801787deb2f67f46b327a3d29",
".git/logs/refs/heads/main": "470f83b801787deb2f67f46b327a3d29",
".git/logs/refs/remotes/origin/main": "037ea1aeb446c7e9837d71b609857cb6",
".git/objects/01/dea7c662d05ef0440eb2fcb849133d4756475e": "aca696010ef05b289a7ee912add50a3d",
".git/objects/06/e3299cb16687f618bf447bf47a80a4c34c5e09": "127ee70500ad90fb403d5ca976d1fdf7",
".git/objects/08/065a451255f169cf3e256e66c8eb7c5fbbc209": "036d530437cbaa84e591b9024aa1eeac",
".git/objects/11/8b7579c257127fc9b631e41bcb1e8fd30d570b": "87cbb37f4700aece773939084aeb2f68",
".git/objects/16/7aa900e07941b49ebdcfff2ea5a9723f282fba": "dd907191d51536b36c78fe0cbdd0d1b1",
".git/objects/19/994e0b42f2f0ee38d3aa6963b665b25f746ee9": "f8dd9791a43a00415abcb4742613570c",
".git/objects/19/9b1de4bd02416fbf8c706f68075f481745b354": "1a357f6e8784c8bdf524d1a98a0b2861",
".git/objects/1a/d7683b343914430a62157ebf451b9b2aa95cac": "94fdc36a022769ae6a8c6c98e87b3452",
".git/objects/1c/0ed12b9e13f54a550e025f7c87ff957ace164d": "d8fed12aef53d56c63855fdbf8492630",
".git/objects/1f/b5107b8c362023b3b63279c6db28ad0193aa9e": "d9210c9c8fe585e97f206b81e7d90294",
".git/objects/26/e2dfa8ba02a6cb0196c806357221d3ac59a6ec": "020eef379d8f42702fecd65ec3e3ef50",
".git/objects/28/f54827b4ac104892c1873936433170754ec838": "3d4f4852285e77fb3b1ab8e770853a4c",
".git/objects/2b/062e3a2d56a41b3646a738c074f1b5daf534cb": "068a0b7711b2f1c609b01bef1798f26f",
".git/objects/2c/10185bed2c7926fe367d78c0784836a642bdc7": "4782672063f1e60f6edc67fa83843149",
".git/objects/2f/057b0f1dfa22882119ccc6b272260b674e9d4c": "d56d39235a4877f5f5556eda8e9fcbf2",
".git/objects/30/21415fbfefdff7a316bcfd5ecd9ec911b557db": "f9fbb51bda9cca087df5c6d81237a516",
".git/objects/33/620bc9087ad3fb02a7f932888c7f1fd0a732f2": "827a40fe5551611d8bf60d32ac72fa7c",
".git/objects/34/0b89aac18bda9406a098677767223f4c6f9397": "8504ab4abb34ff84f451d4ef578bbb46",
".git/objects/37/1359ee3a08d241f8e051cef39ed0869397cde6": "58d61f4da3f01bafd09d63e31e8a58fa",
".git/objects/37/1b57322588cd1205287c6eaf18114f65020e52": "5b4cfed71ea0b9865ff659e77a630558",
".git/objects/3a/bcd89c3f3a9427ac3addaaab36c6ee7e8307e1": "1128052df05b9bf662c056fc71b7c79f",
".git/objects/42/6587607ca765af1a3f09daa89c4ed4b488f4f7": "231d92c71a4ebd1996117082b6f846b5",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4c/51fb2d35630595c50f37c2bf5e1ceaf14c1a1e": "a20985c22880b353a0e347c2c6382997",
".git/objects/53/18a6956a86af56edbf5d2c8fdd654bcc943e88": "a686c83ba0910f09872b90fd86a98a8f",
".git/objects/53/3d2508cc1abb665366c7c8368963561d8c24e0": "4592c949830452e9c2bb87f305940304",
".git/objects/5b/36cb09ab72300969b98c1f932e448f8919e6f0": "8c07e57a3f087e3cb36ea621511bfb38",
".git/objects/64/51019e4161226e23163b568b9271f5930939c0": "f9f708965e43e300574cf9a64c50319a",
".git/objects/69/422a6980aa1c484d12164266046b8c44f0dd85": "eb52cbaca6803a901f2cf83db10d063c",
".git/objects/69/5aa9117d1c62aad6940860a172f07bcd23ec8b": "2b2fc35290deea39ad02c76341c05f66",
".git/objects/69/b43f5abc8427076e965d6ea2ff46a2775ed676": "7ef46aad102312fc56edee614e9b4db4",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/70/a234a3df0f8c93b4c4742536b997bf04980585": "d95736cd43d2676a49e58b0ee61c1fb9",
".git/objects/73/69034475c203d0a3bc90d374d973490b390856": "c01469ab4d49a6a66e476dc98e1e7b6f",
".git/objects/73/c63bcf89a317ff882ba74ecb132b01c374a66f": "6ae390f0843274091d1e2838d9399c51",
".git/objects/77/9618219482a63e9a8dbb61d040639dba347c70": "59698656edb454d0f32b852f12972404",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/47546421143cd3f6f3b0c4da3312050d3da7c1": "21b79f71c24d4b76be8cbcf44dae2bc8",
".git/objects/8e/3c7d6bbbef6e7cefcdd4df877e7ed0ee4af46e": "025a3d8b84f839de674cd3567fdb7b1b",
".git/objects/95/c039304e50af7a7335e09733f1dcd62ded8864": "fb0a8a14d48967429951552b6638010e",
".git/objects/9b/d3accc7e6a1485f4b1ddfbeeaae04e67e121d8": "784f8e1966649133f308f05f2d98214f",
".git/objects/9c/97cc5de02b71c7fade6c0b700790149042ee9a": "8b6afdaf49de852e16f278c2dd80ebc5",
".git/objects/9f/d6bcc401c777cf526c93394eb288aee03970b5": "ac1cc1425daa304da6423dc294e6c435",
".git/objects/a0/667e7707e07acb887b08fd690b7a8db10ddcb4": "b5b79197f5e05fa4098098eaed0675ff",
".git/objects/a6/368be6d9829a614b9f9af75591079f265e8c0a": "4990a7c1ed0f22f3d4f3119893c065a1",
".git/objects/ac/31ea32fc88fc492c6cd4118bea845d3951488f": "05cd5cec545e950a60f2fa1153d60472",
".git/objects/ad/8d682b3eafed89e95a4c94cd4333688700897e": "866fa236c8ad1d128aa09d78e8fde3bf",
".git/objects/ae/9349adbbda4dd940b668d646a4acd8dba4a557": "7457e539b49c5dfcbac304077f9caa36",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/6a5236065a6c0fb7193cb2bb2f538b2d7b4788": "4227e5e94459652d40710ef438055fe5",
".git/objects/c4/ae73adff98aa73c6bb97d76b9d6b212bf0276a": "3285e84d443fb1dbe846de08ae41df48",
".git/objects/c8/08fb85f7e1f0bf2055866aed144791a1409207": "92cdd8b3553e66b1f3185e40eb77684e",
".git/objects/c9/9b7bb5b14196266787a3098ea15bf177bb324a": "5f35ee0554fab73c411ebf43b6704c1b",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/4a1b3aad3f0c236ecc9dcde77c2691e3b22e15": "7644bf992be77fec306bf63065e73aa6",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/db/163d76576a3f041252420a49e12e679453b4c8": "0c785033cdf97e849be55f91fecabb94",
".git/objects/dc/11fdb45a686de35a7f8c24f3ac5f134761b8a9": "761c08dfe3c67fe7f31a98f6e2be3c9c",
".git/objects/dd/8e066f4f9634ac07ca6fa2b941fff4edc5e213": "c48a9cfd37d2bce5034f7b9e6b1057da",
".git/objects/e0/7ac7b837115a3d31ed52874a73bd277791e6bf": "74ebcb23eb10724ed101c9ff99cfa39f",
".git/objects/e0/cf7de0758720e46a114343d96b0a3c092046ae": "6155e7bcf71bce8e94c4d75b60cf93b1",
".git/objects/e1/3d973223efaf64f954ccd42fb06a8423a8c43b": "8aa3aa777d758e84859d6525be0c345d",
".git/objects/e3/7b0105096734565663a477b398f480153093a2": "e0ab9510fcacc124249cb24b6ac96581",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f4/2cc500791f01bf149b06602d072b003de69075": "2215b3f2e9c3f022fd991adfbf0194d7",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f8/d514f30c7ff0b948a7a37ffdad8da719867512": "1dc3aeeedebdf2da9de727fc3fbc6e0c",
".git/objects/fc/37ed9dd8b604316fffedb18afe49dcdba86a77": "11246645a5b32b07747cc56e7c6b56e5",
".git/objects/fd/fdcab91689b481900e7e9e8e738a550e4c647f": "653b4fa3b7bb400751eb3c242c2832a5",
".git/refs/heads/main": "22d99272c5995a8c4a4e94a9c614a0d6",
".git/refs/remotes/origin/main": "22d99272c5995a8c4a4e94a9c614a0d6",
"assets/AssetManifest.bin": "a8f52d9cb5df866b7697ec5b0e452616",
"assets/AssetManifest.bin.json": "4f4d5c9518d5bd7db2d37d35dbe6dae0",
"assets/AssetManifest.json": "c2f7724f53a9165d64cf17354db17a9c",
"assets/assets/ass.jpeg": "b492219881facebdb4ffee161937a556",
"assets/assets/background_sunset.png": "e22ea36980f9ee02576acbe45efe1356",
"assets/assets/Batman.jpg": "ca294d7347c64609fe8c28ec3c0bbca0",
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
"assets/assets/naruto.jpg": "3157388ff3c7c6040a074fae17784053",
"assets/assets/p.png": "620bd022ca338d7db6f58e27bf4cdc40",
"assets/assets/pdf_pixel.png": "a4701da76e2e4e311ced2f8a28145e85",
"assets/assets/pikachu_run.gif": "a3031402f7cd5115c600e2d25b080d15",
"assets/assets/portal.png": "0149c6aa846c48cd0fceb49083574069",
"assets/assets/power.jpg": "4a4195efa8826b421f6eeb087a59ddab",
"assets/assets/redball_side.png": "79053182d5565272d571feaac3527cc8",
"assets/assets/sonc.jpg": "cc563aa7cc4ce0f19c0535e3011cee77",
"assets/assets/sounds/merged_bootup.mp3": "a08080ebc3b0b3f3f5832659ea8aeef4",
"assets/assets/spiderman.png": "1c1aea2b30cd598440ce0a62c37159d9",
"assets/assets/spood.jpg": "afe05fa7ab8a29d1c67cd869638a5d4e",
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
"flutter_bootstrap.js": "76f25dcfe4ebaebdeab1bda1ecf4cb38",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "f33767a8cccbbc01d44f7436525474cf",
"/": "f33767a8cccbbc01d44f7436525474cf",
"main.dart.js": "6d344b7127ce68241a0589e657b842d2",
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
