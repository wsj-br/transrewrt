import { Languages, PenLine, Wand2 } from 'lucide-react';
import { SHOT, shotImgFallback } from './data';
import { useI18n, useT } from './i18n';

export default function Pillars() {
  const t = useT();
  const { locale } = useI18n();

  const pillars = [
    {
      id: 'translate',
      icon: Languages,
      title: t('Translate'),
      accent: 'green' as const,
      desc: t(
        'Translate between dozens of languages with automatic source detection. Keep terminology consistent with per-language-pair glossaries, then refine with Rephrase and word alternatives.',
      ),
      points: [
        t('Automatic source language detection'),
        t('Glossary for consistent terminology'),
        t('Rephrase up to five versions'),
        t('Word alternatives on selection'),
        t('Auto-execute on paste, auto-copy result'),
      ],
      shot: 'translate',
      alt: t(
        'Transrewrt Translate screen: source text panel, target language selector, and translated output with glossary terms highlighted',
      ),
    },
    {
      id: 'rewrite',
      icon: PenLine,
      title: t('Rewrite'),
      accent: 'orange' as const,
      desc: t(
        'Rewrite in the same language for clarity, tone, length, or grammar. Get several alternative versions in one run, with optional Show changes diffs for spelling and grammar fixes.',
      ),
      points: [
        t('Check Spelling & Grammar with Show changes'),
        t('Improve Clarity'),
        t('Alternative versions in one run'),
        t('Make Formal / Informal'),
        t('Shorten, Expand, Make Technical'),
      ],
      shot: 'rewrite',
      alt: t(
        'Transrewrt Rewrite screen showing mode selector and rewritten output with alternative versions',
      ),
    },
    {
      id: 'transform',
      icon: Wand2,
      title: t('Transform'),
      accent: 'green' as const,
      desc: t(
        'Run your own AI instructions on any text. Create, edit, and test custom prompts with an optional target language — summarise, polish email, extract key points, reformat, or any workflow you build.',
      ),
      points: [
        t('User-defined AI instructions'),
        t('Create, edit, manage, and test prompts'),
        t('Optional target language per prompt'),
        t('Summarise, polish, extract, reformat'),
        t('Any custom workflow you can prompt'),
      ],
      shot: 'transform',
      alt: t('Transrewrt Transform screen with custom prompt editor applied to input text'),
    },
  ];

  return (
    <section id="features" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-green-400">
            {t('Three pillars')}
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-balance sm:text-4xl">
            {t('One tool for three text workflows')}
          </h2>
          <p className="mt-4 text-lg text-neutral-400">
            {t(
              'Translate between languages, rewrite in the same language, and transform text with your own custom prompts — all in a single, coherent workspace.',
            )}
          </p>
        </div>

        <div className="mt-16 space-y-24">
          {pillars.map((p, i) => {
            const Icon = p.icon;
            const isOrange = p.accent === 'orange';
            const accentText = isOrange ? 'text-brand-orange-400' : 'text-brand-green-400';
            const accentBg = isOrange ? 'bg-brand-orange-500/10' : 'bg-brand-green-500/10';
            const accentRing = isOrange ? 'ring-brand-orange-500/20' : 'ring-brand-green-500/20';
            const dot = isOrange ? 'bg-brand-orange-400' : 'bg-brand-green-400';
            const reversed = i % 2 === 1;
            return (
              <div key={p.id} className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
                <div className={reversed ? 'lg:order-2' : ''}>
                  <div
                    className={`inline-flex items-center justify-center rounded-xl ${accentBg} p-3 ring-1 ${accentRing}`}
                  >
                    <Icon className={`h-7 w-7 ${accentText}`} />
                  </div>
                  <h3 className="mt-5 text-2xl font-bold tracking-tight sm:text-3xl">{p.title}</h3>
                  <p className="mt-3 text-lg leading-relaxed text-neutral-400">{p.desc}</p>
                  <ul className="mt-6 space-y-2.5">
                    {p.points.map((pt) => (
                      <li key={pt} className="flex items-start gap-3 text-sm text-neutral-300">
                        <span className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${dot}`} />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={reversed ? 'lg:order-1' : ''}>
                  <div className="overflow-hidden rounded-xl border border-white/10 bg-brand-ink-800 shadow-xl shadow-black/40">
                    <img
                      src={SHOT(p.shot, locale)}
                      alt={p.alt}
                      className="w-full"
                      loading="lazy"
                      onError={(e) => shotImgFallback(e, p.shot)}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
