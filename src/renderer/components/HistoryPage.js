import { useState, useEffect, useCallback, useMemo } from "react";
import { useTranslation } from "react-i18next";
import {
  Button,
  Label,
  Dropdown,
  Option,
  Text,
  tokens,
  makeStyles,
  mergeClasses,
} from "@fluentui/react-components";
import { Download } from "lucide-react";
import * as XLSX from "xlsx-js-style";
import PropTypes from "prop-types";
import {
  getFilters,
  getFilterRange,
  getCostApi,
  formatCost,
  formatAvgTps,
  DASH,
} from "../utils/misc/costUtils";
import { formatDateTime, interpolateTemplate, getTextStats } from "../utils/misc/formatUtils";
import { rowsToCsvWithLabels, triggerDownload } from "../utils/misc/exportUtils";
import { useAppContext } from "../contexts/AppContext";
import webAPI from "../utils/api/webApiClient";
import ResizablePanels from "./ResizablePanels";
import TextPanel from "./TextPanel";
import CallDetailsContent from "./CallDetailsContent";
import { useStyles as useDashboardStyles } from "./DashboardPage-styles";
import { findUILanguageEntry } from "../utils/misc/languageConstants";

const EXPORT_FILENAME = "transrewrt-history";

const isWeb = typeof window !== "undefined" && !window.electronAPI?.getConfig;

/** Stored content language (English name or BCP 47 code) → current UI locale only (no English / native pair). */
function formatHistoryContentLanguage(raw, t) {
  if (raw == null) return "";
  const s = String(raw).trim();
  if (s === "") return "";
  if (s === "Detect Language") return t("Detect Language");
  const entry = findUILanguageEntry(s);
  if (entry) return t(entry.englishName ?? entry.label);
  return t(s);
}

function orDash(val) {
  if (val == null) return DASH;
  if (typeof val === "string" && val.trim() === "") return DASH;
  return val;
}

function firstLinePreview(text) {
  if (text == null || text === "") return "";
  const line = String(text).split(/\r\n|\n|\r/)[0].trim();
  return line.length > 180 ? `${line.slice(0, 180)}…` : line;
}

/** Treat as auto-detect when no source or explicit detect option (stored like translate UI). */
function isTranslateSourceAuto(sourceLang) {
  if (sourceLang == null) return true;
  const s = String(sourceLang).trim();
  if (s === "") return true;
  if (s === "Detect Language") return true;
  return false;
}

const HISTORY_DETAILS_EXCLUDE_KEYS = [
  "source_lang",
  "target_lang",
  "rewrite_mode",
  "transform_prompt",
  "input_stats",
  "output_stats",
];

function buildHistoryPrependFields(costFractionStyle) {
  return [
    {
      key: "__hist_id",
      labelKey: "ID",
      format: (row) => (row.id != null ? String(row.id) : ""),
    },
    {
      key: "__hist_model",
      labelKey: "Model",
      format: (row) => orDash(row.model),
    },
    {
      key: "__hist_cost",
      labelKey: "Cost",
      format: (row, locale, opts) =>
        formatCost(row.cost, opts?.costFractionStyle || costFractionStyle || "muted", locale),
    },
    {
      key: "__hist_tps",
      labelKey: "TPS",
      format: (row, locale) => formatAvgTps(row.tps, locale),
    },
  ];
}

function summaryAccentClass(type, styles) {
  if (type === "translate") return styles.summaryValueTranslate;
  if (type === "rewrite") return styles.summaryValueRewrite;
  if (type === "transform") return styles.summaryValueTransform;
  return "";
}

/**
 * Top summary card: type-specific (translate / rewrite / transform); order per product spec.
 */
