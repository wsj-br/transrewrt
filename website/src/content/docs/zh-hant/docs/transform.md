---
title: 使用提示詞進行轉換
description: 執行自訂 AI 指令 — 建立、編輯、測試及管理轉換提示詞。
translation_last_updated: '2026-07-17T21:14:44.182Z'
source_file_mtime: '2026-07-17T11:53:39.333Z'
source_file_hash: 07b5d140803063510c7c9fecf67a2f99e3aab3040116733a3126939b0c82e16e
translation_language: zh-Hant
source_file_path: src/content/docs/docs/transform.md
translation_models:
  - z-ai/glm-5.2
---



當您希望 AI 遵循自訂指令時，請使用 **Transform** — 摘要、潤飾電子郵件、提取重點、重新格式化文字，或任何您定義的工作流程。

![轉換工作區](/images/screenshots/zh-Hant/transform.png)

## 執行現有提示詞

1. 開啟 **Transform**。
2. 從清單中選擇提示詞。
3. 若出現 **From** 語言方塊，請視需要設定語言。
4. 在 **Input** 中輸入或貼上文字。
5. 點擊 **Transform**。
6. 在 **Output** 中讀取結果。

## 載入範例提示詞

若清單為空，請在轉換工作區中點擊 **Load sample prompts**（亦可在 [設定 → 轉換](/docs/settings/#transform) 下找到）。範例為英文；載入後，請編輯提示詞並視需要使用 **Translate prompt**。

## 建立提示詞

1. 點擊 **New prompt**。
2. 點擊 **Generate prompt**。
3. 描述您希望提示詞執行的操作。
4. 選擇預設集 (Easy) 或模型 (Advanced)。
5. 檢閱草稿並點擊 **Save**。

## 編輯提示詞

編輯器位於左側；測試區域位於右側。

![轉換提示詞編輯器](/images/screenshots/zh-Hant/transform-prompt-edit.png)

主要欄位：

- **Prompt name** — 顯示於提示詞清單中
- **Prompt instructions (optional)** — 執行提示詞時的簡短提示
- **Model Role** — AI 的整體角色
- **Model Instructions (one per line)** — 遵循的規則
- **Output description** — 結果的簡短標籤（例如：已摘要）
- **Temperature (0.0 → 1.0)** — 較低則較穩定；較高則較多變
- **Ask for target language** — 執行時新增語言選擇器

輔助工具：**Generate prompt**、**Improve prompt**、**Translate prompt**（Easy 使用預設集；Advanced 使用模型清單）。

:::caution
在 **Back to Run** 之前點擊 **Save**。未儲存即返回將捨棄編輯。
:::

## 日常使用前先測試

在建立或比較提示詞時，請使用右側的測試面板搭配範例文字。

在[設定 → 轉換](/docs/settings/#transform)下大量匯出與匯入提示詞。

## 後續步驟

- [設定](/docs/settings/)
- [瀏覽歷史](/docs/history/)
- [常見問題](/docs/common-issues/)
