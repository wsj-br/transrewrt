const WORD_CHAR = /\p{L}|\p{M}|\p{N}/u;

function isWordChar(char: string | undefined): boolean {
  if (!char) return false;
  return WORD_CHAR.test(char);
}

function expandStartLatin(text: string, start: number): number {
  let i = start;
  while (i > 0 && isWordChar(text[i - 1])) i -= 1;
  return i;
}

function expandEndLatin(text: string, end: number): number {
  let i = end;
  while (i < text.length && isWordChar(text[i])) i += 1;
  return i;
}

function expandWithSegmenter(text: string, start: number, end: number): { start: number; end: number } {
  const Segmenter = Intl.Segmenter;
  if (!Segmenter) {
    return {
      start: expandStartLatin(text, start),
      end: expandEndLatin(text, end),
    };
  }

  const segmenter = new Segmenter(undefined, { granularity: "word" });
  let expandedStart = start;
  let expandedEnd = end;

  for (const segment of segmenter.segment(text)) {
    const segStart = segment.index;
    const segEnd = segStart + segment.segment.length;
    if (segment.isWordLike !== true) continue;
    if (segStart < start && segEnd > start) expandedStart = segStart;
    if (segStart < end && segEnd > end) expandedEnd = segEnd;
    if (segStart <= start && segEnd >= start && segStart < expandedStart) expandedStart = segStart;
    if (segStart <= end && segEnd >= end && segEnd > expandedEnd) expandedEnd = segEnd;
  }

  if (expandedStart === start && start > 0 && isWordChar(text[start - 1])) {
    expandedStart = expandStartLatin(text, start);
  }
  if (expandedEnd === end && end < text.length && isWordChar(text[end])) {
    expandedEnd = expandEndLatin(text, end);
  }

  return { start: expandedStart, end: expandedEnd };
}

export function expandSelectionToWordBoundaries(
  text: string,
  start: number,
  end: number,
): { start: number; end: number; phrase: string } {
  const safeStart = Math.max(0, Math.min(start, text.length));
  const safeEnd = Math.max(safeStart, Math.min(end, text.length));

  const { start: expandedStart, end: expandedEnd } = expandWithSegmenter(text, safeStart, safeEnd);
  const phrase = text.slice(expandedStart, expandedEnd);

  return { start: expandedStart, end: expandedEnd, phrase };
}

export function isNonEmptyPhrase(phrase: string): boolean {
  return phrase.trim().length > 0;
}

const MIRROR_STYLE_PROPS = [
  "direction",
  "boxSizing",
  "width",
  "height",
  "overflowX",
  "overflowY",
  "borderTopWidth",
  "borderRightWidth",
  "borderBottomWidth",
  "borderLeftWidth",
  "borderStyle",
  "paddingTop",
  "paddingRight",
  "paddingBottom",
  "paddingLeft",
  "fontStyle",
  "fontVariant",
  "fontWeight",
  "fontStretch",
  "fontSize",
  "fontSizeAdjust",
  "lineHeight",
  "fontFamily",
  "textAlign",
  "textTransform",
  "textIndent",
  "textDecoration",
  "letterSpacing",
  "wordSpacing",
  "tabSize",
  "whiteSpace",
  "wordBreak",
  "overflowWrap",
] as const;

/** Viewport coordinates at the given character index inside a textarea. */
export function getTextareaSelectionClientPoint(
  textarea: HTMLTextAreaElement,
  index: number,
): { x: number; y: number } {
  const safeIndex = Math.max(0, Math.min(index, textarea.value.length));
  const mirror = document.createElement("div");
  const marker = document.createElement("span");
  marker.textContent = "\u200b";

  mirror.style.position = "absolute";
  mirror.style.visibility = "hidden";
  mirror.style.top = "0";
  mirror.style.left = "-9999px";
  mirror.style.whiteSpace = "pre-wrap";
  mirror.style.wordWrap = "break-word";

  const computed = window.getComputedStyle(textarea);
  for (const prop of MIRROR_STYLE_PROPS) {
    mirror.style[prop] = computed[prop];
  }

  mirror.style.width = `${textarea.clientWidth}px`;
  mirror.textContent = textarea.value.substring(0, safeIndex);
  mirror.appendChild(marker);
  document.body.appendChild(mirror);

  const textareaRect = textarea.getBoundingClientRect();
  const markerRect = marker.getBoundingClientRect();
  const mirrorRect = mirror.getBoundingClientRect();

  const x = textareaRect.left + (markerRect.left - mirrorRect.left) - textarea.scrollLeft;
  const y = textareaRect.top + (markerRect.top - mirrorRect.top) - textarea.scrollTop;

  document.body.removeChild(mirror);

  return { x, y };
}

