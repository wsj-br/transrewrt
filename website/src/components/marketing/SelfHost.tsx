import { Users, ShieldCheck, Database, Lock } from 'lucide-react';
import { SHOT, shotImgFallback } from './data';
import { useI18n, useT } from './i18n';

export default function SelfHost() {
  const t = useT();
  const { locale } = useI18n();

  const points = [
    {
      icon: Users,
      title: t('Multi-user with admin roles'),
      desc: t(
        'The web mode supports multiple users and admin roles, so a team can share one deployment without handing out root.',
      ),
    },
    {
      icon: Lock,
      title: t('Keys in environment variables'),
      desc: t(
        'Provider API keys are set via environment variables — never typed into the browser UI — so they stay on the server.',
      ),
    },
    {
      icon: Database,
      title: t('Persistent data volume'),
      desc: t(
        'Persist state and history on a volume mounted at /app/data. Back it up, migrate it, or snapshot it like any other volume.',
      ),
    },
    {
      icon: ShieldCheck,
      title: t('Privacy-friendly history'),
      desc: t(
        'History can be disabled entirely for privacy mode. When enabled, it is filterable and exportable per user.',
      ),
    },
  ];

  return (
    <section id="self-host" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 -z-10 bg-brand-ink-800/50" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-green-400">
              {t('For teams & self-hosters')}
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-balance sm:text-4xl">
              {t('A web UI you run yourself')}
            </h2>
            <p className="mt-4 text-lg text-neutral-400">
              {t(
                'The Docker image turns Transrewrt into a multi-user web app with admin controls and server-side key management — ideal for teams who want one shared deployment without a cloud lock-in.',
              )}
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {points.map((p) => {
                const Icon = p.icon;
                return (
                  <div
                    key={p.title}
                    className="rounded-xl border border-white/10 bg-brand-ink-700/40 p-5"
                  >
                    <Icon className="h-5 w-5 text-brand-orange-400" />
                    <h3 className="mt-3 text-sm font-semibold">{p.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-neutral-400">{p.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="space-y-5">
            <div className="overflow-hidden rounded-xl border border-white/10 bg-brand-ink-800 shadow-xl shadow-black/40">
              <img
                src={SHOT('settings-general', locale)}
                alt={t(
                  'Transrewrt settings screen showing general preferences, font and workspace options',
                )}
                className="w-full"
                loading="lazy"
                onError={(e) => shotImgFallback(e, 'settings-general')}
              />
            </div>
            <div className="flex justify-center overflow-hidden rounded-xl border border-white/10 bg-brand-ink-800 shadow-xl shadow-black/40">
              <img
                src={SHOT('sidebar', locale)}
                alt={t(
                  'Transrewrt sidebar navigation showing Translate, Rewrite, Transform, History, Dashboard, and Settings',
                )}
                className="h-auto w-auto max-h-[640px] max-w-full object-contain"
                loading="lazy"
                onError={(e) => shotImgFallback(e, 'sidebar')}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
