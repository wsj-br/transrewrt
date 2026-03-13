import { useState, useEffect, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { Button, TabList, Tab, Label, Dropdown, Option } from "@fluentui/react-components";
import { getCostApi, getFilterRange, getFilters } from "../utils/misc/costUtils";
import { useAppContext } from "../contexts/AppContext";
import { interpolateTemplate } from "../utils/misc/formatUtils";
import { useStyles } from "./DashboardPage-styles";
import ConfirmModal from "./ConfirmModal";
import DashboardTabSummary from "./DashboardTabSummary";
import DashboardTabByUsage from "./DashboardTabByUsage";
import DashboardTabByModel from "./DashboardTabByModel";
import DashboardTabByDay from "./DashboardTabByDay";
import DashboardTabAllCalls from "./DashboardTabAllCalls";
import webAPI from "../utils/api/webApiClient";

const PAGE_SIZES = [10, 20, 50, 100];
const isWeb = typeof window !== "undefined" && !window.electronAPI?.getConfig;

const DashboardPage = () => {
  const styles = useStyles();
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
  const [byDay, setByDay] = useState([]);
  const [byTargetLang, setByTargetLang] = useState([]);
  const [byRewriteStyle, setByRewriteStyle] = useState([]);
  const [byTransformPrompt, setByTransformPrompt] = useState([]);
  const [loading, setLoading] = useState(false);

  const [allCallsPage, setAllCallsPage] = useState(1);
  const allCallsPageSize = (() => {
    const v = Number(settings.all_calls_page_size);
    return PAGE_SIZES.includes(v) ? v : 10;
  })();
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

  useEffect(() => {
    if (!isWeb || !isAdmin || !webAPI.getUsers) return;
    webAPI.getUsers().then((list) => setUserList(Array.isArray(list) ? list : [])).catch(() => setUserList([]));
  }, [isAdmin]);

  /** Maps API function key (translate/rewrite/transform) to translated label for charts/tooltips. */
  const getUsageTypeLabel = (fn) => {
    if (fn === "translate") return t("Translation");
    if (fn === "rewrite") return t("Rewrite");
    if (fn === "transform") return t("Transform");
    if (fn === "translate-prompt") return t("Translate prompt");
    return fn ?? "";
  };

  const loadSummaries = useCallback(() => {
    if (!costApi.getSummaryByFunction) return;
    const { from, to } = getFilterRange(filter);
    const username = dashboardUsername || undefined;
    setLoading(true);
    const targetLangPromise = costApi.getSummaryByTargetLang ? costApi.getSummaryByTargetLang(from, to, username) : Promise.resolve([]);
    const rewriteStylePromise = costApi.getSummaryByRewriteStyle ? costApi.getSummaryByRewriteStyle(from, to, username) : Promise.resolve([]);
    const transformPromptPromise = costApi.getSummaryByTransformPrompt ? costApi.getSummaryByTransformPrompt(from, to, username) : Promise.resolve([]);
    Promise.all([
      costApi.getSummaryByFunction(from, to, username),
      costApi.getSummaryByModel(from, to, username),
      costApi.getSummaryByDay(from, to, username),
      targetLangPromise,
      rewriteStylePromise,
      transformPromptPromise,
    ])
      .then(([a, b, c, d, e, f]) => {
        setByFunction(Array.isArray(a) ? a : []);
        setByModel(Array.isArray(b) ? b : []);
        setByDay(Array.isArray(c) ? c : []);
        setByTargetLang(Array.isArray(d) ? d : []);
        setByRewriteStyle(Array.isArray(e) ? e : []);
        setByTransformPrompt(Array.isArray(f) ? f : (f?.rows ?? []));
      })
      .catch(() => {
        setByFunction([]);
        setByModel([]);
        setByDay([]);
        setByTargetLang([]);
        setByRewriteStyle([]);
        setByTransformPrompt([]);
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
        ? api.getAllCalls(from, to, allCallsPage, allCallsPageSize, username)
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
  }, [filter, allCallsPage, allCallsPageSize, costApi, dashboardUsername]);

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

  const loadByDayPaginated = useCallback(() => {
    if (!costApi.getSummaryByDayPaginated) return;
    const { from, to } = getFilterRange(filter);
    const username = dashboardUsername || undefined;
    setByDayPaginatedLoading(true);
    const api = costApi;
    const promise =
      typeof api.getSummaryByDayPaginated === "function"
        ? api.getSummaryByDayPaginated(from, to, byDayPage, byDayPageSize, username)
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
  }, [filter, byDayPage, byDayPageSize, costApi, dashboardUsername]);

  useEffect(() => {
    if (selectedTab === "byday") {
      queueMicrotask(() => loadByDayPaginated());
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
      setDeleteByModelError(err?.message || t("Failed to delete data"));
    }
  };

  const emptyRow = (colSpan) => (
    <tr>
      <td colSpan={colSpan} className={styles.emptyRow}>
        {t("(no information available)")}
      </td>
    </tr>
  );

  return (
    <div className={styles.root}>
      <div className={styles.filterRow}>
        <Label style={{ marginRight: "8px" }}>{t("Filter")}</Label>
        {getFilters(t).map((f) => (
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
        {isWeb && isAdmin && userList.length > 0 && (
          <>
            <Label style={{ marginLeft: "16px", marginRight: "8px" }}>{t("User")}</Label>
            <Dropdown
              value={userFilter === "" ? t("All users") : userFilter}
              selectedOptions={[userFilter]}
              onOptionSelect={(_, data) => setUserFilter(data.optionValue ?? "")}
              style={{ minWidth: "140px" }}
            >
              <Option value="">{t("All users")}</Option>
              {userList.map((u) => (
                <Option key={u.id} value={u.username || ""}>
                  {u.username}
                </Option>
              ))}
            </Dropdown>
          </>
        )}
      </div>

      <TabList
        selectedValue={selectedTab}
        onTabSelect={(_, data) => setSelectedTab(data.value)}
      >
        <Tab value="summary">{t("Summary")}</Tab>
        <Tab value="byusage">{t("By Usage")}</Tab>
        <Tab value="bymodel">{t("By Model")}</Tab>
        <Tab value="byday">{t("By Day")}</Tab>
        <Tab value="allcalls">{t("All Calls")}</Tab>
      </TabList>

      <div
        className={
          selectedTab === "allcalls"
            ? `${styles.tabPanel} ${styles.tabPanelAllCalls}`
            : styles.tabPanel
        }
      >
        {selectedTab === "summary" && (
          <DashboardTabSummary
            loading={loading}
            byFunction={byFunction}
            byDay={byDay}
            byModel={byModel}
            settings={settings}
            costFractionStyle={costFractionStyle}
            styles={styles}
            getUsageTypeLabel={getUsageTypeLabel}
          />
        )}
        {selectedTab === "byusage" && (
          <DashboardTabByUsage
            loading={loading}
            byTargetLang={byTargetLang}
            byRewriteStyle={byRewriteStyle}
            byTransformPrompt={byTransformPrompt}
            styles={styles}
          />
        )}
        {selectedTab === "bymodel" && (
          <DashboardTabByModel
            loading={loading}
            byModel={byModel}
            costFractionStyle={costFractionStyle}
            styles={styles}
            emptyRow={emptyRow}
            setModelToDelete={setModelToDelete}
          />
        )}
        {selectedTab === "byday" && (
          <DashboardTabByDay
            loading={loading}
            byDay={byDay}
            byDayPage={byDayPage}
            setByDayPage={setByDayPage}
            byDayPageSize={byDayPageSize}
            setByDayPageSize={setByDayPageSize}
            byDayPaginatedRows={byDayPaginatedRows}
            byDayPaginatedTotal={byDayPaginatedTotal}
            byDayPaginatedLoading={byDayPaginatedLoading}
            costFractionStyle={costFractionStyle}
            styles={styles}
            emptyRow={emptyRow}
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
            costFractionStyle={costFractionStyle}
            styles={styles}
            setModelToDelete={setModelToDelete}
            setSetting={setSetting}
            getExportAllCalls={getExportAllCalls}
          />
        )}
      </div>

      {modelToDelete != null && (
        <ConfirmModal
          title={t("Exclude all data for this model")}
          message={
            deleteByModelError
              ? interpolateTemplate(t("Something went wrong: {{error}}"), { error: deleteByModelError })
              : interpolateTemplate(
                  t('Delete all API call records for model "{{model}}"?\n\nThis cannot be undone.'),
                  { model: modelToDelete }
                )
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
