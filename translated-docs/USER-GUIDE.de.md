---
translated_at: "2026-03-24T01:33:16.970Z"
source_hash: "fc671c16dd34a2c355752935670712beb8abd2ae65453de44983a2f2f0701696"
source_mtime: 1774306679773.736
model: "qwen/qwen3-235b-a22b-2507"
---
![Transrewrt-Banner](../images/transrewrt_banner.png)


<a id="transrewrt-user-guide"></a>
# Benutzerhandbuch

<br/>

<a id="introduction"></a>
## Einführung

Transrewrt unterstützt Sie auf drei Arten bei der Arbeit mit Text:

- **Übersetzen** – Text von einer Sprache in eine andere umwandeln.
- **Umschreiben** – Text in einem anderen Stil neu formulieren, etwa klarer, kürzer oder formeller.
- **Transformieren** – Text mithilfe benutzerdefinierter KI-Anweisungen, sogenannter „Prompts“, verarbeiten.

<br/>

Dieses Handbuch erklärt die Anwendung des Programms nach der Installation und Inbetriebnahme. Für Installationsanleitungen siehe die Hauptdatei **[README](README.de.md)**.

<br/>

> ℹ️ **HINWEIS**<br/>
> Transrewrt ist als Desktop-Anwendung für Windows und Linux sowie als selbstgehostete Webanwendung verfügbar. Dieses Handbuch konzentriert sich auf die tägliche Nutzung der Anwendung. Wo etwas nur für eine Version gilt, ist dies deutlich gekennzeichnet.

<small>**In anderen Sprachen lesen:** [English (UK)](USER-GUIDE.de.md) · [Português (BR)](USER-GUIDE.pt-BR.md) · [العربية](USER-GUIDE.ar.md) · [বাংলা](USER-GUIDE.bn.md) · [Català](USER-GUIDE.ca.md) · [简体中文](USER-GUIDE.zh-CN.md) · [繁體中文](USER-GUIDE.zh-TW.md) · [Hrvatski](USER-GUIDE.hr.md) · [Čeština](USER-GUIDE.cs.md) · [Nederlands](USER-GUIDE.nl.md) · [English (US)](USER-GUIDE.en-US.md) · [Filipino](USER-GUIDE.tl.md) · [Français](USER-GUIDE.fr.md) · [Deutsch](USER-GUIDE.de.md) · [Ελληνικά](USER-GUIDE.el.md) · [हिन्दी](USER-GUIDE.hi.md) · [Magyar](USER-GUIDE.hu.md) · [Italiano](USER-GUIDE.it.md) · [日本語](USER-GUIDE.ja.md) · [Basa Jawa](USER-GUIDE.jv.md) · [한국어](USER-GUIDE.ko.md) · [Bahasa Melayu](USER-GUIDE.ms.md) · [فارسی](USER-GUIDE.fa.md) · [Polski](USER-GUIDE.pl.md) · [Português (PT)](USER-GUIDE.pt.md) · [ਪੰਜਾਬੀ](USER-GUIDE.pa.md) · [Română](USER-GUIDE.ro.md) · [Русский](USER-GUIDE.ru.md) · [Slovenčina](USER-GUIDE.sk.md) · [Español](USER-GUIDE.es.md) · [Kiswahili](USER-GUIDE.sw.md) · [Svenska](USER-GUIDE.sv.md) · [తెలుగు](USER-GUIDE.te.md) · [ภาษาไทย](USER-GUIDE.th.md) · [Türkçe](USER-GUIDE.tr.md) · [Українська](USER-GUIDE.uk.md) · [Tiếng Việt](USER-GUIDE.vi.md)</small>

<br/>

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Inhaltsverzeichnis** 

