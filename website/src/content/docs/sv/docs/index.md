---
title: Översikt
description: >-
  Vad Transrewrt är och hur du hittar installationsguider och
  inställningsdokumentation.
---



**Transrewrt** är ett AI-drivet textverktyg med öppen källkod för:

- **Översätt** — mellan dussintals språk, med automatisk källdetektering och ordlistor
- **Skriv om** — fixa grammatik, förbättra tydlighet, ändra ton eller längd
- **Transformera** — kör dina egna anpassade AI-prompter på valfri text

Det stöder många AI-leverantörer (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras, NVIDIA, Alibaba Cloud, apikey.fun, OpenAI-kompatibla slutpunkter och lokala OpenAI-kompatibla servrar som Ollama, LM Studio eller llama.cpp). Kör det som en **skrivbordsapp** (Windows / Linux) eller en **självhostad webbapp** (Docker).

Dina nycklar, dina modeller, din värd — det finns inget Transrewrt-molnkonto.

## Hur fönstret är organiserat

![Översätt arbetsyta](/images/screenshots/sv/translate.png)

- **Sidopanel** – huvudnavigeringen: Översätt, Skriv om, Transformera, Dashboard, Historik, Inställningar (och den inloggade användaren på webben).
- **Verktygsfält** – sidtiteln, väljaren för **förinställning** (Enkel) eller **modell** (Avancerad), **gränssnittsspråket** (jordglobikon; ändrar inte Översätt från/till) och Hjälp (**?**) som länkar till denna dokumentation. Förinställnings-/modellmenyn kan också **Växla till enkelt/avancerat läge** (ovanför Öppna inställningar).
- **Arbetsyta** – in- och utdatapanelet, med antal, tid, TPS och valfri kostnad. Åtgärdsfältet visar en liten länk till appens **version** (nere till höger) till GitHub Pages-webbplatsen.

Som standard körs appen i **Enkelt** läge: välj en **förinställning** och en **leverantör** i Inställningar. Växla till **Avancerat** under [Inställningar → Allmänna inställningar](/docs/settings/#general-settings) för en fullständig modelllista, eller använd växeln i verktygsfältets förinställnings-/modellmeny.

## Kom igång

1. [Snabbstart](/docs/quick-start/) — installera skrivbordsversionen eller kör med Docker
2. [API-nyckel](/docs/api-key/) — anslut en gratis OpenRouter-nyckel eller en annan leverantör
3. [Konfiguration](/docs/configuration/) — miljövariabler, konfigurationssökvägar, webbautentisering

## Guider

- [Översätt text](/docs/translate/)
- [Skriv om text](/docs/rewrite/)
- [Transformera med prompter](/docs/transform/)
- [Använd Dashboard](/docs/dashboard/)
- [Bläddra i historik](/docs/history/)

## Referens och hjälp

- [Inställningar](/docs/settings/)
- [Vanliga problem](/docs/common-issues/)

[Download releases](https://github.com/wsj-br/transrewrt/releases) · [GitHub repository](https://github.com/wsj-br/transrewrt)
