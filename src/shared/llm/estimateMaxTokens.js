/**
 * Estimate completion max_tokens from input size and task type (transrewrt-calls analysis).
 * Used for translate / rewrite / transform to avoid OpenRouter reserving model max (e.g. 65536).
 */

const MIN_MAX_TOKENS = 500;
const MAX_MAX_TOKENS = 48000;

/** @type {Record<string, { multiplier: number, buffer: number }>} */
const TASK_PARAMS = {
  translate: { multiplier: 1.0, buffer: 300 },
  rewrite: { multiplier: 2.0, buffer: 500 },
  transform: { multiplier: 3.0, buffer: 500 },
};

const TAG_BY_TASK = {
  translate: "translate",
  rewrite: "rewrite",
  transform: "transform",
};

/**
 * @param {string} [taskType]
 * @returns {'translate' | 'rewrite' | 'transform'}
 */
function normalizeTaskType(taskType) {
  const t = String(taskType || "").trim().toLowerCase();
  if (t === "translate" || t === "rewrite" || t === "transform") return t;
  return "transform";
}

/**
 * @param {number} inputChars
 * @param {string} [taskType] - translate | rewrite | transform; unknown → transform
 * @returns {number}
 */
function estimateMaxTokens(inputChars, taskType) {
  const chars = Math.max(0, Number(inputChars) || 0);
  const task = normalizeTaskType(taskType);
  const { multiplier, buffer } = TASK_PARAMS[task];
  const estimate = Math.floor(chars * multiplier) + buffer;
  return Math.max(MIN_MAX_TOKENS, Math.min(estimate, MAX_MAX_TOKENS));
}

/**
 * @param {string} userContent
 * @returns {{ taskType: 'translate' | 'rewrite' | 'transform', inputChars: number } | null}
 */
function parseTaggedUserContent(userContent) {
  const text = String(userContent || "");
  for (const [taskType, tag] of Object.entries(TAG_BY_TASK)) {
    const open = `<${tag}>`;
    const close = `</${tag}>`;
    const start = text.indexOf(open);
    if (start === -1) continue;
    const contentStart = start + open.length;
    const end = text.indexOf(close, contentStart);
    const inner = end === -1 ? text.slice(contentStart) : text.slice(contentStart, end);
    return { taskType, inputChars: inner.length };
  }
  return null;
}

/**
 * @param {string} userContent
 * @param {string} [taskTypeHint] - stream log type or explicit task when tags absent
 * @returns {number}
 */
function estimateMaxTokensFromUserContent(userContent, taskTypeHint) {
  const tagged = parseTaggedUserContent(userContent);
  if (tagged) {
    return estimateMaxTokens(tagged.inputChars, tagged.taskType);
  }
  const hint = String(taskTypeHint || "").trim().toLowerCase();
  if (hint === "translate" || hint === "rewrite" || hint === "transform") {
    return estimateMaxTokens(String(userContent || "").length, hint);
  }
  return estimateMaxTokens(String(userContent || "").length, "transform");
}

/**
 * @param {Array<{ role?: string, content?: string }>} messages
 * @param {string} [taskTypeHint]
 * @returns {number}
 */
function estimateMaxTokensFromMessages(messages, taskTypeHint) {
  if (!Array.isArray(messages) || messages.length === 0) {
    return estimateMaxTokens(0, "transform");
  }
  for (let i = messages.length - 1; i >= 0; i--) {
    const m = messages[i];
    if (m && m.role === "user" && m.content != null) {
      return estimateMaxTokensFromUserContent(String(m.content), taskTypeHint);
    }
  }
  return estimateMaxTokens(0, "transform");
}

module.exports = {
  MIN_MAX_TOKENS,
  MAX_MAX_TOKENS,
  TASK_PARAMS,
  normalizeTaskType,
  estimateMaxTokens,
  parseTaggedUserContent,
  estimateMaxTokensFromUserContent,
  estimateMaxTokensFromMessages,
};
