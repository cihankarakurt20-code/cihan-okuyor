# Cihan Okuyor

Telefon için tasarlanmış kişisel bir okuma, yazma ve blog uygulaması.

## Üç bölüm

**Okuma:** Her yıl bir raf. Yeşil kartta 12 ay yan yana durur ve her ay için üç kitap sırtı görünür. Bir aya dokunup o ayın kitaplarını görürsün; ekranı sağa sola kaydırarak da ay değiştirebilirsin.
- Renkler: kırmızı okunmadı, sarı okunuyor, yeşil okundu
- Her kitapta **Okuyorum** ve **Okudum** butonları var (aynı butona tekrar basınca kitap "okunmadı"ya döner)
- Kitabın yanındaki **⋯** ile: bu kitap hakkında yaz, düzenle, sil

**Defter:** Düşüncelerin ve yazı notların. Her not istersen bir kitaba bağlanabilir. Notlar sen yazdıkça kendiliğinden kaydedilir.

**Blog:** Defterde "Blogda yayınla" dediğin notlar burada dergi sayfası gibi görünür.

Sağ alttaki turuncu **+** butonu bulunduğun bölüme göre kitap, not ya da yazı ekler.

## Dosyalar

```
index.html              uygulamanın kendisi
manifest.webmanifest    ana ekran uygulaması ayarları
sw.js                   internetsiz çalışma
icons/                  uygulama ikonları
```

## GitHub'a yükleme / güncelleme

1. Depoda **Add file → Upload files**'a bas.
2. Zip'ten çıkan **bütün dosyaları ve `icons` klasörünü** sürükle (eskilerin üstüne yazılır), **Commit changes**'e bas.
3. İlk kez kuruyorsan: **Settings → Pages** → *Deploy from a branch* → **main** / **(root)** → **Save**.
4. Adres: `https://KULLANICI-ADIN.github.io/cihan-okuyor/`

Telefonda uygulamayı internete bağlıyken bir iki kez açıp kapatınca yeni sürüm gelir.

## Telefona kurma

**iPhone (Safari):** Paylaş → **Ana Ekrana Ekle**.
**Android (Chrome):** ⋮ menü → **Uygulamayı yükle**.

## Veriler nerede duruyor?

Kitapların ve notların telefonun kendi hafızasında saklanır, hiçbir yere gönderilmez. Eski sürümde eklediğin kitaplar olduğu gibi kalır.

- **iPhone'da:** Ana ekrandaki ikonla açılan uygulamanın verisi Safari'den ayrıdır; hep ikondan kullan.
- **Okuma** ekranındaki sağ üst **⋯ → Yedek al** ile kitaplarını ve notlarını tek dosya olarak kaydedebilirsin. **Yedekten yükle** ile geri alırsın.
- Blog şimdilik yalnızca senin telefonunda görünür. Başkalarının da okuyabilmesi için yayınlama özelliği ayrıca eklenebilir.
