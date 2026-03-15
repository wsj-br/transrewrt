---
translated_at: "2026-03-15T22:32:34.829Z"
source_hash: "69732149de931f2a0059ecf9073871caedaa431362e32c010e7d93bd3cbd76bc"
source_mtime: 1773611603946.006
model: "stepfun/step-3.5-flash:free"
---
<a id="transrewrt-user-guide"></a>
# Transrewrt Kullanıcı Kılavuzu

<br />

<a id="introduction"></a>
## Giriş

Transrewrt, metinle üç ana şekilde çalışmanıza yardımcı olur:

- **Çevir** - metni bir dilden başka bir dile dönüştür.
- **Yeniden Yaz** - metni farklı bir tarzda yeniden ifade et, örneğin daha açık, daha kısa veya daha resmi.
- **Dönüştür** - özel AI yönergeleri (prompt'lar) kullanarak metni işle.

<br />

Bu kılavuz, uygulama kurulduktan ve çalıştırıldıktan sonra nasıl kullanılacağını açıklar. Kurulum adımları için ana [README](../README.md) dosyasına bakın.

<br />

> ℹ️ **NOT**<br/>
> Transrewrt, Windows ve Linux için bir masaüstü uygulaması olarak ve kendi kendine barındırılan bir web uygulaması olarak mevcuttur. Bu kılavuz uygulamanın günlük kullanımına odaklanır. Bir şey yalnızca bir sürüm için geçerliyse, bu net bir şekilde belirtilir.

<small>**Diğer dillerde oku:** [İngilizce (UK)](../USER-GUIDE.md) · [Portekizce (BR)](USER-GUIDE.pt-BR.md) · [Arapça](USER-GUIDE.ar.md) · [Bengalce](USER-GUIDE.bn.md) · [Katalanca](USER-GUIDE.ca.md) · [Basitleştirilmiş Çince](USER-GUIDE.zh-CN.md) · [Geleneksel Çince](USER-GUIDE.zh-TW.md) · [Hırvatça](USER-GUIDE.hr.md) · [Çekçe](USER-GUIDE.cs.md) · [Felemenkçe](USER-GUIDE.nl.md) · [İngilizce (ABD)](USER-GUIDE.en-US.md) · [Filipince](USER-GUIDE.tl.md) · [Fransızca](USER-GUIDE.fr.md) · [Almanca](USER-GUIDE.de.md) · [Yunanca](USER-GUIDE.el.md) · [Hintçe](USER-GUIDE.hi.md) · [Macarca](USER-GUIDE.hu.md) · [İtalyanca](USER-GUIDE.it.md) · [Japonca](USER-GUIDE.ja.md) · [Cava Dili](USER-GUIDE.jv.md) · [Korece](USER-GUIDE.ko.md) · [Malayca](USER-GUIDE.ms.md) · [Farsça](USER-GUIDE.fa.md) · [Lehçe](USER-GUIDE.pl.md) · [Portekizce (PT)](USER-GUIDE.pt.md) · [Pencap Dili](USER-GUIDE.pa.md) · [Romence](USER-GUIDE.ro.md) · [Rusça](USER-GUIDE.ru.md) · [Slovakça](USER-GUIDE.sk.md) · [İspanyolca](USER-GUIDE.es.md) · [Svahili](USER-GUIDE.sw.md) · [İsveççe](USER-GUIDE.sv.md) · [Telugu](USER-GUIDE.te.md) · [Tayca](USER-GUIDE.th.md) · [Türkçe](USER-GUIDE.tr.md) · [Ukraynaca](USER-GUIDE.uk.md) · [Vietnamca](USER-GUIDE.vi.md)</small>

<br />

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**İçindekiler** 

- [Başlamadan Önce](#before-you-start)
  - [API anahtarı nasıl alınır (masaüstü uygulama)](#how-to-get-an-api-key-desktop-app)
- [Hızlı Başlangıç](#getting-started)
- [Pencerenin ana bölümleri](#main-parts-of-the-window)
  - [Kenar Çubuğu](#sidebar)
  - [Araç Çubuğu](#toolbar)
  - [Giriş ve çıkış panelleri](#input-and-output-panels)
- [Çevir](#translate)
  - [Metin çevirme](#translate-text)
  - [Dil seçimi](#language-selection)
  - [Yardımcı çeviri ayarları](#helpful-translation-settings)
  - [Klavye kısayolları](#keyboard-shortcuts)
- [Yeniden Yaz](#rewrite)
  - [Metin yeniden yazma](#rewrite-text)
- [Dönüştür](#transform)
  - [Varolan bir prompt'u çalıştırma](#run-an-existing-prompt)
  - [Henüz prompt'unuz yoksa](#if-you-have-no-prompts-yet)
  - [Hızlı bir prompt oluşturma](#create-a-prompt-quickly)
  - [Bir prompt'u düzenleme](#edit-a-prompt)
  - [Kullanmadan önce bir prompt'u test etme](#test-a-prompt-before-using-it)
  - [Kaydedilmiş prompt'ları yönetme](#manage-saved-prompts)
- [Gösterge Panosu](#dashboard)
  - [Verileri filtreleme](#filter-the-data)
  - [Gösterge Panosu sekmeleri](#dashboard-tabs)
  - [Verileri dışa aktarma](#export-data)
  - [Bir model için saklanan kayıtları silme](#delete-stored-records-for-a-model)
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
  - [Uygulama metni çevirmeye, yeniden yazmaya veya dönüştürmeyecek](#the-app-will-not-translate-rewrite-or-transform-text)
  - [Model listesi boş](#the-model-list-is-empty)
  - [Sonuç çok yavaş veya çok pahalı](#the-result-is-too-slow-or-too-expensive)
  - [Arayüz yanlış dilde](#the-interface-is-in-the-wrong-language)
  - [Metin çok küçük veya okunması zor](#the-text-is-too-small-or-hard-to-read)
  - [Bir prompt'u değiştirdim ve değişiklikleri kaybettim](#i-changed-a-prompt-and-lost-the-edits)
- [Hızlı ipuçları](#quick-tips)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br /><br />

<a id="before-you-start"></a>

## Başlamadan Önce

Transrewrt'yi kullanmak için OpenRouter üzerinden AI hizmetine erişiminiz olması gerekir.

Başlamadan önce ücretli bir model seçmeniz gerekmez. Uygulama her zaman yerleşik bir **ücretsiz** model içerir, bu nedenle normal kullanım için çeviri, yeniden yazma ve metin dönüştürmeye başlamak için bu yeterlidir.

Basit anlatım ile:

- Bir **model**, işi yapan AI motorudur.
- Bir **API anahtarı**, bu hizmet için kişisel erişim kimliğinizdir.

**Masaüstü uygulamasını** kullanıyorsanız bir API anahtarına ihtiyacınız olacaktır. Ayrıntılı adımlar için aşağıdaki [API Anahtarı Nasıl Alınır (Masaüstü Uygulaması)](#how-to-get-an-api-key-desktop-app) başlığına bakın. Kısacası: [OpenRouter](https://openrouter.ai) adresinde bir hesap oluşturun, [Keys](https://openrouter.ai/keys) sayfasını açın, yeni bir anahtar oluşturun ve Transrewrt'teki [**Ayarlar** > **API Yapılandırması**](#api-config) bölümüne yapıştırın.

**Web sürümünü** kullanıyorsanız, sunucu sahibi genellikle bunu sizin için ayarlar, bu nedenle normalde kendiniz API anahtarı girmeniz gerekmez.

<br />

<a id="how-to-get-an-api-key-desktop-app"></a>
### API Anahtarı Nasıl Alınır (Masaüstü Uygulaması)

Masaüstü uygulamasını kullanıyorsanız, şu adımları izleyin:

1. Web tarayıcınızda [OpenRouter](https://openrouter.ai) adresine gidin.
2. Bir hesap oluşturun veya giriş yapın.
3. [Keys](https://openrouter.ai/keys) sayfasını açın.
4. Yeni bir API anahtarı oluşturmak için düğmeye tıklayın.
5. Anahtara, daha sonra tanıyabilmeniz için bir ad verin.
6. Yeni API anahtarını kopyalayın.
7. Transrewrt'e geri dönün ve **Ayarlar** > **API Yapılandırması**'nı açın.
8. Anahtarı **OpenRouter API Anahtarı** alanına yapıştırın.
9. Çalıştığından emin olmak için **API Yapılandırmasını Test Et** düğmesine tıklayın.

> ℹ️ **NOT**<br/>
> OpenRouter'ın ücretsiz rotasıyla veya mevcut diğer ücretsiz modellerden herhangi biriyle başlayabilirsiniz. Birçok durumda, ücretli bir model seçmeden Transrewrt kullanmaya başlamak için bu yeterlidir.

<br /><br />

<a id="getting-started"></a>
## Başlarken

Transrewrt'yi ilk kez kullanıyorsanız, şu sırayı izleyin:

1. Uygulamayı açın.
2. Gerekirse küre simgesinden **Arayüz dilini** seçin.
3. **Masaüstü uygulamasındaysanız**, [**Ayarlar** > **API Yapılandırması**](#api-config) bölümünü açın, OpenRouter API anahtarınızı yapıştırın ve **API Yapılandırmasını Test Et** deyin.
4. [**Ayarlar** > **Modeller**](#models) bölümünü açın ve **Seçili Modeller** bölümüne bir veya daha fazla model ekleyin.
5. [**Ayarlar** > **Diller**](#languages) bölümünü açın ve en çok kullandığınız dillerin ilk sırada görünmesini istiyorsanız **Ana Dillerinizi** seçin.
6. **Çevir** bölümüne gidin ve her şeyin çalıştığından emin olmak için basit bir çeviri yapın.
7. Bu işe yaradıktan sonra **Yeniden Yaz** ve ardından **Dönüştür**'ü deneyin.

Bu sıra önemlidir. En yaygın ilk kullanım sorununu önler: uygulamanın çalışan bir API bağlantısına veya seçilmiş bir modele sahip olmadan bir görevi çalıştırmaya çalışmak.

<br /><br />

<a id="main-parts-of-the-window"></a>
## Pencerenin Ana Bölümleri

Uygulama üç ana alana ayrılmıştır:

- Soldaki **kenar çubuğu**.
- Üstteki **araç çubuğu**.
- Ortadaki **çalışma alanı**.

<br />

<a id="sidebar"></a>
### Kenar Çubuğu

Uygulamada gezinmek için kenar çubuğunu kullanın:

<br />

<table>
  <tr>
    <td valign="top">
       <img src="../images/screenshots/tr/sidebar.png" alt="Uygulama Kenar Çubuğu" style="max-width: 100%; border: 1px solid #ddd; border-radius: 4px;">
    </td>
    <td valign="top">
      <br />
      <ul>
        <li><strong>Çevir</strong> çeviri çalışma alanını açar.</li>
        <li><strong>Yeniden Yaz</strong> yeniden yazma çalışma alanını açar.</li>
        <li><strong>Dönüştür</strong> özel istem çalışma alanını açar.</li>
        <li><strong>Gösterge Panosu</strong> kullanım ve maliyet bilgilerini gösterir.</li>
        <li><strong>Ayarlar</strong> ayarlar panosunu açar.</li>
        <li><strong>Kullanıcı</strong> giriş yapmış kullanıcının kullanıcı adını gösterir (sadece web).</li>
      </ul>
      <br />
      <p>Daha fazla alan için kenar çubuğunu, uygulama logosunun yanındaki simgeye tıklayarak daraltabilirsiniz.</p>
    </td>
  </tr>
</table>

<br />

<a id="toolbar"></a>
### Araç Çubuğu

Araç çubuğu, uygulamada neredesinizse biraz değişiklik gösterir.

- Solunda mevcut sayfa adını gösterir.
- Sağında **model seçiciyi** ve **Arayüz dili** denetimini gösterir.

**Model seçici**, mevcut görev için hangi AI motorunu kullanacağınızı seçmenizi sağlar.

  ![Model seçici](../images/screenshots/tr/model-selector.png)

> ℹ️ **NOT**<br/>
> Bazı ücretsiz modeller, kullanılamaz veya kullanım limitine ulaşılmışsa geçici olarak çalışmayı bırakabilir. Bu durum olursa, uygulama bu modeli listeden otomatik olarak kaldıracaktır.


**Küre simgesi + dil kodu**, menüler ve düğmeler gibi uygulama arayüz dilini değiştirir. **Çevir** bölümünde kullanılan çeviri dillerini **değiştirmez**.

  ![Arayüz dili seçici](../images/screenshots/tr/language-selector.png)

<br />

<a id="input-and-output-panels"></a>

### Giriş ve çıkış panelleri

Çoğu çalışma alanı sol tarafta bir **Giriş** paneli ve sağ tarafta bir **Çıkış** paneli kullanır.

**Giriş** paneli şunları gösterir:

- Karakter sayısı
- Kelime sayısı
- Paragraf sayısı

**Çıkış** paneli şunları gösterebilir:

- Görevin ne kadar sürdüğü
- O görevin maliyeti
- Toplam çalışma maliyetiniz
- **TPS** (jeton/saniye), bu basit bir hız ölçümüdür
- Karakter, kelime ve paragraf sayıları
- Kullanılan model

Teknik terimler hakkında merak ediyorsanız:

- **Jeton**, küçük bir metin parçası anlamına gelir. Bir kelimenin parçası veya kısa bir kelime olarak düşünebilirsiniz.
- **TPS**, modelin saniyede işlediği bu metin parçalarının sayısı anlamına gelir.

<br /><br />

<a id="translate"></a>
## Çeviri

Metni bir dilden diğerine çevirmek istediğinizde **Çeviri**yi kullanın.

![Çeviri çalışma alanı](../images/screenshots/tr/translate.png)

<br />

<a id="translate-text"></a>
### Metni çevir

1. **Çeviri**yi açın.
2. **Kimden**'de bir dil seçin.
3. **Kime**'de bir dil seçin.
4. Araç çubuğunda bir model seçin.
5. **Giriş**'e metin yazın veya yapıştırın.
6. **Çeviri**'ye tıklayın.
7. Sonucu **Çıkış**'ta okuyun.
8. Sonucu kopyalamak isterseniz kopyalama düğmesini kullanın.

<br />

<a id="language-selection"></a>
### Dil seçimi

- **Kimden**, belirli bir dil veya **Dili Algıla** olabilir.
- **Kime**, sonucu istediğiniz dildir.

Seçtiğiniz **Sık kullandığınız diller** listenin en üstünde görünür. Bunları [**Ayarlar** > **Diller**](#languages) bölümünden ayarlayabilirsiniz.

<br />

<a id="helpful-translation-settings"></a>
### Yararlı çeviri ayarları

[**Ayarlar** > **Genel Ayarlar**](#general-settings) bölümünden çeviri davranışını değiştirebilirsiniz:

- **Yapıştırmada otomatik çeviri**, metni yapıştırmanız hâlâ bir çeviri çalıştırır.
- **Sonucu otomatik olarak panoya kopyala**, başarılı bir çalıştırmadan sonra sonucu otomatik olarak kopyalar.
- **Gerçek zamanlı çeviri (yazarken)**, yazarken çeviriler çalıştırır.
- **Zaman aşımı (ms)**, gerçek zamanlı bir çeviri çalıştırmadan önce uygulamanın ne kadar beklediğini kontrol eder.

<br />

<a id="keyboard-shortcuts"></a>
### Klavye kısayolları

[**Ayarlar** > **Genel Ayarlar**](#general-settings) bölümündeki **ENTER davranışı**, Enter tuşuna bastığınızda ne olacağını kontrol eder:

- **Enter** görevi çalıştırabilir ve **Shift+Enter** yeni bir satır ekleyebilir.
- Veya uygulama tersini yapabilir.

Geçerli kısayol ayrıca **Çeviri** düğmesinde de gösterilir.

<br /><br />

<a id="rewrite"></a>
## Yeniden Yazma

Ana anlamı değiştirmeden ifadeleri iyileştirmek istediğinizde **Yeniden Yazma**yı kullanın.

![Yeniden yazma çalışma alanı](../images/screenshots/tr/rewrite.png)

Bu, şunlar için yararlıdır:

- yazım ve dilbilgisi hatalarını düzeltmek
- metni daha anlaşılır hâle getirmek
- metni daha resmi veya daha gayriresmi yapmak
- metni kısaltmak veya genişletmek
- metni daha teknik çıkmak

<br />

<a id="rewrite-text"></a>
### Metni yeniden yaz

1. **Yeniden Yazma**yı açın.
2. Bir **Kip** seçin.
3. Araç çubuğunda bir model seçin.
4. **Giriş**'e metin yazın veya yapıştırın.
5. **Yeniden Yaz**'a tıklayın.
6. Sonucu **Çıkış**'ta gözden geçirin.

[**Çeviri**](#keyboard-shortcuts) bölümünde açıklanan aynı Enter tuşu davranışı burada da geçerlidir.

<br /><br />

<a id="transform"></a>
## Dönüştür

AI'ye özel bir talimat kümesi izlemesini istediğinizde **Dönüştür**'ü kullanın.

![Dönüştür çalışma alanı](../images/screenshots/tr/transform.png)

Bu, uygulamanın en esnek alanıdır. Şu gibi görevler için kullanabilirsiniz:

- notları özetlemek
- kabuk metni aydınlatılmış bir e-postaya dönüştürmek
- ana noktaları çıkarmak
- metni belirli bir biçime dönüştürmek

<br />

<a id="run-an-existing-prompt"></a>
### Mevcut bir komutu çalıştır

1. **Dönüştür**'ü açın.
2. Komut listesinden bir komut seçin.
3. Bir **Hedef** dil kutusu görünürse, isterseniz bir dil seçin.
4. **Giriş**'e metin yazın veya yapıştırın.
5. **Dönüştür**'e tıklayın.
6. Sonucu **Çıkış**'ta okuyun.

<br />

<a id="if-you-have-no-prompts-yet"></a>
### Henüz komutunuz yoksa

Komut listeniz boşsa, **Örnek komutları yükle**'ye tıklayın. Bu, hızlı başlamanız için yerleşik örnekler ekler.

> ℹ️ **NOT**<br/>
> Örnek komutlar İngilizce olarak sağlanır. Yükledikten sonra, bir komutu düzenleyebilir ve komut metnini başka bir dil için uyarlamak isterseniz **Komutu çevir**yi kullanabilirsiniz.

<br />

<a id="create-a-prompt-quickly"></a>

### Hızlı bir şekilde prompt oluşturma

Bir prompt oluşturmanın en hızlı yolu:

1. **Yeni prompt**'a tıklayın.
2. **Prompt oluştur**'a tıklayın.
3. Prompt'un ne yapmasını istediğinizi tarif edin.
4. Bir model seçin.
5. Uygulamanın sizin için bir taslak oluşturmasına izin verin.
6. Taslağı gözden geçirin ve **Kaydet** 'e tıklayın.

![Prompt oluştur](../images/screenshots/tr/transform-generate.png)


<br />

### Prompt düzenleme

Bir prompt oluşturduğunuzda veya düzenlediğinizde, düzenleyici solda, test alanı sağda görünür.

![Prompt düzenleyici](../images/screenshots/tr/transform-prompt-edit.png)

Ana alanlar şunlardır:

- **Prompt Adı**: prompt listesinde görünen ad.
- **Prompt Talimatları (isteğe bağlı)**: prompt çalıştırılırken kullanıcıya görünen kısa ipucu.
- **Model Rolü**: AI'ya atanan genel rol, örn. 'Yardımcı bir asistanısın.'
- **Model Talimatları (her satırda biri)**: AI'nın izlemesini istediğiniz belirli kurallar.
- **Çıktı açıklaması**: sonucu tanımlayan kısa bir kelime, örn. 'özet' veya 'yeniden yaz'.
- **Sıcaklık (0.0 → 1.0)**: bir yaratıcılık kaydırıcısı.
- **Hedef dil iste**: prompt çalıştırıldığında bir hedef dil seçici ekler.

**Sıcaklık** terimi size yeni ise şöyle düşünün:

- **Düşük** bir sıcaklık daha istikrarlı, tahmin edilebilir sonuçlar verir.
- **Yüksek** bir sıcaklık daha fazla çeşitlilik ve yaratıcılık sunar.

Ayrıca şunları kullanabilirsiniz:

- **`Prompt oluştur`** basit bir tanımdan yeni bir taslak oluşturmak için
- **`Prompt'u iyileştir`** mevcut bir prompt'u ince ayarlamak için
- **`Prompt'u çevir`** prompt alanlarını çevirmek için

> ⚠️ **UYARI**<br/>
> **`Geri Dön`**'e tıklamadan önce **`Kaydet`**'e tıklayın. Kaydetmeden geri dönerseniz, değişiklikleriniz kaybolur.

<br />

<a id="test-a-prompt-before-using-it"></a>
### Kullanmadan önce prompt'u test edin

Sağdaki test paneli, günlük işte kullanmadan önce örnek metinlerle prompt'unuzu denemenizi sağlar.

Bu şu durumlarda yararlıdır:

- yeni bir prompt oluşturuyorsanız
- bir prompt'un iki sürümünü karşılaştırıyorsanız
- tonu, uzunluğu veya çıktı formatını kontrol etmek istiyorsanız

<br />

<a id="manage-saved-prompts"></a>
### Kaydedilmiş prompt'ları yönetme

Kaydedilmiş prompt'ları tek bir yerden yönetmek için, [**Ayarlar** > **Transform Prompts**](#transform-prompts) açın.

Orada şunları yapabilirsiniz:

- prompt'larınızı listeleyin ve silin
- prompt'ları **JSON**, **CSV** veya **XLSX** olarak dışa aktarın
- bir dosyadan prompt'ları içe aktarın

<br /><br />

## Gösterge Panosu

Uygulamayı ne kadar kullandığınızı ve ne kadar maliyet getirdiğini görmek için **Gösterge Panosu**'nu kullanın.

![Gösterge Panosu özeti](../images/screenshots/tr/dashboard-summary.png)

<br />

<a id="filter-the-data"></a>
### Verileri filtreleme

Zaman aralığını değiştirmek için üstteki filtre düğmelerini kullanın.

![Gösterge Panosu filtreleri](../images/screenshots/tr/dashboard-filter.png)

> ℹ️ **NOT**<br/>
> Web sürümünde, yöneticiler ayrıca bir **Kullanıcı** filtresi görebilir. Bu, **Tüm kullanıcılar** ile tek bir kullanıcı arasında geçiş yapmalarına olanak tanır.

<br />

<a id="dashboard-tabs"></a>
### Gösterge Panosu sekmeleri

- **Özet** size kullanım ve maliyet genel bir bakışı sunar.
- **Kullanıma Göre** faaliyeti çeviri dili, yeniden yazma modu ve transform prompt'a göre ayrıntılandırır.
- **Modele Göre** hangi modelleri kullandığınızı ve ne kadar maliyet getirdiklerini gösterir.
- **Güne Göre** günlük toplamları gösterir.
- **Tüm Çağrılar** tam çağrı geçmişini gösterir ve dışa aktarmanıza olanak tanır.

<br />

<a id="export-data"></a>
### Verileri dışa aktarma

Gösterge Panosu tabloları verileri şu biçimlerde dışa aktarabilir:

- **JSON**
- **CSV**
- **XLSX**

Bu, uygulama dışında faaliyeti incelemek veya bir raporu paylaşmak istiyorsanız yararlıdır.

<br />

<a id="delete-stored-records-for-a-model"></a>
### Bir model için saklanan kayıtları silme

**Modele Göre** veya **Tüm Çağrılar**'da, bir model için saklanan kayıtları kaldırabilirsiniz.

> ⚠️ **UYARI**<br/>
> Saklanan kayıtların silinmesi geri alınamaz. Bunu yalnızca o geçmişe artık ihtiyacınız olmadığından eminseniz kullanın.

Tüm verileri silmek veya yaşlarına göre kayıtları kaldırmak için [**Ayarlar** > **Maliyet İzleme**](#cost-tracking) gidin. Orada tüm saklanan verileri veya belirli bir tarihten daha eski verileri silmek için seçenekler bulacaksınız.

<br /><br />

<a id="settings"></a>
## Ayarlar

Uygulamanın davranışını özelleştirmek için kenar çubuğundan **Ayarlar**'ı açın.

Mevcut sekmeler değişiklik gösterebilir:

- **API Yapılandırması** yalnızca masaüstü uygulamasında mevcuttur.
- **Kullanıcılar** yalnızca web uygulamasında ve yalnızca yöneticiler için mevcuttur.

<br />

<a id="general-settings"></a>

### Genel ayarlar

**Genel Ayarlar** kısmını yazma davranışını ve görünümünü kontrol etmek için kullanın.

**Davranış**

- **ENTER Davranışı**, Enter tuşunun görevi çalıştırıp yeni satır ekleyeceğini belirler.
- **Yapıştırmada otomatik çeviri**, metni yapıştırdığınızda hemen çeviri başlatır.
- **Sonucu otomatik panoya kopyala**, başarılı sonuçları otomatik olarak kopyalar.
- **Gerçek zamanlı çeviri (yazarken)**, yazarken çeviri yapar.
- **Zaman aşımı (ms)**, gerçek zamanlı çeviri için bekleme süresini ayarlar.

**Görünüm**

- **Maliyet ondalık basamakları**, maliyet kesirlerinin nasıl görüntülendiğini değiştirir.
- **Yazı Tipi Ailesi**, metin panellerindeki yazı tipini değiştirir.
- **Boyut**, yazı tipi boyutunu değiştirir.
- **Sadece web:** **Uygulama etrafına bir kenar boşluğu ekle**, arayüz etrafına ekstra alan ekler.

<br />

<a id="models"></a>
### Modeller

 Araç çubuğunda hangi modellerin görüneceğini seçmek için **Ayarlar** > **Modeller** kısmını kullanın.

![Ayarlar Modeller sekmesi](../images/screenshots/tr/settings-models.png)

Sayfada iki liste bulunur:

- Sol tarafta **Kullanılabilir Modeller**
- Sağ tarafta **Seçilen Modeller**

Kullanışlı kontroller:

- Bir modeli adına göre bulmak için **Modelleri ara...**
- Sadece ücretsiz modelleri göstermek için **Sadece Ücretsiz**
- Listeyi yeniden yüklemek için **Yenile**
- Sağlayıcıya göre sıralarken **Tümünü Genişlet** ve **Tümünü Daralt**

Bir model eklemek için **Ekle**'ye tıklayın.

Bir modeli kaldırmak için, **Seçilen Modeller** listesindeki yanındaki **X**'e tıklayın.

Listeyi temizlemek için **Tümünü Seçimi Kaldır**'a tıklayın. Gerekli olan ücretsiz model listede kalacaktır.

> ℹ️ **NOT**<br/>
> OpenRouter'a hemen kredi eklemek istemiyorsanız, önce **Sadece Ücretsiz**'yi etkinleştirin ve ücretsiz modelleri seçin.

<br />

<a id="languages"></a>
### Diller

Uygulamada kullanılan dil listelerini düzenlemek için **Ayarlar** > **Diller** kısmını kullanın.

- **En üstteki diller**, **Çevir** ve **Dönüştür** bölümlerindeki dil listelerinin en üst kısmına sabitlenir.
- **Özel dil**, yerleşik listede olmayan bir dil eklemenizi sağlar.

Özel bir dil eklerseniz, o, yerleşik seçeneklerle birlikte dil seçicilerinde görünür.

<br />

<a id="cost-tracking"></a>
### Maliyet takibi

Maliyet bilgilerini yönetmek için **Ayarlar** > **Maliyet Takibi** kısmını kullanın.

- **Toplam Maliyet**, devam eden toplamı gösterir.
- **Değeri Kopyala**, toplamı panoya kopyalar.
- **Maliyeti Sıfırla**, saklanan toplamı sıfıra sıfırlar.
- **API anahtarı kullanımıyla eşitle**, toplamı OpenRouter tarafından bildirilen kullanımla eşleşecek şekilde ayarlar.
- **API Anahtarı Kullanımı**, kullanılabilir ise kullanım detaylarını gösterir.
- **Maliyet verilerini sil**, tüm verileri veya yalnızca seçilen bir tarihten daha eski olan girişleri siler.

> ⚠️ **UYARI**<br/>
> Veri silme geri alınamaz. Silmeden önce verilerinizi yedekleyin veya [**Kontrol Paneli** > **Tüm Çağrılar**](#dashboard-tabs) aracılığıyla dışa aktarın, aksi takdirde kalıcı olarak kaybolur.

<br />

<a id="transform-prompts"></a>
### Dönüştürme istemleri

İstemleri toplu olarak yönetmek için **Ayarlar** > **Dönüştürme İstemleri** kısmını kullanın.

Şunları yapabilirsiniz:

- Kaydedilmiş istemlerinizi gözden geçirin
- İstemleri silin
- Bir dosyadan istemleri içe aktarın
- İstemleri yedekleme veya paylaşma için dışa aktarın

<br />

<a id="users"></a>
### Kullanıcılar

**Sadece web - yalnızca yönetici**

Web sürümünde kullanıcı hesaplarını yönetmek için **Kullanıcılar** kısmını kullanın. Kullanıcı ekleyebilir, detaylarını güncelleyebilir, parolaları sıfırlayabilir ve hesapları silebilirsiniz.

<br />

<a id="api-config"></a>
### API yapılandırması

**Sadece masaüstü**

Masaüstü uygulamasını OpenRouter'a veya bir Transrewrt proxy'sine bağlamak için **API Yapılandırması** kısmını kullanın.

- **OpenRouter API Anahtarı**, anahtarınızı yapıştırdığınız alandır.
- **API URL'si**, hizmet adresidir. Size farklı bir adres verilmediği sürece varsayılan olarak bırakın.
- **Transrewrt Proxy Kullan**, istekleri doğrudan OpenRouter'a değil, bir proxy hizmeti üzerinden yönlendirir.
- **Anahtar Tohumu**, proxy seçeneği etkinleştirildiğinde görünür.
- **API Yapılandırmasını Test Et**, mevcut kurulumun çalışıp çalışmadığını kontrol eder.

API anahtarınızı nasıl alacağınıza dair ayrıntılı adımlar için yukarıdaki [API anahtarı nasıl alınır? (Masaüstü uygulaması)](#how-to-get-an-api-key-desktop-app) bölümüne bakın.

> ℹ️ **NOT**<br/>
> **API URL'si**, **Transrewrt Proxy Kullan** veya **Anahtar Tohumu** ne anlama gelir bilemiyorsanız, değiştirmeden bırakın ve varsayılan OpenRouter kurulumunu kullanın. Proxy hakkında daha fazla bilgi [Transrewrt Proxy deposunda](https://github.com/wsj-br/transrewrt-proxy) mevcuttur.

<br />

<a id="about"></a>

### Hakkında

**Hakkında** sekmesi şunları gösterir:

- uygulama adı
- sürüm numarası
- derleme tarihi
- proje deposuna bağlantı

<br /><br />

<a id="common-issues"></a>
## Yaygın Sorunlar

Bir şey beklediğiniz gibi çalışmazsa, önce şu noktaları kontrol edin.

<br />

<a id="the-app-will-not-translate-rewrite-or-transform-text"></a>
### Uygulama metni çeviremiyor, yeniden yazamıyor veya dönüştüremiyor

Şunları kontrol edin:

- araç çubuğunda bir model seçtiniz
- [**Ayarlar** > **Modeller**](#models) bölümünde en az bir model listeleniyor
- API kurulumunuz çalışıyor

Masaüstü uygulamasını kullanıyorsanız:

1. [**Ayarlar** > **API Yapılandırması**](#api-config) seçeneğini açın.
2. API anahtarınızın kaydedildiğinden emin olun.
3. **API Yapılandırmasını Test Et** düğmesine tıklayın.

<br />

<a id="the-model-list-is-empty"></a>
### Model listesi boş

[**Ayarlar** > **Modeller**](#models) bölümünü açın ve **Yenile** düğmesine tıklayın.

Gerekirse:

- bir model arayın
- **Sadece Ücretsiz** seçeneğini açın
- bir veya daha fazla modeli **Seçili Modeller** bölümüne ekleyin

<br />

<a id="the-result-is-too-slow-or-too-expensive"></a>
### Sonuç çok yavaş veya çok pahalı

Şunlardan bir veya birkaçını deneyin:

- farklı bir model seçin
- daha kısa bir giriş kullanın
- [**Ayarlar** > **Genel Ayarlar**](#general-settings) bölümündeki **Gerçek zamanlı çeviri (yazarken)** seçeneğini kapatın
- basit görevler için ücretsiz modeller kullanın (bkz. [Modeller](#models))

<br />

<a id="the-interface-is-in-the-wrong-language"></a>
### Arayüz yanlış dilde

[a araç çubuğunda](#toolbar) yer alan dünya simgesine tıklayın ve tercih ettiğiniz **Arayüz dilini** seçin.

<br />

<a id="the-text-is-too-small-or-hard-to-read"></a>
### Metin çok küçük veya okunması zor

[**Ayarlar** > **Genel Ayarlar**](#general-settings) bölümünü açın ve şunları değiştirin:

- **Yazı Tipi Ailesi**
- **Boyut**

<br />

<a id="i-changed-a-prompt-and-lost-the-edits"></a>
### Bir istemde değişiklik yaptım ve düzenlemeleri kaybettim

Bir istemi düzenlerken, her zaman **Geri Çalıştır** düğmesine tıklamadan önce **Kaydet** düğmesine tıklayın.

<br /><br />

<a id="quick-tips"></a>
## Hızlı İpuçları

- Kurulumunuzun çalıştığından emin olmak için önce [**Çevir**](#translate) ile başlayın, ardından [**Yeniden Yaz**](#rewrite) veya [**Dönüştür**](#transform) bölümlerine geçin.
- Günlük kelime düzenlemeleri için [**Yeniden Yaz**](#rewrite) kullanın.
- Belirli bir görev için tekrarlanabilir bir iş akışına ihtiyacınız olduğunda [**Dönüştür**](#transform) kullanın.
- Kullanım ve maliyeti gözlemek istiyorsanız [**Gösterge Paneli**](#dashboard) kullanın.
- Kaydetmek istediğiniz bir istem kütüphanesi oluşturuyorsanız istemleri düzenli olarak dışa aktarın (bkz. [Dönüştür İstemleri](#transform-prompts)).

<br /><br />

<a id="disclaimer"></a>
## Sorumluluk Reddiyesi

Ürün adları ve simgeleri, ilgili sahiplerine aittir ve yalnızca tanıtım amaçlı kullanılmıştır. Bu yazılım, bahsedilen markalardan hiçbiriyle bağlantılı veya onlar tarafından onaylanmamaktadır.

<br /><br />

<a id="license"></a>
## Lisans

Telif Hakkı © 2026 Waldemar Scudeller Jr.

[Apache License 2.0](LICENSE)