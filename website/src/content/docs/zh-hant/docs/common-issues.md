---
title: 常見問題
description: Transrewrt 的疑難排解與快速提示。
translation_last_updated: '2026-07-17T21:14:43.532Z'
source_file_mtime: '2026-07-17T14:37:17.841Z'
source_file_hash: d60d2f0d1e9289639fd72ad478b6756e4638dce77acf7d2d1795a37653a97f17
translation_language: zh-Hant
source_file_path: src/content/docs/docs/common-issues.md
translation_models:
  - minimax/minimax-m2.7
  - z-ai/glm-5.2
---



如果運作不如預期，請先檢查這幾點。

## 應用程式無法翻譯、改寫或轉換

請確認：

- 您已在工具列中選擇了 **預設** (簡易) 或 **模型** (進階)
- 在 **簡易** 模式下，**設定 → 一般設定** 中的 **供應商** 具有有效的金鑰 (或本地 LLM URL)
- 在 **進階** 模式下，**設定 → 模型** 中列出了至少一個模型
- 您的 API 設定運作正常 (桌面版：**設定 → API 設定 → 測試**)

## 模型清單為空

在 **簡易** 模式下，確認已設定 **供應商** 且已測試金鑰/URL。對於 **本地 LLM**，請確保您的本地伺服器正在執行且已載入模型。

在**Advanced**模式中，開啟**Settings → Models**，按一下**Refresh**，然後將模型新增至**Selected Models**。可選擇開啟**Free Only**。

## 太慢或太貴

- 選擇不同的預設集或模型
- 使用較短的輸入內容
- 在一般設定中關閉**Real-time translation while typing**
- 使用免費模型處理簡單任務

## 介面語言錯誤

按一下工具列中的地球圖示，然後選擇您的**Interface language**。

## 文字太小或難以閱讀

**Settings → General Settings** → 變更**Font Family**和**Size**。

## 儀表板摘要看起來是空的

在以下情況下這是正常的：

- 您只使用**免費模型**且正在查看**成本**數據（可能為零）；呼叫次數 KPI 仍需要所選時段的資料
- 所選的**時間篩選器**未涵蓋發出呼叫的時間 — 請嘗試**全部**

如果在**全部**之後 KPI 仍為零，請檢查[歷史記錄](/docs/history/)或儀表板 → **所有呼叫**。

## 成本顯示「不可用」或似乎有誤

OpenRouter 會在適用時顯示實際花費。對於其他供應商，成本是根據 OpenRouter 定價估算；如果沒有符合的價格，成本會顯示為**不可用**且不會計入總數。

## 總成本與我的供應商帳單不符

應用程式中的數據為**供參考的估算值**，而非發票。對於 OpenRouter，請使用**設定 → 成本追蹤 → 與 API 金鑰使用量同步**。

## 側邊欄缺少歷史記錄頁面

**保留執行歷史記錄**可能已關閉。除非管理員已停用歷史記錄，否則請在一般設定中啟用它（`HISTORY_DISABLED` — 請參閱[設定](/docs/configuration/#privacy-mode)）。

## 網頁：意外重新導向至登入頁面

您的工作階段可能已逾時。請重新登入。如果經常發生，請檢查伺服器的工作階段存活時間設定。

## 網頁管理員：忘記密碼

如果另一個管理員可以登入，他們可以在 **設定 → 使用者** 下重設密碼。如果您被鎖定但擁有 shell 存取權限：

```bash
docker exec transrewrt reset-web-password '<username>' '<new-password>'
```

預設管理員使用者名稱為 `admin`。從原始碼簽出：`pnpm run reset-web-password -- <username> <new-password>`。

## 儀表板未顯示其他使用者的資料 (網頁)

只有**管理員**可以透過**使用者**篩選器查看其他使用者。一般使用者只能看到自己的活動。

## 變更了提示詞並遺失編輯內容

編輯 Transform 提示詞時，請在點擊 **返回執行** 之前先點擊 **儲存**。

## 快速提示

- 在 Rewrite 或 Transform 之前，先從[翻譯](/docs/translate/)開始以確認您的設定
- 使用[Rewrite](/docs/rewrite/)進行日常用語改善
- 使用[Transform](/docs/transform/)進行可重複的自訂工作流程
- 保持在**簡易**模式，直到您需要精細的模型 ID
- 如果您正在建立提示詞庫，請定期匯出提示詞
- 使用[儀表板](/docs/dashboard/)和[歷史記錄](/docs/history/)來檢閱使用量和過去的執行

[Report an issue](https://github.com/wsj-br/transrewrt/issues)
