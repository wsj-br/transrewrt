---
title: API-Schlüssel
description: >-
  Holen Sie sich einen kostenlosen OpenRouter-API-Schlüssel und verbinden Sie
  andere KI-Anbieter mit Transrewrt.
translation_last_updated: '2026-07-17T14:58:53.574Z'
source_file_mtime: '2026-07-17T14:58:48.569Z'
source_file_hash: 540c5b2b785355828a421293195b23c2fec98502888d607638fbb33f93970a2a
translation_language: de
source_file_path: src/content/docs/docs/api-key.md
translation_models:
  - google/gemini-2.5-flash
---



Transrewrt benötigt Zugriff auf mindestens einen KI-Anbieter. Sie benötigen **kein** kostenpflichtiges Modell, um zu beginnen: OpenRouter bietet kostenlose Modelle an, nachdem Sie einen Schlüssel hinzugefügt haben, und mehrere andere Anbieter bieten ebenfalls kostenlose Stufen an.

Zu den unterstützten Anbietern gehören [OpenRouter](https://openrouter.ai), OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras, NVIDIA, Alibaba Cloud, apikey.fun, jeder OpenAI-kompatible Endpunkt und lokale OpenAI-kompatible Server (Ollama, LM Studio, llama.cpp und ähnliche).

## Einfach vs. Erweitert

- **Einfacher** Modus (Standard): Wählen Sie eine **Voreinstellung** (Kostenlos (OpenRouter), Standard, Erweitert oder Technisch), die einem **Anbieter** zugeordnet ist. Es werden nur Voreinstellungen angezeigt, die eine Zuordnung für den aktuellen Anbieter haben.
- **Erweiterter** Modus: Wählen Sie Modelle direkt aus. Modell-IDs verwenden ein Anbieterpräfix (z. B. `openrouter/…`, `openai/…`, `local/…`).

## Kostenloser OpenRouter-Schlüssel (Desktop)

1. Gehen Sie zu [openrouter.ai](https://openrouter.ai) und registrieren Sie sich oder melden Sie sich an.
2. Öffnen Sie die Seite [Keys](https://openrouter.ai/keys) und erstellen Sie einen neuen Schlüssel (benennen Sie ihn; optionales Kreditlimit). Sie können kostenlose Modelle verwenden, ohne Guthaben hinzuzufügen.
3. Öffnen Sie in Transrewrt **Einstellungen → API-Konfiguration**, fügen Sie den Schlüssel in **OpenRouter API-Schlüssel** ein und klicken Sie auf **OpenRouter-Schlüssel testen**.

:::caution
Verwenden Sie das **Body Builder**-Modell von OpenRouter (`openrouter/bodybuilder`) nicht zum Übersetzen, Umschreiben oder Transformieren – es gibt JSON-Anforderungs-Payloads zurück, keine vollständigen Texte.
:::

## Andere kostenlose Optionen

Sie können auch kostenlose API-Schlüssel von Cerebras, Google, Groq, Mistral AI oder [NVIDIA](https://build.nvidia.com/) (OpenAI-kompatible API) erhalten oder Modelle lokal mit Ollama, LM Studio, llama.cpp oder einem anderen OpenAI-kompatiblen Server ausführen (z. B. `translategemma:4b` über Ollama). Legen Sie die Basis-URL des lokalen LLM auf die vollständige API-Basis fest (fügen Sie den Pfad hinzu, z. B. `http://localhost:11434/v1`) in den Einstellungen (Desktop) oder `LOCAL_LLM_URL` (Docker).

:::caution
Wenn Sie einen lokalen LLM-Server von einem anderen Gerät oder Container verwenden, konfigurieren Sie ihn so, dass externe Verbindungen zugelassen werden (nicht nur localhost).
:::

## Docker / Web

Legen Sie die Anbieterschlüssel als **Umgebungsvariablen** auf dem Server fest (z. B. `PROVIDER_API_KEY`). Benutzer können Schlüssel nicht in die Browser-Benutzeroberfläche eingeben. Siehe [Konfiguration](/docs/configuration/).

## Checkliste für die erste Ausführung

1. Öffnen Sie die App und stellen Sie bei Bedarf die **Interface language** ein.
2. Fügen Sie mindestens einen Anbieter-Schlüssel hinzu und testen Sie ihn (Desktop) oder bestätigen Sie, dass der Server Umgebungsschlüssel (Web) hat.
3. Wählen Sie im Modus **Easy** einen **Provider** in den Allgemeinen Einstellungen aus; im Modus **Advanced** fügen Sie Modelle unter **Settings → Models** hinzu.
4. Wählen Sie unter **Translate** eine Voreinstellung oder ein Modell aus und führen Sie einen kurzen Test durch – siehe [Text übersetzen](/docs/translate/).
