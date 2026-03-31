---
translation_last_updated: '2026-03-31T22:57:13.591Z'
source_file_mtime: '2026-03-30T09:57:25.622Z'
source_file_hash: e1b91eca0124d467
translation_language: nl
source_file_path: USER-GUIDE.md
---
![Transrewrt banner](../images/transrewrt_banner.png)

<a id="transrewrt-user-guide"></a>
# Gebruikershandleiding

<br/>

<a id="introduction"></a>
## Inleiding

Transrewrt helpt u bij het werken met tekst op drie manieren:

- **Vertalen** - tekst omzetten van de ene taal naar de andere.
- **Herschrijven** - tekst herschrijven in een andere stijl, zoals duidelijker, korter of formeler.
- **Transformatie** - tekst verwerken met aangepaste AI-instructies, ook wel prompts genoemd.

<br/>

Deze handleiding legt uit hoe u de app gebruikt nadat deze is geïnstalleerd en actief is. Zie het hoofd-**[README](README.nl.md)** voor installatiestappen.

<br/>

> ℹ️ **OPMERKING**<br/>
> Transrewrt is beschikbaar als desktopapp voor Windows en Linux, en als zelfgehoste webapp. Deze handleiding richt zich op het dagelijks gebruik van de app. Wanneer iets alleen op één versie van toepassing is, wordt dit duidelijk aangegeven.

<small>**Lees in andere talen:** </small>
<small id="lang-list">[English (UK)](../USER-GUIDE.md) · [Português (BR)](USER-GUIDE.pt-BR.md) · [العربية](USER-GUIDE.ar.md) · [বাংলা](USER-GUIDE.bn.md) · [Català](USER-GUIDE.ca.md) · [简体中文](USER-GUIDE.zh-CN.md) · [繁體中文](USER-GUIDE.zh-TW.md) · [Hrvatski](USER-GUIDE.hr.md) · [Čeština](USER-GUIDE.cs.md) · [Nederlands](USER-GUIDE.nl.md) · [English (US)](USER-GUIDE.en-US.md) · [Filipino](USER-GUIDE.tl.md) · [Français](USER-GUIDE.fr.md) · [Deutsch](USER-GUIDE.de.md) · [Ελληνικά](USER-GUIDE.el.md) · [हिन्दी](USER-GUIDE.hi.md) · [Magyar](USER-GUIDE.hu.md) · [Italiano](USER-GUIDE.it.md) · [日本語](USER-GUIDE.ja.md) · [Basa Jawa](USER-GUIDE.jv.md) · [한국어](USER-GUIDE.ko.md) · [Bahasa Melayu](USER-GUIDE.ms.md) · [فارسی](USER-GUIDE.fa.md) · [Polski](USER-GUIDE.pl.md) · [Português (PT)](USER-GUIDE.pt.md) · [ਪੰਜਾਬੀ](USER-GUIDE.pa.md) · [Română](USER-GUIDE.ro.md) · [Русский](USER-GUIDE.ru.md) · [Slovenčina](USER-GUIDE.sk.md) · [Español](USER-GUIDE.es.md) · [Kiswahili](USER-GUIDE.sw.md) · [Svenska](USER-GUIDE.sv.md) · [తెలుగు](USER-GUIDE.te.md) · [ภาษาไทย](USER-GUIDE.th.md) · [Türkçe](USER-GUIDE.tr.md) · [Українська](USER-GUIDE.uk.md) · [Tiếng Việt](USER-GUIDE.vi.md)</small>

<small>

