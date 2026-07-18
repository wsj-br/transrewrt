/**
 * Starlight does not rewrite absolute markdown URLs for Astro `base`.
 * ai-i18n-tools also leaves `/docs/…` and `/images/…` hrefs unchanged for
 * `docsOutput.style: "astro-starlight"` (only screenshot locale folders are
 * adjusted via regexAdjustments — see its Astro / link-rewriting docs).
 *
 * Astro 7 defaults to the Sätteri markdown processor, so this hooks
 * `hastPlugins` (not deprecated `markdown.rehypePlugins`).
 *
 * Rewrites:
 * - Prefix site-root absolute URLs with `base` (e.g. `/transrewrt`)
 * - For `/docs/…` links in locale content trees, insert the locale segment
 */

import { fileURLToPath } from 'node:url';

/**
 * English sources live at `content/docs/docs/…`.
 * Locale copies live at `content/docs/<locale>/docs/…`.
 * @param {string | undefined} filePath
 */
function localeFromContentPath(filePath) {
  if (!filePath) return '';
  const normalized = filePath.replace(/\\/g, '/');
  const match = normalized.match(/\/content\/docs\/([^/]+)\/docs\//);
  if (!match) return '';
  const segment = match[1];
  return segment === 'docs' ? '' : segment;
}

/**
 * @param {string} url
 * @param {string} base
 * @param {string} locale
 */
function rewriteUrl(url, base, locale) {
  if (!url || typeof url !== 'string') return url;
  if (/^(?:[a-z][a-z0-9+.-]*:|\/\/|#)/i.test(url)) return url;
  if (!url.startsWith('/')) return url;
  if (url === base || url.startsWith(`${base}/`)) return url;

  if (url === '/docs' || url.startsWith('/docs/') || url.startsWith('/docs#')) {
    const localePrefix = locale ? `/${locale}` : '';
    const path = url === '/docs' ? '/docs/' : url;
    return `${base}${localePrefix}${path}`;
  }

  // Public assets and other site-root paths (images, logos, …)
  return `${base}${url}`;
}

/**
 * @param {string} rawBase
 */
export function createStarlightBaseUrlsHastPlugin(rawBase) {
  const base = rawBase === '/' ? '' : String(rawBase).replace(/\/$/, '');

  return {
    name: 'transrewrt-starlight-base-urls',
    element: {
      filter: ['a', 'img'],
      /**
       * @param {{ tagName?: string, properties?: Record<string, unknown> }} node
       * @param {{ fileURL?: URL, setProperty: (node: unknown, key: string, value: unknown) => void }} ctx
       */
      visit(node, ctx) {
        if (!base) return;

        let filePath = '';
        if (ctx.fileURL) {
          try {
            filePath = fileURLToPath(ctx.fileURL);
          } catch {
            filePath = '';
          }
        }
        const locale = localeFromContentPath(filePath);

        if (node.tagName === 'a' && typeof node.properties?.href === 'string') {
          const next = rewriteUrl(node.properties.href, base, locale);
          if (next !== node.properties.href) ctx.setProperty(node, 'href', next);
        }
        if (node.tagName === 'img' && typeof node.properties?.src === 'string') {
          const next = rewriteUrl(node.properties.src, base, locale);
          if (next !== node.properties.src) ctx.setProperty(node, 'src', next);
        }
      },
    },
  };
}

/**
 * @param {string} base
 */
export function starlightBaseUrlsIntegration(base) {
  return {
    name: 'transrewrt-starlight-base-urls',
    hooks: {
      'astro:config:setup'({ config, logger }) {
        const opts = config.markdown?.processor?.options;
        if (!opts) {
          logger.warn(
            'transrewrt-starlight-base-urls: markdown.processor.options missing; skipped'
          );
          return;
        }
        if (Array.isArray(opts.hastPlugins)) {
          opts.hastPlugins.push(() => createStarlightBaseUrlsHastPlugin(base));
          return;
        }
        logger.warn(
          'transrewrt-starlight-base-urls: processor has no hastPlugins array; skipped'
        );
      },
    },
  };
}
