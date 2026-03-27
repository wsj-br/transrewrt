import { useTranslation } from "react-i18next";
import { makeStyles, tokens, Button } from "@fluentui/react-components";
import PropTypes from "prop-types";

const useStyles = makeStyles({
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(0,0,0,0.5)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 9999,
  },
  content: {
    backgroundColor: tokens.colorNeutralBackground1,
    borderRadius: "8px",
    padding: "24px",
    maxWidth: "480px",
    width: "90%",
    boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
    border: `1px solid ${tokens.colorNeutralStroke1}`,
  },
  title: {
    marginTop: 0,
    marginBottom: "16px",
  },
  message: {
    marginBottom: "24px",
  },
  actions: {
    display: "flex",
    gap: "12px",
    justifyContent: "flex-end",
  },
});

/**
 * Modal shown when API key is missing or invalid (web: server OPENROUTER_API_KEY; Electron: settings).
 * Props: show, isWeb, apiKeyStatus, onDismiss (continue anyway), onOpenSettings (dismiss and open settings).
 */
export default function ApiKeyModal({
  show,
  isWeb,
  apiKeyStatus,
  onDismiss,
  onOpenSettings,
}) {
  const styles = useStyles();
  const { t } = useTranslation();

  if (!show) return null;

  const notSet = isWeb && apiKeyStatus && !apiKeyStatus.apiKeySet;
  const message = notSet
    ? t("You need to set the OPENROUTER_API_KEY environment variable on the server to use this application.")
    : apiKeyStatus?.message
      ? apiKeyStatus.message
      : t("The OpenRouter API key could not be verified. Translation and rewrite may not work.");

  return (
    <div
      className={styles.overlay}
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          // Don't allow dismiss by clicking outside
        }
      }}
    >
      <div className={styles.content}>
        <h2 className={styles.title}>{t("API Key Required")}</h2>
        <p className={styles.message}>{message}</p>
        <div className={styles.actions}>
          {!notSet && (
            <Button appearance="secondary" onClick={onDismiss}>
              {t("Continue anyway")}
            </Button>
          )}
          <Button
            appearance="primary"
            onClick={() => {
              onDismiss();
              if (!notSet) onOpenSettings();
            }}
          >
            {notSet ? t("OK") : t("Open Settings")}
          </Button>
        </div>
      </div>
    </div>
  );
}

ApiKeyModal.propTypes = {
  show: PropTypes.bool.isRequired,
  isWeb: PropTypes.bool.isRequired,
  apiKeyStatus: PropTypes.shape({
    apiKeySet: PropTypes.bool,
    message: PropTypes.string,
  }),
  onDismiss: PropTypes.func.isRequired,
  onOpenSettings: PropTypes.func.isRequired,
};
