---
title: Quick start
description: Install Transrewrt on Windows, Linux, or macOS, or run the Docker web app.
---

Pick the path that fits you. All are free and open source (Apache 2.0).

## Docker (web app)

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest

docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e PROVIDER_API_KEY=your-api-key \
  --name transrewrt \
  ghcr.io/wsj-br/transrewrt:latest
```

Replace `PROVIDER_API_KEY` with the variable for your provider (for example `OPENROUTER_API_KEY`, `OPENAI_API_KEY`, `ANTHROPIC_API_KEY`, `XIA_API_KEY`, ...) and set its value. See the full list in [Configuration](/docs/configuration/#environment-variables-web--docker).

Then open [http://localhost:5000](http://localhost:5000) and **change the default admin password** before exposing the service.

:::tip
In Docker, LLM credentials are set with environment variables (for example `PROVIDER_API_KEY`). They are **not** entered in the web UI. On desktop, you configure keys in **Settings → API Config**.
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
3. Open the app and enter API keys in **Settings → API Config**. Configure at least one provider; OpenRouter is a common choice for free models.

:::note
Windows may show UAC or SmartScreen warnings when installing the app. It's safe to install if you download it from the official GitHub Releases page. Click "More info" and "Run anyway" to install.
:::

## Linux

Download the `.AppImage` for your CPU from [Releases](https://github.com/wsj-br/transrewrt/releases) (`x64` or `arm64`, including Raspberry Pi 4+):

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

Enter API keys in **Settings → API Config**.

If Chromium prints GPU / EGL errors but the app works, you can disable hardware acceleration:

```bash
TRANSREWRT_DISABLE_GPU=1 ./Transrewrt-x.y.z-arm64.AppImage
```

## macOS

Download the `.dmg` for your Mac from [Releases](https://github.com/wsj-br/transrewrt/releases):

- **Apple Silicon** — `Transrewrt-x.y.z-arm64.dmg`
- **Intel** — `Transrewrt-x.y.z-x64.dmg`

Open the disk image and drag Transrewrt to Applications. Enter API keys in **Settings → API Config**.

:::note
The macOS build is unsigned (no Apple notarization). Gatekeeper blocks the first launch. Right-click `Transrewrt.app` and choose **Open**, then confirm **Open**.
:::

Or clear the quarantine attribute:

```bash
xattr -dr com.apple.quarantine /Applications/Transrewrt.app
```

## Updating

- **Windows** — download the newer `Transrewrt Setup x.y.z.exe` from [Releases](https://github.com/wsj-br/transrewrt/releases) and run it. Settings and data are kept.
- **Linux** — download the newer `.AppImage` and replace the old file. Settings and data are kept.
- **macOS** — download the newer `.dmg`, open it, and drag Transrewrt to Applications, replacing the existing app. Settings and data are kept.
- **Docker** — pull the new image and recreate the container. Data persists in the `/app/data` volume:

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest
docker stop transrewrt && docker rm transrewrt
# then run the same `docker run` command as above
# or, with Docker Compose:
docker compose -f transrewrt.yml pull && docker compose -f transrewrt.yml up -d
```

## Next steps

1. [Get an API key](/docs/api-key/)
2. Run a simple translation to confirm everything works
3. Read the [Translate](/docs/translate/), [Rewrite](/docs/rewrite/), and [Transform](/docs/transform/) guides
