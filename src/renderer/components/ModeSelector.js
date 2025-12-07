import React from 'react';

const ModeSelector = ({ currentMode, onModeChange }) => {
  return (
    <div className="mode-selector">
      <button 
        className={`mode-btn ${currentMode === 'translate' ? 'active' : ''}`}
        onClick={() => onModeChange('translate')}
      >
        Translate
      </button>
      <button 
        className={`mode-btn ${currentMode === 'rewrite' ? 'active' : ''}`}
        onClick={() => onModeChange('rewrite')}
      >
        Rewrite
      </button>
    </div>
  );
};

export default ModeSelector;