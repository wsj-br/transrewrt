import React from "react";
import { useTranslation } from "react-i18next";
import { Text, tokens } from "@fluentui/react-components";
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LabelList,
} from "recharts";
import { CHART_COLORS, chartProps } from "./DashboardPage-constants";
import { formatInteger, formatDecimal } from "../utils/misc/formatUtils";
import {
  formatCost,
  formatCount,
  formatAvgTps,
  DASH,
} from "../utils/misc/costUtils";

export default function DashboardTabSummary({
  loading,
  byFunction,
  byDay,
  byModel,
  settings,
  costFractionStyle,
  styles,
  getUsageTypeLabel,
}) {
  const { t, i18n } = useTranslation();
  const locale = i18n.language || "en-GB";
  const axisStyle = { stroke: CHART_COLORS.grid, fontSize: 12 };
  const tickStyle = { fill: tokens.colorNeutralForeground3 };

  const totalCalls = byFunction.find((r) => r.function === "Total")?.calls ?? 0;
  const totalCostFromSummary =
    byFunction.find((r) => r.function === "Total")?.cost ?? 0;
  const translateRow = byFunction.find((r) => r.function === "translate");
  const rewriteRow = byFunction.find((r) => r.function === "rewrite");
  const transformRow = byFunction.find((r) => r.function === "transform");
  const totalAvgTps = byModel.find((r) => r.model === "Total")?.avg_tps ?? null;
  const modelCount = byModel.filter((r) => r.model !== "Total").length;
  const avgCostPerCall =
    totalCalls > 0 ? totalCostFromSummary / totalCalls : null;

  if (loading) {
    return <p>{t("Loading…")}</p>;
  }

  return (
    <div
      role="tabpanel"
      aria-label={t("Summary")}
      className={styles.summaryTabPanel}
    >
      <div className={styles.summaryDashboard}>
        <div className={styles.summaryKpiCell}>
          <Text as="h4" size={400} className={styles.summaryKpiTitleSpacer}>
            {t("Cost over time")}
          </Text>
          <div className={styles.summaryKpiGrid}>
            <div className={styles.summaryKpiCard}>
              <div className={styles.summaryKpiLabel}>{t("Total Cost")}</div>
              <div className={styles.summaryKpiValue}>
                {formatCost(settings?.total_cost ?? 0, costFractionStyle, locale)}
              </div>
            </div>
            <div className={styles.summaryKpiCard}>
              <div className={styles.summaryKpiLabel}>{t("Avg cost per call")}</div>
              <div className={styles.summaryKpiValue}>
                {avgCostPerCall != null
                  ? formatCost(avgCostPerCall, costFractionStyle, locale)
                  : DASH}
              </div>
            </div>
            <div className={styles.summaryKpiCard}>
              <div className={styles.summaryKpiLabel}>{t("Translation")}</div>
              <div className={styles.summaryKpiValue}>
                {formatCount(translateRow?.calls, locale)} /{" "}
                {formatCost(translateRow?.cost, costFractionStyle, locale)}
              </div>
            </div>
            <div className={styles.summaryKpiCard}>
              <div className={styles.summaryKpiLabel}>{t("Rewrite")}</div>
              <div className={styles.summaryKpiValue}>
                {formatCount(rewriteRow?.calls, locale)} /{" "}
                {formatCost(rewriteRow?.cost, costFractionStyle, locale)}
              </div>
            </div>
            <div className={styles.summaryKpiCard}>
              <div className={styles.summaryKpiLabel}>{t("Transform")}</div>
              <div className={styles.summaryKpiValue}>
                {formatCount(transformRow?.calls, locale)} /{" "}
                {formatCost(transformRow?.cost, costFractionStyle, locale)}
              </div>
            </div>
            <div className={styles.summaryKpiCard}>
              <div className={styles.summaryKpiLabel}>{t("Models used")}</div>
              <div className={styles.summaryKpiValue}>
                {formatCount(modelCount, locale)}
              </div>
            </div>
            <div className={styles.summaryKpiCard}>
              <div className={styles.summaryKpiLabel}>{t("Avg TPS")}</div>
              <div className={styles.summaryKpiValue}>
                {formatAvgTps(totalAvgTps, locale)}
              </div>
            </div>
          </div>
        </div>

        <div className={styles.summaryChartCellUsageSplit}>
          <Text as="h4" size={400} className={styles.summaryChartTitle}>
            {t("Usage split")}
          </Text>
          <div
            className={`${styles.summaryChartContainer} ${styles.summaryChartContainerUsagePie}`}
            style={{ overflow: "visible" }}
          >
            {byFunction.filter((r) => r.function !== "Total").length > 0 ? (
              (() => {
                const usageData = byFunction.filter(
                  (r) => r.function !== "Total"
                );
                const totalCallsPie = usageData.reduce(
                  (s, r) => s + (Number(r.calls) || 0),
                  0
                );
                const RADIAN = Math.PI / 180;
                return (
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart margin={{ top: 4, right: 8, bottom: 4, left: 8 }}>
                      <Pie
                        data={usageData}
                        dataKey="calls"
                        nameKey="function"
                        cx="50%"
                        cy="50%"
                        outerRadius="85%"
                        isAnimationActive={false}
                        label={({
                          cx,
                          cy,
                          midAngle,
                          outerRadius: or,
                          function: fn,
                          calls,
                        }) => {
                          const radius = or + 14;
                          const x =
                            cx + radius * Math.cos(-midAngle * RADIAN);
                          const y =
                            cy + radius * Math.sin(-midAngle * RADIAN);
                          const pct =
                            totalCallsPie > 0
                              ? formatDecimal(
                                  (Number(calls) / totalCallsPie) * 100,
                                  locale,
                                  { minimumFractionDigits: 1, maximumFractionDigits: 1 }
                                )
                              : "0";
                          const displayName = getUsageTypeLabel(fn);
                          return (
                            <text
                              x={x}
                              y={y}
                              textAnchor={x > cx ? "start" : "end"}
                              dominantBaseline="central"
                              fill={tokens.colorNeutralForeground2}
                              style={{
                                fontSize: "clamp(9px, 1.2vh, 11px)",
                              }}
                            >
                              <tspan x={x} dy="-0.65em">
                                {displayName}
                              </tspan>
                              <tspan
                                x={x}
                                dy="1.3em"
                                fill={tokens.colorNeutralForeground3}
                              >
                                {formatInteger(calls, locale)} ({pct}%)
                              </tspan>
                            </text>
                          );
                        }}
                        labelLine={{
                          stroke: "rgba(255,255,255,0.25)",
                          strokeWidth: 1,
                        }}
                      >
                        {usageData.map((r, i) => (
                          <Cell
                            key={i}
                            fill={
                              r.function === "translate"
                                ? CHART_COLORS.translation
                                : r.function === "rewrite"
                                ? CHART_COLORS.rewrite
                                : "#a78bfa"
                            }
                          />
                        ))}
                      </Pie>
                      <Tooltip
                        contentStyle={{
                          backgroundColor: tokens.colorNeutralBackground1,
                          border: `1px solid ${tokens.colorNeutralStroke1}`,
                          color:
                            tokens.colorNeutralForeground1 ?? "#e5e7eb",
                        }}
                        itemStyle={{
                          color: tokens.colorNeutralForeground1 ?? "#e5e7eb",
                        }}
                        labelStyle={{
                          color: tokens.colorNeutralForeground1 ?? "#e5e7eb",
                        }}
                        formatter={(value, name) => {
                          const pct =
                            totalCallsPie > 0
                              ? formatDecimal(
                                  (Number(value) / totalCallsPie) * 100,
                                  locale,
                                  { minimumFractionDigits: 1, maximumFractionDigits: 1 }
                                )
                              : "0";
                          return [
                            `${formatInteger(value, locale)} (${pct}%)`,
                            getUsageTypeLabel(name),
                          ];
                        }}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                );
              })()
            ) : (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "100%",
                  color: tokens.colorNeutralForeground3,
                }}
              >
                {t("No data")}
              </div>
            )}
          </div>
        </div>

        <div className={styles.summaryChartCell}>
          <Text as="h4" size={400} className={styles.summaryChartTitle}>
            {t("Cost over time")}
          </Text>
          <div className={styles.summaryChartContainer}>
            {byDay.length > 0 ? (
              (() => {
                const chronological = [...byDay].reverse();
                let cumTranslation = 0;
                let cumRewrite = 0;
                let cumTransform = 0;
                const cumulativeData = chronological.map((row) => {
                  cumTranslation += Number(row.translation_cost) || 0;
                  cumRewrite += Number(row.rewrite_cost) || 0;
                  cumTransform += Number(row.transform_cost) || 0;
                  return {
                    day: row.day,
                    translation_cost: cumTranslation,
                    rewrite_cost: cumRewrite,
                    transform_cost: cumTransform,
                  };
                });
                return (
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={cumulativeData} {...chartProps}>
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
                        labelStyle={{
                          color: tokens.colorNeutralForeground1,
                        }}
                        formatter={(value, name, item) => {
                          const dataKey = item?.dataKey ?? name;
                          return [
                            formatCost(value, costFractionStyle, locale),
                            dataKey === "translation_cost"
                              ? t("Translation cost (cumulative)")
                              : dataKey === "rewrite_cost"
                              ? t("Rewrite cost (cumulative)")
                              : t("Transform cost (cumulative)"),
                          ];
                        }}
                      />
                      <Area
                        type="monotone"
                        dataKey="translation_cost"
                        stackId="1"
                        stroke={CHART_COLORS.translation}
                        fill={CHART_COLORS.translation}
                        fillOpacity={0.6}
                        name={t("Translation cost (cumulative)")}
                      />
                      <Area
                        type="monotone"
                        dataKey="rewrite_cost"
                        stackId="1"
                        stroke={CHART_COLORS.rewrite}
                        fill={CHART_COLORS.rewrite}
                        fillOpacity={0.6}
                        name={t("Rewrite cost (cumulative)")}
                      />
                      <Area
                        type="monotone"
                        dataKey="transform_cost"
                        stackId="1"
                        stroke="#a78bfa"
                        fill="#a78bfa"
                        fillOpacity={0.6}
                        name={t("Transform cost (cumulative)")}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                );
              })()
            ) : (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "100%",
                  color: tokens.colorNeutralForeground3,
                }}
              >
                {t("No data")}
              </div>
            )}
          </div>
        </div>

        <div className={styles.summaryChartCell}>
          <Text as="h4" size={400} className={styles.summaryChartTitle}>
            {t("Cost by model")}
          </Text>
          <div className={styles.summaryChartContainer}>
            {byModel.filter((r) => r.model !== "Total").length > 0 ? (
              (() => {
                const costByModelData = byModel
                  .filter((r) => r.model !== "Total")
                  .map((r) => ({
                    ...r,
                    totalCost:
                      (Number(r.translation_cost) || 0) +
                      (Number(r.rewrite_cost) || 0),
                  }));
                const totalCostSum = costByModelData.reduce(
                  (s, r) => s + (r.totalCost || 0),
                  0
                );
                return (
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={costByModelData}
                      layout="vertical"
                      margin={{ left: 220, right: 16 }}
                      {...chartProps}
                    >
                      <CartesianGrid
                        strokeDasharray="3 3"
                        stroke={CHART_COLORS.grid}
                      />
                      <XAxis type="number" style={axisStyle} tick={tickStyle} />
                      <YAxis
                        type="category"
                        dataKey="model"
                        width={215}
                        style={axisStyle}
                        tick={tickStyle}
                        tickFormatter={(v) => v ?? ""}
                      />
                      <Tooltip
                        cursor={{ fill: "transparent" }}
                        contentStyle={{
                          backgroundColor: tokens.colorNeutralBackground1,
                          border: `1px solid ${tokens.colorNeutralStroke1}`,
                        }}
                        formatter={(value) => {
                          const pct =
                            totalCostSum > 0
                              ? formatDecimal(
                                  (value / totalCostSum) * 100,
                                  locale,
                                  { minimumFractionDigits: 1, maximumFractionDigits: 1 }
                                )
                              : "0";
                          return [
                            <>{formatCost(value, costFractionStyle, locale)} ({pct}%)</>,
                            t("Total cost"),
                          ];
                        }}
                      />
                      <Bar
                        dataKey="totalCost"
                        fill={CHART_COLORS.barFill}
                        activeBar={{ fill: CHART_COLORS.barFillHover }}
                        name={t("Total cost")}
                      >
                        <LabelList
                          dataKey="totalCost"
                          position="insideLeft"
                          formatter={(value) => {
                            const pct =
                              totalCostSum > 0
                                ? formatDecimal(
                                    (value / totalCostSum) * 100,
                                    locale,
                                    { minimumFractionDigits: 1, maximumFractionDigits: 1 }
                                  )
                                : "0";
                            const costStr =
                              value != null && !Number.isNaN(Number(value))
                                ? `$${formatDecimal(value, locale, { minimumFractionDigits: 4, maximumFractionDigits: 4 })}`
                                : DASH;
                            return `${costStr} (${pct}%)`;
                          }}
                          style={{
                            fill: CHART_COLORS.barLabel,
                            fontSize: 11,
                          }}
                          offset={4}
                        />
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                );
              })()
            ) : (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "100%",
                  color: tokens.colorNeutralForeground3,
                }}
              >
                {t("No data")}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
