import React from 'react';
import { Globe, ChevronDown } from 'lucide-react';

const LanguageSelector = ({ 
  label, 
  value, 
  onChange, 
  languages = [],
  allLanguages = [],
  detectLanguage = false
}) => {
  let languageOptions = [];

  if (detectLanguage) {
    // For "From:" dropdown: Detect Language first, then selected languages, separator, then remaining
    const selectedSet = new Set(languages);
    const selected = [...languages].sort((a, b) => a.localeCompare(b));
    const remaining = allLanguages
      .filter(lang => !selectedSet.has(lang))
      .sort((a, b) => a.localeCompare(b));
    
    languageOptions = ['Detect Language', '---', ...selected];
    if (remaining.length > 0) {
      languageOptions.push('---'); // Separator
      languageOptions.push(...remaining);
    }
  } else {
    // For "To:" dropdown: just selected languages
    languageOptions = [...languages].sort((a, b) => a.localeCompare(b));
  }

  return (
    <div className="language-selector">
      <label style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
        <Globe size={14} color="#4A90E2" />
        {label}
      </label>
      <div style={{ position: 'relative', flex: 1 }}>
        <select 
          value={value} 
          onChange={(e) => onChange(e.target.value)}
          className="language-dropdown"
          style={{ paddingRight: '36px' }}
        >
        {languageOptions.map((lang, index) => {
          if (lang === '---') {
            return (
              <option 
                key={`separator-${index}`}
                value=""
                disabled
                style={{ 
                  fontStyle: 'normal',
                  fontWeight: 'normal'
                }}
              >
                ────────────
              </option>
            );
          }
          return (
            <option key={lang} value={lang}>
              {lang}
            </option>
          );
        })}
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

export default LanguageSelector;