# Transrewrt — Development Guide

Setup, build, test, and deploy instructions for the Transrewrt application (Electron, React, Web, Docker).

## Table of Contents

- [Prerequisites](#prerequisites)
- [Setup](#setup)
- [Development Workflow](#development-workflow)
- [Build](#build)
- [Test](#test)
- [Deploy](#deploy)
- [Commands by Target](#commands-by-target)
- [Useful Commands Summary](#useful-commands-summary)
- [Troubleshooting](#troubleshooting)
- [Key Configuration Files](#key-configuration-files)

---

## Prerequisites

- **Node.js 24** (LTS). The project uses Electron 40, which bundles Node 24. Use [.nvmrc](../.nvmrc) and `engines` in [package.json](../package.json). Run `nvm use` from the project root if using nvm.
- **pnpm** (package manager). Install globally: `npm install -g pnpm`.
- **Git**.
- **Security:** Run `pnpm audit` periodically. The project uses pnpm `overrides` in package.json for patched transitive dependencies; keep them updated.

### Windows 11

1. **Node 24**: Install [nvm-windows](https://github.com/coreybutler/nvm-windows), then `nvm install 24` and `nvm use 24`. Alternatively install Node 24 via [winget](https://winget.run/pkg/OpenJS.NodeJS.LTS).
2. **Build tools for native modules** (`better-sqlite3`, `argon2`): Required for compilation. Use an **elevated** PowerShell:
   - **Option A (winget):**  
     `winget install Python.Python.3.12 --accept-package-agreements --accept-source-agreements`  
     `winget install Microsoft.VisualStudio.2022.BuildTools --accept-package-agreements --accept-source-agreements --override "--wait --quiet --add Microsoft.VisualStudio.Workload.VCTools --includeRecommended"`
   - **Option B (Chocolatey):** `choco install python visualstudio2022-workload-vctools -y`
   - **Option C:** Install [Python 3.12+](https://www.python.org/downloads/) and [Visual Studio Build Tools](https://visualstudio.microsoft.com/downloads/) with the "Desktop development with C++" workload.
   - Restart the terminal after install. See [node-gyp on Windows](https://github.com/nodejs/node-gyp#on-windows).
3. **Developer Mode**: Recommended to avoid symlink errors during `pnpm install` or `pnpm package`. Settings → Privacy & Security → For developers → Developer Mode **On**.
4. **Optional – .env**: Use [scripts/Load-DotEnv.ps1](../scripts/Load-DotEnv.ps1) or [scripts/Register-DotEnvHook.ps1](../scripts/Register-DotEnvHook.ps1) to load `.env` / `.env.local`.
5. **Docker (for Web/Docker):** [Docker Desktop for Windows](https://www.docker.com/products/docker-desktop/) or `winget install Docker.DockerDesktop`.

### Linux (Debian-based: Ubuntu, Debian, Mint)

1. **Node 24**: Install [nvm](https://github.com/nvm-sh/nvm), then `nvm install 24` and `nvm use 24`.
2. **Electron dependencies**:  
   `sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth`
3. **Optional – direnv**: `sudo apt install direnv` and add `eval "$(direnv hook bash)"` (or zsh) to your shell rc; run `direnv allow` in the project root.
4. **Docker**: `sudo apt install docker.io docker-compose` and `sudo usermod -aG docker $USER` (log out and back in).

---

## Setup

```bash
git clone git@github.com:wsj-br/transrewrt.git
cd transrewrt
pnpm install
```

The **postinstall** script runs `electron-rebuild` so native addons match Electron's Node. Use Node 24 in the same environment where you run the server (see [Troubleshooting](#troubleshooting)).

---

## Development Workflow

- **Electron**: `pnpm dev` — Webpack watch runs on port 3030 and Electron launches automatically. Edit React code for hot reload.
- **Web (HMR)**: `pnpm dev:web` — Webpack serves the app on port 5000 and the API server runs on 3030; `/api` is proxied to the server. Open **http://localhost:5000** in a browser.

To run Electron with a production build (no dev server):

```bash
pnpm build-renderer
pnpm start
```

On Linux with X11 (if Wayland causes issues): `pnpm start-x11`.

**Upgrading tools:** From repo root run `.\scripts\upgrade-tools.ps1` (Windows) or `./scripts/upgrade-tools.sh` (Linux/macOS) to upgrade Node (LTS via nvm) and global tools (pnpm, npm-check-updates, doctoc).

---

## Build

| Target | Command | Output |
|--------|---------|--------|
| **Renderer** | `pnpm build-renderer` or `pnpm build` | `dist/` (production assets) |
| **Electron installer** | `pnpm package` | `release/` (e.g. NSIS `.exe` on Windows) |
| **Docker image** | `docker build -t transrewrt-web .` | Multi-stage build (Node 24 Alpine); run with `docker run -p 5000:5000 -v transrewrt-data:/app/data transrewrt-web` |

---

## Test

There is no automated test suite (`pnpm test` is a placeholder). Testing is done by running the app.

### Dev mode (recommended for day-to-day testing)

- **Electron:** Run `pnpm dev`. Webpack watch starts on port 3030 and Electron launches automatically; the app opens in the Electron window. Edit React code and see changes with hot reload.
- **Web:** Run `pnpm dev:web`. Webpack serves the app on port 5000 and the API server runs on 3030 (proxied via `/api`). Open **http://localhost:5000** in a browser to use the app with HMR.

### Production-style (smoke test)

- **Electron:** `pnpm build-renderer && pnpm start`
- **Web:** `pnpm serve` then open http://localhost:5000

Optional: `pnpm generate-test-data` to generate test data for the cost dashboard.

---

## Deploy

### Electron (standalone installers)

- Run `pnpm package` to produce installers in `release/` (e.g. `Transrewrt Setup <version>.exe` on Windows).
- App data: Windows `%APPDATA%\transrewrt\`, Linux `~/.config/transrewrt/` or `~/.local/share/transrewrt/`.
- Distribute the installer; users install and run. Updating is done by installing a new version; user data is preserved.

### Web (Docker)

- **Local:** `docker compose up -d` or `pnpm docker:up`. Uses volume `transrewrt-data` at `/app/data` for config persistence. Open http://localhost:5000.
- **Production:** `pnpm docker:deploy` runs [scripts/docker-deploy.sh](../scripts/docker-deploy.sh) (build, transfer to host, create volume, run container).

### Raspberry Pi (arm64)

For deploying the web app to a Pi (e.g. host `pi-piro`):

1. **QEMU + buildx** (one-time, on build machine):
   ```bash
   docker run --privileged --rm tonistiigi/binfmt --install all
   docker buildx create --name multiarch --driver docker-container --use
   docker buildx inspect --bootstrap
   ```

2. **Automated deploy (recommended):**
   ```bash
   ./scripts/docker-deploy.sh
   ```

3. **Manual:** Build with `pnpm docker:devel` (or `docker buildx build --platform linux/arm64 -t wsj-br/transrewrt:devel --load .`). Then on the Pi: stop existing container, `docker volume create transrewrt-data` if needed, transfer image (`docker save ... | ssh pi-piro "docker load"`), and run:
   ```bash
   docker run -d --rm -p 5000:5000 -v transrewrt-data:/app/data --name transrewrt-web wsj-br/transrewrt:devel
   ```
   Access at http://pi-piro:5000.

See [devel_cross_compile_docker_deploy.md](devel_cross_compile_docker_deploy.md) for full steps.

---

## Commands by Target

### Electron (Desktop)

| Phase | Command | Notes |
|-------|---------|-------|
| **Develop** | `pnpm dev` | Hot reload, Webpack on :3030 |
| **Test** | `pnpm build-renderer` then `pnpm start` | Run built app |
| **Test (Linux)** | `pnpm build-renderer` then `pnpm start-x11` | Use X11 if Wayland fails |
| **Build** | `pnpm package` | Creates installer in `release/` |

### Web (browser, local server)

| Phase | Command | Notes |
|-------|---------|-------|
| **Develop** | `pnpm dev:web` | Webpack on :5000, API on :3030 (proxied via /api) |
| **Build** | `pnpm build` or `pnpm build-renderer` | Output to `dist/` |
| **Test** | `pnpm serve` | Build then serve at http://localhost:5000 |
| **Run** | `pnpm start:server` | Serve only (use when `dist/` already built) |

### Docker (web in container)

| Phase | Command | Notes |
|-------|---------|-------|
| **Build image** | `docker build -t transrewrt-web .` | Multi-stage build |
| **Run** | `docker run -p 5000:5000 -v transrewrt-data:/app/data -e PORT=5000 transrewrt-web` | Config in volume |
| **Run (compose)** | `docker compose up --build -d` or `pnpm docker:up` | Uses docker-compose.yml |
| **Stop (compose)** | `docker compose down` or `pnpm docker:down` | Stop services |
| **Test** | Open http://localhost:5000 | Config at `/api/config` |

---

## Useful Commands Summary

| Command | Purpose |
|---------|---------|
| `pnpm install` | Install dependencies |
| `pnpm dev` | Development with hot reload (Electron) |
| `pnpm dev:web` | Development with hot reload (Web; API proxied to server) |
| `pnpm build` / `pnpm build-renderer` | Production build of React app |
| `pnpm start` | Run Electron (after build) |
| `pnpm start-x11` | Run Electron with X11 (Linux) |
| `pnpm serve` | Build then run web server (port 5000) |
| `pnpm start:server` | Run web server only (e.g. after build or in Docker) |
| `pnpm package` | Build and create Electron installer |
| `docker build -t transrewrt-web .` | Build Docker image |
| `pnpm docker:up` | Build and run web app in Docker (compose) |
| `pnpm docker:down` | Stop Docker compose services |
| `pnpm docker:clean` | Remove Docker image and volumes |
| `pnpm docker:deploy` | Deploy to production (runs deploy script) |
| `.\scripts\upgrade-tools.ps1` (Windows) / `./scripts/upgrade-tools.sh` (Bash) | Upgrade Node (LTS via nvm) and global tools |

---

## Troubleshooting

- **Native module build failed (better-sqlite3 / argon2) on Windows:** Install build tools (Python + Visual Studio C++ workload) as in [Prerequisites](#prerequisites). Restart the terminal and run `pnpm install` again.
- **NODE_MODULE_VERSION mismatch in Electron:** Run `pnpm postinstall` so native addons are rebuilt for Electron's Node. Ensure build tools are installed.
- **NODE_MODULE_VERSION mismatch when running `pnpm dev:web` or `pnpm start:server`:** The server runs with system Node; native addons were built for Electron's Node. Use **Node 24** in the same terminal (e.g. `nvm use 24` then `pnpm dev:web`). See [troubleshooting-node-version.md](troubleshooting-node-version.md).
- **Symlink errors on Windows:** Enable Developer Mode (Settings → For developers) or run the terminal as Administrator.
- **Node not found (nvm):** Restart the IDE/terminal so it picks up nvm's PATH, or add the nvm Node path to your user PATH.

For more detail (including Node version alignment and Windows-specific issues), see [Development.md](Development.md) §6 and [troubleshooting-node-version.md](troubleshooting-node-version.md).

---

## Key Configuration Files

| File | Description |
|------|-------------|
| [package.json](../package.json) | Scripts, dependencies, electron-builder config |
| [webpack.config.js](../webpack.config.js) | React build, output to `dist/` |
| [src/main/main.js](../src/main/main.js) | Electron main process entry |
| [src/main/preload.js](../src/main/preload.js) | Preload script exposing APIs to renderer |
| [server/index.js](../server/index.js) | Express server (web/Docker) |
| [Dockerfile](../Dockerfile) | Multi-stage Docker build |
| [docker-compose.yml](../docker-compose.yml) | Compose for local web run |

For web/Docker architecture and server API reference, see [Web-and-Docker-Deployment.md](Web-and-Docker-Deployment.md).
