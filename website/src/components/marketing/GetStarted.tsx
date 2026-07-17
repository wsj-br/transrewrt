import { useState } from 'react';
import { Check, Copy, Monitor, Terminal, Download } from 'lucide-react';
import { DOCKER_IMAGE } from './data';
import { useI18n, useT } from './i18n';

const DOCKER_SNIPPET = `docker pull ${DOCKER_IMAGE}

PROVIDER_API_KEY=sk-or-your-key docker run -d \\
  -p 5000:5000 \\
  -v transrewrt-data:/app/data \\
  -e PROVIDER_API_KEY \\
  --name transrewrt-web \\
  ${DOCKER_IMAGE}`;

function CodeBlock({ code }: { code: string }) {
  const t = useT();
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard unavailable */
    }
  };
  return (
    <div className="relative">
      <button
        type="button"
        onClick={copy}
        className="absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-md border border-white/10 bg-brand-ink-900/70 px-2.5 py-1.5 text-xs font-medium text-neutral-300 transition-colors hover:border-white/20 hover:text-white"
      >
        {copied ? (
          <Check className="h-3.5 w-3.5 text-brand-green-400" />
        ) : (
          <Copy className="h-3.5 w-3.5" />
        )}
        {copied ? t('Copied') : t('Copy')}
      </button>
      <pre className="overflow-x-auto rounded-xl border border-white/10 bg-brand-ink-900/80 p-5 font-mono text-sm leading-relaxed text-neutral-300">
        <code>{code}</code>
      </pre>
    </div>
  );
}

export default function GetStarted() {
  const t = useT();
  const { links } = useI18n();

  const paths = [
    {
      icon: Monitor,
      title: t('Windows installer'),
      desc: t(
        'Download the installer from GitHub Releases and run it. Keys are configured in Settings → API and stored encrypted at rest.',
      ),
      cta: t('Download for Windows'),
      href: links.releases,
      accent: 'green' as const,
    },
    {
      icon: Terminal,
      title: t('Linux AppImage'),
      desc: t(
        'Grab the AppImage for x64 or arm64 (including Raspberry Pi–class devices) from Releases. Make it executable and run.',
      ),
      cta: t('Download for Linux'),
      href: links.releases,
      accent: 'orange' as const,
    },
    {
      icon: Download,
      title: t('Docker / self-hosted web'),
      desc: t(
        'Pull the image and run with your provider keys as env vars. Open localhost:5000 and change the default admin password before exposing.',
      ),
      cta: t('View Docker image'),
      href: links.dockerPkg,
      accent: 'green' as const,
    },
  ];

  return (
    <section id="get-started" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/3 h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-brand-orange-500/10 blur-[120px]" />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-orange-400">
            {t('Get started')}
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-balance sm:text-4xl">
            {t('Three ways to run Transrewrt')}
          </h2>
          <p className="mt-4 text-lg text-neutral-400">
            {t(
              'Pick the path that fits you — desktop app or self-hosted web. All paths are free and open source.',
            )}
          </p>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {paths.map((p) => {
            const Icon = p.icon;
            const isOrange = p.accent === 'orange';
            return (
              <div
                key={p.title}
                className="flex flex-col rounded-2xl border border-white/10 bg-brand-ink-700/40 p-6 transition-all hover:border-white/20 hover:bg-brand-ink-700/70"
              >
                <div
                  className={`inline-flex items-center justify-center rounded-lg p-2.5 ring-1 ${
                    isOrange
                      ? 'bg-brand-orange-500/10 ring-brand-orange-500/20'
                      : 'bg-brand-green-500/10 ring-brand-green-500/20'
                  }`}
                >
                  <Icon
                    className={`h-5 w-5 ${isOrange ? 'text-brand-orange-400' : 'text-brand-green-400'}`}
                  />
                </div>
                <h3 className="mt-4 text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-neutral-400">{p.desc}</p>
                <a
                  href={p.href}
                  target="_blank"
                  rel="noreferrer"
                  className={`mt-5 inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold transition-all ${
                    isOrange
                      ? 'bg-brand-orange-500 text-brand-ink-900 hover:bg-brand-orange-400'
                      : 'bg-brand-green-500 text-brand-ink-900 hover:bg-brand-green-400'
                  }`}
                >
                  {p.cta}
                </a>
              </div>
            );
          })}
        </div>

        <div className="mt-14 mx-auto max-w-3xl">
          <div className="mb-4 flex items-center gap-2">
            <Terminal className="h-5 w-5 text-brand-green-400" />
            <h3 className="text-lg font-semibold">{t('Run with Docker')}</h3>
          </div>
          <CodeBlock code={DOCKER_SNIPPET} />
          <p className="mt-4 text-sm text-neutral-500">
            {t('Then open')}{' '}
            <code className="rounded bg-white/5 px-1.5 py-0.5 font-mono text-brand-green-400">
              http://localhost:5000
            </code>{' '}
            {t('and change the default admin password before exposing the service.')}
          </p>
        </div>
      </div>
    </section>
  );
}
