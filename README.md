
<p align="center">
  <img src="images/transrewrt_logo.svg" alt="Transrewrt logo" width="120" />
</p>

<h1 align="center">Transrewrt</h1>

<p align="center">
  <a href="https://github.com/wsj-br/transrewrt/releases"><img src="https://img.shields.io/badge/version-1.0.15-blue" alt="Version"></a>
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

Once installed, see the **[User Guide](USER-GUIDE.md)** for a full walkthrough of all features.

<small>**Read in other languages:** </small>
<small id="lang-list"> [English (UK)](README.md) · [Português (BR)](translated-docs/README.pt-BR.md) · [العربية](translated-docs/README.ar.md) · [বাংলা](translated-docs/README.bn.md) · [Català](translated-docs/README.ca.md) · [简体中文](translated-docs/README.zh-CN.md) · [繁體中文](translated-docs/README.zh-TW.md) · [Hrvatski](translated-docs/README.hr.md) · [Čeština](translated-docs/README.cs.md) · [Nederlands](translated-docs/README.nl.md) · [English (US)](translated-docs/README.en-US.md) · [Filipino](translated-docs/README.tl.md) · [Français](translated-docs/README.fr.md) · [Deutsch](translated-docs/README.de.md) · [Ελληνικά](translated-docs/README.el.md) · [हिन्दी](translated-docs/README.hi.md) · [Magyar](translated-docs/README.hu.md) · [Italiano](translated-docs/README.it.md) · [日本語](translated-docs/README.ja.md) · [Basa Jawa](translated-docs/README.jv.md) · [한국어](translated-docs/README.ko.md) · [Bahasa Melayu](translated-docs/README.ms.md) · [فارسی](translated-docs/README.fa.md) · [Polski](translated-docs/README.pl.md) · [Português (PT)](translated-docs/README.pt.md) · [ਪੰਜਾਬੀ](translated-docs/README.pa.md) · [Română](translated-docs/README.ro.md) · [Русский](translated-docs/README.ru.md) · [Slovenčina](translated-docs/README.sk.md) · [Español](translated-docs/README.es.md) · [Kiswahili](translated-docs/README.sw.md) · [Svenska](translated-docs/README.sv.md) · [తెలుగు](translated-docs/README.te.md) · [ภาษาไทย](translated-docs/README.th.md) · [Türkçe](translated-docs/README.tr.md) · [Українська](translated-docs/README.uk.md) · [Tiếng Việt](translated-docs/README.vi.md)</small>

<small>

> **Note on UI and documentation translations:** All interface languages except the original English (UK) 
> were translated using AI models; the wording may be imprecise or contain errors.

</small>

<br/>

<a id="screenshots"></a>
## Screenshots

**Language selector**

![Language selector](images/screenshots/en-GB/language-selector.png)

**Translate**

![Translate](images/screenshots/en-GB/translate.png)

**Transform - prompt editor**

![Transform - prompt editor](images/screenshots/en-GB/transform-prompt-edit.png)

**Dashboard**

![Cost dashboard](images/screenshots/en-GB/dashboard-summary.png)

**History**

![History](images/screenshots/en-GB/history.png)

**Settings - model selection**

