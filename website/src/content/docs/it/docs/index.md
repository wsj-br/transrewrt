---
title: Panoramica
description: >-
  Che cos'è Transrewrt e come trovare la documentazione per l'installazione, le
  guide e le impostazioni.
---



**Transrewrt** è uno strumento di testo open source basato sull'intelligenza artificiale per:

- **Tradurre** — tra decine di lingue, con rilevamento automatico della sorgente e glossari
- **Riscrivere** — correggere la grammatica, migliorare la chiarezza, cambiare tono o lunghezza
- **Trasformare** — eseguire i propri prompt AI personalizzati su qualsiasi testo

Supporta molti provider di intelligenza artificiale (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras, NVIDIA, Alibaba Cloud, apikey.fun, endpoint compatibili con OpenAI e server locali compatibili con OpenAI come Ollama, LM Studio o llama.cpp). Eseguilo come **app desktop** (Windows / Linux) o come **app web self-hosted** (Docker).

Le tue chiavi, i tuoi modelli, il tuo host — non esiste un account cloud Transrewrt.

## Come è organizzata la finestra

![Area di lavoro di traduzione](/images/screenshots/it/translate.png)

- **Barra laterale** — la navigazione principale: Traduci, Riscrivi, Trasforma, Dashboard, Cronologia, Impostazioni (e l'utente loggato sul web).
- **Barra degli strumenti** — il titolo della pagina, il selettore **preset** (Facile) o **modello** (Avanzato), la **lingua dell'interfaccia** (icona del globo; non cambia Traduci da/a) e la Guida (**?**) che rimanda a questa documentazione. Il menu preset/modello può anche **Passare alla modalità Facile/Avanzata** (sopra Apri Impostazioni).
- **Area di lavoro** — i pannelli Input e Output, con conteggi, tempi, TPS e costo opzionale. La barra delle azioni mostra un piccolo link alla **versione** dell'app (in basso a destra) al sito GitHub Pages.

Per impostazione predefinita, l'app viene eseguita in modalità **Facile**: scegli un **preset** e un **Provider** in Impostazioni. Passa ad **Avanzato** in [Impostazioni → Impostazioni generali](/docs/settings/#general-settings) per un elenco completo dei modelli, oppure usa l'interruttore nel menu preset/modello della barra degli strumenti.

## Per iniziare

1. [Guida rapida](/docs/quick-start/) — installa desktop o esegui con Docker
2. [Chiave API](/docs/api-key/) — collega una chiave OpenRouter gratuita o un altro provider
3. [Configurazione](/docs/configuration/) — variabili d'ambiente, percorsi di configurazione, autenticazione web

## Guide

- [Traduci testo](/docs/translate/)
- [Riscrivi testo](/docs/rewrite/)
- [Trasforma con i prompt](/docs/transform/)
- [Usa la Dashboard](/docs/dashboard/)
- [Sfoglia cronologia](/docs/history/)

## Riferimenti e aiuto

- [Impostazioni](/docs/settings/)
- [Problemi comuni](/docs/common-issues/)

[Download releases](https://github.com/wsj-br/transrewrt/releases) · [GitHub repository](https://github.com/wsj-br/transrewrt)
