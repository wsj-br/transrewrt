---
translation_last_updated: '2026-03-31T22:56:58.979Z'
source_file_mtime: '2026-03-31T22:20:13.182Z'
source_file_hash: bf6416a9ca259a19
translation_language: zh-CN
source_file_path: README.md
---
<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**目录**

- [截图](#screenshots)
- [目录](#table-of-contents)
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

AI 驱动的文本工具：支持多种语言互译、不同风格的文本改写，以及通过自定义提示词进行转换——使用多个 AI 提供商（OpenRouter、OpenAI、Anthropic、Google Gemini、DeepSeek、Groq、Mistral、xAI 和本地 Ollama）。可作为桌面应用（Electron）或自托管 Web 应用（Docker）运行。

- **翻译** — 支持数十种语言之间的互译，并自动检测源语言
- **改写** — 修正语法、提升清晰度、调整正式/非正式语气、缩短或扩展文本、技术性改写
- **转换** — 自定义 AI 提示词；创建和管理提示词，每个提示词可选目标语言
- **历史** — 完整的执行历史记录，包含输入/输出文本、筛选和导出功能
- **模型与费用** — 从任意配置的提供商中选择模型；费用和使用情况仪表盘，包含日志及按模型/操作/日期的汇总
- **用户界面** — 多语言界面（支持 30 多种语言，含 RTL 布局）、字体设置等
- **Web 模式** — 支持多用户及管理员角色
- **桌面端** — 适用于 Windows 和 Linux 的 Electron 应用
- **自托管** — 支持 amd64 与 arm64 的 Docker 镜像（适用于树莓派）

安装后，请参阅 **[用户指南](USER-GUIDE.zh-CN.md)** 以全面了解所有功能。

**阅读其他语言版本：**
[英语 (英国)](../README.md) · [葡萄牙语 (巴西)](README.pt-BR.md) · [阿拉伯语](README.ar.md) · [孟加拉语](README.bn.md) · [加泰罗尼亚语](README.ca.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [克罗地亚语](README.hr.md) · [捷克语](README.cs.md) · [荷兰语](README.nl.md) · [英语 (美国)](README.en-US.md) · [菲律宾语](README.tl.md) · [法语](README.fr.md) · [德语](README.de.md) · [希腊语](README.el.md) · [印地语](README.hi.md) · [匈牙利语](README.hu.md) · [意大利语](README.it.md) · [日语](README.ja.md) · [爪哇语](README.jv.md) · [韩语](README.ko.md) · [马来语](README.ms.md) · [波斯语](README.fa.md) · [波兰语](README.pl.md) · [葡萄牙语 (葡萄牙)](README.pt.md) · [旁遮普语](README.pa.md) · [罗马尼亚语](README.ro.md) · [俄语](README.ru.md) · [斯洛伐克语](README.sk.md) · [西班牙语](README.es.md) · [斯瓦希里语](README.sw.md) · [瑞典语](README.sv.md) · [泰卢固语](README.te.md) · [泰语](README.th.md) · [土耳其语](README.tr.md) · [乌克兰语](README.uk.md) · [越南语](README.vi.md)

> **关于用户界面和文档翻译的说明：** 除原始的英语 (英国) 外，所有界面语言均使用 AI 模型翻译；措辞可能不准确或包含错误。

## 截图

**语言选择器**

语言选择器

**翻译**

翻译

**转换 - 提示词编辑器**

转换 - 提示词编辑器

**仪表盘**

仪表盘摘要 — 使用情况

**历史**

历史

**设置 - 模型选择**

设置 - 个模型选择

## 目录

- [快速开始](#quick-start)
- [安装](#installation)
  - [Windows (Electron)](#windows-electron)
  - [Linux (Electron)](#linux-electron)
  - [Docker](#docker)
  - [配置时区](#configuring-the-timezone)
- [获取 OpenRouter API 密钥](#getting-an-openrouter-api-key)
- [配置与环境](#configuration-and-environment)
- [开发与架构](#development-and-architecture)
- [报告问题](#reporting-issues)
- [免责声明](#disclaimer)
- [许可证](#license)

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

将 `sk-or-your-key` 替换为您的 [OpenRouter API 密钥](https://openrouter.ai/keys)（或设置其他提供商密钥；参见 [配置](#configuration-and-environment)）。打开 [http://localhost:5000](http://localhost:5000)，并在暴露服务前更改默认管理员密码。

> ℹ️ **注意**  
>
> 在 Docker 中，LLM 凭据通过环境变量（如 `OPENROUTER_API_KEY`、`OPENAI_API_KEY`、`CEREBRAS_API_KEY` 等）设置（不在网页界面中设置）。在桌面版（Electron）中，您可在 **设置 → API** 中配置密钥。

**Windows**

从 [发布页面](https://github.com/wsj-br/transrewrt/releases) 下载最新的 `Transrewrt Setup x.y.z.exe`，运行安装程序，然后通过开始菜单或桌面快捷方式启动。在 **设置 → API** 中输入您的 API 密钥。您需要至少配置一个提供商，OpenRouter 是免费模型的常见选择。

**Linux**

从 [发布页面](https://github.com/wsj-br/transrewrt/releases) 下载适用于您 CPU 的 `.AppImage` 文件（`x64` 适用于典型 PC，`arm64` 适用于许多 ARM 设备，包括树莓派 4+），然后：

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

在 **设置 → API** 中输入您的 API 密钥。您需要至少配置一个提供商，OpenRouter 是免费模型的常见选择。

**控制台消息：** 打包的 Linux 版本（`x64` 和 `arm64` AppImages）会抑制终端中的 Node 弃用警告（例如内置的 `punycode` 模块）。如果 Chromium 打印出 GPU / EGL 错误（如“GLES3 不受支持”），但应用程序仍能正常运行，您可以通过禁用硬件加速来消除这些错误：

```bash
TRANSREWRT_DISABLE_GPU=1 ./Transrewrt-x.y.z-arm64.AppImage
```

这同样适用于 amd64 架构；请根据您的下载文件更改文件名。更多细节请参见 [安装 → Linux (Electron)](#linux-electron)。

在 Debian/Ubuntu 系统上，您可能需要额外的 **运行时** 库，因为 Chromium 依赖它们（通常完整桌面系统已包含）。请使用 **`libnotify4`** 实现桌面通知——**不要**使用 `libnotify-dev`（那是用于构建软件的，不适用于运行打包的 AppImage）：

```bash
sudo apt install libgtk-3-0 libnotify4 libnss3 libxss1 libasound2 libxtst6 xauth
```

最小化或自定义镜像可能仍会因缺少 `.so` 文件而失败；请安装错误提示中提到的软件包（常见附加包：`libatk1.0-0`、`libatk-bridge2.0-0`、`libgbm1`、`libdrm2`）。某些环境需要 FUSE 才能运行 AppImages（例如 Ubuntu 22.04+ 上的 `libfuse2`），或使用 `APPIMAGE_EXTRACT_AND_RUN=1 ./Transrewrt-….AppImage`。

有关相同内容的摘要，请参见 [安装 → Linux](#linux-electron)。

> ℹ️ **注意**  
>
> 当前不支持 macOS。Transrewrt 支持 Windows、Linux 和 Docker。

应用运行后，请参阅 **[用户指南](USER-GUIDE.zh-CN.md)** 了解如何翻译、改写和转换文本，管理提示词，以及配置模型。

## 安装

### Windows (Electron)

- 从 [发布页面](https://github.com/wsj-br/transrewrt/releases) 下载最新安装程序。
- 运行 `.exe` 并按照安装向导操作。
- 首次运行：通过开始菜单或桌面快捷方式启动应用。

> ℹ️ **注意**  
> 
> Windows 可能会显示以下安全警告之一（对于未签名/独立应用程序来说是正常的）：
> 
> - **用户账户控制 (UAC)**：“是否允许此未知发布者的应用对你的设备进行更改？” → 点击 **是**。
> - **Microsoft Defender SmartScreen**：“Windows 保护了你的电脑” → 点击 **更多信息** → **仍要运行**。
> 
> 这是因为该应用程序未由 Microsoft 或主要发布商签名——只要从我们的官方 GitHub 发布页面下载就是安全的
> （请核对下方的 SHA256 校验和）。

### Linux (Electron)

- 从 [发布页面](https://github.com/wsj-br/transrewrt/releases) 下载匹配的 `.AppImage` 文件（`x64` 或 `arm64`）。
- 运行：在 x86_64/amd64 上执行 `chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage`，在 ARM64 上使用 `...-arm64.AppImage` 文件名。
- **Debian/Ubuntu 运行时库**（Electron/Chromium；与 [快速开始 → Linux](#quick-start) 相同）：`sudo apt install libgtk-3-0 libnotify4 libnss3 libxss1 libasound2 libxtst6 xauth` — 请使用 **`libnotify4`**，而不是 `libnotify-dev`。在最小化系统上，安装终端中报告的任何缺失的 `.so` 文件；通常还需要 `libatk1.0-0`、`libatk-bridge2.0-0`、`libgbm1`、`libdrm2` 等附加组件。AppImage 可能需要 `libfuse2`（Ubuntu 22.04+）或使用 `APPIMAGE_EXTRACT_AND_RUN=1 ./….AppImage`。
- **GPU 消息**：在某些系统上（尤其是 ARM），Chromium 可能会记录 GPU 或 EGL 初始化错误；应用程序仍可正常运行。为避免这些消息，可在禁用硬件加速的情况下启动：`TRANSREWRT_DISABLE_GPU=1 ./Transrewrt-x.y.z-x64.AppImage`（或你对应的 `arm64` 文件名）。

### Docker

- 拉取镜像：`docker pull ghcr.io/wsj-br/transrewrt:latest`
- 至少通过环境变量设置一个提供商密钥（例如 OpenRouter 使用 `OPENROUTER_API_KEY`）。使用 `-e` 参数或 `docker compose` / `.env` 文件传递变量，以避免将密钥硬编码到镜像中。
- **不要**在 Web 界面中输入提供商密钥；服务器会从环境变量中读取。

示例 — 使用命名卷持久化数据（通过环境变量设置 OpenRouter 密钥）：

```bash
OPENROUTER_API_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_API_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

或者，如果您更喜欢使用 Docker Compose，请使用：

```
# download the compose file
wget https://github.com/wsj-br/transrewrt/raw/refs/heads/master/production.yml -O transrewrt.yml
# edit the file to add the API_KEYS and adjust the timezone (TZ)
vi transrewrt.yml
# start the container
docker compose -f transrewrt.yml up -d
```

请参阅 [Configuration](#configuration-and-environment) 了解所有环境变量，例如 `PORT`、`CONFIG_PATH`、`TZ` 和 LLM 密钥（`OPENROUTER_API_KEY`、`OPENAI_API_KEY` 等）。

### 配置时区

应用程序的用户界面日期和时间遵循 **浏览器** 的区域设置和时区。对于 **服务器端** 的行为（如日志记录等），容器使用 `TZ` 环境变量。默认值为 `TZ=Europe/London`。

要使用其他时区，请在 Compose 文件中设置 `TZ`，例如：

```yaml
environment:
  - TZ=America/Sao_Paulo
```

或者在运行容器时传入（Docker）：

```bash
--env TZ=America/Sao_Paulo
```

在许多 Linux 主机上，您可以通过以下命令复制系统时区名称：

```bash
echo TZ=\"$(</etc/timezone)\"
```

有效时区名称列表可在 [tz 数据库](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones)（Wikipedia）中找到。

## 获取 OpenRouter API 密钥

Transrewrt 支持多个 AI 提供商。[OpenRouter](https://openrouter.ai) 是一个流行的选择，因为它将多个模型聚合在一个密钥下，并提供免费模型。

1. 在 [openrouter.ai](https://openrouter.ai) 注册或登录。
2. 打开 [Keys](https://openrouter.ai/keys) 页面并创建一个新密钥（为其命名，可选地设置信用额度）。您可以在不添加信用额度的情况下使用免费模型。
3. **桌面版 (Electron)**：在 **设置 → API** 中粘贴密钥。**Docker**：设置环境变量如 `OPENROUTER_API_KEY`（参见 [快速开始](#quick-start)）。

请勿使用 OpenRouter 的 **Body Builder** 模型（`[openrouter/bodybuilder](https://openrouter.ai/openrouter/bodybuilder)`）进行翻译、改写或转换：它返回的是 JSON 请求负载，而不是这些任务所需的完成文本。详见用户指南中的 [设置 → 模型](USER-GUIDE.zh-CN.md#models)。

您也可以使用其他提供商（OpenAI、Anthropic、Google Gemini、DeepSeek、Groq、Mistral、xAI、Cerebras）或使用 [Ollama](https://ollama.com) 在本地运行模型。请参阅 [Configuration](#configuration-and-environment) 了解支持的提供商和环境变量的完整列表。

> ⚠️ **警告**  
> 
> 如果你从其他设备、容器或服务使用 Ollama，请记得配置 Ollama 以允许外部连接（不要仅限于本地主机）。

关于限制、BYOK 等更多信息，请参见 [OpenRouter 认证](https://openrouter.ai/docs/api/reference/authentication)。

## 配置和环境

**配置文件位置**

| 部署方式         | 配置位置                                   |
| ------------------ | ------------------------------------------------- |
| Electron (Windows) | `%APPDATA%\transrewrt\`                           |
| Electron (Linux)   | `~/.config/transrewrt/`                           |
| Web / Docker       | `/app/data/config.json` (使用卷以持久化) |

**环境变量** (仅限 Web/Docker；Electron 使用本地配置文件)

| 变量                   | 默认值                     | 说明                                                                                                                 |
| ---------------------- | -------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `PORT`                 | `5000`                     | 服务器监听端口                                                                                                       |
| `CONFIG_PATH`          | `/app/data/config.json`    | 配置文件路径                                                                                                         |
| `TZ`                   | `Europe/London`            | 服务器端 IANA 时区（用于日志等）；UI 仍遵循浏览器设置。详见 [Docker → 时区](#docker-timezone)                    |
| `OPENROUTER_API_KEY`   | *(空)*                     | OpenRouter API 密钥                                                                                                  |
| `OPENAI_API_KEY`       | *(空)*                     | OpenAI API 密钥                                                                                                      |
| `CEREBRAS_API_KEY`     | *(空)*                     | Cerebras API 密钥                                                                                                    |
| `ANTHROPIC_API_KEY`    | *(空)*                     | Anthropic API 密钥                                                                                                   |
| `GOOGLE_API_KEY`       | *(空)*                     | Google Gemini API 密钥                                                                                               |
| `DEEPSEEK_API_KEY`     | *(空)*                     | DeepSeek API 密钥                                                                                                    |
| `GROQ_API_KEY`         | *(空)*                     | Groq API 密钥                                                                                                        |
| `MISTRAL_API_KEY`      | *(空)*                     | Mistral API 密钥                                                                                                     |
| `OLLAMA_URL`           | *(空)*                     | Ollama 基础 URL（例如 `http://host.docker.internal:11434`）                                                           |
| `XAI_API_KEY`          | *(空)*                     | xAI API 密钥                                                                                                         |

仅配置您使用的提供商。模型 ID 是带命名空间的（如 `openrouter/…`、`openai/…`、`cerebras/…`、`ollama/…` 等）。

**费用显示：** OpenRouter 在适用时返回确切的计费费用。其他提供商在提供 OpenRouter 密钥时，使用 OpenRouter 公开的模型定价进行**估计**费用；若无 OpenRouter 密钥，非 OpenRouter 费用可能显示为 `0`。估算费用不作为发票。

**数据与持久化：** 对于 Docker，请在 `/app/data` 挂载一个卷，以便 `config.json` 和 SQLite 数据库在容器重启后仍能保留。若无卷，容器停止时所有数据将丢失。

**开发者：** 在拉取替换旧的单密钥配置的更改后，如果您的本地文件仍在使用已移除的字段（`api_key`、`api_url`、代理选项），请重置或合并 `data/config.json` 与 `src/config-defaults/config_default.json` 中的新默认结构。

**Web 认证：**

- 默认管理员：`admin` / `transrewrt26`。
- 在 **设置 → 用户** 中管理用户。
- 重置密码：`docker exec <container> reset-web-password '<username>' '<new-password>'`
  (从源码运行：`pnpm run reset-web-password -- <username> <new-password>`)

> ⚠️ **警告**  
>
> 在任何可从网络访问的主机上立即更改默认管理员密码。

关键设置（字体、模型、语言等）可在应用程序的“设置”中进行配置。

## 开发与架构

- **开发：** 设置、构建、测试和部署（Electron、Web、Docker） - 参见 **[dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)**。
- **架构与系统概述：** 文件夹结构、技术栈、设计决策 - 参见 **[dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)**。

## 报告问题

在 [GitHub](https://github.com/wsj-br/transrewrt/issues) 上提交问题。请包含您的平台（Windows / Linux / Docker）和应用程序版本（在“关于”对话框或“发布”页面中显示）。

## 免责声明

产品名称和图标归其各自所有者所有，仅用于识别目的。本软件与上述任何品牌无关联，也未获其认可。

## 许可证

版权所有 © 2026 Waldemar Scudeller Jr.

[Apache License 2.0](../LICENSE)
