---
translated_at: "2026-03-26T01:15:01.169Z"
source_hash: "87f5e7618cbfd3084efeecba28440ecccb03450da2ae8fe4c6f91c75cb7f4981"
source_mtime: 1774482557035.2158
model: "stepfun/step-3.5-flash:free"
---
![Transrewrt banner](../images/transrewrt_banner.png)


<a id="transrewrt-user-guide"></a>
# Kullanıcı Kılavuzu

<br/>

<a id="introduction"></a>
## Giriş

Transrewrt, metin üzerinde çalışmanıza yardımcı olur, üç ana yoldan:

- **Çevir** - metni bir dilden başka bir dile dönüştür.
- **Yeniden Yaz** - metni daha açık, daha kısa veya daha resmi gibi farklı bir tarzda yeniden ifade edin.
- **Dönüştür** - metni, prompt olarak adlandırılan özel AI talimatları kullanarak işleyin.

<br/>

Bu kılavuz, uygulama kurulduğunda ve çalışır durumda nasıl kullanılacağını açıklar. Kurulum adımları için ana **[README](README.tr.md)** dosyasına bakın.

<br/>

> ℹ️ **NOT**<br/>
> Transrewrt, Windows ve Linux için masaüstü uygulaması ve kendi kendine barındırılan bir web uygulaması olarak mevcuttur. Bu kılavuz, uygulamanın günlük kullanımına odaklanır. Bir şey yalnızca bir sürüm için geçerliyse, açıkça işaretlenir.

<small>**Diğer dillerde oku:** </small>
<small id="lang-list"> [English (UK)](../USER-GUIDE.md) · [Português (BR)](USER-GUIDE.pt-BR.md) · [العربية](USER-GUIDE.ar.md) · [বাংলা](USER-GUIDE.bn.md) · [Català](USER-GUIDE.ca.md) · [简体中文](USER-GUIDE.zh-CN.md) · [繁體中文](USER-GUIDE.zh-TW.md) · [Hrvatski](USER-GUIDE.hr.md) · [Čeština](USER-GUIDE.cs.md) · [Nederlands](USER-GUIDE.nl.md) · [English (US)](USER-GUIDE.en-US.md) · [Filipino](USER-GUIDE.tl.md) · [Français](USER-GUIDE.fr.md) · [Deutsch](USER-GUIDE.de.md) · [Ελληνικά](USER-GUIDE.el.md) · [हिन्दी](USER-GUIDE.hi.md) · [Magyar](USER-GUIDE.hu.md) · [Italiano](USER-GUIDE.it.md) · [日本語](USER-GUIDE.ja.md) · [Basa Jawa](USER-GUIDE.jv.md) · [한국어](USER-GUIDE.ko.md) · [Bahasa Melayu](USER-GUIDE.ms.md) · [فارسی](USER-GUIDE.fa.md) · [Polski](USER-GUIDE.pl.md) · [Português (PT)](USER-GUIDE.pt.md) · [ਪੰਜਾਬੀ](USER-GUIDE.pa.md) · [Română](USER-GUIDE.ro.md) · [Русский](USER-GUIDE.ru.md) · [Slovenčina](USER-GUIDE.sk.md) · [Español](USER-GUIDE.es.md) · [Kiswahili](USER-GUIDE.sw.md) · [Svenska](USER-GUIDE.sv.md) · [తెలుగు](USER-GUIDE.te.md) · [ภาษาไทย](USER-GUIDE.th.md) · [Türkçe](USER-GUIDE.tr.md) · [Українська](USER-GUIDE.uk.md) · [Tiếng Việt](USER-GUIDE.vi.md)</small>

<small>

> **UI ve belge çevirileri hakkında not:** Orijinal İngilizce (UK) dışındaki tüm arayüz dilleri AI modelleri kullanılarak çevrildi; ifadeler hatalı veya yanlış olabilir.

</small>

<br/>


<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**İçindekiler** 

