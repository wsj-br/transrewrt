/**
 * Tailwind layout for Settings → Models (replaces legacy main.css BEM).
 * Responsive breakpoints match the former 1200px media query.
 */

import { cn } from "@/lib/utils";

export const modelsSplitView = cn(
  "grid h-full flex-1 gap-0 bg-background w-full min-w-0 max-w-full min-h-0 box-border",
  "grid-cols-[1fr_1px_1fr]",
  "max-[1200px]:grid-cols-1 max-[1200px]:grid-rows-[auto_1px_auto] max-[1200px]:h-auto max-[1200px]:flex-[0_1_auto]",
);

export const modelsDivider = cn(
  "shrink-0 bg-border w-px min-h-0 self-stretch",
  "max-[1200px]:w-full max-[1200px]:h-px max-[1200px]:self-auto",
);

export const modelsPaneLeft = cn(
  "flex flex-col gap-3 p-6 overflow-y-auto overflow-x-hidden min-w-0 min-h-[250px] sm:min-h-[520px] w-full box-border",
  "border-e border-border bg-[color-mix(in_oklch,var(--foreground)_4%,var(--background))]",
  "max-[1200px]:border-e-0 max-[1200px]:border-b",
);

export const modelsPaneRight = cn(
  "flex flex-col gap-3 p-6 overflow-y-auto overflow-x-hidden min-w-0 min-h-[250px] sm:min-h-[520px] w-full box-border",
  "bg-[color-mix(in_oklch,var(--foreground)_2%,var(--background))]",
);

export const modelsPaneHeader = "flex items-center justify-between mb-2.5 pb-1.5";

export const modelsAvailableHeaderRow =
  "grid grid-cols-1 sm:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-x-3 gap-y-2";

export const modelsAvailableTitle = "flex items-center gap-2.5 min-w-0 justify-self-start";

export const modelsHeaderSearch =
  "justify-self-stretch sm:justify-self-center w-full sm:w-[min(100%,320px)] min-w-0 sm:min-w-[140px]";

export const modelsHeaderSearchInput = "w-full";

export const modelsHeaderSearchBalance = "hidden sm:block min-w-0";

export const modelsControlsModern = "flex gap-3 items-center flex-wrap";

export const modelsToolbar =
  "flex items-center justify-between gap-2 flex-wrap pb-2 border-b border-border";

export const modelsToolbarLeft = "flex flex-wrap items-center gap-2 flex-1 min-w-0";

export const modelsToolbarRight = "flex items-center shrink-0 ms-auto";

export const modelsListContainer =
  "flex-1 min-h-[270px] overflow-y-auto flex flex-col gap-3 pe-3 [scrollbar-width:thin]";

export const modelsListFlatOrGrouped = "flex flex-col gap-2";

export const modelsEmptyState =
  "flex flex-col items-center justify-center gap-3 py-12 px-6 text-center text-muted-foreground";

export const modelsEmptyStateError = cn(modelsEmptyState, "text-destructive");

export const providerSection = cn(
  "rounded-lg border border-border overflow-hidden mb-2",
  "bg-[color-mix(in_oklch,var(--foreground)_4%,var(--background))]",
);

export const providerHeader = cn(
  "px-4 py-3.5 cursor-pointer transition-colors",
  "hover:bg-[color-mix(in_oklch,var(--foreground)_7%,var(--background))]",
);

export const providerInfo = "flex items-center gap-2.5";

export const providerIconWrap = "flex items-center w-5 shrink-0";

export const providerModelsInner = cn(
  "px-4 pb-4 pt-2 flex flex-col gap-2",
  "bg-[color-mix(in_oklch,var(--foreground)_6%,var(--background))]",
);

export function modelCardClass(isSelected: boolean, flat?: boolean) {
  return cn(
    "cursor-pointer transition-all border rounded-md border-border bg-card p-3 px-3.5",
    "hover:bg-[color-mix(in_oklch,var(--accent)_80%,var(--background))]",
    "hover:shadow-[0_2px_8px_color-mix(in_oklch,var(--foreground)_12%,transparent)] hover:-translate-y-px",
    flat && "mb-2",
    isSelected &&
      cn(
        "border-primary bg-[color-mix(in_oklch,var(--primary)_18%,var(--background))]",
        "shadow-none translate-y-0 hover:translate-y-0",
      ),
  );
}

export const modelCardContent = "flex items-center justify-between gap-3";

export const modelInfo = "flex-1 flex flex-col gap-1 min-w-0";

export const modelNameRow = "flex items-center gap-2 flex-wrap";

export const modelPrice = "text-xs";

export const modelAction = "shrink-0";

export const selectedModelsContainer =
  "flex-1 min-h-[270px] overflow-y-auto flex flex-col [scrollbar-width:thin]";

export const selectedModelsList = "flex flex-col gap-2.5";

export const selectedModelCard = cn(
  "p-3.5 px-4 border border-border bg-card rounded-md transition-all",
  "hover:bg-[color-mix(in_oklch,var(--accent)_80%,var(--background))]",
  "hover:shadow-[0_2px_6px_color-mix(in_oklch,var(--foreground)_10%,transparent)]",
);

export const selectedModelContent = "flex items-center justify-between gap-3";

export const selectedModelInfo = "flex-1 flex flex-col gap-1 min-w-0";

export const selectedModelHeader = "flex items-center gap-2 flex-wrap";
