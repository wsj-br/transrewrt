import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { Globe2, Languages, Sparkles } from "lucide-react";
import PropTypes from "prop-types";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { useContentLanguageLists } from "../hooks/useContentLanguageLists";
import { findUILanguageEntry } from "../utils/misc/languageConstants";
import { GLOSSARY_ALL_LANGUAGES } from "../utils/misc/glossaryUtils";

const AUTO_TARGET = "auto";

function optionSlug(value: string) {
  return String(value).replace(/\s+/g, "-").toLowerCase().replace(/[^a-z0-9-]/g, "");
}

function optionValueToRaw(optionValue: string, t: (key: string) => string) {
  if (
    optionValue === AUTO_TARGET ||
    optionValue === "Detect Language" ||
    optionValue === GLOSSARY_ALL_LANGUAGES
  ) {
    return optionValue;
  }
  if (optionValue === t("Detect Language")) return "Detect Language";
  if (optionValue === t("All Languages")) return GLOSSARY_ALL_LANGUAGES;
  return optionValue;
}

interface LanguageSelectorProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  detectLanguage?: boolean;
  allowNone?: boolean;
  /** Prepend "All Languages" wildcard (glossary source/target). */
  allowAllLanguages?: boolean;
  targetListSameAsSource?: boolean;
  iconColor?: string;
  dataTestId?: string;
  /** When true, the select trigger sizes to its label/value instead of a fixed min width. */
  hugSelectWidth?: boolean;
  /** When true, the visible label span is omitted; `label` is still used for `aria-label` on the trigger. */
  hideLabel?: boolean;
  /** When true, the leading Languages icon is omitted (e.g. compact table cells). */
  hideIcon?: boolean;
  /** Tailwind colour classes for the leading Languages icon (e.g. header mode accent). */
  iconClassName?: string;
  /** Stroke width for the Languages icon; header mode icons use 1.6. */
  iconStrokeWidth?: number;
}

