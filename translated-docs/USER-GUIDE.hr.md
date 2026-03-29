---
translated_at: "2026-03-29T01:52:51.226Z"
source_hash: "8981b8db163153bfc443046fa20a49b33c92b9feebdee302f6ef60852f273472"
source_mtime: "2026-03-29T01:41:58.368Z"
model: "qwen/qwen3-235b-a22b-2507"
---
![Transrewrt natpis](../images/transrewrt_banner.png)


<a id="transrewrt-user-guide"></a>

# Korisnički vodič

<br/>

<a id="introduction"></a>

## Uvod

Transrewrt pomaže vam u radu s tekstom na tri glavna načina:

- **Prijevod** – pretvaranje teksta s jednog jezika na drugi.
- **Preformulacija** – preispis teksta u drugačijem stilu, npr. jasnijem, kraćem ili formalnijem.
- **Transformacija** – obrada teksta pomoću prilagođenih AI uputa koje se nazivaju prompti.

<br/>

Ovaj vodič objašnjava kako koristiti aplikaciju nakon što je instalirana i pokrenuta. Za korake tijekom instalacije pogledajte glavni **[README](README.hr.md)**.

<br/>

> ℹ️ **NAPOMENA**<br/>
> Transrewrt je dostupan kao desktop aplikacija za Windows i Linux, te kao samoposlužena web aplikacija. Ovaj vodič usredotočen je na svakodnevnu upotrebu aplikacije. Ako se neka funkcionalnost odnosi samo na jednu inačicu, to će biti jasno označeno.

<small>**Pročitajte na drugim jezicima:** </small>

<small id="lang-list"> [English (UK)](../USER-GUIDE.md) · [Português (BR)](USER-GUIDE.pt-BR.md) · [العربية](USER-GUIDE.ar.md) · [বাংলা](USER-GUIDE.bn.md) · [Català](USER-GUIDE.ca.md) · [简体中文](USER-GUIDE.zh-CN.md) · [繁體中文](USER-GUIDE.zh-TW.md) · [Hrvatski](USER-GUIDE.hr.md) · [Čeština](USER-GUIDE.cs.md) · [Nederlands](USER-GUIDE.nl.md) · [English (US)](USER-GUIDE.en-US.md) · [Filipino](USER-GUIDE.tl.md) · [Français](USER-GUIDE.fr.md) · [Deutsch](USER-GUIDE.de.md) · [Ελληνικά](USER-GUIDE.el.md) · [हिन्दी](USER-GUIDE.hi.md) · [Magyar](USER-GUIDE.hu.md) · [Italiano](USER-GUIDE.it.md) · [日本語](USER-GUIDE.ja.md) · [Basa Jawa](USER-GUIDE.jv.md) · [한국어](USER-GUIDE.ko.md) · [Bahasa Melayu](USER-GUIDE.ms.md) · [فارسی](USER-GUIDE.fa.md) · [Polski](USER-GUIDE.pl.md) · [Português (PT)](USER-GUIDE.pt.md) · [ਪੰਜਾਬੀ](USER-GUIDE.pa.md) · [Română](USER-GUIDE.ro.md) · [Русский](USER-GUIDE.ru.md) · [Slovenčina](USER-GUIDE.sk.md) · [Español](USER-GUIDE.es.md) · [Kiswahili](USER-GUIDE.sw.md) · [Svenska](USER-GUIDE.sv.md) · [తెలుగు](USER-GUIDE.te.md) · [ภาษาไทย](USER-GUIDE.th.md) · [Türkçe](USER-GUIDE.tr.md) · [Українська](USER-GUIDE.uk.md) · [Tiếng Việt](USER-GUIDE.vi.md)</small>

<small>

> **Napomena o prijevodima sučelja i dokumentacije:** Svi jezici sučelja osim izvornog engleskog (UK)
> prevedeni su pomoću AI modela; formulacije mogu biti neprecizne ili sadržavati pogreške.

</small>

<br/>


<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Sadržaj**

