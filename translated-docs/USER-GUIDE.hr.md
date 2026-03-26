---
translated_at: "2026-03-26T00:27:33.343Z"
source_hash: "87f5e7618cbfd3084efeecba28440ecccb03450da2ae8fe4c6f91c75cb7f4981"
source_mtime: 1774482557035.2158
model: "qwen/qwen3-235b-a22b-2507"
---
![Transrewrt natpis](../images/transrewrt_banner.png)


<a id="transrewrt-user-guide"></a>
# Korisnički vodič

<br/>

<a id="introduction"></a>
## Uvod

Transrewrt vam pomaže u radu s tekstom na tri glavna načina:

- **Prijevod** - pretvaranje teksta s jednog jezika na drugi.
- **Preformuliranje** - preispis teksta u drugačijem stilu, npr. jasniji, kraći ili formalniji.
- **Transformacija** - obrada teksta pomoću prilagođenih AI uputa koje se nazivaju prompti.

<br/>

Ovaj vodič objašnjava kako koristiti aplikaciju nakon što je instalirana i pokrenuta. Za korake instalacije uputite se na glavni **[README](README.hr.md)**.

<br/>

> ℹ️ **NAPOMENA**<br/>
> Transrewrt je dostupan kao desktop aplikacija za Windows i Linux, te kao samostalno hostana web aplikacija. Ovaj vodič fokusira se na svakodnevnu uporabu aplikacije. Ako nešto vrijedi samo za jednu inačicu, bit će jasno označeno.

<small>**Pročitajte na drugim jezicima:** </small>
<small id="lang-list"> [English (UK)](../USER-GUIDE.md) · [Português (BR)](USER-GUIDE.pt-BR.md) · [العربية](USER-GUIDE.ar.md) · [বাংলা](USER-GUIDE.bn.md) · [Català](USER-GUIDE.ca.md) · [简体中文](USER-GUIDE.zh-CN.md) · [繁體中文](USER-GUIDE.zh-TW.md) · [Hrvatski](USER-GUIDE.hr.md) · [Čeština](USER-GUIDE.cs.md) · [Nederlands](USER-GUIDE.nl.md) · [English (US)](USER-GUIDE.en-US.md) · [Filipino](USER-GUIDE.tl.md) · [Français](USER-GUIDE.fr.md) · [Deutsch](USER-GUIDE.de.md) · [Ελληνικά](USER-GUIDE.el.md) · [हिन्दी](USER-GUIDE.hi.md) · [Magyar](USER-GUIDE.hu.md) · [Italiano](USER-GUIDE.it.md) · [日本語](USER-GUIDE.ja.md) · [Basa Jawa](USER-GUIDE.jv.md) · [한국어](USER-GUIDE.ko.md) · [Bahasa Melayu](USER-GUIDE.ms.md) · [فارسی](USER-GUIDE.fa.md) · [Polski](USER-GUIDE.pl.md) · [Português (PT)](USER-GUIDE.pt.md) · [ਪੰਜਾਬੀ](USER-GUIDE.pa.md) · [Română](USER-GUIDE.ro.md) · [Русский](USER-GUIDE.ru.md) · [Slovenčina](USER-GUIDE.sk.md) · [Español](USER-GUIDE.es.md) · [Kiswahili](USER-GUIDE.sw.md) · [Svenska](USER-GUIDE.sv.md) · [తెలుగు](USER-GUIDE.te.md) · [ภาษาไทย](USER-GUIDE.th.md) · [Türkçe](USER-GUIDE.tr.md) · [Українська](USER-GUIDE.uk.md) · [Tiếng Việt](USER-GUIDE.vi.md)</small>

<small>

> **Napomena o prijevodima sučelja i dokumentacije:** Svi prijevodi sučelja osim izvornog engleskog (UK)
> izvršeni pomoću AI modela; formulacije mogu biti neprecizne ili sadržavati pogreške.

</small>

<br/>


<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Sadržaj**

