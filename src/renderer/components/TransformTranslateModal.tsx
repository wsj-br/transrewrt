import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";
import { Loader2 } from "lucide-react";
import LanguageSelector from "./LanguageSelector";
import ModelSelector from "./ModelSelector";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

const TransformTranslateModal = ({
  open,
  targetLang,
  onTargetLangChange,
  onConfirm,
  onCancel,
  models = [],
  model,
  loading = false,
  error = null,
}) => {
  const { t } = useTranslation();
  const [selectedModel, setSelectedModel] = useState(model || "");

  useEffect(() => {
    if (open) queueMicrotask(() => setSelectedModel(model || ""));
  }, [open, model]);

  if (!open) return null;

  const handleConfirm = () => onConfirm(selectedModel);

  return (
    <div className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/60">
      <div className="bg-card border border-border rounded-lg shadow-2xl p-6 w-full max-w-md">
        <h2 className="text-lg font-semibold mb-5">{t("Translate prompt fields")}</h2>
        <div className="mb-5 flex flex-col gap-4">
          <LanguageSelector
            label={t("Target language:")}
            value={targetLang}
            onChange={onTargetLangChange}
            targetListSameAsSource={true}
            iconClassName="text-emerald-500"
            iconStrokeWidth={1.6}
          />
          {models.length > 0 && (
            <div className="flex items-center gap-3">
              <Label className="shrink-0">{t("Model to translate")}</Label>
              <ModelSelector models={models} currentModel={selectedModel} onModelChange={setSelectedModel} />
            </div>
          )}
          {error && <p className="text-sm text-destructive break-words">{error}</p>}
        </div>
        <div className="flex justify-end gap-2">
          <Button variant="outline" onClick={onCancel}>{t("Cancel")}</Button>
          <Button onClick={handleConfirm} disabled={loading || !targetLang || !selectedModel}>
            {loading && <Loader2 className="me-2 h-4 w-4 animate-spin" />}
            {loading ? t("Translating…") : t("Translate")}
          </Button>
        </div>
      </div>
    </div>
  );
};

TransformTranslateModal.propTypes = {
  open: PropTypes.bool.isRequired,
  targetLang: PropTypes.string,
  onTargetLangChange: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  models: PropTypes.arrayOf(PropTypes.string),
  model: PropTypes.string,
  loading: PropTypes.bool,
  error: PropTypes.string,
};

export default TransformTranslateModal;
