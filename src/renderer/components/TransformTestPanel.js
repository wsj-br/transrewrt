import React from "react";
import { useTranslation } from "react-i18next";
import { makeStyles, tokens, Button } from "@fluentui/react-components";
import { Zap, Copy } from "lucide-react";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    minHeight: 0,
    gap: tokens.spacingVerticalS,
  },
  inputSection: {
    flex: "1 1 50%",
    minHeight: 0,
    display: "flex",
    flexDirection: "column",
    gap: tokens.spacingVerticalXS,
  },
  inputLabel: {
    fontSize: "14px",
    fontWeight: 500,
    color: tokens.colorNeutralForeground1,
  },
  textarea: {
    flex: 1,
    minHeight: "80px",
    resize: "none",
    padding: tokens.spacingVerticalS,
    borderRadius: tokens.borderRadiusMedium,
    border: `1px solid ${tokens.colorNeutralStroke1}`,
    backgroundColor: tokens.colorNeutralBackground1,
  },
  testButton: {
    alignSelf: "flex-start",
  },
  outputSection: {
    flex: "1 1 50%",
    minHeight: 0,
    display: "flex",
    flexDirection: "column",
    gap: tokens.spacingVerticalXS,
  },
  outputMeta: {
    fontSize: "12px",
    color: tokens.colorNeutralForeground3,
  },
  outputArea: {
    flex: 1,
    minHeight: 0,
    padding: tokens.spacingVerticalS,
    borderRadius: tokens.borderRadiusMedium,
    border: `1px solid ${tokens.colorNeutralStroke1}`,
    backgroundColor: tokens.colorNeutralBackground2,
    whiteSpace: "pre-wrap",
    wordBreak: "break-word",
    overflow: "auto",
  },
  outputActions: {
    display: "flex",
    justifyContent: "flex-end",
  },
});

const TransformTestPanel = ({
  testInput,
  onTestInputChange,
  onTest,
  output,
  outputMeta,
  isTesting,
  onCopy,
  fontFamily,
  fontSize,
  inputTextColor,
  outputTextColor,
}) => {
  const styles = useStyles();
  const { t } = useTranslation();
  const inputStyle = React.useMemo(
    () => ({
      ...(fontFamily && { fontFamily }),
      ...(fontSize != null && fontSize !== "" && { fontSize: `${fontSize}px` }),
      ...(inputTextColor && { color: inputTextColor }),
    }),
    [fontFamily, fontSize, inputTextColor]
  );
  const outputStyle = React.useMemo(
    () => ({
      ...(fontFamily && { fontFamily }),
      ...(fontSize != null && fontSize !== "" && { fontSize: `${fontSize}px` }),
      ...(outputTextColor && { color: outputTextColor }),
    }),
    [fontFamily, fontSize, outputTextColor]
  );

  return (
    <div className={styles.root}>
      <div className={styles.inputSection}>
        <label className={styles.inputLabel}>{t("Test input")}</label>
        <textarea
          className={styles.textarea}
          value={testInput}
          onChange={(e) => onTestInputChange?.(e.target.value)}
          placeholder={t("Paste text to test...")}
          aria-label={t("Test input")}
          style={inputStyle}
        />
        <Button
          appearance="primary"
          icon={<Zap size={16} />}
          onClick={onTest}
          disabled={isTesting}
          className={styles.testButton}
        >
          {isTesting ? t("Testing…") : t("Test")}
        </Button>
      </div>
      <div className={styles.outputSection}>
        <label className={styles.inputLabel}>{t("Output")}</label>
        {outputMeta && <div className={styles.outputMeta}>{outputMeta}</div>}
        <div className={styles.outputArea} role="region" aria-label={t("Test output")} style={outputStyle}>
          {output || "—"}
        </div>
        {output && (
          <div className={styles.outputActions}>
            <Button
              appearance="subtle"
              icon={<Copy size={14} />}
              onClick={onCopy}
              aria-label={t("Copy output")}
            >
              {t("Copy")}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TransformTestPanel;
