import React, { useState, useEffect, useMemo } from 'react';
import { useAppContext } from '../contexts/AppContext';
import { ALL_AVAILABLE_LANGUAGES } from '../utils/languageConstants';

const SettingsDialog = ({ isOpen, onClose, isStandalone = false }) => {
  const { settings, allModels, languages, updateSettings, setSetting } = useAppContext();

  // Local state for pending changes
  const [localSettings, setLocalSettings] = useState({});
  const [activeTab, setActiveTab] = useState('general');

  // Geometry State
  const [geometry, setGeometry] = useState({
    x: 0,
    y: 0,
    width: Math.max(950, 780),
    height: 640
  });

  // Dragging State
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });

  // Resizing State
  const [isResizing, setIsResizing] = useState(false);
  const [resizeStart, setResizeStart] = useState({ x: 0, y: 0, width: 0, height: 0 });

  // Models Tab State
  const [searchTerm, setSearchTerm] = useState('');
  const [filterFree, setFilterFree] = useState(false);
  const [expandedProviders, setExpandedProviders] = useState(new Set());
  const [selectedModelIds, setSelectedModelIds] = useState(new Set());
  const [sortBy, setSortBy] = useState('provider-asc');

  // Languages Tab State
  const [selectedLanguages, setSelectedLanguages] = useState(new Set());
  const [customLanguage, setCustomLanguage] = useState('');

  // API Configuration State
  const [showApiKey, setShowApiKey] = useState(false);
  const [apiTestStatus, setApiTestStatus] = useState(null); // null, 'testing', 'success', 'error'
  const [apiTestMessage, setApiTestMessage] = useState('');

  // Initialize checks
  useEffect(() => {
    if (isOpen) {
      setLocalSettings({ ...settings });
      setSelectedModelIds(new Set(settings.available_models || []));
      setSelectedLanguages(new Set(settings.available_languages || []));
      setCustomLanguage('');
      setShowApiKey(false);
      setApiTestStatus(null);
      setApiTestMessage('');

      // Load saved geometry or set default only if NOT standalone
      if (!isStandalone) {
        const savedGeom = settings.settings_modal_geometry;
        if (savedGeom && savedGeom.width && savedGeom.height) {
          // If x/y not saved (or 0), center it
          if (savedGeom.x === undefined || savedGeom.y === undefined) {
            const x = (window.innerWidth - savedGeom.width) / 2;
            const y = (window.innerHeight - savedGeom.height) / 2;
            setGeometry({ ...savedGeom, x: x > 0 ? x : 50, y: y > 0 ? y : 50 });
          } else {
            setGeometry(savedGeom);
          }
        } else {
          // Default center - ensure minimum width of 780px
          const width = Math.max(950, 780);
          const height = 640;
          const x = (window.innerWidth - width) / 2;
          const y = (window.innerHeight - height) / 2;
          setGeometry({ x: x > 0 ? x : 50, y: y > 0 ? y : 50, width, height });
        }
      }
    }
  }, [isOpen, settings, isStandalone]);

  const handleSave = () => {
    updateSettings({
      ...localSettings,
      available_models: Array.from(selectedModelIds),
      available_languages: Array.from(selectedLanguages),
      settings_modal_geometry: {
        x: geometry.x,
        y: geometry.y,
        width: geometry.width,
        height: geometry.height
      }
    });

    // Notify other windows if needed
    if (window.electronAPI && window.electronAPI.notifySettingsUpdated) {
      window.electronAPI.notifySettingsUpdated();
    }

    onClose();
  };

  const handleClose = () => {
    // Save geometry even on close
    if (!isStandalone) {
      setSetting('settings_modal_geometry', {
        x: geometry.x,
        y: geometry.y,
        width: geometry.width,
        height: geometry.height
      });
    }
    // For General tab, settings are already auto-saved, so just close
    // For other tabs, we still need to save model/language selections if they changed
    if (activeTab !== 'general') {
      updateSettings({
        ...localSettings,
        available_models: Array.from(selectedModelIds),
        available_languages: Array.from(selectedLanguages),
        settings_modal_geometry: {
          x: geometry.x,
          y: geometry.y,
          width: geometry.width,
          height: geometry.height
        }
      });
    }
    onClose();
  }

  const handleSettingChange = (key, value) => {
    const newSettings = { ...localSettings, [key]: value };
    setLocalSettings(newSettings);
    // Auto-save: persist immediately
    setSetting(key, value);
    // Clear API test status when settings change
    if (key === 'api_url' || key === 'api_key') {
      setApiTestStatus(null);
      setApiTestMessage('');
    }
  };

  const handleTestApi = async () => {
    const apiUrl = localSettings.api_url || 'https://openrouter.ai/api/v1';
    const apiKey = localSettings.api_key || '';

    if (!apiUrl.trim()) {
      setApiTestStatus('error');
      setApiTestMessage('API URL is required');
      return;
    }

    if (!apiKey.trim()) {
      setApiTestStatus('error');
      setApiTestMessage('API Key is required');
      return;
    }

    setApiTestStatus('testing');
    setApiTestMessage('Testing connection...');

    try {
      // Make a direct API call to test the configuration
      // Normalize the URL (ensure it doesn't end with /)
      const normalizedUrl = apiUrl.trim().replace(/\/$/, '');
      const testUrl = `${normalizedUrl}/models`;

      const response = await fetch(testUrl, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`,
          'HTTP-Referer': 'https://github.com/TranslateRewrite/translator-and-rewriter',
          'X-Title': 'Translator & Rewriter',
        },
      });

      if (!response.ok) {
        const errorText = await response.text();
        let errorMessage = `HTTP ${response.status}: ${response.statusText}`;
        try {
          const errorData = JSON.parse(errorText);
          if (errorData.error?.message) {
            errorMessage = errorData.error.message;
          }
        } catch (e) {
          // If parsing fails, use the status text
        }
        throw new Error(errorMessage);
      }

      const data = await response.json();
      const models = data.data || [];

      if (models.length > 0) {
        setApiTestStatus('success');
        setApiTestMessage(`Success! Connected to API. Found ${models.length} models.`);
      } else {
        setApiTestStatus('error');
        setApiTestMessage('Connection successful but no models returned. Check your API key permissions.');
      }
    } catch (error) {
      setApiTestStatus('error');
      setApiTestMessage(`Connection failed: ${error.message}`);
    }
  };

  // --- Drag Logic ---
  const handleMouseDown = (e) => {
    // Only drag if clicking the header itself, not buttons inside
    if (e.target.closest('button')) return;

    setIsDragging(true);
    setDragOffset({
      x: e.clientX - geometry.x,
      y: e.clientY - geometry.y
    });
  };

  // --- Resize Logic ---
  const handleResizeMouseDown = (e) => {
    e.stopPropagation();
    setIsResizing(true);
    setResizeStart({
      x: e.clientX,
      y: e.clientY,
      width: geometry.width,
      height: geometry.height
    });
  };

  // Global Mouse Events for Drag/Resize
  useEffect(() => {
    if (isStandalone) return;

    const handleMouseMove = (e) => {
      if (isDragging) {
        setGeometry(prev => ({
          ...prev,
          x: e.clientX - dragOffset.x,
          y: e.clientY - dragOffset.y
        }));
      } else if (isResizing) {
        const deltaX = e.clientX - resizeStart.x;
        const deltaY = e.clientY - resizeStart.y;
        setGeometry(prev => ({
          ...prev,
          width: Math.max(780, resizeStart.width + deltaX),
          height: Math.max(300, resizeStart.height + deltaY)
        }));
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
      setIsResizing(false);
    };

    if (isDragging || isResizing) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, isResizing, dragOffset, resizeStart, isStandalone]);

  // --- Model Logic ---

  const toggleModelSelection = (modelId) => {
    const newSet = new Set(selectedModelIds);
    if (newSet.has(modelId)) {
      newSet.delete(modelId);
    } else {
      newSet.add(modelId);
    }
    setSelectedModelIds(newSet);
    // Auto-save: persist immediately
    setSetting('available_models', Array.from(newSet));
  };

  const filteredModels = useMemo(() => {
    return allModels.filter(model => {
      const matchesSearch = model.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (model.name && model.name.toLowerCase().includes(searchTerm.toLowerCase()));

      let matchesFree = true;
      if (filterFree) {
        const pricing = model.pricing || {};
        const isFree = parseFloat(pricing.prompt || 0) === 0 && parseFloat(pricing.completion || 0) === 0;
        matchesFree = isFree;
      }

      return matchesSearch && matchesFree;
    });
  }, [allModels, searchTerm, filterFree]);

  // Helper to get model name (string after ":")
  const getModelName = (model) => {
    // First check if model.name exists and contains ":"
    if (model.name) {
      const nameParts = model.name.split(':');
      if (nameParts.length > 1) {
        return nameParts.slice(1).join(':');
      }
    }
    
    // Check model.id for ":"
    const id = model.id || '';
    const idParts = id.split(':');
    if (idParts.length > 1) {
      return idParts.slice(1).join(':');
    }
    
    // Fallback: if ID has "/", use part after "/"
    const slashParts = id.split('/');
    if (slashParts.length > 1) {
      return slashParts.slice(1).join('/');
    }
    
    // Final fallback: use model.name or full id
    return model.name || id;
  };

  // Helper to get model cost (prompt + completion per 1M tokens)
  const getModelCost = (model) => {
    const pricing = model.pricing || {};
    const prompt = parseFloat(pricing.prompt || 0);
    const completion = parseFloat(pricing.completion || 0);
    return prompt + completion;
  };

  // Group models by provider (first part of ID) - only used for provider sorting
  const groupedModels = useMemo(() => {
    const groups = {};
    filteredModels.forEach(model => {
      const provider = model.id.split('/')[0] || 'Other';
      if (!groups[provider]) groups[provider] = [];
      groups[provider].push(model);
    });
    return groups;
  }, [filteredModels]);

  // Sorted and formatted models based on sortBy
  const sortedModelsData = useMemo(() => {
    const [sortType, sortDir] = sortBy.split('-');
    const ascending = sortDir === 'asc';

    if (sortType === 'provider') {
      // Provider sorting: keep grouped format
      const sortedProviders = Object.keys(groupedModels).sort((a, b) => {
        return ascending ? a.localeCompare(b) : b.localeCompare(a);
      });
      
      const sortedGroups = {};
      sortedProviders.forEach(provider => {
        sortedGroups[provider] = groupedModels[provider];
      });
      
      return { type: 'grouped', data: sortedGroups };
    } else {
      // Cost or Model sorting: flat list
      const sorted = [...filteredModels].sort((a, b) => {
        let comparison = 0;
        
        if (sortType === 'cost') {
          const costA = getModelCost(a);
          const costB = getModelCost(b);
          comparison = costA - costB;
        } else if (sortType === 'model') {
          const nameA = getModelName(a).toLowerCase();
          const nameB = getModelName(b).toLowerCase();
          comparison = nameA.localeCompare(nameB);
        }
        
        return ascending ? comparison : -comparison;
      });
      
      return { type: 'flat', data: sorted };
    }
  }, [filteredModels, groupedModels, sortBy]);

  const toggleProvider = (provider) => {
    const newSet = new Set(expandedProviders);
    if (newSet.has(provider)) {
      newSet.delete(provider);
    } else {
      newSet.add(provider);
    }
    setExpandedProviders(newSet);
  };

  const expandAll = () => setExpandedProviders(new Set(Object.keys(groupedModels)));
  const collapseAll = () => setExpandedProviders(new Set());

  const deselectAllModels = () => {
    if (selectedModelIds.size === 0) return;
    
    if (window.confirm('Are you sure you want to deselect all models? This will remove all selected models from the list.')) {
      setSelectedModelIds(new Set());
      // Auto-save: persist immediately
      setSetting('available_models', []);
    }
  };

  // --- Render Helpers ---

  if (!isOpen) return null;

  const modalContent = (
    <div
      className={`modal settings-modal ${isStandalone ? 'standalone' : ''}`}
      style={!isStandalone ? {
        width: `${geometry.width}px`,
        height: `${geometry.height}px`,
        top: `${geometry.y}px`,
        left: `${geometry.x}px`,
        position: 'absolute',
        transform: 'none',
        margin: 0
      } : {
        width: '100vw',
        height: '100vh',
        borderRadius: 0,
        border: 'none',
        boxShadow: 'none',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <div
        className={`modal-header ${!isStandalone ? 'draggable' : ''}`}
        onMouseDown={!isStandalone ? handleMouseDown : undefined}
        style={!isStandalone ? { cursor: isDragging ? 'grabbing' : 'grab' } : {}}
      >
        <h2>Settings</h2>
        <button className="close-btn-text" onClick={handleClose}>Close</button>
      </div>

      <div className="tabs-header">
        <button
          className={`tab-btn ${activeTab === 'general' ? 'active' : ''}`}
          onClick={() => setActiveTab('general')}
        >
          General
        </button>
        <button
          className={`tab-btn ${activeTab === 'models' ? 'active' : ''}`}
          onClick={() => setActiveTab('models')}
        >
          Models
        </button>
        <button
          className={`tab-btn ${activeTab === 'languages' ? 'active' : ''}`}
          onClick={() => setActiveTab('languages')}
        >
          Languages
        </button>
      </div>

      <div className="modal-body settings-body" style={{ flex: 1 }}>
        {/* GENERAL TAB */}
        {activeTab === 'general' && (
          <div className="tab-content">
            <div className="section">
              <h3>API Configuration</h3>
              <div className="form-group">
                <label>API URL:</label>
                <input
                  type="text"
                  value={localSettings.api_url || 'https://openrouter.ai/api/v1'}
                  onChange={(e) => handleSettingChange('api_url', e.target.value)}
                  placeholder="https://openrouter.ai/api/v1"
                />
              </div>
              <div className="form-group">
                <label>OpenRouter API Key:</label>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <input
                    type={showApiKey ? 'text' : 'password'}
                    value={localSettings.api_key || ''}
                    onChange={(e) => handleSettingChange('api_key', e.target.value)}
                    placeholder="sk-or-..."
                    style={{ flex: 1 }}
                  />
                  <label style={{ display: 'flex', alignItems: 'center', gap: '4px', whiteSpace: 'nowrap', cursor: 'pointer' }}>
                    <input
                      type="checkbox"
                      checked={showApiKey}
                      onChange={(e) => setShowApiKey(e.target.checked)}
                    />
                    <span style={{ fontSize: '12px' }}>Show</span>
                  </label>
                </div>
              </div>
              <div className="form-group" style={{ marginTop: '8px' }}>
                <button
                  className="btn"
                  onClick={handleTestApi}
                  disabled={apiTestStatus === 'testing'}
                  style={{ width: '100%' }}
                >
                  {apiTestStatus === 'testing' ? 'Testing...' : 'Test API Configuration'}
                </button>
                {apiTestStatus && (
                  <div
                    style={{
                      marginTop: '8px',
                      padding: '8px',
                      borderRadius: '4px',
                      fontSize: '12px',
                      backgroundColor: apiTestStatus === 'success' ? '#d4edda' : '#f8d7da',
                      color: apiTestStatus === 'success' ? '#155724' : '#721c24',
                      border: `1px solid ${apiTestStatus === 'success' ? '#c3e6cb' : '#f5c6cb'}`
                    }}
                  >
                    {apiTestMessage}
                  </div>
                )}
              </div>
            </div>

            <div className="section">
              <h3>Cost Tracking</h3>
              <div className="cost-row">
                <span>Total Cost: ${parseFloat(localSettings.total_cost || 0).toFixed(6)}</span>
                <button
                  className="btn small"
                  onClick={() => handleSettingChange('total_cost', 0)}
                >
                  Reset Cost
                </button>
              </div>
            </div>

            <div className="section">
              <h3>Behavior</h3>
              <div className="form-group">
                <label>Enter Key Behavior:</label>
                <select
                  value={localSettings.enter_behavior || 'Translate'}
                  onChange={(e) => handleSettingChange('enter_behavior', e.target.value)}
                >
                  <option value="Translate">Translate / Rewrite</option>
                  <option value="Newline">New Line</option>
                  <option value="Shift-Translate">Shift+Enter to Translate</option>
                </select>
              </div>
              <div className="checkbox-group">
                <label>
                  <input
                    type="checkbox"
                    checked={localSettings.auto_copy || false}
                    onChange={(e) => handleSettingChange('auto_copy', e.target.checked)}
                  />
                  Auto-copy result to clipboard
                </label>
                <label>
                  <input
                    type="checkbox"
                    checked={localSettings.real_time_translation || false}
                    onChange={(e) => handleSettingChange('real_time_translation', e.target.checked)}
                  />
                  Real-time translation (while typing)
                </label>
              </div>
            </div>

            <div className="section">
              <h3>Appearance</h3>
              <div className="form-row">
                <div className="form-group">
                  <label>Font Family:</label>
                  <select
                    value={localSettings.font_family || 'Arial'}
                    onChange={(e) => handleSettingChange('font_family', e.target.value)}
                  >
                    <option value="Arial">Arial</option>
                    <option value="Segoe UI">Segoe UI</option>
                    <option value="Verdana">Verdana</option>
                    <option value="Consolas">Consolas</option>
                    <option value="Times New Roman">Times New Roman</option>
                  </select>
                </div>
                <div className="form-group narrow">
                  <label>Size:</label>
                  <input
                    type="number"
                    value={localSettings.font_size || 14}
                    onChange={(e) => handleSettingChange('font_size', parseInt(e.target.value))}
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Input Color:</label>
                  <input
                    type="color"
                    value={localSettings.input_text_color || '#ffffff'}
                    onChange={(e) => handleSettingChange('input_text_color', e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Output Color:</label>
                  <input
                    type="color"
                    value={localSettings.output_text_color || '#ffffff'}
                    onChange={(e) => handleSettingChange('output_text_color', e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* MODELS TAB */}
        {activeTab === 'models' && (
          <div className="tab-content models-tab">
            <div className="models-split-view">
              {/* LEFT: AVAILABLE */}
              <div className="models-pane left">
                <h4>Available Models</h4>
                <div className="models-controls">
                  <input
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <label>
                    <input
                      type="checkbox"
                      checked={filterFree}
                      onChange={(e) => setFilterFree(e.target.checked)}
                    />
                    Free Only
                  </label>
                </div>
                <div className="models-actions">
                  {sortBy.startsWith('provider') && (
                    <>
                      <button onClick={expandAll} className="btn xsmall">Expand All</button>
                      <button onClick={collapseAll} className="btn xsmall">Collapse All</button>
                    </>
                  )}
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="btn xsmall sort-select"
                    style={{
                      padding: '2px 6px',
                      fontSize: '11px',
                      height: 'auto',
                      minWidth: '100px'
                    }}
                  >
                    <option value="cost-asc">Cost ↓</option>
                    <option value="cost-desc">Cost ↑</option>
                    <option value="model-asc">Model ↓</option>
                    <option value="model-desc">Model ↑</option>
                    <option value="provider-asc">Provider ↓</option>
                    <option value="provider-desc">Provider ↑</option>
                  </select>
                </div>

                <div className="models-list">
                  {sortedModelsData.type === 'grouped' ? (
                    // Provider sorting: show grouped format with expand/collapse
                    Object.keys(sortedModelsData.data).map(provider => (
                      <div key={provider} className="provider-group">
                        <div
                          className="provider-header"
                          onClick={() => toggleProvider(provider)}
                        >
                          {expandedProviders.has(provider) ? '▼' : '▶'} {provider}
                        </div>
                        {expandedProviders.has(provider) && (
                          <div className="provider-models">
                            {sortedModelsData.data[provider].map(model => (
                              <div
                                key={model.id}
                                className={`model-item ${selectedModelIds.has(model.id) ? 'selected' : ''}`}
                                onClick={() => toggleModelSelection(model.id)}
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
                          onClick={() => toggleModelSelection(model.id)}
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
                <h4>Selected Models</h4>
                <div style={{ marginBottom: '8px' }}>
                  <button onClick={deselectAllModels} className="btn xsmall" disabled={selectedModelIds.size === 0}>
                    Deselect All
                  </button>
                </div>
                <div className="selected-list">
                  {Array.from(selectedModelIds).sort().map(modelId => {
                    const model = allModels.find(m => m.id === modelId) || { id: modelId };
                    return (
                      <div
                        key={modelId}
                        className="selected-item"
                        onClick={() => toggleModelSelection(modelId)}
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
        )}

        {/* LANGUAGES TAB */}
        {activeTab === 'languages' && (
          <div className="tab-content languages-tab">
            <p>Select languages to appear in dropdowns:</p>
            <div className="languages-grid">
              {(() => {
                // Combine predefined languages with any custom languages from selectedLanguages
                const customLangs = Array.from(selectedLanguages).filter(
                  lang => !ALL_AVAILABLE_LANGUAGES.includes(lang)
                );
                // Sort with explicit localeCompare options for consistent alphabetical sorting
                const allLangs = [...ALL_AVAILABLE_LANGUAGES, ...customLangs].sort((a, b) => 
                  a.localeCompare(b, undefined, { sensitivity: 'base', numeric: true })
                );
                
                // Distribute languages across 4 columns using the provided formula:
                // number_of_lines = int(nLang / 4)
                // excess = nLang % 4
                // n-column = number_of_lines + (1 if n <= excess else 0)
                const nLang = allLangs.length;
                const numColumns = 4;
                const number_of_lines = Math.floor(nLang / numColumns);
                const excess = nLang % numColumns;
                
                // Calculate items per column (1-indexed columns)
                const itemsPerColumn = [];
                for (let n = 1; n <= numColumns; n++) {
                  itemsPerColumn.push(number_of_lines + (n <= excess ? 1 : 0));
                }
                
                // Distribute languages into columns
                const columns = [];
                let currentIndex = 0;
                for (let col = 0; col < numColumns; col++) {
                  const itemsInThisColumn = itemsPerColumn[col];
                  columns.push(allLangs.slice(currentIndex, currentIndex + itemsInThisColumn));
                  currentIndex += itemsInThisColumn;
                }
                
                // Reorder for CSS Grid (which fills row by row)
                // Find the maximum column length
                const maxColumnLength = Math.max(...itemsPerColumn);
                const columnWiseLangs = [];
                
                for (let row = 0; row < maxColumnLength; row++) {
                  for (let col = 0; col < numColumns; col++) {
                    if (row < columns[col].length) {
                      columnWiseLangs.push(columns[col][row]);
                    }
                  }
                }
                
                return columnWiseLangs.map(lang => (
                  <label key={lang} className="lang-checkbox">
                    <input
                      type="checkbox"
                      checked={selectedLanguages.has(lang)}
                      onChange={(e) => {
                        const newSet = new Set(selectedLanguages);
                        if (e.target.checked) newSet.add(lang);
                        else newSet.delete(lang);
                        setSelectedLanguages(newSet);
                        // Auto-save: persist immediately
                        setSetting('available_languages', Array.from(newSet));
                      }}
                    />
                    {lang}
                  </label>
                ));
              })()}
            </div>

            <div className="languages-section">
              <h3 style={{ marginTop: 36 }}>Custom Language</h3>
              <div className="form-group">
                <input
                  type="text"
                  value={customLanguage}
                  onChange={(e) => setCustomLanguage(e.target.value)}
                  onBlur={(e) => {
                    const lang = e.target.value.trim();
                    if (lang && !selectedLanguages.has(lang) && !ALL_AVAILABLE_LANGUAGES.includes(lang)) {
                      const newSet = new Set(selectedLanguages);
                      newSet.add(lang);
                      setSelectedLanguages(newSet);
                      // Auto-save: persist immediately
                      setSetting('available_languages', Array.from(newSet));
                    }
                  }}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      const lang = customLanguage.trim();
                      if (lang && !selectedLanguages.has(lang) && !ALL_AVAILABLE_LANGUAGES.includes(lang)) {
                        const newSet = new Set(selectedLanguages);
                        newSet.add(lang);
                        setSelectedLanguages(newSet);
                        setCustomLanguage('');
                        // Auto-save: persist immediately
                        setSetting('available_languages', Array.from(newSet));
                      }
                    }
                  }}
                  placeholder="Enter custom language name and press Enter"
                />
              </div>
            </div>
          </div>
        )}
      </div>

    </div>
  );

  if (isStandalone) {
    return modalContent;
  }

  return (
    <div className="modal-overlay">
      {modalContent}
    </div>
  );
};

export default SettingsDialog;