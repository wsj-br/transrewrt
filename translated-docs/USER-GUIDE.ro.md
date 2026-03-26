---
translated_at: "2026-03-26T00:57:25.486Z"
source_hash: "87f5e7618cbfd3084efeecba28440ecccb03450da2ae8fe4c6f91c75cb7f4981"
source_mtime: 1774482557035.2158
model: "qwen/qwen3-235b-a22b-2507"
---
![Transrewrt banner](../images/transrewrt_banner.png)


<a id="transrewrt-user-guide"></a>
# Ghidul utilizatorului

<br/>

<a id="introduction"></a>
## Introducere

Transrewrt vă ajută să lucrați cu textul în trei moduri principale:

- **Traducere** – convertirea textului dintr-o limbă în alta.
- **Rescriere** – reformularea textului într-un stil diferit, de exemplu mai clar, mai concis sau mai formal.
- **Transformare** – procesarea textului folosind instrucțiuni personalizate pentru inteligența artificială, numite prompturi.

<br/>

Acest ghid explică cum să utilizați aplicația odată ce aceasta este instalată și funcționează. Pentru pașii de instalare, consultați fișierul principal **[README](README.ro.md)**.

<br/>

> ℹ️ **NOTĂ**<br/>
> Transrewrt este disponibil ca aplicație desktop pentru Windows și Linux, precum și ca aplicație web auto-găzduită. Acest ghid se concentrează pe utilizarea zilnică a aplicației. Atunci când o informație se aplică doar unei singure versiuni, este marcată în mod clar.

<small>**Citiți în alte limbi:** </small>
<small id="lang-list"> [English (UK)](../USER-GUIDE.md) · [Português (BR)](USER-GUIDE.pt-BR.md) · [العربية](USER-GUIDE.ar.md) · [বাংলা](USER-GUIDE.bn.md) · [Català](USER-GUIDE.ca.md) · [简体中文](USER-GUIDE.zh-CN.md) · [繁體中文](USER-GUIDE.zh-TW.md) · [Hrvatski](USER-GUIDE.hr.md) · [Čeština](USER-GUIDE.cs.md) · [Nederlands](USER-GUIDE.nl.md) · [English (US)](USER-GUIDE.en-US.md) · [Filipino](USER-GUIDE.tl.md) · [Français](USER-GUIDE.fr.md) · [Deutsch](USER-GUIDE.de.md) · [Ελληνικά](USER-GUIDE.el.md) · [हिन्दी](USER-GUIDE.hi.md) · [Magyar](USER-GUIDE.hu.md) · [Italiano](USER-GUIDE.it.md) · [日本語](USER-GUIDE.ja.md) · [Basa Jawa](USER-GUIDE.jv.md) · [한국어](USER-GUIDE.ko.md) · [Bahasa Melayu](USER-GUIDE.ms.md) · [فارسی](USER-GUIDE.fa.md) · [Polski](USER-GUIDE.pl.md) · [Português (PT)](USER-GUIDE.pt.md) · [ਪੰਜਾਬੀ](USER-GUIDE.pa.md) · [Română](USER-GUIDE.ro.md) · [Русский](USER-GUIDE.ru.md) · [Slovenčina](USER-GUIDE.sk.md) · [Español](USER-GUIDE.es.md) · [Kiswahili](USER-GUIDE.sw.md) · [Svenska](USER-GUIDE.sv.md) · [తెలుగు](USER-GUIDE.te.md) · [ภาษาไทย](USER-GUIDE.th.md) · [Türkçe](USER-GUIDE.tr.md) · [Українська](USER-GUIDE.uk.md) · [Tiếng Việt](USER-GUIDE.vi.md)</small>

<small>

> **Notă privind traducerile interfeței și documentației:** Toate limbile interfeței, cu excepția limbii engleze (UK), originale,  
> au fost traduse folosind modele AI; formularea poate fi imprecisă sau conține erori.

</small>

<br/>


<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Cuprins** 

