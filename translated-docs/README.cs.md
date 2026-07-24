<p align="center">
  <img src="../images/transrewrt_banner.png" alt="Transrewrt Banner"  />
</p>

<p align="center">
  <a href="https://github.com/wsj-br/transrewrt/releases"><img src="https://img.shields.io/badge/version-1.6.2-blue" alt="Version"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-Apache%202.0-green" alt="License: Apache 2.0"></a>
  <img src="https://img.shields.io/badge/platform-Windows%20%7C%20Linux%20%7C%20Docker-lightgrey" alt="Platform">
</p>

Nástroj pro zpracování textu s umělou inteligencí: **přeložit**, **přepsat** a **transformovat** s vlastními výzvami — pomocí vlastních poskytovatelů umělé inteligence (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras, NVIDIA, Alibaba Cloud, apikey.fun, kompatibilní koncové body OpenAI a místní servery kompatibilní s OpenAI, jako je Ollama, LM Studio nebo llama.cpp). Aplikace pro desktop (Windows / Linux) nebo samo-hostovaná webová aplikace (Docker). Bez účtu Transrewrt cloud.

| | |
| --- | --- |
| **Přeložit** | Desítky jazyků, automatická detekce, glosáře, upřesnění pomocí funkce Rephrase |
| **Přepis** | Jasnost, tón, délka, pravopis a gramatika – stejný jazyk |
| **Transformace** | Vlastní výzvy AI, které vytváříte, upravujete a znovu používáte |
| **Nasazení** | Desktop Electron nebo web Docker (amd64 a arm64) |
| **Klíče** | Vaši poskytovatelé, váš hostitel – Snadné předvolby nebo seznam pokročilých modelů |

![Přeložit](../images/screenshots/cs/translate.png)

<small>**Přečtěte si v jiných jazycích:** </small>
<small id="lang-list">[English (UK)](../README.md) · [العربية](./README.ar.md) · [简体中文](./README.zh-Hans.md) · [繁體中文](./README.zh-Hant.md) · [Čeština](./README.cs.md) · [Nederlands](./README.nl.md) · [Français](./README.fr.md) · [Deutsch](./README.de.md) · [Ελληνικά](./README.el.md) · [हिन्दी](./README.hi.md) · [Magyar](./README.hu.md) · [Italiano](./README.it.md) · [日本語](./README.ja.md) · [한국어](./README.ko.md) · [فارسی](./README.fa.md) · [Polski](./README.pl.md) · [Português (Brasil)](./README.pt-BR.md) · [Română](./README.ro.md) · [Русский](./README.ru.md) · [Slovenčina](./README.sk.md) · [Español](./README.es.md) · [Svenska](./README.sv.md) · [ไทย](./README.th.md) · [Türkçe](./README.tr.md) · [Українська](./README.uk.md) · [Tiếng Việt](./README.vi.md)</small>

## Rychlý start

**Docker**

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest

OPENROUTER_API_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_API_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

Otevřete [http://localhost:5000](http://localhost:5000) a změňte výchozí heslo administrátora. Klíče poskytovatele se nastavují pomocí proměnných prostředí (nikoli webového uživatelského rozhraní).

**Windows** – Stáhněte si `Transrewrt Setup x.y.z.exe` z [Vydání](https://github.com/wsj-br/transrewrt/releases), nainstalujte a poté přidejte klíče v **Nastavení → API**.

**Linux** – Stáhněte si `.AppImage` z [Vydání](https://github.com/wsj-br/transrewrt/releases), poté:

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

Podrobnosti o platformě (Compose, SmartScreen, apt knihovny, příznaky GPU, časové pásmo): [Dokumentace rychlého startu](https://wsj-br.github.io/transrewrt/docs/quick-start/).

## Dokumentace

Kompletní dokumentace produktu (instalace, klíče API, průvodci, nastavení, řešení problémů):

**[https://wsj-br.github.io/transrewrt/docs/](https://wsj-br.github.io/transrewrt/docs/)**

- [Klíč API](https://wsj-br.github.io/transrewrt/docs/api-key/)
- [Konfigurace](https://wsj-br.github.io/transrewrt/docs/configuration/)
- [Přeložit](https://wsj-br.github.io/transrewrt/docs/translate/) · [Přepsat](https://wsj-br.github.io/transrewrt/docs/rewrite/) · [Transformovat](https://wsj-br.github.io/transrewrt/docs/transform/)
- [Běžné problémy](https://wsj-br.github.io/transrewrt/docs/common-issues/)

## Vývoj

- Nastavení, sestavení, testování, nasazení: [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)
- Přehled architektury: [dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)

## Podpora

Otevřete problém na [GitHubu](https://github.com/wsj-br/transrewrt/issues). Uveďte svou platformu (Windows / Linux / Docker) a verzi aplikace (dialog O aplikaci nebo stránka Vydání).

## Poděkování

Snadné režim předvolby návrhy v editoru předvoleb používají veřejná hodnocení data z:

- [languagebench](https://huggingface.co/spaces/fair-forward/languagebench) (CC BY-SA 4.0)
- [Artificial Analysis](https://artificialanalysis.ai/) (pro data API je vyžadována atribuce)

Licence závislostí třetích stran a oznámení o zdrojích dat jsou uvedeny v [OZNÁMENÍCH](../NOTICES).

## Licence

Copyright © 2026 Waldemar Scudeller Jr.

[Apache License 2.0](../LICENSE)

Názvy produktů a ikony patří jejich příslušným vlastníkům a slouží pouze k identifikaci. Tento software není přidružen k těmto značkám ani jimi není schválen.

<small>

> **Poznámka k překladům uživatelského rozhraní a dokumentace:** Všechny jazyky rozhraní a dokumentace kromě 
> původní angličtiny byly přeloženy pomocí modelů umělé inteligence s využitím [ai-i18n-tools](https://wsj-br.github.io/ai-i18n-tools/); 
> formulace může být nepřesná nebo obsahovat chyby.

</small>
