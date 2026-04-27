---
translation_last_updated: '2026-04-27T16:58:23.084Z'
source_file_mtime: '2026-04-27T12:20:36.569Z'
source_file_hash: 7d3ac3524f418a2236c70e5ecbf726b31677dd7b4286242d0a0f0882d64732a6
translation_language: hr
source_file_path: USER-GUIDE.md
translation_models:
  - openai/gpt-4o-mini
  - qwen/qwen3-235b-a22b-2507
---
![Transrewrt banner](../images/transrewrt_banner.png)

<a id="transrewrt-user-guide"></a>
# Korisnički vodič

<br/>

<a id="introduction"></a>
## Uvod

Transrewrt pomaže vam u radu s tekstom na tri glavna načina:

- **Prijevod** - pretvaranje teksta s jednog jezika na drugi.
- **Prepravak** - preformuliranje teksta u drugačijem stilu, npr. jasnijem, kraćem ili formalnijem.
- **Transformacija** - obrada teksta pomoću prilagođenih AI uputa koje se nazivaju upiti.

<br/>

Ovaj vodič objašnjava kako koristiti aplikaciju nakon što je instalirana i pokrenuta. Za korake instalacije pogledajte glavni **[README](README.hr.md)**.

<br/>

> ℹ️ **NAPOMENA**<br/>
> Transrewrt je dostupan kao desktop aplikacija za Windows i Linux te kao samostalna web aplikacija. Ovaj vodič se fokusira na svakodnevnu uporabu aplikacije. Ako se neka funkcija odnosi samo na jednu verziju, to je jasno označeno.

<small>**Pročitajte na drugim jezicima:** </small>
<small id="lang-list">[English (GB)](../USER-GUIDE.md) · [Português (Brasil)](./USER-GUIDE.pt-BR.md) · [العربية](./USER-GUIDE.ar.md) · [বাংলা](./USER-GUIDE.bn.md) · [Català](./USER-GUIDE.ca.md) · [中文 (中国大陆)](./USER-GUIDE.zh-CN.md) · [中文 (台灣)](./USER-GUIDE.zh-TW.md) · [Hrvatski](./USER-GUIDE.hr.md) · [Čeština](./USER-GUIDE.cs.md) · [Nederlands](./USER-GUIDE.nl.md) · [English (US)](./USER-GUIDE.en-US.md) · [Tagalog](./USER-GUIDE.tl.md) · [Français](./USER-GUIDE.fr.md) · [Deutsch](./USER-GUIDE.de.md) · [Ελληνικά](./USER-GUIDE.el.md) · [हिन्दी](./USER-GUIDE.hi.md) · [Magyar](./USER-GUIDE.hu.md) · [Italiano](./USER-GUIDE.it.md) · [日本語](./USER-GUIDE.ja.md) · [한국어](./USER-GUIDE.ko.md) · [Bahasa Melayu](./USER-GUIDE.ms.md) · [فارسی](./USER-GUIDE.fa.md) · [Polski](./USER-GUIDE.pl.md) · [Basa Jawa](./USER-GUIDE.jv.md) · [Português](./USER-GUIDE.pt.md) · [ਪੰਜਾਬੀ](./USER-GUIDE.pa.md) · [Română](./USER-GUIDE.ro.md) · [Русский](./USER-GUIDE.ru.md) · [Slovenčina](./USER-GUIDE.sk.md) · [Español](./USER-GUIDE.es.md) · [Kiswahili](./USER-GUIDE.sw.md) · [Svenska](./USER-GUIDE.sv.md) · [తెలుగు](./USER-GUIDE.te.md) · [ไทย](./USER-GUIDE.th.md) · [Türkçe](./USER-GUIDE.tr.md) · [Українська](./USER-GUIDE.uk.md) · [Tiếng Việt](./USER-GUIDE.vi.md)</small>

<small>

> **Napomena o prijevodima sučelja i dokumentacije:** Svi jezici sučelja osim izvornog engleskog (UK)
> prevedeni su pomoću AI modela; izrazi mogu biti neprecizni ili sadržavati pogreške.

</small>

<br/>

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Sadržaj**

