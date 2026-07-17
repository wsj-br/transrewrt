---
title: Veelvoorkomende problemen
description: Probleemoplossing en snelle tips voor Transrewrt.
translation_last_updated: '2026-07-17T21:14:44.244Z'
source_file_mtime: '2026-07-17T14:37:17.841Z'
source_file_hash: d60d2f0d1e9289639fd72ad478b6756e4638dce77acf7d2d1795a37653a97f17
translation_language: nl
source_file_path: src/content/docs/docs/common-issues.md
translation_models:
  - google/gemini-2.5-flash
---



Als iets niet werkt zoals verwacht, controleer dan eerst deze punten.

## De app vertaalt, herschrijft of transformeert niet

Controleer of:

- je hebt een **preset** (Easy) of **model** (Advanced) geselecteerd in de werkbalk
- in de modus **Easy** heeft **Instellingen → Algemene instellingen** een **Provider** met een werkende sleutel (of lokale LLM-URL)
- in de modus **Advanced** staat ten minste één model vermeld in **Instellingen → Modellen**
- je API-instelling werkt (desktop: **Instellingen → API-configuratie → Testen**)

## De modellijst is leeg

Bevestig in de modus **Easy** dat **Provider** is ingesteld en dat sleutels/URL's zijn getest. Zorg er voor **Lokale LLM** voor dat je lokale server actief is en dat modellen zijn geladen.

Open in de modus **Geavanceerd** **Instellingen → Modellen**, klik op **Vernieuwen** en voeg modellen toe aan **Geselecteerde modellen**. Schakel optioneel **Alleen gratis** in.

## Te traag of te duur

- Kies een andere preset of model
- Gebruik kortere invoer
- Schakel **Realtime vertaling tijdens typen** uit in Algemene instellingen
- Gebruik gratis modellen voor eenvoudige taken

## Verkeerde interfacetaal

Klik op het wereldbolpictogram in de werkbalk en kies uw **Interfacetaal**.

## Tekst te klein of moeilijk te lezen

**Instellingen → Algemene instellingen** → wijzig **Lettertypefamilie** en **Grootte**.

## Dashboardoverzicht ziet er leeg uit

Dit is normaal als:

- u alleen **gratis modellen** gebruikt en u kijkt naar **kosten** (deze kunnen nul zijn); KPI's voor het aantal oproepen hebben nog steeds gegevens nodig voor de geselecteerde periode
- het geselecteerde **tijdfilter** de periode waarin oproepen zijn gedaan niet dekt — probeer **Alles**

Als KPI's na **Alles** nog steeds nul zijn, controleer dan [Geschiedenis](/docs/history/) of Dashboard → **Alle oproepen**.

## Kosten tonen "niet beschikbaar" of lijken verkeerd

OpenRouter toont de werkelijke uitgaven wanneer van toepassing. Voor andere providers worden de kosten geschat op basis van de OpenRouter-prijzen; als er geen prijs overeenkomt, worden de kosten weergegeven als **niet beschikbaar** en worden ze niet opgeteld bij het totaal.

## Totale kosten komen niet overeen met mijn providerfactuur

Cijfers in de app zijn **schattingen ter referentie**, geen facturen. Voor OpenRouter gebruikt u **Instellingen → Kosten bijhouden → Synchroniseren met API-sleutelgebruik**.

## Geschiedenispagina ontbreekt in de zijbalk

**Uitvoeringsgeschiedenis bewaren** is mogelijk uitgeschakeld. Schakel dit in bij Algemene instellingen, tenzij de geschiedenis is uitgeschakeld door de beheerder (`HISTORY_DISABLED` — zie [Configuratie](/docs/configuration/#privacy-mode)).

## Web: onverwacht omgeleid naar inloggen

Uw sessie is mogelijk verlopen. Log opnieuw in. Als dit vaak gebeurt, controleer dan de instellingen voor de levensduur van de serversessie.

## Webbeheerder: wachtwoord vergeten

Als een andere beheerder kan inloggen, kan deze het wachtwoord opnieuw instellen onder **Instellingen → Gebruikers**. Als u bent buitengesloten maar shell-toegang hebt:

```bash
docker exec transrewrt reset-web-password '<username>' '<new-password>'
```

De standaard beheerdersgebruikersnaam is `admin`. Vanuit een broncheckout: `pnpm run reset-web-password -- <username> <new-password>`.

## Dashboard toont geen gegevens voor andere gebruikers (web)

Alleen **beheerders** kunnen andere gebruikers bekijken via het filter **Gebruiker**. Reguliere gebruikers zien alleen hun eigen activiteit.

## Een prompt gewijzigd en bewerkingen verloren

Klik bij het bewerken van een Transform-prompt op **Opslaan** voordat u op **Terug naar uitvoeren** klikt.

## Snelle tips

- Begin met [Vertalen](/docs/translate/) om uw instellingen te bevestigen voordat u herschrijft of transformeert
- Gebruik [Herschrijven](/docs/rewrite/) voor alledaagse woordverbeteringen
- Gebruik [Transformeren](/docs/transform/) voor herhaalbare aangepaste workflows
- Blijf in de modus **Eenvoudig** totdat u gedetailleerde model-ID's nodig hebt
- Exporteer regelmatig prompts als u een promptbibliotheek opbouwt
- Gebruik [Dashboard](/docs/dashboard/) en [Geschiedenis](/docs/history/) om het gebruik en eerdere uitvoeringen te bekijken

[Report an issue](https://github.com/wsj-br/transrewrt/issues)
