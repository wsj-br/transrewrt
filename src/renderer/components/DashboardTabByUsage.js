import { useTranslation } from "react-i18next";
import { Text, tokens } from "@fluentui/react-components";
import PropTypes from "prop-types";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LabelList,
} from "recharts";
import { CHART_COLORS, chartProps } from "./DashboardPage-constants";
import { formatInteger, formatDecimal } from "../utils/misc/formatUtils";

export default function DashboardTabByUsage({
  loading,
  byTargetLang,
  byRewriteStyle,
  byTransformPrompt,
  styles,
}) {
  const { t, i18n } = useTranslation();
  const locale = i18n.language || "en-GB";
  const byUsageAxisStyle = {
    stroke: CHART_COLORS.grid,
    fontSize: "clamp(9px, 1.4vh, 12px)",
  };
  const byUsageTickStyle = {
    fill: tokens.colorNeutralForeground3,
    fontSize: "clamp(9px, 1.4vh, 12px)",
  };
  const byUsageLabelFontSize = "clamp(9px, 1.2vh, 11px)";

  if (loading) {
    return <p>{t("Loading…")}</p>;
  }

  return (
    <div
      role="tabpanel"
      aria-label={t("By Usage")}
      className={styles.summaryTabPanel}
    >
      <div className={styles.byUsageDashboard}>
        <div className={styles.byUsageChartBlock}>
          <Text as="h4" size={400} className={styles.byUsageTitle}>
            {t("Translation target language")}
          </Text>
          <div
            className={`${styles.summaryChartContainer} ${styles.byUsageChartContainer}`}
          >
            {byTargetLang.length > 0 ? (
              (() => {
                const totalTargetCalls = byTargetLang.reduce(
                  (s, r) => s + (Number(r.calls) || 0),
                  0
                );
                return (
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={byTargetLang.map((r) => ({
                        ...r,
                        label: r.target_lang,
                      }))}
                      layout="vertical"
                      margin={{ left: 140, right: 16, top: 4, bottom: 4 }}
                      {...chartProps}
                    >
                      <CartesianGrid
                        strokeDasharray="3 3"
                        stroke={CHART_COLORS.grid}
                      />
                      <XAxis
                        type="number"
                        style={byUsageAxisStyle}
                        tick={byUsageTickStyle}
                        dataKey="calls"
                        tickFormatter={(v) =>
                          Number.isFinite(Number(v)) ? Math.round(Number(v)) : v
                        }
                      />
                      <YAxis
                        type="category"
                        dataKey="target_lang"
                        width={135}
                        style={byUsageAxisStyle}
                        tick={byUsageTickStyle}
                      />
                      <Tooltip
                        cursor={{ fill: "transparent" }}
                        contentStyle={{
                          backgroundColor: tokens.colorNeutralBackground1,
                          border: `1px solid ${tokens.colorNeutralStroke1}`,
                          color:
                            tokens.colorNeutralForeground1 ?? "#e5e7eb",
                          fontSize: byUsageLabelFontSize,
                        }}
                        formatter={(value) => {
                          const pct =
                            totalTargetCalls > 0
                              ? formatDecimal(
                                  (Number(value) / totalTargetCalls) * 100,
                                  locale,
                                  { minimumFractionDigits: 1, maximumFractionDigits: 1 }
                                )
                              : "0";
                          return [
                            `${formatInteger(value, locale)} (${pct}%)`,
                            t("Calls"),
                          ];
                        }}
                      />
                      <Bar
                        dataKey="calls"
                        fill={CHART_COLORS.barFill}
                        activeBar={{ fill: CHART_COLORS.barFillHover }}
                        name={t("Calls")}
                      >
                        <LabelList
                          dataKey="calls"
                          position="insideLeft"
                          formatter={(value) => {
                            const pct =
                              totalTargetCalls > 0
                                ? formatDecimal(
                                    (Number(value) / totalTargetCalls) * 100,
                                    locale,
                                    { minimumFractionDigits: 1, maximumFractionDigits: 1 }
                                  )
                                : "0";
                            return `${formatInteger(value, locale)} (${pct}%)`;
                          }}
                          style={{
                            fill: CHART_COLORS.barLabel,
                            fontSize: byUsageLabelFontSize,
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

        <div className={styles.byUsageChartBlock}>
          <Text as="h4" size={400} className={styles.byUsageTitle}>
            {t("Rewrite style")}
          </Text>
          <div
            className={`${styles.summaryChartContainer} ${styles.byUsageChartContainer}`}
          >
            {byRewriteStyle.length > 0 ? (
              (() => {
                const totalRewriteCalls = byRewriteStyle.reduce(
                  (s, r) => s + (Number(r.calls) || 0),
                  0
                );
                return (
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={byRewriteStyle.map((r) => ({
                        ...r,
                        label: r.rewrite_style,
                      }))}
                      layout="vertical"
                      margin={{ left: 140, right: 16, top: 4, bottom: 4 }}
                      {...chartProps}
                    >
                      <CartesianGrid
                        strokeDasharray="3 3"
                        stroke={CHART_COLORS.grid}
                      />
                      <XAxis
                        type="number"
                        style={byUsageAxisStyle}
                        tick={byUsageTickStyle}
                        dataKey="calls"
                        tickFormatter={(v) =>
                          Number.isFinite(Number(v)) ? Math.round(Number(v)) : v
                        }
                      />
                      <YAxis
                        type="category"
                        dataKey="rewrite_style"
                        width={135}
                        style={byUsageAxisStyle}
                        tick={byUsageTickStyle}
                        tickFormatter={(v) => t(v ?? "")}
                      />
                      <Tooltip
                        cursor={{ fill: "transparent" }}
                        contentStyle={{
                          backgroundColor: tokens.colorNeutralBackground1,
                          border: `1px solid ${tokens.colorNeutralStroke1}`,
                          color:
                            tokens.colorNeutralForeground1 ?? "#e5e7eb",
                          fontSize: byUsageLabelFontSize,
                        }}
                        labelFormatter={(label) => t(label ?? "")}
                        formatter={(value) => {
                          const pct =
                            totalRewriteCalls > 0
                              ? formatDecimal(
                                  (Number(value) / totalRewriteCalls) * 100,
                                  locale,
                                  { minimumFractionDigits: 1, maximumFractionDigits: 1 }
                                )
                              : "0";
                          return [
                            `${formatInteger(value, locale)} (${pct}%)`,
                            t("Calls"),
                          ];
                        }}
                      />
                      <Bar
                        dataKey="calls"
                        fill={CHART_COLORS.barFill}
                        activeBar={{ fill: CHART_COLORS.barFillHover }}
                        name={t("Calls")}
                      >
                        <LabelList
                          dataKey="calls"
                          position="insideLeft"
                          formatter={(value) => {
                            const pct =
                              totalRewriteCalls > 0
                                ? formatDecimal(
                                    (Number(value) / totalRewriteCalls) * 100,
                                    locale,
                                    { minimumFractionDigits: 1, maximumFractionDigits: 1 }
                                  )
                                : "0";
                            return `${formatInteger(value, locale)} (${pct}%)`;
                          }}
                          style={{
                            fill: CHART_COLORS.barLabel,
                            fontSize: byUsageLabelFontSize,
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

        <div className={styles.byUsageChartBlock}>
          <Text as="h4" size={400} className={styles.byUsageTitle}>
            {t("Transform prompt")}
          </Text>
          <div
            className={`${styles.summaryChartContainer} ${styles.byUsageChartContainer}`}
          >
            {byTransformPrompt.length > 0 ? (
              (() => {
                const totalTransformCalls = byTransformPrompt.reduce(
                  (s, r) => s + (Number(r.calls) || 0),
                  0
                );
                return (
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={byTransformPrompt.map((r) => ({
                        ...r,
                        label: r.transform_prompt,
                      }))}
                      layout="vertical"
                      margin={{ left: 230, right: 16, top: 4, bottom: 4 }}
                      {...chartProps}
                    >
                      <CartesianGrid
                        strokeDasharray="3 3"
                        stroke={CHART_COLORS.grid}
                      />
                      <XAxis
                        type="number"
                        style={byUsageAxisStyle}
                        tick={byUsageTickStyle}
                        dataKey="calls"
                        tickFormatter={(v) =>
                          Number.isFinite(Number(v))
                            ? Math.round(Number(v))
                            : v
                        }
                      />
                      <YAxis
                        type="category"
                        dataKey="transform_prompt"
                        width={225}
                        interval={0}
                        style={byUsageAxisStyle}
                        tick={byUsageTickStyle}
                      />
                      <Tooltip
                        cursor={{ fill: "transparent" }}
                        contentStyle={{
                          backgroundColor: tokens.colorNeutralBackground1,
                          border: `1px solid ${tokens.colorNeutralStroke1}`,
                          color:
                            tokens.colorNeutralForeground1 ?? "#e5e7eb",
                          fontSize: byUsageLabelFontSize,
                        }}
                        formatter={(value) => {
                          const pct =
                            totalTransformCalls > 0
                              ? formatDecimal(
                                  (Number(value) / totalTransformCalls) * 100,
                                  locale,
                                  { minimumFractionDigits: 1, maximumFractionDigits: 1 }
                                )
                              : "0";
                          return [
                            `${formatInteger(value, locale)} (${pct}%)`,
                            t("Calls"),
                          ];
                        }}
                      />
                      <Bar
                        dataKey="calls"
                        fill={CHART_COLORS.barFill}
                        activeBar={{ fill: CHART_COLORS.barFillHover }}
                        name={t("Calls")}
                      >
                        <LabelList
                          dataKey="calls"
                          position="insideLeft"
                          formatter={(value) => {
                            const pct =
                              totalTransformCalls > 0
                                ? formatDecimal(
                                    (Number(value) / totalTransformCalls) * 100,
                                    locale,
                                    { minimumFractionDigits: 1, maximumFractionDigits: 1 }
                                  )
                                : "0";
                            return `${formatInteger(value, locale)} (${pct}%)`;
                          }}
                          style={{
                            fill: CHART_COLORS.barLabel,
                            fontSize: byUsageLabelFontSize,
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

DashboardTabByUsage.propTypes = {
  loading: PropTypes.bool.isRequired,
  byTargetLang: PropTypes.arrayOf(PropTypes.object).isRequired,
  byRewriteStyle: PropTypes.arrayOf(PropTypes.object).isRequired,
  byTransformPrompt: PropTypes.arrayOf(PropTypes.object).isRequired,
  styles: PropTypes.object.isRequired,
};
