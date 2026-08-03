<p align="center">
  <img src="../images/transrewrt_banner.png" alt="Transrewrt Banner"  />
</p>

<h1 align="center">Transrewrt</h1>

<p align="center">
  <a href="https://github.com/wsj-br/transrewrt/releases"><img src="https://img.shields.io/badge/version-1.6.3-blue" alt="Version"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-Apache%202.0-green" alt="License: Apache 2.0"></a>
  <img src="https://img.shields.io/badge/platform-Windows%20%7C%20Linux%20%7C%20Docker-lightgrey" alt="Platform">
</p>

Özel istemlerle **çeviri**, **yeniden yazma** ve **dönüştürme** için yapay zeka destekli metin aracı. Kendi yapay zeka sağlayıcılarınızı kullanın (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras, NVIDIA, Alibaba Cloud, apikey.fun, OpenAI uyumlu uç noktalar ve Ollama, LM Studio veya llama.cpp gibi yerel sunucular). Bir masaüstü uygulaması (Windows / Linux) veya kendi kendine barındırılan bir web uygulaması (Docker) olarak çalıştırın. Transrewrt bulut hesabı yok.

## Özellikler

| Yetenek | Açıklama |
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

docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e PROVIDER_API_KEY=your-key \
  --name transrewrt \
  ghcr.io/wsj-br/transrewrt:latest
```

`PROVIDER_API_KEY` yerine sağlayıcı değişkeninizi (örneğin `OPENROUTER_API_KEY`, `OPENAI_API_KEY`, `GROQ_API_KEY`) yazın. [http://localhost:5000](http://localhost:5000) adresini açın ve varsayılan Yönetici parolasını değiştirin. Anahtarlar ortam değişkenleri aracılığıyla ayarlanır (web kullanıcı arayüzü aracılığıyla değil).

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

## Teşekkürler

Ön ayarlar düzenleyicisindeki Kolay mod ön ayar önerileri, aşağıdaki kaynaklardan alınan genel değerlendirme verilerini kullanır:

- [languagebench](https://huggingface.co/spaces/fair-forward/languagebench) (CC BY-SA 4.0)
- [Artificial Analysis](https://artificialanalysis.ai/) (API verileri için atıf gereklidir)

Üçüncü taraf bağımlılık lisansları ve bu veri kaynağı bildirimleri [BİLDİRİMLER](../NOTICES) bölümünde listelenmiştir.

## Lisans

Telif Hakkı © 2026 Waldemar Scudeller Jr.

[Apache License 2.0](../LICENSE)

Ürün adları ve simgeleri, ilgili sahiplerine aittir ve yalnızca tanımlama amaçlı kullanılır. Bu yazılım, bu markalarla bağlantılı değildir veya onlar tarafından desteklenmemektedir.

<small>

> **Kullanıcı arayüzü ve dokümantasyon çevirileri hakkında not:** İngilizce (Birleşik Krallık) dışındaki tüm arayüz ve dokümantasyon dilleri, [ai-i18n-tools](https://wsj-br.github.io/ai-i18n-tools/) kullanılarak yapay zeka ile çevrilmiştir; ifade biçimi yanlış veya hatalar içerebilir.

</small>
