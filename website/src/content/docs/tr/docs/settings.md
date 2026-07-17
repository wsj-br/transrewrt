---
title: Ayarlar
description: >-
  Genel, Modeller, Diller, Sözlük, Maliyet, Dönüştürme, Kullanıcılar, API ve
  Hakkında için kısa referans.
translation_last_updated: '2026-07-17T14:59:03.706Z'
source_file_mtime: '2026-07-17T14:37:21.849Z'
source_file_hash: 492e5fd37f4a6b282502282d4f2728047a0d09ae8c30334b3c8388a5ce6e9f68
translation_language: tr
source_file_path: src/content/docs/docs/settings.md
translation_models:
  - google/gemini-2.5-flash
---



Uygulamanın nasıl davrandığını özelleştirmek için kenar çubuğundan **Ayarlar**'ı açın.

| Sekme | Masaüstü | Web (yönetici) | Web (kullanıcı) | Notlar |
| --- | :---: | :---: | :---: | --- |
| Genel Ayarlar | evet | evet | evet | **Yapay zeka deneyimi** (Kolay / Gelişmiş) içerir |
| Modeller | evet | evet | evet | Yalnızca **Yapay zeka deneyimi** **Gelişmiş** olduğunda |
| Diller | evet | evet | evet | |
| Maliyet Takibi | evet | evet | — | |
| Dönüştürme | evet | evet | evet | İstemlerin toplu içe/dışa aktarımı |
| Sözlük | evet | evet | evet | Çeviri için terim çiftleri |
| Kullanıcılar | — | evet | — | |
| API Yapılandırması | evet | evet | — | |
| Hakkında | evet | evet | evet | |

**Kolay** modda, araç çubuğundaki ön ayarlardan ve Genel Ayarlar'daki **Sağlayıcı**'dan yapay zekayı seçin; **Modeller** sekmesi gizlidir.

:::note
Web sürümünde, her kullanıcının kendi yapılandırması (yapay zeka deneyimi, sağlayıcı, modeller/ön ayarlar, diller, seçenekler, istemler) vardır. Yapılan değişiklikler diğer kullanıcıları etkilemez.
:::

## Genel ayarlar

**Yapay zeka deneyimi**

