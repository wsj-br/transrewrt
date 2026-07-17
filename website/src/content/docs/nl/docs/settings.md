---
title: Instellingen
description: >-
  Compacte referentie voor Algemeen, Modellen, Talen, Woordenlijst, Kosten,
  Transformeren, Gebruikers, API en Over.
translation_last_updated: '2026-07-17T21:14:44.739Z'
source_file_mtime: '2026-07-17T14:37:21.849Z'
source_file_hash: 492e5fd37f4a6b282502282d4f2728047a0d09ae8c30334b3c8388a5ce6e9f68
translation_language: nl
source_file_path: src/content/docs/docs/settings.md
translation_models:
  - google/gemini-2.5-flash
---



Open **Instellingen** via de zijbalk om aan te passen hoe de app zich gedraagt.

| Tabblad | Desktop | Web (beheerder) | Web (gebruiker) | Opmerkingen |
| --- | :---: | :---: | :---: | --- |
| Algemene instellingen | ja | ja | ja | Inclusief **AI-ervaring** (Eenvoudig / Geavanceerd) |
| Modellen | ja | ja | ja | Alleen wanneer **AI-ervaring** **Geavanceerd** is |
| Talen | ja | ja | ja | |
| Kosten bijhouden | ja | ja | — | |
| Transformeren | ja | ja | ja | Bulkimport/export van prompts |
| Woordenlijst | ja | ja | ja | Termparen voor vertaling |
| Gebruikers | — | ja | — | |
| API-configuratie | ja | ja | — | |
| Over | ja | ja | ja | |

In de modus **Eenvoudig** kiest u AI via voorinstellingen in de werkbalk en **Provider** in Algemene instellingen; het tabblad **Modellen** is verborgen.

:::note
In de webversie heeft elke gebruiker zijn eigen configuratie (AI-ervaring, provider, modellen/voorinstellingen, talen, opties, prompts). Wijzigingen hebben geen invloed op andere gebruikers.
:::

## Algemene instellingen

**AI-ervaring**

