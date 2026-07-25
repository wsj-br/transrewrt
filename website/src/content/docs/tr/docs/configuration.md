---
title: Yapılandırma
description: >-
  Yapılandırma dosyası konumları, Docker ortam değişkenleri, gizlilik modu ve
  web kimlik doğrulaması.
---



## Yapılandırma dosyası konumları

| Dağıtım | Veri klasörü |
| --- | --- |
| Electron (Windows) | `%APPDATA%\transrewrt\` |
| Electron (Linux) | `~/.config/transrewrt/` |
| Web / Docker | `/app/data/` (kalıcılık için bir birim kullanın) |

Veri klasörü, yedeklemeye değer her şeyi barındırır:

- `config.json` — ayarlar ve (masaüstü) şifreli API anahtarları
- `state.json` — son kullanılan diller, model ve görünüm durumu
- `presets.json` — önbelleğe alınmış Kolay mod ön ayarları kataloğu
- `transrewrt.db` — geçmiş, maliyetler, istemler, sözlük ve (web) kullanıcıları içeren SQLite veritabanı

Uygulamadan taşınabilir bir yedekleme ZIP'i de oluşturabilirsiniz — bkz. [Ayarlar → Genel Ayarlar](/docs/settings/#general-settings).

## Veri kalıcılığı (Docker)

Yapılandırma dosyalarının ve SQLite veritabanının (bkz. [Yapılandırma dosyası konumları](#config-file-locations)) kapsayıcı yeniden başlatmalarında hayatta kalması için `/app/data` konumuna bir birim bağlayın. Bir birim olmadan, kapsayıcı durduğunda veriler kaybolur.

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
| `LOCAL_LLM_URL` | Yerel bir sunucu için yol dahil olmak üzere tam OpenAI uyumlu API temel URL'si (örneğin Ollama `http://host.docker.internal:11434/v1`, LM Studio `http://host.docker.internal:1234/v1`) |
| `XAI_API_KEY` | xAI API anahtarı |
| `NVIDIA_API_KEY` | NVIDIA API anahtarı |
| `ALIBABA_API_KEY` | Alibaba Cloud (DashScope) API anahtarı |
| `APIFUN_API_KEY` | apikey.fun API anahtarı |
| `CUSTOM_PROVIDER_NAME` | Özel bir OpenAI uyumlu sağlayıcı için görünen ad |
| `CUSTOM_PROVIDER_URL` | Özel bir OpenAI uyumlu sağlayıcı için temel URL |
| `CUSTOM_PROVIDER_API_KEY` | Özel sağlayıcı için API anahtarı |

Özel bir uç nokta kullanırken her üç `CUSTOM_PROVIDER_*` değişkeni de gereklidir. Modeller **Gelişmiş** modda `{providerName}/…` olarak görünür.

## Ortam değişkenleri (masaüstü)

| Değişken | Açıklama |
| --- | --- |
| `TRANSREWRT_DISABLE_GPU` | Donanım hızlandırmayı devre dışı bırakmak için `1` olarak ayarlayın (Chromium Linux'ta GPU / EGL hataları yazdırdığında kullanışlıdır) |
| `HISTORY_DISABLED` | Yürütme geçmişini kapatmaya zorla (`true` / `1`) — bkz. [Gizlilik modu](#privacy-mode) |

## Gizlilik modu

Geçmişi `config.json` veya kullanıcı başına tercihlerden bağımsız olarak kapatmaya zorlamak için web/Docker sunucu işleminde ve/veya Electron ana işleminde `HISTORY_DISABLED` değerini `true` veya `1` olarak ayarlayın. Bu, giriş/çıkış geçmişinin depolanmasını devre dışı bırakır, **Ayarlar → Genel Ayarlar → Geçmiş**'i kilitler ve Geçmişle ilgili API'leri engeller.

## Web kimlik doğrulaması

- Varsayılan yönetici: `admin` / `transrewrt26`
- Kullanıcıları, oturum zaman aşımını ve oturum iptalini **Ayarlar → Kullanıcılar** bölümünde yönetin — bkz. [Ayarlar](/docs/settings/#users)
- Oturum açmış her kullanıcı, kenar çubuğunun altındaki kullanıcı menüsünden kendi şifresini değiştirebilir veya oturumu kapatabilir
- Bir şifreyi sıfırlayın:

```bash
docker exec <container> reset-web-password '<username>' '<new-password>'
```

:::danger
Ağdan erişilebilen herhangi bir ana bilgisayarda varsayılan yönetici şifresini hemen değiştirin.
:::

:::caution
Sunucu düz HTTP kullanır. Eğer sunucuyu localhost veya güvenilir bir ağın ötesine açarsanız, şifrelerin ve metinlerin açık metin olarak gönderilmemesi için HTTPS özellikli bir ters proxy (örneğin Caddy, nginx veya Traefik) arkasına yerleştirin.
:::

## Maliyet gösterimi

OpenRouter, uygun olduğunda tam faturalandırılmış maliyeti döndürür. Diğer sağlayıcılar, bir OpenRouter anahtarı mevcut olduğunda OpenRouter'ın genel model fiyatlandırmasından **tahmini** maliyeti kullanır. Tahminler fatura değildir.

Ayarlar kullanıcı arayüzü (fontlar, modeller, geçmiş, yedeklemeler) için bkz. [Ayarlar](/docs/settings/).
