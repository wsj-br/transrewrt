---
title: 設定
description: 設定ファイルの場所、Docker環境変数、プライバシーモード、Web認証。
---



## 設定ファイルの場所

| デプロイ | データフォルダ |
| --- | --- |
| Electron (Windows) | `%APPDATA%\transrewrt\` |
| Electron (Linux) | `~/.config/transrewrt/` |
| Web / Docker | `/app/data/` (永続化のためにボリュームを使用) |

データフォルダには、バックアップすべきすべてのものが保存されます：

- `config.json` — 設定および（デスクトップ）暗号化済みAPIキー
- `state.json` — 最後に使用した言語、モデル、ビューステート
- `presets.json` — キャッシュされたEasyモードのプリセットカタログ
- `transrewrt.db` — 履歴、コスト、プロンプト、用語集、および（Web）ユーザーを含むSQLiteデータベース

アプリからポータブルバックアップZIPを作成することもできます — [設定 → 一般設定](/docs/settings/#general-settings) を参照してください。

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
| `LOCAL_LLM_URL` | ローカルサーバーの完全なOpenAI互換APIベースURL（パスを含む、例: Ollama `http://host.docker.internal:11434/v1`, LM Studio `http://host.docker.internal:1234/v1`） |
| `XAI_API_KEY` | xAI APIキー |
| `NVIDIA_API_KEY` | NVIDIA APIキー |
| `ALIBABA_API_KEY` | Alibaba Cloud (DashScope) APIキー |
| `APIFUN_API_KEY` | apikey.fun APIキー |
| `CUSTOM_PROVIDER_NAME` | カスタムOpenAI互換プロバイダーの表示名 |
| `CUSTOM_PROVIDER_URL` | カスタムOpenAI互換プロバイダーのベースURL |
| `CUSTOM_PROVIDER_API_KEY` | カスタムプロバイダーのAPIキー |

カスタムエンドポイントを使用する場合、3つの`CUSTOM_PROVIDER_*`変数すべてが必須です。モデルは**Advanced**モードで`{providerName}/…`として表示されます。

## 環境変数（デスクトップ）

| 変数 | 説明 |
| --- | --- |
| `TRANSREWRT_DISABLE_GPU` | `1`に設定するとハードウェアアクセラレーションを無効にします（LinuxでChromiumがGPU / EGLエラーを出力する場合に便利です） |
| `HISTORY_DISABLED` | 実行履歴を強制的にオフにする（`true` / `1`） — [プライバシーモード](#privacy-mode)を参照 |

## プライバシーモード

Web/Dockerサーバープロセスおよび/またはElectronメインプロセスで`HISTORY_DISABLED`を`true`または`1`に設定すると、`config.json`やユーザーごとの設定に関係なく、履歴を強制的にオフにします。これにより、入出力履歴の保存が無効になり、**Settings → General Settings → History**がロックされ、履歴関連のAPIがブロックされます。

## データ永続化（Docker）

コンテナの再起動後も設定ファイルとSQLiteデータベース（[設定ファイルの場所](#config-file-locations)を参照）が維持されるように、`/app/data`にボリュームをマウントしてください。ボリュームがない場合、コンテナが停止するとデータは失われます。

## Web認証

- デフォルト管理者: `admin` / `transrewrt26`
- ユーザー、セッションタイムアウト、およびセッションの取り消しは **Settings → Users** で管理します。詳細は [Settings](/docs/settings/#users) を参照してください
- サインイン中の各ユーザーは、サイドバー下部のユーザーメニューから自身のパスワードを変更するか、サインアウトできます
- パスワードをリセットする:

```bash
docker exec <container> reset-web-password '<username>' '<new-password>'
```

:::danger
ネットワークからアクセス可能なホストでは、デフォルトの管理者パスワードを直ちに変更してください。
:::

:::caution
サーバーはプレーン HTTP で通信します。localhost や信頼できるネットワーク以外に公開する場合は、パスワードやテキストが平文で送信されないよう、HTTPS を使用するリバースプロキシ (例: Caddy、nginx、Traefik) の背後に配置してください。
:::

## コスト表示

OpenRouterは、該当する場合、正確な請求コストを返します。他のプロバイダーは、OpenRouterキーが利用可能な場合、OpenRouterの公開モデル価格に基づく**estimated**コストを使用します。推定値は請求書ではありません。

設定UI (フォント、モデル、履歴、バックアップ) については、[Settings](/docs/settings/) を参照してください。
