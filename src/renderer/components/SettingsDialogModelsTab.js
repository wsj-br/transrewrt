import React from 'react';
import { Button } from '@fluentui/react-components';
import { Globe20Regular } from '@fluentui/react-icons';
import { Input, Checkbox, Dropdown, Option } from '@fluentui/react-components';

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
  return (
    <div className="tab-content models-tab">
      <div className="models-split-view">
        {/* LEFT: AVAILABLE */}
        <div className="models-pane left">
          <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Globe20Regular />
            Available Models
          </h4>
          <div className="models-controls">
            <Input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => onSearchTermChange(e.target.value)}
              style={{ flex: 1 }}
            />
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Checkbox
                checked={filterFree}
                onChange={(e) => onFilterFreeChange(e.target.checked)}
                label="Free Only"
              />
            </div>
          </div>
          <div className="models-actions">
            <Button 
              appearance="secondary"
              size="small"
              onClick={onRefreshModels}
              disabled={modelsLoading}
            >
              {modelsLoading ? 'Loading...' : 'Refresh Models'}
            </Button>
            {sortBy.startsWith('provider') && (
              <>
                <Button appearance="secondary" size="small" onClick={onExpandAll}>Expand All</Button>
                <Button appearance="secondary" size="small" onClick={onCollapseAll}>Collapse All</Button>
              </>
            )}
            <Dropdown
              value={sortBy}
              selectedOptions={[sortBy]}
              onOptionSelect={(e, data) => onSortByChange(data.optionValue)}
              style={{ minWidth: '120px' }}
            >
              <Option value="cost-asc">Cost ↓</Option>
              <Option value="cost-desc">Cost ↑</Option>
              <Option value="model-asc">Model ↓</Option>
              <Option value="model-desc">Model ↑</Option>
              <Option value="provider-asc">Provider ↓</Option>
              <Option value="provider-desc">Provider ↑</Option>
            </Dropdown>
          </div>

          <div className="models-list">
            {modelsLoading && allModels.length === 0 ? (
              <div className="empty-state" style={{ padding: '20px', textAlign: 'center' }}>
                Loading models...
              </div>
            ) : modelsError && allModels.length === 0 ? (
              <div className="empty-state" style={{ padding: '20px', textAlign: 'center', color: '#ff4444' }}>
                <div>Error: {modelsError}</div>
                <Button 
                  appearance="secondary"
                  size="small"
                  onClick={onRefreshModels}
                  style={{ marginTop: '10px' }}
                >
                  Retry
                </Button>
              </div>
            ) : sortedModelsData.type === 'grouped' ? (
              // Provider sorting: show grouped format with expand/collapse
              Object.keys(sortedModelsData.data).map(provider => (
                <div key={provider} className="provider-group">
                  <div
                    className="provider-header"
                    onClick={() => onToggleProvider(provider)}
                  >
                    {expandedProviders.has(provider) ? '▼' : '▶'} {provider}
                  </div>
                  {expandedProviders.has(provider) && (
                    <div className="provider-models">
                      {sortedModelsData.data[provider].map(model => (
                        <div
                          key={model.id}
                          className={`model-item ${selectedModelIds.has(model.id) ? 'selected' : ''}`}
                          onClick={() => onToggleModelSelection(model.id)}
                        >
                          <span className="model-name">{model.name || model.id}</span>
                          <span className="model-price">
                            ${(parseFloat(model.pricing?.prompt || 0) * 1000000).toFixed(2)}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))
            ) : (
              // Cost or Model sorting: show flat list "Model (Provider)"
              sortedModelsData.data.map(model => {
                const provider = model.id.split('/')[0] || 'Other';
                const modelName = getModelName(model);
                return (
                  <div
                    key={model.id}
                    className={`model-item flat ${selectedModelIds.has(model.id) ? 'selected' : ''}`}
                    onClick={() => onToggleModelSelection(model.id)}
                  >
                    <span className="model-name">{modelName} ({provider})</span>
                    <span className="model-price">
                      ${(parseFloat(model.pricing?.prompt || 0) * 1000000).toFixed(2)}
                    </span>
                  </div>
                );
              })
            )}
          </div>
        </div>

        {/* RIGHT: SELECTED */}
        <div className="models-pane right">
          <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Globe20Regular />
            Selected Models
          </h4>
          <div style={{ marginBottom: '8px' }}>
            <Button 
              appearance="secondary"
              size="small"
              onClick={onDeselectAllModels}
              disabled={selectedModelIds.size === 0}
            >
              Deselect All
            </Button>
          </div>
          <div className="selected-list">
            {Array.from(selectedModelIds).sort().map(modelId => {
              const model = allModels.find(m => m.id === modelId) || { id: modelId };
              return (
                <div
                  key={modelId}
                  className="selected-item"
                  onClick={() => onToggleModelSelection(modelId)}
                >
                  <span>{model.name || model.id}</span>
                  <button className="remove-btn">×</button>
                </div>
              );
            })}
            {selectedModelIds.size === 0 && (
              <div className="empty-state">No models selected</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsDialogModelsTab;

