---
translated_at: "2026-03-29T01:54:32.549Z"
source_hash: "f26a12ca888393b55a064bfcf8fe2b74a425c383f1ad6f7ecbb32b67b7c9f897"
source_mtime: "2026-03-29T01:54:18.655Z"
model: "qwen/qwen3-235b-a22b-2507"
---
<p align="center">
  <img src="../images/transrewrt_banner.png" alt="Transrewrt 横幅"  />
</p>

<p align="center">
  <a href="https://github.com/wsj-br/transrewrt/releases"><img src="https://img.shields.io/badge/version-1.1.1-blue" alt="版本"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-Apache%202.0-green" alt="许可证: Apache 2.0"></a>
  <img src="https://img.shields.io/badge/platform-Windows%20%7C%20Linux%20%7C%20Docker-lightgrey" alt="平台">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react" alt="React 19">
  <img src="https://img.shields.io/badge/Electron-41-47848F?logo=electron" alt="Electron 41">
</p>

AI 驱动的文本工具：支持多语言互译、多种风格重写，以及通过自定义提示词进行文本转换——使用多个 AI 提供商（OpenRouter、OpenAI、Anthropic、Google Gemini、DeepSeek、Groq、Mistral、xAI 和本地 Ollama）。可作为桌面应用（Electron）或自托管网页应用（Docker）运行。

- **翻译** — 支持数十种语言互译，并自动检测源语言
- **改写** — 修正语法、提升表达清晰度、调整正式/非正式语气、缩短或扩展文本、技术化改写
- **转换** — 自定义AI提示；可创建和管理提示，每个提示可单独设置目标语言
- **历史记录** — 完整的执行历史，包含输入/输出文本、筛选功能及导出选项
- **模型与成本** — 从任意配置的提供商中选择模型；提供成本与使用情况仪表板，支持按模型/操作/天查看日志和摘要
- **用户界面** — 多语言界面（支持30多种语言，含RTL布局）、字体设置等
- **Web模式** — 支持多用户使用，具备管理员角色管理功能
- **桌面版** — 适用于Windows和Linux的Electron应用程序
- **自托管** — 支持amd64与arm64架构的Docker镜像（兼容树莓派）

安装完成后，请查看 **[用户指南](USER-GUIDE.zh-CN.md)** 以全面了解所有功能。

<small>**阅读其他语言版本：** </small>

