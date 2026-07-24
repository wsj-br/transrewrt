---
title: API-sleutel
description: >-
  Verbind Transrewrt met een AI-provider naar keuze door een API-sleutel toe te
  voegen, of gebruik in plaats daarvan een lokaal model.
---



Transrewrt bevat geen eigen AI — het stuurt uw tekst naar een AI-provider die u kiest. Om een provider te verbinden, voegt u een **API-sleutel** toe: een privécode, uitgegeven door de provider, die werkt als een wachtwoord voor hun service. U hebt slechts **één** provider nodig om te beginnen, en u hoeft niet te betalen: verschillende providers bieden gratis modellen of gratis lagen aan, en u kunt ook modellen op uw eigen computer draaien zonder enige sleutel.

Ondersteunde providers zijn onder andere OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras, NVIDIA, Alibaba Cloud, apikey.fun, elk OpenAI-compatibel eindpunt en lokale OpenAI-compatibele servers (Ollama, LM Studio, llama.cpp en vergelijkbaar).

## Stap 1 — Kies een provider

Elke ondersteunde provider werkt. Als u niet zeker weet welke u moet kiezen:

- **Gratis om te beginnen**: OpenRouter, Google Gemini, Groq, Mistral, Cerebras en NVIDIA bieden allemaal gratis modellen of gratis lagen.
- **Heeft u al een account?** Als u al OpenAI, Anthropic of een andere ondersteunde provider gebruikt, kunt u dat account eenvoudig hergebruiken.
- **Geeft u er de voorkeur aan om alles op uw eigen computer te houden?** Sla de sleutel helemaal over en gebruik in plaats daarvan een [lokaal model](#using-a-local-model-instead-no-api-key).

## Stap 2 — Maak een API-sleutel aan

De exacte stappen variëren enigszins per provider, maar het patroon is overal hetzelfde:

1. Meld u aan of log in op de website van de provider. In Transrewrt's **Instellingen → API-configuratie** heeft elke provider een link **Open providerwebsite** die u naar de juiste plaats brengt.
2. Zoek de pagina **API-sleutels** (soms onder account, dashboard of ontwikkelaarsinstellingen) en maak een nieuwe sleutel aan. Sommige providers vragen u om de sleutel een naam te geven of een bestedingslimiet in te stellen — beide zijn optioneel.
3. Kopieer de sleutel. Het is een lange reeks letters en cijfers, vaak beginnend met iets als `sk-`.

:::caution
Behandel een API-sleutel als een wachtwoord: deel deze niet, plaats deze niet en stuur deze naar niemand. Als een sleutel lekt, verwijder deze dan op de website van de provider en maak een nieuwe aan.
:::

## Stap 3 — Voeg de sleutel toe en test deze (desktop)

1. Open in Transrewrt **Instellingen → API-configuratie**.
2. Plak de sleutel in het veld voor uw provider (bijvoorbeeld **Google Gemini API-sleutel**) en sla deze op.
3. Klik op **Testen** naast het veld om te bevestigen dat de sleutel werkt.

Zodra de test is geslaagd, bent u klaar — kies die provider op het hoofdscherm en begin met vertalen.

:::caution
Vermijd OpenRouter's **Body Builder**-model (`openrouter/bodybuilder`) — het retourneert JSON-aanvraagpayloads, geen voltooide tekst. Zie [Instellingen → Modellen](/docs/settings/#models).
:::

## Een lokaal model gebruiken (geen API-sleutel)

U kunt modellen op uw eigen computer draaien met Ollama, LM Studio, llama.cpp of een andere OpenAI-compatibele server (bijvoorbeeld `google/gemma-4-e2b` via LM Studio). Niets verlaat uw machine en er is geen API-sleutel nodig.

Om er een te verbinden, stelt u de basis-URL van de lokale LLM in op de volledige API-basis, inclusief het pad — bijvoorbeeld `http://localhost:11434/v1`. Op desktop stelt u dit in via **Instellingen → API-configuratie**; op Docker stelt u in plaats daarvan de omgevingsvariabele `LOCAL_LLM_URL` in.

:::caution
Als je een lokale LLM-server vanaf een ander apparaat of container gebruikt, configureer deze dan om externe verbindingen toe te staan (niet alleen localhost).
:::

## Docker / web

Als u Transrewrt in een browser gebruikt, worden sleutels beheerd door degene die de server draait, en niet ingevoerd in de browser-UI. De beheerder stelt providersleutels in als **omgevingsvariabelen** op de server (bijvoorbeeld `PROVIDER_API_KEY`) — zie [Configuratie](/docs/configuration/).

## Eerste-uitvoering checklist

1. Open de app en stel indien nodig de **Interfacetaal** in.
2. Voeg ten minste één providersleutel toe en test deze — of configureer een lokaal model (desktop), of bevestig dat de server omgevingssleutels heeft (web).
3. Kies in de **Eenvoudige** modus een **Provider** in Algemene instellingen; voeg in de **Geavanceerde** modus modellen toe onder **Instellingen → Modellen** — zie [Instellingen](/docs/settings/#general-settings) voor de twee modi.
4. Kies op **Vertalen** een voorinstelling of model en voer een korte test uit — zie [Tekst vertalen](/docs/translate/).

## Als iets niet werkt

- **De sleuteltest mislukt**: controleer of de sleutel volledig is gekopieerd (geen spaties ervoor of erna) en of deze niet is verwijderd of uitgeschakeld op de website van de provider.
- **Vertalingen mislukken met een quotum- of kredietfout**: gratis abonnementen hebben dagelijkse of maandelijkse limieten; wacht, schakel over naar een andere gratis provider of voeg krediet toe.
- **Geen provider verschijnt in de Easy-modus**: open **Instellingen → API-configuratie** en controleer of ten minste één sleutel (of de URL van de lokale LLM) is geconfigureerd en getest.

Meer hulp: [Veelvoorkomende problemen](/docs/common-issues/).
