/**
 * Node-only LLM layer: multi-llm-ts + OpenRouter streaming for generation-id / exact cost.
 * Used by Electron main and the web Express server.
 */

const {
  igniteModel,
  loadModels,
  Message,
  defaultCapabilities,
} = require("multi-llm-ts");

const { OPENROUTER_PROVIDER } = require("../openRouterProviderRouting");
const { streamChoiceToString } = require("./streamDeltaContent");
const {
  extractApiErrorMessage,
  isOpenRouterKeyAuthFailureMessage,
  normalizeOpenRouterKeyErrorMessage,
} = require("../apiErrorMessage.js");

const OPENROUTER_BASE = "https://openrouter.ai/api/v1";

/** @type {Record<string, string>} config key / env internal name -> multi-llm-ts engine id */
const ENGINE_IDS = [
  "openrouter",
  "openai",
  "anthropic",
  "google",
  "deepseek",
  "groq",
  "mistralai",
  "ollama",
  "xai",
  "custom",
  "cerebras",
];

const CONFIG_KEY_BY_ENGINE = {
  openrouter: "openrouter_api_key",
  openai: "openai_api_key",
  anthropic: "anthropic_api_key",
  google: "google_api_key",
  deepseek: "deepseek_api_key",
  groq: "groq_api_key",
  mistralai: "mistralai_api_key",
  ollama: "ollama_base_url",
  xai: "xai_api_key",
  custom: "custom_provider_api_key",
  cerebras: "cerebras_api_key",
};

/** Extra config/env keys for the custom OpenAI-compatible provider (name + URL). */
const CUSTOM_CONFIG_KEYS = {
  name: "custom_provider_name",
  url: "custom_provider_url",
  apiKey: "custom_provider_api_key",
};

const CUSTOM_ENV_KEYS = {
  name: "CUSTOM_PROVIDER_NAME",
  url: "CUSTOM_PROVIDER_URL",
  apiKey: "CUSTOM_PROVIDER_API_KEY",
};

/** Config keys stored encrypted on disk (Electron). */
const ENCRYPTED_CONFIG_KEYS = ENGINE_IDS.filter(
  (e) => e !== "ollama" && e !== "custom",
)
  .map((e) => CONFIG_KEY_BY_ENGINE[e])
  .concat([CUSTOM_CONFIG_KEYS.apiKey]);

const ENV_KEY_BY_ENGINE = {
  openrouter: "OPENROUTER_API_KEY",
  openai: "OPENAI_API_KEY",
  anthropic: "ANTHROPIC_API_KEY",
  google: "GOOGLE_API_KEY",
  deepseek: "DEEPSEEK_API_KEY",
  groq: "GROQ_API_KEY",
  mistralai: "MISTRAL_API_KEY",
  ollama: "OLLAMA_URL",
  xai: "XAI_API_KEY",
  custom: "CUSTOM_PROVIDER_API_KEY",
  cerebras: "CEREBRAS_API_KEY",
};

/** In-memory catalog: engine -> ChatModel[] (from last getAllModels). */
const catalogByEngine = {};

/** OpenRouter list-models pricing: id -> { prompt, completion } as dollars per token. */
let pricingCache = {
  fetchedAt: 0,
  keyFp: "",
  byId: /** @type {Record<string, { prompt: number; completion: number }>} */ ({}),
  /** lower-case OpenRouter model id -> canonical id key in byId (for case-insensitive match). */
  byIdLower: /** @type {Record<string, string>} */ ({}),
};

/**
 * When several OpenRouter rows share the same trailing slug (e.g. `a/foo` and `b/foo`), prefer this vendor.
 * Used only for tie-breaking; primary match is by suffix after the last `/`.
 */
const OPENROUTER_TIEBREAK_VENDOR_BY_ENGINE = {
  google: "google",
  openai: "openai",
  anthropic: "anthropic",
  deepseek: "deepseek",
  groq: "groq",
  mistralai: "mistralai",
  xai: "x-ai",
};

const PRICING_TTL_MS = 24 * 60 * 60 * 1000;

const FREE_INNER_ID = "openrouter/free";

/**
 * @param {Record<string, string>} [keysMap]
 * @returns {string}
 */
function customProviderPrefix(keysMap) {
  if (!keysMap) return "";
  return (keysMap[CUSTOM_CONFIG_KEYS.name] || "").trim();
}

/**
 * @param {string} canonicalId
 * @param {Record<string, string>} [keysMap]
 * @returns {{ engine: string, innerModelId: string }}
 */
