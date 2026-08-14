/* ══════════════════════════════════════════════════════════════════
   Service Worker — مصراوي / Günlük Mısır Arapçası
   Amaç: Uygulamanın tüm dosyalarını (HTML, manifest, ikonlar) ilk ziyarette
   cihazda önbelleğe almak, böylece internet olmadığında bile uygulama
   sorunsuz açılıp çalışabilsin. Tüm kelime verisi zaten index.html içine
   gömülü olduğu için, sayfa önbellekten yüklendiğinde TÜM içerik (kategoriler,
   kelimeler, alıştırma, sınav, favoriler) internetsiz de tam çalışır.

   Purpose: Cache all app files (HTML, manifest, icons) on the very first visit,
   so the app keeps working smoothly even with no internet afterwards. Since all
   word data is already embedded inside index.html, once the page loads from
   cache, the ENTIRE app (categories, words, practice, quiz, favorites) works
   fully offline.
   ══════════════════════════════════════════════════════════════════ */

const CACHE_NAME = 'masrawy-v2';
const APP_SHELL = [
  './',
  './index.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  './icon-apple-180.png',
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

/* Önbellek-öncelikli strateji: dosya önbellekte varsa hemen onu döndür (hızlı + çevrimdışı
   güvenli), yoksa ağdan çekmeyi dener ve başarılı olursa önbelleğe de ekler.
   ═══ DÜZELTİLDİ ═══ Önceki sürüm sadece "basic" (aynı köken/same-origin) yanıtları
   önbelleğe alıyordu — bu yüzden Google Fonts gibi FARKLI KÖKENDEN gelen dosyalar (Arapça
   fontlar) hiç önbelleğe alınmıyor, ilk çevrimdışı ziyarette font indirilemiyordu. Artık
   "cors" (çapraz-kaynak ama başarılı) yanıtlar da önbelleğe alınıyor. /
   Cache-first strategy: if the file is cached, return it immediately (fast + offline-safe);
   otherwise try the network, and cache the result if it succeeds.
   ═══ FIXED ═══ The previous version only cached "basic" (same-origin) responses — so files
   from a DIFFERENT origin (like Google Fonts' Arabic fonts) were never cached, and the font
   couldn't load on the first offline visit. Now "cors" (cross-origin but successful)
   responses are cached too. */
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) return cached;
      return fetch(event.request)
        .then((response) => {
          if (response && response.status === 200 && (response.type === 'basic' || response.type === 'cors')) {
            const clone = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
          }
          return response;
        })
        .catch(() => caches.match('./index.html'));
    })
  );
});
