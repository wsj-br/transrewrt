---
translated_at: "2026-03-25T22:20:45.585Z"
source_hash: "7b3703140b5006a6bfb0700c530b1afcc6e9b0fc364d69c57960ab4609dccbd9"
source_mtime: 1774475429145.525
model: "qwen/qwen3-235b-a22b-2507"
---
<p align="center">
  <img src="../images/transrewrt_logo.svg" alt="Transrewrtロゴ" width="120" />
</p>

<h1 align="center">Transrewrt</h1>

<p align="center">
  <a href="https://github.com/wsj-br/transrewrt/releases"><img src="https://img.shields.io/badge/version-1.0.15-blue" alt="バージョン"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-Apache%202.0-green" alt="ライセンス: Apache 2.0"></a>
  <img src="https://img.shields.io/badge/platform-Windows%20%7C%20Linux%20%7C%20Docker-lightgrey" alt="対応プラットフォーム">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react" alt="React 19">
  <img src="https://img.shields.io/badge/Electron-41-47848F?logo=electron" alt="Electron 41">
</p>

AI搭載のテキストツール：複数のAIプロバイダー（OpenRouter、OpenAI、Anthropic、Google Gemini、DeepSeek、Groq、Mistral、xAI、およびローカルOllama）を利用して、言語間翻訳、スタイルの書き換え、カスタムプロンプトによる変換が可能。デスクトップアプリ（Electron）またはセルフホスト型ウェブアプリ（Docker）として動作。

- **翻訳** — 数十の言語間で相互翻訳、ソース言語の自動検出機能付き
- **書き換え** — 文法修正、明確化、フォーマル／カジュアル、短縮、展開、技術文書への変換など
- **変換** — カスタムAIプロンプト。プロンプトの作成と管理が可能。プロンプトごとに目的言語を個別指定可能
- **履歴** — 入出力テキスト、フィルタリング、エクスポート可能な完全な実行履歴
- **モデルと費用** — 設定済みプロバイダーのいずれかからモデルを選択可能。ログや、モデル／操作／日別サマリー付きの費用と利用状況のダッシュボード
- **UI** — 多言語インターフェース（30以上の言語対応、RTL対応）、フォント、...
- **Webモード** — 管理者ロール付きの多ユーザー対応
- **デスクトップ版** — WindowsおよびLinux用Electronアプリ
- **セルフホスト対応** — amd64およびarm64（Raspberry Pi対応）用Dockerイメージ

インストール後は、すべての機能を詳しく紹介する **[ユーザーガイド](USER-GUIDE.ja.md)** をご確認ください。

