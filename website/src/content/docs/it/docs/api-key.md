---
title: Chiave API
description: >-
  Connetti Transrewrt a un provider AI di tua scelta aggiungendo una chiave API,
  oppure usa un modello locale.
---



Transrewrt non include una propria AI: invia il tuo testo a un provider AI che scegli tu. Per connettere un provider, aggiungi una **chiave API**: un codice privato, rilasciato dal provider, che funziona come una password per il loro servizio. Ti serve solo **un** provider per iniziare, e non devi pagare: diversi provider offrono modelli gratuiti o livelli gratuiti, e puoi anche eseguire modelli sul tuo computer senza alcuna chiave.

I provider supportati includono OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras, NVIDIA, Alibaba Cloud, apikey.fun, qualsiasi endpoint compatibile con OpenAI e server locali compatibili con OpenAI (Ollama, LM Studio, llama.cpp e simili).

## Passaggio 1 — Scegli un provider

Qualsiasi provider supportato funziona. Se non sai quale scegliere:

- **Gratuito per iniziare**: OpenRouter, Google Gemini, Groq, Mistral, Cerebras e NVIDIA offrono tutti modelli gratuiti o livelli gratuiti.
- **Hai già un account?** Se usi già OpenAI, Anthropic o un altro provider supportato, puoi semplicemente riutilizzare quell'account.
- **Preferisci mantenere tutto sul tuo computer?** Salta del tutto la chiave e usa invece un [modello locale](#using-a-local-model-instead-no-api-key).

## Passaggio 2 — Crea una chiave API

I passaggi esatti variano leggermente a seconda del provider, ma il modello è lo stesso ovunque:

1. Registrati o accedi al sito web del provider. Nelle **Impostazioni → Configurazione API** di Transrewrt, ogni provider ha un link **Apri sito web del provider** che ti porta al posto giusto.
2. Trova la pagina **Chiavi API** (a volte sotto account, dashboard o impostazioni sviluppatore) e crea una nuova chiave. Alcuni provider ti chiedono di dare un nome alla chiave o di impostare un limite di spesa — entrambi sono opzionali.
3. Copia la chiave. È una lunga stringa di lettere e numeri, spesso che inizia con qualcosa come `sk-`.

:::caution
Tratta una chiave API come una password: non condividerla, pubblicarla o inviarla a nessuno. Se una chiave viene compromessa, eliminala sul sito web del provider e creane una nuova.
:::

## Passaggio 3 — Aggiungi e testa la chiave (desktop)

1. In Transrewrt, apri **Impostazioni → Configurazione API**.
2. Incolla la chiave nel campo del tuo provider (ad esempio **Chiave API Google Gemini**) e salvala.
3. Fai clic su **Test** accanto al campo per confermare che la chiave funziona.

Una volta che il test ha successo, sei pronto — scegli quel provider nella schermata principale e inizia a tradurre.

:::caution
Evita il modello **Body Builder** di OpenRouter (`openrouter/bodybuilder`) — restituisce payload di richieste JSON, non testo completato. Vedi [Impostazioni → Modelli](/docs/settings/#models).
:::

## Utilizzo di un modello locale (senza chiave API)

Puoi eseguire modelli sul tuo computer con Ollama, LM Studio, llama.cpp o un altro server compatibile con OpenAI (ad esempio `google/gemma-4-e2b` tramite LM Studio). Nulla lascia la tua macchina e non è necessaria alcuna chiave API.

Per connetterne uno, imposta l'URL di base LLM locale sull'API base completa, incluso il percorso — ad esempio `http://localhost:11434/v1`. Sul desktop, impostalo in **Impostazioni → Configurazione API**; su Docker, imposta invece la variabile d'ambiente `LOCAL_LLM_URL`.

:::caution
Se usi un server LLM locale da un altro dispositivo o container, configuralo per consentire connessioni esterne (non solo localhost).
:::

## Docker / web

Se usi Transrewrt in un browser, le chiavi sono gestite da chi gestisce il server, non digitate nell'interfaccia utente del browser. L'amministratore imposta le chiavi del provider come **variabili d'ambiente** sul server (ad esempio `PROVIDER_API_KEY`) — vedi [Configurazione](/docs/configuration/).

## Lista di controllo per il primo avvio

1. Apri l'app e imposta la **Lingua dell'interfaccia** se necessario.
2. Aggiungi e testa almeno una chiave del provider — o configura un modello locale (desktop), o conferma che il server abbia le chiavi env (web).
3. In modalità **Facile**, scegli un **Provider** nelle Impostazioni generali; in modalità **Avanzata**, aggiungi modelli in **Impostazioni → Modelli** — vedi [Impostazioni](/docs/settings/#general-settings) per le due modalità.
4. Su **Traduci**, scegli un preset o un modello ed esegui un breve test — vedi [Traduci testo](/docs/translate/).

## Se qualcosa non funziona

- **Il test della chiave fallisce**: verifica che la chiave sia stata copiata completamente (senza spazi prima o dopo) e che non sia stata eliminata o disabilitata sul sito web del provider.
- **Le traduzioni falliscono con un errore di quota o di credito**: i livelli gratuiti hanno limiti giornalieri o mensili; attendi, passa a un altro provider gratuito o aggiungi credito.
- **Nessun provider appare in modalità Facile**: apri **Impostazioni → Configurazione API** e conferma che almeno una chiave (o l'URL LLM locale) sia configurata e testata.

Ulteriore aiuto: [Problemi comuni](/docs/common-issues/).
