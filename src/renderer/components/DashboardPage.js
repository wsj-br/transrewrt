import React, { useState, useEffect, useCallback } from "react";
import {
  Button,
  tokens,
  Text,
  makeStyles,
  TabList,
  Tab,
  Dropdown,
  Option,
  Label,
} from "@fluentui/react-components";
import { BarChart3, Trash2 } from "lucide-react";
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LabelList,
} from "recharts";
import { getCostApi, getFilterRange, FILTERS, DASH } from "../utils/costUtils";
import {
  formatCost,
  formatAvgCost,
  formatCount,
  formatAvgTps,
} from "../utils/costUtils";
import { useAppContext } from "../contexts/AppContext";
import ConfirmModal from "./ConfirmModal";

const PAGE_SIZES = [25, 50, 100];
const CHART_COLORS = {
  primary: "#60cdff",
  translation: "#84cc16",
  rewrite: "#fb923c",
  grid: "rgba(255, 255, 255, 0.1)",
  /** Darker blue for Cost-by-model bars so in-bar labels stay readable. */
  barFill: "#0284c7",
  barLabel: "#ffffff",
};

function formatInteger(n) {
  return n == null || Number.isNaN(Number(n)) ? DASH : Number(n).toLocaleString();
}

function formatDurationMs(ms) {
  if (ms == null || Number.isNaN(Number(ms))) return DASH;
  const totalSec = Math.floor(Number(ms) / 1000);
  const m = Math.floor(totalSec / 60);
  const s = totalSec % 60;
  return `${m}:${s.toString().padStart(2, "0")}`;
}

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    overflow: "hidden",
    padding: "24px",
  },
  header: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    marginBottom: "20px",
  },
  filterRow: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    gap: "12px",
    marginBottom: "20px",
  },
  filterButtonUnselected: {
    backgroundColor: "rgba(96, 205, 255, 0.12)",
    color: "#ffffff",
    borderColor: "rgba(96, 205, 255, 0.3)",
    ":hover": {
      backgroundColor: "rgba(96, 205, 255, 0.28)",
      color: "#fff",
      borderColor: "rgba(96, 205, 255, 0.5)",
    },
  },
  tabPanel: {
    flex: 1,
    minHeight: 0,
    overflow: "auto",
  },
  tabTableContent: {
    maxWidth: "90%",
    width: "100%",
    "& $table": { tableLayout: "fixed" },
  },
  summaryDashboard: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    gridTemplateRows: "1fr 1fr",
    gap: "20px",
    height: "100%",
    minHeight: 0,
    overflow: "hidden",
  },
  summaryKpiCell: {
    minHeight: 0,
    display: "flex",
    flexDirection: "column",
  },
  summaryKpiTitleSpacer: {
    flexShrink: 0,
    marginBottom: "4px",
    visibility: "hidden",
  },
  summaryKpiGrid: {
    flex: 1,
    minHeight: 0,
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gridTemplateRows: "minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr)",
    columnGap: "12px",
    rowGap: "12px",
  },
  summaryChartCellUsageSplit: {
    minHeight: 0,
    minWidth: 0,
    display: "flex",
    flexDirection: "column",
  },
  summaryChartCellRow2: {
    minHeight: 0,
    display: "flex",
    flexDirection: "column",
  },
  summaryKpiCard: {
    padding: "12px 14px",
    borderRadius: "8px",
    border: "1px solid rgba(255, 255, 255, 0.08)",
    backgroundColor: "#222235",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  summaryKpiLabel: {
    fontSize: "12px",
    color: tokens.colorNeutralForeground3,
    marginBottom: "16px",
  },
  summaryKpiValue: {
    fontSize: "18px",
    fontWeight: 600,
    color: CHART_COLORS.primary,
  },
  summaryChartCell: {
    minHeight: 0,
    minWidth: 0,
    display: "flex",
    flexDirection: "column",
  },
  kpiGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))",
    gap: "16px",
    marginBottom: "24px",
  },
  kpiCard: {
    padding: "16px",
    borderRadius: "8px",
    border: `1px solid ${tokens.colorNeutralStroke1}`,
    backgroundColor: tokens.colorNeutralBackground1,
  },
  kpiLabel: {
    fontSize: "12px",
    color: tokens.colorNeutralForeground3,
    marginBottom: "4px",
  },
  kpiValue: {
    fontSize: "18px",
    fontWeight: 600,
    color: CHART_COLORS.primary,
  },
  chartContainer: {
    width: "100%",
    height: "280px",
    marginBottom: "24px",
  },
  summaryChartContainer: {
    flex: 1,
    minHeight: 0,
    minWidth: 0,
    width: "100%",
    boxSizing: "border-box",
    backgroundColor: "#222235",
    border: "1px solid rgba(255, 255, 255, 0.08)",
    borderRadius: "8px",
    padding: "12px",
    overflow: "hidden",
  },
  summaryTabPanel: {
    height: "100%",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
  },
  tableWrap: {
    width: "100%",
    maxWidth: "100%",
    marginTop: "8px",
    marginBottom: "8px",
    borderRadius: "8px",
    overflow: "auto",
    boxShadow: `0 1px 3px ${tokens.colorNeutralShadowAmbient}, 0 1px 2px ${tokens.colorNeutralShadowKey}`,
    border: `1px solid ${tokens.colorNeutralStroke1}`,
  },
  table: {
    width: "100%",
    tableLayout: "auto",
    borderCollapse: "collapse",
    fontSize: "14px",
  },
  thead: {
    backgroundColor: "rgba(96, 205, 255, 0.18)",
  },
  th: {
    padding: "12px 16px",
    textAlign: "left",
    fontWeight: 600,
    color: "#60cdff",
    borderBottom: "2px solid rgba(96, 205, 255, 0.4)",
    fontSize: "13px",
  },
  td: {
    padding: "12px 16px",
    borderBottom: `1px solid ${tokens.colorNeutralStroke2}`,
    color: tokens.colorNeutralForeground1,
  },
  tdValue: {
    whiteSpace: "nowrap",
  },
  tbodyTr: {
    ":hover": {
      backgroundColor: tokens.colorNeutralBackground1Hover,
    },
  },
  totalRow: {
    fontWeight: 600,
    backgroundColor: "rgba(96, 205, 255, 0.12)",
    borderTop: "2px solid rgba(96, 205, 255, 0.4)",
    "& td": {
      borderBottom: "none",
      color: "#60cdff",
    },
  },
  emptyRow: {
    padding: "20px 16px",
    textAlign: "center",
    color: tokens.colorNeutralForeground3,
    fontStyle: "italic",
    backgroundColor: tokens.colorNeutralBackground1,
  },
  modelCell: {
    minWidth: "200px",
    whiteSpace: "nowrap",
    display: "flex",
    alignItems: "center",
    gap: "6px",
  },
  modelTrashIcon: {
    color: "#6b7280",
    cursor: "pointer",
    flexShrink: 0,
    ":hover": {
      color: tokens.colorNeutralForeground1,
    },
  },
  paginationRow: {
    display: "flex",
    alignItems: "center",
    gap: "16px",
    flexWrap: "wrap",
    marginTop: "12px",
    marginBottom: "12px",
  },
  typeBadge: {
    padding: "2px 8px",
    borderRadius: "4px",
    fontSize: "12px",
    fontWeight: 500,
  },
  typeTranslate: {
    backgroundColor: "rgba(132, 204, 22, 0.25)",
    color: CHART_COLORS.translation,
  },
  typeRewrite: {
    backgroundColor: "rgba(251, 146, 60, 0.25)",
    color: CHART_COLORS.rewrite,
  },
});

