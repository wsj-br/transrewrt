---
translation_last_updated: '2026-04-02T12:43:52.407Z'
source_file_mtime: '2026-04-02T12:39:14.838Z'
source_file_hash: 0826245f792850f3
translation_language: tr
source_file_path: README.md
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

Yapay zeka destekli metin aracı: birden fazla yapay zeka sağlayıcısı (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI ve yerel Ollama) kullanarak diller arasında çevir, farklı stillerde yeniden yaz ve özel istemlerle dönüştür — masaüstü uygulaması (Electron) veya kendi barındırılan web uygulaması (Docker) olarak çalışır.

- **Çevir** — otomatik kaynak algılama ile onlarca dil arasında
- **Yeniden yaz** — dilbilgisi düzelt, netliği iyileştir, resmi/resmi olmayan, kısalt, uzat, teknik
- **Dönüştür** — özel yapay zeka istemleri; istem oluştur ve yönet, her istem için isteğe bağlı hedef dil
- **Geçmiş** — giriş/çıkış metni, filtreleme ve dışa aktarma ile tam yürütme geçmişi
- **Modeller & maliyet** — yapılandırılan herhangi bir sağlayıcıdan model seç; maliyet ve kullanım kontrol panoları, günlük, modele/işleme/güne göre özetler
- **Kullanıcı Arayüzü** — çok dilli arayüz (30+ dil, RTL desteği), yazı tipleri, ...
- **Web modu** — yönetici rolleriyle çoklu kullanıcı desteği
- **Masaüstü** — Windows ve Linux için Electron uygulaması
- **Kendi barındırılan** — amd64 ve arm64 için Docker görüntüsü (Raspberry Pi uyumlu)

Yükleme yapıldıktan sonra tüm özelliklerin kapsamlı bir incelemesi için **[Kullanıcı Kılavuzu](USER-GUIDE.tr.md)** bölümüne bakın.

