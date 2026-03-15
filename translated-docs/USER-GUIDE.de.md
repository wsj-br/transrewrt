---
translated_at: "2026-03-15T22:12:22.364Z"
source_hash: "69732149de931f2a0059ecf9073871caedaa431362e32c010e7d93bd3cbd76bc"
source_mtime: 1773611603946.006
model: "stepfun/step-3.5-flash:free"
---
<a id="transrewrt-user-guide"></a>
# Transrewrt Benutzerhandbuch

<br />

<a id="introduction"></a>
## Einleitung

Transrewrt hilft Ihnen auf drei Hauptwegen mit Text zu arbeiten:

- **Übersetzen** - Text von einer Sprache in eine andere konvertieren.
- **Umschreiben** - Text in einem anderen Stil umformulieren, z. B. klarer, kürzer oder formeller.
- **Transformieren** - Text mit benutzerdefinierten KI-Anweisungen (sogenannten Prompts) verarbeiten.

<br />

Dieses Handbuch erklärt, wie Sie die App nach der Installation und dem Start verwenden. Installationsschritte finden Sie in der Haupt-[README](../README.md).

<br />

> ℹ️ **HINWEIS**<br/>
> Transrewrt ist als Desktop-App für Windows und Linux sowie als selbst gehostete Web-App verfügbar. Dieses Handbuch konzentriert sich auf die tägliche Nutzung der App. Wenn etwas nur für eine Version gilt, ist dies deutlich gekennzeichnet.

<small>**In anderen Sprachen lesen:** [English (UK)](../USER-GUIDE.md) · [Português (BR)](USER-GUIDE.pt-BR.md) · [العربية](USER-GUIDE.ar.md) · [বাংলা](USER-GUIDE.bn.md) · [Català](USER-GUIDE.ca.md) · [简体中文](USER-GUIDE.zh-CN.md) · [繁體中文](USER-GUIDE.zh-TW.md) · [Hrvatski](USER-GUIDE.hr.md) · [Čeština](USER-GUIDE.cs.md) · [Nederlands](USER-GUIDE.nl.md) · [English (US)](USER-GUIDE.en-US.md) · [Filipino](USER-GUIDE.tl.md) · [Français](USER-GUIDE.fr.md) · [Deutsch](USER-GUIDE.de.md) · [Ελληνικά](USER-GUIDE.el.md) · [हिन्दी](USER-GUIDE.hi.md) · [Magyar](USER-GUIDE.hu.md) · [Italiano](USER-GUIDE.it.md) · [日本語](USER-GUIDE.ja.md) · [Basa Jawa](USER-GUIDE.jv.md) · [한국어](USER-GUIDE.ko.md) · [Bahasa Melayu](USER-GUIDE.ms.md) · [فارسی](USER-GUIDE.fa.md) · [Polski](USER-GUIDE.pl.md) · [Português (PT)](USER-GUIDE.pt.md) · [ਪੰਜਾਬੀ](USER-GUIDE.pa.md) · [Română](USER-GUIDE.ro.md) · [Русский](USER-GUIDE.ru.md) · [Slovenčina](USER-GUIDE.sk.md) · [Español](USER-GUIDE.es.md) · [Kiswahili](USER-GUIDE.sw.md) · [Svenska](USER-GUIDE.sv.md) · [తెలుగు](USER-GUIDE.te.md) · [ภาษาไทย](USER-GUIDE.th.md) · [Türkçe](USER-GUIDE.tr.md) · [Українська](USER-GUIDE.uk.md) · [Tiếng Việt](USER-GUIDE.vi.md)</small>

<br />

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Inhaltsverzeichnis**

