---
translated_at: "2026-03-24T02:52:55.857Z"
source_hash: "fc671c16dd34a2c355752935670712beb8abd2ae65453de44983a2f2f0701696"
source_mtime: 1774306679773.736
model: "qwen/qwen3-235b-a22b-2507"
---
![Transrewrt banner](../images/transrewrt_banner.png)


<a id="transrewrt-user-guide"></a>
# Ghidul Utilizatorului

<br/>

<a id="introduction"></a>
## Introducere

Transrewrt vă ajută să lucrați cu textul în trei moduri principale:

- **Traducere** - convertirea textului dintr-o limbă în alta.
- **Rescriere** - reformularea textului într-un alt stil, de exemplu mai clar, mai concis sau mai formal.
- **Transformare** - procesarea textului folosind instrucțiuni personalizate AI, numite prompturi.

<br/>

Acest ghid explică cum utilizați aplicația după ce a fost instalată și este în funcțiune. Pentru pașii de instalare, consultați fișierul principal **[README](README.ro.md)**.

<br/>

> ℹ️ **NOTĂ**<br/>
> Transrewrt este disponibil ca aplicație desktop pentru Windows și Linux și ca aplicație web auto-găzduită. Acest ghid se concentrează pe utilizarea zilnică a aplicației. Situațiile care se aplică doar unei singure versiuni sunt marcate clar.

<small>**Citiți în alte limbi:** [English (UK)](USER-GUIDE.ro.md) · [Português (BR)](USER-GUIDE.pt-BR.md) · [العربية](USER-GUIDE.ar.md) · [বাংলা](USER-GUIDE.bn.md) · [Català](USER-GUIDE.ca.md) · [简体中文](USER-GUIDE.zh-CN.md) · [繁體中文](USER-GUIDE.zh-TW.md) · [Hrvatski](USER-GUIDE.hr.md) · [Čeština](USER-GUIDE.cs.md) · [Nederlands](USER-GUIDE.nl.md) · [English (US)](USER-GUIDE.en-US.md) · [Filipino](USER-GUIDE.tl.md) · [Français](USER-GUIDE.fr.md) · [Deutsch](USER-GUIDE.de.md) · [Ελληνικά](USER-GUIDE.el.md) · [हिन्दी](USER-GUIDE.hi.md) · [Magyar](USER-GUIDE.hu.md) · [Italiano](USER-GUIDE.it.md) · [日本語](USER-GUIDE.ja.md) · [Basa Jawa](USER-GUIDE.jv.md) · [한국어](USER-GUIDE.ko.md) · [Bahasa Melayu](USER-GUIDE.ms.md) · [فارسی](USER-GUIDE.fa.md) · [Polski](USER-GUIDE.pl.md) · [Português (PT)](USER-GUIDE.pt.md) · [ਪੰਜਾਬੀ](USER-GUIDE.pa.md) · [Română](USER-GUIDE.ro.md) · [Русский](USER-GUIDE.ru.md) · [Slovenčina](USER-GUIDE.sk.md) · [Español](USER-GUIDE.es.md) · [Kiswahili](USER-GUIDE.sw.md) · [Svenska](USER-GUIDE.sv.md) · [తెలుగు](USER-GUIDE.te.md) · [ภาษาไทย](USER-GUIDE.th.md) · [Türkçe](USER-GUIDE.tr.md) · [Українська](USER-GUIDE.uk.md) · [Tiếng Việt](USER-GUIDE.vi.md)</small>

<br/>

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Cuprins** 

