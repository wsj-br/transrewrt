---
title: Bläddra i historik
description: >-
  Granska tidigare översättnings-, omskrivnings- och transformeringskörningar
  med fullständig indata- och utdatatext.
translation_last_updated: '2026-07-17T21:14:49.434Z'
source_file_mtime: '2026-07-17T11:53:39.333Z'
source_file_hash: 79c4a60a79491755299b9de8c5e8f0945ccc6d0b32743e1682fede521dade7fa
translation_language: sv
source_file_path: src/content/docs/docs/history.md
translation_models:
  - google/gemini-2.5-flash
---



Öppna **Historik** för att se tidigare åtgärder, inklusive indata och utdata för varje körning.

![Historiksida](/images/screenshots/sv/history.png)

Historik använder samma tidsintervallsfilter som [instrumentpanelen](/docs/dashboard/).

:::note
I **webbappen** ser alla (inklusive administratörer) endast sin egen körningshistorik. Instrumentpanelens **Användar**-filter gäller inte här.
:::

## Exportera

Exportera den filtrerade listan som **JSON**, **CSV** eller **XLSX**.

## Om historiken saknas

**Behåll körningshistorik** kan vara avstängd. Aktivera den i [Inställningar → Allmänna inställningar](/docs/settings/#general-settings) om inte administratören har ställt in `HISTORY_DISABLED` – se [Konfiguration](/docs/configuration/#privacy-mode).

## Nästa steg

- [Använd instrumentpanelen](/docs/dashboard/)
- [Inställningar](/docs/settings/)
- [Vanliga problem](/docs/common-issues/)
