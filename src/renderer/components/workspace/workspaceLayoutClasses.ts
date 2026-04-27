/**
 * Fixed-height band below the text panels so left/right workspace columns stay aligned
 * (run button on one side, matching spacer on the other).
 */
export const workspaceCtaRowClassName =
  "flex h-[60px] shrink-0 items-center justify-center";

/** Fixed height + single row so L/R TextPanel footers match (`flex-nowrap` overrides `CardFooter` wrap). */
export const workspacePanelFooterLayoutClassName =
  "h-[60px] shrink-0 flex-nowrap items-center overflow-hidden py-2";
