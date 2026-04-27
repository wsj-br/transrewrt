import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";
import { Loader2 } from "lucide-react";
import ModelSelector from "./ModelSelector";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

const TransformGenerateModal = ({
  open,
  model,
  models = [],
  onConfirm,
  onCancel,
  loading = false,
  error = null,
}) => {
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

  const handleConfirm = () => onConfirm(selectedModel, description.trim());

  return (
    <div className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/60">
      <div className="bg-card border border-border rounded-lg shadow-2xl p-6 w-full max-w-lg" data-testid="generate-prompt-modal">
        <h2 className="text-lg font-semibold mb-5">{t("Generate prompt configuration")}</h2>
        <div className="mb-5 flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="generate-prompt-description">{t("What should this prompt do?")}</Label>
            <textarea
              id="generate-prompt-description"
              dir="auto"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder={t("e.g. Summarise long text in 3 bullet points, or rewrite for clarity")}
              aria-label={t("What should this prompt do?")}
              className="w-full min-h-[160px] resize-y rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground outline-none focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/50"
            />
          </div>
          {models.length > 0 && (
            <div className="flex flex-col gap-1.5">
              <Label>{t("Model to generate prompt")}</Label>
              <ModelSelector models={models} currentModel={selectedModel} onModelChange={setSelectedModel} />
            </div>
          )}
          {error && (
            <p className="text-sm text-destructive break-words">{error}</p>
          )}
        </div>
        <div className="flex justify-end gap-2">
          <Button variant="outline" onClick={onCancel} data-testid="generate-prompt-cancel">
            {t("Cancel")}
          </Button>
          <Button
            onClick={handleConfirm}
            disabled={loading || !selectedModel || !description.trim()}
          >
            {loading && <Loader2 className="me-2 h-4 w-4 animate-spin" />}
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
