import React from "react";
import { useTranslation } from "react-i18next";
import { Button, Label, Dropdown, Option, Text, tokens } from "@fluentui/react-components";
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

const PAGE_SIZES = [10, 20, 50, 100];

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
  const axisStyle = { stroke: CHART_COLORS.grid, fontSize: 12 };
  const tickStyle = { fill: tokens.colorNeutralForeground3 };

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
        </div>
        {byDayPaginatedLoading ? (
          <p>{t("Loading…")}</p>
        ) : (
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
        )}
      </div>
    </div>
  );
}
