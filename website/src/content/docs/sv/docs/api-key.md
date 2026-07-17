---
title: API-nyckel
description: >-
  Skaffa en kostnadsfri OpenRouter API-nyckel och anslut andra AI-leverantörer
  till Transrewrt.
translation_last_updated: '2026-07-17T21:14:48.983Z'
source_file_mtime: '2026-07-17T14:58:48.569Z'
source_file_hash: 540c5b2b785355828a421293195b23c2fec98502888d607638fbb33f93970a2a
translation_language: sv
source_file_path: src/content/docs/docs/api-key.md
translation_models:
  - google/gemini-2.5-flash
---



Transrewrt behöver åtkomst till minst en AI-leverantör. Du behöver **inte** en betalmodell för att komma igång: OpenRouter erbjuder kostnadsfria modeller efter att du har lagt till en nyckel, och flera andra leverantörer erbjuder också kostnadsfria nivåer.

Leverantörer som stöds inkluderar [OpenRouter](https://openrouter.ai), OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras, NVIDIA, Alibaba Cloud, apikey.fun, alla OpenAI-kompatibla slutpunkter och lokala OpenAI-kompatibla servrar (Ollama, LM Studio, llama.cpp och liknande).

## Enkelt vs Avancerat

- **Enkelt** läge (standard): välj en **förinställning** (Gratis (OpenRouter), Standard, Avancerat eller Tekniskt) som är kopplad till en **leverantör**. Endast förinställningar med en koppling för den aktuella leverantören visas.
- **Avancerat** läge: välj modeller direkt. Modell-ID använder ett leverantörsprefix (till exempel `openrouter/…`, `openai/…`, `local/…`).

## Kostnadsfri OpenRouter-nyckel (skrivbord)

1. Gå till [openrouter.ai](https://openrouter.ai) och registrera dig eller logga in.
2. Öppna sidan [Keys](https://openrouter.ai/keys) och skapa en ny nyckel (namnge den; valfri kreditgräns). Du kan använda kostnadsfria modeller utan att lägga till kredit.
3. I Transrewrt, öppna **Inställningar → API-konfiguration**, klistra in nyckeln i **OpenRouter API-nyckel** och klicka på **Testa OpenRouter-nyckel**.

:::caution
Använd inte OpenRouters **Body Builder**-modell (`openrouter/bodybuilder`) för översättning, omskrivning eller transformering – den returnerar JSON-förfrågningsnyttolaster, inte färdig text.
:::

## Andra kostnadsfria alternativ

Du kan också få kostnadsfria API-nycklar från Cerebras, Google, Groq, Mistral AI eller [NVIDIA](https://build.nvidia.com/) (OpenAI-kompatibelt API), eller köra modeller lokalt med Ollama, LM Studio, llama.cpp eller en annan OpenAI-kompatibel server (till exempel `translategemma:4b` via Ollama). Ställ in bas-URL:en för lokal LLM till den fullständiga API-basen (inkludera sökvägen, t.ex. `http://localhost:11434/v1`) i Inställningar (skrivbord) eller `LOCAL_LLM_URL` (Docker).

:::caution
Om du använder en lokal LLM-server från en annan enhet eller container, konfigurera den så att den tillåter externa anslutningar (inte bara localhost).
:::

## Docker / webb

Ange leverantörsnycklar som **miljövariabler** på servern (till exempel `PROVIDER_API_KEY`). Användare kan inte skriva in nycklar i webbläsarens användargränssnitt. Se [Konfiguration](/docs/configuration/).

## Checklista för första körningen

1. Öppna appen och ställ in **Gränssnittsspråk** om det behövs.
2. Lägg till och testa minst en leverantörsnyckel (skrivbord) eller bekräfta att servern har miljönycklar (webb).
3. I läget **Enkel** väljer du en **Leverantör** i Allmänna inställningar; i läget **Avancerat** lägger du till modeller under **Inställningar → Modeller**.
4. På **Översätt** väljer du en förinställning eller modell och kör ett kort test – se [Översätt text](/docs/translate/).
