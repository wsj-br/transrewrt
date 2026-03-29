import fs from "fs";
import chalk from "chalk";
import { normalizeLocale, resolveTranslationModels } from "./config";

/** OpenRouter: prefer highest-throughput provider; allow backup providers. https://openrouter.ai/docs/guides/routing/provider-selection */
const OPENROUTER_PROVIDER = {
  sort: "throughput" as const,
  allow_fallbacks: true,
};
import {
  BatchTranslationError,
  BatchTranslationResult,
  Segment,
  TranslationConfig,
  TranslationResult,
} from "./types";

/**
 * Extra system-prompt guidance so models do not break CommonMark / GFM structure.
 * Fenced ``` blocks are not sent to the model (`DocumentSplitter` marks them non-translatable).
 */
const MARKDOWN_PRESERVATION_RULES = `Markdown structure: Preserve heading levels (#–######), list markers and indentation, blockquotes (>), horizontal rules, and meaningful line breaks. Keep **bold**, *italic*, and \`inline code\` spans intact with balanced delimiters (do not drop closing **, *, or backticks). In [visible text](url), ![alt](path), and HTML like <img …> / <a …>, translate only the visible link text or alt; keep URLs, paths, angle-bracket links, and attribute names unchanged. Preserve GFM pipe tables (| cells |).`;

/** Message content with cache_control for context caching (OpenRouter). */
interface OpenRouterContentBlock {
  type: "text";
  text: string;
  cache_control?: { type: "ephemeral"; ttl?: string };
}

interface OpenRouterMessage {
  role: "user" | "assistant" | "system";
  content: string | OpenRouterContentBlock[];
}

interface OpenRouterResponse {
  id: string;
  choices: Array<{
    message: {
      content: string;
    };
    finish_reason: string;
  }>;
  usage: {
    prompt_tokens: number;
    completion_tokens: number;
    total_tokens: number;
    cost?: number; // Actual cost in credits (USD) - located in usage object
    cost_details?: {
      upstream_inference_cost?: number;
    };
  };
}

/** Request body sent to OpenRouter (never includes API key). */
interface OpenRouterRequestPayload {
  model: string;
  max_tokens: number;
  temperature: number;
  messages: OpenRouterMessage[];
  provider: typeof OPENROUTER_PROVIDER;
}

export class Translator {
  private apiKey: string;
  private baseUrl: string;
  private readonly modelsToTry: string[];
  private maxTokens: number;
  private temperature: number;
  private debugTrafficFilePath: string | null;
  private readonly localeDisplayNames: Record<string, string>;
  private readonly sourceLanguageLabel: string;

  constructor(config: TranslationConfig, debugTrafficFilePath?: string | null) {
    this.apiKey = process.env.OPENROUTER_API_KEY || "";
    if (!this.apiKey) {
      throw new Error("OPENROUTER_API_KEY environment variable is required");
    }

    this.baseUrl = config.openrouter.baseUrl;
    this.modelsToTry = resolveTranslationModels(config.openrouter);
    if (this.modelsToTry.length === 0) {
      throw new Error(
        "No OpenRouter models configured (translationModels or defaultModel)"
      );
    }
    this.maxTokens = config.openrouter.maxTokens;
    this.temperature = config.openrouter.temperature;
    this.debugTrafficFilePath = debugTrafficFilePath ?? null;
    this.localeDisplayNames = { ...(config.locales.displayNames ?? {}) };
    const srcNorm = normalizeLocale(config.locales.source);
    this.sourceLanguageLabel =
      this.localeDisplayNames[srcNorm] ?? config.locales.source;
  }

  private targetLanguageLabel(localeCode: string): string {
    const n = normalizeLocale(localeCode);
    return this.localeDisplayNames[n] ?? localeCode;
  }

  /** Match doc-translate log lines: two-space indent, locale, filename. */
  private warnModelSwitch(
    localeCode: string,
    relativePath: string | undefined,
    failedModel: string,
    nextModel: string,
    error: unknown
  ): void {
    const loc = relativePath != null ? `${localeCode} ${relativePath}` : localeCode;
    const detail =
      error instanceof Error ? error.message : String(error);
    console.warn(
      chalk.yellow(
        `  ⚠️  ${loc}: ${failedModel} failed (${detail}). Trying ${nextModel}…`
      )
    );
  }

  private appendDebugLog(direction: "request" | "response", payload: unknown): void {
    if (!this.debugTrafficFilePath) return;
    const ts = new Date().toISOString();
    const sep = `========== ${direction.toUpperCase()} ${ts} ==========`;
    const body = typeof payload === "string" ? payload : JSON.stringify(payload, null, 2);
    try {
      fs.appendFileSync(this.debugTrafficFilePath, `${sep}\n${body}\n\n`, "utf-8");
    } catch (e) {
      console.warn(`[debug-traffic] Failed to write to ${this.debugTrafficFilePath}: ${e}`);
    }
  }

