---
title: API-Schlüssel
description: >-
  Verbinden Sie Transrewrt mit einem KI-Anbieter Ihrer Wahl, indem Sie einen
  API-Schlüssel hinzufügen, oder verwenden Sie stattdessen ein lokales Modell.
---



Transrewrt enthält keine eigene KI – es sendet Ihren Text an einen KI-Anbieter, den Sie auswählen. Um einen Anbieter zu verbinden, fügen Sie einen **API-Schlüssel** hinzu: einen privaten Code, der vom Anbieter ausgestellt wird und wie ein Passwort für dessen Dienst funktioniert. Sie benötigen nur **einen** Anbieter, um zu beginnen, und Sie müssen nicht bezahlen: Mehrere Anbieter bieten kostenlose Modelle oder kostenlose Stufen an, und Sie können Modelle auch ganz ohne Schlüssel auf Ihrem eigenen Computer ausführen.

Zu den unterstützten Anbietern gehören OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras, NVIDIA, Alibaba Cloud, apikey.fun, jeder OpenAI-kompatible Endpunkt und lokale OpenAI-kompatible Server (Ollama, LM Studio, llama.cpp und ähnliche).

## Schritt 1 – Wählen Sie einen Anbieter

Jeder unterstützte Anbieter funktioniert. Wenn Sie unsicher sind, welchen Sie wählen sollen:

- **Kostenlos starten**: OpenRouter, Google Gemini, Groq, Mistral, Cerebras und NVIDIA bieten alle kostenlose Modelle oder kostenlose Stufen an.
- **Haben Sie bereits ein Konto?** Wenn Sie bereits OpenAI, Anthropic oder einen anderen unterstützten Anbieter nutzen, können Sie dieses Konto einfach wiederverwenden.
- **Möchten Sie alles auf Ihrem eigenen Computer behalten?** Überspringen Sie den Schlüssel vollständig und verwenden Sie stattdessen ein [lokales Modell](#using-a-local-model-instead-no-api-key).

## Schritt 2 – Erstellen Sie einen API-Schlüssel

Die genauen Schritte variieren je nach Anbieter geringfügig, aber das Muster ist überall gleich:

1. Registrieren Sie sich oder melden Sie sich auf der Website des Anbieters an. In Transrewrts **Einstellungen → API-Konfiguration** hat jeder Anbieter einen Link **Anbieter-Website öffnen**, der Sie zur richtigen Stelle führt.
2. Suchen Sie die Seite **API-Schlüssel** (manchmal unter Konto, Dashboard oder Entwicklereinstellungen) und erstellen Sie einen neuen Schlüssel. Einige Anbieter bitten Sie, den Schlüssel zu benennen oder ein Ausgabenlimit festzulegen – beides ist optional.
3. Kopieren Sie den Schlüssel. Es ist eine lange Zeichenfolge aus Buchstaben und Zahlen, die oft mit etwas wie `sk-` beginnt.

:::note
Behandeln Sie einen API-Schlüssel wie ein Passwort: Geben Sie ihn nicht weiter, veröffentlichen Sie ihn nicht und senden Sie ihn niemandem. Wenn ein Schlüssel bekannt wird, löschen Sie ihn auf der Website des Anbieters und erstellen Sie einen neuen.
:::

## Schritt 3 – Schlüssel hinzufügen und testen (Desktop)

1. Öffnen Sie in Transrewrt **Einstellungen → API-Konfiguration**.
2. Fügen Sie den Schlüssel in das Feld für Ihren Anbieter ein (zum Beispiel **Google Gemini API-Schlüssel**) und speichern Sie ihn.
3. Klicken Sie neben dem Feld auf **Testen**, um zu bestätigen, dass der Schlüssel funktioniert.

Sobald der Test erfolgreich ist, sind Sie bereit – wählen Sie diesen Anbieter auf dem Hauptbildschirm aus und beginnen Sie mit der Übersetzung.

## Stattdessen ein lokales Modell verwenden (kein API-Schlüssel)

Sie können Modelle auf Ihrem eigenen Computer mit Ollama, LM Studio, llama.cpp oder einem anderen OpenAI-kompatiblen Server ausführen (zum Beispiel `google/gemma-4-e2b` über LM Studio). Nichts verlässt Ihren Computer und es wird kein API-Schlüssel benötigt.

Um eine Verbindung herzustellen, setzen Sie die Basis-URL des lokalen LLM auf die vollständige API-Basis, einschließlich des Pfads – zum Beispiel `http://localhost:11434/v1`. Auf dem Desktop stellen Sie dies in **Einstellungen → API-Konfiguration** ein; unter Docker setzen Sie stattdessen die Umgebungsvariable `LOCAL_LLM_URL`.

:::tip
Wenn Sie einen lokalen LLM-Server von einem anderen Gerät oder Container verwenden, konfigurieren Sie ihn so, dass er externe Verbindungen zulässt (nicht nur localhost).
:::

## Docker / Web

Wenn Sie Transrewrt in einem Browser verwenden, werden die Schlüssel von demjenigen verwaltet, der den Server betreibt, und nicht in die Browser-Benutzeroberfläche eingegeben. Der Administrator legt die Anbieterschlüssel als **Umgebungsvariablen** auf dem Server fest (zum Beispiel `PROVIDER_API_KEY`) – siehe [Konfiguration](/docs/configuration/).

## Checkliste für die erste Ausführung

1. Öffnen Sie die App und stellen Sie bei Bedarf die **Oberflächensprache** ein.
2. Fügen Sie mindestens einen Anbieterschlüssel hinzu und testen Sie ihn – oder konfigurieren Sie ein lokales Modell (Desktop), oder bestätigen Sie, dass der Server Umgebungsschlüssel hat (Web).
3. Im **einfachen** Modus wählen Sie einen **Anbieter** in den Allgemeinen Einstellungen; im **erweiterten** Modus fügen Sie Modelle unter **Einstellungen → Modelle** hinzu – siehe [Einstellungen](/docs/settings/#general-settings) für die beiden Modi.
4. Unter **Übersetzen** wählen Sie eine Voreinstellung oder ein Modell aus und führen einen kurzen Test durch – siehe [Text übersetzen](/docs/translate/).

## Wenn etwas nicht funktioniert

- **Der Schlüsseltest schlägt fehl**: Überprüfen Sie, ob der Schlüssel vollständig kopiert wurde (keine Leerzeichen davor oder danach) und ob er auf der Website des Anbieters nicht gelöscht oder deaktiviert wurde.
- **Übersetzungen schlagen mit einem Kontingent- oder Guthabenfehler fehl**: Kostenlose Tarife haben tägliche oder monatliche Limits; warten Sie, wechseln Sie zu einem anderen kostenlosen Anbieter oder fügen Sie Guthaben hinzu.
- **Im Easy-Modus wird kein Anbieter angezeigt**: Öffnen Sie **Einstellungen → API-Konfiguration** und vergewissern Sie sich, dass mindestens ein Schlüssel (oder die lokale LLM-URL) konfiguriert und getestet wurde.

Weitere Hilfe: [Häufige Probleme](/docs/common-issues/).
