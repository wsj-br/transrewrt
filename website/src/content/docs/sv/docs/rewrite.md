---
title: Skriv om text
description: >-
  Förbättra formuleringen på samma språk – tydlighet, ton, längd, grammatik med
  mera.
translation_last_updated: '2026-07-17T21:14:49.755Z'
source_file_mtime: '2026-07-17T11:53:39.333Z'
source_file_hash: ca70a1d16518bb9193c83911bfb7be66b19076c48b914b92aba4e9a17f67740f
translation_language: sv
source_file_path: src/content/docs/docs/rewrite.md
translation_models:
  - google/gemini-2.5-flash
---



Använd **Skriv om** för att förbättra formuleringen utan att ändra huvudbetydelsen. Texten förblir på samma språk.

![Arbetsyta för omskrivning](/images/screenshots/sv/rewrite.png)

Lägen inkluderar:

- **Kontrollera stavning och grammatik**
- **Förbättra tydlighet**
- **Alternativa versioner** (flera omformuleringar i en körning)
- **Gör formell** / **Gör informell**
- **Korta ner** / **Utöka**
- **Gör teknisk**

## Skriv om text

1. Öppna **Skriv om**.
2. Välj ett **Läge**.
3. Ställ eventuellt in **Från** till språket för din text (eller lämna **Identifiera språk**).
4. Skriv eller klistra in text i **Indata**.
5. Klicka på **Skriv om**.
6. Läs resultatet i **Utdata**.

:::tip
I **Kontrollera stavning och grammatik** visas en växel för **Visa ändringar** bredvid **Kopiera**. Växla den för att visa eller dölja korrigeringar.
:::

:::note
**Alternativa versioner** returnerar flera omformuleringar i en **enda** körning, åtskilda av `----`. Detta skiljer sig från **Omformulera…**, som bygger en versionshistorik över tid.
:::

## Förfina en omskrivning

Efter en lyckad körning visas **Omformulera…** och rullgardinsmenyn för versioner på utdatasidan (samma idé som [Översätt](/docs/translate/#refine-a-translation), men texten förblir på samma språk och behåller det aktuella **Läget**):

1. **Omformulera…** (inget val) – en annan fullständig omskrivning med annorlunda formulering. Upp till fem versioner. Klicka på **Stoppa omskrivning** för att avbryta.
2. **Ordalternativ** – markera text, högerklicka sedan eller **Omformulera…**.
3. Varje begäran kan medföra användningskostnad.

## Nästa steg

- [Översätt text](/docs/translate/)
- [Transformera med prompter](/docs/transform/)
- [Vanliga problem](/docs/common-issues/)
