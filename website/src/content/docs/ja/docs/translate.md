---
title: テキストを翻訳
description: 言語間でテキストを変換し、用語集を使用し、言い換えで結果を調整します。
---



**Translate** を使用して、テキストをある言語から別の言語に変換します。

![ワークスペースを翻訳](/images/screenshots/ja/translate.png)

## 前提条件

- プロバイダーキー（デスクトップ）またはサーバー環境キー（Web）が少なくとも1つ — [APIキー](/docs/api-key/)を参照
- ツールバーで**preset**（Easy）または**model**（Advanced）が選択されていること

## テキストを翻訳

1. サイドバーで **Translate** を開きます。
2. **From** で言語を選択します（または **Detect Language**）。
3. **To** で言語を選択します。
4. ツールバーでプリセットまたはモデルを選択します。
5. **Input** にテキストを入力または貼り付けます。
6. **Translate** をクリックします。
7. **Output** で結果を読み、必要に応じてコピーします。

**Top languages** はリストの先頭に表示されます — [Settings → Languages](/docs/settings/#languages) で設定します。

## 便利な設定

[Settings → General Settings](/docs/settings/#general-settings) で:

- **Auto-execute on paste** — 貼り付けるとすぐに実行
- **Auto-copy result to clipboard** — 成功時にクリップボードへコピー
- **Real-time translation while typing** — 入力中に実行（コストが増加する場合があります）
- **Timeout (ms)** — リアルタイム実行前の待機時間
- **Behaviour for ENTER** — Enter でタスクを実行するか改行を挿入するか

## 翻訳を調整

成功後に、**Rephrase…** とバージョンのドロップダウンが **To:** セレクターの隣に表示されます:

1. **Rephrase…**（選択なし） — 同じ入力の別の完全な翻訳。最大 **5** つのバージョン。モデルは以前のバージョンを参照するため表現が異なる場合があります。**Stop Translate** をクリックして実行中の言い換えをキャンセルします。
2. **Word alternatives** — 単語や短いフレーズを選択し、右クリックまたは **Rephrase…** を選択します。代替案を選んでその範囲を置き換えます（文法のためわずかに広がる場合があります）。5つのバージョンある場合、バージョン5のみが更新されます。
3. 各言い換えや代替案のリクエストはモデルを再使用し、コストが追加される場合があります。

## 用語集を使用

**glossary** は、言語ペアのソース/ターゲット用語ペアです。有効にすると、一致する用語がモデルに送られ、好ましい表現が一貫します。

1. 入力パネルで **Glossary** をオンにします。
2. いつも通りに翻訳します — その **From** / **To** ペアの用語が自動的に適用されます。
3. **Add to Glossary**（**From:** の隣）をクリックして、新しいペアをすばやく取り込みます。
4. すべての用語は [Settings → Glossary](/docs/settings/#glossary) で管理します。

:::note
用語集の用語は言語ペアによって照合されます。ソースとして**Detect Language**を指定した場合は使用できません。
:::

## 次のステップ

- [テキストの書き換え](/docs/rewrite/)
- [プロンプトによる変換](/docs/transform/)
- [よくある問題](/docs/common-issues/)
