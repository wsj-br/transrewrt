import { useState, useMemo } from "react";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";
import { Trash2, Copy, Clipboard, FileText, FileCheck } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { workspacePanelFooterLayoutClassName } from "./workspace/workspaceLayoutClasses";
import { computeRewriteDiff } from "../utils/misc/rewriteDiff";
import { resolveAppearanceFontFamilyCss } from "../utils/misc/appearanceFontOptions";

/** Footer stats / model line — below `text-xs` (12px); wraps in narrow columns (controls stay `whitespace-nowrap`). */
const footerMetaTextClass =
  "text-[11px] leading-snug text-muted-foreground";

const TextPanel = ({
  title,
  icon,
  text,
  onTextChange,
  placeholder,
  readOnly,
  stats,
  headerMeta,
  footerStats,
  onClear,
  onCopy,
  onPaste,
  onPasteEvent,
  fontFamily,
  fontSize,
  textColor,
  footerAlign = "right",
  showDiff,
  inputTextForDiff,
  outputIsModelResult,
  onShowDiffChange,
  footerMinimal = false,
  outputTint = false,
  hideFooter = false,
}) => {
  const { t } = useTranslation();
  const [isFocused, setIsFocused] = useState(false);
  const headerDisplay = headerMeta ?? stats;
  const footerDisplay = footerStats ?? stats;

  const textareaStyle = useMemo(() => {
    const resolved = fontFamily ? resolveAppearanceFontFamilyCss(fontFamily) : undefined;
    const outputTintColor =
      outputTint && readOnly && !textColor ? { color: "var(--mode-output-text)" } : {};
    return {
      ...(resolved && { fontFamily: resolved }),
      ...(fontSize && { fontSize: `${fontSize}px` }),
      ...(textColor ? { color: textColor } : outputTintColor),
    };
  }, [fontFamily, fontSize, textColor, outputTint, readOnly]);

  const diffSegments = useMemo(() => {
    if (!showDiff || inputTextForDiff == null || text == null) return null;
    if (!outputIsModelResult) return null;
    const inputStr = typeof inputTextForDiff === "string" ? inputTextForDiff : "";
    const outputStr = typeof text === "string" ? text : "";
    if (!inputStr.trim() || !outputStr.trim()) return null;
    return computeRewriteDiff(inputStr, outputStr);
  }, [showDiff, outputIsModelResult, inputTextForDiff, text]);

  const showDiffView =
    showDiff && outputIsModelResult && Array.isArray(diffSegments) && diffSegments.length > 0;

  const copyMinimalFooter =
    onCopy ??
    (footerMinimal && readOnly
      ? () => void navigator.clipboard.writeText(text == null ? "" : String(text))
      : null);

  const defaultIcon =
    icon ??
    (title === "Input" || title === t("Input") ? <FileText className="h-4 w-4" /> :
     title === "Output" || title === t("Output") ? <FileCheck className="h-4 w-4" /> : null);

  return (
    <Card
      className={cn(
        "flex h-full min-h-0 flex-col overflow-hidden transition-all duration-200",
        "dark:bg-card/75 dark:backdrop-blur-xl dark:border-white/10",
        outputTint && "output-tint",
        isFocused && "text-panel-focus",
      )}
    >
      {title && (
        <CardHeader className="shrink-0 px-4 py-3">
          <div className="flex items-center gap-2 min-w-0">
            {defaultIcon && (
              <span className="text-muted-foreground shrink-0">{defaultIcon}</span>
            )}
            <CardTitle className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              {title}
            </CardTitle>
            {headerDisplay && (
              <span
                className="ms-auto text-xs text-muted-foreground truncate"
                title={typeof headerDisplay === "string" ? headerDisplay : undefined}
              >
                {headerDisplay}
              </span>
            )}
          </div>
        </CardHeader>
      )}

      <CardContent className="flex flex-1 min-h-0 p-0">
        {showDiffView ? (
          <div
            className="flex-1 w-full overflow-auto p-3 text-sm leading-relaxed whitespace-pre-wrap diff-blueprint-bg"
            style={{
              fontFamily: fontFamily ? resolveAppearanceFontFamilyCss(fontFamily) : undefined,
              fontSize: fontSize ? `${fontSize}px` : undefined,
            }}
            aria-label={title || t("Text panel")}
          >
            {diffSegments.map((seg) => (
              <span
                key={seg.key}
                className={
                  seg.type === "same"
                    ? "text-foreground"
                    : seg.type === "removed"
                      ? "text-muted-foreground line-through"
                      : "text-blue-400"
                }
              >
                {seg.text}
              </span>
            ))}
          </div>
        ) : (
          <textarea
            dir="auto"
            value={text}
            onChange={(e) => onTextChange(e.target.value)}
            onPaste={(e) => {
              const pastedText = e.clipboardData.getData("text");
              if (pastedText && onPasteEvent) onPasteEvent(pastedText);
            }}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder={placeholder}
            readOnly={readOnly}
            spellCheck={false}
            aria-label={title || placeholder || t("Text panel")}
            className="flex-1 w-full resize-none bg-transparent border-none outline-none px-4 py-3 text-sm leading-relaxed text-foreground placeholder:text-muted-foreground"
            style={textareaStyle}
          />
        )}
      </CardContent>

      {/* Footer */}
      {!hideFooter && footerMinimal && footerDisplay ? (
        <CardFooter
          className={cn(
            workspacePanelFooterLayoutClassName,
            "gap-2 justify-between",
          )}
        >
          <div className={cn(footerMetaTextClass, "flex min-w-0 flex-1 flex-col gap-0.5 break-words")}>
            {footerDisplay}
          </div>
          {copyMinimalFooter && (
            <Button variant="ghost" size="sm" onClick={copyMinimalFooter} title={t("Copy")}>
              <Copy className="h-3.5 w-3.5" />
            </Button>
          )}
        </CardFooter>
      ) : !hideFooter && !footerMinimal ? (
        <CardFooter
          className={cn(
            "gap-2",
            workspacePanelFooterLayoutClassName,
            footerAlign === "left" ? "justify-start" : "justify-between",
          )}
        >
          {footerAlign === "left" ? (
            <>
              {footerDisplay && (
                <div className={cn(footerMetaTextClass, "flex min-w-0 flex-1 flex-col gap-0.5 break-words")}>
                  {footerDisplay}
                </div>
              )}
              <div className="flex shrink-0 items-center gap-2 ms-auto">
                {onShowDiffChange && (
                  <div className="flex shrink-0 items-center gap-1.5">
                    <Switch
                      id="show-diff"
                      checked={!!showDiff}
                      onCheckedChange={onShowDiffChange}
                      title={showDiff ? t("Don't show the changes") : t("Show changes between input and output")}
                    />
                    <Label
                      htmlFor="show-diff"
                      className={cn(footerMetaTextClass, "cursor-pointer shrink-0 whitespace-nowrap")}
                    >
                      {t("Show changes")}
                    </Label>
                  </div>
                )}
                {onCopy && (
                  <Button variant="ghost" size="sm" onClick={onCopy} title={t("Copy")}>
                    <Copy className="h-3.5 w-3.5" />
                  </Button>
                )}
              </div>
            </>
          ) : (
            <>
              <div className="flex items-center gap-1">
                {onClear && (
                  <Button variant="ghost" size="sm" onClick={onClear} title={t("Clear (Esc)")}>
                    <Trash2 className="h-3.5 w-3.5" />
                  </Button>
                )}
                {onPaste && (
                  <Button variant="ghost" size="sm" onClick={onPaste} title={t("Paste")}>
                    <Clipboard className="h-3.5 w-3.5" />
                  </Button>
                )}
              </div>
              <div className="flex shrink-0 items-center gap-2 ms-auto">
                {footerDisplay && (
                  <div
                    className={cn(
                      footerMetaTextClass,
                      "hidden min-w-0 flex-1 flex-col gap-0.5 break-words sm:flex",
                    )}
                  >
                    {footerDisplay}
                  </div>
                )}
                {onCopy && (
                  <Button variant="ghost" size="sm" onClick={onCopy} title={t("Copy")}>
                    <Copy className="h-3.5 w-3.5" />
                  </Button>
                )}
              </div>
            </>
          )}
        </CardFooter>
      ) : null}
    </Card>
  );
};

TextPanel.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.node,
  text: PropTypes.string,
  onTextChange: PropTypes.func,
  placeholder: PropTypes.string,
  readOnly: PropTypes.bool,
  stats: PropTypes.node,
  headerMeta: PropTypes.node,
  footerStats: PropTypes.node,
  onClear: PropTypes.func,
  onCopy: PropTypes.func,
  onPaste: PropTypes.func,
  onPasteEvent: PropTypes.func,
  fontFamily: PropTypes.string,
  fontSize: PropTypes.number,
  textColor: PropTypes.string,
  footerAlign: PropTypes.string,
  showDiff: PropTypes.bool,
  inputTextForDiff: PropTypes.string,
  outputIsModelResult: PropTypes.bool,
  onShowDiffChange: PropTypes.func,
  footerMinimal: PropTypes.bool,
  outputTint: PropTypes.bool,
  hideFooter: PropTypes.bool,
};

export default TextPanel;
