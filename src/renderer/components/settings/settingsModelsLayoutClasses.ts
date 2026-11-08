/**
 * Tailwind layout for Settings → Models (table-first workspace).
 */

import { cn } from "@/lib/utils";

export const modelsEmptyState =
  "flex flex-col items-center justify-center gap-3 py-12 px-6 text-center text-muted-foreground";

export const modelsEmptyStateError = cn(modelsEmptyState, "text-destructive");