- [Înainte să începeți](#before-you-start)
  - [Cum obțineți o cheie API OpenRouter gratuită (aplicație desktop)](#how-to-get-a-free-openrouter-api-key-desktop-app)
- [Începerea utilizării](#getting-started)
- [Părțile principale ale ferestrei](#main-parts-of-the-window)
  - [Bare laterală](#sidebar)
  - [Bară de instrumente](#toolbar)
  - [Panouri de intrare și ieșire](#input-and-output-panels)
- [Traducere](#translate)
  - [Traduceți text](#translate-text)
  - [Selectarea limbii](#language-selection)
  - [Setări utile pentru traducere](#helpful-translation-settings)
- [Rescriere](#rewrite)
- [Transformare](#transform)
  - [Rulați un prompt existent](#run-an-existing-prompt)
  - [Dacă încă nu aveți prompturi](#if-you-have-no-prompts-yet)
  - [Creați rapid un prompt](#create-a-prompt-quickly)
  - [Editați un prompt](#edit-a-prompt)
  - [Testați un prompt înainte de a-l folosi](#test-a-prompt-before-using-it)
- [Panou de control](#dashboard)
  - [Filtrarea datelor](#filter-the-data)
  - [Filele panoului de control](#dashboard-tabs)
  - [Exportați datele](#export-data)
  - [Ștergeți înregistrările stocate pentru un model](#delete-stored-records-for-a-model)
- [Istoric](#history)
  - [Filtrarea datelor](#filter-the-data-1)
  - [Exportați datele istoricului](#export-history-data)
- [Setări](#settings)
  - [Setări generale](#general-settings)
  - [Modele](#models)
  - [Limbi](#languages)
  - [Urmărirea costurilor](#cost-tracking)
  - [Prompturi de transformare](#transform-prompts)
  - [Utilizatori](#users)
  - [Configurare API](#api-config)
  - [Despre](#about)
- [Probleme comune](#common-issues)
  - [Aplicația nu traduce, nu rescrie sau nu transformă textul](#the-app-will-not-translate-rewrite-or-transform-text)
  - [Lista modelelor este goală](#the-model-list-is-empty)
  - [Rezultatul este prea lent sau prea costisitor](#the-result-is-too-slow-or-too-expensive)
  - [Interfața este în limba greșită](#the-interface-is-in-the-wrong-language)
  - [Textul este prea mic sau greu de citit](#the-text-is-too-small-or-hard-to-read)
  - [Graficele din panoul de control sunt goale](#dashboard-charts-are-empty)
  - [Costul afișează „indisponibil” sau pare incorect](#cost-shows-not-available-or-seems-wrong)
  - [Costul total nu se potrivește cu factura furnizorului](#total-cost-does-not-match-my-provider-bill)
  - [Pagina Istoric lipsește din bara laterală](#the-history-page-is-missing-from-the-sidebar)
  - [Aplicație web: redirectat la pagina de autentificare neașteptat](#web-app-redirected-to-the-login-page-unexpectedly)
  - [Panoul de control nu afișează date pentru alți utilizatori (web)](#dashboard-shows-no-data-for-other-users-web)
  - [Am modificat un prompt și am pierdut modificările](#i-changed-a-prompt-and-lost-the-edits)
- [Sfaturi rapide](#quick-tips)
- [Limitare de răspundere](#disclaimer)
- [Licență](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="before-you-start"></a>

## Înainte de a începe

Pentru a utiliza Transrewrt, aveți nevoie de acces la cel puțin un furnizor de IA. Furnizorii susținuți sunt: [OpenRouter](https://openrouter.ai) (care agregă multe modele), OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras și [Ollama](https://ollama.com) pentru modele locale.

Nu este necesar să selectați un model plătit pentru a începe. În momentul în care adăugați cheia dvs. API OpenRouter, aplicația activează automat o opțiune **gratuită** integrată OpenRouter. Acest lucru vă permite să începeți imediat traducerea, rescrierea și transformarea textului. Alternativ, puteți obține, de asemenea, o cheie API gratuită de la Cerebras, Google, Groq sau Mistral AI.

În termeni simpli:

- Un **model** este motorul de IA care efectuează lucrarea. Modelele sunt afișate cu un **prefix furnizor** (de exemplu, `openrouter/…`, `openai/…`, `ollama/…`).
- O **cheie API** (sau, în cazul Ollama, o **URL de bază**) este modul în care aplicația accesează acel furnizor.

Dacă utilizați **aplicația desktop**, adăugați cheile în secțiunea [**Setări** > **Configurare API**](#api-config) pentru fiecare furnizor pe care îl utilizați. Pentru utilizarea exclusivă a OpenRouter, consultați mai jos [Cum se obține o cheie API](#how-to-get-an-api-key-desktop-app). Dacă nu doriți să utilizați o cheie API, puteți instala Ollama (de la [ollama.com](https://ollama.com)) și să utilizați modele locale, cum ar fi `translategemma:4b`.

Dacă folosiți **versiunea web**, administratorul serverului configurează furnizorii prin variabile de mediu, astfel încât nu puteți introduce chei API direct în aplicație.

<br/>

<a id="how-to-get-an-api-key-desktop-app"></a>
### Cum se obține o cheie API OpenRouter gratuită (aplicație desktop)

Dacă utilizați aplicația desktop, urmați acești pași:

1. Accesați [OpenRouter](https://openrouter.ai) în browserul dvs. web.
2. Creați un cont sau autentificați-vă.
3. Deschideți pagina [Keys](https://openrouter.ai/keys).
4. Apăsați butonul pentru a crea o nouă cheie API.
5. Atribuiți cheii un nume pentru a o putea recunoaște ulterior.
6. Copiați noua cheie API.
7. Întoarceți-vă la Transrewrt și deschideți **Setări** > **Configurare API**.
8. Lipiți cheia în câmpul **Cheie API OpenRouter** (sub **Setări** > **Configurare API**).
9. Apăsați **Test OpenRouter key** pentru a vă asigura că funcționează.

<br/><br/>

<a id="getting-started"></a>
## Începerea utilizării

Dacă este prima dată când folosiți Transrewrt, urmați această ordine:

1. Deschideți aplicația.
2. Alegeți **limba interfeței** din iconița cu globul pământesc, dacă este necesar.
3. Dacă utilizați **aplicația desktop**, deschideți [**Setări** > **Configurare API**](#api-config), adăugați o cheie API pentru cel puțin un furnizor (de exemplu OpenRouter) și apăsați **Test** pentru a verifica dacă funcționează.
4. Deschideți [**Setări** > **Modele**](#models) și adăugați unul sau mai multe modele în **Modele selectate**.
5. Deschideți [**Setări** > **Limbi**](#languages) și alegeți **Limbi principale** dacă doriți ca limbile dvs. preferate să apară primele.
6. Accesați **Traducere** și executați o traducere simplă pentru a vă asigura că totul funcționează.
7. Odată ce funcționează, încercați **Rescriere**, apoi **Transformare**.

Această ordine este importantă. Previne problema cea mai comună la prima utilizare: încercarea de a executa o sarcină înainte ca aplicația să aibă o conexiune API funcțională sau un model selectat.

<br/><br/>

<a id="main-parts-of-the-window"></a>
## Părțile principale ale ferestrei

Aplicația este împărțită în trei zone principale:

- **Bara laterală** din stânga.
- **Bara de unelte** de sus.
- **Zona de lucru** din centru.

<br/>

<a id="sidebar"></a>
### Bara laterală

Utilizați bara laterală pentru a vă deplasa în cadrul aplicației. Puteți restrânge bara laterală pentru a obține mai mult spațiu, făcând clic pe iconița alăturată logoului aplicației.

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
        <li><strong>Istoric</strong> afișează istoricul utilizării, cu textul introdus și cel rezultat.</li><br/>
        <li><strong>Utilizator</strong> afișează numele utilizatorului autentificat (doar pentru versiunea web).</li>
      </ul>
    </td>
  </tr>
</table>

<br/>

<a id="toolbar"></a>

### Bara de instrumente

Bara de instrumente se modifică ușor în funcție de locul în care vă aflați în aplicație.

- Pe partea stângă, este afișat numele paginii curente.
- Pe partea dreaptă, apare **selectorul de model** și controlul pentru **limba interfeței**.

**Selectorul de model** vă permite alegerea motorului de inteligență artificială care va fi utilizat pentru sarcina curentă.

  ![Selectorul de model](../images/screenshots/ro/model-selector.png)

Unele modele gratuite nu sunt mereu disponibile – uneori pot fi inactive sau au o limită de utilizare. În acest caz, aplicația va elimina automat acel model din lista dvs. disponibilă. Pentru a controla modelele afișate, accesați [**Setări** > **Modele**](#models) și editați lista dvs. de modele.  
De asemenea, puteți deschide setările modelului direct prin clic pe pictograma furnizorului situată în stânga numelui modelului din bara de instrumente.

<br/>

Pictograma **glob + codul limbii** schimbă limba interfeței aplicației, cum ar fi meniurile și butoanele. Aceasta **nu** schimbă limbile utilizate în **Traducere**.

  ![Selectorul limbii interfeței](../images/screenshots/ro/language-selector.png)

<br/>

<a id="input-and-output-panels"></a>
### Panourile de intrare și ieșire

Majoritatea spațiilor de lucru utilizează un panou de **Intrare** pe partea stângă și un panou de **Ieșire** pe partea dreaptă.

Fiecare panou afișează, de asemenea:

| **Intrare**                                                          | **Ieșire**                                                                                                                  |
|----------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------|
| - Numărul de caractere <br/>- Numărul de cuvinte <br/>- Numărul de paragrafe   <br/> | - Durata sarcinii<br/>- **TTS** (tokeni pe secundă)<br/>- Numărul de caractere, cuvinte și paragrafe<br/>- Modelul utilizat |


Dacă vă întrebați despre termenii tehnici:

- **Tokenul** înseamnă o bucată mică de text. Îl puteți vedea ca parte dintr-un cuvânt sau un cuvânt scurt.
- **TTS** înseamnă câte astfel de fragmente de text procesează modelul în fiecare secundă.

<br/>

Puteți monitoriza, de asemenea, costul fiecărei operațiuni (dacă este disponibil) și costul total, activând opțiunea `Afișează informații despre cost în acțiuni` la [**Setări** > **Setări generale**](#general-settings). 
 
<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="translate"></a>
## Traducere

Utilizați **Traducere** atunci când doriți să transformați un text dintr-o limbă în alta.

![Spațiul de lucru Traducere](../images/screenshots/ro/translate.png)

<br/>

<a id="translate-text"></a>
### Traducerea textului

1. Deschideți **Traducere**.
2. Alegeți o limbă în **De la**.
3. Alegeți o limbă în **Către**.
4. Alegeți un model în bara de instrumente.
5. Tastați sau lipiți textul în **Intrare**.
6. Clic pe **Tradu**.
7. Cititi rezultatul în **Ieșire**.
8. Utilizați butonul de copiere dacă doriți să copiați rezultatul.

<br/>

<a id="language-selection"></a>
### Selectarea limbilor

- **De la** poate fi o limbă specifică sau **Detectează limba**.
- **Către** este limba în care doriți să fie rezultatul.

Limbele dvs. **preferate** vor apărea în partea superioară a listei. Puteți seta acestea în [**Setări** > **Limbi**](#languages).

<br/>

<a id="helpful-translation-settings"></a>
### Setări utile pentru traducere

În [**Setări** > **Setări generale**](#general-settings), puteți modifica comportamentul traducerii:

- **Traducere automată la lipire** execută o traducere imediat ce lipiți un text.
- **Copiere automată a rezultatului în clipboard** copiază rezultatul automat după finalizarea cu succes.
- **Traducere în timp real (pe măsură ce scrieți)** execută traduceri în timp ce introduceți text.
- **Timp de așteptare (ms)** controlează durata de așteptare înainte ca aplicația să inițieze o traducere în timp real.
- **Enter** controlează ce se întâmplă atunci când apăsați `Enter`:

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="rewrite"></a>
## Rescriere

Utilizați **Rescriere** atunci când doriți să îmbunătățiți formularea fără a schimba înțelesul principal.

![Spațiul de lucru Rescriere](../images/screenshots/ro/rewrite.png)

Aceasta este utilă pentru:

- corectarea greșelilor de ortografie și gramatici
- clarificarea textului
- făcerea textului mai formal sau mai informal
- scurtarea sau extinderea textului
- punerea textului un ton mai tehnic

<br/>

> 💡 **SFAT**<br/>
> Când utilizați modul "**Verifică ortografia și gramatica**", un buton `Afișează modificările` apare în panoul de ieșire.
> Clic pe acest buton pentru a comuta afișarea corecțiilor, arătând sau ascunzând schimbările exacte efectuate în textul dvs.


<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="transform"></a>

## Transformă

Utilizați **Transformă** atunci când doriți ca IA să urmeze un set personalizat de instrucțiuni.

![Transform workspace](../images/screenshots/ro/transform.png)

Aceasta este zona cea mai flexibilă a aplicației. O puteți utiliza pentru sarcini precum:

- rezumarea notelor
- transformarea unui text brut într-un e-mail finisat
- extragerea ideilor principale
- conversia textului într-un anumit format
- orice altă activitate personalizată cu textul introdus

<br/>

<a id="run-an-existing-prompt"></a>
### Rulați un prompt existent

1. Deschideți **Transformă**.
2. Alegeți un prompt din lista de prompturi.
3. Dacă apare o casetă **Limbă destinație**, selectați o limbă, dacă doriți.
4. Tastați sau lipiți textul în caseta **Intrare**.
5. Apăsați pe **Transformă**.
6. Citiți rezultatul în caseta **Ieșire**.

<br/>

<a id="if-you-have-no-prompts-yet"></a>
### Dacă nu aveți încă prompturi

Dacă lista dumneavoastră de prompturi este goală, apăsați pe **Încarcă prompturi eșantion**. Aceasta va adăuga exemple încorporate astfel încât să puteți începe rapid.

<br/>

> ℹ️ **NOTĂ**<br/>
> Prompturile eșantion sunt furnizate în limba engleză. După încărcarea acestora, le puteți edita și utiliza funcția **Tradu promptul** pentru a le transforma în limba dumneavoastră.

<br/>

<a id="create-a-prompt-quickly"></a>
### Creați rapid un prompt

Cea mai rapidă cale de a crea un prompt este:

1. Apăsați pe **Prompt nou**.
2. Apăsați pe **Generează prompt**.
3. Descrieți ce doriți să realizeze promptul.
4. Alegeți un model.
5. Lăsați aplicația să creeze un proiect pentru dumneavoastră.
6. Verificați proiectul și apăsați pe **Salvează**.

![Generate prompt](../images/screenshots/ro/transform-generate.png)


<br/>

<a id="edit-a-prompt"></a>
### Editarea unui prompt

Când creați sau editați un prompt, editorul apare în partea stângă, iar o zonă de testare apare în partea dreaptă.

![Transform prompt editor](../images/screenshots/ro/transform-prompt-edit.png)

Principalii câmpi sunt:

- **Numele promptului**: numele afișat în lista de prompturi.
- **Instrucțiuni prompt (opțional)**: un scurt indiciu afișat utilizatorului atunci când rulează promptul.
- **Rolul modelului**: rolul general atribuit IA, cum ar fi „Ești un asistent util.”
- **Instrucțiuni model (una pe linie)**: regulile specifice pe care doriți ca IA să le urmeze.
- **Descrierea ieșirii**: un cuvânt scurt care descrie rezultatul, de exemplu „rezumat” sau „rescriere”.
- **Temperatură (0.0 → 1.0)**: comportamentul modelului; consultă mai jos.
- **Cere limba destinație**: adaugă un selector de limbă țintă atunci când este rulat promptul.

Dacă termenul tehnic **Temperatură** este nou pentru dumneavoastră, puteți gândi astfel:

- O **temperatură mai scăzută** oferă rezultate mai stabile și mai previzibile.
- O **temperatură mai mare** oferă mai multă varietate și creativitate.

Puteți utiliza și:

- **`Generează prompt`** pentru a crea rapid un proiect dintr-o descriere simplă
- **`Îmbunătățește prompt`** pentru a îmbunătăți un prompt existent
- **`Tradu promptul`** pentru a traduce câmpurile promptului

<br/>

> ⚠️ **ATENȚIE**<br/>
> Apăsați pe **`Salvează`** înainte de a apăsa pe **`Înapoi la executare`**. Dacă vă întoarceți fără a salva, modificările vor fi pierdute.

<br/>

<a id="test-a-prompt-before-using-it"></a>
### Testați un prompt înainte de a-l utiliza

Panoul de testare din dreapta vă permite să încercați promptul cu text eșantion înainte de a-l folosi în activitatea zilnică.

Este util atunci când:

- creați un nou prompt
- comparați două versiuni ale unui prompt
- doriți să verificați tonul, lungimea sau formatul ieșirii

<br/>

> ℹ️ **NOTĂ**<br/>
> Puteți exporta și importa prompturile salvate în [**Setări** > **Prompturi Transformă**](#transform-prompts).

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="dashboard"></a>
## Tablou de bord

Utilizați **Tabloul de bord** pentru a vedea cât de mult utilizați aplicația și cât vă costă (pentru modelele plătite).

![Dashboard summary](../images/screenshots/ro/dashboard-summary.png)


<br/>

> ℹ️ **NOTĂ**<br/>
> Dacă folosiți doar modele gratuite, graficele legate de cost vor fi necompletate.

<br/>

<a id="filter-the-data"></a>
### Filtrarea datelor

Utilizați butoanele de filtrare din partea de sus pentru a schimba intervalul de timp.

![Dashboard filters](../images/screenshots/ro/dashboard-filter.png)

<br/>

> ℹ️ **NOTĂ**<br/>
> Filtrul **Utilizator** este vizibil doar administratorilor în versiunea web. Utilizatorii obișnuiți nu vor vedea acest filtru, iar acesta nu este disponibil în aplicația desktop.

<br/>

<a id="dashboard-tabs"></a>

### File informativ – taburi

- **Rezumat** vă oferă o imagine de ansamblu asupra utilizării și costurilor.
- **După utilizare** împarte activitatea pe limbă de traducere, mod de rescriere și prompt de transformare.
- **După model** arată ce modele ați utilizat și costul acestora.
- **După zi** afișează totalurile zilnice.
- **Toate apelurile** afișează istoricul complet al apelurilor și vă permite să-l exportați.

<br/>

<a id="export-data"></a>
### Exportați datele

Tabelele din panoul de control pot exporta datele în următoarele formate:

- **JSON**
- **CSV**
- **XLSX**

Aceasta este utilă dacă doriți să revizuiți activitatea în afara aplicației sau să trimiteți un raport.

<br/>

<a id="delete-stored-records-for-a-model"></a>
### Ștergeți înregistrările stocate pentru un model

În secțiunile **După model** sau **Toate apelurile**, puteți elimina înregistrările stocate pentru un model făcând clic pe pictograma „coș de gunoi”.

> ⚠️ **AVERTIZARE**<br/>
> Ștergerea înregistrărilor stocate este ireversibilă. Utilizați această opțiune doar dacă sunteți sigur că nu mai aveți nevoie de aceste date.

Pentru a șterge toate datele sau pentru a elimina înregistrările în funcție de vechimea lor, accesați [**Setări** > **Urmărirea costurilor**](#cost-tracking). Acolo veți găsi opțiuni pentru a șterge toate datele stocate sau doar datele mai vechi de o anumită dată.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="history"></a>
## Istoric

Apăsați **Istoric** pentru a vizualiza istoricul acțiunilor dvs. în **Transrewrt**, inclusiv textul de intrare și cel de ieșire pentru fiecare operațiune.

![Pagina de istoric](../images/screenshots/ro/history.png)

<br/>

<a id="filter-the-history"></a>
### Filtrați datele

Secțiunea **Istoric** folosește aceleași filtre ca și pagina **Panou de control**. Folosiți-le pentru a selecta intervalul de timp dorit.

![Filtre panou de control](../images/screenshots/ro/dashboard-filter.png)

<br/>

> ℹ️ **NOTĂ**<br/>
> Filtrul **Utilizator** este vizibil doar administratorilor în versiunea web. Utilizatorii obișnuiți nu vor vedea acest filtru, iar acesta nu este disponibil în aplicația desktop.

<br/>

<a id="export-history-data"></a>
### Exportarea datelor istoricului

Pagina de istoric poate exporta datele filtrate în următoarele formate:

- **JSON**
- **CSV**
- **XLSX**

Această funcție este utilă dacă doriți să revizuiți activitatea în afara aplicației sau să transmiteți un raport.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="settings"></a>
## Setări

Deschideți **Setări** din bara laterală pentru a personaliza comportamentul aplicației.

Tab-urile disponibile depind de platformă și de rolul dumneavoastră:

  | Tab               | Desktop | Web (administrator) | Web (utilizator obișnuit) |
  |-------------------|:-------:|:-------------------:|:------------------------:|
  | Setări generale   |   da    |         da          |            da             |
  | Modele            |   da    |         da          |            da             |
  | Limbi             |   da    |         da          |            da             |
  | Urmărirea costurilor |   da    |         da          |             —             |
  | Prompturi de transformare |   da    |         da          |            da             |
  | Utilizatori       |    —    |         da          |             —             |
  | Configurație API  |   da    |         da          |             —             |
  | Despre            |   da    |         da          |            da             |

<br/>

> ℹ️ **NOTĂ**<br/>
> În versiunea web, fiecare utilizator are propria sa configurație. Setări precum modelele selectate, limbile, opțiunile generale și prompturile de transformare sunt stocate individual. Modificările pe care le efectuați nu afectează ceilalți utilizatori.

<br/>


[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="general-settings"></a>
### Setări generale

Utilizați **Setări generale** pentru a controla comportamentul tastaturii, salvarea detaliilor execuției în **Istoric** și aspectul aplicației.

**Comportament**

- **Comportament pentru ENTER** alege dacă tasta `Enter` execută sarcina sau introduce o linie nouă.
- **Traducere automată la lipire** începe traducerea imediat ce lipiți un text.
- **Copiere automată a rezultatului în clipboard** copiază automat rezultatele obținute cu succes.
- **Traducere în timp real (pe măsură ce scrieți)** traduce în timp ce tastați.
- **Timp de așteptare (ms)** stabilește durata de așteptare pentru traducerea în timp real.

**Istoric**

- **Păstrare istoric execuții** controlează dacă fiecare operațiune de traducere, rescriere și transformare stochează **textul de intrare și cel de ieșire** pentru vizualizarea din bara laterală [**Istoric**](#history). Dezactivarea acestei opțiuni cere confirmare; dacă acceptați, textul istoricului stocat va fi eliminat din baza de date.
- **Șterge datele istoricului** vă permite să eliminați textul stocat în funcție de vechime (de exemplu, mai vechi de câteva luni sau **toate datele (curățare)**) folosind opțiunea **Șterge date**. Aceasta afectează doar textul execuțiilor salvate pentru vizualizarea în **Istoric**; nu șterge totalurile sau costurile. Pentru a elimina sau reduce datele legate de **cost**, utilizați [**Setări** > **Urmărirea costurilor**](#cost-tracking).

**Aspect**

- **Afișează informațiile de cost pe acțiuni** controlează afișarea costului pe operațiune (dacă este disponibil) și a costului total pe panourile de ieșire ale funcțiilor Traducere, Rescriere și Transformare.
- **Număr de zecimale pentru cost** modifică modul de afișare a zecimalelor costului.
- **Doar web:** **afișează un spațiu liber în jurul aplicației** adaugă spațiu suplimentar în jurul interfeței.
- **Familie de fonturi** schimbă fontul textului din panourile de text.
- **Mărime** modifică dimensiunea fontului.


<br/>

<a id="models"></a>

### Modele

Utilizați **Setări** > **Modele** pentru a alege care modele apar în bara de instrumente.

![Fila Modele din Setări](../images/screenshots/ro/settings-models.png)

Pagina are două liste:

- **Modele disponibile** în stânga
- **Modele selectate** în dreapta

Controale utile includ:

- **Caută modele...** pentru a găsi un model după nume
- **Jetoane furnizor** pentru a limita lista la un motor (OpenRouter, OpenAI, Ollama etc.)
- **Doar gratuite** pentru a afișa doar modele gratuite
- **Reîmprospătare** pentru a reîncărca lista
- **Extinde toate** și **Restrânge toate** când sortați după furnizor

ID-urile modelelor includ prefixul furnizorului (de exemplu `openrouter/…` vs `openai/…`). Etichetele precum **OpenAI (OpenRouter)** vs **OpenAI (direct)** arată modul în care este direcționat traficul.

> ℹ️ **NOTĂ**<br/>
> **OpenRouter Body Builder** (`openrouter/bodybuilder`) este un model rutier, nu un model general de chat: răspunsul său este JSON care descrie corpuri de cereri API OpenRouter (de exemplu un array `requests` cu `model` și `messages`). Dacă îl folosiți pentru **Traducere**, **Rescriere** sau **Transformare**, panoul de ieșire va afișa acel JSON în locul textului finalizat. Alegeți un model normal de text pentru aceste sarcini. Consultați [pagina modelului Body Builder](https://openrouter.ai/openrouter/bodybuilder) pe OpenRouter.

Acțiuni:

 - Pentru a adăuga un model, apăsați **Adăugare** sau oriunde în intrare.

 - Pentru a elimina un model, apăsați **X** lângă acesta în **Modele selectate** sau **Selectat** în intrarea din Modele disponibile.

 - Pentru a goli lista, apăsați **Deselectează tot**. Modelul gratuit obligatoriu va rămâne în listă.

<br/>

> ℹ️ **NOTĂ**<br/>
> Dacă nu doriți să adăugați credite la OpenRouter imediat, începeți activând **Doar gratuite** și alegând modelele gratuite (fără card de credit necesar). De asemenea, puteți folosi Ollama pentru a rula modele local fără o cheie API.

<br/>

<a id="languages"></a>
### Limbi

Utilizați **Setări** > **Limbi** pentru a organiza listele de limbi utilizate în aplicație.

- **Limbi principale** sunt fixate aproape de începutul listelor de limbi din **Traducere** și **Transformare**.
- **Limbă personalizată** vă permite să adăugați o limbă care nu este în lista incorporată.

Dacă adăugați o limbă personalizată, aceasta va apărea în selectoarele de limbă alături de opțiunile încorporate.

<br/>

<a id="cost-tracking"></a>
### Urmărirea costurilor

Utilizați **Setări** > **Urmărirea costurilor** pentru a gestiona informațiile despre cost.

- **Cost total** afișează totalul cumulat.
- **Copiază valoarea** copiază totalul în clipboard.
- **Resetează costul** resetează totalul stocat la zero.
- **Sincronizează cu utilizarea cheii API** stabilește totalul să corespundă utilizării raportate de contul dvs. OpenRouter (doar OpenRouter).
- **Utilizarea cheii API** afișează detalii despre utilizarea OpenRouter, dacă sunt disponibile.
- **Șterge datele privind costul** elimină toate datele sau doar intrările mai vechi de o anumită dată.

**Urmărirea costului**: Când utilizați modele OpenRouter, aplicația vă arată utilizarea și cheltuielile reale pe baza informațiilor de cost de la OpenRouter. Pentru toți ceilalți furnizori, aplicația estimează costurile folosind prețurile publicate de OpenRouter; dacă un preț nu este disponibil, estimarea poate fi zero.

<br/>

> ℹ️ **NOTĂ**<br/>
> Toate cifrele privind costul sunt estimări doar pentru informarea dumneavoastră, nu reprezintă facturi oficiale.

<br/>

> ⚠️ **ATENȚIE**<br/>
> Ștergerea datelor nu poate fi anulată. Înainte de ștergere, asigurați-vă că salvați datele sau le exportați prin [**Istoric**](#history) sau [**Tablou de bord** > **Toate apelurile**](#dashboard-tabs), altfel vor fi pierdute definitiv. Tot istoricul intrărilor și ieșirilor legat de fiecare intrare a apelului API va fi, de asemenea, șters.

<br/>

<a id="transform-prompts"></a>
### Prompturi de transformare

Utilizați **Setări** > **Prompturi de transformare** pentru a gestiona prompturile în bloc.

Puteți:

- examina prompturile salvate
- șterge prompturi
- importa prompturi dintr-un fișier
- exporta prompturi pentru copie de siguranță sau partajare

<br/>

<a id="users"></a>
### Utilizatori

Utilizați **Utilizatori** pentru a gestiona conturile de utilizator în versiunea web. Puteți adăuga utilizatori, actualiza detaliile lor, reseta parolele și șterge conturi.

<br/>

<a id="api-config"></a>
### Configurare API

Furnizorii suportați sunt: OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras și **Ollama** (modele locale via o adresă URL de bază). Trebuie să configurați doar furnizorii pe care îi utilizați.

**Aplicație web: doar administrator**

Cheile API sunt configurate prin variabile de mediu de sistem sau Docker — nu sunt introduse în interfața web. Această pagină arată ce furnizori au o cheie configurată și vă permite să testați fiecare apăsând butonul **`Test`**.

<br/>

> ℹ️ **NOTĂ**<br/>
> Pentru a modifica o cheie API, actualizați variabila de mediu în sistemul dvs. sau în configurația Docker și reporniți serverul sau containerul.

<br/>

**Aplicație desktop**

Utilizați **Configurare API** pentru a stoca cheile API pentru fiecare furnizor utilizat. Pentru Ollama, introduceți **adresa URL de bază** în loc de o cheie API.

<br/>

> 💡 **Sfat** <br/>
> Dacă nu doriți să utilizați o cheie API sau să plătiți pentru utilizare, puteți [descărca Ollama](https://ollama.com) și rula modele (cum ar fi `translategemma:4b`) gratuit, local pe calculatorul dumneavoastră. Alternativ, puteți crea un cont gratuit OpenRouter (fără card de credit necesar) pentru a utiliza modelele lor gratuite, sau obține o cheie API gratuită de la Cerebras, Google, Groq sau Mistral AI.

<br/>

- Adăugați doar furnizorii de care aveți nevoie. În **Setări** > **Modele**, fiecare ID de model începe cu furnizorul (de exemplu `openrouter/openrouter/free`, `openai/gpt-4o`, `ollama/llama3`).

Pentru a adăuga o cheie API, introduceți valoarea în câmpul de text și apăsați **`Salvează`**. Pentru a înlocui o cheie existentă, apăsați **`Editează`**. Pentru a verifica dacă o cheie funcționează, apăsați **`Test`**. Pentru adresa URL de bază Ollama, apăsați întotdeauna **`Test`** pentru a verifica conexiunea.

<br/>

> ℹ️ **NOTĂ**<br/>
> Nu puteți vedea valoarea actuală a unei chei API. Puteți doar să o înlocuiți folosind butonul **`Editează`**.
> Cheile API sunt stocate criptat în configurație.

<br/>

<a id="about"></a>

### Despre

Tab-ul **Despre** afișează:

- numele aplicației
- numărul versiunii
- data construirii
- un link către depozitul proiectului

<br/><br/>

<a id="common-issues"></a>
## Probleme comune

Dacă ceva nu funcționează așa cum este de așteptat, verificați mai întâi următoarele aspecte.

<br/>

<a id="the-app-will-not-translate-rewrite-or-transform-text"></a>
### Aplicația nu traduce, nu rescrie și nu transformă textul

Verificați dacă:

- ați selectat un model în bara de unelte
- cel puțin un model este listat în [**Setări** > **Modele**](#models)
- configurația API-ului dumneavoastră funcționează

Dacă folosiți aplicația desktop:

1. Deschideți [**Setări** > **Configurație API**](#api-config).
2. Verificați dacă cel puțin o cheie API este salvată.
3. Apăsați **Test** lângă furnizor pentru a confirma că funcționează cheia.

<br/>

<a id="the-model-list-is-empty"></a>
### Lista de modele este goală

Deschideți [**Setări** > **Modele**](#models) și apăsați **Reîmprospătare**.

Dacă este necesar:

- căutați un model
- activați opțiunea **Doar gratuite**
- adăugați unul sau mai multe modele la **Modele selectate**

<br/>

<a id="the-result-is-too-slow-or-too-expensive"></a>
### Rezultatul este prea lent sau prea scump

Încercați una sau mai multe dintre următoarele soluții:

- alegeți un alt model
- utilizați un text de intrare mai scurt
- dezactivați **Traducere în timp real (în timpul tastării)** în [**Setări** > **Setări generale**](#general-settings)
- utilizați modele gratuite pentru sarcini simple (vedeți [Modele](#models))

<br/>

<a id="the-interface-is-in-the-wrong-language"></a>
### Interfața este în limba greșită

Faceți clic pe pictograma globului în [bara de unelte](#toolbar) și alegeți **Limbă interfață** preferată.

<br/>

<a id="the-text-is-too-small-or-hard-to-read"></a>
### Textul este prea mic sau greu de citit

Deschideți [**Setări** > **Setări generale**](#general-settings) și modificați:

- **Familie de fonturi**
- **Dimensiune**

<br/>

<a id="dashboard-charts-are-empty"></a>
### Graficele din Panou sunt goale

Acest comportament este normal dacă:

- utilizați doar **modele gratuite** (graficele de cost vor fi necompletate)
- **filtru de timp** selectat nu include perioada în care au fost efectuate apeluri — încercați **Toate** pentru a verifica

Dacă graficele rămân goale după selectarea opțiunii **Toate**, verificați dacă apelurile apar în [**Istoric**](#history) sau în fila **Toate apelurile**.

<br/>

<a id="cost-shows-not-available-or-seems-wrong"></a>
### Afișarea costului arată „neaccesibil” sau pare incorectă

Când utilizați modele prin **OpenRouter**, aplicația afișează valoarea reală a cheltuielilor raportată de OpenRouter.

Pentru **alți furnizori** (OpenAI direct, Anthropic direct etc.), costul este estimat în funcție de datele de prețare publicate de OpenRouter. Dacă nu există un preț potrivit pentru un anumit model, costul va fi afișat ca **neaccesibil** și nu va fi inclus în totalul dvs.

<br/>

<a id="total-cost-does-not-match-my-provider-bill"></a>
### Costul total nu corespunde facturii furnizorului meu

Toate valorile de cost din aplicație sunt **doar estimări orientative**, nu declarații oficiale de facturare.

Pentru a aduce totalul mai aproape de cheltuiala reală OpenRouter, deschideți [**Setări** > **Urmărirea costului**](#cost-tracking) și apăsați **Sincronizează cu utilizarea cheii API**.

<br/>

<a id="the-history-page-is-missing-from-the-sidebar"></a>
### Pagina Istoric lipsește din bara laterală

Opțiunea **Păstrează istoricul execuției** poate fi dezactivată. Deschideți [**Setări** > **Setări generale**](#general-settings) și activați-o. Rețineți că activarea ei nu va recupera datele anterioare din istoric care au fost șterse.

<br/>

<a id="web-app-session-expired"></a>
### Aplicația web: redirecționare neașteptată la pagina de autentificare

Sesiunea dvs. s-a putut încheia. Autentificați-vă din nou. Dacă acest lucru se întâmplă des, verificați configurația serverului pentru setările de durată a sesiunii.

<br/>

<a id="dashboard-shows-no-data-for-other-users"></a>
### Panoul nu afișează date pentru alți utilizatori (web)

Doar **administratorii** pot vizualiza datele tuturor utilizatorilor prin intermediul filtrului **Utilizator**. Utilizatorii obișnuiți pot vizualiza doar propria activitate conform designului.

<br/>

<a id="i-changed-a-prompt-and-lost-the-edits"></a>
### Am modificat un prompt și am pierdut modificările

Când editați un prompt, faceți întotdeauna clic pe **Salvează** înainte de a apăsa **Înapoi la execuție**.

<br/><br/>

<a id="quick-tips"></a>
## Sfaturi rapide

- Începeți cu [**Traducere**](#translate) pentru a vă asigura că setările funcționează înainte să treceți la [**Rescriere**](#rewrite) sau [**Transformare**](#transform).
- Utilizați [**Rescriere**](#rewrite) pentru îmbunătățiri zilnice ale textului.
- Utilizați [**Transformare**](#transform) atunci când aveți nevoie de un flux de lucru reproductibil pentru o sarcină specifică.
- Utilizați [**Panoul**](#dashboard) dacă doriți să urmăriți utilizarea și costurile.
- Utilizați [**Istoric**](#history) pentru a revizui operațiunile anterioare și textul complet de intrare/ieșire.
- Exportați regulat prompturile dacă creați o bibliotecă de prompturi pe care doriți să o păstrați în siguranță (vedeți [Transformarea prompturilor](#transform-prompts)) sau dacă doriți să le împărtășiți cu alții.

<br/><br/>

<a id="disclaimer"></a>

## Renunțare la răspundere

Numele și iconurile produselor aparțin deținătorilor lor respectivi și sunt utilizate exclusiv în scop de identificare. Acest software nu este afiliat cu sau endosat de oricare dintre mărcile menționate.

<br/><br/>

<a id="license"></a>
## Licență

Drepturi de autor © 2026 Waldemar Scudeller Jr.

[Licența Apache 2.0](LICENSE)