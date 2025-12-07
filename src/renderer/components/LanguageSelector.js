import React from 'react';

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
    
    languageOptions = ['Detect Language', ...selected];
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
      <label>{label}</label>
      <select 
        value={value} 
        onChange={(e) => onChange(e.target.value)}
        className="language-dropdown"
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
    </div>
  );
};

export default LanguageSelector;