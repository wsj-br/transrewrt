---
translated_at: "2026-03-26T00:46:48.636Z"
source_hash: "d5d19d18eadc9060d8db2f32f47dc8174ee783feea992030f3c686debc714a88"
source_mtime: 1774482559451.2136
model: "qwen/qwen3-235b-a22b-2507"
---
<p align="center">
  <img src="../images/transrewrt_logo.svg" alt="Transrewrtのロゴ" width="120" />
</p>

<h1 align="center">Transrewrt</h1>

<p align="center">
  <a href="https://github.com/wsj-br/transrewrt/releases"><img src="https://img.shields.io/badge/version-1.0.15-blue" alt="バージョン"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-Apache%202.0-green" alt="ライセンス: Apache 2.0"></a>
  <img src="https://img.shields.io/badge/platform-Windows%20%7C%20Linux%20%7C%20Docker-lightgrey" alt="プラットフォーム">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react" alt="React 19">
  <img src="https://img.shields.io/badge/Electron-41-47848F?logo=electron" alt="Electron 41">
</p>

AI搭載のテキスト変換ツール：複数のAIプロバイダー（OpenRouter、OpenAI、Anthropic、Google Gemini、DeepSeek、Groq、Mistral、xAI、およびローカルのOllama）を使用して、言語間の翻訳、文体の書き換え、カスタムプロンプトによる変換が可能。デスクトップアプリ（Electron）またはセルフホスト型のWebアプリ（Docker）として動作。

- **翻訳（Translate）** — 十数の言語間で相互翻訳、ソース言語の自動検出
- **書き換え（Rewrite）** — 文法の修正、明確化、フォーマル／インフォーマル、短縮、展開、技術用語化
- **変換（Transform）** — カスタムAIプロンプトを使用、プロンプトの作成と管理、プロンプトごとに任意のターゲット言語を指定可能
- **履歴（History）** — 入力／出力テキスト、フィルタリング、エクスポート対応の完全な操作履歴
- **モデルとコスト** — 設定済みプロバイダーのいずれかからモデルを選択可能。使用量とコストのダッシュボード（ログ、モデル／操作／日ごとの集計）
- **UI** — 多言語インターフェース（30以上の言語対応、RTL対応）、フォント、…
- **Webモード** — 管理者ロール付きのマルチユーザー対応
- **デスクトップ版** — WindowsおよびLinux用Electronアプリ
- **セルフホスト版** — amd64およびarm64（Raspberry Pi対応）向けDockerイメージ

インストール後は、すべての機能の詳細を紹介する **[ユーザーガイド](USER-GUIDE.ja.md)** をご参照ください。

