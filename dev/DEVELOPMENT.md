# Transrewrt - Development Guide

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
  - [Document translation (`translate:docs`)](#document-translation-translatedocs)
    - [1. Configuration (`translate.config.json`)](#1-configuration-translateconfigjson)
    - [2. User glossary (`glossary-user.csv`)](#2-user-glossary-glossary-usercsv)
    - [3. Automatic glossary (aligned with UI i18n)](#3-automatic-glossary-aligned-with-ui-i18n)
    - [4. Running the translator (`--locale`, `--force`, `--force-update`)](#4-running-the-translator---locale---force---force-update)
    - [5. Cleanup (`translate:cleanup` / `translate:clean`)](#5-cleanup-translatecleanup--translateclean)
    - [6. Translation session logs (`pnpm clean-logs`)](#6-translation-session-logs-pnpm-clean-logs)
  - [Third-party licenses (`3p-licenses`)](#third-party-licenses-3p-licenses)
- [Test](#test)
  - [Dev mode (recommended for day-to-day testing)](#dev-mode-recommended-for-day-to-day-testing)
  - [Production-style (smoke test)](#production-style-smoke-test)
- [Releasing (CI builds and GitHub Release)](#releasing-ci-builds-and-github-release)
  - [Prepare commits on the version branch](#prepare-commits-on-the-version-branch)
  - [Merge into `main` (GitHub)](#merge-into-main-github)
  - [Publish the GitHub Release](#publish-the-github-release)
  - [Release artifacts and manual workflow run](#release-artifacts-and-manual-workflow-run)
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
- [Troubleshooting](#troubleshooting)
- [Related documentation](#related-documentation)
- [Key Configuration Files](#key-configuration-files)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

---

## Prerequisites

- **Node.js 24** (LTS). The project uses Electron 41, which bundles Node 24. Use [.nvmrc](../.nvmrc) and `engines` in [package.json](../package.json). Run `nvm use` from the project root if using nvm.
- **pnpm** (package manager). Install globally: `npm install -g pnpm`.
- **Git**.
- **direnv** (recommended): Loads environment variables when you enter the project directory. The repo’s [.envrc](../.envrc) sources `.env` and `.env.local` if present (copy [.env.example](../.env.example) to `.env` and adjust). **Install:** macOS `brew install direnv`; Debian/Ubuntu `sudo apt install direnv`; other systems see [direnv installation](https://direnv.net/docs/installation.html). **Use:** Add a shell hook - Bash: `eval "$(direnv hook bash)"` in `~/.bashrc`; Zsh: `eval "$(direnv hook zsh)"` in `~/.zshrc`; Fish: `direnv hook fish | source` in `~/.config/fish/config.fish`. Open a new shell (or `source` the file), `cd` into the repo, then run **`direnv allow`** once to approve `.envrc`. On Windows, use WSL or Git Bash with the same hook pattern, or use the PowerShell helpers in [scripts/Load-DotEnv.ps1](../scripts/Load-DotEnv.ps1) instead.
- **Chromium** (for `pnpm take-screenshots`). The screenshot script uses Puppeteer; on Linux (e.g. Raspberry Pi) the bundled Puppeteer binary may be x64, so install Chromium and set `PUPPETEER_EXECUTABLE_PATH` if needed. On Debian-based systems, install **Noto fonts** so the language-selector screenshot renders Korean/Telugu/Thai correctly: `fonts-noto-cjk`, `fonts-noto-core` (see [Linux](#linux-debian-based-ubuntu-debian-mint) below).
- **Security:** Run `pnpm audit` periodically. The project uses pnpm `overrides` in package.json for patched transitive dependencies; keep them updated. Current overrides include:
  - **lodash**: `>=4.18.0` (fixes code injection and prototype pollution vulnerabilities)
  - **yauzl**: `>=3.2.1`, **rimraf**: `^5.0.0`, **glob**: `^13.0.0`
  - **global-agent**: `^4.1.2`, **qs**: `>=6.14.2`, **minimatch**: `>=10.2.1`
  
  To add a new override, edit the `pnpm.overrides` section in [package.json](../package.json) and run `pnpm install`.

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

1. **Electron runtime dependencies** (to run `pnpm dev` / `electron .` on Linux; use **`libnotify4`**, not `libnotify-dev`):
  `sudo apt install libgtk-3-0 libnotify4 libnss3 libxss1 libasound2 libxtst6 xauth`
  Minimal images may also need packages such as `libatk1.0-0`, `libatk-bridge2.0-0`, `libgbm1`, `libdrm2` if the linker reports a missing library.
2. **Chromium** (for `pnpm take-screenshots`):
  `sudo apt install chromium`  
   On ARM (e.g. Raspberry Pi) Puppeteer’s bundled Chrome is x64; use system Chromium and set `export PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium` (or `/usr/bin/chromium-browser`) when running `pnpm take-screenshots`.
3. **Noto fonts** (optional, for language-selector screenshot):
  `sudo apt install fonts-noto-cjk fonts-noto-core`  
   Ensures Korean, Telugu, Thai and other scripts render correctly in the screenshot when Google Fonts are unavailable.
4. **direnv**: `sudo apt install direnv` - shell hook and `direnv allow` are described under [Prerequisites](#prerequisites).
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

- **Electron**: `pnpm dev` - Webpack watch runs on port 3030 and Electron launches automatically. Edit React code for hot reload.
- **Web (HMR)**: `pnpm dev:web` - Webpack serves the app on port 5000 and the API server runs on 3030; `/api` is proxied to the server. Open **[http://localhost:5000](http://localhost:5000)** in a browser.

To run Electron with a production build (no dev server):

```bash
pnpm build-renderer
pnpm start
```

On Linux with X11 (if Wayland causes issues): `pnpm start-x11`.

### Upgrading Node and dependencies (nvm)

These scripts install or switch to the **latest Node LTS** via nvm, then install/update global CLI tools (`pnpm`, `npm-check-updates`, `doctoc`). [upgrade-dependencies.sh](../scripts/upgrade-dependencies.sh) / [upgrade-dependencies.ps1](../scripts/upgrade-dependencies.ps1) also runs `ncu`, `pnpm install`, and `pnpm audit` / `pnpm audit fix`.

| Environment | Command |
|-------------|---------|
| **Windows (PowerShell)** | **Tools only:** `. .\scripts\upgrade-tools.ps1` (dot-source so `nvm use` applies to this session). **Full dependency upgrade:** `. .\scripts\upgrade-dependencies.ps1` (must be dot-sourced unless `CI=1` / `TRANSREWRT_UPGRADE_ALLOW_EXEC=1`). |
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
| **Electron installer** | `pnpm package`                        | `release/` (e.g. NSIS `.exe` on Windows; targets depend on platform)                                                |
| **Electron (Linux arm64 AppImage)** | `pnpm package-arm64`     | `release/` — Linux **arm64** AppImage only (`build/electron-builder.linux-arm64.cjs`)                             |
| **Docker image**       | `docker build -t transrewrt-web .`    | Multi-stage build (Node 24 Alpine); run with `docker run -p 5000:5000 -v transrewrt-data:/app/data transrewrt-web` |


### UI translations (i18n)

The UI uses **react-i18next** with a key-as-default pattern (English in source is the key; no `en.json`). Locale files (pt-BR, de, fr, es) live in `src/renderer/locales/`. To update or add UI strings:


| Command                   | Purpose                                                                                                                                                    |
|---------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `pnpm run i18n:extract`   | Scan source for `t("...")` and `package.json` description → `locales/strings.json` (preserves existing translations)                                       |
| `pnpm run i18n:translate` | Translate missing entries via OpenRouter; set `OPENROUTER_API_KEY`. Writes flat `{lang}.json` files. Use `--help` for options (`--force`, `--model`) |
| `pnpm run i18n:sync`      | Run extract then translate                                                                                                                                 |
| `pnpm run i18n:sync-md-annex` | Refresh the **Annex** in [`dev/i18n.md`](i18n.md) (embedded full source of `scripts/extract-strings.js` and `scripts/generate-translations.js`) from the repo files — run after changing those scripts |

The **OpenRouter model ids** used by the UI translation pipeline and related CLI scripts (default model and fallback order) are defined in [`scripts/openrouter-script-models.js`](../scripts/openrouter-script-models.js) (`TRANSLATION_MODELS`). That list is **not** read from app `config.json`. It is consumed by `scripts/generate-translations.js` (`pnpm run i18n:translate`), [`scripts/translate/index.ts`](../scripts/translate/index.ts) (`pnpm translate:docs`, configured by [`translate.config.json`](../translate.config.json)), and `scripts/generate-test-data.js`. [`scripts/translate-docs.js`](../scripts/translate-docs.js) remains available as `node scripts/translate-docs.js` but is not what `pnpm translate:docs` runs. Override the model for a single run where supported (e.g. `pnpm run i18n:translate -- --model <id>`).

To **add a new UI language** (e.g. zh-CN or ar): (1) add an entry to `src/renderer/locales/ui-languages.json` (dynamic locale loaders in `src/renderer/i18n.js` are built from this list), (2) run `pnpm run i18n:extract` then `pnpm run i18n:translate` (or `i18n:sync`) so `strings.json` and `locales/<code>.json` are created/updated. RTL script languages listed in `RTL_LANGS` in `i18n.js` get `dir="rtl"` on the document and on Fluent’s root provider (see [i18n.md](i18n.md)).
### Document translation (`translate:docs`)

Markdown docs listed in [`translate.config.json`](../translate.config.json) are translated with **OpenRouter** via [`scripts/translate/index.ts`](../scripts/translate/index.ts) (same models as in config, not app `config.json`). **Requires `OPENROUTER_API_KEY`.** Outputs are `basename.<locale>.md` under `paths.i18n` (e.g. `translated-docs/README.pt-BR.md`). Segment-level caching lives in `paths.cache` (SQLite `cache.db`).

#### 1. Configuration (`translate.config.json`)

| Area | Role |
|------|------|
| **`locales`** | **`source`**: British English locale id for prompts (e.g. `en-GB`). **`targets`**: either a JSON array of locale codes, or a **path** to [`ui-languages.json`](../src/renderer/locales/ui-languages.json) — the pipeline loads every `code` except the source as a target and uses labels for display names in prompts. |
| **`paths`** | **`docs`**: repo root for resolving globs. **`source-files`**: array of globs for markdown sources (e.g. `./README.md`, `./USER-GUIDE.md`). **`i18n`**: output folder for translated files. **`cache`**: folder for `cache.db` and cleanup logs. **`log-folder`**: session logs (e.g. `./dev/`). **`ui-glossary`** / **`user-glossary`**: see below. |
| **`openrouter`** | **`translationModels`**: ordered list of model ids (fallback order). **`baseUrl`**, **`maxTokens`**, **`temperature`**. |
| **`batchSize`**, **`maxBatchChars`**, **`concurrency`**, **`batchConcurrency`** | Segment batching and parallelism (see `pnpm translate:docs --help`). |
| **`language-list-block`** | `start` / `end` / `separator` for the HTML language-list snippet rewritten per locale. |
| **`additional-adjustments`** | Optional regex replacements after translation (e.g. screenshot paths: `images/screenshots/${translatedLocale}/`). |
| **`cache`** | `enabled`, `segmentLevel` — segment cache behaviour. |

Override config path: `pnpm translate:docs -- --config /path/to/translate.config.json`.

#### 2. User glossary (`glossary-user.csv`)

Optional CSV beside the paths in config (default [`glossary-user.csv`](../glossary-user.csv) via `paths.user-glossary`). **Columns:** `en`, `locale`, `translation`.

- **`locale`** is a target locale code (e.g. `pt-BR`) or **`*`**, meaning “apply this translation to **every** target in `locales.targets`.”
- Rows are merged **after** the UI glossary: **user entries override** the same English term for that locale.

Use this for product names, legal wording, or terminology that must not follow the automatic UI strings.

#### 3. Automatic glossary (aligned with UI i18n)

**`paths.ui-glossary`** points at [`src/renderer/locales/strings.json`](../src/renderer/locales/strings.json) (extract + translate pipeline). The loader expects entries shaped like `{ "<id>": { "source": "<English>", "translated": { "<locale>": "<text>" } } }`.

- For each **English `source`** string that appears in doc text, the translator can attach **hints** to the model: `English term → translated term` for the current target locale, using the same per-locale text as the **UI**.
- **Keeping docs aligned with the app:** run **`pnpm i18n:sync`** (or extract + translate) so `strings.json` and per-locale JSON stay current before **`pnpm translate:docs`**, so glossary hints match shipped UI wording.

#### 4. Running the translator (`--locale`, `--force`, `--force-update`)

```bash
pnpm translate:docs
pnpm translate:docs -- --locale pt-BR,es,fr
pnpm translate:docs -- --force
pnpm translate:docs -- --force-update
```

| Flag | Meaning |
|------|---------|
| **`-l` / `--locale <codes>`** | Translate **only** these targets (comma- or space-separated). Codes must appear in configured `locales.targets`. Omit to run **all** targets. |
| **`--force`** | **Full re-translation** of processed files: clears per-file tracking and **does not read** segment cache for those files (all segments go through the API). **Not** combinable with `--force-update`. |
| **`--force-update`** | Re-run files even when **file-level** tracking says the source hash is unchanged; **segment cache still applies** (cached segments skip API). Use to refresh outputs after prompt/config tweaks without wiping the cache. **Not** combinable with `--force`. |

Other useful flags: **`--dry-run`** (no writes), **`--no-cache`** (ignore cache for API calls but still save new results), **`--clear-cache [locale]`** (clear SQLite cache; optional locale), **`--path <file-or-dir>`** (override `source-files`). See **`pnpm translate:docs -- --help`**.

#### 5. Cleanup (`translate:cleanup` / `translate:clean`)

The cache DB can accumulate **orphaned** rows (deleted/renamed sources) and **stale** rows (never hit again). Translated files under `paths.i18n` can become **orphans** if a source doc is removed or locales shrink.

```bash
pnpm translate:cleanup
# alias:
pnpm translate:clean
```
> **note:** this script first runs **`translate:docs --force-update`** so segments refresh their `last_hit_at`; then it runs the cleanup script


**Manual cleanup only** (inspect without deleting):

```bash
pnpm exec tsx scripts/translate/cache-cleanup.ts --dry-run
```

**What it does** (see [`scripts/translate/cache-cleanup.ts`](../scripts/translate/cache-cleanup.ts)):

1. **Orphaned DB rows** — translations tied to removed/renamed source paths or inconsistent hashes; remap or delete.
2. **Stale DB rows** — rows with missing `last_hit_at` / `filepath` (run `--force-update` before a real cleanup so active segments are not misclassified).
3. **Orphaned output files** — `stem.<locale>.md(x)` under `paths.i18n` that are no longer expected from current `source-files` × `locales.targets`.

Non-`--dry-run` cleanup **backs up** `cache.db` under `paths.cache`, asks for **confirmation**, and writes a log `cleanup_YYYY-MM-DD_HH-MM-SS.log` in the cache folder.

#### 6. Translation session logs (`pnpm clean-logs`)

UI i18n and doc translation runs create **many timestamped log files** (for example `dev/generate-translations-*.log`, `translate-docs_*.log` under `paths.log-folder`, and cache-folder sidecars such as `cache-*.db` backups and `cleanup_*.log`). Those are separate from **`translate:cleanup`**, which trims the SQLite cache and orphaned translated outputs.

**`pnpm clean-logs`** runs [`scripts/clean-translation-logs.js`](../scripts/clean-translation-logs.js): it deletes matching session logs under **`dev/`** and **`paths.log-folder`**, and cache-adjacent artifacts under **`paths.cache`** (see script for glob patterns). It **does not** delete the live **`cache.db`** or **`dev/translations.log`**.

```bash
pnpm clean-logs
pnpm clean-logs --dry-run
```

[`scripts/clean-workspace.sh`](../scripts/clean-workspace.sh) and [`scripts/clean-workspace.ps1`](../scripts/clean-workspace.ps1) run this step automatically before removing build artifacts (from the repo root, so `translate.config.json` paths resolve).

### Third-party licenses (`3p-licenses`)

Regenerate the **production** dependency license bundle for releases and compliance:

| Command                 | Purpose |
|-------------------------|---------|
| `pnpm run 3p-licenses`  | Writes [THIRD-PARTY-LICENSES.txt](../THIRD-PARTY-LICENSES.txt) at the repo root. |

Implementation: [scripts/write-third-party-licenses.js](../scripts/write-third-party-licenses.js) runs **`license-checker-rseidelsohn`** (devDependency) with `--production`, `--json`, [3p-lic-clarifications.json](../3p-lic-clarifications.json), and [scripts/license-checker-custom-format.json](../scripts/license-checker-custom-format.json). The custom-format file is required so clarifications can supply `licenseText` (upstream only merges that field when a custom format includes `licenseText`). The script then emits the same vertical layout as the stock `--plainVertical` output but **prefers `licenseText` from clarifications** when present, so packages that ship **no `LICENSE` file** (and would otherwise use `README.md` as the license source) can show real license text instead of the readme.

**When to run:** After adding, removing, or bumping **production** dependencies, or when you edit `3p-lic-clarifications.json`. Commit the updated `THIRD-PARTY-LICENSES.txt` with the dependency change when appropriate.

**Overrides:** Edit [3p-lic-clarifications.json](../3p-lic-clarifications.json). Keys are `packageName@versionOrRange`: the part after the **last** `@` is matched with `semver.satisfies` (or exact equality), so you can use **ranges** such as `@fluentui/react-icons@^2.0.0` or `@fluentui/react-components@^9.0.0` and avoid editing the file on every patch bump. Use a new major-specific range (or an extra entry) when a major upgrade might change license text. See the [license-checker-rseidelsohn](https://www.npmjs.com/package/license-checker-rseidelsohn) readme (*Clarifications*). Scoped packages: `@scope/name@^1.2.3`. Typical fields: `licenseText` (full text), optionally `licenses`, `licenseFile`, `checksum`, `licenseStart` / `licenseEnd`.

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

## Releasing (CI builds and GitHub Release)

Official web (Docker container), desktop and AppImage binaries are built by [`.github/workflows/release.yml`](../.github/workflows/release.yml) when a **GitHub Release is published** (and Docker images are pushed to GHCR).

Use a version branch for new features or patch lines (for example **`v1.1.x`**). Do release prep there, merge into **`main`** through the GitHub website, then **Publish** a GitHub Release so CI attaches installers to the release.

---

### Prepare commits on the version branch

Do this on the development branch you intend to merge (e.g., **`v1.1.x`**), then push it to GitHub so the pull request below can target it.

1. **Release notes**: Generate a new `RELEASE-NOTES-v.x.y.z.md` in the `./dev` folder with the changes for this release.
2. **Changelog**: In [CHANGELOG.md](CHANGELOG.md), move the bullet points from under `## Unreleased` into a new section titled `## [X.Y.Z]: YYYY-MM-DD`, following the Keep a Changelog format. Leave a blank `## Unreleased` heading for the next release cycle.
3. **Version**: Update the `"version": "X.Y.Z"` field in [package.json](../package.json) (use proper Semantic Versioning).
4. **Security audit**: Run **`pnpm audit`** to ensure no known vulnerabilities exist. If vulnerabilities are found, add overrides to `pnpm.overrides` in package.json and run `pnpm install` until clean.
5. **Sync references**: Run **`pnpm run update-version`** to sync the README badge and any other files updated by [scripts/update-version.js](../scripts/update-version.js) so they match the new `package.json` version.
6. **Update i18n UI string translations**: Run **`pnpm i18n:sync`** to ensure that all strings in the UI are translated.
7. **Update documentation table of contents**: Run **`doctoc *.md dev/*.md`** to update all tables of contents.
8. **Update document translations**: Run **`pnpm translate:docs`** to ensure the latest documentation changes are translated.
9. **Commit and push**: Commit your changes to the changelog, `package.json`, and any files changed by `update-version` (e.g., `chore: release vX.Y.Z`). Then push your version branch to the remote using your preferred Git client or desktop tool.


---

### Merge into `main` (GitHub)

1. Open the repository on GitHub (e.g. `https://github.com/wsj-br/transrewrt`).
2. Go to **Pull requests** → **New pull request**.
3. Set **base:** **`main`** and **compare:** your version branch (e.g. **`v1.1.x`** or another development branch).
4. Open **Create pull request**, add a title/description if helpful, then merge when ready (**Merge pull request** - use your team’s preferred merge option). Resolve any conflicts in the GitHub UI or locally, then push updates to the compare branch until the PR merges.
5. Confirm **`main`** on GitHub shows the new commits (e.g. **Code** tab, branch selector **`main`**, latest commit).

---

### Publish the GitHub Release

After **`main`** contains the release commit(s), create the tag and release in one flow in the browser (no local `git tag` / `git push` required unless you prefer it).

1. Go to **Releases** (the right-hand **Releases** link on the repo home page, or **Code** → **Releases**).
2. Click **Draft a new release**.
3. Click **Choose a tag**, and enter a **new** tag name (e.g., **`vX.Y.Z`**) that follows [Semantic Versioning](https://semver.org/) and this repo’s release workflow. When GitHub prompts you to create the tag as part of publishing the release, ensure the tag’s **target** is **`main`** (the tip of **`main`** after your merge) so the tag points to the release commit.
4. **Release title**: e.g., `Transrewrt X.Y.Z`.
5. **Describe this release**: paste the release notes generated earlier.
6. Click **Publish release** (not “Save draft”). This will publish the tag and trigger [`.github/workflows/release.yml`](../.github/workflows/release.yml); the **Publish GitHub Release assets** job will attach the Windows installer and Linux AppImages after the build completes.

If a tag **`vX.Y.Z`** already exists on the remote (for example you pushed it earlier), use **Choose a tag** → pick that **existing** tag instead of creating a new one, then publish the release the same way.

---

### Release artifacts and manual workflow run

- **Artifacts**: CI also uploads **workflow artifacts** (same naming pattern). The **container image** is **`ghcr.io/wsj-br/transrewrt:X.Y.Z`** (and `:latest` when this release is the newest tag or when using manual workflow options as documented in the workflow file).
- **Manual workflow run**: From the **Actions** tab you can run the Release workflow without publishing a release (**workflow_dispatch**); it builds installers and Docker images but does **not** attach files to a GitHub Release. Use the **`tag_as_latest`** input if you need the Docker `latest` tag on that manual run.

---

## Commands by Target

### Electron (Desktop)


| Phase                   | Command                                     | Notes                                                                                           |
|-------------------------|---------------------------------------------|-------------------------------------------------------------------------------------------------|
| **Develop**             | `pnpm dev`                                  | Hot reload, Webpack on :3030                                                                    |
| **Test**                | `pnpm build-renderer` then `pnpm start`     | Run built app                                                                                   |
| **Test (Linux)**        | `pnpm build-renderer` then `pnpm start-x11` | Use X11 if Wayland fails                                                                        |
| **Build**               | `pnpm package`                              | Production build + electron-builder → installers in `release/`                                  |
| **Build (Linux arm64)** | `pnpm package-arm64`                        | Same pipeline, Linux **arm64** AppImage → `release/` (`build/electron-builder.linux-arm64.cjs`) |


### Web (browser, local server)


| Phase       | Command                               | Notes                                                              |
|-------------|---------------------------------------|--------------------------------------------------------------------|
| **Develop** | `pnpm dev:web`                        | Webpack on :5000, API on :3030 (proxied via /api)                  |
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

### Develop, build, and run

| Command                              | Purpose                                                                                                                                                    |
|--------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `pnpm install`                       | Installs dependencies (runs `postinstall` / Electron native rebuild).                                                                                      |
| `pnpm dev`                           | Electron development: runs Webpack on **:3030**, enables hot reload, and performs native rebuild for Electron.                                             |
| `pnpm dev:web`                       | Web development: runs Webpack on **:5000**, and API server on **:3030** (proxied as `/api`).                                                               |
| `pnpm build` / `pnpm build-renderer` | Creates a production Webpack build in the `dist/` directory.                                                                                                |
| `pnpm start`                         | Runs Electron using the current `dist/` (run `build-renderer` first if needed).                                                                            |
| `pnpm start-x11`                     | Runs Electron on Linux with X11 flags (use if Wayland causes issues).                                                                                      |
| `pnpm serve`                         | Runs `build-renderer` then `start:server` (web smoke test on **:5000**).                                                                                   |
| `pnpm start:server`                  | Runs the web server only (serves `dist/`; use when the build already exists).                                                                              |
| `pnpm start:server:rebuild`          | Runs `postinstall` (Electron rebuild) then `start:server`; use if native addons were last built for Electron but you need to run the server on system Node.|
| `pnpm package`                       | Creates a production build and runs `electron-builder` to generate installers in `release/`.                                                               |
| `pnpm package-arm64`                 | Same as above, but creates the Linux **arm64** AppImage only (`build/electron-builder.linux-arm64.cjs`) in `release/`.                                    |

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
| `pnpm run i18n:sync-md-annex` | Update [`dev/i18n.md`](i18n.md) Annex code blocks from `scripts/extract-strings.js` and `scripts/generate-translations.js` |

Shared **translation script** model list (defaults + fallbacks): [`scripts/openrouter-script-models.js`](../scripts/openrouter-script-models.js) - not app config; per-run override via `--model` where the script supports it.

### Data, assets, and docs scripts

| Command                   | Purpose                                                                                                                                                         |
|---------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `pnpm generate-test-data` | Seed SQLite with sample API/history rows (for cost dashboard/dev purposes)                                                                                      |
| `pnpm take-screenshots`   | Use Puppeteer to capture UI screenshots (app must be reachable; see script/env vars)                                                                            |
| `pnpm generate-banner`    | Write `images/transrewrt_banner.svg` and `.png`                                                                                                                 |
| `pnpm translate:docs`     | Translate README / USER-GUIDE via OpenRouter → `translated-docs/` (`OPENROUTER_API_KEY`)                                                                        |
| `pnpm translate:cleanup` / `pnpm translate:clean` | Doc cache cleanup: runs `translate:docs --force-update` then [`scripts/translate/cache-cleanup.ts`](../scripts/translate/cache-cleanup.ts) (DB orphans/stale rows, orphaned `translated-docs/` outputs); use `pnpm exec tsx scripts/translate/cache-cleanup.ts --dry-run` to preview |
| `pnpm clean-logs`         | Remove translation **session** logs under `dev/` and `paths.log-folder`, and cache sidecars under `paths.cache` ([`scripts/clean-translation-logs.js`](../scripts/clean-translation-logs.js)); does not delete `cache.db` or `dev/translations.log`; `--dry-run` to list only |
| `pnpm reset-web-password` | In web multi-user mode, set a password in SQLite (`[username] <password>`; default is `admin`; uses `CONFIG_PATH` or `data/config.json`)                        |
| `pnpm check-api-key`      | Show the masked OpenRouter key and limit info (`OPENROUTER_API_KEY` or `node scripts/check-api-key.js --key …`)                                                 |
| `pnpm update-version`     | Propagate the `package.json` version into the README badge and other references (run after manually bumping the version)                                        |
| `pnpm run 3p-licenses`    | Regenerate [THIRD-PARTY-LICENSES.txt](../THIRD-PARTY-LICENSES.txt) from production dependencies (see [Third-party licenses](#third-party-licenses-3p-licenses)) |

### Docker and deploy

| Command                            | Purpose                                                                     |
|------------------------------------|-----------------------------------------------------------------------------|
| `docker build -t transrewrt-web .` | Build production web image                                                  |
| `pnpm docker:up`                   | `docker compose up --build -d`                                              |
| `pnpm docker:down`                 | Stop compose stack                                                          |
| `pnpm docker:clean`                | Remove image/volumes (runs `scripts/clean-docker.sh`; Bash)                 |
| `pnpm docker:devel`                | Build image tagged `wsj-br/transrewrt:devel`                                |
| `pnpm docker:logs`                 | Logs from container `transrewrt` (see [docker-compose.yml](../docker-compose.yml) `container_name`) |
| `pnpm docker:shell`                | Shell into running container `transrewrt`                                    |
### Toolchain

See [Upgrading Node and dependencies (nvm)](#upgrading-node-and-dependencies-nvm) for **why `source`**, `./` vs CI, and shell notes.

| Command                                    | Purpose                                                                                                                                                                                                                                                                                  |
|--------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `source ./scripts/upgrade-tools.sh`        | **Bash.** Refresh nvm (git checkout latest tag if `~/.nvm` is a clone), `nvm install --lts` / `nvm use`, then global `pnpm`, `npm-check-updates`, `doctoc`. Must be **sourced** (not `./…`; or `CI=1` / `TRANSREWRT_UPGRADE_ALLOW_EXEC=1`).                                              |
| `. .\scripts\upgrade-tools.ps1`            | **PowerShell.** nvm-windows `nvm install lts` / `nvm use`, then the same global packages. **Dot-source** (`. …`) so `nvm use` applies to this session (script may remind you if run as `.\…`).                                                                                           |
| `source ./scripts/upgrade-dependencies.sh` | **Bash.** Sources [upgrade-tools.sh](../scripts/upgrade-tools.sh), then [eslint-react-peers-allow-eslint10.js](../scripts/eslint-react-peers-allow-eslint10.js), conditional `ncu --upgrade` (may pin ESLint stack), `pnpm install`, `pnpm audit`, `pnpm audit fix`, `pnpm audit` again. |
| `. .\scripts\upgrade-dependencies.ps1`     | **PowerShell.** Dot-sources [upgrade-tools.ps1](../scripts/upgrade-tools.ps1), then the same ESLint peer check, `ncu`, `pnpm install`, and audit steps. **Must** be dot-sourced (not `.\…`, unless `CI=1` / `TRANSREWRT_UPGRADE_ALLOW_EXEC=1`).                                          |


---

## Troubleshooting

- **Native module build failed (better-sqlite3 / argon2) on Windows:** Install build tools (Python + Visual Studio C++ workload) as in [Prerequisites](#prerequisites). Restart the terminal and run `pnpm install` again.
- **NODE_MODULE_VERSION mismatch in Electron:** Run `pnpm postinstall` so native addons are rebuilt for Electron's Node. Ensure build tools are installed.
- **NODE_MODULE_VERSION mismatch when running `pnpm dev:web` or `pnpm start:server`:** The server runs with system Node; native addons were built for Electron's Node. Use **Node 24** in the same terminal (e.g. `nvm use 24` then `pnpm dev:web`). See [troubleshooting-node-version.md](troubleshooting-node-version.md).
- **Security vulnerabilities found by `pnpm audit`:** Check if the vulnerable package is a transitive dependency. If so, add it to `pnpm.overrides` in [package.json](../package.json) with a patched version range, then run `pnpm install`. For example:
  ```json
  "pnpm": {
    "overrides": {
      "lodash": ">=4.18.0"
    }
  }
  ```
  After adding the override, verify with `pnpm audit` — it should report no vulnerabilities.
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
| [translate.config.json](../translate.config.json)                                           | Doc translation (`pnpm translate:docs`): source globs, locales, paths, OpenRouter models (see [`scripts/translate/index.ts`](../scripts/translate/index.ts)) |
| [scripts/openrouter-script-models.js](../scripts/openrouter-script-models.js)               | `TRANSLATION_MODELS`: OpenRouter ids for `i18n:translate`, `translate:docs`, `generate-test-data` (not `config.json`) |
| [scripts/generate-translations.js](../scripts/generate-translations.js)                     | OpenRouter translation script (i18n:translate; needs `OPENROUTER_API_KEY`)                                            |
| [3p-lic-clarifications.json](../3p-lic-clarifications.json)                               | Per-package license overrides for `pnpm run 3p-licenses` (`licenseText`, etc.)                                        |
| [THIRD-PARTY-LICENSES.txt](../THIRD-PARTY-LICENSES.txt)                                       | Generated production third-party license text (do not hand-edit; run `pnpm run 3p-licenses`)                           |
| [scripts/write-third-party-licenses.js](../scripts/write-third-party-licenses.js)             | Invokes license checker + writes `THIRD-PARTY-LICENSES.txt`                                                            |
| [scripts/license-checker-custom-format.json](../scripts/license-checker-custom-format.json) | Minimal custom format so clarifications’ `licenseText` is applied                                                       |


Deploy and command tables above are **operational**; **system design** (LLM stack, security, data model) is in **[SYSTEM-OVERVIEW.md](SYSTEM-OVERVIEW.md)** and [Related documentation](#related-documentation).