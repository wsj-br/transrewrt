---
translated_at: "2026-03-26T00:26:45.152Z"
source_hash: "d5d19d18eadc9060d8db2f32f47dc8174ee783feea992030f3c686debc714a88"
source_mtime: 1774482559451.2136
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

由AI驱动的文本工具：支持多语言互译、多种风格重写，以及通过自定义提示进行文本转换——使用多个AI提供商（OpenRouter、OpenAI、Anthropic、Google Gemini、DeepSeek、Groq、Mistral、xAI 和本地 Ollama）。可作为桌面应用（Electron）或自托管Web应用（Docker）运行。

- **翻译** —— 支持数十种语言之间的互译，并具备自动源语言检测功能
- **重写** —— 修正语法、提升表达清晰度、正式/非正式风格转换、缩短或扩写文本、技术性改写
- **转换** —— 自定义AI提示；创建和管理提示，每个提示可选目标语言
- **历史记录** —— 完整的操作历史，包含输入/输出文本，支持筛选与导出
- **模型与成本** —— 可从任意配置的提供商中选择模型；提供成本与使用情况仪表板，含日志及按模型/操作/日期的统计摘要
- **用户界面** —— 多语言界面（30多种语言，支持从右至左显示），字体设置等
- **Web模式** —— 支持多用户访问及管理员角色管理
- **桌面版** —— 适用于 Windows 和 Linux 的 Electron 应用
- **自托管** —— 提供适用于 amd64 与 arm64 架构的 Docker 镜像（支持树莓派）

安装后，请查看 **[用户指南](USER-GUIDE.zh-CN.md)** 以了解所有功能的完整说明。

