---
title: Yapılandırma
description: >-
  Yapılandırma dosyası konumları, Docker ortam değişkenleri, gizlilik modu ve
  web kimlik doğrulaması.
translation_last_updated: '2026-07-17T14:59:02.298Z'
source_file_mtime: '2026-07-17T14:43:44.727Z'
source_file_hash: 8c3b2c00eddcee7693d66c5f5955c2d2186e55de630886446764bc6b798f05b5
translation_language: tr
source_file_path: src/content/docs/docs/configuration.md
translation_models:
  - google/gemini-2.5-flash
---



## Yapılandırma dosyası konumları

| Dağıtım | Yapılandırma konumu |
| --- | --- |
| Electron (Windows) | `%APPDATA%\transrewrt\` |
| Electron (Linux) | `~/.config/transrewrt/` |
| Web / Docker | `/app/data/config.json` (kalıcılık için bir birim kullanın) |

## Ortam değişkenleri (web / Docker)

Electron yerel yapılandırma dosyasını kullanır. Yalnızca web/Docker sunucusu için:

| Değişken | Açıklama |
| --- | --- |
| `PORT` | Sunucu dinleme bağlantı noktası (varsayılan `5000`) |
| `CONFIG_PATH` | Yapılandırma dosyasının yolu (varsayılan `/app/data/config.json`) |
| `TZ` | Sunucu tarafı saati için saat dilimi (varsayılan `Europe/London`) |
| `HISTORY_DISABLED` | Yürütme geçmişini kapatmaya zorla (`true` / `1`) |
| `OPENROUTER_API_KEY` | OpenRouter API anahtarı |
| `OPENAI_API_KEY` | OpenAI API anahtarı |
| `CEREBRAS_API_KEY` | Cerebras API anahtarı |
| `ANTHROPIC_API_KEY` | Anthropic API anahtarı |
| `GOOGLE_API_KEY` | Google Gemini API anahtarı |
| `DEEPSEEK_API_KEY` | DeepSeek API anahtarı |
| `GROQ_API_KEY` | Groq API anahtarı |
| `MISTRAL_API_KEY` | Mistral API anahtarı |
| `LOCAL_LLM_URL` | Yerel bir sunucu için tam OpenAI uyumlu API temel URL'si (yolu dahil edin, örn. Ollama `http://host.docker.internal:11434/v1`, LM Studio `http://host.docker.internal:1234/v1`) |
| `XAI_API_KEY` | xAI API anahtarı |
| `NVIDIA_API_KEY` | NVIDIA API anahtarı |
| `ALIBABA_API_KEY` | Alibaba Cloud (DashScope) API anahtarı |
| `APIFUN_API_KEY` | apikey.fun API anahtarı |
| `CUSTOM_PROVIDER_NAME` | Özel OpenAI uyumlu sağlayıcı için görünen ad |
| `CUSTOM_PROVIDER_URL` | Özel OpenAI uyumlu sağlayıcı için temel URL |
| `CUSTOM_PROVIDER_API_KEY` | Özel sağlayıcı için API anahtarı |

Özel bir uç nokta kullanırken her üç `CUSTOM_PROVIDER_*` değişkeni de gereklidir. Modeller **Gelişmiş** modunda `{providerName}/…` olarak görünür.

## Gizlilik modu

Geçmişi `config.json` veya kullanıcı başına tercihlerden bağımsız olarak kapatmaya zorlamak için web/Docker sunucu sürecinde ve/veya Electron ana sürecinde `HISTORY_DISABLED` değerini `true` veya `1` olarak ayarlayın. Bu, giriş/çıkış geçmişinin depolanmasını devre dışı bırakır, **Ayarlar → Genel Ayarlar → Geçmiş**'i kilitler ve Geçmiş ile ilgili API'leri engeller.

## Veri kalıcılığı (Docker)

`config.json` ve SQLite veritabanının kapsayıcı yeniden başlatmalarında hayatta kalması için `/app/data` konumuna bir birim bağlayın. Bir birim olmadan, kapsayıcı durduğunda veriler kaybolur.

## Web kimlik doğrulaması

- Varsayılan yönetici: `admin` / `transrewrt26`
- Kullanıcıları **Ayarlar → Kullanıcılar** bölümünde yönetin
- Bir parolayı sıfırlayın:

```bash
docker exec <container> reset-web-password '<username>' '<new-password>'
```

:::danger
Ağa erişilebilen herhangi bir ana bilgisayarda varsayılan yönetici parolasını hemen değiştirin.
:::

## Maliyet gösterimi

OpenRouter, uygun olduğunda tam faturalandırılmış maliyeti döndürür. Diğer sağlayıcılar, bir OpenRouter anahtarı mevcut olduğunda OpenRouter'ın genel model fiyatlandırmasından **tahmini** maliyeti kullanır. Tahminler fatura değildir.

Ayarlar kullanıcı arayüzü (yazı tipleri, modeller, geçmiş, yedeklemeler) için [Ayarlar](/docs/settings/) bölümüne bakın.
