---
translated_at: "2026-03-15T22:04:53.735Z"
source_hash: "69732149de931f2a0059ecf9073871caedaa431362e32c010e7d93bd3cbd76bc"
source_mtime: 1773611603946.006
model: "stepfun/step-3.5-flash:free"
---
<a id="transrewrt-user-guide"></a>
# Transrewrt Korisnički vodič

<br />

<a id="introduction"></a>
## Uvod

Transrewrt vam pomaže raditi s tekstom na tri glavna načina:

- **Prevođenje** – pretvoriti tekst s jednog jezika na drugi.
- **Prepisivanje** – prepisati tekst u drugačijem stilu, kao što su jasniji, kraći ili formalniji.
- **Transformacija** – obraditi tekst koristeći prilagođene AI upute koje se zovu promptovi.

<br />

Ovaj vodič objašnjava kako koristiti aplikaciju nakon što je instalirana i pokrenuta. Za korake instalacije, pogledajte glavni [README](../README.md).

<br />

> ℹ️ **NAPOMENA**<br/>
> Transrewrt je dostupan kao desktop aplikacija za Windows i Linux, te kao samoposlužna web aplikacija. Ovo je uputstvo fokusirano na svakodnevnu uporabu aplikacije. Gdje nešto vrijedi samo za jednu verziju, to je jasno označeno.

<small>**Pročitajte na drugim jezicima:** [English (UK)](../USER-GUIDE.md) · [Português (BR)](USER-GUIDE.pt-BR.md) · [العربية](USER-GUIDE.ar.md) · [বাংলা](USER-GUIDE.bn.md) · [Català](USER-GUIDE.ca.md) · [简体中文](USER-GUIDE.zh-CN.md) · [繁體中文](USER-GUIDE.zh-TW.md) · [Hrvatski](USER-GUIDE.hr.md) · [Čeština](USER-GUIDE.cs.md) · [Nederlands](USER-GUIDE.nl.md) · [English (US)](USER-GUIDE.en-US.md) · [Filipino](USER-GUIDE.tl.md) · [Français](USER-GUIDE.fr.md) · [Deutsch](USER-GUIDE.de.md) · [Ελληνικά](USER-GUIDE.el.md) · [हिन्दी](USER-GUIDE.hi.md) · [Magyar](USER-GUIDE.hu.md) · [Italiano](USER-GUIDE.it.md) · [日本語](USER-GUIDE.ja.md) · [Basa Jawa](USER-GUIDE.jv.md) · [한국어](USER-GUIDE.ko.md) · [Bahasa Melayu](USER-GUIDE.ms.md) · [فارسی](USER-GUIDE.fa.md) · [Polski](USER-GUIDE.pl.md) · [Português (PT)](USER-GUIDE.pt.md) · [ਪੰਜਾਬੀ](USER-GUIDE.pa.md) · [Română](USER-GUIDE.ro.md) · [Русский](USER-GUIDE.ru.md) · [Slovenčina](USER-GUIDE.sk.md) · [Español](USER-GUIDE.es.md) · [Kiswahili](USER-GUIDE.sw.md) · [Svenska](USER-GUIDE.sv.md) · [తెలుగు](USER-GUIDE.te.md) · [ภาษาไทย](USER-GUIDE.th.md) · [Türkçe](USER-GUIDE.tr.md) · [Українська](USER-GUIDE.uk.md) · [Tiếng Việt](USER-GUIDE.vi.md)</small>

<br />

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents** 

