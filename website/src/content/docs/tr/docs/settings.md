---
title: Ayarlar
description: >-
  Genel, Modeller, Diller, Sözlük, Maliyet, Dönüştürme, Kullanıcılar, API ve
  Hakkında için kısa referans.
---



Uygulamanın nasıl davrandığını özelleştirmek için kenar çubuğundan **Ayarlar**'ı açın.

| Sekme | Masaüstü | Web (yönetici) | Web (kullanıcı) | Notlar |
| --- | :---: | :---: | :---: | --- |
| Genel Ayarlar | ✓ | ✓ | ✓ | **Yapay zeka deneyimi** (Kolay / Gelişmiş) içerir |
| Modeller | ✓ | ✓ | ✓ | Yalnızca **Yapay zeka deneyimi** **Gelişmiş** olduğunda |
| Diller | ✓ | ✓ | ✓ | |
| Maliyet Takibi | ✓ | ✓ | — | |
| Dönüştür | ✓ | ✓ | ✓ | İstemlerin toplu içe/dışa aktarımı |
| Sözlük | ✓ | ✓ | ✓ | Çeviri için terim çiftleri |
| Kullanıcılar | — | ✓ | — | |
| API Yapılandırması | ✓ | ✓ | — | |
| Hakkında | ✓ | ✓ | ✓ | |

**Kolay** modda, araç çubuğundaki ön ayarlar aracılığıyla yapay zekayı ve Genel Ayarlar'da **Sağlayıcı**'yı seçin; **Modeller** sekmesi gizlidir.

:::note
Web sürümünde, her kullanıcının kendi yapılandırması (yapay zeka deneyimi, sağlayıcı, modeller/ön ayarlar, diller, seçenekler, istemler) vardır. Yapılan değişiklikler diğer kullanıcıları etkilemez.
:::

## Genel Ayarlar

![Ayarlar Genel Ayarlar sekmesi](/images/screenshots/tr/settings-general.png)

**Yapay zeka deneyimi**

- **Kolay** (varsayılan): bir **Sağlayıcı** seçin. Bulut sağlayıcıları araç çubuğu ön ayarlarını kullanır. **Yerel LLM** bunun yerine yüklü yerel modelleri listeler. **Ön ayar kataloğunu yenile** projenin deposundan en son ön ayar listesini getirir.
  - **Ücretsiz (OpenRouter)** — mevcut ücretsiz modellere yönlendirilen sıfır maliyetli seçenek; kalite ve kullanılabilirlik değişebilir
  - **Standart** — hafif ve uygun maliyetli; kısa metinler, hızlı taslaklar ve yüksek hacimli kullanım için en iyisi
  - **Gelişmiş** — karmaşık veya nüanslı içerik için yüksek doğruluklu model, daha yüksek maliyetle
  - **Teknik** — kod, API'ler, geliştirici belgeleri ve yapılandırılmış içerik için ayarlanmıştır; biçimlendirmeyi ve terminolojiyi korur
