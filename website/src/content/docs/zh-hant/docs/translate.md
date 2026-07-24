---
title: 翻譯文字
description: 在語言之間轉換文字、使用詞彙表，並以 Rephrase 改寫結果。
---



使用 **Translate** 將文字從一種語言轉換為另一種語言。

![翻譯工作區](/images/screenshots/zh-Hant/translate.png)

## 先決條件

- 至少一個供應商金鑰（桌面版）或伺服器環境金鑰（網頁版）— 請參閱 [API 金鑰](/docs/api-key/)
- 已在工具列選取 **preset**（簡易）或 **model**（進階）

## 翻譯文字

1. 在側邊欄開啟 **Translate**。
2. 在 **From** 中選擇語言（或 **Detect Language**）。
3. 在 **To** 中選擇語言。
4. 在工具列選擇預設或模型。
5. 在 **Input** 中輸入或貼上文字。
6. 點擊 **Translate**。
7. 在 **Output** 中閱讀結果，如有需要再複製。

**Top languages** 會顯示在清單最前面 — 請在 [設定 → 語言](/docs/settings/#languages) 中設定。

## 實用設定

在 [設定 → 一般設定](/docs/settings/#general-settings) 中：

- **Auto-execute on paste** — 貼上後立即執行
- **Auto-copy result to clipboard** — 成功執行後複製結果
- **Real-time translation while typing** — 輸入時即時翻譯（可能增加成本）
- **Timeout (ms)** — 即時執行前的等待時間
- **Behaviour for ENTER** — 決定 Enter 是執行工作還是插入新行

## 版面與鍵盤

- **Layout toggle** — 面板上方的按鈕可切換 **side-by-side** 與 **stacked** 的輸入/輸出版面。此選擇會套用至 Translate、Rewrite 與 Transform，並在此裝置上記住。
- **Enter** 或 **Shift+Enter** 會執行工作，視 **Behaviour for ENTER** 而定（見上文）。
- **Escape** 會清除輸入面板（或先關閉已開啟的選單或對話框）。

## 改寫翻譯

成功執行後，**Rephrase…** 與版本下拉選單會出現在 **To:** 選擇器旁：

1. **Rephrase…**（未選取）— 對相同輸入再次進行完整翻譯。最多 **five** 個版本；模型會看到先前的版本，因此用語可能不同。點擊 **Stop Translate** 可取消執行中的改寫。
2. **Word alternatives** — 選取單字或簡短詞組，然後右鍵點擊或 **Rephrase…**。挑選替代選項以取代該範圍（為配合文法可能略微擴展）。達到五個版本時，只會更新第 5 版。
3. 每次改寫或替代選項請求都會再次使用模型，可能增加成本。

## 使用詞彙表

**glossary** 是某個語言對的來源/目標術語配對。啟用後，相符的術語會傳送給模型，以保持偏好的用語一致。

1. 在輸入面板中開啟**Glossary**。
2. 照常翻譯 — 該**From** / **To**語言對的術語會自動套用。
3. 點擊**Add to Glossary**（在**From:** 旁邊）以快速擷取新詞對。
4. 在[設定 → 詞彙表](/docs/settings/#glossary)中管理所有術語。

:::note
詞彙表術語是依語言對進行比對。它們無法與作為來源的**Detect Language**一起使用。
:::

## 後續步驟

- [重寫文字](/docs/rewrite/)
- [使用提示詞轉換](/docs/transform/)
- [常見問題](/docs/common-issues/)
