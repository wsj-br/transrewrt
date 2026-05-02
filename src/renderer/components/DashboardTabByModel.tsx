import { useState, useCallback, useMemo, Fragment } from "react";
import { useTranslation } from "react-i18next";
import { Badge } from "@/components/ui/badge";
import { ArrowDown, ArrowUp, ChevronRight, Trash2, WandSparkles } from "lucide-react";
import * as XLSX from "xlsx-js-style";
import PropTypes from "prop-types";
import {
  formatCost,
  formatCount,
  formatAvgTps,
  formatAvgCost,
  DASH,
} from "../utils/misc/costUtils";
import {
  rowsToCsvWithLabels,
  triggerDownload,
} from "../utils/misc/exportUtils";
import {
  compareModelIdsByFooterDisplay,
  compareStoredModelIdStrings,
  modelFooterDisplayId,
} from "../utils/misc/modelIdUtils";
import { getCallDetailsValueColorClass } from "./CallDetailsContent";
import DashboardExportToolbar from "./dashboard/DashboardExportToolbar";
import { cn } from "@/lib/utils";

const EXPORT_FILENAME_BY_MODEL = "transrewrt-bymodel";

function totalCallsForModelRow(row) {
  return (
    (Number(row.translation_calls) || 0) +
    (Number(row.rewrite_calls) || 0) +
    (Number(row.transform_calls) || 0)
  );
}

function totalCostForModelRow(row) {
  return (
    (Number(row.translation_cost) || 0) +
    (Number(row.rewrite_cost) || 0) +
    (Number(row.transform_cost) || 0)
  );
}

/** @param {"model"|"total_calls"|"total_cost"|"avg_tps"} sortKey @param {"asc"|"desc"} sortDir */
function compareByModelRows(a, b, sortKey, sortDir) {
  const mul = sortDir === "asc" ? 1 : -1;
  let cmp = 0;
  if (sortKey === "model") {
    cmp = compareModelIdsByFooterDisplay(a.model, b.model);
  } else if (sortKey === "total_calls") {
    cmp = totalCallsForModelRow(a) - totalCallsForModelRow(b);
  } else if (sortKey === "total_cost") {
    cmp = totalCostForModelRow(a) - totalCostForModelRow(b);
  } else if (sortKey === "avg_tps") {
    const na = Number(a.avg_tps);
    const nb = Number(b.avg_tps);
    const va = Number.isFinite(na) ? na : Number.NEGATIVE_INFINITY;
    const vb = Number.isFinite(nb) ? nb : Number.NEGATIVE_INFINITY;
    cmp = va - vb;
  }
  if (cmp !== 0) return cmp * mul;
  return compareStoredModelIdStrings(a.model, b.model);
}

/** Label + value row; value is left-aligned in the remaining width (`gap-6` matches detail rows). */
function ByModelExpandedModelHeader({ modelId, t }) {
  const full =
    modelId != null && String(modelId).trim() !== "" ? String(modelId) : null;
  const valueColorClass = getCallDetailsValueColorClass(undefined);
  return (
    <div className="mb-2 flex w-full min-w-0 items-baseline gap-6">
      <span className="text-xs font-medium text-muted-foreground shrink-0">{t("Model")}</span>
      <span
        className={cn(
          "min-w-0 flex-1 text-start text-xs break-all",
          valueColorClass || "text-foreground",
        )}
      >
        {full ?? DASH}
      </span>
    </div>
  );
}

