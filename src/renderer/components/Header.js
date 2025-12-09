import React from "react";
import { Cpu, ChevronDown, Settings } from "lucide-react";
import Logo from "../../../TR_logo_withoutblackbox.png";

const Header = ({
  title,
  onSettingsClick,
  models = [],
  currentModel,
  onModelChange,
}) => {
  return (
    <div className="header">
      <div className="title title-with-logo">
        <img
          className="title-logo"
          src={Logo}
          alt="Translator & Rewriter logo"
        />
        {title}
      </div>
      <div className="header-controls">
        {models.length > 0 && (
          <div className="model-selector">
            <label style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Cpu size={14} color="#4A90E2" />
              Model:
            </label>
            <div style={{ position: 'relative' }}>
              <select
                value={currentModel || ""}
                onChange={(e) => onModelChange(e.target.value)}
                className="model-dropdown"
                style={{ paddingRight: '32px' }}
              >
                {models.map((model) => (
                  <option key={model} value={model}>
                    {model}
                  </option>
                ))}
              </select>
              <ChevronDown 
                size={16} 
                color="#d0d0d0" 
                style={{ 
                  position: 'absolute', 
                  right: '10px', 
                  top: '50%', 
                  transform: 'translateY(-50%)', 
                  pointerEvents: 'none' 
                }} 
              />
            </div>
          </div>
        )}
        <button
          className="settings-btn"
          onClick={onSettingsClick}
          title="Settings"
        >
          <Settings size={18} />
        </button>
      </div>
    </div>
  );
};

export default Header;
