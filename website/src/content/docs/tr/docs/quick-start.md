---
title: Hızlı başlangıç
description: >-
  Transrewrt'ü Windows veya Linux'a yükleyin ya da kendi barındırdığınız Docker
  web uygulamasını çalıştırın.
---



Size uygun yolu seçin. Hepsi ücretsiz ve açık kaynaklıdır (Apache 2.0).

## Docker (kendi kendine barındırılan web)

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest

docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e PROVIDER_API_KEY=your-api-key \
  --name transrewrt \
  ghcr.io/wsj-br/transrewrt:latest
```

`PROVIDER_API_KEY` öğesini sağlayıcınızın değişkeniyle değiştirin (örneğin `OPENROUTER_API_KEY`, `OPENAI_API_KEY`, `ANTHROPIC_API_KEY`, `XIA_API_KEY`, ...) ve değerini ayarlayın. Tam listeyi [Yapılandırma](/docs/configuration/#environment-variables-web--docker) bölümünde bulabilirsiniz.

Ardından [http://localhost:5000](http://localhost:5000) adresini açın ve hizmeti kullanıma sunmadan önce **varsayılan yönetici parolasını değiştirin**.

:::tip
Docker'da LLM kimlik bilgileri ortam değişkenleriyle (örneğin `PROVIDER_API_KEY`) ayarlanır. Bunlar web kullanıcı arayüzüne **girilmez**. Masaüstünde, anahtarları **Ayarlar → API Yapılandırması** bölümünde yapılandırırsınız.
:::

### Docker Compose

```bash
wget https://github.com/wsj-br/transrewrt/raw/refs/heads/master/production.yml -O transrewrt.yml
# Edit the file to add your API keys, or use a `.env` file. Set TZ if needed.
docker compose -f transrewrt.yml up -d
```

## Windows

1. En son `Transrewrt Setup x.y.z.exe` dosyasını [Sürümler](https://github.com/wsj-br/transrewrt/releases) sayfasından indirin.
2. Yükleyiciyi çalıştırın.
3. Uygulamayı açın ve API anahtarlarını **Ayarlar → API Yapılandırması** bölümüne girin. En az bir sağlayıcı yapılandırın; OpenRouter, ücretsiz modeller için yaygın bir seçimdir.

:::note
Windows, uygulamayı yüklerken UAC veya SmartScreen uyarıları gösterebilir. Resmi GitHub Sürümleri sayfasından indirirseniz yüklemek güvenlidir. Yüklemek için "Daha fazla bilgi" ve "Yine de çalıştır"a tıklayın.
:::

## Linux

CPU'nuz için `.AppImage` dosyasını [Sürümler](https://github.com/wsj-br/transrewrt/releases) sayfasından indirin (Raspberry Pi 4+ dahil `x64` veya `arm64`):

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

API anahtarlarını **Ayarlar → API Yapılandırması** bölümüne girin.

Chromium GPU / EGL hataları yazdırıyor ancak uygulama çalışıyorsa, donanım hızlandırmayı devre dışı bırakabilirsiniz:

```bash
TRANSREWRT_DISABLE_GPU=1 ./Transrewrt-x.y.z-arm64.AppImage
```

:::note
macOS şu anda desteklenmemektedir. Transrewrt Windows, Linux ve Docker için mevcuttur.
:::

## Güncelleme

- **Windows** — daha yeni `Transrewrt Setup x.y.z.exe` dosyasını [Sürümler](https://github.com/wsj-br/transrewrt/releases) sayfasından indirin ve çalıştırın. Ayarlar ve veriler korunur.
- **Linux** — daha yeni `.AppImage` dosyasını indirin ve eski dosyanın yerine koyun. Ayarlar ve veriler korunur.
- **Docker** — yeni görüntüyü çekin ve kapsayıcıyı yeniden oluşturun. Veriler `/app/data` biriminde kalır:

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest
docker stop transrewrt && docker rm transrewrt
# then run the same `docker run` command as above
# or, with Docker Compose:
docker compose -f transrewrt.yml pull && docker compose -f transrewrt.yml up -d
```

## Sonraki adımlar

1. [Bir API anahtarı alın](/docs/api-key/)
2. Her şeyin çalıştığını doğrulamak için basit bir çeviri yapın
3. [Çevir](/docs/translate/), [Yeniden Yaz](/docs/rewrite/) ve [Dönüştür](/docs/transform/) kılavuzlarını okuyun
