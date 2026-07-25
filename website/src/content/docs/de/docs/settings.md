---
title: Einstellungen
description: >-
  Kompakte Referenz für Allgemein, Modelle, Sprachen, Glossar, Kosten,
  Transformieren, Benutzer, API und Über.
---



Öffnen Sie die **Einstellungen** über die Seitenleiste, um das Verhalten der App anzupassen.

| Registerkarte | Desktop | Web (Admin) | Web (Benutzer) | Hinweise |
| --- | :---: | :---: | :---: | --- |
| Allgemeine Einstellungen | ja | ja | ja | Beinhaltet **KI-Erfahrung** (Einfach / Erweitert) |
| Modelle | ja | ja | ja | Nur wenn **KI-Erfahrung** **Erweitert** ist |
| Sprachen | ja | ja | ja | |
| Kostenverfolgung | ja | ja | — | |
| Transformieren | ja | ja | ja | Massenimport/-export von Prompts |
| Glossar | ja | ja | ja | Begriffspaare für die Übersetzung |
| Benutzer | — | ja | — | |
| API-Konfiguration | ja | ja | — | |
| Über | ja | ja | ja | |

Im Modus **Einfach** wählen Sie die KI über Voreinstellungen in der Symbolleiste und den **Anbieter** in den Allgemeinen Einstellungen aus; die Registerkarte **Modelle** ist ausgeblendet.

:::note
In der Webversion hat jeder Benutzer seine eigene Konfiguration (KI-Erfahrung, Anbieter, Modelle/Voreinstellungen, Sprachen, Optionen, Prompts). Änderungen wirken sich nicht auf andere Benutzer aus.
:::

## Allgemeine Einstellungen

![Registerkarte „Allgemeine Einstellungen“](/images/screenshots/de/settings-general.png)

**KI-Erfahrung**

- **Einfach** (Standard): Wählen Sie einen **Anbieter**. Cloud-Anbieter verwenden Voreinstellungen in der Symbolleiste. **Lokales LLM** listet stattdessen installierte lokale Modelle auf. **Voreinstellungskatalog aktualisieren** ruft die neueste Voreinstellungsliste aus dem Projekt-Repository ab.
  - **Kostenlos (OpenRouter)** – kostenlose Option, die an verfügbare kostenlose Modelle weitergeleitet wird; Qualität und Verfügbarkeit können variieren
  - **Standard** – leicht und kostengünstig; am besten für kurze Texte, schnelle Entwürfe und den Einsatz in großen Mengen
  - **Erweitert** – hochpräzises Modell für komplexe oder nuancierte Inhalte, zu höheren Kosten
  - **Technisch** – optimiert für Code, APIs, Entwicklerdokumentation und strukturierte Inhalte; bewahrt Formatierung und Terminologie
