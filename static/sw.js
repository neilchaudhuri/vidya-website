const CACHE_VERSION = 1;

const BASE_CACHE_FILES = [
    '/css/style.vidya.css',
    '/js/front.js',
    '/js/owl.carousel.min.js',
    '/js/respond.min.js',
    '/manifest.json',
    '/img/favicon.ico'
];

const OFFLINE_CACHE_FILES = [
    '/css/style.vidya.css',
    '/js/respond.min.js',
    '/offline.html'
];

const NOT_FOUND_CACHE_FILES = [
    '/css/style.vidya.css',
    '/js/respond.min.js',
    '/404.html'
];

const OFFLINE_PAGE = '/offline.html';
const NOT_FOUND_PAGE = '/404.html';

const CACHE_VERSIONS = {
    assets: 'assets-v' + CACHE_VERSION,
    content: 'content-v' + CACHE_VERSION,
    offline: 'offline-v' + CACHE_VERSION,
    notFound: '404-v' + CACHE_VERSION
};

// Define MAX_TTL's in SECONDS for specific file extensions
const MAX_TTL = {
    '/': 3600,
    html: 3600,
    json: 2592000,
    js: 2592000,
    css: 86400
};

const CACHE_BLACKLIST = [
    //(str) => {
    //    return !str.startsWith('http://localhost') && !str.startsWith('https://gohugohq.com');
    //},
];

const SUPPORTED_METHODS = [
    'GET'
];

self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('vidya').then(function(cache) {
      return cache.addAll(BASE_CACHE_FILES);
    })
  );
});