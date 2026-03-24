---
translated_at: "2026-03-24T01:48:12.624Z"
source_hash: "718acd12f14755cd75ebf7d09b86d9a1df37ebe1898710080fa8e80c1221d58b"
source_mtime: 1774311390366.3484
model: "qwen/qwen3-235b-a22b-2507"
---
<p align="center">
  <img src="../images/transrewrt_logo.svg" alt="Transrewrt ロゴ" width="120" />
</p>

<h1 align="center">Transrewrt</h1>

<p align="center">
  <a href="https://github.com/wsj-br/transrewrt/releases"><img src="https://img.shields.io/badge/version-1.0.14-blue" alt="バージョン"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-Apache%202.0-green" alt="ライセンス: Apache 2.0"></a>
  <img src="https://img.shields.io/badge/platform-Windows%20%7C%20Linux%20%7C%20Docker-lightgrey" alt="プラットフォーム">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react" alt="React 19">
  <img src="https://img.shields.io/badge/Electron-41-47848F?logo=electron" alt="Electron 41">
</p>

AI搭載のテキストツール：複数のAIプロバイダー（OpenRouter、OpenAI、Anthropic、Google Gemini、DeepSeek、Groq、Mistral、xAI、およびローカルOllama）を使用して、言語間の翻訳、異なるスタイルへの書き換え、カスタムプロンプトによる変換が可能。デスクトップアプリ（Electron）またはセルフホスト型Webアプリ（Docker）として実行できます。

- **翻訳** — 数十言語間の翻訳、自動言語検出機能付き
- **書き換え** — 文法の修正、明確化、フォーマル／カジュアルへの変更、短縮、展開、技術文書化など
- **変換** — カスタムAIプロンプト；プロンプトの作成と管理、プロンプトごとに目的言語を任意で指定可能
- **履歴** — 入出力テキスト、フィルタリング、エクスポートに対応した完全な実行履歴
- **モデルとコスト** — 設定済みプロバイダーから任意のモデルを選択可能；SQLiteログによるコストダッシュボード、モデル／操作／日付ごとの集計
- **UI** — 多言語インターフェース（30言語以上、RTL対応）、フォント設定など
- **Webモード** — 管理者ロール付きのマルチユーザー対応；APIキーはサーバー側にのみ保持され、ブラウザに露出しない
- **デスクトップ** — WindowsおよびLinux対応のElectronアプリ
- **セルフホスト** — amd64およびarm64（Raspberry Pi対応）向けDockerイメージ

インストール後は、すべての機能の使い方を解説する **[ユーザーガイド](USER-GUIDE.ja.md)** をご参照ください。

