/**
 * Tailwind layout for Settings → Models (replaces legacy main.css BEM).
 * Wide split is side-by-side from Tailwind `lg` (1024px); below `lg`, inner pill tabs
 * switch between Available and Selected (see SettingsModelsTab).
 */

import { cn } from "@/lib/utils";

export const modelsSplitView = cn(
  "grid h-full flex-1 gap-0 bg-background w-full min-w-0 max-w-full min-h-0 box-border",
  "grid-cols-[1fr_1px_1fr]",
);

export const modelsDivider = cn(
  "shrink-0 bg-border w-px min-h-0 self-stretch",
);

export const modelsPaneLeft = cn(
  "flex flex-col gap-3 p-6 overflow-y-auto overflow-x-hidden min-w-0 min-h-[250px] sm:min-h-[520px] w-full box-border",
  "border-border bg-[color-mix(in_oklch,var(--foreground)_4%,var(--background))]",
  "max-lg:border-e-0 lg:border-e",
);

export const modelsPaneRight = cn(
  "flex flex-col gap-3 p-6 overflow-y-auto overflow-x-hidden min-w-0 min-h-[250px] sm:min-h-[520px] w-full box-border",
  "bg-[color-mix(in_oklch,var(--foreground)_2%,var(--background))]",
);

/**
 * Wide split (lg+): left pane — column layout, no outer scroll; fixed title/search + scroll body below.
 */
export const modelsPaneLeftWide = cn(
  "flex min-h-0 h-full min-w-0 flex-col overflow-hidden box-border w-full",
  /* Uniform top/bottom/start; smaller padding-inline-end so the scrollbar sits closer to the panel edge */
  "pt-6 pb-6 ps-6 pe-2.5",
  "border-border bg-[color-mix(in_oklch,var(--foreground)_4%,var(--background))]",
  "max-lg:border-e-0 lg:border-e",
);

/**
 * Wide split (lg+): right pane — same; fixed Selected header row + scroll body for the list.
 */
export const modelsPaneRightWide = cn(
  "flex min-h-0 h-full min-w-0 flex-col overflow-hidden box-border w-full",
  "pt-6 pb-6 ps-6 pe-2.5",
  "bg-[color-mix(in_oklch,var(--foreground)_2%,var(--background))]",
);

/** Scroll region below fixed Available title/search (filters, toolbar, model list). */
export const modelsWideAvailableScrollBody = cn(
  "flex min-h-0 flex-1 flex-col gap-3 overflow-y-auto overflow-x-hidden pt-1 [scrollbar-width:thin]",
);

/** Scroll region below fixed Selected header (selected model cards only). */
export const modelsWideSelectedScrollBody = cn(
  "flex min-h-0 flex-1 flex-col overflow-y-auto overflow-x-hidden min-w-0 pt-1 [scrollbar-width:thin]",
);

export const modelsPaneHeader = "flex items-center justify-between mb-2.5 pb-1.5";

/** Title row above full-width search (no centered-search grid). */
export const modelsAvailableHeaderRow = "flex flex-col gap-2 w-full min-w-0";

export const modelsAvailableTitle = "flex items-center gap-2.5 min-w-0";

export const modelsHeaderSearch = "w-full min-w-0 max-w-full";

export const modelsHeaderSearchInput = "w-full";

/** Inner Available / Selected pills: one row; tabs share width and truncate instead of wrapping. */
export const modelsInnerTabsStrip =
  "flex shrink-0 flex-nowrap items-stretch gap-2 min-w-0 overflow-x-auto px-4 pt-3 pb-2 border-b border-border bg-card/60 [scrollbar-width:thin]";

/** When Models uses inner Available/Selected tabs: pane content is not its own scroll region — the tabpanel scrolls. */
export const modelsPaneAsScrollableTabChild = cn(
  "overflow-y-visible overflow-x-hidden min-h-0 sm:min-h-0",
  "shrink-0 grow-0",
);

/** List / selected column: no nested overflow; height follows content so parent tabpanel scrolls. */
export const modelsListAsScrollableTabChild =
  "min-h-0 flex-none grow-0 overflow-visible";

export const selectedModelsContainerAsScrollableTabChild =
  "min-h-0 flex-none grow-0 overflow-visible";

export const modelsControlsModern = "flex gap-3 items-center flex-wrap";

export const modelsToolbar =
  "flex items-center justify-between gap-2 flex-wrap pb-2 border-b border-border";

export const modelsToolbarLeft = "flex flex-wrap items-center gap-2 flex-1 min-w-0";

export const modelsToolbarRight = "flex items-center shrink-0 ms-auto";

/** Wide split: pane scrolls; list is not its own scroll region (avoids nested scrollbars). */
export const modelsListContainer =
  "flex flex-col gap-3 min-h-[270px] overflow-visible pe-1.5";

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

/** Wide split: pane scrolls; inner list does not (matches Available column). */
export const selectedModelsContainer =
  "flex flex-col min-h-[270px] overflow-visible";

export const selectedModelsList = "flex flex-col gap-2.5";

export const selectedModelCard = cn(
  "p-3.5 px-4 border border-border bg-card rounded-md transition-all",
  "hover:bg-[color-mix(in_oklch,var(--accent)_80%,var(--background))]",
  "hover:shadow-[0_2px_6px_color-mix(in_oklch,var(--foreground)_10%,transparent)]",
);

export const selectedModelContent = "flex items-center justify-between gap-3";

export const selectedModelInfo = "flex-1 flex flex-col gap-1 min-w-0";

export const selectedModelHeader = "flex items-center gap-2 flex-wrap";
