---
translated_at: "2026-03-26T00:32:03.871Z"
source_hash: "87f5e7618cbfd3084efeecba28440ecccb03450da2ae8fe4c6f91c75cb7f4981"
source_mtime: 1774482557035.2158
model: "qwen/qwen3-235b-a22b-2507"
---
![Transrewrt-banderrol](../images/transrewrt_banner.png)

<a id="transrewrt-gebruikershandleiding"></a>
# Gebruikershandleiding

<br/>

<a id="inleiding"></a>
## Inleiding

Transrewrt helpt u op drie manieren bij het werken met tekst:

- **Vertalen** – tekst omzetten van de ene taal naar de andere.
- **Herschrijven** – tekst opnieuw formuleren in een andere stijl, bijvoorbeeld duidelijker, korter of formeler.
- **Transformeren** – tekst verwerken met gebruik van aangepaste AI-instructies, ook wel prompts genoemd.

<br/>

Deze handleiding legt uit hoe u de app kunt gebruiken nadat deze is geïnstalleerd en actief is. Voor installatiestappen zie het hoofddocument **[README](README.nl.md)**.

<br/>

> ℹ️ **OPMERKING**<br/>
> Transrewrt is verkrijgbaar als desktopapp voor Windows en Linux, en als zelfgehoste webapp. Deze handleiding richt zich op het dagelijks gebruik van de app. Als iets alleen op een bepaalde versie van toepassing is, wordt dit duidelijk aangegeven.

<small>**Lees in andere talen:**</small>
<small id="lang-list"> [English (UK)](../USER-GUIDE.md) · [Português (BR)](USER-GUIDE.pt-BR.md) · [العربية](USER-GUIDE.ar.md) · [বাংলা](USER-GUIDE.bn.md) · [Català](USER-GUIDE.ca.md) · [简体中文](USER-GUIDE.zh-CN.md) · [繁體中文](USER-GUIDE.zh-TW.md) · [Hrvatski](USER-GUIDE.hr.md) · [Čeština](USER-GUIDE.cs.md) · [Nederlands](USER-GUIDE.nl.md) · [English (US)](USER-GUIDE.en-US.md) · [Filipino](USER-GUIDE.tl.md) · [Français](USER-GUIDE.fr.md) · [Deutsch](USER-GUIDE.de.md) · [Ελληνικά](USER-GUIDE.el.md) · [हिन्दी](USER-GUIDE.hi.md) · [Magyar](USER-GUIDE.hu.md) · [Italiano](USER-GUIDE.it.md) · [日本語](USER-GUIDE.ja.md) · [Basa Jawa](USER-GUIDE.jv.md) · [한국어](USER-GUIDE.ko.md) · [Bahasa Melayu](USER-GUIDE.ms.md) · [فارسی](USER-GUIDE.fa.md) · [Polski](USER-GUIDE.pl.md) · [Português (PT)](USER-GUIDE.pt.md) · [ਪੰਜਾਬੀ](USER-GUIDE.pa.md) · [Română](USER-GUIDE.ro.md) · [Русский](USER-GUIDE.ru.md) · [Slovenčina](USER-GUIDE.sk.md) · [Español](USER-GUIDE.es.md) · [Kiswahili](USER-GUIDE.sw.md) · [Svenska](USER-GUIDE.sv.md) · [తెలుగు](USER-GUIDE.te.md) · [ภาษาไทย](USER-GUIDE.th.md) · [Türkçe](USER-GUIDE.tr.md) · [Українська](USER-GUIDE.uk.md) · [Tiếng Việt](USER-GUIDE.vi.md)</small>

<small>

> **Opmerking over vertalingen van de gebruikersinterface en documentatie:** Alle talen van de gebruikersinterface, behalve het oorspronkelijke Engels (UK), zijn vertaald met behulp van AI-modellen; de formuleringen kunnen onnauwkeurig zijn of fouten bevatten.

</small>

<br/>


<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Inhoudsopgave** 

