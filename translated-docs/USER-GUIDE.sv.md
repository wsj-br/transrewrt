---
translated_at: "2026-03-26T01:06:16.603Z"
source_hash: "87f5e7618cbfd3084efeecba28440ecccb03450da2ae8fe4c6f91c75cb7f4981"
source_mtime: 1774482557035.2158
model: "qwen/qwen3-235b-a22b-2507"
---
![Transrewrt-banner](../images/transrewrt_banner.png)

<a id="transrewrt-user-guide"></a>
# Användarhandbok

<br/>

<a id="introduction"></a>
## Introduktion

Transrewrt hjälper dig att arbeta med text på tre huvudsakliga sätt:

- **Översätt** – omvandla text från ett språk till ett annat.
- **Skriv om** – formulera om text i en annan stil, till exempel tydligare, kortare eller mer formell.
- **Transformera** – bearbeta text med anpassade AI-instruktioner kallade prompts.

<br/>

Den här handboken förklarar hur du använder appen när den är installerad och igång. För installationsanvisningar, se huvudfilen **[README](README.sv.md)**.

<br/>

> ℹ️ **OBS**<br/>
> Transrewrt finns tillgängligt som skrivbordsapp för Windows och Linux, samt som self-hostad webbapp. Den här handboken fokuserar på appens dagliga användning. När något endast gäller för en version markeras det tydligt.

<small>**Läs på andra språk:** </small>
<small id="lang-list"> [English (UK)](../USER-GUIDE.md) · [Português (BR)](USER-GUIDE.pt-BR.md) · [العربية](USER-GUIDE.ar.md) · [বাংলা](USER-GUIDE.bn.md) · [Català](USER-GUIDE.ca.md) · [简体中文](USER-GUIDE.zh-CN.md) · [繁體中文](USER-GUIDE.zh-TW.md) · [Hrvatski](USER-GUIDE.hr.md) · [Čeština](USER-GUIDE.cs.md) · [Nederlands](USER-GUIDE.nl.md) · [English (US)](USER-GUIDE.en-US.md) · [Filipino](USER-GUIDE.tl.md) · [Français](USER-GUIDE.fr.md) · [Deutsch](USER-GUIDE.de.md) · [Ελληνικά](USER-GUIDE.el.md) · [हिन्दी](USER-GUIDE.hi.md) · [Magyar](USER-GUIDE.hu.md) · [Italiano](USER-GUIDE.it.md) · [日本語](USER-GUIDE.ja.md) · [Basa Jawa](USER-GUIDE.jv.md) · [한국어](USER-GUIDE.ko.md) · [Bahasa Melayu](USER-GUIDE.ms.md) · [فارسی](USER-GUIDE.fa.md) · [Polski](USER-GUIDE.pl.md) · [Português (PT)](USER-GUIDE.pt.md) · [ਪੰਜਾਬੀ](USER-GUIDE.pa.md) · [Română](USER-GUIDE.ro.md) · [Русский](USER-GUIDE.ru.md) · [Slovenčina](USER-GUIDE.sk.md) · [Español](USER-GUIDE.es.md) · [Kiswahili](USER-GUIDE.sw.md) · [Svenska](USER-GUIDE.sv.md) · [తెలుగు](USER-GUIDE.te.md) · [ภาษาไทย](USER-GUIDE.th.md) · [Türkçe](USER-GUIDE.tr.md) · [Українська](USER-GUIDE.uk.md) · [Tiếng Việt](USER-GUIDE.vi.md)</small>

<small>
> **Obs på översättningar av gränssnitt och dokumentation:** Alla språk i gränssnittet utom det ursprungliga engelska (UK) har översatts med hjälp av AI-modeller; formuleringar kan vara ofullständiga eller innehålla fel.
</small>

<br/>


<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Innehållsförteckning**

