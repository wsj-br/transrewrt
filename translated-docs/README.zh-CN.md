---
translated_at: "2026-03-25T22:06:47.206Z"
source_hash: "7b3703140b5006a6bfb0700c530b1afcc6e9b0fc364d69c57960ab4609dccbd9"
source_mtime: 1774475429145.525
model: "qwen/qwen3-235b-a22b-2507"
---
<p align="center">
  <img src="../images/transrewrt_logo.svg" alt="Transrewrt 标志" width="120" />
</p>

<h1 align="center">Transrewrt</h1>

<p align="center">
  <a href="https://github.com/wsj-br/transrewrt/releases"><img src="https://img.shields.io/badge/version-1.0.15-blue" alt="版本"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-Apache%202.0-green" alt="许可证：Apache 2.0"></a>
  <img src="https://img.shields.io/badge/platform-Windows%20%7C%20Linux%20%7C%20Docker-lightgrey" alt="平台">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react" alt="React 19">
  <img src="https://img.shields.io/badge/Electron-41-47848F?logo=electron" alt="Electron 41">
</p>

由 AI 驱动的文本工具：支持多语言互译、多种风格重写文本，以及通过自定义提示进行文本转换 — 支持多种 AI 提供商（OpenRouter、OpenAI、Anthropic、Google Gemini、DeepSeek、Groq、Mistral、xAI 和本地 Ollama）。可作为桌面应用（Electron）或自托管的 Web 应用（Docker）运行。

- **翻译** — 支持数十种语言互译，并具备源语言自动检测功能
- **改写** — 修正语法、提升清晰度、转换为正式/非正式语气、缩短或扩展文本、转为技术性表达
- **转换** — 支持自定义 AI 提示词；可创建和管理提示，每个提示可选配目标语言
- **历史记录** — 完整的操作历史，包含输入输出文本，支持过滤和导出
- **模型与成本** — 可从已配置的任一提供商中选择模型；提供成本与用量仪表盘，包含日志及按模型/操作/日期生成的汇总信息
- **用户界面** — 多语言界面（支持 30 多种语言，含 RTL 布局）、字体设置等
- **Web 模式** — 支持多用户与管理员角色管理
- **桌面端** — 适用于 Windows 和 Linux 的 Electron 应用
- **自托管** — 提供适用于 amd64 和 arm64（兼容树莓派）的 Docker 镜像

安装完成后，请参阅 **[用户指南](USER-GUIDE.zh-CN.md)** 获取所有功能的完整使用说明。

