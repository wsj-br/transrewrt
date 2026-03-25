---
translated_at: "2026-03-25T21:08:41.834Z"
source_hash: "6ca7b21e820e8ee121cd93bbf98806547c5c3ce7914799891d923201bd2c4466"
source_mtime: 1774468804877.8855
model: "qwen/qwen3-235b-a22b-2507"
---
![Transrewrt-banner](../images/transrewrt_banner.png)


<a id="transrewrt-user-guide"></a>
# Gebruikershandleiding

<br/>

<a id="introduction"></a>
## Inleiding

Transrewrt helpt je op drie manieren met het werken aan tekst:

- **Vertalen** – tekst omzetten van de ene taal naar de andere.
- **Herschrijven** – tekst herformuleren in een andere stijl, zoals duidelijker, korter of formeler.
- **Transformeren** – tekst verwerken met gebruik van aangepaste AI-instructies, zogenoemde prompts.

<br/>

Deze handleiding legt uit hoe je de app gebruikt nadat deze is geïnstalleerd en wordt uitgevoerd. Zie het hoofd**[README](README.nl.md)** voor de installatiestappen.

<br/>

> ℹ️ **OPMERKING**<br/>
> Transrewrt is beschikbaar als desktopapp voor Windows en Linux, en als zelfgehoste webapp. Deze handleiding richt zich op het dagelijkse gebruik van de app. Waar iets alleen van toepassing is op één versie, is dat duidelijk aangegeven.

<small>**Lees in andere talen:** [English (UK)](../USER-GUIDE.md) · [Português (BR)](USER-GUIDE.pt-BR.md) · [العربية](USER-GUIDE.ar.md) · [বাংলা](USER-GUIDE.bn.md) · [Català](USER-GUIDE.ca.md) · [简体中文](USER-GUIDE.zh-CN.md) · [繁體中文](USER-GUIDE.zh-TW.md) · [Hrvatski](USER-GUIDE.hr.md) · [Čeština](USER-GUIDE.cs.md) · [Nederlands](USER-GUIDE.nl.md) · [English (US)](USER-GUIDE.en-US.md) · [Filipino](USER-GUIDE.tl.md) · [Français](USER-GUIDE.fr.md) · [Deutsch](USER-GUIDE.de.md) · [Ελληνικά](USER-GUIDE.el.md) · [हिन्दी](USER-GUIDE.hi.md) · [Magyar](USER-GUIDE.hu.md) · [Italiano](USER-GUIDE.it.md) · [日本語](USER-GUIDE.ja.md) · [Basa Jawa](USER-GUIDE.jv.md) · [한국어](USER-GUIDE.ko.md) · [Bahasa Melayu](USER-GUIDE.ms.md) · [فارسی](USER-GUIDE.fa.md) · [Polski](USER-GUIDE.pl.md) · [Português (PT)](USER-GUIDE.pt.md) · [ਪੰਜਾਬੀ](USER-GUIDE.pa.md) · [Română](USER-GUIDE.ro.md) · [Русский](USER-GUIDE.ru.md) · [Slovenčina](USER-GUIDE.sk.md) · [Español](USER-GUIDE.es.md) · [Kiswahili](USER-GUIDE.sw.md) · [Svenska](USER-GUIDE.sv.md) · [తెలుగు](USER-GUIDE.te.md) · [ภาษาไทย](USER-GUIDE.th.md) · [Türkçe](USER-GUIDE.tr.md) · [Українська](USER-GUIDE.uk.md) · [Tiếng Việt](USER-GUIDE.vi.md)</small>

<small>

> **Opmerking over vertalingen van de interface en documentatie:** Alle talen van de gebruikersinterface behalve het oorspronkelijke Engels (UK) 
> zijn vertaald met behulp van AI-modellen; de formulering kan onnauwkeurig zijn of fouten bevatten.

</small>

<br/>


<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Inhoudsopgave** 

