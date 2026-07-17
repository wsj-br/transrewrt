---
title: API anahtarı
description: >-
  Ücretsiz bir OpenRouter API anahtarı alın ve diğer yapay zeka sağlayıcılarını
  Transrewrt'e bağlayın.
translation_last_updated: '2026-07-17T14:59:01.920Z'
source_file_mtime: '2026-07-17T14:58:48.569Z'
source_file_hash: 540c5b2b785355828a421293195b23c2fec98502888d607638fbb33f93970a2a
translation_language: tr
source_file_path: src/content/docs/docs/api-key.md
translation_models:
  - google/gemini-2.5-flash
---



Transrewrt'in en az bir yapay zeka sağlayıcısına erişimi olması gerekir. Başlamak için ücretli bir modele ihtiyacınız **yoktur**: OpenRouter, bir anahtar ekledikten sonra ücretsiz modeller sunar ve diğer bazı sağlayıcılar da ücretsiz katmanlar sunar.

Desteklenen sağlayıcılar arasında [OpenRouter](https://openrouter.ai), OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras, NVIDIA, Alibaba Cloud, apikey.fun, herhangi bir OpenAI uyumlu uç nokta ve yerel OpenAI uyumlu sunucular (Ollama, LM Studio, llama.cpp ve benzerleri) bulunur.

## Kolay ve Gelişmiş

- **Kolay** mod (varsayılan): bir **sağlayıcıya** eşlenmiş bir **ön ayar** (Ücretsiz (OpenRouter), Standart, Gelişmiş veya Teknik) seçin. Yalnızca mevcut sağlayıcı için eşleşen ön ayarlar görünür.
- **Gelişmiş** mod: modelleri doğrudan seçin. Model kimlikleri bir sağlayıcı öneki kullanır (örneğin `openrouter/…`, `openai/…`, `local/…`).

## Ücretsiz OpenRouter anahtarı (masaüstü)

1. [openrouter.ai](https://openrouter.ai) adresine gidin ve kaydolun veya oturum açın.
2. [Anahtarlar](https://openrouter.ai/keys) sayfasını açın ve yeni bir anahtar oluşturun (adlandırın; isteğe bağlı kredi limiti). Kredi eklemeden ücretsiz modelleri kullanabilirsiniz.
3. Transrewrt'te **Ayarlar → API Yapılandırması**'nı açın, anahtarı **OpenRouter API anahtarı**'na yapıştırın ve **OpenRouter anahtarını test et**'e tıklayın.

:::caution
Çeviri, yeniden yazma veya dönüştürme için OpenRouter'ın **Body Builder** modelini (`openrouter/bodybuilder`) kullanmayın; tamamlanmış metin değil, JSON istek yükleri döndürür.
:::

## Diğer ücretsiz seçenekler

Cerebras, Google, Groq, Mistral AI veya [NVIDIA](https://build.nvidia.com/) (OpenAI uyumlu API) adreslerinden ücretsiz API anahtarları da alabilir veya Ollama, LM Studio, llama.cpp veya başka bir OpenAI uyumlu sunucu (örneğin Ollama aracılığıyla `translategemma:4b`) ile modelleri yerel olarak çalıştırabilirsiniz. Yerel LLM temel URL'sini Ayarlar'da (masaüstü) veya `LOCAL_LLM_URL`'de (Docker) tam API tabanına (yolu dahil edin, örn. `http://localhost:11434/v1`) ayarlayın.

:::caution
Başka bir cihazdan veya kapsayıcıdan yerel bir LLM sunucusu kullanıyorsanız, harici bağlantılara izin verecek şekilde yapılandırın (yalnızca yerel ana bilgisayar değil).
:::

## Docker / web

Sağlayıcı anahtarlarını sunucuda **ortam değişkenleri** olarak ayarlayın (örneğin `PROVIDER_API_KEY`). Kullanıcılar anahtarları tarayıcı kullanıcı arayüzüne yazamazlar. Bkz. [Yapılandırma](/docs/configuration/).

## İlk çalıştırma kontrol listesi

1. Uygulamayı açın ve gerekirse **Arayüz dilini** ayarlayın.
2. En az bir sağlayıcı anahtarı ekleyin ve test edin (masaüstü) veya sunucunun ortam anahtarlarına sahip olduğunu onaylayın (web).
3. **Kolay** modda, Genel Ayarlar'da bir **Sağlayıcı** seçin; **Gelişmiş** modda, **Ayarlar → Modeller** altında modeller ekleyin.
4. **Çevir** bölümünde, bir ön ayar veya model seçin ve kısa bir test çalıştırın — [Metin çevir](/docs/translate/) bölümüne bakın.
