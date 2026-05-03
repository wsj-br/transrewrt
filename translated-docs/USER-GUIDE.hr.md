---
translation_last_updated: '2026-05-03T19:08:34.150Z'
source_file_mtime: '2026-05-03T18:57:44.574Z'
source_file_hash: 344c54a3a014452fb149b427480e26d09bb25eb0b408f4c2006d55ba1255579b
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

Transrewrt vam pomaže u radu s tekstom na tri glavna načina:

- **Prevedi** - pretvori tekst s jednog jezika na drugi.
- **Prepisi** - preformuliraj tekst u drugačijem stilu, na primjer jasnijem, kraćem ili formalnijem.
- **Transformiraj** - obradi tekst pomoću prilagođenih uputa za umjetnu inteligenciju koje se nazivaju upute.

<br/>

Ovaj vodič objašnjava kako koristiti aplikaciju nakon što je instalirana i pokrenuta. Za korake instalacije pogledajte glavni [**README**](README.hr.md).

<br/>

> ℹ️ **NAPOMENA**<br/>
> Transrewrt je dostupan kao desktop aplikacija za Windows i Linux te kao samoposlužena web aplikacija. Ovaj vodič fokusira se na svakodnevnu upotrebu aplikacije. Ako se neka stavka odnosi samo na jednu verziju, to je jasno označeno.

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

