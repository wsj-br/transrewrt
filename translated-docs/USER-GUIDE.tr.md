---
translated_at: "2026-03-24T03:48:08.463Z"
source_hash: "fc671c16dd34a2c355752935670712beb8abd2ae65453de44983a2f2f0701696"
source_mtime: 1774306679773.736
model: "qwen/qwen3-235b-a22b-2507"
---
![Transrewrt başlık görseli](../images/transrewrt_banner.png)


<a id="transrewrt-kullanıcı-kılavuzu"></a>
# Kullanıcı Kılavuzu

<br/>

<a id="giriş"></a>
## Giriş

Transrewrt, metinlerle çalışmanıza üç temel yoldan yardımcı olur:

- **Çevir** - metni bir dilden diğerine dönüştür.
- **Yeniden Yaz** - metni daha açık, daha kısa ya da daha resmi gibi farklı stillerde yeniden ifade et.
- **Dönüştür** - özel yapay zeka talimatları olan "prompt" adı verilen özel talimatlarla metni işleyin.

<br/>

Bu kılavuz, uygulama kurulup çalıştırıldıktan sonra nasıl kullanılacağını açıklar. Kurulum adımları için ana **[README](README.tr.md)** dosyasına bakın.

<br/>

> ℹ️ **NOT**<br/>
> Transrewrt, Windows ve Linux için masaüstü uygulaması olarak ve kullanıcıların kendisi barındırabileceği bir web uygulaması olarak mevcuttur. Bu kılavuz, uygulamanın günlük kullanımına odaklanmaktadır. Bir özellik yalnızca belirli bir sürüm için geçerliyse, bu açıkça belirtilir.

<small>**Diğer dillerde oku:** [İngilizce (İngiltere)](USER-GUIDE.tr.md) · [Portekizce (BR)](USER-GUIDE.pt-BR.md) · [Arapça](USER-GUIDE.ar.md) · [Bengalce](USER-GUIDE.bn.md) · [Katalanca](USER-GUIDE.ca.md) · [Basitleştirilmiş Çince](USER-GUIDE.zh-CN.md) · [Geleneksel Çince](USER-GUIDE.zh-TW.md) · [Hırvatça](USER-GUIDE.hr.md) · [Çekçe](USER-GUIDE.cs.md) · [Felemenkçe](USER-GUIDE.nl.md) · [İngilizce (ABD)](USER-GUIDE.en-US.md) · [Filipince](USER-GUIDE.tl.md) · [Fransızca](USER-GUIDE.fr.md) · [Almanca](USER-GUIDE.de.md) · [Yunanca](USER-GUIDE.el.md) · [Hintçe](USER-GUIDE.hi.md) · [Macarca](USER-GUIDE.hu.md) · [İtalyanca](USER-GUIDE.it.md) · [Japonca](USER-GUIDE.ja.md) · [Javaca](USER-GUIDE.jv.md) · [Korece](USER-GUIDE.ko.md) · [Malezya Dili](USER-GUIDE.ms.md) · [Farsça](USER-GUIDE.fa.md) · [Lehçe](USER-GUIDE.pl.md) · [Portekizce (PT)](USER-GUIDE.pt.md) · [Pencapça](USER-GUIDE.pa.md) · [Rumence](USER-GUIDE.ro.md) · [Rusça](USER-GUIDE.ru.md) · [Slovakça](USER-GUIDE.sk.md) · [İspanyolca](USER-GUIDE.es.md) · [Svahili](USER-GUIDE.sw.md) · [İsveççe](USER-GUIDE.sv.md) · [Teluguca](USER-GUIDE.te.md) · [Tayca](USER-GUIDE.th.md) · [Türkçe](USER-GUIDE.tr.md) · [Ukraynaca](USER-GUIDE.uk.md) · [Vietnamca](USER-GUIDE.vi.md)</small>

<br/>

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**İçindekiler** 

