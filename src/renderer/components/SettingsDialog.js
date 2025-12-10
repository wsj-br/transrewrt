import React, { useState, useEffect, useMemo, useRef } from 'react';
import { 
  Button,
  makeStyles,
  tokens,
} from '@fluentui/react-components';
import { useAppContext } from '../contexts/AppContext';
import SettingsDialogGeneralTab from './SettingsDialogGeneralTab';
import SettingsDialogModelsTab from './SettingsDialogModelsTab';
import SettingsDialogLanguagesTab from './SettingsDialogLanguagesTab';

const SettingsDialog = ({ isOpen, onClose, isStandalone = false }) => {
  const { settings, allModels, languages, updateSettings, setSetting, fetchModels } = useAppContext();
  const prevIsOpenRef = useRef(false);

  // Local state for pending changes
  const [localSettings, setLocalSettings] = useState({});
  const [activeTab, setActiveTab] = useState('general');

  // Geometry State
  const [geometry, setGeometry] = useState({
    x: 0,
    y: 0,
    width: Math.max(1100, 1050),
    height: 700
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
  
  // Models loading state
  const [modelsLoading, setModelsLoading] = useState(false);
  const [modelsError, setModelsError] = useState(null);

  // Initialize checks when dialog opens
  useEffect(() => {
    const wasOpen = prevIsOpenRef.current;
    prevIsOpenRef.current = isOpen;
    
    if (isOpen) {
      // Only reset UI state when dialog first opens (not when settings change)
      const isOpening = !wasOpen;
      
      if (isOpening) {
        setShowApiKey(false);
        setApiTestStatus(null);
        setApiTestMessage('');
        setCustomLanguage('');
        setModelsError(null);
        
        // Fetch models when Settings opens (if not already loaded)
        if (allModels.length === 0) {
          setModelsLoading(true);
          fetchModels()
            .then(() => {
              setModelsLoading(false);
            })
            .catch((err) => {
              setModelsError(err.message || 'Failed to load models');
              setModelsLoading(false);
            });
        }
      }
      
      // Always sync settings when dialog is open
      setLocalSettings({ ...settings });
      setSelectedModelIds(new Set(settings.available_models || []));
      setSelectedLanguages(new Set(settings.available_languages || []));

      // Load saved geometry or set default only if NOT standalone (only on opening)
      if (isOpening && !isStandalone) {
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
          // Default center - ensure minimum width of 1050px
          const width = Math.max(1100, 1050);
          const height = 700;
          const x = (window.innerWidth - width) / 2;
          const y = (window.innerHeight - height) / 2;
          setGeometry({ x: x > 0 ? x : 50, y: y > 0 ? y : 50, width, height });
        }
      }
    }
  }, [isOpen, isStandalone, settings, allModels.length]);

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
    console.log('[API Test] Starting API connection test...');
    
    const apiUrl = localSettings.api_url || 'https://openrouter.ai/api/v1';
    const apiKey = localSettings.api_key || '';
    
    console.log('[API Test] API URL:', apiUrl);
    console.log('[API Test] API Key present:', apiKey ? `Yes (${apiKey.length} chars, starts with: ${apiKey.substring(0, 6)}...)` : 'No');

    if (!apiUrl.trim()) {
      console.error('[API Test] Validation failed: API URL is required');
      setApiTestStatus('error');
      setApiTestMessage('API URL is required');
      return;
    }

    if (!apiKey.trim()) {
      console.error('[API Test] Validation failed: API Key is required');
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
      const testUrl = `${normalizedUrl}/key`;
      
      console.log('[API Test] Normalized URL:', normalizedUrl);
      console.log('[API Test] Test URL:', testUrl);
      console.log('[API Test] Making fetch request...');

      const response = await fetch(testUrl, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`,
          'HTTP-Referer': 'https://github.com/TranslateRewrite/translator-and-rewriter',
          'X-Title': 'Translator & Rewriter',
        },
      });

      console.log('[API Test] Response received:', {
        status: response.status,
        statusText: response.statusText,
        ok: response.ok,
        headers: Object.fromEntries(response.headers.entries())
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error('[API Test] Error response:', {
          status: response.status,
          statusText: response.statusText,
          body: errorText
        });
        
        let errorMessage = `HTTP ${response.status}: ${response.statusText}`;
        try {
          const errorData = JSON.parse(errorText);
          console.log('[API Test] Parsed error data:', errorData);
          if (errorData.error?.message) {
            errorMessage = errorData.error.message;
          }
        } catch (e) {
          console.warn('[API Test] Failed to parse error response as JSON:', e);
        }
        throw new Error(errorMessage);
      }

      const data = await response.json();
      console.log('[API Test] Response data received:', data);
      
      // The /key endpoint returns key information, not a list
      // Check if we got a valid response (should have key data or success indicator)
      if (data && (data.data || data.id || response.ok)) {
        const keyInfo = data.data || data;
        console.log('[API Test] ✓ Success! API key is valid. Key info:', keyInfo);
        setApiTestStatus('success');
        const keyLabel = keyInfo.label || keyInfo.id || 'API key';
        setApiTestMessage(`Success! Connected to API. Valid API key: ${keyLabel}`);
      } else {
        console.warn('[API Test] ⚠ Connection successful but unexpected response format');
        setApiTestStatus('error');
        setApiTestMessage('Connection successful but unexpected response. Check your API key permissions.');
      }
    } catch (error) {
      console.error('[API Test] ✗ Connection failed:', error);
      console.error('[API Test] Error details:', {
        message: error.message,
        stack: error.stack,
        name: error.name
      });
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
        <Button appearance="secondary" onClick={handleClose}>Close</Button>
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
          <SettingsDialogGeneralTab
            localSettings={localSettings}
            showApiKey={showApiKey}
            apiTestStatus={apiTestStatus}
            apiTestMessage={apiTestMessage}
            onSettingChange={handleSettingChange}
            onShowApiKeyChange={setShowApiKey}
            onTestApi={handleTestApi}
          />
        )}

        {/* MODELS TAB */}
        {activeTab === 'models' && (
          <SettingsDialogModelsTab
            allModels={allModels}
            selectedModelIds={selectedModelIds}
            searchTerm={searchTerm}
            filterFree={filterFree}
            sortBy={sortBy}
            expandedProviders={expandedProviders}
            sortedModelsData={sortedModelsData}
            modelsLoading={modelsLoading}
            modelsError={modelsError}
            onSearchTermChange={setSearchTerm}
            onFilterFreeChange={setFilterFree}
            onSortByChange={setSortBy}
            onRefreshModels={() => {
              setModelsLoading(true);
              setModelsError(null);
              fetchModels()
                .then(() => {
                  setModelsLoading(false);
                })
                .catch((err) => {
                  setModelsError(err.message || 'Failed to refresh models');
                  setModelsLoading(false);
                });
            }}
            onToggleProvider={toggleProvider}
            onExpandAll={expandAll}
            onCollapseAll={collapseAll}
            onToggleModelSelection={toggleModelSelection}
            onDeselectAllModels={deselectAllModels}
            getModelName={getModelName}
          />
        )}

        {/* LANGUAGES TAB */}
        {activeTab === 'languages' && (
          <SettingsDialogLanguagesTab
            selectedLanguages={selectedLanguages}
            customLanguage={customLanguage}
            onSelectedLanguagesChange={setSelectedLanguages}
            onCustomLanguageChange={setCustomLanguage}
            onSetting={setSetting}
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
