---
translation_last_updated: '2026-03-29T20:53:45.822Z'
source_file_mtime: '2026-03-29T01:41:58.369Z'
source_file_hash: 418a9aa7293a9fb4
translation_language: sk
source_file_path: USER-GUIDE.md
---
![Transrewrt banner](../images/transrewrt_banner.png)

<a id="transrewrt-user-guide"></a>
# Používateľská príručka

<br/>

<a id="introduction"></a>
## Úvod

Transrewrt vám pomáha pracovať s textom tromi hlavnými spôsobmi:

- **Preložiť** – premeniť text z jedného jazyka do druhého.
- **Prepísať** – prepísať text v inom štýle, napríklad jasnejšie, stručnejšie alebo formálnejšie.
- **Transformovať** – spracovať text pomocou vlastných inštrukcií pre umelú inteligenciu, ktoré sa nazývajú výzvy.

<br/>

Táto príručka vysvetľuje, ako aplikáciu používať po jej inštalácii a spustení. Pokyny k inštalácii nájdete v hlavnom súbore **[README](README.sk.md)**.

<br/>

> ℹ️ **Poznámka**<br/>
> Transrewrt je dostupný ako desktopová aplikácia pre Windows a Linux a tiež ako samostatne hostovaná webová aplikácia. Táto príručka sa zameriava na bežné používanie aplikácie. Ak sa nejaká funkcia týka iba jednej verzie, je to jasne označené.

<small>**Prečítajte si v iných jazykoch:** </small>
<small id="lang-list"> [English (UK)](../USER-GUIDE.md) · [Português (BR)](USER-GUIDE.pt-BR.md) · [العربية](USER-GUIDE.ar.md) · [বাংলা](USER-GUIDE.bn.md) · [Català](USER-GUIDE.ca.md) · [简体中文](USER-GUIDE.zh-CN.md) · [繁體中文](USER-GUIDE.zh-TW.md) · [Hrvatski](USER-GUIDE.hr.md) · [Čeština](USER-GUIDE.cs.md) · [Nederlands](USER-GUIDE.nl.md) · [English (US)](USER-GUIDE.en-US.md) · [Filipino](USER-GUIDE.tl.md) · [Français](USER-GUIDE.fr.md) · [Deutsch](USER-GUIDE.de.md) · [Ελληνικά](USER-GUIDE.el.md) · [हिन्दी](USER-GUIDE.hi.md) · [Magyar](USER-GUIDE.hu.md) · [Italiano](USER-GUIDE.it.md) · [日本語](USER-GUIDE.ja.md) · [Basa Jawa](USER-GUIDE.jv.md) · [한국어](USER-GUIDE.ko.md) · [Bahasa Melayu](USER-GUIDE.ms.md) · [فارسی](USER-GUIDE.fa.md) · [Polski](USER-GUIDE.pl.md) · [Português (PT)](USER-GUIDE.pt.md) · [ਪੰਜਾਬੀ](USER-GUIDE.pa.md) · [Română](USER-GUIDE.ro.md) · [Русский](USER-GUIDE.ru.md) · [Slovenčina](USER-GUIDE.sk.md) · [Español](USER-GUIDE.es.md) · [Kiswahili](USER-GUIDE.sw.md) · [Svenska](USER-GUIDE.sv.md) · [తెలుగు](USER-GUIDE.te.md) · [ภาษาไทย](USER-GUIDE.th.md) · [Türkçe](USER-GUIDE.tr.md) · [Українська](USER-GUIDE.uk.md) · [Tiếng Việt](USER-GUIDE.vi.md)</small>

<small>

> **Poznámka k prekladom rozhrania a dokumentácie:** Všetky jazyky rozhrania okrem pôvodnej angličtiny (VB)
> boli preložené pomocou modelov umelej inteligencie; slovné znenie môže byť nepresné alebo obsahovať chyby.

</small>

<br/>

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Obsah**

