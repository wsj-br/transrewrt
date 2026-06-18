import { getBasePath } from "../utils/misc/urlUtils";
import * as sessionExpiredHandler from "../utils/misc/sessionExpiredHandler";
import prompts from "../../config-defaults/prompts.json";
import { streamChoiceToString } from "../../shared/llm/streamDeltaContent.js";
import webAPI from "../utils/api/webApiClient";

function randomRequestId() {
  return globalThis.crypto?.randomUUID?.() || `req-${Date.now()}-${Math.random().toString(36).slice(2)}`;
}

function resolvePrompt(value) {
  return Array.isArray(value) ? value.join("\n") : value;
}

/** True only for an explicit user abort (AbortSignal), not network failures ("Failed to fetch"). */
function isAbortError(error) {
  return Boolean(error && error.name === "AbortError");
}

function buildTranslatePrompt(sourceLang, targetLang, promptHint = null, glossaryTerms = []) {
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
  let prompt = resolvePrompt(lines)
    .replace(/\{\{sourceLang\}\}/g, sourceLang || "")
    .replace(/\{\{targetLang\}\}/g, targetLang || "");
  if (Array.isArray(glossaryTerms) && glossaryTerms.length > 0) {
    const termLines = glossaryTerms.map((t) => `- ${t.source_text} → ${t.target_text}`).join("\n");
    prompt = `${prompt}\n\nGlossary — use these exact term mappings when they appear:\n${termLines}`;
  }
  if (promptHint && String(promptHint).trim()) {
    return `${prompt}\n\n[Preset instruction: ${String(promptHint).trim()}]`;
  }
  return prompt;
}

function buildAlternativeTranslatePrompt(sourceLang, targetLang) {
  const config = prompts.translate_alternative;
  const taskLines = [...config.task];
  if (sourceLang && sourceLang !== "Detect Language" && config.withSourceLanguageLine) {
    taskLines.unshift(config.withSourceLanguageLine);
  }
  const lines = [
    config.role,
    "",
    "Your task:",
    ...taskLines,
    ...config.footer,
  ];
  return resolvePrompt(lines)
    .replace(/\{\{sourceLang\}\}/g, sourceLang || "")
    .replace(/\{\{targetLang\}\}/g, targetLang || "");
}

function buildTranslateWordAlternativesPrompt(sourceLang, targetLang) {
  const config = prompts.translate_word_alternatives;
  const taskLines = [...config.task];
  if (sourceLang && sourceLang !== "Detect Language" && config.withSourceLanguageLine) {
    taskLines.unshift(config.withSourceLanguageLine);
  }
  const lines = [
    config.role,
    "",
    "Your task:",
    ...taskLines,
    ...config.footer,
  ];
  return resolvePrompt(lines)
    .replace(/\{\{sourceLang\}\}/g, sourceLang || "")
    .replace(/\{\{targetLang\}\}/g, targetLang || "");
}

function parseWordAlternativesJson(raw) {
  const trimmed = (raw || "").trim().replace(/^```(?:json)?\s*|\s*```$/g, "").trim();
  let parsed;
  try {
    parsed = JSON.parse(trimmed);
  } catch {
    return { error: "Model response is not valid JSON" };
  }
  if (!Array.isArray(parsed)) {
    return { error: "Model did not return a JSON array" };
  }
  const alternatives = [];
  for (const item of parsed) {
    if (typeof item === "string" && item.trim()) {
      alternatives.push({ text: item.trim(), replaces: null });
      continue;
    }
    if (item && typeof item === "object" && !Array.isArray(item)) {
      const text =
        typeof item.alternative === "string" ? item.alternative.trim() : "";
      const replaces =
        typeof item.replaces === "string" ? item.replaces.trim() : null;
      if (text) {
        alternatives.push({ text, replaces: replaces || null });
      }
    }
  }
  if (alternatives.length < 2 || alternatives.length > 4) {
    return { error: "Model returned an invalid number of alternatives" };
  }
  return { alternatives };
}

