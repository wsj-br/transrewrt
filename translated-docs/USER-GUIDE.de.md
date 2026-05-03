---
translation_last_updated: '2026-05-02T22:37:10.075Z'
source_file_mtime: '2026-05-02T22:14:02.511Z'
source_file_hash: 524b4199c6c41f6d98b1e30eee56343fe40727471d8cdceb0e7fcc9dfb275e9a
translation_language: de
source_file_path: USER-GUIDE.md
translation_models:
  - openai/gpt-5.3-codex
  - qwen/qwen3-235b-a22b-2507
---
![Transrewrt banner](../images/transrewrt_banner.png)

<a id="transrewrt-user-guide"></a>
# Benutzerhandbuch

<br/>

<a id="introduction"></a>
## Einführung

Transrewrt unterstützt Sie bei der Textbearbeitung auf drei Hauptweisen:

- Übersetzen** - Text von einer Sprache in eine andere umwandeln.
- **Umschreiben** - Text in einem anderen Stil neu formulieren, z. B. klarer, kürzer oder formeller.
- **Umwandeln** - Text mithilfe benutzerdefinierter KI-Anweisungen verarbeiten, die Prompts genannt werden.

<br/>

Diese Anleitung erklärt die Verwendung der App, sobald sie installiert und ausgeführt wird. Informationen zu den Installationsschritten finden Sie in der Hauptdatei [**README**](README.de.md).

<br/>

> ℹ️ **HINWEIS**<br/>
> Transrewrt ist als Desktop-App für Windows und Linux sowie als selbstgehostete Web-App verfügbar. Diese Anleitung konzentriert sich auf die alltägliche Nutzung der App. Wo etwas nur für eine Version gilt, ist dies klar gekennzeichnet.

<small>**In anderen Sprachen lesen:** </small>
<small id="lang-list">[English (GB)](../USER-GUIDE.md) · [Português (Brasil)](./USER-GUIDE.pt-BR.md) · [العربية](./USER-GUIDE.ar.md) · [বাংলা](./USER-GUIDE.bn.md) · [Català](./USER-GUIDE.ca.md) · [中文 (中国大陆)](./USER-GUIDE.zh-CN.md) · [中文 (台灣)](./USER-GUIDE.zh-TW.md) · [Hrvatski](./USER-GUIDE.hr.md) · [Čeština](./USER-GUIDE.cs.md) · [Nederlands](./USER-GUIDE.nl.md) · [English (US)](./USER-GUIDE.en-US.md) · [Tagalog](./USER-GUIDE.tl.md) · [Français](./USER-GUIDE.fr.md) · [Deutsch](./USER-GUIDE.de.md) · [Ελληνικά](./USER-GUIDE.el.md) · [हिन्दी](./USER-GUIDE.hi.md) · [Magyar](./USER-GUIDE.hu.md) · [Italiano](./USER-GUIDE.it.md) · [日本語](./USER-GUIDE.ja.md) · [한국어](./USER-GUIDE.ko.md) · [Bahasa Melayu](./USER-GUIDE.ms.md) · [فارسی](./USER-GUIDE.fa.md) · [Polski](./USER-GUIDE.pl.md) · [Basa Jawa](./USER-GUIDE.jv.md) · [Português](./USER-GUIDE.pt.md) · [ਪੰਜਾਬੀ](./USER-GUIDE.pa.md) · [Română](./USER-GUIDE.ro.md) · [Русский](./USER-GUIDE.ru.md) · [Slovenčina](./USER-GUIDE.sk.md) · [Español](./USER-GUIDE.es.md) · [Kiswahili](./USER-GUIDE.sw.md) · [Svenska](./USER-GUIDE.sv.md) · [తెలుగు](./USER-GUIDE.te.md) · [ไทย](./USER-GUIDE.th.md) · [Türkçe](./USER-GUIDE.tr.md) · [Українська](./USER-GUIDE.uk.md) · [Tiếng Việt](./USER-GUIDE.vi.md)</small>

<small>

> **Hinweis zu Übersetzungen der Benutzeroberfläche und Dokumentation:** Alle Sprachen der Benutzeroberfläche außer dem ursprünglichen Englisch (GB)
> wurden mithilfe von KI-Modellen übersetzt; die Formulierungen können ungenau oder fehlerhaft sein.

</small>

<br/>

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Inhaltsverzeichnis**

