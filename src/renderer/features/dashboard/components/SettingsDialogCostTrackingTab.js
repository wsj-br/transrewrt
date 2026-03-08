import React, { useState, useEffect, useRef, useMemo } from "react";
import { useTranslation } from "react-i18next";
import {
  Button,
  Dropdown,
  Option,
  tokens,
  Text,
  makeStyles,
} from "@fluentui/react-components";
import { DollarSign, Copy, Server, RotateCcw, Trash2 } from "lucide-react";
import webAPI from "../../../utils/api/webApiClient";
import ConfirmModal from "../../../components/ConfirmModal";
import {
  getCostApi,
  formatCost,
  formatAvgCost,
  formatCount,
} from "../utils/costUtils";

const isWeb = typeof window !== "undefined" && !window.electronAPI?.getConfig;

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
});

function getDeleteCutoffIso(option) {
  if (option === "all") return null;
  const now = new Date();
  const d = new Date(now);
  switch (option) {
    case "gt_1m":
      d.setMonth(d.getMonth() - 1);
      break;
    case "gt_2m":
      d.setMonth(d.getMonth() - 2);
      break;
    case "gt_3m":
      d.setMonth(d.getMonth() - 3);
      break;
    case "gt_6m":
      d.setMonth(d.getMonth() - 6);
      break;
    case "gt_9m":
      d.setMonth(d.getMonth() - 9);
      break;
    case "gt_1y":
      d.setFullYear(d.getFullYear() - 1);
      break;
    case "gt_2y":
      d.setFullYear(d.getFullYear() - 2);
      break;
    default:
      return null;
  }
  return d.toISOString();
}

