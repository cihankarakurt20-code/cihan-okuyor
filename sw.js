// Cihan Okuyor: uygulamanın internetsiz de açılmasını sağlar.
// Uygulamayı güncellediğinde aşağıdaki sürüm numarasını bir artır (v2, v3...).
const CACHE = 'cihan-okuyor-v1';
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
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;

  // Sayfanın kendisi: önce internetten dene (güncellemeler gelsin), olmazsa kayıtlı kopyayı aç.
  if (req.mode === 'navigate') {
    e.respondWith(
      fetch(req)
        .then(res => {
          const kopya = res.clone();
          caches.open(CACHE).then(c => c.put('./index.html', kopya));
          return res;
        })
        .catch(() => caches.match('./index.html'))
    );
    return;
  }

  // Diğer dosyalar (ikonlar vb.): önce kayıtlı kopya.
  e.respondWith(caches.match(req).then(kayitli => kayitli || fetch(req)));
});
