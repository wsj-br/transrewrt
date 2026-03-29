---
translated_at: "2026-03-29T01:55:46.873Z"
source_hash: "8981b8db163153bfc443046fa20a49b33c92b9feebdee302f6ef60852f273472"
source_mtime: "2026-03-29T01:41:58.368Z"
model: "qwen/qwen3-235b-a22b-2507"
---
![Transrewrt banner](../images/transrewrt_banner.png)


<a id="transrewrt-user-guide"></a>

# Ghidul utilizatorului

<br/>

<a id="introduction"></a>

## Introducere

Transrewrt vă ajută să lucrați cu text în trei moduri principale:

- **Traducere** – convertirea textului dintr-o limbă în alta.
- **Rescriere** – reformularea textului într-un alt stil, cum ar fi mai clar, mai concis sau mai formal.
- **Transformare** – procesarea textului utilizând instrucțiuni personalizate bazate pe IA, numite prompturi.

<br/>

Acest ghid explică cum să utilizați aplicația odată ce aceasta este instalată și funcționează. Pentru pașii de instalare, consultați fișierul principal **[README](README.ro.md)**.

<br/>

> ℹ️ **NOTĂ**<br/>
> Transrewrt este disponibil ca aplicație desktop pentru Windows și Linux, precum și ca aplicație web auto-găzduită. Acest ghid se concentrează pe utilizarea zilnică a aplicației. Acum și când ceva se aplică doar unei singure versiuni, este marcat clar.

<small>**Citiți în alte limbi:** </small>

<small id="lang-list"> [English (UK)](../USER-GUIDE.md) · [Português (BR)](USER-GUIDE.pt-BR.md) · [العربية](USER-GUIDE.ar.md) · [বাংলা](USER-GUIDE.bn.md) · [Català](USER-GUIDE.ca.md) · [简体中文](USER-GUIDE.zh-CN.md) · [繁體中文](USER-GUIDE.zh-TW.md) · [Hrvatski](USER-GUIDE.hr.md) · [Čeština](USER-GUIDE.cs.md) · [Nederlands](USER-GUIDE.nl.md) · [English (US)](USER-GUIDE.en-US.md) · [Filipino](USER-GUIDE.tl.md) · [Français](USER-GUIDE.fr.md) · [Deutsch](USER-GUIDE.de.md) · [Ελληνικά](USER-GUIDE.el.md) · [हिन्दी](USER-GUIDE.hi.md) · [Magyar](USER-GUIDE.hu.md) · [Italiano](USER-GUIDE.it.md) · [日本語](USER-GUIDE.ja.md) · [Basa Jawa](USER-GUIDE.jv.md) · [한국어](USER-GUIDE.ko.md) · [Bahasa Melayu](USER-GUIDE.ms.md) · [فارسی](USER-GUIDE.fa.md) · [Polski](USER-GUIDE.pl.md) · [Português (PT)](USER-GUIDE.pt.md) · [ਪੰਜਾਬੀ](USER-GUIDE.pa.md) · [Română](USER-GUIDE.ro.md) · [Русский](USER-GUIDE.ru.md) · [Slovenčina](USER-GUIDE.sk.md) · [Español](USER-GUIDE.es.md) · [Kiswahili](USER-GUIDE.sw.md) · [Svenska](USER-GUIDE.sv.md) · [తెలుగు](USER-GUIDE.te.md) · [ภาษาไทย](USER-GUIDE.th.md) · [Türkçe](USER-GUIDE.tr.md) · [Українська](USER-GUIDE.uk.md) · [Tiếng Việt](USER-GUIDE.vi.md)</small>

<small>

> **Notă despre traducerile interfeței și documentației:** Toate limbile de interfață, cu excepția englezei originale (UK),
> au fost traduse folosind modele AI; formularea poate fi imprecisă sau poate conține erori.

</small>

<br/>


<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Cuprins**