- [Innan du börjar](#before-you-start)
  - [Så här skaffar du en gratis OpenRouter API-nyckel (skrivbordsapp)](#how-to-get-a-free-openrouter-api-key-desktop-app)
- [Kom igång](#getting-started)
- [Huvuddelar i fönstret](#main-parts-of-the-window)
  - [Sidofält](#sidebar)
  - [Verktygsfält](#toolbar)
  - [In- och utpaneler](#input-and-output-panels)
- [Översätt](#translate)
  - [Översätt text](#translate-text)
  - [Välja språk](#language-selection)
  - [Användbara översättningsinställningar](#helpful-translation-settings)
- [Skriv om](#rewrite)
- [Transformera](#transform)
  - [Kör en befintlig prompt](#run-an-existing-prompt)
  - [Om du inte har några prompts än](#if-you-have-no-prompts-yet)
  - [Skapa en prompt snabbt](#create-a-prompt-quickly)
  - [Redigera en prompt](#edit-a-prompt)
  - [Testa en prompt innan du använder den](#test-a-prompt-before-using-it)
- [Instrumentpanel](#dashboard)
  - [Filtrera data](#filter-the-data)
  - [Flikar i instrumentpanelen](#dashboard-tabs)
  - [Exportera data](#export-data)
  - [Ta bort lagrade poster för en modell](#delete-stored-records-for-a-model)
- [Historik](#history)
  - [Filtrera data](#filter-the-data-1)
  - [Exportera historikdata](#export-history-data)
- [Inställningar](#settings)
  - [Allmänna inställningar](#general-settings)
  - [Modeller](#models)
  - [Språk](#languages)
  - [Kostnadsövervakning](#cost-tracking)
  - [Transformationsprompts](#transform-prompts)
  - [Användare](#users)
  - [API-konfiguration](#api-config)
  - [Om](#about)
- [Vanliga problem](#common-issues)
  - [Appen översätter, skriver om eller transformerar inte text](#the-app-will-not-translate-rewrite-or-transform-text)
  - [Modellistan är tom](#the-model-list-is-empty)
  - [Resultatet är för långsamt eller för dyrt](#the-result-is-too-slow-or-too-expensive)
  - [Gränssnittet är på fel språk](#the-interface-is-in-the-wrong-language)
  - [Texten är för liten eller svår att läsa](#the-text-is-too-small-or-hard-to-read)
  - [Diagrammen i instrumentpanelen är tomma](#dashboard-charts-are-empty)
  - [Kostnaden visar "inte tillgänglig" eller verkar fel](#cost-shows-not-available-or-seems-wrong)
  - [Totalkostnaden stämmer inte med leverantörens faktura](#total-cost-does-not-match-my-provider-bill)
  - [Historiksida saknas i sidofältet](#the-history-page-is-missing-from-the-sidebar)
  - [Webbapp: omdirigeras till inloggningssidan oväntat](#web-app-redirected-to-the-login-page-unexpectedly)
  - [Instrumentpanelen visar ingen data för andra användare (webb)](#dashboard-shows-no-data-for-other-users-web)
  - [Jag ändrade en prompt men förlorade ändringarna](#i-changed-a-prompt-and-lost-the-edits)
- [Snabba tips](#quick-tips)
- [Ansvarsfriskrivning](#disclaimer)
- [Licens](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="before-you-start"></a>

## Innan du börjar

För att använda Transrewrt behöver du tillgång till minst en AI-leverantör. De leverantörer som stöds är: [OpenRouter](https://openrouter.ai) (som samlar många modeller), OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras och [Ollama](https://ollama.com) för lokala modeller.

Du behöver inte välja en betald modell för att komma igång. Så snart du lägger till din OpenRouter API-nyckel aktiverar appen automatiskt ett inbyggt **kostnadsfritt** alternativ för OpenRouter. Detta gör att du direkt kan börja översätta, omskriva och omvandla text. Alternativt kan du också skaffa en gratis API-nyckel från Cerebras, Google, Groq eller Mistral AI.

Med enkel förklaring:

- En **modell** är den AI-motor som utför arbetet. Modeller visas med ett **leverantörs-prefix** (till exempel `openrouter/…`, `openai/…`, `ollama/…`).
- En **API-nyckel** (eller för Ollama, en **bas-URL**) är hur appen kommunicerar med den leverantören.

Om du använder **skrivbordsappen**, lägg till nycklar i [**Inställningar** > **API-konfiguration**](#api-config) för varje leverantör du använder. För endast OpenRouter-användning, se [Så här får du en API-nyckel](#how-to-get-an-api-key-desktop-app) nedan. Om du inte vill använda en API-nyckel kan du istället installera Ollama (från [ollama.com](https://ollama.com)) och använda lokala modeller, till exempel `translategemma:4b`.

Om du använder den **webbaserade versionen**, konfigurerar serverägaren leverantörerna med hjälp av miljövariabler, så du kan inte ange API-nycklar direkt i appen.

<br/>

<a id="how-to-get-an-api-key-desktop-app"></a>
### Så här får du en gratis OpenRouter API-nyckel (skrivbordsapp)

Om du använder skrivbordsappen, följ dessa steg:

1. Gå till [OpenRouter](https://openrouter.ai) i din webbläsare.
2. Skapa ett konto eller logga in.
3. Öppna sidan [Keys](https://openrouter.ai/keys).
4. Klicka på knappen för att skapa en ny API-nyckel.
5. Ge nyckeln ett namn så att du kan känna igen den senare.
6. Kopiera den nya API-nyckeln.
7. Återgå till Transrewrt och öppna **Inställningar** > **API-konfiguration**.
8. Klistra in nyckeln i fältet **OpenRouter API-nyckel** (under **Inställningar** > **API-konfiguration**).
9. Klicka på **Test OpenRouter key** för att säkerställa att den fungerar.

<br/><br/>

<a id="getting-started"></a>
## Komma igång

Om detta är första gången du använder Transrewrt, följ denna ordning:

1. Öppna appen.
2. Välj ditt **gränssnittsspråk** från jordglob-ikonen om det behövs.
3. Om du använder **skrivbordsappen**, öppna [**Inställningar** > **API-konfiguration**](#api-config), lägg till en API-nyckel för minst en leverantör (till exempel OpenRouter) och klicka på **Test** för att verifiera att den fungerar.
4. Öppna [**Inställningar** > **Modeller**](#models) och lägg till en eller flera modeller till **Valda modeller**.
5. Öppna [**Inställningar** > **Språk**](#languages) och välj dina **Favoritspråk** om du vill att dina mest använda språk ska visas längst upp.
6. Gå till **Översätt** och genomför en enkel översättning för att säkerställa att allt fungerar.
7. När det fungerar kan du testa **Omskriv** och sedan **Omforma**.

Orden är viktig. Detta förhindrar det vanligaste problemet för nybörjare: att försöka genomföra en uppgift innan appen har en fungerande API-anslutning eller vald modell.

<br/><br/>

<a id="main-parts-of-the-window"></a>
## Huvuddelar i fönstret

Appen är uppdelad i tre huvudsakliga områden:

- **Sidofältet** till vänster.
- **Verktygsfältet** överst.
- **Arbetsområdet** i mitten.

<br/>

<a id="sidebar"></a>
### Sidofält

Använd sidofältet för att navigera i appen. Du kan dölja sidofältet för mer utrymme genom att klicka på ikonen bredvid appens logotyp.

<br/>

<table>
  <tr>
    <td valign="top">
       <img src="../images/screenshots/sv/sidebar.png" alt="Applikationens sidofält" style="max-width: 100%; border: 1px solid #ddd; border-radius: 4px;">
    </td>
    <td valign="top">
      <br/><br/>
      <ul>
        <li><strong>Översätt</strong> öppnar arbetsytan för översättning.</li><br/>
        <li><strong>Omskriv</strong> öppnar arbetsytan för omskrivning.</li><br/>
        <li><strong>Omforma</strong> öppnar arbetsytan för anpassade prompts.</li><br/>
        <li><strong>Instrumentpanel</strong> visar användning och kostnadsinformation.</li><br/>
        <li><strong>Inställningar</strong> öppnar inställningspanelen.</li><br/>
        <li><strong>Historik</strong> visar användningshistorik med inmatad och genererad text.</li><br/>
        <li><strong>Användare</strong> visar inloggad användares användarnamn (endast webb).</li>
      </ul>
    </td>
  </tr>
</table>

<br/>

<a id="toolbar"></a>

### Verktygsfält

Verktygsfältet ändras något beroende på var du befinner dig i appen.

- Till vänster visas namnet på den aktuella sidan.
- Till höger visas **modellväljaren** och kontrollen för **gränssnittsspråk**.

Med **modellväljaren** kan du välja vilken AI-motor du vill använda för den aktuella uppgiften.

  ![Modellväljare](../images/screenshots/sv/model-selector.png)

Vissa kostnadsfria modeller kan inte alltid vara tillgängliga – ibland är de offline eller har en användningsgräns. Om detta inträffar tas modellen automatiskt bort från din tillgängliga lista. För att styra vilka modeller som visas, gå till [**Inställningar** > **Modeller**](#models) och redigera din modelllista.
Du kan också öppna modellinställningarna direkt genom att klicka på leverantörens ikon till vänster om modellnamnet i verktygsfältet.

<br/>

**Globikonen + språkkod** ändrar appens gränssnittsspråk, till exempel menyer och knappar. Den ändrar **inte** översättningsspråken som används i **Översätt**.

  ![Väljare för gränssnittsspråk](../images/screenshots/sv/language-selector.png)

<br/>

<a id="input-and-output-panels"></a>
### Indata- och utdatapanel

De flesta arbetsytor använder ett vänster **Inmatnings**-panel och ett höger **Utmatnings**-panel.

Varje panel visar också:

| **Indata**                                                          | **Utdata**                                                                                                                  |
|--------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------|
| - Teckenantal <br/>- Antal ord <br/>- Styckantal   <br/> | - Hur lång tid uppgiften tog<br/>- **TPS** (token per sekund)<br/>- Antal tecken, ord och stycken<br/>- Den använda modellen |


Om du undrar över de tekniska termerna:

- **Token** betyder en liten textbit. Du kan tänka på det som en del av ett ord eller ett kort ord.
- **TPS** betyder hur många sådana textdelar modellen behandlade varje sekund.

<br/>

Du kan också övervaka kostnaden för varje åtgärd (om tillgängligt) och den totala kostnaden, genom att aktivera alternativet `Visa kostnadsinformation för åtgärderna` under [**Inställningar** > **Allmänna inställningar**](#general-settings). 
 
<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="translate"></a>
## Översätt

Använd **Översätt** när du vill omvandla text från ett språk till ett annat.

![Arbetsyta för översättning](../images/screenshots/sv/translate.png)

<br/>

<a id="translate-text"></a>
### Översätt text

1. Öppna **Översätt**.
2. Välj ett språk i **Från**.
3. Välj ett språk i **Till**.
4. Välj en modell i verktygsfältet.
5. Skriv eller klistra in text i **Indata**.
6. Klicka på **Översätt**.
7. Läs resultatet i **Utdata**.
8. Använd kopieringsknappen om du vill kopiera resultatet.

<br/>

<a id="language-selection"></a>
### Språkval

- **Från** kan vara ett specifikt språk eller **Upptäck språk**.
- **Till** är språket du vill ha resultatet på.

Dina valda **Topp-språk** visas högst upp i listan. Du kan ställa in dessa i [**Inställningar** > **Språk**](#languages).

<br/>

<a id="helpful-translation-settings"></a>
### Användbara översättningsinställningar

I [**Inställningar** > **Allmänna inställningar**](#general-settings) kan du ändra hur översättning fungerar:

- **Automatisk översättning vid klistra in** kör en översättning så fort du klistrar in text.
- **Kopiera resultat till urklipp automatiskt** kopierar resultatet automatiskt efter en lyckad körning.
- **Översättning i realtid (medan du skriver)** kör översättningar medan du skriver.
- **Tidsgräns (ms)** styr hur länge appen väntar innan den kör en översättning i realtid.
- **Retur** styr vad som händer när du trycker på `Retur`:

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="rewrite"></a>
## Skriv om

Använd **Skriv om** när du vill förbättra formuleringen utan att ändra huvudsaken.

![Arbetsyta för omskrivning](../images/screenshots/sv/rewrite.png)

Detta är användbart för:

- att rätta stavning och grammatik
- göra texten tydligare
- göra texten mer formell eller mindre formell
- förkorta eller utvidga text
- få texten att låta mer teknisk

<br/>

> 💡 **TIPSPÅMINNELSE**<br/>
> När du använder läget "**Kontrollera stavning och grammatik**" visas en knapp `Visa ändringar` i utdatafönstret.
> Klicka på denna knapp för att visa eller dölja de gjorda korrigeringarna och visa specifika förändringar i din text.


<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="transform"></a>

## Omvandla

Använd **Omvandla** när du vill att AI:n ska följa en anpassad uppsättning instruktioner.

![Omvandla-arbetsytan](../images/screenshots/sv/transform.png)

Detta är den mest anpassningsbara delen i appen. Du kan använda den till uppgifter som:

- sammanfatta anteckningar
- förvandla rå text till ett färdigt e-postmeddelande
- extrahera nyckelpunkter
- konvertera text till ett visst format
- andra anpassade uppgifter med indatatexten

<br/>

<a id="run-an-existing-prompt"></a>
### Kör en befintlig prompt

1. Öppna **Omvandla**.
2. Välj en prompt från promptlistan.
3. Om en ruta för **Målspråk** visas, välj ett språk om du vill ha det.
4. Skriv eller klistra in text i **Indata**.
5. Klicka på **Omvandla**.
6. Läs resultatet i **Utdata**.

<br/>

<a id="if-you-have-no-prompts-yet"></a>
### Om du inte har några prompts ännu

Om din promptlista är tom, klicka på **Ladda exemplen på prompts**. Detta lägger till inbyggda exempel så att du kan komma igång snabbt.

<br/>

> ℹ️ **OBS**<br/>
> Exempel på prompts skickas i engelska. Efter att ha lagt till dem kan du redigera en prompt och använda **Översätt prompt** för att översätta den till ditt språk.

<br/>

<a id="create-a-prompt-quickly"></a>
### Skapa en prompt snabbt

Det snabbaste sättet att skapa en prompt är:

1. Klicka på **Ny prompt**.
2. Klicka på **Generera prompt**.
3. Beskriv vad du vill att prompten ska göra.
4. Välj en modell.
5. Låt appen skapa ett utkast åt dig.
6. Granska utkastet och klicka på **Spara**.

![Generera prompt](../images/screenshots/sv/transform-generate.png)


<br/>

<a id="edit-a-prompt"></a>
### Redigera en prompt

När du skapar eller redigerar en prompt visas en redigerare till vänster och ett testområde till höger.

![Redigerare för omvandla-prompt](../images/screenshots/sv/transform-prompt-edit.png)

De viktigaste fälten är:

- **Promptnamn**: namnet som visas i promptlistan.
- **Promptinstruktioner (valfritt)**: en kort handledning som visas för användaren när prompten körs.
- **Modellroll**: den övergripande roll som tilldelas AI, till exempel "Du är en hjälpsam assistent."
- **Modellinstruktioner (en per rad)**: de särskilda regler du vill att AI:n ska följa.
- **Beskrivning av utdata**: ett kort ord som beskriver resultatet, till exempel 'sammanfattning' eller 'omskrivning'.
- **Temperatur (0,0 → 1,0)**: hur modellen kommer att bete sig; se nedan.
- **Fråga efter målspråk**: lägger till en språkselector för målspråk när prompten körs.

Om det tekniska begreppet **Temperatur** är nytt för dig, tänk på det så här:

- En **lägre** temperatur ger mer stabila och förutsägbara resultat.
- En **högre** temperatur ger större variation och kreativitet.

Du kan också använda:

- **`Generera prompt`** för att skapa ett nytt utkast från en enkel beskrivning
- **`Förbättra prompt`** för att förbättra en befintlig prompt
- **`Översätt prompt`** för att översätta fälten i prompten

<br/>

> ⚠️ **VARNING**<br/>
> Klicka på **`Spara`** innan du klickar på **`Tillbaka till körning`**. Om du går tillbaka utan att spara kommer dina ändringar att gå förlorade.

<br/>

<a id="test-a-prompt-before-using-it"></a>
### Testa en prompt innan du använder den

Testpanelen till höger låter dig prova din prompt med exempeltext innan du använder den i ditt dagliga arbete.

Det är användbart när:

- du skapar en ny prompt
- du jämför två versioner av en prompt
- du vill kontrollera ton, längd eller format på utdata

<br/>

> ℹ️ **OBS**<br/>
> Du kan exportera och importera sparade prompts i [**Inställningar** > **Omvandla-prompts**](#transform-prompts).

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="dashboard"></a>
## Översikt

Använd **Översikt** för att se hur mycket du använder appen och vad det kostar (för betalda modeller).

![Sammanfattning av översikt](../images/screenshots/sv/dashboard-summary.png)


<br/>

> ℹ️ **OBS**<br/>
> Om du endast använder kostnadsfria modeller kommer kostnadsrelaterade diagram att vara tomma.

<br/>

<a id="filter-the-data"></a>
### Filtrera data

Använd filterknapparna högst upp för att ändra tidsintervallet.

![Filters för översikt](../images/screenshots/sv/dashboard-filter.png)

<br/>

> ℹ️ **OBS**<br/>
> **Användar**-filtret är endast synligt för administratörer i webbversionen. Ordinarie användare kommer inte att se detta filter, och det finns inte tillgängligt i skrivbordsappen.

<br/>

<a id="dashboard-tabs"></a>

### Dashboardflikar

- **Sammanfattning** ger dig en översikt över användning och kostnad.
- **Per användning** delar upp aktiviteten per översättningsspråk, omskrivningsläge och transformuppmaning.
- **Per modell** visar vilka modeller du använt och hur mycket de kostade.
- **Per dag** visar dagliga totaler.
- **Alla anrop** visar hela anropsloggen och låter dig exportera den.

<br/>

<a id="export-data"></a>
### Exportera data

Dashboardtabeller kan exportera data i formaten:

- **JSON**
- **CSV**
- **XLSX**

Det är användbart om du vill granska aktiviteten utanför appen eller dela en rapport.

<br/>

<a id="delete-stored-records-for-a-model"></a>
### Ta bort sparade poster för en modell

I flikarna **Per modell** eller **Alla anrop** kan du ta bort sparade poster för en modell genom att klicka på papperskorgsikonen.

> ⚠️ **VARNING**<br/>
> Borttagning av sparade poster kan inte ångras. Använd detta endast om du är säker på att du inte längre behöver den historiken.

För att ta bort alla data eller ta bort poster baserat på ålder, gå till [**Inställningar** > **Kostnadsspårning**](#cost-tracking). Där hittar du alternativ för att ta bort all lagrad data eller endast data som är äldre än ett visst datum.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="history"></a>
## Historik

Klicka på **Historik** för att se en logg över dina åtgärder i **Transrewrt**, inklusive indata och utdata för varje operation.

![Historiksida](../images/screenshots/sv/history.png)

<br/>

<a id="filter-the-history"></a>
### Filtrera data

**Historik** använder samma filter som sidan **Dashboard**. Använd dem för att välja tidsintervall.

![Dashboardfilter](../images/screenshots/sv/dashboard-filter.png)

<br/>

> ℹ️ **OBS**<br/>
> **Användar**-filtret är endast synligt för administratörer i webbversionen. Vanliga användare kommer inte att se detta filter, och det är inte tillgängligt i skrivbordsappen.

<br/>

<a id="export-history-data"></a>
### Exportera historikdata

Historiksidan kan exportera den filtrerade datan i följande format:

- **JSON**
- **CSV**
- **XLSX**

Det är användbart om du vill granska aktiviteten utanför appen eller dela en rapport.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="settings"></a>
## Inställningar

Öppna **Inställningar** från sidofältet för att anpassa hur appen beter sig.

De tillgängliga flikarna beror på plattform och din roll:

  | Flik                 | Skrivbord | Webb (admin) | Webb (vanlig användare) |
  |----------------------|:---------:|:------------:|:-----------------------:|
  | Allmänna inställningar |   ja    |      ja      |           ja            |
  | Modeller             |   ja    |      ja      |           ja            |
  | Språk                |   ja    |      ja      |           ja            |
  | Kostnadsspårning     |   ja    |      ja      |            —            |
  | Transformuppmaningar |   ja    |      ja      |           ja            |
  | Användare            |    —    |      ja      |            —            |
  | API-konfiguration    |   ja    |      ja      |            —            |
  | Om                   |   ja    |      ja      |           ja            |

<br/>

> ℹ️ **OBS**<br/>
> I webbversionen har varje användare sin egen konfiguration. Inställningar som valda modeller, språk, allmänna alternativ och transformuppmaningar sparas per användare. Ändringar du gör påverkar inte andra användare.

<br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="general-settings"></a>
### Allmänna inställningar

Använd **Allmänna inställningar** för att kontrollera beteendet vid skrivning, om körningsdetaljer sparas i **Historik** samt utseendet.

**Beteende**

- **Returknappens beteende** bestämmer om `Retur` kör uppgiften eller infogar en ny rad.
- **Automatisk översättning vid klistra in** startar översättning så fort du klistrar in text.
- **Kopiera resultat till urklipp automatiskt** kopierar lyckade resultat automatiskt.
- **Översättning i realtid (medan du skriver)** översätter medan du skriver.
- **Tidsavstängning (ms)** ställer in väntetiden för översättning i realtid.

**Historik**

- **Spara körningshistorik** styr om varje översättning, omskrivning och transformering sparar **indata och utdata** till sidofältets vyn [**Historik**](#history). Att stänga av detta kommer att be om bekräftelse; om du bekräftar kommer den sparade historiktexten att tas bort från databasen.
- **Ta bort historikdata** låter dig ta bort sparad text baserat på ålder (till exempel äldre än några månader, eller **alla data (rensa)**) med hjälp av **Ta bort data**. Detta påverkar endast sparad körningstext för **Historik**-vyn; det **tar inte bort** kostnad eller total användning. För att ta bort eller minska **kostnads**data, använd [**Inställningar** > **Kostnadsspårning**](#cost-tracking).

**Utseende**

- **Visa kostnadsinformation på åtgärderna** styr visningen av kostnaden per åtgärd (om tillgängligt) och den totala kostnaden i panelerna för utdata vid Översätt, Omskriv och Transformera.
- **Antal decimaler för kostnad** ändrar hur kostnadsdecimaler visas.
- **Endast webb:** **Visa marginal runt appen** lägger till extra utrymme runt gränssnittet.
- **Teckensnitt** ändrar skrivteckensnittet i textpanelerna.
- **Storlek** ändrar teckenstorleken.

<br/>

<a id="models"></a>

### Modeller

Använd **Inställningar** > **Modeller** för att välja vilka modeller som ska visas i verktygsfältet.

![Inställningar, fliken Modeller](../images/screenshots/sv/settings-models.png)

Sidan har två listor:

- **Tillgängliga modeller** till vänster
- **Valda modeller** till höger

Användbara kontroller inkluderar:

- **Sök modeller...** för att hitta en modell efter namn
- **Leverantörsflikar** för att begränsa listan till en motor (OpenRouter, OpenAI, Ollama, …)
- **Endast gratis** för att visa endast kostnadsfria modeller
- **Uppdatera** för att ladda om listan
- **Expandera alla** och **Komprimera alla** när du sorterar efter leverantör

Modell-ID:n inkluderar leverantörens prefix (t.ex. `openrouter/…` jämfört med `openai/…`). Beteckningar som **OpenAI (OpenRouter)** jämfört med **OpenAI (direkt)** visar hur trafiken dirigeras.

> ℹ️ **OBS**<br/>
> **OpenRouter Body Builder** (`openrouter/bodybuilder`) är en routermodell, inte en allmän chattmodell: dess svar är JSON som beskriver OpenRouter API-begärandekroppar (t.ex. en `requests`-array med `model` och `messages`). Om du använder den för **Översätt**, **Skriv om** eller **Transformera**, kommer resultatpanelen visa den här JSON-koden istället för färdig text. Välj en vanlig textmodell för dessa uppgifter. Se [Body Builder-modellens sida](https://openrouter.ai/openrouter/bodybuilder) på OpenRouter.

Åtgärder:

 - För att lägga till en modell, klicka på **Lägg till** eller var som helst i raden.

 - För att ta bort en modell, klicka på **X** bredvid den i **Valda modeller** eller på **Vald** i raden under Tillgängliga modeller.

 - För att rensa listan, klicka på **Avmarkera alla**. Den obligatoriska kostnadsfria modellen kommer att behållas i listan.

<br/>

> ℹ️ **OBS**<br/>
> Om du inte vill lägga till krediter på OpenRouter direkt, börja med att aktivera **Endast gratis** och välj de kostnadsfria modellerna (inget kreditkort krävs). Du kan också använda Ollama för att köra modeller lokalt utan API-nyckel.

<br/>

<a id="languages"></a>
### Språk

Använd **Inställningar** > **Språk** för att organisera språklistorna som används i appen.

- **Topp-språk** är fixerade längst upp i språklistorna i **Översätt** och **Transformera**.
- **Anpassat språk** gör att du kan lägga till ett språk som inte finns i den inbyggda listan.

Om du lägger till ett anpassat språk kommer det att visas i språkväljarna tillsammans med de inbyggda alternativen.

<br/>

<a id="cost-tracking"></a>
### Kostnadsöversikt

Använd **Inställningar** > **Kostnadsöversikt** för att hantera kostnadsinformation.

- **Total kostnad** visar löpande total.
- **Kopiera värde** kopierar totalen till urklipp.
- **Återställ kostnad** nollställer den sparade totalen.
- **Synkronisera med API-nyckelns användning** ställer in totalen så att den matchar användningen enligt din OpenRouter-profil (endast OpenRouter).
- **API-nyckelns användning** visar OpenRouter-användningsdetaljer, om tillgängligt.
- **Ta bort kostnadsdata** tar bort all data, eller endast poster äldre än ett valt datum.


**Kostnadsöversikt:** När du använder OpenRouter-modeller visar appen din faktiska användning och kostnader baserat på kostnadsinformation från OpenRouter. För andra leverantörer uppskattar appen kostnader med priser från OpenRouter. Om ingen prisinformation finns kan uppskattningen bli noll.

<br/>

> ℹ️ **OBS**<br/>
> **Alla kostnadssiffror är uppskattningar enbart till handledning, inte officiella fakturor.**

<br/>

> ⚠️ **VARNING**<br/>
> Data borttagen kan inte återställas. Innan du tar bort data, säkerhetskopiera eller exportera via [**Historik**](#history) 
> eller [**Instrumentpanel** > **Alla anrop**](#dashboard-tabs), annars kommer det förloras permanent. 
> All in-/ut-data kopplad till varje API-anropspost kommer också att tas bort.

<br/>

<a id="transform-prompts"></a>
### Transformationspåminnelser

Använd **Inställningar** > **Transformationspåminnelser** för att hantera påminnelser i stor skala.

Du kan:

- granska dina sparade påminnelser
- ta bort påminnelser
- importera påminnelser från en fil
- exportera påminnelser för säkerhetskopia eller delning

<br/>

<a id="users"></a>
### Användare

Använd **Användare** för att hantera användarkonton i webbversionen. Du kan lägga till användare, uppdatera deras uppgifter, återställa lösenord och ta bort konton.

<br/>

<a id="api-config"></a>
### API-konfiguration

De stödda leverantörerna är: OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras, och **Ollama** (lokala modeller via en bas-URL). Du behöver bara konfigurera de leverantörer du använder.

**Webbapplikation: endast administratör**

API-nycklar konfigureras via system- eller Docker-miljövariabler – de matas inte in i webbgränssnittet. Denna sida visar vilka leverantörer som har en nyckel konfigurerad och låter dig testa varje nyckel genom att klicka på knappen **`Testa`**.

<br/>

> ℹ️ **OBS**<br/>
> För att ändra en API-nyckel, uppdatera miljövariabeln i din system- eller Docker-konfiguration och starta om servern eller containern.

<br/>

**Skrivbordsapplikation**

Använd **API-konfig** för att lagra API-nycklar för varje leverantör du använder. För Ollama ska du ange **bas-URL** istället för en API-nyckel.

<br/>

> 💡 **Tips** <br/>
> Om du inte vill använda en API-nyckel eller betala för användning, kan du [ladda ner Ollama](https://ollama.com) och köra modeller (t.ex. `translategemma:4b`) gratis lokalt på din dator. Alternativt kan du skapa ett gratis OpenRouter-konto (inget kreditkort krävs) för att använda deras kostnadsfria modeller, eller skaffa en gratis API-nyckel från Cerebras, Google, Groq eller Mistral AI.

<br/>

- Lägg endast till de leverantörer du behöver. I **Inställningar** > **Modeller** börjar varje modell-ID med leverantörens namn (t.ex. `openrouter/openrouter/free`, `openai/gpt-4o`, `ollama/llama3`).

För att lägga till en API-nyckel, ange värdet i textfältet och klicka på **`Spara`**. För att ersätta en befintlig nyckel, klicka på **`Redigera`**. För att verifiera att nyckeln fungerar, klicka på **`Testa`**. För Ollamas bas-URL, klicka alltid på **`Testa`** för att kontrollera anslutningen.

<br/>

> ℹ️ **OBS**<br/>
> Du kan inte se det aktuella värdet på en API-nyckel. Du kan endast ersätta den med hjälp av knappen **`Redigera`**.
> API-nycklar lagras krypterade i konfigurationen.

<br/>

<a id="about"></a>

### Om

Fliken **Om** visar:

- programmets namn
- versionsnumret
- byggdatum
- en länk till projektets databas

<br/><br/>

<a id="common-issues"></a>
## Vanliga problem

Om något inte fungerar som förväntat, kontrollera följande punkter först.

<br/>

<a id="the-app-will-not-translate-rewrite-or-transform-text"></a>
### Appen översätter, skriver om eller omvandlar inte text

Kontrollera att:

- du har valt en modell i verktygsfältet
- minst en modell finns i [**Inställningar** > **Modeller**](#models)
- din API-konfiguration fungerar

Om du använder skrivbordsappen:

1. Öppna [**Inställningar** > **API-konfiguration**](#api-config).
2. Kontrollera att minst en API-nyckel är sparad.
3. Klicka på **Testa** bredvid leverantören för att bekräfta att nyckeln fungerar.

<br/>

<a id="the-model-list-is-empty"></a>
### Modellistan är tom

Öppna [**Inställningar** > **Modeller**](#models) och klicka på **Uppdatera**.

Om det behövs:

- sök efter en modell
- aktivera **Endast gratis**
- lägg till en eller flera modeller i **Valda modeller**

<br/>

<a id="the-result-is-too-slow-or-too-expensive"></a>
### Resultatet är för långsamt eller för dyrt

Försök med ett eller flera av följande:

- välj en annan modell
- använd kortare indata
- stäng av **Översättning i realtid (under skrivning)** i [**Inställningar** > **Allmänna inställningar**](#general-settings)
- använd kostnadsfria modeller för enkla uppgifter (se [Modeller](#models))

<br/>

<a id="the-interface-is-in-the-wrong-language"></a>
### Gränssnittet är på fel språk

Klicka på globikonen i [verktygsfältet](#toolbar) och välj önskat **Gränssnittsspråk**.

<br/>

<a id="the-text-is-too-small-or-hard-to-read"></a>
### Texten är för liten eller svår att läsa

Öppna [**Inställningar** > **Allmänna inställningar**](#general-settings) och ändra:

- **Teckensnitt**
- **Storlek**

<br/>

<a id="dashboard-charts-are-empty"></a>
### Instrumentpanelens diagram är tomma

Detta är normalt om:

- du endast använder **kostnadsfria modeller** (kostnadsdiagram kommer att vara tomma)
- det valda **tidsfiltret** inte omfattar den tidsperiod då anrop gjordes – prova **Alla** för att se

Om diagrammen fortfarande är tomma efter valet av **Alla**, kontrollera att anrop visas i [**Historik**](#history) eller i fliken **Alla anrop**.

<br/>

<a id="cost-shows-not-available-or-seems-wrong"></a>
### Kostnaden visar "inte tillgänglig" eller verkar felaktig

När du använder modeller via **OpenRouter** visar appen din faktiska kostnad enligt OpenRouter.

För **andra leverantörer** (OpenAI direkt, Anthropic direkt osv.) beräknas kostnaden utifrån prisdata från OpenRouter. Om det inte finns något matchande pris för en modell, visas kostnaden som **inte tillgänglig** och läggs inte till i din totala kostnad.

<br/>

<a id="total-cost-does-not-match-my-provider-bill"></a>
### Totalkostnaden stämmer inte med fakturan från leverantören

Alla kostnadsvärden i appen är **uppskattningar som endast avser vägledning**, inte officiella fakturor.

För att få ett totalt belopp som bättre motsvarar ditt faktiska OpenRouter-användande, öppna [**Inställningar** > **Kostnadsövervakning**](#cost-tracking) och klicka på **Synkronisera med API-nyckelns användning**.

<br/>

<a id="the-history-page-is-missing-from-the-sidebar"></a>
### Sidan Historik saknas i sidofältet

**Behåll körningshistorik** kan vara inaktiverat. Öppna [**Inställningar** > **Allmänna inställningar**](#general-settings) och aktivera det. Observera att det inte går att återställa tidigare borttagna data när funktionen aktiveras.

<br/>

<a id="web-app-session-expired"></a>
### Webbappen: omdirigerad till inloggningssidan utan varning

Din session kan ha gått ut. Logga in igen. Om det sker ofta, kontrollera serverns konfiguration för inställningarna av sessionens livslängd.

<br/>

<a id="dashboard-shows-no-data-for-other-users"></a>
### Instrumentpanelen visar ingen data för andra användare (webb)

Endast **administratörer** kan visa data från alla användare via filtret **Användare**. Vanliga användare ser endast sin egen aktivitet enligt designen.

<br/>

<a id="i-changed-a-prompt-and-lost-the-edits"></a>
### Jag ändrade en prompt och förlorade redigeringarna

När du redigerar en prompt, klicka alltid på **Spara** innan du klickar på **Tillbaka till kör**.

<br/><br/>

<a id="quick-tips"></a>
## Snabba tips

- Börja med [**Översätt**](#translate) för att säkerställa att din konfiguration fungerar innan du går vidare till [**Skriv om**](#rewrite) eller [**Omvandla**](#transform).
- Använd [**Skriv om**](#rewrite) för dagliga formuleringar förbättringar.
- Använd [**Omvandla**](#transform) när du behöver en återupprepad arbetsflöde för en viss uppgift.
- Använd [**Instrumentpanel**](#dashboard) om du vill övervaka förbrukning och kostnad.
- Använd [**Historik**](#history) för att granska tidigare operationer och hela in- och utdata.
- Exportera prompts regelbundet om du bygger en promptbibliotek som du vill förvara säkert (se [Omvandla prompts](#transform-prompts)) eller om du vill dela med dig av det till andra.

<br/><br/>

<a id="disclaimer"></a>

## Ansvarsfriskrivning

Produktnamn och ikoner tillhör sina respektive ägare och används endast för identifieringsändamål. Denna programvara är inte ansluten till eller godkänd av någon av de nämnda varumärkena.

<br/><br/>

<a id="license"></a>
## Licens

Upphovsrätt © 2026 Waldemar Scudeller Jr.

[Apache License 2.0](LICENSE)