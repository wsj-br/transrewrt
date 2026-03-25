---
translated_at: "2026-03-25T22:48:36.622Z"
source_hash: "6ca7b21e820e8ee121cd93bbf98806547c5c3ce7914799891d923201bd2c4466"
source_mtime: 1774468804877.8855
model: "qwen/qwen3-235b-a22b-2507"
---
![Transrewrt başlığı](../images/transrewrt_banner.png)


<a id="transrewrt-user-guide"></a>
# Kullanıcı Kılavuzu

<br/>

<a id="introduction"></a>
## Giriş

Transrewrt, metinlerle çalışmanıza üç ana yoldan destek sağlar:

- **Çevir** - metni bir dilden diğerine dönüştür.
- **Yeniden Yaz** - metni daha net, daha kısa veya daha resmi gibi farklı bir biçimde yeniden ifade et.
- **Dönüştür** - "prompt" adı verilen özel yapay zekâ talimatlarını kullanarak metni işle.

<br/>

Bu kılavuz uygulama yüklenip çalıştırıldıktan sonra kullanımı anlatır. Yükleme adımları için ana **[README](README.tr.md)** sayfasına bakınız.

<br/>

> ℹ️ **NOT**<br/>
> Transrewrt, Windows ve Linux için masaüstü uygulaması olarak ve kendi sunucunuza kurabileceğiniz bir web uygulaması olarak mevcuttur. Bu kılavuz uygulamanın günlük kullanımına odaklanmıştır. Sadece bir sürüme özgü olan özellikler, açıkça belirtilmiştir.

<small>**Diğer dillerde oku:** [English (UK)](USER-GUIDE.tr.md) · [Português (BR)](USER-GUIDE.pt-BR.md) · [العربية](USER-GUIDE.ar.md) · [বাংলা](USER-GUIDE.bn.md) · [Català](USER-GUIDE.ca.md) · [简体中文](USER-GUIDE.zh-CN.md) · [繁體中文](USER-GUIDE.zh-TW.md) · [Hrvatski](USER-GUIDE.hr.md) · [Čeština](USER-GUIDE.cs.md) · [Nederlands](USER-GUIDE.nl.md) · [English (US)](USER-GUIDE.en-US.md) · [Filipino](USER-GUIDE.tl.md) · [Français](USER-GUIDE.fr.md) · [Deutsch](USER-GUIDE.de.md) · [Ελληνικά](USER-GUIDE.el.md) · [हिन्दी](USER-GUIDE.hi.md) · [Magyar](USER-GUIDE.hu.md) · [Italiano](USER-GUIDE.it.md) · [日本語](USER-GUIDE.ja.md) · [Basa Jawa](USER-GUIDE.jv.md) · [한국어](USER-GUIDE.ko.md) · [Bahasa Melayu](USER-GUIDE.ms.md) · [فارسی](USER-GUIDE.fa.md) · [Polski](USER-GUIDE.pl.md) · [Português (PT)](USER-GUIDE.pt.md) · [ਪੰਜਾਬੀ](USER-GUIDE.pa.md) · [Română](USER-GUIDE.ro.md) · [Русский](USER-GUIDE.ru.md) · [Slovenčina](USER-GUIDE.sk.md) · [Español](USER-GUIDE.es.md) · [Kiswahili](USER-GUIDE.sw.md) · [Svenska](USER-GUIDE.sv.md) · [తెలుగు](USER-GUIDE.te.md) · [ภาษาไทย](USER-GUIDE.th.md) · [Türkçe](USER-GUIDE.tr.md) · [Українська](USER-GUIDE.uk.md) · [Tiếng Việt](USER-GUIDE.vi.md)</small>

<small>

> **Arayüz ve belgelerin çevirisine not:** Orijinal İngilizce (UK) hariç tüm arayüz dilleri, yapay zekâ modelleri kullanılarak çevrilmiştir; bu nedenle ifadeler belirsiz olabilir veya hatalar içerebilir.

</small>

<br/>


<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**İçindekiler** 

