---
title: 概述
description: Transrewrt 的用途說明，以及如何找到安裝指南、設定文件和相關說明文件。
---



**Transrewrt** 是一款開源 AI 文字處理工具，可用於：

- **翻譯** — 支援數十種語言，具備自動來源偵測和詞彙表功能
- **改寫** — 修正文法、改善清晰度、改變語氣或長度
- **轉換** — 在任何文字上執行自訂的 AI 提示詞

支援多種 AI 供應商（OpenRouter、OpenAI、Anthropic、Google Gemini、DeepSeek、Groq、Mistral、xAI、Cerebras、NVIDIA、阿里巴巴雲、apikey.fun、OpenAI 相容端點，以及本機 OpenAI 相容伺服器如 Ollama、LM Studio 或 llama.cpp）。可作為 **桌面應用程式**（Windows / Linux）或 **自架網頁應用程式**（Docker）執行。

您的金鑰、您的模型、您的主機 — Transrewrt 沒有雲端帳戶。

## 視窗的組織方式

![翻譯工作區](/images/screenshots/zh-Hant/translate.png)

- **Sidebar** — 主導航：翻譯、重寫、轉換、儀表板、歷史記錄、設定（以及網頁版已登入的使用者）。
- **Toolbar** — 頁面標題、**preset**（簡易）或 **model**（進階）選擇器、**Interface language**（地球圖示；不會更改翻譯來源/目標），以及連結至此文件的說明（**?**）。預設/模型選單也可以 **Switch to Easy/Advanced mode**（在「開啟設定」上方）。
- **Work area** — 輸入與輸出面板，包含計數、計時、TPS 以及可選的成本。操作列顯示一個小型應用程式 **version** 連結（右下角），指向 GitHub Pages 網站。

應用程式預設以 **簡易模式**執行：在設定中選擇 **預設集** 和 **供應商**。在 [設定 → 一般設定](/docs/settings/#general-settings) 中切換至 **進階模式** 可取得完整模型清單，或使用工具列預設集/模型選單中的開關。

## 開始使用

1. [快速入門](/docs/quick-start/) — 安裝桌面版或使用 Docker 執行
2. [API 金鑰](/docs/api-key/) — 連接免費的 OpenRouter 金鑰或其他供應商
3. [設定](/docs/configuration/) — 環境變數、設定路徑、網頁驗證

## 指南

- [翻譯文字](/docs/translate/)
- [改寫文字](/docs/rewrite/)
- [使用提示詞轉換](/docs/transform/)
- [使用儀表板](/docs/dashboard/)
- [瀏覽歷史記錄](/docs/history/)

## 參考資料與說明

- [設定](/docs/settings/)
- [常見問題](/docs/common-issues/)

[Download releases](https://github.com/wsj-br/transrewrt/releases) · [GitHub repository](https://github.com/wsj-br/transrewrt)
