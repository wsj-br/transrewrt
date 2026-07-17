import { BookOpen, Download, ExternalLink } from 'lucide-react';
import { LOGO_SVG, COPYRIGHT, LICENSE, DOCKER_IMAGE } from './data';
import GitHubIcon from './GitHubIcon';
import { useI18n, useT } from './i18n';

export default function Footer() {
  const t = useT();
  const { links } = useI18n();

  return (
    <footer className="border-t border-white/10 bg-brand-ink-900">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5">
              <img src={LOGO_SVG} alt={t('Transrewrt logo')} className="h-8 w-8" />
              <span className="text-lg font-bold tracking-tight">
                <span className="text-brand-green-400">Trans</span>
                <span className="text-brand-orange-400">rewrt</span>
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-neutral-400">
              {t(
                'Open-source AI-powered text tool for translating, rewriting, and transforming text — desktop or self-hosted with Docker. Your keys, your models, your host.',
              )}
            </p>
            <p className="mt-4 font-mono text-xs text-neutral-500">{DOCKER_IMAGE}</p>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-neutral-500">
              {t('Product')}
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href={links.releases}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-neutral-300 hover:text-white"
                >
                  <Download className="h-4 w-4" /> {t('Downloads')}
                </a>
              </li>
              <li>
                <a href="#features" className="text-neutral-300 hover:text-white">
                  {t('Features')}
                </a>
              </li>
              <li>
                <a href="#get-started" className="text-neutral-300 hover:text-white">
                  {t('Get started')}
                </a>
              </li>
              <li>
                <a href="#self-host" className="text-neutral-300 hover:text-white">
                  {t('Self-host')}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-neutral-500">
              {t('Resources')}
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href={links.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-neutral-300 hover:text-white"
                >
                  <GitHubIcon className="h-4 w-4" /> {t('GitHub')}
                </a>
              </li>
              <li>
                <a
                  href={links.docs}
                  className="inline-flex items-center gap-1.5 text-neutral-300 hover:text-white"
                >
                  <BookOpen className="h-4 w-4" /> {t('Docs')}
                </a>
              </li>
              <li>
                <a
                  href={links.readme}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-neutral-300 hover:text-white"
                >
                  <ExternalLink className="h-4 w-4" /> {t('README')}
                </a>
              </li>
              <li>
                <a href={links.issues} target="_blank" rel="noreferrer" className="text-neutral-300 hover:text-white">
                  {t('Issues')}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6">
          <p className="text-xs leading-relaxed text-neutral-500">
            {COPYRIGHT}. {t('Released under the')} {LICENSE}.{' '}
            {t(
              'Transrewrt is not affiliated with, endorsed by, or sponsored by any AI provider; all product names, logos, and brands are property of their respective owners and are used for identification purposes only.',
            )}
          </p>
          <p className="mt-3 text-xs text-neutral-600">
            {t(
              'UI and documentation translations other than English are AI-assisted using',
            )}{' '}
            <a
              href="https://wsj-br.github.io/ai-i18n-tools/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-neutral-600 underline-offset-2 hover:text-neutral-400 hover:decoration-neutral-400"
            >
             ai-i18n-tools
            </a>
            . {t('The wording may be imprecise or contain errors.')}
          </p>
        </div>
      </div>
    </footer>
  );
}
