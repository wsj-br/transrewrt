---
translated_at: "2026-03-25T22:31:22.754Z"
source_hash: "6ca7b21e820e8ee121cd93bbf98806547c5c3ce7914799891d923201bd2c4466"
source_mtime: 1774468804877.8855
model: "qwen/qwen3-235b-a22b-2507"
---
![Transrewrt-banderoll](../images/transrewrt_banner.png)


<a id="transrewrt-user-guide"></a>
# Användarhandbok

<br/>

<a id="introduction"></a>
## Introduktion

Transrewrt hjälper dig att arbeta med text på tre huvudsakliga sätt:

- **Översätt** – konvertera text från ett språk till ett annat.
- **Skriv om** – formulera om texten i en annan stil, till exempel tydligare, kortare eller mer formell.
- **Transformera** – bearbeta text med anpassade AI-instruktioner, så kallade prompts.

<br/>

Den här handboken förklarar hur du använder appen när den är installerad och igång. För installationsinstruktioner, se huvudfilen **[README](README.sv.md)**.

<br/>

> ℹ️ **OBS**<br/>
> Transrewrt är tillgängligt som skrivbordsapp för Windows och Linux, samt som en webbapp som du kan hosta själv. Den här guiden fokuserar på vardagligt bruk av appen. När något endast gäller en viss version är det tydligt markerat.

<small>**Läs på andra språk:** [English (UK)](USER-GUIDE.sv.md) · [Português (BR)](USER-GUIDE.pt-BR.md) · [العربية](USER-GUIDE.ar.md) · [বাংলা](USER-GUIDE.bn.md) · [Català](USER-GUIDE.ca.md) · [简体中文](USER-GUIDE.zh-CN.md) · [繁體中文](USER-GUIDE.zh-TW.md) · [Hrvatski](USER-GUIDE.hr.md) · [Čeština](USER-GUIDE.cs.md) · [Nederlands](USER-GUIDE.nl.md) · [English (US)](USER-GUIDE.en-US.md) · [Filipino](USER-GUIDE.tl.md) · [Français](USER-GUIDE.fr.md) · [Deutsch](USER-GUIDE.de.md) · [Ελληνικά](USER-GUIDE.el.md) · [हिन्दी](USER-GUIDE.hi.md) · [Magyar](USER-GUIDE.hu.md) · [Italiano](USER-GUIDE.it.md) · [日本語](USER-GUIDE.ja.md) · [Basa Jawa](USER-GUIDE.jv.md) · [한국어](USER-GUIDE.ko.md) · [Bahasa Melayu](USER-GUIDE.ms.md) · [فارسی](USER-GUIDE.fa.md) · [Polski](USER-GUIDE.pl.md) · [Português (PT)](USER-GUIDE.pt.md) · [ਪੰਜਾਬੀ](USER-GUIDE.pa.md) · [Română](USER-GUIDE.ro.md) · [Русский](USER-GUIDE.ru.md) · [Slovenčina](USER-GUIDE.sk.md) · [Español](USER-GUIDE.es.md) · [Kiswahili](USER-GUIDE.sw.md) · [Svenska](USER-GUIDE.sv.md) · [తెలుగు](USER-GUIDE.te.md) · [ภาษาไทย](USER-GUIDE.th.md) · [Türkçe](USER-GUIDE.tr.md) · [Українська](USER-GUIDE.uk.md) · [Tiếng Việt](USER-GUIDE.vi.md)</small>

<small>

> **Obs om översättningar av användargränssnittet och dokumentation:** Alla gränssnittsspråk utom det ursprungliga engelska (UK)
> har översatts med hjälp av AI-modeller; formuleringarna kan vara otydliga eller innehålla fel.

</small>

<br/>


<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Innehållsförteckning** 

