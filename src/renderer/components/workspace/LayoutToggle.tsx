import { Columns2, Rows2 } from "lucide-react";
import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";

export type LayoutMode = "split" | "stack";

interface LayoutToggleProps {
  layoutMode: LayoutMode;
  onLayoutChange: (mode: LayoutMode) => void;
  currentMode?: string;
}

const ACTIVE_COLORS: Record<string, string> = {
  translate: "bg-emerald-500/20 text-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.25)]",
  rewrite:   "bg-blue-500/20   text-blue-400   shadow-[0_0_8px_rgba(96,165,250,0.25)]",
  transform: "bg-purple-500/20 text-purple-400 shadow-[0_0_8px_rgba(192,132,252,0.25)]",
};

export default function LayoutToggle({
  layoutMode,
  onLayoutChange,
  currentMode = "translate",
}: LayoutToggleProps) {
  const { t } = useTranslation();
  const activeClass = ACTIVE_COLORS[currentMode] ?? ACTIVE_COLORS.translate;
  const idleClass = "text-muted-foreground hover:text-foreground hover:bg-white/5";

  return (
    <div
      role="group"
      aria-label={t("Layout")}
      className="flex items-center gap-0.5 rounded-lg border border-white/10 bg-white/5 p-0.5 backdrop-blur-md"
    >
      <button
        type="button"
        onClick={() => onLayoutChange("split")}
        aria-label={t("Switch to side-by-side layout")}
        aria-pressed={layoutMode === "split"}
        title={t("Switch to side-by-side layout")}
        className={cn(
          "flex h-7 w-7 items-center justify-center rounded-md transition-all duration-200",
          layoutMode === "split" ? activeClass : idleClass,
        )}
      >
        <Columns2 className="h-3.5 w-3.5" strokeWidth={1.8} />
      </button>
      <button
        type="button"
        onClick={() => onLayoutChange("stack")}
        aria-label={t("Switch to stacked layout")}
        aria-pressed={layoutMode === "stack"}
        title={t("Switch to stacked layout")}
        className={cn(
          "flex h-7 w-7 items-center justify-center rounded-md transition-all duration-200",
          layoutMode === "stack" ? activeClass : idleClass,
        )}
      >
        <Rows2 className="h-3.5 w-3.5" strokeWidth={1.8} />
      </button>
    </div>
  );
}
