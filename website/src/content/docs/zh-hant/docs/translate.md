---
title: 翻譯文字
description: 在語言之間轉換文字、使用詞彙表，並使用 Rephrase 來改善結果。
translation_last_updated: '2026-07-17T21:14:44.280Z'
source_file_mtime: '2026-07-17T11:53:39.333Z'
source_file_hash: ace9ad02a7dc82bf08090597c56e7cc82324e6250beab93fc2dbeaeed8b91675
translation_language: zh-Hant
source_file_path: src/content/docs/docs/translate.md
translation_models:
  - z-ai/glm-5.2
---



使用 **Translate** 將文字從一種語言轉換為另一種語言。

![翻譯工作區](/images/screenshots/zh-Hant/translate.png)

## 先決條件

- 至少一個供應商金鑰（桌面版）或伺服器環境金鑰（網頁版）— 請參閱 [API 金鑰](/docs/api-key/)
- 在工具列中選取的 **preset**（簡易）或 **model**（進階）

## 翻譯文字

1. 在側邊欄中開啟 **Translate**。
2. 在 **From** 中選擇一種語言（或 **Detect Language**）。
3. 在 **To** 中選擇一種語言。
4. 在工具列中選擇預設設定或模型。
5. 在 **Input** 中輸入或貼上文字。
6. 點擊 **Translate**。
7. 在 **Output** 中讀取結果，然後視需要複製。

**Top languages** 會顯示在清單的最前面 — 請在 [Settings → Languages](/docs/settings/#languages) 中設定它們。

## 實用設定

在 [Settings → General Settings](/docs/settings/#general-settings) 中：

- **Auto-execute on paste** — 在您貼上時立即執行
- **Auto-copy result to clipboard** — 在成功執行後複製
- **Real-time translation while typing** — 在您輸入時執行（可能會增加成本）
- **Timeout (ms)** — 在即時執行前等待
- **Behaviour for ENTER** — 決定 Enter 是執行工作還是插入新行

## 改善翻譯

成功執行後，**Rephrase…** 和版本下拉式選單會出現在 **To:** 選擇器旁：

1. **Rephrase…**（未選取）— 對相同輸入進行另一次完整翻譯。最多 **five** 個版本；模型會看到先前的版本，因此用語可能會有所不同。點擊 **Stop Translate** 以取消執行中的重新表述。
2. **Word alternatives** — 選取單字或簡短詞組，然後按一下右鍵或 **Rephrase…**。選擇替代選項以取代該範圍（為了文法可能會稍微擴大）。在五個版本時，僅會更新版本 5。
3. 每次重新表述或替代選項請求都會再次使用模型，並可能增加成本。

## 使用詞彙表

**glossary** 是語言對的來源/目標術語對。啟用時，相符的術語會傳送給模型，以保持偏好的用語一致。

1. 在輸入面板中開啟 **Glossary**。
2. 如常翻譯 — 該 **From** / **To** 配對的術語會自動套用。
3. 點擊 **Add to Glossary**（在 **From:** 旁）以快速擷取新配對。
4. 在 [Settings → Glossary](/docs/settings/#glossary) 中管理所有術語。

:::note
詞彙表術語是依語言對進行比對。它們無法與 **偵測語言** 來源一起使用。
:::

## 後續步驟

- [重寫文字](/docs/rewrite/)
- [使用提示詞轉換](/docs/transform/)
- [常見問題](/docs/common-issues/)
