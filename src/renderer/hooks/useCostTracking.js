/**
 * Cost tracking: persist total cost, write last result (Electron), and log API calls.
 */
export function useCostTracking() {
  const writeLastApiResult = (payload) => {
    if (window.electronAPI?.writeLastApiResult) {
      window.electronAPI.writeLastApiResult(payload).catch((err) => {
        console.error("Failed to write last_api_result.json", err);
      });
    }
  };

  const logApiCall = (type, result, extra = {}) => {
    const timestamp = new Date().toLocaleString();
    const cost = result.calculated_cost ?? result.usage?.cost ?? 0;
    const total_cost = result.total_cost ?? 0;
    const req = result.request_bytes ?? 0;
    const res = result.response_bytes ?? 0;
    const dur = result.duration_ms ?? 0;
    const model = result.model_used ?? result.model ?? "";
    if (type === "translate") {
      const source = extra.source_lang ?? "";
      const target = extra.target_lang ?? "";
      console.log(
        `[API call] timestamp=${timestamp} type=translate model=${model} source=${source} target=${target} request_bytes=${req} response_bytes=${res} duration_ms=${dur} cost=${cost} total_cost=${total_cost}`
      );
    } else {
      const style = extra.rewrite_style ?? "";
      console.log(
        `[API call] timestamp=${timestamp} type=rewrite model=${model} rewrite_style=${style} request_bytes=${req} response_bytes=${res} duration_ms=${dur} cost=${cost} total_cost=${total_cost}`
      );
    }
  };

  const applyCostToResult = (settings, setSetting, result) => {
    if (result.usage) {
      const calculatedCost = result.usage.cost || 0;
      const newTotalCost = (settings.total_cost || 0) + calculatedCost;
      setSetting("total_cost", newTotalCost);
      result.calculated_cost = calculatedCost;
      result.total_cost = newTotalCost;
    }
  };

  return { writeLastApiResult, logApiCall, applyCostToResult };
}
