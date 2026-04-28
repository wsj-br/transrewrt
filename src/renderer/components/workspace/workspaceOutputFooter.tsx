import { modelFooterDisplayId } from "../../utils/misc/modelIdUtils";

/**
 * Stats line + optional model id (muted, mode-accent colour via CSS variables).
 */
export function workspaceOutputFooterWithModel(statsLine, modelId, _t) {
  const short = modelId ? modelFooterDisplayId(modelId) : "";
  return (
    <>
      <span className="min-w-0 break-words">{statsLine}</span>
      {short ? (
        <span
          className="mt-0.5 truncate font-mono text-[10.5px]"
          style={{ color: "rgba(var(--mode-accent-rgb), 0.35)" }}
          title={modelId || undefined}
        >
          {short}
        </span>
      ) : null}
    </>
  );
}
