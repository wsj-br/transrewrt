import { useTranslation } from "react-i18next";
import { WandSparkles, PencilLine, MessageSquarePlus, CopyPlus, FolderSync, BookOpenText } from "lucide-react";
import PropTypes from "prop-types";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

const TransformPromptSelector = ({
  prompts = [],
  selectedId,
  selectedName,
  onSelect,
  onNew,
  onEdit,
  onDuplicate,
  onOpenExportImport,
  disabled,
  editActive = false,
  showLoadSampleButton = false,
  onLoadSamplePrompts,
  loadSampleLoading = false,
}) => {
  const { t } = useTranslation();
  const selectedKey = selectedId != null ? String(selectedId) : selectedName || "";
  const options = prompts.map((p) => ({ id: String(p.id), name: p.name }));
  const matchedOption = options.find((o) => o.id === selectedKey || o.name === selectedKey);
  const selectedOptionValue = matchedOption ? matchedOption.id : (selectedKey || "");
  const selectedPrompt = prompts.find((p) => String(p.id) === selectedKey || p.name === selectedKey);

  const iconBtnCls = "h-8 w-8 p-0 text-muted-foreground hover:text-foreground hover:bg-accent";

  return (
    <div className="flex items-center gap-2 mb-2">
      <label className="flex items-center gap-1.5 min-w-[60px] text-sm font-medium" title={t("Select a custom prompt to run")}>
        <WandSparkles size={17} className="text-violet-400" />
        {t("Prompt")}
      </label>
      <div className="flex-1 min-w-[200px]" title={t("Choose which custom prompt to use")} data-testid="prompt-selector">
        <Select
          value={selectedOptionValue || ""}
          onValueChange={(id) => {
            const p = prompts.find((x) => String(x.id) === id);
            onSelect?.(p?.id ?? id, p?.name ?? id);
          }}
          disabled={disabled}
        >
          <SelectTrigger className="w-full" aria-label={t("Select prompt")}>
            <SelectValue placeholder={prompts.length === 0 ? t("(no prompts, click + to create)") : t("Select a prompt")} />
          </SelectTrigger>
          <SelectContent>
            {options.map((opt) => {
              const slug = String(opt.name || opt.id).toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
              return (
                <SelectItem key={opt.id} value={opt.id} data-testid={slug ? `prompt-option-${slug}` : undefined}>
                  {opt.name}
                </SelectItem>
              );
            })}
          </SelectContent>
        </Select>
      </div>
      {selectedPrompt && (
        <Button
          variant="ghost"
          size="icon-sm"
          onClick={() => onEdit?.(selectedPrompt)}
          className={cn(iconBtnCls, editActive && "text-blue-400")}
          aria-label={t("Edit prompt")}
          title={t("Edit prompt")}
          disabled={disabled}
          data-testid="edit-prompt-button"
        >
          <PencilLine size={15} />
        </Button>
      )}
      <Button
        variant="ghost"
        size="icon-sm"
        onClick={onNew}
        className={iconBtnCls}
        aria-label={t("New prompt")}
        title={t("New prompt")}
        disabled={disabled}
        data-testid="new-prompt-button"
      >
        <MessageSquarePlus size={15} />
      </Button>
      {selectedPrompt && (
        <Button
          variant="ghost"
          size="icon-sm"
          onClick={() => onDuplicate?.(selectedPrompt)}
          className={iconBtnCls}
          aria-label={t("Duplicate prompt")}
          title={t("Duplicate prompt")}
          disabled={disabled}
        >
          <CopyPlus size={15} />
        </Button>
      )}
      <Button
        variant="ghost"
        size="icon-sm"
        onClick={onOpenExportImport}
        className={cn(iconBtnCls, "text-slate-500")}
        aria-label={t("Export/Import prompts")}
        title={t("Export/Import prompts (opens Settings > Transform)")}
        disabled={disabled}
      >
        <FolderSync size={15} />
      </Button>
      {showLoadSampleButton && onLoadSamplePrompts && (
        <Button
          variant="outline"
          size="sm"
          className="ms-6 shrink-0"
          onClick={onLoadSamplePrompts}
          disabled={disabled || loadSampleLoading}
        >
          {!loadSampleLoading && <BookOpenText size={15} />}
          {loadSampleLoading ? t("Loading…") : t("Load sample prompts")}
        </Button>
      )}
    </div>
  );
};

TransformPromptSelector.propTypes = {
  prompts: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), name: PropTypes.string })),
  selectedId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  selectedName: PropTypes.string,
  onSelect: PropTypes.func,
  onNew: PropTypes.func.isRequired,
  onEdit: PropTypes.func,
  onDuplicate: PropTypes.func,
  onOpenExportImport: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  editActive: PropTypes.bool,
  showLoadSampleButton: PropTypes.bool,
  onLoadSamplePrompts: PropTypes.func,
  loadSampleLoading: PropTypes.bool,
  loadSampleButtonClassName: PropTypes.string,
};

export default TransformPromptSelector;
