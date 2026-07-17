---
title: Dashboard verwenden
description: >-
  Nutzung, Kosten und Anrufprotokolle überprüfen – gespeicherte Datensätze
  filtern, exportieren und verwalten.
translation_last_updated: '2026-07-17T21:14:42.662Z'
source_file_mtime: '2026-07-17T11:53:39.333Z'
source_file_hash: 689c93c2517f806f7976d570b4fc86d30ca048ce906d982429b985ad06dd9250
translation_language: de
source_file_path: src/content/docs/docs/dashboard.md
translation_models:
  - google/gemini-2.5-flash
---



Verwenden Sie das **Dashboard**, um zu sehen, wie viel Sie die App nutzen und welche Kosten (für kostenpflichtige Modelle) dabei entstehen.

![Dashboard-Zusammenfassung](/images/screenshots/de/dashboard-summary.png)

:::note
Wenn Sie nur **kostenlose** Modelle verwenden, können die Kostenbeträge null sein. Die KPIs zur Anrufanzahl in der **Zusammenfassung** benötigen dennoch Aktivitäten im ausgewählten Zeitraum.
:::

## Daten filtern

Verwenden Sie die Filter-Schaltflächen oben, um den Zeitraum zu ändern.

:::note
Der Filter **Benutzer** ist nur für Administratoren in der Webversion sichtbar. Er ist auf dem Desktop nicht verfügbar.
:::

## Registerkarten

- **Zusammenfassung** – KPIs: Gesamtkosten, verwendete Modelle, Anrufanzahl und Kosten pro Modus, durchschnittliche Kosten pro Anruf, durchschnittliche TPS, Top-Modelle nach Anrufanzahl
- **Nach Modell** – Anrufe, Kosten und TPS pro Modell; erweitern Sie eine Zeile für eine Modusaufschlüsselung
- **Alle Anrufe** – vollständiges Anrufprotokoll (paginiert oder als Karten) mit Exportfunktion

## Daten exportieren

Exportieren Sie Tabellen als **JSON**, **CSV** oder **XLSX**.

## Gespeicherte Datensätze für ein Modell löschen

Verwenden Sie unter **Nach Modell** oder **Alle Anrufe** das Papierkorb-Symbol, um Datensätze für ein Modell zu entfernen.

:::caution
Das Löschen kann nicht rückgängig gemacht werden. Um nach Alter zu löschen oder alle Kostendaten zu löschen, verwenden Sie [Einstellungen → Kostenverfolgung](/docs/settings/#cost-tracking).
:::

## Nächste Schritte

- [Verlauf durchsuchen](/docs/history/)
- [Einstellungen](/docs/settings/)
- [Häufige Probleme](/docs/common-issues/)