- [Voordat u begint](#before-you-start)
  - [Hoe u een gratis OpenRouter API-sleutel verkrijgt (desktopapp)](#how-to-get-a-free-openrouter-api-key-desktop-app)
- [Aan de slag](#getting-started)
- [Belangrijkste onderdelen van het venster](#main-parts-of-the-window)
  - [Zijbalk](#sidebar)
  - [Werkbalk](#toolbar)
  - [Invoer- en uitvoerpanelen](#input-and-output-panels)
- [Vertalen](#translate)
  - [Tekst vertalen](#translate-text)
  - [Taalkeuze](#language-selection)
  - [Handige vertaalinstellingen](#helpful-translation-settings)
- [Herschrijven](#rewrite)
- [Transformeren](#transform)
  - [Een bestaande prompt uitvoeren](#run-an-existing-prompt)
  - [Als u nog geen prompts hebt](#if-you-have-no-prompts-yet)
  - [Snel een prompt maken](#create-a-prompt-quickly)
  - [Een prompt bewerken](#edit-a-prompt)
  - [Een prompt testen voordat u deze gebruikt](#test-a-prompt-before-using-it)
- [Dashboard](#dashboard)
  - [De gegevens filteren](#filter-the-data)
  - [Tabbladen van het dashboard](#dashboard-tabs)
  - [Gegevens exporteren](#export-data)
  - [Opgeslagen gegevens voor een model verwijderen](#delete-stored-records-for-a-model)
- [Geschiedenis](#history)
  - [De gegevens filteren](#filter-the-data-1)
  - [Geschiedenisgegevens exporteren](#export-history-data)
- [Instellingen](#settings)
  - [Algemene instellingen](#general-settings)
  - [Modellen](#models)
  - [Talen](#languages)
  - [Kostenbijhouding](#cost-tracking)
  - [Transform-prompt](#transform-prompts)
  - [Gebruikers](#users)
  - [API-configuratie](#api-config)
  - [Over](#about)
- [Veelvoorkomende problemen](#common-issues)
  - [De app vertaalt, herschrijft of transformeert de tekst niet](#the-app-will-not-translate-rewrite-or-transform-text)
  - [De modellijst is leeg](#the-model-list-is-empty)
  - [Het resultaat is te traag of te duur](#the-result-is-too-slow-or-too-expensive)
  - [De interface is in de verkeerde taal](#the-interface-is-in-the-wrong-language)
  - [De tekst is te klein of moeilijk leesbaar](#the-text-is-too-small-or-hard-to-read)
  - [De diagrammen in het dashboard zijn leeg](#dashboard-charts-are-empty)
  - [Kosten worden als 'niet beschikbaar' weergegeven of lijken onjuist](#cost-shows-not-available-or-seems-wrong)
  - [Totale kosten komen niet overeen met de factuur van mijn leverancier](#total-cost-does-not-match-my-provider-bill)
  - [De geschiedenispagina ontbreekt in de zijbalk](#the-history-page-is-missing-from-the-sidebar)
  - [Webapp: onverwacht doorgestuurd naar loginpagina](#web-app-redirected-to-the-login-page-unexpectedly)
  - [Dashboard toont geen gegevens voor andere gebruikers (web)](#dashboard-shows-no-data-for-other-users-web)
  - [Ik heb een prompt gewijzigd en de bewerkingen zijn verloren gegaan](#i-changed-a-prompt-and-lost-the-edits)
- [Snelle tips](#quick-tips)
- [Disclaimer](#disclaimer)
- [Licentie](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="before-you-start"></a>

## Voordat u begint

Voor het gebruik van Transrewrt hebt u toegang nodig tot minstens één AI-aanbieder. De ondersteunde aanbieders zijn: [OpenRouter](https://openrouter.ai) (die vele modellen agreggeert), OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras en [Ollama](https://ollama.com) voor lokale modellen.

U hoeft geen betaald model te kiezen om aan de slag te gaan. Zodra u uw OpenRouter API-sleutel hebt toegevoegd, schakelt de app automatisch een ingebouwde **gratis** OpenRouter-optie in. Hierdoor kunt u direct tekst vertalen, herschrijven en transformeren. U kunt ook gratis API-sleutels verkrijgen van Cerebras, Google, Groq of Mistral AI.

In gewoon Nederlands:

- Een **model** is de AI-engine die het werk doet. Modellen worden weergegeven met een **aanduiding van de aanbieder** (bijvoorbeeld `openrouter/…`, `openai/…`, `ollama/…`).
- Een **API-sleutel** (of voor Ollama een **basis-URL**) is de manier waarop de app met die aanbieder communiceert.

Als u de **desktop-app** gebruikt, voegt u sleutels toe in [**Instellingen** > **API-configuratie**](#api-config) voor elk aanbieder dat u gebruikt. Als u alleen OpenRouter gebruikt, zie dan verderop [Hoe een API-sleutel verkrijgen](#how-to-get-an-api-key-desktop-app). Als u geen API-sleutel wilt gebruiken, kunt u Ollama installeren (van [ollama.com](https://ollama.com)) en in plaats daarvan lokale modellen gebruiken, zoals `translategemma:4b`.

Als u de **webversie** gebruikt, configureert de serverbeheerder de aanbieders via omgevingsvariabelen, dus kunt u geen API-sleutels rechtstreeks in de applicatie invoeren.

<br/>

<a id="how-to-get-an-api-key-desktop-app"></a>
### Hoe een gratis OpenRouter API-sleutel verkrijgen (desktop-app)

Als u de desktop-app gebruikt, volg dan deze stappen:

1. Ga in uw webbrowser naar [OpenRouter](https://openrouter.ai).
2. Maak een account aan of meld u aan.
3. Open de pagina [Sleutels](https://openrouter.ai/keys).
4. Klik op de knop om een nieuwe API-sleutel aan te maken.
5. Geef de sleutel een naam zodat u hem later kunt herkennen.
6. Kopieer de nieuwe API-sleutel.
7. Keer terug naar Transrewrt en open **Instellingen** > **API-configuratie**.
8. Plak de sleutel in het veld **OpenRouter API-sleutel** (onder **Instellingen** > **API-configuratie**).
9. Klik op **OpenRouter-sleutel testen** om te controleren of deze werkt.

<br/><br/>

<a id="getting-started"></a>
## Aan de slag

Als dit uw eerste keer is met Transrewrt, volg dan deze volgorde:

1. Open de app.
2. Kies uw **taal voor de gebruikersinterface** vanaf het globepictogram indien nodig.
3. Als u de **desktop-app** gebruikt, open [**Instellingen** > **API-configuratie**](#api-config), voeg een API-sleutel toe voor ten minste één aanbieder (bijvoorbeeld OpenRouter), en klik op **Testen** om te controleren of deze werkt.
4. Open [**Instellingen** > **Modellen**](#models) en voeg een of meer modellen toe aan **Geselecteerde modellen**.
5. Open [**Instellingen** > **Talen**](#languages) en kies uw **Belangrijkste talen** als u wilt dat uw meest gebruikte talen bovenaan verschijnen.
6. Ga naar **Vertalen** en voer een eenvoudige vertaling uit om te controleren of alles werkt.
7. Als dat lukt, probeer dan **Herschrijven** en daarna **Transformeren**.

Deze volgorde is belangrijk. Zo voorkomt u het meest voorkomende probleem bij eerste gebruik: een taak starten voordat de app een werkende API-verbinding heeft of een model heeft geselecteerd.

<br/><br/>

<a id="main-parts-of-the-window"></a>
## Belangrijkste onderdelen van het venster

De app is verdeeld in drie hoofdgedeelten:

- De **zijbalk** aan de linkerkant.
- De **werkbalk** bovenaan.
- Het **werkgedeelte** in het midden.

<br/>

<a id="sidebar"></a>
### Zijbalk

Gebruik de zijbalk om door de app te navigeren. U kunt de zijbalk inklappen voor meer ruimte door op het pictogram naast het app-logo te klikken.

<br/>

<table>
  <tr>
    <td valign="top">
       <img src="../images/screenshots/nl/sidebar.png" alt="Applicatie-zijbalk" style="max-width: 100%; border: 1px solid #ddd; border-radius: 4px;">
    </td>
    <td valign="top">
      <br/><br/>
      <ul>
        <li><strong>Vertalen</strong> opent de werkruimte voor vertaling.</li><br/>
        <li><strong>Herschrijven</strong> opent de werkruimte voor herschrijven.</li><br/>
        <li><strong>Transformeren</strong> opent de werkruimte voor aangepaste prompts.</li><br/>
        <li><strong>Dashboard</strong> toont informatie over gebruik en kosten.</li><br/>
        <li><strong>Instellingen</strong> opent het instellingenvenster.</li><br/>
        <li><strong>Geschiedenis</strong> toont de gebruiksgeschiedenis met invoer- en uitvoertekst.</li><br/>
        <li><strong>Gebruiker</strong> toont de gebruikersnaam van de ingelogde gebruiker (alleen op het web).</li>
      </ul>
    </td>
  </tr>
</table>

<br/>

<a id="toolbar"></a>

### Werkbalk

De werkbalk verandert iets afhankelijk van waar u zich in de app bevindt.

- Links wordt de naam van de huidige pagina weergegeven.
- Rechts ziet u de **modelkeuze** en de **taalvoorkeur voor de interface**.

Met de **modelkeuze** kunt u kiezen welke AI-engine u wilt gebruiken voor de huidige taak.

  ![Modelkeuze](../images/screenshots/nl/model-selector.png)

Sommige gratis modellen zijn mogelijk niet altijd beschikbaar — soms zijn ze offline of hebben ze een limiet aan gebruik. Als dit gebeurt, wordt dat model automatisch uit uw beschikbare lijst verwijderd. Om te bepalen welke modellen zichtbaar zijn, gaat u naar [**Instellingen** > **Modellen**](#models) en bewerkt u uw modellijst.  
U kunt ook direct naar de modelinstellingen gaan door op het icon van de aanbieder links naast de modelnaam in de werkbalk te klikken.

<br/>

Het **globe-icoon + taalcode** verandert de taal van de app-interface, zoals menu's en knoppen. Dit heeft **geen invloed** op de talen die gebruikt worden bij **Vertalen**.

  ![Taalkeuze interface](../images/screenshots/nl/language-selector.png)

<br/>

<a id="input-and-output-panels"></a>
### Invoer- en uitvoerpaneel

De meeste werkruimten gebruiken een linker **Invoer**-paneel en een rechter **Uitvoer**-paneel.

Elk paneel toont ook:

| **Invoer**                                                               | **Uitvoer**                                                                                                                                                        |
|--------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| - Aantal tekens <br/>- Aantal woorden <br/>- Aantal alinea's <br/> | - Hoe lang de taak duurde<br/>- **TPS** (tokens per seconde)<br/>- Aantal tekens, woorden en alinea's<br/>- Het gebruikte model |

Als u zich afvraagt wat deze technische termen betekenen:

- **Token** is een kleine tekstfragment. U kunt dit zien als een deel van een woord of een kort woord.
- **TPS** geeft aan hoeveel van deze tekstfragmenten het model per seconde verwerkt.

<br/>

U kunt ook de kosten van elke actie (indien beschikbaar) en de totale kosten weergeven door de optie `Kosteninformatie tonen bij acties` in te schakelen onder [**Instellingen** > **Algemene instellingen**](#general-settings).  

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="translate"></a>
## Vertalen

Gebruik **Vertalen** wanneer u tekst van de ene taal naar de andere wilt omzetten.

![Werkruimte Vertalen](../images/screenshots/nl/translate.png)

<br/>

<a id="translate-text"></a>
### Tekst vertalen

1. Open **Vertalen**.
2. Kies een taal in **Van**.
3. Kies een taal in **Naar**.
4. Kies een model in de werkbalk.
5. Typ of plak tekst in het **Invoer**-venster.
6. Klik op **Vertaal**.
7. Lees het resultaat in het **Uitvoer**-venster.
8. Gebruik de kopieerknop als u het resultaat wilt kopiëren.

<br/>

<a id="language-selection"></a>
### Taalkeuze

- **Van** kan een specifieke taal zijn of **Taal detecteren**.
- **Naar** is de gewenste taal voor het resultaat.

Uw gekozen **Boventalen** verschijnen bovenaan de lijst. U kunt deze instellen onder [**Instellingen** > **Talen**](#languages).

<br/>

<a id="helpful-translation-settings"></a>
### Handige vertaalinstellingen

In [**Instellingen** > **Algemene instellingen**](#general-settings) kunt u aanpassen hoe vertalen werkt:

- **Automatisch vertalen bij plakken** voert direct een vertaling uit zodra u tekst plakt.
- **Resultaat automatisch kopiëren naar klembord** kopieert het resultaat automatisch na een succesvolle uitvoering.
- **Realtime vertalen (tijdens typen)** voert vertalingen uit terwijl u typt.
- **Time-out (ms)** bepaalt hoe lang de app wacht voordat een realtime vertaling wordt uitgevoerd.
- **Enter** bepaalt wat er gebeurt wanneer u op `Enter` drukt:

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="rewrite"></a>
## Herschrijven

Gebruik **Herschrijven** wanneer u de formulering wilt verbeteren zonder de hoofdbetekenis te veranderen.

![Werkruimte Herschrijven](../images/screenshots/nl/rewrite.png)

Dit is handig voor:

- spelfouten en grammaticafouten corrigeren
- tekst duidelijker maken
- tekst formeler of informeler maken
- tekst inkorten of uitbreiden
- tekst technischer laten klinken

<br/>

> 💡 **TIP**<br/>
> Wanneer u de modus "**Spelling en grammatica controleren**" gebruikt, verschijnt er een knop `Wijzigingen tonen` in het uitvoerpaneel.
> Klik op deze knop om de weergave van correcties aan of uit te zetten, en zo de specifieke aanpassingen in uw tekst zichtbaar of onzichtbaar te maken.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="transform"></a>

## Transformeren

Gebruik **Transformeren** wanneer u wilt dat de AI een aangepaste set instructies volgt.

![Transformeerwerkruimte](../images/screenshots/nl/transform.png)

Dit is het meest flexibele gedeelte van de app. U kunt het gebruiken voor taken zoals:

- notities samenvatten
- ruwe tekst omzetten in een verzorgde e-mail
- belangrijke punten extraheren
- tekst converteren naar een specifiek formaat
- elke andere aangepaste bewerking met de invoertekst

<br/>

<a id="run-an-existing-prompt"></a>
### Een bestaande prompt uitvoeren

1. Open **Transformeren**.
2. Kies een prompt uit de promptlijst.
3. Als er een vakje **Doeltaal** verschijnt, kies dan een taal indien gewenst.
4. Typ of plak tekst in **Invoer**.
5. Klik op **Transformeren**.
6. Lees het resultaat in **Uitvoer**.

<br/>

<a id="if-you-have-no-prompts-yet"></a>
### Als u nog geen prompts heeft

Als uw promptlijst leeg is, klikt u op **Voorbeeldprompts laden**. Hierdoor worden ingebouwde voorbeelden toegevoegd, zodat u snel kunt beginnen.

<br/>

> ℹ️ **OPMERKING**<br/>
> Voorbeeldprompts worden in het Engels verstrekt. Nadat u ze hebt geladen, kunt u een prompt bewerken en **Prompt vertalen** gebruiken om deze naar uw taal te vertalen.

<br/>

<a id="create-a-prompt-quickly"></a>
### Een prompt snel aanmaken

De snelste manier om een prompt te maken is:

1. Klik op **Nieuwe prompt**.
2. Klik op **Prompt genereren**.
3. Beschrijf wat u wilt dat de prompt doet.
4. Kies een model.
5. Laat de app een concept voor u maken.
6. Controleer het concept en klik op **Opslaan**.

![Prompt genereren](../images/screenshots/nl/transform-generate.png)


<br/>

<a id="edit-a-prompt"></a>
### Een prompt bewerken

Wanneer u een prompt maakt of bewerkt, verschijnt de editor aan de linkerkant en een testgebied aan de rechterkant.

![Prompteditor transformeren](../images/screenshots/nl/transform-prompt-edit.png)

De belangrijkste velden zijn:

- **Promptnaam**: de naam die wordt weergegeven in de promptlijst.
- **Promptinstructies (optioneel)**: een korte hint die aan de gebruiker wordt getoond bij het uitvoeren van de prompt.
- **Modelrol**: de algemene rol toegewezen aan de AI, zoals 'Je bent een behulpzame assistent.'
- **Modelinstructies (één per regel)**: de specifieke regels die u wilt dat de AI volgt.
- **Beschrijving uitvoer**: een kort woord dat het resultaat beschrijft, zoals 'samenvatting' of 'herformulering'.
- **Temperatuur (0,0 → 1,0)**: hoe het model zich gedraagt; zie hieronder.
- **Vragen naar doeltaal**: voegt een keuzelijst voor doeltaal toe wanneer de prompt wordt uitgevoerd.

Als de technische term **Temperatuur** nieuw voor u is, denk er dan als volgt over:

- Een **lagere** temperatuur geeft stabielere, voorspelbaardere resultaten.
- Een **hogere** temperatuur geeft meer variatie en creativiteit.

U kunt ook gebruiken:

- **`Prompt genereren`** om een nieuw concept te maken op basis van een eenvoudige beschrijving
- **`Prompt verbeteren`** om een bestaande prompt te verfijnen
- **`Prompt vertalen`** om de velden van de prompt te vertalen

<br/>

> ⚠️ **WAARSCHUWING**<br/>
> Klik op **`Opslaan`** voordat u op **`Terug naar uitvoeren`** klikt. Als u terugkeert zonder op te slaan, gaan uw wijzigingen verloren.

<br/>

<a id="test-a-prompt-before-using-it"></a>
### Een prompt testen voordat u deze gebruikt

Het testvenster aan de rechterkant kunt u gebruiken om uw prompt te proberen met voorbeeldtekst voordat u deze gebruikt in uw dagelijkse werk.

Dit is handig wanneer:

- u een nieuwe prompt aan het bouwen bent
- u twee versies van een prompt met elkaar wilt vergelijken
- u de toon, lengte of uitvoerformaat wilt controleren

<br/>

> ℹ️ **OPMERKING**<br/>
> U kunt opgeslagen prompts exporteren en importeren in [**Instellingen** > **Transformerenprompts**](#transform-prompts).

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="dashboard"></a>
## Dashboard

Gebruik **Dashboard** om te zien hoeveel u de app gebruikt en wat dit kost (voor betaalde modellen).

![Overzicht dashboard](../images/screenshots/nl/dashboard-summary.png)


<br/>

> ℹ️ **OPMERKING**<br/>
> Als u alleen gratis modellen gebruikt, zijn de grafieken met betrekking tot kosten leeg.

<br/>

<a id="filter-the-data"></a>
### De gegevens filteren

Gebruik de filterknoppen bovenaan om het tijdsbereik te wijzigen.

![Dashboardfilters](../images/screenshots/nl/dashboard-filter.png)

<br/>

> ℹ️ **OPMERKING**<br/>
> Het filter **Gebruiker** is alleen zichtbaar voor beheerders in de webversie. Gewone gebruikers zien dit filter niet, en het is niet beschikbaar in de desktopapp.

<br/>

<a id="dashboard-tabs"></a>

### Dashboard-tabbladen

- **Overzicht** geeft een samenvatting van gebruik en kosten.
- **Per gebruik** verdeelt de activiteit per vertaaltaal, herschrijfmodus en transformatieprompt.
- **Per model** toont welke modellen u gebruikt en hoeveel deze gekost hebben.
- **Per dag** toont dagelijkse totalen.
- **Alle aanroepen** toont de volledige aanroepgeschiedenis en biedt de mogelijkheid deze te exporteren.

<br/>

<a id="export-data"></a>
### Gegevens exporteren

De dashboards tabellen kunnen gegevens exporteren in:

- **JSON**
- **CSV**
- **XLSX**

Dit is handig als u de activiteit buiten de app wilt bekijken of een rapport wilt delen.

<br/>

<a id="delete-stored-records-for-a-model"></a>
### Opgeslagen records voor een model verwijderen

In **Per model** of **Alle aanroep nabellen** kunt u opgeslagen records voor een model verwijderen door op het "prullenbak"-pictogram te klikken.

> ⚠️ **WAARSCHUWING**<br/>
> Het verwijderen van opgeslagen records kan niet ongedaan worden gemaakt. Gebruik dit alleen als u zeker weet dat u de geschiedenis niet meer nodig hebt.

Als u alle gegevens wilt verwijderen of records wilt verwijderen op basis van leeftijd, gaat u naar [**Instellingen** > **Kostenregistratie**](#cost-tracking). Daar vindt u opties om alle opgeslagen gegevens te verwijderen of alleen gegevens die ouder zijn dan een bepaalde datum.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="history"></a>
## Geschiedenis

Klik op **Geschiedenis** om de geschiedenis van uw acties in **Transrewrt** te bekijken, inclusief de invoer en uitvoer van elke bewerking.

![Geschiedenis pagina](../images/screenshots/nl/history.png)

<br/>

<a id="filter-the-history"></a>
### De gegevens filteren

**Geschiedenis** gebruikt dezelfde filters als de **Dashboard**-pagina. Gebruik deze om het gewenste tijdsbestek te selecteren.

![Dashboard filters](../images/screenshots/nl/dashboard-filter.png)

<br/>

> ℹ️ **OPMERKING**<br/>
> Het filter **Gebruiker** is alleen zichtbaar voor beheerders in de webversie. Gewone gebruikers zien dit filter niet en het is niet beschikbaar in de desktopapp.

<br/>

<a id="export-history-data"></a>
### Geschiedenisgegevens exporteren

De geschiedenispagina kan de gefilterde gegevens exporteren in:

- **JSON**
- **CSV**
- **XLSX**

Dit is handig als u activiteit buiten de app wilt bekijken of een rapport wilt delen.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="settings"></a>
## Instellingen

Open **Instellingen** via de zijbalk om het gedrag van de app aan te passen.

De beschikbare tabbladen zijn afhankelijk van het platform en uw rol:

  | Tabblad               | Desktop | Web (beheerder) | Web (gewone gebruiker) |
  |-----------------------|:-------:|:---------------:|:----------------------:|
  | Algemene instellingen |   yes   |       yes       |          yes           |
  | Modellen              |   yes   |       yes       |          yes           |
  | Talen                 |   yes   |       yes       |          yes           |
  | Kostenregistratie     |   yes   |       yes       |            —           |
  | Transformatieprompts  |   yes   |       yes       |          yes           |
  | Gebruikers            |    —    |       yes       |            —           |
  | API-configuratie      |   yes   |       yes       |            —           |
  | Over                  |   yes   |       yes       |          yes           |

<br/>

> ℹ️ **OPMERKING**<br/>
> In de webversie heeft elke gebruiker zijn eigen configuratie. Instellingen zoals geselecteerde modellen, talen, algemene opties en transformatieprompts worden per gebruiker opgeslagen. De wijzigingen die u aanbrengt, hebben geen invloed op andere gebruikers.

<br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="general-settings"></a>
### Algemene instellingen

Gebruik **Algemene instellingen** om het typgedrag, het opslaan van uitvoeringsgegevens voor **Geschiedenis** en het uiterlijk aan te passen.

**Gedrag**

- **Gedrag van ENTER** bepaalt of `Enter` de taak uitvoert of een nieuwe regel invoegt.
- **Automatisch vertalen bij plakken** start de vertaling zodra u tekst plakt.
- **Resultaat automatisch kopiëren naar klembord** kopieert succesvolle resultaten automatisch.
- **Vertaling in realtime (tijdens het typen)** vertaalt terwijl u typt.
- **Time-out (ms)** stelt de wachttijd in voor realtime vertaling.

**Geschiedenis**

- **Uitvoeringsgeschiedenis bijhouden** bepaalt of elke vertaling, herschrijving en transformatie de **invoer- en uitvoertekst** opslaat voor het [**Geschiedenis**](#history)-overzicht in de zijbalk. Als u deze optie uitschakelt, wordt u gevraagd om bevestiging; indien u bevestigt, wordt de opgeslagen geschrifenis tekst uit de database verwijderd.
- **Geschiedenisgegevens verwijderen** laat u tekst verwijderen op basis van leeftijd (bijvoorbeeld ouder dan enkele maanden of **alle gegevens (verwijziging)) gebruik makende van **Gegevens verwijderen**. Dit heeft alleen gevolgen voor de opgeslagen uitvoertekst voor het **Geschiedenis**-overzicht; dit verwijdert **niet** de kosten- of gebruikstotalen. Om **kosten**-gegevens te verwijderen of bij te werken, gebruikt u [**Instellingen** > **Kostenregistratie**](#cost-tracking).

**Uiterlijk**

- **Kosteninformatie tonen bij acties** regelt het weergeven van de kosten per bewerking (indien beschikbaar) en de totale kosten in de uitvoerpanelen voor Vertalen, Herschrijven en Transformeren.
- **Aantal decimalen bij kosten** verandert hoe decimale kosten worden weergegeven.
- **Alleen web:** **marge rond de app tonen** voegt extra ruimte toe rond de interface.
- **Lettertype** verandert het schrijftype in de tekstpanelen.
- **Grootte** verandert de lettergrootte.


<br/>

<a id="models"></a>

### Modellen

Gebruik **Instellingen** > **Modellen** om te kiezen welke modellen in de werkbalk worden weergegeven.

![Tabblad Instellingen Modellen](../images/screenshots/nl/settings-models.png)

De pagina bevat twee lijsten:

- **Beschikbare modellen** aan de linkerkant
- **Geselecteerde modellen** aan de rechterkant

Handige bedieningselementen zijn onder andere:

- **Zoek modellen...** om een model op naam te vinden
- **Provider-chips** om de lijst te beperken tot één engine (OpenRouter, OpenAI, Ollama, …)
- **Alleen gratis** om alleen gratis modellen weer te geven
- **Vernieuwen** om de lijst opnieuw te laden
- **Alles uitklappen** en **Alles inklappen** tijdens sorteren op provider

Model-ID’s bevatten het provider-voorvoegsel (bijvoorbeeld `openrouter/…` versus `openai/…`). Labels zoals **OpenAI (OpenRouter)** versus **OpenAI (direct)** geven aan hoe het verkeer wordt gerouteerd.

> ℹ️ **OPMERKING**<br/>
> **OpenRouter Body Builder** (`openrouter/bodybuilder`) is een routermodel, geen algemeen chatmodel: zijn antwoord is JSON die OpenRouter API-aanvraagbodems beschrijft (bijvoorbeeld een `requests`-array met `model` en `messages`). Als je het gebruikt voor **Vertalen**, **Herschrijven** of **Transformeren**, toont het uitvoervenster deze JSON in plaats van volledige tekst. Kies een normaal tekstmodel voor deze taken. Zie de [Body Builder modelpagina](https://openrouter.ai/openrouter/bodybuilder) op OpenRouter.

Acties:

 - Klik op **Toevoegen** of klik ergens in de regel om een model toe te voegen.

 - Klik op het **X**-icoon naast het model in **Geselecteerde modellen** of op **Geselecteerd** in de regel in Beschikbare modellen om een model te verwijderen.

 - Klik op **Alles deselecteren** om de lijst te wissen. Het vereiste gratis model blijft in de lijst staan.

<br/>

> ℹ️ **OPMERKING**<br/>
> Als je niet meteen credits wilt toevoegen aan OpenRouter, schakel dan eerst **Alleen gratis** in en kies gratis modellen (geen creditcard vereist). Je kunt ook Ollama gebruiken om modellen lokaal uit te voeren zonder API-sleutel.

<br/>

<a id="languages"></a>
### Talen

Gebruik **Instellingen** > **Talen** om de talenlijsten in de app te beheren.

- **Belangrijkste talen** worden bovenaan de talenlijsten in **Vertalen** en **Transformeren** vastgezet.
- **Aangepaste taal** stelt je in staat een taal toe te voegen die niet in de ingebouwde lijst staat.

Als je een aangepaste taal toevoegt, verschijnt deze naast de ingebouwde opties in de taalkeuzelijsten.

<br/>

<a id="cost-tracking"></a>
### Kostenbijhouding

Gebruik **Instellingen** > **Kostenbijhouding** om kosteninformatie te beheren.

- **Totale kosten** toont het lopende totaal.
- **Waarde kopiëren** kopieert het totaal naar het klembord.
- **Kosten resetten** stelt het totaal terug naar nul.
- **Synchroniseer met API-sleutelgebruik** stelt het totaal gelijk aan het gebruik zoals gerapporteerd door je OpenRouter-account (alleen OpenRouter).
- **API-sleutelgebruik** toont OpenRouter-gebruiksdetails, indien beschikbaar.
- **Kostengegevens verwijderen** verwijdert alle gegevens, of alleen vermeldingen ouder dan een geselecteerde datum.

**Kostenbijhouding:** Wanneer je OpenRouter-modellen gebruikt, toont de app je werkelijke gebruik en uitgaven op basis van kosteninformatie van OpenRouter. Voor alle andere providers schat de app kosten aan de hand van prijzen gepubliceerd door OpenRouter; als geen prijs beschikbaar is, kan de schatting nul zijn.

<br/>

> ℹ️ **OPMERKING**<br/> Als er geen prijs beschikbaar is, kan de schatting nul zijn.

<br/>

> ℹ️ **OPMERKING**<br/>
> **Alle kostenbedragen zijn alleen ter informatie en zijn geen officiële facturen.**

<br/>

> ⚠️ **WAARSCHUWING**<br/>
> Gegevensverwijdering kan niet ongedaan worden gemaakt. Zorg ervoor dat je je gegevens back-upt of exporteert via [**Geschiedenis**](#history) 
> of [**Dashboard** > **Alle oproepen**](#dashboard-tabs) voordat je verwijdert, anders gaan ze permanent verloren. 
> Alle invoer-/uitvoergeschiedenis gerelateerd aan elke API-aanroep wordt ook verwijderd.

<br/>

<a id="transform-prompts"></a>
### Transformeer-vragen

Gebruik **Instellingen** > **Transformeer-vragen** om vragen in bulk te beheren.

Je kunt:

- je opgeslagen vragen beoordelen
- vragen verwijderen
- vragen uit een bestand importeren
- vragen exporteren voor back-up of delen

<br/>

<a id="users"></a>
### Gebruikers

Gebruik **Gebruikers** om gebruikersaccounts te beheren in de webversie. Je kunt gebruikers toevoegen, hun gegevens bijwerken, wachtwoorden opnieuw instellen en accounts verwijderen.

<br/>

<a id="api-config"></a>
### API-configuratie

Ondersteunde providers zijn: OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras en **Ollama** (lokale modellen via een basis-URL). Je hoeft alleen de providers die je gebruikt te configureren.

**Webapplicatie: alleen beheerder**

API-sleutels worden geconfigureerd via systeem- of Docker-omgevingsvariabelen — ze worden niet in de web-UI ingevoerd. Op deze pagina zie je welke providers een geconfigureerde sleutel hebben en kun je elke provider testen met de knop **`Testen`**.

<br/>

> ℹ️ **OPMERKING**<br/>
> Om een API-sleutel te wijzigen, pas je de omgevingsvariabele in je systeem- of Docker-configuratie aan en herstart je de server of container.

<br/>

**Desktopapplicatie**

Gebruik **API-config** om API-sleutels op te slaan voor elke provider die je gebruikt. Voor Ollama voer je in plaats van een API-sleutel de **basis-URL** in.

<br/>

> 💡 **Tip** <br/>
> Als je geen API-sleutel wilt gebruiken of geen kosten wilt maken, kun je [Ollama downloaden](https://ollama.com) en modellen (zoals `translategemma:4b`) gratis lokaal op je computer uitvoeren. Als alternatief kun je een gratis OpenRouter-account aanmaken (geen creditcard vereist) om hun gratis modellen te gebruiken, of een gratis API-sleutel verkrijgen bij Cerebras, Google, Groq of Mistral AI.

<br/>

- Voeg alleen de providers toe die je nodig hebt. In **Instellingen** > **Modellen** begint elke model-ID met de provider (bijvoorbeeld `openrouter/openrouter/free`, `openai/gpt-4o`, `ollama/llama3`).

Om een API-sleutel toe te voegen, vul je de waarde in het tekstvak in en klik je op **`Opslaan`**. Om een bestaande sleutel te vervangen, klik je op **`Bewerken`**. Om te controleren of een sleutel werkt, klik je op **`Testen`**. Voor de Ollama-basis-URL klik je altijd op **`Testen`** om de verbinding te controleren.

<br/>

> ℹ️ **OPMERKING**<br/>
> Je kunt de huidige waarde van een API-sleutel niet zien. Je kunt deze alleen vervangen via de knop **`Bewerken`**.
> API-sleutels worden versleuteld opgeslagen in de configuratie.

<br/>

<a id="about"></a>

### Over

Het tabblad **Over** toont:

- de naam van de app
- het versienummer
- de bouwdatum
- een link naar de projectopslagplaats

<br/><br/>

<a id="common-issues"></a>
## Veelvoorkomende problemen

Als iets niet werkt zoals verwacht, controleer dan eerst de volgende punten.

<br/>

<a id="the-app-will-not-translate-rewrite-or-transform-text"></a>
### De app vertaalt, herschrijft of verandert tekst niet

Controleer het volgende:

- u een model hebt geselecteerd in de werkbalk
- er minstens één model vermeld staat onder [**Instellingen** > **Modellen**](#models)
- uw API-configuratie werkt

Als u de desktopapp gebruikt:

1. Open [**Instellingen** > **API-configuratie**](#api-config).
2. Controleer of minstens één API-sleutel is opgeslagen.
3. Klik op **Test** naast de provider om te bevestigen dat de sleutel werkt.

<br/>

<a id="the-model-list-is-empty"></a>
### De modellijst is leeg

Open [**Instellingen** > **Modellen**](#models) en klik op **Vernieuwen**.

Zo nodig:

- zoek een model
- schakel **Alleen gratis** in
- voeg een of meer modellen toe aan **Geselecteerde modellen**

<br/>

<a id="the-result-is-too-slow-or-too-expensive"></a>
### Het resultaat is te traag of te duur

Probeer een of meer van de volgende opties:

- kies een ander model
- gebruik een kortere invoer
- schakel **Realtime vertaling (tijdens typen)** uit in [**Instellingen** > **Algemene instellingen**](#general-settings)
- gebruik gratis modellen voor eenvoudige taken (zie [Modellen](#models))

<br/>

<a id="the-interface-is-in-the-wrong-language"></a>
### De interface is in de verkeerde taal

Klik op het bol-icoon in de [werkbalk](#toolbar) en kies uw gewenste **taal voor de interface**.

<br/>

<a id="the-text-is-too-small-or-hard-to-read"></a>
### De tekst is te klein of moeilijk te lezen

Open [**Instellingen** > **Algemene instellingen**](#general-settings) en wijzig:

- **Lettertype**
- **Grootte**

<br/>

<a id="dashboard-charts-are-empty"></a>
### De grafieken in het dashboard zijn leeg

Dit is normaal als:

- u alleen **gratis modellen** gebruikt (kostengrafieken blijven leeg)
- het geselecteerde **tijdfilter** niet het tijdsbestek omvat waarin aanroepen zijn gedaan — probeer **Alles** om dit te controleren

Als de grafieken nog steeds leeg zijn na het kiezen van **Alles**, bevestig dan dat aanroepen verschijnen op het tabblad [**Geschiedenis**](#history) of in het tabblad **Alle aanroepen**.

<br/>

<a id="cost-shows-not-available-or-seems-wrong"></a>
### Kosten worden weergegeven als "niet beschikbaar" of lijken verkeerd

Wanneer u modellen gebruikt via **OpenRouter**, toont de app uw daadwerkelijke uitgaven zoals gerapporteerd door OpenRouter.

Voor **andere providers** (OpenAI direct, Anthropic direct, enz.) worden kosten geschat op basis van prijsinformatie van OpenRouter. Als er geen overeenkomende prijs gevonden wordt voor een model, wordt de kostprijs weergegeven als **niet beschikbaar** en wordt deze niet opgeteld in uw lopende totaal.

<br/>

<a id="total-cost-does-not-match-my-provider-bill"></a>
### Het totale bedrag komt niet overeen met mijn factuur van de provider

Alle kostenbedragen in de app zijn **inschattingen ter referentie**, geen officiële facturatie.

Om het totaal dichter bij uw werkelijke OpenRouter-uitgaven te brengen, open [**Instellingen** > **Kostenregistratie**](#cost-tracking) en klik op **Synchroniseer met API-sleutelgebruik**.

<br/>

<a id="the-history-page-is-missing-from-the-sidebar"></a>
### Het geschiedenis-pagina ontbreekt in de zijbalk

De optie **Uitvoeringsgeschiedenis bijhouden** is mogelijk uitgeschakeld. Open [**Instellingen** > **Algemene instellingen**](#general-settings) en schakel deze in. Merk op dat bij inschakelen eerder verwijderde geschiedenisgegevens niet worden hersteld.

<br/>

<a id="web-app-session-expired"></a>
### Webapp: onverwacht doorgestuurd naar loginpagina

Uw sessie is mogelijk verlopen. Log opnieuw in. Als dit vaak gebeurt, controleer dan de serverconfiguratie voor de instellingen van de sessieduur.

<br/>

<a id="dashboard-shows-no-data-for-other-users"></a>
### Dashboard toont geen gegevens voor andere gebruikers (web)

Alleen **beheerders** kunnen gegevens van alle gebruikers bekijken via het **Gebruikers**-filter. Regelmatige gebruikers zien standaard alleen hun eigen activiteiten.

<br/>

<a id="i-changed-a-prompt-and-lost-the-edits"></a>
### Ik heb een prompt gewijzigd en de wijzigingen zijn verloren gegaan

Klik bij het bewerken van een prompt altijd op **Opslaan** voordat u op **Terug naar uitvoeren** klikt.

<br/><br/>

<a id="quick-tips"></a>
## Snelle tips

- Begin met [**Vertalen**](#translate) om te controleren of uw configuratie werkt, voordat u verdergaat met [**Herschrijven**](#rewrite) of [**Transformeren**](#transform).
- Gebruik [**Herschrijven**](#rewrite) voor alledaagse verbeteringen aan de bewoording.
- Gebruik [**Transformeren**](#transform) wanneer u een herhaalbaar werkproces nodig heeft voor een specifieke taak.
- Gebruik [**Dashboard**](#dashboard) als u gebruik en kosten in het oog wilt houden.
- Gebruik [**Geschiedenis**](#history) om eerdere handelingen en hun volledige invoer/uitvoertekst te bekijken.
- Exporteer regelmatig uw prompts als u een promptbibliotheek aan het opbouwen bent die u veilig wilt bewaren (zie [Prompts transformeren](#transform-prompts)) of als u ze met anderen wilt delen.

<br/><br/>

<a id="disclaimer"></a>

## Disclaimer

Productnamen en pictogrammen zijn eigendom van hun respectieve eigenaren en worden uitsluitend gebruikt voor identificatiedoeleinden. Deze software is niet verbonden aan of goedgekeurd door een van de genoemde merken.

<br/><br/>

<a id="license"></a>
## Licentie

Copyright © 2026 Waldemar Scudeller Jr.

[Apache Licentie 2.0](LICENSE)