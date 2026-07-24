---
title: API anahtarı
description: >-
  Transrewrt'ü bir API anahtarı ekleyerek seçtiğiniz bir yapay zeka
  sağlayıcısına bağlayın veya bunun yerine yerel bir model kullanın.
---



Transrewrt kendi yapay zekasını içermez; metninizi seçtiğiniz bir yapay zeka sağlayıcısına gönderir. Bir sağlayıcıyı bağlamak için bir **API anahtarı** eklersiniz: sağlayıcı tarafından verilen ve hizmetleri için bir parola gibi çalışan özel bir kod. Başlamak için yalnızca **bir** sağlayıcıya ihtiyacınız vardır ve ödeme yapmanız gerekmez: çeşitli sağlayıcılar ücretsiz modeller veya ücretsiz katmanlar sunar ve ayrıca hiçbir anahtar olmadan kendi bilgisayarınızda modeller çalıştırabilirsiniz.

Desteklenen sağlayıcılar arasında OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras, NVIDIA, Alibaba Cloud, apikey.fun, herhangi bir OpenAI uyumlu uç nokta ve yerel OpenAI uyumlu sunucular (Ollama, LM Studio, llama.cpp ve benzerleri) bulunur.

## Adım 1 — Bir sağlayıcı seçin

Desteklenen herhangi bir sağlayıcı çalışır. Hangisini seçeceğinizden emin değilseniz:

- **Başlamak için ücretsiz**: OpenRouter, Google Gemini, Groq, Mistral, Cerebras ve NVIDIA'nın tümü ücretsiz modeller veya ücretsiz katmanlar sunar.
- **Zaten bir hesabınız var mı?** Halihazırda OpenAI, Anthropic veya başka bir desteklenen sağlayıcı kullanıyorsanız, bu hesabı yeniden kullanabilirsiniz.
- **Her şeyi kendi bilgisayarınızda tutmayı mı tercih edersiniz?** Anahtarı tamamen atlayın ve bunun yerine [yerel bir model](#using-a-local-model-instead-no-api-key) kullanın.

## Adım 2 — Bir API anahtarı oluşturun

Kesin adımlar sağlayıcıya göre biraz değişir, ancak desen her yerde aynıdır:

1. Sağlayıcının web sitesine kaydolun veya giriş yapın. Transrewrt'ün **Ayarlar → API Yapılandırması** bölümünde, her sağlayıcının sizi doğru yere götüren bir **Sağlayıcı web sitesini aç** bağlantısı vardır.
2. **API anahtarları** sayfasını bulun (bazen hesap, kontrol paneli veya geliştirici ayarları altında) ve yeni bir anahtar oluşturun. Bazı sağlayıcılar anahtarı adlandırmanızı veya bir harcama limiti belirlemenizi ister; her ikisi de isteğe bağlıdır.
3. Anahtarı kopyalayın. Genellikle `sk-` gibi bir şeyle başlayan uzun bir harf ve sayı dizisidir.

:::caution
Bir API anahtarını bir parola gibi ele alın: paylaşmayın, yayınlamayın veya kimseye göndermeyin. Bir anahtar sızarsa, sağlayıcının web sitesinde silin ve yeni bir tane oluşturun.
:::

## Adım 3 — Anahtarı ekleyin ve test edin (masaüstü)

1. Transrewrt'te **Ayarlar → API Yapılandırması**'nı açın.
2. Anahtarı sağlayıcınızın alanına yapıştırın (örneğin **Google Gemini API anahtarı**) ve kaydedin.
3. Anahtarın çalıştığını doğrulamak için alanın yanındaki **Test Et**'e tıklayın.

Test başarılı olduğunda hazırsınız; ana ekranda o sağlayıcıyı seçin ve çevirmeye başlayın.

:::caution
OpenRouter'ın **Body Builder** modelinden (`openrouter/bodybuilder`) kaçının; tamamlanmış metin değil, JSON istek yükleri döndürür. Bkz. [Ayarlar → Modeller](/docs/settings/#models).
:::

## Bunun yerine yerel bir model kullanma (API anahtarı yok)

Kendi bilgisayarınızda Ollama, LM Studio, llama.cpp veya başka bir OpenAI uyumlu sunucu (örneğin LM Studio aracılığıyla `google/gemma-4-e2b`) ile modeller çalıştırabilirsiniz. Makinenizden hiçbir şey ayrılmaz ve API anahtarına gerek yoktur.

Birini bağlamak için, Yerel LLM temel URL'sini yol dahil olmak üzere tam API tabanına ayarlayın; örneğin `http://localhost:11434/v1`. Masaüstünde, bunu **Ayarlar → API Yapılandırması**'nda ayarlayın; Docker'da bunun yerine `LOCAL_LLM_URL` ortam değişkenini ayarlayın.

:::caution
Başka bir cihazdan veya kapsayıcıdan yerel bir LLM sunucusu kullanıyorsanız, harici bağlantılara izin verecek şekilde yapılandırın (yalnızca localhost değil).
:::

## Docker / web

Transrewrt'ü bir tarayıcıda kullanıyorsanız, anahtarlar tarayıcı kullanıcı arayüzüne yazılmaz, sunucuyu çalıştıran kişi tarafından yönetilir. Yönetici, sağlayıcı anahtarlarını sunucuda **ortam değişkenleri** olarak ayarlar (örneğin `PROVIDER_API_KEY`) — bkz. [Yapılandırma](/docs/configuration/).

## İlk çalıştırma kontrol listesi

1. Uygulamayı açın ve gerekirse **Arayüz dilini** ayarlayın.
2. En az bir sağlayıcı anahtarı ekleyin ve test edin — veya yerel bir model yapılandırın (masaüstü) veya sunucunun ortam anahtarlarına sahip olduğunu onaylayın (web).
3. **Kolay** modda, Genel Ayarlar'da bir **Sağlayıcı** seçin; **Gelişmiş** modda, **Ayarlar → Modeller** altında modeller ekleyin — iki mod için [Ayarlar](/docs/settings/#general-settings) bölümüne bakın.
4. **Çevir**'de, bir ön ayar veya model seçin ve kısa bir test çalıştırın — bkz. [Metin çevir](/docs/translate/).

## Bir şeyler çalışmazsa

- **Anahtar testi başarısız oluyor**: Anahtarın tamamen kopyalandığını (önünde veya arkasında boşluk olmadan) ve sağlayıcının web sitesinde silinmediğini veya devre dışı bırakılmadığını kontrol edin.
- **Çeviriler kota veya kredi hatasıyla başarısız oluyor**: Ücretsiz katmanların günlük veya aylık limitleri vardır; bekleyin, başka bir ücretsiz sağlayıcıya geçin veya kredi ekleyin.
- **Kolay modda sağlayıcı görünmüyor**: **Ayarlar → API Yapılandırması**'nı açın ve en az bir anahtarın (veya Yerel LLM URL'sinin) yapılandırıldığını ve test edildiğini onaylayın.

Daha fazla yardım: [Yaygın sorunlar](/docs/common-issues/).
