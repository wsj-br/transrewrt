---
title: 概要
description: Transrewrtとは何か、およびインストール、ガイド、設定のドキュメントの見つけ方。
translation_last_updated: '2026-07-17T14:59:00.645Z'
source_file_mtime: '2026-07-17T14:36:51.471Z'
source_file_hash: 6dfcf9cb19e3422d75511ecc06eda72e014214c3e34d95f7fec6d8a05c01896f
translation_language: ja
source_file_path: src/content/docs/docs/index.md
translation_models:
  - z-ai/glm-5.2
---



**Transrewrt**は、以下の用途に使用できるオープンソースのAI搭載テキストツールです：

- **翻訳** — 数十の言語間で、ソース言語の自動検出と用語集に対応
- **リライト** — 文法の修正、明確さの向上、トーンや長さの変更
- **トランスフォーム** — 任意のテキストに対して独自のカスタムAIプロンプトを実行

多くのAIプロバイダー（OpenRouter、OpenAI、Anthropic、Google Gemini、DeepSeek、Groq、Mistral、xAI、Cerebras、NVIDIA、Alibaba Cloud、apikey.fun、OpenAI互換エンドポイント、およびOllama、LM Studio、llama.cppなどのローカルOpenAI互換サーバー）をサポートしています。**デスクトップアプリ**（Windows / Linux）または**セルフホスト型Webアプリ**（Docker）として実行できます。

キー、モデル、ホストはすべてユーザー自身のものです。Transrewrtのクラウドアカウントは存在しません。

## ウィンドウの構成

- **Sidebar** — 翻訳、書き換え、変換、ダッシュボード、履歴、設定（およびWeb版のログインユーザー）
- **Toolbar** — ページタイトル、**preset**（Easy）または**model**（Advanced）セレクター、および**Interface language**（地球アイコン、翻訳元/翻訳先は変更されません）
- **Work area** — カウント、タイミング、TPS、およびオプションのコストを含む入力パネルと出力パネル

デフォルトでは、アプリは**Easy**モードで実行されます。設定で**preset**と**Provider**を選択します。完全なモデルリストを表示するには、[設定 → 一般設定](/docs/settings/#general-settings)で**Advanced**に切り替えます。

## はじめに

1. [クイックスタート](/docs/quick-start/) — デスクトップ版のインストールまたはDockerでの実行
2. [APIキー](/docs/api-key/) — 無料のOpenRouterキーまたは他のプロバイダーへの接続
3. [設定](/docs/configuration/) — 環境変数、設定パス、Web認証

## ガイド

- [テキストの翻訳](/docs/translate/)
- [テキストの書き換え](/docs/rewrite/)
- [プロンプトによる変換](/docs/transform/)
- [ダッシュボードの使用](/docs/dashboard/)
- [履歴の閲覧](/docs/history/)

## リファレンスとヘルプ

- [設定](/docs/settings/)
- [よくある問題](/docs/common-issues/)

[Download releases](https://github.com/wsj-br/transrewrt/releases) · [GitHub repository](https://github.com/wsj-br/transrewrt)
