---
title: 概覽
description: Transrewrt 是什麼，以及如何尋找安裝、指南和設定文件。
translation_last_updated: '2026-07-17T21:14:43.850Z'
source_file_mtime: '2026-07-17T14:36:51.471Z'
source_file_hash: 6dfcf9cb19e3422d75511ecc06eda72e014214c3e34d95f7fec6d8a05c01896f
translation_language: zh-Hant
source_file_path: src/content/docs/docs/index.md
translation_models:
  - z-ai/glm-5.2
---



**Transrewrt** 是一款開源的 AI 驅動文字工具，用於：

- **翻譯** — 在數十種語言之間翻譯，具備自動來源偵測與詞彙表
- **重寫** — 修正文法、提升清晰度、改變語氣或長度
- **轉換** — 對任何文字執行您自訂的 AI 提示

它支援許多 AI 供應商（OpenRouter、OpenAI、Anthropic、Google Gemini、DeepSeek、Groq、Mistral、xAI、Cerebras、NVIDIA、Alibaba Cloud、apikey.fun、OpenAI 相容端點，以及本地的 OpenAI 相容伺服器，例如 Ollama、LM Studio 或 llama.cpp）。您可以將其作為**桌面應用程式**（Windows / Linux）或**自架網頁應用程式**（Docker）來執行。

您的金鑰、您的模型、您的主機 — 沒有 Transrewrt 雲端帳號。

## 視窗的組織方式

- **側邊欄** — 翻譯、改寫、轉換、儀表板、歷史記錄、設定（以及網頁版中已登入的使用者）
- **工具列** — 頁面標題、**預設**（簡易）或 **模型**（進階）選擇器，以及 **介面語言**（地球圖示；不會更改翻譯來源/目標）
- **工作區** — 輸入與輸出面板，包含計數、計時、TPS 和可選的成本

預設情況下，應用程式以 **簡易** 模式執行：在設定中挑選一個 **預設** 和一個 **供應商**。在 [設定 → 一般設定](/docs/settings/#general-settings) 下切換至 **進階** 以取得完整的模型列表。

## 開始使用

1. [快速開始](/docs/quick-start/) — 安裝桌面版或使用 Docker 執行
2. [API 金鑰](/docs/api-key/) — 連接免費的 OpenRouter 金鑰或其他供應商
3. [組態](/docs/configuration/) — 環境變數、組態路徑、網頁驗證

## 指南

- [翻譯文字](/docs/translate/)
- [改寫文字](/docs/rewrite/)
- [使用提示詞轉換](/docs/transform/)
- [使用儀表板](/docs/dashboard/)
- [瀏覽歷史記錄](/docs/history/)

## 參考與說明

- [設定](/docs/settings/)
- [常見問題](/docs/common-issues/)

[Download releases](https://github.com/wsj-br/transrewrt/releases) · [GitHub repository](https://github.com/wsj-br/transrewrt)
