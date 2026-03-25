---
translated_at: "2026-03-25T21:03:46.747Z"
source_hash: "6ca7b21e820e8ee121cd93bbf98806547c5c3ce7914799891d923201bd2c4466"
source_mtime: 1774468804877.8855
model: "qwen/qwen3-235b-a22b-2507"
---
![Transrewrt baner](../images/transrewrt_banner.png)


<a id="transrewrt-user-guide"></a>
# Korisnički vodič

<br/>

<a id="introduction"></a>
## Uvod

Transrewrt vam pomaže u radu s tekstom na tri glavna načina:

- **Prevođenje** - pretvaranje teksta s jednog jezika na drugi.
- **Ponovno pisanje** - prepričavanje teksta u drugačijem stilu, recimo jasnijem, kraćem ili formalnijem.
- **Transformacija** - obrada teksta pomoću prilagođenih AI uputa koje se zovu upiti.

<br/>

Ovaj vodič objašnjava kako koristiti aplikaciju nakon što je instalirana i pokrenuta. Upute za instalaciju potražite u glavnom dokumentu **[README](README.hr.md)**.

<br/>

> ℹ️ **NAPOMENA**<br/>
> Transrewrt je dostupan kao desktop aplikacija za Windows i Linux, te kao samostalno hostirana web aplikacija. Ovaj vodič usredotočen je na svakodnevnu uporabu aplikacije. Ako neka značajka vrijedi samo za određenu verziju, to će biti posebno istaknuto.

<small>**Pročitajte na drugim jezicima:** [English (UK)](../USER-GUIDE.md) · [Português (BR)](USER-GUIDE.pt-BR.md) · [العربية](USER-GUIDE.ar.md) · [বাংলা](USER-GUIDE.bn.md) · [Català](USER-GUIDE.ca.md) · [简体中文](USER-GUIDE.zh-CN.md) · [繁體中文](USER-GUIDE.zh-TW.md) · [Hrvatski](USER-GUIDE.hr.md) · [Čeština](USER-GUIDE.cs.md) · [Nederlands](USER-GUIDE.nl.md) · [English (US)](USER-GUIDE.en-US.md) · [Filipino](USER-GUIDE.tl.md) · [Français](USER-GUIDE.fr.md) · [Deutsch](USER-GUIDE.de.md) · [Ελληνικά](USER-GUIDE.el.md) · [हिन्दी](USER-GUIDE.hi.md) · [Magyar](USER-GUIDE.hu.md) · [Italiano](USER-GUIDE.it.md) · [日本語](USER-GUIDE.ja.md) · [Basa Jawa](USER-GUIDE.jv.md) · [한국어](USER-GUIDE.ko.md) · [Bahasa Melayu](USER-GUIDE.ms.md) · [فارسی](USER-GUIDE.fa.md) · [Polski](USER-GUIDE.pl.md) · [Português (PT)](USER-GUIDE.pt.md) · [ਪੰਜਾਬੀ](USER-GUIDE.pa.md) · [Română](USER-GUIDE.ro.md) · [Русский](USER-GUIDE.ru.md) · [Slovenčina](USER-GUIDE.sk.md) · [Español](USER-GUIDE.es.md) · [Kiswahili](USER-GUIDE.sw.md) · [Svenska](USER-GUIDE.sv.md) · [తెలుగు](USER-GUIDE.te.md) · [ภาษาไทย](USER-GUIDE.th.md) · [Türkçe](USER-GUIDE.tr.md) · [Українська](USER-GUIDE.uk.md) · [Tiếng Việt](USER-GUIDE.vi.md)</small>

<small>

