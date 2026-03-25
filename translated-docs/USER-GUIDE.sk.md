---
translated_at: "2026-03-25T22:30:53.419Z"
source_hash: "6ca7b21e820e8ee121cd93bbf98806547c5c3ce7914799891d923201bd2c4466"
source_mtime: 1774468804877.8855
model: "qwen/qwen3-235b-a22b-2507"
---
![Transrewrt banner](../images/transrewrt_banner.png)


<a id="transrewrt-user-guide"></a>
# Používateľská príručka

<br/>

<a id="introduction"></a>
## Úvod

Transrewrt vám pomáha pracovať s textom troma hlavnými spôsobmi:

- **Preklad** – prevod textu z jedného jazyka do druhého.
- **Preformulovanie** – prepis textu v inom štýle, napríklad jasnejšom, kratšom alebo formálnejšom.
- **Transformácia** – spracovanie textu pomocou vlastných pokynov pre umelú inteligenciu, tzv. promptov.

<br/>

Táto príručka vysvetľuje, ako aplikáciu používať po jej inštalácii a spustení. Kroky k inštalácii nájdete v hlavnom súbore **[README](README.sk.md)**.

<br/>

> ℹ️ **Poznámka**<br/>
> Transrewrt je k dispozícii ako desktopová aplikácia pre systémy Windows a Linux a tiež ako webová aplikácia na vlastnom serveri. Táto príručka sa zameriava na každodenné používanie aplikácie. Ak sa nejaká funkcia týka iba jednej verzie, je to jasne označené.

<small>**Prečítajte si v iných jazykoch:** [English (UK)](../USER-GUIDE.md) · [Português (BR)](USER-GUIDE.pt-BR.md) · [العربية](USER-GUIDE.ar.md) · [বাংলা](USER-GUIDE.bn.md) · [Català](USER-GUIDE.ca.md) · [简体中文](USER-GUIDE.zh-CN.md) · [繁體中文](USER-GUIDE.zh-TW.md) · [Hrvatski](USER-GUIDE.hr.md) · [Čeština](USER-GUIDE.cs.md) · [Nederlands](USER-GUIDE.nl.md) · [English (US)](USER-GUIDE.en-US.md) · [Filipino](USER-GUIDE.tl.md) · [Français](USER-GUIDE.fr.md) · [Deutsch](USER-GUIDE.de.md) · [Ελληνικά](USER-GUIDE.el.md) · [हिन्दी](USER-GUIDE.hi.md) · [Magyar](USER-GUIDE.hu.md) · [Italiano](USER-GUIDE.it.md) · [日本語](USER-GUIDE.ja.md) · [Basa Jawa](USER-GUIDE.jv.md) · [한국어](USER-GUIDE.ko.md) · [Bahasa Melayu](USER-GUIDE.ms.md) · [فارسی](USER-GUIDE.fa.md) · [Polski](USER-GUIDE.pl.md) · [Português (PT)](USER-GUIDE.pt.md) · [ਪੰਜਾਬੀ](USER-GUIDE.pa.md) · [Română](USER-GUIDE.ro.md) · [Русский](USER-GUIDE.ru.md) · [Slovenčina](USER-GUIDE.sk.md) · [Español](USER-GUIDE.es.md) · [Kiswahili](USER-GUIDE.sw.md) · [Svenska](USER-GUIDE.sv.md) · [తెలుగు](USER-GUIDE.te.md) · [ภาษาไทย](USER-GUIDE.th.md) · [Türkçe](USER-GUIDE.tr.md) · [Українська](USER-GUIDE.uk.md) · [Tiếng Việt](USER-GUIDE.vi.md)</small>

<small>

> **Poznámka k prekladom používateľského rozhrania a dokumentácie:** Všetky jazyky rozhrania okrem pôvodného anglického (UK)
> boli preložené pomocou modelov umelej inteligencie; slovné spojenia môžu byť nepresné alebo chybné.

</small>

<br/>


<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Obsah** 

