import React, { useState, useEffect, useMemo } from 'react';
import { useAppContext } from '../contexts/AppContext';

const SettingsDialog = ({ isOpen, onClose, isStandalone = false }) => {
  const { settings, allModels, languages, updateSettings, setSetting } = useAppContext();

  // Local state for pending changes
  const [localSettings, setLocalSettings] = useState({});
  const [activeTab, setActiveTab] = useState('general');

  // Geometry State
  const [geometry, setGeometry] = useState({
    x: 0,
    y: 0,
    width: 950,
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

  // Languages Tab State
  const [selectedLanguages, setSelectedLanguages] = useState(new Set());

  // Initialize checks
  useEffect(() => {
    if (isOpen) {
      setLocalSettings({ ...settings });
      setSelectedModelIds(new Set(settings.available_models || []));
      setSelectedLanguages(new Set(settings.available_languages || []));

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
          // Default center
          const width = 950;
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
    // We should save geometry even on cancel? Usually yes for windows.
    // Update only the geometry part of settings without saving other changes
    if (!isStandalone) {
      setSetting('settings_modal_geometry', {
        x: geometry.x,
        y: geometry.y,
        width: geometry.width,
        height: geometry.height
      });
    }
    onClose();
  }

  const handleSettingChange = (key, value) => {
    setLocalSettings(prev => ({ ...prev, [key]: value }));
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
          width: Math.max(400, resizeStart.width + deltaX),
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

  // Group models by provider (first part of ID)
  const groupedModels = useMemo(() => {
    const groups = {};
    filteredModels.forEach(model => {
      const provider = model.id.split('/')[0] || 'Other';
      if (!groups[provider]) groups[provider] = [];
      groups[provider].push(model);
    });
    return groups;
  }, [filteredModels]);

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
        <button className="close-btn" onClick={onClose}>×</button>
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
                <label>OpenRouter API Key:</label>
                <input
                  type="password"
                  value={localSettings.api_key || ''}
                  onChange={(e) => handleSettingChange('api_key', e.target.value)}
                  placeholder="sk-or-..."
                />
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
                  <button onClick={expandAll} className="btn xsmall">Expand All</button>
                  <button onClick={collapseAll} className="btn xsmall">Collapse All</button>
                </div>

                <div className="models-list">
                  {Object.keys(groupedModels).sort().map(provider => (
                    <div key={provider} className="provider-group">
                      <div
                        className="provider-header"
                        onClick={() => toggleProvider(provider)}
                      >
                        {expandedProviders.has(provider) ? '▼' : '▶'} {provider}
                      </div>
                      {expandedProviders.has(provider) && (
                        <div className="provider-models">
                          {groupedModels[provider].map(model => (
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
                  ))}
                </div>
              </div>

              {/* RIGHT: SELECTED */}
              <div className="models-pane right">
                <h4>Selected Models</h4>
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
              {languages.sort((a, b) => a.localeCompare(b)).map(lang => (
                <label key={lang} className="lang-checkbox">
                  <input
                    type="checkbox"
                    checked={selectedLanguages.has(lang)}
                    onChange={(e) => {
                      const newSet = new Set(selectedLanguages);
                      if (e.target.checked) newSet.add(lang);
                      else newSet.delete(lang);
                      setSelectedLanguages(newSet);
                    }}
                  />
                  {lang}
                </label>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="modal-footer">
        <button className="btn" onClick={handleClose}>Cancel</button>
        <button className="btn primary" onClick={handleSave}>Save & Close</button>

        {!isStandalone && (
          <div
            className="resize-handle"
            onMouseDown={handleResizeMouseDown}
          />
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