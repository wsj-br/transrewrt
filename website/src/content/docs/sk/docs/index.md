---
title: Prehľad
description: Čo je Transrewrt a ako nájsť inštaláciu, príručky a dokumentáciu nastavení.
---



**Transrewrt** je open-source nástroj na prácu s textom poháňaný AI, určený na:

- **Preklad** — medzi desiatkami jazykov, s automatickou detekciou zdroja a glosármi
- **Prepísanie** — oprava gramatiky, zlepšenie zrozumiteľnosti, zmena tónu alebo dĺžky
- **Transformácia** — spustenie vlastných AI výziev na akomkoľvek texte

Podporuje mnoho poskytovateľov AI (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras, NVIDIA, Alibaba Cloud, apikey.fun, koncové body kompatibilné s OpenAI a lokálne servery kompatibilné s OpenAI, ako sú Ollama, LM Studio alebo llama.cpp). Spustite ho ako **desktopovú aplikáciu** (Windows / Linux) alebo **webovú aplikáciu Docker**.

Vaše kľúče, vaše modely, váš hostiteľ – neexistuje žiadny cloudový účet Transrewrt.

## Ako je usporiadané okno

![Pracovný priestor prekladu](/images/screenshots/sk/translate.png)

- **Bočný panel** — hlavná navigácia: Preložiť, Prepísať, Transformovať, Dashboard, História, Nastavenia (a prihlásený používateľ na webe).
- **Panel nástrojov** — názov stránky, volič **predvoľby** (Jednoduché) alebo **modelu** (Pokročilé), **Jazyk rozhrania** (ikona glóbusu; nemení Preložiť z/do) a Pomocník (**?**) odkazujúci na túto dokumentáciu. Ponuka predvolieb/modelov môže tiež **Prepnúť do režimu Jednoduché/Pokročilé** (nad Otvoriť nastavenia).
- **Pracovná oblasť** — vstupné a výstupné panely s počtami, časovaním, TPS a voliteľnými nákladmi. Panel akcií zobrazuje malý odkaz na **verziu** aplikácie (vpravo dole) na stránku GitHub Pages.

Predvolene aplikácia beží v režime **Jednoduché**: vyberte **predvoľbu** a **poskytovateľa** v Nastaveniach. Prepnite na **Pokročilé** v časti [Nastavenia → Všeobecné nastavenia](/docs/settings/#general-settings) pre úplný zoznam modelov, alebo použite prepínač v menu predvoľby/modelu na paneli nástrojov.

## Začíname

1. [Rýchly štart](/docs/quick-start/) — inštalácia desktopovej verzie alebo spustenie s Dockerom
2. [API kľúč](/docs/api-key/) — pripojenie bezplatného kľúča OpenRouter alebo iného poskytovateľa
3. [Konfigurácia](/docs/configuration/) — premenné prostredia, cesty ku konfigurácii, webová autentifikácia

## Príručky

- [Preklad textu](/docs/translate/)
- [Prepísanie textu](/docs/rewrite/)
- [Transformácia pomocou výziev](/docs/transform/)
- [Používanie Dashboardu](/docs/dashboard/)
- [Prehliadanie histórie](/docs/history/)

## Referencie a pomoc

- [Nastavenia](/docs/settings/)
- [Časté problémy](/docs/common-issues/)

[Download releases](https://github.com/wsj-br/transrewrt/releases) · [GitHub repository](https://github.com/wsj-br/transrewrt)
