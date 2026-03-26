---
translated_at: "2026-03-26T01:10:50.072Z"
source_hash: "d5d19d18eadc9060d8db2f32f47dc8174ee783feea992030f3c686debc714a88"
source_mtime: 1774482559451.2136
model: "qwen/qwen3-235b-a22b-2507"
---
<p align="center">
  <img src="../images/transrewrt_logo.svg" alt="Transrewrt logosu" width="120" />
</p>

<h1 align="center">Transrewrt</h1>

<p align="center">
  <a href="https://github.com/wsj-br/transrewrt/releases"><img src="https://img.shields.io/badge/version-1.0.15-blue" alt="Sürüm"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-Apache%202.0-green" alt="Lisans: Apache 2.0"></a>
  <img src="https://img.shields.io/badge/platform-Windows%20%7C%20Linux%20%7C%20Docker-lightgrey" alt="Platform">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react" alt="React 19">
  <img src="https://img.shields.io/badge/Electron-41-47848F?logo=electron" alt="Electron 41">
</p>

Yapay zeka destekli metin aracı: birden fazla yapay zeka sağlayıcısını kullanarak (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI ve yerel Ollama) diller arasında çevir, farklı stillerde yeniden yaz ve özel istemlerle dönüştür. Masaüstü uygulaması (Electron) veya kendi sunucunuza kurabileceğiniz bir web uygulaması (Docker) olarak çalışır.

- **Çevir** — Otomatik kaynak algılama ile düzinece dile çevir
- **Yeniden yaz** — Dilbilgisi düzelt, anlaşılırlığı artır, resmi/resmi olmayan, kısa, uzun, teknik biçimler
- **Dönüştür** — Özel yapay zeka istemleri; istem oluştur ve yönet, her istem için isteğe bağlı hedef dil
- **Geçmiş** — Girdi/çıktı metinleri, filtreleme ve dışa aktarma ile tam yürütme geçmişi
- **Modeller & maliyet** — Yapılandırılmış herhangi bir sağlayıcıdan model seçin; model/işlem/gün bazında kullanım ve maliyet panosu, günlük kaydı, özetler
- **Arayüz** — Çok dilli arayüz (30+ dil, RTL desteği), yazı tipleri, ...
- **Web kipi** — Yönetici rolleri ile çok kullanıcılı destek
- **Masaüstü** — Windows ve Linux için Electron uygulaması
- **Kendi sunucusuna kurulum** — amd64 ve arm64 için Docker görüntüsü (Raspberry Pi uyumlu)

