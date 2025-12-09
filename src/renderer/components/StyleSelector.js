import React from 'react';
import { Palette, ChevronDown } from 'lucide-react';

const StyleSelector = ({ 
  label,
  value, 
  onChange,
  styles = []
}) => {
  return (
    <div className="style-selector">
      <label style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
        <Palette size={14} color="#9B59B6" />
        {label}
      </label>
      <div style={{ position: 'relative', flex: 1 }}>
        <select 
          value={value} 
          onChange={(e) => onChange(e.target.value)}
          className="style-dropdown"
          style={{ paddingRight: '36px' }}
        >
          {styles.map((style) => (
            <option key={style} value={style}>
              {style}
            </option>
          ))}
        </select>
        <ChevronDown 
          size={16} 
          color="#d0d0d0" 
          style={{ 
            position: 'absolute', 
            right: '12px', 
            top: '50%', 
            transform: 'translateY(-50%)', 
            pointerEvents: 'none' 
          }} 
        />
      </div>
    </div>
  );
};

export default StyleSelector;