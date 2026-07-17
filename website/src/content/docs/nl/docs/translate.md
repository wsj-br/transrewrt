---
title: Tekst vertalen
description: >-
  Converteer tekst tussen talen, gebruik de woordenlijst en verfijn resultaten
  met "Herschrijven".
---



Gebruik **Vertalen** om tekst van de ene taal naar de andere te converteren.

![Werkruimte vertalen](/images/screenshots/nl/translate.png)

## Vereisten

- Minimaal één providersleutel (desktop) of serveromgevingssleutel (web) — zie [API-sleutel](/docs/api-key/)
- Een **preset** (Eenvoudig) of **model** (Geavanceerd) geselecteerd in de werkbalk

## Tekst vertalen

1. Open **Vertalen** in de zijbalk.
2. Kies een taal in **Van** (of **Taal detecteren**).
3. Kies een taal in **Naar**.
4. Kies een preset of model in de werkbalk.
5. Typ of plak tekst in **Invoer**.
6. Klik op **Vertalen**.
7. Lees het resultaat in **Uitvoer** en kopieer het indien nodig.

**Top talen** verschijnen als eerste in de lijsten — stel ze in onder [Instellingen → Talen](/docs/settings/#languages).

## Handige instellingen

In [Instellingen → Algemene instellingen](/docs/settings/#general-settings):

- **Automatisch uitvoeren bij plakken** — wordt uitgevoerd zodra u plakt
- **Resultaat automatisch naar klembord kopiëren** — kopieert na een succesvolle uitvoering
- **Realtime vertaling tijdens typen** — wordt uitgevoerd terwijl u typt (kan de kosten verhogen)
- **Time-out (ms)** — wachten voor een realtime uitvoering
- **Gedrag voor ENTER** — of Enter de taak uitvoert of een nieuwe regel invoegt

## Een vertaling verfijnen

Na een succesvolle uitvoering verschijnen **Herschrijven…** en een versie-dropdown naast de selector **Naar:**:

1. **Herschrijven…** (geen selectie) — nog een volledige vertaling van dezelfde invoer. Maximaal **vijf** versies; het model ziet eerdere versies, zodat de formulering kan verschillen. Klik op **Vertaling stoppen** om een lopende herschrijving te annuleren.
2. **Woordalternatieven** — selecteer woorden of een korte zin, klik dan met de rechtermuisknop of **Herschrijven…**. Kies een alternatief om de selectie te vervangen (kan iets breder worden voor grammatica). Bij vijf versies wordt alleen versie 5 bijgewerkt.
3. Elke herschrijvings- of alternatievenaanvraag gebruikt het model opnieuw en kan kosten met zich meebrengen.

## De woordenlijst gebruiken

Een **woordenlijst** bestaat uit bron-/doelterm-paren voor een taalpaar. Wanneer ingeschakeld, worden overeenkomende termen naar het model gestuurd, zodat de voorkeursterminologie consistent blijft.

1. Schakel **Woordenlijst** in het invoerpaneel in.
2. Vertaal zoals gewoonlijk — termen voor dat **Van** / **Naar**-paar worden automatisch toegepast.
3. Klik op **Toevoegen aan woordenlijst** (naast **Van:**) om snel een nieuw paar vast te leggen.
4. Beheer alle termen in [Instellingen → Woordenlijst](/docs/settings/#glossary).

:::note
Woordenlijsttermen worden gematcht op taalpaar. Ze kunnen niet worden gebruikt met **Taal detecteren** als bron.
:::

## Volgende stappen

- [Tekst herschrijven](/docs/rewrite/)
- [Transformeren met prompts](/docs/transform/)
- [Veelvoorkomende problemen](/docs/common-issues/)
