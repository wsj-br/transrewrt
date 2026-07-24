---
title: Häufige Probleme
description: Fehlerbehebung und schnelle Tipps für Transrewrt.
---



Wenn etwas nicht wie erwartet funktioniert, überprüfen Sie zuerst diese Punkte.

## Die App übersetzt, schreibt um oder transformiert nicht

Überprüfen Sie, ob:

- Sie ein **Preset** (Einfach) oder ein **Modell** (Erweitert) in der Symbolleiste ausgewählt haben
- im Modus **Einfach** unter **Einstellungen → Allgemeine Einstellungen** ein **Anbieter** mit einem funktionierenden Schlüssel (oder einer lokalen LLM-URL) vorhanden ist
- im Modus **Erweitert** ein Modell in der Symbolleiste ausgewählt ist (eine leere Liste ist zulässig, aber Sie benötigen mindestens ein Modell unter **Einstellungen → Modelle**, um die Anwendung auszuführen)
- Ihre API-Einrichtung funktioniert (Desktop: **Einstellungen → API-Konfiguration → Testen**)

## Die Modellliste ist leer

Vergewissern Sie sich im Modus **Einfach**, dass der **Anbieter** eingestellt und die Schlüssel/URLs getestet wurden. Stellen Sie für **Lokale LLM** sicher, dass Ihr lokaler Server läuft und Modelle geladen sind.

Im Modus **Erweitert** können die ausgewählten Modelle leer sein. Öffnen Sie **Einstellungen → Modelle**, klicken Sie auf **Aktualisieren** und fügen Sie Modelle zu **Ausgewählte Modelle** hinzu. Aktivieren Sie optional **Nur kostenlos**. Das Entfernen des letzten Symbolleistenmodells öffnet ebenfalls Einstellungen → Modelle.

## Zu langsam oder zu teuer

- Wählen Sie ein anderes Preset oder Modell
- Verwenden Sie kürzere Eingaben
- Deaktivieren Sie **Echtzeitübersetzung während der Eingabe** in den Allgemeinen Einstellungen
- Verwenden Sie kostenlose Modelle für einfache Aufgaben

## Falsche Benutzeroberflächensprache

Klicken Sie auf das Globus-Symbol in der Symbolleiste und wählen Sie Ihre **Oberflächensprache**.

## Text zu klein oder schwer lesbar

**Einstellungen → Allgemeine Einstellungen** → **Schriftfamilie** und **Größe** ändern.

## Dashboard-Zusammenfassung sieht leer aus

Dies ist normal, wenn:

- Sie nur **kostenlose Modelle** verwenden und sich die **Kosten** ansehen (diese können null sein); die KPIs der Anrufanzahl benötigen noch Daten für den ausgewählten Zeitraum
- der ausgewählte **Zeitfilter** nicht den Zeitraum abdeckt, in dem Anrufe getätigt wurden – versuchen Sie **Alle**

Wenn die KPIs nach **Alle** immer noch null sind, überprüfen Sie [Verlauf](/docs/history/) oder Dashboard → **Alle Anrufe**.

## Kosten werden als „nicht verfügbar“ angezeigt oder scheinen falsch zu sein

OpenRouter zeigt den tatsächlichen Verbrauch an, sofern zutreffend. Für andere Anbieter werden die Kosten anhand der OpenRouter-Preise geschätzt; wenn kein Preis übereinstimmt, werden die Kosten als **nicht verfügbar** angezeigt und nicht zur Gesamtsumme addiert.

## Gesamtkosten stimmen nicht mit meiner Anbieterrechnung überein

Die Angaben in der App sind **Schätzungen als Referenz**, keine Rechnungen. Für OpenRouter verwenden Sie **Einstellungen → Kostenverfolgung → Mit API-Schlüsselnutzung synchronisieren**.

## Verlaufsseite fehlt in der Seitenleiste

**Ausführungsverlauf beibehalten** ist möglicherweise deaktiviert. Aktivieren Sie es in den Allgemeinen Einstellungen, es sei denn, der Verlauf wurde vom Administrator deaktiviert (`HISTORY_DISABLED` – siehe [Konfiguration](/docs/configuration/#privacy-mode)).

## Web: unerwartet zur Anmeldung umgeleitet

Ihre Sitzung ist möglicherweise abgelaufen. Melden Sie sich erneut an. Wenn dies häufig vorkommt, bitten Sie einen Administrator, das **Sitzungs-Timeout** unter [Einstellungen → Benutzer](/docs/settings/#users) zu erhöhen (ein Administrator kann auch Ihre Sitzungen widerrufen haben).

## Web-Admin: Passwort vergessen

Wenn ein anderer Administrator sich anmelden kann, kann er das Passwort unter **Einstellungen → Benutzer** zurücksetzen. Wenn Sie ausgesperrt sind, aber Shell-Zugriff haben:

```bash
docker exec transrewrt reset-web-password '<username>' '<new-password>'
```

Der Standard-Admin-Benutzername ist `admin`. Von einem Quell-Checkout: `pnpm run reset-web-password -- <username> <new-password>`.

## Dashboard zeigt keine Daten für andere Benutzer (Web)

Nur **Administratoren** können andere Benutzer über den Filter **Benutzer** anzeigen. Reguläre Benutzer sehen nur ihre eigene Aktivität.

## Eine Eingabeaufforderung geändert und Bearbeitungen verloren

Klicken Sie beim Bearbeiten einer Transform-Eingabeaufforderung auf **Speichern**, bevor Sie auf **Zurück zum Ausführen** klicken.

## Kurze Tipps

- Beginnen Sie mit [Übersetzen](/docs/translate/), um Ihre Einrichtung zu bestätigen, bevor Sie Umschreiben oder Transformieren verwenden
- Verwenden Sie [Umschreiben](/docs/rewrite/) für alltägliche Formulierungsverbesserungen
- Verwenden Sie [Transformieren](/docs/transform/) für wiederholbare benutzerdefinierte Workflows
- Bleiben Sie im Modus **Einfach**, bis Sie detaillierte Modell-IDs benötigen
- Exportieren Sie regelmäßig Eingabeaufforderungen, wenn Sie eine Eingabeaufforderungsbibliothek aufbauen
- Verwenden Sie [Dashboard](/docs/dashboard/) und [Verlauf](/docs/history/), um die Nutzung und vergangene Ausführungen zu überprüfen

[Report an issue](https://github.com/wsj-br/transrewrt/issues)
