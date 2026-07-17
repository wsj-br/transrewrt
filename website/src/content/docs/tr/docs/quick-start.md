---
title: Hızlı başlangıç
description: >-
  Transrewrt'i Windows veya Linux'a yükleyin ya da kendi kendine barındırılan
  Docker web uygulamasını çalıştırın.
---



Size uygun yolu seçin. Hepsi ücretsiz ve açık kaynaklıdır (Apache 2.0).

## Docker (kendi kendine barındırılan web)

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest

PROVIDER_API_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e PROVIDER_API_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

`PROVIDER_API_KEY=sk-or-your-key` öğesini seçtiğiniz sağlayıcının API anahtarıyla değiştirin ([Yapılandırma](/docs/configuration/) bölümünde desteklenen seçeneklere bakın).

Ardından [http://localhost:5000](http://localhost:5000) adresini açın ve hizmeti kullanıma sunmadan önce **varsayılan yönetici parolasını değiştirin**.

:::caution
Docker'da LLM kimlik bilgileri ortam değişkenleriyle (örneğin `PROVIDER_API_KEY`) ayarlanır. Web kullanıcı arayüzüne **girilmezler**. Masaüstünde, anahtarları **Ayarlar → API** bölümünde yapılandırırsınız.
:::

### Docker Compose

```bash
wget https://github.com/wsj-br/transrewrt/raw/refs/heads/master/production.yml -O transrewrt.yml
# Edit the file to add your API keys, or use a `.env` file. Set TZ if needed.
docker compose -f transrewrt.yml up -d
```

## Windows

1. En son `Transrewrt Setup x.y.z.exe`'ı [Sürümler](https://github.com/wsj-br/transrewrt/releases) sayfasından indirin.
2. Yükleyiciyi çalıştırın.
3. Uygulamayı açın ve API anahtarlarını **Ayarlar → API** bölümüne girin. En az bir sağlayıcı yapılandırın; OpenRouter, ücretsiz modeller için yaygın bir seçimdir.

:::note
Windows, imzasız bağımsız uygulamalar için UAC veya SmartScreen uyarıları gösterebilir. Resmi GitHub Sürümler sayfasından indirmeleri tercih edin ve yayınlandığında sağlama toplamlarını doğrulayın.
:::

## Linux

CPU'nuz için `.AppImage`'ı [Sürümler](https://github.com/wsj-br/transrewrt/releases) sayfasından indirin (`x64` veya `arm64`, Raspberry Pi 4+ dahil):

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

API anahtarlarını **Ayarlar → API** bölümüne girin.

Chromium GPU / EGL hataları veriyor ancak uygulama çalışıyorsa, donanım hızlandırmayı devre dışı bırakabilirsiniz:

```bash
TRANSREWRT_DISABLE_GPU=1 ./Transrewrt-x.y.z-arm64.AppImage
```

:::note
macOS şu anda desteklenmemektedir. Transrewrt Windows, Linux ve Docker için mevcuttur.
:::

## Sonraki adımlar

1. [Bir API anahtarı edinin](/docs/api-key/)
2. Her şeyin çalıştığını doğrulamak için basit bir çeviri çalıştırın
3. [Çevir](/docs/translate/), [Yeniden Yaz](/docs/rewrite/) ve [Dönüştür](/docs/transform/) kılavuzlarını okuyun
