/**
 * Remove prompt wrapper XML tags that models sometimes echo into the output.
 * Used for translate / rewrite / transform (and plain-text alternatives).
 */

const DEFAULT_WRAPPER_TAGS = Object.freeze(["translate", "rewrite", "transform"]);

/**
 * @param {unknown} text
 * @param {readonly string[]} [tagNames]
 * @returns {string}
 */
function stripPromptWrapperTags(text, tagNames = DEFAULT_WRAPPER_TAGS) {
  if (text == null) return "";
  if (typeof text !== "string") return String(text);
  if (!text || !Array.isArray(tagNames) || tagNames.length === 0) return text;

  let out = text;
  let stripped = false;
  for (const name of tagNames) {
    if (typeof name !== "string" || !name) continue;
    const escaped = name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const openRe = new RegExp(`<${escaped}\\b[^>]*>`, "gi");
    const closeRe = new RegExp(`</${escaped}\\s*>`, "gi");
    const next = out.replace(openRe, "").replace(closeRe, "");
    if (next !== out) {
      stripped = true;
      out = next;
    }
  }

  // Wrapper leaks often leave a leading/trailing newline from multiline tagging.
  return stripped ? out.replace(/^\n+/, "").replace(/\n+$/, "") : out;
}

module.exports = {
  DEFAULT_WRAPPER_TAGS,
  stripPromptWrapperTags,
};
