---
title: Impostazioni
description: >-
  Riferimento compatto per Generale, Modelli, Lingue, Glossario, Costo,
  Trasformazione, Utenti, API e Informazioni.
translation_last_updated: '2026-07-17T21:14:46.392Z'
source_file_mtime: '2026-07-17T14:37:21.849Z'
source_file_hash: 492e5fd37f4a6b282502282d4f2728047a0d09ae8c30334b3c8388a5ce6e9f68
translation_language: it
source_file_path: src/content/docs/docs/settings.md
translation_models:
  - google/gemini-2.5-flash
---



Apri le **Impostazioni** dalla barra laterale per personalizzare il comportamento dell'app.

| Scheda | Desktop | Web (amministratore) | Web (utente) | Note |
| --- | :---: | :---: | :---: | --- |
| Impostazioni generali | sì | sì | sì | Include **Esperienza AI** (Facile / Avanzata) |
| Modelli | sì | sì | sì | Solo quando l'**Esperienza AI** è **Avanzata** |
| Lingue | sì | sì | sì | |
| Monitoraggio costi | sì | sì | — | |
| Trasformazione | sì | sì | sì | Importazione/esportazione in blocco di prompt |
| Glossario | sì | sì | sì | Coppie di termini per la traduzione |
| Utenti | — | sì | — | |
| Configurazione API | sì | sì | — | |
| Informazioni | sì | sì | sì | |

In modalità **Facile**, scegli l'AI tramite i preset nella barra degli strumenti e il **Provider** nelle Impostazioni generali; la scheda **Modelli** è nascosta.

:::note
Nella versione web, ogni utente ha la propria configurazione (esperienza AI, provider, modelli/preset, lingue, opzioni, prompt). Le modifiche non influiscono sugli altri utenti.
:::

## Impostazioni generali

**Esperienza AI**

- **Facile** (predefinito): scegli un **Provider**. I provider cloud utilizzano i preset della barra degli strumenti (**Gratuito (OpenRouter)**, **Standard**, **Avanzato**, **Tecnico**). **LLM locale** elenca invece i modelli locali installati. **Aggiorna catalogo preset** recupera l'ultimo elenco di preset dal repository del progetto.
- **Avanzato**: scegli i modelli nella barra degli strumenti; gestisci l'elenco in [Modelli](#models).

**Aspetto** — Tema; **Mostra informazioni sui costi nelle azioni**; **Cifre decimali costo**; margine solo web intorno all'app; **Famiglia carattere** e **Dimensione**.

**Comportamento** — **Comportamento per INVIO**; **Esecuzione automatica all'incolla**; **Copia automatica risultato negli appunti**; **Traduzione in tempo reale durante la digitazione**; **Timeout (ms)**.

**Cronologia**

- **Mantieni cronologia esecuzioni** — archivia input/output per la vista [Cronologia](/docs/history/). Disattivando questa opzione viene richiesta una conferma e si può rimuovere il testo archiviato. Se etichettato come *disabilitato dall'amministratore*, `HISTORY_DISABLED` è impostato — vedi [Configurazione](/docs/configuration/#privacy-mode).
- **Elimina dati cronologia** — rimuovi il testo archiviato per età o cancella tutto. **Non** elimina i totali dei costi (usa Monitoraggio costi per questo).

**Backup configurazione** (amministratori desktop e web)

- Opzionale **Includi dati di utilizzo nel backup**
- **Backup configurazione** — ZIP con configurazione, stato, utenti, preferenze, prompt e dati di utilizzo opzionali
- **Ripristina da backup** — finestra di dialogo di conferma con opzioni per ripristinare e/o cancellare i dati di utilizzo

I backup possono essere spostati tra desktop e web; il ripristino di un backup desktop sul web applica i dati all'utente amministratore.

## Modelli

Disponibile solo in modalità **Avanzata**.

![Scheda Modelli delle impostazioni](/images/screenshots/it/settings-general.png)

- **Modelli disponibili** (a sinistra) e **Modelli selezionati** (a destra)
- Cerca, chip **Provider**, **Solo gratuiti**, **Aggiorna**, Espandi/Comprimi tutto
- Gli ID dei modelli utilizzano un prefisso del provider (`openrouter/…`, `openai/…`, `local/…`, …)

:::caution
Non usare OpenRouter **Body Builder** (`openrouter/bodybuilder`) per Traduci, Riscrivi o Trasforma — restituisce payload di richieste JSON, non testo finito.
:::

Aggiungi con **Aggiungi**; rimuovi con **X**. **Deseleziona tutto** mantiene il modello gratuito richiesto.

## Lingue

- **Lingue principali** — bloccate vicino alla parte superiore degli elenchi di lingue in Traduci e Trasforma
- **Lingua personalizzata** — aggiungi una lingua mancante dall'elenco integrato

## Monitoraggio costi

- **Costo totale**, **Copia valore**, **Reimposta costo**
- **Sincronizza con utilizzo chiave API** — allinea con l'utilizzo dell'account OpenRouter (solo OpenRouter)
- **Utilizzo chiave API** — dettagli OpenRouter quando disponibili
- **Elimina dati costi** — tutti i dati o le voci più vecchie di una data

OpenRouter mostra il costo effettivo fatturato quando applicabile; altri provider utilizzano stime basate sui prezzi OpenRouter. Le stime non sono fatture.

:::caution
L'eliminazione dei dati sui costi non può essere annullata. Esporta prima tramite Cronologia o Dashboard → Tutte le chiamate se hai bisogno di un backup. Anche la cronologia di input/output correlata per tali chiamate API viene rimossa.
:::

## Trasforma

Gestisci in blocco i prompt: rivedi, elimina, importa, esporta e carica prompt di esempio.

## Glossario

Gestisci le coppie di termini applicate durante la [traduzione](/docs/translate/#use-the-glossary). Ogni termine ha lingua di origine/destinazione e testo di origine/destinazione.

- Aggiungi tramite la riga inferiore e **+**
- Filtra per lingua o testo
- Importa/esporta CSV o XLSX; scarica modelli vuoti

Il desktop memorizza il glossario localmente; il web lo memorizza per utente.

## Utenti

Solo web (amministratori): aggiungi utenti, aggiorna dettagli, reimposta password, elimina account.

## Configurazione API

Configura solo i provider che utilizzi: OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras, NVIDIA, Alibaba Cloud, apikey.fun, **LLM locale** (URL di base per Ollama, LM Studio, llama.cpp o simili) e un provider personalizzato opzionale compatibile con OpenAI.

**Web (amministratore):** le chiavi provengono dalle variabili d'ambiente — questa pagina mostra quali sono impostate e ti consente di **Testare**. Riavvia dopo aver modificato le variabili d'ambiente. Vedi [Configurazione](/docs/configuration/).

**Desktop:** inserisci le chiavi (o l'URL dell'LLM locale) e **Salva** / **Modifica** / **Testa**. Le chiavi vengono archiviate crittografate; non puoi visualizzare il valore corrente, solo sostituirlo.

:::tip
Non è necessaria alcuna chiave a pagamento per iniziare: usa i modelli gratuiti di OpenRouter, altri provider gratuiti o un server locale compatibile con OpenAI come [Ollama](https://ollama.com), LM Studio o llama.cpp (ad es. `translategemma:4b`).
:::

## Informazioni

Nome dell'app, versione, data di build, licenza, avvisi di terze parti e link al repository.
