<p align="center">
  <img src="images/transrewrt_logo.svg" alt="Transrewrt logo" width="120" />
</p>

<h1 align="center">Transrewrt</h1>

<p align="center">
  Translate text between languages and rewrite text in different styles using AI.<br/>
  Available as a desktop app (Electron) and a self-hosted web app (Docker).
</p>

<p align="center">
  <a href="https://github.com/wsj-br/transrewrt/releases"><img src="https://img.shields.io/badge/version-1.0.1.43-blue" alt="Version"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-Apache%202.0-green" alt="License: Apache 2.0"></a>
  <img src="https://img.shields.io/badge/platform-Windows%20%7C%20Linux%20%7C%20Docker-lightgrey" alt="Platform">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react" alt="React 19">
  <img src="https://img.shields.io/badge/Electron-40-47848F?logo=electron" alt="Electron 40">
</p>

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Running the App](#running-the-app)
  - [Electron (Desktop)](#electron-desktop)
  - [Web Server (Local)](#web-server-local)
  - [Docker](#docker)
- [Configuration](#configuration)
  - [Environment Variables](#environment-variables)
  - [Web Authentication](#web-authentication)
- [Building and Packaging](#building-and-packaging)
- [Architecture](#architecture)
- [Development](#development)
- [Contributing](#contributing)
- [License](#license)

---

## Overview

**Transrewrt** is an AI-powered text tool that operates in two modes:

- **Translate** — translate text from one language to another, with automatic source language detection.
- **Rewrite** — transform the style of any text (fix grammar, improve clarity, make it formal/informal, shorten, expand, or make it more technical).

It connects to [OpenRouter](https://openrouter.ai) to access a wide range of AI models (including free-tier models). The same React codebase runs both as a native Electron desktop application and as a self-hosted web app inside a Docker container.

---

## Features

### Core

| Feature | Description |
|---------|-------------|
| **Translation** | Translate between dozens of languages; auto-detect source language |
| **Rewrite styles** | Spelling & grammar, clarity, formal, informal, shorten, expand, technical |
| **Model selection** | Choose from any OpenRouter model; manage your model list in settings |
| **Language management** | Add or remove languages from the selection list |
| **Real-time translation** | Optional live translation as you type (debounced) |
| **Auto-translate on paste** | Automatically translates text when pasted into the input panel |
| **Auto-copy** | Optionally copy the output to clipboard after each translation |

### Application

| Feature | Description |
|---------|-------------|
| **Dual deployment** | Same codebase runs as Electron desktop app or web app |
| **Cost tracking** | SQLite log of every API call with cost summaries by model, function, or day |
| **Customisation** | Font family, font size, text colours, light/dark/system theme |
| **Keyboard shortcuts** | Configurable shortcuts for translate, rewrite, copy, clear, etc. |
| **Secure web mode** | API key stored only on the server — never sent to the browser |
| **ARM64 support** | Docker image builds for Raspberry Pi and other ARM64 targets |

---

## Getting Started

### Prerequisites

| Tool | Notes |
|------|-------|
| **Node.js LTS** | Install via [nvm](https://github.com/nvm-sh/nvm) (Linux/macOS) or [nvm-windows](https://github.com/coreybutler/nvm-windows) |
| **pnpm** | `npm install -g pnpm` |
| **Git** | Any recent version |
| **Docker** *(optional)* | Required only for the web/container deployment target |

On Debian/Ubuntu, Electron also needs a few system libraries:

```bash
sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth
```

### Installation

```bash
git clone https://github.com/wsj-br/transrewrt.git
cd transrewrt
pnpm install
```

---

## Running the App

### Electron (Desktop)

**Development** (hot reload):

```bash
pnpm run dev
```

**Production build then run:**

```bash
pnpm run build-renderer
pnpm start
# Linux with X11 (if Wayland causes issues):
pnpm run start-x11
```

### Web Server (Local)

Build and serve in one command:

```bash
pnpm run serve
```

Then open <http://localhost:5000> in your browser.

For development with hot-module replacement:

```bash
pnpm run dev:web
# Webpack dev server: http://localhost:5000 · API backend: http://localhost:3030
```

### Docker

**Quick start with Docker Compose:**

```bash
docker compose up --build -d
# or:
pnpm run docker:up
```

**Manual docker run:**

```bash
docker build -t transrewrt-web .
docker volume create transrewrt-data
docker run -d -p 5000:5000 \
  -v transrewrt-data:/app/data \
  --name transrewrt-web \
  transrewrt-web
```

Then open <http://localhost:5000>.

> **Data persistence:** mount a volume at `/app/data` so `config.json` and `state.json` survive container restarts.

---

## Configuration

On first run the application copies the default config from `config/config_default.json` to a writable location and then reads/writes settings there:

| Deployment | Config location |
|------------|----------------|
| Electron | `%APPDATA%\transrewrt\` (Windows) · `~/.config/transrewrt/` (Linux) |
| Web / Docker | `/app/data/config.json` (inside container, persist with a volume) |

Key settings (editable via the **Settings** dialog or directly in the JSON):

| Setting | Default | Description |
|---------|---------|-------------|
| `api_key` | *(empty)* | Your OpenRouter API key |
| `api_url` | `https://openrouter.ai/api/v1` | Upstream AI API base URL |
| `available_models` | 3 default models | List of models shown in the selector |
| `available_languages` | 3 default languages | List of languages shown in the selector |
| `real_time_translation` | `false` | Translate as you type |
| `real_time_delay` | `1000` | Debounce delay in ms for real-time mode |
| `auto_copy` | `false` | Copy output to clipboard automatically |
| `auto_translate_on_paste` | `true` | Translate when text is pasted |
| `theme` | `System` | `Light`, `Dark`, or `System` |
| `font_family` | `Verdana` | Text panel font |
| `font_size` | `15` | Text panel font size (px) |
| `web_session_timeout` | `604800` | Session duration in seconds (default: 7 days) |

### Environment Variables

These apply only to the web/Docker deployment:

| Variable | Default | Description |
|----------|---------|-------------|
| `PORT` | `5000` | Server listening port |
| `CONFIG_PATH` | `/app/data/config.json` | Path to the config file |
| `API_KEY` | *(empty)* | Override: set the OpenRouter API key from the host instead of storing it in `config.json` |
| `API_URL` | `https://openrouter.ai/api/v1` | Override: upstream AI API base URL |

### Web Authentication

The web app protects all endpoints with session-based authentication.

- **Default password:** `transrewrt26`
- Passwords are hashed with **Argon2id** and stored in `config.json`.
- Sessions use a **sliding window** — every successful API call extends the expiry.
- Change the password via **Settings → Auth** in the web UI.

> **Change the default password immediately** when deploying to a network-accessible host.

---

## Building and Packaging

### Electron Installer

```bash
pnpm run package
```

Produces a native installer in `release/`:

| Platform | Output |
|----------|--------|
| Windows | `Transrewrt Setup <version>.exe` (NSIS installer) |
| Linux | Configure targets in `package.json` (AppImage, deb, rpm) |

### Docker Multi-Architecture (e.g. Raspberry Pi)

```bash
# Install QEMU binfmt support
docker run --privileged --rm tonistiigi/binfmt --install all

# Create a multi-arch builder
docker buildx create --name multiarch --driver docker-container --use
docker buildx inspect --bootstrap

# Automated deploy script
./scripts/docker-deploy.sh
```

---

## Architecture

```
┌──────────────────────────────────────────────────────┐
│                   src/renderer/                      │
│              (shared React application)              │
│  ┌─────────────┐  ┌──────────┐  ┌────────────────┐   │
│  │  Translate  │  │ Rewrite  │  │    Settings    │   │
│  └─────────────┘  └──────────┘  └────────────────┘   │
│        │                │               │            │
│        └────────────────┴───────────────┘            │
│                         │                            │
│              configManager / apiService              │
│           (detects Electron vs Web at runtime)       │
└──────────┬──────────────────────────────┬────────────┘
           │ Electron                     │ Web / Docker
           ▼                             ▼
   src/main/main.js              server/index.js
   (IPC · fs · preload)          (Express · proxy ·
                                  auth · SQLite)
```

| Concern | Electron | Web / Docker |
|---------|----------|--------------|
| Config storage | Local `config.json` via IPC | REST API → server file |
| API calls | Direct to OpenRouter (API key in config) | Proxied through server (API key never reaches browser) |
| Authentication | None (local app) | Session cookie (Argon2id password) |
| Cost logging | Local SQLite DB | Server SQLite DB at `/app/data/transrewrt.db` |

---

## Development

See [dev/Development.md](dev/Development.md) for a full development guide including:

- Platform-specific prerequisites (Windows 11, Linux)
- Hot-reload workflows for Electron and Web targets
- Build and packaging instructions
- Common Windows issues (symlink permissions)

See [dev/Web-and-Docker-Deployment.md](dev/Web-and-Docker-Deployment.md) for:

- Detailed web/Docker architecture
- Server API reference (config, auth, proxy, cost-tracking endpoints)
- Docker build internals (multi-stage build)

### Quick command reference

| Command | Purpose |
|---------|---------|
| `pnpm run dev` | Electron dev with hot reload |
| `pnpm run dev:web` | Web dev with hot reload |
| `pnpm run build-renderer` | Production build of React app → `dist/` |
| `pnpm start` | Run Electron (after build) |
| `pnpm run serve` | Build then serve web app at :5000 |
| `pnpm run package` | Build Electron installer → `release/` |
| `pnpm run docker:up` | Build and run Docker Compose |
| `pnpm run docker:down` | Stop Docker Compose |
| `pnpm run docker:clean` | Remove Docker image and volumes |
| `pnpm run docker:deploy` | Deploy to production host |

---

## Contributing

1. Fork the repository.
2. Create a feature branch: `git checkout -b feature/my-feature`
3. Commit your changes with a clear message.
4. Push and open a Pull Request against `main`.

Please follow the existing code style and test your changes in both Electron and web modes before submitting.

---

## License

[Apache License 2.0](LICENSE) © 2026 Waldemar Scudeller Jr.


