import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  makeStyles,
  tokens,
  Button,
  Popover,
  PopoverTrigger,
  PopoverSurface,
  MenuList,
  MenuItem,
} from "@fluentui/react-components";
import { Globe, Check } from "lucide-react";
import { useAppContext } from "../contexts/AppContext";
import i18n, { loadLocale } from "../i18n";
import { UI_LANGUAGES } from "../constants";
import { getUILanguageLabel } from "../utils/misc/languageDisplay";

const GLOBE_COLOR = "#2d881f";

const useStyles = makeStyles({
  trigger: {
    minWidth: "unset",
    padding: "4px 8px",
    color: GLOBE_COLOR,
    ":hover": {
      color: GLOBE_COLOR,
      opacity: 0.9,
    },
  },
  triggerCompact: {
    minWidth: "unset",
    padding: "2px 6px",
    marginRight: "8px",
  },
  popoverGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    minWidth: "500px",
    gap: "2px 8px",
    leftMargin: "4px",
    rightMargin: "4px",
    topMargin: "4px",
    bottomMargin: "4px",
    borderRadius: "4px",
    border: "1px solid tokens.colorNeutralStroke1",
    backgroundColor: tokens.colorNeutralBackground1,
    boxShadow: tokens.shadow48,
  },
  column: {
    display: "flex",
    flexDirection: "column",
    gap: "2px",
  },
  selectedItem: {
    color: tokens.colorBrandForegroundInverted,
  },
});

const GLOBE_SIZE_DEFAULT = 20;
const GLOBE_SIZE_COMPACT = 16;

/**
 * Globe icon that opens a dropdown to select the UI (interface) language.
 * Shows only the icon; selected language is not displayed next to it.
 * @param {{ compact?: boolean }} props - If compact, uses smaller icon and right margin for page header.
 */
const HeaderLanguageSelector = ({ compact = false }) => {
  const styles = useStyles();
  const { t } = useTranslation();
  const { settings, updateSettings } = useAppContext();
  const [open, setOpen] = useState(false);
  const uiLocale = settings?.ui_locale || "en-GB";
  const iconSize = compact ? GLOBE_SIZE_COMPACT : GLOBE_SIZE_DEFAULT;

  const handleSelect = async (code) => {
    if (!code) return;
    setOpen(false);
    await loadLocale(code);
    i18n.changeLanguage(code);
    updateSettings({ ui_locale: code });
  };

  return (
    <Popover open={open} onOpenChange={(_, data) => setOpen(data.open)}>
      <PopoverTrigger disableButtonEnhancement>
        <Button
          appearance="subtle"
          icon={<Globe size={iconSize} />}
          aria-label={t("Interface language")} 
          title={t("Interface language")}
          className={compact ? `${styles.trigger} ${styles.triggerCompact}` : styles.trigger}
        />
      </PopoverTrigger>
      <PopoverSurface>
        <div className={styles.popoverGrid}>
          {[0, 1].map((colIndex) => (
            <div key={colIndex} className={styles.column}>
              <MenuList>
                {UI_LANGUAGES.filter((_, i) => i % 2 === colIndex).map((lang) => {
                  const isSelected = lang.code === uiLocale;
                  return (
                    <MenuItem
                      key={lang.code}
                      onClick={() => handleSelect(lang.code)}
                      icon={
                        isSelected ? (
                          <Check size={16} />
                        ) : (
                          <Check size={16} style={{ opacity: 0 }} aria-hidden />
                        )
                      }
                      className={isSelected ? styles.selectedItem : undefined}
                    >
                      {getUILanguageLabel(lang, t)}
                    </MenuItem>
                  );
                })}
              </MenuList>
            </div>
          ))}
        </div>
      </PopoverSurface>
    </Popover>
  );
};

export default HeaderLanguageSelector;