> **Opmerking over vertalingen van de interface en documentatie:** Alle talen van de interface, behalve het oorspronkelijke Engels (UK),
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
- [Transformatie](#transform)
  - [Een bestaande prompt uitvoeren](#run-an-existing-prompt)
  - [Als u nog geen prompts hebt](#if-you-have-no-prompts-yet)
  - [Snel een prompt aanmaken](#create-a-prompt-quickly)
  - [Een prompt bewerken](#edit-a-prompt)
  - [Een prompt testen voordat u deze gebruikt](#test-a-prompt-before-using-it)
- [Dashboard](#dashboard)
  - [De gegevens filteren](#filter-the-data)
  - [Dashboard-tabbladen](#dashboard-tabs)
  - [Gegevens exporteren](#export-data)
  - [Opgeslagen gegevens voor een model verwijderen](#delete-stored-records-for-a-model)
- [Geschiedenis](#history)
  - [De gegevens filteren](#filter-the-data-1)
  - [Geschiedenisgegevens exporteren](#export-history-data)
- [Instellingen](#settings)
  - [Algemene instellingen](#general-settings)
  - [Modellen](#models)
  - [Talen](#languages)
  - [Kostenregistratie](#cost-tracking)
  - [Transformatie-prompts](#transform-prompts)
  - [Gebruikers](#users)
  - [API-configuratie](#api-config)
  - [Over](#about)
- [Veelvoorkomende problemen](#common-issues)
  - [De app vertaalt, herschrijft of transformeert geen tekst](#the-app-will-not-translate-rewrite-or-transform-text)
  - [De modellenlijst is leeg](#the-model-list-is-empty)
  - [Het resultaat is te traag of te duur](#the-result-is-too-slow-or-too-expensive)
  - [De interface is in de verkeerde taal](#the-interface-is-in-the-wrong-language)
  - [De tekst is te klein of moeilijk leesbaar](#the-text-is-too-small-or-hard-to-read)
  - [Dashboardgrafieken zijn leeg](#dashboard-charts-are-empty)
  - [Kosten tonen "niet beschikbaar" of lijken onjuist](#cost-shows-not-available-or-seems-wrong)
  - [Totale kosten komen niet overeen met mijn providerfactuur](#total-cost-does-not-match-my-provider-bill)
  - [De geschiedenispagina ontbreekt in de zijbalk](#the-history-page-is-missing-from-the-sidebar)
  - [Webapp: onverwacht doorgestuurd naar de aanmeldpagina](#web-app-redirected-to-the-login-page-unexpectedly)
  - [Webbeheerder: wachtwoord vergeten of kwijtgeraakt](#web-admin-forgot-or-lost-a-password)
  - [Dashboard toont geen gegevens voor andere gebruikers (web)](#dashboard-shows-no-data-for-other-users-web)
  - [Ik heb een prompt gewijzigd en de bewerkingen verloren](#i-changed-a-prompt-and-lost-the-edits)
- [Snelle tips](#quick-tips)
- [Disclaimer](#disclaimer)
- [Licentie](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="before-you-start"></a>
## Voordat u begint

Om Transrewrt te gebruiken, hebt u toegang nodig tot minstens één AI-provider. De ondersteunde providers zijn: [OpenRouter](https://openrouter.ai) (die veel modellen bundelt), OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras en [Ollama](https://ollama.com) voor lokale modellen.

U hoeft geen betaald model te selecteren om te beginnen. Zodra u uw OpenRouter API-sleutel toevoegt, schakelt de app automatisch een ingebouwde **gratis** OpenRouter-optie in. Hierdoor kunt u direct beginnen met het vertalen, herschrijven en transformeren van tekst. U kunt ook een gratis API-sleutel verkrijgen van Cerebras, Google, Groq of Mistral AI.

In eenvoudige bewoordingen:

- Een **model** is de AI-engine die het werk uitvoert. Modellen worden weergegeven met een **providerprefix** (bijvoorbeeld `openrouter/…`, `openai/…`, `ollama/…`).
- Een **API-sleutel** (of voor Ollama een **basis-URL**) is de manier waarop de app de provider bereikt.

Als u de **desktopapp** gebruikt, voegt u sleutels toe in [**Instellingen** > **API-configuratie**](#api-config) voor elke provider die u gebruikt. Voor alleen OpenRouter-gebruik, zie hieronder [Hoe u een API-sleutel verkrijgt](#how-to-get-an-api-key-desktop-app). Als u geen API-sleutel wilt gebruiken, kunt u Ollama installeren (van [ollama.com](https://ollama.com)) en lokale modellen gebruiken, zoals `translategemma:4b`.

Als u de **webversie** gebruikt, configureert de serverbeheerder de providers via omgevingsvariabelen, dus u kunt geen API-sleutels rechtstreeks in de applicatie invoeren.

<br/>

<a id="how-to-get-an-api-key-desktop-app"></a>
### Hoe u een gratis OpenRouter API-sleutel verkrijgt (desktopapp)

Als u de desktopapp gebruikt, volgt u deze stappen:

1. Ga naar [OpenRouter](https://openrouter.ai) in uw webbrowser.
2. Maak een account aan of meld u aan.
3. Open de pagina [Sleutels](https://openrouter.ai/keys).
4. Klik op de knop om een nieuwe API-sleutel aan te maken.
5. Geef de sleutel een naam, zodat u deze later kunt herkennen.
6. Kopieer de nieuwe API-sleutel.
7. Ga terug naar Transrewrt en open **Instellingen** > **API-configuratie**.
8. Plak de sleutel in **OpenRouter API-sleutel** (onder **Instellingen** > **API-configuratie**).
9. Klik op **Test OpenRouter-sleutel** om te controleren of deze werkt.

<br/><br/>

<a id="getting-started"></a>
## Aan de slag

Als dit de eerste keer is dat u Transrewrt gebruikt, volgt u deze volgorde:

1. Open de app.
2. Kies uw **Interfacetaal** via het wereldbol-icoon indien nodig.
3. Als u de **desktopapp** gebruikt, open [**Instellingen** > **API-configuratie**](#api-config), voeg een API-sleutel toe voor minstens één provider (bijvoorbeeld OpenRouter) en klik op **Test** om te controleren of deze werkt.
4. Open [**Instellingen** > **Modellen**](#models) en voeg een of meer modellen toe aan **Geselecteerde modellen**.
5. Open [**Instellingen** > **Talen**](#languages) en kies uw **Top talen** als u wilt dat uw meest gebruikte talen bovenaan verschijnen.
6. Ga naar **Vertalen** en voer een eenvoudige vertaling uit om te bevestigen dat alles werkt.
7. Zodra dat werkt, probeer **Herschrijving** en daarna **Transformatie**.

Deze volgorde is belangrijk. Hiermee voorkomt u het meest voorkomende probleem bij eerste gebruik: een taak proberen uit te voeren voordat de app een werkende API-verbinding of een geselecteerd model heeft.

<br/><br/>

<a id="main-parts-of-the-window"></a>
## Belangrijkste onderdelen van het venster

De app is verdeeld in drie hoofdgebieden:

- De **zijbalk** aan de linkerkant.
- De **werkbalk** bovenaan.
- Het **werkgebied** in het midden.

<br/>

<a id="sidebar"></a>
### Zijbalk

Gebruik de zijbalk om door de app te navigeren. U kunt de zijbalk inklappen voor meer ruimte door op het icoon naast het app-logo te klikken.

<br/>

<table>
  <tr>
    <td valign="top">
       <img src="../images/screenshots/nl/sidebar.png" alt="Application Sidebar" style="max-width: 100%; border: 1px solid #ddd; border-radius: 4px;">
    </td>
    <td valign="top">
      <br/><br/>
      <ul>
        <li><strong>Vertalen</strong> opent de vertaalwerkruimte.</li><br/>
        <li><strong>Herschrijven</strong> opent de herschrijfwerkruimte.</li><br/>
        <li><strong>Transformatie</strong> opent de aangepaste prompt-werkruimte.</li><br/>
        <li><strong>Dashboard</strong> toont gebruik- en kosteninformatie.</li><br/>
        <li><strong>Instellingen</strong> opent het instellingenpaneel.</li><br/>
        <li><strong>Geschiedenis</strong> toont de gebruiks geschiedenis met invoer- en uitvoertekst.</li><br/>
        <li><strong>Gebruiker</strong> toont de gebruikersnaam van de aangemelde gebruiker (alleen web).</li>
      </ul>
    </td>
  </tr>
</table>

<br/>

<a id="toolbar"></a>
### Werkbalk

De werkbalk verandert iets afhankelijk van waar je in de app bent.

- Links wordt de naam van de huidige pagina weergegeven.
- Rechts zie je de **modelselector** en de bediening voor de **Interfacetaal**.

Met de **modelselector** kun je kiezen welke AI-engine je wilt gebruiken voor de huidige taak.

![Model selector](../images/screenshots/nl/model-selector.png)

Sommige gratis modellen zijn mogelijk niet altijd beschikbaar — soms zijn ze offline of hebben ze een gebruikslimiet. Als dit gebeurt, verwijdert de app dat model automatisch uit je beschikbare lijst. Om te bepalen welke modellen worden weergegeven, ga je naar [**Instellingen** > **Modellen**](#models) en bewerk je je modellenlijst. 
Je kunt de modelinstellingen ook rechtstreeks openen door op het providerpictogram links van de modelnaam in de werkbalk te klikken.

<br/>

Het **globepictogram + taalcode** verandert de interfacetaal van de app, zoals menu's en knoppen. Het verandert **niet** de vertaaltalen die worden gebruikt in **Vertalen**.

![Interface language selector](../images/screenshots/nl/language-selector.png)

<br/>

<a id="input-and-output-panels"></a>
### Invoer- en uitvoerpanelen

De meeste werkruimten gebruiken een linker **Invoer**-paneel en een rechter **Uitvoer**-paneel.

Elk paneel toont ook:

| **Invoer**                                                          | **Uitvoer**                                                                                                                  |
|--------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------|
| - Aantal tekens <br/>- Aantal woorden <br/>- Aantal alinea's   <br/> | - Hoe lang de taak duurde<br/>- **TPS** (tokens per seconde)<br/>- Aantallen tekens, woorden en alinea's<br/>- Het gebruikte model |

Als je je afvraagt wat de technische termen betekenen:

- **Token** betekent een klein stukje tekst. Je kunt dit zien als een deel van een woord of een kort woord.
- **TPS** betekent hoeveel van die tekstblokken het model per seconde verwerkt.

<br/>

Je kunt ook de kosten van elke actie (indien beschikbaar) en de totale kosten volgen, door de optie `Kosteninformatie weergeven bij acties` in te schakelen onder [**Instellingen** > **Algemene instellingen**](#general-settings).

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="translate"></a>
## Vertalen

Gebruik **Vertalen** wanneer je tekst van de ene taal naar de andere wilt omzetten.

![Translate workspace](../images/screenshots/nl/translate.png)

<br/>

<a id="translate-text"></a>
### Tekst vertalen

1. Open **Vertalen**.
2. Kies een taal in **Van**.
3. Kies een taal in **Naar**.
4. Kies een model in de werkbalk.
5. Typ of plak tekst in **Invoer**.
6. Klik op **Vertalen**.
7. Lees het resultaat in **Uitvoer**.
8. Gebruik de kopieerknop als je het resultaat wilt kopiëren.

<br/>

<a id="language-selection"></a>
### Taalkeuze

- **Van** kan een specifieke taal zijn of **Taal detecteren**.
- **Naar** is de taal waarin je het resultaat wilt.

Je geselecteerde **Top talen** verschijnen bovenaan de lijst. Je kunt deze instellen in [**Instellingen** > **Talen**](#languages).

<br/>

<a id="helpful-translation-settings"></a>
### Handige vertaalaanpassingen

In [**Instellingen** > **Algemene instellingen**](#general-settings) kun je aanpassen hoe vertaling werkt:

- **Automatisch vertalen bij plakken** voert een vertaling uit zodra je tekst plakt.
- **Resultaat automatisch naar klembord kopiëren** kopieert het resultaat automatisch na een succesvolle uitvoering.
- **Realtime vertaling (tijdens het typen)** voert vertalingen uit terwijl je typt.
- **Time-out (ms)** bepaalt hoe lang de app wacht voordat een realtime vertaling wordt uitgevoerd.
- **Enter** bepaalt wat er gebeurt wanneer je op `Enter` drukt:

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="rewrite"></a>
## Herschrijving

Gebruik **Herschrijving** wanneer je de formulering wilt verbeteren zonder de hoofdbetekenis te veranderen.

![Rewrite workspace](../images/screenshots/nl/rewrite.png)

Dit is handig voor:

- spelling- en grammaticafouten verbeteren (**Spelling & grammatica controleren**)
- tekst duidelijker maken (**Duidelijkheid verbeteren**)
- meerdere afzonderlijke herformuleringen in één keer genereren (**Alternatieve versies**)
- tekst formeler of informeler maken (**Formeel** / **Informeel**)
- tekst inkorten of uitbreiden (**Inkorten** / **Uitbreiden**)
- tekst technischer laten klinken (**Technisch maken**)

<br/>

> 💡 **TIP**<br/>
> Wanneer je de modus "**Spelling & grammatica controleren**" gebruikt, verschijnt er een schakelaar **Toon wijzigingen** in het uitvoerpaneel (naast **Kopiëren**).
> Schakel deze aan of uit om de specifieke correcties in je tekst te tonen of te verbergen.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="transform"></a>
## Transformatie

Gebruik **Transformatie** wanneer je wilt dat de AI een aangepaste set instructies volgt.

![Transform workspace](../images/screenshots/nl/transform.png)

Dit is het meest flexibele gedeelte van de app. Je kunt het gebruiken voor taken zoals:

- notities samenvatten
- ruwe tekst omzetten in een verzorgde e-mail
- belangrijke punten extraheren
- tekst omzetten naar een specifiek formaat
- elke andere aangepaste actie met de invoertekst

<br/>

<a id="run-an-existing-prompt"></a>
### Een bestaande prompt uitvoeren

1. Open **Transformatie**.
2. Kies een prompt uit de promptlijst.
3. Als er een vak **Doel**taal verschijnt, kies dan een taal indien gewenst.
4. Typ of plak tekst in **Invoer**.
5. Klik op **Transformatie**.
6. Lees het resultaat in **Uitvoer**.

<br/>

<a id="if-you-have-no-prompts-yet"></a>
### Als je nog geen prompts hebt

Als je promptlijst leeg is, klik dan op **Voorbeeldprompts laden** in de Transformatie-werkruimte. Dezelfde optie is altijd beschikbaar in [**Instellingen** > **Transformatie-prompts**](#transform-prompts) op de export/import-rij. Beide voegen ingebouwde voorbeelden toe, zodat je snel kunt beginnen.

<br/>

> ℹ️ **OPMERKING**<br/>
> Voorbeeldprompts worden in het Engels geleverd. Nadat je ze hebt geladen, kun je een prompt bewerken en **Vertaal prompt** gebruiken om deze naar je eigen taal te vertalen.

<br/>

<a id="create-a-prompt-quickly"></a>
### Snel een prompt aanmaken

De snelste manier om een prompt aan te maken is:

1. Klik op **Nieuwe prompt**.
2. Klik op **Prompt genereren**.
3. Beschrijf wat je wilt dat de prompt doet.
4. Kies een model.
5. Laat de app een concept voor je maken.
6. Controleer het concept en klik op **Opslaan**.

![Generate prompt](../images/screenshots/nl/transform-generate.png)

<br/>

<a id="edit-a-prompt"></a>
### Bewerken van een prompt

Wanneer u een prompt aanmaakt of bewerkt, verschijnt de editor aan de linkerkant en een testgebied aan de rechterkant.

![Transform prompt editor](../images/screenshots/nl/transform-prompt-edit.png)

De belangrijkste velden zijn:

- **Promptnaam**: de naam die wordt weergegeven in de promptlijst.
- **Promptinstructies (optioneel)**: een korte hint die aan de gebruiker wordt getoond bij het uitvoeren van de prompt.
- **Modelrol**: de algemene rol die aan de AI is toegekend, zoals 'Je bent een behulpzame assistent.'
- **Modelinstructies (één per regel)**: de specifieke regels die de AI moet volgen.
- **Outputbeschrijving**: een kort woord dat het resultaat beschrijft, zoals 'samenvatting' of 'herschrijving'.
- **Temperatuur (0,0 → 1,0)**: hoe het model zich zal gedragen; zie hieronder.
- **Vraag om doeltaal**: voegt een keuzemogelijkheid voor de doeltaal toe wanneer de prompt wordt uitgevoerd.

Als de technische term **Temperatuur** nieuw voor u is, kunt u er als volgt over nadenken:

- Een **lagere** temperatuur geeft stabielere, voorspelbaardere resultaten.
- Een **hogere** temperatuur geeft meer variatie en creativiteit.

U kunt ook gebruikmaken van:

- **`Genereer prompt`** om een nieuw concept te maken op basis van een eenvoudige beschrijving
- **`Verbeter prompt`** om een bestaande prompt te verfijnen
- **`Vertaal prompt`** om de velden van de prompt te vertalen

<br/>

> ⚠️ **WAARSCHUWING**<br/>
> Klik op **`Opslaan`** voordat u op **`Terug naar uitvoeren`** klikt. Als u terugkeert zonder op te slaan, gaan uw wijzigingen verloren.

<br/>

<a id="test-a-prompt-before-using-it"></a>
### Test een prompt voordat u deze gebruikt

Het testvenster aan de rechterkant stelt u in staat om uw prompt te proberen met voorbeeldtekst voordat u deze gebruikt in uw dagelijkse werk.

Dit is handig wanneer:

- u een nieuwe prompt aan het maken bent
- u twee versies van een prompt met elkaar vergelijkt
- u de toon, lengte of uitvoerformaat wilt controleren

<br/>

> ℹ️ **OPMERKING**<br/>
> U kunt opgeslagen prompts exporteren en importeren in [**Instellingen** > **Transformatie-prompts**](#transform-prompts).

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="dashboard"></a>
## Dashboard

Gebruik **Dashboard** om te zien hoeveel u de app gebruikt en wat dit kost (voor betaalde modellen).

![Dashboard summary](../images/screenshots/nl/dashboard-summary.png)

<br/>

> ℹ️ **OPMERKING**<br/>
> Als u alleen **gratis** modellen gebruikt, kunnen de **kosten** nul zijn en kunnen kostengerichte samenvattingen leeg lijken. Op **Samenvatting**, **Gebruik in de tijd** en **Gebruik per model** worden nog steeds **aantallen oproepen** (vertalen, herschrijven en transformeren) weergegeven wanneer u activiteit heeft in de geselecteerde periode.

<br/>

<a id="filter-the-data"></a>
### Filter de gegevens

Gebruik de filterknoppen bovenaan om het tijdsbereik te wijzigen.

![Dashboard filters](../images/screenshots/nl/dashboard-filter.png)

<br/>

> ℹ️ **OPMERKING**<br/>
> Het filter **Gebruiker** is alleen zichtbaar voor beheerders in de webversie. Gewone gebruikers zien dit filter niet, en het is niet beschikbaar in de desktopapp.

<br/>

<a id="dashboard-tabs"></a>
### Dashboard-tabbladen

- **Samenvatting** geeft een overzicht van gebruik en kosten. Het bevat een **Gebruik in de tijd** (gestapelde cumulatieve **aantallen oproepen** per dag voor vertalen, herschrijven en transformatie) en **Gebruik per model** (totaal **aantal oproepen per model**, inclusief transformatie).
- **Op gebruik** geeft activiteit weer per vertaaltaal, herschrijfmodus en transformatieprompt.
- **Op model** toont welke modellen u hebt gebruikt en hoeveel ze hebben gekost.
- **Op dag** toont dagelijkse totalen.
- **Alle oproepen** toont de volledige oproepgeschiedenis en stelt u in staat deze te exporteren.

<br/>

<a id="export-data"></a>
### Gegevens exporteren

De tabellen in het Dashboard kunnen gegevens exporteren in:

- **JSON**
- **CSV**
- **XLSX**

Dit is handig als u activiteiten buiten de app wilt bekijken of een rapport wilt delen.

<br/>

<a id="delete-stored-records-for-a-model"></a>
### Opgeslagen records voor een model verwijderen

In **Op model** of **Alle oproepen** kunt u opgeslagen records voor een model verwijderen door op het prullenbakpictogram te klikken.

> ⚠️ **WAARSCHUWING**<br/>
> Het verwijderen van opgeslagen records kan niet ongedaan worden gemaakt. Gebruik dit alleen als u zeker weet dat u die geschiedenis niet langer nodig hebt.

Als u alle gegevens wilt verwijderen of records wilt verwijderen op basis van hun leeftijd, gaat u naar [**Instellingen** > **Kostenregistratie**](#cost-tracking). Daar vindt u opties om alle opgeslagen gegevens te verwijderen of alleen gegevens die ouder zijn dan een bepaalde datum.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="history"></a>
## Geschiedenis

Klik op **Geschiedenis** om de geschiedenis van uw acties binnen **Transrewrt** te bekijken, inclusief de invoer en uitvoer van elke bewerking.

![History page](../images/screenshots/nl/history.png)

<br/>

<a id="filter-the-history"></a>
### Filter de gegevens

**Geschiedenis** gebruikt dezelfde filters als de pagina **Dashboard**. Gebruik deze om het tijdsbereik te selecteren.

![Dashboard filters](../images/screenshots/nl/dashboard-filter.png)

<br/>

> ℹ️ **OPMERKING**<br/>
> Het filter **Gebruiker** is alleen zichtbaar voor beheerders in de webversie. Gewone gebruikers zien dit filter niet, en het is niet beschikbaar in de desktopapp.

<br/>

<a id="export-history-data"></a>
### Geschiedenisgegevens exporteren

De geschiedenispagina kan de gefilterde gegevens exporteren in:

- **JSON**
- **CSV**
- **XLSX**

Dit is handig als u activiteiten buiten de app wilt bekijken of een rapport wilt delen.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="settings"></a>
## Instellingen

Open **Instellingen** in de zijbalk om aan te passen hoe de app zich gedraagt.

De beschikbare tabbladen zijn afhankelijk van het platform en uw rol:

| Tabblad               | Desktop | Web (beheerder) | Web (standaardgebruiker) |
  |-------------------|:-------:|:-----------:|:------------------:|
  | Algemene instellingen  |   ja   |     ja     |        ja         |
  | Modellen            |   ja   |     ja     |        ja         |
  | Talen         |   ja   |     ja     |        ja         |
  | Kostenregistratie     |   ja   |     ja     |         —          |
  | Transformatie-prompts |   ja   |     ja     |        ja         |
  | Gebruikers             |    —    |     ja     |         —          |
  | API-configuratie        |   ja   |     ja     |         —          |
  | Over             |   ja   |     ja     |        ja         |

<br/>

> ℹ️ **OPMERKING**<br/>
> In de webversie heeft elke gebruiker zijn eigen configuratie. Instellingen zoals geselecteerde modellen, talen, algemene opties en transformatie-prompts worden per gebruiker opgeslagen. Wijzigingen die u aanbrengt, hebben geen invloed op andere gebruikers.

<br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="general-settings"></a>
### Algemene instellingen

Gebruik **Algemene instellingen** om het typgedrag, het opslaan van uitvoeringsdetails voor **Geschiedenis** en het uiterlijk te beheren.

**Gedrag**

- **Gedrag voor ENTER** kiest of `Enter` de taak uitvoert of een nieuwe regel invoegt.
- **Automatisch vertalen bij plakken** start de vertaling zodra u tekst plakt.
- **Resultaat automatisch naar klembord kopiëren** kopieert succesvolle resultaten automatisch.
- **Realtime vertaling (tijdens het typen)** vertaalt terwijl u typt.
- **Time-out (ms)** stelt de wachttijd in voor realtime vertaling.

**Geschiedenis**

- **Behoud uitvoeringsgeschiedenis** bepaalt of elke vertaling, herschrijving en transformatie **invoer- en uitvoertekst** opslaat voor de [**Geschiedenis**](#history)-weergave in de zijbalk. Als u dit uitschakelt, wordt om bevestiging gevraagd; bij bevestiging wordt de opgeslagen geschiedenistekst uit de database verwijderd.
- **Verwijder geschiedenisgegevens** stelt u in staat om opgeslagen tekst te verwijderen op basis van leeftijd (bijvoorbeeld ouder dan een paar maanden, of **alle gegevens (wissen)**) met behulp van **Gegevens verwijderen**. Dit heeft alleen invloed op de opgeslagen uitvoertekst voor de **Geschiedenis**-weergave; het verwijdert **geen** kosten- of gebruikstotalen. Gebruik [**Instellingen** > **Kostenregistratie**](#cost-tracking) om **kosten**gegevens te verwijderen of inkorten.

**Uiterlijk**

- **Toon kosteninformatie bij de acties** bepaalt of de kosten per bewerking (indien beschikbaar) en de totale kosten worden weergegeven op de uitvoerpanelen van Vertalen, Herschrijven en Transformatie.
- **Kostenafronding decimalen** wijzigt hoe kosten met decimalen worden weergegeven.
- **Alleen web:** **marge rondom de app tonen** voegt extra ruimte toe rond de interface.
- **Lettertypefamilie** wijzigt het schrijflettertype in de tekstpanelen.
- **Grootte** wijzigt de lettergrootte.

**Configuratieback-up**

- **Neem gebruikgegevens op in de back-up** — wanneer ingeschakeld, bevat het ZIP-bestand ook uitvoeringsgeschiedenis en API-aanroepgegevens.
- **Configuratie back-uppen** — maakt standaard één ZIP-bestand aan (`transrewrt-config-backup-YYYY-MM-DD_HHMMSS.zip` in UTC) met `config.json`, `state.json`, optionele versleutelingssleutel, gebruikers, voorkeuren, aangepaste prompts en gebruikgegevens indien ingeschakeld. Na een succesvolle back-up wordt de bestandsnaam van het opgeslagen bestand weergegeven.
- **Herstellen vanuit back-up** — opent eerst een **bevestigingsvenster**. Kies het back-up ZIP-bestand in het venster (**Bladeren** / bestandskiezer of slepen en neerzetten waar ondersteund), en controleer vervolgens de opties:
  - **Herstel de gebruikgegevens** — importeert gebruik/geschiedenis uit het ZIP-bestand wanneer deze is gemaakt met gebruikgegevens; laat uitgeschakeld als u alleen instellingen en prompts wilt.
  - **Verwijder de oude gebruikgegevens voordat u herstelt** — verwijdert bestaande gebruik/geschiedenis in deze installatie voordat de back-up wordt toegepast (optioneel; gebruik wanneer u een schone vervanging wilt).

Back-ups die zijn gemaakt in de web- of desktopversie kunnen in de andere worden hersteld. Bij het herstellen van een desktopback-up in de webversie worden de gegevens hersteld naar de beheerdersgebruiker.

<br/>

<a id="models"></a>
### Modellen

Gebruik **Instellingen** > **Modellen** om te kiezen welke modellen in de werkbalk verschijnen.

![Settings Models tab](../images/screenshots/nl/settings-models.png)

De pagina bevat twee lijsten:

- **Beschikbare modellen** aan de linkerkant
- **Geselecteerde modellen** aan de rechterkant

Handige bedieningselementen zijn onder andere:

- **Modellen zoeken...** om een model op naam te vinden
- **Provider**-chips om de lijst te beperken tot één engine (OpenRouter, OpenAI, Ollama, …)
- **Alleen gratis** om alleen gratis modellen weer te geven
- **Vernieuwen** om de lijst opnieuw te laden
- **Alles uitvouwen** en **Alles inklappen** wanneer u sorteert op provider

Model-id's bevatten het provider-voorvoegsel (bijvoorbeeld `openrouter/…` versus `openai/…`). Badge's zoals **OpenAI (OpenRouter)** versus **OpenAI (direct)** geven aan hoe het verkeer wordt doorgestuurd.

> ℹ️ **OPMERKING**<br/>
> **OpenRouter Body Builder** (`openrouter/bodybuilder`) is een routermodel, geen algemeen chatmodel: het antwoord is JSON dat OpenRouter API-aanvraagbodems beschrijft (bijvoorbeeld een `requests`-array met `model` en `messages`). Als u het gebruikt voor **Vertalen**, **Herschrijven** of **Transformatie**, toont het uitvoerpaneel die JSON in plaats van afgewerkt tekst. Kies een normaal tekstmodel voor deze taken. Zie de [Body Builder modelpagina](https://openrouter.ai/openrouter/bodybuilder) op OpenRouter.

Acties:

- Klik op **Toevoegen** of ergens in de invoer om een model toe te voegen.

- Klik op **X** ernaast in **Geselecteerde modellen** of op **Geselecteerd** in de invoer onder Beschikbare modellen om een model te verwijderen.

- Klik op **Alles deselecteren** om de lijst te wissen. Het vereiste gratis model blijft in de lijst staan.

<br/>

> ℹ️ **OPMERKING**<br/>
> Als u geen credits direct aan OpenRouter wilt toevoegen, schakel dan eerst **Alleen gratis** in en kies de gratis modellen (geen creditcard vereist). U kunt ook Ollama gebruiken om modellen lokaal uit te voeren zonder API-sleutel.

<br/>

<a id="languages"></a>
### Talen

Gebruik **Instellingen** > **Talen** om de talenlijsten die in de app worden gebruikt te organiseren.

- **Top talen** worden vastgemaakt bovenaan de talenlijsten in **Vertalen** en **Transformatie**.
- **Aangepaste taal** stelt u in staat om een taal toe te voegen die niet in de ingebouwde lijst staat.

Als u een aangepaste taal toevoegt, verschijnt deze in de taalkeuzemenu's naast de ingebouwde opties.

<br/>

<a id="cost-tracking"></a>
### Kostenregistratie

Gebruik **Instellingen** > **Kostenregistratie** om kosteninformatie te beheren.

- **Totale kosten** toont het lopende totaal.
- **Waarde kopiëren** kopieert het totaal naar het klembord.
- **Kosten resetten** zet het opgeslagen totaal terug naar nul.
- **Synchroniseren met API-sleutelgebruik** stelt het totaal in op overeenkomst met het gebruik dat wordt gerapporteerd door uw OpenRouter-account (alleen OpenRouter).
- **API-sleutelgebruik** toont OpenRouter-gebruiksgegevens, indien beschikbaar.
- **Kostengegevens verwijderen** verwijdert alle gegevens, of alleen vermeldingen die ouder zijn dan een geselecteerde datum.

**Kostenregistratie:** Wanneer u OpenRouter-modellen gebruikt, toont de app uw werkelijke gebruik en uitgaven op basis van kosteninformatie van OpenRouter. Voor alle andere providers schat de app kosten aan de hand van prijzen die door OpenRouter zijn gepubliceerd; als een prijs niet beschikbaar is, kan de schatting nul zijn.

<br/>

> ℹ️ **OPMERKING**<br/>
>  **Alle kostenbedragen zijn schattingen ter informatie, geen officiële factureringsoverzichten.**

<br/>

> ⚠️ **WAARSCHUWING**<br/>
> Gegevensverwijdering kan niet ongedaan worden gemaakt. Zorg ervoor dat u uw gegevens back-upt of exporteert via [**Geschiedenis**](#history)
> of [**Dashboard** > **Alle oproepen**](#dashboard-tabs), anders gaan ze permanent verloren.
> Alle invoer-/uitvoergeschiedenis gerelateerd aan elke API-aanroepvermelding wordt ook verwijderd.

<br/>

<a id="transform-prompts"></a>
### Transformatie-prompts

Gebruik **Instellingen** > **Transformatie-prompts** om prompts in bulk te beheren.

U kunt:

- uw opgeslagen prompts controleren
- prompts verwijderen
- prompts importeren uit een bestand
- prompts exporteren voor back-up of delen
- voorbeeldprompts laden naar de promptlijst

<br/>

<a id="users"></a>
### Gebruikers

Gebruik **Gebruikers** om gebruikersaccounts te beheren in de webversie. U kunt gebruikers toevoegen, hun gegevens bijwerken, wachtwoorden opnieuw instellen en accounts verwijderen.

<br/>

<a id="api-config"></a>
### API-configuratie

De ondersteunde providers zijn: OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras en **Ollama** (lokale modellen via een basis-URL). U hoeft alleen de providers te configureren die u gebruikt.

**Webapplicatie: alleen beheerder**

API-sleutels worden geconfigureerd via systeem- of Docker-omgevingsvariabelen — ze worden niet ingevoerd in de web-UI. Op deze pagina ziet u welke providers een sleutel geconfigureerd hebben en kunt u elke provider testen door op de knop **`Test`** te klikken.

<br/>

> ℹ️ **OPMERKING**<br/>
> Om een API-sleutel te wijzigen, moet u de omgevingsvariabele in uw systeem- of Docker-configuratie bijwerken en de server of container opnieuw starten.

> ℹ️ **OPMERKING**<br/>
> **Configuratieback-ups** (zie [**Algemene instellingen** → Configuratieback-up](#general-settings)) kunnen **opgeloste** providersleutels insluiten in het `config.json` van de ZIP. Bij het herstellen van die ZIP worden deze sleutels **niet** teruggekopieerd naar het persistente configuratiebestand van de server — actieve sleutels komen nog steeds uit de omgeving en de bestaande bestandsstatus zoals daar beschreven.

<br/>

**Desktopapplicatie**

Gebruik **API-configuratie** om API-sleutels op te slaan voor elke provider die u gebruikt. Voor Ollama voert u de **basis-URL** in plaats van een API-sleutel in.

<br/>

> 💡 **Tip** <br/>
> Als u geen API-sleutel wilt gebruiken of geen kosten wilt maken, kunt u [Ollama downloaden](https://ollama.com) en modellen (zoals `translategemma:4b`) gratis lokaal op uw machine uitvoeren. U kunt ook een gratis OpenRouter-account aanmaken (zonder creditcard) om hun gratis modellen te gebruiken, of een gratis API-sleutel verkrijgen van Cerebras, Google, Groq of Mistral AI.

<br/>

- Voeg alleen de providers toe die u nodig hebt. In **Instellingen** > **Modellen** begint elk model-ID met de provider (bijvoorbeeld `openrouter/openrouter/free`, `openai/gpt-4o`, `ollama/llama3`).

Voer om een API-sleutel toe te voegen de waarde in het tekstveld in en klik op **`Opslaan`**. Om een bestaande sleutel te vervangen, klikt u op **`Bewerken`**. Om te controleren of een sleutel werkt, klikt u op **`Test`**. Voor de Ollama basis-URL moet u altijd op **`Test`** klikken om de verbinding te controleren.

<br/>

> ℹ️ **OPMERKING**<br/>
> U kunt de huidige waarde van een API-sleutel niet bekijken. U kunt deze alleen vervangen via de knop **`Bewerken`**.
> API-sleutels worden versleuteld opgeslagen in de configuratie.

<br/>

<a id="about"></a>
### Over

Het tabblad **Over** toont:

- de appnaam
- het versienummer
- de bouwdatum
- een link naar de projectrepository

<br/><br/>

<a id="common-issues"></a>
## Veelvoorkomende problemen

Als iets niet werkt zoals verwacht, controleer dan eerst de volgende punten.

<br/>

<a id="the-app-will-not-translate-rewrite-or-transform-text"></a>
### De app zal tekst niet vertalen, herschrijven of transformeren

Controleer het volgende:

- u een model heeft geselecteerd in de werkbalk
- er minstens één model is opgenomen in [**Instellingen** > **Modellen**](#models)
- uw API-instelling werkt

Als u de desktopapp gebruikt:

1. Open [**Instellingen** > **API-configuratie**](#api-config).
2. Controleer of minstens één API-sleutel is opgeslagen.
3. Klik op **Test** naast de provider om te bevestigen dat de sleutel werkt.

<br/>

<a id="the-model-list-is-empty"></a>
### De modellenlijst is leeg

Open [**Instellingen** > **Modellen**](#models) en klik op **Vernieuwen**.

Indien nodig:

- zoek een model
- schakel **Alleen gratis** in
- voeg een of meer modellen toe aan **Geselecteerde modellen**

<br/>

<a id="the-result-is-too-slow-or-too-expensive"></a>
### Het resultaat is te traag of te duur

Probeer een of meer van de volgende opties:

- kies een ander model
- gebruik een kortere invoer
- schakel **Realtime vertaling (tijdens het typen)** uit in [**Instellingen** > **Algemene instellingen**](#general-settings)
- gebruik gratis modellen voor eenvoudige taken (zie [Modellen](#models))

<br/>

<a id="the-interface-is-in-the-wrong-language"></a>
### De interface is in de verkeerde taal

Klik op het wereldbol-icoon in de [werkbalk](#toolbar) en kies uw gewenste **Interfacetaal**.

<br/>

<a id="the-text-is-too-small-or-hard-to-read"></a>
### De tekst is te klein of moeilijk leesbaar

Open [**Instellingen** > **Algemene instellingen**](#general-settings) en wijzig:

- **Lettertype**
- **Grootte**

<br/>

<a id="dashboard-charts-are-empty"></a>
### De grafieken in het dashboard zijn leeg

Dit is normaal als:

- u alleen **gratis modellen** gebruikt en kijkt naar **kosten** (deze kunnen nul zijn); **aantal oproepen**-grafieken op **Samenvatting** hebben nog gegevens nodig uit de geselecteerde periode
- het geselecteerde **tijdfilter** niet overeenkomt met de periode waarin oproepen zijn gedaan — probeer **Alles** om te controleren

Als grafieken nog steeds leeg zijn na het selecteren van **Alles**, controleer dan of oproepen verschijnen in [**Geschiedenis**](#history) of in het tabblad **Alle oproepen**.

<br/>

<a id="cost-shows-not-available-or-seems-wrong"></a>
### Kosten tonen "niet beschikbaar" of lijken onjuist

Wanneer u modellen gebruikt via **OpenRouter**, toont de app uw daadwerkelijke uitgaven zoals gerapporteerd door OpenRouter.

Voor **andere providers** (OpenAI direct, Anthropic direct, enz.), worden de kosten geschat op basis van prijsgegevens gepubliceerd door OpenRouter. Als er geen overeenkomstige prijs wordt gevonden voor een model, wordt de kosten weergegeven als **niet beschikbaar** en worden deze niet toegevoegd aan uw lopende totaal.

<br/>

<a id="total-cost-does-not-match-my-provider-bill"></a>
### Totale kosten komen niet overeen met mijn providerfactuur

Alle kostenbedragen in de app zijn **geschat voor naslagdoeleinden**, geen officiële facturatieverklaringen.

Om het totaal dichter bij uw werkelijke OpenRouter-uitgaven te brengen, opent u [**Instellingen** > **Kostenregistratie**](#cost-tracking) en klikt u op **Synchroniseren met API-sleutelgebruik**.

<br/>

<a id="the-history-page-is-missing-from-the-sidebar"></a>
### De pagina Geschiedenis ontbreekt in de zijbalk

**Behoud uitvoeringsgeschiedenis** is mogelijk uitgeschakeld. Open [**Instellingen** > **Algemene instellingen**](#general-settings) en schakel dit in. Houd er rekening mee dat het inschakelen de eerder verwijderde geschiedenisgegevens niet herstelt.

<br/>

<a id="web-app-session-expired"></a>
### Webapp: onverwacht doorgestuurd naar de inlogpagina

Uw sessie is mogelijk verlopen. Log opnieuw in. Als dit regelmatig gebeurt, controleer dan de serverconfiguratie voor de instellingen van de sessieduur.

<br/>

<a id="web-admin-forgot-or-lost-a-password"></a>
### Webbeheerder: wachtwoord vergeten of kwijtgeraakt

Dit is van toepassing op de **zelfgehoste webapp** (Docker), niet op de desktopapp (Electron).

- Als een andere beheerder nog steeds kan inloggen, kan deze [**Instellingen** > **Gebruikers**](#users) openen, het account kiezen en daar een **nieuw wachtwoord** instellen.
- Als u **uitgesloten bent** maar **shelltoegang** hebt tot de machine of container, reset u het wachtwoord met de helper die bij de image wordt meegeleverd (vervang `transrewrt` als u de standaardnaam wijzigt, en plaats aanhalingstekens rond het wachtwoord als het spaties of speciale tekens bevat):

```bash
docker exec transrewrt reset-web-password '<username>' '<new-password>'
```

De standaard beheerdersnaam is `admin` als u nooit andere accounts hebt aangemaakt. Wanneer u slechts één argument opgeeft, wordt dit beschouwd als het nieuwe wachtwoord voor `admin`.

Als u uit een **broncode-exemplaar** werkt in plaats van Docker, gebruik dan:

```bash
pnpm run reset-web-password -- <username> <new-password>
```

Het script werkt de gebruikersgegevens bij in de SQLite-database (en kan de `admin`-gebruiker aanmaken als deze ontbreekt). Na het opnieuw instellen, meldt u zich aan met het nieuwe wachtwoord.

<br/>

<a id="dashboard-shows-no-data-for-other-users"></a>
### Dashboard toont geen gegevens voor andere gebruikers (web)

Alleen **beheerders** kunnen gegevens van alle gebruikers bekijken via het **Gebruiker**-filter. Regelmatige gebruikers zien standaard alleen hun eigen activiteit.

<br/>

<a id="i-changed-a-prompt-and-lost-the-edits"></a>
### Ik heb een prompt gewijzigd en de bewerkingen verloren

Klik bij het bewerken van een prompt altijd op **Opslaan** voordat u op **Terug naar Uitvoeren** klikt.

<br/><br/>

<a id="quick-tips"></a>
## Snelle tips

- Begin met [**Vertalen**](#translate) om er zeker van te zijn dat uw instelling werkt voordat u doorgaat naar [**Herschrijving**](#rewrite) of [**Transformatie**](#transform).
- Gebruik [**Herschrijving**](#rewrite) voor alledaagse verbeteringen van de formulering.
- Gebruik [**Transformatie**](#transform) wanneer u een herhaalbare werkwijze nodig hebt voor een specifieke taak.
- Gebruik [**Dashboard**](#dashboard) als u gebruik en kosten in de gaten wilt houden.
- Gebruik [**Geschiedenis**](#history) om eerdere bewerkingen en hun volledige invoer-/uitvoertekst te bekijken.
- Exporteer prompts regelmatig als u een promptbibliotheek aan het bouwen bent die u veilig wilt bewaren (zie [Transformatie-prompts](#transform-prompts)) of als u deze met anderen wilt delen.

<br/><br/>

<a id="disclaimer"></a>
## Disclaimer

Productnamen en pictogrammen behoren toe aan hun respectieve eigenaren en worden alleen gebruikt ter identificatie. Deze software is niet gelieerd aan of goedgekeurd door een van de genoemde merken.

<br/><br/>

<a id="license"></a>
## Licentie

Copyright © 2026 Waldemar Scudeller Jr.

[Apache License 2.0](../LICENSE)
