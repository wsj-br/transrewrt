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
