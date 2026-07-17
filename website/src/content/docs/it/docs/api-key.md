---
title: Chiave API
description: >-
  Ottieni una chiave API OpenRouter gratuita e connetti altri provider AI a
  Transrewrt.
translation_last_updated: '2026-07-17T21:14:45.661Z'
source_file_mtime: '2026-07-17T14:58:48.569Z'
source_file_hash: 540c5b2b785355828a421293195b23c2fec98502888d607638fbb33f93970a2a
translation_language: it
source_file_path: src/content/docs/docs/api-key.md
translation_models:
  - google/gemini-2.5-flash
---



Transrewrt necessita dell'accesso ad almeno un provider AI. **Non** è necessario un modello a pagamento per iniziare: OpenRouter offre modelli gratuiti dopo aver aggiunto una chiave, e molti altri provider offrono anche livelli gratuiti.

I provider supportati includono [OpenRouter](https://openrouter.ai), OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras, NVIDIA, Alibaba Cloud, apikey.fun, qualsiasi endpoint compatibile con OpenAI e server locali compatibili con OpenAI (Ollama, LM Studio, llama.cpp e simili).

## Facile vs Avanzato

- Modalità **Facile** (predefinita): scegli un **preset** (Gratuito (OpenRouter), Standard, Avanzato o Tecnico) mappato a un **provider**. Vengono visualizzati solo i preset con una mappatura per il provider corrente.
- Modalità **Avanzata**: scegli i modelli direttamente. Gli ID dei modelli utilizzano un prefisso del provider (ad esempio `openrouter/…`, `openai/…`, `local/…`).

## Chiave OpenRouter gratuita (desktop)

1. Vai su [openrouter.ai](https://openrouter.ai) e registrati o accedi.
2. Apri la pagina [Keys](https://openrouter.ai/keys) e crea una nuova chiave (assegnale un nome; limite di credito opzionale). Puoi usare modelli gratuiti senza aggiungere credito.
3. In Transrewrt, apri **Impostazioni → Configurazione API**, incolla la chiave in **Chiave API OpenRouter** e fai clic su **Testa chiave OpenRouter**.

:::caution
Non utilizzare il modello **Body Builder** di OpenRouter (`openrouter/bodybuilder`) per tradurre, riscrivere o trasformare: restituisce payload di richieste JSON, non testo completato.
:::

## Altre opzioni gratuite

È possibile ottenere chiavi API gratuite anche da Cerebras, Google, Groq, Mistral AI o [NVIDIA](https://build.nvidia.com/) (API compatibile con OpenAI), oppure eseguire modelli localmente con Ollama, LM Studio, llama.cpp o un altro server compatibile con OpenAI (ad esempio `translategemma:4b` tramite Ollama). Impostare l'URL di base LLM locale sull'API base completa (includere il percorso, ad esempio `http://localhost:11434/v1`) in Impostazioni (desktop) o `LOCAL_LLM_URL` (Docker).

:::caution
Se utilizzi un server LLM locale da un altro dispositivo o container, configuralo per consentire connessioni esterne (non solo localhost).
:::

## Docker / web

Impostare le chiavi del provider come **variabili d'ambiente** sul server (ad esempio `PROVIDER_API_KEY`). Gli utenti non possono digitare le chiavi nell'interfaccia utente del browser. Vedere [Configurazione](/docs/configuration/).

## Lista di controllo per il primo avvio

1. Apri l'app e imposta la **lingua dell'interfaccia** se necessario.
2. Aggiungi e testa almeno una chiave del provider (desktop) o conferma che il server abbia le chiavi env (web).
3. In modalità **Facile**, scegli un **Provider** nelle Impostazioni generali; in modalità **Avanzata**, aggiungi i modelli in **Impostazioni → Modelli**.
4. Su **Traduci**, scegli un preset o un modello ed esegui un breve test — vedi [Traduci testo](/docs/translate/).