function resolveEngine(canonicalId, keysMap) {
  const id = String(canonicalId || "").trim();
  if (!id) throw new Error("Model id is required");
  if (id.startsWith("openrouter/")) {
    const inner = id.slice("openrouter/".length);
    if (!inner) throw new Error("Invalid OpenRouter model id");
    return { engine: "openrouter", innerModelId: inner };
  }
  const slash = id.indexOf("/");
  if (slash === -1) {
    throw new Error(
      `Model id must be namespaced (e.g. openai/gpt-4o or openrouter/${FREE_INNER_ID}): ${id}`,
    );
  }
  const engine = id.slice(0, slash);
  const innerModelId = id.slice(slash + 1);
  if (engine === "custom") {
    if (!innerModelId) throw new Error("Invalid model id");
    return { engine: "custom", innerModelId };
  }
  const customPrefix = customProviderPrefix(keysMap);
  if (customPrefix && engine === customPrefix) {
    if (!innerModelId) throw new Error("Invalid model id");
    return { engine: "custom", innerModelId };
  }
  if (!ENGINE_IDS.includes(engine)) {
    throw new Error(`Unknown provider engine "${engine}" in model id`);
  }
  if (!innerModelId) throw new Error("Invalid model id");
  return { engine, innerModelId };
}

/**
 * Read a provider env var: missing or whitespace-only values are treated as unset ("").
 * @param {NodeJS.ProcessEnv} [env]
 * @param {string} key
 * @returns {string}
 */
function readEnvNonBlank(env, key) {
  if (!env || key == null) return "";
  const raw = env[key];
  if (raw == null) return "";
  const s = String(raw).trim();
  return s === "" ? "" : s;
}

/**
 * Build provider key map from plain config + process.env (config wins).
 * @param {Record<string, string|undefined>} config
 * @param {NodeJS.ProcessEnv} [env]
 * @returns {Record<string, string>}
 */
function mergeKeys(config, env = process.env) {
  const out = {};
  for (const engine of ENGINE_IDS) {
    const ck = CONFIG_KEY_BY_ENGINE[engine];
    const ek = ENV_KEY_BY_ENGINE[engine];
    const fromEnv = readEnvNonBlank(env, ek);
    const fromCfg =
      config && config[ck] != null ? String(config[ck]).trim() : "";
    out[ck] = fromCfg || fromEnv;
  }
  for (const field of ["name", "url"]) {
    const ck = CUSTOM_CONFIG_KEYS[field];
    const ek = CUSTOM_ENV_KEYS[field];
    const fromEnv = readEnvNonBlank(env, ek);
    const fromCfg =
      config && config[ck] != null ? String(config[ck]).trim() : "";
    out[ck] = fromCfg || fromEnv;
  }
  return out;
}

const PROVIDER_LABELS = {
  openrouter: "OpenRouter",
  openai: "OpenAI",
  anthropic: "Anthropic",
  google: "Google",
  deepseek: "DeepSeek",
  groq: "Groq",
  mistralai: "Mistral",
  ollama: "Ollama",
  xai: "xAI",
  custom: "Custom provider",
  cerebras: "Cerebras",
};

/**
 * @param {string} provider
 * @param {Record<string, string>} [keysMap]
 */
function providerDisplayName(provider, keysMap) {
  if (provider === "custom" && keysMap) {
    const name = (keysMap[CUSTOM_CONFIG_KEYS.name] || "").trim();
    if (name) return name;
  }
  return PROVIDER_LABELS[provider] || provider;
}

/**
 * English strings used as i18n keys for {@link testProviderAuth} success (renderer calls `t(key)`).
 */
const PROVIDER_TEST_SUCCESS_I18N = {
  ollamaOk: "Ollama configuration is working.",
  credentialsOk: "{{provider}} credentials are valid.",
};

/**
 * @param {string} provider
 * @param {string} value
 * @param {{ baseURL?: string, displayName?: string, apiKey?: string }} [extras]
 */
function buildProviderTestRequest(provider, value, extras = {}) {
  const normalized = String(value || "").trim();
  if (provider === "ollama") {
    const baseURL = normalized || "http://localhost:11434";
    const sanitizedBase = baseURL.replace(/\/+$/, "");
    return {
      url: `${sanitizedBase}/api/tags`,
      options: { method: "GET" },
    };
  }
  if (provider === "custom") {
    const displayName = String(extras.displayName || "").trim();
    const baseURL = String(extras.baseURL || "").trim().replace(/\/+$/, "");
    const apiKey = String(extras.apiKey || normalized || "").trim();
    if (!displayName || !baseURL || !apiKey) {
      return {
        missingMessage: "Custom provider name, URL, and API key are all required.",
      };
    }
    return {
      url: `${baseURL}/models`,
      options: {
        method: "GET",
        headers: { Authorization: `Bearer ${apiKey}` },
      },
      displayName,
    };
  }
  if (!normalized) {
    return { missingMessage: `${providerDisplayName(provider)} API key is required` };
  }
  switch (provider) {
    case "openrouter":
      return {
        url: `${OPENROUTER_BASE}/key`,
        options: {
          method: "GET",
          headers: {
            Authorization: `Bearer ${normalized}`,
            "HTTP-Referer": "https://github.com/wsj-br/transrewrt",
            "X-Title": "Transrewrt",
          },
        },
      };
    case "openai":
      return {
        url: "https://api.openai.com/v1/models",
        options: { method: "GET", headers: { Authorization: `Bearer ${normalized}` } },
      };
    case "anthropic":
      return {
        url: "https://api.anthropic.com/v1/models",
        options: {
          method: "GET",
          headers: {
            "x-api-key": normalized,
            "anthropic-version": "2023-06-01",
          },
        },
      };
    case "google":
      return {
        url: `https://generativelanguage.googleapis.com/v1beta/models?key=${encodeURIComponent(normalized)}`,
        options: { method: "GET" },
      };
    case "deepseek":
      return {
        url: "https://api.deepseek.com/models",
        options: { method: "GET", headers: { Authorization: `Bearer ${normalized}` } },
      };
    case "groq":
      return {
        url: "https://api.groq.com/openai/v1/models",
        options: { method: "GET", headers: { Authorization: `Bearer ${normalized}` } },
      };
    case "mistralai":
      return {
        url: "https://api.mistral.ai/v1/models",
        options: { method: "GET", headers: { Authorization: `Bearer ${normalized}` } },
      };
    case "xai":
      return {
        url: "https://api.x.ai/v1/models",
        options: { method: "GET", headers: { Authorization: `Bearer ${normalized}` } },
      };
    case "cerebras":
      return {
        url: "https://api.cerebras.ai/v1/models",
        options: { method: "GET", headers: { Authorization: `Bearer ${normalized}` } },
      };
    default:
      return { missingMessage: `Unsupported provider "${provider}"` };
  }
}

