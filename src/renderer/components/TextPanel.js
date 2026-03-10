import React from "react";
import { useTranslation } from "react-i18next";
import {
  Button,
  makeStyles,
  mergeClasses,
  tokens,
} from "@fluentui/react-components";
import {
  Trash2,
  Copy,
  Clipboard,
  FileText,
  FileCheck,
  File,
  FileDiff,
} from "lucide-react";
import { computeRewriteDiff } from "../utils/misc/rewriteDiff";

const useStyles = makeStyles({
  panelHeaderRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: tokens.spacingHorizontalM,
    marginBottom: tokens.spacingVerticalS,
  },
  panelTitle: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    margin: 0,
    fontSize: "14px",
    fontWeight: 600,
    color: tokens.colorNeutralForeground1,
    textTransform: "uppercase",
    letterSpacing: "0.5px",
  },
  panelIcon: {
    display: "flex",
    alignItems: "center",
  },
  panelMeta: {
    marginLeft: "auto",
    color: tokens.colorNeutralForeground3,
    fontSize: "12px",
    textAlign: "right",
    flex: "1",
    whiteSpace: "nowrap",
  },
  panel: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    minHeight: 0,
    backgroundColor: tokens.colorNeutralBackground2,
    border: `1px solid ${tokens.colorNeutralStroke1}`,
    borderRadius: tokens.borderRadiusMedium,
    padding: `${tokens.spacingVerticalS} ${tokens.spacingHorizontalM} ${tokens.spacingVerticalM}`,
    boxShadow: tokens.shadow4,
    transition: "border-color 0.2s",
  },
  panelFocused: {
    border: `1px solid ${tokens.colorBrandForeground1}`,
  },
  textarea: {
    flex: 1,
    width: "100%",
    minHeight: 0,
    resize: "none",
    backgroundColor: "transparent",
    border: "none",
    padding: `${tokens.spacingVerticalXS} 0`,
    lineHeight: 1.5,
    outline: "none",
  },
  diffView: {
    flex: 1,
    width: "100%",
    minHeight: 0,
    overflow: "auto",
    padding: `${tokens.spacingVerticalXS} 0`,
    lineHeight: 1.5,
    whiteSpace: "pre-wrap",
  },
  diffSame: {
    color: "#e0e0e0",
  },
  diffRemoved: {
    color: "#6b6b6b",
    textDecoration: "line-through",
  },
  diffAdded: {
    color: "#4da6ff",
  },
  controls: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: tokens.spacingVerticalXS,
    paddingBottom: tokens.spacingVerticalXS,
    borderTop: `1px solid ${tokens.colorNeutralStroke1}`,
    marginTop: tokens.spacingVerticalXS,
    gap: tokens.spacingHorizontalM,
    minHeight: "60px",
    boxSizing: "border-box",
  },
  stats: {
    fontSize: "12px",
    color: tokens.colorNeutralForeground3,
  },
  leftButtons: {
    display: "flex",
    gap: tokens.spacingHorizontalS,
  },
  rightButtons: {
    display: "flex",
    gap: tokens.spacingHorizontalM,
    alignItems: "center",
  },
  leftAligned: {
    justifyContent: "flex-start",
  },
});

