---
translated_at: "2026-03-27T23:16:28.147Z"
source_hash: "076eff841a5f0e4f5c43a00dd28f2702bd2dde0602a830890285b5ffdc38ad5a"
source_mtime: "2026-03-27T20:34:13.877Z"
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

Yapay zekâ destekli metin aracı: farklı dillere çevirme, farklı stillerde yeniden yazma ve özel istemlerle dönüştürme — çoklu yapay zekâ sağlayıcıları kullanarak (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI ve yerel Ollama). Masaüstü uygulaması (Electron) veya kendi ortamında barındırılan bir web uygulaması (Docker) olarak çalışır.

- **Çevir** — otomatik kaynak algılama ile onlarca dil arasında çevir
- **Tekrar yaz** — dilbilgisi düzeltme, anlaşılırlığı artırma, resmi/resmi olmayan, kısaltma, genişletme, teknik dil
- **Dönüştür** — özel yapay zekâ istemleri; istem oluştur ve yönet, isteme göre opsiyonel hedef dil
- **Geçmiş** — giriş/çıkış metinleri, filtreleme ve dışa aktarma ile tam işlem geçmişi
- **Modeller ve maliyet** — yapılandırılmış herhangi bir sağlayıcının modellerini seçin; maliyet ve kullanım panosu ile log, model/işlem/gün bazında özetler
- **Arayüz** — çok dilli arayüz (30+ dil, RTL desteği), yazı tipleri, ...
- **Web modu** — yönetici rolleriyle çoklu kullanıcı desteği
- **Masaüstü** — Windows ve Linux için Electron uygulaması
- **Kendi ortamında barındırma** — amd64 ve arm64 (Raspberry Pi uyumlu) için Docker görüntüsü

Kurulduktan sonra tüm özelliklerin kapsamlı bir açıklaması için **[Kullanıcı Kılavuzu](USER-GUIDE.tr.md)**'na bakın.