- [Prije početka](#before-you-start)
  - [Kako dobiti besplatan OpenRouter API ključ (desktop aplikacija)](#how-to-get-a-free-openrouter-api-key-desktop-app)
- [Početak rada](#getting-started)
- [Glavni dijelovi prozora](#main-parts-of-the-window)
  - [Bočna traka](#sidebar)
  - [Alatna traka](#toolbar)
  - [Ulazne i izlazne ploče](#input-and-output-panels)
- [Prijevod](#translate)
  - [Prijevod teksta](#translate-text)
  - [Odabir jezika](#language-selection)
  - [Korisne postavke prijevoda](#helpful-translation-settings)
- [Preformuliranje](#rewrite)
- [Transformacija](#transform)
  - [Pokretanje postojećeg prompta](#run-an-existing-prompt)
  - [Ako još nemate prompte](#if-you-have-no-prompts-yet)
  - [Brzo stvaranje prompta](#create-a-prompt-quickly)
  - [Uređivanje prompta](#edit-a-prompt)
  - [Testiranje prompta prije korištenja](#test-a-prompt-before-using-it)
- [Nadzorna ploča](#dashboard)
  - [Filtriranje podataka](#filter-the-data)
  - [Kartice nadzorne ploče](#dashboard-tabs)
  - [Izvoz podataka](#export-data)
  - [Brisanje spremljenih zapisa za model](#delete-stored-records-for-a-model)
- [Povijest](#history)
  - [Filtriranje podataka](#filter-the-data-1)
  - [Izvoz podataka iz povijesti](#export-history-data)
- [Postavke](#settings)
  - [Opće postavke](#general-settings)
  - [Modeli](#models)
  - [Jezici](#languages)
  - [Praćenje troškova](#cost-tracking)
  - [Transformacijski prompti](#transform-prompts)
  - [Korisnici](#users)
  - [Konfiguracija API-ja](#api-config)
  - [O aplikaciji](#about)
- [Česti problemi](#common-issues)
  - [Aplikacija ne prijevodi, prepisuje ili transformira tekst](#the-app-will-not-translate-rewrite-or-transform-text)
  - [Popis modela je prazan](#the-model-list-is-empty)
  - [Rezultat je prespor ili prenaplatio](#the-result-is-too-slow-or-too-expensive)
  - [Sučelje je na krivom jeziku](#the-interface-is-in-the-wrong-language)
  - [Tekst je premalen ili ga je teško pročitati](#the-text-is-too-small-or-hard-to-read)
  - [Grafikoni na nadzornoj ploči su prazni](#dashboard-charts-are-empty)
  - [Trošak prikazuje "nije dostupan" ili izgleda pogrešno](#cost-shows-not-available-or-seems-wrong)
  - [Ukupni trošak se ne slaže s računom pružatelja usluge](#total-cost-does-not-match-my-provider-bill)
  - [Stranica Povijesti nedostaje u bočnoj traci](#the-history-page-is-missing-from-the-sidebar)
  - [Web aplikacija: Neočekivano vraćanje na stranicu prijave](#web-app-redirected-to-the-login-page-unexpectedly)
  - [Nadzorna ploča ne prikazuje podatke za druge korisnike (web)](#dashboard-shows-no-data-for-other-users-web)
  - [Promijenio sam prompt i izgubio izmjene](#i-changed-a-prompt-and-lost-the-edits)
- [Brzi savjeti](#quick-tips)
- [Pravno odricanje od odgovornosti](#disclaimer)
- [Licenca](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="before-you-start"></a>

## Prije početka

Da biste koristili Transrewrt, potreban vam je pristup barem jednom AI davatelju usluga. Podržani davatelji usluga su: [OpenRouter](https://openrouter.ai) (koji nudi pristup brojnim modelima), OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras i [Ollama](https://ollama.com) za lokalne modele.

Ne morate odabrati plaćeni model kako biste započeli. Čim dodate svoj OpenRouter API ključ, aplikacija automatski omogućuje ugrađenu **besplatu** OpenRouter opciju. To vam omogućuje odmah započeti prevode, prepisivanje i transformaciju teksta. Alternativno, možete dobiti besplatan API ključ od Cerebras, Googlea, Groq-a ili Mistral AI-a.

Jednostavnim riječima:

- **Model** je AI motor koji obavlja posao. Modeli se navode s **prefiksom davatelja usluga** (npr. `openrouter/…`, `openai/…`, `ollama/…`).
- **API ključ** (ili za Ollama, **osnovni URL**) je način kako aplikacija komunicira s tim davateljem usluga.

Ako koristite **desktop aplikaciju**, dodajte ključeve u odjeljku [**Postavke** > **Konfiguracija API-ja**](#api-config) za svakog davatelja usluga kojeg koristite. Ako koristite samo OpenRouter, pogledajte dolje [Kako dobiti API ključ](#how-to-get-an-api-key-desktop-app). Ako ne želite koristiti API ključ, možete instalirati Ollama (s [ollama.com](https://ollama.com)) i koristiti lokalne modele, poput `translategemma:4b`.

Ako koristite **web verziju**, vlasnik poslužitelja konfigurira davatelje usluga putem varijabli okruženja, pa ključeve ne možete unijeti izravno u aplikaciju.

<br/>

<a id="how-to-get-an-api-key-desktop-app"></a>
### Kako dobiti besplatni OpenRouter API ključ (desktop aplikacija)

Ako koristite desktop aplikaciju, slijedite sljedeće korake:

1. Otvorite [OpenRouter](https://openrouter.ai) u svom web pregledniku.
2. Stvorite račun ili se prijavite.
3. Otvorite stranicu [Ključevi](https://openrouter.ai/keys).
4. Kliknite na gumb za stvaranje novog API ključa.
5. Nazovite ključ kako biste ga kasnije mogli prepoznati.
6. Kopirajte novi API ključ.
7. Vratite se na Transrewrt i otvorite **Postavke** > **Konfiguracija API-ja**.
8. Zalijepite ključ u polje **OpenRouter API ključ** (ispod **Postavke** > **Konfiguracija API-ja**).
9. Kliknite **Testiraj OpenRouter ključ** kako biste provjerili radi li ispravno.

<br/><br/>

<a id="getting-started"></a>
## Prvi koraci

Ako koristite Transrewrt prvi put, slijedite ovaj redoslijed:

1. Otvorite aplikaciju.
2. Po potrebi odaberite svoj **jezik sučelja** s ikone zemaljskog globusa.
3. Ako koristite **desktop aplikaciju**, otvorite [**Postavke** > **Konfiguracija API-ja**](#api-config), dodajte API ključ barem za jednog davatelja usluga (npr. OpenRouter) i kliknite **Test** kako biste potvrdili da radi.
4. Otvorite [**Postavke** > **Modeli**](#models) i dodajte jedan ili više modela u **Odabrane modele**.
5. Otvorite [**Postavke** > **Jezici**](#languages) i odaberite svoje **Najčešće korištene jezike**, ako želite da se vaši najčešće korišteni jezici pojavljuju prvi.
6. Idite na **Prijevod** i izvršite jednostavan prijevod kako biste potvrdili da sve funkcioniše.
7. Kada to uspije, pokušajte opciju **Prepisi** i zatim **Transformiraj**.

Redoslijed je važan. Time se sprječava najčešći problem kod prvog korištenja: pokušaj izvođenja zadatka prije nego što aplikacija ima funkcionirajuću API vezu ili odabran model.

<br/><br/>

<a id="main-parts-of-the-window"></a>
## Glavni dijelovi prozora

Aplikacija je podijeljena na tri glavna područja:

- **Bočni traka** lijevo.
- **Alatna traka** na vrhu.
- **Radni prostor** u sredini.

<br/>

<a id="sidebar"></a>
### Bočna traka

Koristite bočnu traku za navigaciju kroz aplikaciju. Možete sažeti bočnu traku kako biste dobili više prostora klikom na ikonu pored logotipa aplikacije.

<br/>

<table>
  <tr>
    <td valign="top">
       <img src="../images/screenshots/hr/sidebar.png" alt="Bočna traka aplikacije" style="max-width: 100%; border: 1px solid #ddd; border-radius: 4px;">
    </td>
    <td valign="top">
      <br/><br/>
      <ul>
        <li><strong>Prevodi</strong> otvara radno područje za prijevode.</li><br/>
        <li><strong>Prepiši</strong> otvara radno područje za prepisivanje teksta.</li><br/>
        <li><strong>Transformiraj</strong> otvara radno područje za prilagođene upite.</li><br/>
        <li><strong>Nadzorna ploča</strong> prikazuje informacije o korištenju i troškovima.</li><br/>
        <li><strong>Postavke</strong> otvara ploču s postavkama.</li><br/>
        <li><strong>Povijest</strong> prikazuje povijest korištenja s unosom i izlaznim tekstom.</li><br/>
        <li><strong>Korisnik</strong> prikazuje korisničko ime prijavljenog korisnika (samo na web verziji).</li>
      </ul>
    </td>
  </tr>
</table>

<br/>

<a id="toolbar"></a>

### Alatna traka

Alatna traka se malo razlikuje ovisno o tome gdje se nalazite u aplikaciji.

- S lijeve strane prikazuje se naziv trenutačne stranice.
- S desne strane prikazuje se **odabir modela** i opcija za **jezik sučelja**.

**Odabir modela** omogućuje vam odabir AI motora koji ćete koristiti za trenutačni zadatak.

  ![Odabir modela](../images/screenshots/hr/model-selector.png)

Primijetite da neki besplatni modeli neće uvijek biti dostupni – ponekad su nedostupni ili dosegli ograničenje korištenja. U takvim slučajevima aplikacija će automatski ukloniti taj model s vaše liste dostupnih. Da biste kontrolirali koji modeli se prikazuju, idite na [**Postavke** > **Modeli**](#models) i uredite svoj popis modela. 
Također možete izravno otvoriti postavke modela klikom na ikonu pružatelja usluge s lijeve strane naziva modela na alatnoj traci.

<br/>

**Ikona zemaljskog globusa uz oznaku jezika** mijenja jezik aplikacije, npr. izbornike i gumbe. Ona **ne mijenja** jezike prevođenja korištene u kartici **Prevedi**.

  ![Odabir jezika sučelja](../images/screenshots/hr/language-selector.png)

<br/>

<a id="input-and-output-panels"></a>
### Ulazni i izlazni okviri

Većina radnih površina koristi lijevi **ulazni** okvir i desni **izlazni** okvir.

Svaki okvir prikazuje i:

| **Ulaz**                                                          | **Izlaz**                                                                                                                  |
|--------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------|
| - Broj znakova <br/>- Broj riječi <br/>- Broj odlomaka   <br/> | - Trajanje završetka zadatka<br/>- **TPS** (tokena po sekundi)<br/>- Broj znakova, riječi i odlomaka<br/>- Korišteni model |


Ako se pitate o tehničkim izrazima:

- **Token** znači mali dio teksta. Možete to zamisliti kao dio riječi ili kratku riječ.
- **TPS** označava koliko takvih tekstualnih dijelova model obradi svake sekunde.

<br/>

Također možete pratiti trošak svake operacije (ako je dostupno) i ukupne troškove tako da uključite opciju `Prikaži informacije o troškovima` u [**Postavkama** > **Opće postavke**](#general-settings). 
 
<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="translate"></a>
## Prijevod

Koristite značajku **Prijevod** kada želite prevesti tekst s jednog jezika na drugi.

![Radno područje za prijevod](../images/screenshots/hr/translate.png)

<br/>

<a id="translate-text"></a>
### Prijevod teksta

1. Otvorite **Prijevod**.
2. Odaberite jezik u polju **S**.
3. Odaberite jezik u polju **Na**.
4. Odaberite model na alatnoj traci.
5. Upišite ili zalijepite tekst u **Ulaz**.
6. Kliknite **Prevedi**.
7. Pročitajte rezultat u **Izlaz**.
8. Ako želite kopirati rezultat, iskoristite gumb za kopiranje.

<br/>

<a id="language-selection"></a>
### Odabir jezika

- **S** može biti određeni jezik ili opcija **Otkrij jezik**.
- **Na** je ciljani jezik u koji želite prevesti.

Vaši odabrani **najčešći jezici** pojavljuju se na vrhu popisa. Možete ih postaviti u [**Postavkama** > **Jezici**](#languages).

<br/>

<a id="helpful-translation-settings"></a>
### Korisne postavke prijevoda

U [**Postavkama** > **Opće postavke**](#general-settings), možete mijenjati način rada prijevoda:

- **Automatski prijevod nakon zalistanja** pokreće prijevod čim zalijepite tekst.
- **Automatsko kopiranje rezultata u međuspremnik** automatski kopira rezultat nakon uspješnog prijevoda.
- **Prijevod u stvarnom vremenu (tijekom tipkanja)** pokreće prijevode dok pišete.
- **Vrijeme čekanja (ms)** kontroliše koliko dugo aplikacija čeka prije pokretanja prijevoda u stvarnom vremenu.
- **Enter** kontroliše što se događa kad pritisnete tipku `Enter`:

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="rewrite"></a>
## Preoblikovanje

Koristite opciju **Preoblikovanje** kada želite poboljšati izrazivost teksta bez promjene osnovnog značenja.

![Radno područje za preoblikovanje](../images/screenshots/hr/rewrite.png)

Ovo je korisno za:

- ispravljanje pravopisa i gramatike
- izradu jasnijeg teksta
- izradu formalnijeg ili neformalnijeg teksta
- skraćivanje ili proširivanje teksta
- izradu tehničkijeg zvukanja teksta

<br/>

> 💡 **SAVJET**<br/>
> Kada koristite način "**Provjera pravopisa i gramatike**", u izlaznom okviru pojavi se gumb `Prikaži izmjene`.
> Kliknite na ovaj gumb da biste uključili ili isključili prikaz ispravaka, pokazujući ili sakrivajući točne izmjene napravljene na vašem tekstu.


<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="transform"></a>

## Transformacija

Koristite **Transformaciju** kada želite da umjetna inteligencija slijedi prilagođeni skup uputa.

![Radni prostor Transformacije](../images/screenshots/hr/transform.png)

Ovo je najfleksibilniji dio aplikacije. Možete ga koristiti za zadatke poput:

- sažimanja bilješki
- pretvaranja sirovog teksta u urednu e-poštu
- izdvajanja ključnih točaka
- pretvaranja teksta u određeni format
- bilo kojeg drugog prilagođenog zadatka s ulaznim tekstom

<br/>

<a id="run-an-existing-prompt"></a>
### Pokretanje postojeće upute

1. Otvorite **Transformaciju**.
2. Odaberite uputu s popisa uputa.
3. Ako se pojavi okvir **Ciljani** jezik, odaberite željeni jezik.
4. Upišite ili zalijepite tekst u polje **Ulaz**.
5. Kliknite **Transformiraj**.
6. Pročitajte rezultat u polju **Izlaz**.

<br/>

<a id="if-you-have-no-prompts-yet"></a>
### Ako još nemate uputa

Ako je vaš popis uputa prazan, kliknite **Učitaj primjere uputa**. Time se dodaju ugrađeni primjeri kako biste brže mogli započeti.

<br/>

> ℹ️ **NAPOMENA**<br/>
> Primjeri uputa dostavljaju se na engleskom jeziku. Nakon što ih učitate, možete urediti uputu te koristiti opciju **Prevedi uputu** kako biste je preveli na svoj jezik.

<br/>

<a id="create-a-prompt-quickly"></a>
### Brzo stvaranje upute

Najbrži način za kreiranje upute jest:

1. Kliknite **Nova uputa**.
2. Kliknite **Generiraj uputu**.
3. opišite što želite da uputa učini.
4. Odaberite model.
5. Dopustite aplikaciji da kreirati nacrt za vas.
6. Provjerite nacrt i kliknite **Spremi**.

![Generiraj uputu](../images/screenshots/hr/transform-generate.png)


<br/>

<a id="edit-a-prompt"></a>
### Uređivanje upute

Kada kreirate ili mijenjate uputu, editor se pojavljuje s lijeve strane, a s desne strane pojavljuje se područje za testiranje.

![Uređivač upute transformacije](../images/screenshots/hr/transform-prompt-edit.png)

Glavna polja su:

- **Naziv upute**: naziv koji se prikazuje na popisu uputa.
- **Upute za uputu (neobavezno)**: kratki savjet koji se prikazuje korisniku pri izvršavanju upute.
- **Uloga modela**: opća uloga dodijeljena umjetnoj inteligenciji, npr. 'Vi ste korisni pomoćnik.'
- **Upute modela (jedna po retku)**: specifična pravila koja AI treba slijediti.
- **Opis izlaza**: kratak opis rezultata, npr. 'sažetak' ili 'preuređivanje'.
- **Temperatura (0.0 → 1.0)**: način ponašanja modela; vidi niže.
- **Upit za ciljani jezik**: dodaje izbornik ciljanog jezika prilikom pokretanja upute.

Ako vam je tehnički pojam **Temperatura** nepoznat, zamislite to ovako:

- **Niža** temperatura daje stabilnije i predvidivije rezultate.
- **Viša** temperatura daje veću raznolikost i kreativnost.

Također možete koristiti:

- **`Generiraj uputu`** za kreiranje novog nacrta iz jednostavnog opisa
- **`Poboljšaj uputu`** za usavršavanje postojeće upute
- **`Prevedi uputu`** za prevod polja upute

<br/>

> ⚠️ **UPOZORENJE**<br/>
> Kliknite **`Spremi`** prije nego što kliknete **`Natrag na izvršenje`**. Ako se vratite bez spremanja, izmjene će biti izgubljene.

<br/>

<a id="test-a-prompt-before-using-it"></a>
### Testiranje upute prije korištenja

Testni panel s desne strane omogućuje vam isprobavanje upute s uzorkom teksta prije nego što je koristite u svakodnevnom radu.

Ovo je korisno kada:

- kreirate novu uputu
- uspoređujete dvije verzije iste upute
- želite provjeriti ton, duljinu ili format izlaza

<br/>

> ℹ️ **NAPOMENA**<br/>
> Možete izvoziti i uvoziti spremljene upute u odjeljku [**Postavke** > **Transformacijske upute**](#transform-prompts).

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="dashboard"></a>
## Nadzorna ploča

Koristite **Nadzornu ploču** kako biste vidjeli koliko koristite aplikaciju i koliko vas košta (za plaćene modele).

![Pregled nadzorne ploče](../images/screenshots/hr/dashboard-summary.png)


<br/>

> ℹ️ **NAPOMENA**<br/>
> Ako koristite samo besplatne modele, grafikoni vezani uz troškove biti će prazni. 

<br/>

<a id="filter-the-data"></a>
### Filtriranje podataka

Koristite gumbe za filtriranje pri vrhu kako biste promijenili vremenski raspon.

![Filteri nadzorne ploče](../images/screenshots/hr/dashboard-filter.png)

<br/>

> ℹ️ **NAPOMENA**<br/>
> Filter **Korisnik** mogu vidjeti samo administratori u web verziji. Redovni korisnici neće vidjeti ovaj filter, a nije dostupan ni u desktop aplikaciji.

<br/>

<a id="dashboard-tabs"></a>

### Kartice nadzorne ploče

- **Pregled** daje vam uvid u korištenje i troškove.
- **Po korištenju** razdvaja aktivnost po jeziku prevoda, načinu prepisivanja i upitima za transformaciju.
- **Po modelu** prikazuje koji ste modele koristili i koliko vas je to koštalo.
- **Po danu** prikazuje dnevne ukupne iznose.
- **Svi pozivi** prikazuje cijelu povijest poziva i omogućuje izvoz.

<br/>

<a id="export-data"></a>
### Izvoz podataka

Tablice na nadzornoj ploči mogu izvoziti podatke u:

- **JSON**
- **CSV**
- **XLSX**

To je korisno ako želite pregledati aktivnosti izvan aplikacije ili podijeliti izvješće.

<br/>

<a id="delete-stored-records-for-a-model"></a>
### Brisanje pohranjenih zapisa za model

U odjeljku **Po modelu** ili **Svi pozivi**, možete ukloniti pohranjene zapise za model klikom na ikonu "kanta za otpatke".

> ⚠️ **UPOZORENJE**<br/>
> Brisanje pohranjenih zapisa nije povrativo. Koristite to samo ako ste sigurni da više ne trebate tu povijest.

Za brisanje svih podataka ili uklanjanje zapisa na temelju njihove starosti, idite na [**Postavke** > **Praćenje troškova**](#cost-tracking). Tamo ćete pronaći mogućnosti za brisanje svih pohranjenih podataka ili samo podataka starijih od određenog datuma.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="history"></a>
## Povijest

Kliknite na **Povijest** da biste vidjeli povijest svojih radnji unutar **Transrewrta**, uključujući ulazne i izlazne podatke svake operacije.

![Stranica povijesti](../images/screenshots/hr/history.png)

<br/>

<a id="filter-the-history"></a>
### Filtiranje podataka

**Povijest** koristi iste filtre kao i stranica **Nadzorne ploče**. Koristite ih za odabir vremenskog raspona.

![Filteri nadzorne ploče](../images/screenshots/hr/dashboard-filter.png)

<br/>

> ℹ️ **NAPOMENA**<br/>
> Filter **Korisnik** vidljiv je samo administratorima u web verziji. Redovni korisnici neće vidjeti ovaj filter, a nije dostupan ni u desktop aplikaciji.

<br/>

<a id="export-history-data"></a>
### Izvoz podataka povijesti

Stranica povijesti može izvesti filtrirane podatke u:

- **JSON**
- **CSV**
- **XLSX**

To je korisno ako želite pregledati aktivnosti izvan aplikacije ili podijeliti izvješće.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="settings"></a>
## Postavke

Otvorite **Postavke** iz bočnog izbornika kako biste prilagodili ponašanje aplikacije.

Dostupne kartice ovise o platformi i vašoj ulozi:

  | Kartica               | Računalo | Web (admin) | Web (obični korisnik) |
  |-----------------------|:--------:|:----------:|:-------------------:|
  | Opće postavke         |    da    |     da     |         da          |
  | Modeli                |    da    |     da     |         da          |
  | Jezici                |    da    |     da     |         da          |
  | Praćenje troškova     |    da    |     da     |          —          |
  | Upiti za transformaciju |    da    |     da     |         da          |
  | Korisnici             |    —     |     da     |          —          |
  | Konfiguracija API-ja  |    da    |     da     |          —          |
  | O aplikaciji          |    da    |     da     |         da          |

<br/>

> ℹ️ **NAPOMENA**<br/>
> U web verziji, svaki korisnik ima vlastitu konfiguraciju. Postavke poput odabranog modela, jezika, općih opcija i upita za transformaciju pohranjuju se po korisniku. Promjene koje napravite ne utječu na druge korisnike.

<br/>


[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="general-settings"></a>
### Opće postavke

Koristite **Opće postavke** za upravljanje ponašanjem tipkanja, pohranjivanjem detalja izvršavanja za **Povijest** te izgledom aplikacije.

**Ponašanje**

- **Ponašanje tipke ENTER** određuje hoće li `Enter` pokrenuti zadatak ili umetnuti novi redak.
- **Automatski prijevod prilikom lijepljenja** pokreće prijevod čim zalijepite tekst.
- **Automatsko kopiranje rezultata u međuspremnik** automatski kopira uspješne rezultate.
- **Prijevod u stvarnom vremenu (dok tipkate)** prevodi dok tipkate.
- **Vrijeme čekanja (ms)** postavlja vrijeme čekanja za prijevod u stvarnom vremenu.

**Povijest**

- **Zadrži povijest izvršavanja** kontrolira hoće li svaki prevod, prepisivanje i transformacija pohraniti **ulazni i izlazni tekst** za prikaz u bočnom [**Povijest**](#history). Isključivanje ove opcije tražit će potvrdu; ako potvrdite, pohranjeni tekst povijesti uklonit će se iz baze podataka.
- **Izbriši povijest podataka** omogućuje uklanjanje pohranjenog teksta prema starosti (npr. starijeg od nekoliko mjeseci ili **svih podataka (očisti)**) pomoću **Izbriši podatke**. To utječe samo na spremljeni tekst izvršavanja za prikaz **Povijesti**; **ne** briše podatke o troškovima ili ukupno korištenje. Da biste uklonili ili smanjili **podatke o troškovima**, upotrijebite [**Postavke** > **Praćenje troškova**](#cost-tracking).

**Izgled**

- **Prikaži informacije o troškovima na radnjama** kontrolira prikaz troškova po operaciji (ako su dostupni) i ukupnih troškova na pločama za izlaz Prijevoda, Prepisivanja i Transformacije.
- **Broj decimala za troškove** mijenja prikaz decimalnih mjesta troškova.
- **Samo web:** **prikaži razmak oko aplikacije** dodaje dodatni prostor oko sučelja.
- **Obitelj fonta** mijenja font u tekstnim pločama.
- **Veličina** mijenja veličinu fonta.

<br/>

<a id="models"></a>

### Modeli

U odjeljku **Postavke** > **Modeli** odaberite koji će modeli biti prikazani na alatnoj traci.

![Jezičak postavki modela](../images/screenshots/hr/settings-models.png)

Stranica sadrži dvije liste:

- **Dostupni modeli** s lijeve strane
- **Odabrani modeli** s desne strane

Korisni elementi uključuju:

- **Pretraži modele...** za pronalaženje modela po imenu
- **Chip-ove davatelja usluge** za sužavanje liste na određeni pogon (OpenRouter, OpenAI, Ollama,...)
- **Samo besplatno** za prikazivanje samo besplatnih modela
- **Osvježi** za ponovno učitavanje liste
- **Proširi sve** i **Sažmi sve** kada sortirate po davatelju usluga

ID-ovi modela uključuju prefiks davatelja usluge (npr. `openrouter/…` nasuprot `openai/…`). Oznake poput **OpenAI (OpenRouter)** nasuprot **OpenAI (izravno)** pokazuju kako se promet usmjerava.

> ℹ️ **BILJEŠKA**<br/>
> **OpenRouter Body Builder** (`openrouter/bodybuilder`) je usmjerivački model, a ne opći chat model: njegov odgovor je JSON koji opisuje tijela zahtjeva OpenRouter API-ja (npr. niz `requests` s `model` i `messages`). Ako ga koristite za **Prevođenje**, **Preuređivanje** ili **Transformaciju**, ploča za izlaz će prikazati taj JSON umjesto gotovog teksta. Za te zadatke odaberite normalni tekstualni model. Pogledajte [stranicu modela Body Builder](https://openrouter.ai/openrouter/bodybuilder) na OpenRouteru.

Radnje:

- Za dodavanje modela kliknite **Dodaj** ili bilo gdje u zapisu.

- Za uklanjanje modela kliknite **X** pokraj njega u odjeljku **Odabrani modeli** ili **Odabrano** u zapisu u dostupnim modelima.

- Za brisanje liste kliknite **Poništi sve odabire**. Obavezni besplatni model ostat će na listi.

<br/>

> ℹ️ **BILJEŠKA**<br/>
> Ako trenutno ne želite dodavati kredite na OpenRouter, započnite omogućavanjem **Samo besplatno** i odabirom besplatnih modela (nema potrebe za kreditnom karticom). Također možete koristiti Ollamu za pokretanje modela lokalno bez bilo kojeg API ključa.

<br/>

<a id="languages"></a>
### Jezici

Koristite **Postavke** > **Jezici** za uređivanje popisa jezika koje aplikacija koristi.

- **Vršni jezici** prikvačeni su na vrh popisa jezika u opcijama **Prevođenje** i **Transformacija**.
- **Prilagođeni jezik** omogućuje vam dodavanje jezika koji nije na ugrađenom popisu.

Ako dodate prilagođeni jezik, pojavit će se u odabiračima jezika uz ugrađene opcije.

<br/>

<a id="cost-tracking"></a>
### Praćenje troškova

Koristite **Postavke** > **Praćenje troškova** za upravljanje informacijama o troškovima.

- **Ukupni trošak** prikazuje kumulativni iznos.
- **Kopiraj vrijednost** kopira ukupan iznos u međuspremnik.
- **Poništi trošak** postavlja spremljeni ukupan iznos na nulu.
- **Sinkroniziraj s korištenjem ključa API-ja** postavlja ukupan iznos na onaj izvješćen od strane vašeg OpenRouter računa (samo za OpenRouter).
- **Korištenje ključa API-ja** prikazuje detalje korištenja OpenRoutera, ako su dostupni.
- **Izbriši podatke o trošku** briše sve podatke ili samo unose starije od određenog datuma.

**Praćenje troškova:** Kada koristite modele OpenRoutera, aplikacija pokazuje stvarno korištenje i trošak na osnovi cijena koje nudi OpenRouter. Za sve ostale davatelje usluga, aplikacija procjenjuje troškove koristeći objavljene cijene OpenRoutera; ako cijena nije dostupna, procjena može biti nula.

<br/>

> ℹ️ **BILJEŠKA**<br/>
> **Svi iznosi su približni i služe samo kao orijentacija, a ne službene računi.**

<br/>

> ⚠️ **UPOZORENJE**<br/>
> Brisanje podataka ne može se poništiti. Prije brisanja uvijek napravite sigurnosnu kopiju ili izvoz podataka preko [**Povijest**](#history) ili [**Nadzorna ploča** > **Svi pozivi**](#dashboard-tabs), inače će podaci trajno biti izgubljeni. Također će biti izbrisana i svaka povezana povijest ulaza/izlaza za svaki unos poziva API-ja.

<br/>

<a id="transform-prompts"></a>
### Transformacijski prompti

Koristite **Postavke** > **Transformacijski prompti** za skupno upravljanje promptima.

Možete:

- pregledati spremljene promptove
- izbrisati promptove
- uvesti promptove iz datoteke
- izvesti promptove za sigurnosnu kopiju ili dijeljenje

<br/>

<a id="users"></a>
### Korisnici

Koristite **Korisnike** za upravljanje korisničkim računima u web verziji. Možete dodavati korisnike, ažurirati njihove podatke, resetirati lozinke i brisati račune.

<br/>

<a id="api-config"></a>
### Konfiguracija API-ja

Podržani davatelji usluga su: OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras i **Ollama** (lokalni modeli putem osnovnog URL-a). Potrebno je konfigurirati samo davatelje usluga koje koristite.

**Web aplikacija: samo administrator**

API ključevi se konfiguriraju putem sustavskih ili Docker varijabli okoline – ne unose se putem web sučelja. Na ovoj stranici vidite za koje davatelje usluga je ključ konfiguriran i možete ih isprobati klikom na **`Test`** gumb.

<br/>

> ℹ️ **BILJEŠKA**<br/>
> Za promjenu API ključa, ažurirajte varijablu okoline u konfiguraciji sustava ili Docker konfiguraciji i ponovno pokrenite poslužitelj ili spremnik.

<br/>

**Desktop aplikacija**

Koristite **Konfiguracija API-ja** za spremanje API ključeva za svakog davatelja usluge kojeg koristite. Za Ollamu, umjesto API ključa unesite **osnovni URL**.

<br/>

> 💡 **Savjet** <br/>
> Ako ne želite koristiti API ključeve niti plaćati za korištenje, možete [skinuti Ollamu](https://ollama.com) i besplatno pokretati modele (poput `translategemma:4b`) lokalno na vašem računalu. Alternativno, možete otvoriti besplatni OpenRouter račun (bez potrebe za kreditnom karticom) za korištenje njihovih besplatnih modela, ili dobiti besplatni API ključ od Cerebras, Googlea, Groqa ili Mistral AI.

<br/>

- Dodajte samo davatelje usluga koje trebate. U odjeljku **Postavke** > **Modeli**, svaki ID modela započinje imenom davatelja usluge (npr. `openrouter/openrouter/free`, `openai/gpt-4o`, `ollama/llama3`).

Da biste dodali API ključ, unesite vrijednost u tekstualno polje i kliknite **`Spremi`**. Da biste zamijenili postojeći ključ, kliknite **`Uredi`**. Da biste provjerili vrijedi li ključ, kliknite **`Test`**. Za Ollama osnovni URL, uvijek kliknite **`Test`** da biste provjerili vezu.

<br/>

> ℹ️ **BILJEŠKA**<br/>
> Trenutnu vrijednost API ključa ne možete vidjeti. Možete je samo zamijeniti koristeći gumb **`Uredi`**.
> API ključevi su šifrirani i pohranjeni u konfiguraciji.

<br/>

<a id="about"></a>

### Informacije

Kartica **Informacije** prikazuje:

- naziv aplikacije
- broj verzije
- datum izgradnje
- poveznicu na spremište projekta

<br/><br/>

<a id="common-issues"></a>
## Česti problemi

Ako nešto ne funkcionira kako treba, prvo provjerite sljedeće točke.

<br/>

<a id="the-app-will-not-translate-rewrite-or-transform-text"></a>
### Aplikacija ne prevodi, ne prepisuje niti ne transformira tekst

Provjerite sljedeće:

- odabrali ste model na alatnoj traci
- barem jedan model je naveden u [**Postavkama** > **Modeli**](#models)
- API postavke funkcioniraju ispravno

Ako koristite desktop aplikaciju:

1. Otvorite [**Postavke** > **API konfiguracija**](#api-config).
2. Provjerite jesu li spremljene barem jedna API ključ.
3. Kliknite **Test** uz davatelja usluge da potvrdite ispravnost ključa.

<br/>

<a id="the-model-list-is-empty"></a>
### Popis modela je prazan

Otvorite [**Postavke** > **Modeli**](#models) i kliknite **Osvježi**.

Po potrebi:

- pretražite model
- uključite opciju **Samo besplatni**
- dodajte jedan ili više modela u **Odabrane modele**

<br/>

<a id="the-result-is-too-slow-or-too-expensive"></a>
### Rezultat je preusporen ili prenaplaten

Isprobajte jedno ili više od sljedećeg:

- odaberite drugi model
- upotrijebite kraći unos
- isključite opciju **Trenutni prijevod (tijekom tipkanja)** u [**Postavkama** > **Opće postavke**](#general-settings)
- za jednostavne zadatke upotrijebite besplatne modele (pogledajte [Modeli](#models))

<br/>

<a id="the-interface-is-in-the-wrong-language"></a>
### Sučelje je na pogrešnom jeziku

Kliknite ikonu globusa na [alatnoj traci](#toolbar) i odaberite željeni **Jezik sučelja**.

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

- koristite isključivo **besplatne modele** (dijagrami troškova bit će prazni)
- odabrani **filtar vremena** ne obuhvaća razdoblje u kojem su obavljene pozive — pokušajte s opcijom **Sve** kako biste provjerili

Ako grafikoni i dalje ostaju prazni nakon odabira **Sve**, provjerite pojavljuju li se pozivi u [**Povijesti**](#history) ili na kartici **Svi pozivi**.

<br/>

<a id="cost-shows-not-available-or-seems-wrong"></a>
### Trošak prikazuje „nije dostupno“ ili izgleda netočno

Kada koristite modele kroz **OpenRouter**, aplikacija prikazuje vaš stvarni trošak prijavljen od strane OpenRoutera.

Za **druge davatelje usluga** (izravno OpenAI, izravno Anthropic itd.) trošak se procjenjuje na temelju cijena objavljenih od strane OpenRoutera. Ako se za određeni model ne pronađe odgovarajuća cijena, trošak će se prikazati kao **nije dostupno** i neće biti dodan na kumulativni ukupni iznos.

<br/>

<a id="total-cost-does-not-match-my-provider-bill"></a>
### Ukupni trošak ne odgovara računu moga davatelja usluga

Svi iznosi troškova u ovoj aplikaciji su **procjene za referencu**, a ne službeni računi.

Da biste približili ukupni trošak stvarnom trošku na OpenRouteru, otvorite [**Postavke** > **Praćenje troškova**](#cost-tracking) i kliknite **Sinkroniziraj s korištenjem API ključa**.

<br/>

<a id="the-history-page-is-missing-from-the-sidebar"></a>
### Stranica Povijest nedostaje u bočnoj traci

Opcija **Zadrži povijest izvršavanja** može biti isključena. Otvorite [**Postavke** > **Opće postavke**](#general-settings) i omogućite ju. Uključivanje ove opcije ne vraća prethodno izbrisane podatke iz povijesti.

<br/>

<a id="web-app-session-expired"></a>
### Web aplikacija: neočekivano preusmjeravanje na stranicu za prijavu

Vaša sesija je mogla isteći. Prijavite se ponovno. Ako se to događa često, provjerite konfiguraciju poslužitelja za postavke trajanja sesije.

<br/>

<a id="dashboard-shows-no-data-for-other-users"></a>
### Nadzorna ploča ne prikazuje podatke za druge korisnike (web)

Samo **administratori** mogu pregledavati podatke svih korisnika preko filtera **Korisnik**. Obični korisnici, po dizajnu, vide samo svoje aktivnosti.

<br/>

<a id="i-changed-a-prompt-and-lost-the-edits"></a>
### Promijenio sam upit i izgubio izmjene

Prilikom uređivanja upita, uvijek kliknite **Spremi** prije nego što kliknete **Natrag na izvršavanje**.

<br/><br/>

<a id="quick-tips"></a>
## Brzi savjeti

- Započnite s [**Prijevodom**](#translate) kako biste osigurali ispravnost postavke prije nego što prijeđete na [**Prepisi**](#rewrite) ili [**Transformiraj**](#transform).
- Koristite [**Prepisi**](#rewrite) za svakodnevna unapređenja izraza.
- Koristite [**Transformiraj**](#transform) kada vam treba ponovljiv tijek rada za određeni zadatak.
- Koristite [**Nadzornu ploču**](#dashboard) ako želite pratiti korištenje i troškove.
- Koristite [**Povijest**](#history) za pregled prijašnjih operacija i njihova puna ulazna/izlazna teksta.
- Regularno izvozite upite ako gradite knjižnicu upita koju želite sačuvati (pogledajte [Transformiraj upite](#transform-prompts)) ili ih dijelite s drugima.

<br/><br/>

<a id="disclaimer"></a>

## Odricanje odgovornosti

Nazivi proizvoda i ikone pripadaju svojim vlasnicima i koriste se isključivo radi identifikacije. Ovaj softver nije u vezi s bilo kojim od spomenutih brendova niti ih ti brendovi podržavaju.

<br/><br/>

<a id="license"></a>
## Licenca

Autorska prava © 2026. Waldemar Scudeller Jr.

[Apache licenca 2.0](LICENSE)