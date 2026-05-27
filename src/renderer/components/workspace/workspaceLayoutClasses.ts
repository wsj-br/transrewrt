import { cn } from "@/lib/utils";

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

/** Shared shell: height, border, padding (workspace bottom bar + collapsed sidebar strip). */
export const workspaceActionBarShellClassName =
  "h-14 min-w-0 shrink-0 overflow-hidden border-t border-border bg-card px-4 md:px-6";

/** Full-width bar pinned at the bottom of the workspace grid (below both panels). Flex row (e.g. sidebar strip). */
export const workspaceActionBarClassName = cn(
  workspaceActionBarShellClassName,
  "flex items-center gap-3",
);

/**
 * Translate / Rewrite / Transform: Clear on the left, primary action horizontally centered in the main panel.
 * Grid: `1fr | auto | 1fr` so the CTA column stays visually centered.
 */
export const workspaceActionBarCenteredCtaClassName = cn(
  workspaceActionBarShellClassName,
  "grid grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-x-3 gap-y-0",
);

/** Compact row below each TextPanel card: stats text + icon action buttons. */
export const workspacePaneStatsRowClassName =
  "flex min-h-8 shrink-0 items-center gap-2 px-0.5 pt-1.5";

/** Stats line in pane footer rows — center with switches/buttons despite smaller type. */
export const workspacePaneStatsTextClassName =
  "self-center leading-none text-[11px] text-muted-foreground/60 min-w-0 truncate";

/** Model id in pane footer rows — center with adjacent controls. */
export const workspacePaneModelIdClassName =
  "self-center leading-none shrink-0 font-mono text-[10.5px] truncate";

/** Lang selector + elapsed/cost/TPS row above output `TextPanel`; wraps when narrow instead of clipping metrics. */
export const workspaceOutputPanelHeaderRowClassName =
  "flex min-h-10 min-w-0 flex-wrap items-center gap-x-2 gap-y-1";

/**
 * Metrics beside language selector (layout shell only — text styling in WorkspaceOutputMeta).
 * `min-w-[9rem]` lets flex-wrap move this block to the next row when the row cannot fit selector + 9rem.
 */
export const workspaceOutputMetaClassName =
  "box-border min-w-[9rem] flex-1 self-center text-end";