- [Başlamadan önce](#before-you-start)
  - [Ücretsiz OpenRouter API anahtarı nasıl alınır (masaüstü uygulaması)](#how-to-get-a-free-openrouter-api-key-desktop-app)
- [Başlangıç](#getting-started)
- [Pencerenin ana bölümleri](#main-parts-of-the-window)
  - [Kenar Çubuk](#sidebar)
  - [Araç Çubuğu](#toolbar)
  - [Giriş ve çıkış panelleri](#input-and-output-panels)
- [Çevir](#translate)
  - [Metni çevir](#translate-text)
  - [Dil seçimi](#language-selection)
  - [Yararlı çeviri ayarları](#helpful-translation-settings)
- [Yeniden Yaz](#rewrite)
- [Dönüştür](#transform)
  - [Mevcut bir prompt'u çalıştır](#run-an-existing-prompt)
  - [Henüz prompt'unuz yoksa](#if-you-have-no-prompts-yet)
  - [Hızlı bir prompt oluşturun](#create-a-prompt-quickly)
  - [Bir prompt'u düzenleyin](#edit-a-prompt)
  - [Bir prompt'u kullanmadan önce test edin](#test-a-prompt-before-using-it)
- [Gösterge Paneli](#dashboard)
  - [Verileri filtrele](#filter-the-data)
  - [Gösterge Paneli sekmeleri](#dashboard-tabs)
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
  - [Dönüştür prompt'ları](#transform-prompts)
  - [Kullanıcılar](#users)
  - [API yapılandırması](#api-config)
  - [Hakkında](#about)
- [Yaygın sorunlar](#common-issues)
  - [Uygulama metni çevirmez, yeniden yazmaz veya dönüştürmez](#the-app-will-not-translate-rewrite-or-transform-text)
  - [Model listesi boş](#the-model-list-is-empty)
  - [Sonuç çok yavaş veya çok pahalı](#the-result-is-too-slow-or-too-expensive)
  - [Arayüz yanlış dilde](#the-interface-is-in-the-wrong-language)
  - [Metin çok küçük veya okunması zor](#the-text-is-too-small-or-hard-to-read)
  - [Gösterge Paneli grafikleri boş](#dashboard-charts-are-empty)
  - [Maliyet "kullanılamıyor" gösteriyor veya yanlış görünüyor](#cost-shows-not-available-or-seems-wrong)
  - [Toplam maliyet, sağlayıcı faturasıyla eşleşmiyor](#total-cost-does-not-match-my-provider-bill)
  - [Geçmiş sayfası kenar çubuğunda eksik](#the-history-page-is-missing-from-the-sidebar)
  - [Web uygulaması: beklenmedik bir şekilde oturum açma sayfasına yönlendirildi](#web-app-redirected-to-the-login-page-unexpectedly)
  - [Gösterge Paneli diğer kullanıcılar için veri göstermez (web)](#dashboard-shows-no-data-for-other-users-web)
  - [Bir prompt'u değiştirdim ve değişiklikleri kaybettim](#i-changed-a-prompt-and-lost-the-edits)
- [Hızlı İpuçları](#quick-tips)
- [Sorumluluk Reddi](#disclaimer)
- [Lisans](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="before-you-start"></a>

## Başlamadan önce

Transrewrt kullanabilmek için en az bir yapay zeka sağlayıcısına erişiminiz olmalıdır. Desteklenen sağlayıcılar şunlardır: [OpenRouter](https://openrouter.ai) (pek çok modeli bir araya getirir), OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras ve yerel modeller için [Ollama](https://ollama.com).

Başlarken ücretli bir model seçmenize gerek yoktur. OpenRouter API anahtarınızı eklediğiniz anda uygulama otomatik olarak yerleşik bir **ücretsiz** OpenRouter seçeneğini etkinleştirir. Bu, metinleri hemen çevirmeye, yeniden yazmaya ve dönüştürmeye başlamanızı sağlar. Alternatif olarak, Cerebras, Google, Groq veya Mistral AI'dan da ücretsiz bir API anahtarı edinebilirsiniz.

Basitçe anlatmak gerekirse:

- **Model**, çalışmayı gerçekleştiren yapay zeka motorudur. Modeller bir **sağlayıcı öneki** ile birlikte listelenir (örneğin `openrouter/…`, `openai/…`, `ollama/…`).
- Bir **API anahtarı** (veya Ollama için bir **temel URL**) uygulamanın bu sağlayıcıya ulaşmasını sağlayan yöntemdir.

Eğer **masaüstü uygulamasını** kullanıyorsanız, kullandığınız her sağlayıcı için [**Ayarlar** > **API Yapılandırması**](#api-config)'na anahtar eklemelisiniz. Sadece OpenRouter kullanıyorsanız aşağıda bulunan [Bir API anahtarı nasıl alınır](#how-to-get-an-api-key-desktop-app) bölümüne bakınız. Eğer bir API anahtarı kullanmak istemiyorsanız, [ollama.com](https://ollama.com)'dan Ollama'yı kurabilir ve örneğin `translategemma:4b` gibi yerel modeller kullanabilirsiniz.

Eğer **web versiyonunu** kullanıyorsanız, sunucu sahibi sağlayıcıları ortam değişkenleri ile yapılandırır ve bu yüzden uygulamada doğrudan API anahtarları giremezsiniz.

<br/>

<a id="how-to-get-an-api-key-desktop-app"></a>
### Ücretsiz OpenRouter API anahtarı nasıl alınır (masaüstü uygulaması)

Masaüstü uygulamasını kullanıyorsanız aşağıdaki adımları izleyin:

1. Web tarayıcınızda [OpenRouter](https://openrouter.ai) adresine gidin.
2. Bir hesap oluşturun veya oturum açın.
3. [Anahtarlar (Keys)](https://openrouter.ai/keys) sayfasını açın.
4. Yeni bir API anahtarı oluşturmak için butona tıklayın.
5. Daha sonra tanıyabilmeniz için anahtara bir ad verin.
6. Yeni API anahtarını kopyalayın.
7. Transrewrt'e geri dönün ve **Ayarlar** > **API Yapılandırması** kısmını açın.
8. Anahtarı **OpenRouter API anahtarı** alanına yapıştırın (**Ayarlar** > **API Yapılandırması** altında).
9. Çalışıp çalışmadığını kontrol etmek için **OpenRouter anahtarını test et** butonuna tıklayın.

<br/><br/>

<a id="getting-started"></a>
## Başlarken

Eğer Transrewrt'yi ilk defa kullanıyorsanız, aşağıdaki sırayı takip edin:

1. Uygulamayı açın.
2. Gerekirse, dünya simgesinden **Arayüz dilinizi** seçin.
3. Eğer **masaüstü uygulamasını** kullanıyorsanız, [**Ayarlar** > **API Yapılandırması**](#api-config) kısmını açın, en az bir sağlayıcı için bir API anahtarı ekleyin (örneğin OpenRouter), ve kontrol etmek için **Test et** butonuna tıklayın.
4. [**Ayarlar** > **Modeller**](#models) kısmını açın ve bir veya daha fazla modeli **Seçilen Modeller** bölümüne ekleyin.
5. [**Ayarlar** > **Diller**](#languages) kısmını açın ve en çok kullandığınız dillerin en üstte görünmesini istiyorsanız **En üst dillerinizi** seçin.
6. **Çeviri** bölümüne gidin ve her şeyin düzgün çalıştığını doğrulamak için basit bir çeviri deneyin.
7. Bu işlem başarılı olursa, ardından **Yeniden Yaz** ve sonra **Dönüştür** seçeneklerini deneyin.

Bu sıralama önemlidir. En yaygın ilk kullanım sorunundan kaçınmanızı sağlar: uygulamaya çalışır bir API bağlantısı ya da seçili bir model olmadan görev çalıştırmaya çalışmak.

<br/><br/>

<a id="main-parts-of-the-window"></a>
## Pencerenin ana bölümleri

Uygulama üç ana bölüme ayrılmıştır:

- Soldaki **yan çubuk**.
- Üstteki **araç çubuğu**.
- Ortadaki **çalışma alanı**.

<br/>

<a id="sidebar"></a>
### Yan Çubuk

Uygulama içinde dolaşmak için yan çubuğu kullanın. Uygulama logosunun yanındaki simgeye tıklayarak daha fazla yer açmak için yan çubuğu daraltabilirsiniz.

<br/>

<table>
  <tr>
    <td valign="top">
       <img src="../images/screenshots/tr/sidebar.png" alt="Uygulama Yan Çubuğu" style="max-width: 100%; border: 1px solid #ddd; border-radius: 4px;">
    </td>
    <td valign="top">
      <br/><br/>
      <ul>
        <li><strong>Çeviri</strong> çevirme çalışma alanını açar.</li><br/>
        <li><strong>Yeniden Yaz</strong> yeniden yazma çalışma alanını açar.</li><br/>
        <li><strong>Dönüştür</strong> özel istem çalışma alanını açar.</li><br/>
        <li><strong>Pano</strong> kullanım ve maliyet bilgilerini gösterir.</li><br/>
        <li><strong>Ayarlar</strong> ayar panelini açar.</li><br/>
        <li><strong>Geçmiş</strong> girdi ve çıktı metinleriyle birlikte kullanım geçmişini gösterir.</li><br/>
        <li><strong>Kullanıcı</strong> oturum açmış kullanıcının kullanıcı adını gösterir (sadece web versiyonu).</li>
      </ul>
    </td>
  </tr>
</table>

<br/>

<a id="toolbar"></a>

### Araç Çubuğu

Araç çubuğu, uygulamada nerede olduğunuza göre hafifçe değişir.

- Sol tarafta, mevcut sayfanın adı gösterilir.
- Sağ tarafta, **model seçici** ve **Arayüz dili** kontrolü yer alır.

**Model seçici**, geçerli görev için hangi yapay zeka motorunu kullanacağınızı seçmenizi sağlar.

  ![Model seçici](../images/screenshots/tr/model-selector.png)

Bazı ücretsiz modeller her zaman kullanılamayabilir—bazen çevrimdışıdır ya da kullanım sınırına ulaşmıştır. Bu olursa, uygulama bu modeli otomatik olarak kullanılabilir listeden kaldırır. Hangi modellerin görüneceğini kontrol etmek için [**Ayarlar** > **Modeller**](#models) bölümüne gidin ve model listenizi düzenleyin.
Model ayarlarını, araç çubuğundaki model adının hemen solundaki sağlayıcı simgesine tıklayarak doğrudan da açabilirsiniz.

<br/>

**Küre simgesi ve dil kodu**, uygulama arayüz dili (menüler, butonlar gibi öğeler) değiştirmenizi sağlar. Bu işlem, **Çeviri** bölümünde kullanılan çeviri dillerini değiştirmez.

  ![Arayüz dili seçici](../images/screenshots/tr/language-selector.png)

<br/>

<a id="input-and-output-panels"></a>
### Giriş ve çıkış bölümleri

Çoğu çalışma alanı, soldaki **Giriş** bölümü ile sağdaki **Çıkış** bölümünden oluşur.

Her bölüm ayrıca aşağıdakileri gösterir:

| **Giriş**                                                        | **Çıkış**                                                                                                               |
|------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------|
| - Karakter sayısı <br/>- Kelime sayısı <br/>- Paragraf sayısı | - Görevin ne kadar sürdüğü <br/>- **TPS** (saniye başına token) <br/>- Karakter, kelime ve paragraf sayısı <br/>- Kullanılan model |


Teknik terimler hakkında merakınız varsa:

- **Token**, metin küçük parçası anlamına gelir. Bir kelimenin bir parçası ya da kısa bir kelime olarak düşünülebilir.
- **TPS**, modelin saniyede kaç tane metin parçası işlediğini gösterir.

<br/>

Ayrıca her işlemdeki maliyeti (mevcutsa) ve toplam maliyeti, [**Ayarlar** > **Genel ayarlar**](#general-settings) bölümünde `İşlemlerde maliyet bilgilerini göster` seçeneğini etkinleştirerek izleyebilirsiniz.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="translate"></a>
## Çevir

Metni bir dilden başka bir dile çevirmek istediğinizde **Çevir** özelliğini kullanın.

![Çevir çalışma alanı](../images/screenshots/tr/translate.png)

<br/>

<a id="translate-text"></a>
### Metin çevir

1. **Çevir** menüsünü açın.
2. **Kaynak** kısmında bir dil seçin.
3. **Hedef** kısmında bir dil seçin.
4. Araç çubuğundan bir model seçin.
5. **Giriş** bölümüne metin yazın veya yapıştırın.
6. **Çevir** butonuna tıklayın.
7. Sonucu **Çıkış** bölümünde okuyun.
8. Sonucu kopyalamak istiyorsanız kopyalama butonunu kullanın.

<br/>

<a id="language-selection"></a>
### Dil seçimi

- **Kaynak**, belirli bir dil olabilir ya da **Dili Algıla** seçeneği olabilir.
- **Hedef**, sonucun istediğiniz dilidir.

Seçili **Üst düzey dilleriniz**, listede en yukarıda görünür. Bunları [**Ayarlar** > **Diller**](#languages) menüsünde belirleyebilirsiniz.

<br/>

<a id="helpful-translation-settings"></a>
### Yardımcı çeviri ayarları

[**Ayarlar** > **Genel ayarlar**](#general-settings) bölümünde çeviri davranışını değiştirebilirsiniz:

- **Yapıştırmada otomatik çevir**, metni yapıştırdığınız anda çeviri işlemini başlatır.
- **Sonucu panoya otomatik kopyala**, çeviri başarıyla tamamlandıktan sonra sonucu otomatik olarak kopyalar.
- **Gerçek zamanlı çeviri (yazarken)**, yazarken çeviri başlatır.
- **Zaman aşımı (ms)**, gerçek zamanlı çeviri başlatılmadan önce uygulamanın ne kadar süre bekleyeceğini belirler.
- **Enter**, `Enter` tuşuna bastığınızda ne olacağını belirler:

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="rewrite"></a>
## Yeniden Yaz

Ana anlamı değiştirmeden ifadeyi iyileştirmek istediğinizde **Yeniden Yaz** özelliğini kullanın.

![Yeniden yaz çalışma alanı](../images/screenshots/tr/rewrite.png)

Bu özellik şu durumlar için uygundur:

- yazım ve dilbilgisi hatalarını düzeltmek
- metni daha anlaşılır hale getirmek
- metni daha resmi ya da daha samimi hale getirmek
- metni kısaltmak ya da uzatmak
- metne daha teknik bir hava kazandırmak

<br/>

> 💡 **İPUCU**<br/>
> "**Yazım ve Dilbilgisini Denetle**" modunu kullandığınızda, çıkış bölümünde bir `Değişiklikleri Göster` butonu belirir.
> Bu butona tıklayarak düzeltmelerin görüntülenip görüntülenmeyeceğini değiştirebilirsiniz; bu sayede metinde yapılan değişiklikler görünür ya da gizlenebilir.


<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="transform"></a>

## Dönüştür

Yapay zekanın özel talimatları takip etmesini istiyorsanız **Dönüştür**'ü kullanın.

![Dönüştür çalışma alanı](../images/screenshots/tr/transform.png)

Bu, uygulamanın en esnek bölümüdür. Aşağıdaki gibi görevler için kullanabilirsiniz:

- notları özetleme
- ham metni düzenlenmiş bir e-postaya dönüştürme
- önemli noktaları çıkarma
- metni belirli bir biçime dönüştürme
- girdi metniyle ilgili diğer özel işlemler

<br/>

<a id="run-an-existing-prompt"></a>
### Var olan bir istemi çalıştırın

1. **Dönüştür**'ü açın.
2. İstem listesinden bir istem seçin.
3. Bir **Hedef** dil kutusu görünürse, isterseniz bir dil seçin.
4. **Girdi** alanına metin yazın veya yapıştırın.
5. **Dönüştür**'e tıklayın.
6. Sonucu **Çıktı** alanında okuyun.

<br/>

<a id="if-you-have-no-prompts-yet"></a>
### Henüz hiç isteminiz yoksa

İstem listeniz boşsa, **Örnek istemleri yükle**'ye tıklayın. Bu, hızlıca başlamanız için dahili örnekler ekler.

<br/>

> ℹ️ **NOT**<br/>
> Örnek istemler İngilizce olarak sağlanır. Yüklendikten sonra bir istemi düzenleyip **İstemi çevir** seçeneği ile kendi dilinize çevirebilirsiniz.

<br/>

<a id="create-a-prompt-quickly"></a>
### Hızlıca bir istem oluşturun

Bir istem oluşturmanın en hızlı yolu şudur:

1. **Yeni istem**'e tıklayın.
2. **İstem oluştur**'a tıklayın.
3. İstemizin ne yapmasını istediğini açıklayın.
4. Bir model seçin.
5. Uygulamanın sizin için bir taslak oluşturmasını sağlayın.
6. Taslağı inceleyin ve **Kaydet**'e tıklayın.

![İstem oluştur](../images/screenshots/tr/transform-generate.png)


<br/>

<a id="edit-a-prompt"></a>
### İstem düzenleyin

Bir istem oluşturduğunuzda veya düzenlediğinizde, düzenleyici solda ve test alanı sağda görünür.

![Dönüştür istem düzenleyicisi](../images/screenshots/tr/transform-prompt-edit.png)

Ana alanlar şunlardır:

- **İstem adı**: İstem listesinde görünen ad.
- **İstem yönergeleri (isteğe bağlı)**: Kullanıcıya istem çalıştırıldığında gösterilen kısa bir ipucu.
- **Model Rolü**: Yapay zekaya atanan genel rol, örneğin 'Yararlı bir asistanısınız.'
- **Model Talimatları (satırbaşına bir)**: Yapay zekanın takip etmesini istediğiniz belirli kurallar.
- **Çıktı açıklaması**: Sonucu tanımlayan kısa bir kelime, örneğin 'özet' veya 'yeniden yazım'.
- **Sıcaklık (0.0 → 1.0)**: modelin nasıl davranacağıdır; aşağıya bakın.
- **Hedef dil iste**: İstem çalıştırıldığında bir hedef dil seçici ekler.

**Sıcaklık** gibi teknik bir terim sizin için yeniyseniz bunu şu şekilde düşünebilirsiniz:

- **Daha düşük** bir sıcaklık daha dengeli, daha öngörülebilir sonuçlar verir.
- **Daha yüksek** bir sıcaklık daha fazla çeşitlilik ve yaratıcılık sağlar.

Ayrıca aşağıdakileri de kullanabilirsiniz:

- Yeni bir taslak oluşturmak için **`İstem oluştur`**
- Mevcut bir istemi iyileştirmek için **`İstemi geliştir`**
- İstem alanlarını çevirmek için **`İstemi çevir`**

<br/>

> ⚠️ **UYARI**<br/>
> **`Geri Dön`**'e tıklamadan önce **`Kaydet`**'e tıklayın. Kaydetmeden geri dönerseniz, değişiklikleriniz kaybolur.

<br/>

<a id="test-a-prompt-before-using-it"></a>
### Kullanmadan önce bir istemi test edin

Sağdaki test paneli, uzun süreli işinizde kullanmadan önce örnek metinlerle isteminizi denemenizi sağlar.

Bu şu durumlarda yararlıdır:

- yeni bir istem geliştiriyorsanız
- iki istem sürümünü karşılaştırıyorsanız
- ton, uzunluk veya çıktı biçimi gibi şeyleri kontrol etmek istiyorsanız

<br/>

> ℹ️ **NOT**<br/>
> [**Ayarlar** > **Dönüştür İstemleri**](#transform-prompts) bölümünden kaydettiğiniz istemleri dışa aktarabilir ve içe aktarabilirsiniz.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="dashboard"></a>
## Kontrol Paneli

Uygulamayı ne kadar kullandığınızı ve maliyetlerin ne kadar olduğunu görmek için (ücretli modeller için) **Kontrol Paneli**'ni kullanın.

![Kontrol Paneli özet](../images/screenshots/tr/dashboard-summary.png)


<br/>

> ℹ️ **NOT**<br/>
> Sadece ücretsiz modeller kullanıyorsanız, maliyetle ilgili grafikler boş olacaktır. 

<br/>

<a id="filter-the-data"></a>
### Verileri filtreleyin

Zaman aralığını değiştirmek için en üstteki filtre düğmelerini kullanın.

![Kontrol Paneli filtreleri](../images/screenshots/tr/dashboard-filter.png)

<br/>

> ℹ️ **NOT**<br/>
> **Kullanıcı** filtresi yalnızca web sürümünde yöneticiler için görünür. Normal kullanıcılar bu filtreyi görmeyecek ve masaüstü uygulamasında bu filtre mevcut değildir.

<br/>

<a id="dashboard-tabs"></a>

### Pano sekmeleri

- **Özet**, kullanım ve maliyet genel bakışını sunar.
- **Kullanıma Göre** etkinliği çeviri dili, yeniden yazma kipi ve dönüşüm istemi bazında ayırır.
- **Modele Göre** hangi modelleri kullandığınızı ve maliyetlerini gösterir.
- **Günlere Göre** günlük toplamları gösterir.
- **Tüm Çağrılar** tam çağrı geçmişini gösterir ve dışa aktarmanıza olanak tanır.

<br/>

<a id="export-data"></a>
### Verileri dışa aktar

Pano tabloları şu formatlarda veri dışa aktarabilir:

- **JSON**
- **CSV**
- **XLSX**

Bu, aktiviteleri uygulamanın dışında incelemek veya bir raporu paylaşmak istiyorsanız faydalıdır.

<br/>

<a id="delete-stored-records-for-a-model"></a>
### Bir modelin kayıtlarını sil

**Modele Göre** veya **Tüm Çağrılar** bölümünde, bir modelin kayıtlarını "çöp kutusu" simgesine tıklayarak kaldırabilirsiniz.

> ⚠️ **UYARI**<br/>
> Silinen kayıtlar geri alınamaz. Bu işlemi yalnızca o geçmişe artık ihtiyacınız olmadığından emin olduğunuzda kullanın.

Tüm verileri silmek veya kayıtları yaşlarına göre kaldırmak için [**Ayarlar** > **Maliyet Takibi**](#cost-tracking) bölümüne gidin. Burada tüm kayıtları silebilir veya belirli bir tarihten daha eski verileri silebilirsiniz.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="history"></a>
## Geçmiş

**Transrewrt** içindeki işlemlerinizin geçmişini, her adımın giriş ve çıkışları dahil olmak üzere görmek için **Geçmiş** sekmesine tıklayın.

![Geçmiş sayfası](../images/screenshots/tr/history.png)

<br/>

<a id="filter-the-history"></a>
### Verileri filtrele

**Geçmiş**, **Pano** sayfasıyla aynı filtreyi kullanır. Zaman aralığını seçmek için bunları kullanın.

![Pano filtreleri](../images/screenshots/tr/dashboard-filter.png)

<br/>

> ℹ️ **NOT**<br/>
> **Kullanıcı** filtresi yalnızca web sürümündeki yöneticiler tarafından görünür. Normal kullanıcılar bu filtreyi görmeyecektir ve masaüstü uygulamasında bu özellik kullanılamaz.

<br/>

<a id="export-history-data"></a>
### Geçmiş verilerini dışa aktar

Geçmiş sayfası, filtrelenmiş verileri aşağıdaki formatlarda dışa aktarabilir:

- **JSON**
- **CSV**
- **XLSX**

Bu, aktiviteleri uygulamanın dışında incelemek veya bir rapor paylaşmak istiyorsanız faydalıdır.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="settings"></a>
## Ayarlar

Uygulamanın davranışını özelleştirmek için kenar çubuğundan **Ayarlar** sekmesini açın.

Mevcut sekmeler platformunuza ve kullanıcı rolünüze göre değişir:

  | Sekme               | Masaüstü | Web (yönetici) | Web (normal kullanıcı) |
  |-------------------|:-------:|:-----------:|:------------------:|
  | Genel Ayarlar     |   evet   |     evet     |        evet         |
  | Modeller          |   evet   |     evet     |        evet         |
  | Diller            |   evet   |     evet     |        evet         |
  | Maliyet Takibi    |   evet   |     evet     |         —          |
  | Dönüşüm İstemleri |   evet   |     evet     |        evet         |
  | Kullanıcılar      |    —    |     evet     |         —          |
  | API Yapılandırması|   evet   |     evet     |         —          |
  | Hakkında          |   evet   |     evet     |        evet         |

<br/>

> ℹ️ **NOT**<br/>
> Web sürümünde, her kullanıcı kendi yapılandırmasını barındırır. Seçilen modeller, diller, genel seçenekler ve dönüşüm istemleri kullanıcı bazında saklanır. Yaptığınız değişiklikler diğer kullanıcıları etkilemez.

<br/>


[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="general-settings"></a>
### Genel ayarlar

**Genel Ayarlar** sekmesini yazma davranışını, yürütme ayrıntılarının **Geçmiş** için saklanıp saklanmayacağı ile görünümü kontrol etmek için kullanın.

**Davranış**

- **ENTER için davranış**, `Enter` tuşunun görevi çalıştırması mı yoksa yeni satır eklemesi mi istediğini belirler.
- **Yapıştırmada otomatik çeviri**, metin yapıştırılır yapıştırmaz çeviriyi başlatır.
- **Sonucu otomatik olarak panoya kopyala**, başarılı sonuçları otomatik olarak kopyalar.
- **Gerçek zamanlı çeviri (yazarken)** yazarken çeviriyi gerçekleştirir.
- **Zaman aşımı (ms)** gerçek zamanlı çeviri için bekleme süresini ayarlar.

**Geçmiş**

- **Yürütme geçmişini tut**, her çevirme, yeniden yazma ve dönüşüm işlemi için **giriş ve çıkış metnini** kenar çubuğu [**Geçmiş**](#history) görünümünde saklayıp saklamayacağını kontrol eder. Kapatıldığında onay istenir; onay verirseniz, geçmiş metni veritabanından kaldırılır.
- **Geçmiş verilerini sil**, saklanan metinleri yaşı üzerinden (örneğin birkaç aydan eski veya **tüm veriler (temizle)**) **Verileri Sil** seçeneğiyle kaldırmanıza olanak tanır. Bu yalnızca **Geçmiş** görünümü için kayıtlı yürütme metinlerini etkiler; **maliyet** veya kullanım toplamlarını silmez. **Maliyet** verilerini kaldırmak ya da kısaltmak için [**Ayarlar** > **Maliyet Takibi**](#cost-tracking) bölümünü kullanın.

**Görünüm**

- **İşlemlerde maliyet bilgisi göster**, işlem başına maliyetin (mevcutsa) ve toplam maliyetin Çeviri, Yeniden Yazma ve Dönüşüm sonuç panelinde görünmesini kontrol eder.
- **Maliyet ondalık basamakları** maliyet ondalık sayılarının nasıl gösterileceğini değiştirir.
- **Sadece web için:** **Uygulama etrafında kenar boşluğu göster**, arayüz etrafına ekstra boşluk ekler.
- **Yazı tipi ailesi**, metin panellerindeki yazı tipini değiştirir.
- **Boyut** yazı boyutunu değiştirir.


<br/>

<a id="models"></a>

### Modeller

Araç çubuğunda hangi modellerin görüneceğini seçmek için **Ayarlar** > **Modeller** bölümünü kullanın.

![Ayarlar Modeller sekmesi](../images/screenshots/tr/settings-models.png)

Sayfada iki liste bulunur:

- Sol tarafta **Kullanılabilir Modeller**
- Sağ tarafta **Seçilen Modeller**

Kullanışlı denetimler arasında şunlar yer alır:

- **Modelleri ara...** adınıza göre model bulma
- Listeyi tek bir altyapıya daraltmak için **Sağlayıcı** etiketleri (OpenRouter, OpenAI, Ollama, …)
- Sadece ücretsiz modelleri göstermek için **Sadece Ücretsiz**
- Listeyi yeniden yüklemek için **Yenile**
- Sağlayıcıya göre sıralarken **Tümünü Genişlet** ve **Tümünü Daralt**

Model kimlikleri sağlayıcı önekini içerir (örneğin `openrouter/…` vs `openai/…`). Trafik yönlendirmenin nasıl yapıldığını gösteren **OpenAI (OpenRouter)** ve **OpenAI (doğrudan)** gibi rozetler görünür.

> ℹ️ **NOT**<br/>
> **OpenRouter Body Builder** (`openrouter/bodybuilder`) genel sohbet modeli değil, yönlendirme modelidir: yanıtı, OpenRouter API istek gövdelerini (örneğin bir `model` ve `messages` içeren `requests` dizisi) tarif eden bir JSON'dur. Bunu **Çevir**, **Yeniden Yaz** ya da **Dönüştür** görevlerinde kullanırsanız, çıktı bölmeyi tamamlanmış metin yerine bu JSON gösterir. Bu tür görevler için normal bir metin modeli seçin. [Body Builder model sayfasını](https://openrouter.ai/openrouter/bodybuilder) OpenRouter'da görün.

İşlemler:

- Bir model eklemek için **Ekle**'ye tıklayın veya modele tıklayın.

- Bir modeli kaldırmak için **Seçilen Modeller** listesinde yanındaki **X** işaretine tıklayın veya Kullanılabilir Modeller listesindeki girişte **Seçildi**'ye tıklayın.

- Listeyi temizlemek için **Tümünü Kaldır**'a tıklayın. Gerekli ücretsiz model listede kalır.

<br/>

> ℹ️ **NOT**<br/>
> OpenRouter'a kredi eklemek istemiyorsanız önce **Sadece Ücretsiz**'i etkinleştirerek (kredi kartı gerekmez) ücretsiz modelleri seçerek başlayın. Ayrıca herhangi bir API anahtarı olmadan yerel olarak modeller çalıştırmak için Ollama kullanabilirsiniz.

<br/>

<a id="languages"></a>
### Diller

Uygulamada kullanılan dil listelerini düzenlemek için **Ayarlar** > **Diller** bölümüne gidin.

- **En çok kullanılan diller**, **Çevir** ve **Dönüştür** bölümlerinde dil listelerinin üst kısmında sabitlenir.
- **Özel dil**, yerleşik listede olmayan bir dil eklemenize olanak tanır.

Bir özel dil eklerseniz yerleşik seçeneklerin yanında dil seçim menülerinde görünür.

<br/>

<a id="cost-tracking"></a>
### Maliyet Takibi

Maliyet bilgilerini yönetmek için **Ayarlar** > **Maliyet Takibi** bölümünü kullanın.

- **Toplam Maliyet**, toplamı gösterir.
- **Değeri Kopyala**, toplamı panoya kopyalar.
- **Maliyeti Sıfırla**, kayıtlı toplamı sıfırlar.
- **API anahtarı kullanımıyla eşitle**, toplamı OpenRouter hesabınızın bildirdiği kullanım ile eşleştirir (sadece OpenRouter).
- **API Anahtarı Kullanımı**, varsa OpenRouter kullanım ayrıntılarını gösterir.
- **Maliyet verilerini sil**, tüm veriyi kaldırır veya belirli bir tarihten önceki kayıtları siler.

**Maliyet takibi:** OpenRouter modellerini kullandığınızda uygulama, OpenRouter'dan gelen maliyet bilgilerine göre gerçek kullanımınızı ve harcamalarınızı gösterir. Diğer sağlayıcılar için uygulama, OpenRouter tarafından yayımlanan fiyatlarla maliyetleri tahmin eder. Fiyat yoksa tahmini maliyet sıfır olabilir.

<br/>

> ℹ️ **NOT**<br/>
> **Tüm maliyet tutarları yalnızca referans amaçlıdır, resmi faturalar değildir.**

<br/>

> ⚠️ **UYARI**<br/>
> Veri silme işlemi geri alınamaz. Silmeden önce verilerinizi yedekleyin veya [**Geçmiş**](#history) veya [**Pano** > **Tüm Çağrılar**](#dashboard-tabs) sayfalarıyla dışa aktarın, aksi halde veriler kalıcı olarak silinir. Her API çağrısıyla ilgili tüm giriş/çıkış geçmişi de silinecektir.

<br/>

<a id="transform-prompts"></a>
### Dönüştürme İstemleri

İstemleri toplu olarak yönetmek için **Ayarlar** > **Dönüştürme İstemleri** bölümünü kullanın.

Şunları yapabilirsiniz:

- kayıtlı istemlerinizi gözden geçirin
- istemleri silin
- bir dosyadan istemleri içeri aktarın
- yedekleme ya da paylaşım için istemleri dışa aktarın

<br/>

<a id="users"></a>
### Kullanıcılar

Web sürümünde kullanıcı hesaplarını yönetmek için **Kullanıcılar**'ı kullanın. Kullanıcı ekleyebilir, ayrıntılarını güncelleyebilir, parolaları sıfırlayabilir ve hesapları silebilirsiniz.

<br/>

<a id="api-config"></a>
### API Yapılandırması

Desteklenen sağlayıcılar şunlardır: OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras ve **Ollama** (temel URL üzerinden yerel modeller). Yalnızca kullandığınız sağlayıcıları yapılandırmanız gerekir.

**Web uygulaması: yalnızca yönetici için**

API anahtarları sistem ya da Docker ortam değişkenleri aracılığıyla yapılandırılır — web arayüzünde girilmez. Bu sayfa hangi sağlayıcıların anahtarla yapılandırıldığını gösterir ve her birini **`Test`** düğmesine tıklayarak deneyebilirsiniz.

<br/>

> ℹ️ **NOT**<br/>
> Bir API anahtarını değiştirmek için sisteminizdeki veya Docker yapılandırmanızdaki ortam değişkenini güncelleyin ve sunucuyu veya kapsayıcıyı yeniden başlatın.

<br/>

**Masaüstü uygulaması**

Kullandığınız her sağlayıcı için API anahtarlarını saklamak üzere **API Yapılandırması**'nı kullanın. Ollama için API anahtarı yerine **temel URL** girin.

<br/>

> 💡 **İpucu** <br/>
> API anahtarı kullanmak istemiyorsanız veya kullanım için ödeme yapmak istemiyorsanız, [Ollama'yı indirerek](https://ollama.com) `translategemma:4b` gibi modelleri makinenizde ücretsiz olarak çalıştırabilirsiniz. Alternatif olarak kredi kartına gerek olmadan ücretsiz modelleri kullanmak için ücretsiz bir OpenRouter hesabı oluşturabilir veya Cerebras, Google, Groq veya Mistral AI'dan ücretsiz API anahtarı alabilirsiniz.

<br/>

- Yalnızca ihtiyacınız olan sağlayıcıları ekleyin. **Ayarlar** > **Modeller** menüsünde her model kimliği sağlayıcıyla başlar (örneğin `openrouter/openrouter/free`, `openai/gpt-4o`, `ollama/llama3`).

Bir API anahtarı eklemek için metin kutusuna değerini girip **`Kaydet`**'e tıklayın. Mevcut bir anahtarı değiştirmek için **`Düzenle`**'ye tıklayın. Bir anahtarın çalıştığından emin olmak için **`Test`**'e tıklayın. Ollama'nın temel URL'si için bağlantıyı kontrol etmek için her zaman **`Test`**'e tıklayın.

<br/>

> ℹ️ **NOT**<br/>
> Mevcut API anahtarının değerini göremezsiniz. Yalnızca **`Düzenle`** düğmesini kullanarak değiştirebilirsiniz.
> API anahtarları yapılandırmada şifreli olarak saklanır.

<br/>

<a id="about"></a>

### Hakkında

**Hakkında** sekmesi aşağıdakileri gösterir:

- uygulama adı
- sürüm numarası
- derleme tarihi
- proje deposuna bir bağlantı

<br/><br/>

<a id="common-issues"></a>
## Sık Karşılaşılan Sorunlar

Bir şey beklendiği gibi çalışmıyorsa, önce aşağıdaki noktaları kontrol edin.

<br/>

<a id="the-app-will-not-translate-rewrite-or-transform-text"></a>
### Uygulama metni çevirmiyor, yeniden yazmıyor veya dönüştürmüyor

Aşağılarını kontrol edin:

- araç çubuğundan bir model seçtiğinizden emin olun
- [**Ayarlar** > **Modeller**](#models) bölümünde en az bir model listelenmiş olmalı
- API ayarınız çalışır durumda olmalı

Masaüstü uygulamasını kullanıyorsanız:

1. [**Ayarlar** > **API Yapılandırması**](#api-config) bölümüne gidin.
2. En az bir API anahtarının kaydedildiğinden emin olun.
3. Anahtarın çalışır durumda olduğunu doğrulamak için sağlayıcı yanında bulunan **Test** butonuna tıklayın.

<br/>

<a id="the-model-list-is-empty"></a>
### Model listesi boş

[**Ayarlar** > **Modeller**](#models) sayfasını açın ve **Yenile** butonuna tıklayın.

Gerekirse:

- bir model arayın
- yalnızca **Ücretsizleri Göster** seçeneğini etkinleştirin
- **Seçili Modeller** bölümüne bir veya daha fazla model ekleyin

<br/>

<a id="the-result-is-too-slow-or-too-expensive"></a>
### Sonuç çok yavaş veya çok maliyetli

Aşağıdakilerden birini veya birkaçını deneyin:

- farklı bir model seçin
- daha kısa bir metin girişi kullanın
- [**Ayarlar** > **Genel Ayarlar**](#general-settings) bölümünde **Gerçek Zamanlı Çeviri (yazarken)** seçeneğini kapatın
- basit görevler için ücretsiz modeller kullanın (bkz. [Modeller](#models))

<br/>

<a id="the-interface-is-in-the-wrong-language"></a>
### Arayüz yanlış dilde

[Araç çubuğundaki](#toolbar) (toolbar) dünya simgesine tıklayarak tercih ettiğiniz **Arayüz dili**ni seçin.

<br/>

<a id="the-text-is-too-small-or-hard-to-read"></a>
### Metin çok küçük veya okunması zor

[**Ayarlar** > **Genel Ayarlar**](#general-settings) sayfasını açın ve şu ayarları değiştirin:

- **Yazı Tipi Ailesi**
- **Boyut**

<br/>

<a id="dashboard-charts-are-empty"></a>
### Kontrol panosu grafikleri boş

Bu durum şu durumlarda normaldir:

- yalnızca **ücretsiz modeller** kullanıyorsanız (maliyet grafikleri boş kalır)
- seçilen **zaman süzgeci**, çağrıların yapıldığı dönemi içermiyor — kontrol etmek için **Tümü** seçeneğini deneyin

**Tümü** seçildikten sonra grafikler hâlâ boşsa, çağrıların [**Geçmiş**](#history) bölümünde ya da **Tüm Çağrılar** sekmesinde görünür hâle geldiğini doğrulayın.

<br/>

<a id="cost-shows-not-available-or-seems-wrong"></a>
### Maliyet "mevcut değil" olarak gösteriliyor veya hatalı görünüyor

**OpenRouter** üzerinden modeller kullandığınızda, uygulama size OpenRouter tarafından bildirilen gerçek harcamanızı gösterir.

**Diğer sağlayıcılar** (OpenAI doğrudan, Anthropic doğrudan, vs.) için maliyet, OpenRouter tarafından yayınlanan fiyatlandırma verilerine göre tahmini olarak hesaplanır. Bir modele eşleşen bir fiyat bulunamazsa maliyet **mevcut değil** olarak gösterilir ve toplam maliyete eklenmez.

<br/>

<a id="total-cost-does-not-match-my-provider-bill"></a>
### Toplam maliyet sağlayıcımın faturasıyla uyuşmuyor

Uygulamadaki tüm maliyet bilgileri **yalnızca başvuru amaçlı tahminlerdir**, resmi fatura veya tahakkuk değildir.

Toplam maliyetinizi gerçek OpenRouter harcamanıza daha yakın hâle getirmek için [**Ayarlar** > **Maliyet Takibi**](#cost-tracking) sayfasını açın ve **API anahtarı kullanımına eşitle** seçeneğine tıklayın.

<br/>

<a id="the-history-page-is-missing-from-the-sidebar"></a>
### Geçmiş sayfası kenar çubuğunda eksik

**Çalıştırma geçmişini sakla** seçeneği kapatılmış olabilir. [**Ayarlar** > **Genel Ayarlar**](#general-settings) bölümüne gidin ve etkinleştirin. Bu seçeneğin açılmasının, daha önce silinmiş olan geçmiş verilerini geri getirmeyeceğini unutmayın.

<br/>

<a id="web-app-session-expired"></a>
### Web uygulaması: beklenmedik şekilde giriş sayfasına yönlendirildi

Oturum süresiniz dolmuş olabilir. Tekrar giriş yapın. Sık sık oluyorsa, sunucu yapılandırmasını oturum ömrü ayarları açısından kontrol edin.

<br/>

<a id="dashboard-shows-no-data-for-other-users"></a>
### Kontrol panosu diğer kullanıcılar için veri göstermiyor (web)

Yalnızca **yöneticiler**, **Kullanıcı** süzgeci aracılığıyla tüm kullanıcıların verilerini görebilir. Normal kullanıcılar tasarımı gereği yalnızca kendi etkinliklerini görür.

<br/>

<a id="i-changed-a-prompt-and-lost-the-edits"></a>
### Bir istemi değiştirdim ve düzenlemelerimi kaybettim

Bir istemi düzenlerken, her zaman **Geri Dön** butonuna tıklamadan önce **Kaydet** butonuna tıklayın.

<br/><br/>

<a id="quick-tips"></a>
## Hızlı İpuçları

- [**Çevir**](#translate) seçeneğiyle başlayın, böylece [**Yeniden Yaz**](#rewrite) veya [**Dönüştür**](#transform) seçeneklerine geçmeden önce kurulumunuzun düzgün çalıştığını kontrol edin.
- Günlük dil kullanımını iyileştirmek için [**Yeniden Yaz**](#rewrite) seçeneğini kullanın.
- Tekrarlanabilir bir iş akışı gerektiğinde belirli bir görev için [**Dönüştür**](#transform) seçeneğini kullanın.
- Kullanımı ve maliyeti takip etmek istiyorsanız [**Kontrol Paneli**](#dashboard) sayfasını kullanın.
- Önceki işlemleri ve tam girdi/çıktı metinlerini incelemek için [**Geçmiş**](#history) sayfasını kullanın.
- Bir istem kitaplığı oluşturuyorsanız ve bunu güvende tutmak istiyorsanız düzenli olarak dışa aktarın (bkz. [İstemleri Dönüştür](#transform-prompts)) ya da başkalarıyla paylaşmak istiyorsanız dışa aktarın.

<br/><br/>

<a id="disclaimer"></a>

## Sorumluluk Reddi

Ürün isimleri ve simgeleri, sahiplerine aittir ve yalnızca tanımlama amaçlı kullanılır. Bu yazılım, bahsedilen markalarla ilişiği olmayan veya onların desteklediği bir yazılım değildir.

<br/><br/>

<a id="license"></a>
## Lisans

Telif Hakkı © 2026 Waldemar Scudeller Jr.

[Apache Lisansı 2.0](LICENSE)