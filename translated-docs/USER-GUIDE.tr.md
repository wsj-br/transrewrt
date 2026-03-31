---
translation_last_updated: '2026-03-31T22:58:33.156Z'
source_file_mtime: '2026-03-30T09:57:25.622Z'
source_file_hash: e1b91eca0124d467
translation_language: tr
source_file_path: USER-GUIDE.md
---
![Transrewrt banner](../images/transrewrt_banner.png)

<a id="transrewrt-user-guide"></a>
# Kullanıcı Kılavuzu

<br/>

<a id="introduction"></a>
## Giriş

Transrewrt, metinle çalışmanıza üç ana yoldan yardımcı olur:

- **Çevir** - metni bir dilden diğerine dönüştürme.
- **Yeniden yaz** - metni daha açık, daha kısa veya daha resmi gibi farklı bir tarzda ifade etme.
- **Dönüştür** - istem adı verilen özel yapay zekâ talimatlarını kullanarak metni işleme.

<br/>

Bu kılavuz, uygulama yüklendikten ve çalıştırıldığında nasıl kullanılacağını açıklar. Kurulum adımları için ana **[README](README.tr.md)** dosyasına bakın.

<br/>

> ℹ️ **NOT**<br/>
> Transrewrt, Windows ve Linux için masaüstü uygulaması olarak ve kendin barındırılan bir web uygulaması olarak mevcuttur. Bu kılavuz, uygulamanın günlük kullanımına odaklanır. Bir şey yalnızca bir sürüme uygulanıyorsa, açıkça işaretlenir.

<small>**Diğer dillerde oku:** </small>
<small id="lang-list">[English (UK)](../USER-GUIDE.md) · [Português (BR)](USER-GUIDE.pt-BR.md) · [العربية](USER-GUIDE.ar.md) · [বাংলা](USER-GUIDE.bn.md) · [Català](USER-GUIDE.ca.md) · [简体中文](USER-GUIDE.zh-CN.md) · [繁體中文](USER-GUIDE.zh-TW.md) · [Hrvatski](USER-GUIDE.hr.md) · [Čeština](USER-GUIDE.cs.md) · [Nederlands](USER-GUIDE.nl.md) · [English (US)](USER-GUIDE.en-US.md) · [Filipino](USER-GUIDE.tl.md) · [Français](USER-GUIDE.fr.md) · [Deutsch](USER-GUIDE.de.md) · [Ελληνικά](USER-GUIDE.el.md) · [हिन्दी](USER-GUIDE.hi.md) · [Magyar](USER-GUIDE.hu.md) · [Italiano](USER-GUIDE.it.md) · [日本語](USER-GUIDE.ja.md) · [Basa Jawa](USER-GUIDE.jv.md) · [한국어](USER-GUIDE.ko.md) · [Bahasa Melayu](USER-GUIDE.ms.md) · [فارسی](USER-GUIDE.fa.md) · [Polski](USER-GUIDE.pl.md) · [Português (PT)](USER-GUIDE.pt.md) · [ਪੰਜਾਬੀ](USER-GUIDE.pa.md) · [Română](USER-GUIDE.ro.md) · [Русский](USER-GUIDE.ru.md) · [Slovenčina](USER-GUIDE.sk.md) · [Español](USER-GUIDE.es.md) · [Kiswahili](USER-GUIDE.sw.md) · [Svenska](USER-GUIDE.sv.md) · [తెలుగు](USER-GUIDE.te.md) · [ภาษาไทย](USER-GUIDE.th.md) · [Türkçe](USER-GUIDE.tr.md) · [Українська](USER-GUIDE.uk.md) · [Tiếng Việt](USER-GUIDE.vi.md)</small>

<small>