- [Voordat u begint](#voordat-u-begint)
  - [Hoe een gratis OpenRouter API-sleutel verkrijgen (desktopapp)](#hoe-een-gratis-openrouter-api-sleutel-verkrijgen-desktopapp)
- [Aan de slag](#aan-de-slag)
- [Belangrijkste onderdelen van het venster](#belangrijkste-onderdelen-van-het-venster)
  - [Zijbalk](#zijbalk)
  - [Werkbalk](#werkbalk)
  - [Invoer- en uitvoerpanelen](#invoer-en-uitvoerpanelen)
- [Vertalen](#vertalen)
  - [Tekst vertalen](#tekst-vertalen)
  - [Taalkeuze](#taalkeuze)
  - [Handige vertaalaanpassingen](#handige-vertaalaanpassingen)
- [Herschrijven](#herschrijven)
- [Transformeren](#transformeren)
  - [Een bestaande prompt uitvoeren](#een-bestaande-prompt-uitvoeren)
  - [Als u nog geen prompts hebt](#als-u-nog-geen-prompts-hebt)
  - [Snel een prompt aanmaken](#snel-een-prompt-aanmaken)
  - [Een prompt bewerken](#een-prompt-bewerken)
  - [Een prompt testen voordat u deze gebruikt](#een-prompt-testen-voordat-u-deze-gebruikt)
- [Dashboard](#dashboard)
  - [De gegevens filteren](#de-gegevens-filteren)
  - [Dashboard-tabbladen](#dashboard-tabbladen)
  - [Gegevens exporteren](#gegevens-exporteren)
  - [Opgeslagen gegevens verwijderen voor een model](#opgeslagen-gegevens-verwijderen-voor-een-model)
- [Geschiedenis](#geschiedenis)
  - [De gegevens filteren](#de-gegevens-filteren-1)
  - [Geschiedenisgegevens exporteren](#geschiedenisgegevens-exporteren)
- [Instellingen](#instellingen)
  - [Algemene instellingen](#algemene-instellingen)
  - [Modellen](#modellen)
  - [Talen](#talen)
  - [Kosten bijhouden](#kosten-bijhouden)
  - [Transform-prompt](#transform-prompt)
  - [Gebruikers](#gebruikers)
  - [API-configuratie](#api-configuratie)
  - [Over](#over)
- [Veelvoorkomende problemen](#veelvoorkomende-problemen)
  - [De app vertaalt, herschrijft of transformeert geen tekst](#de-app-vertegenwoordigt-geen-tekst)
  - [De modellenlijst is leeg](#de-modellenlijst-is-leeg)
  - [Het resultaat is te traag of te duur](#het-resultaat-is-te-traag-of-te-duur)
  - [De interface is in de verkeerde taal](#de-interface-is-in-de-verkeerde-taal)
  - [De tekst is te klein of moeilijk te lezen](#de-tekst-is-te-klein-of-moeilijk-te-lezen)
  - [Dashboardgrafieken zijn leeg](#dashboardgrafieken-zijn-leeg)
  - [Kosten worden weergegeven als "niet beschikbaar" of lijken fout](#kosten-worden-weergegeven-als-niet-beschikbaar-of-lijken-fout)
  - [Totale kosten komen niet overeen met mijn leveranciersfactuur](#totale-kosten-komen-niet-overeen-met-mijn-leveranciersfactuur)
  - [De Geschiedenis-pagina ontbreekt in de zijbalk](#de-geschiedenis-pagina-ontbreekt-in-de-zijbalk)
  - [Webapp: onverwacht doorgestuurd naar loginpagina](#webapp-onverwacht-doorverwezen-naar-de-loginpagina)
  - [Dashboard toont geen gegevens voor andere gebruikers (web)](#dashboard-toont-geen-gegevens-voor-andere-gebruikers-web)
  - [Ik heb een prompt aangepast en de bewerkingen verloren](#ik-heb-een-prompt-aangepast-en-de-bewerkingen-verloren)
- [Snelle tips](#snelle-tips)
- [Disclaimer](#disclaimer)
- [Licentie](#licentie)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="voordat-u-begint"></a>

## Voordat u begint

Om Transrewrt te gebruiken, hebt u toegang nodig tot minstens één AI-aanbieder. De ondersteunde aanbieders zijn: [OpenRouter](https://openrouter.ai) (die veel modellen bundelt), OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras en [Ollama](https://ollama.com) voor lokale modellen.

U hoeft geen betaald model te kiezen om te beginnen. Zodra u uw OpenRouter API-sleutel toevoegt, schakelt de app automatisch een ingebouwde **gratis** OpenRouter-optie in. Hierdoor kunt u direct beginnen met het vertalen, herschrijven en transformeren van tekst. U kunt ook een gratis API-sleutel verkrijgen van Cerebras, Google, Groq of Mistral AI.

In eenvoudige bewoordingen:

- Een **model** is de AI-engine die het werk verricht. Modellen worden weergegeven met een **aangever-prefix** (bijvoorbeeld `openrouter/…`, `openai/…`, `ollama/…`).
- Een **API-sleutel** (of bij Ollama een **basis-URL**) is hoe de app verbinding maakt met die aanbieder.

Als u de **desktopapp** gebruikt, voegt u sleutels toe onder [**Instellingen** > **API-configuratie**](#api-config) voor elke aanbieder die u gebruikt. Voor exclusief gebruik van OpenRouter, zie hieronder [Hoe u een API-sleutel verkrijgt](#how-to-get-an-api-key-desktop-app). Als u geen API-sleutel wilt gebruiken, kunt u Ollama installeren (van [ollama.com](https://ollama.com)) en lokale modellen gebruiken, zoals `translategemma:4b`.

Als u de **webversie** gebruikt, configureert de serverbeheerder de aanbieders via omgevingsvariabelen. U kunt dan geen API-sleutels rechtstreeks in de applicatie invoeren.

<br/>

<a id="how-to-get-an-api-key-desktop-app"></a>
### Een gratis OpenRouter API-sleutel verkrijgen (desktopapp)

Als u de desktopapp gebruikt, volgt u deze stappen:

1. Ga in uw webbrowser naar [OpenRouter](https://openrouter.ai).
2. Maak een account aan of meld u aan.
3. Ga naar de pagina [Sleutels](https://openrouter.ai/keys).
4. Klik op de knop om een nieuwe API-sleutel aan te maken.
5. Geef de sleutel een naam zodat u hem later kunt herkennen.
6. Kopieer de nieuwe API-sleutel.
7. Ga terug naar Transrewrt en open **Instellingen** > **API-configuratie**.
8. Plak de sleutel in het veld **OpenRouter API-sleutel** (onder **Instellingen** > **API-configuratie**).
9. Klik op **OpenRouter-sleutel testen** om te controleren of het werkt.

<br/><br/>

<a id="getting-started"></a>
## Aan de slag

Als dit de eerste keer is dat u Transrewrt gebruikt, volgt u deze volgorde:

1. Open de app.
2. Kies uw **interface-taal** bij het wereldbol-pictogram indien nodig.
3. Als u de **desktopapp** gebruikt, gaat u naar [**Instellingen** > **API-configuratie**](#api-config), voeg een API-sleutel toe voor minstens één aanbieder (bijvoorbeeld OpenRouter) en klik op **Testen** om te controleren of het werkt.
4. Ga naar [**Instellingen** > **Modellen**](#models) en voeg een of meer modellen toe aan **Geselecteerde modellen**.
5. Ga naar [**Instellingen** > **Talen**](#languages) en kies uw **Belangrijkste talen** als u wilt dat uw meest gebruikte talen bovenaan verschijnen.
6. Ga naar **Vertalen** en voer een eenvoudige vertaling uit om te controleren of alles werkt.
7. Zodra dat lukt, probeer **Herschrijven** en daarna **Transformeren**.

Deze volgorde is belangrijk. Zo voorkomt u het meest voorkomende probleem bij eerstegebruik: een taak proberen uit te voeren voordat de app een werkende API-verbinding heeft of een geselecteerd model.

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

Gebruik de zijbalk om door de app te navigeren. U kunt de zijbalk inklappen om meer ruimte te krijgen door op het icoon naast het app-logo te klikken.

<br/>

<table>
  <tr>
    <td valign="top">
       <img src="../images/screenshots/nl/sidebar.png" alt="Application Sidebar" style="max-width: 100%; border: 1px solid #ddd; border-radius: 4px;">
    </td>
    <td valign="top">
      <br/><br/>
      <ul>
        <li><strong>Vertalen</strong> opent de werkruimte voor vertalingen.</li><br/>
        <li><strong>Herschrijven</strong> opent de werkruimte voor herschrijvingen.</li><br/>
        <li><strong>Transformeren</strong> opent de werkruimte voor aangepaste prompts.</li><br/>
        <li><strong>Dashboard</strong> toont gebruiks- en kosteninformatie.</li><br/>
        <li><strong>Instellingen</strong> opent het instellingenpaneel.</li><br/>
        <li><strong>Geschiedenis</strong> toont de gebruiksgeschiedenis met de invoer- en uitvoertekst.</li><br/>
        <li><strong>Gebruiker</strong> toont de gebruikersnaam van de aangemelde gebruiker (alleen web).</li>
      </ul>
    </td>
  </tr>
</table>

<br/>

<a id="toolbar"></a>

### Werkbalk

De werkbalk verandert licht, afhankelijk van waar je in de app bent.

- Links wordt de naam van de huidige pagina weergegeven.
- Rechts zie je de **modelkeuze** en de bediening van de **interface taal**.

Met de **modelkeuze** kan je kiezen welke AI-engine je wilt gebruiken voor de huidige taak.

  ![Modelkeuze](../images/screenshots/nl/model-selector.png)

Sommige gratis modellen zijn mogelijk niet altijd beschikbaar — soms zijn ze offline of hebben ze een limiet aan gebruik. Als dit gebeurt, verwijdert de app het model automatisch uit je beschikbare lijst. Om te bepalen welke modellen zichtbaar zijn, ga je naar [**Instellingen** > **Modellen**](#models) en pas je je modellenlijst aan. 
Je kunt de modelinstellingen ook direct openen door op het providerpictogram links van de modelnaam in de werkbalk te klikken.

<br/>

Het **globepictogram + taalcode** verandert de taal van de app-interface, zoals menu’s en knoppen. Dit heeft **geen** invloed op de vertaaltalen die je gebruikt in **Vertalen**.

  ![Keuze van interface taal](../images/screenshots/nl/language-selector.png)

<br/>

<a id="input-and-output-panels"></a>
### Invoer- en uitvoerpanelen

De meeste werkruimten gebruiken een linker **Invoer**-paneel en een rechter **Uitvoer**-paneel.

Elk paneel toont tevens:

| **Invoer**                                                          | **Uitvoer**                                                                                                                  |
|---------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------|
| - Aantal tekens <br/>- Aantal woorden <br/>- Aantal alinea's   <br/> | - Hoe lang de taak duurde<br/>- **TPS** (tokens per seconde)<br/>- Aantal tekens, woorden en alinea’s<br/>- Het gebruikte model |


Als je je afvraagt wat de technische termen betekenen:

- **Token** betekent een klein stukje tekst. Denk hierbij aan een deel van een woord of een kort woord.
- **TPS** betekent hoeveel van die stukjes tekst het model per seconde verwerkt.

<br/>

Je kunt ook de kosten van elke actie (indien beschikbaar) en de totale kosten bijhouden door de optie `Kostgegevens weergeven bij acties` in te schakelen onder [**Instellingen** > **Algemene instellingen**](#general-settings). 

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="translate"></a>
## Vertalen

Gebruik **Vertalen** wanneer je tekst van de ene taal naar de andere wilt omzetten.

![Vertaalmodule](../images/screenshots/nl/translate.png)

<br/>

<a id="translate-text"></a>
### Tekst vertalen

1. Open **Vertalen**.
2. Kies een taal bij **Van**.
3. Kies een taal bij **Naar**.
4. Kies een model in de werkbalk.
5. Typ of plak tekst in het **Invoer**-vak.
6. Klik op **Vertalen**.
7. Lees het resultaat in **Uitvoer**.
8. Gebruik de kopieerknop als je het resultaat wilt kopiëren.

<br/>

<a id="language-selection"></a>
### Taalkeuze

- **Van** kan een specifieke taal zijn of **Taal detecteren**.
- **Naar** is de taal waarin je het resultaat wilt ontvangen.

Jouw geselecteerde **Boventalen** verschijnen bovenaan de lijst. Je kunt deze instellen onder [**Instellingen** > **Talen**](#languages).

<br/>

<a id="helpful-translation-settings"></a>
### Handige vertaalinstellingen

In [**Instellingen** > **Algemene instellingen**](#general-settings) kun je aanpassen hoe vertalen werkt:

- **Automatisch vertalen bij plakken** voert een vertaling direct uit zodra je tekst plakt.
- **Resultaat automatisch kopiëren naar klembord** kopieert het resultaat automatisch na een succesvolle actie.
- **Realtime-vertaling (tijdens het typen)** voert vertalingen uit terwijl je typt.
- **Time-out (ms)** regelt hoe lang de app wacht voor een realtime-vertaling begint.
- **Enter** bepaalt wat er gebeurt wanneer je op `Enter` drukt:

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="rewrite"></a>
## Herschrijven

Gebruik **Herschrijven** wanneer je de woordkeuze wilt verbeteren zonder de hoofdbetekenis te veranderen.

![Herschrijfmodule](../images/screenshots/nl/rewrite.png)

Dit is handig voor:

- spelling- en grammaticavergissingen herstellen
- tekst duidelijker maken
- tekst formeler of informeler maken
- tekst inkorten of uitbreiden
- tekst technischer laten klinken

<br/>

> 💡 **TIP**<br/>
> Wanneer je de modus "**Spelling en grammatica controleren**" gebruikt, verschijnt er een knop `Wijzigingen tonen` in het uitvoerpaneel.
> Klik op deze knop om de weergave van correcties in- of uit te schakelen, zodat je specifieke aanpassingen in je tekst kunt zien of verbergen.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="transform"></a>

## Transformeren

Gebruik **Transformeren** wanneer u wilt dat de AI een aangepaste reeks instructies volgt.

![Transformeerwerkruimte](../images/screenshots/nl/transform.png)

Dit is het meest flexibele deel van de app. U kunt het gebruiken voor taken zoals:

- notities samenvatten
- ruwe tekst omzetten in een verzorgde e-mail
- belangrijke punten extraheren
- tekst converteren naar een specifieke indeling
- elke andere aangepaste handeling met de invoertekst

<br/>

<a id="run-an-existing-prompt"></a>
### Een bestaande prompt uitvoeren

1. Open **Transformeren**.
2. Kies een prompt uit de promptlijst.
3. Als er een vak **Doeltaal** verschijnt, kies dan een taal indien gewenst.
4. Typ of plak tekst in **Invoer**.
5. Klik op **Transformeren**.
6. Lees het resultaat in **Uitvoer**.

<br/>

<a id="if-you-have-no-prompts-yet"></a>
### Als u nog geen prompts hebt

Als uw promptlijst leeg is, klikt u op **Voorbeeldprompts laden**. Hierdoor worden ingebouwde voorbeelden toegevoegd, zodat u snel aan de slag kunt.

<br/>

> ℹ️ **OPMERKING**<br/>
> Voorbeeldprompts worden in het Engels geleverd. Nadat u ze hebt geladen, kunt u een prompt bewerken en **Prompt vertalen** gebruiken om deze naar uw taal te vertalen.

<br/>

<a id="create-a-prompt-quickly"></a>
### Snel een prompt maken

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

Wanneer u een prompt aanmaakt of bewerkt, verschijnt de editor aan de linkerkant en een testgebied aan de rechterkant.

![Prompteditor transformeren](../images/screenshots/nl/transform-prompt-edit.png)

De belangrijkste velden zijn:

- **Promptnaam**: de naam die wordt weergegeven in de promptlijst.
- **Promptinstructies (optioneel)**: een korte hint die wordt getoond aan de gebruiker bij het uitvoeren van de prompt.
- **Modelrol**: de algemene rol die aan de AI wordt toegekend, zoals 'Je bent een behulpzame assistent.'
- **Modelinstructies (één per regel)**: de specifieke regels die de AI moet volgen.
- **Beschrijving van uitvoer**: een kort woord dat het resultaat beschrijft, zoals 'samenvatting' of 'herformulering'.
- **Temperatuur (0,0 → 1,0)**: het gedrag van het model; zie hieronder.
- **Vraag om doeltaal**: voegt een keuzemenu voor doeltaal toe wanneer de prompt wordt uitgevoerd.

Als de technische term **Temperatuур** nieuw voor u is, denk er dan als volgt over:

- Een **lagere** temperatuur levert stabielere, voorspelbaardere resultaten op.
- Een **hogere** temperatuur levert meer variatie en creativiteit op.

U kunt ook gebruikmaken van:

- **`Prompt genereren`** om een nieuw concept te maken op basis van een eenvoudige beschrijving
- **`Prompt verbeteren`** om een bestaande prompt te verfijnen
- **`Prompt vertalen`** om de velden van de prompt te vertalen

<br/>

> ⚠️ **WAARSCHUWING**<br/>
> Klik op **`Opslaan`** voordat u op **`Terug naar uitvoeren`** klikt. Als u terugkeert zonder op te slaan, gaan uw wijzigingen verloren.

<br/>

<a id="test-a-prompt-before-using-it"></a>
### Een prompt testen voordat u deze gebruikt

Het testvenster aan de rechterkant stelt u in staat om uw prompt te testen met voorbeeldtekst voordat u deze in uw dagelijkse werk gebruikt.

Dit is handig als:

- u een nieuwe prompt aan het maken bent
- u twee versies van een prompt wilt vergelijken
- u de toon, lengte of uitvoerindeling wilt controleren

<br/>

> ℹ️ **OPMERKING**<br/>
> U kunt opgeslagen prompts exporteren en importeren in [**Instellingen** > **Transformerprompts**](#transform-prompts).

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="dashboard"></a>
## Dashboard

Gebruik **Dashboard** om te controleren hoeveel u de app gebruikt en wat dat kost (voor betaalde modellen).

![Overzicht dashboard](../images/screenshots/nl/dashboard-summary.png)


<br/>

> ℹ️ **OPMERKING**<br/>
> Als u alleen gratis modellen gebruikt, zullen de kostengrafieken leeg zijn.

<br/>

<a id="filter-the-data"></a>
### De gegevens filteren

Gebruik de filterknoppen bovenaan om het tijdsbereik te wijzigen.

![Dashboardfilters](../images/screenshots/nl/dashboard-filter.png)

<br/>

> ℹ️ **OPMERKING**<br/>
> De **Gebruiker**-filter is alleen zichtbaar voor beheerders in de webversie. Gewone gebruikers zien dit filter niet en is niet beschikbaar in de desktopapp.

<br/>

<a id="dashboard-tabs"></a>

### Dashboard-tabbladen

- **Samenvatting** geeft u een overzicht van het gebruik en de kosten.
- **Per gebruik** verdeelt activiteiten per vertaaltaal, herschrijfmodus en transformatieprompt.
- **Per model** toont welke modellen u hebt gebruikt en hoeveel ze hebben gekost.
- **Per dag** toont dagelijkse totalen.
- **Alle aanroepen** toont de volledige aanroepgeschiedenis en stelt u in staat deze te exporteren.

<br/>

<a id="export-data"></a>
### Gegevens exporteren

De dashboardtabellen kunnen gegevens exporteren in:

- **JSON**
- **CSV**
- **XLSX**

Dit is handig als u activiteiten buiten de app wilt beoordelen of een rapport wilt delen.

<br/>

<a id="delete-stored-records-for-a-model"></a>
### Opgeslagen gegevens voor een model verwijderen

In **Per model** of **Alle aanroepen** kunt u opgeslagen gegevens voor een model verwijderen door te klikken op het "prullenbak"-pictogram.

> ⚠️ **WAARSCHUWING**<br/>
> Verwijderen van opgeslagen gegevens kan niet ongedaan worden gemaakt. Gebruik dit alleen wanneer u zeker weet dat u de geschiedenis niet meer nodig hebt.

Als u alle gegevens wilt verwijderen of gegevens wilt verwijderen op basis van hun leeftijd, gaat u naar [**Instellingen** > **Kostenbijhouding**](#cost-tracking). Daar vindt u opties om alle opgeslagen gegevens te verwijderen, of alleen gegevens die ouder zijn dan een bepaalde datum.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="history"></a>
## Geschiedenis

Klik op **Geschiedenis** om de geschiedenis van uw acties binnen **Transrewrt** te bekijken, inclusief de invoer en uitvoer van elke bewerking.

![Geschiedenispagina](../images/screenshots/nl/history.png)

<br/>

<a id="filter-the-history"></a>
### De gegevens filteren

**Geschiedenis** gebruikt dezelfde filters als de **Dashboard**-pagina. Gebruik deze om het gewenste tijdsbereik te kiezen.

![Dashboardfilters](../images/screenshots/nl/dashboard-filter.png)

<br/>

> ℹ️ **OPMERKING**<br/>
> Het filter **Gebruiker** is alleen zichtbaar voor beheerders in de webversie. Regelmatige gebruikers zien dit filter niet, en het is niet beschikbaar in de desktopapp.

<br/>

<a id="export-history-data"></a>
### Geschiedenisgegevens exporteren

De geschiedenispagina kan de gefilterde gegevens exporteren in:

- **JSON**
- **CSV**
- **XLSX**

Dit is handig als u activiteiten buiten de app wilt beoordelen of een rapport wilt delen.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="settings"></a>
## Instellingen

Open **Instellingen** in de zijbalk om aan te passen hoe de app zich gedraagt.

De beschikbare tabbladen zijn afhankelijk van het platform en uw rol:

  | Tabblad               | Desktop | Web (beheerder) | Web (reguliere gebruiker) |
  |-----------------------|:-------:|:---------------:|:------------------------:|
  | Algemene instellingen |   ja    |       ja        |            ja             |
  | Modellen              |   ja    |       ja        |            ja             |
  | Talen                 |   ja    |       ja        |            ja             |
  | Kostenbijhouding      |   ja    |       ja        |             —             |
  | Transformatieprompts  |   ja    |       ja        |            ja             |
  | Gebruikers            |    —    |       ja        |             —             |
  | API-configuratie      |   ja    |       ja        |             —             |
  | Over                  |   ja    |       ja        |            ja             |

<br/>

> ℹ️ **OPMERKING**<br/>
> In de webversie heeft elke gebruiker zijn eigen configuratie. Instellingen zoals geselecteerde modellen, talen, algemene opties en transformatieprompts worden per gebruiker opgeslagen. Wijzigingen die u aanbrengt, hebben geen effect op andere gebruikers.

<br/>


[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="general-settings"></a>
### Algemene instellingen

Gebruik **Algemene instellingen** om het typgedrag, het opslaan van uitvoeringsgegevens voor **Geschiedenis** en het uiterlijk te regelen.

**Gedrag**

- **Gedrag voor ENTER** kiest of `Enter` de taak uitvoert of een nieuwe regel invoegt.
- **Automatisch vertalen bij plakken** start vertaling zodra u tekst plakt.
- **Resultaat automatisch kopiëren naar klembord** kopieert succesvolle resultaten automatisch.
- **Vertalen in real-time (tijdens het typen)** vertaalt terwijl u typt.
- **Time-out (ms)** stelt de wachttijd in voor real-time vertaling.

**Geschiedenis**

- **Uitvoeringsgeschiedenis bijhouden** bepaalt of elke vertaling, herschrijving en transformatie de **invoer- en uitvoertekst** opslaat voor de zijbalkweergave [**Geschiedenis**](#history). Uitschakelen vraagt om bevestiging; als u bevestigt, worden de opgeslagen geschiedenisteksten verwijderd uit de database.
- **Geschiedenisgegevens verwijderen** stelt u in staat opgeslagen tekst te verwijderen op basis van leeftijd (bijvoorbeeld ouder dan een paar maanden, of **alle gegevens (leegmaken)**) met **Gegevens verwijderen**. Dit beïnvloedt alleen de opgeslagen uitvoerteksten voor de **Geschiedenis**-weergave; het **verwijdert geen** kosten- of gebruiksgegevens. Gebruik [**Instellingen** > **Kostenbijhouding**](#cost-tracking) om **kosten**-gegevens te verwijderen of inkorten.

**Uiterlijk**

- **Kosteninformatie weergeven bij acties** regelt het weergeven van de kost per actie (indien beschikbaar) en de totale kosten op de uitvoerpanelen van Vertalen, Herschrijven en Transformeren.
- **Aantal decimalen voor kosten** wijzigt hoe kosten met decimalen worden weergegeven.
- **Alleen web:** **marge rond de app weergeven** voegt extra ruimte rond de interface toe.
- **Lettertype** wijzigt het schrift in de tekstpanelen.
- **Grootte** wijzigt de lettergrootte.

<br/>

<a id="models"></a>

### Modellen

Gebruik **Instellingen** > **Modellen** om te kiezen welke modellen in de werkbalk verschijnen.

![Instellingen tabblad Modellen](../images/screenshots/nl/settings-models.png)

De pagina bevat twee lijsten:

- **Beschikbare modellen** aan de linkerkant
- **Geselecteerde modellen** aan de rechterkant

Handige bedieningselementen zijn:

- **Zoek modellen...** om een model op naam te vinden
- **Provider**-chips om de lijst te beperken tot één engine (OpenRouter, OpenAI, Ollama, …)
- **Alleen gratis** om alleen gratis modellen weer te geven
- **Vernieuwen** om de lijst opnieuw te laden
- **Alles uitvouwen** en **Alles inklappen** wanneer u sorteert op provider

Model-id’s bevatten het providervoorvoegsel (bijvoorbeeld `openrouter/…` versus `openai/…`). Labels zoals **OpenAI (OpenRouter)** versus **OpenAI (direct)** geven aan hoe het verkeer wordt doorgestuurd.

> ℹ️ **OPMERKING**<br/>
> **OpenRouter Body Builder** (`openrouter/bodybuilder`) is een routermodel, geen algemeen chatmodel: de reactie is JSON die OpenRouter API-aanvraagbodems beschrijft (bijvoorbeeld een `requests`-array met `model` en `messages`). Als u dit gebruikt voor **Vertalen**, **Omschrijven** of **Transformeren**, toont het uitvoerpaneel deze JSON in plaats van afgewerkt tekst. Kies een normaal tekstmodel voor deze taken. Zie de [Body Builder modelpagina](https://openrouter.ai/openrouter/bodybuilder) op OpenRouter.

Acties:

 - Klik op **Toevoegen** of ergens in de regel om een model toe te voegen.

 - Klik op **X** ernaast in **Geselecteerde modellen** of op **Geselecteerd** in de regel onder Beschikbare modellen om een model te verwijderen.

 - Klik op **Alles deselecteren** om de lijst te wissen. Het vereiste gratis model blijft in de lijst staan.

<br/>

> ℹ️ **OPMERKING**<br/>
> Als u nog geen credits aan OpenRouter wilt toevoegen, schakel dan eerst **Alleen gratis** in en kies gratis modellen (geen creditcard vereist). U kunt ook Ollama gebruiken om modellen lokaal te draaien zonder API-sleutel.

<br/>

<a id="languages"></a>
### Talen

Gebruik **Instellingen** > **Talen** om de talenlijsten in de app in te stellen.

- **Top talen** worden bovenaan in de talenlijsten in **Vertalen** en **Transformeren** vastgezet.
- **Aangepaste taal** stelt u in staat om een taal toe te voegen die niet in de ingebouwde lijst staat.

Als u een aangepaste taal toevoegt, verschijnt deze in de taalkeuzelijsten naast de ingebouwde opties.

<br/>

<a id="cost-tracking"></a>
### Kostenbijhouding

Gebruik **Instellingen** > **Kostenbijhouding** om kosteninformatie te beheren.

- **Totale kosten** toont de lopende som.
- **Waarde kopiëren** kopieert het totaal naar het klembord.
- **Kosten opnieuw instellen** stelt het opgeslagen totaal op nul.
- **Synchroniseer met API-sleutelgebruik** stelt het totaal gelijk aan het gebruik dat door uw OpenRouter-account wordt gemeld (alleen OpenRouter).
- **API-sleutelgebruik** toont OpenRouter-gebruiksgegevens, indien beschikbaar.
- **Kostengegevens verwijderen** verwijdert alle gegevens of alleen vermeldingen ouder dan een geselecteerde datum.

**Kostenbijhouding:** Wanneer u OpenRouter-modellen gebruikt, toont de app uw werkelijke gebruik en uitgaven op basis van kostengegevens van OpenRouter. Voor alle andere providers schat de app kosten op basis van prijzen die OpenRouter publiceert. Indien een prijs niet beschikbaar is, kan de schatting nul zijn.

<br/>

> ℹ️ **OPMERKING**<br/>
> **Alle kostenbedragen zijn schattingen voor informatief gebruik, geen officiële facturatiestatementen.**


<br/>

> ⚠️ **WAARSCHUWING**<br/>
> Gegevensverwijdering kan niet ongedaan worden gemaakt. Zorg ervoor dat u een back-up maakt of uw gegevens exporteert via [**Geschiedenis**](#history) of [**Dashboard** > **Alle aanvragen**](#dashboard-tabs) voordat u verwijdert, anders gaan deze permanent verloren. 
> Alle invoer/uitvoer geschiedenis gerelateerd aan elke API-aanvraag wordt ook verwijderd.

<br/>

<a id="transform-prompts"></a>
### Transformeer prompts

Gebruik **Instellingen** > **Transformeer prompts** om prompts in bulk te beheren.

U kunt:

- uw opgeslagen prompts bekijken
- prompts verwijderen
- prompts importeren uit een bestand
- prompts exporteren voor back-up of delen

<br/>

<a id="users"></a>
### Gebruikers

Gebruik **Gebruikers** om gebruikersaccounts te beheren in de webversie. U kunt gebruikers toevoegen, gegevens bijwerken, wachtwoorden opnieuw instellen en accounts verwijderen.

<br/>

<a id="api-config"></a>
### API-configuratie

De ondersteunde providers zijn: OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras en **Ollama** (lokale modellen via een basis-URL). U hoeft alleen de providers die u gebruikt te configureren.

**Webapplicatie: alleen beheerder**

API-sleutels worden geconfigureerd via systeem- of Docker-omgevingsvariabelen — ze worden niet ingevoerd in de webinterface. Op deze pagina ziet u welke providers een sleutel hebben geconfigureerd en kunt u elke provider testen via de knop **`Test`**.

<br/>

> ℹ️ **OPMERKING**<br/>
> Om een API-sleutel te wijzigen, wijzig de omgevingsvariabele in uw systeem- of Docker-configuratie en herstart de server of container.

<br/>

**Desktopapplicatie**

Gebruik **API-configuratie** om API-sleutels op te slaan voor elke provider die u gebruikt. Voor Ollama voert u het **basis-URL** in plaats van een API-sleutel in.

<br/>

> 💡 **Tip** <br/>
> Als u geen API-sleutel wilt gebruiken of wilt betalen voor gebruik, kunt u [Ollama downloaden](https://ollama.com) en modellen (zoals `translategemma:4b`) gratis lokaal op uw machine draaien. U kunt ook een gratis OpenRouter-account maken (zonder creditcard) om hun gratis modellen te gebruiken, of een gratis API-sleutel verkrijgen van Cerebras, Google, Groq of Mistral AI.

<br/>

- Voeg alleen de providers toe die u nodig hebt. In **Instellingen** > **Modellen** begint elke model-id met de provider (bijvoorbeeld `openrouter/openrouter/free`, `openai/gpt-4o`, `ollama/llama3`).

Voer om een API-sleutel toe te voegen de waarde in het tekstveld in en klik op **`Opslaan`**. Klik op **`Bewerken`** om een bestaande sleutel te vervangen. Klik op **`Test`** om te controleren of een sleutel werkt. Voor de Ollama basis-URL klikt u altijd op **`Test`** om de verbinding te controleren.

<br/>

> ℹ️ **OPMERKING**<br/>
> U kunt de huidige waarde van een API-sleutel niet zien. U kunt deze alleen vervangen via de knop **`Bewerken`**.
> API-sleutels worden versleuteld in de configuratie opgeslagen.

<br/>

<a id="about"></a>

### Over

Het tabblad **Over** toont:

- de naam van de app
- het versienummer
- de bouwdatum
- een link naar de projectrepo

<br/><br/>

<a id="common-issues"></a>
## Veelvoorkomende problemen

Als iets niet werkt zoals verwacht, controleer dan eerst de volgende punten.

<br/>

<a id="the-app-will-not-translate-rewrite-or-transform-text"></a>
### De app vertaalt, herschrijft of transformeert geen tekst

Controleer of:

- u een model heeft geselecteerd in de werkbalk
- er minstens één model vermeld staat onder [**Instellingen** > **Modellen**](#models)
- uw API-configuratie werkt

Als u de desktopapp gebruikt:

1. Open [**Instellingen** > **API-configuratie**](#api-config).
2. Controleer of er minstens één API-sleutel is opgeslagen.
3. Klik op **Testen** naast de provider om te bevestigen dat de sleutel werkt.

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
- schakel **Realtime vertalen (tijdens het typen)** uit in [**Instellingen** > **Algemene instellingen**](#general-settings)
- gebruik gratis modellen voor eenvoudige taken (zie [Modellen](#models))

<br/>

<a id="the-interface-is-in-the-wrong-language"></a>
### De interface staat in de verkeerde taal

Klik op het wereldbol-pictogram in de [werkbalk](#toolbar) en kies uw gewenste **Taal van de interface**.

<br/>

<a id="the-text-is-too-small-or-hard-to-read"></a>
### De tekst is te klein of moeilijk leesbaar

Open [**Instellingen** > **Algemene instellingen**](#general-settings) en wijzig:

- **Lettertype**
- **Grootte**

<br/>

<a id="dashboard-charts-are-empty"></a>
### Dashboardgrafieken zijn leeg

Dit is normaal als:

- u alleen **gratis modellen** gebruikt (kostengrafieken blijven leeg)
- het geselecteerde **tijdfilter** niet overeenkomt met de periode waarin aanroepen zijn gedaan — probeer **Alles** om te controleren

Als de grafieken nog steeds leeg zijn na het kiezen van **Alles**, controleer dan of aanroepen zichtbaar zijn in [**Geschiedenis**](#history) of in het tabblad **Alle aanroepen**.

<br/>

<a id="cost-shows-not-available-or-seems-wrong"></a>
### Kosten tonen "niet beschikbaar" of lijken fout

Wanneer u modellen gebruikt via **OpenRouter**, toont de app uw werkelijke uitgaven zoals gemeld door OpenRouter.

Voor **andere providers** (OpenAI direct, Anthropic direct, enz.) worden kosten geschat op basis van prijsgegevens gepubliceerd door OpenRouter. Als er geen overeenkomende prijs is gevonden voor een model, wordt de kost weergegeven als **niet beschikbaar** en wordt deze niet bij uw totaal opgeteld.

<br/>

<a id="total-cost-does-not-match-my-provider-bill"></a>
### Totale kosten komen niet overeen met mijn providerfactuur

Alle kostenbedragen in de app zijn **schattingen ter informatie**, geen officiële facturen.

Om het totaal dichter bij uw werkelijke OpenRouter-uitgaven te krijgen, open [**Instellingen** > **Kosten volgen**](#cost-tracking) en klik op **Synchroniseer met API-sleutelgebruik**.

<br/>

<a id="the-history-page-is-missing-from-the-sidebar"></a>
### De geschiedenispagina ontbreekt in de zijbalk

**Uitvoeringsgeschiedenis bijhouden** is mogelijk uitgeschakeld. Open [**Instellingen** > **Algemene instellingen**](#general-settings) en schakel deze optie in. Houd er rekening mee dat het inschakelen geen eerder verwijderde geschiedenisgegevens herstelt.

<br/>

<a id="web-app-session-expired"></a>
### Webapp: onverwacht doorgestuurd naar de aanmeldpagina

Uw sessie is mogelijk verlopen. Meld u opnieuw aan. Als dit vaak gebeurt, controleer dan de serverconfiguratie voor sessielevensduur-instellingen.

<br/>

<a id="dashboard-shows-no-data-for-other-users"></a>
### Dashboard toont geen gegevens voor andere gebruikers (web)

Alleen **beheerders** kunnen gegevens van alle gebruikers bekijken via het **Gebruikers**-filter. Normale gebruikers zien per ontwerp alleen hun eigen activiteit.

<br/>

<a id="i-changed-a-prompt-and-lost-the-edits"></a>
### Ik heb een prompt aangepast en de wijzigingen zijn verloren

Wanneer u een prompt aanpast, klik altijd op **Opslaan** voordat u op **Terug naar uitvoeren** klikt.

<br/><br/>

<a id="quick-tips"></a>
## Snelle tips

- Begin met [**Vertalen**](#translate) om ervoor te zorgen dat uw instelling werkt, voordat u overgaat naar [**Herschrijven**](#rewrite) of [**Transformeren**](#transform).
- Gebruik [**Herschrijven**](#rewrite) voor dagelijkse verbeteringen van tekst.
- Gebruik [**Transformeren**](#transform) als u een herhaalbare werkwijze nodig heeft voor een specifieke taak.
- Gebruik [**Dashboard**](#dashboard) als u gebruik en kosten wilt volgen.
- Gebruik [**Geschiedenis**](#history) om eerdere bewerkingen en de volledige invoer/uitvoertekst te bekijken.
- Exporteer regelmatig prompts als u een promptbibliotheek aan het opbouwen bent die u veilig wilt bewaren (zie [Prompts transformeren](#transform-prompts)) of deze met anderen wilt delen.

<br/><br/>

<a id="disclaimer"></a>

## Aansprakelijkheid

Productnamen en iconen zijn eigendom van hun respectieve eigenaren en worden uitsluitend gebruikt voor identificatiedoeleinden. Deze software is niet gelieerd aan of goedgekeurd door een van de genoemde merken.

<br/><br/>

<a id="license"></a>
## Licentie

Copyright © 2026 Waldemar Scudeller Jr.

[Apache Licentie 2.0](LICENSE)