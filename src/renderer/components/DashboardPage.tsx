import { useState, useEffect, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { getFilters } from "../utils/misc/costUtils";
import { getCostApi, getFilterRange } from "../utils/misc/costUtils";
import { useAppContext } from "../contexts/AppContext";
import { styles } from "./dashboard/dashboardPageStyles";
import ConfirmModal from "./ConfirmModal";
import DashboardTabSummary from "./DashboardTabSummary";
import DashboardTabByModel from "./DashboardTabByModel";
import DashboardTabAllCalls from "./DashboardTabAllCalls";
import webAPI from "../utils/api/webApiClient";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

const PAGE_SIZES = [10, 20, 50, 100];
const isWeb = typeof window !== "undefined" && !window.electronAPI?.getConfig;

/** First activation of a text-heavy All Calls column sorts A→Z / oldest first; numeric columns default high→low. */
function defaultAllCallsSortDir(columnKey) {
  if (columnKey === "timestamp" || columnKey === "type" || columnKey === "username" || columnKey === "model") {
    return "asc";
  }
  return "desc";
}

/** Matches Tailwind `sm` (640px): mobile card layouts use page scroll under the dashboard header. */
function useIsBelowSm() {
  const [below, setBelow] = useState(() =>
    typeof window !== "undefined" ? window.matchMedia("(max-width: 639px)").matches : false,
  );
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 639px)");
    const onChange = () => setBelow(mq.matches);
    onChange();
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);
  return below;
}