Yükledikten sonra tüm özellikleri kapsamlı bir şekilde öğrenmek için **[Kullanıcı Kılavuzu'na](USER-GUIDE.tr.md)** göz atın.

<small>**Diğer dillerde oku:** </small>
<small id="lang-list"> [English (UK)](../README.md) · [Português (BR)](README.pt-BR.md) · [العربية](README.ar.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [Hrvatski](README.hr.md) · [Čeština](README.cs.md) · [Nederlands](README.nl.md) · [English (US)](README.en-US.md) · [Filipino](README.tl.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [हिन्दी](README.hi.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [Basa Jawa](README.jv.md) · [한국어](README.ko.md) · [Bahasa Melayu](README.ms.md) · [فارسی](README.fa.md) · [Polski](README.pl.md) · [Português (PT)](README.pt.md) · [ਪੰਜਾਬੀ](README.pa.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [Slovenčina](README.sk.md) · [Español](README.es.md) · [Kiswahili](README.sw.md) · [Svenska](README.sv.md) · [తెలుగు](README.te.md) · [ภาษาไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Tiếng Việt](README.vi.md)</small>

<small>

> **Arayüz ve belgeler için çeviri notu:** İngilizce (UK) orijinal dil dışındaki tüm arayüz çevirileri yapay zeka modelleri kullanılarak yapılmıştır; ifadeler eksiksiz olmayabilir veya hatalar içerebilir.

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

**Pano**

![Maliyet pano](../images/screenshots/tr/dashboard-summary.png)

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
- [Bir OpenRouter API anahtarı edinme](#getting-an-openrouter-api-key)
- [Yapılandırma ve ortam](#configuration-and-environment)
- [Geliştirme ve mimari](#development-and-architecture)
- [Sürümler ve etiketler](#releases-and-tags)
- [Katkıda bulunma](#contributing)
- [Feragatname](#disclaimer)
- [Lisans](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="quick-start"></a>
## Hızlı başlangıç

**Docker (kendine barındırma için önerilir)**

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest

OPENROUTER_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

`sk-or-your-key` değerini [OpenRouter API anahtarınızla](https://openrouter.ai/keys) değiştirin (veya diğer sağlayıcı anahtarlarını ayarlayın; bkz. [Yapılandırma](#configuration-and-environment)). [http://localhost:5000](http://localhost:5000) adresini açın ve hizmeti dışa açmadan önce varsayılan yönetici şifresini değiştirin.

<br/>

> ℹ️ **NOT**<br/>
> Docker kullanırken, LLM kimlik bilgileri, `OPENROUTER_KEY`, `OPENAI_KEY`, `CEREBRAS_KEY` gibi ortam değişkenleriyle ayarlanır (web arayüzünde değil). Masaüstünde (Electron) anahtarları **Ayarlar → API** bölümünde yapılandırırsınız.

<br/>

**Windows**

[Releases](https://github.com/wsj-br/transrewrt/releases) sayfasından en son `Transrewrt Kurulum x.y.z.exe` dosyasını indirin, kurucuyu çalıştırın, ardından Başlat menüsünden veya masaüstü kısayolundan başlatın. API anahtarlarınızı **Ayarlar → API** kısmına girin. En az bir sağlayıcıyı yapılandırmanız gerekir; ücretsiz modeller için OpenRouter yaygın bir seçimdir.

<br/>

**Linux**

[Releases](https://github.com/wsj-br/transrewrt/releases) sayfasından CPU'nuz uygun `.AppImage` dosyasını indirin (`x64` tipik bilgisayarlar için, `arm64` ARM cihazlar, Raspberry Pi 4+ dahil, için), sonra şu komutu çalıştırın:

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

API anahtarlarınızı **Ayarlar → API** ekranından girin. En az bir sağlayıcıyı yapılandırmanız gerekir; ücretsiz modeller için OpenRouter yaygın bir yapılandırmadır.

Debian/Ubuntu sistemlerde önce ek bağımlılıkları yüklemeniz gerekebilir:

```bash
sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth
```

Ayrıntılar için [Yükleme → Linux](#linux-electron) bölümüne bakınız.

<br/>

> ℹ️ **NOT**<br/>
> Şu anda macOS desteklenmemektedir. Transrewrt Windows, Linux ve Docker için mevcuttur.

<br/>

Uygulama başladıktan sonra, metin çeviri, yeniden yazma ve dönüştürme işlevlerini, ipucu yönetimi ve model yapılandırmasını öğrenmek için **[Kullanıcı Kılavuzu'na](USER-GUIDE.tr.md)** bakın.

<br/><br/>

<a id="installation"></a>
## Yükleme

<a id="windows-electron"></a>
### Windows (Electron)

- [Releases](https://github.com/wsj-br/transrewrt/releases) sayfasından en son kurucuyu indirin.
- `.exe` dosyasını çalıştırın ve kurulumu takip edin.
- İlk kullanım: uygulamayı Başlat menüsünden veya masaüstü kısayolundan başlatın.

<br/>

<a id="linux-electron"></a>
### Linux (Electron)

- [Releases](https://github.com/wsj-br/transrewrt/releases) sayfasından uygun `.AppImage` dosyasını indirin (`x64` veya `arm64`).
- Çalıştırın: x86_64/amd64 sistemlerinde `chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage` komutunu kullanın veya ARM64 sistemlerde `...-arm64.AppImage` dosyasını kullanın.
- Ek bağımlılıklar (Debian/Ubuntu): `sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth`
- Daha fazlası için [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) dosyasına bakın.

<br/>

<a id="docker"></a>
### Docker

- İndirin: `docker pull ghcr.io/wsj-br/transrewrt:latest`
- En az bir sağlayıcı anahtarı ortam değişkeni ile ayarlayın (örneğin OpenRouter için `OPENROUTER_KEY`). Gizli bilgilerin imaj içine gömülmemesi için değişkenleri `-e` veya `docker compose` / `.env` ile aktarın.
- Sağlayıcı anahtarları web arayüzünde değil, sunucu tarafından ortamdan okunur.

Örnek - Kalıcı olarak kullanılan isimlendirilmiş birim (OpenRouter anahtarı ortamdan alınır):

```bash
OPENROUTER_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

<br/>

| Seçenek   | Açıklama                                                                                                   |
| -------- | ------------------------------------------------------------------------------------------------------------- |
| Bağlantı noktası  | `5000` (bağlamak için `-p 5000:5000` kullanın)                                                                              |
| Birim   | Kalıcılık için `/app/data` dizinini bağlayın                                                        |
| Ortam değişkenleri | `PORT`, `CONFIG_PATH`, artı LLM anahtarları (`OPENROUTER_KEY`, `OPENAI_KEY`, …) - bkz. [Yapılandırma](#configuration-and-environment) |

Kaynaktan inşa etmek ve çalıştırmak için: `docker compose up --build -d` veya `pnpm docker:up` - detaylar için [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) bölümüne bakın.

<br/><br/>

<a id="getting-an-openrouter-api-key"></a>

## OpenRouter API anahtarı alma

Transrewrt, birden fazla yapay zeka sağlayıcısını destekler. [OpenRouter](https://openrouter.ai), birçok modeli tek bir anahtar altında toplaması ve ücretsiz modeller sunması nedeniyle popülerdir.

1. [openrouter.ai](https://openrouter.ai) adresinden üye olun ya da oturum açın.
2. [Keys](https://openrouter.ai/keys) sayfasını açın ve yeni bir anahtar oluşturun (isimlendirin, isteğe bağlı olarak kredi limiti ayarlayabilirsiniz). Kredi eklemeye gerek kalmadan ücretsiz modelleri kullanabilirsiniz.
3. **Masaüstü (Electron):** Anahtarları **Ayarlar → API** bölümüne yapıştırın. **Docker:** `OPENROUTER_KEY` gibi ortam değişkenlerini belirtin (bkz. [Hızlı başlangıç](#quick-start)).

Çeviri, yeniden yazma veya dönüştürme işlemleri için OpenRouter'ın **Body Builder** modelini ([`openrouter/bodybuilder`](https://openrouter.ai/openrouter/bodybuilder)) kullanmayın: bu model tamamlanmış metin değil, JSON istekleri döndürür. Kullanım kılavuzundaki [Ayarlar → Modeller](USER-GUIDE.tr.md#models) bölümüne bakın.

Ayrıca diğer sağlayıcıları (OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras) kullanabilir veya [Ollama](https://ollama.com) ile modelleri yerel olarak çalıştırabilirsiniz. Desteklenen sağlayıcılar ve ortam değişkenlerinin tam listesi için [Yapılandırma](#configuration-and-environment) bölümüne bakın.

> ⚠️ **UYARI**<br/>
> Başka bir cihaz, konteyner veya hizmetten Ollama kullanıyorsanız, Ollama'nın yalnızca localhost değil, dış bağlantıları da kabul edecek şekilde yapılandırıldığından emin olun.


Sınırlar, BYOK (kendi anahtarınızla getirin) ve daha fazlası için [OpenRouter authentication](https://openrouter.ai/docs/api/reference/authentication) sayfasına bakın.

<br/><br/>

<a id="configuration-and-environment"></a>
## Yapılandırma ve ortam

**Yapılandırma dosyası konumları**

| Dağıtım            | Yapılandırma konumu                            |
| ------------------ | ---------------------------------------------- |
| Electron (Windows) | `%APPDATA%\transrewrt\`                        |
| Electron (Linux)   | `~/.config/transrewrt/`                        |
| Web / Docker       | `/app/data/config.json` (kalıcılık için birim kullanın) |

<br/>

**Ortam değişkenleri** (sadece web/Docker; Electron yerel yapılandırma dosyasını kullanır)

| Değişken           | Varsayılan             | Açıklama |
| ------------------ | ---------------------- | -------- |
| `PORT`             | `5000`                 | Sunucunun dinlediği port |
| `CONFIG_PATH`      | `/app/data/config.json`| Yapılandırma dosyasının yolu |
| `OPENROUTER_KEY`   | *(boş)*                | OpenRouter API anahtarı |
| `OPENAI_KEY`       | *(boş)*                | OpenAI API anahtarı |
| `CEREBRAS_KEY`     | *(boş)*                | Cerebras API anahtarı |
| `ANTHROPIC_KEY`    | *(boş)*                | Anthropic API anahtarı |
| `GOOGLE_KEY`       | *(boş)*                | Google Gemini API anahtarı |
| `DEEPSEEK_KEY`     | *(boş)*                | DeepSeek API anahtarı |
| `GROQ_KEY`         | *(boş)*                | Groq API anahtarı |
| `MISTRAL_KEY`      | *(boş)*                | Mistral API anahtarı |
| `OLLAMA_URL`       | *(boş)*                | Ollama temel URL'si (örn. `http://host.docker.internal:11434`) |
| `XAI_KEY`          | *(boş)*                | xAI API anahtarı |

Kullandığınız sağlayıcıları yapılandırın. Model kimlikleri isim alanı kullanır (`openrouter/…`, `openai/…`, `cerebras/…`, `ollama/…`, vs.).

**Maliyet gösterimi:** Uygunsa OpenRouter gerçek faturalanan maliyeti döndürür. Diğer sağlayıcılar, OpenRouter anahtarı mevcutsa OpenRouter'ın genel model fiyatlarından **tahmini** maliyet kullanır; anahtar yoksa, OpenRouter olmayan maliyetler `0` olarak görünebilir. Tahminler fiş değildir.

<br/>

**Veri ve kalıcılık:** Docker için, `config.json` ve SQLite veritabanının konteyner yeniden başlatmalarında kaybolmaması için `/app/data` konumuna bir birim (volume) bağlayın. Bir birim kullanılmazsa, konteyner durduğunda tüm veriler kaybolur.

**Geliştiriciler:** Eski tek anahtar yapılandırmasını değiştiren değişiklikleri çekdikten sonra, yerel dosyanız hâlâ kaldırılan alanları kullanıyorsa (`api_key`, `api_url`, proxy ayarları), `data/config.json` dosyasını `src/config-defaults/config_default.json` içindeki yeni varsayılan yapıyla sıfırlayın veya birleştirin.

<br/>

**Web kimlik doğrulaması:**

- Varsayılan yönetici: `admin` / `transrewrt26`.
- Kullanıcıları **Ayarlar → Kullanıcılar** bölümünde yönetin.
- Şifre sıfırlama: `docker exec <container> reset-web-password '<username>' '<new-password>'`
  (kaynaktan: `pnpm run reset-web-password -- <username> <new-password>`)

<br/>

> ⚠️ **UYARI**<br/>
> Herhangi bir ağa açık sunucuda, varsayılan yönetici şifresini hemen değiştirin.

<br/>

Anahtar ayarlar (yazı tipi, modeller, diller, vb.) uygulamanın Ayarlar bölümünde bulunur.

<br/><br/>

<a id="development-and-architecture"></a>

## Geliştirme ve mimari

- **Geliştirme:** Kurulum, derleme, test ve dağıtma (Electron, Web, Docker) - bkz. **[dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)**.
- **Mimari ve sistem genel bakış:** Klasör yapısı, teknoloji yığını, tasarım kararları - bkz. **[dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)**.

<br/><br/>

<a id="releases-and-tags"></a>
## Sürümler ve etiketler

- **Git etiketleri** `v`* (örn. `v1.0.10`) [sürüm iş akışını](.github/workflows/release.yml) tetikler. **GitHub Sürümleri**, Windows kurulum dosyasını (`.exe`) ve Linux AppImage'lerini (**x64** ve **arm64**) ekler.
- **Docker görüntüler** `ghcr.io/wsj-br/transrewrt` adresinde yayımlanır. Görüntü etiketleri Git sürümüyle eşleşir (örneğin `v1.0.10` → `ghcr.io/wsj-br/transrewrt:1.0.10`), ayrıca `latest` etiketi de bulunur. Çoklu mimari: `linux/amd64` ve `linux/arm64` (örneğin Raspberry Pi).

<br/><br/>

<a id="contributing"></a>
## Katkıda Bulunma

1. Depoyu kopyalayın.
2. Bir özellik dalı oluşturun: `git checkout -b feature/ozellik-adi`
3. Değişikliklerinizi açık bir mesajla kaydedin.
4. Yayınlamak ve Ana (main) dalına karşı bir Pull Request açmak için gönderin.

Lütfen sunmadan önce mevcut kod tarzına uyun ve değişikliklerinizi hem Electron hem de web modlarında test edin. Derleme ve test talimatları için [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) dosyasına bakın.

<br/>

**Sorun bildirme:** [GitHub](https://github.com/wsj-br/transrewrt/issues) üzerinden bir sorun açın. Platformunuzu (Windows / Linux / Docker) ve uygulama sürümünüzü (Hakkında penceresinde veya Sürümler sayfasında gösterilir) ekleyin.

<br/><br/>

<a id="disclaimer"></a>
## Sorumluluk Reddi

Ürün isimleri ve sembolleri ait oldukları sahiplerindir ve yalnızca tanımlama amacıyla kullanılır. Bu yazılım, bahsedilen markalarla hiçbir şekilde ilişkili değildir veya desteklenmez.

<br/><br/>

<a id="license"></a>
## Lisans

Telif Hakkı © 2026 Waldemar Scudeller Jr.

[Apache Lisansı 2.0](LICENSE)