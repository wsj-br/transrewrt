---
translated_at: "2026-03-24T01:14:28.064Z"
source_hash: "fc671c16dd34a2c355752935670712beb8abd2ae65453de44983a2f2f0701696"
source_mtime: 1774306679773.736
model: "qwen/qwen3-235b-a22b-2507"
---
![Transrewrt baner](../images/transrewrt_banner.png)


<a id="transrewrt-user-guide"></a>
# Korisnički vodič

<br/>

<a id="introduction"></a>
## Uvod

Transrewrt vam pomaže raditi sa tekstom na tri glavna načina:

- **Prijevod** - pretvorba teksta s jednog jezika na drugi.
- **Preuređivanje** - redefiniranje teksta u drugačijem stilu, kao što je jasniji, kraći ili formalniji.
- **Transformacija** - obrada teksta pomoću prilagođenih uputa za umjetnu inteligenciju koje se nazivaju upitima (promptima).

<br/>

Ovaj vodič objašnjava kako koristiti aplikaciju nakon što je instalirana i pokrenuta. Za korake tijekom instalacije pogledajte glavni **[README](README.hr.md)**.

<br/>

> ℹ️ **NAPOMENA**<br/>
> Transrewrt je dostupan kao stolna aplikacija za Windows i Linux, te kao samostojeća web aplikacija (self-hosted). Ovaj vodič fokusira se na svakodnevnu upotrebu aplikacije. Ako neka značajka vrijedi samo za jednu verziju, to je jasno naznačeno.

<small>**Pročitajte na drugim jezicima:** [Engleski (UK)](USER-GUIDE.hr.md) · [Portugalski (BR)](USER-GUIDE.pt-BR.md) · [Arapski](USER-GUIDE.ar.md) · [Bengalski](USER-GUIDE.bn.md) · [Katalonski](USER-GUIDE.ca.md) · [Pojednostavljeni kineski](USER-GUIDE.zh-CN.md) · [Tradicionalni kineski](USER-GUIDE.zh-TW.md) · [Hrvatski](USER-GUIDE.hr.md) · [Češki](USER-GUIDE.cs.md) · [Nizozemski](USER-GUIDE.nl.md) · [Engleski (SAD)](USER-GUIDE.en-US.md) · [Filipinski](USER-GUIDE.tl.md) · [Francuski](USER-GUIDE.fr.md) · [Njemački](USER-GUIDE.de.md) · [Grčki](USER-GUIDE.el.md) · [Hindski](USER-GUIDE.hi.md) · [Mađarski](USER-GUIDE.hu.md) · [Talijanski](USER-GUIDE.it.md) · [Japanski](USER-GUIDE.ja.md) · [Javanski](USER-GUIDE.jv.md) · [Korejski](USER-GUIDE.ko.md) · [Malezijski](USER-GUIDE.ms.md) · [Perzijski](USER-GUIDE.fa.md) · [Poljski](USER-GUIDE.pl.md) · [Portugalski (PT)](USER-GUIDE.pt.md) · [Punjabski](USER-GUIDE.pa.md) · [Rumunjski](USER-GUIDE.ro.md) · [Ruski](USER-GUIDE.ru.md) · [Slovački](USER-GUIDE.sk.md) · [Španjolski](USER-GUIDE.es.md) · [Svahili](USER-GUIDE.sw.md) · [Švedski](USER-GUIDE.sv.md) · [Telugu](USER-GUIDE.te.md) · [Tajlandski](USER-GUIDE.th.md) · [Turski](USER-GUIDE.tr.md) · [Ukrajinski](USER-GUIDE.uk.md) · [Vijetnamski](USER-GUIDE.vi.md)</small>

<br/>

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Sadržaj** 

