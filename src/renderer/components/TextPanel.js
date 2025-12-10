import React from "react";
import { 
  Button, 
  makeStyles, 
  tokens 
} from "@fluentui/react-components";
import { 
  Dismiss20Regular, 
  Clipboard20Regular, 
  ClipboardPaste20Regular 
} from "@fluentui/react-icons";

const useStyles = makeStyles({
  panelHeaderRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: tokens.spacingHorizontalS,
    marginBottom: tokens.spacingVerticalXS,
  },
  panelTitle: {
    display: "flex",
    alignItems: "center",
    gap: "6px",
    margin: 0,
    fontSize: "13px",
    fontWeight: 600,
    color: tokens.colorNeutralForeground2,
    textTransform: "uppercase",
    letterSpacing: "0.5px",
    paddingLeft: tokens.spacingHorizontalXS,
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
    padding: `${tokens.spacingVerticalXS} ${tokens.spacingHorizontalS} ${tokens.spacingVerticalS}`,
    boxShadow: tokens.shadow4,
    transition: "border-color 0.2s",
  },
  panelFocused: {
    borderColor: tokens.colorBrandForeground1,
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
  controls: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: tokens.spacingVerticalXXS,
    borderTop: `1px solid ${tokens.colorNeutralStroke1}`,
    marginTop: tokens.spacingVerticalXXS,
  },
  stats: {
    fontSize: "12px",
    color: tokens.colorNeutralForeground3,
  },
  buttons: {
    display: "flex",
    gap: tokens.spacingHorizontalS,
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
}) => {
  const styles = useStyles();
  const [isFocused, setIsFocused] = React.useState(false);
  const headerDisplay = headerMeta ?? stats;
  const footerDisplay = footerStats ?? stats;

  // Build inline styles for the textarea - always create new object to trigger re-render
  const textareaStyle = React.useMemo(() => {
    const style = {
      ...(fontFamily && { fontFamily }),
      ...(fontSize && { fontSize: `${fontSize}px` }),
      ...(textColor && { color: textColor }),
    };
    console.log('TextPanel style props:', { fontFamily, fontSize, textColor, computedStyle: style });
    return style;
  }, [fontFamily, fontSize, textColor]);

  return (
    <>
      {title && (
        <div className={styles.panelHeaderRow}>
          <div className={styles.panelTitle}>
            {icon && <span style={{ display: 'flex', alignItems: 'center' }}>{icon}</span>}
            {title}
          </div>
          {headerDisplay && (
            <div className={styles.panelMeta}>
              {headerDisplay}
            </div>
          )}
        </div>
      )}
      <div className={`${styles.panel} ${isFocused ? styles.panelFocused : ''}`}>
        <textarea
          className={styles.textarea}
          value={text}
          onChange={(e) => onTextChange(e.target.value)}
          onPaste={(e) => {
            // Get the pasted text from clipboard
            const pastedText = e.clipboardData.getData('text');
            if (pastedText && onPasteEvent) {
              // Call onPasteEvent immediately to set the flag before onChange fires
              // This ensures the flag is set before React processes the state update
              onPasteEvent(pastedText);
            }
          }}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={placeholder}
          readOnly={readOnly}
          spellCheck={false}
          aria-label={title || placeholder || "Text panel"}
          style={textareaStyle}
        />
        <div className={styles.controls}>
          <div className={styles.stats}>{footerDisplay}</div>
          <div className={styles.buttons}>
            {onClear && (
              <Button
                appearance="secondary"
                icon={<Dismiss20Regular />}
                onClick={onClear}
                size="small"
              >
                Clear
              </Button>
            )}
            {onCopy && (
              <Button
                appearance="primary"
                icon={<Clipboard20Regular />}
                onClick={onCopy}
                size="small"
              >
                Copy
              </Button>
            )}
            {onPaste && (
              <Button
                appearance="secondary"
                icon={<ClipboardPaste20Regular />}
                onClick={onPaste}
                size="small"
              >
                Paste
              </Button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default TextPanel;
