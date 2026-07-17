<p align="center">
  <img src="../images/transrewrt_banner.png" alt="Transrewrt Banner"  />
</p>

<p align="center">
  <a href="https://github.com/wsj-br/transrewrt/releases"><img src="https://img.shields.io/badge/version-1.6.1-blue" alt="Version"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-Apache%202.0-green" alt="License: Apache 2.0"></a>
  <img src="https://img.shields.io/badge/platform-Windows%20%7C%20Linux%20%7C%20Docker-lightgrey" alt="Platform">
</p>

Yapay zeka destekli metin aracı: Kendi yapay zeka sağlayıcılarınızı (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras, NVIDIA, Alibaba Cloud, apikey.fun, OpenAI uyumlu uç noktalar ve Ollama, LM Studio veya llama.cpp gibi yerel OpenAI uyumlu sunucular) kullanarak özel istemlerle **çevirin**, **yeniden yazın** ve **dönüştürün**. Masaüstü uygulaması (Windows / Linux) veya kendi kendine barındırılan web uygulaması (Docker). Transrewrt bulut hesabı yok.

| | |
| --- | --- |
| **Çevir** | Düzinelerce dil, otomatik algılama, sözlükler, Yeniden İfade Et ile iyileştirme |
| **Yeniden yazma** | Netlik, ton, uzunluk, yazım ve dilbilgisi — aynı dil |
| **Dönüştür** | Oluşturduğunuz, düzenlediğiniz ve yeniden kullandığınız özel yapay zeka istemleri |
| **Dağıt** | Electron masaüstü veya Docker web (amd64 & arm64) |
| **Anahtarlar** | Sağlayıcılarınız, ana bilgisayarınız — Kolay ön ayarlar veya Gelişmiş model listesi |

![Çevir](../images/screenshots/tr/translate.png)

<small>**Diğer dillerde oku:** </small>
<small id="lang-list">[English (UK)](../README.md) · [العربية](./README.ar.md) · [简体中文](./README.zh-Hans.md) · [繁體中文](./README.zh-Hant.md) · [Čeština](./README.cs.md) · [Nederlands](./README.nl.md) · [Français](./README.fr.md) · [Deutsch](./README.de.md) · [Ελληνικά](./README.el.md) · [हिन्दी](./README.hi.md) · [Magyar](./README.hu.md) · [Italiano](./README.it.md) · [日本語](./README.ja.md) · [한국어](./README.ko.md) · [فارسی](./README.fa.md) · [Polski](./README.pl.md) · [Português (Brasil)](./README.pt-BR.md) · [Română](./README.ro.md) · [Русский](./README.ru.md) · [Slovenčina](./README.sk.md) · [Español](./README.es.md) · [Svenska](./README.sv.md) · [ไทย](./README.th.md) · [Türkçe](./README.tr.md) · [Українська](./README.uk.md) · [Tiếng Việt](./README.vi.md)</small>

## Hızlı başlangıç

**Docker**

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest

OPENROUTER_API_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_API_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

[http://localhost:5000](http://localhost:5000) adresini açın ve varsayılan yönetici parolasını değiştirin. Sağlayıcı anahtarları ortam değişkenleri aracılığıyla ayarlanır (web kullanıcı arayüzü aracılığıyla değil).

**Windows** — [Sürümler](https://github.com/wsj-br/transrewrt/releases) sayfasından `Transrewrt Setup x.y.z.exe` dosyasını indirin, kurun, ardından **Ayarlar → API** bölümünden anahtarları ekleyin.

**Linux** — [Sürümler](https://github.com/wsj-br/transrewrt/releases) sayfasından `.AppImage` dosyasını indirin, ardından:

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

Platform ayrıntıları (Compose, SmartScreen, apt kitaplıkları, GPU bayrakları, saat dilimi): [Hızlı başlangıç belgeleri](https://wsj-br.github.io/transrewrt/docs/quick-start/).

## Belgeler

Tüm ürün belgeleri (kurulum, API anahtarları, kılavuzlar, ayarlar, sorun giderme):

**[https://wsj-br.github.io/transrewrt/docs/](https://wsj-br.github.io/transrewrt/docs/)**

- [API anahtarı](https://wsj-br.github.io/transrewrt/docs/api-key/)
- [Yapılandırma](https://wsj-br.github.io/transrewrt/docs/configuration/)
- [Çevir](https://wsj-br.github.io/transrewrt/docs/translate/) · [Yeniden yazma](https://wsj-br.github.io/transrewrt/docs/rewrite/) · [Dönüştür](https://wsj-br.github.io/transrewrt/docs/transform/)
- [Sık karşılaşılan sorunlar](https://wsj-br.github.io/transrewrt/docs/common-issues/)

## Geliştirme

- Kurulum, derleme, test, dağıtım: [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)
- Mimariye genel bakış: [dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)

## Destek

[GitHub](https://github.com/wsj-br/transrewrt/issues) üzerinde bir sorun açın. Platformunuzu (Windows / Linux / Docker) ve uygulama sürümünüzü (Hakkında iletişim kutusu veya Sürümler sayfası) ekleyin.

## Lisans

Telif Hakkı © 2026 Waldemar Scudeller Jr.

[Apache License 2.0](../LICENSE)

Ürün adları ve simgeleri ilgili sahiplerine aittir ve yalnızca tanımlama amacıyla kullanılır. Bu yazılım, bu markalarla bağlantılı değildir veya bu markalar tarafından desteklenmemektedir.

<small>

> **Kullanıcı arayüzü ve dokümantasyon çevirileri hakkında not:** Orijinal İngilizce dışındaki tüm arayüz ve dokümantasyon dilleri, [ai-i18n-tools](https://wsj-br.github.io/ai-i18n-tools/) kullanılarak yapay zeka modelleriyle çevrilmiştir;
> bu nedenle ifadeler hatalı veya eksik olabilir.

</small>
