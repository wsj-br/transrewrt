import { getBasePath } from "../utils/misc/urlUtils";
import * as sessionExpiredHandler from "../utils/misc/sessionExpiredHandler";
import { getRollingKey } from "../utils/security/transrewrtProxyKey";
import prompts from "../../config-defaults/prompts.json";

const PROXY_DEBUG =
  typeof __DEV__ !== "undefined" && __DEV__;

let _proxyDebugLoggedOnce = false;

function formatProxyDebugLine(...args) {
  const parts = args.map((a) => (typeof a === "object" ? JSON.stringify(a) : String(a)));
  return "[Transrewrt Proxy] " + parts.join(" ");
}

function proxyDebug(...args) {
  if (!PROXY_DEBUG || args.length === 0) return;
  if (typeof window !== "undefined" && window.electronAPI?.writeProxyDebugLog) {
    if (!_proxyDebugLoggedOnce) {
      _proxyDebugLoggedOnce = true;
      window.electronAPI.writeProxyDebugLog(
        formatProxyDebugLine("Debug logging active (development mode). All proxy requests and rolling key usage logged to proxy-debug.log.")
      ).catch(() => {});
    }
    window.electronAPI.writeProxyDebugLog(formatProxyDebugLine(...args)).catch(() => {});
  }
}

function resolvePrompt(value) {
  return Array.isArray(value) ? value.join("\n") : value;
}

function buildTranslatePrompt(sourceLang, targetLang) {
  const config = prompts.translate;
  const shared = prompts.shared.translate;
  const taskLines = [config.firstBullet];
  if (sourceLang && sourceLang !== "Detect Language" && config.withSourceLanguageLine) {
    taskLines.push(config.withSourceLanguageLine);
  }
  const lines = [
    config.role,
    "",
    "Your task:",
    ...taskLines,
    ...shared.task,
    ...shared.footer,
  ];
  const prompt = resolvePrompt(lines);
  return prompt
    .replace(/\{\{sourceLang\}\}/g, sourceLang || "")
    .replace(/\{\{targetLang\}\}/g, targetLang || "");
}

function buildRewriteSystemPrompt(styleConfig) {
  const shared = prompts.shared.rewrite;
  const common = shared.common.map((line) =>
    line.replace(/\{\{outputDescription\}\}/g, styleConfig.outputDescription || "rewritten")
  );
  const taskBullets = [...styleConfig.bullets];
  const lines = [
    styleConfig.role,
    "",
    "Your task:",
    ...taskBullets,
    "",
    ...common,
    ...shared.footer,
  ];
  return resolvePrompt(lines);
}

/**
 * Build system prompt for Transform (custom prompts).
 * @param {Object} promptConfig - { role, instructions (array or JSON string), output_description, target_language?: boolean }
 * @param {string|null} targetLang - Target language for this run when prompt has ask-for-target-language (e.g. "Spanish")
 * @returns {string}
 */
function buildTransformSystemPrompt(promptConfig, targetLang) {
  const shared = prompts.shared.transform;
  if (!shared) throw new Error("prompts.shared.transform not found");
  const instructions = Array.isArray(promptConfig.instructions)
    ? promptConfig.instructions
    : (() => {
        try {
          const parsed = JSON.parse(promptConfig.instructions || "[]");
          return Array.isArray(parsed) ? parsed : [String(promptConfig.instructions || "")];
        } catch (_) {
          return [String(promptConfig.instructions || "")];
        }
      })();
  const outputDesc = promptConfig.output_description ?? "transformed";
  const common = shared.common.map((line) =>
    line.replace(/\{\{outputDescription\}\}/g, outputDesc)
  );
  const lines = [
    promptConfig.role || "You are a helpful assistant.",
    "",
    "Your task:",
    ...instructions,
    "",
    ...common,
  ];
  if (targetLang != null && String(targetLang).trim() !== "") {
    lines.push(`- After you process the text, translate the output to ${targetLang}. Just output the translated text.`);
  }
  lines.push("", ...shared.footer);
  return resolvePrompt(lines);
}

