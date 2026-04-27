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
    maxWidth: "min(480px, 90vw)",
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
  modelLabel: {
    display: "block",
    marginBottom: "8px",
    fontSize: "14px",
    fontWeight: 500,
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

const TransformImproveModal = ({
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

  useEffect(() => {
    if (open) queueMicrotask(() => setSelectedModel(model || ""));
  }, [open, model]);

  if (!open) return null;

  const handleConfirm = () => {
    onConfirm(selectedModel);
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h2 className={styles.title}>{t("Improve prompt configuration")}</h2>
        <div className={styles.body}>
          {models.length > 0 && (
            <>
              <label className={styles.modelLabel}>
                {t("Select the model to improve the prompt")}
              </label>
              <ModelSelector
                models={models}
                currentModel={selectedModel}
                onModelChange={setSelectedModel}
              />
            </>
          )}
          {error && <div className={styles.error}>{error}</div>}
        </div>
        <div className={styles.actions}>
          <Button appearance="secondary" onClick={onCancel}>
            {t("Cancel")}
          </Button>
          <Button
            appearance="primary"
            onClick={handleConfirm}
            disabled={loading || !selectedModel}
            icon={loading ? <Spinner size="tiny" /> : undefined}
          >
            {loading ? t("Improving…") : t("Improve")}
          </Button>
        </div>
      </div>
    </div>
  );
};

TransformImproveModal.propTypes = {
  open: PropTypes.bool.isRequired,
  model: PropTypes.string,
  models: PropTypes.arrayOf(PropTypes.string),
  onConfirm: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  error: PropTypes.string,
};

export default TransformImproveModal;
