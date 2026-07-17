---
title: Metni çevir
description: >-
  Metni diller arasında dönüştürün, sözlüğü kullanın ve sonuçları Yeniden İfade
  Et ile iyileştirin.
---



Metni bir dilden diğerine dönüştürmek için **Çevir**'i kullanın.

![Çalışma alanını çevir](/images/screenshots/tr/translate.png)

## Önkoşullar

- En az bir sağlayıcı anahtarı (masaüstü) veya sunucu ortam anahtarı (web) — bkz. [API anahtarı](/docs/api-key/)
- Araç çubuğunda seçili bir **ön ayar** (Kolay) veya **model** (Gelişmiş)

## Metni çevir

1. Kenar çubuğunda **Çevir**'i açın.
2. **Kimden**'de bir dil seçin (veya **Dili Algıla**).
3. **Kime**'de bir dil seçin.
4. Araç çubuğunda bir ön ayar veya model seçin.
5. Metni **Giriş** alanına yazın veya yapıştırın.
6. **Çevir**'e tıklayın.
7. Sonucu **Çıkış**'ta okuyun, ardından gerekirse kopyalayın.

**En çok kullanılan diller** listelerde ilk sırada görünür — bunları [Ayarlar → Diller](/docs/settings/#languages) altında ayarlayın.

## Yararlı ayarlar

[Ayarlar → Genel Ayarlar](/docs/settings/#general-settings) bölümünde:

- **Yapıştırmada otomatik yürütme** — yapıştırdığınız anda çalışır
- **Sonucu otomatik olarak panoya kopyala** — başarılı bir çalıştırmadan sonra kopyalar
- **Yazarken gerçek zamanlı çeviri** — siz yazarken çalışır (maliyeti artırabilir)
- **Zaman aşımı (ms)** — gerçek zamanlı çalıştırmadan önce bekleme süresi
- **ENTER davranışı** — Enter tuşunun görevi çalıştırıp çalıştırmayacağı veya yeni bir satır ekleyip eklemeyeceği

## Bir çeviriyi iyileştirin

Başarılı bir çalıştırmadan sonra, **Kime:** seçicisinin yanında **Yeniden İfade Et…** ve bir sürüm açılır menüsü görünür:

1. **Yeniden İfade Et…** (seçim yok) — aynı girdinin başka bir tam çevirisi. En fazla **beş** sürüm; model önceki sürümleri görür, böylece ifade farklılık gösterebilir. Çalışan bir yeniden ifadeyi iptal etmek için **Çeviriyi Durdur**'a tıklayın.
2. **Kelime alternatifleri** — kelimeleri veya kısa bir ifadeyi seçin, ardından sağ tıklayın veya **Yeniden İfade Et…**'e tıklayın. Aralığı değiştirmek için bir alternatif seçin (dilbilgisi için biraz genişleyebilir). Beş sürümde, yalnızca 5. sürüm güncellenir.
3. Her yeniden ifade veya alternatif isteği modeli tekrar kullanır ve maliyeti artırabilir.

## Sözlüğü kullanın

Bir **sözlük**, bir dil çifti için kaynak/hedef terim çiftleridir. Etkinleştirildiğinde, eşleşen terimler modele gönderilir, böylece tercih edilen ifade tutarlı kalır.

1. Giriş panelinde **Sözlük**'ü açın.
2. Her zamanki gibi çevirin — o **Kimden** / **Kime** çifti için terimler otomatik olarak uygulanır.
3. Yeni bir çifti hızlıca yakalamak için **Sözlüğe Ekle**'ye (**Kimden:**'in yanında) tıklayın.
4. Tüm terimleri [Ayarlar → Sözlük](/docs/settings/#glossary) bölümünde yönetin.

:::note
Terimler sözlüğü dil çiftine göre eşleştirilir. Kaynak olarak **Dili Algıla** ile kullanılamazlar.
:::

## Sonraki adımlar

- [Metni yeniden yaz](/docs/rewrite/)
- [İstemlerle dönüştür](/docs/transform/)
- [Yaygın sorunlar](/docs/common-issues/)
