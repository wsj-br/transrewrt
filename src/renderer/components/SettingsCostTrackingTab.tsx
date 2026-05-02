import { useState, useEffect, useRef, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { DollarSign, Copy, Server, RotateCcw, Trash2 } from "lucide-react";
import PropTypes from "prop-types";
import webAPI from "../utils/api/webApiClient";
import ConfirmModal from "./ConfirmModal";
import {
  getCostApi,
  formatCost,
  formatAvgCost,
  formatCount,
  getDeleteCutoffIso,
} from "../utils/misc/costUtils";
import {
  formatDecimal,
  flipUiArrowsForRtl,
} from "../utils/misc/formatUtils";
import { copyTextToClipboard } from "../utils/misc/clipboardUtils";
import { getTextDirection } from "ai-i18n-tools/runtime";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import {
  settingsDataTable as tbl,
  settingsDataTableCard as costCard,
} from "./settings/settingsTableClasses";
import { settingsSection, settingsTabContent } from "./settings/settingsLayoutClasses";

const isWeb = typeof window !== "undefined" && !window.electronAPI?.getConfig;

const SettingsCostTrackingTab = ({
  localSettings,
  onSettingChange,
  isTabActive,
}) => {
  const { t, i18n } = useTranslation();
  const locale = i18n.language || "en-GB";
  const isRtl = getTextDirection(i18n.language) === "rtl";
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

  const canUseOpenRouterKeyInfo =
    isWeb || !!localSettings.openrouter_api_key_configured;

  const fetchKeyInfo = async () => {
    if (!canUseOpenRouterKeyInfo) {
      setKeyInfo(null);
      setKeyInfoError(t("API key usage from OpenRouter is not available. Add an OpenRouter API key in Settings → API."));
      setKeyInfoLoading(false);
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
      if (thisId === keyRefreshIdRef.current) setKeyInfoLoading(false);
    }
  };

  useEffect(() => {
    fetchKeyInfo();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [canUseOpenRouterKeyInfo, isWeb, localSettings.openrouter_api_key_configured, isTabActive]);

  const keyUsageDisplay = useMemo(() => {
    if (keyInfoLoading) return t("Loading…");
    if (keyInfoError) return flipUiArrowsForRtl(keyInfoError, isRtl);
    if (!keyInfo) return "-";
    const usage =
      keyInfo.usage ??
      (keyInfo.limit != null && keyInfo.limit_remaining != null
        ? keyInfo.limit - keyInfo.limit_remaining
        : null);
    const hasUsage = usage != null && !Number.isNaN(Number(usage));
    if (!hasUsage && keyInfo.limit == null) return t("no limit configured");
    return { usage, hasLimit: keyInfo.limit != null, limit: keyInfo.limit, limitReset: keyInfo.limit_reset };
  }, [keyInfoLoading, keyInfoError, keyInfo, t, isRtl]);

  const costApi = getCostApi();
  useEffect(() => {
    if (!costApi.getSummaryByFunction) return;
    setLoading(true);
    costApi.getSummaryByFunction(null, null)
      .then((a) => setByFunction(Array.isArray(a) ? a : []))
      .catch(() => setByFunction([]))
      .finally(() => setLoading(false));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isTabActive]);

  const handleCopyCost = async () => {
    const cost = formatDecimal(parseFloat(localSettings.total_cost || 0), locale, { minimumFractionDigits: 6, maximumFractionDigits: 6 });
    try {
      await copyTextToClipboard(cost);
    } catch {
      /* clipboard unavailable or denied */
    }
  };

  const handleSyncWithKeyUsage = () => {
    setSyncCostError(null);
    if (!keyInfo) { setSyncCostError(t("No key usage available")); return; }
    const usage =
      keyInfo.usage ??
      (keyInfo.limit != null && keyInfo.limit_remaining != null ? keyInfo.limit - keyInfo.limit_remaining : null);
    if (usage == null || Number.isNaN(Number(usage))) { setSyncCostError(t("No key usage available")); return; }
    onSettingChange("total_cost", usage);
  };

  const emptyRow = (colSpan) => (
    <tr><td colSpan={colSpan} className={tbl.emptyRow}>{t("(no information available)")}</td></tr>
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
        try { const rows = await costApi.getSummaryByFunction(null, null); setByFunction(Array.isArray(rows) ? rows : []); } catch { /* ignore */ }
      }
      if (typeof costApi.getTotalCostFromDatabase === "function") {
        try {
          const data = await costApi.getTotalCostFromDatabase();
          if (data && typeof data.total_cost === "number") onSettingChange("total_cost", data.total_cost);
        } catch { /* ignore */ }
      }
      setDeleteSuccess(t("Cost data deleted successfully."));
    } catch (err) {
      setDeleteError(err?.message || t("Failed to delete cost data."));
    } finally {
      setDeleteLoading(false);
    }
  };

  const deleteConfirmTitle = deleteRange === "all" ? t("Delete all cost data") : t("Delete cost data by age");
  const deleteConfirmMessage =
    deleteRange === "all"
      ? t("Permanently delete ALL cost tracking data?\n\nThis cannot be undone.")
      : t("Permanently delete cost tracking data older than {{range}}?\n\nThis cannot be undone.", {
          range: (deleteRangeOptions.find((o) => o.value === deleteRange)?.label ?? "").replace(/^>\s*/, "") || "",
        });

  return (
    <div className={settingsTabContent}>
      <div className={settingsSection}>
        <h3 className="flex items-center gap-2 text-base font-semibold mt-0 mb-9">
          <DollarSign size={18} />
          {t("Cost Tracking")}
        </h3>
        <div className="flex items-center ms-4 sm:ms-16 mt-3 gap-4 flex-wrap">
          <div className="flex items-center gap-2">
            <span className="text-base font-semibold">{t("Total Cost:")}</span>
            <span className="text-base text-green-400 whitespace-nowrap">
              {formatCost(localSettings.total_cost, costFractionStyle, locale)}
            </span>
          </div>
          <div className="flex items-center gap-2 flex-wrap">
            <Button variant="outline" size="sm" onClick={handleCopyCost}>
              <Copy size={13} />{t("Copy Value")}
            </Button>
            <Button variant="outline" size="sm" onClick={() => onSettingChange("total_cost", 0)}>
              {t("Reset Cost")}
            </Button>
            {canUseOpenRouterKeyInfo && (
              <Button
                variant="outline"
                size="sm"
                onClick={handleSyncWithKeyUsage}
                disabled={
                  keyInfoLoading ||
                  !keyInfo ||
                  (keyInfo.usage == null && (keyInfo.limit == null || keyInfo.limit_remaining == null))
                }
              >
                <Server size={13} />{t("Sync with API key usage")}
              </Button>
            )}
            {syncCostError && <span className="text-red-400 text-xs">{syncCostError}</span>}
          </div>
        </div>
        <div className="flex items-center gap-2 flex-wrap mt-4 ms-2 sm:ms-8">
          <span className="text-base font-semibold">{t("API Key Usage")}:</span>
          <span className={`text-base whitespace-nowrap ${keyInfoError ? "text-red-400" : "text-foreground"}`}>
            {typeof keyUsageDisplay === "string" ? (
              keyUsageDisplay
            ) : keyUsageDisplay && keyUsageDisplay.usage != null ? (
              <>
                <span className="text-green-400">{formatCost(keyUsageDisplay.usage, costFractionStyle, locale)}</span>
                {keyUsageDisplay.hasLimit ? (
                  <>
                    {" / "}
                    <span className="text-green-400">
                      ${formatDecimal(keyUsageDisplay.limit, locale, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </span>
                    {keyUsageDisplay.limitReset == null
                      ? t("(no reset interval)")
                      : ` ${t("(reset interval: {{when}})", { when: t(keyUsageDisplay.limitReset) })}`}
                  </>
                ) : " "}
              </>
            ) : "-"}
          </span>
          <Button variant="ghost" size="icon-sm" onClick={fetchKeyInfo} title={t("Refresh API key usage")}>
            <RotateCcw size={13} />
          </Button>
          <span className="text-xs text-muted-foreground italic">
            {t("Usage updates may have a short delay (15s to 1min), even after refreshing.")}
          </span>
        </div>
      </div>

      {loading ? (
        <p className="mt-4">{t("Loading summaries…")}</p>
      ) : (
        <div className={cn(settingsSection, "mt-6")}>
          <div className="ms-2 sm:ms-8">
            <h4 className="text-sm font-semibold mt-0 mb-1">{t("By function")}</h4>
            {(() => {
              const dataRows = byFunction.filter((r) => r.function !== "Total");
              const totalRow = byFunction.find((r) => r.function === "Total");
              const hasNoData = dataRows.length === 0 && !totalRow;
              return (
                <>
                  <div className={costCard.list}>
                    {hasNoData ? (
                      <div className={costCard.empty}>{t("(no information available)")}</div>
                    ) : (
                      <>
                        {dataRows.map((row, i) => (
                          <div key={i} className={costCard.card}>
                            <div className={costCard.title}>{row.function}</div>
                            <div className={costCard.metricGrid}>
                              <div className={costCard.metricCell}>
                                <span className={costCard.metricLabel}>{t("Calls")}</span>
                                <div className={costCard.metricValue}>{formatCount(row.calls, locale)}</div>
                              </div>
                              <div className={costCard.metricCell}>
                                <span className={costCard.metricLabel}>{t("Cost")}</span>
                                <div className={costCard.metricValue}>{formatCost(row.cost, costFractionStyle, locale)}</div>
                              </div>
                              <div className={costCard.metricCell}>
                                <span className={costCard.metricLabel}>{t("Avg cost")}</span>
                                <div className={costCard.metricValue}>{formatAvgCost(Number(row.cost || 0), row.calls ?? 0, costFractionStyle, locale)}</div>
                              </div>
                            </div>
                          </div>
                        ))}
                        {totalRow && (() => {
                          const calls = totalRow.calls ?? 0;
                          return (
                            <div className={costCard.cardTotal}>
                              <div className={costCard.title}>{t("Total")}</div>
                              <div className={costCard.metricGrid}>
                                <div className={costCard.metricCell}>
                                  <span className={costCard.metricLabel}>{t("Calls")}</span>
                                  <div className={costCard.metricValue}>{formatCount(calls, locale)}</div>
                                </div>
                                <div className={costCard.metricCell}>
                                  <span className={costCard.metricLabel}>{t("Cost")}</span>
                                  <div className={costCard.metricValue}>{formatCost(totalRow.cost, costFractionStyle, locale)}</div>
                                </div>
                                <div className={costCard.metricCell}>
                                  <span className={costCard.metricLabel}>{t("Avg cost")}</span>
                                  <div className={costCard.metricValue}>{formatAvgCost(Number(totalRow.cost || 0), calls, costFractionStyle, locale)}</div>
                                </div>
                              </div>
                            </div>
                          );
                        })()}
                      </>
                    )}
                  </div>
                  <div className="hidden sm:block">
                    <div className={tbl.wrap}>
                      <table className={tbl.table}>
                        <thead className={tbl.thead}>
                          <tr>
                            <th className={tbl.th}>{t("Function")}</th>
                            <th className={tbl.th}>{t("Calls")}</th>
                            <th className={tbl.th}>{t("Cost")}</th>
                            <th className={tbl.th}>{t("Avg cost")}</th>
                          </tr>
                        </thead>
                        <tbody>
                          {dataRows.length === 0
                            ? emptyRow(4)
                            : dataRows.map((row, i) => (
                                <tr key={i} className={tbl.tbodyTr}>
                                  <td className={tbl.td}>{row.function}</td>
                                  <td className={`${tbl.td} ${tbl.tdValue}`}>{formatCount(row.calls, locale)}</td>
                                  <td className={`${tbl.td} ${tbl.tdValue}`}>{formatCost(row.cost, costFractionStyle, locale)}</td>
                                  <td className={`${tbl.td} ${tbl.tdValue}`}>{formatAvgCost(Number(row.cost || 0), row.calls ?? 0, costFractionStyle, locale)}</td>
                                </tr>
                              ))}
                          {totalRow && (() => {
                            const calls = totalRow.calls ?? 0;
                            return (
                              <tr className={tbl.totalRow} key="total">
                                <td className={tbl.td}><strong>{t("Total")}</strong></td>
                                <td className={`${tbl.td} ${tbl.tdValue}`}>{formatCount(calls, locale)}</td>
                                <td className={`${tbl.td} ${tbl.tdValue}`}>{formatCost(totalRow.cost, costFractionStyle, locale)}</td>
                                <td className={`${tbl.td} ${tbl.tdValue}`}>{formatAvgCost(Number(totalRow.cost || 0), calls, costFractionStyle, locale)}</td>
                              </tr>
                            );
                          })()}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </>
              );
            })()}
          </div>
        </div>
      )}

      <div className={cn(settingsSection, "mt-6")}>
        <h3 className="flex items-center gap-2 text-base font-semibold mt-0 mb-9">
          <Trash2 size={18} />
          {t("Delete cost data")}
        </h3>
        <div className="flex flex-col gap-2 ms-4 sm:ms-16 mt-3">
          <div className="flex items-center gap-3 flex-wrap">
            <span className="text-sm">{t("Delete entries older than:")}</span>
            <Select value={deleteRange} onValueChange={setDeleteRange}>
              <SelectTrigger className="min-w-[180px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {deleteRangeOptions.map((opt) => (
                  <SelectItem key={opt.value} value={opt.value}>{opt.label}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Button variant="destructive" size="sm" disabled={deleteLoading} onClick={() => setShowDeleteConfirm(true)}>
              {deleteLoading ? t("Deleting…") : t("Delete data")}
            </Button>
          </div>
          {deleteError && <span className="text-red-400 text-xs">{deleteError}</span>}
          {deleteSuccess && <span className="text-green-400 text-xs">{deleteSuccess}</span>}
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

SettingsCostTrackingTab.propTypes = {
  localSettings: PropTypes.shape({
    openrouter_api_key_configured: PropTypes.bool,
    total_cost: PropTypes.number,
    cost_fraction_style: PropTypes.string,
  }).isRequired,
  onSettingChange: PropTypes.func.isRequired,
  isTabActive: PropTypes.bool,
};

export default SettingsCostTrackingTab;
