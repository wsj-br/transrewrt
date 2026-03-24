---
translated_at: "2026-03-24T03:12:34.099Z"
source_hash: "fc671c16dd34a2c355752935670712beb8abd2ae65453de44983a2f2f0701696"
source_mtime: 1774306679773.736
model: "qwen/qwen3-235b-a22b-2507"
---
![Transrewrt banner](../images/transrewrt_banner.png)


<a id="transrewrt-user-guide"></a>
# Príručka pre používateľa

<br/>

<a id="introduction"></a>
## Úvod

Transrewrt vám pomáha pracovať s textom tromi hlavnými spôsobmi:

- **Preklad** – preklad textu z jedného jazyka do druhého.
- **Preformulovanie** – preformulovanie textu v inom štýle, napríklad jasnejšie, stručnejšie alebo formálnejšie.
- **Úprava** – spracovanie textu pomocou vlastných inštrukcií pre umelú inteligenciu, tzv. promptov.

<br/>

Táto príručka vysvetľuje, ako aplikáciu používať po jej nainštalovaní a spustení. Inštrukcie k inštalácii nájdete v hlavnom súbore **[README](README.sk.md)**.

<br/>

> ℹ️ **Poznámka**<br/>
> Transrewrt je dostupný ako desktopová aplikácia pre systémy Windows a Linux a zároveň ako webová aplikácia, ktorú si môžete hostovať sami. Táto príručka sa zameriava na bežné používanie aplikácie. Pokiaľ sa určitá funkcionalita týka len jednej verzie, je to jasne označené.

<small>**Prečítajte si v iných jazykoch:** [English (UK)](USER-GUIDE.sk.md) · [Português (BR)](USER-GUIDE.pt-BR.md) · [العربية](USER-GUIDE.ar.md) · [বাংলা](USER-GUIDE.bn.md) · [Català](USER-GUIDE.ca.md) · [简体中文](USER-GUIDE.zh-CN.md) · [繁體中文](USER-GUIDE.zh-TW.md) · [Hrvatski](USER-GUIDE.hr.md) · [Čeština](USER-GUIDE.cs.md) · [Nederlands](USER-GUIDE.nl.md) · [English (US)](USER-GUIDE.en-US.md) · [Filipino](USER-GUIDE.tl.md) · [Français](USER-GUIDE.fr.md) · [Deutsch](USER-GUIDE.de.md) · [Ελληνικά](USER-GUIDE.el.md) · [हिन्दी](USER-GUIDE.hi.md) · [Magyar](USER-GUIDE.hu.md) · [Italiano](USER-GUIDE.it.md) · [日本語](USER-GUIDE.ja.md) · [Basa Jawa](USER-GUIDE.jv.md) · [한국어](USER-GUIDE.ko.md) · [Bahasa Melayu](USER-GUIDE.ms.md) · [فارسی](USER-GUIDE.fa.md) · [Polski](USER-GUIDE.pl.md) · [Português (PT)](USER-GUIDE.pt.md) · [ਪੰਜਾਬੀ](USER-GUIDE.pa.md) · [Română](USER-GUIDE.ro.md) · [Русский](USER-GUIDE.ru.md) · [Slovenčina](USER-GUIDE.sk.md) · [Español](USER-GUIDE.es.md) · [Kiswahili](USER-GUIDE.sw.md) · [Svenska](USER-GUIDE.sv.md) · [తెలుగు](USER-GUIDE.te.md) · [ภาษาไทย](USER-GUIDE.th.md) · [Türkçe](USER-GUIDE.tr.md) · [Українська](USER-GUIDE.uk.md) · [Tiếng Việt](USER-GUIDE.vi.md)</small>

<br/>

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Obsah** 

