import { KeyRound, Sparkles, BookText, History, MonitorSmartphone, ShieldCheck } from 'lucide-react';
import { SHOT, shotImgFallback } from './data';
import { useI18n, useT } from './i18n';

export default function Why() {
  const t = useT();
  const { locale } = useI18n();

  const reasons = [
    {
      icon: KeyRound,
      title: t('Your keys, your models'),
      desc: t(
        'Bring your own API keys for any provider — or run local models via Ollama, LM Studio, llama.cpp, or another OpenAI-compatible server. Desktop stores keys encrypted at rest; Docker keeps provider keys in environment variables, never typed into the browser.',
      ),
    },
    {
      icon: Sparkles,
      title: t('Easy presets, Advanced control'),
      desc: t(
        'Easy mode offers curated presets — Free, Standard, Advanced, Technical — mapped per provider. Switch to Advanced for the full model list with namespaced IDs. No need to memorise model names unless you want to.',
      ),
    },
    {
      icon: BookText,
      title: t('Glossary for consistency'),
      desc: t(
        'Per-language-pair glossaries keep brands, titles, and product names consistent across translations. Import and export glossaries as CSV or XLSX from Settings.',
      ),
    },
    {
      icon: History,
      title: t('History & cost visibility'),
      desc: t(
        'Full execution history with filtering and export — disable it for privacy mode. The dashboard shows usage and cost across Summary, By Model, and All Calls views.',
      ),
    },
    {
      icon: MonitorSmartphone,
      title: t('Desktop & self-hosted web'),
      desc: t(
        'Install on Windows or Linux (including Linux arm64), or run the Docker web app with multi-user support, admin roles, and a persistent data volume on /app/data.',
      ),
    },
    {
      icon: ShieldCheck,
      title: t('Open source, no lock-in'),
      desc: t(
        'Apache 2.0 licensed and free to self-host. You pay only your own AI providers when using paid models — there is no Transrewrt cloud account and no pricing tier.',
      ),
    },
  ];

  return (
    <section id="why" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 -z-10 bg-brand-ink-800/50" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-orange-400">
            {t('Why Transrewrt')}
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-balance sm:text-4xl">
            {t('Built for control, not lock-in')}
          </h2>
          <p className="mt-4 text-lg text-neutral-400">
            {t(
              'Transrewrt is not a cloud SaaS. It is an open-source tool that runs on your machine or your own server — with the providers, keys, and models you choose.',
            )}
          </p>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r) => {
            const Icon = r.icon;
            return (
              <div
                key={r.title}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-brand-ink-700/40 p-6 transition-all hover:border-white/20 hover:bg-brand-ink-700/70"
              >
                <div className="inline-flex items-center justify-center rounded-lg bg-brand-green-500/10 p-2.5 ring-1 ring-brand-green-500/20 transition-colors group-hover:bg-brand-green-500/20">
                  <Icon className="h-5 w-5 text-brand-green-400" />
                </div>
                <h3 className="mt-4 text-lg font-semibold">{r.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-400">{r.desc}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-20">
          <div className="mx-auto max-w-2xl text-center">
            <h3 className="text-2xl font-bold tracking-tight">
              {t('History, cost, and dashboard')}
            </h3>
            <p className="mt-3 text-neutral-400">
              {t(
                'Track usage and spend across providers, with exportable history you can disable for full privacy.',
              )}
            </p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            <div className="overflow-hidden rounded-xl border border-white/10 bg-brand-ink-800 shadow-xl shadow-black/40">
              <img
                src={SHOT('dashboard-summary', locale)}
                alt={t(
                  'Transrewrt dashboard summary view showing usage and cost across models',
                )}
                className="w-full"
                loading="lazy"
                onError={(e) => shotImgFallback(e, 'dashboard-summary')}
              />
            </div>
            <div className="overflow-hidden rounded-xl border border-white/10 bg-brand-ink-800 shadow-xl shadow-black/40">
              <img
                src={SHOT('history', locale)}
                alt={t(
                  'Transrewrt history view listing past executions with input, output, and filters',
                )}
                className="w-full"
                loading="lazy"
                onError={(e) => shotImgFallback(e, 'history')}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