<small id="lang-list"> [English (UK)](../README.md) · [Português (BR)](README.pt-BR.md) · [العربية](README.ar.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [Hrvatski](README.hr.md) · [Čeština](README.cs.md) · [Nederlands](README.nl.md) · [English (US)](README.en-US.md) · [Filipino](README.tl.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [हिन्दी](README.hi.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [Basa Jawa](README.jv.md) · [한국어](README.ko.md) · [Bahasa Melayu](README.ms.md) · [فارسی](README.fa.md) · [Polski](README.pl.md) · [Português (PT)](README.pt.md) · [ਪੰਜਾਬੀ](README.pa.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [Slovenčina](README.sk.md) · [Español](README.es.md) · [Kiswahili](README.sw.md) · [Svenska](README.sv.md) · [తెలుగు](README.te.md) · [ภาษาไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Tiếng Việt](README.vi.md)</small>

<small>

> **关于界面和文档翻译的说明：** 除原始英文（英国）外，所有界面语言均使用人工智能模型进行翻译；
> 用词可能不够准确或包含错误。

</small>

<br/>

<a id="screenshots"></a>

## 截图

**语言选择器**

![语言选择器](../images/screenshots/zh-CN/language-selector.png)

**翻译**

![翻译](../images/screenshots/zh-CN/translate.png)

**转换 - 提示词编辑器**

![转换 - 提示词编辑器](../images/screenshots/zh-CN/transform-prompt-edit.png)

**仪表板**

![仪表板概览 — 使用情况](../images/screenshots/zh-CN/dashboard-summary.png)

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
  - [配置时区](#configuring-the-timezone)
- [获取 OpenRouter API 密钥](#getting-an-openrouter-api-key)
- [配置和环境](#configuration-and-environment)
- [开发与架构](#development-and-architecture)
- [报告问题](#reporting-issues)
- [免责声明](#disclaimer)
- [许可证](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="quick-start"></a>

## 快速开始

**Docker（推荐用于自托管）**

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest

OPENROUTER_API_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_API_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

将 `sk-or-your-key` 替换为你的 [OpenRouter API 密钥](https://openrouter.ai/keys)（或设置其他提供商的密钥；参见 [配置](#configuration-and-environment)）。打开 [http://localhost:5000](http://localhost:5000)，并在暴露服务前更改默认管理员密码。

<br/>

> ℹ️ **注意**<br/>
> 在 Docker 中，大语言模型（LLM）的凭证需通过环境变量设置，例如 `OPENROUTER_API_KEY`、`OPENAI_API_KEY`、`CEREBRAS_API_KEY` 等（不在网页界面中设置）。在桌面端（Electron）可通过 **设置 → API** 配置密钥。

<br/>

**Windows**

从 [Releases](https://github.com/wsj-br/transrewrt/releases) 下载最新的 `Transrewrt Setup x.y.z.exe`，运行安装程序，然后通过开始菜单或桌面快捷方式启动。在 **设置 → API** 中输入你的 API 密钥。你需要至少配置一个提供商，OpenRouter 常用于免费模型。

<br/>

**Linux**

从 [Releases](https://github.com/wsj-br/transrewrt/releases) 下载适用于你 CPU 的 `.AppImage` 文件（普通 PC 选择 `x64`，许多 ARM 设备包括树莓派 4 及以上型号选择 `arm64`），然后执行：

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

在 **设置 → API** 中输入你的 API 密钥。你需要至少配置一个提供商，OpenRouter 常用于免费模型。

在 Debian/Ubuntu 系统上，你可能需要先安装额外的依赖：

```bash
sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth
```

详见 [安装 → Linux](#linux-electron)。

<br/>

> ℹ️ **注意**<br/>

> 目前不支持 macOS 系统。Transrewrt 可用于 Windows、Linux 和 Docker。

<br/>

应用运行后，请参阅 **[用户指南](USER-GUIDE.zh-CN.md)**，了解如何翻译、重写和转换文本，管理提示词以及配置模型。

<br/><br/>

<a id="installation"></a>

## 安装

<a id="windows-electron"></a>

### Windows（Electron）

- 从 [发布页面](https://github.com/wsj-br/transrewrt/releases) 下载最新的安装程序。
- 运行 `.exe` 文件并按照安装向导操作。
- 首次运行：从开始菜单或桌面快捷方式启动应用程序。

<br/>

> ℹ️ **注意**<br/>
> Windows 可能会显示以下安全警告之一（对于未签名或独立开发的应用程序属于正常情况）：
>   - **用户账户控制 (UAC)**：“是否允许此未知发布者的应用对您的设备进行更改？” → 点击 **是**。
>   - **Microsoft Defender SmartScreen**：“Windows 已保护您的电脑” → 点击 **更多详细信息** → **仍要运行**。
>
> 出现此提示是因为该应用未经过 Microsoft 或大型发布商签名——只要您从我们官方的 GitHub 发布页面下载，应用就是安全的
> （请核对下方的 SHA256 校验和）。

<br/>

<a id="linux-electron"></a>

### Linux（Electron）

- 从 [ Releases ](https://github.com/wsj-br/transrewrt/releases) 下载匹配的 `.AppImage` 文件（`x64` 或 `arm64`）。
- 运行命令：在 x86_64/amd64 上执行 `chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage`，在 ARM64 上则使用 `...-arm64.AppImage` 文件名。
- 额外依赖项（Debian/Ubuntu）：`sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth`
- 更多信息请参见 [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)。

<br/>

<a id="docker"></a>

### Docker

- 拉取镜像：`docker pull ghcr.io/wsj-br/transrewrt:latest`
- 通过环境变量设置至少一个提供商密钥（例如，OpenRouter 使用 `OPENROUTER_API_KEY`）。使用 `-e` 参数或通过 `docker compose` / `.env` 文件传递变量，以避免将密钥硬编码进镜像。
- **不要**在 Web 界面中输入提供商密钥；服务器会直接从环境变量读取。

示例——使用命名卷实现数据持久化（通过环境变量设置 OpenRouter 密钥）：

```bash
OPENROUTER_API_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_API_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

或者，如果您更倾向于使用 Docker Compose，请使用以下命令：

```
# 下载 compose 文件
wget https://github.com/wsj-br/transrewrt/raw/refs/heads/master/production.yml -O transrewrt.yml
# 编辑文件以添加 API_KEYS 并调整时区 (TZ)
vi transrewrt.yml
# 启动容器
docker compose -f transrewrt.yml up -d

请参阅[配置](#configuration-and-environment)了解所有环境变量，例如 `PORT`、`CONFIG_PATH`、`TZ` 以及大语言模型密钥（`OPENROUTER_API_KEY`、`OPENAI_API_KEY` 等）。

<a id="configuring-the-timezone"></a>

### 配置时区

应用程序的用户界面日期和时间遵循**浏览器**的本地环境和时区。对于**服务器端**行为（如日志记录等），容器使用 `TZ` 环境变量。默认值为 `TZ=Europe/London`。

若要使用其他时区，请在你的 Compose 文件中设置 `TZ`，例如：

```yaml
environment:
  - TZ=America/Sao_Paulo
```

或者在运行容器时传入（Docker）：

```bash
--env TZ=America/Sao_Paulo
```

在许多 Linux 主机上，你可以使用以下命令复制系统时区名称：

```bash
echo TZ=\"$(</etc/timezone)\"
```

有效的时区名称列表可在 [tz 数据库](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones)（Wikipedia）中找到。

<br/><br/>

<a id="getting-an-openrouter-api-key"></a>

## 获取 OpenRouter API 密钥

Transrewrt 支持多种 AI 提供商。[OpenRouter](https://openrouter.ai) 是一个热门选择，因为它通过一个密钥聚合了多种模型，并提供免费模型。

1. 在 [openrouter.ai](https://openrouter.ai) 上注册或登录。
2. 打开 [Keys](https://openrouter.ai/keys) 页面，创建一个新密钥（为其命名，可选地设置信用额度）。即使不添加信用额度，也可以使用免费模型。
3. **桌面版 (Electron)**：将密钥粘贴至 **设置 → API** 中。**Docker 版**：设置环境变量，例如 `OPENROUTER_API_KEY`（参见 [快速开始](#quick-start)）。

请勿使用 OpenRouter 的 **Body Builder** 模型（[`openrouter/bodybuilder`](https://openrouter.ai/openrouter/bodybuilder)）来进行翻译、改写或转换操作：该模型返回的是 JSON 请求负载，而不是这些任务所需的完整文本。详见用户指南中的 [设置 → 模型](USER-GUIDE.zh-CN.md#models)。

您也可以使用其他提供商（OpenAI、Anthropic、Google Gemini、DeepSeek、Groq、Mistral、xAI、Cerebras）或使用 [Ollama](https://ollama.com) 在本地运行模型。有关支持的提供商和环境变量的完整列表，请参阅[配置](#configuration-and-environment)。

> ⚠️ **警告**<br/>
> 如果您从其他设备、容器或服务中使用 Ollama，请记得配置 Ollama 以允许外部连接（不要仅限于本地主机）。

有关限制、自带密钥（BYOK）等更多信息，请参阅 [OpenRouter 身份验证](https://openrouter.ai/docs/api/reference/authentication)。

<br/><br/>

<a id="configuration-and-environment"></a>

## 配置和环境

**配置文件位置**

| 部署方式         | 配置文件位置                                      |
| ---------------- | ------------------------------------------------- |
| Electron (Windows) | `%APPDATA%\transrewrt\`                           |
| Electron (Linux)   | `~/.config/transrewrt/`                           |
| 网页版 / Docker  | `/app/data/config.json`（使用卷来持久化存储）     |

<br/>

**环境变量**（仅限网页版/Docker 版；Electron 使用本地配置文件）

| 变量 | 默认值 | 说明 |
| ---------------- | ----------------------- | ----------- |
| `PORT`           | `5000`                  | 服务器监听端口 |
| `CONFIG_PATH`    | `/app/data/config.json` | 配置文件路径 |
| `TZ`             | `Europe/London`         | 服务器端 IANA 时区（用于日志等）；用户界面仍遵循浏览器时区。参见 [Docker → 时区](#docker-timezone) |
| `OPENROUTER_API_KEY` | *(空)*               | OpenRouter API 密钥 |
| `OPENAI_API_KEY`     | *(空)*               | OpenAI API 密钥 |
| `CEREBRAS_API_KEY`   | *(空)*               | Cerebras API 密钥 |
| `ANTHROPIC_API_KEY`  | *(空)*               | Anthropic API 密钥 |
| `GOOGLE_API_KEY`     | *(空)*               | Google Gemini API 密钥 |
| `DEEPSEEK_API_KEY`   | *(空)*               | DeepSeek API 密钥 |
| `GROQ_API_KEY`       | *(空)*               | Groq API 密钥 |
| `MISTRAL_API_KEY`    | *(空)*               | Mistral API 密钥 |
| `OLLAMA_URL`     | *(空)*               | Ollama 基础 URL（例如 `http://host.docker.internal:11434`） |
| `XAI_API_KEY`        | *(空)*               | xAI API 密钥 |

仅配置您正在使用的提供商。模型 ID 采用命名空间格式（例如 `openrouter/…`、`openai/…`、`cerebras/…`、`ollama/…` 等）。

**费用显示**：OpenRouter 在适用时返回精确的计费金额。其他提供商在提供 OpenRouter 密钥时，将使用 OpenRouter 公开的模型定价进行**估算**；若无 OpenRouter 密钥，非 OpenRouter 的费用可能显示为 `0`。请注意，估算金额并非正式账单。

<br/>

**数据与持久化**：使用 Docker 时，请在 `/app/data` 目录挂载一个卷，以确保 `config.json` 文件和 SQLite 数据库在容器重启后仍可保留。若未挂载卷，容器停止后所有数据将丢失。

**开发者提示**：在拉取替换了旧版单密钥配置的更新后，如果您的本地 `data/config.json` 文件仍使用已被移除的字段（如 `api_key`、`api_url` 或代理选项），请将其重置或与 `src/config-defaults/config_default.json` 中的新默认结构进行合并。

<br/>

**网页认证**：

- 默认管理员账号：`admin` / `transrewrt26`。
- 用户管理请进入 **设置 → 用户**。

- 重置密码：`docker exec <container> reset-web-password '<username>' '<new-password>'`  
  （从源码运行：`pnpm run reset-web-password -- <username> <new-password>`）

<br/>

> ⚠️ **警告**<br/>
> 在任何可网络访问的主机上，请立即修改默认管理员密码。

<br/>

关键设置（字体、模型、语言等）可在应用程序的“设置”中进行配置。

<br/><br/>

<a id="development-and-architecture"></a>

## 开发与架构

- **开发：** 环境搭建、构建、测试和部署（Electron、Web、Docker）— 参见 **[dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)**。
- **架构与系统概述：** 文件结构、技术栈、设计决策 — 参见 **[dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)**。

<br/><br/>

<a id="reporting-issues"></a>

## 反馈问题

请在 [GitHub](https://github.com/wsj-br/transrewrt/issues) 上提交问题。请注明您的平台（Windows / Linux / Docker）和应用程序版本（可在“关于”对话框或“Releases”页面查看）。

<br/><br/>

<a id="disclaimer"></a>

## 免责声明

产品名称和图标归其各自所有者所有，仅用于识别目的。本软件与所提及的任何品牌均无关联，亦未获得其认可。

<br/><br/>

<a id="license"></a>

## 许可证

版权所有 © 2026 Waldemar Scudeller Jr.

[Apache 许可证 2.0](LICENSE)