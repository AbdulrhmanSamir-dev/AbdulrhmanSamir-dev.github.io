'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "63c94c91ffb6c2f05c739c7bb26b6d6a",
"assets/AssetManifest.bin.json": "3878c00d5791d6ba50ef363e39bba27e",
"assets/AssetManifest.json": "181848b2281a55b5047aa7dfeee5d017",
"assets/assets/backgound_pic/background_pic.jpg": "2a956286424bc7283cfc687d80cdab45",
"assets/assets/images/Dominos%2520Points%2520Counter/photo_2025-08-18_01-04-45.jpg": "77857fe5400a4dd007174a0b0cc7fb89",
"assets/assets/images/Dominos%2520Points%2520Counter/photo_2025-08-18_01-05-07.jpg": "f43148e07f5c1acd0abe9da1e43f2583",
"assets/assets/images/Fruit%2520Hub/photo_2025-08-18_01-05-53.jpg": "a8555628a4cd92b16044d18aa361eafc",
"assets/assets/images/Fruit%2520Hub/photo_2025-08-18_01-06-02.jpg": "77f6f49910aca12f5a8b9763429dd543",
"assets/assets/images/Fruit%2520Hub/photo_2025-08-18_01-06-05.jpg": "4ba69a49e845f547efd879f50a8d4068",
"assets/assets/images/Fruit%2520Hub/photo_2025-08-18_01-06-08.jpg": "3f66451f03f454c48dc2ff20d1f03ad7",
"assets/assets/images/Fruit%2520Hub/photo_2025-08-18_01-06-11.jpg": "0b9d842c2137b974d870a26ed0b47fd7",
"assets/assets/images/Fruit%2520Hub/photo_2025-08-18_01-06-14.jpg": "76e85a8261081e7d4cfa4fe544c57ba0",
"assets/assets/images/Fruit%2520Hub/photo_2025-08-18_01-06-17.jpg": "f4424fbe84d435eb8951bae8a0821d42",
"assets/assets/images/Fruit%2520Hub/photo_2025-08-18_01-06-20.jpg": "d9390f1373aa41b50011ab793df62800",
"assets/assets/images/Fruit%2520Hub/photo_2025-08-18_01-06-23.jpg": "289d5fda1677d1c77b68d6c70b1e4767",
"assets/assets/images/Fruit%2520Hub/photo_2025-08-18_01-06-26.jpg": "78fc72e5d2143f287165221777b2e00a",
"assets/assets/images/Monkey%2520Meal%2520(Team%2520Project)/photo_2025-08-18_01-08-45.jpg": "c6f01134f49db54c71c51a243cc7886a",
"assets/assets/images/Monkey%2520Meal%2520(Team%2520Project)/photo_2025-08-18_01-08-52.jpg": "29b2d41f1db936952ae2db224655a463",
"assets/assets/images/Monkey%2520Meal%2520(Team%2520Project)/photo_2025-08-18_01-08-55.jpg": "bf237600c47e1d72ebb721843cf313d4",
"assets/assets/images/Monkey%2520Meal%2520(Team%2520Project)/photo_2025-08-18_01-08-58.jpg": "5df5fc328e1be845955a574e94fca76b",
"assets/assets/images/Monkey%2520Meal%2520(Team%2520Project)/photo_2025-08-18_01-09-01.jpg": "9004602d7c291a23d48a2d1979d565e1",
"assets/assets/images/Monkey%2520Meal%2520(Team%2520Project)/photo_2025-08-18_01-09-03.jpg": "f96a3c990fa8a1c4d39fe99bcf20013b",
"assets/assets/images/Monkey%2520Meal%2520(Team%2520Project)/photo_2025-08-18_01-09-06.jpg": "88416b92893bc63338bd74626d3313f7",
"assets/assets/images/Monkey%2520Meal%2520(Team%2520Project)/photo_2025-08-18_01-09-09.jpg": "b09b39ee76e51b4caa1f5542ca9a921f",
"assets/assets/images/Monkey%2520Meal%2520(Team%2520Project)/photo_2025-08-18_01-09-13.jpg": "3a02f69b5340529912aed745689fe855",
"assets/assets/images/Monkey%2520Meal%2520(Team%2520Project)/photo_2025-08-18_01-09-15.jpg": "1bc6601c6cf8df5da022552b597d47ae",
"assets/assets/images/Monkey%2520Meal%2520(Team%2520Project)/photo_2025-08-18_01-09-20.jpg": "6caa22f4d4dbb7feba00e1e159567ec1",
"assets/assets/images/Monkey%2520Meal%2520(Team%2520Project)/photo_2025-08-18_01-09-29.jpg": "8abf4761d82218fd08c4e51692297d46",
"assets/assets/images/Monkey%2520Meal%2520(Team%2520Project)/photo_2025-08-18_01-09-32.jpg": "047974ef380d348215169a28e6cff707",
"assets/assets/images/Monkey%2520Meal%2520(Team%2520Project)/photo_2025-08-18_01-09-48.jpg": "8b629f8520b22dc4bec0594a84327573",
"assets/assets/images/Monkey%2520Meal%2520(Team%2520Project)/photo_2025-08-18_01-09-52.jpg": "876fcbd353472848ffc025a6d34bda02",
"assets/assets/images/Monkey%2520Meal%2520(Team%2520Project)/photo_2025-08-18_01-09-55.jpg": "f8144ee996940a37dbbccf6d717fa2a5",
"assets/assets/images/Monkey%2520Meal%2520(Team%2520Project)/photo_2025-08-18_01-09-59.jpg": "d70288b7aad71d09d1ace9461e49289c",
"assets/assets/images/Monkey%2520Meal%2520(Team%2520Project)/photo_2025-08-18_01-10-01.jpg": "761f8912a9524bfeaf50a5d132075eac",
"assets/assets/images/Monkey%2520Meal%2520(Team%2520Project)/photo_2025-08-18_01-10-04.jpg": "bda375c95d63a8a5a7d687e64978f786",
"assets/assets/images/Monkey%2520Meal%2520(Team%2520Project)/photo_2025-08-18_01-10-11.jpg": "028f729fb73f8193e6ae9c1839ea3724",
"assets/assets/images/Monkey%2520Meal%2520(Team%2520Project)/photo_2025-08-18_01-10-14.jpg": "9164d2c4900c13c2c8c7bfdf17caa32d",
"assets/assets/images/Monkey%2520Meal%2520(Team%2520Project)/photo_2025-08-18_01-10-17.jpg": "14bf147110b64446b0bcae1c83435fd8",
"assets/assets/images/Movies%2520App/photo_2025-08-18_01-07-10.jpg": "f7b2075cf2a00282e92b300acda3e8c2",
"assets/assets/images/Movies%2520App/photo_2025-08-18_01-07-18.jpg": "95795ed501fcc1acef2c1581107e5f7e",
"assets/assets/images/Movies%2520App/photo_2025-08-18_01-07-23.jpg": "93ddb64edb5e1f885da087ab8f73d8de",
"assets/assets/images/Movies%2520App/photo_2025-08-18_01-07-27.jpg": "46f0d9a905e803db1f616f6917aa2f2c",
"assets/assets/images/Movies%2520App/photo_2025-08-18_01-07-30.jpg": "24047ad2c8caf79e42116062cba129b6",
"assets/assets/images/News%2520App/photo_2025-08-18_01-07-37.jpg": "c7e4d0bd823b78931c24eb8b84527dc4",
"assets/assets/images/News%2520App/photo_2025-08-18_01-07-48.jpg": "e2a6d521cebaa53c28f3a77dcc0e2b4c",
"assets/assets/images/News%2520App/photo_2025-08-18_01-07-52.jpg": "b599cdb9072f9fc654c09c377fce1d76",
"assets/assets/images/Notes%2520App/photo_2025-08-18_03-12-47.jpg": "898cbbe43e2825e394cb2cfddbad0e07",
"assets/assets/images/Notes%2520App/photo_2025-08-18_03-13-01.jpg": "089309cff04a2efa9d4c522ad8bd3b9d",
"assets/assets/images/Notes%2520App/photo_2025-08-18_03-13-04.jpg": "896b8463fae2e89a2e63e1494f4fc381",
"assets/assets/images/Simple%2520Store%2520App/photo_2025-08-18_01-04-04.jpg": "18d8c07c7a1eeac30a299cb911d3627d",
"assets/assets/images/Tuko/photo_2025-08-18_01-08-01.jpg": "f61dc7911ccc0bdff8e09cb94a79cbdd",
"assets/assets/images/Tuko/photo_2025-08-18_01-08-08.jpg": "a96b67681902f4933f6b4152d0904ecb",
"assets/assets/images/Tuko/photo_2025-08-18_01-08-12.jpg": "9aa355d19bbbe994a4c4b201a65f2792",
"assets/assets/images/Tunes%2520App/photo_2025-08-18_01-08-16.jpg": "817cc37976cb1151c64fe1af6dd9e330",
"assets/assets/images/Weather%2520App/photo_2025-08-18_01-05-20.jpg": "feddd7b91b4c8a13e0e94fe287ac19b5",
"assets/assets/images/Weather%2520App/photo_2025-08-18_01-05-29.jpg": "051a042cf008d866be37998cbf412ad1",
"assets/assets/images/Weather%2520App/photo_2025-08-18_01-05-33.jpg": "025708f794a917e07358593bf1c1e56d",
"assets/assets/images/Weather%2520App/photo_2025-08-18_01-05-36.jpg": "334ee8d496b0213f3647c8611972f2f3",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "b260518e369e4ee35c1db355fe59260f",
"assets/NOTICES": "d6956cb7be5dfd3ec0390ec05174325a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png.png": "504141c873cede4badb7cd95fcdbaabd",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "7d20cdb3ba2b034a601d8646f80c12b4",
"icons/favicon.png.png": "504141c873cede4badb7cd95fcdbaabd",
"index.html": "3d848d2a7f44385ddcead6b87bd95c06",
"/": "3d848d2a7f44385ddcead6b87bd95c06",
"main.dart.js": "48fe3a306d59f64ba473b1d4ab5191a8",
"manifest.json": "09b57ee464820d74a571b935d68d24a5",
"version.json": "a8e29bbf5652024d955ff66ce3aee800"};
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