/**
 * @param {string} provider
 * @param {string} value
 * @param {{ baseURL?: string, displayName?: string, apiKey?: string, keysMap?: Record<string, string> }} [extras]
 * @returns {Promise<{ provider: string, ok: boolean, message: string, successI18n?: { key: string, params?: Record<string, string> } }>}
 */
async function testProviderAuth(provider, value, extras = {}) {
  const normalizedProvider = String(provider || "").trim();
  if (!ENGINE_IDS.includes(normalizedProvider)) {
    return {
      provider: normalizedProvider,
      ok: false,
      message: `Unsupported provider "${normalizedProvider}"`,
    };
  }

  const req = buildProviderTestRequest(normalizedProvider, value, extras);
  if (req.missingMessage) {
    return { provider: normalizedProvider, ok: false, message: req.missingMessage };
  }

  const displayName =
    req.displayName ||
    providerDisplayName(normalizedProvider, extras.keysMap);

  try {
    const response = await fetch(req.url, req.options);
    if (response.ok) {
      const successI18n =
        normalizedProvider === "ollama"
          ? { key: PROVIDER_TEST_SUCCESS_I18N.ollamaOk }
          : {
              key: PROVIDER_TEST_SUCCESS_I18N.credentialsOk,
              params: { provider: displayName },
            };
      const successMessage =
        normalizedProvider === "ollama"
          ? PROVIDER_TEST_SUCCESS_I18N.ollamaOk
          : `${displayName} credentials are valid.`;
      return {
        provider: normalizedProvider,
        ok: true,
        message: successMessage,
        successI18n,
      };
    }
    const body = await response.text().catch(() => "");
    let detail = `HTTP ${response.status}`;
    try {
      const parsed = body ? JSON.parse(body) : {};
      detail = extractApiErrorMessage(parsed, detail);
    } catch {
      if (body) detail = body.slice(0, 220);
    }
    if (normalizedProvider === "openrouter" && isOpenRouterKeyAuthFailureMessage(detail)) {
      return {
        provider: normalizedProvider,
        ok: false,
        message: normalizeOpenRouterKeyErrorMessage(detail),
      };
    }
    return {
      provider: normalizedProvider,
      ok: false,
      message: `${displayName} authentication failed: ${detail}`,
    };
  } catch (error) {
    return {
      provider: normalizedProvider,
      ok: false,
      message: `${displayName} test request failed: ${error.message}`,
    };
  }
}

/**
 * Which LLM-related env vars are non-empty (trimmed). Names match mergeKeys() / Docker docs.
 * @param {NodeJS.ProcessEnv} [env]
 * @returns {string[]}
 */
function listLlmEnvVarsPresent(env = process.env) {
  const names = [];
  for (const engine of ENGINE_IDS) {
    const ek = ENV_KEY_BY_ENGINE[engine];
    if (engine === "custom") {
      const allCustom = ["name", "url", "apiKey"].every((field) =>
        readEnvNonBlank(env, CUSTOM_ENV_KEYS[field]),
      );
      if (allCustom) {
        names.push(CUSTOM_ENV_KEYS.name);
        names.push(CUSTOM_ENV_KEYS.url);
        names.push(CUSTOM_ENV_KEYS.apiKey);
      }
      continue;
    }
    if (readEnvNonBlank(env, ek)) names.push(ek);
  }
  return names;
}

/**
 * @param {string} engine
 * @param {Record<string, string>} keysMap - mergeKeys() output
 */
function buildConfig(engine, keysMap) {
  if (engine === "ollama") {
    const url = (keysMap.ollama_base_url || "").trim() || "http://localhost:11434";
    return { baseURL: url.replace(/\/+$/, "") };
  }
  if (engine === "custom") {
    const baseURL = (keysMap[CUSTOM_CONFIG_KEYS.url] || "").trim().replace(/\/+$/, "");
    const apiKey = (keysMap[CUSTOM_CONFIG_KEYS.apiKey] || "").trim();
    return { baseURL, apiKey };
  }
  const ck = CONFIG_KEY_BY_ENGINE[engine];
  const apiKey = (keysMap[ck] || "").trim();
  return { apiKey };
}

