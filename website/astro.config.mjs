import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import { starlightLocales } from './src/i18n/locales.mjs';
import { starlightBaseUrlsIntegration } from './src/integrations/starlight-base-urls.mjs';

const siteBase = '/transrewrt';

// https://astro.build/config
export default defineConfig({
  site: 'https://wsj-br.github.io',
  // Project Pages URL is https://wsj-br.github.io/transrewrt/ — base must match the repo name.
  base: siteBase,
  integrations: [
    starlight({
      title: 'Transrewrt Docs',
      // Starlight defaults to /favicon.svg; use the existing brand mark (same as marketing layout).
      favicon: '/logos/transrewrt_logo.svg',
      logo: {
        src: './public/logos/transrewrt_logo.svg',
        alt: 'Transrewrt',
      },
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/wsj-br/transrewrt',
        },
      ],
      defaultLocale: 'root',
      locales: starlightLocales,
      sidebar: [
        {
          label: 'Get started',
          items: [
            { label: 'Overview', slug: 'docs' },
            { label: 'Quick start', slug: 'docs/quick-start' },
            { label: 'API key', slug: 'docs/api-key' },
            { label: 'Configuration', slug: 'docs/configuration' },
          ],
        },
        {
          label: 'Guides',
          items: [
            { label: 'Translate text', slug: 'docs/translate' },
            { label: 'Rewrite text', slug: 'docs/rewrite' },
            { label: 'Transform with prompts', slug: 'docs/transform' },
            { label: 'Use the Dashboard', slug: 'docs/dashboard' },
            { label: 'Browse History', slug: 'docs/history' },
          ],
        },
        {
          label: 'Reference',
          items: [{ label: 'Settings', slug: 'docs/settings' }],
        },
        {
          label: 'Troubleshooting',
          items: [{ label: 'Common issues', slug: 'docs/common-issues' }],
        },
      ],
      customCss: ['./src/styles/starlight.css'],
    }),
    // After Starlight: inject Sätteri hast plugin for absolute /docs and /images URLs.
    starlightBaseUrlsIntegration(siteBase),
    react(),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
