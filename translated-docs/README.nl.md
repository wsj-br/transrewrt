<p align="center">
  <img src="../images/transrewrt_banner.png" alt="Transrewrt Banner"  />
</p>

<p align="center">
  <a href="https://github.com/wsj-br/transrewrt/releases"><img src="https://img.shields.io/badge/version-1.6.2-blue" alt="Version"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-Apache%202.0-green" alt="License: Apache 2.0"></a>
  <img src="https://img.shields.io/badge/platform-Windows%20%7C%20Linux%20%7C%20Docker-lightgrey" alt="Platform">
</p>

AI-aangedreven teksttool: **vertalen**, **herschrijven** en **transformeren** met aangepaste prompts — met behulp van uw eigen AI-providers (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras, NVIDIA, Alibaba Cloud, apikey.fun, OpenAI-compatibele endpoints en lokale OpenAI-compatibele servers zoals Ollama, LM Studio of llama.cpp). Desktop-app (Windows / Linux) of zelf-gehoste web-app (Docker). Geen Transrewrt cloudaccount.

| | |
| --- | --- |
| **Vertalen** | Tientallen talen, automatische detectie, woordenlijsten, verfijnen met Herschrijven |
| **Herschrijven** | Duidelijkheid, toon, lengte, spelling & grammatica — dezelfde taal |
| **Transformeren** | Aangepaste AI-prompts die u aanmaakt, bewerkt en hergebruikt |
| **Implementeren** | Electron desktop of Docker web (amd64 & arm64) |
| **Sleutels** | Uw providers, uw host — Eenvoudige voorinstellingen of Geavanceerde modellijst |

![Vertalen](../images/screenshots/nl/translate.png)

<small>**Lees in andere talen:** </small>
<small id="lang-list">[English (UK)](../README.md) · [العربية](./README.ar.md) · [简体中文](./README.zh-Hans.md) · [繁體中文](./README.zh-Hant.md) · [Čeština](./README.cs.md) · [Nederlands](./README.nl.md) · [Français](./README.fr.md) · [Deutsch](./README.de.md) · [Ελληνικά](./README.el.md) · [हिन्दी](./README.hi.md) · [Magyar](./README.hu.md) · [Italiano](./README.it.md) · [日本語](./README.ja.md) · [한국어](./README.ko.md) · [فارسی](./README.fa.md) · [Polski](./README.pl.md) · [Português (Brasil)](./README.pt-BR.md) · [Română](./README.ro.md) · [Русский](./README.ru.md) · [Slovenčina](./README.sk.md) · [Español](./README.es.md) · [Svenska](./README.sv.md) · [ไทย](./README.th.md) · [Türkçe](./README.tr.md) · [Українська](./README.uk.md) · [Tiếng Việt](./README.vi.md)</small>

## Snelle start

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

Open [http://localhost:5000](http://localhost:5000) en wijzig het standaard beheerderswachtwoord. Providersleutels worden ingesteld via omgevingsvariabelen (niet de web-UI).

**Windows** — Download `Transrewrt Setup x.y.z.exe` van [Releases](https://github.com/wsj-br/transrewrt/releases), installeer, en voeg vervolgens sleutels toe in **Instellingen → API**.

**Linux** — Download de `.AppImage` van [Releases](https://github.com/wsj-br/transrewrt/releases), en vervolgens:

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

Platformdetails (Compose, SmartScreen, apt libs, GPU flags, tijdzone): [Snelle start documentatie](https://wsj-br.github.io/transrewrt/docs/quick-start/).

## Documentatie

Volledige productdocumentatie (installatie, API-sleutels, handleidingen, instellingen, probleemoplossing):

**[https://wsj-br.github.io/transrewrt/docs/](https://wsj-br.github.io/transrewrt/docs/)**

- [API-sleutel](https://wsj-br.github.io/transrewrt/docs/api-key/)
- [Configuratie](https://wsj-br.github.io/transrewrt/docs/configuration/)
- [Vertalen](https://wsj-br.github.io/transrewrt/docs/translate/) · [Herschrijven](https://wsj-br.github.io/transrewrt/docs/rewrite/) · [Transformeren](https://wsj-br.github.io/transrewrt/docs/transform/)
- [Veelvoorkomende problemen](https://wsj-br.github.io/transrewrt/docs/common-issues/)

## Ontwikkeling

- Installatie, build, test, implementatie: [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)
- Architectuuroverzicht: [dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)

## Ondersteuning

Open een issue op [GitHub](https://github.com/wsj-br/transrewrt/issues). Vermeld uw platform (Windows / Linux / Docker) en app-versie (Over-dialoogvenster of Releases-pagina).

## Dankbetuigingen

Suggesties voor voorinstellingen in de eenvoudige modus in de voorinstellingeneditor gebruiken openbare evaluatiegegevens van:

- [languagebench](https://huggingface.co/spaces/fair-forward/languagebench) (CC BY-SA 4.0)
- [Artificial Analysis](https://artificialanalysis.ai/) (attributie vereist voor API-gegevens)

Licenties van afhankelijkheden van derden en deze kennisgevingen van gegevensbronnen staan vermeld in [NOTICES](../NOTICES).

## Licentie

Copyright © 2026 Waldemar Scudeller Jr.

[Apache License 2.0](../LICENSE)

Productnamen en -pictogrammen behoren toe aan hun respectievelijke eigenaren en worden alleen ter identificatie gebruikt. Deze software is niet gelieerd aan of goedgekeurd door deze merken.

<small>

> **Opmerking over UI- en documentatievertalingen:** Alle interface- en documentatietalen, behalve het originele Engels, zijn vertaald met behulp van AI-modellen via [ai-i18n-tools](https://wsj-br.github.io/ai-i18n-tools/); de formulering kan onnauwkeurig zijn of fouten bevatten.

</small>
