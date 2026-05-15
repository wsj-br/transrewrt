/**
 * Dev-only skills catalog editor: serves static UI + JSON APIs.
 * Run: pnpm run dev:skills-editor (from repo root). Uses `process.env` only (e.g. export `OPENROUTER_API_KEY` in the same shell, or configure your tool to pass env vars into the Node process). Does not read `.env`. `OPENROUTER_API_KEY` is required for Test model and Translate missing; the model list uses the public OpenRouter /models catalog (same breadth as Settings when online).
 */

const path = require("path");
const fs = require("fs");
const https = require("https");
const { spawn } = require("child_process");
const express = require("express");

const ROOT = path.join(__dirname, "..", "..");

const {
  mergeKeys,
  getAllModels,
  resolveEngine,
  engineConfigured,
  OPENROUTER_BASE,
  listLlmEnvVarsPresent,
} = require("../../src/shared/llm/index.js");
const { OPENROUTER_PROVIDER } = require("../../src/shared/openRouterProviderRouting.js");
const { parseSkillsJson } = require("../../src/shared/skillsCatalog.js");

const REPO_SKILLS_PATH = path.join(ROOT, "regular-mode-config", "skills.json");
const UI_LANGUAGES_PATH = path.join(ROOT, "src", "renderer", "locales", "ui-languages.json");
const CONFIG_DEFAULT_PATH = path.join(ROOT, "src", "config-defaults", "config_default.json");
const DATA_SKILLS_PATH =
  process.env.SKILLS_EDITOR_DATA_SKILLS_PATH || path.join(ROOT, "data", "skills.json");

const FREE_MODEL_ID = "openrouter/openrouter/free";
const HOST = process.env.SKILLS_EDITOR_HOST || "127.0.0.1";
const PORT = Number(process.env.SKILLS_EDITOR_PORT) || 8765;

/** URL shown in logs / opened in the default browser (0.0.0.0 is not a valid browser host). */
function publicEditorUrl() {
  const h =
    HOST === "0.0.0.0" || HOST === "::" || HOST === "[::]" ? "127.0.0.1" : HOST === "::1" ? "127.0.0.1" : HOST;
  return `http://${h}:${PORT}/`;
}

function openDefaultBrowser(url) {
  const skip = process.env.SKILLS_EDITOR_NO_OPEN;
  if (skip === "1" || skip === "true" || skip === "yes") return;
  /** Detached + unref so the browser launcher never keeps (or destabilizes) the Node event loop. */
  const launch = (file, args) => {
    try {
      const child = spawn(file, args, {
        detached: true,
        stdio: "ignore",
        windowsHide: true,
      });
      child.on("error", (err) => {
        console.warn("[skills-editor] Could not open browser:", err.message);
      });
      child.unref();
    } catch (err) {
      console.warn("[skills-editor] Could not open browser:", err.message);
    }
  };
  if (process.platform === "win32") {
    launch("cmd", ["/c", "start", "", url]);
  } else if (process.platform === "darwin") {
    launch("open", [url]);
  } else {
    launch("xdg-open", [url]);
  }
}

