import { ArrowRight, BookOpen, Download, Terminal } from 'lucide-react';
import { LOGO_SVG, SHOT, shotImgFallback } from './data';
import GitHubIcon from './GitHubIcon';
import { useI18n, useT } from './i18n';

export default function Hero() {
  const t = useT();
  const { links, locale } = useI18n();

  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid mask-fade-b opacity-60" />
        <div className="absolute left-1/2 top-0 -z-10 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-brand-green-500/15 blur-[120px]" />
        <div className="absolute right-1/4 top-40 -z-10 h-[400px] w-[400px] rounded-full bg-brand-orange-500/10 blur-[100px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-8 flex justify-center animate-fade-in">
            <div className="relative">
              <div className="absolute inset-0 animate-pulse-ring rounded-2xl bg-brand-green-500/30" />
              <img
                src={LOGO_SVG}
                alt={t('Transrewrt logo — two overlapping speech bubbles')}
                className="relative h-16 w-16 animate-float-slow"
              />
            </div>
          </div>

          <h1 className="animate-fade-up text-4xl font-extrabold leading-[1.1] tracking-tight text-balance sm:text-5xl md:text-6xl">
            {t('Translate, rewrite, and transform text')}
            <br className="hidden sm:block" /> {t('with')}{' '}
            <span className="bg-gradient-to-r from-brand-green-400 to-brand-green-500 bg-clip-text text-transparent">
              {t('AI')}
            </span>{' '}
            {t('— your keys, your models, your host.')}
          </h1>

          <p
            className="mx-auto mt-6 max-w-2xl animate-fade-up text-lg leading-relaxed text-neutral-400 text-balance"
            style={{ animationDelay: '80ms' }}
          >
            {t(
              'An open-source AI-powered text tool for translating between languages, rewriting in different styles, and transforming text with custom prompts — using multiple AI providers. Runs as a desktop app or a Docker web app.',
            )}
          </p>

          <div
            className="mt-10 flex animate-fade-up flex-col items-center justify-center gap-3 sm:flex-row"
            style={{ animationDelay: '160ms' }}
          >
            <a
              href={links.releases}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand-green-500 px-6 py-3.5 text-base font-semibold text-brand-ink-900 shadow-lg shadow-brand-green-500/25 transition-all hover:bg-brand-green-400 hover:shadow-brand-green-500/40 sm:w-auto"
            >
              <Download className="h-5 w-5" />
              {t('Download')}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href={links.docsQuickStart}
              className="group inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 text-base font-semibold text-white backdrop-blur transition-all hover:border-white/25 hover:bg-white/10 sm:w-auto"
            >
              <Terminal className="h-5 w-5 text-brand-orange-400" />
              {t('Get started')}
            </a>
            <a
              href={links.docs}
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 px-6 py-3.5 text-base font-medium text-neutral-300 transition-all hover:border-white/20 hover:text-white sm:w-auto"
            >
              <BookOpen className="h-5 w-5" />
              {t('Docs')}
            </a>
            <a
              href={links.repo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 px-6 py-3.5 text-base font-medium text-neutral-300 transition-all hover:border-white/20 hover:text-white sm:w-auto"
            >
              <GitHubIcon className="h-5 w-5" />
              {t('GitHub')}
            </a>
          </div>

          <div
            className="mt-6 flex animate-fade-up flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-neutral-500"
            style={{ animationDelay: '240ms' }}
          >
            <span>{t('Apache 2.0 licensed')}</span>
            <span className="h-1 w-1 rounded-full bg-neutral-600" />
            <span>{t('Windows · Linux · Docker')}</span>
            <span className="h-1 w-1 rounded-full bg-neutral-600" />
            <span>{t('Bring your own keys & models')}</span>
          </div>
        </div>

        <div className="mt-16 animate-fade-up" style={{ animationDelay: '320ms' }}>
          <div className="relative mx-auto max-w-5xl">
            <div className="absolute -inset-2 -z-10 rounded-2xl bg-gradient-to-r from-brand-green-500/20 via-transparent to-brand-orange-500/20 blur-2xl" />
            <div className="overflow-hidden rounded-xl border border-white/10 bg-brand-ink-800 shadow-2xl shadow-black/50">
              <div className="flex items-center gap-2 border-b border-white/10 bg-brand-ink-700/50 px-4 py-3">
                <div className="flex gap-1.5">
                  <div className="h-3 w-3 rounded-full bg-red-500/70" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500/70" />
                  <div className="h-3 w-3 rounded-full bg-brand-green-500/70" />
                </div>
                <span className="ml-2 font-mono text-xs text-neutral-500">
                  {t('transrewrt — translate')}
                </span>
              </div>
              <img
                src={SHOT('translate', locale)}
                alt={t(
                  'Transrewrt Translate screen showing source text, language selector, and AI-translated output with glossary support',
                )}
                className="w-full"
                loading="eager"
                onError={(e) => shotImgFallback(e, 'translate')}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
