import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Globe, Check } from "lucide-react";
import PropTypes from "prop-types";
import { useAppContext } from "../contexts/AppContext";
import i18n, { loadLocale } from "../i18n";
import { UI_LANGUAGES } from "../constants";
import { getUILanguageLabelNative } from "ai-i18n-tools/runtime";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

const GLOBE_SIZE_DEFAULT = 20;
const GLOBE_SIZE_COMPACT = 16;

/**
 * Globe icon that opens a dropdown to select the UI (interface) language.
 */
const HeaderLanguageSelector = ({ compact = false }) => {
  const { t } = useTranslation();
  const { settings, updateSettings } = useAppContext();
  const uiLocale = settings?.ui_locale || "en-GB";
  const iconSize = compact ? GLOBE_SIZE_COMPACT : GLOBE_SIZE_DEFAULT;

  const handleSelect = async (code) => {
    if (!code) return;
    await loadLocale(code);
    i18n.changeLanguage(code);
    updateSettings({ ui_locale: code });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          aria-label={t("Interface language")}
          title={t("Interface language")}
          data-testid="language-selector-trigger"
          className="h-8 shrink-0 gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-muted-foreground hover:bg-white/10 hover:text-foreground"
        >
          <Globe size={iconSize} />
          <span className="hidden sm:inline">{uiLocale}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="w-[min(28rem,calc(100vw-2rem))] min-w-80 grid grid-cols-2 gap-0.5 p-2"
        data-testid="language-selector"
      >
        {UI_LANGUAGES.map((lang) => {
          const isSelected = lang.code === uiLocale;
          return (
            <DropdownMenuItem
              key={lang.code}
              data-testid={`language-option-${lang.code}`}
              onClick={() => handleSelect(lang.code)}
              className="flex items-center gap-1.5"
            >
              {isSelected ? (
                <Check size={14} className="shrink-0" />
              ) : (
                <span className="w-3.5 shrink-0" aria-hidden />
              )}
              <span className={isSelected ? "font-semibold" : ""}>
                {getUILanguageLabelNative(lang)}
              </span>
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

HeaderLanguageSelector.propTypes = {
  compact: PropTypes.bool,
};

export default HeaderLanguageSelector;
