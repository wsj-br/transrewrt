---
title: 概述
description: Transrewrt 是什么，以及如何查找安装、指南和设置文档。
---



**Transrewrt** 是一款开源的 AI 驱动文本工具，用于：

- **Translate** — 在数十种语言之间翻译，支持自动源语言检测和术语表
- **Rewrite** — 修复语法、提高清晰度、改变语气或长度
- **Transform** — 对任何文本运行您自己的自定义 AI 提示词

它支持许多 AI 提供商（OpenRouter、OpenAI、Anthropic、Google Gemini、DeepSeek、Groq、Mistral、xAI、Cerebras、NVIDIA、Alibaba Cloud、apikey.fun、OpenAI 兼容端点，以及本地 OpenAI 兼容服务器，如 Ollama、LM Studio 或 llama.cpp）。将其作为**桌面应用**（Windows / Linux）或**自托管 Web 应用**（Docker）运行。

您的密钥，您的模型，您的主机——没有 Transrewrt 云账户。

## 窗口的组织方式

![翻译工作区](/images/screenshots/zh-Hans/translate.png)

- **Sidebar** — 主导航：翻译、重写、转换、仪表板、历史记录、设置（以及网页端已登录的用户）。
- **Toolbar** — 页面标题、**preset**（简易）或 **model**（高级）选择器、**Interface language**（地球图标；不改变翻译来源/目标），以及链接到这些文档的帮助（**?**）。预设/模型菜单还可以 **Switch to Easy/Advanced mode**（位于“打开设置”上方）。
- **Work area** — 输入和输出面板，包含计数、耗时、TPS 和可选成本。操作栏在右下角显示一个指向 GitHub Pages 站点的小型应用 **version** 链接。

默认情况下，应用在**简易**模式下运行：在设置中选择一个**预设**和一个**提供商**。在 [设置 → 常规设置](/docs/settings/#general-settings) 下切换到**高级**以获取完整模型列表，或使用工具栏预设/模型菜单中的切换选项。

## 开始使用

1. [快速开始](/docs/quick-start/) — 安装桌面版或使用 Docker 运行
2. [API 密钥](/docs/api-key/) — 连接免费的 OpenRouter 密钥或其他提供商
3. [配置](/docs/configuration/) — 环境变量、配置路径、Web 身份验证

## 指南

- [翻译文本](/docs/translate/)
- [重写文本](/docs/rewrite/)
- [使用提示词转换](/docs/transform/)
- [使用仪表板](/docs/dashboard/)
- [浏览历史记录](/docs/history/)

## 参考与帮助

- [设置](/docs/settings/)
- [常见问题](/docs/common-issues/)

[Download releases](https://github.com/wsj-br/transrewrt/releases) · [GitHub repository](https://github.com/wsj-br/transrewrt)
