import { useState, useCallback, Fragment, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { ArrowDown, ArrowUp, ChevronLeft, ChevronRight, Trash2 } from "lucide-react";
import * as XLSX from "xlsx-js-style";
import PropTypes from "prop-types";
import {
  formatDateTime,
} from "../utils/misc/formatUtils";
import {
  formatCost,
  formatAvgTps,
  DASH,
} from "../utils/misc/costUtils";
import {
  rowsToCsvWithLabels,
  triggerDownload,
} from "../utils/misc/exportUtils";
import CallDetailsContent from "./CallDetailsContent";
import DashboardExportToolbar from "./dashboard/DashboardExportToolbar";
import { modelFooterDisplayId } from "../utils/misc/modelIdUtils";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { SOURCE_LOCALE } from "../i18n";

const PAGE_SIZES = [10, 20, 50, 100];
const EXPORT_FILENAME = "transrewrt-calls";

function orDash(val) {
  if (val == null) return DASH;
  if (typeof val === "string" && val.trim() === "") return DASH;
  return val;
}

/** Compact model label for collapsed rows; full id shown in expanded header. */
function modelShortLabel(modelId) {
  if (modelId == null || String(modelId).trim() === "") return null;
  return modelFooterDisplayId(modelId) || String(modelId);
}

export default function DashboardTabAllCalls({
  allCallsPage,
  setAllCallsPage,
  allCallsPageSize,
  allCallsRows,
  allCallsTotal,
  allCallsLoading,
  allCallsSort,
  onAllCallsSortColumn,
  costFractionStyle,
  styles,
  setModelToDelete,
  setSetting,
  getExportAllCalls,
  isCardLayout = false,
}) {
  const { t, i18n } = useTranslation();
  const locale = i18n.language || SOURCE_LOCALE;
  const [exportLoading, setExportLoading] = useState(false);
  const [selectedCallRow, setSelectedCallRow] = useState(null);

  /** Keeps Model value aligned with Source/Target/etc. (single grid vs separate header grid). */
  const allCallsExpandedPrependFields = useMemo(
    () => [
      {
        key: "_expanded_model",
        labelKey: "Model",
        format: (r) =>
          r.model != null && String(r.model).trim() !== "" ? String(r.model) : DASH,
        valueClassName: "break-all",
      },
    ],
    [],
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
    ],
    [t]
  );

  const handleExport = useCallback(
    async (format) => {
      if (typeof getExportAllCalls !== "function") return;
      setExportLoading(true);
      try {
        const rows = (await getExportAllCalls()) ?? [];
        if (format === "json") {
          const blob = new Blob([JSON.stringify(rows, null, 2)], {
            type: "application/json",
          });
          triggerDownload(blob, `${EXPORT_FILENAME}.json`);
        } else if (format === "csv") {
          const csv = rowsToCsvWithLabels(rows, exportColumns);
          const blob = new Blob([csv], { type: "text/csv" });
          triggerDownload(blob, `${EXPORT_FILENAME}.csv`);
        } else if (format === "xlsx") {
          const costColIndex = exportColumns.findIndex((c) => c.key === "cost");
          const tpsColIndex = exportColumns.findIndex((c) => c.key === "tps");
          const headerRow = exportColumns.map((c) => c.labelKey);
          const dataRows = rows.map((row) =>
            exportColumns.map((c) => row[c.key])
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
          XLSX.utils.book_append_sheet(wb, ws, "Calls");
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
    [getExportAllCalls, exportColumns]
  );

  const toggleRow = (row) =>
    setSelectedCallRow((prev) => (prev?.id === row.id ? null : row));

  const totalPages = Math.max(1, Math.ceil(allCallsTotal / allCallsPageSize));

  return (
    <div
      role="tabpanel"
      aria-label={t("All Calls")}
      className={isCardLayout ? styles.allCallsTabPanelCardLayout : styles.allCallsTabPanel}
    >
      <div className={isCardLayout ? styles.allCallsTabContentCardLayout : styles.allCallsTabContent}>
        <div className={styles.paginationRow}>
          <label className="text-sm">{t("Rows per page")}</label>
          <Select
            value={String(allCallsPageSize)}
            onValueChange={(v) => {
              const n = Number(v);
              if (PAGE_SIZES.includes(n)) {
                setSetting("all_calls_page_size", n);
                setAllCallsPage(1);
              }
            }}
          >
            <SelectTrigger className="w-[80px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {PAGE_SIZES.map((n) => (
                <SelectItem key={n} value={String(n)}>{n}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          <span className="text-[#d1d5db]">
            {t("{{count}} row(s) total", { count: allCallsTotal })}
          </span>
          <Button
            variant="outline"
            size="sm"
            disabled={allCallsPage <= 1}
            onClick={() => setAllCallsPage((p) => Math.max(1, p - 1))}
          >
            <ChevronLeft size={16} className="rtl-icon-mirror" />
            {t("Prev")}
          </Button>
          <span className="text-[#d1d5db] self-center">
            {t("Page {{page}} of {{total}}", { page: allCallsPage, total: totalPages })}
          </span>
          <Button
            variant="outline"
            size="sm"
            disabled={allCallsPage >= totalPages}
            onClick={() => setAllCallsPage((p) => Math.min(totalPages, p + 1))}
          >
            {t("Next")}{" "}
            <ChevronRight size={16} className="rtl-icon-mirror" />
          </Button>
          <div className={styles.paginationSpacer} />
          <DashboardExportToolbar exportLoading={exportLoading} onExport={handleExport} />
        </div>

        {allCallsLoading ? (
          <p>{t("Loading…")}</p>
        ) : (
          <>
            {/* Mobile card view */}
            <div className="sm:hidden flex flex-col gap-2 pb-4">
              {allCallsRows.length === 0 ? (
                <div className={styles.emptyRow}>{t("(no information available)")}</div>
              ) : (
                allCallsRows.map((row) => (
                  <div key={row.id} className="flex flex-col gap-1">
                    <div
                      className="border border-border rounded-lg p-3 bg-card dark:bg-[#222235] cursor-pointer hover:bg-accent/50 transition-colors"
                      role="button"
                      tabIndex={0}
                      onClick={() => toggleRow(row)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          toggleRow(row);
                        }
                      }}
                    >
                      <div className="flex items-center justify-between mb-1.5 gap-2">
                        <span className="text-xs text-muted-foreground">#{row.id}</span>
                        <span
                          className={`${styles.typeBadge} ${
                            row.type === "translate"
                              ? styles.typeTranslate
                              : row.type === "rewrite"
                              ? styles.typeRewrite
                              : styles.typeTransform
                          }`}
                        >
                          {row.type || DASH}
                        </span>
                      </div>
                      <div className="text-xs text-muted-foreground mb-1.5">
                        {row.timestamp ? formatDateTime(new Date(row.timestamp), locale) : DASH}
                      </div>
                      <div className="flex items-center gap-1.5 text-sm font-medium text-foreground mb-1 min-w-0">
                        <span className="truncate" title={row.model ? String(row.model) : undefined}>
                          {modelShortLabel(row.model) ?? DASH}
                        </span>
                        {row.model && String(row.model).trim() !== "" && (
                          <Trash2
                            size={13}
                            className={`${styles.modelTrashIcon} shrink-0`}
                            title={t("Exclude all data for this model")}
                            onClick={(e) => {
                              e.stopPropagation();
                              setModelToDelete(row.model);
                            }}
                          />
                        )}
                      </div>
                      <div className="flex items-center justify-between text-xs text-muted-foreground gap-2">
                        <span>{orDash(row.username)}</span>
                        <span className="text-foreground font-medium">
                          {formatCost(row.cost, costFractionStyle, locale)}
                          {" · "}
                          {formatAvgTps(row.tps, locale)} TPS
                        </span>
                      </div>
                    </div>
                    {selectedCallRow?.id === row.id && (
                      <div className={styles.dashboardMobileExpandedCard}>
                        <CallDetailsContent
                          row={row}
                          columnCount={1}
                          prependFields={allCallsExpandedPrependFields}
                        />
                      </div>
                    )}
                  </div>
                ))
              )}
            </div>

            {/* Desktop table view */}
            <div className={`hidden sm:flex ${styles.allCallsTableWrapper}`}>
              <div className={styles.allCallsHeaderRow}>
                <button
                  type="button"
                  className={cn(
                    styles.allCallsHeaderCell,
                    "w-full gap-1 hover:bg-accent/40 cursor-pointer select-none text-start",
                  )}
                  onClick={() => onAllCallsSortColumn("id")}
                  aria-sort={
                    allCallsSort.key === "id"
                      ? allCallsSort.dir === "asc"
                        ? "ascending"
                        : "descending"
                      : "none"
                  }
                >
                  <span>{t("ID")}</span>
                  {allCallsSort.key === "id" ? (
                    allCallsSort.dir === "asc" ? (
                      <ArrowUp className="h-3.5 w-3.5 shrink-0 opacity-90" aria-hidden />
                    ) : (
                      <ArrowDown className="h-3.5 w-3.5 shrink-0 opacity-90" aria-hidden />
                    )
                  ) : null}
                </button>
                <button
                  type="button"
                  className={cn(
                    styles.allCallsHeaderCell,
                    "w-full gap-1 hover:bg-accent/40 cursor-pointer select-none text-start",
                  )}
                  onClick={() => onAllCallsSortColumn("timestamp")}
                  aria-sort={
                    allCallsSort.key === "timestamp"
                      ? allCallsSort.dir === "asc"
                        ? "ascending"
                        : "descending"
                      : "none"
                  }
                >
                  <span>{t("Timestamp")}</span>
                  {allCallsSort.key === "timestamp" ? (
                    allCallsSort.dir === "asc" ? (
                      <ArrowUp className="h-3.5 w-3.5 shrink-0 opacity-90" aria-hidden />
                    ) : (
                      <ArrowDown className="h-3.5 w-3.5 shrink-0 opacity-90" aria-hidden />
                    )
                  ) : null}
                </button>
                <button
                  type="button"
                  className={cn(
                    styles.allCallsHeaderCell,
                    "w-full gap-1 hover:bg-accent/40 cursor-pointer select-none text-start",
                  )}
                  onClick={() => onAllCallsSortColumn("type")}
                  aria-sort={
                    allCallsSort.key === "type"
                      ? allCallsSort.dir === "asc"
                        ? "ascending"
                        : "descending"
                      : "none"
                  }
                >
                  <span>{t("Type")}</span>
                  {allCallsSort.key === "type" ? (
                    allCallsSort.dir === "asc" ? (
                      <ArrowUp className="h-3.5 w-3.5 shrink-0 opacity-90" aria-hidden />
                    ) : (
                      <ArrowDown className="h-3.5 w-3.5 shrink-0 opacity-90" aria-hidden />
                    )
                  ) : null}
                </button>
                <button
                  type="button"
                  className={cn(
                    styles.allCallsHeaderCell,
                    "w-full gap-1 hover:bg-accent/40 cursor-pointer select-none text-start",
                  )}
                  onClick={() => onAllCallsSortColumn("username")}
                  aria-sort={
                    allCallsSort.key === "username"
                      ? allCallsSort.dir === "asc"
                        ? "ascending"
                        : "descending"
                      : "none"
                  }
                >
                  <span>{t("Username")}</span>
                  {allCallsSort.key === "username" ? (
                    allCallsSort.dir === "asc" ? (
                      <ArrowUp className="h-3.5 w-3.5 shrink-0 opacity-90" aria-hidden />
                    ) : (
                      <ArrowDown className="h-3.5 w-3.5 shrink-0 opacity-90" aria-hidden />
                    )
                  ) : null}
                </button>
                <button
                  type="button"
                  className={cn(
                    styles.allCallsHeaderCell,
                    "w-full gap-1 hover:bg-accent/40 cursor-pointer select-none text-start",
                  )}
                  onClick={() => onAllCallsSortColumn("model")}
                  aria-sort={
                    allCallsSort.key === "model"
                      ? allCallsSort.dir === "asc"
                        ? "ascending"
                        : "descending"
                      : "none"
                  }
                >
                  <span>{t("Model")}</span>
                  {allCallsSort.key === "model" ? (
                    allCallsSort.dir === "asc" ? (
                      <ArrowUp className="h-3.5 w-3.5 shrink-0 opacity-90" aria-hidden />
                    ) : (
                      <ArrowDown className="h-3.5 w-3.5 shrink-0 opacity-90" aria-hidden />
                    )
                  ) : null}
                </button>
                <button
                  type="button"
                  className={cn(
                    styles.allCallsHeaderCell,
                    "w-full gap-1 hover:bg-accent/40 cursor-pointer select-none text-start",
                  )}
                  onClick={() => onAllCallsSortColumn("cost")}
                  aria-sort={
                    allCallsSort.key === "cost"
                      ? allCallsSort.dir === "asc"
                        ? "ascending"
                        : "descending"
                      : "none"
                  }
                >
                  <span>{t("Cost")}</span>
                  {allCallsSort.key === "cost" ? (
                    allCallsSort.dir === "asc" ? (
                      <ArrowUp className="h-3.5 w-3.5 shrink-0 opacity-90" aria-hidden />
                    ) : (
                      <ArrowDown className="h-3.5 w-3.5 shrink-0 opacity-90" aria-hidden />
                    )
                  ) : null}
                </button>
                <button
                  type="button"
                  className={cn(
                    styles.allCallsHeaderCell,
                    styles.cellRight,
                    "w-full justify-end gap-1 hover:bg-accent/40 cursor-pointer select-none text-end",
                  )}
                  onClick={() => onAllCallsSortColumn("tps")}
                  aria-sort={
                    allCallsSort.key === "tps"
                      ? allCallsSort.dir === "asc"
                        ? "ascending"
                        : "descending"
                      : "none"
                  }
                >
                  <span>{t("TPS")}</span>
                  {allCallsSort.key === "tps" ? (
                    allCallsSort.dir === "asc" ? (
                      <ArrowUp className="h-3.5 w-3.5 shrink-0 opacity-90" aria-hidden />
                    ) : (
                      <ArrowDown className="h-3.5 w-3.5 shrink-0 opacity-90" aria-hidden />
                    )
                  ) : null}
                </button>
              </div>

              <div className={styles.allCallsBodyContainer}>
                {allCallsRows.length === 0 ? (
                  <div
                    className={styles.emptyRow}
                    style={{ width: "100%", padding: "20px", boxSizing: "border-box" }}
                  >
                    {t("(no information available)")}
                  </div>
                ) : (
                  allCallsRows.map((row) => (
                    <Fragment key={row.id}>
                      <div
                        className={styles.allCallsBodyRow}
                        role="button"
                        tabIndex={0}
                        onClick={() => toggleRow(row)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" || e.key === " ") {
                            e.preventDefault();
                            toggleRow(row);
                          }
                        }}
                      >
                        <div className={`${styles.allCallsCell} ${styles.tdValue}`}>
                          {row.id}
                        </div>
                        <div className={styles.allCallsCell}>
                          {row.timestamp
                            ? formatDateTime(new Date(row.timestamp), locale)
                            : DASH}
                        </div>
                        <div className={styles.allCallsCell}>
                          <span
                            className={`${styles.typeBadge} ${
                              row.type === "translate"
                                ? styles.typeTranslate
                                : row.type === "rewrite"
                                ? styles.typeRewrite
                                : styles.typeTransform
                            }`}
                          >
                            {row.type || DASH}
                          </span>
                        </div>
                        <div className={styles.allCallsCell}>
                          {orDash(row.username)}
                        </div>
                        <div
                          className={styles.allCallsCell}
                          style={{ display: "flex", alignItems: "center", gap: "6px" }}
                        >
                          <span
                            style={{ overflow: "hidden", textOverflow: "ellipsis" }}
                            title={row.model ? String(row.model) : undefined}
                          >
                            {modelShortLabel(row.model) ?? DASH}
                          </span>
                          {row.model && String(row.model).trim() !== "" && (
                            <Trash2
                              size={14}
                              className={styles.modelTrashIcon}
                              title={t("Exclude all data for this model")}
                              onClick={(e) => {
                                e.stopPropagation();
                                setModelToDelete(row.model);
                              }}
                            />
                          )}
                        </div>
                        <div className={`${styles.allCallsCell} ${styles.tdValue}`}>
                          {formatCost(row.cost, costFractionStyle, locale)}
                        </div>
                        <div className={`${styles.allCallsCell} ${styles.tdValue} ${styles.cellRight}`}>
                          {formatAvgTps(row.tps, locale)}
                        </div>
                      </div>
                      {selectedCallRow?.id === row.id && (
                        <div className={styles.allCallsExpandedRow}>
                          <CallDetailsContent
                            row={row}
                            prependFields={allCallsExpandedPrependFields}
                          />
                        </div>
                      )}
                    </Fragment>
                  ))
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

DashboardTabAllCalls.propTypes = {
  allCallsPage: PropTypes.number.isRequired,
  setAllCallsPage: PropTypes.func.isRequired,
  allCallsPageSize: PropTypes.number.isRequired,
  allCallsRows: PropTypes.arrayOf(PropTypes.object).isRequired,
  allCallsTotal: PropTypes.number.isRequired,
  allCallsLoading: PropTypes.bool.isRequired,
  allCallsSort: PropTypes.shape({
    key: PropTypes.string.isRequired,
    dir: PropTypes.oneOf(["asc", "desc"]).isRequired,
  }).isRequired,
  onAllCallsSortColumn: PropTypes.func.isRequired,
  costFractionStyle: PropTypes.string.isRequired,
  styles: PropTypes.object.isRequired,
  setModelToDelete: PropTypes.func.isRequired,
  setSetting: PropTypes.func.isRequired,
  getExportAllCalls: PropTypes.func,
  isCardLayout: PropTypes.bool,
};
