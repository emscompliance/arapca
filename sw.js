// Arapça Öğren — Service Worker
// Amaç: siteyi bir kere (internetteyken) ziyaret ettikten sonra tüm
// sözlük verisiyle birlikte tamamen internetsiz açılabilir hale
// getirmek. Sözlük verisi zaten arapca.html içine gömülü olduğu için
// tek bir dosyayı önbelleğe almak yeterlidir.
//
// Sürüm numarasını (CACHE_NAME) her önemli içerik güncellemesinde
// (örn. kelime sayısı arttığında) değiştirin — böylece kullanıcıların
// tarayıcısı eski önbelleği atıp en güncel dosyayı indirir.
const CACHE_NAME = 'arapca-ogren-v2';
const APP_SHELL = [
    './arapca.html',
    './manifest.json',
    './icon-192.png',
    './icon-512.png'
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => cache.addAll(APP_SHELL))
            .then(() => self.skipWaiting())
    );
});

self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((keys) =>
            Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
        ).then(() => self.clients.claim())
    );
});

self.addEventListener('fetch', (event) => {
    const req = event.request;
    if (req.method !== 'GET') return;

    // Ana sayfa (app shell): önce internetten en güncel sürümü almayı
    // dene, olmazsa (offline) önbellekten sun. Böylece internet
    // varken her zaman en güncel kelime listesi indirilir; internet
    // yokken de son indirilen sürüm sorunsuz açılır.
    event.respondWith(
        fetch(req)
            .then((res) => {
                const resClone = res.clone();
                caches.open(CACHE_NAME).then((cache) => cache.put(req, resClone));
                return res;
            })
            .catch(() => caches.match(req).then((cached) => cached || caches.match('./arapca.html')))
    );
});
