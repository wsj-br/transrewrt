import { modelFooterDisplayId } from "../../utils/misc/modelIdUtils";

/**
 * Stats line + model on two rows (workspace output TextPanel footers).
 */
export function workspaceOutputFooterWithModel(statsLine, modelId, t) {
  const short = modelId ? modelFooterDisplayId(modelId) : "";
  return (
    <>
      <span className="min-w-0 break-words">{statsLine}</span>
      <span className="min-w-0 truncate" title={modelId || undefined}>
        {t("Model:")} {short || t("N/A")}
      </span>
    </>
  );
}