![Settings - model selection](images/screenshots/en-GB/settings-models.png)

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
- [Getting an OpenRouter API key](#getting-an-openrouter-api-key)
- [Configuration and environment](#configuration-and-environment)
- [Development and architecture](#development-and-architecture)
- [Releases and tags](#releases-and-tags)
- [Contributing](#contributing)
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

Download the latest `Transrewrt Setup x.y.z.exe` from [Releases](https://github.com/wsj-br/transrewrt/releases), run the installer, then launch from the Start menu or desktop shortcut. Enter your API keys in **Settings → API**. You need to configure at least one providers, OpenRouter is common for free models.

<br/>

**Linux**

Download the `.AppImage` for your CPU from [Releases](https://github.com/wsj-br/transrewrt/releases) (`x64` for typical PCs, `arm64` for many ARM devices, including Raspberry Pi 4+), then:

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

Enter your API keys in **Settings → API**. You need to configure at least one providers, OpenRouter is common for free models.

On Debian/Ubuntu you may need to install extra dependencies first:

```bash
sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth
```

See [Installation → Linux](#linux-electron) for details.

<br/>

> ℹ️ **NOTE**<br/>
> macOS is not currently supported. Transrewrt is available for Windows, Linux, and Docker.

<br/>

Once the app is running, see the **[User Guide](USER-GUIDE.md)** to learn how to translate, rewrite, and transform text, manage prompts, and configure models.

<br/><br/>

<a id="installation"></a>
## Installation

<a id="windows-electron"></a>
### Windows (Electron)

- Download the latest installer from [Releases](https://github.com/wsj-br/transrewrt/releases).
- Run the `.exe` and follow the installer.
- First run: start the app from the Start menu or desktop shortcut. 

<br/>

<a id="linux-electron"></a>
### Linux (Electron)

- Download the matching `.AppImage` (`x64` or `arm64`) from [Releases](https://github.com/wsj-br/transrewrt/releases).
- Run: `chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage` on x86_64/amd64, or use the `...-arm64.AppImage` filename on ARM64.
- Extra dependencies (Debian/Ubuntu): `sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth`
- See [dev/DEVELOPMENT.md](dev/DEVELOPMENT.md) for more.

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
# edit the file to add the API_KEYS
vi transrewrt.yml
# start the container
docker compose -f transrewrt.yml up -d
```

<br/>

| Option   | Description                                                                                                                            |
|----------|----------------------------------------------------------------------------------------------------------------------------------------|
| Port     | `5000` (map with `-p 5000:5000`)                                                                                                       |
| Volume   | Mount `/app/data` for config and database persistence                                                                                  |
| Env vars | `PORT`, `CONFIG_PATH`, plus LLM keys (`OPENROUTER_API_KEY`, `OPENAI_API_KEY`, …) - see [Configuration](#configuration-and-environment) |

To build and run from source: `docker compose up --build -d` or `pnpm docker:up` - see [dev/DEVELOPMENT.md](dev/DEVELOPMENT.md).

<br/><br/>

<a id="getting-an-openrouter-api-key"></a>
## Getting an OpenRouter API key

Transrewrt supports multiple AI providers. [OpenRouter](https://openrouter.ai) is a popular choice because it aggregates many models under one key and offers free models.

1. Sign up or log in at [openrouter.ai](https://openrouter.ai).
2. Open the [Keys](https://openrouter.ai/keys) page and create a new key (name it, and optionally set a credit limit). You can use free models without adding credit.
3. **Desktop (Electron):** paste keys in **Settings → API**. **Docker:** set env vars such as `OPENROUTER_API_KEY` (see [Quick start](#quick-start)).

Do not use OpenRouter’s **Body Builder** model ([`openrouter/bodybuilder`](https://openrouter.ai/openrouter/bodybuilder)) for translate, rewrite, or transform: it returns JSON request payloads, not the completed text for those tasks. See [Settings → Models](USER-GUIDE.md#models) in the User Guide.

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

- **Development:** Setup, build, test, and deploy (Electron, Web, Docker) - see **[dev/DEVELOPMENT.md](dev/DEVELOPMENT.md)**.
- **Architecture and system overview:** Folder structure, tech stack, design decisions - see **[dev/SYSTEM-OVERVIEW.md](dev/SYSTEM-OVERVIEW.md)**.

<br/><br/>

<a id="releases-and-tags"></a>
## Releases and tags

- **Git tags** `v`* (e.g. `v1.0.10`) trigger the [release workflow](.github/workflows/release.yml). **GitHub Releases** attach the Windows installer (`.exe`) and Linux AppImages (**x64** and **arm64**).
- **Docker images** are published to `ghcr.io/wsj-br/transrewrt`. Image tags match the Git version (e.g. `v1.0.10` → `ghcr.io/wsj-br/transrewrt:1.0.10`) plus `latest`. Multi-arch: `linux/amd64` and `linux/arm64` (e.g. Raspberry Pi).

<br/><br/>

<a id="contributing"></a>
## Contributing

1. Fork the repository.
2. Create a feature branch: `git checkout -b feature/my-feature`
3. Commit your changes with a clear message.
4. Push and open a Pull Request against `main`.

Please follow the existing code style and test your changes in both Electron and web modes before submitting. See [dev/DEVELOPMENT.md](dev/DEVELOPMENT.md) for build and test instructions.

<br/>

**Reporting issues:** Open an issue on [GitHub](https://github.com/wsj-br/transrewrt/issues). Include your platform (Windows / Linux / Docker) and app version (shown in the About dialog or on the Releases page).

<br/><br/>

<a id="disclaimer"></a>
## Disclaimer

Product names and icons belong to their respective owners and are used for identification purposes only. This software is not affiliated with or endorsed by any of the mentioned brands.

<br/><br/>

<a id="license"></a>
## License

Copyright © 2026 Waldemar Scudeller Jr.

[Apache License 2.0](LICENSE)
