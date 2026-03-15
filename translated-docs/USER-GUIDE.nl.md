---
translated_at: "2026-03-15T22:08:17.067Z"
source_hash: "69732149de931f2a0059ecf9073871caedaa431362e32c010e7d93bd3cbd76bc"
source_mtime: 1773611603946.006
model: "stepfun/step-3.5-flash:free"
---
<a id="transrewrt-user-guide"></a>
# Transrewrt Gebruikershandleiding

<br />

<a id="introduction"></a>
## Inleiding

Transrewrt helpt je op drie manieren met text:

- **Vertalen** – zet tekst om van de ene naar de andere taal.
- **Herschrijven** – verwoord tekst in een andere stijl, zoals duidelijker, korter of formeler.
- **Transformeren** – verwerk tekst met behulp van aangepaste AI-instructies, zogenaamde prompts.

<br />

Deze gids legt uit hoe je de app gebruikt nadat deze geïnstalleerd en actief is. Voor installatiestappen, zie het hoofd-[README](../README.md).

<br />

> ℹ️ **LET OP**<br/>
> Transrewrt is beschikbaar als desktop-app voor Windows en Linux, en als zelf-gehoste webapp. Deze handleiding richt zich op het dagelijks gebruik van de app. Waar iets alleen van toepassing is op één versie, staat dit duidelijk gemarkeerd.

<small>**Lees in andere talen:** [English (UK)](../USER-GUIDE.md) · [Português (BR)](USER-GUIDE.pt-BR.md) · [العربية](USER-GUIDE.ar.md) · [বাংলা](USER-GUIDE.bn.md) · [Català](USER-GUIDE.ca.md) · [简体中文](USER-GUIDE.zh-CN.md) · [繁體中文](USER-GUIDE.zh-TW.md) · [Hrvatski](USER-GUIDE.hr.md) · [Čeština](USER-GUIDE.cs.md) · [Nederlands](USER-GUIDE.nl.md) · [English (US)](USER-GUIDE.en-US.md) · [Filipino](USER-GUIDE.tl.md) · [Français](USER-GUIDE.fr.md) · [Deutsch](USER-GUIDE.de.md) · [Ελληνικά](USER-GUIDE.el.md) · [हिन्दी](USER-GUIDE.hi.md) · [Magyar](USER-GUIDE.hu.md) · [Italiano](USER-GUIDE.it.md) · [日本語](USER-GUIDE.ja.md) · [Basa Jawa](USER-GUIDE.jv.md) · [한국어](USER-GUIDE.ko.md) · [Bahasa Melayu](USER-GUIDE.ms.md) · [فارسی](USER-GUIDE.fa.md) · [Polski](USER-GUIDE.pl.md) · [Português (PT)](USER-GUIDE.pt.md) · [ਪੰਜਾਬੀ](USER-GUIDE.pa.md) · [Română](USER-GUIDE.ro.md) · [Русский](USER-GUIDE.ru.md) · [Slovenčina](USER-GUIDE.sk.md) · [Español](USER-GUIDE.es.md) · [Kiswahili](USER-GUIDE.sw.md) · [Svenska](USER-GUIDE.sv.md) · [తెలుగు](USER-GUIDE.te.md) · [ภาษาไทย](USER-GUIDE.th.md) · [Türkçe](USER-GUIDE.tr.md) · [Українська](USER-GUIDE.uk.md) · [Tiếng Việt](USER-GUIDE.vi.md)</small>

<br />

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Inhoudsopgave**

