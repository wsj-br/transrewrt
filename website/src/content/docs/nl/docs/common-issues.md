---
title: Veelvoorkomende problemen
description: Probleemoplossing en snelle tips voor Transrewrt.
---



Als iets niet werkt zoals verwacht, controleer dan eerst deze punten.

## De app vertaalt, herschrijft of transformeert niet

Controleer of:

- u een **preset** (Eenvoudig) of **model** (Geavanceerd) hebt geselecteerd in de werkbalk
- in de **Eenvoudige** modus, **Instellingen → Algemene instellingen** een **Provider** heeft met een werkende sleutel (of lokale LLM URL)
- in de **Geavanceerde** modus, een model is geselecteerd in de werkbalk (een lege lijst is toegestaan, maar u hebt ten minste één model nodig in **Instellingen → Modellen** om te kunnen uitvoeren)
- uw API-instellingen werken (desktop: **Instellingen → API-configuratie → Testen**)

## De modellijst is leeg

Bevestig in de **Eenvoudige** modus dat de **Provider** is ingesteld en dat sleutels/URL's zijn getest. Zorg er voor **Lokale LLM** voor dat uw lokale server draait en modellen zijn geladen.

In de **Geavanceerde** modus kunnen geselecteerde modellen leeg zijn. Open **Instellingen → Modellen**, klik op **Vernieuwen** en voeg modellen toe aan **Geselecteerde modellen**. Schakel optioneel **Alleen gratis** in. Het verwijderen van het laatste werkbalkmodel opent ook Instellingen → Modellen.

## Te traag of te duur

- Kies een andere preset of model
- Gebruik kortere invoer
- Schakel **Realtime vertaling tijdens het typen** uit in Algemene instellingen
- Gebruik gratis modellen voor eenvoudige taken

## Verkeerde interfacetaal

Klik op het wereldbolpictogram in de werkbalk en kies uw **Interfacetaal**.

## Tekst te klein of moeilijk te lezen

**Instellingen → Algemene instellingen** → wijzig **Lettertypefamilie** en **Grootte**.

## Dashboardoverzicht ziet er leeg uit

Dit is normaal als:

- u alleen **gratis modellen** gebruikt en u kijkt naar **kosten** (deze kunnen nul zijn); KPI's voor het aantal oproepen hebben nog steeds gegevens nodig voor de geselecteerde periode
- het geselecteerde **tijdfilter** niet de periode dekt waarin oproepen zijn gedaan — probeer **Alles**

Als KPI's na **Alles** nog steeds nul zijn, controleer dan [Geschiedenis](/docs/history/) of Dashboard → **Alle oproepen**.

## Kosten tonen "niet beschikbaar" of lijken verkeerd

OpenRouter toont de werkelijke uitgaven, indien van toepassing. Voor andere providers wordt de kostprijs geschat op basis van de OpenRouter-prijzen; als er geen prijs overeenkomt, wordt de kostprijs weergegeven als **niet beschikbaar** en wordt deze niet toegevoegd aan het totaal.

## Totale kosten komen niet overeen met mijn providerfactuur

Cijfers in de app zijn **schattingen ter referentie**, geen facturen. Gebruik voor OpenRouter **Instellingen → Kosten bijhouden → Synchroniseren met API-sleutelgebruik**.

## Geschiedenispagina ontbreekt in de zijbalk

**Uitvoeringsgeschiedenis bewaren** is mogelijk uitgeschakeld. Schakel dit in via Algemene instellingen, tenzij de geschiedenis door de beheerder is uitgeschakeld (`HISTORY_DISABLED` — zie [Configuratie](/docs/configuration/#privacy-mode)).

## Web: onverwacht omgeleid naar inlogpagina

Uw sessie is mogelijk verlopen. Log opnieuw in. Als dit vaak gebeurt, vraag dan een beheerder om de **Sessietime-out** te verhogen onder [Instellingen → Gebruikers](/docs/settings/#users) (een beheerder kan ook uw sessies hebben ingetrokken).

## Webbeheerder: wachtwoord vergeten

Als een andere beheerder kan inloggen, kan deze het wachtwoord opnieuw instellen onder **Instellingen → Gebruikers**. Als u bent buitengesloten, maar wel shell-toegang hebt:

```bash
docker exec transrewrt reset-web-password '<username>' '<new-password>'
```

De standaard beheerdersgebruikersnaam is `admin`. Vanaf een broncheckout: `pnpm run reset-web-password -- <username> <new-password>`.

## Dashboard toont geen gegevens voor andere gebruikers (web)

Alleen **beheerders** kunnen andere gebruikers bekijken via het filter **Gebruiker**. Reguliere gebruikers zien alleen hun eigen activiteit.

## Een prompt gewijzigd en bewerkingen verloren

Wanneer u een Transform-prompt bewerkt, klikt u op **Opslaan** voordat u op **Terug naar uitvoeren** klikt.

## Snelle tips

- Begin met [Vertalen](/docs/translate/) om uw instellingen te bevestigen voordat u herschrijft of transformeert
- Gebruik [Herschrijven](/docs/rewrite/) voor alledaagse woordverbeteringen
- Gebruik [Transformeren](/docs/transform/) voor herhaalbare aangepaste workflows
- Blijf in de modus **Eenvoudig** totdat u gedetailleerde model-ID's nodig hebt
- Exporteer regelmatig prompts als u een promptbibliotheek aan het opbouwen bent
- Gebruik [Dashboard](/docs/dashboard/) en [Geschiedenis](/docs/history/) om het gebruik en eerdere uitvoeringen te bekijken

[Report an issue](https://github.com/wsj-br/transrewrt/issues)
