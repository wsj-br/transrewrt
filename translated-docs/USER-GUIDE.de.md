---
translated_at: "2026-03-26T00:38:21.224Z"
source_hash: "87f5e7618cbfd3084efeecba28440ecccb03450da2ae8fe4c6f91c75cb7f4981"
source_mtime: 1774482557035.2158
model: "qwen/qwen3-235b-a22b-2507"
---
![Transrewrt-Banner](../images/transrewrt_banner.png)


<a id="transrewrt-user-guide"></a>
# Benutzerhandbuch

<br/>

<a id="introduction"></a>
## Einführung

Transrewrt hilft Ihnen, mit Text auf drei Hauptweisen zu arbeiten:

- **Übersetzen** – Text von einer Sprache in eine andere umwandeln.
- **Umformulieren** – Text in einem anderen Stil neu formulieren, etwa klarer, kürzer oder formeller.
- **Transformieren** – Text mit benutzerdefinierten KI-Anweisungen verarbeiten, sogenannten *Prompts*.

<br/>

Dieses Handbuch erklärt die Anwendung des Programms nach der Installation und Inbetriebnahme. Für Installationsanleitungen konsultieren Sie bitte die Hauptdatei **[README](README.de.md)**.

<br/>

> ℹ️ **HINWEIS**<br/>
> Transrewrt ist als Desktop-App für Windows und Linux sowie als selbstgehostete Web-App verfügbar. Dieses Handbuch konzentriert sich auf die tägliche Nutzung der App. Wo etwas nur auf eine bestimmte Version zutrifft, wird dies explizit gekennzeichnet.

<small>**In anderen Sprachen lesen:** </small>
<small id="lang-list"> [English (UK)](../USER-GUIDE.md) · [Português (BR)](USER-GUIDE.pt-BR.md) · [العربية](USER-GUIDE.ar.md) · [বাংলা](USER-GUIDE.bn.md) · [Català](USER-GUIDE.ca.md) · [简体中文](USER-GUIDE.zh-CN.md) · [繁體中文](USER-GUIDE.zh-TW.md) · [Hrvatski](USER-GUIDE.hr.md) · [Čeština](USER-GUIDE.cs.md) · [Nederlands](USER-GUIDE.nl.md) · [English (US)](USER-GUIDE.en-US.md) · [Filipino](USER-GUIDE.tl.md) · [Français](USER-GUIDE.fr.md) · [Deutsch](USER-GUIDE.de.md) · [Ελληνικά](USER-GUIDE.el.md) · [हिन्दी](USER-GUIDE.hi.md) · [Magyar](USER-GUIDE.hu.md) · [Italiano](USER-GUIDE.it.md) · [日本語](USER-GUIDE.ja.md) · [Basa Jawa](USER-GUIDE.jv.md) · [한국어](USER-GUIDE.ko.md) · [Bahasa Melayu](USER-GUIDE.ms.md) · [فارسی](USER-GUIDE.fa.md) · [Polski](USER-GUIDE.pl.md) · [Português (PT)](USER-GUIDE.pt.md) · [ਪੰਜਾਬੀ](USER-GUIDE.pa.md) · [Română](USER-GUIDE.ro.md) · [Русский](USER-GUIDE.ru.md) · [Slovenčina](USER-GUIDE.sk.md) · [Español](USER-GUIDE.es.md) · [Kiswahili](USER-GUIDE.sw.md) · [Svenska](USER-GUIDE.sv.md) · [తెలుగు](USER-GUIDE.te.md) · [ภาษาไทย](USER-GUIDE.th.md) · [Türkçe](USER-GUIDE.tr.md) · [Українська](USER-GUIDE.uk.md) · [Tiếng Việt](USER-GUIDE.vi.md)</small>

<small>

> **Hinweis zu Übersetzungen der Benutzeroberfläche und Dokumentation:** Alle Sprachen der Benutzeroberfläche außer dem ursprünglichen Englisch (UK) wurden mithilfe von KI-Modellen übersetzt; die Formulierungen können ungenau oder fehlerhaft sein.

</small>

<br/>


<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Inhaltsverzeichnis** 