function engineConfigured(engine, keysMap) {
  if (engine === "ollama") {
    return !!(keysMap.ollama_base_url || "").trim();
  }
  if (engine === "custom") {
    return (
      !!(keysMap[CUSTOM_CONFIG_KEYS.name] || "").trim() &&
      !!(keysMap[CUSTOM_CONFIG_KEYS.url] || "").trim() &&
      !!(keysMap[CUSTOM_CONFIG_KEYS.apiKey] || "").trim()
    );
  }
  const ck = CONFIG_KEY_BY_ENGINE[engine];
  return !!(keysMap[ck] || "").trim();
}

const OLLAMA_PROBE_MS = 4000;

/**
 * Cheap GET /api/tags so we skip loadModels when Ollama is down (avoids multi-llm-ts console spam).
 * @param {string} baseURL - e.g. http://localhost:11434
 */
async function isOllamaReachable(baseURL) {
  const base = String(baseURL || "").replace(/\/+$/, "");
  if (!base) return false;
  const url = `${base}/api/tags`;
  const ac = new AbortController();
  const t = setTimeout(() => ac.abort(), OLLAMA_PROBE_MS);
  try {
    const res = await fetch(url, { signal: ac.signal });
    return res.ok;
  } catch {
    return false;
  } finally {
    clearTimeout(t);
  }
}

function keyFingerprint(openrouterKey) {
  const k = (openrouterKey || "").trim();
  if (!k) return "";
  return `${k.length}:${k.slice(0, 6)}`;
}

/**
 * Refresh OpenRouter /models pricing map (24h TTL). The public endpoint returns pricing without auth;
 * if an API key is set, it is sent so the cache can match any key-specific behaviour. Previously we
 * skipped refresh when no key was configured, which left the cache empty and broke native-provider estimates.
 * @param {string} openrouterApiKey - optional; empty still fetches public catalog
 */
async function refreshOpenRouterPricingIfNeeded(openrouterApiKey) {
  const key = (openrouterApiKey || "").trim();
  const cacheMode = key ? `key:${keyFingerprint(key)}` : "public";
  const now = Date.now();
  if (
    pricingCache.keyFp === cacheMode &&
    now - pricingCache.fetchedAt < PRICING_TTL_MS &&
    Object.keys(pricingCache.byId).length > 0
  ) {
    return;
  }
  try {
    const headers = {
      "HTTP-Referer": "https://github.com/wsj-br/transrewrt",
      "X-Title": "Transrewrt",
    };
    if (key) {
      headers.Authorization = `Bearer ${key}`;
    }
    const res = await fetch(`${OPENROUTER_BASE}/models`, {
      headers,
    });
    if (!res.ok) return;
    const json = await res.json();
    const rows = json.data || [];
    const byId = {};
    const byIdLower = {};
    for (const row of rows) {
      if (!row?.id) continue;
      const p = parseFloat(row.pricing?.prompt);
      const c = parseFloat(row.pricing?.completion);
      byId[row.id] = {
        prompt: Number.isFinite(p) ? p : 0,
        completion: Number.isFinite(c) ? c : 0,
      };
      byIdLower[row.id.toLowerCase()] = row.id;
    }
    pricingCache = { fetchedAt: now, keyFp: cacheMode, byId, byIdLower };
  } catch {
    /* ignore */
  }
}

/**
 * @param {import('multi-llm-ts').ChatModel} chatModel
 * @param {string} engine
 * @returns {{ prompt: number, completion: number, known: boolean }}
 */
function pricingDetailsFromChatModel(chatModel, engine) {
  const meta = chatModel?.meta;
  if (engine === "openrouter" && meta?.pricing != null) {
    const p = parseFloat(meta.pricing.prompt);
    const c = parseFloat(meta.pricing.completion);
    return {
      prompt: Number.isFinite(p) ? p : 0,
      completion: Number.isFinite(c) ? c : 0,
      known: true,
    };
  }
  if (engine === "openrouter") {
    return { prompt: 0, completion: 0, known: false };
  }
  return { prompt: 0, completion: 0, known: false };
}

/**
 * Normalize a model id segment so minor formatting differences still match the OpenRouter
 * catalog (e.g. `Qwen3 14B` vs `Qwen 3 14B`, hyphen vs space). Case-insensitive; strips
 * whitespace, hyphens, and underscores; keeps "." so `2.5` does not merge with `25`.
 * @param {string} s
 * @returns {string}
 */
function normalizePricingSlugForMatch(s) {
  return String(s || "")
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "")
    .replace(/[-_]/g, "");
}

