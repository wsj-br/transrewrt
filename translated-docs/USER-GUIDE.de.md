---
translated_at: "2026-03-29T01:53:16.191Z"
source_hash: "8981b8db163153bfc443046fa20a49b33c92b9feebdee302f6ef60852f273472"
source_mtime: "2026-03-29T01:41:58.368Z"
model: "qwen/qwen3-235b-a22b-2507"
---
![Transrewrt-Banner](../images/transrewrt_banner.png)

<a id="transrewrt-user-guide"></a>

# Benutzerhandbuch

<br/>

<a id="introduction"></a>

## Einführung

Transrewrt unterstützt Sie bei der Arbeit mit Text auf drei Hauptweisen:

- **Übersetzen** – Texte von einer Sprache in eine andere konvertieren.
- **Umformulieren** – Texte in einem anderen Stil neu formulieren, z. B. klarer, kürzer oder formeller.
- **Transformieren** – Texte mithilfe benutzerdefinierter KI-Anweisungen, sogenannter Prompts, verarbeiten.

<br/>

Diese Anleitung erklärt, wie Sie die Anwendung verwenden, nachdem sie installiert und ausgeführt wird. Informationen zur Installation finden Sie in der Hauptdatei **[README](README.de.md)**.

<br/>

> ℹ️ **HINWEIS**<br/>
> Transrewrt ist als Desktop-Anwendung für Windows und Linux sowie als selbstgehostete Web-App verfügbar. Diese Anleitung konzentriert sich auf die alltägliche Nutzung der Anwendung. Wo etwas nur für eine Version gilt, ist dies klar gekennzeichnet.

<small id="lang-list"> [English (UK)](../USER-GUIDE.md) · [Português (BR)](USER-GUIDE.pt-BR.md) · [العربية](USER-GUIDE.ar.md) · [বাংলা](USER-GUIDE.bn.md) · [Català](USER-GUIDE.ca.md) · [简体中文](USER-GUIDE.zh-CN.md) · [繁體中文](USER-GUIDE.zh-TW.md) · [Hrvatski](USER-GUIDE.hr.md) · [Čeština](USER-GUIDE.cs.md) · [Nederlands](USER-GUIDE.nl.md) · [English (US)](USER-GUIDE.en-US.md) · [Filipino](USER-GUIDE.tl.md) · [Français](USER-GUIDE.fr.md) · [Deutsch](USER-GUIDE.de.md) · [Ελληνικά](USER-GUIDE.el.md) · [हिन्दी](USER-GUIDE.hi.md) · [Magyar](USER-GUIDE.hu.md) · [Italiano](USER-GUIDE.it.md) · [日本語](USER-GUIDE.ja.md) · [Basa Jawa](USER-GUIDE.jv.md) · [한국어](USER-GUIDE.ko.md) · [Bahasa Melayu](USER-GUIDE.ms.md) · [فارسی](USER-GUIDE.fa.md) · [Polski](USER-GUIDE.pl.md) · [Português (PT)](USER-GUIDE.pt.md) · [ਪੰਜਾਬੀ](USER-GUIDE.pa.md) · [Română](USER-GUIDE.ro.md) · [Русский](USER-GUIDE.ru.md) · [Slovenčina](USER-GUIDE.sk.md) · [Español](USER-GUIDE.es.md) · [Kiswahili](USER-GUIDE.sw.md) · [Svenska](USER-GUIDE.sv.md) · [తెలుగు](USER-GUIDE.te.md) · [ภาษาไทย](USER-GUIDE.th.md) · [Türkçe](USER-GUIDE.tr.md) · [Українська](USER-GUIDE.uk.md) · [Tiếng Việt](USER-GUIDE.vi.md)</small>

<small id="lang-list"> [English (UK)](../USER-GUIDE.md) · [Português (BR)](USER-GUIDE.pt-BR.md) · [العربية](USER-GUIDE.ar.md) · [বাংলা](USER-GUIDE.bn.md) · [Català](USER-GUIDE.ca.md) · [简体中文](USER-GUIDE.zh-CN.md) · [繁體中文](USER-GUIDE.zh-TW.md) · [Hrvatski](USER-GUIDE.hr.md) · [Čeština](USER-GUIDE.cs.md) · [Nederlands](USER-GUIDE.nl.md) · [English (US)](USER-GUIDE.en-US.md) · [Filipino](USER-GUIDE.tl.md) · [Français](USER-GUIDE.fr.md) · [Deutsch](USER-GUIDE.de.md) · [Ελληνικά](USER-GUIDE.el.md) · [हिन्दी](USER-GUIDE.hi.md) · [Magyar](USER-GUIDE.hu.md) · [Italiano](USER-GUIDE.it.md) · [日本語](USER-GUIDE.ja.md) · [Basa Jawa](USER-GUIDE.jv.md) · [한국어](USER-GUIDE.ko.md) · [Bahasa Melayu](translated-docs/US

ER-GUIDE.ms.md) · [Farsi](USER-GUIDE.fa.md) · [Polnisch](USER-GUIDE.pl.md) · [Portugiesisch (PT)](USER-GUIDE.pt.md) · [Punjabi](USER-GUIDE.pa.md) · [Rumänisch](USER-GUIDE.ro.md) · [Russisch](USER-GUIDE.ru.md) · [Slowakisch](USER-GUIDE.sk.md) · [Spanisch](USER-GUIDE.es.md) · [Suaheli](USER-GUIDE.sw.md) · [Schwedisch](USER-GUIDE.sv.md) · [Telugu](USER-GUIDE.te.md) · [Thailändisch](USER-GUIDE.th.md) · [Türkisch](USER-GUIDE.tr.md) · [Ukrainisch](USER-GUIDE.uk.md) · [Vietnamesisch](USER-GUIDE.vi.md)</small>

<small>

