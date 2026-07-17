import { useEffect, useId, useMemo, useRef, useState } from 'react';
import { Check, Globe } from 'lucide-react';
import uiLanguages from '../../i18n/ui-languages.json';
import { homePathForLocale, resolveUiLanguage, sortLanguagesByEnglishName } from '../../i18n/locale';
import { useI18n } from './i18n';

/**
 * Marketing language picker — two-column dropdown (same layout as the app
 * header selector). Navigates to `/` or `/{locale}/`.
 */
export default function LanguagePicker() {
  const { locale, t } = useI18n();
  const current = resolveUiLanguage(locale).code;
  const languages = useMemo(() => sortLanguagesByEnglishName(uiLanguages), []);
  const currentLabel =
    languages.find((loc) => loc.code === current)?.label ?? current;
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const listId = useId();

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', onPointerDown);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('mousedown', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [open]);

  return (
    <div ref={rootRef} className="relative inline-flex">
      <button
        type="button"
        className="inline-flex h-8 items-center gap-1.5 rounded-lg border border-white/10 bg-brand-ink-800/80 px-2.5 text-xs font-medium text-neutral-200 outline-none hover:border-white/20 hover:bg-white/5 focus:border-brand-green-500/50"
        aria-label={t('Select language')}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listId}
        onClick={() => setOpen((value) => !value)}
      >
        <Globe className="h-3.5 w-3.5 shrink-0 text-neutral-400" aria-hidden />
        <span className="max-w-[7.5rem] truncate sm:max-w-[9rem]">{currentLabel}</span>
      </button>

      {open && (
        <div
          id={listId}
          role="listbox"
          aria-label={t('Select language')}
          className="absolute end-0 top-[calc(100%+0.35rem)] z-50 w-[min(28rem,calc(100vw-2rem))] min-w-80 rounded-xl border border-white/10 bg-brand-ink-800 p-2 shadow-2xl shadow-black/50"
        >
          <div className="grid grid-cols-2 gap-0.5">
            {languages.map((loc) => {
              const selected = loc.code === current;
              return (
                <button
                  key={loc.code}
                  type="button"
                  role="option"
                  aria-selected={selected}
                  className={`flex items-center gap-1.5 rounded-lg px-2.5 py-2 text-left text-xs transition-colors hover:bg-white/10 ${
                    selected ? 'bg-white/10 font-semibold text-white' : 'text-neutral-300'
                  }`}
                  onClick={() => {
                    setOpen(false);
                    if (loc.code === current) return;
                    window.location.href = homePathForLocale(loc.code);
                  }}
                >
                  {selected ? (
                    <Check className="h-3.5 w-3.5 shrink-0 text-brand-green-400" aria-hidden />
                  ) : (
                    <span className="w-3.5 shrink-0" aria-hidden />
                  )}
                  <span className="truncate">{loc.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