function buildRewriteSystemPrompt(styleConfig, sourceLang = null, promptHint = null) {
  const shared = prompts.shared.rewrite;
  const rewriteRoot = prompts.rewrite;
  const common = shared.common.map((line) =>
    line.replace(/\{\{outputDescription\}\}/g, styleConfig.outputDescription || "rewritten")
  );
  const taskBullets = [...styleConfig.bullets];
  const sourceLine = rewriteRoot?.withSourceLanguageLine;
  if (sourceLang && sourceLang !== "Detect Language" && sourceLine) {
    taskBullets.push(
      resolvePrompt(sourceLine).replace(/\{\{sourceLang\}\}/g, sourceLang),
    );
  }
  const lines = [
    styleConfig.role,
    "",
    "Your task:",
    ...taskBullets,
    "",
    ...common,
    ...shared.footer,
  ];
  let out = resolvePrompt(lines);
  if (promptHint && String(promptHint).trim()) {
    out = `${out}\n\n[Preset instruction: ${String(promptHint).trim()}]`;
  }
  return out;
}

/**
 * Build system prompt for Transform (custom prompts).
 * @param {Object} promptConfig - { role, instructions (array or JSON string), output_description, target_language?: boolean }
 * @param {string|null} statedFromLang - Explicit From language for this run (transform selector and/or workspace From), not "Detect Language"
 * @returns {string}
 */