function ByModelExpandedDetails({ row, costFractionStyle, locale, t }) {
  const tc = Number(row.translation_calls) || 0;
  const rc = Number(row.rewrite_calls) || 0;
  const fc = Number(row.transform_calls) || 0;
  const rows = [
    {
      key: "translation",
      callsLabel: t("Translation Calls:"),
      avgLabel: t("Translation avg. cost/call:"),
      calls: tc,
      cost: row.translation_cost,
    },
    {
      key: "rewrite",
      callsLabel: t("Rewrite Calls:"),
      avgLabel: t("Rewrite avg. cost/call:"),
      calls: rc,
      cost: row.rewrite_cost,
    },
    {
      key: "transform",
      callsLabel: t("Transform Calls:"),
      avgLabel: t("Transform avg. cost/call:"),
      calls: fc,
      cost: row.transform_cost,
    },
  ];
  return (
    <table className="w-full max-w-4xl border-collapse text-[13px]">
      <tbody>
        {rows.map((r) => (
          <tr key={r.key} className="border-b border-border/70 last:border-b-0 dark:border-white/10">
            <td className="py-2 pe-6 align-top sm:pe-10">
              <div className="flex min-w-0 justify-between gap-6">
                <span className="text-muted-foreground">{r.callsLabel}</span>
                <span className="tabular-nums text-foreground shrink-0">{formatCount(r.calls, locale)}</span>
              </div>
            </td>
            <td className="py-2 align-top">
              <div className="flex min-w-0 justify-between gap-6">
                <span className="text-muted-foreground">{r.avgLabel}</span>
                <span className="tabular-nums shrink-0 text-end">
                  {formatAvgCost(r.cost, r.calls, costFractionStyle, locale)}
                </span>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default function DashboardTabByModel({
  loading,
  byModel,
  costFractionStyle,
  styles,
  setModelToDelete,
}) {
  const { t, i18n } = useTranslation();
  const locale = i18n.language || "en-GB";
  const [exportLoading, setExportLoading] = useState(false);
  const [expandedModelId, setExpandedModelId] = useState(null);
  const [byModelSort, setByModelSort] = useState({ key: "total_calls", dir: "desc" });

  const toggleByModelSort = useCallback((key) => {
    setByModelSort((prev) => {
      if (prev.key !== key) {
        return { key, dir: key === "model" ? "asc" : "desc" };
      }
      return { key, dir: prev.dir === "asc" ? "desc" : "asc" };
    });
  }, []);

  const toggleModelRow = useCallback((modelId) => {
    setExpandedModelId((prev) => (prev === modelId ? null : modelId));
  }, []);

  const exportColumnsByModel = useMemo(
    () => [
      { key: "model", labelKey: t("Model") },
      { key: "translation_calls", labelKey: t("Translation calls") },
      { key: "rewrite_calls", labelKey: t("Rewrite calls") },
      { key: "transform_calls", labelKey: t("Transform calls") },
      { key: "translation_cost", labelKey: t("Translation cost") },
      { key: "rewrite_cost", labelKey: t("Rewrite cost") },
      { key: "transform_cost", labelKey: t("Transform cost") },
      { key: "avg_tps", labelKey: t("Avg TPS") },
    ],
    [t]
  );

  const dataRows = useMemo(() => {
    const rows = byModel.filter((r) => r.model !== "Total");
    return [...rows].sort((a, b) =>
      compareByModelRows(a, b, byModelSort.key, byModelSort.dir),
    );
  }, [byModel, byModelSort]);

  const exportRowsByModel = useMemo(() => {
    const totalRow = byModel.find((r) => r.model === "Total");
    return totalRow ? [...dataRows, totalRow] : dataRows;
  }, [byModel, dataRows]);

  const handleExport = useCallback(
    (format) => {
      const rows = exportRowsByModel;
      setExportLoading(true);
      try {
        if (format === "json") {
          const blob = new Blob([JSON.stringify(rows, null, 2)], {
            type: "application/json",
          });
          triggerDownload(blob, `${EXPORT_FILENAME_BY_MODEL}.json`);
        } else if (format === "csv") {
          const csv = rowsToCsvWithLabels(rows, exportColumnsByModel);
          const blob = new Blob([csv], { type: "text/csv" });
          triggerDownload(blob, `${EXPORT_FILENAME_BY_MODEL}.csv`);
        } else if (format === "xlsx") {
          const costKeys = [
            "translation_cost",
            "rewrite_cost",
            "transform_cost",
          ];
          const costColIndices = new Set(
            costKeys.map((k) =>
              exportColumnsByModel.findIndex((c) => c.key === k)
            )
          );
          const tpsColIndex = exportColumnsByModel.findIndex(
            (c) => c.key === "avg_tps"
          );
          const headerRow = exportColumnsByModel.map((c) => c.labelKey);
          const dataRows = rows.map((row) =>
            exportColumnsByModel.map((c) => row[c.key])
          );
          const aoa = [headerRow, ...dataRows];
          const ws = XLSX.utils.aoa_to_sheet(aoa);
          const range = XLSX.utils.decode_range(ws["!ref"] || "A1");
          const headerStyle = {
            fill: { patternType: "solid", fgColor: { rgb: "BDD7EE" } },
            font: { bold: true },
            alignment: { vertical: "top" },
          };
          const cellStyleTop = { alignment: { vertical: "top" } };
          const cellStyleCost = {
            alignment: { vertical: "top" },
            numFmt: "0.000000",
          };
          const cellStyleTps = {
            alignment: { vertical: "top" },
            numFmt: "0.0",
          };
          for (let C = range.s.c; C <= range.e.c; C++) {
            const addr = XLSX.utils.encode_cell({ r: 0, c: C });
            if (ws[addr]) ws[addr].s = headerStyle;
          }
          for (let R = range.s.r + 1; R <= range.e.r; R++) {
            for (let C = range.s.c; C <= range.e.c; C++) {
              const addr = XLSX.utils.encode_cell({ r: R, c: C });
              const style =
                costColIndices.has(C)
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
              maxCh = Math.min(Math.max(maxCh, str.length + 2), 80);
            }
            colWidths.push({ wch: maxCh });
          }
          ws["!cols"] = colWidths;
          const wb = XLSX.utils.book_new();
          XLSX.utils.book_append_sheet(wb, ws, "By Model");
          const arr = XLSX.write(wb, { bookType: "xlsx", type: "array" });
          const blob = new Blob([arr], {
            type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
          });
          triggerDownload(blob, `${EXPORT_FILENAME_BY_MODEL}.xlsx`);
        }
      } finally {
        setExportLoading(false);
      }
    },
    [exportRowsByModel, exportColumnsByModel]
  );

  if (loading) {
    return <p>{t("Loading…")}</p>;
  }

  const totalRow = byModel.find((r) => r.model === "Total");

  return (
    <div role="tabpanel" aria-label={t("By Model")} className="w-full">
      <div className={styles.paginationRow} style={{ marginBottom: "8px" }}>
        <DashboardExportToolbar exportLoading={exportLoading} onExport={handleExport} />
      </div>

      {/* Mobile card view */}
      <div className="sm:hidden flex flex-col gap-2 pb-4">
        {dataRows.length === 0 ? (
          <div className={styles.emptyRow}>{t("(no information available)")}</div>
        ) : (
          dataRows.map((row) => {
            const isFree =
              (Number(row.translation_cost) || 0) +
                (Number(row.rewrite_cost) || 0) +
                (Number(row.transform_cost) || 0) ===
              0;
            const modelLabel = modelFooterDisplayId(row.model) || row.model;
            const totalCalls = totalCallsForModelRow(row);
            const totalCost = totalCostForModelRow(row);
            const expanded = expandedModelId === row.model;
            return (
              <div key={row.model} className="flex flex-col gap-1">
                <div
                  className="border border-border rounded-lg p-3 bg-card dark:bg-[#222235] text-sm cursor-pointer hover:bg-accent/50 transition-colors"
                  role="button"
                  tabIndex={0}
                  aria-expanded={expanded}
                  onClick={() => toggleModelRow(row.model)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      toggleModelRow(row.model);
                    }
                  }}
                >
                  <div className="flex items-center gap-2 mb-2 font-medium text-foreground flex-wrap">
                    <ChevronRight
                      size={16}
                      className={`shrink-0 text-muted-foreground rtl-icon-mirror transition-transform ${expanded ? "rotate-90" : ""}`}
                      aria-hidden
                    />
                    <span className="break-all" title={row.model}>{modelLabel}</span>
                    {isFree && (
                      <Badge variant="outline" className="text-green-400 border-green-500/50 text-xs py-0 shrink-0">
                        <WandSparkles size={10} className="me-1" />
                        {t("Free")}
                      </Badge>
                    )}
                    <Trash2
                      size={14}
                      className={`${styles.modelTrashIcon} ms-auto shrink-0`}
                      title={t("Exclude all data for this model")}
                      onClick={(e) => {
                        e.stopPropagation();
                        setModelToDelete(row.model);
                      }}
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-x-3 gap-y-1 text-xs text-muted-foreground">
                    <span>{t("Total calls")}</span>
                    <span className="text-foreground text-end tabular-nums">{formatCount(totalCalls, locale)}</span>
                    <span>{t("Total Cost")}</span>
                    <span className="text-foreground text-end">{formatCost(totalCost, costFractionStyle, locale)}</span>
                    <span>{t("Avg TPS")}</span>
                    <span className="text-foreground text-end tabular-nums">{formatAvgTps(row.avg_tps, locale)}</span>
                  </div>
                </div>
                {expanded && (
                  <div className={styles.dashboardMobileExpandedCard}>
                    <ByModelExpandedModelHeader modelId={row.model} t={t} />
                    <ByModelExpandedDetails
                      row={row}
                      costFractionStyle={costFractionStyle}
                      locale={locale}
                      t={t}
                    />
                  </div>
                )}
              </div>
            );
          })
        )}
        {totalRow && (
          <div className="border border-border rounded-lg p-3 bg-muted dark:bg-[#2d2d42] text-sm font-semibold">
            <div className="mb-2 text-foreground">{t("Total")}</div>
            <div className="grid grid-cols-2 gap-x-3 gap-y-1 text-xs">
              <span className="text-muted-foreground">{t("Total calls")}</span>
              <span className="text-foreground text-end tabular-nums">{formatCount(totalCallsForModelRow(totalRow), locale)}</span>
              <span className="text-muted-foreground">{t("Total Cost")}</span>
              <span className="text-foreground text-end">{formatCost(totalCostForModelRow(totalRow), costFractionStyle, locale)}</span>
              <span className="text-muted-foreground">{t("Avg TPS")}</span>
              <span className="text-foreground text-end tabular-nums">{formatAvgTps(totalRow.avg_tps, locale)}</span>
            </div>
          </div>
        )}
      </div>

      {/* Desktop ledger (expandable, same pattern as All Calls) */}
      <div className={`hidden sm:flex ${styles.byModelLedgerWrapper}`}>
        <div className={styles.byModelLedgerHeaderRow}>
          <div className={styles.byModelLedgerHeaderCell} aria-hidden />
          <button
            type="button"
            className={cn(
              styles.byModelLedgerHeaderCell,
              "w-full gap-1 hover:bg-accent/40 cursor-pointer select-none text-start",
            )}
            onClick={() => toggleByModelSort("model")}
            aria-sort={
              byModelSort.key === "model"
                ? byModelSort.dir === "asc"
                  ? "ascending"
                  : "descending"
                : "none"
            }
          >
            <span>{t("Model")}</span>
            {byModelSort.key === "model" ? (
              byModelSort.dir === "asc" ? (
                <ArrowUp className="h-3.5 w-3.5 shrink-0 opacity-90" aria-hidden />
              ) : (
                <ArrowDown className="h-3.5 w-3.5 shrink-0 opacity-90" aria-hidden />
              )
            ) : null}
          </button>
          <button
            type="button"
            className={cn(
              styles.byModelLedgerHeaderCell,
              styles.cellRight,
              "w-full justify-end gap-1 hover:bg-accent/40 cursor-pointer select-none text-end",
            )}
            onClick={() => toggleByModelSort("total_calls")}
            aria-sort={
              byModelSort.key === "total_calls"
                ? byModelSort.dir === "asc"
                  ? "ascending"
                  : "descending"
                : "none"
            }
          >
            <span>{t("Total calls")}</span>
            {byModelSort.key === "total_calls" ? (
              byModelSort.dir === "asc" ? (
                <ArrowUp className="h-3.5 w-3.5 shrink-0 opacity-90" aria-hidden />
              ) : (
                <ArrowDown className="h-3.5 w-3.5 shrink-0 opacity-90" aria-hidden />
              )
            ) : null}
          </button>
          <button
            type="button"
            className={cn(
              styles.byModelLedgerHeaderCell,
              styles.cellRight,
              "w-full justify-end gap-1 hover:bg-accent/40 cursor-pointer select-none text-end",
            )}
            onClick={() => toggleByModelSort("total_cost")}
            aria-sort={
              byModelSort.key === "total_cost"
                ? byModelSort.dir === "asc"
                  ? "ascending"
                  : "descending"
                : "none"
            }
          >
            <span>{t("Total Cost")}</span>
            {byModelSort.key === "total_cost" ? (
              byModelSort.dir === "asc" ? (
                <ArrowUp className="h-3.5 w-3.5 shrink-0 opacity-90" aria-hidden />
              ) : (
                <ArrowDown className="h-3.5 w-3.5 shrink-0 opacity-90" aria-hidden />
              )
            ) : null}
          </button>
          <button
            type="button"
            className={cn(
              styles.byModelLedgerHeaderCell,
              styles.cellRight,
              "w-full justify-end gap-1 hover:bg-accent/40 cursor-pointer select-none text-end",
            )}
            onClick={() => toggleByModelSort("avg_tps")}
            aria-sort={
              byModelSort.key === "avg_tps"
                ? byModelSort.dir === "asc"
                  ? "ascending"
                  : "descending"
                : "none"
            }
          >
            <span>{t("Avg TPS")}</span>
            {byModelSort.key === "avg_tps" ? (
              byModelSort.dir === "asc" ? (
                <ArrowUp className="h-3.5 w-3.5 shrink-0 opacity-90" aria-hidden />
              ) : (
                <ArrowDown className="h-3.5 w-3.5 shrink-0 opacity-90" aria-hidden />
              )
            ) : null}
          </button>
        </div>

        <div className={styles.byModelLedgerBodyContainer}>
          {dataRows.length === 0 ? (
            <div
              className={styles.emptyRow}
              style={{ width: "100%", padding: "20px", boxSizing: "border-box" }}
            >
              {t("(no information available)")}
            </div>
          ) : (
            dataRows.map((row) => {
              const isFree =
                (Number(row.translation_cost) || 0) +
                  (Number(row.rewrite_cost) || 0) +
                  (Number(row.transform_cost) || 0) ===
                0;
              const modelLabel = modelFooterDisplayId(row.model) || row.model;
              const totalCalls = totalCallsForModelRow(row);
              const totalCost = totalCostForModelRow(row);
              const expanded = expandedModelId === row.model;
              return (
                <Fragment key={row.model}>
                  <div
                    className={styles.byModelLedgerBodyRow}
                    role="button"
                    tabIndex={0}
                    aria-expanded={expanded}
                    onClick={() => toggleModelRow(row.model)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        toggleModelRow(row.model);
                      }
                    }}
                  >
                    <div className={`${styles.byModelLedgerCell} flex items-center justify-center p-2`}>
                      <ChevronRight
                        size={16}
                        className={`text-muted-foreground rtl-icon-mirror transition-transform ${expanded ? "rotate-90" : ""}`}
                        aria-hidden
                      />
                    </div>
                    <div className={styles.byModelLedgerCell} style={{ display: "flex", alignItems: "center", gap: "6px", minWidth: 0 }}>
                      <span className="truncate" title={row.model}>{modelLabel}</span>
                      {isFree && (
                        <Badge variant="outline" className="text-green-400 border-green-500/50 text-xs py-0 shrink-0">
                          <WandSparkles size={10} className="me-1" />
                          {t("Free")}
                        </Badge>
                      )}
                      <Trash2
                        size={14}
                        className={`${styles.modelTrashIcon} shrink-0`}
                        title={t("Exclude all data for this model")}
                        onClick={(e) => {
                          e.stopPropagation();
                          setModelToDelete(row.model);
                        }}
                      />
                    </div>
                    <div className={`${styles.byModelLedgerCell} ${styles.tdValue} ${styles.cellRight}`}>
                      {formatCount(totalCalls, locale)}
                    </div>
                    <div className={`${styles.byModelLedgerCell} ${styles.tdValue} ${styles.cellRight}`}>
                      {formatCost(totalCost, costFractionStyle, locale)}
                    </div>
                    <div className={`${styles.byModelLedgerCell} ${styles.tdValue} ${styles.cellRight}`}>
                      {formatAvgTps(row.avg_tps, locale)}
                    </div>
                  </div>
                  {expanded && (
                    <div className={styles.byModelLedgerExpandedRow}>
                      <ByModelExpandedModelHeader modelId={row.model} t={t} />
                      <ByModelExpandedDetails
                        row={row}
                        costFractionStyle={costFractionStyle}
                        locale={locale}
                        t={t}
                      />
                    </div>
                  )}
                </Fragment>
              );
            })
          )}
          {totalRow && (
            <div className={styles.byModelLedgerTotalRow}>
              <div className={styles.byModelLedgerCell} aria-hidden />
              <div className={styles.byModelLedgerCell}>
                <strong>{t("Total")}</strong>
              </div>
              <div className={`${styles.byModelLedgerCell} ${styles.tdValue} ${styles.cellRight}`}>
                {formatCount(totalCallsForModelRow(totalRow), locale)}
              </div>
              <div className={`${styles.byModelLedgerCell} ${styles.tdValue} ${styles.cellRight}`}>
                {formatCost(totalCostForModelRow(totalRow), costFractionStyle, locale)}
              </div>
              <div className={`${styles.byModelLedgerCell} ${styles.tdValue} ${styles.cellRight}`}>
                {formatAvgTps(totalRow.avg_tps, locale)}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

DashboardTabByModel.propTypes = {
  loading: PropTypes.bool.isRequired,
  byModel: PropTypes.arrayOf(PropTypes.object).isRequired,
  costFractionStyle: PropTypes.string.isRequired,
  styles: PropTypes.object.isRequired,
  setModelToDelete: PropTypes.func.isRequired,
};
