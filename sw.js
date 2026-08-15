/* ══════════════════════════════════════════════════════════════════
   Service Worker — Arapça Öğreniyorum / أتعلم العربية

   ═══ KÖKTEN DÜZELTİLDİ (v13) ═══ Network-first (Ağ-öncelikli) strateji:
   İnternetteyken her zaman en güncel dosyayı çeker, çevrimdışıyken
   önbelleğe düşer.[cite: 7]
   ══════════════════════════════════════════════════════════════════ */

const CACHE_NAME = 'masrawy-v29';
const APP_SHELL = [
  './',
  './index.html',
  './manifest.json',
  './favicon-192.png',
  './favicon-512.png',
  './favicon-180.png',
  './logo-full.png',
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
    caches.keys().then((names) =>
      Promise.all(names.filter((n) => n !== CACHE_NAME).map((n) => caches.delete(n)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        if (response && response.status === 200 && (response.type === 'basic' || response.type === 'cors')) {
          const clone = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
        }
        return response;
      })
      .catch(() => {
        return caches.match(event.request).then((cached) => cached || caches.match('./index.html'));
      })
  );
});