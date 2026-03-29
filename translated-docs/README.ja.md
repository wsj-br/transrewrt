---
translated_at: "2026-03-29T01:55:23.853Z"
source_hash: "f26a12ca888393b55a064bfcf8fe2b74a425c383f1ad6f7ecbb32b67b7c9f897"
source_mtime: "2026-03-29T01:54:18.655Z"
model: "qwen/qwen3-235b-a22b-2507"
---
<p align="center">
  <img src="../images/transrewrt_banner.png" alt="Transrewrt バナー" />
</p>

<p align="center">
  <a href="https://github.com/wsj-br/transrewrt/releases"><img src="https://img.shields.io/badge/version-1.1.1-blue" alt="バージョン"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-Apache%202.0-green" alt="ライセンス: Apache 2.0"></a>
  <img src="https://img.shields.io/badge/platform-Windows%20%7C%20Linux%20%7C%20Docker-lightgrey" alt="プラットフォーム">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react" alt="React 19">
  <img src="https://img.shields.io/badge/Electron-41-47848F?logo=electron" alt="Electron 41">
</p>

AI 搭載のテキストツール：複数のAIプロバイダー（OpenRouter、OpenAI、Anthropic、Google Gemini、DeepSeek、Groq、Mistral、xAI、およびローカルのOllama）を使って、言語間の翻訳、スタイルの書き換え、カスタムプロンプトによる変換が可能。デスクトップアプリ（Electron）またはセルフホスト型のWebアプリ（Docker）として実行。

- **翻訳** — 数十の言語間で翻訳可能。自動言語検出対応
- **書き換え** — 文法の修正、表現の明確化、フォーマル／カジュアルへの変換、要約、展開、技術的な言い換えなど
- **変換** — カスタムAIプロンプト。プロンプトの作成と管理ができ、プロンプトごとに目的とする言語を指定可能
- **履歴** — 入出力テキストを含む全実行履歴の閲覧、フィルタリング、エクスポート機能
- **モデルとコスト** — 設定済みプロバイダーから任意のモデルを選択可能。コストや使用量のダッシュボード（ログ、モデル／操作／日付ごとのサマリー付き）
- **UI** — 多言語インターフェイス（30以上の言語対応、RTL対応）、フォント設定など
- **Webモード** — 管理者ロール付きの多人数利用対応
- **デスクトップ版** — WindowsおよびLinux用のElectronアプリ
- **セルフホスティング** — amd64およびarm6 Desktop版6（Raspberry Pi対応）用Dockerイメージ

インストール後は、すべての機能について詳しく解説した **[ユーザーガイド](USER-GUIDE.ja.md)** をご覧ください。

<small>**他の言語で読む:** </small>