- **Erweitert**: Wählen Sie Modelle in der Symbolleiste aus; verwalten Sie die Liste unter [Modelle](#models).

Sie können auch zwischen Einfach ↔ Erweitert über das Voreinstellungs-/Modellmenü der Symbolleiste wechseln (**In den einfachen/erweiterten Modus wechseln**, über „Einstellungen öffnen“).

**Erscheinungsbild** – Design; **Kosteninformationen für Aktionen anzeigen**; **Kosten-Nachkommastellen**; Nur-Web-Rand um die App; **Schriftfamilie** und **Schriftgröße**.

**Verhalten** – **Verhalten bei ENTER**; **Automatische Ausführung beim Einfügen**; **Ergebnis automatisch in die Zwischenablage kopieren**; **Echtzeitübersetzung während der Eingabe**; **Zeitüberschreitung (ms)**.

**Verlauf**

- **Ausführungsverlauf beibehalten** – speichert Eingaben/Ausgaben für die Ansicht [Verlauf](/docs/history/). Das Deaktivieren erfordert eine Bestätigung und kann gespeicherten Text entfernen. Wenn als *vom Administrator deaktiviert* gekennzeichnet, ist `HISTORY_DISABLED` eingestellt – siehe [Konfiguration](/docs/configuration/#privacy-mode).
- **Verlaufsdaten löschen** – gespeicherten Text nach Alter entfernen oder alles löschen. Löscht **nicht** die Gesamtkosten (verwenden Sie dafür die Kostenverfolgung).

**Konfigurationssicherung** (Desktop- und Web-Administratoren)

- Optional **Nutzungsdaten in die Sicherung aufnehmen**
- **Konfiguration sichern** – ZIP mit Konfiguration, Status, Benutzern, Einstellungen, Prompts und optionalen Nutzungsdaten
- **Aus Sicherung wiederherstellen** – Bestätigungsdialog mit Optionen zum Wiederherstellen und/oder Löschen von Nutzungsdaten

Sicherungen können zwischen Desktop und Web verschoben werden; das Wiederherstellen einer Desktop-Sicherung im Web wendet Daten auf den Administratorbenutzer an.

## Modelle

Nur im Modus **Erweitert** verfügbar.

- **Verfügbare Modelle** (links) und **Ausgewählte Modelle** (rechts)
- Suche, **Anbieter**-Chips, **Nur kostenlos**, **Aktualisieren**, Alle erweitern/reduzieren
- Modell-IDs verwenden ein Anbieterpräfix (`openrouter/…`, `openai/…`, `local/…`, …)

:::tip
Verwenden Sie OpenRouter **Body Builder** (`openrouter/bodybuilder`) nicht für Übersetzen, Umschreiben oder Transformieren – es gibt JSON-Anforderungs-Payloads zurück, nicht fertigen Text.
:::

Hinzufügen mit **Hinzufügen**; Entfernen mit **X**. Das kostenlose OpenRouter-Modell ist optional – ausgewählte Modelle können leer sein. Das Entfernen des letzten Modells aus der Symbolleiste öffnet **Einstellungen → Modelle**. Wenn das aktuelle Modell nicht verfügbar wird, wählt die App das nächste Modell in der Liste aus, anstatt das kostenlose Modell zu erzwingen.

## Sprachen

- **Top-Sprachen** – oben in den Sprachlisten in Übersetzen und Transformieren angeheftet
- **Benutzerdefinierte Sprache** – fügt eine Sprache hinzu, die in der integrierten Liste fehlt

## Kostenverfolgung

- **Gesamtkosten**, **Wert kopieren**, **Kosten zurücksetzen**
- **Mit API-Schlüsselnutzung synchronisieren** – Abgleich mit der OpenRouter-Kontonutzung (nur OpenRouter)
- **API-Schlüsselnutzung** – OpenRouter-Details, falls verfügbar
- **Kostendaten löschen** – alle Daten oder Einträge, die älter als ein bestimmtes Datum sind

OpenRouter zeigt die tatsächlich abgerechneten Kosten an, sofern zutreffend; andere Anbieter verwenden Schätzungen basierend auf der OpenRouter-Preisgestaltung. Schätzungen sind keine Rechnungen.

:::caution
Das Löschen von Kostendaten kann nicht rückgängig gemacht werden. Exportieren Sie zuerst über Verlauf oder Dashboard → Alle Anrufe, wenn Sie eine Sicherung benötigen. Der zugehörige Eingabe-/Ausgabeverlauf für diese API-Aufrufe wird ebenfalls entfernt.
:::

## Transformieren

Prompts in großen Mengen verwalten: überprüfen, löschen, importieren, exportieren und Beispiel-Prompts laden.

## Glossar

Verwalten Sie Begriffspaare, die während der [Übersetzung](/docs/translate/#use-the-glossary) angewendet werden. Jeder Begriff hat eine Quell-/Zielsprache und einen Quell-/Zieltext.

- Hinzufügen über die untere Zeile und **+**
- Filtern nach Sprachen oder Text
- CSV oder XLSX importieren/exportieren; leere Vorlagen herunterladen

Desktop speichert das Glossar lokal; Web speichert es pro Benutzer.

## Benutzer

Nur Web (Administratoren):

- Benutzer hinzufügen, Details aktualisieren, Passwörter zurücksetzen, Konten löschen
- **Sitzungs-Timeout** – wie lange ein Login dauert (1 Stunde bis 7 Tage); Änderungen gelten nur für neue Logins
- **Sitzungen widerrufen** – einen Benutzer sofort von allen Geräten abmelden

Jeder angemeldete Benutzer (einschließlich Nicht-Administratoren) kann sein eigenes Passwort ändern oder sich über das Benutzermenü am unteren Rand der Seitenleiste abmelden.

## API-Konfiguration

Konfigurieren Sie nur die von Ihnen verwendeten Anbieter: OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras, NVIDIA, Alibaba Cloud, apikey.fun, **Lokales LLM** (Basis-URL für Ollama, LM Studio, llama.cpp oder ähnliches) und einen optionalen benutzerdefinierten OpenAI-kompatiblen Anbieter.

**Web (Admin):** Schlüssel stammen aus Umgebungsvariablen – diese Seite zeigt, welche gesetzt sind, und ermöglicht Ihnen das **Testen**. Starten Sie nach dem Ändern der Umgebungsvariablen neu. Siehe [Konfiguration](/docs/configuration/).

**Desktop:** Geben Sie Schlüssel (oder die lokale LLM-URL) ein und **Speichern** / **Bearbeiten** / **Testen**. Schlüssel werden verschlüsselt gespeichert; Sie können den aktuellen Wert nicht anzeigen, sondern nur ersetzen.

:::tip
Zum Starten ist kein kostenpflichtiger Schlüssel erforderlich: Verwenden Sie kostenlose OpenRouter-Modelle, andere kostenlose Anbieter oder einen lokalen OpenAI-kompatiblen Server wie [Ollama](https://ollama.com), LM Studio oder llama.cpp (z. B. `translategemma:4b`).
:::

## Über

App-Name, Version, Build-Datum, Lizenz, Hinweise von Drittanbietern und Repository-Link.