> **Kullanıcı arayüzü ve belgelerin çevirileri hakkında not:** İngilizce (UK) orijinali dışında tüm arayüz dilleri yapay zeka modelleri kullanılarak çevrildi; ifade tarzı eksik olabilir veya hatalar içerebilir.

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
- [Çeviri](#translate)
  - [Metin çevirme](#translate-text)
  - [Dil seçimi](#language-selection)
  - [Yararlı çeviri ayarları](#helpful-translation-settings)
- [Yeniden yazma](#rewrite)
- [Dönüştürme](#transform)
  - [Var olan bir istemi çalıştırma](#run-an-existing-prompt)
  - [Henüz isteminiz yoksa](#if-you-have-no-prompts-yet)
  - [Hızlıca bir istem oluşturma](#create-a-prompt-quickly)
  - [Bir istemi düzenleme](#edit-a-prompt)
  - [Kullanmadan önce bir istemi test etme](#test-a-prompt-before-using-it)
- [Kontrol Paneli](#dashboard)
  - [Verileri filtreleme](#filter-the-data)
  - [Kontrol Paneli sekmeleri](#dashboard-tabs)
  - [Verileri dışa aktarma](#export-data)
  - [Bir model için saklanan kayıtları silme](#delete-stored-records-for-a-model)
- [Geçmiş](#history)
  - [Verileri filtreleme](#filter-the-data-1)
  - [Geçmiş verilerini dışa aktarma](#export-history-data)
- [Ayarlar](#settings)
  - [Genel ayarlar](#general-settings)
  - [Modeller](#models)
  - [Diller](#languages)
  - [Maliyet izleme](#cost-tracking)
  - [İstekleri Dönüştür](#transform-prompts)
  - [Kullanıcılar](#users)
  - [API yapılandırması](#api-config)
  - [Hakkında](#about)
- [Yaygın sorunlar](#common-issues)
  - [Uygulama metni çevirmiyor, yeniden yazmıyor veya dönüştürmüyor](#the-app-will-not-translate-rewrite-or-transform-text)
  - [Model listesi boş](#the-model-list-is-empty)
  - [Sonuç çok yavaş veya çok maliyetli](#the-result-is-too-slow-or-too-expensive)
  - [Arayüz yanlış dilde](#the-interface-is-in-the-wrong-language)
  - [Metin çok küçük veya okunması zor](#the-text-is-too-small-or-hard-to-read)
  - [Kontrol Paneli grafikleri boş](#dashboard-charts-are-empty)
  - [Maliyet "kullanılamıyor" veya yanlış görünüyor](#cost-shows-not-available-or-seems-wrong)
  - [Toplam maliyet sağlayıcınızın faturanızla uyuşmuyor](#total-cost-does-not-match-my-provider-bill)
  - [Geçmiş sayfası kenar çubuktan eksik](#the-history-page-is-missing-from-the-sidebar)
  - [Web uygulaması: beklenmedik şekilde giriş sayfasına yönlendiriliyorsunuz](#web-app-redirected-to-the-login-page-unexpectedly)
  - [Web yönetici: şifreyi unuttunuz veya kaybettiniz](#web-admin-forgot-or-lost-a-password)
  - [Kontrol Paneli diğer kullanıcılar için veri göstermiyor (web)](#dashboard-shows-no-data-for-other-users-web)
  - [Bir istemi değiştirdim ve düzenlemeleri kaybettim](#i-changed-a-prompt-and-lost-the-edits)
- [Hızlı ipuçları](#quick-tips)
- [Sorumluluk reddi](#disclaimer)
- [Lisans](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="before-you-start"></a>
## Başlamadan önce

Transrewrt'ı kullanmak için en az bir AI sağlayıcısına erişim gereklidir. Desteklenen sağlayıcılar şunlardır: [OpenRouter](https://openrouter.ai) (birçok modeli bir araya getirir), OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras ve yerel modeller için [Ollama](https://ollama.com).

Başlamak için ücretli bir model seçmeniz gerekmez. OpenRouter API anahtarınızı eklediğiniz anda uygulama otomatik olarak yerleşik bir **ücretsiz** OpenRouter seçeneğini etkinleştirir. Bu sayede hemen çeviri yapmaya, yeniden yazmaya ve metinleri dönüştürmeye başlayabilirsiniz. Alternatif olarak, Cerebras, Google, Groq veya Mistral AI'dan ücretsiz bir API anahtarı da alabilirsiniz.

Basit bir dille:

- Bir **model**, işi yapan AI motorudur. Modeller bir **sağlayıcı öneki** ile birlikte listelenir (örneğin `openrouter/…`, `openai/…`, `ollama/…`).
- Bir **API anahtarı** (veya Ollama için bir **temel URL**), uygulamanın bu sağlayıcıya ulaşmasını sağlar.

**Masaüstü uygulamasını** kullanıyorsanız, kullandığınız her sağlayıcı için [**Ayarlar** > **API Yapılandırması**](#api-config) kısmına anahtar ekleyin. Sadece OpenRouter kullanımında, aşağıda [Bir API anahtarı nasıl alınır?](#how-to-get-an-api-key-desktop-app) bölümüne bakın. API anahtarı kullanmak istemiyorsanız, [ollama.com](https://ollama.com) adresinden Ollama'yı yükleyebilir ve `translategemma:4b` gibi yerel modeller kullanabilirsiniz.

**Web sürümünü** kullanıyorsanız, sunucu sahibi sağlayıcıları ortam değişkenleri ile yapılandırır, bu yüzden uygulamada doğrudan API anahtarları giremezsiniz.

<br/>

<a id="how-to-get-an-api-key-desktop-app"></a>
### Ücretsiz bir OpenRouter API anahtarı nasıl alınır (masaüstü uygulaması)

Masaüstü uygulamasını kullanıyorsanız aşağıdaki adımları izleyin:

1. Web tarayıcınızda [OpenRouter](https://openrouter.ai) adresine gidin.
2. Bir hesap oluşturun veya oturum açın.
3. [Anahtarlar](https://openrouter.ai/keys) sayfasını açın.
4. Yeni bir API anahtarı oluşturmak için düğmeye tıklayın.
5. Anahtarı daha sonra tanıyabilmeniz için bir isim verin.
6. Yeni API anahtarını kopyalayın.
7. Transrewrt'ye geri dönün ve **Ayarlar** > **API Yapılandırması** kısmını açın.
8. Anahtarı **OpenRouter API anahtarı** alanına yapıştırın (**Ayarlar** > **API Yapılandırması** altında).
9. Çalışıp çalışmadığını doğrulamak için **OpenRouter anahtarını test et** düğmesine tıklayın.

<br/><br/>

<a id="getting-started"></a>
## Başlarken

Transrewrt'ı ilk defa kullanıyorsanız şu sırayı izleyin:

1. Uygulamayı açın.
2. Gerekirse dünya simgesinden **Arayüz dilinizi** seçin.
3. **Masaüstü uygulamasını** kullanıyorsanız [**Ayarlar** > **API Yapılandırması**](#api-config) kısmını açın, en az bir sağlayıcı için bir API anahtarı ekleyin (örneğin OpenRouter) ve çalıştığını doğrulamak için **Test** düğmesine tıklayın.
4. [**Ayarlar** > **Modeller**](#models) kısmını açın ve **Seçili Modeller** bölümüne bir veya daha fazla model ekleyin.
5. [**Ayarlar** > **Diller**](#languages) kısmını açın ve en çok kullandığınız dillerin en üstte görünmesini istiyorsanız **En üst dillerinizi** seçin.
6. **Çevir** kısmına gidin ve her şeyin düzgün çalıştığını doğrulamak için basit bir çeviri işlemi yapın.
7. Bu işlem başarılı olursa, ardından **Yeniden yaz** ve sonra **Dönüştür** işlevlerini deneyin.

Bu sıralama önemlidir. En yaygın ilk kullanım sorununu önler: Uygulamanın çalışan bir API bağlantısı veya seçili bir modeli olmadan bir görev çalıştırmayı denemek.

<br/><br/>

<a id="main-parts-of-the-window"></a>
## Pencerenin ana bölümleri

Uygulama üç ana bölüme ayrılmıştır:

- Soldaki **kenar çubuğu**.
- Üstteki **araç çubuğu**.
- Ortadaki **çalışma alanı**.

<br/>

<a id="sidebar"></a>
### Kenar çubuğu

Uygulama içinde dolaşmak için kenar çubuğunu kullanın. Uygulama logosunun yanındaki simgeye tıklayarak kenar çubuğunu daraltabilir, daha fazla alan açabilirsiniz.

<br/>

<table>
  <tr>
    <td valign="top">
       <img src="../images/screenshots/tr/sidebar.png" alt="Uygulama Kenar Çubuğu" style="max-width: 100%; border: 1px solid #ddd; border-radius: 4px;">
    </td>
    <td valign="top">
      <br/><br/>
      <ul>
        <li><strong>Çevir</strong> çevirme çalışma alanını açar.</li><br/>
        <li><strong>Yeniden yaz</strong> yeniden yazma çalışma alanını açar.</li><br/>
        <li><strong>Dönüştür</strong> özel istem çalışma alanını açar.</li><br/>
        <li><strong>Pano</strong> kullanım ve maliyet bilgilerini gösterir.</li><br/>
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

Araç çubuğu, uygulamada nerede olduğunuza bağlı olarak hafifçe değişir.

- Solda, geçerli sayfanın adı gösterilir.
- Sağda, **model seçici** ve **Arayüz dili** denetimi gösterilir.

**Model seçici**, geçerli görev için hangi yapay zekâ motorunu kullanacağınızı seçmenizi sağlar.

![Model selector](../images/screenshots/tr/model-selector.png)

Bazı ücretsiz modeller her zaman kullanılamayabilir—bazen çevrimdışı olabilirler ya da kullanım sınırına sahip olabilirler. Bu durum gerçekleşirse, uygulama otomatik olarak o modeli kullanılabilir listenizden kaldırır. Hangi modellerin görüneceğini kontrol etmek için [**Ayarlar** > **Modeller**](#models) bölümüne gidin ve model listenizi düzenleyin.
Ayrıca, araç çubuğundaki model adının solundaki sağlayıcı simgesine tıklayarak doğrudan model ayarlarını da açabilirsiniz.

<br/>

**Dünya simgesi + dil kodu**, menüler ve düğmeler gibi uygulama arayüz dilini değiştirir. **Çeviri** bölümünde kullanılan çeviri dillerini değiştirmez.

![Interface language selector](../images/screenshots/tr/language-selector.png)

<br/>

<a id="input-and-output-panels"></a>
### Giriş ve çıkış panelleri

Çoğu çalışma alanı, sol tarafta bulunan **Giriş** panelini ve sağ tarafta bulunan **Çıkış** panelini kullanır.

Her panel ayrıca aşağıdakileri de gösterir:

| **Giriş**                                                          | **Çıkış**                                                                                                                  |
|--------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------|
| - Karakter sayısı <br/>- Kelime sayısı <br/>- Paragraf sayısı   <br/> | - Görevin ne kadar sürdüğü<br/>- **TPS** (saniyede jeton sayısı)<br/>- Karakter, kelime ve paragraf sayıları<br/>- Kullanılan model |

Teknik terimlerle ilgili merakınız varsa:

- **Jeton**, küçük bir metin parçası anlamına gelir. Bir kelimenin parçası ya da kısa bir kelime olarak düşünebilirsiniz.
- **TPS**, modelin saniyede kaç tane bu metin parçasını işlediğini ifade eder.

<br/>

Ayrıca, her işlemin maliyetini (mevcutsa) ve toplam maliyeti de izleyebilirsiniz. Bunu [**Ayarlar** > **Genel Ayarlar**](#general-settings) bölümünde `Eylemlerde maliyet bilgisini göster` seçeneğini etkinleştirerek yapabilirsiniz.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="translate"></a>
## Çevir

Metni bir dilden başka bir dile çevirmek istediğinizde **Çevir** seçeneğini kullanın.

![Translate workspace](../images/screenshots/tr/translate.png)

<br/>

<a id="translate-text"></a>
### Metni çevir

1. **Çevir** seçeneğini açın.
2. **Kimden** alanında bir dil seçin.
3. **Kime** alanında bir dil seçin.
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

Seçili **Üst Dilleriniz** listenin en üstünde görünür. Bunları [**Ayarlar** > **Diller**](#languages) bölümünde ayarlayabilirsiniz.

<br/>

<a id="helpful-translation-settings"></a>
### Yararlı çeviri ayarları

[**Ayarlar** > **Genel Ayarlar**](#general-settings) bölümünde çeviri davranışını değiştirebilirsiniz:

- **Yapıştırıldığında otomatik çeviri**, metni yapıştırdığınız anda bir çeviri çalıştırır.
- **Sonucu panoya otomatik kopyala**, başarılı bir şekilde çalıştırıldığında sonucu otomatik olarak kopyalar.
- **Gerçek zamanlı çeviri (yazarken)**, yazarken çeviri çalıştırır.
- **Zaman aşımı (ms):**, uygulamanın gerçek zamanlı çeviri çalıştırmadan önce ne kadar bekleyeceğini belirler.
- **Enter**, `Enter` tuşuna bastığınızda ne olacağını belirler:

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="rewrite"></a>
## Yeniden yaz

Ana anlamı değiştirmeden ifadeyi geliştirmek istediğinizde **Yeniden yaz** seçeneğini kullanın.

![Rewrite workspace](../images/screenshots/tr/rewrite.png)

Bu, aşağıdakiler için yararlıdır:

- yazım ve dilbilgisi düzeltmeleri (**İmla ve Dilbilgisini Denetle**)
- metni daha net hâle getirmek (**Netliği İyileştir**)
- tek bir çalıştırma ile birkaç farklı yeniden formülasyon oluşturmak (**Alternatif sürümler**)
- metni daha resmi veya daha gayri resmi hâle getirmek (**Resmi** / **Gayri Resmi**)
- metni kısaltmak veya uzatmak (**Kısalt** / **Uzat**)
- metni daha teknik bir hâle getirmek (**Teknik Hale Getir**)

<br/>

> 💡 **İPUCU**<br/>
> "**İmla ve Dilbilgisini Denetle**" modunu kullandığınızda, çıktı panelinde (**Kopyala**'nın yanında) bir **Değişiklikleri göster** anahtarı görünür.
> Metinize uygulanan belirli düzeltmeleri göstermek veya gizlemek için bunu açın veya kapatın.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="transform"></a>
## Dönüştür

Yapay zekanın özel bir talimat kümesini takip etmesini istediğinizde **Dönüştür** seçeneğini kullanın.

![Transform workspace](../images/screenshots/tr/transform.png)

Bu, uygulamanın en esnek bölümüdür. Aşağıdaki gibi görevler için kullanabilirsiniz:

- notları özetlemek
- ham metni pürüzsüz bir e-postaya dönüştürmek
- ana noktaları çıkarmak
- metni belirli bir biçime dönüştürmek
- giriş metniyle ilgili diğer özel işlemler

<br/>

<a id="run-an-existing-prompt"></a>
### Var olan bir istemi çalıştırın

1. **Dönüştür** seçeneğini açın.
2. İstem listesinden bir istem seçin.
3. Bir **Hedef** dil kutusu görünürse, isterseniz bir dil seçin.
4. **Giriş** alanına metin yazın veya yapıştırın.
5. **Dönüştür**'e tıklayın.
6. Sonucu **Çıkış** alanında okuyun.

<br/>

<a id="if-you-have-no-prompts-yet"></a>
### Henüz hiç isteminiz yoksa

İstem listeniz boşsa, Dönüştür çalışma alanında **Örnek istekleri yükle**'ye tıklayın. Aynı kontrol, dışa aktarma/ithalat satırında her zaman [**Ayarlar** > **İstekleri Dönüştür**](#transform-prompts) bölümünde mevcuttur. İkisi de yerleşik örnekler ekler, böylece hızlıca başlayabilirsiniz.

<br/>

> ℹ️ **NOT**<br/>
> Örnek istemler İngilizce olarak sağlanır. Yüklendikten sonra bir istemi düzenleyebilir ve **İstemi çevir** seçeneğini kullanarak kendi dilinize çevirebilirsiniz.

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
### Bir istemi düzenle

Bir istem oluşturduğunuzda veya düzenlediğinizde, düzenleyici solda görünür ve sağda bir test alanı belirir.

![Transform prompt editor](../images/screenshots/tr/transform-prompt-edit.png)

Ana alanlar şunlardır:

- **İstem adı**: İstem listesinde gösterilen ad.
- **İstem talimatları (isteğe bağlı)**: İstem çalıştırıldığında kullanıcıya gösterilen kısa bir ipucu.
- **Model Rolü**: AI'ye atanan genel rol, örneğin 'Yararlı bir asistan ol.' gibi.
- **Model Talimatları (satırbaşına bir tane)**: AI'nin uymasını istediğiniz özel kurallar.
- **Çıktı açıklaması**: Sonucu tanımlayan kısa bir kelime, örneğin 'özet' veya 'yeniden yaz'.
- **Sıcaklık (0,0 → 1,0)**: Modelin nasıl davranacağını belirler; aşağıya bakın.
- **Hedef dili sor**: İstem çalıştırıldığında hedef dil seçici ekler.

Eğer teknik terim **Sıcaklık** sizin için yeni ise, bunu şu şekilde düşünebilirsiniz:

- **Daha düşük** sıcaklık, daha kararlı ve öngörülebilir sonuçlar verir.
- **Daha yüksek** sıcaklık, daha fazla çeşitlilik ve yaratıcılık sağlar.

Ayrıca şunları da kullanabilirsiniz:

- **`İstem oluştur`**: Basit bir tanımdan yeni bir taslak oluşturmak için
- **`İstem geliştir`**: Mevcut bir istemi iyileştirmek için
- **`İstem çevir`**: İstem alanlarını çevirmek için

<br/>

> ⚠️ **UYARI**<br/>
> **`Geri Dön`** tuşuna basmadan önce **`Kaydet`** tuşuna tıklayın. Kaydetmeden geri dönerseniz, yaptığınız değişiklikler kaybolur.

<br/>

<a id="test-a-prompt-before-using-it"></a>
### Kullanmadan önce bir istemi test edin

Sağdaki test paneli, gündelik işlerinizde kullanmadan önce isteminizi örnek metinlerle denemenizi sağlar.

Bu durumlarda kullanışlıdır:

- Yeni bir istem oluşturuyorsanız
- İki istem sürümünü karşılaştırıyorsanız
- Ton, uzunluk veya çıktı biçimi kontrolü yapmak istiyorsanız

<br/>

> ℹ️ **NOT**<br/>
> Kayıtlı istemleri [**Ayarlar** > **İstekleri Dönüştür**](#transform-prompts) bölümünden dışa aktarabilir ve içe aktarabilirsiniz.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="dashboard"></a>
## Kontrol Paneli

Uygulamayı ne kadar kullandığınızı ve maliyetinin ne kadar olduğunu görmek için **Kontrol Paneli**'ni kullanın (ücretli modeller için).

![Dashboard summary](../images/screenshots/tr/dashboard-summary.png)

<br/>

> ℹ️ **NOT**<br/>
> Sadece **ücretsiz** modeller kullanıyorsanız, **maliyet** tutarları sıfır olabilir ve maliyet odaklı özetler boş görünebilir. **Özet**, **Zamana göre kullanım** ve **Model bazında kullanım** bölümleri, seçili dönemde etkinlik gösterdiğinizde yine de **çağrı sayılarını** (çeviri, yeniden yazma ve dönüştürme) gösterir.

<br/>

<a id="filter-the-data"></a>
### Verileri filtreleyin

Zaman aralığını değiştirmek için üstteki filtre düğmelerini kullanın.

![Dashboard filters](../images/screenshots/tr/dashboard-filter.png)

<br/>

> ℹ️ **NOT**<br/>
> **Kullanıcı** filtresi yalnızca web sürümünde yönetici kullanıcılar için görünür. Normal kullanıcılar bu filtreyi göremez ve masaüstü uygulamasında bu filtre kullanılamaz.

<br/>

<a id="dashboard-tabs"></a>
### Kontrol Paneli sekmeleri

- **Özet**, kullanım ve maliyet genel bakış sunar. **Güne göre kullanım** (çeviri, yeniden yazma ve dönüştürme için günlere göre yığılmış toplam **çağrı sayısı**) ve **Modele göre kullanım** (dönüştürme dahil olmak üzere model başına toplam **çağrılar**) içerir.
- **Kullanıma göre**, etkinliği çeviri dili, yeniden yazma modu ve istek metni dönüştürmeye göre ayırır.
- **Modele göre**, hangi modelleri kullandığınızı ve maliyetlerini gösterir.
- **Güne göre**, günlük toplamları gösterir.
- **Tüm Aramalar**, tam çağrı geçmişini gösterir ve dışa aktarmanıza olanak tanır.

<br/>

<a id="export-data"></a>
### Veri dışa aktar

Kontrol Paneli tabloları verileri şu biçimlerde dışa aktarabilir:

- **JSON**
- **CSV**
- **XLSX**

Bu, etkinliği uygulamanın dışında incelemek veya bir rapor paylaşmak istiyorsanız kullanışlıdır.

<br/>

<a id="delete-stored-records-for-a-model"></a>
### Bir model için depolanan kayıtları sil

**Modele göre** veya **Tüm Aramalar** sayfalarında, "çöp kutusu" simgesine tıklayarak bir model için depolanan kayıtları kaldırabilirsiniz.

> ⚠️ **UYARI**<br/>
> Depolanan kayıtların silinmesi geri alınamaz. Bu işlemi yalnızca o geçmişe artık ihtiyacınız olmadığından eminseniz kullanın.

Tüm verileri silmek veya kayıtları yaşlarına göre kaldırmak için [**Ayarlar** > **Maliyet İzleme**](#cost-tracking) sayfasına gidin. Burada tüm depolanan verileri veya belirli bir tarihten daha eski olan verileri silme seçenekleri bulunur.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="history"></a>
## Geçmiş

**Transrewrt** içindeki işlemlerinizin geçmişini, her işlemin giriş ve çıkışını görmek için **Geçmiş**'e tıklayın.

![History page](../images/screenshots/tr/history.png)

<br/>

<a id="filter-the-history"></a>
### Verileri filtrele

**Geçmiş**, **Kontrol Paneli** sayfasıyla aynı filtreleri kullanır. Zaman aralığını seçmek için bunları kullanın.

![Dashboard filters](../images/screenshots/tr/dashboard-filter.png)

<br/>

> ℹ️ **NOT**<br/>
> **Kullanıcı** filtresi yalnızca web sürümünde yönetici kullanıcılar için görünür. Normal kullanıcılar bu filtreyi göremez ve masaüstü uygulamasında bu filtre kullanılamaz.

<br/>

<a id="export-history-data"></a>
### Geçmiş verilerini dışa aktar

Geçmiş sayfası, filtrelenmiş verileri şu biçimlerde dışa aktarabilir:

- **JSON**
- **CSV**
- **XLSX**

Bu, etkinliği uygulamanın dışında incelemek veya bir rapor paylaşmak istiyorsanız kullanışlıdır.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="settings"></a>
## Ayarlar

Uygulamanın davranışını özelleştirmek için kenar çubuğundan **Ayarlar**'ı açın.

Mevcut sekmeler platforma ve rolünüze bağlıdır:

| Sekme               | Masaüstü | Web (yönetici) | Web (normal kullanıcı) |
  |-------------------|:-------:|:-----------:|:------------------:|
  | Genel Ayarlar  |   Evet   |     Evet     |        Evet         |
  | Modeller            |   Evet   |     Evet     |        Evet         |
  | Diller         |   Evet   |     Evet     |        Evet         |
  | Maliyet İzleme     |   Evet   |     Evet     |         —          |
  | İstekleri Dönüştür |   Evet   |     Evet     |        Evet         |
  | Kullanıcılar             |    —    |     Evet     |         —          |
  | API Yapılandırması        |   Evet   |     Evet     |         —          |
  | Hakkında             |   Evet   |     Evet     |        Evet         |

<br/>

> ℹ️ **NOT**<br/>
> Web sürümünde her kullanıcı kendi yapılandırmasına sahiptir. Seçili modeller, diller, genel seçenekler ve dönüşüm istekleri gibi ayarlar kullanıcı bazında saklanır. Yaptığınız değişiklikler diğer kullanıcıları etkilemez.

<br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="general-settings"></a>
### Genel ayarlar

**Genel Ayarlar**'ı kullanarak yazma davranışını, yürütme ayrıntılarının **Geçmiş** için saklanıp saklanmayacağını ve görünümü kontrol edebilirsiniz.

**Davranış**

- **ENTER için Davranış**, `Enter` tuşunun görevi çalıştırması mı yoksa yeni satır eklemesi mi seçer.
- **Yapıştırırken otomatik çevir**, metni yapıştırdığınız anda çeviriyi başlatır.
- **Sonucu panoya otomatik kopyala**, başarılı sonuçları otomatik olarak panoya kopyalar.
- **Gerçek zamanlı çeviri (yazarken)**, yazarken çeviri yapar.
- **Zaman aşımı (ms)**, gerçek zamanlı çeviri için bekleme süresini ayarlar.

**Geçmiş**

- **Yürütme geçmişini koru**, her çeviri, yeniden yazma ve dönüştürmenin giriş ve çıkış metnini kenar çubuğundaki [**Geçmiş**](#history) görünümü için saklayıp saklamayacağını kontrol eder. Devre dışı bırakıldığında onay istenir; onay verirseniz, saklanan geçmiş metni veritabanından kaldırılır.
- **Geçmiş verilerini sil**, saklanan metinleri yaşına göre (örneğin birkaç aydan eski veya **tüm veriler (temizle)**) **Verileri sil** seçeneğiyle kaldırmanıza olanak tanır. Bu yalnızca **Geçmiş** görünümü için kaydedilen yürütme metnini etkiler; maliyet veya kullanım toplamlarını **silmek değildir**. **Maliyet** verilerini kaldırmak veya kısaltmak için [**Ayarlar** > **Maliyet İzleme**](#cost-tracking) kullanın.

**Maliyet ondalık basamak sayısı:**

- **Eylemlerde maliyet bilgisini göster**, işlem başına maliyetin (varsa) ve toplam maliyetin Çevir, Yeniden Yaz ve Dönüştür çıkış panellerinde görüntülenmesini kontrol eder.
- **Maliyet ondalık basamak sayısı**, maliyet ondalıklarının nasıl gösterileceğini değiştirir.
- **Sadece Web:** **Uygulamanın etrafında bir kenar boşluğu göster**, arayüzün etrafına ekstra boşluk ekler.
- **Yazı Tipi**, metin panellerindeki yazım fontunu değiştirir.
- **Boyut**, yazı tipi boyutunu değiştirir.

**Yapılandırma Yedeği**

- **Yedeklemeye kullanım verilerini dahil et** — etkinleştirildiğinde ZIP dosyası ayrıca yürütme geçmişi ve API çağrısı verilerini içerir.
- **Yapılandırmayı yedekle** — `config.json`, `state.json`, isteğe bağlı şifreleme anahtarı, kullanıcılar, tercihler, özel istekler ve kullanım verileri (seçildiyse) içeren tek bir ZIP dosyası oluşturur (`transrewrt-config-backup-YYYY-MM-DD_HHMMSS.zip`, varsayılan olarak UTC). Başarılı bir yedeklemeden sonra onay, kaydedilen dosya adını gösterir.
- **Yedekten geri yükle** — önce bir **onay iletişim kutusu** açar. İletişim kutusu içinde yedek ZIP dosyasını seçin (**Gözat** / dosya seçici veya desteklendiğinde sürükleyip bırakma), ardından seçenekleri gözden geçirin:
  - **Kullanım verilerini geri yükle** — yedekleme sırasında kullanım dahil edildiyse, ZIP dosyasından kullanım/geçmiş verilerini içe aktarır; sadece ayarlar ve istekler istiyorsanız işaretini kaldırın.
  - **Geri yüklemeden önce eski kullanım verilerini temizle** — yedek uygulanmadan önce bu kurulumdaki mevcut kullanım/geçmişi kaldırır (isteğe bağlı; temiz bir değiştirme yapmak istediğinizde kullanın).

Web veya masaüstü sürümünde oluşturulan yedekler, diğerinde geri yüklenebilir. Masaüstü yedeği web sürümüne geri yüklenirken, veriler yönetici kullanıcısına geri yüklenir.

<br/>

<a id="models"></a>
### Modeller

Araç çubuğunda hangi modellerin görüneceğini seçmek için **Ayarlar** > **Modeller**'i kullanın.

![Settings Models tab](../images/screenshots/tr/settings-models.png)

Sayfada iki liste bulunur:

- Solda **Kullanılabilir Modeller**
- Sağda **Seçili Modeller**

Kullanışlı kontroller şunları içerir:

- **Modellerde ara...** adıyla bir model bulmak için
- Listeyi tek bir altyapıya (OpenRouter, OpenAI, Ollama, …) daraltmak için **Sağlayıcı** etiketleri
- Sadece ücretsiz modelleri göstermek için **Sadece Ücretsiz**
- Listeyi yeniden yüklemek için **Yenile**
- Sağlayıcıya göre sıralarken **Tümünü Genişlet** ve **Tümünü Daralt**

Model kimlikleri sağlayıcı önekini içerir (örneğin `openrouter/…` ve `openai/…` gibi). **OpenAI (OpenRouter)** ve **OpenAI (doğrudan)** gibi rozetler, trafiğin nasıl yönlendirildiğini gösterir.

> ℹ️ **NOT**<br/>
> **OpenRouter Body Builder** (`openrouter/bodybuilder`), genel bir sohbet modeli değil, bir yönlendirici modelidir: yanıtı, OpenRouter API istek gövdelerini açıklayan bir JSON'dur (örneğin `model` ve `messages` içeren bir `requests` dizisi). Bunu **Çevir**, **Yeniden yaz** veya **Dönüştür** için kullanırsanız, çıkış paneli tamamlanmış metin yerine bu JSON'u gösterecektir. Bu görevler için normal bir metin modeli seçin. [Body Builder model sayfasına](https://openrouter.ai/openrouter/bodybuilder) OpenRouter'da bakın.

İşlemler:

- Bir model eklemek için **Ekle**'ye veya Kullanılabilir Modeller listesindeki girişin herhangi bir yerine tıklayın.

- Bir modeli kaldırmak için **Seçili Modeller** listesinde yanındaki **X**'e tıklayın veya Kullanılabilir Modeller listesindeki girişte **Seçildi**'ye tıklayın.

- Listeyi temizlemek için **Tüm Seçimi Kaldır**'a tıklayın. Gerekli ücretsiz model listede kalır.

<br/>

> ℹ️ **NOT**<br/>
> OpenRouter'a hemen kredi eklemek istemiyorsanız, başlangıç olarak **Sadece Ücretsiz** seçeneğini etkinleştirin ve ücretsiz modelleri seçin (kredi kartı gerekmez). Ayrıca herhangi bir API anahtarı olmadan modelleri yerel olarak çalıştırmak için Ollama kullanabilirsiniz.

<br/>

<a id="languages"></a>
### Diller

Uygulamada kullanılan dil listelerini düzenlemek için **Ayarlar** > **Diller**'i kullanın.

- **En çok kullanılan diller**, **Çevir** ve **Dönüştür** bölümlerinde dil listelerinin üst kısmında sabitlenir.
- **Özel dil**, yerleşik listede olmayan bir dil eklemenizi sağlar.

Bir özel dil eklerseniz, yerleşik seçeneklerin yanında dil seçicilerinde görünür.

<br/>

<a id="cost-tracking"></a>
### Maliyet izleme

Maliyet bilgilerini yönetmek için **Ayarlar** > **Maliyet İzleme**'yi kullanın.

- **Toplam Maliyet**, biriken toplamı gösterir.
- **Değeri Kopyala**, toplamı panoya kopyalar.
- **Maliyeti Sıfırla**, kayıtlı toplamı sıfıra sıfırlar.
- **API anahtarı kullanımına göre senkronize et**, toplamı OpenRouter hesabınızın bildirdiği kullanım ile eşleşecek şekilde ayarlar (sadece OpenRouter).
- **API Anahtarı Kullanımı**, mevcutsa OpenRouter kullanım ayrıntılarını gösterir.
- **Maliyet verilerini sil**, tüm verileri veya yalnızca seçilen tarihten daha eski olanları kaldırır.

**Maliyet izleme:** OpenRouter modellerini kullandığınızda, uygulama OpenRouter'dan gelen maliyet bilgilerine dayanarak gerçek kullanımınızı ve harcamalarınızı gösterir. Diğer tüm sağlayıcılar için uygulama OpenRouter tarafından yayımlanan fiyatlar kullanılarak maliyet tahmini yapar; fiyat mevcut değilse tahmin sıfır olabilir.

<br/>

> ℹ️ **NOT**<br/>
>  **Tüm maliyet rakamları yalnızca başvuru amaçlıdır, resmi fatura değildir.**

<br/>

> ⚠️ **UYARI**<br/>
> Veri silme işlemi geri alınamaz. Silmeden önce lütfen verilerinizi yedekleyin veya [**Geçmiş**](#history) üzerinden 
> veya [**Kontrol Paneli** > **Tüm Aramalar**](#dashboard-tabs) üzerinden dışa aktarın, aksi takdirde kalıcı olarak kaybedilir. 
> Her API çağrısı girdisiyle ilgili tüm giriş/çıkış geçmişi de silinir.

<br/>

<a id="transform-prompts"></a>
### İstekleri Dönüştür

İstekleri toplu olarak yönetmek için **Ayarlar** > **İstekleri Dönüştür**'ü kullanın.

Şunları yapabilirsiniz:

- kaydedilen isteklerinizi gözden geçirin
- istekleri silin
- bir dosyadan istekleri içeri aktarın
- yedekleme veya paylaşım için istekleri dışa aktarın
- örnek istekleri istek listesine yükleyin

<br/>

<a id="users"></a>
### Kullanıcılar

**Kullanıcılar** sekmesini, web sürümünde kullanıcı hesaplarını yönetmek için kullanabilirsiniz. Kullanıcı ekleyebilir, bilgilerini güncelleyebilir, şifreleri sıfırlayabilir ve hesapları silebilirsiniz.

<br/>

<a id="api-config"></a>
### API yapılandırması

Desteklenen sağlayıcılar şunlardır: OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras ve **Ollama** (taban URL aracılığıyla yerel modeller). Sadece kullandığınız sağlayıcıları yapılandırmanız gerekir.

**Web uygulaması: yalnızca yönetici**

API anahtarları sistem veya Docker ortam değişkenleri aracılığıyla yapılandırılır — web arayüzünde girilmez. Bu sayfa hangi sağlayıcıların anahtarla yapılandırıldığını gösterir ve her birini **`Test`** düğmesine tıklayarak test etmenizi sağlar.

<br/>

> ℹ️ **NOT**<br/>
> Bir API anahtarını değiştirmek için sistem veya Docker yapılandırmanızdaki ortam değişkenini güncelleyin ve sunucuyu veya konteyneri yeniden başlatın.

> ℹ️ **NOT**<br/>
> **Yapılandırma yedekleri** ([**Genel ayarlar** → Yapılandırma Yedeği](#general-settings) bölümüne bakın) ZIP dosyasındaki `config.json` içine **çözümlenmiş** sağlayıcı anahtarlarını gömebilir. Bu ZIP dosyasının geri yüklenmesi, bu anahtarları sunucunun kalıcı yapılandırma dosyasına **kopyalamaz** — canlı anahtarlar hâlâ burada anlatıldığı gibi ortamdan ve mevcut dosya durumundan gelir.

<br/>

**Masaüstü uygulaması**

Kullandığınız her sağlayıcı için API anahtarlarını depolamak üzere **API Yapılandırması**'nı kullanın. Ollama için bir API anahtarı yerine **taban URL** girin.

<br/>

> 💡 **İpucu** <br/>
> API anahtarı kullanmak istemiyor veya ücret ödemek istemiyorsanız, [Ollama'yı indirip](https://ollama.com) makinenizde modelleri (örneğin `translategemma:4b`) ücretsiz olarak yerel olarak çalıştırabilirsiniz. Alternatif olarak, ücretsiz modellerini kullanmak için kredi kartı gerektirmeyen ücretsiz bir OpenRouter hesabı oluşturabilir veya Cerebras, Google, Groq veya Mistral AI'dan ücretsiz bir API anahtarı edinebilirsiniz.

<br/>

- Sadece ihtiyacınız olan sağlayıcıları ekleyin. **Ayarlar** > **Modeller** bölümünde her model kimliği sağlayıcıyla başlar (örneğin `openrouter/openrouter/free`, `openai/gpt-4o`, `ollama/llama3`).

Bir API anahtarı eklemek için değeri metin alanına girin ve **`Kaydet`** düğmesine tıklayın. Mevcut bir anahtarı değiştirmek için **`Düzenle`** düğmesine tıklayın. Bir anahtarın çalışıp çalışmadığını doğrulamak için **`Test`** düğmesine tıklayın. Ollama taban URL'si için bağlantıyı kontrol etmek amacıyla her zaman **`Test`** düğmesine tıklayın.

<br/>

> ℹ️ **NOT**<br/>
> Mevcut bir API anahtarının değerini göremezsiniz. Sadece **`Düzenle`** düğmesini kullanarak değiştirebilirsiniz.
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
### Uygulama metni çevirmeyecek, yeniden yazmayacak veya dönüştürmeyecektir

Aşağıdakileri kontrol edin:

- Araç çubuğunda bir model seçtiğinizden emin olun
- [**Ayarlar** > **Modeller**](#models) bölümünde en az bir model listelenmiş olmalıdır
- API yapılandırmanızın çalışır durumda olduğundan emin olun

Masaüstü uygulamasını kullanıyorsanız:

1. [**Ayarlar** > **API Yapılandırması**](#api-config) bölümüne gidin.
2. En az bir API anahtarının kaydedildiğini kontrol edin.
3. Anahtarın çalıştığını doğrulamak için sağlayıcının yanındaki **Test** düğmesine tıklayın.

<br/>

<a id="the-model-list-is-empty"></a>
### Model listesi boş

[**Ayarlar** > **Modeller**](#models) bölümüne gidin ve **Yenile**'ye tıklayın.

Gerekirse:

- Bir model arayın
- **Sadece Ücretsiz** seçeneğini etkinleştirin
- Bir veya daha fazla modeli **Seçili Modeller** listesine ekleyin

<br/>

<a id="the-result-is-too-slow-or-too-expensive"></a>
### Sonuç çok yavaş veya çok maliyetli

Aşağıdakilerden birini veya birkaçını deneyin:

- Farklı bir model seçin
- Daha kısa bir giriş kullanın
- [**Ayarlar** > **Genel Ayarlar**](#general-settings) bölümünde **Zaman aşımı (ms):** seçeneğini devre dışı bırakın
- Basit görevler için ücretsiz modeller kullanın (bkz. [Modeller](#models))

<br/>

<a id="the-interface-is-in-the-wrong-language"></a>
### Arayüz yanlış dilde

[Araç çubuğundaki](#toolbar) dünya simgesine tıklayıp tercih ettiğiniz **Arayüz dili**ni seçin.

<br/>

<a id="the-text-is-too-small-or-hard-to-read"></a>
### Metin çok küçük veya okunması zor

[**Ayarlar** > **Genel Ayarlar**](#general-settings) bölümüne gidin ve aşağıdakileri değiştirin:

- **Yazı Tipi Ailesi**
- **Boyut**

<br/>

<a id="dashboard-charts-are-empty"></a>
### Kontrol Paneli grafikleri boş

Aşağıdaki durumlarda bu normaldir:

- Sadece **ücretsiz modeller** kullanıyorsanız ve **maliyet** rakamlarına bakıyorsanız (bu değerler sıfır olabilir); **Özet** sekmesindeki **kullanım** çağrı sayısı grafikleri için hâlâ seçili dönemden veri gelmesi gerekir
- Seçili **zaman filtresi**, çağrıların yapıldığı dönemi kapsamıyor olabilir — kontrol etmek için **Tümü** seçeneğini deneyin

Grafikler hâlâ **Tümü** seçildikten sonra boşsa, çağrıların [**Geçmiş**](#history) sekmesinde veya **Tüm Aramalar** sekmesinde görünür olduğundan emin olun.

<br/>

<a id="cost-shows-not-available-or-seems-wrong"></a>
### Maliyet "mevcut değil" olarak gösteriliyor veya hatalı görünüyor

**OpenRouter** üzerinden modeller kullandığınızda, uygulama OpenRouter tarafından bildirilen gerçek harcamanızı gösterir.

**Diğer sağlayıcılar** (OpenAI doğrudan, Anthropic doğrudan, vb.) için maliyet, OpenRouter tarafından yayımlanan fiyatlandırma verilerine göre **tahmini** olarak hesaplanır. Bir model için eşleşen bir fiyat bulunamazsa, maliyet **mevcut değil** olarak gösterilir ve toplamınıza eklenmez.

<br/>

<a id="total-cost-does-not-match-my-provider-bill"></a>
### Toplam maliyet sağlayıcınızın faturanızla eşleşmiyor

Uygulamadaki tüm maliyet rakamları yalnızca **referans amaçlı tahminlerdir**, resmi fatura beyanları değildir.

Toplamı gerçek OpenRouter harcamanıza daha yakın hâle getirmek için [**Ayarlar** > **Maliyet İzleme**](#cost-tracking) sayfasını açın ve **API anahtarı kullanımına göre senkronize et** seçeneğine tıklayın.

<br/>

<a id="the-history-page-is-missing-from-the-sidebar"></a>
### Geçmiş sayfası kenar çubuğunda eksik

**Yürütme geçmişini koru** seçeneği kapalı olabilir. [**Ayarlar** > **Genel Ayarlar**](#general-settings) sayfasını açın ve etkinleştirin. Bu seçeneğin açılmasının, daha önce silinmiş geçmiş verilerini geri getirmediğine dikkat edin.

<br/>

<a id="web-app-session-expired"></a>
### Web uygulaması: beklenmedik şekilde giriş sayfasına yönlendiriliyorsunuz

Oturum süreniz dolmuş olabilir. Yeniden giriş yapın. Sık sık oluyorsa, sunucu yapılandırmasında oturum süresi ayarlarını kontrol edin.

<br/>

<a id="web-admin-forgot-or-lost-a-password"></a>
### Web yöneticisi: şifreyi unuttum veya kaybettim

Bu, masaüstü (Electron) uygulaması değil, **kendi barındırılan web uygulaması** (Docker) için geçerlidir.

- Başka bir yönetici hâlâ giriş yapabiliyorsa, [**Ayarlar** > **Kullanıcılar**](#users) sayfasını açabilir, hesabı seçebilir ve orada **yeni şifre** belirleyebilir.
- Eğer **erişiminiz engellendiyse** ancak makineye veya konteynere **shell erişiminiz varsa**, imajla birlikte gelen yardımcı aracı kullanarak şifreyi sıfırlayın (varsayılan adı `transrewrt` ise değiştirin ve şifreniz boşluk veya özel karakter içeriyorsa tırnak içine alın):

```bash
docker exec transrewrt reset-web-password '<username>' '<new-password>'
```

Varsayılan yönetici kullanıcı adı başka hesap oluşturmadıysanız `admin`'dir. Yalnızca bir argüman verirseniz, bu `admin` için yeni şifre olarak kabul edilir.

Docker yerine bir **kaynak kontrolünden** çalıştırıyorsanız, bunu kullanın:

```bash
pnpm run reset-web-password -- <username> <new-password>
```

Betik, SQLite veritabanındaki kullanıcı kaydını günceller (ve eksikse `admin` kullanıcısını oluşturabilir). Şifreyi sıfırladıktan sonra yeni şifreyle oturum açın.

<br/>

<a id="dashboard-shows-no-data-for-other-users"></a>
### Kontrol Paneli diğer kullanıcılar için veri göstermiyor (web)

Yalnızca **yöneticiler**, **Kullanıcı** filtresi aracılığıyla tüm kullanıcıların verilerini görüntüleyebilir. Normal kullanıcılar, tasarımı gereği yalnızca kendi etkinliklerini görür.

<br/>

<a id="i-changed-a-prompt-and-lost-the-edits"></a>
### Bir istemi değiştirdim ve düzenlemeleri kaybettim

Bir istemi düzenlerken, her zaman **Kaydet**'e tıklamadan önce **Çalıtır'a geri dön**'e tıklayın.

<br/><br/>

<a id="quick-tips"></a>
## Hızlı ipuçları

- [**Çevir**](#translate) ile başlayarak, [**Yeniden yaz**](#rewrite) veya [**Dönüştür**](#transform) adımına geçmeden önce kurulumunuzun çalıştığından emin olun.
- Günlük kullanım için kelime düzenlemelerinde [**Yeniden yaz**](#rewrite) seçeneğini kullanın.
- Belirli bir görev için tekrarlanabilir bir iş akışı gerekiyorsa [**Dönüştür**](#transform) seçeneğini kullanın.
- Kullanım ve maliyeti takip etmek istiyorsanız [**Kontrol Paneli**](#dashboard) seçeneğini kullanın.
- Geçmiş işlemlerin tam giriş/çıkış metnini incelemek için [**Geçmiş**](#history) seçeneğini kullanın.
- Güvenli tutmak istediğiniz bir istem kitaplığı oluşturuyorsanız veya başkalarıyla paylaşmak istiyorsanız istemleri düzenli olarak dışa aktarın (bkz. [İstekleri Dönüştür](#transform-prompts)).

<br/><br/>

<a id="disclaimer"></a>
## Uyarı

Ürün adları ve simgeleri ilgili sahiplerine aittir ve sadece tanımlama amacıyla kullanılır. Bu yazılım, bahsedilen markalarla bağlantılı değildir veya onların desteğiyle değildir.

<br/><br/>

<a id="license"></a>
## Lisans

Telif Hakkı © 2026 Waldemar Scudeller Jr.

[Apache License 2.0](../LICENSE)
