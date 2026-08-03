import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import { docsSidebar } from './src/i18n/docs-sidebar.mjs';
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
      // Leaf items omit `label` (translated frontmatter `title`). Group
      // headings come from `docs-sidebar-groups.json` + locale copies via sync.
      sidebar: docsSidebar,
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