- [Pred spustením](#before-you-start)
  - [Ako získať bezplatný kľúč OpenRouter API (desktopová aplikácia)](#how-to-get-a-free-openrouter-api-key-desktop-app)
- [Začíname](#getting-started)
- [Hlavné časti okna](#main-parts-of-the-window)
  - [Bočný panel](#sidebar)
  - [Panel nástrojov](#toolbar)
  - [Panely pre vstup a výstup](#input-and-output-panels)
- [Preklad](#translate)
  - [Preložiť text](#translate-text)
  - [Výber jazyka](#language-selection)
  - [Užitočné nastavenia prekladu](#helpful-translation-settings)
- [Prepísať](#rewrite)
- [Transformovať](#transform)
  - [Spustiť existujúcu výzvu](#run-an-existing-prompt)
  - [Ak zatiaľ nemáte žiadne výzvy](#if-you-have-no-prompts-yet)
  - [Rýchlo vytvoriť výzvu](#create-a-prompt-quickly)
  - [Upraviť výzvu](#edit-a-prompt)
  - [Otestovať výzvu pred použitím](#test-a-prompt-before-using-it)
- [Nástenka](#dashboard)
  - [Filtrovať dáta](#filter-the-data)
  - [Karty nástenky](#dashboard-tabs)
  - [Exportovať dáta](#export-data)
  - [Odstrániť uložené záznamy pre model](#delete-stored-records-for-a-model)
- [História](#history)
  - [Filtrovať dáta](#filter-the-data-1)
  - [Exportovať dáta histórie](#export-history-data)
- [Nastavenia](#settings)
  - [Hlavné nastavenia](#general-settings)
  - [Modely](#models)
  - [Jazyky](#languages)
  - [Sledovanie nákladov](#cost-tracking)
  - [Výzvy transformácie](#transform-prompts)
  - [Používatelia](#users)
  - [Konfigurácia API](#api-config)
  - [O aplikácii](#about)
- [Bežné problémy](#common-issues)
  - [Aplikácia neprekladá, neprepisuje ani netransformuje text](#the-app-will-not-translate-rewrite-or-transform-text)
  - [Zoznam modelov je prázdny](#the-model-list-is-empty)
  - [Výsledok je príliš pomalý alebo drahý](#the-result-is-too-slow-or-too-expensive)
  - [Rozhranie je v nesprávnom jazyku](#the-interface-is-in-the-wrong-language)
  - [Text je príliš malý alebo ťažko čitateľný](#the-text-is-too-small-or-hard-to-read)
  - [Grafy na nástenke sú prázdne](#dashboard-charts-are-empty)
  - [Náklady zobrazujú „nedostupné“ alebo sú nesprávne](#cost-shows-not-available-or-seems-wrong)
  - [Celkové náklady nezodpovedajú účtu poskytovateľa](#total-cost-does-not-match-my-provider-bill)
  - [Stránka História chýba v bočnom paneli](#the-history-page-is-missing-from-the-sidebar)
  - [Webová aplikácia: neočakávane presmerovaný na prihlasovaciu stránku](#web-app-redirected-to-the-login-page-unexpectedly)
  - [Webový správca: zabudnuté alebo stratené heslo](#web-admin-forgot-or-lost-a-password)
  - [Na nástenke nie sú dáta pre ostatných používateľov (web)](#dashboard-shows-no-data-for-other-users-web)
  - [Zmenil som výzvu a stratil som úpravy](#i-changed-a-prompt-and-lost-the-edits)
- [Rýchle tipy](#quick-tips)
- [Zrieknutie sa zodpovednosti](#disclaimer)
- [Licencia](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="before-you-start"></a>
## Pred začiatkom

Na používanie Transrewrt potrebujete prístup aspoň k jednému poskytovateľovi umelej inteligencie. Podporovaní poskytovatelia sú: [OpenRouter](https://openrouter.ai) (ktorý agreguje mnoho modelov), OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras a [Ollama](https://ollama.com) pre lokálne modely.

Na začatie nemusíte vybrať platený model. Hneď ako pridáte svoj OpenRouter API kľúč, aplikácia automaticky aktivuje vstavanú **bezplatnú** možnosť OpenRouter. To vám umožní okamžite začať s prekladom, prepisovaním a transformáciou textu. Prípadne si môžete získať bezplatný API kľúč aj od Cerebras, Google, Groq alebo Mistral AI.

Jednoducho povedané:

- **Model** je AI motor, ktorý vykonáva prácu. Modely sú uvedené s **predponou poskytovateľa** (napríklad `openrouter/…`, `openai/…`, `ollama/…`).
- **API kľúč** (alebo pre Ollama **základná URL**) je spôsob, ako aplikácia komunikuje s daným poskytovateľom.

Ak používate **desktopovú aplikáciu**, pridajte kľúče v časti [**Nastavenia** > **Konfigurácia API**](#api-config) pre každého poskytovateľa, ktorého používate. Ak používate iba OpenRouter, pozrite si nižšie časť [Ako získať API kľúč](#how-to-get-an-api-key-desktop-app). Ak nechcete používať API kľúč, môžete nainštalovať Ollama (z [ollama.com](https://ollama.com)) a namiesto toho používať lokálne modely, napríklad `translategemma:4b`.

Ak používate **webovú verziu**, poskytovateľov nakonfiguruje vlastník servera pomocou premenných prostredia, takže nemôžete priamo v aplikácii zadať API kľúče.

<br/>

<a id="how-to-get-an-api-key-desktop-app"></a>
### Ako získať bezplatný OpenRouter API kľúč (desktopová aplikácia)

Ak používate desktopovú aplikáciu, postupujte podľa týchto krokov:

1. Prejdite na [OpenRouter](https://openrouter.ai) vo svojom webovom prehliadači.
2. Vytvorte si účet alebo sa prihláste.
3. Otvorte stránku [Kľúče](https://openrouter.ai/keys).
4. Kliknite na tlačidlo na vytvorenie nového API kľúča.
5. Pomenujte kľúč tak, aby ste ho neskôr mohli rozpoznať.
6. Skopírujte nový API kľúč.
7. Vráťte sa do Transrewrt a otvorte **Nastavenia** > **Konfigurácia API**.
8. Vložte kľúč do poľa **OpenRouter API kľúč** (v časti **Nastavenia** > **Konfigurácia API**).
9. Kliknite na **Testovať OpenRouter kľúč**, aby ste sa uistili, že funguje.

<br/><br/>

<a id="getting-started"></a>
## Začíname

Ak používate Transrewrt po prvýkrát, postupujte v tomto poradí:

1. Otvorte aplikáciu.
2. Ak je potrebné, vyberte svoj **jazyk rozhrania** pomocou ikony gule.
3. Ak používate **desktopovú aplikáciu**, otvorte [**Nastavenia** > **Konfigurácia API**](#api-config), pridajte API kľúč aspoň pre jedného poskytovateľa (napríklad OpenRouter) a kliknite na **Test**, aby ste overili, či funguje.
4. Otvorte [**Nastavenia** > **Modely**](#models) a pridajte jeden alebo viac modelov do časti **Vybrané modely**.
5. Otvorte [**Nastavenia** > **Jazyky**](#languages) a vyberte si **Najvyššie jazyky**, ak chcete, aby sa vaše najčastejšie používané jazyky zobrazovali ako prvé.
6. Prejdite na **Preložiť** a spustite jednoduchý preklad, aby ste potvrdili, že všetko funguje.
7. Keď to bude fungovať, vyskúšajte **Prepísať** a potom **Transformovať**.

Toto poradie je dôležité. Zabraňuje najčastejšiemu problému pri prvom použití: spustenie úlohy predtým, ako má aplikácia funkčné API pripojenie alebo vybraný model.

<br/><br/>

<a id="main-parts-of-the-window"></a>
## Hlavné časti okna

Aplikácia je rozdelená do troch hlavných oblastí:

- **Bočný panel** vľavo.
- **Panel nástrojov** hore.
- **Pracovná oblasť** v strede.

<br/>

<a id="sidebar"></a>
### Bočný panel

Použite bočný panel na pohyb po aplikácii. Bočný panel môžete skryť, aby ste získali viac miesta, kliknutím na ikonu vedľa loga aplikácie.

<br/>

<table>
  <tr>
    <td valign="top">
       <img src="../images/screenshots/sk/sidebar.png" alt="Bočný panel aplikácie" style="max-width: 100%; border: 1px solid #ddd; border-radius: 4px;">
    </td>
    <td valign="top">
      <br/><br/>
      <ul>
        <li><strong>Preložiť</strong> otvorí pracovnú plochu pre preklad.</li><br/>
        <li><strong>Prepísať</strong> otvorí pracovnú plochu na prepisovanie.</li><br/>
        <li><strong>Transformovať</strong> otvorí pracovnú plochu s vlastnou výzvou.</li><br/>
        <li><strong>Dashboard</strong> zobrazuje informácie o využití a nákladoch.</li><br/>
        <li><strong>Nastavenia</strong> otvorí nastavovací panel.</li><br/>
        <li><strong>História</strong> zobrazuje históriu používania vrátane vstupného a výstupného textu</li><br/>
        <li><strong>Užívateľ</strong> zobrazuje užívateľské meno prihláseného užívateľa (iba webová verzia).</li>
      </ul>
    </td>
  </tr>
</table>

<br/>

<a id="toolbar"></a>
### Panel nástrojov

Panel nástrojov sa mierne líši v závislosti od toho, kde sa v aplikácii nachádzate.

- Vľavo zobrazuje názov aktuálnej stránky.
- Vpravo zobrazuje **výber modelu** a ovládanie **jazyka rozhrania**.

Pomocou **výberu modelu** môžete zvoliť, ktorý AI model použiť pre aktuálnu úlohu.

![Model selector](../images/screenshots/sk/model-selector.png)

Niektoré bezplatné modely nemusia byť vždy dostupné – niekedy sú offline alebo majú obmedzenie využitia. Ak k tomu dôjde, aplikácia tento model automaticky odstráni zo zoznamu dostupných. Ak chcete ovládať, ktoré modely sa zobrazujú, prejdite do časti [**Nastavenia** > **Modely**](#models) a upravte si zoznam modelov.
Modely môžete tiež otvoriť priamo kliknutím na ikonu poskytovateľa vľavo od názvu modelu na paneli nástrojov.

<br/>

**Ikona gule + kód jazyka** zmení jazyk rozhrania aplikácie, ako sú ponuky a tlačidlá. **Nemení** však jazyky používané v nástroji **Preložiť**.

![Interface language selector](../images/screenshots/sk/language-selector.png)

<br/>

<a id="input-and-output-panels"></a>
### Vstupný a výstupný panel

Väčšina pracovných priestorov používa vstupný panel na ľavej strane a výstupný panel na pravej strane.

Každý panel navyše zobrazuje:

| **Vstup**                                                          | **Výstup**                                                                                                                  |
|--------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------|
| - Počet znakov <br/>- Počet slov <br/>- Počet odsekov   <br/> | - Ako dlho trvala úloha<br/>- **TPS** (tokeny za sekundu)<br/>- Počty znakov, slov a odsekov<br/>- Použitý model |

Ak sa zaujímate o technické termíny:

- **Token** znamená malý úsek textu. Môžete si to predstaviť ako časť slova alebo krátke slovo.
- **TPS** znamená, koľko takýchto textových úsekov model spracoval za sekundu.

<br/>

Môžete tiež sledovať náklady každej operácie (ak sú k dispozícii) a celkové náklady, ak povolíte možnosť `Zobraziť informácie o nákladoch pri akciách` v časti [**Nastavenia** > **Hlavné nastavenia**](#general-settings).

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="translate"></a>
## Preložiť

Použite funkciu **Preložiť**, keď chcete premeniť text z jedného jazyka do druhého.

![Translate workspace](../images/screenshots/sk/translate.png)

<br/>

<a id="translate-text"></a>
### Preklad textu

1. Otvorte **Preložiť**.
2. Vyberte jazyk vo **Z**.
3. Vyberte jazyk v **Do**.
4. Vyberte model na paneli nástrojov.
5. Zadajte alebo prilepte text do poľa **Vstup**.
6. Kliknite na **Preložiť**.
7. Prečítajte si výsledok vo **Výstupe**.
8. Ak chcete výsledok skopírovať, použite tlačidlo na kopírovanie.

<br/>

<a id="language-selection"></a>
### Výber jazyka

- **Z** môže byť konkrétny jazyk alebo možnosť **Detekovať jazyk**.
- **Do** je jazyk, do ktorého chcete výsledok preložiť.

Vaše vybrané **Najvyššie jazyky** sa zobrazia na vrchu zoznamu. Môžete ich nastaviť v časti [**Nastavenia** > **Jazyky**](#languages).

<br/>

<a id="helpful-translation-settings"></a>
### Užitočné nastavenia prekladu

V časti [**Nastavenia** > **Hlavné nastavenia**](#general-settings) môžete zmeniť správanie prekladu:

- **Automatický preklad pri vkladaní** spustí preklad ihneď po vložení textu.
- **Automatické kopírovanie výsledku do schránky** automaticky skopíruje výsledok po úspešnom spustení.
- **Preklad v reálnom čase (počas písania)** spúšťa preklad, kým píšete.
- **Časový limit (ms)** určuje, ako dlho aplikácia čaká pred spustením prekladu v reálnom čase.
- **Enter** určuje, čo sa stane po stlačení klávesu `Enter`:

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="rewrite"></a>
## Prepísať

Použite **Prepísať**, keď chcete vylepšiť slovné znenie bez zmeny hlavného významu.

![Rewrite workspace](../images/screenshots/sk/rewrite.png)

Toto je užitočné pre:

- opravu pravopisu a gramatiky (**Skontrolovať pravopis a gramatiku**)
- zlepšenie zrozumiteľnosti textu (**Zlepšiť zrozumiteľnosť**)
- niekoľko odlišných prepísaní v jednom spustení (**Alternatívne verzie**)
- urobenie textu formálnejšieho alebo menej formálneho (**Formálny** / **Neformálny**)
- skrátenie alebo rozšírenie textu (**Skrátiť** / **Rozšíriť**)
- urobenie textu technickejším (**Urobiť technické**)

<br/>

> 💡 **TIP**<br/>
> Keď použijete režim „**Skontrolovať pravopis a gramatiku**“, v paneli výstupu (vedľa **Kopírovať**) sa objaví prepínač **Zobraziť zmeny**.
> Zapnite alebo vypnite ho, aby ste zobrazili alebo skryli konkrétne opravy aplikované na váš text.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="transform"></a>
## Transformovať

Použite **Transformovať**, keď chcete, aby sa umelá inteligencia riadila vlastným zoznamom pokynov.

![Transform workspace](../images/screenshots/sk/transform.png)

Toto je najpružnejšia oblasť aplikácie. Môžete ju použiť na úlohy ako napríklad:

- zhrnutie poznámok
- premena hrubého textu na vyčistený e-mail
- extrahovanie kľúčových bodov
- konverzia textu do konkrétneho formátu
- akákoľvek iná vlastná činnosť s vstupným textom

<br/>

<a id="run-an-existing-prompt"></a>
### Spustiť existujúcu výzvu

1. Otvorte **Transformovať**.
2. Vyberte výzvu zo zoznamu výziev.
3. Ak sa objaví pole **Cieľ**, vyberte jazyk, ak ho chcete.
4. Do poľa **Vstup** napíšte alebo vložte text.
5. Kliknite na **Transformovať**.
6. Prečítajte si výsledok v časti **Výstup**.

<br/>

<a id="if-you-have-no-prompts-yet"></a>
### Ak nemáte žiadne výzvy

Ak je váš zoznam výziev prázdny, kliknite na **Načítať ukážkové výzvy** v pracovnej ploche Transformovať. Toto nastavenie je vždy dostupné aj v časti [**Nastavenia** > **Výzvy transformácie**](#transform-prompts) v riadku pre export/import. Obe možnosti pridajú zabudované príklady, aby ste mohli rýchlo začať.

<br/>

> ℹ️ **Poznámka**<br/>
> Ukážkové výzvy sú poskytnuté v angličtine. Po ich načítaní môžete výzvu upraviť a použiť **Preložiť výzvu**, aby ste ju preložili do vášho jazyka.

<br/>

<a id="create-a-prompt-quickly"></a>
### Rýchlo vytvoriť výzvu

Najrýchlejší spôsob, ako vytvoriť výzvu, je:

1. Kliknite na **Nová výzva**.
2. Kliknite na **Vygenerovať výzvu**.
3. Popíšte, čo má výzva robiť.
4. Vyberte model.
5. Nechajte aplikáciu vytvoriť návrh pre vás.
6. Skontrolujte návrh a kliknite na **Uložiť**.

![Generate prompt](../images/screenshots/sk/transform-generate.png)

<br/>

<a id="edit-a-prompt"></a>
### Upraviť výzvu

Keď vytvárate alebo upravujete výzvu, editor sa zobrazí vľavo a vpravo sa zobrazí testovacia oblasť.

![Transform prompt editor](../images/screenshots/sk/transform-prompt-edit.png)

Hlavné polia sú:

- **Názov výzvy**: názov zobrazený v zozname výziev.
- **Inštrukcie k výzve (voliteľné)**: krátky tip zobrazený používateľovi pri spustení výzvy.
- **Úloha modelu**: celková úloha pridelená AI, napríklad „Si užitočný asistent.“
- **Inštrukcie modelu (jedna na riadok)**: konkrétne pravidlá, ktoré má AI dodržiavať.
- **Popis výstupu**: krátky výraz popisujúci výsledok, napríklad „zhrnutie“ alebo „prepísať“.
- **Teplota (0,0 → 1,0)**: správanie modelu; pozri nižšie.
- **Pýtať sa cielového jazyka**: pridá voľbu cielového jazyka pri spustení výzvy.

Ak pojem **Teplota** pre vás nie je známy, predstavte si to nasledovne:

- **Nižšia** teplota dáva stabilnejšie a predvídateľnejšie výsledky.
- **Vyššia** teplota dáva väčšiu rozmanitosť a kreativitu.

Môžete tiež použiť:

- **`Vygenerovať výzvu`** na vytvorenie novej verzie z jednoduchého opisu
- **`Vylepšiť výzvu`** na zlepšenie existujúcej výzvy
- **`Preložiť výzvu`** na preklad polí výzvy

<br/>

> ⚠️ **UPOZORNENIE**<br/>
> Kliknite na **`Uložiť`**, predtým ako kliknete na **`Späť na spustenie`**. Ak sa vrátite späť bez uloženia, vaše zmeny budú stratené.

<br/>

<a id="test-a-prompt-before-using-it"></a>
### Otestujte výzvu pred použitím

Testovací panel vpravo vám umožňuje vyskúšať svoju výzvu s ukážkovým textom, skôr ako ju použijete v každodenných úlohách.

To je užitočné v prípadoch, keď:

- vytvárate novú výzvu
- porovnávate dve verzie výzvy
- chcete skontrolovať tón, dĺžku alebo formát výstupu

<br/>

> ℹ️ **Poznámka**<br/>
> Uložené výzvy môžete exportovať a importovať v časti [**Nastavenia** > **Výzvy transformácie**](#transform-prompts).

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="dashboard"></a>
## Nástenka

Použite **Nástenku**, aby ste videli, ako často aplikáciu používate a aké to má náklady (pre platené modely).

![Dashboard summary](../images/screenshots/sk/dashboard-summary.png)

<br/>

> ℹ️ **Poznámka**<br/>
> Ak používate iba **bezplatné** modely, **náklady** môžu byť nulové a zhrnutia zamerané na náklady môžu byť prázdne. Na záložkách **Zhrnutie**, **Použitie v čase** a **Použitie podľa modelu** sa stále zobrazujú **počty volaní** (preklad, prepísať a transformovať), ak máte aktivitu v zvolenom období.

<br/>

<a id="filter-the-data"></a>
### Filtrovať dáta

Použite tlačidlá filtra v hornej časti na zmenu časového rozsahu.

![Dashboard filters](../images/screenshots/sk/dashboard-filter.png)

<br/>

> ℹ️ **Poznámka**<br/>
> Filter **Používateľ** je vo webovej verzii viditeľný len pre správcov. Bežní používatelia tento filter nevidia a v desktopovej aplikácii nie je k dispozícii.

<br/>

<a id="dashboard-tabs"></a>
### Karty nástenky

- **Zhrnutie** poskytuje prehľad o používaní a nákladoch. Obsahuje **Použitie v čase** (sčítaný kumulatívny počet **volaní** podľa dní pre preklad, prepis a transformáciu) a **Použitie podľa modelu** (celkový počet **volaní podľa modelu**, vrátane transformácie).
- **Podľa používania** rozdeľuje aktivitu podľa jazyka prekladu, režimu prepisovania a výzvy na transformáciu.
- **Podľa modelu** zobrazuje, ktoré modely ste použili a aké mali náklady.
- **Podľa dňa** zobrazuje denné súčty.
- **Všetky volania** zobrazuje kompletnú históriu volaní a umožňuje jej export.

<br/>

<a id="export-data"></a>
### Export dát

Dáta z tabuliek nástenky je možné exportovať vo formátoch:

- **JSON**
- **CSV**
- **XLSX**

To je užitočné, ak chcete aktivitu preskúmať mimo aplikácie alebo zdieľať správu.

<br/>

<a id="delete-stored-records-for-a-model"></a>
### Odstránenie uložených záznamov pre model

Na karte **Podľa modelu** alebo **Všetky volania** môžete odstrániť uložené záznamy pre model kliknutím na ikonu „koša“.

> ⚠️ **UPOZORNENIE**<br/>
> Odstránenie uložených záznamov nie je možné vrátiť späť. Použite to iba vtedy, ak ste si istí, že túto históriu už nepotrebujete.

Ak chcete odstrániť všetky dáta alebo záznamy na základe ich veku, prejdite do časti [**Nastavenia** > **Sledovanie nákladov**](#cost-tracking). Tam nájdete možnosti na odstránenie všetkých uložených dát alebo len dát starších ako určitý dátum.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="history"></a>
## História

Kliknutím na **História** zobrazíte históriu vašich akcií v aplikácii **Transrewrt**, vrátane vstupu a výstupu každej operácie.

![History page](../images/screenshots/sk/history.png)

<br/>

<a id="filter-the-history"></a>
### Filtrovanie dát

**História** používa rovnaké filtre ako stránka **Nástenka**. Použite ich na výber časového rozsahu.

![Dashboard filters](../images/screenshots/sk/dashboard-filter.png)

<br/>

> ℹ️ **Poznámka**<br/>
> Filter **Používateľ** je vo webovej verzii viditeľný len pre správcov. Bežní používatelia tento filter nevidia a v desktopovej aplikácii nie je k dispozícii.

<br/>

<a id="export-history-data"></a>
### Export dát histórie

Stránka histórie môže exportovať filtrované dáta vo formátoch:

- **JSON**
- **CSV**
- **XLSX**

To je užitočné, ak chcete aktivitu preskúmať mimo aplikácie alebo zdieľať správu.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="settings"></a>
## Nastavenia

Otvorte **Nastavenia** na bočnom paneli, aby ste prispôsobili správanie aplikácie.

Dostupné karty závisia od platformy a vašej roly:

| Karta               | Desktop | Web (správca) | Web (bežný užívateľ) |
  |-------------------|:-------:|:-----------:|:------------------:|
  | Hlavné nastavenia  |   áno   |     áno     |        áno         |
  | Modely            |   áno   |     áno     |        áno         |
  | Jazyky         |   áno   |     áno     |        áno         |
  | Sledovanie nákladov     |   áno   |     áno     |         —          |
  | Výzvy transformácie |   áno   |     áno     |        áno         |
  | Používatelia             |    —    |     áno     |         —          |
  | Konfigurácia API        |   áno   |     áno     |         —          |
  | O aplikácii             |   áno   |     áno     |        áno         |

<br/>

> ℹ️ **Poznámka**<br/>
> Vo webovej verzii má každý používateľ vlastnú konfiguráciu. Nastavenia ako vybrané modely, jazyky, všeobecné možnosti a výzvy transformácie sú uložené pre každého používateľa. Zmeny, ktoré vykonáte, neovplyvnia iných používateľov.

<br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="general-settings"></a>
### Hlavné nastavenia

Použite **Hlavné nastavenia** na nastavenie správania pri písaní, či sa údaje o spustení ukladajú do **Histórie** a vzhľadu.

**Správanie**

- **Správanie pre ENTER** určuje, či `Enter` spustí úlohu alebo vloží nový riadok.
- **Automatický preklad pri vkladaní** spustí preklad hneď, ako vložíte text.
- **Automatické kopírovanie výsledku do schránky** automaticky skopíruje úspešné výsledky.
- **Preklad v reálnom čase (počas písania)** prekladá počas písania.
- **Časový limit (ms)** nastavuje dobu čakania na preklad v reálnom čase.

**História**

- **Udržovať históriu spustenia** určuje, či sa pri každom preklade, prepísaní a transformácii ukladajú **vstupný a výstupný text** pre zobrazenie [**História**](#history) na bočnom paneli. Vypnutie tejto možnosti vyžaduje potvrdenie; ak potvrdíte, uložený text histórie sa odstráni z databázy.
- **Odstrániť dáta histórie** vám umožňuje odstrániť uložený text podľa veku (napríklad staršie ako niekoľko mesiacov alebo **všetky údaje (vyčistiť)**) pomocou tlačidla **Vymazať údaje**. Toto ovplyvňuje iba uložený text spustení pre zobrazenie **História**; **neodstraňuje** celkové náklady alebo údaje o používaní. Na odstránenie alebo skrátenie údajov o **nákladoch** použite [**Nastavenia** > **Sledovanie nákladov**](#cost-tracking).

**Vzhľad**

- **Zobraziť informácie o nákladoch pri akciách** ovláda zobrazenie nákladov za operáciu (ak sú k dispozícii) a celkových nákladov na paneloch výstupu Preložiť, Prepísať a Transformovať.
- **Desatinné miesta nákladov** mení spôsob zobrazenia desatinných miest nákladov.
- **Iba web:** **zobraziť okraj okolo aplikácie** pridáva dodatočný priestor okolo rozhrania.
- **Rodina písma** mení písmo v textových paneloch.
- **Veľkosť** mení veľkosť písma.

**Zálohovanie konfigurácie**

- **Zahrnúť dáta o používaní do zálohy** – ak je povolené, ZIP obsahuje aj históriu spustení a dáta o volaniach API.
- **Zálohovať konfiguráciu** – vytvorí jeden ZIP súbor (`transrewrt-config-backup-YYYY-MM-DD_HHMMSS.zip` vo východiskovom nastavení v UTC), ktorý obsahuje `config.json`, `state.json`, voliteľný šifrovací kľúč, používateľov, preferencie, vlastné výzvy a údaje o používaní, ak ste s tým súhlasili. Po úspešnom zálohovaní sa potvrdenie zobrazí s názvom uloženého súboru.
- **Obnoviť zo zálohy** – najskôr otvorí **potvrdzovací dialóg**. Vyberte zálohový ZIP súbor vo vnútri dialógu (**Prehliadať** / výber súboru alebo presunutie a vloženie, kde je to podporované), potom skontrolujte možnosti:
  - **Obnoviť dáta o používaní** – importuje údaje o používaní/histórii zo ZIP súboru, ak bol zálohovaný s zahrnutými údajmi o používaní; nezaškrtnite, ak chcete iba nastavenia a výzvy.
  - **Vymazať staré dáta o používaní pred obnovením** – odstráni existujúce údaje o používaní/histórii v tejto inštalácii pred aplikovaním zálohy (voliteľné; použite, ak chcete čisté nahradenie).

Zálohy vytvorené vo webovej alebo desktopovej verzii je možné obnoviť v druhej verzii. Pri obnove desktopovej zálohy vo webovej verzii sa dáta obnovia pre užívateľa správcu.

<br/>

<a id="models"></a>
### Modely

Použite **Nastavenia** > **Modely** na výber modelov, ktoré sa zobrazia na paneli nástrojov.

![Settings Models tab](../images/screenshots/sk/settings-models.png)

Stránka obsahuje dva zoznamy:

- **Dostupné modely** vľavo
- **Vybrané modely** vpravo

Užitočné ovládacie prvky zahŕňajú:

- **Vyhľadať modely...** na nájdenie modelu podľa názvu
- **Poskytovateľ** pre filtrovanie zoznamu podľa jedného poskytovateľa (OpenRouter, OpenAI, Ollama, …)
- **Iba zadarmo** na zobrazenie iba bezplatných modelov
- **Obnoviť** na opätovné načítanie zoznamu
- **Rozbaliť všetko** a **Zbaliť všetko** pri triedení podľa poskytovateľa

Identifikátory modelov obsahujú predponu poskytovateľa (napríklad `openrouter/…` oproti `openai/…`). Označenia ako **OpenAI (OpenRouter)** oproti **OpenAI (priamy)** zobrazujú, ako je prevádzka smerovaná.

> ℹ️ **Poznámka**<br/>
> **OpenRouter Body Builder** (`openrouter/bodybuilder`) je smerovací model, nie všeobecný chatovací model: jeho odpoveď je vo formáte JSON, ktorý popisuje požiadavky na API OpenRouter (napríklad poľe `requests` s `model` a `messages`). Ak ho použijete na **Preložiť**, **Prepísať** alebo **Transformovať**, panel výstupu zobrazí tento JSON namiesto hotového textu. Na tieto úlohy si vyberte bežný textový model. Viac informácií nájdete na [stránke modelu Body Builder](https://openrouter.ai/openrouter/bodybuilder) na OpenRouter.

Akcie:

- Ak chcete pridať model, kliknite na **Pridať** alebo kdekoľvek do položky.

- Ak chcete odstrániť model, kliknite na **X** vedľa neho v časti **Vybrané modely** alebo na **Vybrané** v položke Dostupné modely.

- Ak chcete vymazať zoznam, kliknite na **Zrušiť výber všetkých**. Požadovaný bezplatný model zostane v zozname.

<br/>

> ℹ️ **Poznámka**<br/>
> Ak nechcete okamžite pridávať kredit na OpenRouter, začnite povolením možnosti **Iba zadarmo** a výberom bezplatných modelov (nie je potrebná kreditná karta). Môžete tiež použiť Ollama na spustenie modelov lokálne bez akéhokoľvek API kľúča.

<br/>

<a id="languages"></a>
### Jazyky

Použite **Nastavenia** > **Jazyky** na organizáciu zoznamov jazykov používaných v aplikácii.

- **Najvyššie jazyky** sú pripnuté na vrchu zoznamov jazykov v **Preložiť** a **Transformovať**.
- **Vlastný jazyk** vám umožňuje pridať jazyk, ktorý nie je v zozname zabudovaných jazykov.

Ak pridáte vlastný jazyk, objaví sa výberačoch jazykov spolu s preddefinovanými možnosťami.

<br/>

<a id="cost-tracking"></a>
### Sledovanie nákladov

Použite **Nastavenia** > **Sledovanie nákladov** na správu informácií o nákladoch.

- **Celkové náklady** zobrazujú bežiaci súčet.
- **Kopírovať hodnotu** skopíruje celkovú sumu do schránky.
- **Obnoviť náklady** nastaví uložený súčet na nulu.
- **Synchronizovať so využitím API kľúča** nastaví súčet podľa využitia nahláseného vaším účtom OpenRouter (iba OpenRouter).
- **Využitie API kľúča** zobrazí podrobnosti o využití OpenRouter, ak sú k dispozícii.
- **Odstrániť nákladové údaje** odstráni všetky údaje alebo len záznamy staršie ako vybraný dátum.

**Sledovanie nákladov:** Keď používate modely OpenRouter, aplikácia zobrazuje vaše skutočné využitie a výdavky na základe informácií o nákladoch od OpenRouter. Pre všetkých ostatných poskytovateľov aplikácia odhaduje náklady pomocou cien zverejnených OpenRouter; ak nie je cena k dispozícii, odhad môže byť nulový.

<br/>

> ℹ️ **Poznámka**<br/>
>  **Všetky údaje o nákladoch sú len odhady na vašu informáciu, nie oficiálne fakturačné vyhlásenia.**

<br/>

> ⚠️ **Upozornenie**<br/>
> Odstránenie údajov nie je možné vrátiť späť. Pred odstránením sa uistite, že ste si svoje údaje zazálohovaní alebo exportovali cez [**História**](#history)
> alebo [**Nástenka** > **Všetky volania**](#dashboard-tabs), inak budú natrvalo stratené.
> Odstránia sa tiež všetky histórie vstupov/výstupov súvisiace s každým záznamom volania API.

<br/>

<a id="transform-prompts"></a>
### Výzvy transformácie

Použite **Nastavenia** > **Výzvy transformácie** na hromadnú správu výziev.

Môžete:

- prehľad uložených výziev
- odstránenie výziev
- import výziev zo súboru
- export výziev na zálohovanie alebo zdieľanie
- načítanie ukážkových výziev do zoznamu výziev

<br/>

<a id="users"></a>
### Používatelia

Použite **Používatelia** na správu užívateľských účtov vo webovej verzii. Môžete pridávať používateľov, aktualizovať ich údaje, obnoviť heslá a odstraňovať účty.

<br/>

<a id="api-config"></a>
### Konfigurácia API

Podporovaní poskytovatelia sú: OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras a **Ollama** (lokálne modely cez základné URL). Stačí nakonfigurovať len poskytovateľov, ktorých používate.

**Webová aplikácia: len pre správcu**

API kľúče sa konfigurujú prostredníctvom systémových alebo Dockerových premenných prostredia – nezadávajú sa vo webovom rozhraní. Táto stránka zobrazuje, pre ktorých poskytovateľov je kľúč nakonfigurovaný, a umožňuje otestovať každého kliknutím na tlačidlo **`Testovať`**.

<br/>

> ℹ️ **Poznámka**<br/>
> Ak chcete zmeniť API kľúč, aktualizujte premennú prostredia vo vašom systéme alebo v konfigurácii Dockeru a reštartujte server alebo kontajner.

> ℹ️ **Poznámka**<br/>
> **Zálohy konfigurácie** (pozri [**Hlavné nastavenia** → Zálohovanie konfigurácie](#general-settings)) môžu vnútri ZIP súboru `config.json` obsahovať **rozlúštené** kľúče poskytovateľov. Obnovenie tohto ZIP súboru **nekopíruje** tieto kľúče späť do konfiguračného súboru servera – aktívne kľúče stále pochádzajú z prostredia a existujúceho stavu súborov, ako je tam opísané.

<br/>

**Desktopová aplikácia**

Použite **Konfiguráciu API** na uloženie API kľúčov pre každého poskytovateľa, ktorého používate. Pre Ollamu zadajte namiesto API kľúča **základné URL**.

<br/>

> 💡 **Tip** <br/>
> Ak nechcete používať API kľúč ani platiť za využitie, môžete [stiahnuť Ollamu](https://ollama.com) a spúšťať modely (napríklad `translategemma:4b`) lokálne na vašom počítači zadarmo. Prípadne si môžete vytvoriť bezplatný účet na OpenRouter (bez potreby kreditnej karty) a používať ich bezplatné modely, alebo získať bezplatný API kľúč od Cerebras, Google, Groq alebo Mistral AI.

<br/>

- Pridajte len poskytovateľov, ktorých potrebujete. V **Nastaveniach** > **Modely** začína každé ID modelu menom poskytovateľa (napríklad `openrouter/openrouter/free`, `openai/gpt-4o`, `ollama/llama3`).

Ak chcete pridať API kľúč, zadajte hodnotu do textového poľa a kliknite na **`Uložiť`**. Ak chcete nahradiť existujúci kľúč, kliknite na **`Upraviť`**. Ak chcete overiť, či kľúč funguje, kliknite na **`Testovať`**. Pre základné URL Ollamy vždy kliknite na **`Testovať`**, aby ste skontrolovali pripojenie.

<br/>

> ℹ️ **Poznámka**<br/>
> Aktuálnu hodnotu API kľúča nemôžete vidieť. Môžete ju len nahradiť pomocou tlačidla **`Upraviť`**.
> API kľúče sú uložené šifrovane v konfigurácii.

<br/>

<a id="about"></a>
### O aplikácii

Záložka **O aplikácii** zobrazuje:

- názov aplikácie
- číslo verzie
- dátum zostavenia
- odkaz na repozitár projektu

<br/><br/>

<a id="common-issues"></a>
## Bežné problémy

Ak niečo nefunguje podľa očakávaní, skontrolujte najskôr nasledujúce body.

<br/>

<a id="the-app-will-not-translate-rewrite-or-transform-text"></a>
### Aplikácia nebude prekladať, prepisovať alebo transformovať text

Skontrolujte, či:

- ste vybrali model v paneli nástrojov
- je aspoň jeden model uvedený v časti [**Nastavenia** > **Modely**](#models)
- je vaša konfigurácia API funkčná

Ak používate desktopovú aplikáciu:

1. Otvorte [**Nastavenia** > **Konfigurácia API**](#api-config).
2. Skontrolujte, či je uložený aspoň jeden API kľúč.
3. Kliknite na **Testovať** vedľa poskytovateľa, aby ste potvrdili, že kľúč funguje.

<br/>

<a id="the-model-list-is-empty"></a>
### Zoznam modelov je prázdny

Otvorte [**Nastavenia** > **Modely**](#models) a kliknite na **Obnoviť**.

Ak je to potrebné:

- vyhľadajte model
- zapnite možnosť **Iba zadarmo**
- pridajte jeden alebo viac modelov do **Vybraných modelov**

<br/>

<a id="the-result-is-too-slow-or-too-expensive"></a>
### Výsledok je príliš pomalý alebo príliš drahý

Vyskúšajte jednu alebo viac z týchto možností:

- vyberte iný model
- použite kratší vstup
- vypnite možnosť **Preklad v reálnom čase (počas písania)** v časti [**Nastavenia** > **Hlavné nastavenia**](#general-settings)
- používajte modely zadarmo na jednoduché úlohy (pozri [Modely](#models))

<br/>

<a id="the-interface-is-in-the-wrong-language"></a>
### Rozhranie je v nesprávnom jazyku

Kliknite na ikonu gule v [paneli nástrojov](#toolbar) a vyberte si požadovaný **Jazyk rozhrania**.

<br/>

<a id="the-text-is-too-small-or-hard-to-read"></a>
### Text je príliš malý alebo ťažko čitateľný

Otvorte [**Nastavenia** > **Hlavné nastavenia**](#general-settings) a zmeňte:

- **Rodinu písma**
- **Veľkosť**

<br/>

<a id="dashboard-charts-are-empty"></a>
### Grafy na nástenke sú prázdne

To je normálne, ak:

- používate iba **modely zadarmo** a pozriete sa na údaje o **nákladoch** (môžu byť nulové); grafy počtu volaní v záložke **Zhrnutie** stále potrebujú dáta z vybraného obdobia
- vybraný **časový filter** nezahŕňa obdobie, keď boli volania vykonané – skúste **Všetko**, aby ste skontrolovali

Ak sú grafy stále prázdne po výbere **Všetko**, potvrďte, že volania sa zobrazujú v časti [**História**](#history) alebo na karte **Všetky volania**.

<br/>

<a id="cost-shows-not-available-or-seems-wrong"></a>
### Náklady zobrazujú „nie sú k dispozícii“ alebo sa zdajú byť nesprávne

Keď používate modely prostredníctvom **OpenRouter**, aplikácia zobrazí vaše skutočné výdavky nahlásené spoločnosťou OpenRouter.

Pre **iných poskytovateľov** (priamy OpenAI, priamy Anthropic atď.) sú náklady odhadované na základe cenových údajov zverejnených spoločnosťou OpenRouter. Ak sa pre model nenájde zodpovedajúca cena, náklady sa zobrazia ako **nie sú k dispozícii** a nebudú pripočítané k vášmu bežiacemu súčtu.

<br/>

<a id="total-cost-does-not-match-my-provider-bill"></a>
### Celkové náklady nezodpovedajú mojmu účtu od poskytovateľa

Všetky údaje o nákladoch v aplikácii sú **odhadované iba na informačné účely**, nie sú to oficiálne fakturačné vyhlásenia.

Ak chcete, aby celková suma bola bližšie vašim skutočným výdavkom na OpenRouter, otvorte [**Nastavenia** > **Sledovanie nákladov**](#cost-tracking) a kliknite na **Synchronizovať so využitím API kľúča**.

<br/>

<a id="the-history-page-is-missing-from-the-sidebar"></a>
### Stránka História chýba na bočnom paneli

Možno je vypnutá možnosť **Udržovať históriu spustenia**. Otvorte [**Nastavenia** > **Hlavné nastavenia**](#general-settings) a zapnite ju. Upozorňujeme, že jej zapnutie neobnoví predtým odstránené údaje histórie.

<br/>

<a id="web-app-session-expired"></a>
### Web aplikácia: neočakávane presmerovaná na prihlasovaciu stránku

Vaša relácia mohla vypršať. Prihláste sa znova. Ak sa to deje často, skontrolujte nastavenia konfigurácie servera pre dobu trvania relácie.

<br/>

<a id="web-admin-forgot-or-lost-a-password"></a>
### Web správca: zabudnuté alebo stratené heslo

Toto sa vzťahuje na **webovú aplikáciu hostovanú samostatne** (Docker), nie na desktopovú aplikáciu (Electron).

- Ak sa môže iný správca stále prihlásiť, môže otvoriť [**Nastavenia** > **Používatelia**](#users), vybrať účet a nastaviť tam **nové heslo**.
- Ak ste **vylúčený z prístupu**, ale máte **prístup cez príkazový riadok** k stroju alebo kontajneru, obnovte heslo pomocou pomocníka, ktorý je súčasťou obrazu (nahraďte `transrewrt`, ak ste zmenili predvolený názov, a heslo uzavrite do úvodzoviek, ak obsahuje medzery alebo špeciálne znaky):

```bash
docker exec transrewrt reset-web-password '<username>' '<new-password>'
```

Predvolené užívateľské meno správcu je `admin`, ak ste nikdy nevytvorili iné účty. Keď zadáte iba jeden argument, považuje sa za nové heslo pre `admin`.

Ak spúšťate aplikáciu z **zdrojového kódu** namiesto Dockeru, použite:

```bash
pnpm run reset-web-password -- <username> <new-password>
```

Skript aktualizuje záznam používateľa v databáze SQLite (a môže vytvoriť používateľa `admin`, ak chýba). Po obnovení sa prihláste s novým heslom.

<br/>

<a id="dashboard-shows-no-data-for-other-users"></a>
### Nástenka nezobrazuje údaje pre ostatných používateľov (web)

Iba **správcovia** môžu zobraziť údaje všetkých používateľov prostredníctvom filtra **Používateľ**. Bežní používatelia podľa návrhu vidia iba svoju vlastnú aktivitu.

<br/>

<a id="i-changed-a-prompt-and-lost-the-edits"></a>
### Zmenil som výzvu a stratil som úpravy

Pri úprave výzvy vždy kliknite na **Uložiť**, predtým ako kliknete na **Späť na Spustiť**.

<br/><br/>

<a id="quick-tips"></a>
## Rýchle tipy

- Začnite s [**Preložiť**](#translate), aby ste sa uistili, že je vaše nastavenie funkčné, predtým ako prejdete na [**Prepísať**](#rewrite) alebo [**Transformovať**](#transform).
- Použite [**Prepísať**](#rewrite) na každodenné vylepšovanie slovného znenia.
- Použite [**Transformovať**](#transform), keď potrebujete opakovateľný pracovný postup pre konkrétnu úlohu.
- Použite [**Nástenku**](#dashboard), ak chcete sledovať využitie a náklady.
- Použite [**História**](#history) na prehliadnutie minulých operácií a ich úplného vstupného a výstupného textu.
- Pravidelne exportujte výzvy, ak vytvárate knižnicu výziev, ktorú chcete uchovať v bezpečí (pozri [Výzvy transformácie](#transform-prompts)), alebo ak ich chcete zdieľať s inými.

<br/><br/>

<a id="disclaimer"></a>
## Zrieknutie sa zodpovednosti

Názvy produktov a ikony patria ich príslušným vlastníkom a používajú sa výlučne na identifikačné účely. Tento softvér nie je spojený ani odporúčaný žiadnou z uvedených značiek.

<br/><br/>

<a id="license"></a>
## Licencia

Autorské práva © 2026 Waldemar Scudeller Jr.

[Apache License 2.0](LICENSE)