- **Gelişmiş**: araç çubuğunda modelleri seçin; listeyi [Modeller](#models) altında yönetin.

Araç çubuğu ön ayar/model menüsünden de Kolay ↔ Gelişmiş arasında geçiş yapabilirsiniz (**Kolay/Gelişmiş moda geç**, Ayarları Aç'ın üstünde).

**Görünüm** — Tema; **Eylemlerde maliyet bilgilerini göster**; **Maliyet kesir basamakları**; uygulama çevresindeki yalnızca web kenar boşluğu; **Yazı Tipi Ailesi** ve **Boyutu**.

**Davranış** — **ENTER için davranış**; **Yapıştırmada otomatik yürütme**; **Sonucu panoya otomatik kopyala**; **Yazarken gerçek zamanlı çeviri**; **Zaman aşımı (ms)**.

**Geçmiş**

- **Yürütme geçmişini sakla** — [Geçmiş](/docs/history/) görünümü için girdi/çıktıyı depolar. Kapatmak onay ister ve depolanan metni kaldırabilir. *Yönetici tarafından devre dışı bırakıldı* olarak etiketlenmişse, `HISTORY_DISABLED` ayarlanır — bkz. [Yapılandırma](/docs/configuration/#privacy-mode).
- **Geçmiş verilerini sil** — depolanan metni yaşa göre kaldırın veya tümünü temizleyin. Maliyet toplamlarını **silmez** (bunun için Maliyet Takibini kullanın).

**Yapılandırma Yedeklemesi** (masaüstü ve web yöneticileri)

- İsteğe bağlı **Yedeklemeye kullanım verilerini dahil et**
- **Yapılandırmayı yedekle** — yapılandırma, durum, kullanıcılar, tercihler, istemler ve isteğe bağlı kullanım verileri içeren ZIP
- **Yedeklemeden geri yükle** — kullanım verilerini geri yükleme ve/veya temizleme seçenekleriyle onay iletişim kutusu

Yedeklemeler masaüstü ve web arasında taşınabilir; web'de bir masaüstü yedeklemesini geri yüklemek, verileri yönetici kullanıcısına uygular.

## Modeller

Yalnızca **Gelişmiş** modda kullanılabilir.

- **Mevcut Modeller** (sol) ve **Seçilen Modeller** (sağ)
- Ara, **Sağlayıcı** çipleri, **Yalnızca Ücretsiz**, **Yenile**, Tümünü Genişlet/Daralt
- Model kimlikleri bir sağlayıcı öneki kullanır (`openrouter/…`, `openai/…`, `local/…`, …)

:::tip
Çeviri, Yeniden Yazma veya Dönüştürme için OpenRouter **Body Builder** (`openrouter/bodybuilder`) kullanmayın; bitmiş metin değil, JSON istek yükleri döndürür.
:::

**Ekle** ile ekleyin; **X** ile kaldırın. OpenRouter ücretsiz modeli isteğe bağlıdır — seçilen modeller boş olabilir. Araç çubuğundan son modeli kaldırmak **Ayarlar → Modeller**'i açar. Mevcut model kullanılamaz hale gelirse, uygulama ücretsiz modeli zorlamak yerine listedeki bir sonraki modeli seçer.

## Diller

- **En çok kullanılan diller** — Çeviri ve Dönüştürme'deki dil listelerinin en üstüne sabitlenmiş
- **Özel dil** — yerleşik listede bulunmayan bir dil ekleyin

## Maliyet takibi

- **Toplam Maliyet**, **Değeri Kopyala**, **Maliyeti Sıfırla**
- **API anahtarı kullanımıyla senkronize et** — OpenRouter hesap kullanımıyla uyumlu hale getir (yalnızca OpenRouter)
- **API Anahtarı Kullanımı** — mevcut olduğunda OpenRouter ayrıntıları
- **Maliyet verilerini sil** — tüm veriler veya belirli bir tarihten eski girişler

OpenRouter, uygun olduğunda gerçek faturalandırılmış maliyeti gösterir; diğer sağlayıcılar OpenRouter fiyatlandırmasından tahminler kullanır. Tahminler fatura değildir.

:::caution
Maliyet verilerinin silinmesi geri alınamaz. Bir yedeğe ihtiyacınız varsa önce Geçmiş veya Kontrol Paneli → Tüm Çağrılar aracılığıyla dışa aktarın. Bu API çağrıları için ilgili girdi/çıktı geçmişi de kaldırılır.
:::

## Dönüştür

İstemleri toplu olarak yönetin: inceleyin, silin, içe aktarın, dışa aktarın ve örnek istemleri yükleyin.

## Terimler Sözlüğü

[Çeviri](/docs/translate/#use-the-glossary) sırasında uygulanan terim çiftlerini yönetin. Her terimin kaynak/hedef dili ve kaynak/hedef metni vardır.

- Alt satır ve **+** aracılığıyla ekleyin
- Dillere veya metne göre filtreleyin
- CSV veya XLSX içe/dışa aktarın; boş şablonları indirin

Masaüstü, terimler sözlüğünü yerel olarak depolar; web, kullanıcı başına depolar.

## Kullanıcılar

Yalnızca web (yöneticiler):

- Kullanıcı ekleyin, ayrıntıları güncelleyin, parolaları sıfırlayın, hesapları silin
- **Oturum Zaman Aşımı** — bir oturumun ne kadar sürdüğü (1 saatten 7 güne kadar); değişiklikler yalnızca yeni oturumlara uygulanır
- **Oturumları İptal Et** — bir kullanıcıyı tüm cihazlardan hemen oturumdan çıkarın

Oturum açmış her kullanıcı (yönetici olmayanlar dahil), kenar çubuğunun altındaki kullanıcı menüsünden kendi parolasını değiştirebilir veya oturumu kapatabilir.

## API Yapılandırması

Yalnızca kullandığınız sağlayıcıları yapılandırın: OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras, NVIDIA, Alibaba Cloud, apikey.fun, **Yerel LLM** (Ollama, LM Studio, llama.cpp veya benzeri için temel URL) ve isteğe bağlı özel OpenAI uyumlu bir sağlayıcı.

**Web (yönetici):** anahtarlar ortam değişkenlerinden gelir — bu sayfa hangilerinin ayarlandığını gösterir ve **Test Etmenizi** sağlar. Ortam değişkenlerini değiştirdikten sonra yeniden başlatın. [Yapılandırma](/docs/configuration/) bölümüne bakın.

**Masaüstü:** anahtarları (veya Yerel LLM URL'sini) girin ve **Kaydet** / **Düzenle** / **Test Et**. Anahtarlar şifreli olarak saklanır; mevcut değeri görüntüleyemezsiniz, yalnızca değiştirebilirsiniz.

:::tip
Başlamak için ücretli bir anahtara gerek yok: ücretsiz OpenRouter modellerini, diğer ücretsiz katman sağlayıcılarını veya [Ollama](https://ollama.com), LM Studio veya llama.cpp (örn. `translategemma:4b`) gibi yerel bir OpenAI uyumlu sunucuyu kullanın.
:::

## Hakkında

Uygulama adı, sürüm, derleme tarihi, lisans, üçüncü taraf bildirimleri ve depo bağlantısı.
