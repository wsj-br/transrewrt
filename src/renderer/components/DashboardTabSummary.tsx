import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";
import { formatDecimal } from "../utils/misc/formatUtils";
import {
  formatCost,
  formatCount,
  formatAvgTps,
  DASH,
} from "../utils/misc/costUtils";
import { modelFooterDisplayId } from "../utils/misc/modelIdUtils";
import { SOURCE_LOCALE } from "../i18n";

function formatCallsSharePct(calls, totalCalls, locale) {
  const n = Number(calls) || 0;
  const t = Number(totalCalls) || 0;
  if (t <= 0) return null;
  const pct = (n / t) * 100;
  return `${formatDecimal(pct, locale, { minimumFractionDigits: 1, maximumFractionDigits: 1 })}%`;
}

function totalCallsForModelRow(row) {
  return (
    (Number(row.translation_calls) || 0) +
    (Number(row.rewrite_calls) || 0) +
    (Number(row.transform_calls) || 0)
  );
}

function ModeUsageValue({
  calls,
  cost,
  pct,
  locale,
  costFractionStyle,
}) {
  return (
    <div className="flex w-full min-w-0 items-center justify-between gap-2">
      <span className="min-w-0 flex-1 break-words leading-snug [&_sup]:inline [&_sub]:inline">
        <span className="tabular-nums">{formatCount(calls, locale)}</span>
        {" / "}
        <span className="inline-flex items-baseline">{formatCost(cost, costFractionStyle, locale)}</span>
      </span>
      {pct != null ? (
        <span className="shrink-0 tabular-nums text-muted-foreground">{pct}</span>
      ) : null}
    </div>
  );
}

function TopModelValue({
  fullModelId,
  calls,
  pctStr,
  locale,
}) {
  const shortName = modelFooterDisplayId(fullModelId);
  return (
    <div className="flex w-full min-w-0 items-start justify-between gap-2">
      <span className="min-w-0 flex-1 break-words leading-snug">
        {shortName || fullModelId}
      </span>
      <span className="shrink-0 text-end tabular-nums text-muted-foreground leading-snug">
        {formatCount(calls, locale)} / {pctStr ?? DASH}
      </span>
    </div>
  );
}

export default function DashboardTabSummary({
  loading,
  byFunction,
  byModel,
  settings,
  costFractionStyle,
  styles,
}) {
  const { t, i18n } = useTranslation();
  const locale = i18n.language || SOURCE_LOCALE;

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

  const translatePct = formatCallsSharePct(translateRow?.calls, totalCalls, locale);
  const rewritePct = formatCallsSharePct(rewriteRow?.calls, totalCalls, locale);
  const transformPct = formatCallsSharePct(transformRow?.calls, totalCalls, locale);

  const rankModelLabels = [t("#1 Model"), t("#2 Model"), t("#3 Model")];
  const topModelsByCalls = [...byModel]
    .filter((r) => r.model && r.model !== "Total")
    .map((row) => ({ row, calls: totalCallsForModelRow(row) }))
    .filter(({ calls }) => calls > 0)
    .sort((a, b) => b.calls - a.calls)
    .slice(0, 3);

  const topModelSlot = (idx) => {
    const entry = topModelsByCalls[idx];
    if (!entry) {
      return {
        key: `top-model-empty-${idx}`,
        label: rankModelLabels[idx],
        value: <span className="text-muted-foreground">{DASH}</span>,
      };
    }
    const { row, calls } = entry;
    const pctStr = formatCallsSharePct(calls, totalCalls, locale);
    return {
      key: `top-model-${idx}-${String(row.model)}`,
      label: rankModelLabels[idx],
      value: (
        <TopModelValue
          fullModelId={row.model}
          calls={calls}
          pctStr={pctStr}
          locale={locale}
        />
      ),
    };
  };

  // Row-major 2-column grid: col1 then col2 per row (see grid grid-cols-2).
  // Col1: Total Cost, Models used, Translation, Rewrite, Transform
  // Col2: Avg cost per call, Avg TPS, #1–#3 Model
  const cards = [
    {
      label: t("Total Cost"),
      value: formatCost(settings?.total_cost ?? 0, costFractionStyle, locale),
    },
    {
      label: t("Avg cost per call"),
      value: avgCostPerCall != null
        ? formatCost(avgCostPerCall, costFractionStyle, locale)
        : DASH,
    },
    {
      label: t("Models used"),
      value: formatCount(modelCount, locale),
    },
    {
      label: t("Avg TPS"),
      value: formatAvgTps(totalAvgTps, locale),
    },
    {
      label: t("Translation"),
      value: (
        <ModeUsageValue
          calls={translateRow?.calls}
          cost={translateRow?.cost}
          pct={translatePct}
          locale={locale}
          costFractionStyle={costFractionStyle}
        />
      ),
    },
    topModelSlot(0),
    {
      label: t("Rewrite"),
      value: (
        <ModeUsageValue
          calls={rewriteRow?.calls}
          cost={rewriteRow?.cost}
          pct={rewritePct}
          locale={locale}
          costFractionStyle={costFractionStyle}
        />
      ),
    },
    topModelSlot(1),
    {
      label: t("Transform"),
      value: (
        <ModeUsageValue
          calls={transformRow?.calls}
          cost={transformRow?.cost}
          pct={transformPct}
          locale={locale}
          costFractionStyle={costFractionStyle}
        />
      ),
    },
    topModelSlot(2),
  ];

  return (
    <div
      role="tabpanel"
      aria-label={t("Summary")}
      className={styles.summaryTabPanel}
      data-testid="dashboard-tabpanel-summary"
    >
      <div className="grid grid-cols-2 gap-3 p-1 pt-3">
        {cards.map((card) => (
          <div key={"key" in card && card.key ? card.key : card.label} className={styles.summaryKpiCard}>
            <div className={styles.summaryKpiLabel}>{card.label}</div>
            <div className={`${styles.summaryKpiValue} w-full min-w-0`}>{card.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

DashboardTabSummary.propTypes = {
  loading: PropTypes.bool.isRequired,
  byFunction: PropTypes.arrayOf(PropTypes.object).isRequired,
  byModel: PropTypes.arrayOf(PropTypes.object).isRequired,
  settings: PropTypes.object,
  costFractionStyle: PropTypes.string.isRequired,
  styles: PropTypes.object.isRequired,
};
