# Cihan Okuyor

Her ay üç kitap okuma hedefini takip etmek için telefona göre tasarlanmış, sade bir uygulama.

- Üstte yıl (‹ 2026 ›) ve ay şeridi; ekranı sağa sola kaydırarak da ay değiştirebilirsin
- Her kitapta büyük **Okuyorum** ve **Okudum** butonları (aynı butona tekrar basınca kitap "okunmadı"ya döner)
- Renkler: 🔴 okunmadı · 🟡 okunuyor · 🟢 okundu
- Kitabın yanındaki **⋯** ile düzenle / sil
- Her ay için 3 kitaplık hedef noktaları ve yıllık özet
- Ana ekrana eklenince uygulama gibi tam ekran açılır, internet olmadan da çalışır

## Dosyalar

```
index.html              uygulamanın kendisi
manifest.webmanifest    ana ekran uygulaması ayarları
sw.js                   internetsiz çalışma
icons/                  uygulama ikonları
```

## 1. GitHub'a yükle

1. GitHub'da yeni bir depo oluştur, adı `cihan-okuyor` olsun (**Public** seç).
2. Depoda **Add file → Upload files**'a bas.
3. Zip'ten çıkan **bütün dosyaları ve `icons` klasörünü** sayfaya sürükle, **Commit changes**'e bas.
4. **Settings → Pages** bölümüne git. *Source*: **Deploy from a branch**, branch: **main**, klasör: **/ (root)** → **Save**.
5. 1–2 dakika sonra uygulaman şu adreste açılır:
   `https://KULLANICI-ADIN.github.io/cihan-okuyor/`

## 2. Telefona kur

**iPhone (Safari ile aç):** alttaki **Paylaş** simgesi → **Ana Ekrana Ekle** → **Ekle**.

**Android (Chrome ile aç):** sağ üstteki **⋮** menü → **Uygulamayı yükle** (ya da **Ana ekrana ekle**).

Artık ana ekranında "Cihan Okuyor" ikonu olur ve uygulama gibi açılır.

## Veriler nerede duruyor?

Kitapların telefonunun kendi hafızasında saklanır, GitHub'a ya da başka bir yere gönderilmez.

- **iPhone'da önemli:** Ana ekrandaki ikonla açılan uygulamanın verisi, Safari'de açılan sekmeden ayrıdır. Kurduktan sonra hep ana ekrandaki ikondan kullan.
- Telefon değiştirirken ya da tedbir olarak sağ üstteki **⋯ → Yedek al** ile listeni dosya olarak kaydet. Yeni telefonda **⋯ → Yedekten yükle** ile geri yükleyebilirsin.

## Güncelleme yaparsan

`index.html`'i değiştirip GitHub'a yüklediğinde telefon yeni sürümü internete bağlıyken kendiliğinden alır.
İkonları değiştirirsen `sw.js` içindeki `cihan-okuyor-v1` yazısını `cihan-okuyor-v2` yap ki telefon eski ikonları bıraksın.
