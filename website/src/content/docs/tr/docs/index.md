---
title: Genel Bakış
description: Transrewrt nedir ve nasıl kurulum, rehber ve ayar belgelerini bulabilirsiniz.
---



**Transrewrt** şunlar için açık kaynaklı, yapay zeka destekli bir metin aracıdır:

- **Çeviri** — otomatik kaynak algılama ve sözlüklerle düzinelerce dil arasında
- **Yeniden Yazma** — dilbilgisini düzeltme, netliği artırma, tonu veya uzunluğu değiştirme
- **Dönüştürme** — herhangi bir metin üzerinde kendi özel yapay zeka istemlerinizi çalıştırma

Birçok yapay zeka sağlayıcısını destekler (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras, NVIDIA, Alibaba Cloud, apikey.fun, OpenAI uyumlu uç noktalar ve Ollama, LM Studio veya llama.cpp gibi yerel OpenAI uyumlu sunucular). Bir **masaüstü uygulaması** (Windows / Linux) veya **kendi kendine barındırılan bir web uygulaması** (Docker) olarak çalıştırın.

Anahtarlarınız, modelleriniz, ana bilgisayarınız — Transrewrt bulut hesabı yoktur.

## Pencere nasıl organize edilmiştir

- **Yan panel** — Çevir, Yazıya Yeniden Şekil Ver, Dönüştür, Kontrol Paneli, Geçmiş, Ayarlar (ve web'de giriş yapan kullanıcı)
- **Araç çubuğu** — sayfa başlığı, **ön ayar** (Kolay) veya **model** (Gelişmiş) seçici ve **Arayüz dili** (küre ikonu; Çeviriden/Çeviriye değişiklik yapmaz)
- **Çalışma alanı** — Giriş ve Çıkış panelleri ile sayılar, zamanlama, TPS ve isteğe bağlı maliyet

Varsayılan olarak uygulama **Kolay** modda çalışır: Ayarlarda bir **ön ayar** ve bir **Sağlayıcı** seçin. [Ayarlar → Genel Ayarlar](/docs/settings/#general-settings) altında **Gelişmiş**'e geçerek tam model listesini alın.

## Başlayın

1. [Hızlı başlangıç](/docs/quick-start/) — masaüstü kurun veya Docker ile çalıştırın
2. [API anahtarı](/docs/api-key/) — ücretsiz OpenRouter anahtarı veya başka bir sağlayıcı bağlayın
3. [Yapılandırma](/docs/configuration/) — ortam değişkenleri, yapılandırma yolları, web kimlik doğrulaması

## Rehberler

- [Metin çevirisi](/docs/translate/)
- [Metin yeniden yazma](/docs/rewrite/)
- [İki yönlü iletişimde dönüştürme](/docs/transform/)
- [Kontrol Paneli kullanımı](/docs/dashboard/)
- [Geçmişi görüntüleme](/docs/history/)

## Referans ve yardım

- [Ayarlar](/docs/settings/)
- [Sık karşılaşılan sorunlar](/docs/common-issues/)

[Download releases](https://github.com/wsj-br/transrewrt/releases) · [GitHub repository](https://github.com/wsj-br/transrewrt)
