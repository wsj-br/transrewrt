import configManager from "../utils/configManager";

/**
 * Cost tracking: persist total cost, write last result (Electron), and log API calls.
 */
export function useCostTracking() {
  const writeLastApiResult = (payload) => {
    if (window.electronAPI?.writeLastApiResult) {
      return window.electronAPI.writeLastApiResult(payload).catch((err) => {
        console.error("Failed to write last_api_result.json", err);
      });
    }
    return Promise.resolve();
  };

  const logApiCall = (type, result, extra = {}) => {
    // API call logging is now done on the server side
  };

  const applyCostToResult = (setSetting, result) => {
    if (result.usage) {
      const calculatedCost = Number(result.usage.cost) || 0;
      const currentTotal = configManager.get("total_cost") ?? 0;
      const newTotalCost = currentTotal + calculatedCost;
      setSetting("total_cost", newTotalCost);
      result.calculated_cost = calculatedCost;
      result.total_cost = newTotalCost;
    }
  };

  return { writeLastApiResult, logApiCall, applyCostToResult };
}
