---
translation_last_updated: '2026-04-28T00:52:59.632Z'
source_file_mtime: '2026-04-27T17:00:19.020Z'
source_file_hash: 253d03c03bd028d8119ce13e1d810e974a386f3e98054a9e750d5ecfbf1c76d0
translation_language: tr
source_file_path: USER-GUIDE.md
translation_models:
  - anthropic/claude-3.5-haiku
  - deepseek/deepseek-v3.2
  - openai/gpt-4o-mini
  - qwen/qwen3-235b-a22b-2507
---
![Transrewrt banner](../images/transrewrt_banner.png)

<a id="transrewrt-user-guide"></a>
# Kullanıcı Kılavuzu

<br/>

<a id="introduction"></a>
## Giriş

Transrewrt, metinle üç ana şekilde çalışmanıza yardımcı olur:

- **Çevir** - metni bir dilden diğerine dönüştürme.
- **Yeniden yaz** - metni daha açık, daha kısa veya daha resmi gibi farklı bir şekilde yeniden ifade etme.
- **Dönüştür** - istem adı verilen özel AI talimatlarını kullanarak metni işleme.

<br/>

Bu kılavuz, uygulama yüklendikten ve çalıştırıldığında nasıl kullanılacağını açıklar. Kurulum adımları için ana **[README](README.tr.md)** dosyasına bakın.

<br/>

> ℹ️ **NOT**<br/>
> Transrewrt, Windows ve Linux için masaüstü uygulaması olarak ve kendin barındırabileceğin bir web uygulaması olarak mevcuttur. Bu kılavuz, uygulamanın günlük kullanımına odaklanır. Bir şey yalnızca bir sürüme uygulanıyorsa, bunun açıkça belirtilir.

<small>**Diğer dillerde oku:** </small>
<small id="lang-list">[English (GB)](../USER-GUIDE.md) · [Português (Brasil)](./USER-GUIDE.pt-BR.md) · [العربية](./USER-GUIDE.ar.md) · [বাংলা](./USER-GUIDE.bn.md) · [Català](./USER-GUIDE.ca.md) · [中文 (中国大陆)](./USER-GUIDE.zh-CN.md) · [中文 (台灣)](./USER-GUIDE.zh-TW.md) · [Hrvatski](./USER-GUIDE.hr.md) · [Čeština](./USER-GUIDE.cs.md) · [Nederlands](./USER-GUIDE.nl.md) · [English (US)](./USER-GUIDE.en-US.md) · [Tagalog](./USER-GUIDE.tl.md) · [Français](./USER-GUIDE.fr.md) · [Deutsch](./USER-GUIDE.de.md) · [Ελληνικά](./USER-GUIDE.el.md) · [हिन्दी](./USER-GUIDE.hi.md) · [Magyar](./USER-GUIDE.hu.md) · [Italiano](./USER-GUIDE.it.md) · [日本語](./USER-GUIDE.ja.md) · [한국어](./USER-GUIDE.ko.md) · [Bahasa Melayu](./USER-GUIDE.ms.md) · [فارسی](./USER-GUIDE.fa.md) · [Polski](./USER-GUIDE.pl.md) · [Basa Jawa](./USER-GUIDE.jv.md) · [Português](./USER-GUIDE.pt.md) · [ਪੰਜਾਬੀ](./USER-GUIDE.pa.md) · [Română](./USER-GUIDE.ro.md) · [Русский](./USER-GUIDE.ru.md) · [Slovenčina](./USER-GUIDE.sk.md) · [Español](./USER-GUIDE.es.md) · [Kiswahili](./USER-GUIDE.sw.md) · [Svenska](./USER-GUIDE.sv.md) · [తెలుగు](./USER-GUIDE.te.md) · [ไทย](./USER-GUIDE.th.md) · [Türkçe](./USER-GUIDE.tr.md) · [Українська](./USER-GUIDE.uk.md) · [Tiếng Việt](./USER-GUIDE.vi.md)</small>

<small>

> **Kullanıcı arayüzü ve belgelerin çevirileri hakkında not:** İngilizce (UK) orijinali hariç tüm arayüz dilleri 
> yapay zekâ modelleri kullanılarak çevrildi; ifade tarzı eksik olabilir veya hatalar içerebilir.

</small>

<br/>

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**İçindekiler**

