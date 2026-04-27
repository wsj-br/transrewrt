import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { Zap, Copy } from "lucide-react";
import PropTypes from "prop-types";
import { resolveAppearanceFontFamilyCss } from "../utils/misc/appearanceFontOptions";
import { Button } from "@/components/ui/button";

const TransformTestPanel = ({
  testInput,
  onTestInputChange,
  onTest,
  output,
  outputMeta,
  isTesting,
  onCopy,
  fontFamily,
  fontSize,
}) => {
  const { t } = useTranslation();
  const textStyle = useMemo(
    () => ({
      ...(fontFamily && { fontFamily: resolveAppearanceFontFamilyCss(fontFamily) }),
      ...(fontSize != null && fontSize !== "" && { fontSize: `${fontSize}px` }),
    }),
    [fontFamily, fontSize]
  );

  return (
    <div className="flex flex-col h-full min-h-0 gap-2">
      <div className="flex flex-[1_1_50%] min-h-0 flex-col gap-1.5">
        <label className="text-sm font-medium">{t("Test input")}</label>
        <textarea
          dir="auto"
          value={testInput}
          onChange={(e) => onTestInputChange?.(e.target.value)}
          placeholder={t("Paste text to test...")}
          aria-label={t("Test input")}
          style={textStyle}
          className="flex-1 min-h-[80px] resize-none p-2 rounded-md border border-input bg-background text-sm text-foreground placeholder:text-muted-foreground outline-none focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/50"
        />
        <Button
          size="sm"
          onClick={onTest}
          disabled={isTesting}
          className="self-start"
        >
          <Zap size={14} />
          {isTesting ? t("Testing…") : t("Test")}
        </Button>
      </div>
      <div className="flex flex-[1_1_50%] min-h-0 flex-col gap-1.5">
        <label className="text-sm font-medium">{t("Output")}</label>
        {outputMeta && <div className="text-xs text-muted-foreground">{outputMeta}</div>}
        <div
          className="flex-1 min-h-0 p-2 rounded-md border border-border bg-muted whitespace-pre-wrap break-words overflow-auto text-sm text-foreground"
          role="region"
          aria-label={t("Test output")}
          style={textStyle}
        >
          {output || "-"}
        </div>
        {output && (
          <div className="flex justify-end">
            <Button variant="ghost" size="sm" onClick={onCopy} aria-label={t("Copy output")}>
              <Copy size={13} />
              {t("Copy")}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

TransformTestPanel.propTypes = {
  testInput: PropTypes.string.isRequired,
  onTestInputChange: PropTypes.func.isRequired,
  onTest: PropTypes.func.isRequired,
  output: PropTypes.string,
  outputMeta: PropTypes.string,
  isTesting: PropTypes.bool,
  onCopy: PropTypes.func,
  fontFamily: PropTypes.string,
  fontSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default TransformTestPanel;