function readJsonFile(p) {
  try {
    const raw = fs.readFileSync(p, "utf8");
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

function getSourceLocale() {
  const cfg = readJsonFile(CONFIG_DEFAULT_PATH);
  const s = cfg && typeof cfg.source_locale === "string" ? cfg.source_locale.trim() : "";
  return s || "en-GB";
}

function loadUiLanguages() {
  const arr = readJsonFile(UI_LANGUAGES_PATH);
  return Array.isArray(arr) ? arr : [];
}

function validateCatalog(obj) {
  const text = JSON.stringify(obj);
  return parseSkillsJson(text);
}

function atomicWriteUtf8(filePath, contents) {
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  const tmp = `${filePath}.${process.pid}.${Date.now()}.tmp`;
  fs.writeFileSync(tmp, contents, "utf8");
  fs.renameSync(tmp, filePath);
}

function saveSkillsCatalog(catalog) {
  const validated = validateCatalog(catalog);
  if (!validated) {
    const err = new Error("Invalid skills catalog (expected version, skills array, etc.)");
    err.status = 400;
    throw err;
  }
  validated.updated_at = new Date().toISOString();
  const serialized = `${JSON.stringify(validated, null, 2)}\n`;
  atomicWriteUtf8(REPO_SKILLS_PATH, serialized);
  try {
    atomicWriteUtf8(DATA_SKILLS_PATH, serialized);
  } catch (e) {
    const err = new Error(
      `Saved repo catalog but failed to copy to data dir (${DATA_SKILLS_PATH}): ${e.message}`,
    );
    err.status = 500;
    err.dataMirrorError = true;
    throw err;
  }
  return validated;
}

function filterOpenRouterModels(models) {
  const list = Array.isArray(models) ? models : [];
  const out = list.filter((m) => m && typeof m.id === "string" && m.id.startsWith("openrouter/"));
  const ids = new Set(out.map((m) => m.id));
  if (!ids.has(FREE_MODEL_ID)) {
    out.unshift({
      id: FREE_MODEL_ID,
      displayId: openRouterPickerDisplayId(FREE_MODEL_ID),
      name: "OpenRouter Free",
      top_provider: "openrouter",
      pricing: { prompt: 0, completion: 0 },
    });
  }
  return out.map((m) => ({
    ...m,
    displayId: m.displayId || openRouterPickerDisplayId(m.id),
  }));
}

/** Strip the routing prefix for picker labels (matches `modelHeaderDisplayId` in the app). */
function openRouterPickerDisplayId(canonicalId) {
  const id = String(canonicalId || "").trim();
  if (id.startsWith("openrouter/")) return id.slice("openrouter/".length);
  return id;
}

function openRouterCanonicalFromApiModelId(apiId) {
  const inner = String(apiId || "").trim();
  if (!inner) return "";
  return inner.startsWith("openrouter/") ? inner : `openrouter/${inner}`;
}

function topProviderStringFromRow(row) {
  const tp = row.top_provider;
  if (typeof tp === "string" && tp.trim()) return tp.trim();
  return "openrouter";
}

/**
 * @param {string} urlStr
 * @param {Record<string, string>} headers
 * @returns {Promise<unknown>}
 */
function fetchOpenRouterModelsJsonHttps(urlStr, headers) {
  return new Promise((resolve, reject) => {
    const u = new URL(urlStr);
    const opts = {
      hostname: u.hostname,
      port: u.port || 443,
      path: `${u.pathname}${u.search}`,
      method: "GET",
      headers,
    };
    const req = https.request(opts, (res) => {
      const chunks = [];
      res.on("data", (c) => chunks.push(c));
      res.on("end", () => {
        const body = Buffer.concat(chunks).toString("utf8");
        if (res.statusCode < 200 || res.statusCode >= 300) {
          reject(new Error(`OpenRouter HTTPS ${res.statusCode}: ${body.slice(0, 300)}`));
          return;
        }
        try {
          resolve(JSON.parse(body));
        } catch (err) {
          reject(err);
        }
      });
    });
    req.on("error", reject);
    req.setTimeout(120000, () => {
      req.destroy();
      reject(new Error("OpenRouter /models request timeout"));
    });
    req.end();
  });
}

async function fetchOpenRouterModelsJson(keysMap) {
  const orKey = (keysMap.openrouter_api_key || "").trim();
  const headers = {
    Accept: "application/json",
    "HTTP-Referer": "https://github.com/wsj-br/transrewrt",
    "X-Title": "Transrewrt skills-editor (dev)",
    "User-Agent":
      "Mozilla/5.0 (compatible; Transrewrt-skills-editor/1.0; +https://github.com/wsj-br/transrewrt)",
  };
  if (orKey) headers.Authorization = `Bearer ${orKey}`;
  const url = `${OPENROUTER_BASE}/models`;
  try {
    const res = await fetch(url, { headers });
    if (!res.ok) {
      const t = await res.text().catch(() => "");
      const err = new Error(`OpenRouter GET /models failed: HTTP ${res.status} ${t.slice(0, 200)}`);
      err.status = res.status;
      throw err;
    }
    return await res.json();
  } catch (e) {
    console.warn("[skills-editor] fetch() for OpenRouter /models failed, retrying via https:", e.message);
    return fetchOpenRouterModelsJsonHttps(url, headers);
  }
}

/**
 * Full OpenRouter catalog for the dev UI (matches Settings → Models OpenRouter rows).
 * Uses GET /v1/models which works without an API key; optional Bearer for key-specific behaviour.
 * @param {Record<string, string>} keysMap
 * @returns {Promise<Array<{ id: string, displayId: string, name: string, top_provider?: string, pricing: { prompt: number, completion: number } }>>}
 */
async function fetchOpenRouterPublicModelsList(keysMap) {
  const json = await fetchOpenRouterModelsJson(keysMap);
  const rows = Array.isArray(json.data) ? json.data : [];
  const byId = new Map();
  for (const row of rows) {
    if (!row || typeof row.id !== "string") continue;
    const canonical = openRouterCanonicalFromApiModelId(row.id);
    if (!canonical) continue;
    const p = parseFloat(row.pricing?.prompt);
    const c = parseFloat(row.pricing?.completion);
    byId.set(canonical, {
      id: canonical,
      displayId: openRouterPickerDisplayId(canonical),
      name: (typeof row.name === "string" && row.name.trim()) || openRouterPickerDisplayId(canonical),
      top_provider: topProviderStringFromRow(row),
      pricing: {
        prompt: Number.isFinite(p) ? p : 0,
        completion: Number.isFinite(c) ? c : 0,
      },
    });
  }
  const out = Array.from(byId.values());
  if (out.length === 0) {
    throw new Error("OpenRouter /models returned no models (empty or invalid `data` array)");
  }
  console.log(`[skills-editor] OpenRouter catalog: ${out.length} models`);
  return out;
}

async function openRouterChatNonStream({
  keysMap,
  canonicalModelId,
  messages,
  temperature = 0,
  max_tokens = 256,
}) {
  const { engine, innerModelId } = resolveEngine(canonicalModelId);
  if (engine !== "openrouter") {
    const err = new Error("Only OpenRouter models are supported");
    err.status = 400;
    throw err;
  }
  if (!engineConfigured("openrouter", keysMap)) {
    const err = new Error("OpenRouter API key is not configured (OPENROUTER_API_KEY)");
    err.status = 400;
    throw err;
  }
  const apiKey = (keysMap.openrouter_api_key || "").trim();
  const body = {
    model: innerModelId,
    messages,
    temperature,
    max_tokens,
    provider: OPENROUTER_PROVIDER,
    stream: false,
  };
  const t0 = Date.now();
  const res = await fetch(`${OPENROUTER_BASE}/chat/completions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
      "HTTP-Referer": "https://github.com/wsj-br/transrewrt",
      "X-Title": "Transrewrt skills-editor (dev)",
    },
    body: JSON.stringify(body),
  });
  const latencyMs = Date.now() - t0;
  const errText = await res.text().catch(() => "");
  if (!res.ok) {
    let msg = `OpenRouter HTTP ${res.status}`;
    try {
      const j = JSON.parse(errText);
      if (j?.error?.message) msg = j.error.message;
    } catch {
      if (errText) msg = errText.slice(0, 500);
    }
    const err = new Error(msg);
    err.status = res.status;
    err.latencyMs = latencyMs;
    throw err;
  }
  let data;
  try {
    data = JSON.parse(errText);
  } catch {
    const err = new Error("Invalid JSON from OpenRouter");
    err.status = 502;
    err.latencyMs = latencyMs;
    throw err;
  }
  const content = data?.choices?.[0]?.message?.content;
  const text = typeof content === "string" ? content : "";
  return { text: text.trim(), latencyMs, raw: data };
}

function pickLocaleString(map, key) {
  if (!map || typeof map !== "object") return "";
  const k = String(key || "").trim();
  if (!k) return "";
  if (typeof map[k] === "string" && map[k].trim()) return map[k];
  const lower = k.toLowerCase();
  for (const [code, value] of Object.entries(map)) {
    if (code.toLowerCase() === lower && typeof value === "string" && value.trim()) return value;
  }
  return "";
}

function isMissingTranslation(map, localeCode) {
  return !pickLocaleString(map, localeCode);
}

async function translateSkillLocale({
  keysMap,
  modelId,
  sourceLocale,
  skill,
  targetLocale,
  targetEnglishName,
}) {
  const needName = isMissingTranslation(skill.translated_name, targetLocale);
  const needDesc = isMissingTranslation(skill.translated_description, targetLocale);
  if (!needName && !needDesc) {
    return { skipped: true };
  }

  const jsonKeys = [needName ? "t_name" : null, needDesc ? "t_desc" : null].filter(Boolean).join(" and ");
  const system = `You translate short UI strings for a desktop app skill picker. Reply with ONLY a compact JSON object (no markdown fences) with keys: ${jsonKeys}. Values must be plain strings in the target language. Preserve meaning; stay concise like the source.`;

  const parts = [];
  parts.push(`Target locale code: ${targetLocale}`);
  if (targetEnglishName) parts.push(`Target language (English name): ${targetEnglishName}`);
  parts.push(`Source locale: ${sourceLocale}`);
  parts.push(`Skill id: ${skill.id}`);
  if (needName) parts.push(`Source name: ${JSON.stringify(skill.name || "")}`);
  if (needDesc) parts.push(`Source description: ${JSON.stringify(skill.description || "")}`);

  const userMsg = `${parts.join("\n")}\n\nReturn JSON only, e.g. {"t_name":"...","t_desc":"..."} — omit keys you were not asked for.`;

  const { text } = await openRouterChatNonStream({
    keysMap,
    canonicalModelId: modelId,
    messages: [
      { role: "system", content: system },
      { role: "user", content: userMsg },
    ],
    temperature: 0.2,
    max_tokens: 2048,
  });

  let parsed;
  try {
    const cleaned = text.replace(/^[\s`]*json\s*/i, "").replace(/```json\n?/gi, "").replace(/```\n?/g, "").trim();
    parsed = JSON.parse(cleaned);
  } catch {
    return { error: `Could not parse translation JSON for ${targetLocale}: ${text.slice(0, 200)}` };
  }

  const out = {};
  if (needName && typeof parsed.t_name === "string" && parsed.t_name.trim()) {
    out.t_name = parsed.t_name.trim();
  } else if (needName) {
    return { error: `Missing t_name in model response for ${targetLocale}` };
  }
  if (needDesc && typeof parsed.t_desc === "string" && parsed.t_desc.trim()) {
    out.t_desc = parsed.t_desc.trim();
  } else if (needDesc) {
    return { error: `Missing t_desc in model response for ${targetLocale}` };
  }
  return { ok: true, ...out };
}

