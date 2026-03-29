---
translated_at: "2026-03-28T23:08:40.125Z"
source_hash: "8a4de9e99d68da9a3c641f91e2ae19c21861832981859dbe8cc904fc8ca702ed"
source_mtime: "2026-03-28T22:43:41.258Z"
model: "qwen/qwen3-235b-a22b-2507"
---
![Transrewrt afişi](../images/transrewrt_banner.png)


<a id="transrewrt-user-guide"></a>

# Kullanıcı Kılavuzu

<br/>

<a id="introduction"></a>

## Giriş

Transrewrt, metinlerle çalışmanıza üç ana yolla yardımcı olur:

- **Çevir** - Metni bir dilden başka bir dile dönüştür.
- **Yeniden Yaz** - Metni daha açık, daha kısa veya daha resmi gibi farklı bir şekilde yeniden ifade et.
- **Dönüştür** - "Prompt" adı verilen özel yapay zeka talimatlarını kullanarak metni işle.

<br/>

Bu kılavuz, uygulama yüklendikten ve çalıştıktan sonra nasıl kullanılacağını açıklar. Kurulum adımları için ana **[README](README.tr.md)** dosyasına bakın.

<br/>

> ℹ️ **NOT**<br/>
> Transrewrt, Windows ve Linux için masaüstü uygulaması olarak ve kendi kendine barındırılabilen bir web uygulaması olarak mevcuttur. Bu kılavuz, uygulamanın günlük kullanımına odaklanmıştır. Bir özellik yalnızca belirli bir sürüm için geçerliyse, açık bir şekilde belirtilir.

<small>Dil seçeneği: </small>

<small id="lang-list"> [English (UK)](../USER-GUIDE.md) · [Português (BR)](USER-GUIDE.pt-BR.md) · [العربية](USER-GUIDE.ar.md) · [বাংলা](USER-GUIDE.bn.md) · [Català](USER-GUIDE.ca.md) · [简体中文](USER-GUIDE.zh-CN.md) · [繁體中文](USER-GUIDE.zh-TW.md) · [Hrvatski](USER-GUIDE.hr.md) · [Čeština](USER-GUIDE.cs.md) · [Nederlands](USER-GUIDE.nl.md) · [English (US)](USER-GUIDE.en-US.md) · [Filipino](USER-GUIDE.tl.md) · [Français](USER-GUIDE.fr.md) · [Deutsch](USER-GUIDE.de.md) · [Ελληνικά](USER-GUIDE.el.md) · [हिन्दी](USER-GUIDE.hi.md) · [Magyar](USER-GUIDE.hu.md) · [Italiano](USER-GUIDE.it.md) · [日本語](USER-GUIDE.ja.md) · [Basa Jawa](USER-GUIDE.jv.md) · [한국어](USER-GUIDE.ko.md) · [Bahasa Melayu](USER-GUIDE.ms.md) · [فارسی](USER-GUIDE.fa.md) · [Polski](USER-GUIDE.pl.md) · [Português (PT)](USER-GUIDE.pt.md) · [ਪੰਜਾਬੀ](USER-GUIDE.pa.md) · [Română](USER-GUIDE.ro.md) · [Русский](USER-GUIDE.ru.md) · [Slovenčina](USER-GUIDE.sk.md) · [Español](USER-GUIDE.es.md) · [Kiswahili](USER-GUIDE.sw.md) · [Svenska](USER-GUIDE.sv.md) · [తెలుగు](USER-GUIDE.te.md) · [ภาษาไทย](USER-GUIDE.th.md) · [Türkçe](USER-GUIDE.tr.md) · [Українська](USER-GUIDE.uk.md) · [Tiếng Việt](USER-GUIDE.vi.md)</small>

<small>

> **Kullanıcı arayüzü ve belgelerin çevirisiyle ilgili not:** İngilizce (UK) orijinal dili hariç tüm arayüz dilleri, 
> yapay zekâ modelleri kullanılarak çevrilmiştir; ifade tarzı belirsiz olabilir veya hatalar içerebilir.

</small>

<br/>


<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**İçindekiler** 

