import { Star, BookOpen, FileText, ExternalLink } from 'lucide-react';
import { LOGO_SVG, VERSION, LICENSE } from './data';
import GitHubIcon from './GitHubIcon';
import { useI18n, useT } from './i18n';

export default function OpenSource() {
  const t = useT();
  const { links } = useI18n();

  return (
    <section id="open-source" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-brand-ink-700/60 via-brand-ink-800/60 to-brand-ink-900/60 p-10 sm:p-16">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-brand-green-500/15 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-brand-orange-500/15 blur-3xl" />

          <div className="relative mx-auto max-w-2xl text-center">
            <img src={LOGO_SVG} alt={t('Transrewrt logo')} className="mx-auto h-14 w-14" />
            <p className="mt-6 text-sm font-semibold uppercase tracking-widest text-brand-green-400">
              {t('Open source')}
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-balance sm:text-4xl">
              {t('Free, open, and built in the open')}
            </h2>
            <p className="mt-4 text-lg text-neutral-400">
              {t('Transrewrt is released under the')} {LICENSE}. {t('Version')} {VERSION}{' '}
              {t(
                'is the current release. Star the repo, file issues, or read the docs — contributions are welcome.',
              )}
            </p>
          </div>

          <div className="relative mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:flex-wrap sm:justify-center">
            <a
              href={links.repo}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex w-full items-center justify-center gap-2 whitespace-nowrap rounded-xl bg-brand-green-500 px-6 py-3.5 text-base font-semibold text-brand-ink-900 shadow-lg shadow-brand-green-500/25 transition-all hover:bg-brand-green-400 sm:w-auto"
            >
              <Star className="h-5 w-5 shrink-0" />
              {t('Star on GitHub')}
            </a>
            <a
              href={links.docs}
              className="inline-flex w-full items-center justify-center gap-2 whitespace-nowrap rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 text-base font-semibold text-white backdrop-blur transition-all hover:border-white/25 hover:bg-white/10 sm:w-auto"
            >
              <BookOpen className="h-5 w-5 shrink-0" />
              {t('Docs')}
            </a>
            <a
              href={links.issues}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 whitespace-nowrap rounded-xl border border-white/10 px-6 py-3.5 text-base font-medium text-neutral-300 transition-all hover:border-white/20 hover:text-white sm:w-auto"
            >
              <GitHubIcon className="h-5 w-5 shrink-0" />
              {t('File an issue')}
            </a>
          </div>

          <div className="relative mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-neutral-500">
            <a
              href={links.docs}
              className="inline-flex items-center gap-1.5 hover:text-neutral-300"
            >
              <FileText className="h-4 w-4" /> {t('Docs')}
            </a>
            <a
              href={links.readme}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-neutral-300"
            >
              <FileText className="h-4 w-4" /> {t('README')}
            </a>
            <a
              href={links.releases}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-neutral-300"
            >
              <ExternalLink className="h-4 w-4" /> {t('Releases')}
            </a>
            <span>{LICENSE}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