<small>**Diğer dillerde oku:** </small>
<small id="lang-list">[English (UK)](../README.md) · [Português (BR)](README.pt-BR.md) · [العربية](README.ar.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [Hrvatski](README.hr.md) · [Čeština](README.cs.md) · [Nederlands](README.nl.md) · [English (US)](README.en-US.md) · [Filipino](README.tl.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [हिन्दी](README.hi.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [Basa Jawa](README.jv.md) · [한국어](README.ko.md) · [Bahasa Melayu](README.ms.md) · [فارسی](README.fa.md) · [Polski](README.pl.md) · [Português (PT)](README.pt.md) · [ਪੰਜਾਬੀ](README.pa.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [Slovenčina](README.sk.md) · [Español](README.es.md) · [Kiswahili](README.sw.md) · [Svenska](README.sv.md) · [తెలుగు](README.te.md) · [ภาษาไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Tiếng Việt](README.vi.md)</small>

<small>

> **Kullanıcı arayüzü ve belgelerin çevirileri hakkında not:** İngilizce (UK) orijinali dışında tüm arayüz dilleri yapay zeka modelleri kullanılarak çevrildi; ifade tarzı eksik olabilir veya hatalar içerebilir.

</small>

<br/>

<a id="table-of-contents"></a>
## İçindekiler

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Ekran görüntüleri](#screenshots)
- [Hızlı başlangıç](#quick-start)
- [OpenRouter API anahtarı edinme](#getting-an-openrouter-api-key)
- [Yapılandırma ve ortam](#configuration-and-environment)
- [Geliştirme ve mimari](#development-and-architecture)
- [Sorun bildirme](#reporting-issues)
- [Feragatname](#disclaimer)
- [Lisans](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="screenshots"></a>
## Ekran Görüntüleri

**Dil seçici**

![Language selector](../images/screenshots/tr/language-selector.png)

**Çevir**

![Translate](../images/screenshots/tr/translate.png)

**Dönüştür - istem düzenleyici**

![Transform - prompt editor](../images/screenshots/tr/transform-prompt-edit.png)

**Kontrol Paneli**

![Dashboard summary — usage](../images/screenshots/tr/dashboard-summary.png)

**Geçmiş**

![History](../images/screenshots/tr/history.png)

**Ayarlar - model seçimi**

![Settings - model selection](../images/screenshots/tr/settings-models.png)

<br/><br/>

<a id="quick-start"></a>
## Hızlı Başlangıç

<details>
<summary><b>Docker (kendine barındırma için önerilir)</b></summary>

<a id="docker"></a>

<br/>

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest

OPENROUTER_API_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_API_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

`sk-or-your-key` kısmını [OpenRouter API anahtarınızla](https://openrouter.ai/keys) değiştirin (veya diğer sağlayıcı anahtarlarını ayarlayın; [Yapılandırma](#configuration-and-environment) bölümüne bakın). [http://localhost:5000](http://localhost:5000) adresini açın ve hizmeti dış dünyaya açmadan önce varsayılan yönetici şifresini değiştirin.

En az bir sağlayıcı anahtarını ortam üzerinden ayarlayın (örneğin OpenRouter için `OPENROUTER_API_KEY`). Değişkenleri `-e` ile veya `docker compose` / `.env` dosyası ile iletin, böylece gizli anahtarlar görüntüye gömülmez. Sağlayıcı anahtarları **web arayüzüne girilmez**; sunucu bunları ortamdan okur.

<br/>

> ℹ️ **NOT**<br/>
> Docker'da LLM kimlik bilgileri `OPENROUTER_API_KEY`, `OPENAI_API_KEY`, `CEREBRAS_API_KEY`, … gibi ortam değişkenleriyle ayarlanır (web arayüzünde değil). Masaüstünde (Electron) anahtarları **Ayarlar → API** bölümünde yapılandırırsınız.

<br/>

Veya Docker Compose kullanın:

```
# download the compose file
wget https://github.com/wsj-br/transrewrt/raw/refs/heads/master/production.yml -O transrewrt.yml
# Edit the file to add your API keys (API_KEYs), or uncomment and adjust the `.env` file. Set the timezone (TZ) if necessary.
vi transrewrt.yml
# start the container
docker compose -f transrewrt.yml up -d
```

Tüm ortam değişkenleri için [Yapılandırma](#configuration-and-environment) bölümüne bakın. Örneğin `PORT`, `CONFIG_PATH`, `TZ` ve LLM anahtarları (`OPENROUTER_API_KEY`, `OPENAI_API_KEY`, …).

</details>

<br/>

<details>
<summary><b>Sunucu saat dilimi (Docker)</b></summary>

<a id="configuring-the-timezone"></a>

<br/>

Uygulama kullanıcı arayüzündeki tarih ve saat, **tarayıcının** yerel ayarlarına ve zaman dilimine uyar. **Sunucu tarafı** davranışları (günlük kaydı vb.) için konteyner `TZ` ortam değişkenini kullanır. Varsayılan değer `TZ=Europe/London` şeklindedir.

Başka bir zaman dilimi kullanmak istiyorsanız, `TZ` değerini Compose dosyanızda şu şekilde ayarlayın:

```yaml
environment:
  - TZ=America/Sao_Paulo
```

Ya da konteyner çalıştırılırken (Docker) şu şekilde iletin:

```bash
--env TZ=America/Sao_Paulo
```

Birçok Linux sisteminde sistem zaman dilimi adını şu komutla kopyalayabilirsiniz:

```bash
echo TZ=\"$(</etc/timezone)\"
```

Geçerli zaman dilimi adlarının listesi [tz veritabanı](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) (Wikipedia) sayfasında tutulur.

</details>

<br/>

<details>
<summary><b>Windows</b></summary>

<a id="windows-electron"></a>

<br/>

- [Yayınlar](https://github.com/wsj-br/transrewrt/releases) sayfasından en son `Transrewrt Kurulum x.y.z.exe` dosyasını indirin.
- `.exe` dosyasını çalıştırın ve kurucuyu takip edin.
- İlk çalıştırma: Uygulamayı Başlat menüsünden veya masaüstü kısayolundan başlatın.
- API anahtarlarınızı **Ayarlar → API** kısmına girin. En az bir sağlayıcıyı yapılandırmanız gerekir; ücretsiz modeller için OpenRouter yaygındır.

<br/>

> ℹ️ **NOT**<br/>
> Windows, bu güvenlik uyarılarından birini gösterebilir (imzalanmamış/bağımsız uygulamalar için normaldir):
>   - **Kullanıcı Hesabı Denetimi (UAC)**: "Bilinmeyen bir yayımcıdan gelen bu uygulamanın cihazınıza değişiklik yapmasına izin vermek istiyor musunuz?" → **Evet**'e tıklayın.
>   - **Microsoft Defender SmartScreen**: "Windows PC'nizi korudu" → **Daha fazla bilgi** → **Yine de çalıştır**'a tıklayın.
>
> Bu, uygulamanın Microsoft veya büyük bir yayıncı tarafından imzalanmamış olması nedeniyle olur — resmi GitHub yayınlarımızdan indirildiyse güvenlidir (her varlığın yanında yer alan [Yayınlar](https://github.com/wsj-br/transrewrt/releases) sayfasında sağlama toplamlarını doğrulayın).

<br/>

</details>

<br/>

<details>
<summary><b>Linux</b></summary>

<a id="linux-electron"></a>

<br/>

[Yayınlar](https://github.com/wsj-br/transrewrt/releases) sayfasından CPU'nuz için uygun `.AppImage` dosyasını indirin (`x64` tipik bilgisayarlar için, `arm64` Raspberry Pi 4+ dahil birçok ARM cihaz için), ardından:

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

x86_64/amd64 üzerinde `x64` dosya adını; ARM64 üzerinde `...-arm64.AppImage` adını kullanın.

API anahtarlarınızı **Ayarlar → API** kısmına girin. En az bir sağlayıcıyı yapılandırmanız gerekir; ücretsiz modeller için OpenRouter yaygındır.

**Konsol mesajları:** Paketlenmiş Linux sürümleri (`x64` ve `arm64` AppImages), terminalde Node kullanım dışı uyarılarını bastırır (örneğin yerleşik `punycode` modülü). Chromium "GLES3 desteklenmiyor" gibi GPU / EGL hataları yazdırıyorsa ancak uygulama çalışıyor ise, donanım hızlandırmayı devre dışı bırakarak bunları sessize alabilirsiniz:

```bash
TRANSREWRT_DISABLE_GPU=1 ./Transrewrt-x.y.z-arm64.AppImage
```

Bu amd64 için de geçerlidir; indirdiğiniz dosyaya göre dosya adını değiştirin.

Debian/Ubuntu üzerinde, Chromium tarafından gerekli olan ek **çalışma zamanı** kütüphanelerine ihtiyacınız olabilir (genellikle tam masaüstü kurulumlarında zaten mevcuttur). Gerekirse aşağıdaki komutları çalıştırın:

```bash
sudo apt update
sudo apt install -y libfuse2 libgtk-3-0 libnotify4 libnss3 libnspr4 libxss1 libxtst6 xdg-utils \
     xauth libatspi2.0-0 libdrm2 libgbm1 libxcb-dri3-0 libcups2 libasound2t64
```

`arm64` için `libasound2t64` yerine `libasound2` kullanın. Minimal veya özel kurulumlar hâlâ eksik bir `.so` dosyası nedeniyle başarısız olabilir. Hata mesajında belirtilen paketi yükleyin (sık karşılaşılan ekstralar: `libatk1.0-0`, `libatk-bridge2.0-0`, `libgbm1`, `libdrm2`). Bazı ortamlarda, uygulamayı `APPIMAGE_EXTRACT_AND_RUN=1 ./Transrewrt-….AppImage` komutuyla çalıştırmak gerekebilir.

<br/>

> ℹ️ **NOT**<br/>
> macOS şu anda desteklenmemektedir. Transrewrt, Windows, Linux ve Docker için mevcuttur.

</details>

<br/>

Uygulama çalıştıktan sonra metinleri nasıl çevireceğinizi, yeniden yazacağınızı ve dönüştüreceğinizi, istemleri nasıl yöneteceğinizi ve modelleri nasıl yapılandıracağınızı öğrenmek için **[Kullanıcı Kılavuzu](USER-GUIDE.tr.md)** bölümüne bakın.

<br/><br/>

<a id="getting-an-openrouter-api-key"></a>
## OpenRouter API anahtarı alma

Transrewrt, birden fazla yapay zekâ sağlayıcısını destekler. [OpenRouter](https://openrouter.ai), birçok modeli tek bir anahtar altında toplaması ve ücretsiz modeller sunması nedeniyle popüler bir seçenektir.

1. [openrouter.ai](https://openrouter.ai) adresinde kaydolun veya giriş yapın.
2. [Keys](https://openrouter.ai/keys) sayfasını açın ve yeni bir anahtar oluşturun (isim verin ve isteğe bağlı olarak kredi limiti ayarlayın). Kredi eklemadan ücretsiz modelleri kullanabilirsiniz.
3. **Masaüstü (Electron):** anahtarları **Ayarlar → API** bölümüne yapıştırın. **Docker:** `OPENROUTER_API_KEY` gibi ortam değişkenlerini ayarlayın (bkz. [Hızlı başlangıç](#quick-start)).

Çeviri, yeniden yazma veya dönüştürme işlemleri için OpenRouter'ın **Body Builder** modelini ([`openrouter/bodybuilder`](https://openrouter.ai/openrouter/bodybuilder)) kullanmayın: bu model tamamlanmış metin yerine JSON istek yükleri döndürür. Kullanıcı Kılavuzu'ndaki [Ayarlar → Modeller](USER-GUIDE.tr.md#models) bölümüne bakın.

Ayrıca diğer sağlayıcıları (OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras) kullanabilir veya [Ollama](https://ollama.com) ile yerel modeller çalıştırabilirsiniz. Desteklenen sağlayıcıların ve ortam değişkenlerinin tam listesi için [Yapılandırma](#configuration-and-environment) bölümüne bakın.

</br>

> ⚠️ **UYARI**<br/>
> Başka bir cihazdan, kapsayıcıdan veya hizmetten Ollama kullanıyorsanız, Ollama'yı yalnızca localhost değil, dış bağlantıları da kabul edecek şekilde yapılandırmayı unutmayın.

<br/><br/>

<a id="configuration-and-environment"></a>
## Yapılandırma ve ortam

</br>

**Yapılandırma dosyası konumları**

| Dağıtım         | Yapılandırma konumu                                   |
| ------------------ | ------------------------------------------------- |
| Electron (Windows) | `%APPDATA%\transrewrt\`                           |
| Electron (Linux)   | `~/.config/transrewrt/`                           |
| Web / Docker       | `/app/data/config.json` (kalıcılık için bir birim kullanın) |

<br/>

**Ortam değişkenleri** (sadece web/Docker; Electron yerel yapılandırma dosyasını kullanır)

| Değişken             | Açıklama                                                                  |
|----------------------|------------------------------------------------------------------------------|
| `PORT`               | Sunucunun dinlediği port (varsayılan: `5000`)                                  |
| `CONFIG_PATH`        | Yapılandırma dosyasının yolu (varsayılan: `/app/data/config.json`)                 |
| `TZ`                 | Sunucu tarafı zamanı için zaman dilimi (günlük kaydı vb.) (varsayılan:  `Europe/London`) |
| `OPENROUTER_API_KEY` | OpenRouter API anahtarı                                                           |
| `OPENAI_API_KEY`     | OpenAI API anahtarı                                                               |
| `CEREBRAS_API_KEY`   | Cerebras API anahtarı                                                             |
| `ANTHROPIC_API_KEY`  | Anthropic API anahtarı                                                            |
| `GOOGLE_API_KEY`     | Google Gemini API anahtarı                                                        |
| `DEEPSEEK_API_KEY`   | DeepSeek API anahtarı                                                             |
| `GROQ_API_KEY`       | Groq API anahtarı                                                                 |
| `MISTRAL_API_KEY`    | Mistral API anahtarı                                                              |
| `OLLAMA_URL`         | Ollama taban URL'si (örneğin `http://host.docker.internal:11434`)                   |
| `XAI_API_KEY`        | xAI API anahtarı                                                                  |

Sadece kullandığınız sağlayıcıları yapılandırın. Model kimlikleri isim alanı kullanır (`openrouter/…`, `openai/…`, `cerebras/…`, `ollama/…`, vb.).

**Maliyet gösterimi:** OpenRouter, geçerliyse tam faturalanan maliyeti döndürür. Diğer sağlayıcılar, OpenRouter anahtarı mevcutsa OpenRouter'ın genel model fiyatlarından **tahmini** maliyet kullanır; anahtar yoksa, OpenRouter olmayan maliyet `0` olarak görünebilir. Tahminler fatura değildir.

<br/>

**Veri ve kalıcılık:** Docker için, `config.json` ve SQLite veritabanının kapsayıcı yeniden başlatmalarında kalıcı olması amacıyla `/app/data` konumuna bir birim bağlayın. Birim olmadan, kapsayıcı durduğunda tüm veriler kaybolur.

<br/>

**Web kimlik doğrulaması:**

- Varsayılan yönetici: `admin` / `transrewrt26`.
- Kullanıcıları **Ayarlar → Kullanıcılar** kısmında yönetin.
- Şifre sıfırlama: `docker exec <container> reset-web-password '<kullanıcıadı>' '<yeni-şifre>'`

<br/>

> ⚠️ **UYARI**<br/>
> Herhangi bir ağdan erişilebilen sunucuda varsayılan yönetici şifresini hemen değiştirin.

<br/>

Ana ayarlar (yazı tipi, modeller, diller, vb.) uygulama Ayarlar bölümünde mevcuttur.

<br/><br/>

<a id="development-and-architecture"></a>
## Geliştirme ve mimari

- **Geliştirme:** Kurulum, derleme, test ve dağıtma (Electron, Web, Docker) - **[dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)** bölümüne bakın.
- **Mimari ve sistem genel bakış:** Klasör yapısı, teknoloji yığını, tasarım kararları - **[dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)** bölümüne bakın.

<br/><br/>

<a id="reporting-issues"></a>
## Sorun bildirme

Sorun bildirmek için [GitHub](https://github.com/wsj-br/transrewrt/issues) sayfasını kullanın. Platformunuzu (Windows / Linux / Docker) ve uygulama sürümünüzü (Hakkında penceresinde veya Sürümler sayfasında gösterilir) ekleyin.

<br/><br/>

<a id="disclaimer"></a>
## Uyarı

Ürün adları ve simgeleri ilgili sahiplerine aittir ve sadece tanımlama amacıyla kullanılır. Bu yazılım, bahsedilen markalarla bağlantılı değildir veya onların desteğiyle değildir.

<br/><br/>

<a id="license"></a>
## Lisans

Telif Hakkı © 2026 Waldemar Scudeller Jr.

[Apache License 2.0](../LICENSE)