async function translateSkillLocaleCaught(params) {
  try {
    return await translateSkillLocale(params);
  } catch (e) {
    return { error: e.message || String(e) };
  }
}

/**
 * Try primary OpenRouter model, then optional fallback if the first attempt fails.
 * @param {{ emit?: (o: object) => void, skill: object, targetLocale: string }} ctx
 */
async function translateSkillLocaleWithFallback({
  keysMap,
  primaryModelId,
  fallbackModelId,
  sourceLocale,
  skill,
  targetLocale,
  targetEnglishName,
  emit,
}) {
  const base = {
    keysMap,
    sourceLocale,
    skill,
    targetLocale,
    targetEnglishName,
  };
  let r = await translateSkillLocaleCaught({ ...base, modelId: primaryModelId });
  if (r.skipped) return { r, usedFallback: false };
  if (!r.error) return { r, usedFallback: false };

  const fb = String(fallbackModelId || "").trim();
  if (!fb.startsWith("openrouter/") || fb === primaryModelId) {
    return { r, usedFallback: false };
  }

  if (emit) {
    emit({
      type: "job",
      status: "retry",
      skillId: skill.id,
      locale: targetLocale,
      primaryError: r.error,
    });
  }

  const r2 = await translateSkillLocaleCaught({ ...base, modelId: fb });
  if (r2.skipped) {
    return { r, usedFallback: true };
  }
  if (!r2.error) {
    return { r: r2, usedFallback: true, primaryError: r.error };
  }
  return {
    r: {
      error: `Primary failed (${r.error}); fallback failed (${r2.error || "unknown"})`,
    },
    usedFallback: true,
    primaryError: r.error,
  };
}

