---
translation_last_updated: '2026-03-30T00:46:14.102Z'
source_file_mtime: '2026-03-29T23:51:36.506Z'
source_file_hash: fa17b974cbf42a93
translation_language: ja
source_file_path: README.md
---
<p align="center">
  <img src="../images/transrewrt_banner.png" alt="Transrewrt バナー"  />
</p>

<p align="center">
  <a href="https://github.com/wsj-br/transrewrt/releases"><img src="https://img.shields.io/badge/version-1.1.1-blue" alt="バージョン"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-Apache%202.0-green" alt="ライセンス: Apache 2.0"></a>
  <img src="https://img.shields.io/badge/platform-Windows%20%7C%20Linux%20%7C%20Docker-lightgrey" alt="プラットフォーム">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react" alt="React 19">
  <img src="https://img.shields.io/badge/Electron-41-47848F?logo=electron" alt="Electron 41">
</p>

AI搭載のテキストツール：複数のAIプロバイダー（OpenRouter、OpenAI、Anthropic、Google Gemini、DeepSeek、Groq、Mistral、xAI、およびローカルOllama）を使用して、言語間の翻訳、さまざまなスタイルへのリライト、カスタムプロンプトによる変換が可能。デスクトップアプリ（Electron）またはセルフホスト型Webアプリ（Docker）として実行できます。

- **翻訳** — 数十の言語間で翻訳可能。ソース言語の自動検出付き
- **リライト** — 文法の修正、明瞭さの改善、フォーマル／インフォーマル、短くする、展開する、技術的表現など
- **変換** — カスタムAIプロンプト。プロンプトの作成と管理、プロンプトごとのオプションのターゲット言語指定
- **履歴** — 入力／出力テキスト、フィルタリング、エクスポート機能を備えた完全な実行履歴
- **モデルとコスト** — 設定済みプロバイダーからモデルを選択可能。ログ、モデル／操作／日ごとの集計を含むコストと使用状況のダッシュボード
- **UI** — 多言語言語対応インターフェース（30以上の言語、RTL対応）、フォント、...
- **Webモード** — 管理者ロール付きのマルチユーザー対応
- **デスクトップ** — WindowsおよびLinux用Electronアプリ
- **セルフホスト** — amd64およびarm64（Raspberry Pi対応）用Dockerイメージ

インストール後は、すべての機能の詳細なガイドとして **[ユーザーガイド](USER-GUIDE.ja.md)** をご確認ください。

