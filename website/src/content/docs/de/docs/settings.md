---
title: Einstellungen
description: >-
  Kompakte Referenz für Allgemein, Modelle, Sprachen, Glossar, Kosten,
  Transformieren, Benutzer, API und Über.
translation_last_updated: '2026-07-17T21:14:43.172Z'
source_file_mtime: '2026-07-17T14:37:21.849Z'
source_file_hash: 492e5fd37f4a6b282502282d4f2728047a0d09ae8c30334b3c8388a5ce6e9f68
translation_language: de
source_file_path: src/content/docs/docs/settings.md
translation_models:
  - google/gemini-2.5-flash
---



Öffnen Sie die **Einstellungen** in der Seitenleiste, um das Verhalten der App anzupassen.

| Registerkarte | Desktop | Web (Admin) | Web (Benutzer) | Hinweise |
| --- | :---: | :---: | :---: | --- |
| Allgemeine Einstellungen | ja | ja | ja | Beinhaltet **KI-Erfahrung** (Einfach / Erweitert) |
| Modelle | ja | ja | ja | Nur wenn **KI-Erfahrung** auf **Erweitert** eingestellt ist |
| Sprachen | ja | ja | ja | |
| Kostenverfolgung | ja | ja | — | |
| Transformieren | ja | ja | ja | Massenimport/-export von Prompts |
| Glossar | ja | ja | ja | Begriffspaare für die Übersetzung |
| Benutzer | — | ja | — | |
| API-Konfiguration | ja | ja | — | |
| Über | ja | ja | ja | |

Im Modus **Einfach** wählen Sie die KI über Voreinstellungen in der Symbolleiste und den **Anbieter** in den Allgemeinen Einstellungen; die Registerkarte **Modelle** ist ausgeblendet.

:::note
In der Webversion hat jeder Benutzer seine eigene Konfiguration (KI-Erfahrung, Anbieter, Modelle/Voreinstellungen, Sprachen, Optionen, Prompts). Änderungen wirken sich nicht auf andere Benutzer aus.
:::

## Allgemeine Einstellungen

**KI-Erfahrung**