async function runPool(items, concurrency, worker) {
  let i = 0;
  async function runner() {
    while (i < items.length) {
      const idx = i++;
      const item = items[idx];
      await worker(item, idx);
    }
  }
  const n = Math.min(concurrency, items.length || 1);
  await Promise.all(Array.from({ length: n }, () => runner()));
}

function mirrorSourceLocaleIntoMaps(skills, sourceLocale) {
  for (const skill of skills) {
    if (!skill || typeof skill !== "object") continue;
    if (!skill.translated_name || typeof skill.translated_name !== "object") skill.translated_name = {};
    if (!skill.translated_description || typeof skill.translated_description !== "object") {
      skill.translated_description = {};
    }
    skill.translated_name[sourceLocale] = skill.name || "";
    skill.translated_description[sourceLocale] = skill.description || "";
  }
}

function buildTranslateJobs(validated, sourceLocale, uiLangs) {
  const targets = uiLangs.filter((row) => row && row.code && row.code !== sourceLocale);
  const jobs = [];
  for (const skill of validated.skills) {
    if (!skill || typeof skill.id !== "string") continue;
    for (const row of targets) {
      const code = row.code;
      const needName = isMissingTranslation(skill.translated_name, code);
      const needDesc = isMissingTranslation(skill.translated_description, code);
      if (!needName && !needDesc) continue;
      jobs.push({
        skill,
        targetLocale: code,
        targetEnglishName: row.englishName || row.label || code,
        needName,
        needDesc,
      });
    }
  }
  return jobs;
}

