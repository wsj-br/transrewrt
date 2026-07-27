<p align="center">
  <img src="../images/transrewrt_banner.png" alt="Transrewrt Banner"  />
</p>

<h1 align="center">Transrewrt</h1>

<p align="center">
  <a href="https://github.com/wsj-br/transrewrt/releases"><img src="https://img.shields.io/badge/version-1.6.2-blue" alt="Version"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-Apache%202.0-green" alt="License: Apache 2.0"></a>
  <img src="https://img.shields.io/badge/platform-Windows%20%7C%20Linux%20%7C%20Docker-lightgrey" alt="Platform">
</p>

Textový nástroj poháňaný AI na **prekladanie**, **prepisovanie** a **transformáciu** s vlastnými výzvami. Používajte vlastných poskytovateľov AI (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras, NVIDIA, Alibaba Cloud, apikey.fun, koncové body kompatibilné s OpenAI a lokálne servery ako Ollama, LM Studio alebo llama.cpp). Spustite ako desktopovú aplikáciu (Windows / Linux) alebo samoobslužnú webovú aplikáciu (Docker). Žiadny cloudový účet Transrewrt.

## Funkcie

| Schopnosť | Popis |
| --- | --- |
| **Preložiť** | Desiatky jazykov, automatická detekcia, glosáre, spresnenie pomocou funkcie Preformulovať |
| **Prepísať** | Jasnosť, tón, dĺžka, pravopis a gramatika – rovnaký jazyk |
| **Transformovať** | Vlastné výzvy AI, ktoré vytvoríte, upravíte a znova použijete |
| **Nasadiť** | Desktop Electron alebo web Docker (amd64 a arm64) |
| **Kľúče** | Vaši poskytovatelia, váš hostiteľ – Jednoduché predvoľby alebo Pokročilý zoznam modelov |

![Preložiť](../images/screenshots/sk/translate.png)

<small>**Prečítajte si v iných jazykoch:** </small>
<small id="lang-list">[English (UK)](../README.md) · [العربية](./README.ar.md) · [简体中文](./README.zh-Hans.md) · [繁體中文](./README.zh-Hant.md) · [Čeština](./README.cs.md) · [Nederlands](./README.nl.md) · [Français](./README.fr.md) · [Deutsch](./README.de.md) · [Ελληνικά](./README.el.md) · [हिन्दी](./README.hi.md) · [Magyar](./README.hu.md) · [Italiano](./README.it.md) · [日本語](./README.ja.md) · [한국어](./README.ko.md) · [فارسی](./README.fa.md) · [Polski](./README.pl.md) · [Português (Brasil)](./README.pt-BR.md) · [Română](./README.ro.md) · [Русский](./README.ru.md) · [Slovenčina](./README.sk.md) · [Español](./README.es.md) · [Svenska](./README.sv.md) · [ไทย](./README.th.md) · [Türkçe](./README.tr.md) · [Українська](./README.uk.md) · [Tiếng Việt](./README.vi.md)</small>

## Rýchly štart

**Docker**

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest

docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e PROVIDER_API_KEY=your-key \
  --name transrewrt \
  ghcr.io/wsj-br/transrewrt:latest
```

Nahraďte `PROVIDER_API_KEY` premennou vášho poskytovateľa (napríklad `OPENROUTER_API_KEY`, `OPENAI_API_KEY`, `GROQ_API_KEY`). Otvorte [http://localhost:5000](http://localhost:5000) a zmeňte predvolené heslo administrátora. Kľúče sa nastavujú prostredníctvom premenných prostredia (nie cez webové používateľské rozhranie).

**Windows** – Stiahnite si `Transrewrt Setup x.y.z.exe` z [Vydaní](https://github.com/wsj-br/transrewrt/releases), nainštalujte a potom pridajte kľúče v časti **Nastavenia → API**.

**Linux** – Stiahnite si `.AppImage` z [Vydaní](https://github.com/wsj-br/transrewrt/releases), potom:

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

Podrobnosti o platforme (Compose, SmartScreen, apt libs, GPU flags, časové pásmo): [Dokumentácia rýchleho štartu](https://wsj-br.github.io/transrewrt/docs/quick-start/).

## Dokumentácia

Kompletná dokumentácia produktu (inštalácia, kľúče API, príručky, nastavenia, riešenie problémov):

**[https://wsj-br.github.io/transrewrt/docs/](https://wsj-br.github.io/transrewrt/docs/)**

- [Kľúč API](https://wsj-br.github.io/transrewrt/docs/api-key/)
- [Konfigurácia](https://wsj-br.github.io/transrewrt/docs/configuration/)
- [Preložiť](https://wsj-br.github.io/transrewrt/docs/translate/) · [Prepísať](https://wsj-br.github.io/transrewrt/docs/rewrite/) · [Transformovať](https://wsj-br.github.io/transrewrt/docs/transform/)
- [Bežné problémy](https://wsj-br.github.io/transrewrt/docs/common-issues/)

## Vývoj

- Nastavenie, zostavenie, testovanie, nasadenie: [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)
- Prehľad architektúry: [dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)

## Podpora

Otvorte problém na [GitHub](https://github.com/wsj-br/transrewrt/issues). Uveďte svoju platformu (Windows / Linux / Docker) a verziu aplikácie (dialógové okno O aplikácii alebo stránka Vydania).

## Poďakovania

Návrhy predvolieb v režime „Jednoduché“ v editore predvolieb používajú verejné hodnotiace údaje z:

- [languagebench](https://huggingface.co/spaces/fair-forward/languagebench) (CC BY-SA 4.0)
- [Artificial Analysis](https://artificialanalysis.ai/) (vyžaduje sa uvedenie zdroja pre údaje API)

Licencie závislostí tretích strán a tieto oznámenia o zdrojoch údajov sú uvedené v [NOTICES](../NOTICES).

## Licencia

Autorské práva © 2026 Waldemar Scudeller Jr.

[Apache License 2.0](../LICENSE)

Názvy produktov a ikony patria ich príslušným vlastníkom a používajú sa len na identifikačné účely. Tento softvér nie je pridružený ani schválený týmito značkami.

<small>

> **Poznámka k prekladom používateľského rozhrania a dokumentácie:** Všetky jazyky rozhrania a dokumentácie okrem angličtiny (UK) boli preložené pomocou AI s použitím [ai-i18n-tools](https://wsj-br.github.io/ai-i18n-tools/); formulácia môže byť nepresná alebo môže obsahovať chyby.

</small>
