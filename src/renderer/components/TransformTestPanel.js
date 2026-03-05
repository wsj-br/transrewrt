import React from "react";
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
    flex: "0 0 40%",
    minHeight: 0,
    display: "flex",
    flexDirection: "column",
    gap: tokens.spacingVerticalXS,
  },
  inputLabel: {
    fontSize: "12px",
    fontWeight: 600,
    color: tokens.colorNeutralForeground3,
  },
  textarea: {
    flex: 1,
    minHeight: "80px",
    resize: "none",
    padding: tokens.spacingVerticalS,
    borderRadius: tokens.borderRadiusMedium,
    border: `1px solid ${tokens.colorNeutralStroke1}`,
    backgroundColor: tokens.colorNeutralBackground1,
    fontFamily: "inherit",
    fontSize: "14px",
  },
  testButton: {
    alignSelf: "flex-start",
  },
  outputSection: {
    flex: "1 1 60%",
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
    fontSize: "14px",
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
}) => {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <div className={styles.inputSection}>
        <label className={styles.inputLabel}>Test input</label>
        <textarea
          className={styles.textarea}
          value={testInput}
          onChange={(e) => onTestInputChange?.(e.target.value)}
          placeholder="Paste text to test..."
          aria-label="Test input"
        />
        <Button
          appearance="primary"
          icon={<Zap size={16} />}
          onClick={onTest}
          disabled={isTesting}
          className={styles.testButton}
        >
          {isTesting ? "Testing…" : "Test"}
        </Button>
      </div>
      <div className={styles.outputSection}>
        <label className={styles.inputLabel}>Output</label>
        {outputMeta && <div className={styles.outputMeta}>{outputMeta}</div>}
        <div className={styles.outputArea} role="region" aria-label="Test output">
          {output || "—"}
        </div>
        {output && (
          <div className={styles.outputActions}>
            <Button
              appearance="subtle"
              icon={<Copy size={14} />}
              onClick={onCopy}
              aria-label="Copy output"
            >
              Copy
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TransformTestPanel;
