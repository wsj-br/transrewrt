---
translated_at: "2026-03-26T01:07:38.510Z"
source_hash: "87f5e7618cbfd3084efeecba28440ecccb03450da2ae8fe4c6f91c75cb7f4981"
source_mtime: 1774482557035.2158
model: "qwen/qwen3-235b-a22b-2507"
---
![Transrewrt banner](../images/transrewrt_banner.png)


<a id="transrewrt-user-guide"></a>
# Používateľská príručka

<br/>

<a id="introduction"></a>
## Úvod

Transrewrt vám umožňuje pracovať s textom tromi hlavnými spôsobmi:

- **Preklad** – preložíte text z jedného jazyka do druhého.
- **Prepísanie** – prepíšete text v inom štýle, napríklad zjednodušíte, skrátiť alebo urobíte formálnejším.
- **Transformácia** – spracovanie textu pomocou vlastných príkazov pre umelú inteligenciu, tzv. promptov.

<br/>

Táto príručka vysvetľuje, ako používať aplikáciu po jej inštalácii a spustení. Inštrukcie k inštalácii nájdete v hlavnom dokumente **[README](README.sk.md)**.

<br/>

> ℹ️ **POZNÁMKA**<br/>
> Transrewrt je k dispozícii ako desktopová aplikácia pre Windows a Linux a ako samostatne hostovaná webová aplikácia. Táto príručka sa zameriava na bežné používanie aplikácie. Ak sa nejaká funkcia týka len jednej verzie, je to jasne označené.

<small>**Čítať v iných jazykoch:** </small>
<small id="lang-list"> [English (UK)](../USER-GUIDE.md) · [Português (BR)](USER-GUIDE.pt-BR.md) · [العربية](USER-GUIDE.ar.md) · [বাংলা](USER-GUIDE.bn.md) · [Català](USER-GUIDE.ca.md) · [简体中文](USER-GUIDE.zh-CN.md) · [繁體中文](USER-GUIDE.zh-TW.md) · [Hrvatski](USER-GUIDE.hr.md) · [Čeština](USER-GUIDE.cs.md) · [Nederlands](USER-GUIDE.nl.md) · [English (US)](USER-GUIDE.en-US.md) · [Filipino](USER-GUIDE.tl.md) · [Français](USER-GUIDE.fr.md) · [Deutsch](USER-GUIDE.de.md) · [Ελληνικά](USER-GUIDE.el.md) · [हिन्दी](USER-GUIDE.hi.md) · [Magyar](USER-GUIDE.hu.md) · [Italiano](USER-GUIDE.it.md) · [日本語](USER-GUIDE.ja.md) · [Basa Jawa](USER-GUIDE.jv.md) · [한국어](USER-GUIDE.ko.md) · [Bahasa Melayu](USER-GUIDE.ms.md) · [فارسی](USER-GUIDE.fa.md) · [Polski](USER-GUIDE.pl.md) · [Português (PT)](USER-GUIDE.pt.md) · [ਪੰਜਾਬੀ](USER-GUIDE.pa.md) · [Română](USER-GUIDE.ro.md) · [Русский](USER-GUIDE.ru.md) · [Slovenčina](USER-GUIDE.sk.md) · [Español](USER-GUIDE.es.md) · [Kiswahili](USER-GUIDE.sw.md) · [Svenska](USER-GUIDE.sv.md) · [తెలుగు](USER-GUIDE.te.md) · [ภาษาไทย](USER-GUIDE.th.md) · [Türkçe](USER-GUIDE.tr.md) · [Українська](USER-GUIDE.uk.md) · [Tiếng Việt](USER-GUIDE.vi.md)</small>

<small>

> **Poznámka k prekladom rozhrania a dokumentácie:** Všetky jazyky rozhrania okrem pôvodného angličtiny (UK)
> boli preložené pomocou modelov umelej inteligencie; preto môže byť formulácia nepresná alebo obsahovať chyby.

</small>

<br/>


<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Obsah** 

