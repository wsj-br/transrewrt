# Web and Docker Deployment

This document describes how the Transrewrt application runs as both a desktop Electron app and a web application served from a Docker container. Both modes share the same React codebase.

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
│       │   ├── configManager.js      # Uses electronAPI or webAPI
│       │   ├── webApiClient.js       # Web-mode API client
│       │   └── sessionExpiredHandler.js  # Handles 401 / session expiry
│       └── services/
│           └── apiService.js         # Direct or proxy based on mode
├── server/
│   └── index.js        # Express server (static + config + proxy + auth + logging)
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
| `pnpm run docker:up` | Build and run web app in Docker (docker compose) |
| `pnpm run docker:down` | Stop Docker compose services |
| `pnpm run docker:clean` | Remove Docker image and volumes |
| `pnpm run docker:deploy` | Deploy to production (runs deploy script) |

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
docker build -t transrewrt-web .
docker run -p 5000:5000 -v transrewrt-data:/app/data -e PORT=5000 transrewrt-web
```

**With docker compose:**

```bash
docker compose up --build -d
```

Then open http://localhost:5000/

**Environment variables:**

| Variable | Default | Description |
|----------|---------|-------------|
| `PORT` | 5000 | Server port |
| `CONFIG_PATH` | `/app/data/config.json` | Path to config file |
| `API_KEY` | _(empty)_ | Optional: set the OpenRouter API key from the host environment instead of storing it in config |
| `API_URL` | `https://openrouter.ai/api/v1` | Optional: override the upstream AI API base URL |

**Volume persistence:** Mount a volume at `/app/data` so `config.json` and `state.json` persist across container restarts.

## Web Authentication

In web mode, all `/api` endpoints (except `POST /api/auth/login` and `GET /api/status`) require a valid session cookie (`transrewrt_session`).

- **Default password**: `transrewrt26` (hashed with Argon2id on first login and stored in `config.json`)
- **Session sliding window**: a successful translate or rewrite call extends the session expiry
- **Session timeout**: configurable via `web_session_timeout` in config (seconds; default 604800 = 7 days)
- **Password change**: available through the Settings → Auth tab in the web UI

Legacy SHA-256 hashes (from older versions) are automatically migrated to Argon2id on the next successful login.

## Server API

The server (`server/index.js`) provides:

### Config & State

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/config` | GET | Returns current config merged with state |
| `/api/config` | POST | Saves config and/or state (body: JSON) |
| `/api/config/default` | GET | Returns default config |

### Authentication

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/auth/login` | POST | Log in with password; sets session cookie |
| `/api/auth/logout` | POST | Invalidates session and clears cookie |
| `/api/auth/change-password` | POST | Change the web login password |
| `/api/auth/check` | GET | Check if current session is valid (returns 401 if not) |
| `/api/status` | GET | Check if API key is set and valid (no auth required) |

### Proxy

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/proxy/chat/completions` | POST | Proxies to OpenRouter (streaming) |
| `/api/proxy/models` | GET | Proxies models list |
| `/api/proxy/generation` | GET | Proxies generation usage |

### API Call Logging (Cost Tracking)

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/calls` | POST | Log an API call to SQLite DB |
| `/api/calls` | DELETE | Delete logged calls (optional `from`/`to` query params) |
| `/api/calls/summary-by-function` | GET | Cost summary grouped by function (translate/rewrite) |
| `/api/calls/summary-by-model` | GET | Cost summary grouped by model |
| `/api/calls/summary-by-day` | GET | Cost summary grouped by day |

All summary endpoints accept optional `from` and `to` query parameters (ISO 8601 timestamps) to filter by date range.

## Config Flow

### Electron

- `configManager` uses `window.electronAPI` from preload
- `readConfig()` / `writeConfig()` use Node.js `fs` via IPC
- Config stored in `config.json` (project root, user home, or app dir)

### Web

- `configManager` uses `webApiClient` (no `electronAPI` present)
- `readConfig()` → `GET /api/config`
- `writeConfig()` → `POST /api/config`
- Config and state stored in server files (e.g. `/app/data/config.json` and `/app/data/state.json` in Docker)

## API Proxy Flow

### Electron

- `apiService` calls `https://openrouter.ai/api/v1/...` directly
- API key sent in `Authorization` header from config

### Web

- `apiService` uses `baseUrl = "/api/proxy"`
- Calls `POST /api/proxy/chat/completions`, etc.
- Server reads API key from its config (or `API_KEY` env var) and forwards to OpenRouter
- Response stream is passed through to the client

## Docker Build Details

- **Multi-stage build**: Stage 1 builds the React app with webpack and prunes to production dependencies; Stage 2 copies the built artifacts and runs the server
- **Stage 1 (builder)**: Uses full `package.json` to install all dependencies (including native modules such as `better-sqlite3` and `argon2`) and builds `dist/`; then runs `pnpm prune --prod` to strip dev dependencies
- **Stage 2 (production)**: Copies resolved `node_modules` directly from the builder stage (no `pnpm install`), `dist/`, `server/index.js`, and the `config/` folder (including `config_default.json`); starts the server with `node server/index.js`
- Config and state are stored in a mounted volume at `/app/data`
