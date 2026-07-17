---
title: 設定
description: 設定ファイルの場所、Docker環境変数、プライバシーモード、およびWeb認証。
translation_last_updated: '2026-07-17T14:59:00.566Z'
source_file_mtime: '2026-07-17T14:43:44.727Z'
source_file_hash: 8c3b2c00eddcee7693d66c5f5955c2d2186e55de630886446764bc6b798f05b5
translation_language: ja
source_file_path: src/content/docs/docs/configuration.md
translation_models:
  - z-ai/glm-5.2
---



## 設定ファイルの場所

| デプロイ | 設定場所 |
| --- | --- |
| Electron (Windows) | `%APPDATA%\transrewrt\` |
| Electron (Linux) | `~/.config/transrewrt/` |
| Web / Docker | `/app/data/config.json` (永続化にボリュームを使用) |

## 環境変数 (Web / Docker)

Electronはローカルの設定ファイルを使用します。Web/Dockerサーバーの場合のみ：

| 変数 | 説明 |
| --- | --- |
| `PORT` | サーバーのリッスンポート (デフォルト `5000`) |
| `CONFIG_PATH` | 設定ファイルへのパス (デフォルト `/app/data/config.json`) |
| `TZ` | サーバー側のタイムゾーン (デフォルト `Europe/London`) |
| `HISTORY_DISABLED` | 実行履歴を強制的にオフにする (`true` / `1`) |
| `OPENROUTER_API_KEY` | OpenRouter APIキー |
| `OPENAI_API_KEY` | OpenAI APIキー |
| `CEREBRAS_API_KEY` | Cerebras APIキー |
| `ANTHROPIC_API_KEY` | Anthropic APIキー |
| `GOOGLE_API_KEY` | Google Gemini APIキー |
| `DEEPSEEK_API_KEY` | DeepSeek APIキー |
| `GROQ_API_KEY` | Groq APIキー |
| `MISTRAL_API_KEY` | Mistral APIキー |
| `LOCAL_LLM_URL` | ローカルサーバーの完全なOpenAI互換APIベースURL（パスを含む、例: Ollama `http://host.docker.internal:11434/v1`、LM Studio `http://host.docker.internal:1234/v1`） |
| `XAI_API_KEY` | xAI APIキー |
| `NVIDIA_API_KEY` | NVIDIA APIキー |
| `ALIBABA_API_KEY` | Alibaba Cloud (DashScope) APIキー |
| `APIFUN_API_KEY` | apikey.fun APIキー |
| `CUSTOM_PROVIDER_NAME` | カスタムOpenAI互換プロバイダーの表示名 |
| `CUSTOM_PROVIDER_URL` | カスタムOpenAI互換プロバイダーのベースURL |
| `CUSTOM_PROVIDER_API_KEY` | カスタムプロバイダーのAPIキー |

カスタムエンドポイントを使用する場合、3つの`CUSTOM_PROVIDER_*`変数すべてが必要です。モデルは**詳細**モードで`{providerName}/…`として表示されます。

## プライバシーモード

Web/Dockerサーバープロセスおよび/またはElectronメインプロセスで`HISTORY_DISABLED`を`true`または`1`に設定すると、`config.json`やユーザーごとの設定に関係なく、履歴を強制的にオフにできます。これにより、入力/出力履歴の保存が無効になり、**設定 → 一般設定 → 履歴**がロックされ、履歴関連のAPIがブロックされます。

## データ永続化 (Docker)

`/app/data`にボリュームをマウントして、`config.json`とSQLiteデータベースがコンテナの再起動後も保持されるようにします。ボリュームがない場合、コンテナが停止するとデータは失われます。

## Web認証

- デフォルトの管理者: `admin` / `transrewrt26`
- ユーザーは**設定 → ユーザー**で管理します
- パスワードのリセット:

```bash
docker exec <container> reset-web-password '<username>' '<new-password>'
```

:::danger
ネットワークからアクセス可能なホストでは、デフォルトの管理者パスワードを直ちに変更してください。
:::

## コスト表示

OpenRouterは、該当する場合に正確な請求コストを返します。他のプロバイダーは、OpenRouterキーが利用可能な場合、OpenRouterの公開モデル価格に基づく**推定**コストを使用します。推定値は請求書ではありません。

設定UI（フォント、モデル、履歴、バックアップ）については、[設定](/docs/settings/)を参照してください。