/**
 * @param {object} p
 * @param {{ write: (chunk: string) => void }} [p.resNdjson] If set, writes NDJSON lines for progress (does not end response).
 * @returns {Promise<{ filled: number, errors: string[] }>}
 */
async function runTranslateMissingJobs({
  validated,
  primaryModelId,
  fallbackModelId,
  keysMap,
  sourceLocale,
  uiLangs,
  resNdjson,
}) {
  const jobs = buildTranslateJobs(validated, sourceLocale, uiLangs);
  const errors = [];
  let filled = 0;
  const concurrency = 4;

  const emit = (obj) => {
    if (resNdjson) resNdjson.write(`${JSON.stringify(obj)}\n`);
  };

  let missingSlots = 0;
  for (const j of jobs) {
    missingSlots += (j.needName ? 1 : 0) + (j.needDesc ? 1 : 0);
  }
  emit({ type: "start", totalJobs: jobs.length, missingSlots });

  await runPool(jobs, concurrency, async (job) => {
    const { r, usedFallback } = await translateSkillLocaleWithFallback({
      keysMap,
      primaryModelId,
      fallbackModelId,
      sourceLocale,
      skill: job.skill,
      targetLocale: job.targetLocale,
      targetEnglishName: job.targetEnglishName,
      emit,
    });
    if (r.skipped) {
      emit({
        type: "job",
        status: "skipped",
        skillId: job.skill.id,
        locale: job.targetLocale,
      });
      return;
    }
    if (r.error) {
      const msg = `${job.skill.id} / ${job.targetLocale}: ${r.error}`;
      errors.push(msg);
      emit({
        type: "job",
        status: "error",
        skillId: job.skill.id,
        locale: job.targetLocale,
        error: r.error,
      });
      return;
    }
    if (!job.skill.translated_name || typeof job.skill.translated_name !== "object") {
      job.skill.translated_name = {};
    }
    if (!job.skill.translated_description || typeof job.skill.translated_description !== "object") {
      job.skill.translated_description = {};
    }
    let nameDone = false;
    let descDone = false;
    if (r.t_name) {
      job.skill.translated_name[job.targetLocale] = r.t_name;
      filled++;
      nameDone = true;
    }
    if (r.t_desc) {
      job.skill.translated_description[job.targetLocale] = r.t_desc;
      filled++;
      descDone = true;
    }
    emit({
      type: "job",
      status: "ok",
      skillId: job.skill.id,
      locale: job.targetLocale,
      name: nameDone,
      desc: descDone,
      usedFallback: Boolean(usedFallback),
    });
  });

  mirrorSourceLocaleIntoMaps(validated.skills, sourceLocale);
  return { filled, errors };
}

const app = express();
app.use(express.json({ limit: "32mb" }));

app.get("/api/health", (_req, res) => {
  res.json({ ok: true });
});

app.get("/api/meta", (_req, res) => {
  const sourceLocale = getSourceLocale();
  res.json({
    sourceLocale,
    repoSkillsPath: path.relative(ROOT, REPO_SKILLS_PATH),
    dataSkillsPath: path.relative(ROOT, DATA_SKILLS_PATH),
    repoSkillsAbsolute: REPO_SKILLS_PATH,
    dataSkillsAbsolute: DATA_SKILLS_PATH,
  });
});

