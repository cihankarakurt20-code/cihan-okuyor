# ReadBook

Telefon için tasarlanmış kişisel okuma uygulaması: okuma listesi, günlük sayfa takibi ve okuma defteri.

## Okuma

- **Şu an okuyorum:** En üstte okumakta olduğun kitaplar büyük kapaklarıyla sırayla görünür. Kaçıncı sayfada olduğun ve yüzde kaçını okuduğun altında yazar.
- **Özet şeridi:** Bu ay okuduğun toplam sayfa, bu yıl bitirdiğin kitap sayısı ve şu an okuduğun kitap sayısı.
- **Okuma listesi:** Ay ay kitapların. Her aya istediğin kadar kitap ekleyebilirsin. Yılı ‹ › ile, ayı alttaki şeritten seçersin; ekranı sağa sola kaydırarak da ay değiştirebilirsin.
- **Kitap sayfası:** Bir kitaba dokununca açılır.
  - Durum: Okunmadı (kırmızı), Okunuyor (sarı), Okundu (yeşil)
  - **Bugün kaçıncı sayfadasın?** Sayfa numarasını yazıp Kaydet'e bas (+5, +10, +25, +50 kısayolları var). İlk sayfa girişinde kitap kendiliğinden "Okunuyor" olur, son sayfaya gelince "Okundu" olur.
  - **Okuma günlüğü:** Her gün kaçıncı sayfaya geldiğin ve o gün kaç sayfa okuduğun.
  - ⋯ menüsünden: not yaz, bu aya taşı, okunacaklara geri koy, düzenle, sil.

## Kitap eklerken

Kitabın adını, yazarını ve sayfa sayısını yazarsın. Kapak için üç yol var:
- **İnternette ara:** Kitabın adına (ve varsa yazarına) göre Google Books ve Open Library'de kapak arar. Seçtiğin kapakla birlikte yazar ve sayfa sayısı da boşsa otomatik dolar.
- **Fotoğraf çek:** Kitabın kapağını kamerayla çekersin.
- **Galeriden seç:** Telefondaki bir fotoğrafı seçersin.

Kapak eklemezsen kitabın adıyla zarif bir kapak kendiliğinden oluşturulur.

## Defter

- **Yazı notları:** Düşüncelerin, altını çizdiğin cümleler. Bir kitaba bağlanabilir, yazdıkça kaydedilir.
- **Okunacaklar:** Okumak istediğin kitaplar. **Bu aya ekle** ile tek dokunuşla bu ayın okuma listesine geçer.
- **Alınacaklar:** Almak istediğin kitaplar (nereden, fiyat gibi bir not da ekleyebilirsin). Aldığında yuvarlağa dokunup işaretle, sonra kitaba dokunarak okunacaklara ya da bu ayın listesine taşı.

## Dosyalar

```
index.html              uygulamanın kendisi
manifest.webmanifest    ana ekran uygulaması ayarları
sw.js                   internetsiz çalışma
icons/                  uygulama simgeleri
```

## GitHub'a yükleme / güncelleme

1. Depoda **Add file → Upload files**'a bas.
2. Zip'ten çıkan **bütün dosyaları ve `icons` klasörünü** sürükle (eskilerin üstüne yazılır), **Commit changes**'e bas.
3. İlk kez kuruyorsan: **Settings → Pages** → *Deploy from a branch* → **main** / **(root)** → **Save**.
4. Adres: `https://KULLANICI-ADIN.github.io/DEPO-ADI/`

İstersen deponun adını da `readbook` yapabilirsin (**Settings → Repository name**). Adres de buna göre değişir; ana ekrana yeniden eklemen gerekir.

## Telefona kurma

**iPhone (Safari):** Paylaş → **Ana Ekrana Ekle**.
**Android (Chrome):** ⋮ menü → **Uygulamayı yükle**.

Yeni ad ve simgenin görünmesi için eski simgeyi silip yeniden eklemen gerekir (önce yedek al).

## Veriler nerede duruyor?

Kitapların, kapakların ve notların telefonun kendi hafızasında saklanır, hiçbir yere gönderilmez. Önceki sürümlerde eklediğin kitaplar ve notlar olduğu gibi kalır.

- **iPhone'da:** Ana ekrandaki simgeyle açılan uygulamanın verisi Safari'den ayrıdır; hep simgeden kullan.
- Sağ üstteki **≡** menüsünden **Yedek al** ile her şeyi tek dosya olarak kaydedebilir, **Yedekten yükle** ile geri alabilirsin.
- Kapak fotoğrafları küçültülerek kaydedilir, yine de yüzlerce kapaktan sonra hafıza dolabilir. Böyle bir uyarı görürsen yedek alıp bazı kapakları kaldırabilirsin.
