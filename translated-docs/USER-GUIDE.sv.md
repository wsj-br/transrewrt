---
translated_at: "2026-03-24T03:39:14.659Z"
source_hash: "fc671c16dd34a2c355752935670712beb8abd2ae65453de44983a2f2f0701696"
source_mtime: 1774306679773.736
model: "qwen/qwen3-235b-a22b-2507"
---
![Transrewrt-banner](../images/transrewrt_banner.png)

<a id="transrewrt-användarhandledning"></a>
# Användarhandledning

<br/>

<a id="introduktion"></a>
## Introduktion

Transrewrt hjälper dig att arbeta med text på tre sätt:

- **Översätt** – konvertera text från ett språk till ett annat.
- **Skriv om** – formulera om text på en annan stil, till exempel tydligare, kortare eller mer formell.
- **Transformera** – bearbeta text med anpassade AI-instruktioner kallade prompts.

<br/>

Den här handledningen förklarar hur du använder appen när den är installerad och igång. Installationsanvisningar finns i huvudfilen **[README](README.sv.md)**.

<br/>

> ℹ️ **OBS**<br/>
> Transrewrt finns som skrivbordsapp för Windows och Linux, och som självvärd webbapp. Denna handledning fokuserar på daglig användning av appen. När något endast gäller en viss version är det tydligt markerat.

<small>**Läs på andra språk:** [English (UK)](USER-GUIDE.sv.md) · [Português (BR)](USER-GUIDE.pt-BR.md) · [العربية](USER-GUIDE.ar.md) · [বাংলা](USER-GUIDE.bn.md) · [Català](USER-GUIDE.ca.md) · [简体中文](USER-GUIDE.zh-CN.md) · [繁體中文](USER-GUIDE.zh-TW.md) · [Hrvatski](USER-GUIDE.hr.md) · [Čeština](USER-GUIDE.cs.md) · [Nederlands](USER-GUIDE.nl.md) · [English (US)](USER-GUIDE.en-US.md) · [Filipino](USER-GUIDE.tl.md) · [Français](USER-GUIDE.fr.md) · [Deutsch](USER-GUIDE.de.md) · [Ελληνικά](USER-GUIDE.el.md) · [हिन्दी](USER-GUIDE.hi.md) · [Magyar](USER-GUIDE.hu.md) · [Italiano](USER-GUIDE.it.md) · [日本語](USER-GUIDE.ja.md) · [Basa Jawa](USER-GUIDE.jv.md) · [한국어](USER-GUIDE.ko.md) · [Bahasa Melayu](USER-GUIDE.ms.md) · [فارسی](USER-GUIDE.fa.md) · [Polski](USER-GUIDE.pl.md) · [Português (PT)](USER-GUIDE.pt.md) · [ਪੰਜਾਬੀ](USER-GUIDE.pa.md) · [Română](USER-GUIDE.ro.md) · [Русский](USER-GUIDE.ru.md) · [Slovenčina](USER-GUIDE.sk.md) · [Español](USER-GUIDE.es.md) · [Kiswahili](USER-GUIDE.sw.md) · [Svenska](USER-GUIDE.sv.md) · [తెలుగు](USER-GUIDE.te.md) · [ภาษาไทย](USER-GUIDE.th.md) · [Türkçe](USER-GUIDE.tr.md) · [Українська](USER-GUIDE.uk.md) · [Tiếng Việt](USER-GUIDE.vi.md)</small>

<br/>

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Innehållsförteckning** 

