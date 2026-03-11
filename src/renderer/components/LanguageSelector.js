import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { makeStyles, mergeClasses, tokens, Dropdown, Option } from '@fluentui/react-components';
import { Languages } from 'lucide-react';
import PropTypes from 'prop-types';
import { findUILanguageEntry } from '../utils/misc/languageConstants';
import { getUILanguageLabel } from '../utils/misc/languageDisplay';

/** Internal value for "no target / model decides" (used when allowNone). Shown in UI as "No target language / model decides" */
const AUTO_TARGET = "auto";

/** Convert dropdown option value back to raw language name (for state). */
function optionValueToRaw(optionValue, t) {
  if (optionValue === AUTO_TARGET || optionValue === "Detect Language") return optionValue;
  if (optionValue === t("Detect Language")) return "Detect Language";
  return optionValue;
}

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
    minWidth: "270px",
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

const LanguageSelector = ({
  label,
  value,
  onChange,
  topLanguages = [],
  allLanguages = [],
  detectLanguage = false,
  allowNone = false,
  targetListSameAsSource = false,
  iconColor
}) => {
  const styles = useStyles();
  const { t } = useTranslation();

  const languageOptions = useMemo(() => {
    let options = [];

    if (targetListSameAsSource) {
      const selectedSet = new Set(topLanguages);
      const selected = [...topLanguages].sort((a, b) => a.localeCompare(b));
      const remaining = (allLanguages || [])
        .filter(lang => !selectedSet.has(lang))
        .sort((a, b) => a.localeCompare(b));
      options = [...selected];
      if (remaining.length > 0) {
        options.push('---');
        options.push(...remaining);
      }
      if (allowNone) {
        options = [AUTO_TARGET, ...options];
      }
    } else if (detectLanguage) {
      const selectedSet = new Set(topLanguages);
      const selected = [...topLanguages].sort((a, b) => a.localeCompare(b));
      const remaining = allLanguages
        .filter(lang => !selectedSet.has(lang))
        .sort((a, b) => a.localeCompare(b));

      options = ['Detect Language', '---', ...selected];
      if (remaining.length > 0) {
        options.push('---');
        options.push(...remaining);
      }
      if (allowNone) {
        options = [AUTO_TARGET, ...options];
      }
    } else {
      options = [...topLanguages].sort((a, b) => a.localeCompare(b));
      if (allowNone) {
        options = [AUTO_TARGET, ...options];
      }
    }

    return options;
  }, [topLanguages, allLanguages, detectLanguage, allowNone, targetListSameAsSource]);

  const isDetectLanguage = value === "Detect Language";
  const isAutoTarget = allowNone && (value === AUTO_TARGET || value === "" || value == null);

  const displayValue = useMemo(() => {
    if (isAutoTarget) return t("No target language / model decides");
    if (isDetectLanguage) return t("Detect Language");
    const entry = findUILanguageEntry(value);
    return entry ? getUILanguageLabel(entry, t) : value;
  }, [value, isAutoTarget, isDetectLanguage, t]);

  const selectedOptionValue =
    value === "" || value == null ? AUTO_TARGET : isDetectLanguage ? "Detect Language" : value;

  return (
    <div className={styles.languageSelector}>
      <label className={styles.label}>
        <Languages size={20} color={iconColor} />
        {label}
      </label>
      <div className={styles.selectContainer}>
        <Dropdown
          appearance="underline"
          value={displayValue}
          selectedOptions={[selectedOptionValue]}
          onOptionSelect={(e, data) => onChange(optionValueToRaw(data.optionValue, t))}
          className={mergeClasses(
            styles.select,
            isDetectLanguage && styles.dropdownDetectLanguage,
            isAutoTarget && styles.dropdownModelDecides
          )}
          aria-label={label}
        >
          {allowNone && (
            <Option value={AUTO_TARGET} className={styles.modelDecidesOption} text={t("No target language / model decides")}>
              {t("No target language / model decides")}
            </Option>
          )}
          {languageOptions.map((lang, index) => {
            if (allowNone && lang === AUTO_TARGET) return null;

            if (lang === "---") {
              return (
                <Option
                  key={`separator-${index}`}
                  value="---"
                  disabled
                  text="────────────"
                >
                  ────────────
                </Option>
              );
            }

            if (lang === "Detect Language") {
              return (
                <Option
                  key="detect-language"
                  value={t("Detect Language")}
                  text={t("Detect Language")}
                  className={styles.detectLanguageOption}
                >
                  {t("Detect Language")}
                </Option>
              );
            }

            const entry = findUILanguageEntry(lang);
            const displayText = entry ? getUILanguageLabel(entry, t) : lang;
            return (
              <Option
                key={lang}
                value={lang}
                text={displayText}
              >
                {displayText}
              </Option>
            );
          })}
        </Dropdown>
      </div>
    </div>
  );
};

LanguageSelector.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  topLanguages: PropTypes.arrayOf(PropTypes.string),
  allLanguages: PropTypes.arrayOf(PropTypes.string),
  detectLanguage: PropTypes.bool,
  allowNone: PropTypes.bool,
  targetListSameAsSource: PropTypes.bool,
  iconColor: PropTypes.string,
};

export default LanguageSelector;
