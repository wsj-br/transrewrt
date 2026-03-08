/**
 * Word- and character-level diff for rewrite input vs output.
 * Produces segments: same (unchanged), removed (in input only), added (in output only).
 * For aligned but different words, does character-level diff (common prefix/suffix).
 */

const SAME = "same";
const REMOVED = "removed";
const ADDED = "added";

/**
 * Split text into words (whitespace-separated). Punctuation stays attached to words.
 * @param {string} text
 * @returns {string[]}
 */
function tokenize(text) {
  if (typeof text !== "string" || !text.trim()) return [];
  return text.trim().split(/\s+/);
}

/**
 * Position-based alignment: word at index i in input aligns with word at index i in output.
 * Returns array of { type: 'same'|'removed'|'added'|'replaced', in?: string, out?: string }.
 */
function alignWords(inputWords, outputWords) {
  const pairs = [];
  const maxLen = Math.max(inputWords.length, outputWords.length);
  for (let i = 0; i < maxLen; i++) {
    const inWord = inputWords[i];
    const outWord = outputWords[i];
    if (inWord !== undefined && outWord !== undefined) {
      if (inWord === outWord) {
        pairs.push({ type: "same", in: inWord, out: outWord });
      } else {
        pairs.push({ type: "replaced", in: inWord, out: outWord });
      }
    } else if (inWord !== undefined) {
      pairs.push({ type: "removed", in: inWord });
    } else {
      pairs.push({ type: "added", out: outWord });
    }
  }
  return pairs;
}

/**
 * Character-level diff for two different words. Returns segments for the *output* view:
 * we show: same (white), removed from input (strikeout muted), added in output (blue).
 */
function charDiff(inputWord, outputWord) {
  const segs = [];
  const a = inputWord;
  const b = outputWord;
  let i = 0;
  while (i < a.length && i < b.length && a[i] === b[i]) i++;
  const prefix = a.slice(0, i);
  let aRest = a.slice(i);
  let bRest = b.slice(i);
  let j = 0;
  while (j < aRest.length && j < bRest.length && aRest[aRest.length - 1 - j] === bRest[bRest.length - 1 - j]) j++;
  const suffix = aRest.slice(aRest.length - j) || "";
  const aMid = aRest.slice(0, aRest.length - j);
  const bMid = bRest.slice(0, bRest.length - j);
  if (prefix.length) segs.push({ type: SAME, text: prefix });
  if (aMid.length) segs.push({ type: REMOVED, text: aMid });
  if (bMid.length) segs.push({ type: ADDED, text: bMid });
  if (suffix.length) segs.push({ type: SAME, text: suffix });
  return segs;
}

/**
 * Compute diff segments between input and output text.
 * @param {string} inputText
 * @param {string} outputText
 * @returns {{ key: number, type: 'same'|'removed'|'added', text: string }[]}
 */
export function computeRewriteDiff(inputText, outputText) {
  const inputWords = tokenize(inputText);
  const outputWords = tokenize(outputText);
  if (inputWords.length === 0 && outputWords.length === 0) return [];
  const alignment = alignWords(inputWords, outputWords);
  const result = [];
  let key = 0;
  for (let stepIndex = 0; stepIndex < alignment.length; stepIndex++) {
    const step = alignment[stepIndex];
    if (step.type === "same") {
      result.push({ key: key++, type: SAME, text: step.out });
    } else if (step.type === "removed") {
      result.push({ key: key++, type: REMOVED, text: step.in });
    } else if (step.type === "added") {
      result.push({ key: key++, type: ADDED, text: step.out });
    } else {
      const charSegs = charDiff(step.in, step.out);
      for (const s of charSegs) {
        result.push({ key: key++, type: s.type, text: s.text });
      }
    }
    if (stepIndex < alignment.length - 1) {
      result.push({ key: key++, type: SAME, text: " " });
    }
  }
  return result;
}
