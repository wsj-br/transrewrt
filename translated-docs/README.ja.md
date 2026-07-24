<p align="center">
  <img src="../images/transrewrt_banner.png" alt="Transrewrt Banner"  />
</p>

<p align="center">
  <a href="https://github.com/wsj-br/transrewrt/releases"><img src="https://img.shields.io/badge/version-1.6.2-blue" alt="Version"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-Apache%202.0-green" alt="License: Apache 2.0"></a>
  <img src="https://img.shields.io/badge/platform-Windows%20%7C%20Linux%20%7C%20Docker-lightgrey" alt="Platform">
</p>

AI搭載のテキストツール：カスタムプロンプトを使用して**翻訳**、**書き換え**、および**変換**を行います — 独自のAIプロバイダ（OpenRouter、OpenAI、Anthropic、Google Gemini、DeepSeek、Groq、Mistral、xAI、Cerebras、NVIDIA、Alibaba Cloud、apikey.fun、OpenAI互換エンドポイント、およびOllama、LM Studio、llama.cppなどのローカルOpenAI互換サーバー）を使用します。デスクトップアプリ（Windows / Linux）またはセルフホスト型Webアプリ（Docker）。Transrewrtクラウドアカウントは不要です。

| | |
| --- | --- |
| **翻訳** | 数十言語、自動検出、用語集、言い換えでリファイン |
| **書き換え** | 明確さ、トーン、長さ、スペルと文法 — 同一言語 |
| **変換** | 作成、編集、再利用可能なカスタムAIプロンプト |
| **デプロイ** | ElectronデスクトップまたはDocker Web (amd64 & arm64) |
| **キー** | あなたのプロバイダー、あなたのホスト — 簡単プリセットまたは高度なモデルリスト |

![翻訳](../images/screenshots/ja/translate.png)

<small>**他の言語で読む：** </small>
<small id="lang-list">[English (UK)](../README.md) · [العربية](./README.ar.md) · [简体中文](./README.zh-Hans.md) · [繁體中文](./README.zh-Hant.md) · [Čeština](./README.cs.md) · [Nederlands](./README.nl.md) · [Français](./README.fr.md) · [Deutsch](./README.de.md) · [Ελληνικά](./README.el.md) · [हिन्दी](./README.hi.md) · [Magyar](./README.hu.md) · [Italiano](./README.it.md) · [日本語](./README.ja.md) · [한국어](./README.ko.md) · [فارسی](./README.fa.md) · [Polski](./README.pl.md) · [Português (Brasil)](./README.pt-BR.md) · [Română](./README.ro.md) · [Русский](./README.ru.md) · [Slovenčina](./README.sk.md) · [Español](./README.es.md) · [Svenska](./README.sv.md) · [ไทย](./README.th.md) · [Türkçe](./README.tr.md) · [Українська](./README.uk.md) · [Tiếng Việt](./README.vi.md)</small>

## クイックスタート

**Docker**

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest

OPENROUTER_API_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_API_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

[http://localhost:5000](http://localhost:5000)を開き、デフォルトの管理者パスワードを変更してください。プロバイダーキーは環境変数で設定します (Web UIからではありません)。

**Windows** — [Releases](https://github.com/wsj-br/transrewrt/releases)から`Transrewrt Setup x.y.z.exe`をダウンロードし、インストール後、**設定 → API**でキーを追加してください。

**Linux** — [Releases](https://github.com/wsj-br/transrewrt/releases)から`.AppImage`をダウンロードし、以下を実行してください:

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

プラットフォームの詳細 (Compose、SmartScreen、aptライブラリ、GPUフラグ、タイムゾーン): [クイックスタートドキュメント](https://wsj-br.github.io/transrewrt/docs/quick-start/)。

## ドキュメント

完全な製品ドキュメント (インストール、APIキー、ガイド、設定、トラブルシューティング):

**[https://wsj-br.github.io/transrewrt/docs/](https://wsj-br.github.io/transrewrt/docs/)**

- [APIキー](https://wsj-br.github.io/transrewrt/docs/api-key/)
- [設定](https://wsj-br.github.io/transrewrt/docs/configuration/)
- [翻訳](https://wsj-br.github.io/transrewrt/docs/translate/) · [書き換え](https://wsj-br.github.io/transrewrt/docs/rewrite/) · [変換](https://wsj-br.github.io/transrewrt/docs/transform/)
- [よくある問題](https://wsj-br.github.io/transrewrt/docs/common-issues/)

## 開発

- セットアップ、ビルド、テスト、デプロイ: [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)
- アーキテクチャ概要: [dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)

## サポート

[GitHub](https://github.com/wsj-br/transrewrt/issues)でIssueを開いてください。プラットフォーム (Windows / Linux / Docker) とアプリバージョン (についてダイアログまたはReleasesページ) を記載してください。

## 謝辞

簡単モードのプリセットの提案は、プリセットエディターで以下の公開評価データを使用しています:

- [languagebench](https://huggingface.co/spaces/fair-forward/languagebench) (CC BY-SA 4.0)
- [Artificial Analysis](https://artificialanalysis.ai/) (APIデータの帰属表示が必要)

サードパーティの依存関係ライセンスおよびこれらのデータソースに関する通知は、[NOTICES](../NOTICES)に記載されています。

## ライセンス

Copyright © 2026 Waldemar Scudeller Jr.

[Apache License 2.0](../LICENSE)

製品名およびアイコンはそれぞれの所有者に帰属し、識別目的のみに使用されます。本ソフトウェアはこれらのブランドと提携しているわけではなく、また推奨されているわけでもありません。

<small>

> **UIおよびドキュメント翻訳に関する注意:** 原語である英語を除く 
> すべてのインターフェイスおよびドキュメント言語は、[ai-i18n-tools](https://wsj-br.github.io/ai-i18n-tools/)を用いたAIモデルを使用して翻訳されており、
> 表現が不正確であったり、エラーが含まれている場合があります。

</small>
