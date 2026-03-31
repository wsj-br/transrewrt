import { useState, useEffect, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { makeStyles, tokens, Button, Spinner } from "@fluentui/react-components";
import PropTypes from "prop-types";

/** After each `---`, the next 4 lines are: blank, package@version, license id, first copyright/body line. */
const HEADER_LINES_AFTER_SEPARATOR = 2;

function buildThirdPartyLicenseSpans(text, headerLineClass) {
  const lines = text.split(/\r?\n/);
  const out = [];
  let key = 0;
  let i = 0;
  const plainLines = [];
  const flushPlain = () => {
    if (plainLines.length === 0) return;
    out.push(
      <span key={key++}>
        {plainLines.join("\n")}
        {"\n"}
      </span>,
    );
    plainLines.length = 0;
  };

  while (i < lines.length) {
    const line = lines[i];
    if (line === "---") {
      flushPlain();
      out.push(
        <span key={key++}>
          {line}
          {"\n"}
        </span>,
      );
      i += 1;
      for (let k = 0; k < HEADER_LINES_AFTER_SEPARATOR && i < lines.length; k += 1, i += 1) {
        out.push(
          <span key={key++} className={headerLineClass}>
            {lines[i]}
            {"\n"}
          </span>,
        );
      }
    } else {
      plainLines.push(line);
      i += 1;
    }
  }
  flushPlain();
  return out;
}

const useStyles = makeStyles({
  overlay: {
    position: "fixed",
    inset: 0,
    backgroundColor: "rgba(0,0,0,0.6)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 10000,
    padding: "16px",
    boxSizing: "border-box",
  },
  modal: {
    backgroundColor: tokens.colorNeutralBackground1,
    padding: "20px 24px",
    borderRadius: "8px",
    boxShadow: tokens.shadow28,
    width: "min(880px, 100%)",
    maxWidth: "100%",
    maxHeight: "min(90vh, 900px)",
    display: "flex",
    flexDirection: "column",
    boxSizing: "border-box",
    minHeight: 0,
    textAlign: "left",
  },
  title: {
    margin: "0 0 16px 0",
    fontSize: "18px",
    fontWeight: 600,
    flexShrink: 0,
    textAlign: "left",
  },
  scrollBody: {
    flex: 1,
    minHeight: 0,
    overflow: "auto",
    margin: 0,
    padding: "12px",
    borderRadius: "4px",
    border: `1px solid ${tokens.colorNeutralStroke2}`,
    backgroundColor: tokens.colorNeutralBackground2,
    fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
    fontSize: "11px",
    lineHeight: 1.45,
    whiteSpace: "pre-wrap",
    overflowWrap: "anywhere",
    color: tokens.colorNeutralForeground1,
    tabSize: 4,
    textAlign: "left",
  },
  headerLine: {
    color: tokens.colorPaletteBlueForeground2,
  },
  loading: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    minHeight: "120px",
  },
  error: {
    margin: 0,
    fontSize: "14px",
    color: tokens.colorPaletteRedForeground1,
    lineHeight: 1.4,
    flex: 1,
    minHeight: "80px",
    display: "flex",
    alignItems: "flex-start",
    textAlign: "left",
  },
  actions: {
    display: "flex",
    justifyContent: "flex-end",
    gap: "8px",
    marginTop: "16px",
    flexShrink: 0,
  },
});

const ThirdPartyLicensesModal = ({ open, onClose }) => {
  const styles = useStyles();
  const { t } = useTranslation();
  const [text, setText] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!open) return undefined;

    let cancelled = false;
    setLoading(true);
    setError(null);
    setText(null);

    (async () => {
      try {
        if (typeof window !== "undefined" && window.electronAPI?.readThirdPartyLicenses) {
          const r = await window.electronAPI.readThirdPartyLicenses();
          if (cancelled) return;
          if (r?.ok && typeof r.text === "string") {
            setText(r.text);
          } else {
            setError(r?.error || "not_found");
          }
        } else {
          const res = await fetch("/THIRD-PARTY-LICENSES.txt");
          if (!res.ok) throw new Error(String(res.status));
          const body = await res.text();
          if (!cancelled) setText(body);
        }
      } catch (e) {
        if (!cancelled) setError(e?.message || "fetch_failed");
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [open]);

  const licenseSpans = useMemo(() => {
    if (text == null) return null;
    return buildThirdPartyLicenseSpans(text, styles.headerLine);
  }, [text, styles.headerLine]);

  if (!open) return null;

  return (
    <div
      className={styles.overlay}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="presentation"
    >
      <div
        className={styles.modal}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="third-party-licenses-title"
      >
        <h2 id="third-party-licenses-title" className={styles.title}>
          {t("Third‑party licenses")}
        </h2>
        {loading ? (
          <div className={styles.loading}>
            <Spinner size="large" label={t("Loading…")} />
          </div>
        ) : error ? (
          <p className={styles.error}>{t("Could not load third-party licenses.")}</p>
        ) : (
          <pre className={styles.scrollBody}>{licenseSpans}</pre>
        )}
        <div className={styles.actions}>
          <Button appearance="primary" onClick={onClose}>
            {t("Close")}
          </Button>
        </div>
      </div>
    </div>
  );
};

ThirdPartyLicensesModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ThirdPartyLicensesModal;
