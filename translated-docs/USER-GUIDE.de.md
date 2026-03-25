---
translated_at: "2026-03-25T21:22:41.641Z"
source_hash: "6ca7b21e820e8ee121cd93bbf98806547c5c3ce7914799891d923201bd2c4466"
source_mtime: 1774468804877.8855
model: "qwen/qwen3-235b-a22b-2507"
---
![Transrewrt Banner](../images/transrewrt_banner.png)

<a id="transrewrt-benutzerhandbuch"></a>
# Benutzerhandbuch

<br/>

<a id="einfuhrung"></a>
## Einführung

Transrewrt unterstützt Sie bei der Arbeit mit Text auf drei Arten:

- **Übersetzen** – Texte von einer Sprache in eine andere umwandeln.
- **Umschreiben** – Texte in einem anderen Stil formulieren, z. B. klarer, kürzer oder formeller.
- **Transformieren** – Texte mithilfe benutzerdefinierter KI-Anweisungen, sogenannter „Prompts“, bearbeiten.

<br/>

Dieses Handbuch erklärt, wie Sie die Anwendung nach der Installation und Inbetriebnahme verwenden. Installationsschritte finden Sie in der Hauptdatei **[README](README.de.md)**.

<br/>

> ℹ️ **HINWEIS**<br/>
> Transrewrt ist als Desktop-App für Windows und Linux sowie als selbstgehostete Web-App verfügbar. Dieses Handbuch konzentriert sich auf die tägliche Nutzung der Anwendung. Wenn ein Punkt nur für eine Version gilt, wird dies entsprechend gekennzeichnet.

<small>**In anderen Sprachen lesen:** [Englisch (GB)](USER-GUIDE.de.md) · [Portugiesisch (BR)](USER-GUIDE.pt-BR.md) · [Arabisch](USER-GUIDE.ar.md) · [Bengali](USER-GUIDE.bn.md) · [Katalanisch](USER-GUIDE.ca.md) · [Vereinfachtes Chinesisch](USER-GUIDE.zh-CN.md) · [Traditionelles Chinesisch](USER-GUIDE.zh-TW.md) · [Kroatisch](USER-GUIDE.hr.md) · [Tschechisch](USER-GUIDE.cs.md) · [Niederländisch](USER-GUIDE.nl.md) · [Englisch (US)](USER-GUIDE.en-US.md) · [Filipino](USER-GUIDE.tl.md) · [Französisch](USER-GUIDE.fr.md) · [Deutsch](USER-GUIDE.de.md) · [Griechisch](USER-GUIDE.el.md) · [Hindi](USER-GUIDE.hi.md) · [Ungarisch](USER-GUIDE.hu.md) · [Italienisch](USER-GUIDE.it.md) · [Japanisch](USER-GUIDE.ja.md) · [Javanesisch](USER-GUIDE.jv.md) · [Koreanisch](USER-GUIDE.ko.md) · [Malaiisch](USER-GUIDE.ms.md) · [Persisch](USER-GUIDE.fa.md) · [Polnisch](USER-GUIDE.pl.md) · [Portugiesisch (PT)](USER-GUIDE.pt.md) · [Punjabi](USER-GUIDE.pa.md) · [Rumänisch](USER-GUIDE.ro.md) · [Russisch](USER-GUIDE.ru.md) · [Slowakisch](USER-GUIDE.sk.md) · [Spanisch](USER-GUIDE.es.md) · [Suaheli](USER-GUIDE.sw.md) · [Schwedisch](USER-GUIDE.sv.md) · [Telugu](USER-GUIDE.te.md) · [Thailändisch](USER-GUIDE.th.md) · [Türkisch](USER-GUIDE.tr.md) · [Ukrainisch](USER-GUIDE.uk.md) · [Vietnamesisch](USER-GUIDE.vi.md)</small>

<small>