- [Înainte de a începe](#before-you-start)
  - [Cum obțineți o cheie API OpenRouter gratuită (aplicație desktop)](#how-to-get-a-free-openrouter-api-key-desktop-app)
- [Primi pași](#getting-started)
- [Părțile principale ale ferestrei](#main-parts-of-the-window)
  - [Bara laterală](#sidebar)
  - [Bara de unelte](#toolbar)
  - [Panourile de intrare și ieșire](#input-and-output-panels)
- [Traducere](#translate)
  - [Traducerea textului](#translate-text)
  - [Selectarea limbii](#language-selection)
  - [Setări utile pentru traducere](#helpful-translation-settings)
  - [Comenzi rapide de la tastatură](#keyboard-shortcuts)
- [Rescriere](#rewrite)
  - [Rescrierea textului](#rewrite-text)
- [Transformare](#transform)
  - [Rularea unui prompt existent](#run-an-existing-prompt)
  - [Dacă nu aveți încă prompturi](#if-you-have-no-prompts-yet)
  - [Crearea rapidă a unui prompt](#create-a-prompt-quickly)
  - [Editarea unui prompt](#edit-a-prompt)
  - [Testarea unui prompt înainte de utilizare](#test-a-prompt-before-using-it)
  - [Gestionarea prompturilor salvate](#manage-saved-prompts)
- [Panou de control](#dashboard)
  - [Filtrarea datelor](#filter-the-data)
  - [Filele panoului de control](#dashboard-tabs)
  - [Exportarea datelor](#export-data)
  - [Ștergerea înregistrărilor stocate pentru un model](#delete-stored-records-for-a-model)
- [Istoric](#history)
  - [Filtrarea datelor](#filter-the-data-1)
  - [Exportarea datelor din istoric](#export-history-data)
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
  - [Aplicația nu traduce, nu rescrie sau nu transformă textul](#the-app-will-not-translate-rewrite-or-transform-text)
  - [Lista modelelor este goală](#the-model-list-is-empty)
  - [Rezultatul este prea lent sau prea costisitor](#the-result-is-too-slow-or-too-expensive)
  - [Interfața este în limba greșită](#the-interface-is-in-the-wrong-language)
  - [Textul este prea mic sau greu de citit](#the-text-is-too-small-or-hard-to-read)
  - [Graficele din panoul de control sunt goale](#dashboard-charts-are-empty)
  - [Costul apare ca „indisponibil” sau pare greșit](#cost-shows-not-available-or-seems-wrong)
  - [Costul total nu se potrivește cu factura furnizorului](#total-cost-does-not-match-my-provider-bill)
  - [Pagina Istoric lipsește din bara laterală](#the-history-page-is-missing-from-the-sidebar)
  - [Aplicația web: redirecționare neașteptată către pagina de autentificare](#web-app-redirected-to-the-login-page-unexpectedly)
  - [Panoul de control nu afișează date pentru alți utilizatori (web)](#dashboard-shows-no-data-for-other-users-web)
  - [Am modificat un prompt și am pierdut modificările](#i-changed-a-prompt-and-lost-the-edits)
- [Sfaturi rapide](#quick-tips)
- [Declinarea răspunderii](#disclaimer)
- [Licență](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="before-you-start"></a>

## Înainte de a începe

Pentru a utiliza Transrewrt, aveți nevoie de acces la cel puțin un furnizor de IA. Furnizorii susținuți sunt: [OpenRouter](https://openrouter.ai) (care agregă multe modele), OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI și [Ollama](https://ollama.com) pentru modele locale.

Nu este necesar să selectați un model plătit pentru a începe. De îndată ce adăugați cheia dumneavoastră API OpenRouter, aplicația activează automat o opțiune **gratuită** integrată OpenRouter. Acest lucru vă permite să începeți traducerea, rescrierea și transformarea textului imediat.

În termeni simpli:

- Un **model** este motorul de IA care efectuează lucrarea. Modelele sunt listate cu un **prefix furnizor** (de exemplu `openrouter/…`, `openai/…`, `ollama/…`).
- O **cheie API** (sau, pentru Ollama, o **URL de bază**) este modul în care aplicația ajunge la acel furnizor.

Dacă utilizați **aplicația desktop**, adăugați cheile în [**Setări** > **Configurare API**](#api-config) pentru fiecare furnizor pe care îl utilizați. Pentru utilizarea exclusivă a OpenRouter, consultați mai jos [Cum obțineți o cheie API](#how-to-get-an-api-key-desktop-app). Dacă nu doriți să folosiți o cheie API, puteți instala Ollama (de la [ollama.com](https://ollama.com)) și utiliza modele locale în schimb.

Dacă utilizați **versiunea web**, administratorul serverului configurează furnizorii prin variabile de mediu, deci în mod obișnuit nu veți introduce chei API personal.

<br/>

<a id="how-to-get-an-api-key-desktop-app"></a>
### Cum obțineți o cheie API OpenRouter gratuită (aplicație desktop)

Dacă utilizați aplicația desktop, urmați acești pași:

1. Accesați [OpenRouter](https://openrouter.ai) în browserul dumneavoastră web.
2. Creați un cont sau autentificați-vă.
3. Accesați pagina [Chei](https://openrouter.ai/keys).
4. Apăsați butonul pentru a crea o nouă cheie API.
5. Atribuiți cheii un nume pentru a o putea recunoaște ulterior.
6. Copiați noua cheie API.
7. Reveniți la Transrewrt și deschideți **Setări** > **Configurare API**.
8. Lipiți cheia în câmpul **Cheie API OpenRouter** (în **Setări** > **Configurare API**).
9. Apăsați **Testați cheia OpenRouter** pentru a vă asigura că funcționează.

<br/>

> ℹ️ **NOTĂ**<br/>
> Puteți începe cu ruta gratuită OpenRouter sau cu oricare dintre celelalte modele gratuite disponibile, fără a adăuga o carte de credit. În multe cazuri, acest lucru este suficient pentru a începe utilizarea Transrewrt fără a alege un model plătit. Alternativ, puteți utiliza Ollama pentru a rula modele local, fără nicio cheie API.

<br/><br/>

<a id="getting-started"></a>
## Primi pași

Dacă este prima dată când utilizați Transrewrt, urmați această ordine:

1. Deschideți aplicația.
2. Alegeți **limba interfeței** din pictograma globului dacă este necesar.
3. Dacă utilizați **aplicația desktop**, deschideți [**Setări** > **Configurare API**](#api-config), adăugați o cheie API pentru cel puțin un furnizor (de exemplu OpenRouter) și apăsați **Test** pentru a verifica dacă funcționează.
4. Deschideți [**Setări** > **Modele**](#models) și adăugați unul sau mai multe modele la **Modele selectate**.
5. Deschideți [**Setări** > **Limbi**](#languages) și alegeți **Limbi principale** dacă doriți ca limbile utilizate cel mai frecvent să apară primele.
6. Accesați **Traducere** și executați o traducere simplă pentru a confirma că totul funcționează.
7. Odată ce aceasta funcționează, încercați **Rescriere**, apoi **Transformare**.

Această ordine este importantă. Previne cel mai frecvent impediment la prima utilizare: încercarea de a executa o sarcină înainte ca aplicația să aibă o conexiune API funcțională sau un model selectat.

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

Utilizați bara laterală pentru a naviga în aplicație. Puteți restrânge bara laterală pentru a obține mai mult spațiu, apăsând pictograma de lângă logo-ul aplicației.

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
        <li><strong>Istoric</strong> afișează istoricul utilizării, cu textul de intrare și cel de ieșire.</li><br/>
        <li><strong>Utilizator</strong> afișează numele utilizatorului autentificat (doar în versiunea web).</li>
      </ul>
    </td>
  </tr>
</table>

<br/>

<a id="toolbar"></a>

### Bara de instrumente

Bara de instrumente se modifică ușor în funcție de locația dvs. în aplicație.

- Pe partea stângă, este afișat numele paginii curente.
- Pe partea dreaptă, apare **selectorul de model** și controlul pentru **limba interfeței**.

**Selectorul de model** vă permite să alegeți ce motor de inteligență artificială să utilizați pentru sarcina curentă.

  ![Selector de model](../images/screenshots/ro/model-selector.png)

> ℹ️ **NOTĂ**<br/>
> Unele modele gratuite pot fi indisponibile uneori — uneori sunt offline sau au o limită de utilizare. Dacă se întâmplă acest lucru, aplicația va elimina automat acel model din lista dvs. disponibilă.<br/>
> Pentru a controla modelele afișate, accesați [**Setări** > **Modele**](#models) și editați lista dvs. de modele. 
> De asemenea, puteți deschide setările modelului direct prin click pe pictograma furnizorului din stânga numelui modelului din bara de instrumente.

<br/>

**Pictograma globului + codul limbii** modifică limba interfeței aplicației, cum ar fi meniurile și butoanele. Aceasta **nu** schimbă limbile de traducere utilizate în **Traducere**.

  ![Selectorul limbii interfeței](../images/screenshots/ro/language-selector.png)

<br/>

<a id="input-and-output-panels"></a>
### Panourile de intrare și ieșire

Majoritatea spațiilor de lucru folosesc un panou **Intrare** în stânga și un panou **Ieșire** în dreapta.

Panoul **Intrare** afișează:

- Numărul de caractere
- Numărul de cuvinte
- Numărul de paragrafe

Panoul **Ieșire** poate afișa:

- Durata sarcinii
- Costul sarcinii (dacă este disponibil)
- Costul total curent
- **TPS** (tokeni pe secundă)
- Numărul de caractere, cuvinte și paragrafe
- Modelul folosit

Dacă vă întrebați despre termenii tehnici:

- **Token** înseamnă o bucată mică de text. O puteți imagina ca o parte dintr-un cuvânt sau un cuvânt scurt.
- **TPS** înseamnă câte dintre aceste bucăți de text sunt procesate de model în fiecare secundă.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="translate"></a>
## Traducere

Utilizați **Traducere** atunci când doriți să convertiți text dintr-o limbă în alta.

![Spațiul de lucru Traducere](../images/screenshots/ro/translate.png)

<br/>

<a id="translate-text"></a>
### Traducerea textului

1. Deschideți **Traducere**.
2. Alegeți o limbă în **Din**.
3. Alegeți o limbă în **Către**.
4. Alegeți un model din bara de instrumente.
5. Tastați sau lipiți text în **Intrare**.
6. Click pe **Tradu**.
7. Citiți rezultatul în **Ieșire**.
8. Utilizați butonul de copiere dacă doriți să copiați rezultatul.

<br/>

<a id="language-selection"></a>
### Alegerea limbii

- **Din** poate fi o limbă specifică sau **Detectează limba**.
- **Către** este limba în care doriți rezultatul.

**Limbele principale** selectate de dvs. apar în partea de sus a listei. Le puteți seta în [**Setări** > **Limbi**](#languages).

<br/>

<a id="helpful-translation-settings"></a>
### Setări utile pentru traducere

În [**Setări** > **Setări generale**](#general-settings), puteți modifica comportamentul traducerii:

- **Traducere automată la lipire** execută o traducere imediat ce lipiți text.
- **Copiază automat rezultatul în clipboard** copiază rezultatul automat după o execuție reușită.
- **Traducere în timp real (în timp ce scrii)** execută traducerile în timp ce scrieți.
- **Timeout (ms)** controlează cât timp așteaptă aplicația înainte de a executa o traducere în timp real.

<br/>

<a id="keyboard-shortcuts"></a>
### Comenzi rapide de la tastatură

În [**Setări** > **Setări generale**](#general-settings), **Comportamentul ENTER** controlează ce se întâmplă când apăsați `Enter`:

- **Enter** poate executa sarcina, iar **Shift+Enter** adaugă o linie nouă.
- Sau aplicația poate face invers.

Modul curent este afișat și pe butonul **Traducere**.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="rewrite"></a>
## Rescriere

Utilizați **Rescriere** atunci când doriți să îmbunătățiți exprimarea fără a schimba sensul principal.

![Spațiul de lucru Rescriere](../images/screenshots/ro/rewrite.png)

Aceasta este utilă pentru:

- corectarea greșelilor de ortografie și gramatică
- clarificarea textului
- făcerea textului mai formal sau mai informal
- scurtarea sau extinderea textului
- făcerea textului să sune mai tehnic

<br/>

<a id="rewrite-text"></a>

### Rescrie textul

1. Deschideți **Rescrie**.
2. Alegeți un **Mod**.
3. Alegeți un model din bara de unelte.
4. Tastați sau inserați textul în câmpul **Intrare**.
5. Apăsați pe **Rescrie**.
6. Examinați rezultatul în câmpul **Ieșire**.


Același comportament al tastei Enter descris în [**Traduce**](#keyboard-shortcuts) se aplică și aici.

<br/>

> 💡 **SFAT**<br/>
> Când utilizați modul „**Verifică ortografia și gramatica**”, în panoul de ieșire apare un buton „Afișează modificările”.
> Apăsați acest buton pentru a comuta afișarea corecțiilor, arătând sau ascundând modificările specifice efectuate în textul dumneavoastră.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="transform"></a>
## Transformă

Utilizați **Transformă** atunci când doriți ca IA să urmeze un set personalizat de instrucțiuni.

![Spațiu de lucru Transformă](../images/screenshots/ro/transform.png)

Aceasta este cea mai flexibilă zonă a aplicației. Puteți folosi această funcție pentru sarcini precum:

- rezumarea notițelor
- transformarea unui text brut într-un e-mail bine formulat
- extragerea ideilor principale
- convertirea textului într-un anumit format

<br/>

<a id="run-an-existing-prompt"></a>
### Executați o instrucțiune existentă

1. Deschideți **Transformă**.
2. Alegeți o instrucțiune din lista de instrucțiuni.
3. Dacă apare o casetă pentru limba **Destinație**, selectați o limbă, dacă doriți.
4. Tastați sau inserați textul în câmpul **Intrare**.
5. Apăsați pe **Transformă**.
6. Citiți rezultatul în câmpul **Ieșire**.

<br/>

<a id="if-you-have-no-prompts-yet"></a>
### Dacă nu aveți încă instrucțiuni

Dacă lista dvs. de instrucțiuni este goală, apăsați pe **Încarcă instrucțiuni exemplu**. Acest lucru adaugă exemple preîncorporate, astfel încât să puteți începe rapid.

<br/>

> ℹ️ **NOTĂ**<br/>
> Instrucțiunile exemplu sunt furnizate în limba engleză. După încărcarea lor, puteți edita o instrucțiune și utilizați opțiunea **Tradu instrucțiunea** pentru a o converti în limba dumneavoastră.

<br/>

<a id="create-a-prompt-quickly"></a>
### Creați rapid o instrucțiune

Calea cea mai rapidă pentru a crea o instrucțiune este:

1. Apăsați pe **Instrucțiune nouă**.
2. Apăsați pe **Generează instrucțiune**.
3. Descrieți ce doriți să realizeze instrucțiunea.
4. Alegeți un model.
5. Lăsați aplicația să creeze un proiect pentru dumneavoastră.
6. Verificați proiectul și apăsați pe **Salvează**.

![Generează instrucțiunea](../images/screenshots/ro/transform-generate.png)


<br/>

<a id="edit-a-prompt"></a>
### Editați o instrucțiune

Când creați sau editați o instrucțiune, editorul apare în partea stângă, iar o zonă de testare apare în partea dreaptă.

![Editor instrucțiuni Transformă](../images/screenshots/ro/transform-prompt-edit.png)

Câmpurile principale sunt:

- **Numele instrucțiunii**: numele afișat în lista de instrucțiuni.
- **Instrucțiuni prompt (opțional)**: o scurtă sugestie afișată utilizatorului când rulează instrucțiunea.
- **Rolul modelului**: rolul general atribuit IA, de exemplu „Ești un asistent util.”
- **Instrucțiuni model (câte una pe linie)**: regulile specifice pe care doriți ca IA să le urmeze.
- **Descrierea ieșirii**: un cuvânt scurt care descrie rezultatul, cum ar fi „rezumat” sau „rescris”.
- **Temperatura (0,0 → 1,0)**: modul în care se va comporta modelul; consultă mai jos.
- **Cere limba țintă**: adaugă un selector de limbă destinație atunci când instrucțiunea este executată.

Dacă termenul tehnic **Temperatură** este nou pentru dumneavoastră, gândiți-vă în felul următor:

- O **temperatură mai mică** oferă rezultate mai constante și previzibile.
- O **temperatură mai mare** oferă mai multă varietate și creativitate.

Puteți utiliza, de asemenea:

- **`Generează instrucțiune`** pentru a crea un proiect nou pornind de la o descriere simplă
- **`Îmbunătățește instrucțiunea`** pentru a rafina o instrucțiune existentă
- **`Tradu instrucțiunea`** pentru a traduce câmpurile instrucțiunii

<br/>

> ⚠️ **ATENȚIE**<br/>
> Apăsați pe **`Salvează`** înainte de a apăsa pe **`Înapoi la rulare`**. Dacă reveniți fără a salva, modificările dvs. vor fi pierdute.

<br/>

<a id="test-a-prompt-before-using-it"></a>
### Testați o instrucțiune înainte de a o utiliza

Panoul de testare din dreapta vă permite să testați instrucțiunea cu un text model înainte de a o folosi în activitatea zilnică.

Acesta este util atunci când:

- creați o nouă instrucțiune
- comparați două variante ale unei instrucțiuni
- doriți să verificați tonul, lungimea sau formatul ieșirii

<br/>

<a id="manage-saved-prompts"></a>
### Gestionarea instrucțiunilor salvate

Pentru a gestiona instrucțiunile salvate într-un singur loc, deschideți [**Setări** > **Instrucțiuni Transformă**](#transform-prompts).

Acolo puteți:

- afișa și șterge instrucțiunile
- exporta instrucțiunile ca **JSON**, **CSV** sau **XLSX**
- importa instrucțiuni dintr-un fișier

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="dashboard"></a>

## Tablou de bord

Utilizați **Tabloul de bord** pentru a vedea cât de mult utilizați aplicația și care sunt costurile (pentru modelele plătite).

![Rezumat tablou de bord](../images/screenshots/ro/dashboard-summary.png)


<br/>

> ℹ️ **OBSERVAȚIE**<br/>
> Dacă utilizați doar modele gratuite, graficele legate de costuri vor fi goale.

<br/>

<a id="filter-the-data"></a>
### Filtrarea datelor

Utilizați butoanele de filtrare de sus pentru a schimba intervalul de timp.

![Filtre tablou de bord](../images/screenshots/ro/dashboard-filter.png)

<br/>

> ℹ️ **OBSERVAȚIE**<br/>
> Filtrul **Utilizator** este vizibil doar administratorilor în versiunea web. Utilizatorii obișnuiți nu vor vedea acest filtru, iar acesta nu este disponibil în aplicația desktop.

<br/>

<a id="dashboard-tabs"></a>
### File de pe tabloul de bord

- **Rezumat** vă oferă o imagine generală asupra utilizării și costurilor.
- **După utilizare** detaliază activitatea după limba traducerii, modul de rescriere și promptul de transformare.
- **După model** arată ce modele ați utilizat și costul acestora.
- **Pe zi** arată totalurile zilnice.
- **Toate apelurile** afișează istoricul complet al apelurilor și vă permite exportul acestuia.

<br/>

<a id="export-data"></a>
### Exportul datelor

Tabelele din tabloul de bord pot exporta datele în format:

- **JSON**
- **CSV**
- **XLSX**

Aceasta opțiune este utilă dacă doriți să revizuiți activitatea în afara aplicației sau să partajați un raport.

<br/>

<a id="delete-stored-records-for-a-model"></a>
### Ștergerea înregistrărilor stocate pentru un model

În secțiunile **După model** sau **Toate apelurile**, puteți elimina înregistrările stocate pentru un anumit model făcând clic pe pictograma „coșului de gunoi”.

> ⚠️ **ATENȚIE**<br/>
> Ștergerea înregistrărilor stocate nu poate fi anulată. Utilizați această opțiune doar dacă sunteți sigur că nu mai aveți nevoie de acest istoric.

Pentru a șterge toate datele sau pentru a elimina înregistrări în funcție de vechimea lor, accesați [**Setări** > **Urmărire costuri**](#cost-tracking). Acolo veți găsi opțiuni pentru a șterge toate datele stocate sau doar cele mai vechi decât o anumită dată.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="history"></a>
## Istoric

Faceți clic pe **Istoric** pentru a vizualiza istoricul acțiunilor efectuate în **Transrewrt**, inclusiv intrările și ieșirile fiecărei operații.

![Pagina Istoric](../images/screenshots/ro/history.png)

<br/>

<a id="filter-the-history"></a>
### Filtrarea istoricului

**Istoricul** utilizează aceleași filtre ca și pagina **Tablou de bord**. Utilizați-le pentru a selecta intervalul de timp dorit.

![Filtre tablou de bord](../images/screenshots/ro/dashboard-filter.png)

<br/>

> ℹ️ **OBSERVAȚIE**<br/>
> Filtrul **Utilizator** este vizibil doar administratorilor în versiunea web. Utilizatorii obișnuiți nu vor vedea acest filtru, iar acesta nu este disponibil în aplicația desktop.

<br/>

<a id="export-history-data"></a>
### Exportarea datelor istoricului

Pagina istoric poate exporta datele filtrate în următoarele formate:

- **JSON**
- **CSV**
- **XLSX**

Aceasta opțiune este utilă dacă doriți să revizuiți activitatea în afara aplicației sau să partajați un raport.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="settings"></a>
## Setări

Deschideți **Setări** din bara laterală pentru a personaliza comportamentul aplicației.

Filele disponibile depind de platformă și de rolul dvs.:

  | Filă               | Desktop | Web (administrator) | Web (utilizator obișnuit) |
  |-------------------|:-------:|:-------------------:|:-----------------------:|
  | Setări generale   |   da    |         da          |           da            |
  | Modele            |   da    |         da          |           da            |
  | Limbi             |   da    |         da          |           da            |
  | Urmărire costuri  |   da    |         da          |             —           |
  | Prompturi de transformare |   da    |         da          |           da            |
  | Utilizatori       |    —    |         da          |             —           |
  | Configurare API   |   da    |         da          |             —           |
  | Despre            |   da    |         da          |           da            |

<br/>

> ℹ️ **OBSERVAȚIE**<br/>
> În versiunea web, fiecare utilizator are propria configurare. Setări precum modelele selectate, limbile, opțiunile generale și prompturile de transformare sunt stocate pe utilizator. Modificările efectuate de dumneavoastră nu afectează alți utilizatori.

<br/>


[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="general-settings"></a>

### Setări generale

Utilizați **Setări generale** pentru a controla comportamentul la scriere, dacă detaliile execuției sunt salvate în **Istoric** și aspectul aplicației.

**Comportament**

- **Comportamentul tastei ENTER** stabilește dacă apăsarea pe `Enter` execută sarcina sau inserează o linie nouă.
- **Auto-traducere la inserare** pornește traducerea imediat ce lipsești un text.
- **Copiază automat rezultatul în clipboard** copiază automat rezultatele cu succes.
- **Traducere în timp real (în timpul scrisului)** traduce în timp ce scrii.
- **Timp de expirare (ms)** stabilește timpul de așteptare pentru traducerea în timp real.

**Istoric**

- **Păstrează istoricul execuțiilor** controlează dacă fiecare traducere, rescriere și transformare stochează **textul de intrare și cel de ieșire** pentru vizualizarea din bara laterală [**Istoric**](#history). Dezactivarea acestei opțiuni va cere confirmare; dacă confirmați, textul stocat va fi eliminat din baza de date.
- **Șterge datele istoricului** vă permite să eliminați textul stocat în funcție de vârsta acestuia (de exemplu, mai vechi de câteva luni, sau **toate datele (golire)**) folosind butonul **Șterge date**. Aceasta afectează doar textul salvat pentru vizualizarea **Istoricului**, **nu** afectează totalurile privind costurile sau utilizarea. Pentru a elimina sau redimensiona datele despre **cost**, utilizați [**Setări** > **Urmărirea costurilor**](#cost-tracking).

**Aspect**

- **Zecimale cost** modifică modul în care sunt afișate zecimalele costului.
- **Doar web:** **arată o margine în jurul aplicației** adaugă spațiu suplimentar în jurul interfeței.
- **Familie font** schimbă fontul utilizat în panourile de text.
- **Mărime** modifică dimensiunea fontului.


<br/>

<a id="models"></a>
### Modele

Utilizați **Setări** > **Modele** pentru a alege ce modele apar în bara de instrumente.

![Fila Modele din Setări](../images/screenshots/ro/settings-models.png)

Pagina conține două liste:

- **Modele disponibile** în partea stângă
- **Modele selectate** în partea dreaptă

Controale utile includ:

- **Caută modele…** pentru a găsi un model după nume
- **Etichete furnizor** pentru a restrânge lista la un anumit motor (OpenRouter, OpenAI, Ollama, …)
- **Doar gratuite** pentru a afișa doar modelele gratuite
- **Reîmprospătare** pentru a reîncărca lista
- **Extinde toate** și **Restrânge toate** atunci când sortați după furnizor

ID-urile modelelor conțin prefixul furnizorului (de exemplu `openrouter/…` comparat cu `openai/…`). Etichete precum **OpenAI (OpenRouter)** față de **OpenAI (direct)** arată cum este direcționat traficul.

Acțiuni:

 - Pentru a adăuga un model, faceți clic pe **Adaugă** sau oriunde în intrare.

 - Pentru a elimina un model, faceți clic pe **X** de lângă acesta în **Modele selectate** sau pe **Selectat** din intrarea din lista Modele disponibile.

 - Pentru a goli lista, faceți clic pe **Deselectează toate**. Modelul gratuit obligatoriu va rămâne în listă.

<br/>

> ℹ️ **OBSERVAȚIE**<br/>
> Dacă nu doriți să adăugați credite la OpenRouter imediat, începeți prin activarea opțiunii **Doar gratuite** și alegerea modelelor gratuite (fără nevoie de card de credit). De asemenea, puteți folosi Ollama pentru a rula modele local fără nicio cheie API.

<br/>

<a id="languages"></a>
### Limbi

Utilizați **Setări** > **Limbi** pentru a organiza listele de limbi utilizate în aplicație.

- **Limbi principale** sunt fixate aproape de începutul listelor de limbi din **Traducere** și **Transformare**.
- **Limbă personalizată** vă permite să adăugați o limbă care nu se află în lista integrată.

Dacă adăugați o limbă personalizată, aceasta va apărea în selectorii de limbă alături de opțiunile standard.

<br/>

<a id="cost-tracking"></a>
### Urmărirea costurilor

Utilizați **Setări** > **Urmărirea costurilor** pentru a gestiona informațiile despre costuri.

- **Cost total** afișează suma totală acumulată.
- **Copiază valoarea** copiază totalul în clipboard.
- **Resetează costul** resetează suma stocată la zero.
- **Sincronizează cu utilizarea cheii API** setează totalul să corespundă cu utilizarea raportată de contul dumneavoastră OpenRouter (doar pentru OpenRouter).
- **Utilizarea cheii API** afișează detaliile privind utilizarea OpenRouter, dacă sunt disponibile.
- **Șterge datele despre cost** elimină toate datele sau doar intrările mai vechi de o anumită dată.

**Urmărirea costurilor:** Când utilizați modele OpenRouter, aplicația vă afișează utilizarea și cheltuielile reale pe baza datelor din OpenRouter. Pentru toți ceilalți furnizori, aplicația estimează costurile utilizând prețurile publicate de OpenRouter; dacă un preț nu este disponibil, estimarea poate fi zero.

<br/>

> ℹ️ **OBSERVAȚIE**<br/>
> **Toate valorile privind costurile sunt doar estimări pentru informarea dumneavoastră, nu facturi oficiale.**


<br/>

> ⚠️ **ATENȚIE**<br/>
> Ștergerea datelor nu poate fi anulată. Înainte de a le șterge, asigurați-vă că salvați datele sau le exportați prin [**Panou de control** > **Toate apelurile**](#dashboard-tabs), altfel vor fi pierdute permanent. <br/> Tot istoricul legat de fiecare apel API va fi, de asemenea, șters definitiv.


<br/>

<a id="transform-prompts"></a>

### Transformarea prompturilor

Utilizați **Setări** > **Transformare prompturi** pentru a gestiona prompturile în bloc.

Puteți:

- examina prompturile salvate
- șterge prompturi
- importa prompturi dintr-un fișier
- exporta prompturi pentru copii de rezervă sau partajare

<br/>

<a id="users"></a>
### Utilizatori

**Web: doar administratorul**

Utilizați **Utilizatori** pentru a gestiona conturile de utilizator în versiunea web. Puteți adăuga utilizatori, actualiza detaliile acestora, reseta parolele și șterge conturi.

<br/>

<a id="api-config"></a>
### Configurare API

Providerii suportați sunt: OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI și **Ollama** (modele locale prin URL de bază). Trebuie să configurați doar providerii pe care îi folosiți.

**Aplicație web: doar administratorul**

Cheile API sunt configurate prin variabile de mediu ale sistemului sau Docker — nu sunt introduse în interfața web. Această pagină arată care provideri au o cheie configurată și vă permite să testați fiecare apăsând butonul **`Test`**.

<br/>

> ℹ️ **NOTĂ**<br/>
> Pentru a schimba o cheie API, actualizați variabila de mediu în configurația sistemului sau Docker și reporniți serverul sau containerul.

<br/>

**Aplicație desktop**

Utilizați **Configurație API** pentru a stoca cheile API pentru fiecare provider utilizat. Pentru Ollama, introduceți **URL-ul de bază** în locul unei chei API.


<br/>

> 💡 **Sfat** <br/>
> Dacă nu doriți să folosiți o cheie API sau să plătiți pentru utilizare, puteți [descărca Ollama](https://ollama.com) și rula modele local pe calculatorul dumneavoastră gratuit. Alternativ, puteți crea un cont OpenRouter gratuit (fără card de credit necesar) pentru a utiliza modelele lor gratuite.

- Adăugați doar providerii de care aveți nevoie. În **Setări** > **Modele**, fiecare ID de model începe cu providerul (de exemplu `openrouter/openrouter/free`, `openai/gpt-4o`, `ollama/llama3`).

Pentru a adăuga o cheie API, tastați valoarea în câmpul de text și apăsați **`Salvare`**. Pentru a înlocui o cheie existentă, apăsați **`Editare`**. Pentru a verifica dacă o cheie funcționează, apăsați **`Testare`**.

<br/>

> ℹ️ **NOTĂ**<br/>
> Nu puteți vedea valoarea curentă a unei chei API. Puteți doar înlocui cheia folosind butonul **`Editare`**.
> Cheile API sunt stocate criptat în fișierul de configurare.

<br/>

Pentru pași detaliați despre cum să obțineți o cheie OpenRouter, consultați [Cum obțin o cheie API](#how-to-get-an-api-key-desktop-app) de mai sus.



<br/>

<a id="about"></a>
### Despre

Tab-ul **Despre** afișează:

- numele aplicației
- numărul de versiune
- data build-ului
- un link către depozitul proiectului

<br/><br/>

<a id="common-issues"></a>
## Probleme frecvente

Dacă ceva nu funcționează așa cum este de așteptat, verificați mai întâi următoarele puncte.

<br/>

<a id="the-app-will-not-translate-rewrite-or-transform-text"></a>
### Aplicația nu traduce, rescrie sau transformă textul

Verificați dacă:

- ați selectat un model în bara de unelte
- cel puțin un model este listat în [**Setări** > **Modele**](#models)
- configurația API funcționează

Dacă utilizați aplicația desktop:

1. Deschideți [**Setări** > **Configurație API**](#api-config).
2. Verificați dacă cel puțin o cheie API este salvată.
3. Apăsați pe **Testare** lângă provider pentru a confirma că cheia funcționează.

<br/>

<a id="the-model-list-is-empty"></a>
### Lista de modele este goală

Deschideți [**Setări** > **Modele**](#models) și apăsați pe **Reîmprospătare**.

Dacă este necesar:

- căutați un model
- activați **Doar gratuite**
- adăugați unul sau mai multe modele în **Modele selectate**

<br/>

<a id="the-result-is-too-slow-or-too-expensive"></a>
### Rezultatul este prea lent sau prea scump

Încercați una sau mai multe dintre următoarele opțiuni:

- alegeți un model diferit
- utilizați o intrare mai scurtă
- dezactivați **Traducere în timp real (în timpul tastării)** în [**Setări** > **Setări generale**](#general-settings)
- folosiți modele gratuite pentru sarcini simple (consultați [Modele](#models))

<br/>

<a id="the-interface-is-in-the-wrong-language"></a>
### Interfața este în limba greșită

Apăsați pe pictograma globului din [bara de unelte](#toolbar) și alegeți **Limba interfeței** preferată.

<br/>

<a id="the-text-is-too-small-or-hard-to-read"></a>
### Textul este prea mic sau greu de citit

Deschideți [**Setări** > **Setări generale**](#general-settings) și modificați:

- **Familia fontului**
- **Dimensiunea**

<br/>

<a id="dashboard-charts-are-empty"></a>
### Graficele din tabloul de bord sunt goale

Aceasta este normală dacă:

- utilizați doar **modele gratuite** (graficele de cost vor fi necompletate)
- **filtrul de timp** selectat nu acoperă perioada în care au fost efectuate apeluri — încercați **Toate** pentru a verifica

Dacă graficele sunt în continuare goale după ce ați selectat **Toate**, confirmați că apelurile apar în [**Istoric**](#history) sau în tab-ul **Toate apelurile**.

<br/>

<a id="cost-shows-not-available-or-seems-wrong"></a>

### Costul afișează „indisponibil” sau pare incorect

Când utilizați modele prin **OpenRouter**, aplicația afișează cheltuiala reală raportată de OpenRouter.

Pentru **alți furnizori** (OpenAI direct, Anthropic direct etc.), costul este estimat pe baza datelor de preț publicate de OpenRouter. Dacă nu se găsește un preț corespondent pentru un model, costul va apărea ca **indisponibil** și nu va fi adăugat la totalul curent.

<br/>

<a id="total-cost-does-not-match-my-provider-bill"></a>
### Costul total nu corespunde facturii furnizorului meu

Toate valorile de cost din aplicație sunt **estimative, doar pentru referință**, nu reprezintă declarații oficiale de facturare.

Pentru a aduce totalul mai aproape de suma reală cheltuită la OpenRouter, deschideți [**Setări** > **Urmărire cost**](#cost-tracking) și apăsați **Sincronizează cu utilizarea cheii API**.

<br/>

<a id="the-history-page-is-missing-from-the-sidebar"></a>
### Pagina Istoric lipsește din bara laterală

Opțiunea **Păstrează istoricul execuției** poate fi dezactivată. Deschideți [**Setări** > **Setări generale**](#general-settings) și activați-o. Rețineți că activarea acesteia nu restabilește datele istoricului deja șterse anterior.

<br/>

<a id="web-app-session-expired"></a>
### Aplicația web: redirecționare neașteptată la pagina de autentificare

Sesiunea dumneavoastră s-a putut încheia. Autentificați-vă din nou. Dacă acest lucru se întâmplă frecvent, verificați configurația serverului pentru setările duratei sesiunii.

<br/>

<a id="dashboard-shows-no-data-for-other-users"></a>
### Panoul de control nu afișează date pentru alți utilizatori (web)

Doar **administratorii** pot vizualiza datele tuturor utilizatorilor prin filtrul **Utilizator**. În mod normal, utilizatorii obișnuiți văd doar activitățile proprii.

<br/>

<a id="i-changed-a-prompt-and-lost-the-edits"></a>
### Am modificat un prompt și am pierdut modificările

Când editați un prompt, apăsați întotdeauna pe **Salvează** înainte de a apăsa pe **Înapoi la executare**.

<br/><br/>

<a id="quick-tips"></a>
## Scurte sfaturi

- Începeți cu [**Tradu**](#translate) pentru a vă asigura că sistemul funcționează corect înainte de a trece la [**Rescrie**](#rewrite) sau [**Transformă**](#transform).
- Utilizați [**Rescrie**](#rewrite) pentru îmbunătățiri zilnice ale formulării textului.
- Utilizați [**Transformă**](#transform) atunci când aveți nevoie de un flux de lucru reproductibil pentru o sarcină specifică.
- Utilizați [**Panoul de control**](#dashboard) dacă doriți să urmăriți utilizarea și costurile.
- Utilizați [**Istoric**](#history) pentru a verifica operațiunile anterioare și textul complet de intrare/ieșire.
- Exportați prompturile în mod regulat dacă creați o bibliotecă de prompturi pe care doriți să o păstrați în siguranță (vedeți [Transformare prompturi](#transform-prompts)) sau dacă doriți să le împărtășiți cu alții.

<br/><br/>

<a id="disclaimer"></a>
## Declinare de responsabilitate

Numele de produse și iconițele aparțin proprietarilor lor respectivi și sunt folosite doar în scop de identificare. Acest software nu este afiliat cu, nici susținut de niciuna dintre mărcile menționate.

<br/><br/>

<a id="license"></a>
## Licență

Copyright © 2026 Waldemar Scudeller Jr.

[Apache License 2.0](LICENSE)