---
title: プロンプトで変換
description: カスタムAI指示を実行 — Transformプロンプトの作成、編集、テスト、管理を行います。
---



AIにカスタム指示に従わせたい場合（要約、メールの推敲、要点の抽出、テキストの再フォーマット、または独自に定義したワークフローなど）は、**Transform**を使用します。

![Transformワークスペース](/images/screenshots/ja/transform.png)

## 既存のプロンプトを実行する

1. **Transform**を開きます。
2. リストからプロンプトを選択します。
3. **From**言語ボックスが表示された場合は、必要に応じて言語を設定します。
4. **Input**にテキストを入力または貼り付けます。
5. **Transform**をクリックします。
6. **Output**で結果を確認します。

[レイアウトの切り替えとキーボードショートカット](/docs/translate/#layout-and-keyboard)は、Translateと同じように機能します。

## サンプルプロンプトを読み込む

リストが空の場合は、Transformワークスペースで**Load sample prompts**をクリックします（[Settings → Transform](/docs/settings/#transform)からも利用可能）。サンプルは英語です。読み込み後、必要に応じてプロンプトを編集し、**Translate prompt**を使用します。

## プロンプトを作成する

1. **New prompt**をクリックします。
2. **Generate prompt**をクリックします。
3. プロンプトに実行させたい内容を記述します。
4. プリセット（Easy）またはモデル（Advanced）を選択します。
5. ドラフトを確認し、**Save**をクリックします。

## プロンプトを編集する

エディターは左側、テストエリアは右側にあります。

![Transformプロンプトエディター](/images/screenshots/ja/transform-prompt-edit.png)

主なフィールド:

- **Prompt name** — プロンプトリストに表示されます
- **Prompt instructions (optional)** — プロンプト実行時の短いヒント
- **Model Role** — AIの全体的な役割
- **Model Instructions (one per line)** — 従うべきルール
- **Output description** — 結果の短いラベル（例: summarised）
- **Temperature (0.0 → 1.0)** — 低いほど安定、高いほど多様
- **Ask for target language** — 実行時に言語セレクターを追加します

ヘルパー: **Generate prompt**、**Improve prompt**、**Translate prompt**（Easyはプリセット、Advancedはモデルリストを使用）。

:::caution
**Back to Run**の前に**Save**をクリックしてください。保存せずに戻ると、編集内容は破棄されます。
:::

## 日常使用前にテストする

プロンプトの作成や比較を行う際は、右側のテストパネルでサンプルテキストを使用してください。

[設定 → 変換](/docs/settings/#transform)でプロンプトを一括でエクスポート・インポートできます。

## 次のステップ

- [設定](/docs/settings/)
- [履歴を参照](/docs/history/)
- [よくある問題](/docs/common-issues/)