function buildTransformSystemPrompt(promptConfig, statedFromLang = null, promptHint = null) {
  const shared = prompts.shared.transform;
  if (!shared) throw new Error("prompts.shared.transform not found");
  const instructions = Array.isArray(promptConfig.instructions)
    ? promptConfig.instructions
    : (() => {
        try {
          const parsed = JSON.parse(promptConfig.instructions || "[]");
          return Array.isArray(parsed) ? parsed : [String(promptConfig.instructions || "")];
        } catch {
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
  ];
  const xfSourceLine = shared.withSourceLanguageLine;
  if (statedFromLang && statedFromLang !== "Detect Language" && xfSourceLine) {
    lines.push(
      resolvePrompt(xfSourceLine).replace(/\{\{sourceLang\}\}/g, statedFromLang),
      "",
    );
  }
  lines.push(...common);
  lines.push("", ...shared.footer);
  let out = resolvePrompt(lines);
  if (promptHint && String(promptHint).trim()) {
    out = `${out}\n\n[Preset instruction: ${String(promptHint).trim()}]`;
  }
  return out;
}

const BASE_PATH = getBasePath();

const OPENROUTER_API_BASE = "https://openrouter.ai/api/v1";

// API service: Electron uses main-process LLM IPC; web uses authenticated /api/llm/* routes.
class APIService {
  _isWebMode = false;

  constructor() {
    this._isWebMode = typeof window !== "undefined" && !window.electronAPI?.getConfig;
  }

  setBaseUrl(_url) {
    /* Legacy no-op; model routing is namespaced per provider. */
  }

  /**
   * @param {string} modelId - Canonical model id (used to gate OpenRouter-only endpoints).
   */
  async getGenerationUsage(generationId, maxRetries = 5, modelId = "") {
    if (!generationId) return null;
    if (modelId && !String(modelId).startsWith("openrouter/")) return null;

    for (let attempt = 0; attempt < maxRetries; attempt++) {
      try {
        let url;
        const opts: RequestInit = { headers: { "Content-Type": "application/json" } };
        if (this._isWebMode) {
          url = `${BASE_PATH}/api/llm/generation?id=${encodeURIComponent(generationId)}`;
          opts.credentials = "include";
        } else {
          const secrets = (await window.electronAPI.getSecretsForRequest()) as {
            openrouter_api_key?: string;
          };
          const key = (secrets?.openrouter_api_key || "").trim();
          if (!key) return null;
          url = `${OPENROUTER_API_BASE}/generation?id=${encodeURIComponent(generationId)}`;
          opts.headers = {
            ...opts.headers,
            Authorization: `Bearer ${key}`,
            "HTTP-Referer": "https://github.com/wsj-br/transrewrt",
            "X-Title": "Transrewrt",
          };
        }
        const response = await fetch(url, opts);
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
   * Shared streaming chat completion (translate and rewrite).
   * @private
   */
  async _streamChatCompletion(systemPrompt, userText, model, temperature, signal, type, extraMetadata = {}) {
    const messages = [
      { role: "system", content: systemPrompt },
      { role: "user", content: userText },
    ];
    const payloadObj = {
      canonicalModelId: model,
      messages,
      temperature,
    };
    const request_bytes = new TextEncoder().encode(JSON.stringify(payloadObj)).length;
    const startTime = Date.now();

    if (!this._isWebMode && window.electronAPI?.llmStream) {
      const requestId = randomRequestId();
      if (signal) {
        signal.addEventListener(
          "abort",
          () => {
            window.electronAPI.llmAbort(requestId).catch(() => {});
          },
          { once: true },
        );
      }
      try {
        const { content, usage } = (await window.electronAPI.llmStream({
          requestId,
          canonicalModelId: model,
          messages,
          temperature,
        })) as { content?: string; usage?: Record<string, unknown> };
        const duration_ms = Date.now() - startTime;
        const result = {
          content: content || "",
          usage,
          model,
          cancelled: false,
          request_bytes,
          response_bytes: 0,
          duration_ms,
        };
        this.writeLastApiResult({ type, model, usage, cancelled: false, raw: [], ...extraMetadata });
        return result;
      } catch (error) {
        if (isAbortError(error) || error?.name === "AbortError") {
          const result = {
            content: "",
            usage: null,
            model,
            cancelled: true,
            request_bytes,
            response_bytes: 0,
            duration_ms: Date.now() - startTime,
          };
          this.writeLastApiResult({ type, model, usage: null, cancelled: true, raw: [], ...extraMetadata });
          return result;
        }
        throw error;
      }
    }

    const url = `${BASE_PATH}/api/llm/stream`;
    const fetchOptions: RequestInit = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payloadObj),
      credentials: "include",
    };
    if (signal) fetchOptions.signal = signal;

    const response = await fetch(url, fetchOptions);
    if (response.status === 401) {
      sessionExpiredHandler.onSessionExpired();
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
    const rawChunks = [];
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
        const deltaPiece = streamChoiceToString(data.choices?.[0]);
        if (deltaPiece) content += deltaPiece;
        if (data.usage) usage = data.usage;
        if (data.error) {
          const msg = data.error.message || "Stream error";
          const err = new Error(msg);
          const code = data.error.code ?? data.error.status;
          if (code === 404 || code === "404" || /404|model not found/i.test(String(msg))) {
            Object.assign(err, { status: 404 });
          }
          streamError = err;
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
        if (!usage && id) usage = await this.getGenerationUsage(id, 5, model);
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
    if (!usage && idForUsage) usage = await this.getGenerationUsage(idForUsage, 5, model);
    if (streamError && !content) throw streamError;
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
  async translate(text, targetLang, model, sourceLang = null, signal = null, promptHint = null, glossaryTerms = []) {
    try {
      const systemPrompt = buildTranslatePrompt(sourceLang, targetLang, promptHint, glossaryTerms);
      return await this._streamChatCompletion(systemPrompt, `<translate>${text}</translate>`, model, 0.3, signal, "translate", {});
    } catch (error) {
      if (isAbortError(error)) {
        return { cancelled: true, content: "", usage: null };
      }
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
   * Generate an alternative translation paraphrasing existing translation versions.
   * @param {string} originalText - Source text
   * @param {string|string[]} existingVersions - Current translation(s) to avoid repeating
   * @param {string} targetLang - Target language
   * @param {string} model - Model to use
   * @param {string|null} sourceLang - Source language (optional)
   * @param {AbortSignal|null} signal - Optional abort signal
   * @returns {Promise<Object>} Translation result with content and usage
   */
  async translateAlternative(originalText, existingVersions, targetLang, model, sourceLang = null, signal = null) {
    try {
      const versions = Array.isArray(existingVersions)
        ? existingVersions.filter((v) => typeof v === "string" && v.trim())
        : (existingVersions ? [existingVersions] : []);
      const systemPrompt = buildAlternativeTranslatePrompt(sourceLang, targetLang);
      const versionTags = versions
        .map((text, index) => `<version_${index + 1}>${text}</version_${index + 1}>`)
        .join("\n");
      const userMessage = `<original>${originalText}</original>\n<existing_translations>\n${versionTags}\n</existing_translations>`;
      return await this._streamChatCompletion(
        systemPrompt,
        userMessage,
        model,
        0.6,
        signal,
        "translate_alternative",
        {},
      );
    } catch (error) {
      if (isAbortError(error)) {
        return { cancelled: true, content: "", usage: null };
      }
      const isUnavailable = error && (
        error.status === 404 || error.status === 400 ||
        (error.message && /404|400|model not found|HTTP error! status: (400|404)/i.test(String(error.message)))
      );
      if (isUnavailable) throw error;
      console.error("Alternative translation error:", error);
      return {
        error: error.message,
      };
    }
  }

  /**
   * Suggest alternative wordings for a phrase within an existing translation.
   * @param {string} fullTranslation - Current translated output
   * @param {string} phrase - Selected phrase to replace
   * @param {string} originalText - Source input text
   * @param {string} targetLang - Target language
   * @param {string} model - Model to use
   * @param {string|null} sourceLang - Source language (optional)
   * @param {AbortSignal|null} signal - Optional abort signal
   * @returns {Promise<Object>} { alternatives: { text, replaces }[], usage, ... } or { error: string }
   */
  async translateWordAlternatives(
    fullTranslation,
    phrase,
    originalText,
    targetLang,
    model,
    sourceLang = null,
    signal = null,
  ) {
    try {
      const systemPrompt = buildTranslateWordAlternativesPrompt(sourceLang, targetLang);
      const userMessage = `<full_translation>${fullTranslation}</full_translation>\n<phrase>${phrase}</phrase>\n<original>${originalText}</original>`;
      const result = await this._streamChatCompletion(
        systemPrompt,
        userMessage,
        model,
        0.5,
        signal,
        "translate_word_alternatives",
        {},
      );
      if (result.cancelled) {
        return { cancelled: true, alternatives: [], usage: result.usage };
      }
      const parsed = parseWordAlternativesJson(result.content);
      if (parsed.error) {
        return { error: parsed.error, usage: result.usage, model: result.model };
      }
      return {
        ...result,
        alternatives: parsed.alternatives,
        content: undefined,
      };
    } catch (error) {
      if (isAbortError(error)) {
        return { cancelled: true, alternatives: [], usage: null };
      }
      const isUnavailable = error && (
        error.status === 404 || error.status === 400 ||
        (error.message && /404|400|model not found|HTTP error! status: (400|404)/i.test(String(error.message)))
      );
      if (isUnavailable) throw error;
      console.error("Word alternatives error:", error);
      return {
        error: error.message,
      };
    }
  }

  /**
   * Translate a JSON object's string values to target language (one request; same prompt style as ai-i18n-tools translate-ui).
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
      if (isAbortError(error)) {
        return { cancelled: true, content: null, usage: null };
      }
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
      if (isAbortError(error)) {
        return { cancelled: true, content: null, usage: null };
      }
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
      if (isAbortError(error)) {
        return { cancelled: true, content: null, usage: null };
      }
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
   * Rewrite text with specified mode
   * @param {string} text - Text to rewrite
   * @param {string} mode - Rewrite mode to apply
   * @param {string} model - Model to use for rewriting
   * @param {AbortSignal|null} signal - Optional abort signal
   * @returns {Promise<Object>} Rewrite result with content and usage
   */
  async rewrite(text, mode, model, signal = null, sourceLang = null, promptHint = null) {
    try {
      const modeConfig = prompts.rewrite.modes[mode] || prompts.rewrite.fallback;

      return await this._streamChatCompletion(
        buildRewriteSystemPrompt(modeConfig, sourceLang, promptHint),
        `<rewrite>${text}</rewrite>`,
        model,
        modeConfig.temperature,
        signal,
        "rewrite",
        { mode, source_lang: sourceLang || null },
      );
    } catch (error) {
      if (isAbortError(error)) {
        return { cancelled: true, content: "", usage: null };
      }
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
   * @param {AbortSignal|null} signal
   * @param {string|null} statedFromLang - From language for this run (prompt selector and/or workspace From), not "Detect Language"
   * @returns {Promise<Object>} Same shape as rewrite() (content, usage, model, etc.)
   */
  async transform(text, promptConfig, model, signal = null, statedFromLang = null, promptHint = null) {
    try {
      const systemPrompt = buildTransformSystemPrompt(promptConfig, statedFromLang, promptHint);
      const temperature = Number(promptConfig.temperature) || 0.4;
      const userMessage = `<transform>${text}</transform>`;
      return await this._streamChatCompletion(
        systemPrompt,
        userMessage,
        model,
        temperature,
        signal,
        "transform",
        { transform_prompt: promptConfig.name ?? null, stated_from_lang: statedFromLang || null },
      );
    } catch (error) {
      if (isAbortError(error)) {
        return { cancelled: true, content: "", usage: null };
      }
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
   * @returns {Promise<Array>} List of available models { id, name, pricing }
   */
  async getModels() {
    try {
      let models;
      if (!this._isWebMode && window.electronAPI?.llmModels) {
        models = await window.electronAPI.llmModels();
      } else {
        const response = await fetch(`${BASE_PATH}/api/llm/models`, {
          credentials: "include",
        });
        if (response.status === 401) {
          sessionExpiredHandler.onSessionExpired();
          throw Object.assign(new Error("Unauthorized"), { status: 401 });
        }
        if (!response.ok) {
          throw new Error(
            this.getErrorMessage(response.status, `HTTP error! status: ${response.status}`),
          );
        }
        const data = await response.json();
        models = data.data || [];
      }

      this.writeDebugFile("models_api_raw.json", { data: models });

      const validModels = models.filter((model) => {
        if (!model.id || typeof model.id !== "string" || !model.id.trim()) {
          console.warn("[getModels] Filtering out model with missing/invalid id:", model);
          return false;
        }
        if (!model.pricing || typeof model.pricing !== "object") {
          console.warn(`[getModels] Filtering out model "${model.id}" - missing pricing info`);
          return false;
        }
        const prompt = parseFloat(model.pricing.prompt);
        const completion = parseFloat(model.pricing.completion);
        if (Number.isNaN(prompt) || Number.isNaN(completion)) {
          console.warn(`[getModels] Filtering out model "${model.id}" - invalid pricing values`);
          return false;
        }
        return true;
      });

      this.writeDebugFile("models_valid.json", validModels);
      return validModels;
    } catch (error) {
      console.error("Error fetching models:", error?.name, error?.message || error);
      this.writeDebugFile("models_api_error.json", {
        name: error?.name,
        message: error?.message,
        stack: error?.stack,
      });
      return [];
    }
  }
}

export default new APIService();

/** Routes glossary CRUD to Electron IPC or web API depending on runtime. */
export const glossaryApi = {
  getAll: () =>
    window.electronAPI?.glossary
      ? window.electronAPI.glossary.getAll()
      : webAPI.glossary.getAll(),
  getByLangPair: (sourceLang: string, targetLang: string) =>
    window.electronAPI?.glossary
      ? window.electronAPI.glossary.getByLangPair(sourceLang, targetLang)
      : webAPI.glossary.getByLangPair(sourceLang, targetLang),
  create: (term: object) =>
    window.electronAPI?.glossary
      ? window.electronAPI.glossary.create(term)
      : webAPI.glossary.create(term),
  update: (id: number, term: object) =>
    window.electronAPI?.glossary
      ? window.electronAPI.glossary.update(id, term)
      : webAPI.glossary.update(id, term),
  delete: (id: number) =>
    window.electronAPI?.glossary
      ? window.electronAPI.glossary.delete(id)
      : webAPI.glossary.delete(id),
  import: (terms: object[]) =>
    window.electronAPI?.glossary
      ? window.electronAPI.glossary.import(terms)
      : webAPI.glossary.import(terms),
};