- [Prije nego što počnete](#before-you-start)
  - [Kako dobiti besplatni OpenRouter API ključ (desktop aplikacija)](#how-to-get-a-free-openrouter-api-key-desktop-app)
- [Početak rada](#getting-started)
- [Glavni dijelovi prozora](#main-parts-of-the-window)
  - [Bočna traka](#sidebar)
  - [Alatna traka](#toolbar)
  - [Ulazni i izlazni paneli](#input-and-output-panels)
- [Prijevod](#translate)
  - [Prijevod teksta](#translate-text)
  - [Odabir jezika](#language-selection)
  - [Korisne postavke prijevoda](#helpful-translation-settings)
- [Preuređivanje](#rewrite)
- [Transformacija](#transform)
  - [Pokretanje postojeće upute](#run-an-existing-prompt)
  - [Ako još nemate uputa](#if-you-have-no-prompts-yet)
  - [Brzo stvaranje upute](#create-a-prompt-quickly)
  - [Uređivanje upute](#edit-a-prompt)
  - [Testiranje upute prije korištenja](#test-a-prompt-before-using-it)
- [Nadzorna ploča](#dashboard)
  - [Filtriranje podataka](#filter-the-data)
  - [Kartice nadzorne ploče](#dashboard-tabs)
  - [Izvoz podataka](#export-data)

- [Izbrišite pohranjene zapise za model](#delete-stored-records-for-a-model)
- [Povijest](#history)
  - [Filtrirajte podatke](#filter-the-data-1)
  - [Izvoz podataka povijesti](#export-history-data)
- [Postavke](#settings)
  - [Opće postavke](#general-settings)
  - [Modeli](#models)
  - [Jezici](#languages)
  - [Praćenje troškova](#cost-tracking)
  - [Transformiranje upita](#transform-prompts)
  - [Korisnici](#users)
  - [API konfiguracija](#api-config)
  - [O programu](#about)
- [Uobičajeni problemi](#common-issues)
  - [Aplikacija ne prenosi, prepričava ili transformira tekst](#the-app-will-not-translate-rewrite-or-transform-text)
  - [Popis modela je prazan](#the-model-list-is-empty)
  - [Rezultat je pre spor ili pre skup](#the-result-is-too-slow-or-too-expensive)
  - [Sučelje je na pogrešnom jeziku](#the-interface-is-in-the-wrong-language)
  - [Tekst je premalen ili teško čitljiv](#the-text-is-too-small-or-hard-to-read)
  - [Dijagrami nadzorne ploče su prazni](#dashboard-charts-are-empty)

- [Tрошкови prikazuju „nije dostupno“ ili izgledaju netočno](#cost-shows-not-available-or-seems-wrong)
  - [Ukupni troškovi se ne podudaraju s računom pružatelja](#total-cost-does-not-match-my-provider-bill)
  - [Stranica Povijest nedostaje u bočnoj traci](#the-history-page-is-missing-from-the-sidebar)
  - [Web aplikacija: neočekivano preusmjeren na stranicu za prijavu](#web-app-redirected-to-the-login-page-unexpectedly)
  - [Web administrator: zaboravljena ili izgubljena lozinka](#web-admin-forgot-or-lost-a-password)
  - [Nadzorna ploča ne prikazuje podatke za druge korisnike (web)](#dashboard-shows-no-data-for-other-users-web)
  - [Promijenio sam upit i izgubio izmjene](#i-changed-a-prompt-and-lost-the-edits)
- [Brzi savjeti](#quick-tips)
- [Odricanje odgovornosti](#disclaimer)
- [Licenca](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="before-you-start"></a>

## Prije nego što započnete

Kako biste koristili Transrewrt, trebate imati pristup barem jednom AI pružatelju usluga. Podržani pružatelji su: [OpenRouter](https://openrouter.ai) (koji agregira mnoge modele), OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras i [Ollama](https://ollama.com) za lokalne modele.

Ne morate odabrati plaćeni model kako biste započeli. Čim dodate svoj OpenRouter API ključ, aplikacija automatski aktivira ugrađenu **besplatu** OpenRouter opciju. To vam omogućuje trenutno početno prevođenje, prepisivanje i transformaciju teksta. Alternativno, besplatni API ključ možete dobiti i od Cerebras, Googlea, Groqa ili Mistral AI.

Prostijim riječima:

- **Model** je AI motor koji obavlja posao. Modeli se navode s prefiksom **pružatelja usluge** (npr. `openrouter/…`, `openai/…`, `ollama/…`).
- **API ključ** (ili za Ollamu, **osnovni URL**) je način kako aplikacija dolazi do tog pružatelja usluge.

Ako koristite **desktop aplikaciju**, dodajte ključeve u odjeljku [**Postavke** > **Konfiguracija API-ja**](#api-config) za svakog davatelja usluga kojeg koristite. Ako koristite isključivo OpenRouter, pogledajte dolje [Kako dobiti API ključ](#how-to-get-an-api-key-desktop-app). Ako ne želite koristiti API ključ, možete instalirati Ollamu (s [ollama.com](https://ollama.com)) i koristiti lokalne modele, npr. `translategemma:4b`.

Ako koristite **web verziju**, administrator poslužitelja konfigurira davatelje usluga putem varijabli okruženja, pa ključeve API-ja ne možete unijeti izravno u aplikaciju.

<br/>

<a id="how-to-get-an-api-key-desktop-app"></a>

### Kako do besplatnog OpenRouter API ključa (desktop aplikacija)

Ako koristite desktop aplikaciju, slijedite ove korake:

1. Posjetite [OpenRouter](https://openrouter.ai) u svom web pregledniku.
2. Kreirajte račun ili se prijavite.
3. Otvorite stranicu [Keys](https://openrouter.ai/keys).
4. Kliknite gumb za stvaranje novog API ključa.
5. Dajte ključu ime kako biste ga mogli prepoznati kasnije.
6. Kopirajte novi API ključ.
7. Vratite se na Transrewrt i otvorite **Settings** > **API Config**.
8. Zalijepite ključ u **OpenRouter API key** (unutar **Settings** > **API Config**).
9. Kliknite **Test OpenRouter key** kako biste provjerili radi li ispravno.

<br/><br/>

<a id="getting-started"></a>

## Prvi koraci

Ako ste po prvi put koristite Transrewrt, slijedite ovaj redoslijed:

1. Otvorite aplikaciju.
2. Ako je potrebno, odaberite svoj **jezik sučelja** preko ikone zemaljskog globusa.
3. Ako koristite **desktop aplikaciju**, otvorite [**Postavke** > **API konfiguracija**](#api-config), dodajte API ključ za najmanje jednog dobavljača (npr. OpenRouter) i kliknite **Test** kako biste provjerili radi li.
4. Otvorite [**Postavke** > **Modeli**](#models) i dodajte jedan ili više modela u **Odabrane modele**.
5. Otvorite [**Postavke** > **Jezici**](#languages) i odaberite svoje **Najčešći jezici**, ako želite da vam se najčešće korišteni jezici pojave prvi.
6. Idite na **Prijevod** i pokrenite jednostavan prijevod kako biste potvrdili da sve funkcioniše.
7. Kada to uspije, isprobajte **Preformuliranje**, a zatim i **Transformaciju**.

Redoslijed je važan. Time se spriječava najčešći problem prilikom prvog korištenja: pokušaj pokretanja zadatka prije nego što aplikacija ima radnu API vezu ili odabrani model.

<br/><br/>

<a id="main-parts-of-the-window"></a>

## Glavni dijelovi prozora

Aplikacija je podijeljena u tri glavna područja:

- **Bočna traka** s lijeve strane.
- **Alatna traka** na vrhu.
- **Radno područje** u sredini.

<br/>

<a id="sidebar"></a>

### Bočna traka

Koristite bočnu traku za kretanje unutar aplikacije. Bočnu traku možete sažeti kako biste oslobodili više prostora klikom na ikonu pokraj logotipa aplikacije.

<br/>

<table>
  <tr>
    <td valign="top">
       <img src="../images/screenshots/hr/sidebar.png" alt="Bočna traka aplikacije" style="max-width: 100%; border: 1px solid #ddd; border-radius: 4px;">
    </td>
    <td valign="top">
      <br/><br/>
      <ul>
        <li><strong>Prijevod</strong> otvara radni prostor za prijevod.</li><br/>
        <li><strong>Prepravak</strong> otvara radni prostor za prepravak.</li><br/>
        <li><strong>Transformacija</strong> otvara radni prostor za prilagođene upite.</li><br/>
        <li><strong>Nadzorna ploča</strong> prikazuje podatke o korištenju i troškovima.</li><br/>
        <li><strong>Postavke</strong> otvara ploču s postavkama.</li><br/>
        <li><strong>Povijest</strong> prikazuje povijest korištenja s ulaznim i izlaznim tekstom.</li><br/>
        <li><strong>Korisnik</strong> prikazuje korisničko ime prijavljenog korisnika (samo na webu).</li>
      </ul>

</td>
  </tr>
</table>

<br/>

<a id="toolbar"></a>

### Traka s alatima

Traka s alatima malo se razlikuje ovisno o tome gdje ste u aplikaciji.

- S lijeve strane prikazuje se naziv trenutačne stranice.
- S desne strane prikazuje se **odabir modela** i upravljački element za **jezik sučelja**.

**Odabir modela** omogućuje vam da odaberete koji AI motor ćete koristiti za trenutačni zadatak.

  ![Odabir modela](../images/screenshots/hr/model-selector.png)

Neke besplatne modele možda neće uvijek biti dostupne - ponekad su nedostupni ili imaju ograničenje korištenja. Ako se to dogodi, aplikacija će automatski ukloniti taj model s vašeg popisa dostupnih modela. Da biste kontrolirali koji modeli prikazuju, idite na [**Postavke** > **Modeli**](#models) i uredite svoj popis modela. 
Također možete otvoriti postavke modela izravno klikom na ikonu pružatelja usluge s lijeve strane naziva modela na alatnoj traci.

<br/>

**Ikona zemaljske kugle + kôd jezika** mijenjaju jezik sučelja aplikacije, kao što su izbornici i gumbi. To **ne mijenja** jezike za prijevod koristene u **Prijevodu**.

![Odabir jezika sučelja](../images/screenshots/hr/language-selector.png)

<br/>

<a id="input-and-output-panels"></a>

### Ulazni i izlazni paneli

Većina radnih površina koristi **ulazni** panel s lijeve strane i **izlazni** panel s desne strane.

Svaki panel prikazuje i:

| **Unos**                                                           | **Izlaz**                                                                                                                   |
|--------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------|
| - Broj znakova <br/>- Broj riječi <br/>- Broj odlomaka      <br/> | - Vrijeme potrebno za izvršenje zadatka<br/>- **TPS** (tokena po sekundi)<br/>- Broj znakova, riječi i odlomaka<br/>- Model koji je korišten |

Ako se pitate o tehničkim pojmovima:

- **Token** znači mali dio teksta. Možete ga zamisliti kao dio riječi ili kratku riječ.
- **TPS** znači broj takvih dijelova teksta koje je model obradio u sekundi.

<br/>

Također možete pratiti trošak svake operacije (ako je dostupan) i ukupni trošak tako što ćete omogućiti opciju `Prikaži informacije o trošku na akcijama` u odjeljku [**Postavke** > **Opće postavke**](#general-settings).

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="translate"></a>

## Prijevod

Koristite **Prijevod** kada želite pretvoriti tekst s jednog jezika na drugi.

![Radni prostor za prijevod](../images/screenshots/hr/translate.png)

<br/>

<a id="translate-text"></a>

### Prijevod teksta

1. Otvorite **Prijevod**.
2. Odaberite jezik u **S**.
3. Odaberite jezik u **Na**.
4. Odaberite model na alatnoj traci.
5. Upišite ili zalijepite tekst u **Unos**.
6. Kliknite **Prijevod**.
7. Pročitajte rezultat u **Izlaz**.
8. Koristite gumb za kopiranje ako želite kopirati rezultat.

<br/>

<a id="language-selection"></a>

### Odabir jezika

- **Iz** može biti određeni jezik ili **Otkrivanje jezika**.
- **U** je jezik u koji želite dobiti prijevod.

Odabrani **najčešći jezici** prikazat će se na vrhu popisa. Postavite ih u odjeljku [**Postavke** > **Jezici**](#languages).

<br/>

<a id="helpful-translation-settings"></a>

### Korisne postavke prijevoda

U odjeljku [**Postavke** > **Opće postavke**](#general-settings) možete promijeniti ponašanje prijevoda:

- **Automatski prevedi nakon ljepila** pokreće prijevod čim zalijepite tekst.
- **Automatski kopiraj rezultat u međuspremnik** automatski kopira rezultat nakon uspješnog prijevoda.
- **Trenutačni prijevod (tijekom tipkanja)** pokreće prijevode dok tipkate.
- **Vremensko ograničenje (ms)** regulira koliko dugo aplikacija čeka prije pokretanja trenutačnog prijevoda.
- **Enter** kontrolira što se događa kada pritisnete tipku `Enter`:

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="rewrite"></a>

## Prepisivanje

Koristite **Prepisivanje** kada želite poboljšati formulaciju bez promjene glavne poruke.

![Radno područje Prepisivanja](../images/screenshots/hr/rewrite.png)

Ovo je korisno za:

- ispravljanje pravopisa i gramatike (**Provjera pravopisa i gramatike**)
- povećanje jasnoće teksta (**Poboljšajte jasnoću**)
- više različitih preformulacija u jednom pokretanju (**Alternativne verzije**)
- činjenje teksta formalnijim ili neformalnijim (**Formalno** / **Neformalno**)
- skraćivanje ili proširivanje teksta (**Skraćeno** / **Prošireno**)
- činjenje teksta tehničkijim (**Učini tehničkim**)

<br/>

> 💡 **SAVJET**<br/>
> Kada koristite način "**Provjera pravopisa i gramatike**", u izlaznom panelu pojavi se prekidač **Prikaži promjene** (pored **Kopiraj**).
> Uključite ili isključite ga kako biste prikazali ili sakrili konkretne korekcije primijenjene na vaš tekst.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="transform"></a>

## Transformiraj

Koristite **Transformiraj** kada želite da AI slijedi prilagođeni skup uputa.

![Transformiraj radno područje](../images/screenshots/hr/transform.png)

Ovo je najfleksibilniji dio aplikacije. Možete ga koristiti za zadatke poput:

- sažimanje bilješki
- pretvaranje sirovog teksta u kancelarijski pismeni e-mail
- izdvajanje ključnih točaka
- pretvaranje teksta u određeni format
- bilo koja druga prilagođena aktivnost s ulaznim tekstom

<br/>

<a id="run-an-existing-prompt"></a>

### Pokretanje postojećeg upita

1. Otvorite **Transform**.
2. Odaberite upit s popisa upita.
3. Ako se pojavi okvir **Target** jezik, odaberite željeni jezik.
4. Upišite ili zalijepite tekst u polje **Input**.
5. Kliknite **Transform**.
6. Pročitajte rezultat u **Output**.

<br/>

<a id="if-you-have-no-prompts-yet"></a>

### Ako još uvijek nemate zapise

Ako je vaš popis zapisa prazan, kliknite **Učitaj uzorke zapisa** u Transform radnom prostoru. Istu funkciju možete pronaći u odjeljku [**Postavke** > **Transform zapisi**](#transform-prompts) u retku za izvoz/uvoz. Oba načina dodaju ugrađene primjere kako biste mogli brzo započeti.

<br/>

> ℹ️ **NAPOMENA**<br/>
> Uzorci zapisa dostavljaju se na engleskom jeziku. Nakon njihova učitavanja, možete urediti zapis i koristiti opciju **Prevedi zapis** kako biste ga preveli na svoj jezik.

<br/>

<a id="create-a-prompt-quickly"></a>

### Brzo stvaranje uputa

Najbrži način za stvaranje uputa je:

1. Kliknite **Novi uput**.
2. Kliknite **Generiraj uput**.
3. Opишite što želite da uput učini.
4. Odaberite model.
5. Dopustite aplikaciji da stvori skicu za vas.
6. Pregledajte skicu i kliknite **Spremi**.

![Generiraj uput](../images/screenshots/hr/transform-generate.png)


<br/>

<a id="edit-a-prompt"></a>

### Uređivanje uputa

Kada kreirate ili uredite uputu, uređivač se pojavi s lijeve strane, a isprobni prostor s desne strane.

![Transform urednik uputa](../images/screenshots/hr/transform-prompt-edit.png)

Glavna polja su:

- **Naziv upute**: naziv koji se prikazuje na popisu uputa.
- **Upute za uputu (neobavezno)**: kratki savjet koji se prikazuje korisniku prilikom izvođenja upute.
- **Uloga modela**: opća uloga dodijeljena umjetnoj inteligenciji, na primjer: 'Vi ste koristan pomoćnik.'
- **Upute modela (jedna po retku)**: specifična pravila koja želite da prati umjetna inteligencija.
- **Opis izlaza**: kratka riječ koja opisuje rezultat, poput 'sažetak' ili 'prepravak'.
- **Temperatura (0,0 → 1,0)**: način na koji će model raditi; pogledajte u nastavku.
- **Zatraži ciljani jezik**: dodaje odabir ciljanog jezika kada se pokrene uputa.

Ako vam je tehnički izraz **Temperatura** nov, zamislite to ovako:

- **Niža** temperatura daje stabilnije i predvidljivije rezultate.

- **Viša** temperatura daje veću raznolikost i kreativnost.

Također možete koristiti:

- **`Generiraj upit`** za stvaranje novog nacrta iz jednostavnog opisa
- **`Unaprijedi upit`** za poboljšavanje postojećeg upita
- **`Prevedi upit`** za prevođenje polja upita

<br/>

> ⚠️ **UPOZORENJE**<br/>
> Kliknite **`Spremi`** prije nego što kliknete **`Natrag na pokretanje`**. Ako se vratite bez spremanja, izmjene će biti izgubljene.

<br/>

<a id="test-a-prompt-before-using-it"></a>

### Testirajte upit prije korištenja

Ploča za testiranje s desne strane omogućuje isprobavanje upita s primjerima teksta prije nego što ga počnete koristiti u svakodnevnom radu.

Ovo je korisno kada:

- kreirate novi upit
- uspoređujete dvije verzije upita
- želite provjeriti ton, duljinu ili format izlaza

<br/>

> ℹ️ **NAPOMENA**<br/>
> Možete izvesti i uvesti spremljene upite u odjeljku [**Postavke** > **Transformacijski upiti**](#transform-prompts).

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="dashboard"></a>

## Nadzorna ploča

Upotrijebite **Nadzornu ploču** da biste vidjeli koliko koristite aplikaciju i koliko vas to košta (za naplaćene modele).

![Sažetak nadzorne ploče](../images/screenshots/hr/dashboard-summary.png)


<br/>

> ℹ️ **NAPOMENA**<br/>
> Ako koristite samo **besplatne** modele, iznosi **troškova** mogu biti nula, a sažeci usmjereni na troškove mogu izgledati prazno. Na karticama **Sažetak**, **Korištenje tijekom vremena** i **Korištenje po modelu** i dalje se prikazuju **brojevi poziva** (prijevodi, prepisivanja i transformacije) kada imate aktivnosti u odabranom razdoblju.

<br/>

<a id="filter-the-data"></a>

### Filtriranje podataka

Koristite gumbe za filtriranje na vrhu za promjenu vremenskog raspona.

![Filteri nadzorne ploče](../images/screenshots/hr/dashboard-filter.png)

<br/>

> ℹ️ **NAPOMENA**<br/>
> **Korisnički** filter je vidljiv samo administratorima u web verziji. Redovni korisnici neće vidjeti ovaj filter, a nije dostupan ni u desktop aplikaciji.

<br/>

<a id="dashboard-tabs"></a>

### Kartice nadzorne ploče

- **Sažetak** daje pregled korištenja i troškova. Uključuje **Korištenje tokom vremena** (naslagani kumulativni **broj poziva** po danu za prijevod, prepisivanje i transformaciju) te **Korištenje po modelu** (ukupni **broj poziva po modelu**, uključujući transformaciju).
- **Po korištenju** razdvaja aktivnosti prema jeziku prijevoda, načinu prepisivanja i upitu za transformaciju.
- **Po modelu** pokazuje koji ste modele koristili i koliko su vam koštali.
- **Po danu** prikazuje dnevne ukupne iznose.
- **Svi pozivi** prikazuje punu povijest poziva i omogućuje njezin izvoz.

<br/>

<a id="export-data"></a>

### Izvoz podataka

Tablice nadzorne ploče mogu izvesti podatke u:

- **JSON**
- **CSV**
- **XLSX**

Ovo je korisno ako želite pregledati aktivnost izvan aplikacije ili podijeliti izvješće.

<br/>

<a id="delete-stored-records-for-a-model"></a>

### Brisanje pohranjenih zapisa za model

U odjeljku **Po modelu** ili **Svi pozivi**, možete ukloniti pohranjene zapise za model klikom na ikonu „kantu za smeće“.

> ⚠️ **UPOZORENJE**<br/>
> Brisanje pohranjenih zapisa ne može se poništiti. Koristite ovu mogućnost samo ako ste sigurni da više ne trebate tu povijest zapisa.

Ako želite izbrisati sve podatke ili ukloniti zapise prema njihovoj starosti, idite na [**Postavke** > **Praćenje troškova**](#cost-tracking). Ondje ćete pronaći mogućnosti za brisanje svih pohranjenih podataka ili samo podataka starijih od određenog datuma.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="history"></a>

## Povijest

Kliknite na **Povijest** da biste vidjeli povijest svojih radnji unutar **Transrewrt-a**, uključujući ulaz i izlaz za svaku operaciju.

![Stranica Povijest](../images/screenshots/hr/history.png)

<br/>

<a id="filter-the-history"></a>

### Filtriranje podataka

**Povijest** koristi iste filtre kao i stranica **Nadzorna ploča**. Koristite ih za odabir vremenskog raspona.

![Filteri nadzorne ploče](../images/screenshots/hr/dashboard-filter.png)

<br/>

> ℹ️ **NAPOMENA**<br/>
> Filter **Korisnik** vidljiv je samo administratorima u web verziji. Redovni korisnici neće vidjeti ovaj filter, a nije dostupan ni u desktop aplikaciji.

<br/>

<a id="export-history-data"></a>

###  Izvoz podataka povijesti

Stranica povijesti može izvesti filtrirane podatke u:

- **JSON**
- **CSV**
- **XLSX**

Ovo je korisno ako želite pregledati aktivnosti izvan aplikacije ili podijeliti izvještaj.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="settings"></a>

## Postavke

Otvorite **Postavke** s bočne trake kako biste prilagodili ponašanje aplikacije.

Dostupni jezičci ovise o platformi i vašoj ulozi:

| Kartica | Računalo | Web (administrator) | Web (obični korisnik) |
|-------------------|:-------:|:-----------:|:------------------:|
| Opće postavke | da | da | da |
| Modeli | da | da | da |
| Jezici | da | da | da |
| Praćenje troškova | da | da | — |
| Transformacijski upiti | da | da | da |
| Korisnici | — | da | — |
| Konfiguracija API-ja | da | da | — |
| O programu | da | da | da |

<br/>

> ℹ️ **BILJEŠKA**<br/>
> U web verziji, svaki korisnik ima vlastitu konfiguraciju. Postavke kao što su odabrani modeli, jezici, opće opcije i transformacijski upiti pohranjuju se za svakog korisnika pojedinačno. Promjene koje napravite neće utjecati na druge korisnike.

<br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="general-settings"></a>

### Opće postavke

Koristite **Opće postavke** za kontrolu ponašanja pri kucanju, pohranjivanja pojedinosti izvršavanja u **Povijest** i izgleda.

**Ponašanje**

- **Ponašanje tipke ENTER** određuje hoće li `Enter` pokrenuti zadatak ili umetnuti novi redak.
- **Automatski prijevod pri lijepljenju** pokreće prijevod čim zalijepite tekst.
- **Automatsko kopiranje rezultata u međuspremnik** automatski kopira uspješne rezultate.
- **Prijevod u stvarnom vremenu (tijekom kucanja)** prevodi tekst dok kucate.
- **Vrijeme čekanja (ms)** postavlja vrijeme čekanja za prijevod u stvarnom vremenu.

**Povijest**

- **Zadrži povijest izvršavanja** kontrolira hoće li svaki prijevod, prepisivanje i pretvorba pohraniti **ulazni i izlazni tekst** za prikaz u [**Povijesti**](#history) na bočnoj traci. Isključivanje te funkcije zahtijeva potvrdu; ukoliko potvrdite, pohranjeni tekst povijesti biti će uklonjen iz baze podataka.

- **Brisanje povijesti podataka** omogućuje uklanjanje pohranjenog teksta prema starosti (npr. starijih od nekoliko mjeseci ili **svih podataka (očisti)**) pomoću opcije **Izbriši podatke**. To utječe samo na spremljeni izvršeni tekst za prikaz **Povijest**; ne briše podatke o troškovima ili ukupnu potrošnju. Kako biste uklonili ili smanjili podatke o **troškovima**, upotrijebite [**Postavke** > **Praćenje troškova**](#cost-tracking).

**Izgled**

- **Prikaži informacije o troškovima na radnjama** upravlja prikazom cijene po operaciji (ako je dostupno) i ukupnih troškova na pločama za prevođenje, prepisivanje i preoblikovanje.
- **Broj decimalnih mjesta za trošak** mijenja prikaz decimalnih brojki troškova.
- **Samo web:** **prikaži rub oko aplikacije** dodaje dodatni razmak oko sučelja.
- **Obitelj fonta** mijenja font u tekstnim pločama.
- **Veličina** mijenja veličinu fonta.

**Sigurnosna kopija konfiguracije**

- **Uključi podatke o korištenju u sigurnosnu kopiju** — kada je aktivirano, ZIP datoteka također sadrži povijest izvršavanja i podatke o API pozivima.

- **Sigurnosna kopija konfiguracije** — stvara jednu ZIP datoteku (`transrewrt-config-backup-YYYY-MM-DD_HHMMSS.zip` prema UTC-u prema zadanim postavkama) sa `config.json`, `state.json`, izbornim ključem za šifriranje, korisnicima, postavkama, prilagođenim upitima te podacima o korištenju ako ste dali pristanak. Nakon uspješne sigurnosne kopije, potvrda prikazuje naziv spremljene datoteke.
- **Vraćanje iz sigurnosne kopije** — otvara **dijalog za potvrdu prvo**. Odaberite ZIP datoteku sigurnosne kopije unutar dijaloga (**Pregledaj** / odabir datoteke ili prevlačenje po odbaci gdje je podržano), a zatim pregledajte opcije:
  - **Vraćanje podataka o korištenju** — uvoz podataka/povijesti iz ZIP datoteke kada su backup-irani uključujući korištenje; ostavite isključeno ako želite samo postavke i upite.
  - **Brisanje starih podataka o korištenju prije vraćanja** — uklanjanje postojeće povijesti korištenja na ovoj instalaciji prije primjene sigurnosne kopije (izborno; koristi se kada želite čisto zamijeniti).

Sigurnosne kopije stvorene u web ili lokalnoj verziji mogu se vratiti unazad u suprotnoj verziji. Prilikom vraćanja lokalne sigurnosne kopije u web verziji, podaci će biti vraćeni administratorskom korisniku.


<br/>

<a id="models"></a>

### Modeli

Koristite **Postavke** > **Modeli** kako biste odabrali koje modele želite vidjeti na alatnoj traci.

![Kartica modela u postavkama](../images/screenshots/hr/settings-models.png)

Stranica sadrži dvije liste:

- **Dostupni modeli** s lijeve strane
- **Odabrani modeli** s desne strane

Korisni elementi uključuju:

- **Pretraži modele...** za pronalaženje modela po imenu
- **Provider** oznake za sužavanje liste na jedan sustav (OpenRouter, OpenAI, Ollama, …)
- **Samo besplatni** za prikaz samo besplatnih modela
- **Osvježi** za ponovno učitavanje liste
- **Proširi sve** i **Sažmi sve** kada sortirate po pružatelju usluga

ID-ovi modela uključuju prefiks pružatelja (na primjer `openrouter/…` naspram `openai/…`). Oznake poput **OpenAI (OpenRouter)** naspram **OpenAI (izravno)** pokazuju kako se promet usmjerava.

> ℹ️ **NAPOMENA**<br/>

> **OpenRouter Body Builder** (`openrouter/bodybuilder`) je model za rutiranje, a ne opći model za razgovor: njegov odgovor je JSON koji opisuje tijela zahtjeva za OpenRouter API-je (na primjer, niz `requests` s `model` i `messages`). Ako ga koristite za **Prijevod**, **Preuređivanje** ili **Transformaciju**, ploča za izlaz prikazat će taj JSON, a ne završeni tekst. Za te zadatke odaberite običan tekstualni model. Više na [stranici modela Body Builder](https://openrouter.ai/openrouter/bodybuilder) na OpenRouter-u.

Akcije:

 - Za dodavanje modela kliknite **Add** ili bilo gdje na unosu.

 - Za uklanjanje modela kliknite **X** pokraj njega u **Selected Models** ili **Selected** u dostupnim modelima.

 - Da biste očistili popis, kliknite **Deselect all**. Obavezan besplatni model ostat će na popisu.

<br/>

> ℹ️ **NAPOMENA**<br/>

> Ako ne želite odmah dodati kredite OpenRouteru, počnite tako da omogućite opciju **Samo besplatno** i odaberete besplatne modele (nije potrebna kreditna kartica). Također možete koristiti Ollamu za pokretanje modela lokalno, bez ikakvog API ključa.

<br/>

<a id="languages"></a>

### Jezici

Koristite **Postavke** > **Jezici** za uređivanje popisa jezika koje koristi aplikacija.

- **Najčešći jezici** prikvačeni su na vrh popisa jezika u **Prijevodu** i **Pretvorbi**.
- **Prilagođeni jezik** omogućuje vam dodavanje jezika koji nije na ugrađenom popisu.

Ako dodate prilagođeni jezik, on će se pojaviti u odabiračima jezika uz ugrađene opcije.

<br/>

<a id="cost-tracking"></a>

### Praćenje troškova

Koristite **Postavke** > **Praćenje troškova** za upravljanje informacijama o troškovima.

- **Ukupni trošak** prikazuje tekući zbroj.
- **Kopiraj vrijednost** kopira ukupan iznos u međuspremnik.
- **Poništi trošak** postavlja pohranjeni zbroj na nulu.
- **Sinkroniziraj s korištenjem API ključa** postavlja zbroj da odgovara korištenju prikazanom na vašem OpenRouter računu (samo za OpenRouter).
- **Korištenje API ključa** prikazuje pojedinosti o korištenju na OpenRouteru, ako su dostupne.
- **Izbriši podatke o troškovima** uklanja sve podatke, ili samo unose starije od odabranog datuma.


**Praćenje troškova:** Kada koristite modele OpenRoutera, aplikacija prikazuje stvarno korištenje i izdatke temeljene na informacijama o troškovima s OpenRoutera. Za sve ostale pružatelje usluga, aplikacija procjenjuje troškove korištenjem cijena objavljenih od strane OpenRoutera, a ako cijena nije dostupna, procjena može biti nula.

<br/>

> ℹ️ **NAPOMENA**<br/>
> **Svi iznosi su procjene isključivo radi vaše orijentacije, a ne službeni računi.**


<br/>

> ⚠️ **UPOZORENJE**<br/>

> Brisanje podataka ne može se poništiti. Prije brisanja, obavezno napravite sigurnosnu kopiju svojih podataka ili ih izvezite putem [**Povijest**](#history)
> ili [**Nadzorna ploča** > **Svi pozivi**](#dashboard-tabs), inače će trajno biti izgubljeni.
> Također će biti izbrisana čitava povijest unosa/izlaza povezana s pojedinim unosom poziva API-ja.


<br/>

<a id="transform-prompts"></a>

### Transformacija upita

Upotrijebite **Postavke** > **Transformiraj upite** za skupno upravljanje upitima.

Možete:

- pregledati spremljene upite
- brisati upite
- uveziti upite iz datoteke
- izvesti upite za sigurnosnu kopiju ili dijeljenje
- učitati primjere upita na popis upita

<br/>

<a id="users"></a>

### Korisnici

Koristite **korisnike** za upravljanje korisničkim računima u web verziji. Možete dodavati korisnike, ažurirati njihove podatke, resetirati lozinke i brisati račune.

<br/>

<a id="api-config"></a>

### API konfiguracija

Podržani pružatelji usluga su: OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras i **Ollama** (lokalni modeli putem osnovnog URL-a). Potrebno je konfigurirati samo one pružatelje koje koristite.

**Web aplikacija: samo za administratora**

API ključevi se konfiguriraju putem sustava ili Docker okolišnih varijabli — ne unose se putem web sučelja. Ova stranica prikazuje koje pružatelje usluga imaju konfigurirani ključ i omogućuje testiranje svakog pojedinog pružatelja klikom na gumb **`Test`**.

<br/>

> ℹ️ **NAPOMENA**<br/>
> Da biste promijenili API ključ, ažurirajte okolišnu varijablu u svojoj sustavskoj ili Docker konfiguraciji te ponovno pokrenite poslužitelj ili kontejner.

> ℹ️ **NAPOMENA**<br/>

> **Sigurnosne kopije konfiguracije** (pogledajte [**Opće postavke** → Sigurnosna kopija konfiguracije](#general-settings)) mogu uključiti **rješene** ključeve pružatelja unutar `config.json` datoteke u ZIP arhivi. Vraćanje te ZIP arhive **neće** kopirati te ključeve natrag u konfiguracijsku datoteku poslužitelja – aktivni ključevi i dalje dolaze iz okruženja i postojećeg stanja datoteke kako je tu opisano.

<br/>

**Aplikacija za računalo**

Koristite **Konfiguraciju API-ja** za pohranu API ključeva za svakog pružatelja kojeg koristite. Za Ollama unesite **osnovni URL** umjesto API ključa.


<br/>

> 💡 **Savjet** <br/>
> Ako ne želite koristiti API ključeve niti plaćati korištenje, možete [preuzeti Ollama](https://ollama.com) i besplatno pokretati modele (poput `translategemma:4b`) lokalno na svom računalu. Alternativno, možete kreirati besplatni OpenRouter račun (nije potrebna kreditna kartica) za korištenje njihovih besplatnih modela ili dobiti besplatni API ključ od Cerebras, Googlea, Groqa ili Mistral AI.

<br/>

- Dodajte samo davatelje usluga koje trebate. U **Postavkama** > **Modeli**, svaki ID modela počinje s davateljem usluga (npr. `openrouter/openrouter/free`, `openai/gpt-4o`, `ollama/llama3`).

Da biste dodali API ključ, unesite vrijednost u tekstualno polje i kliknite **`Spremi`**. Da biste zamijenili postojeći ključ, kliknite **`Uredi`**. Da biste provjerili radi li ključ, kliknite **`Test`**. Za Ollama osnovni URL, uvijek kliknite **`Test`** kako biste provjerili vezu.

<br/>

> ℹ️ **NAPOMENA**<br/>
> Ne možete vidjeti trenutačnu vrijednost API ključa. Možete je samo zamijeniti pomoću gumba **`Uredi`**.
> API ključevi pohranjuju se šifrirano u konfiguraciji.

<br/>

<a id="about"></a>

### Informacije

Kartica **Informacije** prikazuje:

- naziv aplikacije
- broj inačice
- datum izgradnje
- poveznicu do repozitorija projekta

<br/><br/>

<a id="common-issues"></a>

## Uobičajeni problemi

Ako nešto ne radi kako je očekivano, prvo provjerite sljedeće točke.

<br/>

<a id="the-app-will-not-translate-rewrite-or-transform-text"></a>

### Aplikacija neće prevesti, prepisati ili transformirati tekst

Provjerite sljedeće:

- odabrali ste model u alatnoj traci
- popis najmanje jednog modela dostupan je u odjeljku [**Postavke** > **Modeli**](#models)
- vaša API postava radi ispravno

Ako koristite desktop aplikaciju:

1. Otvorite [**Postavke** > **API konfiguracija**](#api-config).
2. Provjerite je li spremljen najmanje jedan API ključ.
3. Kliknite **Test** pokraj davatelja usluge kako biste potvrdili da ključ ispravno radi.

<br/>

<a id="the-model-list-is-empty"></a>

### Popis modela je prazan

Otvorite [**Postavke** > **Modeli**](#models) i kliknite **Osvježi**.

Ako je potrebno:

- potražite model
- uključite opciju **Samo besplatni**
- dodajte jedan ili više modela u **Odabrane modele**

<br/>

<a id="the-result-is-too-slow-or-too-expensive"></a>

### Rezultat je previše spor ili prekup

Isprobajte jedno ili više od sljedećeg:

- odaberite drugi model
- koristite kraći ulazni tekst
- isključite **Tlumacenje u stvarnom vremenu (tijekom tipkanja)** u [**Postavkama** > **Opće postavke**](#general-settings)
- koristite besplatne modele za jednostavne zadatke (pogledajte [Modeli](#models))

<br/>

<a id="the-interface-is-in-the-wrong-language"></a>

### Sučelje je na pogrešnom jeziku

Kliknite ikonu kugle na [alatnoj traci](#toolbar) i odaberite željeni **jezik sučelja**.

<br/>

<a id="the-text-is-too-small-or-hard-to-read"></a>

### Tekst je premalen ili teško čitljiv

Otvorite [**Postavke** > **Opće postavke**](#general-settings) i promijenite:

- **Obitelj fonta**
- **Veličinu**

<br/>

<a id="dashboard-charts-are-empty"></a>

### Grafikoni na nadzornoj ploči su prazni

To je normalno ako:

- koristite samo **besplatne modele** i gledate **troškove** (oni mogu biti nula); grafikoni broja poziva za **korištenje** u odjeljku **Sažetak** još uvijek zahtijevaju podatke iz odabranog razdoblja
- odabrani **filter vremena** ne obuhvaća razdoblje u kojem su izvršeni pozivi — pokušajte s opcijom **Sve** kako biste provjerili

Ako su grafikoni i dalje prazni nakon odabira opcije **Sve**, provjerite pojavljuju li se pozivi u odjeljku [**Povijest**](#history) ili u kartici **Svi pozivi**.

<br/>

<a id="cost-shows-not-available-or-seems-wrong"></a>

### Trošak prikazuje "nije dostupan" ili izgleda netočno

Kada koristite modele putem **OpenRoutera**, aplikacija prikazuje stvarni iznos koji prijavljuje OpenRouter.

Za **druge pružatelje usluga** (izravno OpenAI, izravno Anthropic itd.), trošak se procjenjuje na temelju podataka o cijenama objavljenih od strane OpenRoutera. Ako se ne pronađe podudarna cijena za model, trošak će se prikazati kao **nije dostupan** i neće se dodati na ukupni iznos.

<br/>

<a id="total-cost-does-not-match-my-provider-bill"></a>

### Ukupni trošak se ne poklapa sa računom vašeg pružatelja usluge

Svi iznosi troškova u aplikaciji su **procjene samo za referencu**, a ne službeni računi.

Kako biste približili ukupni iznos stvarnom trošku na OpenRouteru, otvorite [**Postavke** > **Praćenje troškova**](#cost-tracking) i kliknite **Sinkroniziraj s korištenjem API ključa**.

<br/>

<a id="the-history-page-is-missing-from-the-sidebar"></a>

### Stranica povijesti nedostaje na bočnoj traci

**Zadrži povijest izvođenja** može biti onemogućena. Otvorite [**Postavke** > **Opće postavke**](#general-settings) i omogućite je. Imajte na umu da omogućavanje ove mogućnosti ne vraća prethodno izbrisane podatke povijesti.

<br/>

<a id="web-app-session-expired"></a>

### Web aplikacija: preusmjerenje na stranicu za prijavu neočekivano

Vaša sesija možda je istekla. Prijavite se ponovno. Ako se to često događa, provjerite postavke vremenskog trajanja sesije u konfiguraciji poslužitelja.

<br/>

<a id="web-admin-forgot-or-lost-a-password"></a>

### Web sučelje za administraciju: zaboravljena ili izgubljena lozinka

Ovo se odnosi na **self-hostiranu web aplikaciju** (Docker), a ne na desktop aplikaciju (Electron).

- Ako se drugi administrator može i dalje prijaviti, on ili ona može otvoriti [**Postavke** > **Korisnici**](#users), odabrati račun i postaviti **novu lozinku** na tom mjestu.
- Ako ste **blokirani** ali imate **pristup ljusci** stroja ili kontejnera, poništite lozinku pomoću pomoćnog alata koji dolazi s slikom (zamijenite `transrewrt` ako ste promijenili zadano ime, te stavite lozinku pod navodnike ako sadrži razmake ili posebne znakove):

```bash
docker exec transrewrt reset-web-password '<username>' '<new-password>'
```

Zadani korisnički nadimak administratora je `admin` ako niste stvorili druge račune. Kada unesete samo jedan argument, taj argument se tretira kao nova lozinka za `admin`.

Ako pokrećete aplikaciju iz **izravnog izvornog koda** umjesto Docker slike, koristite:

```bash
pnpm run reset-web-password -- <username> <new-password>

Skripta ažurira zapis korisnika u bazi podataka SQLite (i može stvoriti korisnika `admin` ako ne postoji). Nakon poništavanja, prijavite se s novom lozinkom.


<br/>

<a id="dashboard-shows-no-data-for-other-users"></a>

### Nadzorna ploča ne prikazuje podatke za druge korisnike (web)

Samo **administratori** mogu pregledati podatke svih korisnika putem filtera **Korisnik**. Redovni korisnici vide samo svoju aktivnost, što je unaprijed zadano.

<br/>

<a id="i-changed-a-prompt-and-lost-the-edits"></a>

### Promijenio sam uputu i izgubio uredništvo

Prilikom uređivanja upute uvijek kliknite na **Spremi** prije nego što kliknete na **Natrag na Pokretanje**.

<br/><br/>

<a id="quick-tips"></a>

## Brzi savjeti

- Počnite s [**Prijevodom**](#translate) kako biste se uvjerili da je sve ispravno postavljeno prije nego što prijeđete na [**Preuređivanje**](#rewrite) ili [**Transformaciju**](#transform).
- Koristite [**Preuređivanje**](#rewrite) za svakodnevna poboljšanja formulacije.
- Koristite [**Transformaciju**](#transform) kada vam treba ponovljiv tijek rada za određeni zadatak.
- Koristite [**Nadzornu ploču**](#dashboard) ako želite pratiti korištenje i troškove.
- Koristite [**Povijest**](#history) za pregled prethodnih operacija i njihovog punog ulaznog/izlaznog teksta.
- Redovito izvozite upite ako gradite biblioteku zapita koju želite sačuvati (vidi [Transformacijski zapisi](#transform-prompts)) ili ako ih želite podijeliti s drugima.

<br/><br/>

<a id="disclaimer"></a>

## Pravna obavijest

Nazivi proizvoda i ikone pripadaju svojim vlasnicima i koriste se isključivo u svrhu identifikacije. Ovaj softver nije u vezi niti ga ne odobravaju navedene marke.

<br/><br/>

<a id="license"></a>

## Licenca

Autorska prava © 2026. Waldemar Scudeller Jr.

[Apache Licenca 2.0](LICENSE)