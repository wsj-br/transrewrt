---
title: Använd instrumentpanelen
description: >-
  Granska användning, kostnad och samtalsloggar – filtrera, exportera och
  hantera lagrade poster.
---



Använd **instrumentpanelen** för att se hur mycket du använder appen och vad den kostar (för betalmodeller).

![Instrumentpanelens sammanfattning](/images/screenshots/sv/dashboard-summary.png)

:::note
Kostnadsbelopp kan visas som **0 USD** om du använder kostnadsfria modeller, leverantören inte stöder kostnadsspårning eller om du använder en lokal LLM. KPI:er för antal anrop på **Sammanfattning** återspeglar faktisk användning oavsett – de är bara noll om det inte fanns någon aktivitet under den valda perioden.
:::

## Filtrera data

Använd filterknapparna högst upp för att ändra tidsintervallet.

Filtret **Användare** är endast synligt för administratörer i webbversionen; det är inte tillgängligt på skrivbordet.

## Flikar

- **Sammanfattning** – KPI:er: total kostnad, använda modeller, samtalsantal och kostnad per läge, genomsnittlig kostnad per samtal, genomsnittlig TPS, toppmodeller efter samtalsantal
- **Per modell** – samtal, kostnad och TPS per modell; expandera en rad för en lägesuppdelning
- **Alla samtal** – fullständig samtalslogg (paginerad eller kort) med export

## Exportera data

Exportera tabeller som **JSON**, **CSV** eller **XLSX**.

## Ta bort lagrade poster för en modell

I **Per modell** eller **Alla samtal**, använd papperskorgsikonen för att ta bort poster för en modell.

:::caution
Borttagning kan inte ångras. För att ta bort efter ålder eller rensa all kostnadsdata, använd [Inställningar → Kostnadsspårning](/docs/settings/#cost-tracking).
:::

## Nästa steg

- [Bläddra i historik](/docs/history/)
- [Inställningar](/docs/settings/)
- [Vanliga problem](/docs/common-issues/)
