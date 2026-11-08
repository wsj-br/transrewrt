import type { ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { openExternalUrl } from "../../utils/misc/urlUtils";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

const LANGUAGEBENCH_URL = "https://huggingface.co/spaces/fair-forward/languagebench";
const ARENA_URL = "https://huggingface.co/datasets/lmarena-ai/leaderboard-dataset";
const MODELS_DEV_URL = "https://models.dev/";
const CC_BY_SA_URL = "https://creativecommons.org/licenses/by-sa/4.0/";
const CC_BY_URL = "https://creativecommons.org/licenses/by/4.0/";
const MIT_URL = "https://opensource.org/license/mit";

export function SourceLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <button
      type="button"
      className="underline underline-offset-2 hover:text-foreground"
      onClick={(event) => {
        event.preventDefault();
        event.stopPropagation();
        openExternalUrl(href);
      }}
    >
      {children}
    </button>
  );
}

/** Which model-table column a source hint describes. */
export type ScoreSourceKind = "index" | "chrf" | "arena" | "costs";

function sourceHintContent(kind: ScoreSourceKind, t: (key: string) => string): ReactNode {
  switch (kind) {
    case "index":
      return <span>{t("Index blends languagebench ChrF, Arena Score, and price.")}</span>;
    case "chrf":
      return (
        <span>
          {t("ChrF")}: <SourceLink href={LANGUAGEBENCH_URL}>languagebench</SourceLink>
          {" ("}
          <SourceLink href={CC_BY_SA_URL}>CC BY-SA 4.0</SourceLink>
          {")"}
        </span>
      );
    case "arena":
      return (
        <span>
          {t("Arena Score")}: <SourceLink href={ARENA_URL}>LMArena</SourceLink>
          {" ("}
          <SourceLink href={CC_BY_URL}>CC BY 4.0</SourceLink>
          {")"}
        </span>
      );
    case "costs":
      return (
        <span>
          {t("Costs")}: {t("the provider catalog, otherwise")}{" "}
          <SourceLink href={MODELS_DEV_URL}>models.dev</SourceLink>
          {" ("}
          <SourceLink href={MIT_URL}>MIT</SourceLink>
          {")"}
        </span>
      );
    default: {
      const exhaustive: never = kind;
      return exhaustive;
    }
  }
}

/** Table-header label with a tooltip naming the data source and its licence. */
export function ScoreColumnHeader({
  label,
  kind,
  className,
}: {
  label: ReactNode;
  kind: ScoreSourceKind;
  className?: string;
}) {
  const { t } = useTranslation();
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <span
          className={`cursor-help underline decoration-dotted underline-offset-4${className ? ` ${className}` : ""}`}
        >
          {label}
        </span>
      </TooltipTrigger>
      <TooltipContent className="max-w-sm text-start">
        <span className="flex flex-col gap-1">{sourceHintContent(kind, t)}</span>
      </TooltipContent>
    </Tooltip>
  );
}
