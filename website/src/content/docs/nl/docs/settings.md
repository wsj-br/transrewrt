---
title: Instellingen
description: >-
  Compacte referentie voor Algemeen, Modellen, Talen, Woordenlijst, Kosten,
  Transformeren, Gebruikers, API en Over.
---



Open **Instellingen** vanuit de zijbalk om aan te passen hoe de app zich gedraagt.

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

![Tabblad Algemene instellingen](/images/screenshots/nl/settings-general.png)

**AI-ervaring**

- **Eenvoudig** (standaard): kies een **Provider**. Cloudproviders gebruiken voorinstellingen in de werkbalk. **Lokale LLM** toont in plaats daarvan geïnstalleerde lokale modellen. **Catalogus met voorinstellingen vernieuwen** haalt de nieuwste lijst met voorinstellingen op uit de projectrepository.
  - **Gratis (OpenRouter)** — kosteloze optie die wordt doorgestuurd naar beschikbare gratis modellen; kwaliteit en beschikbaarheid kunnen variëren
  - **Standaard** — lichtgewicht en kostenefficiënt; het beste voor korte teksten, snelle concepten en veelvuldig gebruik
  - **Geavanceerd** — zeer nauwkeurig model voor complexe of genuanceerde inhoud, tegen hogere kosten
  - **Technisch** — afgestemd op code, API's, ontwikkelaarsdocumentatie en gestructureerde inhoud; behoudt opmaak en terminologie
