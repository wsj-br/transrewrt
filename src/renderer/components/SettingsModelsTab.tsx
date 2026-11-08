import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { formatDecimal } from '../utils/misc/formatUtils';
import { flipUiArrowsForRtl, getTextDirection } from "ai-i18n-tools/runtime";
import { SOURCE_LOCALE } from '../i18n';
import { filterEngineFromModelId, providerSortKeyFromModelId } from '../utils/misc/modelIdUtils';
import PropTypes from 'prop-types';
import {
  Cpu,
  WandSparkles,
  Package,
  Search,
  RefreshCw,
  X,
  Loader2,
  Layers,
} from 'lucide-react';
import ProviderIcon from './ProviderIcon';
import {
  isPricingKnown,
  isConfirmedFreeModel,
} from '../utils/misc/modelPricingUtils';
import { modelRouteBadgeProps } from '../utils/misc/modelRouteBadge';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import {
  modelsEmptyState,
  modelsEmptyStateError,
} from "./settings/settingsModelsLayoutClasses";
import SelectFromPresetsModal from "./SelectFromPresetsModal";
import { ScoreColumnHeader } from "./settings/ModelScoreStats";
import {
  EASY_ENGINE_IDS,
  EASY_PROVIDER_LABEL_KEYS,
  type EasyCloudEngineId,
} from "@/utils/presets/easyProviderConstants";
import {
  buildPresetProviderRows,
} from "@/utils/presets/resolveEasyPresetModel";
import {
  presetDisplayDescription,
  presetDisplayName,
} from "@/utils/presets/presetDisplay";
import type { Preset } from "@/utils/presets/presetsTypes";

const EASY_ENGINE_SET = new Set<string>(EASY_ENGINE_IDS);
const PRESET_SOURCE_LOCALE = SOURCE_LOCALE;

/** Preset card row label: catalog name when available, otherwise the model id tail. */
function presetModelLabel(
  modelId,
  allModels,
  getModelName,
) {
  const model = allModels.find((m) => m.id === modelId);
  if (model) return getModelName(model);
  const slash = modelId.lastIndexOf("/");
  if (slash >= 0) return modelId.slice(slash + 1);
  return modelId;
}

