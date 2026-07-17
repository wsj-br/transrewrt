---
title: 履歴の閲覧
description: 過去の翻訳、書き換え、変換の実行内容と、完全な入出力テキストを確認します。
translation_last_updated: '2026-07-17T21:14:45.975Z'
source_file_mtime: '2026-07-17T11:53:39.333Z'
source_file_hash: 79c4a60a79491755299b9de8c5e8f0945ccc6d0b32743e1682fede521dade7fa
translation_language: ja
source_file_path: src/content/docs/docs/history.md
translation_models:
  - z-ai/glm-5.2
---



過去の操作（各実行の入力と出力を含む）を確認するには、**履歴**を開きます。

![履歴ページ](/images/screenshots/ja/history.png)

履歴は、[ダッシュボード](/docs/dashboard/)と同じ時間範囲フィルターを使用します。

:::note
**Webアプリ**では、すべてのユーザー（管理者を含む）が自身の実行履歴のみを表示できます。ダッシュボードの**ユーザー**フィルターはここでは適用されません。
:::

## エクスポート

フィルタリングされたリストを**JSON**、**CSV**、または**XLSX**としてエクスポートします。

## 履歴がない場合

**実行履歴を保持**がオフになっている可能性があります。管理者が`HISTORY_DISABLED`を設定していない限り、[設定 → 一般設定](/docs/settings/#general-settings)で有効にしてください。詳細は[構成](/docs/configuration/#privacy-mode)を参照してください。

## 次のステップ

- [ダッシュボードの使用](/docs/dashboard/)
- [設定](/docs/settings/)
- [一般的な問題](/docs/common-issues/)
