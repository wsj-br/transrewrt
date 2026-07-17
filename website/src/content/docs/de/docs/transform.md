---
title: Transformieren mit Prompts
description: >-
  Führen Sie benutzerdefinierte KI-Anweisungen aus – erstellen, bearbeiten,
  testen und verwalten Sie Transform-Prompts.
translation_last_updated: '2026-07-17T21:14:43.274Z'
source_file_mtime: '2026-07-17T11:53:39.333Z'
source_file_hash: 07b5d140803063510c7c9fecf67a2f99e3aab3040116733a3126939b0c82e16e
translation_language: de
source_file_path: src/content/docs/docs/transform.md
translation_models:
  - google/gemini-2.5-flash
---



Verwenden Sie **Transformieren**, wenn die KI benutzerdefinierten Anweisungen folgen soll – fassen Sie zusammen, verfeinern Sie eine E-Mail, extrahieren Sie wichtige Punkte, formatieren Sie Text neu oder führen Sie einen beliebigen von Ihnen definierten Workflow aus.

![Transform-Arbeitsbereich](/images/screenshots/de/transform.png)

## Vorhandenen Prompt ausführen

1. Öffnen Sie **Transformieren**.
2. Wählen Sie einen Prompt aus der Liste aus.
3. Wenn ein Sprachfeld **Von** angezeigt wird, legen Sie eine Sprache fest, falls gewünscht.
4. Geben Sie Text in **Eingabe** ein oder fügen Sie ihn dort ein.
5. Klicken Sie auf **Transformieren**.
6. Lesen Sie das Ergebnis in **Ausgabe**.

## Beispiel-Prompts laden

Wenn die Liste leer ist, klicken Sie im Transform-Arbeitsbereich auf **Beispiel-Prompts laden** (auch verfügbar unter [Einstellungen → Transformieren](/docs/settings/#transform)). Die Beispiele sind auf Englisch; bearbeiten Sie nach dem Laden einen Prompt und verwenden Sie bei Bedarf **Prompt übersetzen**.

## Prompt erstellen

1. Klicken Sie auf **Neuer Prompt**.
2. Klicken Sie auf **Prompt generieren**.
3. Beschreiben Sie, was der Prompt tun soll.
4. Wählen Sie eine Voreinstellung (Einfach) oder ein Modell (Erweitert).
5. Überprüfen Sie den Entwurf und klicken Sie auf **Speichern**.

## Prompt bearbeiten

Der Editor befindet sich links; ein Testbereich befindet sich rechts.

![Transform-Prompt-Editor](/images/screenshots/de/transform-prompt-edit.png)

Hauptfelder:

- **Prompt-Name** – wird in der Prompt-Liste angezeigt
- **Prompt-Anweisungen (optional)** – kurzer Hinweis beim Ausführen des Prompts
- **Modellrolle** – allgemeine Rolle für die KI
- **Modellanweisungen (eine pro Zeile)** – zu befolgende Regeln
- **Ausgabebeschreibung** – kurze Bezeichnung für das Ergebnis (z. B. zusammengefasst)
- **Temperatur (0,0 → 1,0)** – niedriger ist stabiler; höher ist variabler
- **Zielsprache abfragen** – fügt bei der Ausführung einen Sprachwähler hinzu

Helfer: **Prompt generieren**, **Prompt verbessern**, **Prompt übersetzen** (Einfach verwendet Voreinstellungen; Erweitert verwendet die Modellliste).

:::caution
Klicken Sie auf **Speichern**, bevor Sie zu **Zurück zu Ausführen** gehen. Wenn Sie ohne Speichern zurückgehen, werden die Änderungen verworfen.
:::

## Vor dem täglichen Gebrauch testen

Verwenden Sie das rechte Testfeld mit Beispieltext, wenn Sie Prompts erstellen oder vergleichen.

Prompts können unter [Einstellungen → Transformieren](/docs/settings/#transform) gesammelt exportiert und importiert werden.

## Nächste Schritte

- [Einstellungen](/docs/settings/)
- [Verlauf durchsuchen](/docs/history/)
- [Häufige Probleme](/docs/common-issues/)
