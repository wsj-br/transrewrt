---
translated_at: "2026-03-15T22:28:06.088Z"
source_hash: "69732149de931f2a0059ecf9073871caedaa431362e32c010e7d93bd3cbd76bc"
source_mtime: 1773611603946.006
model: "stepfun/step-3.5-flash:free"
---
<a id="transrewrt-user-guide"></a>
# Transrewrt Användarguide

<br />

<a id="introduction"></a>
## Inledning

Transrewrt hjälper dig att arbeta med text på tre huvudsakliga sätt:

- **Översätt** - konvertera text från ett språk till ett annat.
- **Omskriv** - omformulera text i en annan stil, så som tydligare, kortare eller mer formell.
- **Transformera** - bearbeta text med anpassade AI-instruktioner kallade promptar.

<br />

Denna guide förklarar hur du använder appen när den är installerad och igång. För installationssteg, se huvud-[README](../README.md).

<br />

> ℹ️ **OBS!**<br/>
> Transrewrt finns som en desktopapp för Windows och Linux, och som en självhostad webbapp. Denna guide fokuserar på daglig användning av appen. Om något endast gäller en version, är det tydligt markerat.

<small>**Läs på andra språk:** [Engelska (Storbritannien)](../USER-GUIDE.md) · [Portugisiska (Brasilien)](USER-GUIDE.pt-BR.md) · [Arabiska](USER-GUIDE.ar.md) · [Bengali](USER-GUIDE.bn.md) · [Katalanska](USER-GUIDE.ca.md) · [Förenklad kinesiska](USER-GUIDE.zh-CN.md) · [Traditionell kinesiska](USER-GUIDE.zh-TW.md) · [Kroatiska](USER-GUIDE.hr.md) · [Tjeckiska](USER-GUIDE.cs.md) · [Nederländska](USER-GUIDE.nl.md) · [Engelska (USA)](USER-GUIDE.en-US.md) · [Filippinska](USER-GUIDE.tl.md) · [Franska](USER-GUIDE.fr.md) · [Tyska](USER-GUIDE.de.md) · [Grekiska](USER-GUIDE.el.md) · [Hindi](USER-GUIDE.hi.md) · [Ungerska](USER-GUIDE.hu.md) · [Italienska](USER-GUIDE.it.md) · [Japanska](USER-GUIDE.ja.md) · [Javanesiska](USER-GUIDE.jv.md) · [Koreanska](USER-GUIDE.ko.md) · [Malajiska](USER-GUIDE.ms.md) · [Persiska](USER-GUIDE.fa.md) · [Polska](USER-GUIDE.pl.md) · [Portugisiska (Portugal)](USER-GUIDE.pt.md) · [Punjabi](USER-GUIDE.pa.md) · [Rumänska](USER-GUIDE.ro.md) · [Ryska](USER-GUIDE.ru.md) · [Slovakiska](USER-GUIDE.sk.md) · [Spanska](USER-GUIDE.es.md) · [Swahili](USER-GUIDE.sw.md) · [Svenska](USER-GUIDE.sv.md) · [Telugu](USER-GUIDE.te.md) · [Thailändska](USER-GUIDE.th.md) · [Turkiska](USER-GUIDE.tr.md) · [Ukrainska](USER-GUIDE.uk.md) · [Vietnamesiska](USER-GUIDE.vi.md)</small>

<br />

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Innehållsförteckning** 