- [Başlamadan önce](#başlamadan-önce)
  - [Ücretsiz OpenRouter API anahtarı nasıl alınır? (masaüstü uygulaması)](#ücretsiz-openrouter-api-anahtarı-nasıl-alınır-masaüstü-uygulaması)
- [Başlarken](#başlarken)
- [Pencerenin ana bölümleri](#pencerenin-ana-bölümleri)
  - [Kenar çubuğu](#kenar-çubuğu)
  - [Araç çubuğu](#araç-çubuğu)
  - [Giriş ve çıkış panelleri](#giriş-ve-çıkış-panelleri)
- [Çevir](#çevir)
  - [Metin çevir](#metin-çevir)
  - [Dil seçimi](#dil-seçimi)
  - [Yararlı çeviri ayarları](#yararlı-çeviri-ayarları)
  - [Klavye kısayolları](#klavye-kısayolları)
- [Yeniden Yaz](#yeniden-yaz)
  - [Metni yeniden yaz](#metni-yeniden-yaz)
- [Dönüştür](#dönüştür)
  - [Mevcut bir prompt'u çalıştır](#mevcut-bir-promptu-çalıştır)
  - [Henüz prompt'um yoksa](#henüz-promptum-yoksa)
  - [Hızlıca bir prompt oluştur](#hızlıca-bir-prompt-oluştur)
  - [Bir prompt'u düzenle](#bir-promptu-düzenle)
  - [Kullanmadan önce bir prompt'u test et](#kullanmadan-önce-bir-promptu-test-et)
  - [Kayıtlı prompt'ları yönet](#kayıtlı-promptları-yönet)
- [Kontrol Paneli](#kontrol-paneli)
  - [Verileri filtrele](#verileri-filtrele)
  - [Kontrol paneli sekmeleri](#kontrol-paneli-sekmeleri)
  - [Verileri dışa aktar](#verileri-dışa-aktar)
  - [Bir model için saklanan kayıtları sil](#bir-model-için-saklanan-kayıtları-sil)
- [Geçmiş](#geçmiş)
  - [Verileri filtrele](#verileri-filtrele-1)
  - [Geçmiş verilerini dışa aktar](#geçmiş-verilerini-dışa-aktar)
- [Ayarlar](#ayarlar)
  - [Genel ayarlar](#genel-ayarlar)
  - [Modeller](#modeller)
  - [Diller](#diller)
  - [Maliyet takibi](#maliyet-takibi)
  - [Dönüştürme promptları](#dönüştürme-promptları)
  - [Kullanıcılar](#kullanıcılar)
  - [API yapılandırması](#api-yapılandırması)
  - [Hakkında](#hakkında)
- [Sık karşılaşılan sorunlar](#sık-karşılaşılan-sorunlar)
  - [Uygulama metni çevirmiyor, yeniden yazmıyor veya dönüştürmüyor](#uygulama-metni-çevirmiyor-yeniden-yazmıyor-veya-dönüştürmüyor)
  - [Model listesi boş](#model-listesi-boş)
  - [Sonuç çok yavaş veya çok pahalı](#sonuç-çok-yavaş-veya-çok-pahalı)
  - [Arayüz yanlış dilde](#arayüz-yanlış-dilde)
  - [Metin çok küçük veya okunması zor](#metin-çok-küçük-veya-okunması-zor)
  - [Kontrol paneli grafikleri boş](#kontrol-paneli-grafikleri-boş)
  - [Maliyet "mevcut değil" veya yanlış görünüyor](#maliyet-mevcut-değil-veya-yanlış-görünüyor)
  - [Toplam maliyet sağlayıcının faturasıyla eşleşmiyor](#toplam-maliyet-sağlayıcının-faturasıyla-eşleşmiyor)
  - [Kenar çubuğunda Geçmiş sayfası eksik](#kenar-çubuğunda-geçmiş-sayfası-eksik)
  - [Web uygulaması: beklenmedik şekilde oturum açma sayfasına yönlendiriliyor](#web-uygulaması-beklenmedik-şekilde-oturum-açma-sayfasına-yönlendiriliyor)
  - [Kontrol paneli diğer kullanıcılar için veri göstermiyor (web)](#kontrol-paneli-diğer-kullanıcılar-için-veri-göstermiyor-web)
  - [Bir prompt'ta değişiklik yaptım ve düzenlemeleri kaybettim](#bir-promptta-değişiklik-yaptım-ve-düzenlemeleri-kaybettim)
- [Hızlı ipuçları](#hızlı-ipuçları)
- [Sorumluluk reddi](#sorumluluk-reddi)
- [Lisans](#lisans)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="başlamadan-önce"></a>

## Başlamadan önce

Transrewrt'ı kullanmak için en az bir yapay zeka sağlayıcısına erişmeniz gerekir. Desteklenen sağlayıcılar şunlardır: [OpenRouter](https://openrouter.ai) (çok sayıda modeli bir araya getirir), OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI ve yerel modeller için [Ollama](https://ollama.com).

Başlamak için ücretli bir model seçmeniz gerekmez. OpenRouter API anahtarınızı eklediğiniz anda, uygulama otomatik olarak yerleşik bir **ücretsiz** OpenRouter seçeneğini etkinleştirir. Bu sayede hemen çeviri yapmaya, metinleri yeniden yazmaya ve dönüştürmeye başlayabilirsiniz.

Açık bir dille ifade edersek:

- Bir **model**, işi yapan yapay zeka altyapısıdır. Modeller bir **sağlayıcı öneki** ile birlikte listelenir (örneğin `openrouter/…`, `openai/…`, `ollama/…`).
- Bir **API anahtarı** (veya Ollama için bir **temel URL**), uygulamanın bu sağlayıcıya nasıl ulaşacağını belirler.

Eğer **masaüstü uygulamasını** kullanıyorsanız, kullandığınız her sağlayıcı için [**Ayarlar** > **API Yapılandırması**](#api-config) bölümünde anahtar ekleyin. Sadece OpenRouter kullanacaksanız aşağıda [Bir API anahtarı nasıl alınır](#how-to-get-an-api-key-desktop-app) bölümüne bakın. Eğer bir API anahtarı kullanmak istemiyorsanız, [ollama.com](https://ollama.com) adresinden Ollama'yı yükleyebilir ve yerel modeller kullanabilirsiniz.

Eğer **web sürümünü** kullanıyorsanız, sağlayıcıları sunucu sahibi ortam değişkenleriyle yapılandırır, bu yüzden normalde kendiniz API anahtarı girmemeniz gerekir.

<br/>

<a id="how-to-get-an-api-key-desktop-app"></a>
### Ücretsiz OpenRouter API anahtarı nasıl alınır (masaüstü uygulaması)

Masaüstü uygulamasını kullanıyorsanız, aşağıdaki adımları izleyin:

1. Web tarayıcınızda [OpenRouter](https://openrouter.ai) sayfasına gidin.
2. Bir hesap oluşturun veya oturum açın.
3. [Anahtarlar](https://openrouter.ai/keys) sayfasını açın.
4. Yeni bir API anahtarı oluşturmak için düğmeye tıklayın.
5. Anahtarı daha sonra tanıyabilmeniz için bir ad verin.
6. Yeni API anahtarını kopyalayın.
7. Transrewrt'ya dönün ve **Ayarlar** > **API Yapılandırması** sayfasını açın.
8. Anahtarı **OpenRouter API anahtarı** alanına yapıştırın (**Ayarlar** > **API Yapılandırması** altında).
9. İşe yaradığını doğrulamak için **OpenRouter anahtarını test et** düğmesine tıklayın.

<br/>

> ℹ️ **NOT**<br/>
> Kredi kartı eklemeksizin OpenRouter'ın ücretsiz yolunu veya mevcut diğer ücretsiz modellerden herhangi birini kullanarak başlayabilirsiniz. Çoğu durumda bu, ücretli bir model seçmeden Transrewrt'ı kullanmaya başlamak için yeterli olur. Alternatif olarak, herhangi bir API anahtarı olmadan yerel olarak modeller çalıştırmak için Ollama kullanabilirsiniz.

<br/><br/>

<a id="getting-started"></a>
## Başlarken

İlk kez Transrewrt kullanıyorsanız şu sırayı izleyin:

1. Uygulamayı açın.
2. Gerekirse dünya simgesinden **Arayüz dilini** seçin.
3. Eğer **masaüstü uygulamasını** kullanıyorsanız, [**Ayarlar** > **API Yapılandırması**](#api-config) sayfasını açın, en az bir sağlayıcı için bir API anahtarı ekleyin (örneğin OpenRouter) ve işe yaradığını doğrulamak için **Test** düğmesine tıklayın.
4. [**Ayarlar** > **Modeller**](#models) sayfasını açın ve **Seçilen Modeller** listesine bir veya daha fazla model ekleyin.
5. [**Ayarlar** > **Diller**](#languages) sayfasını açın ve en çok kullandığınız dillerin en üstte görünmesini istiyorsanız **En çok kullanılan dilleriniz**i seçin.
6. **Çevir** bölümüne gidip basit bir çeviri çalıştırarak her şeyin çalıştığını doğrulayın.
7. Çalıştığını doğruladıktan sonra **Yeniden Yaz** seçeneğini, ardından **Dönüştür** seçeneğini deneyin.

Bu sıralamanın önemi vardır. En yaygın ilk kullanımda yapılan hatayı engeller: Uygulamanın, geçerli bir API bağlantısı veya seçili bir modeli olmamasına rağmen bir görev başlatmaya çalışmayı içerir.

<br/><br/>

<a id="main-parts-of-the-window"></a>
## Pencerenin ana bölümleri

Uygulama üç ana bölüme ayrılmıştır:

- Soldaki **kenar çubuğu**.
- Üstteki **araç çubuğu**.
- Merkezdeki **çalışma alanı**.

<br/>

<a id="sidebar"></a>
### Kenar çubuğu

Uygulama içinde hareket etmek için kenar çubuğunu kullanın. Ekran alanını artırmak için kenar çubuğunu uygulama logosunun yanındaki simgeye tıklayarak daraltabilirsiniz.

<br/>

<table>
  <tr>
    <td valign="top">
       <img src="../images/screenshots/tr/sidebar.png" alt="Uygulama Kenar Çubuğu" style="max-width: 100%; border: 1px solid #ddd; border-radius: 4px;">
    </td>
    <td valign="top">
      <br/><br/>
      <ul>
        <li><strong>Çevir</strong>, çeviri çalışma alanını açar.</li><br/>
        <li><strong>Yeniden Yaz</strong>, yeniden yazma çalışma alanını açar.</li><br/>
        <li><strong>Dönüştür</strong>, özel talimat çalışma alanını açar.</li><br/>
        <li><strong>Pano</strong>, kullanım ve maliyet bilgilerini gösterir.</li><br/>
        <li><strong>Ayarlar</strong>, ayarlar panelini açar.</li><br/>
        <li><strong>Geçmiş</strong>, girdi ve çıktı metinleriyle birlikte kullanım geçmişini gösterir.</li><br/>
        <li><strong>Kullanıcı</strong>, oturum açmış kullanıcının kullanıcı adını gösterir (sadece web için).</li>
      </ul>
    </td>
  </tr>
</table>

<br/>

<a id="toolbar"></a>

### Araç Çubuğu

Araç çubuğu, uygulama içinde nerede olduğunuza göre hafif değişiklikler gösterebilir.

- Sol tarafta, geçerli sayfanın adı gösterilir.
- Sağ tarafta ise **model seçici** ve **Arayüz dili** denetimi yer alır.

**Model seçici**, mevcut görev için hangi yapay zekâ altyapısını kullanacağınızı seçmenizi sağlar.

  ![Model seçici](../images/screenshots/tr/model-selector.png)

> ℹ️ **NOT**<br/>
> Bazı ücretsiz modeller her zaman erişilebilir olmayabilir — arada bir çevrimdışı olabilir ya da kullanım sınırına ulaşmış olabilir. Böyle bir durumda uygulama, ilgili modeli otomatik olarak kullanılabilir liste içinden kaldıracaktır.<br/>
> Hangi modellerin görüneceğini kontrol etmek için [**Ayarlar** > **Modeller**](#models) bölümüne gidin ve model listenizi düzenleyin. 
> Ayrıca model ayarlarını araç çubuğundaki model adının solundaki sağlayıcı simgesine tıklayarak doğrudan da açabilirsiniz.

<br/>

**Dünya simgesi + dil kodu**, menü ve butonlar gibi uygulama arayüzünün dilini değiştirir. Ancak bu işlem, **Çevir** sekmesinde kullanılan çeviri dillerini **değiştirmez**.

  ![Arayüz dili seçici](../images/screenshots/tr/language-selector.png)

<br/>

<a id="input-and-output-panels"></a>
### Giriş ve çıkış panelleri

Çoğu çalışma alanı, sol tarafta bulunan **Giriş** paneli ve sağ tarafta bulunan **Çıkış** panelini kullanır.

**Giriş** paneli aşağıdakileri gösterir:

- Karakter sayısı
- Kelime sayısı
- Paragraf sayısı

**Çıkış** paneli ise aşağıdakileri gösterebilir:

- Görevin tamamlanma süresi
- Görevin maliyeti (mevcutsa)
- Toplam birikimli maliyet
- **TPS** (saniye başına token sayısı)
- Karakter, kelime ve paragraf sayısı
- Kullanılan model

Teknik terimler hakkında merakınız varsa:

- **Token**, metnin küçük bir parçasını ifade eder. Bir kelimenin bir bölümü ya da kısa bir kelime olarak düşünebilirsiniz.
- **TPS**, modelin saniyede kaç tane bu metin parçasını işlediğini belirtir.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="translate"></a>
## Çevir

Bir metni bir dilden diğerine dönüştürmek istediğinizde **Çevir** sekmesini kullanın.

![Çevir çalışma alanı](../images/screenshots/tr/translate.png)

<br/>

<a id="translate-text"></a>
### Metin çevirme

1. **Çevir** sekmesini açın.
2. **Kaynak** olarak bir dil seçin.
3. **Hedef** olarak bir dil seçin.
4. Araç çubuğundan bir model seçin.
5. **Giriş** alanına metin yazın veya yapıştırın.
6. **Çevir** butonuna tıklayın.
7. Sonucu **Çıkış** panellerinde okuyun.
8. Sonucu kopyalamak istiyorsanız kopyalama butonunu kullanın.

<br/>

<a id="language-selection"></a>
### Dil seçimi

- **Kaynak** alanı belirli bir dil olabilir veya **Dili Algıla** seçeneği olabilir.
- **Hedef**, sonucun hangi dilde olmasını istediğinizi belirtir.

Seçili **Üst düzey dilleriniz**, listede en üstte görünür. Bunları [**Ayarlar** > **Diller**](#languages) bölümünde ayarlayabilirsiniz.

<br/>

<a id="helpful-translation-settings"></a>
### Yararlı çeviri ayarları

[**Ayarlar** > **Genel Ayarlar**](#general-settings) bölümünde çeviri davranışını değiştirebilirsiniz:

- **Yapıştırınca otomatik çevir**, metni yapıştırdığınız anda çeviri işlemini başlatır.
- **Sonucu panoya otomatik kopyala**, başarılı bir çeviri sonrasında sonucu otomatik olarak kopyalar.
- **Gerçek zamanlı çeviri (yazarken)**, metin yazarken çeviriyi çalıştırır.
- **Zaman aşımı (ms)**, gerçek zamanlı çeviri başlatılmadan önce uygulamanın kaç milisaniye bekleyeceğini ayarlar.

<br/>

<a id="keyboard-shortcuts"></a>
### Klavye kısayolları

[**Ayarlar** > **Genel Ayarlar**](#general-settings) bölümünde, **ENTER tuşunun davranışı** `Enter` tuşuna basıldığında ne olacağını belirler:

- **Enter**, görevi çalıştırır; **Shift+Enter** yeni satır ekler.
- Ya da uygulama bunun tersini yapar.

Geçerli mod ayrıca **Çevir** butonunda da gösterilir.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="rewrite"></a>
## Yeniden Yaz

Ana anlamı değiştirmeden metnin ifade biçimini geliştirmek istiyorsanız **Yeniden Yaz** sekmesini kullanın.

![Yeniden Yaz çalışma alanı](../images/screenshots/tr/rewrite.png)

Bu işlev faydalıdır:

- Yazım ve dilbilgisi hatalarını düzeltmek için
- Metni daha anlaşılır hale getirmek için
- Metni daha resmi ya da daha gayriresmi hale getirmek için
- Metni kısaltmak ya da uzatmak için
- Metnin daha teknik bir hava alması için

<br/>

<a id="rewrite-text"></a>

### Metni Yeniden Yaz

1. **Yeniden Yaz** seçeneğini açın.
2. Bir **Mod** seçin.
3. Araç çubuğundan bir model seçin.
4. Metni **Giriş** alanına yazın veya yapıştırın.
5. **Yeniden Yaz** seçeneğine tıklayın.
6. Sonucu **Çıktı** alanında inceleyin.

[**Çevir**](#keyboard-shortcuts) bölümünde açıklandığı gibi Enter tuşunun davranışı burada da geçerlidir.

<br/>

> 💡 **İPUCU**<br/>
> "**İmla ve Dilbilgisi Denetle**" modunu kullandığınızda, çıktı panelinde bir `Değişiklikleri göster` düğmesi görünür.
> Uygulanan düzeltmelerin, metninizde yapılan belirli değişikliklerin görüntülenmesini açmak veya kapatmak için bu düğmeye tıklayın.


<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="transform"></a>
## Dönüştür

Yapay zekanın özel talimatlar takip etmesini istediğiniz zaman **Dönüştür**'ü kullanın.

![Dönüştür çalışma alanı](../images/screenshots/tr/transform.png)

Bu, uygulamanın en esnek bölümüdür. Bu altyapıyı şu tür görevlerde kullanabilirsiniz:

- notları özetleme
- ham metni düzenlenmiş bir elektronik postaya dönüştürme
- önemli noktaları çıkarma
- metni belirli bir biçime dönüştürme

<br/>

<a id="run-an-existing-prompt"></a>
### Var olan bir komutu çalıştırın

1. **Dönüştür**'ü açın.
2. Komut listesinden bir komut seçin.
3. Eğer bir **Hedef** dil kutusu görünüyorsa, isterseniz bir dil seçin.
4. Metni **Giriş** alanına yazın veya yapıştırın.
5. **Dönüştür**'e tıklayın.
6. Sonucu **Çıktı** alanında okuyun.

<br/>

<a id="if-you-have-no-prompts-yet"></a>
### Henüz hiçbir komutunuz yoksa

Komut listeniz boşsa **Örnek komutları yükle**'ye tıklayın. Bu işlem, hızlıca başlamanızı sağlayan yerleşik örnekleri ekler.

<br/>

> ℹ️ **NOT**<br/>
> Örnek komutlar İngilizce olarak verilir. Yükledikten sonra bir komutu düzenleyebilir ve **Komutu çevir** seçeneğini kullanarak kendi dilinize çevirebilirsiniz.

<br/>

<a id="create-a-prompt-quickly"></a>
### Hızlıca bir komut oluşturun

Bir komut oluşturmanın en hızlı yolu:

1. **Yeni komut**'a tıklayın.
2. **Komut oluştur**'a tıklayın.
3. Komutun ne yapmasını istediğinizi açıklayın.
4. Bir model seçin.
5. Uygulamanın sizin için bir taslak oluşturmasına izin verin.
6. Taslağı inceleyin ve **Kaydet**'e tıklayın.

![Komut oluştur](../images/screenshots/tr/transform-generate.png)


<br/>

<a id="edit-a-prompt"></a>
### Bir komutu düzenle

Bir komut oluştururken ya da düzenlerken sol tarafta bir düzenleyici, sağ tarafta ise bir test alanı görünür.

![Dönüştür komut düzenleyici](../images/screenshots/tr/transform-prompt-edit.png)

Ana alanlar şunlardır:

- **Komut adı**: komut listesinde gösterilen ad.
- **Komut talimatları (isteğe bağlı)**: komut çalıştırıldığında kullanıcıya gösterilen kısa bir ipucu.
- **Model Rolü**: yapay zekaya verilen genel rol, örneğin 'Yararlı bir asistan olacaksınız.'
- **Model Talimatları (satırbaşına birer tane)**: yapay zekanın izlemesini istediğiniz özel kurallar.
- **Çıktı tanımı**: sonucu tanımlayan kısa bir kelime, örneğin 'özet' ya da 'yeniden yaz'.
- **Sıcaklık (0.0 → 1.0)**: modelin nasıl davranacağı; aşağıya bakın.
- **Hedef dil iste**: komut çalıştırıldığında bir hedef dil seçici ekler.

**Sıcaklık** gibi teknik bir terimle ilk kez tanışıyorsanız, bunu şöyle düşünebilirsiniz:

- **Daha düşük** bir sıcaklık, daha istikrarlı, öngörülebilir sonuçlar verir.
- **Daha yüksek** bir sıcaklık, daha fazla çeşitlilik ve yaratıcılık sağlar.

Ayrıca şu seçenekleri de kullanabilirsiniz:

- **`Komut oluştur`**: basit bir açıklamaya göre yeni bir taslak oluşturun
- **`Komutu geliştir`**: mevcut bir komutu iyileştirin
- **`Komutu çevir`**: komut alanlarını çevirin

<br/>

> ⚠️ **UYARI**<br/>
> **`Geri Dön`**'e tıklamadan önce **`Kaydet`**'e tıklayın. Kaydetmeden önce geri dönerseniz değişiklikleriniz kaybolur.

<br/>

<a id="test-a-prompt-before-using-it"></a>
### Bir komutu kullanmadan önce test edin

Sağ taraftaki test paneli, günlük işlerinizde kullanmadan önce komutunuzu örnek metinlerle denemenizi sağlar.

Bu yöntem şu durumlarda faydalıdır:

- yeni bir komut oluşturuyorsanız
- iki komut sürümünü karşılaştırıyorsanız
- tonunuzu, uzunluğu veya çıktı biçimini kontrol etmek istiyorsanız

<br/>

<a id="manage-saved-prompts"></a>
### Kayıtlı komutları yönetin

Kayıtlı komutları merkezi bir yerden yönetmek için [**Ayarlar** > **Dönüştür Komutları**](#transform-prompts) bölümüne gidin.

Burada şunları yapabilirsiniz:

- komutlarınızı listeleme ve silme
- komutları **JSON**, **CSV** veya **XLSX** olarak dışa aktarma
- bir dosyadan komut içe aktarma

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="dashboard"></a>

## Kontrol Paneli

Uygulamayı ne kadar kullandığınızı ve maliyetinin ne kadar olduğunu görmek için **Kontrol Paneli'ni** kullanın (ücretli modeller için).

![Kontrol Paneli özet](../images/screenshots/tr/dashboard-summary.png)


<br/>

> ℹ️ **NOT**<br/>
> Sadece ücretsiz modeller kullanıyorsanız, maliyetle ilgili grafikler boş olacaktır.

<br/>

<a id="filter-the-data"></a>
### Verileri filtreleme

Zaman aralığını değiştirmek için üstteki filtre düğmelerini kullanın.

![Kontrol paneli filtreleri](../images/screenshots/tr/dashboard-filter.png)

<br/>

> ℹ️ **NOT**<br/>
> **Kullanıcı** filtresi yalnızca web uygulamasında yönetici kullanıcılar için görünür. Normal kullanıcılar bu filtreyi göremez ve masaüstü uygulamasında bu seçenek bulunmaz.

<br/>

<a id="dashboard-tabs"></a>
### Kontrol Paneli sekmeleri

- **Özet**, kullanım ve maliyetin genel bir görünümünü sağlar.
- **Kullanıma Göre**, etkinliği çeviri dillerine, yeniden yazma modlarına ve dönüşüm istemlerine göre kılar.
- **Modele Göre**, hangi modelleri kullandığınızı ve maliyetlerini gösterir.
- **Güne Göre**, günlük toplamları gösterir.
- **Tüm Çağrılar**, tüm çağrı geçmişini gösterir ve dışa aktarmanıza olanak tanır.

<br/>

<a id="export-data"></a>
### Verileri dışa aktarma

Kontrol paneli tabloları verileri şu biçimlerde dışa aktarabilir:

- **JSON**
- **CSV**
- **XLSX**

Bu, etkinlikleri uygulamanın dışında incelemek veya bir rapor paylaşmak istediğinizde faydalıdır.

<br/>

<a id="delete-stored-records-for-a-model"></a>
### Bir model için kayıtlı kayıtları silme

**Modele Göre** veya **Tüm Çağrılar** bölümlerinde, "çöp kutusu" simgesine tıklayarak bir modelin kayıtlı geçmişini silebilirsiniz.

> ⚠️ **UYARI**<br/>
> Silinen kayıtlar geri alınamaz. Tarihe ait kayıtlara artık ihtiyacınız olmadığından emin olduğunuzda bu işlemi yapın.

Tüm verileri silmek veya belirli bir yaştan eski kayıtları kaldırmak istiyorsanız [**Ayarlar** > **Maliyet Takibi**](#cost-tracking) bölümüne gidin. Burada tüm kayıtlı verileri ya da yalnızca belirli bir tarihten daha eski olan verileri silme seçeneklerini bulacaksınız.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="history"></a>
## Geçmiş

**Transrewrt** içindeki işlemlerinizin geçmişini, her bir işlemin giriş ve çıkışını görmek için **Geçmiş** sekmesine tıklayın.

![Geçmiş sayfası](../images/screenshots/tr/history.png)

<br/>

<a id="filter-the-history"></a>
### Geçmişi filtreleme

**Geçmiş**, **Kontrol Paneli** sayfasıyla aynı filtreleri kullanır. Zaman aralığını seçmek için bunları kullanın.

![Kontrol paneli filtreleri](../images/screenshots/tr/dashboard-filter.png)

<br/>

> ℹ️ **NOT**<br/>
> **Kullanıcı** filtresi yalnızca web uygulamasında yönetici kullanıcılar için görünür. Normal kullanıcılar bu filtreyi göremez ve masaüstü uygulamasında bu seçenek bulunmaz.

<br/>

<a id="export-history-data"></a>
### Geçmiş verilerini dışa aktarma

Geçmiş sayfası, filtrelenmiş verileri şu biçimlerde dışa aktarabilir:

- **JSON**
- **CSV**
- **XLSX**

Bu, etkinlikleri uygulamanın dışında incelemek veya bir rapor paylaşmak istediğinizde faydalıdır.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="settings"></a>
## Ayarlar

Uygulamanın davranışını özelleştirmek için kenar çubuğundan **Ayarlar** bölümünü açın.

Kullanılabilir sekmeler, platforma ve kullanıcı rolünüze bağlıdır:

  | Sekme               | Masaüstü | Web (yönetici) | Web (normal kullanıcı) |
  |-------------------|:-------:|:-----------:|:------------------:|
  | Genel Ayarlar  |   evet   |     evet     |        evet         |
  | Modeller            |   evet   |     evet     |        evet         |
  | Diller         |   evet   |     evet     |        evet         |
  | Maliyet Takibi     |   evet   |     evet     |         —          |
  | Dönüşüm İstemleri |   evet   |     evet     |        evet         |
  | Kullanıcılar             |    —    |     evet     |         —          |
  | API Yapılandırması |   evet   |     evet     |         —          |
  | Hakkında             |   evet   |     evet     |        evet         |

<br/>

> ℹ️ **NOT**<br/>
> Web sürümünde her kullanıcı kendi yapılandırmasına sahiptir. Seçili modeller, diller, genel seçenekler ve dönüşüm istemleri kullanıcı bazında saklanır. Yaptığınız değişiklikler diğer kullanıcıları etkilemez.

<br/>


[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="general-settings"></a>

### Genel ayarlar

Yazma davranışınızı, yürütme ayrıntılarının **Geçmiş** için saklanıp saklanmayacağını ve görünümü denetlemek için **Genel Ayarlar**'ı kullanın.

**Davranış**

- **ENTER davranışı**, `Enter` tuşunun görevi çalıştırması mı yoksa yeni bir satıra geçmesi mi yapılacağını seçer.
- **Yapıştırmada otomatik çevir** yapıştırdığınız anda çeviri başlatır.
- **Sonucu panoya otomatik kopyala** başarılı sonuçları otomatik olarak kopyalar.
- **Anlık çeviri (yazarken)** yazarken çeviri yapar.
- **Zaman aşımı (ms)** anlık çeviriler için bekleme süresini belirler.

**Geçmiş**

- **Yürütme geçmişini tut** her çeviri, yeniden yazma ve dönüştürmenin kenar çubuğundaki [**Geçmiş**](#history) görünümü için **girdi ve çıktı metnini** saklayıp saklamayacağınızı kontrol eder. Kapatılırsa onay sorar; onaylarsanız, veritabanından saklanan geçmiş metni silinir.
- **Geçmiş verilerini sil**, **Verileri sil** seçeneğiyle saklanan metni yaşına göre (örneğin birkaç aydan eski veya **tüm veriler (temizle)**) kaldırmanıza olanak tanır. Bu işlem yalnızca **Geçmiş** görünümü için kaydedilmiş yürütme metnini etkiler; **maliyet** veya kullanım toplamlarını **etkilemez**. **Maliyet** verilerini kaldırmak veya kısaltmak için [**Ayarlar** > **Maliyet Takibi**](#cost-tracking) kullanın.

**Görünüm**

- **Maliyet ondalık basamak sayısı** maliyet ondalıklarının nasıl görüntüleneceğini değiştirir.
- **Sadece web:** uygulama etrafında bir kenar boşluğu gösterir arayüz etrafına ek boşluk ekler.
- **Yazı tipi ailesi** metin bölümlerindeki yazım fontunu değiştirir.
- **Boyut** yazı tipi boyutunu değiştirir.


<br/>

<a id="models"></a>
### Modeller

Araç çubuğunda hangi modellerin görüneceğini seçmek için **Ayarlar** > **Modeller** bölümünü kullanın.

![Ayarlarda Modeller sekmesi](../images/screenshots/tr/settings-models.png)

Sayfada iki liste bulunur:

- Solda **Kullanılabilir Modeller**
- Sağda **Seçilen Modeller**

Kullanışlı kontroller şunları içerir:

- **Modellerde ara...** isme göre model bulmak için
- **Sağlayıcı** kartları, listeyi tek bir motora daraltmak için (OpenRouter, OpenAI, Ollama, …)
- **Sadece Ücretsiz** yalnızca ücretsiz modelleri gösterir
- **Yenile** listeyi yeniden yükler
- Sağlayıcıya göre sıralarken **Tümünü Genişlet** ve **Tümünü Daralt**

Model kimlikleri sağlayıcı önekini içerir (örneğin `openrouter/…` ya da `openai/…`). **OpenAI (OpenRouter)** ve **OpenAI (doğrudan)** gibi rozetler trafiğin nasıl yönlendirildiğini gösterir.

Eylemler:

 - Bir model eklemek için **Ekle**'ye veya listedeki girdinin herhangi bir yerine tıklayın.

 - Bir modeli kaldırmak için **Seçilen Modeller** bölümünde yanındaki **X** işaretine veya Kullanılabilir Modeller listesinde girdide yer alan **Seçildi** butonuna tıklayın.

 - Listeyi temizlemek için **Tümünü Kaldır**'a tıklayın. Gerekli ücretsiz model listede kalır.

<br/>

> ℹ️ **NOT**<br/>
> OpenRouter'a hemen kredi eklemek istemiyorsanız, önce **Sadece Ücretsiz** seçeneğini etkinleştirin ve ücretsiz modelleri seçin (kredi kartı gerekmez). Ayrıca herhangi bir API anahtarı olmadan modelleri yerel olarak çalıştırmak için Ollama kullanabilirsiniz.

<br/>

<a id="languages"></a>
### Diller

Uygulamada kullanılan dil listelerini düzenlemek için **Ayarlar** > **Diller** bölümünü kullanın.

- **En çok kullanılan diller**, **Çeviri** ve **Dönüştür** bölümlerindeki dil listelerinin üst kısmında sabitlenmiş olarak görünür.
- **Özel dil**, yerleşik listede olmayan bir dil eklemenize olanak tanır.

Bir özel dil eklerseniz, yerleşik seçeneklerin yanında dil seçicilerinde görünür.

<br/>

<a id="cost-tracking"></a>
### Maliyet takibi

Maliyet bilgilerini yönetmek için **Ayarlar** > **Maliyet Takibi** bölümünü kullanın.

- **Toplam Maliyet** biriken toplamı gösterir.
- **Değeri Kopyala** toplamı panoya kopyalar.
- **Maliyeti Sıfırla** kayıtlı toplamı sıfırlar.
- **API anahtarı kullanımıyla senkronize et**, toplamı OpenRouter hesabınızdan bildirilen kullanım ile eşler (sadece OpenRouter).
- **API Anahtarı Kullanımı** varsa OpenRouter kullanım ayrıntılarını gösterir.
- **Maliyet verilerini sil**, tüm verileri veya yalnızca seçilen tarihten daha eski girişleri kaldırır.

**Maliyet takibi:** OpenRouter modellerini kullandığınızda, uygulama OpenRouter verilerine dayalı olarak gerçek kullanımınızı ve harcamanızı gösterir. Diğer tüm sağlayıcılar için uygulama OpenRouter tarafından yayınlanan fiyatlar kullanılarak maliyet tahmini yapar; fiyat mevcut değilse tahmin sıfır olabilir.

<br/>

> ℹ️ **NOT**<br/>
> Tüm maliyet rakamları yalnızca bilginiz için yapılan tahminlerdir, resmi fatura dekileri değildir.


<br/>

> ⚠️ **UYARI**<br/>
> Veri silme işlemi geri alınamaz. Silmeden önce lütfen verilerinizi yedekleyin ya da [**Panel** > **Tüm Çağrılar**](#dashboard-tabs) aracılığıyla dışa aktarın, aksi takdirde kalıcı olarak kaybedilir. <br/> 
> Her API çağrısı girdisiyle ilgili tüm geçmiş de silinir.


<br/>

<a id="transform-prompts"></a>

### İletileri Dönüştür

Toplu olarak iletileri yönetmek için **Ayarlar** > **İletileri Dönüştür** bölümüne gidin.

Şunları yapabilirsiniz:

- kaydedilmiş iletilerinizi inceleyin
- iletileri silin
- bir dosyadan iletileri içeri aktarın
- yedekleme veya paylaşım için iletileri dışa aktarın

<br/>

<a id="users"></a>
### Kullanıcılar

**Web: sadece yönetici**

Web sürümünde kullanıcı hesaplarını yönetmek için **Kullanıcılar** menüsünü kullanın. Yeni kullanıcı ekleyebilir, kullanıcı bilgilerini güncelleyebilir, şifreleri sıfırlayabilir ve hesapları silebilirsiniz.

<br/>

<a id="api-config"></a>
### API yapılandırması

Desteklenen sağlayıcılar şunlardır: OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI ve **Ollama** (bir temel URL aracılığıyla yerel modeller). Sadece kullandığınız sağlayıcıları yapılandırmanız gerekir.

**Web uygulaması: sadece yönetici**

API anahtarları sistem veya Docker ortam değişkenleri aracılığıyla yapılandırılır — web arayüzüne girilmezler. Bu sayfa hangi sağlayıcılar için anahtar yapılandırıldığını gösterir ve her birini **`Test`** düğmesine tıklayarak deneyebilirsiniz.

<br/>

> ℹ️ **NOT**<br/>
> Bir API anahtarını değiştirmek için anahtarı sistem veya Docker yapılandırmanızdaki ortam değişkeninde güncelleyin ve sunucuyu veya kapsayıcıyı yeniden başlatın.

<br/>

**Masaüstü uygulaması**

Kullandığınız her sağlayıcı için API anahtarlarını depolamak üzere **API Yapılandırması** menüsünü kullanın. Ollama için bir API anahtarı yerine **temel URL** girin.

<br/>

> 💡 **İpucu** <br/>
> Bir API anahtarı kullanmak istemiyorsanız veya ücret ödemek istemiyorsanız, modelleri makinanızda ücretsiz olarak çalıştırmak için [Ollama indirebilirsiniz](https://ollama.com). Alternatif olarak, kredi kartı gerekmeden ücretsiz modellerini kullanmak için ücretsiz bir OpenRouter hesabı oluşturabilirsiniz.

- Sadece ihtiyacınız olan sağlayıcıları ekleyin. **Ayarlar** > **Modeller** bölümünde, her model kimliği sağlayıcı ismiyle başlar (örneğin `openrouter/openrouter/free`, `openai/gpt-4o`, `ollama/llama3`).

Bir API anahtarı eklemek için metin alanına değeri yazın ve **`Kaydet`**'e tıklayın. Mevcut bir anahtarı değiştirmek için **`Düzenle`**'ye tıklayın. Bir anahtarın çalışıp çalışmadığını kontrol etmek için **`Test`**'e tıklayın.

<br/>

> ℹ️ **NOT**<br/>
> Mevcut bir API anahtarının değerini göremezsiniz. Sadece **`Düzenle`** düğmesi ile değiştirebilirsiniz.
> API anahtarları yapılandırma dosyasında şifreli olarak saklanır.

<br/>

Bir OpenRouter anahtarı edinmeyle ilgili ayrıntılı adımlar için yukarıdaki [Bir API anahtarı nasıl alınır?](#how-to-get-an-api-key-desktop-app) bölümüne bakın.

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

Bir şey beklendiği gibi çalışmıyorsa, öncelikle aşağıdaki kontrolleri yapın.

<br/>

<a id="the-app-will-not-translate-rewrite-or-transform-text"></a>
### Uygulama metni çevirmiyor, yeniden yazmıyor veya dönüştürmüyor

Aşağılarını kontrol edin:

- araç çubuğundan bir model seçtiniz mi
- en az bir modelin [**Ayarlar** > **Modeller**](#models) bölümünde listelenmiş olduğundan emin olun
- API kurulumunuzun çalışır durumda olduğundan emin olun

Masaüstü uygulamasını kullanıyorsanız:

1. [**Ayarlar** > **API Yapılandırması**](#api-config) menüsü açın.
2. En az bir API anahtarının kaydedildiğinden emin olun.
3. Anahtarın çalıştığından emin olmak için sağlayıcı yanında **Test**'e tıklayın.

<br/>

<a id="the-model-list-is-empty"></a>
### Model listesi boş

[**Ayarlar** > **Modeller**](#models) menüsüne gidin ve **Yenile**'ye tıklayın.

Gerekirse:

- bir model arayın
- **Sadece Ücretsiz** seçeneğini etkinleştirin
- bir veya daha fazla modeli **Seçilen Modeller** listesine ekleyin

<br/>

<a id="the-result-is-too-slow-or-too-expensive"></a>
### Sonuç çok yavaş veya çok maliyetli

Aşağıdakilerden birini veya birkaçını deneyin:

- farklı bir model seçin
- daha kısa bir giriş kullanın
- [**Ayarlar** > **Genel Ayarlar**](#general-settings) menüsünde **Yazarken gerçek zamanlı çeviri** seçeneğini devre dışı bırakın
- basit görevler için ücretsiz modelleri kullanın (bkz. [Modeller](#models))

<br/>

<a id="the-interface-is-in-the-wrong-language"></a>
### Arayüz yanlış dilde

[Araç çubuğundaki](#toolbar) dünya simgesine tıklayarak tercih ettiğiniz **Arayüz dili**ni seçin.

<br/>

<a id="the-text-is-too-small-or-hard-to-read"></a>
### Metin çok küçük veya okunması zor

[**Ayarlar** > **Genel Ayarlar**](#general-settings) menüsüne gidin ve aşağıdaki ayarları değiştirin:

- **Yazı Tipi**
- **Boyut**

<br/>

<a id="dashboard-charts-are-empty"></a>
### Kontrol paneli grafikleri boş

Bu normal olabilir eğer:

- sadece **ücretsiz modeller** kullanıyorsanız (maliyet grafikleri boş olacaktır)
- seçili **zaman filtresi**, isteklerin yapıldığı dönemi kapsamıyorsa — kontrol etmek için **Tümü**nü deneyin

Tüm'ü seçtikten sonra grafikler hâlâ boşsa, isteklerin [**Geçmiş**](#history) bölümünde veya **Tüm Çağrılar** sekmesinde görünür olduğundan emin olun.

<br/>

<a id="cost-shows-not-available-or-seems-wrong"></a>

### Maliyet "kullanılamıyor" olarak gösteriliyor veya yanlış görünüyor

**OpenRouter** üzerinden modelleri kullandığınızda, uygulama OpenRouter tarafından bildirilen gerçek harcamanızı gösterir.

**Diğer sağlayıcılar** (doğrudan OpenAI, doğrudan Anthropic, vb.) için maliyet, OpenRouter tarafından yayımlanan fiyatlandırma verilerine göre tahmini olarak hesaplanır. Bir model için eşleşen bir fiyat bulunamazsa, maliyet **kullanılamıyor** olarak gösterilir ve toplam harcamanıza eklenmez.

<br/>

<a id="total-cost-does-not-match-my-provider-bill"></a>
### Toplam maliyet, sağlayıcımın faturasıyla eşleşmiyor

Uygulamadaki tüm maliyet bilgileri yalnızca **referans amaçlıdır**, resmi fatura kesintisi değildir.

Toplam maliyeti gerçek OpenRouter harcamanıza daha yakın hâle getirmek için, [**Ayarlar** > **Maliyet Takibi**](#cost-tracking) bölümüne gidin ve **API anahtarı kullanımıyla eşitle** seçeneğine tıklayın.

<br/>

<a id="the-history-page-is-missing-from-the-sidebar"></a>
### Geçmiş sayfası kenar çubuğunda eksik

**Çalıştırma geçmişini sakla** seçeneği kapalı olabilir. [**Ayarlar** > **Genel Ayarlar**](#general-settings) bölümüne gidin ve bu seçeneği etkinleştirin. Açığa alma işlemi, daha önce silinmiş geçmiş verilerini geri getirmez.

<br/>

<a id="web-app-session-expired"></a>
### Web uygulaması: beklenmedik şekilde giriş sayfasına yönlendirildim

Oturumunuzun süresi dolmuş olabilir. Yeniden oturum açın. Eğer sorun sık sık tekrarlanıyorsa, oturum süresi ayarları için sunucu yapılandırmasını kontrol edin.

<br/>

<a id="dashboard-shows-no-data-for-other-users"></a>
### Tablo (web): diğer kullanıcılar için veri göstermiyor

Yalnızca **yöneticiler**, **Kullanıcı** filtresi aracılığıyla tüm kullanıcıların verilerini görüntüleyebilir. Normal kullanıcılar, tasarlandığı gibi yalnızca kendi etkinliklerini görür.

<br/>

<a id="i-changed-a-prompt-and-lost-the-edits"></a>
### Bir prompt'u değiştirdim ve düzenlemeleri kaybettim

Bir prompt'u düzenlerken, **Geri Dön** seçeneğine tıklamadan önce her zaman **Kaydet** seçeneğine tıklayın.

<br/><br/>

<a id="quick-tips"></a>
## Hızlı ipuçları

- Devam etmeden önce kurulumunuzun çalıştığından emin olmak için önce [**Çevir**](#translate) seçeneğiyle başlayın, sonra [**Yeniden Yaz**](#rewrite) veya [**Dönüştür**](#transform) seçeneklerine geçin.
- Günlük kelimecilik iyileştirmeleri için [**Yeniden Yaz**](#rewrite) seçeneğini kullanın.
- Belirli bir görev için tekrarlanabilir bir iş akışı gerektiğinde [**Dönüştür**](#transform) seçeneğini kullanın.
- Kullanım ve maliyeti takip etmek istiyorsanız [**Tablo**](#dashboard) sayfasını kullanın.
- Geçmiş işlemleri ve tüm girdi/çıktı metinlerini incelemek için [**Geçmiş**](#history) sayfasını kullanın.
- Güvenli tutmak istediğiniz bir prompt kütüphanesi oluşturuyorsanız düzenli olarak dışa aktarın (bkz. [Prompt'ları Dönüştür](#transform-prompts)) veya bunları başkalarıyla paylaşmak istiyorsanız dışa aktarım yapın.

<br/><br/>

<a id="disclaimer"></a>
## Sorumluluk Reddi

Ürün adları ve simgeleri ait oldukları sahiplerine aittir ve yalnızca tanımlama amacıyla kullanılır. Bu yazılım bahsedilen markalarla bağlı değildir veya onlar tarafından desteklenmez.

<br/><br/>

<a id="license"></a>
## Lisans

Telif Hakkı © 2026 Waldemar Scudeller Jr.

[Apache Lisansı 2.0](LICENSE)