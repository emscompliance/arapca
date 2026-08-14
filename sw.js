/* ══════════════════════════════════════════════════════════════════
   Service Worker — Arapça Öğreniyorum / أتعلم العربية

   ═══ KÖKTEN DÜZELTİLDİ (v13) ═══ Önceki sürümler "önbellek-öncelikli" (cache-first)
   çalışıyordu: dosya önbellekte varsa AĞA HİÇ BAKMADAN onu gösteriyordu. Bu, geliştirme
   sırasında ciddi bir soruna yol açtı — her düzeltme sonrası dosyaları GitHub'a yeniden
   yüklesen bile, tarayıcı hâlâ ESKİ önbellekteki index.html'i gösteriyordu ("cache adını
   değiştirdim" sadece bir SONRAKİ tam yenilemede devreye giriyordu, bazen o da yetmiyordu).
   Bu yüzden arama/çeviri gibi düzeltmelerin "hiç işe yaramamış" gibi görünmesinin asıl
   nedeni muhtemelen KOD DEĞİL, bu önbellek davranışıydı.

   Şimdi strateji "AĞ-ÖNCELİKLİ" (network-first) oldu: internetteyken HER ZAMAN önce en güncel
   dosyayı ağdan çekmeye çalışır (ve önbelleği de günceller); sadece İNTERNET YOKSA önbelleğe
   düşer. Yani artık: internetteyken her zaman en son yüklediğin sürümü görürsün, çevrimdışıyken
   de en son başarılı şekilde önbelleğe alınmış sürüm çalışmaya devam eder. /

   ═══ ROOT-CAUSE FIXED (v13) ═══ Previous versions used a "cache-first" strategy: if a file
   was cached, it was served WITHOUT EVER CHECKING THE NETWORK. This caused a serious problem
   during development — even after re-uploading files to GitHub after each fix, the browser
   kept showing the OLD cached index.html ("renaming the cache" only took effect on the NEXT
   full reload, and sometimes not even then). So the real reason search/translate fixes seemed
   to "never take effect" was most likely NOT the code, but this caching behavior.

   The strategy is now "NETWORK-FIRST": while online, it ALWAYS tries to fetch the freshest file
   from the network first (and updates the cache too); it only falls back to the cache when
   there's NO INTERNET. So now: while online you always see the latest version you uploaded,
   and while offline the last successfully cached version keeps working.
   ══════════════════════════════════════════════════════════════════ */

const CACHE_NAME = 'masrawy-v13';
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
