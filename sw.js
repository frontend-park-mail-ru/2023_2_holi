const CACHE_NAME = 'offline-v1';

const PRECACHED = [
    'src/static/img/netflix.svg',
    // 'static/wednesday.webm',
];

self.addEventListener('install', (event) => {
    event.waitUntil(caches.open(CACHE_NAME).then((cache) => {
        return cache.addAll(PRECACHED);
    }));
});
self.addEventListener('fetch', (event) => {
    // if (event.request.headers.get('range')) {
    //     return
    // }

    // if (event.request.destination !== 'video') {
        event.respondWith(caches.open(CACHE_NAME).then((cache) => {
            return fetch(event.request).then((fetchedResponse) => {
                cache.put(event.request.url, fetchedResponse.clone()).catch(err => console.info(err));

                return fetchedResponse;
            }).catch(() => {
                return cache.match(event.request.url);
            });
        }));
    // }
});