const DashboardPage = () => {
  const { t } = useTranslation();
  const { settings, setSetting, currentUser } = useAppContext();
  const costFractionStyle = settings?.cost_fraction_style || "muted";

  const [selectedTab, setSelectedTab] = useState("summary");
  const [filter, setFilter] = useState("all");
  const [userFilter, setUserFilter] = useState("");
  const [userList, setUserList] = useState([]);
  const isAdmin = currentUser?.role === "admin";
  const dashboardUsername = isWeb && !isAdmin ? (currentUser?.username || null) : (userFilter || null);
  const [byFunction, setByFunction] = useState([]);
  const [byModel, setByModel] = useState([]);
  const [loading, setLoading] = useState(false);

  const [allCallsPage, setAllCallsPage] = useState(1);
  const allCallsPageSize = (() => {
    const v = Number(settings.all_calls_page_size);
    return PAGE_SIZES.includes(v) ? v : 10;
  })();
  const [allCallsRows, setAllCallsRows] = useState([]);
  const [allCallsTotal, setAllCallsTotal] = useState(0);
  const [allCallsLoading, setAllCallsLoading] = useState(false);
  const [allCallsSort, setAllCallsSort] = useState({ key: "id", dir: "desc" });

  const [modelToDelete, setModelToDelete] = useState(null);
  const [deleteByModelError, setDeleteByModelError] = useState(null);

  const isCardLayout = useIsBelowSm();

  const costApi = getCostApi();

  useEffect(() => {
    if (!isWeb || !isAdmin || !webAPI.getUsers) return;
    webAPI.getUsers().then((list) => setUserList(Array.isArray(list) ? list : [])).catch(() => setUserList([]));
  }, [isAdmin]);

  const loadSummaries = useCallback(() => {
    if (!costApi.getSummaryByFunction) return;
    const { from, to } = getFilterRange(filter);
    const username = dashboardUsername || undefined;
    setLoading(true);
    Promise.all([
      costApi.getSummaryByFunction(from, to, username),
      costApi.getSummaryByModel(from, to, username),
    ])
      .then(([a, b]) => {
        setByFunction(Array.isArray(a) ? a : []);
        setByModel(Array.isArray(b) ? b : []);
      })
      .catch(() => {
        setByFunction([]);
        setByModel([]);
      })
      .finally(() => setLoading(false));
  }, [filter, costApi, dashboardUsername]);

  useEffect(() => {
    queueMicrotask(() => loadSummaries());
  }, [loadSummaries]);

  const loadAllCalls = useCallback(() => {
    if (!costApi.getAllCalls) return;
    const { from, to } = getFilterRange(filter);
    const username = dashboardUsername || undefined;
    setAllCallsLoading(true);
    const api = costApi;
    const promise =
      typeof api.getAllCalls === "function"
        ? api.getAllCalls(from, to, allCallsPage, allCallsPageSize, username, allCallsSort.key, allCallsSort.dir)
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
  }, [filter, allCallsPage, allCallsPageSize, costApi, dashboardUsername, allCallsSort.key, allCallsSort.dir]);

  const onAllCallsSortColumn = useCallback((columnKey) => {
    setAllCallsSort((prev) => {
      if (prev.key !== columnKey) {
        return { key: columnKey, dir: defaultAllCallsSortDir(columnKey) };
      }
      return { key: columnKey, dir: prev.dir === "asc" ? "desc" : "asc" };
    });
    setAllCallsPage(1);
  }, []);

  const getExportAllCalls = useCallback(() => {
    if (typeof costApi.getAllCallsExport !== "function") return Promise.resolve([]);
    const { from, to } = getFilterRange(filter);
    const username = dashboardUsername || undefined;
    return Promise.resolve(costApi.getAllCallsExport(from, to, username)).then((rows) => rows ?? []);
  }, [filter, costApi, dashboardUsername]);

  useEffect(() => {
    if (selectedTab === "allcalls") {
      queueMicrotask(() => loadAllCalls());
    }
  }, [selectedTab, loadAllCalls]);

  const handleConfirmDeleteByModel = async () => {
    if (!modelToDelete) return;
    setDeleteByModelError(null);
    if (!costApi.deleteCallsByModel) return;
    try {
      await costApi.deleteCallsByModel(modelToDelete);
      setModelToDelete(null);
      loadSummaries();
    } catch (err) {
      setDeleteByModelError(err?.message || t("Failed to delete data"));
    }
  };

  const tabPanelClass =
    selectedTab === "allcalls"
      ? isCardLayout
        ? `${styles.tabPanelCardLayout} ${styles.tabPanelAllCallsCardLayout}`
        : `${styles.tabPanel} ${styles.tabPanelAllCalls}`
      : isCardLayout
        ? styles.tabPanelCardLayout
        : styles.tabPanel;

  return (
    <div className={isCardLayout ? "flex flex-col w-full min-w-0" : styles.root}>
      <div className="flex flex-wrap items-center gap-2 mb-5" data-testid="dashboard-filter-row">
        <span className="text-sm font-medium text-muted-foreground me-1">{t("Filter")}</span>
        {getFilters(t).map((f) => (
          <Button
            key={f.id}
            size="sm"
            variant={filter === f.id ? "default" : "outline"}
            onClick={() => setFilter(f.id)}
          >
            {f.label}
          </Button>
        ))}
        {isWeb && isAdmin && userList.length > 0 && (
          <>
            <span className="text-sm font-medium text-muted-foreground ms-2 me-1">{t("User")}</span>
            <Select
              value={userFilter === "" ? "__all__" : userFilter}
              onValueChange={(v) => setUserFilter(v === "__all__" ? "" : v)}
            >
              <SelectTrigger className="min-w-[140px] h-8 text-sm">
                <SelectValue placeholder={t("All users")} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="__all__">{t("All users")}</SelectItem>
                {userList.filter((u) => u.username).map((u) => (
                  <SelectItem key={u.id} value={u.username}>
                    {u.username}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </>
        )}
      </div>

      <div className="flex items-stretch border-b border-border shrink-0 mb-0" role="tablist">
        {[
          { id: "summary", label: t("Summary"), testId: "dashboard-tab-summary" },
          { id: "bymodel", label: t("By Model") },
          { id: "allcalls", label: t("All Calls") },
        ].map(({ id, label, testId }) => (
          <button
            key={id}
            type="button"
            role="tab"
            aria-selected={selectedTab === id}
            data-testid={testId}
            className={cn(
              "px-4 h-10 text-sm font-medium whitespace-nowrap border-b-2 transition-colors",
              selectedTab === id
                ? "border-foreground text-foreground"
                : "border-transparent text-muted-foreground hover:text-foreground"
            )}
            onClick={() => setSelectedTab(id)}
          >
            {label}
          </button>
        ))}
      </div>

      <div className={tabPanelClass}>
        {selectedTab === "summary" && (
          <DashboardTabSummary
            loading={loading}
            byFunction={byFunction}
            byModel={byModel}
            settings={settings}
            costFractionStyle={costFractionStyle}
            styles={styles}
          />
        )}
        {selectedTab === "bymodel" && (
          <DashboardTabByModel
            loading={loading}
            byModel={byModel}
            costFractionStyle={costFractionStyle}
            styles={styles}
            setModelToDelete={setModelToDelete}
          />
        )}
        {selectedTab === "allcalls" && (
          <DashboardTabAllCalls
            allCallsPage={allCallsPage}
            setAllCallsPage={setAllCallsPage}
            allCallsPageSize={allCallsPageSize}
            allCallsRows={allCallsRows}
            allCallsTotal={allCallsTotal}
            allCallsLoading={allCallsLoading}
            allCallsSort={allCallsSort}
            onAllCallsSortColumn={onAllCallsSortColumn}
            costFractionStyle={costFractionStyle}
            styles={styles}
            setModelToDelete={setModelToDelete}
            setSetting={setSetting}
            getExportAllCalls={getExportAllCalls}
            isCardLayout={isCardLayout}
          />
        )}
      </div>

      {modelToDelete != null && (
        <ConfirmModal
          title={t("Exclude all data for this model")}
          message={
            deleteByModelError
              ? t("Something went wrong: {{error}}", { error: deleteByModelError })
              : t('Delete all API call records for model "{{model}}"?\n\nThis cannot be undone.', {
                  model: modelToDelete,
                })
          }
          confirmLabel={t("Delete")}
          cancelLabel={t("Cancel")}
          onConfirm={handleConfirmDeleteByModel}
          onCancel={() => {
            setModelToDelete(null);
            setDeleteByModelError(null);
          }}
          danger
        />
      )}
    </div>
  );
};

export default DashboardPage;
