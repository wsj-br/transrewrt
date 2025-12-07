import React from "react";
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
            <label>Model:</label>
            <select
              value={currentModel || ""}
              onChange={(e) => onModelChange(e.target.value)}
              className="model-dropdown"
            >
              {models.map((model) => (
                <option key={model} value={model}>
                  {model}
                </option>
              ))}
            </select>
          </div>
        )}
        <button
          className="settings-btn"
          onClick={onSettingsClick}
          title="Settings"
        >
          ⚙️
        </button>
      </div>
    </div>
  );
};

export default Header;
