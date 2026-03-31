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
const createApiLlmRouter = require("./routes/apiLlm");
const createCallsRouter = require("./routes/calls");
const createCustomPromptsRouter = require("./routes/customPrompts");
const createUsersRouter = require("./routes/users");
const createConfigBackupRouter = require("./routes/configBackup");
const { listLlmEnvVarsPresent } = require("../shared/llm");

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
/** Docker layout: /app/server/index.js + /app/build_timestamp (one level up). Dev: src/server + repo-root file (two levels up). */
function resolveBuildTimestampPath() {
  const dockerLayout = path.join(__dirname, "..", "build_timestamp");
  const devLayout = path.join(__dirname, "..", "..", "build_timestamp");
  if (fs.existsSync(dockerLayout)) return dockerLayout;
  if (fs.existsSync(devLayout)) return devLayout;
  return devLayout;
}
const BUILD_TIMESTAMP_PATH = resolveBuildTimestampPath();

/** Docker: /app/THIRD-PARTY-LICENSES.txt. Dev: repo root via src/server → ../.. */
function resolveThirdPartyLicensesPath() {
  const oneUp = path.join(__dirname, "..", "THIRD-PARTY-LICENSES.txt");
  const twoUp = path.join(__dirname, "..", "..", "THIRD-PARTY-LICENSES.txt");
  if (fs.existsSync(oneUp)) return oneUp;
  if (fs.existsSync(twoUp)) return twoUp;
  return null;
}

const DEV_WEB = process.env.DEV_WEB === "true";

const dataDir = path.dirname(CONFIG_PATH);
const dbPath = path.join(dataDir, "transrewrt.db");
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
log.info(`[SERVER] Database path: ${dbPath}`);
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
  createConfigRouter(configFile, DEFAULT_CONFIG_PATH, appDb),
);
app.use("/api/auth", auth.router);

app.use(
  "/api",
  createStatusRouter(configFile.readConfig, BUILD_TIMESTAMP_PATH, log),
);
app.use(
  "/api",
  createApiLlmRouter(
    configFile.readConfig,
    auth.setSessionRefreshCookie,
    log,
  ),
);
app.use(
  "/api",
  createCallsRouter(appDb.getDb, auth.setSessionRefreshCookie, log),
);
app.use("/api", createUsersRouter(appDb.getDb, log, appDb, configFile, DEFAULT_CONFIG_PATH));
app.use(
  "/api",
  createConfigBackupRouter(configFile, appDb.getDb, appDb, dataDir, DEFAULT_CONFIG_PATH, log),
);
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

app.get("/THIRD-PARTY-LICENSES.txt", (req, res) => {
  const licensePath = resolveThirdPartyLicensesPath();
  if (!licensePath) {
    return res.status(404).type("text/plain").send("Third-party licenses file not found.");
  }
  return res.type("text/plain; charset=utf-8").sendFile(path.resolve(licensePath));
});

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
      await appDb.seedDefaultAdmin(configFile, DEFAULT_CONFIG_PATH);
      appDb.assignCustomPromptsToAdmin();
    } catch (err) {
      log.error("[SERVER] Seed default admin failed: " + err.message, { stack: err.stack });
    }
  }

  const llmEnvSet = listLlmEnvVarsPresent();
  log.info(
    llmEnvSet.length > 0
      ? `[SERVER] LLM environment variables set: ${llmEnvSet.join(", ")}`
      : "[SERVER] LLM environment variables set: (none; keys may load from config file only)",
  );

  app.listen(PORT, () => {
    log.info("=".repeat(60));
    log.info(`[SERVER] Transrewrt server running at http://localhost:${PORT}`);
    log.info(`[SERVER] Config path: ${CONFIG_PATH}`);
    log.info("[SERVER] Loading initial config...");
    log.info("[SERVER] Server ready to accept requests");
    log.info("=".repeat(60));
  });
}

startServer();
