---
title: Yaygın sorunlar
description: Transrewrt için sorun giderme ve hızlı ipuçları.
---



Beklenmedik bir durumla karşılaşırsanız, önce bu noktaları kontrol edin.

## Uygulama çeviri, yeniden yazma veya dönüştürme yapmıyor

Şunları kontrol edin:

- araç çubuğunda bir **ön ayar** (Kolay) veya **model** (Gelişmiş) seçtiniz
- **Kolay** modda, **Ayarlar → Genel Ayarlar** bölümünde çalışan bir anahtara (veya Yerel LLM URL'sine) sahip bir **Sağlayıcı** bulunur
- **Gelişmiş** modda, **Ayarlar → Modeller** bölümünde en az bir model listelenir
- API kurulumunuz çalışıyor (masaüstü: **Ayarlar → API Yapılandırması → Test**)

## Model listesi boş

**Kolay** modda, **Sağlayıcı**'nın ayarlandığını ve anahtarların/URL'lerin test edildiğini onaylayın. **Yerel LLM** için, yerel sunucunuzun çalıştığından ve modellerin yüklendiğinden emin olun.

**Gelişmiş** modda, **Ayarlar → Modeller**'i açın, **Yenile**'ye tıklayın ve **Seçilen Modeller**'e modeller ekleyin. İsteğe bağlı olarak **Yalnızca Ücretsiz**'i açın.

## Çok yavaş veya çok pahalı

- Farklı bir ön ayar veya model seçin
- Daha kısa giriş kullanın
- Genel Ayarlar'da **Yazarken gerçek zamanlı çeviri**'yi kapatın
- Basit görevler için ücretsiz modeller kullanın

## Yanlış arayüz dili

Araç çubuğundaki dünya simgesine tıklayın ve **Arayüz dili**'nizi seçin.

## Metin çok küçük veya okunması zor

**Ayarlar → Genel Ayarlar** → **Yazı Tipi Ailesi** ve **Boyut**'u değiştirin.

## Kontrol Paneli Özeti boş görünüyor

Bu durum şu durumlarda normaldir:

- yalnızca **ücretsiz modeller** kullanıyorsanız ve **maliyet** rakamlarına bakıyorsanız (sıfır olabilirler); çağrı sayısı KPI'ları yine de seçilen dönem için verilere ihtiyaç duyar
- seçilen **zaman filtresi** çağrıların yapıldığı zamanı kapsamıyorsa — **Tümü**'nü deneyin

**Tümü**'nden sonra KPI'lar hala sıfırsa, [Geçmiş](/docs/history/) veya Kontrol Paneli → **Tüm Çağrılar**'ı kontrol edin.

## Maliyet "kullanılamıyor" gösteriyor veya yanlış görünüyor

OpenRouter, uygun olduğunda gerçek harcamayı gösterir. Diğer sağlayıcılar için maliyet, OpenRouter fiyatlandırmasından tahmin edilir; hiçbir fiyat eşleşmezse, maliyet **kullanılamıyor** olarak gösterilir ve toplama eklenmez.

## Toplam maliyet sağlayıcı faturamla eşleşmiyor

Uygulamadaki rakamlar **referans için tahminlerdir**, fatura değildir. OpenRouter için **Ayarlar → Maliyet Takibi → API anahtarı kullanımıyla senkronize et**'i kullanın.

## Geçmiş sayfası kenar çubuğunda eksik

**Yürütme geçmişini sakla** kapalı olabilir. Yönetici tarafından devre dışı bırakılmadıkça Genel Ayarlar'da etkinleştirin (`HISTORY_DISABLED` — bkz. [Yapılandırma](/docs/configuration/#privacy-mode)).

## Web: beklenmedik bir şekilde oturum açmaya yönlendirildi

Oturumunuzun süresi dolmuş olabilir. Tekrar giriş yapın. Sık sık oluyorsa, sunucu oturum ömrü ayarlarını kontrol edin.

## Web yöneticisi: parolayı unuttum

Başka bir yönetici oturum açabiliyorsa, parolayı **Ayarlar → Kullanıcılar** altında sıfırlayabilir. Kilitli kaldıysanız ancak kabuk erişiminiz varsa:

```bash
docker exec transrewrt reset-web-password '<username>' '<new-password>'
```

Varsayılan yönetici kullanıcı adı `admin`'dır. Bir kaynak kontrolünden: `pnpm run reset-web-password -- <username> <new-password>`.

## Kontrol Paneli diğer kullanıcılar için veri göstermiyor (web)

Yalnızca **yöneticiler**, **Kullanıcı** filtresi aracılığıyla diğer kullanıcıları görüntüleyebilir. Normal kullanıcılar yalnızca kendi etkinliklerini görür.

## Bir istemi değiştirdim ve düzenlemelerimi kaybettim

Bir Dönüştürme istemini düzenlerken, **Çalıştırmaya Geri Dön**'den önce **Kaydet**'e tıklayın.

## Hızlı ipuçları

- Yeniden Yazma veya Dönüştürme'den önce kurulumunuzu onaylamak için [Çevir](/docs/translate/) ile başlayın
- Günlük kelime iyileştirmeleri için [Yeniden Yaz](/docs/rewrite/) kullanın
- Tekrarlanabilir özel iş akışları için [Dönüştür](/docs/transform/) kullanın
- Ayrıntılı model kimliklerine ihtiyacınız olana kadar **Kolay** modda kalın
- Bir istem kitaplığı oluşturuyorsanız istemleri düzenli olarak dışa aktarın
- Kullanımı ve geçmiş çalıştırmaları incelemek için [Kontrol Paneli](/docs/dashboard/) ve [Geçmiş](/docs/history/) kullanın

[Report an issue](https://github.com/wsj-br/transrewrt/issues)
