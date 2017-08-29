const CACHE_VERSION = 1

const CACHE_FILES = [
  '/css/style.vidya.css',
  '/css/animate.css',
  '/css/custom.css',
  '/js/front.js',
  '/js/owl.carousel.min.js',
  '/js/respond.min.js',
  '/manifest.json',
  '/img/favicon.ico',
  '/offline.html'
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
    caches.open('vidya').then(function (cache) {
      return cache.addAll(CACHE_FILES)
    })
  )
})

self.addEventListener('fetch', function (event) {
  event.respondWith(
    // Try the cache
    caches.match(event.request).then(function (response) {
      // Fall back to network
      return response || fetch(event.request)
    }).catch(function () {
      // If both fail, show a generic fallback:
      return caches.match('/offline.html')
      // However, in reality you'd have many different
      // fallbacks, depending on URL & headers.
      // Eg, a fallback silhouette image for avatars.
    })
  )
})