const BASE_PATH = getBasePath();

// API service to communicate with the backend
// In Electron: calls OpenRouter directly or via Transrewrt proxy (transparent; client sends Authorization Bearer on every request).
// In Web/Docker: calls server proxy (API key stays on server; server adds it when proxying).
class APIService {
  constructor() {
    this._isWebMode = typeof window !== "undefined" && !window.electronAPI?.getConfig;
    this.baseUrl = this._isWebMode ? `${BASE_PATH}/api/proxy` : "https://openrouter.ai/api/v1";
  }

  /**
   * Set the base URL for API requests
   * In web mode we use /api/proxy (server adds API key). In Electron we use OpenRouter URL or Transrewrt proxy (transparent; client sends Bearer in all proxy calls).
   */
  setBaseUrl(url) {
    if (this._isWebMode) {
      this.baseUrl = `${BASE_PATH}/api/proxy`;
    } else {
      this.baseUrl = url || "https://openrouter.ai/api/v1";
    }
  }

  /**
   * Build the request URL: when Transrewrt proxy is enabled, use proxy base + rolling key + path.
   * The proxy is transparent: the client must send Authorization Bearer (API key) on every request.
   * @param {string} path - Path segment (e.g. "chat/completions", "models", "generation?id=...")
   * @returns {Promise<string>} Full URL for the request
   */
  async getRequestUrl(path) {
    if (this._isWebMode) {
      const p = path.startsWith("/") ? path.slice(1) : path;
      return `${this.baseUrl}/${p}`;
    }
    const config = require("../utils/config/configManager").default.getAll();
    const useProxy = !!config.use_transrewrt_proxy;
    if (useProxy && config.api_url && window.electronAPI?.getSecretsForRequest) {
      const { key_seed } = await window.electronAPI.getSecretsForRequest();
      const keySeed = (key_seed || "").trim();
      if (keySeed) {
        const proxyBase = String(config.api_url).replace(/\/+$/, "");
        const rollingKey = await getRollingKey(
          keySeed,
          PROXY_DEBUG && typeof window !== "undefined" && window.electronAPI?.writeProxyDebugLog
            ? (msg, data) => {
                window.electronAPI.writeProxyDebugLog(formatProxyDebugLine(msg, data)).catch(() => {});
              }
            : undefined
        );
        const pathPart = path.startsWith("/") ? path.slice(1) : path;
        const url = `${proxyBase}/${rollingKey}/api/v1/${pathPart}`;
        if (PROXY_DEBUG) {
          proxyDebug("getRequestUrl (proxy)", {
            proxyBase,
            pathPart,
            rollingKeyMasked: rollingKey ? `${rollingKey.slice(0, 2)}***` : "(empty)",
            fullUrl: url,
          });
        }
        return url;
      }
    }
    const base = (this.baseUrl || "").replace(/\/+$/, "");
    const pathPart = path.startsWith("/") ? path : `/${path}`;
    return `${base}${pathPart}`;
  }

  async getHeaders() {
    if (this._isWebMode) {
      return { "Content-Type": "application/json" };
    }
    if (window.electronAPI?.getSecretsForRequest) {
      const { api_key } = await window.electronAPI.getSecretsForRequest();
      const config = require("../utils/config/configManager").default.getAll();
      const useProxy = !!config.use_transrewrt_proxy;
      if (PROXY_DEBUG && useProxy) {
        proxyDebug("getHeaders (proxy)", {
          note: "API Key will not be shown in the log",
          hasApiKey: !!(api_key && String(api_key).trim()),
          headerKeys: ["Content-Type", "Authorization", "HTTP-Referer", "X-Title"],
        });
      }
      return {
        "Content-Type": "application/json",
        Authorization: `Bearer ${api_key || ""}`,
        "HTTP-Referer": "https://github.com/wsj-br/transrewrt",
        "X-Title": "Transrewrt",
      };
    }
    return {
      "Content-Type": "application/json",
      Authorization: "Bearer ",
      "HTTP-Referer": "https://github.com/wsj-br/transrewrt",
      "X-Title": "Transrewrt",
    };
  }

