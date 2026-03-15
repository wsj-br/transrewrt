---
translated_at: "2026-03-15T22:25:37.301Z"
source_hash: "69732149de931f2a0059ecf9073871caedaa431362e32c010e7d93bd3cbd76bc"
source_mtime: 1773611603946.006
model: "stepfun/step-3.5-flash:free"
---
<a id="transrewrt-user-guide"></a>
# Ghidul utilizatorului Transrewrt

<br />

<a id="introduction"></a>
## Introducere

Transrewrt vă ajută să lucrați cu textul în trei moduri principale:

- **Traduce** - convertește textul dintr-o limbă în alta.
- **Rescrie** - reformulează textul într-un stil diferit, precum mai clar, mai scurt sau mai formal.
- **Transformă** - procesează textul folosind instrucțiuni personalizate de AI numite prompt-uri.

<br />

Acest ghid explică cum să utilizați aplicația după instalare și pornire. Pentru pași de instalare, consultați fișierul principal [README](../README.md).

<br />

> ℹ️ **NOTĂ**<br/>
> Transrewrt este disponibil ca aplicație desktop pentru Windows și Linux, și ca aplicație web auto-găzduită. Acest ghid se concentrează pe utilizarea zilnică a aplicației. Undor ceva se aplică doar unei versiuni, este marcat clar.

<small>**Citiți în alte limbi:** [Engleză (UK)](../USER-GUIDE.md) · [Portugheză (BR)](USER-GUIDE.pt-BR.md) · [Arabă](USER-GUIDE.ar.md) · [Bengali](USER-GUIDE.bn.md) · [Catalană](USER-GUIDE.ca.md) · [Мandarină simplificată](USER-GUIDE.zh-CN.md) · [Мandarină tradițională](USER-GUIDE.zh-TW.md) · [Croată](USER-GUIDE.hr.md) · [Cehă](USER-GUIDE.cs.md) · [Neerlandeză](USER-GUIDE.nl.md) · [Engleză (US)](USER-GUIDE.en-US.md) · [Filipineză](USER-GUIDE.tl.md) · [Franceză](USER-GUIDE.fr.md) · [Germană](USER-GUIDE.de.md) · [Greacă](USER-GUIDE.el.md) · [Hindi](USER-GUIDE.hi.md) · [Maghiară](USER-GUIDE.hu.md) · [Italiană](USER-GUIDE.it.md) · [Japoneză](USER-GUIDE.ja.md) · [Javaneză](USER-GUIDE.jv.md) · [Coreeană](USER-GUIDE.ko.md) · [Malaeză](USER-GUIDE.ms.md) · [Persană](USER-GUIDE.fa.md) · [Poloneză](USER-GUIDE.pl.md) · [Portugheză (PT)](USER-GUIDE.pt.md) · [Punjabi](USER-GUIDE.pa.md) · [Română](USER-GUIDE.ro.md) · [Rusă](USER-GUIDE.ru.md) · [Slovacă](USER-GUIDE.sk.md) · [Spaniolă](USER-GUIDE.es.md) · [Swahili](USER-GUIDE.sw.md) · [Suedeză](USER-GUIDE.sv.md) · [Telugu](USER-GUIDE.te.md) · [Thailandeză](USER-GUIDE.th.md) · [Turcă](USER-GUIDE.tr.md) · [Ucraineană](USER-GUIDE.uk.md) · [Vietnameză](USER-GUIDE.vi.md)</small>

<br />

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Cuprins**