<small>**他の言語でも読む：** [English (UK)](README.ja.md) · [Português (BR)](README.pt-BR.md) · [العربية](README.ar.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [Hrvatski](README.hr.md) · [Čeština](README.cs.md) · [Nederlands](README.nl.md) · [English (US)](README.en-US.md) · [Filipino](README.tl.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [हिन्दी](README.hi.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [Basa Jawa](README.jv.md) · [한국어](README.ko.md) · [Bahasa Melayu](README.ms.md) · [فارسی](README.fa.md) · [Polski](README.pl.md) · [Português (PT)](README.pt.md) · [ਪੰਜਾਬੀ](README.pa.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [Slovenčina](README.sk.md) · [Español](README.es.md) · [Kiswahili](README.sw.md) · [Svenska](README.sv.md) · [తెలుగు](README.te.md) · [ภาษาไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Tiếng Việt](README.vi.md)</small>


<br/>

**UIおよびドキュメント翻訳に関する注意：** 英語（英国）を除くすべてのインターフェース言語はAIモデルで翻訳されています。表現が不正確または誤りを含む場合があります。



<a id="screenshots"></a>
## スクリーンショット

**言語セレクター**

![言語セレクター](../images/screenshots/ja/language-selector.png)

**翻訳**

![翻訳](../images/screenshots/ja/translate.png)

**変換 - プロンプトエディター**

![変換 - プロンプトエディター](../images/screenshots/ja/transform-prompt-edit.png)

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

- [簡単な使い方](#quick-start)
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
## 簡単な使い方

**Docker (セルフホスティングに推奨)**

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest

OPENROUTER_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

`sk-or-your-key` を [OpenRouter APIキー](https://openrouter.ai/keys) に置き換えてください（または他のプロバイダーのキーを設定可能です。[設定](#configuration-and-environment)を参照）。[http://localhost:5000](http://localhost:5000) を開き、サービスを公開する前に既定の管理者パスワードを変更してください。

<br/>

> ℹ️ **注**<br/>
> Dockerでは、LLMの認証情報は環境変数（例：`OPENROUTER_KEY`、`OPENAI_KEY`など）で設定します（Web UIでは設定しません）。デスクトップ版（Electron）では、**設定 → API** でキーを設定します。

<br/>

**Windows**

[リリースページ](https://github.com/wsj-br/transrewrt/releases)から最新の `Transrewrt Setup x.y.z.exe` をダウンロードし、インストーラーを実行してから、スタートメニューまたはデスクトップのショートカットから起動します。**設定 → API** でAPIキーを入力してください。最低1つのプロバイダーを設定する必要があります。無料モデルの場合はOpenRouterが一般的です。

<br/>

**Linux**

[リリースページ](https://github.com/wsj-br/transrewrt/releases)から `.AppImage` をダウンロードし、以下を実行します：

```bash
chmod +x Transrewrt-x.y.z.AppImage && ./Transrewrt-x.y.z.AppImage
```

**設定 → API** でAPIキーを入力してください。最低1つのプロバイダーを設定する必要があります。無料モデルの場合はOpenRouterが一般的です。

Debian/Ubuntuの場合は、以下で追加の依存関係をインストールする必要があります：

```bash
sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth
```

詳細は[インストール → Linux](#linux-electron)を参照してください。

<br/>

> ℹ️ **注**<br/>
> macOSは現在サポートされていません。TransrewrtはWindows、Linux、およびDockerに対応しています。

<br/>

アプリが起動したら、**[ユーザーガイド](USER-GUIDE.ja.md)** を参照して、テキストの翻訳や書き換え、プロンプトの管理、モデルの設定方法を学んでください。

<br/><br/>

<a id="installation"></a>
## インストール

<a id="windows-electron"></a>
### Windows (Electron)

- [リリースページ](https://github.com/wsj-br/transrewrt/releases)から最新のインストーラーをダウンロードします。
- `.exe` を実行し、インストーラーの指示に従います。
- 初回起動時：スタートメニューまたはデスクトップのショートカットからアプリを起動します。

<br/>

<a id="linux-electron"></a>
### Linux (Electron)

- [リリースページ](https://github.com/wsj-br/transrewrt/releases)から `.AppImage` をダウンロードします。
- 実行： `chmod +x Transrewrt-x.y.z.AppImage && ./Transrewrt-x.y.z.AppImage`
- 追加の依存関係（Debian/Ubuntu）： `sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth`
- 詳細は [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) を参照してください。

<br/>

<a id="docker"></a>
### Docker

- イメージの取得： `docker pull ghcr.io/wsj-br/transrewrt:latest`
- 環境変数経由で少なくとも1つのプロバイダーのキーを設定（例：OpenRouter用に `OPENROUTER_KEY`）。`-e`オプションまたは`docker compose` / `.env` を使って変数を渡し、キーがイメージ内に組み込まれないようにします。
- プロバイダーのキーは**Web UIでは入力しません**。サーバーは環境変数からそれらを読み取ります。

例 - 永続化のために名前付きボリューム使用（環境変数でOpenRouterキーを設定）：

```bash
OPENROUTER_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

<br/>

| オプション   | 説明                                                                                                |
| -------- | --------------------------------------------------------------------------------------------------- |
| ポート     | `5000`（`-p 5000:5000` でマッピング）                                                               |
| ボリューム | 構成ファイルとデータベースの永続化のため `/app/data` をマウント                                      |
| 環境変数 | `PORT`、`CONFIG_PATH`、およびLLMキー（`OPENROUTER_KEY`、`OPENAI_KEY`など） - [設定](#configuration-and-environment)を参照 |

ソースからビルドして実行するには：`docker compose up --build -d` または `pnpm docker:up` - 詳細は [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) を参照してください。

<br/><br/>

<a id="getting-an-openrouter-api-key"></a>

## OpenRouter API キーの取得

Transrewrt は複数の AI プロバイダーをサポートしています。[OpenRouter](https://openrouter.ai) は、多数のモデルを 1 つのキーでまとめて利用できるうえ、無料モデルも提供しているため、よく使われています。

1. [openrouter.ai](https://openrouter.ai) で新規登録またはログインします。
2. [Keys](https://openrouter.ai/keys) ページを開き、新しいキーを作成します（名前を付け、必要に応じてクレジットの上限を設定できます）。クレジットを追加しなくても無料モデルは使用可能です。
3. **デスクトップ版 (Electron)**：キーを **設定 → API** に貼り付けます。**Docker**：`OPENROUTER_KEY` などの環境変数を設定します（詳細は [クイックスタート](#quick-start) を参照）。

OpenAI、Anthropic、Google Gemini、DeepSeek、Groq、Mistral、xAI などの他のプロバイダーを利用したり、[Ollama](https://ollama.com) を使ってモデルをローカルで実行することもできます。サポートしているプロバイダーと環境変数の完全なリストについては、[構成](#configuration-and-environment) を参照してください。

制限事項、BYOK（Bring Your Own Key）についての詳細は、[OpenRouter 認証](https://openrouter.ai/docs/api/reference/authentication) をご覧ください。

<br/><br/>

<a id="configuration-and-environment"></a>
## 構成と環境

**設定ファイルの場所**

| デプロイ方法         | 設定ファイルの場所                               |
| ------------------ | ----------------------------------------------- |
| Electron (Windows) | `%APPDATA%\transrewrt\`                         |
| Electron (Linux)   | `~/.config/transrewrt/`                         |
| Web / Docker       | `/app/data/config.json` (永続化にはボリュームを使用) |

<br/>

**環境変数**（Web版 / Docker版のみ。Electron版はローカルの設定ファイルを使用）

| 変数名           | デフォルト              | 説明 |
| ---------------- | ----------------------- | ---- |
| `PORT`           | `5000`                  | サーバーのリスンポート |
| `CONFIG_PATH`    | `/app/data/config.json` | 設定ファイルのパス |
| `OPENROUTER_KEY` | *(空)*                  | OpenRouter API キー |
| `OPENAI_KEY`     | *(空)*                  | OpenAI API キー |
| `ANTHROPIC_KEY`  | *(空)*                  | Anthropic API キー |
| `GOOGLE_KEY`     | *(空)*                  | Google Gemini API キー |
| `DEEPSEEK_KEY`   | *(空)*                  | DeepSeek API キー |
| `GROQ_KEY`       | *(空)*                  | Groq API キー |
| `MISTRAL_KEY`    | *(空)*                  | Mistral API キー |
| `OLLAMA_URL`     | *(空)*                  | Ollama のベース URL（例: `http://host.docker.internal:11434`） |
| `XAI_KEY`        | *(空)*                  | xAI API キー |

使用するプロバイダーのみを設定してください。モデル ID は名前空間化されています（`openrouter/…`、`openai/…`、`ollama/…` など）。

**コスト表示**：OpenRouter は、請求される金額を正確に返します。それ以外のプロバイダーは、OpenRouter キーがある場合に限り、OpenRouter の公開価格に基づいた**推定コスト**を表示します。OpenRouter キーがない場合、OpenRouter以外のコストは `0` と表示されることがあります。推定値は請求書とは異なります。

<br/>

**データと永続化**：Docker の場合は、`/app/data` にボリュームをマウントして、`config.json` やSQLiteデータベースがコンテナの再起動後も保持されるようにしてください。ボリュームを使用しない場合、コンテナ停止時にすべてのデータが失われます。

**開発者向け**：古い単一キー構成を置き換える変更をプルした後、ローカルの `data/config.json` が削除されたフィールド（`api_key`、`api_url`、プロキシ設定など）を使っている場合は、`src/config-defaults/config_default.json` の新しいデフォルト構造と設定ファイルをリセットまたはマージしてください。

<br/>

**Web 認証**：

- デフォルト管理者：`admin` / `transrewrt26`
- ユーザー管理：**設定 → ユーザー**
- パスワードリセット：`docker exec <container> reset-web-password '<username>' '<new-password>'`
  （ソースからの実行：`pnpm run reset-web-password -- <username> <new-password>`）

<br/>

> ⚠️ **警告**<br/>
> 任意のネットワーク経由でアクセス可能なホストでは、必ず直ちにデフォルトの管理者パスワードを変更してください。

<br/>

フォント、モデル、言語など、主要な設定はアプリケーションの「設定」メニューから変更できます。

<br/><br/>

<a id="development-and-architecture"></a>
## 開発とアーキテクチャ

- **開発**：セットアップ、ビルド、テスト、デプロイ（Electron、Web、Docker）については **[dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)** を参照してください。
- **アーキテクチャとシステム概要**：フォルダー構成、技術スタック、設計上の意思決定については **[dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)** を参照してください。

<br/><br/>

<a id="releases-and-tags"></a>

## リリースとタグ

- **Gitタグ** `v`* (例: `v1.0.10`) は [リリースワークフロー](.github/workflows/release.yml) をトリガーします。**GitHubリリース**ではWindowsインストーラー (`.exe`) とLinux用AppImageが添付されます。
- **Dockerイメージ** は `ghcr.io/wsj-br/transrewrt` に公開されています。イメージのタグはGitのバージョンに一致します (例: `v1.0.10` → `ghcr.io/wsj-br/transrewrt:1.0.10`) に加え、`latest` も使用できます。マルチアーキテクチャ対応: `linux/amd64` および `linux/arm64` (例: Raspberry Pi)。

<br/><br/>

<a id="contributing"></a>
## コントリビューション

1. リポジトリをフォークしてください。
2. 機能ブランチを作成: `git checkout -b feature/my-feature`
3. 変更を明確なメッセージでコミットしてください。
4. プッシュして、`main` ブランチ向けにプルリクエストを開いてください。

投稿前に、既存のコードスタイルに従い、ElectronおよびWebモードの両方で変更内容をテストしてください。ビルドやテストの手順については、[dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) をご参照ください。

<br/>

**問題の報告について**：[GitHub](https://github.com/wsj-br/transrewrt/issues) にて新しいイシューを開いてください。お使いのプラットフォーム (Windows / Linux / Docker) およびアプリのバージョン (「About」ダイアログまたはリリースページに表示) を必ず記載してください。

<br/><br/>

<a id="disclaimer"></a>
## 免責事項

製品名およびアイコンはそれぞれの所有者に帰属し、識別目的でのみ使用しています。本ソフトウェアは、言及されているブランドと提携しているものでも、それらのブランドによって認められているものでもありません。

<br/><br/>

<a id="license"></a>
## ライセンス

Copyright © 2026 Waldemar Scudeller Jr.

[Apache License 2.0](LICENSE)