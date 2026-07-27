<p align="center">
  <img src="../images/transrewrt_banner.png" alt="Transrewrt Banner"  />
</p>

<h1 align="center">Transrewrt</h1>

<p align="center">
  <a href="https://github.com/wsj-br/transrewrt/releases"><img src="https://img.shields.io/badge/version-1.6.2-blue" alt="Version"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-Apache%202.0-green" alt="License: Apache 2.0"></a>
  <img src="https://img.shields.io/badge/platform-Windows%20%7C%20Linux%20%7C%20Docker-lightgrey" alt="Platform">
</p>

AI-drivet textverktyg för att **översätta**, **skriva om** och **transformera** med anpassade prompter. Använd dina egna AI-leverantörer (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras, NVIDIA, Alibaba Cloud, apikey.fun, OpenAI-kompatibla slutpunkter och lokala servrar som Ollama, LM Studio eller llama.cpp). Kör som en skrivbordsapp (Windows/Linux) eller en självhostad webbapp (Docker). Inget Transrewrt-molnkonto.

## Funktioner

| Funktion | Beskrivning |
| --- | --- |
| **Översätt** | Dussintals språk, automatisk identifiering, ordlistor, förfina med Rephrase |
| **Omskrivning** | Tydlighet, ton, längd, stavning och grammatik — samma språk |
| **Transformera** | Anpassade AI-prompter som du skapar, redigerar och återanvänder |
| **Distribuera** | Electron desktop eller Docker webb (amd64 & arm64) |
| **Nycklar** | Dina leverantörer, din värd — Enkla förinställningar eller avancerad modellista |

![Översätt](../images/screenshots/sv/translate.png)

<small>**Läs på andra språk:** </small>
<small id="lang-list">[English (UK)](../README.md) · [العربية](./README.ar.md) · [简体中文](./README.zh-Hans.md) · [繁體中文](./README.zh-Hant.md) · [Čeština](./README.cs.md) · [Nederlands](./README.nl.md) · [Français](./README.fr.md) · [Deutsch](./README.de.md) · [Ελληνικά](./README.el.md) · [हिन्दी](./README.hi.md) · [Magyar](./README.hu.md) · [Italiano](./README.it.md) · [日本語](./README.ja.md) · [한국어](./README.ko.md) · [فارسی](./README.fa.md) · [Polski](./README.pl.md) · [Português (Brasil)](./README.pt-BR.md) · [Română](./README.ro.md) · [Русский](./README.ru.md) · [Slovenčina](./README.sk.md) · [Español](./README.es.md) · [Svenska](./README.sv.md) · [ไทย](./README.th.md) · [Türkçe](./README.tr.md) · [Українська](./README.uk.md) · [Tiếng Việt](./README.vi.md)</small>

## Snabbstart

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

Ersätt `PROVIDER_API_KEY` med din leverantörsvariabel (till exempel `OPENROUTER_API_KEY`, `OPENAI_API_KEY`, `GROQ_API_KEY`). Öppna [http://localhost:5000](http://localhost:5000) och ändra standardlösenordet för Admin. Nycklar ställs in via miljövariabler (inte webbgränssnittet).

**Windows** — Ladda ner `Transrewrt Setup x.y.z.exe` från [Releases](https://github.com/wsj-br/transrewrt/releases), installera, lägg sedan till nycklar i **Inställningar → API**.

**Linux** — Ladda ner `.AppImage` från [Releases](https://github.com/wsj-br/transrewrt/releases), sedan:

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

Plattformsinformation (Compose, SmartScreen, apt-bibliotek, GPU-flaggor, tidszon): [Snabbstartsguider](https://wsj-br.github.io/transrewrt/docs/quick-start/).

## Dokumentation

Fullständig produktdokumentation (installation, API-nycklar, guider, inställningar, felsökning):

**[https://wsj-br.github.io/transrewrt/docs/](https://wsj-br.github.io/transrewrt/docs/)**

- [API-nyckel](https://wsj-br.github.io/transrewrt/docs/api-key/)
- [Konfiguration](https://wsj-br.github.io/transrewrt/docs/configuration/)
- [Översätt](https://wsj-br.github.io/transrewrt/docs/translate/) · [Omskrivning](https://wsj-br.github.io/transrewrt/docs/rewrite/) · [Transformera](https://wsj-br.github.io/transrewrt/docs/transform/)
- [Vanliga problem](https://wsj-br.github.io/transrewrt/docs/common-issues/)

## Utveckling

- Installation, byggversion, test, distribution: [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)
- Arkitekturöversikt: [dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)

## Support

Öppna ett ärende på [GitHub](https://github.com/wsj-br/transrewrt/issues). Inkludera din plattform (Windows / Linux / Docker) och appversion (Om-dialogruta eller Releases-sida).

## Tack

Förslag på förinställningar i Enkel-läge i förinställningsredigeraren använder offentliga utvärderingsdata från:

- [languagebench](https://huggingface.co/spaces/fair-forward/languagebench) (CC BY-SA 4.0)
- [Artificial Analysis](https://artificialanalysis.ai/) (erkännande krävs för API-data)

Licenser för tredjepartsberoenden och dessa meddelanden om datakällor listas i [NOTICES](../NOTICES).

## Licens

Copyright © 2026 Waldemar Scudeller Jr.

[Apache License 2.0](../LICENSE)

Produktnamn och ikoner tillhör respektive ägare och används endast för identifieringsändamål. Denna programvara är inte ansluten till eller godkänd av dessa varumärken.

<small>

> **Obs om UI- och dokumentationsöversättningar:** Alla gränssnitts- och dokumentationsspråk utom engelska (Storbritannien) översattes med AI med hjälp av [ai-i18n-tools](https://wsj-br.github.io/ai-i18n-tools/); formuleringen kan vara oprecis eller innehålla fel.

</small>
