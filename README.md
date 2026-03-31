<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  

- [Screenshots](#screenshots)
- [Table of Contents](#table-of-contents)
- [Quick start](#quick-start)
- [Installation](#installation)
  - [Windows (Electron)](#windows-electron)
  - [Linux (Electron)](#linux-electron)
  - [Docker](#docker)
  - [Configuring the timezone](#configuring-the-timezone)
- [Getting an OpenRouter API key](#getting-an-openrouter-api-key)
- [Configuration and environment](#configuration-and-environment)
- [Development and architecture](#development-and-architecture)
- [Reporting issues](#reporting-issues)
- [Disclaimer](#disclaimer)
- [License](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->





AI-powered text tool: translate between languages, rewrite in different styles, and transform with custom prompts — using multiple AI providers (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, and local Ollama). Runs as a desktop app (Electron) or a self-hosted web app (Docker).

- **Translate** — between dozens of languages, with automatic source detection
- **Rewrite** — fix grammar, improve clarity, formal/informal, shorten, expand, technical
- **Transform** — custom AI prompts; create and manage prompts, optional target language per prompt
- **History** — full execution history with input/output text, filtering, and export
- **Models & cost** — choose models from any configured provider; cost and usage dashboards with log, summaries by model/operation/day
- **UI** — multilingual interface (30+ languages, RTL support), fonts, ...
- **Web mode** — multi-user support with admin roles
- **Desktop** — Electron app for Windows and Linux
- **Self-hosted** — Docker image for amd64 & arm64 (Raspberry Pi-ready)

Once installed, see the **[User Guide](USER-GUIDE.md)** for a full walkthrough of all features.

**Read in other languages:**
[English (UK)](README.md) · [Português (BR)](translated-docs/README.pt-BR.md) · [العربية](translated-docs/README.ar.md) · [বাংলা](translated-docs/README.bn.md) · [Català](translated-docs/README.ca.md) · [简体中文](translated-docs/README.zh-CN.md) · [繁體中文](translated-docs/README.zh-TW.md) · [Hrvatski](translated-docs/README.hr.md) · [Čeština](translated-docs/README.cs.md) · [Nederlands](translated-docs/README.nl.md) · [English (US)](translated-docs/README.en-US.md) · [Filipino](translated-docs/README.tl.md) · [Français](translated-docs/README.fr.md) · [Deutsch](translated-docs/README.de.md) · [Ελληνικά](translated-docs/README.el.md) · [हिन्दी](translated-docs/README.hi.md) · [Magyar](translated-docs/README.hu.md) · [Italiano](translated-docs/README.it.md) · [日本語](translated-docs/README.ja.md) · [Basa Jawa](translated-docs/README.jv.md) · [한국어](translated-docs/README.ko.md) · [Bahasa Melayu](translated-docs/README.ms.md) · [فارسی](translated-docs/README.fa.md) · [Polski](translated-docs/README.pl.md) · [Português (PT)](translated-docs/README.pt.md) · [ਪੰਜਾਬੀ](translated-docs/README.pa.md) · [Română](translated-docs/README.ro.md) · [Русский](translated-docs/README.ru.md) · [Slovenčina](translated-docs/README.sk.md) · [Español](translated-docs/README.es.md) · [Kiswahili](translated-docs/README.sw.md) · [Svenska](translated-docs/README.sv.md) · [తెలుగు](translated-docs/README.te.md) · [ภาษาไทย](translated-docs/README.th.md) · [Türkçe](translated-docs/README.tr.md) · [Українська](translated-docs/README.uk.md) · [Tiếng Việt](translated-docs/README.vi.md)



> **Note on UI and documentation translations:** All interface languages except the original English (UK) 
> were translated using AI models; the wording may be imprecise or contain errors.



  




## Screenshots

**Language selector**

Language selector

**Translate**

Translate

**Transform - prompt editor**

Transform - prompt editor

**Dashboard**

Dashboard summary — usage

**History**

History

**Settings - model selection**

Settings - model selection

  
  




## Table of Contents





- [Quick start](#quick-start)
- [Installation](#installation)
  - [Windows (Electron)](#windows-electron)
  - [Linux (Electron)](#linux-electron)
  - [Docker](#docker)
  - [Configuring the timezone](#configuring-the-timezone)
- [Getting an OpenRouter API key](#getting-an-openrouter-api-key)
- [Configuration and environment](#configuration-and-environment)
- [Development and architecture](#development-and-architecture)
- [Reporting issues](#reporting-issues)
- [Disclaimer](#disclaimer)
- [License](#license)



  
  




## Quick start

**Docker (recommended for self-hosting)**

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest

OPENROUTER_API_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_API_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

Replace `sk-or-your-key` with your [OpenRouter API key](https://openrouter.ai/keys) (or set other provider keys; see [Configuration](#configuration-and-environment)). Open [http://localhost:5000](http://localhost:5000) and change the default admin password before exposing the service.

  


> ℹ️ **NOTE**  
>
> In Docker, LLM credentials are set with environment variables such as `OPENROUTER_API_KEY`, `OPENAI_API_KEY`, `CEREBRAS_API_KEY`, … (not in the web UI). On desktop (Electron) you configure keys in **Settings → API**.

  


**Windows**

Download the latest `Transrewrt Setup x.y.z.exe` from [Releases](https://github.com/wsj-br/transrewrt/releases), run the installer, then launch from the Start menu or desktop shortcut. Enter your API keys in **Settings → API**. You need to configure at least one providers, OpenRouter is common for free models.

  


**Linux**

Download the `.AppImage` for your CPU from [Releases](https://github.com/wsj-br/transrewrt/releases) (`x64` for typical PCs, `arm64` for many ARM devices, including Raspberry Pi 4+), then:

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

Enter your API keys in **Settings → API**. You need to configure at least one providers, OpenRouter is common for free models.

**Console messages:** Packaged Linux builds (`x64` and `arm64` AppImages) suppress Node deprecation warnings in the terminal (for example the built-in `punycode` module). If Chromium prints GPU / EGL errors such as “GLES3 is unsupported” but the app works, you can silence them by disabling hardware acceleration:

```bash
TRANSREWRT_DISABLE_GPU=1 ./Transrewrt-x.y.z-arm64.AppImage
```

That applies on amd64 as well; change the filename to match your download. See [Installation → Linux (Electron)](#linux-electron) for a bit more detail.

On Debian/Ubuntu you may need extra **runtime** libraries Chromium expects (often already on full desktops). Use **`libnotify4`** for desktop notifications—**not** `libnotify-dev` (that is for building software, not for running the packaged AppImage):

```bash
sudo apt install libgtk-3-0 libnotify4 libnss3 libxss1 libasound2 libxtst6 xauth
```

Minimal or custom images may still fail with a missing `.so`; install the package the error names (common extras: `libatk1.0-0`, `libatk-bridge2.0-0`, `libgbm1`, `libdrm2`). Some environments need FUSE to run AppImages (e.g. `libfuse2` on Ubuntu 22.04+), or use `APPIMAGE_EXTRACT_AND_RUN=1 ./Transrewrt-….AppImage`.

See [Installation → Linux](#linux-electron) for the same summary.

  


> ℹ️ **NOTE**  
>
> macOS is not currently supported. Transrewrt is available for Windows, Linux, and Docker.

  


Once the app is running, see the **[User Guide](USER-GUIDE.md)** to learn how to translate, rewrite, and transform text, manage prompts, and configure models.

  
  




## Installation



### Windows (Electron)

- Download the latest installer from [Releases](https://github.com/wsj-br/transrewrt/releases).
- Run the `.exe` and follow the installer.
- First run: start the app from the Start menu or desktop shortcut.

  


> ℹ️ **NOTE**  
>
> Windows may show one of these security warnings (normal for unsigned/indie apps):
>
> - **User Account Control (UAC)**: "Do you want to allow this app from an unknown publisher to make changes to your device?" → Click **Yes**.
> - **Microsoft Defender SmartScreen**: "Windows protected your PC" → Click **More info** → **Run anyway**.
>
> This happens because the app isn't signed by Microsoft or a major publisher—it's safe if downloaded from our official GitHub releases
>  (verify the SHA256 checksum below).

  




### Linux (Electron)

- Download the matching `.AppImage` (`x64` or `arm64`) from [Releases](https://github.com/wsj-br/transrewrt/releases).
- Run: `chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage` on x86_64/amd64, or use the `...-arm64.AppImage` filename on ARM64.
- **Debian/Ubuntu runtime libs** (Electron/Chromium; same as [Quick start → Linux](#quick-start)): `sudo apt install libgtk-3-0 libnotify4 libnss3 libxss1 libasound2 libxtst6 xauth` — use **`libnotify4`**, not `libnotify-dev`. On minimal systems, install any missing `.so` reported in the terminal; add-ons such as `libatk1.0-0`, `libatk-bridge2.0-0`, `libgbm1`, `libdrm2` are often required. AppImage may need `libfuse2` (Ubuntu 22.04+) or `APPIMAGE_EXTRACT_AND_RUN=1 ./….AppImage`.
- **GPU messages:**  Chromium may log GPU or EGL initialization errors on some systems (especially ARM); the app can still run normally. To avoid those messages, launch with hardware acceleration off: `TRANSREWRT_DISABLE_GPU=1 ./Transrewrt-x.y.z-x64.AppImage` (or your `arm64` filename). 

  




### Docker

- Pull: `docker pull ghcr.io/wsj-br/transrewrt:latest`
- Set at least one provider key via environment (for example `OPENROUTER_API_KEY` for OpenRouter). Pass variables with `-e` or `docker compose` / `.env` so secrets are not baked into the image.
- Provider keys are **not** entered in the web UI; the server reads them from the environment.

Example - named volume for persistence (OpenRouter key via env):

```bash
OPENROUTER_API_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_API_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

or if you prefer to use Docker Compose, use:

```
# download the compose file
wget https://github.com/wsj-br/transrewrt/raw/refs/heads/master/production.yml -O transrewrt.yml
# edit the file to add the API_KEYS and adjust the timezone (TZ)
vi transrewrt.yml
# start the container
docker compose -f transrewrt.yml up -d
```

See [Configuration](#configuration-and-environment) for all environment variables, such as `PORT`, `CONFIG_PATH`, `TZ`, and LLM keys (`OPENROUTER_API_KEY`, `OPENAI_API_KEY`, …).



### Configuring the timezone

The application user interface date and time follow the **browser’s** locale and timezone. For **server-side** behaviour (logging and similar), the container uses the `TZ` environment variable. The default is `TZ=Europe/London`.

To use another timezone, set `TZ` in your Compose file, for example:

```yaml
environment:
  - TZ=America/Sao_Paulo
```

Or pass it when running the container (Docker):

```bash
--env TZ=America/Sao_Paulo
```

On many Linux hosts you can copy the system timezone name with:

```bash
echo TZ=\"$(</etc/timezone)\"
```

A list of valid timezone names is maintained in the [tz database](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) (Wikipedia).

  
  




## Getting an OpenRouter API key

Transrewrt supports multiple AI providers. [OpenRouter](https://openrouter.ai) is a popular choice because it aggregates many models under one key and offers free models.

1. Sign up or log in at [openrouter.ai](https://openrouter.ai).
2. Open the [Keys](https://openrouter.ai/keys) page and create a new key (name it, and optionally set a credit limit). You can use free models without adding credit.
3. **Desktop (Electron):** paste keys in **Settings → API**. **Docker:** set env vars such as `OPENROUTER_API_KEY` (see [Quick start](#quick-start)).

Do not use OpenRouter’s **Body Builder** model (`[openrouter/bodybuilder](https://openrouter.ai/openrouter/bodybuilder)`) for translate, rewrite, or transform: it returns JSON request payloads, not the completed text for those tasks. See [Settings → Models](USER-GUIDE.md#models) in the User Guide.

You can also use other providers (OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras) or run models locally with [Ollama](https://ollama.com). See [Configuration](#configuration-and-environment) for the full list of supported providers and environment variables.

> ⚠️ **WARNING**  
>
> If you are using Ollama from another device, container, or service, remember to configure Ollama to allow external connections (not localhost-only).

For limits, BYOK, and more, see [OpenRouter authentication](https://openrouter.ai/docs/api/reference/authentication).

  
  




## Configuration and environment

**Config file locations**


| Deployment         | Config location                                   |
| ------------------ | ------------------------------------------------- |
| Electron (Windows) | `%APPDATA%\transrewrt\`                           |
| Electron (Linux)   | `~/.config/transrewrt/`                           |
| Web / Docker       | `/app/data/config.json` (use a volume to persist) |


  


**Environment variables** (web/Docker only; Electron uses the local config file)


| Variable             | Default                 | Description                                                                                                                 |
| -------------------- | ----------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| `PORT`               | `5000`                  | Server listening port                                                                                                       |
| `CONFIG_PATH`        | `/app/data/config.json` | Path to the config file                                                                                                     |
| `TZ`                 | `Europe/London`         | IANA timezone for server-side time (logging, etc.); UI still follows the browser. See [Docker → timezone](#docker-timezone) |
| `OPENROUTER_API_KEY` | *(empty)*               | OpenRouter API key                                                                                                          |
| `OPENAI_API_KEY`     | *(empty)*               | OpenAI API key                                                                                                              |
| `CEREBRAS_API_KEY`   | *(empty)*               | Cerebras API key                                                                                                            |
| `ANTHROPIC_API_KEY`  | *(empty)*               | Anthropic API key                                                                                                           |
| `GOOGLE_API_KEY`     | *(empty)*               | Google Gemini API key                                                                                                       |
| `DEEPSEEK_API_KEY`   | *(empty)*               | DeepSeek API key                                                                                                            |
| `GROQ_API_KEY`       | *(empty)*               | Groq API key                                                                                                                |
| `MISTRAL_API_KEY`    | *(empty)*               | Mistral API key                                                                                                             |
| `OLLAMA_URL`         | *(empty)*               | Ollama base URL (e.g. `http://host.docker.internal:11434`)                                                                  |
| `XAI_API_KEY`        | *(empty)*               | xAI API key                                                                                                                 |


Configure only the providers you use. Model IDs are namespaced (`openrouter/…`, `openai/…`, `cerebras/…`, `ollama/…`, etc.).

**Cost display:** OpenRouter returns exact billed cost when applicable. Other providers use **estimated** cost from OpenRouter’s public model pricing when an OpenRouter key is available; without it, non-OpenRouter cost may show as `0`. Estimates are not invoices.

  


**Data and persistence:** For Docker, mount a volume at `/app/data` so `config.json` and the SQLite database persist across container restarts. Without a volume, all data is lost when the container stops.

**Developers:** After pulling changes that replace the old single-key config, reset or merge `data/config.json` with the new default shape from `src/config-defaults/config_default.json` if your local file still uses removed fields (`api_key`, `api_url`, proxy options).

  


**Web authentication:**

- Default admin: `admin` / `transrewrt26`.
- Manage users in **Settings → Users**.
- Reset a password: `docker exec <container> reset-web-password '<username>' '<new-password>'`
(from source: `pnpm run reset-web-password -- <username> <new-password>`)

  


> ⚠️ **WARNING**  
>
> Change the default admin password immediately on any network-accessible host.

  


Key settings (font, models, languages, etc.) are available in the application Settings.

  
  




## Development and architecture

- **Development:** Setup, build, test, and deploy (Electron, Web, Docker) - see **[dev/DEVELOPMENT.md](dev/DEVELOPMENT.md)**.
- **Architecture and system overview:** Folder structure, tech stack, design decisions - see **[dev/SYSTEM-OVERVIEW.md](dev/SYSTEM-OVERVIEW.md)**.

  
  




## Reporting issues

Open an issue on [GitHub](https://github.com/wsj-br/transrewrt/issues). Include your platform (Windows / Linux / Docker) and app version (shown in the About dialog or on the Releases page).

  
  




## Disclaimer

Product names and icons belong to their respective owners and are used for identification purposes only. This software is not affiliated with or endorsed by any of the mentioned brands.

  
  




## License

Copyright © 2026 Waldemar Scudeller Jr.

[Apache License 2.0](LICENSE)