# Cihan Okuyor

Telefon için tasarlanmış kişisel bir okuma, yazma ve blog uygulaması.

## Üç bölüm

**Okuma:** Açılışta selamlama ve "Şu an okuyorum" kartı var; okuduğun kitabı ve bu ayki hedefini gösterir. Altında yıl, ay seçimi ve o ayın kitapları yer alır. Her kitap kendine özgü bir kapakla görünür.
- Durum renkleri: kırmızı okunmadı, sarı okunuyor, yeşil okundu
- Her kitapta **Okuyorum** ve **Okudum** butonları var (aynı butona tekrar basınca kitap "okunmadı"ya döner)
- Kitabın yanındaki **⋯** ile: bu kitap hakkında yaz, düzenle, sil
- En altta "Bu yıl" bölümü 12 ayı küçük sütunlarla gösterir

**Defterim:** Düşüncelerin ve okuma notların. Sağ üstteki **+** ile yeni not açılır, not bir kitaba bağlanabilir, yazdıkça kendiliğinden kaydedilir.

**Blogum:** Defterde "Blogda yayınla"yı açtığın notlar burada görünür. En son yazı büyük kartta, diğerleri listede durur.

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
- **Okuma** ekranındaki sağ üst **⋯** → **Yedek al** ile kitaplarını ve notlarını tek dosya olarak kaydedebilirsin. **Yedekten yükle** ile geri alırsın.
- Blog şimdilik yalnızca senin telefonunda görünür. Başkalarının da okuyabilmesi için yayınlama özelliği ayrıca eklenebilir.
