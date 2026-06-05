import { Shuffle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const MAX_TRANSLATE_VERSIONS = 3;

interface TranslateRephraseControlsProps {
  t: (key: string, options?: Record<string, string | number>) => string;
  isProcessing: boolean;
  translateOutputIsModelResult: boolean;
  translateVersions: string[];
  selectedTranslateVersion: number;
  onRephrase: () => void;
  onVersionChange: (version: string) => void;
}

function versionLabel(t: (key: string, options?: Record<string, string | number>) => string, version: number) {
  return t("Version {{number}}", { number: String(version) });
}

export function TranslateRephraseControls({
  t,
  isProcessing,
  translateOutputIsModelResult,
  translateVersions,
  selectedTranslateVersion,
  onRephrase,
  onVersionChange,
}: TranslateRephraseControlsProps) {
  if (!translateOutputIsModelResult || translateVersions.length === 0) {
    return null;
  }

  const atMaxVersions = translateVersions.length >= MAX_TRANSLATE_VERSIONS;

  return (
    <div className="flex shrink-0 items-center gap-1.5">
      <Button
        variant="outline"
        size="sm"
        className="h-8 shrink-0 gap-1.5"
        disabled={isProcessing || atMaxVersions}
        onClick={onRephrase}
        title={atMaxVersions ? t("Maximum of 3 translation versions reached") : t("Rephrase...")}
        aria-label={t("Rephrase...")}
      >
        <Shuffle className="h-3.5 w-3.5" />
        {t("Rephrase...")}
      </Button>
      {translateVersions.length > 1 ? (
        <Select
          value={String(selectedTranslateVersion)}
          onValueChange={onVersionChange}
          disabled={isProcessing}
        >
          <SelectTrigger
            size="sm"
            className="h-8 min-w-[6.5rem] border-white/10 bg-transparent px-2 text-muted-foreground hover:text-foreground"
            aria-label={t("Translation version")}
          >
            <SelectValue>{versionLabel(t, selectedTranslateVersion)}</SelectValue>
          </SelectTrigger>
          <SelectContent>
            {translateVersions.map((_, index) => {
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