const DashboardPage = () => {
  const styles = useStyles();
  const { settings } = useAppContext();
  const costFractionStyle = settings?.cost_fraction_style || "muted";

  const [selectedTab, setSelectedTab] = useState("summary");
  const [filter, setFilter] = useState("all");
  const [byFunction, setByFunction] = useState([]);
  const [byModel, setByModel] = useState([]);
  const [byDay, setByDay] = useState([]);
  const [byTargetLang, setByTargetLang] = useState([]);
  const [byRewriteStyle, setByRewriteStyle] = useState([]);
  const [loading, setLoading] = useState(false);

  const [allCallsPage, setAllCallsPage] = useState(1);
  const [allCallsPageSize, setAllCallsPageSize] = useState(50);
  const [allCallsRows, setAllCallsRows] = useState([]);
  const [allCallsTotal, setAllCallsTotal] = useState(0);
  const [allCallsLoading, setAllCallsLoading] = useState(false);

  const [byDayPage, setByDayPage] = useState(1);
  const [byDayPageSize, setByDayPageSize] = useState(50);
  const [byDayPaginatedRows, setByDayPaginatedRows] = useState([]);
  const [byDayPaginatedTotal, setByDayPaginatedTotal] = useState(0);
  const [byDayPaginatedLoading, setByDayPaginatedLoading] = useState(false);

  const [modelToDelete, setModelToDelete] = useState(null);
  const [deleteByModelError, setDeleteByModelError] = useState(null);

  const costApi = getCostApi();

  const loadSummaries = useCallback(() => {
    if (!costApi.getSummaryByFunction) return;
    const { from, to } = getFilterRange(filter);
    setLoading(true);
    const targetLangPromise = costApi.getSummaryByTargetLang ? costApi.getSummaryByTargetLang(from, to) : Promise.resolve([]);
    const rewriteStylePromise = costApi.getSummaryByRewriteStyle ? costApi.getSummaryByRewriteStyle(from, to) : Promise.resolve([]);
    Promise.all([
      costApi.getSummaryByFunction(from, to),
      costApi.getSummaryByModel(from, to),
      costApi.getSummaryByDay(from, to),
      targetLangPromise,
      rewriteStylePromise,
    ])
      .then(([a, b, c, d, e]) => {
        setByFunction(Array.isArray(a) ? a : []);
        setByModel(Array.isArray(b) ? b : []);
        setByDay(Array.isArray(c) ? c : []);
        setByTargetLang(Array.isArray(d) ? d : []);
        setByRewriteStyle(Array.isArray(e) ? e : []);
      })
      .catch(() => {
        setByFunction([]);
        setByModel([]);
        setByDay([]);
        setByTargetLang([]);
        setByRewriteStyle([]);
      })
      .finally(() => setLoading(false));
  }, [filter, costApi]);

  useEffect(() => {
    loadSummaries();
  }, [loadSummaries]);

  const loadAllCalls = useCallback(() => {
    if (!costApi.getAllCalls) return;
    const { from, to } = getFilterRange(filter);
    setAllCallsLoading(true);
    const api = costApi;
    const promise =
      typeof api.getAllCalls === "function"
        ? api.getAllCalls(from, to, allCallsPage, allCallsPageSize)
        : Promise.resolve({ rows: [], total: 0 });
    promise
      .then((data) => {
        setAllCallsRows(data?.rows ?? []);
        setAllCallsTotal(data?.total ?? 0);
      })
      .catch(() => {
        setAllCallsRows([]);
        setAllCallsTotal(0);
      })
      .finally(() => setAllCallsLoading(false));
  }, [filter, allCallsPage, allCallsPageSize, costApi]);

  useEffect(() => {
    if (selectedTab === "allcalls") {
      loadAllCalls();
    }
  }, [selectedTab, loadAllCalls]);

  const loadByDayPaginated = useCallback(() => {
    if (!costApi.getSummaryByDayPaginated) return;
    const { from, to } = getFilterRange(filter);
    setByDayPaginatedLoading(true);
    const api = costApi;
    const promise =
      typeof api.getSummaryByDayPaginated === "function"
        ? api.getSummaryByDayPaginated(from, to, byDayPage, byDayPageSize)
        : Promise.resolve({ rows: [], total: 0 });
    promise
      .then((data) => {
        setByDayPaginatedRows(data?.rows ?? []);
        setByDayPaginatedTotal(data?.total ?? 0);
      })
      .catch(() => {
        setByDayPaginatedRows([]);
        setByDayPaginatedTotal(0);
      })
      .finally(() => setByDayPaginatedLoading(false));
  }, [filter, byDayPage, byDayPageSize, costApi]);

  useEffect(() => {
    if (selectedTab === "byday") {
      loadByDayPaginated();
    }
  }, [selectedTab, loadByDayPaginated]);

  const handleConfirmDeleteByModel = async () => {
    if (!modelToDelete) return;
    setDeleteByModelError(null);
    if (!costApi.deleteCallsByModel) return;
    try {
      await costApi.deleteCallsByModel(modelToDelete);
      setModelToDelete(null);
      loadSummaries();
    } catch (err) {
      setDeleteByModelError(err?.message || "Failed to delete data");
    }
  };

  const totalCalls =
    byFunction.find((r) => r.function === "Total")?.calls ?? 0;
  const totalCostFromSummary =
    byFunction.find((r) => r.function === "Total")?.cost ?? 0;
  const translateRow = byFunction.find((r) => r.function === "translate");
  const rewriteRow = byFunction.find((r) => r.function === "rewrite");
  const totalAvgTps = byModel.find((r) => r.model === "Total")?.avg_tps ?? null;
  const modelCount = byModel.filter((r) => r.model !== "Total").length;
  const avgCostPerCall =
    totalCalls > 0 ? totalCostFromSummary / totalCalls : null;

  const emptyRow = (colSpan) => (
    <tr>
      <td colSpan={colSpan} className={styles.emptyRow}>
        (no information available)
      </td>
    </tr>
  );

  const chartProps = {
    margin: { top: 8, right: 8, left: 8, bottom: 8 },
    style: { background: "transparent" },
  };
  const axisStyle = { stroke: CHART_COLORS.grid, fontSize: 12 };
  const tickStyle = { fill: tokens.colorNeutralForeground3 };

  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <BarChart3 size={28} color={CHART_COLORS.primary} />
        <Text as="h2" size={600} weight="bold" style={{ margin: 0 }}>
          Dashboard
        </Text>
      </div>

      <div className={styles.filterRow}>
        <Label style={{ marginRight: "8px" }}>Filter</Label>
        {FILTERS.map((f) => (
          <Button
            key={f.id}
            size="small"
            appearance={filter === f.id ? "primary" : "subtle"}
            className={filter !== f.id ? styles.filterButtonUnselected : undefined}
            onClick={() => setFilter(f.id)}
          >
            {f.label}
          </Button>
        ))}
      </div>

      <TabList
        selectedValue={selectedTab}
        onTabSelect={(_, data) => setSelectedTab(data.value)}
      >
        <Tab value="summary">Summary</Tab>
        <Tab value="bymodel">By Model</Tab>
        <Tab value="byday">By Day</Tab>
        <Tab value="allcalls">All Calls</Tab>
      </TabList>

      <div className={styles.tabPanel}>
        {selectedTab === "summary" && (
        <div role="tabpanel" aria-label="Summary" className={styles.summaryTabPanel}>
          {loading ? (
            <p>Loading…</p>
          ) : (
            <div className={styles.summaryDashboard}>
              <div className={styles.summaryKpiCell}>
                <Text as="h4" size={400} className={styles.summaryKpiTitleSpacer}>
                  Cost over time
                </Text>
                <div className={styles.summaryKpiGrid}>
                  <div className={styles.summaryKpiCard}>
                    <div className={styles.summaryKpiLabel}>Total Cost</div>
                    <div className={styles.summaryKpiValue}>
                      {formatCost(settings?.total_cost ?? 0, costFractionStyle)}
                    </div>
                  </div>
                  <div className={styles.summaryKpiCard}>
                    <div className={styles.summaryKpiLabel}>Avg cost per call</div>
                    <div className={styles.summaryKpiValue}>
                      {avgCostPerCall != null
                        ? formatCost(avgCostPerCall, costFractionStyle)
                        : DASH}
                    </div>
                  </div>
                  <div className={styles.summaryKpiCard}>
                    <div className={styles.summaryKpiLabel}>Translation</div>
                    <div className={styles.summaryKpiValue}>
                      {formatCount(translateRow?.calls)} /{" "}
                      {formatCost(translateRow?.cost, costFractionStyle)}
                    </div>
                  </div>
                  <div className={styles.summaryKpiCard}>
                    <div className={styles.summaryKpiLabel}>Rewrite</div>
                    <div className={styles.summaryKpiValue}>
                      {formatCount(rewriteRow?.calls)} /{" "}
                      {formatCost(rewriteRow?.cost, costFractionStyle)}
                    </div>
                  </div>
                  <div className={styles.summaryKpiCard}>
                    <div className={styles.summaryKpiLabel}>Models used</div>
                    <div className={styles.summaryKpiValue}>
                      {formatCount(modelCount)}
                    </div>
                  </div>
                  <div className={styles.summaryKpiCard}>
                    <div className={styles.summaryKpiLabel}>Avg TPS</div>
                    <div className={styles.summaryKpiValue}>
                      {formatAvgTps(totalAvgTps)}
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.summaryChartCell}>
                <Text as="h4" size={400} style={{ marginBottom: "4px", flexShrink: 0 }}>
                  Cost over time
                </Text>
                <div className={styles.summaryChartContainer}>
                  {byDay.length > 0 ? (
                    (() => {
                      const chronological = [...byDay].reverse();
                      let cumTranslation = 0;
                      let cumRewrite = 0;
                      const cumulativeData = chronological.map((row) => {
                        cumTranslation += Number(row.translation_cost) || 0;
                        cumRewrite += Number(row.rewrite_cost) || 0;
                        return {
                          day: row.day,
                          translation_cost: cumTranslation,
                          rewrite_cost: cumRewrite,
                        };
                      });
                      return (
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={cumulativeData} {...chartProps}>
                        <CartesianGrid strokeDasharray="3 3" stroke={CHART_COLORS.grid} />
                        <XAxis dataKey="day" style={axisStyle} tick={tickStyle} />
                        <YAxis style={axisStyle} tick={tickStyle} />
                        <Tooltip
                          contentStyle={{
                            backgroundColor: tokens.colorNeutralBackground1,
                            border: `1px solid ${tokens.colorNeutralStroke1}`,
                          }}
                          labelStyle={{ color: tokens.colorNeutralForeground1 }}
                          formatter={(value, name) => [formatCost(value, costFractionStyle), name]}
                        />
                        <Area
                          type="monotone"
                          dataKey="translation_cost"
                          stackId="1"
                          stroke={CHART_COLORS.translation}
                          fill={CHART_COLORS.translation}
                          fillOpacity={0.6}
                          name="Translation cost (cumulative)"
                        />
                        <Area
                          type="monotone"
                          dataKey="rewrite_cost"
                          stackId="1"
                          stroke={CHART_COLORS.rewrite}
                          fill={CHART_COLORS.rewrite}
                          fillOpacity={0.6}
                          name="Rewrite cost (cumulative)"
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                      );
                    })()
                  ) : (
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100%", color: tokens.colorNeutralForeground3 }}>
                      No data
                    </div>
                  )}
                </div>
              </div>

              <div className={styles.summaryChartCell}>
                <Text as="h4" size={400} style={{ marginBottom: "4px", flexShrink: 0 }}>
                  Cost by model
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
                      const totalCostSum = costByModelData.reduce((s, r) => s + (r.totalCost || 0), 0);
                      return (
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart
                        data={costByModelData}
                        layout="vertical"
                        margin={{ left: 100, right: 16 }}
                        {...chartProps}
                      >
                        <CartesianGrid strokeDasharray="3 3" stroke={CHART_COLORS.grid} />
                        <XAxis type="number" style={axisStyle} tick={tickStyle} />
                        <YAxis
                          type="category"
                          dataKey="model"
                          width={100}
                          style={axisStyle}
                          tick={tickStyle}
                          tickFormatter={(v) =>
                            v && v.length > 16 ? v.slice(0, 16) + "…" : v
                          }
                        />
                        <Tooltip
                          contentStyle={{
                            backgroundColor: tokens.colorNeutralBackground1,
                            border: `1px solid ${tokens.colorNeutralStroke1}`,
                          }}
                          formatter={(value) => {
                            const pct = totalCostSum > 0 ? ((value / totalCostSum) * 100).toFixed(1) : "0";
                            return [formatCost(value, costFractionStyle) + ` (${pct}%)`, "Total cost"];
                          }}
                        />
                        <Bar
                          dataKey="totalCost"
                          fill={CHART_COLORS.barFill}
                          name="Total cost"
                        >
                          <LabelList
                            dataKey="totalCost"
                            position="insideLeft"
                            formatter={(value) => {
                              const pct = totalCostSum > 0 ? ((value / totalCostSum) * 100).toFixed(1) : "0";
                              const costStr = value != null && !Number.isNaN(Number(value))
                                ? `$${Number(value).toFixed(4)}`
                                : DASH;
                              return `${costStr} (${pct}%)`;
                            }}
                            style={{ fill: CHART_COLORS.barLabel, fontSize: 11 }}
                            offset={4}
                          />
                        </Bar>
                      </BarChart>
                    </ResponsiveContainer>
                      );
                    })()
                  ) : (
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100%", color: tokens.colorNeutralForeground3 }}>
                      No data
                    </div>
                  )}
                </div>
              </div>

              <div className={styles.summaryChartCellUsageSplit}>
                <Text as="h4" size={400} style={{ marginBottom: "4px", flexShrink: 0, textAlign: "left" }}>
                  Usage split
                </Text>
                  <div className={styles.summaryChartContainer} style={{ overflow: "visible" }}>
                    {byFunction.filter((r) => r.function !== "Total").length > 0 ? (
                      (() => {
                        const usageData = byFunction.filter((r) => r.function !== "Total");
                        const totalCallsPie = usageData.reduce((s, r) => s + (Number(r.calls) || 0), 0);
                        const RADIAN = Math.PI / 180;
                        return (
                          <ResponsiveContainer width="100%" height="100%">
                            <PieChart margin={{ top: 10, right: 40, bottom: 10, left: 40 }}>
                              <Pie
                                data={usageData}
                                dataKey="calls"
                                nameKey="function"
                                cx="50%"
                                cy="50%"
                                outerRadius="68%"
                                isAnimationActive={false}
                                label={({ cx, cy, midAngle, outerRadius: or, function: fn, calls }) => {
                                  const radius = or + 14;
                                  const x = cx + radius * Math.cos(-midAngle * RADIAN);
                                  const y = cy + radius * Math.sin(-midAngle * RADIAN);
                                  const anchor = x > cx ? "start" : "end";
                                  const pct = totalCallsPie > 0 ? ((Number(calls) / totalCallsPie) * 100).toFixed(1) : "0";
                                  const displayName = fn.charAt(0).toUpperCase() + fn.slice(1);
                                  return (
                                    <text x={x} y={y} textAnchor={anchor} dominantBaseline="central" fill={tokens.colorNeutralForeground2} fontSize={11}>
                                      <tspan x={x} dy="-0.65em">{displayName}</tspan>
                                      <tspan x={x} dy="1.3em" fill={tokens.colorNeutralForeground3}>{formatInteger(calls)} ({pct}%)</tspan>
                                    </text>
                                  );
                                }}
                                labelLine={{ stroke: "rgba(255,255,255,0.25)", strokeWidth: 1 }}
                              >
                                {usageData.map((r, i) => (
                                  <Cell
                                    key={i}
                                    fill={r.function === "translate" ? CHART_COLORS.translation : CHART_COLORS.rewrite}
                                  />
                                ))}
                              </Pie>
                              <Tooltip
                                contentStyle={{
                                  backgroundColor: tokens.colorNeutralBackground1,
                                  border: `1px solid ${tokens.colorNeutralStroke1}`,
                                  color: tokens.colorNeutralForeground1 ?? "#e5e7eb",
                                }}
                                itemStyle={{ color: tokens.colorNeutralForeground1 ?? "#e5e7eb" }}
                                labelStyle={{ color: tokens.colorNeutralForeground1 ?? "#e5e7eb" }}
                                formatter={(value, name) => {
                                  const pct = totalCallsPie > 0 ? ((Number(value) / totalCallsPie) * 100).toFixed(1) : "0";
                                  return [`${value} (${pct}%)`, name];
                                }}
                              />
                            </PieChart>
                          </ResponsiveContainer>
                        );
                      })()
                    ) : (
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100%", color: tokens.colorNeutralForeground3 }}>
                        No data
                      </div>
                    )}
                  </div>
              </div>

              <div className={styles.summaryChartCell}>
                <Text as="h4" size={400} style={{ marginBottom: "4px", flexShrink: 0 }}>
                  Translation target language
                </Text>
                <div className={styles.summaryChartContainer}>
                  {byTargetLang.length > 0 ? (
                    (() => {
                      const totalTargetCalls = byTargetLang.reduce((s, r) => s + (Number(r.calls) || 0), 0);
                      return (
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart
                        data={byTargetLang.map((r) => ({ ...r, label: r.target_lang }))}
                        layout="vertical"
                        margin={{ left: 140, right: 16, top: 4, bottom: 4 }}
                        {...chartProps}
                      >
                        <CartesianGrid strokeDasharray="3 3" stroke={CHART_COLORS.grid} />
                        <XAxis
                          type="number"
                          style={axisStyle}
                          tick={tickStyle}
                          dataKey="calls"
                          tickFormatter={(v) => (Number.isFinite(Number(v)) ? Math.round(Number(v)) : v)}
                        />
                        <YAxis
                          type="category"
                          dataKey="target_lang"
                          width={135}
                          style={axisStyle}
                          tick={tickStyle}
                        />
                        <Tooltip
                          contentStyle={{
                            backgroundColor: tokens.colorNeutralBackground1,
                            border: `1px solid ${tokens.colorNeutralStroke1}`,
                            color: tokens.colorNeutralForeground1 ?? "#e5e7eb",
                          }}
                          formatter={(value) => {
                            const pct = totalTargetCalls > 0 ? ((Number(value) / totalTargetCalls) * 100).toFixed(1) : "0";
                            return [`${formatInteger(value)} (${pct}%)`, "Calls"];
                          }}
                        />
                        <Bar dataKey="calls" fill={CHART_COLORS.barFill} name="Calls">
                          <LabelList
                            dataKey="calls"
                            position="insideLeft"
                            formatter={(value) => {
                              const pct = totalTargetCalls > 0 ? ((Number(value) / totalTargetCalls) * 100).toFixed(1) : "0";
                              return `${formatInteger(value)} (${pct}%)`;
                            }}
                            style={{ fill: CHART_COLORS.barLabel, fontSize: 11 }}
                            offset={4}
                          />
                        </Bar>
                      </BarChart>
                    </ResponsiveContainer>
                      );
                    })()
                  ) : (
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100%", color: tokens.colorNeutralForeground3 }}>
                      No data
                    </div>
                  )}
                </div>
              </div>

              <div className={styles.summaryChartCell}>
                <Text as="h4" size={400} style={{ marginBottom: "4px", flexShrink: 0 }}>
                  Rewrite style
                </Text>
                  <div className={styles.summaryChartContainer}>
                    {byRewriteStyle.length > 0 ? (
                      (() => {
                        const totalRewriteCalls = byRewriteStyle.reduce((s, r) => s + (Number(r.calls) || 0), 0);
                        return (
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                          data={byRewriteStyle.map((r) => ({ ...r, label: r.rewrite_style }))}
                          layout="vertical"
                          margin={{ left: 140, right: 16, top: 4, bottom: 4 }}
                          {...chartProps}
                        >
                          <CartesianGrid strokeDasharray="3 3" stroke={CHART_COLORS.grid} />
                          <XAxis
                            type="number"
                            style={axisStyle}
                            tick={tickStyle}
                            dataKey="calls"
                            tickFormatter={(v) => (Number.isFinite(Number(v)) ? Math.round(Number(v)) : v)}
                          />
                          <YAxis
                            type="category"
                            dataKey="rewrite_style"
                            width={135}
                            style={axisStyle}
                            tick={tickStyle}
                          />
                          <Tooltip
                            contentStyle={{
                              backgroundColor: tokens.colorNeutralBackground1,
                              border: `1px solid ${tokens.colorNeutralStroke1}`,
                              color: tokens.colorNeutralForeground1 ?? "#e5e7eb",
                            }}
                            formatter={(value) => {
                              const pct = totalRewriteCalls > 0 ? ((Number(value) / totalRewriteCalls) * 100).toFixed(1) : "0";
                              return [`${formatInteger(value)} (${pct}%)`, "Calls"];
                            }}
                          />
                          <Bar dataKey="calls" fill={CHART_COLORS.barFill} name="Calls">
                            <LabelList
                              dataKey="calls"
                              position="insideLeft"
                              formatter={(value) => {
                                const pct = totalRewriteCalls > 0 ? ((Number(value) / totalRewriteCalls) * 100).toFixed(1) : "0";
                                return `${formatInteger(value)} (${pct}%)`;
                              }}
                              style={{ fill: CHART_COLORS.barLabel, fontSize: 11 }}
                              offset={4}
                            />
                          </Bar>
                        </BarChart>
                      </ResponsiveContainer>
                        );
                      })()
                    ) : (
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100%", color: tokens.colorNeutralForeground3 }}>
                        No data
                      </div>
                    )}
                  </div>
                </div>
            </div>
          )}
        </div>
        )}

        {selectedTab === "bymodel" && (
        <div role="tabpanel" aria-label="By Model">
          {loading ? (
            <p>Loading…</p>
          ) : (
            <div className={styles.tabTableContent}>
              <div className={styles.tableWrap}>
                <table className={styles.table}>
                  <thead className={styles.thead}>
                    <tr>
                      <th className={styles.th}>Model</th>
                      <th className={styles.th}>Translation calls</th>
                      <th className={styles.th}>Rewrite calls</th>
                      <th className={styles.th}>Translation cost</th>
                      <th className={styles.th}>Rewrite cost</th>
                      <th className={styles.th}>Avg translation</th>
                      <th className={styles.th}>Avg rewrite</th>
                      <th className={styles.th}>Avg TPS</th>
                    </tr>
                  </thead>
                  <tbody>
                    {byModel.filter((r) => r.model !== "Total").length === 0
                      ? emptyRow(8)
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
                                    title="Exclude all data for this model"
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      setModelToDelete(row.model);
                                    }}
                                  />
                                </span>
                              </td>
                              <td className={`${styles.td} ${styles.tdValue}`}>
                                {formatCount(row.translation_calls)}
                              </td>
                              <td className={`${styles.td} ${styles.tdValue}`}>
                                {formatCount(row.rewrite_calls)}
                              </td>
                              <td className={`${styles.td} ${styles.tdValue}`}>
                                {formatCost(row.translation_cost, costFractionStyle)}
                              </td>
                              <td className={`${styles.td} ${styles.tdValue}`}>
                                {formatCost(row.rewrite_cost, costFractionStyle)}
                              </td>
                              <td className={`${styles.td} ${styles.tdValue}`}>
                                {formatAvgCost(
                                  Number(row.translation_cost || 0),
                                  row.translation_calls ?? 0,
                                  costFractionStyle,
                                )}
                              </td>
                              <td className={`${styles.td} ${styles.tdValue}`}>
                                {formatAvgCost(
                                  Number(row.rewrite_cost || 0),
                                  row.rewrite_calls ?? 0,
                                  costFractionStyle,
                                )}
                              </td>
                              <td className={`${styles.td} ${styles.tdValue}`}>
                                {formatAvgTps(row.avg_tps)}
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
                              <strong>Total</strong>
                            </td>
                            <td className={`${styles.td} ${styles.tdValue}`}>
                              {formatCount(tc)}
                            </td>
                            <td className={`${styles.td} ${styles.tdValue}`}>
                              {formatCount(rc)}
                            </td>
                            <td className={`${styles.td} ${styles.tdValue}`}>
                              {formatCost(total?.translation_cost, costFractionStyle)}
                            </td>
                            <td className={`${styles.td} ${styles.tdValue}`}>
                              {formatCost(total?.rewrite_cost, costFractionStyle)}
                            </td>
                            <td className={`${styles.td} ${styles.tdValue}`}>
                              {formatAvgCost(
                                Number(total?.translation_cost || 0),
                                tc,
                                costFractionStyle,
                              )}
                            </td>
                            <td className={`${styles.td} ${styles.tdValue}`}>
                              {formatAvgCost(
                                Number(total?.rewrite_cost || 0),
                                rc,
                                costFractionStyle,
                              )}
                            </td>
                            <td className={`${styles.td} ${styles.tdValue}`}>
                              {formatAvgTps(total?.avg_tps)}
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
                    Cost by model (stacked)
                  </Text>
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={byModel.filter((r) => r.model !== "Total")}
                      {...chartProps}
                    >
                      <CartesianGrid strokeDasharray="3 3" stroke={CHART_COLORS.grid} />
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
                        contentStyle={{
                          backgroundColor: tokens.colorNeutralBackground1,
                          border: `1px solid ${tokens.colorNeutralStroke1}`,
                        }}
                      />
                      <Bar
                        dataKey="translation_cost"
                        stackId="a"
                        fill={CHART_COLORS.translation}
                        name="Translation"
                      />
                      <Bar
                        dataKey="rewrite_cost"
                        stackId="a"
                        fill={CHART_COLORS.rewrite}
                        name="Rewrite"
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              )}
            </div>
          )}
        </div>
        )}

        {selectedTab === "byday" && (
        <div role="tabpanel" aria-label="By Day">
          {loading ? (
            <p>Loading…</p>
          ) : (
            <div className={styles.tabTableContent}>
              {byDay.length > 0 && (
                <div className={styles.chartContainer}>
                  <Text as="h4" size={400} style={{ marginBottom: "8px" }}>
                    Daily call volume
                  </Text>
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={[...byDay].reverse()} {...chartProps}>
                      <CartesianGrid strokeDasharray="3 3" stroke={CHART_COLORS.grid} />
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
                        name="Translation calls"
                      />
                      <Line
                        type="monotone"
                        dataKey="rewrite_calls"
                        stroke={CHART_COLORS.rewrite}
                        name="Rewrite calls"
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              )}
              <Text as="h4" size={400} style={{ marginTop: "16px", marginBottom: "4px" }}>
                By day (paginated)
              </Text>
              <div className={styles.paginationRow}>
                <Label>Rows per page</Label>
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
                  {byDayPaginatedTotal} day(s) total · Page {byDayPage} of{" "}
                  {Math.max(1, Math.ceil(byDayPaginatedTotal / byDayPageSize))}
                </span>
                <Button
                  size="small"
                  appearance="secondary"
                  disabled={byDayPage <= 1}
                  onClick={() => setByDayPage((p) => Math.max(1, p - 1))}
                >
                  Prev
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
                        p + 1,
                      )
                    )
                  }
                >
                  Next
                </Button>
              </div>
              {byDayPaginatedLoading ? (
                <p>Loading…</p>
              ) : (
                <div className={styles.tableWrap}>
                  <table className={styles.table}>
                    <thead className={styles.thead}>
                      <tr>
                        <th className={styles.th}>Day</th>
                        <th className={styles.th}>Translation calls</th>
                        <th className={styles.th}>Rewrite calls</th>
                        <th className={styles.th}>Translation cost</th>
                        <th className={styles.th}>Rewrite cost</th>
                        <th className={styles.th}>Avg translation</th>
                        <th className={styles.th}>Avg rewrite</th>
                      </tr>
                    </thead>
                    <tbody>
                      {byDayPaginatedRows.length === 0
                        ? emptyRow(7)
                        : byDayPaginatedRows.map((row, i) => (
                            <tr key={i} className={styles.tbodyTr}>
                              <td className={styles.td}>{row.day}</td>
                              <td className={`${styles.td} ${styles.tdValue}`}>
                                {formatCount(row.translation_calls)}
                              </td>
                              <td className={`${styles.td} ${styles.tdValue}`}>
                                {formatCount(row.rewrite_calls)}
                              </td>
                              <td className={`${styles.td} ${styles.tdValue}`}>
                                {formatCost(row.translation_cost, costFractionStyle)}
                              </td>
                              <td className={`${styles.td} ${styles.tdValue}`}>
                                {formatCost(row.rewrite_cost, costFractionStyle)}
                              </td>
                              <td className={`${styles.td} ${styles.tdValue}`}>
                                {formatAvgCost(
                                  Number(row.translation_cost || 0),
                                  row.translation_calls ?? 0,
                                  costFractionStyle,
                                )}
                              </td>
                              <td className={`${styles.td} ${styles.tdValue}`}>
                                {formatAvgCost(
                                  Number(row.rewrite_cost || 0),
                                  row.rewrite_calls ?? 0,
                                  costFractionStyle,
                                )}
                              </td>
                            </tr>
                          ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          )}
        </div>
        )}

        {selectedTab === "allcalls" && (
        <div role="tabpanel" aria-label="All Calls">
          <div className={styles.tabTableContent}>
            <Text as="h4" size={400} style={{ marginBottom: "4px" }}>
              All API calls (raw data)
            </Text>
            <div className={styles.paginationRow}>
            <Label>Rows per page</Label>
            <Dropdown
              value={String(allCallsPageSize)}
              selectedOptions={[String(allCallsPageSize)]}
              onOptionSelect={(_, data) => {
                const v = Number(data.optionValue);
                if (PAGE_SIZES.includes(v)) {
                  setAllCallsPageSize(v);
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
              {allCallsTotal} row(s) total · Page {allCallsPage} of{" "}
              {Math.max(1, Math.ceil(allCallsTotal / allCallsPageSize))}
            </span>
            <Button
              size="small"
              appearance="secondary"
              disabled={allCallsPage <= 1}
              onClick={() => setAllCallsPage((p) => Math.max(1, p - 1))}
            >
              Prev
            </Button>
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
                    p + 1,
                  )
                )
              }
            >
              Next
            </Button>
          </div>
          {allCallsLoading ? (
            <p>Loading…</p>
          ) : (
            <div className={styles.tableWrap}>
              <table className={styles.table}>
                <thead className={styles.thead}>
                  <tr>
                    <th className={styles.th}>ID</th>
                    <th className={styles.th}>Timestamp</th>
                    <th className={styles.th}>Type</th>
                    <th className={styles.th}>Model</th>
                    <th className={styles.th}>Source</th>
                    <th className={styles.th}>Target</th>
                    <th className={styles.th}>Style</th>
                    <th className={styles.th}>Req bytes</th>
                    <th className={styles.th}>Res bytes</th>
                    <th className={styles.th}>Duration</th>
                    <th className={styles.th}>Cost</th>
                    <th className={styles.th}>TPS</th>
                  </tr>
                </thead>
                <tbody>
                  {allCallsRows.length === 0
                    ? emptyRow(12)
                    : allCallsRows.map((row) => (
                        <tr key={row.id} className={styles.tbodyTr}>
                          <td className={`${styles.td} ${styles.tdValue}`}>
                            {row.id}
                          </td>
                          <td className={styles.td}>
                            {row.timestamp
                              ? new Date(row.timestamp).toLocaleString()
                              : DASH}
                          </td>
                          <td className={styles.td}>
                            <span
                              className={`${styles.typeBadge} ${
                                row.type === "translate"
                                  ? styles.typeTranslate
                                  : styles.typeRewrite
                              }`}
                            >
                              {row.type || DASH}
                            </span>
                          </td>
                          <td className={styles.td}>{row.model ?? DASH}</td>
                          <td className={styles.td}>{row.source_lang ?? DASH}</td>
                          <td className={styles.td}>{row.target_lang ?? DASH}</td>
                          <td className={styles.td}>
                            {row.rewrite_style ?? DASH}
                          </td>
                          <td className={`${styles.td} ${styles.tdValue}`}>
                            {formatInteger(row.request_bytes)}
                          </td>
                          <td className={`${styles.td} ${styles.tdValue}`}>
                            {formatInteger(row.response_bytes)}
                          </td>
                          <td className={`${styles.td} ${styles.tdValue}`}>
                            {formatDurationMs(row.duration_ms)}
                          </td>
                          <td className={`${styles.td} ${styles.tdValue}`}>
                            {formatCost(row.cost, costFractionStyle)}
                          </td>
                          <td className={`${styles.td} ${styles.tdValue}`}>
                            {formatAvgTps(row.tps)}
                          </td>
                        </tr>
                      ))}
                </tbody>
              </table>
            </div>
          )}
          </div>
        </div>
        )}
      </div>

      {modelToDelete != null && (
        <ConfirmModal
          title="Exclude all data for this model"
          message={
            deleteByModelError
              ? `Something went wrong: ${deleteByModelError}`
              : `Delete all API call records for model "${modelToDelete}"? This cannot be undone.`
          }
          confirmLabel="Delete"
          cancelLabel="Cancel"
          onConfirm={handleConfirmDeleteByModel}
          onCancel={() => {
            setModelToDelete(null);
            setDeleteByModelError(null);
          }}
        />
      )}
    </div>
  );
};

export default DashboardPage;
