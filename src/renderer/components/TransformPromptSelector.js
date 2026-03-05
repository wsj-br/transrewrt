import React from "react";
import { makeStyles, tokens, Dropdown, Option, Button } from "@fluentui/react-components";
import { Sparkles, SquarePen, Plus, Copy } from "lucide-react";

const useStyles = makeStyles({
  root: {
    display: "flex",
    alignItems: "center",
    gap: tokens.spacingHorizontalS,
    marginBottom: tokens.spacingVerticalS,
  },
  label: {
    display: "flex",
    alignItems: "center",
    gap: "6px",
    minWidth: "60px",
    fontSize: "14px",
    fontWeight: 500,
  },
  selectContainer: {
    flex: 1,
    minWidth: 0,
  },
  select: {
    width: "100%",
    "& .fui-Dropdown__trigger": {
      borderRadius: "4px !important",
      border: `1px solid ${tokens.colorNeutralStroke1} !important`,
      backgroundColor: tokens.colorNeutralBackground1,
    },
  },
  iconButton: {
    minWidth: "32px",
    padding: "4px",
  },
});

const TransformPromptSelector = ({
  prompts = [],
  selectedId,
  selectedName,
  onSelect,
  onNew,
  onEdit,
  onDuplicate,
  disabled,
}) => {
  const styles = useStyles();
  const selectedKey = selectedId != null ? String(selectedId) : selectedName || "";
  const options = prompts.map((p) => ({ id: String(p.id), name: p.name }));
  const matchedOption = options.find((o) => o.id === selectedKey || o.name === selectedKey);
  const displayValue = matchedOption?.name ?? selectedName ?? "";
  const selectedOptionValue = matchedOption ? matchedOption.id : (selectedKey || null);
  const selectedPrompt = prompts.find((p) => String(p.id) === selectedKey || p.name === selectedKey);

  return (
    <div className={styles.root}>
      <label className={styles.label} title="Select a custom prompt to run">
        <Sparkles size={18} color={tokens.colorPaletteLavenderBorderActive} />
        Prompt
      </label>
      <div className={styles.selectContainer} title="Choose which custom prompt to use">
        <Dropdown
          appearance="outline"
          value={displayValue}
          placeholder={prompts.length === 0 ? "(no prompts, click + to create)" : "Select a prompt"}
          selectedOptions={selectedOptionValue ? [selectedOptionValue] : []}
          onOptionSelect={(e, data) => {
            const id = data.optionValue;
            const p = prompts.find((x) => String(x.id) === id);
            onSelect?.(p?.id ?? id, p?.name ?? id);
          }}
          className={styles.select}
          aria-label="Select prompt"
          disabled={disabled}
        >
          {options.map((opt) => (
            <Option key={opt.id} value={opt.id} text={opt.name}>
              {opt.name}
            </Option>
          ))}
        </Dropdown>
      </div>
      <Button
        appearance="subtle"
        icon={<Plus size={16} />}
        onClick={onNew}
        className={styles.iconButton}
        aria-label="New prompt"
        title="New prompt"
        disabled={disabled}
      />
      {selectedPrompt && (
        <>
          <Button
            appearance="subtle"
            icon={<SquarePen size={16} />}
            onClick={() => onEdit?.(selectedPrompt)}
            className={styles.iconButton}
            aria-label="Edit prompt"
            title="Edit prompt"
            disabled={disabled}
          />
          <Button
            appearance="subtle"
            icon={<Copy size={16} />}
            onClick={() => onDuplicate?.(selectedPrompt)}
            className={styles.iconButton}
            aria-label="Duplicate prompt"
            title="Duplicate prompt"
            disabled={disabled}
          />
        </>
      )}
    </div>
  );
};

export default TransformPromptSelector;
