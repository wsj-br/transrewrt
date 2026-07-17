---
title: APIキー
description: 無料のOpenRouter APIキーを取得し、他のAIプロバイダーをTransrewrtに接続します。
---



Transrewrtは少なくとも1つのAIプロバイダーへのアクセスを必要とします。開始するのに有料モデルは**必要ありません**：OpenRouterはキーを追加後に無料モデルを提供し、他のいくつかのプロバイダーも無料枠を提供しています。

サポートされているプロバイダーには、[OpenRouter](https://openrouter.ai)、OpenAI、Anthropic、Google Gemini、DeepSeek、Groq、Mistral、xAI、Cerebras、NVIDIA、Alibaba Cloud、apikey.fun、任意のOpenAI互換エンドポイント、およびローカルのOpenAI互換サーバー（Ollama、LM Studio、llama.cppなど）が含まれます。

## 簡易モードと詳細モード

- **Easy**モード（デフォルト）：**プロバイダー**にマッピングされた**プリセット**（Free (OpenRouter)、Standard、Advanced、またはTechnical）を選択します。現在のプロバイダーにマッピングされているプリセットのみが表示されます。
- **Advanced**モード：モデルを直接選択します。モデルIDにはプロバイダーのプレフィックスが使用されます（例：`openrouter/…`、`openai/…`、`local/…`）。

## 無料のOpenRouterキー（デスクトップ）

1. [openrouter.ai](https://openrouter.ai)にアクセスし、サインアップまたはログインします。
2. [Keys](https://openrouter.ai/keys)ページを開き、新しいキーを作成します（名前を付けます；クレジット制限は任意）。クレジットを追加せずに無料モデルを使用できます。
3. Transrewrtで**Settings → API Config**を開き、キーを**OpenRouter API key**に貼り付けて、**Test OpenRouter key**をクリックします。

:::caution
OpenRouterの**Body Builder**モデル（`openrouter/bodybuilder`）を翻訳、リライト、または変換に使用しないでください — これは完成したテキストではなく、JSONリクエストペイロードを返します。
:::

## その他の無料オプション

Cerebras、Google、Groq、Mistral AI、または [NVIDIA](https://build.nvidia.com/)（OpenAI互換API）から無料のAPIキーを取得することもできます。または、Ollama、LM Studio、llama.cpp、または別のOpenAI互換サーバー（例: Ollama経由の `translategemma:4b`）を使用してモデルをローカルで実行することもできます。設定（デスクトップ）または `LOCAL_LLM_URL`（Docker）で、Local LLM base URL を完全なAPIベース（パスを含む、例: `http://localhost:11434/v1`）に設定します。

:::caution
別のデバイスやコンテナからローカルLLMサーバーを使用する場合は、外部接続を許可するように設定してください（localhostのみに限定しないでください）。
:::

## Docker / ウェブ

サーバー上でプロバイダーキーを**環境変数**として設定します（例: `PROVIDER_API_KEY`）。ユーザーがブラウザUIにキーを入力することはできません。[設定](/docs/configuration/)を参照してください。

## 初回実行時のチェックリスト

1. アプリを開き、必要に応じて**インターフェース言語**を設定します。
2. プロバイダーキーを少なくとも1つ追加してテストする（デスクトップ）、またはサーバーに環境キーがあることを確認します（ウェブ）。
3. **Easy**モードでは、一般設定で**プロバイダー**を選択します。**Advanced**モードでは、**設定 → モデル**でモデルを追加します。
4. **Translate**で、プリセットまたはモデルを選択し、短いテストを実行します — [テキストの翻訳](/docs/translate/)を参照してください。
