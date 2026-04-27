import { useState } from "react";
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
import PropTypes from "prop-types";
import { useAppContext } from "../contexts/AppContext";
import i18n, { loadLocale } from "../i18n";
import { UI_LANGUAGES } from "../constants";
import { getUILanguageLabelNative } from "ai-i18n-tools/runtime";

const useStyles = makeStyles({
  localeBadge: {
    display: "inline-flex",
    alignItems: "center",
    gap: "6px",
    minWidth: "unset",
    padding: "2px 6px 2px 4px",
    borderRadius: "4px",
    fontSize: "12px",
    fontWeight: 600,
    backgroundColor: "#223328",
    color: "#e8f5e9",
    ":hover": {
      backgroundColor: "#2d4532",
      color: "#e8f5e9",
    },
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
    <Popover open={open} onOpenChange={(_, data) => setOpen(data.open)} positioning={{ onPositioningEnd: () => {} }}  data-testid="language-selector">
      <PopoverTrigger disableButtonEnhancement>
        <Button
          appearance="subtle"
          icon={<Globe size={iconSize} />}
          className={styles.localeBadge}
          aria-label={t("Interface language")}
          title={t("Interface language")}
          data-testid="language-selector-trigger"
        >
          {uiLocale}
        </Button>
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
                      data-testid={`language-option-${lang.code}`}
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
                      {getUILanguageLabelNative(lang)}
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

HeaderLanguageSelector.propTypes = {
  compact: PropTypes.bool,
};

export default HeaderLanguageSelector;
