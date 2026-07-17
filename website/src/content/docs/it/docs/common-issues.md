---
title: Problemi comuni
description: Risoluzione dei problemi e suggerimenti rapidi per Transrewrt.
translation_last_updated: '2026-07-17T14:58:58.004Z'
source_file_mtime: '2026-07-17T14:37:17.841Z'
source_file_hash: d60d2f0d1e9289639fd72ad478b6756e4638dce77acf7d2d1795a37653a97f17
translation_language: it
source_file_path: src/content/docs/docs/common-issues.md
translation_models:
  - google/gemini-2.5-flash
---



Se qualcosa non funziona come previsto, controlla prima questi punti.

## L'app non traduce, riscrive o trasforma

Verifica che:

- hai selezionato un **preset** (Facile) o un **modello** (Avanzato) nella barra degli strumenti
- in modalità **Facile**, **Impostazioni → Impostazioni generali** ha un **Provider** con una chiave funzionante (o URL LLM locale)
- in modalità **Avanzata**, almeno un modello è elencato in **Impostazioni → Modelli**
- la configurazione della tua API funziona (desktop: **Impostazioni → Configurazione API → Test**)

## L'elenco dei modelli è vuoto

In modalità **Facile**, conferma che il **Provider** sia impostato e che le chiavi/URL siano stati testati. Per **LLM locale**, assicurati che il tuo server locale sia in esecuzione e che i modelli siano caricati.

In modalità **Avanzata**, apri **Impostazioni → Modelli**, fai clic su **Aggiorna** e aggiungi i modelli a **Modelli selezionati**. Facoltativamente, attiva **Solo gratuiti**.

## Troppo lento o troppo costoso

- Scegli un preset o un modello diverso
- Usa un input più breve
- Disattiva **Traduzione in tempo reale durante la digitazione** in Impostazioni generali
- Usa modelli gratuiti per attività semplici

## Lingua dell'interfaccia sbagliata

Fai clic sull'icona del globo nella barra degli strumenti e scegli la tua **Lingua dell'interfaccia**.

## Testo troppo piccolo o difficile da leggere

**Impostazioni → Impostazioni generali** → cambia **Famiglia di caratteri** e **Dimensione**.

## Il riepilogo della dashboard appare vuoto

Questo è normale se:

- utilizzi solo **modelli gratuiti** e stai esaminando i dati sui **costi** (potrebbero essere zero); i KPI del conteggio delle chiamate richiedono comunque dati per il periodo selezionato
- il **filtro temporale** selezionato non copre il momento in cui sono state effettuate le chiamate — prova **Tutto**

Se i KPI sono ancora zero dopo **Tutto**, controlla [Cronologia](/docs/history/) o Dashboard → **Tutte le chiamate**.

## Il costo mostra "non disponibile" o sembra sbagliato

OpenRouter mostra la spesa effettiva quando applicabile. Per altri provider, il costo è stimato in base ai prezzi di OpenRouter; se nessun prezzo corrisponde, il costo viene visualizzato come **non disponibile** e non viene aggiunto al totale.

## Il costo totale non corrisponde alla fattura del mio provider

I dati nell'app sono **stime di riferimento**, non fatture. Per OpenRouter, usa **Impostazioni → Monitoraggio costi → Sincronizza con l'utilizzo della chiave API**.

## Pagina Cronologia mancante dalla barra laterale

**Mantieni la cronologia di esecuzione** potrebbe essere disattivato. Abilitalo nelle Impostazioni generali a meno che la cronologia non sia disabilitata dall'amministratore (`HISTORY_DISABLED` — vedi [Configurazione](/docs/configuration/#privacy-mode)).

## Web: reindirizzato al login inaspettatamente

La tua sessione potrebbe essere scaduta. Accedi di nuovo. Se succede spesso, controlla le impostazioni di durata della sessione del server.

## Amministratore web: password dimenticata

Se un altro amministratore può accedere, può reimpostare la password in **Impostazioni → Utenti**. Se sei bloccato ma hai accesso alla shell:

```bash
docker exec transrewrt reset-web-password '<username>' '<new-password>'
```

Il nome utente amministratore predefinito è `admin`. Da un checkout sorgente: `pnpm run reset-web-password -- <username> <new-password>`.

## La dashboard non mostra dati per altri utenti (web)

Solo gli **amministratori** possono visualizzare altri utenti tramite il filtro **Utente**. Gli utenti regolari vedono solo la propria attività.

## Modificato un prompt e perso le modifiche

Quando modifichi un prompt di Trasformazione, fai clic su **Salva** prima di **Torna a Esegui**.

## Consigli rapidi

- Inizia con [Traduci](/docs/translate/) per confermare la tua configurazione prima di Riscrivi o Trasforma
- Usa [Riscrivi](/docs/rewrite/) per i miglioramenti quotidiani della formulazione
- Usa [Trasforma](/docs/transform/) per flussi di lavoro personalizzati ripetibili
- Rimani in modalità **Facile** finché non hai bisogno di ID modello dettagliati
- Esporta regolarmente i prompt se stai creando una libreria di prompt
- Usa [Dashboard](/docs/dashboard/) e [Cronologia](/docs/history/) per rivedere l'utilizzo e le esecuzioni passate

[Report an issue](https://github.com/wsj-br/transrewrt/issues)
