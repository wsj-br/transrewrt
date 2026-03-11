import i18n from "../../i18n";

const DASH = "—";

const DEFAULT_LOCALE = "en-GB";

function resolveLocale(locale) {
  return locale && typeof locale === "string" ? locale : DEFAULT_LOCALE;
}

/** Format integer for display; null/NaN → DASH. Optional locale for grouping/decimal. */
export function formatInteger(n, locale) {
  const loc = resolveLocale(locale);
  return n == null || Number.isNaN(Number(n))
    ? DASH
    : Number(n).toLocaleString(loc);
}

/** Format decimal number with locale-aware separator. */
export function formatDecimal(n, locale, options = {}) {
  const loc = resolveLocale(locale);
  const { minimumFractionDigits = 0, maximumFractionDigits = 1 } = options;
  const num = Number(n);
  if (Number.isNaN(num)) return DASH;
  return new Intl.NumberFormat(loc, {
    minimumFractionDigits,
    maximumFractionDigits,
  }).format(num);
}

/** Format duration in ms as "m:ss". Optional locale (for consistency; no decimals here). */
export function formatDurationMs(ms, _locale) {
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

/** Format seconds as "mm:ss.s" (e.g. 191.8 → "03:11.8", 8.9 → "00:08.9"); decimal separator follows locale. */
export function formatElapsedMmSs(seconds, locale) {
  const sec = Number(seconds) || 0;
  const m = Math.floor(sec / 60);
  const s = sec % 60;
  const mm = String(m).padStart(2, "0");
  const whole = Math.floor(s);
  const fracDigit = Math.round((s - whole) * 10);
  const loc = resolveLocale(locale);
  const formatted = new Intl.NumberFormat(loc, {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  }).format(whole + fracDigit / 10);
  const parts = formatted.split(/[.,]/);
  const sep = formatted.includes(",") ? "," : ".";
  const ss = parts.length === 2
    ? String(whole).padStart(2, "0") + sep + parts[1]
    : String(whole).padStart(2, "0") + sep + String(fracDigit);
  return `${mm}:${ss}`;
}

/** Format cost for display (e.g. "$0.00123"); "free" for zero. Decimal separator follows locale. */
export function formatCostDisplay(cost, locale) {
  if (!cost || cost <= 0) return "free";
  const loc = resolveLocale(locale);
  const formatted = new Intl.NumberFormat(loc, {
    minimumFractionDigits: 5,
    maximumFractionDigits: 5,
  }).format(cost);
  return `$${formatted}`;
}

/** Format date and time for display; format follows locale (e.g. 09.03.2026 in de, 2026/03/09 in ja). Time is HH:mm:ss. */
export function formatDateTime(date, locale) {
  if (date == null) return DASH;
  const d = date instanceof Date ? date : new Date(date);
  if (Number.isNaN(d.getTime())) return DASH;
  const loc = resolveLocale(locale);
  return new Intl.DateTimeFormat(loc, {
    dateStyle: "short",
    timeStyle: "medium",
    hour12: false,
  }).format(d);
}

/**
 * Format a timestamp as relative time (e.g. "5 min ago", "há 5 min"). Uses i18n.t("Just now") for &lt; 60 s.
 * @param {number} ms - Timestamp in milliseconds
 * @param {string} locale - BCP 47 locale
 */
export function formatRelativeTime(ms, locale) {
  if (ms == null || typeof ms !== "number") return DASH;
  let sec = Math.floor((Date.now() - ms) / 1000);
  if (sec < 0) sec = 0;
  if (sec < 60) return i18n.t("Just now");
  const loc = resolveLocale(locale);
  const rtf = new Intl.RelativeTimeFormat(loc, { numeric: "auto" });
  if (sec < 3600) return rtf.format(-Math.floor(sec / 60), "minute");
  if (sec < 86400) return rtf.format(-Math.floor(sec / 3600), "hour");
  if (sec < 2592000) return rtf.format(-Math.floor(sec / 86400), "day");
  if (sec < 31536000) return rtf.format(-Math.floor(sec / 2592000), "month");
  return rtf.format(-Math.floor(sec / 31536000), "year");
}

export function getTextStats(text) {
  const chars = text.length;
  const words = text.trim() ? text.trim().split(/\s+/).length : 0;
  const paragraphs = text.trim()
    ? text.split(/\n\s*\n/).filter((p) => p.trim()).length
    : 0;
  return { chars, words, paragraphs };
}

/** Format stats line for display; pass t from useTranslation() for i18n. */
export function getInputStats(text, t) {
  const { chars, words, paragraphs } = getTextStats(text);
  const template = t('Chars: {{chars}} | Words: {{words}} | Paragraphs: {{paragraphs}}');
  return interpolateTemplate(template, { chars, words, paragraphs });
}

/** Format stats line for display; pass t from useTranslation() for i18n. */
export function getOutputStats(text, t) {
  const { chars, words, paragraphs } = getTextStats(text);
  const template = t('Chars: {{chars}} | Words: {{words}} | Paragraphs: {{paragraphs}}');
  return interpolateTemplate(template, { chars, words, paragraphs });
}