  /**
   * @param startModelIndex - First index in `translationModels` to try (for validation retries skipping earlier models).
   */
  async translate(
    content: string,
    targetLocale: string,
    glossaryHints: string[],
    relativePath?: string,
    startModelIndex: number = 0
  ): Promise<TranslationResult> {
    const { systemPrompt, userContent } = this.buildPrompt(content, targetLocale, glossaryHints);

    const call = async (model: string) => {
      const res = await this.callApi(model, systemPrompt, userContent);
      return { ...res, content: this.stripTranslateTags(res.content) };
    };

    const start = Math.max(0, Math.floor(startModelIndex));
    if (start >= this.modelsToTry.length) {
      throw new Error(
        `startModelIndex ${startModelIndex} is out of range (${this.modelsToTry.length} model(s) configured)`
      );
    }

    let lastError: unknown;
    for (let i = start; i < this.modelsToTry.length; i++) {
      const model = this.modelsToTry[i];
      try {
        return await call(model);
      } catch (error) {
        lastError = error;
        if (i < this.modelsToTry.length - 1) {
          this.warnModelSwitch(
            targetLocale,
            relativePath,
            model,
            this.modelsToTry[i + 1]!,
            error
          );
        }
      }
    }
    throw new Error(
      `All translation models failed (from index ${start}: ${this.modelsToTry.slice(start).join(", ")}). Last error: ${lastError}`
    );
  }

  /** Ordered model ids (same chain as translate / translateBatch). */
  getConfiguredModels(): readonly string[] {
    return this.modelsToTry;
  }

  /** Remove stray <translate>...</translate> wrapper if LLM echoes it back. */
  private stripTranslateTags(content: string): string {
    return content
      .replace(/^\s*<translate>\s*/i, "")
      .replace(/\s*<\/translate>\s*$/i, "")
      .trim();
  }

  /**
   * Translate multiple segments in a single API call. Returns translations plus usage/cost for stats.
   * @throws BatchTranslationError if the number of returned tags doesn't match the input (caller can fall back to single-segment mode).
   */
  async translateBatch(
    segments: Segment[],
    locale: string,
    glossaryHints: string[] = [],
    relativePath?: string
  ): Promise<BatchTranslationResult> {
    if (segments.length === 0) {
      return {
        translations: new Map<number, string>(),
        model: this.modelsToTry[0]!,
        usage: { inputTokens: 0, outputTokens: 0, totalTokens: 0 },
      };
    }

    const { systemPrompt, userContent } = this.buildBatchPrompt(segments, locale, glossaryHints);

    const call = async (model: string) => {
      const result = await this.callApi(model, systemPrompt, userContent);
      const translations = this.parseBatchResponse(
        result.content,
        segments,
        result.content
      );
      return {
        translations,
        model: result.model,
        usage: result.usage,
        cost: result.cost,
      };
    };

    let lastError: unknown;
    for (let i = 0; i < this.modelsToTry.length; i++) {
      const model = this.modelsToTry[i];
      try {
        return await call(model);
      } catch (error) {
        lastError = error;
        if (i < this.modelsToTry.length - 1) {
          this.warnModelSwitch(
            locale,
            relativePath,
            model,
            this.modelsToTry[i + 1]!,
            error
          );
        }
      }
    }
    throw new Error(
      `All translation models failed (${this.modelsToTry.join(", ")}). Last error: ${lastError}`
    );
  }

  private escapeXml(text: string): string {
    return text
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  /** Reverse escapeXml so output renders correctly in markdown. Must unescape &amp; last. */
  private unescapeXml(text: string): string {
    return text
      .replace(/&quot;/g, '"')
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">")
      .replace(/&amp;/g, "&");
  }

  private buildBatchPrompt(
    segments: Segment[],
    targetLocale: string,
    glossaryHints: string[]
  ): { systemPrompt: string; userContent: string } {
    const targetLanguage = this.targetLanguageLabel(targetLocale);

    let glossarySection = "";
    if (glossaryHints.length > 0) {
      glossarySection = `\n<glossary>\n${glossaryHints.join("\n")}\n</glossary>\n`;
    }

    const segBlocks = segments
      .map((s, i) => `<seg id="${i}">${this.escapeXml(s.content)}</seg>`)
      .join("\n");

    const systemPrompt = `Translate from ${this.sourceLanguageLabel} to ${targetLanguage}.

Rules: Keep headers (###), inline \`code\`, variables, URLs, line breaks, markdown formatting, placeholders {{X}} unchanged. Preserve exactly (do not translate or alter): {{ADM_OPEN_N}}, {{ADM_END_N}}, {{URL_PLACEHOLDER_N}}, {{HTML_ANCHOR_N}}, {{DOC_HEADING_ID_N}}. Translate only title/description in front matter. Prefer glossary terms. Maintain coherence on the translated terminology.

${MARKDOWN_PRESERVATION_RULES}

Reply with ONLY <t id="N">translation</t> blocks, one per segment, in order. No other text.${glossarySection}`;

    const userContent = `<segments>
${segBlocks}
</segments>`;

    return { systemPrompt, userContent };
  }

