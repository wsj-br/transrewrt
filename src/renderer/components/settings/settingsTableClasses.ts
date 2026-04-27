/**
 * Shared Tailwind class strings for settings tabs that render HTML tables.
 * Keeps cost tracking, transform prompts, and users tables aligned on theme tokens.
 */

/** Cost tracking & transform prompts — inset data tables with optional totals row. */
export const settingsDataTable = {
  wrap: "w-fit max-w-full mt-2 mb-2 rounded-lg overflow-auto shadow border border-border",
  table: "w-auto table-auto border-collapse text-[14px]",
  thead: "bg-muted",
  th: "p-[10px_12px] text-start font-semibold bg-muted border-b border-border text-sm text-foreground",
  td: "p-[12px_16px] border-b border-border text-foreground",
  tdValue: "whitespace-nowrap",
  tbodyTr: "hover:bg-accent/50",
  totalRow: "font-semibold bg-muted border-t border-border [&_td]:border-b-0 [&_td]:text-foreground",
  emptyRow: "p-[20px_16px] text-center text-muted-foreground italic bg-muted/50",
} as const;

/** Users tab — full-width table, hover on body rows. */
export const settingsUsersTable = {
  wrap: "overflow-x-auto border border-border rounded-lg",
  table: "w-full border-collapse text-[14px]",
  th: "text-start p-[10px_12px] font-semibold bg-muted border-b border-border text-foreground",
  td: "p-[10px_12px] border-b border-border text-foreground",
  tr: "hover:bg-accent/50",
} as const;

/** Cost tracking "By function" — stacked cards below `sm` (table hidden on small screens). */
export const settingsDataTableCard = {
  list: "mt-2 mb-2 flex flex-col gap-2 sm:hidden",
  card: "rounded-lg border border-border bg-card p-3 shadow-sm",
  cardTotal:
    "rounded-lg border-2 border-primary/40 bg-muted/30 p-3 shadow-sm",
  title: "text-sm font-semibold mb-2 break-words",
  metricGrid: "grid grid-cols-3 gap-x-2 gap-y-1 text-xs min-w-0",
  metricCell: "min-w-0",
  metricLabel: "text-muted-foreground block truncate",
  metricValue: "font-medium text-foreground tabular-nums break-all",
  empty: "rounded-lg border border-dashed border-border py-8 px-4 text-center text-muted-foreground italic text-sm",
} as const;

/** Transform prompts tab — one card per prompt below `sm`. */
export const settingsTransformPromptsCard = {
  list: "mt-2 mb-2 flex flex-col gap-3 sm:hidden",
  card: "rounded-lg border border-border bg-card p-3 shadow-sm",
  headerRow: "flex items-start justify-between gap-2",
  name: "font-semibold text-sm break-all min-w-0 flex-1 pe-2",
  deleteBtn:
    "text-muted-foreground hover:text-foreground shrink-0 p-1 rounded cursor-pointer",
  fieldBlock: "mt-3 first:mt-0",
  fieldLabel: "text-xs text-muted-foreground font-medium block mb-1",
  fieldValue: "text-sm text-foreground break-words",
  instructionsValue:
    "text-sm text-foreground break-words whitespace-pre-wrap max-h-40 overflow-y-auto",
  empty:
    "rounded-lg border border-dashed border-border py-8 px-4 text-center text-muted-foreground italic text-sm",
} as const;

/** Users tab — one card per user below `sm`. */
export const settingsUsersTableCard = {
  list: "flex flex-col gap-3 sm:hidden",
  card: "rounded-lg border border-border bg-card p-3 shadow-sm",
  headerRow: "flex items-start justify-between gap-2 mb-1",
  username: "font-semibold text-sm break-all min-w-0 flex-1",
  fieldRow: "text-xs mt-2 leading-snug",
  fieldLabel: "text-muted-foreground font-medium",
  actions:
    "flex flex-wrap items-center gap-0.5 mt-3 pt-2 border-t border-border",
  empty: "text-center text-muted-foreground text-sm py-8",
} as const;
