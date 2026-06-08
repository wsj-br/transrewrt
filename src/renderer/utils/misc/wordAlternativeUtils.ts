export type WordAlternativeChoice = {
  text: string;
  replaces: string | null;
};

function spansOverlap(
  aStart: number,
  aEnd: number,
  bStart: number,
  bEnd: number,
): boolean {
  return aStart < bEnd && bStart < aEnd;
}

function findReplacementSpan(
  fullText: string,
  selection: { start: number; end: number },
  replaces: string,
): { start: number; end: number } | null {
  const selectedText = fullText.slice(selection.start, selection.end);
  if (selectedText === replaces) {
    return { start: selection.start, end: selection.end };
  }

  let best: { start: number; end: number } | null = null;
  let bestOverlap = -1;
  let searchFrom = 0;

  while (searchFrom <= fullText.length) {
    const idx = fullText.indexOf(replaces, searchFrom);
    if (idx === -1) break;

    const repEnd = idx + replaces.length;
    const overlapStart = Math.max(idx, selection.start);
    const overlapEnd = Math.min(repEnd, selection.end);
    const overlap = overlapEnd > overlapStart ? overlapEnd - overlapStart : 0;

    if (overlap > bestOverlap) {
      bestOverlap = overlap;
      best = { start: idx, end: repEnd };
    }

    searchFrom = idx + 1;
  }

  if (best && bestOverlap > 0) return best;

  const windowStart = Math.max(0, selection.start - replaces.length);
  const windowEnd = Math.min(fullText.length, selection.end + replaces.length);
  const localIdx = fullText.slice(windowStart, windowEnd).indexOf(replaces);
  if (localIdx !== -1) {
    const start = windowStart + localIdx;
    const end = start + replaces.length;
    if (spansOverlap(start, end, selection.start, selection.end)) {
      return { start, end };
    }
  }

  return null;
}

export function applyWordAlternative(
  fullText: string,
  selection: { start: number; end: number },
  choice: WordAlternativeChoice,
): string {
  const { text: alternative, replaces } = choice;

  if (replaces) {
    const replaceSpan = findReplacementSpan(fullText, selection, replaces);
    if (replaceSpan) {
      return (
        fullText.slice(0, replaceSpan.start) +
        alternative +
        fullText.slice(replaceSpan.end)
      );
    }
  }

  return (
    fullText.slice(0, selection.start) +
    alternative +
    fullText.slice(selection.end)
  );
}

export function wordAlternativeDisplayText(
  choice: WordAlternativeChoice | string,
): string {
  return typeof choice === "string" ? choice : choice.text;
}
