---
title: 概述
description: Transrewrt 是什么，以及如何查找安装、指南和设置文档。
---



**Transrewrt** 是一款开源的 AI 驱动文本工具，可用于：

- **翻译** — 支持数十种语言之间的互译，具备自动源语言检测和术语表功能
- **重写** — 修复语法、提升清晰度、改变语气或长度
- **转换** — 对任意文本运行您自定义的 AI 提示词

它支持许多 AI 提供商（OpenRouter、OpenAI、Anthropic、Google Gemini、DeepSeek、Groq、Mistral、xAI、Cerebras、NVIDIA、阿里云、apikey.fun、兼容 OpenAI 的端点，以及本地兼容 OpenAI 的服务器，如 Ollama、LM Studio 或 llama.cpp）。它可以作为**桌面应用**（Windows / Linux）或**自托管 Web 应用**（Docker）运行。

您的密钥、您的模型、您的主机——没有 Transrewrt 云端账户。

## 窗口的组织方式

- **侧边栏** — 翻译、改写、转换、仪表板、历史记录、设置（以及网页端已登录的用户）
- **工具栏** — 页面标题、**预设**（简易）或**模型**（高级）选择器，以及**界面语言**（地球图标；不会更改翻译的源语言/目标语言）
- **工作区** — 带有计数、计时、TPS 和可选成本的输入与输出面板

默认情况下，应用程序在**简易**模式下运行：在设置中选择一个**预设**和一个**提供商**。在[设置 → 常规设置](/docs/settings/#general-settings)下切换到**高级**模式以获取完整的模型列表。

## 快速上手

1. [快速开始](/docs/quick-start/) — 安装桌面版或使用 Docker 运行
2. [API 密钥](/docs/api-key/) — 连接免费的 OpenRouter 密钥或其他提供商
3. [配置](/docs/configuration/) — 环境变量、配置路径、Web 身份验证

## 指南

- [翻译文本](/docs/translate/)
- [改写文本](/docs/rewrite/)
- [使用提示词转换](/docs/transform/)
- [使用仪表板](/docs/dashboard/)
- [浏览历史记录](/docs/history/)

## 参考与帮助

- [设置](/docs/settings/)
- [常见问题](/docs/common-issues/)

[Download releases](https://github.com/wsj-br/transrewrt/releases) · [GitHub repository](https://github.com/wsj-br/transrewrt)