  private parseBatchResponse(
    response: string,
    segments: Segment[],
    rawResponse: string
  ): Map<number, string> {
    // Non-greedy capture; \s* handles newlines/whitespace the LLM may add inside tags
    const regex = /<t\s+id="(\d+)"[^>]*>\s*([\s\S]*?)\s*<\/t>/g;
    const byIndex = new Map<number, string>();
    let match;

    while ((match = regex.exec(response)) !== null) {
      const id = parseInt(match[1], 10);
      const rawContent = match[2].trim();
      const content = this.unescapeXml(rawContent);
      byIndex.set(id, content);
    }

    if (byIndex.size !== segments.length) {
      throw new BatchTranslationError(segments.length, byIndex.size, rawResponse);
    }

    for (let i = 0; i < segments.length; i++) {
      if (byIndex.get(i) === undefined) {
        throw new BatchTranslationError(segments.length, byIndex.size, rawResponse);
      }
    }
    return byIndex;
  }

  private async callApi(
    model: string,
    systemPrompt: string,
    userContent: string
  ): Promise<TranslationResult> {
    const messages: OpenRouterMessage[] = [
      {
        role: "system",
        content: [
          {
            type: "text",
            text: systemPrompt,
            cache_control: { type: "ephemeral" },
          },
        ],
      },
      { role: "user", content: userContent },
    ];

    const requestPayload: OpenRouterRequestPayload = {
      model,
      max_tokens: this.maxTokens,
      temperature: this.temperature,
      messages,
      provider: OPENROUTER_PROVIDER,
    };

    if (this.debugTrafficFilePath) {
      this.appendDebugLog("request", requestPayload);
    }

    const response = await fetch(`${this.baseUrl}/chat/completions`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${this.apiKey}`,
        "Content-Type": "application/json",
        "HTTP-Referer": "https://github.com/wsj-br/transrewrt",
        "X-Title": "transrewrt-translate-docs",
      },
      body: JSON.stringify(requestPayload),
    });

    const rawBody = await response.text();

    if (this.debugTrafficFilePath) {
      this.appendDebugLog("response", {
        status: response.status,
        ok: response.ok,
        body: response.ok ? (JSON.parse(rawBody) as OpenRouterResponse) : rawBody,
      });
    }

    if (!response.ok) {
      throw new Error(`OpenRouter API error: ${response.status} - ${rawBody}`);
    }

    const data: OpenRouterResponse = JSON.parse(rawBody);

    // Debug: Log cost field location if available
    if (process.env.DEBUG_COST === "true") {
      console.error(`[DEBUG] Top-level cost: ${(data as any).cost}`);
      console.error(`[DEBUG] Usage cost: ${data.usage.cost}`);
      console.error(`[DEBUG] Usage keys:`, Object.keys(data.usage));
      console.error(`[DEBUG] Full usage object:`, JSON.stringify(data.usage, null, 2));
    }

    const cost = data.usage.cost ?? (data as any).cost;
    
    // Debug logging
    if (process.env.DEBUG_COST === "true") {
      console.error(`[DEBUG] Extracted cost: ${cost}`);
      console.error(`[DEBUG] Cost type: ${typeof cost}`);
    }

    return {
      content: data.choices[0].message.content,
      model,
      usage: {
        inputTokens: data.usage.prompt_tokens,
        outputTokens: data.usage.completion_tokens,
        totalTokens: data.usage.total_tokens,
      },
      cost: cost, // Cost from usage.cost
    };
  }

  private buildPrompt(
    content: string,
    targetLocale: string,
    glossaryHints: string[]
  ): { systemPrompt: string; userContent: string } {
    const targetLanguage = this.targetLanguageLabel(targetLocale);

    let glossarySection = "";
    if (glossaryHints.length > 0) {
      glossarySection = `\n<glossary>\n${glossaryHints.join("\n")}\n</glossary>\n`;
    }

    const systemPrompt = `Translate from ${this.sourceLanguageLabel} to ${targetLanguage}.

Rules: Keep headers (###), inline \`code\`, variables, URLs, line breaks, markdown formatting, placeholders {{X}} unchanged. Preserve exactly (do not translate or alter): {{ADM_OPEN_N}}, {{ADM_END_N}}, {{URL_PLACEHOLDER_N}}, {{HTML_ANCHOR_N}}, {{DOC_HEADING_ID_N}}. Translate only title/description in front matter. Prefer glossary terms. Maintain coherence on the translated terminology.

${MARKDOWN_PRESERVATION_RULES}

Example (same structure in ${targetLanguage}):
Input:
### Section title
Body line with \`CODE\` and {{PLACEHOLDER}}.

Output:
### [Translated section title]
[Translated body line with \`CODE\` and {{PLACEHOLDER}}.]

---
Translate the content inside the <translate> tags below. Output ONLY the translated text - do NOT include <translate> or </translate> tags in your response. No explanations or extra markup.${glossarySection}`;

    const userContent = `<translate>
${content}
</translate>`;

    return { systemPrompt, userContent };
  }
}
