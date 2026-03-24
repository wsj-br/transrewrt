---
translated_at: "2026-03-24T03:42:14.376Z"
source_hash: "718acd12f14755cd75ebf7d09b86d9a1df37ebe1898710080fa8e80c1221d58b"
source_mtime: 1774311390366.3484
model: "qwen/qwen3-235b-a22b-2507"
---
<p align="center">
  <img src="../images/transrewrt_logo.svg" alt="Transrewrt logosu" width="120" />
</p>

<h1 align="center">Transrewrt</h1>

<p align="center">
  <a href="https://github.com/wsj-br/transrewrt/releases"><img src="https://img.shields.io/badge/version-1.0.14-blue" alt="Sürüm"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-Apache%202.0-green" alt="Lisans: Apache 2.0"></a>
  <img src="https://img.shields.io/badge/platform-Windows%20%7C%20Linux%20%7C%20Docker-lightgrey" alt="Platform">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react" alt="React 19">
  <img src="https://img.shields.io/badge/Electron-41-47848F?logo=electron" alt="Electron 41">
</p>

Yapay zekâ destekli metin aracı: birden fazla yapay zekâ sağlayıcısı kullanarak (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI ve yerel Ollama) diller arasında çevirin, farklı stillerde yeniden yazın veya özel istemlerle dönüştürün. Masaüstü uygulaması (Electron) ya da kendi sunucunuza kurulabilir web uygulaması (Docker) olarak çalışır.

- **Çevir** — onlarca dil arasında, kaynak dili otomatik algılama ile
- **Yeniden Yaz** — dilbilgisi düzelt, açıklığı artır, resmî/resmî olmayan, kısa yap, uzat, teknik
- **Dönüştür** — özel yapay zekâ istemleri; istem oluştur ve yönet, her istem için isteğe bağlı hedef dil
- **Geçmiş** — giriş/çıkış metinleri ile birlikte tam yürütme geçmişi, süzme ve dışa aktarma
- **Modeller ve maliyet** — yapılandırılan her sağlayıcıdan modelleri seç; maliyet panosu, SQLite günlüğü, özetler (model/işlem/güne göre)
- **Kullanıcı Arayüzü** — çok dilli arayüz (30+ dil, RTL desteği), yazı tipleri, ...
- **Web Kipi** — yönetici rolleriyle çok kullanıcılı destek; API anahtarları sunucu tarafında kalır, asla tarayıcıya aktarılmaz
- **Masaüstü** — Windows ve Linux için Electron uygulaması
- **Kendin barındır** — amd64 ve arm64 (Raspberry Pi için uygundur) için Docker görüntüsü

Kurulum sonrasında tüm özellikleri kapsamlı bir şekilde öğrenmek için **[Kullanıcı Kılavuzu](USER-GUIDE.tr.md)** sayfasına göz atın.

