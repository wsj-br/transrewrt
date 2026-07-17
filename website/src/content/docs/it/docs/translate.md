---
title: Traduci testo
description: >-
  Converti il testo tra le lingue, usa il glossario e perfeziona i risultati con
  Riformula.
---



Usa **Traduci** per convertire il testo da una lingua all'altra.

![Area di lavoro Traduci](/images/screenshots/it/translate.png)

## Prerequisiti

- Almeno una chiave del provider (desktop) o una chiave dell'ambiente server (web) — vedi [chiave API](/docs/api-key/)
- Un **preset** (Facile) o un **modello** (Avanzato) selezionato nella barra degli strumenti

## Traduci testo

1. Apri **Traduci** nella barra laterale.
2. Scegli una lingua in **Da** (o **Rileva lingua**).
3. Scegli una lingua in **A**.
4. Scegli un preset o un modello nella barra degli strumenti.
5. Digita o incolla il testo in **Input**.
6. Fai clic su **Traduci**.
7. Leggi il risultato in **Output**, quindi copia se necessario.

Le **lingue principali** appaiono per prime negli elenchi — impostale in [Impostazioni → Lingue](/docs/settings/#languages).

## Impostazioni utili

In [Impostazioni → Impostazioni generali](/docs/settings/#general-settings):

- **Esecuzione automatica all'incolla** — si avvia non appena incolli
- **Copia automatica del risultato negli appunti** — copia dopo un'esecuzione riuscita
- **Traduzione in tempo reale durante la digitazione** — si avvia mentre digiti (potrebbe aumentare i costi)
- **Timeout (ms)** — attesa prima di un'esecuzione in tempo reale
- **Comportamento per INVIO** — se Invio esegue l'attività o inserisce una nuova riga

## Perfeziona una traduzione

Dopo un'esecuzione riuscita, **Riformula…** e un menu a discesa delle versioni appaiono accanto al selettore **A:**:

1. **Riformula…** (nessuna selezione) — un'altra traduzione completa dello stesso input. Fino a **cinque** versioni; il modello vede le versioni precedenti in modo che la formulazione possa differire. Fai clic su **Interrompi traduzione** per annullare una riformulazione in corso.
2. **Alternative di parole** — seleziona parole o una breve frase, quindi fai clic con il tasto destro o su **Riformula…**. Scegli un'alternativa per sostituire l'intervallo (potrebbe allargarsi leggermente per la grammatica). A cinque versioni, viene aggiornata solo la versione 5.
3. Ogni richiesta di riformulazione o di alternative utilizza nuovamente il modello e potrebbe aggiungere costi.

## Usa il glossario

Un **glossario** è una coppia di termini sorgente/target per una coppia di lingue. Quando abilitato, i termini corrispondenti vengono inviati al modello in modo che la formulazione preferita rimanga coerente.

1. Attiva **Glossario** nel pannello di input.
2. Traduci come al solito — i termini per quella coppia **Da** / **A** si applicano automaticamente.
3. Fai clic su **Aggiungi al glossario** (accanto a **Da:**) per acquisire rapidamente una nuova coppia.
4. Gestisci tutti i termini in [Impostazioni → Glossario](/docs/settings/#glossary).

:::note
I termini del glossario sono abbinati per coppia linguistica. Non possono essere usati con **Rileva lingua** come sorgente.
:::

## Passi successivi

- [Riscrivi testo](/docs/rewrite/)
- [Trasforma con prompt](/docs/transform/)
- [Problemi comuni](/docs/common-issues/)
