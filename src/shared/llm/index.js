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
  cerebras: "cerebras_api_key",
};

/** Config keys stored encrypted on disk (Electron). */
const ENCRYPTED_CONFIG_KEYS = ENGINE_IDS.filter((e) => e !== "ollama").map(
  (e) => CONFIG_KEY_BY_ENGINE[e],
);

const ENV_KEY_BY_ENGINE = {
  openrouter: "OPENROUTER_KEY",
  openai: "OPENAI_KEY",
  anthropic: "ANTHROPIC_KEY",
  google: "GOOGLE_KEY",
  deepseek: "DEEPSEEK_KEY",
  groq: "GROQ_KEY",
  mistralai: "MISTRAL_KEY",
  ollama: "OLLAMA_URL",
  xai: "XAI_KEY",
  cerebras: "CEREBRAS_KEY",
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
 * @param {string} canonicalId
 * @returns {{ engine: string, innerModelId: string }}
 */
function resolveEngine(canonicalId) {
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
  cerebras: "Cerebras",
};

function providerDisplayName(provider) {
  return PROVIDER_LABELS[provider] || provider;
}

/**
 * @param {string} provider
 * @param {string} value
 */
function buildProviderTestRequest(provider, value) {
  const normalized = String(value || "").trim();
  if (provider === "ollama") {
    const baseURL = normalized || "http://localhost:11434";
    const sanitizedBase = baseURL.replace(/\/+$/, "");
    return {
      url: `${sanitizedBase}/api/tags`,
      options: { method: "GET" },
      missingMessage: "Ollama base URL is required",
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
 * @returns {Promise<{ provider: string, ok: boolean, message: string }>}
 */
async function testProviderAuth(provider, value) {
  const normalizedProvider = String(provider || "").trim();
  if (!ENGINE_IDS.includes(normalizedProvider)) {
    return {
      provider: normalizedProvider,
      ok: false,
      message: `Unsupported provider "${normalizedProvider}"`,
    };
  }

  const req = buildProviderTestRequest(normalizedProvider, value);
  if (req.missingMessage) {
    return { provider: normalizedProvider, ok: false, message: req.missingMessage };
  }

  try {
    const response = await fetch(req.url, req.options);
    if (response.ok) {
      return {
        provider: normalizedProvider,
        ok: true,
        message: `${providerDisplayName(normalizedProvider)} credentials are valid.`,
      };
    }
    const body = await response.text().catch(() => "");
    let detail = `HTTP ${response.status}`;
    try {
      const parsed = body ? JSON.parse(body) : {};
      detail =
        parsed?.error?.message ||
        parsed?.error ||
        parsed?.message ||
        detail;
    } catch {
      if (body) detail = body.slice(0, 220);
    }
    return {
      provider: normalizedProvider,
      ok: false,
      message: `${providerDisplayName(normalizedProvider)} authentication failed: ${detail}`,
    };
  } catch (error) {
    return {
      provider: normalizedProvider,
      ok: false,
      message: `${providerDisplayName(normalizedProvider)} test request failed: ${error.message}`,
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
  const ck = CONFIG_KEY_BY_ENGINE[engine];
  const apiKey = (keysMap[ck] || "").trim();
  return { apiKey };
}

function engineConfigured(engine, keysMap) {
  if (engine === "ollama") {
    return !!(keysMap.ollama_base_url || "").trim();
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
 * Find OpenRouter /models pricing row by matching the trailing segment of each OpenRouter id
 * (e.g. `gemini-2.5-flash` matches `google/gemini-2.5-flash`). Case-insensitive on both sides.
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
  const matches = [];
  for (const k of Object.keys(byId)) {
    const slash = k.lastIndexOf("/");
    const suf = slash >= 0 ? k.slice(slash + 1) : k;
    if (suf.toLowerCase() === idLow) {
      matches.push(k);
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
 * @param {Record<string, string>} keysMap
 * @returns {Promise<Array<{ id: string, name: string, pricing: { prompt: number, completion: number }, pricingKnown: boolean }>>}
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
    try {
      list = await loadModels(engine, conf);
    } catch (e) {
      console.error(`[llm] loadModels(${engine}) failed:`, e.message);
      catalogByEngine[engine] = [];
      continue;
    }
    const chat = list?.chat || [];
    catalogByEngine[engine] = chat;
    for (const m of chat) {
      const canonical = `${engine}/${m.id}`;
      const raw = pricingDetailsFromChatModel(m, engine);
      let prompt = raw.prompt;
      let completion = raw.completion;
      let pricingKnown = raw.known;
      if (engine !== "openrouter" && orKey) {
        const est = lookupOpenRouterPricingRow(engine, m.id);
        if (est) {
          prompt = est.prompt;
          completion = est.completion;
          pricingKnown = true;
        }
      }
      normalized.push({
        id: canonical,
        name: m.name || m.id,
        pricing: { prompt, completion },
        pricingKnown,
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
    const list = await loadModels(engine, conf);
    catalogByEngine[engine] = list?.chat || [];
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
      const j = JSON.parse(errText);
      if (j?.error?.message) msg = j.error.message;
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
        const delta = data.choices?.[0]?.delta?.content;
        if (delta && onText) onText(delta);
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
 * @param {string} canonicalModelId
 * @param {Array<{role: string, content: string}>} messages
 * @param {{ temperature?: number, signal?: AbortSignal, keysMap: Record<string,string> }} opts
 * @param {{ onSseLine?: (line: string) => void, onText?: (text: string) => void }} [handlers]
 * @returns {Promise<{ usage: object }>}
 */
async function streamCompletion(canonicalModelId, messages, opts, handlers = {}) {
  const { engine, innerModelId } = resolveEngine(canonicalModelId);
  const temperature = opts.temperature ?? 0.3;
  const signal = opts.signal;

  const keysMap = opts.keysMap;
  if (!keysMap) throw new Error("keysMap is required");

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
  ENCRYPTED_CONFIG_KEYS,
  FREE_INNER_ID,
  resolveEngine,
  mergeKeys,
  readEnvNonBlank,
  providerDisplayName,
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
