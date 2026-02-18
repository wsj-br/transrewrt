# Web and Docker Deployment

This document describes how the Poliverb application runs as both a desktop Electron app and a web application served from a Docker container. Both modes share the same React codebase.

## Architecture Overview

The application uses **runtime environment detection** to switch between modes:

| Mode | Config Storage | API Calls | Settings UI |
|------|----------------|-----------|--------------|
| **Electron** | Local `config.json` via preload script | Direct to OpenRouter | Separate window or modal |
| **Web/Docker** | Server file via REST API | Proxied through server (API key stays on server) | Inline modal |

**Key security**: In web mode, the API key is stored only on the server (inside the Docker container). The browser never receives or sends the API key to OpenRouter.

## Project Structure

```
├── src/
│   ├── main/           # Electron only (main.js, preload.js)
│   └── renderer/       # Shared React app
│       ├── utils/
│       │   ├── configManager.js   # Uses electronAPI or webAPI
│       │   └── webApiClient.js    # Web-mode API client
│       └── services/
│           └── apiService.js      # Direct or proxy based on mode
├── server/
│   ├── index.js        # Express server (static + config + proxy)
│   └── package.json    # Express dependency only
├── Dockerfile
├── docker-compose.yml
└── (existing files)
```

## Running the Application

Relevant `package.json` scripts for the dual workflow:

| Script | Purpose |
|--------|---------|
| `pnpm run dev` | Electron development (watch + Electron; open in app) |
| `pnpm run dev:web` | Web development (watch + server; open http://localhost:5000) |
| `pnpm run build` / `build-renderer` | Production build of the React app to `dist/` |
| `pnpm start` | Run Electron (use after build) |
| `pnpm run serve` | Build then run web server (serves on port 5000) |
| `pnpm run start:server` | Run web server only (use if `dist/` already built, e.g. in Docker) |
| `pnpm run docker:up` | Run web app in Docker (docker-compose) |

### Electron (Desktop)

Same as before:

```bash
pnpm run build-renderer
pnpm start
# Or for Linux with X11:

pnpm run start-x11
```

### Web Server (Local)

For local testing without Docker (builds then serves, so you always get a fresh app):

```bash
pnpm run serve
```

Then open http://localhost:5000/ in a browser.

### Development (Web, with HMR)

For web development with hot reload, run the dev server and the Express API together; the dev server proxies `/api` to the backend:

```bash
pnpm run dev:web
```

Then open http://localhost:5000/ (Webpack dev server with HMR; API is on port 3030, proxied via /api).

### Docker

**Build and run:**

```bash
docker build -t poliverb-web .
docker run -p 5000:5000 -v poliverb-data:/app/data -e PORT=5000 poliverb-web
```

**With docker-compose:**

```bash
docker-compose up -d
```

Then open http://localhost:5000/

**Environment variables:**

| Variable | Default | Description |
|----------|---------|-------------|
| `PORT` | 5000 | Server port |
| `CONFIG_PATH` | /app/data/config.json | Path to config file |

**Volume persistence:** Mount a volume at `/app/data` so `config.json` persists across container restarts.

## Server API

The server (`server/index.js`) provides:

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/` | GET | Serves the React app (SPA) |
| `/api/config` | GET | Returns current config |
| `/api/config` | POST | Saves config (body: JSON) |
| `/api/config/default` | GET | Returns default config |
| `/api/proxy/chat/completions` | POST | Proxies to OpenRouter (streaming) |
| `/api/proxy/models` | GET | Proxies models list |
| `/api/proxy/generation` | GET | Proxies generation usage |

## Config Flow

### Electron

- `configManager` uses `window.electronAPI` from preload
- `readConfig()` / `writeConfig()` use Node.js `fs` via IPC
- Config stored in `config.json` (project root, user home, or app dir)

### Web

- `configManager` uses `webApiClient` (no `electronAPI` present)
- `readConfig()` → `GET /api/config`
- `writeConfig()` → `POST /api/config`
- Config stored in server file (e.g. `/app/data/config.json` in Docker)

## API Proxy Flow

### Electron

- `apiService` calls `https://openrouter.ai/api/v1/...` directly
- API key sent in `Authorization` header from config

### Web

- `apiService` uses `baseUrl = "/api/proxy"`
- Calls `POST /api/proxy/chat/completions`, etc.
- Server reads API key from its config and forwards to OpenRouter
- Response stream is passed through to the client

## Docker Build Details

- **Multi-stage build**: Stage 1 builds the React app with webpack; Stage 2 runs the server
- **Stage 1**: Uses full `package.json` to build `dist/`
- **Stage 2**: Uses minimal `server/package.json` (only Express) for a smaller image
- Config is stored in a mounted volume at `/app/data`
