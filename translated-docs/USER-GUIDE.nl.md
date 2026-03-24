---
translated_at: "2026-03-24T01:29:17.116Z"
source_hash: "fc671c16dd34a2c355752935670712beb8abd2ae65453de44983a2f2f0701696"
source_mtime: 1774306679773.736
model: "qwen/qwen3-235b-a22b-2507"
---
![Transrewrt-banner](../images/transrewrt_banner.png)

<a id="transrewrt-gebruikershandleiding"></a>
# Gebruikershandleiding

<br/>

<a id="inleiding"></a>
## Inleiding

Transrewrt helpt je op drie manieren met tekstverwerking:

- **Vertalen** - tekst omzetten van de ene taal naar de andere.
- **Herschrijven** - tekst opnieuw formuleren in een andere stijl, zoals duidelijker, korter of formeler.
- **Transformeren** - tekst verwerken met behulp van aangepaste AI-instructies, ook wel prompts genoemd.

<br/>

Deze handleiding legt uit hoe je de app gebruikt als deze eenmaal is geïnstalleerd en actief is. Zie het hoofd-**[README](README.nl.md)** voor installatie-instructies.

<br/>

> ℹ️ **OPMERKING**<br/>
> Transrewrt is beschikbaar als desktopapp voor Windows en Linux, en als zelfgehoste webapp. Deze handleiding richt zich op het dagelijks gebruik van de app. Wanneer iets alleen op een specifieke versie van toepassing is, wordt dit duidelijk aangegeven.

<small>**Lees in andere talen:** [English (UK)](USER-GUIDE.nl.md) · [Português (BR)](USER-GUIDE.pt-BR.md) · [العربية](USER-GUIDE.ar.md) · [বাংলা](USER-GUIDE.bn.md) · [Català](USER-GUIDE.ca.md) · [简体中文](USER-GUIDE.zh-CN.md) · [繁體中文](USER-GUIDE.zh-TW.md) · [Hrvatski](USER-GUIDE.hr.md) · [Čeština](USER-GUIDE.cs.md) · [Nederlands](USER-GUIDE.nl.md) · [English (US)](USER-GUIDE.en-US.md) · [Filipino](USER-GUIDE.tl.md) · [Français](USER-GUIDE.fr.md) · [Deutsch](USER-GUIDE.de.md) · [Ελληνικά](USER-GUIDE.el.md) · [हिन्दी](USER-GUIDE.hi.md) · [Magyar](USER-GUIDE.hu.md) · [Italiano](USER-GUIDE.it.md) · [日本語](USER-GUIDE.ja.md) · [Basa Jawa](USER-GUIDE.jv.md) · [한국어](USER-GUIDE.ko.md) · [Bahasa Melayu](USER-GUIDE.ms.md) · [فارسی](USER-GUIDE.fa.md) · [Polski](USER-GUIDE.pl.md) · [Português (PT)](USER-GUIDE.pt.md) · [ਪੰਜਾਬੀ](USER-GUIDE.pa.md) · [Română](USER-GUIDE.ro.md) · [Русский](USER-GUIDE.ru.md) · [Slovenčina](USER-GUIDE.sk.md) · [Español](USER-GUIDE.es.md) · [Kiswahili](USER-GUIDE.sw.md) · [Svenska](USER-GUIDE.sv.md) · [తెలుగు](USER-GUIDE.te.md) · [ภาษาไทย](USER-GUIDE.th.md) · [Türkçe](USER-GUIDE.tr.md) · [Українська](USER-GUIDE.uk.md) · [Tiếng Việt](USER-GUIDE.vi.md)</small>

<br/>

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Inhoudsopgave**

