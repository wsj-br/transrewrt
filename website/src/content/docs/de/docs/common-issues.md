---
title: Häufige Probleme
description: Fehlerbehebung und schnelle Tipps für Transrewrt.
translation_last_updated: '2026-07-17T21:14:42.435Z'
source_file_mtime: '2026-07-17T14:37:17.841Z'
source_file_hash: d60d2f0d1e9289639fd72ad478b6756e4638dce77acf7d2d1795a37653a97f17
translation_language: de
source_file_path: src/content/docs/docs/common-issues.md
translation_models:
  - google/gemini-2.5-flash
---



Wenn etwas nicht wie erwartet funktioniert, überprüfen Sie zuerst diese Punkte.

## Die App übersetzt, schreibt nicht um oder transformiert nicht

Überprüfen Sie, ob:

- Sie haben ein **Preset** (Einfach) oder ein **Modell** (Erweitert) in der Symbolleiste ausgewählt
- im Modus **Einfach** ist unter **Einstellungen → Allgemeine Einstellungen** ein **Anbieter** mit einem funktionierenden Schlüssel (oder einer lokalen LLM-URL) eingerichtet
- im Modus **Erweitert** ist mindestens ein Modell unter **Einstellungen → Modelle** aufgeführt
- Ihr API-Setup funktioniert (Desktop: **Einstellungen → API-Konfiguration → Testen**)

## Die Modellliste ist leer

Vergewissern Sie sich im Modus **Einfach**, dass der **Anbieter** eingerichtet und die Schlüssel/URLs getestet wurden. Stellen Sie für **Lokales LLM** sicher, dass Ihr lokaler Server läuft und Modelle geladen sind.

Öffnen Sie im Modus **Erweitert** die **Einstellungen → Modelle**, klicken Sie auf **Aktualisieren** und fügen Sie Modelle zu den **Ausgewählten Modellen** hinzu. Aktivieren Sie optional **Nur kostenlos**.

## Zu langsam oder zu teuer

- Wählen Sie eine andere Voreinstellung oder ein anderes Modell
- Verwenden Sie eine kürzere Eingabe
- Deaktivieren Sie **Echtzeitübersetzung während der Eingabe** in den Allgemeinen Einstellungen
- Verwenden Sie kostenlose Modelle für einfache Aufgaben

## Falsche Benutzeroberflächensprache

Klicken Sie auf das Globus-Symbol in der Symbolleiste und wählen Sie Ihre **Benutzeroberflächensprache**.

## Text zu klein oder schwer lesbar

**Einstellungen → Allgemeine Einstellungen** → **Schriftfamilie** und **Größe** ändern.

## Dashboard-Übersicht sieht leer aus

Dies ist normal, wenn:

- Sie nur **kostenlose Modelle** verwenden und sich die **Kosten** ansehen (diese können null sein); KPIs für die Anrufanzahl benötigen weiterhin Daten für den ausgewählten Zeitraum
- der ausgewählte **Zeitfilter** den Zeitraum, in dem Anrufe getätigt wurden, nicht abdeckt – versuchen Sie **Alle**

Wenn die KPIs nach **Alle** immer noch null sind, überprüfen Sie [Verlauf](/docs/history/) oder Dashboard → **Alle Anrufe**.

## Kosten werden als „nicht verfügbar“ angezeigt oder scheinen falsch zu sein

OpenRouter zeigt die tatsächlichen Ausgaben an, sofern zutreffend. Für andere Anbieter werden die Kosten anhand der OpenRouter-Preise geschätzt; wenn kein Preis übereinstimmt, werden die Kosten als **nicht verfügbar** angezeigt und nicht zur Gesamtsumme hinzugefügt.

## Gesamtkosten stimmen nicht mit meiner Anbieterrechnung überein

Die Zahlen in der App sind **Schätzungen als Referenz**, keine Rechnungen. Für OpenRouter verwenden Sie **Einstellungen → Kostenverfolgung → Mit API-Schlüsselnutzung synchronisieren**.

## Verlaufsseite fehlt in der Seitenleiste

**Ausführungsverlauf beibehalten** ist möglicherweise deaktiviert. Aktivieren Sie es in den Allgemeinen Einstellungen, es sei denn, der Verlauf wurde vom Administrator deaktiviert (`HISTORY_DISABLED` – siehe [Konfiguration](/docs/configuration/#privacy-mode)).

## Web: unerwartet zur Anmeldung umgeleitet

Ihre Sitzung ist möglicherweise abgelaufen. Melden Sie sich erneut an. Wenn dies häufig vorkommt, überprüfen Sie die Einstellungen zur Lebensdauer der Serversitzung.

## Web-Admin: Passwort vergessen

Wenn sich ein anderer Administrator anmelden kann, kann er das Passwort unter **Einstellungen → Benutzer** zurücksetzen. Wenn Sie ausgesperrt sind, aber Shell-Zugriff haben:

```bash
docker exec transrewrt reset-web-password '<username>' '<new-password>'
```

Der Standard-Admin-Benutzername ist `admin`. Aus einem Quell-Checkout: `pnpm run reset-web-password -- <username> <new-password>`.

## Dashboard zeigt keine Daten für andere Benutzer an (Web)

Nur **Administratoren** können andere Benutzer über den Filter **Benutzer** anzeigen. Reguläre Benutzer sehen nur ihre eigene Aktivität.

## Eine Eingabeaufforderung geändert und Bearbeitungen verloren

Klicken Sie beim Bearbeiten einer Transform-Eingabeaufforderung auf **Speichern**, bevor Sie auf **Zurück zu Ausführen** klicken.

## Kurze Tipps

- Beginnen Sie mit [Übersetzen](/docs/translate/), um Ihre Einrichtung vor dem Umschreiben oder Transformieren zu bestätigen
- Verwenden Sie [Umschreiben](/docs/rewrite/) für alltägliche Formulierungsverbesserungen
- Verwenden Sie [Transformieren](/docs/transform/) für wiederholbare benutzerdefinierte Workflows
- Bleiben Sie im Modus **Einfach**, bis Sie detaillierte Modell-IDs benötigen
- Exportieren Sie regelmäßig Prompts, wenn Sie eine Prompt-Bibliothek aufbauen
- Verwenden Sie [Dashboard](/docs/dashboard/) und [Verlauf](/docs/history/), um die Nutzung und vergangene Ausführungen zu überprüfen

[Report an issue](https://github.com/wsj-br/transrewrt/issues)