- **Eenvoudig** (standaard): kies een **Provider**. Cloudproviders gebruiken werkbalkvoorinstellingen (**Gratis (OpenRouter)**, **Standaard**, **Geavanceerd**, **Technisch**). **Lokale LLM** toont in plaats daarvan geïnstalleerde lokale modellen. **Catalogus voorinstellingen vernieuwen** haalt de nieuwste lijst met voorinstellingen op uit de projectrepository.
- **Geavanceerd**: kies modellen in de werkbalk; beheer de lijst onder [Modellen](#models).

**Uiterlijk** — Thema; **Kosteninformatie weergeven bij de acties**; **Aantal decimalen voor kosten**; alleen-webmarge rond de app; **Lettertypefamilie** en **Grootte**.

**Gedrag** — **Gedrag voor ENTER**; **Automatisch uitvoeren bij plakken**; **Resultaat automatisch naar klembord kopiëren**; **Realtime vertaling tijdens typen**; **Time-out (ms)**.

**Geschiedenis**

- **Uitvoeringsgeschiedenis bewaren** — slaat invoer/uitvoer op voor de [Geschiedenis](/docs/history/)-weergave. Uitschakelen vraagt om bevestiging en kan opgeslagen tekst verwijderen. Indien gelabeld als *uitgeschakeld door de beheerder*, is `HISTORY_DISABLED` ingesteld — zie [Configuratie](/docs/configuration/#privacy-mode).
- **Geschiedenisgegevens verwijderen** — verwijdert opgeslagen tekst op basis van leeftijd of wist alles. Verwijdert **geen** kostenoverzichten (gebruik hiervoor Kosten bijhouden).

**Configuratieback-up** (desktop- en webbeheerders)

- Optioneel **Gebruiksgegevens opnemen in de back-up**
- **Back-upconfiguratie** — ZIP met configuratie, status, gebruikers, voorkeuren, prompts en optionele gebruiksgegevens
- **Herstellen vanaf back-up** — bevestigingsdialoogvenster met opties om gebruiksgegevens te herstellen en/of te wissen

Back-ups kunnen worden verplaatst tussen desktop en web; het herstellen van een desktopback-up op het web past gegevens toe op de beheerdersgebruiker.

## Modellen

Alleen beschikbaar in de modus **Geavanceerd**.

![Instellingen tabblad Modellen](/images/screenshots/nl/settings-general.png)

- **Beschikbare modellen** (links) en **Geselecteerde modellen** (rechts)
- Zoeken, **Provider**-chips, **Alleen gratis**, **Vernieuwen**, Alles uitvouwen/samenvouwen
- Model-ID's gebruiken een providervoorvoegsel (`openrouter/…`, `openai/…`, `local/…`, …)

:::caution
Gebruik OpenRouter **Body Builder** (`openrouter/bodybuilder`) niet voor Vertalen, Herschrijven of Transformeren — het retourneert JSON-aanvraagpayloads, geen voltooide tekst.
:::

Toevoegen met **Toevoegen**; verwijderen met **X**. **Alles deselecteren** behoudt het vereiste gratis model.

## Talen

- **Top talen** — bovenaan vastgezet in taallijsten in Vertalen en Transformeren
- **Aangepaste taal** — voeg een taal toe die ontbreekt in de ingebouwde lijst

## Kosten bijhouden

- **Totale kosten**, **Waarde kopiëren**, **Kosten resetten**
- **Synchroniseren met API-sleutelgebruik** — afstemmen op OpenRouter-accountgebruik (alleen OpenRouter)
- **API-sleutelgebruik** — OpenRouter-details indien beschikbaar
- **Kosteninformatie verwijderen** — alle gegevens of vermeldingen ouder dan een bepaalde datum

OpenRouter toont de werkelijke gefactureerde kosten wanneer van toepassing; andere providers gebruiken schattingen van de OpenRouter-prijzen. Schattingen zijn geen facturen.

:::caution
Het verwijderen van kosteninformatie kan niet ongedaan worden gemaakt. Exporteer eerst via Geschiedenis of Dashboard → Alle oproepen als u een back-up nodig heeft. Gerelateerde invoer-/uitvoergeschiedenis voor die API-aanroepen wordt ook verwijderd.
:::

## Transformeren

Beheer prompts in bulk: bekijk, verwijder, importeer, exporteer en laad voorbeeldprompts.

## Woordenlijst

Beheer termparen die worden toegepast tijdens [vertaling](/docs/translate/#use-the-glossary). Elke term heeft een bron-/doeltaal en bron-/doeltekst.

- Toevoegen via de onderste rij en **+**
- Filteren op talen of tekst
- CSV of XLSX importeren/exporteren; lege sjablonen downloaden

Desktop slaat de woordenlijst lokaal op; web slaat deze per gebruiker op.

## Gebruikers

Alleen web (beheerders): gebruikers toevoegen, details bijwerken, wachtwoorden opnieuw instellen, accounts verwijderen.

## API-configuratie

Configureer alleen de providers die u gebruikt: OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras, NVIDIA, Alibaba Cloud, apikey.fun, **Lokale LLM** (basis-URL voor Ollama, LM Studio, llama.cpp, of vergelijkbaar), en een optionele aangepaste OpenAI-compatibele provider.

**Web (beheerder):** sleutels komen van omgevingsvariabelen — deze pagina toont welke zijn ingesteld en laat u **Testen**. Herstart na het wijzigen van omgevingsvariabelen. Zie [Configuratie](/docs/configuration/).

**Desktop:** voer sleutels (of lokale LLM-URL) in en **Opslaan** / **Bewerken** / **Testen**. Sleutels worden versleuteld opgeslagen; u kunt de huidige waarde niet bekijken, alleen vervangen.

:::tip
Geen betaalde sleutel nodig om te beginnen: gebruik gratis OpenRouter-modellen, andere gratis providers, of een lokale OpenAI-compatibele server zoals [Ollama](https://ollama.com), LM Studio, of llama.cpp (bijv. `translategemma:4b`).
:::

## Over

Appnaam, versie, builddatum, licentie, kennisgevingen van derden en repositorylink.
