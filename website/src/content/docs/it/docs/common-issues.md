---
title: Problemi comuni
description: Risoluzione dei problemi e suggerimenti rapidi per Transrewrt.
---



Se qualcosa non funziona come previsto, controlla prima questi punti.

## L'app non traduce, riscrive o trasforma

Verifica che:

- hai selezionato un **preset** (Facile) o un **modello** (Avanzato) nella barra degli strumenti
- in modalità **Facile**, **Impostazioni → Impostazioni generali** abbia un **Provider** con una chiave funzionante (o un URL LLM locale)
- in modalità **Avanzata**, sia selezionato un modello nella barra degli strumenti (un elenco vuoto è consentito, ma è necessario almeno un modello in **Impostazioni → Modelli** per l'esecuzione)
- la configurazione dell'API funzioni (desktop: **Impostazioni → Configurazione API → Test**)

## L'elenco dei modelli è vuoto

In modalità **Facile**, conferma che il **Provider** sia impostato e che chiavi/URL siano stati testati. Per **LLM locale**, assicurati che il tuo server locale sia in esecuzione e che i modelli siano caricati.

In modalità **Avanzata**, i modelli selezionati potrebbero essere vuoti. Apri **Impostazioni → Modelli**, fai clic su **Aggiorna** e aggiungi i modelli a **Modelli selezionati**. Facoltativamente, attiva **Solo gratuiti**. La rimozione dell'ultimo modello dalla barra degli strumenti apre anche Impostazioni → Modelli.

## Troppo lento o troppo costoso

- Scegli un preset o un modello diverso
- Usa un input più breve
- Disattiva **Traduzione in tempo reale durante la digitazione** nelle Impostazioni generali
- Usa modelli gratuiti per attività semplici

## Lingua dell'interfaccia errata

Fai clic sull'icona del globo nella barra degli strumenti e scegli la tua **Lingua dell'interfaccia**.

## Testo troppo piccolo o difficile da leggere

**Impostazioni → Impostazioni generali** → cambia **Famiglia di caratteri** e **Dimensione**.

## Il riepilogo della dashboard appare vuoto

Questo è normale se:

- usi solo **modelli gratuiti** e stai esaminando i dati sui **costi** (potrebbero essere zero); gli indicatori chiave di prestazione del conteggio delle chiamate richiedono comunque dati per il periodo selezionato
- il **filtro temporale** selezionato non copre il momento in cui sono state effettuate le chiamate — prova **Tutti**

Se gli indicatori chiave di prestazione sono ancora zero dopo **Tutti**, controlla [Cronologia](/docs/history/) o Dashboard → **Tutte le chiamate**.

## Il costo mostra "non disponibile" o sembra errato

OpenRouter mostra la spesa effettiva, se applicabile. Per gli altri provider, il costo è stimato in base ai prezzi di OpenRouter; se nessun prezzo corrisponde, il costo viene visualizzato come **non disponibile** e non viene aggiunto al totale.

## Il costo totale non corrisponde alla fattura del mio provider

I dati nell'app sono **stime di riferimento**, non fatture. Per OpenRouter, usa **Impostazioni → Monitoraggio costi → Sincronizza con l'utilizzo della chiave API**.

## Pagina Cronologia mancante dalla barra laterale

**Mantieni cronologia esecuzioni** potrebbe essere disattivato. Abilitalo in Impostazioni generali a meno che la cronologia non sia disabilitata dall'amministratore (`HISTORY_DISABLED` — vedi [Configurazione](/docs/configuration/#privacy-mode)).

## Web: reindirizzato al login inaspettatamente

La tua sessione potrebbe essere scaduta. Accedi di nuovo. Se succede spesso, chiedi a un amministratore di aumentare il **Timeout sessione** in [Impostazioni → Utenti](/docs/settings/#users) (un amministratore potrebbe anche aver revocato le tue sessioni).

## Amministratore web: password dimenticata

Se un altro amministratore può accedere, può reimpostare la password in **Impostazioni → Utenti**. Se sei bloccato ma hai accesso alla shell:

```bash
docker exec transrewrt reset-web-password '<username>' '<new-password>'
```

Il nome utente predefinito dell'amministratore è `admin`. Da un checkout di origine: `pnpm run reset-web-password -- <username> <new-password>`.

## La Dashboard non mostra dati per altri utenti (web)

Solo gli **amministratori** possono visualizzare altri utenti tramite il filtro **Utente**. Gli utenti normali vedono solo la propria attività.

## Ho modificato un prompt e ho perso le modifiche

Quando modifichi un prompt di Trasformazione, fai clic su **Salva** prima di **Torna a Esegui**.

## Suggerimenti rapidi

- Inizia con [Traduci](/docs/translate/) per confermare la tua configurazione prima di Riscrivi o Trasforma
- Usa [Riscrivi](/docs/rewrite/) per miglioramenti quotidiani della formulazione
- Usa [Trasforma](/docs/transform/) per flussi di lavoro personalizzati ripetibili
- Rimani in modalità **Facile** finché non hai bisogno di ID modello dettagliati
- Esporta regolarmente i prompt se stai creando una libreria di prompt
- Usa [Dashboard](/docs/dashboard/) e [Cronologia](/docs/history/) per rivedere l'utilizzo e le esecuzioni passate

[Report an issue](https://github.com/wsj-br/transrewrt/issues)