<small>**Diğer dillerde oku:** [English (UK)](README.tr.md) · [Português (BR)](README.pt-BR.md) · [العربية](README.ar.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [Hrvatski](README.hr.md) · [Čeština](README.cs.md) · [Nederlands](README.nl.md) · [English (US)](README.en-US.md) · [Filipino](README.tl.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [हिन्दी](README.hi.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [Basa Jawa](README.jv.md) · [한국어](README.ko.md) · [Bahasa Melayu](README.ms.md) · [فارسی](README.fa.md) · [Polski](README.pl.md) · [Português (PT)](README.pt.md) · [ਪੰਜਾਬੀ](README.pa.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [Slovenčina](README.sk.md) · [Español](README.es.md) · [Kiswahili](README.sw.md) · [Svenska](README.sv.md) · [తెలుగు](README.te.md) · [ภาษาไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Tiếng Việt](README.vi.md)</small>

<br/>

**Not: Kullanıcı arayüzü ve belgelerin çevirisi hakkında** — İngilizce (UK) dışındaki tüm arayüz dilleri yapay zekâ modelleri kullanılarak çevrilmiştir; kelime seçimi eksik ya da hatalar içerebilir.



<a id="screenshots"></a>
## Ekran Görüntüleri

**Dil seçici**

![Dil seçici](../images/screenshots/tr/language-selector.png)

**Çevir**

![Çevir](../images/screenshots/tr/translate.png)

**Dönüştür - istem düzenleyici**

![Dönüştür - istem düzenleyici](../images/screenshots/tr/transform-prompt-edit.png)

**Pano**

![Maliyet panosu](../images/screenshots/tr/dashboard-summary.png)

**Geçmiş**

![Geçmiş](../images/screenshots/tr/history.png)

**Ayarlar - model seçimi**

![Ayarlar - model seçimi](../images/screenshots/tr/settings-models.png)

<br/><br/>

<a id="table-of-contents"></a>

## İçindekiler

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Hızlı Başlangıç](#quick-start)
- [Yükleme](#installation)
  - [Windows (Electron)](#windows-electron)
  - [Linux (Electron)](#linux-electron)
  - [Docker](#docker)
- [OpenRouter API anahtarı alma](#getting-an-openrouter-api-key)
- [Yapılandırma ve ortam](#configuration-and-environment)
- [Geliştirme ve mimari](#development-and-architecture)
- [Sürümler ve etiketler](#releases-and-tags)
- [Katkıda bulunma](#contributing)
- [Feragatname](#disclaimer)
- [Lisans](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="quick-start"></a>
## Hızlı Başlangıç

**Docker (kendi sunucuda barındırmak için önerilir)**

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest

OPENROUTER_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

`sk-or-your-key` yerine kendi [OpenRouter API anahtarınızı](https://openrouter.ai/keys) yazın (veya başka sağlayıcı anahtarları da kullanabilirsiniz; bkz. [Yapılandırma](#configuration-and-environment)). [http://localhost:5000](http://localhost:5000) adresini açın ve hizmeti harici erişime açmadan önce varsayılan yönetici şifresini değiştirin.

<br/>

> ℹ️ **NOT**<br/>
> Docker kullanırken, LLM kimlik bilgileri `OPENROUTER_KEY`, `OPENAI_KEY` gibi ortam değişkenleriyle ayarlanır (web arayüzünde değil). Masaüstü (Electron) sürümünde anahtarları **Ayarlar → API** bölümünde yapılandırırsınız.

<br/>

**Windows**

En son `Transrewrt Setup x.y.z.exe` dosyasını [Sürümler](https://github.com/wsj-br/transrewrt/releases) sayfasından indirin, kurulumu çalıştırın ve ardından Başlat menüsünden veya masaüstü kısayolundan uygulamayı başlatın. API anahtarlarınızı **Ayarlar → API** kısmına girin. En az bir sağlayıcıyı yapılandırmanız gerekir. Ücretsiz modeller için genellikle OpenRouter tercih edilir.

<br/>

**Linux**

[Releases](https://github.com/wsj-br/transrewrt/releases) sayfasından `.AppImage` dosyasını indirin, ardından:

```bash
chmod +x Transrewrt-x.y.z.AppImage && ./Transrewrt-x.y.z.AppImage
```

API anahtarlarınızı **Ayarlar → API** kısmına girin. En az bir sağlayıcıyı yapılandırmanız gerekir. Ücretsiz modeller için genellikle OpenRouter tercih edilir.

Debian/Ubuntu kullanıyorsanız önce bazı ek bağımlılıkları yüklemeniz gerekebilir:

```bash
sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth
```

Ayrıntılar için bkz. [Yükleme → Linux](#linux-electron).

<br/>

> ℹ️ **NOT**<br/>
> Şu anda macOS desteklenmemektedir. Transrewrt, Windows, Linux ve Docker için mevcuttur.

<br/>

Uygulama çalıştıktan sonra metin çeviri, yeniden yazım ve dönüşümünü öğrenmek, promptları yönetmek ve modelleri yapılandırmak için **[Kullanıcı Kılavuzu'na](USER-GUIDE.tr.md)** göz atın.

<br/><br/>

<a id="installation"></a>
## Yükleme

<a id="windows-electron"></a>
### Windows (Electron)

- [Sürümler](https://github.com/wsj-br/transrewrt/releases) sayfasından en son kurulum dosyasını indirin.
- `.exe` dosyasını çalıştırın ve kurulum sihirbazını takip edin.
- İlk çalıştırma: uygulamayı Başlat menüsünden veya masaüstü kısayolundan başlatın.

<br/>

<a id="linux-electron"></a>
### Linux (Electron)

- [Sürümler](https://github.com/wsj-br/transrewrt/releases) sayfasından `.AppImage` dosyasını indirin.
- Çalıştırın: `chmod +x Transrewrt-x.y.z.AppImage && ./Transrewrt-x.y.z.AppImage`
- Ek bağımlılıklar (Debian/Ubuntu): `sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth`
- Daha fazlası için [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) dosyasına bakın.

<br/>

<a id="docker"></a>
### Docker

- Çekin: `docker pull ghcr.io/wsj-br/transrewrt:latest`
- Ortam aracılığıyla en az bir sağlayıcı anahtarı ayarlayın (örneğin OpenRouter için `OPENROUTER_KEY`). Değişkenleri `-e` ile ya da `docker compose` / `.env` dosyasıyla geçirin, böylece gizli anahtarlar imaja gömülmüş olmaz.
- Sağlayıcı anahtarları **web arayüzünde** girilmez; sunucu bunları ortamdan okur.

Örnek - Kalıcılık için adlandırılmış birim (ortam aracılığıyla OpenRouter anahtarı):

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
| Port     | `5000` (`-p 5000:5000` ile eşlenebilir)                                                                      |
| Birim    | Kalıcı yapılandırma ve veritabanı için `/app/data` birimini bağlamanız gerekir                               |
| Ortam değişkenleri | `PORT`, `CONFIG_PATH`, ve LLM anahtarları (`OPENROUTER_KEY`, `OPENAI_KEY`, …) - bkz. [Yapılandırma](#configuration-and-environment) |

Kaynaktan derlemek ve çalıştırmak için: `docker compose up --build -d` ya da `pnpm docker:up` - ayrıntılar için [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)'ye bakın.

<br/><br/>

<a id="getting-an-openrouter-api-key"></a>

## OpenRouter API anahtarı alma

Transrewrt, birden fazla yapay zeka sağlayıcısını destekler. [OpenRouter](https://openrouter.ai), birçok modeli tek bir anahtar altında toplaması ve ücretsiz modeller sunması nedeniyle popüler bir seçenektir.

1. [openrouter.ai](https://openrouter.ai) adresinde kaydolun veya giriş yapın.
2. [Keys](https://openrouter.ai/keys) sayfasını açın ve yeni bir anahtar oluşturun (isimlendirin ve isteğe bağlı kredi limiti ayarlayın). Kredi eklemeye gerek olmadan ücretsiz modelleri kullanabilirsiniz.
3. **Masaüstü (Electron):** anahtarları **Ayarlar → API** bölümüne yapıştırın. **Docker:** `OPENROUTER_KEY` gibi ortam değişkenlerini ayarlayın (bkz. [Hızlı başlangıç](#quick-start)).

Diğer sağlayıcıları (OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI) kullanabilir veya [Ollama](https://ollama.com) ile modelleri yerel olarak çalıştırabilirsiniz. Desteklenen sağlayıcıların ve ortam değişkenlerinin tam listesi için [Yapılandırma](#configuration-and-environment) bölümüne bakın.

Limitler, kendi anahtarınızı kullanma (BYOK) ve diğer ayrıntılar için [OpenRouter kimlik doğrulaması](https://openrouter.ai/docs/api/reference/authentication) sayfasına bakın.

<br/><br/>

<a id="configuration-and-environment"></a>
## Yapılandırma ve ortam

**Yapılandırma dosyası konumları**

| Dağıtım            | Yapılandırma konumu                                |
| ------------------ | --------------------------------------------------- |
| Electron (Windows) | `%APPDATA%\transrewrt\`                             |
| Electron (Linux)   | `~/.config/transrewrt/`                             |
| Web / Docker       | `/app/data/config.json` (devamlı kullanım için volume kullanın) |

<br/>

**Ortam değişkenleri** (sadece web/Docker; Electron yerel yapılandırma dosyasını kullanır)

| Değişken           | Varsayılan              | Açıklama |
| ------------------ | ----------------------- | -------- |
| `PORT`             | `5000`                  | Sunucunun dinlediği port |
| `CONFIG_PATH`      | `/app/data/config.json` | Yapılandırma dosyasının yolu |
| `OPENROUTER_KEY`   | *(boş)*                 | OpenRouter API anahtarı |
| `OPENAI_KEY`       | *(boş)*                 | OpenAI API anahtarı |
| `ANTHROPIC_KEY`    | *(boş)*                 | Anthropic API anahtarı |
| `GOOGLE_KEY`       | *(boş)*                 | Google Gemini API anahtarı |
| `DEEPSEEK_KEY`     | *(boş)*                 | DeepSeek API anahtarı |
| `GROQ_KEY`         | *(boş)*                 | Groq API anahtarı |
| `MISTRAL_KEY`      | *(boş)*                 | Mistral API anahtarı |
| `OLLAMA_URL`       | *(boş)*                 | Ollama temel URL'si (örneğin `http://host.docker.internal:11434`) |
| `XAI_KEY`          | *(boş)*                 | xAI API anahtarı |

Sadece kullanacağınız sağlayıcıları yapılandırın. Model kimlikleri isim alanına sahiptir (`openrouter/…`, `openai/…`, `ollama/…`, vb.).

**Maliyet gösterimi:** OpenRouter, geçerliyse kesin faturalandırılan maliyeti döndürür. Diğer sağlayıcılar, OpenRouter anahtarı varsa OpenRouter'ın kamuya açık model fiyatlarından **tahmini** maliyet kullanır; anahtar yoksa, OpenRouter dışı maliyet `0` olarak görünebilir. Tahminler fatura niteliği taşımaz.

<br/>

**Veri ve süreklilik:** Docker için, `config.json` ve SQLite veritabanının konteyner yeniden başlatmalarında korunabilmesi amacıyla `/app/data` konumuna bir volume bağlayın. Volume kullanılmazsa, konteyner durduğunda tüm veriler kaybolur.

**Geliştiriciler için:** Eski tek anahtar yapılandırmasını değiştiren değişiklikleri çekdikten sonra, yerel dosyanız hala kaldırılan alanları (`api_key`, `api_url`, proxy seçenekleri) kullanıyorsa `data/config.json` dosyasını `src/config-defaults/config_default.json` dosyasındaki yeni varsayılan yapıyla sıfırlayın ya da birleştirin.

<br/>

**Web kimlik doğrulaması:**

- Varsayılan yönetici: `admin` / `transrewrt26`.
- Kullanıcıları **Ayarlar → Kullanıcılar** bölümünden yönetin.
- Şifre sıfırlama: `docker exec <container> reset-web-password '<username>' '<new-password>'`  
  (kaynaktan: `pnpm run reset-web-password -- <username> <new-password>`)

<br/>

> ⚠️ **UYARI**<br/>
> Herhangi bir ağa açık bir sunucuda varsayılan yönetici şifresini hemen değiştirin.

<br/>

Anahtar ayarlar (yazı tipi, modeller, diller vb.) uygulamanın Ayarlar bölümünde mevcuttur.

<br/><br/>

<a id="development-and-architecture"></a>
## Geliştirme ve mimari

- **Geliştirme:** Kurulum, derleme, test ve dağıtım (Electron, Web, Docker) - bkz. **[dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)**.
- **Mimari ve sistem genel bakış:** Klasör yapısı, teknoloji yığını, tasarım kararları - bkz. **[dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)**.

<br/><br/>

<a id="releases-and-tags"></a>

## Sürümler ve etiketler

- **Git etiketleri** `v`* (örneğin `v1.0.10`) [sürüm iş akışını](.github/workflows/release.yml) tetikler. **GitHub Sürümleri**, Windows kurulum programı (`.exe`) ve Linux AppImage'ini ekler.
- **Docker imajları**, `ghcr.io/wsj-br/transrewrt` adresine yayınlanır. Görüntü etiketleri Git sürümüyle eşleşir (örneğin `v1.0.10` → `ghcr.io/wsj-br/transrewrt:1.0.10`) ve ayrıca `latest` etiketi eklenir. Çoklu mimari: `linux/amd64` ve `linux/arm64` (örneğin Raspberry Pi).

<br/><br/>

<a id="contributing"></a>
## Katkıda Bulunma

1. Depoyu çatallayın.
2. Bir özellik dalı oluşturun: `git checkout -b feature/my-feature`
3. Değişikliklerinizi açık bir mesajla kaydedin.
4. Gönderin ve `main` dalına karşı bir Pull Request (çekme isteği) açın.

Lütfen sunmadan önce mevcut kod stilini takip edin ve değişikliklerinizi hem Electron hem de web modlarında test edin. Yapı kurma ve test etme talimatları için [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) dosyasına bakın.

<br/>

**Sorun bildirme:** [GitHub](https://github.com/wsj-br/transrewrt/issues)'da bir sorun açın. Platformunuzu (Windows / Linux / Docker) ve uygulama sürümünüzü (Hakkında penceresinde veya Sürümler sayfasında gösterilir) ekleyin.

<br/><br/>

<a id="disclaimer"></a>
## Uyarı

Ürün isimleri ve simgeleri sahiplerine aittir ve yalnızca tanımlama amacıyla kullanılır. Bu yazılım, bahsedilen markalarla hiçbir şekilde bağlantılı değildir veya desteklenmez.

<br/><br/>

<a id="license"></a>
## Lisans

Telif Hakkı © 2026 Waldemar Scudeller Jr.

[Apache Lisansı 2.0](LICENSE)