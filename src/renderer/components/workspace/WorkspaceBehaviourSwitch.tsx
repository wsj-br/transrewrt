import { Switch, switchAccentClassName } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

type WorkspaceBehaviourSwitchProps = {
  id: string;
  label: string;
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
  title?: string;
};

export function WorkspaceBehaviourSwitch({
  id,
  label,
  checked,
  onCheckedChange,
  title,
}: WorkspaceBehaviourSwitchProps) {
  return (
    <div className="flex shrink-0 items-center gap-1.5" title={title}>
      <Switch
        id={id}
        checked={checked}
        onCheckedChange={onCheckedChange}
        className={switchAccentClassName}
      />
      <Label
        htmlFor={id}
        className={cn(
          "m-0 cursor-pointer whitespace-nowrap text-[11px] leading-none",
          checked
            ? "text-[rgba(var(--mode-accent-rgb),0.9)]"
            : "text-muted-foreground/70",
        )}
      >
        {label}
      </Label>
    </div>
  );
}