app.get("/api/ui-languages", (_req, res) => {
  res.json(loadUiLanguages());
});

app.get("/api/skills", (_req, res) => {
  try {
    const raw = fs.readFileSync(REPO_SKILLS_PATH, "utf8");
    let data;
    try {
      data = JSON.parse(raw);
    } catch (e) {
      const hint = e.message || String(e);
      return res.status(400).json({
        error:
          "The skills catalog could not be loaded because the file is not valid JSON. " +
          "Open regular-mode-config/skills.json in your editor and fix the syntax—often a comma after the last item in a list, or a missing } or ]. " +
          `(Details: ${hint})`,
      });
    }
    if (!data || typeof data !== "object" || !Array.isArray(data.skills)) {
      return res.status(400).json({
        error:
          "The skills catalog file is valid JSON but is not in the shape this editor expects. " +
          "The root of the file should be one object with a property named \"skills\" whose value is an array of skill objects. " +
          "Compare with the stock regular-mode-config/skills.json in the repository if you are unsure.",
      });
    }
    res.json(data);
  } catch (e) {
    if (e.code === "ENOENT") {
      const rel = path.relative(ROOT, REPO_SKILLS_PATH).replace(/\\/g, "/");
      return res.status(404).json({
        error:
          "The skills catalog file was not found. " +
          `The editor reads ${rel} in your project copy. Restore that file (for example from version control) or run the project from the repository root.`,
      });
    }
    console.error("[skills-editor] GET /api/skills:", e);
    res.status(500).json({
      error:
        "Something went wrong while reading the skills catalog from disk. " +
        "Check that the file is not open in another program with a lock, and that you have permission to read it. If the problem continues, restart the skills editor server.",
    });
  }
});

app.put("/api/skills", (req, res) => {
  try {
    const saved = saveSkillsCatalog(req.body);
    res.json({ ok: true, catalog: saved });
  } catch (e) {
    const status = e.status || 500;
    res.status(status).json({ error: e.message || String(e), dataMirrorError: Boolean(e.dataMirrorError) });
  }
});

app.get("/api/models", async (_req, res) => {
  try {
    const keysMap = mergeKeys({}, process.env);
    let list;
    try {
      list = await fetchOpenRouterPublicModelsList(keysMap);
    } catch (e) {
      console.warn("[skills-editor] OpenRouter /models fetch failed, falling back to getAllModels:", e.message);
      const models = await getAllModels(keysMap);
      list = filterOpenRouterModels(models);
      return res.json({ data: list, source: "getAllModels_fallback" });
    }
    const data = filterOpenRouterModels(list);
    res.json({ data, source: "openrouter_public_models" });
  } catch (e) {
    res.status(500).json({ error: e.message || String(e) });
  }
});

app.post("/api/skills/test-model", async (req, res) => {
  const modelId = req.body && typeof req.body.modelId === "string" ? req.body.modelId.trim() : "";
  if (!modelId.startsWith("openrouter/")) {
    return res.status(400).json({ ok: false, error: "modelId must be an OpenRouter canonical id (openrouter/...)" });
  }
  try {
    const keysMap = mergeKeys({}, process.env);
    const t0 = Date.now();
    const { text, latencyMs } = await openRouterChatNonStream({
      keysMap,
      canonicalModelId: modelId,
      messages: [{ role: "user", content: "Reply with exactly: OK" }],
      temperature: 0,
      max_tokens: 8,
    });
    const preview = text.slice(0, 200);
    res.json({ ok: true, latencyMs, preview, wallMs: Date.now() - t0 });
  } catch (e) {
    res.status(e.status && e.status >= 400 && e.status < 600 ? e.status : 500).json({
      ok: false,
      error: e.message || String(e),
      status: e.status,
      latencyMs: e.latencyMs,
    });
  }
});

