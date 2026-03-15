import { useState, useCallback, Fragment, useMemo } from "react";
import { useTranslation } from "react-i18next";
import {
  Button,
  Label,
  Dropdown,
  Option,
  Text,
  tokens,
} from "@fluentui/react-components";
import { ChevronLeft, ChevronRight, Trash2, Download } from "lucide-react";
import * as XLSX from "xlsx-js-style";
import PropTypes from "prop-types";
import {
  formatDateTime,
  interpolateTemplate,
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

const PAGE_SIZES = [10, 20, 50, 100];
const EXPORT_FILENAME = "transrewrt-calls";

function orDash(val) {
  if (val == null) return DASH;
  if (typeof val === "string" && val.trim() === "") return DASH;
  return val;
}

export default function DashboardTabAllCalls({
  allCallsPage,
  setAllCallsPage,
  allCallsPageSize,
  allCallsRows,
  allCallsTotal,
  allCallsLoading,
  costFractionStyle,
  styles,
  setModelToDelete,
  setSetting,
  getExportAllCalls,
}) {
  const { t, i18n } = useTranslation();
  const locale = i18n.language || "en-GB";
  const [exportLoading, setExportLoading] = useState(false);
  const [selectedCallRow, setSelectedCallRow] = useState(null);

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

  return (
    <div
      role="tabpanel"
      aria-label={t("All Calls")}
      className={styles.allCallsTabPanel}
    >
      <div className={styles.allCallsTabContent}>
        <Text as="h4" size={400} style={{ marginBottom: "4px" }}>
          {t("All API calls (raw data)")}
        </Text>
        <div className={styles.paginationRow}>
          <Label>{t("Rows per page")}</Label>
          <Dropdown
            value={String(allCallsPageSize)}
            selectedOptions={[String(allCallsPageSize)]}
            onOptionSelect={(_, data) => {
              const v = Number(data.optionValue);
              if (PAGE_SIZES.includes(v)) {
                setSetting("all_calls_page_size", v);
                setAllCallsPage(1);
              }
            }}
            style={{ minWidth: "80px" }}
          >
            {PAGE_SIZES.map((n) => (
              <Option key={n} value={String(n)}>
                {n}
              </Option>
            ))}
          </Dropdown>
          <span style={{ color: tokens.colorNeutralForeground2 }}>
            {interpolateTemplate(t("{{count}} row(s) total"), {
              count: allCallsTotal,
            })}
          </span>
          <Button
            size="small"
            appearance="secondary"
            disabled={allCallsPage <= 1}
            onClick={() => setAllCallsPage((p) => Math.max(1, p - 1))}
            icon={<ChevronLeft size={16} />}
          >
            {t("Prev")}
          </Button>
          <span
            style={{
              color: tokens.colorNeutralForeground2,
              alignSelf: "center",
            }}
          >
            {interpolateTemplate(t("Page {{page}} of {{total}}"), {
              page: allCallsPage,
              total: Math.max(
                1,
                Math.ceil(allCallsTotal / allCallsPageSize)
              ),
            })}
          </span>
          <Button
            size="small"
            appearance="secondary"
            disabled={
              allCallsPage >= Math.ceil(allCallsTotal / allCallsPageSize)
            }
            onClick={() =>
              setAllCallsPage((p) =>
                Math.min(
                  Math.ceil(allCallsTotal / allCallsPageSize),
                  p + 1
                )
              )
            }
          >
            {t("Next")} <ChevronRight size={16} />
          </Button>
          <div className={styles.paginationSpacer} />
          <div className={styles.downloadBlock}>
            <Download size={16} aria-hidden />
            <span style={{ fontWeight: 600 }}>{t("Download:")} </span>
            <Button
              size="small"
              appearance="subtle"
              className={styles.downloadButton}
              disabled={exportLoading}
              onClick={() => handleExport("json")}
            >
              {t("JSON")}
            </Button>
            <Button
              size="small"
              appearance="subtle"
              className={styles.downloadButton}
              disabled={exportLoading}
              onClick={() => handleExport("csv")}
            >
              {t("CSV")}
            </Button>
            <Button
              size="small"
              appearance="subtle"
              className={styles.downloadButton}
              disabled={exportLoading}
              onClick={() => handleExport("xlsx")}
            >
              {t("XLSX")}
            </Button>
          </div>
        </div>
        {allCallsLoading ? (
          <p>{t("Loading…")}</p>
        ) : (
          <div className={styles.allCallsTableWrapper}>
            <div className={styles.allCallsHeaderRow}>
              <div className={styles.allCallsHeaderCell}>{t("ID")}</div>
              <div className={styles.allCallsHeaderCell}>
                {t("Timestamp")}
              </div>
              <div className={styles.allCallsHeaderCell}>{t("Type")}</div>
              <div className={styles.allCallsHeaderCell}>{t("Username")}</div>
              <div className={styles.allCallsHeaderCell}>{t("Model")}</div>
              <div className={styles.allCallsHeaderCell}>{t("Cost")}</div>
              <div
                className={`${styles.allCallsHeaderCell} ${styles.cellRight}`}
              >
                {t("TPS")}
              </div>
            </div>

            <div className={styles.allCallsBodyContainer}>
              {allCallsRows.length === 0 ? (
                <div
                  className={styles.emptyRow}
                  style={{
                    width: "100%",
                    padding: "20px",
                    boxSizing: "border-box",
                  }}
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
                      onClick={() =>
                        setSelectedCallRow((prev) =>
                          prev?.id === row.id ? null : row
                        )
                      }
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          setSelectedCallRow((prev) =>
                            prev?.id === row.id ? null : row
                          );
                        }
                      }}
                    >
                      <div
                        className={`${styles.allCallsCell} ${styles.tdValue}`}
                      >
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
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "6px",
                        }}
                      >
                        <span
                          style={{
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                          }}
                        >
                          {orDash(row.model)}
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
                      <div
                        className={`${styles.allCallsCell} ${styles.tdValue}`}
                      >
                        {formatCost(row.cost, costFractionStyle, locale)}
                      </div>
                      <div
                        className={`${styles.allCallsCell} ${styles.tdValue} ${styles.cellRight}`}
                      >
                        {formatAvgTps(row.tps, locale)}
                      </div>
                    </div>
                    {selectedCallRow?.id === row.id && (
                      <div className={styles.allCallsExpandedRow}>
                        <CallDetailsContent row={row} />
                      </div>
                    )}
                  </Fragment>
                ))
              )}
            </div>
          </div>
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
  costFractionStyle: PropTypes.string.isRequired,
  styles: PropTypes.object.isRequired,
  setModelToDelete: PropTypes.func.isRequired,
  setSetting: PropTypes.func.isRequired,
  getExportAllCalls: PropTypes.func,
};