- [Înainte de a începe](#before-you-start)
  - [Cum obții o cheie API gratuită OpenRouter (aplicație desktop)](#how-to-get-a-free-openrouter-api-key-desktop-app)
- [Primi pași](#getting-started)
- [Părțile principale ale ferestrei](#main-parts-of-the-window)
  - [Bara laterală](#sidebar)
  - [Bara de unelte](#toolbar)
  - [Panourile de intrare și ieșire](#input-and-output-panels)
- [Traducere](#translate)
  - [Tradu text](#translate-text)
  - [Selectarea limbii](#language-selection)
  - [Setări utile pentru traducere](#helpful-translation-settings)
- [Rescriere](#rewrite)
- [Transformare](#transform)
  - [Executarea unui prompt existent](#run-an-existing-prompt)
  - [Dacă nu ai încă niciun prompt](#if-you-have-no-prompts-yet)
  - [Crearea rapidă a unui prompt](#create-a-prompt-quickly)
  - [Editarea unui prompt](#edit-a-prompt)
  - [Testarea unui prompt înainte de utilizare](#test-a-prompt-before-using-it)
- [Bord de control](#dashboard)
  - [Filtrarea datelor](#filter-the-data)
  - [Filele din bordul de control](#dashboard-tabs)
  - [Exportul datelor](#export-data)

- [Șterge înregistrările stocate pentru un model](#delete-stored-records-for-a-model)
- [Istoric](#history)
  - [Filtrează datele](#filter-the-data-1)
  - [Exportă datele din istoric](#export-history-data)
- [Setări](#settings)
  - [Setări generale](#general-settings)
  - [Modele](#models)
  - [Limbi](#languages)
  - [Urmărirea costurilor](#cost-tracking)
  - [Transformă mesajele](#transform-prompts)
  - [Utilizatori](#users)
  - [Configurare API](#api-config)
  - [Despre](#about)
- [Probleme frecvente](#common-issues)
  - [Aplicația nu traduce, nu rescrie și nu transformă textul](#the-app-will-not-translate-rewrite-or-transform-text)
  - [Lista de modele este goală](#the-model-list-is-empty)
  - [Rezultatul este prea lent sau prea scump](#the-result-is-too-slow-or-too-expensive)
  - [Interfața este în limba greșită](#the-interface-is-in-the-wrong-language)
  - [Textul este prea mic sau greu de citit](#the-text-is-too-small-or-hard-to-read)
  - [Graficele din tabloul de bord sunt goale](#dashboard-charts-are-empty)

- [Costul afișează „nu este disponibil” sau pare incorect](#cost-shows-not-available-or-seems-wrong)
  - [Costul total nu se potrivește cu factura furnizorului](#total-cost-does-not-match-my-provider-bill)
  - [Pagina Istoric lipsește din bara laterală](#the-history-page-is-missing-from-the-sidebar)
  - [Aplicația web: sunt redirecționat neașteptat către pagina de autentificare](#web-app-redirected-to-the-login-page-unexpectedly)
  - [Administrator web: am uitat sau am pierdut o parolă](#web-admin-forgot-or-lost-a-password)
  - [Panoul de control nu afișează date pentru alți utilizatori (web)](#dashboard-shows-no-data-for-other-users-web)
  - [Am modificat un prompt și am pierdut modificările](#i-changed-a-prompt-and-lost-the-edits)
- [Sfaturi rapide](#quick-tips)
- [Declinarea răspunderii](#disclaimer)
- [Licență](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="before-you-start"></a>

## Înainte de a începe

Pentru a utiliza Transrewrt, aveți nevoie de acces la cel puțin un furnizor de IA. Furnizorii suportați sunt: [OpenRouter](https://openrouter.ai) (care agregă multe modele), OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras și [Ollama](https://ollama.com) pentru modele locale.

Nu este nevoie să alegeți un model plătit pentru a începe. Immediat ce adăugați cheia dvs. API OpenRouter, aplicația activează automat o opțiune **gratuită** integrată pentru OpenRouter. Astfel, puteți începe traducerea, rescrierea și transformarea textului imediat. Alternativ, puteți obține o cheie API gratuită și de la Cerebras, Google, Groq sau Mistral AI.

În termeni simpli:

- Un **model** este motorul de IA care efectuează lucrarea. Modelele sunt listate cu un **prefix furnizor** (de exemplu `openrouter/…`, `openai/…`, `ollama/…`).
- O **cheie API** (sau, în cazul Ollama, o **URL de bază**) este modul în care aplicația accesează acel furnizor.

Dacă utilizați **aplicația desktop**, adăugați chei în secțiunea [**Setări** > **Configurare API**](#api-config) pentru fiecare furnizor pe care îl utilizați. Pentru utilizarea doar cu OpenRouter, consultați mai jos secțiunea [Cum obțineți o cheie API](#how-to-get-an-api-key-desktop-app). Dacă nu doriți să utilizați o cheie API, puteți instala Ollama (de la [ollama.com](https://ollama.com)) și folosi modele locale în schimb, cum ar fi `translategemma:4b`.

Dacă utilizați **versiunea web**, administratorul serverului configurează furnizorii prin variabile de mediu, astfel că nu puteți introduce chei API direct în aplicație.

<br/>

<a id="how-to-get-an-api-key-desktop-app"></a>

### Cum obțineți o cheie API OpenRouter gratuită (aplicație desktop)

Dacă utilizați aplicația desktop, urmați pașii următori:

1. Accesați [OpenRouter](https://openrouter.ai) în navigatorul web.
2. Creați un cont sau autentificați-vă.
3. Deschideți pagina [Chei](https://openrouter.ai/keys).
4. Apăsați butonul pentru a crea o nouă cheie API.
5. Dați o denumire cheii, astfel încât să o puteți recunoaște ulterior.
6. Copiați noua cheie API.
7. Întoarceți-vă la Transrewrt și deschideți **Setări** > **Configurare API**.
8. Lipiți cheia în câmpul **Cheie API OpenRouter** (sub **Setări** > **Configurare API**).
9. Apăsați **Testează cheia OpenRouter** pentru a vă asigura că funcționează.

<br/><br/>

<a id="getting-started"></a>

## Începere

Dacă este prima dată când folosiți Transrewrt, urmați această ordine:

1. Deschideți aplicația.
2. Alegeți **limba interfeței** din pictograma globului, dacă este necesar.
3. Dacă utilizați **aplicația desktop**, deschideți [**Setări** > **Configurare API**](#api-config), adăugați o cheie API pentru cel puțin un furnizor (de exemplu OpenRouter) și apăsați **Test** pentru a verifica dacă funcționează.
4. Deschideți [**Setări** > **Modele**](#models) și adăugați unul sau mai multe modele în **Modele selectate**.
5. Deschideți [**Setări** > **Limbi**](#languages) și alegeți **Limbi principale**, dacă doriți ca limbile dvs. utilizate cel mai des să apară primele.
6. Accesați **Traducere** și executați o traducere simplă pentru a confirma că totul funcționează.
7. Odată ce aceasta funcționează, încercați **Rescriere**, apoi **Transformare**.

Această ordine este importantă. Previne problema cea mai frecventă la prima utilizare: încercarea de a executa o sarcină înainte ca aplicația să aibă o conexiune API funcțională sau un model selectat.

<br/><br/>

<a id="main-parts-of-the-window"></a>

## Părțile principale ale ferestrei

Aplicația este împărțită în trei zone principale:

- **Bara laterală** din stânga.
- **Bara de unelte** de sus.
- **Zona de lucru** din centru.

<br/>

<a id="sidebar"></a>

### Bară laterală

Utilizați bara laterală pentru a vă deplasa în cadrul aplicației. Puteți ascunde bara laterală pentru a obține mai mult spațiu, făcând clic pe pictograma situată lângă logo-ul aplicației.

<br/>

<table>
  <tr>
    <td valign="top">
       <img src="../images/screenshots/ro/sidebar.png" alt="Bară laterală aplicație" style="max-width: 100%; border: 1px solid #ddd; border-radius: 4px;">
    </td>
    <td valign="top">
      <br/><br/>
      <ul>
        <li><strong>Tradu</strong> deschide spațiul de lucru pentru traducere.</li><br/>
        <li><strong>Rescrie</strong> deschide spațiul de lucru pentru rescriere.</li><br/>
        <li><strong>Transformă</strong> deschide spațiul de lucru pentru cereri personalizate.</li><br/>
        <li><strong>Tablou de bord</strong> afișează informații despre utilizare și costuri.</li><br/>
        <li><strong>Setări</strong> deschide panoul de setări.</li><br/>
        <li><strong>Istoric</strong> afișează istoricul utilizării, cu textul de intrare și cel de ieșire.</li><br/>
        <li><strong>Utilizator</strong> afișează numele utilizatorului conectat (doar pe web).</li>
      </ul>

</td>
  </tr>
</table>

<br/>

<a id="toolbar"></a>

### Bara de instrumente

Bara de instrumente se modifică ușor în funcție de locul în care vă aflați în aplicație.

- Pe partea stângă, este afișat numele paginii curente.
- Pe partea dreaptă, sunt afișate **selectorul de model** și butonul pentru **limba interfeței**.

**Selectorul de model** vă permite să alegeți ce motor de inteligență artificială să utilizați pentru sarcina curentă.

  ![Selector de model](../images/screenshots/ro/model-selector.png)

Unele modele gratuite pot să nu fie întotdeauna disponibile – uneori sunt offline sau au un limită de utilizare. Dacă se întâmplă acest lucru, aplicația va elimina automat acel model din lista dvs. disponibilă. Pentru a controla care modele apar, accesați [**Setări** > **Modele**](#models) și editați lista de modele. 
De asemenea, puteți deschide setările modelului direct, făcând clic pe pictograma furnizorului situată în stânga numelui modelului din bara de instrumente.

<br/>

Pictograma **cu glob + codul limbii** modifică limba interfeței aplicației, cum ar fi meniurile și butoanele. Aceasta **nu** schimbă limbile de traducere utilizate în **Traducere**.

![Selectorul limbii interfeței](../images/screenshots/ro/language-selector.png)

<br/>

<a id="input-and-output-panels"></a>

### Panouri de intrare și ieșire

Majoritatea spațiilor de lucru folosesc un panou **Intrare** în stânga și un panou **Ieșire** în dreapta.

Fiecare panou arată, de asemenea:

| **Intrare**                                                          | **Ieșire**                                                                                                                  |
|----------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------|
| - Numărul de caractere <br/>- Numărul de cuvinte <br/>- Numărul de paragrafe   <br/> | - Cât timp a durat sarcina<br/>- **TPS** (tokenuri pe secundă)<br/>- Numărul de caractere, cuvinte și paragrafe<br/>- Modelul utilizat |

Dacă vă întrebați despre termenii tehnici:

- **Token** înseamnă o bucată mică de text. Puteți considera acest lucru ca fiind o parte dintr-un cuvânt sau un cuvânt scurt.
- **TPS** înseamnă câte dintre aceste bucăți de text a procesat modelul în fiecare secundă.

<br/>

De asemenea, puteți monitoriza costul fiecărei operațiuni (dacă este disponibil) și costul total, activând opțiunea `Afișează informații despre costuri pentru acțiuni` la [**Setări** > **Setări generale**](#general-settings).

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="translate"></a>

## Traduce

Utilizați **Traduce** atunci când doriți să convertiți text dintr-o limbă în alta.

![Spațiul de lucru Traduce](../images/screenshots/ro/translate.png)

<br/>

<a id="translate-text"></a>

### Tradu textul

1. Deschide **Traducere**.
2. Alege o limbă în **Din**.
3. Alege o limbă în **În**.
4. Alege un model în bara de instrumente.
5. Tastează sau lipește textul în **Intrare**.
6. Apasă **Tradu**.
7. Citește rezultatul în **Ieșire**.
8. Folosește butonul de copiere dacă dorești să copiezi rezultatul.

<br/>

<a id="language-selection"></a>

### Selectarea limbii

- **Din** poate fi o limbă specifică sau **Detectare limbă**.
- **În** este limba în care doriți să fie rezultatul.

Limbile selectate ca **Limbi preferate** apar în partea superioară a listei. Le puteți configura în [**Setări** > **Limbi**](#languages).

<br/>

<a id="helpful-translation-settings"></a>

### Setări utile pentru traducere

În [**Setări** > **Setări generale**](#general-settings), puteți modifica modul în care funcționează traducerea:

- **Traducere automată la lipire** efectuează o traducere imediat ce lipiți un text.
- **Copiere automată a rezultatului în clipboard** copiază automat rezultatul după o traducere reușită.
- **Traducere în timp real (în timp ce scrieți)** efectuează traduceri în timp ce tastați.
- **Timeout (ms)** controlează cât timp așteaptă aplicația înainte de a executa o traducere în timp real.
- **Enter** controlează ce se întâmplă când apăsați `Enter`:

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="rewrite"></a>

## Rescrie

Folosiți **Rescrie** când doriți să îmbunătățiți formularea fără a schimba sensul principal.

![Spațiu de lucru Rescrie](../images/screenshots/ro/rewrite.png)

Aceasta este utilă pentru:

- corectarea gramaticii și a ortografiei (**Verifică ortografia și gramatica**)
- clarificarea textului (**Îmbunătățește claritatea**)
- mai multe reformulări distincte într-o singură execuție (**Versiuni alternative**)
- modificarea nivelului de formalitate al textului (**Formal** / **Informal**)
- scurtarea sau extinderea textului (**Scurtează** / **Extinde**)
- oferirea unui ton mai tehnic textului (**Fă mai tehnic**)

<br/>

> 💡 **SUGESTIE**<br/>
> Când utilizați modul „**Verifică ortografia și gramatica**”, apare un comutator **Arată modificările** în panoul de rezultate (lângă **Copiază**).
> Pornește-l sau oprește-l pentru a afișa sau ascunde corecțiile specifice aplicate textului dumneavoastră.


<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="transform"></a>

## Transformare

Utilizați **Transformare** atunci când doriți ca IA să urmeze un set personalizat de instrucțiuni.

![Spațiu de lucru Transformare](../images/screenshots/ro/transform.png)

Aceasta este zona cea mai flexibilă a aplicației. O puteți folosi pentru sarcini precum:

- rezumarea notițelor
- transformarea unui text brut într-un e-mail finalizat
- extragerea punctelor cheie
- convertirea textului într-un format specific
- orice altă activitate personalizată cu textul introdus

<br/>

<a id="run-an-existing-prompt"></a>

### Rulați un prompt existent

1. Deschideți **Transformare**.
2. Alegeți un prompt din lista de prompt-uri.
3. Dacă apare o casetă **Limbă țintă**, alegeți o limbă dacă doriți.
4. Scrieți sau inserați text în **Intrare**.
5. Faceți clic pe **Transformare**.
6. Citiți rezultatul în **Ieșire**.

<br/>

<a id="if-you-have-no-prompts-yet"></a>

### Dacă nu ați creat încă niciun prompt

Dacă lista dumneavoastră de prompturi este goală, faceți clic pe **Încarcă prompturi de exemplu** în spațiul de lucru Transform. Același buton este mereu disponibil în secțiunea de import/export din [**Setări** > **Transformă Prompturi**](#transform-prompts). Ambele acțiuni adaugă exemple integrate, astfel încât să puteți începe rapid.

<br/>

> ℹ️ **NOTĂ**<br/>
> Prompturile de exemplu sunt furnizate în limba engleză. După ce le încărcați, puteți edita un prompt și utiliza opțiunea **Tradu promptul** pentru a-l converti în limba dumneavoastră.

<br/>

<a id="create-a-prompt-quickly"></a>

### Creați rapid un prompt

Cea mai rapidă cale de a crea un prompt este:

1. Faceți clic pe **New prompt** (Creare prompt).
2. Faceți clic pe **Generate prompt** (Generare prompt).
3. Descrieți ce doriți să facă promptul.
4. Alegeți un model.
5. Lăsați aplicația să creeze un draft pentru dumneavoastră.
6. Revizuiți draftul și faceți clic pe **Save** (Salvare).

![Generate prompt](../images/screenshots/ro/transform-generate.png)


<br/>

<a id="edit-a-prompt"></a>

### Editarea unui prompt

Când creezi sau editezi un prompt, editorul apare în stânga, iar o zonă de testare apare în dreapta.

![Editor transformare prompt](../images/screenshots/ro/transform-prompt-edit.png)

Câmpurile principale sunt:

- **Numele promptului**: numele afișat în lista de prompturi.
- **Instrucțiuni pentru prompt (opțional)**: o scurtă indicație afișată utilizatorului atunci când rulează promptul.
- **Rolul modelului**: rolul general atribuit IA, de exemplu „Tu ești un asistent util.”
- **Instrucțiuni pentru model (una pe linie)**: regulile specifice pe care dorești ca IA să le urmeze.
- **Descrierea ieșirii**: un cuvânt scurt care descrie rezultatul, de exemplu „rezumat” sau „rescriere”.
- **Temperatura (0,0 → 1,0)**: modul în care va acționa modelul; vezi mai jos.
- **Cere limba țintă**: adaugă un selector de limbă țintă atunci când este rulat promptul.

Dacă termenul tehnic **Temperatură** este nou pentru tine, poți gândi astfel:

- O temperatură **mai scăzută** oferă rezultate mai stabile și mai previzibile.

- O **temperatură mai mare** conferă mai multă varietate și creativitate.

Puteți, de asemenea, utiliza:

- **`Generare prompt`** pentru a crea un nou draft pornind de la o descriere simplă
- **`Îmbunătățire prompt`** pentru a refigura un prompt existent
- **`Traducere prompt`** pentru a traduce câmpurile promptului

<br/>

> ⚠️ **ATENȚIE**<br/>
> Apăsați pe **`Salvare`** înainte de a apăsa pe **`Înapoi la Rulare`**. Dacă ieșiți fără să salvați, modificările vor fi pierdute.

<br/>

<a id="test-a-prompt-before-using-it"></a>

### Testați un prompt înainte de a-l utiliza

Panoul de testare din dreapta vă permite să încercați promptul cu un text eșantion înainte de a-l folosi în activitatea zilnică.

Acest lucru este util atunci când:

- creați un prompt nou
- comparați două versiuni ale unui prompt
- doriți să verificați tonul, lungimea sau formatul ieșirii

<br/>

> ℹ️ **NOTĂ**<br/>
> Puteți exporta și importa prompturi salvate în secțiunea [**Setări** > **Transformă Prompturi**](#transform-prompts).

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="dashboard"></a>

## Tablou de bord

Utilizați **Tabloul de bord** pentru a vedea cât de mult utilizați aplicația și ce costuri are aceasta (pentru modelele plătite).

![Rezumat tablou de bord](../images/screenshots/ro/dashboard-summary.png)


<br/>

> ℹ️ **NOTĂ**<br/>
> Dacă utilizați doar modele **gratuite**, sumele pentru **cost** pot fi zero, iar rezumatele bazate pe cost pot părea goale. În secțiunile **Rezumat**, **Utilizare în timp** și **Utilizare pe model** vor fi totuși afișate **numărul de apeluri** (traduceri, rescrieri și transformări) dacă ați avut activitate în perioada selectată.

<br/>

<a id="filter-the-data"></a>

### Filtrarea datelor

Utilizați butoanele de filtrare de sus pentru a schimba intervalul de timp.

![Filtre dashboard](../images/screenshots/ro/dashboard-filter.png)

<br/>

> ℹ️ **OBSERVAȚIE**<br/>
> Filtrul **Utilizator** este vizibil doar pentru administratori în versiunea web. Utilizatorii obișnuiți nu vor vedea acest filtru, iar acesta nu este disponibil în aplicația desktop.

<br/>

<a id="dashboard-tabs"></a>

### Taburile tabloului de bord

- **Rezumat** vă oferă o imagine de ansamblu asupra utilizării și costurilor. Include o secțiune **Utilizare în timp** (numărul apelurilor cumulate și stivuite pe zi pentru traducere, rescriere și transformare) și **Utilizare pe model** (numărul total de apeluri pe model, inclusiv transformare).
- **După utilizare** detaliază activitatea pe limbă de traducere, mod de rescriere și prompt de transformare.
- **După model** arată ce modele ați folosit și costul acestora.
- **Pe zi** arată totalurile zilnice.
- **Toate apelurile** afișează istoricul complet al apelurilor și vă permite exportul acestuia.

<br/>

<a id="export-data"></a>

### Exportă datele

Tablourile din panoul de control pot exporta datele în următoarele formate:

- **JSON**
- **CSV**
- **XLSX**

Aceasta este utilă dacă doriți să analizați activitatea în afara aplicației sau să partajați un raport.

<br/>

<a id="delete-stored-records-for-a-model"></a>

### Ștergerea înregistrărilor stocate pentru un model

În secțiunile **După model** sau **Toate apelurile**, puteți elimina înregistrările stocate pentru un model făcând clic pe pictograma „coș de gunoi”.

> ⚠️ **ATENȚIE**<br/>
> Ștergerea înregistrărilor stocate este ireversibilă. Folosiți această opțiune doar dacă sunteți sigur că nu mai aveți nevoie de acea istorie.

Pentru a șterge toate datele sau pentru a elimina înregistrări în funcție de vechimea lor, accesați [**Setări** > **Urmărirea costurilor**](#cost-tracking). Acolo veți găsi opțiuni pentru a șterge toate datele stocate sau doar datele mai vechi decât o anumită dată.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="history"></a>

## Istoric

Faceți clic pe **Istoric** pentru a vizualiza istoricul acțiunilor dvs. în cadrul **Transrewrt**, inclusiv intrarea și ieșirea fiecărei operațiuni.

![Pagina Istoric](../images/screenshots/ro/history.png)

<br/>

<a id="filter-the-history"></a>

### Filtrarea datelor

**Istoricul** utilizează aceleași filtre ca și pagina **Tabloul de bord**. Utilizați-le pentru a selecta intervalul de timp.

![Filtre tablou de bord](../images/screenshots/ro/dashboard-filter.png)

<br/>

> ℹ️ **NOTĂ**<br/>
> Filtrul **Utilizator** este vizibil doar administratorilor în versiunea web. Utilizatorii obișnuiți nu vor vedea acest filtru, iar acesta nu este disponibil în aplicația desktop.

<br/>

<a id="export-history-data"></a>

###  Exportarea datelor din istoric

Pagina de istoric poate exporta datele filtrate în următoarele formate:

- **JSON**
- **CSV**
- **XLSX**

Aceasta este utilă dacă doriți să examinați activitatea în afara aplicației sau să partajați un raport.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="settings"></a>

## Setări

Deschideți **Setări** din bara laterală pentru a personaliza modul în care funcționează aplicația.

Filele disponibile depind de platformă și de rolul dumneavoastră:

| Tab | Desktop | Web (administrator) | Web (utilizator obișnuit) |
|-------------------|:-------:|:-----------:|:------------------:|
| Setări generale | da | da | da |
| Modele | da | da | da |
| Limbi | da | da | da |
| Urmărire costuri | da | da | — |
| Transformare prompturi | da | da | da |
| Utilizatori | — | da | — |
| Configurare API | da | da | — |
| Despre | da | da | da |

<br/>

> ℹ️ **NOTĂ**<br/>
> În versiunea web, fiecare utilizator are propria configurație. Setările precum modelele selectate, limbile, opțiunile generale și cererile de transformare sunt stocate individual pentru fiecare utilizator. Modificările pe care le efectuați nu afectează ceilalți utilizatori.

<br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="general-settings"></a>

### Setări generale

Utilizați **Setări generale** pentru a controla comportamentul tastării, dacă detaliile execuției sunt stocate în **Istoric** și aspectul aplicației.

**Comportament**

- **Comportamentul tastei ENTER** alege dacă `Enter` execută sarcina sau inserează o linie nouă.
- **Auto-traducere la copiere** pornește traducerea imediat ce lipsești un text.
- **Copiere automată a rezultatului în clipboard** copiază automat rezultatele cu succes.
- **Traducere în timp real (în timpul tastării)** traduce în timp ce scrii.
- **Timeout (ms)** setează durata de așteptare pentru traducerea în timp real.

**Istoric**

- **Păstrare istoric execuții** controlează dacă fiecare traducere, rescriere și transformare stochează **textul de intrare și cel de ieșire** în vizualizarea laterala [**Istoric**](#history). Dezactivarea acestei opțiuni cere confirmare; dacă confirmați, textul istoric stocat este șters din baza de date.

- **Șterge datele istoricului** vă permite să eliminați textul stocat în funcție de vechime (de exemplu, mai vechi de câteva luni sau **toate datele (curățare completă)**), utilizând **Șterge date**. Aceasta afectează doar textul salvat pentru vizualizarea **Istoric**; **nu** șterge totalurile de cost sau utilizare. Pentru a elimina sau reduce datele despre **cost**, utilizați [**Setări** > **Urmărirea costurilor**](#cost-tracking).

**Aspect**

- **Afișează informațiile despre cost în acțiuni** controlează afișarea costului per operațiune (dacă este disponibil) și a costului total în panourile de ieșire pentru Traducere, Rescriere și Transformare.
- **Numărul de zecimale pentru cost** modifică modul în care sunt afișate zecimalele costului.
- **Doar pentru web:** **afișează o margine în jurul aplicației** adaugă spațiu suplimentar în jurul interfeței.
- **Familia de fonturi** modifică fontul scrisului în panourile de text.
- **Dimensiune** modifică dimensiunea fontului.

**Copie de siguranță a configurației**

- **Include datele de utilizare în copia de siguranță** — atunci când este activată, arhiva ZIP conține, de asemenea, istoricul execuțiilor și datele apelurilor API.

- **Configurare backup** — creează un singur fișier ZIP (`transrewrt-config-backup-YYYY-MM-DD_HHMMSS.zip` în UTC, implicit) care include `config.json`, `state.json`, cheia opțională de criptare, utilizatori, preferințe, prompturi personalizate și datele de utilizare, dacă ați activat această opțiune. După finalizarea cu succes a operațiunii de backup, confirmarea va afișa numele fișierului salvat.
- **Restaurare din backup** — deschide mai întâi o **fereastră de confirmare**. Alegeți fișierul ZIP de backup în cadrul ferestrei (**Răsfoiește** / selector de fișiere sau glisați și plasați fișierul, acolo unde este suportat), apoi verificați opțiunile:
  - **Restaurează datele de utilizare** — importă istoricul/utilizarea din fișierul ZIP dacă acesta a fost salvat împreună cu datele de utilizare; dezactivați dacă doriți doar să restaurați setările și prompturile.
  - **Șterge datele vechi de utilizare înainte de restaurare** — elimină utilizarea/istoricul existent de pe această instanță înainte de a aplica backupul (opțional; utilizați această opțiune atunci când doriți o înlocuire completă).

Copiile de rezervă create în versiunea web sau în cea desktop pot fi restaurate în cealaltă versiune. Când se restaurează o copie de rezervă desktop în versiunea web, datele vor fi restaurate pentru utilizatorul administrator.


<br/>

<a id="models"></a>

### Modele

Utilizați **Setări** > **Modele** pentru a alege ce modele apar în bara de instrumente.

![Fila Setări Modele](../images/screenshots/ro/settings-models.png)

Pagina are două liste:

- **Modele disponibile** în partea stângă
- **Modele selectate** în partea dreaptă

Controalele utile includ:

- **Căutare modele...** pentru a găsi un model după nume
- Cipurile **Furnizor** pentru a reduce lista la un singur motor (OpenRouter, OpenAI, Ollama, …)
- **Doar gratuite** pentru a afișa doar modelele gratuite
- **Reîmprospătare** pentru a reîncărca lista
- **Extinde totul** și **Restrânge totul** când sortați după furnizor

ID-urile modelelor includ prefixul furnizorului (de exemplu `openrouter/…` față de `openai/…`). Insigne precum **OpenAI (OpenRouter)** față de **OpenAI (direct)** arată cum este direcționat traficul.

> ℹ️ **NOTĂ**<br/>

> **OpenRouter Body Builder** (`openrouter/bodybuilder`) este un model de rutare, nu un model general de conversație: răspunsul său este un fișier JSON care descrie corpuri de cereri API OpenRouter (de exemplu un array `requests` cu `model` și `messages`). Dacă îl folosiți pentru **Traducere**, **Rescriere** sau **Transformare**, panoul de ieșire va afișa acel JSON în locul textului finalizat. Alegeți un model obișnuit de text pentru aceste sarcini. Consultați [pagina modelului Body Builder](https://openrouter.ai/openrouter/bodybuilder) pe OpenRouter.

Acțiuni:

 - Pentru a adăuga un model, faceți clic pe **Adăugare** sau oriunde în înregistrare.

 - Pentru a elimina un model, faceți clic pe **X** lângă acesta în **Modele Selectate** sau pe **Selectat** în intrarea din Modele Disponibile.

 - Pentru a golisi lista, faceți clic pe **Deselectează toate**. Modelul gratuit necesar va rămâne în listă.

<br/>

> ℹ️ **NOTĂ**<br/>

> Dacă nu doriți să adăugați credite pentru OpenRouter imediat, începeți prin activarea opțiunii **Doar Gratuit** și alegerea modelelor gratuite (nu este necesar card de credit). De asemenea, puteți utiliza Ollama pentru a rula modele local, fără nicio cheie API.

<br/>

<a id="languages"></a>

### Limbi

Utilizați **Setări** > **Limbi** pentru a organiza listele de limbi utilizate în aplicație.

- **Limbi principale** sunt fixate în partea superioară a listelor de limbi din **Traducere** și **Transformare**.
- **Limbă personalizată** vă permite să adăugați o limbă care nu se află în lista integrată.

Dacă adăugați o limbă personalizată, aceasta va apărea în selectorii de limbă alături de opțiunile integrate.

<br/>

<a id="cost-tracking"></a>

### Urmărirea costurilor

Utilizați **Setări** > **Urmărire costuri** pentru a gestiona informațiile privind costurile.

- **Cost total** afișează totalul cumulat.
- **Copiază valoarea** copiază totalul în clipboard.
- **Resetează costul** resetează totalul stocat la zero.
- **Sincronizează cu utilizarea cheii API** setează totalul să corespundă utilizării raportate de contul dumneavoastră OpenRouter (doar pentru OpenRouter).
- **Utilizarea cheii API** afișează detaliile de utilizare OpenRouter, dacă sunt disponibile.
- **Șterge datele privind costurile** elimină toate datele sau doar intrările mai vechi decât o dată selectată.

**Urmărirea costurilor:** Când utilizați modele OpenRouter, aplicația vă arată utilizarea și cheltuielile reale în funcție de informațiile de cost primite de la OpenRouter. Pentru toți ceilalți furnizori, aplicația estimează costurile utilizând prețurile publicate de OpenRouter; dacă un preț nu este disponibil, estimarea poate fi zero.

<br/>

> ℹ️ **NOTĂ**<br/>
> **Toate valorile costurilor sunt estimări pentru referința dumneavoastră, nu reprezintă facturi oficiale.**

<br/>

> ⚠️ **ATENȚIE**<br/>

> Ștergerea datelor nu poate fi anulată. Înainte de a șterge, asigurați-vă că v-ați salvat datele sau le-ați exportat prin intermediul [**Istoric**](#history)  
> sau [**Tablou de bord** > **Toate apelurile**](#dashboard-tabs); în caz contrar, acestea vor fi pierdute definitiv.  
> Tot istoricul de intrare/ieșire asociat fiecărei înregistrări a apelurilor API va fi, de asemenea, șters.


<br/>

<a id="transform-prompts"></a>

### Transformarea prompturilor

Utilizați **Setări** > **Transformați prompturi** pentru a gestiona prompturile în bloc.

Puteți:

- examina prompturile salvate
- șterge prompturi
- importa prompturi dintr-un fișier
- exporta prompturi pentru copie de siguranță sau partajare
- încărca prompturi eșantion în lista de prompturi

<br/>

<a id="users"></a>

### Utilizatori

Utilizați **Utilizatori** pentru a gestiona conturile de utilizator în versiunea web. Puteți adăuga utilizatori, actualiza detaliile acestora, reseta parolele și șterge conturi.

<br/>

<a id="api-config"></a>

### Configurare API

Providerii suportați sunt: OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras și **Ollama** (modele locale prin intermediul unei adrese URL de bază). Trebuie să configurați doar providerii pe care îi utilizați.

**Aplicație web: doar administrator**

Cheile API se configurează prin variabile de mediu în sistem sau în Docker — acestea nu sunt introduse în interfața web. Această pagină arată pentru ce provideri este configurată o cheie și vă permite să testați fiecare dintre ei apăsând butonul **`Test`**.

<br/>

> ℹ️ **NOTĂ**<br/>
> Pentru a schimba o cheie API, actualizați variabila de mediu din configurația sistemului sau Docker și reporniți serverul sau containerul.

> ℹ️ **NOTĂ**<br/>

> **Copiile de siguranță ale configurației** (vezi [**Setări generale** → Copie de siguranță a configurației](#general-settings)) pot include în fișierul ZIP în format **rezolvat** cheile furnizorilor în `config.json`. Restaurarea acelui ZIP **nu** copiază acele chei înapoi în fișierul de configurație păstrat pe server — cheile active vin în continuare din mediul în care rulează aplicația și din starea fișierului existent, conform celor descrise anterior.

<br/>

**Aplicație desktop**

Utilizați **Configurare API** pentru a stoca cheile API pentru fiecare furnizor pe care îl utilizați. Pentru Ollama, introduceți **adresa URL de bază** în loc de o cheie API.

<br/>

> 💡 **Sfat** <br/>
> Dacă nu doriți să folosiți o cheie API sau să plătiți pentru utilizare, puteți [descărca Ollama](https://ollama.com) și rula modele (de exemplu, `translategemma:4b`) local, gratuit, pe calculatorul dumneavoastră. Alternativ, puteți crea un cont gratuit OpenRouter (fără nevoie de card de credit) pentru a utiliza modelele lor gratuite sau obține o cheie API gratuită de la Cerebras, Google, Groq sau Mistral AI.

<br/>

- Adăugați doar furnizorii de care aveți nevoie. În **Setări** > **Modele**, fiecare ID de model începe cu numele furnizorului (de exemplu `openrouter/openrouter/free`, `openai/gpt-4o`, `ollama/llama3`).

Pentru a adăuga o cheie API, introduceți valoarea în câmpul de text și faceți clic pe **`Salvare`**. Pentru a înlocui o cheie existentă, faceți clic pe **`Editare`**. Pentru a verifica dacă o cheie funcționează, faceți clic pe **`Test`**. În cazul URL-ului de bază Ollama, faceți întotdeauna clic pe **`Test`** pentru a verifica conexiunea.

<br/>

> ℹ️ **NOTĂ**<br/>
> Nu puteți vedea valoarea actuală a unei chei API. O puteți înlocui doar utilizând butonul **`Editare`**.
> Cheile API sunt stocate criptat în configurație.

<br/>

<a id="about"></a>

### Despre

Fila **Despre** afișează:

- numele aplicației
- numărul versiunii
- data build-ului
- un link către depozitul proiectului

<br/><br/>

<a id="common-issues"></a>

## Probleme comune

Dacă ceva nu funcționează așa cum este de așteptat, verificați mai întâi următoarele puncte.

<br/>

<a id="the-app-will-not-translate-rewrite-or-transform-text"></a>

### Aplicația nu va traduce, rescrie sau transforma textul

Verificați următoarele:

- ați selectat un model în bara de instrumente
- cel puțin un model este listat în [**Setări** > **Modele**](#models)
- configurarea API-ului funcționează

Dacă utilizați aplicația desktop:

1. Deschideți [**Setări** > **Configurare API**](#api-config).
2. Verificați dacă cel puțin o cheie API este salvată.
3. Clic pe **Test** lângă furnizor pentru a confirma că cheia funcționează.

<br/>

<a id="the-model-list-is-empty"></a>

### Lista de modele este goală

Deschide [**Setări** > **Modele**](#models) și apasă **Reîmprospătează**.

Dacă este necesar:

- caută un model
- activează **Doar gratuite**
- adaugă unul sau mai multe modele la **Modele selectate**

<br/>

<a id="the-result-is-too-slow-or-too-expensive"></a>

### Rezultatul este prea lent sau prea scump

Încercați una sau mai multe dintre următoarele opțiuni:

- alegeți un alt model
- utilizați o intrare mai scurtă
- dezactivați **Traducerea în timp real (în timp ce scrieți)** în [**Setări** > **Setări generale**](#general-settings)
- utilizați modele gratuite pentru sarcini simple (consultați [Modele](#models))

<br/>

<a id="the-interface-is-in-the-wrong-language"></a>

### Interfața este în limba greșită

Faceți clic pe pictograma globului din [bara de instrumente](#toolbar) și alegeți **limba interfeței** preferată.

<br/>

<a id="the-text-is-too-small-or-hard-to-read"></a>

### Textul este prea mic sau greu de citit

Deschideți [**Setări** > **Setări generale**](#general-settings) și modificați:

- **Familia fontului**
- **Mărimea**

<br/>

<a id="dashboard-charts-are-empty"></a>

### Graficele de pe tabloul de bord sunt goale

Acest lucru este normal dacă:

- utilizați doar **modele gratuite** și verificați datele referitoare la **costuri** (acestea pot fi zero); graficele cu numărul apelurilor în secțiunea **Rezumat** necesită totuși date din perioada selectată
- **filtrul de timp** selectat nu include perioada în care au fost efectuate apeluri — încercați opțiunea **Toate** pentru a verifica

Dacă graficele rămân goale după selectarea opțiunii **Toate**, verificați dacă apelurile apar în secțiunea [**Istoric**](#history) sau în fila **Toate apelurile**.

<br/>

<a id="cost-shows-not-available-or-seems-wrong"></a>

### Costul afișează „ne disponibil” sau pare incorect

Când utilizați modele prin **OpenRouter**, aplicația vă afișează cheltuielile reale raportate de OpenRouter.

Pentru **alte furnizori** (OpenAI direct, Anthropic direct etc.), costul este estimat pe baza datelor de preț publicate de OpenRouter. Dacă nu se găsește un preț potrivit pentru un model, costul va apărea ca fiind **ne disponibil** și nu va fi adăugat la totalul dvs. curent.

<br/>

<a id="total-cost-does-not-match-my-provider-bill"></a>

### Costul total nu se potrivește cu factura furnizorului meu

Toate cifrele de cost din aplicație sunt **estimări doar pentru referință**, nu declarații oficiale de facturare.

Pentru a aduce totalul cât mai aproape de cheltuielile reale de pe OpenRouter, deschideți [**Setări** > **Urmărirea costurilor**](#cost-tracking) și apăsați pe **Sincronizează cu utilizarea cheii API**.

<br/>

<a id="the-history-page-is-missing-from-the-sidebar"></a>

### Pagina Istoric lipsește din bara laterală

Opțiunea **Păstrează istoricul execuției** ar putea fi dezactivată. Deschideți [**Setări** > **Setări generale**](#general-settings) și activați-o. Rețineți că activarea acesteia nu va recupera datele din istoric care au fost deja șterse.

<br/>

<a id="web-app-session-expired"></a>

### Aplicație web: redirecționare neașteptată către pagina de autentificare

Este posibil ca sesiunea dvs. să fi expirat. Autentificați-vă din nou. Dacă acest lucru se întâmplă frecvent, verificați configurația serverului pentru setările duratei sesiunii.

<br/>

<a id="web-admin-forgot-or-lost-a-password"></a>

### Web admin: ați uitat sau ați pierdut parola

Aceasta se aplică **aplicației web auto-găzduită** (Docker), nu aplicației desktop (Electron).

- Dacă un alt administrator se poate conecta încă, acesta poate deschide [**Setări** > **Utilizatori**](#users), poate selecta contul și poate seta o **parolă nouă** acolo.
- Dacă sunteți **blocat afară**, dar aveți **acces shell** la mașină sau container, resetați parola cu ajutorul utilitarului livrat împreună cu imaginea (înlocuiți `transrewrt` dacă ați schimbat numele implicit, și puneți parola între ghilimele dacă conține spații sau caractere speciale):

```bash
docker exec transrewrt reset-web-password '<username>' '<new-password>'
```

Numele implicit de administrator este `admin`, dacă nu ați creat alte conturi. Când transmiteți doar un argument, acesta este tratat ca parolă nouă pentru `admin`.

Dacă rulați dintr-un **checkout sursă** în loc de Docker, utilizați:

```bash
pnpm run reset-web-password -- <username> <new-password>

Scriptul actualizează înregistrarea utilizatorului în baza de date SQLite (și poate crea utilizatorul `admin`, dacă lipsește). După resetare, autentificați-vă cu noua parolă.


<br/>

<a id="dashboard-shows-no-data-for-other-users"></a>

### Tabloul de bord nu afișează date pentru alți utilizatori (web)

Doar **administratorii** pot vizualiza datele tuturor utilizatorilor prin filtrul **Utilizator**. În mod normal, utilizatorii obișnuiți văd doar activitatea proprie.

<br/>

<a id="i-changed-a-prompt-and-lost-the-edits"></a>

### Am modificat un prompt și am pierdut modificările

Atunci când editați un prompt, faceți întotdeauna clic pe **Salvare** înainte de a face clic pe **Înapoi la execuție**.

<br/><br/>

<a id="quick-tips"></a>

## Sfaturi rapide

- Începeți cu [**Traducere**](#translate) pentru a vă asigura că configurația funcționează înainte de a trece la [**Rescriere**](#rewrite) sau [**Transformare**](#transform).
- Utilizați [**Rescriere**](#rewrite) pentru îmbunătățiri obișnuite ale formulării textului.
- Utilizați [**Transformare**](#transform) atunci când aveți nevoie de un flux de lucru reutilizabil pentru o anumită sarcină.
- Utilizați [**Panou de control**](#dashboard) dacă doriți să urmăriți utilizarea și costurile.
- Utilizați [**Istoric**](#history) pentru a revizui operațiunile anterioare și întregul text de intrare/ieșire.
- Exportați prompturile periodic dacă creați o bibliotecă de prompturi pe care doriți să o păstrați în siguranță (vezi [Prompturi de transformare](#transform-prompts)) sau dacă doriți să le partajați cu alții.

<br/><br/>

<a id="disclaimer"></a>

## Declin de responsabilitate

Numele și iconurile produselor aparțin deținătorilor lor respectivi și sunt folosite doar în scop de identificare. Acest software nu este afiliat cu și nici nu este susținut de niciuna dintre mărcile menționate.

<br/><br/>

<a id="license"></a>

## Licență

Drepturi de autor © 2026 Waldemar Scudeller Jr.

[Licența Apache 2.0](LICENSE)