const TextPanel = ({
  title,
  icon,
  text,
  onTextChange,
  placeholder,
  readOnly,
  stats,
  headerMeta,
  footerStats,
  onClear,
  onCopy,
  onPaste,
  onPasteEvent,
  fontFamily,
  fontSize,
  textColor,
  footerAlign = "right",
  showDiff,
  inputTextForDiff,
  outputIsModelResult,
  onDiffToggle,
}) => {
  const styles = useStyles();
  const { t } = useTranslation();
  const [isFocused, setIsFocused] = React.useState(false);
  const headerDisplay = headerMeta ?? stats;
  const footerDisplay = footerStats ?? stats;

  const textareaStyle = React.useMemo(() => {
    const style = {
      ...(fontFamily && { fontFamily }),
      ...(fontSize && { fontSize: `${fontSize}px` }),
      color: textColor || "#e0e0e0",
    };
    return style;
  }, [fontFamily, fontSize, textColor]);

  const diffSegments = React.useMemo(() => {
    if (!showDiff || inputTextForDiff == null || text == null) return null;
    if (!outputIsModelResult) return null;
    const inputStr = typeof inputTextForDiff === "string" ? inputTextForDiff : "";
    const outputStr = typeof text === "string" ? text : "";
    if (!inputStr.trim() || !outputStr.trim()) return null;
    return computeRewriteDiff(inputStr, outputStr);
  }, [showDiff, outputIsModelResult, inputTextForDiff, text]);

  const showDiffView = showDiff && outputIsModelResult && Array.isArray(diffSegments) && diffSegments.length > 0;

  const getIcon = () => {
    if (icon) return icon;
    if (title === "Input") return <FileText size={20} />;
    if (title === "Output") return <FileCheck size={20} />;
    return null;
  };

  return (
    <>
      {title && (
        <div className={styles.panelHeaderRow}>
          <div className={styles.panelTitle}>
            <span className={styles.panelIcon}>{getIcon()}</span>
            {title}
          </div>
          {headerDisplay && (
            <div className={styles.panelMeta}>
              {headerDisplay}
            </div>
          )}
        </div>
      )}
      <div className={mergeClasses(styles.panel, isFocused && styles.panelFocused)}>
        {showDiffView ? (
          <div
            className={styles.diffView}
            style={{
              fontFamily: fontFamily || undefined,
              fontSize: fontSize ? `${fontSize}px` : undefined,
            }}
            aria-label={title || t("Text panel")}
          >
            {diffSegments.map((seg) => (
              <span
                key={seg.key}
                className={
                  seg.type === "same"
                    ? styles.diffSame
                    : seg.type === "removed"
                      ? styles.diffRemoved
                      : styles.diffAdded
                }
              >
                {seg.text}
              </span>
            ))}
          </div>
        ) : (
          <textarea
            className={styles.textarea}
            value={text}
            onChange={(e) => onTextChange(e.target.value)}
            onPaste={(e) => {
              const pastedText = e.clipboardData.getData('text');
              if (pastedText && onPasteEvent) {
                onPasteEvent(pastedText);
              }
            }}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder={placeholder}
            readOnly={readOnly}
            spellCheck={false}
            aria-label={title || placeholder || t("Text panel")}
            style={textareaStyle}
          />
        )}
        <div className={mergeClasses(styles.controls, footerAlign === "left" && styles.leftAligned)}>
          {footerAlign === "left" ? (
            // Left-aligned layout: stats on left, optional Show diffs and Copy on right
            <>
              {footerDisplay && (
                <div className={styles.stats}>{footerDisplay}</div>
              )}
              <div style={{ marginLeft: "auto" }} />
              <div className={styles.leftButtons}>
                {onDiffToggle && (
                  <Button
                    appearance={showDiff ? "primary" : "secondary"}
                    icon={showDiff ?   <FileDiff size={16} /> : <File size={16} /> }
                    onClick={onDiffToggle}
                    size="small"
                    title={showDiff ? t("Don't show the changes") : t("Show changes between input and output")}
                  >
                    {showDiff ? t("Showing changes") : t("Regular view")}
                  </Button>
                )}
                {onCopy && (
                  <Button
                    appearance="secondary"
                    icon={<Copy size={16} />}
                    onClick={onCopy}
                    size="small"
                    title={t("Copy")}
                  >
                    {t("Copy")}
                  </Button>
                )}
              </div>
            </>
          ) : (
            // Default right-aligned layout: buttons on left, stats and copy on right
            <>
              <div className={styles.leftButtons}>
                {onClear && (
                  <Button
                    appearance="secondary"
                    icon={<Trash2 size={16} />}
                    onClick={onClear}
                    size="small"
                    title={t("Clear (Esc)")}
                  >
                    {t("Clear")}
                  </Button>
                )}
                {onPaste && (
                  <Button
                    appearance="secondary"
                    icon={<Clipboard size={16} />}
                    onClick={onPaste}
                    size="small"
                    title={t("Paste")}
                  >
                    {t("Paste")}
                  </Button>
                )}
              </div>
              <div className={styles.rightButtons}>
                {footerDisplay && (
                  <div className={styles.stats}>{footerDisplay}</div>
                )}
                {onCopy && (
                  <Button
                    appearance="secondary"
                    icon={<Copy size={16} />}
                    onClick={onCopy}
                    size="small"
                    title={t("Copy")}
                  >
                    {t("Copy")}
                  </Button>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default TextPanel;
