import React from 'react';

const StyleSelector = ({ 
  label,
  value, 
  onChange,
  styles = []
}) => {
  return (
    <div className="style-selector">
      <label>{label}</label>
      <select 
        value={value} 
        onChange={(e) => onChange(e.target.value)}
        className="style-dropdown"
      >
        {styles.map((style) => (
          <option key={style} value={style}>
            {style}
          </option>
        ))}
      </select>
    </div>
  );
};

export default StyleSelector;