/**
 * Find OpenRouter /models pricing row by matching the trailing segment of each OpenRouter id
 * (e.g. `gemini-2.5-flash` matches `google/gemini-2.5-flash`). Case-insensitive on both sides.
 * If no exact suffix match, falls back to {@link normalizePricingSlugForMatch} on the suffix.
 * @param {string} engine - multi-llm-ts engine id (tie-break only when several vendors share one slug)
 * @param {string} innerModelId - model id from that provider's catalog
 * @returns {{ prompt: number, completion: number } | null}
 */
function lookupOpenRouterPricingRow(engine, innerModelId) {
  const id = String(innerModelId || "").trim();
  const byId = pricingCache.byId;
  if (!id || !byId || typeof byId !== "object") return null;

  const direct = byId[id];
  if (direct) return direct;

  const lowerMap = pricingCache.byIdLower || {};
  const canon = lowerMap[id.toLowerCase()];
  if (canon && byId[canon]) return byId[canon];

  const idLow = id.toLowerCase();
  /** @type {string[]} */
  let matches = [];
  for (const k of Object.keys(byId)) {
    const slash = k.lastIndexOf("/");
    const suf = slash >= 0 ? k.slice(slash + 1) : k;
    if (suf.toLowerCase() === idLow) {
      matches.push(k);
    }
  }
  if (matches.length === 0) {
    const idNorm = normalizePricingSlugForMatch(id);
    if (idNorm) {
      for (const k of Object.keys(byId)) {
        const slash = k.lastIndexOf("/");
        const suf = slash >= 0 ? k.slice(slash + 1) : k;
        if (normalizePricingSlugForMatch(suf) === idNorm) {
          matches.push(k);
        }
      }
    }
  }
  if (matches.length === 0) return null;
  if (matches.length === 1) return byId[matches[0]];
  const vendor = OPENROUTER_TIEBREAK_VENDOR_BY_ENGINE[engine];
  if (vendor) {
    const pfx = `${vendor}/`.toLowerCase();
    const pref = matches.filter((k) => k.toLowerCase().startsWith(pfx));
    if (pref.length === 1) return byId[pref[0]];
  }
  matches.sort();
  return byId[matches[0]];
}

/**
 * @param {string} engine
 * @param {string} innerModelId
 * @param {{ prompt_tokens?: number, completion_tokens?: number }} usage
 */
function estimateCostDollars(engine, innerModelId, usage) {
  const row = lookupOpenRouterPricingRow(engine, innerModelId);
  if (!row) return 0;
  const pt = usage?.prompt_tokens ?? 0;
  const ct = usage?.completion_tokens ?? 0;
  return pt * row.prompt + ct * row.completion;
}

/**
 * List models from a custom OpenAI-compatible endpoint.
 * @param {Record<string, string>} keysMap
 * @returns {Promise<import('multi-llm-ts').ChatModel[]>}
 */
async function loadCustomModels(keysMap) {
  const conf = buildConfig("custom", keysMap);
  const { baseURL, apiKey } = conf;
  if (!baseURL || !apiKey) return [];
  const res = await fetch(`${baseURL}/models`, {
    headers: { Authorization: `Bearer ${apiKey}` },
  });
  if (!res.ok) {
    throw new Error(`HTTP ${res.status}`);
  }
  const json = await res.json();
  const rows = json.data || [];
  const cap = defaultCapabilities?.capabilities || {
    tools: true,
    vision: false,
    reasoning: false,
    caching: false,
  };
  return rows
    .filter((row) => row?.id)
    .map((row) => ({
      id: row.id,
      name: row.name || row.id,
      capabilities: cap,
    }));
}

/**
 * @param {Record<string, string>} keysMap
 * @returns {Promise<Array<{ id: string, name: string, pricing: { prompt: number, completion: number }, pricingKnown: boolean, pricingEstimated?: boolean }>>}
 */
