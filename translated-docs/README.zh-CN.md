---
translated_at: "2026-03-24T01:07:54.560Z"
source_hash: "718acd12f14755cd75ebf7d09b86d9a1df37ebe1898710080fa8e80c1221d58b"
source_mtime: 1774311390366.3484
model: "qwen/qwen3-235b-a22b-2507"
---
<p align="center">
  <img src="../images/transrewrt_logo.svg" alt="Transrewrt 标志" width="120" />
</p>

<h1 align="center">Transrewrt</h1>

<p align="center">
  <a href="https://github.com/wsj-br/transrewrt/releases"><img src="https://img.shields.io/badge/version-1.0.14-blue" alt="版本"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-Apache%202.0-green" alt="许可证：Apache 2.0"></a>
  <img src="https://img.shields.io/badge/platform-Windows%20%7C%20Linux%20%7C%20Docker-lightgrey" alt="平台">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react" alt="React 19">
  <img src="https://img.shields.io/badge/Electron-41-47848F?logo=electron" alt="Electron 41">
</p>

AI 驱动的文本工具：支持多语言互译、多种风格重写，以及自定义提示转换——可使用多个 AI 服务商（OpenRouter、OpenAI、Anthropic、Google Gemini、DeepSeek、Groq、Mistral、xAI 和本地 Ollama）。可作为桌面应用（Electron）或自托管 Web 应用（Docker）运行。

- **翻译** —— 支持数十种语言互译，具备自动源语言检测功能
- **重写** —— 修正语法、提升清晰度、转换正式/非正式语气、缩短或扩展文本、技术化表达等
- **转换** —— 支持自定义 AI 提示；可创建和管理提示，每个提示可选目标语言
- **历史记录** —— 完整的操作历史记录，包含输入/输出文本，支持筛选和导出
- **模型与成本** —— 可从任意配置的服务商中选择模型；提供成本仪表板，通过 SQLite 日志统计，按模型/操作/天生成摘要
- **用户界面** —— 多语言界面（支持 30 多种语言，含 RTL 布局）、字体设置等
- **Web 模式** —— 支持多用户和管理员角色；API 密钥保存在服务器端，不会暴露给浏览器
- **桌面端** —— 适用于 Windows 和 Linux 的 Electron 应用
- **自托管** —— 支持 amd64 与 arm64 的 Docker 镜像（兼容树莓派）

安装完成后，请查阅 **[用户指南](USER-GUIDE.zh-CN.md)** 以全面了解所有功能。

