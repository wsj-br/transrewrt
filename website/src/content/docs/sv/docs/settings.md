---
title: Inställningar
description: >-
  Kompakt referens för Allmänt, Modeller, Språk, Ordlista, Kostnad,
  Transformera, Användare, API och Om.
---



Öppna **Inställningar** från sidofältet för att anpassa hur appen fungerar.

| Flik | Skrivbord | Webb (admin) | Webb (användare) | Anteckningar |
| --- | :---: | :---: | :---: | --- |
| Allmänna inställningar | ja | ja | ja | Inkluderar **AI-upplevelse** (Enkel / Avancerad) |
| Modeller | ja | ja | ja | Endast när **AI-upplevelse** är **Avancerad** |
| Språk | ja | ja | ja | |
| Kostnadsspårning | ja | ja | — | |
| Transformera | ja | ja | ja | Massimport/export av prompter |
| Ordlista | ja | ja | ja | Termpar för översättning |
| Användare | — | ja | — | |
| API-konfiguration | ja | ja | — | |
| Om | ja | ja | ja | |

I **Enkelt** läge väljer du AI via förinställningar i verktygsfältet och **Leverantör** i Allmänna inställningar; fliken **Modeller** är dold.

:::note
I webbversionen har varje användare sin egen konfiguration (AI-upplevelse, leverantör, modeller/förinställningar, språk, alternativ, prompter). Ändringar påverkar inte andra användare.
:::

## Allmänna inställningar

**AI-upplevelse**

- **Enkel** (standard): välj en **Provider**. Molnleverantörer använder förinställningar i verktygsfältet (**Free (OpenRouter)**, **Standard**, **Advanced**, **Technical**). **Local LLM** listar istället installerade lokala modeller. **Refresh presets catalog** hämtar den senaste förinställningslistan från projektets arkiv.
- **Avancerat**: välj modeller i verktygsfältet; hantera listan under [Models](#models).

**Utseende** — Tema; **Visa kostnadsinformation om åtgärderna**; **Antal decimaler för kostnad**; endast webbmarginal runt appen; **Teckensnittsfamilj** och **Storlek**.

**Beteende** — **Beteende för ENTER**; **Kör automatiskt vid inklistring**; **Kopiera resultat automatiskt till urklipp**; **Realtidsöversättning under skrivning**; **Tidsgräns (ms)**.

**Historik**

- **Behåll körningshistorik** – lagra indata/utdata för vyn [Historik](/docs/history/). Om du stänger av detta begärs en bekräftelse och lagrad text kan tas bort. Om det är märkt *inaktiverat av administratören* är `HISTORY_DISABLED` inställt – se [Konfiguration](/docs/configuration/#privacy-mode).
- **Ta bort historikdata** – ta bort lagrad text efter ålder eller rensa allt. Tar **inte** bort kostnadstotaler (använd kostnadsspårning för det).

**Konfigurationssäkerhetskopiering** (skrivbords- och webbadministratörer)

- Valfritt **Inkludera användningsdata i säkerhetskopian**
- **Säkerhetskopiera konfiguration** – ZIP med konfiguration, tillstånd, användare, inställningar, prompter och valfria användningsdata
- **Återställ från säkerhetskopia** – bekräftelsedialog med alternativ för att återställa och/eller rensa användningsdata

Säkerhetskopior kan flyttas mellan skrivbord och webb; att återställa en skrivbordssäkerhetskopia på webben tillämpar data på administratörsanvändaren.

## Modeller

Endast tillgängligt i **Avancerat** läge.

![Inställningar fliken Modeller](/images/screenshots/sv/settings-general.png)

- **Tillgängliga modeller** (vänster) och **Valda modeller** (höger)
- Sök, **Provider**-taggar, **Endast gratis**, **Uppdatera**, Expandera/Fäll ihop alla
- Modell-ID använder ett leverantörsprefix (`openrouter/…`, `openai/…`, `local/…`, …)

:::caution
Använd inte OpenRouter **Body Builder** (`openrouter/bodybuilder`) för Översätt, Skriv om eller Transformera – den returnerar JSON-förfrågningsnyttolaster, inte färdig text.
:::

Lägg till med **Lägg till**; ta bort med **X**. **Avmarkera alla** behåller den obligatoriska gratismodellen.

## Språk

- **Toppspråk** – fästa nära toppen av språklistorna i Översätt och Transformera
- **Anpassat språk** – lägg till ett språk som saknas i den inbyggda listan

## Kostnadsspårning

- **Totalkostnad**, **Kopiera värde**, **Återställ kostnad**
- **Synkronisera med API-nyckelanvändning** – anpassa till OpenRouter-kontots användning (endast OpenRouter)
- **API-nyckelanvändning** – OpenRouter-detaljer när tillgängliga
- **Ta bort kostnadsdata** – alla data eller poster äldre än ett visst datum

OpenRouter visar faktiska debiterade kostnader när det är tillämpligt; andra leverantörer använder uppskattningar från OpenRouter-prissättning. Uppskattningar är inte fakturor.

:::caution
Borttagning av kostnadsdata kan inte ångras. Exportera via Historik eller Dashboard → Alla samtal först om du behöver en säkerhetskopia. Relaterad in-/utdatahistorik för dessa API-anrop tas också bort.
:::

## Transformera

Hantera prompter i bulk: granska, ta bort, importera, exportera och ladda exempelprompter.

## Ordlista

Hantera termpar som tillämpas under [översättning](/docs/translate/#use-the-glossary). Varje term har käll-/målspråk och käll-/måltext.

- Lägg till via den nedre raden och **+**
- Filtrera efter språk eller text
- Importera/exportera CSV eller XLSX; ladda ner tomma mallar

Skrivbordsversionen lagrar ordlistan lokalt; webbversionen lagrar den per användare.

## Användare

Endast webb (administratörer): lägg till användare, uppdatera detaljer, återställ lösenord, ta bort konton.

## API-konfiguration

Konfigurera endast de leverantörer du använder: OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras, NVIDIA, Alibaba Cloud, apikey.fun, **Local LLM** (bas-URL för Ollama, LM Studio, llama.cpp eller liknande), och en valfri anpassad OpenAI-kompatibel leverantör.

**Webb (admin):** nycklar kommer från miljövariabler — den här sidan visar vilka som är inställda och låter dig **Testa**. Starta om efter att ha ändrat miljövariabler. Se [Konfiguration](/docs/configuration/).

**Skrivbord:** ange nycklar (eller Local LLM URL) och **Spara** / **Redigera** / **Testa**. Nycklar lagras krypterade; du kan inte se det aktuella värdet, bara ersätta det.

:::tip
Ingen betald nyckel behövs för att komma igång: använd gratis OpenRouter-modeller, andra gratisleverantörer eller en lokal OpenAI-kompatibel server som [Ollama](https://ollama.com), LM Studio eller llama.cpp (t.ex. `translategemma:4b`).
:::

## Om

Appnamn, version, byggdatum, licens, meddelanden från tredje part och länk till förråd.