- **Kolay** (varsayılan): bir **Sağlayıcı** seçin. Bulut sağlayıcıları araç çubuğu ön ayarlarını kullanır (**Ücretsiz (OpenRouter)**, **Standart**, **Gelişmiş**, **Teknik**). **Yerel LLM** bunun yerine yüklü yerel modelleri listeler. **Ön ayar kataloğunu yenile** projenin deposundan en son ön ayar listesini getirir.
- **Gelişmiş**: araç çubuğunda modelleri seçin; listeyi [Modeller](#models) altında yönetin.

**Görünüm** — Tema; **Eylemlerde maliyet bilgisini göster**; **Maliyet kesir basamakları**; yalnızca web için uygulama etrafındaki kenar boşluğu; **Yazı Tipi Ailesi** ve **Boyutu**.

**Davranış** — **ENTER için davranış**; **Yapıştırmada otomatik yürütme**; **Sonucu panoya otomatik kopyala**; **Yazarken gerçek zamanlı çeviri**; **Zaman aşımı (ms)**.

**Geçmiş**

- **Yürütme geçmişini sakla** — [Geçmiş](/docs/history/) görünümü için girdi/çıktıyı saklar. Kapatmak onay ister ve depolanan metni kaldırabilir. *Yönetici tarafından devre dışı bırakıldı* olarak etiketlenmişse, `HISTORY_DISABLED` ayarlanmıştır — bkz. [Yapılandırma](/docs/configuration/#privacy-mode).
- **Geçmiş verilerini sil** — depolanan metni yaşa göre kaldırın veya tümünü temizleyin. Maliyet toplamlarını **silmez** (bunun için Maliyet Takibi'ni kullanın).

**Yapılandırma Yedeklemesi** (masaüstü ve web yöneticileri)

- İsteğe bağlı **Kullanım verilerini yedeklemeye dahil et**
- **Yapılandırmayı yedekle** — yapılandırma, durum, kullanıcılar, tercihler, istemler ve isteğe bağlı kullanım verileri içeren ZIP
- **Yedekten geri yükle** — kullanım verilerini geri yükleme ve/veya temizleme seçenekleriyle onay iletişim kutusu

Yedeklemeler masaüstü ve web arasında taşınabilir; bir masaüstü yedeklemesini web'e geri yüklemek, verileri yönetici kullanıcısına uygular.

## Modeller

Yalnızca **Gelişmiş** modda kullanılabilir.

![Ayarlar Modeller sekmesi](/images/screenshots/tr/settings-general.png)

- **Mevcut Modeller** (sol) ve **Seçili Modeller** (sağ)
- Arama, **Sağlayıcı** çipleri, **Yalnızca Ücretsiz**, **Yenile**, Tümünü Genişlet/Daralt
- Model kimlikleri bir sağlayıcı öneki kullanır (`openrouter/…`, `openai/…`, `local/…`, …)

:::caution
Çeviri, Yeniden Yazma veya Dönüştürme için OpenRouter **Body Builder** (`openrouter/bodybuilder`) kullanmayın — bitmiş metin değil, JSON istek yükleri döndürür.
:::

**Ekle** ile ekleyin; **X** ile kaldırın. **Tüm seçimleri kaldır** gerekli ücretsiz modeli tutar.

## Diller

- **En çok kullanılan diller** — Çeviri ve Dönüştürme'deki dil listelerinin en üstüne yakın sabitlenmiş diller
- **Özel dil** — yerleşik listede olmayan bir dil ekleyin

## Maliyet takibi

- **Toplam Maliyet**, **Değeri Kopyala**, **Maliyeti Sıfırla**
- **API anahtarı kullanımıyla senkronize et** — OpenRouter hesap kullanımıyla hizala (yalnızca OpenRouter)
- **API Anahtarı Kullanımı** — mevcut olduğunda OpenRouter ayrıntıları
- **Maliyet verilerini sil** — tüm veriler veya belirli bir tarihten eski girişler

OpenRouter, uygulanabilir olduğunda gerçek faturalandırılan maliyeti gösterir; diğer sağlayıcılar OpenRouter fiyatlandırmasından tahminler kullanır. Tahminler fatura değildir.

:::caution
Maliyet verisi silme işlemi geri alınamaz. Bir yedeğe ihtiyacınız varsa önce Geçmiş veya Kontrol Paneli → Tüm Çağrılar aracılığıyla dışa aktarın. Bu API çağrıları için ilgili girdi/çıktı geçmişi de kaldırılır.
:::

## Dönüştür

İstemleri toplu olarak yönetin: örnek istemleri inceleyin, silin, içe aktarın, dışa aktarın ve yükleyin.

## Terimler Sözlüğü

[Çeviri](/docs/translate/#use-the-glossary) sırasında uygulanan terim çiftlerini yönetin. Her terimin kaynak/hedef dili ve kaynak/hedef metni vardır.

- Alt satırdan ve **+** ile ekleyin
- Dillere veya metne göre filtreleyin
- CSV veya XLSX içe/dışa aktarın; boş şablonları indirin

Masaüstü sözlüğü yerel olarak depolar; web ise kullanıcı başına depolar.

## Kullanıcılar

Yalnızca web (yöneticiler): kullanıcı ekleyin, ayrıntıları güncelleyin, şifreleri sıfırlayın, hesapları silin.

## API yapılandırması

Yalnızca kullandığınız sağlayıcıları yapılandırın: OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras, NVIDIA, Alibaba Cloud, apikey.fun, **Yerel LLM** (Ollama, LM Studio, llama.cpp veya benzeri için temel URL) ve isteğe bağlı özel OpenAI uyumlu bir sağlayıcı.

**Web (yönetici):** anahtarlar ortam değişkenlerinden gelir — bu sayfa hangilerinin ayarlandığını gösterir ve **Test Et**'menizi sağlar. Ortam değişkenlerini değiştirdikten sonra yeniden başlatın. [Yapılandırma](/docs/configuration/) bölümüne bakın.

**Masaüstü:** anahtarları (veya Yerel LLM URL'sini) girin ve **Kaydet** / **Düzenle** / **Test Et**. Anahtarlar şifreli olarak saklanır; mevcut değeri görüntüleyemezsiniz, yalnızca değiştirebilirsiniz.

:::tip
Başlamak için ücretli bir anahtara gerek yok: ücretsiz OpenRouter modellerini, diğer ücretsiz katman sağlayıcılarını veya [Ollama](https://ollama.com), LM Studio veya llama.cpp (örn. `translategemma:4b`) gibi yerel bir OpenAI uyumlu sunucuyu kullanın.
:::

## Hakkında

Uygulama adı, sürüm, derleme tarihi, lisans, üçüncü taraf bildirimleri ve depo bağlantısı.
