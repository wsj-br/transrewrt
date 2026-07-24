---
title: テキストを書き換える
description: 同じ言語で表現を改善します。明確さ、トーン、長さ、文法などを調整します。
---



**Rewrite**を使用すると、主な意味を変えずに表現を改善できます。テキストは同じ言語のまま維持されます。

![書き換えワークスペース](/images/screenshots/ja/rewrite.png)

モードには以下が含まれます:

- **Check Spelling & Grammar**
- **Improve Clarity**
- **Alternative versions** (1回の実行で複数の言い換え)
- **Make Formal** / **Make Informal**
- **Shorten** / **Expand**
- **Make Technical**

## テキストを書き換える

1. **Rewrite**を開きます。
2. **Mode**を選択します。
3. 必要に応じて**From**をテキストの言語に設定します (または**Detect Language**のままにします)。
4. **Input**にテキストを入力または貼り付けます。
5. **Rewrite**をクリックします。
6. **Output**で結果を確認します。

[レイアウトの切り替えとキーボードショートカット](/docs/translate/#layout-and-keyboard)は、Translateと同じように機能します。

:::tip
書き換え後、**すべての**書き換えモードにおいて、**コピー**の隣に**変更を表示**（**変更**）スイッチが表示されます。これを切り替えると、入力と出力の差分の表示と非表示を切り替えられます。
:::

:::note
**代替バージョン**は、1回の**単一**実行で複数の言い換えを返し、それらは`----`で区切られます。これは、時間をかけてバージョン履歴を構築する**Rephrase…** とは異なります。
:::

## 書き換えを調整する

実行が成功すると、出力側に**Rephrase…** とバージョンのドロップダウンが表示されます ([Translate](/docs/translate/#refine-a-translation)と同じ考え方ですが、テキストは同じ言語のままで、現在の**Mode**が維持されます):

1. **Rephrase…** (選択なし) — 別の表現による完全な書き換え。最大5つのバージョン。**Stop Rewrite**をクリックしてキャンセルします。
2. **Word alternatives** — テキストを選択し、右クリックまたは**Rephrase…** を選択します。
3. 各リクエストには使用コストが発生する場合があります。

## 次のステップ

- [テキストを翻訳する](/docs/translate/)
- [プロンプトで変換する](/docs/transform/)
- [一般的な問題](/docs/common-issues/)