- [Bevor Sie beginnen](#before-you-start)
  - [So erhalten Sie einen kostenlosen OpenRouter-API-Schlüssel (für die Desktop-App)](#how-to-get-a-free-openrouter-api-key-desktop-app)
- [Erste Schritte](#getting-started)
- [Hauptbestandteile des Fensters](#main-parts-of-the-window)
  - [Seitenleiste](#sidebar)
  - [Werkzeugleiste](#toolbar)
  - [Eingabe- und Ausgabebereiche](#input-and-output-panels)
- [Übersetzen](#translate)
  - [Text übersetzen](#translate-text)
  - [Sprachauswahl](#language-selection)
  - [Nützliche Übersetzungseinstellungen](#helpful-translation-settings)
- [Umformulieren](#rewrite)
- [Transformieren](#transform)
  - [Einen existierenden Prompt ausführen](#run-an-existing-prompt)
  - [Wenn noch keine Prompts vorhanden sind](#if-you-have-no-prompts-yet)
  - [Schnell einen Prompt erstellen](#create-a-prompt-quickly)
  - [Einen Prompt bearbeiten](#edit-a-prompt)
  - [Einen Prompt vor der Nutzung testen](#test-a-prompt-before-using-it)
- [Dashboard](#dashboard)
  - [Daten filtern](#filter-the-data)
  - [Dashboard-Registerkarten](#dashboard-tabs)
  - [Daten exportieren](#export-data)
  - [Gespeicherte Einträge für ein Modell löschen](#delete-stored-records-for-a-model)
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
  - [Über](#about)
- [Häufige Probleme](#common-issues)
  - [Die App übersetzt, umformuliert oder transformiert keinen Text](#the-app-will-not-translate-rewrite-or-transform-text)
  - [Die Modellliste ist leer](#the-model-list-is-empty)
  - [Das Ergebnis ist zu langsam oder zu teuer](#the-result-is-too-slow-or-too-expensive)
  - [Die Oberfläche ist in der falschen Sprache](#the-interface-is-in-the-wrong-language)
  - [Der Text ist zu klein oder schwer lesbar](#the-text-is-too-small-or-hard-to-read)
  - [Dashboard-Diagramme sind leer](#dashboard-charts-are-empty)
  - [Die Kosten zeigen „nicht verfügbar“ oder sind falsch](#cost-shows-not-available-or-seems-wrong)
  - [Die Gesamtkosten stimmen nicht mit der Rechnung meines Anbieters überein](#total-cost-does-not-match-my-provider-bill)
  - [Die Seite „Verlauf“ fehlt in der Seitenleiste](#the-history-page-is-missing-from-the-sidebar)
  - [Web-App: Unerwartete Weiterleitung zur Anmeldeseite](#web-app-redirected-to-the-login-page-unexpectedly)
  - [Dashboard zeigt keine Daten für andere Benutzer an (Web)](#dashboard-shows-no-data-for-other-users-web)
  - [Ich habe einen Prompt geändert und die Änderungen sind verloren](#i-changed-a-prompt-and-lost-the-edits)
- [Schnelltipps](#quick-tips)
- [Haftungsausschluss](#disclaimer)
- [Lizenz](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="before-you-start"></a>

## Bevor Sie beginnen

Um Transrewrt nutzen zu können, benötigen Sie Zugriff auf mindestens einen KI-Anbieter. Unterstützte Anbieter sind: [OpenRouter](https://openrouter.ai) (bündelt viele Modelle), OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras und [Ollama](https://ollama.com) für lokale Modelle.

Sie müssen kein kostenpflichtiges Modell auswählen, um loszulegen. Sobald Sie Ihren OpenRouter-API-Schlüssel hinzufügen, aktiviert die App automatisch eine integrierte **kostenlose** OpenRouter-Option. Damit können Sie sofort mit dem Übersetzen, Umformulieren und Umwandeln von Texten beginnen. Alternativ können Sie auch einen kostenlosen API-Schlüssel von Cerebras, Google, Groq oder Mistral AI beziehen.

Einfach ausgedrückt:

- Ein **Modell** ist die KI-Engine, die die Arbeit übernimmt. Modelle werden mit einem **Anbieter-Präfix** angezeigt (z. B. `openrouter/…`, `openai/…`, `ollama/…`).
- Ein **API-Schlüssel** (bzw. für Ollama eine **Basis-URL**) ermöglicht der App den Zugriff auf diesen Anbieter.

Wenn Sie die **Desktop-App** verwenden, fügen Sie die Schlüssel unter [**Einstellungen** > **API-Konfiguration**](#api-config) für jeden von Ihnen genutzten Anbieter hinzu. Falls Sie nur OpenRouter nutzen möchten, lesen Sie unten unter [So erhalten Sie einen API-Schlüssel](#how-to-get-an-api-key-desktop-app). Wenn Sie keinen API-Schlüssel verwenden möchten, können Sie stattdessen Ollama (von [ollama.com](https://ollama.com)) installieren und lokale Modelle verwenden, beispielsweise `translategemma:4b`.

Wenn Sie die **Webversion** nutzen, konfiguriert der Serverbetreiber die Anbieter über Umgebungsvariablen, daher können Sie keine API-Schlüssel direkt in der Anwendung eingeben.

<br/>

<a id="how-to-get-an-api-key-desktop-app"></a>
### So erhalten Sie einen kostenlosen OpenRouter-API-Schlüssel (Desktop-App)

Folgen Sie diesen Schritten, wenn Sie die Desktop-App nutzen:

1. Gehen Sie in Ihrem Webbrowser zu [OpenRouter](https://openrouter.ai).
2. Erstellen Sie ein Konto oder melden Sie sich an.
3. Rufen Sie die Seite [Keys](https://openrouter.ai/keys) auf.
4. Klicken Sie auf die Schaltfläche, um einen neuen API-Schlüssel zu erstellen.
5. Geben Sie dem Schlüssel einen Namen, damit Sie ihn später wiedererkennen.
6. Kopieren Sie den neuen API-Schlüssel.
7. Wechseln Sie zurück zu Transrewrt und öffnen Sie **Einstellungen** > **API-Konfiguration**.
8. Fügen Sie den Schlüssel in das Feld **OpenRouter-API-Schlüssel** ein (unter **Einstellungen** > **API-Konfiguration**).
9. Klicken Sie auf **OpenRouter-Schlüssel testen**, um sicherzustellen, dass er funktioniert.

<br/><br/>

<a id="getting-started"></a>
## Erste Schritte

Wenn Sie Transrewrt zum ersten Mal verwenden, folgen Sie dieser Reihenfolge:

1. Öffnen Sie die Anwendung.
2. Wählen Sie gegebenenfalls Ihre **Benutzersprache** über das Globus-Symbol aus.
3. Wenn Sie die **Desktop-App** nutzen, öffnen Sie [**Einstellungen** > **API-Konfiguration**](#api-config), fügen Sie einen API-Schlüssel für mindestens einen Anbieter (z. B. OpenRouter) hinzu und klicken Sie auf **Testen**, um dessen Funktion zu überprüfen.
4. Öffnen Sie [**Einstellungen** > **Modelle**](#models) und fügen Sie ein oder mehrere Modelle zu **Ausgewählte Modelle** hinzu.
5. Öffnen Sie [**Einstellungen** > **Sprachen**](#languages) und wählen Sie Ihre **Bevorzugten Sprachen**, falls Sie möchten, dass Ihre am häufigsten genutzten Sprachen zuerst angezeigt werden.
6. Gehen Sie zu **Übersetzen** und führen Sie eine einfache Übersetzung durch, um sicherzustellen, dass alles funktioniert.
7. Sobald dies erfolgreich war, probieren Sie **Umformulieren** und danach **Umwandeln** aus.

Diese Reihenfolge ist wichtig, da sie das häufigste Anfängerproblem verhindert: einen Auftrag auszuführen, bevor die App eine funktionierende API-Verbindung oder ein ausgewähltes Modell hat.

<br/><br/>

<a id="main-parts-of-the-window"></a>
## Hauptbestandteile des Fensters

Die Anwendung ist in drei Hauptbereiche unterteilt:

- Die **Seitenleiste** auf der linken Seite.
- Die **Symbolleiste** oben.
- Der **Arbeitsbereich** in der Mitte.

<br/>

<a id="sidebar"></a>
### Seitenleiste

Verwenden Sie die Seitenleiste, um innerhalb der App zu navigieren. Sie können die Seitenleiste durch Klicken auf das Symbol neben dem App-Logo einblenden oder ausblenden, um mehr Platz zu gewinnen.

<br/>

<table>
  <tr>
    <td valign="top">
       <img src="../images/screenshots/de/sidebar.png" alt="Anwendungsseitenleiste" style="max-width: 100%; border: 1px solid #ddd; border-radius: 4px;">
    </td>
    <td valign="top">
      <br/><br/>
      <ul>
        <li><strong>Übersetzen</strong> öffnet den Arbeitsbereich für Übersetzungen.</li><br/>
        <li><strong>Umformulieren</strong> öffnet den Arbeitsbereich für Umformulierungen.</li><br/>
        <li><strong>Umwandeln</strong> öffnet den Arbeitsbereich für benutzerdefinierte Anweisungen (Prompts).</li><br/>
        <li><strong>Dashboard</strong> zeigt Informationen zur Nutzung und zu Kosten.</li><br/>
        <li><strong>Einstellungen</strong> öffnet das Einstellungsfenster.</li><br/>
        <li><strong>Verlauf</strong> zeigt den Nutzungsverlauf mit Eingabe- und Ausgabetexten.</li><br/>
        <li><strong>Benutzer</strong> zeigt den Benutzernamen des angemeldeten Benutzers (nur im Web).</li>
      </ul>
    </td>
  </tr>
</table>

<br/>

<a id="toolbar"></a>

### Symbolleiste

Die Symbolleiste ändert sich leicht, je nachdem, wo Sie sich in der App befinden.

- Links wird der Name der aktuellen Seite angezeigt.
- Rechts befinden sich der **Modellauswahlknopf** und die Steuerung für die **Benutzeroberflächensprache**.

Über die **Modellauswahl** können Sie entscheiden, welches KI-Modell für die aktuelle Aufgabe verwendet werden soll.

  ![Modellauswahl](../images/screenshots/de/model-selector.png)

Einige kostenlose Modelle sind möglicherweise nicht immer verfügbar – manchmal sind sie offline oder haben eine Nutzungsobergrenze. Sollte dies der Fall sein, wird das Modell automatisch aus Ihrer Liste verfügbarer Modelle entfernt. Um zu steuern, welche Modelle angezeigt werden, gehen Sie zu [**Einstellungen** > **Modelle**](#models) und bearbeiten Sie Ihre Modellliste. 
Sie können die Modelleinstellungen auch direkt öffnen, indem Sie auf das Anbietersymbol links neben dem Modellnamen in der Symbolleiste klicken.

<br/>

Das **Globussymbol + Sprachcode** ändert die Sprache der App-Oberfläche, z. B. Menüs und Schaltflächen. Es ändert **nicht** die Übersetzungssprachen, die im Bereich **Übersetzen** verwendet werden.

  ![Sprachauswahl für die Oberfläche](../images/screenshots/de/language-selector.png)

<br/>

<a id="input-and-output-panels"></a>
### Eingabe- und Ausgabefelder

Die meisten Arbeitsbereiche nutzen ein linkes **Eingabe**-Feld und ein rechtes **Ausgabe**-Feld.

Jedes Feld zeigt außerdem Folgendes an:

| **Eingabe**                                                          | **Ausgabe**                                                                                                                  |
|--------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------|
| - Zeichenanzahl <br/>- Wortanzahl <br/>- Absatzanzahl   <br/> | - Wie lange die Aufgabe gedauert hat<br/>- **TPS** (Tokens pro Sekunde)<br/>- Anzahl der Zeichen, Wörter und Absätze<br/>- Das verwendete Modell |


Falls Sie sich mit den technischen Begriffen nicht auskennen:

- **Token** bedeutet ein kleines Textstück. Stellen Sie sich das als Teil eines Wortes oder ein kurzes Wort vor.
- **TPS** bedeutet, wie viele dieser Textabschnitte das Modell pro Sekunde verarbeitet.

<br/>

Sie können auch die Kosten jeder Aktion (falls verfügbar) sowie die Gesamtkosten überwachen, indem Sie die Option `Kosteninformationen bei Aktionen anzeigen` unter [**Einstellungen** > **Allgemeine Einstellungen**](#general-settings) aktivieren.
 
<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="translate"></a>
## Übersetzen

Verwenden Sie **Übersetzen**, wenn Sie Text von einer Sprache in eine andere umwandeln möchten.

![Arbeitsbereich Übersetzen](../images/screenshots/de/translate.png)

<br/>

<a id="translate-text"></a>
### Text übersetzen

1. Öffnen Sie **Übersetzen**.
2. Wählen Sie eine Sprache unter **Von** aus.
3. Wählen Sie eine Sprache unter **Nach** aus.
4. Wählen Sie ein Modell in der Symbolleiste.
5. Geben Sie Text ein oder fügen Sie ihn in das **Eingabefeld** ein.
6. Klicken Sie auf **Übersetzen**.
7. Lesen Sie das Ergebnis im **Ausgabefeld**.
8. Verwenden Sie den Kopierknopf, wenn Sie das Ergebnis kopieren möchten.

<br/>

<a id="language-selection"></a>
### Sprachauswahl

- **Von** kann eine bestimmte Sprache sein oder **Sprache erkennen**.
- **Nach** ist die Sprache, in die das Ergebnis übersetzt werden soll.

Ihre ausgewählten **Bevorzugten Sprachen** werden oben in der Liste angezeigt. Sie können diese unter [**Einstellungen** > **Sprachen**](#languages) festlegen.

<br/>

<a id="helpful-translation-settings"></a>
### Nützliche Übersetzungseinstellungen

Unter [**Einstellungen** > **Allgemeine Einstellungen**](#general-settings) können Sie das Verhalten der Übersetzung anpassen:

- **Automatisch übersetzen beim Einfügen** führt eine Übersetzung sofort durch, sobald Sie Text einfügen.
- **Ergebnis automatisch in die Zwischenablage kopieren** kopiert das Ergebnis automatisch nach einer erfolgreichen Übersetzung.
- **Echtzeit-Übersetzung (beim Tippen)** führt Übersetzungen durch, während Sie tippen.
- **Timeout (ms)** legt fest, wie lange die App wartet, bevor eine Echtzeit-Übersetzung gestartet wird.
- **Enter-Taste** steuert, was geschieht, wenn Sie die `Enter`-Taste drücken:

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="rewrite"></a>
## Umschreiben

Verwenden Sie **Umschreiben**, wenn Sie den Textinhalt verbessern möchten, ohne die Hauptbedeutung zu verändern.

![Arbeitsbereich Umschreiben](../images/screenshots/de/rewrite.png)

Dies ist nützlich für:

- Rechtschreib- und Grammatikfehler beheben
- Text klarer formulieren
- Text formeller oder informeller gestalten
- Text verkürzen oder erweitern
- Text technischer wirken lassen

<br/>

> 💡 **TIPP**<br/>
> Wenn Sie den Modus "**Rechtschreibung und Grammatik prüfen**" verwenden, erscheint im Ausgabefeld eine Schaltfläche `Änderungen anzeigen`.
> Klicken Sie auf diese Schaltfläche, um die Anzeige der Korrekturen ein- oder auszuschalten und so die spezifischen Änderungen am Text zu zeigen oder zu verbergen.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="transform"></a>

## Umwandeln

Verwenden Sie **Umwandeln**, wenn die KI einer benutzerdefinierten Anweisung folgen soll.

![Arbeitsbereich Umwandeln](../images/screenshots/de/transform.png)

Dies ist der flexibelste Bereich der App. Sie können ihn für Aufgaben wie folgende nutzen:

- Notizen zusammenfassen
- Ungeordneten Text in eine überarbeitete E-Mail umwandeln
- Wichtige Punkte extrahieren
- Text in ein bestimmtes Format konvertieren
- beliebige andere benutzerdefinierte Aktionen mit dem Eingabetext durchführen

<br/>

<a id="run-an-existing-prompt"></a>
### Vorhandene Aufforderung ausführen

1. Öffnen Sie **Umwandeln**.
2. Wählen Sie eine Aufforderung aus der Aufforderungsliste aus.
3. Falls ein Feld **Zielsprache** angezeigt wird, wählen Sie gegebenenfalls eine Sprache aus.
4. Geben Sie Text in das Feld **Eingabe** ein oder fügen Sie ihn ein.
5. Klicken Sie auf **Umwandeln**.
6. Lesen Sie das Ergebnis im Feld **Ausgabe**.

<br/>

<a id="if-you-have-no-prompts-yet"></a>
### Falls Sie noch keine Aufforderungen haben

Falls Ihre Aufforderungsliste leer ist, klicken Sie auf **Beispielaufforderungen laden**. Dadurch werden integrierte Beispiele hinzugefügt, sodass Sie schnell loslegen können.

<br/>

> ℹ️ **HINWEIS**<br/>
> Beispielaufforderungen werden auf Englisch bereitgestellt. Nach dem Laden können Sie eine Aufforderung bearbeiten und **Aufforderung übersetzen** verwenden, um sie in Ihre Sprache zu übersetzen.

<br/>

<a id="create-a-prompt-quickly"></a>
### Schnell eine Aufforderung erstellen

Der schnellste Weg zum Erstellen einer Aufforderung ist:

1. Klicken Sie auf **Neue Aufforderung**.
2. Klicken Sie auf **Aufforderung generieren**.
3. Beschreiben Sie, was die Aufforderung bewirken soll.
4. Wählen Sie ein Modell aus.
5. Lassen Sie vom Programm einen Entwurf erstellen.
6. Überprüfen Sie den Entwurf und klicken Sie auf **Speichern**.

![Aufforderung generieren](../images/screenshots/de/transform-generate.png)


<br/>

<a id="edit-a-prompt"></a>
### Eine Aufforderung bearbeiten

Wenn Sie eine Aufforderung erstellen oder bearbeiten, erscheint der Editor auf der linken Seite und ein Testbereich auf der rechten Seite.

![Editor für Aufforderungen in Umwandeln](../images/screenshots/de/transform-prompt-edit.png)

Die wichtigsten Felder sind:

- **Aufforderungsname**: der Name, der in der Aufforderungsliste angezeigt wird.
- **Aufforderungshinweise (optional)**: ein kurzer Hinweis, der dem Benutzer beim Ausführen der Aufforderung angezeigt wird.
- **Modellrolle**: die generelle Rolle, die der KI zugewiesen wird, z. B. „Du bist ein hilfreicher Assistent.“
- **Modellanweisungen (jeweils eine pro Zeile)**: die spezifischen Regeln, denen die KI folgen soll.
- **Ausgabebeschreibung**: ein kurzes Wort zur Beschreibung des Ergebnisses, z. B. „Zusammenfassung“ oder „Umschreibung“.
- **Temperatur (0,0 → 1,0)**: wie sich das Modell verhalten wird; siehe unten.
- **Nach Zielsprache fragen**: fügt beim Ausführen der Aufforderung einen Zielsprachenauswahlfeld hinzu.

Falls Ihnen der Fachbegriff **Temperatur** neu ist, können Sie sich folgendes merken:

- Eine **niedrigere** Temperatur führt zu stabileren, vorhersehbareren Ergebnissen.
- Eine **höhere** Temperatur führt zu mehr Vielfalt und Kreativität.

Sie können außerdem verwenden:

- **`Aufforderung generieren`**, um aus einer einfachen Beschreibung einen neuen Entwurf zu erstellen
- **`Aufforderung verbessern`**, um eine bestehende Aufforderung zu verfeinern
- **`Aufforderung übersetzen`**, um die Felder der Aufforderung zu übersetzen

<br/>

> ⚠️ **WARNUNG**<br/>
> Klicken Sie auf **`Speichern`**, bevor Sie auf **`Zurück zum Ausführen`** klicken. Wenn Sie ohne Speichern zurückkehren, gehen Ihre Änderungen verloren.

<br/>

<a id="test-a-prompt-before-using-it"></a>
### Eine Aufforderung vor der Verwendung testen

Der Testbereich auf der rechten Seite ermöglicht es Ihnen, die Aufforderung mit Beispieltext zu testen, bevor Sie sie im täglichen Einsatz nutzen.

Dies ist hilfreich, wenn Sie:

- eine neue Aufforderung erstellen
- zwei Versionen einer Aufforderung vergleichen
- den Ton, die Länge oder das Ausgabeformat überprüfen möchten

<br/>

> ℹ️ **HINWEIS**<br/>
> Sie können gespeicherte Aufforderungen exportieren und importieren unter [**Einstellungen** > **Umwandeln-Aufforderungen**](#transform-prompts).

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="dashboard"></a>
## Dashboard

Nutzen Sie das **Dashboard**, um zu sehen, wie intensiv Sie die App verwenden und wie hoch die Kosten sind (für kostenpflichtige Modelle).

![Dashboard-Übersicht](../images/screenshots/de/dashboard-summary.png)


<br/>

> ℹ️ **HINWEIS**<br/>
> Falls Sie nur kostenlose Modelle verwenden, bleiben die kostenbezogenen Diagramme leer.

<br/>

<a id="filter-the-data"></a>
### Daten filtern

Verwenden Sie die Filterbuttons oben, um den Zeitraum zu ändern.

![Dashboard-Filter](../images/screenshots/de/dashboard-filter.png)

<br/>

> ℹ️ **HINWEIS**<br/>
> Der **Benutzer**-Filter ist nur für Administratoren in der Webversion sichtbar. Reguläre Benutzer sehen diesen Filter nicht, und er ist in der Desktop-App nicht verfügbar.

<br/>

<a id="dashboard-tabs"></a>

### Dashboard-Tabs

- **Übersicht** gibt Ihnen einen Überblick über die Nutzung und die Kosten.
- **Nach Nutzung** unterteilt die Aktivitäten nach Übersetzungssprache, Umschreibungsmodus und Transformationsprompt.
- **Nach Modell** zeigt an, welche Modelle Sie verwendet haben und wie viel sie gekostet haben.
- **Nach Tag** zeigt die täglichen Gesamtwerte an.
- **Alle Aufrufe** zeigt den kompletten Aufrufverlauf an und ermöglicht den Export.

<br/>

<a id="export-data"></a>
### Daten exportieren

Aus den Dashboard-Tabellen können Daten exportiert werden im Format:

- **JSON**
- **CSV**
- **XLSX**

Dies ist nützlich, wenn Sie die Aktivitäten außerhalb der Anwendung überprüfen oder einen Bericht teilen möchten.

<br/>

<a id="delete-stored-records-for-a-model"></a>
### Gespeicherte Datensätze für ein Modell löschen

Unter **Nach Modell** oder **Alle Aufrufe** können Sie gespeicherte Datensätze für ein Modell löschen, indem Sie auf das „Papierkorb“-Symbol klicken.

> ⚠️ **ACHTUNG**<br/>
> Das Löschen gespeicherter Datensätze kann nicht rückgängig gemacht werden. Nutzen Sie diese Funktion nur, wenn Sie sicher sind, dass der Verlauf nicht mehr benötigt wird.

Wenn Sie alle Daten löschen oder Datensätze basierend auf ihrem Alter entfernen möchten, gehen Sie zu [**Einstellungen** > **Kostenverfolgung**](#cost-tracking). Dort finden Sie Optionen, um alle gespeicherten Daten oder nur Daten älter als ein bestimmtes Datum zu löschen.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="history"></a>
## Verlauf

Klicken Sie auf **Verlauf**, um die Historie Ihrer Aktionen innerhalb von **Transrewrt** einzusehen, einschließlich Eingabe und Ausgabe jeder Operation.

![Verlaufsseite](../images/screenshots/de/history.png)

<br/>

<a id="filter-the-history"></a>
### Daten filtern

**Verlauf** verwendet dieselben Filter wie die Seite **Dashboard**. Nutzen Sie diese, um einen Zeitraum auszuwählen.

![Dashboard-Filter](../images/screenshots/de/dashboard-filter.png)

<br/>

> ℹ️ **HINWEIS**<br/>
> Der Filter **Benutzer** ist in der Webversion nur für Administratoren sichtbar. Normale Benutzer sehen diesen Filter nicht, und er ist in der Desktop-App nicht verfügbar.

<br/>

<a id="export-history-data"></a>
### Verlaufsdaten exportieren

Die Verlaufsseite kann gefilterte Daten im Format exportieren:

- **JSON**
- **CSV**
- **XLSX**

Dies ist nützlich, wenn Sie Aktivitäten außerhalb der Anwendung überprüfen oder einen Bericht teilen möchten.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="settings"></a>
## Einstellungen

Öffnen Sie **Einstellungen** über die Seitenleiste, um das Verhalten der Anwendung anzupassen.

Die verfügbaren Tabs hängen von der Plattform und Ihrer Rolle ab:

  | Tab                 | Desktop | Web (Admin) | Web (Standardbenutzer) |
  |---------------------|:-------:|:-----------:|:----------------------:|
  | Allgemeine Einstellungen |   ja   |     ja     |        ja         |
  | Modelle             |   ja   |     ja     |        ja         |
  | Sprachen            |   ja   |     ja     |        ja         |
  | Kostenverfolgung    |   ja   |     ja     |         —          |
  | Transformationsprompt |   ja   |     ja     |        ja         |
  | Benutzer            |    —    |     ja     |         —          |
  | API-Konfiguration   |   ja   |     ja     |         —          |
  | Über                |   ja   |     ja     |        ja         |

<br/>

> ℹ️ **HINWEIS**<br/>
> In der Webversion hat jeder Benutzer seine eigene Konfiguration. Einstellungen wie ausgewählte Modelle, Sprachen, allgemeine Optionen und Transformationsprompts werden pro Benutzer gespeichert. Änderungen, die Sie vornehmen, wirken sich daher nicht auf andere Benutzer aus.

<br/>


[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="general-settings"></a>
### Allgemeine Einstellungen

Nutzen Sie **Allgemeine Einstellungen**, um das Tippverhalten, das Speichern von Ausführungsdaten im **Verlauf** und das Erscheinungsbild zu steuern.

**Verhalten**

- **Verhalten bei ENTER-Taste** legt fest, ob `Enter` die Aufgabe ausführt oder eine neue Zeile einfügt.
- **Automatische Übersetzung beim Einfügen** startet die Übersetzung sofort, wenn Sie Text einfügen.
- **Ergebnis automatisch in Zwischenablage kopieren** kopiert erfolgreiche Ergebnisse automatisch.
- **Echtzeit-Übersetzung (beim Tippen)** übersetzt, während Sie tippen.
- **Timeout (ms)** legt die Wartezeit für die Echtzeit-Übersetzung fest.

**Verlauf**

- **Ausführungsverlauf speichern** steuert, ob bei jeder Übersetzung, Umschreibung und Transformation **Eingabe- und Ausgabetext** für die Seitenleistenansicht [**Verlauf**](#history) gespeichert werden. Bei Deaktivierung erfolgt eine Bestätigung; bei Zustimmung wird der gespeicherte Verlaufstext aus der Datenbank entfernt.
- **Verlaufsdaten löschen** ermöglicht das Entfernen gespeicherter Texte nach Alter (z. B. älter als einige Monate oder **alle Daten (leeren)**) über **Daten löschen**. Dies betrifft nur gespeicherte Ausführungstexte für die **Verlauf**-Ansicht; **Kosten- oder Nutzungsdaten** bleiben unberührt. Zum Löschen oder Bereinigen von **Kostendaten** nutzen Sie [**Einstellungen** > **Kostenverfolgung**](#cost-tracking).

**Erscheinungsbild**

- **Kosteninformationen bei Aktionen anzeigen** steuert die Anzeige der Kosten pro Operation (falls verfügbar) und der Gesamtkosten in den Ausgabefeldern für Übersetzen, Umschreiben und Transformieren.
- **Dezimalstellen bei Kosten** legt fest, wie viele Nachkommastellen bei Kosten angezeigt werden.
- **Nur für Web:** **Abstand um die App anzeigen** fügt zusätzlichen Platz um die Oberfläche hinzu.
- **Schriftart** ändert die Schriftart in den Textfeldern.
- **Größe** ändert die Schriftgröße.

<br/>

<a id="models"></a>

### Modelle

Verwenden Sie **Einstellungen** > **Modelle**, um auszuwählen, welche Modelle in der Symbolleiste erscheinen.

![Registerkarte „Modelle“ in den Einstellungen](../images/screenshots/de/settings-models.png)

Die Seite enthält zwei Listen:

- **Verfügbare Modelle** auf der linken Seite
- **Ausgewählte Modelle** auf der rechten Seite

Nützliche Steuerelemente sind:

- **Modelle suchen...**, um ein Modell nach Namen zu finden
- **Anbieter**-Chips, um die Liste auf einen Anbieter einzugrenzen (OpenRouter, OpenAI, Ollama, …)
- **Nur kostenlos**, um nur kostenlose Modelle anzuzeigen
- **Aktualisieren**, um die Liste neu zu laden
- **Alle erweitern** und **Alle einklappen**, wenn Sie nach Anbieter sortieren

Modellkennungen enthalten das Präfix des Anbieters (z. B. `openrouter/…` gegenüber `openai/…`). Kennzeichen wie **OpenAI (OpenRouter)** gegenüber **OpenAI (direkt)** zeigen, wie der Datenverkehr weitergeleitet wird.

> ℹ️ **HINWEIS**<br/>
> **OpenRouter Body Builder** (`openrouter/bodybuilder`) ist ein Router-Modell, kein allgemeines Chat-Modell: Seine Antwort ist JSON, das OpenRouter-API-Anfragekörper beschreibt (z. B. ein `requests`-Array mit `model` und `messages`). Wenn Sie es für **Übersetzen**, **Umschreiben** oder **Transformieren** verwenden, zeigt das Ausgabefeld dieses JSON anstelle von fertigem Text. Wählen Sie für diese Aufgaben ein normales Textmodell. Weitere Informationen finden Sie auf der [Body Builder Modellseite](https://openrouter.ai/openrouter/bodybuilder) bei OpenRouter.

Aktionen:

 - Um ein Modell hinzuzufügen, klicken Sie auf **Hinzufügen** oder an beliebiger Stelle in den Eintrag.

 - Um ein Modell zu entfernen, klicken Sie auf **X** neben dem Eintrag in **Ausgewählte Modelle** oder auf **Ausgewählt** im Eintrag unter Verfügbare Modelle.

 - Um die Liste zu leeren, klicken Sie auf **Alle abwählen**. Das erforderliche kostenlose Modell bleibt in der Liste erhalten.

<br/>

> ℹ️ **HINWEIS**<br/>
> Wenn Sie OpenRouter nicht sofort Guthaben hinzufügen möchten, aktivieren Sie zunächst **Nur kostenlos** und wählen Sie die kostenlosen Modelle (keine Kreditkarte erforderlich). Sie können auch Ollama verwenden, um Modelle lokal ohne API-Schlüssel auszuführen.

<br/>

<a id="languages"></a>
### Sprachen

Verwenden Sie **Einstellungen** > **Sprachen**, um die in der App verwendeten Sprachlisten zu organisieren.

- **Top-Sprachen** werden oben in den Sprachlisten in **Übersetzen** und **Transformieren** fixiert.
- **Benutzerdefinierte Sprache** ermöglicht es Ihnen, eine Sprache hinzuzufügen, die nicht in der integrierten Liste enthalten ist.

Wenn Sie eine benutzerdefinierte Sprache hinzufügen, erscheint sie in den Sprachauswahlen zusammen mit den integrierten Optionen.

<br/>

<a id="cost-tracking"></a>
### Kostenverfolgung

Verwenden Sie **Einstellungen** > **Kostenverfolgung**, um Kosteninformationen zu verwalten.

- **Gesamtkosten** zeigt die laufende Summe an.
- **Wert kopieren** kopiert die Gesamtsumme in die Zwischenablage.
- **Kosten zurücksetzen** setzt die gespeicherte Summe auf null zurück.
- **Mit API-Nutzung synchronisieren** setzt die Gesamtsumme auf den Wert der von Ihrem OpenRouter-Konto gemeldeten Nutzung (nur OpenRouter).
- **API-Nutzung** zeigt OpenRouter-Nutzungsdetails an, falls verfügbar.
- **Kostendaten löschen** entfernt alle Daten oder nur Einträge, die älter als ein ausgewähltes Datum sind.

**Kostenverfolgung:** Wenn Sie OpenRouter-Modelle verwenden, zeigt die App Ihren tatsächlichen Verbrauch und die Ausgaben basierend auf den Kosteninformationen von OpenRouter an. Für alle anderen Anbieter schätzt die App die Kosten anhand der von OpenRouter veröffentlichten Preise. Ist kein Preis verfügbar, kann die Schätzung bei null liegen.

<br/>

> ℹ️ **HINWEIS**<br/>
> **Alle Kostenangaben sind nur Schätzungen zur Orientierung und stellen keine offiziellen Rechnungen dar.**

<br/>

> ⚠️ **WARNUNG**<br/>
> Gelöschte Daten können nicht wiederhergestellt werden. Stellen Sie vor dem Löschen sicher, dass Sie Ihre Daten gesichert oder über [**Verlauf**](#history) oder [**Dashboard** > **Alle Aufrufe**](#dashboard-tabs) exportiert haben, andernfalls gehen sie dauerhaft verloren. Der gesamte Eingabe-/Ausgabe-Verlauf zu jedem API-Aufruf wird ebenfalls gelöscht.

<br/>

<a id="transform-prompts"></a>
### Transformationsaufforderungen

Verwenden Sie **Einstellungen** > **Transformationsaufforderungen**, um Aufforderungen (Prompts) in größerem Umfang zu verwalten.

Sie können:

- Ihre gespeicherten Aufforderungen überprüfen
- Aufforderungen löschen
- Aufforderungen aus einer Datei importieren
- Aufforderungen zur Sicherung oder Weitergabe exportieren

<br/>

<a id="users"></a>
### Benutzer

Verwenden Sie **Benutzer**, um Benutzerkonten in der Webversion zu verwalten. Sie können Benutzer hinzufügen, deren Daten aktualisieren, Passwörter zurücksetzen und Konten löschen.

<br/>

<a id="api-config"></a>
### API-Konfiguration

Unterstützte Anbieter sind: OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras und **Ollama** (lokale Modelle über eine Basis-URL). Sie müssen nur die Anbieter konfigurieren, die Sie nutzen.

**Webanwendung: Nur für Administratoren**

API-Schlüssel werden über System- oder Docker-Umgebungsvariablen konfiguriert – sie werden nicht in der Weboberfläche eingegeben. Auf dieser Seite wird angezeigt, für welche Anbieter ein Schlüssel konfiguriert ist, und Sie können jeden einzelnen durch Klicken auf die Schaltfläche **`Test`** testen.

<br/>

> ℹ️ **HINWEIS**<br/>
> Um einen API-Schlüssel zu ändern, aktualisieren Sie die Umgebungsvariable in Ihrer System- oder Docker-Konfiguration und starten Sie den Server oder Container neu.

<br/>

**Desktopanwendung**

Verwenden Sie **API-Konfiguration**, um API-Schlüssel für jeden von Ihnen verwendeten Anbieter zu speichern. Bei Ollama geben Sie anstelle eines API-Schlüssels die **Basis-URL** ein.

<br/>

> 💡 **Tipp** <br/>
> Wenn Sie keinen API-Schlüssel verwenden oder Kosten vermeiden möchten, können Sie [Ollama herunterladen](https://ollama.com) und Modelle (wie z. B. `translategemma:4b`) kostenlos lokal auf Ihrem Computer ausführen. Alternativ können Sie ein kostenloses OpenRouter-Konto erstellen (keine Kreditkarte erforderlich), um deren kostenlose Modelle zu nutzen, oder einen kostenlosen API-Schlüssel von Cerebras, Google, Groq oder Mistral AI erhalten.

<br/>

- Fügen Sie nur die Anbieter hinzu, die Sie benötigen. Unter **Einstellungen** > **Modelle** beginnt jede Modellkennung mit dem Anbieternamen (z. B. `openrouter/openrouter/free`, `openai/gpt-4o`, `ollama/llama3`).

Um einen API-Schlüssel hinzuzufügen, geben Sie den Wert in das Textfeld ein und klicken Sie auf **`Speichern`**. Um einen bestehenden Schlüssel zu ersetzen, klicken Sie auf **`Bearbeiten`**. Um zu prüfen, ob ein Schlüssel funktioniert, klicken Sie auf **`Test`**. Bei der Ollama-Basis-URL klicken Sie immer auf **`Test`**, um die Verbindung zu überprüfen.

<br/>

> ℹ️ **HINWEIS**<br/>
> Sie können den aktuellen Wert eines API-Schlüssels nicht einsehen. Sie können ihn nur mit der Schaltfläche **`Bearbeiten`** ersetzen. API-Schlüssel werden verschlüsselt in der Konfiguration gespeichert.

<br/>

<a id="about"></a>

### Über

Der Reiter **Über** zeigt Folgendes an:

- den App-Namen
- die Versionsnummer
- das Build-Datum
- einen Link zum Projekt-Repository

<br/><br/>

<a id="common-issues"></a>
## Häufige Probleme

Wenn etwas nicht wie erwartet funktioniert, überprüfen Sie zunächst die folgenden Punkte.

<br/>

<a id="the-app-will-not-translate-rewrite-or-transform-text"></a>
### Die App übersetzt, überarbeitet oder wandelt Text nicht um

Überprüfen Sie, ob:

- Sie ein Modell in der Symbolleiste ausgewählt haben
- mindestens ein Modell unter [**Einstellungen** > **Modelle**](#models) aufgeführt ist
- Ihre API-Konfiguration funktioniert

Wenn Sie die Desktop-App verwenden:

1. Öffnen Sie [**Einstellungen** > **API-Konfiguration**](#api-config).
2. Prüfen Sie, ob mindestens ein API-Schlüssel gespeichert ist.
3. Klicken Sie auf **Test** neben dem Anbieter, um sicherzustellen, dass der Schlüssel funktioniert.

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

Probieren Sie eines oder mehrere der folgenden aus:

- wählen Sie ein anderes Modell
- verwenden Sie einen kürzeren Eingabetext
- deaktivieren Sie **Echtzeitübersetzung (beim Tippen)** unter [**Einstellungen** > **Allgemeine Einstellungen**](#general-settings)
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
### Diagramme im Dashboard sind leer

Das ist normal, wenn:

- Sie nur **kostenlose Modelle** verwenden (Kosten-Diagramme bleiben leer)
- der ausgewählte **Zeitfilter** den Zeitraum, in dem Aufrufe gemacht wurden, nicht abdeckt – versuchen Sie **Alle**, um es zu überprüfen

Wenn die Diagramme nach Auswahl von **Alle** weiterhin leer sind, vergewissern Sie sich, dass Aufrufe im Bereich [**Verlauf**](#history) oder im Reiter **Alle Aufrufe** angezeigt werden.

<br/>

<a id="cost-shows-not-available-or-seems-wrong"></a>
### Kosten zeigen „nicht verfügbar“ oder scheinen falsch zu sein

Wenn Sie Modelle über **OpenRouter** nutzen, zeigt die App Ihre tatsächlichen von OpenRouter gemeldeten Ausgaben an.

Bei **anderen Anbietern** (direkt über OpenAI, Anthropic usw.) werden die Kosten anhand der Preisdaten geschätzt, die OpenRouter veröffentlicht. Falls kein passender Preis für ein Modell gefunden wird, erscheinen die Kosten als **nicht verfügbar** und werden nicht in Ihre Gesamtsumme einbezogen.

<br/>

<a id="total-cost-does-not-match-my-provider-bill"></a>
### Gesamtkosten stimmen nicht mit meiner Anbieterrechnung überein

Alle Kostenangaben in der App sind lediglich **Schätzungen zum Informationszweck**, keine offiziellen Abrechnungen.

Um die Gesamtkosten Ihrer tatsächlichen OpenRouter-Ausgaben näher zu bringen, öffnen Sie [**Einstellungen** > **Kostenverfolgung**](#cost-tracking) und klicken Sie auf **Mit API-Nutzung synchronisieren**.

<br/>

<a id="the-history-page-is-missing-from-the-sidebar"></a>
### Die Verlauf-Seite fehlt in der Seitenleiste

Möglicherweise ist **Ausführungsverlauf beibehalten** deaktiviert. Öffnen Sie [**Einstellungen** > **Allgemeine Einstellungen**](#general-settings) und aktivieren Sie diese Option. Hinweis: Durch das Aktivieren werden zuvor gelöschte Verlaufsdaten nicht wiederhergestellt.

<br/>

<a id="web-app-session-expired"></a>
### Web-App: unerwartete Weiterleitung zur Anmeldeseite

Ihre Sitzung ist möglicherweise abgelaufen. Melden Sie sich erneut an. Falls dies häufig auftritt, überprüfen Sie die Serverkonfiguration bezüglich der Sitzungsdauer.

<br/>

<a id="dashboard-shows-no-data-for-other-users"></a>
### Im Dashboard werden keine Daten für andere Benutzer angezeigt (Web)

Nur **Administratoren** können über den **Benutzer**-Filter Daten aller Benutzer einsehen. Standardmäßig sehen normale Benutzer nur ihre eigene Aktivität.

<br/>

<a id="i-changed-a-prompt-and-lost-the-edits"></a>
### Ich habe einen Prompt bearbeitet und die Änderungen gingen verloren

Beim Bearbeiten eines Prompts klicken Sie immer zuerst auf **Speichern**, bevor Sie auf **Zurück zum Ausführen** klicken.

<br/><br/>

<a id="quick-tips"></a>
## Schnelltipps

- Beginnen Sie mit [**Übersetzen**](#translate), um sicherzustellen, dass Ihre Einrichtung funktioniert, bevor Sie zu [**Überarbeiten**](#rewrite) oder [**Umwandeln**](#transform) übergehen.
- Nutzen Sie [**Überarbeiten**](#rewrite) für alltägliche Textverbesserungen.
- Nutzen Sie [**Umwandeln**](#transform), wenn Sie einen wiederholbaren Workflow für eine bestimmte Aufgabe benötigen.
- Nutzen Sie [**Dashboard**](#dashboard), wenn Sie Nutzung und Kosten im Auge behalten möchten.
- Nutzen Sie [**Verlauf**](#history), um vergangene Aktionen mit vollständigem Eingabe-/Ausgabetext zu überprüfen.
- Exportieren Sie regelmäßig Prompts, wenn Sie eine Promptsammlung anlegen, die Sie sicher aufbewahren oder mit anderen teilen möchten (siehe [Transformations-Prompts](#transform-prompts)).

<br/><br/>

<a id="disclaimer"></a>

## Haftungsausschluss

Produktnamen und Symbole gehören ihren jeweiligen Inhabern und werden ausschließlich zur Identifikation verwendet. Diese Software ist weder mit den genannten Marken verbunden noch wird sie von ihnen unterstützt.

<br/><br/>

<a id="license"></a>
## Lizenz

Urheberrecht © 2026 Waldemar Scudeller Jr.

[Apache License 2.0](LICENSE)