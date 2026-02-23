import React, { useState, useEffect, useMemo } from 'react';
import { Checkbox, Input, Text, tokens } from '@fluentui/react-components';
import { Languages, Trash2, Globe } from 'lucide-react';
import { ALL_AVAILABLE_LANGUAGES } from '../utils/languageConstants';

// Function to split languages into columns
const splitIntoColumns = (languages, numColumns) => {
  const itemsPerColumn = Math.ceil(languages.length / numColumns);
  const columns = [];
  
  for (let i = 0; i < numColumns; i++) {
    const start = i * itemsPerColumn;
    const end = start + itemsPerColumn;
    columns.push(languages.slice(start, end));
  }
  
  return columns;
};

const SettingsDialogLanguagesTab = ({
  selectedLanguages,
  customLanguage,
  onSelectedLanguagesChange,
  onCustomLanguageChange,
  onSetting,
}) => {
  const [numColumns, setNumColumns] = useState(5);

  // Combine predefined languages with any custom languages from selectedLanguages
  const customLangs = useMemo(() =>
    Array.from(selectedLanguages).filter(
      lang => !ALL_AVAILABLE_LANGUAGES.includes(lang)
    ),
    [selectedLanguages]
  );

  const allLangs = useMemo(() =>
    [...ALL_AVAILABLE_LANGUAGES, ...customLangs].sort((a, b) =>
      a.localeCompare(b, undefined, { sensitivity: 'base', numeric: true })
    ),
    [customLangs]
  );

  // Compute columns directly from allLangs and numColumns
  const columns = useMemo(() =>
    splitIntoColumns(allLangs, numColumns),
    [allLangs, numColumns]
  );

  // Responsive behavior based on window width
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setNumColumns(1);
      } else if (width < 768) {
        setNumColumns(2);
      } else if (width < 1024) {
        setNumColumns(3);
      } else if (width < 1280) {
        setNumColumns(4);
      } else {
        setNumColumns(5);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const sectionTitleStyle = { display: 'flex', alignItems: 'center', gap: '8px', marginTop: 0, marginBottom: '36px' };

  return (
    <div className="tab-content languages-tab">
      <div className="section">
        <Text as="h3" size={500} weight="semibold" style={sectionTitleStyle}>
          <Languages size={20} />
          Selected Languages
        </Text>
        <div style={{ paddingLeft: '24px' }}>
          <p>Select languages to appear in dropdowns:</p>
          <div 
            className="languages-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: `repeat(${numColumns}, 1fr)`,
              gap: '16px'
            }}
          >
            {columns.map((column, colIndex) => (
              <div key={colIndex} style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {column.map(lang => {
                  const isCustom = !ALL_AVAILABLE_LANGUAGES.includes(lang);
                  return (
                    <div key={lang} style={{ display: 'flex', alignItems: 'center', gap: '4px', whiteSpace: 'nowrap' }}>
                      <Checkbox
                        checked={selectedLanguages.has(lang)}
                        onChange={(e) => {
                          const newSet = new Set(selectedLanguages);
                          if (e.target.checked) newSet.add(lang);
                          else newSet.delete(lang);
                          onSelectedLanguagesChange(newSet);
                          // Auto-save: persist immediately
                          onSetting('available_languages', Array.from(newSet));
                        }}
                        label={lang}
                      />
                      {isCustom && (
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            // Copy the language name to the custom language input before deleting
                            onCustomLanguageChange(lang);
                            const newSet = new Set(selectedLanguages);
                            newSet.delete(lang);
                            onSelectedLanguagesChange(newSet);
                            // Auto-save: persist immediately
                            onSetting('available_languages', Array.from(newSet));
                          }}
                          style={{
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            padding: '2px 4px',
                            display: 'flex',
                            alignItems: 'center',
                            color: tokens.colorNeutralForeground3,
                          }}
                          title="Delete custom language"
                        >
                          <Trash2 size={14} />
                        </button>
                      )}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="languages-section section">
        <Text as="h3" size={500} weight="semibold" style={{ ...sectionTitleStyle, marginTop: '36px' }}>
          <Globe size={20} />
          Custom Language
        </Text>
        <div style={{ paddingLeft: '24px' }}>
          <div className="form-group" style={{ marginTop: 0 }}>
            <Input
            type="text"
            value={customLanguage}
            onChange={(e) => onCustomLanguageChange(e.target.value)}
            onBlur={(e) => {
              const lang = e.target.value.trim();
              if (lang && !selectedLanguages.has(lang) && !ALL_AVAILABLE_LANGUAGES.includes(lang)) {
                const newSet = new Set(selectedLanguages);
                newSet.add(lang);
                onSelectedLanguagesChange(newSet);
                // Auto-save: persist immediately
                onSetting('available_languages', Array.from(newSet));
              }
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                const lang = customLanguage.trim();
                if (lang && !selectedLanguages.has(lang) && !ALL_AVAILABLE_LANGUAGES.includes(lang)) {
                  const newSet = new Set(selectedLanguages);
                  newSet.add(lang);
                  onSelectedLanguagesChange(newSet);
                  onCustomLanguageChange('');
                  // Auto-save: persist immediately
                  onSetting('available_languages', Array.from(newSet));
                }
              }
            }}
            placeholder="Enter custom language name and press Enter"
            style={{ width: '50%'}}
          />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsDialogLanguagesTab;