- [Pred spustením](#before-you-start)
  - [Ako získať bezplatný API kľúč OpenRouter (desktopová aplikácia)](#how-to-get-a-free-openrouter-api-key-desktop-app)
- [Začíname](#getting-started)
- [Hlavné časti okna](#main-parts-of-the-window)
  - [Bočný panel](#sidebar)
  - [Panel nástrojov](#toolbar)
  - [Vstupné a výstupné panely](#input-and-output-panels)
- [Preklad](#translate)
  - [Preložiť text](#translate-text)
  - [Výber jazyka](#language-selection)
  - [Užitočné nastavenia prekladu](#helpful-translation-settings)
- [Preformulovanie](#rewrite)
- [Transformácia](#transform)
  - [Spustiť existujúci prompt](#run-an-existing-prompt)
  - [Ak nemáte žiadne prompty](#if-you-have-no-prompts-yet)
  - [Rýchlo vytvoriť prompt](#create-a-prompt-quickly)
  - [Upraviť prompt](#edit-a-prompt)
  - [Otestovať prompt pred použitím](#test-a-prompt-before-using-it)
- [Kontrolný panel](#dashboard)
  - [Filtrovanie údajov](#filter-the-data)
  - [Karty kontrolného panela](#dashboard-tabs)
  - [Export údajov](#export-data)
  - [Vymazanie uložených záznamov pre model](#delete-stored-records-for-a-model)
- [História](#history)
  - [Filtrovanie údajov](#filter-the-data-1)
  - [Exportovať históriu](#export-history-data)
- [Nastavenia](#settings)
  - [Všeobecné nastavenia](#general-settings)
  - [Modely](#models)
  - [Jazyky](#languages)
  - [Sledovanie nákladov](#cost-tracking)
  - [Transformačné prompty](#transform-prompts)
  - [Používatelia](#users)
  - [Konfigurácia API](#api-config)
  - [O aplikácii](#about)
- [Bežné problémy](#common-issues)
  - [Aplikácia neprekladá, nepreformulováva ani netransformuje text](#the-app-will-not-translate-rewrite-or-transform-text)
  - [Zoznam modelov je prázdny](#the-model-list-is-empty)
  - [Výsledok je príliš pomalý alebo drahý](#the-result-is-too-slow-or-too-expensive)
  - [Rozhranie je v nesprávnom jazyku](#the-interface-is-in-the-wrong-language)
  - [Text je príliš malý alebo ťažko čitateľný](#the-text-is-too-small-or-hard-to-read)
  - [Grafy na kontrolnom paneli sú prázdne](#dashboard-charts-are-empty)
  - [Náklady ukazujú „nedostupné“ alebo nie sú správne](#cost-shows-not-available-or-seems-wrong)
  - [Celkové náklady sa nezhodujú s účtom poskytovateľa](#total-cost-does-not-match-my-provider-bill)
  - [Stránka História chýba v bočnom paneli](#the-history-page-is-missing-from-the-sidebar)
  - [Webová aplikácia: neočakávane presmerovanie na prihlasovaciu stránku](#web-app-redirected-to-the-login-page-unexpectedly)
  - [Kontrolný panel nezobrazuje údaje o iných používateľoch (web)](#dashboard-shows-no-data-for-other-users-web)
  - [Zmenil som prompt a stratil som úpravy](#i-changed-a-prompt-and-lost-the-edits)
- [Rýchle tipy](#quick-tips)
- [Zrieknutie sa zodpovednosti](#disclaimer)
- [Licencia](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="before-you-start"></a>

## Predtým ako začnete

Na používanie aplikácie Transrewrt potrebujete prístup k aspoň jednému poskytovateľovi AI. Podporované poskytovateľa sú: [OpenRouter](https://openrouter.ai) (ktorý agreguje mnoho modelov), OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras, a [Ollama](https://ollama.com) pre lokálne modely.

Na začiatok nemusíte vybrať platený model. Hneď ako pridáte svoj API kľúč OpenRouter, aplikácia automaticky aktivuje vstavanú **bezplatnú** možnosť OpenRouter. Toto vám umožní okamžite začať s prekladom, prepisovaním a transformáciou textu. Alternatívne si môžete získať bezplatný API kľúč aj od Cerebras, Google, Groq alebo Mistral AI.

Jednoducho povedané:

- **Model** je AI motor, ktorý vykonáva prácu. Modely sú uvedené s **prefixom poskytovateľa** (napríklad `openrouter/…`, `openai/…`, `ollama/…`).
- **API kľúč** (alebo pre Ollama **základná URL adresa**) je to, ako sa aplikácia spája s poskytovateľom.

Ak používate **desktopovú aplikáciu**, pridajte kľúče v časti [**Nastavenia** > **Konfigurácia API**](#api-config) pre každého poskytovateľa, ktorého využívate. Ak používate iba OpenRouter, pozrite si nižšie sekciu [Ako získať API kľúč](#how-to-get-an-api-key-desktop-app). Ak nechcete používať API kľúč, môžete nainštalovať Ollama (z [ollama.com](https://ollama.com)) a používať lokálne modely, napríklad `translategemma:4b`.

Ak používate **webovú verziu**, správca servera konfiguruje poskytovateľov pomocou premenných prostredia, takže si API kľúče nemôžete zadať priamo v aplikácii.

<br/>

<a id="how-to-get-an-api-key-desktop-app"></a>
### Ako získať bezplatný API kľúč OpenRouter (desktopová aplikácia)

Ak používate desktopovú aplikáciu, postupujte podľa nasledujúcich krokov:

1. Prejdite do prehliadača na stránku [OpenRouter](https://openrouter.ai).
2. Vytvorte si účet alebo sa prihláste.
3. Otvorte stránku [Keys](https://openrouter.ai/keys).
4. Kliknite na tlačidlo na vytvorenie nového API kľúča.
5. Kľúču priraďte meno, aby ste ho mohli neskôr rozpoznať.
6. Skopírujte nový API kľúč.
7. Vráťte sa do Transrewrt a otvorte si **Nastavenia** > **Konfigurácia API**.
8. Vložte kľúč do poľa **OpenRouter API kľúč** (v časti **Nastavenia** > **Konfigurácia API**).
9. Kliknite na **Test OpenRouter kľúča**, aby ste skontrolovali, či funguje.

<br/><br/>

<a id="getting-started"></a>
## Začíname

Ak používate Transrewrt po prvýkrát, postupujte v nasledujúcom poradí:

1. Spustite aplikáciu.
2. V prípade potreby vyberte jazyk rozhrania pomocou ikony gule.
3. Ak používate **desktopovú aplikáciu**, otvorte [**Nastavenia** > **Konfigurácia API**](#api-config), pridajte API kľúč aspoň jedného poskytovateľa (napríklad OpenRouter) a kliknite na **Test**, aby ste overili, či funguje.
4. Otvorte [**Nastavenia** > **Modely**](#models) a pridajte jeden alebo viac modelov do časti **Vybrané modely**.
5. Otvorte [**Nastavenia** > **Jazyky**](#languages) a vyberte svoje **Najpoužívanejšie jazyky**, ak chcete, aby sa vaše najčastejšie používané jazyky zobrazili ako prvé.
6. Prejdite na záložku **Preložiť** a spustite jednoduchý preklad, aby ste overili, či všetko funguje.
7. Keď to funguje, skúste **Prepísať** a potom **Transformovať**.

Poradie je dôležité. Zabraňuje to najčastejšiemu problému nových používateľov: pokus o spustenie úlohy predtým, ako má aplikácia funkčné API pripojenie alebo vybraný model.

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

Pomocou bočného panela sa pohybujete v rámci aplikácie. Bočný panel môžete zozbierať a získať tak viac miesta kliknutím na ikonu vedľa loga aplikácie.

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
        <li><strong>Prepísať</strong> otvorí pracovnú plochu prepisovania.</li><br/>
        <li><strong>Transformovať</strong> otvorí pracovnú plochu vlastných príkazov (promptov).</li><br/>
        <li><strong>Dashboard</strong> zobrazuje informácie o využití a nákladoch.</li><br/>
        <li><strong>Nastavenia</strong> otvorí panel nastavení.</li><br/>
        <li><strong>História</strong> zobrazuje históriu používania vrátane vstupného a výstupného textu.</li><br/>
        <li><strong>Používateľ</strong> zobrazuje užívateľské meno prihláseného používateľa (iba webová verzia).</li>
      </ul>
    </td>
  </tr>
</table>

<br/>

<a id="toolbar"></a>

### Panel s nástrojmi

Panel s nástrojmi sa mierne mení v závislosti od toho, kde sa v aplikácii nachádzate.

- Vľavo sa zobrazuje názov aktuálnej stránky.
- Vpravo sa zobrazuje **výber modelu** a ovládanie **jazyka rozhrania**.

**Výber modelu** vám umožňuje zvoliť, ktorý AI motor použiť na aktuálnu úlohu.

  ![Výber modelu](../images/screenshots/sk/model-selector.png)

Niektoré bezplatné modely nemusia byť vždy k dispozícii – niekedy sú mimo prevádzky alebo majú obmedzenie pri využívaní. V takom prípade aplikácia automaticky tento model odstráni zo zoznamu dostupných. Ak chcete kontrolovať, ktoré modely sa zobrazujú, prejdite na [**Nastavenia** > **Modely**](#models) a upravte si zoznam modelov.  
Rovnako môžete priamo otvoriť nastavenia modelu kliknutím na ikonu poskytovateľa vľavo od názvu modelu na paneli s nástrojmi.

<br/>

**Ikona gule + kód jazyka** zmení jazyk rozhrania aplikácie, napr. ponuky a tlačidlá. **Nemení** však jazyky prekladu používané v nástroji **Preložiť**.

  ![Výber jazyka rozhrania](../images/screenshots/sk/language-selector.png)

<br/>

<a id="input-and-output-panels"></a>
### Vstupný a výstupný panel

Väčšina pracovných priestorov používa ľavý **Vstupný** panel a pravý **Výstupný** panel.

Každý panel navyše zobrazuje:

| **Vstup**                                                          | **Výstup**                                                                                                                  |
|--------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------|
| - Počet znakov <br/>- Počet slov <br/>- Počet odstavcov   <br/> | - Ako dlho trvala úloha<br/>- **TPS** (tokeny za sekundu)<br/>- Počet znakov, slov a odstavcov<br/>- Použitý model |

Ak máte záujem o technické pojmy:

- **Token** znamená malý úsek textu. Môžete si to predstaviť ako časť slova alebo krátke slovo.
- **TPS** znamená počet týchto textových úsekov, ktoré model spracoval každú sekundu.

<br/>

Môžete tiež monitorovať náklady každej operácie (ak sú k dispozícii) a celkové náklady, ak povolíte možnosť `Zobraziť informácie o nákladoch pri akciách` v časti [**Nastavenia** > **Všeobecné nastavenia**](#general-settings). 
 
<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="translate"></a>
## Preložiť

Použite **Preložiť**, keď chcete premeniť text z jedného jazyka na druhý.

![Pracovný priestor Preložiť](../images/screenshots/sk/translate.png)

<br/>

<a id="translate-text"></a>
### Preklad textu

1. Otvorte **Preložiť**.
2. Vyberte jazyk v položke **Z**.
3. Vyberte jazyk v položke **Do**.
4. Vyberte model na paneli s nástrojmi.
5. Zadajte alebo vložte text do **Vstupu**.
6. Kliknite na **Preložiť**.
7. Prečítajte si výsledok vo **Výstupe**.
8. Ak chcete výsledok skopírovať, použite tlačidlo pre kopírovanie.

<br/>

<a id="language-selection"></a>
### Výber jazyka

- **Z** môže byť konkrétny jazyk alebo **Zistiť jazyk**.
- **Do** je jazyk, do ktorého chcete výsledok preložiť.

Vaše zvolené **najobľúbenejšie jazyky** sa zobrazia na vrchu zoznamu. Môžete ich nastaviť v [**Nastavenia** > **Jazyky**](#languages).

<br/>

<a id="helpful-translation-settings"></a>
### Užitočné nastavenia prekladu

V časti [**Nastavenia** > **Všeobecné nastavenia**](#general-settings) môžete zmeniť správanie prekladu:

- **Automatický preklad po vložení** spustí preklad hneď po vložení textu.
- **Automatické kopírovanie výsledku do schránky** automaticky skopíruje výsledok po úspešnom preklade.
- **Preklad v reálnom čase (počas písania)** spúšťa preklady, kým píšete.
- **Časový limit (ms)** určuje, ako dlho aplikácia čaká pred spustením prekladu v reálnom čase.
- **Enter** určuje, čo sa stane, keď stlačíte `Enter`:

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="rewrite"></a>
## Prepísať

Použite **Prepísať**, keď chcete zlepšiť slovné znenie bez zmeny hlavného významu.

![Pracovný priestor Prepísať](../images/screenshots/sk/rewrite.png)

Toto je užitočné pre:

- opravovanie pravopisu a gramatiky
- zjednodušovanie textu
- robenie textu formálnejším alebo menej formálnym
- skracovanie alebo rozširovanie textu
- robienie textu technickejším

<br/>

> 💡 **TIP**<br/>
> Keď použijete režim "**Skontrolovať pravopis a gramatiku**", objaví sa vo výstupnom paneli tlačidlo `Zobraziť zmeny`.
> Kliknutím na toto tlačidlo prepnete zobrazenie opráv, čím si zobrazíte alebo skryjete konkrétne zmeny vo vašom texte.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="transform"></a>

## Transformácia

Použite možnosť **Transformácia**, keď chcete, aby sa umelá inteligencia riadila vlastnými inštrukciami.

![Pracovná plocha Transform](../images/screenshots/sk/transform.png)

Táto časť aplikácie je najflexibilnejšia. Môžete ju využiť na úlohy ako:

- zhrnutie poznámok
- premena hrubého textu na precízny e-mail
- extrakcia kľúčových bodov
- konverzia textu do konkrétneho formátu
- ľubovoľné iné vlastné úlohy s vstupným textom

<br/>

<a id="run-an-existing-prompt"></a>
### Spustenie existujúcej výzvy

1. Otvorte **Transform**.
2. Vyberte výzvu zo zoznamu výziev.
3. Ak sa objaví pole **Cieľový** jazyk, vyberte jazyk, ak ho potrebujete.
4. Do poľa **Vstup** napíšte alebo vložte text.
5. Kliknite na **Transformovať**.
6. Precítajte si výsledok v sekcii **Výstup**.

<br/>

<a id="if-you-have-no-prompts-yet"></a>
### Ak zatiaľ nemáte žiadne výzvy

Ak je váš zoznam výziev prázdny, kliknite na **Načítať ukážkové výzvy**. Tým sa pridajú vstavané príklady, takže môžete rýchlo začať.

<br/>

> ℹ️ **Poznámka**<br/>
> Ukážkové výzvy sú poskytované v angličtine. Po ich načítaní môžete výzvu upraviť a využiť možnosť **Preložiť výzvu**, aby ste ju preložili do svojho jazyka.

<br/>

<a id="create-a-prompt-quickly"></a>
### Rýchle vytvorenie výzvy

Najrýchlejší spôsob, ako vytvoriť výzvu:

1. Kliknite na **Nová výzva**.
2. Kliknite na **Vygenerovať výzvu**.
3. Popíšte, čo má výzva robiť.
4. Vyberte model.
5. Nechajte aplikáciu vytvoriť návrh.
6. Skontrolujte návrh a kliknite na **Uložiť**.

![Vygenerovať výzvu](../images/screenshots/sk/transform-generate.png)


<br/>

<a id="edit-a-prompt"></a>
### Úprava výzvy

Keď vytvárate alebo upravujete výzvu, na ľavej strane sa objaví editor a napravo testovacia oblasť.

![Editor výziev v Transformácii](../images/screenshots/sk/transform-prompt-edit.png)

Hlavné polia sú:

- **Názov výzvy**: názov zobrazený v zozname výziev.
- **Inštrukcie k výzve (voliteľné)**: krátky tip zobrazený používateľovi pri spúšťaní výzvy.
- **Úloha modelu**: celková úloha pridelená UI, napríklad „Ste užitočný asistent.“
- **Inštrukcie pre model (jedna na riadok)**: konkrétne pravidlá, ktorým má UI nasledovať.
- **Popis výstupu**: krátky opis výsledku, napríklad „súhrn“ alebo „prepísanie“.
- **Teplota (0,0 → 1,0)**: správanie modelu; pozri nižšie.
- **Požiadať o cieľový jazyk**: pridá výber cieľového jazyka pri spustení výzvy.

Ak pojem **Teplota** pre vás nie je známy, predstavujte si to takto:

- **Nižšia** teplota poskytuje stabilnejšie a predvídateľnejšie výsledky.
- **Vyššia** teplota prináša väčšiu rôznorodosť a kreativitu.

Môžete tiež použiť:

- **`Vygenerovať výzvu`** – na vytvorenie návrhu z jednoduchého opisu
- **`Zlepšiť výzvu`** – na vylepšenie existujúcej výzvy
- **`Preložiť výzvu`** – na preklad polí výzvy

<br/>

> ⚠️ **VAROVANIE**<br/>
> Pred kliknutím na **`Späť k spusteniu`** kliknite na **`Uložiť`**. Ak sa vrátite bez uloženia, vaše zmeny budú stratené.

<br/>

<a id="test-a-prompt-before-using-it"></a>
### Otestujte si výzvu pred jej použitím

Panel testovania napravo vám umožňuje vyskúšať výzvu s ukážkovým textom, ešte skôr, než ju začnete bežne používať.

Toto je užitočné, keď:

- vytvárate novú výzvu
- porovnávate dve verzie výzvy
- chcete skontrolovať tón, dĺžku alebo formát výstupu

<br/>

> ℹ️ **Poznámka**<br/>
> Uložené výzvy môžete exportovať a importovať v časti [**Nastavenia** > **Výzvy transformácie**](#transform-prompts).

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="dashboard"></a>
## Dashboard

Použite **Dashboard**, ak chcete sledovať, ako intenzívne aplikáciu používate a aké náklady má (pre platené modely).

![Súhrn na Dashboard](../images/screenshots/sk/dashboard-summary.png)


<br/>

> ℹ️ **Poznámka**<br/>
> Ak používate iba bezplatné modely, grafy súvisiace s nákladmi budú prázdne.

<br/>

<a id="filter-the-data"></a>
### Filtrovanie údajov

Pomocou filtrovacích tlačidiel hore môžete zmeniť časové obdobie.

![Filtre na Dashboard](../images/screenshots/sk/dashboard-filter.png)

<br/>

> ℹ️ **Poznámka**<br/>
> Filter **Užívateľ** je vo webovej verzii viditeľný iba pre správcov. Bežní používatelia tento filter neuvidia a vo desktopovej aplikácii nie je k dispozícii.

<br/>

<a id="dashboard-tabs"></a>

### Záložky nástenného panela

- **Zhrnutie** vám poskytuje prehľad o využití a nákladoch.
- **Podľa použitia** rozdeľuje aktivitu podľa jazyka prekladu, režimu prepisovania a vstupných výziev.
- **Podľa modelu** ukazuje, ktoré modely ste použili a aké mali náklady.
- **Podľa dňa** zobrazuje denné sumy.
- **Všetky volania** ukazuje kompletný zoznam volaní a umožňuje ich exportovať.

<br/>

<a id="export-data"></a>
### Export údajov

Z tabuliek na nástennom panely je možné exportovať údaje vo formátoch:

- **JSON**
- **CSV**
- **XLSX**

Je to užitočné, ak si chcete aktivitu prehliadnuť mimo aplikácie alebo zdieľať správu.

<br/>

<a id="delete-stored-records-for-a-model"></a>
### Vymazanie uložených záznamov pre model

Na záložkách **Podľa modelu** alebo **Všetky volania** môžete odstrániť uložené záznamy pre konkrétny model kliknutím na ikonu „koša“.

> ⚠️ **VAROVANIE**<br/>
> Vymazanie uložených záznamov nie je možné vrátiť späť. Použite to len vtedy, ak ste si istí, že túto históriu už nepotrebujete.

Ak chcete vymazať všetky údaje alebo odstrániť záznamy podľa ich veku, prejdite do [**Nastavení** > **Sledovanie nákladov**](#cost-tracking). Tu nájdete možnosti na vymazanie všetkých uložených údajov alebo len tých, ktoré sú staršie ako určité dátum.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="history"></a>
## História

Kliknite na **História**, aby ste videli históriu svojich aktivít v rámci **Transrewrt**, vrátane vstupných a výstupných údajov každej operácie.

![Stránka História](../images/screenshots/sk/history.png)

<br/>

<a id="filter-the-history"></a>
### Filtrovanie údajov

Funkcia **História** používa rovnaké filtre ako stránka **Nástenný panel**. Použite ich na výber časového rozsahu.

![Filtre nástenného panela](../images/screenshots/sk/dashboard-filter.png)

<br/>

> ℹ️ **Poznámka**<br/>
> Filter **Používateľ** je vo webovej verzii viditeľný len pre správcov. Bežní používatelia tento filter nevidia a nie je dostupný ani v desktopovej aplikácii.

<br/>

<a id="export-history-data"></a>
### Export údajov histórie

Stránka histórie môže exportovať filtrované údaje vo formátoch:

- **JSON**
- **CSV**
- **XLSX**

Je to užitočné, ak si chcete aktivitu prehliadnuť mimo aplikácie alebo zdieľať správu.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="settings"></a>
## Nastavenia

Otvorte **Nastavenia** zo strany bočného panela, aby ste prispôsobili správanie aplikácie.

Dostupné záložky závisia od platformy a vašej úlohy:

  | Záložka                 | Desktop | Web (správca) | Web (bežný používateľ) |
  |-------------------------|:-------:|:-------------:|:----------------------:|
  | Hlavné nastavenia       |   áno   |      áno      |           áno          |
  | Modely                  |   áno   |      áno      |           áno          |
  | Jazyky                  |   áno   |      áno      |           áno          |
  | Sledovanie nákladov     |   áno   |      áno      |            –           |
  | Vstupné výzvy           |   áno   |      áno      |           áno          |
  | Používatelia            |    –    |      áno      |            –           |
  | Konfigurácia API        |   áno   |      áno      |            –           |
  | O aplikácii             |   áno   |      áno      |           áno          |

<br/>

> ℹ️ **Poznámka**<br/>
> Vo webovej verzii má každý používateľ vlastné nastavenia. Nastavenia ako vybrané modely, jazyky, všeobecné možnosti a vstupné výzvy sú uložené pre každého používateľa osobitne. Zmeny, ktoré vykonáte, neovplyvňujú ostatných používateľov.

<br/>


[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="general-settings"></a>
### Hlavné nastavenia

Použite **Hlavné nastavenia** na nastavenie správania pri písaní, či sa ukladajú podrobnosti vykonávania do **Histórie** a vzhľadu aplikácie.

**Správanie**

- **Správanie klávesu ENTER** určuje, či kláves `Enter` spustí úlohu alebo vloží nový riadok.
- **Automatický preklad po vložení** spustí preklad ihneď po vložení textu.
- **Automatické kopírovanie výsledku do schránky** automaticky kopíruje úspešné výsledky do schránky.
- **Preklad v reálnom čase (počas písania)** prekladá počas písania textu.
- **Časový limit (ms)** nastavuje dobu čakania pre preklad v reálnom čase.

**História**

- **Uchovávať históriu vykonania** určuje, či sa pre každý preklad, prepis a transformáciu ukladajú **vstupný a výstupný text** pre zobrazenie v bočnom paneli [**História**](#history). Vypnutím tejto možnosti sa zobrazí potvrdzovacie okno; ak potvrdíte, uložený text histórie sa odstráni z databázy.
- **Vymazať údaje histórie** umožňuje odstrániť uložený text podľa veku (napr. staršie ako niekoľko mesiacov alebo **všetky údaje (vymazať)**) pomocou funkcie **Vymazať údaje**. Toto sa týka len uloženého textu pre zobrazenie **História**; **nezahŕňa to** vymazanie nákladov alebo súhrnov využitia. Na odstránenie alebo skrátenie údajov o **nákladoch** použite [**Nastavenia** > **Sledovanie nákladov**](#cost-tracking).

**Vzhľad**

- **Zobraziť informácie o nákladoch pri akciách** ovláda zobrazenie nákladov za jednotlivú operáciu (ak sú k dispozícii) a celkových nákladov na paneloch výstupu pre Preklad, Prepísanie a Transformáciu.
- **Počet desatinných miest pre náklady** mení zobrazenie počtu desatinných miest sumy.
- **Len pre web:** **zobraziť okraj okolo aplikácie** pridáva dodatočný priestor okolo rozhrania.
- **Typ písma** zmení písmo použité v textových paneloch.
- **Veľkosť** mení veľkosť písma.


<br/>

<a id="models"></a>

### Modely

Pomocou **Nastavenia** > **Modely** zvoľte, ktoré modely sa zobrazia na paneli nástrojov.

![Karta Nastavenia – Modely](../images/screenshots/sk/settings-models.png)

Stránka obsahuje dva zoznamy:

- **Dostupné modely** naľavo
- **Vybraté modely** napravo

Užitočné ovládacie prvky zahŕňajú:

- **Vyhľadávanie modelov...** na vyhľadanie modelu podľa názvu
- **Chipy poskytovateľa**, aby ste zoznam obmedzili na jeden engine (OpenRouter, OpenAI, Ollama, …)
- **Iba bezplatné**, aby ste zobrazili iba bezplatné modely
- **Obnoviť**, aby ste znovu načítali zoznam
- **Rozbaliť všetko** a **Zbaliť všetko** pri triedení podľa poskytovateľa

Identifikátory modelov obsahujú prefix poskytovateľa (napríklad `openrouter/…` vs `openai/…`). Označenia ako **OpenAI (OpenRouter)** vs **OpenAI (priamo)** ukazujú, ako sa smeruje prenos údajov.

> ℹ️ **Poznámka**<br/>
> **OpenRouter Body Builder** (`openrouter/bodybuilder`) je smerovací model, nie univerzálny chatovací model: jeho odpoveď je vo formáte JSON, ktorý popisuje telo požiadavky na OpenRouter API (napríklad pole `requests` s `model` a `messages`). Ak ho použijete pre funkcie **Preložiť**, **Preformulovať** alebo **Transformovať**, panel s výstupom zobrazí tento JSON a nie hotový text. Pre tieto úlohy použite bežný textový model. Pozrite si [stránku modelu Body Builder](https://openrouter.ai/openrouter/bodybuilder) na OpenRouter.

Akcie:

- Pridanie modelu: kliknite **Pridať** alebo kamkoľvek do položky.
- Odstránenie modelu: kliknite **X** vedľa položky v zozname **Vybraté modely** alebo **Vybrať** vo položke v zozname Dostupné modely.
- Vyprázdnenie zoznamu: kliknite **Zrušiť výber všetkých**. Požadovaný bezplatný model zostane v zozname.

<br/>

> ℹ️ **Poznámka**<br/>
> Ak nechcete okamžite pridávať kredit na OpenRouter, začnite povolením voľby **Iba bezplatné** a výberom bezplatných modelov (žiadna kreditná karta nie je potrebná). Môžete tiež použiť Ollama na spustenie modelov lokálne bez akéhokoľvek API kľúča.

<br/>

<a id="languages"></a>
### Jazyky

Použite **Nastavenia** > **Jazyky** na správu zoznamov jazykov používaných v aplikácii.

- **Najobľúbenejšie jazyky** sa zobrazia v hornej časti zoznamu jazykov pri možnostiach **Preložiť** a **Transformovať**.
- **Vlastný jazyk** vám umožňuje pridať jazyk, ktorý nie je vo vopred definovanom zozname.

Ak pridáte vlastný jazyk, objaví sa v prehľadoch jazykov spolu s preddefinovanými možnosťami.

<br/>

<a id="cost-tracking"></a>
### Sledovanie nákladov

Pomocou **Nastavenia** > **Sledovanie nákladov** môžete spravovať informácie o nákladoch.

- **Celková cena** zobrazuje bežný súčet.
- **Kopírovať hodnotu** skopíruje celkovú sumu do schránky.
- **Resetovať cenu** obnoví uložený súčet na nulu.
- **Synchronizovať s využitím API kľúča** nastaví celkovú sumu podľa údajov o využití, ktoré hlási váš účet OpenRouter (iba OpenRouter).
- **Využitie API kľúča** zobrazí podrobnosti o využití OpenRouter, ak sú k dispozícii.
- **Odstrániť údaje o nákladoch** odstráni všetky údaje alebo iba záznamy staršie ako zvolený dátum.

**Sledovanie nákladov:** Keď používate modely OpenRouter, aplikácia zobrazuje vaše skutočné využitie a výdavky na základe údajov o nákladoch z OpenRouter. Pre všetkých ostatných poskytovateľov aplikácia odhaduje náklady pomocou cien zverejnených OpenRouterom; ak cena nie je k dispozícii, odhad môže byť nula.

<br/>

> ℹ️ **Poznámka**<br/>
> **Všetky sumy sú len orientačné a slúžia iba na informáciu, nie sú oficiálnymi fakturačnými účtmi.**

<br/>

> ⚠️ **Upozornenie**<br/>
> Odstránenie údajov nie je možné vrátiť. Skôr než ich odstránite, uistite sa, že ste si údaje zálohovali alebo exportovali cez [**Históriu**](#history) alebo [**Panel** > **Všetky volania**](#dashboard-tabs), inak sa natrvalo stratia. Všetky histórie vstupov a výstupov súvisiace s každým záznamom API volania budú tiež vymazané.

<br/>

<a id="transform-prompts"></a>
### Vzory pre transformáciu

Použite **Nastavenia** > **Vzory pre transformáciu**, aby ste mohli spravovať vzory hromadne.

Môžete:

- prehliadať uložené vzory
- odstrániť vzory
- importovať vzory zo súboru
- exportovať vzory na zálohovanie alebo zdieľanie

<br/>

<a id="users"></a>
### Používatelia

Pomocou **Používatelia** môžete spravovať používateľské účty vo webovej verzii. Môžete pridávať používateľov, aktualizovať ich údaje, resetovať heslá a odstraňovať účty.

<br/>

<a id="api-config"></a>
### Konfigurácia API

Podporovaní poskytovatelia sú: OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras a **Ollama** (lokálne modely cez základnú URL adresu). Stačí konfigurovať len poskytovateľov, ktorých používate.

**Webová aplikácia: len pre správcu**

API kľúče sa nastavujú prostredníctvom systémových premenných alebo premenných prostredia v Dockeri – nie sú zadané v webovom používateľskom rozhraní. Táto stránka zobrazuje, ktorí poskytovatelia majú nakonfigurovaný kľúč, a umožňuje ich otestovať kliknutím na tlačidlo **`Test`**.

<br/>

> ℹ️ **Poznámka**<br/>
> Na zmenu API kľúča aktualizujte premennú prostredia vo vašom systéme alebo v konfigurácii Docker a reštartujte server alebo kontajner.

<br/>

**Desktopová aplikácia**

Pomocou **Konfigurácie API** môžete uložiť API kľúče pre každého používaného poskytovateľa. Pre Ollamu zadajte namiesto API kľúča **základnú URL adresu**.

<br/>

> 💡 **Tip**<br/>
> Ak nechcete používať API kľúč ani platiť za využitie, môžete [si stiahnuť Ollamu](https://ollama.com) a spustiť modely (napríklad `translategemma:4b`) bezplatne lokálne na vašom počítači. Prípadne môžete vytvoriť bezplatný účet na OpenRouter (bez kreditnej karty) na používanie ich bezplatných modelov, alebo získať bezplatný API kľúč od Cerebras, Google, Groq alebo Mistral AI.

<br/>

- Pridajte len tých poskytovateľov, ktorých potrebujete. V **Nastavenia** > **Modely** každý identifikátor modelu začína poskytovateľom (napríklad `openrouter/openrouter/free`, `openai/gpt-4o`, `ollama/llama3`).

Na pridanie API kľúča zadajte hodnotu do textového poľa a kliknite **`Uložiť`**. Ak chcete nahradiť existujúci kľúč, kliknite **`Upraviť`**. Pre overenie, či kľúč funguje, kliknite **`Test`**. Pre základnú URL adresu Ollamy vždy kliknite **`Test`**, aby ste skontrolovali pripojenie.

<br/>

> ℹ️ **Poznámka**<br/>
> Aktuálnu hodnotu API kľúča nemôžete vidieť. Môžete ho iba nahradiť pomocou tlačidla **`Upraviť`**.
> API kľúče sú uložené zašifrované v konfigurácii.

<br/>

<a id="about"></a>

### O aplikácii

Karta **O aplikácii** zobrazuje:

- názov aplikácie
- číslo verzie
- dátum zostavenia
- odkaz na úložisko projektu

<br/><br/>

<a id="common-issues"></a>
## Bežné problémy

Ak niečo nefunguje podľa očakávaní, skontrolujte najprv nasledujúce body.

<br/>

<a id="the-app-will-not-translate-rewrite-or-transform-text"></a>
### Aplikácia neprekladá, neprepoisuje ani nemení text

Skontrolujte:

- či ste v paneli nástrojov vybrali model
- či je aspoň jeden model uvedený v časti [**Nastavenia** > **Modely**](#models)
- či je správne nastavené vaše API

Ak používate desktopovú aplikáciu:

1. Otvorte [**Nastavenia** > **Konfigurácia API**](#api-config).
2. Skontrolujte, či je uložený aspoň jeden kľúč API.
3. Kliknite na tlačidlo **Test** vedľa poskytovateľa, aby ste potvrdili, že kľúč funguje.

<br/>

<a id="the-model-list-is-empty"></a>
### Zoznam modelov je prázdny

Otvorte sekciu [**Nastavenia** > **Modely**](#models) a kliknite na **Obnoviť**.

V prípade potreby:

- vyhľadajte model
- zapnite možnosť **Iba bezplatné**
- pridajte jeden alebo viac modelov do časti **Vybrané modely**

<br/>

<a id="the-result-is-too-slow-or-too-expensive"></a>
### Výsledok je príliš pomalý alebo príliš drahý

Skúste niečo z nasledujúcich:

- vyberte iný model
- použite kratší vstup
- vypnite možnosť **Preklad v reálnom čase (počas písania)** v časti [**Nastavenia** > **Všeobecné nastavenia**](#general-settings)
- na jednoduché úlohy použite bezplatné modely (pozri [Modely](#models))

<br/>

<a id="the-interface-is-in-the-wrong-language"></a>
### Rozhranie je v nesprávnom jazyku

Kliknite na ikonu zemegule v [paneli nástrojov](#toolbar) a vyberte si uprednostňovaný **jazyk rozhrania**.

<br/>

<a id="the-text-is-too-small-or-hard-to-read"></a>
### Text je príliš malý alebo ťažko čitateľný

Otvorte [**Nastavenia** > **Všeobecné nastavenia**](#general-settings) a nastavte:

- **Rodinu písma**
- **Veľkosť**

<br/>

<a id="dashboard-charts-are-empty"></a>
### Grafy na nástenke sú prázdne

To je normálne, ak:

- používate iba **bezplatné modely** (grafy nákladov budú prázdne)
- vybraný **filter času** nezahŕňa obdobie, keď boli vykonané volania — skúste **Všetko** pre skontrolovanie

Ak sú grafy aj naďalej prázdne po výbere **Všetko**, potvrďte, či sa volania zobrazujú v sekcii [**História**](#history) alebo na karte **Všetky volania**.

<br/>

<a id="cost-shows-not-available-or-seems-wrong"></a>
### Náklady zobrazujú „nedostupné“ alebo sa zdajú byť nesprávne

Ak používate modely cez **OpenRouter**, aplikácia zobrazí vaše skutočné výdavky hlásené OpenRouter.

Pre **iných poskytovateľov** (priamy OpenAI, priamy Anthropic atď.) sa náklady odhadujú na základe cenových údajov publikovaných OpenRouter. Ak sa pre model nenájde zodpovedajúca cena, náklady sa zobrazia ako **nedostupné** a nepridajú sa do bežiaceho súčtu.

<br/>

<a id="total-cost-does-not-match-my-provider-bill"></a>
### Celkové náklady nezodpovedajú môjmu účtu poskytovateľa

Všetky údaje o nákladoch v aplikácii sú **iba orientačné odhady**, nie oficiálne faktúry.

Ak chcete, aby celkový súčet bol bližšie k vašim skutočným nákladom na OpenRouter, otvorte [**Nastavenia** > **Sledovanie nákladov**](#cost-tracking) a kliknite na **Synchronizovať s využitím kľúča API**.

<br/>

<a id="the-history-page-is-missing-from-the-sidebar"></a>
### Stránka História chýba na bočnom paneli

Možnosť **Uchovávať históriu spustení** môže byť vypnutá. Otvorte [**Nastavenia** > **Všeobecné nastavenia**](#general-settings) a zapnite ju. Upozorňujeme, že jej zapnutie neobnoví predtým vymazané údaje z histórie.

<br/>

<a id="web-app-session-expired"></a>
### Web aplikácia: nečakane presmerovaná na prihlasovaciu stránku

Vaša relácia mohla vypršať. Prihláste sa znova. Ak sa to stáva často, skontrolujte nastavenia servera pre dobu trvania relácie.

<br/>

<a id="dashboard-shows-no-data-for-other-users"></a>
### Nástenka nezobrazuje dáta pre ostatných používateľov (web)

Iba **administrátori** môžu prostredníctvom filtra **Používateľ** zobraziť dáta všetkých používateľov. Bežní používatelia zámerne vidia iba svoju vlastnú aktivitu.

<br/>

<a id="i-changed-a-prompt-and-lost-the-edits"></a>
### Zmenil som výzvu a stratil som úpravy

Pri úprave výzvy vždy kliknite na **Uložiť**, predtým ako kliknete na **Späť na spustenie**.

<br/><br/>

<a id="quick-tips"></a>
## Rýchle tipy

- Začnite s možnosťou [**Preložiť**](#translate), aby ste sa uistili, že vaše nastavenie funguje, než prejdete na [**Preformulovať**](#rewrite) alebo [**Transformovať**](#transform).
- Použite [**Preformulovať**](#rewrite) na každodenné vylepšovanie slovného znenia.
- Použite [**Transformovať**](#transform), keď potrebujete opakujúci sa pracovný postup pre špecifickú úlohu.
- Použite [**Nástenku**](#dashboard) ak chcete sledovať využitie a náklady.
- Použite [**Históriu**](#history) na prehľad minulých operácií a ich úplného vstupného a výstupného textu.
- Pravidelne exportujte výzvy, ak si vytvárate knižnicu výziev, ktorú chcete zachovať (pozri [Transformačné výzvy](#transform-prompts)) alebo ak ju chcete zdieľať s inými.

<br/><br/>

<a id="disclaimer"></a>

## Zrieknutie sa zodpovednosti

Názvy produktov a ikony patria ich príslušným vlastníkom a používajú sa výlučne na identifikačné účely. Tento softvér nie je spojený ani schválený žiadnou z uvedených značiek.

<br/><br/>

<a id="license"></a>
## Licencia

Autorské práva © 2026 Waldemar Scudeller Jr.

[Apache licencia 2.0](LICENSE)