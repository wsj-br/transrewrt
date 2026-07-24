---
title: API-nyckel
description: >-
  Anslut Transrewrt till en AI-leverantör du väljer genom att lägga till en
  API-nyckel, eller använd en lokal modell istället.
---



Transrewrt inkluderar inte sin egen AI – den skickar din text till en AI-leverantör som du väljer. För att ansluta en leverantör lägger du till en **API-nyckel**: en privat kod, utfärdad av leverantören, som fungerar som ett lösenord för deras tjänst. Du behöver bara **en** leverantör för att komma igång, och du behöver inte betala: flera leverantörer erbjuder gratis modeller eller gratistjänster, och du kan också köra modeller på din egen dator utan någon nyckel alls.

Leverantörer som stöds inkluderar OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras, NVIDIA, Alibaba Cloud, apikey.fun, alla OpenAI-kompatibla slutpunkter och lokala OpenAI-kompatibla servrar (Ollama, LM Studio, llama.cpp och liknande).

## Steg 1 – Välj en leverantör

Alla leverantörer som stöds fungerar. Om du är osäker på vilken du ska välja:

- **Gratis att börja**: OpenRouter, Google Gemini, Groq, Mistral, Cerebras och NVIDIA erbjuder alla gratis modeller eller gratistjänster.
- **Har du redan ett konto?** Om du redan använder OpenAI, Anthropic eller en annan leverantör som stöds kan du helt enkelt återanvända det kontot.
- **Föredrar du att behålla allt på din egen dator?** Hoppa över nyckeln helt och använd en [lokal modell](#using-a-local-model-instead-no-api-key) istället.

## Steg 2 – Skapa en API-nyckel

De exakta stegen varierar något beroende på leverantör, men mönstret är detsamma överallt:

1. Registrera dig eller logga in på leverantörens webbplats. I Transrewrts **Inställningar → API-konfiguration** har varje leverantör en länk **Öppna leverantörens webbplats** som tar dig till rätt ställe.
2. Hitta sidan **API-nycklar** (ibland under konto, instrumentpanel eller utvecklarinställningar) och skapa en ny nyckel. Vissa leverantörer ber dig att namnge nyckeln eller ange en utgiftsgräns – båda är valfria.
3. Kopiera nyckeln. Det är en lång sträng av bokstäver och siffror, som ofta börjar med något som `sk-`.

:::caution
Behandla en API-nyckel som ett lösenord: dela den inte, posta den inte eller skicka den till någon. Om en nyckel läcker, radera den på leverantörens webbplats och skapa en ny.
:::

## Steg 3 – Lägg till och testa nyckeln (skrivbord)

1. I Transrewrt, öppna **Inställningar → API-konfiguration**.
2. Klistra in nyckeln i fältet för din leverantör (till exempel **Google Gemini API-nyckel**) och spara den.
3. Klicka på **Testa** bredvid fältet för att bekräfta att nyckeln fungerar.

När testet lyckats är du redo – välj den leverantören på huvudskärmen och börja översätta.

:::caution
Undvik OpenRouters **Body Builder**-modell (`openrouter/bodybuilder`) – den returnerar JSON-förfrågningsnyttolaster, inte färdig text. Se [Inställningar → Modeller](/docs/settings/#models).
:::

## Använda en lokal modell istället (ingen API-nyckel)

Du kan köra modeller på din egen dator med Ollama, LM Studio, llama.cpp eller en annan OpenAI-kompatibel server (till exempel `google/gemma-4-e2b` via LM Studio). Inget lämnar din maskin och ingen API-nyckel behövs.

För att ansluta en, ställ in den lokala LLM-bas-URL:en till den fullständiga API-basen, inklusive sökvägen – till exempel `http://localhost:11434/v1`. På skrivbordet ställer du in detta i **Inställningar → API-konfiguration**; på Docker ställer du istället in miljövariabeln `LOCAL_LLM_URL`.

:::caution
Om du använder en lokal LLM-server från en annan enhet eller container, konfigurera den för att tillåta externa anslutningar (inte endast localhost).
:::

## Docker / webb

Om du använder Transrewrt i en webbläsare hanteras nycklar av den som driver servern, inte genom att skrivas in i webbläsarens gränssnitt. Administratören ställer in leverantörsnycklar som **miljövariabler** på servern (till exempel `PROVIDER_API_KEY`) – se [Konfiguration](/docs/configuration/).

## Checklista för första körningen

1. Öppna appen och ställ in **Gränssnittsspråk** om det behövs.
2. Lägg till och testa minst en leverantörsnyckel – eller konfigurera en lokal modell (skrivbord), eller bekräfta att servern har miljönycklar (webb).
3. I **Enkelt** läge, välj en **Leverantör** i Allmänna inställningar; i **Avancerat**, lägg till modeller under **Inställningar → Modeller** – se [Inställningar](/docs/settings/#general-settings) för de två lägena.
4. På **Översätt**, välj en förinställning eller modell och kör ett kort test – se [Översätt text](/docs/translate/).

## Om något inte fungerar

- **Nyckeltestet misslyckas**: kontrollera att nyckeln kopierades fullständigt (inga mellanslag före eller efter) och att den inte har raderats eller inaktiverats på leverantörens webbplats.
- **Översättningar misslyckas med ett kvot- eller kreditfel**: gratistjänster har dagliga eller månatliga gränser; vänta, byt till en annan gratisleverantör eller lägg till kredit.
- **Ingen leverantör visas i enkelt läge**: öppna **Inställningar → API-konfiguration** och bekräfta att minst en nyckel (eller den lokala LLM-URL:en) är konfigurerad och testad.

Mer hjälp: [Vanliga problem](/docs/common-issues/).