- [Innan du börjar](#innan-du-börjar)
  - [Hämta en gratis OpenRouter API-nyckel (skrivbordsapp)](#hur-man-hämtar-en-gratis-openrouter-api-nyckel-skrivbordsapp)
- [Kom igång](#kom-igång)
- [Huvuddelar i fönstret](#huvuddelar-i-fönstret)
  - [Sidofält](#sidofält)
  - [Verktygsfält](#verktygsfält)
  - [In- och utmatningsfält](#in-och-utmatningsfält)
- [Översätt](#översätt)
  - [Översätt text](#översätt-text)
  - [Språkval](#språkval)
  - [Användbara översättningsinställningar](#användbara-översättningsinställningar)
  - [Snabbtangenter](#snabbtangenter)
- [Skriv om](#skriv-om)
  - [Skriv om text](#skriv-om-text)
- [Transformera](#transformera)
  - [Kör en befintlig prompt](#kör-en-befintlig-prompt)
  - [Om du inte har några prompts än](#om-du-inte-har-några-prompts-än)
  - [Skapa en prompt snabbt](#skapa-en-prompt-snabbt)
  - [Redigera en prompt](#redigera-en-prompt)
  - [Testa en prompt innan du använder den](#testa-en-prompt-innan-du-använder-den)
  - [Hantera sparade prompts](#hantera-sparade-prompts)
- [Översikt](#översikt)
  - [Filtrera datan](#filtrera-datan)
  - [Översikt-flikar](#översikt-flikar)
  - [Exportera data](#exportera-data)
  - [Ta bort lagrade poster för en modell](#ta-bort-lagrade-poster-för-en-modell)
- [Historik](#historik)
  - [Filtrera datan](#filtrera-datan-1)
  - [Exportera historikdata](#exportera-historikdata)
- [Inställningar](#inställningar)
  - [Allmänna inställningar](#allmänna-inställningar)
  - [Modeller](#modeller)
  - [Språk](#språk)
  - [Kostnadsövervakning](#kostnadsövervakning)
  - [Transformationsprompts](#transformationsprompts)
  - [Användare](#användare)
  - [API-konfiguration](#api-konfiguration)
  - [Om](#om)
- [Vanliga problem](#vanliga-problem)
  - [Appen översätter, skriver om eller transformerar inte text](#appen-översätter-skriv-om-eller-transformerar-inte-text)
  - [Modellistan är tom](#modellistan-är-tom)
  - [Svaret är långsamt eller för dyrt](#svaret-är-långsamt-eller-för-dyrt)
  - [Gränssnittet är på fel språk](#gränssnittet-är-på-fel-språk)
  - [Texten är för liten eller svår att läsa](#texten-är-för-liten-eller-svår-att-läsa)
  - [Översikt-diagrammen är tomma](#översikt-diagrammen-är-tomma)
  - [Kostnaden visar "inte tillgänglig" eller verkar fel](#kostnaden-visar-inte-tillgänglig-eller-verkar-fel)
  - [Totalkostnaden stämmer inte med leverantörens faktura](#totalkostnaden-stämmer-inte-med-leverantörens-faktura)
  - [Historiksida saknas i sidofältet](#historiksida-saknas-i-sidofältet)
  - [Webbapp: omdirigeras till inloggningssidan oväntat](#webbapp-omdirigeras-till-inloggningssidan-oväntat)
  - [Översikten visar ingen data för andra användare (webb)](#översikten-visar-ingen-data-för-andra-användare-webb)
  - [Jag ändrade en prompt och förlorade redigeringen](#jag-ändrade-en-prompt-och-förlorade-redigeringen)
- [Snabba tips](#snabba-tips)
- [Ansvarsfriskrivning](#ansvarsfriskrivning)
- [Licens](#licens)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="innan-du-börjar"></a>

## Innan du börjar

För att använda Transrewrt behöver du tillgång till minst en AI-leverantör. De leverantörer som stöds är: [OpenRouter](https://openrouter.ai) (som samlar många modeller), OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI samt [Ollama](https://ollama.com) för lokala modeller.

Du behöver inte välja en betalmodell för att komma igång. Så fort du lägger till din OpenRouter-API-nyckel aktiverar appen automatiskt ett inbyggt **gratis** OpenRouter-alternativ. Detta gör att du kan börja översätta, skriva om och omvandla text direkt.

Med andra ord:

- En **modell** är den AI-motor som utför arbetet. Modeller listas med ett **leverantörs-prefix** (till exempel `openrouter/…`, `openai/…`, `ollama/…`).
- En **API-nyckel** (eller för Ollama, en **bas-URL**) är hur appen kommunicerar med leverantören.

Om du använder **skrivbordsappen** lägger du till nycklar under [**Inställningar** > **API-konfiguration**](#api-config) för varje leverantör du använder. För endast OpenRouter, se [Hämta en API-nyckel](#how-to-get-an-api-key-desktop-app) nedan. Om du inte vill använda en API-nyckel kan du istället installera Ollama (från [ollama.com](https://ollama.com)) och använda lokala modeller.

Om du använder **webbversionen** konfigurerar serverägaren leverantörerna via miljövariabler, så du behöver normalt inte ange API-nycklar själv.

<br/>

<a id="how-to-get-an-api-key-desktop-app"></a>
### Så här hämtar du en gratis OpenRouter-API-nyckel (skrivbordsappen)

Om du använder skrivbordsappen följer du dessa steg:

1. Gå till [OpenRouter](https://openrouter.ai) i din webbläsare.
2. Skapa ett konto eller logga in.
3. Öppna sidan [Nycklar](https://openrouter.ai/keys).
4. Klicka på knappen för att skapa en ny API-nyckel.
5. Ge nyckeln ett namn så att du kan identifiera den senare.
6. Kopiera den nya API-nyckeln.
7. Gå tillbaka till Transrewrt och öppna **Inställningar** > **API-konfiguration**.
8. Klistra in nyckeln i fältet **OpenRouter-API-nyckel** (under **Inställningar** > **API-konfiguration**).
9. Klicka på **Testa OpenRouter-nyckel** för att säkerställa att den fungerar.

<br/>

> ℹ️ **OBS**<br/>
> Du kan börja med OpenRouters fria väg eller någon av de andra tillgängliga gratismodellerna utan att lägga till ett kreditkort. I många fall räcker det för att kunna använda Transrewrt utan att välja en betalmodell. Alternativt kan du använda Ollama för att köra modeller lokalt utan API-nyckel.

<br/><br/>

<a id="getting-started"></a>
## Komma igång

Om det här är första gången du använder Transrewrt, följ den här ordningen:

1. Öppna appen.
2. Välj ditt **gränssnittsspråk** från globikonen om det behövs.
3. Om du använder **skrivbordsappen**, öppna [**Inställningar** > **API-konfiguration**](#api-config), lägg till en API-nyckel för minst en leverantör (till exempel OpenRouter) och klicka på **Testa** för att verifiera att den fungerar.
4. Öppna [**Inställningar** > **Modeller**](#models) och lägg till en eller flera modeller i **Valda modeller**.
5. Öppna [**Inställningar** > **Språk**](#languages) och välj dina **Topp-språk** om du vill att dina vanligaste språk ska visas först.
6. Gå till **Översätt** och kör en enkel översättning för att bekräfta att allt fungerar.
7. När det fungerar kan du prova **Skriv om** och sedan **Omvandla**.

Ordningen spelar roll. Den förhindrar det vanligaste problemet vid första användningen: att försöka köra en uppgift innan appen har en fungerande API-anslutning eller en vald modell.

<br/><br/>

<a id="main-parts-of-the-window"></a>
## Huvuddelar i fönstret

Appen är uppdelad i tre huvuddelar:

- **Sidofältet** till vänster.
- **Verktygsfältet** högst upp.
- **Arbetsytan** i mitten.

<br/>

<a id="sidebar"></a>
### Sidofält

Använd sidofältet för att navigera i appen. Du kan dölja sidofältet för mer utrymme genom att klicka på ikonen bredvid applogotypen.

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
        <li><strong>Skriv om</strong> öppnar arbetsytan för omformulering.</li><br/>
        <li><strong>Omvandla</strong> öppnar arbetsytan för anpassade prompter.</li><br/>
        <li><strong>Instrumentpanel</strong> visar användnings- och kostnadsinformation.</li><br/>
        <li><strong>Inställningar</strong> öppnar inställningsfönstret.</li><br/>
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

> ℹ️ **OBS**<br/>
> Vissa kostnadsfria modeller kanske inte alltid är tillgängliga – ibland är de frånkopplade eller har en användningsbegränsning. Om detta händer tar appen automatiskt bort den modellen från din tillgängliga lista.<br/>
> För att kontrollera vilka modeller som visas, gå till [**Inställningar** > **Modeller**](#models) och redigera din modelllista. 
> Du kan också öppna modellinställningar direkt genom att klicka på leverantörens ikon till vänster om modellens namn i verktygsfältet.

<br/>

**Globikonen + språkkoden** ändrar appens gränssnittsspråk, till exempel menyer och knappar. Det ändrar **inte** översättningsspråken som används i **Översätt**.

  ![Språkväljare för gränssnitt](../images/screenshots/sv/language-selector.png)

<br/>

<a id="input-and-output-panels"></a>
### Inmatnings- och utmatningsfält

De flesta arbetsytorna använder ett vänster **Inmatningsfält** och ett höger **Utmvningsfält**.

**Inmatningsfältet** visar:

- Teckenantal
- Ordantal
- Styckenantal

**Utmvningsfältet** kan visa:

- Hur lång tid uppgiften tog
- Kostnaden för uppgiften (om tillgänglig)
- Din totala löpande kostnad
- **TPS** (tokens per sekund)
- Antal tecken, ord och stycken
- Den modell som använts

Om du undrar över de tekniska termerna:

- **Token** betyder en liten textenhet. Du kan tänka på det som en del av ett ord eller ett kort ord.
- **TPS** betyder hur många sådana textenheter modellen bearbetade per sekund.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="translate"></a>
## Översätt

Använd **Översätt** när du vill konvertera text från ett språk till ett annat.

![Arbetsyta för översättning](../images/screenshots/sv/translate.png)

<br/>

<a id="translate-text"></a>
### Översätt text

1. Öppna **Översätt**.
2. Välj ett språk i **Från**.
3. Välj ett språk i **Till**.
4. Välj en modell i verktygsfältet.
5. Skriv in eller klistra in text i **Inmatning**.
6. Klicka på **Översätt**.
7. Läs resultatet i **Utmatning**.
8. Använd kopieringsknappen om du vill kopiera resultatet.

<br/>

<a id="language-selection"></a>
### Språkval

- **Från** kan vara ett specifikt språk eller **Identifiera språk**.
- **Till** är det språk du vill ha resultatet på.

Dina valda **Topp-språk** visas överst i listan. Du kan ställa in dem i [**Inställningar** > **Språk**](#languages).

<br/>

<a id="helpful-translation-settings"></a>
### Användbara översättningsinställningar

I [**Inställningar** > **Allmänna inställningar**](#general-settings) kan du ändra hur översättning fungerar:

- **Automatisk översättning vid klistra in** kör en översättning så snart du klistrar in text.
- **Kopiera resultat automatiskt till urklipp** kopierar resultatet automatiskt efter en lyckad körning.
- **Översättning i realtid (medan du skriver)** kör översättningar medan du skriver.
- **Tidsgräns (ms)** styr hur länge appen väntar innan den kör en översättning i realtid.

<br/>

<a id="keyboard-shortcuts"></a>
### Kortkommandon

I [**Inställningar** > **Allmänna inställningar**](#general-settings) kontrollerar **Beteende vid ENTER** vad som händer när du trycker på `Enter`:

- **Enter** kan köra uppgiften och **Shift+Enter** kan lägga till en ny rad.
- Eller så kan appen göra tvärtom.

Den aktuella läget visas även på knappen **Översätt**.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="rewrite"></a>
## Skriv om

Använd **Skriv om** när du vill förbättra formuleringen utan att ändra huvudbudskapet.

![Arbetsyta för omformulering](../images/screenshots/sv/rewrite.png)

Detta är användbart för:

- rätta stavning och grammatik
- göra texten tydligare
- göra texten mer formell eller mindre formell
- förkorta eller utöka text
- få texten att låta mer teknisk

<br/>

<a id="rewrite-text"></a>

### Skriv om text

1. Öppna **Skriv om**.
2. Välj en **läge**.
3. Välj en modell i verktygsfältet.
4. Skriv eller klistra in text i **Input**.
5. Klicka på **Skriv om**.
6. Granska resultatet i **Output**.

Samma beteende för Enter-tangenten som beskrivs i [**Översätt**](#keyboard-shortcuts) gäller även här.

<br/>

> 💡 **TIPS**<br/>
> När du använder läget "**Kontrollera stavning och grammatik**" visas en knapp `Visa ändringar` i utdatafönstret.
> Klicka på den här knappen för att växla visning av korrigeringar, så att de specifika ändringarna i din text visas eller döljs.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="transform"></a>
## Transformera

Använd **Transformera** när du vill att AI:n ska följa en egenuppsatt uppsättning instruktioner.

![Arbetsytan Transformera](../images/screenshots/sv/transform.png)

Detta är det mest flexibla området i appen. Du kan använda det för uppgifter såsom:

- sammanfatta anteckningar
- omvandla rå text till ett polerat e-postmeddelande
- extrahera nyckelpunkter
- konvertera text till ett specifikt format

<br/>

<a id="run-an-existing-prompt"></a>
### Kör en befintlig prompt

1. Öppna **Transformera**.
2. Välj en prompt från promptlistan.
3. Om en ruta för **Målspråk** visas, välj ett språk om du vill.
4. Skriv eller klistra in text i **Input**.
5. Klicka på **Transformera**.
6. Läs resultatet i **Output**.

<br/>

<a id="if-you-have-no-prompts-yet"></a>
### Om du inte har några prompts än

Om din promptlista är tom, klicka på **Läs in exempelprompts**. Detta lägger till inbyggda exempel så att du kan komma igång snabbt.

<br/>

> ℹ️ **OBS!**<br/>
> Exempelprompts tillhandahålls på engelska. När du läst in dem kan du redigera en prompt och använda **Översätt prompt** för att översätta den till ditt språk.

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

När du skapar eller redigerar en prompt visas redigeraren till vänster och ett testfält visas till höger.

![Redigeraren för transformprompt](../images/screenshots/sv/transform-prompt-edit.png)

De viktigaste fälten är:

- **Namn på prompt**: namnet som visas i promptlistan.
- **Promptinstruktioner (frivilligt)**: en kort handledning som visas för användaren när prompten körs.
- **Modellroll**: den övergripande roll som tilldelas AI, till exempel "Du är en hjälpsam assistent."
- **Modellinstruktioner (en per rad)**: de specifika regler du vill att AI:n ska följa.
- **Beskrivning av utdata**: ett kort ord som beskriver resultatet, till exempel "sammanfattning" eller "omskrivning".
- **Temperatur (0,0 → 1,0)**: hur modellen kommer att bete sig; se nedan.
- **Fråga efter målspråk**: lägger till en väljare för målspråk när prompten körs.

Om det tekniska begreppet **Temperatur** är nytt för dig, tänk på det så här:

- En **lägre** temperatur ger stabilare, mer förutsägbara resultat.
- En **högre** temperatur ger mer variation och kreativitet.

Du kan också använda:

- **`Generera prompt`** för att skapa ett nytt utkast från en enkel beskrivning
- **`Förbättra prompt`** för att förfinare en befintlig prompt
- **`Översätt prompt`** för att översätta promptens fält

<br/>

> ⚠️ **VARNING**<br/>
> Klicka på **`Spara`** innan du klickar på **`Tillbaka till körning`**. Om du återvänder utan att spara kommer dina ändringar att gå förlorade.

<br/>

<a id="test-a-prompt-before-using-it"></a>
### Testa en prompt innan du använder den

Testfältet till höger låter dig prova din prompt med exempeltext innan du använder den i dagliga arbetsuppgifter.

Det är användbart när:

- du skapar en ny prompt
- du jämför två versioner av en prompt
- du vill kontrollera ton, längd eller utdataformat

<br/>

<a id="manage-saved-prompts"></a>
### Hantera sparade prompts

För att hantera sparade prompts på ett ställe, öppna [**Inställningar** > **Transformera-prompts**](#transform-prompts).

Där kan du:

- lista och ta bort dina prompts
- exportera prompts som **JSON**, **CSV** eller **XLSX**
- importera prompts från en fil

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="dashboard"></a>

## Instrumentpanel

Använd **Instrumentpanel** för att se hur mycket du använder appen och vad det kostar (för betalmodeller).

![Sammanfattning av instrumentpanel](../images/screenshots/sv/dashboard-summary.png)


<br/>

> ℹ️ **OBS**<br/>
> Om du endast använder kostnadsfria modeller kommer kostnadsrelaterade diagram att vara tomma.

<br/>

<a id="filter-the-data"></a>
### Filtrera data

Använd filterknapparna längst upp för att ändra tidsperioden.

![Filter för instrumentpanel](../images/screenshots/sv/dashboard-filter.png)

<br/>

> ℹ️ **OBS**<br/>
> **Användar**-filtret är endast synligt för administratörer i webbversionen. Vanliga användare kommer inte att se detta filter, och det är inte tillgängligt i skrivbordsappen.

<br/>

<a id="dashboard-tabs"></a>
### Flikar i instrumentpanelen

- **Sammanfattning** ger en översikt av användning och kostnad.
- **Per användning** delar upp aktiviteten per översättningsspråk, omskrivningsläge och transformering av prompt.
- **Per modell** visar vilka modeller du använt och hur mycket de kostat.
- **Per dag** visar totalsiffror per dag.
- **Alla anrop** visar den fullständiga anropsjournalen och låter dig exportera den.

<br/>

<a id="export-data"></a>
### Exportera data

Instrumentpanelens tabeller kan exportera data i:

- **JSON**
- **CSV**
- **XLSX**

Detta är användbart om du vill granska aktiviteter utanför appen eller dela en rapport.

<br/>

<a id="delete-stored-records-for-a-model"></a>
### Ta bort sparade poster för en modell

På fliken **Per modell** eller **Alla anrop** kan du ta bort sparade poster för en modell genom att klicka på papperskorgsikonen.

> ⚠️ **VARNING**<br/>
> Borttagning av sparade poster kan inte ångras. Använd detta endast om du är säker på att du inte längre behöver den historiken.

Om du vill ta bort alla data eller ta bort poster baserat på ålder går du till [**Inställningar** > **Kostnadsspårning**](#cost-tracking). Där hittar du alternativ för att ta bort all sparad data eller endast data som är äldre än ett visst datum.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="history"></a>
## Historik

Klicka på **Historik** för att se din aktivitetshistorik i **Transrewrt**, inklusive indata och utdata för varje åtgärd.

![Historiksida](../images/screenshots/sv/history.png)

<br/>

<a id="filter-the-history"></a>
### Filtrera historiken

**Historik** använder samma filter som sidan **Instrumentpanel**. Använd dem för att välja tidsperiod.

![Filter för instrumentpanel](../images/screenshots/sv/dashboard-filter.png)

<br/>

> ℹ️ **OBS**<br/>
> **Användar**-filtret är endast synligt för administratörer i webbversionen. Vanliga användare kommer inte att se detta filter, och det är inte tillgängligt i skrivbordsappen.

<br/>

<a id="export-history-data"></a>
### Exportera historikdata

Historiksidan kan exportera filtrerade data i:

- **JSON**
- **CSV**
- **XLSX**

Detta är användbart om du vill granska aktiviteter utanför appen eller dela en rapport.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="settings"></a>
## Inställningar

Öppna **Inställningar** från sidofältet för att anpassa hur appen fungerar.

De tillgängliga flikarna beror på plattform och din roll:

  | Flik                | Skrivbord | Webb (admin) | Webb (vanlig användare) |
  |---------------------|:---------:|:-----------:|:-----------------------:|
  | Allmänna inställningar |   ja    |     ja      |          ja             |
  | Modeller            |   ja    |     ja      |          ja             |
  | Språk               |   ja    |     ja      |          ja             |
  | Kostnadsspårning    |   ja    |     ja      |           –             |
  | Transformera prompts|   ja    |     ja      |          ja             |
  | Användare           |    –    |     ja      |           –             |
  | API-konfiguration   |   ja    |     ja      |           –             |
  | Om                  |   ja    |     ja      |          ja             |

<br/>

> ℹ️ **OBS**<br/>
> I webbversionen har varje användare sin egen konfiguration. Inställningar som valda modeller, språk, allmänna alternativ och transformsprång sparas per användare. Ändringar du gör påverkar inte andra användare.

<br/>


[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="general-settings"></a>

### Allmänna inställningar

Använd **Allmänna inställningar** för att styra beteendet vid skrivning, om körningsdetaljer sparas för **Historik** och utseendet.

**Beteende**

- **Beteende för RETUR** avgör om `RETUR` kör uppgiften eller infogar en ny rad.
- **Automatisk översättning vid klistra in** startar översättning så fort du klistrar in text.
- **Automatiskt kopiera resultat till urklipp** kopierar framgångsrika resultat automatiskt.
- **Översättning i realtid (medan du skriver)** översätter medan du skriver.
- **Tidsgräns (ms)** anger väntetiden för översättning i realtid.

**Historik**

- **Spara körningshistorik** avgör om varje översättning, omskrivning och omvandling lagrar **indata och utdata** för sidofältets [**Historik**](#history)-vy. Om du stänger av det här måste du bekräfta; om du gör det tas den lagrade historiktexten bort från databasen.
- **Ta bort historikdata** låter dig ta bort lagrad text baserat på ålder (t.ex. äldre än några månader eller **alla data (rensning)**) med **Ta bort data**. Det påverkar endast sparad körningstext i **Historik**-vyn; det tar **inte** bort kostnads- eller användningsdata. För att ta bort eller trimma **kostnadsdata** använder du [**Inställningar** > **Kostnadsövervakning**](#cost-tracking).

**Utseende**

- **Antal decimaler för kostnad** ändrar hur antalet decimaler i kostnaden visas.
- **Endast webb:** **visa marginal runt appen** lägger till extra utrymme runt gränssnittet.
- **Typsnitt** ändrar skrivtypen i textfälten.
- **Storlek** ändrar teckenstorleken.


<br/>

<a id="models"></a>
### Modeller

Använd **Inställningar** > **Modeller** för att välja vilka modeller som visas i verktygsfältet.

![Inställningar fliken Modeller](../images/screenshots/sv/settings-models.png)

Sidan har två listor:

- **Tillgängliga modeller** till vänster
- **Valda modeller** till höger

Användbara kontroller inkluderar:

- **Sök efter modeller...** för att hitta en modell efter namn
- **Leverantörs-flikar** för att begränsa listan till en motor (OpenRouter, OpenAI, Ollama, …)
- **Endast gratis** för att endast visa gratis modeller
- **Uppdatera** för att ladda om listan
- **Expandera alla** och **Komprimera alla** när du sorterar efter leverantör

Modell-ID:n inkluderar leverantörens prefix (t.ex. `openrouter/…` jämfört med `openai/…`). Badges som **OpenAI (OpenRouter)** jämfört med **OpenAI (direkt)** visar hur trafiken dirigeras.

Åtgärder:

 - För att lägga till en modell klickar du på **Lägg till** eller var som helst i posten.

 - För att ta bort en modell klicka på **X** bredvid den i **Valda modeller** eller **Vald** i posten i Tillgängliga modeller.

 - För att rensa listan, klicka på **Avmarkera alla**. Den obligatoriska kostnadsfria modellen kommer att finnas kvar i listan.

<br/>

> ℹ️ **OBS**<br/>
> Om du inte vill lägga till krediter till OpenRouter direkt, börja med att aktivera **Endast gratis** och välja de kostnadsfria modellerna (inget kreditkort krävs). Du kan också använda Ollama för att köra modeller lokalt utan API-nyckel.

<br/>

<a id="languages"></a>
### Språk

Använd **Inställningar** > **Språk** för att organisera språklistorna används i appen.

- **Topp-språk** fästs högst upp i språklistorna i **Översätt** och **Omvandla**.
- **Anpassat språk** låter dig lägga till ett språk som inte finns i den inbyggda listan.

Om du lägger till ett anpassat språk visas det i språkväljarna tillsammans med de inbyggda alternativen.

<br/>

<a id="cost-tracking"></a>
### Kostnadsövervakning

Använd **Inställningar** > **Kostnadsövervakning** för att hantera kostnadsinformation.

- **Total kostnad** visar löpande totalsumma.
- **Kopiera värde** kopierar totalsumman till urklipp.
- **Återställ kostnad** nollställer den lagrade totalsumman.
- **Synkronisera med API-nyckelns användning** ställer in totalsumman så att den matchar användningen rapporterad av ditt OpenRouter-konto (endast OpenRouter).
- **API-nyckelns användning** visar OpenRouter-användningsdetaljer, om tillgängligt.
- **Ta bort kostnadsdata** tar bort alla data eller endast poster äldre än ett valt datum.


 **Kostnadsövervakning:** När du använder OpenRouter-modeller visar appen din faktiska användning och utgifter baserat på data från OpenRouter. För alla andra leverantörer uppskattar appen kostnader med priser som är publicerade av OpenRouter. Om ett pris inte är tillgängligt kan uppskattningen vara noll.

<br/>

> ℹ️ **OBS**<br/>
> **Alla kostnadsbelopp är endast uppskattningar för din information, inte officiella fakturor.**


<br/>

> ⚠️ **VARNING**<br/>
> Borttagning av data kan inte ångras. Innan du tar bort data bör du säkerhetskopiera eller exportera dem via [**Instrumentpanel** > **Alla anrop**](#dashboard-tabs), annars kommer de att förloras för alltid. <br/>
> All historik relaterad till varje API-anropspost kommer också att tas bort.


<br/>

<a id="transform-prompts"></a>

### Omvandla prompter

Använd **Inställningar** > **Omvandla prompter** för att hantera prompter i större skala.

Du kan:

- granska dina sparade prompter
- ta bort prompter
- importera prompter från en fil
- exportera prompter för säkerhetskopiering eller delning

<br/>

<a id="users"></a>
### Användare

**Webb: endast administratör**

Använd **Användare** för att hantera användarkonton i webbversionen. Du kan lägga till användare, uppdatera deras uppgifter, återställa lösenord och ta bort konton.

<br/>

<a id="api-config"></a>
### API-konfiguration

De leverantörer som stöds är: OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI och **Ollama** (lokala modeller via en bas-URL). Du behöver endast konfigurera de leverantörer du använder.

**Webbapplikation: endast administratör**

API-nycklar konfigureras via system- eller Docker-miljövariabler – de matas inte in i webbgränssnittet. På den här sidan visas vilka leverantörer som har en nyckel konfigurerad, och du kan testa varje leverantör genom att klicka på knappen **`Test`**.

<br/>

> ℹ️ **OBS**<br/>
> För att ändra en API-nyckel måste du uppdatera miljövariabeln i din system- eller Docker-konfiguration och sedan starta om servern eller containern.

<br/>

**Skrivbordsapplikation**

Använd **API-konfiguration** för att lagra API-nycklar för varje leverantör du använder. För Ollama anger du **bas-URL** istället för en API-nyckel.


<br/>

> 💡 **Tips** <br/>
> Om du inte vill använda en API-nyckel eller betala för användning kan du [ladda ner Ollama](https://ollama.com) och köra modeller lokalt på din dator helt kostnadsfritt. Alternativt kan du skapa ett kostnadsfritt OpenRouter-konto (inget kreditkort krävs) för att använda deras fria modeller.

- Lägg endast till de leverantörer du behöver. I **Inställningar** > **Modeller** börjar varje modell-id med leverantörens namn (t.ex. `openrouter/openrouter/free`, `openai/gpt-4o`, `ollama/llama3`).

För att lägga till en API-nyckel, skriv in värdet i textfältet och klicka på **`Spara`**. För att ersätta en befintlig nyckel, klicka på **`Redigera`**. För att kontrollera om en nyckel fungerar, klicka på **`Test`**.

<br/>

> ℹ️ **OBS**<br/>
> Du kan inte se det aktuella värdet för en API-nyckel. Du kan endast ersätta den genom att använda knappen **`Redigera`**.
> API-nycklar lagras krypterade i konfigurationsfilen.

<br/>

För detaljerade anvisningar om hur du får tag på en OpenRouter-nyckel, se [Så här skaffar du en API-nyckel](#how-to-get-an-api-key-desktop-app) ovan.



<br/>

<a id="about"></a>
### Om

Fliken **Om** visar:

- applikationens namn
- versionsnummer
- byggdatum
- en länk till projektdatabasen

<br/><br/>

<a id="common-issues"></a>
## Vanliga problem

Om något inte fungerar som det ska, kontrollera först följande punkter.

<br/>

<a id="the-app-will-not-translate-rewrite-or-transform-text"></a>
### Appen översätter, skriver om eller omvandlar inte text

Kontrollera att:

- du har valt en modell i verktygsfältet
- minst en modell finns i [**Inställningar** > **Modeller**](#models)
- din API-konfiguration fungerar

Om du använder skrivbordsappen:

1. Öppna [**Inställningar** > **API-konfiguration**](#api-config).
2. Kontrollera att minst en API-nyckel har sparats.
3. Klicka på **Test** bredvid leverantören för att bekräfta att nyckeln fungerar.

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

Prova ett eller flera av följande alternativ:

- välj en annan modell
- använd kortare indata
- stäng av **Översättning i realtid (medan du skriver)** i [**Inställningar** > **Allmänna inställningar**](#general-settings)
- använd fria modeller för enklare uppgifter (se [Modeller](#models))

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
### Diagrammen på instrumentpanelen är tomma

Detta är normalt om:

- du använder endast **gratis modeller** (kostnadsdiagram kommer att vara tomma)
- det valda **tidsfiltret** inte täcker den period då anrop gjordes – prova med **Alla** för att kontrollera

Om diagrammen fortfarande är tomma efter att du valt **Alla**, bekräfta att anrop visas i [**Historik**](#history) eller i fliken **Alla anrop**.

<br/>

<a id="cost-shows-not-available-or-seems-wrong"></a>

### Kostnaden visar "inte tillgänglig" eller verkar felaktig

När du använder modeller via **OpenRouter** visar appen din faktiska förbrukning enligt uppgifter från OpenRouter.

För **andra leverantörer** (OpenAI direkt, Anthropic direkt osv.) är kostnaden uppskattad utifrån prissättning från OpenRouter. Om inget matchande pris hittas för en modell kommer kostnaden att visas som **inte tillgänglig** och läggs inte till i din löpande total.

<br/>

<a id="total-cost-does-not-match-my-provider-bill"></a>
### Totalkostnaden matchar inte min leverantörsfaktura

Alla kostnadsuppgifter i appen är **uppskattningar endast för vägledning**, inte officiella fakturor.

För att anpassa totalen närmare din faktiska OpenRouter-förbrukning, öppna [**Inställningar** > **Kostnadsspårning**](#cost-tracking) och klicka på **Synkronisera med API-nyckelns användning**.

<br/>

<a id="the-history-page-is-missing-from-the-sidebar"></a>
### Historiksidan saknas i sidofältet

Alternativet **Behåll körningshistorik** kan vara inaktiverat. Öppna [**Inställningar** > **Allmänna inställningar**](#general-settings) och aktivera det. Observera att aktivering inte återställer tidigare borttagna historikdata.

<br/>

<a id="web-app-session-expired"></a>
### Webbappen: omdirigerad till inloggningssidan oväntat

Din session kan ha löpt ut. Logga in igen. Om det händer ofta, kontrollera serverkonfigurationen för inställningar av sessionens livslängd.

<br/>

<a id="dashboard-shows-no-data-for-other-users"></a>
### Översikten visar ingen data för andra användare (webb)

Endast **administratörer** kan se data från alla användare via filtret **Användare**. Regelbundna användare ser enbart sin egen aktivitet enligt design.

<br/>

<a id="i-changed-a-prompt-and-lost-the-edits"></a>
### Jag ändrade en prompt och förlorade ändringarna

När du redigerar en prompt, kom ihåg att alltid klicka på **Spara** innan du klickar på **Tillbaka till körning**.

<br/><br/>

<a id="quick-tips"></a>
## Snabbtips

- Börja med [**Översätt**](#translate) för att säkerställa att din installation fungerar innan du går vidare till [**Skriv om**](#rewrite) eller [**Transformera**](#transform).
- Använd [**Skriv om**](#rewrite) för dagliga formuleringsoptimeringar.
- Använd [**Transformera**](#transform) när du behöver ett återanvänt arbetsflöde för en specifik uppgift.
- Använd [**Översikt**](#dashboard) om du vill hålla koll på användning och kostnader.
- Använd [**Historik**](#history) för att granska tidigare åtgärder och deras fullständiga in- och utdata.
- Exportera regelbundet dina prompts om du bygger en promptbibliotek som du vill spara säkert (se [Transformera prompts](#transform-prompts)) eller om du vill dela den med andra.

<br/><br/>

<a id="disclaimer"></a>
## Ansvarsfriskrivning

Produktnamn och ikoner tillhör sina respektive ägare och används endast för identifieringssyfte. Denna programvara är inte ansluten till eller godkänd av någon av de nämnda varumärkena.

<br/><br/>

<a id="license"></a>
## Licens

Upphovsrätt © 2026 Waldemar Scudeller Jr.

[Apache License 2.0](LICENSE)