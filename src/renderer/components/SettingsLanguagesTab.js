import { useState, useEffect, useMemo, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Checkbox, Input, Text, tokens } from '@fluentui/react-components';
import { Languages, Trash2, Globe } from 'lucide-react';
import PropTypes from 'prop-types';
import { ALL_CONTENT_LANGUAGE_NAMES, findUILanguageEntry, isPredefinedContentLanguage } from '../utils/misc/languageConstants';
import { getUILanguageLabel } from '../utils/misc/languageDisplay';

/** Minimum width per column so long labels (e.g. "Português (PT) / Portuguese (PT)") don't overlap. */
const MIN_COLUMN_WIDTH_PX = 220;

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

const SettingsLanguagesTab = ({
  selectedLanguages,
  customLanguage,
  onSelectedLanguagesChange,
  onCustomLanguageChange,
  onSetting,
}) => {
  const { t } = useTranslation();
  const [numColumns, setNumColumns] = useState(1);
  const gridRef = useRef(null);

  // Combine predefined languages with any custom languages from selectedLanguages
  const customLangs = useMemo(() =>
    Array.from(selectedLanguages).filter(
      (lang) => !isPredefinedContentLanguage(lang),
    ),
    [selectedLanguages],
  );

  const allLangs = useMemo(
    () =>
      [...ALL_CONTENT_LANGUAGE_NAMES, ...customLangs].sort((a, b) =>
        a.localeCompare(b, undefined, { sensitivity: "base", numeric: true }),
      ),
    [customLangs],
  );

  // Compute columns directly from allLangs and numColumns
  const columns = useMemo(() =>
    splitIntoColumns(allLangs, numColumns),
    [allLangs, numColumns]
  );

  // Responsive: base column count on actual grid container width to avoid overlap in the dialog
  useEffect(() => {
    const el = gridRef.current;
    if (!el) return;
    const ro = new ResizeObserver((entries) => {
      const { width } = entries[0]?.contentRect ?? {};
      if (typeof width === 'number' && width > 0) {
        const cols = Math.floor(width / MIN_COLUMN_WIDTH_PX);
        setNumColumns(Math.max(1, Math.min(5, cols)));
      }
    });
    ro.observe(el);
    // Initial measure in case ResizeObserver doesn't fire immediately with size
    const initialWidth = el.getBoundingClientRect().width;
    if (initialWidth > 0) {
      const cols = Math.floor(initialWidth / MIN_COLUMN_WIDTH_PX);
      setNumColumns(Math.max(1, Math.min(5, cols)));
    }
    return () => ro.disconnect();
  }, []);

  const sectionTitleStyle = { display: 'flex', alignItems: 'center', gap: '8px', marginTop: 0, marginBottom: '36px' };

  return (
    <div className="tab-content languages-tab">
      <div className="section">
        <Text as="h3" size={500} weight="semibold" style={sectionTitleStyle}>
          <Languages size={20} />
          {t('Most used languages')}
        </Text>
        <div style={{ paddingInlineStart: '24px' }}>
          <p>{t('Select languages to appear in the top of list:')}</p>
          <div 
            ref={gridRef}
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
                  const isCustom = !isPredefinedContentLanguage(lang);
                  const uiEntry = findUILanguageEntry(lang);
                  const displayLabel = uiEntry ? getUILanguageLabel(uiEntry, t) : lang;
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
                          onSetting('top_languages', Array.from(newSet));
                        }}
                        label={displayLabel}
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
                            onSetting('top_languages', Array.from(newSet));
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
                          title={t('Delete custom language')}
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
          {t('Custom Language')}
        </Text>
        <div style={{ paddingInlineStart: '24px' }}>
          <div className="form-group" style={{ marginTop: 0 }}>
            <Input
            type="text"
            value={customLanguage}
            onChange={(e) => onCustomLanguageChange(e.target.value)}
            onBlur={(e) => {
              const lang = e.target.value.trim();
              if (lang && !selectedLanguages.has(lang) && !isPredefinedContentLanguage(lang)) {
                const newSet = new Set(selectedLanguages);
                newSet.add(lang);
                onSelectedLanguagesChange(newSet);
                // Auto-save: persist immediately
                onSetting('top_languages', Array.from(newSet));
              }
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                const lang = customLanguage.trim();
                if (lang && !selectedLanguages.has(lang) && !isPredefinedContentLanguage(lang)) {
                  const newSet = new Set(selectedLanguages);
                  newSet.add(lang);
                  onSelectedLanguagesChange(newSet);
                  onCustomLanguageChange('');
                  // Auto-save: persist immediately
                  onSetting('top_languages', Array.from(newSet));
                }
              }
            }}
            placeholder={t('Enter custom language name and press Enter')}
            style={{ width: '50%'}}
          />
          </div>
        </div>
      </div>
    </div>
  );
};

SettingsLanguagesTab.propTypes = {
  selectedLanguages: PropTypes.object.isRequired,
  customLanguage: PropTypes.string,
  onSelectedLanguagesChange: PropTypes.func.isRequired,
  onCustomLanguageChange: PropTypes.func.isRequired,
  onSetting: PropTypes.func.isRequired,
};

export default SettingsLanguagesTab;