- [Prije nego što krenete](#before-you-start)
  - [Kako do besplatnog OpenRouter API ključa (stolna aplikacija)](#how-to-get-a-free-openrouter-api-key-desktop-app)
- [Početak rada](#getting-started)
- [Glavni dijelovi prozora](#main-parts-of-the-window)
  - [Bočna traka](#sidebar)
  - [Alatna traka](#toolbar)
  - [Ulazni i izlazni paneli](#input-and-output-panels)
- [Prijevod](#translate)
  - [Prijevod teksta](#translate-text)
  - [Odabir jezika](#language-selection)
  - [Korisne postavke prijevoda](#helpful-translation-settings)
  - [Prečaci na tipkovnici](#keyboard-shortcuts)
- [Preuređivanje](#rewrite)
  - [Preuređivanje teksta](#rewrite-text)
- [Transformacija](#transform)
  - [Pokretanje postojećeg upita](#run-an-existing-prompt)
  - [Ako još nemate upite](#if-you-have-no-prompts-yet)
  - [Brzo stvaranje upita](#create-a-prompt-quickly)
  - [Uređivanje upita](#edit-a-prompt)
  - [Testiranje upita prije korištenja](#test-a-prompt-before-using-it)
  - [Upravljanje spremljenim upitima](#manage-saved-prompts)
- [Ploča sa svim podacima](#dashboard)
  - [Filtriranje podataka](#filter-the-data)
  - [Kartice ploče](#dashboard-tabs)
  - [Izvoz podataka](#export-data)
  - [Brisanje spremljenih zapisa za model](#delete-stored-records-for-a-model)
- [Povijest](#history)
  - [Filtriranje podataka](#filter-the-data-1)
  - [Izvoz podataka povijesti](#export-history-data)
- [Postavke](#settings)
  - [Opće postavke](#general-settings)
  - [Modeli](#models)
  - [Jezici](#languages)
  - [Praćenje troškova](#cost-tracking)
  - [Transformacijski upiti](#transform-prompts)
  - [Korisnici](#users)
  - [API postavke](#api-config)
  - [O aplikaciji](#about)
- [Uobičajeni problemi](#common-issues)
  - [Aplikacija ne prevodi, ne preuređuje niti transformira tekst](#the-app-will-not-translate-rewrite-or-transform-text)
  - [Lista modela je prazna](#the-model-list-is-empty)
  - [Rezultat je previše spor ili skup](#the-result-is-too-slow-or-too-expensive)
  - [Sučelje je na pogrešnom jeziku](#the-interface-is-in-the-wrong-language)
  - [Tekst je premalen ili teško čitljiv](#the-text-is-too-small-or-hard-to-read)
  - [Dijagrami na ploči su prazni](#dashboard-charts-are-empty)
  - [Trošak prikazuje „nije dostupan“ ili je pogrešan](#cost-shows-not-available-or-seems-wrong)
  - [Ukupni trošak se ne podudara sa računom provajdera](#total-cost-does-not-match-my-provider-bill)
  - [Stranica Povijest nedostaje u bočnoj traci](#the-history-page-is-missing-from-the-sidebar)
  - [Web aplikacija: neočekivano preusmjeravanje na stranicu za prijavu](#web-app-redirected-to-the-login-page-unexpectedly)
  - [Ploča ne prikazuje podatke za druge korisnike (web)](#dashboard-shows-no-data-for-other-users-web)
  - [Promijenio sam upit i izgubio izmjene](#i-changed-a-prompt-and-lost-the-edits)
- [Brzi savjeti](#quick-tips)
- [Pravna odricanja](#disclaimer)
- [Licenca](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="before-you-start"></a>

## Prije nego što započnete

Kako biste koristili Transrewrt, potreban vam je pristup barem jednom AI pružatelju usluga. Podržani pružatelji su: [OpenRouter](https://openrouter.ai) (koji nudi mnoge modele), OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI te [Ollama](https://ollama.com) za lokalne modele.

Ne morate odabrati plaćeni model da biste započeli. Čim unesete svoj OpenRouter API ključ, aplikacija automatski omogućuje ugrađenu **besplatnu** OpenRouter opciju. To vam omogućuje trenutno prevođenje, prepisivanje i transformaciju teksta.

Jednostavnim riječima:

- **Model** je AI motor koji obavlja posao. Modeli se prikazuju s **prefiksom davatelja usluge** (npr. `openrouter/…`, `openai/…`, `ollama/…`).
- **API ključ** (ili za Ollamу, **temeljni URL**) je način kojim aplikacija komunicira s tim davateljem usluga.

Ako koristite **desktop aplikaciju**, dodajte ključeve u odjeljku [**Postavke** > **API konfiguracija**](#api-config) za svakog davatelja kojeg koristite. Ako koristite isključivo OpenRouter, pogledajte upute u nastavku [Kako dobiti API ključ](#how-to-get-an-api-key-desktop-app). Ako ne želite koristiti API ključ, možete instalirati Ollamu (s [ollama.com](https://ollama.com)) i koristiti lokalne modele.

Ako koristite **web verziju**, vlasnik poslužitelja konfigurira davatelje korištenjem okolišnih varijabli, pa obično nećete sami unositi API ključeve.

<br/>

<a id="how-to-get-an-api-key-desktop-app"></a>
### Kako dobiti besplatni OpenRouter API ključ (desktop aplikacija)

Ako koristite desktop aplikaciju, slijedite ove korake:

1. Otvorite [OpenRouter](https://openrouter.ai) u svom web pregledniku.
2. Stvorite račun ili se prijavite.
3. Otvorite stranicu [Keys](https://openrouter.ai/keys).
4. Kliknite tipku za stvaranje novog API ključa.
5. Dajte ključu naziv kako biste ga mogli prepoznati u budućnosti.
6. Kopirajte novi API ključ.
7. Vratite se u Transrewrt i otvorite **Postavke** > **API konfiguracija**.
8. Zalijepite ključ u polje **OpenRouter API ključ** (ispod **Postavke** > **API konfiguracija**).
9. Kliknite **Testiraj OpenRouter ključ** kako biste provjerili radi li ispravno.

<br/>

> ℹ️ **NAPOMENA**<br/>
> Možete započeti besplatnim putem kroz OpenRouter ili bilo kojim drugim dostupnim besplatnim modelom, bez dodavanja kreditne kartice. U mnogim slučajevima, to je dovoljno za početak rada s Transrewrt-om, bez potrebe za odabirom plaćenog modela. Alternativno, možete koristiti Ollamu za pokretanje modela lokalno, bez potrebe za API ključem.

<br/><br/>

<a id="getting-started"></a>
## Prvi koraci

Ako prvi put koristite Transrewrt, slijedite ovaj redoslijed:

1. Otvorite aplikaciju.
2. Po želji odaberite svoj **jezik sučelja** s ikonom zemaljskog globusa.
3. Ako koristite **desktop aplikaciju**, otvorite [**Postavke** > **API konfiguracija**](#api-config), dodajte API ključ barem za jednog davatelja usluga (npr. za OpenRouter) te kliknite **Testiraj** kako biste provjerili funkcionira li.
4. Otvorite [**Postavke** > **Modeli**](#models) i dodajte jedan ili više modela u **Odabrane modele**.
5. Otvorite [**Postavke** > **Jezici**](#languages) i odaberite svoje **Prve jezike**, ako želite da se najčešće korišteni jezici prikazuju prvi.
6. Idite na **Prijevodi** i izvršite jednostavno prevođenje kako biste potvrdili da sve ispravno radi.
7. Kada to uspije, pokušajte s **Prepisivanjem**, a zatim i s **Transformacijom**.

Redoslijed je važan. On spriječava najčešći problem kod prvog korištenja: pokušaj pokretanja zadatka prije nego što aplikacija ima radnu API vezu ili odabran model.

<br/><br/>

<a id="main-parts-of-the-window"></a>
## Glavni dijelovi prozora

Aplikacija je podijeljena u tri glavna područja:

- **Bočni trak** s lijeve strane.
- **Alatna traka** na vrhu.
- **Radno područje** u središtu.

<br/>

<a id="sidebar"></a>
### Bočni trak

Koristite bočnu traku za kretanje kroz aplikaciju. Možete smanjiti bočnu traku kako biste oslobodili više prostora klikom na ikonu uz logotip aplikacije.

<br/>

<table>
  <tr>
    <td valign="top">
       <img src="../images/screenshots/hr/sidebar.png" alt="Bočna traka aplikacije" style="max-width: 100%; border: 1px solid #ddd; border-radius: 4px;">
    </td>
    <td valign="top">
      <br/><br/>
      <ul>
        <li><strong>Prevod</strong> otvara radno područje za prevođenje.</li><br/>
        <li><strong>Prepisi</strong> otvara radno područje za prepisivanje.</li><br/>
        <li><strong>Transformiraj</strong> otvara radno područje za prilagođene upite.</li><br/>
        <li><strong>Nadzorna ploča</strong> prikazuje informacije o korištenju i troškovima.</li><br/>
        <li><strong>Postavke</strong> otvaraju ploču s postavkama.</li><br/>
        <li><strong>Povijest</strong> prikazuje povijest korištenja s ulaznim i izlaznim tekstom.</li><br/>
        <li><strong>Korisnik</strong> prikazuje korisničko ime prijavljenog korisnika (samo za web verziju).</li>
      </ul>
    </td>
  </tr>
</table>

<br/>

<a id="toolbar"></a>

### Alatna traka

Alatna traka se neznatno mijenja ovisno o tome gdje ste u aplikaciji.

- S lijeve strane prikazuje naziv trenutne stranice.
- S desne strane prikazuje **odabir modela** i upravljački element za **jezik sučelja**.

**Odabir modela** omogućuje vam da odaberete koji AI motor ćete koristiti za trenutni zadatak.

  ![Odabir modela](../images/screenshots/hr/model-selector.png)

> ℹ️ **NAPOMENA**<br/>
> Neke besplatne modele možda neće uvijek biti dostupne — ponekad su offline ili imaju ograničenje u korištenju. Ako se to dogodi, aplikacija će automatski ukloniti taj model s vašeg popisa dostupnih.<br/>
> Da biste upravljali modelima koji se prikazuju, idite na [**Postavke** > **Modeli**](#models) i uredite svoj popis modela.  
> Također možete otvoriti postavke modela izravno tako da kliknete ikonu davatelja usluge s lijeve strane naziva modela na alatnoj traci.

<br/>

**Ikona zemaljskog globusa + oznaka jezika** mijenjaju jezik korisničkog sučelja, kao što su izbornici i tipke. To **ne mijenja** jezike prevođenja korištene u funkciji **Prevođenje**.

  ![Odabir jezika sučelja](../images/screenshots/hr/language-selector.png)

<br/>

<a id="input-and-output-panels"></a>
### Ulazni i izlazni okviri

Većina radnih prostora koristi lijevi **Ulazni** okvir i desni **Izlazni** okvir.

**Ulazni** okvir prikazuje:

- Broj znakova
- Broj riječi
- Broj odlomaka

**Izlazni** okvir može prikazati:

- Vrijeme potrebno za izvršenje zadatka
- Trošak zadatka (ako je dostupno)
- Ukupne tekuće troškove
- **TPS** (tokeni po sekundi)
- Broj znakova, riječi i odlomaka
- Korišteni model

Ako niste sigurni što znače tehnički izrazi:

- **Token** označava mali dio teksta. Možete ga shvatiti kao dio riječi ili kratku riječ.
- **TPS** znači koliko se takvih dijelova teksta obrađuje svake sekunde.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="translate"></a>
## Prevođenje

Koristite funkciju **Prevođenje** kada želite prevesti tekst s jednog jezika na drugi.

![Radni prostor Prevođenja](../images/screenshots/hr/translate.png)

<br/>

<a id="translate-text"></a>
### Prevođenje teksta

1. Otvorite **Prevođenje**.
2. Odaberite jezik u polju **S**.
3. Odaberite jezik u polju **Na**.
4. Odaberite model na alatnoj traci.
5. Upišite ili zalijepite tekst u **Ulazni** okvir.
6. Kliknite **Prevedi**.
7. Pročitajte rezultat u **Izlaznom** okviru.
8. Iskoristite gumb za kopiranje ako želite kopirati rezultat.

<br/>

<a id="language-selection"></a>
### Odabir jezika

- **S** može biti određeni jezik ili **Otkrivanje jezika**.
- **Na** je jezik u koji želite prevesti.

Vaši odabrani **najčešći jezici** pojavljuju se na vrhu popisa. Možete ih postaviti u [**Postavke** > **Jezici**](#languages).

<br/>

<a id="helpful-translation-settings"></a>
### Korisne postavke prevođenja

U dijelu [**Postavke** > **Opće postavke**](#general-settings) možete promijeniti ponašanje prevođenja:

- **Automatski prevedi nakon lijepljenja** pokreće prevođenje čim zalijepite tekst.
- **Automatski kopiraj rezultat u međuspremnik** kopira rezultat odmah nakon uspješnog prevođenja.
- **Prevođenje u stvarnom vremenu (tijekom pisanja)** pokreće prevođenje dok pišete.
- **Istek (ms)** određuje koliko dugo aplikacija čeka prije nego pokrene prevođenje u stvarnom vremenu.

<br/>

<a id="keyboard-shortcuts"></a>
### Prečaci na tipkovnici

U dijelu [**Postavke** > **Opće postavke**](#general-settings), opcija **Ponašanje tipke ENTER** određuje što se događa kad pritisnete `Enter`:

- **Enter** može pokrenuti zadatak, dok **Shift+Enter** dodaje novi redak.
- Ili aplikacija može raditi obrnuto.

Trenutni način rada također je prikazan na tipki **Prevedi**.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="rewrite"></a>
## Prepisivanje

Koristite **Prepisivanje** kad želite poboljšati redak bez da mijenjate glavno značenje.

![Radni prostor Prepisivanja](../images/screenshots/hr/rewrite.png)

Ovo je korisno za:

- ispravljanje pravopisa i gramatike
- učinjivanje teksta jasnijim
- učinjivanje teksta formalnijim ili neformalnijim
- skraćivanje ili proširivanje teksta
- učinjivanje teksta tehničkijim

<br/>

<a id="rewrite-text"></a>

### Prepisi tekst

1. Otvorite **Prepisi**.
2. Odaberite **Način**.
3. Odaberite model u alatnoj traci.
4. Upišite ili zalijepite tekst u polje **Unos**.
5. Kliknite **Prepisi**.
6. Pregledajte rezultat u polju **Izlaz**.

Isto ponašanje tipke Enter opisano u [**Prijevod**](#keyboard-shortcuts) vrijedi i ovdje.

<br/>

> 💡 **SAVJET**<br/>
> Kada koristite način "**Provjeri pravopis i gramatiku**", u izlaznom panelu pojavi se gumb `Pokaži izmjene`.
> Kliknite ovaj gumb da biste uključili ili isključili prikaz ispravaka i prikazali ili sakrili određene izmjene učinjene u vašem tekstu.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="transform"></a>
## Transformiraj

Koristite opciju **Transformiraj** kada želite da AI slijedi skup prilagođenih uputa.

![Radno područje Transformiraj](../images/screenshots/hr/transform.png)

Ovo je najfleksibilniji dio aplikacije. Možete je koristiti za zadatke poput:

- sažimanja bilješki
- pretvaranja sirovog teksta u detaljno uređeni e-poštni unos
- izdvajanja ključnih točaka
- pretvaranja teksta u određeni format

<br/>

<a id="run-an-existing-prompt"></a>
### Pokreni postojeći upit

1. Otvorite **Transformiraj**.
2. Odaberite upit s popisa upita.
3. Ako se pojavi polje za **Ciljni** jezik, odaberite jezik, ako želite.
4. Upišite ili zalijepite tekst u polje **Unos**.
5. Kliknite **Transformiraj**.
6. Pročitajte rezultat u polju **Izlaz**.

<br/>

<a id="if-you-have-no-prompts-yet"></a>
### Ako još nemate upite

Ako je vaš popis upita prazan, kliknite **Učitaj primjere upita**. Time se dodaju ugrađeni primjeri kako biste mogli brzo započeti.

<br/>

> ℹ️ **NAPOMENA**<br/>
> Primjeri upita dostavljaju se na engleskom jeziku. Nakon što ih učitate, možete urediti upit i koristiti opciju **Prevedi upit** kako biste ga preveli na svoj jezik.

<br/>

<a id="create-a-prompt-quickly"></a>
### Brzo stvorite upit

Najbrži način da stvorite upit je:

1. Kliknite **Novi upit**.
2. Kliknite **Generiraj upit**.
3. Opisite što želite da upit radi.
4. Odaberite model.
5. Dopustite aplikaciji da vam generira skicu.
6. Pregledajte skicu i kliknite **Spremi**.

![Generiraj upit](../images/screenshots/hr/transform-generate.png)


<br/>

<a id="edit-a-prompt"></a>
### Uredite upit

Kada stvarate ili uređujete upit, uređivač se pojavljuje s lijeve strane, a područje za testiranje s desne.

![Uređivač upita Transformiraj](../images/screenshots/hr/transform-prompt-edit.png)

Glavna polja su:

- **Naziv upita**: naziv koji se prikazuje na popisu upita.
- **Upute za upit (neobavezno)**: kratka napomena koja se prikazuje korisniku pri pokretanju upita.
- **Uloga modela**: opća uloga dodijeljena AI-u, npr. 'Vi ste koristan pomoćnik.'
- **Upute modela (jedna po retku)**: određena pravila koja AI treba slijediti.
- **Opis izlaza**: kratka riječ koja opisuje rezultat, npr. 'sažetak' ili 'prepis'.
- **Temperatura (0,0 → 1,0)**: ponašanje modela; pogledajte niže.
- **Zatraži ciljni jezik**: dodaje odabir ciljnog jezika kada se upit pokreće.

Ako je tehnički izraz **Temperatura** nov za vas, razmislite o slijedećem:

- **Niža** temperatura daje stabilnije, predvidljivije rezultate.
- **Viša** temperatura daje veću raznolikost i kreativnost.

Također možete koristiti:

- **`Generiraj upit`** za stvaranje nove skice iz jednostavnog opisa
- **`Unaprijedi upit`** za poboljšanje postojećeg upita
- **`Prevedi upit`** za prijevod polja upita

<br/>

> ⚠️ **UPOZORENJE**<br/>
> Kliknite **`Spremi`** prije nego što kliknete **`Natrag na pokretanje`**. Ako se vratite bez spremanja, izgubit ćete promjene.

<br/>

<a id="test-a-prompt-before-using-it"></a>
### Testirajte upit prije korištenja

Testno područje s desne strane omogućuje vam isprobavanje upita na uzorku teksta prije korištenja u svakodnevnom radu.

To je korisno kada:

- stvarate novi upit
- uspoređujete dvije verzije upita
- želite provjeriti ton, duljinu ili format izlaza

<br/>

<a id="manage-saved-prompts"></a>
### Upravljanje spremljenim upitima

Da biste upravljali spremljenim upitima na jednom mjestu, otvorite [**Postavke** > **Transformiraj upite**](#transform-prompts).

Tamo možete:

- popisati i brisati svoje upite
- izvesti upite kao **JSON**, **CSV** ili **XLSX**
- uvesti upite iz datoteke

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="dashboard"></a>

## Nadzorna ploča

Koristite **Nadzornu ploču** da biste vidjeli koliko koristite aplikaciju i koliko vas to košta (za modele koji se naplaćuju).

![Pregled nadzorne ploče](../images/screenshots/hr/dashboard-summary.png)


<br/>

> ℹ️ **NAPOMENA**<br/>
> Ako koristite samo besplatne modele, dijagrami vezani uz troškove bit će prazni.

<br/>

<a id="filter-the-data"></a>
### Filtriranje podataka

Koristite gumbe za filtriranje na vrhu kako biste promijenili vremenski raspon.

![Filteri nadzorne ploče](../images/screenshots/hr/dashboard-filter.png)

<br/>

> ℹ️ **NAPOMENA**<br/>
> Filter **Korisnik** vidljiv je samo administratorima u web verziji. Redovni korisnici neće vidjeti ovaj filter, a nije dostupan ni u desktop aplikaciji.

<br/>

<a id="dashboard-tabs"></a>
### Kartice nadzorne ploče

- **Pregled** daje vam uvid u korištenje i troškove.
- **Po korištenju** razrađuje aktivnost po jeziku prijevoda, načinu prepisivanja i promptu transformacije.
- **Po modelu** prikazuje koje modele ste koristili i koliko su vas koštali.
- **Po danu** prikazuje dnevne ukupne iznose.
- **Svi pozivi** prikazuje potpovijest poziva i omogućuje vam izvoz iste.

<br/>

<a id="export-data"></a>
### Izvoz podataka

Tablice na nadzornoj ploči mogu izvesti podatke u:

- **JSON**
- **CSV**
- **XLSX**

To je korisno ako želite pregledati aktivnosti izvan aplikacije ili podijeliti izvještaj.

<br/>

<a id="delete-stored-records-for-a-model"></a>
### Brisanje pohranjenih zapisa za model

U odjeljcima **Po modelu** ili **Svi pozivi**, možete ukloniti pohranjene zapise za model klikom na ikonu „smeća“.

> ⚠️ **UPOZORENJE**<br/>
> Brisanje pohranjenih zapisa nije povratno. Koristite ovo samo ako ste sigurni da više ne trebate tu povijest.

Da biste obrisali sve podatke ili uklonili zapise prema starosti, idite na [**Postavke** > **Praćenje troškova**](#cost-tracking). Tu ćete pronaći opcije za brisanje svih pohranjenih podataka ili samo onih starijih od određenog datuma.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="history"></a>
## Povijest

Kliknite na **Povijest** da biste vidjeli povijest svojih akcija unutar **Transrewrt-a**, uključujući ulaz i izlaz svake operacije.

![Stranica Povijest](../images/screenshots/hr/history.png)

<br/>

<a id="filter-the-history"></a>
### Filtriranje povijesti

**Povijest** koristi iste filtre kao i stranica **Nadzorne ploče** datraži da biste odabrali vremenski raspon.

![Filteri nadzorne p游戏副本](../images/screenshots/hr/dashboard-filter.png)

<br/>

> ℹ️ **NAPOMENA**<br/>
> Filter **Korisnik** vidljiv je samo administratorima u web verziji. Redovni korisnici neće vidjet SDK  ovaj filter, a nije dostupan ni u desktop aplikaciji.

<br/>

<a id="export-history-data"></a>
### Izvoz podataka povijesti

Stranica povijesti može izvesti filtrirane podatke u:

- **JSON**
- **CSV**
- **XLSX**

To je korisno ako želite pregledati aktivnosti izvan aplikacije ili podijeliti izvještaj.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="settings"></a>
## Postavke

Otvorite **Postavke** s bočne trake da biste prilagodili ponašanje aplikacije.

Dostupne kartice ovise o platformi i vašoj ulozi:

  | Kartica                   | Desktop | Web (admin) | Web (redovni korisnik) |
  |---------------------------|:-------:|:-----------:|:----------------------:|
  | Opće postavke             |   da    |     da      |           da            |
  | Modeli                    |   da    |     da      |           da            |
  | Jezici                    |   da    |     da      |           da            |
  | Praćenje troškova         |   da    |     da      |            —            |
  | Prompti transformacije    |   da    |     da      |           da            |
  | Korisnici                 |    —    |     da      |            —            |
  | Konfiguracija API-ja      |   da    |     da      |            —            |
  | O programu                |   da    |     da      |           da            |

<br/>

> ℹ️ **NAPOMENA**<br/>
> U web verziji, svaki korisnik ima vlastitu konfiguraciju. Postavke poput odabranih modela, jezika, općih opcija i prompta za transformaciju pohranjuju se po korisniku. Promjene koje napravite ne utječu na druge korisnike.

<br/>


[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="general-settings"></a>

### Opće postavke

Koristite **Opće postavke** za upravljanje ponašanjem tipkanja, pohranjivanjem detalja izvršavanja za **Povijest** te izgledom aplikacije.

**Ponašanje**

- **Ponašanje tipke ENTER** određuje hoće li `Enter` pokrenuti zadatak ili umetnuti novi redak.
- **Automatski prijevodi pri umetanju** pokreće prijevod čim zalijepite tekst.
- **Automatski kopiraj rezultat u međuspremnik** automatski kopira uspješne rezultate.
- **Prijevod u stvarnom vremenu (tijekom tipkanja)** prenosi tekst dok kucate.
- **Vrijeme čekanja (ms)** postavlja vrijeme čekanja za prijevod u stvarnom vremenu.

**Povijest**

- **Zadrži povijest izvršavanja** određuje hoće li svaki prijevod, prepisivanje i transformacija pohraniti **ulazni i izlazni tekst** za prikaz [**Povijesti**](#history) u bočnoj traci. Onemogućavanje ove opcije zahtijeva potvrdu; ukoliko potvrdite, pohranjeni tekst povijesti će biti uklonjen iz baze podataka.
- **Izbriši podatke povijesti** omogućuje vam uklanjanje pohranjenih tekstova prema dobi (npr. starijih od nekoliko mjeseci ili **svi podaci (izbriši)**) korištenjem opcije **Izbriši podatke**. To utječe samo na pohranjeni tekst izvršavanja za prikaz **Povijesti**; **ne** briše podatke o troškovima ili ukupnom korištenju. Za uklanjanje ili skraćivanje **podataka o troškovima**, koristite [**Postavke** > **Praćenje troškova**](#cost-tracking).

**Izgled**

- **Decimalna mjesta za trošak** mijenja prikaz decimalnih brojki za trošak.
- **Samo za web:** **prikaži margine oko aplikacije** dodaje dodatni razmak oko sučelja.
- **Obitelj fonta** mijenja font u tekstovnim panelima.
- **Veličina** mijenja veličinu fonta.


<br/>

<a id="models"></a>
### Modeli

Koristite **Postavke** > **Modeli** za odabir modela koji će se pojaviti na alatnoj traci.

![Kartica postavke modela](../images/screenshots/hr/settings-models.png)

Stranica sadrži dvije liste:

- **Dostupni modeli** s lijeve strane
- **Odabrani modeli** s desne strane

Korisni elementi uključuju:

- **Pretraži modele...** za pronalaženje modela po imenu
- **Chips za davatelje usluga** za sužavanje liste na jedan motor (OpenRouter, OpenAI, Ollama, …)
- **Samo besplatni** za prikaz samo besplatnih modela
- **Osvježi** za ponovno učitavanje liste
- **Proširi sve** i **Sažmi sve** dok sortirate po davatelju usluge

Identifikatori modela uključuju prefiks davatelja usluga (npr. `openrouter/…` nasuprot `openai/…`). Oznake poput **OpenAI (OpenRouter)** nasuprot **OpenAI (izravno)** pokazuju kako se promet usmjerava.

Radnje:

- Da biste dodali model, kliknite **Dodaj** ili bilo gdje unutar stavke.

- Da biste uklonili model, kliknite **X** pored njega u **Odabranim modelima** ili na **Odabrani** u stavci Dostupnih modela.

- Da biste očistili listu, kliknite **Poništi sve**. Potreban besplatni model ostaje na listi.

<br/>

> ℹ️ **BILJEŠKA**<br/>
> Ako ne želite odmah dodavati kredite na OpenRouter, započnite omogućivanjem opcije **Samo besplatni** i odabirom besplatnih modela (bez potrebe za kreditnom karticom). Također možete koristiti Ollamu za pokretanje modela lokalno bez bilo kojeg API ključa.

<br/>

<a id="languages"></a>
### Jezici

Koristite **Postavke** > **Jezici** za uređivanje popisa jezika koji se koriste u aplikaciji.

- **Vrhunski jezici** prikvačeni su na vrhu popisa jezika u **Prijevodu** i **Transformaciji**.
- **Prilagođeni jezik** omogućuje vam dodavanje jezika koji nije u ugrađenom popisu.

Ako dodate prilagođeni jezik, on će se pojaviti u izbornicima jezika zajedno s ugrađenim opcijama.

<br/>

<a id="cost-tracking"></a>
### Praćenje troškova

Koristite **Postavke** > **Praćenje troškova** za upravljanje informacijama o troškovima.

- **Ukupni trošak** prikazuje tekući zbroj.
- **Kopiraj vrijednost** kopira ukupan iznos u međuspremnik.
- **Resetiraj trošak** vraća spremljeni ukupni iznos na nulu.
- **Sinkroniziraj s korištenjem API ključa** postavlja zbroj da odgovara prijavljenom korištenju s vašeg OpenRouter računa (samo za OpenRouter).
- **Korištenje API ključa** prikazuje pojedinosti o korištenju OpenRouter-a, ako su dostupne.
- **Izbriši podatke o troškovima** uklanja sve podatke ili samo one starije od određenog datuma.

**Praćenje troškova:** Kada koristite modele OpenRouter-a, aplikacija prikazuje vaše stvarno korištenje i troškove temeljene na podacima s OpenRouter-a. Za sve ostale davatelje usluga, aplikacija procjenjuje troškove koristeći cijene objavljene od strane OpenRouter-a; ako cijena nije dostupna, procjena može biti nula.

<br/>

> ℹ️ **BILJEŠKA**<br/>
> **Svi iznosi troškova su samo procjene radi vaše orijentacije, ne predstavljaju službene naplatne račune.**


<br/>

> ⚠️ **UPOZORENJE**<br/>
> Brisanje podataka nije moguće poništiti. Prije brisanja provjerite jeste li napravili sigurnosnu kopiju ili izvezli svoje podatke putem [**Nadzorne ploče** > **Svi pozivi**](#dashboard-tabs), inače će trajno biti izgubljeni. <br/> 
> Također će biti izbrisana sva povezana povijest pojedinih unosa poziva API-ja.


<br/>

<a id="transform-prompts"></a>

### Transformacija uputa

Koristite **Postavke** > **Transformacija uputa** za skupno upravljanje uputama.

Možete:

- pregledati spremljene upute
- izbrisati upute
- uvesti upute iz datoteke
- izvesti upute za sigurnosnu kopiju ili dijeljenje

<br/>

<a id="users"></a>
### Korisnici

**Web: samo administrator**

Koristite **Korisnici** za upravljanje korisničkim računima u web verziji. Možete dodavati korisnike, ažurirati njihove podatke, poništiti lozinke i brisati račune.

<br/>

<a id="api-config"></a>
### Konfiguracija API-ja

Podržani davatelji usluga su: OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI i **Ollama** (lokalni modeli putem osnovnog URL-a). Potrebno je konfigurirati samo davatelje usluga koje koristite.

**Web aplikacija: samo administrator**

API ključevi se konfiguriraju putem sustavnih ili Docker okolišnih varijabli — ne unose se u web sučelju. Ova stranica prikazuje kojim davateljima usluga je konfiguriran ključ i omogućuje testiranje svakog pojedinog ključa klikom na gumb **`Test`**.

<br/>

> ℹ️ **NAPOMENA**<br/>
> Za promjenu API ključa, ažurirajte okolišnu varijablu u konfiguraciji vašeg sustava ili Docker okruženja te ponovo pokrenite poslužitelj ili spremnik.

<br/>

**Desktop aplikacija**

Koristite **Konfiguraciju API-ja** za pohranu API ključeva za svakog davatelja usluge kojega koristite. Za Ollamu, unesite **osnovni URL** umjesto API ključa.

<br/>

> 💡 **Savjet** <br/>
> Ako ne želite koristiti API ključeve niti plaćati za korištenje, možete [preuzeti Ollamu](https://ollama.com) i besplatno pokretati modele lokalno na svom uređaju. Alternativno, možete kreirati besplatni OpenRouter račun (bez potrebe za kreditnom karticom) kako biste koristili njihove besplatne modele.

- Dodajte samo davatelje usluga koje trebate. U **Postavkama** > **Modeli**, svaki identifikator modela počinje s imenom davatelja usluge (npr. `openrouter/openrouter/free`, `openai/gpt-4o`, `ollama/llama3`).

Za dodavanje API ključa, upišite vrijednost u tekstualno polje i kliknite **`Spremi`**. Za zamjenu postojećeg ključa, kliknite **`Uredi`**. Za provjeru funkcionira li ključ, kliknite **`Test`**.

<br/>

> ℹ️ **NAPOMENA**<br/>
> Trenutnu vrijednost API ključa ne možete vidjeti. Možete je samo zamijeniti pomoću gumba **`Uredi`**.
> API ključevi su pohranjeni šifrirano u konfiguracijskoj datoteci.

<br/>

Za detaljne upute o postupku dobivanja OpenRouter ključa, pogledajte gore [Kako dobiti API ključ](#how-to-get-an-api-key-desktop-app).

<br/>

<a id="about"></a>
### O aplikaciji

Kartica **O aplikaciji** prikazuje:

- naziv aplikacije
- broj verzije
- datum izrade
- poveznicu do repozitorija projekta

<br/><br/>

<a id="common-issues"></a>
## Česti problemi

Ako nešto ne funkcionira kao što očekujete, prvo provjerite sljedeće točke.

<br/>

<a id="the-app-will-not-translate-rewrite-or-transform-text"></a>
### Aplikacija ne prevodi, prepisuje ili transformira tekst

Provjerite:

- odabran li je model u alatnoj traci
- da je barem jedan model naveden u [**Postavkama** > **Modeli**](#models)
- da vaša API konfiguracija ispravno funkcionira

Ako koristite desktop aplikaciju:

1. Otvorite [**Postavke** > **Konfiguracija API-ja**](#api-config).
2. Provjerite je li spremljen barem jedan API ključ.
3. Kliknite **Test** uz davatelja usluge kako biste potvrdili da ključ funkcionira.

<br/>

<a id="the-model-list-is-empty"></a>
### Popis modela je prazan

Otvorite [**Postavke** > **Modeli**](#models) i kliknite **Osvježi**.

Ako je potrebno:

- pretražite model
- uključite opciju **Samo besplatno**
- dodajte jedan ili više modela u **Odabrane modele**

<br/>

<a id="the-result-is-too-slow-or-too-expensive"></a>
### Rezultat je pre spor ili pre skup

Pokušajte jednu ili više od sljedećih opcija:

- odaberite drugi model
- koristite kraći ulazni tekst
- isključite opciju **Prijevod u stvarnom vremenu (tijekom kucanja)** u [**Postavkama** > **Opće postavke**](#general-settings)
- koristite besplatne modele za jednostavne zadatke (pogledajte [Modeli](#models))

<br/>

<a id="the-interface-is-in-the-wrong-language"></a>
### Sučelje je na pogrešnom jeziku

Kliknite na ikonu zemaljskog globusa u [alatnoj traci](#toolbar) i odaberite željeni **jezik sučelja**.

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

- koristite **samo besplatne modele** (grafikoni troškova će biti prazni)
- odabrani **filtar vremena** ne obuhvaća razdoblje u kojemu su izvršene pozive — pokušajte s opcijom **Sve** kako biste provjerili

Ako su grafikoni i dalje prazni nakon što odaberete **Sve**, provjerite pojavljuju li se pozivi u [**Povijesti**](#history) ili u kartici **Svi pozivi**.

<br/>

<a id="cost-shows-not-available-or-seems-wrong"></a>

### Trošak prikazuje "nije dostupan" ili izgleda pogrešno

Kada koristite modele putem **OpenRoutera**, aplikacija prikazuje vaš stvarni trošak prijavljen od strane OpenRoutera.

Za **druge pružatelje usluga** (OpenAI izravno, Anthropic izravno itd.), trošak se procjenjuje na temelju cijena objavljenih od strane OpenRoutera. Ako se za model ne pronađe odgovarajuća cijena, trošak će se prikazati kao **nije dostupan** i neće se dodati u ukupni iznos.

<br/>

<a id="total-cost-does-not-match-my-provider-bill"></a>
### Ukupni trošak se ne podudara s računom pružatelja usluga

Svi prikazani iznosi troškova u aplikaciji su **procjene samo za referencu**, a ne službeni računi.

Kako biste ukupan iznos približili stvarnom iznosu troška na OpenRouteru, otvorite [**Postavke** > **Praćenje troškova**](#cost-tracking) i kliknite **Sinkroniziraj s korištenjem API ključa**.

<br/>

<a id="the-history-page-is-missing-from-the-sidebar"></a>
### Stranica Povijest nedostaje u bočnom traku

Moguće je da je isključena opcija **Zadrži povijest izvođenja**. Otvorite [**Postavke** > **Opće postavke**](#general-settings) i omogućite je. Imajte na umu da uključivanje ove opcije ne vraća ranije izbrisane podatke iz povijesti.

<br/>

<a id="web-app-session-expired"></a>
### Web aplikacija: neočekivano ste preusmjereni na stranicu za prijavu

Vaša sesija možda je istekla. Prijavite se ponovno. Ako se to događa učešće, provjerite konfiguraciju poslužitelja za postavke vremenskog trajanja sesije.

<br/>

<a id="dashboard-shows-no-data-for-other-users"></a>
### Nadzorna ploča ne prikazuje podatke za druge korisnike (web)

Samo **administratori** mogu vidjeti podatke svih korisnika kroz **Korisnički** filter. Redoviti korisnici vide samo vlastitu aktivnost kako je predviđeno.

<br/>

<a id="i-changed-a-prompt-and-lost-the-edits"></a>
### Promijenio sam upit i izgubio izmjene

Prilikom uređivanja upita, uvijek kliknite na **Spremi** prije nego što kliknete **Natrag na pokretanje**.

<br/><br/>

<a id="quick-tips"></a>
## Brzi savjeti

- Počnite s [**Prijevodom**](#translate) kako biste provjerili radi li vam konfiguracija prije nego što pređete na [**Ponovno pisanje**](#rewrite) ili [**Transformaciju**](#transform).
- Koristite [**Ponovno pisanje**](#rewrite) za svakodnevna poboljšanja formulacije.
- Koristite [**Transformaciju**](#transform) kada vam treba ponovljiv tijek posla za određeni zadatak.
- Koristite [**Nadzornu ploču**](#dashboard) ako želite prati korištenje i troškove.
- Koristite [**Povijest**](#history) za pregleđivanje prošlih aktivnosti i njihovih potpunih ulaznih/izlaznih teksta.
- Redovito izvozite upite ako gradite knjižnicu upita koju želite sačuvati (vidite [Transformacija upita](#transform-prompts)) ili ako ih želite dijeliti s drugima.

<br/><br/>

<a id="disclaimer"></a>
## Odricanje od odgovornosti

Imena proizvoda i ikone pripadaju njihovim vlasnicima i koriste se isključivo u svrhu identifikacije. Ovaj softver nije povezan niti odobren od strane bilo kojeg od spomenutih brendova.

<br/><br/>

<a id="license"></a>
## Licenca

Autorska prava © 2026 Waldemar Scudeller Jr.

[Apache licenca 2.0](LICENSE)