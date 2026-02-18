# Development Guide: Transrewrt

This document covers prerequisites, setup, development workflow, and building/packaging for the Transrewrt application (Electron, React, Webpack).

---

## 1. Prerequisites

### Windows 11

1. **Node.js (LTS) using nvm**

    Install [nvm-windows](https://github.com/coreybutler/nvm-windows) (Node Version Manager for Windows):

    ```powershell
    # Download nvm-setup.exe from the releases page and install it
    # Then install Node.js LTS:
    nvm install lts
    nvm use lts
    ```

    Install pnpm globally:

    ```powershell
    npm install -g pnpm
    ```

    Verify:
    ```powershell
    node --version   # e.g. v20.x.x
    pnpm --version   # e.g. 10.x.x
    ```

2. **Git**

   ```powershell
   winget install Git.Git
   # Or: choco install git
   ```

3. **Code Editor (optional)**

   [Cursor IDE](https://cursor.com/home) is recommended.

4. **Developer Mode (recommended for building)**

    Required to avoid symlink errors when running `pnpm install` or `pnpm run package`:

   - Press `Win + I` → **Privacy & Security** → **For developers**
   - Toggle **Developer Mode** to **On**
   - Restart your terminal after enabling

5. **Docker (for Web/Docker target)**

   Install [Docker Desktop for Windows](https://www.docker.com/products/docker-desktop/).

### Linux (Debian-based: Ubuntu, Debian, Mint)

1. **Node.js (LTS) using nvm**

    Install [nvm](https://github.com/nvm-sh/nvm) (Node Version Manager):

    ```bash
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
    # Restart your terminal or source ~/.bashrc (or ~/.zshrc)
    nvm install --lts
    nvm use --lts
    ```

    Install pnpm globally:

    ```bash
    npm install -g pnpm
    ```

    Verify:
    ```bash
    node --version   # e.g. v20.x.x
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

4. **Docker (for Web/Docker target)**

   ```bash
   sudo apt update
   sudo apt install docker.io docker-compose
   sudo usermod -aG docker $USER   # Log out and back in for group to take effect
   ```

5. **Code Editor (optional)**

   [Cursor IDE](https://cursor.com/home) is recommended. Download and install from [cursor.com](https://cursor.com/).

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

- **Windows**: `Transrewrt Setup <version>-<timestamp>.exe`
- **Linux** (if configured): `.deb`, `.rpm`, `.AppImage`, or `.pacman` packages

__Note__: Linux packaging targets are not yet configured in `package.json`. To add them, extend the `build` section:

```json
"linux": {
  "target": [
    "AppImage",
    "deb",
    "rpm"
  ],
  "icon": "transrewrt_logo.ico",
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

The first run copies `config_default.json` to a user-writable location. Subsequent runs read/write user settings there.

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
2. Setup Node.js (LTS)
3. Run `pnpm ci`
4. Run `pnpm run package`
5. Upload artifacts from `release/`

Cross-platform builds require running on each target OS or using a Windows/Mac/Linux runner matrix.

---

## 6. Windows 11: Common Issues

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
| **Run (compose)** | `docker-compose up -d` or `pnpm run docker:up` | Uses `docker-compose.yml` |
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
| `docker-compose up -d` | Run web app in Docker |
