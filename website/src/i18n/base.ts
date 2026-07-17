/**
 * Join a site-root path onto Astro `base` (e.g. `/` locally, `/transrewrt/` on GitHub Pages).
 * `path` should start with `/` (e.g. `/docs/`, `/logos/foo.svg`).
 */
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL || '/';
  const root = base.endsWith('/') ? base : `${base}/`;
  const normalized = path.startsWith('/') ? path.slice(1) : path;
  return `${root}${normalized}`;
}
