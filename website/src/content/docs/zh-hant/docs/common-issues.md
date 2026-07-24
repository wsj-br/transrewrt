---
title: 常見問題
description: Transrewrt 的疑難排解與快速提示。
---



如果功能不如預期，請先檢查以下項目。

## 應用程式無法翻譯、改寫或轉換

請確認：

- 您已在工具列中選取 **預設集**（Easy）或 **模型**（Advanced）
- 在 **Easy** 模式中，**設定 → 一般設定** 的 **提供者** 具有有效的金鑰（或本機 LLM URL）
- 在 **Advanced** 模式中，工具列中已選取模型（可為空清單，但您需要在 **設定 → 模型** 中至少新增一個模型才能執行）
- 您的 API 設定正常運作（桌面版：**設定 → API 設定 → 測試**）

## 模型清單為空

在 **Easy** 模式中，確認 **提供者** 已設定且金鑰/URL 已通過測試。若使用 **本機 LLM**，請確保本機伺服器正在執行且模型已載入。

在 **Advanced** 模式中，選取的模型可能為空。開啟 **設定 → 模型**，點選 **重新整理**，然後將模型新增至 **已選取的模型**。可選擇開啟 **僅免費**。移除最後一個工具列模型也會開啟設定 → 模型。

## 太慢或太昂貴

- 選擇不同的預設集或模型
- 使用較短的輸入
- 在一般設定中關閉 **打字時即時翻譯**
- 對簡單任務使用免費模型

## 介面語言錯誤

點選工具列中的地球圖示，然後選擇您的 **介面語言**。

## 文字太小或難以閱讀

**設定 → 一般設定** → 變更 **字體家族** 和 **大小**。

## 儀表板摘要看起來是空的

這在以下情況是正常的：

- 您只使用 **免費模型**，而您正在查看 **成本** 數字（可能為零）；呼叫計數關鍵指標仍需要所選期間的資料
- 選取的 **時間篩選** 未涵蓋通話時間 — 請嘗試 **全部**

如果在選擇 **全部** 後關鍵指標仍為零，請檢查 [歷史記錄](/docs/history/) 或儀表板 → **所有通話**。

## 成本顯示「無法取得」或似乎有誤

OpenRouter 會在適用時顯示實際花費。對於其他供應商，成本會根據 OpenRouter 的定價進行估算；若沒有符合的價格，成本會顯示為**not available**且不會計入總額。

## 總成本與我的供應商帳單不符

應用程式中的數據為**estimates for reference**，而非發票。對於 OpenRouter，請使用**Settings → Cost Tracking → Sync with API key usage**。

## 側邊欄缺少歷史記錄頁面

**Keep execution history**可能已關閉。請在一般設定中啟用它，除非管理員已停用歷史記錄（`HISTORY_DISABLED` — 請參閱[設定](/docs/configuration/#privacy-mode)）。

## Web：意外被重新導向至登入頁面

您的工作階段可能已逾時。請重新登入。如果經常發生此情況，請要求管理員在[Settings → Users](/docs/settings/#users)下增加**Session Timeout**（管理員也可能已撤銷您的工作階段）。

## Web 管理員：忘記密碼

如果另一位管理員可以登入，他們可以在**Settings → Users**下重設密碼。如果您被鎖定但擁有 shell 存取權限：

```bash
docker exec transrewrt reset-web-password '<username>' '<new-password>'
```

預設管理員使用者名稱為`admin`。從原始碼 checkout：`pnpm run reset-web-password -- <username> <new-password>`。

## 儀表板未顯示其他使用者的資料 (web)

只有**administrators**可以透過**User**篩選器檢視其他使用者。一般使用者只能看到自己的活動。

## 變更了提示詞並遺失編輯內容

在編輯 Transform 提示詞時，請在點擊**Back to Run**之前點擊**Save**。

## 快速提示

- 從[Translate](/docs/translate/)開始，以在 Rewrite 或 Transform 之前確認您的設定
- 使用[Rewrite](/docs/rewrite/)進行日常用語改進
- 使用[Transform](/docs/transform/)進行可重複的自訂工作流程
- 保持在**Easy**模式，直到您需要精細的模型 ID
- 如果您正在建立提示詞庫，請定期匯出提示詞
- 使用[Dashboard](/docs/dashboard/)和[History](/docs/history/)來檢閱使用情況與過去的執行記錄

[Report an issue](https://github.com/wsj-br/transrewrt/issues)
