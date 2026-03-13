import { useState, useCallback, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { Button, Label, Dropdown, Option, Text, tokens } from "@fluentui/react-components";
import { Download } from "lucide-react";
import * as XLSX from "xlsx-js-style";
import PropTypes from "prop-types";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { CHART_COLORS, chartProps } from "./DashboardPage-constants";
import { interpolateTemplate } from "../utils/misc/formatUtils";
import {
  formatCost,
  formatCount,
  formatAvgCost,
} from "../utils/misc/costUtils";
import {
  rowsToCsvWithLabels,
  triggerDownload,
} from "../utils/misc/exportUtils";

const PAGE_SIZES = [10, 20, 50, 100];
const EXPORT_FILENAME_BY_DAY = "transrewrt-byday";

function buildExportRowsByDay(byDay) {
  return (byDay || []).map((row) => {
    const tc = row.translation_calls ?? 0;
    const rc = row.rewrite_calls ?? 0;
    const translationCost = Number(row.translation_cost) || 0;
    const rewriteCost = Number(row.rewrite_cost) || 0;
    return {
      ...row,
      avg_translation: tc > 0 ? translationCost / tc : null,
      avg_rewrite: rc > 0 ? rewriteCost / rc : null,
    };
  });
}

export default function DashboardTabByDay({
  loading,
  byDay,
  byDayPage,
  setByDayPage,
  byDayPageSize,
  setByDayPageSize,
  byDayPaginatedRows,
  byDayPaginatedTotal,
  byDayPaginatedLoading,
  costFractionStyle,
  styles,
  emptyRow,
}) {
  const { t, i18n } = useTranslation();
  const locale = i18n.language || "en-GB";
  const [exportLoading, setExportLoading] = useState(false);
  const axisStyle = { stroke: CHART_COLORS.grid, fontSize: 12 };
  const tickStyle = { fill: tokens.colorNeutralForeground3 };

  const exportColumnsByDay = useMemo(
    () => [
      { key: "day", labelKey: t("Day") },
      { key: "translation_calls", labelKey: t("Translation calls") },
      { key: "rewrite_calls", labelKey: t("Rewrite calls") },
      { key: "transform_calls", labelKey: t("Transform calls") },
      { key: "translation_cost", labelKey: t("Translation cost") },
      { key: "rewrite_cost", labelKey: t("Rewrite cost") },
      { key: "transform_cost", labelKey: t("Transform cost") },
      { key: "avg_translation", labelKey: t("Avg translation") },
      { key: "avg_rewrite", labelKey: t("Avg rewrite") },
    ],
    [t]
  );

  const handleExport = useCallback(
    (format) => {
      const rows = buildExportRowsByDay(byDay);
      setExportLoading(true);
      try {
        if (format === "json") {
          const blob = new Blob([JSON.stringify(rows, null, 2)], {
            type: "application/json",
          });
          triggerDownload(blob, `${EXPORT_FILENAME_BY_DAY}.json`);
        } else if (format === "csv") {
          const csv = rowsToCsvWithLabels(rows, exportColumnsByDay);
          const blob = new Blob([csv], { type: "text/csv" });
          triggerDownload(blob, `${EXPORT_FILENAME_BY_DAY}.csv`);
        } else if (format === "xlsx") {
          const costKeys = [
            "translation_cost",
            "rewrite_cost",
            "transform_cost",
            "avg_translation",
            "avg_rewrite",
          ];
          const costColIndices = new Set(
            costKeys.map((k) =>
              exportColumnsByDay.findIndex((c) => c.key === k)
            )
          );
          const headerRow = exportColumnsByDay.map((c) => c.labelKey);
          const dataRows = rows.map((row) =>
            exportColumnsByDay.map((c) => row[c.key])
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
          for (let C = range.s.c; C <= range.e.c; C++) {
            const addr = XLSX.utils.encode_cell({ r: 0, c: C });
            if (ws[addr]) ws[addr].s = headerStyle;
          }
          for (let R = range.s.r + 1; R <= range.e.r; R++) {
            for (let C = range.s.c; C <= range.e.c; C++) {
              const addr = XLSX.utils.encode_cell({ r: R, c: C });
              const style = costColIndices.has(C) ? cellStyleCost : cellStyleTop;
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
          XLSX.utils.book_append_sheet(wb, ws, "By Day");
          const arr = XLSX.write(wb, { bookType: "xlsx", type: "array" });
          const blob = new Blob([arr], {
            type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
          });
          triggerDownload(blob, `${EXPORT_FILENAME_BY_DAY}.xlsx`);
        }
      } finally {
        setExportLoading(false);
      }
    },
    [byDay, exportColumnsByDay]
  );

  if (loading) {
    return <p>{t("Loading…")}</p>;
  }

  return (
    <div role="tabpanel" aria-label={t("By Day")}>
      <div className={styles.tabTableContent}>
        {byDay.length > 0 && (
          <div className={styles.chartContainer}>
            <Text as="h4" size={400} style={{ marginBottom: "8px" }}>
              {t("Daily call volume")}
            </Text>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={[...byDay].reverse()} {...chartProps}>
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke={CHART_COLORS.grid}
                />
                <XAxis dataKey="day" style={axisStyle} tick={tickStyle} />
                <YAxis style={axisStyle} tick={tickStyle} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: tokens.colorNeutralBackground1,
                    border: `1px solid ${tokens.colorNeutralStroke1}`,
                  }}
                />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="translation_calls"
                  stroke={CHART_COLORS.translation}
                  name={t("Translation calls")}
                />
                <Line
                  type="monotone"
                  dataKey="rewrite_calls"
                  stroke={CHART_COLORS.rewrite}
                  name={t("Rewrite calls")}
                />
                <Line
                  type="monotone"
                  dataKey="transform_calls"
                  stroke="#a78bfa"
                  name={t("Transform calls")}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        )}
        <Text as="h4" size={400} style={{ marginTop: "16px", marginBottom: "4px" }}>
          {t("By day (paginated)")}
        </Text>
        <div className={styles.paginationRow}>
          <Label>{t("Rows per page")}</Label>
          <Dropdown
            value={String(byDayPageSize)}
            selectedOptions={[String(byDayPageSize)]}
            onOptionSelect={(_, data) => {
              const v = Number(data.optionValue);
              if (PAGE_SIZES.includes(v)) {
                setByDayPageSize(v);
                setByDayPage(1);
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
            {interpolateTemplate(
              t("{{count}} day(s) total · Page {{page}} of {{total}}"),
              {
                count: byDayPaginatedTotal,
                page: byDayPage,
                total: Math.max(
                  1,
                  Math.ceil(byDayPaginatedTotal / byDayPageSize)
                ),
              }
            )}
          </span>
          <Button
            size="small"
            appearance="secondary"
            disabled={byDayPage <= 1}
            onClick={() => setByDayPage((p) => Math.max(1, p - 1))}
          >
            {t("Prev")}
          </Button>
          <Button
            size="small"
            appearance="secondary"
            disabled={
              byDayPage >= Math.ceil(byDayPaginatedTotal / byDayPageSize)
            }
            onClick={() =>
              setByDayPage((p) =>
                Math.min(
                  Math.ceil(byDayPaginatedTotal / byDayPageSize),
                  p + 1
                )
              )
            }
          >
            {t("Next")}
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
        {byDayPaginatedLoading ? (
          <p>{t("Loading…")}</p>
        ) : (
          <div className={styles.byDayTableWrapper}>
            <div className={styles.tableWrap}>
              <table className={styles.table}>
                <thead className={styles.thead}>
                  <tr>
                    <th className={styles.th}>{t("Day")}</th>
                    <th className={styles.th}>{t("Translation calls")}</th>
                    <th className={styles.th}>{t("Rewrite calls")}</th>
                    <th className={styles.th}>{t("Transform calls")}</th>
                    <th className={styles.th}>{t("Translation cost")}</th>
                    <th className={styles.th}>{t("Rewrite cost")}</th>
                    <th className={styles.th}>{t("Transform cost")}</th>
                    <th className={styles.th}>{t("Avg translation")}</th>
                    <th className={styles.th}>{t("Avg rewrite")}</th>
                  </tr>
              </thead>
              <tbody>
                {byDayPaginatedRows.length === 0
                  ? emptyRow(9)
                  : byDayPaginatedRows.map((row, i) => (
                      <tr key={i} className={styles.tbodyTr}>
                        <td className={styles.td}>{row.day}</td>
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
                          {formatCost(
                            row.translation_cost,
                            costFractionStyle,
                            locale
                          )}
                        </td>
                        <td className={`${styles.td} ${styles.tdValue}`}>
                          {formatCost(row.rewrite_cost, costFractionStyle, locale)}
                        </td>
                        <td className={`${styles.td} ${styles.tdValue}`}>
                          {formatCost(row.transform_cost, costFractionStyle, locale)}
                        </td>
                        <td className={`${styles.td} ${styles.tdValue}`}>
                          {formatAvgCost(
                            Number(row.translation_cost || 0),
                            row.translation_calls ?? 0,
                            costFractionStyle,
                            locale
                          )}
                        </td>
                        <td className={`${styles.td} ${styles.tdValue}`}>
                          {formatAvgCost(
                            Number(row.rewrite_cost || 0),
                            row.rewrite_calls ?? 0,
                            costFractionStyle,
                            locale
                          )}
                        </td>
                      </tr>
                    ))}
              </tbody>
            </table>
          </div>
          </div>
        )}
      </div>
    </div>
  );
}

DashboardTabByDay.propTypes = {
  loading: PropTypes.bool.isRequired,
  byDay: PropTypes.arrayOf(PropTypes.object).isRequired,
  byDayPage: PropTypes.number.isRequired,
  setByDayPage: PropTypes.func.isRequired,
  byDayPageSize: PropTypes.number.isRequired,
  setByDayPageSize: PropTypes.func.isRequired,
  byDayPaginatedRows: PropTypes.arrayOf(PropTypes.object).isRequired,
  byDayPaginatedTotal: PropTypes.number.isRequired,
  byDayPaginatedLoading: PropTypes.bool.isRequired,
  costFractionStyle: PropTypes.string.isRequired,
  styles: PropTypes.object.isRequired,
  emptyRow: PropTypes.func.isRequired,
};