- [Başlamadan önce](#before-you-start)
  - [Ücretsiz OpenRouter API anahtarı nasıl alınır (masaüstü uygulaması)](#how-to-get-a-free-openrouter-api-key-desktop-app)
- [Başlarken](#getting-started)
- [Pencerenin ana bölümleri](#main-parts-of-the-window)
  - [Kenar çubuğu](#sidebar)
  - [Araç çubuğu](#toolbar)
  - [Giriş ve çıkış panelleri](#input-and-output-panels)
- [Çevir](#translate)
  - [Metin çevir](#translate-text)
  - [Dil seçimi](#language-selection)
  - [Yararlı çeviri ayarları](#helpful-translation-settings)
- [Yeniden yaz](#rewrite)
- [Dönüştür](#transform)

- [Varolan bir istemi çalıştırın](#run-an-existing-prompt)
  - [Henüz bir isteminiz yoksa](#if-you-have-no-prompts-yet)
  - [Hızlıca bir istem oluşturun](#create-a-prompt-quickly)
  - [Bir istemi düzenleyin](#edit-a-prompt)
  - [Kullanmadan önce bir istemi test edin](#test-a-prompt-before-using-it)
- [Gösterge Paneli](#dashboard)
  - [Verileri filtreleyin](#filter-the-data)
  - [Gösterge paneli sekmeleri](#dashboard-tabs)
  - [Verileri dışa aktarın](#export-data)
  - [Bir model için kayıtları silin](#delete-stored-records-for-a-model)
- [Geçmiş](#history)
  - [Verileri filtreleyin](#filter-the-data-1)
  - [Geçmiş verilerini dışa aktarın](#export-history-data)
- [Ayarlar](#settings)
  - [Genel ayarlar](#general-settings)
  - [Modeller](#models)
  - [Diller](#languages)
  - [Maliyet takibi](#cost-tracking)
  - [İstemleri dönüştürün](#transform-prompts)
  - [Kullanıcılar](#users)
  - [API yapılandırması](#api-config)
  - [Hakkında](#about)
- [Sık karşılaşılan sorunlar](#common-issues)

- [Uygulama metni çevirmeyecek, yeniden yazmayacak veya dönüştürmeyecektir](#the-app-will-not-translate-rewrite-or-transform-text)
  - [Model listesi boş](#the-model-list-is-empty)
  - [Sonuç çok yavaş veya çok maliyetli](#the-result-is-too-slow-or-too-expensive)
  - [Arayüz yanlış dilde](#the-interface-is-in-the-wrong-language)
  - [Metin çok küçük veya okunması zor](#the-text-is-too-small-or-hard-to-read)
  - [Kontrol paneli grafikleri boş](#dashboard-charts-are-empty)
  - [Maliyet "mevcut değil" görünüyor veya hatalı görünüyor](#cost-shows-not-available-or-seems-wrong)
  - [Toplam maliyet sağlayıcının faturasıyla eşleşmiyor](#total-cost-does-not-match-my-provider-bill)
  - [Geçmiş sayfası kenar çubuğunda eksik](#the-history-page-is-missing-from-the-sidebar)
  - [Web uygulaması: oturum açma sayfasına beklenmedik şekilde yönlendiriliyor](#web-app-redirected-to-the-login-page-unexpectedly)
  - [Web yöneticisi: Şifre unutuldu veya kaybedildi](#web-admin-forgot-or-lost-a-password)

- [Kontrol paneli diğer kullanıcılar için veri göstermiyor (web)](#dashboard-shows-no-data-for-other-users-web)
  - [Bir istemi değiştirdim ve düzenlemeleri kaybettim](#i-changed-a-prompt-and-lost-the-edits)
- [Hızlı ipuçları](#quick-tips)
- [Sorumluluk reddi](#disclaimer)
- [Lisans](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="before-you-start"></a>

## Başlamadan önce

Transrewrt'yi kullanmak için en az bir yapay zeka sağlayıcısına erişim sahibi olmanız gerekir. Desteklenen sağlayıcılar şunlardır: [OpenRouter](https://openrouter.ai) (pek çok modeli toplar), OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras ve yerel modeller için [Ollama](https://ollama.com).

Başlarken ücretli bir model seçmeniz gerekmez. OpenRouter API anahtarınızı eklediğiniz anda uygulama yerleşik bir **ücretsiz** OpenRouter seçeneğini otomatik olarak etkinleştirir. Bu sayede hemen çeviri yapmaya, metinleri yeniden yazmaya ve dönüştürmeye başlayabilirsiniz. Alternatif olarak, Cerebras, Google, Groq veya Mistral AI'dan ücretsiz bir API anahtarı da alabilirsiniz.

Daha sade bir dille:

- Bir **model**, işi yapan yapay zeka motorudur. Modeller, bir **sağlayıcı önekiyle** birlikte listelenir (örneğin `openrouter/…`, `openai/…`, `ollama/…`).
- Bir **API anahtarı** (veya Ollama için bir **temel URL**), uygulamanın o sağlayıcıya ulaşma yoludur.

Eğer **masaüstü uygulamasını** kullanıyorsanız, kullandığınız her sağlayıcı için [**Ayarlar** > **API Yapılandırması**](#api-config) kısmına anahtarlar ekleyin. Sadece OpenRouter kullanıyorsanız aşağıya bakın: [Bir API anahtarı nasıl alınır](#how-to-get-an-api-key-desktop-app) (masaüstü uygulaması). Eğer bir API anahtarı kullanmak istemiyorsanız, [ollama.com](https://ollama.com) adresinden Ollama'yı yükleyebilir ve bunun yerine yerel modeller kullanabilirsiniz, örneğin `translategemma:4b`.

Eğer **web sürümünü** kullanıyorsanız, sunucu sahibi sağlayıcıları ortam değişkenleriyle yapılandırır, bu yüzden API anahtarlarını uygulamaya doğrudan giremezsiniz.

<br/>

<a id="how-to-get-an-api-key-desktop-app"></a>

### Ücretsiz OpenRouter API anahtarı nasıl alınır (masaüstü uygulaması)

Masaüstü uygulamasını kullanıyorsanız aşağıdaki adımları izleyin:

1. Web tarayıcınızda [OpenRouter](https://openrouter.ai) adresine gidin.
2. Bir hesap oluşturun veya oturum açın.
3. [Keys](https://openrouter.ai/keys) sayfasını açın.
4. Yeni bir API anahtarı oluşturmak için butona tıklayın.
5. Anahtarı daha sonra tanıyabilmeniz için bir ad verin.
6. Yeni API anahtarını kopyalayın.
7. Transrewrt'ye geri dönün ve **Settings** > **API Config** sayfasını açın.
8. Anahtarı **OpenRouter API key** kısmına yapıştırın (**Settings** > **API Config** bölümünde).
9. Anahtarın çalıştığını doğrulamak için **Test OpenRouter key** butonuna tıklayın.

<br/><br/>

<a id="getting-started"></a>

## Başlarken

Transrewrt'ı ilk kez kullanıyorsanız, aşağıdaki sırayı izleyin:

1. Uygulamayı açın.
2. Gerekirse dünya simgesinden **Arayüz dilini** seçin.
3. **Masaüstü uygulamasını** kullanıyorsanız, [**Ayarlar** > **API Yapılandırması**](#api-config)'na gidin, en az bir sağlayıcı için (örneğin OpenRouter) bir API anahtarı ekleyin ve çalıştığını onaylamak için **Test**'e tıklayın.
4. [**Ayarlar** > **Modeller**](#modeller)'e gidin ve **Seçili Modeller** listesine bir veya daha fazla model ekleyin.
5. En sık kullandığınız dillerin en üstte görünmesini istiyorsanız, [**Ayarlar** > **Diller**](#diller)'e gidin ve **En çok kullandığınız dilleri** seçin.
6. **Çeviri** bölümüne gidin ve her şeyin düzgün çalıştığını onaylamak için basit bir çeviri çalıştırın.
7. Bunun çalıştığını gördüktan sonra, sırasıyla **Yeniden Yaz** ve ardından **Dönüştür** özelliklerini deneyin.

Bu sıranın önemli olduğunu unutmayın. Bu, uygulamanın henüz çalışan bir API bağlantısı veya seçili modeli olmadan bir görev çalıştırmayı denemek gibi çok karşılaşılan ilk kullanım sorunlarını önler.

<br/><br/>

<a id="main-parts-of-the-window"></a>

## Pencerenin ana bölümleri

Uygulama üç ana alana ayrılmıştır:

- Soldaki **kenar çubuğu**.
- Üstteki **araç çubuğu**.
- Ortadaki **çalışma alanı**.

<br/>

<a id="sidebar"></a>

### Yan Panel

Uygulama içinde dolaşmak için yan paneli kullanın. Uygulama logosunun yanındaki simgeye tıklayarak daha fazla alan elde etmek için yan paneli daraltabilirsiniz.

<br/>

<table>
  <tr>
    <td valign="top">
       <img src="../images/screenshots/tr/sidebar.png" alt="Uygulama Yan Paneli" style="max-width: 100%; border: 1px solid #ddd; border-radius: 4px;">
    </td>
    <td valign="top">
      <br/><br/>
      <ul>
        <li><strong>Çevir</strong>, çeviri çalışma alanını açar.</li><br/>
        <li><strong>Yeniden Yaz</strong>, yeniden yazma çalışma alanını açar.</li><br/>
        <li><strong>Dönüştür</strong>, özel istem çalışma alanını açar.</li><br/>
        <li><strong>Panel</strong>, kullanım ve maliyet bilgilerini gösterir.</li><br/>
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

Araç çubuğu, uygulama içinde nerede olduğunuza bağlı olarak hafifçe değişiklik gösterir.

- Solda, geçerli sayfanın adı gösterilir.
- Sağda ise **model seçici** ve **Arayüz dili** denetimi yer alır.

**Model seçici**, geçerli görev için hangi yapay zeka motorunun kullanılacağını seçmenizi sağlar.

  ![Model seçici](../images/screenshots/tr/model-selector.png)

Bazı ücretsiz modeller her zaman kullanılamayabilir — bazen çevrimdışı olabilirler ya da kullanım limitleri olabilir. Böyle bir durum oluşursa, uygulama bu modeli otomatik olarak kullanılabilir listeden kaldırır. Hangi modellerin görüneceğini kontrol etmek için [**Ayarlar** > **Modeller**](#models) bölümüne gidin ve model listenizi düzenleyin. 
Ayrıca, araç çubuğunda model adının solundaki sağlayıcı simgesine tıklayarak model ayarlarını doğrudan da açabilirsiniz.

<br/>

**Dünya simgesi + dil kodu**, menüler ve düğmeler gibi uygulama arayüzü dilini değiştirir. Bu, **Çeviri** sekmesinde kullanılan çeviri dillerini **değiştirmez**.

![Arabirim dil seçici](../images/screenshots/tr/language-selector.png)

<br/>

<a id="input-and-output-panels"></a>

### Giriş ve çıkış paneli

Çoğu çalışma alanı sol tarafta bir **Giriş** paneli ve sağ tarafta bir **Çıkış** paneli kullanır.

Her panel ayrıca aşağıdakileri gösterir:

| **Giriş**                                                          | **Çıkış**                                                                                                                  |
|--------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------|
| - Karakter sayısı <br/>- Sözcük sayısı <br/>- Paragraf sayısı   <br/> | - Görevin ne kadar sürdüğü<br/>- **TPS** (saniyedeki token sayısı)<br/>- Karakter, sözcük ve paragraf sayısı<br/>- Kullanılan model |


Teknik terimlerle ilgili merakınız olursa:

- **Token**, metnin küçük bir parçası anlamına gelir. Bunu bir kelimenin parçası ya da kısa bir kelime olarak düşünebilirsiniz.
- **TPS**, modelin saniyede kaç tane bu metin parçasını işlediğini ifade eder.

<br/>

Her işlem maliyetini (eğer mevcutsa) ve toplam maliyeti [**Ayarlar** > **Genel ayarlar**](#general-settings) bölümünde `Eylemlerde maliyet bilgilerini göster` seçeneğini etkinleştirerek izleyebilirsiniz.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="translate"></a>

## Çevir

Metni bir dilden diğerine çevirmek istediğinizde **Çevir**'i kullanın.

![Çevir çalışma alanı](../images/screenshots/tr/translate.png)

<br/>

<a id="translate-text"></a>

### Metin çevirisi

1. **Çeviri** seçeneğini açın.
2. **Kaynak** için bir dil seçin.
3. **Hedef** için bir dil seçin.
4. Araç çubuğundan bir model seçin.
5. Metni **Giriş** alanına yazın veya yapıştırın.
6. **Çevir** seçeneğine tıklayın.
7. Sonucu **Çıkış** alanında okuyun.
8. Sonucu kopyalamak istiyorsanız kopyalama düğmesini kullanın.

<br/>

<a id="language-selection"></a>

### Dil seçimi

- **Kaynak** belirli bir dil olabilir veya **Dili Algıla** seçeneği kullanılabilir.
- **Hedef**, sonucun istediğiniz dilidir.

Seçili **En İyi Dilleriniz** listede en üstte görünür. Bunları [**Ayarlar** > **Diller**](#languages) menüsünde ayarlayabilirsiniz.

<br/>

<a id="helpful-translation-settings"></a>

### Yardımcı çeviri ayarları

[**Ayarlar** > **Genel Ayarlar**](#general-settings) bölümünde çeviri davranışını değiştirebilirsiniz:

- **Yapıştırmada otomatik çeviri**, metni yapıştırdığınız anda bir çeviri işlemi başlatır.
- **Sonucu panoya otomatik kopyala**, başarılı bir çeviri işleminden sonra sonucu otomatik olarak kopyalar.
- **Gerçek zamanlı çeviri (yazarken)**, yazarken çeviri işlemini otomatik olarak çalıştırır.
- **Zaman aşımı (ms)**, uygulamanın gerçek zamanlı çeviri yapmadan önce ne kadar bekleyeceğini belirler.
- **Enter**, `Enter` tuşuna bastığınızda ne olacağını belirler:

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="rewrite"></a>

## Yeniden Yaz

Ana anlamı değiştirmeden ifadeyi iyileştirmek istediğinizde **Yeniden Yaz** seçeneğini kullanın.

![Yeniden yazma çalışma alanı](../images/screenshots/tr/rewrite.png)

Bu seçenek şu durumlarda kullanışlıdır:

- yazım ve dilbilgisi hatalarını düzeltmek (**Yazımı ve Dilbilgisini Denetle**)
- metni daha açık hale getirmek (**Anlaşılırlığı İyileştir**)
- tek çalıştırmada çeşitli farklı biçimlendirmeler elde etmek (**Alternatif sürümler**)
- metni daha resmi veya daha gayriresmi hale getirmek (**Resmi** / **Gayriresmi**)
- metni kısaltmak veya uzatmak (**Kısalt** / **Uzat**)
- metne daha teknik bir hava kazandırmak (**Teknik Hale Getir**)

<br/>

> 💡 **İPUCU**<br/>
> "**Yazımı ve Dilbilgisini Denetle**" modunu kullandığınızda, çıkış panelinde (kopyala düğmesinin yanında) **Değişiklikleri Göster** anahtarı görünür.
> Metninizde uygulanan değişikliklerin görünür olup olmamasını bu anahtarı açıp kapatarak ayarlayabilirsiniz.


<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="transform"></a>

## Dönüştür

Yapay zekanın özel bir talimat setini uygulamasını istiyorsanız **Dönüştür** alanını kullanın.

![Dönüştür çalışma alanı](../images/screenshots/tr/transform.png)

Bu, uygulamanın en esnek bölümüdür. Şu tür görevler için kullanabilirsiniz:

- notları özetlemek
- ham metni düzenlenmiş bir e-postaya dönüştürmek
- temel noktaları çıkarmak
- metni belirli bir biçime dönüştürmek
- girdi metniyle ilgili başka her türlü özel işlem

<br/>

<a id="run-an-existing-prompt"></a>

### Mevcut bir istemi çalıştırın

1. **Dönüştür** seçeneğini açın.
2. İstem listesinden bir istem seçin.
3. Eğer bir **Hedef** dil kutusu görünürse, isterseniz bir dil seçin.
4. **Girdi** alanına metin yazın veya yapıştırın.
5. **Dönüştür**'e tıklayın.
6. Sonucu **Çıktı** alanında okuyun.

<br/>

<a id="if-you-have-no-prompts-yet"></a>

### Henüz hiçbir isteminiz yoksa

İstem listeniz boşsa, Dönüştür çalışma alanında **Örnek istemleri yükle** seçeneğine tıklayın. Aynı düğme her zaman dışa aktarma/ithalat satırında bulunan [**Ayarlar** > **Dönüştürme İstemleri**](#transform-prompts) bölümünde mevcuttur. Her ikisi de yerleşik örnekler ekler, böylece hızlı bir şekilde başlayabilirsiniz.

<br/>

> ℹ️ **NOT**<br/>
> Örnek istemler İngilizce olarak sunulur. Yüklendikten sonra bir istemi düzenleyebilir ve **İstemi çevir** seçeneğini kullanarak kendi dilinize çevirebilirsiniz.

<br/>

<a id="create-a-prompt-quickly"></a>

### Hızlıca bir istemi oluşturun

Bir istemi hızlıca oluşturmanın en kolay yolu:

1. **Yeni istem** öğesini tıklayın.
2. **İstem oluştur** öğesini tıklayın.
3. İstem için ne yapmak istediğinizi açıklayın.
4. Bir model seçin.
5. Uygulamanın sizin için bir taslak oluşturmasına izin verin.
6. Taslağı gözden geçirin ve **Kaydet** seçeneğine tıklayın.

![İstem oluştur](../images/screenshots/tr/transform-generate.png)


<br/>

<a id="edit-a-prompt"></a>

### Bir istemi düzenle

Bir istem oluşturduğunuzda veya düzenlediğinizde, sol tarafta editör görünür ve sağ tarafta bir test alanı belirir.

![Dönüştür istem editörü](../images/screenshots/tr/transform-prompt-edit.png)

Ana alanlar şunlardır:

- **İstem adı**: İstem listesinde gösterilen ad.
- **İstem talimatları (isteğe bağlı)**: İstem çalıştırıldığında kullanıcıya gösterilen kısa bir ipucu.
- **Model Rolü**: "Yardımcı bir asistanısınız." gibi, yapay zekaya atanan genel rol.
- **Model Talimatları (satır başı başına bir tane)**: Yapay zekanın uymasını istediğiniz belirli kurallar.
- **Çıktı açıklaması**: "özet" veya "yeniden yazım" gibi sonucu tanımlayan kısa bir kelime.
- **Sıcaklık (0.0 → 1.0)**: Modelin nasıl davranacağı; aşağıya bakın.
- **Hedef dil iste**: İstem çalıştırıldığında hedef dil seçici ekler.

**Sıcaklık** terimi sizin için yeni bir teknik terimse, şöyle düşünebilirsiniz:

- **Daha düşük** bir sıcaklık, daha tutarlı ve öngörülebilir sonuçlar verir.

- **Daha yüksek** bir sıcaklık, daha fazla çeşitlilik ve yaratıcılık sağlar.

Ayrıca şunları da kullanabilirsiniz:

- Basit bir tanımdan yeni bir taslak oluşturmak için **`Başlatıcı istemi oluştur`**
- Var olan bir istemi geliştirmek için **`İstemi geliştir`**
- İstemi alanlarını çevirmek için **`İstemi çevir`**

<br/>

> ⚠️ **UYARI**<br/>
> **`Çalıştırmaya geri dön`** tuşuna basmadan önce **`Kaydet`** tuşuna tıklayın. Değişikliklerinizi kaydetmeden geri dönerseniz, yaptığınız değişiklikler kaybolur.

<br/>

<a id="test-a-prompt-before-using-it"></a>

### Kullanmadan önce bir istemi test edin

Sağ taraftaki test paneli, günlük işlerinizde kullanmadan önce örnek metinle isteminizi denemenizi sağlar.

Bu şu durumlarda kullanışlıdır:

- Yeni bir istem oluştururken
- İki istem sürümünü karşılaştırırken
- Tonu, uzunluğu veya çıktı biçimini kontrol etmek istediğinizde

<br/>

> ℹ️ **NOT**<br/>
> Kayıtlı istemleri [**Ayarlar** > **İstem Dönüştürme**](#transform-prompts) bölümünde dışa aktarabilir ve içe aktarabilirsiniz.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="dashboard"></a>

## Panel

Uygulamayı ne kadar kullandığınızı ve maliyetin ne kadar olduğunu görmek (ücretli modeller için) için **Panel**'i kullanın.

![Panel özeti](../images/screenshots/tr/dashboard-summary.png)


<br/>

> ℹ️ **NOT**<br/>
> Sadece **ücretsiz** modeller kullanıyorsanız, **maliyet** tutarları sıfır olabilir ve maliyete odaklanan özetler boş görünür. **Özet**, **Zamana göre kullanım** ve **Model bazında kullanım** bölümleri, seçili dönemde etkinliğiniz varsa hâlâ **çağrı sayılarını** (çevir, yeniden yaz ve dönüştür) gösterir.

<br/>

<a id="filter-the-data"></a>

### Verileri filtreleyin

Zaman aralığını değiştirmek için en üstteki filtre düğmelerini kullanın.

![Kontrol paneli filtreleri](../images/screenshots/tr/dashboard-filter.png)

<br/>

> ℹ️ **NOT**<br/>
> **Kullanıcı** filtresi yalnızca web sürümünde yöneticiler tarafından görünür. Normal kullanıcılar bu filtreyi göremez ve masaüstü uygulamasında bu filtre mevcut değildir.

<br/>

<a id="dashboard-tabs"></a>

### Panel sekmeleri

- **Özet**, kullanım ve maliyet genel bakışını sağlar. Zaman içinde kullanım (çeviri, yeniden yazma ve dönüşüm için günlük toplam **çağrı sayısı**) ve modele göre kullanımın (dönüşüm dahil **model başına toplam çağrılar**) yığılmış grafiğini içerir.
- **Kullanıma Göre**, etkinliği çevirinin diline, yeniden yazma kipine ve dönüşüm istemine göre ayırır.
- **Modele Göre**, hangi modellerin kullanıldığını ve maliyetlerini gösterir.
- **Güne Göre**, günlük toplamları gösterir.
- **Tüm çağrılar**, tam çağrı geçmişini gösterir ve dışa aktarmanızı sağlar.

<br/>

<a id="export-data"></a>

### Veri dışa aktarma

Kontrol paneli tabloları şu biçimlerde veri dışa aktarabilir:

- **JSON**
- **CSV**
- **XLSX**

Bu, etkinlikleri uygulamanın dışında incelemek veya bir rapor paylaşmak istiyorsanız faydalıdır.

<br/>

<a id="delete-stored-records-for-a-model"></a>

### Bir model için depolanan kayıtları silme

**Modeline Göre** veya **Tüm Çağrılar** bölümünde, bir modelin depolanan kayıtlarını "çöp kutusu" simgesine tıklayarak kaldırabilirsiniz.

> ⚠️ **UYARI**<br/>
> Depolanan kayıtların silinmesi geri alınamaz. Sadece bu geçmişi artık ihtiyacınız olmadığından eminseniz kullanın.

Tüm verileri silmek veya kayıtları yaşlarına göre kaldırmak için [**Ayarlar** > **Maliyet Takibi**](#cost-tracking) sayfasına gidin. Burada tüm depolanan verileri ya da belirli bir tarihten daha eski verileri silme seçeneklerini bulacaksınız.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="history"></a>

## Geçmiş

Her işlemin girdi ve çıktısını içeren **Transrewrt** içindeki işlemlerinizin geçmişini görmek için **Geçmiş** öğesine tıklayın.

![Geçmiş sayfası](../images/screenshots/tr/history.png)

<br/>

<a id="filter-the-history"></a>

### Verileri filtrele

**Geçmiş**, **Gösterge Paneli** sayfasıyla aynı süzgeçleri kullanır. Zaman aralığını seçmek için bunları kullanın.

![Gösterge Paneli süzgeçleri](../images/screenshots/tr/dashboard-filter.png)

<br/>

> ℹ️ **NOT**<br/>
> **Kullanıcı** süzgeci yalnızca web sürümünde yönetici kullanıcılar için görünür. Normal kullanıcılar bu süzgeci göremez ve masaüstü uygulamasında da kullanılamaz.

<br/>

<a id="export-history-data"></a>

### Geçmiş verilerini dışa aktarma

Geçmiş sayfası, süzülen verileri şu biçimlerde dışa aktarabilir:

- **JSON**
- **CSV**
- **XLSX**

Bu, etkinliği uygulamanın dışında incelemek veya bir raporu paylaşmak isterseniz kullanışlıdır.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="settings"></a>

## Ayarlar

Uygulamanın nasıl çalıştığını özelleştirmek için kenar çubuğundan **Ayarlar** seçeneğini açın.

Kullanılabilir sekmeler, platforma ve kullanıcı rolünüze göre değişir:

  | Sekme               | Masaüstü | Web (yönetici) | Web (normal kullanıcı) |
  |-------------------|:-------:|:-----------:|:------------------:|
  | Genel Ayarlar     |   evet   |     evet     |        evet         |
  | Modeller          |   evet   |     evet     |        evet         |
  | Diller            |   evet   |     evet     |        evet         |
  | Maliyet Takibi    |   evet   |     evet     |         —          |
  | Dönüşüm İstemleri |   evet   |     evet     |        evet         |
  | Kullanıcılar      |    —    |     evet     |         —          |
  | API Yapılandırması |   evet   |     evet     |         —          |
  | Hakkında          |   evet   |     evet     |        evet         |

<br/>

> ℹ️ **NOT**<br/>

> Web sürümünde, her kullanıcının kendi yapılandırması vardır. Seçilen modeller, diller, genel seçenekler ve dönüşüm istemleri gibi ayarlar kullanıcı bazında saklanır. Yapacağınız değişiklikler diğer kullanıcıları etkilemez.

<br/>


[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="general-settings"></a>

### Genel ayarlar

**Genel Ayarlar**'ı kullanarak yazma davranışınızı, yürütme ayrıntılarının **Geçmiş** için saklanıp saklanmayacağını ve görünümü kontrol edin.

**Davranış**

- **ENTER Davranışı**, `Enter` tuşunun görevi çalıştırması mı yoksa yeni bir satır eklemesi mi yapılacağını seçer.
- **Yapıştırmada otomatik çevir**, metni yapıştırdığınız anda çevirmeye başlar.
- **Sonucu panoya otomatik kopyala**, başarılı sonuçları otomatik olarak kopyalar.
- **Anlık çeviri (yazarken)** yazarken çevirme yapar.
- **Zaman aşımı (ms)** anlık çeviri için bekleme süresini belirler.

**Geçmiş**

- **Çalıştırma geçmişini koru**, her çevirme, yeniden yazma ve dönüştürmenin yan çubuktaki [**Geçmiş**](#history) görünümü için **giriş ve çıkış metnini** saklayıp saklamayacağını kontrol eder. Devre dışı bırakıldığında onay istenir; onay verirseniz, saklanan geçmiş metni veritabanından kaldırılır.

- **Geçmiş verilerini sil**, depolanan metinleri yaşına göre (örneğin birkaç aydan eski olanlar veya **tüm veriler (temizle)**) **Verileri Sil** seçeneğiyle silmenizi sağlar. Bu yalnızca **Geçmiş** görünümü için kaydedilmiş yürütme metnini etkiler; **maliyet** veya kullanım toplamlarını **silmektedir**. **Maliyet** verilerini kaldırmak veya düzenlemek için [**Ayarlar** > **Maliyet Takibi**](#cost-tracking) bölümüne gidin.

**Görünüm**

- **İşlemlerde maliyet bilgilerini göster**, işlem başı maliyetin (varsa) ve toplam maliyetin Çevir, Yeniden Yaz ve Dönüştür çıktı panellerinde görüntülenmesini kontrol eder.
- **Maliyet ondalık basamak sayısı**, maliyet ondalıklarının nasıl görüntülendiğini değiştirir.
- **Sadece web için:** **Uygulama etrafında bir kenar boşluğu göster**, arayüzün etrafına ekstra boşluk ekler.
- **Yazı Tipi**, metin panellerindeki yazı tipini değiştirir.
- **Boyut**, yazı boyutunu değiştirir.

**Yapılandırma Yedeklemesi**

- **Yedekte kullanım verilerini dahil et** — etkinleştirildiğinde, ZIP dosyası yürütme geçmişi ve API çağrısı verilerini de içerir.

- **Yedekleme yapılandırması** — varsayılan olarak UTC'ye göre `transrewrt-config-backup-YYYY-MM-DD_HHMMSS.zip` adlı tek bir ZIP dosyası oluşturur ve içinde `config.json`, `state.json`, isteğe bağlı şifreleme anahtarı, kullanıcılar, tercihler, özel istemler ve kullanım verilerini barındırır. Başarılı bir yedeklemeden sonra, onay ekranında kaydedilen dosya adı gösterilir.
- **Yedekten geri yükleme** — önce bir **onay iletişim kutusu** açar. İletişim kutusunun içinde yedekleme ZIP dosyasını seçin (**Gözat** / dosya seçici ya da destekleniyorsa sürükleyip bırakma), ardından aşağıdaki seçenekleri gözden geçirin:
  - **Kullanım verilerini geri yükle** — yedekleme sırasında kullanım verilerinin dahil edilmiş olması halinde, yedeklemeden alınan kullanım/geçmişi içeri aktarın; sadece ayarlar ve istemler istiyorsanız bu seçeneği işareti kaldırın.
  - **Geri yüklemeye başlamadan önce eski kullanım verilerini temizle** — mevcut kullanım/geçmişi bu kurdan kaldırın ve ardından yedeklemeyi uygulayın (isteğe bağlı; temiz bir değiştirme istiyorsanız kullanın).

Web veya masaüstü sürümünde oluşturulan yedekler, diğer sürümde geri yüklenebilir. Masaüstü yedeğini web sürümünde geri yüklüyorsanız veriler yönetici kullanıcısına geri yüklenecektir.


<br/>

<a id="models"></a>

### Modeller

Araç çubuğunda hangi modellerin görüneceğini seçmek için **Ayarlar** > **Modeller** seçeneğini kullanın.

![Ayarlar Modeller sekmesi](../images/screenshots/tr/settings-models.png)

Sayfada iki liste bulunur:

- Solda **Kullanılabilir Modeller**
- Sağda **Seçilen Modeller**

Kullanışlı kontroller şunları içerir:

- Modeli ada göre bulmak için **Modelleri ara...**
- Listeleyi tek bir altyapıya (OpenRouter, OpenAI, Ollama, …) daraltmak için **Sağlayıcı** etiketleri
- Sadece ücretsiz modelleri göstermek için **Sadece Ücretsiz**
- Listeyi yeniden yüklemek için **Yenile**
- Sağlayıcıya göre sıralarken **Tümünü Genişlet** ve **Tümünü Daralt**

Model kimliklerinde sağlayıcı öneki bulunur (örneğin `openrouter/…` veya `openai/…`). Trafik yönlendirmenin nasıl yapıldığını gösteren **OpenAI (OpenRouter)** veya **OpenAI (doğrudan)** gibi rozetler mevcuttur.

> ℹ️ **NOT**<br/>

> **OpenRouter Body Builder** (`openrouter/bodybuilder`), genel bir sohbet modeli değil, bir yönlendirici modelidir: yanıtı, OpenRouter API istek gövdelerini (örneğin `requests` dizisi içindeki `model` ve `messages` gibi) tanımlayan bir JSON'dur. Eğer bunu **Çevir**, **Yeniden Yaz** veya **Dönüştür** işlemleri için kullanırsanız, çıktı paneli tamamlanmış metni değil, bu JSON'u gösterecektir. Bu tür görevler için normal bir metin modeli seçin. Ayrıntılar için OpenRouter üzerindeki [Body Builder model sayfasını](https://openrouter.ai/openrouter/bodybuilder) ziyaret edin.

Eylemler:

 - Bir model eklemek için **Ekle** veya boş alana tıklayın.

 - Bir modeli kaldırmak için, **Seçilen Modeller** listesinde yanındaki **X** işaretine tıklayın ya da Kullanılabilir Modeller listesinde kaydın üzerinde yer alan **Seçilen** bölümüne tıklayın.

 - Listeyi temizlemek için **Tüm Seçimleri Kaldır**'a tıklayın. Gerekli olan ücretsiz model listede kalır.

<br/>

> ℹ️ **NOT**<br/>

> OpenRouter'a hemen kredi eklemek istemiyorsanız, önce **Sadece Ücretsiz** seçeneğini etkinleştirin ve ücretsiz modelleri seçin (kredi kartı gerekmez). Ayrıca, herhangi bir API anahtarı olmadan modelleri yerel olarak çalıştırmak için Ollama kullanabilirsiniz.

<br/>

<a id="languages"></a>

### Diller

Uygulamada kullanılan dil listelerini düzenlemek için **Ayarlar** > **Diller** bölümünü kullanın.

- **Üst düzey diller**, **Çevir** ve **Dönüştür** alanlarında dil listelerinin en üst kısmında sabitlenir.
- **Özel dil**, yerleşik listede olmayan bir dil eklemenize olanak tanır.

Bir özel dil eklerseniz, yerleşik seçeneklerin yanında dil seçicilerde görünür.

<br/>

<a id="cost-tracking"></a>

### Maliyet Takibi

Maliyet bilgilerini yönetmek için **Ayarlar** > **Maliyet Takibi**'ni kullanın.

- **Toplam Maliyet**, toplamda biriken değeri gösterir.
- **Değeri Kopyala**, toplamı panoya kopyalar.
- **Maliyeti Sıfırla**, kayıtlı toplamı sıfırlar.
- **API anahtarı kullanımını senkronize et**, toplamı OpenRouter hesabınızda bildirilen kullanım miktarıyla eşleştirir (sadece OpenRouter).
- **API Anahtarı Kullanımı**, müsaitse OpenRouter kullanım detaylarını gösterir.
- **Maliyet verilerini sil**, tüm verileri veya yalnızca seçilen bir tarihten daha eski girişleri kaldırır.

**Maliyet takibi:** OpenRouter modellerini kullandığınızda uygulama, OpenRouter'dan gelen maliyet bilgilerine dayanarak gerçek kullanım ve harcama bilgilerinizi gösterir. Diğer tüm sağlayıcılar için uygulama, OpenRouter tarafından yayımlanan fiyatlarla maliyet tahmini yapar. Fiyat bilgisi yoksa tahmin sıfır olabilir.

<br/>

> ℹ️ **NOT**<br/>
> **Tüm maliyet rakamları yalnızca referans amaçlıdır, resmi fatura deildir.**

<br/>

> ⚠️ **UYARI**<br/>

> Verilerin silinmesi geri alınamaz. Silmeden önce verilerinizi yedeklemeyi veya [**Geçmiş**](#history) üzerinden veya [**Gösterge Paneli** > **Tüm Çağrılar**](#dashboard-tabs) üzerinden dışa aktarmayı unutmayın, aksi takdirde veriler kalıcı olarak kaybolur. Her API çağrısı girişine ilişkin tüm giriş/çıkış geçmişi de silinecektir.


<br/>

<a id="transform-prompts"></a>

### İstemleri dönüştürme

İstemleri toplu olarak yönetmek için **Ayarlar** > **İstemleri Dönüştür** bölümünü kullanın.

Şunları yapabilirsiniz:

- Kayıtlı isteklerinizi gözden geçirin
- İstemleri silin
- Bir dosyadan istemleri içeri aktarın
- Yedekleme veya paylaşım için istemleri dışarı aktarın
- Örnek istemleri istem listesine yükleyin

<br/>

<a id="users"></a>

### Kullanıcılar

Web sürümünde kullanıcı hesaplarını yönetmek için **Kullanıcılar** bölümünü kullanın. Kullanıcı ekleyebilir, bilgilerini güncelleyebilir, şifrelerini sıfırlayabilir ve hesapları silebilirsiniz.

<br/>

<a id="api-config"></a>

### API yapılandırması

Desteklenen sağlayıcılar şunlardır: OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras ve **Ollama** (temel bir URL üzerinden yerel modeller). Yalnızca kullanmayı tercih ettiğiniz sağlayıcıları yapılandırmanız gerekir.

**Web uygulaması: sadece yönetici**

API anahtarları, sistem veya Docker ortam değişkenleri aracılığıyla yapılandırılır — bu anahtarlar web arayüzüne girilmez. Bu sayfa hangi sağlayıcıların anahtar yapılandırıldığını gösterir ve her birini **`Test`** düğmesine tıklayarak test etmenize olanak tanır.

<br/>

> ℹ️ **NOT**<br/>
> Bir API anahtarını değiştirmek için sisteminizdeki veya Docker yapılandırmanızdaki ortam değişkenini güncelleyin ve sunucuyu veya kapsayıcıyı yeniden başlatın.

> ℹ️ **NOT**<br/>

> **Yapılandırma yedekleri** ([**Genel ayarlar** → Yapılandırma Yedekleme](#general-settings) bölümüne bakın) ZIP dosyasının `config.json` dosyasına **çözümlenmiş** sağlayıcı anahtarlarını ekleyebilir. Bu ZIP dosyası geri yüklendiğinde, bu anahtarlar sunucunun kalıcı yapılandırma dosyasına **kopyalanmaz** — canlı anahtarlar, burada belirtildiği gibi ortamdan ve mevcut dosya durumundan alınmaya devam eder.

<br/>

**Masaüstü uygulaması**

Kullandığınız her sağlayıcı için API anahtarlarını depolamak üzere **API Yapılandırması**nı kullanın. Ollama için bir API anahtarı yerine **temel URL** girin.

<br/>

> 💡 **İpucu** <br/>
> API anahtarı kullanmak istemiyor veya ücret ödemek istemiyorsanız, ücretsiz olarak modelleri (örneğin `translategemma:4b`) makinenizde çalıştırmak üzere [Ollama'yı indirip](https://ollama.com) yerel olarak kullanabilirsiniz. Alternatif olarak, ücretsiz modelleri kullanmak üzere kredi kartı gerektirmeyen ücretsiz bir OpenRouter hesabı oluşturabilir veya Cerebras, Google, Groq veya Mistral AI'dan ücretsiz bir API anahtarı edinebilirsiniz.

<br/>

- Yalnızca ihtiyacınız olan sağlayıcıları ekleyin. **Ayarlar** > **Modeller** bölümünde, her model kimliği sağlayıcıyla başlar (örneğin `openrouter/openrouter/free`, `openai/gpt-4o`, `ollama/llama3`).

Bir API anahtarı eklemek için değeri metin alanına girin ve **`Kaydet`** seçeneğine tıklayın. Var olan bir anahtarı değiştirmek için **`Düzenle`** seçeneğine tıklayın. Bir anahtarın çalıştığını doğrulamak için **`Test Et`** seçeneğine tıklayın. Ollama temel URL’si için bağlantıyı kontrol etmek amacıyla her zaman **`Test Et`** seçeneğine tıklayın.

<br/>

> ℹ️ **NOT**<br/>
> Bir API anahtarının mevcut değerini göremezsiniz. Yalnızca **`Düzenle`** düğmesini kullanarak değiştirebilirsiniz.
> API anahtarları yapılandırmada şifrelenmiş olarak saklanır.

<br/>

<a id="about"></a>

### Hakkında

**Hakkında** sekmesi şunları gösterir:

- uygulama adı
- sürüm numarası
- yapı tarihi
- proje deposuna bir bağlantı

<br/><br/>

<a id="common-issues"></a>

## Yaygın sorunlar

Bir şey beklediğiniz gibi çalışmıyorsa, önce aşağıdaki noktaları kontrol edin.

<br/>

<a id="the-app-will-not-translate-rewrite-or-transform-text"></a>

### Uygulama metni çevirmeyacak, yeniden yazmayacak veya dönüştürmeyecektir

Aşağıdakileri kontrol edin:

- Araç çubuğundan bir model seçtiğinizden emin olun
- [**Ayarlar** > **Modeller**](#models) kısmında en az bir model listelenmiş olmalı
- API kurulumunuzun düzgün çalıştığından emin olun

Masaüstü uygulamasını kullanıyorsanız:

1. [**Ayarlar** > **API Yapılandırması**](#api-config) sayfasını açın.
2. En az bir API anahtarının kaydedildiğinden emin olun.
3. Anahtarın çalıştığını doğrulamak için sağında bulunan **Test** düğmesine tıklayın.

<br/>

<a id="the-model-list-is-empty"></a>

### Model listesi boş

[**Ayarlar** > **Modeller**](#models) bölümüne gidin ve **Yenile**'ye tıklayın.

Gerekirse:

- bir model arayın
- sadece **Ücretsiz** seçeneğini etkinleştirin
- **Seçili Modeller** bölümüne bir veya daha fazla model ekleyin

<br/>

<a id="the-result-is-too-slow-or-too-expensive"></a>

### Sonuç çok yavaş veya çok maliyetli

Aşağıdakilerden birini veya birkaçını deneyin:

- farklı bir model seçin
- daha kısa bir giriş kullanın
- [**Ayarlar** > **Genel Ayarlar**](#general-settings) bölümünde **Yazarken anlık çeviri** özelliğini kapatın
- basit görevler için ücretsiz modeller kullanın (bkz. [Modeller](#models))

<br/>

<a id="the-interface-is-in-the-wrong-language"></a>

### Arayüz yanlış dilde

[Çubukta](#toolbar) bulunan dünya simgesine tıklayarak tercih ettiğiniz **Arayüz dilini** seçin.

<br/>

<a id="the-text-is-too-small-or-hard-to-read"></a>

### Yazı çok küçük veya okunması zor

[**Ayarlar** > **Genel Ayarlar**](#general-settings) bölümüne gidin ve aşağıdaki ayarları değiştirin:

- **Yazı Tipi Ailesi**
- **Boyut**

<br/>

<a id="dashboard-charts-are-empty"></a>

### Panodaki grafikler boş

Bu durum şu durumlarda normaldir:

- yalnızca **ücretsiz modelleri** kullanıyorsanız ve **maliyet** rakamlarına bakıyorsanız (sıfır olabilirler); **Özet** bölümündeki kullanım çağrı sayısı grafiklerinin dolması için yine de seçilen dönemle ilgili verilere ihtiyaç vardır
- seçilen **zaman filtresi** çağrıların yapılma dönemini kapsamıyordur — kontrol etmek için **Tümü** seçeneğini deneyin

**Tümü** seçeneğini seçtikten sonra grafikler hâlâ boşsa, çağrıların [**Geçmiş**](#history) ya da **Tüm Çağrılar** sekmesinde görünür olduğundan emin olun.

<br/>

<a id="cost-shows-not-available-or-seems-wrong"></a>

### Maliyet "mevcut değil" olarak gösteriliyor veya hatalı görünüyor

**OpenRouter** aracılığıyla modeller kullandığınızda, uygulama size OpenRouter tarafından raporlanan gerçek harcamanızı gösterir.

**Diğer sağlayıcılar** (OpenAI doğrudan, Anthropic doğrudan, vb.) için maliyet, OpenRouter tarafından yayınlanan fiyatlandırma verilerinden tahmini olarak hesaplanır. Bir model için eşleşen bir fiyat bulunamazsa, maliyet **mevcut değil** olarak görünecek ve toplamınıza eklenmeyecektir.

<br/>

<a id="total-cost-does-not-match-my-provider-bill"></a>

### Toplam maliyet sağlayıcınızın faturanızla eşleşmiyor

Uygulamadaki tüm maliyet rakamları yalnızca başvuru amaçlıdır ve **tahmini değerlerdir**, resmi fatura belgeleri değildir.

Toplam tutarı gerçek OpenRouter giderinize daha yakın hale getirmek için [**Ayarlar** > **Maliyet Takibi**](#cost-tracking) bölümüne gidin ve **API anahtarı kullanımıyla senkronize et** seçeneğine tıklayın.

<br/>

<a id="the-history-page-is-missing-from-the-sidebar"></a>

### Yan çubukta Geçmiş sayfası eksik

**Yürütme geçmişini koru** kapatılmış olabilir. [**Ayarlar** > **Genel Ayarlar**](#general-settings) kısmını açın ve etkinleştirin. Açmak, daha önce silinmiş geçmiş verilerini geri getirmez.

<br/>

<a id="web-app-session-expired"></a>

### Web uygulaması: beklenmedik şekilde oturum açma sayfasına yönlendirildi

Oturumunuzun süresi dolmuş olabilir. Tekrar oturum açın. Sık sık oluyorsa, sunucu yapılandırmasında oturum süresi ayarlarını kontrol edin.

<br/>

<a id="web-admin-forgot-or-lost-a-password"></a>

### Web yönetici: şifreyi unuttunuz veya kaybettiniz

Bu yalnızca **otomatik barındırılan web uygulaması** (Docker) için geçerlidir, masaüstü (Electron) uygulaması için değildir.

- Başka bir yönetici hâlâ giriş yapabiliyorsa, [**Ayarlar** > **Kullanıcılar**](#users) menüsünü açabilir, ilgili hesabı seçerek burada **yeni bir şifre** atayabilir.
- Eğer **sistemden dışarıda kalmışsanız** ancak makineye veya kapsayıcıya **komut satırı (shell) erişiminiz varsa**, görüntüyle birlikte gelen yardımcı aracı kullanarak şifreyi sıfırlayabilirsiniz (varsayılan adı değiştirdiyseniz `transrewrt` değerini onunla değiştirin; şifreniz boşluk veya özel karakter içeriyorsa tırnak içine alın):

```bash
docker exec transrewrt reset-web-password '<kullanıcıadı>' '<yeni-şifre>'
```

Başka kullanıcı hesabı oluşturmadıysanız, varsayılan yönetici kullanıcı adı `admin`'dir. Sadece bir argüman verirseniz, bu `admin` kullanıcısı için yeni şifre olarak kabul edilir.

Uygulamayı Docker yerine bir **kaynak kodu kopyasından** çalıştırıyorsanız aşağıdaki komutu kullanın:

```bash
pnpm run reset-web-password -- <kullanıcıadı> <yeni-şifre>

Betik, kullanıcı kaydını SQLite veritabanında günceller (eğer eksikse `admin` kullanıcısını da oluşturabilir). Sıfırlamadan sonra yeni şifreyle oturum açın.


<br/>

<a id="dashboard-shows-no-data-for-other-users"></a>

### Kontrol paneli diğer kullanıcılar için veri göstermiyor (web)

Sadece **yöneticiler**, **Kullanıcı** filtresi aracılığıyla tüm kullanıcıların verilerini görüntüleyebilir. Tasarım gereği, normal kullanıcılar yalnızca kendi aktivitelerini görebilir.

<br/>

<a id="i-changed-a-prompt-and-lost-the-edits"></a>

### Bir istemi değiştirdim ve düzenlemeleri kaybettim

Bir istemi düzenlerken, **Çalıştır'a Dön** tuşuna basmadan önce her zaman **Kaydet**'e tıklayın.

<br/><br/>

<a id="quick-tips"></a>

## Hızlı ipuçları

- [**Rewrite**](#rewrite) veya [**Transform**](#transform) bölümlerine geçmeden önce, kurulumunuzun düzgün çalıştığını doğrulamak için önce [**Translate**](#translate) ile başlayın.
- Günlük kelime düzenlemeleri için [**Rewrite**](#rewrite) kullanın.
- Belirli bir görev için yinelenebilir bir iş akışı gerekiyorsa [**Transform**](#transform) kullanın.
- Kullanım ve maliyeti izlemek istiyorsanız [**Dashboard**](#dashboard) kullanın.
- Geçmiş işlemlerin ve tam giriş/çıkış metinlerinin gözden geçirilmesi için [**History**](#history) kullanın.
- Oluşturduğunuz bir istem kitaplığını güvende tutmak istiyorsanız (bkz. [Transform Prompts](#transform-prompts)) veya başkalarıyla paylaşmak istiyorsanız düzenli olarak istemleri dışa aktarın.

<br/><br/>

<a id="disclaimer"></a>

## Sorumluluk Reddi

Ürün adları ve simgeleri, sahiplerine aittir ve sadece tanımlama amacıyla kullanılır. Bu yazılım, bahsedilen markalarla bağlantılı değildir ve onlar tarafından desteklenmez.

<br/><br/>

<a id="license"></a>

## Lisans

Telif Hakkı © 2026 Waldemar Scudeller Jr.

[Apache Lisansı 2.0](LICENSE)