- [Vor dem Start](#before-you-start)
  - [So erhalten Sie einen API-Schlüssel (Desktop-App)](#how-to-get-an-api-key-desktop-app)
- [Erste Schritte](#getting-started)
- [Hauptteile des Fensters](#main-parts-of-the-window)
  - [Seitenleiste](#sidebar)
  - [Symbolleiste](#toolbar)
  - [Eingabe- und Ausgabefelder](#input-and-output-panels)
- [Übersetzen](#translate)
  - [Text übersetzen](#translate-text)
  - [Sprachauswahl](#language-selection)
  - [Hilfreiche Übersetzungseinstellungen](#helpful-translation-settings)
  - [Tastaturkürzel](#keyboard-shortcuts)
- [Umschreiben](#rewrite)
  - [Text umschreiben](#rewrite-text)
- [Transformieren](#transform)
  - [Vorhandenen Prompt ausführen](#run-an-existing-prompt)
  - [Wenn Sie noch keine Prompts haben](#if-you-have-no-prompts-yet)
  - [Prompt schnell erstellen](#create-a-prompt-quickly)
  - [Prompt bearbeiten](#edit-a-prompt)
  - [Prompt vor der Nutzung testen](#test-a-prompt-before-using-it)
  - [Gespeicherte Prompts verwalten](#manage-saved-prompts)
- [Dashboard](#dashboard)
  - [Daten filtern](#filter-the-data)
  - [Dashboard-Registerkarten](#dashboard-tabs)
  - [Daten exportieren](#export-data)
  - [Gespeicherte Datensätze für ein Modell löschen](#delete-stored-records-for-a-model)
- [Einstellungen](#settings)
  - [Allgemeine Einstellungen](#general-settings)
  - [Modelle](#models)
  - [Sprachen](#languages)
  - [Kostenerfassung](#cost-tracking)
  - [Transform-Prompts](#transform-prompts)
  - [Benutzer](#users)
  - [API-Konfiguration](#api-config)
  - [Über](#about)
- [Häufige Probleme](#common-issues)
  - [Die App übersetzt, schreibt um oder transformiert den Text nicht](#the-app-will-not-translate-rewrite-or-transform-text)
  - [Die Modellliste ist leer](#the-model-list-is-empty)
  - [Das Ergebnis ist zu langsam oder zu teuer](#the-result-is-too-slow-or-too-expensive)
  - [Die Oberfläche ist in der falschen Sprache](#the-interface-is-in-the-wrong-language)
  - [Der Text ist zu klein oder schwer zu lesen](#the-text-is-too-small-or-hard-to-read)
  - [Ich habe einen Prompt geändert und die Änderungen verloren](#i-changed-a-prompt-and-lost-the-edits)
- [Quick-Tipps](#quick-tips)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br /><br />

<a id="before-you-start"></a>

## Bevor Sie beginnen

Um Transrewrt zu verwenden, benötigen Sie Zugang zum KI-Dienst über OpenRouter.

Sie müssen vor dem Start kein kostenpflichtiges Modell auswählen. Die App enthält immer ein integriertes **kostenloses** Modell, sodass dies für die normale Nutzung ausreicht, um mit dem Übersetzen, Umschreiben und Transformieren von Text zu beginnen.

In einfachen Worten:

- Ein **Modell** ist die KI-Engine, die die Arbeit verrichtet.
- Ein **API-Schlüssel** ist Ihr persönlicher Zugangscredential für diesen Dienst.

Wenn Sie die **Desktop-App** verwenden, benötigen Sie einen API-Schlüssel. Ausführliche Schritte finden Sie unten unter [So erhalten Sie einen API-Schlüssel](#how-to-get-an-api-key-desktop-app). Kurz gesagt: Erstellen Sie ein Konto bei [OpenRouter](https://openrouter.ai), öffnen Sie die Seite [Schlüssel](https://openrouter.ai/keys), erstellen Sie einen neuen Schlüssel und fügen Sie ihn in Transrewrt unter [**Einstellungen** > **API-Konfiguration**](#api-config) ein.

Wenn Sie die **Webversion** verwenden, übernimmt der Serveradministrator diese Einrichtung normalerweise für Sie, sodass Sie in der Regel keinen API-Schlüssel selbst eingeben müssen.

<br />

<a id="how-to-get-an-api-key-desktop-app"></a>
### So erhalten Sie einen API-Schlüssel (Desktop-App)

Wenn Sie die Desktop-App verwenden, befolgen Sie diese Schritte:

1. Öffnen Sie [OpenRouter](https://openrouter.ai) in Ihrem Webbrowser.
2. Erstellen Sie ein Konto oder melden Sie sich an.
3. Öffnen Sie die Seite [Schlüssel](https://openrouter.ai/keys).
4. Klicken Sie auf die Schaltfläche, um einen neuen API-Schlüssel zu erstellen.
5. Geben Sie dem Schlüssel einen Namen, damit Sie ihn später wiedererkennen.
6. Kopieren Sie den neuen API-Schlüssel.
7. Kehren Sie zu Transrewrt zurück und öffnen Sie **Einstellungen** > **API-Konfiguration**.
8. Fügen Sie den Schlüssel in das Feld **OpenRouter API-Schlüssel** ein.
9. Klicken Sie auf **API-Konfiguration testen**, um sicherzustellen, dass sie funktioniert.

> ℹ️ **HINWEIS**<br/>
> Sie können mit dem kostenlosen Angebot von OpenRouter oder einem der anderen verfügbaren kostenlosen Modelle beginnen. In vielen Fällen reicht dies aus, um Transrewrt zu nutzen, ohne ein kostenpflichtiges Modell auswählen zu müssen.

<br /><br />

<a id="getting-started"></a>
## Erste Schritte

Wenn Sie Transrewrt zum ersten Mal verwenden, befolgen Sie diese Reihenfolge:

1. Öffnen Sie die App.
2. Wählen Sie bei Bedarf Ihre **Benutzeroberflächensprache** über das Globus-Symbol aus.
3. Wenn Sie die **Desktop-App** verwenden, öffnen Sie [**Einstellungen** > **API-Konfiguration**](#api-config), fügen Sie Ihren OpenRouter API-Schlüssel ein und klicken Sie auf **API-Konfiguration testen**.
4. Öffnen Sie [**Einstellungen** > **Modelle**](#models) und fügen Sie ein oder mehrere Modelle zu **Ausgewählte Modelle** hinzu.
5. Öffnen Sie [**Einstellungen** > **Sprachen**](#languages) und wählen Sie Ihre **Top-Sprachen**, wenn möchten, dass Ihre am häufigsten verwendeten Sprachen zuerst erscheinen.
6. Gehen Sie zu **Übersetzen** und führen Sie eine einfache Übersetzung durch, um zu bestätigen, dass alles funktioniert.
7. Sobald das funktioniert, probieren Sie **Umschreiben** und dann **Transformieren** aus.

Diese Reihenfolge ist wichtig. Sie verhindert das häufigste Problem beim ersten Gebrauch: einen Task zu starten, bevor die App eine funktionierende API-Verbindung oder ein ausgewähltes Modell hat.

<br /><br />

<a id="main-parts-of-the-window"></a>
## Hauptbereiche des Fensters

Die App ist in drei Hauptbereiche unterteilt:

- Die **Seitenleiste** links.
- Die **Symbolleiste** oben.
- Der **Arbeitsbereich** in der Mitte.

<br />

<a id="sidebar"></a>
### Seitenleiste

Verwenden Sie die Seitenleiste, um in der App zu navigieren:

<br />

<table>
  <tr>
    <td valign="top">
       <img src="../images/screenshots/de/sidebar.png" alt="Anwendungsseitenleiste" style="max-width: 100%; border: 1px solid #ddd; border-radius: 4px;">
    </td>
    <td valign="top">
      <br />
      <ul>
        <li><strong>Übersetzen</strong> öffnet den Übersetzungsarbeitsbereich.</li>
        <li><strong>Umschreiben</strong> öffnet den Umschreibarbeitsbereich.</li>
        <li><strong>Transformieren</strong> öffnet den Arbeitsbereich für benutzerdefinierte Prompts.</li>
        <li><strong>Dashboard</strong> zeigt Nutzungs- und Kosteninformationen an.</li>
        <li><strong>Einstellungen</strong> öffnet das Einstellungsfenster.</li>
        <li><strong>Benutzer</strong> zeigt den Benutzernamen des angemeldeten Benutzers (nur Web).</li>
      </ul>
      <br />
      <p>Sie können die Seitenleiste auch für mehr Platz einklappen, indem Sie auf das Symbol neben dem App-Logo klicken.</p>
    </td>
  </tr>
</table>

<br />

<a id="toolbar"></a>
### Symbolleiste

Die Symbolleiste ändert sich geringfügig, je nachdem, wo Sie sich in der App befinden.

- Links zeigt sie den aktuellen Seitennamen.
- Rechts zeigt sie die **Modellauswahl** und das Steuerelement für die **Benutzeroberflächensprache**.

Mit der **Modellauswahl** können Sie auswählen, welche KI-Engine für den aktuellen Task verwendet werden soll.

  ![Modellauswahl](../images/screenshots/de/model-selector.png)

> ℹ️ **HINWEIS**<br/>
> Einige kostenlose Modelle können vorübergehend nicht mehr funktionieren, wenn sie nicht verfügbar sind oder ein Nutzungslimit erreicht haben. In diesem Fall entfernt die App das Modell automatisch aus Ihrer Liste.


  ![Benutzeroberflächensprachauswahl](../images/screenshots/de/language-selector.png)

<br />

<a id="input-and-output-panels"></a>

### Eingabe- und Ausgabepanels

Die meisten Arbeitsbereiche verwenden ein linkes **Eingabe**-Panel und ein rechtes **Ausgabe**-Panel.

Das **Eingabe**-Panel zeigt:

- Zeichenanzahl
- Wortanzahl
- Abschnittanzahl

Das **Ausgabe**-Panel kann anzeigen:

- Wie lange die Aufgabe gedauert hat
- Die Kosten dieser Aufgabe
- Ihre Gesamtkosten insgesamt
- **TPS** (Tokens pro Sekunde), ein einfaches Geschwindigkeitsmaß
- Zeichen-, Wort- und Abschnittanzahl
- Das verwendete Modell

Wenn Sie sich über die technischen Begriffe wundern:

- **Token** bedeutet ein kleiner Textabschnitt. Sie können es sich als Teil eines Wortes oder ein kurzes Wort vorstellen.
- **TPS** bedeutet, wie viele dieser Textabschnitte das Modell pro Sekunde verarbeitet hat.

<br /><br />

<a id="translate"></a>
## Übersetzen

Verwenden Sie **Übersetzen**, wenn Sie Text von einer Sprache in eine andere konvertieren möchten.

![Arbeitsbereich „Übersetzen“](../images/screenshots/de/translate.png)

<br />

<a id="translate-text"></a>
### Text übersetzen

1. Öffnen Sie **Übersetzen**.
2. Wählen Sie eine Sprache in **Von**.
3. Wählen Sie eine Sprache in **Nach**.
4. Wählen Sie ein Modell in der Symbolleiste.
5. Geben Sie Text in **Eingabe** ein oder fügen Sie ihn ein.
6. Klicken Sie auf **Übersetzen**.
7. Lesen Sie das Ergebnis in **Ausgabe**.
8. Verwenden Sie die Kopierschaltfläche, wenn Sie das Ergebnis kopieren möchten.

<br />

<a id="language-selection"></a>
### Sprachauswahl

- **Von** kann eine bestimmte Sprache oder **Sprache erkennen** sein.
- **Nach** ist die Sprache, in der Sie das Ergebnis haben möchten.

Ihre ausgewählten **Top-Sprachen** erscheinen oben in der Liste. Sie können diese in [**Einstellungen** > **Sprachen**](#languages) festlegen.

<br />

<a id="helpful-translation-settings"></a>
### Hilfreiche Übersetzungseinstellungen

In [**Einstellungen** > **Allgemeine Einstellungen**](#general-settings) können Sie das Verhalten der Übersetzung ändern:

- **Bei Einfügen automatisch übersetzen** führt eine Übersetzung aus, sobald Sie Text einfügen.
- **Ergebnis automatisch in Zwischenablage kopieren** kopiert das Ergebnis automatisch nach einem erfolgreichen Durchlauf.
- **Echtzeitübersetzung (beim Tippen)** führt Übersetzungen durch, während Sie tippen.
- **Timeout (ms)** steuert, wie lange die App wartet, bevor eine Echtzeitübersetzung gestartet wird.

<br />

<a id="keyboard-shortcuts"></a>
### Tastenkombinationen

In [**Einstellungen** > **Allgemeine Einstellungen**](#general-settings) steuert **Verhalten bei ENTER**, was passiert, wenn Sie die Eingabetaste drücken:

- **Enter** kann die Aufgabe ausführen und **Umschalt+Enter** kann eine neue Zeile einfügen.
- Oder die App kann das Gegenteil tun.

Die aktuelle Tastenkombination wird auch auf der Schaltfläche **Übersetzen** angezeigt.

<br /><br />

<a id="rewrite"></a>
## Umschreiben

Verwenden Sie **Umschreiben**, wenn Sie den Wortlaut verbessern möchten, ohne die Hauptaussage zu ändern.

![Arbeitsbereich „Umschreiben“](../images/screenshots/de/rewrite.png)

Dies ist nützlich für:

- Beheben von Rechtschreibung und Grammatik
- Klarer machen von Text
- Formeller oder informeller machen von Text
- Kürzen oder Erweitern von Text
- Technischer klingen lassen von Text

<br />

<a id="rewrite-text"></a>
### Text umschreiben

1. Öffnen Sie **Umschreiben**.
2. Wählen Sie einen **Modus**.
3. Wählen Sie ein Modell in der Symbolleiste.
4. Geben Sie Text in **Eingabe** ein oder fügen Sie ihn ein.
5. Klicken Sie auf **Umschreiben**.
6. Prüfen Sie das Ergebnis in **Ausgabe**.

Das gleiche Verhalten der Eingabetaste, das in [**Übersetzen**](#keyboard-shortcuts) beschrieben ist, gilt auch hier.

<br /><br />

<a id="transform"></a>
## Transformieren

Verwenden Sie **Transformieren**, wenn Sie möchten, dass die KI einem benutzerdefinierten Satz von Anweisungen folgt.

![Arbeitsbereich „Transformieren“](../images/screenshots/de/transform.png)

Dies ist der flexibelste Bereich der App. Sie können ihn für Aufgaben wie folgende verwenden:

- Zusammenfassen von Notizen
- Umwandeln von grobem Text in eine ausgefeilte E-Mail
- Extrahieren von Schlüsselpunkten
- Konvertieren von Text in ein bestimmtes Format

<br />

<a id="run-an-existing-prompt"></a>
### Einen vorhandenen Prompt ausführen

1. Öffnen Sie **Transformieren**.
2. Wählen Sie einen Prompt aus der Prompt-Liste.
3. Wenn ein **Ziel**-Sprachfeld erscheint, wählen Sie eine Sprache, wenn gewünscht.
4. Geben Sie Text in **Eingabe** ein oder fügen Sie ihn ein.
5. Klicken Sie auf **Transformieren**.
6. Lesen Sie das Ergebnis in **Ausgabe**.

<br />

<a id="if-you-have-no-prompts-yet"></a>
### Wenn Sie noch keine Prompts haben

Wenn Ihre Prompt-Liste leer ist, klicken Sie auf **Beispiel-Prompts laden**. Dies fügt eingebaute Beispiele hinzu, damit Sie schnell starten können.

> ℹ️ **HINWEIS**<br/>
> Beispiel-Prompts werden auf Englisch bereitgestellt. Nach dem Laden können Sie einen Prompt bearbeiten und **Prompt übersetzen** verwenden, wenn Sie den Prompt-Text für eine andere Sprache anpassen möchten.

<br />

<a id="create-a-prompt-quickly"></a>

### Erstellen Sie schnell einen Prompt

Der schnellste Weg, einen Prompt zu erstellen:

1. Klicken Sie auf **Neuen Prompt**.
2. Klicken Sie auf **Prompt generieren**.
3. Beschreiben Sie, was der Prompt tun soll.
4. Wählen Sie ein Modell.
5. Lassen Sie die App einen Entwurf für Sie erstellen.
6. Prüfen Sie den Entwurf und klicken Sie auf **Speichern**.

![Prompt generieren](../images/screenshots/de/transform-generate.png)


<br />

### Einen Prompt bearbeiten

Wenn Sie einen Prompt erstellen oder bearbeiten, erscheint der Editor auf der linken Seite und ein Testbereich auf der rechten.

![Transprompt-Editor](../images/screenshots/de/transform-prompt-edit.png)

Die wichtigsten Felder sind:

- **Prompt-Name**: der in der Prompt-Liste angezeigte Name.
- **Prompt-Anweisungen (optional)**: ein kurzer Hinweis, der dem Benutzer bei der Ausführung des Prompts angezeigt wird.
- **Modellrolle**: die dem KI-System zugewiesene Gesamtrolle, z. B. 'Sie sind ein hilfreicher Assistent.'
- **Modellanweisungen (je eine pro Zeile)**: die spezifischen Regeln, denen das KI-System folgen soll.
- **Ausgabebeschreibung**: ein kurzes Wort, das das Ergebnis beschreibt, z. B. 'Zusammenfassung' oder 'Umschreiben'.
- **Temperatur (0.0 → 1.0)**: ein Schieberegler für die Kreativität.
- **Zielsprache abfragen**: fügt bei der Ausführung des Prompts einen Zielsprachenselektor hinzu.

Wenn der technische Begriff **Temperatur** für Sie neu ist, denken Sie daran:

- Eine **niedrigere** Temperatur liefert beständigere, vorhersehbarere Ergebnisse.
- Eine **höhere** Temperatur liefert mehr Abwechslung und Kreativität.

Sie können auch verwenden:

- **`Prompt generieren`**, um einen neuen Entwurf aus einer einfachen Beschreibung zu erstellen
- **`Prompt verbessern`**, um einen vorhandenen Prompt zu verfeinern
- **`Prompt übersetzen`**, um die Prompt-Felder zu übersetzen

> ⚠️ **WARNUNG**<br/>
> Klicken Sie auf **`Speichern`**, bevor Sie auf **`Zurück zur Ausführung`** klicken. Wenn Sie ohne zu speichern zurückgehen, gehen Ihre Änderungen verloren.

<br />

<a id="test-a-prompt-before-using-it"></a>
### Testen Sie einen Prompt vor der Verwendung

Das Testfeld auf der rechten Seite ermöglicht es Ihnen, Ihren Prompt mit einem Beispieltext zu testen, bevor Sie ihn im täglichen Arbeitsablauf verwenden.

Das ist nützlich, wenn:

- Sie einen neuen Prompt erstellen
- Sie zwei Versionen eines Prompts vergleichen
- Sie Tonfall, Länge oder Ausgabeformat prüfen möchten

<br />

<a id="manage-saved-prompts"></a>
### Gespeicherte Prompts verwalten

Um gespeicherte Prompts an einem Ort zu verwalten, öffnen Sie [**Einstellungen** > **Transprompts**](#transform-prompts).

Dort können Sie:

- Ihre Prompts auflisten und löschen
- Prompts als **JSON**, **CSV** oder **XLSX** exportieren
- Prompts aus einer Datei importieren

<br /><br />

## Dashboard

Verwenden Sie das **Dashboard**, um zu sehen, wie viel Sie die App nutzen und was sie kostet.

![Dashboard-Zusammenfassung](../images/screenshots/de/dashboard-summary.png)

<br />

<a id="filter-the-data"></a>
### Daten filtern

Verwenden Sie die Filter-Schaltflächen oben, um den Zeitraum zu ändern.

![Dashboard-Filter](../images/screenshots/de/dashboard-filter.png)

> ℹ️ **HINWEIS**<br/>
> In der Webversion können Administratoren auch einen **Benutzer**-Filter sehen. Dieser ermöglicht den Wechsel zwischen **Alle Benutzer** und einem einzelnen Benutzer.

<br />

<a id="dashboard-tabs"></a>
### Dashboard-Registerkarten

- **Zusammenfassung** gibt Ihnen einen Überblick über Nutzung und Kosten.
- **Nach Nutzung** gliedert die Aktivität nach Übersetzungssprache, Umschreibmodus und Transprompt.
- **Nach Modell** zeigt, welche Modelle Sie verwendet haben und wie viel sie gekostet haben.
- **Nach Tag** zeigt tägliche Gesamtsummen.
- **Alle Aufrufe** zeigt den vollständigen Aufrufverlauf und ermöglicht den Export.

<br />

<a id="export-data"></a>
### Daten exportieren

Die Dashboard-Tabellen können Daten in folgenden Formaten exportieren:

- **JSON**
- **CSV**
- **XLSX**

Dies ist nützlich, wenn Sie die Aktivität außerhalb der App überprüfen oder einen Bericht freigeben möchten.

<br />

<a id="delete-stored-records-for-a-model"></a>
### Gespeicherte Aufzeichnungen für ein Modell löschen

In **Nach Modell** oder **Alle Aufrufe** können Sie gespeicherte Aufzeichnungen für ein Modell entfernen.

> ⚠️ **WARNUNG**<br/>
> Das Löschen gespeicherter Aufzeichnungen kann nicht rückgängig gemacht werden. Verwenden Sie dies nur, wenn Sie sicher sind, dass Sie diesen Verlauf nicht mehr benötigen.

Um alle Daten zu löschen oder Aufzeichnungen basierend auf ihrem Alter zu entfernen, gehen Sie zu [**Einstellungen** > **Kostenverfolgung**](#cost-tracking). Dort finden Sie Optionen zum Löschen aller gespeicherten Daten oder nur von Daten, die älter als ein bestimmtes Datum sind.

<br /><br />

<a id="settings"></a>
## Einstellungen

Öffnen Sie **Einstellungen** aus der Seitenleiste, um das Verhalten der App anzupassen.

Die verfügbaren Registerkarten können variieren:

- **API-Konfiguration** ist nur in der Desktop-App verfügbar.
- **Benutzer** ist nur in der Web-App verfügbar und nur für Administratoren.

<br />

<a id="general-settings"></a>

### Allgemeine Einstellungen

Verwenden Sie **Allgemeine Einstellungen**, um das Tippverhalten und das Erscheinungsbild zu steuern.

**Verhalten**

- **Verhalten bei ENTER** legt fest, ob Enter die Aufgabe ausführt oder eine neue Zeile einfügt.
- **Automatische Übersetzung beim Einfügen** startet die Übersetzung, sobald Sie Text einfügen.
- **Ergebnis automatisch in Zwischenablage kopieren** kopiert erfolgreiche Ergebnisse automatisch.
- **Echtzeit-Übersetzung (während des Tippens)** übersetzt während Sie tippen.
- **Timeout (ms)** legt die Wartezeit für die Echtzeit-Übersetzung fest.

**Erscheinungsbild**

- **Kosten-Anteilsziffern** ändert, wie Kosten-Nachkommastellen angezeigt werden.
- **Schriftart** ändert die Schrift in den Textbereichen.
- **Größe** ändert die Schriftgröße.
- **Nur Web:** **Rand um die App anzeigen** fügt zusätzlichen Raum um die Oberfläche hinzu.

<br />

<a id="models"></a>
### Modelle

Verwenden Sie **Einstellungen** > **Modelle**, um auszuwählen, welche Modelle in der Symbolleiste erscheinen.

![Einstellungen: Modelle-Registerkarte](../images/screenshots/de/settings-models.png)

Die Seite hat zwei Listen:

- **Verfügbare Modelle** links
- **Ausgewählte Modelle** rechts

Nützliche Steuerelemente umfassen:

- **Modelle suchen...** um ein Modell nach Namen zu finden
- **Nur kostenlos** um nur kostenlose Modelle anzuzeigen
- **Aktualisieren** um die Liste neu zu laden
- **Alle ausklappen** und **Alle einklappen** wenn Sie nach Anbieter sortieren

Um ein Modell hinzuzufügen, klicken Sie auf **Hinzufügen**.

Um ein Modell zu entfernen, klicken Sie auf das **X** daneben in **Ausgewählte Modelle**.

Um die Liste zu leeren, klicken Sie auf **Alle abwählen**. Das erforderliche kostenlose Modell verbleibt in der Liste.

> ℹ️ **HINWEIS**<br/>
> Wenn Sie keine Credits sofort zu OpenRouter hinzufügen möchten, aktivieren Sie zunächst **Nur kostenlos** und wählen Sie die kostenlosen Modelle aus.

<br />

<a id="languages"></a>
### Sprachen

Verwenden Sie **Einstellungen** > **Sprachen**, um die in der App verwendeten Sprachlisten zu organisieren.

- **Top-Sprachen** sind in den Sprachlisten in **Übersetzen** und **Transformieren** oben angeheftet.
- **Benutzerdefinierte Sprache** ermöglicht das Hinzufügen einer Sprache, die nicht in der integrierten Liste enthalten ist.

Wenn Sie eine benutzerdefinierte Sprache hinzufügen, erscheint sie neben den integrierten Optionen in den Sprachauswahlmenüs.

<br />

<a id="cost-tracking"></a>
### Kostenverfolgung

Verwenden Sie **Einstellungen** > **Kostenverfolgung**, um Kosteninformationen zu verwalten.

- **Gesamtkosten** zeigt die laufende Summe.
- **Wert kopieren** kopiert die Gesamtkosten in die Zwischenablage.
- **Kosten zurücksetzen** setzt die gespeicherte Gesamtsumme auf null zurück.
- **Mit API-Schlüsselnutzung synchronisieren** setzt die Gesamtkosten auf den von OpenRouter gemeldeten Verbrauch.
- **API-Schlüsselnutzung** zeigt Nutzungsdetails, falls verfügbar.
- **Kostendaten löschen** entfernt alle Daten oder nur Einträge, die älter als ein ausgewähltes Datum sind.

> ⚠️ **WARNUNG**<br/>
> Datenlöschung kann nicht rückgängig gemacht werden. Sichern Sie Ihre Daten vor dem Löschen oder exportieren Sie sie über [**Dashboard** > **Alle Aufrufe**](#dashboard-tabs), da sie sonst dauerhaft verloren gehen.

<br />

<a id="transform-prompts"></a>
### Transform-Prompts

Verwenden Sie **Einstellungen** > **Transform-Prompts**, um Prompts massenhaft zu verwalten.

Sie können:

- Ihre gespeicherten Prompts überprüfen
- Prompts löschen
- Prompts aus einer Datei importieren
- Prompts zur Sicherung oder zum Teilen exportieren

<br />

<a id="users"></a>
### Benutzer

**Nur Web - nur Administratoren**

Verwenden Sie **Benutzer**, um Benutzerkonten in der Webversion zu verwalten. Sie können Benutzer hinzufügen, ihre Details aktualisieren, Passwörter zurücksetzen und Konten löschen.

<br />

<a id="api-config"></a>
### API-Konfiguration

**Nur Desktop**

Verwenden Sie **API-Konfiguration**, um die Desktop-App mit OpenRouter oder einem Transrewrt-Proxy zu verbinden.

- **OpenRouter-API-Schlüssel** ist, wo Sie Ihren Schlüssel einfügen.
- **API-URL** ist die Serviceadresse. Belassen Sie die Standardeinstellung, es sei denn, Ihnen wurde eine andere angegeben.
- **Transrewrt-Proxy verwenden** leitet Anfragen über einen Proxy-Dienst weiter, statt direkt an OpenRouter.
- **Schlüsselsamen** erscheint, wenn die Proxy-Option aktiviert ist.
- **API-Konfiguration testen** prüft, ob die aktuelle Einrichtung funktioniert.

Detaillierte Schritte zum Abrufen Ihres API-Schlüssels finden Sie oben unter [So erhalten Sie einen API-Schlüssel](#how-to-get-an-api-key-desktop-app).

> ℹ️ **HINWEIS**<br/>
> Wenn Sie sich nicht sicher sind, was **API-URL**, **Transrewrt-Proxy verwenden** oder **Schlüsselsamen** bedeuten, belassen Sie sie unverändert und verwenden Sie die Standard-OpenRouter-Einrichtung. Weitere Informationen zum Proxy sind im [Transrewrt-Proxy-Repository](https://github.com/wsj-br/transrewrt-proxy) verfügbar.

<br />

<a id="about"></a>

### Über

Die Registerkarte **Über** zeigt:

- den App-Namen
- die Versionsnummer
- das Build-Datum
- einen Link zum Projekt-Repository

<br /><br />

<a id="common-issues"></a>
## Häufige Probleme

Wenn etwas nicht wie erwartet funktioniert, überprüfen Sie zunächst die folgenden Punkte.

<br />

<a id="the-app-will-not-translate-rewrite-or-transform-text"></a>
### Die App übersetzt, schreibt um oder transformiert Text nicht

Prüfen Sie:

- Sie haben ein Modell in der Symbolleiste ausgewählt
- mindestens ein Modell wird unter [**Einstellungen** > **Modelle**](#models) aufgeführt
- Ihre API-Konfiguration funktioniert

Wenn Sie die Desktop-App verwenden:

1. Öffnen Sie [**Einstellungen** > **API-Konfiguration**](#api-config).
2. Prüfen Sie, ob Ihr API-Schlüssel gespeichert ist.
3. Klicken Sie auf **API-Konfiguration testen**.

<br />

<a id="the-model-list-is-empty"></a>
### Die Modellliste ist leer

Öffnen Sie [**Einstellungen** > **Modelle**](#models) und klicken Sie auf **Aktualisieren**.

Falls nötig:

- suchen Sie nach einem Modell
- aktivieren Sie **Nur kostenlose**
- fügen Sie ein oder mehrere Modelle zu **Ausgewählte Modelle** hinzu

<br />

<a id="the-result-is-too-slow-or-too-expensive"></a>
### Das Ergebnis ist zu langsam oder zu teuer

Versuchen Sie eines oder mehrere dieser:

- wählen Sie ein anderes Modell
- verwenden Sie eine kürzere Eingabe
- deaktivieren Sie **Echtzeitübersetzung (während der Eingabe)** unter [**Einstellungen** > **Allgemeine Einstellungen**](#general-settings)
- verwenden Sie kostenlose Modelle für einfache Aufgaben (siehe [Modelle](#models))

<br />

<a id="the-interface-is-in-the-wrong-language"></a>
### Die Oberfläche ist in der falschen Sprache

Klicken Sie auf das Globus-Symbol in der [Symbolleiste](#toolbar) und wählen Sie Ihre bevorzugte **Oberflächensprache**.

<br />

<a id="the-text-is-too-small-or-hard-to-read"></a>
### Der Text ist zu klein oder schwer lesbar

Öffnen Sie [**Einstellungen** > **Allgemeine Einstellungen**](#general-settings) und ändern Sie:

- **Schriftart**
- **Größe**

<br />

<a id="i-changed-a-prompt-and-lost-the-edits"></a>
### Ich habe einen Prompt geändert und die Änderungen verloren

Beim Bearbeiten eines Prompts klicken Sie immer auf **Speichern**, bevor Sie auf **Zurück zu Ausführen** klicken.

<br /><br />

<a id="quick-tips"></a>
## Kurztipps

- Beginnen Sie mit [**Übersetzen**](#translate), um sicherzustellen, dass Ihre Konfiguration funktioniert, bevor Sie zu [**Umschreiben**](#rewrite) oder [**Transformieren**](#transform) übergehen.
- Verwenden Sie [**Umschreiben**](#rewrite) für alltägliche Verbesserungen des Wortlauts.
- Verwenden Sie [**Transformieren**](#transform), wenn Sie einen wiederholbaren Workflow für eine bestimmte Aufgabe benötigen.
- Verwenden Sie [**Dashboard**](#dashboard), wenn Sie die Nutzung und Kosten im Auge behalten möchten.
- Exportieren Sie Prompts regelmäßig, wenn Sie eine Prompt-Bibliothek aufbauen, die Sie sichern möchten (siehe [Transform-Prompts](#transform-prompts)).

<br /><br />

<a id="disclaimer"></a>
## Haftungsausschluss

Produktnamen und -symbole gehören den jeweiligen Eigentümern und werden nur zur Identifizierung verwendet. Diese Software ist mit keiner der genannten Marken verbunden oder wird von ihnen unterstützt.

<br /><br />

<a id="license"></a>
## Lizenz

Copyright © 2026 Waldemar Scudeller Jr.

[Apache License 2.0](LICENSE)