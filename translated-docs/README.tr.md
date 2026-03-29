---
translated_at: "2026-03-28T23:08:43.884Z"
source_hash: "e9ea44c8ee71135cfaa88417e93be66dde6feae3d1970ce7c2ff555de1fc3376"
source_mtime: "2026-03-28T22:34:35.283Z"
model: "qwen/qwen3-235b-a22b-2507"
---
<p align="center">
  <img src="../images/transrewrt_banner.png" alt="Transrewrt Afişi"  />
</p>

<p align="center">
  <a href="https://github.com/wsj-br/transrewrt/releases"><img src="https://img.shields.io/badge/version-1.1.1-blue" alt="Sürüm"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-Apache%202.0-green" alt="Lisans: Apache 2.0"></a>
  <img src="https://img.shields.io/badge/platform-Windows%20%7C%20Linux%20%7C%20Docker-lightgrey" alt="Platform">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react" alt="React 19">
  <img src="https://img.shields.io/badge/Electron-41-47848F?logo=electron" alt="Electron 41">
</p>

Yapay zekâ destekli metin aracı: farklı dillere çeviri yapın, çeşitli stillerde yeniden yazın ve özel istemlerle dönüştürün — birden fazla yapay zekâ sağlayıcısını kullanarak (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI ve yerel Ollama). Masaüstü uygulaması (Electron) veya kendi barındırılan web uygulaması (Docker) olarak çalışır.

- **Çevir** — düzinece dil arasında, otomatik kaynak algılama ile
- **Yeniden Yaz** — grameri düzelt, netliği artır, resmi/resmi olmayan biçimler, kısalt, genişlet, teknik
- **Dönüştür** — özel AI istemleri; istem oluştur ve yönet, her istem için isteğe bağlı hedef dil
- **Geçmiş** — giriş/çıkış metni, filtreleme ve dışa aktarma özellikli tam yürütme geçmişi
- **Modeller ve maliyet** — yapılandırılmış herhangi bir sağlayıcıdan model seçin; loglar, modele/işleme/güne göre özetlerle birlikte maliyet ve kullanım panoları
- **Kullanıcı Arayüzü** — çok dilli arayüz (30+ dil, RTL desteği), yazı tipleri, ...
- **Web modu** — yönetici rolleri ile çok kullanıcılı destek
- **Masaüstü** — Windows ve Linux için Electron uygulaması
- **Kendi sunucunuza kurun** — amd64 ve arm64 (Raspberry Pi uyumlu) için Docker görüntüsü

Kurulum sonrasında tüm özelliklerin kapsamlı açıklaması için **[Kullanıcı Rehberi](USER-GUIDE.tr.md)** bölümüne bakın.

