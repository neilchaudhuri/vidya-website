const CACHE_VERSION = 1
const CACHE_NAME = 'vidya-cache-' + CACHE_VERSION;

const CACHE_FILES = [
  '/css/style.vidya.css',
  '/css/animate.css',
  '/css/custom.css',
  '//fonts.googleapis.com/css?family=PT+Sans',
  '//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css',
  "//maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css",
  "//oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js",
  "//oss.maxcdn.com/respond/1.4.2/respond.min.js",
  "//code.jquery.com/jquery-3.1.1.min.js",
  "//maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js",
  "//cdnjs.cloudflare.com/ajax/libs/jquery-cookie/1.4.1/jquery.cookie.min.js",
  "//cdnjs.cloudflare.com/ajax/libs/waypoints/4.0.1/jquery.waypoints.min.js",
  "//cdnjs.cloudflare.com/ajax/libs/Counter-Up/1.0/jquery.counterup.min.js",
  "//cdnjs.cloudflare.com/ajax/libs/jquery-parallax/1.1.3/jquery-parallax.js",
  '/js/front.js',
  '/js/owl.carousel.min.js',
  '/js/respond.min.js',
  '/manifest.json',
  '/img/favicon.ico',
  '/404.html',
  '/?utm_source=homescreen',
  '/consulting',
  '/course'
]

const OFFLINE_PAGE = '/offline.html'
const NOT_FOUND_PAGE = '/404.html'

const CACHE_VERSIONS = {
  assets: 'assets-v' + CACHE_VERSION,
  content: 'content-v' + CACHE_VERSION,
  offline: 'offline-v' + CACHE_VERSION,
  notFound: '404-v' + CACHE_VERSION
}

// Define MAX_TTL's in SECONDS for specific file extensions
const MAX_TTL = {
  '/': 3600,
  html: 3600,
  json: 2592000,
  js: 2592000,
  css: 86400
}

const SUPPORTED_METHODS = [
  'GET'
]

self.addEventListener('install', function (e) {
  e.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      console.log("INSTALL")
      return cache.addAll(CACHE_FILES)
    })
  )
})

self.addEventListener('fetch', function (event) {
  event.respondWith(
    // Try the cache
    caches.match(event.request).then(function (response) {
      // Fall back to network
      console.log("FETCH");
      return response || fetch(event.request)
    }).catch(function () {
      // If both fail, show a generic fallback:
      return caches.match('/offline/')
      // However, in reality you'd have many different
      // fallbacks, depending on URL & headers.
      // Eg, a fallback silhouette image for avatars.
    })
  )
})