- [Prije početka](#before-you-start)
  - [Kako dobiti API ključ (desktop aplikacija)](#how-to-get-an-api-key-desktop-app)
- [Početak](#getting-started)
- [Glavni dijelovi prozora](#main-parts-of-the-window)
  - [Bočna traka](#sidebar)
  - [Alatna traka](#toolbar)
  - [Ulazni i izlazni paneli](#input-and-output-panels)
- [Prevođenje](#translate)
  - [Prevedi tekst](#translate-text)
  - [Odabir jezika](#language-selection)
  - [Korisne postavke prevođenja](#helpful-translation-settings)
  - [Prečaci na tipkovnici](#keyboard-shortcuts)
- [Prepisivanje](#rewrite)
  - [Prepisi tekst](#rewrite-text)
- [Transformacija](#transform)
  - [Pokreni postojeći prompt](#run-an-existing-prompt)
  - [Ako još nemate promptove](#if-you-have-no-prompts-yet)
  - [Brzo stvori prompt](#create-a-prompt-quickly)
  - [Uredi prompt](#edit-a-prompt)
  - [Testiraj prompt prije korištenja](#test-a-prompt-before-using-it)
  - [Upravljaj spremljenim promptovima](#manage-saved-prompts)
- [Nadzorna ploča](#dashboard)
  - [Filtriraj podatke](#filter-the-data)
  - [Kartice nadzorne ploče](#dashboard-tabs)
  - [Izvezi podatke](#export-data)
  - [Izbriši spremljene zapise za model](#delete-stored-records-for-a-model)
- [Postavke](#settings)
  - [Opće postavke](#general-settings)
  - [Modeli](#models)
  - [Jezici](#languages)
  - [Praćenje troškova](#cost-tracking)
  - [Transformacijski promptovi](#transform-prompts)
  - [Korisnici](#users)
  - [API konfiguracija](#api-config)
  - [O aplikaciji](#about)
- [Česte probleme](#common-issues)
  - [Aplikacija neće prevesti, prepisati ili transformirati tekst](#the-app-will-not-translate-rewrite-or-transform-text)
  - [Popis modela je prazan](#the-model-list-is-empty)
  - [Rezultat je previše sporan ili skup](#the-result-is-too-slow-or-too-expensive)
  - [Sučelje je u pogrešnom jeziku](#the-interface-is-in-the-wrong-language)
  - [Tekst je premalen ili teško čitljiv](#the-text-is-too-small-or-hard-to-read)
  - [Promijenio sam prompt i izgubio uređenja](#i-changed-a-prompt-and-lost-the-edits)
- [Brzi savjeti](#quick-tips)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br /><br />

<a id="before-you-start"></a>

## Prije početka

Da biste koristili Transrewrt, trebate pristup AI usluzi putem OpenRouter-a.

Ne morate odabrati plaćeni model prije početka. Aplikacija uvijek uključuje ugrađen **besplatni** model, tako da za normalnu upotrebu to dovoljno da počnete prevoditi, prepisivati i transformirati tekst.

Običnim jezikom:

- **Model** je AI stroj koji obavlja posao.
- **API ključ** je vaša osobna pristupna vjerodostojnica za tu uslugu.

Ako koristite **desktop aplikaciju**, trebat ćete API ključ. Za detaljne korake, pogledajte [Kako dobiti API ključ (desktop aplikacija)](#how-to-get-an-api-key-desktop-app) niže. Ukratko: napravite račun na [OpenRouter](https://openrouter.ai), otvorite stranicu [Ključevi](https://openrouter.ai/keys), napravite novi ključ i zalijepite ga u [**Postavke** > **API Konfiguracija**](#api-config) u Transrewrt-u.

Ako koristite **web verziju**, vlasnik poslužitelja obavito to podešava za vas, tako da vam se normalno neće trebati ručno unijeti API ključ.

<br />

<a id="how-to-get-an-api-key-desktop-app"></a>
### Kako dobiti API ključ (desktop aplikacija)

Ako koristite desktop aplikaciju, slijedite ove korake:

1. Idite na [OpenRouter](https://openrouter.ai) u vašem web pregledniku.
2. Napravite račun ili se prijavite.
3. Otvorite stranicu [Ključevi](https://openrouter.ai/keys).
4. Kliknite gumb za stvaranje novog API ključa.
5. Dajte ključu ime kako biste ga kasnije mogli prepoznati.
6. Kopirajte novi API ključ.
7. Vratite se u Transrewrt i otvorite **Postavke** > **API Konfiguracija**.
8. Zalijepite ključ u **OpenRouter API Ključ**.
9. Kliknite **Testiraj API Konfiguraciju** kako biste bili sigurni da radi.

> ℹ️ **NAPOMENA**<br/>
> Možete početi s besplatnim putem OpenRouter-a ili bilo kojim drugim besplatnim modelom dostupnim. U mnogim slučajevima, to je dovoljno da počnete koristiti Transrewrt bez odabira plaćenog modela.

<br /><br />

<a id="getting-started"></a>
## Početak rada

Ako je ovo vaš prvi put da koristite Transrewrt, slijedite ovaj redoslijed:

1. Otvorite aplikaciju.
2. Odaberite vaš **Jezik sučelja** iz ikone globusa po potrebi.
3. Ako ste na **desktop aplikaciji**, otvorite [**Postavke** > **API Konfiguracija**](#api-config), zalijepite svoj OpenRouter API ključ i kliknite **Testiraj API Konfiguraciju**.
4. Otvorite [**Postavke** > **Modeli**](#models) i dodajte jedan ili više modela u **Odabrani Modeli**.
5. Otvorite [**Postavke** > **Jezici**](#languages) i odaberite svoje **Najkorišteniji jezici** ako želite da se vaši najčešće korišteni jezici pojave prvi.
6. Idite na **Prevodi** i pokrenite jednostavan prijevod kako biste potvrdili da sve radi.
7. Kad to funkcionira, isprobajte **Prepisivanje** i zatim **Transformacija**.

Ovaj redoslijed je važan. On spriječava najčešći problem početne upotrebe: pokušaj pokretanja zadatka prije nego što aplikacija ima radujući API vezu ili odabrani model.

<br /><br />

<a id="main-parts-of-the-window"></a>
## Glavni dijelovi prozora

Aplikacija je podijeljena na tri glavna područja:

- **Bočna traka** s lijeve strane.
- **Alatna traka** na vrhu.
- **Radno područje** u sredini.

<br />

<a id="sidebar"></a>
### Bočna traka

Koristite bočnu traku za kretanje po aplikaciji:

<br />

<table>
  <tr>
    <td valign="top">
       <img src="../images/screenshots/hr/sidebar.png" alt="Bočna traka aplikacije" style="max-width: 100%; border: 1px solid #ddd; border-radius: 4px;">
    </td>
    <td valign="top">
      <br />
      <ul>
        <li><strong>Prevodi</strong> otvara radnu površinu za prijevod.</li>
        <li><strong>Prepisivanje</strong> otvara radnu površinu za prepisivanje.</li>
        <li><strong>Transformacija</strong> otvara radnu površinu za prilagođene upute.</li>
        <li><strong>Nadzorna ploča</strong> prikazuje informacije o korištenju i troškovima.</li>
        <li><strong>Postavke</strong> otvara panel s postavkama.</li>
        <li><strong>Korisnik</strong> prikazuje korisničko ime prijavljenog korisnika (samo web).</li>
      </ul>
      <br />
      <p>Možete također sakriti bočnu traku za više prostora klikom na ikonu pored logotipa aplikacije.</p>
    </td>
  </tr>
</table>

<br />

<a id="toolbar"></a>
### Alatna traka

Alatna traka se malo mijenja ovisno o tome gdje ste u aplikaciji.

- S lijeve strane prikazuje naziv trenutne stranice.
- S desne strane prikazuje **odabirnik modela** i kontrolu **Jezik sučelja**.

**Odabirnik modela** omogućuje vam da odaberete koji AI stroj će se koristiti za trenutni zadatak.

  ![Odabirnik modela](../images/screenshots/hr/model-selector.png)

> ℹ️ **NAPOMENA**<br/>
> Neki besplatni modeli mogu privremeno prestati raditi ako su nedostupni ili su dosegnuli limit korištenja. Ako se to dogodi, aplikacija će Automatski ukloniti taj model s vaše liste.


**Ikona globusa + kôd jezika** mijenja jezik sučelja aplikacije, kao što su izbornici i gumbi. **Ne mijenja** jezikove prevodjenja korištene u **Prevodi**.

  ![Odabirnik jezika sučelja](../images/screenshots/hr/language-selector.png)

<br />

<a id="input-and-output-panels"></a>

### Ulazni i izlazni paneli

Većina radnih prostora koristi ulazni panel s lijeve strane i izlazni panel s desne strane.

**Ulaz** panel prikazuje:

- Broj znakova
- Broj riječi
- Broj odlomaka

**Izlaz** panel može prikazati:

- Koliko je trajalo izvršavanje
- Cijena tog izvršavanja
- Vaša ukupna cijena do sada
- **TPS** (tokeni po sekundi), što je jednostavna mjera brzine
- Brojeve znakova, riječi i odlomaka
- Korišteni model

Ako se pitate o tehničkim pojmovima:

- **Token** znači mali dio teksta. Možete zamisliti ga kao dio riječi ili kratku riječ.
- **TPS** označuje koliko tih dijelova teksta model obrađuje po sekundi.

<br /><br />

<a id="translate"></a>
## Prijevod

Koristite **Prijevod** kada želite pretvoriti tekst s jednog jezika na drugi.

![Prijevod radni prostor](../images/screenshots/hr/translate.png)

<br />

<a id="translate-text"></a>
### Prijevod teksta

1. Otvorite **Prijevod**.
2. Odaberite jezik u **Od**.
3. Odaberite jezik u **U**.
4. Odaberite model u alatnoj traci.
5. Upišite ili zalijepite tekst u **Ulaz**.
6. Kliknite **Prijevod**.
7. Pročitajte rezultat u **Izlaz**.
8. Koristite gumb za kopiranje ako želite kopirati rezultat.

<br />

<a id="language-selection"></a>
### Odabir jezika

- **Od** može biti određeni jezik ili **Prepoznaj jezik**.
- **U** je jezik u kojem želite rezultat.

Vaši odabrani **Najkorišteniji jezici** pojavljuju se na vrhu popisa. Možete ih postaviti u [**Postavke** > **Jezici**](#languages).

<br />

<a id="helpful-translation-settings"></a>
### Korisne postavke prijevoda

U [**Postavke** > **Opće postavke**](#general-settings) možete promijeniti kako prijevod funkcionira:

- **Automatski prijevod pri lijepljenju** pokreće prijevod čim zalijepite tekst.
- **Automatsko kopiranje rezultata u međuspremnik** kopira rezultat automatski nakon uspješnog izvođenja.
- **Prijevod u stvarnom vremenu (prilikom tipkanja)** pokreće prijevode dok tipkate.
- **Vremensko ograničenje (ms)** kontrolira koliko dugo aplikacija čeka prije pokretanja prijevoda u stvarnom vremenu.

<br />

<a id="keyboard-shortcuts"></a>
### Prečaci na tipkovnici

U [**Postavke** > **Opće postavke**](#general-settings), **Ponašanje za ENTER** kontrolira što se događa kada pritisnete Enter:

- **Enter** može pokrenuti zadatak, a **Shift+Enter** dodati novi redak.
- Ili aplikacija može raditi obrnuto.

Trenutni prečac također je prikazan na gumbu **Prijevod**.

<br /><br />

<a id="rewrite"></a>
## Prerada

Koristite **Prerada** kada želite poboljšati formulaciju bez promjene glavnog značenja.

![Prerada radni prostor](../images/screenshots/hr/rewrite.png)

Ovo je korisno za:

- ispravljanje pravopisa i gramatike
- čišćenje teksta
- činjenje teksta formalnijim ili neformalnijim
- skraćivanje ili proširivanje teksta
- činjenje teksta tehničkijim

<br />

<a id="rewrite-text"></a>
### Prerada teksta

1. Otvorite **Prerada**.
2. Odaberite **Način**.
3. Odaberite model u alatnoj traci.
4. Upišite ili zalijepite tekst u **Ulaz**.
5. Kliknite **Prerada**.
6. Pregledajte rezultat u **Izlaz**.

Isto ponašanje tipke Enter opisano u [**Prijevod**](#keyboard-shortcuts) primjenjuje se i ovdje.

<br /><br />

<a id="transform"></a>
## Transformacija

Koristite **Transformacija** kada želite da AI slijedi prilagođeni skup uputa.

![Transformacija radni prostor](../images/screenshots/hr/transform.png)

Ovo je najfleksibilnija područje aplikacije. Možete ga koristiti za zadatke poput:

- sažimanje bilješki
- pretvaranje grubog teksta u uređenu e-poštu
- izdvajanje ključnih točaka
- pretvaranje teksta u određeni format

<br />

<a id="run-an-existing-prompt"></a>
### Pokretanje postojećeg uputa

1. Otvorite **Transformacija**.
2. Odaberite uput iz liste uputa.
3. Ako se pojavi okvir za **Ciljni** jezik, odaberite jezik ako želite.
4. Upišite ili zalijepite tekst u **Ulaz**.
5. Kliknite **Transformacija**.
6. Pročitajte rezultat u **Izlaz**.

<br />

<a id="if-you-have-no-prompts-yet"></a>
### Ako još nemate upute

Ako je vaša lista uputa prazna, kliknite **Učitaj primjere uputa**. To dodaje ugrađene primjere kako biste mogli brzo početi.

> ℹ️ **NAPOMENA**<br/>
> Primjeri uputa dani su na engleskom jeziku. Nakon učitavanja, možete urediti uputu i koristiti **Prijevod upute** ako želite prilagoditi tekst upute za drugi jezik.

<br />

<a id="create-a-prompt-quickly"></a>

### Brzo stvori prompt

Najbrži način da stvorite prompt je:

1. Kliknite **Novi prompt**.
2. Kliknite **Generiraj prompt**.
3. Opišite što želite da prompt napravi.
4. Odaberite model.
5. Pustite aplikaciju da stvori skicu za vas.
6. Pregledajte skicu i kliknite **Spremi**.

![Generiraj prompt](../images/screenshots/hr/transform-generate.png)

<br />

### Uređivanje prompta

Kada stvorite ili uredite prompt, uređivač se pojavljuje na lijevoj strani, a područje za testiranje na desnoj.

![Uređivač transformiranja prompta](../images/screenshots/hr/transform-prompt-edit.png)

Glavna polja su:

- **Naziv prompta**: naziv prikazan u listi prompta.
- **Upute za prompt (opcionalno)**: kratka napomena prikazana korisniku pri pokretanju prompta.
- **Uloga modela**: opća uloga dodijeljena AI-ju, kao što je 'Vi ste koristan pomoćnik.'
- **Upute za model (po jedna po liniji)**: specifična pravila koja želite da AI slijedi.
- **Opis izlaza**: kratka riječ opisujući rezultat, kao što je 'sažetak' ili 'prepisi'.
- **Temperatura (0.0 → 1.0)**: klizač kreativnosti.
- **Zatraži ciljni jezik**: dodaje selektor ciljnog jezika kada se prompt pokreće.

Ako vam je tehnički izraz **Temperatura** nov, zamislite ga ovako:

- **Niža** temperatura daje stabilnije, predvidljivije rezultate.
- **Viša** temperatura daje više raznolikosti i kreativnosti.

Također možete koristiti:

- **`Generiraj prompt`** da stvorite novu skicu od jednostavnog opisa
- **`Poboljšaj prompt`** da poboljšate postojeći prompt
- **`Prevedi prompt`** da prevedete polja prompta

> ⚠️ **UPOZORENJE**<br/>
> Kliknite **`Spremi`** prije nego što kliknete **`Nazad na Pokreni`**. Ako se vratite bez spremanja, promjene će biti izgubljene.

<br />

<a id="test-a-prompt-before-using-it"></a>
### Testiraj prompt prije korištenja

Testni panel na desnoj strani omogućuje vam da isprobate vaš prompt s uzorkom teksta prije nego što ga koristite u svakodnevnom radu.

Ovo je korisno kada:

- gradite novi prompt
- uspoređujete dvije verzije prompta
- želite provjeriti ton, duljinu ili format izlaza

<br />

<a id="manage-saved-prompts"></a>
### Upravljanje spremljenim promptovima

Da biste upravljali spremljenim promptovima na jednom mjestu, otvorite [**Postavke** > **Transformiraj promptove**](#transform-prompts).

Tamo možete:

- izlistati i obrisati vaše promptove
- izvesti promptove kao **JSON**, **CSV**, ili **XLSX**
- uvesti promptove iz datoteke

<br /><br />

## Nadzorna ploča

Koristite **Nadzornu ploču** da vidite koliko koristite aplikaciju i koliko vas to košta.

![Sažetak nadzorne ploče](../images/screenshots/hr/dashboard-summary.png)

<br />

<a id="filter-the-data"></a>
### Filtriranje podataka

Koristite gumbe za filtriranje na vrhu da promijenite vremenski raspon.

![Filtri nadzorne ploče](../images/screenshots/hr/dashboard-filter.png)

> ℹ️ **NAPOMENA**<br/>
> U web verziji, administratori mogu također vidjeti filter **Korisnik**. To im omogućuje da prebacuju između **Svi korisnici** i pojedini korisnik.

<br />

<a id="dashboard-tabs"></a>
### Kartice nadzorne ploče

- **Sažetak** daje vam pregled korištenja i troškova.
- **Prema korištenju** raspolaže aktivnost po jeziku prijevoda, načinu prepisivanja i transformiranju prompta.
- **Prema modelu** pokazuje koje modele ste koristili i koliko su koštali.
- **Po danu** pokazuje dnevne ukupne vrijednosti.
- **Svi pozivi** pokazuje cijelu povijest poziva i omogućuje vam izvoz.

<br />

<a id="export-data"></a>
### Izvoz podataka

Tablice nadzorne ploče mogu izvezati podatke u:

- **JSON**
- **CSV**
- **XLSX**

Ovo je korisno ako želite pregledati aktivnost izvan aplikacije ili podijeliti izvještaj.

<br />

<a id="delete-stored-records-for-a-model"></a>
### Brisanje spremljenih zapisa za model

U **Prema modelu** ili **Svi pozivi**, možete ukloniti spremljene zapise za model.

> ⚠️ **UPOZORENJE**<br/>
> Brisanje spremljenih zapisa ne može se poništiti. Koristite to samo ako ste sigurni da više ne trebate tu povijest.

Da biste obrisali sve podatke ili uklonili zapise na temelju njihove starosti, idite na [**Postavke** > **Praćenje troškova**](#cost-tracking). T ćete pronaći opcije za brisanje svih spremljenih podataka ili samo podataka starijih od određenog datuma.

<br /><br />

<a id="settings"></a>
## Postavke

Otvorite **Postavke** sa bočne trake da prilagodite kako se aplikacija ponaša.

Dostupne kartice mogu varirati:

- **Konfiguracija API-ja** dostupna je samo u desktop aplikaciji.
- **Korisnici** dostupna je samo u web aplikaciji, i samo za administratore.

<a id="general-settings"></a>

### Opće postavke

Koristite **Opće postavke** za kontrolu ponašanja pri upisivanju i izgleda.

**Ponašanje**

- **Ponašanje za ENTER** odlučuje hoće li Enter pokrenuti zadatak ili umetnuti novi redak.
- **Automatski prevodi pri lijepanju** pokreće prevodjenje čim zalijepite tekst.
- **Automatski kopiraj rezultat u međuspremnik** automatski kopira uspješne rezultate.
- **Prevedi u realnom vremenu (tijekom tipkanja)** prevodi dok tipkate.
- **Vrijeme čekanja (ms)** postavlja vrijeme čekanja za prevođenje u realnom vremenu.

**Izgled**

- **Broj znamenki za decimalni dio cijene** mijenja kako se decimalni brojevi cijene prikazuju.
- **Obitelj fontova** mijenja font za pisanje u tekstualnimPanelima.
- **Veličina** mijenja veličinu fonta.
- **Samo za web:** **prikaži okvir oko aplikacije** dodaje dodatni prostor oko sučelja.

<br />

<a id="models"></a>
### Modeli

Koristite **Postavke** > **Modeli** da izaberete koji modeli se pojavljuju na alatnojTraci.

![Kartica Models u postavkama](../images/screenshots/hr/settings-models.png)

Stranica ima dvije liste:

- **Dostupni modeli** na lijevoj strani
- **Odabrani modeli** na desnoj strani

Korisne kontrole uključuju:

- **Pretraži modele...** da pronađete model po imenu
- **Samo besplatni** da prikažete samo besplatne modele
- **Osvježi** da ponovno učitajte listu
- **Proširi sve** i **Zatvori sve** kada sortirate po pružaocu

Da dodate model, kliknite **Dodaj**.

Da uklonite model, kliknite **X** pored njega u **Odabrani modeli**.

Da očistite listu, kliknite **Deselektiraj sve**. Potreban besplatni model će ostati u listi.

> ℹ️ **NAPOMENA**<br/>
> Ako ne želite odmah dodati kredite OpenRouteru, prvo omogućite **Samo besplatni** i odaberite besplatne modele.

<br />

<a id="languages"></a>
### Jezici

Koristite **Postavke** > **Jezici** da organizirate liste jezika korištene u aplikaciji.

- **Glavni jezici** su pričvrščeni blizu vrha lista jezika u **Prevedi** i **Transformiraj**.
- **Prilagođeni jezik** vam omogućuje da dodate jezik koji nije u ugrađenoj listi.

Ako dodate prilagođeni jezik, on će se pojaviti u odabiračima jezika zajedno s ugrađenim opcijama.

<br />

<a id="cost-tracking"></a>
### Praćenje troškova

Koristite **Postavke** > **Praćenje troškova** da upravljanate informacijama o troškovima.

- **Ukupni trošak** prikazuje tekući zbroj.
- **Kopiraj vrijednost** kopira ukupnost u međuspremnik.
- **Resetiraj trošak** vraća spremljeni ukupni trošak na nulu.
- **Sinkroniziraj s upotrebom API ključa** postavlja ukupnost da odgovara upotrebi koju prijavljuje OpenRouter.
- **Upotreba API ključa** prikazuje detalje upotrebe, ako su dostupni.
- **Izbriši podatke o troškovima** uklanja sve podatke, ili samo unose starije od odabranog datuma.

> ⚠️ **UPOZORENJE**<br/>
> Brisanje podataka se ne može poništiti. Prije brisanja, osigurajte da ste sigurnosno kopirali podatke ili ih izvezli preko [**Nadzorna ploča** > **Svi pozivi**](#dashboard-tabs), inače će biti trajno izgubljeni.

<br />

<a id="transform-prompts"></a>
### Transformacijske upute

Koristite **Postavke** > **Transformacijske upute** da upravljanete uputama na skupno.

Možete:

- pregledati spremljene upute
- obrisati upute
- uvoziti upute iz datoteke
- izvoziti upute za sigurnosno kopiranje ili dijeljenje

<br />

<a id="users"></a>
### Korisnici

**Samo za web - samo za administratora**

Koristite **Korisnici** da upravljanate korisničkim računima u web verziji. Možete dodati korisnike, ažurirati njihove detalje, resetirati lozinke i obrisati račune.

<br />

<a id="api-config"></a>
### Konfiguracija API-ja

**Samo za desktop**

Koristite **Konfiguracija API-ja** da povežete desktop aplikaciju s OpenRouterom ili s Transrewrt proxy.

- **OpenRouter API ključ** je gdje zalijepite svoj ključ.
- **API URL** je adresa usluge. Ostavite ovo na zadanoj vrijednosti osim ako vam nije dana drugačija.
- **Koristi Transrewrt Proxy** usmjerava zahtjeve kroz proxy uslugu umjesto direktno na OpenRouter.
- **Ključno sjeme** se pojavljuje kada je proxy opcija omogućena.
- **Testiraj konfiguraciju API-ja** provjerava radi li trenutna postavka.

Detaljne korake za dobivanje vašeg API ključa, pogledajte [Kako dobiti API ključ](#how-to-get-an-api-key-desktop-app) iznad.

> ℹ️ **NAPOMENA**<br/>
> Ako niste sigurni što znače **API URL**, **Koristi Transrewrt Proxy**, ili **Ključno sjeme**, ostavite ih nepromijenjene i koristite zadani OpenRouter setup. Više informacija o proxy-u je dostupno u [Transrewrt Proxy repozitoriju](https://github.com/wsj-br/transrewrt-proxy).


<br />

<a id="about"></a>

### O

Kartica **O** prikazuje:

- naziv aplikacije
- broj inačice
- datum izgradnje
- poveznicu do repozitorija projekta

<br /><br />

<a id="common-issues"></a>
## Česti problemi

Ako nešto ne radi kako je očekivano, prvo provjerite sljedeće stavke.

<br />

<a id="the-app-will-not-translate-rewrite-or-transform-text"></a>
### Aplikacija neće prevesti, prepisati ili transformirati tekst

Provjerite da li:

- ste u alatnoj traci odabrali model
- u [**Postavke** > **Modeli**](#models) je naveden najmanje jedan model
- vaša API konfiguracija radi

Ako koristite desktop aplikaciju:

1. Otvorite [**Postavke** > **API Config**](#api-config).
2. Provjerite da li je vaš API ključ spremljen.
3. Kliknite **Test API Configuration**.

<br />

<a id="the-model-list-is-empty"></a>
### Popis modela je prazan

Otvorite [**Postavke** > **Modeli**](#models) i kliknite **Osvježi**.

Ako je potrebno:

- pretražite model
- uključite **Samo besplatno**
- dodajte jedan ili više modela u **Odabrani modeli**

<br />

<a id="the-result-is-too-slow-or-too-expensive"></a>
### Rezultat je previše spor ili previše skup

Pokušajte s jednom ili više od ovih stavki:

- odaberite drugi model
- koristite kratiji ulaz
- isključite **Prevođenje u realnom vremenu (pri tipkanju)** u [**Postavke** > **Opće postavke**](#general-settings)
- koristite besplatne modele za jednostavne zadatke (pogledajte [Modele](#models))

<br />

<a id="the-interface-is-in-the-wrong-language"></a>
### Sučelje je na krivom jeziku

Kliknite ikonu globusa u [alatnoj traci](#toolbar) i odaberite željeni **Jezik sučelja**.

<br />

<a id="the-text-is-too-small-or-hard-to-read"></a>
### Tekst je premalen ili teško čitljiv

Otvorite [**Postavke** > **Opće postavke**](#general-settings) i promijenite:

- **Vrsta fonta**
- **Veličinu**

<br />

<a id="i-changed-a-prompt-and-lost-the-edits"></a>
### Promijenio sam upit i izgubio promjene

Prilikom uređivanja upita, uvijek kliknite **Spremi** prije nego što kliknete **Natrag na Pokretanje**.

<br /><br />

<a id="quick-tips"></a>
## Brzi savjeti

- Počnite s [**Prevođenjem**](#translate) kako biste bili sigurni da vaša konfiguracija radi prije nego što pređete na [**Prepisivanje**](#rewrite) ili [**Transformaciju**](#transform).
- Koristite [**Prepisivanje**](#rewrite) za svakodnevna poboljšanja формулаacije.
- Koristite [**Transformaciju**](#transform) kada vam je potreba ponavljajući radni tijek za određeni zadatak.
- Koristite [**Nadzornu ploču**](#dashboard) ako želite pratiti upotrebu i troškove.
- Redovito izvezite upite ako gradite biblioteku upita koju želite čuvati sigurnom (pogledajte [Transformiraj upite](#transform-prompts)).

<br /><br />

<a id="disclaimer"></a>
## Odricanje od odgovornosti

Nazivi proizvoda i ikone pripadaju njihovim vlasnicima i koriste se isključivo za svrhe identifikacije. Ovo softver nije povezan s niti odobren od bilo kojeg od navedenih brendova.

<br /><br />

<a id="license"></a>
## Licenca

Copyright © 2026 Waldemar Scudeller Jr.

[Apache License 2.0](LICENSE)