import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { makeStyles, tokens, Button, Spinner } from "@fluentui/react-components";
import PropTypes from "prop-types";
import ModelSelector from "./ModelSelector";

const useStyles = makeStyles({
  overlay: {
    position: "fixed",
    inset: 0,
    backgroundColor: "rgba(0,0,0,0.6)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 10000,
  },
  modal: {
    backgroundColor: tokens.colorNeutralBackground1,
    padding: "24px",
    borderRadius: "8px",
    boxShadow: tokens.shadow28,
    minWidth: "320px",
    width: "100%",
    maxWidth: "min(520px, 90vw)",
    boxSizing: "border-box",
  },
  title: {
    margin: "0 0 32px 0",
    fontSize: "18px",
    fontWeight: 600,
  },
  body: {
    margin: "0 0 20px 0",
    minWidth: 0,
  },
  descriptionLabel: {
    display: "block",
    marginBottom: "8px",
    fontSize: "14px",
    fontWeight: 400,
  },
  descriptionInput: {
    width: "100%",
    minHeight: "160px",
    padding: tokens.spacingVerticalS,
    borderRadius: tokens.borderRadiusMedium,
    border: `1px solid ${tokens.colorNeutralStroke1}`,
    backgroundColor: tokens.colorNeutralBackground1,
    color: tokens.colorNeutralForeground1,
    fontSize: "14px",
    resize: "vertical",
    boxSizing: "border-box",
    marginLeft: "0%",
  },
  modelLabel: {
    display: "block",
    marginTop: "16px",
    marginBottom: "8px",
    fontSize: "14px",
    fontWeight: 400,
  },
  modelSelector: {
    marginLeft: "0%",
  },
  error: {
    marginTop: "12px",
    fontSize: "14px",
    color: tokens.colorPaletteRedForeground1,
    lineHeight: 1.4,
    minWidth: 0,
    maxWidth: "100%",
    overflowWrap: "break-word",
    wordBreak: "break-word",
  },
  actions: {
    display: "flex",
    justifyContent: "flex-end",
    gap: "8px",
    marginTop: "24px",
  },
});

const TransformGenerateModal = ({
  open,
  model,
  models = [],
  onConfirm,
  onCancel,
  loading = false,
  error = null,
}) => {
  const styles = useStyles();
  const { t } = useTranslation();
  const [selectedModel, setSelectedModel] = useState(model || "");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (open) {
      queueMicrotask(() => {
        setSelectedModel(model || "");
        setDescription("");
      });
    }
  }, [open, model]);

  if (!open) return null;

  const handleConfirm = () => {
    onConfirm(selectedModel, description.trim());
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal} data-testid="generate-prompt-modal">
        <h2 className={styles.title}>{t("Generate prompt configuration")}</h2>
        <div className={styles.body}>
          <label className={styles.descriptionLabel} htmlFor="generate-prompt-description">
            {t("What should this prompt do?")}
          </label>
          <textarea
            id="generate-prompt-description"
            className={styles.descriptionInput}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder={t("e.g. Summarise long text in 3 bullet points, or rewrite for clarity")}
            aria-label={t("What should this prompt do?")}
          />
          {models.length > 0 && (
            <>
              <label className={styles.modelLabel}>
                {t("Model to generate prompt")}
              </label>
              <div className={styles.modelSelector}>
                <ModelSelector
                  models={models}
                  currentModel={selectedModel}
                  onModelChange={setSelectedModel}
                />
              </div>
            </>
          )}
          {error && <div className={styles.error}>{error}</div>}
        </div>
        <div className={styles.actions}>
          <Button appearance="secondary" onClick={onCancel} data-testid="generate-prompt-cancel">
            {t("Cancel")}
          </Button>
          <Button
            appearance="primary"
            onClick={handleConfirm}
            disabled={loading || !selectedModel || !description.trim()}
            icon={loading ? <Spinner size="tiny" /> : undefined}
          >
            {loading ? t("Generating…") : t("Generate")}
          </Button>
        </div>
      </div>
    </div>
  );
};

TransformGenerateModal.propTypes = {
  open: PropTypes.bool.isRequired,
  model: PropTypes.string,
  models: PropTypes.arrayOf(PropTypes.string),
  onConfirm: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  error: PropTypes.string,
};

export default TransformGenerateModal;