  writeDebugFile(filename, data) {
    if (typeof window !== "undefined" && window.electronAPI?.writeDebugFile) {
      window.electronAPI.writeDebugFile(filename, data).then(() => {
        console.log(`[debug] Wrote ${filename}`);
      }).catch((err) => {
        console.error(`Failed to write ${filename}:`, err);
      });
    }
  }

  getErrorMessage(status, defaultMessage) {
    switch (status) {
      case 429:
        return `Rate limit exceeded (429). The API is asking you to slow down.\n\nPossible reasons:\n• Too many requests in a short time\n• Free tier rate limits\n• Concurrent requests\n\nSuggestions:\n• Wait a few seconds before trying again\n• Use a paid API key for higher limits\n• Reduce auto-translate frequency in settings\n• Don't make rapid consecutive requests`;
      case 401:
        return `Authentication failed (401). Please check your API key in settings.`;
      case 402:
        return `Payment required (402). Your OpenRouter account has insufficient credits or requires payment.`;
      case 403:
        return `Forbidden (403). This model may not be available with your current API key or plan.`;
      case 404:
        return `Model not found (404). The selected model may no longer be available. Try a different model.`;
      default:
        if (status >= 500) {
          return `Server error (${status}). The API is experiencing issues. Please try again in a moment.`;
        }
        return defaultMessage;
    }
  }

  writeLastApiResult(payload) {
    if (typeof window !== "undefined" && window.electronAPI?.writeLastApiResult) {
      window.electronAPI.writeLastApiResult(payload).catch((err) => {
        console.error("Failed to write last_api_result.json", err);
      });
    }
  }

  /**
   * Fetch usage/cost for a generation by ID (OpenRouter API).
   * Used when stream is cancelled before receiving the final usage chunk.
   * @param {string} generationId - The generation ID from stream chunks
   * @param {number} maxRetries - Max retries with delay (generation may take a moment to finalize)
   * @returns {Promise<Object|null>} Usage object { cost, prompt_tokens, completion_tokens } or null
   */
  async getGenerationUsage(generationId, maxRetries = 5) {
    if (!generationId) return null;
    const config = require("../utils/config/configManager").default.getAll();
    const useProxy = !this._isWebMode && !!config.use_transrewrt_proxy;
    for (let attempt = 0; attempt < maxRetries; attempt++) {
      try {
        const url = await this.getRequestUrl(`generation?id=${encodeURIComponent(generationId)}`);
        const opts = { headers: await this.getHeaders() };
        if (this._isWebMode) opts.credentials = "include";
        if (PROXY_DEBUG && useProxy) {
          proxyDebug("getGenerationUsage (proxy)", { attempt: attempt + 1, maxRetries, generationId, url });
        }
        const response = await fetch(url, opts);
        if (PROXY_DEBUG && useProxy) {
          proxyDebug("getGenerationUsage (proxy) RESPONSE", { generationId, status: response.status, ok: response.ok });
        }
        if (response.status === 401) {
          if (this._isWebMode) sessionExpiredHandler.onSessionExpired();
          return null;
        }
        if (response.status === 404 && attempt < maxRetries - 1) {
          await new Promise((r) => setTimeout(r, 1000 * (attempt + 1)));
          continue;
        }
        if (!response.ok) return null;
        const json = await response.json();
        const data = json.data;
        if (PROXY_DEBUG && useProxy) {
          proxyDebug("getGenerationUsage (proxy) DATA", { generationId, json, data });
        }
        if (!data) return null;
        return {
          cost: data.total_cost ?? 0,
          prompt_tokens: data.tokens_prompt ?? 0,
          completion_tokens: data.tokens_completion ?? 0,
          total_tokens: (data.tokens_prompt ?? 0) + (data.tokens_completion ?? 0),
        };
      } catch (err) {
        if (attempt < maxRetries - 1) {
          await new Promise((r) => setTimeout(r, 1000 * (attempt + 1)));
        } else {
          console.warn("Failed to fetch generation usage:", err);
          return null;
        }
      }
    }
    return null;
  }