- [Innan du börjar](#innan-du-borjar)
  - [Hur du skaffar en API-nyckel (desktopapp)](#hur-du-skaffar-en-api-nyckel-desktopapp)
- [Kom igång](#kom-igang)
- [Huvuddelarna i fönstret](#huvuddelenarna-i-fonstret)
  - [Sidofält](#sidofalt)
  - [Verktygsfält](#verktygsfalt)
  - [In- och utmatningspaneler](#in--och-utmatningspaneler)
- [Översätt](#oversatt)
  - [Översätt text](#oversatt-text)
  - [Språkval](#sprakval)
  - [Användbara översättningsinställningar](#användbara-oversattningsinställningar)
  - [Tangentbordsgenvägar](#tangentbordsgenvagar)
- [Omskriv](#omskriv)
  - [Omskriv text](#omskriv-text)
- [Transformera](#transformera)
  - [Kör en befintlig prompt](#kor-en-befintlig-prompt)
  - [Om du inte har några promptar ännu](#om-du-inte-har-nagra-promptar-annu)
  - [Skapa en prompt snabbt](#skapa-en-prompt-snabbt)
  - [Redigera en prompt](#redigera-en-prompt)
  - [Testa en prompt innan du använder den](#testa-en-prompt-innan-du-anvander-den)
  - [Hantera sparade promptar](#hantera-sparade-promptar)
- [Instrumentpanel](#instrumentpanel)
  - [Filtrera data](#filtrera-data)
  - [Instrumentpanelflöden](#instrumentpanelfloden)
  - [Exportera data](#exportera-data)
  - [Radera lagrade poster för en modell](#radera-lagrade-poster-for-en-modell)
- [Inställningar](#inställningar)
  - [Allmänna inställningar](#allmanna-inställningar)
  - [Modeller](#modeller)
  - [Språk](#sprak)
  - [Kostnadsspårning](#kostnadssparning)
  - [Transform-promptar](#transform-promptar)
  - [Användare](#användare)
  - [API-konfiguration](#api-konfiguration)
  - [Om](#om)
- [Vanliga problem](#vanliga-problem)
  - [Appen översätter, omskriver eller transformerar inte text](#appen-oversatter-omskriver-eller-transformerar-inte-text)
  - [Modellistan är tom](#modellistan-ar-tom)
  - [Resultatet är för långsamt eller för dyrt](#resultatet-ar-for-langsamt-eller-for-dyrt)
  - [Gränssnittet är på fel språk](#granssnittet-ar-pa-fel-sprak)
  - [Texten är för liten eller svår att läsa](#texten-ar-for-liten-eller-svart-att-lasa)
  - [Jag ändrade en prompt och förlorade ändringarna](#jag-andrade-en-prompt-och-forlorade-andringarna)
- [Snabbtips](#snabbtips)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br /><br />

<a id="before-you-start"></a>

## Innan du börjar

För att använda Transrewrt behöver du tillgång till AI-tjänsten via OpenRouter.

Du behöver inte välja en betaltjänst innan du börjar. Appen inkluderar alltid en inbyggd **gratis** modell, så för vanlig användning räcker det för att börja översätta, omskriva och transformera text.

På enkelt svenska:

- En **modell** är den AI-motor som utför arbetet.
- En **API-nyckel** är ditt personliga åtkomstbevis för den tjänsten.

Om du använder **desktop-appen**, behöver du en API-nyckel. För detaljerade steg, se [Så här får du en API-nyckel](#how-to-get-an-api-key-desktop-app) nedan. I korthet: skapa ett konto på [OpenRouter](https://openrouter.ai), gå till sidan [Keys](https://openrouter.ai/keys), skapa en ny nyckel och klistra in den i [**Inställningar** > **API-konfiguration**](#api-config) i Transrewrt.

Om du använder **webbversionen**, ställer vanligtvis serverägaren upp detta åt dig, så du kommer vanligtvis inte att behöva ange en API-nyckel själv.

<br />

<a id="how-to-get-an-api-key-desktop-app"></a>
### Så här får du en API-nyckel (desktop-app)

Om du använder desktop-appen, följ dessa steg:

1. Gå till [OpenRouter](https://openrouter.ai) i din webbläsare.
2. Skapa ett konto eller logga in.
3. Öppna sidan [Keys](https://openrouter.ai/keys).
4. Klicka på knappen för att skapa en ny API-nyckel.
5. Ge nyckeln ett namn så du kan känna igen den senare.
6. Kopiera den nya API-nyckeln.
7. Gå tillbaka till Transrewrt och öppna **Inställningar** > **API-konfiguration**.
8. Klistra in nyckeln i **OpenRouter API-nyckel**.
9. Klicka på **Testa API-konfiguration** för att kontrollera att det fungerar.

> ℹ️ **OBS**<br/>
> Du kan börja med OpenRouters gratis väg eller någon av de andra gratis modellerna som är tillgängliga. I många fall räcker det för att börja använda Transrewrt utan att välja en betaltjänst.

<br /><br />

<a id="getting-started"></a>
## Kom igång

Om detta är din första gång med Transrewrt, följ denna ordning:

1. Öppna appen.
2. Välj ditt **gränssnittsspråk** från glob-ikonen om det behövs.
3. Om du använder **desktop-appen**, öppna [**Inställningar** > **API-konfiguration**](#api-config), klistra in din OpenRouter API-nyckel och klicka på **Testa API-konfiguration**.
4. Öppna [**Inställningar** > **Modeller**](#models) och lägg till en eller flera modeller i **Valda modeller**.
5. Öppna [**Inställningar** > **Språk**](#languages) och välj dina **Topp-språk** om du vill att dina mest använda språk ska visas först.
6. Gå till **Översätt** och kör en enkel översättning för att kontrollera att allt fungerar.
7. När det fungerar, prova **Omskriv** och sedan **Transformera**.

Denna ordning är viktig. Den förhindrar det vanligaste problemet vid första användningen: att försöka köra en uppgift innan appen har en fungerande API-anslutning eller en vald modell.

<br /><br />

<a id="main-parts-of-the-window"></a>
## Huvuddelar av fönstret

Appen är indelad i tre huvudområden:

- **Sidofältet** till vänster.
- **Verktygsfältet** högst upp.
- **Arbetsytan** i mitten.

<br />

<a id="sidebar"></a>
### Sidofält

Använd sidofältet för att flytta runt i appen:

<br />

<table>
  <tr>
    <td valign="top">
       <img src="../images/screenshots/sv/sidebar.png" alt="Programmets sidofält" style="max-width: 100%; border: 1px solid #ddd; border-radius: 4px;">
    </td>
    <td valign="top">
      <br />
      <ul>
        <li><strong>Översätt</strong> öppnar översättningsarbetsytan.</li>
        <li><strong>Omskriv</strong> öppnar omskrivningsarbetsytan.</li>
        <li><strong>Transformera</strong> öppnar anpassad prompt-arbetsyta.</li>
        <li><strong>Dashboard</strong> visar användnings- och kostnadsinformation.</li>
        <li><strong>Inställningar</strong> öppnar inställningspanelen.</li>
        <li><strong>Användare</strong> visar inloggad användarnamn (enbart webb).</li>
      </ul>
      <br />
      <p>Du kan också fälla ihop sidofältet för mer utrymme genom att klicka på ikonen bredvid appens logotyp.</p>
    </td>
  </tr>
</table>

<br />

<a id="toolbar"></a>
### Verktygsfält

Verktygsfältet ändras lite beroende på var du är i appen.

- Till vänster visar det aktuellt sidonamn.
- Till höger visar det **modellväljaren** och kontrollen för **gränssnittsspråk**.

**Modellväljaren** låter dig välja vilken AI-motor som ska användas för den nuvarande uppgiften.

  ![Modellväljare](../images/screenshots/sv/model-selector.png)

> ℹ️ **OBS**<br/>
> Vissa gratis modeller kan sluta fungera tillfälligt om de är otillgängliga eller har nått en användningsgräns. Om det händer kommer appen att ta bort den modellen från din lista automatiskt.


**Glob-ikonen + språkkoden** ändrar appens gränssnittsspråk, såsom menyer och knappar. Det ändrar **inte** översättningsspråken som används i **Översätt**.

  ![Gränssnittsspråksväljare](../images/screenshots/sv/language-selector.png)

<br />

<a id="input-and-output-panels"></a>

### In- och utpaneler

De flesta arbetsytorna använder ett vänster **In**-panel och en höger **Ut**-panel.

**In**-panelen visar:

- Antal tecken
- Antal ord
- Antal stycken

**Ut**-panelen kan visa:

- Hur lång tid uppgriften tog
- Kostnaden för den uppgiften
- Din sammanlagda kostnad
- **TPS** (token per sekund), som är ett enkelt hastighetsmått
- Antal tecken, ord och stycken
- Den använda modellen

Om du undrar över de tekniska termerna:

- **Token** betyder en liten textdel. Du kan tänka på det som en del av ett ord eller ett kort ord.
- **TPS** betyder hur många av dessa textdelar modellen bearbetade per sekund.

<br /><br />

<a id="translate"></a>
## Översätt

Använd **Översätt** när du vill konvertera text från ett språk till ett annat.

![Översätt arbetsyta](../images/screenshots/sv/translate.png)

<br />

<a id="translate-text"></a>
### Översätt text

1. Öppna **Översätt**.
2. Välj ett språk i **Från**.
3. Välj ett språk i **Till**.
4. Välj en modell iverktygsfältet.
5. Skriv eller klistra in text i **In**.
6. Klicka på **Översätt**.
7. Läs resultatet i **Ut**.
8. Använd kopieringsknappen om du vill kopiera resultatet.

<br />

<a id="language-selection"></a>
### Språköval

- **Från** kan vara ett specifikt språk eller **Detektera språk**.
- **Till** är det språk du vill ha resultatet på.

Dina valda **Topp språk** visas överst i listan. Du kan ställa in dessa i [**Inställningar** > **Språk**](#languages).

<br />

<a id="helpful-translation-settings"></a>
### Användbara översättningsinställningar

I [**Inställningar** > **Allmänna inställningar**](#general-settings) kan du ändra hur översättning beter sig:

- **Autoöversätt vid klistra in** kör en översättning så snart du klistrar in text.
- **Kopiera resultat automatiskt till klippbordet** kopierar resultatet automatiskt efter en lyckad körning.
- **Realtidsöversättning (medan du skriver)** kör översättningar medan du skriver.
- **Tidsgräns (ms)** styr hur länge appen väntar innan den kör en realtidsöversättning.

<br />

<a id="keyboard-shortcuts"></a>
### Tangentbordsgenvägar

I [**Inställningar** > **Allmänna inställningar**](#general-settings) styr **Beteende för ENTER** vad som händer när du trycker på Enter:

- **Enter** kan köra uppgiften och **Shift+Enter** kan lägga till en ny rad.
- Eller appen kan göra det omvända.

Den aktuella genvägen visas också på **Översätt**-knappen.

<br /><br />

<a id="rewrite"></a>
## Omskriv

Använd **Omskriv** när du vill förbättra ordval utan att ändra huvudbetydelsen.

![Omskriv arbetsyta](../images/screenshots/sv/rewrite.png)

Det här är användbart för:

- att åtgärda stavfel och grammatik
- att göra texten tydligare
- att göra texten mer formell eller mer informell
- att förkorta eller utöka text
- att få texten att låta mer teknisk

<br />

<a id="rewrite-text"></a>
### Omskriv text

1. Öppna **Omskriv**.
2. Välj ett **Läge**.
3. Välj en modell i verktygsfältet.
4. Skriv eller klistra in text i **In**.
5. Klicka på **Omskriv**.
6. Granska resultatet i **Ut**.

Samma Enter-tangentbeteende som beskrivs i [**Översätt**](#keyboard-shortcuts) gäller också här.

<br /><br />

<a id="transform"></a>
## Transformera

Använd **Transformera** när du vill att AI:n ska följa en anpassad uppsättning instruktioner.

![Transformera arbetsyta](../images/screenshots/sv/transform.png)

Det här är det mest flexibla området i appen. Du kan använda det för uppgifter som:

- summera anteckningar
- omvandla grov text till en polerad e-post
- extrahera nyckelpoänger
- konvertera text till ett specifikt format

<br />

<a id="run-an-existing-prompt"></a>
### Kör en befintlig prompt

1. Öppna **Transformera**.
2. Välj en prompt från promptlistan.
3. Om en **Målspråk**-ruta visas, välj ett språk om du vill ha ett.
4. Skriv eller klistra in text i **In**.
5. Klicka på **Transformera**.
6. Läs resultatet i **Ut**.

<br />

<a id="if-you-have-no-prompts-yet"></a>
### Om du inte har några prompt ännu

Om din promptlista är tom, klicka på **Läs in exempelprompter**. Detta lägger till inbyggda exempel så du kan komma igång snabbt.

> ℹ️ **NOTERA**<br/>
> Exempelprompter tillhandahålls på engelska. Efter att du läst in dem kan du redigera en prompt och använda **Översätt prompt** om du vill anpassa prompttexten för ett annat språk.

<br />

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


<br />

### Redigera en prompt

När du skapar eller redigerar en prompt, visas redigeraren till vänster och ett testområde till höger.

![Transformera prompt-redigerare](../images/screenshots/sv/transform-prompt-edit.png)

De huvudsakliga fälten är:

- **Promptnamn**: namnet som visas i promptlistan.
- **Promptinstruktioner (valfritt)**: en kort hint som visas för användaren när prompten körs.
- **Modroll**: den övergripande roll som tilldelats AI:en, till exempel 'Du är en hjälpsam assistent.'
- **Modellinstruktioner (en per rad)**: de specifika regler du vill att AI:en ska följa.
- **Utdata-beskrivning**: ett kort ord som beskriver resultatet, som 'sammanfattning' eller 'omskrivning'.
- **Temperatur (0,0 → 1,0)**: en kreativitetsreglage.
- **Be om målspråk**: lägger till en målspråksväljare när prompten körs.

Om den tekniska termen **Temperatur** är ny för dig, tänk så här:

- En **lägre** temperatur ger stabilare, mer förutsägbara resultat.
- En **högre** temperatur ger mer variation och kreativitet.

Du kan även använda:

- **`Generera prompt`** för att skapa ett nytt utkast från en enkel beskrivning
- **`Förbättra prompt`** för att förfina en befintlig prompt
- **`Översätt prompt`** för att översätta promptfälten

> ⚠️ **VARNING**<br/>
> Klicka på **`Spara`** innan du klickar på **`Tillbaka till Kör`**. Om du går tillbaka utan att spara går dina ändringar förlorade.

<br />

<a id="test-a-prompt-before-using-it"></a>
### Testa en prompt innan du använder den

Testpanelen till höger låter dig prova din prompt med exempeltext innan du använder den i dagligt arbete.

Det är användbart när:

- du bygger en ny prompt
- du jämför två versioner av en prompt
- du vill kontrollera ton, längd eller utdataformat

<br />

<a id="manage-saved-prompts"></a>
### Hantera sparade prompts

För att hantera sparade prompts på ett ställe, öppna [**Inställningar** > **Transformera Prompts**](#transform-prompts).

Där kan du:

- lista och ta bort dina prompts
- exportera prompts som **JSON**, **CSV** eller **XLSX**
- importera prompts från en fil

<br /><br />

## Dashboard

Använd **Dashboard** för att se hur mycket du använder appen och vad det kostar.

![Dashboard-sammanfattning](../images/screenshots/sv/dashboard-summary.png)

<br />

<a id="filter-the-data"></a>
### Filtrera data

Använd filterknapparna högst upp för att ändra tidsramen.

![Dashboard-filter](../images/screenshots/sv/dashboard-filter.png)

> ℹ️ **NOTERING**<br/>
> I webbversionen kan administratörer också se ett **Användare**-filter. Det gör att de kan växla mellan **Alla användare** och en enskild användare.

<br />

<a id="dashboard-tabs"></a>
### Dashboard-flikar

- **Sammanfattning** ger dig en översikt över användning och kostnad.
- **Efter användning** bryter ner aktiviteten efter översättningsspråk, omskrivningsläge och transform-prompt.
- **Efter modell** visar vilka modeller du använde och hur mycket de kostade.
- **Efter dag** visar dagliga totalsummor.
- **Alla sökningar** visar den fullständiga sökhistoriken och låter dig exportera den.

<br />

<a id="export-data"></a>
### Exportera data

Dashboard-tabeller kan exportera data i:

- **JSON**
- **CSV**
- **XLSX**

Det är användbart om du vill granska aktivitet utanför appen eller dela en rapport.

<br />

<a id="delete-stored-records-for-a-model"></a>
### Ta bort lagrade poster för en modell

I **Efter modell** eller **Alla sökningar**, kan du ta bort lagrade poster för en modell.

> ⚠️ **VARNING**<br/>
> Att ta bort lagrade poster kan inte ångras. Använd endast detta om du är säker på att du inte längre behöver den historiken.

För att ta bort all data eller ta bort poster baserat på deras ålder, gå till [**Inställningar** > **Kostnadsspårning**](#cost-tracking). Där hittar du alternativ för att ta bort all lagrad data eller endast data äldre än ett visst datum.

<br /><br />

<a id="settings"></a>
## Inställningar

Öppna **Inställningar** från sidofältet för att anpassa hur appen beter sig.

De tillgängliga flikarna kan variera:

- **API-konfiguration** är endast tillgänglig i desktop-appen.
- **Användare** är endast tillgänglig i webbappar, och endast för administratörer.

<br />

<a id="general-settings"></a>

### Allmänna inställningar

Använd **Allmänna inställningar** för att kontrollera skrivbeteende och utseende.

**Beteende**

- **Beteende för ENTER** väljer om Enter kör uppgiften eller infogar en ny rad.
- **Översätt automatiskt vid inklistring** startar översättning så fort du klistrar in text.
- **Kopiera resultat automatiskt till urklipp** kopierar lyckade resultat automatiskt.
- **Realtidsöversättning (medan du skriver)** översätter medan du skriver.
- **Tidsgräns (ms)** anger väntetiden för realtidsöversättning.

**Utseende**

- **Antal decimaler för kostnad** ändrar hur kostnadsdecimals visas.
- **Teckensnittsfamilj** ändrar skrifttecknet i textpanelerna.
- **Storlek** ändrar teckenstorleken.
- **Endast webb:** **visa en marginal runt appen** lägger till extra utrymme kring gränssnittet.

<br />

<a id="models"></a>
### Modeller

Använd **Inställningar** > **Modeller** för att välja vilka modeller som ska visas i verktygsfältet.

![Inställningar-fliken Modeller](../images/screenshots/sv-SE/settings-models.png)

Sidan har två listor:

- **Tillgängliga modeller** till vänster
- **Valda modeller** till höger

Användbara kontroller inkluderar:

- **Sök modeller...** för att hitta en modell efter namn
- **Endast gratis** för att visa endast gratis modeller
- **Uppdatera** för att läsa om listan
- **Expandera alla** och **Kollapsa alla** när du sorterar efter leverantör

För att lägga till en modell, klicka på **Lägg till**.

För att ta bort en modell, klicka på **X** bredvid den i **Valda modeller**.

För att rensa listan, klicka på **Avmarkera alla**. Den nödvändiga gratismodellen kommer att förbli i listan.

> ℹ️ **NOTERA**<br/>
> Om du inte vill lägga till krediter till OpenRouter direkt, börja med att aktivera **Endast gratis** och välja de gratis modellerna.

<br />

<a id="languages"></a>
### Språk

Använd **Inställningar** > **Språk** för att organisera språklistorna som används i appen.

- **Toppspråk** är fästa nära toppen av språklistorna i **Översätt** och **Transformer**.
- **Anpassat språk** låter dig lägga till ett språk som inte finns i den inbyggda listan.

Om du lägger till ett anpassat språk, visas det i språkväljarna tillsammans med de inbyggda alternativen.

<br />

<a id="cost-tracking"></a>
### Kostnadsspårning

Använd **Inställningar** > **Kostnadsspårning** för att hantera kostnadinformation.

- **Total kostnad** visar den löpande summan.
- **Kopiera värde** kopierar totalen till urklipp.
- **Återställ kostnad** nollställer den lagda summan.
- **Synkronisera med API-nyckelanvändning** sätter totalen att motsvara användningen rapporterad av OpenRouter.
- **API-nyckelanvändning** visar användningsdetaljer, om tillgängligt.
- **Ta bort kostnadsdata** tar bort all data, eller endast poster äldre än ett valt datum.

> ⚠️ **VARNING**<br/>
> Dataåterställning kan inte ångras. Innan du tar bort data, se till att säkerhetskopiera din data eller exportera den via [**Dashboard** > **Alla samtal**](#dashboard-flikar), annars försvinner den permanent.

<br />

<a id="transform-prompts"></a>
### Transformeringsprompter

Använd **Inställningar** > **Transformeringsprompter** för att hantera prompts i bulk.

Du kan:

- granska dina sparade prompts
- ta bort prompts
- importera prompts från en fil
- exportera prompts för säkerhetskopiering eller delning

<br />

<a id="users"></a>
### Användare

**Endast webb - endast administratör**

Använd **Användare** för att hantera användarkonton i webbversionen. Du kan lägga till användare, uppdatera deras detaljer, återställa lösenord och ta bort konton.

<br />

<a id="api-config"></a>
### API-konfiguration

**Endast skrivbord**

Använd **API-konfiguration** för att koppla skrivbordsappen till OpenRouter eller till en Transrewrt-proxy.

- **OpenRouter API-nyckel** är där du klistrar in din nyckel.
- **API-URL** är tjänstaddressen. Låt den vara standard om du inte har fått en annan.
- **Använd Transrewrt-proxy** dirigerar förfrågningar via en proxytjänst istället för direkt till OpenRouter.
- **Nyckelstart** visas när proxy-alternativet är aktiverat.
- **Testa API-konfiguration** kontrollerar om den aktuella konfigurationen fungerar.

För detaljerade steg för att skaffa din API-nyckel, se [Hur man får en API-nyckel](#hur-man-får-en-api-nyckel-skrivbordsapp) ovan.

> ℹ️ **NOTERA**<br/>
> Om du inte är säker på vad **API-URL**, **Använd Transrewrt-proxy**, eller **Nyckelstart** betyder, låt dem oförändrade och använd standard OpenRouter-konfigurationen. Mer information om proxyn finns i [Transrewrt Proxy-lagringsplatsen](https://github.com/wsj-br/transrewrt-proxy).

<br />

<a id="about"></a>

### Om

Fliken **Om** visar:

- programnamnet
- versionsnumret
- byggdatumet
- en länk till projektrepositoriet

<br /><br />

<a id="common-issues"></a>
## Vanliga problem

Om något inte fungerar som förväntat, kontrollera först dessa punkter.

<br />

<a id="the-app-will-not-translate-rewrite-or-transform-text"></a>
### Programmet översätter, omskriver eller transformerar inte text

Kontrollera att:

- du har valt en modell i verktygsfältet
- minst en modell finns listad under [**Inställningar** > **Modeller**](#models)
- ditt API-uppsättning fungerar

Om du använder skrivbordsappen:

1. Öppna [**Inställningar** > **API-konfiguration**](#api-config).
2. Kontrollera att ditt API-nyckel är sparad.
3. Klicka på **Testa API-konfiguration**.

<br />

<a id="the-model-list-is-empty"></a>
### Modellistan är tom

Öppna [**Inställningar** > **Modeller**](#models) och klicka på **Uppdatera**.

Om det behövs:

- sök efter en modell
- slå på **Endast gratis**
- lägg till en eller flera modeller till **Valda modeller**

<br />

<a id="the-result-is-too-slow-or-too-expensive"></a>
### Resultatet är för långsamt eller för dyrt

Prova en eller flera av dessa:

- välj en annan modell
- använd en kortare inmatning
- slå av **Realtidsöversättning (medan du skriver)** under [**Inställningar** > **Allmänna inställningar**](#general-settings)
- använd gratismodeller för enkla uppgifter (se [Modeller](#models))

<br />

<a id="the-interface-is-in-the-wrong-language"></a>
### Gränssnittet är på fel språk

Klicka på glob-ikonen i [verktygsfältet](#toolbar) och välj ditt föredragna **Gränssnittsspråk**.

<br />

<a id="the-text-is-too-small-or-hard-to-read"></a>
### Texten är för liten eller svår att läsa

Öppna [**Inställningar** > **Allmänna inställningar**](#general-settings) och ändra:

- **Typsnittsfamilj**
- **Storlek**

<br />

<a id="i-changed-a-prompt-and-lost-the-edits"></a>
### Jag ändrade en prompt och förlorade redigeringarna

När du redigerar en prompt, klicka alltid på **Spara** innan du klickar på **Tillbaka till Köring**.

<br /><br />

<a id="quick-tips"></a>
## Snabbtips

- Börja med [**Översätt**](#translate) för att säkerställa att din konfiguration fungerar innan du fortsätter till [**Omskriv**](#rewrite) eller [**Transformera**](#transform).
- Använd [**Omskriv**](#rewrite) för dagliga förbättringar av uttryck.
- Använd [**Transformera**](#transform) när du behöver ett repeatable workflow för en specifik uppgift.
- Använd [**Dashboard**](#dashboard) om du vill hålla koll på användning och kostnad.
- Exportera prompts regelbundet om du bygger en prompt-bibliotek som du vill hålla säkert (se [Transformera Prompts](#transform-prompts)).

<br /><br />

<a id="disclaimer"></a>
## Ansvarsfriskrivning

Produktnamn och ikoner tillhör sina respektive ägare och används endast för identifieringsändamål. Denna programvara är inte tillknytet eller godkänd av någon av de nämnda varumärkena.

<br /><br />

<a id="license"></a>
## Licens

Copyright © 2026 Waldemar Scudeller Jr.

[Apache License 2.0](LICENSE)