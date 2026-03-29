---
translated_at: "2026-03-29T01:53:03.633Z"
source_hash: "8981b8db163153bfc443046fa20a49b33c92b9feebdee302f6ef60852f273472"
source_mtime: "2026-03-29T01:41:58.368Z"
model: "qwen/qwen3-235b-a22b-2507"
---
![Transrewrt-banners](../images/transrewrt_banner.png)

<a id="transrewrt-user-guide"></a>

# Gebruikershandleiding

<br/>

<a id="introduction"></a>

## Inleiding

Transrewrt helpt je op drie manieren met het bewerken van tekst:

- **Vertalen** - tekst omzetten van de ene taal naar de andere.
- **Herschrijven** - tekst opnieuw formuleren in een andere stijl, zoals duidelijker, korter of formeler.
- **Transformeren** - tekst verwerken met aangepaste AI-instructies, ook wel prompts genoemd.

<br/>

Deze handleiding legt uit hoe je de app gebruikt zodra deze is geïnstalleerd en actief is. Zie het hoofd-**[README](README.nl.md)** voor installatie-instructies.

<br/>

> ℹ️ **OPMERKING**<br/>
> Transrewrt is beschikbaar als desktopapp voor Windows en Linux en als zelfgehoste webapp. Deze handleiding richt zich op het dagelijkse gebruik van de app. Indien iets alleen op één versie van toepassing is, wordt dit duidelijk aangegeven.

<small id="lang-list"> [English (UK)](../USER-GUIDE.md) · [Português (BR)](USER-GUIDE.pt-BR.md) · [العربية](USER-GUIDE.ar.md) · [বাংলা](USER-GUIDE.bn.md) · [Català](USER-GUIDE.ca.md) · [简体中文](USER-GUIDE.zh-CN.md) · [繁體中文](USER-GUIDE.zh-TW.md) · [Hrvatski](USER-GUIDE.hr.md) · [Čeština](USER-GUIDE.cs.md) · [Nederlands](USER-GUIDE.nl.md) · [English (US)](USER-GUIDE.en-US.md) · [Filipino](USER-GUIDE.tl.md) · [Français](USER-GUIDE.fr.md) · [Deutsch](USER-GUIDE.de.md) · [Ελληνικά](USER-GUIDE.el.md) · [हिन्दी](USER-GUIDE.hi.md) · [Magyar](USER-GUIDE.hu.md) · [Italiano](USER-GUIDE.it.md) · [日本語](USER-GUIDE.ja.md) · [Basa Jawa](USER-GUIDE.jv.md) · [한국어](USER-GUIDE.ko.md) · [Bahasa Melayu](USER-GUIDE.ms.md) · [فارسی](USER-GUIDE.fa.md) · [Polski](USER-GUIDE.pl.md) · [Português (PT)](USER-GUIDE.pt.md) · [ਪੰਜਾਬੀ](USER-GUIDE.pa.md) · [Română](USER-GUIDE.ro.md) · [Русский](USER-GUIDE.ru.md) · [Slovenčina](USER-GUIDE.sk.md) · [Español](USER-GUIDE.es.md) · [Kiswahili](USER-GUIDE.sw.md) · [Svenska](USER-GUIDE.sv.md) · [తెలుగు](USER-GUIDE.te.md) · [ภาษาไทย](USER-GUIDE.th.md) · [Türkçe](USER-GUIDE.tr.md) · [Українська](USER-GUIDE.uk.md) · [Tiếng Việt](USER-GUIDE.vi.md)</small>

<small id="lang-list"> [Engels (VK)](USER-GUIDE.nl.md) · [Portugees (BR)](USER-GUIDE.pt-BR.md) · [Arabisch](USER-GUIDE.ar.md) · [Bengalees](USER-GUIDE.bn.md) · [Catalaans](USER-GUIDE.ca.md) · [Vereenvoudigd Chinees](USER-GUIDE.zh-CN.md) · [Traditioneel Chinees](USER-GUIDE.zh-TW.md) · [Kroatisch](USER-GUIDE.hr.md) · [Tsjechisch](USER-GUIDE.cs.md) · [Nederlands](USER-GUIDE.nl.md) · [Engels (VS)](USER-GUIDE.en-US.md) · [Filipijns](USER-GUIDE.tl.md) · [Frans](USER-GUIDE.fr.md) · [Duits](USER-GUIDE.de.md) · [Grieks](USER-GUIDE.el.md) · [Hindi](USER-GUIDE.hi.md) · [Hongaars](USER-GUIDE.hu.md) · [Italiaans](USER-GUIDE.it.md) · [Japans](USER-GUIDE.ja.md) · [Basa Jawa](USER-GUIDE.jv.md) · [Koreaans](USER-GUIDE.ko.md) · [Maleis](translated-docs/US

ER-GUIDE.ms.md) · [فارسی](USER-GUIDE.fa.md) · [Polski](USER-GUIDE.pl.md) · [Português (PT)](USER-GUIDE.pt.md) · [ਪੰਜਾਬੀ](USER-GUIDE.pa.md) · [Română](USER-GUIDE.ro.md) · [Русский](USER-GUIDE.ru.md) · [Slovenčina](USER-GUIDE.sk.md) · [Español](USER-GUIDE.es.md) · [Kiswahili](USER-GUIDE.sw.md) · [Svenska](USER-GUIDE.sv.md) · [తెలుగు](USER-GUIDE.te.md) · [ภาษาไทย](USER-GUIDE.th.md) · [Türkçe](USER-GUIDE.tr.md) · [Українська](USER-GUIDE.uk.md) · [Tiếng Việt](USER-GUIDE.vi.md)</small>

<small>

> **Opmerking over vertalingen van de gebruikersinterface en documentatie:** Alle interface-talen, met uitzondering van het oorspronkelijke Engels (Groot-Brittannië),
> zijn vertaald met behulp van AI-modellen; de formulering kan onnauwkeurig zijn of fouten bevatten.

</small>

<br/>


<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Inhoudsopgave**

