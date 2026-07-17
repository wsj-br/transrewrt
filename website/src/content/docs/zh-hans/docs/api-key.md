---
title: API 密钥
description: 获取免费的 OpenRouter API 密钥，并将其他 AI 提供商连接到 Transrewrt。
---



Transrewrt 需要访问至少一个 AI 提供商。开始时你**不**需要付费模型：添加密钥后 OpenRouter 会提供免费模型，其他几家提供商也提供免费层级。

支持的提供商包括 [OpenRouter](https://openrouter.ai)、OpenAI、Anthropic、Google Gemini、DeepSeek、Groq、Mistral、xAI、Cerebras、NVIDIA、阿里云、apikey.fun、任何兼容 OpenAI 的端点，以及本地兼容 OpenAI 的服务器（Ollama、LM Studio、llama.cpp 等）。

## 简易与高级

- **简易**模式（默认）：选择映射到 **提供商** 的 **预设**（免费 (OpenRouter)、标准、高级或技术）。仅显示为当前提供商配置了映射的预设。
- **高级**模式：直接选择模型。模型 ID 使用提供商前缀（例如 `openrouter/…`、`openai/…`、`local/…`）。

## 免费 OpenRouter 密钥（桌面版）

1. 前往 [openrouter.ai](https://openrouter.ai) 注册或登录。
2. 打开 [Keys](https://openrouter.ai/keys) 页面并创建新密钥（为其命名；可选设置额度限制）。无需充值即可使用免费模型。
3. 在 Transrewrt 中，打开 **设置 → API 配置**，将密钥粘贴到 **OpenRouter API 密钥** 中，然后点击 **测试 OpenRouter 密钥**。

:::caution
请勿使用 OpenRouter 的 **Body Builder** 模型 (`openrouter/bodybuilder`) 进行翻译、重写或转换——它返回的是 JSON 请求负载，而不是完成的文本。
:::

## 其他免费选项

您还可以从 Cerebras、Google、Groq、Mistral AI 或 [NVIDIA](https://build.nvidia.com/)（兼容 OpenAI 的 API）获取免费的 API 密钥，或者使用 Ollama、LM Studio、llama.cpp 或其他兼容 OpenAI 的服务器在本地运行模型（例如通过 Ollama 运行 `translategemma:4b`）。在“设置”（桌面版）或 `LOCAL_LLM_URL`（Docker 版）中，将本地 LLM 基础 URL 设置为完整的 API 基础地址（包含路径，例如 `http://localhost:11434/v1`）。

:::caution
如果您使用来自其他设备或容器的本地 LLM 服务器，请将其配置为允许外部连接（而非仅限 localhost）。
:::

## Docker / 网页版

在服务器上将提供商密钥设置为**环境变量**（例如 `PROVIDER_API_KEY`）。用户无法在浏览器界面中输入密钥。请参阅[配置](/docs/configuration/)。

## 首次运行检查清单

1. 打开应用，如有需要，设置**界面语言**。
2. 添加并测试至少一个提供商密钥（桌面版），或确认服务器具有环境变量密钥（网页版）。
3. 在**简易**模式下，于常规设置中选择一个**提供商**；在**高级**模式下，于**设置 → 模型**下添加模型。
4. 在**翻译**页面上，选择一个预设或模型并运行简短测试 — 参见[翻译文本](/docs/translate/)。
