import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";
import { Button } from "@/components/ui/button";

/**
 * Modal shown when API key is missing or invalid.
 */
export default function ApiKeyModal({
  show,
  isWeb,
  apiKeyStatus,
  onDismiss,
  onOpenSettings,
}) {
  const { t } = useTranslation();

  if (!show) return null;

  const notSet = isWeb && apiKeyStatus && !apiKeyStatus.apiKeySet;
  const message = notSet
    ? t("You need to set the OPENROUTER_API_KEY environment variable on the server to use this application.")
    : apiKeyStatus?.message
      ? apiKeyStatus.message
      : t("The OpenRouter API key could not be verified. Translation and rewrite may not work.");

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50">
      <div className="bg-card border border-border rounded-lg shadow-2xl p-6 w-full max-w-md">
        <h2 className="text-lg font-semibold mb-4">{t("API Key Required")}</h2>
        <p className="text-sm text-muted-foreground mb-6 leading-relaxed">{message}</p>
        <div className="flex justify-end gap-3">
          {!notSet && (
            <Button variant="outline" onClick={onDismiss}>
              {t("Continue anyway")}
            </Button>
          )}
          <Button
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
