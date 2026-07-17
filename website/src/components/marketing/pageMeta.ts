import type { TranslateFn } from '../../i18n/t';

/** Document title and social meta for the marketing homepage. */
export function marketingPageMeta(t: TranslateFn) {
  const title = t('Transrewrt — Translate, rewrite, and transform text with AI');
  const description = t(
    'Transrewrt is an open-source AI-powered text tool for translating between languages, rewriting in different styles, and transforming text with custom prompts. Desktop app or self-hosted web app — your keys, your models, your host.',
  );
  const ogDescription = t(
    'Open-source AI text tool for translation, rewriting, and custom transforms. Bring your own keys and models. Desktop or self-hosted with Docker.',
  );
  return { title, description, ogDescription };
}
