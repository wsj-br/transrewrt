import { Fragment } from "react";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";
import {
  formatInteger,
  formatDurationMs,
} from "../utils/misc/formatUtils";
import { DASH } from "../utils/misc/costUtils";

function orDash(val) {
  if (val == null) return DASH;
  if (typeof val === "string" && val.trim() === "") return DASH;
  return val;
}

function formatInputOutputStats(row, prefix, locale, t) {
  const chars = row[`${prefix}_chars`];
  const words = row[`${prefix}_words`];
  const paragraphs = row[`${prefix}_paragraphs`];
  if (chars == null && words == null && paragraphs == null) return DASH;
  const c = formatInteger(chars ?? 0, locale);
  const w = formatInteger(words ?? 0, locale);
  const p = formatInteger(paragraphs ?? 0, locale);
  if (t) {
    return t("{{chars}} chars · {{words}} words · {{paragraphs}} paragraphs", { chars: c, words: w, paragraphs: p });
  }
  return `${c} chars · ${w} words · ${p} paragraphs`;
}

const FIELDS = [
  { key: "source_lang", labelKey: "Source", format: (row) => orDash(row.source_lang) },
  { key: "target_lang", labelKey: "Target", format: (row) => orDash(row.target_lang) },
  { key: "rewrite_mode", labelKey: "Mode", format: (row) => orDash(row.rewrite_mode) },
  { key: "transform_prompt", labelKey: "Transform prompt", format: (row) => orDash(row.transform_prompt) },
  { key: "prompt_tokens", labelKey: "Prompt tokens", format: (row, locale) => formatInteger(row.prompt_tokens, locale) },
  { key: "completion_tokens", labelKey: "Completion tokens", format: (row, locale) => formatInteger(row.completion_tokens, locale) },
  { key: "duration_ms", labelKey: "Duration", format: (row, locale) => formatDurationMs(row.duration_ms, locale) },
  { key: "input_stats", labelKey: "Input", format: (row, locale, opts) => formatInputOutputStats(row, "input", locale, opts?.t) },
  { key: "output_stats", labelKey: "Output", format: (row, locale, opts) => formatInputOutputStats(row, "output", locale, opts?.t) },
];

/** Same label/value column split as each field block — keeps aligned rows (e.g. expanded Model header). */
export const CALL_DETAILS_LABEL_VALUE_GRID_STYLE = {
  gridTemplateColumns: "minmax(80px,max-content) 1fr",
  columnGap: "12px",
};

/** Matches value column styling in this component (translate / rewrite / transform). */
export function getCallDetailsValueColorClass(type) {
  if (type === "translate") return "text-lime-500";
  if (type === "rewrite") return "text-orange-400";
  if (type === "transform") return "text-violet-400";
  return "";
}

function splitFieldsIntoColumns(fields, columnCount) {
  if (columnCount === 1) {
    return [fields];
  }
  const n = columnCount === 2 ? 2 : 3;
  const perCol = Math.ceil(fields.length / n);
  const chunks = [];
  for (let i = 0; i < n; i += 1) {
    chunks.push(fields.slice(i * perCol, (i + 1) * perCol));
  }
  return chunks;
}

export default function CallDetailsContent({
  row,
  excludeFieldKeys = null,
  prependFields = null,
  costFractionStyle = "muted",
  columnCount = 3,
}) {
  const { t, i18n } = useTranslation();
  const locale = i18n.language || "en-GB";

  if (!row) return null;

  const exclude = excludeFieldKeys && excludeFieldKeys.length > 0 ? new Set(excludeFieldKeys) : null;
  const baseFields = exclude ? FIELDS.filter((f) => !exclude.has(f.key)) : FIELDS;
  const prepended = Array.isArray(prependFields) ? prependFields : [];
  const fields = [...prepended, ...baseFields];
  if (fields.length === 0) return null;

  const valueColorClass = getCallDetailsValueColorClass(row.type);
  const opts = { t, costFractionStyle: costFractionStyle || "muted" };
  const cols = splitFieldsIntoColumns(fields, columnCount);
  const outerClass =
    columnCount === 1 ? "w-full min-w-0" : "grid w-full min-w-0 items-start";
  const outerStyle =
    columnCount === 1
      ? undefined
      : columnCount === 2
        ? { gridTemplateColumns: "1fr 1px 1fr", columnGap: "12px" }
        : { gridTemplateColumns: "1fr 1px 1fr 1px 1fr", columnGap: "12px" };

  return (
    <div className={outerClass} style={outerStyle}>
      {cols.map((chunk, colIdx) => (
        <Fragment key={colIdx}>
          {colIdx > 0 ? <div className="w-px bg-border self-stretch justify-self-center" aria-hidden /> : null}
          <div className="grid items-baseline gap-y-1.5 min-w-0" style={CALL_DETAILS_LABEL_VALUE_GRID_STYLE}>
            {chunk.map(({ key, labelKey, format, valueClassName }) => (
              <Fragment key={key}>
                <div className="text-xs font-medium text-muted-foreground whitespace-nowrap">{t(labelKey)}</div>
                <div className={`text-xs break-words ${valueColorClass} ${valueClassName || ""}`}>
                  {format(row, locale, opts)}
                </div>
              </Fragment>
            ))}
          </div>
        </Fragment>
      ))}
    </div>
  );
}

CallDetailsContent.propTypes = {
  row: PropTypes.object,
  excludeFieldKeys: PropTypes.arrayOf(PropTypes.string),
  prependFields: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      labelKey: PropTypes.string.isRequired,
      format: PropTypes.func.isRequired,
      valueClassName: PropTypes.string,
    }),
  ),
  costFractionStyle: PropTypes.string,
  columnCount: PropTypes.oneOf([1, 2, 3]),
};
