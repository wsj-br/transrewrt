import type { ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { SOURCE_LOCALE } from "../../i18n";
import { formatDecimal } from "../../utils/misc/formatUtils";
import { openExternalUrl } from "../../utils/misc/urlUtils";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import ccIcon from "../../assets/cc.svg";
import { cn } from "@/lib/utils";

export interface ModelScore {
  index: number | null;
  rank?: number;
  chrf: number | null;
  arena: number | null;
  maxChrf?: number | null;
  maxArena?: number | null;
  belowFloor?: boolean;
}

const LANGUAGEBENCH_URL = "https://huggingface.co/spaces/fair-forward/languagebench";
const ARENA_URL = "https://huggingface.co/datasets/lmarena-ai/leaderboard-dataset";
const MODELS_DEV_URL = "https://models.dev/";
const CC_BY_SA_URL = "https://creativecommons.org/licenses/by-sa/4.0/";
const CC_BY_URL = "https://creativecommons.org/licenses/by/4.0/";
const MIT_URL = "https://opensource.org/license/mit";

function SourceLink({ href, children }: { href: string; children: ReactNode }) {
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

function finite(value: number | null | undefined): value is number {
  return value != null && Number.isFinite(value);
}

function ScoreChip({
  label,
  value,
  tip,
}: {
  label: string;
  value: string;
  tip: ReactNode;
}) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <span className="inline-flex items-center gap-1 rounded border border-border px-1.5 py-0.5 text-[11px] leading-4 text-muted-foreground">
          <span>{label}</span>
          <span className="text-foreground">{value}</span>
        </span>
      </TooltipTrigger>
      <TooltipContent className="max-w-xs text-start">{tip}</TooltipContent>
    </Tooltip>
  );
}

export function ModelScoreStats({ score }: { score?: ModelScore | null }) {
  const { t, i18n } = useTranslation();
  const locale = i18n.language || SOURCE_LOCALE;
  if (!score) return null;
  const hasIndex = finite(score.index);
  if (!hasIndex && !finite(score.chrf) && !finite(score.arena)) return null;

  const ratio = (
    value: number | null | undefined,
    max: number | null | undefined,
    digits: number,
  ) => {
    const format = (n: number) =>
      formatDecimal(n, locale, {
        minimumFractionDigits: digits,
        maximumFractionDigits: digits,
      });
    const left = finite(value) ? format(value) : "—";
    const right = finite(max) ? format(max) : "—";
    return `${left} / ${right}`;
  };

  const indexTip = (
    <span className="flex flex-col gap-0.5 tabular-nums">
      {finite(score.rank) ? <span># {score.rank}</span> : null}
      <span>
        {t("ChrF")}: {ratio(score.chrf, score.maxChrf, 3)}
      </span>
      <span>
        {t("Arena")}: {ratio(score.arena, score.maxArena, 0)}
      </span>
    </span>
  );

  if (!hasIndex) return null;
  return (
    <span className={cn("inline-flex flex-wrap items-center gap-1", score.belowFloor && "opacity-60")}>
      <ScoreChip
        label={t("Index")}
        value={formatDecimal(score.index, locale, {
          minimumFractionDigits: 1,
          maximumFractionDigits: 1,
        })}
        tip={indexTip}
      />
    </span>
  );
}

/** Creative Commons mark for the Available Models row. Tooltip names each score source and its licence. */
export function IndexSourcesHint() {
  const { t } = useTranslation();
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <button
          type="button"
          className="ms-auto shrink-0 rounded p-0.5 text-muted-foreground hover:text-foreground"
          aria-label={t("Index blends languagebench ChrF, Arena Score, and price.")}
        >
          <img src={ccIcon} alt="" className="h-[18px] w-[18px]" />
        </button>
      </TooltipTrigger>
      <TooltipContent className="max-w-sm text-start">
        <span className="flex flex-col gap-1">
          <span>{t("Index blends languagebench ChrF, Arena Score, and price.")}</span>
          <span>
            {t("ChrF")}: <SourceLink href={LANGUAGEBENCH_URL}>languagebench</SourceLink>
            {" ("}
            <SourceLink href={CC_BY_SA_URL}>CC BY-SA 4.0</SourceLink>
            {")"}
          </span>
          <span>
            {t("Arena Score")}: <SourceLink href={ARENA_URL}>LMArena</SourceLink>
            {" ("}
            <SourceLink href={CC_BY_URL}>CC BY 4.0</SourceLink>
            {")"}
          </span>
          <span>
            {t("Costs")}: {t("the provider catalog, otherwise")}{" "}
            <SourceLink href={MODELS_DEV_URL}>models.dev</SourceLink>
            {" ("}
            <SourceLink href={MIT_URL}>MIT</SourceLink>
            {")"}
          </span>
        </span>
      </TooltipContent>
    </Tooltip>
  );
}

