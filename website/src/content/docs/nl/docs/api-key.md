---
title: API-sleutel
description: >-
  Vraag een gratis OpenRouter API-sleutel aan en verbind andere AI-providers met
  Transrewrt.
---



Transrewrt heeft toegang nodig tot ten minste één AI-provider. Je hebt **geen** betaald model nodig om te beginnen: OpenRouter biedt gratis modellen nadat je een sleutel hebt toegevoegd, en verschillende andere providers bieden ook gratis lagen aan.

Ondersteunde providers zijn onder andere [OpenRouter](https://openrouter.ai), OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras, NVIDIA, Alibaba Cloud, apikey.fun, elk OpenAI-compatibel eindpunt en lokale OpenAI-compatibele servers (Ollama, LM Studio, llama.cpp en vergelijkbaar).

## Eenvoudig versus Geavanceerd

- **Eenvoudige** modus (standaard): kies een **preset** (Gratis (OpenRouter), Standaard, Geavanceerd of Technisch) die is toegewezen aan een **provider**. Alleen presets met een toewijzing voor de huidige provider verschijnen.
- **Geavanceerde** modus: kies modellen rechtstreeks. Model-ID's gebruiken een providerprefix (bijvoorbeeld `openrouter/…`, `openai/…`, `local/…`).

## Gratis OpenRouter-sleutel (desktop)

1. Ga naar [openrouter.ai](https://openrouter.ai) en meld je aan of log in.
2. Open de [Sleutels](https://openrouter.ai/keys)-pagina en maak een nieuwe sleutel aan (geef deze een naam; optionele kredietlimiet). Je kunt gratis modellen gebruiken zonder krediet toe te voegen.
3. Open in Transrewrt **Instellingen → API-configuratie**, plak de sleutel in **OpenRouter API-sleutel** en klik op **Test OpenRouter-sleutel**.

:::caution
Gebruik het **Body Builder**-model van OpenRouter (`openrouter/bodybuilder`) niet voor vertalen, herschrijven of transformeren – het retourneert JSON-aanvraagpayloads, geen voltooide tekst.
:::

## Andere gratis opties

U kunt ook gratis API-sleutels verkrijgen van Cerebras, Google, Groq, Mistral AI of [NVIDIA](https://build.nvidia.com/) (OpenAI-compatibele API), of modellen lokaal uitvoeren met Ollama, LM Studio, llama.cpp of een andere OpenAI-compatibele server (bijvoorbeeld `translategemma:4b` via Ollama). Stel de lokale LLM-basis-URL in op de volledige API-basis (inclusief het pad, bijv. `http://localhost:11434/v1`) in Instellingen (desktop) of `LOCAL_LLM_URL` (Docker).

:::caution
Als u een lokale LLM-server vanaf een ander apparaat of een andere container gebruikt, configureer deze dan om externe verbindingen toe te staan (niet alleen localhost).
:::

## Docker / web

Stel providersleutels in als **omgevingsvariabelen** op de server (bijvoorbeeld `PROVIDER_API_KEY`). Gebruikers kunnen geen sleutels invoeren in de browser-UI. Zie [Configuratie](/docs/configuration/).

## Checklist voor de eerste keer uitvoeren

1. Open de app en stel indien nodig de **Interfacetaal** in.
2. Voeg ten minste één provider-sleutel toe en test deze (desktop) of bevestig dat de server omgevingssleutels heeft (web).
3. Kies in de modus **Easy** een **Provider** in Algemene instellingen; voeg in de modus **Advanced** modellen toe onder **Instellingen → Modellen**.
4. Kies op **Vertalen** een preset of model en voer een korte test uit — zie [Tekst vertalen](/docs/translate/).