const LanguageSelector = ({
  label,
  value,
  onChange,
  detectLanguage = false,
  allowNone = false,
  allowAllLanguages = false,
  targetListSameAsSource = false,
  iconColor,
  dataTestId,
  hugSelectWidth = false,
  hideLabel = false,
  hideIcon = false,
  iconClassName,
  iconStrokeWidth,
}: LanguageSelectorProps) => {
  const { t } = useTranslation();
  const { topLanguages, allLanguages } = useContentLanguageLists();

  const languageOptions = useMemo(() => {
    let options: string[] = [];

    if (targetListSameAsSource) {
      const selectedSet = new Set(topLanguages);
      const selected = [...topLanguages].sort((a: string, b: string) => a.localeCompare(b));
      const remaining = (allLanguages || [])
        .filter((lang: string) => !selectedSet.has(lang))
        .sort((a: string, b: string) => a.localeCompare(b));
      options = [...selected];
      if (remaining.length > 0) {
        options.push("---");
        options.push(...remaining);
      }
      if (allowNone) options = [AUTO_TARGET, ...options];
    } else if (detectLanguage) {
      const selectedSet = new Set(topLanguages);
      const selected = [...topLanguages].sort((a: string, b: string) => a.localeCompare(b));
      const remaining = (allLanguages || [])
        .filter((lang: string) => !selectedSet.has(lang))
        .sort((a: string, b: string) => a.localeCompare(b));
      options = ["Detect Language", "---", ...selected];
      if (remaining.length > 0) {
        options.push("---");
        options.push(...remaining);
      }
      if (allowNone) options = [AUTO_TARGET, ...options];
    } else {
      options = [...topLanguages].sort((a: string, b: string) => a.localeCompare(b));
      if (allowNone) options = [AUTO_TARGET, ...options];
    }

    if (allowAllLanguages) {
      options = [GLOSSARY_ALL_LANGUAGES, "---", ...options.filter((o) => o !== GLOSSARY_ALL_LANGUAGES)];
    }

    return options;
  }, [topLanguages, allLanguages, detectLanguage, allowNone, allowAllLanguages, targetListSameAsSource]);

  const isDetectLanguage = value === "Detect Language";
  const isAllLanguages = value === GLOSSARY_ALL_LANGUAGES;
  const isAutoTarget = allowNone && (value === AUTO_TARGET || value === "" || value == null);

  const selectedOptionValue =
    value === "" || value == null
      ? AUTO_TARGET
      : isDetectLanguage
        ? "Detect Language"
        : isAllLanguages
          ? GLOSSARY_ALL_LANGUAGES
          : value;

  const displayValue = useMemo(() => {
    if (isAutoTarget) return t("No target language");
    if (isDetectLanguage) return t("Detect Language");
    if (isAllLanguages) return t("All Languages");
    const entry = findUILanguageEntry(value);
    return entry ? t(entry.englishName) : value;
  }, [value, isAutoTarget, isDetectLanguage, isAllLanguages, t]);

  return (
    <div className="flex items-center gap-2" data-testid={dataTestId}>
      {!hideIcon && (
        <Languages
          className={cn("h-5 w-5 shrink-0", iconClassName)}
          style={iconColor ? { color: iconColor } : undefined}
          strokeWidth={iconStrokeWidth}
        />
      )}
      {label && !hideLabel && (
        <span className="text-sm font-medium text-muted-foreground whitespace-nowrap">
          {label}
        </span>
      )}
      <Select
        key={`${dataTestId ?? label}-${selectedOptionValue ?? ""}`}
        value={selectedOptionValue}
        onValueChange={(val) => onChange(optionValueToRaw(val, t))}
      >
        <SelectTrigger
          className={cn(
            "border-none shadow-none bg-transparent hover:bg-accent focus:ring-0",
            hugSelectWidth
              ? "h-9 w-fit max-w-[min(92vw,28rem)] shrink-0 min-w-0"
              : "min-w-[160px]",
            (isDetectLanguage || isAllLanguages || isAutoTarget) && "text-emerald-500 font-medium",
          )}
          aria-label={label}
        >
          <SelectValue>
            {isDetectLanguage ? (
              <span className="flex items-center gap-1.5 text-emerald-500">
                <Sparkles className="h-3.5 w-3.5" />
                {displayValue}
              </span>
            ) : isAllLanguages ? (
              <span className="flex items-center gap-1.5 text-emerald-500">
                <Globe2 className="h-3.5 w-3.5" />
                {displayValue}
              </span>
            ) : (
              displayValue
            )}
          </SelectValue>
        </SelectTrigger>
        <SelectContent>
          {allowNone && (
            <SelectItem
              value={AUTO_TARGET}
              className="text-emerald-600 font-medium"
              data-testid={dataTestId ? `${dataTestId}-option-${optionSlug(AUTO_TARGET)}` : undefined}
            >
              {t("No target language")}
            </SelectItem>
          )}
          {languageOptions.map((lang, index) => {
            if (allowNone && lang === AUTO_TARGET) return null;

            if (lang === "---") {
              return (
                <div
                  key={`sep-${index}`}
                  className="my-1 h-px bg-border -mx-1"
                  role="separator"
                />
              );
            }

            if (lang === GLOSSARY_ALL_LANGUAGES) {
              return (
                <SelectItem
                  key="all-languages"
                  value={GLOSSARY_ALL_LANGUAGES}
                  className="text-emerald-600 font-medium"
                  data-testid={dataTestId ? `${dataTestId}-option-all-languages` : undefined}
                >
                  <span className="flex items-center gap-1.5">
                    <Globe2 className="h-3.5 w-3.5" />
                    {t("All Languages")}
                  </span>
                </SelectItem>
              );
            }

            if (lang === "Detect Language") {
              return (
                <SelectItem
                  key="detect-language"
                  value="Detect Language"
                  className="text-emerald-600 font-medium"
                  data-testid={dataTestId ? `${dataTestId}-option-detect-language` : undefined}
                >
                  <span className="flex items-center gap-1.5">
                    <Sparkles className="h-3.5 w-3.5" />
                    {t("Detect Language")}
                  </span>
                </SelectItem>
              );
            }

            const entry = findUILanguageEntry(lang);
            const displayText = entry ? t(entry.englishName) : lang;
            const codeOptionTestId = entry?.code
              ? `${dataTestId}-option-${optionSlug(entry.code)}`
              : undefined;
            return (
              <SelectItem
                key={lang}
                value={lang}
                data-testid={dataTestId ? `${dataTestId}-option-${optionSlug(lang)}` : undefined}
                data-testid-code={codeOptionTestId}
              >
                {displayText}
              </SelectItem>
            );
          })}
        </SelectContent>
      </Select>
    </div>
  );
};

LanguageSelector.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  detectLanguage: PropTypes.bool,
  allowNone: PropTypes.bool,
  allowAllLanguages: PropTypes.bool,
  targetListSameAsSource: PropTypes.bool,
  iconColor: PropTypes.string,
  dataTestId: PropTypes.string,
  hugSelectWidth: PropTypes.bool,
  hideLabel: PropTypes.bool,
  hideIcon: PropTypes.bool,
  iconClassName: PropTypes.string,
  iconStrokeWidth: PropTypes.number,
};

export default LanguageSelector;
