/**
 * Transrewrt Web Server
 * Serves the React app and proxies OpenRouter API calls.
 * Config is stored in a local file (Docker volume).
 */

const express = require("express");
const path = require("path");
const fs = require("fs");
const { createLogger } = require("./logger");
const appDb = require("./db/appDb");
const { createConfigFile } = require("./utils/configFile");
const createConfigRouter = require("./routes/config");
const createAuth = require("./routes/auth");
const createStatusRouter = require("./routes/status");
const createApiProxyRouter = require("./routes/apiProxy");
const createCallsRouter = require("./routes/calls");
const createCustomPromptsRouter = require("./routes/customPrompts");
const createUsersRouter = require("./routes/users");

const app = express();
const PORT = process.env.PORT || 5000;
const CONFIG_PATH =
  process.env.CONFIG_PATH || path.join(__dirname, "..", "..", "data", "config.json");
const STATE_PATH = path.join(path.dirname(CONFIG_PATH), "state.json");
const DEFAULT_CONFIG_PATH = path.join(
  __dirname,
  "..",
  "config-defaults",
  "config_default.json",
);
const BUILD_TIMESTAMP_PATH = path.join(__dirname, "..", "..", "build_timestamp");

const DEV_WEB = process.env.DEV_WEB === "true";
const ENV_API_KEY = process.env.API_KEY || "";
const ENV_API_URL = (
  process.env.API_URL || "https://openrouter.ai/api/v1"
).replace(/\/$/, "");
const ENV_KEY_SEED = (process.env.KEY_SEED || "").trim();

const dataDir = path.dirname(CONFIG_PATH);
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

const logToConsole =
  DEV_WEB ||
  process.env.LOG_TO_CONSOLE === "1" ||
  process.env.LOG_TO_CONSOLE === "true";
const log = createLogger(dataDir, logToConsole);

log.info("=".repeat(60));
log.info("[SERVER] Transrewrt Server starting...");
log.info(`[SERVER] Port: ${PORT}`);
if (DEV_WEB) {
  log.info(
    "[SERVER] DEV_WEB mode: only API on this port; use http://localhost:5000 for the app",
  );
}
log.info(`[SERVER] Config path: ${CONFIG_PATH}`);
log.info(`[SERVER] Default config path: ${DEFAULT_CONFIG_PATH}`);
log.info("=".repeat(60));
log.info(`[SERVER] Data directory: ${dataDir}`);
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
  log.info("[SERVER] Data directory created successfully");
} else {
  log.info("[SERVER] Data directory already exists");
}

const configFile = createConfigFile(
  CONFIG_PATH,
  STATE_PATH,
  DEFAULT_CONFIG_PATH,
  log,
);

appDb.initDb(dataDir, log);
if (appDb.getDb()) {
  setInterval(() => appDb.cleanupStalledSessions(), 5 * 60 * 1000);
}

function getProxyHeaders() {
  const apiKey = ENV_API_KEY || configFile.readConfig().api_key || "";
  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${apiKey}`,
    "HTTP-Referer": "https://github.com/wsj-br/transrewrt",
    "X-Title": "Transrewrt",
  };
}

function getProxyBaseUrl() {
  return ENV_API_KEY
    ? ENV_API_URL
    : (configFile.readConfig().api_url || "https://openrouter.ai/api/v1").replace(
        /\/$/,
        "",
      );
}

app.use(express.json({ limit: "10mb" }));

app.use("/api", (req, res, next) => {
  const start = Date.now();
  res.on("finish", () => {
    log.info("API request", {
      method: req.method,
      path: req.originalUrl || req.path,
      statusCode: res.statusCode,
      durationMs: Date.now() - start,
    });
  });
  next();
});

const auth = createAuth(
  appDb.getDb,
  configFile,
  { cleanupStalledSessions: appDb.cleanupStalledSessions },
  log,
);
app.use("/api", auth.requireWebSession);

app.use(
  "/api/config",
  createConfigRouter(configFile, DEFAULT_CONFIG_PATH, ENV_KEY_SEED),
);
app.use("/api/auth", auth.router);

app.use(
  "/api",
  createStatusRouter(
    configFile.readConfig,
    getProxyHeaders,
    getProxyBaseUrl,
    BUILD_TIMESTAMP_PATH,
    ENV_API_KEY,
    log,
  ),
);
app.use(
  "/api",
  createApiProxyRouter(
    getProxyHeaders,
    getProxyBaseUrl,
    auth.setSessionRefreshCookie,
    log,
  ),
);
app.use(
  "/api",
  createCallsRouter(appDb.getDb, auth.setSessionRefreshCookie, log),
);
app.use("/api", createUsersRouter(appDb.getDb, log));
app.use(
  "/api",
  createCustomPromptsRouter(
    appDb.getDb,
    appDb.promptTargetLanguageToDb,
    auth.setSessionRefreshCookie,
    log,
  ),
);

// One level up: dev has src/server → project root; Docker has /app/server → /app
const distPath = path.resolve(path.join(__dirname, "..", "dist"));

if (!DEV_WEB) {
  app.use(express.static(distPath));
  app.get("/{*splat}", (req, res) => {
    if (req.path.startsWith("/api/")) {
      return res.status(404).json({ error: "Not found" });
    }
    res.sendFile(path.join(distPath, "index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.type("html").send(`
      <!DOCTYPE html>
      <html><head><meta charset="utf-8"><title>Transrewrt – Dev</title></head>
      <body style="font-family: system-ui; padding: 2rem; max-width: 40rem;">
        <h1>Transrewrt (dev)</h1>
        <p>For web development, use the Webpack dev server:</p>
        <p><a href="http://localhost:5000">http://localhost:5000</a></p>
        <p>This port (3030) only serves the API when running <code>pnpm run dev:web</code>.</p>
      </body></html>
    `);
  });
  app.get("/{*splat}", (req, res, next) => {
    if (req.path.startsWith("/api/")) return next();
    res.redirect(302, "http://localhost:5000");
  });
}

async function startServer() {
  if (appDb.getDb()) {
    try {
      await appDb.seedDefaultAdmin();
    } catch (err) {
      log.error("[SERVER] Seed default admin failed: " + err.message, { stack: err.stack });
    }
  }
  app.listen(PORT, () => {
    log.info("=".repeat(60));
    log.info(`[SERVER] Transrewrt server running at http://localhost:${PORT}`);
    log.info(`[SERVER] Config path: ${CONFIG_PATH}`);
    log.info("[SERVER] Loading initial config...");
    const initialConfig = configFile.readConfig();
    if (ENV_API_KEY) {
      log.info(
        "[SERVER] API Key is being loaded from environment variable API_KEY",
      );
    } else if (initialConfig.api_key) {
      log.info(
        `[SERVER] API Key present in initial config: ${initialConfig.api_key.substring(0, 8)}...`,
      );
    } else {
      log.info("[SERVER] No API Key in initial config");
    }
    if (ENV_KEY_SEED) {
      log.info("[SERVER] KEY_SEED is being loaded from environment variable KEY_SEED");
    }
    log.info("[SERVER] Server ready to accept requests");
    log.info("=".repeat(60));
  });
}

startServer();
