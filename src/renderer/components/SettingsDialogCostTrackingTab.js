import React, { useState, useEffect } from "react";
import { Button, tokens, Text, makeStyles } from "@fluentui/react-components";
import { DollarSign, Copy } from "lucide-react";
import webAPI from "../utils/webApiClient";
import ConfirmModal from "./ConfirmModal";

const isWeb = typeof window !== "undefined" && !window.electronAPI?.getConfig;

const useStyles = makeStyles({
  tableWrap: {
    width: "fit-content",
    minWidth: "360px",
    marginTop: "8px",
    marginBottom: "24px",
    borderRadius: "8px",
    overflow: "hidden",
    boxShadow: `0 1px 3px ${tokens.colorNeutralShadowAmbient}, 0 1px 2px ${tokens.colorNeutralShadowKey}`,
    border: `1px solid ${tokens.colorNeutralStroke1}`,
  },
  tableWrapFullWidth: {
    width: "100%",
  },
  table: {
    width: "auto",
    tableLayout: "auto",
    borderCollapse: "collapse",
    fontSize: "14px",
  },
  tableFullWidth: {
    width: "100%",
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
  tbodyTr: {
    ":hover": {
      backgroundColor: tokens.colorNeutralBackground1Hover,
    },
  },
  totalRow: {
    fontWeight: 600,
    backgroundColor: "rgba(96, 205, 255, 0.12)",
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
  tablesGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "24px",
  },
  gridSection: {
    width: "fit-content",
    maxWidth: "100%",
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
  deleteAllButton: {
    backgroundColor: "#8b0000",
    color: "#ffffff",
    border: "none",
    ":hover": {
      backgroundColor: "#a52a2a",
      color: "#ffffff",
    },
  },
});

const FILTERS = [
  { id: "all", label: "All" },
  { id: "last_hour", label: "Last hour" },
  { id: "today", label: "Today" },
  { id: "yesterday", label: "Yesterday" },
  { id: "this_week", label: "This week" },
  { id: "this_month", label: "This month" },
  { id: "last_month", label: "Last month" },
  { id: "this_year", label: "This year" },
  { id: "last_year", label: "Last year" },
];

function getFilterRange(filterId) {
  if (!filterId || filterId === "all") return { from: null, to: null };
  const now = new Date();
  const to = now.toISOString();
  let from;
  switch (filterId) {
    case "last_hour":
      from = new Date(now.getTime() - 60 * 60 * 1000).toISOString();
      break;
    case "today":
      from = new Date(now.getFullYear(), now.getMonth(), now.getDate()).toISOString();
      break;
    case "yesterday": {
      const d = new Date(now);
      d.setDate(d.getDate() - 1);
      from = new Date(d.getFullYear(), d.getMonth(), d.getDate()).toISOString();
      const end = new Date(d.getFullYear(), d.getMonth(), d.getDate() + 1);
      return { from, to: end.toISOString() };
    }
    case "this_week":
      from = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000).toISOString();
      break;
    case "this_month":
      from = new Date(now.getFullYear(), now.getMonth(), 1).toISOString();
      break;
    case "last_month": {
      const d = new Date(now.getFullYear(), now.getMonth() - 1, 1);
      from = d.toISOString();
      const end = new Date(now.getFullYear(), now.getMonth(), 1);
      return { from, to: end.toISOString() };
    }
    case "this_year":
      from = new Date(now.getFullYear(), 0, 1).toISOString();
      break;
    case "last_year": {
      const y = now.getFullYear() - 1;
      from = new Date(y, 0, 1).toISOString();
      const end = new Date(y + 1, 0, 1);
      return { from, to: end.toISOString() };
    }
    default:
      return { from: null, to: null };
  }
  return { from, to };
}

const SettingsDialogCostTrackingTab = ({ localSettings, onSettingChange }) => {
  const styles = useStyles();
  const [filter, setFilter] = useState("all");
  const [byFunction, setByFunction] = useState([]);
  const [byModel, setByModel] = useState([]);
  const [byDay, setByDay] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showDeleteAllConfirm, setShowDeleteAllConfirm] = useState(false);
  const [deleteAllError, setDeleteAllError] = useState(null);

  useEffect(() => {
    if (!isWeb || !webAPI.getSummaryByFunction) return;
    const { from, to } = getFilterRange(filter);
    setLoading(true);
    Promise.all([
      webAPI.getSummaryByFunction(from, to),
      webAPI.getSummaryByModel(from, to),
      webAPI.getSummaryByDay(from, to),
    ])
      .then(([a, b, c]) => {
        setByFunction(Array.isArray(a) ? a : []);
        setByModel(Array.isArray(b) ? b : []);
        setByDay(Array.isArray(c) ? c : []);
      })
      .catch(() => {
        setByFunction([]);
        setByModel([]);
        setByDay([]);
      })
      .finally(() => setLoading(false));
  }, [filter]);

  const handleCopyCost = () => {
    const cost = parseFloat(localSettings.total_cost || 0).toFixed(6);
    navigator.clipboard.writeText(cost);
  };

  const refetchSummaries = () => {
    const { from, to } = getFilterRange(filter);
    setLoading(true);
    Promise.all([
      webAPI.getSummaryByFunction(from, to),
      webAPI.getSummaryByModel(from, to),
      webAPI.getSummaryByDay(from, to),
    ])
      .then(([a, b, c]) => {
        setByFunction(Array.isArray(a) ? a : []);
        setByModel(Array.isArray(b) ? b : []);
        setByDay(Array.isArray(c) ? c : []);
      })
      .catch(() => {
        setByFunction([]);
        setByModel([]);
        setByDay([]);
      })
      .finally(() => setLoading(false));
  };

  const handleConfirmDeleteOutsideRange = async () => {
    setDeleteAllError(null);
    const { from, to } = getFilterRange(filter);
    try {
      await webAPI.deleteCallsOutsideRange(from, to);
      setShowDeleteAllConfirm(false);
      refetchSummaries();
    } catch (err) {
      setDeleteAllError(err.message || "Failed to delete data");
    }
  };

  const filterLabel = FILTERS.find((f) => f.id === filter)?.label || filter;
  const isDeleteAll = filter === "all";

  const formatAvgCost = (cost, calls) =>
    calls > 0 ? `$${Number(cost / calls).toFixed(6)}` : "—";

  const formatAvgTps = (avgTps) =>
    avgTps != null && Number(avgTps) > 0 ? Number(avgTps).toFixed(2) : "—";

  const emptyRow = (colSpan) => (
    <tr>
      <td colSpan={colSpan} className={styles.emptyRow}>
        (no information available)
      </td>
    </tr>
  );

  return (
    <div className="tab-content">
      <div className="section">
        <Text as="h3" size={500} weight="semibold" style={{ display: "flex", alignItems: "center", gap: "8px", marginTop: 0, marginBottom: "16px" }}>
          <DollarSign size={20} />
          Cost Tracking
        </Text>
        <div style={{ display: "flex", alignItems: "center", gap: "16px", flexWrap: "wrap" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <span style={{ fontSize: "16px", fontWeight: 600 }}>Total Cost:</span>
            <span style={{ fontSize: "18px", fontWeight: 700, color: tokens.colorStatusSuccessForeground1 }}>
              ${parseFloat(localSettings.total_cost || 0).toFixed(6)}
            </span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <Button appearance="secondary" size="small" onClick={handleCopyCost} icon={<Copy size={14} />}>
              Copy Value
            </Button>
            <Button appearance="secondary" size="small" onClick={() => onSettingChange("total_cost", 0)}>
              Reset Cost
            </Button>
          </div>
        </div>
      </div>

      {isWeb && (
        <>
          <div className="section" style={{ marginTop: "24px" }}>
            <Text as="h4" size={400} weight="semibold" style={{ marginTop: 0, marginBottom: "8px" }}>Filter</Text>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
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
          </div>

          {loading ? (
            <p style={{ marginTop: "16px" }}>Loading summaries…</p>
          ) : (
            <>
              <div className={styles.tablesGrid}>
                <div className={`section ${styles.gridSection}`}>
                  <Text as="h4" size={400} weight="semibold" style={{ marginTop: 0, marginBottom: "4px" }}>By function</Text>
                  <div className={styles.tableWrap}>
                    <table className={`${styles.table} ${styles.tableFullWidth}`}>
                    <thead className={styles.thead}>
                      <tr>
                        <th className={styles.th}>Function</th>
                        <th className={styles.th}>Calls</th>
                        <th className={styles.th}>Cost</th>
                        <th className={styles.th}>Avg cost</th>
                      </tr>
                    </thead>
                    <tbody>
                      {byFunction.filter((r) => r.function !== "Total").length === 0
                        ? emptyRow(4)
                        : byFunction
                            .filter((r) => r.function !== "Total")
                            .map((row, i) => (
                              <tr key={i} className={styles.tbodyTr}>
                                <td className={styles.td}>{row.function}</td>
                                <td className={styles.td}>{row.calls}</td>
                                <td className={styles.td}>${Number(row.cost || 0).toFixed(6)}</td>
                                <td className={styles.td}>{formatAvgCost(Number(row.cost || 0), row.calls ?? 0)}</td>
                              </tr>
                            ))}
                      {byFunction.some((r) => r.function === "Total") && (() => {
                        const total = byFunction.find((r) => r.function === "Total");
                        const calls = total?.calls ?? 0;
                        return (
                          <tr className={styles.totalRow}>
                            <td className={styles.td}><strong>Total</strong></td>
                            <td className={styles.td}>{calls}</td>
                            <td className={styles.td}>${Number(total?.cost || 0).toFixed(6)}</td>
                            <td className={styles.td}>{formatAvgCost(Number(total?.cost || 0), calls)}</td>
                          </tr>
                        );
                      })()}
                    </tbody>
                    </table>
                  </div>
                </div>

                <div className={`section ${styles.gridSection}`}>
                  <Text as="h4" size={400} weight="semibold" style={{ marginTop: 0, marginBottom: "4px" }}>By model</Text>
                  <div className={styles.tableWrap}>
                    <table className={`${styles.table} ${styles.tableFullWidth}`}>
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
                                <td className={styles.td}>{row.model}</td>
                                <td className={styles.td}>{row.translation_calls ?? 0}</td>
                                <td className={styles.td}>{row.rewrite_calls ?? 0}</td>
                                <td className={styles.td}>${Number(row.translation_cost || 0).toFixed(6)}</td>
                                <td className={styles.td}>${Number(row.rewrite_cost || 0).toFixed(6)}</td>
                                <td className={styles.td}>{formatAvgCost(Number(row.translation_cost || 0), row.translation_calls ?? 0)}</td>
                                <td className={styles.td}>{formatAvgCost(Number(row.rewrite_cost || 0), row.rewrite_calls ?? 0)}</td>
                                <td className={styles.td}>{formatAvgTps(row.avg_tps)}</td>
                              </tr>
                            ))}
                      {byModel.some((r) => r.model === "Total") && (() => {
                        const total = byModel.find((r) => r.model === "Total");
                        const tc = total?.translation_calls ?? 0;
                        const rc = total?.rewrite_calls ?? 0;
                        return (
                          <tr className={styles.totalRow}>
                            <td className={styles.td}><strong>Total</strong></td>
                            <td className={styles.td}>{tc}</td>
                            <td className={styles.td}>{rc}</td>
                            <td className={styles.td}>${Number(total?.translation_cost || 0).toFixed(6)}</td>
                            <td className={styles.td}>${Number(total?.rewrite_cost || 0).toFixed(6)}</td>
                            <td className={styles.td}>{formatAvgCost(Number(total?.translation_cost || 0), tc)}</td>
                            <td className={styles.td}>{formatAvgCost(Number(total?.rewrite_cost || 0), rc)}</td>
                            <td className={styles.td}>{formatAvgTps(total?.avg_tps)}</td>
                          </tr>
                        );
                      })()}
                    </tbody>
                  </table>
                  </div>
                </div>
              </div>

              <div className="section">
                <Text as="h4" size={400} weight="semibold" style={{ marginTop: 0, marginBottom: "4px" }}>By day</Text>
                <div className={styles.tableWrap}>
                  <table className={`${styles.table} ${styles.tableFullWidth}`}>
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
                      {byDay.length === 0
                        ? emptyRow(7)
                        : byDay.map((row, i) => (
                            <tr key={i} className={styles.tbodyTr}>
                              <td className={styles.td}>{row.day}</td>
                              <td className={styles.td}>{row.translation_calls ?? 0}</td>
                              <td className={styles.td}>{row.rewrite_calls ?? 0}</td>
                              <td className={styles.td}>${Number(row.translation_cost || 0).toFixed(6)}</td>
                              <td className={styles.td}>${Number(row.rewrite_cost || 0).toFixed(6)}</td>
                              <td className={styles.td}>{formatAvgCost(Number(row.translation_cost || 0), row.translation_calls ?? 0)}</td>
                              <td className={styles.td}>{formatAvgCost(Number(row.rewrite_cost || 0), row.rewrite_calls ?? 0)}</td>
                            </tr>
                          ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="section" style={{ marginTop: "32px", paddingTop: "24px", borderTop: `1px solid ${tokens.colorNeutralStroke2}` }}>
                <div style={{ display: "flex", alignItems: "center", gap: "16px", flexWrap: "wrap" }}>
                  <Button
                    appearance="primary"
                    className={styles.deleteAllButton}
                    style={{ backgroundColor: "#8b0000", color: "#ffffff" }}
                    title={isDeleteAll ? "Delete all records in the database" : `Delete all records older than the start of "${filterLabel}"`}
                    onClick={() => {
                      setDeleteAllError(null);
                      setShowDeleteAllConfirm(true);
                    }}
                  >
                    Delete not filtered data
                  </Button>
                  <Text
                    as="span"
                    style={{ fontSize: "13px", color: tokens.colorNeutralForeground2, maxWidth: "420px", lineHeight: 1.4 }}
                  >
                    Deletes only data <b>older than</b> the start of the selected range; data from the range onward is kept. With &quot;All&quot;, deletes every record. Example: with &quot;Last month&quot; selected, only data before the first day of last month is deleted; last month and current month are kept.
                  </Text>
                </div>
              </div>
            </>
          )}
        </>
      )}

      {showDeleteAllConfirm && (
        <ConfirmModal
          title="Delete not filtered data"
          message={
            deleteAllError
              ? `Something went wrong: ${deleteAllError}`
              : isDeleteAll
                ? "Delete all API call records from the database? This cannot be undone."
                : `Delete all API call records older than the start of "${filterLabel}"? Data from that point onward will be kept. This cannot be undone.`
          }
          confirmLabel="Delete"
          cancelLabel="Cancel"
          onConfirm={handleConfirmDeleteOutsideRange}
          onCancel={() => {
            setShowDeleteAllConfirm(false);
            setDeleteAllError(null);
          }}
        />
      )}
    </div>
  );
};

export default SettingsDialogCostTrackingTab;
