import React from "react";
import { useTranslation } from "react-i18next";
import { Text, tokens } from "@fluentui/react-components";
import { Trash2 } from "lucide-react";
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
  formatAvgCost,
  formatAvgTps,
} from "../utils/misc/costUtils";

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
  const axisStyle = { stroke: CHART_COLORS.grid, fontSize: 12 };
  const tickStyle = { fill: tokens.colorNeutralForeground3 };

  if (loading) {
    return <p>{t("Loading…")}</p>;
  }

  return (
    <div role="tabpanel" aria-label={t("By Model")}>
      <div className={styles.tabTableContent}>
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
                <th className={styles.th}>{t("Avg translation")}</th>
                <th className={styles.th}>{t("Avg rewrite")}</th>
                <th className={styles.th}>{t("Avg TPS")}</th>
              </tr>
            </thead>
            <tbody>
              {byModel.filter((r) => r.model !== "Total").length === 0
                ? emptyRow(11)
                : byModel
                    .filter((r) => r.model !== "Total")
                    .map((row, i) => (
                      <tr key={i} className={styles.tbodyTr}>
                        <td className={styles.td}>
                          <span className={styles.modelCell}>
                            <span>{row.model}</span>
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
                        {formatAvgCost(
                          Number(total?.translation_cost || 0),
                          tc,
                          costFractionStyle,
                          locale
                        )}
                      </td>
                      <td className={`${styles.td} ${styles.tdValue}`}>
                        {formatAvgCost(
                          Number(total?.rewrite_cost || 0),
                          rc,
                          costFractionStyle,
                          locale
                        )}
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
        {byModel.filter((r) => r.model !== "Total").length > 0 && (
          <div className={styles.chartContainer}>
            <Text as="h4" size={400} style={{ marginBottom: "8px" }}>
              {t("Cost by model (stacked)")}
            </Text>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={byModel.filter((r) => r.model !== "Total")}
                {...chartProps}
              >
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
        )}
      </div>
    </div>
  );
}