- [Prije početka](#before-you-start)
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
- [Prepisi](#rewrite)
- [Transformiraj](#transform)
  - [Pokreni postojeći upit](#run-an-existing-prompt)
  - [Ako još nemate upita](#if-you-have-no-prompts-yet)
  - [Brzo kreiraj upit](#create-a-prompt-quickly)
  - [Uredi upit](#edit-a-prompt)
  - [Testiraj upit prije korištenja](#test-a-prompt-before-using-it)
- [Nadzorna ploča](#dashboard)
  - [Filtriraj podatke](#filter-the-data)
  - [Kartice nadzorne ploče](#dashboard-tabs)
  - [Izvoz podataka](#export-data)
  - [Izbriši pohranjene zapise za model](#delete-stored-records-for-a-model)
- [Povijest](#history)
  - [Filtriraj povijest](#filter-the-history)
  - [Izvezi podatke povijesti](#export-history-data)
- [Postavke](#settings)
  - [Opće postavke](#general-settings)
  - [Modeli](#models)
  - [Jezici](#languages)
  - [Praćenje troškova](#cost-tracking)
  - [Transformacijske upute](#transform-prompts)
  - [Korisnici](#users)
  - [API konfiguracija](#api-config)
  - [O programu](#about)
- [Uobičajeni problemi](#common-issues)
  - [Aplikacija ne prevodi, prepisuje ili transformira tekst](#the-app-will-not-translate-rewrite-or-transform-text)
  - [Popis modela je prazan](#the-model-list-is-empty)
  - [Rezultat je pre spor ili pre skup](#the-result-is-too-slow-or-too-expensive)
  - [Sučelje je na pogrešnom jeziku](#the-interface-is-in-the-wrong-language)
  - [Tekst je premalen ili teško čitljiv](#the-text-is-too-small-or-hard-to-read)
  - [Grafovi na nadzornoj ploči su prazni](#dashboard-charts-are-empty)
  - [Trošak prikazuje "nije dostupno" ili izgleda netočno](#cost-shows-not-available-or-seems-wrong)
  - [Ukupna cijena se ne podudara s računom davatelja usluga](#total-cost-does-not-match-my-provider-bill)
  - [Stranica Povijest nedostaje u bočnoj traci](#the-history-page-is-missing-from-the-sidebar)
  - [Web aplikacija: neočekivano preusmjeravanje na stranicu za prijavu](#web-app-redirected-to-the-login-page-unexpectedly)
  - [Web administrator: zaboravljena ili izgubljena lozinka](#web-admin-forgot-or-lost-a-password)
  - [Nadzorna ploča ne prikazuje podatke za druge korisnike (web)](#dashboard-shows-no-data-for-other-users-web)
  - [Promijenio sam upit i izgubio izmjene](#i-changed-a-prompt-and-lost-the-edits)
- [Brzi savjeti](#quick-tips)
- [Ograničenje odgovornosti](#disclaimer)
- [Licenca](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="before-you-start"></a>
## Prije početka

Da biste koristili Transrewrt, potreban vam je pristup barem jednom davatelju usluga umjetne inteligencije. Podržani davatelji usluga su: [OpenRouter](https://openrouter.ai) (koji nudi pristup mnogim modelima), OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras i [Ollama](https://ollama.com) za lokalne modele.

Ne morate odabrati plaćeni model kako biste započeli. Čim dodate svoj OpenRouter API ključ, aplikacija automatski omogućuje ugrađenu **besplatnu** OpenRouter opciju. To vam omogućuje trenutno prevođenje, prepisivanje i transformaciju teksta. Alternativno, možete dobiti besplatni API ključ od Cerebras, Googlea, Groq ili Mistral AI-a.

Jednostavnim riječima:

- **Model** je AI motor koji obavlja posao. Modeli se prikazuju s **prefiksom davatelja usluga** (npr. `openrouter/…`, `openai/…`, `ollama/…`).
- **API ključ** (ili za Ollamu, **osnovni URL**) je način na koji aplikacija pristupa tom davatelju usluga.

Ako koristite **desktop aplikaciju**, dodajte ključeve u [**Postavke** > **API konfiguracija**](#api-config) za svakog davatelja usluga kojeg koristite. Ako koristite samo OpenRouter, pogledajte dolje [Kako dobiti API ključ](#how-to-get-an-api-key-desktop-app). Ako ne želite koristiti API ključ, možete instalirati Ollamu (s [ollama.com](https://ollama.com)) i koristiti lokalne modele, poput `translategemma:4b`.

Ako koristite **web verziju**, vlasnik poslužitelja konfigurira davatelje usluga putem varijabli okruženja, pa ne možete izravno unijeti API ključeve u aplikaciji.

<br/>

<a id="how-to-get-an-api-key-desktop-app"></a>
### Kako dobiti besplatni OpenRouter API ključ (desktop aplikacija)

Ako koristite desktop aplikaciju, slijedite ove korake:

1. Otvorite [OpenRouter](https://openrouter.ai) u svom web pregledniku.
2. Stvorite račun ili se prijavite.
3. Otvorite stranicu [Ključevi](https://openrouter.ai/keys).
4. Kliknite gumb za stvaranje novog API ključa.
5. Dodijelite ključu naziv kako biste ga mogli prepoznati kasnije.
6. Kopirajte novi API ključ.
7. Vratite se u Transrewrt i otvorite **Postavke** > **API konfiguracija**.
8. Zalijepite ključ u polje **OpenRouter API ključ** (ispod **Postavke** > **API konfiguracija**).
9. Kliknite **Test OpenRouter ključa** kako biste provjerili radi li ispravno.

<br/><br/>

<a id="getting-started"></a>
## Prvi koraci

Ako je ovo vaše prvo korištenje Transrewrt-a, slijedite ovaj redoslijed:

1. Otvorite aplikaciju.
2. Ako je potrebno, odaberite svoj **jezik sučelja** s ikone zemaljskog globusa.
3. Ako koristite **desktop aplikaciju**, otvorite [**Postavke** > **API konfiguracija**](#api-config), dodajte API ključ barem za jednog davatelja usluga (npr. OpenRouter) i kliknite **Test** kako biste potvrdili da radi.
4. Otvorite [**Postavke** > **Modeli**](#models) i dodajte jedan ili više modela u **Odabrane modele**.
5. Otvorite [**Postavke** > **Jezici**](#languages) i odaberite svoje **Vrhunsko jezike** ako želite da se vaši najčešće korišteni jezici prikazuju prvi.
6. Idite na **Prevedi** i izvršite jednostavno prevođenje kako biste potvrdili da sve radi.
7. Kada to uspije, isprobajte **Prepisi** i zatim **Transformiraj**.

Redoslijed je važan. On sprječava najčešći problem kod prvog korištenja: pokušaj pokretanja zadatka prije nego što aplikacija ima radnu API vezu ili odabrani model.

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

Koristite bočnu traku za kretanje kroz aplikaciju. Bočnu traku možete sažeti kako biste oslobodili više prostora klikom na ikonu pokraj logotipa aplikacije.

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
        <li><strong>Prepisi</strong> otvara radno područje za prepisivanje.</li><br/>
        <li><strong>Transformiraj</strong> otvara radno područje za prilagođene upite.</li><br/>
        <li><strong>Nadzorna ploča</strong> prikazuje podatke o korištenju i troškovima.</li><br/>
        <li><strong>Postavke</strong> otvara ploču s postavkama.</li><br/>
        <li><strong>Povijest</strong> prikazuje povijest korištenja s ulaznim i izlaznim tekstom</li><br/>
        <li><strong>Korisnik</strong> prikazuje korisničko ime prijavljenog korisnika (samo na webu).</li>
      </ul>
    </td>
  </tr>
</table>

<br/>

<a id="toolbar"></a>
### Alatna traka

Alatna traka se malo razlikuje ovisno o tome gdje se nalazite u aplikaciji.

- S lijeve strane prikazuje naziv trenutne stranice.
- S desne strane prikazuje **odabir modela** i kontrolu za **Jezik sučelja**.

Pomoću **odabira modela** možete odabrati koji AI motor ćete koristiti za trenutni zadatak.

![Model selector](../images/screenshots/hr/model-selector.png)

Neke besplatne modele možda neće uvijek biti dostupne — ponekad su offline ili imaju ograničenje korištenja. Ako se to dogodi, aplikacija će automatski ukloniti taj model s vaše liste dostupnih. Da biste kontrolirali koje modele vidite, idite na [**Postavke** > **Modeli**](#models) i uredite svoj popis modela. 
 Postavke modela također možete otvoriti izravno klikom na ikonu davatelja usluga s lijeve strane naziva modela na alatnoj traci.

<br/>

Ikona **zemaljskog globusa + kôd jezika** mijenja jezik sučelja aplikacije, kao što su izbornici i tipke. Ona **ne** mijenja jezike prijevoda koji se koriste u funkciji **Prevedi**.

![Interface language selector](../images/screenshots/hr/language-selector.png)

<br/>

<a id="input-and-output-panels"></a>
### Ulazni i izlazni paneli

Većina radnih područja koristi lijevi **Ulazni** panel i desni **Izlazni** panel.

Svaki panel također prikazuje:

| **Ulaz**                                                          | **Izlaz**                                                                                                                  |
|--------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------|
| - Broj znakova <br/>- Broj riječi <br/>- Broj odlomaka   <br/> | - Vrijeme trajanja zadatka<br/>- **TPS** (tokeni po sekundi)<br/>- Broj znakova, riječi i odlomaka<br/>- Korišteni model |

Ako se pitate o tehničkim izrazima:

- **Token** znači mali dio teksta. Možete ga shvatiti kao dio riječi ili kratku riječ.
- **TPS** znači koliko takvih dijelova teksta model obradi svake sekunde.

<br/>

Također možete pratiti trošak svake operacije (ako je dostupan) i ukupni trošak, omogućivši opciju `Show cost information on the actions` na [**Postavke** > **Opće postavke**](#general-settings).

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="translate"></a>
## Prevedi

Koristite **Prevedi** kada želite pretvoriti tekst s jednog jezika na drugi.

![Translate workspace](../images/screenshots/hr/translate.png)

<br/>

<a id="translate-text"></a>
### Prevedi tekst

1. Otvorite **Prevedi**.
2. Odaberite jezik u polju **S**.
3. Odaberite jezik u polju **Na**.
4. Odaberite model na alatnoj traci.
5. Upišite ili zalijepite tekst u **Ulaz**.
6. Kliknite **Prevedi**.
7. Pročitajte rezultat u **Izlaz**.
8. Koristite gumb za kopiranje ako želite kopirati rezultat.

<br/>

<a id="language-selection"></a>
### Odabir jezika

- **From** može biti određeni jezik ili **Otkrij jezik**.
- **To** je jezik u koji želite prevesti.

Vaši odabrani **najčešći jezici** prikazat će se na vrhu popisa. Možete ih postaviti u [**Postavke** > **Jezici**](#languages).

<br/>

<a id="helpful-translation-settings"></a>
### Korisne postavke prijevoda

U [**Postavke** > **Opće postavke**](#general-settings) možete promijeniti kako se ponaša prijevod:

- **Automatski prijevod pri lijepljenju** pokreće prijevod čim zalijepite tekst.
- **Automatsko kopiranje rezultata u međuspremnik** automatski kopira rezultat nakon uspješnog prijevoda.
- **Prijevod u stvarnom vremenu (tijekom tipkanja)** pokreće prijevode dok tipkate.
- **Vrijeme čekanja (ms)** određuje koliko dugo aplikacija čeka prije pokretanja prijevoda u stvarnom vremenu.
- **Enter** određuje što se događa kada pritisnete `Enter`:

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="rewrite"></a>
## Prepisi

Koristite **Prepisi** kada želite poboljšati formulaciju bez mijenjanja glavne poruke.

![Rewrite workspace](../images/screenshots/hr/rewrite.png)

Ovo je korisno za:

- ispravljanje pravopisa i gramatike (**Provjeri pravopis i gramatiku**)
- povećanje jasnoće teksta (**Poboljšaj jasnoću**)
- više različitih preformulacija u jednom pokretanju (**Alternativne verzije**)
- činjenje teksta formalnijim ili neformalnijim (**Formalno** / **Neformalno**)
- skraćivanje ili proširivanje teksta (**Skraćivanje** / **Proširivanje**)
- činjenje teksta tehničkijim (**Učini tehničkim**)

<br/>

> 💡 **SAVJET**<br/>
> Kada koristite način "**Provjeri pravopis i gramatiku**", u izlaznom panelu pojavit će se prekidač **Prikaži promjene** (kraj **Kopiraj**).
> Uključite ili isključite kako biste prikazali ili sakrili specifične ispravke primijenjene na vaš tekst.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="transform"></a>
## Transformiraj

Koristite **Transformiraj** kada želite da AI slijedi prilagođeni skup uputa.

![Transform workspace](../images/screenshots/hr/transform.png)

Ovo je najfleksibilniji dio aplikacije. Možete ga koristiti za zadatke poput:

- sažimanja bilješki
- pretvaranja sirovog teksta u uređenu e-poštu
- izdvajanja ključnih točaka
- pretvaranja teksta u određeni format
- bilo koje druge prilagođene aktivnosti s ulaznim tekstom

<br/>

<a id="run-an-existing-prompt"></a>
### Pokrenite postojeći upit

1. Otvori **Transformiraj**.
2. Odaberi upit s popisa upita.
3. Ako se pojavi okvir za **Meta** jezik, odaberi jezik ako želiš.
4. Upiši ili zalijepi tekst u **Ulaz**.
5. Klikni **Transformiraj**.
6. Pročitaj rezultat u **Izlaz**.

<br/>

<a id="if-you-have-no-prompts-yet"></a>
### Ako još nemate upita

Ako je vaš popis upita prazan, kliknite **Učitaj uzorke upita** u Transform radnom prostoru. Ista je kontrola uvijek dostupna u [**Postavke** > **Transformacijske upute**](#transform-prompts) na retku za izvoz/uvoz. Oba dodaju ugrađene primjere kako biste mogli brzo započeti.

<br/>

> ℹ️ **NAPOMENA**<br/>
> Uzorci upita dostavljaju se na engleskom jeziku. Nakon što ih učitate, možete urediti upit i koristiti **Prevedi upit** da biste ga preveli na vaš jezik.

<br/>

<a id="create-a-prompt-quickly"></a>
### Brzo kreirajte upit

Najbrži način za stvaranje upita je:

1. Kliknite **Novi upit**.
2. Kliknite **Generiraj upit**.
3. Opisite što želite da upit učini.
4. Odaberite model.
5. Dopustite aplikaciji da stvori skicu za vas.
6. Pregledajte skicu i kliknite **Spremi**.

![Generate prompt](../images/screenshots/hr/transform-generate.png)

<br/>

<a id="edit-a-prompt"></a>
### Uredi upit

Kada kreirate ili uređujete upit, urednik se pojavljuje s lijeve strane, a područje za testiranje s desne strane.

![Transform prompt editor](../images/screenshots/hr/transform-prompt-edit.png)

Glavna polja su:

- **Naziv upita**: ime koje se prikazuje na popisu upita.
- **Upute za upit (neobavezno)**: kratka napomena koja se prikazuje korisniku prilikom pokretanja upita.
- **Uloga modela**: opća uloga dodijeljena umjetnoj inteligenciji, npr. 'Vi ste korisni pomoćnik.'
- **Upute za model (jedna po retku)**: specifična pravila koja AI treba slijediti.
- **Opis izlaza**: kratka riječ koja opisuje rezultat, npr. 'sažetak' ili 'prepisi'.
- **Temperatura (0,0 → 1,0)**: kako će se model ponašati; pogledajte ispod.
- **Zatraži ciljani jezik**: dodaje odabir ciljanog jezika kada se pokrene upit.

Ako vam je tehnički izraz **Temperatura** nov, razmislite o tome ovako:

- **Niža** temperatura daje stabilnije, predvidljivije rezultate.
- **Viša** temperatura daje veću raznolikost i kreativnost.

Također možete koristiti:

- `Generate prompt` da biste kreirali novu skicu iz jednostavnog opisa
- `Improve prompt` da biste poboljšali postojeći upit
- `Translate prompt` da biste preveli polja upita

<br/>

> ⚠️ **UPOZORENJE**<br/>
> Kliknite `Save` prije nego što kliknete `Back to Run`. Ako se vratite bez spremanja, promjene će biti izgubljene.

<br/>

<a id="test-a-prompt-before-using-it"></a>
### Testirajte upit prije korištenja

Ploča za testiranje s desne strane omogućuje vam isprobavanje upita s primjerima teksta prije korištenja u svakodnevnom radu.

Ovo je korisno kada:

- kreirate novi upit
- uspoređujete dvije verzije upita
- želite provjeriti ton, duljinu ili format izlaza

<br/>

> ℹ️ **NAPOMENA**<br/>
> Možete izvesti i uvesti spremljene upite u odjeljku [**Postavke** > **Transformacijske upute**](#transform-prompts).

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="dashboard"></a>
## Nadzorna ploča

Koristite **Nadzornu ploču** da biste vidjeli koliko koristite aplikaciju i koliko vas to košta (za naplaćivane modele).

![Dashboard summary](../images/screenshots/hr/dashboard-summary.png)

<br/>

> ℹ️ **NAPOMENA**<br/>
> Ako koristite samo **besplatne** modele, iznosi **troškova** mogu biti nula, a sažeci usmjereni na trošak mogu izgledati prazno. Na kartici **Sažetak**, **Korištenje tijekom vremena** i **Korištenje po modelu** i dalje prikazuju **broj poziva** (prevođenje, prepisivanje i transformacija) kada imate aktivnosti u odabranom razdoblju.

<br/>

<a id="filter-the-data"></a>
### Filtriranje podataka

Koristite gumbe za filtriranje na vrhu za promjenu vremenskog raspona.

![Dashboard filters](../images/screenshots/hr/dashboard-filter.png)

<br/>

> ℹ️ **NAPOMENA**<br/>
> Filtriranje **Korisnik** vidljivo je samo administratorima u web verziji. Obični korisnici neće vidjeti ovaj filtar, a nije dostupan ni u desktop aplikaciji.

<br/>

<a id="dashboard-tabs"></a>
### Kartice nadzorne ploče

- **Sažetak** daje pregled korištenja i troškova. Uključuje **Korištenje tijekom vremena** (naslagani kumulativni **broj poziva** po danu za prevođenje, prepisivanje i transformaciju) i **Korištenje po modelu** (ukupni **pozivi po modelu**, uključujući transformaciju).
- **Po korištenju** razdvaja aktivnosti po jeziku prijevoda, načinu prepisivanja i transformacijskom upitu.
- **Po modelu** prikazuje koje modele ste koristili i koliko su vas koštali.
- **Po danu** prikazuje dnevne ukupne iznose.
- **Svi pozivi** prikazuje cijelu povijest poziva i omogućuje vam njezin izvoz.

<br/>

<a id="export-data"></a>
### Izvoz podataka

Tablice nadzorne ploče mogu izvesti podatke u:

- **JSON**
- **CSV**
- **XLSX**

To je korisno ako želite pregledati aktivnost izvan aplikacije ili podijeliti izvještaj.

<br/>

<a id="delete-stored-records-for-a-model"></a>
### Brisanje pohranjenih zapisa za model

U odjeljcima **Po modelu** ili **Svi pozivi** možete ukloniti pohranjene zapise za model klikom na ikonu "kante za smeće".

> ⚠️ **UPOZORENJE**<br/>
> Brisanje pohranjenih zapisa nije moguće poništiti. Koristite ovo samo ako ste sigurni da više ne trebate tu povijest.

Da biste izbrisali sve podatke ili uklonili zapise na temelju njihove starosti, idite na [**Postavke** > **Praćenje troškova**](#cost-tracking). Tamo ćete pronaći opcije za brisanje svih pohranjenih podataka ili samo podataka starijih od određenog datuma.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="history"></a>
## Povijest

Kliknite na **Povijest** da biste vidjeli povijest svojih akcija unutar **Transrewrt**, uključujući ulaz i izlaz svake operacije.

![History page](../images/screenshots/hr/history.png)

<br/>

<a id="filter-the-history"></a>
### Filtriraj povijest

**Povijest** koristi iste filtre kao stranica **Nadzorna ploča**. Iskoristite ih za odabir vremenskog raspona.

![Dashboard filters](../images/screenshots/hr/dashboard-filter.png)

<br/>

> ℹ️ **NAPOMENA**<br/>
> Filtriranje **Korisnik** vidljivo je samo administratorima u web verziji. Obični korisnici neće vidjeti ovaj filtar, a nije dostupan ni u desktop aplikaciji.

<br/>

<a id="export-history-data"></a>
### Izvoz podataka povijesti

Stranica povijesti može izvesti filtrirane podatke u:

- **JSON**
- **CSV**
- **XLSX**

To je korisno ako želite pregledati aktivnost izvan aplikacije ili podijeliti izvještaj.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="settings"></a>
## Postavke

Otvorite **Postavke** iz bočne trake kako biste prilagodili ponašanje aplikacije.

Dostupne kartice ovise o platformi i vašoj ulozi:

| Kartica           | Desktop | Web (administrator) | Web (obični korisnik) |
  |-------------------|:-------:|:-------------------:|:---------------------:|
  | Opće postavke     |   da    |        da          |          da           |
  | Modeli            |   da    |        da          |          da           |
  | Jezici           |   da    |        da          |          da           |
  | Praćenje troškova |   da    |        da          |          -            |
  | Transformacijske upute |   da    |        da          |          da           |
  | Korisnici        |    -    |        da          |          -            |
  | API konfiguracija |   da    |        da          |          -            |
  | O programu             |   da   |     da     |        da         |

<br/>

> ℹ️ **NAPOMENA**<br/>
> U web verziji, svaki korisnik ima svoju vlastitu konfiguraciju. Postavke poput odabranih modela, jezika, općih opcija i transformacijskih uputa pohranjuju se po korisniku. Promjene koje napravite ne utječu na druge korisnike.

<br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="general-settings"></a>
### Opće postavke

Koristite **Opće postavke** za upravljanje ponašanjem tipkanja, pohranjivanjem detalja izvršavanja za **Povijest** i izgledom aplikacije.

**Ponašanje**

- **Ponašanje za ENTER** određuje hoće li `Enter` pokrenuti zadatak ili umetnuti novi redak.
- **Automatski prijevod pri lijepljenju** pokreće prijevod čim zalijepite tekst.
- **Automatsko kopiranje rezultata u međuspremnik** automatski kopira uspješne rezultate.
- **Prijevod u stvarnom vremenu (tijekom tipkanja)** prevodi dok tipkate.
- **Vrijeme čekanja (ms)** postavlja vrijeme čekanja za prijevod u stvarnom vremenu.

**Povijest**

- **Zadrži povijest izvršavanja** kontrolira hoće li svaki prijevod, prepisivanje i transformacija pohraniti **ulazni i izlazni tekst** za prikaz u bočnoj traci [**Povijest**](#history). Isključivanje ove opcije traži potvrdu; ako potvrdite, pohranjeni tekst povijesti uklanja se iz baze podataka.
- **Izbriši povijest podataka** omogućuje uklanjanje pohranjenog teksta prema dobi (npr. stariji od nekoliko mjeseci ili **svi podaci (izbriši)**) pomoću **Izbriši podatke**. To utječe samo na pohranjeni tekst izvršavanja za prikaz **Povijest**; **ne** briše podatke o troškovima ili ukupnim korištenjima. Za uklanjanje ili smanjenje podataka o **troškovima**, koristite [**Postavke** > **Praćenje troškova**](#cost-tracking).

**Izgled**

- **Prikaži informacije o cijenama na radnjama** kontrolira prikaz cijene po operaciji (ako je dostupna) i ukupne cijene na pločama za izlaz prijevoda, prepisivanja i transformacije.
- **Broj decimala za cijenu** mijenja prikaz decimala troškova.
- **Samo za web:** **prikaži marginu oko aplikacije** dodaje dodatni prostor oko sučelja.
- **Obitelj fonta** mijenja font pisanja u tekstnim pločama.
- **Veličina** mijenja veličinu fonta.

**Sigurnosna kopija konfiguracije**

- **Uključi podatke o korištenju u sigurnosnu kopiju** – kada je omogućeno, ZIP datoteka također sadrži povijest izvršavanja i podatke o pozivima API-ja.
- **Napravi sigurnosnu kopiju konfiguracije** – stvara jednu ZIP datoteku (`transrewrt-config-backup-YYYY-MM-DD_HHMMSS.zip` u UTC-u po zadanom) koja sadrži `config.json`, `state.json`, opcionalni ključ za šifriranje, korisnike, postavke, prilagođene upite i podatke o korištenju ako ste to odabrali. Nakon uspješne sigurnosne kopije, potvrda prikazuje naziv spremljene datoteke.
- **Vrati iz sigurnosne kopije** – prvo otvara **dijalog za potvrdu**. Odaberite ZIP datoteku sigurnosne kopije unutar dijaloga (**Pregledaj** / odabir datoteke ili povlačenje i ispustanje gdje je podržano), a zatim pregledajte opcije:
  - **Vrati podatke o korištenju** – uvozi podatke o korištenju/povijesti iz ZIP datoteke ako je sigurnosna kopija napravljena s uključenim podacima o korištenju; ostavite isključeno ako želite samo postavke i upite.
  - **Obriši stare podatke o korištenju prije vraćanja** – uklanja postojeće podatke o korištenju/povijesti na ovoj instalaciji prije primjene sigurnosne kopije (neobavezno; koristite kada želite čisto zamijeniti).

Sigurnosne kopije napravljene u web ili desktop verziji mogu se vratiti u drugoj verziji. Kada vratite desktop sigurnosnu kopiju u web verziji, podaci će se vratiti administratorskom korisniku.

<br/>

<a id="models"></a>
### Modeli

Koristite **Postavke** > **Modeli** za odabir modela koji se pojavljuju na alatnoj traci.

![Settings Models tab](../images/screenshots/hr/settings-models.png)

Stranica ima dvije liste:

- **Dostupni modeli** s lijeve strane
- **Odabrani modeli** s desne strane

Korisni alati uključuju:

- **Pretraži modele...** da biste pronašli model po nazivu
- **Davatelj usluga** oznake za sužavanje popisa na jedan motor (OpenRouter, OpenAI, Ollama, …)
- **Samo besplatni** za prikaz samo besplatnih modela
- **Osvježi** za ponovno učitavanje popisa
- **Proširi sve** i **Sažmi sve** kada sortirate po davatelju usluga

ID-ovi modela uključuju prefiks davatelja usluga (npr. `openrouter/…` naspram `openai/…`). Oznake poput **OpenAI (OpenRouter)** naspram **OpenAI (izravno)** pokazuju kako se promet usmjerava.

> ℹ️ **NAPOMENA**<br/>
> **OpenRouter Body Builder** (`openrouter/bodybuilder`) je model usmjerivača, a ne opći model za razgovor: njegov odgovor je JSON koji opisuje tijela zahtjeva OpenRouter API-ja (npr. niz `requests` s `model` i `messages`). Ako ga koristite za **Prevedi**, **Prepisi** ili **Transformiraj**, ploča za izlaz prikazat će taj JSON umjesto gotovog teksta. Odaberite normalan tekstualni model za te zadatke. Pogledajte [stranicu modela Body Builder](https://openrouter.ai/openrouter/bodybuilder) na OpenRouteru.

Akcije:

- Da biste dodali model, kliknite **Dodaj** ili bilo gdje unutar unosa.

- Da biste uklonili model, kliknite **X** pokraj njega u **Odabranim modelima** ili **Odabrano** na unosu u Dostupnim modelima.

- Da biste obrisali popis, kliknite **Poništi sve odabire**. Obavezni besplatni model ostat će na popisu.

<br/>

> ℹ️ **NAPOMENA**<br/>
> Ako ne želite odmah dodati kredite na OpenRouter, započnite omogućavanjem **Samo besplatni** i odabirom besplatnih modela (nije potrebna kreditna kartica). Također možete koristiti Ollama za pokretanje modela lokalno bez ikakvog API ključa.

<br/>

<a id="languages"></a>
### Jezici

Koristite **Postavke** > **Jezici** za uređivanje popisa jezika koje aplikacija koristi.

- **Vrhunski jezici** pričvršćeni su na vrh popisa jezika u **Prevedi** i **Transformiraj**.
- **Prilagođeni jezik** omogućuje dodavanje jezika koji nije na ugrađenom popisu.

Ako dodate prilagođeni jezik, pojavit će se u izbornicima jezika uz ugrađene opcije.

<br/>

<a id="cost-tracking"></a>
### Praćenje troškova

Koristite **Postavke** > **Praćenje troškova** za upravljanje informacijama o troškovima.

- **Ukupna cijena** prikazuje tekući zbroj.
- **Kopiraj vrijednost** kopira ukupno u međuspremnik.
- **Poništi trošak** vraća spremljeni zbroj na nulu.
- **Sinkroniziraj s korištenjem API ključa** postavlja ukupno na iznos koji odgovara korištenju prikazanom u vašem OpenRouter računu (samo za OpenRouter).
- **Korištenje API ključa** prikazuje detalje korištenja OpenRoutera, ako su dostupni.
- **Izbriši podatke o cijenama** uklanja sve podatke ili samo unose starije od odabranog datuma.

**Praćenje troškova:** Kada koristite modele OpenRoutera, aplikacija prikazuje vaše stvarno korištenje i troškove na temelju informacija o cijenama s OpenRoutera. Za sve ostale davatelje usluga, aplikacija procjenjuje troškove koristeći cijene objavljene od strane OpenRoutera; ako cijena nije dostupna, procjena može biti nula.

<br/>

> ℹ️ **NAPOMENA**<br/>
>  **Svi iznosi troškova su procjene isključivo za vašu referencu, a ne službeni računi.**

<br/>

> ⚠️ **UPOZORENJE**<br/>
> Brisanje podataka ne može se poništiti. Prije brisanja, obavezno napravite sigurnosnu kopiju svojih podataka ili ih izvezite putem [**Povijest**](#history) 
> ili [**Nadzorna ploča** > **Svi pozivi**](#dashboard-tabs), inače će trajno biti izgubljeni. 
> Sva povijest unosa/izlaza vezana uz svaki unos poziva API-ja također će biti izbrisana.

<br/>

<a id="transform-prompts"></a>
### Transformacijske upute

Koristite **Postavke** > **Transformacijske upute** za grupno upravljanje upitima.

Možete:

- pregledati spremljene upite
- izbrisati upite
- uvesti upite iz datoteke
- izvesti upite za sigurnosnu kopiju ili dijeljenje
- učitati uzorke upita na popis upita

<br/>

<a id="users"></a>
### Korisnici

Koristite **Korisnici** za upravljanje korisničkim računima u web verziji. Možete dodavati korisnike, ažurirati njihove podatke, resetirati lozinke i brisati račune.

<br/>

<a id="api-config"></a>
### API konfiguracija

Podržani davatelji usluga su: OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras i **Ollama** (lokalni modeli putem osnovnog URL-a). Potrebno je konfigurirati samo davatelje usluga koje koristite.

**Web aplikacija: samo administrator**

API ključevi se konfiguriraju putem sustavskih ili Docker okolišnih varijabli – ne unose se u web sučelju. Ova stranica prikazuje za koje davatelje usluga je ključ konfiguriran i omogućuje testiranje svakog pojedinačno klikom na gumb `Test`.

<br/>

> ℹ️ **NAPOMENA**<br/>
> Da biste promijenili API ključ, ažurirajte okolišnu varijablu u svojoj sustavskoj ili Docker konfiguraciji i ponovno pokrenite poslužitelj ili kontejner.

<br/>

> ℹ️ **NAPOMENA**<br/>
> **Sigurnosne kopije konfiguracije** (pogledajte [**Opće postavke** → Sigurnosna kopija konfiguracije](#general-settings)) mogu ugraditi **rješene** ključeve davatelja usluga unutar datoteke `config.json` u ZIP arhivi. Vraćanje te ZIP arhive **neće** kopirati te ključeve natrag u konfiguracijsku datoteku poslužitelja – aktivni ključevi i dalje dolaze iz okoliša i postojećeg stanja datoteke kao što je tamo opisano.

<br/>

**Desktop aplikacija**

Koristite **API konfiguraciju** za pohranu API ključeva za svakog davatelja usluga kojeg koristite. Za Ollamu unesite **osnovni URL** umjesto API ključa.

<br/>

> 💡 **Savjet** <br/>
> Ako ne želite koristiti API ključeve niti plaćati za korištenje, možete [preuzeti Ollamu](https://ollama.com) i besplatno pokretati modele (kao što je `translategemma:4b`) lokalno na svom računalu. Alternativno, možete kreirati besplatni OpenRouter račun (bez potrebe za kreditnom karticom) kako biste koristili njihove besplatne modele ili dobiti besplatni API ključ od Cerebras, Googlea, Groqa ili Mistral AI-a.

<br/>

- Dodajte samo davatelje usluga koje trebate. U **Postavkama** > **Modeli**, svaki ID modela započinje imenom davatelja usluga (npr. `openrouter/openrouter/free`, `openai/gpt-4o`, `ollama/llama3`).

Da biste dodali API ključ, unesite vrijednost u tekstualno polje i kliknite `Save`. Da biste zamijenili postojeći ključ, kliknite `Edit`. Da biste provjerili radi li ključ, kliknite `Test`. Za Ollama osnovni URL, uvijek kliknite `Test` kako biste provjerili vezu.

<br/>

> ℹ️ **NAPOMENA**<br/>
> Trenutnu vrijednost API ključa ne možete vidjeti. Možete je samo zamijeniti pomoću gumba `Edit`.
> API ključevi su pohranjeni šifrirano u konfiguraciji.

<br/>

<a id="about"></a>
### O programu

**O programu** kartica prikazuje:

- naziv aplikacije
- broj verzije
- datum izdanja
- poveznicu na repozitorij projekta

<br/><br/>

<a id="common-issues"></a>
## Česti problemi

Ako nešto ne radi kako je očekivano, prvo provjerite sljedeće točke.

<br/>

<a id="the-app-will-not-translate-rewrite-or-transform-text"></a>
### Aplikacija ne prenosi, prepisuje ili transformira tekst

Provjerite sljedeće:

- odabrali ste model u alatnoj traci
- barem jedan model je naveden u [**Postavke** > **Modeli**](#models)
- vaša API konfiguracija radi ispravno

Ako koristite desktop aplikaciju:

1. Otvorite [**Postavke** > **API konfiguracija**](#api-config).
2. Provjerite je li spremljen barem jedan API ključ.
3. Kliknite **Test** pokraj davatelja usluga kako biste potvrdili da ključ radi.

<br/>

<a id="the-model-list-is-empty"></a>
### Popis modela je prazan

Otvorite [**Postavke** > **Modeli**](#models) i kliknite **Osvježi**.

Ako je potrebno:

- potražite model
- uključite **Samo besplatni**
- dodajte jedan ili više modela u **Odabrane modele**

<br/>

<a id="the-result-is-too-slow-or-too-expensive"></a>
### Rezultat je preusporen ili prekup

Isprobajte jedno ili više od sljedećeg:

- odaberite drugi model
- koristite kraći ulaz
- isključite **Prijevod u stvarnom vremenu (tijekom tipkanja)** u [**Postavke** > **Opće postavke**](#general-settings)
- koristite besplatne modele za jednostavne zadatke (pogledajte [Modeli](#models))

<br/>

<a id="the-interface-is-in-the-wrong-language"></a>
### Sučelje je na pogrešnom jeziku

Kliknite ikonu zemaljskog globusa u [alatnoj traci](#toolbar) i odaberite željeni **Jezik sučelja**.

<br/>

<a id="the-text-is-too-small-or-hard-to-read"></a>
### Tekst je premalen ili teško čitljiv

Otvorite [**Postavke** > **Opće postavke**](#general-settings) i promijenite:

- **Obitelj fonta**
- **Veličina**

<br/>

<a id="dashboard-charts-are-empty"></a>
### Grafikoni na nadzornoj ploči su prazni

To je normalno ako:

- koristite samo **besplatne modele** i gledate **troškove** (mogu biti nula); **grafikon** broja poziva na **Sažetak** još uvijek treba podatke iz odabranog razdoblja
- odabrani **filter vremena** ne pokriva razdoblje kada su pozivi napravljeni - pokušajte s **Svima** da provjerite

Ako su grafikoni i dalje prazni nakon odabira **Sve**, provjerite nalaze li se pozivi na stranici [**Povijest**](#history) ili na kartici **Svi pozivi**.

<br/>

<a id="cost-shows-not-available-or-seems-wrong"></a>
### Trošak prikazuje "nije dostupno" ili izgleda netočno

Kada koristite modele putem **OpenRoutera**, aplikacija prikazuje stvarne troškove koje prijavljuje OpenRouter.

Za **druge davatelje usluga** (OpenAI izravno, Anthropic izravno itd.), trošak se procjenjuje na temelju cijena objavljenih od strane OpenRoutera. Ako za model nije pronađena odgovarajuća cijena, trošak će se prikazati kao **nije dostupno** i neće se dodati na ukupni iznos.

<br/>

<a id="total-cost-does-not-match-my-provider-bill"></a>
### Ukupni trošak se ne podudara s računom davatelja usluga

Svi iznosi troškova u aplikaciji su **procjene samo za referencu**, a ne službeni računi.

Kako biste ukupni iznos približili stvarnim troškovima na OpenRouteru, otvorite [**Postavke** > **Praćenje troškova**](#cost-tracking) i kliknite **Sinkroniziraj s korištenjem API ključa**.

<br/>

<a id="the-history-page-is-missing-from-the-sidebar"></a>
### Stranica Povijest nedostaje u bočnoj traci

Moguće je da je isključena opcija **Zadrži povijest izvršavanja**. Otvorite [**Postavke** > **Opće postavke**](#general-settings) i omogućite je. Imajte na umu da uključivanje ove opcije ne vraća prethodno izbrisane podatke povijesti.

<br/>

<a id="web-app-session-expired"></a>
### Web aplikacija: neočekivano ste preusmjereni na stranicu za prijavu

Vaša sesija je mogla isteći. Prijavite se ponovno. Ako se to događa često, provjerite postavke konfiguracije poslužitelja vezane uz trajanje sesije.

<br/>

<a id="web-admin-forgot-or-lost-a-password"></a>
### Web administrator: zaboravili ste ili izgubili lozinku

Ovo se odnosi na **samostalno hostiranu web aplikaciju** (Docker), a ne na desktop aplikaciju (Electron).

- Ako se drugi administrator može prijaviti, on može otvoriti [**Postavke** > **Korisnici**](#users), odabrati račun i postaviti **novu lozinku**.
- Ako ste **blokirani**, ali imate **pristup ljusci** stroja ili kontejnera, poništite lozinku pomoću alata koji dolazi s slikom (zamijenite `transrewrt` ako ste promijenili zadano ime, a lozinku stavite u navodnike ako sadrži razmake ili posebne znakove):

```bash
docker exec transrewrt reset-web-password '<username>' '<new-password>'
```

Zadano korisničko ime administratora je `admin` ako niste nikada stvorili druge račune. Kada unesete samo jedan argument, taj argument se tumači kao nova lozinka za `admin`.

Ako pokrećete aplikaciju iz **izvornog koda** umjesto iz Docker slike, koristite:

```bash
pnpm run reset-web-password -- <username> <new-password>
```

Skripta ažurira zapis korisnika u bazi podataka SQLite (i može kreirati `admin` korisnika ako nedostaje). Nakon poništavanja, prijavite se s novom lozinkom.

<br/>

<a id="dashboard-shows-no-data-for-other-users"></a>
### Nadzorna ploča ne prikazuje podatke za druge korisnike (web)

Samo **administratori** mogu pregledati podatke svih korisnika putem filtera **Korisnik**. Redovni korisnici vide samo vlastitu aktivnost po dizajnu.

<br/>

<a id="i-changed-a-prompt-and-lost-the-edits"></a>
### Promijenio sam upit i izgubio uređivanje

Prilikom uređivanja upita, uvijek kliknite **Spremi** prije nego što kliknete **Natrag na Pokreni**.

<br/><br/>

<a id="quick-tips"></a>
## Brzi savjeti

- Započnite s [**Prevedi**](#translate) kako biste provjerili radi li vaša postava prije nego što prijeđete na [**Prepisi**](#rewrite) ili [**Transformiraj**](#transform).
- Koristite [**Prepisi**](#rewrite) za svakodnevna poboljšanja formulacije.
- Koristite [**Transformiraj**](#transform) kada vam treba ponovljiv tijek rada za određeni zadatak.
- Koristite [**Nadzorna ploča**](#dashboard) ako želite pratiti korištenje i troškove.
- Upotrijebite [**Povijest**](#history) za pregled prošlih operacija i njihovog potpunog ulaznog/izlaznog teksta.
- Redovito izvozite upite ako izrađujete biblioteku upita koju želite sačuvati (pogledajte [Transformacijske upute](#transform-prompts)) ili ako ju želite dijeliti s drugima.

<br/><br/>

<a id="disclaimer"></a>
## Odricanje odgovornosti

Imena proizvoda i ikone vlasništvo su njihovih vlasnika i koriste se samo u svrhe identifikacije. Ovaj softver nije povezan s niti ga podržavaju navedene marke.

<br/><br/>

<a id="license"></a>
## License

Autorska prava © 2026 Waldemar Scudeller Jr.

[Apache License 2.0](../LICENSE)
