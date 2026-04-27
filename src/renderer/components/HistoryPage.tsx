import { useState, useEffect, useCallback, useMemo } from "react";
import { useTranslation } from "react-i18next";
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
import {
  formatDateTime,
  getTextStats,
  flipUiArrowsForRtl,
} from "../utils/misc/formatUtils";
import { getTextDirection } from "ai-i18n-tools/runtime";
import { rowsToCsvWithLabels, triggerDownload } from "../utils/misc/exportUtils";
import { useAppContext } from "../contexts/AppContext";
import webAPI from "../utils/api/webApiClient";
import TextPanel from "./TextPanel";
import CallDetailsContent from "./CallDetailsContent";
import { findUILanguageEntry } from "../utils/misc/languageConstants";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

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

/** Single-line preview for the history list only; does not alter stored input_text in the detail panel. */
function firstLinePreview(text) {
  if (text == null || text === "") return "";
  const normalized = String(text)
    .replace(/\r\n|\r|\n/g, " ")
    .replace(/ +/g, " ")
    .trim();
  return normalized.length > 180 ? `${normalized.slice(0, 180)}…` : normalized;
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

function summaryAccentClass(type) {
  if (type === "translate") return "text-lime-500";
  if (type === "rewrite") return "text-orange-400";
  if (type === "transform") return "text-violet-400";
  return "";
}

function typeBadgeClass(type) {
  const base = "px-2 py-0.5 rounded text-xs font-medium";
  if (type === "translate") return `${base} bg-lime-500/20 text-lime-500`;
  if (type === "rewrite") return `${base} bg-orange-400/20 text-orange-400`;
  if (type === "transform") return `${base} bg-violet-400/20 text-violet-400`;
  return base;
}

/**
 * Top summary card: type-specific (translate / rewrite / transform); order per product spec.
 */
function HistoryEntrySummary({
  row,
  t,
  locale,
  orDash,
  formatDateTime,
  isRtl,
}) {
  const type = row?.type;
  const accent = summaryAccentClass(type);

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
  const cardCls = "shrink-0 flex flex-wrap items-center gap-2.5 text-sm font-medium py-2.5 px-3 rounded-md border border-border bg-card";

  if (type === "translate") {
    const src = isTranslateSourceAuto(row.source_lang)
      ? t("auto")
      : formatHistoryContentLanguage(row.source_lang, t);
    const tgtRaw = row.target_lang != null ? String(row.target_lang).trim() : "";
    const tgt = tgtRaw === "" ? "" : formatHistoryContentLanguage(tgtRaw, t);
    const pair = tgt === "" ? src : flipUiArrowsForRtl(`${src} → ${tgt}`, isRtl);
    return (
      <div className={cardCls}>
        {badge}
        <span className={accent}>{pair}</span>
        <span className="text-muted-foreground font-normal">{ts}</span>
        <span>{user}</span>
      </div>
    );
  }

  if (type === "rewrite") {
    return (
      <div className={cardCls}>
        {badge}
        <span className={accent}>{rewriteOrDash(row.rewrite_mode)}</span>
        <span className="text-muted-foreground font-normal">{ts}</span>
        <span>{user}</span>
      </div>
    );
  }

  if (type === "transform") {
    const prompt = orDash(row.transform_prompt);
    const fromRaw = row.source_lang != null ? String(row.source_lang).trim() : "";
    const fromLabel = fromRaw === "" ? "" : formatHistoryContentLanguage(fromRaw, t);
    const withBrackets = fromLabel === "" ? prompt : `${prompt} (${fromLabel})`;
    return (
      <div className={cardCls}>
        {badge}
        <span className={accent}>{withBrackets}</span>
        <span className="text-muted-foreground font-normal">{ts}</span>
        <span>{user}</span>
      </div>
    );
  }

  return (
    <div className={cardCls}>
      {badge}
      <span className={accent}>{langOrDash(row.source_lang)}</span>
      <span className={accent}>{langOrDash(row.target_lang)}</span>
      <span className={accent}>{rewriteOrDash(row.rewrite_mode)}</span>
      <span className={accent}>{orDash(row.transform_prompt)}</span>
      <span className="text-muted-foreground font-normal">{ts}</span>
      <span>{user}</span>
    </div>
  );
}

HistoryEntrySummary.propTypes = {
  row: PropTypes.object.isRequired,
  t: PropTypes.func.isRequired,
  locale: PropTypes.string.isRequired,
  orDash: PropTypes.func.isRequired,
  formatDateTime: PropTypes.func.isRequired,
  isRtl: PropTypes.bool.isRequired,
};

export default function HistoryPage() {
  const { t, i18n } = useTranslation();
  const locale = i18n.language || "en-GB";
  const isRtl = getTextDirection(i18n.language) === "rtl";
  const { settings, currentUser } = useAppContext();
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
        return t("{{chars}} chars · {{words}} words · {{paragraphs}} paragraphs", {
          chars: s.chars,
          words: s.words,
          paragraphs: s.paragraphs,
        });
      })()
    : null;

  const outputStatsStr = selected
    ? (() => {
        const s = getTextStats(selected.output_text ?? "");
        return t("{{chars}} chars · {{words}} words · {{paragraphs}} paragraphs", {
          chars: s.chars,
          words: s.words,
          paragraphs: s.paragraphs,
        });
      })()
    : null;

  return (
    <div className="flex flex-col flex-1 min-h-0 overflow-hidden w-full">
      <div className="flex flex-wrap items-center gap-2 mb-4">
        {getFilters(t).map((f) => (
          <Button
            key={f.id}
            size="sm"
            variant={filter === f.id ? "default" : "outline"}
            onClick={() => setFilter(f.id)}
          >
            {f.label}
          </Button>
        ))}
        {isWeb && isAdmin && userList.length > 0 && (
          <>
            <span className="text-sm font-medium text-muted-foreground ms-2 me-1">{t("User")}</span>
            <Select
              value={userFilter === "" ? "__all__" : userFilter}
              onValueChange={(v) => setUserFilter(v === "__all__" ? "" : v)}
            >
              <SelectTrigger className="min-w-[140px] h-8 text-sm">
                <SelectValue placeholder={t("All users")} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="__all__">{t("All users")}</SelectItem>
                {userList.filter((u) => u.username).map((u) => (
                  <SelectItem key={u.id} value={u.username}>
                    {u.username}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </>
        )}
        <div className="inline-flex items-center gap-1.5 ms-8">
          <Download size={15} aria-hidden />
          <span className="text-sm font-semibold">{t("Download:")} </span>
          {["json", "csv", "xlsx"].map((fmt) => (
            <Button
              key={fmt}
              size="sm"
              variant="outline"
              disabled={exportLoading || loading}
              onClick={() => handleExport(fmt)}
              className="text-xs h-7 px-2"
            >
              {fmt.toUpperCase()}
            </Button>
          ))}
        </div>
      </div>

      <div className="grid flex-1 gap-4 lg:grid-cols-2 min-h-0 overflow-hidden">
        {/* List column */}
        <div className="flex flex-col min-h-0">
          {loading ? (
            <span className="text-sm text-muted-foreground">{t("Loading…")}</span>
          ) : (
            <div className="flex-1 min-h-0 overflow-y-auto overflow-x-hidden pe-1 flex flex-col gap-2">
              {rows.length === 0 ? (
                <span className="text-sm text-muted-foreground">{t("(no information available)")}</span>
              ) : (
                rows.map((row) => (
                  <button
                    key={row.id}
                    type="button"
                    data-testid="history-list-item"
                    data-history-type={row.type || ""}
                    className={cn(
                      "w-full p-2.5 px-3 rounded-md border cursor-pointer text-start transition-colors",
                      selected?.id === row.id
                        ? "border-primary bg-secondary"
                        : "border-border bg-card hover:bg-accent"
                    )}
                    onClick={() => setSelected(row)}
                  >
                    <div className="flex flex-wrap items-center gap-2 text-sm font-semibold">
                      <span className={typeBadgeClass(row.type)}>{orDash(row.type)}</span>
                      <span>
                        {row.timestamp ? formatDateTime(new Date(row.timestamp), locale) : DASH}
                      </span>
                      {row.username ? <span>{row.username}</span> : null}
                      <span className="text-muted-foreground font-medium">#{row.id}</span>
                    </div>
                    <div className="mt-1.5 text-xs text-muted-foreground overflow-hidden text-ellipsis whitespace-nowrap" title={firstLinePreview(row.input_text)}>
                      {firstLinePreview(row.input_text) || "-"}
                    </div>
                  </button>
                ))
              )}
            </div>
          )}
        </div>

        {/* Detail column */}
        <div className="flex flex-col min-h-0 gap-3 overflow-hidden">
          {!selected ? (
            <span className="text-sm text-muted-foreground">{t("Select a history entry to view details.")}</span>
          ) : (
            <>
              <HistoryEntrySummary
                row={selected}
                t={t}
                locale={locale}
                orDash={orDash}
                formatDateTime={formatDateTime}
                isRtl={isRtl}
              />
              <div className="shrink-0 flex flex-col p-3 rounded-md border border-border bg-muted">
                <div className="shrink-0 max-h-60 overflow-auto">
                  <CallDetailsContent
                    row={selected}
                    excludeFieldKeys={HISTORY_DETAILS_EXCLUDE_KEYS}
                    prependFields={historyPrependFields}
                    costFractionStyle={costFractionStyle}
                    columnCount={2}
                  />
                </div>
              </div>
              <div className="flex-1 min-h-0 flex flex-col overflow-hidden">
                <div className="grid flex-1 gap-3 lg:grid-cols-2 min-h-0">
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
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
