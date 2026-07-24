import { openExternalUrl } from "../../utils/misc/urlUtils";

const APP_VERSION = typeof __APP_VERSION__ !== "undefined" ? __APP_VERSION__ : "-";
const SITE_URL = "https://wsj-br.github.io/transrewrt/";

/** Tiny version label for the workspace action bar (bottom-right, same row as the primary CTA). */
export function WorkspaceActionBarVersionLink() {
  return (
    <div className="flex min-w-0 justify-self-end">
      <a
        href={SITE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="truncate text-[10px] leading-none text-muted-foreground/50 underline-offset-2 outline-none transition-colors hover:text-muted-foreground hover:underline focus-visible:ring-1 focus-visible:ring-ring"
        title={SITE_URL}
        aria-label={`Transrewrt v${APP_VERSION}`}
        onClick={(e) => {
          e.preventDefault();
          openExternalUrl(SITE_URL);
        }}
      >
        v{APP_VERSION}
      </a>
    </div>
  );
}
