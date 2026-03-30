---
translation_last_updated: '2026-03-30T00:46:02.917Z'
source_file_mtime: '2026-03-29T23:51:36.506Z'
source_file_hash: fa17b974cbf42a93
translation_language: en-US
source_file_path: README.md
---
<p align="center">
  <img src="../images/transrewrt_banner.png" alt="Transrewrt Banner"  />
</p>

<p align="center">
  <a href="https://github.com/wsj-br/transrewrt/releases"><img src="https://img.shields.io/badge/version-1.1.1-blue" alt="Version"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-Apache%202.0-green" alt="License: Apache 2.0"></a>
  <img src="https://img.shields.io/badge/platform-Windows%20%7C%20Linux%20%7C%20Docker-lightgrey" alt="Platform">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react" alt="React 19">
  <img src="https://img.shields.io/badge/Electron-41-47848F?logo=electron" alt="Electron 41">
</p>

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

Once installed, see the **[User Guide](USER-GUIDE.en-US.md)** for a full walkthrough of all features.

<small>**Read in other languages:** </small>
<small id="lang-list">[English (UK)](../README.md) · [Português (BR)](README.pt-BR.md) · [العربية](README.ar.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [Hrvatski](README.hr.md) · [Čeština](README.cs.md) · [Nederlands](README.nl.md) · [English (US)](README.en-US.md) · [Filipino](README.tl.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [हिन्दी](README.hi.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [Basa Jawa](README.jv.md) · [한국어](README.ko.md) · [Bahasa Melayu](README.ms.md) · [فارسی](README.fa.md) · [Polski](README.pl.md) · [Português (PT)](README.pt.md) · [ਪੰਜਾਬੀ](README.pa.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [Slovenčina](README.sk.md) · [Español](README.es.md) · [Kiswahili](README.sw.md) · [Svenska](README.sv.md) · [తెలుగు](README.te.md) · [ภาษาไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Tiếng Việt](README.vi.md)</small>

<small>

> **Note on UI and documentation translations:** All interface languages except the original English (UK) 
> were translated using AI models; the wording may be imprecise or contain errors.

</small>

<br/>

<a id="screenshots"></a>
## Screenshots

**Language selector**

![Language selector](../images/screenshots/en-US/language-selector.png)

**Translate**

![Translate](../images/screenshots/en-US/translate.png)

**Transform - prompt editor**

![Transform - prompt editor](../images/screenshots/en-US/transform-prompt-edit.png)

**Dashboard**

![Dashboard summary — usage](../images/screenshots/en-US/dashboard-summary.png)

**History**

![History](../images/screenshots/en-US/history.png)

**Settings - model selection**

![Settings - model selection](../images/screenshots/en-US/settings-models.png)

<br/><br/>

<a id="table-of-contents"></a>
## Table of Contents

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

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

<br/><br/>

<a id="quick-start"></a>
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

<br/>

> ℹ️ **NOTE**<br/>
> In Docker, LLM credentials are set with environment variables such as `OPENROUTER_API_KEY`, `OPENAI_API_KEY`, `CEREBRAS_API_KEY`, … (not in the web UI). On desktop (Electron) you configure keys in **Settings → API**.

<br/>

**Windows**

Download the latest `Transrewrt Setup x.y.z.exe` from [Releases](https://github.com/wsj-br/transrewrt/releases), run the installer, then launch from the Start menu or desktop shortcut. Enter your API keys in **Settings → API**. You need to configure at least one provider; OpenRouter is common for free models.

<br/>

**Linux**

Download the `.AppImage` for your CPU from [Releases](https://github.com/wsj-br/transrewrt/releases) (`x64` for typical PCs, `arm64` for many ARM devices, including Raspberry Pi 4+), then:

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

Enter your API keys in **Settings → API**. You need to configure at least one provider; OpenRouter is common for free models.

On Debian/Ubuntu you may need to install extra dependencies first:

```bash
sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth
```

See [Installation → Linux](#linux-electron) for details.

<br/>

> ℹ️ **NOTE**<br/>
> macOS is not currently supported. Transrewrt is available for Windows, Linux, and Docker.

<br/>

Once the app is running, see the **[User Guide](USER-GUIDE.en-US.md)** to learn how to translate, rewrite, and transform text, manage prompts, and configure models.

<br/><br/>

<a id="installation"></a>
## Installation

<a id="windows-electron"></a>
### Windows (Electron)

- Download the latest installer from [Releases](https://github.com/wsj-br/transrewrt/releases).
- Run the `.exe` and follow the installer.
- First run: start the app from the Start menu or desktop shortcut.

<br/>

> ℹ️ **NOTE**<br/>
> Windows may show one of these security warnings (normal for unsigned/indie apps):
>   - **User Account Control (UAC)**: "Do you want to allow this app from an unknown publisher to make changes to your device?" → Click **Yes**.
>   - **Microsoft Defender SmartScreen**: "Windows protected your PC" → Click **More info** → **Run anyway**.
>
> This happens because the app isn't signed by Microsoft or a major publisher—it's safe if downloaded from our official GitHub releases
>  (verify the SHA256 checksum below).

<br/>

<a id="linux-electron"></a>
### Linux (Electron)

- Download the matching `.AppImage` (`x64` or `arm64`) from [Releases](https://github.com/wsj-br/transrewrt/releases).
- Run: `chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage` on x86_64/amd64, or use the `...-arm64.AppImage` filename on ARM64.
- Extra dependencies (Debian/Ubuntu): `sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth`
- See [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) for more.

<br/>

<a id="docker"></a>
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

<a id="configuring-the-timezone"></a>
### Configuring the timezone

The application user interface date and time follow the **browser’s** locale and timezone. For **server-side** behavior (logging and similar), the container uses the `TZ` environment variable. The default is `TZ=Europe/London`.

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

<br/><br/>

<a id="getting-an-openrouter-api-key"></a>
## Getting an OpenRouter API key

Transrewrt supports multiple AI providers. [OpenRouter](https://openrouter.ai) is a popular choice because it aggregates many models under one key and offers free models.

1. Sign up or log in at [openrouter.ai](https://openrouter.ai).
2. Open the [Keys](https://openrouter.ai/keys) page and create a new key (name it, and optionally set a credit limit). You can use free models without adding credit.
3. **Desktop (Electron):** paste keys in **Settings → API**. **Docker:** set env vars such as `OPENROUTER_API_KEY` (see [Quick start](#quick-start)).

Do not use OpenRouter’s **Body Builder** model ([`openrouter/bodybuilder`](https://openrouter.ai/openrouter/bodybuilder)) for translate, rewrite, or transform: it returns JSON request payloads, not the completed text for those tasks. See [Settings → Models](USER-GUIDE.en-US.md#models) in the User Guide.

You can also use other providers (OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras) or run models locally with [Ollama](https://ollama.com). See [Configuration](#configuration-and-environment) for the full list of supported providers and environment variables.

> ⚠️ **WARNING**<br/>
> If you are using Ollama from another device, container, or service, remember to configure Ollama to allow external connections (not localhost-only).

For limits, BYOK, and more, see [OpenRouter authentication](https://openrouter.ai/docs/api/reference/authentication).

<br/><br/>

<a id="configuration-and-environment"></a>
## Configuration and environment

**Config file locations**

| Deployment         | Config location                                   |
| ------------------ | ------------------------------------------------- |
| Electron (Windows) | `%APPDATA%\transrewrt\`                           |
| Electron (Linux)   | `~/.config/transrewrt/`                           |
| Web / Docker       | `/app/data/config.json` (use a volume to persist) |

<br/>

**Environment variables** (web/Docker only; Electron uses the local config file)

| Variable         | Default                 | Description |
| ---------------- | ----------------------- | ----------- |
| `PORT`           | `5000`                  | Server listening port |
| `CONFIG_PATH`    | `/app/data/config.json` | Path to the config file |
| `TZ`             | `Europe/London`         | IANA timezone for server-side time (logging, etc.); UI still follows the browser. See [Docker → timezone](#docker-timezone) |
| `OPENROUTER_API_KEY` | *(empty)*               | OpenRouter API key |
| `OPENAI_API_KEY`     | *(empty)*               | OpenAI API key |
| `CEREBRAS_API_KEY`   | *(empty)*               | Cerebras API key |
| `ANTHROPIC_API_KEY`  | *(empty)*               | Anthropic API key |
| `GOOGLE_API_KEY`     | *(empty)*               | Google Gemini API key |
| `DEEPSEEK_API_KEY`   | *(empty)*               | DeepSeek API key |
| `GROQ_API_KEY`       | *(empty)*               | Groq API key |
| `MISTRAL_API_KEY`    | *(empty)*               | Mistral API key |
| `OLLAMA_URL`     | *(empty)*               | Ollama base URL (e.g. `http://host.docker.internal:11434`) |
| `XAI_API_KEY`        | *(empty)*               | xAI API key |

Configure only the providers you use. Model IDs are namespaced (`openrouter/…`, `openai/…`, `cerebras/…`, `ollama/…`, etc.).

**Cost display:** OpenRouter returns exact billed cost when applicable. Other providers use **estimated** cost from OpenRouter’s public model pricing when an OpenRouter key is available; without it, non-OpenRouter cost may show as `0`. Estimates are not invoices.

<br/>

**Data and persistence:** For Docker, mount a volume at `/app/data` so `config.json` and the SQLite database persist across container restarts. Without a volume, all data is lost when the container stops.

**Developers:** After pulling changes that replace the old single-key config, reset or merge `data/config.json` with the new default shape from `src/config-defaults/config_default.json` if your local file still uses removed fields (`api_key`, `api_url`, proxy options).

<br/>

**Web authentication:**

- Default admin: `admin` / `transrewrt26`.
- Manage users in **Settings → Users**.
- Reset a password: `docker exec <container> reset-web-password '<username>' '<new-password>'`
  (from source: `pnpm run reset-web-password -- <username> <new-password>`)

<br/>

> ⚠️ **WARNING**<br/>
> Change the default admin password immediately on any network-accessible host.

<br/>

Key settings (font, models, languages, etc.) are available in the application Settings.

<br/><br/>

<a id="development-and-architecture"></a>
## Development and architecture

- **Development:** Setup, build, test, and deploy (Electron, Web, Docker) - see **[dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)**.
- **Architecture and system overview:** Folder structure, tech stack, design decisions - see **[dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)**.

<br/><br/>

<a id="reporting-issues"></a>
## Reporting issues

Open an issue on [GitHub](https://github.com/wsj-br/transrewrt/issues). Include your platform (Windows / Linux / Docker) and app version (shown in the About dialog or on the Releases page).

<br/><br/>

<a id="disclaimer"></a>
## Disclaimer

Product names and icons belong to their respective owners and are used for identification purposes only. This software is not affiliated with or endorsed by any of the mentioned brands.

<br/><br/>

<a id="license"></a>
## License

Copyright © 2026 Waldemar Scudeller Jr.

[Apache License 2.0](../LICENSE)