<small>**阅读其他语言版本：** [English (UK)](../README.md) · [Português (BR)](README.pt-BR.md) · [العربية](README.ar.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [Hrvatski](README.hr.md) · [Čeština](README.cs.md) · [Nederlands](README.nl.md) · [English (US)](README.en-US.md) · [Filipino](README.tl.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [हिन्दी](README.hi.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [Basa Jawa](README.jv.md) · [한국어](README.ko.md) · [Bahasa Melayu](README.ms.md) · [فارسی](README.fa.md) · [Polski](README.pl.md) · [Português (PT)](README.pt.md) · [ਪੰਜਾਬੀ](README.pa.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [Slovenčina](README.sk.md) · [Español](README.es.md) · [Kiswahili](README.sw.md) · [Svenska](README.sv.md) · [తెలుగు](README.te.md) · [ภาษาไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Tiếng Việt](README.vi.md)</small>

<small>

> **关于界面和文档翻译的说明：** 除原始语言英语（英国）外，所有界面语言均使用 AI 模型翻译，可能存在用词不准确或错误。

</small>

<br/>

<a id="screenshots"></a>
## 截图

**语言选择器**

![语言选择器](../images/screenshots/zh-CN/language-selector.png)

**翻译**

![翻译](../images/screenshots/zh-CN/translate.png)

**转换 - 提示编辑器**

![转换 - 提示编辑器](../images/screenshots/zh-CN/transform-prompt-edit.png)

**仪表盘**

![成本仪表盘](../images/screenshots/zh-CN/dashboard-summary.png)

**历史记录**

![历史记录](../images/screenshots/zh-CN/history.png)

**设置 - 模型选择**

![设置 - 模型选择](../images/screenshots/zh-CN/settings-models.png)

<br/><br/>

<a id="table-of-contents"></a>

## 目录

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [快速开始](#quick-start)
- [安装](#installation)
  - [Windows (Electron)](#windows-electron)
  - [Linux (Electron)](#linux-electron)
  - [Docker](#docker)
- [获取 OpenRouter API 密钥](#getting-an-openrouter-api-key)
- [配置与环境](#configuration-and-environment)
- [开发与架构](#development-and-architecture)
- [发布与标签](#releases-and-tags)
- [贡献指南](#contributing)
- [免责声明](#disclaimer)
- [许可证](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="quick-start"></a>
## 快速开始

**Docker（推荐用于自托管）**

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest

OPENROUTER_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

将 `sk-or-your-key` 替换为你的 [OpenRouter API 密钥](https://openrouter.ai/keys)（或设置其他提供商的密钥；参见 [配置](#configuration-and-environment)）。打开 [http://localhost:5000](http://localhost:5000) 并在暴露服务前更改默认管理员密码。

<br/>

> ℹ️ **注意**<br/>
> 在 Docker 中，LLM 凭据通过环境变量设置，例如 `OPENROUTER_KEY`、`OPENAI_KEY`、`CEREBRAS_KEY` 等（不在 Web 界面中）。在桌面版（Electron）中，你可在 **设置 → API** 中配置密钥。

<br/>

**Windows**

从 [发布页面](https://github.com/wsj-br/transrewrt/releases) 下载最新的 `Transrewrt Setup x.y.z.exe`，运行安装程序，然后通过开始菜单或桌面快捷方式启动。在 **设置 → API** 中输入你的 API 密钥。你需要至少配置一个提供商，OpenRouter 是免费模型的常见选择。

<br/>

**Linux**

从 [发布页面](https://github.com/wsj-br/transrewrt/releases) 下载适用于你 CPU 的 `.AppImage` 文件（`x64` 用于普通 PC，`arm64` 用于许多 ARM 设备，包括树莓派 4+），然后执行：

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

在 **设置 → API** 中输入你的 API 密钥。你需要至少配置一个提供商，OpenRouter 是免费模型的常见选择。

在 Debian/Ubuntu 上，你可能需要先安装额外依赖：

```bash
sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth
```

详见 [安装 → Linux](#linux-electron)。

<br/>

> ℹ️ **注意**<br/>
> 目前不支持 macOS。Transrewrt 支持 Windows、Linux 和 Docker。

<br/>

应用启动后，请参阅 **[用户指南](USER-GUIDE.zh-CN.md)** 了解如何翻译、改写和转换文本，管理提示词，以及配置模型。

<br/><br/>

<a id="installation"></a>
## 安装

<a id="windows-electron"></a>
### Windows (Electron)

- 从 [发布页面](https://github.com/wsj-br/transrewrt/releases) 下载最新安装程序。
- 运行 `.exe` 文件并按照安装向导操作。
- 首次运行：通过开始菜单或桌面快捷方式启动应用。

<br/>

<a id="linux-electron"></a>
### Linux (Electron)

- 从 [发布页面](https://github.com/wsj-br/transrewrt/releases) 下载对应的 `.AppImage` 文件（`x64` 或 `arm64`）。
- 运行命令：在 x86_64/amd64 上执行 `chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage`，在 ARM64 上使用 `...-arm64.AppImage` 文件名。
- 额外依赖（Debian/Ubuntu）：`sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth`
- 更多信息请参见 [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)。

<br/>

<a id="docker"></a>
### Docker

- 拉取镜像：`docker pull ghcr.io/wsj-br/transrewrt:latest`
- 通过环境变量设置至少一个提供商密钥（例如 `OPENROUTER_KEY` 对应 OpenRouter）。使用 `-e` 参数或 `docker compose` / `.env` 文件传递变量，避免密钥被固化到镜像中。
- **不要**在 Web 界面中输入提供商密钥；服务器会从环境变量中读取。

示例 — 使用命名卷持久化数据（通过环境变量设置 OpenRouter 密钥）：

```bash
OPENROUTER_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

<br/>

| 选项     | 说明                                                                                                   |
| -------- | ------------------------------------------------------------------------------------------------------------- |
| 端口     | `5000`（使用 `-p 5000:5000` 映射）                                                                              |
| 卷       | 挂载 `/app/data` 以持久化配置和数据库                                                         |
| 环境变量 | `PORT`、`CONFIG_PATH` 以及 LLM 密钥（`OPENROUTER_KEY`、`OPENAI_KEY` 等）— 参见 [配置](#configuration-and-environment) |

从源码构建并运行：`docker compose up --build -d` 或 `pnpm docker:up` — 详见 [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)。

<br/><br/>

<a id="getting-an-openrouter-api-key"></a>

## 获取 OpenRouter API 密钥

Transrewrt 支持多种 AI 服务提供商。[OpenRouter](https://openrouter.ai) 是一个流行的选择，因为它通过一个密钥聚合了多个模型，并提供免费的模型。

1. 访问 [openrouter.ai](https://openrouter.ai) 注册或登录。
2. 打开 [Keys](https://openrouter.ai/keys) 页面并创建一个新密钥（可命名，也可选择性设置信用额度）。使用免费模型时无需充值。
3. **桌面版 (Electron)**：在 **设置 → API** 中粘贴密钥。**Docker 版**：设置如 `OPENROUTER_KEY` 等环境变量（参见 [快速开始](#quick-start)）。

请勿使用 OpenRouter 的 **Body Builder** 模型（[`openrouter/bodybuilder`](https://openrouter.ai/openrouter/bodybuilder)）进行翻译、重写或转换操作：该模型返回的是 JSON 请求负载，而不是这些任务所需的完成文本。详情请参阅用户指南中的 [设置 → 模型](USER-GUIDE.zh-CN.md#models)。

您也可以使用其他提供商（OpenAI、Anthropic、Google Gemini、DeepSeek、Groq、Mistral、xAI、Cerebras）或使用 [Ollama](https://ollama.com) 在本地运行模型。完整支持的提供商列表和环境变量请参见 [配置](#configuration-and-environment)。

> ⚠️ **警告**<br/>
> 如果您从其他设备、容器或服务连接 Ollama，请务必配置 Ollama 以允许外部连接（不要仅限于 localhost）。

有关配额、自带密钥（BYOK）等更多信息，请参阅 [OpenRouter 认证文档](https://openrouter.ai/docs/api/reference/authentication)。

<br/><br/>

<a id="configuration-and-environment"></a>
## 配置与环境

**配置文件位置**

| 部署方式         | 配置文件位置                                   |
| ------------------ | ------------------------------------------------- |
| Electron (Windows) | `%APPDATA%\transrewrt\`                           |
| Electron (Linux)   | `~/.config/transrewrt/`                           |
| Web / Docker       | `/app/data/config.json` （建议使用卷以持久化） |

<br/>

**环境变量**（仅限 Web / Docker；Electron 使用本地配置文件）

| 变量名           | 默认值                  | 说明 |
| ---------------- | ----------------------- | ----------- |
| `PORT`           | `5000`                  | 服务监听端口 |
| `CONFIG_PATH`    | `/app/data/config.json` | 配置文件路径 |
| `OPENROUTER_KEY` | *(空)*                  | OpenRouter API 密钥 |
| `OPENAI_KEY`     | *(空)*                  | OpenAI API 密钥 |
| `CEREBRAS_KEY`   | *(空)*                  | Cerebras API 密钥 |
| `ANTHROPIC_KEY`  | *(空)*                  | Anthropic API 密钥 |
| `GOOGLE_KEY`     | *(空)*                  | Google Gemini API 密钥 |
| `DEEPSEEK_KEY`   | *(空)*                  | DeepSeek API 密钥 |
| `GROQ_KEY`       | *(空)*                  | Groq API 密钥 |
| `MISTRAL_KEY`    | *(空)*                  | Mistral API 密钥 |
| `OLLAMA_URL`     | *(空)*                  | Ollama 基础 URL（例如 `http://host.docker.internal:11434`） |
| `XAI_KEY`        | *(空)*                  | xAI API 密钥 |

仅需配置您正在使用的提供商。模型 ID 是带命名空间的（如 `openrouter/…`、`openai/…`、`cerebras/…`、`ollama/…` 等）。

**费用显示说明**：OpenRouter 在适用时返回精确的计费成本。对于其他提供商，若提供了 OpenRouter 密钥，则费用为根据 OpenRouter 公开模型定价估算的**估计值**；若无 OpenRouter 密钥，非 OpenRouter 的费用可能显示为 `0`。请注意，这些估算值不作为发票依据。

<br/>

**数据与持久化**：使用 Docker 时，请在 `/app/data` 挂载一个卷，以确保 `config.json` 和 SQLite 数据库在容器重启后不会丢失。若未挂载卷，容器停止后所有数据将被清除。

**开发者注意**：在拉取代码更新后，如果新版本替换掉了旧的单密钥配置，请将您的 `data/config.json` 重置或合并为 `src/config-defaults/config_default.json` 中新的默认结构，特别是当您的本地文件仍在使用已被移除的字段（如 `api_key`、`api_url`、代理选项）时。

<br/>

**Web 认证设置**：

- 默认管理员账号：`admin` / `transrewrt26`。
- 用户管理路径：**设置 → 用户**。
- 重置密码命令：`docker exec <container> reset-web-password '<username>' '<new-password>'`  
  （源码方式：`pnpm run reset-web-password -- <username> <new-password>`）

<br/>

> ⚠️ **警告**<br/>
> 请立即更改任何可被网络访问的主机上的默认管理员密码。

<br/>

主要设置项（字体、模型、语言等）可在应用程序的“设置”中进行配置。

<br/><br/>

<a id="development-and-architecture"></a>

## 开发与架构

- **开发：** 环境设置、构建、测试和部署（Electron、Web、Docker）——参见 **[dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)**。
- **架构与系统概述：** 文件夹结构、技术栈、设计决策——参见 **[dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)**。

<br/><br/>

<a id="releases-and-tags"></a>
## 发布与标签

- **Git 标签** `v`*（例如 `v1.0.10`）会触发[发布工作流](.github/workflows/release.yml)。**GitHub 发布版本** 会附带 Windows 安装程序（`.exe`）以及 Linux 的 AppImage 文件（支持 **x64** 和 **arm64** 架构）。
- **Docker 镜像** 将发布到 `ghcr.io/wsj-br/transrewrt`。镜像标签与 Git 版本一致（例如 `v1.0.10` → `ghcr.io/wsj-br/transrewrt:1.0.10`），另包含 `latest` 标签。支持多架构：`linux/amd64` 和 `linux/arm64`（例如 Raspberry Pi）。

<br/><br/>

<a id="contributing"></a>
## 贡献指南

1. Fork 该仓库。
2. 创建功能分支：`git checkout -b feature/my-feature`
3. 提交您的更改，并附上清晰的提交信息。
4. 推送代码并基于 `main` 分支创建 Pull Request。

提交前请遵循现有代码风格，并在 Electron 和 Web 两种模式下测试您的更改。构建和测试说明详见 [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)。

<br/>

**报告问题：** 请在 [GitHub](https://github.com/wsj-br/transrewrt/issues) 上创建 issue，并注明您的平台（Windows / Linux / Docker）以及应用版本（可在“关于”对话框或发布页面查看）。

<br/><br/>

<a id="disclaimer"></a>
## 免责声明

产品名称和图标归其各自所有者所有，仅用于识别目的。本软件与所提及的任何品牌均无关联，亦未得到其认可。

<br/><br/>

<a id="license"></a>
## 许可证

版权所有 © 2026 Waldemar Scudeller Jr.

[Apache 许可证 2.0](LICENSE)