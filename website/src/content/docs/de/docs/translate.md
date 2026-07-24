---
title: Text übersetzen
description: >-
  Übersetzen Sie Text zwischen Sprachen, verwenden Sie das Glossar und
  verfeinern Sie die Ergebnisse mit „Neu formulieren“.
---



Verwenden Sie **Übersetzen**, um Text von einer Sprache in eine andere zu konvertieren.

![Übersetzungsarbeitsbereich](/images/screenshots/de/translate.png)

## Voraussetzungen

- Mindestens ein Anbieter-Schlüssel (Desktop) oder Server-Umgebungsschlüssel (Web) – siehe [API-Schlüssel](/docs/api-key/)
- Ein in der Symbolleiste ausgewähltes **Preset** (Einfach) oder **Modell** (Erweitert)

## Text übersetzen

1. Öffnen Sie **Übersetzen** in der Seitenleiste.
2. Wählen Sie eine Sprache unter **Von** (oder **Sprache erkennen**).
3. Wählen Sie eine Sprache unter **Nach**.
4. Wählen Sie ein Preset oder Modell in der Symbolleiste.
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

## Layout und Tastatur

- **Layout-Umschalter** – die Schaltflächen über den Panels wechseln zwischen **nebeneinanderliegenden** und **gestapelten** Eingabe-/Ausgabe-Layouts. Die Auswahl gilt für Übersetzen, Umschreiben und Transformieren und wird auf diesem Gerät gespeichert.
- **Enter** oder **Shift+Enter** führt die Aufgabe aus, abhängig vom **Verhalten für ENTER** (siehe oben).
- **Escape** löscht das Eingabefeld (oder schließt zuerst ein offenes Menü oder Dialogfeld).

## Eine Übersetzung verfeinern

Nach einer erfolgreichen Ausführung erscheinen **Neu formulieren…** und ein Versions-Dropdown neben dem **An:**-Selektor:

1. **Neu formulieren…** (keine Auswahl) – eine weitere vollständige Übersetzung derselben Eingabe. Bis zu **fünf** Versionen; das Modell berücksichtigt frühere Versionen, sodass die Formulierung abweichen kann. Klicken Sie auf **Übersetzung stoppen**, um eine laufende Neuformulierung abzubrechen.
2. **Wortalternativen** – wählen Sie Wörter oder eine kurze Phrase aus, klicken Sie dann mit der rechten Maustaste oder auf **Neu formulieren…**. Wählen Sie eine Alternative, um den Bereich zu ersetzen (kann sich für die Grammatik leicht erweitern). Bei fünf Versionen wird nur Version 5 aktualisiert.
3. Jede Neuformulierung oder Alternativen-Anfrage verwendet das Modell erneut und kann zusätzliche Kosten verursachen.

## Das Glossar verwenden

Ein **Glossar** enthält Quell-/Zielbegriffspaare für ein Sprachpaar. Wenn es aktiviert ist, werden übereinstimmende Begriffe an das Modell gesendet, damit die bevorzugte Formulierung konsistent bleibt.

1. Aktivieren Sie **Glossar** im Eingabefeld.
2. Übersetzen Sie wie gewohnt – die Begriffe für dieses **Von** / **Nach**-Paar werden automatisch angewendet.
3. Klicken Sie auf **Zum Glossar hinzufügen** (neben **Von:**), um schnell ein neues Paar zu erfassen.
4. Verwalten Sie alle Begriffe unter [Einstellungen → Glossar](/docs/settings/#glossary).

:::note
Glossarbegriffe werden nach Sprachpaar abgeglichen. Sie können nicht mit **Sprache erkennen** als Quelle verwendet werden.
:::

## Nächste Schritte

- [Text umschreiben](/docs/rewrite/)
- [Mit Prompts transformieren](/docs/transform/)
- [Häufige Probleme](/docs/common-issues/)
