import React from 'react';

const LanguageSelector = ({ 
  label, 
  value, 
  onChange, 
  languages = [],
  detectLanguage = false
}) => {
  const languageOptions = detectLanguage 
    ? ['Detect Language', ...languages] 
    : languages;

  return (
    <div className="language-selector">
      <label>{label}</label>
      <select 
        value={value} 
        onChange={(e) => onChange(e.target.value)}
        className="language-dropdown"
      >
        {languageOptions.map((lang) => (
          <option key={lang} value={lang}>
            {lang}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSelector;