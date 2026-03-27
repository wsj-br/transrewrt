---
translated_at: "2026-03-27T23:10:40.901Z"
source_hash: "076eff841a5f0e4f5c43a00dd28f2702bd2dde0602a830890285b5ffdc38ad5a"
source_mtime: "2026-03-27T20:34:13.877Z"
model: "qwen/qwen3-235b-a22b-2507"
---
<p align="center">
  <img src="../images/transrewrt_logo.svg" alt="Transrewrt ロゴ" width="120" />
</p>

<h1 align="center">Transrewrt</h1>

<p align="center">
  <a href="https://github.com/wsj-br/transrewrt/releases"><img src="https://img.shields.io/badge/version-1.0.15-blue" alt="バージョン"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-Apache%202.0-green" alt="ライセンス: Apache 2.0"></a>
  <img src="https://img.shields.io/badge/platform-Windows%20%7C%20Linux%20%7C%20Docker-lightgrey" alt="プラットフォーム">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react" alt="React 19">
  <img src="https://img.shields.io/badge/Electron-41-47848F?logo=electron" alt="Electron 41">
</p>

AI搭載のテキストツール：複数のAIプロバイダー（OpenRouter、OpenAI、Anthropic、Google Gemini、DeepSeek、Groq、Mistral、xAI、およびローカルOllama）を使用して、言語間の翻訳、さまざまなスタイルへの言い換え、カスタムプロンプトによる変換を実行できます。デスクトップアプリ（Electron）またはセルフホスト型のWebアプリ（Docker）として実行可能です。

- **翻訳** — 数十の言語間で翻訳可能。ソース言語の自動検出付き
- **言い換え** — 文法の修正、明確さの向上、フォーマル／カジュアルへの変換、短縮、展開、技術文書への調整など
- **変換** — カスタムAIプロンプトを使用。プロンプトの作成・管理が可能。プロンプトごとに目標言語を個別設定可能
- **履歴** — 入出力テキストを含む完全な実行履歴、フィルタリングおよびエクスポート機能
- **モデルと費用** — 設定済みプロバイダーのいずれかからモデルを選択可能。コストと使用状況のダッシュボード（ログ、モデル／操作／日別サマリー付き）
- **UI** — 多言語インターフェース（30以上の言語対応、RTL対応）、フォント等
- **Webモード** — 管理者ロール付きの多ユーザー対応
- **デスクトップ版** — WindowsおよびLinux用Electronアプリ
- **セルフホスト対応** — amd64およびarm64（Raspberry Pi対応）用Dockerイメージ

インストール後は、すべての機能の使い方を解説する **[ユーザーガイド](USER-GUIDE.ja.md)** をご確認ください。

<small>**他の言語で読む：** </small>
<small id="lang-list"> [English (UK)](../README.md) · [Português (BR)](README.pt-BR.md) · [العربية](README.ar.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [Hrvatski](README.hr.md) · [Čeština](README.cs.md) · [Nederlands](README.nl.md) · [English (US)](README.en-US.md) · [Filipino](README.tl.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [हिन्दी](README.hi.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [Basa Jawa](README.jv.md) · [한국어](README.ko.md) · [Bahasa Melayu](README.ms.md) · [فارسی](README.fa.md) · [Polski](README.pl.md) · [Português (PT)](README.pt.md) · [ਪੰਜਾਬੀ](README.pa.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [Slovenčina](README.sk.md) · [Español](README.es.md) · [Kiswahili](README.sw.md) · [Svenska](README.sv.md) · [తెలుగు](README.te.md) · [ภาษาไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Tiếng Việt](README.vi.md)</small>

<small>

> **UIおよびドキュメント翻訳に関する注意:** 英語（イギリス）の原文を除くすべての言語のインターフェース翻訳はAIモデルを使用して行っています。表現が不正確であったり、誤りが含まれている場合があります。

</small>

<br/>

<a id="screenshots"></a>

## スクリーンショット

**言語セレクタ**

![言語セレクタ](../images/screenshots/ja/language-selector.png)

**翻訳**

![翻訳](../images/screenshots/ja/translate.png)

**変換 - プロンプトエディタ**

![変換 - プロンプトエディタ](../images/screenshots/ja/transform-prompt-edit.png)

**ダッシュボード**

![コストダッシュボード](../images/screenshots/ja/dashboard-summary.png)

**履歴**

![履歴](../images/screenshots/ja/history.png)

**設定 - モデル選択**

![設定 - モデル選択](../images/screenshots/ja/settings-models.png)

<br/><br/>

<a id="table-of-contents"></a>
## 目次

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [すぐに始める](#quick-start)
- [インストール](#installation)
  - [Windows (Electron)](#windows-electron)
  - [Linux (Electron)](#linux-electron)
  - [Docker](#docker)
- [OpenRouter APIキーの取得](#getting-an-openrouter-api-key)
- [設定と環境](#configuration-and-environment)
- [開発とアーキテクチャ](#development-and-architecture)
- [リリースとタグ](#releases-and-tags)
- [貢献方法](#contributing)
- [免責事項](#disclaimer)
- [ライセンス](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="quick-start"></a>

## クイックスタート

**Docker（セルフホスティングに推奨）**

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest

OPENROUTER_API_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_API_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

`sk-or-your-key` の部分を [OpenRouter APIキー](https://openrouter.ai/keys) に置き換えてください（または他のプロバイダーのキーを設定することも可。詳細は[設定と環境](#configuration-and-environment)を参照）。[http://localhost:5000](http://localhost:5000) を開いて、サービスを外部に公開する前に既定の管理者パスワードを変更してください。

<br/>

> ℹ️ **注意**<br/>
> Dockerでは、LLMの認証情報は環境変数（`OPENROUTER_API_KEY`、`OPENAI_API_KEY`、`CEREBRAS_API_KEY` など）で設定します（Web UIではありません）。デスクトップ版（Electron）では、**設定 → API** からキーを設定できます。

<br/>

**Windows**

[リリース](https://github.com/wsj-br/transrewrt/releases) から最新の `Transrewrt Setup x.y.z.exe` をダウンロードし、インストーラーを実行してから、スタートメニューまたはデスクトップのショートカットから起動します。**設定 → API** でAPIキーを入力してください。少なくとも1つのプロバイダーを設定する必要があります。無料モデルを利用するにはOpenRouterが一般的です。

<br/>

**Linux**

[リリース](https://github.com/wsj-br/transrewrt/releases) からお使いのCPUに合った `.AppImage` ファイルをダウンロードしてください（通常のPCには `x64`、Raspberry Pi 4以降を含む多くのARMデバイスには `arm64`）。その後、以下を実行します：

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

**設定 → API** でAPIキーを入力してください。少なくとも1つのプロバイダーを設定する必要があります。無料モデルを利用するにはOpenRouterが一般的です。

Debian/Ubuntuをお使いの場合は、事前に以下の依存パッケージをインストールする必要があるかもしれません：

```bash
sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth
```

詳細は [インストール → Linux](#linux-electron) を参照してください。

<br/>

> ℹ️ **注意**<br/>
> 現在、macOSはサポートされていません。TransrewrtはWindows、Linux、Docker向けに提供されています。

<br/>

アプリが起動したら、**[ユーザーガイド](USER-GUIDE.ja.md)** を参照して、テキストの翻訳・書き換え・変換、プロンプトの管理、モデルの設定方法などを学んでください。

<br/><br/>

<a id="installation"></a>

## インストール

<a id="windows-electron"></a>
### Windows (Electron)

- 最新のインストーラーを [リリースページ](https://github.com/wsj-br/transrewrt/releases) からダウンロードしてください。
- `.exe`ファイルを実行し、インストーラーの指示に従ってください。
- 初回起動：スタートメニューまたはデスクトップのショートカットからアプリを起動してください。

<br/>

<a id="linux-electron"></a>
### Linux (Electron)

- [リリースページ](https://github.com/wsj-br/transrewrt/releases) から対応する `.AppImage` ファイル（`x64` または `arm64`）をダウンロードしてください。
- 実行：x86_64/amd64環境では `chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage` を実行。ARM64環境では `...-arm64.AppImage` ファイルを使用してください。
- 追加の依存関係（Debian/Ubuntu）：`sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth`
- 詳細は [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) を参照してください。

<br/>

<a id="docker"></a>
### Docker

- 取得：`docker pull ghcr.io/wsj-br/transrewrt:latest`
- 少なくとも1つのプロバイダーのキーを環境変数経由で設定してください（例：OpenRouterの場合は `OPENROUTER_API_KEY`）。`-e` オプション、または `docker compose`／`.env` ファイルを使って変数を渡し、シークレット情報をイメージに組み込まないようにしてください。
- プロバイダーキーは**Web UI上では入力しないでください**。サーバーは環境変数からそれらを読み取ります。

例：永続化のため名前付きボリュームを使用（OpenRouterキーは環境変数経由）：

```bash
OPENROUTER_API_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_API_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

または、Docker Compose を使う場合は以下を使用してください：

# コンポーズファイルをダウンロードする
wget https://github.com/wsj-br/transrewrt/raw/refs/heads/master/production.yml -O transrewrt.yml
# API_KEYSを追加するためにファイルを編集する
vi transrewrt.yml
# コンテナを起動する
docker compose -f transrewrt.yml up -d
```

<br/>

| オプション   | 説明                                                                                                                            |
|----------|----------------------------------------------------------------------------------------------------------------------------------------|
| ポート     | `5000`（`-p 5000:5000`でマッピング）                                                                                                       |
| ボリューム   | 設定およびデータベースの永続化のために`/app/data`をマウント                                                                                  |
| 環境変数 | `PORT`, `CONFIG_PATH`、およびLLMのキー（`OPENROUTER_API_KEY`, `OPENAI_API_KEY` など） - [設定](#configuration-and-environment) を参照してください |

ソースコードからビルドして実行するには：`docker compose up --build -d` または `pnpm docker:up` - [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) を参照してください。

<br/><br/>

<a id="getting-an-openrouter-api-key"></a>

## OpenRouter API キーの取得方法

Transrewrt は複数の AI プロバイダーをサポートしています。[OpenRouter](https://openrouter.ai) は、多数のモデルを1つのキーで利用でき、無料モデルも提供しているため、人気のある選択肢です。

1. [openrouter.ai](https://openrouter.ai) でサインアップまたはログインします。
2. [Keys](https://openrouter.ai/keys) ページを開き、新しいキーを作成してください（名前を付け、必要に応じてクレジットの上限を設定できます）。クレジットを追加しなくても、無料モデルは利用可能です。
3. **デスクトップ版 (Electron)**：**設定 → API** にキーを貼り付けます。**Docker**：`OPENROUTER_API_KEY` などの環境変数を設定してください（[クイックスタート](#quick-start)を参照）。

翻訳・書き換え・変換タスクには、OpenRouter の **Body Builder** モデル（[`openrouter/bodybuilder`](https://openrouter.ai/openrouter/bodybuilder)）を使用しないでください。このモデルは、処理済みのテキストではなく、JSON 形式のリクエストペイロードを返すためです。詳細はユーザーガイドの [設定 → モデル](USER-GUIDE.ja.md#models) をご覧ください。

その他のプロバイダー（OpenAI、Anthropic、Google Gemini、DeepSeek、Groq、Mistral、xAI、Cerebras）を使用したり、[Ollama](https://ollama.com) を使ってモデルをローカルで実行することも可能です。サポートされているプロバイダーと環境変数の一覧は、[設定と環境](#configuration-and-environment) をご確認ください。

> ⚠️ **警告**<br/>
> 他のデバイス、コンテナ、またはサービスから Ollama を使用する場合は、Ollama を外部接続（localhost 限定ではない）を許可するように設定し忘れないでください。

制限事項、BYOK（Bring Your Own Key）、その他の詳細は、[OpenRouter 認証](https://openrouter.ai/docs/api/reference/authentication) を参照してください。

<br/><br/>

<a id="configuration-and-environment"></a>

## 設定と環境

**設定ファイルの場所**

| デプロイ方法       | 設定ファイルの場所                                |
| ------------------ | ------------------------------------------------- |
| Electron (Windows) | `%APPDATA%\transrewrt\`                           |
| Electron (Linux)   | `~/.config/transrewrt/`                           |
| Web / Docker       | `/app/data/config.json` (永続化にはボリュームを使用) |

<br/>

**環境変数** (Web/Dockerのみ使用; Electronはローカルの設定ファイルを使用)

| 変数名               | デフォルト値            | 説明 |
| -------------------- | ----------------------- | ---- |
| `PORT`               | `5000`                  | サーバーのリッスンポート |
| `CONFIG_PATH`        | `/app/data/config.json` | 設定ファイルのパス |
| `OPENROUTER_API_KEY` | *(空)*                  | OpenRouter APIキー |
| `OPENAI_API_KEY`     | *(空)*                  | OpenAI APIキー |
| `CEREBRAS_API_KEY`   | *(空)*                  | Cerebras APIキー |
| `ANTHROPIC_API_KEY`  | *(空)*                  | Anthropic APIキー |
| `GOOGLE_API_KEY`     | *(空)*                  | Google Gemini APIキー |
| `DEEPSEEK_API_KEY`   | *(空)*                  | DeepSeek APIキー |
| `GROQ_API_KEY`       | *(空)*                  | Groq APIキー |
| `MISTRAL_API_KEY`    | *(空)*                  | Mistral APIキー |
| `OLLAMA_URL`         | *(空)*                  | OllamaのベースURL (例: `http://host.docker.internal:11434`) |
| `XAI_API_KEY`        | *(空)*                  | xAI APIキー |

利用するプロバイダーのみを設定してください。モデルIDは名前空間付きです（`openrouter/…`、`openai/…`、`cerebras/…`、`ollama/…` など）。

**コスト表示について:** OpenRouterは、該当する場合に正確な請求額を返します。それ以外のプロバイダーは、OpenRouterキーが利用可能な場合にOpenRouterの公開価格に基づく**推定コスト**を使用します。OpenRouterキーがない場合、OpenRouter以外のコストは`0`と表示されることがあります。これらの推定値は請求書ではありません。

<br/>

**データと永続化:** Dockerでは、コンテナ再起動時に`config.json`およびSQLiteデータベースが保持されるよう、`/app/data`にボリュームをマウントしてください。ボリュームがない場合、コンテナ停止時にすべてのデータが失われます。

**開発者向け:** 古い単一キーの設定を置き換える変更を取得した後、ローカルの`data/config.json`ファイルが削除されたフィールド（`api_key`、`api_url`、プロキシ設定など）を使用している場合は、`src/config-defaults/config_default.json`にある新しいデフォルトの構造に従って、設定ファイルをリセットまたはマージしてください。

<br/>

**Web認証:**

- デフォルトの管理者アカウント: `admin` / `transrewrt26`。
- ユーザー管理は **設定 → ユーザー** から行えます。
- パスワードのリセット: `docker exec <container> reset-web-password '<username>' '<new-password>'`
  (ソースコードから実行する場合: `pnpm run reset-web-password -- <username> <new-password>`)

<br/>

> ⚠️ **警告**<br/>
> 任意のネットワーク経由でアクセス可能なホストでは、直ちにデフォルトの管理者パスワードを変更してください。

<br/>

主要な設定（フォント、モデル、言語など）は、アプリケーションの「設定」から変更できます。

<br/><br/>

<a id="development-and-architecture"></a>

## 開発とアーキテクチャ

- **開発:** セットアップ、ビルド、テスト、デプロイ（Electron、Web、Docker）については、**[dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)** を参照してください。
- **アーキテクチャとシステム概要:** フォルダ構成、技術スタック、設計上の意思決定については、**[dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)** を参照してください。

<br/><br/>

<a id="releases-and-tags"></a>
## リリースとタグ

- **Gitタグ** `v`*（例: `v1.0.10`）は[リリースワークフロー](.github/workflows/release.yml)をトリガーします。**GitHub Releases**では、Windowsインストーラー（`.exe`）とLinux用AppImage（**x64** および **arm64**）が添付されます。
- **Dockerイメージ**は `ghcr.io/wsj-br/transrewrt` に公開されます。イメージのタグはGitのバージョンに対応しています（例: `v1.0.10` → `ghcr.io/wsj-br/transrewrt:1.0.10`）の他に、`latest` も含まれます。マルチアーキテクチャ対応: `linux/amd64` および `linux/arm64`（例: Raspberry Pi）。

<br/><br/>

<a id="contributing"></a>
## コントリビュートについて

1. リポジトリをフォークしてください。
2. 機能ブランチを作成: `git checkout -b feature/my-feature`
3. 明確なメッセージで変更をコミット
4. 変更をプッシュし、`main` ブランチに対してプルリクエストを開いてください。

提出前に、既存のコードスタイルに従い、ElectronおよびWebの両モードで変更内容をテストしてください。ビルドおよびテスト手順については、[dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) を参照してください。

<br/>

**問題の報告:** [GitHub](https://github.com/wsj-br/transrewrt/issues)でイシューを作成してください。使用しているプラットフォーム（Windows / Linux / Docker）およびアプリのバージョン（「情報」ダイアログまたはリリースページに記載）を含めて報告してください。

<br/><br/>

<a id="disclaimer"></a>

## 免責事項

製品名およびアイコンはそれぞれの所有者に帰属しており、識別目的でのみ使用されています。本ソフトウェアは、記載されているブランドと関係ありませんし、それらのブランドによる推奨や承認を受けていません。

<br/><br/>

<a id="license"></a>
## ライセンス

Copyright © 2026 Waldemar Scudeller Jr.

[Apache License 2.0](LICENSE)