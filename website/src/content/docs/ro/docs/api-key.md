---
title: Cheie API
description: >-
  Conectați Transrewrt la un furnizor AI la alegere adăugând o cheie API sau
  utilizați un model local în schimb.
---



Transrewrt nu include propriul AI — trimite textul dvs. către un furnizor AI pe care îl alegeți. Pentru a conecta un furnizor, adăugați o **cheie API**: un cod privat, emis de furnizor, care funcționează ca o parolă pentru serviciul lor. Aveți nevoie de **un singur** furnizor pentru a începe și nu trebuie să plătiți: mai mulți furnizori oferă modele gratuite sau niveluri gratuite și puteți rula modele pe propriul computer fără nicio cheie.

Furnizorii acceptați includ OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras, NVIDIA, Alibaba Cloud, apikey.fun, orice endpoint compatibil OpenAI și servere locale compatibile OpenAI (Ollama, LM Studio, llama.cpp și similare).

## Pasul 1 — Alegeți un furnizor

Orice furnizor acceptat funcționează. Dacă nu sunteți sigur pe care să-l alegeți:

- **Gratuit pentru a începe**: OpenRouter, Google Gemini, Groq, Mistral, Cerebras și NVIDIA oferă toate modele gratuite sau niveluri gratuite.
- **Aveți deja un cont?** Dacă utilizați deja OpenAI, Anthropic sau un alt furnizor acceptat, puteți pur și simplu să reutilizați acel cont.
- **Preferiți să păstrați totul pe propriul computer?** Omiteți complet cheia și utilizați un [model local](#using-a-local-model-instead-no-api-key) în schimb.

## Pasul 2 — Creați o cheie API

Pașii exacți variază ușor în funcție de furnizor, dar modelul este același peste tot:

1. Înregistrați-vă sau conectați-vă pe site-ul web al furnizorului. În **Settings → API Config** din Transrewrt, fiecare furnizor are un link **Open provider website** care vă duce la locul potrivit.
2. Găsiți pagina **API keys** (uneori sub setările contului, tabloului de bord sau dezvoltatorului) și creați o cheie nouă. Unii furnizori vă cer să denumiți cheia sau să setați o limită de cheltuieli — ambele sunt opționale.
3. Copiați cheia. Este un șir lung de litere și numere, adesea începând cu ceva de genul `sk-`.

:::note
Tratați o cheie API ca pe o parolă: nu o partajați, nu o postați și nu o trimiteți nimănui. Dacă o cheie se scurge, ștergeți-o de pe site-ul furnizorului și creați una nouă.
:::

## Pasul 3 — Adăugați și testați cheia (desktop)

1. În Transrewrt, deschideți **Settings → API Config**.
2. Inserați cheia în câmpul pentru furnizorul dvs. (de exemplu **Google Gemini API key**) și salvați-o.
3. Faceți clic pe **Test** lângă câmp pentru a confirma că cheia funcționează.

Odată ce testul reușește, sunteți gata — alegeți acel furnizor pe ecranul principal și începeți să traduceți.

## Utilizarea unui model local în schimb (fără cheie API)

Puteți rula modele pe propriul computer cu Ollama, LM Studio, llama.cpp sau un alt server compatibil OpenAI (de exemplu `google/gemma-4-e2b` prin LM Studio). Nimic nu părăsește mașina dvs. și nu este necesară nicio cheie API.

Pentru a conecta unul, setați URL-ul de bază Local LLM la baza API completă, inclusiv calea — de exemplu `http://localhost:11434/v1`. Pe desktop, setați acest lucru în **Settings → API Config**; pe Docker, setați în schimb variabila de mediu `LOCAL_LLM_URL`.

:::tip
Dacă utilizați un server LLM local de pe un alt dispozitiv sau container, configurați-l să permită conexiuni externe (nu doar localhost).
:::

## Docker / web

Dacă utilizați Transrewrt într-un browser, cheile sunt gestionate de cel care rulează serverul, nu sunt tastate în interfața de utilizare a browserului. Administratorul setează cheile furnizorului ca **variabile de mediu** pe server (de exemplu `PROVIDER_API_KEY`) — consultați [Configuration](/docs/configuration/).

## Lista de verificare pentru prima rulare

1. Deschideți aplicația și setați **Interface language** dacă este necesar.
2. Adăugați și testați cel puțin o cheie de furnizor — sau configurați un model local (desktop), sau confirmați că serverul are chei de mediu (web).
3. În modul **Easy**, alegeți un **Provider** în General Settings; în **Advanced**, adăugați modele sub **Settings → Models** — consultați [Settings](/docs/settings/#general-settings) pentru cele două moduri.
4. Pe **Translate**, alegeți o presetare sau un model și rulați un test scurt — consultați [Translate text](/docs/translate/).

## Dacă ceva nu funcționează

- **Testul cheii eșuează**: verifică dacă cheia a fost copiată complet (fără spații înainte sau după) și dacă nu a fost ștearsă sau dezactivată pe site-ul furnizorului.
- **Traducerile eșuează cu o eroare de cotă sau credit**: nivelurile gratuite au limite zilnice sau lunare; așteaptă, treci la un alt furnizor gratuit sau adaugă credit.
- **Niciun furnizor nu apare în modul Ușor**: deschide **Setări → Configurare API** și confirmă că cel puțin o cheie (sau URL-ul LLM local) este configurată și testată.

Mai mult ajutor: [Probleme comune](/docs/common-issues/).