const SettingsModelsTab = ({
  allModels,
  selectedModelIds,
  searchTerm,
  filterEngine,
  engineFilterOptions,
  filterFree,
  sortBy,
  sortedModelsData,
  modelsLoading,
  modelsError,
  onSearchTermChange,
  onFilterEngineChange,
  onFilterFreeChange,
  onSortByChange,
  onRefreshModels,
  onToggleModelSelection,
  onDeselectAllModels,
  getModelName,
  modelScores = {},
  modelScoresLoading = false,
  modelScoresError = "",
  presets = [],
  configuredCloudEngines = [],
  onLoadPresetModels,
  experienceMode = "advanced",
  onExperienceModeChange,
}) => {
  const { t, i18n } = useTranslation();
  const locale = i18n.language || SOURCE_LOCALE;
  const isRtl = getTextDirection(i18n.language) === 'rtl';
  const isEasy = experienceMode !== "advanced";
  const [selectedOnly, setSelectedOnly] = useState(false);
  const [presetsModalOpen, setPresetsModalOpen] = useState(false);

  const sortOptions = useMemo(
    () => [
      { value: 'index-desc', label: flipUiArrowsForRtl(t('Index High to Low'), isRtl) },
      { value: 'cost-asc', label: flipUiArrowsForRtl(t('Cost Low to High'), isRtl) },
      { value: 'cost-desc', label: flipUiArrowsForRtl(t('Cost High to Low'), isRtl) },
      { value: 'model-asc', label: flipUiArrowsForRtl(t('Model A→Z'), isRtl) },
      { value: 'model-desc', label: flipUiArrowsForRtl(t('Model Z→A'), isRtl) },
      { value: 'provider-asc', label: flipUiArrowsForRtl(t('Provider A→Z'), isRtl) },
      { value: 'provider-desc', label: flipUiArrowsForRtl(t('Provider Z→A'), isRtl) },
    ],
    [t, isRtl]
  );

  const formatScore = (value, digits) =>
    value != null && Number.isFinite(Number(value))
      ? formatDecimal(Number(value), locale, {
          minimumFractionDigits: digits,
          maximumFractionDigits: digits,
        })
      : '—';

  const formatPricePer1M = (pricePerToken) =>
    pricePerToken == null || Number.isNaN(pricePerToken)
      ? null
      : formatDecimal(parseFloat(pricePerToken) * 1000000, locale, {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        });

  const renderPriceCell = (model, kind) => {
    if (!isPricingKnown(model)) {
      const title =
        filterEngineFromModelId(model.id) === "local"
          ? t("no cost - local")
          : t("Cost not available");
      return <span className="text-muted-foreground" title={title}>—</span>;
    }
    const raw = kind === 'input' ? model.pricing?.prompt : model.pricing?.completion;
    const value = formatPricePer1M(raw);
    if (value == null) {
      return <span className="text-muted-foreground">—</span>;
    }
    return (
      <span className="tabular-nums" title={model?.pricingEstimated ? t("estimated") : undefined}>
        {`$${value}${model?.pricingEstimated ? '*' : ''}`}
      </span>
    );
  };

  const flatModels = useMemo(() => {
    if (!sortedModelsData) return [];
    return sortedModelsData.type === 'grouped'
      ? Object.keys(sortedModelsData.data).flatMap((provider) => sortedModelsData.data[provider])
      : sortedModelsData.data;
  }, [sortedModelsData]);

  const rows = useMemo(() => (
    selectedOnly ? flatModels.filter((model) => selectedModelIds.has(model.id)) : flatModels
  ), [flatModels, selectedOnly, selectedModelIds]);

  /** Easy mode: provider chips limited to Easy providers (current selection kept when it is an Easy provider). */
  const easyFilterEngine = filterEngine && EASY_ENGINE_SET.has(filterEngine) ? filterEngine : "";
  const easyEngineChips = useMemo(() => {
    const allLabel = { value: "", label: t("All providers") };
    const easyRows = (engineFilterOptions || []).filter(
      (opt) => opt.value && EASY_ENGINE_SET.has(opt.value),
    );
    return [allLabel, ...easyRows];
  }, [engineFilterOptions, t]);

  /** Easy mode: one readonly card per preset; each row is a preset model (main or fallback) with score/price columns. */
  const presetCards = useMemo(() => {
    const sorted = [...presets].sort((a, b) =>
      presetDisplayName(a as Preset, locale, PRESET_SOURCE_LOCALE).localeCompare(
        presetDisplayName(b as Preset, locale, PRESET_SOURCE_LOCALE),
        undefined,
        { sensitivity: "base" },
      ),
    );
    return sorted
      .map((preset) => {
        const providerRows = buildPresetProviderRows(
          preset as Preset,
          configuredCloudEngines as EasyCloudEngineId[],
        ).filter((row) => !easyFilterEngine || row.provider === easyFilterEngine);
        const entries = [];
        for (const row of providerRows) {
          entries.push({ key: `${row.provider}:main`, provider: row.provider, role: "main", modelId: row.mainId });
          if (row.fallbackId && row.fallbackId !== row.mainId) {
            entries.push({ key: `${row.provider}:fallback`, provider: row.provider, role: "fallback", modelId: row.fallbackId });
          }
        }
        return { preset: preset as Preset, entries };
      })
      .filter((card) => card.entries.length > 0);
  }, [presets, configuredCloudEngines, easyFilterEngine, locale]);

  const renderModelRow = (model) => {
    const isSelected = selectedModelIds.has(model.id);
    const provider = providerSortKeyFromModelId(model.id);
    const modelName = getModelName(model);
    const showFreeBadge = isConfirmedFreeModel(model);
    const routeBadge = modelRouteBadgeProps(model.id, t);
    const score = modelScores[model.id];
    return (
      <tr
        key={model.id}
        className={cn(
          "cursor-pointer border-b border-border/60 transition-colors last:border-b-0",
          isSelected
            ? "bg-[color-mix(in_oklch,var(--primary)_12%,var(--background))]"
            : "hover:bg-accent/50",
        )}
        onClick={() => onToggleModelSelection(model.id)}
      >
        <td className="px-2 py-2" onClick={(e) => e.stopPropagation()}>
          <Checkbox
            checked={isSelected}
            onCheckedChange={() => onToggleModelSelection(model.id)}
            aria-label={t('Select {{model}}', { model: model.id })}
          />
        </td>
        <td className="px-2 py-2">
          <div className="flex min-w-0 flex-wrap items-center gap-2">
            <ProviderIcon provider={provider} size={14} />
            <span className="truncate font-medium">{modelName}</span>
            <span
              className={cn(
                "rounded border px-1.5 py-0.5 text-xs",
                routeBadge.color === "success"
                  ? "border-green-500/50 text-green-500"
                  : routeBadge.color === "warning"
                    ? "border-yellow-500/50 text-yellow-500"
                    : routeBadge.color === "error"
                      ? "border-red-500/50 text-red-500"
                      : "border-border text-muted-foreground",
              )}
            >
              {routeBadge.text}
            </span>
            {showFreeBadge && (
              <Badge variant="outline" className="border-green-500/50 py-0 text-xs text-green-400">
                <WandSparkles size={10} className="me-1" />{t('Free')}
              </Badge>
            )}
            {score?.belowFloor && (
              <span className="text-xs text-muted-foreground">{t('below floor')}</span>
            )}
          </div>
        </td>
        <td className="px-2 py-2 text-end tabular-nums">{formatScore(score?.index, 1)}</td>
        <td className="px-2 py-2 text-end tabular-nums">{formatScore(score?.chrf, 3)}</td>
        <td className="px-2 py-2 text-end tabular-nums">{formatScore(score?.arena, 0)}</td>
        <td className="px-2 py-2 text-end">{renderPriceCell(model, 'input')}</td>
        <td className="px-2 py-2 text-end">{renderPriceCell(model, 'output')}</td>
      </tr>
    );
  };

  const renderScoreHeaderCells = () => (
    <>
      <th className="px-2 py-2 text-end font-medium">
        <ScoreColumnHeader label={t('Index')} kind="index" />
      </th>
      <th className="px-2 py-2 text-end font-medium">
        <ScoreColumnHeader label={t('ChrF')} kind="chrf" />
      </th>
      <th className="px-2 py-2 text-end font-medium">
        <ScoreColumnHeader label={t('Arena')} kind="arena" />
      </th>
      <th className="px-2 py-2 text-end font-medium">
        <ScoreColumnHeader label={t('Input')} kind="costs" />
      </th>
      <th className="px-2 py-2 text-end font-medium">
        <ScoreColumnHeader label={t('Output')} kind="costs" />
      </th>
    </>
  );

  const renderTableHeader = ({ selectable = true } = {}) => (
    <thead className="sticky top-0 z-10 bg-card">
      <tr className="border-b border-border">
        {selectable && <th className="w-10 px-2 py-2" aria-hidden="true" />}
        <th className="px-2 py-2 text-start font-medium">{t('Model')}</th>
        {renderScoreHeaderCells()}
      </tr>
    </thead>
  );

  return (
    <div className="flex h-full min-h-0 w-full flex-col gap-3 overflow-hidden p-4 md:p-6">
      <SelectFromPresetsModal
        open={presetsModalOpen}
        onClose={() => setPresetsModalOpen(false)}
        presets={presets}
        configuredCloudEngines={configuredCloudEngines}
        allModels={allModels}
        onLoadModels={onLoadPresetModels}
        getModelName={getModelName}
      />

      {/* Title row */}
      <div className="flex w-full min-w-0 flex-wrap items-center gap-2.5">
        <Cpu size={18} strokeWidth={2} />
        <span className="font-semibold">{t('Models')}</span>
        <Badge variant="secondary" className="shrink-0 px-1.5 py-0 text-xs">
          {allModels.length}
        </Badge>
        <Badge variant="outline" className="shrink-0 border-primary/50 px-1.5 py-0 text-xs text-primary">
          {selectedModelIds.size} {t('selected')}
        </Badge>
        <div className="ms-auto flex shrink-0 items-center gap-1 rounded-md border border-input bg-muted p-0.5">
          <button
            type="button"
            onClick={() => onExperienceModeChange("easy")}
            aria-pressed={isEasy}
            aria-label={t("Switch to Easy mode")}
            className={cn(
              "flex items-center gap-1 rounded px-3 py-1 text-sm font-medium transition-colors",
              isEasy
                ? "bg-background text-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground",
            )}
          >
            {t('Easy')}
          </button>
          <button
            type="button"
            onClick={() => onExperienceModeChange("advanced")}
            aria-pressed={!isEasy}
            aria-label={t("Switch to Advanced mode")}
            className={cn(
              "flex items-center gap-1 rounded px-3 py-1 text-sm font-medium transition-colors",
              !isEasy
                ? "bg-background text-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground",
            )}
          >
            {t('Advanced')}
          </button>
        </div>
      </div>

      {/* Search (Advanced only; Easy mode browses preset cards instead) */}
      {!isEasy && (
        <div className="relative w-full min-w-0">
          <Search size={14} className="pointer-events-none absolute start-2.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <Input
            className="w-full ps-8 pe-8"
            placeholder={t('Search models...')}
            value={searchTerm}
            onChange={(e) => onSearchTermChange(e.target.value)}
          />
          {searchTerm && (
            <button
              className="absolute end-2 top-1/2 -translate-y-1/2 p-0.5 text-muted-foreground hover:text-foreground"
              onClick={() => onSearchTermChange('')}
              type="button"
            >
              <X size={13} />
            </button>
          )}
        </div>
      )}

      {/* Provider chips */}
      <div className="flex flex-wrap items-center gap-1.5">
        {(isEasy ? easyEngineChips : engineFilterOptions).map((opt) => (
          <button
            key={opt.value === '' ? '__all__' : opt.value}
            type="button"
            onClick={() => onFilterEngineChange(opt.value)}
            className={cn(
              "rounded border px-2 py-1 text-xs transition-colors",
              (isEasy ? easyFilterEngine : filterEngine) === opt.value
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border bg-muted hover:bg-accent"
            )}
          >
            {opt.label}
          </button>
        ))}
      </div>

      {/* Toolbar (Advanced only) */}
      {!isEasy && (
        <div className="flex flex-wrap items-center gap-2 border-b border-border pb-2">
          <Button variant="ghost" size="sm" onClick={onRefreshModels} disabled={modelsLoading}>
            <RefreshCw size={14} />{t('Refresh')}
          </Button>

          <Select value={sortBy} onValueChange={onSortByChange}>
            <SelectTrigger className="h-8 w-full sm:w-auto sm:min-w-[200px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {sortOptions.map((opt) => (
                <SelectItem key={opt.value} value={opt.value}>{opt.label}</SelectItem>
              ))}
            </SelectContent>
          </Select>

          <div className="flex items-center gap-1.5">
            <Checkbox
              id="filter-free-only"
              checked={filterFree}
              onCheckedChange={(c) => onFilterFreeChange(!!c)}
            />
            <label htmlFor="filter-free-only" className="flex cursor-pointer items-center gap-1 text-xs">
              <WandSparkles size={12} />{t('Free Only')}
            </label>
          </div>

          <div className="flex items-center gap-1.5">
            <Checkbox
              id="filter-selected-only"
              checked={selectedOnly}
              onCheckedChange={(c) => setSelectedOnly(!!c)}
            />
            <label htmlFor="filter-selected-only" className="cursor-pointer text-xs">
              {t('Selected only')}
            </label>
          </div>

          <div className="ms-auto flex items-center gap-1.5">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setPresetsModalOpen(true)}
              disabled={!presets.length}
            >
              {t('Select from presets')}
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={onDeselectAllModels}
              disabled={selectedModelIds.size === 0}
            >
              {t('Deselect All')}
            </Button>
          </div>
        </div>
      )}

      {/* Table (Advanced) / preset cards (Easy) */}
      <div className="min-h-0 flex-1 overflow-auto rounded-md border border-border [scrollbar-width:thin]">
        {modelsLoading && allModels.length === 0 ? (
          <div className={modelsEmptyState}>
            <Loader2 size={36} className="animate-spin opacity-50" />
            <span className="font-medium">{t('Loading models...')}</span>
            <span className="text-sm text-muted-foreground">{t('Please wait while we fetch available models')}</span>
          </div>
        ) : modelsError && allModels.length === 0 ? (
          <div className={modelsEmptyStateError}>
            <Package size={48} strokeWidth={1.5} style={{ opacity: 0.5 }} />
            <span className="font-semibold text-red-400">{t('Error loading models')}</span>
            <span className="text-sm text-muted-foreground">{modelsError}</span>
            <Button size="sm" onClick={onRefreshModels} className="mt-3">
              <RefreshCw size={14} />{t('Retry')}
            </Button>
          </div>
        ) : isEasy ? (
          presetCards.length === 0 ? (
            <div className={modelsEmptyState}>
              <Package size={36} strokeWidth={1.5} style={{ opacity: 0.5 }} />
              <span className="font-medium">{t('No presets available.')}</span>
            </div>
          ) : (
            <div className="flex flex-col gap-3 p-3">
              {presetCards.map(({ preset, entries }) => (
                <section key={preset.id} className="overflow-hidden rounded-lg border border-border bg-card/40">
                  <header className="flex flex-col gap-1 border-b border-border px-3 py-2">
                    <div className="flex items-center gap-2">
                      <Layers size={14} className="shrink-0 text-emerald-500" aria-hidden />
                      <span className="text-sm font-semibold">
                        {presetDisplayName(preset, locale, PRESET_SOURCE_LOCALE)}
                      </span>
                      <Badge variant="secondary" className="px-1.5 py-0 text-xs">
                        {entries.length}
                      </Badge>
                    </div>
                    {presetDisplayDescription(preset, locale, PRESET_SOURCE_LOCALE) && (
                      <p className="m-0 text-xs text-muted-foreground">
                        {presetDisplayDescription(preset, locale, PRESET_SOURCE_LOCALE)}
                      </p>
                    )}
                  </header>
                  <table className="w-full border-collapse text-sm">
                    {renderTableHeader({ selectable: false })}
                    <tbody>
                      {entries.map((entry) => {
                        const model = allModels.find((m) => m.id === entry.modelId);
                        const score = model ? modelScores[model.id] : undefined;
                        const labelKey = EASY_PROVIDER_LABEL_KEYS[entry.provider];
                        return (
                          <tr key={entry.key} className="border-b border-border/60 last:border-b-0">
                            <td className="px-2 py-2">
                              <div className="flex min-w-0 flex-wrap items-center gap-2">
                                <ProviderIcon provider={entry.provider} size={14} />
                                <span className="truncate font-medium">
                                  {presetModelLabel(entry.modelId, allModels, getModelName)}
                                </span>
                                <span
                                  className={cn(
                                    "rounded border px-1.5 py-0.5 text-xs",
                                    entry.role === "main"
                                      ? "border-primary/50 text-primary"
                                      : "border-border text-muted-foreground",
                                  )}
                                >
                                  {entry.role === "main" ? t('Main model') : t('Fallback model')}
                                </span>
                                <span className="text-xs text-muted-foreground">
                                  {labelKey ? t(labelKey) : entry.provider}
                                </span>
                              </div>
                            </td>
                            <td className="px-2 py-2 text-end tabular-nums">{formatScore(score?.index, 1)}</td>
                            <td className="px-2 py-2 text-end tabular-nums">{formatScore(score?.chrf, 3)}</td>
                            <td className="px-2 py-2 text-end tabular-nums">{formatScore(score?.arena, 0)}</td>
                            <td className="px-2 py-2 text-end">
                              {model ? renderPriceCell(model, 'input') : <span className="text-muted-foreground">—</span>}
                            </td>
                            <td className="px-2 py-2 text-end">
                              {model ? renderPriceCell(model, 'output') : <span className="text-muted-foreground">—</span>}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </section>
              ))}
            </div>
          )
        ) : rows.length === 0 ? (
          <div className={modelsEmptyState}>
            <Package size={36} strokeWidth={1.5} style={{ opacity: 0.5 }} />
            <span className="font-medium">{t('No models match your filters')}</span>
          </div>
        ) : (
          <table className="w-full border-collapse text-sm">
            {renderTableHeader()}
            <tbody>
              {rows.map((model) => renderModelRow(model))}
            </tbody>
          </table>
        )}
      </div>

      {modelScoresLoading && (
        <p className="shrink-0 text-xs text-muted-foreground">{t("Loading benchmark scores…")}</p>
      )}
      {modelScoresError && !modelScoresLoading && (
        <p className="shrink-0 text-xs text-destructive">{t("Benchmark scores could not be loaded.")}</p>
      )}
    </div>
  );
};

SettingsModelsTab.propTypes = {
  allModels: PropTypes.arrayOf(PropTypes.object),
  selectedModelIds: PropTypes.object.isRequired,
  searchTerm: PropTypes.string,
  filterEngine: PropTypes.string,
  engineFilterOptions: PropTypes.arrayOf(PropTypes.shape({ value: PropTypes.string, label: PropTypes.string })),
  filterFree: PropTypes.bool,
  sortBy: PropTypes.string,
  sortedModelsData: PropTypes.object,
  modelsLoading: PropTypes.bool,
  modelsError: PropTypes.string,
  onSearchTermChange: PropTypes.func.isRequired,
  onFilterEngineChange: PropTypes.func.isRequired,
  onFilterFreeChange: PropTypes.func.isRequired,
  onSortByChange: PropTypes.func.isRequired,
  onRefreshModels: PropTypes.func.isRequired,
  onToggleModelSelection: PropTypes.func.isRequired,
  onDeselectAllModels: PropTypes.func.isRequired,
  getModelName: PropTypes.func.isRequired,
  modelScores: PropTypes.object,
  modelScoresLoading: PropTypes.bool,
  modelScoresError: PropTypes.string,
  presets: PropTypes.array,
  configuredCloudEngines: PropTypes.arrayOf(PropTypes.string),
  onLoadPresetModels: PropTypes.func.isRequired,
  experienceMode: PropTypes.oneOf(["easy", "advanced"]),
  onExperienceModeChange: PropTypes.func.isRequired,
};

export default SettingsModelsTab;
