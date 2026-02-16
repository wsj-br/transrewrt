// Detect base path from window location for reverse proxy support (e.g., /translator)
function getBasePath() {
  if (typeof window !== "undefined" && window.location.pathname) {
    const path = window.location.pathname.replace(/\/$/, "");
    if (path && path !== "/") {
      return path;
    }
  }
  return "";
}

const BASE_PATH = getBasePath();

// API service to communicate with the backend
// In Electron: calls OpenRouter directly. In Web/Docker: calls server proxy (API key stays on server).
class APIService {
  constructor() {
    this._isWebMode = typeof window !== "undefined" && !window.electronAPI?.readConfig;
    this.baseUrl = this._isWebMode ? `${BASE_PATH}/api/proxy` : "https://openrouter.ai/api/v1";
  }

  /**
   * Set the base URL for API requests
   * In web mode, we use /api/proxy (server adds API key). In Electron, use OpenRouter URL.
   */
  setBaseUrl(url) {
    if (this._isWebMode) {
      this.baseUrl = `${BASE_PATH}/api/proxy`;
    } else {
      this.baseUrl = url || "https://openrouter.ai/api/v1";
    }
  }

  getHeaders() {
    if (this._isWebMode) {
      return { "Content-Type": "application/json" };
    }
    const config = require("../utils/configManager").default.getAll();
    return {
      "Content-Type": "application/json",
      Authorization: `Bearer ${config.api_key || ""}`,
      "HTTP-Referer":
        "https://github.com/TranslateRewrite/translator-and-rewriter",
      "X-Title": "Translator & Rewriter",
    };
  }

