/**
 * Word- and character-level diff for rewrite input vs output.
 * Produces segments: same (unchanged), removed (in input only), added (in output only).
 * Uses jsdiff: diffWordsWithSpace for structure; diffChars for consecutive removed+added pairs (in-word granularity).
 */

import { diffWordsWithSpace, diffChars } from "diff";

const SAME = "same";
const REMOVED = "removed";
const ADDED = "added";

/**
 * Compute diff segments between input and output text.
 * Normalizes line endings (CRLF/CR → LF), then uses diffWordsWithSpace; when a removed
 * part is immediately followed by an added part, uses diffChars for character-level segments.
 * @param {string} inputText
 * @param {string} outputText
 * @returns {{ key: number, type: 'same'|'removed'|'added', text: string }[]}
 */
export function computeRewriteDiff(inputText, outputText) {
  const norm = (s) =>
    typeof s === "string" ? s.replace(/\r\n/g, "\n").replace(/\r/g, "\n") : "";
  const oldStr = norm(inputText);
  const newStr = norm(outputText);
  const changes = diffWordsWithSpace(oldStr, newStr);
  const result = [];
  let key = 0;

  for (let i = 0; i < changes.length; i++) {
    const part = changes[i];
    if (part.removed && i + 1 < changes.length && changes[i + 1].added) {
      const next = changes[i + 1];
      const charChanges = diffChars(part.value, next.value);
      for (const c of charChanges) {
        if (!c.value.length) continue;
        if (c.added) result.push({ key: key++, type: ADDED, text: c.value });
        else if (c.removed) result.push({ key: key++, type: REMOVED, text: c.value });
        else result.push({ key: key++, type: SAME, text: c.value });
      }
      i++;
      continue;
    }
    if (!part.value.length) continue;
    if (part.added) result.push({ key: key++, type: ADDED, text: part.value });
    else if (part.removed) result.push({ key: key++, type: REMOVED, text: part.value });
    else result.push({ key: key++, type: SAME, text: part.value });
  }
  return result;
}
