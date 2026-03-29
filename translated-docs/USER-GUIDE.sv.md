---
translated_at: "2026-03-29T01:56:22.263Z"
source_hash: "8981b8db163153bfc443046fa20a49b33c92b9feebdee302f6ef60852f273472"
source_mtime: "2026-03-29T01:41:58.368Z"
model: "qwen/qwen3-235b-a22b-2507"
---
![Transrewrt-banderoll](../images/transrewrt_banner.png)


<a id="transrewrt-user-guide"></a>

# Användarhandbok

<br/>

<a id="introduction"></a>

## Introduktion

Transrewrt hjälper dig att arbeta med text på tre sätt:

- **Översätt** – konvertera text från ett språk till ett annat.
- **Skriv om** – formulera om texten i en annan stil, till exempel tydligare, kortare eller mer formell.
- **Transformera** – bearbeta text med anpassade AI-instruktioner som kallas prompts.

<br/>

Den här guiden förklarar hur du använder appen när den är installerad och igång. Instruktionssteg för installation finns i huvudfilen **[README](README.sv.md)**.

<br/>

> ℹ️ **OBS**<br/>
> Transrewrt finns tillgängligt som en skrivbordsapp för Windows och Linux samt som en självvärd webbapp. Den här guiden fokuserar på appens dagliga användning. Där något endast gäller för en version är det tydligt markerat.

<small>**Läs på andra språk:** </small>

<small id="lang-list"> [English (UK)](../USER-GUIDE.md) · [Português (BR)](USER-GUIDE.pt-BR.md) · [العربية](USER-GUIDE.ar.md) · [বাংলা](USER-GUIDE.bn.md) · [Català](USER-GUIDE.ca.md) · [简体中文](USER-GUIDE.zh-CN.md) · [繁體中文](USER-GUIDE.zh-TW.md) · [Hrvatski](USER-GUIDE.hr.md) · [Čeština](USER-GUIDE.cs.md) · [Nederlands](USER-GUIDE.nl.md) · [English (US)](USER-GUIDE.en-US.md) · [Filipino](USER-GUIDE.tl.md) · [Français](USER-GUIDE.fr.md) · [Deutsch](USER-GUIDE.de.md) · [Ελληνικά](USER-GUIDE.el.md) · [हिन्दी](USER-GUIDE.hi.md) · [Magyar](USER-GUIDE.hu.md) · [Italiano](USER-GUIDE.it.md) · [日本語](USER-GUIDE.ja.md) · [Basa Jawa](USER-GUIDE.jv.md) · [한국어](USER-GUIDE.ko.md) · [Bahasa Melayu](USER-GUIDE.ms.md) · [فارسی](USER-GUIDE.fa.md) · [Polski](USER-GUIDE.pl.md) · [Português (PT)](USER-GUIDE.pt.md) · [ਪੰਜਾਬੀ](USER-GUIDE.pa.md) · [Română](USER-GUIDE.ro.md) · [Русский](USER-GUIDE.ru.md) · [Slovenčina](USER-GUIDE.sk.md) · [Español](USER-GUIDE.es.md) · [Kiswahili](USER-GUIDE.sw.md) · [Svenska](USER-GUIDE.sv.md) · [తెలుగు](USER-GUIDE.te.md) · [ภาษาไทย](USER-GUIDE.th.md) · [Türkçe](USER-GUIDE.tr.md) · [Українська](USER-GUIDE.uk.md) · [Tiếng Việt](USER-GUIDE.vi.md)</small>

<small>

> **Obs på översättningar av gränssnitt och dokumentation:** Alla gränssnittsspråk utom originalspråket engelska (Storbritannien) 
> har översatts med hjälp av AI-modeller; formuleringarna kan vara otydliga eller innehålla fel.

</small>

<br/>


<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Innehållsförteckning**

