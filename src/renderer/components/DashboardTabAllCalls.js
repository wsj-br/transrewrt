import React from "react";
import { useTranslation } from "react-i18next";
import {
  Button,
  Label,
  Dropdown,
  Option,
  Text,
  tokens,
} from "@fluentui/react-components";
import { ChevronLeft, ChevronRight, Trash2 } from "lucide-react";
import {
  formatInteger,
  formatDurationMs,
  interpolateTemplate,
} from "../utils/misc/formatUtils";
import {
  formatCost,
  formatAvgTps,
  DASH,
} from "../utils/misc/costUtils";

const PAGE_SIZES = [10, 20, 50, 100];

export default function DashboardTabAllCalls({
  allCallsPage,
  setAllCallsPage,
  allCallsPageSize,
  allCallsRows,
  allCallsTotal,
  allCallsLoading,
  costFractionStyle,
  styles,
  setModelToDelete,
  setSetting,
}) {
  const { t } = useTranslation();

  return (
    <div
      role="tabpanel"
      aria-label={t("All Calls")}
      className={styles.allCallsTabPanel}
    >
      <div className={styles.allCallsTabContent}>
        <Text as="h4" size={400} style={{ marginBottom: "4px" }}>
          {t("All API calls (raw data)")}
        </Text>
        <div className={styles.paginationRow}>
          <Label>{t("Rows per page")}</Label>
          <Dropdown
            value={String(allCallsPageSize)}
            selectedOptions={[String(allCallsPageSize)]}
            onOptionSelect={(_, data) => {
              const v = Number(data.optionValue);
              if (PAGE_SIZES.includes(v)) {
                setSetting("all_calls_page_size", v);
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
            {interpolateTemplate(t("{{count}} row(s) total"), {
              count: allCallsTotal,
            })}
          </span>
          <Button
            size="small"
            appearance="secondary"
            disabled={allCallsPage <= 1}
            onClick={() => setAllCallsPage((p) => Math.max(1, p - 1))}
            icon={<ChevronLeft size={16} />}
          >
            {t("Prev")}
          </Button>
          <span
            style={{
              color: tokens.colorNeutralForeground2,
              alignSelf: "center",
            }}
          >
            {interpolateTemplate(t("Page {{page}} of {{total}}"), {
              page: allCallsPage,
              total: Math.max(
                1,
                Math.ceil(allCallsTotal / allCallsPageSize)
              ),
            })}
          </span>
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
                  p + 1
                )
              )
            }
          >
            {t("Next")} <ChevronRight size={16} />
          </Button>
        </div>
        {allCallsLoading ? (
          <p>{t("Loading…")}</p>
        ) : (
          <div className={styles.refactoredTableWrapper}>
            <div className={styles.refactoredHeaderRow}>
              <div className={styles.refactoredHeaderCell}>{t("ID")}</div>
              <div className={styles.refactoredHeaderCell}>
                {t("Timestamp")}
              </div>
              <div className={styles.refactoredHeaderCell}>{t("Type")}</div>
              <div className={styles.refactoredHeaderCell}>{t("Model")}</div>
              <div className={styles.refactoredHeaderCell}>{t("Source")}</div>
              <div className={styles.refactoredHeaderCell}>{t("Target")}</div>
              <div className={styles.refactoredHeaderCell}>{t("Style")}</div>
              <div className={styles.refactoredHeaderCell}>
                {t("Transform prompt")}
              </div>
              <div
                className={`${styles.refactoredHeaderCell} ${styles.cellRight}`}
              >
                {t("Req bytes")}
              </div>
              <div
                className={`${styles.refactoredHeaderCell} ${styles.cellRight}`}
              >
                {t("Res bytes")}
              </div>
              <div className={styles.refactoredHeaderCell}>
                {t("Duration")}
              </div>
              <div className={styles.refactoredHeaderCell}>{t("Cost")}</div>
              <div
                className={`${styles.refactoredHeaderCell} ${styles.cellRight}`}
              >
                {t("TPS")}
              </div>
            </div>

            <div className={styles.refactoredBodyContainer}>
              {allCallsRows.length === 0 ? (
                <div
                  className={styles.emptyRow}
                  style={{
                    width: "100%",
                    padding: "20px",
                    boxSizing: "border-box",
                  }}
                >
                  {t("(no information available)")}
                </div>
              ) : (
                allCallsRows.map((row) => (
                  <div key={row.id} className={styles.refactoredBodyRow}>
                    <div
                      className={`${styles.refactoredCell} ${styles.tdValue}`}
                    >
                      {row.id}
                    </div>
                    <div className={styles.refactoredCell}>
                      {row.timestamp
                        ? new Date(row.timestamp).toLocaleString()
                        : DASH}
                    </div>
                    <div className={styles.refactoredCell}>
                      <span
                        className={`${styles.typeBadge} ${
                          row.type === "translate"
                            ? styles.typeTranslate
                            : row.type === "rewrite"
                            ? styles.typeRewrite
                            : styles.typeTransform
                        }`}
                      >
                        {row.type || DASH}
                      </span>
                    </div>
                    <div
                      className={styles.refactoredCell}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                      }}
                    >
                      <span
                        style={{
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                      >
                        {row.model ?? DASH}
                      </span>
                      {row.model && (
                        <Trash2
                          size={14}
                          className={styles.modelTrashIcon}
                          title={t("Exclude all data for this model")}
                          onClick={(e) => {
                            e.stopPropagation();
                            setModelToDelete(row.model);
                          }}
                        />
                      )}
                    </div>
                    <div className={styles.refactoredCell}>
                      {row.source_lang ?? DASH}
                    </div>
                    <div className={styles.refactoredCell}>
                      {row.target_lang ?? DASH}
                    </div>
                    <div className={styles.refactoredCell}>
                      {row.rewrite_style ?? DASH}
                    </div>
                    <div className={styles.refactoredCell}>
                      {row.transform_prompt ?? DASH}
                    </div>
                    <div
                      className={`${styles.refactoredCell} ${styles.tdValue} ${styles.cellRight}`}
                    >
                      {formatInteger(row.request_bytes)}
                    </div>
                    <div
                      className={`${styles.refactoredCell} ${styles.tdValue} ${styles.cellRight}`}
                    >
                      {formatInteger(row.response_bytes)}
                    </div>
                    <div
                      className={`${styles.refactoredCell} ${styles.tdValue}`}
                    >
                      {formatDurationMs(row.duration_ms)}
                    </div>
                    <div
                      className={`${styles.refactoredCell} ${styles.tdValue}`}
                    >
                      {formatCost(row.cost, costFractionStyle)}
                    </div>
                    <div
                      className={`${styles.refactoredCell} ${styles.tdValue} ${styles.cellRight}`}
                    >
                      {formatAvgTps(row.tps)}
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
