---
title: プロンプトで変換
description: カスタムAI命令を実行 — Transformプロンプトの作成、編集、テスト、管理を行います。
---



AIにカスタム命令に従わせたい場合は**Transform**を使用します — 要約、メールの推敲、要点の抽出、テキストの再フォーマット、定義したワークフローなど。

![Transformワークスペース](/images/screenshots/ja/transform.png)

## 既存プロンプトを実行する

1. **Transform**を開きます。
2. リストからプロンプトを選びます。
3. **From**言語ボックスが表示された場合、希望すれば言語を設定します。
4. **Input**にテキストを入力または貼り付けます。
5. **Transform**をクリックします。
6. **Output**で結果を確認します。

## サンプルプロンプトを読み込む

リストが空の場合、Transformワークスペースで**Load sample prompts**をクリックします（[Settings → Transform](/docs/settings/#transform)でも利用可）。サンプルは英語です。読み込んだ後、プロンプトを編集し、必要に応じて**Translate prompt**を使用します。

## プロンプトを作成する

1. **New prompt**をクリックします。
2. **Generate prompt**をクリックします。
3. プロンプトに何をさせたくないかを説明します。
4. プリセット（Easy）またはモデル（Advanced）を選びます。
5. 草案を確認し、**Save**をクリックします。

## プロンプトを編集する

エディターは左側に、テストエリアは右側にあります。

![Transformプロンプトエディター](/images/screenshots/ja/transform-prompt-edit.png)

メインフィールド：

- **Prompt name** — プロンプトリストに表示される名前
- **Prompt instructions (optional)** — プロンプト実行時の短いヒント
- **Model Role** — AIの全体的な役割
- **Model Instructions (one per line)** — 従うルール
- **Output description** — 結果の短いラベル（例：要約済み）
- **Temperature (0.0 → 1.0)** — 低いほど保守的、高くなるほど創造的
- **Ask for target language** — 実行時に言語選択を追加

ヘルパー：**Generate prompt**、**Improve prompt**、**Translate prompt**（Easyはプリセットを使用、Advancedはモデルリストを使用）。

:::caution
**Back to Run**の前に**Save**をクリックしてください。保存せずに戻ると編集が破棄されます。
:::

## 日常使用前のテスト

プロンプトの作成や比較を行う際は、右側のテストパネルでサンプルテキストを使用してください。

[設定 → 変換](/docs/settings/#transform) でプロンプトを一括でエクスポートおよびインポートします。

## 次のステップ

- [設定](/docs/settings/)
- [履歴の閲覧](/docs/history/)
- [よくある問題](/docs/common-issues/)