async function getAllModels(keysMap) {
  const orKey = (keysMap.openrouter_api_key || "").trim();
  await refreshOpenRouterPricingIfNeeded(orKey);

  const normalized = [];

  for (const engine of ENGINE_IDS) {
    if (!engineConfigured(engine, keysMap)) {
      catalogByEngine[engine] = [];
      continue;
    }
    const conf = buildConfig(engine, keysMap);
    if (engine === "ollama" && !(await isOllamaReachable(conf.baseURL))) {
      catalogByEngine[engine] = [];
      continue;
    }
    let list;
    let chat;
    try {
      if (engine === "custom") {
        chat = await loadCustomModels(keysMap);
        list = { chat };
      } else {
        list = await loadModels(engine, conf);
        chat = list?.chat || [];
      }
    } catch (e) {
      console.error(`[llm] loadModels(${engine}) failed:`, e.message);
      catalogByEngine[engine] = [];
      continue;
    }
    catalogByEngine[engine] = chat;
    for (const m of chat) {
      let canonical;
      if (engine === "custom") {
        const prefix = customProviderPrefix(keysMap);
        if (!prefix) continue;
        canonical = `${prefix}/${m.id}`;
      } else {
        canonical = `${engine}/${m.id}`;
      }
      const raw = pricingDetailsFromChatModel(m, engine);
      let prompt = raw.prompt;
      let completion = raw.completion;
      let pricingKnown = raw.known;
      let pricingEstimated = false;
      if (engine !== "openrouter" && orKey) {
        const est = lookupOpenRouterPricingRow(engine, m.id);
        if (est) {
          prompt = est.prompt;
          completion = est.completion;
          pricingKnown = true;
          pricingEstimated = true;
        }
      }
      normalized.push({
        id: canonical,
        name: m.name || m.id,
        pricing: { prompt, completion },
        pricingKnown,
        pricingEstimated,
      });
    }
  }

  if (orKey) {
    const freeCanonical = `openrouter/${FREE_INNER_ID}`;
    if (!normalized.some((x) => x.id === freeCanonical)) {
      normalized.push({
        id: freeCanonical,
        name: "OpenRouter (free)",
        pricing: { prompt: 0, completion: 0 },
        pricingKnown: true,
      });
    }
    const cap = defaultCapabilities?.capabilities || {
      tools: true,
      vision: false,
      reasoning: false,
      caching: false,
    };
    catalogByEngine.openrouter = catalogByEngine.openrouter || [];
    if (!catalogByEngine.openrouter.some((m) => m.id === FREE_INNER_ID)) {
      catalogByEngine.openrouter.push({
        id: FREE_INNER_ID,
        name: "OpenRouter (free)",
        capabilities: cap,
        meta: { pricing: { prompt: "0", completion: "0" } },
      });
    }
  }

  return normalized;
}

/**
 * Load chat models for one engine if the catalog slot is empty.
 * @param {string} engine
 * @param {Record<string, string>} keysMap
 */
async function ensureCatalogForEngine(engine, keysMap) {
  if (engine === "openrouter") return;
  const existing = catalogByEngine[engine];
  if (existing && existing.length > 0) return;
  if (!engineConfigured(engine, keysMap)) return;
  const conf = buildConfig(engine, keysMap);
  if (engine === "ollama" && !(await isOllamaReachable(conf.baseURL))) {
    catalogByEngine[engine] = [];
    return;
  }
  try {
    if (engine === "custom") {
      catalogByEngine[engine] = await loadCustomModels(keysMap);
    } else {
      const list = await loadModels(engine, conf);
      catalogByEngine[engine] = list?.chat || [];
    }
  } catch (e) {
    console.error(`[llm] ensureCatalogForEngine(${engine}):`, e.message);
    catalogByEngine[engine] = [];
  }
}

/**
 * @param {string} engine
 * @param {string} innerModelId
 * @returns {import('multi-llm-ts').ChatModel}
 */
function getChatModelFromCatalog(engine, innerModelId) {
  const list = catalogByEngine[engine] || [];
  const found = list.find((m) => m.id === innerModelId);
  if (!found) {
    throw new Error(
      `Model not in catalog: ${engine}/${innerModelId}. Refresh models list.`,
    );
  }
  return found;
}

/**
 * @param {string} openrouterApiKey
 * @param {string} generationId
 */