<small>**他の言語で読む：** [English (UK)](../README.md) · [Português (BR)](README.pt-BR.md) · [العربية](README.ar.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [Hrvatski](README.hr.md) · [Čeština](README.cs.md) · [Nederlands](README.nl.md) · [English (US)](README.en-US.md) · [Filipino](README.tl.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [हिन्दी](README.hi.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [Basa Jawa](README.jv.md) · [한국어](README.ko.md) · [Bahasa Melayu](README.ms.md) · [فارسی](README.fa.md) · [Polski](README.pl.md) · [Português (PT)](README.pt.md) · [ਪੰਜਾਬੀ](README.pa.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [Slovenčina](README.sk.md) · [Español](README.es.md) · [Kiswahili](README.sw.md) · [Svenska](README.sv.md) · [తెలుగు](README.te.md) · [ภาษาไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Tiếng Việt](README.vi.md)</small>

<small>

> **UIおよびドキュメント翻訳に関する注意:** 英語（英国）を除くすべてのインターフェース言語はAIモデルを使用して翻訳されています。表現が不正確または誤りを含む場合があります。

</small>

<br/>

<a id="screenshots"></a>
## スクリーンショット

**言語セレクター**

![言語セレクター](../images/screenshots/ja/language-selector.png)

**翻訳**

![翻訳](../images/screenshots/ja/translate.png)

**変換 - プロンプトエディター**

![変換 - プロンプトエディター](../images/screenshots/ja/transform-prompt-edit.png)

**ダッシュボード**

![費用ダッシュボード](../images/screenshots/ja/dashboard-summary.png)

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
## すぐに始める

**Docker（自己ホスティングには推奨）**

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest

OPENROUTER_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

`sk-or-your-key` の部分を [OpenRouter APIキー](https://openrouter.ai/keys) に置き換えてください（または他のプロバイダーのキーを設定してください。詳細は[設定](#configuration-and-environment)を参照）。[http://localhost:5000](http://localhost:5000) にアクセスし、サービスを公開する前にデフォルトの管理者パスワードを変更してください。

<br/>

> ℹ️ **注**<br/>
> Dockerでは、LLMの認証情報は環境変数（例：`OPENROUTER_KEY`、`OPENAI_KEY`、`CEREBRAS_KEY` など）で設定されます（Web UIではありません）。デスクトップ版（Electron）では、**設定 → API** でキーを設定します。

<br/>

**Windows**

[リリース](https://github.com/wsj-br/transrewrt/releases)から最新の `Transrewrt Setup x.y.z.exe` をダウンロードし、インストーラーを実行した後、スタートメニューまたはデスクトップのショートカットから起動します。**設定 → API** でAPIキーを入力してください。少なくとも1つのプロバイダーを設定する必要があります。無料のモデルを使う場合、OpenRouterが一般的です。

<br/>

**Linux**

[リリース](https://github.com/wsj-br/transrewrt/releases)からCPUに合った`.AppImage`をダウンロードします（通常のPCは`x64`、Raspberry Pi 4以上を含む多くのARMデバイスは`arm64`）。その後、以下を実行：

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

**設定 → API** でAPIキーを入力してください。少なくとも1つのプロバイダーを設定する必要があります。無料のモデルを使う場合、OpenRouterが一般的です。

Debian/Ubuntuでは、事前に追加の依存関係をインストールする必要があります：

```bash
sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth
```

詳しくは[インストール → Linux](#linux-electron)を参照してください。

<br/>

> ℹ️ **注**<br/>
> 現在、macOSはサポートされていません。TransrewrtはWindows、Linux、Docker向けに提供されています。

<br/>

アプリが起動したら、**[ユーザーガイド](USER-GUIDE.ja.md)** を参照して、テキストの翻訳・書き換え・変換方法、プロンプト管理、モデルの設定方法を学びましょう。

<br/><br/>

<a id="installation"></a>
## インストール

<a id="windows-electron"></a>
### Windows (Electron)

- [リリース](https://github.com/wsj-br/transrewrt/releases)から最新のインストーラーをダウンロード。
- `.exe` を実行し、インストーラーの指示に従う。
- 初回起動：スタートメニューまたはデスクトップのショートカットからアプリを起動。

<br/>

<a id="linux-electron"></a>
### Linux (Electron)

- [リリース](https://github.com/wsj-br/transrewrt/releases)から適切な `.AppImage`（`x64` または `arm64`）をダウンロード。
- 実行：x86_64/amd64では `chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage`、ARM64では `...-arm64.AppImage` ファイル名を使う。
- 追加の依存関係（Debian/Ubuntu）：`sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth`
- 詳細は [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) を参照。

<br/>

<a id="docker"></a>
### Docker

- 取得： `docker pull ghcr.io/wsj-br/transrewrt:latest`
- 環境変数経由で少なくとも1つのプロバイダーキーを設定する（たとえば、OpenRouter用に`OPENROUTER_KEY`）。`-e` や `docker compose` / `.env` を使って変数を渡し、シークレットがイメージに組み込まれないようにする。
- プロバイダーキーは**Web UIでは入力しない**。サーバーは環境変数からそれらを読み取ります。

例 - 永続化のための名前付きボリューム（envでOpenRouterキーを指定）：

```bash
OPENROUTER_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

<br/>

| オプション   | 説明                                                                                                   |
| -------- | ------------------------------------------------------------------------------------------------------------- |
| ポート     | `5000`（`-p 5000:5000`でマッピング）                                                                              |
| ボリューム   | 構成とデータベースの永続化のために `/app/data` をマウント                                                         |
| 環境変数 | `PORT`、`CONFIG_PATH`、およびLLMキー（`OPENROUTER_KEY`、`OPENAI_KEY` など） - [設定](#configuration-and-environment)を参照 |

ソースからビルド・実行するには：`docker compose up --build -d` または `pnpm docker:up` - 詳細は [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) を参照。

<br/><br/>

<a id="getting-an-openrouter-api-key"></a>

## OpenRouter API キーの取得方法

Transrewrt は複数の AI プロバイダーに対応しています。[OpenRouter](https://openrouter.ai) は、多数のモデルを1つのキーで統合して提供し、無料のモデルも利用できるため、人気の選択肢です。

1. [openrouter.ai](https://openrouter.ai) でサインアップまたはログインします。
2. [Keys](https://openrouter.ai/keys) ページを開き、新しいキーを作成します（名前を付け、オプションでクレジットの上限を設定）。クレジットを追加せずに無料モデルを使用できます。
3. **デスクトップ版（Electron）**：**設定 → API** にキーを貼り付けます。**Docker版**：`OPENROUTER_KEY` のような環境変数を設定します（[クイックスタート](#quick-start)を参照）。

翻訳、書き換え、変換のタスクには、OpenRouter の **Body Builder** モデル（[`openrouter/bodybuilder`](https://openrouter.ai/openrouter/bodybuilder)）を使用しないでください。このモデルはタスク完了後のテキストではなく、JSON 形式のリクエストペイロードを返すためです。詳細はユーザーガイドの[設定 → モデル](USER-GUIDE.ja.md#models)を参照してください。

他のプロバイダー（OpenAI、Anthropic、Google Gemini、DeepSeek、Groq、Mistral、xAI、Cerebras）を使用したり、[Ollama](https://ollama.com) を使ってローカルでモデルを実行することもできます。対応するプロバイダーと環境変数の完全なリストは、[設定と環境](#configuration-and-environment) をご覧ください。

> ⚠️ **警告**<br/>
> 他のデバイス、コンテナ、サービスから Ollama を利用する場合は、外部接続を許可するように Ollama を設定してください（localhost 制限ではない状態）。

制限、BYOK など詳細については、[OpenRouter 認証](https://openrouter.ai/docs/api/reference/authentication) を参照してください。

<br/><br/>

<a id="configuration-and-environment"></a>
## 設定と環境

**設定ファイルの場所**

| デプロイ方法       | 設定ファイルの場所                              |
| ------------------ | --------------------------------------------- |
| Electron (Windows) | `%APPDATA%\transrewrt\`                       |
| Electron (Linux)   | `~/.config/transrewrt/`                       |
| Web / Docker       | `/app/data/config.json` （永続化にボリューム使用） |

<br/>

**環境変数**（Web版 / Docker版 専用。Electron版はローカルの設定ファイルを使用）

| 変数名             | デフォルト値           | 説明 |
| ------------------ | ---------------------- | ---- |
| `PORT`             | `5000`                 | サーバーのリスニングポート |
| `CONFIG_PATH`      | `/app/data/config.json`| 設定ファイルのパス |
| `OPENROUTER_KEY`   | *(空)*                 | OpenRouter API キー |
| `OPENAI_KEY`       | *(空)*                 | OpenAI API キー |
| `CEREBRAS_KEY`     | *(空)*                 | Cerebras API キー |
| `ANTHROPIC_KEY`    | *(空)*                 | Anthropic API キー |
| `GOOGLE_KEY`       | *(空)*                 | Google Gemini API キー |
| `DEEPSEEK_KEY`     | *(空)*                 | DeepSeek API キー |
| `GROQ_KEY`         | *(空)*                 | Groq API キー |
| `MISTRAL_KEY`      | *(空)*                 | Mistral API キー |
| `OLLAMA_URL`       | *(空)*                 | Ollama ベース URL（例: `http://host.docker.internal:11434`） |
| `XAI_KEY`          | *(空)*                 | xAI API キー |

使用するプロバイダーのみを設定してください。モデルIDは名前空間付きです（`openrouter/…`、`openai/…`、`cerebras/…`、`ollama/…` など）。

**料金の表示**：OpenRouter は、適用可能な場合、請求額を正確に返します。その他のプロバイダーは、OpenRouter キーが利用可能な場合、OpenRouter の公開料金表に基づいた**推定料金**を表示します。OpenRouter キーがない場合、その他プロバイダーの料金は `0` と表示されることがあります。推定値は請求書ではありません。

<br/>

**データと永続化**：Docker を使用する場合は、`/app/data` にボリュームをマウントして、`config.json` や SQLite データベースがコンテナの再起動後も保持されるようにしてください。ボリュームがない場合、コンテナ停止時にすべてのデータが失われます。

**開発者向け**：古い単一キー設定を置き換える変更を取得した後は、ローカルの設定ファイルに削除されたフィールド（`api_key`、`api_url`、プロキシ設定など）が残っている場合、`data/config.json` を `src/config-defaults/config_default.json` の新しいデフォルト構造にリセットまたはマージしてください。

<br/>

**Web 認証**：

- デフォルト管理者アカウント：`admin` / `transrewrt26`。
- ユーザー管理は、**設定 → ユーザー** で行います。
- パスワードのリセット：`docker exec <container> reset-web-password '<username>' '<new-password>'`  
  （ソースから実行する場合：`pnpm run reset-web-password -- <username> <new-password>`）

<br/>

> ⚠️ **警告**<br/>
> いかなるネットワーク接続可能なホストでも、直ちにデフォルトの管理者パスワードを変更してください。

<br/>

フォント、モデル、言語など、主な設定はアプリケーションの「設定」から行えます。

<br/><br/>

<a id="development-and-architecture"></a>

## 開発およびアーキテクチャ

- **開発:** セットアップ、ビルド、テスト、デプロイ（Electron、Web、Docker）については、**[dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)** を参照してください。
- **アーキテクチャおよびシステム概要:** フォルダ構造、技術スタック、設計上の意思決定については、**[dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)** を参照してください。

<br/><br/>

<a id="releases-and-tags"></a>
## リリースおよびタグ

- **Gitタグ** `v`*（例: `v1.0.10`）は[リリースワークフロー](.github/workflows/release.yml)をトリガーします。**GitHubリリース**には、Windowsインストーラー（`.exe`）およびLinux用AppImage（**x64** および **arm64**）が添付されます。
- **Dockerイメージ** は `ghcr.io/wsj-br/transrewrt` に公開されます。イメージタグはGitのバージョンに一致します（例: `v1.0.10` → `ghcr.io/wsj-br/transrewrt:1.0.10`）。「latest」タグも含まれます。マルチアーキテクチャ対応: `linux/amd64` および `linux/arm64`（例: Raspberry Pi）。

<br/><br/>

<a id="contributing"></a>
## コントリビュート方法

1. リポジトリをフォークします。
2. 機能ブランチを作成します: `git checkout -b feature/my-feature`
3. 明確なメッセージを含めて変更をコミットします。
4. プッシュし、`main` ブランチに対してプルリクエストを作成します。

コントリビュートの際は、既存のコードスタイルに従い、提出前にElectron版およびWeb版の両方で変更内容をテストしてください。ビルドおよびテスト手順については[dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)を参照してください。

<br/>

**問題の報告:** [GitHub](https://github.com/wsj-br/transrewrt/issues)でIssueを作成してください。使用しているプラットフォーム（Windows / Linux / Docker）およびアプリのバージョン（「情報」ダイアログまたはリリースページに表示）を必ず記載してください。

<br/><br/>

<a id="disclaimer"></a>
## 免責事項

製品名およびアイコンはそれぞれの所有者に帰属し、識別目的でのみ使用しています。このソフトウェアは、言及されているブランドと関連または推奨されていません。

<br/><br/>

<a id="license"></a>
## ライセンス

Copyright © 2026 Waldemar Scudeller Jr.

[Apache License 2.0](LICENSE)