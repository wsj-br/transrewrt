import { useTranslation } from "react-i18next";
import { Text, tokens } from "@fluentui/react-components";
import PropTypes from "prop-types";
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
      data-testid="dashboard-tabpanel-summary"
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
            {t("Usage over time")}
          </Text>
          <div className={styles.summaryChartContainer}>
            {byDay.length > 0 ? (
              (() => {
                const chronological = [...byDay].reverse();
                let cumTranslation = 0;
                let cumRewrite = 0;
                let cumTransform = 0;
                const cumulativeData = chronological.map((row) => {
                  cumTranslation += Number(row.translation_calls) || 0;
                  cumRewrite += Number(row.rewrite_calls) || 0;
                  cumTransform += Number(row.transform_calls) || 0;
                  return {
                    day: row.day,
                    translation_calls: cumTranslation,
                    rewrite_calls: cumRewrite,
                    transform_calls: cumTransform,
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
                      <YAxis
                        style={axisStyle}
                        tick={tickStyle}
                        tickFormatter={(v) => formatInteger(v, locale)}
                      />
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
                            formatInteger(value, locale),
                            dataKey === "translation_calls"
                              ? t("Translation calls (cumulative)")
                              : dataKey === "rewrite_calls"
                              ? t("Rewrite calls (cumulative)")
                              : t("Transform calls (cumulative)"),
                          ];
                        }}
                      />
                      <Area
                        type="monotone"
                        dataKey="translation_calls"
                        stackId="1"
                        stroke={CHART_COLORS.translation}
                        fill={CHART_COLORS.translation}
                        fillOpacity={0.6}
                        name={t("Translation calls (cumulative)")}
                      />
                      <Area
                        type="monotone"
                        dataKey="rewrite_calls"
                        stackId="1"
                        stroke={CHART_COLORS.rewrite}
                        fill={CHART_COLORS.rewrite}
                        fillOpacity={0.6}
                        name={t("Rewrite calls (cumulative)")}
                      />
                      <Area
                        type="monotone"
                        dataKey="transform_calls"
                        stackId="1"
                        stroke="#a78bfa"
                        fill="#a78bfa"
                        fillOpacity={0.6}
                        name={t("Transform calls (cumulative)")}
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
            {t("Usage by model")}
          </Text>
          <div className={styles.summaryChartContainer}>
            {(() => {
              const usageByModelData = byModel
                .filter((r) => r.model !== "Total")
                .map((r) => ({
                  ...r,
                  totalCalls:
                    (Number(r.translation_calls) || 0) +
                    (Number(r.rewrite_calls) || 0) +
                    (Number(r.transform_calls) || 0),
                }));
              const usageByModelDataFiltered = usageByModelData.filter(
                (r) => (r.totalCalls || 0) > 0
              );
              if (usageByModelDataFiltered.length === 0) {
                return (
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
                );
              }
              const totalCallsSum = usageByModelDataFiltered.reduce(
                (s, r) => s + (r.totalCalls || 0),
                0
              );
              return (
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={usageByModelDataFiltered}
                      layout="vertical"
                      margin={{ left: 220, right: 16 }}
                      {...chartProps}
                    >
                      <CartesianGrid
                        strokeDasharray="3 3"
                        stroke={CHART_COLORS.grid}
                      />
                      <XAxis
                        type="number"
                        style={axisStyle}
                        tick={tickStyle}
                        tickFormatter={(v) => formatInteger(v, locale)}
                      />
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
                            totalCallsSum > 0
                              ? formatDecimal(
                                  (value / totalCallsSum) * 100,
                                  locale,
                                  { minimumFractionDigits: 1, maximumFractionDigits: 1 }
                                )
                              : "0";
                          return [
                            `${formatInteger(value, locale)} (${pct}%)`,
                            t("Total calls"),
                          ];
                        }}
                      />
                      <Bar
                        dataKey="totalCalls"
                        fill={CHART_COLORS.barFill}
                        activeBar={{ fill: CHART_COLORS.barFillHover }}
                        name={t("Total calls")}
                      >
                        <LabelList
                          dataKey="totalCalls"
                          position="insideLeft"
                          formatter={(value) => {
                            const pct =
                              totalCallsSum > 0
                                ? formatDecimal(
                                    (value / totalCallsSum) * 100,
                                    locale,
                                    { minimumFractionDigits: 1, maximumFractionDigits: 1 }
                                  )
                                : "0";
                            const n =
                              value != null && !Number.isNaN(Number(value))
                                ? formatInteger(value, locale)
                                : DASH;
                            return `${n} (${pct}%)`;
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
            })()}
          </div>
        </div>
      </div>
    </div>
  );
}

DashboardTabSummary.propTypes = {
  loading: PropTypes.bool.isRequired,
  byFunction: PropTypes.arrayOf(PropTypes.object).isRequired,
  byDay: PropTypes.arrayOf(PropTypes.object).isRequired,
  byModel: PropTypes.arrayOf(PropTypes.object).isRequired,
  settings: PropTypes.object,
  costFractionStyle: PropTypes.string.isRequired,
  styles: PropTypes.object.isRequired,
  getUsageTypeLabel: PropTypes.func.isRequired,
};
