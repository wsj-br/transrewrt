import { useTranslation } from "react-i18next";
import { FREE_MODEL_ID } from "../constants";

/**
 * Model list management: remove model from list, handle 404/400 unavailable model.
 */
export function useModelManagement(configManager, setSetting, setError) {
  const { t } = useTranslation();
  const removeModelFromList = async (modelId) => {
    const current = configManager.get("available_models") || [];
    if (current.length <= 1) return;
    const nextList = current.filter((id) => id !== modelId);
    if (nextList.length === current.length) return;
    const idx = current.indexOf(modelId);
    const nextModel = nextList[idx] ?? nextList[idx - 1] ?? nextList[0];
    await setSetting("available_models", nextList);
    await setSetting("last_used_model", nextModel);
  };

  const isUnavailableModelError = (err) =>
    err &&
    (err.status === 404 ||
      err.status === 400 ||
      (err.message && /404|400|model not found|HTTP error! status: (400|404)/i.test(String(err.message))));

  const handleUnavailableModel = async (modelId) => {
    const current = configManager.get("available_models") || [];
    const next = current.filter((id) => id !== modelId);
    if (!next.includes(FREE_MODEL_ID)) next.unshift(FREE_MODEL_ID);
    await setSetting("available_models", next);
    await setSetting("last_used_model", FREE_MODEL_ID);
    setError(null);
    return {
      error: t(
        'Model unavailable (404/400). The model has been removed from your list and "{{freeModelId}}" has been selected.',
        { freeModelId: FREE_MODEL_ID }
      ),
      status: 404,
    };
  };

  return { removeModelFromList, isUnavailableModelError, handleUnavailableModel };
}
