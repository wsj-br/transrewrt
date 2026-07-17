---
title: Cheie API
description: >-
  Obțineți o cheie API OpenRouter gratuită și conectați alți furnizori AI la
  Transrewrt.
---



Transrewrt are nevoie de acces la cel puțin un furnizor de AI. Nu ai **nevoie** de un model plătit pentru a începe: OpenRouter oferă modele gratuite după ce adaugi o cheie, iar mai mulți alți furnizori oferă, de asemenea, niveluri gratuite.

Furnizorii acceptați includ [OpenRouter](https://openrouter.ai), OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras, NVIDIA, Alibaba Cloud, apikey.fun, orice punct de capăt compatibil cu OpenAI și servere locale compatibile cu OpenAI (Ollama, LM Studio, llama.cpp și altele).

## Ușor vs Avansat

- **Modul ușor** (implicit): alegeți un **preset** (Free (OpenRouter), Standard, Avansat sau Tehnic) asociat unui **furnizor**. Numai preseturile cu o asociere pentru furnizorul curent sunt afișate.
- **Modul avansat**: selectați direct modelele. Id-urile modelului utilizează un prefix de furnizor (de exemplu `openrouter/…`, `openai/…`, `local/…`).

## Cheie OpenRouter gratuită (desktop)

1. Accesați [openrouter.ai](https://openrouter.ai) și înregistrați-vă sau conectați-vă.
2. Deschideți pagina [Chei](https://openrouter.ai/keys) și creați o cheie nouă (numiți-o; limită de credit opțională). Puteți utiliza modele gratuite fără a adăuga credit.
3. În Transrewrt, deschideți **Setări → Configurare API**, lipiți cheia în **Cheie API OpenRouter** și faceți clic pe **Testare cheie OpenRouter**.

:::caution
Nu utilizați modelul **Body Builder** (`openrouter/bodybuilder`) al OpenRouter pentru traducere, rescriere sau transformare – acesta returnează sarcini utile de cerere JSON, nu text finalizat.
:::

## Alte opțiuni gratuite

Puteți obține, de asemenea, chei API gratuite de la Cerebras, Google, Groq, Mistral AI sau [NVIDIA](https://build.nvidia.com/) (API compatibil cu OpenAI), sau puteți rula modele local cu Ollama, LM Studio, llama.cpp sau un alt server compatibil cu OpenAI (de exemplu `translategemma:4b` prin Ollama). Setați URL-ul de bază Local LLM la baza API completă (includeți calea, de exemplu `http://localhost:11434/v1`) în Setări (desktop) sau `LOCAL_LLM_URL` (Docker).

:::caution
Dacă utilizați un server LLM local de pe un alt dispozitiv sau container, configurați-l pentru a permite conexiuni externe (nu numai localhost).
:::

## Docker / web

Setați cheile furnizorului ca **variabile de mediu** pe server (de exemplu `PROVIDER_API_KEY`). Utilizatorii nu pot introduce cheile în interfața de utilizator a browserului. Consultați [Configurare](/docs/configuration/).

## Lista de verificare pentru prima rulare

1. Deschideți aplicația și setați **Limba interfeței** dacă este necesar.
2. Adăugați și testați cel puțin o cheie de furnizor (desktop) sau confirmați că serverul are chei de mediu (web).
3. În modul **Ușor**, alegeți un **Furnizor** în Setări generale; în modul **Avansat**, adăugați modele sub **Setări → Modele**.
4. Pe **Traducere**, alegeți o presetare sau un model și rulați un test scurt — consultați [Traducere text](/docs/translate/).