- [Voordat je begint](#voordat-je-begint)
  - [Een API-sleutel aanvragen (desktop-app)](#een-api-sleutel-aanvragen-desktop-app)
- [Aan de slag](#aan-de-slag)
- [Belangrijkste delen van het venster](#belangrijkste-delen-van-het-venster)
  - [ Zijbalk](#zijbalk)
  - [Werkbalk](#werkbalk)
  - [Invoer- en uitvoerpanelen](#invoer--en-uitvoerpanelen)
- [Vertalen](#vertalen)
  - [Tekst vertalen](#tekst-vertalen)
  - [Taalselectie](#taalselectie)
  - [Handige vertaalinstellingen](#handige-vertaalinstellingen)
  - [Sneltoetsen](#sneltoetsen)
- [Herschrijven](#herschrijven)
  - [Tekst herschrijven](#tekst-herschrijven)
- [Transformeren](#transformeren)
  - [Een bestaande prompt uitvoeren](#een-bestaande-prompt-uitvoeren)
  - [Als je nog geen prompts hebt](#als-je-nog-geen-prompts-hebt)
  - [Een prompt snel maken](#een-prompt-snel-maken)
  - [Een prompt bewerken](#een-prompt-bewerken)
  - [Een prompt testen voor gebruik](#een-prompt-testen-voor-gebruik)
  - [Opgeslagen prompts beheren](#opgeslagen-prompts-beheren)
- [Dashboard](#dashboard)
  - [De gegevens filteren](#de-gegevens-filteren)
  - [Dashboard-tabbladen](#dashboard-tabbladen)
  - [Gegevens exporteren](#gegevens-exporteren)
  - [Opgeslagen records voor een model verwijderen](#opgeslagen-records-voor-een-model-verwijderen)
- [Instellingen](#instellingen)
  - [Algemene instellingen](#algemene-instellingen)
  - [Modellen](#modellen)
  - [Talen](#talen)
  - [Kosten Tracking](#kosten-tracking)
  - [Transform-prompt](#transform-prompt)
  - [Gebruikers](#gebruikers)
  - [API-configuratie](#api-configuratie)
  - [Over](#over)
- [Veelvoorkomende problemen](#veelvoorkomende-problemen)
  - [De app zal geen tekst vertalen, herschrijven of transformeren](#de-app-zal-geen-tekst-vertalen-herschrijven-of-transformeren)
  - [De modellenlijst is leeg](#de-modellenlijst-is-leeg)
  - [Het resultaat is te traag of te duur](#het-resultaat-is-te-traag-of-te-duur)
  - [De interface is in de verkeerde taal](#de-interface-is-in-de-verkeerde-taals)
  - [De tekst is te klein of moeilijk leesbaar](#de-tekst-is-te-klein-of-moeilijk-leesbaar)
  - [Ik heb een prompt aangepast en de wijzigingen kwam kwijt](#ik-heb-een-prompt-aangepast-en-de-wijzigingen-kwam-kwijt)
- [Snelle tips](#snelle-tips)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br /><br />

<a id="before-you-start"></a>

## Voordat u begint

Om Transrewrt te gebruiken, heeft u toegang nodig tot de AI-service via OpenRouter.

U hoeft geen betaald model te kiezen voor u begint. De app bevat altijd een ingebouwd **gratis** model, dus voor normaal gebruik is dat genoeg om te beginnen met tekst vertalen, herschrijven en transformeren.

In duidelijke taal:

- Een **model** is de AI-engine die het werk verricht.
- Een **API-sleutel** is uw persoonlijke toegangsgegevens voor die service.

Als u de **desktop-app** gebruikt, heeft u een API-sleutel nodig. Voor gedetailleerde stappen, zie [Hoe u een API-sleutel krijgt](#how-to-get-an-api-key-desktop-app) hieronder. In het kort: maak een account aan bij [OpenRouter](https://openrouter.ai), ga naar de [Sleutels](https://openrouter.ai/keys) pagina, maak een nieuwe sleutel aan, en plak deze in [**Instellingen** > **API-configuratie**](#api-config) in Transrewrt.

Als u de **webversie** gebruikt, heeft de serverbeheerder dit meestal voor u ingesteld, dus u hoeft normaal gesproken zelf geen API-sleutel in te voeren.

<br />

<a id="how-to-get-an-api-key-desktop-app"></a>
### Hoe u een API-sleutel krijgt (desktop-app)

Als u de desktop-app gebruikt, volg dan deze stappen:

1. Ga in uw webbrowser naar [OpenRouter](https://openrouter.ai).
2. Maak een account aan of meld u aan.
3. Open de [Sleutels](https://openrouter.ai/keys) pagina.
4. Klik op de knop om een nieuwe API-sleutel aan te maken.
5. Geef de sleutel een naam zodat u deze later kunt herkennen.
6. Kopieer de nieuwe API-sleutel.
7. Ga terug naar Transrewrt en open **Instellingen** > **API-configuratie**.
8. Plak de sleutel in **OpenRouter API-sleutel**.
9. Klik op **API-configuratie testen** om te controleren of het werkt.

> ℹ️ **OPMERKING**<br/>
> U kunt beginnen met de gratis route van OpenRouter of een van de andere beschikbare gratis modellen. In veel gevallen is dat genoeg om Transrewrt te beginnen gebruiken zonder een betaald model te kiezen.

<br /><br />

<a id="getting-started"></a>
## Aan de slag

Als u Transrewrt voor het eerst gebruikt, volg dan deze volgorde:

1. Open de app.
2. Kies uw **interfacetaal** via het wereldbolpictogram indien nodig.
3. Als u de **desktop-app** gebruikt, open dan [**Instellingen** > **API-configuratie**](#api-config), plak uw OpenRouter API-sleutel, en klik op **API-configuratie testen**.
4. Open [**Instellingen** > **Modellen**](#modellen) en voeg een of meer modellen toe aan **Geselecteerde modellen**.
5. Open [**Instellingen** > **Talen**](#talen) en kies uw **Top-talen** als u wilt dat uw meestgebruikte talen eerst verschijnen.
6. Ga naar **Vertalen** en voer een eenvoudige vertaling uit om te controleren of alles werkt.
7. Wanneer dit werkt, probeer dan **Herschrijven** en daarna **Transformeren**.

Deze volgorde is belangrijk. Het voorkomt het meest voorkomende probleem bij eerste gebruik: een taak proberen uit te voeren voordat de app een werkende API-verbinding of een geselecteerd model heeft.

<br /><br />

<a id="main-parts-of-the-window"></a>
## Hoofdonderdelen van het venster

De app is verdeeld in drie main gebieden:

- De **zijbalk** aan de linkerkant.
- De **werkbalk** bovenaan.
- Het **werkgebied** in het midden.

<br />

<a id="sidebar"></a>
### Zijbalk

Gebruik de zijbalk om door de app te navigeren:

<br />

<table>
  <tr>
    <td valign="top">
       <img src="../images/screenshots/nl/sidebar.png" alt="Applicatiezijbalk" style="max-width: 100%; border: 1px solid #ddd; border-radius: 4px;">
    </td>
    <td valign="top">
      <br />
      <ul>
        <li><strong>Vertalen</strong> opent het vertaalwerkgebied.</li>
        <li><strong>Herschrijven</strong> opent het herschrijfwerkgebied.</li>
        <li><strong>Transformeren</strong> opent het aangepaste promptwerkgebied.</li>
        <li><strong>Dashboard</strong> toont informatie over gebruik en kosten.</li>
        <li><strong>Instellingen</strong> opent het instellingenpaneel.</li>
        <li><strong>Gebruiker</strong> toont de gebruikersnaam van de ingelogde gebruiker (alleen web).</li>
      </ul>
      <br />
      <p>U kunt de zijbalk ook inklappen voor meer ruimte door op het pictogram naast het app-logo te klikken.</p>
    </td>
  </tr>
</table>

<br />

<a id="toolbar"></a>
### Werkbalk

De werkbalk verandert iets afhankelijk van waar u in de app bent.

- Aan de linkerkant toont het de huidige pagina naam.
- Aan de rechterkant toont het de **modelkiezer** en de **interfacetaal**-besturing.

De **modelkiezer** stelt u in staat om te kiezen welke AI-engine u wilt gebruiken voor de huidige taak.

  ![Modelkiezer](../images/screenshots/nl/model-selector.png)

> ℹ️ **OPMERKING**<br/>
> Sommige gratis modellen kunnen tijdelijk stoppen met werken als ze niet beschikbaar zijn of een gebruikslimiet hebben bereikt. Als dat gebeurt, verwijdert de app dat model automatisch van uw lijst.


De **wereldbolpictogram + taalcodes** verandert de app-interfacetaal, zoals menu's en knoppen. Het verandert **niet** de vertaaltalen die worden gebruikt in **Vertalen**.

  ![Interface-taalkiezer](../images/screenshots/nl/language-selector.png)

<br />

<a id="input-and-output-panels"></a>

### Invoer- en uitvoerpanelen

De meeste werkruimtes gebruiken een **Invoer**paneel aan de linkerzijde en een **Uitvoer**paneel aan de rechterzijde.

Het **Invoer**paneel toont:

- Aantal tekens
- Aantal woorden
- Aantal alinea's

Het **Uitvoer**paneel kan het volgende tonen:

- Hoe lang de taak duurde
- De kosten van die taak
- Je lopende totaalkosten
- **TPS** (tokens per seconde), een eenvoudige snelheidsmaatstaf
- Aantal tekens, woorden en alinea's
- Het gebruikte model

Als je je afvraagt wat de technische termen betekenen:

- **Token** betekent een klein stukje tekst. Je kunt het zien als een deel van een woord of een kort woord.
- **TPS** betekent hoeveel van die tekststukjes het model per seconde verwerkt.

<br /><br />

<a id="translate"></a>
## Vertalen

Gebruik **Vertalen** als je tekst van de ene naar de andere taal wilt converteren.

![Vertaalwerkruimte](../images/screenshots/nl/translate.png)

<br />

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

<br />

<a id="language-selection"></a>
### Taalselectie

- **Van** kan een specifieke taal zijn of **Detecteer taal**.
- **Naar** is de taal waarin je het resultaat wilt hebben.

Je geselecteerde **Top talen** verschijnen bovenaan de lijst. Je kunt deze instellen in [**Instellingen** > **Talen**](#languages).

<br />

<a id="helpful-translation-settings"></a>
### Handige vertaalinstellingen

In [**Instellingen** > **Algemene instellingen**](#general-settings) kun je wijzigen hoe vertalen werkt:

- **Automatisch vertalen bij plakken** start een vertaling zodra je tekst plakt.
- **Resultaat automatisch naar klembord kopiëren** kopieert het resultaat automatisch na een geslaagde uitvoering.
- **Real-time vertalen (tijdens typen)** voert vertalingen uit terwijl je typt.
- **Time-out (ms)** bepaalt hoe lang de app wacht voordat een real-time vertaling wordt uitgevoerd.

<br />

<a id="keyboard-shortcuts"></a>
### Sneltoetsen

In [**Instellingen** > **Algemene instellingen**](#general-settings) bepaalt **Gedrag voor ENTER** wat er gebeurt als je op Enter drukt:

- **Enter** kan de taak uitvoeren en **Shift+Enter** kan een nieuwe regel toevoegen.
- Of de app kan het omgekeerde doen.

De huidige sneltoets wordt ook getoond op de **Vertalen**-knop.

<br /><br />

<a id="rewrite"></a>
## Herschrijven

Gebruik **Herschrijven** als je de formulering wilt verbeteren zonder de hoofdbedoeling te veranderen.

![Herschrijfwerkruimte](../images/screenshots/nl/rewrite.png)

Dit is nuttig voor:

- spelling en grammatica verbeteren
- duidelijker maken van tekst
- formeler of informeler maken van tekst
- inkorten of uitbreiden van tekst
- technischer laten klinken van tekst

<br />

<a id="rewrite-text"></a>
### Tekst herschrijven

1. Open **Herschrijven**.
2. Kies een **Modus**.
3. Kies een model in de werkbalk.
4. Typ of plak tekst in **Invoer**.
5. Klik op **Herschrijven**.
6. Bekijk het resultaat in **Uitvoer**.

Hetzelfde Enter-toetsgedrag dat wordt beschreven in [**Vertalen**](#keyboard-shortcuts) geldt ook hier.

<br /><br />

<a id="transform"></a>
## Transformeren

Gebruik **Transformeren** als je wilt dat de AI een set aanpassingsinstructies volgt.

![Transformeerwerkruimte](../images/screenshots/nl/transform.png)

Dit is het meest flexibele onderdeel van de app. Je kunt het gebruiken voor taken zoals:

- notities samenvatten
- ruwe tekst omzetten in een verzorgde e-mail
- kernpunten extraheren
- tekst omzetten naar een specifieke opmaak

<br />

<a id="run-an-existing-prompt"></a>
### Een bestaande prompt uitvoeren

1. Open **Transformeren**.
2. Kies een prompt uit de promptlijst.
3. Als een **Doel**-taalvakje verschijnt, kies dan een taal als je dat wilt.
4. Typ of plak tekst in **Invoer**.
5. Klik op **Transformeren**.
6. Lees het resultaat in **Uitvoer**.

<br />

<a id="if-you-have-no-prompts-yet"></a>
### Als je nog geen prompts hebt

Als je promptlijst leeg is, klik op **Laad voorbeeldprompts**. Dit voegt ingebouwde voorbeelden toe zodat je snel kunt beginnen.

> ℹ️ **OPMERKING**<br/>
> Voorbeeldprompts zijn in het Engels. Na het laden ervan kun je een prompt bewerken en **Vertaal prompt** gebruiken als je de prompttekst voor een andere taal wilt aanpassen.

<br />

<a id="create-a-prompt-quickly"></a>

### Maak snel een prompt

De snelste manier om een prompt te maken is:

1. Klik op **Nieuwe prompt**.
2. Klik op **Genereer prompt**.
3. Beschrijf wat je wilt dat de prompt doet.
4. Kies een model.
5. Laat de app een concept voor je maken.
6. Bekijk het concept en klik op **Opslaan**.

![Generate prompt](../images/screenshots/nl/transform-generate.png)


<br />

### Een prompt bewerken

Wanneer je een prompt maakt of bewerkt, verschijnt de editor links en een testgebied rechts.

![Transform prompt editor](../images/screenshots/nl/transform-prompt-edit.png)

De belangrijkste velden zijn:

- **Promptnaam**: de naam die wordt getoond in de lijst met prompts.
- **Promptinstructies (optioneel)**: een korte hint die wordt getoond aan de gebruiker bij het uitvoeren van de prompt.
- **Modelrol**: de algemene rol die aan de AI is toegewezen, zoals 'Je bent een behulpzame assistent.'
- **Modelinstructies (één per lijn)**: de specifieke regels die je aan de AI wilt laten volgen.
- **Uitvoeromschrijving**: een kort woord dat het resultaat beschrijft, zoals 'samenvatting' of 'herschrijven'.
- **Temperatuur (0.0 → 1.0)**: een creativiteitsschijfje.
- **Vraag naar doeltaal**: voegt een doeltaalselector toe wanneer de prompt wordt uitgevoerd.

Als het technische term **Temperatuur** nieuw voor je is, denk er zo over:

- Een **lagere** temperatuur geeft stabielere, meer voorspelbare resultaten.
- Een **hogere** temperatuur geeft meer variatie en creativiteit.

Je kunt ook gebruiken:

- **`Genereer prompt`** om een nieuw concept te maken vanuit een eenvoudige beschrijving
- **`Verbeter prompt`** om een bestaande prompt te verfijnen
- **`Vertaal prompt`** om de promptvelden te vertalen

> ⚠️ **WAARSCHUWING**<br/>
> Klik op **`Opslaan`** voordat je op **`Terug naar Uitvoeren`** klikt. Als je teruggaat zonder op te slaan, gaan je aanpassingen verloren.

<br />

<a id="test-a-prompt-before-using-it"></a>
### Test een prompt voor gebruik

Het testpaneel aan de rechterkant stelt je in staat je prompt te proberen met voorbeeldtekst voordat je deze in je dagelijkse werk gebruikt.

Dit is handig wanneer:

- je een nieuwe prompt aan het bouwen bent
- je twee versies van een prompt vergelijkt
- je toon, lengte of uitvoerformaat wilt controleren

<br />

<a id="manage-saved-prompts"></a>
### Opgeslagen prompts beheren

Om opgeslagen prompts op één plek te beheren, open [**Instellingen** > **Transform Prompts**](#transform-prompts).

Daar kun je:

- je prompts tonen en verwijderen
- prompts exporteren als **JSON**, **CSV** of **XLSX**
- prompts importeren vanuit een bestand

<br /><br />

## Dashboard

Gebruik **Dashboard** om te zien hoeveel je de app gebruikt en wat dit kost.

![Dashboard summary](../images/screenshots/nl/dashboard-summary.png)

<br />

<a id="filter-the-data"></a>
### De gegevens filteren

Gebruik de-filterknoppen bovenaan om de tijdsperiode te wijzigen.

![Dashboard filters](../images/screenshots/nl/dashboard-filter.png)

> ℹ️ **NOTE**<br/>
> In de webversie kunnen beheerders ook een **Gebruiker**-filter zien. Hierdoor kunnen ze schakelen tussen **Alle gebruikers** en een individuele gebruiker.

<br />

<a id="dashboard-tabs"></a>
### Dashboard-tabbladen

- **Overzicht** geeft je een algemeen overzicht van gebruik en kosten.
- **Gebruik per** breek activiteit op per vertaaltaal, herschrijfmodus en transform-prompt.
- **Per Model** toont welke modellen je hebt gebruikt en wat deze hebben gekost.
- **Per Dag** toont dagelijkse totalen.
- **Alle Oproepen** toont de volledige oproepgeschiedenis en stelt je in staat deze te exporteren.

<br />

<a id="export-data"></a>
### Gegevens exporteren

De dashboardtabellen kunnen gegevens exporteren in:

- **JSON**
- **CSV**
- **XLSX**

Dit is handig als je activiteit buiten de app wilt bekijken of een rapport wilt delen.

<br />

<a id="delete-stored-records-for-a-model"></a>
### Opgeslagen records voor een model verwijderen

In **Per Model** of **Alle Oproepen** kun je opgeslagen records voor een model verwijderen.

> ⚠️ **WAARSCHUWING**<br/>
> Het verwijderen van opgeslagen records kan niet ongedaan worden gemaakt. Gebruik dit alleen als je zeker weet dat je die geschiedenis niet meer nodig hebt.

Om alle gegevens te verwijderen of records op basis van hun leeftijd te verwijderen, ga naar [**Instellingen** > **Kosten追踪**](#cost-tracking). Daar vind je opties om alle opgeslagen gegevens te verwijderen of alleen gegevens ouder dan een bepaalde datum.

<br /><br />

<a id="settings"></a>
## Instellingen

Open **Instellingen** vanuit de zijbalk om aan te passen hoe de app zich gedraagt.

De beschikbare tabbladen kunnen variëren:

- **API-configuratie** is alleen beschikbaar in de desktop-app.
- **Gebruikers** is alleen beschikbaar in de web-app, en alleen voor beheerders.

<br />

<a id="general-settings"></a>

### Algemene instellingen

Gebruik **Algemene Instellingen** om het typinggedrag en het uiterlijk te regelen.

**Gedrag**

- **Gedrag voor ENTER** kiest of Enter de taak uitvoert of een nieuwe regel invoegt.
- **Automatisch vertalen bij plakken** start de vertaling zodra je tekst plakt.
- **Resultaat automatisch naar klembord kopiëren** kopieert geslaagde resultaten automatisch.
- **Realtime vertaling (tijdens typen)** vertalt terwijl je typt.
- **Time-out (ms)** stelt de Wachttijd in voor realtime vertaling.

**Uiterlijk**

- **Kostenbreedte decimalen** verandert hoe kosten-decimaal worden weergegeven.
- **Lettertype familie** verandert het lettertype in de tekstpanelen.
- **Grootte** verandert de lettergrootte.
- **Alleen web:** **marge rond de app tonen** voegt extra ruimte rond de interface toe.

<br />

<a id="models"></a>
### Modellen

Gebruik **Instellingen** > **Modellen** om te kiezen welke modellen in de werkbalk verschijnen.

![Tabblad Models in Instellingen](../images/screenshots/nl/settings-models.png)

De pagina heeft twee lijsten:

- **Beschikbare Modellen** aan de linkerkant
- **Geselecteerde Modellen** aan de rechterkant

Nuttige besturingselementen zijn onder andere:

- **Modellen zoeken...** om een model op naam te vinden
- **Alleen gratis** om alleen gratis modellen te tonen
- **Verversen** om de lijst opnieuw te laden
- **Alles uitklappen** en **Alles inklappen** wanneer je sorteert op leverancier

Om een model toe te voegen, klik op **Toevoegen**.

Om een model te verwijderen, klik op het **X** ernaast in **Geselecteerde Modellen**.

Om de lijst te wissen, klik op **Alles deselecteren**. Het vereiste gratis model blijft in de lijst staan.

> ℹ️ **LET OP**<br/>
> Als je niet meteen credits aan OpenRouter wilt toevoegen,Begin dan met het inschakelen van **Alleen gratis** en het kiezen van de gratis modellen.

<br />

<a id="languages"></a>
### Talen

Gebruik **Instellingen** > **Talen** om de lijsten met talen die in de app worden gebruikt te organiseren.

- **Top-talen** worden vastgezet bovenaan de taallijsten in **Vertalen** en **Transformeren**.
- **Aangepaste taal** stelt je in staat een taal toe te voegen die niet in de ingebouwde lijst staat.

Als je een aangepaste taal toevoegt, verschijnt deze in de taalselectors naast de ingebouwde opties.

<br />

<a id="cost-tracking"></a>
### Kosten tracking

Gebruik **Instellingen** > **Kosten Tracking** om kosteninformatie te beheren.

- **Totale kosten** toont de lopende totaal.
- **Waarde kopiëren** kopieert het totaal naar het klembord.
- **Kosten opnieuw instellen** stelt het opgeslagen totaal terug op nul.
- **Synchroniseren met API-key gebruik** stelt het totaal gelijk aan het gebruik dat door OpenRouter wordt gerapporteerd.
- **API-key gebruik** toont gebruiksdETAILS, indien beschikbaar.
- **Kostengegevens verwijderen** verwijdert alle gegevens, of alleen inzendingen ouder dan een gekozen datum.

> ⚠️ **WAARSCHUWING**<br/>
> Gegevensverwijdering kan niet ongedaan worden gemaakt. Controleer voor het verwijderen of je je gegevens hebt geback-up of geëxporteerd via [**Dashboard** > **Alle oproepen**](#dashboard-tabs), anders gaan ze permanent verloren.

<br />

<a id="transform-prompts"></a>
### Transformeer prompts

Gebruik **Instellingen** > **Transformeer Prompts** om prompts in het groot te beheren.

Je kunt:

- je opgeslagen prompts nakijken
- prompts verwijderen
- prompts importeren uit een bestand
- prompts exporteren voor back-up of delen

<br />

<a id="users"></a>
### Gebruikers

**Alleen web - alleen beheerder**

Gebruik **Gebruikers** om gebruikersaccounts te beheren in de webversie. Je kunt gebruikers toevoegen, hun gegevens bijwerken, wachtwoorden opnieuw instellen en accounts verwijderen.

<br />

<a id="api-config"></a>
### API-configuratie

**Alleen desktop**

Gebruik **API-configuratie** om de desktop-app te koppelen aan OpenRouter of aan een Transrewrt-proxy.

- **OpenRouter API-key** is waar je je key plakt.
- **API-URL** is het service-adres. Laat dit op de standaard staan, tenzij je een andere hebt gekregen.
- **Transrewrt Proxy gebruiken** routeert verzoeken via een proxyservice in plaats van direct naar OpenRouter.
- **Key Seed** verschijnt wanneer de proxy-optie is ingeschakeld.
- **API-configuratie testen** controleert of de huidige configuratie werkt.

Voor gedetailleerde stappen voor het verkrijgen van je API-key, zie [Hoe kom ik aan een API-key (desktop-app)](#how-to-get-an-api-key-desktop-app) hierboven.

> ℹ️ **LET OP**<br/>
> Als je niet zeker bent wat **API-URL**, **Transrewrt Proxy gebruiken** of **Key Seed** betekenen, laat ze dan ongewijzigd en gebruik de standaard OpenRouter-configuratie. Meer informatie over de proxy is beschikbaar in het [Transrewrt Proxy-repository](https://github.com/wsj-br/transrewrt-proxy).


<br />

<a id="about"></a>

### Over

Het tabblad **Over** toont:

- de app-naam
- het versienummer
- de bouwdatum
- een link naar de projectrepository

<br /><br />

<a id="common-issues"></a>
## Veelvoorkomende problemen

Als iets niet werkt zoals verwacht, controleer dan eerst de volgende punten.

<br />

<a id="the-app-will-not-translate-rewrite-of-transform-text"></a>
### De app zal geen tekst vertalen, herschrijven of transformeren

Controleer dat:

- je een model hebt geselecteerd in de werkbalk
- er ten minste één model staat vermeld in [**Instellingen** > **Modellen**](#models)
- je API-instelling werkt

Als je de desktop-app gebruikt:

1. Open [**Instellingen** > **API-configuratie**](#api-config).
2. Controleer dat je API-sleutel is opgeslagen.
3. Klik op **API-configuratie testen**.

<br />

<a id="the-model-list-is-empty"></a>
### De modellenlijst is leeg

Open [**Instellingen** > **Modellen**](#models) en klik op **Verversen**.

Indien nodig:

- zoek naar een model
- schakel **Alleen gratis** in
- voeg een of meer modellen toe aan **Geselecteerde modellen**

<br />

<a id="the-result-is-too-slow-or-too-expensive"></a>
### Het resultaat is te traag of te duur

Probeer een of meer van deze opties:

- kies een ander model
- gebruik een kortere invoer
- schakel **Real-time vertaling (tijdens typen)** uit in [**Instellingen** > **Algemene instellingen**](#general-settings)
- gebruik gratis modellen voor eenvoudige taken (zie [Modellen](#models))

<br />

<a id="the-interface-is-in-the-wrong-language"></a>
### De interface is in de verkeerde taal

Klik op het globus-pictogram in de [werkbalk](#toolbar) en kies je voorkeurs-**Interfacetaal**.

<br />

<a id="the-text-is-too-small-or-hard-to-read"></a>
### De tekst is te klein of moeilijk leesbaar

Open [**Instellingen** > **Algemene instellingen**](#general-settings) en verander:

- **Lettertype**
- **Grootte**

<br />

<a id="i-changed-a-prompt-and-lost-the-edits"></a>
### Ik heb een prompt aangepast en de bewerkingen kwamen verloren

Bij het bewerken van een prompt, klik dan altijd op **Opslaan** voordat je klikt op **Terug naar Uitvoeren**.

<br /><br />

<a id="quick-tips"></a>
## Snelle tips

- Begin met [**Vertaal**](#translate) om er zeker van te zijn dat je instellingen werken voordat je doorgaat naar [**Herschrijf**](#rewrite) of [**Transformeer**](#transform).
- Gebruik [**Herschrijf**](#rewrite) voor alledaagse verbeteringen van de formulering.
- Gebruik [**Transformeer**](#transform) als je een herhaalbare workflow voor een specifieke taak nodig hebt.
- Gebruik [**Dashboard**](#dashboard) als je het gebruik en de kosten in de gaten wilt houden.
- Exporteer prompts regelmatig als je een promptbibliotheek bouwt die je veilig wilt bewaren (zie [Transformeer Prompts](#transform-prompts)).

<br /><br />

<a id="disclaimer"></a>
## Disclaimer

Productnamen en iconen behoren tot hun respectieve eigenaren en worden uitsluitend voor identificatiedoeleinden gebruikt. Deze software is niet gelieerd aan of goedgekeurd door een van de genoemde merken.

<br /><br />

<a id="license"></a>
## Licentie

Copyright © 2026 Waldemar Scudeller Jr.

[Apache License 2.0](LICENSE)