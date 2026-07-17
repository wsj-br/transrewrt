---
title: Setări
description: >-
  Referință compactă pentru General, Modele, Limbi, Glosar, Cost, Transformare,
  Utilizatori, API și Despre.
translation_last_updated: '2026-07-17T21:14:48.322Z'
source_file_mtime: '2026-07-17T14:37:21.849Z'
source_file_hash: 492e5fd37f4a6b282502282d4f2728047a0d09ae8c30334b3c8388a5ce6e9f68
translation_language: ro
source_file_path: src/content/docs/docs/settings.md
translation_models:
  - google/gemini-2.5-flash
---



Deschideți **Setări** din bara laterală pentru a personaliza comportamentul aplicației.

| Fila | Desktop | Web (admin) | Web (utilizator) | Note |
| --- | :---: | :---: | :---: | --- |
| Setări generale | da | da | da | Include **experiența AI** (Ușor / Avansat) |
| Modele | da | da | da | Numai când **experiența AI** este **Avansată** |
| Limbi | da | da | da | |
| Urmărire costuri | da | da | — | |
| Transformare | da | da | da | Import/export în masă de prompturi |
| Glosar | da | da | da | Perechi de termeni pentru traducere |
| Utilizatori | — | da | — | |
| Configurare API | da | da | — | |
| Despre | da | da | da | |

În modul **Ușor**, alegeți AI prin presetări în bara de instrumente și **Furnizor** în Setări generale; fila **Modele** este ascunsă.

:::noteNotă
În versiunea web, fiecare utilizator are propria configurație (experiență AI, furnizor, modele/presetări, limbi, opțiuni, prompturi). Modificările nu afectează alți utilizatori.
:::

## Setări generale

**Experiența AI**

- **Ușor** (implicit): alegeți un **Furnizor**. Furnizorii de cloud utilizează presetări de bare de instrumente (**Gratuit (OpenRouter)**, **Standard**, **Avansat**, **Tehnic**). **LLM local** listează în schimb modelele locale instalate. **Reîmprospătare catalog presetări** preia cea mai recentă listă de presetări din depozitul proiectului.
- **Avansat**: alegeți modele din bara de instrumente; gestionați lista sub [Modele](#models).

**Aspect** — Temă; **Afișează informații despre costuri la acțiuni**; **Cifre fracționare cost**; margine doar pentru web în jurul aplicației; **Familie de fonturi** și **Dimensiune**.

**Comportament** — **Comportament pentru ENTER**; **Executare automată la lipire**; **Copiere automată rezultat în clipboard**; **Traducere în timp real în timpul tastării**; **Timp de expirare (ms)**.

**Istoric**

- **Păstrați istoricul execuției** — stocați intrările/ieșirile pentru vizualizarea [Istoric](/docs/history/). Dezactivarea solicită confirmare și poate elimina textul stocat. Dacă este etichetat *dezactivat de administrator*, `HISTORY_DISABLED` este setat — consultați [Configurație](/docs/configuration/#privacy-mode).
- **Ștergeți datele istoricului** — eliminați textul stocat în funcție de vechime sau ștergeți tot. **Nu** șterge totalurile costurilor (utilizați Urmărirea costurilor pentru asta).

**Backup configurație** (administratori desktop și web)

- Opțional **Includeți datele de utilizare în backup**
- **Configurație backup** — ZIP cu configurație, stare, utilizatori, preferințe, prompturi și date de utilizare opționale
- **Restaurare din backup** — dialog de confirmare cu opțiuni de restaurare și/sau ștergere a datelor de utilizare

Backup-urile pot fi mutate între desktop și web; restaurarea unui backup desktop pe web aplică datele utilizatorului administrator.

## Modele

Disponibil doar în modul **Avansat**.

![Setări fila Modele](/images/screenshots/ro/settings-general.png)

- **Modele disponibile** (stânga) și **Modele selectate** (dreapta)
- Căutare, etichete **Furnizor**, **Doar gratuit**, **Reîmprospătare**, Extinde/Restrânge tot
- ID-urile modelului utilizează un prefix de furnizor (`openrouter/…`, `openai/…`, `local/…`, …)

:::caution
Nu utilizați OpenRouter **Body Builder** (`openrouter/bodybuilder`) pentru Traducere, Rescriere sau Transformare — returnează sarcini utile de solicitare JSON, nu text finalizat.
:::

Adăugați cu **Adăugați**; eliminați cu **X**. **Deselectați tot** păstrează modelul gratuit necesar.

## Limbi

- **Limbi de top** — fixate în partea de sus a listelor de limbi în Traducere și Transformare
- **Limbă personalizată** — adăugați o limbă care lipsește din lista încorporată

## Urmărirea costurilor

- **Cost total**, **Copiere valoare**, **Resetare cost**
- **Sincronizare cu utilizarea cheii API** — aliniere cu utilizarea contului OpenRouter (doar OpenRouter)
- **Utilizare cheie API** — detalii OpenRouter când sunt disponibile
- **Ștergere date costuri** — toate datele sau intrările mai vechi decât o anumită dată

OpenRouter afișează costul real facturat atunci când este cazul; alți furnizori utilizează estimări din prețurile OpenRouter. Estimările nu sunt facturi.

:::caution
Ștergerea datelor de cost nu poate fi anulată. Exportați mai întâi prin Istoric sau Tablou de bord → Toate apelurile dacă aveți nevoie de un backup. Istoricul de intrare/ieșire aferent pentru acele apeluri API este, de asemenea, eliminat.
:::

## Transformare

Gestionați în bloc prompturile: revizuiți, ștergeți, importați, exportați și încărcați prompturi eșantion.

## Glosar

Gestionați perechile de termeni aplicate în timpul [traducerii](/docs/translate/#use-the-glossary). Fiecare termen are limbă sursă/țintă și text sursă/țintă.

- Adăugați prin rândul de jos și **+**
- Filtrați după limbi sau text
- Importați/exportați CSV sau XLSX; descărcați șabloane goale

Desktop stochează glosarul local; web îl stochează per utilizator.

## Utilizatori

Doar web (administratori): adăugați utilizatori, actualizați detalii, resetați parole, ștergeți conturi.

## Configurare API

Configurați doar furnizorii pe care îi utilizați: OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras, NVIDIA, Alibaba Cloud, apikey.fun, **LLM local** (URL de bază pentru Ollama, LM Studio, llama.cpp sau similar) și un furnizor personalizat opțional compatibil cu OpenAI.

**Web (administrator):** cheile provin din variabilele de mediu — această pagină arată care sunt setate și vă permite să **Testați**. Reporniți după modificarea variabilelor de mediu. Consultați [Configurare](/docs/configuration/).

**Desktop:** introduceți cheile (sau URL-ul LLM local) și **Salvați** / **Editați** / **Testați**. Cheile sunt stocate criptat; nu puteți vizualiza valoarea curentă, ci doar o puteți înlocui.

:::tip
Nu este necesară o cheie plătită pentru a începe: utilizați modele OpenRouter gratuite, alți furnizori cu nivel gratuit sau un server local compatibil cu OpenAI, cum ar fi [Ollama](https://ollama.com), LM Studio sau llama.cpp (de exemplu, `translategemma:4b`).
:::

## Despre

Numele aplicației, versiunea, data construirii, licența, notificările terților și linkul către depozit.
