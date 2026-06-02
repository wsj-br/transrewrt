/**
 * Normalize OpenAI-style streaming delta.content (string or multipart array) to plain text.
 * Used by Electron main-process OpenRouter streaming and renderer SSE parsing.
 */
function streamDeltaContentToString(delta) {
  if (!delta) return "";
  if (typeof delta.text === "string" && delta.text) return delta.text;
  const c = delta.content;
  if (typeof c === "string") return c;
  if (Array.isArray(c)) {
    return c
      .map((part) => {
        if (typeof part === "string") return part;
        if (part && typeof part === "object" && part.type === "text" && typeof part.text === "string") {
          return part.text;
        }
        return "";
      })
      .join("");
  }
  if (c != null) return String(c);
  return "";
}

/** Extract visible text from one streamed choice (delta and/or message.content). */
function streamChoiceToString(choice) {
  if (!choice) return "";
  const fromDelta = streamDeltaContentToString(choice.delta);
  if (fromDelta) return fromDelta;
  const msg = choice.message?.content;
  if (typeof msg === "string") return msg;
  if (msg != null) return streamDeltaContentToString({ content: msg });
  return "";
}

/** Coerce a stream text argument (string, array, or delta-shaped object) to plain text. */
function streamTextChunkToString(chunk) {
  if (chunk == null) return "";
  if (typeof chunk === "string") return chunk;
  if (Array.isArray(chunk)) return streamDeltaContentToString({ content: chunk });
  if (typeof chunk === "object" && Object.prototype.hasOwnProperty.call(chunk, "content")) {
    return streamDeltaContentToString(chunk);
  }
  return String(chunk);
}

module.exports = {
  streamDeltaContentToString,
  streamChoiceToString,
  streamTextChunkToString,
};
