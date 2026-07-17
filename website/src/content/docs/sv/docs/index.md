---
title: Översikt
description: >-
  Vad Transrewrt är och hur du hittar installationsguider och
  inställningsdokumentation.
translation_last_updated: '2026-07-17T14:59:03.340Z'
source_file_mtime: '2026-07-17T14:36:51.471Z'
source_file_hash: 6dfcf9cb19e3422d75511ecc06eda72e014214c3e34d95f7fec6d8a05c01896f
translation_language: sv
source_file_path: src/content/docs/docs/index.md
translation_models:
  - google/gemini-2.5-flash
---



**Transrewrt** är ett AI-drivet textverktyg med öppen källkod för:

- **Översätt** — mellan dussintals språk, med automatisk källdetektering och ordlistor
- **Skriv om** — fixa grammatik, förbättra tydlighet, ändra ton eller längd
- **Transformera** — kör dina egna anpassade AI-prompter på valfri text

Den stöder många AI-leverantörer (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras, NVIDIA, Alibaba Cloud, apikey.fun, OpenAI-kompatibla slutpunkter och lokala OpenAI-kompatibla servrar som Ollama, LM Studio eller llama.cpp). Kör den som en **skrivbordsapp** (Windows/Linux) eller en **självhostad webbapp** (Docker).

Dina nycklar, dina modeller, din värd – det finns inget Transrewrt-molnkonto.

## Hur fönstret är organiserat

- **Sidofält** — Översätt, Skriv om, Transformera, Kontrollpanel, Historik, Inställningar (och den inloggade användaren på webben)
- **Verktygsfält** — sidtitel, väljare för **förinställning** (Enkel) eller **modell** (Avancerad), och **Gränssnittsspråk** (globikon; ändrar inte Översätt från/till)
- **Arbetsyta** — In- och utdatapaneeler med antal, tid, TPS och valfri kostnad

Som standard körs appen i **Enkelt** läge: välj en **förinställning** och en **leverantör** i Inställningar. Växla till **Avancerat** under [Inställningar → Allmänna inställningar](/docs/settings/#general-settings) för en fullständig modellista.

## Kom igång

1. [Snabbstart](/docs/quick-start/) — installera skrivbordsversionen eller kör med Docker
2. [API-nyckel](/docs/api-key/) — anslut en gratis OpenRouter-nyckel eller en annan leverantör
3. [Konfiguration](/docs/configuration/) — miljövariabler, konfigurationssökvägar, webbautentisering

## Guider

- [Översätt text](/docs/translate/)
- [Skriv om text](/docs/rewrite/)
- [Transformera med prompter](/docs/transform/)
- [Använd kontrollpanelen](/docs/dashboard/)
- [Bläddra i historiken](/docs/history/)

## Referens och hjälp

- [Inställningar](/docs/settings/)
- [Vanliga problem](/docs/common-issues/)

[Download releases](https://github.com/wsj-br/transrewrt/releases) · [GitHub repository](https://github.com/wsj-br/transrewrt)
