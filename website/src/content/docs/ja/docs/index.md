---
title: 概要
description: Transrewrtの概要と、インストール、ガイド、設定ドキュメントの見つけ方。
---



**Transrewrt**は、AIを活用したオープンソースのテキストツールで、以下の機能を提供します：

- **翻訳** — 数十の言語間での翻訳、自動ソース検出、用語集に対応
- **リライト** — 文法の修正、明確さの向上、トーンや長さの変更
- **トランスフォーム** — 任意のテキストに対してカスタムAIプロンプトを実行

多くのAIプロバイダー（OpenRouter、OpenAI、Anthropic、Google Gemini、DeepSeek、Groq、Mistral、xAI、Cerebras、NVIDIA、Alibaba Cloud、apikey.fun、OpenAI互換エンドポイント、およびOllama、LM Studio、llama.cppなどのローカルOpenAI互換サーバー）をサポートしています。**デスクトップアプリ**（Windows / Linux）または**Docker Webアプリ**として実行できます。

あなたのキー、あなたのモデル、あなたのホスト — Transrewrtのクラウドアカウントはありません。

## ウィンドウの構成

![翻訳ワークスペース](/images/screenshots/ja/translate.png)

- **Sidebar** — メインナビゲーション: 翻訳、リライト、変換、ダッシュボード、履歴、設定 (およびウェブ版のログインユーザー)。
- **Toolbar** — ページタイトル、**preset** (かんたん) または **model** (高度) のセレクター、**Interface language** (地球アイコン、翻訳元/先は変更されません)、およびこれらのドキュメントにリンクするヘルプ (**?**)。プリセット/モデルメニューでは、**Switch to Easy/Advanced mode** (「設定を開く」の上) も可能です。
- **Work area** — 入力パネルと出力パネル (文字数、時間、TPS、オプションのコストを含む)。アクションバーには、GitHub Pages サイトへの小さなアプリの **version** リンク (右下) が表示されます。

デフォルトでは、アプリは**イージーモード**で動作します：設定で**プリセット**と**プロバイダー**を選びます。[設定 → 全般設定](/docs/settings/#general-settings)で**アドバンストモード**に切り替えて完全なモデルリストを表示するか、ツールバーのプリセット/モデルメニュー内のスイッチを使用してください。

## はじめに

1. [クイックスタート](/docs/quick-start/) — デスクトップ版のインストールまたはDockerでの実行
2. [APIキー](/docs/api-key/) — 無料のOpenRouterキーまたはその他のプロバイダーを接続
3. [設定](/docs/configuration/) — 環境変数、設定パス、Web認証

## ガイド

- [テキストを翻訳する](/docs/translate/)
- [テキストをリライトする](/docs/rewrite/)
- [プロンプトでトランスフォームする](/docs/transform/)
- [ダッシュボードを使う](/docs/dashboard/)
- [履歴を閲覧する](/docs/history/)

## リファレンスとヘルプ

- [設定](/docs/settings/)
- [一般的な問題](/docs/common-issues/)

[Download releases](https://github.com/wsj-br/transrewrt/releases) · [GitHub repository](https://github.com/wsj-br/transrewrt)
