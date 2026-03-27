# Transrewrt — Development Guide

Setup, build, test, and deploy instructions for the Transrewrt application (Electron, React, Web, Docker). For **architecture** (Electron vs web, **multi-llm-ts** / **`/api/llm/*`**, config and SQLite **`user_preferences`**, security and encryption), see **[SYSTEM-OVERVIEW.md](SYSTEM-OVERVIEW.md)**.

---

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents** 

- [Prerequisites](#prerequisites)
  - [Windows 11](#windows-11)
  - [Linux (Debian-based: Ubuntu, Debian, Mint)](#linux-debian-based-ubuntu-debian-mint)
- [Setup](#setup)
- [Development Workflow](#development-workflow)
  - [Upgrading Node and dependencies (nvm)](#upgrading-node-and-dependencies-nvm)
- [Build](#build)
  - [UI translations (i18n)](#ui-translations-i18n)
- [Test](#test)
  - [Dev mode (recommended for day-to-day testing)](#dev-mode-recommended-for-day-to-day-testing)
  - [Production-style (smoke test)](#production-style-smoke-test)
- [Deploy](#deploy)
  - [Electron (standalone installers)](#electron-standalone-installers)
  - [Web (Docker)](#web-docker)
  - [Raspberry Pi (arm64)](#raspberry-pi-arm64)
- [Commands by Target](#commands-by-target)
  - [Electron (Desktop)](#electron-desktop)
  - [Web (browser, local server)](#web-browser-local-server)
  - [Docker (web in container)](#docker-web-in-container)
- [Useful Commands Summary](#useful-commands-summary)
  - [Develop, build, and run](#develop-build-and-run)
  - [Code quality](#code-quality)
  - [UI translations (i18n)](#ui-translations-i18n-1)
  - [Data, assets, and docs scripts](#data-assets-and-docs-scripts)
  - [Docker and deploy](#docker-and-deploy)
  - [Toolchain](#toolchain)
- [Troubleshooting](#troubleshooting)
- [Related documentation](#related-documentation)
- [Key Configuration Files](#key-configuration-files)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

---

## Prerequisites

- **Node.js 24** (LTS). The project uses Electron 41, which bundles Node 24. Use [.nvmrc](../.nvmrc) and `engines` in [package.json](../package.json). Run `nvm use` from the project root if using nvm.
- **pnpm** (package manager). Install globally: `npm install -g pnpm`.
- **Git**.
- **direnv** (recommended): Loads environment variables when you enter the project directory. The repo’s [.envrc](../.envrc) sources `.env` and `.env.local` if present (copy [.env.example](../.env.example) to `.env` and adjust). **Install:** macOS `brew install direnv`; Debian/Ubuntu `sudo apt install direnv`; other systems see [direnv installation](https://direnv.net/docs/installation.html). **Use:** Add a shell hook — Bash: `eval "$(direnv hook bash)"` in `~/.bashrc`; Zsh: `eval "$(direnv hook zsh)"` in `~/.zshrc`; Fish: `direnv hook fish | source` in `~/.config/fish/config.fish`. Open a new shell (or `source` the file), `cd` into the repo, then run **`direnv allow`** once to approve `.envrc`. On Windows, use WSL or Git Bash with the same hook pattern, or use the PowerShell helpers in [scripts/Load-DotEnv.ps1](../scripts/Load-DotEnv.ps1) instead.
- **Chromium** (for `pnpm take-screenshots`). The screenshot script uses Puppeteer; on Linux (e.g. Raspberry Pi) the bundled Puppeteer binary may be x64, so install Chromium and set `PUPPETEER_EXECUTABLE_PATH` if needed. On Debian-based systems, install **Noto fonts** so the language-selector screenshot renders Korean/Telugu/Thai correctly: `fonts-noto-cjk`, `fonts-noto-core` (see [Linux](#linux-debian-based-ubuntu-debian-mint) below).
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

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.4/install.sh | bash
nvm install 24
nvm use 24
```

1. **Electron dependencies**:
  `sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth`
2. **Chromium** (for `pnpm take-screenshots`):
  `sudo apt install chromium`  
   On ARM (e.g. Raspberry Pi) Puppeteer’s bundled Chrome is x64; use system Chromium and set `export PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium` (or `/usr/bin/chromium-browser`) when running `pnpm take-screenshots`.
3. **Noto fonts** (optional, for language-selector screenshot):
  `sudo apt install fonts-noto-cjk fonts-noto-core`  
   Ensures Korean, Telugu, Thai and other scripts render correctly in the screenshot when Google Fonts are unavailable.
4. **direnv**: `sudo apt install direnv` — shell hook and `direnv allow` are described under [Prerequisites](#prerequisites).
5. **Docker**: `sudo apt install docker.io docker-compose` and `sudo usermod -aG docker $USER` (log out and back in).

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
- **Web (HMR)**: `pnpm dev:web` — Webpack serves the app on port 5000 and the API server runs on 3030; `/api` is proxied to the server. Open **[http://localhost:5000](http://localhost:5000)** in a browser.

To run Electron with a production build (no dev server):

```bash
pnpm build-renderer
pnpm start
```

On Linux with X11 (if Wayland causes issues): `pnpm start-x11`.

### Upgrading Node and dependencies (nvm)

These scripts install or switch to the **latest Node LTS** via nvm, then install/update global CLI tools (`pnpm`, `npm-check-updates`, `doctoc`). [upgrade-dependencies.sh](../scripts/upgrade-dependencies.sh) also runs `ncu`, `pnpm install`, and `pnpm audit` / `pnpm audit fix`.

| Environment | Command |
|-------------|---------|
| **Windows** | From repo root: `.\scripts\upgrade-tools.ps1` (tools only) — use your usual workflow to stay on Node 24 / LTS as needed. |
| **Linux / macOS (bash)** | **Use `source`** so `nvm use` runs in your **current** shell. Otherwise the script runs in a subprocess and your terminal keeps the old Node after the script exits. |

**Unix/bash (recommended):**

```bash
# Tools only: refresh nvm (if ~/.nvm is a git clone), install LTS Node, upgrade pnpm / ncu / doctoc
source ./scripts/upgrade-tools.sh

# Full dependency upgrade: same as above, then ncu on package.json, pnpm install, audits
source ./scripts/upgrade-dependencies.sh
```

Before `ncu`, that script runs [scripts/eslint-react-peers-allow-eslint10.js](../scripts/eslint-react-peers-allow-eslint10.js): it reads the **latest** `peerDependencies.eslint` from the registry for `eslint-plugin-react` and `eslint-plugin-react-hooks` and only skips pinning `eslint` / `@eslint/js` / those plugins when both ranges allow ESLint 10. You can run the same check alone: `node scripts/eslint-react-peers-allow-eslint10.js` (exit 0 = allow ESLint 10 upgrade, 1 = still pinned, 2 = error).

**Why `source`:** A normal `./script.sh` starts a **child process**. Environment changes (including nvm’s `PATH`) cannot propagate back to the parent shell ([nvm-sh#2124](https://github.com/nvm-sh/nvm/issues/2124)). Sourcing runs the script in your interactive shell, so the LTS Node you selected stays active when the script finishes.

**Executing with `./`:** The scripts **exit with an error** if you run `./scripts/upgrade-tools.sh` or `./scripts/upgrade-dependencies.sh` directly, and print a reminder to use `source`. For **CI** or other automation, set **`CI=1`** (common on GitHub Actions and similar) or **`TRANSREWRT_UPGRADE_ALLOW_EXEC=1`** to allow execution without `source`.

**Shell note:** The `.sh` scripts target **bash**. On zsh/fish, run them under bash, e.g. `bash -c 'source ./scripts/upgrade-dependencies.sh'`, or open a bash session for the upgrade.

---

## Build


| Target                 | Command                               | Output                                                                                                             |
|------------------------|---------------------------------------|--------------------------------------------------------------------------------------------------------------------|
| **Renderer**           | `pnpm build-renderer` or `pnpm build` | `dist/` (production assets)                                                                                        |
| **Electron installer** | `pnpm package`                        | `release/` (e.g. NSIS `.exe` on Windows)                                                                           |
| **Docker image**       | `docker build -t transrewrt-web .`    | Multi-stage build (Node 24 Alpine); run with `docker run -p 5000:5000 -v transrewrt-data:/app/data transrewrt-web` |


### UI translations (i18n)

The UI uses **react-i18next** with a key-as-default pattern (English in source is the key; no `en.json`). Locale files (pt-BR, de, fr, es) live in `src/renderer/locales/`. To update or add UI strings:


| Command                   | Purpose                                                                                                                                                    |
|---------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `pnpm run i18n:extract`   | Scan source for `t("...")` and `package.json` description → `locales/strings.json` (preserves existing translations)                                       |
| `pnpm run i18n:translate` | Translate missing entries via OpenRouter; set `OPENROUTER_API_KEY`. Writes flat `{lang}.json` files. Use `--help` for options (`--retranslate`, `--model`) |
| `pnpm run i18n:sync`      | Run extract then translate                                                                                                                                 |

The **OpenRouter model ids** used by the UI translation pipeline and related CLI scripts (default model and fallback order) are defined in [`scripts/openrouter-script-models.js`](../scripts/openrouter-script-models.js) (`TRANSLATION_MODELS`). That list is **not** read from app `config.json`. It is consumed by `scripts/generate-translations.js` (`pnpm run i18n:translate`), `scripts/translate-docs.js` (`pnpm translate-docs`), and `scripts/generate-test-data.js`. Override the model for a single run where supported (e.g. `pnpm run i18n:translate -- --model <id>`).

To **add a new UI language** (e.g. zh-CN or ar): (1) add an entry to `src/renderer/locales/ui-languages.json` (dynamic locale loaders in `src/renderer/i18n.js` are built from this list), (2) run `pnpm run i18n:extract` then `pnpm run i18n:translate` (or `i18n:sync`) so `strings.json` and `locales/<code>.json` are created/updated. RTL script languages listed in `RTL_LANGS` in `i18n.js` get `dir="rtl"` on the document and on Fluent’s root provider (see [i18n.md](i18n.md)). Full detail: [.cursor/plans/multi-language_i18n_implementation_2dc8b07f.plan.md](../.cursor/plans/multi-language_i18n_implementation_2dc8b07f.plan.md).

---

## Test

There is no automated test suite (`pnpm test` is a placeholder). Testing is done by running the app.

### Dev mode (recommended for day-to-day testing)

- **Electron:** Run `pnpm dev`. Webpack watch starts on port 3030 and Electron launches automatically; the app opens in the Electron window. Edit React code and see changes with hot reload.
- **Web:** Run `pnpm dev:web`. Webpack serves the app on port 5000 and the API server runs on 3030 (proxied via `/api`). Open **[http://localhost:5000](http://localhost:5000)** in a browser to use the app with HMR.

### Production-style (smoke test)

- **Electron:** `pnpm build-renderer && pnpm start`
- **Web:** `pnpm serve` then open [http://localhost:5000](http://localhost:5000)

Optional: `pnpm generate-test-data` to generate test data for the cost dashboard. For **Transform** mode, use “Load sample prompts” in the UI to import prompts from `src/config-defaults/transform-prompts.json`, or manage prompts in **Settings → Transform prompts**. The **History** sidebar view lists execution history when **Keep execution history** is enabled (**Settings → General**); web mode loads rows via `/api/calls/history` ([src/server/routes/calls.js](../src/server/routes/calls.js)).

---

## Deploy

### Electron (standalone installers)

- Run `pnpm package` to produce installers in `release/` (e.g. `Transrewrt Setup <version>.exe` on Windows).
- App data: Windows `%APPDATA%\transrewrt\`, Linux `~/.config/transrewrt/` or `~/.local/share/transrewrt/`.
- Distribute the installer; users install and run. Updating is done by installing a new version; user data is preserved.

### Web (Docker)

- **Local:** `docker compose up -d` or `pnpm docker:up`. Volume `transrewrt-data` is mounted at **`/app/data`**: server **`config.json`**, SQLite **`transrewrt.db`** (users, sessions, **`user_preferences`**, calls, history text, custom prompts), and related files — see [SYSTEM-OVERVIEW.md § Config and State](SYSTEM-OVERVIEW.md#config-and-state). Open [http://localhost:5000](http://localhost:5000).
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
   Access at [http://pi-piro:5000](http://pi-piro:5000).

See [devel_cross_compile_docker_deploy.md](devel_cross_compile_docker_deploy.md) for full steps.

---

## Commands by Target

### Electron (Desktop)


| Phase            | Command                                     | Notes                           |
|------------------|---------------------------------------------|---------------------------------|
| **Develop**      | `pnpm dev`                                  | Hot reload, Webpack on :3030    |
| **Test**         | `pnpm build-renderer` then `pnpm start`     | Run built app                   |
| **Test (Linux)** | `pnpm build-renderer` then `pnpm start-x11` | Use X11 if Wayland fails        |
| **Build**        | `pnpm package`                              | Creates installer in `release/` |


### Web (browser, local server)


| Phase       | Command                               | Notes                                                              |
|-------------|---------------------------------------|--------------------------------------------------------------------|
| **Develop** | `pnpm dev:web`                        | Webpack on :5000, API on :3030 (proxied via /api)                  |
| **Build**   | `pnpm build` or `pnpm build-renderer` | Output to `dist/`                                                  |
| **Test**    | `pnpm serve`                          | Build then serve at [http://localhost:5000](http://localhost:5000) |
| **Run**     | `pnpm start:server`                   | Serve only (use when `dist/` already built)                        |


### Docker (web in container)


| Phase              | Command                                                                            | Notes                   |
| ------------------ | ---------------------------------------------------------------------------------- | ----------------------- |
| **Build image**    | `docker build -t transrewrt-web .`                                                 | Multi-stage build       |
| **Run**            | `docker run -p 5000:5000 -v transrewrt-data:/app/data -e PORT=5000 transrewrt-web` | Data dir: `config.json` + `transrewrt.db` (see SYSTEM-OVERVIEW) |
| **Run (compose)**  | `docker compose up --build -d` or `pnpm docker:up`                                 | Uses docker-compose.yml |
| **Stop (compose)** | `docker compose down` or `pnpm docker:down`                                        | Stop services           |
| **Test**           | Open [http://localhost:5000](http://localhost:5000)                                | Config at `/api/config` |


---

## Useful Commands Summary

### Develop, build, and run

| Command                              | Purpose                                                                                                                                         |
|--------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------|
| `pnpm install`                       | Install dependencies (runs `postinstall` / Electron native rebuild)                                                                             |
| `pnpm dev`                           | Electron dev: webpack on **:3030**, hot reload, native rebuild for Electron                                                                     |
| `pnpm dev:web`                       | Web dev: webpack on **:5000**, API server on **:3030** (proxied as `/api`)                                                                      |
| `pnpm build` / `pnpm build-renderer` | Production webpack build → `dist/`                                                                                                              |
| `pnpm start`                         | Run Electron against current `dist/` (run `build-renderer` first if needed)                                                                     |
| `pnpm start-x11`                     | Electron on Linux with X11 flags (if Wayland causes issues)                                                                                     |
| `pnpm serve`                         | `build-renderer` then `start:server` (web smoke test, **:5000**)                                                                                |
| `pnpm start:server`                  | Web server only (serves `dist/`; use when build already exists)                                                                                 |
| `pnpm start:server:rebuild`          | `postinstall` (Electron rebuild) then `start:server` — use if native addons were last built for Electron but you need the server on system Node |
| `pnpm package`                       | Production build + `electron-builder` → installer in `release/`                                                                                 |

### Code quality

| Command         | Purpose                |
|-----------------|------------------------|
| `pnpm lint`     | Run ESLint on the repo |
| `pnpm lint:fix` | ESLint with `--fix`    |

### UI translations (i18n)

| Command                   | Purpose                                                              |
|---------------------------|----------------------------------------------------------------------|
| `pnpm run i18n:extract`   | Scan renderer → `src/renderer/locales/strings.json`                  |
| `pnpm run i18n:translate` | Fill missing locales via OpenRouter (`OPENROUTER_API_KEY`); see `--help` |
| `pnpm run i18n:sync`      | `i18n:extract` then `i18n:translate`                                 |

Shared **translation script** model list (defaults + fallbacks): [`scripts/openrouter-script-models.js`](../scripts/openrouter-script-models.js) — not app config; per-run override via `--model` where the script supports it.

### Data, assets, and docs scripts

| Command                   | Purpose                                                                              |
|---------------------------|--------------------------------------------------------------------------------------|
| `pnpm generate-test-data` | Seed SQLite with sample API/history rows (cost dashboard / dev)                      |
| `pnpm take-screenshots`   | Puppeteer capture of UI shots (needs app reachable; see script/env vars)             |
| `pnpm generate-banner`    | Writes `images/transrewrt_banner.svg` and `.png`                                     |
| `pnpm translate-docs`     | Translate README / USER-GUIDE via OpenRouter → `translated-docs/` (`OPENROUTER_API_KEY`) |
| `pnpm reset-web-password` | Web multi-user: set password in SQLite (`[username] <password>`; default `admin`; `CONFIG_PATH` or `data/config.json`) |
| `pnpm check-api-key`      | Masked OpenRouter key + limit info (`OPENROUTER_API_KEY` or `node scripts/check-api-key.js --key …`)                      |
| `pnpm update-version`     | Propagate `package.json` `version` into README badge and other references (run after you bump the version manually)   |

### Docker and deploy

| Command                            | Purpose                                                                     |
|------------------------------------|-----------------------------------------------------------------------------|
| `docker build -t transrewrt-web .` | Build production web image                                                  |
| `pnpm docker:up`                   | `docker compose up --build -d`                                              |
| `pnpm docker:down`                 | Stop compose stack                                                          |
| `pnpm docker:clean`                | Remove image/volumes (runs `scripts/clean-docker.sh`; Bash)                 |
| `pnpm docker:devel`                | Build image tagged `wsj-br/transrewrt:devel`                                |
| `pnpm docker:logs`                 | Tail logs from container `transrewt`                                         |
| `pnpm docker:shell`                | Shell into `transrewt`                                                       |
| `pnpm docker:deploy`               | Production deploy ([scripts/docker-deploy.sh](../scripts/docker-deploy.sh)) |

### Toolchain

See [Upgrading Node and dependencies (nvm)](#upgrading-node-and-dependencies-nvm) for **why `source`**, `./` vs CI, and shell notes.

| Command                                                                       | Purpose                                                   |
|-------------------------------------------------------------------------------|-----------------------------------------------------------|
| `.\scripts\upgrade-tools.ps1` (Windows) / `source ./scripts/upgrade-tools.sh` (Unix bash) | Upgrade Node (nvm LTS) and global tools (pnpm, ncu, etc.) |
| `source ./scripts/upgrade-dependencies.sh` (Unix bash)                         | Same nvm behaviour as above, then `ncu`, `pnpm install`, audits |


---

## Troubleshooting

- **Native module build failed (better-sqlite3 / argon2) on Windows:** Install build tools (Python + Visual Studio C++ workload) as in [Prerequisites](#prerequisites). Restart the terminal and run `pnpm install` again.
- **NODE_MODULE_VERSION mismatch in Electron:** Run `pnpm postinstall` so native addons are rebuilt for Electron's Node. Ensure build tools are installed.
- **NODE_MODULE_VERSION mismatch when running `pnpm dev:web` or `pnpm start:server`:** The server runs with system Node; native addons were built for Electron's Node. Use **Node 24** in the same terminal (e.g. `nvm use 24` then `pnpm dev:web`). See [troubleshooting-node-version.md](troubleshooting-node-version.md).
- **Symlink errors on Windows:** Enable Developer Mode (Settings → For developers) or run the terminal as Administrator.
- **Node not found (nvm):** Restart the IDE/terminal so it picks up nvm's PATH, or add the nvm Node path to your user PATH.

For more detail (including Node version alignment and Windows-specific issues), see [troubleshooting-node-version.md](troubleshooting-node-version.md).

---

## Related documentation

| Document                                                                                                                                  | Contents                                                                                                                                                                                                                                                                                                                                                  |
|-------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **[SYSTEM-OVERVIEW.md](SYSTEM-OVERVIEW.md)**                                                                                              | Product and **runtime architecture** (Electron IPC **`llm:*`** vs web **`/api/llm/stream`** SSE), **multi-llm-ts** and supported providers, **config/state** (desktop `config.json` + encryption; web global config vs **`user_preferences`** / **`transrewrt.db`**), **security** (sanitized IPC, Argon2, cookies), settings UI summary, native modules. |
| **[i18n.md](i18n.md)**                                                                                                                    | UI strings: extract/translate workflow, key-as-default, RTL, `interpolateTemplate`.                                                                                                                                                                                                                                                                       |

---

## Key Configuration Files


| File                                                                                        | Description                                                                                                           |
|---------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------|
| [package.json](../package.json)                                                             | Scripts, dependencies, electron-builder config                                                                        |
| [webpack.config.js](../webpack.config.js)                                                   | React build, output to `dist/`                                                                                        |
| [src/main/main.js](../src/main/main.js)                                                     | Electron main process entry                                                                                           |
| [src/main/preload.js](../src/main/preload.js)                                               | Preload script exposing APIs to renderer                                                                              |
| [src/main/appDb.js](../src/main/appDb.js)                                                   | Electron app DB (api_calls, action_content, custom_prompts); IPC                                                      |
| [src/server/index.js](../src/server/index.js)                                               | Express server (web/Docker): static app, auth, **`/api/config`**, **`/api/llm/*`**, calls, users, prompts             |
| [src/shared/llm/index.js](../src/shared/llm/index.js)                                       | **multi-llm-ts** bridge, provider key map, streaming; used by **main** and **server**                                 |
| [src/main/ipc/llmIpc.js](../src/main/ipc/llmIpc.js)                                         | Electron **`llm:stream`** / **`llm:abort`** / **`llm:models`** IPC                                                    |
| [src/server/routes/apiLlm.js](../src/server/routes/apiLlm.js)                               | Web **`POST /api/llm/stream`** (SSE) and related LLM routes                                                           |
| [src/server/db/appDb.js](../src/server/db/appDb.js)                                         | Web SQLite init, **`user_preferences`**, migrations, session cleanup                                                  |
| [src/server/routes/config.js](../src/server/routes/config.js)                               | **`GET/POST /api/config`**: merge **`user_preferences`** + server-global keys (admin rules)                           |
| [src/server/utils/webConfigKeys.js](../src/server/utils/webConfigKeys.js)                   | Which keys stay in global **`config.json`** vs per-user prefs                                                         |
| [src/main/encryption.js](../src/main/encryption.js)                                         | Electron: **AES-256-CBC** for provider secrets at rest; **`transrewrt.key`** beside `config.json`                     |
| [src/shared/db/appSchema.js](../src/shared/db/appSchema.js)                                 | Shared DB schema and SQL (used by main + server)                                                                      |
| [src/server/routes/calls.js](../src/server/routes/calls.js)                                 | Web: API call logging, execution history, dashboard aggregates                                                        |
| [src/renderer/components/HistoryPage.js](../src/renderer/components/HistoryPage.js)         | Execution history browser (Electron IPC / web REST)                                                                   |
| [src/renderer/components/SettingsPanel.js](../src/renderer/components/SettingsPanel.js)     | Settings tabs (General, Models, Languages, Cost, Transform, Users, API, About)                                        |
| [Dockerfile](../Dockerfile)                                                                 | Multi-stage Docker build                                                                                              |
| [docker-compose.yml](../docker-compose.yml)                                                 | Compose for local web run                                                                                             |
| [src/config-defaults/transform-prompts.json](../src/config-defaults/transform-prompts.json) | Sample transform prompts (used by "Load sample prompts")                                                              |
| [src/renderer/i18n.js](../src/renderer/i18n.js)                                             | i18n init, RTL handling, dynamic locale loaders                                                                       |
| [src/renderer/locales/strings.json](../src/renderer/locales/strings.json)                   | Extracted UI strings and translation state (from i18n:extract)                                                        |
| [scripts/openrouter-script-models.js](../scripts/openrouter-script-models.js)               | `TRANSLATION_MODELS`: OpenRouter ids for `i18n:translate`, `translate-docs`, `generate-test-data` (not `config.json`) |
| [scripts/generate-translations.js](../scripts/generate-translations.js)                     | OpenRouter translation script (i18n:translate; needs `OPENROUTER_API_KEY`)                                            |


Deploy and command tables above are **operational**; **system design** (LLM stack, security, data model) is in **[SYSTEM-OVERVIEW.md](SYSTEM-OVERVIEW.md)** and [Related documentation](#related-documentation).