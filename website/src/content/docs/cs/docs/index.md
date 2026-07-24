---
title: Přehled
description: Co je Transrewrt a jak najít dokumentaci k instalaci, průvodcům a nastavení.
---



**Transrewrt** je open-source textový nástroj poháněný umělou inteligencí pro:

- **Překlad** — mezi desítkami jazyků, s automatickou detekcí zdroje a glosáři
- **Přepis** — oprava gramatiky, zlepšení srozumitelnosti, změna tónu nebo délky
- **Transformace** — spouštění vlastních AI výzev na libovolném textu

Podporuje mnoho poskytovatelů AI (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras, NVIDIA, Alibaba Cloud, apikey.fun, koncové body kompatibilní s OpenAI a lokální servery kompatibilní s OpenAI, jako jsou Ollama, LM Studio nebo llama.cpp). Spusťte jej jako **desktopovou aplikaci** (Windows / Linux) nebo **samoobslužnou webovou aplikaci** (Docker).

Vaše klíče, vaše modely, váš hostitel – neexistuje žádný cloudový účet Transrewrt.

## Jak je okno uspořádáno

![Pracovní prostor pro překlad](/images/screenshots/cs/translate.png)

- **Postranní panel** – hlavní navigace: Přeložit, Přepsat, Transformovat, Řídicí panel, Historie, Nastavení (a přihlášený uživatel na webu).
- **Panel nástrojů** – název stránky, volič **předvolby** (Snadné) nebo **modelu** (Pokročilé), **Jazyk rozhraní** (ikona glóbu; nemění Přeložit z/do) a Nápověda (**?**) odkazující na tuto dokumentaci. Nabídka předvoleb/modelů může také **Přepnout do režimu Snadné/Pokročilé** (nad Otevřít nastavení).
- **Pracovní plocha** – vstupní a výstupní panely s počty, časováním, TPS a volitelnými náklady. Panel akcí zobrazuje malý odkaz na **verzi** aplikace (vpravo dole) na web GitHub Pages.

Ve výchozím nastavení aplikace běží v režimu **Snadné**: vyberte **předvolbu** a **poskytovatele** v Nastavení. Přepněte na **Pokročilé** v [Nastavení → Obecná nastavení](/docs/settings/#general-settings) pro úplný seznam modelů, nebo použijte přepínač v nabídce předvoleb/modelů na panelu nástrojů.

## Začínáme

1. [Rychlý start](/docs/quick-start/) — instalace desktopové verze nebo spuštění s Dockerem
2. [API klíč](/docs/api-key/) — připojení bezplatného klíče OpenRouter nebo jiného poskytovatele
3. [Konfigurace](/docs/configuration/) — proměnné prostředí, cesty ke konfiguraci, webová autentizace

## Průvodci

- [Překlad textu](/docs/translate/)
- [Přepis textu](/docs/rewrite/)
- [Transformace pomocí výzev](/docs/transform/)
- [Použití panelu](/docs/dashboard/)
- [Procházení historie](/docs/history/)

## Reference a nápověda

- [Nastavení](/docs/settings/)
- [Časté problémy](/docs/common-issues/)

[Download releases](https://github.com/wsj-br/transrewrt/releases) · [GitHub repository](https://github.com/wsj-br/transrewrt)