- [Pred spustením](#before-you-start)
  - [Ako získať bezplatný API kľúč od OpenRouter (desktopová aplikácia)](#how-to-get-a-free-openrouter-api-key-desktop-app)
- [Začíname](#getting-started)
- [Hlavné časti okna](#main-parts-of-the-window)
  - [Bočný panel](#sidebar)
  - [Panel nástrojov](#toolbar)
  - [Panel vstupu a výstupu](#input-and-output-panels)
- [Preklad](#translate)
  - [Preložiť text](#translate-text)
  - [Výber jazyka](#language-selection)
  - [Užitočné nastavenia prekladu](#helpful-translation-settings)
- [Prepísanie](#rewrite)
- [Transformácia](#transform)
  - [Spustenie existujúceho promptu](#run-an-existing-prompt)
  - [Ak nemáte ešte žiadne prompty](#if-you-have-no-prompts-yet)
  - [Rýchle vytvorenie promptu](#create-a-prompt-quickly)
  - [Upravenie promptu](#edit-a-prompt)
  - [Otestovanie promptu pred použitím](#test-a-prompt-before-using-it)
- [Kontrolný panel](#dashboard)
  - [Filtrovanie údajov](#filter-the-data)
  - [Karty kontrolného panela](#dashboard-tabs)
  - [Export údajov](#export-data)
  - [Odstránenie uložených záznamov pre model](#delete-stored-records-for-a-model)
- [História](#history)
  - [Filtrovanie údajov](#filter-the-data-1)
  - [Export historických údajov](#export-history-data)
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
  - [Aplikácia neprekladá, neprepisuje ani netransformuje text](#the-app-will-not-translate-rewrite-or-transform-text)
  - [Zoznam modelov je prázdny](#the-model-list-is-empty)
  - [Výsledok je príliš pomalý alebo drahý](#the-result-is-too-slow-or-too-expensive)
  - [Rozhranie je v nesprávnom jazyku](#the-interface-is-in-the-wrong-language)
  - [Text je príliš malý alebo ťažko čitateľný](#the-text-is-too-small-or-hard-to-read)
  - [Grafy na kontrolnom paneli sú prázdne](#dashboard-charts-are-empty)
  - [Náklady zobrazujú „nedostupné“ alebo sú nesprávne](#cost-shows-not-available-or-seems-wrong)
  - [Celkové náklady sa nezhodujú s účtom poskytovateľa](#total-cost-does-not-match-my-provider-bill)
  - [Stránka História chýba v bočnom paneli](#the-history-page-is-missing-from-the-sidebar)
  - [Webová aplikácia: neočakávane presmerovanie na prihlasovaciu stránku](#web-app-redirected-to-the-login-page-unexpectedly)
  - [Kontrolný panel nezobrazuje údaje pre ostatných používateľov (webová verzia)](#dashboard-shows-no-data-for-other-users-web)
  - [Zmenil som prompt a stratil som úpravy](#i-changed-a-prompt-and-lost-the-edits)
- [Rýchle tipy](#quick-tips)
- [Zrieknutie sa zodpovednosti](#disclaimer)
- [Licencia](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="before-you-start"></a>

## Pred začatím

Na používanie aplikácie Transrewrt potrebujete prístup aspoň k jednému poskytovateľovi umelé inteligencie (AI). Podporovaní poskytovatelia sú: [OpenRouter](https://openrouter.ai) (ktorý agreguje množstvo modelov), OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras a [Ollama](https://ollama.com) pre lokálne modely.

Na začatie nepotrebujete vybrať platený model. Hneď ako pridáte svoj OpenRouter API kľúč, aplikácia automaticky aktivuje vstavanú bezplatnú možnosť OpenRouter. To vám umožní okamžite začať s prekladom, prepisovaním a transformáciou textu. Prípadne môžete získať bezplatný API kľúč aj od Cerebras, Google, Groq alebo Mistral AI.

Jednoducho povedané:

- **Model** je AI motor, ktorý vykonáva prácu. Modely sú uvedené s predponou **poskytovateľa** (napríklad `openrouter/…`, `openai/…`, `ollama/…`).
- **API kľúč** (alebo pre Ollamu **základná URL adresa**) je spôsob, akým aplikácia komunikuje s poskytovateľom.

Ak používate **desktopovú aplikáciu**, pridajte kľúče v sekcii [**Nastavenia** > **Konfigurácia API**](#api-config) pre každého poskytovateľa, ktorého chcete používať. Ak chcete používať len OpenRouter, pozrite si nižšie odsek [Ako získať API kľúč](#how-to-get-an-api-key-desktop-app). Ak nechcete používať API kľúč, môžete nainštalovať Ollamu (z [ollama.com](https://ollama.com)) a namiesto toho používať lokálne modely, napríklad `translategemma:4b`.

Ak používate **webovú verziu**, správca servera konfiguruje poskytovateľov pomocou premenných prostredia, preto nemôžete do aplikácie priamo zadať API kľúče.

<br/>

<a id="how-to-get-an-api-key-desktop-app"></a>
### Ako získať bezplatný OpenRouter API kľúč (desktopová aplikácia)

Ak používate desktopovú aplikáciu, postupujte nasledovne:

1. Prejdite na [OpenRouter](https://openrouter.ai) vo vašom webovom prehliadači.
2. Vytvorte si účet alebo sa prihláste.
3. Otvorte stránku [Kľúče](https://openrouter.ai/keys).
4. Kliknite na tlačidlo na vytvorenie nového API kľúča.
5. Pomenovajte kľúč tak, aby ste ho neskôr poznali.
6. Skopírujte nový API kľúč.
7. Vráťte sa späť do aplikácie Transrewrt a otvorte **Nastavenia** > **Konfigurácia API**.
8. Vložte kľúč do poľa **OpenRouter API kľúč** (v sekcii **Nastavenia** > **Konfigurácia API**).
9. Kliknite na tlačidlo **Otestovať OpenRouter kľúč**, aby ste skontrolovali, či funguje.

<br/><br/>

<a id="getting-started"></a>
## Začíname

Ak používate Transrewrt po prvýkrát, postupujte v tomto poradí:

1. Spustite aplikáciu.
2. V prípade potreby pomocou ikony gule zvoľte **jazyk rozhrania**.
3. Ak používate **desktopovú aplikáciu**, otvorte [**Nastavenia** > **Konfigurácia API**](#api-config), pridajte API kľúč aspoň pre jedného poskytovateľa (napríklad OpenRouter) a kliknite na **Otestovať**, aby ste overili, či funguje.
4. Otvorte [**Nastavenia** > **Modely**](#models) a pridajte jeden alebo viac modelov do sekcie **Vybrané modely**.
5. Otvorte [**Nastavenia** > **Jazyky**](#languages) a v prípade potreby zvoľte svoje **Najčastejšie jazyky**, aby sa vaše najčastejšie používané jazyky zobrazovali ako prvé.
6. Prejdite do **Prekladu** a spustite jednoduchý preklad, aby ste potvrdili, že všetko funguje.
7. Keď to bude fungovať, vyskúšajte si **Prepísanie** a potom **Transformáciu**.

Toto poradie je dôležité. Zabraňuje tak najčastejšiemu problému pri prvom použití: pokus o spustenie úlohy predtým, ako má aplikácia funkčné API pripojenie alebo vybraný model.

<br/><br/>

<a id="main-parts-of-the-window"></a>
## Hlavné časti okna

Aplikácia je rozdelená na tri hlavné oblasti:

- **Bočný panel** vľavo.
- **Nástrojový panel** hore.
- **Pracovná oblasť** v strede.

<br/>

<a id="sidebar"></a>
### Bočný panel

Bočný panel slúži na pohyb v rámci aplikácie. Bočný panel môžete zmenšiť, aby ste získali viac miesta – kliknite na ikonu vedľa loga aplikácie.

<br/>

<table>
  <tr>
    <td valign="top">
       <img src="../images/screenshots/sk/sidebar.png" alt="Bočný panel aplikácie" style="max-width: 100%; border: 1px solid #ddd; border-radius: 4px;">
    </td>
    <td valign="top">
      <br/><br/>
      <ul>
        <li><strong>Preklad</strong> otvorí pracovnú plochu prekladu.</li><br/>
        <li><strong>Prepísanie</strong> otvorí pracovnú plochu prepisovania.</li><br/>
        <li><strong>Transformácia</strong> otvorí pracovnú plochu s vlastným výzvam (prompt).</li><br/>
        <li><strong>Dashboard</strong> zobrazuje informácie o využití a nákladoch.</li><br/>
        <li><strong>Nastavenia</strong> otvorí panel nastavení.</li><br/>
        <li><strong>História</strong> zobrazuje históriu používania vrátane vstupného a výstupného textu.</li><br/>
        <li><strong>Užívateľ</strong> zobrazuje používateľské meno prihláseného užívateľa (len v webe).</li>
      </ul>
    </td>
  </tr>
</table>

<br/>

<a id="toolbar"></a>

### Panel s nástrojmi

Panel s nástrojmi sa mierne líši v závislosti od toho, kde sa v aplikácii nachádzate.

- Vľavo zobrazuje názov aktuálnej stránky.
- Vpravo zobrazuje **výber modelu** a ovládanie **jazyka rozhrania**.

**Výber modelu** vám umožňuje zvoliť, ktorý umelý inteligentný modul použiť na aktuálnu úlohu.

  ![Výber modelu](../images/screenshots/sk/model-selector.png)

Niektoré bezplatné modely nemusia byť vždy dostupné – občas sú offline alebo majú obmedzenie využitia. V takom prípade aplikácia automaticky odstráni daný model z vášho zoznamu dostupných modelov. Na úpravu zobrazených modelov prejdite do časti [**Nastavenia** > **Modely**](#models) a upravte si zoznam modelov. Priamo nastavenia modelu môžete tiež otvoriť kliknutím na ikonu poskytovateľa vľavo od názvu modelu na paneli s nástrojmi.

<br/>

**Ikona zemegule a kód jazyka** zmení jazyk používateľského rozhrania, ako sú menu alebo tlačidlá. **Nemení** však jazyky prekladu použité v režime **Preklad**.

  ![Výber jazyka rozhrania](../images/screenshots/sk/language-selector.png)

<br/>

<a id="input-and-output-panels"></a>
### Panely vstupu a výstupu

Väčšina pracovných priestorov používa ľavý panel **Vstup** a pravý panel **Výstup**.

Každý panel tiež zobrazuje:

| **Vstup**                                                          | **Výstup**                                                                                                                  |
|--------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------|
| - Počet znakov <br/>- Počet slov <br/>- Počet odstavcov   <br/> | - Ako dlho trvala úloha<br/>- **TPS** (tokenov za sekundu)<br/>- Počty znakov, slov a odstavcov<br/>- Použitý model |


Ak máte otázky o technických termínoch:

- **Token** znamená malý úsek textu. Môžete o tom premýšľať ako o časti slova alebo krátkom slove.
- **TPS** znamená, koľko týchto textových úsekov model spracuje každú sekundu.

<br/>

Môžete tiež sledovať náklady každej operácie (ak sú k dispozícii) a celkové náklady, ak zapnete možnosť `Zobraziť informácie o nákladoch na akciách` v časti [**Nastavenia** > **Všeobecné nastavenia**](#general-settings).

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="translate"></a>
## Preložiť

Použite funkciu **Preložiť**, keď chcete previesť text z jedného jazyka do druhého.

![Pracovný priestor prekladu](../images/screenshots/sk/translate.png)

<br/>

<a id="translate-text"></a>
### Preklad textu

1. Otvorte **Preložiť**.
2. Vyberte jazyk v poli **Z**.
3. Vyberte jazyk v poli **Do**.
4. Vyberte model v paneli s nástrojmi.
5. Napíšte alebo vložte text do poľa **Vstup**.
6. Kliknite na **Preložiť**.
7. Prečítajte si výsledok v poli **Výstup**.
8. Použite tlačidlo kopírovať, ak si želáte výsledok skopírovať.

<br/>

<a id="language-selection"></a>
### Výber jazyka

- **Z** môže byť konkrétny jazyk alebo **Zistiť jazyk**.
- **Do** je jazyk, do ktorého chcete výsledok preložiť.

Vaše vybraté **Najobľúbenejšie jazyky** sa zobrazia na začiatku zoznamu. Môžete si ich nastaviť v časti [**Nastavenia** > **Jazyky**](#languages).

<br/>

<a id="helpful-translation-settings"></a>
### Užitočné nastavenia prekladu

V časti [**Nastavenia** > **Všeobecné nastavenia**](#general-settings) môžete zmeniť správanie prekladu:

- **Automatický preklad po vložení** spustí preklad hneď po vložení textu.
- **Automatické kopírovanie výsledku do schránky** skopíruje výsledok automaticky po úspešnom preklade.
- **Preklad v reálnom čase (počas písania)** spúšťa preklad pri písaní.
- **Časový limit (ms)** definuje, ako dlho počká aplikácia pred spustením prekladu v reálnom čase.
- **Enter** určuje, čo sa stane po stlačení klávesu `Enter`:

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="rewrite"></a>
## Prepísať

Použite **Prepísať**, keď chcete zlepšiť slovné znenie bez zmeny hlavného významu.

![Pracovný priestor prepísania](../images/screenshots/sk/rewrite.png)

To je užitočné na:

- opravu pravopisu a gramatiky
- spríhľadnenie textu
- urobenie textu formálnejšieho alebo neformálnejšieho
- skrátenie alebo rozšírenie textu
- urobenie textu technickejšie znejúceho

<br/>

> 💡 **TIP**<br/>
> Keď použijete režim "**Kontrola pravopisu a gramatiky**", vo výstupnom paneli sa zobrazí tlačidlo `Zobraziť zmeny`.
> Kliknutím na toto tlačidlo zapnete alebo vypnete zobrazenie opráv a zvýrazníte alebo skryjete konkrétne zmeny urobené vo vašom texte.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="transform"></a>

## Transformujte

Použite **Transformáciu**, keď chcete, aby A.I. nasledovalo vlastný súbor inštrukcií.

![Transformačná pracovná plocha](../images/screenshots/sk/transform.png)

Ide o najpružnejšiu oblasť aplikácie. Môžete ju použiť na úlohy ako napr.:

- zhrnutie poznámok
- premenu hrubého textu na vyše polished e-mail
- extrahovanie kľúčových bodov
- konverzia textu do konkrétneho formátu
- ľubovoľná iná vlastná aktivita s vstupným textom

<br/>

<a id="run-an-existing-prompt"></a>
### Spustite existujúci výzvu

1. Otvorte **Transformáciu**.
2. Vyberte výzvu zo zoznamu výziev.
3. Ak sa zobrazí okno **Cieľový jazyk**, vyberte jazyk, ak ho chcete určiť.
4. Do poľa **Vstup** napíšte alebo vložte text.
5. Kliknite na **Transformujte**.
6. Prečítajte si výsledok v poli **Výstup**.

<br/>

<a id="if-you-have-no-prompts-yet"></a>
### Ak zatiaľ nemáte žiadne výzvy

Ak je váš zoznam výziev prázdny, kliknite na **Načítať ukážkové výzvy**. Toto pridá integrované príklady, takže môžete začať rýchlo.

<br/>

> ℹ️ **Poznámka**<br/>
> Ukážkové výzvy sú poskytované v angličtine. Po ich načítaní môžete upraviť výzvu a použiť **Preložiť výzvu**, aby ste ju preložili do svojho jazyka.

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
### Upraviť výzvu

Keď vytvárate alebo upravujete výzvu, editor sa zobrazí vľavo a vpravo sa zobrazí testovacie pole.

![Editor výziev Transformácie](../images/screenshots/sk/transform-prompt-edit.png)

Hlavné polia sú:

- **Názov výzvy**: názov zobrazený v zozname výziev.
- **Pokyny k výzve (voliteľné)**: krátky tip zobrazený používateľovi pri spúšťaní výzvy.
- **Úloha modelu**: celková úloha pridelená A.I., napr. „Si užitočný asistent.“
- **Pokyny pre model (jeden na riadok)**: konkrétne pravidlá, ktorým má A.I. nasledovať.
- **Popis výstupu**: krátke slovo popisujúce výsledok, napr. „zhrnutie“ alebo „prepísanie“.
- **Teplota (0.0 → 1.0)**: správanie sa modelu; pozri nižšie.
- **Požiadať o cieľový jazyk**: po spustení výzvy sa pridá výber cieľového jazyka.

Ak pojem **Teplota** nie je pre vás známy, predstavujte si to nasledovne:

- **Nižšia** teplota poskytuje stabilnejšie a predpovedateľnejšie výsledky.
- **Vyššia** teplota poskytuje väčšiu rozmanitosť a kreativitu.

Môžete tiež použiť:

- **`Generovať výzvu`** na vytvorenie nového konceptu z jednoduchého opisu
- **`Zlepšiť výzvu`** na vylepšenie existujúcej výzvy
- **`Preložiť výzvu`** na preloženie jednotlivých polí výzvy

<br/>

> ⚠️ **VAROVANIE**<br/>
> Pred kliknutím na **`Späť na spustenie`** kliknite na **`Uložiť`**. Ak sa vrátite bez uloženia, zmeny sa stratia.

<br/>

<a id="test-a-prompt-before-using-it"></a>
### Otestujte výzvu pred jej použitím

Testovací panel vpravo vám umožňuje vyskúšať svoju výzvu s ukážkovým textom, než ju budete používať v každodenných úlohách.

Je užitočné, keď:

- vytvárate novú výzvu
- porovnávate dve verzie výzvy
- chcete skontrolovať tón, dĺžku alebo formát výstupu

<br/>

> ℹ️ **Poznámka**<br/>
> Môžete exportovať a importovať uložené výzvy v časti [**Nastavenia** > **Transformačné výzvy**](#transform-prompts).

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="dashboard"></a>
## Informačný panel

Použite **Informačný panel**, ak chcete zistiť, ako často aplikáciu používate a aké náklady pre vás má (pre platené modely).

![Prehľad informačného panela](../images/screenshots/sk/dashboard-summary.png)


<br/>

> ℹ️ **Poznámka**<br/>
> Ak používate len bezplatné modely, grafy týkajúce sa nákladov budú prázdne.

<br/>

<a id="filter-the-data"></a>
### Filtrovanie dát

Pomocou filtrovacích tlačidiel hore môžete zmeniť časové rozpätie.

![Filter informačného panela](../images/screenshots/sk/dashboard-filter.png)

<br/>

> ℹ️ **Poznámka**<br/>
> Filter **Používateľ** je vo webovej verzii viditeľný len pre správcov. Bežní používatelia tento filter neuvidia a v desktopovej aplikácii nie je k dispozícii.

<br/>

<a id="dashboard-tabs"></a>

### Karty prístrojovej dosky

- **Zhrnutie** vám poskytuje prehľad využitia a nákladov.
- **Podľa využitia** rozdeľuje aktivitu podľa jazyka prekladu, režimu prepisovania a vstupných promptov transformácie.
- **Podľa modelu** zobrazuje, ktoré modely ste použili a aké mali náklady.
- **Podľa dňa** zobrazuje denné celky.
- **Všetky volania** zobrazuje úplný záznam volaní a umožňuje ich exportovať.

<br/>

<a id="export-data"></a>
### Export údajov

Tabuľky na prístrojovej doske dokážu exportovať údaje vo formátoch:

- **JSON**
- **CSV**
- **XLSX**

Toto je užitočné, ak chcete aktivitu prebrať mimo aplikácie alebo poskytnúť správu.

<br/>

<a id="delete-stored-records-for-a-model"></a>
### Zmazať uložené záznamy pre model

Na kartách **Podľa modelu** alebo **Všetky volania** môžete zmazať uložené záznamy pre model kliknutím na ikonu „koša“.

> ⚠️ **UPOZORNENIE**<br/>
> Zmazanie uložených záznamov nie je možné vrátiť späť. Použite to iba vtedy, ak ste si istý, že históriu už nepotrebujete.

Ak chcete vymazať všetky údaje alebo odstrániť záznamy podľa ich veku, choďte do časti [**Nastavenia** > **Sledovanie nákladov**](#cost-tracking). Tam nájdete možnosti na vymazanie všetkých uložených dát alebo len dát starších ako určitý dátum.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="history"></a>
## História

Kliknutím na položku **História** zobrazíte históriu svojich aktivít v programe **Transrewrt**, vrátane vstupu a výstupu každej operácie.

![Stránka História](../images/screenshots/sk/history.png)

<br/>

<a id="filter-the-history"></a>
### Filtrovanie údajov

Funkcia **História** používa rovnaké filtre ako stránka **Prístrojová doska**. Použite ich na výber časového obdobia.

![Filtre prístrojovej dosky](../images/screenshots/sk/dashboard-filter.png)

<br/>

> ℹ️ **Poznámka**<br/>
> Filter **Používateľ** je vo webovej verzii viditeľný iba pre správcov. Bežní používatelia tento filter neuvidia a v desktopovej aplikácii nie je dostupný.

<br/>

<a id="export-history-data"></a>
### Exportovať údaje histórie

Stránka histórie môže exportovať filtrované údaje vo formátoch:

- **JSON**
- **CSV**
- **XLSX**

Toto je užitočné, ak chcete aktivitu prebrať mimo aplikácie alebo poskytnúť správu.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="settings"></a>
## Nastavenia

Otvorte **Nastavenia** z bočného panela, aby ste upravili správanie aplikácie.

Dostupné karty závisia od platformy a vašej úlohy:

  | Karta               | Desktop | Web (správca) | Web (bežný používateľ) |
  |-------------------|:-------:|:-----------:|:------------------:|
  | Všeobecné nastavenia  |   áno   |     áno     |        áno         |
  | Modely            |   áno   |     áno     |        áno         |
  | Jazyky         |   áno   |     áno     |        áno         |
  | Sledovanie nákladov     |   áno   |     áno     |         —          |
  | Vstupné prompty transformácií |   áno   |     áno     |        áno         |
  | Používatelia             |    —    |     áno     |         —          |
  | Konfigurácia API        |   áno   |     áno     |         —          |
  | O aplikácii             |   áno   |     áno     |        áno         |

<br/>

> ℹ️ **Poznámka**<br/>
> Vo webovej verzii má každý používateľ vlastné nastavenia. Nastavenia ako vybraté modely, jazyky, všeobecné možnosti a vstupné prompty transformácií sú uložené pre každého používateľa osobitne. Zmeny, ktoré vykonáte, neovplyvňujú iných používateľov.

<br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="general-settings"></a>
### Všeobecné nastavenia

Použite **Všeobecné nastavenia** na úpravu správania pri písaní, či sú ukladané podrobnosti vykonania pre **Históriu** a na úpravu vzhľadu.

**Správanie**

- **Správanie klávesu ENTER** určuje, či `Enter` spustí úlohu alebo vloží nový riadok.
- **Automatický preklad po vložení** spustí preklad hneď, ako text vložíte.
- **Automatické kopírovanie výsledku do schránky** automaticky kopíruje úspešné výsledky.
- **Preklad v reálnom čase (počas písania)** prekladá, kým píšete.
- **Časový limit (ms)** nastavuje dobu čakania pre preklad v reálnom čase.

**História**

- **Uchovávať históriu vykonaní** ovláda, či každý preklad, prepis a transformácia budú ukladať **vstupný a výstupný text** pre zobrazenie v bočnom paneli [**História**](#history). Vypnutie tejto možnosti vyžaduje potvrdenie; ak potvrdíte, uložený text histórie bude odstránený z databázy.
- **Vymazať dáta histórie** umožňuje odstrániť uložené texty podľa veku (napr. staršie než niekoľko mesiacov alebo **všetky dáta (vymazať)**) pomocou možnosti **Vymazať údaje**. To sa týka iba uloženého textu výkonu pre zobrazenie **História**; **nezmaže** to celkové náklady alebo využitie. Pre zmazanie alebo skrátenie **nákladových** údajov použite časť [**Nastavenia** > **Sledovanie nákladov**](#cost-tracking).

**Vzhľad**

- **Zobraziť informácie o nákladoch pri akciách** ovláda zobrazenie nákladov za operáciu (ak je k dispozícii) a celkových nákladov na výstupných paneloch Preklad, Prepis a Transformácia.
- **Počet desatinných miest pre náklady** mení, ako sa zobrazujú desatinné čísla nákladov.
- **Iba pre web:** **zobraziť okraj okolo aplikácie** pridáva dodatočný priestor okolo rozhrania.
- **Typ písma** mení písmo v textových paneloch.
- **Veľkosť** mení veľkosť písma.

<br/>

<a id="models"></a>

### Modely

Použite možnosť **Nastavenia** > **Modely**, kde vyberiete, ktoré modely sa zobrazia na paneli nástrojov.

![Záložka Modely v nastaveniach](../images/screenshots/sk/settings-models.png)

Stránka obsahuje dva zoznamy:

- **Dostupné modely** vľavo
- **Vybrané modely** vpravo

Užitočné ovládacie prvky zahŕňajú:

- **Hľadať modely...** — vyhľadanie modelu podľa názvu
- **Chipy poskytovateľov** — filtrovanie podľa konkrétneho poskytovateľa (OpenRouter, OpenAI, Ollama, atď.)
- **Iba bezplatné** — zobrazí len bezplatné modely
- **Obnoviť** — opätovné načítanie zoznamu
- **Rozbaliť všetko** a **Zbaliť všetko** — keď zoradíte podľa poskytovateľa

Identifikátory modelov obsahujú predponu poskytovateľa (napr. `openrouter/…` oproti `openai/…`). Odlišné nálepky ako **OpenAI (OpenRouter)** oproti **OpenAI (priamo)** ukazujú, ako je sieťový prenos smerovaný.

> ℹ️ **Poznámka**<br/>
> **OpenRouter Body Builder** (`openrouter/bodybuilder`) je smerovací model, nie bežný model pre chat: jeho odpoveď je vo formáte JSON, ktorý popisuje telo požiadavky pre OpenRouter API (napr. pole `requests` s `model` a `messages`). Ak ho použijete na funkcie **Preložiť**, **Znova prepísať** alebo **Transformovať**, výstupné pole zobrazi tento JSON namiesto hotového textu. Na tieto úlohy zvoľte bežný textový model. Viac na [stránke modelu Body Builder](https://openrouter.ai/openrouter/bodybuilder) na OpenRouter.

Akcie:

 - Pre pridanie modelu kliknite na **Pridať** alebo kamkoľvek do položky.

 - Pre odstránenie modelu kliknite na **X** vedľa neho v časti **Vybrané modely** alebo **Vybraný** na položke v časti Dostupné modely.

 - Pre vymazanie zoznamu kliknite na **Zrušiť výber všetkých**. Povinný bezplatný model ostane v zozname.

<br/>

> ℹ️ **Poznámka**<br/>
> Ak nechcete hneď pridávať kredit na OpenRouter, začnite povolením možnosti **Iba bezplatné** a zvoľte bezplatné modely (bez potreby platobnej karty). Môžete tiež použiť Ollama na spustenie modelov lokálne bez akéhokoľvek API kľúča.

<br/>

<a id="languages"></a>
### Jazyky

Použite **Nastavenia** > **Jazyky** na organizáciu zoznamov jazykov používaných v aplikácii.

- **Najčastejšie jazyky** sú pripevnené hneď v hornej časti zoznamov jazykov v možnostiach **Preložiť** a **Transformovať**.
- **Vlastný jazyk** slúži na pridanie jazyka, ktorý nie je v predvolenom zozname.

Ak pridáte vlastný jazyk, objaví sa spolu s preddefinovanými vo výbery jazykov.

<br/>

<a id="cost-tracking"></a>
### Sledovanie nákladov

Použite **Nastavenia** > **Sledovanie nákladov**, kde môžete spravovať údaje o nákladoch.

- **Celkové náklady** zobrazujú súčet.
- **Kopírovať hodnotu** skopíruje celkový súčet do schránky.
- **Vynulovať náklady** nastaví uložený celkový súčet na nulu.
- **Synchronizovať s využitím API kľúča** nastaví celkový súčet podľa využitia hláseného OpenRouter účtom (iba OpenRouter).
- **Využitie API kľúča** zobrazí podrobnosti o využití OpenRouter, ak sú dostupné.
- **Vymazať dátové záznamy** odstráni všetky dáta alebo len záznamy staršie ako vybraný dátum.

**Sledovanie nákladov:** Keď používate modely OpenRouter, aplikácia zobrazí skutočné využitie a výdavky na základe údajov z OpenRouter. Pre všetkých ostatných poskytovateľov aplikácia odhaduje náklady podľa cenových údajov zverejnených OpenRouter; ak nie je dostupná žiadna cena, odhad môže byť nulový.

<br/>

> ℹ️ **Poznámka**<br/>
> **Všetky údaje o nákladoch sú len orientačné a slúžia výlučne na váš prehľad, nie sú účtovnými dokladmi.**


<br/>

> ⚠️ **Upozornenie**<br/>
> Vymazanie údajov nie je možné vrátiť späť. Pred vymazaním si dôkladne zálohujte alebo exportujte dáta cez [**Históriu**](#history) alebo [**Dashboard** > **Všetky volania**](#dashboard-tabs), inak sa trvalo stratia. Všetky záznamy vstupného/výstupného historika spojené s každým API volaním budú vymazané rovnako.

<br/>

<a id="transform-prompts"></a>
### Vstupy pre transformácie

Použite **Nastavenia** > **Vstupy pre transformácie**, kde môžete spravovať vstupy hromadne.

Môžete:

- prezrieť uložené vstupy
- vymazať vstupy
- importovať vstupy zo súboru
- exportovať vstupy na zálohovanie alebo zdieľanie

<br/>

<a id="users"></a>
### Používatelia

Použite **Používatelia** na správu používateľských účtov vo webovej verzii. Môžete pridávať používateľov, aktualizovať ich údaje, obnoviť heslá a vymazávať účty.

<br/>

<a id="api-config"></a>
### Konfigurácia API

Podporované poskytovateľa sú: OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras a **Ollama** (lokálne modely cez základnú URL). Nakonfigurovať musíte len poskytovateľov, ktorých používate.

**Webová aplikácia: iba pre správcov**

API kľúče sú nakonfigurované pomocou systémových alebo Docker premenných prostredia — nezadávajú sa v webovom rozhraní. Táto stránka ukazuje, ktorí poskytovatelia majú nakonfigurovaný kľúč, a umožňuje otestovať každého kliknutím na tlačidlo **`Test`**.

<br/>

> ℹ️ **Poznámka**<br/>
> Ak chcete zmeniť API kľúč, aktualizujte premennú prostredia v systéme alebo Docker konfigurácii a reštartujte server alebo kontajner.

<br/>

**Desktopová aplikácia**

Použite **Konfiguráciu API** na uloženie API kľúčov pre každého poskytovateľa, ktorého používate. Pre Ollamu zadajte **základnú adresu URL** namiesto API kľúča.

<br/>

> 💡 **Tip** <br/>
> Ak nechcete používať API kľúč ani platiť za využitie, môžete [si stiahnuť Ollamu](https://ollama.com) a lokálne spúšťať modely (ako napríklad `translategemma:4b`) zadarmo. Prípadne si vytvorte bezplatný účet na OpenRouter (bez potreby platobnej karty) a používajte ich bezplatné modely, alebo získajte bezplatný API kľúč od Cerebras, Google, Groq alebo Mistral AI.

<br/>

- Pridajte iba poskytovateľov, ktorých potrebujete. V **Nastaveniach** > **Modely** každý identifikátor modelu začína poskytovateľom (napr. `openrouter/openrouter/free`, `openai/gpt-4o`, `ollama/llama3`).

Ak chcete pridať API kľúč, zadajte hodnotu do textového poľa a kliknite na **`Uložiť`**. Ak chcete existujúci kľúč nahradiť, kliknite na **`Upraviť`**. Ak chcete overiť, či kľúč funguje, kliknite na **`Test`**. Pre základnú URL Ollamy vždy kliknite na **`Test`**, aby ste skontrolovali spojenie.

<br/>

> ℹ️ **Poznámka**<br/>
> Súčasnú hodnotu API kľúča nie je možné vidieť. Môžete ho iba nahradiť pomocou tlačidla **`Upraviť`**.
> API kľúče sú uložené šifrované v konfigurácii.

<br/>

<a id="about"></a>

### O programe

Záložka **O programe** zobrazuje:

- názov aplikácie
- číslo verzie
- dátum zostavenia
- odkaz na repozitár projektu

<br/><br/>

<a id="common-issues"></a>
## Bežné problémy

Ak niečo nefunguje, ako by malo, skontrolujte najskôr nasledujúce body.

<br/>

<a id="the-app-will-not-translate-rewrite-or-transform-text"></a>
### Aplikácia neprekladá, prepisuje alebo transformuje text

Skontrolujte, či:

- ste vybrali model v paneli nástrojov
- je uvedený aspoň jeden model v časti [**Nastavenia** > **Modely**](#models)
- váš API nastavenie funguje

Ak používate desktopovú aplikáciu:

1. Otvorte [**Nastavenia** > **Konfigurácia API**](#api-config).
2. Skontrolujte, či je uložený aspoň jeden API kľúč.
3. Kliknite na **Test** vedľa poskytovateľa, aby ste potvrdili, že kľúč funguje.

<br/>

<a id="the-model-list-is-empty"></a>
### Zoznam modelov je prázdny

Otvorte [**Nastavenia** > **Modely**](#models) a kliknite na **Obnoviť**.

Ak je to potrebné:

- vyhľadajte model
- zapnite možnosť **Iba zadarmo**
- pridajte jeden alebo viac modelov do **Vybrané modely**

<br/>

<a id="the-result-is-too-slow-or-too-expensive"></a>
### Výsledok je príliš pomalý alebo drahý

Vyskúšajte jednu alebo viac z týchto možností:

- vyberte iný model
- použite kratší vstup
- vypnite **Priamy preklad (počas písania)** v časti [**Nastavenia** > **Všeobecné nastavenia**](#general-settings)
- používajte zadarmo dostupné modely na jednoduché úlohy (pozri [Modely](#models))

<br/>

<a id="the-interface-is-in-the-wrong-language"></a>
### Rozhranie je v nesprávnom jazyku

Kliknite na ikonu gule v [paneli nástrojov](#toolbar) a vyberte si uprednostňovaný **Jazyk rozhrania**.

<br/>

<a id="the-text-is-too-small-or-hard-to-read"></a>
### Text je príliš malý alebo ťažko čitateľný

Otvorte [**Nastavenia** > **Všeobecné nastavenia**](#general-settings) a zmeňte:

- **Rodina písma**
- **Veľkosť**

<br/>

<a id="dashboard-charts-are-empty"></a>
### Grafy na nástenke sú prázdne

Toto je normálne, pokiaľ:

- používate iba **bezplatné modely** (grafy nákladov budú prázdne)
- vybraný **filter času** nezahŕňa obdobie, keď boli uskutočnené volania — skúste **Všetko**, aby ste to skontrolovali

Ak sú grafy stále prázdne po výbere **Všetko**, skontrolujte, či sa volania objavujú v záložke [**História**](#history) alebo v záložke **Všetky volania**.

<br/>

<a id="cost-shows-not-available-or-seems-wrong"></a>
### Náklady zobrazujú „nedostupné“ alebo sa zdajú chybné

Keď používate modely prostredníctvom **OpenRouter**, aplikácia zobrazí vaše skutočné výdavky hlásené OpenRouter-om.

Pre **iných poskytovateľov** (priamy OpenAI, priamy Anthropic atď.) sú náklady odhadované z cenníkov publikovaných OpenRouter-om. Ak sa pre model nenájde zhoda ceny, náklady budú zobrazované ako **nedostupné** a nebudú zahrnuté do vášho bežiaceho súčtu.

<br/>

<a id="total-cost-does-not-match-my-provider-bill"></a>
### Celkové náklady nezodpovedajú účtu poskytovateľa

Všetky nákladové údaje v aplikácii sú **iba orientačné údaje pre informáciu**, nie oficiálne fakturácie.

Ak chcete upraviť celkový súčet, aby lepšie zodpovedal vašim skutočným výdavkom v OpenRouter, otvorte [**Nastavenia** > **Sledovanie nákladov**](#cost-tracking) a kliknite na **Synchronizovať s využitím API kľúča**.

<br/>

<a id="the-history-page-is-missing-from-the-sidebar"></a>
### Stránka História chýba na bočnom paneli

Možno je vypnutá možnosť **Zachovať históriu vykonaní**. Otvorte [**Nastavenia** > **Všeobecné nastavenia**](#general-settings) a zapnite ju. Upozorňujeme, že jej zapnutie neobnoví už predtým vymazané údaje histórie.

<br/>

<a id="web-app-session-expired"></a>
### Webová aplikácia: neočakávane presmerovaná na prihlasovaciu stránku

Vaša relácia mohla vypršať. Prihláste sa znova. Ak sa to deje často, skontrolujte konfiguráciu servera pre nastavenia trvania relácie.

<br/>

<a id="dashboard-shows-no-data-for-other-users"></a>
### Nástennka nezobrazuje údaje pre ostatných používateľov (web)

Iba **administrátori** môžu zobraziť údaje všetkých používateľov pomocou filtra **Používateľ**. Bežní používatelia štandardne vidia len svoju vlastnú aktivitu.

<br/>

<a id="i-changed-a-prompt-and-lost-the-edits"></a>
### Zmenil som výzvu a stratil som úpravy

Počas úpravy výzvy vždy kliknite na **Uložiť**, predtým ako kliknete na **Späť na spustenie**.

<br/><br/>

<a id="quick-tips"></a>
## Rýchle tipy

- Začnite s [**Preložiť**](#translate), aby ste sa uistili, že vaše nastavenie funguje, skôr než prejdete na [**Preformulovať**](#rewrite) alebo [**Transformovať**](#transform).
- Používajte [**Preformulovať**](#rewrite) na bežné zlepšovanie slovného znenia.
- Používajte [**Transformovať**](#transform), keď potrebujete opakovateľný pracovný postup pre určitú úlohu.
- Používajte [**Nástennku**](#dashboard), ak chcete sledovať využitie a náklady.
- Používajte [**Históriu**](#history), ak chcete prezerať minulé operácie a ich úplný vstupný a výstupný text.
- Pravidelne exportujte výzvy, ak vytvárate knižnicu výziev, ktorú chcete uchovať, (pozri [Transformovať výzvy](#transform-prompts)) alebo ak ich chcete zdieľať s inými.

<br/><br/>

<a id="disclaimer"></a>

## Zrieknutie sa zodpovednosti

Názvy produktov a ikony patria ich príslušným vlastníkom a sú použité výlučne na identifikačné účely. Tento softvér nie je prepojený ani odporúčaný žiadnou z uvedených značiek.

<br/><br/>

<a id="license"></a>
## Licencia

Autorské práva © 2026 Waldemar Scudeller Jr.

[Apache License 2.0](LICENSE)