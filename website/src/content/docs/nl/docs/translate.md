---
title: Tekst vertalen
description: >-
  Converteer tekst tussen talen, gebruik de woordenlijst en verfijn resultaten
  met Herformuleren.
---



Gebruik **Vertalen** om tekst van de ene taal naar de andere te converteren.

![Vertaalwerkruimte](/images/screenshots/nl/translate.png)

## Vereisten

- Minimaal één provider-sleutel (desktop) of server-omgevingssleutel (web) — zie [API-sleutel](/docs/api-key/)
- Een **preset** (Eenvoudig) of **model** (Geavanceerd) geselecteerd in de werkbalk

## Tekst vertalen

1. Open **Vertalen** in de zijbalk.
2. Kies een taal in **Van** (of **Taal detecteren**).
3. Kies een taal in **Naar**.
4. Kies een preset of model in de werkbalk.
5. Typ of plak tekst in **Invoer**.
6. Klik op **Vertalen**.
7. Lees het resultaat in **Uitvoer** en kopieer indien nodig.

**Top talen** verschijnen als eerste in de lijsten — stel ze in onder [Instellingen → Talen](/docs/settings/#languages).

## Handige instellingen

In [Instellingen → Algemene instellingen](/docs/settings/#general-settings):

- **Automatisch uitvoeren bij plakken** — wordt uitgevoerd zodra u plakt
- **Resultaat automatisch naar klembord kopiëren** — kopieert na een succesvolle uitvoering
- **Realtime vertaling tijdens typen** — wordt uitgevoerd terwijl u typt (kan kosten verhogen)
- **Time-out (ms)** — wachten voor een realtime uitvoering
- **Gedrag voor ENTER** — of Enter de taak uitvoert of een nieuwe regel invoegt

## Lay-out en toetsenbord

- **Lay-out schakelaar** — de knoppen boven de panelen schakelen tussen **naast elkaar** en **gestapelde** Invoer/Uitvoer-lay-outs. De keuze is van toepassing op Vertalen, Herschrijven en Transformeren en wordt onthouden op dit apparaat.
- **Enter** of **Shift+Enter** voert de taak uit, afhankelijk van **Gedrag voor ENTER** (zie hierboven).
- **Escape** wist het invoerpaneel (of sluit eerst een open menu of dialoogvenster).

## Een vertaling verfijnen

Na een succesvolle uitvoering verschijnen **Herformuleren…** en een versie-dropdown naast de **Naar:**-kiezer:

1. **Herformuleren…** (geen selectie) — nog een volledige vertaling van dezelfde invoer. Maximaal **vijf** versies; het model ziet eerdere versies, dus de formulering kan verschillen. Klik op **Vertaling stoppen** om een lopende herformulering te annuleren.
2. **Woordalternatieven** — selecteer woorden of een korte zin, klik dan met de rechtermuisknop of **Herformuleren…**. Kies een alternatief om de span te vervangen (kan iets breder worden voor grammatica). Bij vijf versies wordt alleen versie 5 bijgewerkt.
3. Elke herformulering of alternatievenaanvraag gebruikt het model opnieuw en kan kosten met zich meebrengen.

## De woordenlijst gebruiken

Een **woordenlijst** bestaat uit bron-/doelterm-paren voor een talenpaar. Wanneer ingeschakeld, worden overeenkomende termen naar het model gestuurd, zodat de voorkeursterminologie consistent blijft.

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
