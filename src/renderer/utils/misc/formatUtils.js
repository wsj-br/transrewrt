const DASH = "—";

/** Format integer for display; null/NaN → DASH. */
export function formatInteger(n) {
  return n == null || Number.isNaN(Number(n)) ? DASH : Number(n).toLocaleString();
}

/** Format duration in ms as "m:ss". */
export function formatDurationMs(ms) {
  if (ms == null || Number.isNaN(Number(ms))) return DASH;
  const totalSec = Math.floor(Number(ms) / 1000);
  const m = Math.floor(totalSec / 60);
  const s = totalSec % 60;
  return `${m}:${s.toString().padStart(2, "0")}`;
}

/** Replace {{key}} placeholders in a string (used when t() returns key-as-default and i18n does not interpolate). */
export function interpolateTemplate(str, vars) {
  return str.replace(/\{\{(\w+)\}\}/g, (_, key) => String(vars[key] ?? ""));
}

/** Format seconds as "mm:ss.s" (e.g. 191.8 → "03:11.8", 8.9 → "00:08.9") */
export function formatElapsedMmSs(seconds) {
  const sec = Number(seconds) || 0;
  const m = Math.floor(sec / 60);
  const s = sec % 60;
  const mm = String(m).padStart(2, "0");
  const [sInt, sFrac] = s.toFixed(1).split(".");
  const ss = String(sInt).padStart(2, "0") + "." + sFrac;
  return `${mm}:${ss}`;
}

export function formatCostDisplay(cost) {
  if (!cost || cost <= 0) return "free";
  return `$${cost.toFixed(5)}`;
}

export function getTextStats(text) {
  const chars = text.length;
  const words = text.trim() ? text.trim().split(/\s+/).length : 0;
  const paragraphs = text.trim()
    ? text.split(/\n\s*\n/).filter((p) => p.trim()).length
    : 0;
  return { chars, words, paragraphs };
}

export function getInputStats(text) {
  const { chars, words, paragraphs } = getTextStats(text);
  return `Chars: ${chars} | Words: ${words} | Paragraphs: ${paragraphs}`;
}

export function getOutputStats(text) {
  const { chars, words, paragraphs } = getTextStats(text);
  return `Chars: ${chars} | Words: ${words} | Paragraphs: ${paragraphs}`;
}