<small>**他の言語で読む：** </small>
<small id="lang-list">[English (UK)](../README.md) · [Português (BR)](README.pt-BR.md) · [العربية](README.ar.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [Hrvatski](README.hr.md) · [Čeština](README.cs.md) · [Nederlands](README.nl.md) · [English (US)](README.en-US.md) · [Filipino](README.tl.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [हिन्दी](README.hi.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [Basa Jawa](README.jv.md) · [한국어](README.ko.md) · [Bahasa Melayu](README.ms.md) · [فارسی](README.fa.md) · [Polski](README.pl.md) · [Português (PT)](README.pt.md) · [ਪੰਜਾਬੀ](README.pa.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [Slovenčina](README.sk.md) · [Español](README.es.md) · [Kiswahili](README.sw.md) · [Svenska](README.sv.md) · [తెలుగు](README.te.md) · [ภาษาไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Tiếng Việt](README.vi.md)</small>

<small>

> **UIおよびドキュメント翻訳に関する注意：** 英語 (英国) を除くすべてのインターフェース言語はAIモデルを使用して翻訳されています。表現が不正確である場合や誤りが含まれる可能性があります。

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
- [構成と環境](#configuration-and-environment)
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

`sk-or-your-key` を [OpenRouter APIキー](https://openrouter.ai/keys) に置き換えるか、他のプロバイダーのキーを設定してください（[構成](#configuration-and-environment)を参照）。[http://localhost:5000](http://localhost:5000) を開き、サービスを外部に公開する前に既定の管理者パスワードを変更してください。

<br/>

> ℹ️ **注**<br/>
> Dockerでは、LLMの認証情報は `OPENROUTER_API_KEY`、`OPENAI_API_KEY`、`CEREBRAS_API_KEY` などの環境変数で設定します（Web UIでは設定しません）。デスクトップ版（Electron）では、**設定 → API** でキーを設定します。

<br/>

**Windows**

[リリース](https://github.com/wsj-br/transrewrt/releases) から最新の `Transrewrt Setup x.y.z.exe` をダウンロードし、インストーラーを実行してから、スタートメニューまたはデスクトップのショートカットから起動します。**設定 → API** でAPIキーを入力してください。少なくとも1つのプロバイダーを設定する必要があります。無料のモデルを利用するにはOpenRouterが一般的です。

<br/>

**Linux**

[リリース](https://github.com/wsj-br/transrewrt/releases) からCPUに合った `.AppImage` ファイルをダウンロードしてください（一般的なPCには `x64`、Raspberry Pi 4以降を含む多くのARMデバイスには `arm64` を使用）。その後、以下の手順を実行します。

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

**設定 → API** でAPIキーを入力してください。少なくとも1つのプロバイダーを設定する必要があります。無料のモデルを利用するにはOpenRouterが一般的です。

Debian/Ubuntuでは、事前に追加の依存パッケージをインストールする必要がある場合があります。

```bash
sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth
```

詳細は [インストール → Linux](#linux-electron) を参照してください。

<br/>

> ℹ️ **注**<br/>
> 現在、macOSはサポートされていません。TransrewrtはWindows、Linux、およびDockerで利用可能です。

<br/>

アプリが起動したら、**[ユーザーガイド](USER-GUIDE.ja.md)** を参照して、テキストの翻訳、リライト、変換、プロンプトの管理、モデルの設定方法を学んでください。

<br/><br/>

<a id="installation"></a>
## インストール

<a id="windows-electron"></a>
### Windows (Electron)

- [リリース](https://github.com/wsj-br/transrewrt/releases) から最新のインストーラーをダウンロードしてください。
- `.exe` を実行し、インストーラーの指示に従ってください。
- 初回起動：スタートメニューまたはデスクトップのショートカットからアプリを起動してください。

<br/>

> ℹ️ **注**<br/>
> Windowsでは、署名されていない/独立系アプリであるため、以下のセキュリティ警告のいずれかが表示される場合があります：
>   - **ユーザーアカウント制御 (UAC)**: 「不明な発行元のアプリがお使いのデバイスに変更を加えることを許可しますか？」 → **はい** をクリック。
>   - **Microsoft Defender SmartScreen**: 「WindowsによりPCが保護されました」 → **詳細情報** をクリック → ** nonetheless実行** をクリック。
>
> これは、アプリがMicrosoftまたは主要な発行元によって署名されていないためです。公式のGitHubリリースからダウンロードした場合（以下のSHA256チェックサムを確認）は安全です。

<br/>

<a id="linux-electron"></a>
### Linux (Electron)

- [リリース](https://github.com/wsj-br/transrewrt/releases) から対応する `.AppImage` ファイル（`x64` または `arm64`）をダウンロードします。
- 実行: x86_64/amd64 の場合は `chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage` を実行します。ARM64 の場合は `...-arm64.AppImage` ファイル名を使用します。
- 追加の依存関係（Debian/Ubuntu）: `sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth`
- 詳細については [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) を参照してください。

<br/>

<a id="docker"></a>
### Docker

- プル: `docker pull ghcr.io/wsj-br/transrewrt:latest`
- 少なくとも1つのプロバイダーキーを環境変数で設定します（例: OpenRouter の `OPENROUTER_API_KEY`）。`-e` オプションまたは `docker compose` / `.env` ファイルで変数を渡し、シークレットがイメージに組み込まれないようにします。
- プロバイダーのキーは**Web UIで入力しません**。サーバーは環境変数から読み取ります。

例 - 永続化のための名前付きボリューム（環境変数でOpenRouterキーを設定）:

```bash
OPENROUTER_API_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_API_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

またはDocker Composeを使用する場合は、以下を使用します:

```
# download the compose file
wget https://github.com/wsj-br/transrewrt/raw/refs/heads/master/production.yml -O transrewrt.yml
# edit the file to add the API_KEYS and adjust the timezone (TZ)
vi transrewrt.yml
# start the container
docker compose -f transrewrt.yml up -d
```

`PORT`、`CONFIG_PATH`、`TZ`、LLMキー（`OPENROUTER_API_KEY`、`OPENAI_API_KEY` など）を含むすべての環境変数については、[設定](#configuration-and-environment) を参照してください。

<a id="configuring-the-timezone"></a>
### タイムゾーンの設定

アプリケーションのユーザーインターフェースの日付と時刻は、**ブラウザーの**ロケールおよびタイムゾーンに従います。**サーバー側**の動作（ログ記録など）については、コンテナは `TZ` 環境変数を使用します。デフォルトは `TZ=Europe/London` です。

他のタイムゾーンを使用するには、Composeファイルで `TZ` を設定します。例:

```yaml
environment:
  - TZ=America/Sao_Paulo
```

またはコンテナ実行時に（Dockerで）渡すこともできます:

```bash
--env TZ=America/Sao_Paulo
```

多くのLinuxホストでは、以下のコマンドでシステムのタイムゾーン名をコピーできます:

```bash
echo TZ=\"$(</etc/timezone)\"
```

有効なタイムゾーン名のリストは [tzデータベース](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones)（Wikipedia）で管理されています。

<br/><br/>

<a id="getting-an-openrouter-api-key"></a>
## OpenRouter APIキーの取得方法

Transrewrtは複数のAIプロバイダーをサポートしています。[OpenRouter](https://openrouter.ai) は、多数のモデルを1つのキーで利用でき、無料モデルも提供しているため、人気の選択肢です。

1. [openrouter.ai](https://openrouter.ai) でサインアップまたはログインします。
2. [Keys](https://openrouter.ai/keys) ページを開き、新しいキーを作成します（名前を付け、必要に応じてクレジットの上限を設定できます）。クレジットを追加せずに無料モデルを使用できます。
3. **デスクトップ（Electron）:** キーは **設定 → API** に貼り付けます。**Docker:** `OPENROUTER_API_KEY` などの環境変数を設定します（[クイックスタート](#quick-start) を参照）。

翻訳、リライト、変換のタスクでは、OpenRouterの **Body Builder** モデル（[`openrouter/bodybuilder`](https://openrouter.ai/openrouter/bodybuilder)）を使用しないでください。このモデルは、タスクの完了したテキストではなく、JSON形式のリクエストペイロードを返します。詳細はユーザーガイドの [設定 → モデル](USER-GUIDE.ja.md#models) を参照してください。

OpenAI、Anthropic、Google Gemini、DeepSeek、Groq、Mistral、xAI、Cerebras などの他のプロバイダーを使用することもできますし、[Ollama](https://ollama.com) を使用してローカルでモデルを実行することも可能です。サポートされているプロバイダーと環境変数の完全なリストについては、[設定](#configuration-and-environment) を参照してください。

> ⚠️ **警告**<br/>
> 別のデバイス、コンテナ、またはサービスからOllamaを使用する場合は、Ollamaが外部接続を許可するように設定すること（localhostのみではない）を忘れないでください。

制限、BYOK、およびその他の詳細については、[OpenRouter認証](https://openrouter.ai/docs/api/reference/authentication)を参照してください。

<br/><br/>

<a id="configuration-and-environment"></a>
## 構成と環境

**設定ファイルの場所**

| デプロイメント         | 設定ファイルの場所                                   |
| ------------------ | ------------------------------------------------- |
| Electron (Windows) | `%APPDATA%\transrewrt\`                           |
| Electron (Linux)   | `~/.config/transrewrt/`                           |
| Web / Docker       | `/app/data/config.json` (ボリュームを使用して永続化) |

<br/>

**環境変数** (Web / Dockerのみ。Electronはローカルの設定ファイルを使用)

| 変数         | デフォルト                 | 説明 |
| ---------------- | ----------------------- | ----------- |
| `PORT`           | `5000`                  | サーバーのリスンポート |
| `CONFIG_PATH`    | `/app/data/config.json` | 設定ファイルのパス |
| `TZ`             | `Europe/London`         | サーバー側のIANAタイムゾーン（ログなど）。UIは引き続きブラウザの設定に従います。[Docker → タイムゾーン](#docker-timezone)を参照 |
| `OPENROUTER_API_KEY` | *(空)*               | OpenRouter APIキー |
| `OPENAI_API_KEY`     | *(空)*               | OpenAI APIキー |
| `CEREBRAS_API_KEY`   | *(空)*               | Cerebras APIキー |
| `ANTHROPIC_API_KEY`  | *(空)*               | Anthropic APIキー |
| `GOOGLE_API_KEY`     | *(空)*               | Google Gemini APIキー |
| `DEEPSEEK_API_KEY`   | *(空)*               | DeepSeek APIキー |
| `GROQ_API_KEY`       | *(空)*               | Groq APIキー |
| `MISTRAL_API_KEY`    | *(空)*               | Mistral APIキー |
| `OLLAMA_URL`     | *(空)*               | OllamaベースURL (例: `http://host.docker.internal:11434`) |
| `XAI_API_KEY`        | *(空)*               | xAI APIキー |

使用するプロバイダーのみを設定してください。モデルIDは名前空間付きです（`openrouter/…`、`openai/…`、`cerebras/…`、`ollama/…` など）。

**コスト表示：** OpenRouterは該当する場合、請求された正確なコストを返します。その他のプロバイダーは、OpenRouterキーが利用可能な場合、OpenRouterの公開モデル価格に基づく**推定**コストを使用します。OpenRouterキーがない場合、非OpenRouterのコストは`0`と表示されることがあります。推定値は請求書ではありません。

<br/>

**データと永続化：** Dockerでは、`/app/data`にボリュームをマウントして、`config.json`およびSQLiteデータベースがコンテナの再起動後も保持されるようにしてください。ボリュームがない場合、コンテナ停止時にすべてのデータが失われます。

**開発者向け：** 古い単一キー構成を置き換える変更をプルした後、ローカルファイルが削除されたフィールド（`api_key`、`api_url`、プロキシオプション）を使用している場合は、`data/config.json`を`src/config-defaults/config_default.json`の新しいデフォルト構造にリセットまたはマージしてください。

<br/>

**Web認証：**

- デフォルト管理者: `admin` / `transrewrt26`。
- ユーザー管理は **設定 → ユーザー** で行います。
- パスワードのリセット: `docker exec <container> reset-web-password '<username>' '<new-password>'`
  (ソースから実行: `pnpm run reset-web-password -- <username> <new-password>`)

<br/>

> ⚠️ **警告**<br/>
> 任意のネットワークアクセス可能なホストでは、直ちにデフォルトの管理者パスワードを変更してください。

<br/>

フォント、モデル、言語などの主要な設定は、アプリケーションの「設定」で利用可能です。

<br/><br/>

<a id="development-and-architecture"></a>
## 開発とアーキテクチャ

- **開発：** セットアップ、ビルド、テスト、デプロイ（Electron、Web、Docker）については、**[dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)** を参照してください。
- **アーキテクチャとシステム概要：** フォルダー構造、技術スタック、設計の意思決定については、**[dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)** を参照してください。

<br/><br/>

<a id="reporting-issues"></a>
## 問題の報告

[GitHub](https://github.com/wsj-br/transrewrt/issues) で問題を報告してください。使用しているプラットフォーム（Windows / Linux / Docker）およびアプリのバージョン（「概要」ダイアログまたはリリースページに表示）を含めてください。

<br/><br/>

<a id="disclaimer"></a>
## 免責事項

製品名およびアイコンはそれぞれの所有者に帰属し、識別目的でのみ使用されています。本ソフトウェアは、記載されたブランドとの提携や承認を受けたものではありません。

<br/><br/>

<a id="license"></a>
## ライセンス

Copyright © 2026 Waldemar Scudeller Jr.

[Apache License 2.0](../LICENSE)
