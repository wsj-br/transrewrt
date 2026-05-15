import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Check, ChevronDown } from "lucide-react";
import PropTypes from "prop-types";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { skillDisplayDescription, skillDisplayName } from "@/utils/skills/skillDisplay";
import type { Skill } from "@/utils/skills/skillsTypes";

/**
 * Regular mode: pick a skill (name + description). No provider / route UI.
 */
function SkillSelector({
  skills = [],
  selectedSkillId,
  onSkillChange,
  onOpenSettingsGeneral,
  uiLocale,
  sourceLocale = "en-GB",
}) {
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState(false);

  if (!skills.length) return null;

  const resolvedUiLocale = uiLocale || i18n.language || "en-GB";

  const sorted = [...skills].sort((a, b) =>
    skillDisplayName(a as Skill, resolvedUiLocale, sourceLocale).localeCompare(
      skillDisplayName(b as Skill, resolvedUiLocale, sourceLocale),
      undefined,
      { sensitivity: "base" },
    ),
  );

  const current =
    sorted.find((s) => s.id === selectedSkillId) ?? sorted[0];
  const displayName = skillDisplayName(current as Skill, resolvedUiLocale, sourceLocale);

  return (
    <div className="flex min-w-0 max-w-full flex-wrap items-center justify-end gap-x-2 gap-y-1">
      <DropdownMenu open={open} onOpenChange={setOpen}>
        <DropdownMenuTrigger asChild>
          <button
            type="button"
            className={cn(
              "flex min-w-0 max-w-full items-center gap-2 overflow-hidden rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-start outline-none transition-colors hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-ring sm:max-w-[min(320px,calc(100vw-120px))]",
            )}
            aria-label={t("Select skill")}
            title={displayName}
            data-testid="skill-selector"
          >
            <span className="min-w-0 flex-1 truncate text-sm font-semibold leading-snug">
              {displayName}
            </span>
            <ChevronDown className="h-3 w-3 shrink-0 text-muted-foreground/50" aria-hidden />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="end"
          className="min-w-[300px] max-w-[min(560px,calc(100vw-24px))] max-h-[min(400px,70vh)] overflow-y-auto"
          data-testid="skill-selector-menu"
        >
          {sorted.map((skill) => {
            const isSelected = skill.id === (selectedSkillId || sorted[0]?.id);
            const slug = String(skill.id).replace(/\//g, "-");
            return (
              <DropdownMenuItem
                key={skill.id}
                data-testid={`skill-option-${slug}`}
                onClick={() => onSkillChange(skill.id)}
                className="flex w-full min-w-0 items-start gap-2 py-2"
              >
                {isSelected ? (
                  <Check size={14} className="mt-0.5 shrink-0 text-primary" />
                ) : (
                  <span className="mt-0.5 w-3.5 shrink-0" aria-hidden />
                )}
                <span className="min-w-0 flex-1">
                  <span className="block text-sm font-semibold leading-snug">
                    {skillDisplayName(skill as Skill, resolvedUiLocale, sourceLocale)}
                  </span>
                  {skillDisplayDescription(skill as Skill, resolvedUiLocale, sourceLocale) ? (
                    <span className="mt-0.5 block text-xs leading-snug text-muted-foreground">
                      {skillDisplayDescription(skill as Skill, resolvedUiLocale, sourceLocale)}
                    </span>
                  ) : null}
                </span>
              </DropdownMenuItem>
            );
          })}
          {onOpenSettingsGeneral ? (
            <>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onClick={() => {
                  onOpenSettingsGeneral();
                  setOpen(false);
                }}
              >
                {t("Open Settings → General")}
              </DropdownMenuItem>
            </>
          ) : null}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

SkillSelector.propTypes = {
  skills: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string,
      model_id: PropTypes.string,
      prompt_hint: PropTypes.string,
      translated_name: PropTypes.objectOf(PropTypes.string),
      translated_description: PropTypes.objectOf(PropTypes.string),
    }),
  ),
  selectedSkillId: PropTypes.string,
  onSkillChange: PropTypes.func.isRequired,
  onOpenSettingsGeneral: PropTypes.func,
  uiLocale: PropTypes.string,
  sourceLocale: PropTypes.string,
};

export default SkillSelector;