<small>**阅读其他语言版本：** [English (UK)](README.zh-CN.md) · [Português (BR)](README.pt-BR.md) · [العربية](README.ar.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [Hrvatski](README.hr.md) · [Čeština](README.cs.md) · [Nederlands](README.nl.md) · [English (US)](README.en-US.md) · [Filipino](README.tl.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [हिन्दी](README.hi.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [Basa Jawa](README.jv.md) · [한국어](README.ko.md) · [Bahasa Melayu](README.ms.md) · [فارسی](README.fa.md) · [Polski](README.pl.md) · [Português (PT)](README.pt.md) · [ਪੰਜਾਬੀ](README.pa.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [Slovenčina](README.sk.md) · [Español](README.es.md) · [Kiswahili](README.sw.md) · [Svenska](README.sv.md) · [తెలుగు](README.te.md) · [ภาษาไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Tiếng Việt](README.vi.md)</small>

<br/>

**关于界面和文档翻译的说明：** 所有非英语（英国）的界面语言均由 AI 模型翻译，措辞可能不够准确或存在错误。

<br/><br/>

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

将 `sk-or-your-key` 替换为你的 [OpenRouter API 密钥](https://openrouter.ai/keys)（或设置其他提供商的密钥；参见[配置](#configuration-and-environment)）。打开 [http://localhost:5000](http://localhost:5000) 并在暴露服务前更改默认管理员密码。

<br/>

> ℹ️ **注意**<br/>
> 在 Docker 中，LLM 凭据通过环境变量（如 `OPENROUTER_KEY`、`OPENAI_KEY` 等）设置（不在 Web 界面中）。而在桌面端（Electron），你需在 **设置 → API** 中配置密钥。

<br/>

**Windows**

从 [Releases](https://github.com/wsj-br/transrewrt/releases) 下载最新的 `Transrewrt Setup x.y.z.exe`，运行安装程序，然后通过开始菜单或桌面快捷方式启动。在 **设置 → API** 中输入你的 API 密钥。你需要至少配置一个提供商，其中 OpenRouter 是免费模型的常见选择。

<br/>

**Linux**

从 [Releases](https://github.com/wsj-br/transrewrt/releases) 下载 `.AppImage` 文件，然后执行：

```bash
chmod +x Transrewrt-x.y.z.AppImage && ./Transrewrt-x.y.z.AppImage
```

在 **设置 → API** 中输入你的 API 密钥。你需要至少配置一个提供商，其中 OpenRouter 是免费模型的常见选择。

在 Debian/Ubuntu 上，你可能需要先安装额外依赖：

```bash
sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth
```

详情参见 [安装 → Linux](#linux-electron)。

<br/>

> ℹ️ **注意**<br/>
> 目前不支持 macOS。Transrewrt 支持 Windows、Linux 和 Docker。

<br/>

应用启动后，请参阅 **[用户指南](USER-GUIDE.zh-CN.md)** 学习如何翻译、改写和转换文本，管理提示词，以及配置模型。

<br/><br/>

<a id="installation"></a>
## 安装

<a id="windows-electron"></a>
### Windows (Electron)

- 从 [Releases](https://github.com/wsj-br/transrewrt/releases) 下载最新安装包。
- 运行 `.exe` 文件并按照安装向导操作。
- 首次运行：通过开始菜单或桌面快捷方式启动应用。

<br/>

<a id="linux-electron"></a>
### Linux (Electron)

- 从 [Releases](https://github.com/wsj-br/transrewrt/releases) 下载 `.AppImage` 文件。
- 执行：`chmod +x Transrewrt-x.y.z.AppImage && ./Transrewrt-x.y.z.AppImage`
- 额外依赖（Debian/Ubuntu）：`sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth`
- 更多信息请参见 [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)。

<br/>

<a id="docker"></a>
### Docker

- 拉取镜像：`docker pull ghcr.io/wsj-br/transrewrt:latest`
- 至少通过环境变量设置一个提供商密钥（例如 OpenRouter 使用 `OPENROUTER_KEY`）。使用 `-e` 参数或 `docker compose` / `.env` 文件传递变量，避免将敏感信息硬编码进镜像。
- 提供商密钥 **不能** 在 Web 界面中输入；服务器将从环境变量读取。

示例 — 使用命名卷持久化数据（通过环境变量传入 OpenRouter 密钥）：

```bash
OPENROUTER_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

<br/>

| 选项       | 说明                                                                                                       |
|------------|------------------------------------------------------------------------------------------------------------|
| 端口       | `5000`（使用 `-p 5000:5000` 映射）                                                                        |
| 卷         | 挂载 `/app/data` 以持久保存配置和数据库                                                                  |
| 环境变量   | `PORT`, `CONFIG_PATH`，以及 LLM 密钥（如 `OPENROUTER_KEY`, `OPENAI_KEY` 等）— 参见[配置](#configuration-and-environment) |

从源码构建并运行：使用 `docker compose up --build -d` 或 `pnpm docker:up` — 参见 [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)。

<br/><br/>

<a id="getting-an-openrouter-api-key"></a>

## 获取 OpenRouter API 密钥

Transrewrt 支持多个 AI 服务提供商。[OpenRouter](https://openrouter.ai) 是一个热门选择，因为它通过一个 API 密钥聚合了多种模型，并提供免费使用的模型。

1. 在 [openrouter.ai](https://openrouter.ai) 注册或登录。
2. 打开 [Keys](https://openrouter.ai/keys) 页面并创建一个新的密钥（可为其命名，也可选择设置信用额度）。使用免费模型时无需添加信用额度。
3. **桌面端 (Electron)**：在 **设置 → API** 中粘贴密钥。**Docker**：设置环境变量如 `OPENROUTER_KEY`（参见 [快速开始](#quick-start)）。

你也可以使用其他提供商（OpenAI、Anthropic、Google Gemini、DeepSeek、Groq、Mistral、xAI），或使用 [Ollama](https://ollama.com) 在本地运行模型。完整支持的提供商列表和环境变量请参见 [配置](#configuration-and-environment)。

关于用量限制、BYOK 等更多信息，请参见 [OpenRouter 认证文档](https://openrouter.ai/docs/api/reference/authentication)。

<br/><br/>

<a id="configuration-and-environment"></a>
## 配置与环境

**配置文件位置**

| 部署方式         | 配置文件位置                                    |
| ------------------ | ------------------------------------------------- |
| Electron (Windows) | `%APPDATA%\transrewrt\`                           |
| Electron (Linux)   | `~/.config/transrewrt/`                           |
| Web / Docker       | `/app/data/config.json`（使用卷以持久化数据）     |

<br/>

**环境变量**（仅限 Web / Docker；Electron 使用本地配置文件）

| 变量               | 默认值               | 说明 |
| ---------------- | ----------------------- | ----------- |
| `PORT`           | `5000`                  | 服务监听端口 |
| `CONFIG_PATH`    | `/app/data/config.json` | 配置文件路径 |
| `OPENROUTER_KEY` | *(空)*                  | OpenRouter API 密钥 |
| `OPENAI_KEY`     | *(空)*                  | OpenAI API 密钥 |
| `ANTHROPIC_KEY`  | *(空)*                  | Anthropic API 密钥 |
| `GOOGLE_KEY`     | *(空)*                  | Google Gemini API 密钥 |
| `DEEPSEEK_KEY`   | *(空)*                  | DeepSeek API 密钥 |
| `GROQ_KEY`       | *(空)*                  | Groq API 密钥 |
| `MISTRAL_KEY`    | *(空)*                  | Mistral API 密钥 |
| `OLLAMA_URL`     | *(空)*                  | Ollama 基础 URL（例如 `http://host.docker.internal:11434`） |
| `XAI_KEY`        | *(空)*                  | xAI API 密钥 |

仅需配置你正在使用的提供商。模型 ID 是带命名空间的（例如 `openrouter/…`, `openai/…`, `ollama/…` 等）。

**费用显示**：当适用时，OpenRouter 会返回精确的计费金额。其他提供商在配置了 OpenRouter 密钥的情况下，会使用 OpenRouter 公开的模型定价进行**估算**；若未配置 OpenRouter 密钥，非 OpenRouter 的费用可能显示为 `0`。这些估算金额并非正式账单。

<br/>

**数据与持久化**：对于 Docker 部署，应挂载一个卷至 `/app/data`，以便 `config.json` 和 SQLite 数据库在容器重启后仍保留数据。若不使用卷，容器停止时所有数据将丢失。

**开发者提示**：在拉取更改后，若旧配置仍使用已被移除的字段（如 `api_key`, `api_url`, 代理选项），请将 `data/config.json` 重置或合并为 `src/config-defaults/config_default.json` 中的新默认结构。

<br/>

**Web 认证**：

- 默认管理员账户：`admin` / `transrewrt26`
- 用户管理：在 **设置 → 用户** 中操作
- 重置密码：`docker exec <容器> reset-web-password '<用户名>' '<新密码>'`
  （源码方式：`pnpm run reset-web-password -- <用户名> <新密码>`）

<br/>

> ⚠️ **警告**<br/>
> 在任何可被网络访问的主机上，必须立即更改默认管理员密码。

<br/>

主要设置项（字体、模型、语言等）可在应用内的“设置”中进行配置。

<br/><br/>

<a id="development-and-architecture"></a>
## 开发与架构

- **开发指南**：搭建、构建、测试与部署（Electron、Web、Docker）——详见 **[dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)**。
- **架构与系统概述**：目录结构、技术栈、设计决策——详见 **[dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)**。

<br/><br/>

<a id="releases-and-tags"></a>

## 发布与标签

- **Git 标签** `v`*（例如 `v1.0.10`）会触发[发布工作流](.github/workflows/release.yml)。**GitHub 发布版本**会附带 Windows 安装程序（`.exe`）和 Linux AppImage。
- **Docker 镜像**将发布到 `ghcr.io/wsj-br/transrewrt`。镜像标签与 Git 版本一致（例如 `v1.0.10` → `ghcr.io/wsj-br/transrewrt:1.0.10`），并包含 `latest` 标签。支持多架构：`linux/amd64` 和 `linux/arm64`（例如 Raspberry Pi）。

<br/><br/>

<a id="contributing"></a>
## 贡献指南

1. Fork 该仓库。
2. 创建功能分支：`git checkout -b feature/my-feature`
3. 使用清晰的提交信息提交更改。
4. 推送到远程并基于 `main` 分支创建 Pull Request。

请遵循现有的代码风格，并在提交前在 Electron 和 Web 模式下测试你的更改。构建和测试说明请参见 [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)。

<br/>

**报告问题**：请在 [GitHub](https://github.com/wsj-br/transrewrt/issues) 上提交 issue。请注明你的平台（Windows / Linux / Docker）以及应用程序版本（可在“关于”对话框或发布页面查看）。

<br/><br/>

<a id="disclaimer"></a>
## 免责声明

产品名称和图标归各自所有者所有，仅用于标识目的。本软件与所提及的任何品牌均无关联，亦未获得其认可。

<br/><br/>

<a id="license"></a>
## 许可证

版权所有 © 2026 Waldemar Scudeller Jr.

[Apache 许可证 2.0](LICENSE)