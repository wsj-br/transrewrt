---
title: Yaygın sorunlar
description: Transrewrt için sorun giderme ve hızlı ipuçları.
---



Bir şeyler beklendiği gibi çalışmazsa, önce bu noktaları kontrol edin.

## Uygulama çeviri, yeniden yazma veya dönüştürme yapmıyor

Şunları kontrol edin:

- araç çubuğunda bir **ön ayar** (Kolay) veya **model** (Gelişmiş) seçtiniz
- **Kolay** modda, **Ayarlar → Genel Ayarlar**'da çalışan bir anahtara (veya Yerel LLM URL'sine) sahip bir **Sağlayıcı** var
- **Gelişmiş** modda, araç çubuğunda bir model seçili (boş bir liste izinlidir, ancak çalıştırmak için **Ayarlar → Modeller**'de en az bir modele ihtiyacınız var)
- API kurulumunuz çalışıyor (masaüstü: **Ayarlar → API Yapılandırması → Test**)

## Model listesi boş

**Kolay** modda, **Sağlayıcı**'nın ayarlandığını ve anahtarların/URL'lerin test edildiğini onaylayın. **Yerel LLM** için, yerel sunucunuzun çalıştığından ve modellerin yüklendiğinden emin olun.

**Gelişmiş** modda, seçilen modeller boş olabilir. **Ayarlar → Modeller**'i açın, **Yenile**'ye tıklayın ve **Seçilen Modeller**'e modeller ekleyin. İsteğe bağlı olarak **Yalnızca Ücretsiz**'i açın. Son araç çubuğu modelini kaldırmak da Ayarlar → Modeller'i açar.

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

Bu normaldir eğer:

- yalnızca **ücretsiz modeller** kullanıyorsanız ve **maliyet** rakamlarına bakıyorsanız (sıfır olabilirler); çağrı sayısı KPI'ları yine de seçilen dönem için verilere ihtiyaç duyar
- seçilen **zaman filtresi** çağrıların yapıldığı zamanı kapsamıyorsa — **Tümü**'nü deneyin

**Tümü**'nden sonra KPI'lar hala sıfırsa, [Geçmiş](/docs/history/) veya Kontrol Paneli → **Tüm Çağrılar**'ı kontrol edin.

## Maliyet "mevcut değil" gösteriyor veya yanlış görünüyor

OpenRouter, uygun olduğunda gerçek harcamayı gösterir. Diğer sağlayıcılar için maliyet OpenRouter fiyatlandırmasından tahmin edilir; hiçbir fiyat eşleşmezse, maliyet **mevcut değil** olarak gösterilir ve toplama eklenmez.

## Toplam maliyet sağlayıcı faturamla eşleşmiyor

Uygulamadaki rakamlar fatura değil, **referans için tahminlerdir**. OpenRouter için **Ayarlar → Maliyet Takibi → API anahtarı kullanımıyla senkronize et** seçeneğini kullanın.

## Geçmiş sayfası kenar çubuğunda eksik

**Yürütme geçmişini sakla** kapalı olabilir. Yönetici tarafından geçmiş devre dışı bırakılmadıkça Genel Ayarlar'da etkinleştirin (`HISTORY_DISABLED` — bkz. [Yapılandırma](/docs/configuration/#privacy-mode)).

## Web: beklenmedik bir şekilde oturum açmaya yönlendirildi

Oturumunuzun süresi dolmuş olabilir. Tekrar oturum açın. Sık sık oluyorsa, bir yöneticiden [Ayarlar → Kullanıcılar](/docs/settings/#users) altında **Oturum Zaman Aşımı** süresini artırmasını isteyin (bir yönetici oturumlarınızı iptal etmiş de olabilir).

## Web yöneticisi: parolayı unuttum

Başka bir yönetici oturum açabiliyorsa, parolayı **Ayarlar → Kullanıcılar** altında sıfırlayabilir. Kilitli kaldıysanız ancak kabuk erişiminiz varsa:

```bash
docker exec transrewrt reset-web-password '<username>' '<new-password>'
```

Varsayılan yönetici kullanıcı adı `admin`'dır. Bir kaynak kontrolünden: `pnpm run reset-web-password -- <username> <new-password>`.

## Kontrol Paneli diğer kullanıcılar için veri göstermiyor (web)

Yalnızca **yöneticiler** **Kullanıcı** filtresi aracılığıyla diğer kullanıcıları görüntüleyebilir. Normal kullanıcılar yalnızca kendi etkinliklerini görür.

## Bir istemi değiştirdim ve düzenlemeleri kaybettim

Bir Dönüştürme istemini düzenlerken, **Çalıştırmaya Geri Dön**'den önce **Kaydet**'e tıklayın.

## Hızlı ipuçları

- Yeniden Yazma veya Dönüştürme'den önce kurulumunuzu onaylamak için [Çevir](/docs/translate/) ile başlayın
- Günlük ifade iyileştirmeleri için [Yeniden Yaz](/docs/rewrite/) kullanın
- Tekrarlanabilir özel iş akışları için [Dönüştür](/docs/transform/) kullanın
- Ayrıntılı model kimliklerine ihtiyacınız olana kadar **Kolay** modda kalın
- Bir istem kitaplığı oluşturuyorsanız istemleri düzenli olarak dışa aktarın
- Kullanımı ve geçmiş çalıştırmaları gözden geçirmek için [Kontrol Paneli](/docs/dashboard/) ve [Geçmiş](/docs/history/) kullanın

[Report an issue](https://github.com/wsj-br/transrewrt/issues)
