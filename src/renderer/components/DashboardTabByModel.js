import { useState, useCallback, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { Text, Button, Badge, tokens } from "@fluentui/react-components";
import { Trash2, Download, WandSparkles } from "lucide-react";
import * as XLSX from "xlsx-js-style";
import PropTypes from "prop-types";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { CHART_COLORS, chartProps } from "./DashboardPage-constants";
import {
  formatCost,
  formatCount,
  formatAvgTps,
} from "../utils/misc/costUtils";
import {
  rowsToCsvWithLabels,
  triggerDownload,
} from "../utils/misc/exportUtils";

const EXPORT_FILENAME_BY_MODEL = "transrewrt-bymodel";

function buildExportRowsByModel(byModel) {
  return byModel || [];
}

export default function DashboardTabByModel({
  loading,
  byModel,
  costFractionStyle,
  styles,
  emptyRow,
  setModelToDelete,
}) {
  const { t, i18n } = useTranslation();
  const locale = i18n.language || "en-GB";
  const [exportLoading, setExportLoading] = useState(false);
  const axisStyle = { stroke: CHART_COLORS.grid, fontSize: 12 };
  const tickStyle = { fill: tokens.colorNeutralForeground3 };

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

  const handleExport = useCallback(
    (format) => {
      const rows = buildExportRowsByModel(byModel);
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
    [byModel, exportColumnsByModel]
  );

  if (loading) {
    return <p>{t("Loading…")}</p>;
  }

  return (
    <div role="tabpanel" aria-label={t("By Model")}>
      <div className={styles.tabTableContent}>
        {(() => {
          const nonTotal = byModel.filter((r) => r.model !== "Total");
          const chartData = nonTotal.filter(
            (r) =>
              (Number(r.translation_cost) || 0) +
                (Number(r.rewrite_cost) || 0) +
                (Number(r.transform_cost) || 0) >
              0
          );
          return chartData.length > 0 ? (
            <div
              className={styles.chartContainer}
              style={{
                display: "flex",
                flexDirection: "column",
                paddingTop: "0px",
                gap: "0px",
              }}
            >
              <Text as="h4" size={400} style={{ flexShrink: 0 }}>
                {t("Cost by model (stacked)")}
              </Text>
              <div style={{ flex: 1, minHeight: 100 }}>
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={chartData} {...chartProps}>
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke={CHART_COLORS.grid}
                />
                <XAxis
                  dataKey="model"
                  style={axisStyle}
                  tick={tickStyle}
                  tickFormatter={(v) =>
                    v.length > 12 ? v.slice(0, 12) + "…" : v
                  }
                />
                <YAxis style={axisStyle} tick={tickStyle} />
                <Tooltip
                  cursor={{ fill: "transparent" }}
                  contentStyle={{
                    backgroundColor: tokens.colorNeutralBackground1,
                    border: `1px solid ${tokens.colorNeutralStroke1}`,
                  }}
                />
                <Bar
                  dataKey="translation_cost"
                  stackId="a"
                  fill={CHART_COLORS.translation}
                  activeBar={{ fill: CHART_COLORS.translationHover }}
                  name={t("Translation")}
                />
                <Bar
                  dataKey="rewrite_cost"
                  stackId="a"
                  fill={CHART_COLORS.rewrite}
                  activeBar={{ fill: CHART_COLORS.rewriteHover }}
                  name={t("Rewrite")}
                />
                <Bar
                  dataKey="transform_cost"
                  stackId="a"
                  fill={CHART_COLORS.transform}
                  activeBar={{ fill: CHART_COLORS.transformHover }}
                  name={t("Transform")}
                />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          ) : null;
        })()}
        <div
          className={styles.paginationRow}
          style={{ marginBottom: "8px", marginInlineStart: "70%" }}
        >
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
        <div className={styles.byModelTableWrapper}>
          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead className={styles.thead}>
                <tr>
                  <th className={styles.th}>{t("Model")}</th>
                  <th className={styles.th}>{t("Translation calls")}</th>
                  <th className={styles.th}>{t("Rewrite calls")}</th>
                  <th className={styles.th}>{t("Transform calls")}</th>
                  <th className={styles.th}>{t("Translation cost")}</th>
                  <th className={styles.th}>{t("Rewrite cost")}</th>
                  <th className={styles.th}>{t("Transform cost")}</th>
                  <th className={styles.th}>{t("Avg TPS")}</th>
                </tr>
              </thead>
            <tbody>
              {byModel.filter((r) => r.model !== "Total").length === 0
                ? emptyRow(9)
                : byModel
                    .filter((r) => r.model !== "Total")
                    .map((row, i) => (
                      <tr key={i} className={styles.tbodyTr}>
                        <td className={styles.td}>
                          <span className={styles.modelCell}>
                            <span title={row.model}>{row.model}</span>
                            {(Number(row.translation_cost) || 0) +
                              (Number(row.rewrite_cost) || 0) +
                              (Number(row.transform_cost) || 0) ===
                            0 && (
                              <Badge
                                appearance="tint"
                                size="small"
                                color="success"
                                icon={<WandSparkles size={12} />}
                              >
                                {t("Free")}
                              </Badge>
                            )}
                            <Trash2
                              size={14}
                              className={styles.modelTrashIcon}
                              title={t("Exclude all data for this model")}
                              onClick={(e) => {
                                e.stopPropagation();
                                setModelToDelete(row.model);
                              }}
                            />
                          </span>
                        </td>
                        <td className={`${styles.td} ${styles.tdValue}`}>
                          {formatCount(row.translation_calls, locale)}
                        </td>
                        <td className={`${styles.td} ${styles.tdValue}`}>
                          {formatCount(row.rewrite_calls, locale)}
                        </td>
                        <td className={`${styles.td} ${styles.tdValue}`}>
                          {formatCount(row.transform_calls, locale)}
                        </td>
                        <td className={`${styles.td} ${styles.tdValue}`}>
                          {formatCost(row.translation_cost, costFractionStyle, locale)}
                        </td>
                        <td className={`${styles.td} ${styles.tdValue}`}>
                          {formatCost(row.rewrite_cost, costFractionStyle, locale)}
                        </td>
                        <td className={`${styles.td} ${styles.tdValue}`}>
                          {formatCost(row.transform_cost, costFractionStyle, locale)}
                        </td>
                        <td className={`${styles.td} ${styles.tdValue}`}>
                          {formatAvgTps(row.avg_tps, locale)}
                        </td>
                      </tr>
                    ))}
              {byModel.some((r) => r.model === "Total") &&
                (() => {
                  const total = byModel.find((r) => r.model === "Total");
                  const tc = total?.translation_calls ?? 0;
                  const rc = total?.rewrite_calls ?? 0;
                  return (
                    <tr className={styles.totalRow} key="total">
                      <td className={styles.td}>
                        <strong>{t("Total")}</strong>
                      </td>
                      <td className={`${styles.td} ${styles.tdValue}`}>
                        {formatCount(tc, locale)}
                      </td>
                      <td className={`${styles.td} ${styles.tdValue}`}>
                        {formatCount(rc, locale)}
                      </td>
                      <td className={`${styles.td} ${styles.tdValue}`}>
                        {formatCount(total?.transform_calls ?? 0, locale)}
                      </td>
                      <td className={`${styles.td} ${styles.tdValue}`}>
                        {formatCost(total?.translation_cost, costFractionStyle, locale)}
                      </td>
                      <td className={`${styles.td} ${styles.tdValue}`}>
                        {formatCost(total?.rewrite_cost, costFractionStyle, locale)}
                      </td>
                      <td className={`${styles.td} ${styles.tdValue}`}>
                        {formatCost(total?.transform_cost, costFractionStyle, locale)}
                      </td>
                      <td className={`${styles.td} ${styles.tdValue}`}>
                        {formatAvgTps(total?.avg_tps, locale)}
                      </td>
                    </tr>
                  );
                })()}
            </tbody>
          </table>
        </div>
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
  emptyRow: PropTypes.func.isRequired,
  setModelToDelete: PropTypes.func.isRequired,
};
