import { Shuffle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const MAX_VERSIONS = 5;

interface RephraseControlsProps {
  t: (key: string, options?: Record<string, string | number>) => string;
  isProcessing: boolean;
  outputIsModelResult: boolean;
  versions: string[];
  selectedVersion: number;
  outputHasSelection?: boolean;
  onRephrase: () => void;
  onVersionChange: (version: string) => void;
  /** data-testid applied to the Rephrase button. */
  rephraseButtonTestId?: string;
  /** Aria-label for the version Select trigger. */
  versionSelectAriaLabel?: string;
  /** Tooltip shown when the max-versions cap is reached (no selection). */
  maxVersionsTooltip?: string;
}

function versionLabel(t: (key: string, options?: Record<string, string | number>) => string, version: number) {
  return t("Version {{number}}", { number: String(version) });
}

export function RephraseControls({
  t,
  isProcessing,
  outputIsModelResult,
  versions,
  selectedVersion,
  outputHasSelection = false,
  onRephrase,
  onVersionChange,
  rephraseButtonTestId,
  versionSelectAriaLabel,
  maxVersionsTooltip,
}: RephraseControlsProps) {
  if (!outputIsModelResult || versions.length === 0) {
    return null;
  }

  const atMaxVersions = versions.length >= MAX_VERSIONS;
  const rephraseDisabled = isProcessing || (atMaxVersions && !outputHasSelection);

  return (
    <div className="flex shrink-0 items-center gap-1.5">
      <Button
        variant="outline"
        size="sm"
        className="h-8 shrink-0 gap-1.5"
        data-testid={rephraseButtonTestId}
        disabled={rephraseDisabled}
        onMouseDown={(event) => {
          if (outputHasSelection && !rephraseDisabled) {
            event.preventDefault();
          }
        }}
        onClick={onRephrase}
        title={
          atMaxVersions && !outputHasSelection
            ? (maxVersionsTooltip ?? t("Maximum of 5 versions reached"))
            : t("Rephrase...")
        }
        aria-label={t("Rephrase...")}
      >
        <Shuffle className="h-3.5 w-3.5" />
        {t("Rephrase...")}
      </Button>
      {versions.length > 1 ? (
        <Select
          value={String(selectedVersion)}
          onValueChange={onVersionChange}
          disabled={isProcessing}
        >
          <SelectTrigger
            size="sm"
            className="h-8 min-w-[6.5rem] border-white/10 bg-transparent px-2 text-muted-foreground hover:text-foreground"
            aria-label={versionSelectAriaLabel ?? t("Version")}
          >
            <SelectValue>{versionLabel(t, selectedVersion)}</SelectValue>
          </SelectTrigger>
          <SelectContent>
            {versions.map((_, index) => {
              const version = index + 1;
              return (
                <SelectItem key={version} value={String(version)}>
                  {versionLabel(t, version)}
                </SelectItem>
              );
            })}
          </SelectContent>
        </Select>
      ) : null}
    </div>
  );
}
