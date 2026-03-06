import React from 'react';
import { makeStyles, mergeClasses, tokens, Dropdown, Option } from '@fluentui/react-components';
import { Languages } from 'lucide-react';

const useStyles = makeStyles({
  languageSelector: {
    margin: `0 ${tokens.spacingHorizontalXS} ${tokens.spacingVerticalS} ${tokens.spacingHorizontalXS}`,
    display: "flex",
    alignItems: "center",
    gap: tokens.spacingHorizontalS,
  },
  label: {
    display: "flex",
    alignItems: "center",
    gap: "6px",
    minWidth: "45px",
  },
  selectContainer: {
    flex: 1,
    position: "relative",
  },
  select: {
    width: "100%",
    "& .fui-Dropdown__trigger": {
      borderRadius: "0 !important",
      border: "none !important",
      borderBottom: `2px solid ${tokens.colorNeutralStroke1} !important`,
      backgroundColor: "transparent !important",
      paddingLeft: "0 !important",
      paddingRight: "0 !important",
    },
    "& .fui-Dropdown__trigger:hover": {
      borderBottom: `2px solid ${tokens.colorNeutralForeground1} !important`,
    },
    "& .fui-Dropdown__trigger:focus-visible": {
      borderBottom: `2px solid ${tokens.colorBrandBackground} !important`,
    },
  },
  detectLanguageOption: {
    color: tokens.colorBrandForeground1,
  },
  dropdownDetectLanguage: {
    "& button": {
      color: `${tokens.colorBrandForeground1} !important`,
    },
  },
  modelDecidesOption: {
    color: tokens.colorBrandForeground1,
  },
  dropdownModelDecides: {
    "& button": {
      color: `${tokens.colorBrandForeground1} !important`,
    },
  },
});

/** When allowNone: value for "don't send target language" (auto). */
export const MODEL_DECIDES = "Auto";

const LanguageSelector = ({
  label,
  value,
  onChange,
  languages = [],
  allLanguages = [],
  detectLanguage = false,
  allowNone = false,
  iconColor
}) => {
  const styles = useStyles();
  let languageOptions = [];

  if (detectLanguage) {
    const selectedSet = new Set(languages);
    const selected = [...languages].sort((a, b) => a.localeCompare(b));
    const remaining = allLanguages
      .filter(lang => !selectedSet.has(lang))
      .sort((a, b) => a.localeCompare(b));

    languageOptions = ['Detect Language', '---', ...selected];
    if (remaining.length > 0) {
      languageOptions.push('---');
      languageOptions.push(...remaining);
    }
  } else {
    languageOptions = [...languages].sort((a, b) => a.localeCompare(b));
  }

  if (allowNone) {
    languageOptions = [MODEL_DECIDES, ...languageOptions];
  }

  const isDetectLanguage = value === "Detect Language";
  const isModelDecides = allowNone && (value === MODEL_DECIDES || value === "" || value == null);

  return (
    <div className={styles.languageSelector}>
      <label className={styles.label}>
        <Languages size={20} color={iconColor} />
        {label}
      </label>
      <div className={styles.selectContainer}>
        <Dropdown
          appearance="underline"
          value={value === "" || value == null ? MODEL_DECIDES : value}
          selectedOptions={value === "" || value == null ? [MODEL_DECIDES] : [value]}
          onOptionSelect={(e, data) => onChange(data.optionValue)}
          className={mergeClasses(
            styles.select,
            isDetectLanguage && styles.dropdownDetectLanguage,
            isModelDecides && styles.dropdownModelDecides
          )}
          aria-label={label}
        >
          {allowNone && (
            <Option value={MODEL_DECIDES} className={styles.modelDecidesOption}>
              {MODEL_DECIDES}
            </Option>
          )}
          {languageOptions.map((lang, index) => {
            if (allowNone && lang === MODEL_DECIDES) return null;
            return (
              <Option
                key={lang === "---" ? `separator-${index}` : lang}
                value={lang}
                disabled={lang === "---"}
                className={lang === "Detect Language" ? styles.detectLanguageOption : undefined}
              >
                {lang === "---" ? "────────────" : lang}
              </Option>
            );
          })}
        </Dropdown>
      </div>
    </div>
  );
};

export default LanguageSelector;
