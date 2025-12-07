import React from "react";

const TextPanel = ({
  title,
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
          <div className="panel-title">{title}</div>
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
          placeholder={placeholder}
          readOnly={readOnly}
          aria-label={title || placeholder || "Text panel"}
          style={textareaStyle}
        ></textarea>
        <div className="controls">
          <div className="stats">{footerDisplay}</div>
          <div className="buttons">
            {onClear && (
              <button className="btn" onClick={onClear}>
                Clear
              </button>
            )}
            {onCopy && (
              <button className="btn primary" onClick={onCopy}>
                Copy
              </button>
            )}
            {onPaste && (
              <button className="btn" onClick={onPaste}>
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
