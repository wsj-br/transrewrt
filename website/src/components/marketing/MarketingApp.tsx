import { I18nProvider } from './i18n';
import Nav from './Nav';
import Hero from './Hero';
import Pillars from './Pillars';
import Why from './Why';
import Providers from './Providers';
import GetStarted from './GetStarted';
import SelfHost from './SelfHost';
import OpenSource from './OpenSource';
import Footer from './Footer';

export type MarketingAppProps = {
  locale: string;
  messages: Record<string, string>;
};

/** Full marketing landing page — ported from transrewrt-bolt. */
export default function MarketingApp({ locale, messages }: MarketingAppProps) {
  return (
    <I18nProvider locale={locale} messages={messages}>
      <div className="min-h-screen bg-brand-ink-900">
        <Nav />
        <main>
          <Hero />
          <Pillars />
          <Why />
          <Providers />
          <GetStarted />
          <SelfHost />
          <OpenSource />
        </main>
        <Footer />
      </div>
    </I18nProvider>
  );
}
