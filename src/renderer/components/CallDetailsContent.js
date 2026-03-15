import { Fragment } from "react";
import { useTranslation } from "react-i18next";
import { makeStyles, tokens } from "@fluentui/react-components";
import PropTypes from "prop-types";
import {
  formatInteger,
  formatDurationMs,
} from "../utils/misc/formatUtils";
import { DASH } from "../utils/misc/costUtils";

/** Use DASH for null, undefined, or empty/whitespace string. */
function orDash(val) {
  if (val == null) return DASH;
  if (typeof val === "string" && val.trim() === "") return DASH;
  return val;
}

const LABEL_COLUMN_WIDTH = "110px";
const LABEL_VALUE_GAP = "12px";
const COLUMN_GAP = "12px";
const DIVIDER_COLOR = tokens.colorNeutralStroke2;

const useStyles = makeStyles({
  outerGrid: {
    display: "grid",
    gridTemplateColumns: `1fr 1px 1fr 1px 1fr`,
    columnGap: COLUMN_GAP,
    rowGap: 0,
    alignItems: "start",
    width: "100%",
  },
  column: {
    display: "grid",
    gridTemplateColumns: `${LABEL_COLUMN_WIDTH} 1fr`,
    columnGap: LABEL_VALUE_GAP,
    rowGap: "6px",
    alignItems: "baseline",
    minWidth: 0,
  },
  divider: {
    width: "1px",
    backgroundColor: DIVIDER_COLOR,
    alignSelf: "stretch",
    justifySelf: "center",
  },
  label: {
    fontSize: "12px",
    fontWeight: 500,
    color: tokens.colorNeutralForeground2,
    whiteSpace: "nowrap",
  },
  value: {
    fontSize: "12px",
    wordBreak: "break-word",
    whiteSpace: "normal",
  },
  valueTranslate: {
    color: "#84cc16",
  },
  valueRewrite: {
    color: "#fb923c",
  },
  valueTransform: {
    color: "#a78bfa",
  },
});

function formatInputOutputStats(row, prefix, locale) {
  const chars = row[`${prefix}_chars`];
  const words = row[`${prefix}_words`];
  const paragraphs = row[`${prefix}_paragraphs`];
  if (chars == null && words == null && paragraphs == null) return DASH;
  const c = formatInteger(chars ?? 0, locale);
  const w = formatInteger(words ?? 0, locale);
  const p = formatInteger(paragraphs ?? 0, locale);
  return `${c} chars · ${w} words · ${p} paragraphs`;
}

/** Expanded row only: fields not already shown in the table row (ID, Timestamp, Type, Username, Model, Cost, TPS). */
const FIELDS = [
  { key: "source_lang", labelKey: "Source", format: (row) => orDash(row.source_lang) },
  { key: "target_lang", labelKey: "Target", format: (row) => orDash(row.target_lang) },
  { key: "rewrite_mode", labelKey: "Mode", format: (row) => orDash(row.rewrite_mode) },
  { key: "transform_prompt", labelKey: "Transform prompt", format: (row) => orDash(row.transform_prompt) },
  { key: "prompt_tokens", labelKey: "Prompt tokens", format: (row, locale) => formatInteger(row.prompt_tokens, locale) },
  { key: "completion_tokens", labelKey: "Completion tokens", format: (row, locale) => formatInteger(row.completion_tokens, locale) },
  { key: "duration_ms", labelKey: "Duration", format: (row, locale) => formatDurationMs(row.duration_ms, locale) },
  { key: "input_stats", labelKey: "Input", format: (row, locale) => formatInputOutputStats(row, "input", locale) },
  { key: "output_stats", labelKey: "Output", format: (row, locale) => formatInputOutputStats(row, "output", locale) },
];

function getValueColorClass(type, styles) {
  if (type === "translate") return styles.valueTranslate;
  if (type === "rewrite") return styles.valueRewrite;
  if (type === "transform") return styles.valueTransform;
  return "";
}

function renderField(row, field, locale, opts) {
  return field.format(row, locale, opts);
}

export default function CallDetailsContent({ row }) {
  const { t, i18n } = useTranslation();
  const locale = i18n.language || "en-GB";
  const styles = useStyles();

  if (!row) return null;

  const valueColorClass = getValueColorClass(row.type, styles);
  const opts = {};
  const third = Math.ceil(FIELDS.length / 3);
  const col1 = FIELDS.slice(0, third);
  const col2 = FIELDS.slice(third, 2 * third);
  const col3 = FIELDS.slice(2 * third);

  return (
    <div className={styles.outerGrid}>
      <div className={styles.column}>
        {col1.map(({ key, labelKey, format }) => (
          <Fragment key={key}>
            <div className={styles.label}>{t(labelKey)}</div>
            <div className={`${styles.value} ${valueColorClass}`}>
              {renderField(row, { key, labelKey, format }, locale, opts)}
            </div>
          </Fragment>
        ))}
      </div>
      <div className={styles.divider} aria-hidden />
      <div className={styles.column}>
        {col2.map(({ key, labelKey, format }) => (
          <Fragment key={key}>
            <div className={styles.label}>{t(labelKey)}</div>
            <div className={`${styles.value} ${valueColorClass}`}>
              {renderField(row, { key, labelKey, format }, locale, opts)}
            </div>
          </Fragment>
        ))}
      </div>
      <div className={styles.divider} aria-hidden />
      <div className={styles.column}>
        {col3.map(({ key, labelKey, format }) => (
          <Fragment key={key}>
            <div className={styles.label}>{t(labelKey)}</div>
            <div className={`${styles.value} ${valueColorClass}`}>
              {renderField(row, { key, labelKey, format }, locale, opts)}
            </div>
          </Fragment>
        ))}
      </div>
    </div>
  );
}

CallDetailsContent.propTypes = {
  row: PropTypes.object,
};