const SettingsDialogCostTrackingTab = ({
  localSettings,
  onSettingChange,
  isTabActive,
}) => {
  const styles = useStyles();
  const { t } = useTranslation();
  const [byFunction, setByFunction] = useState([]);
  const [loading, setLoading] = useState(false);
  const [syncCostError, setSyncCostError] = useState(null);
  const [keyInfo, setKeyInfo] = useState(null);
  const [keyInfoLoading, setKeyInfoLoading] = useState(false);
  const [keyInfoError, setKeyInfoError] = useState(null);
  const [deleteRange, setDeleteRange] = useState("gt_3m");
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [deleteError, setDeleteError] = useState(null);
  const [deleteSuccess, setDeleteSuccess] = useState(null);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const costFractionStyle = localSettings.cost_fraction_style || "muted";
  const keyRefreshIdRef = useRef(0);

  const deleteRangeOptions = useMemo(
    () => [
      { value: "all", label: t("all data (clear)") },
      { value: "gt_1m", label: t("> 1 month") },
      { value: "gt_2m", label: t("> 2 months") },
      { value: "gt_3m", label: t("> 3 months") },
      { value: "gt_6m", label: t("> 6 months") },
      { value: "gt_9m", label: t("> 9 months") },
      { value: "gt_1y", label: t("> 1 year") },
      { value: "gt_2y", label: t("> 2 years") },
    ],
    [t]
  );

  const apiUrl = localSettings.api_url || "https://openrouter.ai/api/v1";
  const isOpenRouter =
    apiUrl.includes("openrouter.ai") ||
    (!!localSettings.use_transrewrt_proxy && (localSettings.api_url || "").trim().length > 0);

  const fetchKeyInfo = async () => {
    if (!isOpenRouter) {
      setKeyInfo(null);
      setKeyInfoError(null);
      return;
    }
    const thisId = ++keyRefreshIdRef.current;
    setKeyInfoError(null);
    setKeyInfoLoading(true);
    try {
      let data;
      if (isWeb) {
        if (!webAPI.getOpenRouterKeyInfo) return;
        data = await webAPI.getOpenRouterKeyInfo();
      } else {
        if (!window.electronAPI?.getOpenRouterKeyInfo) {
          setKeyInfoError(t("Failed to load key info"));
          return;
        }
        data = await window.electronAPI.getOpenRouterKeyInfo();
      }
      if (thisId !== keyRefreshIdRef.current) return;
      const raw = data?.data ?? data;
      setKeyInfo(raw && typeof raw === "object" ? { ...raw } : null);
    } catch (err) {
      if (thisId === keyRefreshIdRef.current) {
        setKeyInfo(null);
        setKeyInfoError(err?.message || t("Failed to load key info"));
      }
    } finally {
      if (thisId === keyRefreshIdRef.current) {
        setKeyInfoLoading(false);
      }
    }
  };

  useEffect(() => {
    fetchKeyInfo();
  }, [isOpenRouter, isWeb, apiUrl, localSettings.api_key, isTabActive]);

  const keyUsageDisplay = useMemo(() => {
    if (keyInfoLoading) return t("Loading…");
    if (keyInfoError) return keyInfoError;
    if (!keyInfo) return "—";
    const usage =
      keyInfo.usage ??
      (keyInfo.limit != null && keyInfo.limit_remaining != null
        ? keyInfo.limit - keyInfo.limit_remaining
        : null);
    const hasUsage = usage != null && !Number.isNaN(Number(usage));
    if (!hasUsage && keyInfo.limit == null) return t("no limit configured");
    return {
      usage,
      hasLimit: keyInfo.limit != null,
      limit: keyInfo.limit,
      limitReset: keyInfo.limit_reset,
    };
  }, [
    keyInfoLoading,
    keyInfoError,
    keyInfo,
    t,
  ]);

  const costApi = getCostApi();
  useEffect(() => {
    if (!costApi.getSummaryByFunction) return;
    setLoading(true);
    costApi
      .getSummaryByFunction(null, null)
      .then((a) => setByFunction(Array.isArray(a) ? a : []))
      .catch(() => setByFunction([]))
      .finally(() => setLoading(false));
  }, [isTabActive]);

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
    if (!keyInfo) {
      setSyncCostError(t("No key usage available"));
      return;
    }
    const usage =
      keyInfo.usage ??
      (keyInfo.limit != null && keyInfo.limit_remaining != null
        ? keyInfo.limit - keyInfo.limit_remaining
        : null);
    if (usage == null || Number.isNaN(Number(usage))) {
      setSyncCostError(t("No key usage available"));
      return;
    }
    onSettingChange("total_cost", usage);
  };

  const emptyRow = (colSpan) => (
    <tr>
      <td colSpan={colSpan} className={styles.emptyRow}>
        (no information available)
      </td>
    </tr>
  );

  const executeDeleteCostData = async () => {
    if (deleteLoading) return;
    if (!costApi || typeof costApi.deleteCallsOutsideRange !== "function") {
      setDeleteError(t("Delete operation is not available in this mode."));
      setShowDeleteConfirm(false);
      return;
    }

    setDeleteLoading(true);
    setDeleteError(null);
    setDeleteSuccess(null);
    setShowDeleteConfirm(false);
    try {
      const cutoff = getDeleteCutoffIso(deleteRange);
      await costApi.deleteCallsOutsideRange(cutoff, null);

      if (typeof costApi.getSummaryByFunction === "function") {
        try {
          const rows = await costApi.getSummaryByFunction(null, null);
          setByFunction(Array.isArray(rows) ? rows : []);
        } catch {
          // ignore refresh errors
        }
      }
      if (typeof costApi.getTotalCostFromDatabase === "function") {
        try {
          const data = await costApi.getTotalCostFromDatabase();
          if (data && typeof data.total_cost === "number") {
            onSettingChange("total_cost", data.total_cost);
          }
        } catch {
          // ignore refresh errors
        }
      }

      setDeleteSuccess("Cost data deleted successfully.");
    } catch (err) {
      setDeleteError(err?.message || "Failed to delete cost data.");
    } finally {
      setDeleteLoading(false);
    }
  };

  const deleteConfirmTitle =
    deleteRange === "all"
      ? t("Delete all cost data")
      : t("Delete cost data by age");
  const deleteConfirmMessage =
    deleteRange === "all"
      ? t("Permanently delete ALL cost tracking data? This cannot be undone.")
      : t("Permanently delete cost tracking data older than {{range}}? This cannot be undone.", {
          range: t(deleteRangeOptions.find((o) => o.value === deleteRange)?.label ?? "").replace(
            /^>\s*/,
            "",
          ) || "",
        });

  return (
    <div className="tab-content">
      <div className="section">
        <Text
          as="h3"
          size={500}
          weight="semibold"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            marginTop: 0,
            marginBottom: "36px",
          }}
        >
          <DollarSign size={20} />
          {t("Cost Tracking")}
        </Text>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginLeft: "64px",
            marginTop: "12px",
            gap: "16px",
            flexWrap: "wrap",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <span style={{ fontSize: "16px", fontWeight: 600 }}>
              {t("Total Cost:")}
            </span>
            <span
              style={{
                fontSize: "16px",
                color: tokens.colorStatusSuccessForeground1,
                whiteSpace: "nowrap",
              }}
            >
              {formatCost(localSettings.total_cost, costFractionStyle)}
            </span>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              flexWrap: "wrap",
            }}
          >
            <Button
              appearance="secondary"
              size="small"
              onClick={handleCopyCost}
              icon={<Copy size={14} />}
            >
              {t("Copy Value")}
            </Button>
            <Button
              appearance="secondary"
              size="small"
              onClick={() => onSettingChange("total_cost", 0)}
            >
              {t("Reset Cost")}
            </Button>
            {isOpenRouter && (
              <Button
                appearance="secondary"
                size="small"
                onClick={handleSyncWithKeyUsage}
                disabled={
                keyInfoLoading ||
                !keyInfo ||
                (keyInfo.usage == null &&
                  (keyInfo.limit == null || keyInfo.limit_remaining == null))
              }
                icon={<Server size={14} />}
              >
                {t("Sync with API key usage")}
              </Button>
            )}
            {syncCostError && (
              <span
                style={{
                  color: tokens.colorStatusDangerForeground1,
                  fontSize: "13px",
                }}
              >
                {syncCostError}
              </span>
            )}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            flexWrap: "wrap",
            marginTop: "18px",
            marginLeft: "32px",
          }}
        >
          <span style={{ fontSize: "16px", fontWeight: 600 }}>
            {t("API Key Usage")}:
          </span>
            <span
              style={{
                fontSize: "16px",
                color: keyInfoError
                  ? tokens.colorStatusDangerForeground1
                  : tokens.colorNeutralForeground1,
                whiteSpace: "nowrap",
              }}
            >
              {typeof keyUsageDisplay === "string" ? (
                keyUsageDisplay
              ) : keyUsageDisplay && keyUsageDisplay.usage != null ? (
                <>
                  <span style={{ color: tokens.colorStatusSuccessForeground1 }}>
                    {formatCost(keyUsageDisplay.usage, costFractionStyle)}
                  </span>
                  {keyUsageDisplay.hasLimit ? (
                    <>
                      {" / "}
                      <span style={{ color: tokens.colorStatusSuccessForeground1 }}>
                        ${Number(keyUsageDisplay.limit).toFixed(2)}
                      </span>
                      {keyUsageDisplay.limitReset == null
                        ? " (no reset)"
                        : ` (reset ${keyUsageDisplay.limitReset})`}
                    </>
                  ) : (
                    " (unlimited)"
                  )}
                </>
              ) : (
                "—"
              )}
            </span>
            <Button
              appearance="subtle"
              size="small"
              icon={<RotateCcw size={14} />}
              onClick={fetchKeyInfo}
              title={t("Refresh API key usage")}
            />
            <span
              style={{
                fontSize: "12px",
                color: tokens.colorNeutralForeground3,
                fontStyle: "italic",
              }}
            >
              {t("Usage updates may have a short delay (15s to 1min), even after refreshing.")}
            </span>
        </div>
      </div>

      {loading ? (
        <p style={{ marginTop: "16px" }}>{t("Loading summaries…")}</p>
      ) : (
        <div className="section" style={{ marginTop: "24px" }}>
          <div style={{ marginLeft: "32px" }}>
            <Text
              as="h4"
              size={400}
              weight="semibold"
              style={{ marginTop: 0, marginBottom: "4px" }}
            >
              {t("By function")}
            </Text>
            <div className={styles.tableWrap}>
              <table className={styles.table}>
                <thead className={styles.thead}>
                  <tr>
                    <th className={styles.th}>{t("Function")}</th>
                    <th className={styles.th}>{t("Calls")}</th>
                    <th className={styles.th}>{t("Cost")}</th>
                    <th className={styles.th}>{t("Avg cost")}</th>
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
                            <td className={`${styles.td} ${styles.tdValue}`}>
                              {formatCount(row.calls)}
                            </td>
                            <td className={`${styles.td} ${styles.tdValue}`}>
                              {formatCost(row.cost, costFractionStyle)}
                            </td>
                            <td className={`${styles.td} ${styles.tdValue}`}>
                              {formatAvgCost(
                                Number(row.cost || 0),
                                row.calls ?? 0,
                                costFractionStyle,
                              )}
                            </td>
                          </tr>
                        ))}
                  {byFunction.some((r) => r.function === "Total") &&
                    (() => {
                      const total = byFunction.find(
                        (r) => r.function === "Total",
                      );
                      const calls = total?.calls ?? 0;
                      return (
                        <tr className={styles.totalRow} key="total">
                          <td className={styles.td}>
                            <strong>Total</strong>
                          </td>
                          <td className={`${styles.td} ${styles.tdValue}`}>
                            {formatCount(calls)}
                          </td>
                          <td className={`${styles.td} ${styles.tdValue}`}>
                            {formatCost(total?.cost, costFractionStyle)}
                          </td>
                          <td className={`${styles.td} ${styles.tdValue}`}>
                            {formatAvgCost(
                              Number(total?.cost || 0),
                              calls,
                              costFractionStyle,
                            )}
                          </td>
                        </tr>
                      );
                    })()}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      <div className="section" style={{ marginTop: "24px" }}>
        <Text
          as="h3"
          size={500}
          weight="semibold"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            marginTop: 0,
            marginBottom: "36px",
          }}
        >
          <Trash2 size={20} />
          {t("Delete cost data")}
        </Text>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "8px",
            marginLeft: "64px",
            marginTop: "12px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              flexWrap: "wrap",
            }}
          >
            <span>{t("Delete entries older than:")}</span>
            <Dropdown
              appearance="underline"
              selectedOptions={[deleteRange]}
              value={
                deleteRangeOptions.find((o) => o.value === deleteRange)
                  ?.label || ""
              }
              onOptionSelect={(_, data) => {
                if (data.optionValue) {
                  setDeleteRange(data.optionValue);
                }
              }}
              style={{ minWidth: "180px" }}
            >
              {deleteRangeOptions.map((opt) => (
                <Option key={opt.value} value={opt.value}>
                  {opt.label}
                </Option>
              ))}
            </Dropdown>
            <Button
              appearance="primary"
              disabled={deleteLoading}
              onClick={() => setShowDeleteConfirm(true)}
              style={{
                backgroundColor: tokens.colorStatusDangerBackground1,
                color: tokens.colorNeutralForegroundOnBrand,
              }}
            >
              {deleteLoading ? t("Deleting…") : t("Delete data")}
            </Button>
          </div>
          {deleteError && (
            <span
              style={{
                color: tokens.colorStatusDangerForeground1,
                fontSize: "13px",
              }}
            >
              {deleteError}
            </span>
          )}
          {deleteSuccess && (
            <span
              style={{
                color: tokens.colorStatusSuccessForeground1,
                fontSize: "13px",
              }}
            >
              {deleteSuccess}
            </span>
          )}
        </div>
      </div>

      {showDeleteConfirm && (
        <ConfirmModal
          title={deleteConfirmTitle}
          message={deleteConfirmMessage}
          confirmLabel={t("Delete data")}
          cancelLabel={t("Cancel")}
          onConfirm={executeDeleteCostData}
          onCancel={() => setShowDeleteConfirm(false)}
          danger
        />
      )}
    </div>
  );
};

export default SettingsDialogCostTrackingTab;
