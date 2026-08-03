---
title: Inställningar
description: >-
  Kompakt referens för Allmänt, Modeller, Språk, Ordlista, Kostnad,
  Transformera, Användare, API och Om.
---



Öppna **Inställningar** från sidofältet för att anpassa hur appen fungerar.

| Flik | Skrivbord | Webb (admin) | Webb (användare) | Anteckningar |
| --- | :---: | :---: | :---: | --- |
| Allmänna inställningar | ✓ | ✓ | ✓ | Inkluderar **AI-upplevelse** (Enkel / Avancerad) |
| Modeller | ✓ | ✓ | ✓ | Endast när **AI-upplevelsen** är **Avancerad** |
| Språk | ✓ | ✓ | ✓ | |
| Kostnadsspårning | ✓ | ✓ | — | |
| Transformera | ✓ | ✓ | ✓ | Massimport/export av prompter |
| Ordlista | ✓ | ✓ | ✓ | Termpar för översättning |
| Användare | — | ✓ | — | |
| API-konfiguration | ✓ | ✓ | — | |
| Om | ✓ | ✓ | ✓ | |

I **Enkelt** läge väljer du AI via förinställningar i verktygsfältet och **Leverantör** i Allmänna inställningar; fliken **Modeller** är dold.

:::note
I webbversionen har varje användare sin egen konfiguration (AI-upplevelse, leverantör, modeller/förinställningar, språk, alternativ, prompter). Ändringar påverkar inte andra användare.
:::

## Allmänna inställningar

![Fliken Inställningar Allmänna inställningar](/images/screenshots/sv/settings-general.png)

**AI-upplevelse**

- **Enkel** (standard): välj en **Leverantör**. Molnleverantörer använder förinställningar i verktygsfältet. **Lokal LLM** listar istället installerade lokala modeller. **Uppdatera förinställningskatalog** hämtar den senaste förinställningslistan från projektets arkiv.
  - **Gratis (OpenRouter)** — kostnadsfritt alternativ som dirigeras till tillgängliga gratismodeller; kvalitet och tillgänglighet kan variera
  - **Standard** — lättviktig och kostnadseffektiv; bäst för korta texter, snabba utkast och högvolymanvändning
  - **Avancerad** — modell med hög noggrannhet för komplext eller nyanserat innehåll, till en högre kostnad
  - **Teknisk** — anpassad för kod, API:er, utvecklardokumentation och strukturerat innehåll; bevarar formatering och terminologi