- **Einfach** (Standard): Wählen Sie einen **Anbieter**. Cloud-Anbieter verwenden Voreinstellungen in der Symbolleiste (**Kostenlos (OpenRouter)**, **Standard**, **Erweitert**, **Technisch**). **Lokales LLM** listet stattdessen installierte lokale Modelle auf. **Voreinstellungskatalog aktualisieren** ruft die neueste Voreinstellungsliste aus dem Projekt-Repository ab.
- **Erweitert**: Wählen Sie Modelle in der Symbolleiste aus; verwalten Sie die Liste unter [Modelle](#models).

**Erscheinungsbild** — Thema; **Kosteninformationen bei Aktionen anzeigen**; **Nachkommastellen für Kosten**; nur im Web sichtbarer Rand um die App; **Schriftfamilie** und **Größe**.

**Verhalten** — **Verhalten bei ENTER**; **Automatische Ausführung beim Einfügen**; **Ergebnis automatisch in die Zwischenablage kopieren**; **Echtzeitübersetzung während der Eingabe**; **Timeout (ms)**.

**Verlauf**

- **Ausführungsverlauf beibehalten** – speichert Eingaben/Ausgaben für die [Verlaufsansicht](/docs/history/). Das Deaktivieren erfordert eine Bestätigung und kann gespeicherten Text entfernen. Wenn als *vom Administrator deaktiviert* gekennzeichnet, ist `HISTORY_DISABLED` festgelegt – siehe [Konfiguration](/docs/configuration/#privacy-mode).
- **Verlaufsdaten löschen** – gespeicherten Text nach Alter entfernen oder alles löschen. Löscht **nicht** die Gesamtkosten (verwenden Sie dafür die Kostenverfolgung).

**Konfigurationssicherung** (Desktop- und Web-Administratoren)

- Optional **Nutzungsdaten in die Sicherung einschließen**
- **Konfiguration sichern** – ZIP mit Konfiguration, Status, Benutzern, Einstellungen, Prompts und optionalen Nutzungsdaten
- **Aus Sicherung wiederherstellen** – Bestätigungsdialog mit Optionen zum Wiederherstellen und/oder Löschen von Nutzungsdaten

Sicherungen können zwischen Desktop und Web verschoben werden; das Wiederherstellen einer Desktop-Sicherung im Web wendet Daten auf den Administratorbenutzer an.

## Modelle

Nur im Modus **Erweitert** verfügbar.

![Registerkarte „Einstellungen Modelle“](/images/screenshots/de/settings-general.png)

- **Verfügbare Modelle** (links) und **Ausgewählte Modelle** (rechts)
- Suche, **Anbieter**-Chips, **Nur Kostenlos**, **Aktualisieren**, Alle erweitern/reduzieren
- Modell-IDs verwenden ein Anbieterpräfix (`openrouter/…`, `openai/…`, `local/…`, …)

:::caution
Verwenden Sie den OpenRouter **Body Builder** (`openrouter/bodybuilder`) nicht für Übersetzen, Umschreiben oder Transformieren – er gibt JSON-Anforderungs-Payloads zurück, keinen fertigen Text.
:::

Mit **Hinzufügen** hinzufügen; mit **X** entfernen. **Alle abwählen** behält das erforderliche kostenlose Modell bei.

## Sprachen

- **Top-Sprachen** – oben in den Sprachlisten unter Übersetzen und Transformieren angeheftet
- **Benutzerdefinierte Sprache** – fügt eine Sprache hinzu, die in der integrierten Liste fehlt

## Kostenverfolgung

- **Gesamtkosten**, **Wert kopieren**, **Kosten zurücksetzen**
- **Mit API-Schlüsselnutzung synchronisieren** – Abgleich mit der OpenRouter-Kontonutzung (nur OpenRouter)
- **API-Schlüsselnutzung** – OpenRouter-Details, wenn verfügbar
- **Kostendaten löschen** – alle Daten oder Einträge, die älter als ein bestimmtes Datum sind

OpenRouter zeigt die tatsächlich abgerechneten Kosten an, sofern zutreffend; andere Anbieter verwenden Schätzungen aus der OpenRouter-Preisgestaltung. Schätzungen sind keine Rechnungen.

:::caution
Das Löschen von Kostendaten kann nicht rückgängig gemacht werden. Exportieren Sie zuerst über Verlauf oder Dashboard → Alle Anrufe, wenn Sie eine Sicherung benötigen. Der zugehörige Eingabe-/Ausgabeverlauf für diese API-Aufrufe wird ebenfalls entfernt.
:::

## Transformieren

Prompts in großen Mengen verwalten: Prompts überprüfen, löschen, importieren, exportieren und Beispiel-Prompts laden.

## Glossar

Verwalten Sie Begriffspaare, die während der [Übersetzung](/docs/translate/#use-the-glossary) angewendet werden. Jeder Begriff hat eine Quell-/Zielsprache und einen Quell-/Zieltext.

- Hinzufügen über die untere Zeile und **+**
- Filtern nach Sprachen oder Text
- CSV oder XLSX importieren/exportieren; leere Vorlagen herunterladen

Desktop speichert das Glossar lokal; Web speichert es pro Benutzer.

## Benutzer

Nur Web (Admins): Benutzer hinzufügen, Details aktualisieren, Passwörter zurücksetzen, Konten löschen.

## API-Konfiguration

Konfigurieren Sie nur die Anbieter, die Sie verwenden: OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras, NVIDIA, Alibaba Cloud, apikey.fun, **Lokales LLM** (Basis-URL für Ollama, LM Studio, llama.cpp oder ähnliches) und einen optionalen benutzerdefinierten OpenAI-kompatiblen Anbieter.

**Web (Admin):** Schlüssel stammen aus Umgebungsvariablen – diese Seite zeigt, welche gesetzt sind, und ermöglicht Ihnen das **Testen**. Nach dem Ändern von Umgebungsvariablen neu starten. Siehe [Konfiguration](/docs/configuration/).

**Desktop:** Geben Sie Schlüssel (oder die URL des lokalen LLM) ein und **Speichern** / **Bearbeiten** / **Testen**. Schlüssel werden verschlüsselt gespeichert; Sie können den aktuellen Wert nicht anzeigen, sondern nur ersetzen.

:::tip
Es ist kein kostenpflichtiger Schlüssel erforderlich, um zu beginnen: Verwenden Sie kostenlose OpenRouter-Modelle, andere kostenlose Anbieter oder einen lokalen OpenAI-kompatiblen Server wie [Ollama](https://ollama.com), LM Studio oder llama.cpp (z. B. `translategemma:4b`).
:::

## Über

App-Name, Version, Build-Datum, Lizenz, Hinweise von Drittanbietern und Repository-Link.
