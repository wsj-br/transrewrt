---
title: 配置
description: 配置文件位置、Docker 环境变量、隐私模式和 Web 身份验证。
---



## 配置文件位置

| 部署方式 | 数据文件夹 |
| --- | --- |
| Electron (Windows) | `%APPDATA%\transrewrt\` |
| Electron (Linux) | `~/.config/transrewrt/` |
| Web / Docker | `/app/data/`（使用卷进行持久化） |

数据文件夹包含所有值得备份的内容：

- `config.json` — 设置和（桌面版）加密的 API 密钥
- `state.json` — 上次使用的语言、模型和视图状态
- `presets.json` — 缓存的 Easy-mode 预设目录
- `transrewrt.db` — 包含历史记录、成本、提示词、术语表和（Web 版）用户的 SQLite 数据库

你也可以从应用中创建便携备份 ZIP — 参见[设置 → 常规设置](/docs/settings/#general-settings)。

## 环境变量（Web / Docker）

Electron 使用本地配置文件。以下仅适用于 Web/Docker 服务器：

| 变量 | 说明 |
| --- | --- |
| `PORT` | 服务器监听端口（默认 `5000`） |
| `CONFIG_PATH` | 配置文件路径（默认 `/app/data/config.json`） |
| `TZ` | 服务器端时间的时区（默认 `Europe/London`） |
| `HISTORY_DISABLED` | 强制关闭执行历史记录（`true` / `1`） |
| `OPENROUTER_API_KEY` | OpenRouter API 密钥 |
| `OPENAI_API_KEY` | OpenAI API 密钥 |
| `CEREBRAS_API_KEY` | Cerebras API 密钥 |
| `ANTHROPIC_API_KEY` | Anthropic API 密钥 |
| `GOOGLE_API_KEY` | Google Gemini API 密钥 |
| `DEEPSEEK_API_KEY` | DeepSeek API 密钥 |
| `GROQ_API_KEY` | Groq API 密钥 |
| `MISTRAL_API_KEY` | Mistral API 密钥 |
| `LOCAL_LLM_URL` | 本地服务器的完整 OpenAI 兼容 API 基础 URL，包含路径（例如 Ollama `http://host.docker.internal:11434/v1`、LM Studio `http://host.docker.internal:1234/v1`） |
| `XAI_API_KEY` | xAI API 密钥 |
| `NVIDIA_API_KEY` | NVIDIA API 密钥 |
| `ALIBABA_API_KEY` | 阿里云（DashScope）API 密钥 |
| `APIFUN_API_KEY` | apikey.fun API 密钥 |
| `CUSTOM_PROVIDER_NAME` | 自定义 OpenAI 兼容提供商的显示名称 |
| `CUSTOM_PROVIDER_URL` | 自定义 OpenAI 兼容提供商的 Base URL |
| `CUSTOM_PROVIDER_API_KEY` | 自定义提供商的 API 密钥 |

使用自定义端点时，需要全部三个 `CUSTOM_PROVIDER_*` 变量。模型在 **高级** 模式下显示为 `{providerName}/…`。

## 环境变量（桌面端）

| 变量 | 描述 |
| --- | --- |
| `TRANSREWRT_DISABLE_GPU` | 设置为 `1` 可禁用硬件加速（在 Linux 上 Chromium 输出 GPU/EGL 错误时很有用）|
| `HISTORY_DISABLED` | 强制关闭执行历史（`true` / `1`）— 请参阅[隐私模式](#privacy-mode) |

## 隐私模式

在 Web/Docker 服务器进程和/或 Electron 主进程上将 `HISTORY_DISABLED` 设置为 `true` 或 `1`，可强制关闭历史记录，无论 `config.json` 或用户偏好如何。此操作会禁用输入/输出历史记录存储、锁定 **设置 → 通用设置 → 历史记录**，并阻止历史记录相关 API。

## 数据持久化（Docker）

在 `/app/data` 挂载卷，以便配置文件和 SQLite 数据库（请参阅[配置文件位置](#config-file-locations)）在容器重启后保留。若无卷，容器停止时数据将丢失。

## Web 身份验证

- 默认管理员：`admin` / `transrewrt26`
- 在 **设置 → 用户** 中管理用户、会话超时和会话撤销 — 参见 [设置](/docs/settings/#users)
- 每个已登录用户可以从侧边栏底部的用户菜单更改自己的密码或退出登录
- 重置密码：

```bash
docker exec <container> reset-web-password '<username>' '<new-password>'
```

:::danger
在任何可从网络访问的主机上立即更改默认管理员密码。
:::

:::caution
服务器使用纯 HTTP 通信。如果将其暴露在 localhost 或受信任的网络之外，请将其置于具有 HTTPS 的反向代理（例如 Caddy、nginx 或 Traefik）之后，以确保密码和文本不会以明文形式发送。
:::

## 费用显示

OpenRouter 在适用时返回确切的计费费用。当有可用的 OpenRouter 密钥时，其他提供商使用来自 OpenRouter 公开模型定价的 **估算** 费用。估算值不是发票。

有关设置 UI（字体、模型、历史记录、备份），请参见 [设置](/docs/settings/)。