<small>**他の言語で読む：** </small>
<small id="lang-list"> [English (UK)](../README.md) · [Português (BR)](README.pt-BR.md) · [العربية](README.ar.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [Hrvatski](README.hr.md) · [Čeština](README.cs.md) · [Nederlands](README.nl.md) · [English (US)](README.en-US.md) · [Filipino](README.tl.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [हिन्दी](README.hi.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [Basa Jawa](README.jv.md) · [한국어](README.ko.md) · [Bahasa Melayu](README.ms.md) · [فارسی](README.fa.md) · [Polski](README.pl.md) · [Português (PT)](README.pt.md) · [ਪੰਜਾਬੀ](README.pa.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [Slovenčina](README.sk.md) · [Español](README.es.md) · [Kiswahili](README.sw.md) · [Svenska](README.sv.md) · [తెలుగు](README.te.md) · [ภาษาไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Tiếng Việt](README.vi.md)</small>

<small>

> **UIおよびドキュメント翻訳に関する注意**：英語（イギリス）版原文を除くすべてのインターフェース言語はAIモデルで翻訳されています。表現が不正確または誤りを含む場合があります。

</small>

<br/>

<a id="screenshots"></a>
## スクリーンショット

**言語選択メニュー**

![言語選択メニュー](../images/screenshots/ja/language-selector.png)

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


- [クイックスタート](#quick-start)
- [インストール](#installation)
  - [Windows (Electron)](#windows-electron)
  - [Linux (Electron)](#linux-electron)
  - [Docker](#docker)
- [OpenRouter API キーの取得](#getting-an-openrouter-api-key)
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

`sk-or-your-key` を [OpenRouter API キー](https://openrouter.ai/keys)（または他のプロバイダーのキー；詳細は[設定](#configuration-and-environment)を参照）に置き換えます。[http://localhost:5000](http://localhost:5000) を開き、サービスを公開する前に既定の管理者パスワードを変更してください。

<br/>

> ℹ️ **注記**<br/>
> Docker では、LLM の認証情報は `OPENROUTER_API_KEY`、`OPENAI_API_KEY`、`CEREBRAS_API_KEY` などの環境変数で設定します（Web UI ではありません）。デスクトップ版（Electron）では、**設定 → API** からキーを設定します。

<br/>

**Windows**

最新の `Transrewrt Setup x.y.z.exe` を [リリース](https://github.com/wsj-br/transrewrt/releases) ページからダウンロードし、インストーラーを実行して起動メニューまたはデスクトップのショートカットから起動します。**設定 → API** で API キーを入力してください。少なくとも1つのプロバイダーを設定する必要があります。無料モデルを使用する場合は OpenRouter が一般的です。

<br/>

**Linux**

[リリース](https://github.com/wsj-br/transrewrt/releases) ページから CPU に合った `.AppImage` ファイルをダウンロード（通常のPCは `x64`、Raspberry Pi 4 など多くの ARM デバイスは `arm64`）し、以下を実行します：

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

**設定 → API** で API キーを入力してください。少なくとも1つのプロバイダーを設定する必要があります。無料モデルを使用する場合は OpenRouter が一般的です。

Debian/Ubuntu では、事前に以下の追加依存パッケージをインストールする必要がある場合があります：

```bash
sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth
```

詳細は [インストール → Linux](#linux-electron) を参照してください。

<br/>

> ℹ️ **注記**<br/>
> 現在、macOS はサポートされていません。Transrewrt は Windows、Linux、および Docker に対応しています。

<br/>

アプリが起動したら、**[ユーザーガイド](USER-GUIDE.ja.md)** を参照して、テキストの翻訳、書き換え、変換、プロンプトの管理、モデルの設定方法をご確認ください。

<br/><br/>

<a id="installation"></a>
## インストール

<a id="windows-electron"></a>
### Windows (Electron)

- [リリース](https://github.com/wsj-br/transrewrt/releases) ページから最新のインストーラーをダウンロードします。
- `.exe` ファイルを実行し、インストーラーの指示に従ってください。
- 初回起動：スタートメニューまたはデスクトップのショートカットからアプリを起動します。

<br/>

<a id="linux-electron"></a>
### Linux (Electron)

- [リリース](https://github.com/wsj-br/transrewrt/releases) ページから適切な `.AppImage` ファイル（`x64` または `arm64`）をダウンロードします。
- x86_64/amd64 では `chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage` を実行。ARM64 では `...-arm64.AppImage` を使用します。
- 追加依存パッケージ（Debian/Ubuntu）: `sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth`
- 詳細は [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) を参照してください。

<br/>

<a id="docker"></a>
### Docker

- プル: `docker pull ghcr.io/wsj-br/transrewrt:latest`
- 少なくとも1つのプロバイダーのキー（例：OpenRouter の `OPENROUTER_API_KEY`）を環境変数で設定します。`-e` や `docker compose`、`.env` ファイルを使用して秘密情報をイメージに含めないようにしてください。
- プロバイダーのキーは **Web UI には入力しません**。サーバーは環境変数から読み取ります。

例：永続化用の名前付きボリューム（環境変数で OpenRouter キー指定）：

```bash
OPENROUTER_API_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_API_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

<br/>

| オプション   | 説明                                                                                                   |
| -------- | ------------------------------------------------------------------------------------------------------------- |
| ポート     | `5000`（`-p 5000:5000` でマッピング）                                                                              |
| ボリューム   | コンフィグとデータベースの永続化のために `/app/data` をマウント                                                         |
| 環境変数 | `PORT`、`CONFIG_PATH`、およびLLMキー（`OPENROUTER_API_KEY`、`OPENAI_API_KEY`…） - 詳細は [設定](#configuration-and-environment) を参照 |

ソースからビルド・実行するには：`docker compose up --build -d` または `pnpm docker:up` - 詳細は [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) を参照。

<br/><br/>

<a id="getting-an-openrouter-api-key"></a>

## OpenRouter API キーの取得方法

Transrewrt は複数のAIプロバイダーをサポートしています。[OpenRouter](https://openrouter.ai) は、多数のモデルを1つのAPIキーで利用できるうえ、無料モデルも提供しているため、人気の選択肢です。

1. [openrouter.ai](https://openrouter.ai) で登録またはログインします。
2. [Keys](https://openrouter.ai/keys) ページを開き、新しいキーを作成します（名前を付け、必要に応じてクレジット制限を設定可能）。クレジットを追加せずに無料モデルを利用できます。
3. **デスクトップ版 (Electron):** **設定 → API** にキーを貼り付けます。**Docker版:** `OPENROUTER_API_KEY` などの環境変数を設定します（[クイックスタート](#quick-start) を参照）。

翻訳、リライト、変換タスクでは、OpenRouterの **Body Builder** モデル（[`openrouter/bodybuilder`](https://openrouter.ai/openrouter/bodybuilder)）は使用しないでください。このモデルは完了したテキストではなくJSON形式のリクエストペイロードを返すためです。詳細はユーザーガイドの [設定 → モデル](USER-GUIDE.ja.md#models) をご参照ください。

OpenAI、Anthropic、Google Gemini、DeepSeek、Groq、Mistral、xAI、Cerebrasなどの他のプロバイダーを利用することもできますし、[Ollama](https://ollama.com) を使用してローカルでモデルを実行することも可能です。対応するプロバイダーおよび環境変数の完全なリストについては、[設定と環境](#configuration-and-environment) をご覧ください。

> ⚠️ **警告**<br/>
> 別のデバイス、コンテナ、またはサービスからOllamaを使用する場合は、Ollamaを外部接続を許可するように設定すること（localhostだけではなく、外部からの接続を受け付けるように構成）を忘れないでください。


制限事項、BYOK（Bring Your Own Key）、その他の詳細については、[OpenRouter 認証](https://openrouter.ai/docs/api/reference/authentication) をご覧ください。

<br/><br/>

<a id="configuration-and-environment"></a>
## 設定と環境

**設定ファイルの場所**

| デプロイ方法       | 設定ファイルの場所                                |
| ------------------ | ------------------------------------------------- |
| Electron (Windows) | `%APPDATA%\transrewrt\`                           |
| Electron (Linux)   | `~/.config/transrewrt/`                           |
| Web / Docker       | `/app/data/config.json`（永続化のためにボリュームを使用） |

<br/>

**環境変数** （Web版 / Docker版 のみ。Electron版はローカルの設定ファイルを使用）

| 変数名             | デフォルト              | 説明 |
| ------------------ | ----------------------- | ---- |
| `PORT`             | `5000`                  | サーバーのリッスンポート |
| `CONFIG_PATH`      | `/app/data/config.json` | 設定ファイルのパス |
| `OPENROUTER_API_KEY`   | *(空)*                  | OpenRouter APIキー |
| `OPENAI_API_KEY`       | *(空)*                  | OpenAI APIキー |
| `CEREBRAS_API_KEY`     | *(空)*                  | Cerebras APIキー |
| `ANTHROPIC_API_KEY`    | *(空)*                  | Anthropic APIキー |
| `GOOGLE_API_KEY`       | *(空)*                  | Google Gemini APIキー |
| `DEEPSEEK_API_KEY`     | *(空)*                  | DeepSeek APIキー |
| `GROQ_API_KEY`         | *(空)*                  | Groq APIキー |
| `MISTRAL_API_KEY`      | *(空)*                  | Mistral APIキー |
| `OLLAMA_URL`       | *(空)*                  | OllamaのベースURL（例: `http://host.docker.internal:11434`） |
| `XAI_API_KEY`          | *(空)*                  | xAI APIキー |

使用するプロバイダーのみを設定してください。モデルIDは名前空間付きで指定されます（`openrouter/…`, `openai/…`, `cerebras/…`, `ollama/…` など）。

**コスト表示について:** OpenRouterを使用した場合、適用されれば正確な課金額が返されます。それ以外のプロバイダーでは、OpenRouterキーがある場合にOpenRouterの公開価格に基づく**推定コスト**が表示されます。OpenRouterキーがない場合、非OpenRouterプロバイダーのコストは `0` と表示されることがあります。これらの推定値は請求書とは異なります。

<br/>

**データと永続化:** Docker版では、`/app/data` にボリュームをマウントして、`config.json` およびSQLiteデータベースがコンテナの再起動後も保持されるようにしてください。ボリュームを使用しない場合、コンテナ停止時にすべてのデータが失われます。

**開発者向け:** 以前の単一キー設定を置き換える変更を取得した場合は、ローカルの設定ファイルに `api_key`、`api_url`、プロキシオプションといった削除されたフィールドが残っている場合、`data/config.json` を `src/config-defaults/config_default.json` にある新しいデフォルト構造にリセットまたはマージしてください。

<br/>

**Web認証:**

- デフォルト管理者アカウント: `admin` / `transrewrt26`
- ユーザー管理: **設定 → ユーザー** から行えます。
- パスワードの再設定: `docker exec <container> reset-web-password '<username>' '<new-password>'`  
  （ソースコードから実行する場合: `pnpm run reset-web-password -- <username> <new-password>`）

<br/>

> ⚠️ **警告**<br/>
> 任意のネットワーク接続が可能なホストでは、即座にデフォルトの管理者パスワードを変更してください。

<br/>

フォント、モデル、言語など主要な設定は、アプリケーションの「設定」から変更できます。

<br/><br/>

<a id="development-and-architecture"></a>

## 開発とアーキテクチャ

- **開発：** セットアップ、ビルド、テスト、およびデプロイ（Electron、Web、Docker）については、**[dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)** をご参照ください。
- **アーキテクチャおよびシステム概要：** フォルダ構成、技術スタック、設計の決定事項については、**[dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)** をご参照ください。

<br/><br/>

<a id="releases-and-tags"></a>
## リリースとタグ

- **Gitタグ** `v`*（例：`v1.0.10`）はリリースワークフロー[（release workflow）](.github/workflows/release.yml)をトリガーします。 **GitHubリリース**では、Windowsインストーラー（`.exe`）とLinux用AppImage（**x64**および**arm64**）が添付されます。
- **Dockerイメージ**は `ghcr.io/wsj-br/transrewrt` に公開されます。イメージタグはGitのバージョンと一致しており（例：`v1.0.10` → `ghcr.io/wsj-br/transrewrt:1.0.10`）、それに加えて `latest` も含みます。マルチアーキテクチャ対応：`linux/amd64` および `linux/arm64`（例：Raspberry Pi）。

<br/><br/>

<a id="contributing"></a>
## コントリビューション

1. リポジトリをフォークします。
2. 機能ブランチを作成します：`git checkout -b feature/my-feature`
3. 明確なメッセージを伴って変更をコミットします。
4. 変更をプッシュし、`main` ブランチに対してプルリクエストを開きます。

コントリビュートの際には、既存のコードスタイルに従い、提出前にElectronモードおよびWebモード両方で変更をテストしてください。ビルドおよびテスト手順については、[dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) をご参照ください。

<br/>

**問題の報告：** [GitHub](https://github.com/wsj-br/transrewrt/issues) にてイシューを作成してください。使用しているプラットフォーム（Windows / Linux / Docker）およびアプリのバージョン（「About」ダイアログまたはリリースページに表示）を記載してください。

<br/><br/>

<a id="disclaimer"></a>
## 免責事項

製品名およびアイコンはそれぞれの所有者に帰属し、識別目的でのみ使用されています。本ソフトウェアは、ここで言及されているブランドと提携しているものではなく、それらによる承認も受けておりません。

<br/><br/>

<a id="license"></a>
## ライセンス

Copyright © 2026 Waldemar Scudeller Jr.

[Apache License 2.0](LICENSE)