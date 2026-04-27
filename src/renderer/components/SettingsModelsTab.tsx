import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { formatDecimal, flipUiArrowsForRtl } from '../utils/misc/formatUtils';
import { getTextDirection } from "ai-i18n-tools/runtime";
import { providerSortKeyFromModelId } from '../utils/misc/modelIdUtils';
import PropTypes from 'prop-types';
import { FREE_MODEL_ID } from "../constants";
import {
  Cpu,
  WandSparkles,
  CheckSquare,
  Package,
  UnfoldVertical,
  FoldVertical,
  Search,
  RefreshCw,
  ChevronDown,
  ChevronRight,
  X,
  Loader2,
} from 'lucide-react';
import ProviderIcon from './ProviderIcon';
import {
  isPricingKnown,
  isConfirmedFreeModel,
  modelCostSortValue,
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
import { settingsModelsTabRoot } from "./settings/settingsLayoutClasses";
import {
  modelAction,
  modelCardClass,
  modelCardContent,
  modelInfo,
  modelNameRow,
  modelPrice,
  modelsAvailableHeaderRow,
  modelsAvailableTitle,
  modelsControlsModern,
  modelsDivider,
  modelsEmptyState,
  modelsEmptyStateError,
  modelsHeaderSearch,
  modelsHeaderSearchBalance,
  modelsHeaderSearchInput,
  modelsListContainer,
  modelsListFlatOrGrouped,
  modelsPaneHeader,
  modelsPaneLeft,
  modelsPaneRight,
  modelsSplitView,
  modelsToolbar,
  modelsToolbarLeft,
  modelsToolbarRight,
  providerHeader,
  providerIconWrap,
  providerInfo,
  providerModelsInner,
  providerSection,
  selectedModelCard,
  selectedModelContent,
  selectedModelHeader,
  selectedModelInfo,
  selectedModelsContainer,
  selectedModelsList,
} from "./settings/settingsModelsLayoutClasses";

const SettingsModelsTab = ({
  allModels,
  selectedModelIds,
  searchTerm,
  filterEngine,
  engineFilterOptions,
  filterFree,
  sortBy,
  expandedProviders,
  sortedModelsData,
  modelsLoading,
  modelsError,
  onSearchTermChange,
  onFilterEngineChange,
  onFilterFreeChange,
  onSortByChange,
  onRefreshModels,
  onToggleProvider,
  onExpandAll,
  onCollapseAll,
  onToggleModelSelection,
  onDeselectAllModels,
  getModelName,
}) => {
  const { t, i18n } = useTranslation();
  const locale = i18n.language || 'en-GB';
  const isRtl = getTextDirection(i18n.language) === 'rtl';

  const sortedSelectedModelIds = useMemo(() => {
    const ids = Array.from(selectedModelIds);
    const [sortType, sortDir] = (sortBy || 'model-asc').split('-');
    const ascending = sortDir === 'asc';
    const getModel = (id) => allModels.find((m) => m.id === id) || { id };
    const getCost = (model) => modelCostSortValue(model);
    return ids.slice().sort((idA, idB) => {
      const a = getModel(idA);
      const b = getModel(idB);
      let cmp = 0;
      if (sortType === 'cost') {
        cmp = getCost(a) - getCost(b);
      } else if (sortType === 'provider') {
        const provA = providerSortKeyFromModelId(idA);
        const provB = providerSortKeyFromModelId(idB);
        cmp = provA.localeCompare(provB);
        if (cmp === 0) {
          const nameA = (getModelName(a) || idA).trim().toLowerCase();
          const nameB = (getModelName(b) || idB).trim().toLowerCase();
          cmp = nameA.localeCompare(nameB);
        }
      } else {
        const nameA = (getModelName(a) || idA).trim().toLowerCase();
        const nameB = (getModelName(b) || idB).trim().toLowerCase();
        cmp = nameA.localeCompare(nameB);
      }
      return ascending ? cmp : -cmp;
    });
  }, [selectedModelIds, sortBy, allModels, getModelName]);

  const sortOptions = useMemo(
    () => [
      { value: 'cost-asc', label: flipUiArrowsForRtl(t('Cost Low to High'), isRtl) },
      { value: 'cost-desc', label: flipUiArrowsForRtl(t('Cost High to Low'), isRtl) },
      { value: 'model-asc', label: flipUiArrowsForRtl(t('Model A→Z'), isRtl) },
      { value: 'model-desc', label: flipUiArrowsForRtl(t('Model Z→A'), isRtl) },
      { value: 'provider-asc', label: flipUiArrowsForRtl(t('Provider A→Z'), isRtl) },
      { value: 'provider-desc', label: flipUiArrowsForRtl(t('Provider Z→A'), isRtl) },
    ],
    [t, isRtl]
  );

  const formatPricePer1M = (pricePerToken) =>
    pricePerToken == null || Number.isNaN(pricePerToken)
      ? '0.00'
      : formatDecimal(parseFloat(pricePerToken) * 1000000, locale, { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  const renderModelPricingLine = (model) => {
    if (!isPricingKnown(model)) {
      return t("Cost not available");
    }
    const inCost = formatPricePer1M(model.pricing?.prompt);
    const outCost = formatPricePer1M(model.pricing?.completion);
    const estimatedSuffix = model?.pricingEstimated ? ` (${t("estimated")})` : "";
    return (
      <>
        {t("Input")}: ${inCost} / 1M · {t("Output")}: ${outCost} / 1M {t("tokens")}{estimatedSuffix}
      </>
    );
  };

  return (
    <div className={settingsModelsTabRoot}>
      <div className={modelsSplitView}>
        {/* LEFT: AVAILABLE MODELS */}
        <div className={modelsPaneLeft}>
          {/* Header: title + centered search */}
          <div className={cn(modelsPaneHeader, modelsAvailableHeaderRow)}>
            <div className={modelsAvailableTitle}>
              <Cpu size={18} strokeWidth={2} />
              <span className="font-semibold">{t('Available Models')}</span>
            </div>
            <div className={modelsHeaderSearch}>
              <div className="relative">
                <Search size={14} className="absolute start-2.5 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" />
                <Input
                  className={cn(modelsHeaderSearchInput, "ps-8 pe-8")}
                  placeholder={t('Search models...')}
                  value={searchTerm}
                  onChange={(e) => onSearchTermChange(e.target.value)}
                />
                {searchTerm && (
                  <button
                    className="absolute end-2 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground p-0.5"
                    onClick={() => onSearchTermChange('')}
                    type="button"
                  >
                    <X size={13} />
                  </button>
                )}
              </div>
            </div>
            <div className={modelsHeaderSearchBalance} aria-hidden />
          </div>

          {/* Filter Controls */}
          <div className={modelsControlsModern}>
            <div className="flex flex-wrap gap-1.5 items-center">
              <span className="w-full mb-0.5 text-xs font-semibold">{t('Provider')}</span>
              {(engineFilterOptions || []).map((opt) => (
                <button
                  key={opt.value === '' ? '__all__' : opt.value}
                  type="button"
                  onClick={() => onFilterEngineChange(opt.value)}
                  className={cn(
                    "px-2 py-1 text-xs rounded border transition-colors",
                    filterEngine === opt.value
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-muted border-border hover:bg-accent"
                  )}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {/* Action Toolbar */}
          <div className={modelsToolbar}>
            <div className={modelsToolbarLeft}>
              <Button variant="ghost" size="sm" onClick={onRefreshModels} disabled={modelsLoading}>
                <RefreshCw size={14} />{t('Refresh')}
              </Button>

              {sortBy.startsWith('provider') && (
                <>
                  <Button variant="ghost" size="sm" onClick={onExpandAll}>
                    <UnfoldVertical size={14} strokeWidth={2} />{t('Expand All')}
                  </Button>
                  <Button variant="ghost" size="sm" onClick={onCollapseAll}>
                    <FoldVertical size={14} strokeWidth={2} />{t('Collapse All')}
                  </Button>
                </>
              )}

              <Select value={sortBy} onValueChange={onSortByChange}>
                <SelectTrigger className="min-w-[200px] h-8">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {sortOptions.map((opt) => (
                    <SelectItem key={opt.value} value={opt.value}>{opt.label}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className={modelsToolbarRight}>
              <div className="flex items-center gap-1.5">
                <Checkbox
                  id="filter-free-only"
                  checked={filterFree}
                  onCheckedChange={(c) => onFilterFreeChange(!!c)}
                />
                <label htmlFor="filter-free-only" className="flex items-center gap-1 text-xs cursor-pointer">
                  <WandSparkles size={12} />{t('Free Only')}
                </label>
              </div>
            </div>
          </div>

          {/* Models List */}
          <div className={modelsListContainer}>
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
            ) : sortedModelsData.type === 'grouped' ? (
              // GROUPED VIEW (by Provider)
              <div className={modelsListFlatOrGrouped}>
                {Object.keys(sortedModelsData.data).map(provider => {
                  const models = sortedModelsData.data[provider];
                  const isExpanded = expandedProviders.has(provider);
                  const selectedCount = models.filter(m => selectedModelIds.has(m.id)).length;
                  return (
                    <div key={provider} className={providerSection}>
                      <div className={providerHeader} onClick={() => onToggleProvider(provider)}>
                        <div className={providerInfo}>
                          <span className={providerIconWrap}>
                            {isExpanded ? <ChevronDown size={14} /> : <ChevronRight size={14} className="rtl-icon-mirror" />}
                          </span>
                          <ProviderIcon provider={provider} size={18} />
                          <span className="font-semibold">
                            {provider.length ? provider.charAt(0).toUpperCase() + provider.slice(1) : provider}
                          </span>
                          <Badge variant="secondary" className="text-xs px-1.5 py-0">
                            {models.length} {models.length === 1 ? t('model') : t('models')}
                          </Badge>
                          {selectedCount > 0 && (
                            <Badge variant="outline" className="text-xs px-1.5 py-0 text-green-400 border-green-500/50">
                              {selectedCount} {t('selected')}
                            </Badge>
                          )}
                        </div>
                      </div>

                      {isExpanded && (
                        <div className={providerModelsInner}>
                          {models.map(model => {
                            const isSelected = selectedModelIds.has(model.id);
                            const showFreeBadge = isConfirmedFreeModel(model);
                            const routeBadge = modelRouteBadgeProps(model.id, t);
                            return (
                              <div
                                key={model.id}
                                className={modelCardClass(isSelected)}
                                onClick={() => onToggleModelSelection(model.id)}
                              >
                                <div className={modelCardContent}>
                                  <div className={modelInfo}>
                                    <div className={modelNameRow}>
                                      <span className="font-medium text-sm">{model.name || model.id}</span>
                                      <span className={cn("text-xs px-1.5 py-0.5 rounded border",
                                        routeBadge.color === "success" ? "border-green-500/50 text-green-500" :
                                        routeBadge.color === "warning" ? "border-yellow-500/50 text-yellow-500" :
                                        routeBadge.color === "error" ? "border-red-500/50 text-red-500" :
                                        "border-border text-muted-foreground"
                                      )}>
                                        {routeBadge.text}
                                      </span>
                                      {showFreeBadge && (
                                        <Badge variant="outline" className="text-xs py-0 text-green-400 border-green-500/50">
                                          <WandSparkles size={10} className="me-1" />{t('Free')}
                                        </Badge>
                                      )}
                                    </div>
                                    <span className={cn(modelPrice, "text-muted-foreground")}>
                                      {renderModelPricingLine(model)}
                                    </span>
                                  </div>
                                  <div className={modelAction}>
                                    {isSelected ? (
                                      <Badge variant="secondary" className="text-xs px-1.5 py-0 text-primary border-primary/50">{t('Selected')}</Badge>
                                    ) : (
                                      <button type="button" className="text-xs text-muted-foreground hover:text-foreground px-2 py-0.5">{t('Add')}</button>
                                    )}
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            ) : (
              // FLAT LIST VIEW (by Cost or Model name)
              <div className={modelsListFlatOrGrouped}>
                {sortedModelsData.data.map(model => {
                  const provider = providerSortKeyFromModelId(model.id);
                  const modelName = getModelName(model);
                  const isSelected = selectedModelIds.has(model.id);
                  const showFreeBadge = isConfirmedFreeModel(model);
                  const routeBadge = modelRouteBadgeProps(model.id, t);
                  return (
                    <div
                      key={model.id}
                      className={modelCardClass(isSelected, true)}
                      onClick={() => onToggleModelSelection(model.id)}
                    >
                      <div className={modelCardContent}>
                        <div className={modelInfo}>
                          <div className={modelNameRow}>
                            <ProviderIcon provider={provider} size={13} />
                            <span className="font-medium text-sm">{modelName}</span>
                            <span className={cn("text-xs px-1.5 py-0.5 rounded border",
                              routeBadge.color === "success" ? "border-green-500/50 text-green-500" :
                              routeBadge.color === "warning" ? "border-yellow-500/50 text-yellow-500" :
                              routeBadge.color === "error" ? "border-red-500/50 text-red-500" :
                              "border-border text-muted-foreground"
                            )}>
                              {routeBadge.text}
                            </span>
                            <span className="text-xs opacity-70">
                              ({provider.length ? provider.charAt(0).toUpperCase() + provider.slice(1) : provider})
                            </span>
                            {showFreeBadge && (
                              <Badge variant="outline" className="text-xs py-0 text-green-400 border-green-500/50">
                                <WandSparkles size={10} className="me-1" />{t('Free')}
                              </Badge>
                            )}
                          </div>
                          <span className={cn(modelPrice, "text-muted-foreground")}>
                            {renderModelPricingLine(model)}
                          </span>
                        </div>
                        <div className={modelAction}>
                          {isSelected ? (
                            <Badge variant="secondary" className="text-xs px-1.5 py-0 text-primary border-primary/50">{t('Selected')}</Badge>
                          ) : (
                            <button type="button" className="text-xs text-muted-foreground hover:text-foreground px-2 py-0.5">{t('Add')}</button>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        {/* Vertical Divider */}
        <div className={modelsDivider} aria-hidden />

        {/* RIGHT: SELECTED MODELS */}
        <div className={modelsPaneRight}>
          {/* Header */}
          <div className={modelsPaneHeader}>
            <div className="flex items-center gap-2.5">
              <CheckSquare size={18} strokeWidth={2} />
              <span className="font-semibold">{t('Selected Models')}</span>
              <Badge variant="secondary" className="text-xs px-1.5 py-0">{selectedModelIds.size}</Badge>
            </div>
            <Button variant="ghost" size="sm" onClick={onDeselectAllModels} disabled={selectedModelIds.size === 0}>
              {t('Deselect All')}
            </Button>
          </div>

          {/* Selected Models List */}
          <div className={selectedModelsContainer}>
            <div className={selectedModelsList}>
              {sortedSelectedModelIds.map(modelId => {
                const model = allModels.find(m => m.id === modelId) || { id: modelId };
                const provider = providerSortKeyFromModelId(modelId);
                const showFreeBadge = isConfirmedFreeModel(model);
                const routeBadge = modelRouteBadgeProps(modelId, t);
                const isRequiredFree = modelId === FREE_MODEL_ID;
                return (
                  <div key={String(modelId)} className={selectedModelCard}>
                    <div className={selectedModelContent}>
                      <div className={selectedModelInfo}>
                        <div className={selectedModelHeader}>
                          <ProviderIcon provider={provider} size={13} />
                          <span className="font-semibold text-sm">{model.name || model.id}</span>
                          <span className={cn("text-xs px-1.5 py-0.5 rounded border",
                            routeBadge.color === "success" ? "border-green-500/50 text-green-500" :
                            routeBadge.color === "warning" ? "border-yellow-500/50 text-yellow-500" :
                            routeBadge.color === "error" ? "border-red-500/50 text-red-500" :
                            "border-border text-muted-foreground"
                          )}>
                            {routeBadge.text}
                          </span>
                          {showFreeBadge && (
                            <Badge variant="outline" className="text-xs py-0 text-green-400 border-green-500/50">
                              <WandSparkles size={10} className="me-1" />{t('Free')}
                            </Badge>
                          )}
                        </div>
                        <span className={cn(modelPrice, "text-muted-foreground")}>
                          {renderModelPricingLine(model)}
                        </span>
                      </div>
                      {!isRequiredFree && (
                        <button
                          type="button"
                          className="p-1 text-muted-foreground hover:text-foreground rounded"
                          onClick={() => onToggleModelSelection(modelId)}
                          aria-label={t('Remove model')}
                        >
                          <X size={14} />
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
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
  expandedProviders: PropTypes.object,
  sortedModelsData: PropTypes.object,
  modelsLoading: PropTypes.bool,
  modelsError: PropTypes.string,
  onSearchTermChange: PropTypes.func.isRequired,
  onFilterEngineChange: PropTypes.func.isRequired,
  onFilterFreeChange: PropTypes.func.isRequired,
  onSortByChange: PropTypes.func.isRequired,
  onRefreshModels: PropTypes.func.isRequired,
  onToggleProvider: PropTypes.func.isRequired,
  onExpandAll: PropTypes.func.isRequired,
  onCollapseAll: PropTypes.func.isRequired,
  onToggleModelSelection: PropTypes.func.isRequired,
  onDeselectAllModels: PropTypes.func.isRequired,
  getModelName: PropTypes.func.isRequired,
};

export default SettingsModelsTab;