- [Innan du börjar](#before-you-start)
  - [Så här får du en gratis OpenRouter API-nyckel (skrivbordsapp)](#how-to-get-a-free-openrouter-api-key-desktop-app)
- [Kom igång](#getting-started)
- [Huvuddelar i fönstret](#main-parts-of-the-window)
  - [Sidofält](#sidebar)
  - [Verktygsfält](#toolbar)
  - [Inmatnings- och utmatningsfönster](#input-and-output-panels)
- [Översätt](#translate)
  - [Översätt text](#translate-text)
  - [Språkval](#language-selection)
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
  - [Transformera prompter](#transform-prompts)
  - [Användare](#users)
  - [API-konfiguration](#api-config)
  - [Om](#about)
- [Vanliga problem](#common-issues)
  - [Appen översätter, omskriver eller omvandlar inte text](#the-app-will-not-translate-rewrite-or-transform-text)
  - [Modellistan är tom](#the-model-list-is-empty)
  - [Resultatet är för långsamt eller för dyrt](#the-result-is-too-slow-or-too-expensive)
  - [Gränssnittet är på fel språk](#the-interface-is-in-the-wrong-language)
  - [Texten är för liten eller svår att läsa](#the-text-is-too-small-or-hard-to-read)
  - [Diagrammen i instrumentpanelen är tomma](#dashboard-charts-are-empty)

- [Kostnaden visar "inte tillgänglig" eller verkar felaktig](#cost-shows-not-available-or-seems-wrong)
  - [Totalkostnaden stämmer inte med fakturan från leverantören](#total-cost-does-not-match-my-provider-bill)
  - [Historiksida saknas i sidofältet](#the-history-page-is-missing-from-the-sidebar)
  - [Webbapp: oavsiktlig omdirigering till inloggningssidan](#web-app-redirected-to-the-login-page-unexpectedly)
  - [Webbadministratör: glömt bort eller förlorat ett lösenord](#web-admin-forgot-or-lost-a-password)
  - [Instrumentpanelen visar ingen data för andra användare (webb)](#dashboard-shows-no-data-for-other-users-web)
  - [Jag ändrade en prompt och förlorade redigeringarna](#i-changed-a-prompt-and-lost-the-edits)
- [Snabba tips](#quick-tips)
- [Ansvarsfriskrivning](#disclaimer)
- [Licens](#license)

<!-- END doctoc genererad TOC, var god behåll denna kommentar för att tillåta automatisk uppdatering -->

<br/><br/>

<a id="before-you-start"></a>

## Innan du börjar

För att använda Transrewrt behöver du tillgång till minst en AI-leverantör. De stödda leverantörerna är: [OpenRouter](https://openrouter.ai) (som samlar många modeller), OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras och [Ollama](https://ollama.com) för lokala modeller.

Du behöver inte välja en betald modell för att komma igång. Så snart du lägger till din OpenRouter-API-nyckel aktiverar appen automatiskt ett inbyggt **gratis** OpenRouter-alternativ. Detta gör att du direkt kan börja översätta, omskriva och omvandla text. Alternativt kan du också skaffa en gratis API-nyckel från Cerebras, Google, Groq eller Mistral AI.

Med enklare ord:

- En **modell** är AI-motorn som utför arbetet. Modeller visas med ett **leverantörs-prefix** (till exempel `openrouter/…`, `openai/…`, `ollama/…`).
- En **API-nyckel** (eller för Ollama, en **bas-URL**) är hur appen kommunicerar med leverantören.

Om du använder **skrivbordsappen** lägger du till nycklar i [**Inställningar** > **API-konfiguration**](#api-config) för varje leverantör som du använder. Om du endast använder OpenRouter, se [Hämta en API-nyckel](#how-to-get-an-api-key-desktop-app) nedan. Om du inte vill använda en API-nyckel kan du i stället installera Ollama (från [ollama.com](https://ollama.com)) och använda lokala modeller, till exempel `translategemma:4b`.

Om du använder **webbversionen** konfigurerar serverägaren leverantörerna via miljövariabler, vilket innebär att du inte kan ange API-nycklar direkt i applikationen.

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
9. Klicka på **Testa OpenRouter-nyckel** för att säkerställa att den fungerar.

<br/><br/>

<a id="getting-started"></a>

## Komma igång

Om det här är första gången du använder Transrewrt, följ denna ordning:

1. Öppna appen.
2. Välj ditt **gränssnittsspråk** från globikonen om det behövs.
3. Om du använder **skrivbordsappen** öppnar du [**Inställningar** > **API-konfiguration**](#api-config), lägger till en API-nyckel för minst en leverantör (till exempel OpenRouter) och klickar på **Testa** för att verifiera att det fungerar.
4. Öppna [**Inställningar** > **Modeller**](#models) och lägg till en eller flera modeller till **Valda modeller**.
5. Öppna [**Inställningar** > **Språk**](#languages) och välj dina **Topp-språk** om du vill att dina mest använda språk ska visas först.
6. Gå till **Översätt** och kör en enkel översättning för att bekräfta att allt fungerar.
7. När det fungerar, prova **Omskriv** och sedan **Transformera**.

Denna ordning är viktig. Den förhindrar det vanligaste problemet vid första användningen: att försöka utföra en uppgift innan appen har en fungerande API-anslutning eller en vald modell.

<br/><br/>

<a id="main-parts-of-the-window"></a>

## Huvuddelar i fönstret

Appen är uppdelad i tre huvudområden:

- **Sidofältet** till vänster.
- **Verktygsfältet** högst upp.
- **Arbetsytor** i mitten.

<br/>

<a id="sidebar"></a>

### Sidofält

Använd sidofältet för att navigera i appen. Du kan dölja sidofältet för att få mer utrymme genom att klicka på ikonen bredvid applogotypen.

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
        <li><strong>Skriv om</strong> öppnar arbetsytan för omskrivning.</li><br/>
        <li><strong>Omforma</strong> öppnar arbetsytan för anpassade frågor.</li><br/>
        <li><strong>Instrumentpanel</strong> visar information om användning och kostnader.</li><br/>
        <li><strong>Inställningar</strong> öppnar inställningspanelen.</li><br/>
        <li><strong>Historik</strong> visar användningshistorik med indata och utdata-text.</li><br/>
        <li><strong>Användare</strong> visar inloggad användares namn (endast webben).</li>
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

**Modellväljaren** låter dig välja vilken AI-motor som ska användas för den aktuella uppgiften.

  ![Modellväljare](../images/screenshots/sv/model-selector.png)

Vissa kostnadsfria modeller kanske inte alltid är tillgängliga – ibland är de offline eller har en begränsning i användning. Om detta inträffar kommer appen automatiskt att ta bort modellen från din tillgängliga lista. Om du vill styra vilka modeller som visas, gå till [**Inställningar** > **Modeller**](#models) och redigera din modelllista. 
Du kan också öppna modellinställningarna direkt genom att klicka på leverantörens ikon till vänster om modellnamnet i verktygsfältet.

<br/>

**Globikonen och språkkoden** ändrar gränssnittsspråket i appen, som exempelvis menyer och knappar. Det ändrar **inte** översättningsspråken som används i **Översätt**.

![Väljare för gränssnittsspråk](../images/screenshots/sv/language-selector.png)

<br/>

<a id="input-and-output-panels"></a>

### Indatapanel och utdatapanels

De flesta arbetsytor använder ett vänster **Indata**-panel och ett höger **Utdata**-panel.

Varje panel visar också:

| **Inmatning**                                                      | **Utdata**                                                                                                                  |
|--------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------|
| - Teckenantal <br/>- Ordningsantal <br/>- Styckensantal       <br/> | - Hur lång tid uppgiften tog<br/>- **TPS** (token per sekund)<br/>- Antal tecken, ord och stycken<br/>- Den använda modellen |

Om du undrar över de tekniska termerna:

- **Token** betyder en liten textdel. Du kan tänka på det som en del av ett ord eller ett kort ord.
- **TPS** betyder hur många sådana textdelar modellen bearbetade per sekund.

<br/>

Du kan också övervaka kostnaden för varje åtgärd (om tillgängligt) och den totala kostnaden, genom att aktivera alternativet `Visa kostnadsinformation för åtgärder` under [**Inställningar** > **Allmänna inställningar**](#general-settings).

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="translate"></a>

## Översätt

Använd **Översätt** när du vill konvertera text från ett språk till ett annat.

![Översätt-arbetsytan](../images/screenshots/sv/translate.png)

<br/>

<a id="translate-text"></a>

### Översätt text

1. Öppna **Översätt**.
2. Välj ett språk i **Från**.
3. Välj ett språk i **Till**.
4. Välj en modell i verktygsfältet.
5. Skriv eller klistra in text i **Inmatning**.
6. Klicka på **Översätt**.
7. Läs resultatet i **Utmatning**.
8. Använd kopieringsknappen om du vill kopiera resultatet.

<br/>

<a id="language-selection"></a>

### Språkval

- **Från** kan vara ett specifikt språk eller **Identifiera språk**.
- **Till** är det språk du vill ha resultatet i.

Dina valda **Toppspråk** visas överst i listan. Du kan ställa in dessa i [**Inställningar** > **Språk**](#languages).

<br/>

<a id="helpful-translation-settings"></a>

### Användbara översättningsinställningar

I [**Inställningar** > **Allmänna inställningar**](#general-settings) kan du ändra hur översättning fungerar:

- **Automatisk översättning vid klistra in** utför en översättning så snart du klistrar in text.
- **Kopiera resultat till urklipp automatiskt** kopierar resultatet automatiskt efter en lyckad översättning.
- **Översättning i realtid (under skrivandet)** utför översättningar medan du skriver.
- **Tidsgräns (ms)** styr hur länge appen väntar innan en översättning i realtid körs.
- **Returknapp** styr vad som sker när du trycker på `Retur`:

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="rewrite"></a>

## Omskriv

Använd **Omskriv** när du vill förbättra formuleringar utan att ändra huvudinnehållet.

![Omskriv arbetsyta](../images/screenshots/sv/rewrite.png)

Detta är användbart för:

- att åtgärda stavning och grammatik (**Kontrollera stavning och grammatik**)
- att göra texten tydligare (**Förbättra tydlighet**)
- flera olika omformuleringar i samma körning (**Alternativa versioner**)
- att göra texten mer formell eller mindre formell (**Formell** / **Informell**)
- förkorta eller utöka text (**Förkorta** / **Utöka**)
- göra texten mer teknisk (**Gör teknisk**)

<br/>

> 💡 **TIPS**<br/>
> När du använder läget "**Kontrollera stavning och grammatik**" visas en växling **Visa ändringar** i utdatapanelen (bredvid **Kopiera**).
> Slå på eller av den för att visa eller dölja de specifika korrigeringar som gjorts i din text.


<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="transform"></a>

## Transformera

Använd **Transformera** när du vill att AI:n ska följa en egenuppsatt uppsättning instruktioner.

![Transformera arbetsytan](../images/screenshots/sv/transform.png)

Detta är den mest flexibla delen av appen. Du kan använda den för uppgifter såsom:

- sammanfatta anteckningar
- omvandla rå text till ett färdigt e-postmeddelande
- plocka ut nyckelpunkter
- konvertera text till ett specifikt format
- andra anpassade uppgifter med inmatad text

<br/>

<a id="run-an-existing-prompt"></a>

### Kör en befintlig prompt

1. Öppna **Transformera**.
2. Välj en prompt från listan med prompts.
3. Om en ruta **Mål**språk visas, välj ett språk om du vill.
4. Skriv eller klistra in text i **Indata**.
5. Klicka på **Transformera**.
6. Läs resultatet i **Utdata**.

<br/>

<a id="if-you-have-no-prompts-yet"></a>

### Om du inte har några prompts ännu

Om din förteckning över prompts är tom, klicka på **Läs in exempelprompts** i Transform-arbetsytan. Samma funktion finns alltid tillgänglig under [**Inställningar** > **Transformera prompts**](#transform-prompts) på export/import-radens. Båda lägger till inbyggda exempel så att du snabbt kan komma igång.

<br/>

> ℹ️ **OBS**<br/>
> Exempelprompts tillhandahålls på engelska. Efter att du har läst in dem kan du redigera en prompt och använda **Översätt prompt** för att översätta den till ditt språk.

<br/>

<a id="create-a-prompt-quickly"></a>

### Skapa en snabbprompt

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

När du skapar eller redigerar en prompt visas redigeraren till vänster och ett testområde visas till höger.

![Transform prompt-redigerare](../images/screenshots/sv/transform-prompt-edit.png)

De viktigaste fälten är:

- **Prompt-namn**: det namn som visas i förteckningen över prompts.
- **Prompt-instruktioner (valfritt)**: en kort handledning som visas för användaren när prompten körs.
- **Modellroll**: den övergripande roll som tilldelas AI, till exempel "Du är en hjälpsam assistent."
- **Modellinstruktioner (en per rad)**: de specifika regler du vill att AI ska följa.
- **Beskrivning av utdata**: ett kort ord som beskriver resultatet, till exempel "sammanfattning" eller "omskrivning".
- **Temperatur (0,0 → 1,0)**: hur modellen kommer att bete sig; se nedan.
- **Fråga efter målspråk**: lägger till en målspråksväljare när prompten körs.

Om det tekniska begreppet **Temperatur** är nytt för dig, tänk på det så här:

- En **lägre** temperatur ger mer stabila och förutsägbara resultat.

- En **högre** temperatur ger större variation och kreativitet.

Du kan också använda:

- **`Generera prompt`** för att skapa ett nytt utkast från en enkel beskrivning
- **`Förbättra prompt`** för att förfina en befintlig prompt
- **`Översätt prompt`** för att översätta fälten i prompten

<br/>

> ⚠️ **VARNING**<br/>
> Klicka på **`Spara`** innan du klickar på **`Tillbaka till kör`**. Om du går tillbaka utan att spara kommer dina ändringar att förloras.

<br/>

<a id="test-a-prompt-before-using-it"></a>

### Testa en prompt innan du använder den

Testpanelen till höger låter dig prova din prompt med exempeltext innan du använder den i ditt dagliga arbete.

Detta är användbart när:

- du skapar en ny prompt
- du jämför två versioner av en prompt
- du vill kontrollera ton, längd eller utdataformat

<br/>

> ℹ️ **OBS**<br/>
> Du kan exportera och importera sparade prompts under [**Inställningar** > **Transformera prompts**](#transform-prompts).

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="dashboard"></a>

## Instrumentpanel

Använd **instrumentpanelen** för att se hur mycket du använder appen och vad det kostar (för betalda modeller).

![Översikt av instrumentpanelen](../images/screenshots/sv/dashboard-summary.png)


<br/>

> ℹ️ **OBS**<br/>
> Om du endast använder **kostnadsfria** modeller kan **kostnads**belopp vara noll och sammanfattningar med kostnadsfokus kan se tomma ut. På **Sammanfattning**, **Användning över tid** och **Användning per modell** visas fortfarande **antal anrop** (översätt, omskriv och omvandla) när det skett aktivitet under den valda perioden.

<br/>

<a id="filter-the-data"></a>

### Filtrera data

Använd filterknapparna överst för att ändra tidsintervall.

![Instrumentpanelens filter](../images/screenshots/sv/dashboard-filter.png)

<br/>

> ℹ️ **OBS**<br/>
> **Användar**filtret är endast synligt för administratörer i webbversionen. Vanliga användare ser inte detta filter, och det är inte tillgängligt i skrivbordsappen.

<br/>

<a id="dashboard-tabs"></a>

### Flikar i instrumentpanelen

- **Sammanfattning** ger dig en översikt över användning och kostnader. Innehåller **Användning över tid** (staplat kumulativt antal **anrop per dag** för översättning, omskrivning och omvandling) och **Användning per modell** (totalt **antal anrop per modell**, inklusive omvandling).
- **Efter användning** delar upp aktiviteten per översättningsspråk, omskrivningsläge och omvandlingspåminnelse.
- **Efter modell** visar vilka modeller du har använt och deras kostnader.
- **Efter dag** visar dagliga totaler.
- **Alla anrop** visar den fullständiga anropsloggen och låter dig exportera den.

<br/>

<a id="export-data"></a>

### Exportera data

Datatablåerna kan exportera data i:

- **JSON**
- **CSV**
- **XLSX**

Detta är användbart om du vill granska aktivitet utanför appen eller dela en rapport.

<br/>

<a id="delete-stored-records-for-a-model"></a>

### Radera lagrade poster för en modell

I **Efter modell** eller **Alla anrop** kan du ta bort lagrade poster för en modell genom att klicka på papperskorgsikonen.

> ⚠️ **VARNING**<br/>
> Att radera lagrade poster kan inte ångras. Använd detta endast om du är säker på att du inte längre behöver den historiken.

För att radera alla data eller ta bort poster baserat på deras ålder, gå till [**Inställningar** > **Kostnadsspårning**](#cost-tracking). Där hittar du alternativ för att radera alla lagrade data eller bara data som är äldre än ett visst datum.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="history"></a>

## Historik

Klicka på **Historik** för att se en översikt över dina åtgärder i **Transrewrt**, inklusive indata och utdata för varje åtgärd.

![Historiksida](../images/screenshots/sv/history.png)

<br/>

<a id="filter-the-history"></a>

### Filtrera data

**Historik** använder samma filter som sidan **Instrumentpanel**. Använd dem för att välja tidsperiod.

![Instrumentpanelens filter](../images/screenshots/sv/dashboard-filter.png)

<br/>

> ℹ️ **OBS**<br/>
> **Användar**-filtret är endast synligt för administratörer i webbversionen. Regelbundna användare kommer inte att se detta filter, och det är inte tillgängligt i skrivbordsappen.

<br/>

<a id="export-history-data"></a>

### Exportera historikdata

På historiksida kan du exportera filtrerad data i följande format:

- **JSON**
- **CSV**
- **XLSX**

Detta är användbart om du vill granska aktiviteter utanför appen eller dela en rapport.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="settings"></a>

## Inställningar

Öppna **Inställningar** i sidofältet för att anpassa hur appen fungerar.

De tillgängliga flikarna beror på plattformen och din roll:

| Flik | Skrivbord | Webb (administratör) | Webb (vanlig användare) |
|------|----------|---------------------|------------------------|
| Allmänna inställningar | ja | ja | ja |
| Modeller | ja | ja | ja |
| Språk | ja | ja | ja |
| Kostnadsföljning | ja | ja | — |
| Transformera anvisningar | ja | ja | ja |
| Användare | — | ja | — |
| API-konfiguration | ja | ja | — |
| Om | ja | ja | ja |

<br/>

> ℹ️ **OBS**<br/>
> I webbversionen har varje användare sin egen konfiguration. Inställningar som valda modeller, språk, allmänna alternativ och omvandlingsmeddelanden lagras per användare. Ändringar du gör påverkar inte andra användare.

<br/>


[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="general-settings"></a>

### Allmänna inställningar

Använd **Allmänna inställningar** för att styra skrivbeteende, om körningsdetaljer sparas för **Historik** samt utseende.

**Beteende**

- **Beteende för RETUR** väljer om `Retur` utför uppgiften eller infogar en ny rad.
- **Automatisk översättning vid klistra in** startar översättning så fort du klistrar in text.
- **Kopiera resultat till urklipp automatiskt** kopierar framgångsrika resultat automatiskt.
- **Översättning i realtid (medan du skriver)** översätter medan du skriver.
- **Tidsgräns (ms)** anger väntetiden för översättning i realtid.

**Historik**

- **Spara körningshistorik** styr om varje översättning, omskrivning och omvandling lagrar **inmatad och utmatad text** för sidofältets [**Historik**](#history)-vy. Om du stänger av detta kommer du att få en bekräftelse; om du bekräftar tas den lagrade historiken bort från databasen.

- **Radera historikdata** låter dig ta bort lagrad text baserat på ålder (till exempel äldre än ett par månader, eller **alla data (rensa)**) genom att använda **Radera data**. Det påverkar endast sparad körningstext för vyn **Historik**; det raderar **inte** kostnads- eller användningssummor. För att ta bort eller trimma **kostnads**data, använd [**Inställningar** > **Kostnadsspårning**](#cost-tracking).

**Utseende**

- **Visa kostnadsinformation på åtgärderna** styr visningen av kostnaden per operation (om tillgängligt) och den totala kostnaden på panelerna för översätt, omskriv och transformera.
- **Antal decimaler för kostnad** ändrar hur kostnadsdecimaler visas.
- **Endast webb:** **visa en marginal runt appen** lägger till extra utrymme runt gränssnittet.
- **Teckensnitt** ändrar skrifttypen i textpanelerna.
- **Storlek** ändrar teckenstorleken.

**Säkerhetskopiering av konfiguration**

- **Inkludera användningsdata i säkerhetskopian** – när detta är aktiverat innehåller ZIP-filen även körningshistorik och API-anropsdata.

- **Säkerhetskopiera konfiguration** — skapar en enskild ZIP-fil (`transrewrt-config-backup-ÅÅÅÅ-MM-DD_HHMMSS.zip` i UTC som standard) som innehåller `config.json`, `state.json`, valfri krypteringsnyckel, användare, inställningar, anpassade frågor och användningsdata om du har valt det. Efter en lyckad säkerhetskopiering visas bekräftelse med namnet på den sparade filen.
- **Återställ från säkerhetskopia** — öppnar först en **bekräftelsedialog**. Välj säkerhetskopierings-ZIP-filen i dialogen (**Bläddra**/filväljare eller dra och släpp där det stöds), och granska sedan inställningarna:
  - **Återställ användningsdata** — importera användning/historik från ZIP-filen där den säkerhetskopierades med användningsdata inkluderade; lämna ifrån dig om du endast vill ha inställningar och frågor.
  - **Rensa gamla användningsdata innan återställning** — ta bort befintlig användning/historik i denna installation innan säkerhetskopian tillämpas (valfritt; använd när du vill göra en ren ersättning).

Säkerhetskopior som skapats antingen i webb- eller skrivbordsversionen kan återställas i den andra versionen. När du återställer en skrivbordsbackup i webbversionen kommer data återställas till administratörsanvändaren.


<br/>

<a id="models"></a>

### Modeller

Använd **Inställningar** > **Modeller** för att välja vilka modeller som visas i verktygsfältet.

![Inställningar – Fliken Modeller](../images/screenshots/sv/settings-models.png)

Sidan har två listor:

- **Tillgängliga modeller** till vänster
- **Valda modeller** till höger

Användbara kontroller inkluderar:

- **Sök modeller...** för att hitta en modell efter namn
- **Leverantörsflikar** för att begränsa listan till en motor (OpenRouter, OpenAI, Ollama, …)
- **Endast gratis** för att endast visa kostnadsfria modeller
- **Uppdatera** för att ladda om listan
- **Expandera alla** och **Komprimera alla** när du sorterar efter leverantör

Modell-ID:n innehåller leverantörens prefix (till exempel `openrouter/…` vs `openai/…`). Badges som **OpenAI (OpenRouter)** jämfört med **OpenAI (direkt)** visar hur trafiken dirigeras.

> ℹ️ **OBS**<br/>

> **OpenRouter Body Builder** (`openrouter/bodybuilder`) är en routermodell, inte en generell chattmodell: svaret är JSON som beskriver OpenRouter API-förfrågningskroppar (till exempel en `requests`-array med `model` och `messages`). Om du använder den för **Översätt**, **Skriv om** eller **Transformera**, kommer resultatpanelen att visa den JSON-koden i stället för färdig text. Välj en vanlig textmodell för dessa uppgifter. Se [Body Builder-modellsidan](https://openrouter.ai/openrouter/bodybuilder) på OpenRouter.

Åtgärder:

 - För att lägga till en modell, klicka på **Lägg till** eller var som helst i posten.

 - För att ta bort en modell, klicka på **X** bredvid den i **Valda modeller** eller **Vald** i posten under Tillgängliga modeller.

 - För att tömma listan, klicka på **Avmarkera alla**. Den obligatoriska kostnadsfria modellen kommer att kvarstå i listan.

<br/>

> ℹ️ **OBS**<br/>

> Om du inte vill lägga till kontot till OpenRouter direkt kan du börja med att aktivera **Endast gratis** och välja de kostnadsfria modellerna (inget kreditkort krävs). Du kan också använda Ollama för att köra modeller lokalt utan någon API-nyckel.

<br/>

<a id="languages"></a>

### Språk

Använd **Inställningar** > **Språk** för att ordna språklistorna som används i appen.

- **Favoritspråk** fixeras nära toppen av språklistorna i **Översätt** och **Transformera**.
- **Anpassat språk** låter dig lägga till ett språk som inte finns i den inbyggda listan.

Om du lägger till ett anpassat språk visas det i språkväljarna tillsammans med de inbyggda alternativen.

<br/>

<a id="cost-tracking"></a>

### Kostnadsspårning

Använd **Inställningar** > **Kostnadsspårning** för att hantera kostnadsinformation.

- **Totalkostnad** visar den löpande summan.
- **Kopiera värde** kopierar totalsumman till utklipp.
- **Återställ kostnad** återställer den sparade totalen till noll.
- **Synkronisera med API-nyckelns användning** ställer in totalsumman så att den matchar din OpenRouter-kontos rapporterade användning (endast OpenRouter).
- **API-nyckelns användning** visar OpenRouter-användningsdetaljer, om tillgängligt.
- **Radera kostnadsdata** tar bort alla data, eller endast poster äldre än ett valt datum.

**Kostnadsspårning:** När du använder OpenRouter-modeller visar appen din faktiska användning och utgifter baserat på kostnadsinformation från OpenRouter. För alla andra leverantörer beräknar appen kostnader med priser publicerade av OpenRouter. Om priser inte är tillgängliga kan uppskattningen vara noll.

<br/>

> ℹ️ **OBS**<br/>
> **Alla kostnadsuppgifter är uppskattningar endast för din referens, inte officiella fakturor.**

<br/>

> ⚠️ **VARNING**<br/>

> Data kan inte återställas efter borttagning. Innan du tar bort data ska du säkerhetskopiera eller exportera den via [**Historik**](#history)  
> eller [**Instrumentpanel** > **Alla anrop**](#dashboard-tabs), annars kommer den att förloras permanent.  
> All indata/utdata-historik kopplad till varje API-anropsinlägg kommer också att raderas.


<br/>

<a id="transform-prompts"></a>

### Omvandla prompter

Använd **Inställningar** > **Omvandla prompter** för att hantera prompter i stor skala.

Du kan:

- granska dina sparade prompter
- ta bort prompter
- importera prompter från en fil
- exportera prompter för säkerhetskopiering eller delning
- läsa in exempelprompter till promptlistan

<br/>

<a id="users"></a>

### Användare

Använd **Användare** för att hantera användarkonton i webbversionen. Du kan lägga till användare, uppdatera deras uppgifter, återställa lösenord och ta bort konton.

<br/>

<a id="api-config"></a>

### API-konfiguration

De som stöds leverantörerna är: OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras, och **Ollama** (lokala modeller via en bas-URL). Du behöver bara konfigurera de leverantörer du använder.

**Webbapplikation: endast administratör**

API-nycklar konfigureras genom system- eller Docker-miljövariabler – de anges inte i webbgränssnittet. På den här sidan visas vilka leverantörer som har en nyckel konfigurerad och låter dig testa varje leverantör genom att klicka på knappen **`Testa`**.

<br/>

> ℹ️ **OBS**<br/>
> För att ändra en API-nyckel, uppdatera miljövariabeln i din system- eller Docker-konfiguration och starta om servern eller containern.

> ℹ️ **OBS**<br/>

> **Konfigurationskopior** (se [**Allmänna inställningar** → Konfigurationskopiering](#general-settings)) kan bädda in **lösta** provider-nycklar i ZIP-filens `config.json`. Återställning av denna ZIP-fil kopierar **inte** tillbaka dessa nycklar till serverns sparade konfigurationsfil – aktiva nycklar hämtas fortfarande från miljön och befintlig filstatus enligt beskrivningen ovan.

<br/>

**Skrivbordsapplikation**

Använd **API-konfiguration** för att lagra API-nycklar för varje leverantör du använder. För Ollama anger du **bas-URL:en** istället för en API-nyckel.


<br/>

> 💡 **Tips** <br/>
> Om du inte vill använda en API-nyckel eller betala för användning kan du [ladda ner Ollama](https://ollama.com) och köra modeller (t.ex. `translategemma:4b`) lokalt på din dator utan kostnad. Alternativt kan du skapa ett gratis OpenRouter-konto (inget kreditkort krävs) för att använda deras gratismodeller, eller skaffa en gratis API-nyckel från Cerebras, Google, Groq eller Mistral AI.

<br/>

- Lägg endast till de leverantörer du behöver. I **Inställningar** > **Modeller** börjar varje modell-ID med leverantören (till exempel `openrouter/openrouter/free`, `openai/gpt-4o`, `ollama/llama3`).

För att lägga till en API-nyckel, ange värdet i textfältet och klicka på **`Spara`**. För att ersätta en befintlig nyckel, klicka på **`Redigera`**. För att verifiera att en nyckel fungerar, klicka på **`Testa`**. För Ollamas bas-URL, klicka alltid på **`Testa`** för att kontrollera anslutningen.

<br/>

> ℹ️ **OBS**<br/>
> Du kan inte se det aktuella värdet på en API-nyckel. Du kan endast ersätta den genom att använda knappen **`Redigera`**.
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

Om något inte fungerar som det ska, kontrollera följande punkter först.

<br/>

<a id="the-app-will-not-translate-rewrite-or-transform-text"></a>

### Appen kommer inte att översätta, skriva om eller transformera text

Kontrollera att:

- du har valt en modell i verktygsfältet
- minst en modell finns i listan under [**Inställningar** > **Modeller**](#models)
- din API-konfiguration fungerar

Om du använder skrivbordsappen:

1. Öppna [**Inställningar** > **API-konfiguration**](#api-config).
2. Kontrollera att minst en API-nyckel har sparats.
3. Klicka på **Testa** bredvid leverantören för att bekräfta att nyckeln fungerar.

<br/>

<a id="the-model-list-is-empty"></a>

### Modellistan är tom

Öppna [**Inställningar** > **Modeller**](#models) och klicka på **Uppdatera**.

Om det behövs:

- sök efter en modell
- aktivera **Endast kostnadsfria**
- lägg till en eller flera modeller till **Valda modeller**

<br/>

<a id="the-result-is-too-slow-or-too-expensive"></a>

### Resultatet är för långsamt eller för dyrt

Prova en eller flera av följande åtgärder:

- välj en annan modell
- använd en kortare inmatning
- stäng av **Översättning i realtid (medan du skriver)** i [**Inställningar** > **Allmänna inställningar**](#general-settings)
- använd fria modeller för enkla uppgifter (se [Modeller](#models))

<br/>

<a id="the-interface-is-in-the-wrong-language"></a>

### Gränssnittet är på fel språk

Klicka på globikonen i [verktygsfältet](#toolbar) och välj önskat **gränssnittsspråk**.

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

- du endast använder **kostnadsfria modeller** och tittar på **kostnads**siffror (de kan vara noll); diagram för **anropsantal** under **Sammanfattning** kräver fortfarande data från den valda perioden
- det valda **tidsfiltret** inte omfattar den period då anrop gjordes — prova **Alla** för att kontrollera

Om diagrammen fortfarande är tomma efter att ha valt **Alla**, bekräfta att anropen visas i [**Historik**](#history) eller i fliken **Alla anrop**.

<br/>

<a id="cost-shows-not-available-or-seems-wrong"></a>

### Kostnaden visar "inte tillgänglig" eller verkar felaktig

När du använder modeller via **OpenRouter** visar appen din faktiska utgift rapporterad av OpenRouter.

För **andra leverantörer** (OpenAI direkt, Anthropic direkt, etc.) uppskattas kostnaden utifrån prisdata som publicerats av OpenRouter. Om inget matchande pris hittas för en modell kommer kostnaden att visas som **inte tillgänglig** och kommer inte att läggas till i din löpande total.

<br/>

<a id="total-cost-does-not-match-my-provider-bill"></a>

### Totalkostnaden stämmer inte med fakturan från leverantören

Alla kostnadssiffror i appen är **uppskattningar endast för referens**, inte officiella fakturor.

För att göra totalen mer överensstämmande med din verkliga OpenRouter-kostnad, öppna [**Inställningar** > **Kostnadsöversikt**](#cost-tracking) och klicka på **Synkronisera med API-nyckelns användning**.

<br/>

<a id="the-history-page-is-missing-from-the-sidebar"></a>

### Sidan Historik saknas i sidofältet

**Spara körningshistorik** kan vara inaktiverat. Öppna [**Inställningar** > **Allmäna inställningar**](#general-settings) och aktivera det. Observera att när du aktiverar det kommer inte tidigare borttagna historikdata att återställas.

<br/>

<a id="web-app-session-expired"></a>

### Webbapp: omdirigerad till inloggningssidan oväntat

Din session kan ha gått ut. Logga in igen. Om det sker ofta, kontrollera serverkonfigurationen för inställningar av sessionens livslängd.

<br/>

<a id="web-admin-forgot-or-lost-a-password"></a>

### Webbadmin: glömt eller tappat bort ett lösenord

Detta gäller den **lokalt värdade webbappen** (Docker), inte skrivbordsappen (Electron).

- Om en annan administratör fortfarande kan logga in kan de öppna [**Inställningar** > **Användare**](#users), välja kontot och ange ett **nytt lösenord** där.
- Om du är **utelåst** men har **shell-åtkomst** till maskinen eller containern kan du återställa lösenordet med hjälpverktyget som följer med avbildningen (ersätt `transrewrt` om du ändrat det standardnamnet, och omge lösenordet med citattecken om det innehåller mellanslag eller specialtecken):

```bash
docker exec transrewrt reset-web-password '<användarnamn>' '<nytt-lösenord>'
```

Standardanvändarnamnet för administratör är `admin` om du aldrig har skapat andra konton. När du anger endast ett argument behandlas det som det nya lösenordet för `admin`.

Om du kör från en **källkodskopia** istället för Docker, använd:

```bash
pnpm run reset-web-password -- <användarnamn> <nytt-lösenord>

Skriptet uppdaterar användarposten i SQLite-databasen (och kan skapa användaren `admin` om den saknas). Efter återställning loggar du in med det nya lösenordet.


<br/>

<a id="dashboard-shows-no-data-for-other-users"></a>

### Övervakningspanelen visar ingen data för andra användare (webb)

Endast **administratörer** kan visa data från alla användare via filtret **Användare**. Regelbundna användare ser endast sin egen aktivitet enligt design.

<br/>

<a id="i-changed-a-prompt-and-lost-the-edits"></a>

### Jag ändrade en prompt och förlorade ändringarna

När du redigerar en prompt, klicka alltid på **Spara** innan du klickar på **Tillbaka till körning**.

<br/><br/>

<a id="quick-tips"></a>

## Snabbtips

- Börja med [**Översätt**](#translate) för att säkerställa att din installation fungerar innan du går vidare till [**Skriv om**](#rewrite) eller [**Transformera**](#transform).
- Använd [**Skriv om**](#rewrite) för dagliga formuleringar och förbättringar.
- Använd [**Transformera**](#transform) när du behöver en återupprepad arbetsflödesprocess för en specifik uppgift.
- Använd [**Instrumentpanel**](#dashboard) om du vill ha koll på användning och kostnader.
- Använd [**Historik**](#history) för att granska tidigare åtgärder och deras fullständiga indata/utdata-texter.
- Exportera uttryck (prompts) regelbundet om du bygger en prompt-bibliotek som du vill förvara säkert (se [Transformera prompts](#transform-prompts)) eller om du vill dela med dig till andra.

<br/><br/>

<a id="disclaimer"></a>

## Ansvarsfriskrivning

Produktnamn och ikoner tillhör sina respektive ägare och används endast för identifieringsändamål. Denna programvara är inte ansluten till eller godkänd av något av de nämnda varumärkena.

<br/><br/>

<a id="license"></a>

## Licens

Copyright © 2026 Waldemar Scudeller Jr.

[Apache License 2.0](LICENSE)