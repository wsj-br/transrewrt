---
translated_at: "2026-03-25T22:30:38.863Z"
source_hash: "6ca7b21e820e8ee121cd93bbf98806547c5c3ce7914799891d923201bd2c4466"
source_mtime: 1774468804877.8855
model: "qwen/qwen3-235b-a22b-2507"
---
![Transrewrt banner](../images/transrewrt_banner.png)


<a id="transrewrt-user-guide"></a>
# Ghidul utilizatorului

<br/>

<a id="introduction"></a>
## Introducere

Transrewrt vă ajută să lucrați cu textul în trei moduri principale:

- **Traducere** - transformarea textului dintr-o limbă în alta.
- **Rescriere** - reformularea textului într-un stil diferit, cum ar fi mai clar, mai scurt sau mai formal.
- **Transformare** - procesarea textului folosind instrucțiuni AI personalizate numite prompturi.

<br/>

Acest ghid explică cum să utilizați aplicația după ce a fost instalată și pornită. Pentru pașii de instalare, consultați fișierul principal **[README](README.ro.md)**.

<br/>

> ℹ️ **NOTĂ**<br/>
> Transrewrt este disponibil ca aplicație desktop pentru Windows și Linux și ca aplicație web auto-găzduită. Acest ghid se concentrează pe utilizarea zilnică a aplicației. Atunci când un lucru se aplică doar unei anumite variante, acesta este marcat clar.

<small>**Traduceri disponibile în alte limbi:** [English (UK)](USER-GUIDE.ro.md) · [Português (BR)](USER-GUIDE.pt-BR.md) · [العربية](USER-GUIDE.ar.md) · [বাংলা](USER-GUIDE.bn.md) · [Català](USER-GUIDE.ca.md) · [简体中文](USER-GUIDE.zh-CN.md) · [繁體中文](USER-GUIDE.zh-TW.md) · [Hrvatski](USER-GUIDE.hr.md) · [Čeština](USER-GUIDE.cs.md) · [Nederlands](USER-GUIDE.nl.md) · [English (US)](USER-GUIDE.en-US.md) · [Filipino](USER-GUIDE.tl.md) · [Français](USER-GUIDE.fr.md) · [Deutsch](USER-GUIDE.de.md) · [Ελληνικά](USER-GUIDE.el.md) · [हिन्दी](USER-GUIDE.hi.md) · [Magyar](USER-GUIDE.hu.md) · [Italiano](USER-GUIDE.it.md) · [日本語](USER-GUIDE.ja.md) · [Basa Jawa](USER-GUIDE.jv.md) · [한국어](USER-GUIDE.ko.md) · [Bahasa Melayu](USER-GUIDE.ms.md) · [فارسی](USER-GUIDE.fa.md) · [Polski](USER-GUIDE.pl.md) · [Português (PT)](USER-GUIDE.pt.md) · [ਪੰਜਾਬੀ](USER-GUIDE.pa.md) · [Română](USER-GUIDE.ro.md) · [Русский](USER-GUIDE.ru.md) · [Slovenčina](USER-GUIDE.sk.md) · [Español](USER-GUIDE.es.md) · [Kiswahili](USER-GUIDE.sw.md) · [Svenska](USER-GUIDE.sv.md) · [తెలుగు](USER-GUIDE.te.md) · [ภาษาไทย](USER-GUIDE.th.md) · [Türkçe](USER-GUIDE.tr.md) · [Українська](USER-GUIDE.uk.md) · [Tiếng Việt](USER-GUIDE.vi.md)</small>

<small>

> **Notă privind traducerile interfeței și documentației:** Toate limbile de interfață, cu excepția limbii engleze (UK) originale,
> au fost traduse folosind modele AI; formularea poate fi imprecisă sau poate conține erori.

</small>

<br/>


<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Cuprins** 

