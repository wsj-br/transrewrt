import { PROVIDERS } from './data';
import { useT } from './i18n';

export default function Providers() {
  const t = useT();

  return (
    <section id="providers" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-green-400">
            {t('Providers')}
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-balance sm:text-4xl">
            {t('Bring your own key to any provider')}
          </h2>
          <p className="mt-4 text-lg text-neutral-400">
            {t(
              'Transrewrt supports many AI engines under one workflow — including local models via Ollama, LM Studio, llama.cpp, or any OpenAI-compatible local server.',
            )}
          </p>
        </div>

        <div className="mt-14 flex flex-wrap justify-center gap-3">
          {PROVIDERS.map((p) => (
            <span
              key={p}
              className="rounded-full border border-white/10 bg-brand-ink-700/50 px-5 py-2.5 text-sm font-medium text-neutral-200 transition-colors hover:border-brand-green-500/40 hover:bg-brand-green-500/10 hover:text-white"
            >
              {p}
            </span>
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-neutral-500">
          {t(
            'Any OpenAI-compatible custom endpoint is also supported.  Provider names are shown for identification only; Transrewrt is not affiliated with or endorsed by any provider.',
          )}
        </p>
      </div>
    </section>
  );
}
