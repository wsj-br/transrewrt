/**
 * Node-only LLM layer: Vercel AI SDK (`ai`) + `@ai-sdk/openai-compatible` transport.
 * Every provider is reached over its OpenAI-compatible endpoint via a pre-configured base URL.
 * Used by Electron main and the web Express server.
 */

const { streamText } = require("ai");
const { createOpenAICompatible } = require("@ai-sdk/openai-compatible");

const { OPENROUTER_PROVIDER } = require("../openRouterProviderRouting");
const {
  extractApiErrorMessage,
  isOpenRouterKeyAuthFailureMessage,
  normalizeOpenRouterKeyErrorMessage,
} = require("../apiErrorMessage.js");
const { stripRedundantModelsPathSegment } = require("../presetModelIdUtils.js");

const OPENROUTER_BASE = "https://openrouter.ai/api/v1";

/** OpenRouter attribution headers (also used for the public /models + /generation calls). */
const ATTRIBUTION_REFERER = "https://github.com/wsj-br/transrewrt";
const ATTRIBUTION_TITLE = "Transrewrt";

/** Anthropic native `GET /models` needs `x-api-key` + this version header instead of a Bearer token. */
const ANTHROPIC_VERSION = "2023-06-01";

/** Provider id used for OpenRouter-specific behaviour (routing field, exact cost, attribution). */
const OPENROUTER_PROVIDER_KEY = "openrouter";

/** @type {string[]} ordered provider engine ids (canonical model id prefix). */
const ENGINE_IDS = [
  "openrouter",
  "openai",
  "anthropic",
  "google",
  "deepseek",
  "groq",
  "mistralai",
  "local",
  "xai",
  "custom",
  "cerebras",
  "nvidia",
  "alibaba",
  "apifun",
];

/**
 * Built-in OpenAI-compatible base URLs per engine. `local` and `custom` are resolved at runtime
 * from config (`local_llm_base_url` / `custom_provider_url`), so they are not listed here.
 */
const PROVIDER_PRESETS = {
  openrouter: { baseUrl: "https://openrouter.ai/api/v1" },
  openai: { baseUrl: "https://api.openai.com/v1" },
  anthropic: { baseUrl: "https://api.anthropic.com/v1" },
  google: { baseUrl: "https://generativelanguage.googleapis.com/v1beta/openai" },
  deepseek: { baseUrl: "https://api.deepseek.com" },
  groq: { baseUrl: "https://api.groq.com/openai/v1" },
  mistralai: { baseUrl: "https://api.mistral.ai/v1" },
  xai: { baseUrl: "https://api.x.ai/v1" },
  cerebras: { baseUrl: "https://api.cerebras.ai/v1" },
  nvidia: { baseUrl: "https://integrate.api.nvidia.com/v1" },
  alibaba: { baseUrl: "https://dashscope-intl.aliyuncs.com/compatible-mode/v1" },
  apifun: { baseUrl: "https://api.apikey.fun/v1" },
};

const CONFIG_KEY_BY_ENGINE = {
  openrouter: "openrouter_api_key",
  openai: "openai_api_key",
  anthropic: "anthropic_api_key",
  google: "google_api_key",
  deepseek: "deepseek_api_key",
  groq: "groq_api_key",
  mistralai: "mistralai_api_key",
  local: "local_llm_base_url",
  xai: "xai_api_key",
  custom: "custom_provider_api_key",
  cerebras: "cerebras_api_key",
  nvidia: "nvidia_api_key",
  alibaba: "alibaba_api_key",
  apifun: "apifun_api_key",
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
  (e) => e !== "local" && e !== "custom",
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
  local: "LOCAL_LLM_URL",
  xai: "XAI_API_KEY",
  custom: "CUSTOM_PROVIDER_API_KEY",
  cerebras: "CEREBRAS_API_KEY",
  nvidia: "NVIDIA_API_KEY",
  alibaba: "ALIBABA_API_KEY",
  apifun: "APIFUN_API_KEY",
};

