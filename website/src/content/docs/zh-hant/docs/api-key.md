---
title: API 金鑰
description: 取得免費的 OpenRouter API 金鑰，並將其他 AI 供應商連接到 Transrewrt。
translation_last_updated: '2026-07-17T14:58:56.119Z'
source_file_mtime: '2026-07-17T14:58:48.569Z'
source_file_hash: 540c5b2b785355828a421293195b23c2fec98502888d607638fbb33f93970a2a
translation_language: zh-Hant
source_file_path: src/content/docs/docs/api-key.md
translation_models:
  - z-ai/glm-5.2
---



Transrewrt 需要存取至少一個 AI 供應商。您**不需要**付費模型即可開始：OpenRouter 在您新增金鑰後提供免費模型，且其他數個供應商也提供免費方案。

支援的供應商包括 [OpenRouter](https://openrouter.ai)、OpenAI、Anthropic、Google Gemini、DeepSeek、Groq、Mistral、xAI、Cerebras、NVIDIA、Alibaba Cloud、apikey.fun、任何 OpenAI 相容端點，以及本地 OpenAI 相容伺服器（Ollama、LM Studio、llama.cpp 等）。

## 簡易與進階

- **Easy** 模式（預設）：選擇對應至 **provider** 的 **preset**（Free (OpenRouter)、Standard、Advanced 或 Technical）。僅顯示具備目前供應商對應的預設設定。
- **Advanced** 模式：直接挑選模型。模型 ID 使用供應商前綴（例如 `openrouter/…`、`openai/…`、`local/…`）。

## 免費 OpenRouter 金鑰（桌面版）

1. 前往 [openrouter.ai](https://openrouter.ai) 並註冊或登入。
2. 開啟 [Keys](https://openrouter.ai/keys) 頁面並建立新金鑰（為其命名；可選擇設定額度限制）。您無需新增額度即可使用免費模型。
3. 在 Transrewrt 中，開啟 **設定 → API 設定**，將金鑰貼上至 **OpenRouter API 金鑰**，然後點擊 **測試 OpenRouter 金鑰**。

:::caution
請勿使用 OpenRouter 的 **Body Builder** 模型（`openrouter/bodybuilder`）進行翻譯、重寫或轉換 — 它會傳回 JSON 請求負載，而非完成的文字。
:::

## 其他免費選項

您也可以從 Cerebras、Google、Groq、Mistral AI 或 [NVIDIA](https://build.nvidia.com/)（OpenAI 相容 API）取得免費的 API 金鑰，或者使用 Ollama、LM Studio、llama.cpp 或其他 OpenAI 相容伺服器在本機執行模型（例如透過 Ollama 使用 `translategemma:4b`）。請在「設定」（桌面版）或 `LOCAL_LLM_URL`（Docker）中，將 Local LLM 基礎 URL 設定為完整的 API 基礎位置（包含路徑，例如 `http://localhost:11434/v1`）。

:::caution
如果您使用來自其他裝置或容器的本地 LLM 伺服器，請將其設定為允許外部連線（不僅限 localhost）。
:::

## Docker / 網頁版

在伺服器上將供應商金鑰設定為 **環境變數**（例如 `PROVIDER_API_KEY`）。使用者無法在瀏覽器 UI 中輸入金鑰。請參閱[設定](/docs/configuration/)。

## 首次執行檢查清單

1. 開啟應用程式，並視需要設定**介面語言**。
2. 新增並測試至少一個供應商金鑰（桌面版），或確認伺服器具備環境變數金鑰（網頁版）。
3. 在**簡易**模式下，於「一般設定」中選擇**供應商**；在**進階**模式下，於**設定 → 模型**下新增模型。
4. 在**翻譯**中，挑選預設設定或模型並執行簡短測試 — 請參閱[翻譯文字](/docs/translate/)。
