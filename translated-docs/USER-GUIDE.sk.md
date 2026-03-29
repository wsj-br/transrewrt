---
translated_at: "2026-03-29T01:56:11.089Z"
source_hash: "8981b8db163153bfc443046fa20a49b33c92b9feebdee302f6ef60852f273472"
source_mtime: "2026-03-29T01:41:58.368Z"
model: "qwen/qwen3-235b-a22b-2507"
---
![Transrewrt banner](../images/transrewrt_banner.png)


<a id="transrewrt-user-guide"></a>

# Používateľská príručka

<br/>

<a id="introduction"></a>

## Úvod

Transrewrt vám pomáha pracovať s textom tromi hlavnými spôsobmi:

- **Preklad** – prevedie text z jedného jazyka do druhého.
- **Prepísanie** – prepíše text v inom štýle, napríklad zrozumiteľnejšie, stručnejšie alebo formálnejšie.
- **Úprava** – spracuje text pomocou vlastných pokynov pre umelú inteligenciu, ktoré sa nazývajú výzvy (prompts).

<br/>

Táto príručka vysvetľuje, ako aplikáciu používať po jej nainštalovaní a spustení. Pokyny k inštalácii nájdete v hlavnom súbore **[README](README.sk.md)**.

<br/>

> ℹ️ **Poznámka**<br/>
> Transrewrt je dostupný ako desktopová aplikácia pre Windows a Linux a tiež ako webová aplikácia na vlastnom serveri. Táto príručka sa zameriava na bežné používanie aplikácie. Ak niečo platí iba pre jednu verziu, je to jasne označené.

<small>**Prečítajte si v iných jazykoch:** </small>

<small id="lang-list"> [English (UK)](../USER-GUIDE.md) · [Português (BR)](USER-GUIDE.pt-BR.md) · [العربية](USER-GUIDE.ar.md) · [বাংলা](USER-GUIDE.bn.md) · [Català](USER-GUIDE.ca.md) · [简体中文](USER-GUIDE.zh-CN.md) · [繁體中文](USER-GUIDE.zh-TW.md) · [Hrvatski](USER-GUIDE.hr.md) · [Čeština](USER-GUIDE.cs.md) · [Nederlands](USER-GUIDE.nl.md) · [English (US)](USER-GUIDE.en-US.md) · [Filipino](USER-GUIDE.tl.md) · [Français](USER-GUIDE.fr.md) · [Deutsch](USER-GUIDE.de.md) · [Ελληνικά](USER-GUIDE.el.md) · [हिन्दी](USER-GUIDE.hi.md) · [Magyar](USER-GUIDE.hu.md) · [Italiano](USER-GUIDE.it.md) · [日本語](USER-GUIDE.ja.md) · [Basa Jawa](USER-GUIDE.jv.md) · [한국어](USER-GUIDE.ko.md) · [Bahasa Melayu](USER-GUIDE.ms.md) · [فارسی](USER-GUIDE.fa.md) · [Polski](USER-GUIDE.pl.md) · [Português (PT)](USER-GUIDE.pt.md) · [ਪੰਜਾਬੀ](USER-GUIDE.pa.md) · [Română](USER-GUIDE.ro.md) · [Русский](USER-GUIDE.ru.md) · [Slovenčina](USER-GUIDE.sk.md) · [Español](USER-GUIDE.es.md) · [Kiswahili](USER-GUIDE.sw.md) · [Svenska](USER-GUIDE.sv.md) · [తెలుగు](USER-GUIDE.te.md) · [ภาษาไทย](USER-GUIDE.th.md) · [Türkçe](USER-GUIDE.tr.md) · [Українська](USER-GUIDE.uk.md) · [Tiếng Việt](USER-GUIDE.vi.md)</small>

<small>

> **Poznámka k prekladom používateľského rozhrania a dokumentácie:** Všetky jazyky rozhrania okrem pôvodného angličtiny (VB)
> boli preložené pomocou modelov umelej inteligencie; slovné znenie môže byť nepresné alebo obsahovať chyby.

</small>

<br/>


<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Obsah**

