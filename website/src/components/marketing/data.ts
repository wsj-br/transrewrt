import { withBase } from '../../i18n/base';
import { homePathForLocale, resolveUiLanguage, toRouteLocale } from '../../i18n/locale';

export const LOGO_SVG = withBase('/logos/transrewrt_logo.svg');
export const LOGO_PNG = withBase('/logos/transrewrt_logo.png');
export const LOGO_512 = withBase('/logos/transrewrt_logo_512x512.png');
export const WORDMARK_PNG = withBase('/logos/transrewrt_name.png');
export const BANNER_PNG = withBase('/logos/transrewrt_banner.png');
export const BANNER_SVG = withBase('/logos/transrewrt_banner.svg');

const SOURCE_SHOT_LOCALE = 'en-GB';

/**
 * Per-locale screenshot URL (Pattern B: `images/screenshots/<locale>/<name>.png`).
 * Assets are served from the repo `images/screenshots/` tree via public symlink.
 */
export const SHOT = (name: string, locale = SOURCE_SHOT_LOCALE) =>
  withBase(`/images/screenshots/${locale || SOURCE_SHOT_LOCALE}/${name}.png`);

/** `onError` handler: fall back to the en-GB screenshot if a locale file is missing. */
export function shotImgFallback(
  event: { currentTarget: HTMLImageElement },
  name: string,
): void {
  const img = event.currentTarget;
  const fallback = SHOT(name, SOURCE_SHOT_LOCALE);
  if (img.dataset.shotFallback === '1' || img.src.endsWith(fallback)) return;
  img.dataset.shotFallback = '1';
  img.src = fallback;
}

export type SiteLinks = {
  repo: string;
  releases: string;
  issues: string;
  readme: string;
  dockerPkg: string;
  docs: string;
  docsQuickStart: string;
  home: string;
};

const EXTERNAL = {
  repo: 'https://github.com/wsj-br/transrewrt',
  releases: 'https://github.com/wsj-br/transrewrt/releases',
  issues: 'https://github.com/wsj-br/transrewrt/issues',
  readme: 'https://github.com/wsj-br/transrewrt/blob/main/README.md',
  dockerPkg: 'https://github.com/wsj-br/transrewrt/pkgs/container/transrewrt',
} as const;

/** Locale-aware site links (docs paths follow Starlight prefixes). */
export function getLinks(locale = 'en-GB'): SiteLinks {
  const row = resolveUiLanguage(locale);
  const docsBase = row.isSourceLocale ? '/docs' : `/${toRouteLocale(row.code)}/docs`;
  return {
    ...EXTERNAL,
    docs: withBase(`${docsBase}/`),
    docsQuickStart: withBase(`${docsBase}/quick-start/`),
    home: homePathForLocale(row.code),
  };
}

export const DOCKER_IMAGE = 'ghcr.io/wsj-br/transrewrt:latest';
/** Synced from root package.json by `pnpm update-version`. */
export const VERSION = '1.6.1';
export const LICENSE = 'Apache License 2.0';
export const COPYRIGHT = '© 2026 Waldemar Scudeller Jr.';

export const PROVIDERS = [
  'OpenRouter',
  'OpenAI',
  'Anthropic',
  'Google Gemini',
  'DeepSeek',
  'Groq',
  'Mistral',
  'xAI',
  'Cerebras',
  'NVIDIA',
  'Alibaba Cloud',
  'apikey.fun',
  'Local LLM',
];
