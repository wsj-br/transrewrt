import React, { useState, useEffect } from "react";
import { Button, tokens, Text, makeStyles, Dropdown, Option, Label } from "@fluentui/react-components";
import { DollarSign, Copy, Trash2, Server } from "lucide-react";
import webAPI from "../utils/webApiClient";
import ConfirmModal from "./ConfirmModal";

const isWeb = typeof window !== "undefined" && !window.electronAPI?.getConfig;
// Cost data: from server in web mode, from Electron SQLite (transrewrt.db) in desktop mode
const getCostApi = () => (isWeb ? webAPI : (typeof window !== "undefined" && window.electronAPI) || {});

const useStyles = makeStyles({
  tableWrap: {
    width: "fit-content",
    maxWidth: "100%",
    marginTop: "8px",
    marginBottom: "8px",
    borderRadius: "8px",
    overflow: "auto",
    boxShadow: `0 1px 3px ${tokens.colorNeutralShadowAmbient}, 0 1px 2px ${tokens.colorNeutralShadowKey}`,
    border: `1px solid ${tokens.colorNeutralStroke1}`,
  },
  tableWrapFitContent: {
    width: "fit-content",
    maxWidth: "100%",
    minWidth: 0,
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
  tablesGrid: {
    display: "flex",
    flexWrap: "wrap",
    gap: "24px",
    width: "100%",
    boxSizing: "border-box",
  },
  /* By model: content-sized, min 865px so all columns fit without wrapping */
  gridSectionByModel: {
    flexGrow: 0,
    flexShrink: 0,
    flexBasis: "fit-content",
    width: "fit-content",
    maxWidth: "100%",
    alignSelf: "flex-start",
    marginBottom: "12px",
    paddingBottom: "12px",
    // borderBottom: `1px solid ${tokens.colorNeutralStroke2}`,
    boxSizing: "border-box",
  },
  /* By function: content-sized only */
  gridSectionByFunction: {
    flexGrow: 0,
    flexShrink: 0,
    flexBasis: "fit-content",
    width: "fit-content",
    maxWidth: "100%",
    alignSelf: "flex-start",
    marginBottom: "12px",
    paddingBottom: "12px",
    // borderBottom: `1px solid ${tokens.colorNeutralStroke2}`,
    boxSizing: "border-box",
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
  modelCell: {
    minWidth: "240px",
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
});

const COST_FRACTION_STYLE_OPTIONS = [
  { value: "subscript", label: "Subscript" },
  { value: "muted", label: "Muted gray" },
  { value: "superscript", label: "Superscript" },
  { value: "small", label: "Small font" },
];

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
  const [modelToDelete, setModelToDelete] = useState(null);
  const [deleteByModelError, setDeleteByModelError] = useState(null);
  const [syncCostError, setSyncCostError] = useState(null);
  const [keyInfo, setKeyInfo] = useState(null);
  const [keyInfoLoading, setKeyInfoLoading] = useState(false);
  const [keyInfoError, setKeyInfoError] = useState(null);

  const apiUrl = localSettings.api_url || "https://openrouter.ai/api/v1";
  const isOpenRouter = apiUrl.includes("openrouter.ai");

  useEffect(() => {
    if (!isOpenRouter) {
      setKeyInfo(null);
      setKeyInfoError(null);
      return;
    }
    let cancelled = false;
    setKeyInfoError(null);
    setKeyInfoLoading(true);
    const fetchKeyInfo = async () => {
      try {
        if (isWeb) {
          if (!webAPI.getOpenRouterKeyInfo) return;
          const data = await webAPI.getOpenRouterKeyInfo();
          if (!cancelled) setKeyInfo(data?.data != null ? data.data : data);
        } else {
          const key = localSettings.api_key || "";
          if (!key.trim()) {
            if (!cancelled) setKeyInfoError("API key not set");
            return;
          }
          const base = apiUrl.replace(/\/$/, "");
          const res = await fetch(`${base}/key`, {
            method: "GET",
            headers: { Authorization: `Bearer ${key}` },
          });
          const data = await res.json().catch(() => ({}));
          if (!res.ok) throw new Error(data.error || `HTTP ${res.status}`);
          if (!cancelled) setKeyInfo(data?.data != null ? data.data : data);
        }
      } catch (err) {
        if (!cancelled) {
          setKeyInfo(null);
          setKeyInfoError(err?.message || "Failed to load key info");
        }
      } finally {
        if (!cancelled) setKeyInfoLoading(false);
      }
    };
    fetchKeyInfo();
    return () => { cancelled = true; };
  }, [isOpenRouter, isWeb, apiUrl, localSettings.api_key]);

  const costApi = getCostApi();
  useEffect(() => {
    if (!costApi.getSummaryByFunction) return;
    const { from, to } = getFilterRange(filter);
    setLoading(true);
    Promise.all([
      costApi.getSummaryByFunction(from, to),
      costApi.getSummaryByModel(from, to),
      costApi.getSummaryByDay(from, to),
    ])
      .then(([a, b, c]) => {
        setByFunction(Array.isArray(a) ? a : []);
        setByModel(Array.isArray(b) ? b : []);
        setByDay(Array.isArray(c) ? c : []);
        // Do not overwrite persisted total_cost from DB when loading the tab; the user may have
        // synced with API key usage, and that value must not be replaced by the local DB total.
      })
      .catch(() => {
        setByFunction([]);
        setByModel([]);
        setByDay([]);
      })
      .finally(() => setLoading(false));
  }, [filter]);

  const handleCopyCost = async () => {
    const cost = parseFloat(localSettings.total_cost || 0).toFixed(6);
    if (navigator.clipboard?.writeText) {
      try {
        await navigator.clipboard.writeText(cost);
        return;
      } catch {
        // fall through to fallback
      }
    }
    const textArea = document.createElement("textarea");
    textArea.value = cost;
    textArea.style.position = "fixed";
    textArea.style.left = "-9999px";
    document.body.appendChild(textArea);
    textArea.select();
    try {
      document.execCommand("copy");
    } finally {
      document.body.removeChild(textArea);
    }
  };

  const handleSyncWithKeyUsage = () => {
    setSyncCostError(null);
    if (!keyInfo || keyInfo.limit == null) {
      setSyncCostError("No key usage available");
      return;
    }
    const usage = keyInfo.limit - (keyInfo.limit_remaining ?? 0);
    onSettingChange("total_cost", usage);
  };

  const refetchSummaries = () => {
    if (!costApi.getSummaryByFunction) return;
    const { from, to } = getFilterRange(filter);
    setLoading(true);
    Promise.all([
      costApi.getSummaryByFunction(from, to),
      costApi.getSummaryByModel(from, to),
      costApi.getSummaryByDay(from, to),
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
    if (!costApi.deleteCallsOutsideRange) return;
    const { from, to } = getFilterRange(filter);
    try {
      await costApi.deleteCallsOutsideRange(from, to);
      setShowDeleteAllConfirm(false);
      refetchSummaries();
    } catch (err) {
      setDeleteAllError(err.message || "Failed to delete data");
    }
  };

  const handleConfirmDeleteByModel = async () => {
    if (!modelToDelete) return;
    setDeleteByModelError(null);
    if (!costApi.deleteCallsByModel) return;
    try {
      await costApi.deleteCallsByModel(modelToDelete);
      setModelToDelete(null);
      refetchSummaries();
    } catch (err) {
      setDeleteByModelError(err.message || "Failed to delete data");
    }
  };

  const filterLabel = FILTERS.find((f) => f.id === filter)?.label || filter;
  const isDeleteAll = filter === "all";

  const DASH = "—";
  const costFractionStyle = localSettings.cost_fraction_style || "muted";

  const formatDollarAmount = (n) => {
    const s = Number(n).toFixed(6);
    const dot = s.indexOf(".");
    if (dot === -1) return "$" + s;
    const main = s.slice(0, dot + 3);
    const frac = s.slice(dot + 3);
    const fractionNode =
      costFractionStyle === "superscript" ? (
        <sup>{frac}</sup>
      ) : costFractionStyle === "muted" ? (
        <span style={{ color: tokens.colorNeutralForeground3 }}>{frac}</span>
      ) : costFractionStyle === "small" ? (
        <span style={{ fontSize: "0.7em" }}>{frac}</span>
      ) : (
        <sub>{frac}</sub>
      );
    return (
      <>
        {"$" + main}
        {fractionNode}
      </>
    );
  };

  const formatCost = (cost) => {
    const n = Number(cost);
    return cost == null || Number.isNaN(n) || n === 0 ? DASH : formatDollarAmount(n);
  };

  const formatAvgCost = (cost, calls) => {
    const n = Number(cost);
    if (calls == null || calls === 0 || cost == null || Number.isNaN(n) || n === 0) return DASH;
    return formatDollarAmount(cost / calls);
  };

  const formatAvgTps = (avgTps) => {
    const n = Number(avgTps);
    return avgTps == null || Number.isNaN(n) || n === 0 ? DASH : n.toFixed(1);
  };

  const formatCount = (count) => (count == null || Number(count) === 0 ? DASH : Number(count));

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
        <div style={{ display: "flex", alignItems: "center", marginLeft: "64px", marginTop: "12px", gap: "16px", flexWrap: "wrap" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <span style={{ fontSize: "16px", fontWeight: 600 }}>Total Cost:</span>
            <span style={{ fontSize: "16px", color: tokens.colorStatusSuccessForeground1, whiteSpace: "nowrap" }}>
              {formatCost(localSettings.total_cost)}
            </span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
            <Button appearance="secondary" size="small" onClick={handleCopyCost} icon={<Copy size={14} />}>
              Copy Value
            </Button>
            <Button appearance="secondary" size="small" onClick={() => onSettingChange("total_cost", 0)}>
              Reset Cost
            </Button>
            {isOpenRouter && (
              <Button
                appearance="secondary"
                size="small"
                onClick={handleSyncWithKeyUsage}
                disabled={keyInfoLoading || !keyInfo || keyInfo.limit == null}
                icon={<Server size={14} />}
              >
                Sync with API key usage
              </Button>
            )}
            {syncCostError && (
              <span style={{ color: tokens.colorStatusDangerForeground1, fontSize: "13px" }}>{syncCostError}</span>
            )}
          </div>
        </div>
        {isOpenRouter && (
          <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap", marginTop: "18px", marginLeft: "32px" }}>
            <span style={{ fontSize: "16px", fontWeight: 600 }}>API Key Usage:</span>
            <span style={{
              fontSize: "16px",
              color: keyInfoError ? tokens.colorStatusDangerForeground1 : tokens.colorNeutralForeground1,
              whiteSpace: "nowrap",
            }}>
              {keyInfoLoading
                ? "Loading…"
                : keyInfoError
                  ? keyInfoError
                  : !keyInfo
                    ? DASH
                    : keyInfo.limit == null
                      ? "no limit configured"
                      : (
                          <>
                            <span style={{ color: tokens.colorStatusSuccessForeground1 }}>
                              {formatCost(keyInfo.limit - keyInfo.limit_remaining)}
                            </span>
                            {" / "}
                            <span style={{ color: tokens.colorStatusSuccessForeground1 }}>
                              ${Number(keyInfo.limit).toFixed(2)}
                            </span>
                            {keyInfo.limit_reset == null ? " (no reset)" : ` (reset ${keyInfo.limit_reset})`}
                          </>
                        )}
            </span>
          </div>
        )}
      </div>

      <div className="section" style={{ marginTop: "24px" }}>
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "24px 8px" }}>
          {/* Block 1: Filter label + filter buttons; wraps as a unit when row is too narrow */}
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8px" }}>
            <Text as="h4" size={400} weight="semibold" style={{ marginTop: 0, marginBottom: 0, marginRight: "4px" }}>Filter</Text>
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
          {/* Block 2: Fraction digits label + dropdown; moves below block 1 when row is too narrow */}
          <div style={{ display: "flex", alignItems: "center", gap: "4px", flexShrink: 0 }}>
            <Text as="h4" size={400} weight="semibold" style={{ marginTop: 0, marginBottom: 0, marginLeft: "24px", marginRight: "4px" }}>Fraction digits</Text>
            <Dropdown
              id="cost-fraction-style"
              appearance="underline"
              value={COST_FRACTION_STYLE_OPTIONS.find((o) => o.value === (localSettings.cost_fraction_style || "muted"))?.label ?? "Muted gray"}
              selectedOptions={[localSettings.cost_fraction_style || "muted"]}
              onOptionSelect={(e, data) => {
                const v = data.optionValue;
                if (v && COST_FRACTION_STYLE_OPTIONS.some((o) => o.value === v)) {
                  onSettingChange("cost_fraction_style", v);
                }
              }}
              style={{ minWidth: "120px" }}
            >
              {COST_FRACTION_STYLE_OPTIONS.map((o) => (
                <Option key={o.value} value={o.value}>
                  {o.label}
                </Option>
              ))}
            </Dropdown>
          </div>
        </div>
      </div>

      {loading ? (
        <p style={{ marginTop: "16px" }}>Loading summaries…</p>
      ) : (
        <>
          <div className={styles.tablesGrid}>
            <div className={styles.gridSectionByModel}>
              <Text as="h4" size={400} weight="semibold" style={{ marginTop: 0, marginBottom: "4px" }}>By model</Text>
              <div className={styles.tableWrap} style={{ width: "910px" }}>
                <table className={styles.table}>
                <thead className={styles.thead}>
                  <tr>
                    <th className={styles.th} style={{ minWidth: "240px" }}>Model</th>
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
                            <td className={`${styles.td} ${styles.tdValue}`}>{formatCount(row.translation_calls)}</td>
                            <td className={`${styles.td} ${styles.tdValue}`}>{formatCount(row.rewrite_calls)}</td>
                            <td className={`${styles.td} ${styles.tdValue}`}>{formatCost(row.translation_cost)}</td>
                            <td className={`${styles.td} ${styles.tdValue}`}>{formatCost(row.rewrite_cost)}</td>
                            <td className={`${styles.td} ${styles.tdValue}`}>{formatAvgCost(Number(row.translation_cost || 0), row.translation_calls ?? 0)}</td>
                            <td className={`${styles.td} ${styles.tdValue}`}>{formatAvgCost(Number(row.rewrite_cost || 0), row.rewrite_calls ?? 0)}</td>
                            <td className={`${styles.td} ${styles.tdValue}`}>{formatAvgTps(row.avg_tps)}</td>
                          </tr>
                        ))}
                  {byModel.some((r) => r.model === "Total") && (() => {
                    const total = byModel.find((r) => r.model === "Total");
                    const tc = total?.translation_calls ?? 0;
                    const rc = total?.rewrite_calls ?? 0;
                    return (
                      <tr className={styles.totalRow}>
                        <td className={styles.td}><strong>Total</strong></td>
                        <td className={`${styles.td} ${styles.tdValue}`}>{formatCount(tc)}</td>
                        <td className={`${styles.td} ${styles.tdValue}`}>{formatCount(rc)}</td>
                        <td className={`${styles.td} ${styles.tdValue}`}>{formatCost(total?.translation_cost)}</td>
                        <td className={`${styles.td} ${styles.tdValue}`}>{formatCost(total?.rewrite_cost)}</td>
                        <td className={`${styles.td} ${styles.tdValue}`}>{formatAvgCost(Number(total?.translation_cost || 0), tc)}</td>
                        <td className={`${styles.td} ${styles.tdValue}`}>{formatAvgCost(Number(total?.rewrite_cost || 0), rc)}</td>
                        <td className={`${styles.td} ${styles.tdValue}`}>{formatAvgTps(total?.avg_tps)}</td>
                      </tr>
                    );
                  })()}
                </tbody>
              </table>
              </div>
            </div>

            <div className={styles.gridSectionByFunction}>
              <Text as="h4" size={400} weight="semibold" style={{ marginTop: 0, marginBottom: "4px" }}>By function</Text>
              <div className={styles.tableWrap}>
                <table className={styles.table}>
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
                            <td className={`${styles.td} ${styles.tdValue}`}>{formatCount(row.calls)}</td>
                            <td className={`${styles.td} ${styles.tdValue}`}>{formatCost(row.cost)}</td>
                            <td className={`${styles.td} ${styles.tdValue}`}>{formatAvgCost(Number(row.cost || 0), row.calls ?? 0)}</td>
                          </tr>
                        ))}
                  {byFunction.some((r) => r.function === "Total") && (() => {
                    const total = byFunction.find((r) => r.function === "Total");
                    const calls = total?.calls ?? 0;
                    return (
                      <tr className={styles.totalRow}>
                        <td className={styles.td}><strong>Total</strong></td>
                        <td className={`${styles.td} ${styles.tdValue}`}>{formatCount(calls)}</td>
                        <td className={`${styles.td} ${styles.tdValue}`}>{formatCost(total?.cost)}</td>
                        <td className={`${styles.td} ${styles.tdValue}`}>{formatAvgCost(Number(total?.cost || 0), calls)}</td>
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
            <div className={`${styles.tableWrap} ${styles.tableWrapFitContent}`} style={{ width: "fit-content" }}>
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
                  {byDay.length === 0
                    ? emptyRow(7)
                    : byDay.map((row, i) => (
                        <tr key={i} className={styles.tbodyTr}>
                          <td className={styles.td}>{row.day}</td>
                          <td className={`${styles.td} ${styles.tdValue}`}>{formatCount(row.translation_calls)}</td>
                          <td className={`${styles.td} ${styles.tdValue}`}>{formatCount(row.rewrite_calls)}</td>
                          <td className={`${styles.td} ${styles.tdValue}`}>{formatCost(row.translation_cost)}</td>
                          <td className={`${styles.td} ${styles.tdValue}`}>{formatCost(row.rewrite_cost)}</td>
                          <td className={`${styles.td} ${styles.tdValue}`}>{formatAvgCost(Number(row.translation_cost || 0), row.translation_calls ?? 0)}</td>
                          <td className={`${styles.td} ${styles.tdValue}`}>{formatAvgCost(Number(row.rewrite_cost || 0), row.rewrite_calls ?? 0)}</td>
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

export default SettingsDialogCostTrackingTab;
