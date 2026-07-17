---
title: Kontrol Paneli'ni kullanın
description: >-
  Kullanım, maliyet ve çağrı günlüklerini inceleyin; depolanan kayıtları
  filtreleyin, dışa aktarın ve yönetin.
translation_last_updated: '2026-07-17T14:59:02.559Z'
source_file_mtime: '2026-07-17T11:53:39.333Z'
source_file_hash: 689c93c2517f806f7976d570b4fc86d30ca048ce906d982429b985ad06dd9250
translation_language: tr
source_file_path: src/content/docs/docs/dashboard.md
translation_models:
  - google/gemini-2.5-flash
---



Uygulamayı ne kadar kullandığınızı ve maliyetini (ücretli modeller için) görmek için **Kontrol Paneli**'ni kullanın.

![Kontrol Paneli özeti](/images/screenshots/tr/dashboard-summary.png)

:::note
Yalnızca **ücretsiz** modeller kullanıyorsanız, maliyet tutarları sıfır olabilir. **Özet** bölümündeki çağrı sayısı KPI'ları, seçilen dönemde yine de etkinlik gerektirir.
:::

## Verileri filtrele

Zaman aralığını değiştirmek için üstteki filtre düğmelerini kullanın.

:::note
**Kullanıcı** filtresi yalnızca web sürümündeki yöneticiler tarafından görülebilir. Masaüstünde mevcut değildir.
:::

## Sekmeler

- **Özet** — KPI'lar: toplam maliyet, kullanılan modeller, mod başına çağrı sayıları ve maliyeti, çağrı başına ortalama maliyet, ortalama TPS, çağrı sayısına göre en iyi modeller
- **Modele Göre** — model başına çağrılar, maliyet ve TPS; mod dökümü için bir satırı genişletin
- **Tüm Çağrılar** — dışa aktarma özellikli tam çağrı günlüğü (sayfalandırılmış veya kartlar)

## Verileri dışa aktar

Tabloları **JSON**, **CSV** veya **XLSX** olarak dışa aktarın.

## Bir model için depolanan kayıtları silin

**Modele Göre** veya **Tüm Çağrılar** bölümünde, bir modelin kayıtlarını kaldırmak için çöp kutusu simgesini kullanın.

:::caution
Silme işlemi geri alınamaz. Yaşa göre silmek veya tüm maliyet verilerini temizlemek için [Ayarlar → Maliyet Takibi](/docs/settings/#cost-tracking) bölümünü kullanın.
:::

## Sonraki adımlar

- [Geçmişe Göz At](/docs/history/)
- [Ayarlar](/docs/settings/)
- [Yaygın sorunlar](/docs/common-issues/)
