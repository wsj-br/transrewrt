---
translated_at: "2026-03-25T22:43:39.841Z"
source_hash: "7b3703140b5006a6bfb0700c530b1afcc6e9b0fc364d69c57960ab4609dccbd9"
source_mtime: 1774475429145.525
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

Yapay zeka destekli metin aracı: çoklu yapay zeka sağlayıcılarını kullanarak (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI ve yerel Ollama) diller arasında çevirin, farklı tarzlarda yeniden yazın ve özelleştirilmiş istemlerle dönüştürün — masaüstü uygulaması (Electron) ya da kendi sunucunuza kurulabilir web uygulaması (Docker) olarak çalışır.

- **Çevir** — otomatik kaynak tespiti ile onlarca dil arasında
- **Yeniden yaz** — dilbilgisi düzelt, anlaşılırlığı artır, resmi/resmi olmayan, kısa/uzun, teknik
- **Dönüştür** — özel yapay zeka istemleri; istem oluştur ve yönet, her istem için isteğe bağlı hedef dil
- **Geçmiş** — giriş/çıkış metinleri, süzme ve dışa aktarma ile tam yürütme geçmişi
- **Modeller ve maliyet** — yapılandırılmış sağlayıcıların herhangi birinden model seçin; maliyet ve kullanım panosu, günlük kaydı ve modele/işleme/güne göre özetler
- **Arayüz** — çok dilli arayüz (30+ dil, RTL desteği), yazı tipleri, ...
- **Web kipi** — yönetici rolleriyle çok kullanıcılı destek
- **Masaüstü** — Windows ve Linux için Electron uygulaması
- **Kendi sunucunuza kurulabilir** — amd64 & arm64 için Docker imajı (Raspberry Pi uyumlu)