- [Bevor Sie beginnen](#before-you-start)
  - [So erhalten Sie einen kostenlosen OpenRouter-API-Schlüssel (Desktop-App)](#how-to-get-a-free-openrouter-api-key-desktop-app)
- [Erste Schritte](#getting-started)
- [Hauptbestandteile des Fensters](#main-parts-of-the-window)
  - [Seitenleiste](#sidebar)
  - [Werkzeugleiste](#toolbar)
  - [Eingabe- und Ausgabefelder](#input-and-output-panels)
- [Übersetzen](#translate)
  - [Text übersetzen](#translate-text)
  - [Sprachauswahl](#language-selection)
  - [Nützliche Übersetzungseinstellungen](#helpful-translation-settings)
  - [Tastenkombinationen](#keyboard-shortcuts)
- [Umschreiben](#rewrite)
  - [Text umschreiben](#rewrite-text)
- [Transformieren](#transform)
  - [Einen vorhandenen Prompt ausführen](#run-an-existing-prompt)
  - [Wenn noch keine Prompts vorhanden sind](#if-you-have-no-prompts-yet)
  - [Einen Prompt schnell erstellen](#create-a-prompt-quickly)
  - [Einen Prompt bearbeiten](#edit-a-prompt)
  - [Einen Prompt vor der Nutzung testen](#test-a-prompt-before-using-it)
  - [Gespeicherte Prompts verwalten](#manage-saved-prompts)
- [Dashboard](#dashboard)
  - [Daten filtern](#filter-the-data)
  - [Dashboard-Tabs](#dashboard-tabs)
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
  - [Transform-Prompts](#transform-prompts)
  - [Benutzer](#users)
  - [API-Konfiguration](#api-config)
  - [Info](#about)
- [Häufige Probleme](#common-issues)
  - [Die Anwendung übersetzt, umschreibt oder transformiert den Text nicht](#the-app-will-not-translate-rewrite-or-transform-text)
  - [Die Modellliste ist leer](#the-model-list-is-empty)
  - [Das Ergebnis ist zu langsam oder zu teuer](#the-result-is-too-slow-or-too-expensive)
  - [Die Benutzeroberfläche ist in der falschen Sprache](#the-interface-is-in-the-wrong-language)
  - [Der Text ist zu klein oder schlecht lesbar](#the-text-is-too-small-or-hard-to-read)
  - [Die Diagramme im Dashboard sind leer](#dashboard-charts-are-empty)
  - [Die Kosten zeigen „nicht verfügbar“ oder erscheinen falsch](#cost-shows-not-available-or-seems-wrong)
  - [Die Gesamtkosten stimmen nicht mit meiner Rechnung des Anbieters überein](#total-cost-does-not-match-my-provider-bill)
  - [Die Verlauf-Seite fehlt in der Seitenleiste](#the-history-page-is-missing-from-the-sidebar)
  - [Web-App: unerwartete Weiterleitung zur Anmeldeseite](#web-app-redirected-to-the-login-page-unexpectedly)
  - [Im Dashboard werden keine Daten für andere Benutzer angezeigt (Web)](#dashboard-shows-no-data-for-other-users-web)
  - [Ich habe einen Prompt geändert und die Bearbeitung ging verloren](#i-changed-a-prompt-and-lost-the-edits)
- [Schnelltipps](#quick-tips)
- [Haftungsausschluss](#disclaimer)
- [Lizenz](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="before-you-start"></a>

## Bevor Sie beginnen

Um Transrewrt nutzen zu können, benötigen Sie Zugriff auf mindestens einen KI-Anbieter. Die unterstützten Anbieter sind: [OpenRouter](https://openrouter.ai) (der viele Modelle bündelt), OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI und [Ollama](https://ollama.com) für lokale Modelle.

Zum Einstieg müssen Sie kein kostenpflichtiges Modell auswählen. Sobald Sie Ihren OpenRouter-API-Schlüssel eingeben, aktiviert die App automatisch eine integrierte **kostenlose** OpenRouter-Option. So können Sie sofort mit dem Übersetzen, Umschreiben und Umwandeln von Texten beginnen.

Einfach ausgedrückt:

- Ein **Modell** ist die KI-Engine, die die eigentliche Arbeit leistet. Modelle werden mit einem **Anbieter-Präfix** aufgeführt (z. B. `openrouter/…`, `openai/…`, `ollama/…`).
- Ein **API-Schlüssel** (oder bei Ollama eine **Basis-URL**) ermöglicht es der App, den Anbieter zu erreichen.

Wenn Sie die **Desktop-App** verwenden, fügen Sie die Schlüssel in [**Einstellungen** > **API-Konfiguration**](#api-config) für jeden von Ihnen genutzten Anbieter hinzu. Falls Sie ausschließlich OpenRouter verwenden, sehen Sie sich weiter unten unter [So erhalten Sie einen API-Schlüssel](#how-to-get-an-api-key-desktop-app) an. Wenn Sie keinen API-Schlüssel verwenden möchten, können Sie stattdessen Ollama (von [ollama.com](https://ollama.com)) installieren und lokale Modelle nutzen.

Wenn Sie die **Webversion** nutzen, konfiguriert der Serverbetreiber die Anbieter mithilfe von Umgebungsvariablen, sodass Sie normalerweise keine API-Schlüssel selbst eingeben müssen.

<br/>

<a id="how-to-get-an-api-key-desktop-app"></a>
### So erhalten Sie einen kostenlosen OpenRouter-API-Schlüssel (Desktop-App)

Falls Sie die Desktop-App nutzen, gehen Sie wie folgt vor:

1. Rufen Sie [OpenRouter](https://openrouter.ai) in Ihrem Webbrowser auf.
2. Erstellen Sie ein Konto oder melden Sie sich an.
3. Öffnen Sie die Seite [Keys](https://openrouter.ai/keys).
4. Klicken Sie auf die Schaltfläche, um einen neuen API-Schlüssel zu erstellen.
5. Vergeben Sie einen Namen für den Schlüssel, an den Sie sich später erinnern können.
6. Kopieren Sie den neuen API-Schlüssel.
7. Kehren Sie zu Transrewrt zurück und öffnen Sie **Einstellungen** > **API-Konfiguration**.
8. Fügen Sie den Schlüssel in das Feld **OpenRouter-API-Schlüssel** ein (unter **Einstellungen** > **API-Konfiguration**).
9. Klicken Sie auf **OpenRouter-Schlüssel testen**, um sicherzustellen, dass er funktioniert.

<br/>

> ℹ️ **HINWEIS**<br/>
> Sie können mit der kostenlosen Route von OpenRouter oder einem der anderen kostenlosen Modelle beginnen, ohne eine Kreditkarte hinzuzufügen. In vielen Fällen reicht das aus, um Transrewrt nutzen zu können, ohne ein kostenpflichtiges Modell wählen zu müssen. Alternativ können Sie Ollama verwenden, um Modelle lokal ohne API-Schlüssel auszuführen.

<br/><br/>

<a id="getting-started"></a>
## Erste Schritte

Wenn Sie Transrewrt zum ersten Mal verwenden, folgen Sie dieser Reihenfolge:

1. Öffnen Sie die App.
2. Wählen Sie bei Bedarf Ihre **Benutzersprache** über das Globus-Symbol aus.
3. Falls Sie die **Desktop-App** verwenden, öffnen Sie [**Einstellungen** > **API-Konfiguration**](#api-config), fügen Sie einen API-Schlüssel für mindestens einen Anbieter hinzu (z. B. OpenRouter) und klicken Sie auf **Testen**, um die Funktionalität zu überprüfen.
4. Öffnen Sie [**Einstellungen** > **Modelle**](#models) und fügen Sie ein oder mehrere Modelle zu **Ausgewählte Modelle** hinzu.
5. Öffnen Sie [**Einstellungen** > **Sprachen**](#languages) und wählen Sie Ihre **Bevorzugten Sprachen** aus, wenn Sie möchten, dass Ihre am häufigsten genutzten Sprachen zuerst angezeigt werden.
6. Wechseln Sie zu **Übersetzen** und führen Sie eine einfache Übersetzung durch, um sicherzustellen, dass alles funktioniert.
7. Sobald dies funktioniert, probieren Sie **Umschreiben** und anschließend **Umformen** aus.

Diese Reihenfolge ist wichtig. So vermeiden Sie das häufigste Problem bei der Ersteinrichtung: einen Vorgang ausführen zu wollen, bevor die App über eine funktionierende API-Verbindung oder ein ausgewähltes Modell verfügt.

<br/><br/>

<a id="main-parts-of-the-window"></a>
## Hauptbestandteile des Fensters

Die App ist in drei Bereiche unterteilt:

- Die **Seitenleiste** links.
- Die **Symbolleiste** oben.
- Der **Arbeitsbereich** in der Mitte.

<br/>

<a id="sidebar"></a>
### Seitenleiste

Verwenden Sie die Seitenleiste, um in der App zu navigieren. Sie können die Seitenleiste durch Klicken auf das Symbol neben dem App-Logo einblenden oder einrücken, um mehr Platz zu erhalten.

<br/>

<table>
  <tr>
    <td valign="top">
       <img src="../images/screenshots/de/sidebar.png" alt="Anwendungsseitenleiste" style="max-width: 100%; border: 1px solid #ddd; border-radius: 4px;">
    </td>
    <td valign="top">
      <br/><br/>
      <ul>
        <li><strong>Übersetzen</strong> öffnet den Übersetzungsarbeitsbereich.</li><br/>
        <li><strong>Umschreiben</strong> öffnet den Umschreibungsarbeitsbereich.</li><br/>
        <li><strong>Umformen</strong> öffnet den Arbeitsbereich für benutzerdefinierte Anweisungen.</li><br/>
        <li><strong>Dashboard</strong> zeigt Nutzungs- und Kosteninformationen.</li><br/>
        <li><strong>Einstellungen</strong> öffnet das Einstellungsfenster.</li><br/>
        <li><strong>Verlauf</strong> zeigt den Nutzungsverlauf mit eingegebenem und ausgegebenem Text.</li><br/>
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
- Rechts befinden sich der **Modellauswahl**- und der **Spracheinstellungs**-Steuerung.

Die **Modellauswahl** ermöglicht es Ihnen, welches KI-Modell Sie für die aktuelle Aufgabe verwenden möchten.

  ![Modellauswahl](../images/screenshots/de/model-selector.png)

> ℹ️ **HINWEIS**<br/>
> Einige kostenlose Modelle sind möglicherweise nicht immer verfügbar – manchmal sind sie offline oder haben eine Nutzungsobergrenze. In diesem Fall entfernt die App das Modell automatisch aus Ihrer verfügbaren Liste.<br/>
> Um einzustellen, welche Modelle erscheinen, gehen Sie zu [**Einstellungen** > **Modelle**](#models) und bearbeiten Ihre Modellliste. 
> Sie können die Modelleinstellungen auch direkt öffnen, indem Sie auf das Anbietersymbol links neben dem Modellnamen in der Symbolleiste klicken.

<br/>

Das **Globussymbol + Sprachcode** ändert die Sprache der App-Oberfläche, wie Menüs und Schaltflächen. Es ändert **nicht** die Übersetzungssprachen, die in **Übersetzen** verwendet werden.

  ![Sprachauswahl für die Oberfläche](../images/screenshots/de/language-selector.png)

<br/>

<a id="input-and-output-panels"></a>
### Eingabe- und Ausgabefelder

Die meisten Arbeitsbereiche verwenden ein linkes **Eingabe**-Feld und ein rechtes **Ausgabe**-Feld.

Das **Eingabe**-Feld zeigt an:

- Zeichenanzahl
- Wortanzahl
- Absatzanzahl

Das **Ausgabe**-Feld kann anzeigen:

- Wie lange die Aufgabe gedauert hat
- Die Kosten dieser Aufgabe (falls verfügbar)
- Ihre Gesamtkosten
- **TPS** (Tokens pro Sekunde)
- Zeichen-, Wort- und Absatzanzahlen
- Das verwendete Modell

Wenn Sie sich über die technischen Begriffe wundern:

- **Token** bedeutet einen kleinen Textabschnitt. Man kann ihn sich als Teil eines Wortes oder ein kurzes Wort vorstellen.
- **TPS** bedeutet, wie viele dieser Textabschnitte das Modell pro Sekunde verarbeitet.

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
2. Wählen Sie eine Sprache bei **Von** aus.
3. Wählen Sie eine Sprache bei **Nach** aus.
4. Wählen Sie ein Modell in der Symbolleiste.
5. Geben Sie Text in das **Eingabe**-Feld ein oder fügen Sie ihn ein.
6. Klicken Sie auf **Übersetzen**.
7. Lesen Sie das Ergebnis im **Ausgabe**-Feld.
8. Nutzen Sie die Schaltfläche „Kopieren“, wenn Sie das Ergebnis kopieren möchten.

<br/>

<a id="language-selection"></a>
### Sprachauswahl

- **Von** kann eine bestimmte Sprache oder **Sprache erkennen** sein.
- **Nach** ist die gewünschte Zielsprache.

Ihre ausgewählten **Hauptsprachen** erscheinen oben in der Liste. Sie können diese unter [**Einstellungen** > **Sprachen**](#languages) festlegen.

<br/>

<a id="helpful-translation-settings"></a>
### Nützliche Übersetzungseinstellungen

Unter [**Einstellungen** > **Allgemeine Einstellungen**](#general-settings) können Sie ändern, wie sich die Übersetzung verhält:

- **Automatisch übersetzen beim Einfügen** führt eine Übersetzung sofort durch, sobald Sie Text einfügen.
- **Ergebnis automatisch in die Zwischenablage kopieren** kopiert das Ergebnis automatisch nach erfolgreicher Ausführung.
- **Echtzeit-Übersetzung (während des Tippens)** führt Übersetzungen durch, während Sie tippen.
- **Zeitlimit (ms)** legt fest, wie lange die App wartet, bevor eine Echtzeit-Übersetzung gestartet wird.

<br/>

<a id="keyboard-shortcuts"></a>
### Tastaturkürzel

Unter [**Einstellungen** > **Allgemeine Einstellungen**](#general-settings) steuert **Verhalten bei ENTER**, was passiert, wenn Sie `Enter` drücken:

- **Enter** kann die Aufgabe ausführen und **Shift+Enter** eine neue Zeile hinzufügen.
- Oder die App macht das Gegenteil.

Der aktuelle Modus wird auch auf der Schaltfläche **Übersetzen** angezeigt.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="rewrite"></a>
## Umformulieren

Verwenden Sie **Umformulieren**, wenn Sie den Ausdruck verbessern möchten, ohne die Kernaussage zu verändern.

![Umformulieren-Arbeitsbereich](../images/screenshots/de/rewrite.png)

Dies ist nützlich für:

- Rechtschreib- und Grammatikfehler beheben
- Text klarer machen
- Text formeller oder informeller gestalten
- Text kürzen oder erweitern
- Text technischer klingen lassen

<br/>

<a id="rewrite-text"></a>

### Text umschreiben

1. Öffnen Sie **Umschreiben**.
2. Wählen Sie einen **Modus**.
3. Wählen Sie ein Modell in der Symbolleiste.
4. Geben Sie Text im Feld **Eingabe** ein oder fügen Sie ihn ein.
5. Klicken Sie auf **Umschreiben**.
6. Prüfen Sie das Ergebnis im Feld **Ausgabe**.

Das gleiche Verhalten der Eingabetaste, das unter [**Übersetzen**](#keyboard-shortcuts) beschrieben ist, gilt auch hier.

<br/>

> 💡 **TIPP**<br/>
> Wenn Sie den Modus „**Rechtschreibung und Grammatik prüfen**“ verwenden, erscheint im Ausgabebereich eine Schaltfläche `Änderungen anzeigen`.  
> Klicken Sie darauf, um die Anzeige der Korrekturen umzuschalten und die spezifischen Änderungen am Text ein- oder auszublenden.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="transform"></a>
## Umwandeln

Verwenden Sie **Umwandeln**, wenn die KI einer benutzerdefinierten Anleitung folgen soll.

![Umwandeln-Arbeitsbereich](../images/screenshots/de/transform.png)

Dieser Bereich der Anwendung ist der flexibelste. Sie können ihn für Aufgaben wie folgende nutzen:

- Notizen zusammenfassen
- Aus einem Textentwurf eine ausgereifte E-Mail erstellen
- Wichtige Punkte extrahieren
- Text in ein bestimmtes Format umwandeln

<br/>

<a id="run-an-existing-prompt"></a>
### Vorhandene Anweisung ausführen

1. Öffnen Sie **Umwandeln**.
2. Wählen Sie eine Anweisung aus der Anweisungsliste.
3. Falls ein Feld **Zielsprache** erscheint, wählen Sie gegebenenfalls eine Sprache aus.
4. Geben Sie Text im Feld **Eingabe** ein oder fügen Sie ihn ein.
5. Klicken Sie auf **Umwandeln**.
6. Lesen Sie das Ergebnis im Feld **Ausgabe**.

<br/>

<a id="if-you-have-no-prompts-yet"></a>
### Wenn Sie noch keine Anweisungen haben

Wenn Ihre Anweisungsliste leer ist, klicken Sie auf **Beispielanweisungen laden**. Dadurch werden vorgefertigte Beispiele hinzugefügt, sodass Sie schnell loslegen können.

<br/>

> ℹ️ **HINWEIS**<br/>
> Die Beispielanweisungen werden auf Englisch bereitgestellt. Nach dem Laden können Sie eine Anweisung bearbeiten und die Funktion **Anweisung übersetzen** nutzen, um sie in Ihre Sprache zu übersetzen.

<br/>

<a id="create-a-prompt-quickly"></a>
### Schnelles Erstellen einer Anweisung

Der schnellste Weg, um eine Anweisung zu erstellen, ist:

1. Klicken Sie auf **Neue Anweisung**.
2. Klicken Sie auf **Anweisung generieren**.
3. Beschreiben Sie, was die Anweisung bewirken soll.
4. Wählen Sie ein Modell aus.
5. Lassen Sie die Anwendung einen Entwurf für Sie erstellen.
6. Prüfen Sie den Entwurf und klicken Sie auf **Speichern**.

![Anweisung generieren](../images/screenshots/de/transform-generate.png)

<br/>

<a id="edit-a-prompt"></a>
### Eine Anweisung bearbeiten

Wenn Sie eine Anweisung erstellen oder bearbeiten, wird auf der linken Seite der Editor angezeigt und auf der rechten Seite ein Testbereich.

![Editor für Umwandeln-Anweisungen](../images/screenshots/de/transform-prompt-edit.png)

Die wichtigsten Felder sind:

- **Name der Anweisung**: der Name, der in der Anweisungsliste angezeigt wird.
- **Anweisungshinweis (optional)**: eine kurze Beschreibung, die dem Benutzer bei der Ausführung der Anweisung angezeigt wird.
- **Modell-Rolle**: die allgemeine Rolle, die der KI zugewiesen wird, z. B. „Sie sind ein hilfreicher Assistent.“
- **Modellanweisungen (eine pro Zeile)**: die spezifischen Regeln, denen die KI folgen soll.
- **Beschreibung der Ausgabe**: ein kurzes Wort, das das Ergebnis beschreibt, z. B. „Zusammenfassung“ oder „Umschreibung“.
- **Temperatur (0,0 → 1,0)**: das Verhalten des Modells; siehe unten.
- **Zielsprache erfragen**: fügt beim Ausführen der Anweisung einen Sprachwähler hinzu.

Wenn der Fachbegriff **Temperatur** neu für Sie ist, stellen Sie sich Folgendes vor:

- Eine **niedrigere** Temperatur führt zu stabileren und vorhersehbareren Ergebnissen.
- Eine **höhere** Temperatur führt zu mehr Abwechslung und Kreativität.

Sie können außerdem nutzen:

- **`Anweisung generieren`**, um einen neuen Entwurf basierend auf einer einfachen Beschreibung zu erstellen
- **`Anweisung verbessern`**, um eine vorhandene Anweisung zu verfeinern
- **`Anweisung übersetzen`**, um die Felder der Anweisung zu übersetzen

<br/>

> ⚠️ **WARNUNG**<br/>
> Klicken Sie auf **`Speichern`**, bevor Sie auf **`Zurück zum Ausführen`** klicken. Wenn Sie zurückgehen, ohne zu speichern, gehen Ihre Änderungen verloren.

<br/>

<a id="test-a-prompt-before-using-it"></a>
### Eine Anweisung vorher testen

Der Testbereich rechts ermöglicht es Ihnen, Ihre Anweisung mit Beispieltext auszuprobieren, bevor Sie sie im regulären Arbeitsablauf verwenden.

Dies ist hilfreich, wenn:

- Sie eine neue Anweisung erstellen
- Sie zwei Versionen einer Anweisung vergleichen möchten
- Sie Ton, Länge oder Format der Ausgabe überprüfen möchten

<br/>

<a id="manage-saved-prompts"></a>
### Gespeicherte Anweisungen verwalten

Um gespeicherte Anweisungen zentral zu verwalten, öffnen Sie [**Einstellungen** > **Umwandeln-Anweisungen**](#transform-prompts).

Dort können Sie:

- Ihre Anweisungen auflisten und löschen
- Anweisungen als **JSON**, **CSV** oder **XLSX** exportieren
- Anweisungen aus einer Datei importieren

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="dashboard"></a>

## Dashboard

Nutzen Sie das **Dashboard**, um zu sehen, wie intensiv Sie die App nutzen und welche Kosten entstehen (bei kostenpflichtigen Modellen).

![Dashboard-Zusammenfassung](../images/screenshots/de/dashboard-summary.png)


<br/>

> ℹ️ **HINWEIS**<br/>
> Wenn Sie nur kostenlose Modelle verwenden, bleiben die kostenbezogenen Diagramme leer.

<br/>

<a id="filter-the-data"></a>
### Daten filtern

Verwenden Sie die Filterknöpfe oben, um den Zeitraum zu ändern.

![Dashboard-Filter](../images/screenshots/de/dashboard-filter.png)

<br/>

> ℹ️ **HINWEIS**<br/>
> Der **Benutzer**-Filter ist in der Webversion nur für Administratoren sichtbar. Reguläre Benutzer sehen diesen Filter nicht, und er ist auch nicht in der Desktop-App verfügbar.

<br/>

<a id="dashboard-tabs"></a>
### Dashboard-Tabs

- **Zusammenfassung** bietet einen Überblick über Nutzung und Kosten.
- **Nach Nutzung** unterteilt die Aktivitäten nach Übersetzungssprache, Umschreibungsmodus und Transformationsprompt.
- **Nach Modell** zeigt, welche Modelle Sie verwendet haben und wie viel sie gekostet haben.
- **Nach Tag** zeigt die täglichen Gesamtwerte an.
- **Alle Aufrufe** zeigt den vollständigen Aufrufverlauf und ermöglicht den Export.

<br/>

<a id="export-data"></a>
### Daten exportieren

Die Dashboard-Tabellen können Daten exportieren als:

- **JSON**
- **CSV**
- **XLSX**

Das ist nützlich, wenn Sie Aktivitäten außerhalb der App überprüfen oder einen Bericht teilen möchten.

<br/>

<a id="delete-stored-records-for-a-model"></a>
### Gespeicherte Einträge für ein Modell löschen

Unter **Nach Modell** oder **Alle Aufrufe** können Sie gespeicherte Einträge für ein Modell entfernen, indem Sie auf das „Papierkorb“-Symbol klicken.

> ⚠️ **WARNUNG**<br/>
> Das Löschen gespeicherter Einträge kann nicht rückgängig gemacht werden. Verwenden Sie diese Funktion nur, wenn Sie sicher sind, dass Sie den Verlauf nicht mehr benötigen.

Um alle Daten zu löschen oder Einträge nach ihrem Alter zu entfernen, gehen Sie zu [**Einstellungen** > **Kostenverfolgung**](#cost-tracking). Dort finden Sie Optionen, um alle gespeicherten Daten oder nur Daten, die älter als ein bestimmtes Datum sind, zu löschen.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="history"></a>
## Verlauf

Klicken Sie auf **Verlauf**, um den Verlauf Ihrer Aktionen in **Transrewrt** einzusehen, einschließlich der Eingabe und Ausgabe jeder Operation.

![Verlaufsseite](../images/screenshots/de/history.png)

<br/>

<a id="filter-the-history"></a>
### Verlauf filtern

**Verlauf** verwendet dieselben Filter wie die **Dashboard**-Seite. Nutzen Sie sie, um den gewünschten Zeitraum auszuwählen.

![Dashboard-Filter](../images/screenshots/de/dashboard-filter.png)

<br/>

> ℹ️ **HINWEIS**<br/>
> Der **Benutzer**-Filter ist in der Webversion nur für Administratoren sichtbar. Reguläre Benutzer sehen diesen Filter nicht, und er ist auch nicht in der Desktop-App verfügbar.

<br/>

<a id="export-history-data"></a>
### Verlaufsdaten exportieren

Die Verlaufsseite kann die gefilterten Daten exportieren als:

- **JSON**
- **CSV**
- **XLSX**

Das ist nützlich, wenn Sie Aktivitäten außerhalb der App überprüfen oder einen Bericht teilen möchten.

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
  | Kostenverfolgung  |   ja   |     ja     |         —          |
  | Transformationsprompts |   ja   |     ja     |        ja         |
  | Benutzer           |    —    |     ja     |         —          |
  | API-Konfiguration  |   ja   |     ja     |         —          |
  | Über               |   ja   |     ja     |        ja         |

<br/>

> ℹ️ **HINWEIS**<br/>
> In der Webversion verfügt jeder Benutzer über eine eigene Konfiguration. Einstellungen wie ausgewählte Modelle, Sprachen, allgemeine Optionen und Transformationsprompts werden pro Benutzer gespeichert. Änderungen, die Sie vornehmen, wirken sich nicht auf andere Benutzer aus.

<br/>


[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="general-settings"></a>

### Allgemeine Einstellungen

Verwenden Sie die **Allgemeinen Einstellungen**, um das Schreibverhalten, die Speicherung von Ausführungsdetails für die **Verlaufsübersicht** und die Darstellung zu steuern.

**Verhalten**

- **Verhalten für ENTER** legt fest, ob die `Eingabetaste` die Aufgabe ausführt oder eine neue Zeile einfügt.
- **Automatische Übersetzung beim Einfügen** startet die Übersetzung, sobald Sie Text einfügen.
- **Ergebnis automatisch in Zwischenablage kopieren** kopiert erfolgreiche Ergebnisse automatisch.
- **Echtzeit-Übersetzung (während des Tippens)** übersetzt, während Sie tippen.
- **Timeout (ms)** legt die Wartezeit für die Echtzeit-Übersetzung fest.

**Verlauf**

- **Ausführungsverlauf speichern** steuert, ob jede Übersetzung, Neuschreibung und Umwandlung **Eingabe- und Ausgabetext** für die Seitenleistenansicht [**Verlauf**](#history) speichert. Bei Deaktivierung erfolgt eine Bestätigungsaufforderung; bei Bestätigung wird der gespeicherte Verlaufstext aus der Datenbank entfernt.
- **Verlaufsdaten löschen** ermöglicht das Entfernen gespeicherter Texte nach Alter (z. B. älter als einige Monate oder **alle Daten (leeren)**) über **Daten löschen**. Dies betrifft nur den gespeicherten Ausführungstext für die **Verlauf**-Ansicht; **Kosten- und Nutzungsdaten** werden dadurch **nicht** gelöscht. Um **Kosten**-Daten zu entfernen oder zu bereinigen, verwenden Sie [**Einstellungen** > **Kostenverfolgung**](#cost-tracking).

**Darstellung**

- **Kosten-Nachkommastellen** ändert die Anzeige von Dezimalstellen bei Kosten.
- **Nur für Web:** **Abstand um die App anzeigen** fügt zusätzlichen Platz um die Oberfläche hinzu.
- **Schriftart** ändert die Schriftart in den Textfeldern.
- **Größe** ändert die Schriftgröße.


<br/>

<a id="models"></a>
### Modelle

Verwenden Sie **Einstellungen** > **Modelle**, um festzulegen, welche Modelle in der Symbolleiste erscheinen.

![Registerkarte Modelle in den Einstellungen](../images/screenshots/de/settings-models.png)

Die Seite enthält zwei Listen:

- **Verfügbare Modelle** links
- **Ausgewählte Modelle** rechts

Nützliche Bedienelemente sind unter anderem:

- **Modelle suchen...** zum Finden eines Modells nach Namen
- **Anbieter-Chips**, um die Liste auf einen Anbieter einzuschränken (OpenRouter, OpenAI, Ollama, …)
- **Nur kostenlos**, um nur kostenlose Modelle anzuzeigen
- **Aktualisieren**, um die Liste neu zu laden
- **Alle ausklappen** und **Alle einklappen**, wenn Sie nach Anbietern sortieren

Modell-IDs enthalten das Präfix des Anbieters (z. B. `openrouter/…` vs. `openai/…`). Kennzeichnungen wie **OpenAI (OpenRouter)** vs. **OpenAI (direkt)** zeigen, wie der Datenverkehr weitergeleitet wird.

Aktionen:

 - Um ein Modell hinzuzufügen, klicken Sie auf **Hinzufügen** oder beliebig auf den Eintrag.

 - Um ein Modell zu entfernen, klicken Sie auf das **X** daneben in **Ausgewählte Modelle** oder auf **Ausgewählt** im Eintrag unter Verfügbare Modelle.

 - Um die Liste zu leeren, klicken Sie auf **Alle abwählen**. Das erforderliche kostenlose Modell bleibt in der Liste erhalten.

<br/>

> ℹ️ **HINWEIS**<br/>
> Falls Sie keine Guthaben auf OpenRouter hinzufügen möchten, aktivieren Sie zunächst **Nur kostenlos** und wählen Sie die kostenlosen Modelle (keine Kreditkarte erforderlich). Sie können auch Ollama verwenden, um Modelle lokal ohne API-Schlüssel auszuführen.

<br/>

<a id="languages"></a>
### Sprachen

Verwenden Sie **Einstellungen** > **Sprachen**, um die Sprachlisten in der Anwendung zu organisieren.

- **Bevorzugte Sprachen** werden oben in den Sprachlisten bei **Übersetzen** und **Umwandeln** fixiert.
- **Benutzerdefinierte Sprache** ermöglicht das Hinzufügen einer Sprache, die nicht in der integrierten Liste enthalten ist.

Falls Sie eine benutzerdefinierte Sprache hinzufügen, erscheint sie in den Sprachauswahlen neben den vordefinierten Optionen.

<br/>

<a id="cost-tracking"></a>
### Kostenverfolgung

Verwenden Sie **Einstellungen** > **Kostenverfolgung**, um Kosteninformationen zu verwalten.

- **Gesamtkosten** zeigt die laufende Summe an.
- **Wert kopieren** kopiert die Gesamtsumme in die Zwischenablage.
- **Kosten zurücksetzen** setzt die gespeicherte Summe auf Null zurück.
- **Mit API-Nutzung synchronisieren** setzt die Summe auf den Wert der Nutzung, die in Ihrem OpenRouter-Konto angezeigt wird (nur OpenRouter).
- **API-Nutzung** zeigt OpenRouter-Nutzungsdetails an, falls verfügbar.
- **Kostendaten löschen** entfernt alle Daten oder nur Einträge, die älter als ein bestimmtes Datum sind.

**Kostenverfolgung:** Bei Verwendung von OpenRouter-Modellen zeigt die Anwendung Ihre tatsächliche Nutzung und Ausgaben basierend auf OpenRouter-Daten an. Für alle anderen Anbieter schätzt die Anwendung die Kosten anhand der von OpenRouter veröffentlichten Preise. Ist kein Preis verfügbar, kann die Schätzung Null betragen.

<br/>

> ℹ️ **HINWEIS**<br/>
> Alle Kostenangaben dienen ausschließlich Ihrer Orientierung und sind keine offiziellen Rechnungsangaben.


<br/>

> ⚠️ **WARNUNG**<br/>
> Das Löschen von Daten kann nicht rückgängig gemacht werden. Sichern Sie Ihre Daten vor dem Löschen oder exportieren Sie sie über [**Dashboard** > **Alle Aufrufe**](#dashboard-tabs), andernfalls gehen sie dauerhaft verloren. <br/> 
> Der gesamte Verlauf zu jedem API-Aufruf wird ebenfalls gelöscht.

<br/>

<a id="transform-prompts"></a>

### Aufforderungen bearbeiten

Verwenden Sie **Einstellungen** > **Aufforderungen transformieren**, um Aufforderungen in großer Zahl zu verwalten.

Sie können:

- gespeicherte Aufforderungen überprüfen
- Aufforderungen löschen
- Aufforderungen aus einer Datei importieren
- Aufforderungen zur Sicherung oder zum Austauschen exportieren

<br/>

<a id="users"></a>
### Benutzer

**Web: Nur Administrator**

Verwenden Sie **Benutzer**, um Benutzerkonten in der Web-Version zu verwalten. Sie können Benutzer hinzufügen, ihre Daten aktualisieren, Passwörter zurücksetzen und Konten löschen.

<br/>

<a id="api-config"></a>
### API-Konfiguration

Unterstützte Anbieter sind: OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, und **Ollama** (lokale Modelle über eine Basis-URL). Sie müssen nur die Anbieter konfigurieren, die Sie verwenden.

**Webanwendung: Nur Administrator**

API-Schlüssel werden über System- oder Docker-Umgebungsvariablen konfiguriert – sie werden nicht über die Web-Oberfläche eingegeben. Auf dieser Seite sehen Sie, für welche Anbieter ein Schlüssel konfiguriert ist, und können jeden einzelnen durch Anklicken der Schaltfläche **`Test`** überprüfen.

<br/>

> ℹ️ **HINWEIS**<br/>
> Um einen API-Schlüssel zu ändern, aktualisieren Sie die Umgebungsvariable in Ihrer System- oder Docker-Konfiguration und starten Sie den Server oder Container neu.

<br/>

**Desktop-Anwendung**

Verwenden Sie **API-Konfiguration**, um API-Schlüssel für jeden verwendeten Anbieter zu speichern. Bei Ollama geben Sie stattdessen die **Basis-URL** ein, anstatt einen API-Schlüssel einzutragen.


<br/>

> 💡 **Tipp** <br/>
> Wenn Sie keinen API-Schlüssel verwenden oder Kosten vermeiden möchten, können Sie [Ollama herunterladen](https://ollama.com) und Modelle kostenlos lokal auf Ihrem Gerät ausführen. Alternativ können Sie ein kostenloses OpenRouter-Konto erstellen (keine Kreditkarte nötig), um deren kostenlose Modelle zu nutzen.

- Fügen Sie nur die Anbieter hinzu, die Sie benötigen. Unter **Einstellungen** > **Modelle** beginnt jede Modell-ID mit dem Anbieter (z. B. `openrouter/openrouter/free`, `openai/gpt-4o`, `ollama/llama3`).

Um einen API-Schlüssel hinzuzufügen, geben Sie den Wert in das Textfeld ein und klicken Sie auf **`Speichern`**. Um einen vorhandenen Schlüssel zu ersetzen, klicken Sie auf **`Bearbeiten`**. Um zu prüfen, ob ein Schlüssel funktioniert, klicken Sie auf **`Test`**.

<br/>

> ℹ️ **HINWEIS**<br/>
> Der aktuelle Wert eines API-Schlüssels ist nicht sichtbar. Sie können ihn nur über die Schaltfläche **`Bearbeiten`** ersetzen.
> API-Schlüssel werden verschlüsselt in der Konfigurationsdatei gespeichert.

<br/>

Ausführliche Anweisungen zum Abrufen eines OpenRouter-Schlüssels finden Sie oben unter [So erhalten Sie einen API-Schlüssel](#how-to-get-an-api-key-desktop-app).

<br/>

<a id="about"></a>
### Über

Die Registerkarte **Über** zeigt Folgendes an:

- den App-Namen
- die Versionsnummer
- das Erstellungsdatum
- einen Link zum Projekt-Repository

<br/><br/>

<a id="common-issues"></a>
## Häufige Probleme

Wenn etwas nicht wie erwartet funktioniert, prüfen Sie zunächst die folgenden Punkte.

<br/>

<a id="the-app-will-not-translate-rewrite-or-transform-text"></a>
### Die App übersetzt, schreibt um oder transformiert Text nicht

Prüfen Sie, ob:

- Sie ein Modell in der Symbolleiste ausgewählt haben
- mindestens ein Modell unter [**Einstellungen** > **Modelle**](#models) aufgelistet ist
- Ihre API-Konfiguration funktioniert

Wenn Sie die Desktop-App verwenden:

1. Öffnen Sie [**Einstellungen** > **API-Konfiguration**](#api-config).
2. Prüfen Sie, ob mindestens ein API-Schlüssel gespeichert ist.
3. Klicken Sie neben dem Anbieter auf **Test**, um sicherzustellen, dass der Schlüssel funktioniert.

<br/>

<a id="the-model-list-is-empty"></a>
### Die Modellliste ist leer

Öffnen Sie [**Einstellungen** > **Modelle**](#models) und klicken Sie auf **Aktualisieren**.

Gegebenenfalls:

- suchen Sie nach einem Modell
- aktivieren Sie **Nur kostenlos**
- fügen Sie ein oder mehrere Modelle zu **Ausgewählte Modelle** hinzu

<br/>

<a id="the-result-is-too-slow-or-too-expensive"></a>
### Das Ergebnis ist zu langsam oder zu teuer

Versuchen Sie eines oder mehrere der folgenden Maßnahmen:

- wählen Sie ein anderes Modell
- verwenden Sie eine kürzere Eingabe
- deaktivieren Sie **Echtzeitübersetzung (beim Schreiben)** unter [**Einstellungen** > **Allgemeine Einstellungen**](#general-settings)
- verwenden Sie kostenlose Modelle für einfache Aufgaben (siehe [Modelle](#models))

<br/>

<a id="the-interface-is-in-the-wrong-language"></a>
### Die Benutzeroberfläche verwendet die falsche Sprache

Klicken Sie auf das Globus-Symbol in der [Symbolleiste](#toolbar) und wählen Sie Ihre gewünschte **Benutzersprache**.

<br/>

<a id="the-text-is-too-small-or-hard-to-read"></a>
### Der Text ist zu klein oder schwer lesbar

Öffnen Sie [**Einstellungen** > **Allgemeine Einstellungen**](#general-settings) und ändern Sie:

- **Schriftart**
- **Größe**

<br/>

<a id="dashboard-charts-are-empty"></a>
### Dashboard-Diagramme sind leer

Dies ist normal, wenn:

- Sie nur **kostenlose Modelle** verwenden (Kostendiagramme bleiben leer)
- der gewählte **Zeitfilter** den Zeitraum nicht abdeckt, in dem Aufrufe stattfanden – probieren Sie **Alle**, um dies zu prüfen

Wenn die Diagramme auch nach Auswahl von **Alle** leer bleiben, stellen Sie sicher, dass Aufrufe im [**Verlauf**](#history) oder auf der Registerkarte **Alle Aufrufe** angezeigt werden.

<br/>

<a id="cost-shows-not-available-or-seems-wrong"></a>

### Kosten anzeigen „nicht verfügbar“ oder scheinen falsch

Wenn Sie Modelle über **OpenRouter** verwenden, zeigt die App Ihre tatsächlichen, von OpenRouter gemeldeten Ausgaben an.

Bei **anderen Anbietern** (OpenAI direkt, Anthropic direkt usw.) werden die Kosten anhand der von OpenRouter veröffentlichten Preisdaten geschätzt. Wenn für ein Modell kein passender Preis gefunden wird, wird die Kostenangabe als **nicht verfügbar** angezeigt und nicht zur Gesamtsumme hinzugerechnet.

<br/>

<a id="total-cost-does-not-match-my-provider-bill"></a>
### Die Gesamtkosten stimmen nicht mit meiner Anbieterrechnung überein

Alle Kostenangaben in der App sind **Schätzungen zur Orientierung**, keine offiziellen Abrechnungen.

Um die Gesamtkosten Ihrer tatsächlichen OpenRouter-Ausgaben näher zu bringen, öffnen Sie [**Einstellungen** > **Kostenverfolgung**](#cost-tracking) und klicken Sie auf **Mit API-Nutzung synchronisieren**.

<br/>

<a id="the-history-page-is-missing-from-the-sidebar"></a>
### Die Seite „Verlauf“ fehlt in der Seitenleiste

Die Option **Ausführungsverlauf speichern** könnte deaktiviert sein. Öffnen Sie [**Einstellungen** > **Allgemeine Einstellungen**](#general-settings) und aktivieren Sie diese. Beachten Sie, dass bereits gelöschte Verlaufsdaten durch das Aktivieren nicht wiederhergestellt werden.

<br/>

<a id="web-app-session-expired"></a>
### Web-App: unerwartete Weiterleitung zur Anmeldeseite

Ihre Sitzung ist möglicherweise abgelaufen. Melden Sie sich erneut an. Falls dies häufig vorkommt, überprüfen Sie die Serverkonfiguration hinsichtlich der Sitzungsdauer.

<br/>

<a id="dashboard-shows-no-data-for-other-users"></a>
### Dashboard zeigt keine Daten für andere Benutzer (Web)

Nur **Administratoren** können über den **Benutzer**-Filter Daten aller Benutzer einsehen. Normale Benutzer sehen standardmäßig ausschließlich ihre eigene Aktivität.

<br/>

<a id="i-changed-a-prompt-and-lost-the-edits"></a>
### Ich habe eine Eingabeaufforderung (Prompt) bearbeitet und die Änderungen sind verloren

Während der Bearbeitung eines Prompts klicken Sie immer zuerst auf **Speichern**, bevor Sie auf **Zurück zur Ausführung** klicken.

<br/><br/>

<a id="quick-tips"></a>
## Kurztipps

- Beginnen Sie mit [**Übersetzen**](#translate), um sicherzustellen, dass Ihre Einrichtung funktioniert, bevor Sie zu [**Umformulieren**](#rewrite) oder [**Transformieren**](#transform) übergehen.
- Nutzen Sie [**Umformulieren**](#rewrite) für alltägliche Verbesserungen der Textformulierung.
- Verwenden Sie [**Transformieren**](#transform), wenn Sie einen wiederholbaren Ablauf für eine bestimmte Aufgabe benötigen.
- Nutzen Sie das [**Dashboard**](#dashboard), wenn Sie Nutzung und Kosten im Blick behalten möchten.
- Nutzen Sie den [**Verlauf**](#history), um vergangene Aktionen sowie deren vollständigen Eingabe- und Ausgabetext einzusehen.
- Exportieren Sie regelmäßig Ihre Prompts, wenn Sie eine Prompt-Bibliothek erstellen, die Sie sicher aufbewahren möchten (siehe [Prompts transformieren](#transform-prompts)) oder wenn Sie sie mit anderen teilen möchten.

<br/><br/>

<a id="disclaimer"></a>
## Haftungsausschluss

Produktnamen und Symbole gehören ihren jeweiligen Eigentümern und dienen ausschließlich der Identifikation. Diese Software ist nicht mit den genannten Marken verbunden oder von ihnen unterstützt.

<br/><br/>

<a id="license"></a>
## Lizenz

Urheberrecht © 2026 Waldemar Scudeller Jr.

[Apache License 2.0](LICENSE)