app.post("/api/skills/translate-missing", async (req, res) => {
  const catalog = req.body && req.body.catalog ? req.body.catalog : null;
  const validated = validateCatalog(catalog);
  if (!validated) {
    return res.status(400).json({ error: "Invalid catalog in body" });
  }

  const bodyModelId =
    req.body && typeof req.body.modelId === "string" ? req.body.modelId.trim() : "";
  const fromCatalog =
    typeof validated.translation_model === "string" ? validated.translation_model.trim() : "";
  const primaryModelId = fromCatalog || bodyModelId;
  if (!primaryModelId.startsWith("openrouter/")) {
    return res.status(400).json({
      error: "catalog.translation_model must be an OpenRouter canonical id (openrouter/...)",
    });
  }

  const fallbackModelId =
    typeof validated.translation_model_fallback === "string"
      ? validated.translation_model_fallback.trim()
      : "";

  const sourceLocale = getSourceLocale();
  const uiLangs = loadUiLanguages();
  const keysMap = mergeKeys({}, process.env);
  if (!engineConfigured("openrouter", keysMap)) {
    return res.status(400).json({ error: "OPENROUTER_API_KEY is not set" });
  }

  const wantStream = String(req.query.stream || "") === "1";

  if (wantStream) {
    res.status(200);
    res.setHeader("Content-Type", "application/x-ndjson; charset=utf-8");
    res.setHeader("Cache-Control", "no-cache, no-transform");
    res.setHeader("Connection", "keep-alive");
    res.setHeader("X-Accel-Buffering", "no");
    if (typeof res.flushHeaders === "function") res.flushHeaders();

    let filled = 0;
    let errors = [];
    try {
      const result = await runTranslateMissingJobs({
        validated,
        primaryModelId,
        fallbackModelId,
        keysMap,
        sourceLocale,
        uiLangs,
        resNdjson: res,
      });
      filled = result.filled;
      errors = result.errors;
      const saved = saveSkillsCatalog(validated);
      res.write(
        `${JSON.stringify({
          type: "done",
          ok: true,
          filled,
          errors,
          catalog: saved,
        })}\n`,
      );
      res.end();
    } catch (e) {
      try {
        res.write(
          `${JSON.stringify({
            type: "done",
            ok: false,
            filled,
            errors: [...errors, e.message || String(e)],
            error: e.message || String(e),
            dataMirrorError: Boolean(e.dataMirrorError),
          })}\n`,
        );
      } catch {
        /* ignore */
      }
      res.end();
    }
    return;
  }

  let filled = 0;
  let errors = [];
  try {
    const result = await runTranslateMissingJobs({
      validated,
      primaryModelId,
      fallbackModelId,
      keysMap,
      sourceLocale,
      uiLangs,
      resNdjson: null,
    });
    filled = result.filled;
    errors = result.errors;
    const saved = saveSkillsCatalog(validated);
    res.json({
      ok: true,
      filled,
      errors,
      catalog: saved,
    });
  } catch (e) {
    const status = e.status || 500;
    res.status(status).json({
      ok: false,
      filled,
      errors: [...errors, e.message || String(e)],
      dataMirrorError: Boolean(e.dataMirrorError),
    });
  }
});

const publicDir = path.join(__dirname, "public");
app.use(express.static(publicDir));

// Do not pass a listen callback: Express wires that same function to `error` via `once()`,
// so EADDRINUSE still runs "success" logs while the server never binds, then Node exits ~0.
const server = app.listen(PORT, HOST);
server.on("error", (err) => {
  console.error("[skills-editor] HTTP server failed to start:", err.message || String(err));
  if (err.code === "EADDRINUSE") {
    console.error(
      `[skills-editor] Port ${PORT} is already in use. Set SKILLS_EDITOR_PORT to another port or stop the other process.`,
    );
  }
  process.exit(1);
});
server.on("listening", () => {
  const url = publicEditorUrl();
  console.log(`[skills-editor] ${url}`);
  console.log(`[skills-editor] Repo catalog: ${REPO_SKILLS_PATH}`);
  console.log(`[skills-editor] Data mirror:  ${DATA_SKILLS_PATH}`);
  const present = listLlmEnvVarsPresent();
  console.log(
    `[skills-editor] LLM env (non-empty): ${present.length ? present.join(", ") : "(none — set OPENROUTER_API_KEY for this Node process, e.g. same shell: $env:OPENROUTER_API_KEY on Windows)"}`,
  );
  console.log("[skills-editor] Press Ctrl+C to stop.");
  try {
    if (process.stdin.isTTY) process.stdin.resume();
  } catch {
    /* ignore */
  }
  setTimeout(() => openDefaultBrowser(url), 400);
});
