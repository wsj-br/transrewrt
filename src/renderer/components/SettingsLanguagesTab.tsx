import { useState, useEffect, useMemo, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Languages, Trash2, Globe } from 'lucide-react';
import PropTypes from 'prop-types';
import { ALL_CONTENT_LANGUAGE_NAMES, findUILanguageEntry, isPredefinedContentLanguage } from '../utils/misc/languageConstants';
import { getUILanguageLabel } from "ai-i18n-tools/runtime";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import {
  settingsFormGroup,
  settingsLanguagesSection,
  settingsSection,
  settingsTabContentLanguages,
} from "./settings/settingsLayoutClasses";

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

  return (
    <div className={settingsTabContentLanguages}>
      <div className={settingsSection}>
        <h3 className="flex items-center gap-2 text-base font-semibold mt-0 mb-9">
          <Languages size={18} />
          {t('Most used languages')}
        </h3>
        <div className="ps-6">
          <p className="mb-4 text-sm">{t('Select languages to appear in the top of list:')}</p>
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
              <div key={colIndex} className="flex flex-col gap-2">
                {column.map(lang => {
                  const isCustom = !isPredefinedContentLanguage(lang);
                  const uiEntry = findUILanguageEntry(lang);
                  const displayLabel = uiEntry ? getUILanguageLabel(uiEntry, t) : lang;
                  return (
                    <div key={lang} className="flex items-center gap-1 whitespace-nowrap">
                      <Checkbox
                        id={`lang-${lang}`}
                        checked={selectedLanguages.has(lang)}
                        onCheckedChange={(checked) => {
                          const newSet = new Set(selectedLanguages);
                          if (checked) newSet.add(lang);
                          else newSet.delete(lang);
                          onSelectedLanguagesChange(newSet);
                          onSetting('top_languages', Array.from(newSet));
                        }}
                      />
                      <label htmlFor={`lang-${lang}`} className="text-sm cursor-pointer">{displayLabel}</label>
                      {isCustom && (
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            onCustomLanguageChange(lang);
                            const newSet = new Set(selectedLanguages);
                            newSet.delete(lang);
                            onSelectedLanguagesChange(newSet);
                            onSetting('top_languages', Array.from(newSet));
                          }}
                          className="p-[2px_4px] text-muted-foreground hover:text-foreground flex items-center"
                          title={t('Delete custom language')}
                        >
                          <Trash2 size={13} />
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

      <div className={settingsLanguagesSection}>
        <h3 className="flex items-center gap-2 text-base font-semibold mt-9 mb-9">
          <Globe size={18} />
          {t('Custom Language')}
        </h3>
        <div className="ps-6">
          <div className={cn(settingsFormGroup, "mt-0")}>
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
                    onSetting('top_languages', Array.from(newSet));
                  }
                }
              }}
              placeholder={t('Enter custom language name and press Enter')}
              className="w-1/2"
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

