/**
 * Fixed-height band below the text panels so left/right workspace columns stay aligned
 * (run button on one side, matching spacer on the other).
 * @deprecated Use the workspaceActionBarClassName pattern instead — CTA now lives in the
 *   bottom action bar rendered by WorkspaceGrid, not inside panel columns.
 */
export const workspaceCtaRowClassName =
  "flex h-[60px] shrink-0 items-center justify-center";

/** Fixed height + single row so L/R TextPanel footers match (`flex-nowrap` overrides `CardFooter` wrap). */
export const workspacePanelFooterLayoutClassName =
  "h-[60px] shrink-0 flex-nowrap items-center overflow-hidden py-2";

/** Full-width bar pinned at the bottom of the workspace grid (below both panels). */
export const workspaceActionBarClassName =
  "flex h-14 min-w-0 shrink-0 items-center gap-3 overflow-hidden border-t border-border bg-card px-4 md:px-6";

/** Compact row below each TextPanel card: stats text + icon action buttons. */
export const workspacePaneStatsRowClassName =
  "flex min-h-8 shrink-0 items-center gap-2 px-0.5 pt-1.5";

/** Lang selector + elapsed/cost/TPS row above output `TextPanel`; wraps when narrow instead of clipping metrics. */
export const workspaceOutputPanelHeaderRowClassName =
  "flex min-h-10 min-w-0 flex-wrap items-start gap-x-2 gap-y-1";

/**
 * Metrics beside language selector: avoid `min-w-0` here — flex could shrink this item to a few pixels and
 * long lines stacked one character wide. `min-w-[9rem]` lets flex-wrap move this block to the next row when
 * the row cannot fit selector + 9rem; alone on that row, `flex-1` expands it to the column width.
 */
export const workspaceOutputMetaClassName =
  "box-border min-w-[9rem] flex-1 text-end text-[11px] font-mono leading-snug whitespace-normal break-words";