- [Innan du börjar](#before-you-start)
  - [Så här får du en gratis OpenRouter API-nyckel (skrivbordsappen)](#how-to-get-a-free-openrouter-api-key-desktop-app)
- [Komma igång](#getting-started)
- [Huvuddelar i fönstret](#main-parts-of-the-window)
  - [Sidofält](#sidebar)
  - [Verktygsfält](#toolbar)
  - [Inmatnings- och utmatningspaneler](#input-and-output-panels)
- [Översätt](#translate)
  - [Översätt text](#translate-text)
  - [Språkval](#language-selection)
  - [Användbara översättningsinställningar](#helpful-translation-settings)
- [Skriv om](#rewrite)
- [Transformera](#transform)
  - [Kör en befintlig prompt](#run-an-existing-prompt)
  - [Om du inte har några prompts ännu](#if-you-have-no-prompts-yet)
  - [Skapa en prompt snabbt](#create-a-prompt-quickly)
  - [Redigera en prompt](#edit-a-prompt)
  - [Testa en prompt innan du använder den](#test-a-prompt-before-using-it)
- [Instrumentpanel](#dashboard)
  - [Filtrera data](#filter-the-data)
  - [Flikar på instrumentpanelen](#dashboard-tabs)
  - [Exportera data](#export-data)
  - [Ta bort sparade poster för en modell](#delete-stored-records-for-a-model)
- [Historik](#history)
  - [Filtrera data](#filter-the-data-1)
  - [Exportera historikdata](#export-history-data)
- [Inställningar](#settings)
  - [Allmänna inställningar](#general-settings)
  - [Modeller](#models)
  - [Språk](#languages)
  - [Kostnadsregistrering](#cost-tracking)
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
  - [Diagrammen på instrumentpanelen är tomma](#dashboard-charts-are-empty)
  - [Kostnaden visar "icke tillgänglig" eller verkar felaktig](#cost-shows-not-available-or-seems-wrong)
  - [Total kostnad stämmer inte med leverantörens faktura](#total-cost-does-not-match-my-provider-bill)
  - [Sidofältet saknar historiksida](#the-history-page-is-missing-from-the-sidebar)
  - [Webbappen: omdirigeras till inloggningssidan oväntat](#web-app-redirected-to-the-login-page-unexpectedly)
  - [Instrumentpanelen visar ingen data för andra användare (webb)](#dashboard-shows-no-data-for-other-users-web)
  - [Jag ändrade en prompt men tappade bort ändringarna](#i-changed-a-prompt-and-lost-the-edits)
- [Snabba tips](#quick-tips)
- [Ansvarsfriskrivning](#disclaimer)
- [Licens](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="before-you-start"></a>

## Innan du börjar

För att använda Transrewrt behöver du tillgång till minst en AI-leverantör. De leverantörer som stöds är: [OpenRouter](https://openrouter.ai) (som samlar många modeller), OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras och [Ollama](https://ollama.com) för lokala modeller.

Du behöver inte välja en betald modell för att komma igång. Så fort du lägger till din OpenRouter-API-nyckel aktiverar appen automatiskt ett inbyggt **gratis** OpenRouter-alternativ. Detta gör att du direkt kan börja översätta, omformulera och omvandla text. Alternativt kan du också skaffa en gratis API-nyckel från Cerebras, Google, Groq eller Mistral AI.

Med enklare ord:

- En **modell** är AI-motorn som utför arbetet. Modeller visas med ett **leverantörs-prefix** (till exempel `openrouter/…`, `openai/…`, `ollama/…`).
- En **API-nyckel** (eller för Ollama, en **bas-URL**) är hur appen kommunicerar med leverantören.

Om du använder det **skrivbordsbaserade programmet**, lägg till nycklar i [**Inställningar** > **API-konfiguration**](#api-config) för varje leverantör du använder. För enbart OpenRouter-användning, se [Så här skaffar du en API-nyckel](#how-to-get-an-api-key-desktop-app) nedan. Om du inte vill använda en API-nyckel kan du installera Ollama (från [ollama.com](https://ollama.com)) och istället använda lokala modeller, till exempel `translategemma:4b`.

Om du använder den **webbaserade versionen** konfigurerar serverägaren leverantörerna via miljövariabler, vilket innebär att du inte kan mata in API-nycklar direkt i programmet.

<br/>

<a id="how-to-get-an-api-key-desktop-app"></a>
### Så här skaffar du en gratis OpenRouter-API-nyckel (skrivbordsapp)

Om du använder skrivbordsappen, följ dessa steg:

1. Gå till [OpenRouter](https://openrouter.ai) i din webbläsare.
2. Skapa ett konto eller logga in.
3. Öppna sidan [Keys](https://openrouter.ai/keys).
4. Klicka på knappen för att skapa en ny API-nyckel.
5. Ge nyckeln ett namn så att du kan känna igen den senare.
6. Kopiera den nya API-nyckeln.
7. Gå tillbaka till Transrewrt och öppna **Inställningar** > **API-konfiguration**.
8. Klistra in nyckeln i fältet **OpenRouter API key** (under **Inställningar** > **API-konfiguration**).
9. Klicka på **Test OpenRouter key** för att kontrollera att den fungerar.

<br/><br/>

<a id="getting-started"></a>
## Komma igång

Om detta är första gången du använder Transrewrt, följ denna ordning:

1. Öppna appen.
2. Välj ditt **gränssnittsspråk** från jordklotikonet om så behövs.
3. Om du använder **skrivbordsappen**, öppna [**Inställningar** > **API-konfiguration**](#api-config), lägg till en API-nyckel för minst en leverantör (till exempel OpenRouter) och klicka på **Test** för att verifiera att den fungerar.
4. Öppna [**Inställningar** > **Modeller**](#models) och lägg till en eller flera modeller till **Valda modeller**.
5. Öppna [**Inställningar** > **Språk**](#languages) och välj dina **Topparspråk** om du vill att dina mest använda språk ska visas först.
6. Gå till **Översätt** och kör en enkel översättning för att kontrollera att allt fungerar.
7. När det fungerar kan du prova **Omskriv** och sedan **Omvandla**.

Ordningen spelar roll. Den förhindrar det vanligaste problemet vid första användningen: att försöka utföra en uppgift innan appen har en fungerande API-anslutning eller en vald modell.

<br/><br/>

<a id="main-parts-of-the-window"></a>
## Huvuddelar i fönstret

Appen är uppdelad i tre huvudområden:

- **Sidofältet** till vänster.
- **Verktygsfältet** högst upp.
- **Arbetsområdet** i mitten.

<br/>

<a id="sidebar"></a>
### Sidofält

Använd sidofältet för att navigera i appen. Du kan dölja sidofältet för att få mer plats genom att klicka på ikonen bredvid appens logotyp.

<br/>

<table>
  <tr>
    <td valign="top">
       <img src="../images/screenshots/sv/sidebar.png" alt="Application Sidebar" style="max-width: 100%; border: 1px solid #ddd; border-radius: 4px;">
    </td>
    <td valign="top">
      <br/><br/>
      <ul>
        <li><strong>Översätt</strong> öppnar arbetsytan för översättning.</li><br/>
        <li><strong>Omskriv</strong> öppnar arbetsytan för omskrivning.</li><br/>
        <li><strong>Omvandla</strong> öppnar arbetsytan för anpassade prompter.</li><br/>
        <li><strong>Instrumentpanel</strong> visar användnings- och kostnadsinformation.</li><br/>
        <li><strong>Inställningar</strong> öppnar inställningspanelen.</li><br/>
        <li><strong>Historik</strong> visar användningshistorik med indata och utdata.</li><br/>
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

**Modellväljaren** låter dig välja vilken AI-motor som ska användas för den aktuella uppgiften.

  ![Modellväljare](../images/screenshots/sv/model-selector.png)

Vissa kostnadsfria modeller kanske inte alltid är tillgängliga – ibland är de offline eller har en användningsgräns. Om detta inträffar kommer appen automatiskt att ta bort den modellen från din tillgängliga lista. För att styra vilka modeller som visas kan du gå till [**Inställningar** > **Modeller**](#models) och redigera din modelllista. Du kan också öppna modellinställningarna direkt genom att klicka på leverantörens ikon till vänster om modellnamnet i verktygsfältet.

<br/>

**Globikon plus språkkod** ändrar appens gränssnittsspråk, såsom menyer och knappar. Det ändrar **inte** översättningsspråken som används i **Översätt**.

  ![Val av gränssnittsspråk](../images/screenshots/sv/language-selector.png)

<br/>

<a id="input-and-output-panels"></a>
### Inmatnings- och utmatningspaneler

De flesta arbetsytor använder en vänster **Inmatningspanel** och en höger **Utmaltningspanel**.

Varje panel visar också:

| **Inmatning**                                                      | **Utmatning**                                                                                                                  |
|--------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------|
| - Teckenantal <br/>- Ordnantall <br/>- Styckental <br/>           | - Hur lång tid uppgiften tog<br/>- **TPS** (tokens per sekund)<br/>- Antal tecken, ord och stycken<br/>- Den använda modellen |


Om du undrar över de tekniska termerna:

- **Token** innebär en liten textbit. Du kan tänka på det som en del av ett ord eller ett kort ord.
- **TPS** innebär hur många sådana textbitar modellen behandlade per sekund.

<br/>

Du kan också övervaka kostnaden för varje åtgärd (om tillgängligt) och den totala kostnaden genom att aktivera alternativet `Visa kostnadsinformation för åtgärder` under [**Inställningar** > **Allmänna inställningar**](#general-settings). 
 
<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="translate"></a>
## Översätt

Använd **Översätt** när du vill konvertera text från ett språk till ett annat.

![Arbetsyta Översätt](../images/screenshots/sv/translate.png)

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

Dina valda **Toppspråk** visas överst i listan. Du kan ställa in dessa under [**Inställningar** > **Språk**](#languages).

<br/>

<a id="helpful-translation-settings"></a>
### Användbara översättningsinställningar

I [**Inställningar** > **Allmänna inställningar**](#general-settings) kan du ändra hur översättningen beter sig:

- **Översätt automatiskt vid klistring** utför en översättning så snart du klistrar in text.
- **Kopiera resultatet automatiskt till klippbordet** kopierar resultatet automatiskt efter en lyckad körning.
- **Översätt i realtid (medan du skriver)** utför översättningar medan du skriver.
- **Tidsgräns (ms)** styr hur länge appen väntar innan en översättning i realtid startas.
- **Retur** styr vad som händer när du trycker på `Retur`:

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="rewrite"></a>
## Omskriv

Använd **Omskriv** när du vill förbättra formuleringen utan att ändra huvudinnehållet.

![Arbetsyta Omskriv](../images/screenshots/sv/rewrite.png)

Detta är användbart för:

- att rätta stavning och grammatik
- att göra text klarare
- att göra texten mer formell eller mindre formell
- att förkorta eller utöka text
- att få texten att låta mer teknisk

<br/>

> 💡 **TIP**<br/>
> När du använder läget "**Kontrollera stavning och grammatik**" visas en knapp `Visa ändringar` i utmatningspanelen.
> Klicka på den här knappen för att växla visningen av korrigeringar och visa/dölja de specifika ändringar som gjorts i din text.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="transform"></a>

## Transformera

Använd **Transformera** när du vill att AI:n ska följa en anpassad uppsättning instruktioner.

![Arbetsytan Transformera](../images/screenshots/sv/transform.png)

Detta är den mest flexibla delen av appen. Du kan använda den för uppgifter som:

- sammanfatta anteckningar
- omvandla rå text till ett färdigt e-postmeddelande
- extrahera nyckelpunkter
- konvertera text till ett specifikt format
- andra anpassade aktiviteter med inmatad text

<br/>

<a id="run-an-existing-prompt"></a>
### Kör en befintlig prompt

1. Öppna **Transformera**.
2. Välj en prompt från listan med tillgängliga promptar.
3. Om en ruta för **Målspråk** visas, välj ett språk om du vill.
4. Skriv in eller klistra in text i **Inmatning**.
5. Klicka på **Transformera**.
6. Läs resultatet i **Utdata**.

<br/>

<a id="if-you-have-no-prompts-yet"></a>
### Om du inte har några promptar ännu

Om din listan med promptar är tom, klicka på **Ladda exempelpromptar**. Detta lägger till inbyggda exempel så att du kan komma igång snabbt.

<br/>

> ℹ️ **OBS**<br/>
> Exempelpromptar tillhandahålls på engelska. När du har laddat dem kan du redigera en prompt och använda **Översätt prompt** för att översätta den till ditt språk.

<br/>

<a id="create-a-prompt-quickly"></a>
### Skapa en prompt snabbt

Det snabbaste sättet att skapa en prompt är:

1. Klicka på **Ny prompt**.
2. Klicka på **Generera prompt**.
3. Beskriv vad du vill att prompten ska göra.
4. Välj en modell.
5. Låt appen skapa ett förslag åt dig.
6. Granska förslaget och klicka på **Spara**.

![Generera prompt](../images/screenshots/sv/transform-generate.png)


<br/>

<a id="edit-a-prompt"></a>
### Redigera en prompt

När du skapar eller redigerar en prompt visas en redigerare till vänster och ett testområde till höger.

![Redigerare för Transformera-prompt](../images/screenshots/sv/transform-prompt-edit.png)

De viktigaste fälten är:

- **Promptnamn**: namnet som visas i listan med tillgängliga promptar.
- **Promptinstruktioner (valfritt)**: en kort handledning som visas för användaren när prompten körs.
- **Modells roll**: den övergripande roll som tilldelas AI:n, exempelvis "Du är en hjälpsam assistent."
- **Modellinstruktioner (en per rad)**: de specifika regler som du vill att AI:n ska följa.
- **Beskrivning av utdata**: ett kort ord som beskriver resultatet, till exempel "sammanfattning" eller "omskrivning".
- **Temperatur (0,0 → 1,0)**: hur modellen beter sig; se beskrivning nedan.
- **Fråga efter målspråk**: lägger till en språkväljare när prompten körs.

Om den tekniska termen **Temperatur** är ny för dig, tänk på det så här:

- En **lägre** temperatur ger mer stabila och förutsägbara resultat.
- En **högre** temperatur ger större variation och kreativitet.

Du kan även använda:

- **`Generera prompt`** för att skapa ett nytt utkast från en enkel beskrivning
- **`Förbättra prompt`** för att förbättra en befintlig prompt
- **`Översätt prompt`** för att översätta innehållet i prompten

<br/>

> ⚠️ **VARNING**<br/>
> Klicka på **`Spara`** innan du klickar på **`Tillbaka till körning`**. Om du går tillbaka utan att spara kommer dina ändringar att gå förlorade.

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
> Du kan exportera och importera sparade promptar i [**Inställningar** > **Transformera-promptar**](#transform-prompts).

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="dashboard"></a>
## Instrumentpanel

Använd **Instrumentpanelen** för att se hur mycket du använder appen och vad det kostar (för betalmodeller).

![Sammanfattning av instrumentpanel](../images/screenshots/sv/dashboard-summary.png)


<br/>

> ℹ️ **OBS**<br/>
> Om du endast använder kostnadsfria modeller kommer kostnadsrelaterade diagram att vara tomma.

<br/>

<a id="filter-the-data"></a>
### Filtrera data

Använd filterknapparna längst upp för att ändra tidsperioden.

![Filter i instrumentpanel](../images/screenshots/sv/dashboard-filter.png)

<br/>

> ℹ️ **OBS**<br/>
> **Användarfilter** visas endast för administratörer i webbversionen. Regelbundna användare kommer inte att se detta filter, och det finns inte tillgängligt i skrivbordsappen.

<br/>

<a id="dashboard-tabs"></a>

### Flikar i instrumentpanelen

- **Sammanfattning** ger dig en översikt över användning och kostnad.
- **Efter användning** bryter ner aktiviteten per översättningsspråk, omskrivningsläge och transformeringstolkning.
- **Efter modell** visar vilka modeller du använt och deras kostnad.
- **Efter dag** visar totalsummor per dag.
- **Alla anrop** visar hela anropsloggen och låter dig exportera den.

<br/>

<a id="export-data"></a>
### Exportera data

Datatabeller i instrumentpanelen kan exportera data i:

- **JSON**
- **CSV**
- **XLSX**

Det är användbart om du vill granska aktivitet utanför appen eller dela en rapport.

<br/>

<a id="delete-stored-records-for-a-model"></a>
### Ta bort sparade poster för en modell

I **Efter modell** eller **Alla anrop** kan du ta bort sparade poster för en modell genom att klicka på papperskorgsikonen.

> ⚠️ **VARNING**<br/>
> Borttagning av sparade poster kan inte ångras. Använd detta endast om du är säker på att du inte längre behöver den historiken.

För att ta bort alla data eller ta bort poster baserat på hur gamla de är, gå till [**Inställningar** > **Kostnadsspårning**](#cost-tracking). Där finns alternativ för att radera all sparad data eller endast data äldre än ett visst datum.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="history"></a>
## Historik

Klicka på **Historik** för att se din aktivitetshistorik i **Transrewrt**, inklusive indata och utdata från varje åtgärd.

![Historiksida](../images/screenshots/sv/history.png)

<br/>

<a id="filter-the-history"></a>
### Filtrera data

**Historik** använder samma filter som sidan **Instrumentpanel**. Använd dem för att välja tidsperiod.

![Instrumentpanelfilter](../images/screenshots/sv/dashboard-filter.png)

<br/>

> ℹ️ **OBS**<br/>
> Filteret **Användare** är endast synligt för administratörer i webbversionen. Vanliga användare ser inte detta filter, och det är inte tillgängligt i skrivbordsappen.

<br/>

<a id="export-history-data"></a>
### Exportera historikdata

Historiksidan kan exportera den filtrerade datan i:

- **JSON**
- **CSV**
- **XLSX**

Det är användbart om du vill granska aktivitet utanför appen eller dela en rapport.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="settings"></a>
## Inställningar

Öppna **Inställningar** från sidofältet för att anpassa hur appen beter sig.

Tillgängliga flikar beror på plattform och din roll:

  | Flik               | Skrivbord | Webb (admin) | Webb (vanlig användare) |
  |-------------------|:-------:|:-----------:|:------------------:|
  | Allmänna inställningar  |   ja   |     ja     |        ja         |
  | Modeller            |   ja   |     ja     |        ja         |
  | Språk               |   ja   |     ja     |        ja         |
  | Kostnadsspårning     |   ja   |     ja     |         –          |
  | Transformtolkningar |   ja   |     ja     |        ja         |
  | Användare           |    –    |     ja     |         –          |
  | API-konfig          |   ja   |     ja     |         –          |
  | Om                  |   ja   |     ja     |        ja         |

<br/>

> ℹ️ **OBS**<br/>
> I webbversionen har varje användare sin egen konfiguration. Inställningar som valda modeller, språk, allmänna alternativ och transformtolkningar sparas per användare. Ändringar du gör påverkar inte andra användare.

<br/>


[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="general-settings"></a>
### Allmänna inställningar

Använd **Allmänna inställningar** för att styra bättningsbeteende, om körningsdetaljer sparas för **Historik** och utseende.

**Beteende**

- **Beteende för RETUR** väljer om `Retur` utför åtgärden eller infogar en ny rad.
- **Automatisk översättning vid klistra in** startar översättning så fort du klistrar in text.
- **Kopiera resultat automatiskt till urklipp** kopierar lyckade resultat automatiskt.
- **Översättning i realtid (medan du skriver)** översätter medan du skriver.
- **Tidsgräns (ms)** anger väntetiden för översättning i realtid.

**Historik**

- **Spara körningshistorik** styr om varje översättning, omskrivning och transformering lagrar **indata och utdata** för sidofältets [**Historik**](#history). Att stänga av detta medför en bekräftelsedialog; om du bekräftar tas den sparade historiktexten bort från databasen.
- **Ta bort historikdata** låter dig radera lagrad text baserat på ålder (t.ex. äldre än några månader eller **alla data (rensa)**) med hjälp av **Ta bort data**. Detta påverkar endast sparad körningstext för **Historik**; det **raderar inte** kostnads- eller användningssummeringar. För att ta bort eller trimma **kostnadsdata**, använd [**Inställningar** > **Kostnadsspårning**](#cost-tracking).

**Utseende**

- **Visa kostnadsinformation i åtgärderna** styr visning av kostnad per åtgärd (om tillgängligt) och total kostnad på panelerna för Översätt, Omskriv och Transformera.
- **Antal decimaler för kostnad** ändrar hur kostnadsdecimaler visas.
- **Endast webben:** **visa marginal runt appen** lägger till extra utrymme runt gränssnittet.
- **Typsnitt** ändrar skrivtypen i textpanelerna.
- **Storlek** ändrar teckenstorleken.

<br/>

<a id="models"></a>

### Modeller

Använd **Inställningar** > **Modeller** för att välja vilka modeller som ska visas i verktygsfältet.

![Inställningar - Modeller-flik](../images/screenshots/sv/settings-models.png)

Sidan har två listor:

- **Tillgängliga modeller** till vänster
- **Valda modeller** till höger

Användbara kontroller inkluderar:

- **Sök modeller...** för att hitta en modell efter namn
- **Leverantörsflikar** för att begränsa listan till en motor (OpenRouter, OpenAI, Ollama, …)
- **Endast gratis** för att bara visa kostnadsfria modeller
- **Uppdatera** för att ladda om listan
- **Expandera alla** och **Komprimera alla** när du sorterar efter leverantör

Modell-ID:n inkluderar leverantörsrefix (till exempel `openrouter/…` vs `openai/…`). Badges som **OpenAI (OpenRouter)** jämfört med **OpenAI (direkt)** visar hur trafiken dirigeras.

> ℹ️ **OBS**<br/>
> **OpenRouter Body Builder** (`openrouter/bodybuilder`) är en routermodell, inte en allmän chattmodell: dess svar är JSON som beskriver OpenRouter API-begärandekroppar (till exempel en `requests`-array med `model` och `messages`). Om du använder det för **Översätt**, **Skriv om** eller **Omforma**, kommer utmatningsfönstret att visa just det JSON-objektet istället för färdig text. Välj en vanlig textmodell för dessa uppgifter. Se [Body Builder modellsida](https://openrouter.ai/openrouter/bodybuilder) på OpenRouter.

Åtgärder:

 - För att lägga till en modell, klicka på **Lägg till** eller var som helst i inlägget.

 - För att ta bort en modell, klicka på **X** bredvid den i **Valda modeller** eller **Vald** i inlägget under Tillgängliga modeller.

 - För att tömma listan, klicka på **Avmarkera alla**. Den nödvändiga kostnadsfria modellen kommer att förbli i listan.

<br/>

> ℹ️ **OBS**<br/>
> Om du inte vill lägga till krediter till OpenRouter direkt, börja med att aktivera **Endast gratis** och välj kostnadsfria modeller (inget kreditkort krävs). Du kan också använda Ollama för att köra modeller lokalt utan API-nyckel.

<br/>

<a id="languages"></a>
### Språk

Använd **Inställningar** > **Språk** för att organisera språklistorna som används i appen.

- **Topp-språk** är fästa nära toppen av språklistorna i **Översätt** och **Omforma**.
- **Anpassat språk** låter dig lägga till ett språk som inte finns i den inbyggda listan.

Om du lägger till ett anpassat språk visas det i språkväljarna bredvid de förinställda alternativen.

<br/>

<a id="cost-tracking"></a>
### Kostnadsövervakning

Använd **Inställningar** > **Kostnadsövervakning** för att hantera kostnadsinformation.

- **Total kostnad** visar löpande totalsumma.
- **Kopiera värde** kopierar totalsumman till urklipp.
- **Återställ kostnad** återställer den sparade summan till noll.
- **Synkronisera med API-nyckels användning** ställer in totalsumman till matcha den användning som rapporteras av ditt OpenRouter-konto (endast OpenRouter).
- **API-nyckelns användning** visar detaljer om OpenRouter-användning, om tillgängligt.
- **Radera kostnadsdata** tar bort all data, eller endast poster äldre än ett valt datum.

**Kostnadsövervakning:** När du använder OpenRouter-modeller visar appen din faktiska användning och kostnader baserat på prisinformation från OpenRouter. För alla andra leverantörer uppskattar appen kostnaderna med priser publicerade av OpenRouter; om ett pris inte är tillgängligt kan uppskattningen vara noll.

<br/>

> ℹ️ **OBS**<br/>
> **Alla kostnadssiffror är uppskattningar endast för din information – inte officiella fakturor.**

<br/>

> ⚠️ **VARNING**<br/>
> Datat borttagning kan inte ångras. Innan du tar bort data, se till att säkerhetskopiera eller exportera det via [**Historik**](#history) eller [**Instrumentpanel** > **Alla anrop**](#dashboard-tabs), annars kommer det att gå förlorat permanent. All historik om indata/utdata kopplad till varje API-anropsinlägg kommer också att tas bort.

<br/>

<a id="transform-prompts"></a>
### Omformningsförslag

Använd **Inställningar** > **Omformningsförslag** för att hantera förslag i större skala.

Du kan:

- granska dina sparade förslag
- radera förslag
- importera förslag från en fil
- exportera förslag för säkerhetskopiering eller delning

<br/>

<a id="users"></a>
### Användare

Använd **Användare** för att hantera användarkonton i webbversionen. Du kan lägga till användare, uppdatera deras detaljer, återställa lösenord och ta bort konton.

<br/>

<a id="api-config"></a>
### API-konfiguration

De stödda leverantörerna är: OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras och **Ollama** (lokala modeller via en bas-URL). Du behöver bara konfigurera de leverantörer du använder.

**Webbapplikation: endast administratör**

API-nycklar konfigureras genom system- eller Docker-miljövariabler – de matas inte in i webbgränssnittet. Den här sidan visar vilka leverantörer som har en konfigurerad nyckel och låter dig testa varje en med knappen **`Testa`**.

<br/>

> ℹ️ **OBS**<br/>
> För att ändra en API-nyckel, uppdatera miljövariabeln i din system- eller Docker-konfiguration och starta om servern eller containern.

<br/>

**Skrivbordsprogram**

Använd **API-konfig** för att lagra API-nycklar för varje leverantör du använder. För Ollama anger du **bas-URL:en** istället för en API-nyckel.

<br/>

> 💡 **Tips** <br/>
> Om du inte vill använda en API-nyckel eller betala för användning kan du [ladda ner Ollama](https://ollama.com) och köra modeller (till exempel `translategemma:4b`) lokalt på din dator helt kostnadsfritt. Alternativt kan du skapa ett gratis OpenRouter-konto (inget kreditkort krävs) för att använda deras kostnadsfria modeller, eller skaffa en gratis API-nyckel från Cerebras, Google, Groq eller Mistral AI.

<br/>

- Lägg endast till de leverantörer du behöver. I **Inställningar** > **Modeller** börjar varje modell-ID med leverantören (till exempel `openrouter/openrouter/free`, `openai/gpt-4o`, `ollama/llama3`).

För att lägga till en API-nyckel, ange värdet i textfältet och klicka **`Spara`**. För att ersätta en befintlig nyckel, klicka på **`Redigera`**. För att kontrollera att en nyckel fungerar, klicka på **`Testa`**. För Ollamas bas-URL, klicka alltid på **`Testa`** för att kontrollera anslutningen.

<br/>

> ℹ️ **OBS**<br/>
> Du kan inte se det aktuella värdet på en API-nyckel. Du kan endast ersätta den med hjälp av knappen **`Redigera`**.
> API-nycklar lagras krypterade i konfigurationen.

<br/>

<a id="about"></a>

### Om

Fliken **Om** visar:

- appens namn
- versionsnumret
- byggdatum
- en länk till projektdatabasen

<br/><br/>

<a id="common-issues"></a>
## Vanliga problem

Om något inte fungerar som det ska, kontrollera följande punkter först.

<br/>

<a id="the-app-will-not-translate-rewrite-or-transform-text"></a>
### Appen översätter, omskriver eller omvandlar inte text

Kontrollera att:

- du har valt en modell i verktygsfältet
- minst en modell finns listad under [**Inställningar** > **Modeller**](#models)
- din API-konfiguration fungerar

Om du använder skrivbordsappen:

1. Öppna [**Inställningar** > **API-konfiguration**](#api-config).
2. Se till att minst en API-nyckel är sparad.
3. Klicka på **Testa** bredvid leverantören för att bekräfta att nyckeln fungerar.

<br/>

<a id="the-model-list-is-empty"></a>
### Modellistan är tom

Öppna [**Inställningar** > **Modeller**](#models) och klicka på **Uppdatera**.

Behövs:

- sök efter en modell
- aktivera **Endast gratismodeller**
- lägg till en eller flera modeller till **Valda modeller**

<br/>

<a id="the-result-is-too-slow-or-too-expensive"></a>
### Resultatet är för långsamt eller för dyrt

Försök med en eller flera av följande:

- välj en annan modell
- använd en kortare inmatning
- inaktivera **Översättning i realtid (medan du skriver)** i [**Inställningar** > **Allmänna inställningar**](#general-settings)
- använd gratismodeller för enkla uppgifter (se [Modeller](#models))

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
### Diagrammen i instrumentpanelen är tomma

Detta är normalt om:

- du endast använder **gratismodeller** (kostnadsdiagram kommer vara tomma)
- det valda **tidsfiltret** inte täcker tidsperioden när anrop gjordes – prova **Alla** för att kontrollera

Om diagrammen fortfarande är tomma efter att du valt **Alla**, bekräfta att anrop visas i [**Historik**](#history) eller på fliken **Alla anrop**.

<br/>

<a id="cost-shows-not-available-or-seems-wrong"></a>
### Kostnad visar "inte tillgängligt" eller verkar felaktig

När du använder modeller via **OpenRouter**, visar appen din faktiska kostnad enligt rapportering från OpenRouter.

För **andra leverantörer** (OpenAI direkt, Anthropic direkt, osv.) är kostnaden en uppskattning baserad på prissättning från OpenRouter. Om inget matchande pris hittas för en modell kommer kostnaden att visas som **inte tillgänglig** och adderas inte till ditt totalbelopp.

<br/>

<a id="total-cost-does-not-match-my-provider-bill"></a>
### Total kostnad stämmer inte med fakturan från min leverantör

Alla kostnadsuppgifter i appen är **uppskattningar endast för referens**, inte officiella fakturor.

För att få totalen att bättre stämma överens med din faktiska OpenRouter-kostnad, öppna [**Inställningar** > **Kostnadsverifiering**](#cost-tracking) och klicka på **Synkronisera med API-nyckelns användning**.

<br/>

<a id="the-history-page-is-missing-from-the-sidebar"></a>
### Historiksiden saknas i sidomenyn

Alternativet **Behåll körningshistorik** kan vara avmarkerat. Öppna [**Inställningar** > **Allmänna inställningar**](#general-settings) och aktivera det. Observera att aktivering inte återställer tidigare borttagna historikdata.

<br/>

<a id="web-app-session-expired"></a>
### Webbappen: omdirigeras till inloggningssidan oväntat

Din session kan ha gått ut. Logga in igen. Om det sker ofta, kontrollera serverkonfigurationen för inställningarna av sessionens livslängd.

<br/>

<a id="dashboard-shows-no-data-for-other-users"></a>
### Instrumentpanelen visar ingen data för andra användare (webb)

Endast **administratörer** kan visa data från alla användare via filtret **Användare**. Regelbundna användare ser endast sin egen aktivitet enligt design.

<br/>

<a id="i-changed-a-prompt-and-lost-the-edits"></a>
### Jag ändrade en prompt och förlorade redigeringen

När du redigerar en prompt måste du alltid klicka på **Spara** innan du klickar på **Tillbaka till körning**.

<br/><br/>

<a id="quick-tips"></a>
## Snabbtips

- Börja med [**Översätt**](#translate) för att säkerställa att din konfiguration fungerar innan du går vidare till [**Omskriv**](#rewrite) eller [**Omvandla**](#transform).
- Använd [**Omskriv**](#rewrite) för vardagliga formuleringar och förbättringar.
- Använd [**Omvandla**](#transform) när du behöver en återupprepad arbetsflödeslösning för en specifik uppgift.
- Använd [**Instrumentpanelen**](#dashboard) om du vill hålla koll på användning och kostnader.
- Använd [**Historik**](#history) för att granska tidigare åtgärder och deras fullständiga in- och uttexter.
- Exportera regelbundet prompts om du bygger ett promptbibliotek som du vill förvara säkert (se [Omvandla prompts](#transform-prompts)) eller om du vill dela det med andra.

<br/><br/>

<a id="disclaimer"></a>

## Ansvarsfriskrivning

Produktnamn och ikoner tillhör sina respektive ägare och används enbart för identifieringsändamål. Denna mjukvara är inte ansluten till eller godkänd av något av de nämnda varumärkena.

<br/><br/>

<a id="license"></a>
## Licens

Upphovsrätt © 2026 Waldemar Scudeller Jr.

[Apache License 2.0](LICENSE)