<small id="lang-list"> [English (UK)](../README.md) · [Português (BR)](README.pt-BR.md) · [العربية](README.ar.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [Hrvatski](README.hr.md) · [Čeština](README.cs.md) · [Nederlands](README.nl.md) · [English (US)](README.en-US.md) · [Filipino](README.tl.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [हिन्दी](README.hi.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [Basa Jawa](README.jv.md) · [한국어](README.ko.md) · [Bahasa Melayu](README.ms.md) · [فارسی](README.fa.md) · [Polski](README.pl.md) · [Português (PT)](README.pt.md) · [ਪੰਜਾਬੀ](README.pa.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [Slovenčina](README.sk.md) · [Español](README.es.md) · [Kiswahili](README.sw.md) · [Svenska](README.sv.md) · [తెలుగు](README.te.md) · [ภาษาไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Tiếng Việt](README.vi.md)</small>

E.pl.md) · [ポルトガル語（PT）](README.pt.md) · [パンジャブ語](README.pa.md) · [ルーマニア語](README.ro.md) · [ロシア語](README.ru.md) · [スロバキア語](README.sk.md) · [スペイン語](README.es.md) · [スワヒリ語](README.sw.md) · [スウェーデン語](README.sv.md) · [テルグ語](README.te.md) · [タイ語](README.th.md) · [トルコ語](README.tr.md) · [ウクライナ語](README.uk.md) · [ベトナム語](README.vi.md)</small>

<small>

> **UIおよびドキュメント翻訳に関する注意:** 英語（英国）の原文を除くすべてのインターフェース言語はAIモデルを使用して翻訳されています。  
> 語句が不正確であったり、誤りが含まれている可能性があります。

</small>

<br/>

<a id="screenshots"></a>

## スクリーンショット

**言語セレクター**

![Language selector](../images/screenshots/ja/language-selector.png)

**翻訳**

![Translate](../images/screenshots/ja/translate.png)

**変換 - プロンプトエディター**

![Transform - prompt editor](../images/screenshots/ja/transform-prompt-edit.png)

**ダッシュボード**

![Dashboard summary — usage](../images/screenshots/ja/dashboard-summary.png)

**履歴**

![History](../images/screenshots/ja/history.png)

**設定 - モデル選択**

![Settings - model selection](../images/screenshots/ja/settings-models.png)

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
  - [タイムゾーンの設定](#configuring-the-timezone)
- [OpenRouter APIキーの取得](#getting-an-openrouter-api-key)
- [設定と環境](#configuration-and-environment)
- [開発とアーキテクチャ](#development-and-architecture)
- [問題の報告](#reporting-issues)
- [免責事項](#disclaimer)
- [ライセンス](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="quick-start"></a>

## クイックスタート

**Docker（セルフホスティングの場合に推奨）**

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest

OPENROUTER_API_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_API_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

`sk-or-your-key` の部分を、ご自身の [OpenRouter API キー](https://openrouter.ai/keys) に置き換えてください（または他のプロバイダーのキーを設定可能です。詳細は[設定と環境変数](#configuration-and-environment)を参照してください）。[http://localhost:5000](http://localhost:5000) を開き、サービスを外部に公開する前に、既定の管理者パスワードを変更してください。

<br/>

> ℹ️ **注意**<br/>
> Docker を使用する場合、LLM の認証情報（キー）は `OPENROUTER_API_KEY`、`OPENAI_API_KEY`、`CEREBRAS_API_KEY` などの環境変数で設定します（Web UI ではありません）。デスクトップ版（Electron）では、**設定 → API** でキーを設定できます。

<br/>

**Windows**

最新の `Transrewrt Setup x.y.z.exe` を [Releases](https://github.com/wsj-br/transrewrt/releases) からダウンロードし、インストーラーを実行した後、スタートメニューまたはデスクトップのショートカットから起動してください。**設定 → API** でAPIキーを入力します。少なくとも1つのプロバイダーを設定する必要があります。無料モデルの利用にはOpenRouterが一般的です。

<br/>

**Linux**

CPUに合った `.AppImage` ファイルを [Releases](https://github.com/wsj-br/transrewrt/releases) からダウンロードしてください（一般的なPC向けは`x64`、Raspberry Pi 4以上を含む多くのARMデバイス向けは`arm64`）。その後、次のように実行します:

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

**設定 → API** でAPIキーを入力します。少なくとも1つのプロバイダーを設定する必要があります。無料モデルの利用にはOpenRouterが一般的です。

Debian/Ubuntuでは、事前に追加の依存関係をインストールする必要がある場合があります:

```bash
sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth
```

詳細は [インストール方法 → Linux](#linux-electron) を参照してください。

<br/>

> ℹ️ **注**<br/>

> 現在、macOSはサポートされていません。TransrewrtはWindows、Linux、およびDocker向けにご利用いただけます。

<br/>

アプリを起動したら、**[ユーザーガイド](USER-GUIDE.ja.md)** を参照して、テキストの翻訳・書き換え・変換、プロンプトの管理、モデルの設定方法について学んでください。

<br/><br/>

<a id="installation"></a>

## インストール

<a id="windows-electron"></a>

### Windows（Electron版）

- [リリースページ](https://github.com/wsj-br/transrewrt/releases) から最新のインストーラーをダウンロードします。
- `.exe` ファイルを実行し、インストーラーの指示に従ってください。
- 初回起動：スタートメニューまたはデスクトップのショートカットからアプリを起動します。

<br/>

> ℹ️ **注意**<br/>
> Windowsは、以下のセキュリティ警告のいずれかを表示することがあります（署名なし/インディー製アプリでは通常の現象です）：
>   - **ユーザーアカウント制御（UAC）**：「不明な発行元からのこのアプリに、お使いのデバイスに変更を加えることを許可しますか？」→「**はい**」をクリックしてください。
>   - **Microsoft Defender SmartScreen**：「WindowsによりPCが保護されました」→「**詳細情報**」をクリック →「** nonetheless実行 **」をクリック。
>
> これは、アプリがMicrosoftや大手パブリッシャーによって署名されていないためです。公式のGitHubリリースページからダウンロードした場合（以下のSHA256チェックサムで確認可能）は安全です。

<br/>

<a id="linux-electron"></a>

### Linux（Electron）

- [Releases](https://github.com/wsj-br/transrewrt/releases) から対応する `.AppImage` ファイル（`x64` または `arm64`）をダウンロードしてください。
- 実行: x86_64/amd64の場合は、`chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage` を実行します。ARM64の場合は、`...-arm64.AppImage` というファイル名を使用してください。
- 追加の依存パッケージ（Debian/Ubuntu）: `sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth`
- 詳細については [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) を参照してください。

<br/>

<a id="docker"></a>

### Docker

- イメージを取得: `docker pull ghcr.io/wsj-br/transrewrt:latest`
- 環境変数を使用して少なくとも1つのプロバイダーキーを設定してください（たとえば、OpenRouterの場合は `OPENROUTER_API_KEY`）。変数は `-e` オプション、または `docker compose` / `.env` ファイルで渡し、機密情報がイメージに組み込まれないようにしてください。
- プロバイダーキーは**ウェブUIに入力しません**。サーバーは環境変数からキーを読み取ります。

例：データ永続化のために名前付きボリュームを使用（環境変数でOpenRouterキーを設定）

```bash
OPENROUTER_API_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_API_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

または、Docker Composeを使用する場合は以下を実行してください。

```bash
# composeファイルをダウンロード
wget https://github.com/wsj-br/transrewrt/raw/refs/heads/master/production.yml -O transrewrt.yml
# ファイルを編集し、API_KEYSを追加してタイムゾーン (TZ) を調整
vi transrewrt.yml
# コンテナを起動
docker compose -f transrewrt.yml up -d

すべての環境変数（`PORT`、`CONFIG_PATH`、`TZ`、LLMキー（`OPENROUTER_API_KEY`、`OPENAI_API_KEY`など）については、[設定](#configuration-and-environment) を参照してください。

<a id="configuring-the-timezone"></a>

### タイムゾーンの設定

アプリケーションのユーザーインターフェースに表示される日付および時刻は、**ブラウザの**ロケールおよびタイムゾーンに従います。**サーバー側**の処理（ログ記録など）については、コンテナが `TZ` 環境変数を使用します。デフォルト値は `TZ=Europe/London` です。

他のタイムゾーンを使用する場合、Composeファイルで `TZ` を次のように設定してください。

```yaml
environment:
  - TZ=America/Sao_Paulo
```

または、コンテナ実行時（Docker）に以下のように指定することもできます。

```bash
--env TZ=America/Sao_Paulo
```

多くのLinuxホストでは、以下のコマンドでシステムのタイムゾーン名を取得できます。

```bash
echo TZ=\"$(</etc/timezone)\"
```

有効なタイムゾーン名の一覧は、[tzデータベース](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones)（Wikipedia）で管理されています。

<br/><br/>

<a id="getting-an-openrouter-api-key"></a>

## OpenRouter API キーの取得方法

Transrewrt は複数のAIプロバイダーをサポートしています。[OpenRouter](https://openrouter.ai) は多くのモデルを1つのキーで統合しており、無料モデルも利用できるため、人気の選択肢です。

1. [openrouter.ai](https://openrouter.ai) でサインアップまたはログインします。
2. [Keys](https://openrouter.ai/keys) ページを開き、新しいキーを作成します（名前を付け、任意でクレジットの上限を設定できます）。クレジットを追加しなくても無料モデルは使用可能です。
3. **デスクトップ版（Electron）：** **設定 → API** にキーを貼り付けます。**Docker版：** `OPENROUTER_API_KEY` のような環境変数を設定します（[クイックスタート](#quick-start)を参照）。

翻訳、書き換え、変換のタスクには、OpenRouterの**Body Builder**モデル（[`openrouter/bodybuilder`](https://openrouter.ai/openrouter/bodybuilder)）を使用しないでください。このモデルはタスクの完了したテキストではなく、JSON形式のリクエストペイロードを返します。詳細はユーザーガイドの[設定 → モデル](USER-GUIDE.ja.md#models)を参照してください。

他のプロバイダー（OpenAI、Anthropic、Google Gemini、DeepSeek、Groq、Mistral、xAI、Cerebras）を使用するか、[Ollama](https://ollama.com)を使ってローカルでモデルを実行することも可能です。サポートされているプロバイダーと環境変数の完全なリストについては、[設定と環境](#configuration-and-environment)をご覧ください。

> ⚠️ **警告**<br/>
> 別のデバイス、コンテナ、またはサービスからOllamaを使用する場合、Ollamaを外部接続（localhostのみでない）を許可するように設定するのを忘れないでください。

制限事項、BYOK（Bring Your Own Key）、その他の詳細については、[OpenRouter認証](https://openrouter.ai/docs/api/reference/authentication)を参照してください。

<br/><br/>

<a id="configuration-and-environment"></a>

## 設定と環境

**設定ファイルの場所**

| デプロイ方法        | 設定ファイルの場所                                   |
| ------------------ | ------------------------------------------------- |
| Electron (Windows) | `%APPDATA%\transrewrt\`                           |
| Electron (Linux)   | `~/.config/transrewrt/`                           |
| Web / Docker       | `/app/data/config.json` (ボリュームを使用して永続化) |

<br/>

**環境変数**（Web版/Docker版のみ。Electronはローカルの設定ファイルを使用）

| 変数 | デフォルト | 説明 |
| ---------------- | ----------------------- | ----------- |
| `PORT`           | `5000`                  | サーバーのリスニングポート |
| `CONFIG_PATH`    | `/app/data/config.json` | 設定ファイルのパス |
| `TZ`             | `Europe/London`         | サーバー側の時間（ログなど）に使用するIANAタイムゾーン。UIは引き続きブラウザーの設定に従います。[Docker → タイムゾーン](#docker-timezone)を参照 |
| `OPENROUTER_API_KEY` | *(空)*               | OpenRouter APIキー |
| `OPENAI_API_KEY`     | *(空)*               | OpenAI APIキー |
| `CEREBRAS_API_KEY`   | *(空)*               | Cerebras APIキー |
| `ANTHROPIC_API_KEY`  | *(空)*               | Anthropic APIキー |
| `GOOGLE_API_KEY`     | *(空)*               | Google Gemini APIキー |
| `DEEPSEEK_API_KEY`   | *(空)*               | DeepSeek APIキー |
| `GROQ_API_KEY`       | *(空)*               | Groq APIキー |
| `MISTRAL_API_KEY`    | *(空)*               | Mistral APIキー |
| `OLLAMA_URL`     | *(空)*               | OllamaのベースURL（例: `http://host.docker.internal:11434`） |
| `XAI_API_KEY`        | *(空)*               | xAI APIキー |

使用するプロバイダーのみを設定してください。モデルIDは名前空間が指定されています（例：`openrouter/…`、`openai/…`、`cerebras/…`、`ollama/…` など）。

**コスト表示**：OpenRouterは課金対象の場合、正確な課金コストを返します。その他のプロバイダーは、OpenRouterのAPIキーがある場合に限り、OpenRouterが公開しているモデル価格に基づく**推定コスト**を表示します。APIキーがない場合、OpenRouter以外のコストは`0`と表示されることがあります。推定値は請求書とは異なります。

<br/>

**データと永続性**：Dockerをご利用の場合、`/app/data`にボリュームをマウントして、`config.json`およびSQLiteデータベースがコンテナの再起動後も保持されるようにしてください。ボリュームを設定しない場合、コンテナが停止するとすべてのデータが失われます。

**開発者の方へ**：古い単一キー設定を置き換える変更を取得した後、ローカルの`data/config.json`ファイルが削除されたフィールド（`api_key`、`api_url`、プロキシ設定など）をまだ使用している場合には、`src/config-defaults/config_default.json`にある新しいデフォルト構造に従って`data/config.json`をリセットまたはマージしてください。

<br/>

**Web認証**：

- デフォルトの管理者アカウント：`admin` / `transrewrt26`
- ユーザーの管理は、**設定 → ユーザー**から行えます。

- パスワードをリセットする：`docker exec <container> reset-web-password '<username>' '<new-password>'`  
  （ソースからの実行：`pnpm run reset-web-password -- <username> <new-password>`）

<br/>

> ⚠️ **警告**<br/>
> ネットワーク経由でアクセスできるすべてのホストにおいて、直ちに既定の管理者パスワードを変更してください。

<br/>

フォント、モデル、言語などの主要な設定は、アプリケーションの設定画面から行えます。

<br/><br/>

<a id="development-and-architecture"></a>

## 開発とアーキテクチャ

- **開発：** セットアップ、ビルド、テスト、デプロイ（Electron、Web、Docker）については、**[dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)** を参照してください。
- **アーキテクチャとシステム概要：** フォルダ構成、使用技術スタック、設計上の意思決定については、**[dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)** を参照してください。

<br/><br/>

<a id="reporting-issues"></a>

## 問題の報告

[GitHub](https://github.com/wsj-br/transrewrt/issues) で問題を登録してください。プラットフォーム（Windows / Linux / Docker）およびアプリのバージョン（「情報」ダイアログまたは「リリース」ページに表示）を必ず含めてください。

<br/><br/>

<a id="disclaimer"></a>

## 免責事項

製品名およびアイコンはそれぞれの所有者に帰属し、識別目的でのみ使用されています。このソフトウェアは、記載されているブランドのいずれとも提携しておらず、またそれらの承認を受けてもいません。

<br/><br/>

<a id="license"></a>

## ライセンス

Copyright © 2026 Waldemar Scudeller Jr.

[Apache License 2.0](LICENSE)