- [Voordat je begint](#before-you-start)
  - [Hoe je een gratis OpenRouter API-sleutel verkrijgt (desktopapp)](#how-to-get-a-free-openrouter-api-key-desktop-app)
- [Aan de slag](#getting-started)
- [Belangrijkste onderdelen van het venster](#main-parts-of-the-window)
  - [Zijbalk](#sidebar)
  - [Werkbalk](#toolbar)
  - [Invoer- en uitvoerpanelen](#input-and-output-panels)
- [Vertalen](#translate)
  - [Tekst vertalen](#translate-text)
  - [Taalselectie](#language-selection)
  - [Handige vertalinginstellingen](#helpful-translation-settings)
- [Herschrijven](#rewrite)
- [Transformeren](#transform)
  - [Een bestaande prompt uitvoeren](#run-an-existing-prompt)
  - [Als je nog geen prompts hebt](#if-you-have-no-prompts-yet)
  - [Snel een prompt maken](#create-a-prompt-quickly)
  - [Een prompt bewerken](#edit-a-prompt)
  - [Een prompt testen voordat je deze gebruikt](#test-a-prompt-before-using-it)
- [Dashboard](#dashboard)
  - [De gegevens filteren](#filter-the-data)
  - [Dashboard-tabbladen](#dashboard-tabs)
  - [Gegevens exporteren](#export-data)

- [Verwijder opgeslagen gegevens voor een model](#delete-stored-records-for-a-model)
- [Geschiedenis](#history)
  - [Filter de gegevens](#filter-the-data-1)
  - [Exporteer geschiedenisgegevens](#export-history-data)
- [Instellingen](#settings)
  - [Algemene instellingen](#general-settings)
  - [Modellen](#models)
  - [Talen](#languages)
  - [Kostenregistratie](#cost-tracking)
  - [Transformeer prompts](#transform-prompts)
  - [Gebruikers](#users)
  - [API-configuratie](#api-config)
  - [Over](#about)
- [Veelvoorkomende problemen](#common-issues)
  - [De app vertaalt, herschrijft of transformeert geen tekst](#the-app-will-not-translate-rewrite-or-transform-text)
  - [De modellenlijst is leeg](#the-model-list-is-empty)
  - [Het resultaat is te traag of te duur](#the-result-is-too-slow-or-too-expensive)
  - [De interface is in de verkeerde taal](#the-interface-is-in-the-wrong-language)
  - [De tekst is te klein of moeilijk te lezen](#the-text-is-too-small-or-hard-to-read)
  - [Dashboardgrafieken zijn leeg](#dashboard-charts-are-empty)

- [Kosten worden weergegeven als 'niet beschikbaar' of lijken onjuist](#cost-shows-not-available-or-seems-wrong)
- [Totale kosten komen niet overeen met mijn providerfactuur](#total-cost-does-not-match-my-provider-bill)
- [De geschiedenispagina ontbreekt in de zijbalk](#the-history-page-is-missing-from-the-sidebar)
- [Webapp: onverwacht doorgestuurd naar de inlogpagina](#web-app-redirected-to-the-login-page-unexpectedly)
- [Webbeheer: wachtwoord vergeten of kwijtgeraakt](#web-admin-forgot-or-lost-a-password)
- [Dashboard toont geen gegevens voor andere gebruikers (web)](#dashboard-shows-no-data-for-other-users-web)
- [Ik heb een prompt aangepast en de bewerkingen zijn verloren gegaan](#i-changed-a-prompt-and-lost-the-edits)
- [Snelle tips](#quick-tips)
- [Aansprakelijkheid](#disclaimer)
- [Licentie](#license)

<!-- END doctoc gegenereerde TOC, laat deze commentaar hier staan om automatisch bijwerken mogelijk te maken -->

<br/><br/>

<a id="before-you-start"></a>

## Voordat u begint

Om Transrewrt te gebruiken, hebt u toegang nodig tot minstens één AI-aanbieder. De ondersteunde aanbieders zijn: [OpenRouter](https://openrouter.ai) (die veel modellen verzamelt), OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras en [Ollama](https://ollama.com) voor lokale modellen.

U hoeft geen betaald model te kiezen om aan de slag te gaan. Zodra u uw OpenRouter API-sleutel toevoegt, schakelt de app automatisch een ingebouwde **gratis** OpenRouter-optie in. Hierdoor kunt u direct tekst vertalen, herschrijven en transformeren. U kunt ook een gratis API-sleutel verkrijgen van Cerebras, Google, Groq of Mistral AI.

In eenvoudige bewoordingen:

- Een **model** is de AI-engine die het werk doet. Modellen worden vermeld met een **aanbiederprefix** (bijvoorbeeld `openrouter/…`, `openai/…`, `ollama/…`).
- Een **API-sleutel** (of voor Ollama een **basis-URL**) is de manier waarop de app de aanbieder bereikt.

Als u de **desktopapp** gebruikt, voegt u sleutels toe in [**Instellingen** > **API-configuratie**](#api-config) voor elke provider die u gebruikt. Als u alleen OpenRouter gebruikt, zie dan hieronder [Hoe een API-sleutel verkrijgen](#how-to-get-an-api-key-desktop-app). Als u geen API-sleutel wilt gebruiken, kunt u Ollama installeren (van [ollama.com](https://ollama.com)) en lokale modellen gebruiken, zoals `translategemma:4b`.

Als u de **webversie** gebruikt, dan wordt de configuratie van providers gedaan door de serverbeheerder via omgevingsvariabelen. U kunt daarom geen API-sleutels rechtstreeks in de applicatie invoeren.

<br/>

<a id="how-to-get-an-api-key-desktop-app"></a>

### Hoe krijg je een gratis OpenRouter API-sleutel (desktopapp)

Als je de desktopapp gebruikt, volg dan deze stappen:

1. Ga in je webbrowser naar [OpenRouter](https://openrouter.ai).
2. Maak een account aan of meld je aan.
3. Open de pagina [Sleutels](https://openrouter.ai/keys).
4. Klik op de knop om een nieuwe API-sleutel aan te maken.
5. Geef de sleutel een naam, zodat je hem later kunt herkennen.
6. Kopieer de nieuwe API-sleutel.
7. Ga terug naar Transrewrt en open **Instellingen** > **API-configuratie**.
8. Plak de sleutel in het veld **OpenRouter API-sleutel** (onder **Instellingen** > **API-configuratie**).
9. Klik op **OpenRouter-sleutel testen** om te controleren of deze werkt.

<br/><br/>

<a id="getting-started"></a>

## Aan de slag

Als dit de eerste keer is dat je Transrewrt gebruikt, volg dan deze volgorde:

1. Open de app.
2. Kies indien nodig je **interface taal** via het wereldbol-icoon.
3. Als je de **desktopapp** gebruikt, open je [**Instellingen** > **API-configuratie**](#api-config), voeg je een API-sleutel toe voor minstens één leverancier (bijvoorbeeld OpenRouter) en klik je op **Testen** om te controleren of het werkt.
4. Open [**Instellingen** > **Modellen**](#models) en voeg een of meer modellen toe aan **Geselecteerde modellen**.
5. Open [**Instellingen** > **Talen**](#languages) en kies je **Belangrijkste talen** als je wilt dat je meest gebruikte talen bovenaan verschijnen.
6. Ga naar **Vertalen** en voer een eenvoudige vertaling uit om te controleren of alles werkt.
7. Zodra dat werkt, probeer je **Herschrijven** en daarna **Transformeren**.

Deze volgorde is belangrijk. Hiermee voorkom je het meest voorkomende probleem bij eerste gebruik: een taak proberen uit te voeren voordat de app een werkende API-verbinding heeft of een geselecteerd model.

<br/><br/>

<a id="main-parts-of-the-window"></a>

## Belangrijkste onderdelen van het venster

De app is onderverdeeld in drie hoofdgedeeltes:

- De **zijbalk** aan de linkerkant.
- De **werkbalk** bovenaan.
- Het **werkgebied** in het midden.

<br/>

<a id="sidebar"></a>

### Sidebar

Gebruik de zijbalk om door de app te navigeren. Je kunt de zijbalk inklappen om meer ruimte te krijgen door op het icoon naast het app-logo te klikken.

<br/>

<table>
  <tr>
    <td valign="top">
       <img src="../images/screenshots/nl/sidebar.png" alt="Application Sidebar" style="max-width: 100%; border: 1px solid #ddd; border-radius: 4px;">
    </td>
    <td valign="top">
      <br/><br/>
      <ul>
        <li><strong>Vertalen</strong> opent de vertaalwerkomgeving.</li><br/>
        <li><strong>Herschrijven</strong> opent de herschrijfwerkomgeving.</li><br/>
        <li><strong>Transformeren</strong> opent de aangepaste prompt-werkomgeving.</li><br/>
        <li><strong>Dashboard</strong> toont gebruiks- en kosteninformatie.</li><br/>
        <li><strong>Instellingen</strong> opent het instellingenvenster.</li><br/>
        <li><strong>Geschiedenis</strong> toont de gebruiksgegevens met de invoer- en uitvoertekst.</li><br/>
        <li><strong>Gebruiker</strong> toont de gebruikersnaam van de ingelogde gebruiker (alleen op het web).</li>
      </ul>

</td>
  </tr>
</table>

<br/>

<a id="toolbar"></a>

### Werkbalk

De werkbalk verandert iets, afhankelijk van waar je in de app bent.

- Links wordt de naam van de huidige pagina weergegeven.
- Rechts zie je de **modelselector** en de instelling voor de **interface-taal**.

Met de **modelselector** kun je kiezen welke AI-engine je wilt gebruiken voor de huidige taak.

  ![Model selector](../images/screenshots/nl/model-selector.png)

Sommige gratis modellen zijn niet altijd beschikbaar — af en toe zijn ze offline of hebben ze een gebruikslimiet. Als dit gebeurt, verwijdert de app dat model automatisch uit je beschikbare lijst. Om te bepalen welke modellen worden weergegeven, ga je naar [**Instellingen** > **Modellen**](#models) en bewerk je je modellenlijst.  
Je kunt de modelinstellingen ook direct openen door op het leverancierspictogram links van de modelnaam in de werkbalk te klikken.

<br/>

Met het **globepictogram + taalcode** kun je de taal van de app-interface veranderen, zoals menu's en knoppen. Dit verandert **niet** de vertaaltalen die worden gebruikt in **Vertalen**.

![Selectie taalinterface](../images/screenshots/nl/language-selector.png)

<br/>

<a id="input-and-output-panels"></a>

### Invoer- en uitvoerpanelen

De meeste werkruimten gebruiken een linker **Invoer**-paneel en een rechter **Uitvoer**-paneel.

Elk paneel toont ook:

| **Invoer**                                                       | **Uitvoer**                                                                                                                 |
|------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------|
| - Aantal tekens <br/>- Aantal woorden <br/>- Aantal alinea's <br/> | - Hoe lang de taak duurde<br/>- **TPS** (tokens per seconde)<br/>- Aantallen tekens, woorden en alinea's<br/>- Het gebruikte model |

Als je je afvraagt wat de technische termen betekenen:

- **Token** betekent een klein stukje tekst. Je kunt het zien als een deel van een woord of een kort woord.
- **TPS** betekent hoeveel van die stukjes tekst het model per seconde verwerkt.

<br/>

Je kunt ook de kosten per actie (indien beschikbaar) en de totale kosten volgen, door de optie `Kosteninformatie weergeven bij acties` in te schakelen onder [**Instellingen** > **Algemene instellingen**](#general-settings).

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="translate"></a>

## Vertalen

Gebruik **Vertalen** wanneer u tekst van de ene taal naar de andere wilt omzetten.

![Vertaalwerkruimte](../images/screenshots/nl/translate.png)

<br/>

<a id="translate-text"></a>

### Tekst vertalen

1. Open **Vertalen**.
2. Kies een taal bij **Van**.
3. Kies een taal bij **Naar**.
4. Kies een model in de werkbalk.
5. Typ tekst of plak deze in **Invoer**.
6. Klik op **Vertalen**.
7. Lees het resultaat in **Uitvoer**.
8. Gebruik de kopiëerknop als je het resultaat wilt kopiëren.

<br/>

<a id="language-selection"></a>

### Taalkeuze

- **Van** kan een specifieke taal zijn of **Taal detecteren**.
- **Naar** is de taal waarin u het resultaat wilt hebben.

Uw geselecteerde **belangrijkste talen** verschijnen bovenaan de lijst. U kunt deze instellen in [**Instellingen** > **Talen**](#languages).

<br/>

<a id="helpful-translation-settings"></a>

### Handige vertaalaanpassingen

In [**Instellingen** > **Algemene instellingen**](#general-settings) kunt u aanpassen hoe de vertaling werkt:

- **Automatisch vertalen bij plakken** voert een vertaling uit zodra u tekst plakt.
- **Resultaat automatisch kopiëren naar klembord** kopieert het resultaat automatisch naar het klembord na een succesvolle vertaling.
- **Vertalen in real-time (tijdens het typen)** voert vertalingen uit terwijl u typt.
- **Time-out (ms)** bepaalt hoe lang de app wacht voordat een vertaling in real-time wordt gestart.
- **Enter** bepaalt wat er gebeurt wanneer u op `Enter` drukt:

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="rewrite"></a>

## Herschrijven

Gebruik **Herschrijven** wanneer je de formulering wilt verbeteren zonder de hoofdbetekenis te veranderen.

![Herschrijven-werkruimte](../images/screenshots/nl/rewrite.png)

Dit is handig voor:

- spelling- en grammaticafouten verbeteren (**Controleer spelling en grammatica**)
- tekst duidelijker maken (**Verbeter duidelijkheid**)
- meerdere verschillende herformuleringen in één keer genereren (**Alternatieve versies**)
- tekst formeler of informeler maken (**Formeel** / **Informeel**)
- tekst inkorten of uitbreiden (**Inkorten** / **Uitbreiden**)
- tekst technischer laten klinken (**Meer technisch maken**)

<br/>

> 💡 **TIP**<br/>
> Wanneer je de modus "**Controleer spelling en grammatica**" gebruikt, verschijnt er een schakelaar **Wijzigingen weergeven** in het uitvoervenster (naast **Kopiëren**).
> Schakel deze aan of uit om de specifieke correcties in je tekst wel of niet te zien.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="transform"></a>

## Transformeren

Gebruik **Transformeren** wanneer u dat de AI een specifieke set instructies moet volgen.

![Transformeer-werkruimte](../images/screenshots/nl/transform.png)

Dit is het meest flexibele deel van de app. U kunt het gebruiken voor taken zoals:

- notities samenvatten
- ruwe tekst omzetten in een gepolijste e-mail
- belangrijke punten extraheren
- tekst converteren naar een specifiek formaat
- elke andere aangepaste tekstverwerking

<br/>

<a id="run-an-existing-prompt"></a>

### Een bestaande prompt uitvoeren

1. Open **Transform**.
2. Kies een prompt uit de promptlijst.
3. Als er een vak **Doeltaal** verschijnt, kies dan eventueel een taal.
4. Typ tekst of plak deze in het vak **Invoer**.
5. Klik op **Transform**.
6. Lees het resultaat in het vak **Uitvoer**.

<br/>

<a id="if-you-have-no-prompts-yet"></a>

### Als u nog geen prompts heeft

Als uw promptlijst leeg is, klikt u op **Laad voorbeeldprompts** in de Transform-werkruimte. Dezelfde optie is altijd beschikbaar in [**Instellingen** > **Transform Prompts**](#transform-prompts) op de export/import-regel. Beide voegen ingebouwde voorbeelden toe, zodat u snel kunt beginnen.

<br/>

> ℹ️ **OPMERKING**<br/>
> Voorbeeldprompts worden in het Engels geleverd. Nadat u ze hebt geladen, kunt u een prompt bewerken en **Prompt vertalen** gebruiken om deze naar uw eigen taal te vertalen.

<br/>

<a id="create-a-prompt-quickly"></a>

### Maak snel een prompt aan

De snelste manier om een prompt aan te maken is:

1. Klik op **Nieuwe prompt**.
2. Klik op **Genereer prompt**.
3. Beschrijf wat u wilt dat de prompt doet.
4. Kies een model.
5. Laat de app een concept voor u maken.
6. Controleer het concept en klik op **Opslaan**.

![Prompt genereren](../images/screenshots/nl/transform-generate.png)


<br/>

<a id="edit-a-prompt"></a>

### Een prompt bewerken

Wanneer u een prompt aanmaakt of bewerkt, verschijnt de editor aan de linkerkant en een testgebied aan de rechterkant.

![Transform prompt-editor](../images/screenshots/nl/transform-prompt-edit.png)

De belangrijkste velden zijn:

- **Promptnaam**: de naam die wordt weergegeven in de lijst met prompts.
- **Promptinstructies (optioneel)**: een korte hint die aan de gebruiker wordt getoond wanneer de prompt wordt uitgevoerd.
- **Modelrol**: de algemene rol die aan de AI wordt toegekend, zoals 'Je bent een behulpzame assistent.'
- **Modelinstructies (één per regel)**: de specifieke regels die de AI moet volgen.
- **Beschrijving van uitvoer**: een kort woord dat het resultaat omschrijft, zoals 'samenvatting' of 'herformulering'.
- **Temperatuur (0,0 → 1,0)**: het gedrag van het model; zie hieronder.
- **Vragen om doeltaal**: voegt een keuzemenu voor de doeltaal toe wanneer de prompt wordt uitgevoerd.

Als de technische term **Temperatuur** nieuw voor u is, kunt u het als volgt bekijken:

- Een **lagere** temperatuur levert stabielere, voorspelbaarere resultaten op.

- Een **hoge** temperatuur zorgt voor meer variatie en creativiteit.

U kunt ook:

- **`Prompt genereren`** gebruiken om een nieuwe versie te maken op basis van een eenvoudige beschrijving
- **`Prompt verbeteren`** gebruiken om een bestaande prompt te verfijnen
- **`Prompt vertalen`** gebruiken om de velden van de prompt te vertalen

<br/>

> ⚠️ **WAARSCHUWING**<br/>
> Klik op **`Opslaan`** voordat u op **`Terug naar Uitvoeren`** klikt. Als u terugkeert zonder op te slaan, gaan uw wijzigingen verloren.

<br/>

<a id="test-a-prompt-before-using-it"></a>

### Een prompt testen voordat u deze gebruikt

Het testpaneel aan de rechterkant stelt u in staat om uw prompt uit te proberen met voorbeeldtekst voordat u deze gebruikt in uw dagelijkse werkzaamheden.

Dit is handig wanneer:

- u een nieuwe prompt aan het maken bent
- u twee versies van een prompt met elkaar vergeleken
- u de toon, lengte of uitvoerformaat wilt controleren

<br/>

> ℹ️ **OPMERKING**<br/>
> U kunt opgeslagen prompts exporteren en importeren in [**Instellingen** > **Transform Prompts**](#transform-prompts).

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="dashboard"></a>

## Dashboard

Gebruik **Dashboard** om te zien hoeveel u de app gebruikt en wat dit kost (voor betaalde modellen).

![Overzicht dashboard](../images/screenshots/nl/dashboard-summary.png)


<br/>

> ℹ️ **OPMERKING**<br/>
> Als u alleen **gratis** modellen gebruikt, kunnen de **kosten** nul zijn en kunnen kostengerichte overzichten leeg lijken. Op het tabblad **Overzicht**, **Gebruik over tijd** en **Gebruik per model** worden nog steeds het **aantal aanroepen** (vertalen, herschrijven en transformeren) weergegeven wanneer er activiteit is geweest in de geselecteerde periode.

<br/>

<a id="filter-the-data"></a>

### Filter de gegevens

Gebruik de filterknoppen bovenaan om het tijdsbereik te wijzigen.

![Dashboardfilters](../images/screenshots/nl/dashboard-filter.png)

<br/>

> ℹ️ **OPMERKING**<br/>
> Het filter **Gebruiker** is alleen zichtbaar voor beheerders in de webversie. Gewone gebruikers zien dit filter niet, en het is niet beschikbaar in de desktopapp.

<br/>

<a id="dashboard-tabs"></a>

### Dashboard-tabbladen

- **Samenvatting** geeft een overzicht van gebruik en kosten. Dit omvat een **Gebruik per periode** (gestapelde cumulatieve **aantallen oproepen** per dag voor vertalen, herschrijven en transformeren) en **Gebruik per model** (totaal **aantal oproepen per model**, inclusief transformeren).
- **Per gebruik** verdeelt de activiteit per vertaaltaal, herschrijfmodus en transformeerprompt.
- **Per model** toont welke modellen u hebt gebruikt en hoeveel ze gekost hebben.
- **Per dag** toont de dagelijkse totalen.
- **Alle oproepen** toont de volledige oproepgeschiedenis en stelt u in staat deze te exporteren.

<br/>

<a id="export-data"></a>

### Gegevens exporteren

De dashboordtabellen kunnen gegevens exporteren in:

- **JSON**
- **CSV**
- **XLSX**

Dit is handig als je activiteiten buiten de app om wilt bekijken of een rapport wilt delen.

<br/>

<a id="delete-stored-records-for-a-model"></a>

### Opgeslagen records voor een model verwijderen

In **Per Model** of **Alle Oproepen** kun je opgeslagen records voor een model verwijderen door op het "prullenbak"-pictogram te klikken.

> ⚠️ **WAARSCHUWING**<br/>
> Het verwijderen van opgeslagen records kan niet ongedaan worden gemaakt. Gebruik dit alleen als je zeker weet dat je die geschiedenis niet meer nodig hebt.

Om alle gegevens te verwijderen of records te wissen op basis van hun leeftijd, ga je naar [**Instellingen** > **Kostenbijhouding**](#cost-tracking). Daar vind je opties om alle opgeslagen gegevens te verwijderen of alleen gegevens die ouder zijn dan een bepaalde datum.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="history"></a>

## Geschiedenis

Klik op **Geschiedenis** om de geschiedenis van uw acties binnen **Transrewrt** te bekijken, inclusief de invoer en uitvoer van elke bewerking.

![Geschiedenis pagina](../images/screenshots/nl/history.png)

<br/>

<a id="filter-the-history"></a>

### Filter de gegevens

**Geschiedenis** gebruikt dezelfde filters als de pagina **Dashboard**. Gebruik deze om het tijdsbereik te selecteren.

![Dashboardfilters](../images/screenshots/nl/dashboard-filter.png)

<br/>

> ℹ️ **OPMERKING**<br/>
> Het filter **Gebruiker** is alleen zichtbaar voor beheerders in de webversie. Gewone gebruikers zien dit filter niet, en het is niet beschikbaar in de desktopapp.

<br/>

<a id="export-history-data"></a>

### Geschiedenisgegevens exporteren

Op de geschiedenispagina kunnen de gefilterde gegevens worden geëxporteerd in:

- **JSON**
- **CSV**
- **XLSX**

Dit is handig als je activiteiten buiten de app wilt bekijken of een rapport wilt delen.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="settings"></a>

## Instellingen

Open **Instellingen** in de zijbalk om aan te passen hoe de app zich gedraagt.

De beschikbare tabbladen zijn afhankelijk van het platform en jouw rol:

| Tab               | Desktop | Web (beheerder) | Web (reguliere gebruiker) |
|-------------------|:-------:|:---------------:|:------------------------:|
| Algemene instellingen |   ja   |       ja       |           ja            |
| Modellen            |   ja   |       ja       |           ja            |
| Talen               |   ja   |       ja       |           ja            |
| Kostenbijhouding    |   ja   |       ja       |            —            |
| Transform Prompts   |   ja   |       ja       |           ja            |
| Gebruikers          |    —    |       ja       |            —            |
| API-configuratie    |   ja   |       ja       |            —            |
| Over                |   ja   |       ja       |           ja            |

<br/>

> ℹ️ **OPMERKING**<br/>
> In de webversie heeft elke gebruiker zijn eigen configuratie. Instellingen zoals geselecteerde modellen, talen, algemene opties en transform-prompten worden per gebruiker opgeslagen. Wijzigingen die u aanbrengt, hebben geen invloed op andere gebruikers.

<br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="general-settings"></a>

### Algemene instellingen

Gebruik **Algemene instellingen** om het typgedrag te beheren, of uitvoeringsgegevens worden opgeslagen voor **Geschiedenis**, en het uiterlijk aan te passen.

**Gedrag**

- **Gedrag voor ENTER** bepaalt of `Enter` de taak uitvoert of een nieuwe regel invoegt.
- **Automatisch vertalen bij plakken** start de vertaling zodra u tekst plakt.
- **Resultaat automatisch kopiëren naar klembord** kopieert succesvolle resultaten automatisch.
- **Realtime vertaling (tijdens het typen)** vertaalt terwijl u typt.
- **Timeout (ms)** stelt de wachttijd in voor realtime vertaling.

**Geschiedenis**

- **Uitvoeringsgeschiedenis bijhouden** bepaalt of elke vertaling, herschrijving en transformatie de **invoer- en uitvoertekst** opslaat voor de zijbalkweergave [**Geschiedenis**](#history). Uitschakelen vraagt om bevestiging; bij bevestiging wordt de opgeslagen geschiedenistekst verwijderd uit de database.

- **Geschiedenisgegevens verwijderen** stelt u in staat opgeslagen tekst te verwijderen op basis van leeftijd (bijvoorbeeld ouder dan een paar maanden, of **alle gegevens (leegmaken)**) met behulp van **Gegevens verwijderen**. Dit heeft alleen invloed op opgeslagen uitvoeringstekst voor de weergave **Geschiedenis**; dit verwijdert **niet** de kosten- of gebruikstotalen. Om **kosten**gegevens te verwijderen of te beperken, gebruikt u [**Instellingen** > **Kostenbewaking**](#cost-tracking).

**Weergave**

- **Kosteninformatie weergeven in de acties** bepaalt of de kosten per bewerking (indien beschikbaar) en de totale kosten zichtbaar zijn in de uitvoervelden van Vertalen, Herschrijven en Transformeren.
- **Aantal decimalen voor kosten** wijzigt hoe decimale kosten worden weergegeven.
- **Alleen web:** **marge rond de app weergeven** voegt extra ruimte toe rond de interface.
- **Lettertype** wijzigt het schrifttype in de tekstvakken.
- **Grootte** wijzigt de lettergrootte.

**Configuratieback-up**

- **Gebruiksgegevens meenemen in de back-up** — wanneer ingeschakeld, bevat het ZIP-bestand ook uitvoeringsgeschiedenis en API-aanroepgegevens.

- **Back-upconfiguratie** — maakt standaard één ZIP-bestand aan (`transrewrt-config-backup-YYYY-MM-DD_HHMMSS.zip` in UTC) met daarin `config.json`, `state.json`, optionele versleutelingssleutel, gebruikers, voorkeuren, aangepaste prompts en gebruikgegevens (indien u hiervoor gekozen hebt). Na een succesvolle back-up wordt de naam van het opgeslagen bestand weergegeven.
- **Herstellen vanuit back-up** — opent eerst een **bevestigingsvenster**. Kies daarin het back-up-ZIP-bestand (**Bladeren**/bestandskiezer of slepen en neerzetten, waar ondersteund), en controleer vervolgens de opties:
  - **Gebruiksgegevens herstellen** — importeer gebruik/geschiedenis uit de ZIP wanneer deze is geback-upt met gebruiksinclusief; laat uitgeschakeld als u alleen instellingen en prompts wilt herstellen.
  - **Oude gebruikgegevens wissen voordat u herstelt** — verwijder bestaande gebruik/geschiedenis in deze installatie voor het toepassen van de back-up (optioneel; gebruik dit als u een schone vervanging wilt).

Back-ups die zijn gemaakt in de web- of desktopversie kunnen in de andere versie worden hersteld. Bij het herstellen van een desktop-back-up in de webversie, worden de gegevens hersteld naar de beheerdersgebruiker.


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
- **Aanbieder**-chipkaarten om de lijst te beperken tot één engine (OpenRouter, OpenAI, Ollama, …)
- **Alleen gratis** om alleen gratis modellen te tonen
- **Vernieuwen** om de lijst opnieuw te laden
- **Alles uitvouwen** en **Alles inklappen** wanneer u sorteert op aanbieder

Model-id's bevatten het voorvoegsel van de aanbieder (bijvoorbeeld `openrouter/…` in plaats van `openai/…`). Badge's zoals **OpenAI (OpenRouter)** versus **OpenAI (direct)** geven aan hoe het verkeer wordt doorgestuurd.

> ℹ️ **OPMERKING**<br/>

> **OpenRouter Body Builder** (`openrouter/bodybuilder`) is een routermodel, geen algemeen chatmodel: het antwoord is JSON dat OpenRouter API-aanvraagbodies beschrijft (bijvoorbeeld een `requests`-array met `model` en `messages`). Als u het gebruikt voor **Vertalen**, **Herschrijven** of **Transformeren**, toont het uitvoervenster die JSON in plaats van de voltooide tekst. Kies een normaal tekstmodel voor deze taken. Zie de [pagina van het Body Builder-model](https://openrouter.ai/openrouter/bodybuilder) op OpenRouter.

Acties:

- Om een model toe te voegen, klikt u op **Toevoegen** of ergens in de invoer.

- Om een model te verwijderen, klikt u op het **X**-icoon ernaast in **Geselecteerde modellen** of op het **X** bij de invoer in Beschikbare modellen.

- Om de lijst te wissen, klikt u op **Alles deselecteren**. Het vereiste gratis model blijft in de lijst staan.

<br/>

> ℹ️ **OPMERKING**<br/>

> Als je OpenRouter niet direct wilt betalen, begin dan met het inschakelen van **Alleen gratis** en kies de gratis modellen (geen creditcard vereist). Je kunt ook Ollama gebruiken om modellen lokaal uit te voeren zonder API-sleutel.

<br/>

<a id="languages"></a>

### Talen

Gebruik **Instellingen** > **Talen** om de talenlijsten in de app te beheren.

- **Belangrijkste talen** worden vastgemaakt bovenaan de talenlijsten in **Vertalen** en **Omwandelen**.
- **Aangepaste taal** stelt u in staat een taal toe te voegen die niet in de ingebouwde lijst staat.

Als u een aangepaste taal toevoegt, verschijnt deze in de taalkeuzemenu's naast de ingebouwde opties.

<br/>

<a id="cost-tracking"></a>

### Kostenbijhouden

Gebruik **Instellingen** > **Kostenbijhouden** om kosteninformatie te beheren.

- **Totale kosten** geeft het lopende totaal weer.
- **Waarde kopiëren** kopieert het totaal naar het klembord.
- **Kosten resetten** zet het opgeslagen totaal terug naar nul.
- **Synchroniseren met API-sleutelgebruik** stelt het totaal in op de gebruikshoeveelheid zoals gerapporteerd door uw OpenRouter-account (alleen bij OpenRouter).
- **API-sleutelgebruik** toont OpenRouter-gebruiksgegevens, indien beschikbaar.
- **Kostengegevens verwijderen** verwijdert alle gegevens, of alleen invoeren die ouder zijn dan een geselecteerde datum.

**Kostenbijhouden:** Wanneer u OpenRouter-modellen gebruikt, toont de app uw daadwerkelijke gebruik en uitgaven op basis van kosteninformatie van OpenRouter. Voor alle andere providers schat de app de kosten aan de hand van prijzen die zijn gepubliceerd door OpenRouter. Als er geen prijs beschikbaar is, kan de schatting nul zijn.

<br/>

> ℹ️ **OPMERKING**<br/>
> **Alle kostenbedragen zijn schattingen ter informatie en geen officiële facturen.**

<br/>

> ⚠️ **WAARSCHUWING**<br/>

> Gegevensverwijdering kan niet ongedaan worden gemaakt. Zorg ervoor dat u een back-up maakt van uw gegevens of deze exporteert via [**Geschiedenis**](#history)  
> of [**Dashboard** > **Alle oproepen**](#dashboard-tabs), anders gaan ze permanent verloren.  
> De volledige invoer-/uitvoergeschiedenis gerelateerd aan elke API-aanroepvermelding wordt ook verwijderd.


<br/>

<a id="transform-prompts"></a>

### Vraagstukken transformeren

Gebruik **Instellingen** > **Transformeren van vraagstukken** om vraagstukken in bulk te beheren.

U kunt:

- uw opgeslagen vraagstukken bekijken
- vraagstukken verwijderen
- vraagstukken importeren uit een bestand
- vraagstukken exporteren voor back-up of delen
- voorbeeldvraagstukken laden in de lijst met vraagstukken

<br/>

<a id="users"></a>

### Gebruikers

Gebruik **Gebruikers** om gebruikersaccounts te beheren in de webversie. Je kunt gebruikers toevoegen, hun gegevens bijwerken, wachtwoorden opnieuw instellen en accounts verwijderen.

<br/>

<a id="api-config"></a>

### API-configuratie

De ondersteunde providers zijn: OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras, en **Ollama** (lokale modellen via een basis-URL). U hoeft alleen de providers te configureren die u gebruikt.

**Webapplicatie: alleen beheerder**

API-sleutels worden ingesteld via systeem- of Docker-omgevingsvariabelen — ze worden niet ingevoerd in de webinterface. Op deze pagina ziet u welke providers een sleutel geconfigureerd hebben en kunt u elke provider testen door op de knop **`Test`** te klikken.

<br/>

> ℹ️ **OPMERKING**<br/>
> Om een API-sleutel te wijzigen, moet u de omgevingsvariabele bijwerken in uw systeem- of Docker-configuratie en de server of container opnieuw opstarten.

> ℹ️ **OPMERKING**<br/>

> **Configuratieback-ups** (zie [**Algemene instellingen** → Configuratieback-up](#general-settings)) kunnen **opgeloste** provider-sleutels insluiten in het `config.json`-bestand binnen de ZIP. Het herstellen van die ZIP kopieert deze sleutels **niet** terug naar het persistente configuratiebestand van de server — actieve sleutels worden nog steeds opgehaald uit de omgeving en het bestaande bestand, zoals daar beschreven.

<br/>

**Bureaubladapplicatie**

Gebruik **API-configuratie** om API-sleutels op te slaan voor elke provider die u gebruikt. Voor Ollama voert u in plaats van een API-sleutel de **basis-URL** in.

<br/>

> 💡 **Tip** <br/>
> Als u geen API-sleutel wilt gebruiken of voor gebruik wilt betalen, kunt u [Ollama downloaden](https://ollama.com) en gratis modellen (zoals `translategemma:4b`) lokaal op uw machine uitvoeren. U kunt ook een gratis OpenRouter-account aanmaken (geen creditcard vereist) om gebruik te maken van hun gratis modellen, of een gratis API-sleutel verkrijgen van Cerebras, Google, Groq of Mistral AI.

<br/>

- Voeg alleen de providers toe die je nodig hebt. In **Instellingen** > **Modellen** begint elk model-id met de provider (bijvoorbeeld `openrouter/openrouter/free`, `openai/gpt-4o`, `ollama/llama3`).

Om een API-sleutel toe te voegen, voer je de waarde in het tekstveld in en klik je op **`Opslaan`**. Om een bestaande sleutel te vervangen, klik je op **`Bewerken`**. Om te controleren of een sleutel werkt, klik je op **`Testen`**. Bij de Ollama-basis-URL klik je altijd op **`Testen`** om de verbinding te controleren.

<br/>

> ℹ️ **OPMERKING**<br/>
> Je kunt de huidige waarde van een API-sleutel niet bekijken. Je kunt deze alleen vervangen via de knop **`Bewerken`**.
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

Controleer of:

- u een model hebt geselecteerd in de werkbalk
- er minstens één model is opgenomen in [**Instellingen** > **Modellen**](#models)
- uw API-instelling goed werkt

Als u de desktopapp gebruikt:

1. Open [**Instellingen** > **API-configuratie**](#api-config).
2. Controleer of er minstens één API-sleutel is opgeslagen.
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

Probeer een of meer van de volgende stappen:

- kies een ander model
- gebruik een kortere invoer
- schakel **Echt tijdens het typen vertalen** uit in [**Instellingen** > **Algemene instellingen**](#general-settings)
- gebruik gratis modellen voor eenvoudige taken (zie [Modellen](#models))

<br/>

<a id="the-interface-is-in-the-wrong-language"></a>

### De interface is in de verkeerde taal

Klik op het wereldbol-icoon in de [werkbalk](#toolbar) en kies uw gewenste **interfacerichttaal**.

<br/>

<a id="the-text-is-too-small-or-hard-to-read"></a>

### De tekst is te klein of moeilijk te lezen

Open [**Instellingen** > **Algemene instellingen**](#general-settings) en wijzig:

- **Lettertype**
- **Grootte**

<br/>

<a id="dashboard-charts-are-empty"></a>

### Dashboardgrafieken zijn leeg

Dit is normaal als:

- je alleen **gratis modellen** gebruikt en je bekijkt **kosten** (deze kunnen nul zijn); grafieken met het aantal aanroepen onder **Overzicht** hebben nog gegevens nodig uit de geselecteerde periode
- het geselecteerde **tijdfilter** niet overeenkomt met de periode waarin aanroepen zijn gedaan — probeer **Alles** om dit te controleren

Als de grafieken nog steeds leeg zijn nadat je **Alles** hebt geselecteerd, controleer dan of aanroepen weergegeven worden in [**Geschiedenis**](#history) of in het tabblad **Alle aanroepen**.

<br/>

<a id="cost-shows-not-available-or-seems-wrong"></a>

### Kosten worden weergegeven als "niet beschikbaar" of lijken onjuist

Wanneer je modellen gebruikt via **OpenRouter**, toont de app je werkelijke uitgaven zoals gerapporteerd door OpenRouter.

Voor **andere providers** (rechtstreeks OpenAI, rechtstreeks Anthropic, enz.) worden de kosten geschat op basis van prijsgegevens die gepubliceerd worden door OpenRouter. Als er geen overeenkomstige prijs voor een model wordt gevonden, worden de kosten weergegeven als **niet beschikbaar** en worden ze niet toegevoegd aan je lopende totaal.

<br/>

<a id="total-cost-does-not-match-my-provider-bill"></a>

### Totale kosten komen niet overeen met mijn providerfactuur

Alle kostenbedragen in de app zijn **schattingen ter informatie** en geen officiële facturatiestatement.

Om het totaal dichter bij je werkelijke OpenRouter-uitgaven te brengen, open je [**Instellingen** > **Kostenbijhouding**](#cost-tracking) en klik je op **Synchroniseren met API-sleutelgebruik**.

<br/>

<a id="the-history-page-is-missing-from-the-sidebar"></a>

### De geschiedenispagina ontbreekt in de zijbalk

**Uitvoeringsgeschiedenis behouden** is mogelijk uitgeschakeld. Open [**Instellingen** > **Algemene instellingen**](#general-settings) en schakel deze optie in. Let op: het inschakelen herstelt niet eerder verwijderde geschiedenisdata.

<br/>

<a id="web-app-session-expired"></a>

### Webapp: onverwacht doorgestuurd naar de aanmeldpagina

Uw sessie is mogelijk verlopen. Meld u opnieuw aan. Als dit regelmatig gebeurt, controleer dan de serverconfiguratie voor de instellingen van de sessielevensduur.

<br/>

<a id="web-admin-forgot-or-lost-a-password"></a>

### Webbeheer: wachtwoord vergeten of kwijt

Dit geldt voor de **zelfgehoste webapplicatie** (Docker), niet voor de desktopapp (Electron).

- Als een andere beheerder nog steeds kan inloggen, kan deze naar [**Instellingen** > **Gebruikers**](#users) gaan, het account kiezen en daar een **nieuw wachtwoord** instellen.
- Als u bent **uitgesloten** maar **shelltoegang** heeft tot de machine of container, kunt u het wachtwoord opnieuw instellen met de hiertoe meegeleverde hulpprogramma die is opgenomen in de image (vervang `transrewrt` als u de standaardnaam hebt gewijzigd, en plaats het wachtwoord tussen aanhalingstekens als deze spaties of speciale tekens bevat):

```bash
docker exec transrewrt reset-web-password '<gebruikersnaam>' '<nieuw-wachtwoord>'
```

De standaard beheerdersnaam is `admin` als u nog geen andere accounts heeft aangemaakt. Wanneer u slechts één argument opgeeft, wordt dit beschouwd als het nieuwe wachtwoord voor `admin`.

Als u uit een **broncode-exemplaar** draait in plaats van Docker, gebruik dan:

```bash
pnpm run reset-web-password -- <gebruikersnaam> <nieuw-wachtwoord>

Het script werkt het gebruikersrecord bij in de SQLite-database (en kan de `admin`-gebruiker aanmaken als deze ontbreekt). Meld u na het opnieuw instellen aan met het nieuwe wachtwoord.


<br/>

<a id="dashboard-shows-no-data-for-other-users"></a>

### Dashboard toont geen gegevens voor andere gebruikers (web)

Alleen **beheerders** kunnen gegevens van alle gebruikers bekijken via het **Gebruiker**-filter. Regelmatige gebruikers zien standaard alleen hun eigen activiteit.

<br/>

<a id="i-changed-a-prompt-and-lost-the-edits"></a>

### Ik heb een prompt aangepast en de bewerkingen zijn verloren gegaan

Wanneer u een prompt bewerkt, klikt u altijd op **Opslaan** voordat u op **Terug naar uitvoeren** klikt.

<br/><br/>

<a id="quick-tips"></a>

## Snelle tips

- Begin met [**Vertalen**](#translate) om ervoor te zorgen dat jouw installatie werkt, voordat je verder gaat naar [**Herschrijven**](#rewrite) of [**Transformeren**](#transform).
- Gebruik [**Herschrijven**](#rewrite) voor dagelijkse woordkeuzeverbeteringen.
- Gebruik [**Transformeren**](#transform) wanneer je een herhaalbaar proces nodig hebt voor een specifieke taak.
- Gebruik [**Dashboard**](#dashboard) als je gebruik en kosten in de gaten wilt houden.
- Gebruik [**Geschiedenis**](#history) om eerdere handelingen en hun volledige invoer- en uitvoertekst te bekijken.
- Exporteer regelmatig je prompts als je een promptbibliotheek aan het bouwen bent die je veilig wilt bewaren (zie [Transformeer prompts](#transform-prompts)) of als je deze met anderen wilt delen.

<br/><br/>

<a id="disclaimer"></a>

## Disclaimer

Productnamen en iconen zijn eigendom van hun respectieve eigenaren en worden uitsluitend voor identificatiedoeleinden gebruikt. Deze software is niet gelieerd aan of goedgekeurd door een van de genoemde merken.

<br/><br/>

<a id="license"></a>

## Licentie

Copyright © 2026 Waldemar Scudeller Jr.

[Apache Licentie 2.0](LICENSE)