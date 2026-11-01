// ReadBook: uygulamanın internetsiz de açılmasını sağlar.
// Uygulamayı güncellediğinde aşağıdaki sürüm numarasını bir artır (v2, v3...).
const CACHE = 'readbook-v1';
const RESIM = 'readbook-kapaklar';
const DOSYALAR = [
  './',
  './index.html',
  './manifest.webmanifest',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/icon-maskable-512.png',
  './icons/apple-touch-icon.png'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(DOSYALAR)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE && k !== RESIM).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);

  // Sayfanın kendisi: önce internetten dene (güncellemeler gelsin), olmazsa kayıtlı kopyayı aç.
  if (req.mode === 'navigate') {
    e.respondWith(
      fetch(req)
        .then(res => { const k = res.clone(); caches.open(CACHE).then(c => c.put('./index.html', k)); return res; })
        .catch(() => caches.match('./index.html'))
    );
    return;
  }

  // Kitap arama sonuçları her zaman internetten gelir.
  if (url.hostname === 'www.googleapis.com' || url.pathname.endsWith('/search.json')) return;

  // Yazı tipleri ve internetten seçilen kapak resimleri: bir kez indirilir, sonra internetsiz de görünür.
  const yaziTipi = url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com';
  if (yaziTipi || (req.destination === 'image' && url.origin !== location.origin)) {
    const depo = yaziTipi ? CACHE : RESIM;
    e.respondWith(
      caches.match(req).then(kayitli => kayitli || fetch(req).then(res => {
        if (res.ok || res.type === 'opaque') { const k = res.clone(); caches.open(depo).then(c => c.put(req, k)); }
        return res;
      }))
    );
    return;
  }

  // Diğer dosyalar (ikonlar vb.): önce kayıtlı kopya.
  e.respondWith(caches.match(req).then(kayitli => kayitli || fetch(req)));
});
