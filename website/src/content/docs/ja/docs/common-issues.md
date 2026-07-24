---
title: 一般的な問題
description: Transrewrtのトラブルシューティングとクイックヒント。
---



期待通りに動作しない場合は、まず以下の点を確認してください。

## アプリが翻訳、書き換え、変換を行わない

以下の点を確認してください：

- ツールバーで**プリセット**（Easy）または**モデル**（Advanced）を選択している
- **Easy**モードでは、**Settings → General Settings**に有効なキー（またはLocal LLM URL）を持つ**Provider**が設定されている
- **Advanced**モードでは、ツールバーでモデルが選択されている（空のリストは許容されますが、実行するには**Settings → Models**に少なくとも1つのモデルが必要です）
- APIの設定が動作している（デスクトップ：**Settings → API Config → Test**）

## モデルリストが空です

**Easy**モードでは、**Provider**が設定され、キー/URLがテストされていることを確認してください。**Local LLM**の場合は、ローカルサーバーが実行中で、モデルがロードされていることを確認してください。

**Advanced**モードでは、選択されたモデルが空の場合があります。**Settings → Models**を開き、**Refresh**をクリックして、**Selected Models**にモデルを追加してください。必要に応じて**Free Only**をオンにしてください。最後のツールバーモデルを削除すると、Settings → Modelsも開きます。

## 速度が遅い、またはコストが高い

- 別のプリセットまたはモデルを選択してください
- 入力テキストを短くしてください
- General Settingsで**Real-time translation while typing**をオフにしてください
- 単純なタスクには無料モデルを使用してください

## インターフェース言語が正しくない

ツールバーの地球儀アイコンをクリックし、**Interface language**を選択してください。

## テキストが小さすぎる、または読みにくい

**Settings → General Settings** → **Font Family**と**Size**を変更してください。

## ダッシュボードサマリーが空に見える

これは正常な場合があり、以下の条件に該当します：

- **free models**のみを使用していて、**cost**の数値を見ている場合（ゼロの場合があります）；コール数のKPIは選択期間のデータが必要です
- 選択した**time filter**が通話の作成時期をカバーしていない — **All**を試してください

**All**を選択後もKPIがゼロの場合は、[History](/docs/history/)またはDashboard → **All Calls**を確認してください。

## コストに「利用不可」と表示される、または正しくない

OpenRouterは該当する場合、実際の使用額を表示します。他のプロバイダーの場合、コストはOpenRouterの価格設定から推定されます。価格が一致しない場合、コストは**not available**と表示され、合計には加算されません。

## 合計コストがプロバイダーの請求と一致しない

アプリ内の数値は**estimates for reference**であり、請求書ではありません。OpenRouterの場合、**Settings → Cost Tracking → Sync with API key usage**を使用してください。

## サイドバーに履歴ページが表示されない

**Keep execution history**がオフになっている可能性があります。管理者によって履歴が無効化されていない限り、一般設定で有効にしてください（`HISTORY_DISABLED` — [設定](/docs/configuration/#privacy-mode)を参照）。

## Web: 予期せずログイン画面にリダイレクトされる

セッションがタイムアウトした可能性があります。再度ログインしてください。頻繁に発生する場合は、管理者に[Settings → Users](/docs/settings/#users)の**Session Timeout**の増加を依頼してください（管理者がセッションを取り消した可能性もあります）。

## Web管理者: パスワードを忘れた

別の管理者がサインインできる場合、**Settings → Users**でパスワードをリセットできます。ロックアウトされているがシェルアクセスがある場合:

```bash
docker exec transrewrt reset-web-password '<username>' '<new-password>'
```

デフォルトの管理者ユーザー名は`admin`です。ソースチェックアウトから: `pnpm run reset-web-password -- <username> <new-password>`。

## ダッシュボードに他のユーザーのデータが表示されない (Web)

**administrators**のみが**User**フィルターを通じて他のユーザーを表示できます。一般ユーザーは自身のアクティビティのみを確認できます。

## プロンプトを変更して編集内容が失われた

Transformプロンプトを編集する際、**Back to Run**の前に**Save**をクリックしてください。

## クイックヒント

- RewriteやTransformの前に[Translate](/docs/translate/)で設定を確認してください
- 日常的な表現の改善には[Rewrite](/docs/rewrite/)を使用してください
- 繰り返し可能なカスタムワークフローには[Transform](/docs/transform/)を使用してください
- 細かなモデルIDが必要になるまで**Easy**モードを使用してください
- プロンプトライブラリを構築している場合は、定期的にプロンプトをエクスポートしてください
- 使用状況と過去の実行を確認するには[Dashboard](/docs/dashboard/)と[History](/docs/history/)を使用してください

[Report an issue](https://github.com/wsj-br/transrewrt/issues)