- [Predtým ako začnete](#before-you-start)
  - [Ako získať bezplatný kľúč OpenRouter API (desktopová aplikácia)](#how-to-get-a-free-openrouter-api-key-desktop-app)
- [Začíname](#getting-started)
- [Hlavné časti okna](#main-parts-of-the-window)
  - [Bočný panel](#sidebar)
  - [Panel nástrojov](#toolbar)
  - [Vstupné a výstupné panely](#input-and-output-panels)
- [Preklad](#translate)
  - [Preložiť text](#translate-text)
  - [Výber jazyka](#language-selection)
  - [Užitočné nastavenia prekladu](#helpful-translation-settings)
- [Preformulovať](#rewrite)
- [Transformácia](#transform)
  - [Spustiť existujúci prompt](#run-an-existing-prompt)
  - [Ak ešte nemáte žiadne prompty](#if-you-have-no-prompts-yet)
  - [Rýchlo vytvoriť prompt](#create-a-prompt-quickly)
  - [Upraviť prompt](#edit-a-prompt)
  - [Otestovať prompt pred použitím](#test-a-prompt-before-using-it)
- [Nástenka](#dashboard)
  - [Filtrovať dáta](#filter-the-data)
  - [Záložky nástenky](#dashboard-tabs)
  - [Export dát](#export-data)

- [Vymazanie uložených záznamov pre model](#delete-stored-records-for-a-model)
- [História](#history)
  - [Filterovanie údajov](#filter-the-data-1)
  - [Exportovať údaje histórie](#export-history-data)
- [Nastavenia](#settings)
  - [Všeobecné nastavenia](#general-settings)
  - [Modely](#models)
  - [Jazyky](#languages)
  - [Sledovanie nákladov](#cost-tracking)
  - [Transformácia promptov](#transform-prompts)
  - [Používatelia](#users)
  - [Nastavenie API](#api-config)
  - [O aplikácii](#about)
- [Bežné problémy](#common-issues)
  - [Aplikácia neprekladá, neprepoisuje ani netransformuje text](#the-app-will-not-translate-rewrite-or-transform-text)
  - [Zoznam modelov je prázdny](#the-model-list-is-empty)
  - [Výsledok je príliš pomalý alebo príliš drahý](#the-result-is-too-slow-or-too-expensive)
  - [Rozhranie je v nesprávnom jazyku](#the-interface-is-in-the-wrong-language)
  - [Text je príliš malý alebo ťažko čitateľný](#the-text-is-too-small-or-hard-to-read)
  - [Grafy v prehľade sú prázdne](#dashboard-charts-are-empty)

- [Náklady zobrazujú „nedostupné“ alebo sa zdajú nesprávne](#cost-shows-not-available-or-seems-wrong)
- [Celkové náklady sa nezhodujú s účtom poskytovateľa](#total-cost-does-not-match-my-provider-bill)
- [Stránka História chýba v bočnom paneli](#the-history-page-is-missing-from-the-sidebar)
- [Webová aplikácia: neočakávane presmerovaný na prihlasovaciu stránku](#web-app-redirected-to-the-login-page-unexpectedly)
- [Webová správa: zabudnuté alebo stratili ste heslo](#web-admin-forgot-or-lost-a-password)
- [Na nástenke sa nezobrazujú údaje pre ostatných používateľov (web)](#dashboard-shows-no-data-for-other-users-web)
- [Zmenil som výzvu a stratil som úpravy](#i-changed-a-prompt-and-lost-the-edits)
- [Rýchle tipy](#quick-tips)
- [Zrieknutie sa zodpovednosti](#disclaimer)
- [Licencia](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="before-you-start"></a>

## Než začnete

Ak chcete používať Transrewrt, potrebujete prístup aspoň k jednému poskytovateľovi umelej inteligencie. Podporovaní poskytovatelia sú: [OpenRouter](https://openrouter.ai) (ktorý agreguje mnoho modelov), OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras a [Ollama](https://ollama.com) pre lokálne modely.

Na začiatok nemusíte vyberať platený model. Stačí, keď pridáte svoj kľúč OpenRouter API, a aplikácia automaticky aktivuje zabudovanú **bezplatnú** možnosť OpenRouter. To vám umožní okamžite začať s prekladmi, prepisovaním a transformáciou textov. Prípadne si môžete získať bezplatný kľúč API aj od Cerebras, Google, Groq alebo Mistral AI.

Jednoducho povedané:

- **Model** je AI jadro, ktoré vykonáva prácu. Modely sú uvedené s **predvoľbou poskytovateľa** (napríklad `openrouter/…`, `openai/…`, `ollama/…`).
- **API kľúč** (alebo pre Ollama **základná URL adresa**) je spôsob, ako aplikácia komunikuje s daným poskytovateľom.

Ak používate **desktopovú aplikáciu**, pridajte kľúče v časti [**Nastavenia** > **Konfigurácia API**](#api-config) pre každého poskytovateľa, ktorého používate. Ak používate len OpenRouter, pozrite si nižšie časť [Ako získať kľúč API](#how-to-get-an-api-key-desktop-app). Ak nechcete používať kľúč API, môžete nainštalovať Ollamu (z [ollama.com](https://ollama.com)) a namiesto toho používať lokálne modely, napríklad `translategemma:4b`.

Ak používate **webovú verziu**, správca servera nakonfiguruje poskytovateľov pomocou premenných prostredia, takže nemôžete priamo v aplikácii zadať kľúče API.

<br/>

<a id="how-to-get-an-api-key-desktop-app"></a>

### Ako získať bezplatný API kľúč OpenRouter (desktopová aplikácia)

Ak používate desktopovú aplikáciu, postupujte nasledovne:

1. V internetovom prehliadači prejdite na stránku [OpenRouter](https://openrouter.ai).
2. Vytvorte si účet alebo sa prihláste.
3. Otvorte stránku [Kľúče](https://openrouter.ai/keys).
4. Kliknite na tlačidlo pre vytvorenie nového API kľúča.
5. Kľúču priraďte názov, pod ktorým ho budete neskôr spoznať.
6. Skopírujte nový API kľúč.
7. Otvorte Transrewrt a prejdite do **Nastavenia** > **Konfigurácia API**.
8. Vložte kľúč do poľa **OpenRouter API kľúč** (v časti **Nastavenia** > **Konfigurácia API**).
9. Kliknite na **Otestovať OpenRouter kľúč**, aby ste skontrolovali, či funguje.

<br/><br/>

<a id="getting-started"></a>

## Začínanie

Ak používate Transrewrt po prvý raz, postupujte v tomto poradí:

1. Otvorte aplikáciu.
2. V prípade potreby vyberte svoj **jazyk rozhrania** pomocou ikony zemegule.
3. Ak používate **desktopovú aplikáciu**, otvorte [**Nastavenia** > **Konfigurácia API**](#api-config), pridajte kľúč API aspoň pre jedného poskytovateľa (napríklad OpenRouter) a kliknite na **Test**, aby ste to overili.
4. Otvorte [**Nastavenia** > **Modely**](#models) a pridajte jeden alebo viacero modelov do časti **Vybraté modely**.
5. Otvorte [**Nastavenia** > **Jazyky**](#languages) a vyberte si **Najčastejšie používané jazyky**, ak chcete, aby sa vaše najpoužívanejšie jazyky zobrazovali ako prvé.
6. Prejdite na **Preklad** a spustite jednoduchý preklad, aby ste potvrdili, že všetko funguje.
7. Keď to bude fungovať, vyskúšajte **Prepísať** a následne **Transformovať**.

Toto poradie je dôležité. Zabraňuje najčastejšiemu problému pri prvom použití: spusteniu úlohy, skôr ako má aplikácia funkčné pripojenie k API alebo vybratý model.

<br/><br/>

<a id="main-parts-of-the-window"></a>

## Hlavné časti okna

Aplikácia je rozdelená na tri hlavné oblasti:

- **Bočný panel** vľavo.
- **Panel nástrojov** hore.
- **Pracovná oblasť** v strede.

<br/>

<a id="sidebar"></a>

### Bočný panel

Pomocou bočného panela sa môžete pohybovať v rámci aplikácie. Bočný panel môžete skolonťovať, aby ste získali viac miesta – stačí kliknúť na ikonu vedľa loga aplikácie.

<br/>

<table>
  <tr>
    <td valign="top">
       <img src="../images/screenshots/sk/sidebar.png" alt="Bočný panel aplikácie" style="max-width: 100%; border: 1px solid #ddd; border-radius: 4px;">
    </td>
    <td valign="top">
      <br/><br/>
      <ul>
        <li><strong>Preložiť</strong> otvorí pracovnú plochu prekladu.</li><br/>
        <li><strong>Preformulovať</strong> otvorí pracovnú plochu preformulovania.</li><br/>
        <li><strong>Transformovať</strong> otvorí pracovnú plochu vlastných výziev (promptov).</li><br/>
        <li><strong>Dashboard</strong> zobrazuje informácie o využití a nákladoch.</li><br/>
        <li><strong>Nastavenia</strong> otvorí panel nastavení.</li><br/>
        <li><strong>História</strong> zobrazuje históriu používania vrátane vstupného a výstupného textu.</li><br/>
        <li><strong>Užívateľ</strong> zobrazuje užívateľské meno prihláseného užívateľa (iba vo webovej verzii).</li>
      </ul>

</td>
  </tr>
</table>

<br/>

<a id="toolbar"></a>

### Panel s nástrojmi

Panel s nástrojmi sa mierne líši v závislosti od toho, kde sa v aplikácii nachádzate.

- Vľavo sa zobrazuje názov aktuálnej stránky.
- Vpravo sa nachádza **výber modelu** a ovládanie **jazyka rozhrania**.

**Výber modelu** vám umožňuje zvoliť si, ktorý AI model bude použitý pre aktuálnu úlohu.

  ![Výber modelu](../images/screenshots/sk/model-selector.png)

Niektoré bezplatné modely nemusia byť vždy k dispozícii – niekedy sú nedostupné alebo majú obmedzenie využitia. Ak k tomu dôjde, aplikácia tento model automaticky odstráni zo zoznamu dostupných. Ak chcete ovládať, ktoré modely sa zobrazujú, prejdite do [**Nastavenia** > **Modely**](#models) a upravte si zoznam modelov.
Nastavenia modelu môžete otvoriť aj priamo kliknutím na ikonu poskytovateľa vľavo od názvu modelu na paneli s nástrojmi.

<br/>

Ikona **Zeme s kódom jazyka** mení jazyk používateľského rozhrania aplikácie, ako sú ponuky a tlačidlá. **Nemení** však jazyky prekladu používané vo funkcii **Preložiť**.

![Výber jazyka rozhrania](../images/screenshots/sk/language-selector.png)

<br/>

<a id="input-and-output-panels"></a>

### vstupné a výstupné panely

Väčšina pracovných priestorov používa **vstupný** panel na ľavej strane a **výstupný** panel na pravej strane.

Každý panel tiež zobrazuje:

| **Vstup**                                                          | **Výstup**                                                                                                                  |
|--------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------|
| - Počet znakov <br/>- Počet slov <br/>- Počet odsekov   <br/> | - Ako dlho trvala úloha<br/>- **TPS** (tokeny za sekundu)<br/>- Počty znakov, slov a odsekov<br/>- Použitý model |

Ak sa pýtate na technické termíny:

- **Token** znamená malý úsek textu. Môžete o tom uvažovať ako o časti slova alebo krátkom slove.
- **TPS** znamená, koľko takýchto textových úsekov model spracoval za sekundu.

<br/>

Môžete tiež sledovať náklady každej operácie (ak sú dostupné) a celkové náklady aktiváciou možnosti `Zobraziť informácie o nákladoch pri akciách` v časti [**Nastavenia** > **Všeobecné nastavenia**](#general-settings).

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="translate"></a>

## Preklad

Použite **Preklad**, keď chcete preložiť text z jedného jazyka do druhého.

![Pracovná plocha prekladu](../images/screenshots/sk/translate.png)

<br/>

<a id="translate-text"></a>

### Preklad textu

1. Otvorte **Preložiť**.
2. Vo výbere **Z** zvoľte jazyk.
3. Vo výbere **Do** zvoľte jazyk.
4. Vyberte model na paneli nástrojov.
5. Do poľa **Vstup** napíšte alebo prilepte text.
6. Kliknite na **Preložiť**.
7. Výsledok si prečítajte v poli **Výstup**.
8. Ak si chcete výsledok skopírovať, použite tlačidlo na kopírovanie.

<br/>

<a id="language-selection"></a>

### Výber jazyka

- **Z** môže byť konkrétny jazyk alebo **Zistiť jazyk**.
- **Do** je jazyk, v ktorom chcete výsledok.

Vaše vybrané **Najvyššie jazyky** sa zobrazia na začiatku zoznamu. Môžete ich nastaviť v časti [**Nastavenia** > **Jazyky**](#languages).

<br/>

<a id="helpful-translation-settings"></a>

### Užitočné nastavenia pre preklad

V časti [**Nastavenia** > **Všeobecné nastavenia**](#general-settings) môžete zmeniť správanie prekladu:

- **Automatický preklad po vložení** vykoná preklad ihneď po vložení textu.
- **Automatické kopírovanie výsledku do schránky** skopíruje výsledok automaticky po úspešnom preklade.
- **Preklad v reálnom čase (počas písania)** spúšťa preklad, kým píšete.
- **Časový limit (ms)** určuje, ako dlho aplikácia čaká, než spustí preklad v reálnom čase.
- **Enter** určuje, čo sa stane po stlačení klávesy `Enter`:

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="rewrite"></a>

## Prepis

Použite možnosť **Prepis**, ak chcete zlepšiť vyjadrovanie, ale bez zmeny hlavnej významovej náplne.

![Pracovné prostredie Prepisu](../images/screenshots/sk/rewrite.png)

Táto funkcia je užitočná napríklad na:

- opravu pravopisu a gramatiky (**Skontrolujeť pravopis a gramatiku**)
- zjednodušenie textu (**Zlepšiť jasnosť**)
- viacero rôznych prepisov v jednom prechode (**Alternatívne verzie**)
- urobienie textu formálnejšieho alebo neformálnejšieho (**Formálne** / **Neformálne**)
- skrátenie alebo rozšírenie textu (**Skrátiť** / **Rozšíriť**)
- urobenie textu technickejšie znejúceho (**Zarobiť technickým tónom**)

<br/>

> 💡 **TIP**<br/>
> Pri použití režimu „**Skontrolujeť pravopis a gramatiku**“ sa v paneli výstupu (vedľa tlačidla **Kopírovať**) objaví prepínač **Zobraziť zmeny**.
> Zapnutím alebo vypnutím tohto prepínača môžete zobraziť alebo skryť konkrétne opravy, ktoré boli v texte vykonané.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="transform"></a>

## Transform

Použite **Transformáciu**, keď chcete, aby AČ nasledovalo vlastný súbor inštrukcií.

![Pracovná plocha transformácie](../images/screenshots/sk/transform.png)

Toto je najpružnejšia oblasť aplikácie. Môžete ju použiť napríklad na:

- zhrňovanie poznámok
- premenovanie hrubého textu na vyšešľapaný e-mail
- extrahovanie kľúčových informácií
- konverziu textu do konkrétneho formátu
- akúkoľvek inú vlastnú aktivitu s vstupným textom

<br/>

<a id="run-an-existing-prompt"></a>

### Spustenie existujúceho promptu

1. Otvorte **Transformáciu**.
2. Vyberte prompt zo zoznamu promptov.
3. Ak sa zobrazí pole **Cieľový jazyk**, vyberte jazyk, ak ho chcete použiť.
4. Do poľa **Vstup** napíšte alebo vložte text.
5. Kliknite na **Transformovať**.
6. Výsledok si prečítajte v poli **Výstup**.

<br/>

<a id="if-you-have-no-prompts-yet"></a>

### Ak ešte nemáte žiadne ponuky

Ak je váš zoznam ponúk prázdny, kliknite v pracovnom priestore Transformácie na možnosť **Načítať ukážkové ponuky**. Rovnaká možnosť je vždy dostupná v časti [**Nastavenia** > **Transformačné ponuky**](#transform-prompts) na riadku pre import/export. Obe možnosti pridajú dodatočné ukážky, aby ste mohli rýchlo začať.

<br/>

> ℹ️ **Poznámka**<br/>
> Ukážkové ponuky sú k dispozícii v angličtine. Po ich načítaní môžete ponuku upraviť a použiť funkciu **Preložiť ponuku**, aby ste ju preložili do svojho jazyka.

<br/>

<a id="create-a-prompt-quickly"></a>

### Rýchle vytvorenie výzvy

Najrýchlejší spôsob, ako vytvoriť výzvu, je:

1. Kliknite na **Nová výzva**.
2. Kliknite na **Generovať výzvu**.
3. Popíšte, čo má výzva robiť.
4. Vyberte model.
5. Nechajte aplikáciu vytvoriť pre vás koncept.
6. Skontrolujte koncept a kliknite na **Uložiť**.

![Generovať výzvu](../images/screenshots/sk/transform-generate.png)


<br/>

<a id="edit-a-prompt"></a>

### Úprava výzvy

Keď vytvárate alebo upravujete výzvu, editor sa zobrazí vľavo a testovacia oblasť vpravo.

![Editor transformačnej výzvy](../images/screenshots/sk/transform-prompt-edit.png)

Hlavné polia sú:

- **Názov výzvy**: názov zobrazený v zozname výziev.
- **Inštrukcie k výzve (nepovinné)**: krátky tip zobrazený používateľovi pri spustení výzvy.
- **Rolová funkcia modelu**: celková úloha pridelená AI, napríklad „Si užitočný asistent.“
- **Inštrukcie pre model (jedna na riadok)**: konkrétne pravidlá, ktorým má AI dodržiavať.
- **Popis výstupu**: krátky výraz opisujúci výsledok, napríklad „súhrn“ alebo „prepísanie“.
- **Teplota (0,0 → 1,0)**: určuje správanie modelu; pozri nižšie.
- **Požiadať o cieľový jazyk**: po spustení výzvy pridá voľbu cieľového jazyka.

Ak pojem **Teplota** pre vás nie je známy, predstavte si ju nasledovne:

- **Nižšia** hodnota teploty poskytuje stabilnejšie a predvídateľnejšie výsledky.

- **Vyššia** teplota poskytuje väčšiu rozmanitosť a kreativitu.

Môžete tiež použiť:

- **`Vygenerovať výzvu`** na vytvorenie nového návrhu z jednoduchého opisu
- **`Vylepšiť výzvu`** na zlepšenie existujúcej výzvy
- **`Preložiť výzvu`** na preloženie polí výzvy

<br/>

> ⚠️ **UPOZORNENIE**<br/>
> Kliknite na **`Uložiť`**, skôr ako kliknete na **`Späť na spustenie`**. Ak sa vrátite späť bez uloženia, vaše zmeny budú stratené.

<br/>

<a id="test-a-prompt-before-using-it"></a>

### Otestujte výzvu pred jej použitím

Panel testovania vpravo vám umožňuje vyskúšať svoju výzvu s ukážkovým textom, než ju začnete používať v každodennom pracovnom procese.

Toto je užitočné v prípadoch, keď:

- vytvárate novú výzvu
- porovnávate dve verzie výzvy
- chcete skontrolovať tón, dĺžku alebo formát výstupu

<br/>

> ℹ️ **Poznámka**<br/>
> Uložené výzvy môžete exportovať a importovať v sekcii [**Nastavenia** > **Transformačné výzvy**](#transform-prompts).

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="dashboard"></a>

## Nástenka

Použite **nástenku**, či si môžete pozrieť, ako veľmi aplikáciu používate a koľko vás to stojí (pre modely za poplatok).

![Prehľad nástenky](../images/screenshots/sk/dashboard-summary.png)


<br/>

> ℹ️ **Poznámka**<br/>
> Ak používate iba **bezplatné** modely, suma **nákladov** môže byť nulová a prehľady zamerané na náklady môžu vyzerať prázdne. Vo **Výpise**, **Využitie v čase** a **Využitie podľa modelu** sa stále zobrazujú **počty volaní** (preklad, prepísanie a transformácia), ak máte aktivitu v zvolenom období.

<br/>

<a id="filter-the-data"></a>

### Filtrovanie dát

Pomocou tlačidiel na filtrovanie v hornej časti môžete zmeniť časové obdobie.

![Filtre v informačnom paneli](../images/screenshots/sk/dashboard-filter.png)

<br/>

> ℹ️ **Poznámka**<br/>
> Filter **Používateľ** je vo webovej verzii viditeľný len pre správcov. Bežní používatelia tento filter nevidia a v desktopovej aplikácii nie je dostupný.

<br/>

<a id="dashboard-tabs"></a>

### Karty informačného panela

- **Zhrnutie** poskytuje prehľad o využití a nákladoch. Obsahuje časový vývoj využitia (nasledujúco sčítané **počty volaní** podľa dní pre preklad, prepis a transformáciu) a využitie podľa modelu (celkový počet **volaní podľa modelu**, vrátane transformácie).
- **Podľa využitia** rozdeľuje aktivitu podľa jazyka prekladu, režimu prepisu a vstupného výzvu pre transformáciu.
- **Podľa modelu** zobrazuje, ktoré modely ste použili a aké mali náklady.
- **Podľa dňa** zobrazuje denné celkové sumy.
- **Všetky volania** zobrazuje kompletný historický záznam volaní a umožňuje jeho export.

<br/>

<a id="export-data"></a>

### Export dát

Do tabuliek v informačnom paneli je možné exportovať údaje vo formátoch:

- **JSON**
- **CSV**
- **XLSX**

To je užitočné, ak chcete kontrolovať aktivitu mimo aplikácie alebo zdieľať správu.

<br/>

<a id="delete-stored-records-for-a-model"></a>

### Odstránenie uložených záznamov pre model

V sekcii **Podľa modelu** alebo **Všetky volania** môžete odstrániť uložené záznamy pre model kliknutím na ikonu „koša“.

> ⚠️ **UPOZORNENIE**<br/>
> Odstránenie uložených záznamov nie je možné vrátiť späť. Použite len vtedy, ak ste si istí, že túto históriu už nepotrebujete.

Ak chcete odstrániť všetky údaje alebo záznamy podľa ich veku, prejdite do časti [**Nastavenia** > **Sledovanie nákladov**](#cost-tracking). Tu nájdete možnosti na zmazanie všetkých uložených údajov alebo len tých, ktoré sú staršie ako určitý dátum.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="history"></a>

## História

Kliknutím na **História** si môžete prezrieť záznam svojich aktivít v aplikácii **Transrewrt**, vrátane vstupov a výstupov jednotlivých operácií.

![Stránka História](../images/screenshots/sk/history.png)

<br/>

<a id="filter-the-history"></a>

### Filtrovanie údajov

**História** používa rovnaké filtre ako stránka **Ovládací panel**. Použite ich na výber časového obdobia.

![Filtre ovládacieho panela](../images/screenshots/sk/dashboard-filter.png)

<br/>

> ℹ️ **Poznámka**<br/>
> Filter **Užívateľ** je vo webovej verzii viditeľný len pre správcov. Bežní používatelia tento filter nevidia a v desktopovej aplikácii nie je dostupný.

<br/>

<a id="export-history-data"></a>

###  Exportovať dáta histórie

Stránka histórie môže exportovať filtrované dáta do formátov:

- **JSON**
- **CSV**
- **XLSX**

Toto je užitočné, ak chcete skontrolovať aktivitu mimo aplikácie alebo zdieľať správu.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="settings"></a>

## Nastavenia

Otvorte **Nastavenia** na bočnom paneli, aby ste mohli prispôsobiť správanie aplikácie.

Dostupné karty závisia od platformy a vašej roly:

| Záložka              | Desktop | Web (správca) | Web (bežný používateľ) |
|----------------------|:-------:|:------------:|:---------------------:|
| Všeobecné nastavenia |   áno   |      áno     |          áno          |
| Modely               |   áno   |      áno     |          áno          |
| Jazyky               |   áno   |      áno     |          áno          |
| Sledovanie nákladov  |   áno   |      áno     |           –           |
| Transformácia pokynov|   áno   |      áno     |          áno          |
| Používatelia         |    –    |      áno     |           –           |
| Konfigurácia API     |   áno   |      áno     |           –           |
| O aplikácii          |   áno   |      áno     |          áno          |

<br/>

> ℹ️ **Poznámka**<br/>
> Vo webovej verzii má každý používateľ vlastné nastavenia. Nastavenia ako vybrané modely, jazyky, všeobecné možnosti a vstupné výzvy sú uložené pre každého používateľa zvlášť. Zmeny, ktoré urobíte, nemajú vplyv na ostatných používateľov.

<br/>


[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="general-settings"></a>

### Všeobecné nastavenia

Použite **Všeobecné nastavenia** na ovládanie správania pri písaní, či sú uložené podrobnosti vykonania pre **Históriu** a vzhľad.

**Správanie**

- **Správanie klávesu ENTER** určuje, či `Enter` spustí úlohu alebo vloží nový riadok.
- **Automatický preklad po vložení** spustí preklad hneď po vložení textu.
- **Automatické kopírovanie výsledku do schránky** automaticky skopíruje úspešné výsledky.
- **Preklad v reálnom čase (počas písania)** prekladá počas písania.
- **Časový limit (ms)** nastavuje dobu čakania na preklad v reálnom čase.

**História**

- **Uchovávať históriu výkonu** určuje, či každý preklad, prepis a transformácia uložia **vstupný a výstupný text** do zobrazenia [**História**](#history) na bočnom paneli. Vypnutie tejto možnosti spustí potvrdenie; ak potvrdíte, uložený text z histórie sa odstráni z databázy.

- Možnosť **Vymazať históriu údajov** vám umožňuje odstrániť uložený text podľa veku (napríklad starší ako pár mesiacov, alebo **všetky údaje (vymazať)**) pomocou tlačidla **Vymazať údaje**. Tým sa ovplyvnia len uložené texty pre zobrazenie **História**; **neodstraňuje to** celkové náklady alebo údaje o používaní. Ak chcete odstrániť alebo skrátiť údaje o **nákladoch**, použite [**Nastavenia** > **Sledovanie nákladov**](#cost-tracking).

**Vzhľad**

- **Zobraziť informácie o nákladoch pri akciách** ovláda zobrazenie nákladov za jednotlivú operáciu (ak sú k dispozícii) a celkových nákladov na paneloch výstupu pre preklad, prepis a transformáciu.
- **Počet desatinných miest pre náklady** mení spôsob zobrazenia desatinných čísel nákladov.
- **Iba pre webovú verziu:** **zobraziť okraj okolo aplikácie** pridáva voľný priestor okolo užívateľského rozhrania.
- **Písmo** mení písmo používané v textových paneloch.
- **Veľkosť** mení veľkosť písma.

**Zálohovanie konfigurácie**

- **Zahrnúť údaje o používaní do zálohy** – ak je zapnuté, zip súbor obsahuje aj históriu vykonaných operácií a údaje o volaní API.

- **Zálohovať konfiguráciu** — vytvorí jeden súbor ZIP (`transrewrt-config-backup-YYYY-MM-DD_HHMMSS.zip`, štandardne v čase UTC) obsahujúci `config.json`, `state.json`, voliteľný šifrovací kľúč, používateľov, predvoľby, vlastné výzvy a údaje o používaní, ak ste sa na to prihlásili. Po úspešnej zálohe sa zobrazí potvrdenie s názvom uloženého súboru.
- **Obnoviť zo zálohy** — najskôr sa otvorí **dialógové okno s potvrdením**. Vyberte záložný súbor ZIP vo vnútri dialógu (**Prehliadať** / výber súboru alebo presunutie pomocou ťahania a vkladania, tam, kde je to podporované) a potom skontrolujte voľby:
  - **Obnoviť údaje o používaní** — importovať údaje/historické údaje zo súboru ZIP, keď boli pri zálohovaní zahrnuté; ponechajte vypnuté, ak chcete obnoviť iba nastavenia a výzvy.
  - **Vymazať staré údaje o používaní pred obnovením** — odstrániť existujúce údaje/historické údaje z tejto inštalácie pred aplikovaním zálohy (voliteľné; použite, keď chcete čisté nahradenie).

Zálohy vytvorené v webovej alebo desktopovej verzii je možné obnoviť v druhej verzii. Pri obnove desktopovej zálohy vo webovej verzii budú dáta obnovené pre používateľa administrátora.


<br/>

<a id="models"></a>

### Modely

Použite **Nastavenia** > **Modely**, aby ste si vybrali, ktoré modely sa zobrazia na paneli nástrojov.

![Záložka Modely v nastaveniach](../images/screenshots/sk/settings-models.png)

Stránka obsahuje dva zoznamy:

- **Dostupné modely** na ľavej strane
- **Vybrané modely** na pravej strane

Medzi užitočné ovládacie prvky patria:

- **Hľadať modely...** na nájdenie modelu podľa mena
- **Značky poskytovateľa** na zúženie zoznamu na jednu platformu (OpenRouter, OpenAI, Ollama, …)
- **Iba zadarmo** na zobrazenie len bezplatných modelov
- **Obnoviť** na opätovné načítanie zoznamu
- **Rozbaliť všetko** a **Zbaliť všetko** pri triedení podľa poskytovateľa

Identifikátory modelov obsahujú predponu poskytovateľa (napr. `openrouter/…` oproti `openai/…`). Označenia ako **OpenAI (OpenRouter)** oproti **OpenAI (priamo)** ukazujú, ako je premávka smerovaná.

> ℹ️ **Poznámka**<br/>

> **OpenRouter Body Builder** (`openrouter/bodybuilder`) je smerovací model, nie všeobecný model pre chat: jeho odpoveď je vo formáte JSON, ktorý popisuje požiadavky na OpenRouter API (napríklad pole `requests` s `model` a `messages`). Ak ho použijete pre **Preklad**, **Prepísanie** alebo **Transformáciu**, panel výstupu zobrazí tento JSON namiesto hotového textu. Na tieto úlohy vyberte bežný textový model. Viac informácií na [stránke modelu Body Builder](https://openrouter.ai/openrouter/bodybuilder) na OpenRouter.

Akcie:

 - Pre pridanie modelu kliknite na **Pridať** alebo kamkoľvek do riadku.

 - Pre odstránenie modelu kliknite na **X** vedľa neho v sekcii **Vybrané modely** alebo **Vybraný** v sekcii Dostupné modely.

 - Ak chcete zrušiť výber zoznamu, kliknite na **Zrušiť výber všetkých**. Požadovaný bezplatný model zostane v zozname.

<br/>

> ℹ️ **Poznámka**<br/>

> Ak nechcete okamžite pridať kredit na OpenRouter, začnite tým, že povolíte možnosť **Iba zadarmo** a vyberiete si bezplatné modely (bez potreby platobnej karty). Môžete tiež použiť Ollamu na spustenie modelov lokálne bez akéhokoľvek API kľúča.

<br/>

<a id="languages"></a>

### Jazyky

Použite **Nastavenia** > **Jazyky** na usporiadanie zoznamov jazykov používaných v aplikácii.

- **Najvyššie jazyky** sú prichytené na hornom okraji zoznamov jazykov v položkách **Preložiť** a **Transformovať**.
- **Vlastný jazyk** vám umožňuje pridať jazyk, ktorý nie je vo vstavanom zozname.

Ak pridáte vlastný jazyk, zobrazí sa vo výberoch jazykov spolu s predvolenými možnosťami.

<br/>

<a id="cost-tracking"></a>

### Sledovanie nákladov

Pomocou **Nastavení** > **Sledovanie nákladov** môžete spravovať informácie o nákladoch.

- **Celkové náklady** zobrazujú bežiaci súčet.
- **Kopírovať hodnotu** skopíruje celkové náklady do schránky.
- **Vynulovať náklady** vynuluje uložený súčet.
- **Synchronizovať so využitím kľúča API** nastaví súčet podľa údajov o využití hlásených vášim účtom OpenRouter (iba pre OpenRouter).
- **Využitie kľúča API** zobrazí podrobnosti o využití OpenRouter, ak sú k dispozícii.
- **Odstrániť údaje o nákladoch** vymaže všetky údaje alebo iba záznamy staršie ako vybraný dátum.

**Sledovanie nákladov:** Keď používate modely OpenRouter, aplikácia zobrazuje vaše skutočné využitie a výdavky na základe informácií o nákladoch od OpenRouter. Pre všetky ostatné poskytovateľov aplikácia odhaduje náklady na základe cien zverejnených spoločnosťou OpenRouter. Ak nie je cena k dispozícii, odhad môže byť nulový.

<br/>

> ℹ️ **Poznámka**<br/>
> **Všetky údaje o nákladoch sú len odhady určené výlučne na vašu orientáciu, nie ide o oficiálne fakturačné doklady.**

<br/>

> ⚠️ **Upozornenie**<br/>

> Odstránenie dát nie je možné vrátiť späť. Pred vymazaním sa uistite, že ste svoje dáta zazálohovaní alebo exportovali cez [**Históriu**](#history) 
> alebo [**Ovládací panel** > **Všetky volania**](#dashboard-tabs), inak budú natrvalo stratené. 
> Spolu s každým záznamom volania API budú odstránené aj všetky vstupné a výstupné histórie.

<br/>

<a id="transform-prompts"></a>

### Transformácia výziev

Použite **Nastavenia** > **Transformovať výzvy** na hromadnú správu výziev.

Môžete:

- prezerať uložené výzvy
- odstrániť výzvy
- importovať výzvy zo súboru
- exportovať výzvy na zálohovanie alebo zdieľanie
- načítať ukážkové výzvy do zoznamu výziev

<br/>

<a id="users"></a>

### Používatelia

Použite **Používateľov** na správu používateľských účtov vo webovej verzii. Môžete pridávať používateľov, aktualizovať ich údaje, obnoviť heslá a odstraňovať účty.

<br/>

<a id="api-config"></a>

### Konfigurácia API

Podporovaní poskytovatelia sú: OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras a **Ollama** (lokálne modely prostredníctvom základnej URL). Nakonfigurovať musíte len tých poskytovateľov, ktorých používate.

**Webová aplikácia: len pre správcu**

Kľúče API sa konfigurujú prostredníctvom systémových alebo Docker premenných prostredia – nezadávajú sa cez webové rozhranie. Táto stránka zobrazuje, ktorí poskytovatelia majú nakonfigurovaný kľúč, a umožňuje ich otestovať kliknutím na tlačidlo **`Test`**.

<br/>

> ℹ️ **Poznámka**<br/>
> Ak chcete zmeniť kľúč API, aktualizujte premennú prostredia vo vašej systémovej alebo Docker konfigurácii a reštartujte server alebo kontajner.

> ℹ️ **Poznámka**<br/>

> **Zálohy konfigurácie** (pozri časť [**Všeobecné nastavenia** → Záloha konfigurácie](#general-settings)) môžu obsahovať **rozlíšené** kľúče poskytovateľa vo vnútri súboru `config.json` v archíve ZIP. Obnovenie tohto archívu ale **nekopíruje** tieto kľúče späť do konfiguračného súboru uloženého na serveri – aktívne kľúče stále pochádzajú z prostredia a existujúceho stavu súboru, ako je uvedené vyššie.

<br/>

**Desktopová aplikácia**

Použite **Konfiguráciu API**, ak chcete uložiť kľúče API pre každého poskytovateľa, ktorého využívate. Pre Ollama zadajte **základnú URL**, namiesto kľúča API.

<br/>

> 💡 **Tip** <br/>
> Ak nechcete používať kľúč API ani platiť za využitie služby, môžete si [stiahnuť Ollamu](https://ollama.com) a spustiť modely (napr. `translategemma:4b`) priamo na svojom počítači zdarma. Prípadne si môžete vytvoriť bezplatný účet na OpenRouter (nie je potrebná kreditná karta) a využívať ich bezplatné modely, alebo získať bezplatný kľúč API od spoločností Cerebras, Google, Groq alebo Mistral AI.

<br/>

- Pridajte len poskytovateľov, ktorí sú vám potrební. V ponuke **Nastavenia** > **Modely** začína každé ID modelu názvom poskytovateľa (napríklad `openrouter/openrouter/free`, `openai/gpt-4o`, `ollama/llama3`).

Ak chcete pridať API kľúč, zadajte jeho hodnotu do textového poľa a kliknite na **`Uložiť`**. Ak chcete nahradiť existujúci kľúč, kliknite na **`Upraviť`**. Ak chcete overiť funkčnosť kľúča, kliknite na **`Otestovať`**. V prípade základnej URL Ollamy vždy kliknite **`Otestovať`**, aby ste skontrolovali spojenie.

<br/>

> ℹ️ **POZNÁMKA**<br/>
> Aktuálnu hodnotu API kľúča nie je možné zobraziť. Môžete ju len nahradiť pomocou tlačidla **`Upraviť`**.
> API kľúče sú v konfiguračnom súbore uložené zašifrované.

<br/>

<a id="about"></a>

### O aplikácii

Karta **O aplikácii** zobrazuje:

- názov aplikácie
- číslo verzie
- dátum zostavenia
- odkaz na repozitár projektu

<br/><br/>

<a id="common-issues"></a>

## Bežné problémy

Ak niečo nefunguje podľa očakávania, skontrolujte najskôr nasledujúce body.

<br/>

<a id="the-app-will-not-translate-rewrite-or-transform-text"></a>

### Aplikácia nebude prekladať, prepisovať ani upravovať text

Skontrolujte:

- či ste vybrali model na paneli nástrojov
- či je aspoň jeden model uvedený v časti [**Nastavenia** > **Modely**](#models)
- či je správne nastavené vaše API

Ak používate desktopovú aplikáciu:

1. Otvorte [**Nastavenia** > **Konfigurácia API**](#api-config).
2. Skontrolujte, či je uložený aspoň jeden API kľúč.
3. Kliknite na **Otestovať** vedľa poskytovateľa, aby ste potvrdili, že kľúč funguje.

<br/>

<a id="the-model-list-is-empty"></a>

### Zoznam modelov je prázdny

Otvorte [**Nastavenia** > **Modely**](#models) a kliknite na **Obnoviť**.

Ak je to potrebné:

- vyhľadajte model
- zapnite možnosť **Iba zadarmo**
- pridajte jeden alebo viacero modelov do časti **Vybrané modely**

<br/>

<a id="the-result-is-too-slow-or-too-expensive"></a>

### Výsledok je príliš pomalý alebo príliš drahý

Vyskúšajte niečo z nasledujúcich krokov:

- vyberte iný model
- použite kratší vstup
- vypnite možnosť **Preklad v reálnom čase (počas písania)** v časti [**Nastavenia** > **Všeobecné nastavenia**](#general-settings)
- pre jednoduché úlohy použite bezplatné modely (pozri [Modely](#models))

<br/>

<a id="the-interface-is-in-the-wrong-language"></a>

### Rozhranie je v nesprávnom jazyku

Kliknite na ikonu gule v [paneli s nástrojmi](#toolbar) a vyberte si požadovaný **jazyk rozhrania**.

<br/>

<a id="the-text-is-too-small-or-hard-to-read"></a>

### Text je príliš malý alebo ťažko čitateľný

Otvorte [**Nastavenia** > **Všeobecné nastavenia**](#general-settings) a zmeňte:

- **Typ písma**
- **Veľkosť**

<br/>

<a id="dashboard-charts-are-empty"></a>

### Grafy na nástenke sú prázdne

To je bežné, ak:

- používate iba **bezplatné modely** a pozrite sa na údaje o **nákladoch** (tie môžu byť nulové); grafy počtu volaní **použitia** na záložke **Zhrnutie** stále potrebujú dáta z vybraného obdobia
- vybraný **časový filter** nezahŕňa obdobie, keď boli volania vykonané — skúste položku **Všetko**, aby ste si overili

Ak sú grafy stále prázdne po výbere **Všetko**, skontrolujte, či sa volania zobrazujú na záložke [**História**](#history) alebo v záložke **Všetky volania**.

<br/>

<a id="cost-shows-not-available-or-seems-wrong"></a>

### Cena sa zobrazuje ako „nedostupná“ alebo vyzerá byť nesprávna

Ak používate modely prostredníctvom **OpenRouter**, aplikácia zobrazí skutočné výdavky nahlásené službou OpenRouter.

Pre **iných poskytovateľov** (napr. OpenAI priamo, Anthropic priamo atď.) sa cena odhaduje na základe cenových údajov publikovaných službou OpenRouter. Ak sa pre model nenašla zodpovedajúca cena, zobrazi sa ako **nedostupná** a nebude zahrnutá do vášho súčtu výdavkov.

<br/>

<a id="total-cost-does-not-match-my-provider-bill"></a>

### Celkové náklady sa nezhodujú s účtom poskytovateľa

Všetky údaje o nákladoch v aplikácii sú **iba orientačné a slúžia len pre informáciu**, nie sú to oficiálne fakturačné vyhlásenia.

Ak chcete, aby sa celková suma viac priblížila vašim skutočným výdavkom na OpenRouter, otvorte [**Nastavenia** > **Sledovanie nákladov**](#cost-tracking) a kliknite na možnosť **Synchronizovať s využitím API kľúča**.

<br/>

<a id="the-history-page-is-missing-from-the-sidebar"></a>

### Stránka História chýba na bočnom paneli

Možnosť **Uchovávať históriu vykonania** môže byť vypnutá. Otvorte [**Nastavenia** > **Všeobecné nastavenia**](#general-settings) a zapnite ju. Upozorňujeme, že zapnutím sa nesmazané údaje histórie nesmazané predtým neobnovia.

<br/>

<a id="web-app-session-expired"></a>

### Webová aplikácia: neočakávane presmerovaná na prihlasovaciu stránku

Vaša relácia mohla vypršať. Prihláste sa znova. Ak sa to stáva často, skontrolujte nastavenia vypršania relácie v konfigurácii servera.

<br/>

<a id="web-admin-forgot-or-lost-a-password"></a>

### Webová administrácia: zabudnuté alebo stratené heslo

Toto sa vzťahuje na **webovú aplikáciu hostovanú samotným používateľom** (Docker), nie na desktopovú aplikáciu (Electron).

- Ak sa naďalej môže prihlásiť iný správca, môže otvoriť [**Nastavenia** > **Používatelia**](#users), vybrať účet a nastaviť **nové heslo**.
- Ak ste **zamknutí von**, ale máte **prístup cez príkazový riadok** k počítaču alebo kontajneru, obnovte heslo pomocou pomocníka, ktorý je súčasťou obrazu (nahraďte `transrewrt`, ak ste zmenili predvolený názov, a uzavrite heslo do úvodzoviek, ak obsahuje medzery alebo špeciálne znaky):

```bash
docker exec transrewrt reset-web-password '<username>' '<new-password>'
```

Východzie užívateľské meno pre administrátora je `admin`, ak ste nikdy nevytvorili iné účty. Ak zadáte len jeden argument, bude považovaný za nové heslo pre `admin`.

Ak spúšťate aplikáciu z **lokálnej kópie zdrojového kódu** namiesto Dockeru, použite:

```bash
pnpm run reset-web-password -- <username> <new-password>

Skript aktualizuje záznam používateľa v databáze SQLite (a môže vytvoriť používateľa `admin`, ak chýba). Po obnovení sa prihláste pomocou nového hesla.


<br/>

<a id="dashboard-shows-no-data-for-other-users"></a>

### Na informačnom paneli sa údaje iných používateľov nezobrazujú (web)

Údaje všetkých používateľov môžu prostredníctvom filtra **Používatelia** zobraziť iba **administrátori**. Bežní používatelia podľa návrhu vidia iba svoju vlastnú aktivitu.

<br/>

<a id="i-changed-a-prompt-and-lost-the-edits"></a>

### Zmenil som výzvu a stratil som úpravy

Pri úprave výzvy vždy kliknite na **Uložiť**, predtým ako kliknete na **Späť na spustenie**.

<br/><br/>

<a id="quick-tips"></a>

## Rýchle tipy

- Začnite s [**Preložiť**](#translate), aby ste sa uistili, že vaša inštalácia funguje, skôr ako prejdete k [**Preformulovať**](#rewrite) alebo [**Transformovať**](#transform).
- Použite [**Preformulovať**](#rewrite) na každodenné zlepšovanie slovného znenia.
- Použite [**Transformovať**](#transform), keď potrebujete opakovateľný pracovný postup pre konkrétnu úlohu.
- Použite [**Nástenku**](#dashboard), ak chcete sledovať využitie a náklady.
- Použite [**Históriu**](#history), aby ste si prehliadli minulé operácie vrátane úplného vstupného a výstupného textu.
- Pravidelne exportujte výzvy, ak vytvárate knižnicu výziev, ktorú chcete mať v bezpečí (pozri [Transformovať výzvy](#transform-prompts)) alebo ak ju chcete zdieľať s inými.

<br/><br/>

<a id="disclaimer"></a>

## Zrieknutie sa zodpovednosti

Názvy produktov a ikony patria ich príslušným vlastníkom a používajú sa výlučne na identifikačné účely. Tento softvér nie je prepojený ani schválený žiadnou z uvedených značiek.

<br/><br/>

<a id="license"></a>

## Licencia

Autorské práva © 2026 Waldemar Scudeller Jr.

[Apache licencia 2.0](LICENSE)