async function fetchOpenRouterGenerationUsage(openrouterApiKey, generationId) {
  const key = (openrouterApiKey || "").trim();
  if (!key || !generationId) return null;
  const url = `${OPENROUTER_BASE}/generation?id=${encodeURIComponent(generationId)}`;
  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${key}`,
      "HTTP-Referer": "https://github.com/wsj-br/transrewrt",
      "X-Title": "Transrewrt",
    },
  });
  if (!res.ok) return null;
  const json = await res.json().catch(() => ({}));
  const data = json.data;
  if (!data) return null;
  return {
    cost: data.total_cost ?? 0,
    prompt_tokens: data.tokens_prompt ?? 0,
    completion_tokens: data.tokens_completion ?? 0,
    total_tokens: (data.tokens_prompt ?? 0) + (data.tokens_completion ?? 0),
  };
}

/**
 * @param {object} u
 * @param {number} cost
 * @param {boolean} [costKnown] - if false, UI should not treat $0 as "free" (no OpenRouter price match).
 */
function normalizeUsage(u, cost, costKnown) {
  const prompt_tokens = u?.prompt_tokens ?? 0;
  const completion_tokens = u?.completion_tokens ?? 0;
  const total_tokens = prompt_tokens + completion_tokens;
  const out = {
    prompt_tokens,
    completion_tokens,
    total_tokens,
    cost: Number(cost) || 0,
  };
  if (typeof costKnown === "boolean") {
    out.cost_known = costKnown;
  }
  return out;
}

/**
 * Stream OpenRouter chat completions via fetch (preserves chunk id for /generation).
 * @param {{ onSseLine?: (line: string) => void, onText?: (text: string) => void }} handlers
 */
async function streamOpenRouterCompletion({
  keysMap,
  innerModelId,
  messages,
  temperature,
  signal,
  handlers = {},
}) {
  const { onSseLine, onText } = handlers;
  const apiKey = (keysMap.openrouter_api_key || "").trim();
  if (!apiKey) throw new Error("OpenRouter API key is not configured");

  const body = {
    model: innerModelId,
    messages,
    temperature,
    provider: OPENROUTER_PROVIDER,
    stream: true,
    stream_options: { include_usage: true },
  };

  const res = await fetch(`${OPENROUTER_BASE}/chat/completions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
      "HTTP-Referer": "https://github.com/wsj-br/transrewrt",
      "X-Title": "Transrewrt",
    },
    body: JSON.stringify(body),
    signal,
  });

  if (!res.ok) {
    let errText = await res.text().catch(() => "");
    let msg = `OpenRouter HTTP ${res.status}`;
    try {
      const j = errText ? JSON.parse(errText) : {};
      msg = extractApiErrorMessage(j, msg);
    } catch {
      if (errText) msg = errText.slice(0, 500);
    }
    msg = normalizeOpenRouterKeyErrorMessage(msg) || msg;
    const err = new Error(msg);
    err.status = res.status;
    throw err;
  }

  if (!res.body) throw new Error("Empty response body");

  const reader = res.body.getReader();
  const decoder = new TextDecoder();
  let buffer = "";
  let generationId = null;
  let lastUsage = null;

  try {
    while (true) {
      if (signal?.aborted) {
        await reader.cancel().catch(() => {});
        break;
      }
      const { done, value } = await reader.read();
      if (value) buffer += decoder.decode(value, { stream: true });
      const lines = buffer.split("\n");
      buffer = lines.pop() ?? "";
      for (const line of lines) {
        const trimmed = line.trim();
        if (!trimmed) continue;
        if (trimmed === "data: [DONE]") {
          if (onSseLine) onSseLine(trimmed);
          continue;
        }
        if (!trimmed.startsWith("data: ")) continue;
        const jsonStr = trimmed.slice(6);
        let data;
        try {
          data = JSON.parse(jsonStr);
        } catch {
          continue;
        }
        if (data.id && !generationId) generationId = data.id;
        if (data.usage) lastUsage = data.usage;
        const deltaPiece = streamChoiceToString(data.choices?.[0]);
        if (deltaPiece && onText) onText(deltaPiece);
        if (onSseLine) onSseLine(trimmed);
      }
      if (done) break;
    }
  } finally {
    reader.releaseLock?.();
  }

  let usage = null;
  if (lastUsage) {
    usage = normalizeUsage(lastUsage, lastUsage.cost ?? 0, true);
  }
  if ((!usage || Number(usage.cost) === 0) && generationId) {
    const gen = await fetchOpenRouterGenerationUsage(apiKey, generationId);
    if (gen) {
      usage = normalizeUsage(
        {
          prompt_tokens: gen.prompt_tokens,
          completion_tokens: gen.completion_tokens,
        },
        gen.cost,
        true,
      );
    }
  }
  if (!usage) {
    usage = normalizeUsage({ prompt_tokens: 0, completion_tokens: 0 }, 0, true);
  }
  return { generationId, usage };
}

/**
 * Stream chat completions from a custom OpenAI-compatible endpoint.
 * @param {{ onSseLine?: (line: string) => void, onText?: (text: string) => void }} handlers
 */
