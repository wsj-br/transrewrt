---
title: Setări
description: >-
  Referință compactă pentru General, Modele, Limbi, Glosar, Cost, Transformare,
  Utilizatori, API și Despre.
---



Deschideți **Setări** din bara laterală pentru a personaliza comportamentul aplicației.

| Fila | Desktop | Web (admin) | Web (utilizator) | Note |
| --- | :---: | :---: | :---: | --- |
| Setări generale | da | da | da | Include **Experiența AI** (Ușor / Avansat) |
| Modele | da | da | da | Doar când **Experiența AI** este **Avansată** |
| Limbi | da | da | da | |
| Urmărirea costurilor | da | da | — | |
| Transformare | da | da | da | Import/export în masă de prompturi |
| Glosar | da | da | da | Perechi de termeni pentru traducere |
| Utilizatori | — | da | — | |
| Configurare API | da | da | — | |
| Despre | da | da | da | |

În modul **Ușor**, alegeți AI prin presetări în bara de instrumente și **Furnizor** în Setări generale; fila **Modele** este ascunsă.

:::note
În versiunea web, fiecare utilizator are propria configurație (experiență AI, furnizor, modele/presetări, limbi, opțiuni, prompturi). Modificările nu afectează alți utilizatori.
:::

## Setări generale

![Fila Setări generale](/images/screenshots/ro/settings-general.png)

**Experiența AI**

- **Ușor** (implicit): alegeți un **Furnizor**. Furnizorii cloud utilizează presetări din bara de instrumente. **LLM local** listează în schimb modelele locale instalate. **Reîmprospătare catalog presetări** preia cea mai recentă listă de presetări din depozitul proiectului.
  - **Gratuit (OpenRouter)** — opțiune fără costuri direcționată către modele gratuite disponibile; calitatea și disponibilitatea pot varia
  - **Standard** — ușor și eficient din punct de vedere al costurilor; cel mai bun pentru texte scurte, schițe rapide și utilizare în volum mare
  - **Avansat** — model de înaltă precizie pentru conținut complex sau nuanțat, la un cost mai mare
  - **Tehnic** — optimizat pentru cod, API-uri, documentație pentru dezvoltatori și conținut structurat; păstrează formatarea și terminologia
- **Avansat**: alegeți modele din bara de instrumente; gestionați lista sub [Modele](#models).

Puteți comuta, de asemenea, Ușor ↔ Avansat din meniul de presetări/modele din bara de instrumente (**Comutați la modul Ușor/Avansat**, deasupra Deschideți Setări).

**Aspect** — Temă; **Afișează informații despre costuri la acțiuni**; **Cifre zecimale cost**; marjă doar pe web în jurul aplicației; **Familia de fonturi** și **Dimensiunea**.

**Comportament** — **Comportament pentru ENTER**; **Execută automat la lipire**; **Copiază automat rezultatul în clipboard**; **Traducere în timp real în timpul tastării**; **Timeout (ms)**.

**Istoric**

- **Păstrați istoricul execuțiilor** — stochează intrările/ieșirile pentru vizualizarea [Istoric](/docs/history/). Dezactivarea solicită confirmare și poate elimina textul stocat. Dacă este etichetat ca *dezactivat de administrator*, `HISTORY_DISABLED` este setat — consultați [Configurare](/docs/configuration/#privacy-mode).
- **Ștergeți datele istoricului** — eliminați textul stocat în funcție de vechime sau ștergeți tot. **Nu** șterge totalurile costurilor (utilizați Urmărirea costurilor pentru aceasta).

**Backup configurație** (administratori desktop și web)

- Opțional **Include date de utilizare în backup**
- **Configurație backup** — ZIP cu configurație, stare, utilizatori, preferințe, prompturi și date de utilizare opționale
- **Restaurare din backup** — dialog de confirmare cu opțiuni de restaurare și/sau ștergere a datelor de utilizare

Backup-urile pot fi mutate între desktop și web; restaurarea unui backup desktop pe web aplică datele utilizatorului administrator.

## Modele

Disponibil doar în modul **Avansat**.

- **Modele disponibile** (stânga) și **Modele selectate** (dreapta)
- Căutare, etichete **Furnizor**, **Doar gratuit**, **Reîmprospătare**, Extinde/Restrânge tot
- ID-urile modelelor utilizează un prefix de furnizor (`openrouter/…`, `openai/…`, `local/…`, …)

:::tip
Nu utilizați OpenRouter **Body Builder** (`openrouter/bodybuilder`) pentru Traducere, Rescriere sau Transformare — acesta returnează sarcini utile de cerere JSON, nu text finalizat.
:::

Adăugați cu **Adaugă**; eliminați cu **X**. Modelul gratuit OpenRouter este opțional — modelele selectate pot fi goale. Eliminarea ultimului model din bara de instrumente deschide **Setări → Modele**. Dacă modelul curent devine indisponibil, aplicația selectează următorul model din listă în loc să forțeze modelul gratuit.

## Limbi

- **Limbi de top** — fixate în partea de sus a listelor de limbi în Traducere și Transformare
- **Limbă personalizată** — adăugați o limbă care lipsește din lista încorporată

## Urmărirea costurilor

- **Cost total**, **Copiază valoarea**, **Resetează costul**
- **Sincronizează cu utilizarea cheii API** — aliniere cu utilizarea contului OpenRouter (doar OpenRouter)
- **Utilizarea cheii API** — Detalii OpenRouter când sunt disponibile
- **Șterge datele de cost** — toate datele sau intrările mai vechi decât o anumită dată

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

Doar web (administratori):

- Adăugați utilizatori, actualizați detalii, resetați parole, ștergeți conturi
- **Timp de expirare sesiune** — cât durează o autentificare (de la 1 oră la 7 zile); modificările se aplică doar autentificărilor noi
- **Revocați sesiunile** — deconectați imediat un utilizator de pe toate dispozitivele

Fiecare utilizator autentificat (inclusiv non-administratorii) își poate schimba propria parolă sau se poate deconecta din meniul utilizatorului din partea de jos a barei laterale.

## Configurare API

Configurați doar furnizorii pe care îi utilizați: OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras, NVIDIA, Alibaba Cloud, apikey.fun, **LLM local** (URL de bază pentru Ollama, LM Studio, llama.cpp sau similar) și un furnizor personalizat opțional compatibil cu OpenAI.

**Web (administrator):** cheile provin din variabilele de mediu — această pagină arată care sunt setate și vă permite să **Testați**. Reporniți după modificarea variabilelor de mediu. Consultați [Configurare](/docs/configuration/).

**Desktop:** introduceți cheile (sau URL-ul LLM local) și **Salvați** / **Editați** / **Testați**. Cheile sunt stocate criptat; nu puteți vizualiza valoarea curentă, ci doar să o înlocuiți.

:::tip
Nu este necesară o cheie plătită pentru a începe: utilizați modele OpenRouter gratuite, alți furnizori cu nivel gratuit sau un server local compatibil cu OpenAI, cum ar fi [Ollama](https://ollama.com), LM Studio sau llama.cpp (de exemplu `translategemma:4b`).
:::

## Despre

Numele aplicației, versiunea, data construirii, licența, notificări de la terți și linkul către depozit.