- [Bevor Sie beginnen](#before-you-start)
  - [So erhalten Sie einen kostenlosen OpenRouter-API-Schlüssel (Desktop-App)](#how-to-get-a-free-openrouter-api-key-desktop-app)
- [Erste Schritte](#getting-started)
- [Hauptbestandteile des Fensters](#main-parts-of-the-window)
  - [Seitenleiste](#sidebar)
  - [Symbolleiste](#toolbar)
  - [Eingabe- und Ausgabefelder](#input-and-output-panels)
- [Übersetzen](#translate)
  - [Text übersetzen](#translate-text)
  - [Sprachauswahl](#language-selection)
  - [Nützliche Übersetzungseinstellungen](#helpful-translation-settings)
- [Umschreiben](#rewrite)
- [Umwandeln](#transform)
  - [Einen vorhandenen Prompt ausführen](#run-an-existing-prompt)
  - [Wenn noch keine Prompts vorhanden sind](#if-you-have-no-prompts-yet)
  - [Schnell einen Prompt erstellen](#create-a-prompt-quickly)
  - [Einen Prompt bearbeiten](#edit-a-prompt)
  - [Einen Prompt vor der Nutzung testen](#test-a-prompt-before-using-it)
- [Übersicht](#dashboard)
  - [Daten filtern](#filter-the-data)
  - [Registerkarten der Übersicht](#dashboard-tabs)
  - [Daten exportieren](#export-data)
  - [Gespeicherte Datensätze für ein Modell löschen](#delete-stored-records-for-a-model)
- [Verlauf](#history)
  - [Verlauf filtern](#filter-the-history)
  - [Verlaufsdaten exportieren](#export-history-data)
- [Einstellungen](#settings)
  - [Allgemeine Einstellungen](#general-settings)
  - [Modelle](#models)
  - [Sprachen](#languages)
  - [Kostenverfolgung](#cost-tracking)
  - [Aufforderungen transformieren](#transform-prompts)
  - [Benutzer](#users)
  - [API-Konfiguration](#api-config)
  - [Über](#about)
- [Häufige Probleme](#common-issues)
  - [Die App übersetzt, umschreibt oder wandelt Text nicht um](#the-app-will-not-translate-rewrite-or-transform-text)
  - [Die Modellliste ist leer](#the-model-list-is-empty)
  - [Das Ergebnis ist zu langsam oder zu teuer](#the-result-is-too-slow-or-too-expensive)
  - [Die Oberfläche ist in der falschen Sprache](#the-interface-is-in-the-wrong-language)
  - [Der Text ist zu klein oder schwer lesbar](#the-text-is-too-small-or-hard-to-read)
  - [Diagramme in der Übersicht sind leer](#dashboard-charts-are-empty)
  - [Kosten zeigen „nicht verfügbar“ oder scheinen falsch](#cost-shows-not-available-or-seems-wrong)
  - [Gesamtkosten stimmen nicht mit meiner Anbieterrechnung überein](#total-cost-does-not-match-my-provider-bill)
  - [Die Verlauf-Seite fehlt in der Seitenleiste](#the-history-page-is-missing-from-the-sidebar)
  - [Web-App: Unerwartete Weiterleitung zur Anmeldeseite](#web-app-redirected-to-the-login-page-unexpectedly)
  - [Web-Administrator: Passwort vergessen oder verloren](#web-admin-forgot-or-lost-a-password)
  - [Übersicht zeigt keine Daten für andere Benutzer an (Web)](#dashboard-shows-no-data-for-other-users-web)
  - [Ich habe einen Prompt geändert und die Bearbeitungen sind verloren](#i-changed-a-prompt-and-lost-the-edits)
- [Schnelltipps](#quick-tips)
- [Haftungsausschluss](#disclaimer)
- [Lizenz](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="before-you-start"></a>
## Bevor Sie beginnen

Um Transrewrt nutzen zu können, benötigen Sie Zugriff auf mindestens einen KI-Anbieter. Die unterstützten Anbieter sind: [OpenRouter](https://openrouter.ai) (bündelt viele Modelle), OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras und [Ollama](https://ollama.com) für lokale Modelle.

Sie müssen kein kostenpflichtiges Modell auswählen, um loszulegen. Sobald Sie Ihren OpenRouter-API-Schlüssel hinzufügen, aktiviert die App automatisch eine integrierte **kostenlose** OpenRouter-Option. So können Sie sofort mit dem Übersetzen, Umschreiben und Umwandeln von Text beginnen. Alternativ können Sie auch einen kostenlosen API-Schlüssel von Cerebras, Google, Groq oder Mistral AI erhalten.

Einfach ausgedrückt:

- Ein **Modell** ist die KI-Engine, die die Arbeit verrichtet. Modelle werden mit einem **Anbieter-Präfix** angezeigt (z. B. `openrouter/…`, `openai/…`, `ollama/…`).
- Ein **API-Schlüssel** (oder bei Ollama eine **Basis-URL**) ermöglicht der App den Zugriff auf diesen Anbieter.

Wenn Sie die **Desktop-App** verwenden, fügen Sie die Schlüssel in [**Einstellungen** > **API-Konfiguration**](#api-config) für jeden verwendeten Anbieter hinzu. Wenn Sie nur OpenRouter nutzen, siehe unten [So erhalten Sie einen API-Schlüssel](#how-to-get-an-api-key-desktop-app). Wenn Sie keinen API-Schlüssel verwenden möchten, können Sie Ollama (von [ollama.com](https://ollama.com)) installieren und stattdessen lokale Modelle wie `translategemma:4b` nutzen.

Wenn Sie die **Webversion** verwenden, konfiguriert der Serverbetreiber die Anbieter über Umgebungsvariablen. Daher können Sie keine API-Schlüssel direkt in der Anwendung eingeben.

<br/>

<a id="how-to-get-an-api-key-desktop-app"></a>
### So erhalten Sie einen kostenlosen OpenRouter-API-Schlüssel (Desktop-App)

Wenn Sie die Desktop-App verwenden, befolgen Sie diese Schritte:

1. Rufen Sie [OpenRouter](https://openrouter.ai) in Ihrem Webbrowser auf.
2. Erstellen Sie ein Konto oder melden Sie sich an.
3. Öffnen Sie die Seite [Keys](https://openrouter.ai/keys).
4. Klicken Sie auf die Schaltfläche, um einen neuen API-Schlüssel zu erstellen.
5. Geben Sie dem Schlüssel einen Namen, damit Sie ihn später wiedererkennen.
6. Kopieren Sie den neuen API-Schlüssel.
7. Kehren Sie zu Transrewrt zurück und öffnen Sie **Einstellungen** > **API-Konfiguration**.
8. Fügen Sie den Schlüssel in **OpenRouter API key** ein (unter **Einstellungen** > **API-Konfiguration**).
9. Klicken Sie auf **Test OpenRouter key**, um sicherzustellen, dass er funktioniert.

<br/><br/>

<a id="getting-started"></a>
## Erste Schritte

Wenn Sie Transrewrt zum ersten Mal verwenden, befolgen Sie diese Reihenfolge:

1. Öffnen Sie die App.
2. Wählen Sie bei Bedarf Ihre **Oberflächensprache** über das Globus-Symbol aus.
3. Wenn Sie die **Desktop-App** verwenden, öffnen Sie [**Einstellungen** > **API-Konfiguration**](#api-config), fügen Sie einen API-Schlüssel für mindestens einen Anbieter hinzu (z. B. OpenRouter) und klicken Sie auf **Test**, um die Funktionalität zu überprüfen.
4. Öffnen Sie [**Einstellungen** > **Modelle**](#models) und fügen Sie ein oder mehrere Modelle zu **Ausgewählte Modelle** hinzu.
5. Öffnen Sie [**Einstellungen** > **Sprachen**](#languages) und wählen Sie Ihre **Top-Sprachen** aus, wenn Sie möchten, dass Ihre am häufigsten verwendeten Sprachen zuerst angezeigt werden.
6. Gehen Sie zu **Übersetzen** und führen Sie eine einfache Übersetzung durch, um sicherzustellen, dass alles funktioniert.
7. Sobald dies funktioniert, probieren Sie **Umschreiben** und dann **Umwandeln** aus.

Diese Reihenfolge ist wichtig. Sie verhindert das häufigste Problem bei der ersten Nutzung: einen Auftrag auszuführen, bevor die App eine funktionierende API-Verbindung oder ein ausgewähltes Modell hat.

<br/><br/>

<a id="main-parts-of-the-window"></a>
## Hauptbestandteile des Fensters

Die App ist in drei Hauptbereiche unterteilt:

- Die **Seitenleiste** auf der linken Seite.
- Die **Symbolleiste** oben.
- Der **Arbeitsbereich** in der Mitte.

<br/>

<a id="sidebar"></a>
### Seitenleiste

Verwenden Sie die Seitenleiste, um sich in der App zu bewegen. Sie können die Seitenleiste einblenden, um mehr Platz zu schaffen, indem Sie auf das Symbol neben dem App-Logo klicken.

<br/>

<table>
  <tr>
    <td valign="top">
       <img src="../images/screenshots/de/sidebar.png" alt="Application Sidebar" style="max-width: 100%; border: 1px solid #ddd; border-radius: 4px;">
    </td>
    <td valign="top">
      <br/><br/>
      <ul>
        <li><strong>Übersetzen</strong> öffnet den Übersetzungsarbeitsbereich.</li><br/>
        <li><strong>Umschreiben</strong> öffnet den Umschreibungsarbeitsbereich.</li><br/>
        <li><strong>Umwandeln</strong> öffnet den benutzerdefinierten Prompt-Arbeitsbereich.</li><br/>
        <li><strong>Übersicht</strong> zeigt Nutzungs- und Kosteninformationen an.</li><br/>
        <li><strong>Einstellungen</strong> öffnet das Einstellungsfenster.</li><br/>
        <li><strong>Verlauf</strong> zeigt den Nutzungsverlauf mit Eingabe- und Ausgabetext an.</li><br/>
        <li><strong>Benutzer</strong> zeigt den Benutzernamen des angemeldeten Benutzers an (nur im Web).</li>
      </ul>
    </td>
  </tr>
</table>

<br/>

<a id="toolbar"></a>
### Symbolleiste

Die Symbolleiste ändert sich leicht, je nachdem, wo Sie sich in der App befinden.

- Links wird der Name der aktuellen Seite angezeigt.
- Rechts sehen Sie den **Modellauswahl**- und den **Oberflächensprache**-Steuerung.

Mit dem **Modellauswahl** können Sie festlegen, welches KI-Modell für die aktuelle Aufgabe verwendet werden soll.

![Model selector](../images/screenshots/de/model-selector.png)

Einige kostenlose Modelle sind möglicherweise nicht immer verfügbar – manchmal sind sie offline oder haben eine Nutzungsobergrenze. In diesem Fall entfernt die App das Modell automatisch aus Ihrer verfügbaren Liste. Um zu steuern, welche Modelle angezeigt werden, gehen Sie zu [**Einstellungen** > **Modelle**](#models) und bearbeiten Sie Ihre Modellliste. 
 Sie können die Modelleinstellungen auch direkt öffnen, indem Sie auf das Anbietersymbol links neben dem Modellnamen in der Symbolleiste klicken.

<br/>

Das **Globus-Symbol + Sprachcode** ändert die Sprache der App-Oberfläche, wie Menüs und Schaltflächen. Es ändert **nicht** die Übersetzungssprachen, die in **Übersetzen** verwendet werden.

![Interface language selector](../images/screenshots/de/language-selector.png)

<br/>

<a id="input-and-output-panels"></a>
### Eingabe- und Ausgabebereiche

Die meisten Arbeitsbereiche verwenden einen linken **Eingabe**-Bereich und einen rechten **Ausgabe**-Bereich.

Jeder Bereich zeigt außerdem Folgendes an:

| **Eingabe**                                                          | **Ausgabe**                                                                                                                  |
|--------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------|
| - Zeichenanzahl <br/>- Wortanzahl <br/>- Absatzanzahl   <br/> | - Dauer der Aufgabe<br/>- **TPS** (Tokens pro Sekunde)<br/>- Zeichen-, Wort- und Absatzanzahl<br/>- Das verwendete Modell |

Wenn Sie sich über die technischen Begriffe wundern:

- **Token** bedeutet einen kleinen Textabschnitt. Stellen Sie sich dies als Teil eines Wortes oder ein kurzes Wort vor.
- **TPS** gibt an, wie viele dieser Textabschnitte das Modell pro Sekunde verarbeitet.

<br/>

Sie können auch die Kosten jeder Operation (falls verfügbar) und die Gesamtkosten überwachen, indem Sie die Option `Show cost information on the actions` unter [**Einstellungen** > **Allgemeine Einstellungen**](#general-settings) aktivieren.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="translate"></a>
## Übersetzen

Verwenden Sie **Übersetzen**, wenn Sie Text von einer Sprache in eine andere konvertieren möchten.

![Translate workspace](../images/screenshots/de/translate.png)

<br/>

<a id="translate-text"></a>
### Text übersetzen

1. Öffnen Sie **Übersetzen**.
2. Wählen Sie eine Sprache unter **Von**.
3. Wählen Sie eine Sprache unter **Nach**.
4. Wählen Sie ein Modell in der Symbolleiste.
5. Geben Sie Text in **Eingabe** ein oder fügen Sie ihn ein.
6. Klicken Sie auf **Übersetzen**.
7. Lesen Sie das Ergebnis in **Ausgabe**.
8. Verwenden Sie die Schaltfläche Kopieren, wenn Sie das Ergebnis kopieren möchten.

<br/>

<a id="language-selection"></a>
### Sprachauswahl

- **Von** kann eine bestimmte Sprache oder **Sprache erkennen** sein.
- **Nach** ist die Sprache, in die das Ergebnis übersetzt werden soll.

Ihre ausgewählten **Top-Sprachen** werden oben in der Liste angezeigt. Sie können diese unter [**Einstellungen** > **Sprachen**](#languages) festlegen.

<br/>

<a id="helpful-translation-settings"></a>
### Nützliche Übersetzungseinstellungen

Unter [**Einstellungen** > **Allgemeine Einstellungen**](#general-settings) können Sie das Verhalten der Übersetzung anpassen:

- **Automatische Übersetzung beim Einfügen** führt eine Übersetzung automatisch aus, sobald Sie Text einfügen.
- **Ergebnis automatisch in die Zwischenablage kopieren** kopiert das Ergebnis nach einer erfolgreichen Übersetzung automatisch.
- **Echtzeit-Übersetzung (beim Tippen)** führt Übersetzungen durch, während Sie tippen.
- **Timeout (ms)** legt fest, wie lange die App wartet, bevor eine Echtzeit-Übersetzung gestartet wird.
- **Enter** legt fest, was passiert, wenn Sie `Enter` drücken:

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="rewrite"></a>
## Umschreiben

Verwenden Sie **Umschreiben**, wenn Sie den Wortlaut verbessern möchten, ohne die Hauptbedeutung zu ändern.

![Rewrite workspace](../images/screenshots/de/rewrite.png)

Dies ist nützlich für:

- Rechtschreib- und Grammatikprüfung (**Rechtschreibung und Grammatik prüfen**)
- Verbesserung der Textklarheit (**Klarheit verbessern**)
- mehrere unterschiedliche Formulierungen in einem Durchlauf (**Alternative Versionen**)
- formelleren oder informelleren Text (**Formal** / **Informell**)
- Verkürzen oder Erweitern von Text (**Verkürzen** / **Erweitern**)
- technischere Formulierung (**Technischer machen**)

<br/>

> 💡 **TIPP**<br/>
> Wenn Sie den Modus „**Rechtschreibung und Grammatik prüfen**“ verwenden, erscheint im Ausgabebereich (neben **Kopieren**) ein Schalter **Änderungen anzeigen**.
> Schalten Sie ihn ein oder aus, um die spezifischen Korrekturen anzuzeigen oder auszublenden, die auf Ihren Text angewendet wurden.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="transform"></a>
## Umwandeln

Verwenden Sie **Umwandeln**, wenn Sie möchten, dass die KI einer benutzerdefinierten Anweisung folgt.

![Transform workspace](../images/screenshots/de/transform.png)

Dieser Bereich der App bietet die größte Flexibilität. Sie können ihn für Aufgaben wie diese verwenden:

- Notizen zusammenfassen
- Ungeformten Text in eine professionelle E-Mail umwandeln
- Wichtige Punkte extrahieren
- Text in ein bestimmtes Format umwandeln
- jede andere benutzerdefinierte Aktion mit dem Eingabetext

<br/>

<a id="run-an-existing-prompt"></a>
### Einen vorhandenen Prompt ausführen

1. Öffnen Sie **Umwandeln**.
2. Wählen Sie einen Prompt aus der Prompt-Liste.
3. Wenn ein **Ziel**-Sprachfeld angezeigt wird, wählen Sie gegebenenfalls eine Sprache aus.
4. Geben Sie Text in **Eingabe** ein oder fügen Sie ihn ein.
5. Klicken Sie auf **Umwandeln**.
6. Lesen Sie das Ergebnis in **Ausgabe**.

<br/>

<a id="if-you-have-no-prompts-yet"></a>
### Wenn Sie noch keine Prompts haben

Wenn Ihre Prompt-Liste leer ist, klicken Sie im Transform-Arbeitsbereich auf **Beispielprompts laden**. Die gleiche Option ist immer verfügbar unter [**Einstellungen** > **Aufforderungen transformieren**](#transform-prompts) in der Export/Import-Zeile. Beides fügt integrierte Beispiele hinzu, sodass Sie schnell loslegen können.

<br/>

> ℹ️ **HINWEIS**<br/>
> Beispielprompts werden auf Englisch bereitgestellt. Nachdem Sie sie geladen haben, können Sie einen Prompt bearbeiten und **Prompt übersetzen** verwenden, um ihn in Ihre Sprache zu übersetzen.

<br/>

<a id="create-a-prompt-quickly"></a>
### Einen Prompt schnell erstellen

Der schnellste Weg, um einen Prompt zu erstellen, ist:

1. Klicken Sie auf **Neuer Prompt**.
2. Klicken Sie auf **Prompt generieren**.
3. Beschreiben Sie, was der Prompt tun soll.
4. Wählen Sie ein Modell aus.
5. Lassen Sie die App einen Entwurf für Sie erstellen.
6. Überprüfen Sie den Entwurf und klicken Sie auf **Speichern**.

![Generate prompt](../images/screenshots/de/transform-generate.png)

<br/>

<a id="edit-a-prompt"></a>
### Einen Prompt bearbeiten

Wenn Sie einen Prompt erstellen oder bearbeiten, wird der Editor auf der linken Seite angezeigt und ein Testbereich auf der rechten Seite.

![Transform prompt editor](../images/screenshots/de/transform-prompt-edit.png)

Die wichtigsten Felder sind:

- **Prompt-Name**: der Name, der in der Prompt-Liste angezeigt wird.
- **Prompt-Anweisungen (optional)**: ein kurzer Hinweis, der dem Benutzer beim Ausführen des Prompts angezeigt wird.
- **Modellrolle**: die allgemeine Rolle, die der KI zugewiesen wird, z. B. 'Du bist ein hilfreicher Assistent.'
- **Modellanweisungen (eine pro Zeile)**: die spezifischen Regeln, denen die KI folgen soll.
- **Ausgabe-Beschreibung**: ein kurzes Wort, das das Ergebnis beschreibt, z. B. 'Zusammenfassung' oder 'Umschreiben'.
- **Temperatur (0.0 → 1.0)**: wie sich das Modell verhalten wird; siehe unten.
- **Nach Zielsprache fragen**: fügt beim Ausführen des Prompts einen Zielsprach-Selector hinzu.

Wenn Ihnen der Fachbegriff **Temperatur** neu ist, stellen Sie sich das Folgende vor:

- Eine **niedrigere** Temperatur führt zu stabileren, vorhersehbareren Ergebnissen.
- Eine **höhere** Temperatur führt zu mehr Abwechslung und Kreativität.

Sie können außerdem verwenden:

- `Generate prompt`, um einen neuen Entwurf anhand einer einfachen Beschreibung zu erstellen
- `Improve prompt`, um einen vorhandenen Prompt zu verfeinern
- `Translate prompt`, um die Prompt-Felder zu übersetzen

<br/>

> ⚠️ **WARNUNG**<br/>
> Klicken Sie zuerst auf `Save`, bevor Sie auf `Back to Run` klicken. Wenn Sie zurückgehen, ohne zu speichern, gehen Ihre Änderungen verloren.

<br/>

<a id="test-a-prompt-before-using-it"></a>
### Einen Prompt vor der Verwendung testen

Das Testfeld rechts ermöglicht es Ihnen, Ihren Prompt mit Beispieltexten auszuprobieren, bevor Sie ihn im täglichen Einsatz verwenden.

Dies ist nützlich, wenn:

- Sie einen neuen Prompt erstellen
- Sie zwei Versionen eines Prompts vergleichen
- Sie Ton, Länge oder Ausgabeformat überprüfen möchten

<br/>

> ℹ️ **HINWEIS**<br/>
> Sie können gespeicherte Prompts in [**Einstellungen** > **Aufforderungen transformieren**](#transform-prompts) exportieren und importieren.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="dashboard"></a>
## Übersicht

Verwenden Sie **Übersicht**, um zu sehen, wie intensiv Sie die App nutzen und welche Kosten entstehen (für kostenpflichtige Modelle).

![Dashboard summary](../images/screenshots/de/dashboard-summary.png)

<br/>

> ℹ️ **HINWEIS**<br/>
> Wenn Sie nur **kostenlose** Modelle verwenden, können die **Kosten** Null betragen und kostenbezogene Zusammenfassungen leer erscheinen. Auf der Registerkarte **Zusammenfassung** zeigen **Nutzung im Zeitverlauf** und **Nutzung nach Modell** weiterhin die **Anzahl der Aufrufe** (Übersetzen, Umschreiben und Umwandeln), sofern Aktivitäten im gewählten Zeitraum vorliegen.

<br/>

<a id="filter-the-data"></a>
### Daten filtern

Verwenden Sie die Filterknöpfe oben, um den Zeitraum zu ändern.

![Dashboard filters](../images/screenshots/de/dashboard-filter.png)

<br/>

> ℹ️ **HINWEIS**<br/>
> Der **Benutzer**-Filter ist in der Webversion nur für Administratoren sichtbar. Reguläre Benutzer sehen diesen Filter nicht, und er ist in der Desktop-App nicht verfügbar.

<br/>

<a id="dashboard-tabs"></a>
### Registerkarten der Übersicht

- **Zusammenfassung** bietet einen Überblick über Nutzung und Kosten. Dazu gehören **Nutzung im Zeitverlauf** (kumulierte, gestapelte **Aufrufanzahlen** pro Tag für Übersetzen, Umschreiben und Umwandeln) und **Nutzung nach Modell** (gesamte **Aufrufe pro Modell**, einschließlich Umwandeln).
- **Nach Nutzung** unterteilt die Aktivitäten nach Übersetzungssprache, Umschreibungs-Modus und Transformationsaufforderung.
- **Nach Modell** zeigt an, welche Modelle Sie verwendet haben und wie hoch deren Kosten waren.
- **Nach Tag** zeigt die täglichen Gesamtwerte an.
- **Alle Aufrufe** zeigt den vollständigen Aufrufverlauf an und ermöglicht dessen Export.

<br/>

<a id="export-data"></a>
### Daten exportieren

Die Tabellen in der Übersicht können Daten exportieren in:

- **JSON**
- **CSV**
- **XLSX**

Dies ist nützlich, wenn Sie Aktivitäten außerhalb der App überprüfen oder einen Bericht teilen möchten.

<br/>

<a id="delete-stored-records-for-a-model"></a>
### Gespeicherte Datensätze für ein Modell löschen

In **Nach Modell** oder **Alle Aufrufe** können Sie gespeicherte Datensätze für ein Modell löschen, indem Sie auf das „Papierkorb“-Symbol klicken.

> ⚠️ **WARNUNG**<br/>
> Das Löschen gespeicherter Datensätze kann nicht rückgängig gemacht werden. Verwenden Sie diese Funktion nur, wenn Sie sicher sind, dass Sie den Verlauf nicht mehr benötigen.

Um alle Daten zu löschen oder Datensätze basierend auf ihrem Alter zu entfernen, gehen Sie zu [**Einstellungen** > **Kostenverfolgung**](#cost-tracking). Dort finden Sie Optionen, um alle gespeicherten Daten oder nur Daten, die älter als ein bestimmtes Datum sind, zu löschen.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="history"></a>
## Verlauf

Klicken Sie auf **Verlauf**, um den Verlauf Ihrer Aktionen in **Transrewrt** einzusehen, einschließlich der Eingabe und Ausgabe jeder Operation.

![History page](../images/screenshots/de/history.png)

<br/>

<a id="filter-the-history"></a>
### Verlauf filtern

**Verlauf** verwendet dieselben Filter wie die Seite **Übersicht**. Nutzen Sie diese, um den gewünschten Zeitraum auszuwählen.

![Dashboard filters](../images/screenshots/de/dashboard-filter.png)

<br/>

> ℹ️ **HINWEIS**<br/>
> Der **Benutzer**-Filter ist in der Webversion nur für Administratoren sichtbar. Reguläre Benutzer sehen diesen Filter nicht, und er ist in der Desktop-App nicht verfügbar.

<br/>

<a id="export-history-data"></a>
### Verlaufsdaten exportieren

Die Verlaufseite kann die gefilterten Daten exportieren in:

- **JSON**
- **CSV**
- **XLSX**

Dies ist nützlich, wenn Sie Aktivitäten außerhalb der App überprüfen oder einen Bericht teilen möchten.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="settings"></a>
## Einstellungen

Öffnen Sie **Einstellungen** über die Seitenleiste, um das Verhalten der App anzupassen.

Die verfügbaren Tabs hängen von der Plattform und Ihrer Rolle ab:

| Tab               | Desktop | Web (admin) | Web (regulärer Benutzer) |
  |-------------------|:-------:|:-----------:|:------------------------:|
  | Allgemeine Einstellungen  |   Ja   |     Ja     |        Ja         |
  | Modelle            |   Ja   |     Ja     |        Ja         |
  | Sprachen         |   Ja   |     Ja     |        Ja         |
  | Kostenverfolgung     |   Ja   |     Ja     |         -          |
  | Aufforderungen transformieren |   Ja   |     Ja     |        Ja         |
  | Benutzer             |    -    |     Ja     |         -          |
  | API-Konfiguration        |   Ja   |     Ja     |         -          |
  | Über             |   ja   |     ja     |        ja         |

<br/>

> ℹ️ **HINWEIS**<br/>
> In der Webversion verfügt jeder Benutzer über eine eigene Konfiguration. Einstellungen wie ausgewählte Modelle, Sprachen, allgemeine Optionen und Transformationsaufforderungen werden pro Benutzer gespeichert. Änderungen, die Sie vornehmen, wirken sich nicht auf andere Benutzer aus.

<br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="general-settings"></a>
### Allgemeine Einstellungen

Verwenden Sie **Allgemeine Einstellungen**, um das Tastaturverhalten, die Speicherung von Ausführungsdetails im **Verlauf** und das Erscheinungsbild zu steuern.

**Verhalten**

- **Verhalten für ENTER** legt fest, ob `Enter` die Aufgabe ausführt oder eine neue Zeile einfügt.
- **Automatische Übersetzung beim Einfügen** startet die Übersetzung, sobald Sie Text einfügen.
- **Ergebnis automatisch in die Zwischenablage kopieren** kopiert erfolgreiche Ergebnisse automatisch.
- **Echtzeit-Übersetzung (beim Tippen)** übersetzt während des Tippens.
- **Timeout (ms)** legt die Wartezeit für die Echtzeit-Übersetzung fest.

**Historie**

- **Ausführungsverlauf behalten** steuert, ob jede Übersetzung, Umschreibung und Transformation **Eingabe- und Ausgabetext** für die Seitenleistenansicht [**Verlauf**](#history) speichert. Bei Deaktivierung wird eine Bestätigung angefordert; bei Bestätigung werden gespeicherte Verlaufsdaten aus der Datenbank entfernt.
- **Verlaufsdaten löschen** ermöglicht das Entfernen gespeicherter Texte nach Alter (z. B. älter als einige Monate oder **alle Daten (leeren)**) über **Daten löschen**. Dies betrifft nur gespeicherte Ausführungstexte für die **Verlauf**-Ansicht; es werden **keine** Kosten- oder Nutzungsdaten gelöscht. Zum Entfernen oder Reduzieren von **Kosten**-Daten verwenden Sie [**Einstellungen** > **Kostenverfolgung**](#cost-tracking).

**Erscheinungsbild**

- **Kosteninformationen bei Aktionen anzeigen** steuert die Anzeige der Kosten pro Operation (falls verfügbar) und der Gesamtkosten in den Ausgabefeldern für Übersetzen, Umschreiben und Umwandeln.
- **Kosten-Nachkommastellen** ändert die Anzeige der Kosten-Dezimalstellen.
- **Nur Web:** **Abstand um die App anzeigen** fügt zusätzlichen Platz um die Oberfläche hinzu.
- **Schriftfamilie** ändert die Schriftart in den Textfeldern.
- **Größe** ändert die Schriftgröße.

**Konfigurationssicherung**

- **Nutzungsdaten in die Sicherung einschließen** – wenn aktiviert, enthält die ZIP-Datei auch Ausführungsverlauf und API-Aufrufdaten.
- **Konfiguration sichern** – erstellt eine einzelne ZIP-Datei (standardmäßig `transrewrt-config-backup-YYYY-MM-DD_HHMMSS.zip` in UTC) mit `config.json`, `state.json`, optionaler Verschlüsselungsschlüssel, Benutzern, Einstellungen, benutzerdefinierten Aufforderungen und Nutzungsdaten, falls aktiviert. Nach einer erfolgreichen Sicherung wird der Dateiname der gesicherten Datei angezeigt.
- **Aus Sicherung wiederherstellen** – öffnet zuerst einen **Bestätigungsdialog**. Wählen Sie die Sicherungs-ZIP-Datei im Dialog aus (**Durchsuchen**/Dateiauswahl oder Drag-and-Drop, falls unterstützt), und prüfen Sie dann die Optionen:
  - **Nutzungsdaten wiederherstellen** – importiert Nutzung/Verlauf aus der ZIP-Datei, wenn diese bei der Sicherung enthalten war; deaktivieren Sie dies, wenn Sie nur Einstellungen und Aufforderungen übernehmen möchten.
  - **Alte Nutzungsdaten vor dem Wiederherstellen löschen** – entfernt vorhandene Nutzung/Verlauf auf dieser Installation, bevor die Sicherung angewendet wird (optional; verwenden Sie dies, wenn Sie einen sauberen Austausch wünschen).

Sicherungen, die entweder in der Web- oder Desktopversion erstellt wurden, können in der jeweils anderen Version wiederhergestellt werden. Beim Wiederherstellen einer Desktop-Sicherung in der Webversion werden die Daten im Administrator-Benutzerkonto wiederhergestellt.

<br/>

<a id="models"></a>
### Modelle

Verwenden Sie **Einstellungen** > **Modelle**, um festzulegen, welche Modelle in der Symbolleiste angezeigt werden.

![Settings Models tab](../images/screenshots/de/settings-models.png)

Die Seite enthält zwei Listen:

- **Verfügbare Modelle** auf der linken Seite
- **Ausgewählte Modelle** auf der rechten Seite

Nützliche Steuerelemente beinhalten:

- **Modelle durchsuchen...**, um ein Modell nach Namen zu finden
- **Anbieter**-Chips, um die Liste auf eine Engine einzuschränken (OpenRouter, OpenAI, Ollama, …)
- **Nur kostenlos**, um nur kostenlose Modelle anzuzeigen
- **Aktualisieren**, um die Liste neu zu laden
- **Alle erweitern** und **Alle einklappen**, wenn Sie nach Anbieter sortieren

Modell-IDs enthalten das Anbieter-Präfix (z. B. `openrouter/…` gegenüber `openai/…`). Abzeichen wie **OpenAI (OpenRouter)** gegenüber **OpenAI (direkt)** zeigen, wie der Datenverkehr weitergeleitet wird.

> ℹ️ **HINWEIS**<br/>
> **OpenRouter Body Builder** (`openrouter/bodybuilder`) ist ein Router-Modell, kein allgemeines Chat-Modell: Die Antwort ist JSON, das OpenRouter-API-Anfragekörper beschreibt (z. B. ein `requests`-Array mit `model` und `messages`). Wenn Sie es für **Übersetzen**, **Umschreiben** oder **Umwandeln** verwenden, zeigt das Ausgabefeld dieses JSON anstelle des fertigen Texts an. Wählen Sie für diese Aufgaben ein normales Textmodell. Weitere Informationen finden Sie auf der [Body Builder-Modellseite](https://openrouter.ai/openrouter/bodybuilder) bei OpenRouter.

Aktionen:

- Um ein Modell hinzuzufügen, klicken Sie auf **Hinzufügen** oder an beliebiger Stelle in den Eintrag.

- Um ein Modell zu entfernen, klicken Sie auf **X** daneben in **Ausgewählte Modelle** oder auf **Ausgewählt** im Eintrag unter Verfügbare Modelle.

- Um die Liste zu löschen, klicken Sie auf **Alle abwählen**. Das erforderliche kostenlose Modell bleibt in der Liste erhalten.

<br/>

> ℹ️ **HINWEIS**<br/>
> Wenn Sie keine Guthaben auf OpenRouter hinzufügen möchten, aktivieren Sie zunächst **Nur kostenlos** und wählen Sie die kostenlosen Modelle (keine Kreditkarte erforderlich). Sie können auch Ollama verwenden, um Modelle lokal ohne API-Schlüssel auszuführen.

<br/>

<a id="languages"></a>
### Sprachen

Verwenden Sie **Einstellungen** > **Sprachen**, um die in der App verwendeten Sprachlisten zu verwalten.

- **Top-Sprachen** werden oben in den Sprachlisten bei **Übersetzen** und **Umwandeln** angeheftet.
- **Benutzerdefinierte Sprache** ermöglicht es Ihnen, eine Sprache hinzuzufügen, die nicht in der integrierten Liste enthalten ist.

Wenn Sie eine benutzerdefinierte Sprache hinzufügen, erscheint sie in den Sprachauswahlen zusammen mit den integrierten Optionen.

<br/>

<a id="cost-tracking"></a>
### Kostenverfolgung

Verwenden Sie **Einstellungen** > **Kostenverfolgung**, um Kosteninformationen zu verwalten.

- **Gesamtkosten** zeigt die laufende Summe an.
- **Wert kopieren** kopiert die Gesamtsumme in die Zwischenablage.
- **Kosten zurücksetzen** setzt die gespeicherte Summe auf null zurück.
- **Mit API-Schlüsselnutzung synchronisieren** setzt die Summe auf den Wert, der in Ihrem OpenRouter-Konto angezeigt wird (nur OpenRouter).
- **API-Schlüsselnutzung** zeigt OpenRouter-Nutzungsdetails an, falls verfügbar.
- **Kostendaten löschen** entfernt alle Daten oder nur Einträge, die älter als ein ausgewähltes Datum sind.

**Kostenverfolgung:** Wenn Sie OpenRouter-Modelle verwenden, zeigt die App Ihre tatsächliche Nutzung und Ausgaben basierend auf den Kosteninformationen von OpenRouter an. Für alle anderen Anbieter schätzt die App die Kosten anhand der von OpenRouter veröffentlichten Preise. Ist kein Preis verfügbar, kann die Schätzung null betragen.

<br/>

> ℹ️ **HINWEIS**<br/>
>  **Alle Kostenangaben sind Schätzungen nur zu Ihrer Information und keine offiziellen Abrechnungsbelege.**

<br/>

> ⚠️ **WARNUNG**<br/>
> Das Löschen von Daten kann nicht rückgängig gemacht werden. Stellen Sie vor dem Löschen sicher, dass Sie Ihre Daten gesichert oder über [**Verlauf**](#history) 
> oder [**Übersicht** > **Alle Aufrufe**](#dashboard-tabs) exportiert haben, andernfalls gehen sie dauerhaft verloren. 
> Der gesamte Eingabe-/Ausgabe-Verlauf, der mit jedem API-Aufruf-Eintrag verbunden ist, wird ebenfalls gelöscht.

<br/>

<a id="transform-prompts"></a>
### Aufforderungen transformieren

Verwenden Sie **Einstellungen** > **Aufforderungen transformieren**, um Prompts in großer Zahl zu verwalten.

Sie können:

- Ihre gespeicherten Prompts überprüfen
- Prompts löschen
- Prompts aus einer Datei importieren
- Prompts zur Sicherung oder zum Teilen exportieren
- Beispielprompts zur Prompt-Liste hinzufügen

<br/>

<a id="users"></a>
### Benutzer

Verwenden Sie **Benutzer**, um Benutzerkonten in der Webversion zu verwalten. Sie können Benutzer hinzufügen, deren Daten aktualisieren, Passwörter zurücksetzen und Konten löschen.

<br/>

<a id="api-config"></a>
### API-Konfiguration

Die unterstützten Anbieter sind: OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras und **Ollama** (lokale Modelle über eine Basis-URL). Sie müssen nur die Anbieter konfigurieren, die Sie verwenden.

**Webanwendung: Nur Administrator**

API-Schlüssel werden über System- oder Docker-Umgebungsvariablen konfiguriert – sie werden nicht in der Web-Oberfläche eingegeben. Auf dieser Seite wird angezeigt, für welche Anbieter ein Schlüssel konfiguriert ist, und Sie können jeden einzelnen testen, indem Sie auf die Schaltfläche `Test` klicken.

<br/>

> ℹ️ **HINWEIS**<br/>
> Um einen API-Schlüssel zu ändern, aktualisieren Sie die Umgebungsvariable in Ihrer System- oder Docker-Konfiguration und starten Sie den Server oder Container neu.

<br/>

> ℹ️ **HINWEIS**<br/>
> **Konfigurationssicherungen** (siehe [**Allgemeine Einstellungen** → Konfigurationssicherung](#general-settings)) können **aufgelöste** Anbieterschlüssel in das `config.json` der ZIP-Datei einbetten. Beim Wiederherstellen dieser ZIP-Datei werden diese Schlüssel **nicht** wieder in die persistente Konfigurationsdatei des Servers kopiert – aktive Schlüssel stammen weiterhin aus der Umgebung und dem bestehenden Dateizustand, wie dort beschrieben.

<br/>

**Desktop-Anwendung**

Verwenden Sie **API-Konfiguration**, um API-Schlüssel für jeden von Ihnen verwendeten Anbieter zu speichern. Geben Sie bei Ollama die **Basis-URL** anstelle eines API-Schlüssels ein.

<br/>

> 💡 **Tipp** <br/>
> Wenn Sie keinen API-Schlüssel verwenden oder keine Gebühren zahlen möchten, können Sie [Ollama herunterladen](https://ollama.com) und Modelle (wie `translategemma:4b`) kostenlos lokal auf Ihrem Gerät ausführen. Alternativ können Sie ein kostenloses OpenRouter-Konto erstellen (ohne Kreditkarte), um deren kostenlose Modelle zu nutzen, oder einen kostenlosen API-Schlüssel von Cerebras, Google, Groq oder Mistral AI erhalten.

<br/>

- Fügen Sie nur die Anbieter hinzu, die Sie benötigen. In **Einstellungen** > **Modelle** beginnt jede Modell-ID mit dem Anbieter (z. B. `openrouter/openrouter/free`, `openai/gpt-4o`, `ollama/llama3`).

Um einen API-Schlüssel hinzuzufügen, geben Sie den Wert in das Textfeld ein und klicken Sie auf `Save`. Um einen vorhandenen Schlüssel zu ersetzen, klicken Sie auf `Edit`. Um zu überprüfen, ob ein Schlüssel funktioniert, klicken Sie auf `Test`. Bei der Ollama-Basis-URL klicken Sie immer auf `Test`, um die Verbindung zu prüfen.

<br/>

> ℹ️ **HINWEIS**<br/>
> Sie können den aktuellen Wert eines API-Schlüssels nicht einsehen. Sie können ihn nur mit der Schaltfläche `Edit` ersetzen.
> API-Schlüssel werden verschlüsselt in der Konfiguration gespeichert.

<br/>

<a id="about"></a>
### Über

Die Registerkarte **Über** zeigt:

- den App-Namen
- die Versionsnummer
- das Build-Datum
- einen Link zum Projekt-Repository

<br/><br/>

<a id="common-issues"></a>
## Häufige Probleme

Wenn etwas nicht wie erwartet funktioniert, überprüfen Sie zuerst die folgenden Punkte.

<br/>

<a id="the-app-will-not-translate-rewrite-or-transform-text"></a>
### Die App übersetzt, umschreibt oder wandelt Text nicht um

Stellen Sie sicher, dass:

- Sie ein Modell in der Symbolleiste ausgewählt haben
- mindestens ein Modell unter [**Einstellungen** > **Modelle**](#models) aufgelistet ist
- Ihre API-Konfiguration funktioniert

Wenn Sie die Desktop-App verwenden:

1. Öffnen Sie [**Einstellungen** > **API-Konfiguration**](#api-config).
2. Stellen Sie sicher, dass mindestens ein API-Schlüssel gespeichert ist.
3. Klicken Sie auf **Test**, um zu überprüfen, ob der Schlüssel funktioniert.

<br/>

<a id="the-model-list-is-empty"></a>
### Die Modellliste ist leer

Öffnen Sie [**Einstellungen** > **Modelle**](#models) und klicken Sie auf **Aktualisieren**.

Falls erforderlich:

- suchen Sie nach einem Modell
- aktivieren Sie **Nur kostenlos**
- fügen Sie ein oder mehrere Modelle zu **Ausgewählte Modelle** hinzu

<br/>

<a id="the-result-is-too-slow-or-too-expensive"></a>
### Das Ergebnis ist zu langsam oder zu teuer

Probieren Sie eines oder mehrere davon aus:

- wählen Sie ein anderes Modell
- verwenden Sie eine kürzere Eingabe
- deaktivieren Sie **Echtzeit-Übersetzung (beim Tippen)** unter [**Einstellungen** > **Allgemeine Einstellungen**](#general-settings)
- verwenden Sie kostenlose Modelle für einfache Aufgaben (siehe [Modelle](#models))

<br/>

<a id="the-interface-is-in-the-wrong-language"></a>
### Die Oberfläche ist in der falschen Sprache

Klicken Sie auf das Globus-Symbol in der [Symbolleiste](#toolbar) und wählen Sie Ihre bevorzugte **Oberflächensprache**.

<br/>

<a id="the-text-is-too-small-or-hard-to-read"></a>
### Der Text ist zu klein oder schwer lesbar

Öffnen Sie [**Einstellungen** > **Allgemeine Einstellungen**](#general-settings) und ändern Sie:

- **Schriftart**
- **Größe**

<br/>

<a id="dashboard-charts-are-empty"></a>
### Diagramme in der Übersicht sind leer

Dies ist normal, wenn:

- Sie nur **kostenlose Modelle** verwenden und **Kosten**-Angaben betrachten (diese können null sein); **Nutzungs**-Aufrufzähldiagramme auf der **Zusammenfassung** benötigen weiterhin Daten aus dem gewählten Zeitraum
- der gewählte **Zeitfilter** nicht den Zeitraum abdeckt, in dem Aufrufe erfolgt sind – versuchen Sie **Alle**, um dies zu prüfen

Wenn die Diagramme auch nach Auswahl von **Alle** leer bleiben, überprüfen Sie, ob Aufrufe in [**Verlauf**](#history) oder im Tab **Alle Aufrufe** angezeigt werden.

<br/>

<a id="cost-shows-not-available-or-seems-wrong"></a>
### Kosten zeigen „nicht verfügbar“ an oder scheinen falsch

Wenn Sie Modelle über **OpenRouter** nutzen, zeigt die App Ihre tatsächlichen, von OpenRouter gemeldeten Ausgaben an.

Für **andere Anbieter** (OpenAI direkt, Anthropic direkt usw.) werden die Kosten anhand der von OpenRouter veröffentlichten Preisdaten geschätzt. Wenn kein passender Preis für ein Modell gefunden wird, wird die Kostenangabe als **nicht verfügbar** angezeigt und nicht in Ihre Gesamtsumme einbezogen.

<br/>

<a id="total-cost-does-not-match-my-provider-bill"></a>
### Gesamtkosten stimmen nicht mit meiner Anbieterrechnung überein

Alle Kostenangaben in der App sind **Schätzungen zur Orientierung**, keine offiziellen Abrechnungen.

Um die Gesamtkosten Ihrer tatsächlichen OpenRouter-Ausgaben anzunähern, öffnen Sie [**Einstellungen** > **Kostenverfolgung**](#cost-tracking) und klicken Sie auf **Mit API-Schlüsselnutzung synchronisieren**.

<br/>

<a id="the-history-page-is-missing-from-the-sidebar"></a>
### Die Seite Verlauf fehlt in der Seitenleiste

Die Option **Ausführungsverlauf behalten** ist möglicherweise deaktiviert. Öffnen Sie [**Einstellungen** > **Allgemeine Einstellungen**](#general-settings) und aktivieren Sie sie. Beachten Sie, dass durch die Aktivierung keine zuvor gelöschten Verlaufsdaten wiederhergestellt werden.

<br/>

<a id="web-app-session-expired"></a>
### Web-App: unerwartete Weiterleitung zur Anmeldeseite

Ihre Sitzung ist möglicherweise abgelaufen. Melden Sie sich erneut an. Wenn dies häufig auftritt, überprüfen Sie die Serverkonfiguration bezüglich der Sitzungslaufzeit.

<br/>

<a id="web-admin-forgot-or-lost-a-password"></a>
### Web-Administrator: Passwort vergessen oder verloren

Dies betrifft die **selbstgehostete Web-App** (Docker), nicht die Desktop-App (Electron).

- Wenn ein anderer Administrator sich noch anmelden kann, kann dieser [**Einstellungen** > **Benutzer**](#users) öffnen, das Konto auswählen und dort ein **neues Passwort** festlegen.
- Wenn Sie **gesperrt sind**, aber **Shell-Zugriff** auf die Maschine oder den Container haben, setzen Sie das Passwort mit dem mitgelieferten Hilfsprogramm zurück (ersetzen Sie `transrewrt`, falls Sie den Standardnamen geändert haben, und setzen Sie das Passwort in Anführungszeichen, wenn es Leerzeichen oder Sonderzeichen enthält):

```bash
docker exec transrewrt reset-web-password '<username>' '<new-password>'
```

Der Standardadministratorname ist `admin`, wenn Sie noch keine anderen Konten erstellt haben. Wenn Sie nur ein Argument übergeben, wird dies als neues Passwort für `admin` behandelt.

Wenn Sie aus einem **Quellcode-Checkout** statt aus Docker ausführen, verwenden Sie:

```bash
pnpm run reset-web-password -- <username> <new-password>
```

Das Skript aktualisiert den Benutzerdatensatz in der SQLite-Datenbank (und kann den `admin`-Benutzer erstellen, falls er fehlt). Melden Sie sich nach dem Zurücksetzen mit dem neuen Passwort an.

<br/>

<a id="dashboard-shows-no-data-for-other-users"></a>
### Übersicht zeigt keine Daten für andere Benutzer (Web)

Nur **Administratoren** können über den **Benutzer**-Filter Daten aller Benutzer anzeigen. Reguläre Benutzer sehen standardmäßig nur ihre eigene Aktivität.

<br/>

<a id="i-changed-a-prompt-and-lost-the-edits"></a>
### Ich habe einen Prompt geändert und die Bearbeitungen sind verloren

Klicken Sie beim Bearbeiten eines Prompts immer auf **Speichern**, bevor Sie auf **Zurück zu Ausführen** klicken.

<br/><br/>

<a id="quick-tips"></a>
## Schnelltipps

- Beginnen Sie mit [**Übersetzen**](#translate), um sicherzustellen, dass Ihre Einrichtung funktioniert, bevor Sie zu [**Umschreiben**](#rewrite) oder [**Umwandeln**](#transform) übergehen.
- Verwenden Sie [**Umschreiben**](#rewrite) für alltägliche Formulierungsverbesserungen.
- Verwenden Sie [**Umwandeln**](#transform), wenn Sie einen wiederholbaren Workflow für eine bestimmte Aufgabe benötigen.
- Verwenden Sie [**Übersicht**](#dashboard), wenn Sie die Nutzung und die Kosten im Auge behalten möchten.
- Verwenden Sie [**Verlauf](#history), um vergangene Operationen und deren vollständigen Eingabe- und Ausgabetext einzusehen.
- Exportieren Sie regelmäßig Prompts, wenn Sie eine Prompt-Bibliothek erstellen, die Sie sicher aufbewahren möchten (siehe [Aufforderungen transformieren](#transform-prompts)), oder wenn Sie sie mit anderen teilen möchten.

<br/><br/>

<a id="disclaimer"></a>
## Haftungsausschluss

Produktnamen und Symbole gehören ihren jeweiligen Eigentümern und werden nur zur Identifikation verwendet. Diese Software steht in keiner Verbindung zu den genannten Marken und wird von diesen nicht unterstützt.

<br/><br/>

<a id="license"></a>
## Lizenz

Copyright © 2026 Waldemar Scudeller Jr.

[Apache License 2.0](../LICENSE)