- [Înainte de a începe](#before-you-start)
  - [Cum obțineți o cheie API gratuită OpenRouter (aplicație desktop)](#how-to-get-a-free-openrouter-api-key-desktop-app)
- [Primii pași](#getting-started)
- [Părțile principale ale ferestrei](#main-parts-of-the-window)
  - [Bara laterală](#sidebar)
  - [Bara de unelte](#toolbar)
  - [Panourile de intrare și ieșire](#input-and-output-panels)
- [Traducere](#translate)
  - [Traduceți text](#translate-text)
  - [Selectarea limbilor](#language-selection)
  - [Setări utile pentru traducere](#helpful-translation-settings)
- [Rescriere](#rewrite)
- [Transformare](#transform)
  - [Executați un prompt existent](#run-an-existing-prompt)
  - [Dacă nu aveți încă prompturi](#if-you-have-no-prompts-yet)
  - [Creați un prompt rapid](#create-a-prompt-quickly)
  - [Editați un prompt](#edit-a-prompt)
  - [Testați un prompt înainte de a-l folosi](#test-a-prompt-before-using-it)
- [Panoul de control](#dashboard)
  - [Filtrarea datelor](#filter-the-data)
  - [Filele panoului de control](#dashboard-tabs)
  - [Exportarea datelor](#export-data)
  - [Ștergerea înregistrărilor stocate pentru un model](#delete-stored-records-for-a-model)
- [Istoric](#history)
  - [Filtrarea datelor](#filter-the-data-1)
  - [Exportarea datelor istoricului](#export-history-data)
- [Setări](#settings)
  - [Setări generale](#general-settings)
  - [Modele](#models)
  - [Limbi](#languages)
  - [Urmărirea costurilor](#cost-tracking)
  - [Prompturi de transformare](#transform-prompts)
  - [Utilizatori](#users)
  - [Configurație API](#api-config)
  - [Despre](#about)
- [Probleme frecvente](#common-issues)
  - [Aplicația nu traduce, rescrie sau transformă textul](#the-app-will-not-translate-rewrite-or-transform-text)
  - [Lista modelelor este goală](#the-model-list-is-empty)
  - [Rezultatul este prea lent sau prea scump](#the-result-is-too-slow-or-too-expensive)
  - [Interfața este într-o limbă greșită](#the-interface-is-in-the-wrong-language)
  - [Textul este prea mic sau greu de citit](#the-text-is-too-small-or-hard-to-read)
  - [Graficele panoului de control sunt goale](#dashboard-charts-are-empty)
  - [Costul apare ca „nedisponibil” sau pare greșit](#cost-shows-not-available-or-seems-wrong)
  - [Costul total nu se potrivește cu factura furnizorului](#total-cost-does-not-match-my-provider-bill)
  - [Pagina Istoric lipsește din bara laterală](#the-history-page-is-missing-from-the-sidebar)
  - [Aplicație web: redirecționat neașteptat la pagina de autentificare](#web-app-redirected-to-the-login-page-unexpectedly)
  - [Panoul de control nu afișează date pentru alți utilizatori (web)](#dashboard-shows-no-data-for-other-users-web)
  - [Am modificat un prompt și am pierdut modificările](#i-changed-a-prompt-and-lost-the-edits)
- [Sfaturi rapide](#quick-tips)
- [Declinarea răspunderii](#disclaimer)
- [Licență](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="before-you-start"></a>

## Înainte de a începe

Pentru a utiliza Transrewrt, aveți nevoie de acces la cel puțin un furnizor de IA. Furnizorii susținuți sunt: [OpenRouter](https://openrouter.ai) (care agregă multe modele), OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras și [Ollama](https://ollama.com) pentru modele locale.

Nu este necesar să alegeți un model plătit pentru a începe. Odată ce adăugați cheia dvs. API OpenRouter, aplicația activează automat o opțiune **gratuită** integrată OpenRouter. Acest lucru vă permite să începeți traducerea, rescrierea și transformarea textului imediat. Alternativ, puteți obține și o cheie API gratuită de la Cerebras, Google, Groq sau Mistral AI.

În termeni simpli:

- Un **model** este motorul de IA care face lucrul. Modelele sunt listate cu un **prefix furnizor** (de exemplu `openrouter/…`, `openai/…`, `ollama/…`).
- O **cheie API** (sau, pentru Ollama, o **URL de bază**) este modul în care aplicația accesează acel furnizor.

Dacă utilizați **aplicația desktop**, adăugați cheile în [**Setări** > **Configurare API**](#api-config) pentru fiecare furnizor pe care îl folosiți. Pentru utilizarea exclusivă OpenRouter, consultați mai jos [Cum obțineți o cheie API](#how-to-get-an-api-key-desktop-app). Dacă nu doriți să utilizați o cheie API, puteți instala Ollama (de la [ollama.com](https://ollama.com)) și folosi modele locale în loc, cum ar fi `translategemma:4b`.

Dacă utilizați **versiunea web**, proprietarul serverului configurează furnizorii prin variabile de mediu, deci nu puteți introduce cheile API direct în aplicație.

<br/>

<a id="how-to-get-an-api-key-desktop-app"></a>
### Cum obțineți o cheie API gratuită OpenRouter (aplicație desktop)

Dacă utilizați aplicația desktop, urmați acești pași:

1. Accesați [OpenRouter](https://openrouter.ai) în browserul dvs. web.
2. Creați un cont sau autentificați-vă.
3. Deschideți pagina [Chei](https://openrouter.ai/keys).
4. Faceți clic pe butonul pentru a crea o cheie API nouă.
5. Dați cheii un nume, astfel încât să o puteți recunoaște ulterior.
6. Copiați noua cheie API.
7. Întoarceți-vă la Transrewrt și deschideți **Setări** > **Configurare API**.
8. Lipiți cheia în câmpul **Cheie API OpenRouter** (sub **Setări** > **Configurare API**).
9. Faceți clic pe **Test cheie OpenRouter** pentru a vă asigura că funcționează.

<br/><br/>

<a id="getting-started"></a>
## Pregătirea inițială

Dacă este prima dată când utilizați Transrewrt, urmați această ordine:

1. Deschideți aplicația.
2. Alegeți **limba interfeței** din pictograma globului, dacă este necesar.
3. Dacă utilizați **aplicația desktop**, deschideți [**Setări** > **Configurare API**](#api-config), adăugați o cheie API pentru cel puțin un furnizor (de exemplu OpenRouter) și faceți clic pe **Test** pentru a verifica dacă funcționează.
4. Deschideți [**Setări** > **Modele**](#models) și adăugați unul sau mai multe modele la **Modele selectate**.
5. Deschideți [**Setări** > **Limbi**](#languages) și alegeți **Limbi principale**, dacă doriți ca limbile dvs. preferate să apară primele.
6. Accesați **Traducere** și efectuați o traducere simplă pentru a vă asigura că totul funcționează.
7. Odată ce aceasta funcționează, încercați **Rescriere**, apoi **Transformare**.

Această ordine este importantă. Evită problema cea mai comună la prima utilizare: încercarea de a executa o sarcină înainte ca aplicația să aibă o conexiune API funcțională sau un model selectat.

<br/><br/>

<a id="main-parts-of-the-window"></a>
## Părțile principale ale ferestrei

Aplicația este împărțită în trei zone principale:

- **Bara laterală**, în stânga.
- **Bara de unelte**, în partea de sus.
- **Zona de lucru**, în centru.

<br/>

<a id="sidebar"></a>
### Bara laterală

Utilizați bara laterală pentru a naviga în cadrul aplicației. Puteți ascunde bara laterală pentru a obține mai mult spațiu, făcând clic pe pictograma din partea stângă a logoului aplicației.

<br/>

<table>
  <tr>
    <td valign="top">
       <img src="../images/screenshots/ro/sidebar.png" alt="Bară laterală aplicație" style="max-width: 100%; border: 1px solid #ddd; border-radius: 4px;">
    </td>
    <td valign="top">
      <br/><br/>
      <ul>
        <li><strong>Traducere</strong> deschide spațiul de lucru pentru traducere.</li><br/>
        <li><strong>Rescriere</strong> deschide spațiul de lucru pentru rescriere.</li><br/>
        <li><strong>Transformare</strong> deschide spațiul de lucru pentru prompt personalizat.</li><br/>
        <li><strong>Tablou de bord</strong> afișează informații despre utilizare și costuri.</li><br/>
        <li><strong>Setări</strong> deschide panoul de setări.</li><br/>
        <li><strong>Istoric</strong> afișează istoricul utilizării, cu textul introdus și cel generat.</li><br/>
        <li><strong>Utilizator</strong> afișează numele utilizatorului autentificat (numai pentru versiunea web).</li>
      </ul>
    </td>
  </tr>
</table>

<br/>

<a id="toolbar"></a>

### Bara de instrumente

Bara de instrumente se modifică ușor în funcție de locul în care vă aflați în aplicație.

- În partea stângă, este afișat numele paginii curente.
- În partea dreaptă, găsiți **selectorul de model** și controlul pentru **limba interfeței**.

**Selectorul de model** vă permite să alegeți ce motor de inteligență artificială să folosiți pentru sarcina curentă.

  ![Selector de model](../images/screenshots/ro/model-selector.png)

Unele modele gratuite pot să nu fie mereu disponibile — uneori sunt offline sau au un limită de utilizare. Dacă se întâmplă acest lucru, aplicația va elimina automat modelul respectiv din lista dvs. disponibilă. Pentru a controla modelele afișate, accesați [**Setări** > **Modele**](#models) și editați lista de modele.  
De asemenea, puteți deschide setările modelului direct, făcând clic pe pictograma furnizorului din stânga numelui modelului din bara de instrumente.

<br/>

Pictograma **cu globul pământesc + codul limbii** schimbă limba interfeței aplicației, cum ar fi meniurile și butoanele. Aceasta **nu** schimbă limbile de traducere utilizate în **Traducere**.

  ![Selectorul limbii interfeței](../images/screenshots/ro/language-selector.png)

<br/>

<a id="input-and-output-panels"></a>
### Panouri de intrare și ieșire

Majoritatea spațiilor de lucru folosesc un panou **Intrare** pe partea stângă și un panou **Ieșire** pe partea dreaptă.

Fiecare panou afișează de asemenea:

| **Intrare**                                                          | **Ieșire**                                                                                                                  |
|----------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------|
| - Numărul de caractere <br/>- Numărul de cuvinte <br/>- Numărul de paragrafe   <br/> | - Durata sarcinii <br/>- **TPS** (tokenuri pe secundă) <br/>- Numărul de caractere, cuvinte și paragrafe <br/>- Modelul utilizat |


Dacă vă întrebați despre termenii tehnici:

- **Token** înseamnă o bucată mică de text. Puteți gândi la acesta ca fiind o parte a unui cuvânt sau un cuvânt scurt.
- **TPS** înseamnă câte dintre aceste bucăți de text procesează modelul în fiecare secundă.

<br/>

De asemenea, puteți monitoriza costul fiecărei operații (dacă este disponibil) și costul total, activând opțiunea `Afișează informații despre cost în acțiuni` din [**Setări** > **Setări generale**](#general-settings).

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="translate"></a>
## Traducere

Utilizați **Traducere** atunci când doriți să convertiți text dintr-o limbă în alta.

![Spațiu de lucru pentru Traducere](../images/screenshots/ro/translate.png)

<br/>

<a id="translate-text"></a>
### Traduceți text

1. Deschideți **Traducere**.
2. Alegeți o limbă în **De la**.
3. Alegeți o limbă în **Către**.
4. Alegeți un model din bara de instrumente.
5. Tastați sau inserați text în **Intrare**.
6. Apăsați pe **Traduce**.
7. Citiți rezultatul în **Ieșire**.
8. Utilizați butonul de copiere dacă doriți să copiați rezultatul.

<br/>

<a id="language-selection"></a>
### Selectarea limbii

- **De la** poate fi o limbă specifică sau **Detectează limba**.
- **Către** este limba în care doriți să obțineți rezultatul.

Limbele dvs. **preferate** apar în partea de sus a listei. Puteți stabili acestea în [**Setări** > **Limbi**](#languages).

<br/>

<a id="helpful-translation-settings"></a>
### Setări utile pentru traducere

În [**Setări** > **Setări generale**](#general-settings), puteți modifica comportamentul traducerii:

- **Traducere automată la inserare** execută o traducere imediat ce inserați text.
- **Copiază automat rezultatul în clipboard** copiază automat rezultatul după un proces finalizat cu succes.
- **Traducere în timp real (pe măsură ce scrieți)** execută traduceri în timp ce tastați.
- **Timp de așteptare (ms)** controlează cât timp așteaptă aplicația înainte de a declanșa o traducere în timp real.
- **Enter** controlează ce se întâmplă când apăsați `Enter`:

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="rewrite"></a>
## Rescrie

Utilizați **Rescrie** atunci când doriți să îmbunătățiți formularea fără a schimba sensul principal.

![Spațiu de lucru pentru Rescrie](../images/screenshots/ro/rewrite.png)

Aceasta este utilă pentru:

- corectarea greșelilor de ortografie și gramatică
- clarificarea textului
- modificarea stilului (mai formal sau mai informal)
- scurtarea sau extinderea textului
- oferirea unui ton mai tehnic

<br/>

> 💡 **SFAT**<br/>
> Când utilizați modul "**Verifică ortografia și gramatica**", în panoul de ieșire apare un buton `Afișează modificările`.
> Faceți clic pe acest buton pentru a comuta afișarea corecțiilor, arătând sau ascundând modificările specifice aplicate textului dvs.


<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="transform"></a>

## Transformă

Utilizați **Transformă** atunci când doriți ca IA să urmeze un set personalizat de instrucțiuni.

![Spațiul de lucru Transformă](../images/screenshots/ro/transform.png)

Aceasta este cea mai flexibilă zonă a aplicației. O puteți folosi pentru sarcini precum:

- rezumarea notelor
- transformarea unui text brut într-un e-mail finalizat
- extragerea punctelor cheie
- convertirea textului într-un anumit format
- orice altă activitate personalizată cu textul de intrare

<br/>

<a id="run-an-existing-prompt"></a>
### Rularea unei cereri existente

1. Deschideți **Transformă**.
2. Alegeți o cerere din lista de cereri.
3. Dacă apare o casetă pentru limba **Țintă**, alegeți o limbă dacă doriți.
4. Tastați sau lipiți textul în câmpul **Intrare**.
5. Faceți clic pe **Transformă**.
6. Citiți rezultatul în câmpul **Ieșire**.

<br/>

<a id="if-you-have-no-prompts-yet"></a>
### Dacă nu aveți încă cereri

Dacă lista dvs. de cereri este goală, faceți clic pe **Încarcă cereri eșantion**. Aceasta adaugă exemple integrate pentru a putea începe rapid.

<br/>

> ℹ️ **NOTĂ**<br/>
> Cererile eșantion sunt furnizate în engleză. După încărcarea lor, puteți edita o cerere și utilizați **Tradu cererea** pentru a o traduce în limba dvs.

<br/>

<a id="create-a-prompt-quickly"></a>
### Crearea rapidă a unei cereri

Cel mai rapid mod de a crea o cerere este:

1. Faceți clic pe **Cerere nouă**.
2. Faceți clic pe **Generează cerere**.
3. Descrieți ce doriți să facă cererea.
4. Alegeți un model.
5. Lăsați aplicația să creeze un proiect pentru dvs.
6. Verificați proiectul și faceți clic pe **Salvează**.

![Generează cerere](../images/screenshots/ro/transform-generate.png)


<br/>

<a id="edit-a-prompt"></a>
### Editarea unei cereri

Când creați sau editați o cerere, editorul apare în stânga, iar o zonă de testare apare în dreapta.

![Editorul de cereri Transformă](../images/screenshots/ro/transform-prompt-edit.png)

Câmpurile principale sunt:

- **Numele cererii**: numele afișat în lista de cereri.
- **Instrucțiuni pentru cerere (opțional)**: un scurt mesaj de ajutor afișat utilizatorului atunci când rulați cererea.
- **Rolul modelului**: rolul general atribuit IA, de exemplu „Ești un asistent util.”
- **Instrucțiuni pentru model (una pe linie)**: regulile specifice pe care doriți ca IA să le urmeze.
- **Descriere ieșire**: un cuvânt scurt care descrie rezultatul, de exemplu „rezumat” sau „rescriere”.
- **Temperatură (0,0 → 1,0)**: modul în care se va comporta modelul; vezi mai jos.
- **Cereți limba țintă**: adaugă un selector de limbă țintă atunci când cererea este executată.

Dacă termenul tehnic **Temperatură** este nou pentru dvs., imaginați-vă astfel:

- O **temperatură mai mică** oferă rezultate mai stabile și mai previzibile.
- O **temperatură mai mare** oferă mai multă varietate și creativitate.

Puteți utiliza, de asemenea:

- **`Generează cerere`** pentru a crea un proiect nou pornind de la o descriere simplă
- **`Îmbunătățește cererea`** pentru a perfecționa o cerere existentă
- **`Tradu cererea`** pentru a traduce câmpurile cererii

<br/>

> ⚠️ **ATENȚIE**<br/>
> Faceți clic pe **`Salvează`** înainte de a face clic pe **`Înapoi la execuție`**. Dacă reveniți fără a salva, modificarile dvs. vor fi pierdute.

<br/>

<a id="test-a-prompt-before-using-it"></a>
### Testarea unei cereri înainte de a o folosi

Panoul de testare din dreapta vă permite să testați cererea cu un text eșantion înainte de a o utiliza în activitatea zilnică.

Acesta este util atunci când:

- construiți o cerere nouă
- comparați două versiuni ale unei cereri
- doriți să verificați tonul, lungimea sau formatul ieșirii

<br/>

> ℹ️ **NOTĂ**<br/>
> Puteți exporta și importa cererile salvate în [**Setări** > **Cereri Transformă**](#transform-prompts).

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="dashboard"></a>
## Tablou de bord

Utilizați **Tablou de bord** pentru a vedea cât de mult utilizați aplicația și care sunt costurile acesteia (pentru modelele plătite).

![Rezumatul tabloului de bord](../images/screenshots/ro/dashboard-summary.png)


<br/>

> ℹ️ **NOTĂ**<br/>
> Dacă utilizați doar modele gratuite, graficele legate de costuri vor fi goale.

<br/>

<a id="filter-the-data"></a>
### Filtrarea datelor

Utilizați butoanele de filtrare din partea de sus pentru a schimba intervalul de timp.

![Filtrele tabloului de bord](../images/screenshots/ro/dashboard-filter.png)

<br/>

> ℹ️ **NOTĂ**<br/>
> Filtrul **Utilizator** este vizibil doar administratorilor din versiunea web. Utilizatorii obișnuiți nu vor vedea acest filtru, iar acesta nu este disponibil în aplicația desktop.

<br/>

<a id="dashboard-tabs"></a>

### Fileuri ale tabloului de bord

- **Rezumat** vă oferă o prezentare generală privind utilizarea și costurile.
- **După utilizare** împarte activitatea pe limbă de traducere, mod de rescriere și prompt de transformare.
- **După model** arată ce modele ați utilizat și cât au costat.
- **După zi** arată totalurile zilnice.
- **Toate apelurile** arată istoricul complet al apelurilor și vă permite să-l exportați.

<br/>

<a id="export-data"></a>
### Exportarea datelor

Tabelele din tabloul de bord pot exporta datele în:

- **JSON**
- **CSV**
- **XLSX**

Aceasta este utilă dacă doriți să revizuiți activitatea în afara aplicației sau să distribuiți un raport.

<br/>

<a id="delete-stored-records-for-a-model"></a>
### Ștergerea înregistrărilor stocate pentru un model

În **După model** sau **Toate apelurile**, puteți elimina înregistrările stocate pentru un model făcând clic pe pictograma „coș de gunoi”.

> ⚠️ **ATENȚIE**<br/>
> Ștergerea înregistrărilor stocate nu poate fi anulată. Utilizați această opțiune doar dacă sunteți sigur că nu mai aveți nevoie de acest istoric.

Pentru a șterge toate datele sau a elimina înregistrări în funcție de vechimea lor, accesați [**Setări** > **Urmărire costuri**](#cost-tracking). Acolo veți găsi opțiuni pentru a șterge toate datele stocate sau doar datele mai vechi de o anumită dată.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="history"></a>
## Istoric

Faceți clic pe **Istoric** pentru a vedea istoricul acțiunilor dvs. din cadrul **Transrewrt**, inclusiv datele de intrare și ieșire pentru fiecare operațiune.

![Pagina istoric](../images/screenshots/ro/history.png)

<br/>

<a id="filter-the-history"></a>
### Filtrarea datelor

**Istoric** utilizează aceleași filtre ca și pagina **Tabloul de bord**. Utilizați-le pentru a selecta intervalul de timp.

![Filtre tablou de bord](../images/screenshots/ro/dashboard-filter.png)

<br/>

> ℹ️ **NOTĂ**<br/>
> Filtrul **Utilizator** este vizibil doar administratorilor în versiunea web. Utilizatorii obișnuiți nu vor vedea acest filtru, iar acesta nu este disponibil în aplicația desktop.

<br/>

<a id="export-history-data"></a>
### Exportarea datelor din istoric

Pagina de istoric poate exporta datele filtrate în:

- **JSON**
- **CSV**
- **XLSX**

Aceasta este utilă dacă doriți să revizuiți activitatea în afara aplicației sau să distribuiți un raport.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="settings"></a>
## Setări

Deschideți **Setări** din bara laterală pentru a personaliza modul de funcționare a aplicației.

Fileurile disponibile depind de platformă și de rolul dumneavoastră:

  | Filă                | Desktop | Web (admin) | Web (utilizator obișnuit) |
  |---------------------|:-------:|:-----------:|:------------------------:|
  | Setări generale     |   da    |     da      |           da             |
  | Modele              |   da    |     da      |           da             |
  | Limbi               |   da    |     da      |           da             |
  | Urmărire costuri    |   da    |     da      |            —             |
  | Prompturi transformare |   da |     da      |           da             |
  | Utilizatori         |    —    |     da      |            —             |
  | Configurare API     |   da    |     da      |            —             |
  | Despre              |   da    |     da      |           da             |

<br/>

> ℹ️ **NOTĂ**<br/>
> În versiunea web, fiecare utilizator are propria configurație. Setări precum modelele selectate, limbile, opțiunile generale și prompturile de transformare sunt stocate per utilizator. Modificările făcute de dumneavoastră nu afectează ceilalți utilizatori.

<br/>


[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="general-settings"></a>
### Setări generale

Utilizați **Setări generale** pentru a controla comportamentul la scriere, dacă detaliile execuției sunt stocate în **Istoric**, și aspectul aplicației.

**Comportament**

- **Comportamentul tastei ENTER** alege dacă `Enter` execută sarcina sau inserează o linie nouă.
- **Auto-traducere la inserare** pornește traducerea imediat ce inserați text.
- **Copierea automată a rezultatului în clipboard** copiază automat rezultatele cu succes.
- **Traducere în timp real (în timpul tastării)** traduce în timp ce scrieți.
- **Timp de așteptare (ms)** setează durata de așteptare pentru traducerea în timp real.

**Istoric**

- **Păstrare istoric execuție** controlează dacă fiecare traducere, rescriere și transformare stochează **textul de intrare și ieșire** pentru vizualizarea [**Istoric**](#history) din bara laterală. Dacă o dezactivați, vi se va cere confirmare; dacă confirmați, textul istoricului stocat va fi eliminat din baza de date.
- **Ștergere datelor istoricului** vă permite să eliminați textul stocat în funcție de vechime (de exemplu, mai vechi de câteva luni sau **toate datele (golire)**) utilizând **Șterge date**. Aceasta afectează doar textul execuției salvate pentru vizualizarea **Istoric**; **nu** șterge costurile sau totalurile de utilizare. Pentru a elimina sau reduce datele **privind costul**, utilizați [**Setări** > **Urmărire costuri**](#cost-tracking).

**Aspect**

- **Afișare informații cost pe acțiuni** controlează afișarea costului per operațiune (dacă este disponibil) și a costului total pe panourile de ieșire pentru Traducere, Rescriere și Transformare.
- **Număr de zecimale cost** modifică modul în care sunt afișate zecimalele costului.
- **Doar web:** **afișează un margine în jurul aplicației** adaugă spațiu suplimentar în jurul interfeței.
- **Familia fontului** schimbă fontul textului din panourile de text.
- **Mărime** modifică dimensiunea fontului.

<br/>

<a id="models"></a>

### Modele

Utilizați **Setări** > **Modele** pentru a alege care modele apar în bara de instrumente.

![File de setări modele](../images/screenshots/ro/settings-models.png)

Pagina are două liste:

- **Modele disponibile** în stânga
- **Modelele selectate** în dreapta

Controale utile includ:

- **Căutare modele...** pentru a găsi un model după nume
- Cipuri **Furnizor** pentru a restrânge lista la un singur motor (OpenRouter, OpenAI, Ollama, …)
- **Doar gratuite** pentru a afișa doar modelele gratuite
- **Reîmprospătare** pentru a reîncărca lista
- **Extinde tot** și **Restrânge tot** când sortați după furnizor

Id-urile modelelor includ prefixul furnizorului (de exemplu `openrouter/…` față de `openai/…`). Brevetele cum ar fi **OpenAI (OpenRouter)** față de **OpenAI (direct)** arată cum este rutată traficul.

> ℹ️ **NOTĂ**<br/>
> **OpenRouter Body Builder** (`openrouter/bodybuilder`) este un model router, nu un model de chat general: răspunsul său este JSON care descrie corpuri de cereri OpenRouter API (de exemplu, un tablou `requests` cu `model` și `messages`). Dacă îl utilizați pentru **Traducere**, **Rescriere** sau **Transformare**, panoul de ieșire va afișa acest JSON în loc de text finalizat. Alegeți un model normal de text pentru aceste sarcini. Consultați [pagina modelului Body Builder](https://openrouter.ai/openrouter/bodybuilder) pe OpenRouter.

Acțiuni:

 - Pentru a adăuga un model, faceți clic pe **Adăugare** sau oriunde în intrare.

 - Pentru a elimina un model, faceți clic pe **X** lângă acesta în **Modelele selectate** sau pe **Selectat** în intrarea Modele disponibile.

 - Pentru a curăța lista, faceți clic pe **Deselectați tot**. Modelul gratuit obligatoriu va rămâne în listă.

<br/>

> ℹ️ **NOTĂ**<br/>
> Dacă nu doriți să adăugați credite OpenRouter imediat, începeți prin activarea opțiunii **Doar gratuite** și alegeți modelele gratuite (fără card de credit necesar). De asemenea, puteți utiliza Ollama pentru a rula modele în mod local fără nicio cheie API.

<br/>

<a id="languages"></a>
### Limbi

Utilizați **Setări** > **Limbi** pentru a organiza listele de limbi folosite în aplicație.

- **Limbi principale** sunt fixate în partea de sus a listelor de limbi din **Traducere** și **Transformare**.
- **Limbă personalizată** vă permite să adăugați o limbă care nu este în lista integrată.

Dacă adăugați o limbă personalizată, aceasta apare în selectoarele de limbă alături de opțiunile integrate.

<br/>

<a id="cost-tracking"></a>
### Urmărirea costurilor

Utilizați **Setări** > **Urmărire costuri** pentru a gestiona informațiile de cost.

- **Cost total** afișează totalul curent.
- **Copiere valoare** copiază totalul în clipboard.
- **Resetați costul** resetează totalul stocat la zero.
- **Sincronizare cu utilizarea cheii API** setează totalul la valoarea raportată de contul OpenRouter (doar OpenRouter).
- **Utilizare cheie API** afișează detalii despre utilizarea OpenRouter, dacă sunt disponibile.
- **Ștergere date costuri** elimină toate datele sau doar intrările mai vechi de o anumită dată.

**Urmărirea costurilor:** Când utilizați modele OpenRouter, aplicația afișează utilizarea și cheltuielile reale pe baza informațiilor de cost din OpenRouter. Pentru toți ceilalți furnizori, aplicația estimează costurile folosind prețurile publicate de OpenRouter; dacă un preț nu este disponibil, estimarea poate fi zero.

<br/>

> ℹ️ **NOTĂ**<br/>
> **Toate cifrele costurilor sunt estimative, doar în scop de referință, nu reprezintă facturi oficiale.**


<br/>

> ⚠️ **AVERTIZARE**<br/>
> Ștergerea datelor nu poate fi anulată. Înainte de ștergere, asigurați-vă că vă salvați datele sau le exportați prin [**Istoric**](#history) 
> sau [**Tablou de bord** > **Toate apelurile**](#dashboard-tabs), altfel vor fi pierdute definitiv. 
> Tot istoricul de intrare/ieșire legat de fiecare intrare API va fi, de asemenea, șters.

<br/>

<a id="transform-prompts"></a>
### Mesaje pentru transformare

Utilizați **Setări** > **Mesaje transformare** pentru a gestiona mesajele în bloc.

Puteți:

- revizui mesajele salvate
- șterge mesaje
- importa mesaje dintr-un fișier
- exporta mesaje pentru copie de siguranță sau partajare

<br/>

<a id="users"></a>
### Utilizatori

Utilizați **Utilizatori** pentru a gestiona conturile de utilizator în versiunea web. Puteți adăuga utilizatori, actualiza detaliile lor, reseta parolele și șterge conturile.

<br/>

<a id="api-config"></a>
### Configurare API

Furnizorii utilizați sunt: OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras și **Ollama** (modele locale printr-o adresă URL de bază). Trebuie să configurați doar furnizorii pe care îi utilizați.

**Aplicație web: doar administrator**

Cheile API sunt configurate prin variabile de mediu sisteme sau Docker — nu sunt introduse în interfața web. Această pagină arată ce furnizori au o cheie configurată și vă permite să testați fiecare prin clic pe butonul **`Test`**.

<br/>

> ℹ️ **NOTĂ**<br/>
> Pentru a schimba o cheie API, modificați variabila de mediu în configurația sistemului sau Docker și reporniți serverul sau containerul.

<br/>

**Aplicație desktop**

Utilizați **Config API** pentru a stoca chei API pentru fiecare furnizor utilizat. Pentru Ollama, introduceți **adresa URL de bază** în loc de o cheie API.

<br/>

> 💡 **Sfat** <br/>
> Dacă nu doriți să utilizați o cheie API sau să plătiți pentru folosire, puteți [descărca Ollama](https://ollama.com) și rulați modele (cum ar fi `translategemma:4b`) în mod local pe calculatorul dumneavoastră gratuit. Alternativ, puteți crea un cont gratuit OpenRouter (fără card de credit necesar) pentru a utiliza modelele lor gratuite, sau obține o cheie API gratuită de la Cerebras, Google, Groq sau Mistral AI.

<br/>

- Adăugați doar furnizorii de care aveți nevoie. În **Setări** > **Modele**, fiecare id model începe cu furnizorul (de exemplu `openrouter/openrouter/free`, `openai/gpt-4o`, `ollama/llama3`).

Pentru a adăuga o cheie API, introduceți valoarea în câmpul text și faceți clic pe **`Salvare`**. Pentru înlocuirea unei chei existente, faceți clic pe **`Editare`**. Pentru a verifica dacă o cheie funcționează, faceți clic pe **`Test`**. Pentru URL-ul de bază Ollama, faceți întotdeauna clic pe **`Test`** pentru a verifica conexiunea.

<br/>

> ℹ️ **NOTĂ**<br/>
> Nu puteți vedea valoarea curentă a unei chei API. Le puteți înlocui doar prin butonul **`Editare`**.
> Cheile API sunt stocate criptate în configurație.

<br/>

<a id="about"></a>

### Despre

Fila **Despre** afișează:

- numele aplicației
- numărul versiunii
- data creării
- o legătură către depozitul proiectului

<br/><br/>

<a id="common-issues"></a>
## Probleme frecvente

Dacă ceva nu funcționează așa cum este de așteptat, verificați mai întâi următoarele aspecte.

<br/>

<a id="the-app-will-not-translate-rewrite-or-transform-text"></a>
### Aplicația nu va traduce, rescrie sau transforma textul

Asigurați-vă că:

- ați selectat un model în bara de instrumente
- cel puțin un model este listat în [**Setări** > **Modele**](#models)
- configurarea API-ului funcționează

Dacă utilizați aplicația desktop:

1. Deschideți [**Setări** > **Configurare API**](#api-config).
2. Verificați dacă cel puțin o cheie API este salvată.
3. Apăsați pe **Test** lângă furnizor pentru a confirma că cheia funcționează.

<br/>

<a id="the-model-list-is-empty"></a>
### Lista de modele este goală

Deschideți [**Setări** > **Modele**](#models) și apăsați pe **Reîmprospătare**.

Dacă este necesar:

- căutați un model
- activați opțiunea **Numai gratuite**
- adăugați unul sau mai multe modele în **Modele selectate**

<br/>

<a id="the-result-is-too-slow-or-too-expensive"></a>
### Rezultatul este prea lent sau prea costisitor

Încercați una sau mai multe dintre următoarele:

- alegeți un model diferit
- utilizați un text de intrare mai scurt
- dezactivați **Traducerea în timp real (în timpul tastării)** din [**Setări** > **Setări generale**](#general-settings)
- utilizați modele gratuite pentru sarcini simple (consultați [Modele](#models))

<br/>

<a id="the-interface-is-in-the-wrong-language"></a>
### Interfața este într-o altă limbă decât cea dorită

Apăsați pe pictograma globului din [bara de instrumente](#toolbar) și alegeți limba dorită pentru **Interfață**.

<br/>

<a id="the-text-is-too-small-or-hard-to-read"></a>
### Textul este prea mic sau greu de citit

Deschideți [**Setări** > **Setări generale**](#general-settings) și modificați:

- **Familia de fonturi**
- **Dimensiunea**

<br/>

<a id="dashboard-charts-are-empty"></a>
### Graficele din Tabloul de bord sunt goale

Acest lucru este normal dacă:

- utilizați doar **modele gratuite** (graficele de cost vor fi necompletate)
- **filtrul de timp** selectat nu include perioada în care s-au făcut apelurile — încercați opțiunea **Toate** pentru verificare

Dacă graficele rămân goale după selectarea opțiunii **Toate**, verificați dacă apelurile apar în fila [**Istoric**](#history) sau în fila **Toate apelurile**.

<br/>

<a id="cost-shows-not-available-or-seems-wrong"></a>
### Costul afișează „nu este disponibil” sau pare greșit

Atunci când utilizați modele prin **OpenRouter**, aplicația afișează cheltuielile reale raportate de OpenRouter.

Pentru **alți furnizori** (OpenAI direct, Anthropic direct etc.), costul este estimat pe baza datelor de preț publicate de OpenRouter. Dacă nu se găsește un preț corespunzător pentru un model, costul va apărea ca **ne disponibil** și nu va fi adăugat la total.

<br/>

<a id="total-cost-does-not-match-my-provider-bill"></a>
### Costul total nu corespunde facturii de la furnizor

Toate valorile de cost din aplicație sunt **estimări pur informative**, nu facturi oficiale.

Pentru a aduce costul total mai aproape de cheltuielile reale de la OpenRouter, deschideți [**Setări** > **Urmărirea costurilor**](#cost-tracking) și apăsați pe **Sincronizare cu utilizarea cheii API**.

<br/>

<a id="the-history-page-is-missing-from-the-sidebar"></a>
### Pagina Istoric lipsește din bara laterală

Opțiunea **Păstrează istoricul execuțiilor** ar putea fi dezactivată. Deschideți [**Setări** > **Setări generale**](#general-settings) și activați-o. Observați că activarea ei nu restabilește datele anterioare șterse.

<br/>

<a id="web-app-session-expired"></a>
### Aplicația web: redirecționare neașteptată către pagina de autentificare

Sesiunea dumneavoastră ar putea fi expirată. Autentificați-vă din nou. Dacă se întâmplă frecvent, verificați configurația serverului pentru setările duratei sesiunii.

<br/>

<a id="dashboard-shows-no-data-for-other-users"></a>
### Tabloul de bord nu afișează date pentru alți utilizatori (web)

Doar **administratorii** pot vizualiza datele tuturor utilizatorilor prin filtrul **Utilizator**. Utilizatorii obișnuiți văd doar propria lor activitate, așa cum este intenționat.

<br/>

<a id="i-changed-a-prompt-and-lost-the-edits"></a>
### Am modificat un prompt și am pierdut modificările

Când editați un prompt, apăsați întotdeauna pe **Salvare** înainte de a apăsa pe **Înapoi la rulare**.

<br/><br/>

<a id="quick-tips"></a>
## Sfaturi rapide

- Începeți cu [**Traducere**](#translate) pentru a vă asigura că setările funcționează înainte de a trece la [**Rescriere**](#rewrite) sau [**Transformare**](#transform).
- Utilizați [**Rescriere**](#rewrite) pentru îmbunătățirea uzuală a formulărilor.
- Utilizați [**Transformare**](#transform) când aveți nevoie de un flux de lucru reproductibil pentru o sarcină specifică.
- Utilizați [**Tabloul de bord**](#dashboard) dacă doriți să urmăriți utilizarea și costul.
- Utilizați [**Istoric**](#history) pentru a revizui operațiunile anterioare și textul complet de intrare/ieșire.
- Exportați periodic prompt-urile dacă dezvoltați o bibliotecă de prompt-uri pe care doriți să o păstrați în siguranță (consultați [Prompt-uri pentru transformare](#transform-prompts)) sau dacă doriți să le împărtășiți cu alții.

<br/><br/>

<a id="disclaimer"></a>

## Renunțare la răspundere

Numele și iconițele produselor aparțin deținătorilor lor respectivi și sunt folosite doar în scop de identificare. Acest software nu este afiliat cu sau susținut de nicio marcă menționată.

<br/><br/>

<a id="license"></a>
## Licență

Copyright © 2026 Waldemar Scudeller Jr.

[Licența Apache 2.0](LICENSE)