async function streamCustomCompletion({
  keysMap,
  innerModelId,
  messages,
  temperature,
  signal,
  handlers = {},
}) {
  const { onSseLine, onText } = handlers;
  const conf = buildConfig("custom", keysMap);
  const { baseURL, apiKey } = conf;
  if (!baseURL || !apiKey) {
    throw new Error("Custom provider URL and API key are not configured");
  }

  const body = {
    model: innerModelId,
    messages,
    temperature,
    stream: true,
    stream_options: { include_usage: true },
  };

  const res = await fetch(`${baseURL}/chat/completions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify(body),
    signal,
  });

  if (!res.ok) {
    let errText = await res.text().catch(() => "");
    let msg = `Custom provider HTTP ${res.status}`;
    try {
      const j = errText ? JSON.parse(errText) : {};
      msg = extractApiErrorMessage(j, msg);
    } catch {
      if (errText) msg = errText.slice(0, 500);
    }
    const err = new Error(msg);
    err.status = res.status;
    throw err;
  }

  if (!res.body) throw new Error("Empty response body");

  const reader = res.body.getReader();
  const decoder = new TextDecoder();
  let buffer = "";
  let lastUsage = null;

  try {
    while (true) {
      if (signal?.aborted) {
        await reader.cancel().catch(() => {});
        break;
      }
      const { done, value } = await reader.read();
      if (value) buffer += decoder.decode(value, { stream: true });
      const lines = buffer.split("\n");
      buffer = lines.pop() ?? "";
      for (const line of lines) {
        const trimmed = line.trim();
        if (!trimmed) continue;
        if (trimmed === "data: [DONE]") {
          if (onSseLine) onSseLine(trimmed);
          continue;
        }
        if (!trimmed.startsWith("data: ")) continue;
        const jsonStr = trimmed.slice(6);
        let data;
        try {
          data = JSON.parse(jsonStr);
        } catch {
          continue;
        }
        if (data.usage) lastUsage = data.usage;
        const deltaPiece = streamChoiceToString(data.choices?.[0]);
        if (deltaPiece && onText) onText(deltaPiece);
        if (onSseLine) onSseLine(trimmed);
      }
      if (done) break;
    }
  } finally {
    reader.releaseLock?.();
  }

  await refreshOpenRouterPricingIfNeeded((keysMap.openrouter_api_key || "").trim());
  const accumulated = {
    prompt_tokens: lastUsage?.prompt_tokens ?? 0,
    completion_tokens: lastUsage?.completion_tokens ?? 0,
  };
  const pricingRow = lookupOpenRouterPricingRow("custom", innerModelId);
  const cost = estimateCostDollars("custom", innerModelId, accumulated);
  const usage = normalizeUsage(accumulated, cost, pricingRow != null);
  if (onSseLine) {
    onSseLine(`data: ${JSON.stringify({ usage })}`);
    onSseLine("data: [DONE]");
  }
  return { usage };
}

/**
 * @param {string} canonicalModelId
 * @param {Array<{role: string, content: string}>} messages
 * @param {{ temperature?: number, signal?: AbortSignal, keysMap: Record<string,string> }} opts
 * @param {{ onSseLine?: (line: string) => void, onText?: (text: string) => void }} [handlers]
 * @returns {Promise<{ usage: object }>}
 */
async function streamCompletion(canonicalModelId, messages, opts, handlers = {}) {
  const keysMap = opts.keysMap;
  if (!keysMap) throw new Error("keysMap is required");

  const { engine, innerModelId } = resolveEngine(canonicalModelId, keysMap);
  const temperature = opts.temperature ?? 0.3;
  const signal = opts.signal;

  if (!engineConfigured(engine, keysMap)) {
    throw new Error(`No API key or URL configured for provider "${engine}"`);
  }

  if (engine === "openrouter") {
    const { usage } = await streamOpenRouterCompletion({
      keysMap,
      innerModelId,
      messages,
      temperature,
      signal,
      handlers,
    });
    return { usage };
  }

  if (engine === "custom") {
    const { usage } = await streamCustomCompletion({
      keysMap,
      innerModelId,
      messages,
      temperature,
      signal,
      handlers,
    });
    return { usage };
  }

  await ensureCatalogForEngine(engine, keysMap);

  await refreshOpenRouterPricingIfNeeded((keysMap.openrouter_api_key || "").trim());

  const chatModel = getChatModelFromCatalog(engine, innerModelId);
  const conf = buildConfig(engine, keysMap);
  const llm = igniteModel(engine, chatModel, conf);
  const thread = messages.map((m) => new Message(m.role, m.content));

  let accumulated = {
    prompt_tokens: 0,
    completion_tokens: 0,
  };

  const { onSseLine, onText } = handlers;

  for await (const chunk of llm.generate(thread, {
    temperature,
    usage: true,
    abortSignal: signal,
    // Avoid multi-llm-ts auto-injecting tools for capable models (e.g. gpt-3.5-* ids
    // match tools:true); otherwise the API may stream tool_calls with no visible content.
    tools: false,
  })) {
    if (chunk.type === "content" || chunk.type === "reasoning") {
      const text = chunk.text || "";
      if (text) {
        if (onText) onText(text);
        if (onSseLine) {
          const fake = {
            choices: [{ delta: { content: text } }],
            id: `mlts-${engine}`,
          };
          onSseLine(`data: ${JSON.stringify(fake)}`);
        }
      }
    }
    if (chunk.type === "usage" && chunk.usage) {
      accumulated.prompt_tokens = chunk.usage.prompt_tokens ?? 0;
      accumulated.completion_tokens = chunk.usage.completion_tokens ?? 0;
    }
  }

  const pricingRow = lookupOpenRouterPricingRow(engine, innerModelId);
  const cost = estimateCostDollars(engine, innerModelId, accumulated);
  const usage = normalizeUsage(accumulated, cost, pricingRow != null);
  if (onSseLine) {
    onSseLine(`data: ${JSON.stringify({ usage })}`);
    onSseLine("data: [DONE]");
  }
  return { usage };
}

module.exports = {
  ENGINE_IDS,
  CONFIG_KEY_BY_ENGINE,
  ENV_KEY_BY_ENGINE,
  CUSTOM_CONFIG_KEYS,
  CUSTOM_ENV_KEYS,
  ENCRYPTED_CONFIG_KEYS,
  FREE_INNER_ID,
  PROVIDER_TEST_SUCCESS_I18N,
  resolveEngine,
  customProviderPrefix,
  mergeKeys,
  readEnvNonBlank,
  providerDisplayName,
  extractApiErrorMessage,
  isOpenRouterKeyAuthFailureMessage,
  normalizeOpenRouterKeyErrorMessage,
  testProviderAuth,
  listLlmEnvVarsPresent,
  buildConfig,
  engineConfigured,
  getAllModels,
  ensureCatalogForEngine,
  streamCompletion,
  fetchOpenRouterGenerationUsage,
  catalogByEngine,
  refreshOpenRouterPricingIfNeeded,
  estimateCostDollars,
  OPENROUTER_BASE,
};
