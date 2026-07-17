---
title: Använd instrumentpanelen
description: >-
  Granska användning, kostnad och samtalsloggar – filtrera, exportera och
  hantera lagrade poster.
translation_last_updated: '2026-07-17T14:59:02.870Z'
source_file_mtime: '2026-07-17T11:53:39.333Z'
source_file_hash: 689c93c2517f806f7976d570b4fc86d30ca048ce906d982429b985ad06dd9250
translation_language: sv
source_file_path: src/content/docs/docs/dashboard.md
translation_models:
  - google/gemini-2.5-flash
---



Använd **Instrumentpanelen** för att se hur mycket du använder appen och vad den kostar (för betalmodeller).

![Instrumentpanelöversikt](/images/screenshots/sv/dashboard-summary.png)

:::note
Om du bara använder **gratis** modeller kan kostnadsbeloppen vara noll. KPI:er för samtalsantal på **Översikt** kräver fortfarande aktivitet under den valda perioden.
:::

## Filtrera data

Använd filterknapparna högst upp för att ändra tidsintervallet.

:::note
**Användarfiltret** är endast synligt för administratörer i webbversionen. Det är inte tillgängligt på skrivbordet.
:::

## Flikar

- **Översikt** — KPI:er: total kostnad, använda modeller, samtalsantal och kostnad per läge, genomsnittlig kostnad per samtal, genomsnittlig TPS, toppmodeller efter samtalsantal
- **Per modell** — samtalsantal, kostnad och TPS per modell; expandera en rad för en uppdelning per läge
- **Alla samtal** — fullständig samtalslogg (paginerad eller kort) med export

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
