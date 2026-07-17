---
title: 配置
description: 配置文件位置、Docker 环境变量、隐私模式和 Web 身份验证。
translation_last_updated: '2026-07-17T21:14:43.074Z'
source_file_mtime: '2026-07-17T14:43:44.727Z'
source_file_hash: 8c3b2c00eddcee7693d66c5f5955c2d2186e55de630886446764bc6b798f05b5
translation_language: zh-Hans
source_file_path: src/content/docs/docs/configuration.md
translation_models:
  - z-ai/glm-5.2
---



## 配置文件位置

| 部署方式 | 配置位置 |
| --- | --- |
| Electron (Windows) | `%APPDATA%\transrewrt\` |
| Electron (Linux) | `~/.config/transrewrt/` |
| Web / Docker | `/app/data/config.json`（使用卷来持久化） |

## 环境变量（Web / Docker）

Electron 使用本地配置文件。以下仅适用于 Web/Docker 服务器：

| 变量 | 描述 |
| --- | --- |
| `PORT` | 服务器监听端口（默认 `5000`） |
| `CONFIG_PATH` | 配置文件路径（默认 `/app/data/config.json`） |
| `TZ` | 服务器端时间的时区（默认 `Europe/London`） |
| `HISTORY_DISABLED` | 强制关闭执行历史（`true` / `1`） |
| `OPENROUTER_API_KEY` | OpenRouter API 密钥 |
| `OPENAI_API_KEY` | OpenAI API 密钥 |
| `CEREBRAS_API_KEY` | Cerebras API 密钥 |
| `ANTHROPIC_API_KEY` | Anthropic API 密钥 |
| `GOOGLE_API_KEY` | Google Gemini API 密钥 |
| `DEEPSEEK_API_KEY` | DeepSeek API 密钥 |
| `GROQ_API_KEY` | Groq API 密钥 |
| `MISTRAL_API_KEY` | Mistral API 密钥 |
| `LOCAL_LLM_URL` | 本地服务器的完整 OpenAI 兼容 API 基础 URL（包含路径，例如 Ollama `http://host.docker.internal:11434/v1`、LM Studio `http://host.docker.internal:1234/v1`） |
| `XAI_API_KEY` | xAI API 密钥 |
| `NVIDIA_API_KEY` | NVIDIA API 密钥 |
| `ALIBABA_API_KEY` | 阿里云 (DashScope) API 密钥 |
| `APIFUN_API_KEY` | apikey.fun API 密钥 |
| `CUSTOM_PROVIDER_NAME` | 自定义 OpenAI 兼容提供商的显示名称 |
| `CUSTOM_PROVIDER_URL` | 自定义 OpenAI 兼容提供商的基础 URL |
| `CUSTOM_PROVIDER_API_KEY` | 自定义提供商的 API 密钥 |

使用自定义端点时，所有三个 `CUSTOM_PROVIDER_*` 变量都是必需的。模型在 **高级** 模式下显示为 `{providerName}/…`。

## 隐私模式

在 web/Docker 服务器进程和/或 Electron 主进程上将 `HISTORY_DISABLED` 设置为 `true` 或 `1`，以强制关闭历史记录，而不受 `config.json` 或用户偏好的影响。这将禁用输入/输出历史记录的存储，锁定 **设置 → 常规设置 → 历史**，并阻止与历史记录相关的 API。

## 数据持久化 (Docker)

在 `/app/data` 处挂载卷，以便 `config.json` 和 SQLite 数据库在容器重启后依然保留。如果没有卷，容器停止时数据将会丢失。

## Web 身份验证

- 默认管理员：`admin` / `transrewrt26`
- 在 **设置 → 用户** 中管理用户
- 重置密码：

```bash
docker exec <container> reset-web-password '<username>' '<new-password>'
```

:::danger
在任何可从网络访问的主机上立即更改默认管理员密码。
:::

## 费用显示

OpenRouter 在适用时返回确切的计费费用。当 OpenRouter 密钥可用时，其他提供商使用 OpenRouter 公开模型定价中的 **估计** 费用。估计值不是发票。

有关设置界面（字体、模型、历史记录、备份），请参阅[设置](/docs/settings/)。
