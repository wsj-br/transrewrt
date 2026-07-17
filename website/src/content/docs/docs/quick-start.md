---
title: Quick start
description: Install Transrewrt on Windows or Linux, or run the self-hosted Docker web app.
---

Pick the path that fits you. All are free and open source (Apache 2.0).

## Docker (self-hosted web)

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest

PROVIDER_API_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e PROVIDER_API_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

Replace `PROVIDER_API_KEY=sk-or-your-key` with your API key from your chosen provider (see supported options in [Configuration](/docs/configuration/)).

Then open [http://localhost:5000](http://localhost:5000) and **change the default admin password** before exposing the service.

:::caution
In Docker, LLM credentials are set with environment variables (for example `PROVIDER_API_KEY`). They are **not** entered in the web UI. On desktop, you configure keys in **Settings → API**.
:::

### Docker Compose

```bash
wget https://github.com/wsj-br/transrewrt/raw/refs/heads/master/production.yml -O transrewrt.yml
# Edit the file to add your API keys, or use a `.env` file. Set TZ if needed.
docker compose -f transrewrt.yml up -d
```

## Windows

1. Download the latest `Transrewrt Setup x.y.z.exe` from [Releases](https://github.com/wsj-br/transrewrt/releases).
2. Run the installer.
3. Open the app and enter API keys in **Settings → API**. Configure at least one provider; OpenRouter is a common choice for free models.

:::note
Windows may show UAC or SmartScreen warnings for unsigned indie apps. Prefer downloads from the official GitHub Releases page and verify checksums when published.
:::

## Linux

Download the `.AppImage` for your CPU from [Releases](https://github.com/wsj-br/transrewrt/releases) (`x64` or `arm64`, including Raspberry Pi 4+):

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

Enter API keys in **Settings → API**.

If Chromium prints GPU / EGL errors but the app works, you can disable hardware acceleration:

```bash
TRANSREWRT_DISABLE_GPU=1 ./Transrewrt-x.y.z-arm64.AppImage
```

:::note
macOS is not currently supported. Transrewrt is available for Windows, Linux, and Docker.
:::

## Next steps

1. [Get an API key](/docs/api-key/)
2. Run a simple translation to confirm everything works
3. Read the [Translate](/docs/translate/), [Rewrite](/docs/rewrite/), and [Transform](/docs/transform/) guides