> **Hinweis zu Übersetzungen der Benutzeroberfläche und Dokumentation:** Alle Sprachen der Benutzeroberfläche außer dem Original Englisch (GB) wurden mithilfe von KI-Modellen übersetzt; die Formulierungen können ungenau sein oder Fehler enthalten.

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
- [Transformieren](#transform)
  - [Einen vorhandenen Prompt ausführen](#run-an-existing-prompt)
  - [Wenn Sie noch keine Prompts haben](#if-you-have-no-prompts-yet)
  - [Schnell einen Prompt erstellen](#create-a-prompt-quickly)
  - [Einen Prompt bearbeiten](#edit-a-prompt)
  - [Einen Prompt vor der Nutzung testen](#test-a-prompt-before-using-it)
- [Dashboard](#dashboard)
  - [Daten filtern](#filter-the-data)
  - [Dashboard-Reiter](#dashboard-tabs)
  - [Daten exportieren](#export-data)
  - [Gespeicherte Datensätze für ein Modell löschen](#delete-stored-records-for-a-model)
- [Verlauf](#history)
  - [Daten filtern](#filter-the-data-1)
  - [Verlaufsdaten exportieren](#export-history-data)
- [Einstellungen](#settings)
  - [Allgemeine Einstellungen](#general-settings)
  - [Modelle](#models)
  - [Sprachen](#languages)
  - [Kostenverfolgung](#cost-tracking)
  - [Transformations-Prompts](#transform-prompts)
  - [Benutzer](#users)
  - [API-Konfiguration](#api-config)
  - [Über](#about)
- [Häufige Probleme](#common-issues)
  - [Die App übersetzt, umschreibt oder transformiert keinen Text](#the-app-will-not-translate-rewrite-or-transform-text)
  - [Die Modellliste ist leer](#the-model-list-is-empty)
  - [Die Ergebnisse sind zu langsam oder zu teuer](#the-result-is-too-slow-or-too-expensive)
  - [Die Oberfläche ist in der falschen Sprache](#the-interface-is-in-the-wrong-language)
  - [Der Text ist zu klein oder schwer lesbar](#the-text-is-too-small-or-hard-to-read)
  - [Die Diagramme im Dashboard sind leer](#dashboard-charts-are-empty)
  - [Die Kosten werden als „nicht verfügbar“ angezeigt oder erscheinen falsch](#cost-shows-not-available-or-seems-wrong)
  - [Die Gesamtkosten stimmen nicht mit der Rechnung meines Anbieters überein](#total-cost-does-not-match-my-provider-bill)
  - [Die Seite „Verlauf“ fehlt in der Seitenleiste](#the-history-page-is-missing-from-the-sidebar)
  - [Web-App: unerwartete Weiterleitung zur Anmeldeseite](#web-app-redirected-to-the-login-page-unexpectedly)
  - [Dashboard zeigt keine Daten für andere Benutzer an (Web)](#dashboard-shows-no-data-for-other-users-web)
  - [Ich habe einen Prompt bearbeitet und die Änderungen sind verloren](#i-changed-a-prompt-and-lost-the-edits)
- [Schnelltipps](#quick-tips)
- [Haftungsausschluss](#disclaimer)
- [Lizenz](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="before-you-start"></a>

## Bevor Sie beginnen

Um Transrewrt zu nutzen, benötigen Sie Zugriff auf mindestens einen KI-Anbieter. Die unterstützten Anbieter sind: [OpenRouter](https://openrouter.ai) (welches viele Modelle bündelt), OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras und [Ollama](https://ollama.com) für lokale Modelle.

Sie müssen kein kostenpflichtiges Modell auswählen, um loszulegen. Sobald Sie Ihren OpenRouter-API-Schlüssel hinzufügen, aktiviert die App automatisch eine integrierte **kostenlose** OpenRouter-Option. So können Sie sofort mit dem Übersetzen, Umschreiben und Umwandeln von Texten beginnen. Alternativ können Sie auch einen kostenlosen API-Schlüssel von Cerebras, Google, Groq oder Mistral AI beziehen.

Einfach ausgedrückt:

- Ein **Modell** ist die KI-Engine, die die Arbeit verrichtet. Modelle werden mit einem **Anbieter-Präfix** angezeigt (z. B. `openrouter/…`, `openai/…`, `ollama/…`).
- Ein **API-Schlüssel** (oder bei Ollama eine **Basis-URL**) ist die Verbindung, über die die App den jeweiligen Anbieter erreicht.

Wenn Sie die **Desktop-App** verwenden, fügen Sie die Schlüssel unter [**Einstellungen** > **API-Konfiguration**](#api-config) für jeden verwendeten Anbieter hinzu. Wenn Sie nur OpenRouter nutzen, lesen Sie weiter unten unter [So erhalten Sie einen API-Schlüssel](#how-to-get-an-api-key-desktop-app). Wenn Sie keinen API-Schlüssel verwenden möchten, können Sie Ollama (von [ollama.com](https://ollama.com)) installieren und stattdessen lokale Modelle verwenden, wie z. B. `translategemma:4b`.

Wenn Sie die **Web-Version** nutzen, werden die Anbieter vom Server-Betreiber über Umgebungsvariablen konfiguriert, daher können Sie keine API-Schlüssel direkt in der Anwendung eintragen.

<br/>

<a id="how-to-get-an-api-key-desktop-app"></a>
### So erhalten Sie einen kostenlosen OpenRouter-API-Schlüssel (Desktop-App)

Wenn Sie die Desktop-App nutzen, gehen Sie wie folgt vor:

1. Rufen Sie [OpenRouter](https://openrouter.ai) in Ihrem Webbrowser auf.
2. Erstellen Sie ein Konto oder melden Sie sich an.
3. Öffnen Sie die Seite [Keys](https://openrouter.ai/keys).
4. Klicken Sie auf die Schaltfläche, um einen neuen API-Schlüssel zu erstellen.
5. Geben Sie dem Schlüssel einen Namen, damit Sie ihn später wiedererkennen.
6. Kopieren Sie den neuen API-Schlüssel.
7. Gehen Sie zurück zu Transrewrt und öffnen Sie **Einstellungen** > **API-Konfiguration**.
8. Fügen Sie den Schlüssel in das Feld **OpenRouter-API-Schlüssel** ein (unter **Einstellungen** > **API-Konfiguration**).
9. Klicken Sie auf **OpenRouter-Schlüssel testen**, um die Funktionalität sicherzustellen.

<br/><br/>

<a id="getting-started"></a>
## Erste Schritte

Wenn Sie Transrewrt zum ersten Mal verwenden, folgen Sie dieser Reihenfolge:

1. Öffnen Sie die App.
2. Wählen Sie bei Bedarf Ihre **Oberflächensprache** über das Globus-Symbol.
3. Wenn Sie die **Desktop-App** nutzen, öffnen Sie [**Einstellungen** > **API-Konfiguration**](#api-config), fügen Sie einen API-Schlüssel für mindestens einen Anbieter hinzu (z. B. OpenRouter) und klicken Sie auf **Testen**, um die Verbindung zu prüfen.
4. Öffnen Sie [**Einstellungen** > **Modelle**](#models) und fügen Sie ein oder mehrere Modelle zu **Ausgewählte Modelle** hinzu.
5. Öffnen Sie [**Einstellungen** > **Sprachen**](#languages) und wählen Sie Ihre **Top-Sprachen**, wenn Sie möchten, dass Ihre am häufigsten verwendeten Sprachen zuerst angezeigt werden.
6. Wechseln Sie zum Bereich **Übersetzen** und führen Sie eine einfache Übersetzung durch, um sicherzustellen, dass alles funktioniert.
7. Danach probieren Sie **Umschreiben** und anschließend **Umformen** aus.

Diese Reihenfolge ist wichtig. Sie verhindert das häufigste Problem bei Erstanwendern: einen Auftrag starten zu wollen, bevor die App über eine funktionierende API-Verbindung oder ein ausgewähltes Modell verfügt.

<br/><br/>

<a id="main-parts-of-the-window"></a>
## Wichtige Fensterbereiche

Die App ist in drei Hauptbereiche unterteilt:

- Die **Seitenleiste** auf der linken Seite.
- Die **Symbolleiste** oben.
- Der **Arbeitsbereich** in der Mitte.

<br/>

<a id="sidebar"></a>
### Seitenleiste

Nutzen Sie die Seitenleiste, um sich in der App zu bewegen. Durch Klicken auf das Symbol neben dem App-Logo können Sie die Seitenleiste ausblenden, um mehr Platz zu gewinnen.

<br/>

<table>
  <tr>
    <td valign="top">
       <img src="../images/screenshots/de/sidebar.png" alt="Anwendungs-Seitenleiste" style="max-width: 100%; border: 1px solid #ddd; border-radius: 4px;">
    </td>
    <td valign="top">
      <br/><br/>
      <ul>
        <li><strong>Übersetzen</strong> öffnet den Übersetzungsarbeitsbereich.</li><br/>
        <li><strong>Umschreiben</strong> öffnet den Umschreibearbeitsbereich.</li><br/>
        <li><strong>Umformen</strong> öffnet den Arbeitsbereich für benutzerdefinierte Anweisungen (Prompts).</li><br/>
        <li><strong>Dashboard</strong> zeigt Nutzungsinformationen und Kosten an.</li><br/>
        <li><strong>Einstellungen</strong> öffnet das Einstellungsfenster.</li><br/>
        <li><strong>Verlauf</strong> zeigt den Nutzungshistorie mit eingegebenem und ausgegebenem Text.</li><br/>
        <li><strong>Benutzer</strong> zeigt den Benutzernamen des angemeldeten Benutzers (nur Web).</li>
      </ul>
    </td>
  </tr>
</table>

<br/>

<a id="toolbar"></a>

### Symbolleiste

Die Symbolleiste ändert sich leicht, je nachdem, wo Sie sich in der App befinden.

- Links wird der Name der aktuellen Seite angezeigt.
- Rechts sehen Sie den **Modellauswahlknopf** und die Steuerung für die **Oberflächensprache**.

Die **Modellauswahl** ermöglicht es, welches KI-Modell für die aktuelle Aufgabe verwendet werden soll.

  ![Modellauswahl](../images/screenshots/de/model-selector.png)

Einige kostenlose Modelle sind möglicherweise nicht immer verfügbar – manchmal sind sie offline oder haben eine Nutzungsbegrenzung. Sollte dies der Fall sein, wird die App das betreffende Modell automatisch aus Ihrer verfügbaren Liste entfernen. Um zu steuern, welche Modelle angezeigt werden, gehen Sie zu [**Einstellungen** > **Modelle**](#models) und passen Sie Ihre Modellliste an.  
Sie können die Modelleinstellungen auch direkt öffnen, indem Sie auf das Anbietersymbol links neben dem Modellnamen in der Symbolleiste klicken.

<br/>

Das **Globus-Symbol + Sprachcode** ändert die Sprache der App-Oberfläche, wie Menüs und Schaltflächen. Es ändert **nicht** die Übersetzungssprachen, die in **Übersetzen** verwendet werden.

  ![Sprachauswahl für die Oberfläche](../images/screenshots/de/language-selector.png)

<br/>

<a id="input-and-output-panels"></a>
### Eingabe- und Ausgabefelder

Die meisten Arbeitsbereiche verwenden ein linkes **Eingabe**-Feld und ein rechtes **Ausgabe**-Feld.

Jedes Feld zeigt zusätzlich an:

| **Eingabe**                                                        | **Ausgabe**                                                                                                               |
|--------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------|
| - Zeichenanzahl <br/>- Wortanzahl <br/>- Absatzanzahl         | - Dauer der Aufgabe<br/>- **TPS** (Token pro Sekunde)<br/>- Anzahl der Zeichen, Wörter und Absätze<br/>- Verwendetes Modell |


Falls Sie sich mit den technischen Begriffen nicht auskennen:

- **Token** bezeichnet einen kleinen Textabschnitt. Sie können sich das als einen Wortteil oder ein kurzes Wort vorstellen.
- **TPS** gibt an, wie viele dieser Textabschnitte das Modell pro Sekunde verarbeitet hat.

<br/>

Sie können auch die Kosten pro Aktion (falls verfügbar) sowie die Gesamtkosten anzeigen lassen, indem Sie die Option `Kosteninformationen bei Aktionen anzeigen` unter [**Einstellungen** > **Allgemeine Einstellungen**](#general-settings) aktivieren. 
 
<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="translate"></a>
## Übersetzen

Verwenden Sie **Übersetzen**, wenn Sie Text von einer Sprache in eine andere konvertieren möchten.

![Übersetzen-Arbeitsbereich](../images/screenshots/de/translate.png)

<br/>

<a id="translate-text"></a>
### Text übersetzen

1. Öffnen Sie **Übersetzen**.
2. Wählen Sie eine Sprache bei **Von**.
3. Wählen Sie eine Sprache bei **Nach**.
4. Wählen Sie ein Modell in der Symbolleiste.
5. Geben Sie Text in das Feld **Eingabe** ein oder fügen Sie ihn ein.
6. Klicken Sie auf **Übersetzen**.
7. Lesen Sie das Ergebnis im Feld **Ausgabe**.
8. Verwenden Sie die Schaltfläche zum Kopieren, um das Ergebnis zu kopieren.

<br/>

<a id="language-selection"></a>
### Sprachauswahl

- **Von** kann eine bestimmte Sprache sein oder **Sprache erkennen**.
- **Nach** ist die Zielsprache für die Übersetzung.

Ihre ausgewählten **Bevorzugten Sprachen** werden oben in der Liste angezeigt. Diese können Sie unter [**Einstellungen** > **Sprachen**](#languages) festlegen.

<br/>

<a id="helpful-translation-settings"></a>
### Nützliche Übersetzungseinstellungen

Unter [**Einstellungen** > **Allgemeine Einstellungen**](#general-settings) können Sie das Verhalten der Übersetzung anpassen:

- **Beim Einfügen automatisch übersetzen** führt eine Übersetzung sofort nach dem Einfügen des Textes durch.
- **Ergebnis automatisch in Zwischenablage kopieren** kopiert das Ergebnis automatisch nach einer erfolgreichen Übersetzung.
- **Echtzeit-Übersetzung (beim Tippen)** führt Übersetzungen durch, während Sie tippen.
- **Timeout (ms)** legt fest, wie lange die App wartet, bevor eine Echtzeit-Übersetzung gestartet wird.
- **Enter-Taste** legt fest, was geschieht, wenn Sie die `Enter`-Taste drücken:

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="rewrite"></a>
## Überarbeiten

Verwenden Sie **Überschreiben**, wenn Sie den Wortlaut verbessern möchten, ohne die Hauptbedeutung zu verändern.

![Überschreiben-Arbeitsbereich](../images/screenshots/de/rewrite.png)

Dies ist nützlich für:

- Rechtschreib- und Grammatikfehler beheben
- Text verständlicher machen
- Text formeller oder informeller gestalten
- Text kürzen oder erweitern
- Text technischer klingen lassen

<br/>

> 💡 **TIPP**<br/>
> Wenn Sie den Modus "**Rechtschreibung und Grammatik prüfen**" verwenden, erscheint im Ausgabefeld eine Schaltfläche `Änderungen anzeigen`.
> Klicken Sie auf diese Schaltfläche, um die Anzeige der Korrekturen ein- oder auszublenden und die genauen Änderungen am Text zu sehen.


<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="transform"></a>

## Transformieren

Verwenden Sie **Transformieren**, wenn die KI einer benutzerdefinierten Anweisung folgen soll.

![Transformierungs-Arbeitsbereich](../images/screenshots/de/transform.png)

Dies ist der flexibelste Bereich der Anwendung. Sie können ihn für Aufgaben wie folgende nutzen:

- Zusammenfassen von Notizen
- Umwandeln von Entwürfen in eine überarbeitete E-Mail
- Herausfiltern wichtiger Punkte
- Umwandeln von Text in ein bestimmtes Format
- beliebige andere benutzerdefinierte Aktionen mit dem Eingabetext

<br/>

<a id="run-an-existing-prompt"></a>
### Eine vorhandene Anweisung ausführen

1. Öffnen Sie **Transformieren**.
2. Wählen Sie eine Anweisung aus der Anweisungsliste aus.
3. Falls ein Feld **Zielsprache** erscheint, wählen Sie gegebenenfalls eine Sprache aus.
4. Geben Sie Text in **Eingabe** ein oder fügen Sie ihn ein.
5. Klicken Sie auf **Transformieren**.
6. Lesen Sie das Ergebnis in **Ausgabe**.

<br/>

<a id="if-you-have-no-prompts-yet"></a>
### Wenn Sie noch keine Anweisungen haben

Wenn Ihre Anweisungsliste leer ist, klicken Sie auf **Beispielanweisungen laden**. Dadurch werden vordefinierte Beispiele hinzugefügt, sodass Sie schnell beginnen können.

<br/>

> ℹ️ **HINWEIS**<br/>
> Beispielanweisungen werden auf Englisch bereitgestellt. Nach dem Laden können Sie eine Anweisung bearbeiten und **Anweisung übersetzen** verwenden, um sie in Ihre Sprache zu übersetzen.

<br/>

<a id="create-a-prompt-quickly"></a>
### Schnelles Erstellen einer Anweisung

Die schnellste Methode, eine Anweisung zu erstellen, ist:

1. Klicken Sie auf **Neue Anweisung**.
2. Klicken Sie auf **Anweisung generieren**.
3. Beschreiben Sie, was die Anweisung tun soll.
4. Wählen Sie ein Modell aus.
5. Lassen Sie die App einen Entwurf für Sie erstellen.
6. Überprüfen Sie den Entwurf und klicken Sie auf **Speichern**.

![Anweisung generieren](../images/screenshots/de/transform-generate.png)


<br/>

<a id="edit-a-prompt"></a>
### Eine Anweisung bearbeiten

Beim Erstellen oder Bearbeiten einer Anweisung erscheint der Editor links und ein Testbereich rechts.

![Editor für Transformierungs-Anweisungen](../images/screenshots/de/transform-prompt-edit.png)

Die Hauptfelder sind:

- **Anweisungsname**: der Name, der in der Anweisungsliste angezeigt wird.
- **Anweisungsanleitung (optional)**: ein kurzer Hinweis, der dem Benutzer bei der Ausführung angezeigt wird.
- **Modellrolle**: die allgemeine Rolle, die der KI zugewiesen wird, z. B. „Du bist ein hilfreicher Assistent.“
- **Modellanweisungen (eine pro Zeile)**: die spezifischen Regeln, denen die KI folgen soll.
- **Beschreibung der Ausgabe**: ein kurzes Wort zur Beschreibung des Ergebnisses, z. B. „Zusammenfassung“ oder „Umschreibung“.
- **Temperatur (0,0 → 1,0)**: beschreibt das Verhalten des Modells; siehe unten.
- **Zielsprache abfragen**: fügt beim Ausführen der Anweisung einen Sprachauswahldialog hinzu.

Wenn Ihnen der Fachbegriff **Temperatur** neu ist, stellen Sie ihn sich folgendermaßen vor:

- Eine **niedrigere** Temperatur führt zu stabileren, vorhersehbareren Ergebnissen.
- Eine **höhere** Temperatur führt zu mehr Abwechslung und Kreativität.

Sie können außerdem verwenden:

- **`Anweisung generieren`**, um einen neuen Entwurf aus einer einfachen Beschreibung zu erstellen
- **`Anweisung verbessern`**, um eine bestehende Anweisung zu verfeinern
- **`Anweisung übersetzen`**, um die Anweisungsfelder zu übersetzen

<br/>

> ⚠️ **WARNUNG**<br/>
> Klicken Sie auf **`Speichern`**, bevor Sie auf **`Zurück zur Ausführung`** klicken. Wenn Sie ohne Speichern zurückkehren, gehen Ihre Änderungen verloren.

<br/>

<a id="test-a-prompt-before-using-it"></a>
### Eine Anweisung vor der Nutzung testen

Der Testbereich rechts ermöglicht es Ihnen, die Anweisung mit Beispieltexten auszuprobieren, bevor Sie sie im Alltag verwenden.

Dies ist hilfreich, wenn:

- Sie eine neue Anweisung erstellen
- Sie zwei Versionen einer Anweisung vergleichen
- Sie Ton, Länge oder das Ausgabeformat überprüfen möchten

<br/>

> ℹ️ **HINWEIS**<br/>
> Sie können gespeicherte Anweisungen exportieren und importieren unter [**Einstellungen** > **Transformieren-Anweisungen**](#transform-prompts).

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="dashboard"></a>
## Dashboard

Verwenden Sie das **Dashboard**, um Ihren Nutzungsumfang der Anwendung und die damit verbundenen Kosten einzusehen (für kostenpflichtige Modelle).

![Dashboard-Übersicht](../images/screenshots/de/dashboard-summary.png)


<br/>

> ℹ️ **HINWEIS**<br/>
> Falls Sie ausschließlich kostenlose Modelle verwenden, bleiben die kostenbezogenen Diagramme leer.

<br/>

<a id="filter-the-data"></a>
### Daten filtern

Verwenden Sie die Filterknöpfe oben, um den Zeitraum zu ändern.

![Dashboard-Filter](../images/screenshots/de/dashboard-filter.png)

<br/>

> ℹ️ **HINWEIS**<br/>
> Der **Benutzer**-Filter ist im Webversion nur für Administratoren sichtbar. Reguläre Benutzer sehen diesen Filter nicht, und er ist in der Desktop-App nicht verfügbar.

<br/>

<a id="dashboard-tabs"></a>

### Dashboard-Tabs

- **Übersicht** bietet einen Überblick über die Nutzung und die Kosten.
- **Nach Nutzung** unterteilt die Aktivitäten nach Übersetzungssprache, Umschreibungmodus und Transformations-Prompt.
- **Nach Modell** zeigt an, welche Modelle Sie verwendet haben und wie viel sie gekostet haben.
- **Nach Tag** zeigt die täglichen Gesamtwerte an.
- **Alle Aufrufe** zeigt den vollständigen Verlauf aller Aufrufe und ermöglicht dessen Export.

<br/>

<a id="export-data"></a>
### Daten exportieren

Die Dashboard-Tabellen können Daten exportieren in:

- **JSON**
- **CSV**
- **XLSX**

Dies ist nützlich, wenn Sie die Aktivitäten außerhalb der Anwendung überprüfen oder einen Bericht teilen möchten.

<br/>

<a id="delete-stored-records-for-a-model"></a>
### Gespeicherte Datensätze für ein Modell löschen

In **Nach Modell** oder **Alle Aufrufe** können Sie gespeicherte Datensätze für ein Modell löschen, indem Sie auf das "Papierkorb"-Symbol klicken.

> ⚠️ **WARNUNG**<br/>
> Gelöschte Datensätze können nicht wiederhergestellt werden. Nutzen Sie diese Funktion nur, wenn Sie sicher sind, dass der Verlauf nicht mehr benötigt wird.

Um alle Daten zu löschen oder Datensätze basierend auf ihrem Alter zu entfernen, gehen Sie zu [**Einstellungen** > **Kostenverfolgung**](#cost-tracking). Dort finden Sie Optionen, um alle gespeicherten Daten oder nur Daten, die älter als ein bestimmtes Datum sind, zu löschen.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="history"></a>
## Verlauf

Klicken Sie auf **Verlauf**, um den Verlauf Ihrer Aktionen innerhalb von **Transrewrt** einzusehen, inklusive der Eingabe und Ausgabe jedes Vorgangs.

![Verlaufsseite](../images/screenshots/de/history.png)

<br/>

<a id="filter-the-history"></a>
### Daten filtern

**Verlauf** verwendet dieselben Filter wie die **Dashboard**-Seite. Nutzen Sie diese, um den gewünschten Zeitraum auszuwählen.

![Dashboard-Filter](../images/screenshots/de/dashboard-filter.png)

<br/>

> ℹ️ **HINWEIS**<br/>
> Der Filter **Benutzer** ist in der Webversion nur für Administratoren sichtbar. Reguläre Benutzer sehen diesen Filter nicht, und er ist in der Desktop-App nicht verfügbar.

<br/>

<a id="export-history-data"></a>
### Verlaufsdaten exportieren

Die Verlaufsseite kann die gefilterten Daten exportieren in:

- **JSON**
- **CSV**
- **XLSX**

Dies ist nützlich, wenn Sie die Aktivitäten außerhalb der App überprüfen oder einen Bericht teilen möchten.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="settings"></a>
## Einstellungen

Öffnen Sie **Einstellungen** über die Seitenleiste, um das Verhalten der App anzupassen.

Die verfügbaren Tabs hängen von der Plattform und Ihrer Rolle ab:

  | Tab               | Desktop | Web (Admin) | Web (regulärer Benutzer) |
  |-------------------|:-------:|:-----------:|:------------------------:|
  | Allgemeine Einstellungen  |   ja   |     ja     |        ja         |
  | Modelle            |   ja   |     ja     |        ja         |
  | Sprachen           |   ja   |     ja     |        ja         |
  | Kostenverfolgung   |   ja   |     ja     |         —          |
  | Transformations-Prompts |   ja   |     ja     |        ja         |
  | Benutzer           |    —    |     ja     |         —          |
  | API-Konfiguration  |   ja   |     ja     |         —          |
  | Über               |   ja   |     ja     |        ja         |

<br/>

> ℹ️ **HINWEIS**<br/>
> In der Webversion verfügt jeder Benutzer über eine eigene Konfiguration. Einstellungen wie ausgewählte Modelle, Sprachen, allgemeine Optionen und Transformations-Prompts werden pro Benutzer gespeichert. Änderungen, die Sie vornehmen, wirken sich nicht auf andere Benutzer aus.

<br/>


[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="general-settings"></a>
### Allgemeine Einstellungen

Nutzen Sie **Allgemeine Einstellungen**, um das Tastaturverhalten, die Speicherung von Ausführungsdetails für den **Verlauf** und das Erscheinungsbild zu steuern.

**Verhalten**

- **Verhalten von EINGABE (ENTER)**: Legt fest, ob `Eingabe` den Vorgang ausführt oder eine neue Zeile einfügt.
- **Automatische Übersetzung beim Einfügen**: Startet die Übersetzung sofort, sobald Sie Text einfügen.
- **Ergebnis automatisch in Zwischenablage kopieren**: Kopiert erfolgreiche Ergebnisse automatisch.
- **Echtzeit-Übersetzung (während des Tippens)**: Übersetzt während des Tippens.
- **Timeout (ms)**: Legt die Wartezeit für die Echtzeit-Übersetzung fest.

**Verlauf**

- **Ausführungsverlauf speichern**: Steuert, ob jede Übersetzung, Umschreibung und Transformation **Eingabe- und Ausgabetext** für die Seitenleisten-Ansicht [**Verlauf**](#history) speichert. Bei Deaktivierung erfolgt eine Bestätigung; bei Bestätigung werden gespeicherte Verlaufsdaten aus der Datenbank entfernt.
- **Verlaufsdaten löschen**: Ermöglicht das Entfernen gespeicherter Texte basierend auf deren Alter (z. B. älter als einige Monate oder **alle Daten (leeren)**) über **Daten löschen**. Dies betrifft nur gespeicherte Ausführungstexte für die **Verlauf**-Ansicht und **nicht** die Kosten- oder Nutzungsstatistiken. Um **Kosten**-Daten zu entfernen oder zu bereinigen, nutzen Sie [**Einstellungen** > **Kostenverfolgung**](#cost-tracking).

**Darstellung**

- **Kosteninformationen bei Aktionen anzeigen**: Steuert die Anzeige der Kosten pro Vorgang (falls verfügbar) und der Gesamtkosten in den Ausgabefeldern von Übersetzen, Umschreiben und Transformieren.
- **Dezimalstellen bei Kosten**: Ändert die Anzeige der Dezimalstellen für Kosten.
- **Nur Web:** **Abstand um die App herum anzeigen** fügt zusätzlichen Platz um die Benutzeroberfläche hinzu.
- **Schriftart**: Ändert die Schriftart in den Textfeldern.
- **Größe**: Ändert die Schriftgröße.


<br/>

<a id="models"></a>

### Modelle

Verwenden Sie **Einstellungen** > **Modelle**, um festzulegen, welche Modelle in der Symbolleiste angezeigt werden.

![Registerkarte Modelle in den Einstellungen](../images/screenshots/de/settings-models.png)

Die Seite enthält zwei Listen:

- **Verfügbare Modelle** auf der linken Seite
- **Ausgewählte Modelle** auf der rechten Seite

Nützliche Steuerelemente sind:

- **Modelle durchsuchen...** um ein Modell nach Namen zu finden
- **Anbieter-Chips**, um die Liste auf einen Anbieter einzuschränken (OpenRouter, OpenAI, Ollama, …)
- **Nur kostenlos**, um nur kostenlose Modelle anzuzeigen
- **Aktualisieren**, um die Liste neu zu laden
- **Alle erweitern** und **Alle reduzieren**, wenn nach Anbieter sortiert wird

Modell-IDs enthalten das Anbieter-Präfix (z. B. `openrouter/…` vs. `openai/…`). Kennzeichen wie **OpenAI (OpenRouter)** vs. **OpenAI (direkt)** zeigen, wie der Datenverkehr weitergeleitet wird.

> ℹ️ **HINWEIS**<br/>
> **OpenRouter Body Builder** (`openrouter/bodybuilder`) ist ein Router-Modell, kein allgemeines Chat-Modell: Die Antwort ist JSON, das OpenRouter-API-Anfragekörper beschreibt (z. B. ein `requests`-Array mit `model` und `messages`). Wenn Sie es für **Übersetzen**, **Umschreiben** oder **Umwandeln** verwenden, zeigt das Ausgabefeld dieses JSON anstelle eines fertigen Textes an. Wählen Sie für diese Aufgaben ein normales Textmodell. Siehe die [Body Builder Modellseite](https://openrouter.ai/openrouter/bodybuilder) auf OpenRouter.

Aktionen:

- Um ein Modell hinzuzufügen, klicken Sie auf **Hinzufügen** oder irgendwo in den Eintrag.
- Um ein Modell zu entfernen, klicken Sie auf **X** daneben in **Ausgewählte Modelle** oder auf **Ausgewählt** im Eintrag unter Verfügbare Modelle.
- Um die Liste zu leeren, klicken Sie auf **Alle abwählen**. Das erforderliche kostenlose Modell bleibt in der Liste.

<br/>

> ℹ️ **HINWEIS**<br/>
> Wenn Sie nicht sofort Guthaben auf OpenRouter hinzufügen möchten, aktivieren Sie zunächst **Nur kostenlos** und wählen Sie die kostenlosen Modelle (keine Kreditkarte erforderlich). Sie können auch Ollama verwenden, um Modelle lokal ohne API-Schlüssel auszuführen.

<br/>

<a id="languages"></a>
### Sprachen

Verwenden Sie **Einstellungen** > **Sprachen**, um die in der App verwendeten Sprachlisten zu verwalten.

- **Bevorzugte Sprachen** werden oben in den Sprachlisten von **Übersetzen** und **Umwandeln** fixiert.
- **Benutzerdefinierte Sprache** ermöglicht das Hinzufügen einer Sprache, die nicht in der integrierten Liste enthalten ist.

Wenn Sie eine benutzerdefinierte Sprache hinzufügen, erscheint sie in den Sprachauswahlen neben den integrierten Optionen.

<br/>

<a id="cost-tracking"></a>
### Kostenverfolgung

Verwenden Sie **Einstellungen** > **Kostenverfolgung**, um Kosteninformationen zu verwalten.

- **Gesamtkosten** zeigt die laufende Summe an.
- **Wert kopieren** kopiert die Gesamtsumme in die Zwischenablage.
- **Kosten zurücksetzen** setzt die gespeicherte Gesamtsumme auf null zurück.
- **Mit API-Nutzung synchronisieren** setzt die Gesamtsumme entsprechend der von Ihrem OpenRouter-Konto gemeldeten Nutzung (nur OpenRouter).
- **API-Nutzung** zeigt OpenRouter-Nutzungsdetails an, falls verfügbar.
- **Kostendaten löschen** entfernt alle Daten oder nur Einträge älter als ein gewähltes Datum.

**Kostenverfolgung**: Bei Verwendung von OpenRouter-Modellen zeigt die App Ihre tatsächliche Nutzung und Ausgaben basierend auf den Kosteninformationen von OpenRouter an. Für alle anderen Anbieter schätzt die App die Kosten anhand der Preise von OpenRouter. Wenn kein Preis verfügbar ist, kann die Schätzung null betragen.

<br/>

> ℹ️ **HINWEIS**<br/>
> **Alle Kostenangaben dienen nur als Schätzung und zur Orientierung, nicht als offizielle Abrechnung.**

<br/>

> ⚠️ **WARNUNG**<br/>
> Das Löschen von Daten kann nicht rückgängig gemacht werden. Stellen Sie vor dem Löschen sicher, dass Sie Ihre Daten gesichert oder über [**Verlauf**](#history) oder [**Dashboard** > **Alle Aufrufe**](#dashboard-tabs) exportiert haben, andernfalls sind sie unwiderruflich verloren. Alle Eingabe- und Ausgabeeinträge, die mit jedem API-Aufruf verknüpft sind, werden ebenfalls gelöscht.

<br/>

<a id="transform-prompts"></a>
### Umwandlungs-Prompts

Verwenden Sie **Einstellungen** > **Umwandlungs-Prompts**, um Prompts gebündelt zu verwalten.

Sie können:

- Ihre gespeicherten Prompts überprüfen
- Prompts löschen
- Prompts aus einer Datei importieren
- Prompts zur Sicherung oder zum Teilen exportieren

<br/>

<a id="users"></a>
### Benutzer

Verwenden Sie **Benutzer**, um Benutzerkonten in der Webversion zu verwalten. Sie können Benutzer hinzufügen, deren Daten aktualisieren, Passwörter zurücksetzen und Konten löschen.

<br/>

<a id="api-config"></a>
### API-Konfiguration

Die unterstützten Anbieter sind: OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras und **Ollama** (lokale Modelle über eine Basis-URL). Sie müssen nur die Anbieter konfigurieren, die Sie nutzen.

**Webanwendung: Nur für Administratoren**

API-Schlüssel werden über System- oder Docker-Umgebungsvariablen konfiguriert – sie werden nicht in der Weboberfläche eingegeben. Auf dieser Seite wird angezeigt, für welche Anbieter ein Schlüssel konfiguriert ist, und Sie können jeden durch Klicken auf die Schaltfläche **`Test`** testen.

<br/>

> ℹ️ **HINWEIS**<br/>
> Um einen API-Schlüssel zu ändern, aktualisieren Sie die Umgebungsvariable in Ihrer System- oder Docker-Konfiguration und starten Sie den Server oder Container neu.

<br/>

**Desktop-Anwendung**

Verwenden Sie **API-Konfiguration**, um API-Schlüssel für jeden von Ihnen verwendeten Anbieter zu speichern. Bei Ollama geben Sie stattdessen die **Basis-URL** ein.

<br/>

> 💡 **Tipp** <br/>
> Wenn Sie keinen API-Schlüssel verwenden oder für die Nutzung bezahlen möchten, können Sie [Ollama herunterladen](https://ollama.com) und Modelle (wie z. B. `translategemma:4b`) kostenlos lokal auf Ihrem Gerät ausführen. Alternativ können Sie ein kostenloses OpenRouter-Konto erstellen (keine Kreditkarte erforderlich), um deren kostenlose Modelle zu nutzen, oder einen kostenlosen API-Schlüssel von Cerebras, Google, Groq oder Mistral AI erhalten.

<br/>

- Fügen Sie nur die Anbieter hinzu, die Sie benötigen. Unter **Einstellungen** > **Modelle** beginnt jede Modell-ID mit dem Anbieter (z. B. `openrouter/openrouter/free`, `openai/gpt-4o`, `ollama/llama3`).

Um einen API-Schlüssel hinzuzufügen, geben Sie den Wert in das Textfeld ein und klicken Sie auf **`Speichern`**. Um einen bestehenden Schlüssel zu ersetzen, klicken Sie auf **`Bearbeiten`**. Um zu prüfen, ob ein Schlüssel funktioniert, klicken Sie auf **`Test`**. Bei der Ollama-Basis-URL klicken Sie immer auf **`Test`**, um die Verbindung zu überprüfen.

<br/>

> ℹ️ **HINWEIS**<br/>
> Sie können den aktuellen Wert eines API-Schlüssels nicht einsehen. Sie können ihn nur über die Schaltfläche **`Bearbeiten`** ersetzen.
> API-Schlüssel werden verschlüsselt in der Konfiguration gespeichert.

<br/>

<a id="about"></a>

### Über

Die Registerkarte **Über** zeigt Folgendes an:

- den App-Namen
- die Versionsnummer
- das Build-Datum
- einen Link zum Projekt-Repository

<br/><br/>

<a id="common-issues"></a>
## Häufige Probleme

Wenn etwas nicht wie erwartet funktioniert, prüfen Sie zunächst die folgenden Punkte.

<br/>

<a id="the-app-will-not-translate-rewrite-or-transform-text"></a>
### Die App übersetzt, überarbeitet oder transformiert keinen Text

Stellen Sie sicher, dass:

- Sie ein Modell in der Symbolleiste ausgewählt haben
- mindestens ein Modell unter [**Einstellungen** > **Modelle**](#models) aufgeführt ist
- Ihre API-Konfiguration funktioniert

Wenn Sie die Desktop-App verwenden:

1. Öffnen Sie [**Einstellungen** > **API-Konfiguration**](#api-config).
2. Stellen Sie sicher, dass mindestens ein API-Schlüssel gespeichert ist.
3. Klicken Sie auf **Test** neben dem Anbieter, um zu überprüfen, ob der Schlüssel funktioniert.

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

Probieren Sie eines oder mehrere dieser Lösungen aus:

- wählen Sie ein anderes Modell
- verwenden Sie eine kürzere Eingabe
- deaktivieren Sie **Echtzeit-Übersetzung (beim Tippen)** unter [**Einstellungen** > **Allgemeine Einstellungen**](#general-settings)
- verwenden Sie kostenlose Modelle für einfache Aufgaben (siehe [Modelle](#models))

<br/>

<a id="the-interface-is-in-the-wrong-language"></a>
### Die Benutzeroberfläche ist in der falschen Sprache

Klicken Sie auf das Globus-Symbol in der [Symbolleiste](#toolbar) und wählen Sie Ihre gewünschte **Oberflächensprache** aus.

<br/>

<a id="the-text-is-too-small-or-hard-to-read"></a>
### Der Text ist zu klein oder schwer zu lesen

Öffnen Sie [**Einstellungen** > **Allgemeine Einstellungen**](#general-settings) und ändern Sie:

- **Schriftart**
- **Größe**

<br/>

<a id="dashboard-charts-are-empty"></a>
### Diagramme im Dashboard sind leer

Dies ist normal, wenn:

- Sie nur **kostenlose Modelle** verwenden (Kosten-Diagramme bleiben leer)
- der gewählte **Zeitfilter** keinen Zeitraum abdeckt, in dem Aufrufe erfolgt sind – versuchen Sie **Alle**, um es zu überprüfen

Wenn die Diagramme weiterhin leer sind, nachdem Sie **Alle** gewählt haben, prüfen Sie, ob Aufrufe in [**Verlauf**](#history) oder im Tab **Alle Aufrufe** erscheinen.

<br/>

<a id="cost-shows-not-available-or-seems-wrong"></a>
### Die Kosten zeigen „nicht verfügbar“ an oder scheinen falsch zu sein

Wenn Sie Modelle über **OpenRouter** verwenden, zeigt die App Ihre tatsächlichen, von OpenRouter gemeldeten Ausgaben an.

Bei **anderen Anbietern** (OpenAI direkt, Anthropic direkt, etc.) werden die Kosten anhand der Preisdaten geschätzt, die OpenRouter veröffentlicht. Falls für ein Modell kein passender Preis gefunden wird, wird die Kostenangabe als **nicht verfügbar** angezeigt und nicht in Ihre laufende Gesamtsumme einbezogen.

<br/>

<a id="total-cost-does-not-match-my-provider-bill"></a>
### Die Gesamtkosten stimmen nicht mit der Rechnung meines Anbieters überein

Alle Kostenangaben in der App sind **Schätzungen zur Orientierung**, keine offiziellen Abrechnungen.

Um die Gesamtkosten näher an Ihren tatsächlichen OpenRouter-Ausgaben anzupassen, öffnen Sie [**Einstellungen** > **Kostenerfassung**](#cost-tracking) und klicken Sie auf **Mit API-Nutzung synchronisieren**.

<br/>

<a id="the-history-page-is-missing-from-the-sidebar"></a>
### Die Seite Verlauf fehlt in der Seitenleiste

Die Option **Ausführungsverlauf behalten** könnte deaktiviert sein. Öffnen Sie [**Einstellungen** > **Allgemeine Einstellungen**](#general-settings) und aktivieren Sie sie. Beachten Sie, dass durch die Aktivierung nicht zuvor gelöschte Verlaufsdaten wiederhergestellt werden.

<br/>

<a id="web-app-session-expired"></a>
### Web-App: unerwartete Weiterleitung zur Login-Seite

Ihre Sitzung ist möglicherweise abgelaufen. Melden Sie sich erneut an. Wenn dies häufiger vorkommt, prüfen Sie die Serverkonfiguration bezüglich der Sitzungslaufzeit.

<br/>

<a id="dashboard-shows-no-data-for-other-users"></a>
### Dashboard zeigt keine Daten für andere Benutzer (Web)

Nur **Administratoren** können über den **Benutzer**-Filter Daten aller Benutzer ansehen. Reguläre Benutzer sehen standardmäßig nur ihre eigene Aktivität.

<br/>

<a id="i-changed-a-prompt-and-lost-the-edits"></a>
### Ich habe eine Anfrage geändert und die Bearbeitungen sind verloren

Wenn Sie eine Anfrage bearbeiten, klicken Sie immer auf **Speichern**, bevor Sie auf **Zurück zum Ausführen** klicken.

<br/><br/>

<a id="quick-tips"></a>
## Schnelltipps

- Beginnen Sie mit [**Übersetzen**](#translate), um sicherzustellen, dass Ihre Konfiguration funktioniert, bevor Sie zu [**Überarbeiten**](#rewrite) oder [**Transformieren**](#transform) übergehen.
- Verwenden Sie [**Überarbeiten**](#rewrite) für alltägliche Verbesserungen der Formulierung.
- Verwenden Sie [**Transformieren**](#transform), wenn Sie einen wiederholbaren Workflow für eine bestimmte Aufgabe benötigen.
- Verwenden Sie [**Dashboard**](#dashboard), wenn Sie den Verbrauch und die Kosten im Blick behalten möchten.
- Verwenden Sie [**Verlauf**](#history), um vergangene Aktionen einschließlich vollständiger Eingabe- und Ausgabetexte zu überprüfen.
- Exportieren Sie regelmäßig Anfragen, wenn Sie eine Sammlung an Anfragen aufbauen, die Sie sichern oder mit anderen teilen möchten (siehe [Transformationsanfragen](#transform-prompts)).

<br/><br/>

<a id="disclaimer"></a>

## Haftungsausschluss

Produktnamen und Symbole gehören ihren jeweiligen Eigentümern und werden ausschließlich zu Identifikationszwecken verwendet. Diese Software steht in keiner Verbindung mit den genannten Marken und wird von diesen nicht unterstützt.

<br/><br/>

<a id="license"></a>
## Lizenz

Urheberrecht © 2026 Waldemar Scudeller Jr.

[Apache-Lizenz 2.0](LICENSE)