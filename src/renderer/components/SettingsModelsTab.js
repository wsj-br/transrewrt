import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { formatDecimal } from '../utils/misc/formatUtils';
import { providerSortKeyFromModelId } from '../utils/misc/modelIdUtils';
import {
  Button,
  Input,
  Checkbox,
  Dropdown,
  Option,
  Badge,
  Card,
  Text,
  Spinner,
  tokens,
} from '@fluentui/react-components';
import PropTypes from 'prop-types';
import {
  SearchRegular,
  ArrowSyncRegular,
  ChevronDownRegular,
  ChevronUpRegular,
  ChevronRightRegular,
  DismissRegular,
} from '@fluentui/react-icons';
import { FREE_MODEL_ID } from "../constants";
import {
  Cpu,
  WandSparkles,
  CheckSquare,
  Package,
} from 'lucide-react';
import ProviderIcon from './ProviderIcon';
import {
  isPricingKnown,
  isConfirmedFreeModel,
  modelCostSortValue,
} from '../utils/misc/modelPricingUtils';
import { modelRouteBadgeProps } from '../utils/misc/modelRouteBadge';

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
      { value: 'cost-asc', label: t('Cost Low to High') },
      { value: 'cost-desc', label: t('Cost High to Low') },
      { value: 'model-asc', label: t('Model A→Z') },
      { value: 'model-desc', label: t('Model Z→A') },
      { value: 'provider-asc', label: t('Provider A→Z') },
      { value: 'provider-desc', label: t('Provider Z→A') },
    ],
    [t]
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
    return (
      <>
        {t("Input")}: ${inCost} / 1M · {t("Output")}: ${outCost} / 1M {t("tokens")}
      </>
    );
  };

  return (
    <div className="tab-content models-tab">
      <div className="models-split-view">
        {/* LEFT: AVAILABLE MODELS */}
        <div className="models-pane left">
          {/* Header: title + centered search */}
          <div className="models-pane-header models-available-header-row">
            <div className="models-available-title">
              <Cpu size={20} strokeWidth={2} />
              <Text size={500} weight="semibold">{t('Available Models')}</Text>
            </div>
            <div className="models-header-search">
              <Input
                className="models-header-search-input"
                contentBefore={<SearchRegular />}
                contentAfter={
                  searchTerm && (
                    <Button
                      appearance="transparent"
                      size="small"
                      icon={<DismissRegular />}
                      onClick={() => onSearchTermChange('')}
                    />
                  )
                }
                placeholder={t('Search models...')}
                value={searchTerm}
                onChange={(e) => onSearchTermChange(e.target.value)}
              />
            </div>
            <div className="models-header-search-balance" aria-hidden />
          </div>

          {/* Filter Controls */}
          <div className="models-controls-modern">
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', alignItems: 'center' }}>
              <Text size={200} weight="semibold" style={{ width: '100%', marginBottom: '2px' }}>{t('Provider')}</Text>
              {(engineFilterOptions || []).map((opt) => (
                <Button
                  key={opt.value === '' ? '__all__' : opt.value}
                  size="small"
                  appearance={filterEngine === opt.value ? 'primary' : 'secondary'}
                  onClick={() => onFilterEngineChange(opt.value)}
                >
                  {opt.label}
                </Button>
              ))}
            </div>
          </div>

          {/* Action Toolbar */}
          <div className="models-toolbar">
            <div className="models-toolbar-left">
              <Button
                appearance="subtle"
                size="small"
                icon={<ArrowSyncRegular />}
                onClick={onRefreshModels}
                disabled={modelsLoading}
              >
                {t('Refresh')}
              </Button>

              {sortBy.startsWith('provider') && (
                <>
                  <Button
                    appearance="subtle"
                    size="small"
                    icon={<ChevronDownRegular />}
                    onClick={onExpandAll}
                  >
                    {t('Expand All')}
                  </Button>
                  <Button
                    appearance="subtle"
                    size="small"
                    icon={<ChevronUpRegular />}
                    onClick={onCollapseAll}
                  >
                    {t('Collapse All')}
                  </Button>
                </>
              )}

              <Dropdown
                appearance="underline"
                size="small"
                value={sortOptions.find((o) => o.value === sortBy)?.label ?? sortBy}
                selectedOptions={[sortBy]}
                onOptionSelect={(e, data) => onSortByChange(data.optionValue)}
                style={{ minWidth: '200px' }}
              >
                {sortOptions.map((opt) => (
                  <Option key={opt.value} value={opt.value}>{opt.label}</Option>
                ))}
              </Dropdown>
            </div>
            <div className="models-toolbar-right">
              <Checkbox
                className="models-toolbar-free-only"
                checked={filterFree}
                onChange={(e, data) => onFilterFreeChange(data.checked)}
                label={
                  <span className="models-toolbar-free-only-label">
                    <WandSparkles size={14} />
                    {t('Free Only')}
                  </span>
                }
              />
            </div>
          </div>

          {/* Models List */}
          <div className="models-list-container">
            {modelsLoading && allModels.length === 0 ? (
              <div className="empty-state-modern">
                <Spinner size="large" />
                <Text size={400} weight="medium">{t('Loading models...')}</Text>
                <Text size={300}>{t('Please wait while we fetch available models')}</Text>
              </div>
            ) : modelsError && allModels.length === 0 ? (
              <div className="empty-state-modern error">
                <Package size={48} strokeWidth={1.5} style={{ opacity: 0.5 }} />
                <Text size={400} weight="semibold" style={{ color: 'var(--colorPaletteRedForeground1)' }}>
                  {t('Error loading models')}
                </Text>
                <Text size={300}>{modelsError}</Text>
                <Button
                  appearance="primary"
                  size="medium"
                  icon={<ArrowSyncRegular />}
                  onClick={onRefreshModels}
                  style={{ marginTop: '12px' }}
                >
                  {t('Retry')}
                </Button>
              </div>
            ) : sortedModelsData.type === 'grouped' ? (
              // GROUPED VIEW (by Provider)
              <div className="models-list-grouped">
                {Object.keys(sortedModelsData.data).map(provider => {
                  const models = sortedModelsData.data[provider];
                  const isExpanded = expandedProviders.has(provider);
                  const selectedCount = models.filter(m => selectedModelIds.has(m.id)).length;
                  
                  return (
                    <div key={provider} className="provider-section-modern">
                      <div
                        className="provider-header-modern"
                        onClick={() => onToggleProvider(provider)}
                      >
                        <div className="provider-info">
                          <span className="provider-icon">
                            {isExpanded ? <ChevronDownRegular /> : <ChevronRightRegular />}
                          </span>
                           <ProviderIcon provider={provider} size={20} />
                          <Text weight="semibold" size={400}>
                            {provider.length ? provider.charAt(0).toUpperCase() + provider.slice(1) : provider}
                          </Text>
                          <Badge
                            appearance="tint"
                            size="small"
                            color={selectedCount > 0 ? 'brand' : 'subtle'}
                          >
                            {models.length} {models.length === 1 ? t('model') : t('models')}
                          </Badge>
                          {selectedCount > 0 && (
                            <Badge appearance="filled" size="small" color="success">
                              {selectedCount} {t('selected')}
                            </Badge>
                          )}
                        </div>
                      </div>

                      {isExpanded && (
                        <div className="provider-models-modern">
                          {models.map(model => {
                            const isSelected = selectedModelIds.has(model.id);
                            const showFreeBadge = isConfirmedFreeModel(model);
                            const routeBadge = modelRouteBadgeProps(model.id, t);

                            return (
                              <Card
                                key={model.id}
                                className={`model-card-modern ${isSelected ? 'selected' : ''}`}
                                onClick={() => onToggleModelSelection(model.id)}
                              >
                                <div className="model-card-content">
                                  <div className="model-info">
                                    <div className="model-name-row">
                                      <Text weight="medium" size={300}>
                                        {model.name || model.id}
                                      </Text>
                                      <Badge
                                        appearance="outline"
                                        size="small"
                                        color={routeBadge.color}
                                      >
                                        {routeBadge.text}
                                      </Badge>
                                      {showFreeBadge && (
                                        <Badge
                                          appearance="tint"
                                          size="small"
                                          color="success"
                                          icon={<WandSparkles size={12} />}
                                        >
                                          {t('Free')}
                                        </Badge>
                                      )}
                                    </div>
                                    <Text size={200} className="model-price" style={{ color: tokens.colorNeutralForeground3 }}>
                                      {renderModelPricingLine(model)}
                                    </Text>
                                  </div>
                                  <div className="model-action">
                                    {isSelected ? (
                                      <Badge appearance="filled" size="small" color="brand">
                                        {t('Selected')}
                                      </Badge>
                                    ) : (
                                      <Button
                                        appearance="subtle"
                                        size="small"
                                      >
                                        {t('Add')}
                                      </Button>
                                    )}
                                  </div>
                                </div>
                              </Card>
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
              <div className="models-list-flat">
                {sortedModelsData.data.map(model => {
                  const provider = providerSortKeyFromModelId(model.id);
                  const modelName = getModelName(model);
                  const isSelected = selectedModelIds.has(model.id);
                  const showFreeBadge = isConfirmedFreeModel(model);
                  const routeBadge = modelRouteBadgeProps(model.id, t);

                  return (
                    <Card
                      key={model.id}
                      className={`model-card-modern flat ${isSelected ? 'selected' : ''}`}
                      onClick={() => onToggleModelSelection(model.id)}
                    >
                      <div className="model-card-content">
                        <div className="model-info">
                          <div className="model-name-row">
                             <ProviderIcon provider={provider} size={14} />
                            <Text weight="medium" size={300}>
                              {modelName}
                            </Text>
                            <Badge appearance="outline" size="small" color={routeBadge.color}>
                              {routeBadge.text}
                            </Badge>
                            <Text size={200} style={{ opacity: 0.7 }}>
                              ({provider.length ? provider.charAt(0).toUpperCase() + provider.slice(1) : provider})
                            </Text>
                            {showFreeBadge && (
                              <Badge
                                appearance="tint"
                                size="small"
                                color="success"
                                icon={<WandSparkles size={12} />}
                              >
                                {t('Free')}
                              </Badge>
                            )}
                          </div>
                          <Text size={200} className="model-price" style={{ color: tokens.colorNeutralForeground3 }}>
                            {renderModelPricingLine(model)}
                          </Text>
                        </div>
                        <div className="model-action">
                          {isSelected ? (
                            <Badge appearance="filled" size="small" color="brand">
                              {t('Selected')}
                            </Badge>
                          ) : (
                            <Button
                              appearance="subtle"
                              size="small"
                            >
                              {t('Add')}
                            </Button>
                          )}
                        </div>
                      </div>
                    </Card>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        {/* Vertical Divider */}
        <div className="models-divider"></div>

        {/* RIGHT: SELECTED MODELS */}
        <div className="models-pane right">
          {/* Header */}
          <div className="models-pane-header">
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <CheckSquare size={20} strokeWidth={2} />
              <Text size={500} weight="semibold">{t('Selected Models')}</Text>
              <Badge appearance="filled" size="medium" color="brand">
                {selectedModelIds.size}
              </Badge>
            </div>
            <Button
              appearance="subtle"
              size="small"
              onClick={onDeselectAllModels}
              disabled={selectedModelIds.size === 0}
            >
              {t('Deselect All')}
            </Button>
          </div>

          {/* Selected Models List */}
          <div className="selected-models-container">
            <div className="selected-models-list">
              {sortedSelectedModelIds.map(modelId => {
                const model = allModels.find(m => m.id === modelId) || { id: modelId };
                const provider = providerSortKeyFromModelId(modelId);
                const showFreeBadge = isConfirmedFreeModel(model);
                const routeBadge = modelRouteBadgeProps(modelId, t);
                const isRequiredFree = modelId === FREE_MODEL_ID;

                return (
                  <Card
                    key={modelId}
                    className="selected-model-card-modern"
                  >
                    <div className="selected-model-content">
                      <div className="selected-model-info">
                        <div className="selected-model-header">
                           <ProviderIcon provider={provider} size={14} />
                          <Text weight="semibold" size={400}>
                            {model.name || model.id}
                          </Text>
                          <Badge appearance="outline" size="small" color={routeBadge.color}>
                            {routeBadge.text}
                          </Badge>
                          {showFreeBadge && (
                            <Badge
                              appearance="tint"
                              size="small"
                              color="success"
                              icon={<WandSparkles size={12} />}
                            >
                              {t('Free')}
                            </Badge>
                          )}
                        </div>
                        <Text size={200} className="model-price" style={{ color: tokens.colorNeutralForeground3 }}>
                          {renderModelPricingLine(model)}
                        </Text>
                      </div>
                      {!isRequiredFree && (
                        <Button
                          appearance="subtle"
                          size="small"
                          icon={<DismissRegular />}
                          onClick={() => onToggleModelSelection(modelId)}
                          aria-label={t('Remove model')}
                        />
                      )}
                    </div>
                  </Card>
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