> **Napomena o prijevodu sučelja i dokumentacije:** Svi prijevodi korisničkog sučelja osim izvornog engleskog (UK)
> izrađeni su pomoću AI modela; izrazi mogu biti neprecizni ili sadržavati pogreške.

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
- [Prevođenje](#translate)
  - [Prevedite tekst](#translate-text)
  - [Odabir jezika](#language-selection)
  - [Korisne postavke prevođenja](#helpful-translation-settings)
- [Ponovno pisanje](#rewrite)
- [Transformacija](#transform)
  - [Pokrenite postojeći upit](#run-an-existing-prompt)
  - [Ako još nemate upite](#if-you-have-no-prompts-yet)
  - [Brzo kreirajte upit](#create-a-prompt-quickly)
  - [Uredite upit](#edit-a-prompt)
  - [Ispitajte upit prije korištenja](#test-a-prompt-before-using-it)
- [Nadzorna ploča](#dashboard)
  - [Filtrirajte podatke](#filter-the-data)
  - [Kartice nadzorne ploče](#dashboard-tabs)
  - [Izvezi podatke](#export-data)
  - [Izbrišite pohranjene zapise za model](#delete-stored-records-for-a-model)
- [Povijest](#history)
  - [Filtrirajte podatke](#filter-the-data-1)
  - [Izvoz podataka iz povijesti](#export-history-data)
- [Postavke](#settings)
  - [Opće postavke](#general-settings)
  - [Modeli](#models)
  - [Jezici](#languages)
  - [Praćenje troškova](#cost-tracking)
  - [Upiti za transformaciju](#transform-prompts)
  - [Korisnici](#users)
  - [Konfiguracija API-ja](#api-config)
  - [O aplikaciji](#about)
- [Uobičajeni problemi](#common-issues)
  - [Aplikacija ne prenosi, ne prepričava niti ne transformira tekst](#the-app-will-not-translate-rewrite-or-transform-text)
  - [Lista modela je prazna](#the-model-list-is-empty)
  - [Rezultat je pre spor ili pre skup](#the-result-is-too-slow-or-too-expensive)
  - [Sučelje je na pogrešnom jeziku](#the-interface-is-in-the-wrong-language)
  - [Tekst je previše malen ili teško čitljiv](#the-text-is-too-small-or-hard-to-read)
  - [Grafovi na nadzornoj ploči su prazni](#dashboard-charts-are-empty)
  - [Trošak prikazuje „nije dostupan“ ili izgleda pogrešno](#cost-shows-not-available-or-seems-wrong)
  - [Ukupni trošak se ne podudara sa računom davatelja usluge](#total-cost-does-not-match-my-provider-bill)
  - [Stranica Povijest nedostaje u bočnoj traci](#the-history-page-is-missing-from-the-sidebar)
  - [Web aplikacija: Neočekivano preusmjeravanje na stranicu za prijavu](#web-app-redirected-to-the-login-page-unexpectedly)
  - [Na nadzornoj ploči nema podataka za druge korisnike (web)](#dashboard-shows-no-data-for-other-users-web)
  - [Promijenio sam upit i izgubio izmjene](#i-changed-a-prompt-and-lost-the-edits)
- [Brzi savjeti](#quick-tips)
- [Odgovornost](#disclaimer)
- [Licenca](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="before-you-start"></a>

## Prije nego što započnete

Kako biste koristili Transrewrt, morate imati pristup barem jednom AI pružatelju usluga. Podržani pružatelji su: [OpenRouter](https://openrouter.ai) (koji nudi pristup brojnim modelima), OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras i [Ollama](https://ollama.com) za lokalne modele.

Ne morate odabrati plaćeni model kako biste započeli. Čim dodate svoj OpenRouter API ključ, aplikacija automatski omogućuje ugrađenu **besplatnu** OpenRouter opciju. To vam omogućuje odmah započeti s prevodenjem, prepisivanjem i transformacijom teksta. Alternativno, možete dobiti besplatni API ključ od Cerebras, Googlea, Groqa ili Mistral AI.

Jednostavnim rječnikom:

- **Model** je AI motor koji obavlja posao. Modeli su navedeni s prefiksom **pokazatelja davatelja** (na primjer `openrouter/…`, `openai/…`, `ollama/…`).
- **API ključ** (ili za Ollamu, **osnovni URL**) služi kao način kojim aplikacija pristupa određenom pružatelju usluga.

Ako koristite **desktop aplikaciju**, dodajte ključeve u odjeljku [**Postavke** > **Konfiguracija API-ja**](#api-config) za svakog pružatelja kojeg koristite. Ako koristite isključivo OpenRouter, pogledajte [Kako dobiti API ključ](#how-to-get-an-api-key-desktop-app) u nastavku. Ako ne želite koristiti API ključ, možete instalirati Ollamu (s [ollama.com](https://ollama.com)) i koristiti lokalne modele poput `translategemma:4b`.

Ako koristite **web verziju**, vlasnik poslužitelja konfigurira davatelje putem varijabli okruženja, pa ne možete izravno unijeti API ključeve u aplikaciju.

<br/>

<a id="how-to-get-an-api-key-desktop-app"></a>
### Kako dobiti besplatni OpenRouter API ključ (desktop aplikacija)

Ako koristite desktop aplikaciju, slijedite ove korake:

1. Posjetite [OpenRouter](https://openrouter.ai) u svom web pregledniku.
2. Stvorite korisnički račun ili se prijavite.
3. Otvorite stranicu [Keys](https://openrouter.ai/keys).
4. Kliknite gumb za stvaranje novog API ključa.
5. Dajte ključu ime kako biste ga mogli prepoznati kasnije.
6. Kopirajte novi API ključ.
7. Vratite se u Transrewrt i otvorite **Postavke** > **Konfiguracija API-ja**.
8. Zalijepite ključ u polje **OpenRouter API ključ** (ispod **Postavke** > **Konfiguracija API-ja**).
9. Kliknite **Testiraj OpenRouter ključ** kako biste potvrdili da radi.

<br/><br/>

<a id="getting-started"></a>
## Prvi koraci

Ako prvi put koristite Transrewrt, slijedite ovaj redoslijed:

1. Pokrenite aplikaciju.
2. Ako je potrebno, odaberite svoj **jezik sučelja** preko ikone kugle.
3. Ako koristite **desktop aplikaciju**, otvorite [**Postavke** > **Konfiguracija API-ja**](#api-config), dodajte API ključ za barem jednog pružatelja (npr. OpenRouter) i kliknite **Test** da provjerite radi li sve.
4. Otvorite [**Postavke** > **Modeli**](#models) i dodajte jedan ili više modela u **Odabrane modele**.
5. Otvorite [**Postavke** > **Jezici**](#languages) i odaberite svoje **Vrhunsko jezike** ako želite da vam najčešće korišteni jezici budu prikazani prvi.
6. Idite na **Prevedi** i provodite jednostavan prijevod kako biste potvrdili da sve radi.
7. Kada to uspije, isprobajte **Prepiši**, a zatim i **Transformiraj**.

Ovaj redoslijed je bitan. On sprječava najčešći problem prilikom prvog korištenja: pokušaj pokretanja zadatka prije nego što aplikacija ima funkcionirajuću API vezu ili odabrani model.

<br/><br/>

<a id="main-parts-of-the-window"></a>
## Glavni dijelovi prozora

Aplikacija je podijeljena u tri glavna područja:

- **Bočni traka** s lijeve strane.
- **Traka alata** na vrhu.
- **Radno područje** u sredini.

<br/>

<a id="sidebar"></a>
### Bočna traka

Koristite bočnu traku za navigaciju po aplikaciji. Možete sažeti bočnu traku kako biste imali više prostora, klikom na ikonu pored logotipa aplikacije.

<br/>

<table>
  <tr>
    <td valign="top">
       <img src="../images/screenshots/hr/sidebar.png" alt="Bočna traka aplikacije" style="max-width: 100%; border: 1px solid #ddd; border-radius: 4px;">
    </td>
    <td valign="top">
      <br/><br/>
      <ul>
        <li><strong>Prevedi</strong> otvara radno područje za prijevod.</li><br/>
        <li><strong>Prepiši</strong> otvara radno područje za prepisivanje.</li><br/>
        <li><strong>Transformiraj</strong> otvara radno područje za prilagođene upite.</li><br/>
        <li><strong>Nadzorna ploča</strong> prikazuje informacije o korištenju i troškovima.</li><br/>
        <li><strong>Postavke</strong> otvara ploču postavki.</li><br/>
        <li><strong>Povijest</strong> prikazuje povijest korištenja s ulaznim i izlaznim tekstom.</li><br/>
        <li><strong>Korisnik</strong> prikazuje korisničko ime prijavljenog korisnika (samo na webu).</li>
      </ul>
    </td>
  </tr>
</table>

<br/>

<a id="toolbar"></a>

### Traka s alatima

Traka s alatima malo varira ovisno o tome gdje ste unutar aplikacije.

- S lijeve strane prikazuje naziv trenutačne stranice.
- S desne strane prikazuje **odabir modela** i upravljanje **jezikom sučelja**.

**Odabir modela** omogućuje vam odabir AI motora za trenutačni zadatak.

  ![Odabir modela](../images/screenshots/hr/model-selector.png)

Neke besplatne modele možda neće uvijek biti dostupne – ponekad su offline ili imaju ograničenje korištenja. Ako se to dogodi, aplikacija će automatski ukloniti taj model s dostupnog popisa. Da biste upravljali kojim se modelima prikazuju, idite na [**Postavke** > **Modeli**](#models) i uredite svoj popis modela. 
Također možete otvoriti postavke modela izravno klikom na ikonu davatelja usluge s lijeve strane naziva modela na traci s alatima.

<br/>

**Ikona zemaljske kugle + kôd jezika** mijenja jezik aplikacijskog sučelja, poput izbornika i gumba. **Ne mijenja** jezike prevođenja koji se koriste u izborniku **Prevedi**.

  ![Odabir jezika sučelja](../images/screenshots/hr/language-selector.png)

<br/>

<a id="input-and-output-panels"></a>
### Ulazni i izlazni paneli

Većina radnih prostora koristi ulazni panel s lijeve strane i izlazni panel s desne strane.

Svaki panel prikazuje i sljedeće:

| **Ulaz**                                                            | **Izlaz**                                                                                                                    |
|---------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------|
| - Broj znakova <br/>- Broj riječi <br/>- Broj odlomaka          <br/> | - Vrijeme trajanja zadatka<br/>- **TPS** (tokena po sekundi)<br/>- Broj znakova, riječi i odlomaka<br/>- Korišteni model |


Ako se pitate o tehničkim izrazima:

- **Token** znači mali dio teksta. Možete to shvatiti kao dio riječi ili kratku riječ.
- **TPS** znači koliko takvih dijelova teksta model obradi u jednoj sekundi.

<br/>

Možete također pratiti trošak svake operacije (ako je dostupan) i ukupni trošak, uključivanjem opcije `Prikaži informacije o trošku radnji` u [**Postavkama** > **Opće postavke**](#general-settings). 
 
<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="translate"></a>
## Prevedi

Koristite **Prevedi** kada želite pretvoriti tekst s jednog jezika na drugi.

![Radni prostor Prevedi](../images/screenshots/hr/translate.png)

<br/>

<a id="translate-text"></a>
### Prevedite tekst

1. Otvorite **Prevedi**.
2. Odaberite jezik u **S**.
3. Odaberite jezik u **Na**.
4. Odaberite model na traci s alatima.
5. Upišite ili zalijepite tekst u **Ulaz**.
6. Kliknite **Prevedi**.
7. Pročitajte rezultat u **Izlazu**.
8. Koristite gumb za kopiranje ako želite kopirati rezultat.

<br/>

<a id="language-selection"></a>
### Odabir jezika

- **S** može biti određeni jezik ili **Otkrij jezik**.
- **Na** je jezik u koji želite dobiti rezultat.

Vaši odabrani **Vrhunski jezici** pojavljuju se na vrhu popisa. Možete ih postaviti u [**Postavkama** > **Jezici**](#languages).

<br/>

<a id="helpful-translation-settings"></a>
### Korisne postavke prevođenja

U [**Postavkama** > **Opće postavke**](#general-settings) možete promijeniti kako se prevođenje ponaša:

- **Automatski prevedi nakon lijepljenja** automatski započinje prevod nakon što zalijepite tekst.
- **Automatski kopiraj rezultat u međuspremnik** automatski kopira rezultat nakon uspješnog prevođenja.
- **Trenutno prevodjenje (tijekom tipkanja)** pokreće prevode dok tipkate.
- **Vrijeme čekanja (ms)** određuje koliko dugo aplikacija čeka prije nego što pokrene trenutno prevođenje.
- **Enter** određuje što će se dogoditi kada pritisnete `Enter`:

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="rewrite"></a>
## Prepiši

Koristite **Prepiši** za poboljšanje formulacije bez promjene osnovnog značenja.

![Radni prostor Prepiši](../images/screenshots/hr/rewrite.png)

Ovo je korisno za:

- ispravljanje pravopisa i gramatike
- učinkovitiji tekst
- prilagodbu formalnosti teksta (formalniji ili neformalniji)
- skraćivanje ili proširivanje teksta
- činjenje teksta tehničkijim

<br/>

> 💡 **SAVJET**<br/>
> Kada koristite način "**Provjera pravopisa i gramatike**", u izlaznom panelu pojavi se gumb `Prikaži izmjene`.
> Kliknite ovaj gumb da uključite/isključite prikaz ispravki, prikazujući ili sakrivajući točne izmjene učinjene u vašem tekstu.


<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="transform"></a>

## Transformacija

Koristite **Transformaciju** kada želite da umjetna inteligencija slijedi vaša prilagođena uputstva.

![Radno područje transformacije](../images/screenshots/hr/transform.png)

Ovo je najprilagodljivije područje aplikacije. Možete je koristiti za zadatke kao što su:

- sažimanje bilješki
- pretvaranje grubog teksta u korektnu e-poštu
- izdvajanje ključnih točaka
- pretvaranje teksta u određeni format
- bilo koja druga prilagođena aktivnost s ulaznim tekstom

<br/>

<a id="run-an-existing-prompt"></a>
### Pokretanje postojeće upute

1. Otvorite **Transformaciju**.
2. Odaberite uputu s popisa uputa.
3. Ako se pojavi okvir **Ciljni** jezik, odaberite jezik ako želite.
4. Upišite ili zalijepite tekst u polje **Ulaz**.
5. Kliknite **Transformiraj**.
6. Pročitajte rezultat u **Izlazu**.

<br/>

<a id="if-you-have-no-prompts-yet"></a>
### Ako još nemate nijednu uputu

Ako je vaš popis uputa prazan, kliknite **Učitajte primjere uputa**. Time se dodaju ugrađeni primjeri kako biste mogli odmah početi.

<br/>

> ℹ️ **NAPOMENA**<br/>
> Primjeri uputa su na engleskom jeziku. Nakon što ih učitate, možete urediti uputu te koristiti opciju **Prevedi uputu** kako biste ju preveli na svoj jezik.

<br/>

<a id="create-a-prompt-quickly"></a>
### Brzo stvaranje upute

Najbrži način za stvaranje upute je:

1. Kliknite **Nova uputa**.
2. Kliknite **Generiraj uputu**.
3. Opisite što želite da uputa čini.
4. Odaberite model.
5. Dopustite aplikaciji da stvori skicu za vas.
6. Pregledajte skicu i kliknite **Spremi**.

![Generiraj uputu](../images/screenshots/hr/transform-generate.png)


<br/>

<a id="edit-a-prompt"></a>
### Uređivanje upute

Kada stvarate ili uređujete uputu, urednik se pojavljuje s lijeve strane, a područje za testiranje s desne strane.

![Uređivač uputa transformacije](../images/screenshots/hr/transform-prompt-edit.png)

Glavna polja su:

- **Naziv upute**: naziv koji se prikazuje na popisu uputa.
- **Uputa (neobavezno)**: kratko upozorenje koje se prikazuje korisniku prilikom pokretanja upute.
- **Uloga modela**: opća uloga dodijeljena umjetnoj inteligenciji, npr. 'Vi ste korisne pomoćnik.'
- **Upute modelu (jedna po retku)**: specifična pravila koja AI treba slijediti.
- **Opis izlaza**: kratka riječ kojom se opisuje rezultat, npr. 'sažetak' ili 'prepravak'.
- **Temperatura (0,0 → 1,0)**: ponašanje modela; pogledajte niže.
- **Zatraži ciljni jezik**: dodaje odabir ciljnog jezika prilikom pokretanja upute.

Ako vam je tehnički izraz **Temperatura** nepoznat, razmislite o ovom načinu:

- **Niža** temperatura daje stabilnije i predvidljivije rezultate.
- **Viša** temperatura daje veću raznolikost i kreativnost.

Također možete koristiti:

- **`Generiraj uputu`** za stvaranje nove skice iz jednostavnog opisa
- **`Unaprijedi uputu`** za poboljšanje postojeće upute
- **`Prevedi uputu`** za prevođenje polja uputa

<br/>

> ⚠️ **UPOZORENJE**<br/>
> Kliknite **`Spremi`** prije nego što kliknete **`Natrag na pokretanje`**. Ako se vratite bez spremanja, izgubit ćete promjene.

<br/>

<a id="test-a-prompt-before-using-it"></a>
### Testiranje upute prije korištenja

Ploča za testiranje s desne strane omogućuje isprobavanje uputa s primjerima teksta prije korištenja u svakodnevnom radu.

Ovo je korisno kada:

- stvarate novu uputu
- uspoređujete dvije verzije upute
- želite provjeriti ton, duljinu ili format izlaza

<br/>

> ℹ️ **NAPOMENA**<br/>
> Možete izvoziti i uvoziti spremljene upute u odjeljku [**Postavke** > **Transformacijske upute**](#transform-prompts).

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="dashboard"></a>
## Nadzorna ploča

Koristite **Nadzornu ploču** za pregled korištenja aplikacije i trenutačnih troškova (za naplaćene modele).

![Sažetak nadzorne ploče](../images/screenshots/hr/dashboard-summary.png)


<br/>

> ℹ️ **NAPOMENA**<br/>
> Ako koristite samo besplatne modele, dijagrami vezani uz troškove bit će prazni.

<br/>

<a id="filter-the-data"></a>
### Filtriranje podataka

Koristite gumbe za filtriranje na vrhu za promjenu vremenskog raspona.

![Filteri nadzorne ploče](../images/screenshots/hr/dashboard-filter.png)

<br/>

> ℹ️ **NAPOMENA**<br/>
> Filter **Korisnik** dostupan je samo administratorima u web verziji. Obični korisnici neće vidjeti ovaj filter, a nije dostupan ni u desktop aplikaciji.

<br/>

<a id="dashboard-tabs"></a>

### Kartice nadzorne ploče

- **Pregled** daje vam uvid u korištenje i troškove.
- **Po korištenju** razdvaja aktivnosti po jeziku prijevoda, načinu prepisivanja i upitima za transformaciju.
- **Po modelu** prikazuje koje ste modele koristili i koliko su vam koštali.
- **Po danu** prikazuje dnevne ukupne iznose.
- **Svi pozivi** prikazuje punu povijest poziva i omogućuje izvoz.

<br/>

<a id="export-data"></a>
### Izvoz podataka

Tablice na nadzornoj ploči mogu izvesti podatke u formatima:

- **JSON**
- **CSV**
- **XLSX**

To je korisno ako želite pregledati aktivnosti izvan aplikacije ili podijeliti izvješće.

<br/>

<a id="delete-stored-records-for-a-model"></a>
### Brisanje pohranjenih zapisa za model

U karticama **Po modelu** ili **Svi pozivi**, možete ukloniti pohranjene zapise za model klikom na ikonu "kanta za smeće".

> ⚠️ **UPOZORENJE**<br/>
> Brisanje pohranjenih zapisa nije povratno. Koristite to samo ako ste sigurni da više ne trebate tu povijest.

Da biste obrisali sve podatke ili uklonili zapise na temelju njihove starosti, idite na [**Postavke** > **Praćenje troškova**](#cost-tracking). Tamo ćete pronaći opcije za brisanje svih pohranjenih podataka ili samo podataka starijih od određenog datuma.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="history"></a>
## Povijest

Kliknite na **Povijest** da biste vidjeli povijest svojih radnji unutar **Transrewrt**, uključujući ulazne i izlazne podatke svake operacije.

![Stranica povijesti](../images/screenshots/hr/history.png)

<br/>

<a id="filter-the-history"></a>
### Filtriranje podataka

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

Otvorite **Postavke** s bočnog izbornika da biste prilagodili ponašanje aplikacije.

Dostupne kartice ovise o platformi i vašoj ulozi:

  | Kartica               | Desktop | Web (admin) | Web (običan korisnik) |
  |-----------------------|:-------:|:-----------:|:---------------------:|
  | Opće postavke         |   da    |      da     |          da           |
  | Modeli                |   da    |      da     |          da           |
  | Jezici                |   da    |      da     |          da           |
  | Praćenje troškova     |   da    |      da     |           —           |
  | Upiti za transformaciju |   da  |      da     |          da           |
  | Korisnici             |   —     |      da     |           —           |
  | API konfiguracija     |   da    |      da     |           —           |
  | O aplikaciji          |   da    |      da     |          da           |

<br/>

> ℹ️ **NAPOMENA**<br/>
> U web verziji, svaki korisnik ima svoju konfiguraciju. Postavke poput odabranih modela, jezika, općih opcija i upita za transformaciju pohranjuju se po korisniku. Izmjene koje napravite ne utječu na druge korisnike.

<br/>


[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="general-settings"></a>
### Opće postavke

Koristite **Opće postavke** za upravljanje ponašanjem tipkanja, pohranjivanjem detalja izvođenja za **Povijest** i izgledom aplikacije.

**Ponašanje**

- **Ponašanje tipke ENTER** određuje hoće li `Enter` pokrenuti zadatak ili umetnuti novi redak.
- **Automatski prijevod pri lijepljenju** pokreće prijevod čim zalijepite tekst.
- **Automatsko kopiranje rezultata u međuspremnik** automatski kopira uspješne rezultate.
- **Prijevod u stvarnom vremenu (tijekom tipkanja)** prijevodi tijekom tipkanja.
- **Vrijeme čekanja (ms)** postavlja vrijeme čekanja za prijevod u stvarnom vremenu.

**Povijest**

- **Spremanje povijesti izvođenja** upravlja tim da li svaki prijevod, prepisivanje i transformacija spremaju **ulazni i izlazni tekst** za prikaz [**Povijesti**](#history) u bočnom izborniku. Isključivanje ove opcije zahtijeva potvrdu; ako potvrdite, spremljeni tekst povijesti uklanja se iz baze podataka.
- **Brisanje podataka povijesti** omogućuje uklanjanje pohranjenog teksta po starosti (npr. starijih od nekoliko mjeseci, ili **svih podataka (čišćenje)**) korištenjem opcije **Izbriši podatke**. To utječe isključivo na spremljeni tekst izvođenja za prikaz **Povijesti**; **ne briše** podatke o troškovima ili ukupnom korištenju. Da biste uklonili ili smanjili podatke o **troškovima**, koristite [**Postavke** > **Praćenje troškova**](#cost-tracking).

**Izgled**

- **Prikaz informacija o troškovima na radnjama** upravlja prikazom troška po operaciji (ako je dostupno) i ukupnog troška na pločama izlaza za Prijevod, Prepisivanje i Transformaciju.
- **Broj decimalnih mjesta troška** mijenja kako će se prikazivati decimale troška.
- **Samo web:** **prikaži marginu oko aplikacije** dodaje dodatni prostor oko sučelja.
- **Obitelj fonta** mijenja font za tekst u tekstualnim poljima.
- **Veličina** mijenja veličinu fonta.


<br/>

<a id="models"></a>

### Modeli

Koristite **Postavke** > **Modeli** da odaberete koji modeli pojavljuju u alatnoj traci.

![Kartica modela u postavkama](../images/screenshots/hr/settings-models.png)

Stranica sadrži dvije liste:

- **Dostupni modeli** s lijeve strane
- **Odabrani modeli** s desne strane

Korisni alati uključuju:

- **Pretraži modele...** da pronađete model po imenu
- žariće **Davatelj usluge** za sužavanje liste na jedan motor (OpenRouter, OpenAI, Ollama, …)
- **Samo besplatni** za prikaz samo besplatnih modela
- **Osvježi** za ponovno učitavanje liste
- **Proširi sve** i **Sažmi sve** kada sortirate po davatelju usluge

Identifikatori modela uključuju prefiks davatelja usluge (npr. `openrouter/…` nasuprot `openai/…`). Značke poput **OpenAI (OpenRouter)** nasuprot **OpenAI (izravno)** pokazuju kako se promet usmjerava.

> ℹ️ **NAPOMENA**<br/>
> **OpenRouter Body Builder** (`openrouter/bodybuilder`) je usmjerivački model, a ne opći chat model: njegov odgovor je JSON koji opisuje tijela zahtjeva API-ja OpenRouter-a (npr. niz `requests` s `model` i `messages`). Ako koristite ovaj model za **Prijevod**, **Preuređivanje** ili **Transformaciju**, izlazni panel će prikazati taj JSON umjesto gotovog teksta. Za ove zadatke odaberite normalan tekstualni model. Pogledajte [stranicu modela Body Builder](https://openrouter.ai/openrouter/bodybuilder) na OpenRouter-u.

Radnje:

 - Za dodavanje modela, kliknite **Dodaj** ili bilo gdje na zapisu.

 - Za uklanjanje modela, kliknite **X** pored njega u **Odabranim modelima** ili **Odaberi** u dostupnim modelima.

 - Za brisanje liste, kliknite **Odznači sve**. Obavezni besplatni model ostat će u listi.

<br/>

> ℹ️ **NAPOMENA**<br/>
> Ako ne želite odmah dodati kredite na OpenRouter, započnite uključivanjem **Samo besplatni** i odabirom besplatnih modela (kreditna kartica nije potrebna). Također možete koristiti Ollama za pokretanje modela lokalno bez bilo kakvog API ključa.

<br/>

<a id="languages"></a>
### Jezici

Koristite **Postavke** > **Jezici** za uređivanje popisa jezika korištenih u aplikaciji.

- **Najčešći jezici** prikvačeni su na vrh popisa jezika u funkcijama **Prijevod** i **Transformacija**.
- **Prilagođeni jezik** omogućuje vam dodavanje jezika koji nije u ugrađenom popisu.

Ako dodate prilagođeni jezik, pojavit će se u odabiračima jezika uz ugrađene opcije.

<br/>

<a id="cost-tracking"></a>
### Praćenje troškova

Koristite **Postavke** > **Praćenje troškova** za upravljanje informacijama o troškovima.

- **Ukupni trošak** prikazuje tekući zbroj.
- **Kopiraj vrijednost** kopira ukupni iznos na međuspremnik.
- **Poništi trošak** postavlja pohranjeni zbroj na nulu.
- **Sinkroniziraj s korištenjem API ključa** postavlja zbroj prema korištenju prikazanom u vašem OpenRouter računu (isključivo za OpenRouter).
- **Korištenje API ključa** prikazuje pojedinosti o korištenju OpenRouter-a, ako su dostupne.
- **Izbriši podatke o troškovima** uklanja sve podatke ili samo one starije od odabranog datuma.

**Praćenje troškova:** Kada koristite modele OpenRouter-a, aplikacija prikazuje stvarno korištenje i izdatke temeljene na cijenama koje nudi OpenRouter. Za sve druge davatelje usluga aplikacija procjenjuje troškove na temelju cijena objavljenih od strane OpenRouter-a; ako cijena nije dostupna, procjena može biti nula.

<br/>

> ℹ️ **NAPOMENA**<br/>
> Svi iznosi su samo procjene u informativne svrhe, a ne službeni računi.

<br/>

> ⚠️ **UPOZORENJE**<br/>
> Brisanje podataka ne može se poništiti. Prije brisanja, obavezno napravite sigurnosnu kopiju podataka ili ih izvezite putem [**Povijest**](#history) 
> ili [**Nadzorna ploča** > **Svi pozivi**](#dashboard-tabs), inače će trajno biti izgubljeni.
> Sva povijest ulaza/izlaza vezana uz svaki unos API poziva također će biti izbrisana.

<br/>

<a id="transform-prompts"></a>
### Prompts za transformaciju

Koristite **Postavke** > **Prompts za transformaciju** za masovno upravljanje upitima.

Možete:

- pregledati spremljene upite
- izbrisati upite
- uvesti upite iz datoteke
- izvesti upite za sigurnosnu kopiju ili dijeljenje

<br/>

<a id="users"></a>
### Korisnici

Koristite **Korisnici** za upravljanje korisničkim računima u web verziji. Možete dodavati korisnike, ažurirati njihove podatke, resetirati lozinke te brisati račune.

<br/>

<a id="api-config"></a>
### Konfiguracija API-ja

Podržani davatelji usluga su: OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras i **Ollama** (lokalni modeli putem osnovnog URL-a). Potrebno je konfigurirati samo davatelje koje koristite.

**Web aplikacija: samo administrator**

API ključevi konfiguriraju se kroz sistemsku ili Docker okolišne varijable — ne unose se preko web sučelja. Ova stranica prikazuje koji davatelji imaju konfiguriran ključ i omogućuje testiranje svakog ključa klikom na gumb **`Test`**.

<br/>

> ℹ️ **NAPOMENA**<br/>
> Za promjenu API ključa, ažurirajte odgovarajuću okolišnu varijablu u sustavskoj ili Docker konfiguraciji te ponovo pokrenite poslužitelj ili spremnik.

<br/>

**Desktop aplikacija**

Koristite **Konfiguraciju API-ja** za pohranu API ključeva za svakog davatelja usluga kojeg koristite. Za Ollama, umjesto API ključa unesite **osnovni URL**.

<br/>

> 💡 **Savjet** <br/>
> Ako ne želite koristiti API ključeve ili plaćati za korištenje, možete [preuzeti Ollama](https://ollama.com) i besplatno pokretati modele (poput `translategemma:4b`) lokalno na svojem uređaju. Alternativno, možete kreirati besplatni OpenRouter račun (kreditna kartica nije potrebna) za korištenje njihovih besplatnih modela, ili dobiti besplatni API ključ od Cerebras, Google, Groq ili Mistral AI.

<br/>

- Dodajte samo davatelje koje trebate. U **Postavkama** > **Modelima**, svaki ID modela počinje imenom davatelja (npr. `openrouter/openrouter/free`, `openai/gpt-4o`, `ollama/llama3`).

Za dodavanje API ključa, unesite vrijednost u tekstualno polje te kliknite **`Spremi`**. Da biste zamijenili postojeći ključ, kliknite **`Uredi`**. Da biste provjerili funkcionira li ključ, kliknite **`Test`**. Za Ollama osnovni URL, uvijek kliknite **`Test`** da provjerite vezu.

<br/>

> ℹ️ **NAPOMENA**<br/>
> Trenutačnu vrijednost API ključa ne možete vidjeti. Možete je samo zamijeniti pomoću gumba **`Uredi`**.
> API ključevi pohranjuju se šifrirano u konfiguraciji.

<br/>

<a id="about"></a>

### O aplikaciji

Kartica **O aplikaciji** prikazuje:

- naziv aplikacije
- broj verzije
- datum izrade
- poveznicu na repozitorij projekta

<br/><br/>

<a id="common-issues"></a>
## Uobičajeni problemi

Ako nešto ne radi kako treba, prvo provjerite sljedeće točke.

<br/>

<a id="the-app-will-not-translate-rewrite-or-transform-text"></a>
### Aplikacija ne prevodi, ne prepisuje niti pretvara tekst

Provjerite sljedeće:

- odabrali ste model u alatnoj traci
- barem jedan model je naveden u odjeljku [**Postavke** > **Modeli**](#models)
- vaša API postavka ispravno funkcionira

Ako koristite stolnu aplikaciju:

1. Otvorite [**Postavke** > **Konfiguracija API-ja**](#api-config).
2. Provjerite je li spremljen barem jedan API ključ.
3. Kliknite **Test** pokraj davatelja usluge kako biste potvrdili da ključ ispravno funkcionira.

<br/>

<a id="the-model-list-is-empty"></a>
### Popis modela je prazan

Otvorite [**Postavke** > **Modeli**](#models) i kliknite **Osvježi**.

Ako je potrebno:

- potražite model
- uključite mogućnost **Samo besplatni**
- dodajte jedan ili više modela u **Odabrane modele**

<br/>

<a id="the-result-is-too-slow-or-too-expensive"></a>
### Rezultat je pre spor ili pre skup

Pokušajte jedno ili više od sljedećeg:

- odaberite drugi model
- koristite kraći unos
- isključite **Prijevod u stvarnom vremenu (tijekom tipkanja)** u odjeljku [**Postavke** > **Opće postavke**](#general-settings)
- koristite besplatne modele za jednostavne zadatke (pogledajte [Modeli](#models))

<br/>

<a id="the-interface-is-in-the-wrong-language"></a>
### Sučelje je na pogrešnom jeziku

Kliknite ikonu globusa u [alatnoj traci](#toolbar) i odaberite željeni **jezik sučelja**.

<br/>

<a id="the-text-is-too-small-or-hard-to-read"></a>
### Tekst je premalen ili teško ga je pročitati

Otvorite [**Postavke** > **Opće postavke**](#general-settings) i promijenite:

- **Obitelj fonta**
- **Veličinu**

<br/>

<a id="dashboard-charts-are-empty"></a>
### Grafikoni na nadzornoj ploči su prazni

To je normalno ako:

- koristite samo **besplatne modele** (dijagrami troškova će biti prazni)
- odabrani filtar **vremena** ne pokriva razdoblje kada su napravljeni pozivi — pokušajte odabrati **Sve** kako biste provjerili

Ako su grafikoni i dalje prazni nakon što odaberete **Sve**, provjerite pojavljuju li se pozivi u [**Povijesti**](#history) ili u kartici **Svi pozivi**.

<br/>

<a id="cost-shows-not-available-or-seems-wrong"></a>
### Trošak prikazuje "nije dostupan" ili izgleda netočno

Kada koristite modele putem **OpenRoutera**, aplikacija prikazuje stvarne troškove koje izvještava OpenRouter.

Za **druge davatelje usluga** (izravno OpenAI, izravno Anthropic itd.), troškovi se procjenjuju na temelju cijena koje objavljuje OpenRouter. Ako za model nije pronađena odgovarajuća cijena, trošak će se prikazati kao **nije dostupan** i neće se dodati na vaš ukupni trošak.

<br/>

<a id="total-cost-does-not-match-my-provider-bill"></a>
### Ukupni trošak se ne podudara s računom davatelja usluga

Svi iznosi u aplikaciji su **procijenjeni samo kao referenca**, a ne službeni računi za naplatu.

Da biste ukupni trošak približili stvarnom trošku na OpenRouteru, otvorite [**Postavke** > **Praćenje troškova**](#cost-tracking) i kliknite **Sinkroniziraj s korištenjem API ključa**.

<br/>

<a id="the-history-page-is-missing-from-the-sidebar"></a>
### Stranica Povijest nedostaje s bočne trake

Postavka **Zadrži povijest izvršavanja** može biti isključena. Otvorite [**Postavke** > **Opće postavke**](#general-settings) i uključite je. Imajte na umu da uključivanje ove postavke neće vratiti ranije izbrisane podatke povijesti.

<br/>

<a id="web-app-session-expired"></a>
### Web aplikacija: preusmjerena na stranicu za prijavu iznenada

Vaša sesija možda je istekla. Prijavite se ponovno. Ako se to događa često, provjerite konfiguraciju poslužitelja vezano uz postavke trajanja sesije.

<br/>

<a id="dashboard-shows-no-data-for-other-users"></a>
### Nadzorna ploča ne prikazuje podatke za druge korisnike (web)

Samo **administratori** mogu pregledavati podatke svih korisnika preko filtera **Korisnik**. Redovni korisnici vide samo svoje aktivnosti, što je u skladu s projektiranjem.

<br/>

<a id="i-changed-a-prompt-and-lost-the-edits"></a>
### Izmijenio sam upit i izgubio izmjene

Tijekom uređivanja upita, uvijek kliknite **Spremi** prije nego što kliknete **Natrag na pokretanje**.

<br/><br/>

<a id="quick-tips"></a>
## Brzi savjeti

- Počnite s [**Prijevodom**](#translate) kako biste osigurali da vam je postavka ispravna prije nego što prijeđete na [**Prepisi**](#rewrite) ili [**Pretvori**](#transform).
- Koristite [**Prepisi**](#rewrite) za svakodnevna poboljšanja izraza.
- Koristite [**Pretvori**](#transform) kada vam treba ponovljiv tijek rada za određeni zadatak.
- Koristite [**Nadzorne ploče**](#dashboard) ako želite pratiti korištenje i troškove.
- Koristite [**Povijest**](#history) za pregled prijašnjih operacija i cijelog unosa/izlaza teksta.
- Redovito izvozite upite ako gradite biblioteku upita koju želite sačuvati (pogledajte [Pretvori upite](#transform-prompts)) ili ako ih želite podijeliti s drugima.

<br/><br/>

<a id="disclaimer"></a>

## Odricanje od odgovornosti

Nazivi proizvoda i ikone pripadaju svojim vlasnicima i koriste se isključivo u svrhu identifikacije. Ovaj softver nije povezan s bilo kojim od spomenutih brendova niti im je odobren od njih.

<br/><br/>

<a id="license"></a>
## Licenca

Autorska prava © 2026. Waldemar Scudeller Jr.

[Apache licenca 2.0](LICENSE)