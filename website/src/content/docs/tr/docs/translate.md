---
title: Metni çevir
description: >-
  Metni diller arasında dönüştürün, sözlüğü kullanın ve Rephrase ile sonuçları
  iyileştirin.
---



Metni bir dilden diğerine dönüştürmek için **Çevir**'i kullanın.

![Çeviri çalışma alanı](/images/screenshots/tr/translate.png)

## Önkoşullar

- En az bir sağlayıcı anahtarı (masaüstü) veya sunucu ortam anahtarı (web) — bkz. [API anahtarı](/docs/api-key/)
- Araç çubuğunda seçili bir **ön ayar** (Kolay) veya **model** (Gelişmiş)

## Metni çevir

1. Kenar çubuğunda **Çevir**'i açın.
2. **Kimden** bölümünde bir dil seçin (veya **Dili Algıla**).
3. **Kime** bölümünde bir dil seçin.
4. Araç çubuğunda bir ön ayar veya model seçin.
5. Metni **Giriş** alanına yazın veya yapıştırın.
6. **Çevir**'e tıklayın.
7. Sonucu **Çıktı** bölümünde okuyun, ardından gerekirse kopyalayın.

Listelerde ilk olarak **En çok kullanılan diller** görünür — bunları [Ayarlar → Diller](/docs/settings/#languages) altında ayarlayın.

## Yararlı ayarlar

[Ayarlar → Genel Ayarlar](/docs/settings/#general-settings) bölümünde:

- **Yapıştırmada otomatik yürütme** — yapıştırdığınız anda çalışır
- **Sonucu panoya otomatik kopyala** — başarılı bir çalıştırmadan sonra kopyalar
- **Yazarken gerçek zamanlı çeviri** — yazarken çalışır (maliyeti artırabilir)
- **Zaman aşımı (ms)** — gerçek zamanlı çalıştırmadan önce bekleme süresi
- **ENTER davranışı** — Enter tuşunun görevi mi çalıştıracağı yoksa yeni bir satır mı ekleyeceği

## Düzen ve klavye

- **Düzen değiştirme** — panellerin üzerindeki düğmeler, **yan yana** ve **üst üste** Giriş/Çıkış düzenleri arasında geçiş yapar. Seçim Çevir, Yeniden Yaz ve Dönüştür için geçerlidir ve bu cihazda hatırlanır.
- **Enter** veya **Shift+Enter**, **ENTER davranışı**na bağlı olarak görevi çalıştırır (yukarıya bakın).
- **Escape** Giriş panelini temizler (veya önce açık bir menüyü veya iletişim kutusunu kapatır).

## Bir çeviriyi iyileştirin

Başarılı bir çalıştırmadan sonra, **Yeniden ifade et…** ve bir sürüm açılır menüsü **Kime:** seçicisinin yanında görünür:

1. **Yeniden ifade et…** (seçim yok) — aynı girdinin başka bir tam çevirisi. En fazla **beş** sürüm; model önceki sürümleri görür, böylece ifade farklılık gösterebilir. Devam eden bir yeniden ifadeyi iptal etmek için **Çeviriyi Durdur**'a tıklayın.
2. **Kelime alternatifleri** — kelimeleri veya kısa bir ifadeyi seçin, ardından sağ tıklayın veya **Yeniden ifade et…**. Aralığı değiştirmek için bir alternatif seçin (dilbilgisi için biraz genişleyebilir). Beş sürümde, yalnızca 5. sürüm güncellenir.
3. Her yeniden ifade veya alternatif isteği modeli tekrar kullanır ve maliyet ekleyebilir.

## Sözlüğü kullanın

Bir **sözlük**, bir dil çifti için kaynak/hedef terim çiftleridir. Etkinleştirildiğinde, eşleşen terimler modele gönderilir, böylece tercih edilen ifade tutarlı kalır.

1. Giriş panelinde **Sözlük**'ü açın.
2. Her zamanki gibi çeviri yapın — o **Kaynak** / **Hedef** çiftine ait terimler otomatik olarak uygulanır.
3. Yeni bir çifti hızlıca yakalamak için **Sözlüğe Ekle**'ye (**Kaynak:**'ın yanında) tıklayın.
4. Tüm terimleri [Ayarlar → Sözlük](/docs/settings/#glossary) bölümünde yönetin.

:::note
Sözlük terimleri dil çiftine göre eşleştirilir. Kaynak olarak **Dili Algıla** ile kullanılamazlar.
:::

## Sonraki adımlar

- [Metni yeniden yazma](/docs/rewrite/)
- [İstemlerle dönüştürme](/docs/transform/)
- [Sık karşılaşılan sorunlar](/docs/common-issues/)
