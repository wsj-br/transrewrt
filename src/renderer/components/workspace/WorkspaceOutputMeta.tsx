import type { ReactNode } from "react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { workspaceOutputMetaClassName } from "./workspaceLayoutClasses";

const metricsTextClassName =
  "text-[11px] font-mono leading-snug whitespace-normal break-words text-end";

type WorkspaceOutputMetaProps = {
  children: ReactNode;
  tooltip?: ReactNode | null;
};

/** Run metrics row: layout shell is full width; cost tooltip hover targets only the text block. */
export function WorkspaceOutputMeta({ children, tooltip }: WorkspaceOutputMetaProps) {
  const textBlock = (
    <span
      className={cn(
        "inline-block w-fit max-w-full",
        metricsTextClassName,
        tooltip && "cursor-help",
      )}
      style={{ color: "rgba(var(--mode-accent-rgb), 0.8)" }}
    >
      {children}
    </span>
  );

  return (
    <span className={workspaceOutputMetaClassName}>
      {tooltip ? (
        <Tooltip delayDuration={300}>
          <TooltipTrigger asChild>{textBlock}</TooltipTrigger>
          <TooltipContent side="top" align="end" sideOffset={6} className="font-mono text-xs">
            {tooltip}
          </TooltipContent>
        </Tooltip>
      ) : (
        textBlock
      )}
    </span>
  );
}