> **Hinweis zu Übersetzungen der Benutzeroberfläche und Dokumentation:** Alle Sprachen der Benutzeroberfläche mit Ausnahme des Originals Englisch (GB) 
> wurden mithilfe von KI-Modellen übersetzt; die Formulierungen können ungenau sein oder Fehler enthalten.

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
  - [Werkzeugleiste](#toolbar)
  - [Eingabe- und Ausgabefelder](#input-and-output-panels)
- [Übersetzen](#translate)
  - [Text übersetzen](#translate-text)
  - [Sprachauswahl](#language-selection)
  - [Nützliche Übersetzungseinstellungen](#helpful-translation-settings)
- [Umformulieren](#rewrite)
- [Umwandeln](#transform)
  - [Vorhandene Aufforderung ausführen](#run-an-existing-prompt)
  - [Wenn Sie noch keine Aufforderungen haben](#if-you-have-no-prompts-yet)
  - [Schnelles Erstellen einer Aufforderung](#create-a-prompt-quickly)
  - [Eine Aufforderung bearbeiten](#edit-a-prompt)
  - [Eine Aufforderung vor der Nutzung testen](#test-a-prompt-before-using-it)
- [Dashboard](#dashboard)
  - [Daten filtern](#filter-the-data)
  - [Dashboard-Registerkarten](#dashboard-tabs)
  - [Daten exportieren](#export-data)

- [Gespeicherte Aufzeichnungen für ein Modell löschen](#delete-stored-records-for-a-model)
- [Verlauf](#history)
  - [Daten filtern](#filter-the-data-1)
  - [Verlaufsdaten exportieren](#export-history-data)
- [Einstellungen](#settings)
  - [Allgemeine Einstellungen](#general-settings)
  - [Modelle](#models)
  - [Sprachen](#languages)
  - [Kostenverfolgung](#cost-tracking)
  - [Eingabeaufforderungen umwandeln](#transform-prompts)
  - [Benutzer](#users)
  - [API-Konfiguration](#api-config)
  - [Über](#about)
- [Häufige Probleme](#common-issues)
  - [Die App übersetzt, überarbeitet oder wandelt Text nicht um](#the-app-will-not-translate-rewrite-or-transform-text)
  - [Die Modellliste ist leer](#the-model-list-is-empty)
  - [Das Ergebnis ist zu langsam oder zu teuer](#the-result-is-too-slow-or-too-expensive)
  - [Die Oberfläche ist in der falschen Sprache](#the-interface-is-in-the-wrong-language)
  - [Der Text ist zu klein oder schwer lesbar](#the-text-is-too-small-or-hard-to-read)
  - [Die Diagramme im Dashboard sind leer](#dashboard-charts-are-empty)

- [Kosten anzeigen „nicht verfügbar“ oder erscheinen falsch](#cost-shows-not-available-or-seems-wrong)
  - [Die Gesamtkosten stimmen nicht mit der Abrechnung meines Anbieters überein](#total-cost-does-not-match-my-provider-bill)
  - [Die Verlaufsseite fehlt in der Seitenleiste](#the-history-page-is-missing-from-the-sidebar)
  - [Web-App: unerwartete Weiterleitung zur Anmeldeseite](#web-app-redirected-to-the-login-page-unexpectedly)
  - [Web-Administration: Passwort vergessen oder verloren](#web-admin-forgot-or-lost-a-password)
  - [Dashboard zeigt keine Daten für andere Benutzer an (Web)](#dashboard-shows-no-data-for-other-users-web)
  - [Ich habe eine Aufforderung geändert und die Bearbeitungen gingen verloren](#i-changed-a-prompt-and-lost-the-edits)
- [Schnelltipps](#quick-tips)
- [Haftungsausschluss](#disclaimer)
- [Lizenz](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="before-you-start"></a>

## Bevor Sie beginnen

Um Transrewrt nutzen zu können, benötigen Sie Zugang zu mindestens einem KI-Anbieter. Unterstützte Anbieter sind: [OpenRouter](https://openrouter.ai) (das zahlreiche Modelle bündelt), OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras und [Ollama](https://ollama.com) für lokale Modelle.

Sie müssen kein kostenpflichtiges Modell auswählen, um loszulegen. Sobald Sie Ihren OpenRouter-API-Schlüssel hinzufügen, aktiviert die App automatisch eine integrierte **kostenlose** OpenRouter-Option. So können Sie sofort mit dem Übersetzen, Umformulieren und Umwandeln von Texten beginnen. Alternativ können Sie auch einen kostenlosen API-Schlüssel von Cerebras, Google, Groq oder Mistral AI beziehen.

Einfach ausgedrückt:

- Ein **Modell** ist die KI-Engine, die die Arbeit übernimmt. Modelle werden mit einem **Anbieter-Präfix** angezeigt (z. B. `openrouter/…`, `openai/…`, `ollama/…`).
- Ein **API-Schlüssel** (bzw. bei Ollama eine **Basis-URL**) ermöglicht es der App, den Anbieter zu erreichen.

Wenn Sie die **Desktop-App** verwenden, fügen Sie Schlüssel unter [**Einstellungen** > **API-Konfiguration**](#api-config) für jeden Anbieter hinzu, den Sie nutzen. Wenn Sie nur OpenRouter verwenden, sehen Sie unten unter [So erhalten Sie einen API-Schlüssel](#how-to-get-an-api-key-desktop-app). Wenn Sie keinen API-Schlüssel verwenden möchten, können Sie Ollama (von [ollama.com](https://ollama.com)) installieren und stattdessen lokale Modelle verwenden, wie z. B. `translategemma:4b`.

Wenn Sie die **Webversion** verwenden, werden die Anbieter vom Serverbetreiber über Umgebungsvariablen konfiguriert, sodass Sie keine API-Schlüssel direkt in der Anwendung eingeben können.

<br/>

<a id="how-to-get-an-api-key-desktop-app"></a>

### So erhalten Sie einen kostenlosen OpenRouter-API-Schlüssel (Desktop-App)

Wenn Sie die Desktop-App verwenden, befolgen Sie diese Schritte:

1. Öffnen Sie [OpenRouter](https://openrouter.ai) in Ihrem Webbrowser.
2. Erstellen Sie ein Konto oder melden Sie sich an.
3. Rufen Sie die Seite [Keys](https://openrouter.ai/keys) auf.
4. Klicken Sie auf die Schaltfläche, um einen neuen API-Schlüssel zu erstellen.
5. Geben Sie dem Schlüssel einen Namen, an den Sie sich später erinnern können.
6. Kopieren Sie den neuen API-Schlüssel.
7. Kehren Sie zu Transrewrt zurück und öffnen Sie **Einstellungen** > **API-Konfiguration**.
8. Fügen Sie den Schlüssel in das Feld **OpenRouter-API-Schlüssel** ein (unter **Einstellungen** > **API-Konfiguration**).
9. Klicken Sie auf **OpenRouter-Schlüssel testen**, um sicherzustellen, dass er funktioniert.

<br/><br/>

<a id="getting-started"></a>

## Erste Schritte

Wenn Sie Transrewrt zum ersten Mal verwenden, folgen Sie dieser Reihenfolge:

1. Öffnen Sie die App.
2. Wählen Sie bei Bedarf über das Globus-Symbol Ihre **Bedienoberflächensprache** aus.
3. Wenn Sie die **Desktop-App** verwenden, öffnen Sie [**Einstellungen** > **API-Konfiguration**](#api-config), fügen Sie einen API-Schlüssel für mindestens einen Anbieter hinzu (zum Beispiel OpenRouter) und klicken Sie auf **Test**, um die Funktionsfähigkeit zu überprüfen.
4. Öffnen Sie [**Einstellungen** > **Modelle**](#models) und fügen Sie ein oder mehrere Modelle zu **Ausgewählte Modelle** hinzu.
5. Öffnen Sie [**Einstellungen** > **Sprachen**](#languages) und wählen Sie Ihre **Hauptstsprachen** aus, wenn Sie möchten, dass Ihre am häufigsten verwendeten Sprachen zuerst angezeigt werden.
6. Gehen Sie zu **Übersetzen** und führen Sie eine einfache Übersetzung durch, um sicherzustellen, dass alles funktioniert.
7. Sobald dies erfolgreich ist, probieren Sie **Umschreiben** und danach **Umwandeln** aus.

Diese Reihenfolge ist wichtig. Sie verhindert das häufigste Problem bei Erstnutzung: einen Auftrag ausführen zu wollen, bevor die App über eine funktionierende API-Verbindung oder ein ausgewähltes Modell verfügt.

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

Verwenden Sie die Seitenleiste, um sich in der Anwendung zu bewegen. Sie können die Seitenleiste einblenden, um mehr Platz zu gewinnen, indem Sie auf das Symbol neben dem App-Logo klicken.

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
        <li><strong>Umformulieren</strong> öffnet den Umformulierungsarbeitsbereich.</li><br/>
        <li><strong>Transformieren</strong> öffnet den Arbeitsbereich für benutzerdefinierte Prompts.</li><br/>
        <li><strong>Dashboard</strong> zeigt Nutzungs- und Kosteninformationen an.</li><br/>
        <li><strong>Einstellungen</strong> öffnet das Einstellungsfenster.</li><br/>
        <li><strong>Verlauf</strong> zeigt den Nutzungverlauf mit Eingabe- und Ausgabetext an.</li><br/>
        <li><strong>Benutzer</strong> zeigt den Benutzernamen des angemeldeten Benutzers an (nur im Web).</li>
      </ul>

</td>
  </tr>
</table>

<br/>

<a id="toolbar"></a>

### Symbolleiste

Die Symbolleiste ändert sich leicht, je nachdem, wo Sie sich in der App befinden.

- Auf der linken Seite wird der Name der aktuellen Seite angezeigt.
- Auf der rechten Seite befinden sich der **Modellauswahlschalter** und die Steuerung für die **Benutzeroberflächensprache**.

Der **Modellauswahlschalter** ermöglicht es Ihnen, die gewünschte KI-Engine für die aktuelle Aufgabe auszuwählen.

  ![Modellauswahl](../images/screenshots/de/model-selector.png)

Einige kostenlose Modelle sind möglicherweise nicht immer verfügbar – gelegentlich sind sie offline oder haben eine Nutzungsobergrenze. Tritt dies auf, wird die App das Modell automatisch aus Ihrer verfügbaren Liste entfernen. Um zu steuern, welche Modelle angezeigt werden, gehen Sie zu [**Einstellungen** > **Modelle**](#models) und bearbeiten Sie Ihre Modellliste.  
Sie können die Modelleinstellungen auch direkt über das Klicken auf das Anbietersymbol links neben dem Modellnamen in der Symbolleiste öffnen.

<br/>

Das **Globus-Symbol + Sprachcode** ändert die Sprache der Benutzeroberfläche, z. B. Menüs und Schaltflächen. Es ändert **nicht** die bei **Übersetzen** verwendeten Übersetzungssprachen.

![Auswahl der Benutzersprache](../images/screenshots/de/language-selector.png)

<br/>

<a id="input-and-output-panels"></a>

### Eingabe- und Ausgabebereiche

Die meisten Arbeitsbereiche verwenden einen linken **Eingabe**-Bereich und einen rechten **Ausgabe**-Bereich.

Jeder Bereich zeigt zusätzlich an:

| **Eingabe**                                                          | **Ausgabe**                                                                                                                  |
|----------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------|
| - Zeichenanzahl <br/>- Wortanzahl <br/>- Absatzanzahl          <br/> | - Wie lange die Aufgabe gedauert hat<br/>- **TPS** (Tokens pro Sekunde)<br/>- Anzahl der Zeichen, Wörter und Absätze<br/>- Das verwendete Modell |

Wenn Sie sich über die Fachbegriffe wundern:

- **Token** bedeutet ein kleines Textstück. Sie können es sich als einen Wortteil oder ein kurzes Wort vorstellen.
- **TPS** gibt an, wie viele dieser Textabschnitte das Modell pro Sekunde verarbeitet.

<br/>

Sie können außerdem die Kosten jeder Aktion (falls verfügbar) sowie die Gesamtkosten verfolgen, indem Sie die Option `Kosteninformationen bei Aktionen anzeigen` unter [**Einstellungen** > **Allgemeine Einstellungen**](#general-settings) aktivieren.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="translate"></a>

## Übersetzen

Verwenden Sie **Übersetzen**, wenn Sie Texte von einer Sprache in eine andere umwandeln möchten.

![Übersetzen-Arbeitsbereich](../images/screenshots/de/translate.png)

<br/>

<a id="translate-text"></a>

### Text übersetzen

1. Öffnen Sie **Übersetzen**.
2. Wählen Sie eine Sprache unter **Von** aus.
3. Wählen Sie eine Sprache unter **Nach** aus.
4. Wählen Sie ein Modell in der Symbolleiste aus.
5. Geben Sie Text ein oder fügen Sie ihn in **Eingabe** ein.
6. Klicken Sie auf **Übersetzen**.
7. Lesen Sie das Ergebnis in **Ausgabe**.
8. Verwenden Sie die Schaltfläche „Kopieren“, wenn Sie das Ergebnis kopieren möchten.

<br/>

<a id="language-selection"></a>

### Sprachauswahl

- **Von** kann eine bestimmte Sprache oder **Sprache erkennen** sein.
- **Nach** ist die Sprache, in die das Ergebnis übersetzt werden soll.

Ihre ausgewählten **Bevorzugten Sprachen** erscheinen oben in der Liste. Sie können diese unter [**Einstellungen** > **Sprachen**](#languages) festlegen.

<br/>

<a id="helpful-translation-settings"></a>

### Hilfreiche Übersetzungseinstellungen

In [**Einstellungen** > **Allgemeine Einstellungen**](#general-settings) können Sie das Verhalten der Übersetzung anpassen:

- **Automatische Übersetzung beim Einfügen** führt eine Übersetzung automatisch durch, sobald Sie Text einfügen.
- **Ergebnis automatisch in Zwischenablage kopieren** kopiert das Ergebnis nach einer erfolgreichen Übersetzung automatisch in die Zwischenablage.
- **Echtzeit-Übersetzung (während des Tippens)** führt Übersetzungen durch, während Sie tippen.
- **Zeitlimit (ms)** legt fest, wie lange die Anwendung wartet, bevor eine Echtzeit-Übersetzung durchgeführt wird.
- **Enter** legt fest, was geschieht, wenn Sie die `Enter`-Taste drücken:

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="rewrite"></a>

## Umformulieren

Verwenden Sie **Umformulieren**, wenn Sie den Text stilistisch verbessern möchten, ohne die Kernaussage zu verändern.

![Arbeitsbereich Umformulieren](../images/screenshots/de/rewrite.png)

Dies ist nützlich für:

- Korrektur von Rechtschreibung und Grammatik (**Rechtschreibung und Grammatik prüfen**)
- Verbesserung der Textverständlichkeit (**Klarheit verbessern**)
- mehrere unterschiedliche Umformulierungen in einem Durchgang (**Alternative Versionen**)
- formellere oder informellere Textgestaltung (**Formell** / **Informell**)
- Verkürzung oder Erweiterung des Textes (**Verkürzen** / **Erweitern**)
- technischere Formulierungen (**Technischer machen**)

<br/>

> 💡 **TIPP**<br/>
> Wenn Sie den Modus "**Rechtschreibung und Grammatik prüfen**" verwenden, erscheint im Ausgabefenster (neben **Kopieren**) ein Umschalter **Änderungen anzeigen**.
> Schalten Sie ihn ein oder aus, um die jeweils angewendeten Korrekturen im Text sichtbar oder unsichtbar zu machen.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="transform"></a>

## Transformieren

Verwenden Sie **Transformieren**, wenn die KI einem individuellen Satz von Anweisungen folgen soll.

![Transformieren-Arbeitsbereich](../images/screenshots/de/transform.png)

Dies ist der flexibelste Bereich der Anwendung. Sie können ihn für Aufgaben wie beispielsweise folgende nutzen:

- Notizen zusammenfassen
- Ungefähren Text in eine überarbeitete E-Mail umwandeln
- Wichtige Punkte extrahieren
- Text in ein bestimmtes Format konvertieren
- Jede andere benutzerdefinierte Aktion mit dem Eingabetext

<br/>

<a id="run-an-existing-prompt"></a>

### Einen vorhandenen Prompt ausführen

1. Öffnen Sie **Transform**.
2. Wählen Sie einen Prompt aus der Prompt-Liste aus.
3. Falls ein Feld **Ziel**sprache angezeigt wird, wählen Sie gegebenenfalls eine Sprache aus.
4. Geben Sie Text ein oder fügen Sie ihn in **Eingabe** ein.
5. Klicken Sie auf **Transformieren**.
6. Lesen Sie das Ergebnis in **Ausgabe**.

<br/>

<a id="if-you-have-no-prompts-yet"></a>

### Wenn Sie noch keine Prompts haben

Wenn Ihre Promptliste leer ist, klicken Sie im Transform-Arbeitsbereich auf **Beispiel-Prompts laden**. Die gleiche Option ist immer unter [**Einstellungen** > **Transform-Prompts**](#transform-prompts) in der Zeile zum Exportieren/Importieren verfügbar. Beide Optionen fügen integrierte Beispiele hinzu, sodass Sie schnell beginnen können.

<br/>

> ℹ️ **HINWEIS**<br/>
> Beispiel-Prompts werden in Englisch bereitgestellt. Nachdem Sie sie geladen haben, können Sie einen Prompt bearbeiten und **Prompt übersetzen** verwenden, um ihn in Ihre Sprache zu übersetzen.

<br/>

<a id="create-a-prompt-quickly"></a>

### Schnell einen Prompt erstellen

Der schnellste Weg, um einen Prompt zu erstellen, ist:

1. Klicken Sie auf **Neuen Prompt erstellen**.
2. Klicken Sie auf **Prompt generieren**.
3. Beschreiben Sie, was der Prompt bewirken soll.
4. Wählen Sie ein Modell aus.
5. Lassen Sie die App einen Entwurf für Sie erstellen.
6. Überprüfen Sie den Entwurf und klicken Sie auf **Speichern**.

![Prompt generieren](../images/screenshots/de/transform-generate.png)


<br/>

<a id="edit-a-prompt"></a>

### Einen Prompt bearbeiten

Wenn Sie einen Prompt erstellen oder bearbeiten, erscheint der Editor auf der linken Seite und ein Testbereich auf der rechten Seite.

![Transform-Prompt-Editor](../images/screenshots/de/transform-prompt-edit.png)

Die wichtigsten Felder sind:

- **Prompt-Name**: der Name, der in der Prompt-Liste angezeigt wird.
- **Prompt-Anweisungen (optional)**: ein kurzer Hinweis, der dem Benutzer beim Ausführen des Prompts angezeigt wird.
- **Modell-Rolle**: die insgesamt zugewiesene Rolle für die KI, z. B. „Du bist ein hilfreicher Assistent.“
- **Modell-Anweisungen (eine pro Zeile)**: die spezifischen Regeln, denen die KI folgen soll.
- **Ausgabe-Beschreibung**: ein kurzes Wort zur Beschreibung des Ergebnisses, z. B. „Zusammenfassung“ oder „Umformulierung“.
- **Temperatur (0,0 → 1,0)**: gibt an, wie sich das Modell verhalten wird; siehe unten.
- **Nach Zielsprache fragen**: fügt bei Ausführung des Prompts einen Zielsprach-Selektor hinzu.

Falls Ihnen der Fachbegriff **Temperatur** neu ist, stellen Sie sich das folgendermaßen vor:

- Eine **niedrigere** Temperatur führt zu stabileren, vorhersehbareren Ergebnissen.

- Eine **höhere** Temperatur führt zu mehr Abwechslung und Kreativität.

Sie können auch folgende Funktionen nutzen:

- **`Generate prompt`**, um einen neuen Entwurf aus einer einfachen Beschreibung zu erstellen
- **`Improve prompt`**, um einen vorhandenen Prompt zu verbessern
- **`Translate prompt`**, um die Prompt-Felder zu übersetzen

<br/>

> ⚠️ **ACHTUNG**<br/>
> Klicken Sie auf **`Save`**, bevor Sie auf **`Back to Run`** klicken. Wenn Sie zurückgehen, ohne zu speichern, gehen Ihre Änderungen verloren.

<br/>

<a id="test-a-prompt-before-using-it"></a>

### Eine Eingabeaufforderung vor der Verwendung testen

Das Testfeld auf der rechten Seite ermöglicht es Ihnen, Ihre Eingabeaufforderung mit Beispieltexten auszuprobieren, bevor Sie sie im täglichen Arbeitsablauf verwenden.

Dies ist nützlich, wenn:

- Sie eine neue Eingabeaufforderung erstellen
- Sie zwei Versionen einer Eingabeaufforderung vergleichen möchten
- Sie den Ton, die Länge oder das Ausgabeformat überprüfen möchten

<br/>

> ℹ️ **HINWEIS**<br/>
> Sie können gespeicherte Eingabeaufforderungen in [**Einstellungen** > **Transformations-Eingaben**](#transform-prompts) exportieren und importieren.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="dashboard"></a>

## Dashboard

Verwenden Sie das **Dashboard**, um zu sehen, wie intensiv Sie die App nutzen und welche Kosten dadurch entstehen (für kostenpflichtige Modelle).

![Dashboard-Zusammenfassung](../images/screenshots/de/dashboard-summary.png)


<br/>

> ℹ️ **HINWEIS**<br/>
> Wenn Sie ausschließlich **kostenlose** Modelle verwenden, können die **Kosten** Null betragen und kostenbezogene Zusammenfassungen leer erscheinen. Auf den Bereichen **Zusammenfassung**, **Nutzung über die Zeit** und **Nutzung nach Modell** werden dennoch die **Anzahl der Aufrufe** (Übersetzen, Umschreiben und Umwandeln) angezeigt, sofern Aktivitäten im ausgewählten Zeitraum vorliegen.

<br/>

<a id="filter-the-data"></a>

### Daten filtern

Verwenden Sie die Filter-Schaltflächen oben, um den Zeitraum zu ändern.

![Dashboard-Filter](../images/screenshots/de/dashboard-filter.png)

<br/>

> ℹ️ **HINWEIS**<br/>
> Der **Benutzer**-Filter ist in der Webversion nur für Administratoren sichtbar. Reguläre Benutzer sehen diesen Filter nicht, und er ist in der Desktop-App nicht verfügbar.

<br/>

<a id="dashboard-tabs"></a>

### Dashboard-Tabs

- **Übersicht** bietet einen Überblick über die Nutzung und die Kosten. Enthält eine Darstellung der **Nutzung im Zeitverlauf** (kumulierte Stapeldiagramme der **Aufrufanzahlen** pro Tag für Übersetzung, Umformulierung und Umwandlung) sowie **Nutzung nach Modell** (Gesamtanzahl der **Aufrufe pro Modell**, einschließlich Umwandlung).
- **Nach Nutzung** unterteilt die Aktivitäten nach Übersetzungssprache, Umformulierungsmodus und Umwandlungs-Prompt.
- **Nach Modell** zeigt, welche Modelle Sie verwendet haben und wie hoch deren Kosten waren.
- **Nach Tag** zeigt die täglichen Gesamtwerte an.
- **Alle Aufrufe** zeigt den vollständigen Aufrufverlauf an und ermöglicht den Export.

<br/>

<a id="export-data"></a>

### Daten exportieren

Die Dashboard-Tabellen können Daten exportieren in:

- **JSON**
- **CSV**
- **XLSX**

Dies ist nützlich, wenn Sie Aktivitäten außerhalb der Anwendung überprüfen oder einen Bericht teilen möchten.

<br/>

<a id="delete-stored-records-for-a-model"></a>

### Gespeicherte Datensätze eines Modells löschen

Unter **Nach Modell** oder **Alle Aufrufe** können Sie gespeicherte Datensätze eines Modells löschen, indem Sie auf das „Papierkorb“-Symbol klicken.

> ⚠️ **ACHTUNG**<br/>
> Das Löschen gespeicherter Datensätze kann nicht rückgängig gemacht werden. Verwenden Sie diese Funktion nur, wenn Sie sicher sind, dass Sie diesen Verlauf nicht mehr benötigen.

Um alle Daten zu löschen oder Datensätze basierend auf ihrem Alter zu entfernen, gehen Sie zu [**Einstellungen** > **Kostenverfolgung**](#cost-tracking). Dort finden Sie Optionen, um alle gespeicherten Daten oder nur Daten, die älter als ein bestimmtes Datum sind, zu löschen.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="history"></a>

## Verlauf

Klicken Sie auf **Verlauf**, um den Verlauf Ihrer Aktionen innerhalb von **Transrewrt** einzusehen, einschließlich der Eingaben und Ergebnisse jeder einzelnen Operation.

![Verlaufsseite](../images/screenshots/de/history.png)

<br/>

<a id="filter-the-history"></a>

### Daten filtern

Die **Verlaufsübersicht** verwendet die gleichen Filter wie die Seite **Dashboard**. Nutzen Sie diese, um den gewünschten Zeitraum auszuwählen.

![Dashboard-Filter](../images/screenshots/de/dashboard-filter.png)

<br/>

> ℹ️ **HINWEIS**<br/>
> Der Filter **Benutzer** ist nur für Administratoren in der Webversion sichtbar. Reguläre Benutzer sehen diesen Filter nicht, und er ist in der Desktop-App nicht verfügbar.

<br/>

<a id="export-history-data"></a>

###  Verlaufdaten exportieren

Die Verlaufseite kann die gefilterten Daten exportieren in:

- **JSON**
- **CSV**
- **XLSX**

Dies ist nützlich, wenn Sie Aktivitäten außerhalb der App überprüfen oder einen Bericht teilen möchten.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="settings"></a>

## Einstellungen

Öffnen Sie **Einstellungen** in der Seitenleiste, um das Verhalten der App anzupassen.

Die verfügbaren Registerkarten hängen von der Plattform und Ihrer Rolle ab:

| Reiter               | Desktop | Web (Admin) | Web (regulärer Benutzer) |
|----------------------|:-------:|:-----------:|:------------------------:|
| Allgemeine Einstellungen |   ja   |     ja     |        ja         |
| Modelle            |   ja   |     ja     |        ja         |
| Sprachen         |   ja   |     ja     |        ja         |
| Kostenverfolgung     |   ja   |     ja     |         —          |
| Transformieren von Prompts |   ja   |     ja     |        ja         |
| Benutzer             |    —    |     ja     |         —          |
| API-Konfiguration        |   ja   |     ja     |         —          |
| Über             |   ja   |     ja     |        ja         |

<br/>

> ℹ️ **HINWEIS**<br/>
> In der Webversion verfügt jeder Benutzer über eine eigene Konfiguration. Einstellungen wie ausgewählte Modelle, Sprachen, allgemeine Optionen und Transformationsaufforderungen werden pro Benutzer gespeichert. Änderungen, die Sie vornehmen, beeinflussen andere Benutzer nicht.

<br/>


[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="general-settings"></a>

### Allgemeine Einstellungen

Verwenden Sie **Allgemeine Einstellungen**, um das Tippverhalten, die Speicherung von Ausführungsdetails in der **Verlauf**-Ansicht und die Darstellung zu steuern.

**Verhalten**

- Mit **Verhalten bei EINGABE (ENTER)** wird festgelegt, ob `Enter` die Aufgabe ausführt oder eine neue Zeile einfügt.
- **Automatische Übersetzung beim Einfügen** startet die Übersetzung, sobald Sie Text einfügen.
- **Ergebnis automatisch in Zwischenablage kopieren** kopiert erfolgreiche Ergebnisse automatisch.
- **Echtzeit-Übersetzung (beim Tippen)** übersetzt während des Tippens.
- **Zeitlimit (ms)** legt die Wartezeit für die Echtzeit-Übersetzung fest.

**Verlauf**

- **Ausführungsverlauf speichern** legt fest, ob jede Übersetzung, Umwandlung und Umformulierung **Eingabe- und Ausgabetext** für die Seitenleistenansicht [**Verlauf**](#history) speichert. Wenn diese Option deaktiviert wird, erfolgt eine Bestätigungsaufforderung. Bei Bestätigung wird der gespeicherte Verlaufstext aus der Datenbank entfernt.

- **Verlaufsdaten löschen** ermöglicht es Ihnen, gespeicherten Text nach Alter zu entfernen (z. B. älter als einige Monate oder **alle Daten (leeren)**) über die Option **Daten löschen**. Dies betrifft nur gespeicherte Ausführungstexte in der **Verlauf**-Ansicht; es werden **keine** Kosten- oder Nutzungsdaten gelöscht. Um **Kosten**-Daten zu entfernen oder zu bereinigen, nutzen Sie [**Einstellungen** > **Kostenverfolgung**](#cost-tracking).

**Darstellung**

- **Kosteninformationen an den Aktionen anzeigen** steuert die Anzeige der Kosten pro Vorgang (falls verfügbar) sowie der Gesamtkosten in den Ausgabefeldern für Übersetzen, Umschreiben und Transformieren.
- **Dezimalstellen bei Kosten** ändert die Anzeige der Nachkommastellen bei Kosten.
- **Nur im Web:** **Abstand um die Anwendung anzeigen** fügt zusätzlichen Platz um die Benutzeroberfläche hinzu.
- **Schriftart** ändert die Schriftart in den Textfeldern.
- **Größe** ändert die Schriftgröße.

**Konfigurationssicherung**

- **Nutzungsdaten in der Sicherung einschließen** – wenn aktiviert, enthält die ZIP-Datei auch Ausführungsverlauf und API-Aufrufdaten.

- **Konfiguration sichern** — erstellt eine einzelne ZIP-Datei (`transrewrt-config-backup-YYYY-MM-DD_HHMMSS.zip`, standardmäßig im UTC-Zeitformat) mit `config.json`, `state.json`, optionalem Verschlüsselungsschlüssel, Benutzern, Einstellungen, benutzerdefinierten Prompts und Nutzungsdaten, falls Sie diese gespeichert haben. Nach einer erfolgreichen Sicherung wird der Name der gespeicherten Datei zur Bestätigung angezeigt.
- **Wiederherstellung aus der Sicherung** — öffnet zuerst einen **Bestätigungsdialog**. Wählen Sie im Dialog die Sicherungs-ZIP-Datei aus (**Durchsuchen**/Dateiauswahl oder Drag & Drop, falls unterstützt), und prüfen Sie anschließend die Optionen:
  - **Nutzungsdaten wiederherstellen** — importiert Nutzungsverlauf aus der ZIP-Datei, sofern dieser bei der Sicherung enthalten war; deaktivieren Sie dies, wenn Sie nur Einstellungen und Prompts wiederherstellen möchten.
  - **Alte Nutzungsdaten vor der Wiederherstellung löschen** — entfernt die vorhandenen Nutzungsdaten/Verlauf auf dieser Installation, bevor die Sicherung angewendet wird (optional; nutzen Sie dies, wenn eine vollständige Ersetzung gewünscht ist).

Sicherungen, die entweder in der Web- oder Desktop-Version erstellt wurden, können in der jeweils anderen Version wiederhergestellt werden. Beim Wiederherstellen einer Desktop-Sicherung in der Webversion werden die Daten im Administratorbenutzer wiederhergestellt.


<br/>

<a id="models"></a>

### Modelle

Verwenden Sie **Einstellungen** > **Modelle**, um auszuwählen, welche Modelle in der Symbolleiste angezeigt werden.

![Registerkarte Modelle in den Einstellungen](../images/screenshots/de/settings-models.png)

Die Seite enthält zwei Listen:

- **Verfügbare Modelle** auf der linken Seite
- **Ausgewählte Modelle** auf der rechten Seite

Nützliche Steuerelemente sind unter anderem:

- **Modelle suchen...**, um ein Modell anhand des Namens zu finden
- **Anbieter-Chips**, um die Liste auf einen Anbieter einzuschränken (OpenRouter, OpenAI, Ollama, …)
- **Nur kostenlos**, um ausschließlich kostenlose Modelle anzuzeigen
- **Aktualisieren**, um die Liste neu zu laden
- **Alle erweitern** und **Alle einklappen**, wenn Sie nach Anbietern sortieren

Die Modell-IDs enthalten das Anbieter-Präfix (z. B. `openrouter/…` gegenüber `openai/…`). Kennzeichnungen wie **OpenAI (OpenRouter)** gegenüber **OpenAI (direkt)** zeigen, wie der Datenverkehr weitergeleitet wird.

> ℹ️ **HINWEIS**<br/>

> **OpenRouter Body Builder** (`openrouter/bodybuilder`) ist ein Router-Modell, kein allgemeines Chat-Modell: Seine Antwort ist ein JSON, das OpenRouter-API-Anfragekörper beschreibt (zum Beispiel ein `requests`-Array mit `model` und `messages`). Wenn Sie es für **Übersetzen**, **Umschreiben** oder **Umformen** verwenden, zeigt der Ausgabebereich dieses JSON anstatt fertigen Textes. Wählen Sie für diese Aufgaben ein normales Textmodell. Weitere Informationen finden Sie auf der [Body Builder Modellseite](https://openrouter.ai/openrouter/bodybuilder) auf OpenRouter.

Aktionen:

 - Um ein Modell hinzuzufügen, klicken Sie auf **Hinzufügen** oder auf eine beliebige Stelle im Eintrag.

 - Um ein Modell zu entfernen, klicken Sie auf das **X** daneben in **Ausgewählte Modelle** oder auf das **X** neben dem Eintrag in Verfügbare Modelle.

 - Um die Liste zu leeren, klicken Sie auf **Alle abwählen**. Das erforderliche kostenlose Modell bleibt in der Liste erhalten.

<br/>

> ℹ️ **HINWEIS**<br/>

> Wenn Sie OpenRouter nicht sofort Kredite hinzufügen möchten, aktivieren Sie zunächst **Kostenlos Only** und wählen Sie die kostenlosen Modelle (keine Kreditkarte erforderlich). Sie können auch Ollama verwenden, um Modelle lokal ohne API-Schlüssel auszuführen.

<br/>

<a id="languages"></a>

### Sprachen

Verwenden Sie **Einstellungen** > **Sprachen**, um die in der App verwendeten Sprachenlisten zu verwalten.

- **Bevorzugte Sprachen** werden oben in den Sprachenlisten in **Übersetzen** und **Umwandeln** fixiert.
- **Benutzerdefinierte Sprache** ermöglicht es Ihnen, eine Sprache hinzuzufügen, die nicht in der integrierten Liste enthalten ist.

Wenn Sie eine benutzerdefinierte Sprache hinzufügen, wird sie zusammen mit den integrierten Optionen in den Sprachauswahlen angezeigt.

<br/>

<a id="cost-tracking"></a>

### Kostenverfolgung

Verwenden Sie **Einstellungen** > **Kostenverfolgung**, um Kosteninformationen zu verwalten.

- **Gesamtkosten** zeigt die laufende Gesamtsumme an.
- **Wert kopieren** kopiert die Gesamtsumme in die Zwischenablage.
- **Kosten zurücksetzen** setzt die gespeicherte Gesamtsumme auf null zurück.
- **Mit API-Schlüsselnutzung synchronisieren** setzt die Gesamtsumme auf die von Ihrem OpenRouter-Konto gemeldete Nutzung (nur OpenRouter).
- **API-Schlüssel-Nutzung** zeigt OpenRouter-Nutzungsdetails an, falls verfügbar.
- **Kostendaten löschen** entfernt alle Daten oder nur Einträge, die älter als ein bestimmtes Datum sind.

**Kostenverfolgung:** Wenn Sie OpenRouter-Modelle verwenden, zeigt die Anwendung Ihre tatsächliche Nutzung und Ausgaben basierend auf den Kostendaten von OpenRouter an. Für alle anderen Anbieter schätzt die Anwendung die Kosten anhand der von OpenRouter veröffentlichten Preise. Falls kein Preis verfügbar ist, kann die Schätzung null betragen.

<br/>

> ℹ️ **HINWEIS**<br/>
> **Alle Kostenangaben dienen nur Ihrer Orientierung und sind keine offiziellen Abrechnungen.**

<br/>

> ⚠️ **WARNUNG**<br/>

> Das Löschen von Daten kann nicht rückgängig gemacht werden. Stellen Sie vor dem Löschen sicher, dass Sie Ihre Daten gesichert oder über [**Verlauf**](#history)  
> oder [**Dashboard** > **Alle Aufrufe**](#dashboard-tabs) exportiert haben, andernfalls gehen sie dauerhaft verloren.  
> Der gesamte Eingabe-/Ausgabe-Verlauf, der mit jedem API-Aufruf-Eintrag verbunden ist, wird ebenfalls gelöscht.


<br/>

<a id="transform-prompts"></a>

### Aufforderungen transformieren

Verwenden Sie **Einstellungen** > **Aufforderungen transformieren**, um Aufforderungen massenweise zu verwalten.

Sie können:

- Ihre gespeicherten Aufforderungen überprüfen
- Aufforderungen löschen
- Aufforderungen aus einer Datei importieren
- Aufforderungen zur Sicherung oder zum Teilen exportieren
- Beispiel-Aufforderungen in die Aufforderungsliste laden

<br/>

<a id="users"></a>

### Benutzer

Verwenden Sie **Benutzer**, um Benutzerkonten in der Webversion zu verwalten. Sie können Benutzer hinzufügen, ihre Daten aktualisieren, Passwörter zurücksetzen und Konten löschen.

<br/>

<a id="api-config"></a>

### API-Konfiguration

Die unterstützten Anbieter sind: OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras und **Ollama** (lokale Modelle über eine Basis-URL). Sie müssen nur die Anbieter konfigurieren, die Sie verwenden.

**Webanwendung: Nur für Administratoren**

API-Schlüssel werden über System- oder Docker-Umgebungsvariablen konfiguriert – sie werden nicht in der Web-Oberfläche eingegeben. Auf dieser Seite wird angezeigt, für welche Anbieter ein Schlüssel konfiguriert ist, und Sie können jeden einzelnen über den **`Test`**-Button testen.

<br/>

> ℹ️ **HINWEIS**<br/>
> Um einen API-Schlüssel zu ändern, aktualisieren Sie die Umgebungsvariable in Ihrer System- oder Docker-Konfiguration und starten Sie den Server oder Container neu.

> ℹ️ **HINWEIS**<br/>

> **Konfigurations-Backups** (siehe [**Allgemeine Einstellungen** → Konfigurations-Backup](#general-settings)) können **aufgelöste** Anbieterschlüssel in der `config.json` der ZIP-Datei einbetten. Beim Wiederherstellen der ZIP-Datei werden diese Schlüssel **nicht** wieder in die persistente Konfigurationsdatei des Servers übernommen – aktive Schlüssel stammen weiterhin aus der Umgebung und dem bestehenden Dateizustand, wie dort beschrieben.

<br/>

**Desktop-Anwendung**

Verwenden Sie **API-Konfiguration**, um API-Schlüssel für jeden verwendeten Anbieter zu speichern. Geben Sie bei Ollama die **Basis-URL** anstelle eines API-Schlüssels ein.


<br/>

> 💡 **Tipp** <br/>
> Wenn Sie keinen API-Schlüssel verwenden oder Kosten vermeiden möchten, können Sie [Ollama herunterladen](https://ollama.com) und Modelle (wie z. B. `translategemma:4b`) kostenlos lokal auf Ihrem Gerät ausführen. Alternativ können Sie ein kostenloses OpenRouter-Konto erstellen (keine Kreditkarte erforderlich), um deren kostenlose Modelle zu nutzen, oder einen kostenlosen API-Schlüssel von Cerebras, Google, Groq oder Mistral AI erhalten.

<br/>

- Fügen Sie nur die Anbieter hinzu, die Sie benötigen. Unter **Einstellungen** > **Modelle** beginnt jede Modell-ID mit dem Anbieter (z. B. `openrouter/openrouter/free`, `openai/gpt-4o`, `ollama/llama3`).

Um einen API-Schlüssel hinzuzufügen, geben Sie den Wert in das Textfeld ein und klicken Sie auf **`Speichern`**. Um einen vorhandenen Schlüssel zu ersetzen, klicken Sie auf **`Bearbeiten`**. Um zu prüfen, ob ein Schlüssel funktioniert, klicken Sie auf **`Testen`**. Bei der Ollama-Basis-URL sollten Sie stets **`Testen`** anklicken, um die Verbindung zu überprüfen.

<br/>

> ℹ️ **HINWEIS**<br/>
> Der aktuelle Wert eines API-Schlüssels ist für Sie nicht einsehbar. Sie können ihn nur mithilfe der Schaltfläche **`Bearbeiten`** ersetzen.
> API-Schlüssel werden verschlüsselt in der Konfiguration gespeichert.

<br/>

<a id="about"></a>

### Über

Der Reiter **Über** zeigt Folgendes an:

- den Namen der Anwendung
- die Versionsnummer
- das Erstellungsdatum
- einen Link zum Projekt-Repository

<br/><br/>

<a id="common-issues"></a>

## Häufige Probleme

Wenn etwas nicht wie erwartet funktioniert, überprüfen Sie zuerst die folgenden Punkte.

<br/>

<a id="the-app-will-not-translate-rewrite-or-transform-text"></a>

### Die App übersetzt, schreibt oder transformiert den Text nicht

Überprüfen Sie Folgendes:

- Sie haben ein Modell in der Symbolleiste ausgewählt
- Mindestens ein Modell ist unter [**Einstellungen** > **Modelle**](#models) aufgeführt
- Ihre API-Konfiguration funktioniert

Wenn Sie die Desktop-App verwenden:

1. Öffnen Sie [**Einstellungen** > **API-Konfiguration**](#api-config).
2. Stellen Sie sicher, dass mindestens ein API-Schlüssel gespeichert ist.
3. Klicken Sie auf **Test**, neben dem Anbieter, um zu überprüfen, ob der Schlüssel funktioniert.

<br/>

<a id="the-model-list-is-empty"></a>

### Die Modellliste ist leer

Öffnen Sie [**Einstellungen** > **Modelle**](#models) und klicken Sie auf **Aktualisieren**.

Bei Bedarf:

- ein Modell suchen
- **Nur kostenlos** aktivieren
- ein oder mehrere Modelle zu **Ausgewählte Modelle** hinzufügen

<br/>

<a id="the-result-is-too-slow-or-too-expensive"></a>

### Das Ergebnis ist zu langsam oder zu teuer

Probieren Sie eines oder mehrere der folgenden Dinge aus:

- Wählen Sie ein anderes Modell
- Verwenden Sie eine kürzere Eingabe
- Deaktivieren Sie die **Echtzeit-Übersetzung (beim Tippen)** in [**Einstellungen** > **Allgemeine Einstellungen**](#general-settings)
- Nutzen Sie kostenlose Modelle für einfache Aufgaben (siehe [Modelle](#models))

<br/>

<a id="the-interface-is-in-the-wrong-language"></a>

### Die Schnittstelle ist in der falschen Sprache

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

- Sie nur **kostenlose Modelle** verwenden und sich **Kosten**-Angaben ansehen (diese können Null sein); die Diagramme zur **Nutzung** (Aufrufanzahl) auf der **Übersicht** benötigen noch Daten aus dem gewählten Zeitraum
- der ausgewählte **Zeitfilter** den Zeitraum nicht abdeckt, in dem Aufrufe stattgefunden haben – versuchen Sie es mit **Alle**, um dies zu prüfen

Wenn die Diagramme nach Auswahl von **Alle** weiterhin leer sind, überprüfen Sie, ob Aufrufe in [**Verlauf**](#history) oder im Tab **Alle Aufrufe** angezeigt werden.

<br/>

<a id="cost-shows-not-available-or-seems-wrong"></a>

### Kosten zeigen „nicht verfügbar“ oder scheinen falsch

Wenn Sie Modelle über **OpenRouter** nutzen, zeigt die App Ihre tatsächlichen Ausgaben an, wie von OpenRouter berichtet.

Bei **anderen Anbietern** (direkt über OpenAI, direkt über Anthropic usw.) werden die Kosten anhand der von OpenRouter veröffentlichten Preisdaten geschätzt. Wenn für ein Modell kein passender Preis gefunden wird, erscheinen die Kosten als **nicht verfügbar** und werden nicht zur laufenden Gesamtsumme hinzugerechnet.

<br/>

<a id="total-cost-does-not-match-my-provider-bill"></a>

### Gesamtkosten stimmen nicht mit der Abrechnung meines Anbieters überein

Alle Kostenangaben in der App sind **Schätzungen zur Orientierung**, keine offiziellen Abrechnungen.

Um die Gesamtkosten näher an Ihre tatsächlichen OpenRouter-Ausgaben anzupassen, öffnen Sie [**Einstellungen** > **Kostenverfolgung**](#cost-tracking) und klicken Sie auf **Mit API-Schlüsselnutzung synchronisieren**.

<br/>

<a id="the-history-page-is-missing-from-the-sidebar"></a>

### Die Seite „Verlauf“ fehlt in der Seitenleiste

Die Option **Ausführungsverlauf beibehalten** ist möglicherweise deaktiviert. Öffnen Sie [**Einstellungen** > **Allgemeine Einstellungen**](#general-settings) und aktivieren Sie sie. Beachten Sie, dass durch die Aktivierung nicht zuvor gelöschte Verlaufsdaten wiederhergestellt werden.

<br/>

<a id="web-app-session-expired"></a>

### Web-App: Unerwartete Weiterleitung zur Anmeldeseite

Ihre Sitzung ist möglicherweise abgelaufen. Melden Sie sich erneut an. Wenn dies häufig auftritt, überprüfen Sie die Serverkonfiguration hinsichtlich der Einstellungen für die Sitzungsdauer.

<br/>

<a id="web-admin-forgot-or-lost-a-password"></a>

### Web-Admin: Passwort vergessen oder verloren

Dies gilt für die **selbstgehostete Web-App** (Docker), nicht für die Desktop-App (Electron).

- Falls ein anderer Administrator sich noch anmelden kann, kann dieser auf [**Einstellungen** > **Benutzer**](#users) gehen, das entsprechende Konto auswählen und dort ein **neues Passwort festlegen**.
- Falls Sie **ausgesperrt sind**, aber **Shell-Zugriff** auf die Maschine oder den Container haben, setzen Sie das Passwort über das mitgelieferte Hilfsprogramm zurück (ersetzen Sie `transrewrt`, falls Sie den Standardnamen geändert haben; setzen Sie das Passwort in Anführungszeichen, wenn es Leerzeichen oder Sonderzeichen enthält):

```bash
docker exec transrewrt reset-web-password '<Benutzername>' '<neues-passwort>'
```

Der Standard-Benutzername für den Admin lautet `admin`, sofern Sie keine weiteren Konten erstellt haben. Wenn Sie nur ein Argument angeben, wird dieses als neues Passwort für `admin` verwendet.

Wenn Sie die Anwendung nicht über Docker, sondern aus einer **Quellcode-Kopie** ausführen, verwenden Sie stattdessen:

```bash
pnpm run reset-web-password -- <Benutzername> <neues-passwort>

Das Skript aktualisiert den Benutzerdatensatz in der SQLite-Datenbank (und kann den `admin`-Benutzer erstellen, falls dieser fehlt). Nach dem Zurücksetzen melden Sie sich mit dem neuen Passwort an.


<br/>

<a id="dashboard-shows-no-data-for-other-users"></a>

### Dashboard zeigt keine Daten für andere Benutzer an (Web)

Nur **Administratoren** können über den **Benutzer**-Filter Daten aller Benutzer anzeigen. Reguläre Benutzer sehen standardmäßig ausschließlich ihre eigene Aktivität.

<br/>

<a id="i-changed-a-prompt-and-lost-the-edits"></a>

### Ich habe eine Eingabeaufforderung geändert und die Bearbeitung ist verloren gegangen

Bearbeiten Sie eine Eingabeaufforderung, klicken Sie immer auf **Speichern**, bevor Sie auf **Zurück zur Ausführung** klicken.

<br/><br/>

<a id="quick-tips"></a>

## Kurztipps

- Beginnen Sie mit [**Übersetzen**](#translate), um sicherzustellen, dass Ihre Einrichtung funktioniert, bevor Sie mit [**Umformulieren**](#rewrite) oder [**Transformieren**](#transform) fortfahren.
- Verwenden Sie [**Umformulieren**](#rewrite) für alltägliche Verbesserungen der Textgestaltung.
- Verwenden Sie [**Transformieren**](#transform), wenn Sie einen wiederholbaren Workflow für eine bestimmte Aufgabe benötigen.
- Verwenden Sie [**Dashboard**](#dashboard), wenn Sie den Verbrauch und die Kosten im Auge behalten möchten.
- Verwenden Sie [**Verlauf**](#history), um frühere Operationen sowie deren vollständige Eingabe- und Ausgabetexte einzusehen.
- Exportieren Sie regelmäßig Eingabeaufforderungen, wenn Sie eine sichere Prompt-Bibliothek erstellen oder diese mit anderen teilen möchten (siehe [Transform-Prompts](#transform-prompts)).

<br/><br/>

<a id="disclaimer"></a>

## Haftungsausschluss

Produktnamen und Symbole gehören ihren jeweiligen Eigentümern und werden ausschließlich zu Identifikationszwecken verwendet. Diese Software ist weder mit den genannten Marken verbunden noch von diesen unterstützt.

<br/><br/>

<a id="license"></a>

## Lizenz

Urheberrecht © 2026 Waldemar Scudeller Jr.

[Apache Lizenz 2.0](LICENSE)