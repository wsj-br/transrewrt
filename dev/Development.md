# Development Guide: Transrewrt

This document covers prerequisites, setup, development workflow, and building/packaging for the Transrewrt application (Electron, React, Webpack).

---

## 1. Prerequisites

### Windows 11

1. **Node.js 24 (LTS) using nvm**

    Install [nvm-windows](https://github.com/coreybutler/nvm-windows) (Node Version Manager for Windows). You do **not** need to install Node.js separately (e.g. via `winget install OpenJS.NodeJS`); nvm will download and install Node when you run `nvm install 24`.

    ```powershell
    # Option 1: winget
    winget install CoreyButler.NVMforWindows
    # Option 2: download nvm-setup.exe from the releases page and install it
    # Then install Node.js 24 (matches Electron 40; use .nvmrc in project root):
    nvm install 24
    nvm use 24
    # Or from project root: nvm use
    ```

    **Alternative (single global Node, no nvm):** `winget install OpenJS.NodeJS` and ensure you use Node 24 (check with `node --version`). The project recommends nvm so you can match Electron’s Node version and switch versions per project.

    Install pnpm globally:

    ```powershell
    npm install -g pnpm
    ```

    Verify:
    ```powershell
    node --version   # e.g. v24.x.x
    pnpm --version   # e.g. 10.x.x
    ```

2. **Git**

   ```powershell
   winget install Git.Git
   # Or: choco install git
   ```

3. **Build tools for native modules (required for `better-sqlite3` and `argon2`)**

   This project uses native Node addons that must be compiled on Windows. **These installs require an elevated console** (Run as administrator): Visual Studio Build Tools installs system-wide, and Python/winget typically do too. A regular user prompt will not have permission.

   Install using one of the following (each run in an **elevated** PowerShell):

   **Option A – winget** (no extra package manager)

   ```powershell
   # Python 3.12 or 3.13 (node-gyp supports both)
   winget install Python.Python.3.12 --accept-package-agreements --accept-source-agreements
   # Or: winget install Python.Python.3.13 --accept-package-agreements --accept-source-agreements
   winget install Microsoft.VisualStudio.2022.BuildTools --accept-package-agreements --accept-source-agreements --override "--wait --quiet --add Microsoft.VisualStudio.Workload.VCTools --includeRecommended"
   ```

   Exit code 3010 means a reboot is required. Restart the terminal (or reboot) before running `pnpm install`.

   **Option B – Chocolatey**

   ```powershell
   choco install python visualstudio2022-workload-vctools -y
   ```

   If Chocolatey is not installed: [Install Chocolatey](https://chocolatey.org/install) (Chocolatey itself requires elevation), then run the command above.

   **Option C – Manual**

   Run the installers (they will prompt for administrator approval if needed):

   - **Python**: Install from [python.org](https://www.python.org/downloads/) (node-gyp uses it; 3.12+ is supported).
   - **Visual Studio C++ workload**: Install one of:
     - [Visual Studio 2022 Community](https://visualstudio.microsoft.com/thank-you-downloading-visual-studio/?sku=Community) with the **"Desktop development with C++"** workload, or
     - [Visual Studio Build Tools](https://visualstudio.microsoft.com/thank-you-downloading-visual-studio/?sku=BuildTools) with the **"Desktop development with C++"** workload (no full IDE).

   After installing, restart your terminal and run `pnpm install` again.

   Reference: [node-gyp on Windows](https://github.com/nodejs/node-gyp#on-windows).

4. **Code Editor (optional)**

   [Cursor IDE](https://cursor.com/home) is recommended.

5. **Developer Mode (recommended for building)**

    Required to avoid symlink errors when running `pnpm install` or `pnpm run package`:

   - Press `Win + I` → **Privacy & Security** → **For developers**
   - Toggle **Developer Mode** to **On**
   - Restart your terminal after enabling

6. **Loading `.env` (optional, Windows/PowerShell)**

   The project uses `.env` (and optionally `.env.local`) for local environment variables (e.g. `API_KEY`). Two scripts provide direnv-style loading:

   - **Manual:** From the repo root run `. .\scripts\Load-DotEnv.ps1` to load `.env` and `.env.local` into the current session.
   - **Automatic:** Add to your PowerShell profile: `. 'C:\Users\wsj\src\transrewrt\scripts\Register-DotEnvHook.ps1'` (adjust the path if your clone is elsewhere). Then `.env` is loaded automatically when you `cd` into the project. Open your profile with `notepad $PROFILE`.

7. **Docker (for Web/Docker target)**

   ```powershell
   winget install Docker.DockerDesktop
   ```
   Or download from [Docker Desktop for Windows](https://www.docker.com/products/docker-desktop/).

### Linux (Debian-based: Ubuntu, Debian, Mint)

1. **Node.js 24 (LTS) using nvm**

    Install [nvm](https://github.com/nvm-sh/nvm) (Node Version Manager):

    ```bash
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
    # Restart your terminal or source ~/.bashrc (or ~/.zshrc)
    nvm install 24
    nvm use 24
    # Or from project root: nvm use
    ```

    Install pnpm globally:

    ```bash
    npm install -g pnpm
    ```

    Verify:
    ```bash
    node --version   # e.g. v24.x.x
    pnpm --version   # e.g. 10.x.x
    ```

2. **Git**

   ```bash
   sudo apt update
   sudo apt install git
   ```

3. **Additional libraries (for Electron on Linux)**

   ```bash
   sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth
   ```

4. **direnv (optional – load `.env` in project directory)**

   [direnv](https://direnv.net/) loads environment variables from `.env` when you `cd` into the project and unloads them when you leave.

   ```bash
   # e.g. on Debian/Ubuntu
   sudo apt install direnv
   # Add to ~/.bashrc or ~/.zshrc:
   eval "$(direnv hook bash)"   # or: eval "$(direnv hook zsh)"
   ```

   Restart your shell, then in the project root run once: `direnv allow`.

5. **Docker (for Web/Docker target)**

   ```bash
   sudo apt update
   sudo apt install docker.io docker-compose
   sudo usermod -aG docker $USER   # Log out and back in for group to take effect
   ```

6. **Code Editor (optional)**

   [Cursor IDE](https://cursor.com/home) is recommended. Download and install from [cursor.com](https://cursor.com/).

### Dependency versions and security (all platforms)

- **Electron & Node:** The project uses **Electron 40** (e.g. 40.6.x), which bundles **Node.js 24** (see [Electron releases](https://releases.electronjs.org/release/v40.0.0)). The `engines` field in `package.json` requires Node `>=24.0.0` so that local tooling matches Electron’s runtime.
- **Security:** Run `pnpm audit` to check for known vulnerabilities. The project uses pnpm `overrides` in `package.json` to force patched versions of transitive dependencies (e.g. `minimatch`, `qs`, `glob`, `lodash-es`); keep these aligned with upstream security advisories when updating dependencies.
- **Key versions:** electron-builder 26.x, express 5.x, React 19.x, better-sqlite3 12.x, and argon2 0.44+ are used and kept at versions without known vulnerabilities and compatible with Electron 40 / Node 24.

---

## 2. Setup

Clone the repository and install dependencies:

```bash
git clone git@github.com:wsj-br/transrewrt.git
cd transrewrt
pnpm install
```

---

## 3. Development Workflow

### Start Development Mode

Runs the Webpack dev server and Electron with live-reload:

```bash
pnpm run dev
```

- `pnpm run watch` starts Webpack on http://localhost:3030
- `pnpm run electron` waits for the server, then launches Electron
- React changes are compiled and reflected automatically

### Run Electron Only (Production Build)

After building, run Electron without the dev server:

```bash
pnpm run build-renderer
pnpm start
```

On Linux with X11 (if Wayland causes issues):

```bash
pnpm run start-x11
```

---

## 4. Building and Packaging

### Build Renderer (Production)

Compiles the React app into optimized assets in `dist/`:

```bash
pnpm run build-renderer
```

### Package as Installable Application

Builds the renderer and creates the installer/executable:

```bash
pnpm run package
```

This will:

1. Run `pnpm run build-renderer`
2. Package the app with electron-builder
3. Output to the `release/` directory (e.g. NSIS installer on Windows)

---

## 5. Deploying Standalone Electron Applications (End-User Distribution)

The application can be packaged as native installers for Windows and Linux using `electron-builder`. These installers are self-contained and can be distributed to end-users without requiring them to install Node.js or development tools.

### Build Installers for All Platforms

```bash
pnpm run package
```

This command:

1. Builds the React renderer into optimized `dist/` assets
2. Packages the Electron app with `electron-builder`
3. Generates installer(s) in the `release/` directory

### Current Packaging Configuration

The `package.json` `build` section currently configures:

- **Windows**: NSIS installer (`.exe`)
  - Creates desktop and Start Menu shortcuts
  - App ID: `br.com.wsj.transrewrt`
  - Product name: "Transrewrt"
- **Code Signing**: Disabled (`forceCodeSigning: false`)
- **Output**: `release/` directory

### Distribution Files

After building, check the `release/` folder for:

- **Windows**: `Transrewrt Setup <version>.exe`
- **Linux** (if configured): `.deb`, `.rpm`, `.AppImage`, or `.pacman` packages

__Note__: Linux packaging targets are not yet configured in `package.json`. To add them, extend the `build` section:

```json
"linux": {
  "target": [
    "AppImage",
    "deb",
    "rpm"
  ],
  "icon": "images/transrewrt_logo.ico",
  "category": "Utility"
}
```

### End-User Installation

**Windows**:
1. Download the `.exe` installer
2. Run it and follow the wizard (default options are recommended)
3. The app installs to `C:\Program Files\Transrewrt` by default
4. Launch from Start Menu or desktop shortcut

**Linux** (once configured):
- **AppImage**: Download, make executable (`chmod +x`), and run
- **Debian/Ubuntu**: `sudo dpkg -i <package>.deb` (handles dependencies automatically)
- **Fedora/RHEL**: `sudo rpm -i <package>.rpm`

### Application Data Location

User-specific configuration is stored in the standard user data directory:

- **Windows**: `%APPDATA%\transrewrt\` (e.g., `C:\Users\<user>\AppData\Roaming\transrewrt\`)
- **Linux**: `~/.config/transrewrt/` or `~/.local/share/transrewrt/`

In the Electron desktop app, cost-tracking data is stored in the same directory in **transrewrt.db** (SQLite). The same schema is used for the web/server mode.

The first run copies the default config from `config/config_default.json` to a user-writable location. Subsequent runs read/write user settings there.

### Updating the Application

End-users should download and install the new version; the installer will replace the old version while preserving user data in the app data directory.

### Advanced: Code Signing (Optional)

For professional distribution, sign your installers to avoid SmartScreen warnings and ensure integrity. Configure `electron-builder` with:

```json
"win": {
  "certificateFile": "path/to/cert.p12",
  "certificatePassword": "your_password"
},
"mac": {
  "hardenedRuntime": true,
  "gatekeeperAssess": false,
  "entitlements": "entitlements.mac.plist",
  "entitlementsInherit": "entitlements.mac.plist"
}
```

Signing requires purchasing a code signing certificate from a trusted CA (e.g., DigiCert, Sectigo).

### CI/CD Integration (Optional)

Automate builds using GitHub Actions, GitLab CI, or similar. Example steps:

1. Checkout code
2. Setup Node.js 24 (LTS)
3. Run `pnpm ci`
4. Run `pnpm run package`
5. Upload artifacts from `release/`

Cross-platform builds require running on each target OS or using a Windows/Mac/Linux runner matrix.

---

## 6. Windows 11: Common Issues

### Native module build failed (better-sqlite3 / argon2)

If `pnpm install` fails with errors like:

```
gyp ERR! find VS You need to install the latest version of Visual Studio
gyp ERR! find VS including the "Desktop development with C++" workload.
Could not find any Visual Studio installation to use
```

**Cause**: The project depends on native addons (`better-sqlite3`, `argon2`) that are compiled with node-gyp. Windows requires Visual Studio (or Build Tools) with the C++ workload.

**Fix**: Install the prerequisites in **§1 Prerequisites → Build tools for native modules** (winget, Chocolatey, or manual). Restart the terminal and run `pnpm install` again.

**Optional**: Using Node.js 24 (LTS) via `nvm use 24` or `nvm use` (with `.nvmrc` in the project) can allow prebuilt binaries for some packages; if none are available for your Node version, the build tools are still required.

### better-sqlite3 / NODE_MODULE_VERSION mismatch in Electron

If the Electron app shows errors like:

```
The module '...better_sqlite3.node' was compiled against a different Node.js version using NODE_MODULE_VERSION 141. This version of Node.js requires NODE_MODULE_VERSION 143.
```

**Cause**: Native modules (e.g. `better-sqlite3`) are built for the Node ABI used at install time. Electron uses a different ABI, so the addon must be rebuilt for Electron.

**Fix**:

1. **better-sqlite3**: The project uses `better-sqlite3` **^12.4.2** (required for Electron 40’s V8). After `pnpm install`, the **postinstall** script runs `electron-rebuild` (via `scripts/electron-rebuild.js`) for the installed Electron version (e.g. 40.x → Node 24). If you see the error above, run:
   ```powershell
   pnpm run postinstall
   ```
   (Requires the [build tools for native modules](#3-build-tools-for-native-modules-required-for-better-sqlite3-and-argon2) to be installed.)

2. If you upgraded Electron and the error persists, run `pnpm install` again so dependencies and the rebuild use the new Electron version.

### NODE_MODULE_VERSION mismatch when running `pnpm dev:web` or `pnpm run start:server`

If the **standalone server** (used by `dev:web` and `serve`) fails with `better_sqlite3.node` / `NODE_MODULE_VERSION 143` vs `137` (or similar), the server is running with a different Node version than the one `electron-rebuild` used. The binary was built for Node 24 (Electron's version); your current `node` is older (e.g. Node 18).

**Fix**: Use Node 24 in the same terminal where you run the server:

```powershell
nvm use 24
# or, from project root:
nvm use
pnpm dev:web
```

If you don't use nvm, switch your PATH to Node 24 and try again. The script `start:server` runs `check-node-version.js` first and will print this requirement if the version is too old. If you no longer have Node 18 installed but still see 137, see [No Node 18 installed but NODE_MODULE_VERSION 137](troubleshooting-node-version.md).

### Why “two” Node versions? Can we use Node 22 everywhere?

You don’t need two Node versions by design. There are two runtimes involved:

1. **Electron’s bundled Node** – Each Electron release ships with a specific Node version (e.g. Electron 40 uses Node 24). You don’t choose this; Electron does. The **postinstall** script runs `electron-rebuild` with the installed Electron version (see `scripts/electron-rebuild.js`) so native addons (e.g. `better-sqlite3`) are built for that bundled Node (Electron 40 → Node 24).
2. **System Node** – The Node you use in the terminal for `pnpm install`, `node server/index.js`, and other scripts. This is whatever you have installed (nvm, installer, etc.).

A mismatch happens when the native module was built for one ABI (e.g. Node 22 from a previous install) but the process that loads it uses another (e.g. Electron’s Node or a different system Node). The fix is to **align everything on one Node ABI**: run `pnpm install` and `node server/index.js` with the **same** Node version that Electron uses (or that you rebuilt for).

- **Use one version everywhere**: Prefer the Node version that matches your Electron release. For example, if you’re on Electron 40 (Node 24), use Node 24 for `pnpm install` and for running the standalone server (`node server/index.js`). Then one `pnpm run postinstall` builds native modules for that ABI and both Electron and the server work.
- **Node 20 and maintenance**: Node 20 goes out of maintenance in May 2026. This project does not require Node 20 specifically. Newer Electron versions bundle newer Node (e.g. Electron 40 uses Node 24). To avoid relying on Node 20, use an Electron version that bundles a maintained Node (22+), use that same Node for install and for the server, and run `pnpm run postinstall` so native modules are built for that single version.

### Node not found (but npm/pnpm are recognized)

You ran `nvm install lts` and `nvm use lts`, but `node` is still not recognized while `npm` or `pnpm` work (or npm fails with "node.exe is not recognized").

**Cause**: nvm-windows puts Node at `%NVM_SYMLINK%` (e.g. `C:\nvm4w\nodejs`) and adds `%NVM_HOME%` and `%NVM_SYMLINK%` to your User PATH. The **terminal (or Cursor) was started before those variables existed**, so this process has no `NVM_HOME`/`NVM_SYMLINK` and PATH still contains the literal `%NVM_SYMLINK%`, which doesn’t resolve to the folder where `node.exe` lives.

**Fix 1 – Restart Cursor (recommended)**  
Fully quit Cursor and open it again so it loads the updated User environment (with `NVM_HOME` and `NVM_SYMLINK`). Open a new terminal; `node` and `npm` should work.

**Fix 2 – Add Node path to User PATH**  
If restarting doesn’t help (or you can’t restart), add the nvm Node folder to your User PATH so it’s always found:

1. Win + R → `rundll32 sysdm.cpl,EditEnvironmentVariables` → Enter  
2. Under "User variables", select **Path** → **Edit** → **New**  
3. Add: `C:\nvm4w\nodejs` (or your actual `NVM_SYMLINK` value from nvm’s settings)  
4. OK out, then open a **new** terminal

After that, `node --version` and `npm --version` should work in new terminals.

### Symlink Permission Errors

If you see:

```
ERROR: Cannot create symbolic link : A required privilege is not held by the client.
```

**Solution 1: Enable Developer Mode** (recommended)

- Settings → Privacy & Security → For developers → Developer Mode **On**
- Restart terminal, then run `pnpm run package` again

**Solution 2: Run as Administrator**

- Right-click PowerShell → Run as administrator
- Navigate to project directory and run `pnpm run package`

### Current Build Configuration

`package.json` uses:

- `forceCodeSigning: false` — no code signing
- `CSC_IDENTITY_AUTO_DISCOVERY=false` — no certificate auto-discovery
- `ELECTRON_BUILDER_CACHE=./cache` — local cache

---

## 7. Key Configuration Files

| File | Description |
|------|-------------|
| `package.json` | Scripts, dependencies, electron-builder config |
| `webpack.config.js` | React build, output to `dist/` |
| `src/main/main.js` | Electron main process entry |
| `src/main/preload.js` | Preload script exposing APIs to renderer |

---

## 8. Commands by Target: Electron, Web, Docker

### Electron (Desktop)

| Phase | Command | Notes |
|-------|---------|-------|
| **Develop** | `pnpm run dev` | Hot reload, Webpack on :3030 |
| **Test** | `pnpm run build-renderer` then `pnpm start` | Run built app |
| **Test (Linux)** | `pnpm run build-renderer` then `pnpm run start-x11` | Use X11 if Wayland fails |
| **Build** | `pnpm run package` | Creates installer in `release/` |

### Web (Browser, local server)

| Phase | Command | Notes |
|-------|---------|-------|
| **Develop** | `pnpm run dev:web` | Webpack on :5000, API on :3030 (proxied via /api) |
| **Build** | `pnpm run build` or `pnpm run build-renderer` | Output to `dist/` |
| **Test** | `pnpm run serve` | Build then serve at http://localhost:5000 |
| **Run** | `pnpm run start:server` | Serve only (use when `dist/` already built) |

### Docker (Web in container)

| Phase | Command | Notes |
|-------|---------|-------|
| **Build image** | `docker build -t transrewrt-web .` | Multi-stage build |
| **Run** | `docker run -p 5000:5000 -v transrewrt-data:/app/data -e PORT=5000 transrewrt-web` | Config persists in volume |
| **Run (compose)** | `docker compose up --build -d` or `pnpm run docker:up` | Uses `docker-compose.yml` |
| **Stop (compose)** | `docker compose down` or `pnpm run docker:down` | Stop services |
| **Test** | Open http://localhost:5000 | Config at `/api/config` |

---

## 9. Useful Commands Summary

| Command | Purpose |
|---------|---------|
| `pnpm install` | Install dependencies |
| `pnpm run dev` | Development with hot reload (Electron) |
| `pnpm run dev:web` | Development with hot reload (Web; API proxied to server) |
| `pnpm run build` / `pnpm run build-renderer` | Production build of React app |
| `pnpm start` | Run Electron (after build) |
| `pnpm run start-x11` | Run Electron with X11 (Linux) |
| `pnpm run serve` | Build then run web server (port 5000) |
| `pnpm run start:server` | Run web server only (e.g. after build or in Docker) |
| `pnpm run package` | Build and create Electron installer |
| `docker build -t transrewrt-web .` | Build Docker image |
| `pnpm run docker:up` | Build and run web app in Docker (compose) |
| `pnpm run docker:down` | Stop Docker compose services |
| `pnpm run docker:clean` | Remove Docker image and volumes |
| `pnpm run docker:deploy` | Deploy to production (runs deploy script) |
