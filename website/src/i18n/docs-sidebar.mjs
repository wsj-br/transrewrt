/**
 * Starlight docs sidebar with localized group headings.
 *
 * English labels live in `docs-sidebar-groups.json`. Per-locale copies under
 * `docs-sidebar-groups/{locale}.json` are produced by `pnpm i18n:sync`
 * (`translate-json`). Leaf items omit `label` so Starlight uses each page’s
 * translated frontmatter `title`.
 */

import { existsSync, readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { TARGET_LOCALES, toStarlightUiLang } from './locales.mjs';

const here = dirname(fileURLToPath(import.meta.url));
const sourcePath = join(here, 'docs-sidebar-groups.json');
const localeDir = join(here, 'docs-sidebar-groups');

const source = JSON.parse(readFileSync(sourcePath, 'utf8'));

/** @param {string} locale */
function loadLocaleBundle(locale) {
  const path = join(localeDir, `${locale}.json`);
  if (!existsSync(path)) return null;
  return JSON.parse(readFileSync(path, 'utf8'));
}

/** @param {keyof typeof source} key */
function translationsFor(key) {
  /** @type {Record<string, string>} */
  const out = {};
  for (const code of TARGET_LOCALES) {
    const bundle = loadLocaleBundle(code);
    const value = bundle?.[key];
    if (typeof value === 'string' && value.trim()) {
      out[toStarlightUiLang(code)] = value;
    }
  }
  return out;
}

export const docsSidebar = [
  {
    label: source.getStarted,
    translations: translationsFor('getStarted'),
    items: [
      { slug: 'docs' },
      { slug: 'docs/quick-start' },
      { slug: 'docs/api-key' },
      { slug: 'docs/configuration' },
    ],
  },
  {
    label: source.guides,
    translations: translationsFor('guides'),
    items: [
      { slug: 'docs/translate' },
      { slug: 'docs/rewrite' },
      { slug: 'docs/transform' },
      { slug: 'docs/dashboard' },
      { slug: 'docs/history' },
    ],
  },
  {
    label: source.reference,
    translations: translationsFor('reference'),
    items: [{ slug: 'docs/settings' }],
  },
  {
    label: source.troubleshooting,
    translations: translationsFor('troubleshooting'),
    items: [{ slug: 'docs/common-issues' }],
  },
];