- [Başlamadan önce](#before-you-start)
  - [Ücretsiz OpenRouter API anahtarı nasıl alınır (masaüstü uygulaması)](#how-to-get-a-free-openrouter-api-key-desktop-app)
- [Başlarken](#getting-started)
- [Pencerenin ana bölümleri](#main-parts-of-the-window)
  - [Yan çubuk](#sidebar)
  - [Araç çubuğu](#toolbar)
  - [Giriş ve çıkış panelleri](#input-and-output-panels)
- [Çevir](#translate)
  - [Metin çevir](#translate-text)
  - [Dil seçimi](#language-selection)
  - [Yararlı çeviri ayarları](#helpful-translation-settings)
- [Yeniden yaz](#rewrite)
- [Dönüştür](#transform)
  - [Var olan bir istemi çalıştır](#run-an-existing-prompt)
  - [Henüz isteminiz yoksa](#if-you-have-no-prompts-yet)
  - [Hızlıca bir istem oluştur](#create-a-prompt-quickly)
  - [Bir istemi düzenle](#edit-a-prompt)
  - [Kullanmadan önce bir istemi test et](#test-a-prompt-before-using-it)
- [Kontrol paneli](#dashboard)
  - [Verileri filtrele](#filter-the-data)
  - [Kontrol paneli sekmeleri](#dashboard-tabs)
  - [Verileri dışa aktar](#export-data)
  - [Bir model için saklanan kayıtları sil](#delete-stored-records-for-a-model)
- [Geçmiş](#history)
  - [Verileri filtrele](#filter-the-data-1)
  - [Geçmiş verilerini dışa aktar](#export-history-data)
- [Ayarlar](#settings)
  - [Genel ayarlar](#general-settings)
  - [Modeller](#models)
  - [Diller](#languages)
  - [Maliyet takibi](#cost-tracking)
  - [Dönüştürme istemleri](#transform-prompts)
  - [Kullanıcılar](#users)
  - [API yapılandırması](#api-config)
  - [Hakkında](#about)
- [Yaygın sorunlar](#common-issues)
  - [Uygulama metni çevirmiyor, yeniden yazmıyor veya dönüştürmüyor](#the-app-will-not-translate-rewrite-or-transform-text)
  - [Model listesi boş](#the-model-list-is-empty)
  - [Sonuç çok yavaş veya çok maliyetli](#the-result-is-too-slow-or-too-expensive)
  - [Arayüz yanlış dilde](#the-interface-is-in-the-wrong-language)
  - [Metin çok küçük veya okunması zor](#the-text-is-too-small-or-hard-to-read)
  - [Kontrol paneli grafikleri boş](#dashboard-charts-are-empty)
  - [Maliyet "kullanılamıyor" gösteriyor veya yanlış görünüyor](#cost-shows-not-available-or-seems-wrong)
  - [Toplam maliyet sağlayıcımın faturasıyla eşleşmiyor](#total-cost-does-not-match-my-provider-bill)
  - [Geçmiş sayfası yan çubuktan kayboldu](#the-history-page-is-missing-from-the-sidebar)
  - [Web uygulaması: beklenmedik şekilde giriş sayfasına yönlendirildim](#web-app-redirected-to-the-login-page-unexpectedly)
  - [Web yöneticisi: şifreyi unuttum veya kaybettim](#web-admin-forgot-or-lost-a-password)
  - [Kontrol paneli diğer kullanıcılar için veri göstermiyor (web)](#dashboard-shows-no-data-for-other-users-web)
  - [Bir istemi değiştirdim ve düzenlemeleri kaybettim](#i-changed-a-prompt-and-lost-the-edits)
- [Hızlı ipuçları](#quick-tips)
- [Feragatname](#disclaimer)
- [Lisans](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="before-you-start"></a>
## Başlamadan önce

Transrewrt'ı kullanmak için en az bir yapay zekâ sağlayıcısına erişmeniz gerekir. Desteklenen sağlayıcılar şunlardır: [OpenRouter](https://openrouter.ai) (birçok modeli bir araya getirir), OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras ve yerel modeller için [Ollama](https://ollama.com).

Başlamak için ücretli bir model seçmeniz gerekmez. OpenRouter API anahtarınızı eklediğiniz anda uygulama, yerleşik **ücretsiz** OpenRouter seçeneğini otomatik olarak etkinleştirir. Bu, metinleri hemen çevirmeye, yeniden yazmaya ve dönüştürmeye başlamanızı sağlar. Alternatif olarak, Cerebras, Google, Groq veya Mistral AI'dan ücretsiz bir API anahtarı da alabilirsiniz.

Basit bir dille:

- Bir **model**, işi yapan yapay zekâ motorudur. Modeller bir **sağlayıcı önekiyle** birlikte listelenir (örneğin `openrouter/…`, `openai/…`, `ollama/…`).
- Bir **API anahtarı** (veya Ollama için bir **temel URL**), uygulamanın bu sağlayıcıya ulaşmasını sağlar.

**Masaüstü uygulamasını** kullanıyorsanız, kullandığınız her sağlayıcı için API anahtarlarını [**Ayarlar** > **API Yapılandırması**](#api-config) kısmına ekleyin. Sadece OpenRouter kullanacaksanız aşağıda [Bir API anahtarı nasıl alınır?](#how-to-get-an-api-key-desktop-app) bölümüne bakın. API anahtarı kullanmak istemiyorsanız, [ollama.com](https://ollama.com) adresinden Ollama'yı yükleyebilir ve `translategemma:4b` gibi yerel modeller kullanabilirsiniz.

**Web sürümünü** kullanıyorsanız, sunucu sahibi sağlayıcıları ortam değişkenleriyle yapılandırır, bu yüzden API anahtarlarını uygulamada doğrudan giremezsiniz.

<br/>

<a id="how-to-get-an-api-key-desktop-app"></a>
### Ücretsiz OpenRouter API anahtarı nasıl alınır (masaüstü uygulaması)

Masaüstü uygulamasını kullanıyorsanız şu adımları izleyin:

1. Web tarayıcınızda [OpenRouter](https://openrouter.ai) adresine gidin.
2. Bir hesap oluşturun veya oturum açın.
3. [Anahtarlar](https://openrouter.ai/keys) sayfasını açın.
4. Yeni bir API anahtarı oluşturmak için düğmeye tıklayın.
5. Anahtarı daha sonra tanıyabilmeniz için bir ad verin.
6. Yeni API anahtarını kopyalayın.
7. Transrewrt uygulamasına dönün ve **Ayarlar** > **API Yapılandırması** sayfasını açın.
8. Anahtarı **OpenRouter API anahtarı** alanına yapıştırın (**Ayarlar** > **API Yapılandırması** altında).
9. Anahtarın çalıştığını doğrulamak için **OpenRouter anahtarını test et** düğmesine tıklayın.

<br/><br/>

<a id="getting-started"></a>
## Başlarken

Transrewrt'yi ilk defa kullanıyorsanız şu sırayı izleyin:

1. Uygulamayı açın.
2. Gerekirse dünya simgesinden **Arayüz dilinizi** seçin.
3. Eğer **masaüstü uygulamasındaysanız**, [**Ayarlar** > **API Yapılandırması**](#api-config) sayfasını açın, en az bir sağlayıcı için bir API anahtarı ekleyin (örneğin OpenRouter) ve çalıştığını doğrulamak için **Test** düğmesine tıklayın.
4. [**Ayarlar** > **Modeller**](#models) sayfasını açın ve **Seçilen Modeller** bölümüne bir veya daha fazla model ekleyin.
5. [**Ayarlar** > **Diller**](#languages) sayfasını açın ve en çok kullandığınız dillerin en üstte görünmesini istiyorsanız **En çok kullanılan dillerinizi** seçin.
6. **Çevir** sayfasına gidin ve her şeyin düzgün çalıştığını doğrulamak için basit bir çeviri yapın.
7. Bu işlem başarılı olursa, ardından **Yeniden yaz** ve sonra **Dönüştür** işlevlerini deneyin.

Bu sıralama önemlidir. En yaygın ilk kullanım sorununu önler: uygulamanın çalışan bir API bağlantısı veya seçili bir modeli olmadan bir görevi çalıştırmayı denemek.

<br/><br/>

<a id="main-parts-of-the-window"></a>
## Pencerenin ana bölümleri

Uygulama üç ana bölüme ayrılmıştır:

- Soldaki **kenar çubuğu**.
- Üstteki **araç çubuğu**.
- Ortadaki **çalışma alanı**.

<br/>

<a id="sidebar"></a>
### Yan Çubuk

Uygulama içinde dolaşmak için yan çubuğu kullanın. Yan çubuğu, uygulama logosunun yanındaki simgeye tıklayarak daha fazla alan için daraltabilirsiniz.

<br/>

<table>
  <tr>
    <td valign="top">
       <img src="../images/screenshots/tr/sidebar.png" alt="Application Sidebar" style="max-width: 100%; border: 1px solid #ddd; border-radius: 4px;">
    </td>
    <td valign="top">
      <br/><br/>
      <ul>
        <li><strong>Çeviri</strong> çevirme çalışma alanını açar.</li><br/>
        <li><strong>Yeniden Yaz</strong> yeniden yazma çalışma alanını açar.</li><br/>
        <li><strong>Dönüştür</strong> özel istem çalışma alanını açar.</li><br/>
        <li><strong>Gösterge Paneli</strong> kullanım ve maliyet bilgilerini gösterir.</li><br/>
        <li><strong>Ayarlar</strong> ayarlar panelini açar.</li><br/>
        <li><strong>Geçmiş</strong> giriş ve çıkış metinleriyle birlikte kullanım geçmişini gösterir</li><br/>
        <li><strong>Kullanıcı</strong> oturum açmış kullanıcının kullanıcı adını gösterir (sadece web).</li>
      </ul>
    </td>
  </tr>
</table>

<br/>

<a id="toolbar"></a>
### Araç Çubuğu

Araç çubuğu, uygulama içinde nerede olduğunuza bağlı olarak hafifçe değişir.

- Solda, geçerli sayfa adı gösterilir.
- Sağda, **model seçici** ve **Arayüz dili** kontrolü bulunur.

**Model seçici**, geçerli görev için hangi AI motorunu kullanacağınızı seçmenize olanak sağlar.

![Model selector](../images/screenshots/tr/model-selector.png)

Bazı ücretsiz modeller her zaman kullanılabilir olmayabilir - bazen çevrimdışı olabilirler veya kullanım sınırına ulaşabilirler. Bu durumda, uygulama otomatik olarak o modeli kullanılabilir listesinden kaldıracaktır. Hangi modellerin görüneceğini kontrol etmek için [**Ayarlar** > **Modeller**](#models) sayfasına gidin ve model listenizi düzenleyin.
 Araç çubuğunda model adının solundaki sağlayıcı simgesine tıklayarak model ayarlarını doğrudan açabilirsiniz.

<br/>

**Dünya simgesi + dil kodu**, menüler ve düğmeler gibi uygulama arayüz dilini değiştirir. **Çeviri**'de kullanılan çeviri dillerini **değiştirmez**.

![Interface language selector](../images/screenshots/tr/language-selector.png)

<br/>

<a id="input-and-output-panels"></a>
### Giriş ve çıkış panelleri

Çoğu çalışma alanı, sol tarafta **Giriş** paneli ve sağ tarafta **Çıkış** paneli kullanır.

Her panel ayrıca şunları gösterir:

| **Giriş**                                                          | **Çıkış**                                                                                                                  |
|--------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------|
| - Karakter sayısı <br/>- Kelime sayısı <br/>- Paragraf sayısı   <br/> | - Görevin ne kadar sürdüğü<br/>- **TPS** (saniye başına jetton)<br/>- Karakter, kelime ve paragraf sayıları<br/>- Kullanılan model |

Teknik terimler hakkında merak ediyorsanız:

- **Jetton**, metnin küçük bir parçası anlamına gelir. Bir kelimenin parçası ya da kısa bir kelime olarak düşünebilirsiniz.
- **TPS**, modelin saniyede kaç tane bu metin parçasını işlediğini ifade eder.

<br/>

Her işlem maliyetini (mevcutsa) ve toplam maliyeti [**Ayarlar** > **Genel Ayarlar**](#general-settings) bölümünde `Show cost information on the actions` seçeneğini etkinleştirerek izleyebilirsiniz.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="translate"></a>
## Çevir

Metni bir dilden başka bir dile çevirmek istediğinizde **Çevir** seçeneğini kullanın.

![Translate workspace](../images/screenshots/tr/translate.png)

<br/>

<a id="translate-text"></a>
### Metin çevir

1. **Çevir** sayfasını açın.
2. **Kaynak** dilini seçin.
3. **Hedef** dilini seçin.
4. Araç çubuğundan bir model seçin.
5. **Giriş** alanına metin yazın veya yapıştırın.
6. **Çevir** düğmesine tıklayın.
7. Sonucu **Çıkış** alanında okuyun.
8. Sonucu kopyalamak istiyorsanız kopyalama düğmesini kullanın.

<br/>

<a id="language-selection"></a>
### Dil seçimi

- **Kimden**, belirli bir dil ya da **Dili Algıla** olabilir.
- **Kime**, sonucun istediğiniz dilidir.

Seçtiğiniz **Üst diller**, listede en üstte görünür. Bunları [**Ayarlar** > **Diller**](#languages) bölümünde ayarlayabilirsiniz.

<br/>

<a id="helpful-translation-settings"></a>
### Yararlı çeviri ayarları

[**Ayarlar** > **Genel Ayarlar**](#general-settings) bölümünde çeviri davranışını değiştirebilirsiniz:

- **Yapıştırmada otomatik çeviri**, metni yapıştırdığınız anda bir çeviri çalıştırır.
- **Sonucu panoya otomatik kopyala**, başarılı bir şekilde çalıştırma sonrasında sonucu otomatik olarak kopyalar.
- **Gerçek zamanlı çeviri (yazarken)**, yazarken çevirileri çalıştırır.
- **Zaman aşımı (ms)**, uygulamanın gerçek zamanlı çeviri çalıştırmadan önce ne kadar süre bekleyeceğini kontrol eder.
- **Enter**, `Enter` tuşuna bastığınızda ne olacağını kontrol eder:

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="rewrite"></a>
## Yeniden yaz

Ana anlamı değiştirmeden kelime düzenini iyileştirmek istediğinizde **Yeniden yaz** seçeneğini kullanın.

![Rewrite workspace](../images/screenshots/tr/rewrite.png)

Bu, şunlar için yararlıdır:

- yazım ve dilbilgisi düzeltme (**Yazımı ve Dilbilgisini Denetle**)
- metni daha anlaşılır hale getirme (**Anlaşılırlığı İyileştir**)
- tek bir çalıştırmada birkaç farklı yeniden ifade (**Alternatif sürümler**)
- metni daha resmi veya daha samimi hale getirme (**Resmi** / **Samimi**)
- metni kısaltma veya uzatma (**Kısalt** / **Genişlet**)
- metni daha teknik hale getirme (**Teknik Hale Getir**)

<br/>

> 💡 **İPUCU**<br/>
> "**İmla ve Dilbilgisini Denetle**" modunu kullandığınızda, çıkış panelinde ( **Kopyala**'nın yanında) bir **Değişiklikleri göster** anahtarı görünür.
> Metninize uygulanan belirli düzeltmeleri göstermek veya gizlemek için bu anahtarı açın veya kapatın.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="transform"></a>
## Dönüştür

AI'nın özel bir talimat setini takip etmesini istediğinizde **Dönüştür**'ü kullanın.

![Transform workspace](../images/screenshots/tr/transform.png)

Bu, uygulamanın en esnek alanıdır. Şu gibi görevler için kullanabilirsiniz:

- notları özetleme
- ham metni pürüzsüz bir e-postaya dönüştürme
- temel noktaları çıkarma
- metni belirli bir biçime dönüştürme
- giriş metniyle ilgili başka herhangi özel işlem

<br/>

<a id="run-an-existing-prompt"></a>
### Varolan bir istemi çalıştırın

1. **Dönüştür**'ü açın.
2. İstemi, istem listesinden seçin.
3. Bir **Hedef** dil kutusu görünürse, isterseniz bir dil seçin.
4. **Girdi** alanına metin yazın veya yapıştırın.
5. **Dönüştür**'e tıklayın.
6. Sonucu **Çıktı** alanında okuyun.

<br/>

<a id="if-you-have-no-prompts-yet"></a>
### Henüz isteminiz yoksa

İstem listeniz boşsa, Dönüştür çalışma alanında **Örnek istekleri yükle**'ye tıklayın. Aynı kontrol her zaman [**Ayarlar** > **Transform Prompts**](#transform-prompts) bölümünde dışa aktarma/ithalat satırında mevcuttur. İkisi de yerleşik örnekler ekler, böylece hızlıca başlayabilirsiniz.

<br/>

> ℹ️ **NOT**<br/>
> Örnek istemler İngilizce olarak sağlanır. Yüklendikten sonra bir istemi düzenleyebilir ve **İstemi çevir** seçeneğini kullanarak dilinize çevirebilirsiniz.

<br/>

<a id="create-a-prompt-quickly"></a>
### Hızlıca bir istem oluşturun

Bir istem oluşturmanın en hızlı yolu:

1. **Yeni istem**'e tıklayın.
2. **İstem oluştur**'a tıklayın.
3. İstemin ne yapmasını istediğinizi açıklayın.
4. Bir model seçin.
5. Uygulamanın sizin için bir taslak oluşturmasına izin verin.
6. Taslağı gözden geçirin ve **Kaydet**'e tıklayın.

![Generate prompt](../images/screenshots/tr/transform-generate.png)

<br/>

<a id="edit-a-prompt"></a>
### Bir istemi düzenleyin

Bir istem oluşturduğunuzda veya düzenlediğinizde düzenleyici solda görünür ve sağda bir test alanı görünür.

![Transform prompt editor](../images/screenshots/tr/transform-prompt-edit.png)

Ana alanlar şunlardır:

- **İstem adı**: İstem listesinde gösterilen ad.
- **İstem talimatları (isteğe bağlı)**: İstem çalıştırıldığında kullanıcıya gösterilen kısa bir ipucu.
- **Model Rolü**: 'Yararlı bir asistan olduğunu varsay.' gibi, yapay zekaya atanan genel rol.
- **Model Talimatları (satır başı başına bir tane)**: Yapay zekanın uymasını istediğiniz özel kurallar.
- **Çıktı açıklaması**: 'özet' veya 'yeniden yazım' gibi sonucu tanımlayan kısa bir kelime.
- **Sıcaklık (0,0 → 1,0)**: Modelin nasıl davranacağını belirler; aşağıya bakın.
- **Hedef dil iste**: İstem çalıştırıldığında hedef dil seçici ekler.

Eğer **Sıcaklık** teknik terimi sizin için yeniyseniz, bunu şöyle düşünün:

- **Daha düşük** bir sıcaklık, daha durağan ve öngörülebilir sonuçlar verir.
- **Daha yüksek** bir sıcaklık, daha fazla çeşitlilik ve yaratıcılık sağlar.

Ayrıca şunu da kullanabilirsiniz:

- **`Generate prompt`** basit bir açıklamadan yeni bir taslak oluşturmak için
- **`Improve prompt`** mevcut bir istemi iyileştirmek için
- **`Translate prompt`** istem alanlarını çevirmek için

<br/>

> ⚠️ **UYARI**<br/>
> **`Back to Run`** butonuna tıklamadan önce **`Save`** butonuna tıklayın. Kaydetmeden geri dönerseniz değişiklikleriniz kaybolur.

<br/>

<a id="test-a-prompt-before-using-it"></a>
### Kullanmadan önce bir istemi test edin

Sağdaki test paneli, istemi günlük işlerinizde kullanmadan önce örnek metinle denemenizi sağlar.

Bu, şu durumlarda yararlıdır:

- yeni bir istem oluşturuyorsunuz
- bir istemin iki versiyonunu karşılaştırıyorsunuz
- ton, uzunluk veya çıkış formatını kontrol etmek istiyorsunuz

<br/>

> ℹ️ **NOT**<br/>
> Kaydedilen istemleri [**Ayarlar** > **İstekleri Dönüştür**](#transform-prompts) bölümünde dışa aktarabilir ve içe aktarabilirsiniz.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="dashboard"></a>
## Kontrol Paneli

**Kontrol Paneli**'ni uygulamayı ne kadar kullandığınızı ve bunun ne kadara mal olduğunu görmek için kullanın (ücretli modeller için).

![Dashboard summary](../images/screenshots/tr/dashboard-summary.png)

<br/>

> ℹ️ **NOT**<br/>
> Eğer sadece **ücretsiz** modeller kullanıyorsanız, **maliyet** miktarları sıfır olabilir ve maliyete odaklı özetler boş görünebilir. **Özet** bölümünde, **Zamana göre kullanım** ve **Model bazında kullanım** seçilen dönemde etkinlik olduğunda **çağrı sayıları** (çevir, yeniden yaz ve dönüştür) göstermeye devam eder.

<br/>

<a id="filter-the-data"></a>
### Verileri filtrele

Zaman aralığını değiştirmek için üstteki filtre düğmelerini kullanın.

![Dashboard filters](../images/screenshots/tr/dashboard-filter.png)

<br/>

> ℹ️ **NOT**<br/>
> **Kullanıcı** filtresi yalnızca web sürümünde yöneticiler için görünürdür. Normal kullanıcılar bu filtreyi göremez ve masaüstü uygulamasında kullanılamaz.

<br/>

<a id="dashboard-tabs"></a>
### Kontrol Paneli sekmeleri

- **Özet**, kullanım ve maliyetin genel bir görünümünü verir. **Zamana göre kullanım** (çeviri, yeniden yazım ve dönüştürme için günlük yığınlanmış kümülatif **çağrı sayısı**) ve **Model bazında kullanım** (**model başına toplam çağrılar**, dönüştürme dahil) içerir.
- **Kullanıma göre**, etkinliği çeviri dili, yeniden yazım modu ve dönüştürme istemine göre ayırır.
- **Modele göre**, hangi modellerin kullanıldığını ve maliyetlerini gösterir.
- **Güne göre**, günlük toplamları gösterir.
- **Tüm Çağrılar**, tam çağrı geçmişini gösterir ve dışa aktarmanıza olanak tanır.

<br/>

<a id="export-data"></a>
### Dışa Aktar veri

Kontrol Paneli tabloları şu biçimlerde veri dışa aktarabilir:

- **JSON**
- **CSV**
- **XLSX**

Uygulamanın dışında etkinliği incelemek veya bir rapor paylaşmak istiyorsanız bu yararlıdır.

<br/>

<a id="delete-stored-records-for-a-model"></a>
### Bir model için saklanan kayıtları Sil

**Modele göre** veya **Tüm Aramalar** içinde, bir modelin kayıtlarını "çöp kutusu" simgesine tıklayarak kaldırabilirsiniz.

> ⚠️ **UYARI**<br/>
> Saklanan kayıtların silinmesi geri alınamaz. Bu geçmişi artık ihtiyacınız olmadığından emin olursanız bunu kullanın.

Tüm verileri silmek veya kayıtları yaşlarına göre kaldırmak için [**Ayarlar** > **Maliyet İzleme**](#cost-tracking) sayfasına gidin. Burada tüm saklanan verileri veya belirli bir tarihten daha eski olan verileri silme seçeneklerini bulacaksınız.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="history"></a>
## Geçmiş

**Transrewrt** içindeki işlemlerinizin geçmişini, her işlemin girişini ve çıkışını görmek için **Geçmiş**'e tıklayın.

![History page](../images/screenshots/tr/history.png)

<br/>

<a id="filter-the-history"></a>
### Filtre verileri

**Geçmiş**, **Kontrol Paneli** sayfasıyla aynı filtreleri kullanır. Zaman aralığını seçmek için bunları kullanın.

![Dashboard filters](../images/screenshots/tr/dashboard-filter.png)

<br/>

> ℹ️ **NOT**<br/>
> **Kullanıcı** filtresi yalnızca web sürümünde yöneticiler için görünürdür. Normal kullanıcılar bu filtreyi göremez ve masaüstü uygulamasında kullanılamaz.

<br/>

<a id="export-history-data"></a>
### Geçmiş verilerini dışa aktar

Geçmiş sayfası, filtrelenmiş verileri şu biçimlerde dışa aktarabilir:

- **JSON**
- **CSV**
- **XLSX**

Uygulamanın dışında etkinliği incelemek veya bir rapor paylaşmak istiyorsanız bu yararlıdır.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="settings"></a>
## Ayarlar

Uygulamanın davranışını özelleştirmek için kenar çubuğundan **Ayarlar**'ı açın.

Mevcut sekmeler, platforma ve rolünüze bağlı olarak değişir:

| Sekme               | Masaüstü | Web (yönetici) | Web (normal kullanıcı) |
  |-------------------|:-------:|:-----------:|:------------------:|
  | Genel Ayarlar  |   evet   |     evet     |        evet         |
  | Modeller            |   evet   |     evet     |        evet         |
  | Diller         |   evet   |     evet     |        evet         |
  | Maliyet Takibi     |   evet   |     evet     |         -          |
  | Dönüştürme İstemleri |   evet   |     evet     |        evet         |
  | Kullanıcılar             |    -    |     evet     |         -          |
  | API Yapılandırması        |   evet   |     evet     |         -          |
  | Hakkında             |   evet   |     evet     |        evet         |

<br/>

> ℹ️ **NOT**<br/>
> Web sürümünde, her kullanıcı kendi yapılandırmasına sahiptir. Seçili modeller, diller, genel seçenekler ve dönüşüm istekleri gibi ayarlar kullanıcı bazında saklanır. Yaptığınız değişiklikler diğer kullanıcıları etkilemez.

<br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="general-settings"></a>
### Genel ayarlar

**Genel Ayarlar**'ı, yazma davranışını, yürütme ayrıntılarının **Geçmiş** için saklanıp saklanmayacağını ve görünümü kontrol etmek üzere kullanın.

**Davranış**

- **ENTER davranışı**, `Enter` görevi çalıştırır veya yeni bir satıra geçer.
- **Yapıştırmada otomatik çeviri**, metni yapıştırdığınız anda çeviri başlatır.
- **Sonucu panoya otomatik kopyala**, başarılı sonuçları otomatik olarak panoya kopyalar.
- **Gerçek zamanlı çeviri (yazarken)** yazarken çeviri yapar.
- **Zaman aşımı (ms)**, gerçek zamanlı çeviri için bekleme süresini ayarlar.

**Geçmiş**

- **Yürütme geçmişini koru**, her çeviri, yeniden yazma ve dönüştürmenin kenar çubuğundaki [**Geçmiş**](#history) görünümü için **giriş ve çıkış metnini** saklayıp saklamayacağını kontrol eder. Devre dışı bırakıldığında onay istenir; onay verirseniz, saklanan geçmiş metni veritabanından kaldırılır.
- **Geçmiş verileri sil**, **Verileri sil** kullanarak saklanan metinleri yaşına göre (örneğin birkaç aydan eski olanlar veya **tüm veriler (temizle)**) kaldırmanıza olanak tanır. Bu yalnızca **Geçmiş** görünümü için kaydedilmiş yürütme metnini etkiler; **maliyet** veya kullanım toplamlarını **silmek** için [**Ayarlar** > **Maliyet İzleme**](#cost-tracking) kullanın.

**Maliyet ondalık basamak sayısı:**

- **Eylemlerde maliyet bilgisi göster**; işlem başına maliyeti (mevcutsa) ve Çevir, Yeniden Yaz ve Dönüştür çıktı panellerindeki toplam maliyeti görüntüler.
- **Maliyet ondalık basamakları**, maliyet ondalıklarının nasıl gösterileceğini değiştirir.
- **Sadece web:** **uygulama etrafında kenar boşluğu göster**, arayüz etrafına ekstra boşluk ekler.
- **Yazı Tipi Ailesi**, metin panellerindeki yazı tipini değiştirir.
- **Boyut**, yazı tipi boyutunu değiştirir.

**Yapılandırma Yedeği**

- **Yedeklemede kullanım verilerini dahil et** - etkinleştirildiğinde, ZIP ayrıca yürütme geçmişi ve API çağrısı verilerini de içerir.
- **Yapılandırmayı yedekle** - `config.json`, `state.json`, isteğe bağlı şifreleme anahtarı, kullanıcılar, tercihler, özel istemler ve katılım sağladığınız takdirde kullanım verileriyle tek bir ZIP dosyası oluşturur (varsayılan olarak UTC'ye göre `transrewrt-config-backup-YYYY-MM-DD_HHMMSS.zip`). Başarılı bir yedeklemeden sonra onay, kaydedilen dosya adını gösterir.
- **Yedekten geri yükle** - önce bir **onay iletişim kutusu** açar. İletişim kutusu içinde yedek ZIP dosyasını seçin (**Gözat** / dosya seçici veya desteklendiğinde sürükleyip bırakma), ardından seçenekleri gözden geçirin:
  - **Kullanım verilerini geri yükle** - yedekleme sırasında kullanım verileri dahil edildiyse, ZIP'ten kullanım/geçmişi içeri aktarın; yalnızca ayarları ve istemleri istiyorsanız bu seçeneği kaldırın.
  - **Geri yüklemeden önce eski kullanım verilerini temizle** - yedek uygulanmadan önce bu kurulumdaki mevcut kullanım/geçmişi kaldırır (isteğe bağlı; temiz bir değiştirme yapmak istediğinizde kullanın).

Web veya masaüstü sürümünde oluşturulan yedeklemeler diğerinde geri yüklenebilir. Masaüstü yedeklemesini web sürümünde geri yüklerken veriler yönetici kullanıcıya geri yüklenecektir.

<br/>

<a id="models"></a>
### Modeller

Araç çubuğunda hangi modellerin görüneceğini seçmek için **Ayarlar** > **Modeller** kullanın.

![Settings Models tab](../images/screenshots/tr/settings-models.png)

Sayfada iki liste vardır:

- Solda **Kullanılabilir Modeller**
- Sağda **Seçili Modeller**

Kullanışlı kontroller şunları içerir:

- **Modelleri ara...** adına göre model bulmak için
- **Sağlayıcı** etiketleri, listeyi tek bir altyapıya daraltmak için (OpenRouter, OpenAI, Ollama, …)
- **Sadece Ücretsiz** yalnızca ücretsiz modelleri gösterir
- **Yenile**, listeyi yeniden yükler
- Sağlayıcıya göre sıralarken **Tümünü Genişlet** ve **Tümünü Daralt**

Model kimlikleri sağlayıcı önekini içerir (örneğin `openrouter/…` ve `openai/…` gibi). **OpenAI (OpenRouter)** ve **OpenAI (doğrudan)** gibi rozetler, trafiğin nasıl yönlendirildiğini gösterir.

> ℹ️ **NOT**<br/>
> **OpenRouter Body Builder** (`openrouter/bodybuilder`), genel bir sohbet modeli değil, yönlendirici bir modeldir: yanıtı, OpenRouter API istek gövdelerini açıklayan bir JSON'dur (örneğin `requests` ve `model` ile bir `messages` dizisi). Bunu **Çevir**, **Yeniden yaz** veya **Dönüştür** için kullanırsanız, çıktı paneli tamamlanmış metin yerine bu JSON'ı gösterecektir. Bu görevler için normal bir metin modeli seçin. OpenRouter'daki [Body Builder model sayfasına](https://openrouter.ai/openrouter/bodybuilder) bakın.

İşlemler:

- Bir model eklemek için **Ekle**'ye veya girişin herhangi bir yerine tıklayın.

- Bir modeli kaldırmak için **Seçili Modeller** listesinde yanındaki **X**'e tıklayın veya Kullanılabilir Modeller listesindeki girişin **Seçildi** kısmına tıklayın.

- Listeyi temizlemek için **Tüm Seçimi Kaldır**'a tıklayın. Gerekli ücretsiz model listede kalır.

<br/>

> ℹ️ **NOT**<br/>
> OpenRouter'a hemen kredi eklemek istemiyorsanız, önce **Sadece Ücretsiz** seçeneğini etkinleştirin ve ücretsiz modelleri seçin (kredi kartı gerekmez). Ayrıca, herhangi bir API anahtarı olmadan modelleri yerel olarak çalıştırmak için Ollama kullanabilirsiniz.

<br/>

<a id="languages"></a>
### Diller

Uygulamada kullanılan dil listelerini düzenlemek için **Ayarlar** > **Diller** seçeneğini kullanın.

- **En üstteki diller**, **Çevir** ve **Dönüştür** bölümlerinde dil listelerinin en üst kısmında sabitlenir.
- **Özel dil**, yerleşik listede olmayan bir dil eklemenizi sağlar.

Özel bir dil eklerseniz, yerleşik seçeneklerin yanında dil seçicilerinde görünür.

<br/>

<a id="cost-tracking"></a>
### Maliyet İzleme

Maliyet bilgilerini yönetmek için **Ayarlar** > **Maliyet İzleme** bölümünü kullanın.

- **Toplam Maliyet**, biriken toplamı gösterir.
- **Değeri Kopyala**, toplamı panoya kopyalar.
- **Maliyeti Sıfırla**, kayıtlı toplamı sıfıra sıfırlar.
- **API anahtarı kullanımıyla eşitle**, toplamı OpenRouter hesabınız tarafından bildirilen kullanım ile eşleşecek şekilde ayarlar (sadece OpenRouter).
- **API Anahtarı Kullanımı**, mevcutsa OpenRouter kullanım ayrıntılarını gösterir.
- **Maliyet verilerini sil**, tüm verileri veya yalnızca seçilen tarihten daha eski olanları kaldırır.

**Maliyet takibi:** OpenRouter modellerini kullandığınızda, uygulama OpenRouter'dan gelen maliyet bilgilerine dayalı olarak gerçek kullanımınızı ve harcamalarınızı gösterir. Diğer tüm sağlayıcılar için uygulama, OpenRouter tarafından yayımlanan fiyatlar kullanılarak maliyetleri tahmin eder. Fiyat bilgisi yoksa tahmini maliyet sıfır olabilir.

<br/>

> ℹ️ **NOT**<br/>
>  **Tüm maliyet rakamları yalnızca başvuru amaçlıdır, resmi fatura değildir.**

<br/>

> ⚠️ **UYARI**<br/>
> Veri silme işlemi geri alınamaz. Silmeden önce lütfen verilerinizi yedekleyin veya [**Geçmiş**](#history) üzerinden veya [**Kontrol Paneli** > **Tüm Aramalar**](#dashboard-tabs) üzerinden dışa aktarın, aksi takdirde kalıcı olarak kaybolur. 
> Her API çağrısı girdisiyle ilgili tüm giriş/çıkış geçmişi de silinecektir.

<br/>

<a id="transform-prompts"></a>
### İstekleri Dönüştür

İstekleri toplu olarak yönetmek için **Ayarlar** > **İstekleri Dönüştür** seçeneğini kullanın.

Şunları yapabilirsiniz:

- kaydedilmiş isteklerinizi gözden geçirin
- istekleri silin
- bir dosyadan istekleri içeri aktarın
- yedekleme veya paylaşım için istekleri dışa aktarın
- istek listesine örnek istekleri yükleyin

<br/>

<a id="users"></a>
### Kullanıcılar

Kullanıcı hesaplarını web sürümünde yönetmek için **Kullanıcılar** bölümünü kullanın. Kullanıcı ekleyebilir, bilgilerini güncelleyebilir, şifreleri sıfırlayabilir ve hesapları silebilirsiniz.

<br/>

<a id="api-config"></a>
### API Yapılandırması

Desteklenen sağlayıcılar şunlardır: OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras ve **Ollama** (temel bir URL aracılığıyla yerel modeller). Yalnızca kullandığınız sağlayıcıları yapılandırmanız gerekir.

**Web uygulaması: yalnızca yönetici**

API anahtarları sistem veya Docker ortam değişkenleri aracılığıyla yapılandırılır - web arayüzüne girilmez. Bu sayfa hangi sağlayıcıların anahtar yapılandırıldığını gösterir ve her birini **`Test`** düğmesine tıklayarak test etmenizi sağlar.

<br/>

> ℹ️ **NOT**<br/>
> Bir API anahtarını değiştirmek için sisteminizdeki veya Docker yapılandırmanızdaki ortam değişkenini güncelleyin ve sunucuyu veya konteyneri yeniden başlatın.

> ℹ️ **NOT**<br/>
> **Yapılandırma yedekleri** (bkz. [**Genel Ayarlar** → Yapılandırma Yedeği](#general-settings)) ZIP'in `config.json` içinde **çözümlenmiş** sağlayıcı anahtarlarını gömebilir. Bu ZIP'in geri yüklenmesi, bu anahtarları sunucunun kalıcı yapılandırma dosyasına **kopyalamaz** - canlı anahtarlar yine ortamdan ve orada açıklandığı gibi mevcut dosya durumundan gelir.

<br/>

**Masaüstü uygulaması**

Kullandığınız her sağlayıcı için API anahtarlarını saklamak üzere **API Yapılandırması**'nı kullanın. Ollama için bir API anahtarı yerine **temel URL**'yi girin.

<br/>

> 💡 **İpucu** <br/>
> Bir API anahtarı kullanmak veya kullanım için ödeme yapmak istemiyorsanız, [Ollama'yı indirebilir](https://ollama.com) ve modelleri (`translategemma:4b` gibi) makinenizde yerel olarak ücretsiz çalıştırabilirsiniz. Alternatif olarak, ücretsiz modellerini kullanmak için ücretsiz bir OpenRouter hesabı oluşturabilir (kredi kartı gerekmez) veya Cerebras, Google, Groq veya Mistral AI'dan ücretsiz bir API anahtarı alabilirsiniz.

<br/>

- Yalnızca ihtiyacınız olan sağlayıcıları ekleyin. **Ayarlar** > **Modeller** bölümünde, her model kimliği sağlayıcıyla başlar (örneğin `openrouter/openrouter/free`, `openai/gpt-4o`, `ollama/llama3`).

Bir API anahtarı eklemek için değeri metin alanına girin ve **`Save`** öğesine tıklayın. Var olan bir anahtarı değiştirmek için **`Edit`** öğesine tıklayın. Bir anahtarın çalışıp çalışmadığını doğrulamak için **`Test`** öğesine tıklayın. Ollama taban URL'si için bağlantıyı kontrol etmek her zaman **`Test`** öğesine tıklayın.

<br/>

> ℹ️ **NOT**<br/>
> Bir API anahtarının geçerli değerini göremezsiniz. Yalnızca **`Edit`** düğmesini kullanarak değiştirebilirsiniz.
> API anahtarları yapılandırmada şifrelenmiş olarak saklanır.

<br/>

<a id="about"></a>
### Hakkında

**Hakkında** sekmesi şunları gösterir:

- uygulama adı
- sürüm numarası
- derleme tarihi
- proje deposuna bir bağlantı

<br/><br/>

<a id="common-issues"></a>
## Yaygın sorunlar

Bir şey beklediğiniz gibi çalışmıyorsa, önce aşağıdaki noktaları kontrol edin.

<br/>

<a id="the-app-will-not-translate-rewrite-or-transform-text"></a>
### Uygulama metni çevirmiyor, yeniden yazmıyor veya dönüştürmüyor

Şunları kontrol edin:

- araç çubuğunda bir model seçtiniz
- en az bir model [**Ayarlar** > **Modeller**](#models) listesinde görünüyor
- API kurulumunuz çalışıyor durumda

Masaüstü uygulamasını kullanıyorsanız:

1. [**Ayarlar** > **API Yapılandırması**](#api-config) sayfasını açın.
2. En az bir API anahtarının kaydedildiğini kontrol edin.
3. Anahtarın çalıştığını doğrulamak için sağlayıcının yanındaki **Test** butonuna tıklayın.

<br/>

<a id="the-model-list-is-empty"></a>
### Model listesi boş

[**Ayarlar** > **Modeller**](#models) sayfasını açın ve **Yenile**'ye tıklayın.

Gerekirse:

- bir model arayın
- **Sadece Ücretsiz** seçeneğini etkinleştirin
- bir veya daha fazla modeli **Seçili Modeller** bölümüne ekleyin

<br/>

<a id="the-result-is-too-slow-or-too-expensive"></a>
### Sonuç çok yavaş veya çok maliyetli

Aşağıdakilerden birini veya birkaçını deneyin:

- farklı bir model seçin
- daha kısa bir giriş kullanın
- [**Ayarlar** > **Genel Ayarlar**](#general-settings) bölümünde **Zaman aşımı (ms):** seçeneğini devre dışı bırakın
- basit görevler için ücretsiz modeller kullanın ([Modeller](#models) bölümüne bakın)

<br/>

<a id="the-interface-is-in-the-wrong-language"></a>
### Arayüz yanlış dilde

[Araç çubuğundaki](#toolbar) dünya simgesine tıklayın ve tercih ettiğiniz **Arayüz dilini** seçin.

<br/>

<a id="the-text-is-too-small-or-hard-to-read"></a>
### Metin çok küçük veya okunması zor

[**Ayarlar** > **Genel Ayarlar**](#general-settings) bölümüne gidin ve aşağıdakileri değiştirin:

- **Yazı Tipi Ailesi**
- **Boyut**

<br/>

<a id="dashboard-charts-are-empty"></a>
### Kontrol Paneli grafiklerinin boş olması

Bu normaldir eğer:

- sadece **ücretsiz modeller** kullanıyorsanız ve **maliyet** rakamlarına bakıyorsanız (sıfır olabilir); **Özet** üzerindeki **kullanım** çağrı sayısı grafiklerinin seçilen dönemden veri alması gerekir
- seçilen **zaman filtresi** çağrıların yapıldığı dönemi kapsamıyorsa - kontrol etmek için **Tümü** seçeneğini deneyin

Eğer grafikler hala **Tümü** seçeneğini seçtikten sonra boşsa, çağrıların [**Geçmiş**](#history) kısmında veya **Tüm Aramalar** sekmesinde göründüğünü doğrulayın.

<br/>

<a id="cost-shows-not-available-or-seems-wrong"></a>
### Maliyet "mevcut değil" gösteriyor veya yanlış görünüyor

**OpenRouter** üzerinden modeller kullandığınızda, uygulama OpenRouter tarafından bildirilen gerçek harcamanızı gösterir.

**Diğer sağlayıcılar** için (OpenAI doğrudan, Anthropic doğrudan vb.), maliyet OpenRouter tarafından yayınlanan fiyat verilerinden tahmin edilir. Bir model için eşleşen bir fiyat bulunamazsa, maliyet **kullanılamıyor** olarak görünecek ve toplamınıza eklenmeyecektir.

<br/>

<a id="total-cost-does-not-match-my-provider-bill"></a>
### Toplam maliyet sağlayıcı faturasımla eşleşmiyor

Uygulamadaki tüm maliyet rakamları **yalnızca referans için tahminlerdir**, resmi fatura beyanları değildir.

Toplamı gerçek OpenRouter harcamanıza daha yakın hale getirmek için [**Ayarlar** > **Maliyet İzleme**](#cost-tracking) açın ve **API anahtarı kullanımına göre senkronize et**'e tıklayın.

<br/>

<a id="the-history-page-is-missing-from-the-sidebar"></a>
### Yan çubuktan Geçmiş sayfası eksik

**Yürütme geçmişini koru.** kapatılmış olabilir. [**Ayarlar** > **Genel Ayarlar**](#general-settings) sayfasını açın ve bunu etkinleştirin. Açmak, daha önce silinmiş geçmiş verilerini geri yüklemez.

<br/>

<a id="web-app-session-expired"></a>
### Web uygulaması: beklenmedik şekilde oturum açma sayfasına yönlendirildi

Oturumunuzun süresi dolmuş olabilir. Yeniden giriş yapın. Sık sık oluyorsa, oturum ömrü ayarları için sunucu yapılandırmasını kontrol edin.

<br/>

<a id="web-admin-forgot-or-lost-a-password"></a>
### Web yöneticisi: şifreyi unuttum veya kaybettim

Bu, masaüstü (Electron) uygulaması değil, **kendi barındırılan web uygulaması** (Docker) için geçerlidir.

- Başka bir yönetici hâlâ oturum açabiliyorsa, [**Ayarlar** > **Kullanıcılar**](#users) bölümüne gidebilir, hesabı seçebilir ve orada **yeni şifre** belirleyebilir.
- Eğer **erişiminiz engellenmiş** ancak makineye veya konteynere **shell erişiminiz** varsa, görüntüyle birlikte gelen yardımcı programı kullanarak şifreyi sıfırlayın (varsayılan adı değiştirirseniz `transrewrt` değerini değiştirin ve şifreniz boşluk veya özel karakter içeriyorsa tırnak içine alın):

```bash
docker exec transrewrt reset-web-password '<username>' '<new-password>'
```

Eğer başka hesaplar oluşturmadıysanız, varsayılan yönetici kullanıcı adı `admin` şeklindedir. Yalnızca bir argüman verirseniz, bu argüman `admin` için yeni şifre olarak kabul edilir.

Docker yerine bir **kaynak kontrolü** üzerinden çalıştırıyorsanız şunu kullanın:

```bash
pnpm run reset-web-password -- <username> <new-password>
```

Bu betik, SQLite veritabanındaki kullanıcı kaydını günceller (eğer `admin` kullanıcısı eksikse oluşturabilir). Sıfırlamadan sonra yeni şifreyle oturum açın.

<br/>

<a id="dashboard-shows-no-data-for-other-users"></a>
### Kontrol Paneli diğer kullanıcılar için veri göstermiyor (web)

Yalnızca **yöneticiler**, **Kullanıcı** filtresi aracılığıyla tüm kullanıcıların verilerini görüntüleyebilir. Düzenli kullanıcılar yalnızca kendi etkinliklerini görür; bu tasarlanmıştır.

<br/>

<a id="i-changed-a-prompt-and-lost-the-edits"></a>
### Bir istemi değiştirdim ve düzenlemeleri kaybettim

Bir istemi düzenlerken, **Çalıtır'a geri dön**'e tıklamadan önce her zaman **Kaydet**'e tıklayın.

<br/><br/>

<a id="quick-tips"></a>
## Hızlı ipuçları

- [**Çevir**](#translate) ile başlayarak kurulumunuzun çalıştığından emin olun, sonra [**Yeniden Yaz**](#rewrite) veya [**Dönüştür**](#transform) kısmına geçin.
- Günlük kelime iyileştirmeleri için [**Yeniden Yaz**](#rewrite) kullanın.
- Belirli bir görev için tekrarlanabilir bir iş akışı gerekiyorsa [**Dönüştür**](#transform) kullanın.
- Kullanımı ve maliyeti takip etmek istiyorsanız [**Kontrol Paneli**](#dashboard) kullanın.
- Geçmiş işlemleri ve tam giriş/çıkış metinlerini incelemek için [**Geçmiş**](#history) kullanın.
- Güvenli tutmak istediğiniz bir istek kitaplığı oluşturuyorsanız (bkz. [Dönüştürme İstekleri](#transform-prompts)) veya başkalarıyla paylaşmak istiyorsanız istekleri düzenli olarak dışa aktarın.

<br/><br/>

<a id="disclaimer"></a>
## Sorumluluk reddi

Ürün adları ve simgeleri ilgili sahiplerine aittir ve sadece tanımlama amacıyla kullanılır. Bu yazılım, bahsedilen markalarla bağlantılı değildir veya onların desteğiyle değildir.

<br/><br/>

<a id="license"></a>
## Lisans

Telif Hakkı © 2026 Waldemar Scudeller Jr.

[Apache License 2.0](../LICENSE)