  writeDebugFile(filename, data) {
    try {
      const electronRequire =
        typeof window !== "undefined" && window.require ? window.require : null;
      if (!electronRequire) {
        console.log(`[debug] Not in Electron environment, skipping write to ${filename}`);
        return;
      }
      const fs = electronRequire("fs");
      const path = electronRequire("path");
      const filePath = path.join(process.cwd(), filename);
      fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf8");
      console.log(`[debug] Wrote ${filename} to ${filePath}`);
    } catch (err) {
      console.error(`Failed to write ${filename}:`, err);
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
    try {
      const electronRequire =
        typeof window !== "undefined" && window.require ? window.require : null;
      if (!electronRequire) return;
      const fs = electronRequire("fs");
      const path = electronRequire("path");
      const filePath = path.join(process.cwd(), "last_api_result.json");
      fs.writeFileSync(filePath, JSON.stringify(payload, null, 2), "utf8");
    } catch (err) {
      console.error("Failed to write last_api_result.json", err);
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
    for (let attempt = 0; attempt < maxRetries; attempt++) {
      try {
        const url = `${this.baseUrl}/generation?id=${encodeURIComponent(generationId)}`;
        const response = await fetch(url, { headers: this.getHeaders() });
        if (response.status === 404 && attempt < maxRetries - 1) {
          await new Promise((r) => setTimeout(r, 1000 * (attempt + 1)));
          continue;
        }
        if (!response.ok) return null;
        const json = await response.json();
        const data = json.data;
        if (!data) return null;
        return {
          cost: data.total_cost ?? data.usage ?? 0,
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
   * Translate text from source language to target language
   * @param {string} text - Text to translate
   * @param {string} targetLang - Target language
   * @param {string} model - Model to use for translation
   * @param {string} sourceLang - Source language (optional)
   * @returns {Promise<Object>} Translation result with content and usage
   */
  async translate(text, targetLang, model, sourceLang = null, signal = null) {
    try {
      let systemPrompt;

      if (sourceLang && sourceLang !== "Detect Language") {
        systemPrompt = `You are a professional translator specializing in ${sourceLang} to ${targetLang} translation.

Your task:
- Translate the user's text from ${sourceLang} into natural, fluent ${targetLang}
- Preserve the original tone, style, and intent
- Maintain any formatting (line breaks, bullet points, etc.)
- Keep proper nouns, technical terms, and brand names unchanged unless they have standard translations
- Do not add explanations, notes, or commentary
- Output only the translated text`;
      } else {
        systemPrompt = `You are a professional translator specializing in ${targetLang}.

Your task:
- Translate the user's text into natural, fluent ${targetLang}
- Preserve the original tone, style, and intent
- Maintain any formatting (line breaks, bullet points, etc.)
- Keep proper nouns, technical terms, and brand names unchanged unless they have standard translations
- Do not add explanations, notes, or commentary
- Output only the translated text`;
      }

      const fetchOptions = {
        method: "POST",
        headers: this.getHeaders(),
        body: JSON.stringify({
          model: model,
          messages: [
            { role: "system", content: systemPrompt },
            { role: "user", content: text },
          ],
          temperature: 0.3, // Lower temperature for more consistent translations
          stream: true, // Use streaming to capture partial usage on cancellation
        }),
      };

      if (signal) {
        fetchOptions.signal = signal;
      }

      const response = await fetch(`${this.baseUrl}/chat/completions`, fetchOptions);

      if (!response.ok) {
        throw new Error(this.getErrorMessage(response.status, `HTTP error! status: ${response.status}`));
      }

      // Handle streaming response
      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let content = "";
      let usage = null;
      let generationId = null;
      let rawChunks = [];
      let aborted = false;

      // Check if abort was requested before starting
      if (signal?.aborted) {
        reader.cancel();
        aborted = true;
      }

      // Listen for abort signal
      if (signal) {
        signal.addEventListener('abort', () => {
          aborted = true;
          // Don't cancel reader immediately - let it drain buffered data
        }, { once: true });
      }

      try {
        while (true) {
          if (signal?.aborted) aborted = true;
          try {
            const { done, value } = await reader.read();
            if (done) break;
            if (value) {
              const chunk = decoder.decode(value, { stream: true });
              const lines = chunk.split("\n");

              for (const line of lines) {
                const trimmed = line.trim();
                if (!trimmed || trimmed === "data: [DONE]") continue;
                if (!trimmed.startsWith("data: ")) continue;

                try {
                  const dataStr = trimmed.replace(/^data: /, "");
                  const data = JSON.parse(dataStr);
                  rawChunks.push(data);

                  // Capture generation ID from first chunk (for fetching usage after cancel)
                  if (data.id && !generationId) {
                    generationId = data.id;
                  }

                  // Capture content delta
                  if (data.choices && data.choices[0]?.delta?.content) {
                    content += data.choices[0].delta.content;
                  }

                  // Capture usage from final chunk (or any chunk with usage)
                  if (data.usage) {
                    usage = data.usage;
                  }

                  // Check for errors in stream
                  if (data.error) {
                    throw new Error(data.error.message || "Stream error");
                  }
                } catch (parseErr) {
                  if (parseErr.message.includes("Unexpected end of JSON input")) {
                    // Ignore incomplete JSON chunks
                    continue;
                  }
                  console.warn("Failed to parse stream chunk:", parseErr);
                }
              }
            }
          } catch (readErr) {
            if (readErr.name === 'AbortError') {
              break;
            }
            throw readErr;
          }

          // If we've been aborted, try to read once more to get final usage chunk
          if (aborted && !reader.closed) {
            try {
              const { done, value } = await reader.read();
              if (done) break;
              // Process any remaining buffered data
              if (value) {
                const chunk = decoder.decode(value, { stream: true });
                const lines = chunk.split("\n");
                for (const line of lines) {
                  const trimmed = line.trim();
                  if (!trimmed || trimmed === "data: [DONE]") continue;
                  if (!trimmed.startsWith("data: ")) continue;
                  try {
                    const dataStr = trimmed.replace(/^data: /, "");
                    const data = JSON.parse(dataStr);
                    rawChunks.push(data);
                    if (data.choices && data.choices[0]?.delta?.content) {
                      content += data.choices[0].delta.content;
                    }
                    if (data.usage) {
                      usage = data.usage;
                    }
                  } catch (e) {
                    // ignore
                  }
                }
              }
            } catch (e) {
              // ignore errors when draining
            }
            break;
          }
        }
      } catch (error) {
        if (error.name === 'AbortError') {
          const id = generationId || rawChunks.find((c) => c && c.id)?.id;
          if (!usage && id) {
            usage = await this.getGenerationUsage(id);
          }
          const result = {
            content: content,
            usage: usage,
            model: model,
            cancelled: true,
          };
          this.writeLastApiResult({
            type: "translate",
            model,
            usage: usage,
            cancelled: true,
            raw: rawChunks,
          });
          return result;
        }
        throw error;
      }

      const idForUsage = generationId || rawChunks.find((c) => c && c.id)?.id;
      if (aborted && !usage && idForUsage) {
        usage = await this.getGenerationUsage(idForUsage);
      }

      const result = {
        content: content,
        usage: usage,
        model: model,
        cancelled: aborted,
      };

      this.writeLastApiResult({
        type: "translate",
        model,
        usage: usage,
        cancelled: aborted,
        raw: rawChunks,
      });

      return result;
    } catch (error) {
      // Re-throw AbortError so the caller can handle it properly
      if (error.name === 'AbortError') {
        throw error;
      }
      console.error("Translation error:", error);
      return {
        error: error.message,
      };
    }
  }

  /**
   * Rewrite text with specified style
   * @param {string} text - Text to rewrite
   * @param {string} style - Style to apply
   * @param {string} model - Model to use for rewriting
   * @returns {Promise<Object>} Rewrite result with content and usage
   */
  async rewrite(text, style, model, signal = null) {
    try {
      const stylePrompts = {
        "Check Spelling & Grammar": {
          system: `You are a meticulous proofreader and copy editor.

Your task:
- Fix all spelling errors, typos, and grammatical mistakes
- Correct punctuation and capitalization issues
- Ensure proper sentence structure
- Preserve the original meaning, tone, and style
- Maintain all formatting (line breaks, lists, etc.)
- Do not rewrite or rephrase unless necessary for grammatical correctness
- Output only the corrected text without explanations`,
          temperature: 0.2,
        },

        "Improve Clarity": {
          system: `You are a skilled editor specializing in clear communication.

Your task:
- Rewrite the text to improve clarity and readability
- Simplify complex sentences while preserving meaning
- Remove ambiguity and redundancy
- Use active voice where appropriate
- Maintain the original tone and formality level
- Keep all key information and formatting
- Output only the improved text without explanations`,
          temperature: 0.4,
        },

        "Make Formal": {
          system: `You are a professional business writer.

Your task:
- Rewrite the text in a formal, professional style
- Use sophisticated vocabulary and complete sentences
- Avoid contractions, slang, and colloquialisms
- Maintain respectful and courteous tone
- Preserve all key information and meaning
- Keep formatting intact
- Output only the formal version without explanations`,
          temperature: 0.3,
        },

        "Make Informal": {
          system: `You are a conversational writer who makes content approachable.

Your task:
- Rewrite the text in a casual, friendly style
- Use conversational language and contractions
- Make it sound natural and personable
- Keep the message clear and engaging
- Preserve all key information and meaning
- Maintain formatting
- Output only the informal version without explanations`,
          temperature: 0.5,
        },

        "Shorten": {
          system: `You are an expert at concise writing.

Your task:
- Condense the text to its essential message
- Remove redundancy, filler words, and unnecessary details
- Keep all critical information and key points
- Maintain clarity and readability
- Preserve the original tone
- Keep formatting where relevant
- Output only the shortened text without explanations`,
          temperature: 0.3,
        },

        "Expand": {
          system: `You are a skilled content developer.

Your task:
- Expand the text with relevant details and context
- Add explanations, examples, or supporting information
- Improve depth while maintaining focus
- Keep the writing natural and coherent
- Preserve the original message and tone
- Maintain logical structure and formatting
- Output only the expanded text without explanations`,
          temperature: 0.6,
        },

        "Make Technical": {
          system: `You are a technical writer with domain expertise.

Your task:
- Rewrite the text using precise, technical language
- Replace general terms with specific technical terminology
- Add technical accuracy and detail where appropriate
- Maintain professional tone
- Ensure clarity despite increased technicality
- Preserve all key information and formatting
- Output only the technical version without explanations`,
          temperature: 0.4,
        },
      };

      const styleConfig = stylePrompts[style] || {
        system: `You are a professional writer.

Your task:
- Rewrite the user's text to improve it
- Maintain the original meaning and key information
- Preserve formatting
- Output only the rewritten text without explanations`,
        temperature: 0.4,
      };

      const fetchOptions = {
        method: "POST",
        headers: this.getHeaders(),
        body: JSON.stringify({
          model: model,
          messages: [
            { role: "system", content: styleConfig.system },
            { role: "user", content: text },
          ],
          temperature: styleConfig.temperature,
          stream: true, // Use streaming to capture partial usage on cancellation
        }),
      };

      if (signal) {
        fetchOptions.signal = signal;
      }

      const response = await fetch(`${this.baseUrl}/chat/completions`, fetchOptions);

      if (!response.ok) {
        throw new Error(this.getErrorMessage(response.status, `HTTP error! status: ${response.status}`));
      }

      // Handle streaming response
      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let content = "";
      let usage = null;
      let generationId = null;
      let rawChunks = [];
      let aborted = false;

      try {
        while (true) {
          if (signal?.aborted) aborted = true;
          const { done, value } = await reader.read();
          if (done) break;

          const chunk = decoder.decode(value);
          const lines = chunk.split("\n");

          for (const line of lines) {
            const trimmed = line.trim();
            if (!trimmed || trimmed === "data: [DONE]") continue;
            if (!trimmed.startsWith("data: ")) continue;

            try {
              const dataStr = trimmed.replace(/^data: /, "");
              const data = JSON.parse(dataStr);
              rawChunks.push(data);

              // Capture generation ID from first chunk (for fetching usage after cancel)
              if (data.id && !generationId) {
                generationId = data.id;
              }

              // Capture content delta
              if (data.choices && data.choices[0]?.delta?.content) {
                content += data.choices[0].delta.content;
              }

              // Capture usage from final chunk (or any chunk with usage)
              if (data.usage) {
                usage = data.usage;
              }

              // Check for errors in stream
              if (data.error) {
                throw new Error(data.error.message || "Stream error");
              }
            } catch (parseErr) {
              if (parseErr.message.includes("Unexpected end of JSON input")) {
                // Ignore incomplete JSON chunks
                continue;
              }
              console.warn("Failed to parse stream chunk:", parseErr);
            }
          }
        }
      } catch (error) {
        // Re-throw AbortError so the caller can handle it properly
        if (error.name === 'AbortError') {
          const id = generationId || rawChunks.find((c) => c && c.id)?.id;
          if (!usage && id) {
            usage = await this.getGenerationUsage(id);
          }
          const result = {
            content: content,
            usage: usage,
            model: model,
            cancelled: true,
          };
          this.writeLastApiResult({
            type: "rewrite",
            style,
            model,
            usage: usage,
            cancelled: true,
            raw: rawChunks,
          });
          return result;
        }
        throw error;
      }

      const idForUsage = generationId || rawChunks.find((c) => c && c.id)?.id;
      if (aborted && !usage && idForUsage) {
        usage = await this.getGenerationUsage(idForUsage);
      }

      const result = {
        content: content,
        usage: usage,
        model: model,
        cancelled: aborted,
      };

      this.writeLastApiResult({
        type: "rewrite",
        style,
        model,
        usage: usage,
        cancelled: aborted,
        raw: rawChunks,
      });

      return result;
    } catch (error) {
      // Re-throw AbortError so the caller can handle it properly
      if (error.name === 'AbortError') {
        throw error;
      }
      console.error("Rewrite error:", error);
      return {
        error: error.message,
      };
    }
  }

  /**
   * Get list of available models
   * @returns {Promise<Array>} List of available models
   */
  async getModels() {
    try {
      const response = await fetch(`${this.baseUrl}/models`, {
        headers: this.getHeaders(),
      });

      if (!response.ok) {
        throw new Error(this.getErrorMessage(response.status, `HTTP error! status: ${response.status}`));
      }

      const data = await response.json();

      // Write raw API response to debug file
      this.writeDebugFile('models_api_raw.json', data);

      const models = data.data || [];

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
      console.error("Error fetching models:", error);
      return [];
    }
  }
}

export default new APIService();

