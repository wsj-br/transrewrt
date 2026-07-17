---
title: Metni yeniden yaz
description: >-
  Aynı dildeki ifadeyi iyileştirin: netlik, ton, uzunluk, dil bilgisi ve daha
  fazlası.
translation_last_updated: '2026-07-17T21:14:50.371Z'
source_file_mtime: '2026-07-17T11:53:39.333Z'
source_file_hash: ca70a1d16518bb9193c83911bfb7be66b19076c48b914b92aba4e9a17f67740f
translation_language: tr
source_file_path: src/content/docs/docs/rewrite.md
translation_models:
  - google/gemini-2.5-flash
  - meta-llama/llama-3.3-70b-instruct
---



Ana anlamı değiştirmeden ifadeyi iyileştirmek için **Yeniden Yaz**'ı kullanın. Metin aynı dilde kalır.

![Yeniden yazma çalışma alanı](/images/screenshots/tr/rewrite.png)

Modlar şunları içerir:

- **Yazım ve Dil Bilgisi Denetimi**
- **Netliği İyileştir**
- **Alternatif sürümler** (tek çalıştırmada birkaç yeniden düzenleme)
- **Resmileştir** / **Gayri Resmileştir**
- **Kısalt** / **Genişlet**
- **Teknikleştir**

## Metni yeniden yaz

1. **Yeniden Yaz**'ı açın.
2. Bir **Mod** seçin.
3. İsteğe bağlı olarak **Kimden**'i metninizin diline ayarlayın (veya **Dili Algıla**'yı bırakın).
4. Metni **Giriş** alanına yazın veya yapıştırın.
5. **Yeniden Yaz**'a tıklayın.
6. Sonucu **Çıktı**'da okuyun.

:::tip
**Yazım ve Dil Bilgisi Denetimi**'nde, **Kopyala**'nın yanında bir **Değişiklikleri göster** anahtarı görünür. Düzeltmeleri göstermek veya gizlemek için bu anahtarı açıp kapatın.
:::

:::note
**Alternatif sürümler**, `----` ile ayrılmış olarak **tek** bir çalıştırmada birkaç yeniden düzenleme döndürür. Bu, zaman içinde bir sürüm geçmişi oluşturan **Yeniden İfade Et…**'ten farklıdır.
:::

## Yeniden yazmayı iyileştir

Başarılı bir çalışmadan sonra, **Yeniden Düzenle…** ve sürüm açılır menüsü çıktı tarafında görünür (aynı fikir olarak [Çevir](/docs/translate/#refine-a-translation), ancak metin aynı dilde kalır ve geçerli **Mod**'u korur):

1. **Yeniden İfade Et…** (seçim yok) — farklı bir ifadeyle başka bir tam yeniden yazma. Beş adede kadar sürüm. İptal etmek için **Yeniden Yazmayı Durdur**'a tıklayın.
2. **Kelime alternatifleri** — metni seçin, ardından sağ tıklayın veya **Yeniden İfade Et…**.
3. Her istek kullanım maliyeti ekleyebilir.

## Sonraki adımlar

- [Metni çevir](/docs/translate/)
- [İstemlerle dönüştür](/docs/transform/)
- [Yaygın sorunlar](/docs/common-issues/)
