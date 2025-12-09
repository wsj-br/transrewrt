// API service to communicate with the backend
class APIService {
  constructor() {
    this.baseUrl = "https://openrouter.ai/api/v1";
  }

  /**
   * Set the base URL for API requests
   * @param {string} url - The base URL to use for API requests
   */
  setBaseUrl(url) {
    this.baseUrl = url;
  }

  getHeaders() {
    const config = require("../utils/configManager").default.getAll();
    return {
      "Content-Type": "application/json",
      Authorization: `Bearer ${config.api_key || ""}`,
      "HTTP-Referer":
        "https://github.com/TranslateRewrite/translator-and-rewriter", // Required by OpenRouter
      "X-Title": "Translator & Rewriter", // Optional
    };
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
   * Translate text from source language to target language
   * @param {string} text - Text to translate
   * @param {string} targetLang - Target language
   * @param {string} model - Model to use for translation
   * @param {string} sourceLang - Source language (optional)
   * @returns {Promise<Object>} Translation result with content and usage
   */
  async translate(text, targetLang, model, sourceLang = null) {
    try {
      let prompt;
      if (sourceLang && sourceLang !== "Detect Language") {
        prompt = `You are a professional translator. Translate the following text from ${sourceLang} into ${targetLang}. Only provide the translation, no introductory or concluding remarks.`;
      } else {
        prompt = `You are a professional translator. Translate the following text into ${targetLang}. Only provide the translation, no introductory or concluding remarks.`;
      }

      const response = await fetch(`${this.baseUrl}/chat/completions`, {
        method: "POST",
        headers: this.getHeaders(),
        body: JSON.stringify({
          model: model,
          messages: [
            { role: "system", content: prompt },
            { role: "user", content: text },
          ],
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      if (!data.choices || data.choices.length === 0) {
        throw new Error("No choices returned from API");
      }

      const result = {
        content: data.choices[0].message.content,
        usage: data.usage,
        model: model,
      };

      this.writeLastApiResult({
        type: "translate",
        model,
        usage: data.usage,
        raw: data,
      });

      return result;
    } catch (error) {
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
  async rewrite(text, style, model) {
    try {
      const stylePrompts = {
        "Check Spelling & Grammar":
          "Correct the spelling and grammar of the following text. Maintain the original meaning.",
        "Improve Clarity":
          "Rewrite the following text to improve its clarity and flow.",
        "Make Formal":
          "Rewrite the following text to make it more formal and professional.",
        "Make Informal":
          "Rewrite the following text to make it more casual and informal.",
        Shorten:
          "Condense the following text, keeping only the essential information.",
        Expand: "Expand on the following text, adding more detail and context.",
        "Make Technical":
          "Rewrite the following text using more technical terminology appropriate for the context.",
      };

      const prompt = stylePrompts[style] || "Rewrite the following text.";

      const response = await fetch(`${this.baseUrl}/chat/completions`, {
        method: "POST",
        headers: this.getHeaders(),
        body: JSON.stringify({
          model: model,
          messages: [
            {
              role: "system",
              content: `${prompt} Only provide the rewritten text, no introductory or concluding remarks.`,
            },
            { role: "user", content: text },
          ],
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      if (!data.choices || data.choices.length === 0) {
        throw new Error("No choices returned from API");
      }

      const result = {
        content: data.choices[0].message.content,
        usage: data.usage,
        model: model,
      };

      this.writeLastApiResult({
        type: "rewrite",
        model,
        usage: data.usage,
        raw: data,
      });

      return result;
    } catch (error) {
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
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data.data || [];
    } catch (error) {
      console.error("Error fetching models:", error);
      return [];
    }
  }

}

export default new APIService();