- **Avancerad**: välj modeller i verktygsfältet; hantera listan under [Modeller](#models).

Du kan också växla Enkel ↔ Avancerad från verktygsfältets förinställnings-/modellmeny (**Växla till Enkelt/Avancerat läge**, ovanför Öppna inställningar).

**Utseende** — Tema; **Visa kostnadsinformation om åtgärderna**; **Antal decimaler för kostnad**; endast webbmarginal runt appen; **Teckensnittsfamilj** och **Storlek**.

**Beteende** — **Beteende för ENTER**; **Kör automatiskt vid inklistring**; **Kopiera resultat automatiskt till urklipp**; **Realtidsöversättning under skrivning**; **Tidsgräns (ms)**.

**Historik**

- **Behåll körningshistorik** — lagra indata/utdata för vyn [Historik](/docs/history/). Att stänga av frågar om bekräftelse och kan ta bort lagrad text. Om den är märkt *inaktiverad av administratören* är `HISTORY_DISABLED` inställd — se [Konfiguration](/docs/configuration/#privacy-mode).
- **Ta bort historikdata** — ta bort lagrad text efter ålder eller rensa allt. Tar **inte** bort totala kostnader (använd Kostnadsspårning för det).

**Konfigurationssäkerhetskopiering** (skrivbords- och webbadministratörer)

- Valfritt **Inkludera användningsdata i säkerhetskopian**
- **Säkerhetskopiera konfiguration** — ZIP med konfiguration, tillstånd, användare, inställningar, prompter och valfria användningsdata
- **Återställ från säkerhetskopia** — bekräftelsedialog med alternativ för att återställa och/eller rensa användningsdata

Säkerhetskopior kan flyttas mellan skrivbord och webb; att återställa en skrivbordssäkerhetskopia på webben tillämpar data på administratörsanvändaren.

## Modeller

Endast tillgänglig i **Avancerat** läge.

- **Tillgängliga modeller** (vänster) och **Valda modeller** (höger)
- Sök, **Leverantörs**-taggar, **Endast gratis**, **Uppdatera**, Expandera/Fäll ihop alla
- Modell-ID använder ett leverantörsprefix (`openrouter/…`, `openai/…`, `local/…`, …)

:::tip
Använd inte OpenRouter **Body Builder** (`openrouter/bodybuilder`) för Översätt, Skriv om eller Transformera – den returnerar JSON-begäransnyttolaster, inte färdig text.
:::

Lägg till med **Lägg till**; ta bort med **X**. Den kostnadsfria OpenRouter-modellen är valfri — valda modeller kan vara tomma. Att ta bort den sista modellen från verktygsfältet öppnar **Inställningar → Modeller**. Om den aktuella modellen blir otillgänglig väljer appen nästa modell i listan istället för att tvinga fram den kostnadsfria modellen.

## Språk

- **Toppspråk** — fästa nära toppen av språklistorna i Översätt och Transformera
- **Anpassat språk** — lägg till ett språk som saknas i den inbyggda listan

## Kostnadsspårning

- **Total kostnad**, **Kopiera värde**, **Återställ kostnad**
- **Synkronisera med API-nyckelanvändning** — anpassa till OpenRouter-kontots användning (endast OpenRouter)
- **API-nyckelanvändning** — OpenRouter-detaljer när tillgängliga
- **Ta bort kostnadsdata** — all data eller poster äldre än ett visst datum

OpenRouter visar faktisk fakturerad kostnad när det är tillämpligt; andra leverantörer använder uppskattningar från OpenRouter-prissättning. Uppskattningar är inte fakturor.

:::caution
Borttagning av kostnadsdata kan inte ångras. Exportera via Historik eller Dashboard → Alla samtal först om du behöver en säkerhetskopia. Relaterad indata-/utdatahistorik för dessa API-anrop tas också bort.
:::

## Transformera

Masshantera prompter: granska, ta bort, importera, exportera och ladda exempelprompter.

## Ordlista

Hantera termpar som används under [översättning](/docs/translate/#use-the-glossary). Varje term har käll-/målspråk och käll-/måltext.

- Lägg till via den nedersta raden och **+**
- Filtrera efter språk eller text
- Importera/exportera CSV eller XLSX; ladda ner tomma mallar

Skrivbordsversionen lagrar ordlistan lokalt; webbversionen lagrar den per användare.

## Användare

Endast webb (administratörer):

- Lägg till användare, uppdatera detaljer, återställ lösenord, radera konton
- **Session Timeout** — hur länge en inloggning varar (1 timme till 7 dagar); ändringar gäller endast för nya inloggningar
- **Revoke sessions** — logga ut en användare från alla enheter omedelbart

Varje inloggad användare (inklusive icke-administratörer) kan ändra sitt eget lösenord eller logga ut från användarmenyn längst ner i sidofältet.

## API-konfiguration

Konfigurera endast de leverantörer du använder: OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras, NVIDIA, Alibaba Cloud, apikey.fun, **Lokal LLM** (bas-URL för Ollama, LM Studio, llama.cpp, eller liknande), och en valfri anpassad OpenAI-kompatibel leverantör.

**Webb (administratör):** nycklar kommer från miljövariabler — den här sidan visar vilka som är inställda och låter dig **Testa**. Starta om efter att ha ändrat miljövariabler. Se [Konfiguration](/docs/configuration/).

**Skrivbordsversion:** ange nycklar (eller Lokal LLM URL) och **Spara** / **Redigera** / **Testa**. Nycklar lagras krypterade; du kan inte se det aktuella värdet, bara ersätta det.

:::tip
Ingen betald nyckel behövs för att komma igång: använd gratis OpenRouter-modeller, andra gratisleverantörer, eller en lokal OpenAI-kompatibel server som [Ollama](https://ollama.com), LM Studio, eller llama.cpp (t.ex. `translategemma:4b`).
:::

## Om

Appnamn, version, byggdatum, licens, meddelanden från tredje part och länk till förråd.