/** In-memory catalog: engine -> Array<{ id, name, pricing? }> (from last getAllModels). */
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
    const inner = stripRedundantModelsPathSegment(id.slice("openrouter/".length));
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
  const innerModelId = stripRedundantModelsPathSegment(id.slice(slash + 1));
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
  local: "Local LLM",
  xai: "xAI",
  custom: "Custom provider",
  cerebras: "Cerebras",
  nvidia: "NVIDIA",
  alibaba: "Alibaba Cloud",
  apifun: "apikey.fun",
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
  localOk: "Local LLM configuration is working.",
  credentialsOk: "{{provider}} credentials are valid.",
};

/**
 * @param {string} provider
 * @param {string} value
 * @param {{ baseURL?: string, displayName?: string, apiKey?: string }} [extras]
 */
function buildProviderTestRequest(provider, value, extras = {}) {
  const normalized = String(value || "").trim();
  if (provider === "local") {
    const baseURL = normalized || "http://localhost:11434/v1";
    const sanitizedBase = baseURL.replace(/\/+$/, "");
    return {
      url: `${sanitizedBase}/models`,
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
            "HTTP-Referer": ATTRIBUTION_REFERER,
            "X-Title": ATTRIBUTION_TITLE,
          },
        },
      };
    case "anthropic":
      return {
        url: `${PROVIDER_PRESETS.anthropic.baseUrl}/models`,
        options: {
          method: "GET",
          headers: {
            "x-api-key": normalized,
            "anthropic-version": ANTHROPIC_VERSION,
          },
        },
      };
    case "google":
      return {
        url: `https://generativelanguage.googleapis.com/v1beta/models?key=${encodeURIComponent(normalized)}`,
        options: { method: "GET" },
      };
    case "openai":
    case "deepseek":
    case "groq":
    case "mistralai":
    case "xai":
    case "cerebras":
    case "nvidia":
    case "alibaba":
    case "apifun": {
      const baseURL = PROVIDER_PRESETS[provider]?.baseUrl;
      if (!baseURL) {
        return { missingMessage: `Unsupported provider "${provider}"` };
      }
      return {
        url: `${baseURL}/models`,
        options: { method: "GET", headers: { Authorization: `Bearer ${normalized}` } },
      };
    }
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
        normalizedProvider === "local"
          ? { key: PROVIDER_TEST_SUCCESS_I18N.localOk }
          : {
              key: PROVIDER_TEST_SUCCESS_I18N.credentialsOk,
              params: { provider: displayName },
            };
      const successMessage =
        normalizedProvider === "local"
          ? PROVIDER_TEST_SUCCESS_I18N.localOk
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
 * Resolve the OpenAI-compatible base URL for an engine (preset, or runtime config for local/custom).
 * @param {string} engine
 * @param {Record<string, string>} keysMap
 * @returns {string}
 */
function providerBaseUrl(engine, keysMap) {
  if (engine === "local") {
    const url = (keysMap.local_llm_base_url || "").trim() || "http://localhost:11434/v1";
    return url.replace(/\/+$/, "");
  }
  if (engine === "custom") {
    return (keysMap[CUSTOM_CONFIG_KEYS.url] || "").trim().replace(/\/+$/, "");
  }
  const preset = PROVIDER_PRESETS[engine];
  return preset ? preset.baseUrl.replace(/\/+$/, "") : "";
}

/**
 * Resolve the API key for an engine ("" for keyless local LLM).
 * @param {string} engine
 * @param {Record<string, string>} keysMap
 * @returns {string}
 */
function providerApiKey(engine, keysMap) {
  if (engine === "local") return "";
  if (engine === "custom") return (keysMap[CUSTOM_CONFIG_KEYS.apiKey] || "").trim();
  const ck = CONFIG_KEY_BY_ENGINE[engine];
  return (keysMap[ck] || "").trim();
}

/**
 * @param {string} engine
 * @param {Record<string, string>} keysMap - mergeKeys() output
 * @returns {{ baseURL: string, apiKey: string }}
 */
function buildConfig(engine, keysMap) {
  return {
    baseURL: providerBaseUrl(engine, keysMap),
    apiKey: providerApiKey(engine, keysMap),
  };
}

