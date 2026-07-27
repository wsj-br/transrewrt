# Transrewrt - Development Guide

Setup, build, test, and deploy instructions for the Transrewrt application (Electron, React, Web, Docker). For architecture (Electron vs web, Vercel AI SDK / `/api/llm/*`, Easy mode / presets catalog, config and SQLite `user_preferences`, security and encryption), see **[SYSTEM-OVERVIEW.md](SYSTEM-OVERVIEW.md)**.

---

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**

- [Prerequisites](#prerequisites)
  - [Windows 11](#windows-11)
  - [Linux (Debian-based: Ubuntu, Debian, Zorin, Mint)](#linux-debian-based-ubuntu-debian-zorin-mint)
  - [Git symlinks (required on Windows)](#git-symlinks-required-on-windows)
- [Setup](#setup)
- [Development Workflow](#development-workflow)
  - [Presets catalog editor (development)](#presets-catalog-editor-development)
  - [Skill-check cron (development)](#skill-check-cron-development)
  - [Cleaning the workspace](#cleaning-the-workspace)
  - [Upgrading Node and dependencies (nvm)](#upgrading-node-and-dependencies-nvm)
- [Build](#build)
  - [UI translations and documentation (ai-i18n-tools)](#ui-translations-and-documentation-ai-i18n-tools)
  - [Third-party notices (`3p-notices`)](#third-party-notices-3p-notices)
  - [Provider icons (`trim-ico-sizes`)](#provider-icons-trim-ico-sizes)
- [Test](#test)
  - [Dev mode (recommended for day-to-day testing)](#dev-mode-recommended-for-day-to-day-testing)
  - [Production-style (smoke test)](#production-style-smoke-test)
- [Releasing (CI builds and GitHub Release)](#releasing-ci-builds-and-github-release)
  - [Pre-release checks](#pre-release-checks)
  - [Prepare commits on the version branch](#prepare-commits-on-the-version-branch)
  - [Merge into `main` (GitHub)](#merge-into-main-github)
  - [Publish the GitHub Release (`release:github`)](#publish-the-github-release-releasegithub)
  - [Release artifacts and manual workflow run](#release-artifacts-and-manual-workflow-run)
- [Commands by Target](#commands-by-target)
  - [Electron (Desktop)](#electron-desktop)
  - [Web (browser, local server)](#web-browser-local-server)
  - [Docker (web in container)](#docker-web-in-container)
- [Useful Commands Summary](#useful-commands-summary)
  - [Develop, build, and run](#develop-build-and-run)
  - [Code quality](#code-quality)
  - [UI translations and docs (ai-i18n-tools)](#ui-translations-and-docs-ai-i18n-tools)
  - [Data, assets, and docs scripts](#data-assets-and-docs-scripts)
  - [Docker and deploy](#docker-and-deploy)
  - [Release](#release)
  - [Toolchain](#toolchain)
- [Troubleshooting](#troubleshooting)
- [Related documentation](#related-documentation)
- [Key Configuration Files](#key-configuration-files)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

---

## Prerequisites

- **Node.js 24** (LTS). The project uses Electron 43, which bundles Node 24. Use [.nvmrc](../.nvmrc) and `engines` in [package.json](../package.json). Run `nvm use` from the project root if using nvm.
- **pnpm** (package manager). Install globally: `npm install -g pnpm`.
- **Git**.
- **direnv** (recommended): Loads environment variables when you enter the project directory. The repo’s [.envrc](../.envrc) sources `.env` and `.env.local` if present (copy [.env.example](../.env.example) to `.env` and adjust). **Install:** macOS `brew install direnv`; Debian/Ubuntu `sudo apt install direnv`; other systems see [direnv installation](https://direnv.net/docs/installation.html). **Use:** Add a shell hook - Bash: `eval "$(direnv hook bash)"` in `~/.bashrc`; Zsh: `eval "$(direnv hook zsh)"` in `~/.zshrc`; Fish: `direnv hook fish | source` in `~/.config/fish/config.fish`. Open a new shell (or `source` the file), `cd` into the repo, then run `direnv allow` once to approve `.envrc`. On Windows, use WSL or Git Bash with the same hook pattern, or use the PowerShell helpers in [scripts/Load-DotEnv.ps1](../scripts/Load-DotEnv.ps1) instead.
- **Chromium** (for `pnpm take-screenshots`). The screenshot script uses Puppeteer; on Linux (e.g. Raspberry Pi) the bundled Puppeteer binary may be x64, so install Chromium and set `PUPPETEER_EXECUTABLE_PATH` if needed. On Debian-based systems, install **Noto fonts** so localized UI screenshots render Korean/Telugu/Thai correctly: `fonts-noto-cjk`, `fonts-noto-core` (see [Linux](#linux-debian-based-ubuntu-debian-zorin-mint) below).
- **Security:** Run `pnpm audit` periodically. The project uses pnpm `overrides` in [pnpm-workspace.yaml](../pnpm-workspace.yaml) for patched transitive dependencies; keep them updated.

### Windows 11

1. **Node 24**: Install [nvm-windows](https://github.com/coreybutler/nvm-windows)

  ```powershell
  winget install CoreyButler.NVMforWindows --accept-package-agreements --accept-source-agreements
  nvm install 24
  nvm use 24
  ```

2. **pnpm**: Install pnpm, npm-check-updates and doctoc globally:

  ```powershell
  npm install -g pnpm npm-check-updates doctoc
  ```

3. **Build tools for native modules** (`better-sqlite3`, `argon2`): Required for compilation. Use an **elevated** PowerShell (Admin). The base Build Tools product is not enough — node-gyp needs the **MSVC C++ toolset** (`Microsoft.VisualStudio.Workload.VCTools`). Without it, `pnpm install` fails with `missing any VC++ toolset`.

  - **Option A (winget):** Use `--force` so the VCTools workload is applied even if Build Tools is already installed, and `--passive` so the installer UI can complete the workload add (fully `--quiet` often leaves only the base product):

  ```powershell
  winget install Python.Python.3.14 --accept-package-agreements --accept-source-agreements
  winget install --id Microsoft.VisualStudio.2022.BuildTools --force --accept-package-agreements --accept-source-agreements --override "--wait --passive --add Microsoft.VisualStudio.Workload.VCTools --includeRecommended"
  ```

  - **Option B (Chocolatey):**

  ```powershell
  choco install python visualstudio2022-workload-vctools -y
  ```

  - **Option C:** Install [Python 3.14+](https://www.python.org/downloads/) and [Visual Studio Build Tools 2022](https://visualstudio.microsoft.com/downloads/) with the "Desktop development with C++" workload.
  - **Verify** the MSVC toolset is present (should print `True`), then restart the terminal:

  ```powershell
  Test-Path "C:\Program Files (x86)\Microsoft Visual Studio\2022\BuildTools\VC\Tools\MSVC"
  ```

  - If Build Tools is installed but the check returns `False`, re-run the Option A winget command (with `--force`) to add the missing workload. See [node-gyp on Windows](https://github.com/nodejs/node-gyp#on-windows).

4. **Developer Mode** and **Git symlinks**: Turn on Developer Mode (Settings → System → Developer Mode **On**) so Git and pnpm can create symlinks. Also set `core.symlinks true` **before** cloning — see [Git symlinks (required on Windows)](#git-symlinks-required-on-windows). Without this, website screenshot images stay broken locally.

   ```powershell
   pnpm install
   pnpm package
   ```

5. **Recommended – .env**: From the repo root, dot-source [Load-DotEnv.ps1](../scripts/Load-DotEnv.ps1) to load `.env` / `.env.local`:

   ```powershell
   # Enable script execution (ANSWER 'A' when prompted to select "Yes for All" )
   Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
   # Add the hook to the profile
   Add-Content -Path $PROFILE -Value "`n. `$env:USERPROFILE\src\transrewrt\scripts\Register-DotEnvHook.ps1"
   # Restart the PowerShell or load the environment variables manually using `. .\scripts\Load-DotEnv.ps1`.
   ```
  
 Check if the enviroment variables is loading using:

  ```powershell
  # List all variables
  Get-ChildItem Env:
  # List *KEY* Variables
  Get-ChildItem Env:*KEY*
  # Interactive grid (GUI)
  Get-ChildItem Env: | Out-GridView
  ```

6. If you prefer to load the environment variables manually, you can use:

  ```powershell
  . .\scripts\Load-DotEnv.ps1
  ```


7. **Docker (for Web/Docker):** Install [Docker Desktop for Windows](https://www.docker.com/products/docker-desktop/), or:

   ```powershell
   winget install Docker.DockerDesktop
   ```

8. (optional) Register the `ai-i18n-tools` shell command: already included in `Register-DotEnvHook.ps1`. It walks ancestor directories for a `node_modules/.bin` shim (consumer installs), falls back to `bin/ai-i18n-tools.mjs` inside the ai-i18n-tools source repo, then to a global install on `PATH`.

  ```powershell
  ai-i18n-tools --help
  ```


### Linux (Debian-based: Ubuntu, Debian, Zorin, Mint)

1. **Node 24**: Install [nvm](https://github.com/nvm-sh/nvm), then run:

   ```bash
   curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.4/install.sh | bash
   nvm install 24
   nvm use 24
   ```

2. **pnpm**: Install pnpm, npm-check-updates and doctoc globally:

   ```bash
   npm install -g pnpm npm-check-updates doctoc
   ```

3. **Electron runtime dependencies** (to run `pnpm dev` / `electron .` on Linux; use `libnotify4`, not `libnotify-dev`):

   ```bash
   sudo apt install libgtk-3-0 libnotify4 libnss3 libxss1 libasound2 libxtst6 xauth
   ```

   Minimal images may also need packages such as `libatk1.0-0`, `libatk-bridge2.0-0`, `libgbm1`, `libdrm2` if the linker reports a missing library.

4. **Chromium** (for `pnpm take-screenshots`):

   ```bash
   sudo apt install chromium
   ```

   On ARM (e.g. Raspberry Pi) Puppeteer’s bundled Chrome is x64; use system Chromium and set:

   ```bash
   export PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium
   ```

   (or `/usr/bin/chromium-browser`) when running `pnpm take-screenshots`.

5. **Noto fonts** (for localized UI screenshots):

   ```bash
   sudo apt install fonts-noto-cjk fonts-noto-core
   ```

   Ensures Korean, Telugu, Thai and other scripts render correctly in the screenshot when Google Fonts are unavailable.

6. **ImageMagick** (optional; for `./scripts/trim-ico-sizes.sh` when adding provider icons):

   ```bash
   sudo apt install imagemagick
   ```

   See [Provider icons (`trim-ico-sizes`)](#provider-icons-trim-ico-sizes).

7. **direnv**:

   ```bash
   sudo apt install direnv
   ```

   Shell hook and `direnv allow` are described under [Prerequisites](#prerequisites).

8. **Docker**:

   ```bash
   sudo apt install docker.io docker-compose
   sudo usermod -aG docker $USER
   ```

   Log out and back in after `usermod`.

### Git symlinks (required on Windows)

This repository tracks `[website/public/images/screenshots](../website/public/images/screenshots)` as a **git symlink** to `[images/screenshots/](../images/screenshots/)` (so the Astro site can serve docs/marketing screenshots from `public/` without duplicating the PNG tree). New clones must enable Git symlink support **before** checkout, or restore the link afterward.

On a new machine (especially Windows):

1. Enable OS symlink creation — turn on [Developer Mode](https://learn.microsoft.com/windows/apps/get-started/enable-your-device-for-development), or use an elevated shell. Without this, Git cannot create symlinks even when `core.symlinks` is true.
2. Tell Git to materialize symlinks (global once per machine, or local to this repo):

```bash
git config --global core.symlinks true
# or, inside the clone only:
git config --local core.symlinks true
```

3. Clone (or re-checkout the path if the repo already exists):

```bash
git clone git@github.com:wsj-br/transrewrt.git
cd transrewrt
# If you cloned earlier with core.symlinks=false:
git checkout -- website/public/images/screenshots
```

If the path is a plain text file whose only content is `../../../images/screenshots`, the symlink was not created. After enabling the settings above, re-run the `git checkout --` command. Until the real symlink is restored, `pnpm website:build` / `pnpm website:dev` will not include the screenshot PNGs under `/images/screenshots/…`, so docs and marketing pages show broken images.

---

## Setup

```bash
git clone git@github.com:wsj-br/transrewrt.git
cd transrewrt
pnpm install
```

On Windows, enable [Git symlinks](#git-symlinks-required-on-windows) before cloning (or re-checkout `website/public/images/screenshots` afterward).

The **postinstall** script runs `electron-rebuild` so native addons match Electron's Node. Use Node 24 in the same environment where you run the server (see [Troubleshooting](#troubleshooting)).

---

## Development Workflow

- **Electron**: `pnpm dev` - Webpack watch runs on port 4030 and Electron launches automatically. Edit React code for hot reload. (`pnpm dev` chains `watch`, `electron`, `electron-rebuild`, and `write-build-timestamp`; you normally do not run those scripts directly.)
- **Web (HMR)**: `pnpm dev:web` - Webpack serves the app on port 5500 and the API server runs on 4030; `/api` is proxied to the server. Open [http://localhost:5500](http://localhost:5500) in a browser. (`watch:web` is used internally; run `dev:web`, not `watch:web`, for day-to-day work.)

To run Electron with a production build (no dev server):

```bash
pnpm build-renderer
pnpm start
```

On Linux with X11 (if Wayland causes issues): `pnpm start-x11`.

For **Easy** mode during web dev, the server reads `data/presets.json` beside `config.json`. The skills editor mirrors the repo catalog there on save; or copy [easy-mode-config/presets.json](../easy-mode-config/presets.json) manually after editing.

### Presets catalog editor (development)

Maintainers edit the Easy-mode catalog with a small local tool (not packaged in Electron or Docker).

```bash
pnpm run presets-editor
```

Opens [http://127.0.0.1:8765/](http://127.0.0.1:8765/) by default (or the port in the terminal). Full behaviour, env vars (`OPENROUTER_API_KEY`, `SKILLS_EDITOR_PORT`, `SKILLS_EDITOR_NO_OPEN`, …), and API notes: **[dev/presets-editor/README.md](presets-editor/README.md)**.

| Topic | Detail |
|-------|--------|
| **Canonical file** | [easy-mode-config/presets.json](../easy-mode-config/presets.json) — always loaded/saved first; each save bumps patch `version` and `updated_at` |
| **Local web mirror** | `data/presets.json` (override with `SKILLS_EDITOR_DATA_SKILLS_PATH`) |
| **Electron dev** | May read `presets.json` next to your `config.json` instead of `data/` — see README in presets-editor |
| **Keys** | LLM keys from `process.env` only (editor does **not** read `.env`); export vars or use direnv before starting |
| **Catalog cache** | `presets-editor-provider-catalogs.json` at repo root (gitignored, 2 h TTL) |
| **Server log** | `presets-editor.log` at repo root (previous run rotated to `presets-editor-<timestamp>.log` on startup); both removed by [clean-workspace](#cleaning-the-workspace) scripts |

Architecture and runtime sync (6 h GitHub pull, Easy-only Electron sync, `POST /api/presets/sync` on web): **[SYSTEM-OVERVIEW.md](SYSTEM-OVERVIEW.md#easy-mode-and-presets-catalog)**.

### Skill-check cron (development)

Cron-friendly CLI that validates model ids in [easy-mode-config/presets.json](../easy-mode-config/presets.json), replaces unavailable models via fuzzy matching, commits only that file to GitHub, and notifies via [NTFY](https://docs.ntfy.sh/). Use an isolated runtime directory on a server so cron never touches your dev checkout. Full behaviour, CLI flags, and exit codes: **[dev/presets-check/README.md](presets-check/README.md)**.

**Local development** (from the repository root):

```bash
# Preview against local presets.json (no git, no writes)
pnpm run presets-check -- --local --dry-run

# Apply locally (updates easy-mode-config/presets.json only; no git push)
pnpm run presets-check -- --local
```

Copy [dev/presets-check/config.example.json](presets-check/config.example.json) to `dev/presets-check/config.json` and set `ntfy.topic` for notifications.

**Production install** (isolated runtime for cron):

```bash
pnpm run presets-check:install -- --target /opt/transrewrt-presets-check
```

Configure `config.json` (set `ntfy.topic`) and create `/opt/transrewrt-presets-check/.env` with secrets (`run.sh` sources it):

```bash
# /opt/transrewrt-presets-check/.env
GITHUB_TOKEN=ghp_…
SKILL_CHECK_NTFY_TOPIC=your-topic
OPENROUTER_API_KEY=sk-or-…
# … other provider keys as needed
```

If `"useSsh": true` in `config.json`, git uses SSH instead of `GITHUB_TOKEN`; ensure the cron user can use the deploy key (see [presets-check/README.md](presets-check/README.md)).

Test before scheduling:

```bash
cd /opt/transrewrt-presets-check
SKILL_CHECK_DRY_RUN=1 ./run.sh
```

Add a crontab entry (daily at 06:00 in this example):

```bash
crontab -e
```

```cron
0 6 * * * /opt/transrewrt-presets-check/run.sh >> /opt/transrewrt-presets-check/presets-check-cron.log 2>&1
```

Adjust the schedule as needed. Logs go to `presets-check-cron.log` (stdout/stderr) and `presets-check.log` (JSON-lines from the checker).

**Local repo checkout:** `dev/presets-check/presets-check.log` and `dev/presets-check/provider-catalogs-cache.json` (provider catalog snapshot for checks) are gitignored. Remove them with the [clean-workspace](#cleaning-the-workspace) scripts when you want a fresh checker run or to drop stale catalog data.

Upgrade an installed runtime after pulling a newer checker: `pnpm run presets-check:install -- --target /opt/transrewrt-presets-check --force`.

### Cleaning the workspace

Use these scripts for a full local reset: dev logs and caches first, then build artifacts (`node_modules`, `dist`, `release`, …). Run `pnpm install` before building or starting Docker again.

| Platform | Command |
|----------|---------|
| **Linux / macOS** | `./scripts/clean-workspace.sh` |
| **Windows (PowerShell)** | `.\scripts\clean-workspace.ps1` |

**Logs and dev caches (both scripts):**

- All `*.log` files anywhere in the repository, except under `node_modules`, `.git`, `dist`, `release`, and `documentation/node_modules`. Examples: `presets-editor.log`, `presets-editor-*.log`, `data/server.log`, `dev/presets-check/presets-check.log`, screenshot logs under `dev/`.
- `presets-editor-provider-catalogs.json` (repo root)
- `dev/presets-check/provider-catalogs-cache.json`
- `dev/presets-check/presets-check.log` (also matched by the `*.log` sweep)

Both scripts also remove build artifacts (including `pnpm-lock.yaml`), prune the pnpm store, and run Docker `builder` / `system` prune — use only when you intend to clear those globally.

**Windows only:** optional `-RemovePrerequisites` (global `pnpm`/Node via nvm, plus winget uninstall hints). `-RemoveLockfile` is accepted for compatibility; the lockfile is always removed (same as Bash).

### Upgrading Node and dependencies (nvm)

These scripts install or switch to the **latest Node LTS** via nvm, then install/update global CLI tools (`pnpm`, `npm-check-updates`, `doctoc`). [upgrade-dependencies.sh](../scripts/upgrade-dependencies.sh) / [upgrade-dependencies.ps1](../scripts/upgrade-dependencies.ps1) also run build-safe `ncu --doctor` per workspace package, reconcile the lockfile, update browserslist, then `audit` / `audit fix` (with optional force-upgrade of vulnerable direct deps that doctor had to revert).

| Environment              | Command                                                                                                                                                                                                                                         |
|--------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Windows (PowerShell)** | **Tools only:** `. .\scripts\upgrade-tools.ps1` (dot-source so `nvm use` applies to this session). **Full dependency upgrade:** `. .\scripts\upgrade-dependencies.ps1` (must be dot-sourced unless `CI=1` / `UPGRADE_ALLOW_EXEC=1`). |
| **Linux / macOS (bash)** | **Use `source`** so `nvm use` runs in your **current** shell. Otherwise the script runs in a subprocess and your terminal keeps the old Node after the script exits.                                                                            |

**Unix/bash (recommended):**

```bash
# Tools only: refresh nvm (if ~/.nvm is a git clone), install LTS Node, upgrade pnpm / ncu / doctoc
source ./scripts/upgrade-tools.sh

# Full dependency upgrade: tools + ncu --doctor per workspace package, install, audits
source ./scripts/upgrade-dependencies.sh
```

Before doctor upgrades, the dependency script checks whether the latest React ESLint plugins' `peerDependencies.eslint` ranges allow the **latest ESLint major**; if not, it excludes `eslint` / `@eslint/js` / those plugins from the bump. The same logic is embedded in both the Bash and PowerShell scripts (the standalone [eslint-react-peers-allow-eslint10.js](../scripts/eslint-react-peers-allow-eslint10.js) helper remains available for ad-hoc checks against ESLint 10 specifically).

**Why `source`:** A normal `./script.sh` starts a **child process**. Environment changes (including nvm’s `PATH`) cannot propagate back to the parent shell ([nvm-sh#2124](https://github.com/nvm-sh/nvm/issues/2124)). Sourcing runs the script in your interactive shell, so the LTS Node you selected stays active when the script finishes.

**Executing with `./`:** The scripts **exit with an error** if you run `./scripts/upgrade-tools.sh` or `./scripts/upgrade-dependencies.sh` directly, and print a reminder to use `source`. For **CI** or other automation, set `CI=1` (common on GitHub Actions and similar) or `UPGRADE_ALLOW_EXEC=1` to allow execution without `source` (PowerShell also accepts the legacy `TRANSREWRT_UPGRADE_ALLOW_EXEC=1` alias).

**Shell note:** The `.sh` scripts target **bash**. On zsh/fish, run them under bash, e.g. `bash -c 'source ./scripts/upgrade-dependencies.sh'`, or open a bash session for the upgrade.

---

## Build


| Target                              | Command                               | Output                                                                                                             |
|-------------------------------------|---------------------------------------|--------------------------------------------------------------------------------------------------------------------|
| **Renderer**                        | `pnpm build-renderer` or `pnpm build` | `dist/` (production assets)                                                                                        |
| **Electron main/preload**           | `pnpm run build:main`                 | `dist-main/` (webpack bundle; `package` / `package-arm64` run this before electron-builder)                        |
| **Electron installer**              | `pnpm package`                        | `release/` (e.g. NSIS `.exe` on Windows; targets depend on platform)                                               |
| **Electron (Linux arm64 AppImage)** | `pnpm package-arm64`                  | `release/` - Linux **arm64** AppImage only (`build/electron-builder.linux-arm64.cjs`)                              |
| **Docker image**                    | `docker build -t transrewrt-web .`    | Multi-stage build (Node 24 Alpine); run with `docker run -p 5000:5000 -v transrewrt-data:/app/data transrewrt-web` |


### UI translations and documentation (ai-i18n-tools)

The UI uses **react-i18next** with a key-as-default pattern (English in source is the key; no `en-GB.json`). Per-locale JSON files live in `src/renderer/locales/`. **Extract, UI translation, and markdown documentation translation** share one config file: **`[ai-i18n-tools.config.json](../ai-i18n-tools.config.json)`** (`sourceLocale`, `targetLocales`, `openrouter`, `ui`, `glossary`, `cacheDir`, `documentations`).

| Command                                         | Purpose                                                                                                                                                                                    |
|-------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `pnpm run i18n:extract`                         | Scan source for `t("…")` (and configured roots) → `src/renderer/locales/strings.json` (preserves existing translations)                                                                    |
| `pnpm run i18n:translate:ui`                    | Translate missing UI strings via OpenRouter; set `OPENROUTER_API_KEY`. Writes flat `{locale}.json` files. See `pnpm exec ai-i18n-tools translate-ui --help` for `--force`, `--model`, etc. |
| `pnpm run i18n:translate:docs`                  | Translate configured markdown docs → `translated-docs/` (see `documentations` in config). **Requires `OPENROUTER_API_KEY`.**                                                               |
| `pnpm run i18n:translate:svg`                   | Not currently configured — prints an informational message. To enable SVG translation: set `features.translateSVG` and add an `svg` block in `ai-i18n-tools.config.json`.                 |
| `pnpm run i18n:translate`                       | Runs `translate-ui`, then `translate-docs`                                                                                                                                                 |
| `pnpm run i18n:sync`                            | `ai-i18n-tools sync`: extract (if enabled), then translate UI, optional SVG, then docs — skip parts with `--no-ui`, `--no-svg`, `--no-docs` (see CLI `--help`)                             |
| `pnpm run i18n:status`                          | UI string and doc translation coverage                                                                                                                                                     |
| `pnpm run i18n:cleanup`                         | Remove stale i18n pipeline artifacts (see `ai-i18n-tools cleanup --help`)                                                                                                                    |
| `pnpm run clean-temp`                           | Find and remove `*.log` and `cache.db.backup*.sqlite` under a tree (`ai-i18n-tools clean-temp`; use `--force` to skip prompt)                                                              |
| `pnpm run i18n:editor`                          | Open the string editor when configured                                                                                                                                                     |
| `pnpm run i18n:locales`                         | Regenerate `[src/renderer/locales/ui-languages.json](../src/renderer/locales/ui-languages.json)` from config (includes `direction` per locale); alias for `ai-i18n-tools generate-ui-languages` |

**OpenRouter model ids** (default and fallback order) live under `openrouter.translationModels` in `ai-i18n-tools.config.json` — **not** app `config.json`. The same list is consumed by `[scripts/generate-test-data.js](../scripts/generate-test-data.js)`. Override for a single run where supported (e.g. `pnpm run i18n:translate:ui -- --model <id>`).

**Add a new UI language:** (1) Add the locale to `targetLocales` in `ai-i18n-tools.config.json`, (2) run `pnpm run i18n:locales` (or `pnpm exec ai-i18n-tools generate-ui-languages`) and review `ui-languages.json`, (3) run `pnpm run i18n:extract` then `pnpm run i18n:translate:ui` (or `i18n:sync`). Document and layout direction use `direction` in `ui-languages.json` via `applyDirection` in `[src/renderer/i18n.ts](../src/renderer/i18n.ts)` — see [i18n.md](i18n.md).

**Documentation translation:** The `docs` array in `ai-i18n-tools.config.json` lists content paths (e.g. `README.md`), `outputDir` (e.g. `translated-docs/`), and post-processing (screenshot paths, language-list block). Outputs are typically `basename.<locale>.md`. Caching uses `cacheDir` (default `.translation-cache`); it is **not** compatible with a legacy custom cache under `translated-docs/.cache` — archive or remove old caches when migrating.

Screenshots follow Pattern B (per-locale folder): `images/screenshots/<locale>/<name>.png`. The `take-screenshots.js` script writes PNG files for all locales; `translate-docs` rewrites the locale segment via `postProcessing.regexAdjustments`. See the [ai-i18n-tools locale assets guide](https://github.com/wsj-br/ai-i18n-tools/blob/main/docs/locale-assets.md) for full documentation of this pattern.

**Glossaries:** Optional `[glossary-user.csv](../glossary-user.csv)` is referenced from config. UI string catalog `[src/renderer/locales/strings.json](../src/renderer/locales/strings.json)` aligns doc terminology with the app when both use the same pipeline.

For all CLI flags, run `pnpm exec ai-i18n-tools --help` and `pnpm exec ai-i18n-tools translate-docs --help` / `translate-ui --help`. Full patterns (`SOURCE_LOCALE`, `t(key, vars)`): **[i18n.md](i18n.md)**.

### Third-party notices (`3p-notices`)

Regenerate the **production** dependency license bundle for releases and compliance:


| Command               | Purpose                                        |
|-----------------------|------------------------------------------------|
| `pnpm run 3p-notices` | Writes [NOTICES](../NOTICES) at the repo root. |
| `pnpm notices:write`  | Alias for `3p-notices`.                        |



Implementation: [scripts/write-third-party-notices.mjs](../scripts/write-third-party-notices.mjs) resolves the production dependency tree via `pnpm licenses list --prod --json`, then selects each license body in order: a [scripts/write-third-party-notices.json](../scripts/write-third-party-notices.json) `packageOverrides` entry (matched by name + semver range), else a real license file (`LICENSE` / `LICENCE` / `COPYING` / `UNLICENSE`, including suffixed variants), never `README.md`, else the standard text for the package's SPDX id from `spdxLicenseTexts` (copyright line filled from the package `author` when present). Non-npm data sources (e.g. languagebench, Artificial Analysis) are taken from `additionalNotices` in the same JSON file and written before the dependency blocks.

**When to run:** After adding, removing, or bumping **production** dependencies, or when you edit `scripts/write-third-party-notices.json`. Commit the updated `NOTICES` with the dependency change when appropriate.

**Overrides:** Edit [scripts/write-third-party-notices.json](../scripts/write-third-party-notices.json). Prefer adding an `spdxLicenseTexts` entry for a new SPDX id. Use `packageOverrides` keys of the form `packageName@versionOrRange` (the part after the **last** `@` is matched with `semver.satisfies`) only when a package needs custom text that the SPDX templates cannot cover — e.g. `esrecurse@^4.3.0` or scoped `@scope/name@^1.2.3`. Use `additionalNotices` (`name`, `licenses`, `licenseText`) for non-npm attributions.

### Provider icons (`trim-ico-sizes`)

Provider logos live as `.ico` files under [src/renderer/assets/](../src/renderer/assets/) and are mapped in [src/renderer/assets/icons_with_files.json](../src/renderer/assets/icons_with_files.json) (`provider_id` → `iconFile`). The UI loads them via `ProviderIcon`.

When adding a **new** provider icon (or replacing an existing one), drop the `.ico` into `src/renderer/assets/`, register it in `icons_with_files.json`, then normalize sizes from the repo root:

```bash
./scripts/trim-ico-sizes.sh
```

Requires [ImageMagick](https://imagemagick.org/) (`identify` and `convert`; on Debian/Ubuntu: `sudo apt install imagemagick`). The script walks `src/renderer/assets/*.ico` and rewrites each file that is not already **only** `16x16` and `32x32`: it picks the largest frame in the ICO, resizes to those two sizes, and writes the trimmed ICO back. A one-time backup `${name}.ico.old` is created beside the original if that backup does not already exist. Icons that already contain exactly those two sizes are skipped.

Commit the updated `.ico` files (and remove any accidental `*.ico.old` backups before committing unless you intentionally keep them locally).

---

## Test

There is no automated test suite (`pnpm test` exits with an error placeholder). Testing is done by running the app.

### Dev mode (recommended for day-to-day testing)

- **Electron:** Run `pnpm dev`. Webpack watch starts on port 4030 and Electron launches automatically; the app opens in the Electron window. Edit React code and see changes with hot reload.
- **Web:** Run `pnpm dev:web`. Webpack serves the app on port 5500 and the API server runs on 4030 (proxied via `/api`). Open **[http://localhost:5500](http://localhost:5500)** in a browser to use the app with HMR.

### Production-style (smoke test)

- **Electron:** `pnpm build-renderer && pnpm start`
- **Web:** `pnpm serve` then open [http://localhost:5000](http://localhost:5000)

Optional: `pnpm generate-test-data` to generate test data for the cost dashboard. For **Transform** mode, use “Load sample prompts” in the UI to import prompts from `src/config-defaults/transform-prompts.json`, or manage prompts in **Settings → Transform prompts**. The **History** sidebar view lists execution history when **Keep execution history** is enabled (**Settings → General**); web mode loads rows via `/api/calls/history` ([src/server/routes/calls.js](../src/server/routes/calls.js)).

**Easy mode:** Default `mode` is `"easy"` ([config_default.json](../src/config-defaults/config_default.json)). Test skill selection in the toolbar and **Settings → General** (Provider, catalog version/refresh). Switch to **Advanced** in the same panel to exercise **Settings → Models**. Edit the catalog with `pnpm run presets-editor` (see [Presets catalog editor](#presets-catalog-editor-development)).

---

## Releasing (CI builds and GitHub Release)

Official web (Docker container), desktop and AppImage binaries are built by `[.github/workflows/release.yml](../.github/workflows/release.yml)` when a **GitHub Release is published** (and Docker images are pushed to GHCR).

Use a version branch for new features or patch lines (for example `v1.1.x`). Do release prep there, merge into `main` through the GitHub website, then publish a GitHub Release (prefer **`pnpm run release:github`**) so CI attaches installers to the release.

Publishing the release creates tag **`vX.Y.Z`** at **HEAD**, pushes it to **`origin`**, and opens a GitHub Release whose body comes from **`release-notes/RELEASE_NOTES_<version>.md`** (see [Publish the GitHub Release](#publish-the-github-release-releasegithub)). That publication triggers `[.github/workflows/release.yml](../.github/workflows/release.yml)`.

---

### Pre-release checks

Before cutting a release, run checks that mirror what CI exercises before packaging:

1. **`pnpm lint`** (ESLint + `pnpm typecheck`)
2. **`pnpm build`** then **`pnpm run build:main`**

Fix any failures. Optionally run **`pnpm package`** locally for a full Electron packaging smoke test (slow; CI runs this on Windows and Linux).

There is no automated unit/integration test script in `package.json` (`pnpm test` is a stub).

---

### Prepare commits on the version branch

Do this on the development branch you intend to merge (e.g., `v1.1.x`), then push it to GitHub so the pull request below can target it.

Copy **[release-new-version-prompt.md](release-new-version-prompt.md)** into a Cursor chat to draft release notes and fold [CHANGELOG.md](CHANGELOG.md) in one step, or follow the steps below manually.

1. **Release notes**: Add **`release-notes/RELEASE_NOTES_<version>.md`** for the exact version in [package.json](../package.json) (for example `release-notes/RELEASE_NOTES_1.3.3.md` when the version is `1.3.3`). Match the style of prior files under [release-notes/](../release-notes/) (older releases may use the legacy name `RELEASE-NOTES-v<version>.md`; new releases should use the `RELEASE_NOTES_<version>.md` name expected by [scripts/release.mjs](../scripts/release.mjs)).
2. **Changelog**: In [CHANGELOG.md](CHANGELOG.md), move the bullet points from under `## Unreleased` into a new section titled `## [X.Y.Z] - YYYY-MM-DD`, following the Keep a Changelog format. Leave a blank `## Unreleased` heading for the next release cycle.
3. **Version**: Update the `"version": "X.Y.Z"` field in [package.json](../package.json) (use proper Semantic Versioning).
4. **Security audit**: Run `pnpm audit` to ensure no known vulnerabilities exist. If vulnerabilities are found, add overrides to `pnpm.overrides` in [pnpm-workspace.yaml](../pnpm-workspace.yaml) (pnpm 11) and run `pnpm install` until clean.
5. **Sync references**: Run `pnpm run update-version` to sync the README badge, `website/package.json`, the marketing `VERSION` constant, and any other files updated by [scripts/update-version.js](../scripts/update-version.js) so they match the new `package.json` version.
6. **Update i18n UI string translations**: Run `pnpm run i18n:sync` to ensure that all strings in the UI are translated.
7. **Update documentation table of contents**: Run `doctoc *.md dev/*.md` to update all tables of contents.
8. **Update document translations**: Run `pnpm run i18n:translate:docs` to ensure the latest documentation changes are translated.
9. **Third-party notices**: Run `pnpm run 3p-notices` if production dependencies changed; commit [NOTICES](../NOTICES) when appropriate.
10. **Commit and push**: Commit your changes to the changelog, release notes, `package.json`, and any files changed by `update-version` (e.g., `chore: release vX.Y.Z`). Then push your version branch to the remote using your preferred Git client or desktop tool.

Commit the release-notes file and changelog together with other release prep so **`git status` is clean** before you run `release:github` (unless you pass `--verify-clean=false` to the script).


---

### Merge into `main` (GitHub)

1. Open the repository on GitHub (e.g. `https://github.com/wsj-br/transrewrt`).
2. Go to **Pull requests** → **New pull request**.
3. Set **base:** `main` and **compare:** your version branch (e.g. `v1.1.x` or another development branch).
4. Open **Create pull request**, add a title/description if helpful, then merge when ready (**Merge pull request** - use your team’s preferred merge option). Resolve any conflicts in the GitHub UI or locally, then push updates to the compare branch until the PR merges.
5. Confirm `main` on GitHub shows the new commits (e.g. **Code** tab, branch selector `main`, latest commit).

---

### Publish the GitHub Release (`release:github`)

After `main` contains the release commit(s), check out `main` locally at the commit you want to tag (pull from `origin` if needed). Publishing uses the cross-platform [scripts/release.mjs](../scripts/release.mjs) (pnpm wrappers below).

| Script | Dry-run | Create release |
|--------|---------|----------------|
| [scripts/release.mjs](../scripts/release.mjs) | `pnpm run release:github:dry` | `pnpm run release:github` |

**Prerequisites**

- [GitHub CLI](https://cli.github.com/) (`gh`) installed and authenticated (`gh auth login`).
- Remote **`origin`** configured (e.g. `git@github.com:wsj-br/transrewrt.git`).
- **`release-notes/RELEASE_NOTES_<version>.md`** present for the current `package.json` version.
- Working tree clean (default), or pass `--verify-clean=false` to the script.

**Steps**

1. Ensure your local branch is at the release commit on `main` (after merge):

   ```bash
   git checkout main
   git pull origin main
   ```

2. Dry-run (prints planned steps; no tag deletion, push, or release):

   ```bash
   pnpm run release:github:dry
   ```

3. Create the release:

   ```bash
   pnpm run release:github
   ```

   Direct invocation: `node scripts/release.mjs` from the repo root. Help: `node scripts/release.mjs --help`. Flags: `--dry-run`, `--verify-clean=false`.

The script creates an annotated tag **`v<version>`** at **HEAD**, pushes it to **`origin`**, and runs `gh release create` with title **`v<version>`** and body from **`release-notes/RELEASE_NOTES_<version>.md`**. If that tag or a GitHub release for it already exists, the script deletes them and recreates the tag at the current **HEAD** so you can fix a mistaken tag or add follow-up commits before releasing again.

That GitHub release triggers `[.github/workflows/release.yml](../.github/workflows/release.yml)`, which builds Windows and Linux installers, pushes the Docker image to GHCR, and deploys `website/` to GitHub Pages (`https://wsj-br.github.io/transrewrt/`). Check the **Actions** tab on https://github.com/wsj-br/transrewrt for progress. To redeploy the site without an app release, run `pnpm website:publish` (see [website/README.md](../website/README.md)).

**Manual alternative:** you can still create a release from the GitHub **Releases** UI (**Draft a new release** → tag `vX.Y.Z` targeting `main` → paste notes → **Publish release**). Prefer the script so the tag, title, and notes stay aligned with `package.json` and `release-notes/RELEASE_NOTES_<version>.md`.

---

### Release artifacts and manual workflow run

- **Artifacts**: CI also uploads **workflow artifacts** (same naming pattern). The **container image** is `ghcr.io/wsj-br/transrewrt:X.Y.Z` (and `:latest` when this release is the newest tag or when using manual workflow options as documented in the workflow file).
- **Manual workflow run**: From the **Actions** tab you can run the Release workflow without publishing a release (**workflow_dispatch**); it builds installers and Docker images but does **not** attach files to a GitHub Release. Use the `tag_as_latest` input if you need the Docker `latest` tag on that manual run.

---

## Commands by Target

### Electron (Desktop)


| Phase                   | Command                                     | Notes                                                                                           |
|-------------------------|---------------------------------------------|-------------------------------------------------------------------------------------------------|
| **Develop**             | `pnpm dev`                                  | Hot reload, Webpack on :4030                                                                    |
| **Test**                | `pnpm build-renderer` then `pnpm start`     | Run built app                                                                                   |
| **Test (Linux)**        | `pnpm build-renderer` then `pnpm start-x11` | Use X11 if Wayland fails                                                                        |
| **Build**               | `pnpm package`                              | Production build + electron-builder → installers in `release/`                                  |
| **Build (Linux arm64)** | `pnpm package-arm64`                        | Same pipeline, Linux **arm64** AppImage → `release/` (`build/electron-builder.linux-arm64.cjs`) |


### Web (browser, local server)


| Phase       | Command                               | Notes                                                              |
|-------------|---------------------------------------|--------------------------------------------------------------------|
| **Develop** | `pnpm dev:web`                        | Webpack on :5500, API on :4030 (proxied via /api)                  |
| **Build**   | `pnpm build` or `pnpm build-renderer` | Output to `dist/`                                                  |
| **Test**    | `pnpm serve`                          | Build then serve at [http://localhost:5000](http://localhost:5000) |
| **Run**     | `pnpm start:server`                   | Serve only (use when `dist/` already built)                        |


### Docker (web in container)


| Phase               | Command                                                                            | Notes                                                           |
|---------------------|------------------------------------------------------------------------------------|-----------------------------------------------------------------|
| **Build image**     | `docker build -t transrewrt-web .`                                                 | Multi-stage build                                               |
| **Run**             | `docker run -p 5000:5000 -v transrewrt-data:/app/data -e PORT=5000 transrewrt-web` | Data dir: `config.json` + `transrewrt.db` (see SYSTEM-OVERVIEW) |
| **Run (compose)**   | `docker compose up --build -d` or `pnpm docker:up`                                 | Uses docker-compose.yml                                         |
| **Stop (compose)**  | `docker compose down` or `pnpm docker:down`                                        | Stop services                                                   |
| **Logs (compose)**  | `docker logs transrewrt` or `pnpm docker:logs`                                     | Container `transrewrt`                                          |
| **Shell (compose)** | `docker exec -it transrewrt /bin/sh` or `pnpm docker:shell`                        | Interactive shell in container                                  |
| **Test**            | Open [http://localhost:5000](http://localhost:5000)                                | Config at `/api/config`                                         |


---

## Useful Commands Summary

All npm scripts defined in [package.json](../package.json) are listed below (grouped). Scripts used only as dependencies of `dev` / `dev:web` (`watch`, `watch:web`, `electron`) are noted in [Development Workflow](#development-workflow) rather than repeated here.

### Develop, build, and run

| Command                              | Purpose                                                                                                                                                     |
|--------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `pnpm install`                       | Installs dependencies (runs `postinstall` / Electron native rebuild).                                                                                       |
| `pnpm run postinstall`               | Rebuild native addons for Electron (`scripts/electron-rebuild.js`); also runs automatically after `pnpm install`.                                           |
| `pnpm dev`                           | Electron development: runs Webpack on **:4030**, enables hot reload, and performs native rebuild for Electron.                                              |
| `pnpm dev:web`                       | Web development: runs Webpack on **:5500**, and API server on **:4030** (proxied as `/api`).                                                                |
| `pnpm run presets-editor`         | Dev-only Easy-mode catalog editor on **:8765** (see [presets-editor/README.md](presets-editor/README.md)).                                                    |
| `pnpm run presets-check`               | Validate/replace Easy-mode model ids (see [Skill-check cron](#skill-check-cron-development); pass `-- --local`, `--dry-run`, etc.)                          |
| `pnpm run presets-check:install`       | Install isolated presets-check runtime for cron (e.g. `-- --target /opt/transrewrt-presets-check`)                                                              |
| `pnpm build` / `pnpm build-renderer` | Creates a production Webpack build in the `dist/` directory.                                                                                                |
| `pnpm run build:main`                | Webpack build of Electron main/preload → `dist-main/` (included in `package` / `package-arm64`).                                                            |
| `pnpm start`                         | Runs Electron using the current `dist/` (run `build-renderer` first if needed).                                                                             |
| `pnpm start-x11`                     | Runs Electron on Linux with X11 flags (use if Wayland causes issues).                                                                                       |
| `pnpm serve`                         | Runs `build-renderer` then `start:server` (web smoke test on **:5000**).                                                                                    |
| `pnpm start:server`                  | Runs the web server only (serves `dist/`; use when the build already exists).                                                                               |
| `pnpm start:server:rebuild`          | Runs `postinstall` (Electron rebuild) then `start:server`; use if native addons were last built for Electron but you need to run the server on system Node. |
| `pnpm package`                       | Creates a production build and runs `electron-builder` to generate installers in `release/`.                                                                |
| `pnpm package-arm64`                 | Same as above, but creates the Linux **arm64** AppImage only (`build/electron-builder.linux-arm64.cjs`) in `release/`.                                      |

### Code quality

| Command         | Purpose                                                                 |
|-----------------|-------------------------------------------------------------------------|
| `pnpm lint`     | Run ESLint, then `pnpm typecheck`                                       |
| `pnpm lint:fix` | ESLint with `--fix` (does not run typecheck)                            |
| `pnpm typecheck`| TypeScript check (`tsc --noEmit`) for the React renderer                |
| `pnpm test`     | Placeholder only (no automated test suite yet; exits with an error)     |

### UI translations and docs (ai-i18n-tools)

See also [UI translations and documentation (ai-i18n-tools)](#ui-translations-and-documentation-ai-i18n-tools) under **Build**.

| Command                        | Purpose                                                                                                |
|--------------------------------|--------------------------------------------------------------------------------------------------------|
| `pnpm run i18n:extract`        | Scan renderer → `src/renderer/locales/strings.json`                                                    |
| `pnpm run i18n:translate:ui`   | Fill missing UI locales via OpenRouter (`OPENROUTER_API_KEY`); see `ai-i18n-tools translate-ui --help` |
| `pnpm run i18n:translate:svg`  | Not currently configured — prints informational message (SVG translation requires `features.translateSVG` + `svg` block in config) |
| `pnpm run i18n:translate:docs` | Translate README per `docs` in config                                                                   |
| `pnpm run i18n:translate`      | `translate-ui`, then `translate-docs`                                                                |
| `pnpm run i18n:sync`           | Full pipeline: extract + translate UI (+ SVG/docs per config); see `ai-i18n-tools sync --help`         |
| `pnpm run i18n:status`         | Coverage report                                                                                        |
| `pnpm run i18n:locales`        | Regenerate `src/renderer/locales/ui-languages.json` from config                                        |
| `pnpm run i18n:cleanup`        | Remove stale i18n pipeline artifacts (`ai-i18n-tools cleanup --help`)                                  |
| `pnpm run clean-temp`          | Remove `*.log` and `cache.db.backup*.sqlite` under a tree (`ai-i18n-tools clean-temp`; `--force` to skip prompt) |
| `pnpm run i18n:dashboard` / `i18n:editor` | Open the ai-i18n-tools dashboard / string editor when configured                            |

Models and fallbacks: `openrouter.translationModels` in `[ai-i18n-tools.config.json](../ai-i18n-tools.config.json)` — not app `config.json`.

### Data, assets, and docs scripts

| Command                        | Purpose                                                                                                                                  |
|--------------------------------|------------------------------------------------------------------------------------------------------------------------------------------|
| `pnpm generate-test-data`      | Seed SQLite with sample API/history rows (for cost dashboard/dev purposes)                                                               |
| `pnpm take-screenshots`        | Use Puppeteer to capture UI screenshots (app must be reachable; see script/env vars)                                                     |
| `pnpm generate-banner`         | Write `images/transrewrt_banner.svg` and `.png`                                                                                          |
| `./scripts/trim-ico-sizes.sh`  | Normalize provider `.ico` files under `src/renderer/assets/` to 16×16 + 32×32 only (ImageMagick; see [Provider icons](#provider-icons-trim-ico-sizes)) |
| `pnpm reset-web-password`      | In web multi-user mode, set a password in SQLite (`[username] <password>`; default is `admin`; uses `CONFIG_PATH` or `data/config.json`) |
| `pnpm check-api-key`           | Show the masked OpenRouter key and limit info (`OPENROUTER_API_KEY` or `node scripts/check-api-key.js --key …`)                          |
| `pnpm check-custom-provider`   | Probe a custom OpenAI-compatible provider URL/key (see `scripts/check-custom-provider.js`)                                               |
| `pnpm update-version`          | Propagate the root `package.json` version into the README badge, `website/package.json`, and marketing `VERSION` (run after manually bumping the version) |
| `pnpm website:publish`         | Dispatch GitHub Actions to build/deploy `website/` to GitHub Pages (no app release; see [website/README.md](../website/README.md)) |
| `pnpm run 3p-notices`          | Regenerate [NOTICES](../NOTICES) from production dependencies (see [Third-party notices](#third-party-notices-3p-notices))               |

### Docker and deploy

| Command                            | Purpose                                                                                             |
|------------------------------------|-----------------------------------------------------------------------------------------------------|
| `docker build -t transrewrt-web .` | Build production web image                                                                          |
| `pnpm docker:up`                   | `docker compose up --build -d`                                                                      |
| `pnpm docker:down`                 | Stop compose stack                                                                                  |
| `pnpm docker:clean`                | Remove unused Docker build cache, images, networks, and volumes ([scripts/clean-docker.mjs](../scripts/clean-docker.mjs)) |
| `pnpm docker:devel`                | Build image tagged `wsj-br/transrewrt:devel`                                                        |
| `pnpm docker:logs`                 | Logs from container `transrewrt` (see [docker-compose.yml](../docker-compose.yml) `container_name`) |
| `pnpm docker:shell`                | Shell into running container `transrewrt`                                                           |

### Release

See [Releasing (CI builds and GitHub Release)](#releasing-ci-builds-and-github-release).

| Command                           | Purpose                                                                                                      |
|-----------------------------------|--------------------------------------------------------------------------------------------------------------|
| `pnpm run release:github`         | Tag `v<version>` at HEAD, push to `origin`, create GitHub release from `release-notes/RELEASE_NOTES_<version>.md` ([scripts/release.mjs](../scripts/release.mjs)) |
| `pnpm run release:github:dry`     | Validate inputs and print planned steps (no tag push or GitHub release)                                      |

### Toolchain

See [Upgrading Node and dependencies (nvm)](#upgrading-node-and-dependencies-nvm) for **why `source`**, `./` vs CI, and shell notes.

| Command / script                           | Purpose                                                                                                                                                                                                                                                                                  |
|--------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `./scripts/clean-workspace.sh`             | Remove repo `*.log` files, presets-editor/presets-check dev caches, build artifacts (incl. lockfile), then prune pnpm store and Docker caches ([Cleaning the workspace](#cleaning-the-workspace))                                                                                         |
| `.\scripts\clean-workspace.ps1`          | Same as Bash on Windows; optional `-RemovePrerequisites` ([Cleaning the workspace](#cleaning-the-workspace))                                                                                                                                                                              |
| `source ./scripts/upgrade-tools.sh`        | **Bash.** Refresh nvm (git checkout latest tag if `~/.nvm` is a clone), `nvm install --lts` / `nvm use`, then global package manager / `npm-check-updates` / `doctoc`. Must be **sourced** (not `./…`; or `CI=1` / `UPGRADE_ALLOW_EXEC=1`).                                              |
| `. .\scripts\upgrade-tools.ps1`            | **PowerShell.** Same flow via nvm-windows (`nvm install lts` / `nvm use`) and [upgrade-common.ps1](../scripts/upgrade-common.ps1). **Dot-source** (`. …`) so `nvm use` applies to this session.                                                                                           |
| `source ./scripts/upgrade-dependencies.sh` | **Bash.** Sources [upgrade-tools.sh](../scripts/upgrade-tools.sh), ESLint peer gate, `ncu --doctor` per workspace package, lockfile reconcile, browserslist update, audit / audit fix, peer check, summary.                                                                              |
| `. .\scripts\upgrade-dependencies.ps1`     | **PowerShell.** Same as Bash via [upgrade-tools.ps1](../scripts/upgrade-tools.ps1) / [upgrade-common.ps1](../scripts/upgrade-common.ps1). **Must** be dot-sourced (not `.\…`, unless `CI=1` / `UPGRADE_ALLOW_EXEC=1`).                                                                   |


---

## Troubleshooting

- **Native module build failed (better-sqlite3 / argon2) on Windows:** Install build tools (Python + Visual Studio C++ workload) as in [Prerequisites](#prerequisites). Restart the terminal and run `pnpm install` again.
- **NODE_MODULE_VERSION mismatch in Electron:** Run `pnpm postinstall` so native addons are rebuilt for Electron's Node. Ensure build tools are installed.
- **NODE_MODULE_VERSION mismatch when running `pnpm dev:web` or `pnpm start:server`:** The server runs with system Node; native addons were built for Electron's Node. Use **Node 24** in the same terminal (e.g. `nvm use 24` then `pnpm dev:web`). See [troubleshooting-node-version.md](troubleshooting-node-version.md).
- **Security vulnerabilities found by `pnpm audit`:** Check if the vulnerable package is a transitive dependency. If so, add it under `overrides` in [pnpm-workspace.yaml](../pnpm-workspace.yaml) (pnpm 11 ignores top-level `overrides` in `package.json`) with a patched version range, then run `pnpm install`. For example:

  ```yaml
  overrides:
    lodash: ">=4.18.0"
  ```

  After adding the override, verify with `pnpm audit` - it should report no vulnerabilities.
- **Symlink errors / broken website screenshots on Windows:** Enable Developer Mode and `core.symlinks true`, then restore the `website/public/images/screenshots` symlink — see [Git symlinks (required on Windows)](#git-symlinks-required-on-windows).
- **Node not found (nvm):** Restart the IDE/terminal so it picks up nvm's PATH, or add the nvm Node path to your user PATH.

For more detail (including Node version alignment and Windows-specific issues), see [troubleshooting-node-version.md](troubleshooting-node-version.md).

---

## Related documentation

- **[SYSTEM-OVERVIEW.md](SYSTEM-OVERVIEW.md)** — Product and **runtime architecture** (Electron IPC `llm:`* vs web `/api/llm/stream` SSE), **Vercel AI SDK** LLM layer and supported providers (including **Local LLM** full OpenAI-compatible base URL), **Easy mode / presets catalog** (sync, `model_ids`, providers), **Translate/Rewrite rephrase** (shared controls, version history, word alternatives), **config/state** (desktop `config.json` + encryption; web global config vs `user_preferences` / `transrewrt.db`), **security** (sanitized IPC, Argon2, cookies), settings UI summary, native modules.
- **[presets-editor/README.md](presets-editor/README.md)** — Development catalog editor (`pnpm run presets-editor`), env vars, mirror paths, AI Suggestion / translate-missing APIs.
- **[i18n.md](i18n.md)** — UI strings: extract/translate workflow, key-as-default, RTL, native `t(key, vars)` interpolation.
- **[https://wsj-br.github.io/transrewrt/docs/](https://wsj-br.github.io/transrewrt/docs/)** — End-user docs (install, guides, settings, troubleshooting).
- **[release-new-version-prompt.md](release-new-version-prompt.md)** — Cursor prompt to draft `release-notes/RELEASE_NOTES_<version>.md` and update the changelog before a release.

---

## Key Configuration Files


| File                                                                                        | Description                                                                                                   |
|---------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------|
| [package.json](../package.json)                                                             | Scripts, dependencies, electron-builder config                                                                |
| [webpack.config.js](../webpack.config.js)                                                   | React build, output to `dist/`                                                                                |
| [src/main/main.js](../src/main/main.js)                                                     | Electron main process entry                                                                                   |
| [src/main/preload.js](../src/main/preload.js)                                               | Preload script exposing APIs to renderer                                                                      |
| [src/main/appDb.js](../src/main/appDb.js)                                                   | Electron app DB (api_calls, action_content, custom_prompts); IPC                                              |
| [src/server/index.js](../src/server/index.js)                                               | Express server (web/Docker): static app, auth, `/api/config`, `/api/llm/*`, presets, glossary, calls, users, prompts |
| [src/shared/llm/index.js](../src/shared/llm/index.js)                                       | Vercel AI SDK (`ai` + `@ai-sdk/openai-compatible`) bridge, provider key map, streaming; used by **main** and **server** |
| [src/main/ipc/llmIpc.js](../src/main/ipc/llmIpc.js)                                         | Electron `llm:stream` / `llm:abort` / `llm:models` IPC                                                        |
| [src/server/routes/apiLlm.js](../src/server/routes/apiLlm.js)                               | Web `POST /api/llm/stream` (SSE) and related LLM routes                                                       |
| [src/server/db/appDb.js](../src/server/db/appDb.js)                                         | Web SQLite init, `user_preferences`, migrations, session cleanup                                              |
| [src/server/routes/config.js](../src/server/routes/config.js)                               | `GET/POST /api/config`: merge `user_preferences` + server-global keys (admin rules)                           |
| [src/server/utils/webConfigKeys.js](../src/server/utils/webConfigKeys.js)                   | Which keys stay in global `config.json` vs per-user prefs                                                     |
| [src/main/encryption.js](../src/main/encryption.js)                                         | Electron: **AES-256-CBC** for provider secrets at rest; `transrewrt.key` beside `config.json`                 |
| [src/shared/db/appSchema.js](../src/shared/db/appSchema.js)                                 | Shared DB schema and SQL (used by main + server)                                                              |
| [src/server/routes/calls.js](../src/server/routes/calls.js)                                 | Web: API call logging, execution history, dashboard aggregates                                                |
| [src/renderer/components/HistoryPage.tsx](../src/renderer/components/HistoryPage.tsx)       | Execution history browser (Electron IPC / web REST)                                                           |
| [src/renderer/components/SettingsPanel.tsx](../src/renderer/components/SettingsPanel.tsx)   | Settings tabs; **Models** only in Advanced mode; General includes AI experience / Provider                    |
| [easy-mode-config/presets.json](../easy-mode-config/presets.json)                             | Canonical Easy-mode presets catalog (shipped as `config/presets.json` in Electron builds)                       |
| [src/shared/presetsCatalog.js](../src/shared/presetsCatalog.js)                               | Remote URL, version/`updated_at` merge rules, 6 h sync throttle (Electron + web)                              |
| [src/main/ipc/presetsIpc.js](../src/main/ipc/presetsIpc.js)                                   | Electron `skills:read` / `skills:sync`                                                                        |
| [src/server/routes/presets.js](../src/server/routes/presets.js)                               | Web `GET /api/presets`, `POST /api/presets/sync`, periodic server sync                                          |
| [src/renderer/utils/presets/presetsManager.ts](../src/renderer/utils/presets/presetsManager.ts) | Renderer load/resolve skills for Easy mode                                                                 |
| [dev/presets-editor/README.md](presets-editor/README.md)                                      | Dev catalog editor (`pnpm run presets-editor`)                                                             |
| [Dockerfile](../Dockerfile)                                                                 | Multi-stage Docker build; copies `easy-mode-config/`                                                          |
| [docker-compose.yml](../docker-compose.yml)                                                 | Compose for local web run                                                                                     |
| [src/config-defaults/transform-prompts.json](../src/config-defaults/transform-prompts.json) | Sample transform prompts (used by "Load sample prompts")                                                      |
| [src/renderer/i18n.ts](../src/renderer/i18n.ts)                                             | i18n init, RTL handling, dynamic locale loaders                                                               |
| [src/renderer/locales/strings.json](../src/renderer/locales/strings.json)                   | Extracted UI strings and translation state (from i18n:extract)                                                |
| [ai-i18n-tools.config.json](../ai-i18n-tools.config.json)                                   | **ai-i18n-tools**: locales, OpenRouter models, UI extract paths, glossaries, doc `documentations`, `cacheDir` |
| [NOTICES](../NOTICES)                                                                       | Generated production third-party notices (do not hand-edit; run `pnpm run 3p-notices`)                        |
| [scripts/write-third-party-notices.mjs](../scripts/write-third-party-notices.mjs)           | Resolves prod deps via `pnpm licenses list` and writes `NOTICES`                                              |
| [scripts/write-third-party-notices.json](../scripts/write-third-party-notices.json)         | SPDX license templates + optional per-package overrides for `3p-notices`                                      |
| [src/renderer/assets/icons_with_files.json](../src/renderer/assets/icons_with_files.json) | Provider id → `.ico` filename (+ optional URL) for `ProviderIcon`                                             |
| [scripts/trim-ico-sizes.sh](../scripts/trim-ico-sizes.sh)                                   | Trim provider `.ico` assets to 16×16 + 32×32 (see [Provider icons](#provider-icons-trim-ico-sizes))          |
| [scripts/release.mjs](../scripts/release.mjs)                                               | Local GitHub release (cross-platform Node): tag `v<version>`, push, `gh release create` using `release-notes/RELEASE_NOTES_<version>.md` |
| [website/scripts/publish-pages.mjs](../website/scripts/publish-pages.mjs)                   | Dispatch GitHub Pages deploy for `website/` (`pnpm website:publish` / `website:publish:dry`) |


Deploy and command tables above are **operational**; **system design** (LLM stack, security, data model) is in **[SYSTEM-OVERVIEW.md](SYSTEM-OVERVIEW.md) and [Related documentation](#related-documentation).