- [Prije nego što započnete](#before-you-start)
  - [Kako dobiti besplatan OpenRouter API ključ (desktop aplikacija)](#how-to-get-a-free-openrouter-api-key-desktop-app)
- [Početak](#getting-started)
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
  - [Pokrenite postojeći upit](#run-an-existing-prompt)
  - [Ako još nemate upita](#if-you-have-no-prompts-yet)
  - [Brzo kreirajte upit](#create-a-prompt-quickly)
  - [Uredite upit](#edit-a-prompt)
  - [Ispitajte upit prije korištenja](#test-a-prompt-before-using-it)
- [Nadzorna ploča](#dashboard)
  - [Filtrirajte podatke](#filter-the-data)
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
  - [Transformacijski upiti](#transform-prompts)
  - [Korisnici](#users)
  - [API konfiguracija](#api-config)
  - [O programu](#about)
- [Uobičajeni problemi](#common-issues)
  - [Aplikacija ne prevodi, ne preuređuje niti transformira tekst](#the-app-will-not-translate-rewrite-or-transform-text)
  - [Popis modela je prazan](#the-model-list-is-empty)
  - [Rezultat je preusporen ili prekup](#the-result-is-too-slow-or-too-expensive)
  - [Sučelje je na pogrešnom jeziku](#the-interface-is-in-the-wrong-language)
  - [Tekst je premalen ili teško čitljiv](#the-text-is-too-small-or-hard-to-read)
  - [Grafovi na nadzornoj ploči su prazni](#dashboard-charts-are-empty)
  - [Trošak prikazuje "nije dostupan" ili izgleda netočno](#cost-shows-not-available-or-seems-wrong)
  - [Ukupni trošak se ne podudara s računom pružatelja usluge](#total-cost-does-not-match-my-provider-bill)
  - [Stranica Povijest nedostaje u bočnoj traci](#the-history-page-is-missing-from-the-sidebar)
  - [Web aplikacija: neočekivano preusmjeravanje na stranicu za prijavu](#web-app-redirected-to-the-login-page-unexpectedly)
  - [Web administrator: zaboravili ste ili izgubili lozinku](#web-admin-forgot-or-lost-a-password)
  - [Nadzorna ploča ne prikazuje podatke za druge korisnike (web)](#dashboard-shows-no-data-for-other-users-web)
  - [Promijenili ste upit i izgubili ste uređivanja](#i-changed-a-prompt-and-lost-the-edits)
- [Brzi savjeti](#quick-tips)
- [Ograničenje odgovornosti](#disclaimer)
- [Licenca](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="before-you-start"></a>
## Prije početka

Za korištenje Transrewrt-a potreban vam je pristup barem jednom AI davatelju. Podržani davatelji su: [OpenRouter](https://openrouter.ai) (koji nudi mnoge modele), OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras i [Ollama](https://ollama.com) za lokalne modele.

Ne morate odabrati plaćeni model kako biste započeli. Čim dodate svoj OpenRouter API ključ, aplikacija automatski omogućuje ugrađenu **besplatnu** OpenRouter opciju. To vam omogućuje da odmah započnete s prijevodom, prepravkom i transformacijom teksta. Alternativno, možete dobiti besplatni API ključ od Cerebras-a, Google-a, Groq-a ili Mistral AI-a.

Jednostavnim rječima:

- **Model** je AI motor koji obavlja posao. Modeli su navedeni s prefiksom **davatelja** (npr. `openrouter/…`, `openai/…`, `ollama/…`).
- **API ključ** (ili za Ollama, **osnovni URL**) je način na koji aplikacija pristupa tom davatelju.

Ako koristite **desktop aplikaciju**, dodajte ključeve u [**Postavke** > **API konfiguracija**](#api-config) za svakog davatelja usluga kojeg koristite. Ako koristite samo OpenRouter, pogledajte [Kako dobiti API ključ](#how-to-get-an-api-key-desktop-app) u nastavku. Ako ne želite koristiti API ključ, možete instalirati Ollamu (s [ollama.com](https://ollama.com})) i koristiti lokalne modele umjesto toga, poput `translategemma:4b`.

Ako koristite **web verziju**, vlasnik poslužitelja konfigurira davatelje usluga putem varijabli okruženja, pa ne možete izravno unijeti API ključeve u aplikaciji.

<br/>

<a id="how-to-get-an-api-key-desktop-app"></a>
### Kako dobiti besplatni OpenRouter API ključ (desktop aplikacija)

Ako koristite desktop aplikaciju, slijedite ove korake:

1. Otvorite [OpenRouter](https://openrouter.ai) u svom web pregledniku.
2. Stvorite račun ili se prijavite.
3. Otvorite stranicu [Ključevi](https://openrouter.ai/keys).
4. Kliknite gumb za stvaranje novog API ključa.
5. Dodijelite ključu ime kako biste ga mogli prepoznati kasnije.
6. Kopirajte novi API ključ.
7. Vratite se u Transrewrt i otvorite **Postavke** > **API konfiguracija**.
8. Zalijepite ključ u polje **OpenRouter API ključ** (ispod **Postavke** > **API konfiguracija**).
9. Kliknite **Testiraj OpenRouter ključ** kako biste provjerili radi li ispravno.

<br/><br/>

<a id="getting-started"></a>
## Početak rada

Ako je ovo prvi put da koristite Transrewrt, slijedite ovaj redoslijed:

1. Pokrenite aplikaciju.
2. Ako je potrebno, odaberite svoj **jezik sučelja** s ikone zemaljskog globusa.
3. Ako koristite **desktop aplikaciju**, otvorite [**Postavke** > **API konfiguracija**](#api-config), dodajte API ključ za barem jednog pružatelja (npr. OpenRouter) i kliknite **Testiraj** kako biste potvrdili da radi.
4. Otvorite [**Postavke** > **Modeli**](#models) i dodajte jedan ili više modela u **Odabrane modele**.
5. Otvorite [**Postavke** > **Jezici**](#languages) i odaberite svoje **Najčešće korištene jezike** ako želite da se vaši najčešće korišteni jezici prikazuju prvi.
6. Idite na **Prijevod** i pokrenite jednostavan prijevod kako biste potvrdili da sve radi.
7. Kada to uspije, isprobajte **Preuređivanje**, a zatim i **Transformaciju**.

Ovaj redoslijed je važan. Sprječava najčešći problem kod prvog korištenja: pokušaj pokretanja zadatka prije nego što aplikacija ima radnu API vezu ili odabrani model.

<br/><br/>

<a id="main-parts-of-the-window"></a>
## Glavni dijelovi prozora

Aplikacija je podijeljena u tri glavna područja:

- **Bočni trak** s lijeve strane.
- **Alatna traka** na vrhu.
- **Radno područje** u sredini.

<br/>

<a id="sidebar"></a>
### Bočni trak

Koristite bočni trak za kretanje kroz aplikaciju. Bočni trak možete sažeti za više prostora klikom na ikonu pored logotipa aplikacije.

<br/>

<table>
  <tr>
    <td valign="top">
       <img src="../images/screenshots/hr/sidebar.png" alt="Application Sidebar" style="max-width: 100%; border: 1px solid #ddd; border-radius: 4px;">
    </td>
    <td valign="top">
      <br/><br/>
      <ul>
        <li><strong>Prevedi</strong> otvara radno područje za prijevod.</li><br/>
        <li><strong>Prepravak</strong> otvara radno područje za prepisivanje.</li><br/>
        <li><strong>Transformacija</strong> otvara radno područje za prilagođeni upit.</li><br/>
        <li><strong>Nadzorna ploča</strong> prikazuje informacije o korištenju i troškovima.</li><br/>
        <li><strong>Postavke</strong> otvara ploču postavki.</li><br/>
        <li><strong>Povijest</strong> prikazuje povijest korištenja s unosom i izlaznim tekstom</li><br/>
        <li><strong>Korisnik</strong> prikazuje korisničko ime prijavljenog korisnika (samo za web verziju).</li>
      </ul>
    </td>
  </tr>
</table>

<br/>

<a id="toolbar"></a>
### Alatna traka

Alatna traka se malo razlikuje ovisno o tome gdje se nalazite u aplikaciji.

- S lijeve strane prikazuje naziv trenutne stranice.
- S desne strane prikazuje **odabir modela** i upravljanje **Jezikom sučelja**.

Kroz **odabir modela** možete odabrati koji AI motor ćete koristiti za trenutni zadatak.

![Model selector](../images/screenshots/hr/model-selector.png)

Neke besplatne modele možda neće uvijek biti dostupne – ponekad su offline ili imaju ograničenje korištenja. Ako se to dogodi, aplikacija će automatski ukloniti taj model s vašeg popisa dostupnih. Da biste kontrolirali koji se modeli prikazuju, idite na [**Postavke** > **Modeli**](#models) i uredite svoj popis modela. 
Također možete izravno otvoriti postavke modela klikom na ikonu davatelja s lijeve strane naziva modela na alatnoj traci.

<br/>

**Ikona zemaljskog globusa + kôd jezika** mijenja jezik sučelja aplikacije, kao što su izbornici i gumbi. Ona **ne** mijenja jezike prijevoda koji se koriste u funkciji **Prevedi**.

![Interface language selector](../images/screenshots/hr/language-selector.png)

<br/>

<a id="input-and-output-panels"></a>
### Ploče za unos i izlaz

Većina radnih površina koristi lijevu ploču za **Unos** i desnu ploču za **Izlaz**.

Svaka ploča prikazuje i:

| **Unos**                                                          | **Izlaz**                                                                                                                  |
|--------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------|
| - Broj znakova <br/>- Broj riječi <br/>- Broj odlomaka   <br/> | - Koliko je trajao zadatak<br/>- **TPS** (žetoni po sekundi)<br/>- Broj znakova, riječi i odlomaka<br/>- Korišteni model |

Ako se pitate o tehničkim izrazima:

- **Žeton** znači mali dio teksta. Možete to shvatiti kao dio riječi ili kratku riječ.
- **TPS** znači koliko tih dijelova teksta model obradi svake sekunde.

<br/>

Također možete pratiti trošak svake operacije (ako je dostupan) i ukupni trošak, uključivanjem opcije `Show cost information on the actions` u [**Postavke** > **Opće postavke**](#general-settings).

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="translate"></a>
## Prevedi

Koristite funkciju **Prevedi** kada želite pretvoriti tekst s jednog jezika na drugi.

![Translate workspace](../images/screenshots/hr/translate.png)

<br/>

<a id="translate-text"></a>
### Prijevod teksta

1. Otvorite **Prijevod**.
2. Odaberite jezik u polju **Iz**.
3. Odaberite jezik u polju **U**.
4. Odaberite model u alatnoj traci.
5. Utipkajte ili zalijepite tekst u polje **Ulaz**.
6. Kliknite **Prijevedi**.
7. Pročitajte rezultat u polju **Izlaz**.
8. Koristite gumb za kopiranje ako želite kopirati rezultat.

<br/>

<a id="language-selection"></a>
### Odabir jezika

- **S** može biti određeni jezik ili **Otkrij jezik**.
- **Na** je jezik u koji želite prevesti rezultat.

Vaši odabrani **najčešći jezici** prikazat će se na vrhu popisa. Možete ih postaviti u [**Postavke** > **Jezici**](#languages).

<br/>

<a id="helpful-translation-settings"></a>
### Korisne postavke prijevoda

U [**Postavke** > **Opće postavke**](#general-settings) možete promijeniti kako se ponaša prijevod:

- **Automatski prijevod pri lijepljenju** pokreće prijevod čim zalijepite tekst.
- **Automatsko kopiranje rezultata u međuspremnik** automatski kopira rezultat nakon uspješnog izvršavanja.
- **Prijevod u stvarnom vremenu (tijekom tipkanja)** pokreće prijevode dok tipkate.
- **Vrijeme čekanja (ms)** kontrolira koliko dugo aplikacija čeka prije pokretanja prijevoda u stvarnom vremenu.
- **Enter** kontrolira što se događa kada pritisnete `Enter`:

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="rewrite"></a>
## Prepravak

Koristite **Prepravak** kada želite poboljšati formulaciju bez promjene glavne poruke.

![Rewrite workspace](../images/screenshots/hr/rewrite.png)

Ovo je korisno za:

- ispravljanje pravopisa i gramatike (**Provjera pravopisa i gramatike**)
- povećanje jasnoće teksta (**Poboljšaj jasnoću**)
- više različitih preformulacija u jednom pokretanju (**Alternativne verzije**)
- činjenje teksta formalnijim ili neformalnijim (**Formalno** / **Neformalno**)
- skraćivanje ili proširivanje teksta (**Skraćivanje** / **Proširivanje**)
- činjenje teksta tehničkijim (**Učini tehničkim**)

<br/>

> 💡 **SAVJET**<br/>
> Kada koristite način "**Provjeri pravopis i gramatiku**", u izlaznom panelu pojavi se prekidač **Prikaži promjene** (kraj **Kopiraj**).
> Uključite ili isključite ga kako biste prikazali ili sakrili specifične ispravke primijenjene na vaš tekst.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="transform"></a>
## Transformacija

Koristite **Transformaciju** kada želite da AI slijedi prilagođeni skup uputa.

![Transform workspace](../images/screenshots/hr/transform.png)

Ovo je najfleksibilniji dio aplikacije. Možete ga koristiti za zadatke poput:

- sažimanje bilješki
- pretvaranje sirovog teksta u uređenu e-poštu
- izdvajanje ključnih točaka
- pretvaranje teksta u određeni format
- bilo koja druga prilagođena aktivnost s ulaznim tekstom

<br/>

<a id="run-an-existing-prompt"></a>
### Pokretanje postojećeg upita

1. Otvorite **Transformaciju**.
2. Odaberite upit s popisa upita.
3. Ako se pojavi okvir **Meta jezik**, odaberite jezik ako želite.
4. Upišite ili zalijepite tekst u **Ulaz**.
5. Kliknite **Transformiraj**.
6. Pročitajte rezultat u **Izlazu**.

<br/>

<a id="if-you-have-no-prompts-yet"></a>
### Ako još nemate upita

Ako je vaš popis upita prazan, kliknite **Učitaj uzorke upita** u radnom prostoru Transformacije. Ista se kontrola uvijek nalazi u [**Postavke** > **Upiti za transformaciju**](#transform-prompts) na retku za izvoz/uvoz. Oba dodaju ugrađene primjere kako biste mogli brzo započeti.

<br/>

> ℹ️ **NAPOMENA**<br/>
> Uzorci upita dostavljaju se na engleskom jeziku. Nakon što ih učitate, možete urediti upit i koristiti **Prevedi upit** da biste ga preveli na svoj jezik.

<br/>

<a id="create-a-prompt-quickly"></a>
### Brzo stvaranje upita

Najbrži način stvaranja upita je:

1. Kliknite **Novi upit**.
2. Kliknite **Generiraj upit**.
3. Opisite što želite da upit učini.
4. Odaberite model.
5. Dopustite aplikaciji da vam stvori nacrt.
6. Pregledajte nacrt i kliknite **Spremi**.

![Generate prompt](../images/screenshots/hr/transform-generate.png)

<br/>

<a id="edit-a-prompt"></a>
### Uredi upit

Kada stvorite ili uredite upit, uređivač se pojavljuje s lijeve strane, a područje za testiranje s desne strane.

![Transform prompt editor](../images/screenshots/hr/transform-prompt-edit.png)

Glavna polja su:

- **Naziv upita**: naziv koji se prikazuje na popisu upita.
- **Upute za upit (neobavezno)**: kratki savjet prikazan korisniku tijekom pokretanja upita.
- **Uloga modela**: opća uloga dodijeljena umjetnoj inteligenciji, npr. 'Vi ste korisni pomoćnik.'
- **Upute modela (jedna po retku)**: specifična pravila koja želite da AI slijedi.
- **Opis izlaza**: kratka riječ koja opisuje rezultat, npr. 'sažetak' ili 'prepravak'.
- **Temperatura (0,0 → 1,0)**: kako će se model ponašati; pogledajte niže.
- **Zatraži meta jezik**: dodaje odabir meta jezika kada se pokrene upit.

Ako vam je tehnički izraz **Temperatura** nov, razmislite o tome ovako:

- **Niža** temperatura daje stabilnije, predvidljivije rezultate.
- **Viša** temperatura daje veću raznolikost i kreativnost.

Također možete koristiti:

- **`Generate prompt`** za stvaranje novog prijedloga iz jednostavnog opisa
- **`Improve prompt`** za poboljšanje postojećeg upita
- **`Translate prompt`** za prijevod polja upita

<br/>

> ⚠️ **UPOZORENJE**<br/>
> Kliknite **`Save`** prije nego što kliknete **`Back to Run`**. Ako se vratite unatrag bez spremanja, izgubit ćete promjene.

<br/>

<a id="test-a-prompt-before-using-it"></a>
### Testirajte upit prije korištenja

Testna ploča s desne strane omogućuje vam isprobavanje upita s primjerom teksta prije korištenja u svakodnevnom radu.

Ovo je korisno kada:

- stvarate novi upit
- uspoređujete dvije verzije upita
- želite provjeriti ton, duljinu ili format izlaza

<br/>

> ℹ️ **NAPOMENA**<br/>
> Možete izvesti i uvesti spremljene upite u odjeljku [**Postavke** > **Upiti za transformaciju**](#transform-prompts).

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="dashboard"></a>
## Nadzorna ploča

Koristite **Nadzornu ploču** da biste vidjeli koliko koristite aplikaciju i koliko vas to košta (za plaćene modele).

![Dashboard summary](../images/screenshots/hr/dashboard-summary.png)

<br/>

> ℹ️ **NAPOMENA**<br/>
> Ako koristite samo **besplatne** modele, iznosi **troškova** mogu biti nula, a sažeci usmjereni na trošak mogu izgledati prazno. Na kartici **Sažetak**, **Korištenje tokom vremena** i **Korištenje po modelu** i dalje prikazuju **broj poziva** (prijevod, prepravak i transformacija) kada imate aktivnosti u odabranom razdoblju.

<br/>

<a id="filter-the-data"></a>
### Filtrirajte podatke

Koristite gumbe za filtriranje na vrhu za promjenu vremenskog raspona.

![Dashboard filters](../images/screenshots/hr/dashboard-filter.png)

<br/>

> ℹ️ **NAPOMENA**<br/>
> Filtar **Korisnik** vidljiv je samo administratorima u web verziji. Redovni korisnici neće vidjeti ovaj filtar, a on nije dostupan ni u desktop aplikaciji.

<br/>

<a id="dashboard-tabs"></a>
### Kartice nadzorne ploče

- **Sažetak** daje pregled korištenja i troškova. Uključuje **Korištenje tijekom vremena** (naslagani kumulativni **broj poziva** po danu za prijevod, prepravak i transformaciju) i **Korištenje po modelu** (ukupan **broj poziva po modelu**, uključujući transformaciju).
- **Po korištenju** razdvaja aktivnosti po jeziku prijevoda, načinu prepravke i upitu za transformaciju.
- **Po modelu** prikazuje koji ste modele koristili i koliko su koštali.
- **Po danu** prikazuje dnevne ukupne iznose.
- **Svi pozivi** prikazuje cijelu povijest poziva i omogućuje izvoz.

<br/>

<a id="export-data"></a>
### Izvoz podataka

Tablice na nadzornoj ploči mogu izvesti podatke u formatima:

- **JSON**
- **CSV**
- **XLSX**

Ovo je korisno ako želite pregledati aktivnost izvan aplikacije ili podijeliti izvješće.

<br/>

<a id="delete-stored-records-for-a-model"></a>
### Izbriši pohranjene zapise za model

U **Po modelu** ili **Svi pozivi**, možete ukloniti pohranjene zapise za model klikom na ikonu „kante za smeće“.

> ⚠️ **UPOZORENJE**<br/>
> Brisanje pohranjenih zapisa ne može se poništiti. Koristite ovo samo ako ste sigurni da više ne trebate tu povijest.

Da biste izbrisali sve podatke ili uklonili zapise na temelju njihove starosti, idite na [**Postavke** > **Praćenje troškova**](#cost-tracking). Tamo ćete pronaći mogućnosti za brisanje svih pohranjenih podataka ili samo podataka starijih od određenog datuma.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="history"></a>
## Povijest

Kliknite na **Povijest** da biste vidjeli povijest svojih radnji unutar **Transrewrt**-a, uključujući unos i izlaz svake operacije.

![History page](../images/screenshots/hr/history.png)

<br/>

<a id="filter-the-history"></a>
### Filtriraj podatke

**Povijest** koristi iste filtre kao i stranica **Nadzorna ploča**. Koristite ih za odabir vremenskog raspona.

![Dashboard filters](../images/screenshots/hr/dashboard-filter.png)

<br/>

> ℹ️ **NAPOMENA**<br/>
> Filtar **Korisnik** vidljiv je samo administratorima u web verziji. Redovni korisnici neće vidjeti ovaj filtar, a on nije dostupan ni u desktop aplikaciji.

<br/>

<a id="export-history-data"></a>
### Izvoz podataka povijesti

Stranica povijesti može izvesti filtrirane podatke u:

- **JSON**
- **CSV**
- **XLSX**

Ovo je korisno ako želite pregledati aktivnost izvan aplikacije ili podijeliti izvješće.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="settings"></a>
## Postavke

Otvorite **Postavke** s bočnog izbornika da prilagodite ponašanje aplikacije.

Dostupni jezičci ovise o platformi i vašoj ulozi:

| Kartica               | Računalo | Web (administrator) | Web (obični korisnik) |
  |-------------------|:-------:|:-----------:|:------------------:|
  | Opće postavke  |   da   |     da     |        da         |
  | Modeli            |   da   |     da     |        da         |
  | Jezici         |   da   |     da     |        da         |
  | Praćenje troškova     |   da   |     da     |         -          |
  | Upiti za transformaciju |   da   |     da     |        da         |
  | Korisnici             |    -    |     da     |         -          |
  | API konfiguracija        |   da   |     da     |         -          |
  | O programu             |   da   |     da     |        da         |

<br/>

> ℹ️ **NAPOMENA**<br/>
> U web verziji svaki korisnik ima vlastitu konfiguraciju. Postavke poput odabranih modela, jezika, općih opcija i upita za transformaciju pohranjuju se po korisniku. Promjene koje napravite ne utječu na druge korisnike.

<br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="general-settings"></a>
### Opće postavke

Koristite **Opće postavke** za upravljanje ponašanjem tipkanja, pohranjivanjem pojedinosti izvršenja za **Povijest** i izgledom aplikacije.

**Ponašanje**

- **Ponašanje za ENTER** određuje hoće li `Enter` pokrenuti zadatak ili umetnuti novi red.
- **Automatski prijevod pri umetanju** pokreće prijevod čim umetnete tekst.
- **Automatsko kopiranje rezultata u međuspremnik** automatski kopira uspješne rezultate.
- **Trenutačni prijevod (tijekom tipkanja)** prijevodi dok tipkate.
- **Vrijeme čekanja (ms)** postavlja vrijeme čekanja za trenutačni prijevod.

**Povijest**

- **Zadrži povijest izvršenja** kontrolira pohranjuje li se svaki prijevod, prepravak i transformacija **ulazni i izlazni tekst** za prikaz u bočnoj traci [**Povijest**](#history). Isključivanje traži potvrdu; ako potvrdite, pohranjeni tekst povijesti uklanja se iz baze podataka.
- **Izbriši podatke povijesti** omogućuje uklanjanje pohranjenog teksta prema dobi (npr. starije od nekoliko mjeseci ili **svi podaci (obriši)**) korištenjem **Izbriši podatke**. To utječe samo na spremljeni tekst izvršenja za prikaz **Povijest**; **ne** briše ukupne podatke o troškovima ili korištenju. Da biste uklonili ili skratili podatke o **trošku**, koristite [**Postavke** > **Praćenje troškova**](#cost-tracking).

**Izgled**

- **Prikaži informacije o troškovima na akcijama** upravlja prikazom troškova po operaciji (ako je dostupno) i ukupnih troškova na pločama za izlaz Prijevoda, Prepisivanja i Pretvorbe.
- **Broj decimalnih mjesta za troškove** mijenja način prikaza decimalnih brojeva troškova.
- **Samo za web:** **prikaži marginu oko aplikacije** dodaje dodatni prostor oko sučelja.
- **Obitelj fonta** mijenja font u tekstnim pločama.
- **Veličina** mijenja veličinu fonta.

**Sigurnosna kopija konfiguracije**

- **Uključi podatke o korištenju u sigurnosnu kopiju** – kada je omogućeno, ZIP također sadrži povijest izvršavanja i podatke o pozivima API-ja. 
- **Sigurnosna kopija konfiguracije** – stvara jedan ZIP (`transrewrt-config-backup-YYYY-MM-DD_HHMMSS.zip` u UTC-u po zadanom) s `config.json`, `state.json`, opcionalnim ključem za šifriranje, korisnicima, postavkama, prilagođenim upitima i podacima o korištenju ako ste se prijavili. Nakon uspješne sigurnosne kopije, potvrda prikazuje naziv spremljene datoteke.
- **Vraćanje iz sigurnosne kopije** – otvara najprije **dijalog za potvrdu**. Odaberite ZIP sigurnosne kopije unutar dijaloga (**Pregledaj** / odabir datoteke ili povlačenje i ispustanje gdje je podržano), a zatim pregledajte opcije:
  - **Vrati podatke o korištenju** – uvozi korištenje/povijest iz ZIP-a kada je sigurnosna kopija napravljena s uključenim korištenjem; ostavite isključeno ako želite samo postavke i upite.
  - **Obriši stare podatke o korištenju prije vraćanja** – uklanja postojeće korištenje/povijest na ovoj instalaciji prije primjene sigurnosne kopije (neobavezno; koristite kada želite čisto zamijeniti).

Sigurnosne kopije stvorene u web ili desktop verziji mogu se vratiti u drugoj verziji. Kada vratite sigurnosnu kopiju stvorenu na desktopu u web verziji, podaci će se vratiti administratoru.

<br/>

<a id="models"></a>
### Modeli

Koristite **Postavke** > **Modeli** za odabir modela koji se pojavljuju na alatnoj traci.

![Settings Models tab](../images/screenshots/hr/settings-models.png)

Stranica ima dvije liste:

- **Dostupni modeli** s lijeve strane
- **Odabrani modeli** s desne strane

Korisni upravljački elementi uključuju:

- **Pretraži modele...** kako biste pronašli model po imenu
- **Provider** oznake za sužavanje popisa na jedan motor (OpenRouter, OpenAI, Ollama, …)
- **Samo besplatni** za prikaz samo besplatnih modela
- **Osvježi** za ponovno učitavanje popisa
- **Proširi sve** i **Sažmi sve** kada sortirate po davatelju usluge

ID-ovi modela uključuju prefiks davatelja (na primjer `openrouter/…` nasuprot `openai/…`). Oznake poput **OpenAI (OpenRouter)** nasuprot **OpenAI (izravno)** pokazuju kako se promet usmjerava.

> ℹ️ **NAPOMENA**<br/>
> **OpenRouter Body Builder** (`openrouter/bodybuilder`) je model usmjerivača, a ne opći model za razgovor: njegov odgovor je JSON koji opisuje tijela zahtjeva za OpenRouter API-je (na primjer `requests` niz s `model` i `messages`). Ako ga koristite za **Prevedi**, **Prepravak** ili **Transformaciju**, ploča za izlaz prikazat će taj JSON umjesto gotovog teksta. Odaberite normalan tekstualni model za te zadatke. Pogledajte [stranicu modela Body Builder](https://openrouter.ai/openrouter/bodybuilder) na OpenRouteru.

Radnje:

- Da biste dodali model, kliknite **Dodaj** ili bilo gdje unutar unosa.

- Da biste uklonili model, kliknite **X** pokraj njega u **Odabranim modelima** ili **Odabrano** na unosu u Dostupnim modelima.

- Da biste očistili popis, kliknite **Poništi odabir**. Potreban besplatni model ostat će u popisu.

<br/>

> ℹ️ **NAPOMENA**<br/>
> Ako ne želite odmah dodavati kredite na OpenRouter, započnite omogućavanjem opcije **Samo besplatni** i odabirom besplatnih modela (nije potrebna kreditna kartica). Također možete koristiti Ollamu za pokretanje modela lokalno bez ikakvog API ključa.

<br/>

<a id="languages"></a>
### Jezici

Koristite **Postavke** > **Jezici** za uređivanje popisa jezika koje aplikacija koristi.

- **Vrhunski jezici** pričvršćeni su na vrh popisa jezika u funkcijama **Prevedi** i **Transformiraj**.
- **Prilagođeni jezik** omogućuje vam dodavanje jezika koji nije na ugrađenom popisu.

Ako dodate prilagođeni jezik, pojavit će se u odabiračima jezika uz ugrađene opcije.

<br/>

<a id="cost-tracking"></a>
### Praćenje troškova

Koristite **Postavke** > **Praćenje troškova** za upravljanje informacijama o troškovima.

- **Ukupni trošak** prikazuje tekući zbroj.
- **Kopiraj vrijednost** kopira ukupno u međuspremnik.
- **Poništi trošak** poništava spremljeni zbroj na nulu.
- **Sinkroniziraj s korištenjem API ključa** postavlja ukupno na vrijednost prikazanu u vašem OpenRouter računu (samo za OpenRouter).
- **Korištenje API ključa** prikazuje detalje korištenja OpenRoutera, ako su dostupni.
- **Izbriši podatke o troškovima** uklanja sve podatke ili samo unose starije od odabranog datuma.

**Praćenje troškova:** Kada koristite modele OpenRoutera, aplikacija prikazuje vaše stvarno korištenje i troškove na temelju informacija o cijenama s OpenRoutera. Za sve ostale davatelje usluga aplikacija procjenjuje troškove koristeći cijene objavljene od strane OpenRoutera; ako cijena nije dostupna, procjena može biti nula.

<br/>

> ℹ️ **NAPOMENA**<br/>
>  **Svi iznosi troškova su procjene isključivo za vašu referencu, a ne službeni računi.**

<br/>

> ⚠️ **UPOZORENJE**<br/>
> Brisanje podataka ne može se poništiti. Prije brisanja, obavezno napravite sigurnosnu kopiju svojih podataka ili ih izvezite putem [**Povijesti**](#history)
> ili [**Nadzorne ploče** > **Svi pozivi**](#dashboard-tabs), inače će trajno biti izgubljeni.
> Obrisat će se i sva povijest unosa/izlaza povezana s pojedinim unosom poziva API-ja.

<br/>

<a id="transform-prompts"></a>
### Upiti za transformaciju

Koristite **Postavke** > **Upiti za transformaciju** za skupno upravljanje upitima.

Možete:

- pregledajte svoje spremljene upite
- izbrišite upite
- uvozite upite iz datoteke
- izvozite upite za sigurnosnu kopiju ili dijeljenje
- učitajte primjere upita na popis upita

<br/>

<a id="users"></a>
### Korisnici

Koristite **Korisnike** za upravljanje korisničkim računima u web verziji. Možete dodavati korisnike, ažurirati njihove podatke, poništiti lozinke i brisati račune.

<br/>

<a id="api-config"></a>
### API konfiguracija

Podržani davatelji su: OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras i **Ollama** (lokalni modeli putem osnovnog URL-a). Potrebno je konfigurirati samo davatelje koje koristite.

**Web aplikacija: samo administrator**

API ključevi se konfiguriraju putem sustavskih ili Docker okolišnih varijabli – ne unose se u web sučelju. Ova stranica prikazuje za koje davatelje je ključ konfiguriran i omogućuje vam testiranje svakog pojedinačno klikom na gumb **`Test`**.

<br/>

> ℹ️ **NAPOMENA**<br/>
> Da biste promijenili API ključ, ažurirajte okolišnu varijablu u svojoj sustavskoj ili Docker konfiguraciji i ponovno pokrenite poslužitelj ili spremnik.

> ℹ️ **NAPOMENA**<br/>
> **Sigurnosne kopije konfiguracije** (pogledajte [**Opće postavke** → Sigurnosna kopija konfiguracije](#general-settings)) mogu ugraditi **rješene** ključeve davatelja unutar datoteke `config.json` u ZIP arhivi. Vraćanje te ZIP arhive **neće** kopirati te ključeve natrag u konfiguracijsku datoteku poslužitelja – aktivni ključevi i dalje dolaze iz okoliša i postojećeg stanja datoteke kao što je tu opisano.

<br/>

**Desktop aplikacija**

Koristite **API konfiguraciju** za pohranu API ključeva za svakog davatelja kojeg koristite. Za Ollamu, umjesto API ključa unesite **osnovni URL**.

<br/>

> 💡 **Savjet** <br/>
> Ako ne želite koristiti API ključeve niti plaćati za korištenje, možete [preuzeti Ollamu](https://ollama.com) i besplatno pokretati modele (kao što je `translategemma:4b`) lokalno na svom računalu. Alternativno, možete stvoriti besplatni OpenRouter račun (bez potrebe za kreditnom karticom) kako biste koristili njihove besplatne modele, ili dobiti besplatni API ključ od Cerebras, Googlea, Groqa ili Mistral AI.

<br/>

- Dodajte samo davatelje koje trebate. U **Postavkama** > **Modeli**, svaki ID modela započinje s davateljem (npr. `openrouter/openrouter/free`, `openai/gpt-4o`, `ollama/llama3`).

Da biste dodali API ključ, unesite vrijednost u tekstualno polje i kliknite **`Save`**. Da biste zamijenili postojeći ključ, kliknite **`Edit`**. Da biste provjerili funkcionira li ključ, kliknite **`Test`**. Za Ollama osnovni URL, uvijek kliknite **`Test`** kako biste provjerili vezu.

<br/>

> ℹ️ **NAPOMENA**<br/>
> Ne možete vidjeti trenutačnu vrijednost API ključa. Možete ga samo zamijeniti pomoću gumba **`Edit`**.
> API ključevi se pohranjuju šifrirano u konfiguraciji.

<br/>

<a id="about"></a>
### O programu

Kartica **O programu** prikazuje:

- naziv aplikacije
- broj verzije
- datum izrade
- poveznicu na repozitorij projekta

<br/><br/>

<a id="common-issues"></a>
## Uobičajeni problemi

Ako nešto ne radi kako je očekivano, prvo provjerite sljedeće točke.

<br/>

<a id="the-app-will-not-translate-rewrite-or-transform-text"></a>
### Aplikacija ne prenosi, ne prepravlja niti ne transformira tekst

Provjerite sljedeće:

- odabrali ste model na alatnoj traci
- barem jedan model je naveden u [**Postavke** > **Modeli**](#models)
- vaša API postavka radi ispravno

Ako koristite desktop aplikaciju:

1. Otvorite [**Postavke** > **API konfiguracija**](#api-config).
2. Provjerite je li spremljen barem jedan API ključ.
3. Kliknite **Testiraj** pokraj davatelja kako biste potvrdili da ključ ispravno radi.

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
### Rezultat je preusporen ili prekup

Isprobajte jednu ili više sljedećih opcija:

- odaberite drugi model
- koristite kraći unos
- isključite opciju **Prijevod u stvarnom vremenu (tijekom tipkanja)** u [**Postavke** > **Opće postavke**](#general-settings)
- koristite besplatne modele za jednostavne zadatke (pogledajte [Modeli](#models))

<br/>

<a id="the-interface-is-in-the-wrong-language"></a>
### Sučelje je na pogrešnom jeziku

Kliknite ikonu zemaljskog globusa na [alatnoj traci](#toolbar) i odaberite željeni **Jezik sučelja**.

<br/>

<a id="the-text-is-too-small-or-hard-to-read"></a>
### Tekst je premaši ili teško čitljiv

Otvorite [**Postavke** > **Opće postavke**](#general-settings) i promijenite:

- **Obitelj fonta**
- **Veličina**

<br/>

<a id="dashboard-charts-are-empty"></a>
### Grafikoni na nadzornoj ploči su prazni

Ovo je normalno ako:

- koristite samo **besplatne modele** i gledate **troškove** (mogu biti nula); **količinske** grafikone poziva na **Sažetak** još uvijek trebaju podatke iz odabranog razdoblja
- odabrani **filtar vremena** ne pokriva razdoblje kada su pozivi napravljeni - pokušajte s **Svima** da provjerite

Ako su grafikoni i dalje prazni nakon odabira **Sve**, provjerite pojavljuju li se pozivi na stranici [**Povijest**](#history) ili u kartici **Svi pozivi**.

<br/>

<a id="cost-shows-not-available-or-seems-wrong"></a>
### Trošak prikazuje „nije dostupan“ ili izgleda netočno

Kada koristite modele putem **OpenRoutera**, aplikacija prikazuje vaše stvarne troškove prijavljene od strane OpenRoutera.

Za **druge davatelje usluga** (izravno OpenAI, izravno Anthropic itd.), trošak se procjenjuje na temelju cijena objavljenih od strane OpenRoutera. Ako za model nije pronađena odgovarajuća cijena, trošak će se prikazati kao **nije dostupan** i neće se dodati na ukupni iznos.

<br/>

<a id="total-cost-does-not-match-my-provider-bill"></a>
### Ukupni trošak se ne podudara s računom davatelja

Svi iznosi troškova u aplikaciji su **procjene samo za referencu**, a ne službeni računi.

Da biste ukupni iznos približili stvarnom trošku na OpenRouteru, otvorite [**Postavke** > **Praćenje troškova**](#cost-tracking) i kliknite **Sinkroniziraj s korištenjem API ključa**.

<br/>

<a id="the-history-page-is-missing-from-the-sidebar"></a>
### Stranica Povijest nedostaje u bočnoj traci

Moguće je da je isključena opcija **Zadrži povijest izvršenja**. Otvorite [**Postavke** > **Opće postavke**](#general-settings) i omogućite je. Imajte na umu da uključivanje ove opcije ne vraća prethodno izbrisane podatke povijesti.

<br/>

<a id="web-app-session-expired"></a>
### Web aplikacija: neočekivano preusmjeravanje na stranicu za prijavu

Vaša sesija je mogla isteći. Prijavite se ponovno. Ako se to događa često, provjerite postavke konfiguracije poslužitelja za trajanje sesije.

<br/>

<a id="web-admin-forgot-or-lost-a-password"></a>
### Web administrator: zaboravljena ili izgubljena lozinka

Ovo se odnosi na **samostalno hostiranu web aplikaciju** (Docker), a ne na desktop aplikaciju (Electron).

- Ako se drugi administrator može prijaviti, on može otvoriti [**Postavke** > **Korisnici**](#users), odabrati račun i postaviti **novu lozinku**.
- Ako ste **blokirani**, ali imate **pristup ljusci** stroja ili kontejnera, poništite lozinku pomoću alata koji dolazi s slikom (zamijenite `transrewrt` ako ste promijenili zadani naziv, te stavite lozinku u navodnike ako sadrži razmake ili posebne znakove):

```bash
docker exec transrewrt reset-web-password '<username>' '<new-password>'
```

Zadano korisničko ime administratora je `admin` ako nikada niste stvorili druge račune. Kada unesete samo jedan argument, taj argument se tretira kao nova lozinka za `admin`.

Ako pokrećete iz **izvornog izvješća** umjesto iz Docker-a, koristite:

```bash
pnpm run reset-web-password -- <username> <new-password>
```

Skripta ažurira zapis korisnika u bazi podataka SQLite (i može stvoriti `admin` korisnika ako nedostaje). Nakon poništavanja, prijavite se s novom lozinkom.

<br/>

<a id="dashboard-shows-no-data-for-other-users"></a>
### Nadzorna ploča ne prikazuje podatke za druge korisnike (web)

Samo **administratori** mogu pregledavati podatke svih korisnika putem **Korisnik** filtara. Redovni korisnici vide samo vlastitu aktivnost po dizajnu.

<br/>

<a id="i-changed-a-prompt-and-lost-the-edits"></a>
### Promijenio sam upit i izgubio izmjene

Kada uređujete upit, uvijek kliknite **Spremi** prije nego što kliknete **Natrag na pokretanje**.

<br/><br/>

<a id="quick-tips"></a>
## Brzi savjeti

- Počnite s [**Prijevodom**](#translate) kako biste provjerili radi li vaša konfiguracija prije nego što prijeđete na [**Prepisi**](#rewrite) ili [**Pretvori**](#transform).
- Koristite [**Prepisi**](#rewrite) za svakodnevna poboljšanja formulacije.
- Koristite [**Pretvori**](#transform) kada vam treba ponovljiv tijek rada za određeni zadatak.
- Koristite [**Nadzornu ploču**](#dashboard) ako želite pratiti korištenje i troškove.
- Koristite [**Povijest**](#history) za pregled prošlih operacija i njihovog punog ulaznog/izlaznog teksta.
- Redovito izvozite upite ako izrađujete biblioteku upita koju želite sačuvati (pogledajte [Transformacijske upite](#transform-prompts)) ili ako ih želite dijeliti s drugima.

<br/><br/>

<a id="disclaimer"></a>
## Odricanje odgovornosti

Imena proizvoda i ikone vlasništvo su njihovih vlasnika i koriste se samo u svrhe identifikacije. Ovaj softver nije povezan s niti ga podržavaju navedene marke.

<br/><br/>

<a id="license"></a>
## License

Autorska prava © 2026 Waldemar Scudeller Jr.

[Apache License 2.0](../LICENSE)
