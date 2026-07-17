---
title: İsteğe bağlı iletileri dönüştür
description: >-
  Özel AI talimatlarını çalıştırın — Transform istemlerini oluşturun,
  düzenleyin, test edin ve yönetin.
translation_last_updated: '2026-07-17T21:14:50.469Z'
source_file_mtime: '2026-07-17T11:53:39.333Z'
source_file_hash: 07b5d140803063510c7c9fecf67a2f99e3aab3040116733a3126939b0c82e16e
translation_language: tr
source_file_path: src/content/docs/docs/transform.md
translation_models:
  - google/gemini-2.5-flash
  - meta-llama/llama-3.3-70b-instruct
---



Özel talimatları AI'ın izlemesini istediğinizde **Dönüştür**'ü kullanın — özetleyin, bir e-postayı düzenleyin, ana noktaları çıkarın, metni yeniden biçimlendirin veya tanımladığınız herhangi bir iş akışı.

![Dönüştürme alanı](/images/screenshots/tr/transform.png)

## Var olan bir istemi çalıştır

1. **Dönüştür**'ü açın.
2. Listedeki bir istemi seçin.
3. Bir **Dil** kutusu görünürse, bir dil ayarlamak istiyorsanız bunu yapın.
4. Metni **Giriş** alanına yazın veya yapıştırın.
5. **Dönüştür**'e tıklayın.
6. Sonucu **Çıktı** alanında okuyun.

## Örnek istemleri yükle

Eğer liste boşsa, Transform çalışma alanındaki **Örnek yükleyiciyi yükle** (ayrıca [Ayarlar → Dönüştür](/docs/settings/#transform) altında mevcuttur) tıklatın. Örnekler İngilizce olarak sunulmaktadır; yüklemeden sonra bir istemciyi düzenleyin ve gerekirse **İstemciyi çevir** seçeneğini kullanın.

## Bir istemi oluşturun

1. **Yeni istemi** tıklayın.
2. **İstemi oluştur**'a tıklayın.
3. İstemin ne yapmasını istediğinizi tanımlayın.
4. Bir ön ayar (Kolay) veya model (Gelişmiş) seçin.
5. Taslağı gözden geçirin ve **Kaydet**'e tıklayın.

## Bir istemi düzenleyin

Düzenleyici solda, test alanı sağdadır.

![Dönüştürme istemi düzenleyici](/images/screenshots/tr/transform-prompt-edit.png)

Ana alanlar:

- **İstem adı** — istem listesinde görünen ad
- **İstem talimatları (isteğe bağlı)** — kısa ipucu, istemi çalıştırırken
- **Model Rolü** — AI için genel rol
- **Model Talimatları (her satırda bir)** — takip edilecek kurallar
- **Çıktı açıklaması** — kısa etiket, sonuç için (ör. özetlenmiş)
- **Sıcaklık (0.0 → 1.0)** — daha düşük daha kararlı; daha yüksek daha çeşitli
- **Hedef dili iste** — çalıştırırken bir dil seçici ekler

Yardımcılar: **İstemi oluştur**, **İstemi geliştir**, **İstemi çevir** (Kolay ön ayarları kullanır; Gelişmiş model listesini kullanır).

:::caution
**Kaydet**'i **Geri Çalıştırmaya** gitmeden önce tıklatın. Kaydetmeden geri gitmek, düzenlemeleri atar.
:::

## Günlük kullanımdan önce test edin

İstemleri oluştururken veya karşılaştırırken sağdaki test panelini örnek metinle birlikte kullanın.

[Ayarlar → Dönüştür](/docs/settings/#transform) altında istemleri toplu olarak dışa ve içe aktarın.

## Sonraki adımlar

- [Ayarlar](/docs/settings/)
- [Geçmişe Göz At](/docs/history/)
- [Yaygın sorunlar](/docs/common-issues/)