function HistoryEntrySummary({ row, t, locale, typeBadgeClass, orDash, styles, mergeClasses, formatDateTime }) {
  const type = row?.type;
  const accent = summaryAccentClass(type, styles);

  const langOrDash = (val) => {
    const d = orDash(val);
    return d === DASH ? DASH : formatHistoryContentLanguage(val, t);
  };
  const rewriteOrDash = (val) => {
    const d = orDash(val);
    return d === DASH ? DASH : t(String(val).trim());
  };

  const badge = (
    <span className={typeBadgeClass(type)}>{orDash(type)}</span>
  );

  const ts = row.timestamp ? formatDateTime(new Date(row.timestamp), locale) : DASH;
  const user = orDash(row.username);

  if (type === "translate") {
    const src = isTranslateSourceAuto(row.source_lang)
      ? t("auto")
      : formatHistoryContentLanguage(row.source_lang, t);
    const tgtRaw = row.target_lang != null ? String(row.target_lang).trim() : "";
    const tgt = tgtRaw === "" ? "" : formatHistoryContentLanguage(tgtRaw, t);
    const pair = tgt === "" ? src : `${src} → ${tgt}`;
    return (
      <div className={styles.summaryCard}>
        {badge}
        <span className={mergeClasses(accent)}>{pair}</span>
        <span className={styles.summaryMeta}>{ts}</span>
        <span className={styles.summaryMeta}>{user}</span>
      </div>
    );
  }

  if (type === "rewrite") {
    return (
      <div className={styles.summaryCard}>
        {badge}
        <span className={mergeClasses(accent)}>{rewriteOrDash(row.rewrite_mode)}</span>
        <span className={styles.summaryMeta}>{ts}</span>
        <span className={styles.summaryMeta}>{user}</span>
      </div>
    );
  }

  if (type === "transform") {
    const prompt = orDash(row.transform_prompt);
    const tgtRaw = row.target_lang != null ? String(row.target_lang).trim() : "";
    const tgtLabel = tgtRaw === "" ? "" : formatHistoryContentLanguage(tgtRaw, t);
    const withBrackets = tgtLabel === "" ? prompt : `${prompt} (${tgtLabel})`;
    return (
      <div className={styles.summaryCard}>
        {badge}
        <span className={mergeClasses(accent)}>{withBrackets}</span>
        <span className={styles.summaryMeta}>{ts}</span>
        <span className={styles.summaryMeta}>{user}</span>
      </div>
    );
  }

  return (
    <div className={styles.summaryCard}>
      {badge}
      <span className={mergeClasses(accent)}>{langOrDash(row.source_lang)}</span>
      <span className={mergeClasses(accent)}>{langOrDash(row.target_lang)}</span>
      <span className={mergeClasses(accent)}>{rewriteOrDash(row.rewrite_mode)}</span>
      <span className={mergeClasses(accent)}>{orDash(row.transform_prompt)}</span>
      <span className={styles.summaryMeta}>{ts}</span>
      <span className={styles.summaryMeta}>{user}</span>
    </div>
  );
}

HistoryEntrySummary.propTypes = {
  row: PropTypes.object.isRequired,
  t: PropTypes.func.isRequired,
  locale: PropTypes.string.isRequired,
  typeBadgeClass: PropTypes.func.isRequired,
  orDash: PropTypes.func.isRequired,
  styles: PropTypes.object.isRequired,
  mergeClasses: PropTypes.func.isRequired,
  formatDateTime: PropTypes.func.isRequired,
};

const useLocalStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    minHeight: 0,
    overflow: "hidden",
    width: "100%",
  },
  listColumn: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    minHeight: 0,
    minWidth: 0,
  },
  listScroll: {
    flex: 1,
    minHeight: 0,
    overflowY: "auto",
    overflowX: "hidden",
    paddingRight: "4px",
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },
  historyCard: {
    width: "100%",
    boxSizing: "border-box",
    padding: "10px 12px",
    borderRadius: tokens.borderRadiusMedium,
    border: `1px solid ${tokens.colorNeutralStroke1}`,
    backgroundColor: tokens.colorNeutralBackground1,
    cursor: "pointer",
    textAlign: "left",
    transition: "background-color 0.15s ease, border-color 0.15s ease",
    ":hover": {
      backgroundColor: tokens.colorNeutralBackground1Hover,
    },
  },
  historyCardSelected: {
    borderColor: tokens.colorBrandStroke1,
    backgroundColor: tokens.colorNeutralBackground2,
  },
  cardLine1: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    gap: "8px",
    fontSize: "14px",
    fontWeight: 600,
    color: tokens.colorNeutralForeground1,
  },
  cardLine2: {
    marginTop: "6px",
    fontSize: "12px",
    color: tokens.colorNeutralForeground3,
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },
  detailColumn: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    minHeight: 0,
    minWidth: 0,
    gap: tokens.spacingVerticalM,
    overflow: "hidden",
  },
  summaryCard: {
    flexShrink: 0,
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    gap: "10px 14px",
    fontSize: "13px",
    fontWeight: 500,
    lineHeight: 1.4,
    padding: `${tokens.spacingVerticalM} ${tokens.spacingHorizontalM}`,
    borderRadius: tokens.borderRadiusMedium,
    border: `1px solid ${tokens.colorNeutralStroke1}`,
    backgroundColor: tokens.colorNeutralBackground1,
  },
  summaryMuted: {
    color: tokens.colorNeutralForeground3,
    fontWeight: 400,
  },
  summaryValueTranslate: { color: "#84cc16" },
  summaryValueRewrite: { color: "#fb923c" },
  summaryValueTransform: { color: "#a78bfa" },
  summaryMeta: {
    color: tokens.colorNeutralForeground1,
    fontWeight: 500,
  },
  metricsCard: {
    flexShrink: 0,
    display: "flex",
    flexDirection: "column",
    padding: `${tokens.spacingVerticalS} ${tokens.spacingHorizontalS}`,
    borderRadius: tokens.borderRadiusMedium,
    border: `1px solid ${tokens.colorNeutralStroke1}`,
    backgroundColor: tokens.colorNeutralBackground2,
  },
  metaPanels: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    minHeight: 0,
    minWidth: 0,
    overflow: "hidden",
  },
  detailsWrap: {
    flexShrink: 0,
    maxHeight: "240px",
    overflow: "auto",
    minWidth: 0,
  },
});