- **Geavanceerd**: kies modellen in de werkbalk; beheer de lijst onder [Modellen](#models).

U kunt ook schakelen tussen Eenvoudig ↔ Geavanceerd via het menu voorinstellingen/modellen in de werkbalk (**Schakelen naar Eenvoudige/Geavanceerde modus**, boven Open instellingen).

**Uiterlijk** — Thema; **Kosteninformatie weergeven bij de acties**; **Aantal decimalen voor kosten**; alleen-webmarge rond de app; **Lettertypefamilie** en **Grootte**.

**Gedrag** — **Gedrag voor ENTER**; **Automatisch uitvoeren bij plakken**; **Resultaat automatisch naar klembord kopiëren**; **Realtime vertaling tijdens typen**; **Time-out (ms)**.

**Geschiedenis**

- **Uitvoeringsgeschiedenis bijhouden** — slaat invoer/uitvoer op voor de [Geschiedenis](/docs/history/)-weergave. Uitschakelen vraagt om bevestiging en kan opgeslagen tekst verwijderen. Indien gelabeld als *uitgeschakeld door de beheerder*, is `HISTORY_DISABLED` ingesteld — zie [Configuratie](/docs/configuration/#privacy-mode).
- **Geschiedenisgegevens verwijderen** — verwijdert opgeslagen tekst op basis van leeftijd of wist alles. Verwijdert **geen** kostentotalen (gebruik hiervoor Kosten bijhouden).

**Configuratieback-up** (desktop- en webbeheerders)

- Optioneel **Gebruiksgegevens opnemen in de back-up**
- **Back-upconfiguratie** — ZIP met configuratie, status, gebruikers, voorkeuren, prompts en optionele gebruiksgegevens
- **Herstellen vanaf back-up** — bevestigingsdialoogvenster met opties om gebruiksgegevens te herstellen en/of te wissen

Back-ups kunnen worden verplaatst tussen desktop en web; het herstellen van een desktopback-up op het web past gegevens toe op de beheerdersgebruiker.

## Modellen

Alleen beschikbaar in de modus **Geavanceerd**.

- **Beschikbare modellen** (links) en **Geselecteerde modellen** (rechts)
- Zoeken, **Provider**-chips, **Alleen gratis**, **Vernieuwen**, Alles uitvouwen/samenvouwen
- Model-ID's gebruiken een providervoorvoegsel (`openrouter/…`, `openai/…`, `local/…`, …)

:::caution
Gebruik OpenRouter **Body Builder** (`openrouter/bodybuilder`) niet voor Vertalen, Herschrijven of Transformeren — het retourneert JSON-aanvraagpayloads, geen voltooide tekst.
:::

Toevoegen met **Toevoegen**; verwijderen met **X**. Het gratis OpenRouter-model is optioneel — geselecteerde modellen kunnen leeg zijn. Het verwijderen van het laatste model uit de werkbalk opent **Instellingen → Modellen**. Als het huidige model niet beschikbaar wordt, selecteert de app het volgende model in de lijst in plaats van het gratis model af te dwingen.

## Talen

- **Top talen** — bovenaan vastgezet in taallijsten in Vertalen en Transformeren
- **Aangepaste taal** — voeg een taal toe die ontbreekt in de ingebouwde lijst

## Kosten bijhouden

- **Totale kosten**, **Waarde kopiëren**, **Kosten resetten**
- **Synchroniseren met API-sleutelgebruik** — afstemmen op OpenRouter-accountgebruik (alleen OpenRouter)
- **API-sleutelgebruik** — OpenRouter-details indien beschikbaar
- **Kosten gegevens verwijderen** — alle gegevens of vermeldingen ouder dan een bepaalde datum

OpenRouter toont de werkelijk gefactureerde kosten wanneer van toepassing; andere providers gebruiken schattingen van OpenRouter-prijzen. Schattingen zijn geen facturen.

:::caution
Het verwijderen van kostengegevens kan niet ongedaan worden gemaakt. Exporteer eerst via Geschiedenis of Dashboard → Alle oproepen als u een back-up nodig heeft. Gerelateerde invoer-/uitvoergeschiedenis voor die API-aanroepen wordt ook verwijderd.
:::

## Transformeren

Prompts in bulk beheren: bekijken, verwijderen, importeren, exporteren en voorbeeldprompts laden.

## Woordenlijst

Beheer termparen die tijdens de [vertaling](/docs/translate/#use-the-glossary) worden toegepast. Elke term heeft een bron-/doeltaal en bron-/doeltekst.

- Toevoegen via de onderste rij en **+**
- Filteren op talen of tekst
- CSV of XLSX importeren/exporteren; lege sjablonen downloaden

Desktop slaat de woordenlijst lokaal op; web slaat deze per gebruiker op.

## Gebruikers

Alleen web (beheerders):

- Gebruikers toevoegen, gegevens bijwerken, wachtwoorden opnieuw instellen, accounts verwijderen
- **Sessietime-out** — hoe lang een aanmelding duurt (1 uur tot 7 dagen); wijzigingen zijn alleen van toepassing op nieuwe aanmeldingen
- **Sessies intrekken** — een gebruiker onmiddellijk afmelden van alle apparaten

Elke aangemelde gebruiker (inclusief niet-beheerders) kan zijn eigen wachtwoord wijzigen of zich afmelden via het gebruikersmenu onderaan de zijbalk.

## API-configuratie

Configureer alleen de providers die u gebruikt: OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras, NVIDIA, Alibaba Cloud, apikey.fun, **Lokale LLM** (basis-URL voor Ollama, LM Studio, llama.cpp of vergelijkbaar), en een optionele aangepaste OpenAI-compatibele provider.

**Web (beheerder):** sleutels komen van omgevingsvariabelen — deze pagina toont welke zijn ingesteld en laat u **Testen**. Herstart na het wijzigen van omgevingsvariabelen. Zie [Configuratie](/docs/configuration/).

**Desktop:** voer sleutels (of Lokale LLM URL) in en **Opslaan** / **Bewerken** / **Testen**. Sleutels worden versleuteld opgeslagen; u kunt de huidige waarde niet bekijken, alleen vervangen.

:::tip
Geen betaalde sleutel nodig om te beginnen: gebruik gratis OpenRouter-modellen, andere gratis providers, of een lokale OpenAI-compatibele server zoals [Ollama](https://ollama.com), LM Studio, of llama.cpp (bijv. `translategemma:4b`).
:::

## Over

Appnaam, versie, builddatum, licentie, mededelingen van derden en repositorylink.