Kurulumdan sonra, tüm özelliklerin kapsamlı bir tanıtımı için **[Kullanıcı Kılavuzu'na](USER-GUIDE.tr.md)** bakın.

<small>**Diğer dillerde oku:** [English (UK)](README.tr.md) · [Português (BR)](README.pt-BR.md) · [العربية](README.ar.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [Hrvatski](README.hr.md) · [Čeština](README.cs.md) · [Nederlands](README.nl.md) · [English (US)](README.en-US.md) · [Filipino](README.tl.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [हिन्दी](README.hi.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [Basa Jawa](README.jv.md) · [한국어](README.ko.md) · [Bahasa Melayu](README.ms.md) · [فارسی](README.fa.md) · [Polski](README.pl.md) · [Português (PT)](README.pt.md) · [ਪੰਜਾਬੀ](README.pa.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [Slovenčina](README.sk.md) · [Español](README.es.md) · [Kiswahili](README.sw.md) · [Svenska](README.sv.md) · [తెలుగు](README.te.md) · [ภาษาไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Tiếng Việt](README.vi.md)</small>

<small>

> **UI ve belgelerin çevirisine not:** İngilizce (UK) orijinal dili hariç tüm arayüz dilleri yapay zeka modelleri kullanılarak çevrilmiştir; ifade tarzı eksik olabilir veya hatalar içerebilir.

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


- [Hızlı başlangıç](#hızlı-başlangıç)
- [Kurulum](#kurulum)
  - [Windows (Electron)](#windows-electron)
  - [Linux (Electron)](#linux-electron)
  - [Docker](#docker)
- [OpenRouter API anahtarı edinme](#openrouter-api-anahtarı-edinme)
- [Yapılandırma ve ortam](#yapılandırma-ve-ortam)
- [Geliştirme ve mimari](#geliştirme-ve-mimari)
- [Sürümler ve etiketler](#sürümler-ve-etiketler)
- [Katkıda bulunma](#katkıda-bulunma)
- [Feragatname](#feragatname)
- [Lisans](#lisans)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="quick-start"></a>
## Hızlı başlangıç

**Docker (kendi sunucunuza kurulum için önerilir)**

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest

OPENROUTER_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

`sk-or-your-key` değerini [OpenRouter API anahtarınızla](https://openrouter.ai/keys) değiştirin (veya başka sağlayıcı anahtarları belirleyin; [Yapılandırma](#yapılandırma-ve-ortam)'ya bakın). [http://localhost:5000](http://localhost:5000)'yi açın ve hizmeti dış dünyaya açmadan önce varsayılan yönetici şifresini değiştirin.

<br/>

> ℹ️ **NOT**<br/>
> Docker'da LLM kimlik bilgileri ortam değişkenleriyle ayarlanır; örneğin `OPENROUTER_KEY`, `OPENAI_KEY`, `CEREBRAS_KEY`, vb. (web arayüzünde değil). Masaüstünde (Electron) anahtarları **Ayarlar → API** kısmında yapılandırırsınız.

<br/>

**Windows**

[Releases](https://github.com/wsj-br/transrewrt/releases) sayfasından en son `Transrewrt Setup x.y.z.exe` dosyasını indirin, kurulum programını çalıştırın, ardından Başlat menüsünden veya masaüstü kısayolundan başlatın. API anahtarlarınızı **Ayarlar → API** bölümünde girin. En az bir sağlayıcı yapılandırmalısınız; ücretsiz modeller için OpenRouter yaygın olarak kullanılır.

<br/>

**Linux**

[Releases](https://github.com/wsj-br/transrewrt/releases) sayfasından CPU'nuzla uyumlu `.AppImage` dosyasını indirin (`x64` tipik masaüstü bilgisayarlar için, `arm64` Raspberry Pi 4+ dahil çoğu ARM cihaz için), ardından:

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

API anahtarlarınızı **Ayarlar → API** bölümünde girin. En az bir sağlayıcı yapılandırmalısınız; ücretsiz modeller için OpenRouter yaygındır.

Debian/Ubuntu üzerinde bazı ek bağımlılıkları önce yüklemeniz gerekebilir:

```bash
sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth
```

Ayrıntılar için [Kurulum → Linux](#linux-electron) bölümüne bakın.

<br/>

> ℹ️ **NOT**<br/>
> macOS şimdilik desteklenmemektedir. Transrewrt Windows, Linux ve Docker için mevcuttur.

<br/>

Uygulama çalışmaya başladıktan sonra, metinleri nasıl çevireceğinizi, yeniden yazacağınızı ve dönüştüreceğinizi, istemleri nasıl yöneteceğinizi ve modelleri nasıl yapılandıracağınızı öğrenmek için **[Kullanıcı Kılavuzu'na](USER-GUIDE.tr.md)** göz atın.

<br/><br/>

<a id="installation"></a>
## Kurulum

<a id="windows-electron"></a>
### Windows (Electron)

- [Releases](https://github.com/wsj-br/transrewrt/releases) sayfasından en son kurulum dosyasını indirin.
- `.exe` dosyasını çalıştırın ve kurulum sihirbazını izleyin.
- İlk çalıştırmada: uygulamayı Başlat menüsünden veya masaüstü kısayolundan başlatın.

<br/>

<a id="linux-electron"></a>
### Linux (Electron)

- [Releases](https://github.com/wsj-br/transrewrt/releases) sayfasından uygun `.AppImage` dosyasını indirin (`x64` veya `arm64`).
- Çalıştırın: x86_64/amd64 için `chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage`, ARM64 için `...-arm64.AppImage` dosya adını kullanın.
- Ek bağımlılıklar (Debian/Ubuntu): `sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth`
- Daha fazlası için [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)'ye bakın.

<br/>

<a id="docker"></a>
### Docker

- Çekme: `docker pull ghcr.io/wsj-br/transrewrt:latest`
- Ortam aracılığıyla en az bir sağlayıcı anahtarı belirleyin (örneğin OpenRouter için `OPENROUTER_KEY`). Değişkenleri `-e` ile veya `docker compose` / `.env` kullanarak geçirin, böylece gizli bilgiler imajın içine gömülmüş olmaz.
- Sağlayıcı anahtarları web arayüzüne **girilmez**; sunucu bunları ortamdan okur.

Örnek - kalıcılık için adlandırılmış birim (anahtar ortam üzerinden OpenRouter):

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
| Port     | `5000` (`-p 5000:5000` ile eşleyin)                                                                              |
| Birim    | Yapılandırma ve veritabanı kalıcılığı için `/app/data` klasörünü bağlayın                                                         |
| Ortam değişkenleri | `PORT`, `CONFIG_PATH` ve LLM anahtarları (`OPENROUTER_KEY`, `OPENAI_KEY`, …) - [Yapılandırma](#yapılandırma-ve-ortam)'ya bakın |

Kaynaktan inşa etmek ve çalıştırmak için: `docker compose up --build -d` veya `pnpm docker:up` - bakınız [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md).

<br/><br/>

<a id="getting-an-openrouter-api-key"></a>

## OpenRouter API Anahtarı Alma

Transrewrt, birden fazla yapay zeka sağlayıcısını destekler. [OpenRouter](https://openrouter.ai), birçok modeli tek bir anahtarda birleştirip ücretsiz modeller sunması nedeniyle popülerdir.

1. [openrouter.ai](https://openrouter.ai) sitesinde kaydolun ya da oturum açın.
2. [Keys](https://openrouter.ai/keys) sayfasını açın ve yeni bir anahtar oluşturun (anahtarı adlandırın ve isteğe bağlı olarak kredi limiti ayarlayın). Kredi eklemadan ücretsiz modelleri kullanabilirsiniz.
3. **Masaüstü (Electron):** anahtarları **Ayarlar → API** kısmına yapıştırın. **Docker:** `OPENROUTER_KEY` gibi çevresel değişkenleri ayarlayın (bkz. [Hızlı başlangıç](#quick-start)).

Çeviri, yeniden yazma veya dönüştürme işlemleri için OpenRouter'ın **Body Builder** modelini ([`openrouter/bodybuilder`](https://openrouter.ai/openrouter/bodybuilder)) kullanmayın: bu model tamamlanmış metin yerine JSON istek yükü döndürür. Daha fazla bilgi için Kullanıcı Kılavuzu'ndaki [Ayarlar → Modeller](USER-GUIDE.tr.md#models) bölümüne bakın.

Ayrıca diğer sağlayıcıları (OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras) kullanabilir veya modelleri [Ollama](https://ollama.com)'yı kullanarak yerel olarak çalıştırabilirsiniz. Desteklenen sağlayıcıların ve ortam değişkenlerinin tam listesi için [Yapılandırma](#configuration-and-environment) bölümüne bakın.

> ⚠️ **UYARI**<br/>
> Ollama'yı başka bir cihazdan, konteynerden veya hizmetten kullanıyorsanız, Ollama'yı yalnızca localhost'a değil, dış bağlantıları kabul edecek şekilde yapılandırmayı unutmayın.

<br/><br/>

<a id="configuration-and-environment"></a>
## Yapılandırma ve ortam

**Yapılandırma dosyası konumları**

| Dağıtım              | Yapılandırma konumu                              |
| ------------------ | ------------------------------------------------- |
| Electron (Windows) | `%APPDATA%\transrewrt\`                           |
| Electron (Linux)   | `~/.config/transrewrt/`                           |
| Web / Docker       | `/app/data/config.json` (kalıcılık için bir birim kullanın) |

<br/>

**Ortam değişkenleri** (yalnızca web/Docker için; Electron yerel yapılandırma dosyasını kullanır)

| Değişken           | Varsayılan             | Açıklama |
| ---------------- | ----------------------- | ----------- |
| `PORT`           | `5000`                  | Sunucunun dinlediği port |
| `CONFIG_PATH`    | `/app/data/config.json` | Yapılandırma dosyası yolu |
| `OPENROUTER_KEY` | *(boş)*               | OpenRouter API anahtarı |
| `OPENAI_KEY`     | *(boş)*               | OpenAI API anahtarı |
| `CEREBRAS_KEY`   | *(boş)*               | Cerebras API anahtarı |
| `ANTHROPIC_KEY`  | *(boş)*               | Anthropic API anahtarı |
| `GOOGLE_KEY`     | *(boş)*               | Google Gemini API anahtarı |
| `DEEPSEEK_KEY`   | *(boş)*               | DeepSeek API anahtarı |
| `GROQ_KEY`       | *(boş)*               | Groq API anahtarı |
| `MISTRAL_KEY`    | *(boş)*               | Mistral API anahtarı |
| `OLLAMA_URL`     | *(boş)*               | Ollama temel URL'si (örn. `http://host.docker.internal:11434`) |
| `XAI_KEY`        | *(boş)*               | xAI API anahtarı |

Sadece kullanacağınız sağlayıcıları yapılandırın. Model kimlikleri isim alanı altındadır (`openrouter/…`, `openai/…`, `cerebras/…`, `ollama/…` vb.).

**Maliyet gösterimi:** OpenRouter, geçerliysa fatura edilen gerçek maliyeti döndürür. Diğer sağlayıcılar, OpenRouter anahtarı varsa OpenRouter'ın ortak model fiyatlarından **tahmini** maliyet kullanır; bu anahtar yoksa, OpenRouter dışı maliyet `0` olarak görünebilir. Bu tahminler fatura değildir.

<br/>

**Veri ve kalıcılık:** Docker için `/app/data` konumunda bir birim bağlayarak `config.json` dosyanızın ve SQLite veritabanının konteyner yeniden başlatmalarında korunmasını sağlayın. Bir birim kullanılmazsa konteyner durduğunda tüm veriler kaybedilir.

**Geliştiriciler:** Eski tek anahtarlı yapılandırmayı değiştiren değişiklikleri çektikten sonra, yerel dosyanız hâlâ kaldırılan alanları (`api_key`, `api_url`, proxy ayarları) kullanıyorsa `data/config.json` dosyasını `src/config-defaults/config_default.json` dosyasındaki yeni varsayılan yapıyla sıfırlayın ya da birleştirin.

<br/>

**Web kimlik doğrulaması:**

- Varsayılan yönetici: `admin` / `transrewrt26`.
- Kullanıcıları **Ayarlar → Kullanıcılar** bölümünde yönetin.
- Şifresini sıfırla: `docker exec <container> reset-web-password '<username>' '<new-password>'`
  (kaynak üzerinden: `pnpm run reset-web-password -- <username> <new-password>`)

<br/>

> ⚠️ **UYARI**<br/>
> Herhangi bir ağdan erişilebilen bir sunucu üzerinde varsayılan yönetici parolasını hemen değiştirin.

<br/>

Anahtar ayarlar (yazı tipi, modeller, diller, vb.) uygulamanın Ayarları menüsünde bulunabilir.

<br/><br/>

<a id="development-and-architecture"></a>

## Geliştirme ve mimari

- **Geliştirme:** Kurulum, derleme, test ve dağıtım (Electron, Web, Docker) - bkz. **[dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)**.
- **Mimari ve sistem görünümü:** Klasör yapısı, teknoloji yığını, tasarım kararları - bkz. **[dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)**.

<br/><br/>

<a id="releases-and-tags"></a>
## Sürümler ve etiketler

- **Git etiketleri** `v`* (örneğin `v1.0.10`), [sürüm iş akışını](.github/workflows/release.yml) tetikler. **GitHub Sürümleri**, Windows kurulum dosyasını (`.exe`) ve Linux AppImage'lerini (**x64** ve **arm64**) ekler.
- **Docker imajları**, `ghcr.io/wsj-br/transrewrt` adresine yayımlanır. İmaj etiketleri Git sürümüyle eşleşir (örneğin `v1.0.10` → `ghcr.io/wsj-br/transrewrt:1.0.10`) ve ayrıca `latest` etiketi eklenir. Çoklu mimari: `linux/amd64` ve `linux/arm64` (örneğin Raspberry Pi).

<br/><br/>

<a id="contributing"></a>
## Katkıda Bulunma

1. Depoyu çatallayın.
2. Bir özellik dalı oluşturun: `git checkout -b feature/my-feature`
3. Değişikliklerinizi açık bir mesajla kaydedin.
4. Değişiklikleri uzak sunucuya gönderin ve `main` dalına karşı bir Pull Request açın.

Lütfen göndermeden önce mevcut kod stilini takip edin ve değişikliklerinizi hem Electron hem de web modlarında test edin. Derleme ve test talimatları için [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) dosyasına bakın.

<br/>

**Hata bildirimi:** Hata bildirimleriniz için [GitHub](https://github.com/wsj-br/transrewrt/issues) üzerinden bir sorun oluşturun. Platformunuzu (Windows / Linux / Docker) ve uygulama sürümünüzü (Hakkında penceresinde ya da Sürümler sayfasında görüntülenir) belirtin.

<br/><br/>

<a id="disclaimer"></a>
## Sorumluluk Reddi

Ürün isimleri ve simgeleri ilgili sahiplerine aittir ve sadece tanımlama amacıyla kullanılır. Bu yazılım, bahsedilen markalarla hiçbir bağlantı içinde değildir ve onlar tarafından desteklenmez.

<br/><br/>

<a id="license"></a>
## Lisans

Telif Hakkı © 2026 Waldemar Scudeller Jr.

[Apache Lisansı 2.0](LICENSE)