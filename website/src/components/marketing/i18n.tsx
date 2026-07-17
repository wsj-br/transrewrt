import { createContext, useContext, type ReactNode } from 'react';
import { makeT, type TranslateFn } from '../../i18n/t';
import { getLinks, type SiteLinks } from './data';

type I18nValue = {
  locale: string;
  t: TranslateFn;
  links: SiteLinks;
};

const I18nContext = createContext<I18nValue | null>(null);

export function I18nProvider({
  locale,
  messages,
  children,
}: {
  locale: string;
  messages: Record<string, string>;
  children: ReactNode;
}) {
  const value: I18nValue = {
    locale,
    t: makeT(messages),
    links: getLinks(locale),
  };
  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n(): I18nValue {
  const ctx = useContext(I18nContext);
  if (!ctx) {
    throw new Error('useI18n must be used within I18nProvider');
  }
  return ctx;
}

export function useT(): TranslateFn {
  return useI18n().t;
}