- [Voordat je begint](#voordat-je-begint)
  - [Hoe je een gratis OpenRouter API-sleutel krijgt (desktopapp)](#hoe-je-een-gratis-openrouter-api-sleutel-krijgt-desktopapp)
- [Aan de slag](#aan-de-slag)
- [Hoofdonderdelen van het venster](#hoofdonderdelen-van-het-venster)
  - [Zijbalk](#zijbalk)
  - [Werkbalk](#werkbalk)
  - [Invoer- en uitvoerpanelen](#invoer-en-uitvoerpanelen)
- [Vertalen](#vertalen)
  - [Tekst vertalen](#tekst-vertalen)
  - [Taalkeuze](#taalkeuze)
  - [Handige vertaalinstellingen](#handige-vertaalinstellingen)
  - [Sneltoetsen](#sneltoetsen)
- [Herschrijven](#herschrijven)
  - [Tekst herschrijven](#tekst-herschrijven)
- [Transformeren](#transformeren)
  - [Een bestaande prompt uitvoeren](#een-bestaande-prompt-uitvoeren)
  - [Als je nog geen prompts hebt](#als-je-nog-geen-prompts-hebt)
  - [Snel een prompt aanmaken](#snel-een-prompt-aanmaken)
  - [Een prompt bewerken](#een-prompt-bewerken)
  - [Een prompt testen voordat je hem gebruikt](#een-prompt-testen-voordat-je-hem-gebruikt)
  - [Opgeslagen prompts beheren](#opgeslagen-prompts-beheren)
- [Dashboard](#dashboard)
  - [De gegevens filteren](#de-gegevens-filteren)
  - [Dashboard-tabbladen](#dashboard-tabbladen)
  - [Gegevens exporteren](#gegevens-exporteren)
  - [Opgeslagen gegevens van een model verwijderen](#opgeslagen-gegevens-van-een-model-verwijderen)
- [Geschiedenis](#geschiedenis)
  - [De gegevens filteren](#de-gegevens-filteren-1)
  - [Geschiedenisgegevens exporteren](#geschiedenisgegevens-exporteren)
- [Instellingen](#instellingen)
  - [Algemene instellingen](#algemene-instellingen)
  - [Modellen](#modellen)
  - [Talen](#talen)
  - [Kostenbijhouding](#kostenbijhouding)
  - [Transformeer-prompts](#transformeer-prompts)
  - [Gebruikers](#gebruikers)
  - [API-configuratie](#api-configuratie)
  - [Over](#over)
- [Veelvoorkomende problemen](#veelvoorkomende-problemen)
  - [De app vertaalt, herschrijft of transformeert geen tekst](#de-app-vertaalt-herschrijft-of-transformeert-geen-tekst)
  - [De lijst met modellen is leeg](#de-lijst-met-modellen-is-lege)
  - [Het resultaat is te traag of te duur](#het-resultaat-is-te-traag-of-te-duur)
  - [De interface is in de verkeerde taal](#de-interface-is-in-de-verkeerde-taal)
  - [De tekst is te klein of moeilijk te lezen](#de-tekst-is-te-klein-of-moeilijk-te-lezen)
  - [Dashboardgrafieken zijn leeg](#dashboardgrafieken-zijn-lege)
  - [Kosten tonen "niet beschikbaar" of lijken fout](#kosten-tonen-niet-beschikbaar-of-lijken-fout)
  - [Totale kosten komen niet overeen met mijn factuur van de aanbieder](#totale-kosten-komen-niet-overeen-met-mijn-factuur-van-de-aanbieder)
  - [De geschiedenispagina ontbreekt in de zijbalk](#de-geschiedenispagina-ontbreekt-in-de-zijbalk)
  - [Webapp: onverwacht omgeleid naar de inlogpagina](#webapp-onverwacht-omgeleid-naar-de-inlogpagina)
  - [Dashboard toont geen gegevens voor andere gebruikers (web)](#dashboard-toont-geen-gegevens-voor-andere-gebruikers-web)
  - [Ik heb een prompt aangepast en de wijzigingen zijn kwijtgeraakt](#ik-heb-een-prompt-aangepast-en-de-wijzigingen-zijn-kwijtgeraakt)
- [Snelle tips](#snelle-tips)
- [Aansprakelijkheidsexcusie](#aansprakelijkheidsexcusie)
- [Licentie](#licentie)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="voordat-je-begint"></a>

## Voordat u begint

Om Transrewrt te gebruiken, hebt u toegang nodig tot ten minste één AI-provider. De ondersteunde providers zijn: [OpenRouter](https://openrouter.ai) (die veel modellen samenbrengt), OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI en [Ollama](https://ollama.com) voor lokale modellen.

U hoeft geen betaald model te kiezen om te beginnen. Zodra u uw OpenRouter API-sleutel toevoegt, schakelt de app automatisch een ingebouwde **gratis** OpenRouter-optie in. Hierdoor kunt u direct beginnen met het vertalen, herschrijven en omvormen van tekst.

In eenvoudige bewoordingen:

- Een **model** is de AI-engine die het werk doet. Modellen worden weergegeven met een **providerprefix** (bijvoorbeeld `openrouter/…`, `openai/…`, `ollama/…`).
- Een **API-sleutel** (of voor Ollama een **basis-URL**) is de manier waarop de app contact maakt met die provider.

Als u de **desktopapp** gebruikt, voegt u de sleutels toe in [**Instellingen** > **API-configuratie**](#api-config) voor elke provider die u gebruikt. Voor alleen OpenRouter raadpleegt u hieronder [Hoe een API-sleutel verkrijgen](#how-to-get-an-api-key-desktop-app). Als u geen API-sleutel wilt gebruiken, kunt u Ollama installeren (van [ollama.com](https://ollama.com)) en lokale modellen gebruiken.

Als u de **webversie** gebruikt, configureert de serverbeheerder de providers via omgevingsvariabelen, dus u hoeft meestal geen API-sleutels zelf in te voeren.

<br/>

<a id="how-to-get-an-api-key-desktop-app"></a>
### Een gratis OpenRouter API-sleutel verkrijgen (desktopapp)

Als u de desktopapp gebruikt, volg dan deze stappen:

1. Ga in uw webbrowser naar [OpenRouter](https://openrouter.ai).
2. Maak een account aan of meld u aan.
3. Ga naar de pagina [Sleutels](https://openrouter.ai/keys).
4. Klik op de knop om een nieuwe API-sleutel te maken.
5. Geef de sleutel een naam zodat u hem later kunt herkennen.
6. Kopieer de nieuwe API-sleutel.
7. Ga terug naar Transrewrt en open **Instellingen** > **API-configuratie**.
8. Plak de sleutel in het veld **OpenRouter API-sleutel** (onder **Instellingen** > **API-configuratie**).
9. Klik op **OpenRouter-sleutel testen** om te controleren of het werkt.

<br/>

> ℹ️ **OPMERKING**<br/>
> U kunt beginnen via OpenRouter's gratis route of elk ander beschikbaar gratis model zonder een creditcard toe te voegen. In veel gevallen is dat voldoende om Transrewrt te gebruiken zonder een betaald model te kiezen. U kunt ook Ollama gebruiken om modellen lokaal uit te voeren zonder API-sleutel.

<br/><br/>

<a id="getting-started"></a>
## Aan de slag

Als u Transrewrt voor het eerst gebruikt, volg dan deze volgorde:

1. Open de app.
2. Kies uw **Interface-taal** indien nodig via het globepictogram.
3. Als u de **desktopapp** gebruikt, open [**Instellingen** > **API-configuratie**](#api-config), voeg een API-sleutel toe voor minstens één provider (bijvoorbeeld OpenRouter) en klik op **Testen** om te controleren of het werkt.
4. Open [**Instellingen** > **Modellen**](#models) en voeg een of meer modellen toe aan **Geselecteerde modellen**.
5. Open [**Instellingen** > **Talen**](#languages) en kies uw **Belangrijkste talen** als u uw meest gebruikte talen eerst wilt zien.
6. Ga naar **Vertalen** en voer een eenvoudige vertaling uit om te controleren of alles werkt.
7. Zodra dit werkt, probeer **Herschrijven** en vervolgens **Omvormen**.

Deze volgorde is belangrijk. Zo voorkomt u het meest voorkomende probleem bij eerste gebruik: proberen een taak uit te voeren voordat de app een werkende API-verbinding of een geselecteerd model heeft.

<br/><br/>

<a id="main-parts-of-the-window"></a>
## Belangrijkste onderdelen van het venster

De app is onderverdeeld in drie hoofdgebieden:

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
        <li><strong>Herschrijven</strong> opent de werkruimte voor herschrijven.</li><br/>
        <li><strong>Omvormen</strong> opent de werkruimte voor aangepaste prompts.</li><br/>
        <li><strong>Dashboard</strong> toont gebruiks- en kosteninformatie.</li><br/>
        <li><strong>Instellingen</strong> opent het instellingenpaneel.</li><br/>
        <li><strong>Geschiedenis</strong> toont de gebruikslijst met invoer- en uitvoertekst.</li><br/>
        <li><strong>Gebruiker</strong> toont de gebruikersnaam van de aangemelde gebruiker (alleen web).</li>
      </ul>
    </td>
  </tr>
</table>

<br/>

<a id="toolbar"></a>

### Werkbalk

De werkbalk verandert iets, afhankelijk van waar je in de app bent.

- Links wordt de naam van de huidige pagina weergegeven.
- Rechts zie je de **modelkeuze** en de bediening van de **interface-taal**.

Met de **modelkeuze** kun je kiezen welke AI-engine je wilt gebruiken voor de huidige taak.

  ![Modelkeuze](../images/screenshots/nl/model-selector.png)

> ℹ️ **OPMERKING**<br/>
> Sommige gratis modellen zijn mogelijk niet altijd beschikbaar—soms zijn ze offline of hebben ze een gebruikslimiet. Als dat gebeurt, verwijdert de app dat model automatisch uit jouw beschikbare lijst.<br/>
> Om te bepalen welke modellen worden weergegeven, ga je naar [**Instellingen** > **Modellen**](#models) en pas je jouw modellenlijst aan. 
> Je kunt de modelinstellingen ook rechtstreeks openen door op het providerpictogram links van de modelnaam in de werkbalk te klikken.

<br/>

Het **wereldbolpictogram + taalcode** verandert de taal van de applicatie-interface, zoals menu's en knoppen. Het verandert **niet** de vertaaltalen die worden gebruikt in **Vertalen**.

  ![Taalkeuze interface](../images/screenshots/nl/language-selector.png)

<br/>

<a id="input-and-output-panels"></a>
### Invoer- en uitvoerpanelen

De meeste werkruimten gebruiken een linker **Invoer**-paneel en een rechter **Uitvoer**-paneel.

Het **Invoer**-paneel toont:

- Aantal tekens
- Aantal woorden
- Aantal alinea's

Het **Uitvoer**-paneel kan het volgende tonen:

- Hoe lang de taak duurde
- De kosten van de taak (indien beschikbaar)
- Jouw lopende totaalkosten
- **TPS** (tokens per seconde)
- Aantallen tekens, woorden en alinea’s
- Het gebruikte model

Als je je afvraagt wat de technische termen betekenen:

- **Token** betekent een klein stukje tekst. Je kunt het zien als een deel van een woord of een kort woord.
- **TPS** betekent hoeveel van die tekstfragmenten het model per seconde verwerkt.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="translate"></a>
## Vertalen

Gebruik **Vertalen** wanneer je tekst van de ene taal naar de andere wilt omzetten.

![Vertaalwerkruimte](../images/screenshots/nl/translate.png)

<br/>

<a id="translate-text"></a>
### Tekst vertalen

1. Open **Vertalen**.
2. Kies een taal bij **Van**.
3. Kies een taal bij **Naar**.
4. Kies een model in de werkbalk.
5. Typ tekst of plak deze in het veld **Invoer**.
6. Klik op **Vertalen**.
7. Lees het resultaat in het veld **Uitvoer**.
8. Gebruik de kopieerknop als je het resultaat wilt kopiëren.

<br/>

<a id="language-selection"></a>
### Taalkeuze

- **Van** kan een specifieke taal zijn of **Taal detecteren**.
- **Naar** is de taal waarin je het resultaat wilt.

Jouw geselecteerde **belangrijkste talen** verschijnen bovenaan de lijst. Je kunt deze instellen in [**Instellingen** > **Talen**](#languages).

<br/>

<a id="helpful-translation-settings"></a>
### Handige vertaalinstellingen

In [**Instellingen** > **Algemene instellingen**](#general-settings) kun je aanpassen hoe vertalen werkt:

- **Automatisch vertalen bij plakken** voert een vertaling uit zodra je tekst plakt.
- **Resultaat automatisch kopiëren naar klembord** kopieert het resultaat automatisch na een succesvolle uitvoering.
- **Vertalen in realtime (tijdens typen)** voert vertalingen uit terwijl je typt.
- **Time-out (ms)** bepaalt hoe lang de app wacht voordat een realtime vertaling wordt uitgevoerd.

<br/>

<a id="keyboard-shortcuts"></a>
### Sneltoetsen

In [**Instellingen** > **Algemene instellingen**](#general-settings) bepaalt **Gedrag van ENTER** wat er gebeurt wanneer je op `Enter` drukt:

- **Enter** kan de taak uitvoeren en **Shift+Enter** een nieuwe regel toevoegen.
- Of andersom.

De huidige modus wordt ook weergegeven op de knop **Vertalen**.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="rewrite"></a>
## Herschrijven

Gebruik **Herschrijven** wanneer je de formulering wilt verbeteren zonder de hoofdbetekenis te veranderen.

![Herschrijfwerkruimte](../images/screenshots/nl/rewrite.png)

Dit is handig voor:

- spelfouten en grammaticafouten verbeteren
- tekst duidelijker maken
- tekst formeler of informeler maken
- tekst inkorten of uitbreiden
- tekst technischer laten klinken

<br/>

<a id="rewrite-text"></a>

### Tekst herschrijven

1. Open **Herschrijven**.
2. Kies een **Modus**.
3. Kies een model in de werkbalk.
4. Typ of plak tekst in het vak **Invoer**.
5. Klik op **Herschrijven**.
6. Controleer het resultaat in het vak **Uitvoer**.

Het gedrag van de Enter-toets zoals beschreven bij [**Vertalen**](#keyboard-shortcuts) geldt ook hier.

<br/>

> 💡 **TIP**<br/>
> Wanneer u de modus "**Spelling en grammatica controleren**" gebruikt, verschijnt er een knop `Wijzigingen weergeven` in het uitvoervenster.
> Klik op deze knop om de weergave van correcties in of uit te schakelen, zodat u specifieke wijzigingen in uw tekst kunt zien of verbergen.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="transform"></a>
## Transformeren

Gebruik **Transformeren** wanneer u wilt dat de AI een door u opgegeven set instructies volgt.

![Transformeren-werkruimte](../images/screenshots/nl/transform.png)

Dit is het meest flexibele gedeelte van de app. U kunt het gebruiken voor taken zoals:

- notities samenvatten
- ruwe tekst omzetten in een verzorgde e-mail
- belangrijke punten extraheren
- tekst omzetten naar een specifiek formaat

<br/>

<a id="run-an-existing-prompt"></a>
### Voer een bestaande aanwijzing uit

1. Open **Transformeren**.
2. Kies een aanwijzing in de lijst met aanwijzingen.
3. Als een vak **Doeltaal** verschijnt, kies dan eventueel een taal.
4. Typ of plak tekst in **Invoer**.
5. Klik op **Transformeren**.
6. Lees het resultaat in **Uitvoer**.

<br/>

<a id="if-you-have-no-prompts-yet"></a>
### Als u nog geen aanwijzingen heeft

Als uw lijst met aanwijzingen leeg is, klikt u op **Voorbeeld-aanwijzingen laden**. Hierdoor worden vooraf gedefinieerde voorbeelden toegevoegd, zodat u snel kunt beginnen.

<br/>

> ℹ️ **OPMERKING**<br/>
> Voorbeeld-aanwijzingen zijn in het Engels beschikbaar. Nadat u ze hebt geladen, kunt u een aanwijzing bewerken en **Aanwijzing vertalen** gebruiken om deze naar uw taal te vertalen.

<br/>

<a id="create-a-prompt-quickly"></a>
### Snel een aanwijzing maken

De snelste manier om een aanwijzing te maken is:

1. Klik op **Nieuwe aanwijzing**.
2. Klik op **Aanwijzing genereren**.
3. Beschrijf wat u wilt dat de aanwijzing doet.
4. Kies een model.
5. Laat de app een concept voor u maken.
6. Controleer het concept en klik op **Opslaan**.

![Aanwijzing genereren](../images/screenshots/nl/transform-generate.png)


<br/>

<a id="edit-a-prompt"></a>
### Een aanwijzing bewerken

Wanneer u een aanwijzing maakt of bewerkt, verschijnt de editor aan de linkerkant en een testomgeving aan de rechterkant.

![Aanwijzingeneditor transformeren](../images/screenshots/nl/transform-prompt-edit.png)

De belangrijkste velden zijn:

- **Naam aanwijzing**: de naam die in de lijst met aanwijzingen wordt getoond.
- **Instructies bij aanwijzing (optioneel)**: een korte hint die aan de gebruiker wordt getoond wanneer de aanwijzing wordt uitgevoerd.
- **Modelrol**: de algemene rol die aan de AI is toegewezen, bijvoorbeeld 'U bent een behulpzame assistent.'
- **Modelinstructies (één per regel)**: de specifieke regels die de AI moet volgen.
- **Beschrijving uitvoer**: een kort woord dat het resultaat beschrijft, zoals 'samenvatting' of 'herschrijven'.
- **Temperatuur (0,0 → 1,0)**: het gedrag van het model; zie hieronder.
- **Vraag om doeltaal**: voegt een keuzemenu voor de doeltaal toe wanneer de aanwijzing wordt uitgevoerd.

Als de technische term **Temperatuur** nieuw voor u is, kunt u er als volgt over nadenken:

- Een **lagere** temperatuur geeft stabielere, voorspelbaarere resultaten.
- Een **hogere** temperatuur geeft meer variatie en creativiteit.

U kunt ook gebruiken:

- **`Aanwijzing genereren`** om een nieuw concept te maken op basis van een eenvoudige beschrijving
- **`Aanwijzing verbeteren`** om een bestaande aanwijzing te verfijnen
- **`Aanwijzing vertalen`** om de velden van de aanwijzing te vertalen

<br/>

> ⚠️ **WAARSCHUWING**<br/>
> Klik op **`Opslaan`** voordat u op **`Terug naar uitvoeren`** klikt. Als u terugkeert zonder op te slaan, gaan uw wijzigingen verloren.

<br/>

<a id="test-a-prompt-before-using-it"></a>
### Een aanwijzing testen voordat u deze gebruikt

In het testpaneel aan de rechterkant kunt u uw aanwijzing uitproberen met voorbeeldtekst voordat u deze in alledaagse werkzaamheden gebruikt.

Dit is handig als:

- u een nieuwe aanwijzing aan het opbouwen bent
- u twee versies van een aanwijzing wilt vergelijken
- u toon, lengte of uitvoerformaat wilt controleren

<br/>

<a id="manage-saved-prompts"></a>
### Opgeslagen aanwijzingen beheren

Om opgeslagen aanwijzingen op één plek te beheren, opent u [**Instellingen** > **Transformeeraanwijzingen**](#transform-prompts).

Daar kunt u:

- uw aanwijzingen bekijken en verwijderen
- aanwijzingen exporteren als **JSON**, **CSV** of **XLSX**
- aanwijzingen importeren uit een bestand

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="dashboard"></a>

## Dashboard

Gebruik **Dashboard** om te zien hoeveel u de app gebruikt en wat dit kost (voor betaalde modellen).

![Overzicht dashboard](../images/screenshots/nl/dashboard-summary.png)


<br/>

> ℹ️ **OPMERKING**<br/>
> Als u alleen gratis modellen gebruikt, zullen de kostengerelateerde grafieken leeg zijn. 

<br/>

<a id="filter-the-data"></a>
### Gegevens filteren

Gebruik de filterknoppen bovenaan om het tijdsbereik te wijzigen.

![Dashboardfilters](../images/screenshots/nl/dashboard-filter.png)

<br/>

> ℹ️ **OPMERKING**<br/>
> Het filter **Gebruiker** is alleen zichtbaar voor beheerders in de webversie. Gewone gebruikers zien dit filter niet en het is niet beschikbaar in de desktopapp.

<br/>

<a id="dashboard-tabs"></a>
### Dashboard-tabbladen

- **Overzicht** geeft een samenvatting van gebruik en kosten.
- **Per gebruik** verdeelt de activiteit per taal voor vertaling, herschrijfmodus en transformatieprompt.
- **Per model** laat zien welke modellen u hebt gebruikt en wat deze hebben gekost.
- **Per dag** toont de dagelijkse totalen.
- **Alle aanroepen** toont de volledige aanroepgeschiedenis en stelt u in staat deze te exporteren.

<br/>

<a id="export-data"></a>
### Gegevens exporteren

De dashboadtabellen kunnen gegevens exporteren in:

- **JSON**
- **CSV**
- **XLSX**

Handig als u activiteiten buiten de app wilt bekijken of een rapport wilt delen.

<br/>

<a id="delete-stored-records-for-a-model"></a>
### Opgeslagen gegevens voor een model verwijderen

In **Per model** of **Alle aanroepen** kunt u opgeslagen gegevens voor een model verwijderen door op het prullenbakpictogram te klikken.

> ⚠️ **WAARSCHUWING**<br/>
> Verwijderen van opgeslagen gegevens kan niet ongedaan worden gemaakt. Gebruik dit alleen als u zeker weet dat u deze geschiedenis niet meer nodig hebt.

Om alle gegevens te verwijderen of records op basis van leeftijd te verwijderen, gaat u naar [**Instellingen** > **Kostenbijhouding**](#cost-tracking). Daar vindt u opties om alle opgeslagen gegevens te verwijderen of alleen gegevens die ouder zijn dan een bepaalde datum.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="history"></a>
## Geschiedenis

Klik op **Geschiedenis** om de geschiedenis van uw acties in **Transrewrt** te bekijken, inclusief de invoer en uitvoer van elke bewerking.

![Geschiedenispagina](../images/screenshots/nl/history.png)

<br/>

<a id="filter-the-history"></a>
### De geschiedenis filteren

**Geschiedenis** gebruikt dezelfde filters als de pagina **Dashboard**. Gebruik deze om het tijdsbereik te kiezen.

![Dashboardfilters](../images/screenshots/nl/dashboard-filter.png)

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

Handig als u activiteiten buiten de app wilt bekijken of een rapport wilt delen.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="settings"></a>
## Instellingen

Open **Instellingen** via de zijbalk om aan te passen hoe de app zich gedraagt.

De beschikbare tabbladen hangen af van het platform en uw rol:

  | Tab               | Desktop | Web (beheerder) | Web (gewone gebruiker) |
  |-------------------|:-------:|:---------------:|:----------------------:|
  | Algemene instellingen  |   ja   |      ja     |        ja         |
  | Modellen            |   ja   |      ja     |        ja         |
  | Talen               |   ja   |      ja     |        ja         |
  | Kostenbijhouding    |   ja   |      ja     |         —          |
  | Transformatieprompts|   ja   |      ja     |        ja         |
  | Gebruikers          |    —    |      ja     |         —          |
  | API-configuratie    |   ja   |      ja     |         —          |
  | Over                |   ja   |      ja     |        ja         |

<br/>

> ℹ️ **OPMERKING**<br/>
> In de webversie heeft elke gebruiker zijn eigen configuratie. Instellingen zoals geselecteerde modellen, talen, algemene opties en transformatieprompts worden per gebruiker opgeslagen. Wijzigingen die u aanbrengt hebben geen invloed op andere gebruikers.

<br/>


[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="general-settings"></a>

### Algemene instellingen

Gebruik **Algemene instellingen** om het typgedrag te bepalen, of uitvoeringsdetails worden opgeslagen voor de **Geschiedenis**, en het uiterlijk van de app.

**Gedrag**

- **Gedrag voor ENTER** kiest of `Enter` de taak uitvoert of een nieuwe regel invoegt.
- **Automatisch vertalen bij plakken** start vertaling zodra u tekst plakt.
- **Kopieer resultaat automatisch naar klembord** kopieert succesvolle resultaten automatisch.
- **Vertaling in real time (tijdens het typen)** vertaalt zodra u typt.
- **Time-out (ms)** stelt de wachttijd in voor real-time vertaling.

**Geschiedenis**

- **Uitvoeringsgeschiedenis bijhouden** bepaalt of elke vertaling, herschrijving en transformatie de **invoer- en uitvoertekst** opslaat voor de zijbalkweergave [**Geschiedenis**](#history). Uitschakelen vraagt om bevestiging; bij bevestiging worden de opgeslagen tekstgegevens uit de database verwijderd.
- **Geschiedenisgegevens verwijderen** stelt u in staat om opgeslagen tekst te verwijderen op basis van leeftijd (bijvoorbeeld ouder dan een paar maanden, of **alle gegevens (leegmaken)**) via de knop **Gegevens verwijderen**. Dit betreft alleen de opgeslagen uitvoeringsteksten voor de weergave **Geschiedenis**; het verwijdert **geen** kosten- of gebruikstotalen. Gebruik [**Instellingen** > **Kostenregistratie**](#cost-tracking) om **kosten**gegevens te verwijderen of beperken.

**Uiterlijk**

- **Kostendecimalen** wijzigt hoe kosten met decimalen worden weergegeven.
- **Alleen web:** **marge rond de app weergeven** voegt extra ruimte toe rond de interface.
- **Lettertype** wijzigt het schrijflettertype in de tekstvakken.
- **Grootte** verandert de lettergrootte.


<br/>

<a id="models"></a>
### Modellen

Gebruik **Instellingen** > **Modellen** om te kiezen welke modellen in de werkbalk worden weergegeven.

![Instellingen tabblad Modellen](../images/screenshots/nl/settings-models.png)

De pagina bevat twee lijsten:

- **Beschikbare modellen** aan de linkerkant
- **Geselecteerde modellen** aan de rechterkant

Handige bedieningselementen zijn:

- **Zoek modellen...** om een model op naam te vinden
- **Aanbieder-knikkers** om de lijst te beperken tot één engine (OpenRouter, OpenAI, Ollama, …)
- **Alleen gratis** om uitsluitend gratis modellen weer te geven
- **Vernieuwen** om de lijst opnieuw te laden
- **Alles uitvouwen** en **Alles samenvouwen** tijdens sorteren op aanbieder

Model-id’s bevatten het voorvoegsel van de aanbieder (bijv. `openrouter/…` vergeleken met `openai/…`). Labels zoals **OpenAI (OpenRouter)** versus **OpenAI (direct)** tonen hoe het verkeer wordt doorgestuurd.

Acties:

- Om een model toe te voegen klikt u op **Toevoegen** of ergens in de vermelding.
- Om een model te verwijderen klikt u op het **X** ernaast in **Geselecteerde modellen** of op **Geselecteerd** op de vermelding in Beschikbare modellen.
- Om de lijst leeg te maken klikt u op **Alles deselecteren**. Het vereiste gratis model blijft in de lijst staan.

<br/>

> ℹ️ **OPMERKING**<br/>
> Als u geen credits wilt kopen bij OpenRouter, kunt u beginnen met het inschakelen van **Alleen gratis**, en daarna de gratis modellen kiezen (zonder creditcard vereist). U kunt ook Ollama gebruiken om modellen lokaal uit te voeren zonder API-sleutel.

<br/>

<a id="languages"></a>
### Talen

Gebruik **Instellingen** > **Talen** om de in de app gebruikte taallijsten te beheren.

- **Top talen** worden vastgemaakt boven in de taallijsten in **Vertalen** en **Transformeren**.
- **Aangepaste taal** stelt u in staat een taal toe te voegen die niet in de ingebouwde lijst staat.

Als u een aangepaste taal toevoegt, wordt deze weergegeven naast de ingebouwde opties in de taalkeuzemenu’s.

<br/>

<a id="cost-tracking"></a>
### Kostenregistratie

Gebruik **Instellingen** > **Kostenregistratie** om kosteninformatie te beheren.

- **Totale kosten** geeft het lopende totaal weer.
- **Waarde kopiëren** kopieert het totaal naar het klembord.
- **Kosten opnieuw instellen** zet het opgeslagen totaal terug naar nul.
- **Synchroniseer met API-sleutelgebruik** zet het totaal gelijk aan het gebruik zoals gemeld door uw OpenRouter-account (alleen OpenRouter).
- **API-sleutelgebruik** toont OpenRouter-gebruiksgegevens, indien beschikbaar.
- **Kostengegevens verwijderen** verwijdert alle gegevens, of alleen vermeldingen die ouder zijn dan een geselecteerde datum.

**Kostenregistratie:** Wanneer u OpenRouter-modellen gebruikt, toont de app uw werkelijke gebruik en uitgaven op basis van gegevens van OpenRouter. Bij alle andere aanbieders schat de app kosten op basis van prijzen gepubliceerd door OpenRouter. Indien geen prijs beschikbaar is, kan de schatting nul zijn.

<br/>

> ℹ️ **OPMERKING**<br/>
> Alle kostenbedragen zijn schattingen ter informatie, geen officiële factureringsoverzichten.

### Prompt transformatie

Gebruik **Instellingen** > **Prompt transformatie** om prompts in bulk te beheren.

U kunt:

- opgeslagen prompts bekijken
- prompts verwijderen
- prompts importeren uit een bestand
- prompts exporteren voor back-up of delen

<br/>

<a id="users"></a>
### Gebruikers

**Web: alleen beheerder**

Gebruik **Gebruikers** om gebruikersaccounts te beheren in de webversie. U kunt gebruikers toevoegen, hun gegevens bijwerken, wachtwoorden opnieuw instellen en accounts verwijderen.

<br/>

<a id="api-config"></a>
### API-configuratie

Ondersteunde providers zijn: OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI en **Ollama** (lokale modellen via een basis-URL). U hoeft alleen de providers die u gebruikt te configureren.

**Webapplicatie: alleen beheerder**

API-sleutels worden geconfigureerd via systeem- of Docker-omgevingsvariabelen — ze worden niet ingevoerd in de web-UI. Op deze pagina ziet u welke providers een sleutel hebben geconfigureerd en kunt u elke provider testen door op de knop **`Test`** te klikken.

<br/>

> ℹ️ **OPMERKING**<br/>
> Als u een API-sleutel wilt wijzigen, moet u de omgevingsvariabele bijwerken in uw systeem- of Docker-configuratie en de server of container opnieuw starten.

<br/>

**Desktopapplicatie**

Gebruik **API-configuratie** om API-sleutels op te slaan voor elke provider die u gebruikt. Voor Ollama voert u het **basis-URL** in plaats van een API-sleutel in.

<br/>

> 💡 **Tip** <br/>
> Als u geen API-sleutel wilt gebruiken of geen kosten wilt maken, kunt u [Ollama downloaden](https://ollama.com) en gratis modellen lokaal op uw computer uitvoeren. Als alternatief kunt u een gratis OpenRouter-account aanmaken (geen creditcard vereist) om gebruik te maken van hun gratis modellen.

- Voeg alleen de providers toe die u nodig hebt. In **Instellingen** > **Modellen** begint elk model-id met de provider (bijvoorbeeld `openrouter/openrouter/free`, `openai/gpt-4o`, `ollama/llama3`).

Als u een API-sleutel wilt toevoegen, typt u de waarde in het tekstveld en klikt u op **`Opslaan`**. Als u een bestaande sleutel wilt vervangen, klikt u op **`Bewerken`**. Om te controleren of een sleutel werkt, klikt u op **`Test`**.

<br/>

> ℹ️ **OPMERKING**<br/>
> U kunt de huidige waarde van een API-sleutel niet bekijken. U kunt deze alleen vervangen via de knop **`Bewerken`**.
> API-sleutels worden versleuteld opgeslagen in het configuratiebestand.

<br/>

Zie [Hoe een API-sleutel verkrijgen](#how-to-get-an-api-key-desktop-app) hierboven voor gedetailleerde stappen over het verkrijgen van een OpenRouter-sleutel.

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
### De app vertaalt, herschrijft of transformeert tekst niet

Controleer of:

- u een model hebt geselecteerd in de werkbalk
- minstens één model is vermeld in [**Instellingen** > **Modellen**](#models)
- uw API-installatie werkt

Als u de desktop-app gebruikt:

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

Probeer een of meer van de volgende:

- kies een ander model
- gebruik een kortere invoer
- schakel **Vertaling in realtime (tijdens typen)** uit in [**Instellingen** > **Algemene instellingen**](#general-settings)
- gebruik gratis modellen voor eenvoudige taken (zie [Modellen](#models))

<br/>

<a id="the-interface-is-in-the-wrong-language"></a>
### De interface is in de verkeerde taal

Klik op het wereldbal-icoon in de [werkbalk](#toolbar) en kies uw gewenste **Taal van de interface**.

<br/>

<a id="the-text-is-too-small-or-hard-to-read"></a>
### De tekst is te klein of moeilijk leesbaar

Open [**Instellingen** > **Algemene instellingen**](#general-settings) en wijzig:

- **Lettertypefamilie**
- **Grootte**

<br/>

<a id="dashboard-charts-are-empty"></a>
### Dashboardgrafieken zijn leeg

Dit is normaal als:

- u alleen **gratis modellen** gebruikt (kostengrafieken blijven leeg)
- het geselecteerde **tijdfilter** het tijdsbereik waarin oproepen zijn gedaan, niet omvat — probeer **Alles** om te controleren

Als grafieken nog steeds leeg zijn na het kiezen van **Alles**, controleer dan of oproepen verschijnen in [**Geschiedenis**](#history) of in het tabblad **Alle oproepen**.

<br/>

<a id="cost-shows-not-available-or-seems-wrong"></a>

### Kosten tonen 'niet beschikbaar' of lijken onjuist

Wanneer u modellen gebruikt via **OpenRouter**, toont de app uw werkelijke kosten zoals gerapporteerd door OpenRouter.

Voor **andere providers** (directe OpenAI, directe Anthropic, enz.) wordt de kost geschat op basis van prijsgegevens gepubliceerd door OpenRouter. Als er geen overeenkomende prijs gevonden wordt voor een model, verschijnt de kost als **niet beschikbaar** en wordt deze niet opgeteld bij uw lopende totaal.

<br/>

<a id="total-cost-does-not-match-my-provider-bill"></a>
### Het totaal komt niet overeen met mijn providerfactuur

Alle kostenbedragen in de app zijn **schattingen ter informatie**, geen officiële facturen.

Om het totaal dichter bij uw werkelijke OpenRouter-uitgaven te brengen, open [**Instellingen** > **Kostenbijhouding**](#cost-tracking) en klik op **Synchroniseer met API-sleutelgebruik**.

<br/>

<a id="the-history-page-is-missing-from-the-sidebar"></a>
### De geschiedenispagina ontbreekt in de zijbalk

**Voer uitvoeringsgeschiedenis bij** is mogelijk uitgeschakeld. Ga naar [**Instellingen** > **Algemene instellingen**](#general-settings) en schakel deze optie in. Houd er rekening mee dat inschakelen geen eerder verwijderde geschiedenisgegevens herstelt.

<br/>

<a id="web-app-session-expired"></a>
### Webapp: onverwacht doorgestuurd naar de aanmeldpagina

Uw sessie is mogelijk verlopen. Meld u opnieuw aan. Als dit regelmatig gebeurt, controleer dan de serverconfiguratie voor de sessieverlooptijd.

<br/>

<a id="dashboard-shows-no-data-for-other-users"></a>
### Dashboard toont geen gegevens voor andere gebruikers (web)

Alleen **beheerders** kunnen gegevens van alle gebruikers weergeven via het **Gebruikers**-filter. Standaardgebruikers zien per ontwerp alleen hun eigen activiteit.

<br/>

<a id="i-changed-a-prompt-and-lost-the-edits"></a>
### Ik heb een aanwijzing gewijzigd en de bewerkingen verloren

Wanneer u een aanwijzing bewerkt, klik altijd op **Opslaan** voordat u op **Terug naar uitvoeren** klikt.

<br/><br/>

<a id="quick-tips"></a>
## Snelle tips

- Begin met [**Vertalen**](#translate) om te controleren of uw setup werkt voordat u doorgaat naar [**Herschrijven**](#rewrite) of [**Transformeren**](#transform).
- Gebruik [**Herschrijven**](#rewrite) voor alledaagse taalverbeteringen.
- Gebruik [**Transformeren**](#transform) wanneer u een herhaalbare werkwijze nodig heeft voor een specifieke taak.
- Gebruik [**Dashboard**](#dashboard) als u gebruik en kosten in de gaten wilt houden.
- Gebruik [**Geschiedenis**](#history) om eerdere bewerkingen en hun volledige invoer/uitvoertekst te bekijken.
- Exporteer regelmatig aanwijzingen als u een aanwijzingsbibliotheek opbouwt die u veilig wilt bewaren (zie [Transformeer aanwijzingen](#transform-prompts)) of als u deze met anderen wilt delen.

<br/><br/>

<a id="disclaimer"></a>
## Aansprakelijkheidsbeperking

Productnamen en iconen zijn eigendom van hun respectieve eigenaren en worden uitsluitend gebruikt voor identificatiedoeleinden. Deze software is niet verbonden met of goedgekeurd door enige van de genoemde merken.

<br/><br/>

<a id="license"></a>
## Licentie

Copyright © 2026 Waldemar Scudeller Jr.

[Apache Licentie 2.0](LICENSE)