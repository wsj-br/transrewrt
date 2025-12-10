import React from 'react';
import { makeStyles, tokens, Dropdown, Option } from '@fluentui/react-components';
import { LocalLanguage20Filled } from '@fluentui/react-icons';

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
      borderBottomColor: `${tokens.colorNeutralForeground1} !important`,
    },
    "& .fui-Dropdown__trigger:focus-visible": {
      borderBottomColor: `${tokens.colorBrandBackground} !important`,
      borderBottomWidth: "3px !important",
    },
    detectLanguageOption: {
      color: tokens.colorBrandForeground1,
    },
    dropdownDetectLanguage: {
      '& button': {
        color: `${tokens.colorBrandForeground1} !important`,
      },
    },
  },
});

const LanguageSelector = ({ 
  label, 
  value, 
  onChange, 
  languages = [],
  allLanguages = [],
  detectLanguage = false,
  iconColor
}) => {
  const styles = useStyles();
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
    <div className={styles.languageSelector}>
      <label className={styles.label}>
        <LocalLanguage20Filled color={iconColor} />
        {label}
      </label>
      <div className={styles.selectContainer}>
        <Dropdown
          appearance="underline"
          value={value || ""}
          selectedOptions={value ? [value] : []}
          onOptionSelect={(e, data) => onChange(data.optionValue)}
          className={`${styles.select} ${value === 'Detect Language' ? styles.dropdownDetectLanguage : ''}`}
          aria-label={label}
        >
          {languageOptions.map((lang, index) => (
            <Option
              key={lang === '---' ? `separator-${index}` : lang}
              value={lang}
              disabled={lang === '---'}
              style={lang === 'Detect Language' ? { color: tokens.colorBrandForeground1 } : undefined}
            >
              {lang === '---' ? '────────────' : lang}
            </Option>
          ))}
        </Dropdown>
      </div>
    </div>
  );
};

export default LanguageSelector;