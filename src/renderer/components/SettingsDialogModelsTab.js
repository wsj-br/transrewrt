import React from 'react';
import { useTranslation } from 'react-i18next';
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
} from '@fluentui/react-components';
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
  Sparkles,
  CheckSquare,
  Package,
} from 'lucide-react';
import ProviderIcon from './ProviderIcon';

const SORT_OPTIONS = [
  { value: 'cost-asc', labelKey: 'Cost ↑ Low to High' },
  { value: 'cost-desc', labelKey: 'Cost ↓ High to Low' },
  { value: 'model-asc', labelKey: 'Model A→Z' },
  { value: 'model-desc', labelKey: 'Model Z→A' },
  { value: 'provider-asc', labelKey: 'Provider A→Z' },
  { value: 'provider-desc', labelKey: 'Provider Z→A' },
];

const SettingsDialogModelsTab = ({
  allModels,
  selectedModelIds,
  searchTerm,
  filterFree,
  sortBy,
  expandedProviders,
  sortedModelsData,
  modelsLoading,
  modelsError,
  onSearchTermChange,
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
  const { t } = useTranslation();
  return (
    <div className="tab-content models-tab">
      <div className="models-split-view">
        {/* LEFT: AVAILABLE MODELS */}
        <div className="models-pane left">
          {/* Header */}
          <div className="models-pane-header">
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Cpu size={20} strokeWidth={2} />
              <Text size={500} weight="semibold">{t('Available Models')}</Text>
            </div>
          </div>

          {/* Search and Filter Controls */}
          <div className="models-controls-modern">
            <div className="search-box-container">
              <Input
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
            
            <div className="free-only-toggle">
              <Checkbox
                checked={filterFree}
                onChange={(e, data) => onFilterFreeChange(data.checked)}
                label={
                  <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <Sparkles size={14} />
                    {t('Free Only')}
                  </span>
                }
              />
            </div>
          </div>

          {/* Action Toolbar */}
          <div className="models-toolbar">
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
              value={t(SORT_OPTIONS.find((o) => o.value === sortBy)?.labelKey ?? sortBy)}
              selectedOptions={[sortBy]}
              onOptionSelect={(e, data) => onSortByChange(data.optionValue)}
              style={{ minWidth: '200px' }}
            >
              {SORT_OPTIONS.map((opt) => (
                <Option key={opt.value} value={opt.value}>{t(opt.labelKey)}</Option>
              ))}
            </Dropdown>
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
                          <Text weight="semibold" size={400}>{provider}</Text>
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
                            const isFree = parseFloat(model.pricing?.prompt || 0) === 0;
                            
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
                                      {isFree && (
                                        <Badge
                                          appearance="tint"
                                          size="small"
                                          color="success"
                                          icon={<Sparkles size={12} />}
                                        >
                                          {t('Free')}
                                        </Badge>
                                      )}
                                    </div>
                                    <Text size={200} className="model-price">
                                      ${(parseFloat(model.pricing?.prompt || 0) * 1000000).toFixed(2)} / 1M tokens
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
                  const provider = model.id.split('/')[0] || 'Other';
                  const modelName = getModelName(model);
                  const isSelected = selectedModelIds.has(model.id);
                  const isFree = parseFloat(model.pricing?.prompt || 0) === 0;

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
                            <Text size={200} style={{ opacity: 0.7 }}>
                              ({provider})
                            </Text>
                            {isFree && (
                              <Badge
                                appearance="tint"
                                size="small"
                                color="success"
                                icon={<Sparkles size={12} />}
                              >
                                {t('Free')}
                              </Badge>
                            )}
                          </div>
                          <Text size={200} className="model-price">
                            ${(parseFloat(model.pricing?.prompt || 0) * 1000000).toFixed(2)} / 1M tokens
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
              {Array.from(selectedModelIds).sort().map(modelId => {
                const model = allModels.find(m => m.id === modelId) || { id: modelId };
                const provider = modelId.split('/')[0] || 'Other';
                const isFree = model.pricing && parseFloat(model.pricing.prompt || 0) === 0;
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
                          {isFree && (
                            <Badge
                              appearance="tint"
                              size="small"
                              color="success"
                              icon={<Sparkles size={12} />}
                            >
                              {t('Free')}
                            </Badge>
                          )}
                        </div>
                        <Text size={200} style={{ opacity: 0.7 }}>
                          {provider}
                          {model.pricing && (
                            <> • ${(parseFloat(model.pricing.prompt || 0) * 1000000).toFixed(2)} / 1M</>
                          )}
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


export default SettingsDialogModelsTab;