export default function HistoryPage() {
  const { t, i18n } = useTranslation();
  const locale = i18n.language || "en-GB";
  const { settings, currentUser } = useAppContext();
  const dashStyles = useDashboardStyles();
  const styles = useLocalStyles();
  const costFractionStyle = settings?.cost_fraction_style || "muted";

  const [filter, setFilter] = useState("all");
  const [userFilter, setUserFilter] = useState("");
  const [userList, setUserList] = useState([]);
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(false);
  const [exportLoading, setExportLoading] = useState(false);
  const [selected, setSelected] = useState(null);

  const isAdmin = currentUser?.role === "admin";
  const historyUsername =
    isWeb && !isAdmin ? currentUser?.username || null : userFilter || null;

  useEffect(() => {
    if (!isWeb || !isAdmin || !webAPI.getUsers) return;
    webAPI
      .getUsers()
      .then((list) => setUserList(Array.isArray(list) ? list : []))
      .catch(() => setUserList([]));
  }, [isAdmin]);

  const loadHistory = useCallback(() => {
    const api = getCostApi();
    if (typeof api.getExecutionHistory !== "function") return;
    const { from, to } = getFilterRange(filter);
    const username = historyUsername || undefined;
    setLoading(true);
    Promise.resolve(api.getExecutionHistory(from, to, username))
      .then((data) => {
        const list = Array.isArray(data) ? data : [];
        setRows(list);
        setSelected((prev) => {
          if (!prev) return null;
          const still = list.find((r) => r.id === prev.id);
          return still ?? (list[0] ?? null);
        });
      })
      .catch(() => {
        setRows([]);
        setSelected(null);
      })
      .finally(() => setLoading(false));
  }, [filter, historyUsername]);

  useEffect(() => {
    queueMicrotask(() => loadHistory());
  }, [loadHistory]);

  useEffect(() => {
    queueMicrotask(() => {
      setSelected(null);
    });
  }, [filter, historyUsername]);

  const typeBadgeClass = (type) => {
    if (type === "translate") return mergeClasses(dashStyles.typeBadge, dashStyles.typeTranslate);
    if (type === "rewrite") return mergeClasses(dashStyles.typeBadge, dashStyles.typeRewrite);
    if (type === "transform") return mergeClasses(dashStyles.typeBadge, dashStyles.typeTransform);
    return dashStyles.typeBadge;
  };

  const noop = useMemo(() => () => {}, []);

  const historyPrependFields = useMemo(
    () => buildHistoryPrependFields(costFractionStyle),
    [costFractionStyle],
  );

  const exportColumns = useMemo(
    () => [
      { key: "id", labelKey: t("ID") },
      { key: "timestamp", labelKey: t("Timestamp") },
      { key: "type", labelKey: t("Type") },
      { key: "username", labelKey: t("Username") },
      { key: "model", labelKey: t("Model") },
      { key: "source_lang", labelKey: t("Source") },
      { key: "target_lang", labelKey: t("Target") },
      { key: "rewrite_mode", labelKey: t("Mode") },
      { key: "transform_prompt", labelKey: t("Transform prompt") },
      { key: "prompt_tokens", labelKey: t("Prompt tokens") },
      { key: "completion_tokens", labelKey: t("Completion tokens") },
      { key: "duration_ms", labelKey: t("Duration") },
      { key: "cost", labelKey: t("Cost") },
      { key: "tps", labelKey: t("TPS") },
      { key: "input_chars", labelKey: t("Input chars") },
      { key: "input_words", labelKey: t("Input words") },
      { key: "input_paragraphs", labelKey: t("Input paragraphs") },
      { key: "output_chars", labelKey: t("Output chars") },
      { key: "output_words", labelKey: t("Output words") },
      { key: "output_paragraphs", labelKey: t("Output paragraphs") },
      { key: "input_text", labelKey: t("Input text") },
      { key: "output_text", labelKey: t("Output text") },
    ],
    [t],
  );

  const handleExport = useCallback(
    async (format) => {
      setExportLoading(true);
      try {
        const data = rows;
        if (format === "json") {
          const blob = new Blob([JSON.stringify(data, null, 2)], {
            type: "application/json",
          });
          triggerDownload(blob, `${EXPORT_FILENAME}.json`);
        } else if (format === "csv") {
          const csv = rowsToCsvWithLabels(data, exportColumns);
          const blob = new Blob([csv], { type: "text/csv" });
          triggerDownload(blob, `${EXPORT_FILENAME}.csv`);
        } else if (format === "xlsx") {
          const costColIndex = exportColumns.findIndex((c) => c.key === "cost");
          const tpsColIndex = exportColumns.findIndex((c) => c.key === "tps");
          const headerRow = exportColumns.map((c) => c.labelKey);
          const dataRows = data.map((row) => exportColumns.map((c) => row[c.key]));
          const aoa = [headerRow, ...dataRows];
          const ws = XLSX.utils.aoa_to_sheet(aoa);
          const range = XLSX.utils.decode_range(ws["!ref"] || "A1");
          const headerStyle = {
            fill: { patternType: "solid", fgColor: { rgb: "BDD7EE" } },
            font: { bold: true },
            alignment: { vertical: "top" },
          };
          const cellStyleTop = { alignment: { vertical: "top" } };
          const cellStyleCost = { alignment: { vertical: "top" }, numFmt: "0.000000" };
          const cellStyleTps = { alignment: { vertical: "top" }, numFmt: "0.0" };
          for (let C = range.s.c; C <= range.e.c; C++) {
            const addr = XLSX.utils.encode_cell({ r: 0, c: C });
            if (ws[addr]) ws[addr].s = headerStyle;
          }
          for (let R = range.s.r + 1; R <= range.e.r; R++) {
            for (let C = range.s.c; C <= range.e.c; C++) {
              const addr = XLSX.utils.encode_cell({ r: R, c: C });
              const style =
                C === costColIndex
                  ? cellStyleCost
                  : C === tpsColIndex
                    ? cellStyleTps
                    : cellStyleTop;
              if (ws[addr]) ws[addr].s = style;
            }
          }
          const numCols = range.e.c - range.s.c + 1;
          const colWidths = [];
          for (let c = 0; c < numCols; c++) {
            let maxCh = 10;
            for (let r = 0; r <= range.e.r; r++) {
              const addr = XLSX.utils.encode_cell({ r, c });
              const cell = ws[addr];
              if (!cell || cell.v == null) continue;
              const str = String(cell.v);
              const len = str.length;
              maxCh = Math.min(Math.max(maxCh, len + 2), 80);
            }
            colWidths.push({ wch: maxCh });
          }
          ws["!cols"] = colWidths;
          const wb = XLSX.utils.book_new();
          XLSX.utils.book_append_sheet(wb, ws, "History");
          const arr = XLSX.write(wb, { bookType: "xlsx", type: "array" });
          const blob = new Blob([arr], {
            type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
          });
          triggerDownload(blob, `${EXPORT_FILENAME}.xlsx`);
        }
      } finally {
        setExportLoading(false);
      }
    },
    [rows, exportColumns],
  );

  const inputStatsStr = selected
    ? (() => {
        const s = getTextStats(selected.input_text ?? "");
        return interpolateTemplate(
          t("{{chars}} chars · {{words}} words · {{paragraphs}} paragraphs"),
          {
            chars: s.chars,
            words: s.words,
            paragraphs: s.paragraphs,
          },
        );
      })()
    : null;

  const outputStatsStr = selected
    ? (() => {
        const s = getTextStats(selected.output_text ?? "");
        return interpolateTemplate(
          t("{{chars}} chars · {{words}} words · {{paragraphs}} paragraphs"),
          {
            chars: s.chars,
            words: s.words,
            paragraphs: s.paragraphs,
          },
        );
      })()
    : null;

  return (
    <div className={styles.root}>
      <div className={dashStyles.filterRow}>
        {getFilters(t).map((f) => (
          <Button
            key={f.id}
            size="small"
            appearance={filter === f.id ? "primary" : "subtle"}
            className={filter !== f.id ? dashStyles.filterButtonUnselected : undefined}
            onClick={() => setFilter(f.id)}
          >
            {f.label}
          </Button>
        ))}
        {isWeb && isAdmin && userList.length > 0 && (
          <>
            <Label style={{ marginLeft: "16px", marginRight: "8px" }}>{t("User")}</Label>
            <Dropdown
              value={userFilter === "" ? t("All users") : userFilter}
              selectedOptions={[userFilter]}
              onOptionSelect={(_, data) => setUserFilter(data.optionValue ?? "")}
              style={{ minWidth: "140px" }}
            >
              <Option value="">{t("All users")}</Option>
              {userList.map((u) => (
                <Option key={u.id} value={u.username || ""}>
                  {u.username}
                </Option>
              ))}
            </Dropdown>
          </>
        )}
        <div className={dashStyles.downloadBlock} style={{ marginLeft: "32px" }}>
          <Download size={16} aria-hidden />
          <span style={{ fontWeight: 600 }}>{t("Download:")} </span>
          <Button
            size="small"
            appearance="subtle"
            className={dashStyles.downloadButton}
            disabled={exportLoading || loading}
            onClick={() => handleExport("json")}
          >
            {t("JSON")}
          </Button>
          <Button
            size="small"
            appearance="subtle"
            className={dashStyles.downloadButton}
            disabled={exportLoading || loading}
            onClick={() => handleExport("csv")}
          >
            {t("CSV")}
          </Button>
          <Button
            size="small"
            appearance="subtle"
            className={dashStyles.downloadButton}
            disabled={exportLoading || loading}
            onClick={() => handleExport("xlsx")}
          >
            {t("XLSX")}
          </Button>
        </div>
      </div>

      <ResizablePanels
        leftGrow={2}
        rightGrow={3}
        leftPanel={
          <div className={styles.listColumn}>
            {loading ? (
              <Text>{t("Loading…")}</Text>
            ) : (
              <div className={styles.listScroll}>
                {rows.length === 0 ? (
                  <Text style={{ color: tokens.colorNeutralForeground3 }}>{t("(no information available)")}</Text>
                ) : (
                  rows.map((row) => (
                    <button
                      key={row.id}
                      type="button"
                      data-testid="history-list-item"
                      data-history-type={row.type || ""}
                      className={mergeClasses(
                        styles.historyCard,
                        selected?.id === row.id && styles.historyCardSelected,
                      )}
                      onClick={() => setSelected(row)}
                    >
                      <div className={styles.cardLine1}>
                        <span className={typeBadgeClass(row.type)}>{orDash(row.type)}</span>
                        <span>
                          {row.timestamp ? formatDateTime(new Date(row.timestamp), locale) : DASH}
                        </span>
                        {row.username ? <span>{row.username}</span> : null}
                        <span style={{ color: tokens.colorNeutralForeground3, fontWeight: 500 }}>
                          #{row.id}
                        </span>
                      </div>
                      <div className={styles.cardLine2} title={firstLinePreview(row.input_text)}>
                        {firstLinePreview(row.input_text) || "—"}
                      </div>
                    </button>
                  ))
                )}
              </div>
            )}
          </div>
        }
        rightPanel={
          <div className={styles.detailColumn}>
            {!selected ? (
              <Text style={{ color: tokens.colorNeutralForeground3 }}>{t("Select a history entry to view details.")}</Text>
            ) : (
              <>
                <HistoryEntrySummary
                  row={selected}
                  t={t}
                  locale={locale}
                  typeBadgeClass={typeBadgeClass}
                  orDash={orDash}
                  styles={styles}
                  mergeClasses={mergeClasses}
                  formatDateTime={formatDateTime}
                />
                <div className={styles.metricsCard}>
                  <div className={styles.detailsWrap}>
                    <CallDetailsContent
                      row={selected}
                      excludeFieldKeys={HISTORY_DETAILS_EXCLUDE_KEYS}
                      prependFields={historyPrependFields}
                      costFractionStyle={costFractionStyle}
                      columnCount={2}
                    />
                  </div>
                </div>
                <div className={styles.metaPanels}>
                  <ResizablePanels
                    gap="8px"
                    leftGrow={1}
                    rightGrow={1}
                    leftPanel={
                      <TextPanel
                        title={t("Input")}
                        text={selected.input_text ?? ""}
                        onTextChange={noop}
                        readOnly
                        footerStats={inputStatsStr}
                        footerMinimal
                        fontFamily={settings?.font_family}
                        fontSize={settings?.font_size}
                      />
                    }
                    rightPanel={
                      <TextPanel
                        title={t("Output")}
                        text={selected.output_text ?? ""}
                        onTextChange={noop}
                        readOnly
                        footerStats={outputStatsStr}
                        footerMinimal
                        fontFamily={settings?.font_family}
                        fontSize={settings?.font_size}
                      />
                    }
                  />
                </div>
              </>
            )}
          </div>
        }
      />
    </div>
  );
}