<small>**阅读其他语言版本：** </small>
<small id="lang-list"> [English (UK)](../README.md) · [Português (BR)](README.pt-BR.md) · [العربية](README.ar.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [Hrvatski](README.hr.md) · [Čeština](README.cs.md) · [Nederlands](README.nl.md) · [English (US)](README.en-US.md) · [Filipino](README.tl.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [हिन्दी](README.hi.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [Basa Jawa](README.jv.md) · [한국어](README.ko.md) · [Bahasa Melayu](README.ms.md) · [فارسی](README.fa.md) · [Polski](README.pl.md) · [Português (PT)](README.pt.md) · [ਪੰਜਾਬੀ](README.pa.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [Slovenčina](README.sk.md) · [Español](README.es.md) · [Kiswahili](README.sw.md) · [Svenska](README.sv.md) · [తెలుగు](README.te.md) · [ภาษาไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Tiếng Việt](README.vi.md)</small>

<small>

> **关于界面和文档翻译的说明**：除原始语言英语（英国）外，所有界面语言均通过AI模型翻译；文字可能不够准确或存在错误。

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

**仪表板**

![成本仪表板](../images/screenshots/zh-CN/dashboard-summary.png)

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
- [版本发布与标签](#releases-and-tags)
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

将 `sk-or-your-key` 替换为你的 [OpenRouter API 密钥](https://openrouter.ai/keys)（也可以设置其他供应商的密钥；参见[配置](#configuration-and-environment)）。打开 [http://localhost:5000](http://localhost:5000)，并在对外暴露服务之前更改默认管理员密码。

<br/>

> ℹ️ **注意**<br/>
> 在 Docker 中，LLM 凭据需通过环境变量设置，如 `OPENROUTER_KEY`、`OPENAI_KEY`、`CEREBRAS_KEY` 等（**不在 Web UI 中设置**）。桌面版（Electron）则在 **设置 → API** 中配置密钥。

<br/>

**Windows**

从 [发布页面](https://github.com/wsj-br/transrewrt/releases) 下载最新的 `Transrewrt Setup x.y.z.exe`，运行安装程序，然后通过开始菜单或桌面快捷方式启动应用。在 **设置 → API** 中输入你的 API 密钥。你需要至少配置一个供应商，OpenRouter 是免费模型的常用选择。

<br/>

**Linux**

从 [发布页面](https://github.com/wsj-br/transrewrt/releases) 下载适用于你 CPU 的 `.AppImage` 文件（普通 PC 选 `x64`，Raspberry Pi 4+ 等 ARM 设备选 `arm64`），然后执行：

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

在 **设置 → API** 中输入你的 API 密钥。你需要至少配置一个供应商，OpenRouter 是免费模型的常用选择。

在 Debian/Ubuntu 系统上，你可能需要先安装额外依赖：

```bash
sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth
```

详细信息请参见 [安装 → Linux](#linux-electron)。

<br/>

> ℹ️ **注意**<br/>
> 目前不支持 macOS。Transrewrt 支持 Windows、Linux 和 Docker。

<br/>

应用启动后，请参阅 **[用户指南](USER-GUIDE.zh-CN.md)** 以了解如何翻译、重写和转换文本，管理提示词，以及配置模型。

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

- 从 [发布页面](https://github.com/wsj-br/transrewrt/releases) 下载匹配的 `.AppImage` 文件（`x64` 或 `arm64`）。
- 运行命令：在 x86_64/amd64 上使用 `chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage`，在 ARM64 上使用对应的 `...-arm64.AppImage` 文件名。
- 额外依赖（Debian/Ubuntu）：`sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth`
- 更多信息请参见 [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)。

<br/>

<a id="docker"></a>
### Docker

- 拉取镜像：`docker pull ghcr.io/wsj-br/transrewrt:latest`
- 至少通过环境变量设置一个供应商密钥（例如使用 `OPENROUTER_KEY` 设置 OpenRouter）。使用 `-e` 参数或 `docker compose` / `.env` 文件传入变量，避免密钥被固化到镜像中。
- **不可**在 Web UI 中输入供应商密钥；服务器将从环境变量中读取。

示例 —— 使用命名卷持久化数据（通过环境变量设置 OpenRouter 密钥）：

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
| 端口     | `5000`（使用 `-p 5000:5000` 映射）                                                                             |
| 卷       | 挂载 `/app/data` 以持久保存配置和数据库                                                       |
| 环境变量 | `PORT`, `CONFIG_PATH` 以及 LLM 密钥（`OPENROUTER_KEY`, `OPENAI_KEY`, …）— 参见 [配置](#configuration-and-environment) |

从源码构建并运行：使用 `docker compose up --build -d` 或 `pnpm docker:up` — 详情请见 [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)。

<br/><br/>

<a id="getting-an-openrouter-api-key"></a>

## 获取 OpenRouter API 密钥

Transrewrt 支持多种 AI 服务提供商。[OpenRouter](https://openrouter.ai) 是一个流行的选择，因为它在一个 API 密钥下聚合了多个模型，并提供免费可用的模型。

1. 在 [openrouter.ai](https://openrouter.ai) 注册或登录。
2. 打开 [Keys](https://openrouter.ai/keys) 页面并创建一个新的密钥（为其命名，可选择性设置信用额度）。即使不添加信用余额，也可以使用免费模型。
3. **桌面版 (Electron):** 在 **设置 → API** 中粘贴密钥。**Docker 版:** 设置如 `OPENROUTER_KEY` 的环境变量（参见 [快速开始](#quick-start)）。

请勿使用 OpenRouter 的 **Body Builder** 模型（[`openrouter/bodybuilder`](https://openrouter.ai/openrouter/bodybuilder)）进行翻译、改写或转换操作：该模型返回的是 JSON 请求负载，而不是这些任务所需的完整文本结果。详情请参阅用户指南中的 [设置 → 模型](USER-GUIDE.zh-CN.md#models)。

您还可以使用其他提供商（如 OpenAI、Anthropic、Google Gemini、DeepSeek、Groq、Mistral、xAI、Cerebras），或通过 [Ollama](https://ollama.com) 在本地运行模型。完整支持的提供商列表及环境变量请参见 [配置](#configuration-and-environment) 部分。

> ⚠️ **警告**<br/>
> 如果您从其他设备、容器或服务中使用 Ollama，请务必配置 Ollama 以允许外部连接（不能仅限本地回环地址）。

有关配额限制、自带密钥（BYOK）等更多信息，请参见 [OpenRouter 认证文档](https://openrouter.ai/docs/api/reference/authentication)。

<br/><br/>

<a id="configuration-and-environment"></a>
## 配置与环境

**配置文件位置**

| 部署方式         | 配置文件位置                                   |
| ------------------ | ------------------------------------------------- |
| Electron (Windows) | `%APPDATA%\transrewrt\`                           |
| Electron (Linux)   | `~/.config/transrewrt/`                           |
| Web / Docker       | `/app/data/config.json` （建议使用卷以持久化存储） |

<br/>

**环境变量**（仅限 Web / Docker；Electron 使用本地配置文件）

| 变量名称         | 默认值                 | 说明 |
| ---------------- | ----------------------- | ----------- |
| `PORT`           | `5000`                  | 服务监听端口 |
| `CONFIG_PATH`    | `/app/data/config.json` | 配置文件路径 |
| `OPENROUTER_KEY` | *(空)*               | OpenRouter API 密钥 |
| `OPENAI_KEY`     | *(空)*               | OpenAI API 密钥 |
| `CEREBRAS_KEY`   | *(空)*               | Cerebras API 密钥 |
| `ANTHROPIC_KEY`  | *(空)*               | Anthropic API 密钥 |
| `GOOGLE_KEY`     | *(空)*               | Google Gemini API 密钥 |
| `DEEPSEEK_KEY`   | *(空)*               | DeepSeek API 密钥 |
| `GROQ_KEY`       | *(空)*               | Groq API 密钥 |
| `MISTRAL_KEY`    | *(空)*               | Mistral API 密钥 |
| `OLLAMA_URL`     | *(空)*               | Ollama 基础 URL（例如 `http://host.docker.internal:11434`） |
| `XAI_KEY`        | *(空)*               | xAI API 密钥 |

请仅配置您使用的提供商。模型 ID 采用命名空间形式（如 `openrouter/…`、`openai/…`、`cerebras/…`、`ollama/…` 等）。

**费用显示说明：** OpenRouter 在适用时会返回实际计费金额。其他提供商在您提供了 OpenRouter 密钥的情况下，将使用 OpenRouter 公开的模型定价来**估算**费用；若未提供，则非 OpenRouter 的费用可能显示为 `0`。请注意，这些估算值并非正式账单。

<br/>

**数据与持久化：** 对于 Docker 部署，请在 `/app/data` 目录挂载一个卷，以便 `config.json` 和 SQLite 数据库在容器重启后仍能保留。如果不使用卷，容器停止时所有数据将丢失。

**开发者注意：** 如果您拉取了取代旧版单密钥配置的更新代码，请检查您的 `data/config.json` 是否仍包含已移除的字段（如 `api_key`、`api_url`、代理选项），如有，则应将其重置或合并为 `src/config-defaults/config_default.json` 中定义的新默认结构。

<br/>

**Web 认证：**

- 默认管理员账号：`admin` / `transrewrt26`。
- 用户可在 **设置 → 用户** 中进行管理。
- 重置密码命令：`docker exec <container> reset-web-password '<username>' '<new-password>'`  
  （从源码运行：`pnpm run reset-web-password -- <username> <new-password>`）

<br/>

> ⚠️ **警告**<br/>
> 请立即更改任何可从网络访问的主机上的默认管理员密码。

<br/>

主要设置项（字体、模型、语言等）可在应用程序的“设置”中进行配置。

<br/><br/>

<a id="development-and-architecture"></a>

## 开发与架构

- **开发：** 环境设置、构建、测试和部署（Electron、Web、Docker）— 详见 **[dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)**。
- **架构与系统概述：** 文件夹结构、技术栈、设计决策 — 详见 **[dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)**。

<br/><br/>

<a id="releases-and-tags"></a>
## 发布与标签

- **Git 标签** `v`*（例如 `v1.0.10`）将触发 [发布工作流](.github/workflows/release.yml)。**GitHub 发布版本** 会附带 Windows 安装程序（`.exe`）以及 Linux AppImage（**x64** 和 **arm64**）。
- **Docker 镜像** 被发布到 `ghcr.io/wsj-br/transrewrt`。镜像标签与 Git 版本一致（例如 `v1.0.10` → `ghcr.io/wsj-br/transrewrt:1.0.10`），并包含 `latest` 标签。支持多架构：`linux/amd64` 和 `linux/arm64`（例如树莓派）。

<br/><br/>

<a id="contributing"></a>
## 贡献指南

1. 克隆仓库。
2. 创建功能分支：`git checkout -b feature/my-feature`
3. 使用清晰的提交信息提交更改。
4. 推送代码并基于 `main` 分支创建 Pull Request。

提交前请遵循现有代码风格，并在 Electron 和 Web 模式下测试您的更改。构建和测试说明请参见 [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)。

<br/>

**报告问题：** 请在 [GitHub](https://github.com/wsj-br/transrewrt/issues) 上创建问题。请注明您的平台（Windows / Linux / Docker）和应用程序版本（可在“关于”对话框或发布页面查看）。

<br/><br/>

<a id="disclaimer"></a>
## 免责声明

产品名称和图标归其各自所有者所有，仅用于识别目的。本软件与所提及的任何品牌均无关联，亦未获得其认可。

<br/><br/>

<a id="license"></a>
## 许可证

版权所有 © 2026 Waldemar Scudeller Jr.

[Apache 许可证 2.0](LICENSE)