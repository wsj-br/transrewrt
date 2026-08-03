---
title: Genel Bakış
description: >-
  Transrewrt nedir ve nasıl kurulur, kılavuzlar ve ayarlar belgeleri nasıl
  bulunur.
---



**Transrewrt** açık kaynaklı, yapay zeka destekli bir metin aracıdır:

- **Çeviri** — otomatik kaynak algılama ve sözlüklerle düzinelerce dil arasında
- **Yeniden Yazma** — dilbilgisini düzeltme, netliği artırma, tonu veya uzunluğu değiştirme
- **Dönüştürme** — kendi özel yapay zeka istemlerinizi herhangi bir metin üzerinde çalıştırma

Birçok yapay zeka sağlayıcısını destekler (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras, NVIDIA, Alibaba Cloud, apikey.fun, OpenAI uyumlu uç noktalar ve Ollama, LM Studio veya llama.cpp gibi yerel OpenAI uyumlu sunucular). Bir **masaüstü uygulaması** (Windows / Linux) veya bir **Docker web uygulaması** olarak çalıştırın.

Anahtarlarınız, modelleriniz, ana bilgisayarınız — Transrewrt bulut hesabı yoktur.

## Pencere nasıl düzenlenir

![Çeviri çalışma alanı](/images/screenshots/tr/translate.png)

- **Kenar Çubuğu** — ana gezinme: Çevir, Yeniden Yaz, Dönüştür, Kontrol Paneli, Geçmiş, Ayarlar (ve web'de oturum açmış kullanıcı).
- **Araç Çubuğu** — sayfa başlığı, **ön ayar** (Kolay) veya **model** (Gelişmiş) seçici, **Arayüz dili** (küre simgesi; Çeviri Kaynak/Hedefini değiştirmez) ve bu belgelere bağlantı veren Yardım (**?**). Ön ayar/model menüsü ayrıca **Kolay/Gelişmiş moda geç** (Ayarları Aç'ın üstünde) seçeneğini de sunar.
- **Çalışma alanı** — Giriş ve Çıkış panelleri, sayılar, zamanlama, TPS ve isteğe bağlı maliyet ile birlikte. Eylem çubuğu, GitHub Pages sitesine küçük bir uygulama **sürümü** bağlantısı (sağ altta) gösterir.

Varsayılan olarak uygulama **Kolay** modda çalışır: bir **ön ayar** ve Ayarlar'da bir **Sağlayıcı** seçin. Tam bir model listesi için [Ayarlar → Genel Ayarlar](/docs/settings/#general-settings) altında **Gelişmiş** moda geçin veya araç çubuğu ön ayar/model menüsündeki anahtarı kullanın.

## Başlarken

1. [Hızlı başlangıç](/docs/quick-start/) — masaüstünü kurun veya Docker ile çalıştırın
2. [API anahtarı](/docs/api-key/) — ücretsiz bir OpenRouter anahtarı veya başka bir sağlayıcı bağlayın
3. [Yapılandırma](/docs/configuration/) — ortam değişkenleri, yapılandırma yolları, web kimlik doğrulaması

## Kılavuzlar

- [Metin çevir](/docs/translate/)
- [Metni yeniden yaz](/docs/rewrite/)
- [İstemlerle dönüştür](/docs/transform/)
- [Kontrol Panelini kullan](/docs/dashboard/)
- [Geçmişe göz at](/docs/history/)

## Referans ve yardım

- [Ayarlar](/docs/settings/)
- [Yaygın sorunlar](/docs/common-issues/)

[Download releases](https://github.com/wsj-br/transrewrt/releases) · [GitHub repository](https://github.com/wsj-br/transrewrt)