function engineConfigured(engine, keysMap) {
  if (engine === "local") {
    return !!(keysMap.local_llm_base_url || "").trim();
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

const LOCAL_LLM_PROBE_MS = 4000;

/**
 * Cheap GET /models on the OpenAI-compatible base URL so we skip listing when the server is down.
 * @param {string} baseURL - e.g. http://localhost:11434/v1 (full API base, no trailing slash)
 */
async function isLocalLlmReachable(baseURL) {
  const base = String(baseURL || "").replace(/\/+$/, "");
  if (!base) return false;
  const url = `${base}/models`;
  const ac = new AbortController();
  const t = setTimeout(() => ac.abort(), LOCAL_LLM_PROBE_MS);
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
      "HTTP-Referer": ATTRIBUTION_REFERER,
      "X-Title": ATTRIBUTION_TITLE,
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
 * @param {string} engine - engine id (tie-break only when several vendors share one slug)
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
 * Auth headers for an engine's OpenAI-compatible `GET /models` request.
 * Anthropic uses native `x-api-key`; OpenRouter adds attribution headers; others use Bearer.
 * @param {string} engine
 * @param {string} apiKey
 * @returns {Record<string, string>}
 */
function modelsListAuthHeaders(engine, apiKey) {
  if (engine === "anthropic") {
    return {
      "x-api-key": apiKey,
      "anthropic-version": ANTHROPIC_VERSION,
    };
  }
  /** @type {Record<string, string>} */
  const headers = {};
  if (apiKey) headers.Authorization = `Bearer ${apiKey}`;
  if (engine === "openrouter") {
    headers["HTTP-Referer"] = ATTRIBUTION_REFERER;
    headers["X-Title"] = ATTRIBUTION_TITLE;
  }
  return headers;
}

/**
 * List models from an engine's OpenAI-compatible `GET /models` endpoint.
 * @param {string} engine
 * @param {Record<string, string>} keysMap
 * @returns {Promise<Array<{ id: string, name: string, pricing?: { prompt: number, completion: number } }>>}
 */
async function fetchModelsForEngine(engine, keysMap) {
  const baseURL = providerBaseUrl(engine, keysMap);
  if (!baseURL) return [];
  const apiKey = providerApiKey(engine, keysMap);
  const res = await fetch(`${baseURL}/models`, {
    headers: modelsListAuthHeaders(engine, apiKey),
  });
  if (!res.ok) {
    throw new Error(`HTTP ${res.status}`);
  }
  const json = await res.json();
  const rows = Array.isArray(json.data)
    ? json.data
    : Array.isArray(json.models)
      ? json.models
      : [];
  return rows
    .filter((row) => row && (row.id || row.name))
    .map((row) => {
      const rawId = String(row.id || row.name);
      const id = stripRedundantModelsPathSegment(rawId);
      /** @type {{ id: string, name: string, pricing?: { prompt: number, completion: number } }} */
      const out = { id, name: row.name || id };
      if (engine === "openrouter" && row.pricing != null) {
        const p = parseFloat(row.pricing.prompt);
        const c = parseFloat(row.pricing.completion);
        out.pricing = {
          prompt: Number.isFinite(p) ? p : 0,
          completion: Number.isFinite(c) ? c : 0,
        };
      }
      return out;
    });
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
    if (engine === "local") {
      const base = providerBaseUrl(engine, keysMap);
      if (!(await isLocalLlmReachable(base))) {
        catalogByEngine[engine] = [];
        continue;
      }
    }
    let rows;
    try {
      rows = await fetchModelsForEngine(engine, keysMap);
    } catch (e) {
      console.error(`[llm] list models(${engine}) failed:`, e.message);
      catalogByEngine[engine] = [];
      continue;
    }
    catalogByEngine[engine] = rows;
    for (const m of rows) {
      let canonical;
      if (engine === "custom") {
        const prefix = customProviderPrefix(keysMap);
        if (!prefix) continue;
        canonical = `${prefix}/${m.id}`;
      } else {
        canonical = `${engine}/${m.id}`;
      }
      let prompt = 0;
      let completion = 0;
      let pricingKnown = false;
      let pricingEstimated = false;
      if (engine === "openrouter" && m.pricing) {
        prompt = m.pricing.prompt;
        completion = m.pricing.completion;
        pricingKnown = true;
      } else if (engine !== "openrouter" && orKey) {
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
    catalogByEngine.openrouter = catalogByEngine.openrouter || [];
    if (!catalogByEngine.openrouter.some((m) => m.id === FREE_INNER_ID)) {
      catalogByEngine.openrouter.push({
        id: FREE_INNER_ID,
        name: "OpenRouter (free)",
        pricing: { prompt: 0, completion: 0 },
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
  if (engine === "local") {
    const base = providerBaseUrl(engine, keysMap);
    if (!(await isLocalLlmReachable(base))) {
      catalogByEngine[engine] = [];
      return;
    }
  }
  try {
    catalogByEngine[engine] = await fetchModelsForEngine(engine, keysMap);
  } catch (e) {
    console.error(`[llm] ensureCatalogForEngine(${engine}):`, e.message);
    catalogByEngine[engine] = [];
  }
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
      "HTTP-Referer": ATTRIBUTION_REFERER,
      "X-Title": ATTRIBUTION_TITLE,
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
 * OpenRouter returns `usage.cost` (USD) on chat responses; surface it through
 * `providerMetadata.openrouter.cost` for both non-streaming and streaming responses.
 * @type {import('@ai-sdk/openai-compatible').MetadataExtractor}
 */
const openRouterMetadataExtractor = {
  extractMetadata: ({ parsedBody }) => {
    const body = parsedBody || {};
    const cost = body?.usage?.cost ?? body?.cost;
    return Promise.resolve(
      typeof cost === "number" ? { [OPENROUTER_PROVIDER_KEY]: { cost } } : undefined,
    );
  },
  createStreamExtractor: () => {
    let cost;
    return {
      processChunk(chunk) {
        const c = chunk?.usage?.cost ?? chunk?.cost;
        if (typeof c === "number") cost = c;
      },
      buildMetadata() {
        return typeof cost === "number"
          ? { [OPENROUTER_PROVIDER_KEY]: { cost } }
          : undefined;
      },
    };
  },
};

/**
 * Build an OpenAI-compatible provider for the engine, applying OpenRouter routing/attribution/cost.
 * @param {string} engine
 * @param {Record<string, string>} keysMap
 */
function buildSdkProvider(engine, keysMap) {
  const baseURL = providerBaseUrl(engine, keysMap);
  if (!baseURL) {
    throw new Error(`No base URL configured for provider "${engine}"`);
  }
  const apiKey = providerApiKey(engine, keysMap);
  const isOpenRouter = engine === "openrouter";
  const name =
    engine === "custom" ? customProviderPrefix(keysMap) || "custom" : engine;

  /** @type {Record<string, string>} */
  const headers = {};
  if (isOpenRouter) {
    headers["HTTP-Referer"] = ATTRIBUTION_REFERER;
    headers["X-Title"] = ATTRIBUTION_TITLE;
  }

  /** @type {import('@ai-sdk/openai-compatible').OpenAICompatibleProviderSettings} */
  const settings = {
    name,
    baseURL,
    includeUsage: true,
  };
  if (apiKey) settings.apiKey = apiKey;
  if (Object.keys(headers).length > 0) settings.headers = headers;
  if (isOpenRouter) {
    settings.transformRequestBody = (args) => ({
      ...args,
      provider: OPENROUTER_PROVIDER,
    });
    settings.metadataExtractor = openRouterMetadataExtractor;
  }
  return createOpenAICompatible(settings);
}

function isAbortError(error) {
  if (!error) return false;
  const name = error.name || "";
  return (
    name === "AbortError" ||
    name === "TimeoutError" ||
    name === "ResponseAborted" ||
    /abort/i.test(String(error.message || ""))
  );
}

/**
 * Map an AI SDK / fetch error into an Error carrying a clean message and `.status` (when available),
 * so the web SSE route and renderer can preserve 401/404 handling.
 * @param {unknown} e
 * @param {string} engine
 * @returns {Error}
 */
function normalizeSdkError(e, engine) {
  const err = e || {};
  const status = err.statusCode ?? err.status ?? err.responseStatus;
  let msg = err.message ? String(err.message) : String(e);
  const body = err.responseBody ?? err.data ?? err.body;
  if (body != null) {
    try {
      const parsed = typeof body === "string" ? JSON.parse(body) : body;
      msg = extractApiErrorMessage(parsed, msg);
    } catch {
      if (typeof body === "string" && body) msg = body.slice(0, 500);
    }
  }
  if (engine === "openrouter") {
    msg = normalizeOpenRouterKeyErrorMessage(msg) || msg;
  }
  const out = new Error(msg);
  if (status) out.status = status;
  return out;
}

/**
 * Stream chat completions for any engine through the OpenAI-compatible AI SDK transport.
 * Emits text via `onText` and synthesized OpenAI-style SSE lines via `onSseLine`, then a final
 * usage line + `[DONE]`. Cost is exact for OpenRouter (provider metadata / generation lookup) and
 * estimated from the OpenRouter pricing catalog for other engines.
 *
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
  const { onSseLine, onText } = handlers;

  if (!engineConfigured(engine, keysMap)) {
    throw new Error(`No API key or URL configured for provider "${engine}"`);
  }

  const provider = buildSdkProvider(engine, keysMap);

  const systemText = messages
    .filter((m) => m.role === "system")
    .map((m) => m.content)
    .join("\n\n");
  const chatMessages = messages
    .filter((m) => m.role !== "system")
    .map((m) => ({ role: m.role, content: m.content }));

  const result = streamText({
    model: provider(innerModelId),
    ...(systemText ? { system: systemText } : {}),
    messages: chatMessages,
    temperature,
    abortSignal: signal,
  });

  let aborted = false;
  try {
    for await (const piece of result.textStream) {
      if (!piece) continue;
      if (onText) onText(piece);
      if (onSseLine) {
        onSseLine(
          `data: ${JSON.stringify({
            choices: [{ delta: { content: piece } }],
            id: `aisdk-${engine}`,
          })}`,
        );
      }
    }
  } catch (e) {
    if (signal?.aborted || isAbortError(e)) {
      aborted = true;
    } else {
      throw normalizeSdkError(e, engine);
    }
  }

  let sdkUsage = null;
  let providerMetadata = null;
  let generationId = null;
  if (!aborted) {
    try {
      sdkUsage = await result.usage;
    } catch {
      /* usage unavailable */
    }
    try {
      providerMetadata = await result.providerMetadata;
    } catch {
      /* metadata unavailable */
    }
    try {
      const response = await result.response;
      generationId = response?.id || null;
    } catch {
      /* response metadata unavailable */
    }
  }

  const accumulated = {
    prompt_tokens: sdkUsage?.inputTokens ?? 0,
    completion_tokens: sdkUsage?.outputTokens ?? 0,
  };

  let usage;
  if (engine === "openrouter") {
    const metaCost = providerMetadata?.[OPENROUTER_PROVIDER_KEY]?.cost;
    let cost = typeof metaCost === "number" ? metaCost : null;
    if ((cost == null || cost === 0) && generationId) {
      const gen = await fetchOpenRouterGenerationUsage(
        (keysMap.openrouter_api_key || "").trim(),
        generationId,
      );
      if (gen) {
        accumulated.prompt_tokens = gen.prompt_tokens;
        accumulated.completion_tokens = gen.completion_tokens;
        cost = gen.cost;
      }
    }
    usage = normalizeUsage(accumulated, cost ?? 0, true);
  } else {
    await refreshOpenRouterPricingIfNeeded((keysMap.openrouter_api_key || "").trim());
    const pricingRow = lookupOpenRouterPricingRow(engine, innerModelId);
    const cost = estimateCostDollars(engine, innerModelId, accumulated);
    usage = normalizeUsage(accumulated, cost, pricingRow != null);
  }

  if (onSseLine) {
    onSseLine(`data: ${JSON.stringify({ usage })}`);
    onSseLine("data: [DONE]");
  }
  return { usage };
}

module.exports = {
  ENGINE_IDS,
  PROVIDER_PRESETS,
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
  buildProviderTestRequest,
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
