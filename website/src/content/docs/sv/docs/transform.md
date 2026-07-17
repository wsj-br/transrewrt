---
title: Transformera med prompter
description: >-
  Kör anpassade AI-instruktioner – skapa, redigera, testa och hantera
  Transform-prompter.
translation_last_updated: '2026-07-17T14:59:04.267Z'
source_file_mtime: '2026-07-17T11:53:39.333Z'
source_file_hash: 07b5d140803063510c7c9fecf67a2f99e3aab3040116733a3126939b0c82e16e
translation_language: sv
source_file_path: src/content/docs/docs/transform.md
translation_models:
  - google/gemini-2.5-flash
---



Använd **Transformera** när du vill att AI:n ska följa anpassade instruktioner – sammanfatta, finslipa ett e-postmeddelande, extrahera nyckelpunkter, omformatera text eller någon annan arbetsgång du definierar.

![Transformera arbetsyta](/images/screenshots/sv/transform.png)

## Kör en befintlig prompt

1. Öppna **Transformera**.
2. Välj en prompt från listan.
3. Om en ruta för **Från** språk visas, ange ett språk om du vill ha ett.
4. Skriv eller klistra in text i **Indata**.
5. Klicka på **Transformera**.
6. Läs resultatet i **Utdata**.

## Ladda exempelprompter

Om listan är tom, klicka på **Ladda exempelprompter** i Transform-arbetsytan (finns även under [Inställningar → Transformera](/docs/settings/#transform)). Exemplen är på engelska; efter laddning, redigera en prompt och använd **Översätt prompt** om det behövs.

## Skapa en prompt

1. Klicka på **Ny prompt**.
2. Klicka på **Generera prompt**.
3. Beskriv vad du vill att prompten ska göra.
4. Välj en förinställning (Enkel) eller modell (Avancerad).
5. Granska utkastet och klicka på **Spara**.

## Redigera en prompt

Redigeraren är till vänster; ett testområde är till höger.

![Transform-promptredigerare](/images/screenshots/sv/transform-prompt-edit.png)

Huvudfält:

- **Promptnamn** – visas i promptlistan
- **Promptinstruktioner (valfritt)** – kort tips när prompten körs
- **Modellroll** – AI:ns övergripande roll
- **Modellinstruktioner (en per rad)** – regler att följa
- **Utdata beskrivning** – kort etikett för resultatet (t.ex. sammanfattat)
- **Temperatur (0.0 → 1.0)** – lägre är stabilare; högre är mer varierat
- **Fråga efter målspråk** – lägger till en språk väljare vid körning

Hjälpmedel: **Generera prompt**, **Förbättra prompt**, **Översätt prompt** (Enkel använder förinställningar; Avancerad använder modellistan).

:::caution
Klicka på **Spara** innan **Tillbaka till Kör**. Att gå tillbaka utan att spara kastar bort ändringar.
:::

## Testa före daglig användning

Använd testpanelen till höger med exempeltext när du skapar eller jämför prompter.

Exportera och importera prompter i bulk under [Inställningar → Transformera](/docs/settings/#transform).

## Nästa steg

- [Inställningar](/docs/settings/)
- [Bläddra i historik](/docs/history/)
- [Vanliga problem](/docs/common-issues/)
