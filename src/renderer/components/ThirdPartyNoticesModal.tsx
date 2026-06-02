import { useState, useEffect, useMemo } from "react";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getBasePath } from "@/utils/misc/urlUtils";

/** After each `---`, the next 4 lines are: blank, package@version, license id, first copyright/body line. */
const HEADER_LINES_AFTER_SEPARATOR = 2;

function buildThirdPartyNoticeSpans(text) {
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
          <span key={key++} className="text-blue-500 dark:text-blue-400">
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

const ThirdPartyNoticesModal = ({ open, onClose }) => {
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
        if (typeof window !== "undefined" && window.electronAPI?.readThirdPartyNotices) {
          const r = (await window.electronAPI.readThirdPartyNotices()) as {
            ok?: boolean;
            text?: string;
            error?: string;
          };
          if (cancelled) return;
          if (r?.ok && typeof r.text === "string") {
            setText(r.text);
          } else {
            setError(r?.error || "not_found");
          }
        } else {
          // Same base path as webApiClient (urlUtils.getBasePath): relative "NOTICES"
          // against document.baseURI breaks when the app is served under a path prefix
          // without a trailing slash (resolves to origin /NOTICES instead of prefix/NOTICES).
          let pathPrefix = getBasePath();
          if (pathPrefix === "/index.html") pathPrefix = "";
          const noticesUrl = `${window.location.origin}${pathPrefix}/NOTICES`;
          const res = await fetch(noticesUrl, { cache: "no-store" });
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

  const noticeSpans = useMemo(() => {
    if (text == null) return null;
    return buildThirdPartyNoticeSpans(text);
  }, [text]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/60 p-4"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="presentation"
    >
      <div
        className="bg-card border border-border rounded-lg shadow-2xl flex flex-col w-full max-w-3xl max-h-[90vh] min-h-0 text-start"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="third-party-notices-title"
      >
        <div className="px-6 pt-5 pb-0 shrink-0">
          <h2 id="third-party-notices-title" className="text-lg font-semibold mb-4">
            {t("Third‑party notices")}
          </h2>
        </div>
        <div className="flex-1 min-h-0 overflow-auto px-6">
          {loading ? (
            <div className="flex items-center justify-center min-h-[120px] gap-2 text-muted-foreground">
              <Loader2 className="h-5 w-5 animate-spin" />
              <span className="text-sm">{t("Loading…")}</span>
            </div>
          ) : error ? (
            <p className="text-sm text-destructive py-4">
              {t("Could not load third-party notices.")}
            </p>
          ) : (
            <pre className="rounded border border-border bg-muted p-3 font-mono text-[11px] leading-relaxed whitespace-pre-wrap break-all text-foreground mb-4">
              {noticeSpans}
            </pre>
          )}
        </div>
        <div className="flex justify-end gap-2 px-6 py-4 shrink-0">
          <Button onClick={onClose}>{t("Close")}</Button>
        </div>
      </div>
    </div>
  );
};

ThirdPartyNoticesModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ThirdPartyNoticesModal;
