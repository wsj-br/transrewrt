import { useTranslation } from "react-i18next";

/**
 * Model list management: remove model from list, handle 404/400 unavailable model.
 */
export function useModelManagement(configManager, setSetting, setError) {
  const { t } = useTranslation();

  const removeModelFromList = async (modelId) => {
    const current = configManager.get("available_models") || [];
    const nextList = current.filter((id) => id !== modelId);
    if (nextList.length === current.length) return { emptied: false };
    const idx = current.indexOf(modelId);
    const nextModel = nextList[idx] ?? nextList[idx - 1] ?? nextList[0] ?? "";
    await setSetting("available_models", nextList);
    await setSetting("last_used_model", nextModel);
    return { emptied: nextList.length === 0 };
  };

  const isUnavailableModelError = (err) =>
    err &&
    (err.status === 404 ||
      err.status === 400 ||
      (err.message && /404|400|model not found|HTTP error! status: (400|404)/i.test(String(err.message))));

  const handleUnavailableModel = async (modelId) => {
    const current = configManager.get("available_models") || [];
    const idx = current.indexOf(modelId);
    const next = current.filter((id) => id !== modelId);
    const nextModel = next[idx] ?? next[idx - 1] ?? next[0] ?? "";
    await setSetting("available_models", next);
    await setSetting("last_used_model", nextModel);
    setError(null);
    if (nextModel) {
      return {
        error: t(
          'Model unavailable (404/400). The model has been removed from your list and "{{nextModelId}}" has been selected.',
          { nextModelId: nextModel },
        ),
        status: 404,
      };
    }
    return {
      error: t(
        "Model unavailable (404/400). The model has been removed from your list. Select another model in Settings → Models.",
      ),
      status: 404,
    };
  };

  return { removeModelFromList, isUnavailableModelError, handleUnavailableModel };
}
