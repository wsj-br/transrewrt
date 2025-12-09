import React from "react";
import { X, Clipboard, ClipboardPaste } from "lucide-react";

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
}) => {
  const headerDisplay = headerMeta ?? stats;
  const footerDisplay = footerStats ?? stats;

  // Build inline styles for the textarea
  const textareaStyle = {
    fontFamily: fontFamily || undefined,
    fontSize: fontSize ? `${fontSize}px` : undefined,
    color: textColor || undefined,
  };

  return (
    <>
      {title && (
        <div
          className="panel-header-row"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "8px",
          }}
        >
          <div className="panel-title" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            {icon && <span style={{ display: 'flex', alignItems: 'center' }}>{icon}</span>}
            {title}
          </div>
          {headerDisplay && (
            <div
              className="panel-meta"
              style={{
                color: "var(--text-disabled)",
                fontSize: "12px",
                textAlign: "right",
                flex: "1",
                whiteSpace: "nowrap",
              }}
            >
              {headerDisplay}
            </div>
          )}
        </div>
      )}
      <div className="panel">
        <textarea
          className="text-area"
          value={text}
          onChange={(e) => onTextChange(e.target.value)}
          onPaste={(e) => {
            // Get the pasted text from clipboard
            const pastedText = e.clipboardData.getData('text');
            if (pastedText && onPasteEvent) {
              // Call onPasteEvent immediately to set the flag before onChange fires
              // This ensures the flag is set before React processes the state update
              onPasteEvent(pastedText);
            }
          }}
          placeholder={placeholder}
          readOnly={readOnly}
          aria-label={title || placeholder || "Text panel"}
          style={textareaStyle}
        ></textarea>
        <div className="controls">
          <div className="stats">{footerDisplay}</div>
          <div className="buttons">
            {onClear && (
              <button className="btn" onClick={onClear} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <X size={14} />
                Clear
              </button>
            )}
            {onCopy && (
              <button className="btn primary" onClick={onCopy} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Clipboard size={14} />
                Copy
              </button>
            )}
            {onPaste && (
              <button className="btn" onClick={onPaste} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <ClipboardPaste size={14} />
                Paste
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default TextPanel;
