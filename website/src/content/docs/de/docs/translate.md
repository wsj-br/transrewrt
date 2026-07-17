---
title: Text übersetzen
description: >-
  Übersetzen Sie Text zwischen Sprachen, verwenden Sie das Glossar und
  verfeinern Sie die Ergebnisse mit „Neu formulieren“.
translation_last_updated: '2026-07-17T14:58:54.466Z'
source_file_mtime: '2026-07-17T11:53:39.333Z'
source_file_hash: ace9ad02a7dc82bf08090597c56e7cc82324e6250beab93fc2dbeaeed8b91675
translation_language: de
source_file_path: src/content/docs/docs/translate.md
translation_models:
  - google/gemini-2.5-flash
---



Verwenden Sie **Übersetzen**, um Text von einer Sprache in eine andere zu konvertieren.

![Arbeitsbereich übersetzen](/images/screenshots/de/translate.png)

## Voraussetzungen

- Mindestens ein Anbieter-Schlüssel (Desktop) oder Server-Umgebungsschlüssel (Web) – siehe [API-Schlüssel](/docs/api-key/)
- Eine in der Symbolleiste ausgewählte **Voreinstellung** (Einfach) oder ein **Modell** (Erweitert)

## Text übersetzen

1. Öffnen Sie **Übersetzen** in der Seitenleiste.
2. Wählen Sie eine Sprache unter **Von** (oder **Sprache erkennen**).
3. Wählen Sie eine Sprache unter **Nach**.
4. Wählen Sie eine Voreinstellung oder ein Modell in der Symbolleiste.
5. Geben Sie Text in das Feld **Eingabe** ein oder fügen Sie ihn dort ein.
6. Klicken Sie auf **Übersetzen**.
7. Lesen Sie das Ergebnis in **Ausgabe** und kopieren Sie es bei Bedarf.

**Top-Sprachen** erscheinen zuerst in den Listen – legen Sie diese unter [Einstellungen → Sprachen](/docs/settings/#languages) fest.

## Hilfreiche Einstellungen

Unter [Einstellungen → Allgemeine Einstellungen](/docs/settings/#general-settings):

- **Automatische Ausführung beim Einfügen** – wird sofort nach dem Einfügen ausgeführt
- **Ergebnis automatisch in die Zwischenablage kopieren** – kopiert nach erfolgreicher Ausführung
- **Echtzeit-Übersetzung während der Eingabe** – wird während der Eingabe ausgeführt (kann Kosten erhöhen)
- **Timeout (ms)** – Wartezeit vor einer Echtzeit-Ausführung
- **Verhalten für ENTER** – ob Enter die Aufgabe ausführt oder eine neue Zeile einfügt

## Eine Übersetzung verfeinern

Nach einer erfolgreichen Ausführung erscheinen **Neu formulieren…** und ein Versions-Dropdown neben der Auswahl **Nach:**:

1. **Neu formulieren…** (keine Auswahl) – eine weitere vollständige Übersetzung derselben Eingabe. Bis zu **fünf** Versionen; das Modell berücksichtigt frühere Versionen, sodass die Formulierung abweichen kann. Klicken Sie auf **Übersetzung stoppen**, um eine laufende Neuformulierung abzubrechen.
2. **Wortalternativen** – wählen Sie Wörter oder eine kurze Phrase aus, klicken Sie dann mit der rechten Maustaste oder auf **Neu formulieren…**. Wählen Sie eine Alternative, um den Bereich zu ersetzen (kann sich für die Grammatik leicht erweitern). Bei fünf Versionen wird nur Version 5 aktualisiert.
3. Jede Neuformulierung oder Anfrage nach Alternativen verwendet das Modell erneut und kann Kosten verursachen.

## Das Glossar verwenden

Ein **Glossar** enthält Quell-/Zielbegriffspaare für ein Sprachpaar. Wenn es aktiviert ist, werden übereinstimmende Begriffe an das Modell gesendet, sodass die bevorzugte Formulierung konsistent bleibt.

1. Schalten Sie **Glossar** im Eingabefeld ein.
2. Übersetzen Sie wie gewohnt – Begriffe für das entsprechende **Von** / **Nach**-Paar werden automatisch angewendet.
3. Klicken Sie auf **Zum Glossar hinzufügen** (neben **Von:**), um schnell ein neues Paar zu erfassen.
4. Verwalten Sie alle Begriffe unter [Einstellungen → Glossar](/docs/settings/#glossary).

:::note
Glossarbegriffe werden nach Sprachpaar abgeglichen. Sie können nicht mit **Sprache erkennen** als Quelle verwendet werden.
:::

## Nächste Schritte

- [Text umschreiben](/docs/rewrite/)
- [Mit Prompts transformieren](/docs/transform/)
- [Häufige Probleme](/docs/common-issues/)