- [Înainte de începere](#inainte-de-incepere)
  - [Cum să obțineți o cheie API (aplicație desktop)](#cum-sa-obtineti-o-cheie-api-aplicatie-desktop)
- [Începeți](#incepeti)
- [Părțile principale ale ferestrei](#parțile-principale-ale-ferestrei)
  - [Bara laterală](#bara-laterală)
  - [Bara de instrumente](#bara-de-instrumente)
  - [Panourile de intrare și ieșire](#panourile-de-intrare-si-iesire)
- [Tradu](#tradu)
  - [Traduceți textul](#traduceți-textul)
  - [Selecția limbii](#selecția- Limbii)
  - [Setări utile de traducere](#setări-utile-de-traducere)
  - [Comenzi rapide de la tastatură](#comenzi-rapide-de-la-tastatură)
- [Rescrie](#rescrie)
  - [Rescrieți textul](#rescrieți-textul)
- [Transformă](#transformă)
  - [Rulați un prompt existent](#rulați-un-prompt-existent)
  - [Dacă nu aveți încă prompt-uri](#dacă-nu-aveți-încă-prompt-uri)
  - [Creați rapid un prompt](#creați-rapid-un-prompt)
  - [Editați un prompt](#editați-un-prompt)
  - [Testați un prompt înainte de utilizare](#testați-un-prompt-înainte-de-utilizare)
  - [Gestionați prompt-uri salvate](#gestionați-prompt-uri-salvate)
- [Tablou de bord](#tablou-de-bord)
  - [Filtrați datele](#filtrați-datele)
  - [Filele tabloului de bord](#filele-tabloului-de-bord)
  - [Exportați datele](#exportați-datele)
  - [Ștergeți înregistrările stocate pentru un model](#ștergeți-înregistrările-stocate-pentru-un-model)
- [Setări](#setări)
  - [Setări generale](#setări-generale)
  - [Modele](#modele)
  - [Limbi](#limbi)
  - [Urmărire costuri](#urmărire-costuri)
  - [Prompt-uri de transformare](#prompt-uri-de-transformare)
  - [Utilizatori](#utilizatori)
  - [Configurație API](#configurație-api)
  - [Despre](#despre)
- [Probleme comune](#probleme-comune)
  - [Aplicația nu va traduce, rescrie sau transforma textul](#aplicația-nu-va-traduce-rescrie-sau-transformă-textul)
  - [Lista de modele este goală](#lista-de-modele-este-golă)
  - [Rezultatul este prea lent sau prea scump](#rezultatul-este-prea-lent-sau-prea-scump)
  - [Interfața este în limba greșită](#interfața-este-în-limba-greșită)
  - [Textul este prea mic sau greu de citit](#textul-este-prea-mic-sau-greu-de-citit)
  - [Am schimbat un prompt și am pierdut editările](#am-schimbat-un-prompt-și-am-pierdut-editările)
- [Sfaturi rapide](#sfaturi-rapide)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br /><br />

<a id="before-you-start"></a>

## Înainte de a începe

Pentru a utiliza Transrewrt, aveți nevoie de acces la serviciul AI prin OpenRouter.

Nu este nevoie să alegeți un model plătit înainte de a începe. Aplicația include întotdeauna un model **gratuit** integrat, astfel încât pentru utilizarea normală, acesta este suficient pentru a începe traducerea, rescrierea și transformarea textului.

În limbaj simplu:

- Un **model** este motorul AI care face munca.
- O **cheie API** este acreditul personal de acces pentru acel serviciu.

Dacă folosiți **aplicația desktop**, veți avea nevoie de o cheie API. Pentru pași detalii, consultați [Cum să obțineți o cheie API](#how-to-get-an-api-key-desktop-app) mai jos. Pe scurt: creați un cont pe [OpenRouter](https://openrouter.ai), deschideți pagina [Keys](https://openrouter.ai/keys), creați o cheie nouă și lipiți-o în **[Setări > Configurație API](#api-config)** în Transrewrt.

Dacă folosiți **versiunea web**, de obicei proprietarul serverului face această configurare pentru dumneavoastră, așa că nu veți avea nevoie să introduceți o cheie API.

<br />

<a id="how-to-get-an-api-key-desktop-app"></a>
### Cum să obțineți o cheie API (aplicație desktop)

Dacă folosiți aplicația desktop, urmați acești pași:

1. Accesați [OpenRouter](https://openrouter.ai) în browserul dvs.
2. Creați un cont sau autentificați-vă.
3. Deschideți pagina [Keys](https://openrouter.ai/keys).
4. Faceți clic pe butonul pentru a crea o cheie API nouă.
5. Dați un nume cheii pentru a o recunoaște mai târziu.
6. Copiați cheia API nouă.
7. Reveniți la Transrewrt și deschideți **[Setări > Configurație API](#api-config)**.
8. Lipiți cheia în **Cheie API OpenRouter**.
9. Faceți clic pe **Testați configurația API** pentru a vă asigura că funcționează.

> ℹ️ **NOTĂ**<br/>
> Puteți începe cu ruta gratuită a OpenRouter sau cu oricare dintre celelalte modele gratuite disponibile. În multe cazuri, acesta este suficient pentru a începe să utilizați Transrewrt fără a alege un model plătit.

<br /><br />

<a id="getting-started"></a>
## Primele pași

Dacă este prima dată când folosiți Transrewrt, urmați această ordine:

1. Deschideți aplicația.
2. Alegeți **Limba interfeței** din iconița cu glob dacă este necesar.
3. Dacă sunteți pe **aplicația desktop**, deschideți **[Setări > Configurație API](#api-config)**, lipiți cheia dvs. API OpenRouter și faceți clic pe **Testați configurația API**.
4. Deschideți **[Setări > Modele](#models)** și adăugați unul sau mai multe modele în **Modele selectate**.
5. Deschideți **[Setări > Limbi](#languages)** și alegeți **Limbi preferate** dacă doriți ca limbile cel mai utilizate să apară primele.
6. Mergeți la **Traduce** și rulați o traducere simplă pentru a confirma că totul funcționează.
7. Odată ce aceasta funcționează, încercați **Rescrie** și apoi **Transformă**.

Această ordine este importantă. Previne cel mai comun problemă la prima utilizare: încercarea de a rula o sarcină înainte ca aplicația să aibă o conexiune API funcțională sau un model selectat.

<br /><br />

<a id="main-parts-of-the-window"></a>
## Părțile principale ale ferestrei

Aplicația este împărțită în trei zone principale:

- **Bara laterală** din stânga.
- **Bara de instrumente** de sus.
- **Zona de lucru** din centru.

<br />

<a id="sidebar"></a>
### Bara laterală

Folosiți bara laterală pentru a vă deplasa în aplicație:

<br />

<table>
  <tr>
    <td valign="top">
       <img src="../images/screenshots/ro/sidebar.png" alt="Bara laterală a aplicației" style="max-width: 100%; border: 1px solid #ddd; border-radius: 4px;">
    </td>
    <td valign="top">
      <br />
      <ul>
        <li><strong>Traduce</strong> deschide spațiul de lucru pentru traducere.</li>
        <li><strong>Rescrie</strong> deschide spațiul de lucru pentru rescriere.</li>
        <li><strong>Transformă</strong> deschide spațiul de lucru cu prompturi personalizate.</li>
        <li><strong>Tablou de bord</strong> afișează informații despre utilizare și cost.</li>
        <li><strong>Setări</strong> deschide panoul de setări.</li>
        <li><strong>Utilizator</strong> afișează numele de utilizator al utilizatorului autentificat (doar web).</li>
      </ul>
      <br />
      <p>Puteți, de asemenea, să restrângeți bara laterală pentru mai mult spațiu făcând clic pe iconița de lângă logo-ul aplicației.</p>
    </td>
  </tr>
</table>

<br />

<a id="toolbar"></a>
### Bara de instrumente

Bara de instrumente se schimbă ușor în funcție de locația din aplicație.

- În stânga, afișează numele paginii curente.
- În dreapta, afișează **selectorul de model** și controlul **Limba interfeței**.

**Selectorul de model** vă permite să alegeți care motor AI să fie utilizat pentru sarcina curentă.

  ![Selector de model](../images/screenshots/ro/model-selector.png)

> ℹ️ **NOTĂ**<br/>
> Unele modele gratuite pot înceta temporar să funcționeze dacă sunt indisponibile sau au atins limita de utilizare. Dacă se întâmplă acest lucru, aplicația va elimina automat acel model din lista dumneavoastră.

**Iconița cu glob + codul de limbă** schimbă limba interfeței aplicației, precum meniurile și butoanele. **NU** schimbă limbile de traducere utilizate în **Traduce**.

  ![Selector de limbă a interfeței](../images/screenshots/ro/language-selector.png)

<br />

<a id="input-and-output-panels"></a>

### Panouri de intrare și ieșire

Cele mai multe spații de lucru utilizează un panou **Intrare** pe partea stângă și un panou **Ieșire** pe partea dreaptă.

Panoul **Intrare** afișează:

- Numărul de caractere
- Numărul de cuvinte
- Numărul de paragrafe

Panoul **Ieșire** poate afișa:

- Cât a durat sarcină
- Costul acelei sarcini
- Suma dvs. totală curentă
- **TPS** (tokeni pe secundă), care este o măsură simplă a vitezei
- Numărul de caractere, cuvinte și paragrafe
- Modelul utilizat

Dacă vă întrebați despre termenii tehnici:

- **Token** înseamnă o bucată mică de text. Puteți să vă gândiți la el ca la o parte a unui cuvânt sau un cuvânt scurt.
- **TPS** înseamnă câte dintre acele bucăți de text a procesat modelul pe secundă.

<br /><br />

<a id="translate"></a>
## Traduce

Utilizați **Traducere** când doriți să convertiți text dintr-o limbă în alta.

![ spația de lucru Traducere](../images/screenshots/ro/translate.png)

<br />

<a id="translate-text"></a>
### Traduce text

1. Deschideți **Traducere**.
2. Alegeți o limbă în **De la**.
3. Alegeți o limbă în **În**.
4. Alegeți un model în bara de instrumente.
5. Tastați sau lipiți text în **Intrare**.
6. Faceți clic pe **Traducere**.
7. Citiți rezultatul în **Ieșire**.
8. Folosiți butonul de copiere dacă doriți să copiați rezultatul.

<br />

<a id="language-selection"></a>
### Selecția limbii

- **De la** poate fi o limbă specifică sau **Detectează limba**.
- **În** este limba în care doriți rezultatul.

Limbile **Top selectate** apar la începutul listei. Le puteți seta în [**Setări** > **Limbi**](#languages).

<br />

<a id="helpful-translation-settings"></a>
### Setări utile de traducere

În [**Setări** > **Setări generale**](#general-settings), puteți modifica cum se comportă traducerea:

- **Traducere automată la Lipire** rulează o traducere imediat ce lipiți text.
- **Copiază automat rezultatul în clipboard** copiază rezultatul automat după o rulare cu succes.
- **Traducere în timp real (în timp ce tastați)** rulează traduceri în timp ce tastați.
- **Timeout (ms)** controlează cât de lung stă aplicația înainte de a rula o traducere în timp real.

<br />

<a id="keyboard-shortcuts"></a>
### Scurtături de tastatură

În [**Setări** > **Setări generale**](#general-settings), **Comportament pentru ENTER** controlează ce se întâmplă când apăsați Enter:

- **Enter** poate rula sarcina și **Shift+Enter** poate adăuga o linie nouă.
- Sau aplicația poate face invers.

Linkul rapid curent este, de asemenea, afișat pe butonul **Traducere**.

<br /><br />

<a id="rewrite"></a>
## Rescrie

Utilizați **Rescriere** când doriți să îmbunătăți formularea fără a schimba sensul principal.

![ spația de lucru Rescriere](../images/screenshots/ro/rewrite.png)

Acest lucru este util pentru:

- a corecta ortografia și gramatica
- a face textul mai clar
- a face textul mai formal sau mai informal
- a scurta sau extinde textul
- a face textul să sune mai tehnic

<br />

<a id="rewrite-text"></a>
### Rescrie text

1. Deschideți **Rescriere**.
2. Alegeți un **Mod**.
3. Alegeți un model în bara de instrumente.
4. Tastați sau lipiți text în **Intrare**.
5. Faceți clic pe **Rescrie**.
6. Examinați rezultatul în **Ieșire**.

Același comportament al tastei Enter descris în [**Traducere**](#keyboard-shortcuts) se aplică și aici.

<br /><br />

<a id="transform"></a>
## Transformă

Utilizați **Transformare** când doriți ca AI să urmeze un set personalizat de instrucțiuni.

![ spația de lucru Transformare](../images/screenshots/ro/transform.png)

Acesta este cel mai flexibil spațiu al aplicației. Îl puteți folosi pentru sarcini precum:

- rezumarea notelor
- transformarea unui text brut într-un email polsat
- extragerea punctelor cheie
- convertirea textului într-un format specific

<br />

<a id="run-an-existing-prompt"></a>
### Rulează un prompt existent

1. Deschideți **Transformare**.
2. Alegeți un prompt din lista de prompturi.
3. Dacă apare o casetă **Limba țintă**, alegeți o limbă dacă doriți una.
4. Tastați sau lipiți text în **Intrare**.
5. Faceți clic pe **Transformă**.
6. Citiți rezultatul în **Ieșire**.

<br />

<a id="if-you-have-no-prompts-yet"></a>
### Dacă nu aveți încă prompturi

Dacă lista dvs. de prompturi este goală, faceți clic pe **Încarcă prompturi eșantion**. Aceasta adaugă exemple integrate astfel înc să puteți începe rapid.

> ℹ️ **NOTĂ**<br/>
> Prompturile eșantion sunt furnizate în engleză. După încărcarea lor, puteți edita un prompt și să folosiți **Traducere prompt** dacă doriți să adaptați textul promptului pentru o altă limbă.

<br />

<a id="create-a-prompt-quickly"></a>

### Creați rapid un prompt

Cel mai rapid mod de a crea un prompt este:

1. Faceți clic pe **New prompt** (Prompt nou).
2. Faceți clic pe **Generate prompt** (Generați prompt).
3. Descrieți ce ar trebui să facă promptul.
4. Alegeți un model.
5. Lăsați aplicația să vă creeze o schiță.
6. Revizuiți schița și faceți clic pe **Save** (Salvați).

![Generate prompt](../images/screenshots/ro/transform-generate.png)


<br />

### Editați un prompt

Când creați sau editați un prompt, editorul apare în partea stângă, iar zona de testare apare în partea dreaptă.

![Transform prompt editor](../images/screenshots/ro/transform-prompt-edit.png)

Câmpurile principale sunt:

- **Prompt name** (Nume prompt): numele afișat în lista de prompturi.
- **Prompt instructions (optional)** (Instrucțiuni prompt - opțional): o scurtă indicatiu afișată utilizatorului la rularea promptului.
- **Model Role** (Rol model): rolul general atribuit AI-ului, precum „Sunteți un asistent util.”
- **Model Instructions (one per line)** (Instrucțiuni model - câte una pe rând): regulile specifice pe care doriți ca AI-ul să le urmeze.
- **Output description** (Descriere rezultat): un cuvânt scurt care descrie rezultatul, precum „sumar” sau „rescríere”.
- **Temperature (0.0 → 1.0)** (Temperatură): un glisor pentru creativitate.
- **Ask for target language** (Cereți limba țintă): adaugă un selector de limbă țintă atunci când promptul este rulat.

Dacă termenul tehnic **Temperature** (Temperatură) este nou pentru voi, gândiți-vă astfel:

- O **temperatură mai mică** oferă rezultate mai stabile și mai previzibile.
- O **temperatură mai mare** oferă mai multă variație și creativitate.

Puteți utilizea și:

- **`Generate prompt`** (Generați prompt) pentru a crea o nouă schiță dintr-o descriere simplă
- **`Improve prompt`** (Îmbunătățiți prompt) pentru a rafina un prompt existent
- **`Translate prompt`** (Traduceți prompt) pentru a traduce câmpurile promptului

> ⚠️ **AVERTISMENT**<br/>
> Faceți clic pe **`Save`** (Salvați) înainte de a face clic pe **`Back to Run`** (Înapoi la Rulare). Dacă reveniți fără a salva, modificările vor fi pierdute.

<br />

<a id="test-a-prompt-before-using-it"></a>
### Testați un prompt înainte de a-l folosi

Panoul de testare din dreapta vă permite să încercați promptul cu text de exemplu înainte de a-l folosi în munca de zi cu zi.

Acest lucru este util atunci când:

- construiți un prompt nou
- comparați două versiuni ale unui prompt
- doriți să verificați tonul, lungimea sau formatul rezultatului

<br />

<a id="manage-saved-prompts"></a>
### Gestionați prompturile salvate

Pentru a gestiona prompturile salvate într-un singur loc, deschideți [**Settings** (Setări) > **Transform Prompts** (Prompturi de Transformare)](#transform-prompts).

Acolo puteți:

- lista și șterge prompturile dumneavoastră
- exporta prompturi ca **JSON**, **CSV** sau **XLSX**
- importa prompturi dintr-un fișier

<br /><br />

## Dashboard (Tablou de bord)

Utilizați **Dashboard** (Tablou de bord) pentru a vedea cât de mult folosiți aplicația și care este costul.

![Dashboard summary](../images/screenshots/ro/dashboard-summary.png)

<br />

<a id="filter-the-data"></a>
### Filtrați datele

Utilizați butoanele de filtrare din partea de sus pentru a schimba intervalul de timp.

![Dashboard filters](../images/screenshots/ro/dashboard-filter.png)

> ℹ️ **NOTĂ**<br/>
> În versiunea web, administratorii pot vedea, de asemenea, un filtru **User** (Utilizator). Acesta le permite să comute între **All users** (Toți utilizatorii) și un utilizator individual.

<br />

<a id="dashboard-tabs"></a>
### Filele tabloului de bord

- **Summary** (Sumar) vă oferă o prezentare generală a utilizării și a costurilor.
- **By Usage** (După utilizare) descompune activitatea după limba de traducere, modul de rescriere și promptul de transformare.
- **By Model** (După model) arată ce modele ați folosit și cât au costat.
- **By Day** (Pe zi) arată totalurile zilnice.
- **All Calls** (Toate apelurile) arată istoricul complet al apelurilor și vă permite să îl exportați.

<br />

<a id="export-data"></a>
### Exportați datele

Tabelele tabloului de bord pot exporta date în:

- **JSON**
- **CSV**
- **XLSX**

Acest lucru este folositor dacă doriți să revizuiți activitatea în afara aplicației sau să partajați un raport.

<br />

<a id="delete-stored-records-for-a-model"></a>
### Ștergeți înregistrările stocate pentru un model

În **By Model** (După model) sau **All Calls** (Toate apelurile), puteți elimina înregistrările stocate pentru un model.

> ⚠️ **AVERTISMENT**<br/>
> Ștergerea înregistrărilor stocate nu poate fi anulată. Folosiți această opțiune numai dacă sunteți sigur că nu mai aveți nevoie de acea istorie.

Pentru a șterge toate datele sau pentru a elimina înregistrări pe baza vârstei lor, mergeți la [**Settings** (Setări) > **Cost Tracking** (Urmărire Cost)](#cost-tracking). Acolo veți găsi opțiuni pentru a șterge toate datele stocate sau doar datele mai vechi de o anumită dată.

<br /><br />

<a id="settings"></a>
## Settings (Setări)

Deschideți **Settings** (Setări) din bara laterală pentru a personaliza modul în care se comportă aplicația.

Filele disponibile pot varia:

- **API Config** (Configurație API) este disponibilă doar în aplicația pentru desktop.
- **Users** (Utilizatori) este disponibilă doar în aplicația web și doar pentru administratori.

<br />

<a id="general-settings"></a>

### Setări generale

Folosește **Setări generale** pentru a controla comportamentul de tastare și aspectul.

**Comportament**

- **Comportament pentru ENTER** alege dacă Enter execută sarcina sau inserează o linie nouă.
- **Traducere automată la lipire** începe traducerea imediat ce lipiți textul.
- **Copiază automat rezultatul în clipboard** copiază rezultatele reușite automat.
- **Traducere în timp real (în timp ce tastați)** traduce în timp ce tastați.
- **Timp de așteptare (ms)** setează timpul de așteptare pentru traducerea în timp real.

**Aspect**

- **Cifre pentru fracțiunea de cost** modifică cum sunt afișate zecimalele costurilor.
- **Familia de fonturi** modifică fontul de scris în panelele de text.
- **Dimensiune** modifică dimensiunea fontului.
- **Doar pentru web:** **afișează o margine în jurul aplicației** adaugă spațiu în jurul interfeței.

<br />

<a id="models"></a>
### Modele

Folosește **Setări** > **Modele** pentru a alege care modele apar în bara de instrumente.

![Tab Setări Modele](../images/screenshots/ro/settings-models.png)

Pagina are două liste:

- **Modele disponibile** pe stânga
- **Modele selectate** pe dreapta

Controale utile includ:

- **Căutare modele...** pentru a găsi un model după nume
- **Doar gratuit** pentru a afișa numai modelele gratuite
- **Actualizare** pentru a reîncărca lista
- **Extinde tot** și **Micșorează tot** când sortați după furnizor

Pentru a adăuga un model, faceți clic pe **Adaugă**.

Pentru a elimina un model, faceți clic pe **X** lângă acesta în **Modele selectate**.

Pentru a curăța lista, faceți clic pe **Deselectează tot**. Modelul gratuit necesar va rămâne în listă.

> ℹ️ **NOTĂ**<br/>
> Dacă nu doriți să adăugați credite la OpenRouter imediat, începeți prin activarea **Doar gratuit** și selectarea modelelor gratuite.

<br />

<a id="languages"></a>
### Limbi

Folosește **Setări** > **Limbi** pentru a organiza listele de limbi utilizate în aplicație.

- **Limbi de top** sunt fixate aproape de începutul listelor de limbi în **Traducere** și **Transformare**.
- **Limbă personalizată** vă permite să adăugați o limbă care nu este în lista integrată.

Dacă adăugați o limbă personalizată, aceasta apare în selectorii de limbă alături de opțiunile integrate.

<br />

<a id="cost-tracking"></a>
### Urmărire cost

Folosește **Setări** > **Urmărire cost** pentru a gestiona informațiile despre cost.

- **Cost total** afișează suma cumulativă.
- **Copiază valoarea** copiază totalul în clipboard.
- **Resetează costul** resetază totalul stocat la zero.
- **Sincronizează cu utilizarea cheii API** setează totalul să corespundă cu utilizarea raportată de OpenRouter.
- **Utilizarea cheii API** afișează detaliile de utilizare, dacă sunt disponibile.
- **Șterge datele de cost** elimină toate datele, sau numai înregistrările mai vechi decât o dată selectată.

> ⚠️ **AVERTISMENT**<br/>
> Ștergerea datelor nu poate fi anulată. Înainte de a șterge, asigurați-vă că ați făcut copii de siguranță ale datelor sau le exportați prin [**Tablou de bord** > **Toate apelurile**](#dashboard-tabs), altfel vor fi pierdute definitiv.

<br />

<a id="transform-prompts"></a>
### Prompturi de transformare

Folosește **Setări** > **Prompturi de transformare** pentru a gestiona prompturile în masă.

Puteți:

- Examinați prompturile salvate
- Ștergeți prompturi
- Importați prompturi dintr-un fișier
- Exportați prompturi pentru backup sau partajare

<br />

<a id="users"></a>
### Utilizatori

**Doar pentru web - doar pentru administratori**

Folosește **Utilizatori** pentru a gestiona conturile de utilizatori în versiunea web. Puteți adăuga utilizatori, actualiza detaliile lor, reseta parolele și șterge conturi.

<br />

<a id="api-config"></a>
### Configurație API

**Doar pentru desktop**

Folosește **Configurație API** pentru a conecta aplicația desktop la OpenRouter sau la un proxy Transrewrt.

- **Cheia API OpenRouter** este unde lipiți cheia dvs.
- **Adresa API** este adresa serviciului. Lăsați această valoare la implicit decât dacă vi s-a oferit una diferită.
- **Folosește Transrewrt Proxy** direcționează cererile printr-un serviciu proxy în loc de direct la OpenRouter.
- **Key Seed** apare când opțiunea proxy este activată.
- **Test Configurație API** verifică dacă setarea actuală funcționează.

Pentru pași detalii despre cum să obțineți cheia API, consultați [Cum să obțineți o cheie API](#how-to-get-an-api-key-desktop-app) de mai sus.

> ℹ️ **NOTĂ**<br/>
> Dacă nu sunteți sigur ce înseamnă **Adresa API**, **Folosește Transrewrt Proxy** sau **Key Seed**, lăsați-le neschimbate și folosiți setarea implicită OpenRouter. Mai multe informații despre proxy sunt disponibile în [depozitarul Transrewrt Proxy](https://github.com/wsj-br/transrewrt-proxy).

<br />

<a id="about"></a>

### Despre

Fila **Despre** arată:

- numele aplicației
- numărul versiunii
- data compilării
- un link către depozitul proiectului

<br /><br />

<a id="common-issues"></a>
## Probleme comune

Dacă ceva nu funcționează așa cum vă așteptați, verificați mai întâi următoarele puncte.

<br />

<a id="the-app-will-not-translate-rewrite-or-transform-text"></a>
### Aplicația nu va traduce, rescrie sau transforma textul

Verificați că:

- ați selectat un model în bara de instrumente
- cel puțin un model este listat în [**Setări** > **Modele**](#models)
- configurația dvs. API funcționează

Dacă folosiți aplicația desktop:

1. Deschideți [**Setări** > **Configurație API**](#api-config).
2. Verificați că cheia dvs. API este salvată.
3. Faceți clic pe **Testați Configurația API**.

<br />

<a id="the-model-list-is-empty"></a>
### Lista de modele este goală

Deschideți [**Setări** > **Modele**](#models) și faceți clic pe **Actualizare**.

Dacă este necesar:

- căutați un model
- activați **Doar gratuit**
- adăugați unul sau mai multe modele la **Modele Selectate**

<br />

<a id="the-result-is-too-slow-or-too-expensive"></a>
### Rezultatul este prea lent sau prea costisitor

Încercați una sau mai multe dintre aceste opțiuni:

- alegeți un model diferit
- folosiți o intrare mai scurtă
- dezactivați **Traducerea în timp real (în timp ce tastați)** în [**Setări** > **Setări Generale**](#general-settings)
- folosiți modele gratuite pentru sarcini simple (vezi [Modele](#models))

<br />

<a id="the-interface-is-in-the-wrong-language"></a>
### Interfața este în limba greșită

Faceți clic pe pictograma globului din [bara de instrumente](#toolbar) și alegeți **Limba interfeței** preferată.

<br />

<a id="the-text-is-too-small-or-hard-to-read"></a>
### Textul este prea mic sau greu de citit

Deschideți [**Setări** > **Setări Generale**](#general-settings) și modificați:

- **Familia de fonturi**
- **Dimensiunea**

<br />

<a id="i-changed-a-prompt-and-lost-the-edits"></a>
### Am modificat un prompt și am pierdut editele

Când editați un prompt, faceți întotdeauna clic pe **Salvați** înainte de a face clic pe **Înapoi la Rulare**.

<br /><br />

<a id="quick-tips"></a>
## Sfaturi rapide

- Începeți cu [**Traducere**](#translate) pentru a vă asigura că configurarea funcționează înainte de a trece la [**Rescriere**](#rewrite) sau [**Transformare**](#transform).
- Folosiți [**Rescriere**](#rewrite) pentru îmbunătățiri de formulare de zi cu zi.
- Folosiți [**Transformare**](#transform) când aveți nevoie de un flux de lucru repetabil pentru o sarcină specifică.
- Folosiți [**Tablou de bord**](#dashboard) dacă doriți să țineți evidența utilizării și a costurilor.
- Exportați prompturile în mod regulat dacă construiți o bibliotecă de prompturi pe care doriți să o păstrați în siguranță (vezi [Transformarea Prompturilor](#transform-prompts)).

<br /><br />

<a id="disclaimer"></a>
## Declinare a responsabilității

Numele de produse și iconiile aparțin proprietarilor lor respectivi și sunt utilizate exclusiv în scopuri de identificare. Acest software nu este afiliat sau recomandat de nicio dintre mărcile menționate.

<br /><br />

<a id="license"></a>
## Licență

Drept de autor © 2026 Waldemar Scudeller Jr.

[Licența Apache 2.0](LICENSE)