- [Pred spustením](#before-you-start)
  - [Ako získať bezplatný OpenRouter API kľúč (desktopová aplikácia)](#how-to-get-a-free-openrouter-api-key-desktop-app)
- [Začíname](#getting-started)
- [Hlavné časti okna](#main-parts-of-the-window)
  - [Bočný panel](#sidebar)
  - [Panel nástrojov](#toolbar)
  - [Vstupné a výstupné panely](#input-and-output-panels)
- [Preklad](#translate)
  - [Preklad textu](#translate-text)
  - [Výber jazyka](#language-selection)
  - [Užitočné nastavenia prekladu](#helpful-translation-settings)
  - [Klávesové skratky](#keyboard-shortcuts)
- [Preformulovanie](#rewrite)
  - [Preformulovanie textu](#rewrite-text)
- [Úprava](#transform)
  - [Spustenie už existujúceho promptu](#run-an-existing-prompt)
  - [Ak nemáte žiadne prompty](#if-you-have-no-prompts-yet)
  - [Rýchle vytvorenie promptu](#create-a-prompt-quickly)
  - [Upravenie promptu](#edit-a-prompt)
  - [Otestovanie promptu pred použitím](#test-a-prompt-before-using-it)
  - [Správa uložených promptov](#manage-saved-prompts)
- [Dashboard](#dashboard)
  - [Filtrovanie údajov](#filter-the-data)
  - [Záložky dashboardu](#dashboard-tabs)
  - [Export dát](#export-data)
  - [Vymazanie uložených záznamov pre model](#delete-stored-records-for-a-model)
- [História](#history)
  - [Filtrovanie údajov](#filter-the-data-1)
  - [Export dát histórie](#export-history-data)
- [Nastavenia](#settings)
  - [Všeobecné nastavenia](#general-settings)
  - [Modely](#models)
  - [Jazyky](#languages)
  - [Sledovanie nákladov](#cost-tracking)
  - [Prompty na úpravu](#transform-prompts)
  - [Používatelia](#users)
  - [Konfigurácia API](#api-config)
  - [O aplikácii](#about)
- [Bežné problémy](#common-issues)
  - [Aplikácia neprekladá, neupravuje ani nepremieňa text](#the-app-will-not-translate-rewrite-or-transform-text)
  - [Zoznam modelov je prázdny](#the-model-list-is-empty)
  - [Výsledok je príliš pomalý alebo drahý](#the-result-is-too-slow-or-too-expensive)
  - [Rozhranie je v nesprávnom jazyku](#the-interface-is-in-the-wrong-language)
  - [Text je príliš malý alebo ťažko čitateľný](#the-text-is-too-small-or-hard-to-read)
  - [Grafy na dashboardu sú prázdne](#dashboard-charts-are-empty)
  - [Náklady sú „nedostupné“ alebo nesprávne](#cost-shows-not-available-or-seems-wrong)
  - [Celkové náklady sa nezhodujú s účtom poskytovateľa](#total-cost-does-not-match-my-provider-bill)
  - [Stránka História chýba v bočnom paneli](#the-history-page-is-missing-from-the-sidebar)
  - [Webová aplikácia: neočakávane presmerovanie na prihlasovaciu stránku](#web-app-redirected-to-the-login-page-unexpectedly)
  - [Dashboard nezobrazuje dáta iných používateľov (web)](#dashboard-shows-no-data-for-other-users-web)
  - [Upravil som prompt a stratil som úpravy](#i-changed-a-prompt-and-lost-the-edits)
- [Rýchle tipy](#quick-tips)
- [Zrieknutie sa zodpovednosti](#disclaimer)
- [Licencia](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="before-you-start"></a>

## Pred začiatkom

Na používanie aplikácie Transrewrt potrebujete prístup aspoň k jednému poskytovateľovi umelej inteligencie. Podporovaní poskytovatelia sú: [OpenRouter](https://openrouter.ai) (ktorý agreguje veľa modelov), OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI a [Ollama](https://ollama.com) pre lokálne modely.

Na začatie nemusíte vybrať platený model. Akonáhle pridáte svoj kľúč OpenRouter API, aplikácia automaticky povolí vstavanú **bezplatnú** možnosť OpenRouter. To vám umožní okamžite začať s prekladom, prepisovaním a transformáciou textu.

Jednoducho povedané:

- **Model** je AI systém, ktorý vykonáva prácu. Modely sú uvedené s **predvoľbou poskytovateľa** (napríklad `openrouter/…`, `openai/…`, `ollama/…`).
- **API kľúč** (alebo pre Ollama **základná URL**) je spôsob, ako aplikácia komunikuje s daným poskytovateľom.

Ak používate **desktopovú aplikáciu**, kľúče pridajte v časti [**Nastavenia** > **Konfigurácia API**](#api-config) pre každého poskytovateľa, ktorého využívate. Ak používate len OpenRouter, pozrite si nižšie uvedené pokyny [Ako získať API kľúč](#how-to-get-an-api-key-desktop-app). Ak nechcete používať API kľúč, môžete nainštalovať Ollama (z [ollama.com](https://ollama.com)) a používať namiesto toho lokálne modely.

Ak používate **webovú verziu**, správca servera nakonfiguruje poskytovateľov pomocou premenných prostredia – bežne teda nebudete zadávať API kľúče sami.

<br/>

<a id="how-to-get-an-api-key-desktop-app"></a>
### Ako získať bezplatný kľúč OpenRouter API (desktopová aplikácia)

Ak používate desktopovú aplikáciu, postupujte nasledovne:

1. Otvorte [OpenRouter](https://openrouter.ai) vo svojom webovom prehliadači.
2. Vytvorte si účet alebo sa prihláste.
3. Otvorte stránku [Kľúče](https://openrouter.ai/keys).
4. Kliknite na tlačidlo na vytvorenie nového API kľúča.
5. Kľúču pridajte názov, ktorý si potom dokážete ľahko zapamätať.
6. Skopírujte nový API kľúč.
7. Vráťte sa do Transrewrt a otvorte **Nastavenia** > **Konfigurácia API**.
8. Vložte kľúč do poľa **OpenRouter API kľúč** (v časti **Nastavenia** > **Konfigurácia API**).
9. Kliknite na **Testovať OpenRouter kľúč**, aby ste skontrolovali, či funguje.

<br/>

> ℹ️ **Poznámka**<br/>
> Môžete začať s bezplatnou možnosťou OpenRouter alebo ľubovoľným iným bezplatným modelom, aniž by ste museli zadať údaje kreditnej karty. V mnohých prípadoch je to dostatočné na začatie práce s Transrewrt bez nutnosti výberu plateného modelu. Alternatívne môžete použiť Ollama a spúšťať modely lokálne bez potreby akéhokoľvek API kľúča.

<br/><br/>

<a id="getting-started"></a>
## Začíname

Ak používate Transrewrt po prvýkrát, postupujte v nasledujúcom poradí:

1. Otvorte aplikáciu.
2. V prípade potreby vyberte svoj **jazyk rozhrania** pomocou ikony gule.
3. Ak používate **desktopovú aplikáciu**, otvorte [**Nastavenia** > **Konfigurácia API**](#api-config), pridajte API kľúč aspoň pre jedného poskytovateľa (napríklad OpenRouter) a kliknite na **Testovať**, aby ste overili, či funguje.
4. Otvorte [**Nastavenia** > **Modely**](#models) a pridajte jeden alebo viac modelov do **Vybrané modely**.
5. Otvorte [**Nastavenia** > **Jazyky**](#languages) a vyberte svoje **Najčastejšie jazyky**, ak chcete, aby sa vaše najpoužívanejšie jazyky zobrazovali ako prvé.
6. Prejdite na **Preložiť** a spustite jednoduchý preklad, aby ste overili, či všetko funguje.
7. Keď to funguje, vyskúšajte **Preformulovať** a potom **Transformovať**.

Tohto poradia si vážime. Zabraňuje to najčastejšiemu problému pri prvom použití: pokúšaniu sa vykonať úlohu skôr, ako má aplikácia fungujúce pripojenie k API alebo vybraný model.

<br/><br/>

<a id="main-parts-of-the-window"></a>
## Hlavné časti okna

Aplikácia je rozdelená na tri hlavné oblasti:

- **Bočný panel** na ľavej strane.
- **Panel nástrojov** v hornej časti.
- **Pracovná oblasť** v strede.

<br/>

<a id="sidebar"></a>
### Bočný panel

Bočný panel slúži na pohyb po aplikácii. Bočný panel môžete skrútiť, aby ste získali viac miesta – stačí kliknúť na ikonu vedľa loga aplikácie.

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
        <li><strong>Preformulovať</strong> otvorí pracovnú plochu prepisovania.</li><br/>
        <li><strong>Transformovať</strong> otvorí pracovnú plochu vlastných výziev.</li><br/>
        <li><strong>Početnica</strong> zobrazuje informácie o využití a nákladoch.</li><br/>
        <li><strong>Nastavenia</strong> otvorí panel nastavení.</li><br/>
        <li><strong>História</strong> zobrazuje históriu používania vrátane zadanej a výslednej zostavy textu</li><br/>
        <li><strong>Používateľ</strong> zobrazuje používateľské meno prihláseného používateľa (iba pre webovú verziu).</li>
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

**Výber modelu** vám umožní zvoliť, ktorý model umelého inteligentného systému použiť pre aktuálnu úlohu.

  ![Výber modelu](../images/screenshots/sk/model-selector.png)

> ℹ️ **Poznámka**<br/>
> Niektoré bezplatné modely nemusia byť vždy dostupné – niekedy sú nedostupné alebo majú obmedzenie používania. V takom prípade aplikácia automaticky odstráni daný model zo zoznamu dostupných.<br/>
> Ak chcete určiť, ktoré modely sa zobrazujú, prejdite do časti [**Nastavenia** > **Modely**](#models) a upravte si zoznam modelov. 
> Nastavenia pre konkrétny model môžete otvoriť aj priamo kliknutím na ikonu poskytovateľa vľavo od názvu modelu na paneli s nástrojmi.

<br/>

Ikona **gule sveta + kód jazyka** mení jazyk používateľského rozhrania, ako sú ponuky či tlačidlá. **Nemenuje** jazyky prekladu používané v **Preložiť**.

  ![Výber jazyka rozhrania](../images/screenshots/sk/language-selector.png)

<br/>

<a id="input-and-output-panels"></a>
### Panel vstupu a výstupu

Väčšina pracovných priestorov používa ľavý panel **Vstup** a pravý panel **Výstup**.

Panel **Vstup** zobrazuje:

- Počet znakov
- Počet slov
- Počet odsekov

Panel **Výstup** môže zobrazovať:

- Ako dlho trvala úloha
- Náklady na túto úlohu (ak sú dostupné)
- Vaše celkové náklady
- **TPS** (tokeny za sekundu)
- Počet znakov, slov a odsekov
- Použitý model

Ak sa pýtate na technické termíny:

- **Token** znamená malý blok textu. Môžete si ho predstaviť ako časť slova alebo krátke slovo.
- **TPS** znamená, koľko takýchto textových blokov spracoval model každú sekundu.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="translate"></a>
## Preložiť

Použite **Preložiť**, ak chcete premeniť text z jedného jazyka do druhého.

![Pracovný priestor Preložiť](../images/screenshots/sk/translate.png)

<br/>

<a id="translate-text"></a>
### Preloženie textu

1. Otvorte **Preložiť**.
2. Vo výbere **Z** zvoľte jazyk.
3. Vo výbere **Do** zvoľte jazyk.
4. Na paneli s nástrojmi zvoľte model.
5. Napíšte alebo vložte text do poľa **Vstup**.
6. Kliknite na tlačidlo **Preložiť**.
7. Výsledok si prečítajte v poli **Výstup**.
8. Ak chcete výsledok kopírovať, použite tlačidlo na kopírovanie.

<br/>

<a id="language-selection"></a>
### Výber jazyka

- **Z** môže byť konkrétny jazyk alebo možnosť **Zistiť jazyk**.
- **Do** je jazyk, do ktorého chcete preložiť.

Vaše zvolené **Najobľúbenejšie jazyky** sa zobrazia na vrchu zoznamu. Tieto jazyky môžete nastaviť v časti [**Nastavenia** > **Jazyky**](#languages).

<br/>

<a id="helpful-translation-settings"></a>
### Užitočné nastavenia prekladu

V časti [**Nastavenia** > **Všeobecné nastavenia**](#general-settings) môžete zmeniť správanie prekladu:

- **Prekladať pri vkladaní** automaticky spustí preklad ihneď po vložení textu.
- **Automaticky kopírovať výsledok do schránky** skopíruje výsledok automaticky po úspešnom preklade.
- **Preklad v reálnom čase (pčas písania)** prekladá text priamo počas písania.
- **Časový limit (ms)** určuje, ako dlho počká aplikácia pred spustením prekladu v reálnom čase.

<br/>

<a id="keyboard-shortcuts"></a>
### Klávesové skratky

V časti [**Nastavenia** > **Všeobecné nastavenia**](#general-settings) ovláda možnosť **Správanie klávesy ENTER**, čo sa stane po stlačení klávesu `Enter`:

- **Enter** môže spustiť úlohu a **Shift+Enter** môže pridať nový riadok.
- Alebo môže aplikácia fungovať opačne.

Aktuálny režim sa zobrazuje aj na tlačidle **Preložiť**.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="rewrite"></a>
## Prepísať

Použite **Prepísať**, ak chcete zlepšiť formuláciu bez zmeny hlavného významu.

![Pracovný priestor Prepísať](../images/screenshots/sk/rewrite.png)

Toto je užitočné na:

- opravu pravopisu a gramatiky
- ujasnenie textu
- urobienie textu formálnejšieho alebo menej formálneho
- skrátenie alebo rozšírenie textu
- zvýšenie odbornosti jazyka textu

<br/>

<a id="rewrite-text"></a>

### Prepísať text

1. Otvorte **Prepísať**.
2. Vyberte **Režim**.
3. Vo vybranom paneli vyberte model.
4. Do poľa **Vstup** napíšte alebo prilepte text.
5. Kliknite na **Prepísať**.
6. Výsledok skontrolujte v sekcii **Výstup**.

Správanie klávesy Enter opísané v sekcii [**Preložiť**](#keyboard-shortcuts) platí aj tu.

<br/>

> 💡 **TIP**<br/>
> Keď použijete režim "**Skontrolovať pravopis a gramatiku**", vo výstupnom paneli sa objaví tlačidlo `Zobraziť zmeny`. Kliknutím na toto tlačidlo prepnete zobrazenie korektúr a ukážete alebo skryjete konkrétne zmeny vykonané vo vašom texte.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="transform"></a>
## Transformácia

Použite **Transformáciu**, keď chcete, aby umelá inteligencia nasledovala vlastnú sadu inštrukcií.

![Pracovná plocha Transformácia](../images/screenshots/sk/transform.png)

Ide o najpružnejšiu časť aplikácie. Môžete ju použiť na úlohy ako napríklad:

- zhrnutie poznámok
- premena hrubého textu na vylepšený e-mail
- extrahovanie kľúčových bodov
- prevod textu do konkrétneho formátu

<br/>

<a id="run-an-existing-prompt"></a>
### Spustite existujúci výzva

1. Otvorte **Transformáciu**.
2. Vyberte výzvu zo zoznamu výziev.
3. Ak sa zobrazí pole **Cieľový jazyk**, vyberte jazyk, ak ho chcete použiť.
4. Do poľa **Vstup** napíšte alebo prilepte text.
5. Kliknite na **Transformovať**.
6. Prečítajte si výsledok v sekcii **Výstup**.

<br/>

<a id="if-you-have-no-prompts-yet"></a>
### Ak zatiaľ nemáte žiadne výzvy

Ak je váš zoznam výziev prázdny, kliknite na **Načítať ukážkové výzvy**. Tým sa pridajú zabudované príklady a môžete rýchlo začať.

<br/>

> ℹ️ **Poznámka**<br/>
> Ukážkové výzvy sú dodané v angličtine. Po ich načítaní môžete výzvu upraviť a použiť funkciu **Preložiť výzvu**, aby ste ju preložili do svojho jazyka.

<br/>

<a id="create-a-prompt-quickly"></a>
### Rýchlo vytvorte výzvu

Najrýchlejší spôsob, ako vytvoriť výzvu, je:

1. Kliknite na **Nová výzva**.
2. Kliknite na **Vygenerovať výzvu**.
3. Popíšte, čo má výzva robiť.
4. Vyberte model.
5. Nechajte aplikáciu vytvoriť koncept pre vás.
6. Skontrolujte koncept a kliknite na **Uložiť**.

![Vygenerovať výzvu](../images/screenshots/sk/transform-generate.png)


<br/>

<a id="edit-a-prompt"></a>
### Upraviť výzvu

Keď vytvoríte alebo upravujete výzvu, editor sa zobrazí vľavo a vpravo sa zobrazí testovacia oblasť.

![Editor výziev pre transformáciu](../images/screenshots/sk/transform-prompt-edit.png)

Hlavné polia sú:

- **Názov výzvy**: názov, ktorý sa zobrazuje v zozname výziev.
- **Inštrukcie k výzve (nepovinné)**: krátky tip zobrazený používateľovi pri spúšťaní výzvy.
- **Úloha modelu**: všeobecná úloha pridelená k IA, napríklad „Si užitočný asistent.“
- **Inštrukcie modelu (jedna na riadok)**: konkrétne pravidlá, ktoré sa chce, aby IA dodržiavala.
- **Popis výstupu**: krátky výraz popisujúci výsledok, napríklad „zhrnutie“ alebo „prepísanie“.
- **Teplota (0,0 → 1,0)**: správanie modelu; pozri nižšie.
- **Požiadať o cieľový jazyk**: pridá výber cieľového jazyka pri spustení výzvy.

Ak pojem **Teplota** pre vás nie je poznaný, môžete to pochopiť takto:

- **Nižšia** teplota poskytuje stabilnejšie a predpovedateľnejšie výsledky.
- **Vyššia** teplota poskytuje väčšiu rozmanitosť a kreativitu.

Môžete tiež použiť:

- **`Vygenerovať výzvu`** na vytvorenie konceptu z jednoduchého popisu
- **`Zlepšiť výzvu`** na vylepšenie existujúcej výzvy
- **`Preložiť výzvu`** na preloženie polí výzvy

<br/>

> ⚠️ **VAROVANIE**<br/>
> Skôr než kliknete na **`Späť na spustenie`**, kliknite na **`Uložiť`**. Ak sa vrátite bez uloženia, všetky zmeny budú stratené.

<br/>

<a id="test-a-prompt-before-using-it"></a>
### Otestujte si výzvu pred použitím

Testovací panel vpravo vám umožní otestovať svoju výzvu s ukážkovým textom ešte predtým, ako ju začnete používať pravidelne.

To je užitočné v prípadoch, keď:

- vytvárate novú výzvu
- porovnávate dve verzie výzvy
- chcete skontrolovať tón, dĺžku alebo formát výstupu

<br/>

<a id="manage-saved-prompts"></a>
### Spravujte ul

## Nástenka

Použite **Nástenku**, aby ste videli, ako veľmi aplikáciu používate a aké to má náklady (pre platené modely).

![Zhrnutie nástenky](../images/screenshots/sk/dashboard-summary.png)


<br/>

> ℹ️ **Poznámka**<br/>
> Ak používate len bezplatné modely, grafy súvisiace s nákladmi budú prázdne.

<br/>

<a id="filter-the-data"></a>
### Filtrovanie údajov

Použite tlačidlá filtrov na hornej časti stránky na zmenu časového obdobia.

![Filtre nástenky](../images/screenshots/sk/dashboard-filter.png)

<br/>

> ℹ️ **Poznám problemas**<br/>
> Filter **Používateľ** je vo webovej verzii viditeľný len pre správcov. Bežní používatelia tento filter neuvidia a vo verzii pre desktop aplikáciu nie je k dispozícii.

<br/>

<a id="dashboard-tabs"></a>
### Záložky nástenky

- **Zhrnutie** vám poskytuje prehľad o používaní a nákladoch.
- **Podľa použitia** rozdeľuje aktivitu podľa prekladového jazyka, režimu prepisovania a prepisovacích výziev.
- **Podľa modelu** zobrazuje, ktoré modely ste použili a koľko vás stáli.
- **Podľa dňa** zobrazuje denné celky.
- **Všetky volania** zobrazuje kompletný záznam volaní a umožňuje ich exportovať.

<br/>

<a id="export-data"></a>
### Export údajov

Tabuľky na nástenke umožňujú exportovať údaje vo formáte:

- **JSON**
- **CSV**
- **XLSX**

To je užitočné, ak chcete prevziať aktivitu mimo aplikácie alebo zdielať správu.

<br/>

<a id="delete-stored-records-for-a-model"></a>
### Vymazanie uložených záznamov pre model

V záložkách **Podľa modelu** alebo **Všetky volania** môžete vymazať uložené záznamy pre daný model kliknutím na ikonu „koša“.

> ⚠️ **VAROVANIE**<br/>
> Vymazanie uložených záznamov je nezvratné. Používajte to iba vtedy, ak ste si istý, že už túto históriu nepotrebujete.

Ak chcete vymazať všetky údaje alebo odstrániť záznamy podľa ich veku, prejdite do [**Nastavenia** > **Sledovanie nákladov**](#cost-tracking). Tam nájdete možnosti na vymazanie všetkých uložených údajov alebo iba údajov starších ako určitý dátum.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="history"></a>
## História

Kliknite na **História**, aby ste videli históriu svojich činností v rámci aplikácie **Transrewrt**, vrátane vstupu a výstupu každej operácie.

![Stránka História](../images/screenshots/sk/history.png)

<br/>

<a id="filter-the-history"></a>
### Filtrovanie histórie

**História** používa rovnaké filtre ako stránka **Nástenka**. Použite ich na výber časového obdobia.

![Filtre nástenky](../images/screenshots/sk/dashboard-filter.png)

<br/>

> ℹ️ **Poznámka**<br/>
> Filter **Používateľ** je vo webovej verzii viditeľný len pre správcov. Bežní používatelia tento filter neuvidia a vo verzii pre desktop aplikáciu nie je k dispozícii.

<br/>

<a id="export-history-data"></a>
###  Export údajov histórie

Stránka História umožňuje exportovať filtrované údaje vo formáte:

- **JSON**
- **CSV**
- **XLS slash X**

Toto je užitočné, ak chcete posúdiť aktivitu mimo aplikácie alebo zdieľať správu.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="settings"></a>
## Nastavenia

Otvorte **Nastavenia** zostrany pomocného panelu, aby ste prispôsobili správanie aplikácie.

Dostupné záložky závisia od platformy a vašej úlohy:

  | Záložka               | Desktop | Web (správca) | Web (bežný používateľ) |
  |-----------------------|:-------:|:-------------:|:----------------------:|
  | Všeobecné nastavenia  |   áno   |      áno      |          áno           |
  | Modely                |   áno   |      áno      |          áno           |
  | Jazyky                |   áno   |      áno      |          áno           |
  | Sledovanie nákladov   |   áno   |      áno      |           –            |
  | Prepisovacie výzvy    |   áno   |      áno      |          áno           |
  | Používatelia          |   –     |      áno      |           –            |
  | Konfigurácia API      |   áno   |      áno      |           –            |
  | O aplikácii           |   áno   |      áno      |          áno           |

<br/>

> ℹ️ **Poznámka**<br/>
> Vo webovej verzii má každý používateľ vlastné nastavenia. Nastavenia ako vybrané modely, jazyky, všeobecné voľby a prepisovacie výzvy sa ukladajú pre každého používateľa zvlášť. Zmeny, ktoré urobíte, neovplyvnia ostatných používateľov.

<br/>


[------------------------------------------------------------------ --------------------------------------------------------------------------------------------------------------------------------------------------]: # 

<a id="general-settings"></a>

### Všeobecné nastavenia

Použite **Všeobecné nastavenia** na nastavenie správania pri písaní, či sa podrobnosti spustenia ukladajú do **Histórie** a vzhľadu.

**Správanie**

- **Správanie klávesy ENTER** určuje, či `Enter` spustí úlohu alebo vloží nový riadok.
- **Automatický preklad po vložení** spustí preklad okamžite po vložení textu.
- **Automatické skopírovanie výsledku do schránky** automaticky kopíruje úspešné výsledky.
- **Preklad v reálnom čase (počas písania)** prekladá text, kým píšete.
- **Časový limit (ms)** nastavuje dobu čakania pre preklad v reálnom čase.

**História**

- **Uchovávať históriu spustení** určuje, či každý preklad, prepísanie a transformácia ukladajú **vstupný a výstupný text** pre zobrazenie [**História**](#history) na bočnom paneli. Ak je funkcia vypnutá, zobrazí sa potvrdzovací výzva; ak potvrdíte, uložený text z histórie sa odstráni z databázy.
- **Odstrániť dátá histórie** vám umožní odstrániť uložený text podľa veku (napríklad staršie ako niekoľko mesiacov alebo **všetky dáta (vyčistiť)**) pomocou tlačidla **Odstrániť dáta**. Toto ovplyvní iba uložený text spustení pre zobrazenie **História**; **nezmaže** to celkové náklady ani údaje o využití. Ak chcete odstrániť alebo skrátiť údaje o **nákladoch**, použite [**Nastavenia** > **Sledovanie nákladov**](#cost-tracking).

**Vzhľad**

- **Desatinné miesta pre náklady** mení spôsob zobrazenia desatinných miest nákladov.
- **Iba web:** **zobraziť okraj okolo aplikácie** pridáva dodatočný priestor okolo rozhrania.
- **Rodina písma** mení písmo v textových paneloch.
- **Veľkosť** mení veľkosť písma.

<br/>

<a id="models"></a>
### Modely

Použite **Nastavenia** > **Modely** na výber modelov, ktoré sa zobrazia v paneli nástrojov.

![Karta Nastavenia modelov](../images/screenshots/sk/settings-models.png)

Stránka má dva zoznamy:

- **Dostupné modely** vľavo
- **Vybrané modely** vpravo

Užitočné ovládacie prvky zahŕňajú:

- **Hľadať modely...** na vyhľadanie modelu podľa názvu
- **Štítky dodávateľa** na zúženie zoznamu na jedného dodávateľa (OpenRouter, OpenAI, Ollama, …)
- **Iba zadarmo** na zobrazenie iba bezplatných modelov
- **Obnoviť** na opätovné načítanie zoznamu
- **Rozbaliť všetko** a **Zbaliť všetko** pri triedení podľa dodávateľa

ID modelov obsahujú predponu dodávateľa (napríklad `openrouter/…` oproti `openai/…`). Označenia ako **OpenAI (OpenRouter)** oproti **OpenAI (priamo)** ukazujú, ako je prenášaný prenos.

Akcie:

 - Ak chcete pridať model, kliknite na **Pridať** alebo kdekoľvek v zázname.

 - Ak chcete odstrániť model, kliknite na **X** vedľa neho v **Vybraných modeloch** alebo na **Vybrané** vo vstupe v dostupných modeloch.

 - Ak chcete zrušiť výber zoznamu, kliknite na **Zrušiť výber všetkých**. Požadovaný bezplatný model v zozname zostane.

<br/>

> ℹ️ **Poznámka**<br/>
> Ak nechcete okamžite pridávať kredit na OpenRouter, začnite tým, že povolíte **Iba zadarmo** a vyberiete si bezplatné modely (nie je potrebná kreditná karta). Môžete tiež použiť Ollama na spustenie modelov lokálne bez akéhokoľvek API kľúča.

<br/>

<a id="languages"></a>
### Jazyky

Použite **Nastavenia** > **Jazyky** na organizáciu zoznamov jazykov používaných v aplikácii.

- **Najvyššie jazyky** sú pripnuté k hornému okraju zoznamov jazykov v funkcii **Preložiť** a **Transformovať**.
- **Vlastný jazyk** vám umožňuje pridať jazyk, ktorý nie je vo vstavanej ponuke.

Ak pridáte vlastný jazyk, objaví sa výber jazykov spolu s vopred určenými možnosťami.

<br/>

<a id="cost-tracking"></a>
### Sledovanie nákladov

Použite **Nastavenia** > **Sledovanie nákladov** na správu informácií o nákladoch.

- **Celkové náklady** zobrazujú bežiaci súčet.
- **Kopírovať hodnotu** kopíruje celkový súčet do schránky.
- **Obnoviť náklady** obnoví uložený súčet na nulu.
- **Synchronizovať s využitím API kľúča** nastaví súčet tak, aby zodpovedal údajom o využití uvedeným vo vašom účte OpenRouter (iba OpenRouter).
- **Použitie API kľúča** zobrazuje podrobnosti o využití OpenRouter, ak sú dostupné.
- **Odstrániť údaje o nákladoch** odstráni všetky údaje alebo iba položky staršie ako vybraný dátum.


 **Sledovanie nákladov:** Keď používate modely OpenRouter, aplikácia zobrazuje skutočné využitie a výdavky na základe údajov od OpenRouter. Pre všetkých ostatných dodávateľov aplikácia odhaduje náklady pomocou cien uverejnených OpenRouter. Ak nie je cena dostupná, odhad môže byť nulový.

<br/>

> ℹ️ **Poznámka**<br/>
> **Všetky údaje o nákladoch sú len pre vašu orientáciu, nie oficiálne fakturačné vyúčtovania.**


<br/>

> ⚠️ **Upozornenie**<br/>
> Odstránenie údajov sa nedá vrátiť späť. Pred odstránením sa uistite, že ste svoje dáta zálohovaní alebo exportovaní cez [**Ovládací panel** > **Všetky volania**](#dashboard-tabs), inak sa natrvalo stratia.<br/> 
> Odstránia sa tiež všetky historické údaje súvisiace s každým záznamom API volania.


<br/>

<a id="transform-prompts"></a>

### Transformácie výziev

Použite **Nastavenia** > **Transformovať výzvy** na hromadnú správu výziev.

Môžete:

- skontrolovať uložené výzvy
- odstrániť výzvy
- importovať výzvy zo súboru
- exportovať výzvy na zálohovanie alebo zdieľanie

<br/>

<a id="users"></a>
### Používatelia

**Webová verzia: len administrátor**

Použite **Používatelia** na správu používateľských účtov vo webovej verzii. Môžete pridávať používateľov, aktualizovať ich údaje, obnoviť heslá a odstraňovať účty.

<br/>

<a id="api-config"></a>
### Nastavenie API

Podporovaní poskytovatelia sú: OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI a **Ollama** (lokálne modely cez základnú URL). Stačí nakonfigurovať len poskytovateľov, ktorých používate.

**Webová aplikácia: len administrátor**

API kľúče sú nastavené prostredníctvom systémových alebo Dockerových premenných prostredia – nezadávajú sa do webovej aplikácie. Táto stránka ukazuje, pre ktorých poskytovateľov je kľúč nakonfigurovaný a umožňuje otestovať každého kliknutím na tlačidlo **`Test`**.

<br/>

> ℹ️ **POZNÁMKA**<br/>
> Ak chcete zmeniť API kľúč, aktualizujte premennú prostredia vo vašom systéme alebo v konfigurácii Docker a reštartujte server alebo kontajner.

<br/>

**Desktopová aplikácia**

Použite **Nastavenie API** na uloženie API kľúčov pre každého poskytovateľa, ktorého používate. Pre Ollamu namiesto API kľúča zadajte **základnú URL**.

<br/>

> 💡 **Tip** <br/>
> Ak nechcete používať API kľúč alebo platiť za využitie, môžete si [stiahnuť Ollamu](https://ollama.com) a bežne lokálne modely zadarmo. Prípadne môžete vytvoriť bezplatný účet OpenRouter (bez platobnej karty) na používanie ich bezplatných modelov.

- Pridajte len poskytovateľov, ktorých potrebujete. V časti **Nastavenia** > **Modely** každé id modelu začína na poskytovateľa (napr. `openrouter/openrouter/free`, `openai/gpt-4o`, `ollama/llama3`).

Ak chcete pridať API kľúč, napíšte hodnotu do textového poľa a kliknite na **`Uložiť`**. Na nahradenie existujúceho kľúča kliknite **`Upraviť`**. Na overenie, či kľúč funguje, kliknite na **`Test`**.

<br/>

> ℹ️ **POZNÁMKA**<br/>
> Aktuálnu hodnotu API kľúča nemôžete zobraziť – môžete ho len nahradiť pomocou tlačidla **`Upraviť`**.
> API kľúče sú v konfiguračnom súbore uložené zašifrované.

<br/>

Podrobný postup získania OpenRouter kľúča nájdete v časti [Ako získať API kľúč](#how-to-get-an-api-key-desktop-app) vyššie.



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

Ak niečo nefunguje očakávaným spôsobom, skontrolujte najskôr nasledujúce body.

<br/>

<a id="the-app-will-not-translate-rewrite-or-transform-text"></a>
### Aplikácia neprekladá, neprepisuje alebo netransformuje text

Skontrolujte, či:

- ste vybrali model v paneli nástrojov
- je aspoň jeden model uvedený v časti [**Nastavenia** > **Modely**](#models)
- je vaše nastavenie API funkčné

Ak používate desktopovú aplikáciu:

1. Otvorte [**Nastavenia** > **Nastavenie API**](#api-config).
2. Skontrolujte, či je uložený aspoň jeden API kľúč.
3. Kliknite na **Test** vedľa poskytovateľa, aby ste potvrdili, že kľúč funguje.

<br/>

<a id="the-model-list-is-empty"></a>
### Zoznam modelov je prázdny

Otvorte [**Nastavenia** > **Modely**](#models) a kliknite na **Obnoviť**.

Ak je potrebné:

- vyhľadajte model
- zapnite **Len zadarmo**
- pridajte jeden alebo viac modelov do **Vybrané modely**

<br/>

<a id="the-result-is-too-slow-or-too-expensive"></a>
### Výsledok je príliš pomalý alebo drahý

Skúste jeden alebo viac z nasledujúcich krokov:

- vyberte iný model
- použite kratší vstup
- vypnite **Preklad v reálnom čase (počas písania)** v časti [**Nastavenia** > **Všeobecné nastavenia**](#general-settings)
- na jednoduché úlohy použite modely zadarmo (pozri [Modely](#models))

<br/>

<a id="the-interface-is-in-the-wrong-language"></a>
### Rozhranie je v nesprávnom jazyku

Kliknite na ikonu gule v [paneli nástrojov](#toolbar) a vyberte si požadovaný **Jazyk rozhrania**.

<br/>

<a id="the-text-is-too-small-or-hard-to-read"></a>
### Text je príliš malý alebo ťažko čitateľný

Otvorte [**Nastavenia** > **Všeobecné nastavenia**](#general-settings) a zmeňte:

- **Rodinu písma**
- **Veľkosť**

<br/>

<a id="dashboard-charts-are-empty"></a>
### Grafy na nástenke sú prázdne

To je normálne, ak:

- používate len **modely zadarmo** (grafy nákladov budú prázdne)
- zvolený **časový filter** nezahŕňa obdobie, kedy boli požiadavky vykonané – skúste **Všetko** na kontrolu

Ak grafy zostanú prázdne aj po výbere **Všetko**, skontrolujte, či sa volania zobrazujú v záložke [**História**](#history) alebo v karte **Všetky volania**.

<br/>

<a id="cost-shows-not-available-or-seems-wrong"></a>

### Náklady ukazujú „nedostupné“ alebo sú nesprávne

Keď používate modely cez **OpenRouter**, aplikácia zobrazuje skutočné náklady hlásené OpenRouterom.

Pre **ostatných poskytovateľov** (OpenAI priamo, Anthropic priamo atď.) sú náklady odhadované z cenových údajov zverejnených OpenRouterom. Ak sa pre model nenájde zhoda v cenách, náklady budú zobrazené ako **nedostupné** a nebudú pripočítané do bežiaceho súčtu.

<br/>

<a id="total-cost-does-not-match-my-provider-bill"></a>
### Celkové náklady sa nezhodujú s faktúrou poskytovateľa

Všetky údaje o nákladoch v aplikácii sú **iba odhadmi na orientáciu**, nie oficiálnymi fakturačnými vyhláseniami.

Ak chcete, aby celková suma lepšie zodpovedala vašim skutočným výdavkom na OpenRouter, otvorte [**Nastavenia** > **Sledovanie nákladov**](#cost-tracking) a kliknite na **Synchronizovať s využitím API kľúča**.

<br/>

<a id="the-history-page-is-missing-from-the-sidebar"></a>
### Stránka História chýba v bočnom paneli

Možno je vypnutá voľba **Uchovávať históriu vykonaní**. Otvorte [**Nastavenia** > **Všeobecné nastavenia**](#general-settings) a zapnite ju. Upozorňujeme, že zapnutie tejto voľby neobnoví už odstránené údaje z histórie.

<br/>

<a id="web-app-session-expired"></a>
### Webová aplikácia: nepredvídateľne presmerovaný na prihlasovaciu stránku

Vaša relácia mohla vypršať. Prihláste sa znova. Ak sa to deje často, skontrolujte nastavenia servera pre dobu trvania relácie.

<br/>

<a id="dashboard-shows-no-data-for-other-users"></a>
### Informačný panel nezobrazuje údaje o iných používateľoch (webová verzia)

Iba **administrátori** môžu prostredníctvom filtra **Používateľ** zobraziť údaje všetkých používateľov. Bežní používatelia vidia iba svoju vlastnú aktivitu, ako je to navrhnuté.

<br/>

<a id="i-changed-a-prompt-and-lost-the-edits"></a>
### Zmenil som výzvu a stratil som úpravy

Pri úprave výzvy vždy kliknite na **Uložiť**, predtým ako kliknete na **Späť na spustenie**.

<br/><br/>

<a id="quick-tips"></a>
## Rýchle tipy

- Začnite s [**Prekladom**](#translate), aby ste sa uistili, že vaša konfigurácia funguje, než prejdete k [**Preformulovaniu**](#rewrite) alebo [**Transformácii**](#transform).
- Používajte [**Preformulovanie**](#rewrite) na každodenné zlepšovanie textu.
- Používajte [**Transformáciu**](#transform), keď potrebujete opakovateľný pracovný postup pre konkrétnu úlohu.
- Používajte [**Informačný panel**](#dashboard), ak chcete sledovať využitie a náklady.
- Používajte [**Históriu**](#history), aby ste mohli prehliadnuť minulé operácie vrátane úplného vstupného a výstupného textu.
- Pravidelne exportujte výzvy, ak vytvárate knižnicu výziev, ktorú chcete uchovať v bezpečí (pozri [Transformácia výziev](#transform-prompts)) alebo ak ich chcete zdieľať s inými.

<br/><br/>

<a id="disclaimer"></a>
## Zrieknutie sa zodpovednosti

Názvy produktov a ikony patria ich príslušným vlastníkom a používajú sa iba na identifikačné účely. Tento softvér nie je s žiadnou z zmienených značiek spojený alebo od nich schválený.

<br/><br/>

<a id="license"></a>
## Licencia

Copyright © 2026 Waldemar Scudeller Jr.

[Apache License 2.0](LICENSE)