import { useEffect, useState } from 'react';
import { BookOpen, Menu, X } from 'lucide-react';
import { LOGO_SVG } from './data';
import LanguagePicker from './LanguagePicker';
import GitHubIcon from './GitHubIcon';
import { useI18n, useT } from './i18n';

export default function Nav() {
  const t = useT();
  const { links } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const nav = [
    { label: t('Features'), href: '#features' },
    { label: t('Why Transrewrt'), href: '#why' },
    { label: t('Providers'), href: '#providers' },
    { label: t('Get started'), href: '#get-started' },
    { label: t('Self-host'), href: '#self-host' },
    { label: t('Docs'), href: links.docs },
    { label: t('Open source'), href: '#open-source' },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-white/10 bg-brand-ink-900/80 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#top" className="flex items-center gap-2.5">
          <img src={LOGO_SVG} alt={t('Transrewrt logo')} className="h-8 w-8" />
          <span className="text-lg font-bold tracking-tight">
            <span className="text-brand-green-400">Trans</span>
            <span className="text-brand-orange-400">rewrt</span>
          </span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-neutral-300 transition-colors hover:bg-white/5 hover:text-white"
            >
              {n.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <LanguagePicker />
          <a
            href={links.repo}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-3 py-2 text-sm font-medium text-neutral-200 transition-colors hover:border-white/20 hover:bg-white/5"
          >
            <GitHubIcon className="h-4 w-4" />
            <span>{t('Star')}</span>
          </a>
          <a
            href={links.releases}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-brand-green-500 px-3.5 py-2 text-sm font-semibold text-brand-ink-900 shadow-lg shadow-brand-green-500/20 transition-all hover:bg-brand-green-400 hover:shadow-brand-green-500/40"
          >
            {t('Download')}
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center justify-center rounded-lg p-2 text-neutral-200 md:hidden"
          aria-label={t('Toggle menu')}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-brand-ink-900/95 backdrop-blur-xl md:hidden">
          <div className="space-y-1 px-4 py-4">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-2.5 text-sm font-medium text-neutral-300 hover:bg-white/5 hover:text-white"
              >
                {n.label}
              </a>
            ))}
            <div className="px-3 py-2">
              <LanguagePicker />
            </div>
            <div className="flex gap-2 pt-2">
              <a
                href={links.docs}
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg border border-white/10 px-3 py-2.5 text-sm font-medium"
              >
                <BookOpen className="h-4 w-4" /> {t('Docs')}
              </a>
              <a
                href={links.releases}
                target="_blank"
                rel="noreferrer"
                className="inline-flex flex-1 items-center justify-center rounded-lg bg-brand-green-500 px-3 py-2.5 text-sm font-semibold text-brand-ink-900"
              >
                {t('Download')}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