  /**
   * Shared streaming chat completion (translate and rewrite).
   * @private
   * @param {string} systemPrompt
   * @param {string} userText
   * @param {string} model
   * @param {number} temperature
   * @param {AbortSignal|null} signal
   * @param {string} type - "translate" | "rewrite" (for logging)
   * @param {Object} extraMetadata - e.g. { style } for rewrite
   * @returns {Promise<Object>} { content, usage, model, cancelled, request_bytes, response_bytes, duration_ms }
   */
  async _streamChatCompletion(systemPrompt, userText, model, temperature, signal, type, extraMetadata = {}) {
    const body = {
      model,
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: userText },
      ],
      temperature,
      stream: true,
    };
    const bodyStr = JSON.stringify(body);
    const request_bytes = new TextEncoder().encode(bodyStr).length;
    const startTime = Date.now();

    const fetchOptions = {
      method: "POST",
      headers: await this.getHeaders(),
      body: bodyStr,
    };
    if (signal) fetchOptions.signal = signal;
    if (this._isWebMode) fetchOptions.credentials = "include";

    const url = await this.getRequestUrl("chat/completions");
    const config = require("../utils/config/configManager").default.getAll();
    const useProxy = !this._isWebMode && !!config.use_transrewrt_proxy;
    const requestStartMs = Date.now();
    if (PROXY_DEBUG && useProxy) {
      proxyDebug("_streamChatCompletion (proxy) START", {
        type,
        model,
        temperature,
        url,
        requestBytes: request_bytes,
        hasSignal: !!signal,
      });
    }
    const response = await fetch(url, fetchOptions);
    if (PROXY_DEBUG && useProxy) {
      proxyDebug("_streamChatCompletion (proxy) RESPONSE", {
        type,
        status: response.status,
        statusText: response.statusText,
        ok: response.ok,
        elapsedMs: Date.now() - requestStartMs,
      });
    }
    if (response.status === 401) {
      if (this._isWebMode) sessionExpiredHandler.onSessionExpired();
      throw Object.assign(new Error("Unauthorized"), { status: 401 });
    }
    if (!response.ok) {
      const msg = this.getErrorMessage(response.status, `HTTP error! status: ${response.status}`);
      throw Object.assign(new Error(msg), { status: response.status });
    }

    const reader = response.body.getReader();
    const decoder = new TextDecoder();
    let content = "";
    let usage = null;
    let generationId = null;
    let rawChunks = [];
    let aborted = false;
    let response_bytes = 0;
    let lineBuffer = "";
    let streamError = null;

    const processOneLine = (line) => {
      const trimmed = line.trim();
      if (!trimmed || trimmed === "data: [DONE]") return;
      if (!trimmed.startsWith("data: ")) return;
      try {
        const dataStr = trimmed.replace(/^data: /, "");
        const data = JSON.parse(dataStr);
        rawChunks.push(data);
        if (data.id && !generationId) generationId = data.id;
        if (data.choices?.[0]?.delta?.content) content += data.choices[0].delta.content;
        if (data.usage) usage = data.usage;
        if (data.error) {
          const msg = data.error.message || "Stream error";
          const err = new Error(msg);
          const code = data.error.code ?? data.error.status;
          if (code === 404 || code === "404" || /404|model not found/i.test(String(msg))) {
            Object.assign(err, { status: 404 });
          }
          streamError = err;
          return;
        }
      } catch (parseErr) {
        if (parseErr.message?.includes("Unexpected end of JSON input")) return;
        console.warn("Failed to parse stream chunk:", parseErr);
      }
    };

    if (signal?.aborted) {
      reader.cancel();
      aborted = true;
    }
    if (signal) {
      signal.addEventListener("abort", () => { aborted = true; }, { once: true });
    }

    try {
      while (true) {
        if (signal?.aborted) aborted = true;
        if (aborted) {
          if (!reader.closed) reader.cancel();
          break;
        }
        try {
          const { done, value } = await reader.read();
          if (value) {
            response_bytes += value.length;
            const chunk = decoder.decode(value, { stream: true });
            lineBuffer += chunk;
            const lines = lineBuffer.split("\n");
            lineBuffer = lines.pop() ?? "";
            for (const line of lines) processOneLine(line);
          }
          if (done) {
            if (lineBuffer.trim()) processOneLine(lineBuffer);
            break;
          }
        } catch (readErr) {
          if (readErr.name === "AbortError") {
            aborted = true;
            break;
          }
          throw readErr;
        }
      }
    } catch (error) {
      if (error.name === "AbortError") {
        const id = generationId || rawChunks.find((c) => c?.id)?.id;
        if (!usage && id) usage = await this.getGenerationUsage(id);
        const result = {
          content,
          usage,
          model,
          cancelled: true,
          request_bytes,
          response_bytes,
          duration_ms: Date.now() - startTime,
        };
        this.writeLastApiResult({ type, model, usage, cancelled: true, raw: rawChunks, ...extraMetadata });
        return result;
      }
      throw error;
    }

    const idForUsage = generationId || rawChunks.find((c) => c?.id)?.id;
    if (!usage && idForUsage) usage = await this.getGenerationUsage(idForUsage);
    if (streamError && !content && streamError.status === 404) throw streamError;
    const duration_ms = Date.now() - startTime;
    const result = {
      content,
      usage,
      model,
      cancelled: aborted,
      request_bytes,
      response_bytes,
      duration_ms,
    };
    if (PROXY_DEBUG && useProxy) {
      proxyDebug("_streamChatCompletion (proxy) DONE", {
        type,
        model,
        cancelled: aborted,
        duration_ms,
        response_bytes,
        prompt_tokens: usage?.prompt_tokens,
        completion_tokens: usage?.completion_tokens,
        generationId: idForUsage || generationId,
        contentLength: content?.length ?? 0,
        contentPreview: content ? content.slice(0, 80) + (content.length > 80 ? "..." : "") : "",
        usage,
      });
    }
    this.writeLastApiResult({ type, model, usage, cancelled: aborted, raw: rawChunks, ...extraMetadata });
    return result;
  }

  /**
   * Translate text from source language to target language
   * @param {string} text - Text to translate
   * @param {string} targetLang - Target language
   * @param {string} model - Model to use for translation
   * @param {string} sourceLang - Source language (optional)
   * @returns {Promise<Object>} Translation result with content and usage
   */
  async translate(text, targetLang, model, sourceLang = null, signal = null) {
    try {
      const systemPrompt = buildTranslatePrompt(sourceLang, targetLang);
      return await this._streamChatCompletion(systemPrompt, `<translate>${text}</translate>`, model, 0.3, signal, "translate", {});
    } catch (error) {
      // Re-throw AbortError so the caller can handle it properly
      if (error.name === 'AbortError') {
        throw error;
      }
      // Re-throw 404/400 so AppContext can remove the model from the list and switch to fallback
      const isUnavailable = error && (
        error.status === 404 || error.status === 400 ||
        (error.message && /404|400|model not found|HTTP error! status: (400|404)/i.test(String(error.message)))
      );
      if (isUnavailable) throw error;
      console.error("Translation error:", error);
      return {
        error: error.message,
      };
    }
  }

  /**
   * Translate a JSON object's string values to target language (one request; same prompt style as generate-translations).
   * @param {Object} fieldsObject - Object with string values to translate (e.g. { name, prompt_instructions, role, instructions, output_description })
   * @param {string} targetLang - Target language name
   * @param {string} model - Model id
   * @param {AbortSignal|null} signal - Optional abort signal
   * @returns {Promise<Object>} { content: translatedObject, usage, model, ... } or { error: string }
   */
  async translatePromptFieldsJson(fieldsObject, targetLang, model, signal = null) {
    try {
      const userMessage = `Translate the string values in this JSON object to ${targetLang}. Return ONLY a JSON object with the same keys and the translated strings. No other text.

${JSON.stringify(fieldsObject, null, 2)}

Respond with ONLY the JSON object. No other text.`;
      const result = await this._streamChatCompletion(
        resolvePrompt(prompts.translate_prompt_fields.system),
        userMessage,
        model,
        0.3,
        signal,
        "translate-prompt",
        {}
      );
      const raw = (result.content || "").trim().replace(/^```(?:json)?\s*|\s*```$/g, "").trim();
      let parsed;
      try {
        parsed = JSON.parse(raw);
      } catch (e) {
        console.error("translatePromptFieldsJson: invalid JSON", e.message, raw?.slice(0, 200));
        return { error: "Model response is not valid JSON" };
      }
      if (parsed == null || typeof parsed !== "object" || Array.isArray(parsed)) {
        return { error: "Model did not return a JSON object" };
      }
      return { ...result, content: parsed };
    } catch (error) {
      if (error.name === "AbortError") throw error;
      const isUnavailable = error && (
        error.status === 404 || error.status === 400 ||
        (error.message && /404|400|model not found|HTTP error! status: (400|404)/i.test(String(error.message)))
      );
      if (isUnavailable) throw error;
      console.error("translatePromptFieldsJson error:", error);
      return { error: error.message };
    }
  }

  /**
   * Improve a transform prompt config (role, instructions, temperature) via the model; returns improved JSON.
   * @param {Object} configObject - Current prompt config (name, role, instructions, output_description, temperature, prompt_instructions, target_language)
   * @param {string} model - Model id
   * @param {AbortSignal|null} signal - Optional abort signal
   * @returns {Promise<Object>} { content: improvedConfigObject, usage, model, ... } or { error: string }
   */
  async improvePromptConfigJson(configObject, model, signal = null) {
    try {
      const userMessage = `Improve this transform prompt configuration. Return ONLY a JSON object with the same keys and improved values for role, instructions, and temperature.

${JSON.stringify(configObject, null, 2)}

Respond with ONLY the JSON object. No other text.`;
      const result = await this._streamChatCompletion(
        resolvePrompt(prompts.improve_prompt_config.system),
        userMessage,
        model,
        0.3,
        signal,
        "improve-prompt-config",
        {}
      );
      const raw = (result.content || "").trim().replace(/^```(?:json)?\s*|\s*```$/g, "").trim();
      let parsed;
      try {
        parsed = JSON.parse(raw);
      } catch (e) {
        console.error("improvePromptConfigJson: invalid JSON", e.message, raw?.slice(0, 200));
        return { error: "Model response is not valid JSON" };
      }
      if (parsed == null || typeof parsed !== "object" || Array.isArray(parsed)) {
        return { error: "Model did not return a JSON object" };
      }
      return { ...result, content: parsed };
    } catch (error) {
      if (error.name === "AbortError") throw error;
      const isUnavailable = error && (
        error.status === 404 || error.status === 400 ||
        (error.message && /404|400|model not found|HTTP error! status: (400|404)/i.test(String(error.message)))
      );
      if (isUnavailable) throw error;
      console.error("improvePromptConfigJson error:", error);
      return { error: error.message };
    }
  }

  /**
   * Generate a transform prompt config from a user description; returns JSON with name, prompt_instructions, role, instructions, output_description, temperature.
   * @param {string} userDescription - What the user wants the prompt to do
   * @param {string} model - Model id
   * @param {AbortSignal|null} signal - Optional abort signal
   * @returns {Promise<Object>} { content: configObject, usage, model, ... } or { error: string }
   */
  async generatePromptConfigJson(userDescription, model, signal = null) {
    try {
      const userMessage = `Generate a transform prompt configuration for the following request. Return ONLY a valid JSON object with keys: name, prompt_instructions, role, instructions (array of strings), output_description, temperature (number 0–1).

User request: ${userDescription}

Respond with ONLY the JSON object. No other text.`;
      const result = await this._streamChatCompletion(
        resolvePrompt(prompts.generate_prompt_config.system),
        userMessage,
        model,
        0.3,
        signal,
        "generate-prompt-config",
        {}
      );
      const raw = (result.content || "").trim().replace(/^```(?:json)?\s*|\s*```$/g, "").trim();
      let parsed;
      try {
        parsed = JSON.parse(raw);
      } catch (e) {
        console.error("generatePromptConfigJson: invalid JSON", e.message, raw?.slice(0, 200));
        return { error: "Model response is not valid JSON" };
      }
      if (parsed == null || typeof parsed !== "object" || Array.isArray(parsed)) {
        return { error: "Model did not return a JSON object" };
      }
      return { ...result, content: parsed };
    } catch (error) {
      if (error.name === "AbortError") throw error;
      const isUnavailable = error && (
        error.status === 404 || error.status === 400 ||
        (error.message && /404|400|model not found|HTTP error! status: (400|404)/i.test(String(error.message)))
      );
      if (isUnavailable) throw error;
      console.error("generatePromptConfigJson error:", error);
      return { error: error.message };
    }
  }

  /**
   * Rewrite text with specified style
   * @param {string} text - Text to rewrite
   * @param {string} style - Style to apply
   * @param {string} model - Model to use for rewriting
   * @param {AbortSignal|null} signal - Optional abort signal
   * @returns {Promise<Object>} Rewrite result with content and usage
   */
  async rewrite(text, style, model, signal = null) {
    try {
      const styleConfig = prompts.rewrite.styles[style] || prompts.rewrite.fallback;

      return await this._streamChatCompletion(
        buildRewriteSystemPrompt(styleConfig),
        `<rewrite>${text}</rewrite>`,
        model,
        styleConfig.temperature,
        signal,
        "rewrite",
        { style },
      );
    } catch (error) {
      if (error.name === "AbortError") {
        throw error;
      }
      // Re-throw 404/400 so AppContext can remove the model from the list and switch to fallback
      const isUnavailable = error && (
        error.status === 404 || error.status === 400 ||
        (error.message && /404|400|model not found|HTTP error! status: (400|404)/i.test(String(error.message)))
      );
      if (isUnavailable) throw error;
      console.error("Rewrite error:", error);
      return {
        error: error.message,
      };
    }
  }

  /**
   * Transform text with a custom prompt config.
   * @param {string} text - Input text
   * @param {Object} promptConfig - Custom prompt (name, role, instructions, output_description, temperature, target_language: boolean)
   * @param {string} model - Model id
   * @param {string|null} targetLang - Target language for this run when prompt has ask-for-target-language enabled
   * @param {AbortSignal|null} signal
   * @returns {Promise<Object>} Same shape as rewrite() (content, usage, model, etc.)
   */
  async transform(text, promptConfig, model, targetLang = null, signal = null) {
    try {
      const systemPrompt = buildTransformSystemPrompt(promptConfig, targetLang);
      const temperature = Number(promptConfig.temperature) ?? 0.4;
      const userMessage = `<transform>${text}</transform>`;
      return await this._streamChatCompletion(
        systemPrompt,
        userMessage,
        model,
        temperature,
        signal,
        "transform",
        { transform_prompt: promptConfig.name ?? null },
      );
    } catch (error) {
      if (error.name === "AbortError") throw error;
      const isUnavailable = error && (
        error.status === 404 || error.status === 400 ||
        (error.message && /404|400|model not found|HTTP error! status: (400|404)/i.test(String(error.message)))
      );
      if (isUnavailable) throw error;
      console.error("Transform error:", error);
      return { error: error.message };
    }
  }

  /**
   * Get list of available models.
   * When using Transrewrt proxy, the proxy must buffer GET /models (not stream) so the client
   * receives the full JSON; otherwise upstream may be cancelled and the body truncated.
   * @returns {Promise<Array>} List of available models
   */
  async getModels() {
    try {
      const opts = { headers: await this.getHeaders() };
      if (this._isWebMode) opts.credentials = "include";
      const url = await this.getRequestUrl("models");
      const config = require("../utils/config/configManager").default.getAll();
      const useProxy = !this._isWebMode && !!config.use_transrewrt_proxy;
      if (PROXY_DEBUG && useProxy) {
        proxyDebug("getModels (proxy) START", { url });
      }
      const response = await fetch(url, opts);
      if (PROXY_DEBUG && useProxy) {
        proxyDebug("getModels (proxy) RESPONSE", { status: response.status, ok: response.ok });
      }
      if (response.status === 401) {
        if (this._isWebMode) sessionExpiredHandler.onSessionExpired();
        throw Object.assign(new Error("Unauthorized"), { status: 401 });
      }
      if (!response.ok) {
        throw new Error(this.getErrorMessage(response.status, `HTTP error! status: ${response.status}`));
      }

      // Read body as text; wrap in try/catch because if the proxy streamed and cancelled,
      // response.text() itself will throw a network/TypeError.
      let rawText;
      try {
        rawText = await response.text();
      } catch (bodyErr) {
        if (PROXY_DEBUG && useProxy) {
          proxyDebug("getModels (proxy) BODY READ FAILED", {
            error: bodyErr.message,
            name: bodyErr.name,
          });
        }
        throw bodyErr;
      }

      let data;
      try {
        data = JSON.parse(rawText);
      } catch (parseErr) {
        if (PROXY_DEBUG && useProxy) {
          proxyDebug("getModels (proxy) BODY PARSE FAILED", {
            error: parseErr.message,
            bodyLength: rawText.length,
            bodyPreview: rawText.slice(0, 200) + (rawText.length > 200 ? "..." : ""),
          });
        }
        throw parseErr;
      }

      this.writeDebugFile("models_api_raw.json", data);

      const models = data.data || [];
      if (PROXY_DEBUG && useProxy) {
        proxyDebug("getModels (proxy) DATA", {
          modelCount: models.length,
          modelIds: models.slice(0, 20).map((m) => m?.id).filter(Boolean),
          hasMore: models.length > 20,
        });
      }

      // Filter out invalid/incomplete models
      const validModels = models.filter(model => {
        // Must have an ID
        if (!model.id || typeof model.id !== 'string' || !model.id.trim()) {
          console.warn('[getModels] Filtering out model with missing/invalid id:', model);
          return false;
        }

        // Must have pricing information
        if (!model.pricing || typeof model.pricing !== 'object') {
          console.warn(`[getModels] Filtering out model "${model.id}" - missing pricing info`);
          return false;
        }

        // Pricing should have prompt and completion fields (even if 0)
        const prompt = parseFloat(model.pricing.prompt);
        const completion = parseFloat(model.pricing.completion);
        if (isNaN(prompt) || isNaN(completion)) {
          console.warn(`[getModels] Filtering out model "${model.id}" - invalid pricing values`);
          return false;
        }

        return true;
      });

      const filteredCount = models.length - validModels.length;
      if (filteredCount > 0) {
        console.log(`[getModels] Filtered out ${filteredCount} invalid/incomplete model(s). Returning ${validModels.length} valid models.`);
      }

      // Write valid models to debug file
      this.writeDebugFile('models_valid.json', validModels);

      return validModels;
    } catch (error) {
      console.error("Error fetching models:", error?.name, error?.message || error);
      this.writeDebugFile("models_api_error.json", {
        name: error?.name,
        message: error?.message,
        stack: error?.stack,
      });
      if (PROXY_DEBUG) {
        proxyDebug("getModels ERROR", {
          name: error?.name,
          message: error?.message,
        });
      }
      return [];
    }
  }
}

export default new APIService();