export function getTextareaExpandedSelectionAnchor(
  textarea: HTMLTextAreaElement,
  fullText: string,
): { start: number; end: number; phrase: string; x: number; y: number } | null {
  const { selectionStart, selectionEnd } = textarea;
  if (selectionStart === selectionEnd) return null;

  const { start, end, phrase } = expandSelectionToWordBoundaries(
    fullText,
    selectionStart,
    selectionEnd,
  );
  if (!isNonEmptyPhrase(phrase)) return null;

  const { x, y } = getTextareaSelectionClientPoint(textarea, end);
  return { start, end, phrase, x, y };
}

/**
 * Approximate character index in a textarea for a viewport point (e.g. context-menu click).
 * Uses binary search against the same mirror layout as getTextareaSelectionClientPoint.
 */
export function getTextareaCaretIndexFromPoint(
  textarea: HTMLTextAreaElement,
  clientX: number,
  clientY: number,
): number {
  const text = textarea.value;
  if (!text) return 0;

  const textareaRect = textarea.getBoundingClientRect();
  const localX = clientX - textareaRect.left + textarea.scrollLeft;
  const localY = clientY - textareaRect.top + textarea.scrollTop;

  let low = 0;
  let high = text.length;
  while (low < high) {
    const mid = Math.ceil((low + high) / 2);
    const point = getTextareaSelectionClientPoint(textarea, mid);
    const midX = point.x - textareaRect.left + textarea.scrollLeft;
    const midY = point.y - textareaRect.top + textarea.scrollTop;
    const computed = window.getComputedStyle(textarea);
    const lineHeight = Number.parseFloat(computed.lineHeight) || Number.parseFloat(computed.fontSize) * 1.2;

    if (midY + lineHeight < localY || (midY <= localY && midX < localX)) {
      low = mid;
    } else {
      high = mid - 1;
    }
  }

  return Math.max(0, Math.min(low, text.length));
}

/** Expand a caret/selection to word bounds, or resolve the word under a click point when empty. */
export function getTextareaWordAnchor(
  textarea: HTMLTextAreaElement,
  fullText: string,
  clientX?: number,
  clientY?: number,
): { start: number; end: number; phrase: string; x: number; y: number } | null {
  const { selectionStart, selectionEnd } = textarea;

  if (selectionStart !== selectionEnd) {
    return getTextareaExpandedSelectionAnchor(textarea, fullText);
  }

  if (clientX == null || clientY == null) return null;

  const caret = getTextareaCaretIndexFromPoint(textarea, clientX, clientY);
  // Prefer the character under the cursor; if between words, try the previous char.
  let probe = caret;
  if (probe > 0 && probe < fullText.length && !isWordChar(fullText[probe]) && isWordChar(fullText[probe - 1])) {
    probe = caret - 1;
  } else if (probe >= fullText.length && fullText.length > 0) {
    probe = fullText.length - 1;
  }

  if (!isWordChar(fullText[probe])) return null;

  const { start, end, phrase } = expandSelectionToWordBoundaries(fullText, probe, probe + 1);
  if (!isNonEmptyPhrase(phrase)) return null;

  const { x, y } = getTextareaSelectionClientPoint(textarea, end);
  return { start, end, phrase, x, y };
}

export function textareaHasNonEmptySelection(textarea: HTMLTextAreaElement | null): boolean {
  if (!textarea) return false;
  return textarea.selectionStart !== textarea.selectionEnd;
}

/** Re-focus textarea and restore a character range (keeps highlight visible while popover is open). */
export function restoreTextareaSelection(
  textarea: HTMLTextAreaElement,
  start: number,
  end: number,
): void {
  const safeStart = Math.max(0, Math.min(start, textarea.value.length));
  const safeEnd = Math.max(safeStart, Math.min(end, textarea.value.length));
  requestAnimationFrame(() => {
    textarea.focus({ preventScroll: true });
    textarea.setSelectionRange(safeStart, safeEnd);
  });
}