<small id="lang-list"> [English (UK)](../README.md) · [Português (BR)](README.pt-BR.md) · [العربية](README.ar.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [Hrvatski](README.hr.md) · [Čeština](README.cs.md) · [Nederlands](README.nl.md) · [English (US)](README.en-US.md) · [Filipino](README.tl.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [हिन्दी](README.hi.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [Basa Jawa](README.jv.md) · [한국어](README.ko.md) · [Bahasa Melayu](README.ms.md) · [فارسی](README.fa.md) · [Polski](README.pl.md) · [Português (PT)](README.pt.md) · [ਪੰਜਾਬੀ](README.pa.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [Slovenčina](README.sk.md) · [Español](README.es.md) · [Kiswahili](README.sw.md) · [Svenska](README.sv.md) · [తెలుగు](README.te.md) · [ภาษาไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Tiếng Việt](README.vi.md)</small>

<small id="lang-list"> [İngilizce (UK)](README.tr.md) · [Portekizce (BR)](README.pt-BR.md) · [Arapça](README.ar.md) · [Bengalce](README.bn.md) · [Katalanca](README.ca.md) · [Basitleştirilmiş Çince](README.zh-CN.md) · [Geleneksel Çince](README.zh-TW.md) · [Hırvatça](README.hr.md) · [Çekçe](README.cs.md) · [Flemenkçe](README.nl.md) · [İngilizce (ABD)](README.en-US.md) · [Filipince](README.tl.md) · [Fransızca](README.fr.md) · [Almanca](README.de.md) · [Yunanca](README.el.md) · [Hintçe](README.hi.md) · [Macarca](README.hu.md) · [İtalyanca](README.it.md) · [Japonca](README.ja.md) · [Cavaca](README.jv.md) · [Korece](README.ko.md) · [Malayca](README.ms.md) · [Farsça](README.fa.md) · [Lehçe](README.pl.md) · [Portekizce (PT)](README.pt-PT.md) · [Romence](README.ro.md) · [Rusça](README.ru.md) · [Sırpça](README.sr.md) · [Slovakça](README.sk.md) · [Slovence](README.sl.md) · [Esperanto](README.eo.md) · [İspanyolca (ES)](README.es-ES.md) · [İspanyolca (MX)](README.es-MX.md) · [Suahili](README.sw.md) · [Svensce](README.sv.md) · [Tamilce](README.ta.md) · [Teluguca](README.te.md) · [Tayca](README.th.md) · [Tamilce](README.ta.md) · [Tamilce](README.ta.md) · [Tayca](README.th.md) · [Türkçe](README.tr.md) · [Ukraynaca](README.uk.md) · [Vietnamca](README.vi.md) · [Zazaca](README.zaz.md) · [İsveççe](README.sv.md) · [Tayca](README.th.md) · [Rusça](README.ru.md) · [Ukraynaca](README.uk.md) · [Esperanto](README.eo.md) · [Tamilce](README.ta.md) · [Tamilce](README.ta.md) · [Tamilce](README.ta.md) · [Tamilce](README.ta.md) · [İspanyolca (ES)](README.es-ES.md) · [İspanyolca (MX)](README.es-MX.md) · [Suahili](README.sw.md) · [Teluguca](README.te.md) · [Zazaca](README.zaz.md) · [Kürtçe (Kırmancki)](README.kmr.md) · [İtalyanca](README.it.md) · [İspanyolca (ES)](README.es-ES.md) · [Portekizce (PT)](README.pt-PT.md) · [Slovence](README.sl.md) · [Slovence](README.sl.md) · [Kürtçe (Kırmancki)](README.kmr.md) · [Hırvatça](README.hr.md) · [Ukraynaca](README.uk.md)</small>

# Transrewrt

[![npm versiyonu](https://img.shields.io/npm/v/transrewrt.svg?maxAge=3600)](https://www.npmjs.com/package/transrewrt)
[![Toplam indirme sayısı](https://img.shields.io/npm/dt/transrewrt.svg?maxAge=3600)](https://www.npmjs.com/package/transrewrt)
![Yapı: Elektron](https://img.shields.io/github/actions/workflow/status/Transrewrt/Transrewrt/electron.yml?branch=main&label=Yapı%3A%20Elektron)
[Docker Hub](https://hub.docker.com/r/transrewrt/transrewrt)

## Açıklama

Transrewrt, **yerel makinenizde çalışan, ücretsiz, ad ücretsiz, açık kaynaklı bir çeviri aracısıdır**. Yerleşik, ücretsiz, gizliliğe odaklanmış ve çok dilli çeviriler için OpenRouter API'sini kullanır.

Transrewrt, çevirilerinizi yapay zeka modelleriyle paylaşarak çevrimiçi çevirmen hizmetlerini kullanmanın alternatifidir. Yerel modeller, çevirmen modellerine göre genellikle daha geneldir, ancak çoğu çeviri görevi için yeterlidir ve çeviri kalitesi gittikçe artmaktadır. Bu, çeviri görevlerini yerel olarak yapmanın hızıyla ve gizliliğiyle birlikte gelir. Transrewrt, çeviri kalitesini artırarak modellerin çevrilebilirliklerini artırır.

> [!NOTE]
> Transrewrt'ün hedefi, çevirilerinizi güçlü modellerle yerel olarak gerçekleştirmektir. Bu, çeviri kalitesini artırabilir ve özel verilerinizin çevrimiçi çevirmen hizmetlerinde risk altında olmasına göre daha özel bilgi korumasıyla ilişkilidir.

## Hızlı Başlangıç

İsterseniz sıfırdan inşa edebilirsiniz:

1. [NPM ve Node.js](https://nodejs.org/) (v20 veya üstü) kurun.
2. Depoyu klonlayın: `git clone https://github.com/Transrewrt/Transrewrt.git`
3. `cd Transrewrt` komutunu çalıştırın.
4. Gerekli bağımlılıkları kurun: `npm install`
5. Daha iyi performans için donanım hızlandırmalarını etkinleştirin:
   - [node-llama-cpp](https://github.com/second-state/node-llama-cpp-jni)'yi yerel olarak oluşturun. Aksi takdirde CUDA, Vulkan, OpenBLAS veya diğer donanım hızlandırmaları kullanılmaz.
6. Çeviri modelinizi indirin. Önerilen: [Hermes-3](https://huggingface.co/TheBloke/hermes-3-llama-3-8B-GGUF)
7. Uygulamayı başlatın: `npm start`

> [!WARNING]
> Transrewrt henüz erken erişim aşamasındadır. Özellikler ve yapılandırma hâlâ değişebilir!

> [!NOTICE]
> Transrewrt şu anda yalnızca Node.js v20 ve üzeri ile uyumlu.

### Docker Kullanarak Çalıştırma

> [!TIP]
> Docker kurulumunuzda kullanmak istediğiniz GPU için donanım hızlandırması etkin değilse, lütfen Docker GPU Hızlandırması hakkında bilgi edinmek için [bu kılavuz](https://docs.docker.com/compose/gpu-support/) bölümüne bakın.

```bash
# Hepsini varsayılan ayarlarla başlatın
docker compose up -d

# Daha iyi performans için GPU ile başlatın - CUDA örneği
docker compose --profile cuda up -d

# Hepsini durdurun
docker compose stop

# Hepsini kaldırın
docker compose down
```

### Yapılandırma

Transrewrt yapılandırma için iki yol sunar:

- `config.json` dosyası kullanarak dosya tabanlı yapılandırma.
- Ortam değişkenleri kullanarak ortam tabanlı yapılandırma.

#### Dosya Tabanlı Yapılandırma

Bu, `config.json` dosyası kullanılarak yapılandırma değerlerini ayarlama yöntemidir. Bu yöntem, ortam değişkenlerini ayarlamayı gerektirmez. Örnek bir `config.json` dosyası [burada](config.example.json) bulunabilir. Varsayılan `config.json` dosyası aşağıdaki gibi görünür:

```json
{
  "openRouterApiKey": "",
  "model": "bartowski/Hermes-3-Llama-3.1-8B-Laser-GGUF",
  "modelFile": "Hermes-3-Llama-3.1-8B-Laser-Q8_0.gguf",
  "maxTokens": 2048,
  "promptTemplate": "Sen bir çevirmensin. Lütfen sadece verilen metni belirtilen hedef dile çevir. Herhangi bir açıklama veya fazladan metin verme. Hiçbir zaman hedef dili tahmin etmene gerek yok, sadece istenen dile çevir.",
  "openRouterApiUrl": "https://openrouter.ai/api/v1"
}
```

> [!NOTE]
> Yapılandırma dosyası kök dizinde olmalıdır.

#### Ortam Tabanlı Yapılandırma

Alternatif olarak, ortam değişkenleri kullanılarak yapılandırma değerlerini ayarlayabilirsiniz. Desteklenen ortam değişkenleri şunlardır:

```bash
OPENROUTER_API_KEY= # OpenRouter API anahtarı
MODEL= # OpenRouter'deki veya yerel dosya sistemindeki model. Varsayılan: 'bartowski/Hermes-3-Llama-3.1-8B-Laser-GGUF'
MODEL_FILE= # Yerel model dosyasının adı, OpenRouter modelleri için gerekli değil. Varsayılan: 'Hermes-3-Llama-3.1-8B-Laser-Q8_0.gguf'
MAX_TOKENS= # Tek bir yanıt için maksimum token sayısı, varsayılan: 2048
PROMPT_TEMPLATE= # Prompt şablonu, varsayılan: 'Sen bir çevirmensin. Lütfen sadece verilen metni belirtilen hedef dile çevir. Herhangi bir açıklama veya fazladan metin verme. Hiçbir zaman hedef dili tahmin etmene gerek yok, sadece istenen dile çevir.'
OPENROUTER_API_URL= # OpenRouter API URL'si, varsayılan: 'https://openrouter.ai/api/v1'
```

#### Yapılandırma Öncelikleri

`config.json` dosyasına ve ortam değişkenlerine aynı anda değerler eklerseniz, ortam değişkenleri önceliklidir ve `config.json` dosyasını geçersiz kılar.

#### Örnekler

Ayrıntılı örnekler ve kullanım durumları için lütfen [Örnekler](examples/) dizinine bakın.

## Transrewrt Nasıl Çalışır?

1. Metin, bir istek olarak OpenRouter API'sine gönderilir.
2. API, metni bir yapay zeka modeline gönderir.
3. Yerel makinenizde çalışan model metni çevirir.
4. API, çevrilmiş metni uygulamaya geri döndürür.
5. Uygulama, çevrilmiş metni kullanıcılara görüntüler.

### Hangi Modeller Kullanılır?

Yerel makinenizde hangi yapay zeka modelinin kullanıldığını seçebilirsiniz. Modeller `.gguf` formatında yerel sistemde depolanır. Önerilen model şudur: [Hermes-3](https://huggingface.co/TheBloke/hermes-3-llama-3-8B-GGUF).

### Modeller Nasıl İndirilir?

Modeller, doğrudan Hugging Face gibi sitelerden veya model sağlayıcılardan indirilebilir. Modelin `.gguf` formatında olduğundan emin olun.

### Neden OpenRouter Kullanılır?

- Modellerin her birine API üzerinden erişilebilir: Sadece model adını güncelleştirin.
- OpenRouter, model sağlayıcısını gizler.
- OpenRouter, çevrimiçi olarak hata ayıklama ve model karşılaştırması yapmanızı sağlar.
- OpenRouter, çeviri performansını izlemek ve model kullanımını analiz etmek için analitik sağlar.

## Elektron Uygulaması

Bir [Elektron](https://www.electronjs.org/) masaüstü uygulaması inşa ettik. Bu uygulama, kullanıcıların masaüstü uygulamalarda çeviri sürecini kolayca izlemelerini sağlar. Electron uygulaması, [Vue](https://vuejs.org/) kullanarak oluşturulan bir [Vite](https://vitejs.dev/) SPA (Tek Sayfa Uygulaması) sayfası işler.

Uygulama `src-electron` içinde tanımlanmıştır. Web içeriği `src` içinde depolanır. Electron uygulamasını çalıştırmak için `npm run dev:electron` komutunu çalıştırın.

## Geliştirme

### Geliştirme Kurulumu

Bu projeyi geliştirme kurulumu iki ana adımdan oluşur: (1) Node.js bağımlılıklarını kurun ve (2) donanım hızlandırmaları için `node-llama-cpp` oluşturun.

İşte hızlı şekilde yapılandırma için bir kılavuz:

#### Adım 1: Projeyi klonlayın ve bağımlılıkları kurun

```sh
# Depoyu klonlayın
git clone https://github.com/Transrewrt/Transrewrt.git
cd Transrewrt

# Bağımlılıkları kurun
npm install
```

#### Adım 2: `node-llama-cpp` oluşturun (önemli: bu, donanım hızlandırmaları (CUDA vb.) için gereklidir)

`node-llama-cpp`, `TransRewrt` tarafından kullanılan temel yerel makine modeli altyapısıdır ve performansı optimize etmek için yerel olarak oluşturulmalıdır. Aşağıdaki komutlar, GPU hızlandırmasını etkinleştirmek için CUDA, Vulkan, OpenBLAS veya diğer donanım hızlandırma seçenekleriyle yerel olarak derleyecektir.

```sh
# Örnek: node-llama-cpp'yi CUDA ile oluşturun (NVIDIA ekran kartları için)
npm run build:llama:cuda

# Vulkan ile oluşturun (AMD/NVIDIA ekran kartları için)
npm run build:llama:vulkan

# OpenBLAS ile oluşturun (tüm sistemler için)
npm run build:llama:openblas

# Varsayılan olarak sadece CPU (çok daha yavaş)
npm run build:llama:cpu
```

Daha fazla yapılandırma seçeneği veya belirli sistem gereksinimleri için lütfen [node-llama-cpp](https://github.com/second-state/node-llama-cpp-jni) deposunun belgelerine bakın. Başarılı bir yapı, `build` klasöründe bir `node-llama-cpp` dizini oluşturacaktır.

### Geliştirici Komutları

```sh
# Yerel olarak geliştirin: hem API sunucusunu hem de Electron ön yüzünü çalıştırın
npm run dev:electron

# Web uygulaması olarak yerel olarak geliştirin
npm run dev

# Electron uygulamasını inşa edin
npm run build:electron

# Web uygulamasını inşa edin
npm run build

# Projeyi üretim için inşa edin (ön uç ve arka ucu birleştirir)
npm run build:production

# Yalnızca arka uç sunucusunu başlatın (localhost:2777'de)
npm run start:server

# Electron uygulamasını başlatın
npm start
```

### Docker ile Geliştirme

Geliştirme yapılandırması, otomatik yeniden yükleme ile Vite geliştirme sunucusunu ve bir Docker yapılandırması aracılığıyla `node-llama-cpp`'yi destekler.

```shell
docker compose -f docker-compose.dev.yml up --build
```

> [!WARNING]
> Geliştirme yapılandırmasında oturum yeniden yükleme hâlâ etkin değildir. Geliştirici sunucusuyla etkileşimde bulunmak için `docker exec -it transrewrt-dev bash` komutunu kullanarak Docker konteynerine girmeniz gerekebilir.

## Katkıda Bulunma

Katkıda bulunmak isterseniz, lütfen [Katkıda Bulunma Kılavuzu](CONTRIBUTING.md)'na bakın.

## Lisans

Bu proje MIT Lisansı ile lisanslanmıştır - ayrıntılar için [LİSANS](LICENSE) dosyasına bakın.

## Teşekkür

[NodeLLama](https://github.com/second-state/node-llama-cpp-jni) ve [OpenRouter](https://openrouter.ai) ekibine, yerel modelleri çalıştırmamız ve birleştirmemiz için olanak sağladıkları için teşekkür ederiz.

E.pl.md) · [Português (PT)](README.pt.md) · [ਪੰਜਾਬੀ](README.pa.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [Slovenčina](README.sk.md) · [Español](README.es.md) · [Kiswahili](README.sw.md) · [Svenska](README.sv.md) · [తెలుగు](README.te.md) · [ภาษาไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Tiếng Việt](README.vi.md)</small>

<small>

> **Kullanıcı arayüzü ve belgelerin çevirisi ile ilgili not:** Orijinal İngilizce (UK) hariç tüm arayüz dilleri yapay zeka modelleri kullanılarak çevrilmiştir; ifade tarzı belirsiz olabilir veya hatalar içerebilir.

</small>

<br/>

<a id="screenshots"></a>

## Ekran Görüntüleri

**Dil seçici**

![Dil seçici](../images/screenshots/tr/language-selector.png)

**Çevir**

![Çevir](../images/screenshots/tr/translate.png)

**Dönüştür - istem düzenleyici**

![Dönüştür - istem düzenleyici](../images/screenshots/tr/transform-prompt-edit.png)

**Kontrol paneli**

![Kontrol paneli özeti — kullanım](../images/screenshots/tr/dashboard-summary.png)

**Geçmiş**

![Geçmiş](../images/screenshots/tr/history.png)

**Ayarlar - model seçimi**

![Ayarlar - model seçimi](../images/screenshots/tr/settings-models.png)

<br/><br/>

<a id="table-of-contents"></a>

## İçindekiler

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [Hızlı başlangıç](#quick-start)
- [Yükleme](#installation)
  - [Windows (Electron)](#windows-electron)
  - [Linux (Electron)](#linux-electron)
  - [Docker](#docker)
- [OpenRouter API anahtarı almak](#getting-an-openrouter-api-key)
- [Yapılandırma ve ortam](#configuration-and-environment)
- [Geliştirme ve mimari](#development-and-architecture)
- [Sorun bildirme](#reporting-issues)
- [Feragatname](#disclaimer)
- [Lisans](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="quick-start"></a>

## Hızlı başlangıç

**Docker (kendi sunucunuza kurulum için önerilir)**

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest

OPENROUTER_API_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_API_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

`sk-or-your-key` kısmını [OpenRouter API anahtarınızla](https://openrouter.ai/keys) değiştirin (veya diğer sağlayıcı anahtarlarını ayarlayın; bkz. [Yapılandırma](#configuration-and-environment)). [http://localhost:5000](http://localhost:5000)'ı açın ve hizmeti dış dünyaya açmadan önce varsayılan yönetici şifresini değiştirin.

<br/>

> ℹ️ **NOT**<br/>
> Docker kullanırken LLM kimlik bilgileri `OPENROUTER_API_KEY`, `OPENAI_API_KEY`, `CEREBRAS_API_KEY` gibi ortam değişkenleriyle ayarlanır (web arayüzünde değil). Masaüstü sürümünde (Electron), anahtarları **Ayarlar → API** bölümünde yapılandırabilirsiniz.

<br/>

**Windows**

En son `Transrewrt Kurulum x.y.z.exe` dosyasını [Sürümler](https://github.com/wsj-br/transrewrt/releases) sayfasından indirin, yükleyiciyi çalıştırın ve ardından Başlat menüsünden veya masaüstü kısayolundan başlatın. API anahtarlarınızı **Ayarlar → API** bölümünde girin. En az bir sağlayıcıyı yapılandırmanız gerekir; ücretsiz modeller için OpenRouter yaygın olarak kullanılır.

<br/>

**Linux**

CPU'nuz için uygun `.AppImage` dosyasını [Sürümler](https://github.com/wsj-br/transrewrt/releases) sayfasından indirin (`x64` genellikle bilgisayarlar için, `arm64` Raspberry Pi 4+ dahil birçok ARM cihaz için); ardından:

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

API anahtarlarınızı **Ayarlar → API** bölümünde girin. En az bir sağlayıcıyı yapılandırmanız gerekir; ücretsiz modeller için OpenRouter yaygın olarak kullanılır.

Debian/Ubuntu sisteminizde önce ek bağımlılıkları yüklemeniz gerekebilir:

```bash
sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth
```

Ayrıntılar için [Kurulum → Linux](#linux-electron) bölümüne bakın.

<br/>

> ℹ️ **NOT**<br/>

> macOS şu anda desteklenmemektedir. Transrewrt, Windows, Linux ve Docker için kullanılabilir.

<br/>

Uygulama çalıştıktan sonra metinleri çevirme, yeniden yazma ve dönüştürme, istemleri yönetme ve modelleri yapılandırma hakkında bilgi edinmek için **[Kullanıcı Kılavuzu](USER-GUIDE.tr.md)**'na bakın.

<br/><br/>

<a id="installation"></a>

## Kurulum

<a id="windows-electron"></a>

### Windows (Electron)

- [Releases](https://github.com/wsj-br/transrewrt/releases) sayfasından en son yükleyiciyi indirin.
- `.exe` dosyasını çalıştırın ve yükleyiciyi takip edin.
- İlk çalıştırmada: uygulamayı Başlat menüsünden veya masaüstü kısayolundan başlatın.

<br/>

> ℹ️ **NOT**<br/>
> Windows, imzasız/bağımsız uygulamalar için şu güvenlik uyarılarından birini gösterebilir:
>   - **Kullanıcı Hesabı Denetimi (UAC)**: "Bilinmeyen bir yayıncıdan gelen bu uygulamanın cihazınıza değişiklik yapmasına izin vermek istiyor musunuz?" → **Evet**'e tıklayın.
>   - **Microsoft Defender SmartScreen**: "Windows bilgisayarınızı korudu" → **Daha fazla bilgi** → **Yine de çalıştır**'a tıklayın.
>
> Bu uyarılar, uygulamanın Microsoft veya büyük bir yayıncı tarafından imzalanmamış olmasından kaynaklanır. Uygulama resmi GitHub Releases sayfamızdan indirildiyse güvenlidir.
>  (aşağıdaki SHA256 checksum değerini doğrulayın).

<br/>

<a id="linux-electron"></a>

### Linux (Electron)

- [Sürümler](https://github.com/wsj-br/transrewrt/releases) sayfasından eşleşen `.AppImage` dosyasını (`x64` veya `arm64`) indirin.
- x86_64/amd64 mimarisi için: `chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage` komutunu çalıştırın veya ARM64 için `...-arm64.AppImage` dosya adını kullanın.
- Ek bağımlılıklar (Debian/Ubuntu): `sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth`
- Daha fazlası için [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)'yi inceleyin.

<br/>

<a id="docker"></a>

### Docker

- İndirin: `docker pull ghcr.io/wsj-br/transrewrt:latest`
- En az bir sağlayıcı anahtarı ortam değişkeniyle belirtin (örneğin OpenRouter için `OPENROUTER_API_KEY`). Değişkenleri `-e` ile ya da `docker compose` / `.env` dosyasıyla geçirin, böylece gizli anahtarlar görüntüye gömülmez.
- Sağlayıcı anahtarları **web arayüzüne girilmez**; sunucu, bu anahtarları ortamdan okur.

Örnek - Kalıcılık için adlandırılmış birim kullanarak (çevre değişkeniyle OpenRouter anahtarı):

```bash
OPENROUTER_API_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_API_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

Ya da Docker Compose kullanmayı tercih ediyorsanız, aşağıdakini kullanın:

```
# compose dosyasını indirin
wget https://github.com/wsj-br/transrewrt/raw/refs/heads/master/production.yml -O transrewrt.yml
# API_KEYS eklemek için dosyayı düzenleyin
vi transrewrt.yml
# konteyneri başlatın
docker compose -f transrewrt.yml up -d

| Seçenek  | Açıklama                                                                                                                            |
|----------|----------------------------------------------------------------------------------------------------------------------------------------|
| Port     | `5000` (haritalamak için `-p 5000:5000` kullanın)                                                                                     |
| Birim    | Yapılandırma ve veritabanı kalıcılığı için `/app/data` klasörünü monte edin                                                         |
| Ortam değişkenleri | `PORT`, `CONFIG_PATH`, ve LLM anahtarları (`OPENROUTER_API_KEY`, `OPENAI_API_KEY`, …) - [Yapılandırma](#configuration-and-environment) bölümüne bakın |

Kaynaktan derlemek ve çalıştırmak için: `docker compose up --build -d` veya `pnpm docker:up` - [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) dosyasına bakın.

<br/><br/>

<a id="getting-an-openrouter-api-key"></a>

## OpenRouter API anahtarı alma

Transrewrt, birden fazla Yapay Zeka sağlayıcısını destekler. [OpenRouter](https://openrouter.ai), birçok modeli tek bir anahtar altında birleştirdiği ve ücretsiz modeller sunduğu için popülerdir.

1. [openrouter.ai](https://openrouter.ai) adresinden kayıt olun ya da giriş yapın.
2. [Keys](https://openrouter.ai/keys) sayfasını açın ve yeni bir anahtar oluşturun (bir ad verin ve isteğe bağlı olarak kredi limiti belirleyin). Kredi eklemeden ücretsiz modelleri kullanabilirsiniz.
3. **Masaüstü (Electron):** anahtarları **Ayarlar → API** bölümüne yapıştırın. **Docker:** `OPENROUTER_API_KEY` gibi ortam değişkenlerini ayarlayın (bkz. [Hızlı başlangıç](#quick-start)).

Çeviri, yeniden yazma veya dönüşüm işlemlerinde OpenRouter'ın **Body Builder** modelini ([`openrouter/bodybuilder`](https://openrouter.ai/openrouter/bodybuilder)) kullanmayın: bu model, ilgili görevler için tamamlanmış metin yerine JSON istek yükleri döndürür. Kullanıcı Kılavuzu'ndaki [Ayarlar → Modeller](USER-GUIDE.tr.md#models) bölümüne bakın.

Diğer sağlayıcıları (OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras) kullanabilir veya modelleri [Ollama](https://ollama.com) ile yerel olarak çalıştırabilirsiniz. Desteklenen sağlayıcıların ve ortam değişkenlerinin tam listesi için bkz. [Yapılandırma](#configuration-and-environment).

> ⚠️ **UYARI**<br/>
> Başka bir cihazdan, konteynerden veya servisten Ollama kullanıyorsanız, Ollama'nın dış bağlantılara izin vermesi için yapılandırıldığınızdan emin olun (sadece localhost değil).

Limitler, kendi anahtarınızı kullanma (BYOK) ve diğer konular için bkz. [OpenRouter kimlik doğrulama](https://openrouter.ai/docs/api/reference/authentication).

<br/><br/>

<a id="configuration-and-environment"></a>

## Yapılandırma ve ortam

**Yapılandırma dosyası konumları**

| Dağıtım | Yapılandırma konumu |
| ------------------ | ------------------------------------------------- |
| Electron (Windows) | `%APPDATA%\transrewrt\` |
| Electron (Linux) | `~/.config/transrewrt/` |
| Web / Docker | `/app/data/config.json` (kalıcılık için bir birim kullanın) |

<br/>

**Ortam değişkenleri** (sadece web/Docker; Electron yerel yapılandırma dosyasını kullanır)

| Değişken | Varsayılan | Açıklama |
| -------- | ---------- | ------- |
| `PORT` | `5000` | Sunucu dinleme portu |
| `CONFIG_PATH` | `/app/data/config.json` | Yapılandırma dosyasının yolu |
| `OPENROUTER_API_KEY` | *(boş)* | OpenRouter API anahtarı |
| `OPENAI_API_KEY` | *(boş)* | OpenAI API anahtarı |
| `CEREBRAS_API_KEY` | *(boş)* | Cerebras API anahtarı |

| `ANTHROPIC_API_KEY`  | *(boş)*               | Anthropic API anahtarı |
| `GOOGLE_API_KEY`     | *(boş)*               | Google Gemini API anahtarı |
| `DEEPSEEK_API_KEY`   | *(boş)*               | DeepSeek API anahtarı |
| `GROQ_API_KEY`       | *(boş)*               | Groq API anahtarı |
| `MISTRAL_API_KEY`    | *(boş)*               | Mistral API anahtarı |
| `OLLAMA_URL`         | *(boş)*               | Ollama temel URL'si (örneğin `http://host.docker.internal:11434`) |
| `XAI_API_KEY`        | *(boş)*               | xAI API anahtarı |

Kullandığınız sağlayıcıları yapılandırın. Model kimlikleri isim alanı kullanır (`openrouter/…`, `openai/…`, `cerebras/…`, `ollama/…`, vb.).

**Maliyet gösterimi:** OpenRouter uygun olduğunda gerçek faturalandırma maliyetini döner. Diğer sağlayıcılar, bir OpenRouter anahtarı varsa OpenRouter'ın genel model fiyatlamasına göre **tahmini** maliyeti kullanır; bu anahtar olmadan OpenRouter olmayan maliyetler `0` olarak görünebilir. Tahminler fatura değildir.

<br/>

**Veri ve kalıcılık:** Docker için, `config.json` ve SQLite veritabanının kapsayıcı yeniden başlatmaları arasında korunabilmesi için `/app/data` yoluna bir birim bağlayın. Bir birim bağlanmazsa, kapsayıcı durdurulduğunda tüm veriler kaybolur.

**Geliştiriciler:** Eski tek anahtarlı yapılandırmayı kaldıran değişiklikleri çektikten sonra yerel dosyanız hâlâ kaldırılan alanları (`api_key`, `api_url`, proxy seçenekleri) kullanıyorsa `data/config.json` dosyasını `src/config-defaults/config_default.json` içindeki yeni varsayılan yapıyla sıfırlayın veya birleştirin.

<br/>

**Web kimlik doğrulama:**

- Varsayılan yönetici: `admin` / `transrewrt26`.
- Kullanıcıları **Ayarlar → Kullanıcılar** bölümünde yönetin.
- Şifre sıfırlama: `docker exec <container> reset-web-password '<kullanıcı adı>' '<yeni şifre>'`
  (kaynaktan: `pnpm run reset-web-password -- <kullanıcı adı> <yeni şifre>`)

<br/>

> ⚠️ **UYARI**<br/>
> Ağ üzerinden erişilebilen herhangi bir sunucuda, varsayılan yönetici şifresini hemen değiştirin.

<br/>

Ana ayarlar (yazı tipi, modeller, diller, vb.) uygulama Ayarları'nda mevcuttur.

<br/><br/>

<a id="development-and-architecture"></a>

## Geliştirme ve mimari

- **Geliştirme:** Kurulum, derleme, test etme ve dağıtma (Elektron, Web, Docker) - bkz. **[dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)**.
- **Mimari ve sistem genel bakış:** Klasör yapısı, teknoloji yığını, tasarım kararları - bkz. **[dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)**.

<br/><br/>

<a id="reporting-issues"></a>

## Sorun bildirme

[GitHub](https://github.com/wsj-br/transrewrt/issues) üzerinden bir sorun oluşturun. Kullandığınız platformu (Windows / Linux / Docker) ve uygulama sürümünü (Hakkında penceresinde veya Sürümler sayfasında gösterilir) belirtin.

<br/><br/>

<a id="disclaimer"></a>

## Uyarı

Ürün adları ve simgeleri ilgili sahiplerine aittir ve yalnızca tanımlama amacıyla kullanılır. Bu yazılım, bahsedilen markalarla hiçbir şekilde ortak değildir ve onlar tarafından desteklenmez.

<br/><br/>

<a id="license"></a>

## Lisans

Telif Hakkı © 2026 Waldemar Scudeller Jr.

[Apache Lisansı 2.0](LICENSE)