const cacheName = 'cache-v1-recetas';
const precacheResources = [
	'/',
	'index.html',
	'css/styles.css',
];

self.addEventListener('install', (event) => {
	console.log('Service worker recetas install event!');
	event.waitUntil(
		caches.open(cacheName)
			.then((cache) => {
				return cache.addAll(precacheResources);
			}),
	);
});

self.addEventListener('activate', (event) => {
	console.log('Service worker recetas activate event!');
});

self.addEventListener('fetch', (event) => {
	console.log('Fetch intercepted for:', event.request.url);
	event.respondWith(caches.match(event.request)
		.then((cachedResponse) => {
			if (cachedResponse) {
				return cachedResponse;
			}
			return fetch(event.request);
		}),
	);
});