<small>**Başka dillerde oku:** </small>
<small id="lang-list"> [English (UK)](../README.md) · [Português (BR)](README.pt-BR.md) · [العربية](README.ar.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [Hrvatski](README.hr.md) · [Čeština](README.cs.md) · [Nederlands](README.nl.md) · [English (US)](README.en-US.md) · [Filipino](README.tl.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [हिन्दी](README.hi.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [Basa Jawa](README.jv.md) · [한국어](README.ko.md) · [Bahasa Melayu](README.ms.md) · [فارسی](README.fa.md) · [Polski](README.pl.md) · [Português (PT)](README.pt.md) · [ਪੰਜਾਬੀ](README.pa.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [Slovenčina](README.sk.md) · [Español](README.es.md) · [Kiswahili](README.sw.md) · [Svenska](README.sv.md) · [తెలుగు](README.te.md) · [ภาษาไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Tiếng Việt](README.vi.md)</small>

<small>

> **Arayüz ve belgelerin çevirisine not:** Orijinal İngilizce (UK) dili dışında tüm arayüz dilleri yapay zekâ modelleri kullanılarak çevrildi; ifade tarzı doğruluğu eksik olabilir veya hatalar içerebilir.

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

![Maliyet kontrol paneli](../images/screenshots/tr/dashboard-summary.png)

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
- [Kurulum](#installation)
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

## Hızlı başlangıç

**Docker (kendin barındırmak için önerilir)**

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest

OPENROUTER_API_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_API_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

`sk-or-your-key` ifadesini kendi [OpenRouter API anahtarınızla](https://openrouter.ai/keys) değiştirin (veya diğer sağlayıcı anahtarlarını ayarlayın; bkz. [Yapılandırma](#configuration-and-environment)). [http://localhost:5000](http://localhost:5000) adresini açın ve hizmeti dışarıya açmadan önce varsayılan yönetici parolasını değiştirin.

<br/>

> ℹ️ **NOT**<br/>
> Docker'da LLM kimlik bilgileri `OPENROUTER_API_KEY`, `OPENAI_API_KEY`, `CEREBRAS_API_KEY`, … gibi ortam değişkenleriyle ayarlanır (web arayüzünde değil). Masaüstü (Electron) sürümünde anahtarları **Ayarlar → API** bölümünde yapılandırırsınız.

<br/>

**Windows**

[Releases](https://github.com/wsj-br/transrewrt/releases) sayfasından en son `Transrewrt Kurulum x.y.z.exe` dosyasını indirin, kurucuyu çalıştırın ve ardından Başlat menüsünden veya masaüstü kısayolundan başlatın. API anahtarlarınızı **Ayarlar → API** bölümünde girin. En az bir sağlayıcıyı yapılandırmanız gerekir, ücretsiz modeller için OpenRouter yaygın bir tercihtir.

<br/>

**Linux**

[Releases](https://github.com/wsj-br/transrewrt/releases) sayfasından CPU'nuz için uygun `.AppImage` dosyasını indirin (`x64` genel bilgisayarlar için, `arm64` birçok ARM cihaz için, Raspberry Pi 4+ dahil), ardından:

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

API anahtarlarınızı **Ayarlar → API** bölümünde girin. En az bir sağlayıcıyı yapılandırmanız gerekir, ücretsiz modeller için OpenRouter yaygındır.

Debian/Ubuntu kullanıyorsanız, ilk önce ek bağımlılıkları yüklemeniz gerekebilir:

```bash
sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth
```

Ayrıntılar için bkz. [Kurulum → Linux](#linux-electron).

<br/>

> ℹ️ **NOT**<br/>
> Şu anda macOS desteklenmiyor. Transrewrt Windows, Linux ve Docker için mevcuttur.

<br/>

Uygulama çalıştıktan sonra, metinleri nasıl çevireceğinizi, yeniden yazacağınızı ve dönüştüreceğinizi, istemleri nasıl yöneteceğinizi ve modelleri nasıl yapılandıracağınızı öğrenmek için **[Kullanıcı Kılavuzu'na](USER-GUIDE.tr.md)** bakın.

<br/><br/>

<a id="installation"></a>

## Kurulum

<a id="windows-electron"></a>
### Windows (Electron)

- [Yayınlar](https://github.com/wsj-br/transrewrt/releases) sayfasından en son kurulum dosyasını indirin.
- `.exe` dosyasını çalıştırın ve kurucuyu takip edin.
- İlk çalıştırma: uygulamayı Başlat menüsünden veya masaüstü kısayolundan başlatın.

<br/>

<a id="linux-electron"></a>
### Linux (Electron)

- [Yayınlar](https://github.com/wsj-br/transrewrt/releases) sayfasından uygun `.AppImage` dosyasını (`x64` veya `arm64`) indirin.
- Çalıştırma: x86_64/amd64 için `chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage` komutunu çalıştırın veya ARM64 için `...-arm64.AppImage` dosya adını kullanın.
- Ek bağımlılıklar (Debian/Ubuntu): `sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth`
- Daha fazlası için [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) dosyasına bakın.

<br/>

<a id="docker"></a>
### Docker

- Çekmek için: `docker pull ghcr.io/wsj-br/transrewrt:latest`
- En az bir sağlayıcı anahtarı ortam değişkeni aracılığıyla ayarlayın (örneğin OpenRouter için `OPENROUTER_API_KEY`). Gizli bilgilerin imajda yer almaması için değişkenleri `-e` ile veya `docker compose` / `.env` dosyasıyla iletin.
- Sağlayıcı anahtarları web arayüzüne **girilmez**; sunucu anahtarları ortamdan okur.

Örnek - kalıcılık için isimlendirilmiş birim kullanımı (ortam aracılığıyla OpenRouter anahtarı):

```bash
OPENROUTER_API_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_API_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

ya da Docker Compose kullanmayı tercih ediyorsanız şu komutu kullanın:

# compose dosyasını indirin
wget https://github.com/wsj-br/transrewrt/raw/refs/heads/master/production.yml -O transrewrt.yml
# API_KEYS eklemek için dosyayı düzenleyin
vi transrewrt.yml
# konteyneri başlatın
docker compose -f transrewrt.yml up -d
```

<br/>

| Seçenek   | Açıklama                                                                                                                            |
|----------|----------------------------------------------------------------------------------------------------------------------------------------|
| Port     | `5000` (`-p 5000:5000` ile eşleyin)                                                                                                       |
| Birim   | Yapılandırma ve veritabanı kalıcılığı için `/app/data` yolunu bağlayın                                                                                  |
| Ortam değişkenleri | `PORT`, `CONFIG_PATH`, artı LLM anahtarları (`OPENROUTER_API_KEY`, `OPENAI_API_KEY`, …) - [Yapılandırma](#configuration-and-environment) kısmına bakın |

Kaynaktan derlemek ve çalıştırmak için: `docker compose up --build -d` veya `pnpm docker:up` - [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) dosyasına bakın.

<br/><br/>

<a id="getting-an-openrouter-api-key"></a>

## Bir OpenRouter API anahtarı edinme

Transrewrt, birden fazla yapay zeka sağlayıcısını destekler. [OpenRouter](https://openrouter.ai), birçok modeli tek bir anahtar altında toplaması ve ücretsiz modeller sunması nedeniyle popüler bir seçenektir.

1. [openrouter.ai](https://openrouter.ai) adresinde kayıt olun ya da giriş yapın.
2. [Keys](https://openrouter.ai/keys) sayfasını açın ve yeni bir anahtar oluşturun (ismini verin ve isteğe bağlı olarak kredi limiti ayarlayabilirsiniz). Kredi eklemeden ücretsiz modelleri kullanabilirsiniz.
3. **Masaüstü (Electron):** anahtarları **Ayarlar → API** kısmına yapıştırın. **Docker:** `OPENROUTER_API_KEY` gibi ortam değişkenlerini ayarlayın (bkz. [Hızlı başlangıç](#quick-start)).

Çeviri, yeniden yazma veya dönüştürme işlemlerinde OpenRouter'ın **Body Builder** modelini ([`openrouter/bodybuilder`](https://openrouter.ai/openrouter/bodybuilder)) kullanmayın: bu model tamamlanmış metin yerine JSON istek yükleri döndürür. Kullanım kılavuzundaki [Ayarlar → Modeller](USER-GUIDE.tr.md#models) bölümüne bakın.

Ayrıca diğer sağlayıcıları (OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras) kullanabilir veya [Ollama](https://ollama.com) ile yerel olarak modeller çalıştırabilirsiniz. Desteklenen sağlayıcı ve ortam değişkenlerinin tam listesi için [Yapılandırma](#configuration-and-environment) bölümüne bakın.

> ⚠️ **UYARI**<br/>
> Başka bir cihazdan, kapsayıcıdan veya hizmetten Ollama kullanıyorsanız, Ollama'yı dış bağlantıları kabul edecek şekilde yapılandırmayı (yalnızca localhost değil) unutmayın.


Limitler, kendi anahtarınızı kullanma (BYOK) ve daha fazlası için bkz. [OpenRouter kimlik doğrulaması](https://openrouter.ai/docs/api/reference/authentication).

<br/><br/>

<a id="configuration-and-environment"></a>

## Yapılandırma ve ortam

**Yapılandırma dosyası konumları**

| Dağıtım         | Yapılandırma konumu                                   |
| ------------------ | ------------------------------------------------- |
| Electron (Windows) | `%APPDATA%\transrewrt\`                           |
| Electron (Linux)   | `~/.config/transrewrt/`                           |
| Web / Docker       | `/app/data/config.json` (korumak için bir birim kullanın) |

<br/>

**Ortam değişkenleri** (sadece web/Docker için; Electron yerel yapılandırma dosyasını kullanır)

| Değişken         | Varsayılan                 | Açıklama |
| ---------------- | ----------------------- | ----------- |
| `PORT`           | `5000`                  | Sunucunun dinlediği port |
| `CONFIG_PATH`    | `/app/data/config.json` | Yapılandırma dosyasının yolu |
| `OPENROUTER_API_KEY` | *(boş)*               | OpenRouter API anahtarı |
| `OPENAI_API_KEY`     | *(boş)*               | OpenAI API anahtarı |
| `CEREBRAS_API_KEY`   | *(boş)*               | Cerebras API anahtarı |
| `ANTHROPIC_API_KEY`  | *(boş)*               | Anthropic API anahtarı |
| `GOOGLE_API_KEY`     | *(boş)*               | Google Gemini API anahtarı |
| `DEEPSEEK_API_KEY`   | *(boş)*               | DeepSeek API anahtarı |
| `GROQ_API_KEY`       | *(boş)*               | Groq API anahtarı |
| `MISTRAL_API_KEY`    | *(boş)*               | Mistral API anahtarı |
| `OLLAMA_URL`     | *(boş)*               | Ollama temel URL’si (örneğin `http://host.docker.internal:11434`) |
| `XAI_API_KEY`        | *(boş)*               | xAI API anahtarı |

Sadece kullandığınız sağlayıcıları yapılandırın. Model kimlikleri ad alanı ile ayrılır (`openrouter/…`, `openai/…`, `cerebras/…`, `ollama/…` vb.).

**Maliyet görüntüleme:** OpenRouter, geçerli olduğunda tam olarak faturalandırılan tutarı döndürür. Diğer sağlayıcılar bir OpenRouter anahtarı varsa OpenRouter’ın genel model fiyatlandırma verilerine dayalı **tahmini** maliyet kullanır; bu anahtar yoksa OpenRouter olmayan sağlayıcıların maliyeti `0` olarak gösterilebilir. Tahminler fatura mahiyetinde değildir.

<br/>

**Veri ve kalıcılık:** Docker için, `config.json` ve SQLite veritabanının konteyner yeniden başlatmalarında korunabilmesi amacıyla `/app/data` yoluna bir birim bağlayın. Bir birim kullanılmazsa, konteyner durduğunda tüm veriler kaybolur.

**Geliştiriciler için:** Eski tek anahtarlı yapılandırma yerine geçen değişiklikleri çektiyseniz, yerel dosyanız hâlâ kaldırılan alanları (`api_key`, `api_url`, proxy seçenekleri) kullanıyorsa, `data/config.json` dosyasını `src/config-defaults/config_default.json` dosyasındaki yeni varsayılan yapıyla sıfırlayın veya birleştirin.

<br/>

**Web kimlik doğrulama:**

- Varsayılan yönetici: `admin` / `transrewrt26`.
- Kullanıcıları **Ayarlar → Kullanıcılar** menüsünden yönetin.
- Şifre sıfırlama: `docker exec <container> reset-web-password '<kullanıcıadı>' '<yeni-şifre>'`
  (kaynaktan çalıştırmak için: `pnpm run reset-web-password -- <kullanıcıadı> <yeni-şifre>`)

<br/>

> ⚠️ **UYARI**<br/>
> Herhangi bir ağa açık sunucuda varsayılan yönetici şifresini hemen değiştirin.

<br/>

Ana ayarlar (yazı tipi, modeller, diller vb.) uygulamanın Ayarlar bölümünde yapılandırılabilir.

<br/><br/>

<a id="development-and-architecture"></a>

## Geliştirme ve mimari

- **Geliştirme:** Kurulum, derleme, test ve dağıtım (Electron, Web, Docker) - bkz. **[dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)**.
- **Mimari ve sistem genel bakış:** Klasör yapısı, teknoloji yığını, tasarım kararları - bkz. **[dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)**.

<br/><br/>

<a id="releases-and-tags"></a>
## Sürümler ve etiketler

- **Git etiketleri** `v`* (örneğin `v1.0.10`) [sürüm iş akışını](.github/workflows/release.yml) tetikler. **GitHub Sürümleri**, Windows kurulum dosyasını (`.exe`) ve Linux AppImage'lerini (**x64** ve **arm64**) ekler.
- **Docker imajları**, `ghcr.io/wsj-br/transrewrt` adresine yayınlanır. İmaj etiketleri Git sürümüyle eşleşir (örneğin `v1.0.10` → `ghcr.io/wsj-br/transrewrt:1.0.10`) ve ayrıca `latest` etiketi eklenir. Çoklu mimari: `linux/amd64` ve `linux/arm64` (örneğin Raspberry Pi).

<br/><br/>

<a id="contributing"></a>
## Katkıda Bulunma

1. Depoyu fork edin.
2. Bir özellik dalı oluşturun: `git checkout -b feature/my-feature`
3. Değişikliklerinizi açık bir mesajla commitleyin.
4. Yaptıklarınızı aktarın ve `main` dalına karşı bir Pull Request açın.

Lütfen göndermeden önce mevcut kod stilini takip edin ve değişikliklerinizi hem Electron hem de web modlarında test edin. Derleme ve test talimatları için [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) dosyasına bakın.

<br/>

**Sorun bildirme:** [GitHub](https://github.com/wsj-br/transrewrt/issues) üzerinden bir sorun açın. Hangi platformda (Windows / Linux / Docker) çalıştığınızı ve uygulama sürümünüzü (Hakkında penceresinde veya Sürümler sayfasında gösterilir) belirtin.

<br/><br/>

<a id="disclaimer"></a>

## Sorumluluk Reddi

Ürün adları ve simgeleri ait oldukları sahiplerine aittir ve yalnızca tanımlama amacıyla kullanılır. Bu yazılım bahsedilen markalarla bağlantılı değildir ve onlar tarafından onaylanmamıştır.

<br/><br/>

<a id="license"></a>
## Lisans

Telif Hakkı © 2026 Waldemar Scudeller Jr.

[Apache Lisansı 2.0](LICENSE)