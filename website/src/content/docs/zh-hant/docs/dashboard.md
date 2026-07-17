---
title: 使用儀表板
description: 檢閱使用量、成本與呼叫紀錄 —— 篩選、匯出並管理已儲存的紀錄。
translation_last_updated: '2026-07-17T21:14:43.709Z'
source_file_mtime: '2026-07-17T11:53:39.333Z'
source_file_hash: 689c93c2517f806f7976d570b4fc86d30ca048ce906d982429b985ad06dd9250
translation_language: zh-Hant
source_file_path: src/content/docs/docs/dashboard.md
translation_models:
  - z-ai/glm-5.2
---



使用**儀表板**來查看您使用應用程式的頻率以及花費了多少成本（針對付費模型）。

![儀表板摘要](/images/screenshots/zh-Hant/dashboard-summary.png)

:::note
如果您只使用**免費**模型，成本金額可能為零。**摘要**上的呼叫次數 KPI 仍需要所選時段內的活動紀錄。
:::

## 篩選資料

使用頂部的篩選按鈕來變更時間範圍。

:::note
**使用者**篩選器僅在網頁版中對管理員可見。桌面版不提供此功能。
:::

## 分頁

- **摘要** — KPI：總成本、已使用模型、各模式呼叫次數與成本、每次呼叫平均成本、平均 TPS、依呼叫次數排名的熱門模型
- **依模型** — 各模型的呼叫次數、成本與 TPS；展開某列以查看模式明細
- **所有呼叫** — 完整呼叫紀錄（分頁或卡片）並提供匯出

## 匯出資料

將表格匯出為**JSON**、**CSV**或**XLSX**。

## 刪除某模型的已儲存紀錄

在**依模型**或**所有呼叫**中，使用垃圾桶圖示來移除某模型的紀錄。

:::caution
刪除後無法復原。若要依時間刪除或清除所有成本資料，請使用[設定 → 成本追蹤](/docs/settings/#cost-tracking)。
:::

## 後續步驟

- [瀏覽歷史紀錄](/docs/history/)
- [設定](/docs/settings/)
- [常見問題](/docs/common-issues/)
