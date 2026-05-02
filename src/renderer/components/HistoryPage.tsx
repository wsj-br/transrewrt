import { useState, useEffect, useCallback, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { ChevronDown, Download } from "lucide-react";
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
import { formatDateTime } from "../utils/misc/formatUtils";
import { rowsToCsvWithLabels, triggerDownload } from "../utils/misc/exportUtils";
import { useAppContext } from "../contexts/AppContext";
import webAPI from "../utils/api/webApiClient";
import CallDetailsContent from "./CallDetailsContent";
import { resolveAppearanceFontFamilyCss } from "../utils/misc/appearanceFontOptions";
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

function typeBadgeClass(type) {
  const base = "px-2 py-0.5 rounded text-xs font-medium";
  if (type === "translate") return `${base} bg-lime-500/20 text-lime-500`;
  if (type === "rewrite") return `${base} bg-orange-400/20 text-orange-400`;
  if (type === "transform") return `${base} bg-violet-400/20 text-violet-400`;
  return base;
}

/** Below Tailwind `lg` (1024px): history expanded-card metadata uses one column. */
function useIsBelowLg() {
  const [below, setBelow] = useState(() =>
    typeof window !== "undefined" ? window.matchMedia("(max-width: 1023px)").matches : true,
  );
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 1023px)");
    const onChange = () => setBelow(mq.matches);
    onChange();
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);
  return below;
}

/**
 * Expanded card body: metadata grid (CallDetailsContent) + input/output preview.
 */
function HistoryDetailSections({
  row,
  t,
  historyPrependFields,
  costFractionStyle,
  settings,
  metadataColumnCount,
}) {
  const accordionBodyFontStyle = useMemo(() => {
    const resolved = settings?.font_family
      ? resolveAppearanceFontFamilyCss(settings.font_family)
      : undefined;
    return resolved ? { fontFamily: resolved } : undefined;
  }, [settings?.font_family]);

  return (
    <div className="flex flex-col rounded-md border border-border bg-muted p-3">
      <div className="min-w-0 shrink-0">
        <CallDetailsContent
          row={row}
          excludeFieldKeys={HISTORY_DETAILS_EXCLUDE_KEYS}
          prependFields={historyPrependFields}
          costFractionStyle={costFractionStyle}
          columnCount={metadataColumnCount}
        />
      </div>
      <div className="my-3 shrink-0 border-t border-border" role="separator" />
      <div className="grid min-h-0 min-w-0 items-start gap-x-3 divide-x divide-border [grid-template-columns:minmax(0,1fr)_minmax(0,1fr)]">
        <div className="min-w-0 space-y-1 pe-2">
          <div className="text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">
            {t("Input")}
          </div>
          <div
            dir="auto"
            className="break-words text-[11px] leading-snug whitespace-pre-wrap text-foreground"
            style={accordionBodyFontStyle}
          >
            {row.input_text ?? ""}
          </div>
        </div>
        <div className="min-w-0 space-y-1 ps-2">
          <div className="text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">
            {t("Output")}
          </div>
          <div
            dir="auto"
            className="break-words text-[11px] leading-snug whitespace-pre-wrap text-foreground"
            style={accordionBodyFontStyle}
          >
            {row.output_text ?? ""}
          </div>
        </div>
      </div>
    </div>
  );
}

HistoryDetailSections.propTypes = {
  row: PropTypes.object.isRequired,
  t: PropTypes.func.isRequired,
  historyPrependFields: PropTypes.array.isRequired,
  costFractionStyle: PropTypes.string,
  settings: PropTypes.object,
  metadataColumnCount: PropTypes.oneOf([1, 2]).isRequired,
};

export default function HistoryPage() {
  const { t, i18n } = useTranslation();
  const locale = i18n.language || "en-GB";
  const { settings, currentUser } = useAppContext();
  const costFractionStyle = settings?.cost_fraction_style || "muted";

  const [filter, setFilter] = useState("all");
  const [userFilter, setUserFilter] = useState("");
  const [userList, setUserList] = useState([]);
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(false);
  const [exportLoading, setExportLoading] = useState(false);
  const [selected, setSelected] = useState(null);
  const isMobileMetadata = useIsBelowLg();

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

  return (
    <div className="flex flex-col w-full min-w-0 flex-1 min-h-0 overflow-hidden">
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

      <div className="flex min-h-0 min-w-0 flex-1 flex-col overflow-hidden">
        {loading ? (
          <span className="text-sm text-muted-foreground">{t("Loading…")}</span>
        ) : (
          <div className="flex min-h-0 min-w-0 flex-1 flex-col gap-2 overflow-y-auto overflow-x-hidden pe-1">
            {rows.length === 0 ? (
              <span className="text-sm text-muted-foreground">{t("(no information available)")}</span>
            ) : (
              rows.map((row) => {
                const isOpen = selected?.id === row.id;
                const header = (
                  <>
                    <div className="flex min-w-0 flex-1 items-start justify-between gap-2">
                      <div className="min-w-0 flex flex-wrap items-center gap-2 text-sm font-semibold">
                        <span className={typeBadgeClass(row.type)}>{orDash(row.type)}</span>
                        <span>
                          {row.timestamp ? formatDateTime(new Date(row.timestamp), locale) : DASH}
                        </span>
                        {row.username ? <span>{row.username}</span> : null}
                        <span className="font-medium text-muted-foreground">#{row.id}</span>
                      </div>
                      <ChevronDown
                        className={cn(
                          "mt-0.5 h-4 w-4 shrink-0 text-muted-foreground transition-transform",
                          isOpen && "rotate-180",
                        )}
                        aria-hidden
                      />
                    </div>
                    <div
                      className="mt-1.5 overflow-hidden text-ellipsis whitespace-nowrap text-xs text-muted-foreground"
                      title={firstLinePreview(row.input_text)}
                    >
                      {firstLinePreview(row.input_text) || "-"}
                    </div>
                  </>
                );

                return (
                  <div
                    key={row.id}
                    className={cn(
                      "w-full min-w-0 max-w-full shrink-0 overflow-hidden rounded-md border",
                      isOpen ? "border-primary bg-secondary" : "border-border bg-card",
                    )}
                  >
                    <button
                      type="button"
                      data-testid="history-list-item"
                      data-history-type={row.type || ""}
                      aria-expanded={isOpen}
                      className={cn(
                        "w-full min-w-0 max-w-full cursor-pointer p-2.5 px-3 text-start transition-colors",
                        !isOpen && "hover:bg-accent/80",
                      )}
                      onClick={() =>
                        setSelected((prev) => (prev?.id === row.id ? null : row))
                      }
                    >
                      {header}
                    </button>
                    {isOpen ? (
                      <div className="min-w-0 space-y-3 border-t border-border bg-background px-3 pb-3 pt-3">
                        <HistoryDetailSections
                          row={row}
                          t={t}
                          historyPrependFields={historyPrependFields}
                          costFractionStyle={costFractionStyle}
                          settings={settings}
                          metadataColumnCount={isMobileMetadata ? 1 : 2}
                        />
                      </div>
                    ) : null}
                  </div>
                );
              })
            )}
          </div>
        )}
      </div>
    </div>
  );
}