- [Başlamadan önce](#before-you-start)
  - [Ücretsiz OpenRouter API anahtarı nasıl alınır (masaüstü uygulaması)](#how-to-get-a-free-openrouter-api-key-desktop-app)
- [Başlarken](#getting-started)
- [Pencerenin ana bölümleri](#main-parts-of-the-window)
  - [Yan panel](#sidebar)
  - [Araç çubuğu](#toolbar)
  - [Giriş ve çıkış panelleri](#input-and-output-panels)
- [Çevir](#translate)
  - [Metni çevir](#translate-text)
  - [Dil seçimi](#language-selection)
  - [Yararlı çeviri ayarları](#helpful-translation-settings)
- [Yeniden Yaz](#rewrite)
- [Dönüştür](#transform)
  - [Varolan bir prompt'u çalıştırın](#run-an-existing-prompt)
  - [Henüz prompt'unuz yoksa](#if-you-have-no-prompts-yet)
  - [Hızlıca bir prompt oluşturun](#create-a-prompt-quickly)
  - [Bir prompt'u düzenleyin](#edit-a-prompt)
  - [Kullanmadan önce bir prompt'u test edin](#test-a-prompt-before-using-it)
- [Konsol](#dashboard)
  - [Verileri süz](#filter-the-data)
  - [Konsol sekmeleri](#dashboard-tabs)
  - [Veri dışa aktar](#export-data)
  - [İlgili modelin kayıtlarını sil](#delete-stored-records-for-a-model)
- [Geçmiş](#history)
  - [Verileri süz](#filter-the-data-1)
  - [Geçmiş verilerini dışa aktar](#export-history-data)
- [Ayarlar](#settings)
  - [Genel ayarlar](#general-settings)
  - [Modeller](#models)
  - [Diller](#languages)
  - [Maliyet takibi](#cost-tracking)
  - [Dönüşüm prompt'ları](#transform-prompts)
  - [Kullanıcılar](#users)
  - [API yapılandırması](#api-config)
  - [Hakkında](#about)
- [Sık karşılaşılan sorunlar](#common-issues)
  - [Uygulama metni çevirmiyor, yeniden yazmıyor veya dönüştürmüyor](#the-app-will-not-translate-rewrite-or-transform-text)
  - [Model listesi boş](#the-model-list-is-empty)
  - [Sonuç çok yavaş veya çok pahalı](#the-result-is-too-slow-or-too-expensive)
  - [Arayüz yanlış dilde](#the-interface-is-in-the-wrong-language)
  - [Metin çok küçük veya okunması zor](#the-text-is-too-small-or-hard-to-read)
  - [Konsol grafikleri boş](#dashboard-charts-are-empty)
  - [Maliyet "mevcut değil" veya yanlış görünüyor](#cost-shows-not-available-or-seems-wrong)
  - [Toplam maliyet, sağlayıcımın faturasıyla uyuşmuyor](#total-cost-does-not-match-my-provider-bill)
  - [Geçmiş sayfası yan panelde eksik](#the-history-page-is-missing-from-the-sidebar)
  - [Web uygulaması: beklenmedik şekilde oturum açma sayfasına yönlendirildim](#web-app-redirected-to-the-login-page-unexpectedly)
  - [Konsol diğer kullanıcılar için veri göstermiyor (web)](#dashboard-shows-no-data-for-other-users-web)
  - [Bir prompt'u değiştirdim ve düzenlemeleri kaybettim](#i-changed-a-prompt-and-lost-the-edits)
- [Hızlı ipuçları](#quick-tips)
- [Yasal uyarı](#disclaimer)
- [Lisans](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="before-you-start"></a>

## Başlamadan önce

Transrewrt kullanabilmek için en az bir yapay zeka sağlayıcısına erişmeniz gerekir. Desteklenen sağlayıcılar şunlardır: Birçok modeli bir araya getiren [OpenRouter](https://openrouter.ai), OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras ve yerel modeller için [Ollama](https://ollama.com).

Başlamak için bir ücretli model seçmenize gerek yoktur. OpenRouter API anahtarınızı eklediğiniz anda uygulama, dahili bir **ücretsiz** OpenRouter seçeneğini otomatik olarak devreye sokar. Bu sayede anında çeviri yapmaya, metinleri yeniden yazmaya ve dönüştürmeye başlayabilirsiniz. Alternatif olarak, Cerebras, Google, Groq veya Mistral AI'dan ücretsiz bir API anahtarı da alabilirsiniz.

Daha basit bir dille:

- Bir **model**, işi yapan yapay zeka motorudur. Modeller bir **sağlayıcı öneki** ile birlikte listelenir (örneğin `openrouter/…`, `openai/…`, `ollama/…`).
- Bir **API anahtarı** (veya Ollama için bir **temel URL**), uygulamanın bu sağlayıcıya nasıl ulaşacağını belirler.

Eğer **masaüstü uygulamasını** kullanıyorsanız, kullandığınız her sağlayıcı için [**Ayarlar** > **API Yapılandırması**](#api-config) kısmına anahtar ekleyin. Sadece OpenRouter kullanacaksanız aşağıda [Bir API anahtarı nasıl alınır?](#how-to-get-an-api-key-desktop-app) bölümüne bakın. Eğer bir API anahtarı kullanmak istemiyorsanız, [ollama.com](https://ollama.com)'dan Ollama kurabilir ve `translategemma:4b` gibi yerel modeller kullanabilirsiniz.

Eğer **web sürümünü** kullanıyorsanız, sunucu sahibi sağlayıcıları ortam değişkenleriyle yapılandırır, bu yüzden uygulamada doğrudan API anahtarlarını giremezsiniz.

<br/>

<a id="how-to-get-an-api-key-desktop-app"></a>
### Ücretsiz OpenRouter API anahtarı nasıl alınır? (masaüstü uygulaması)

Eğer masaüstü uygulamasını kullanıyorsanız şu adımları izleyin:

1. Web tarayıcınızda [OpenRouter](https://openrouter.ai)'ya gidin.
2. Bir hesap oluşturun veya oturum açın.
3. [Anahtarlar](https://openrouter.ai/keys) sayfasını açın.
4. Yeni bir API anahtarı oluşturmak için butona tıklayın.
5. Daha sonra tanıyabilmeniz için anahtara bir ad verin.
6. Yeni API anahtarını kopyalayın.
7. Transrewrt'e geri dönün ve **Ayarlar** > **API Yapılandırması** sayfasını açın.
8. Anahtarı **OpenRouter API anahtarı** alanına yapıştırın (**Ayarlar** > **API Yapılandırması** içinde).
9. Çalıştığını doğrulamak için **OpenRouter anahtarını test et** butonuna tıklayın.

<br/><br/>

<a id="getting-started"></a>
## Başlarken

Eğer Transrewrt'yi ilk defa kullanıyorsanız şu sırayı izleyin:

1. Uygulamayı açın.
2. Gerekirse, dünya simgesinden **Arayüz dilinizi** seçin.
3. Eğer **masaüstü uygulamasını** kullanıyorsanız, [**Ayarlar** > **API Yapılandırması**](#api-config) sayfasını açın, en az bir sağlayıcı için bir API anahtarı ekleyin (örneğin OpenRouter) ve çalıştığını doğrulamak için **Test** butonuna tıklayın.
4. [**Ayarlar** > **Modeller**](#models) sayfasını açın ve **Seçili Modeller** bölümüne bir veya daha fazla model ekleyin.
5. [**Ayarlar** > **Diller**](#languages) sayfasını açın ve en çok kullandığınız dillerin en üstte görünmesini istiyorsanız **Başlıca dillerinizi** seçin.
6. **Çeviri** bölümüne gidin ve her şeyin düzgün çalıştığını doğrulamak için basit bir çeviri yapın.
7. Bu çalıştığında, sırayla **Yeniden Yaz** ve ardından **Dönüştür** özelliklerini deneyin.

Bu sıranın önemi vardır. En yaygın ilk kullanım sorunlarından biri olan, uygulamanın API bağlantısı kurulmadan ya da bir model seçilmeden görev başlatmayı denemeyi önler.

<br/><br/>

<a id="main-parts-of-the-window"></a>
## Pencerenin ana bölümleri

Uygulama üç ana bölüme ayrılmıştır:

- Soldaki **kenar çubuğu**.
- Üstteki **araç çubuğu**.
- Ortadaki **çalışma alanı**.

<br/>

<a id="sidebar"></a>
### Kenar Çubuğu

Uygulama içinde dolaşmak için kenar çubuğunu kullanın. Uygulama logosunun yanındaki simgeye tıklayarak kenar çubuğunu daraltabilir ve daha fazla boşluk elde edebilirsiniz.

<br/>

<table>
  <tr>
    <td valign="top">
       <img src="../images/screenshots/tr/sidebar.png" alt="Uygulama Kenar Çubuğu" style="max-width: 100%; border: 1px solid #ddd; border-radius: 4px;">
    </td>
    <td valign="top">
      <br/><br/>
      <ul>
        <li><strong>Çeviri</strong>, çeviri çalışma alanını açar.</li><br/>
        <li><strong>Yeniden Yaz</strong>, yeniden yazma çalışma alanını açar.</li><br/>
        <li><strong>Dönüştür</strong>, özel talimat çalışma alanını açar.</li><br/>
        <li><strong>Kontrol Paneli</strong>, kullanım ve maliyet bilgilerini gösterir.</li><br/>
        <li><strong>Ayarlar</strong>, ayarlar panelini açar.</li><br/>
        <li><strong>Geçmiş</strong>, giriş ve çıkış metinleriyle birlikte kullanım geçmişini gösterir.</li><br/>
        <li><strong>Kullanıcı</strong>, oturum açmış kullanıcının kullanıcı adını gösterir (sadece web).</li>
      </ul>
    </td>
  </tr>
</table>

<br/>

<a id="toolbar"></a>

### Araç Çubuğu

Araç çubuğu, uygulama içinde nerede olduğunuza bağlı olarak hafif değişiklikler gösterir.

- Sol tarafta, geçerli sayfanın adı görünür.
- Sağ tarafta ise **model seçici** ve **Arayüz dili** seçeneği yer alır.

**Model seçici**, geçerli görev için hangi yapay zekâ motorunun kullanılacağını seçmenizi sağlar.

  ![Model seçici](../images/screenshots/tr/model-selector.png)

Bazı ücretsiz modeller her zaman kullanılamayabilir; bunlar zaman zaman çevrimdışı olabilir ya da kullanım sınırına ulaşmış olabilir. Böyle bir durumda uygulama, o modeli kullanılabilir listeden otomatik olarak çıkarır. Gözüken modelleri kontrol etmek için [**Ayarlar** > **Modeller**](#models) bölümüne gidin ve model listenizi düzenleyin. 
Model ayarlarını, araç çubuğundaki model adının solundaki sağlayıcı simgesine tıklayarak da doğrudan açabilirsiniz.

<br/>

**Dünya simgesi + dil kodu** arayüz dilini (menüler, butonlar gibi) değiştirir. Bu seçenek, **Çevir** çalışma alanındaki çeviri dillerini **değiştirmez**.

  ![Arayüz dili seçici](../images/screenshots/tr/language-selector.png)

<br/>

<a id="input-and-output-panels"></a>
### Giriş ve çıkış paneli

Çoğu çalışma alanı, sol taraftaki **Giriş** paneli ve sağ taraftaki **Çıkış** panelini kullanır.

Her panel ayrıca şu bilgileri gösterir:

| **Giriş**                                                          | **Çıkış**                                                                                                                  |
|--------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------|
| - Karakter sayısı <br/>- Kelime sayısı <br/>- Paragraf sayısı   <br/> | - Görevin ne kadar sürdüğü<br/>- **TPS** (saniyede token sayısı)<br/>- Karakter, kelime ve paragraf sayısı<br/>- Kullanılan model |


Teknik terimler hakkında sorularınız olursa:

- **Token**, küçük bir metin parçasını ifade eder. Bir kelimenin parçası ya da kısa bir kelime olarak düşünebilirsiniz.
- **TPS**, modelin saniyede kaç metin parçası işlediğini belirtir.

<br/>

Her işlem maliyetini (mevcutsa) ve toplam maliyeti de [**Ayarlar** > **Genel Ayarlar**](#general-settings) bölümünde `Eylemlerde maliyet bilgisini göster` seçeneğini etkinleştirerek takip edebilirsiniz.
 
<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="translate"></a>
## Çevir

Metni bir dilden diğerine çevirmek istediğinizde **Çevir** özelliğini kullanın.

![Çevir çalışma alanı](../images/screenshots/tr/translate.png)

<br/>

<a id="translate-text"></a>
### Metin Çevirme

1. **Çevir** seçeneğini açın.
2. **Kaynak** dilini seçin.
3. **Hedef** dilini seçin.
4. Araç çubuğundan bir model seçin.
5. **Giriş** alanına metin yazın veya yapıştırın.
6. **Çevir** butonuna tıklayın.
7. Sonucu **Çıkış** alanında okuyun.
8. Sonucu kopyalamak istiyorsanız kopyalama butonunu kullanın.

<br/>

<a id="language-selection"></a>
### Dil Seçimi

- **Kaynak** ya belirli bir dil olabilir ya da **Dili Otomatik Algıla** seçeneği olabilir.
- **Hedef**, sonucun hangi dilde olmasını istediğinizi belirtir.

Seçili **Üst düzey dilleriniz** dil listesinin en üstünde görünür. Bunları [**Ayarlar** > **Diller**](#languages) bölümünde ayarlayabilirsiniz.

<br/>

<a id="helpful-translation-settings"></a>
### Yararlı çeviri ayarları

[**Ayarlar** > **Genel Ayarlar**](#general-settings) bölümünde çeviri davranışını değiştirebilirsiniz:

- **Yapıştırmada otomatik çevir**, metni yapıştırdığınız anda çeviri işlemini başlatır.
- **Sonucu panoya otomatik kopyala**, çevirinin başarılı olması sonrasında sonucu otomatik olarak kopyalar.
- **Gerçek zamanlı çeviri (yazarken)**, yazdığınız sırada çeviriler yapar.
- **Zaman aşımı (ms)**, gerçek zamanlı çevirinin başlamadan önce uygulamanın ne kadar süre bekleyeceğini belirler.
- **Enter**, `Enter` tuşuna basıldığında ne olacağını belirler:

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="rewrite"></a>
## Yeniden Yaz

Ana anlamını değiştirmeden metninizi daha iyi ifade etmek istiyorsanız **Yeniden Yaz** seçeneğini kullanın.

![Yeniden yaz çalışma alanı](../images/screenshots/tr/rewrite.png)

Bu özellik şu durumlarda kullanışlıdır:

- yazım ve dil bilgisi düzeltmeleri yapmak
- metni daha net hâle getirmek
- metni daha resmi veya daha gayriresmi hâle getirmek
- metni kısaltmak veya uzatmak
- metnin daha teknik durmasını sağlamak

<br/>

> 💡 **İPUCU**<br/>
> "**Yazım ve Dil Bilgisini Kontrol Et**" kipini kullandığınızda, çıkış panelinde bir `Değişiklikleri Göster` butonu görünür.
> Bu butona tıklayarak yapılan düzeltmelerin görüntülenmesini veya gizlenmesini, yani metninizde yapılan birebir değişiklikleri açıp kapatabilirsiniz.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="transform"></a>

## Dönüştür

Yapay zekanın özel bir komut setini takip etmesini istediğinizde **Dönüştür**'ü kullanın.

![Dönüştür çalışma alanı](../images/screenshots/tr/transform.png)

Bu, uygulamanın en esnek bölümüdür. Aşağıdaki gibi görevler için kullanabilirsiniz:

- notları özetleme
- ham metni düzgün bir e-postaya dönüştürme
- ana noktaları çıkarma
- metni belirli bir biçime dönüştürme
- girdi metniyle ilgili başka herhangi bir özel işlem

<br/>

<a id="run-an-existing-prompt"></a>
### Var olan bir komutu çalıştırma

1. **Dönüştür**'ü açın.
2. Komut listesinden bir komut seçin.
3. Bir **Hedef** dil kutusu görüntülenirse, isterseniz bir dil seçin.
4. **Girdi** alanına metin yazın veya yapıştırın.
5. **Dönüştür**'e tıklayın.
6. Sonucu **Çıktı** alanında okuyun.

<br/>

<a id="if-you-have-no-prompts-yet"></a>
### Henüz komutunuz yoksa

Komut listeniz boşsa, **Örnek komutları yükle**'ye tıklayın. Bu, hızlıca başlamanız için eklenmiş örnekleri ekler.

<br/>

> ℹ️ **NOT**<br/>
> Örnek komutlar İngilizce olarak sağlanır. Yüklendikten sonra bir komutu düzenleyebilir ve **Komutu çevir** seçeneğini kullanarak kendi dilinize çevirebilirsiniz.

<br/>

<a id="create-a-prompt-quickly"></a>
### Hızlıca komut oluşturun

Bir komut oluşturmanın en hızlı yolu şöyle:

1. **Yeni komut**'a tıklayın.
2. **Komut oluştur**'a tıklayın.
3. Komutun ne yapmasını istediğini açıklayın.
4. Bir model seçin.
5. Uygulamanın sizin için bir taslak oluşturmasına izin verin.
6. Taslağı gözden geçirin ve **Kaydet**'e tıklayın.

![Komut oluştur](../images/screenshots/tr/transform-generate.png)


<br/>

<a id="edit-a-prompt"></a>
### Bir komutu düzenleme

Bir komut oluşturduğunuzda ya da düzenlediğinizde, düzenleyici sol tarafta, test alanı ise sağ tarafta görünür.

![Dönüştür komut düzenleyici](../images/screenshots/tr/transform-prompt-edit.png)

Ana alanlar şunlardır:

- **Komut adı**: Komut listesinde görünen ad.
- **Komut talimatları (isteğe bağlı)**: Komut çalıştırılırken kullanıcıya gösterilen kısa bir ipucu.
- **Model Rolü**: Yapay zekaya atanmış genel rol, örneğin 'Yararlı bir asistan olarak davran.'
- **Model Talimatları (satırbaşına bir tane)**: Yapay zekanın takip etmesini istediğiniz özel kurallar.
- **Çıktı açıklaması**: Sonucu tanımlayan kısa bir kelime, örneğin 'özet' veya 'yeniden yazım'.
- **Sıcaklık (0.0 → 1.0)**: Modelin nasıl davranacağını belirler; aşağıya bakın.
- **Hedef dil iste**: Komut çalıştırıldığında hedef dil seçici ekler.

Teknik terim olan **Sıcaklık** size yeni geliyorsa şöyle düşünebilirsiniz:

- **Düşük** sıcaklık, daha sabit ve öngörülebilir sonuçlar verir.
- **Yüksek** sıcaklık, daha fazla çeşitlilik ve yaratıcılık sunar.

Şunları da kullanabilirsiniz:

- **`Komut oluştur`**: Basit bir açıklama ile yeni bir taslak oluşturun
- **`Komutu geliştir`**: Mevcut bir komutu iyileştirin
- **`Komutu çevir`**: Komut alanlarını çevirin

<br/>

> ⚠️ **UYARI**<br/>
> **`Geri Dön`**'e tıklamadan önce **`Kaydet`**'e tıklayın. Kaydetmeden geri dönerseniz değişiklikleriniz kaybolur.

<br/>

<a id="test-a-prompt-before-using-it"></a>
### Kullanmadan önce komutu test edin

Sağdaki test paneli, günlük işlerinizde kullanmadan önce komutunuzu örnek metinle denemenizi sağlar.

Bu şu durumlarda faydalıdır:

- yeni bir komut oluşturuyorsanız
- iki komut sürümünü karşılaştırıyorsanız
- üslubu, uzunluğu veya çıktı biçimini kontrol etmek istiyorsanız

<br/>

> ℹ️ **NOT**<br/>
> Kayıtlı komutları [**Ayarlar** > **Dönüştür Komutları**](#transform-prompts) bölümünden dışa aktarabilir ve içe aktarabilirsiniz.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="dashboard"></a>
## Gösterge Paneli

Uygulamayı ne kadar kullandığınızı ve maliyetinin ne kadar olduğunu görmek için (ücretli modeller için) **Gösterge Paneli**'ni kullanın.

![Gösterge paneli özet](../images/screenshots/tr/dashboard-summary.png)


<br/>

> ℹ️ **NOT**<br/>
> Sadece ücretsiz modeller kullanıyorsanız, maliyetle ilgili grafikler boş olacaktır.

<br/>

<a id="filter-the-data"></a>
### Verileri filtreleme

Zaman aralığını değiştirmek için üstteki filtre düğmelerini kullanın.

![Gösterge paneli filtreleri](../images/screenshots/tr/dashboard-filter.png)

<br/>

> ℹ️ **NOT**<br/>
> **Kullanıcı** filtresi yalnızca web sürümündeki yöneticiler için görünür. Normal kullanıcılar bu filtreyi göremez ve masaüstü uygulamasında da bu filtre yoktur.

<br/>

<a id="dashboard-tabs"></a>

### Panel sekmeleri

- **Özet**, kullanım ve maliyet genel bakışını verir.
- **Kullanıma Göre**, etkinliği tercüme dili, yeniden yazma kipi ve dönüşüm istemi bazında ayırır.
- **Model Bazında**, hangi modellerin kullanıldığını ve maliyetlerini gösterir.
- **Güne Göre**, günlük toplamları gösterir.
- **Tüm Çağrılar**, tam çağrı geçmişini görüntüler ve dışa aktarmanıza izin verir.

<br/>

<a id="export-data"></a>
### Veri dışa aktarma

Panel tabloları şu biçimlerde veri dışa aktarabilir:

- **JSON**
- **CSV**
- **XLSX**

Bu, etkinliği uygulamanın dışında incelemek veya bir raporu paylaşmak istiyorsanız yararlıdır.

<br/>

<a id="delete-stored-records-for-a-model"></a>
### Bir model için kayıtlı kayıtları silme

**Model Bazında** veya **Tüm Çağrılar** sekmesinde, "çöp kutusu" simgesine tıklayarak bir model için depolanmış kayıtları kaldırabilirsiniz.

> ⚠️ **UYARI**<br/>
> Silinen kayıtlar geri alınamaz. Tarihinize artık ihtiyacınız olmadığından emin olduğunuzda bu seçeneği kullanın.

Tüm verileri silmek veya kayıtları yaşlarına göre kaldırmak için [**Ayarlar** > **Maliyet Takibi**](#cost-tracking) bölümüne gidin. Burada tüm depolanmış verileri veya belirli bir tarihten önceki verileri silme seçeneklerini bulacaksınız.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="history"></a>
## Geçmiş

Her işlemdeki girdi ve çıktıyı içeren **Transrewrt** içindeki eylemlerinizin geçmişini görmek için **Geçmiş** seçeneğine tıklayın.

![Geçmiş sayfası](../images/screenshots/tr/history.png)

<br/>

<a id="filter-the-history"></a>
### Veriyi filtreleme

**Geçmiş**, **Panel** sayfasıyla aynı filtreleri kullanır. Zaman aralığını seçmek için bunları kullanın.

![Panel filtreleri](../images/screenshots/tr/dashboard-filter.png)

<br/>

> ℹ️ **BİLGİ**<br/>
> **Kullanıcı** filtresi sadece web sürümünde yöneticiler için görünür. Normal kullanıcılar bu filtreyi göremez ve masaüstü uygulamasında da mevcut değildir.

<br/>

<a id="export-history-data"></a>
### Geçmiş verisini dışa aktarma

Geçmiş sayfası filtrelenmiş veriyi şu biçimlerde dışa aktarabilir:

- **JSON**
- **CSV**
- **XLSX**

Bu, etkinliği uygulamanın dışında incelemek veya bir raporu paylaşmak istiyorsanız yararlıdır.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="settings"></a>
## Ayarlar

Uygulamanın nasıl davrandığını özelleştirmek için kenar çubuğundan **Ayarlar** sekmesini açın.

Mevcut sekmeler platformunuza ve rolünüze göre değişiklik gösterir:

  | Sekme               | Masaüstü | Web (yönetici) | Web (normal kullanıcı) |
  |-------------------|:-------:|:-----------:|:------------------:|
  | Genel Ayarlar  |   evet   |     evet     |        evet         |
  | Modeller            |   evet   |     evet     |        evet         |
  | Diller         |   evet   |     evet     |        evet         |
  | Maliyet Takibi     |   evet   |     evet     |         —          |
  | Dönüşüm İstekleri |   evet   |     evet     |        evet         |
  | Kullanıcılar             |    —    |     evet     |         —          |
  | API Yapılandırması |   evet   |     evet     |         —          |
  | Hakkında             |   evet   |     evet     |        evet         |

<br/>

> ℹ️ **BİLGİ**<br/>
> Web sürümünde, her kullanıcının kendi yapılandırması mevcuttur. Seçilen modeller, diller, genel seçenekler ve dönüşüm istemleri gibi ayarlar kullanıcı bazında saklanır. Siz yaptığınız değişiklikler diğer kullanıcıları etkilemez.

<br/>


[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="general-settings"></a>
### Genel ayarlar

**Genel Ayarlar**, yazma davranışını, yürütme ayrıntılarının **Geçmiş** için saklanıp saklanmayacağını ve görünümü kontrol etmek için kullanılır.

**Davranış**

- **ENTER tuşunun davranışı**, `Enter` tuşunun görevi çalıştırmasını mı yoksa yeni satır eklemesini mi seçmenizi sağlar.
- **Yapıştırmada otomatik çeviri**, metni yapıştırdığınız anda çeviriyi başlatır.
- **Sonucu panoya otomatik kopyala**, başarılı sonuçları otomatik olarak panoya kopyalar.
- **Gerçek zamanlı çeviri (yazarken)**, yazarken çeviri yapar.
- **Zaman aşımı (ms)**, gerçek zamanlı çeviri için bekleme süresini ayarlar.

**Geçmiş**

- **Yürütme geçmişini hatırla** seçeneği, her çeviri, yeniden yazma ve dönüşüm işlemi için **girdi ve çıktı metninin**, kenar çubuğundaki [**Geçmiş**](#history) görünümünde saklanıp saklanmayacağını belirler. Devre dışı bırakıldığında onay sorar; onay verirseniz, daha önce kaydedilmiş geçmiş metni veritabanından kaldırılır.
- **Geçmiş verilerini sil**, depolanmış metinleri yaşına göre silmenize olanak tanır (örneğin birkaç aydan eski olan veya **tüm verileri (temizle)**) **Veri sil** seçeneğiyle. Bu yalnızca **Geçmiş** görünümü için kaydedilen yürütme metnini etkiler; **maliyet** veya kullanım toplamlarını **silmekle ilgili değildir**. **Maliyet** verilerini kaldırmak veya kısaltmak için [**Ayarlar** > **Maliyet Takibi**](#cost-tracking) kullanın.

**Görünüm**

- **Eylemlerde maliyet bilgilerini göster**, işlemin maliyetini (mevcutsa) ve Toplama, Yeniden Yazma ve Dönüşüm çıkış panellerindeki toplam maliyeti görüntülemeyi kontrol eder.
- **Maliyet ondalık basamak sayısı**, maliyet ondalıklarının nasıl gösterileceğini değiştirir.
- **Sadece web için:** **Uygulama etrafında kenar boşluğu göster**, arayüzün etrafına ekstra boşluk ekler.
- **Yazı Tipi Ailesi**, metin panellerindeki yazı tipini değiştirir.
- **Boyut**, yazı tipi boyutunu değiştirir.


<br/>

<a id="models"></a>

### Modeller

Araç çubuğunda hangi modellerin görüneceğini seçmek için **Ayarlar** > **Modeller** bölümünü kullanın.

![Ayarlar Modeller sekmesi](../images/screenshots/tr/settings-models.png)

Sayfada iki liste bulunur:

- Sol taraftaki **Kullanılabilir Modeller**
- Sağ taraftaki **Seçilen Modeller**

Kullanışlı kontroller şunları içerir:

- Adına göre model bulmak için **Modelleri ara...**
- Listeyi tek bir altyapıya (OpenRouter, OpenAI, Ollama, vb.) indirmek için **Sağlayıcı** etiketleri
- Sadece ücretsiz modelleri göstermek için **Sadece Ücretsiz**
- Listeyi yeniden yüklemek için **Yenile**
- Sağlayıcıya göre sıralarken **Tümünü Genişlet** ve **Tümünü Daralt**

Model kimlikleri sağlayıcının ön ekini içerir (örneğin `openrouter/…` ve `openai/…`). **OpenAI (OpenRouter)** veya **OpenAI (doğrudan)** gibi rozetler, trafiğin nasıl yönlendirildiğini gösterir.

> ℹ️ **NOT**<br/>
> **OpenRouter Body Builder** (`openrouter/bodybuilder`) genel bir sohbet modeli değil, yönlendirme modelidir: dönüş değeri, OpenRouter API isteklerini tanımlayan JSON'dur (örneğin `model` ve `messages` içeren bir `requests` dizisi). Bunu **Çevir**, **Yeniden Yaz** veya **Dönüştür** işlemlerinde kullanırsanız, çıktı paneli tamamlanmış metin yerine bu JSON'u gösterecektir. Bu tür görevler için normal bir metin modeli seçin. [Body Builder model sayfasını](https://openrouter.ai/openrouter/bodybuilder) OpenRouter'da inceleyin.

Eylemler:

 - Bir model eklemek için **Ekle** öğesine veya mevcut girişin herhangi bir yerine tıklayın.

 - Bir modeli kaldırmak için **Seçilen Modeller** listesinde sağdaki **X** işaretine tıklayın veya Kullanılabilir Modellerdeki girişte **Seçilen** butonuna tıklayın.

 - Listeyi temizlemek için **Tümünü Seçsiz Yap**'a tıklayın. Gerekli olan ücretsiz model listede kalır.

<br/>

> ℹ️ **NOT**<br/>
> OpenRouter'a hemen kredi eklemek istemiyorsanız, önce **Sadece Ücretsiz** seçeneğini etkinleştirin ve ücretsiz modelleri seçin (kredi kartı gerekmez). Ayrıca istemeden API anahtarı kullanmadan modelleri yerel olarak çalıştırmak için Ollama'yı da kullanabilirsiniz.

<br/>

<a id="languages"></a>
### Diller

Uygulamada kullanılan dil listelerini düzenlemek için **Ayarlar** > **Diller** bölümünü kullanın.

- **Üst sırada yer alan diller**, **Çevir** ve **Dönüştür** işlemlerinde dil listelerinin en üst kısmında sabitlenir.
- **Özel dil**, yerleşik listede olmayan bir dil eklemenizi sağlar.

Bir özel dil eklerseniz, yerleşik seçeneklerin yanında dil seçim kutularında görünür.

<br/>

<a id="cost-tracking"></a>
### Maliyet İzleme

Maliyet bilgilerini yönetmek için **Ayarlar** > **Maliyet İzleme** bölümünü kullanın.

- **Toplam Maliyet**, biriken toplamı gösterir.
- **Değeri Kopyala**, toplam değeri panoya kopyalar.
- **Maliyeti Sıfırla**, kayıtlı toplamı sıfırlar.
- **API anahtarı kullanımıyla eşitle**, toplamı OpenRouter hesabınızda bildirilen kullanım değeriyle eşler (sadece OpenRouter için).
- **API Anahtarı Kullanımı**, varsa OpenRouter kullanım ayrıntılarını gösterir.
- **Maliyet verilerini sil**, tüm verileri veya yalnızca belirli bir tarihten önceki kayıtları kaldırır.

**Maliyet izleme:** OpenRouter modellerini kullandığınızda uygulama, OpenRouter'dan alınan maliyet bilgilerine göre gerçek kullanımınızı ve harcamalarınızı gösterir. Diğer sağlayıcılar için, uygulama OpenRouter tarafından yayımlanan fiyat bilgilerini kullanarak tahmini maliyet hesaplar. Eğer fiyat bilgisi yoksa, tahmini maliyet sıfır olabilir.

<br/>

> ℹ️ **NOT**<br/>
> **Tüm maliyet tutarları yalnızca referans amaçlıdır, resmi fatura değildir.**

<br/>

> ⚠️ **UYARI**<br/>
> Veri silme işlemi geri alınamaz. Silmeden önce lütfen verilerinizi yedekleyin veya [**Geçmiş**](#history) veya [**Pano** > **Tüm Çağrılar**](#dashboard-tabs) üzerinden dışa aktarın; aksi takdirde veriler kalıcı olarak kaybedilecektir. Her API çağrısıyla ilgili tüm giriş/çıkış geçmişi de silinecektir.

<br/>

<a id="transform-prompts"></a>
### Dönüştürme İstemleri

İstemleri toplu olarak yönetmek için **Ayarlar** > **Dönüştürme İstemleri** bölümünü kullanın.

Şunları yapabilirsiniz:

- kaydettiğiniz istemleri gözden geçirin
- istemleri silin
- bir dosyadan istemleri aktarın
- yedekleme veya paylaşım için istemleri dışa aktarın

<br/>

<a id="users"></a>
### Kullanıcılar

Web sürümünde kullanıcı hesaplarını yönetmek için **Kullanıcılar** bölümünü kullanın. Kullanıcı ekleyebilir, bilgilerini güncelleyebilir, şifreleri sıfırlayabilir ve hesapları silebilirsiniz.

<br/>

<a id="api-config"></a>
### API Yapılandırması

Desteklenen sağlayıcılar şunlardır: OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras ve **Ollama** (temel URL üzerinden yerel modeller). Yalnızca kullandığınız sağlayıcıları yapılandırmanız gerekir.

**Web uygulaması: yalnızca yönetici**

API anahtarları sistem veya Docker ortam değişkenleri aracılığıyla yapılandırılır — web arayüzünde girilmez. Bu sayfa hangi sağlayıcıların anahtarla yapılandırıldığını gösterir ve her birini **`Test`** düğmesine tıklayarak test etmenizi sağlar.

<br/>

> ℹ️ **NOT**<br/>
> Bir API anahtarını değiştirmek için, sisteminizdeki ya da Docker yapılandırmanızdaki ortam değişkenini güncelleyin ve sunucuyu veya konteyneri yeniden başlatın.

<br/>

**Masaüstü uygulaması**

Kullandığınız her sağlayıcı için API anahtarlarını saklamak amacıyla **API Yapılandırması** bölümünü kullanın. Ollama için bir API anahtarı yerine **temel URL** girin.

<br/>

> 💡 **İpucu** <br/>
> API anahtarı kullanmak veya kullanım ücreti ödemek istemiyorsanız, [Ollama'yı indirerek](https://ollama.com) makinelerinizde (örneğin `translategemma:4b` gibi) modelleri ücretsiz olarak yerel olarak çalıştırabilirsiniz. Alternatif olarak, kredi kartı gerektirmeyen ücretsiz bir OpenRouter hesabı oluşturabilir, ücretsiz modellerini kullanabilirsiniz veya Cerebras, Google, Groq veya Mistral AI'den ücretsiz API anahtarı alabilirsiniz.

<br/>

- Yalnızca ihtiyacınız olan sağlayıcıları ekleyin. **Ayarlar** > **Modeller** bölümünde her model kimliği sağlayıcıyla başlar (örneğin `openrouter/openrouter/free`, `openai/gpt-4o`, `ollama/llama3`).

Bir API anahtarı eklemek için metin alanına değeri girin ve **`Kaydet`**'e tıklayın. Mevcut bir anahtarı değiştirmek için **`Düzenle`**'ye tıklayın. Bir anahtarın doğru çalıştığını doğrulamak için **`Test`** butonuna tıklayın. Ollama temel URL'si için bağlantıyı kontrol etmek amacıyla her zaman **`Test`** butonuna tıklayın.

<br/>

> ℹ️ **NOT**<br/>
> Mevcut bir API anahtarının değerini göremezsiniz. Sadece **`Düzenle`** düğmesini kullanarak değiştirebilirsiniz.
> API anahtarları yapılandırmada şifrelenmiş şekilde saklanır.

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
## Sık Karşılaşılan Sorunlar

Bir şeyler beklediğiniz gibi çalışmıyorsa, lütfen öncelikle aşağıdaki noktaları kontrol edin.

<br/>

<a id="the-app-will-not-translate-rewrite-or-transform-text"></a>
### Uygulama metni çevirmiyor, yeniden yazmıyor ya da dönüştürmüyor

Lütfen aşağıdakileri kontrol edin:

- araç çubuğundan bir model seçtiğinizden emin olun
- en az bir modelin [**Ayarlar** > **Modeller**](#models) bölümünde listelendiğinden emin olun
- API ayarınızın düzgün çalıştığından emin olun

Masaüstü uygulamasını kullanıyorsanız:

1. [**Ayarlar** > **API Yapılandırması**](#api-config) bölümünü açın.
2. En az bir API anahtarının kaydedildiğinden emin olun.
3. Anahtarın çalıştığını doğrulamak için sağlayıcının yanındaki **Test** butonuna tıklayın.

<br/>

<a id="the-model-list-is-empty"></a>
### Model listesi boş

[**Ayarlar** > **Modeller**](#models) bölümüne gidin ve **Yenile**'ye tıklayın.

Gerekirse:

- bir model arayın
- **Sadece Ücretsiz** seçeneğini etkinleştirin
- bir veya daha fazla modeli **Seçili Modeller** kısmına ekleyin

<br/>

<a id="the-result-is-too-slow-or-too-expensive"></a>
### Sonuç çok yavaş veya çok maliyetli

Aşağıdakilerden bir veya daha fazlasını deneyin:

- farklı bir model seçin
- daha kısa bir girdi kullanın
- [**Ayarlar** > **Genel Ayarlar**](#general-settings) bölümünde **Gerçek zamanlı çeviri (yazarken)** seçeneğini devre dışı bırakın
- basit görevler için ücretsiz modeller kullanın (bkz. [Modeller](#models))

<br/>

<a id="the-interface-is-in-the-wrong-language"></a>
### Arayüz yanlış dilde

[İşlev çubuğundaki](#toolbar) (toolbar) dünya simgesine tıklayıp tercih ettiğiniz **Arayüz Dili**'ni seçin.

<br/>

<a id="the-text-is-too-small-or-hard-to-read"></a>
### Metin çok küçük veya okunması zor

[**Ayarlar** > **Genel Ayarlar**](#general-settings) bölümünü açın ve aşağıdakileri değiştirin:

- **Yazı Tipi Ailesi**
- **Boyut**

<br/>

<a id="dashboard-charts-are-empty"></a>
### Pano grafikleri boş

İşte bu normaldir eğer:

- sadece **ücretsiz modeller** kullanıyorsanız (maliyet grafikleri boş kalır)
- seçili **zaman filtresi** çağrıların yapıldığı süreyi kapsamıyorsa — kontrol etmek için **Tümü** seçeneğini deneyin

**Tümü** seçildiğinde grafikler hâlâ boşsa, çağrıların [**Geçmiş**](#history) bölümünde veya **Tüm Çağrılar** sekmesinde görünür olup olmadığını doğrulayın.

<br/>

<a id="cost-shows-not-available-or-seems-wrong"></a>
### Maliyet "kullanılamıyor" olarak gösteriliyor veya hatalı görünüyor

**OpenRouter** aracılığıyla modeller kullandığınızda, uygulama size OpenRouter'ın bildirdiği gerçek harcamanızı gösterir.

**Diğer sağlayıcılar** (OpenAI doğrudan, Anthropic doğrudan, vb.) için maliyet, OpenRouter tarafından yayımlanan fiyat verilerine dayanılarak tahmini olarak hesaplanır. Bir model için eşleşen bir fiyat bulunamazsa maliyet **kullanılamıyor** olarak görüntülenir ve toplamınıza eklenmez.

<br/>

<a id="total-cost-does-not-match-my-provider-bill"></a>
### Toplam maliyet sağlayıcı faturamla uyuşmuyor

Uygulamadaki tüm maliyet rakamları resmi faturalar değil, yalnızca başvuru amaçlı **tahmindir**.

Toplamınızı gerçek OpenRouter harcamanıza daha yakın hâle getirmek için, [**Ayarlar** > **Maliyet Takibi**](#cost-tracking) bölümüne gidin ve **API anahtarı kullanımıyla senkronize et** seçeneğine tıklayın.

<br/>

<a id="the-history-page-is-missing-from-the-sidebar"></a>
### Geçmiş sayfası yan çubuktan kaybolmuş

**Çalıştırma geçmişini koru** seçeneği kapalı olabilir. [**Ayarlar** > **Genel Ayarlar**](#general-settings) bölümüne gidin ve bunu etkinleştirin. Açmak önceden silinmiş geçmiş verilerini geri getirmez.

<br/>

<a id="web-app-session-expired"></a>
### Web uygulaması: beklenmedik şekilde giriş sayfasına yönlendirildi

Oturumunuz zaman aşımına uğramış olabilir. Yeniden oturum açın. Sık sık oluyorsa, sunucu yapılandırmasında oturum süresi ayarlarını kontrol edin.

<br/>

<a id="dashboard-shows-no-data-for-other-users></a>
### Pano diğer kullanıcılar için veri göstermiyor (web)

Sadece **yöneticiler**, **Kullanıcı** filtresi aracılığıyla tüm kullanıcıların verilerini görüntüleyebilir. Normal kullanıcılar tasarım gereği yalnızca kendi aktivitelerini görürler.

<br/>

<a id="i-changed-a-prompt-and-lost-the-edits"></a>
### Bir istemi değiştirdim ve yaptığım düzenlemeleri kaybettim

Bir istemi düzenlerken **Geri dön** butonuna tıklamadan önce her zaman **Kaydet**'e tıklayın.

<br/><br/>

<a id="quick-tips"></a>
## Hızlı İpuçları

- [**Çevir**](#translate) ile başlayarak kurulumunuzun düzgün çalıştığından emin olun, daha sonra [**Yeniden Yaz**](#rewrite) veya [**Dönüştür**](#transform) işlevlerine geçin.
- Günlük dil iyileştirmeleri için [**Yeniden Yaz**](#rewrite) işlevini kullanın.
- Belirli bir görev için tekrarlanabilir bir iş akışı gerekiyorsa [**Dönüştür**](#transform) işlevini kullanın.
- Kullanımı ve maliyeti takip etmek istiyorsanız [**Pano**](#dashboard) sekmesini kullanın.
- Geçmiş işlemleri ve tam giriş/çıkış metinlerini incelemek için [**Geçmiş**](#history) sekmesini kullanın.
- Düzenli olarak istekleri dışa aktarın şu iki nedenden dolayı: (a) korumak istediğiniz bir istem kütüphanesi oluşturuyorsanız veya (b) bunu başkalarıyla paylaşmak istiyorsanız (bkz. [Dönüştürme İstekleri](#transform-prompts)).

<br/><br/>

<a id="disclaimer"></a>

## Uyarı

Ürün isimleri ve simgeleri ilgili sahiplerine aittir ve sadece tanımlama amaçlı kullanılır. Bu yazılım, bahsedilen markalarla hiçbir şekilde bağlantılı değildir ya da onlar tarafından onaylanmamıştır.

<br/><br/>

<a id="license"></a>
## Lisans

Telif Hakkı © 2026 Waldemar Scudeller Jr.

[Apache Lisans 2.0](LICENSE)