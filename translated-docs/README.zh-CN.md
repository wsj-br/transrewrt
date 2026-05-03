---
translation_last_updated: '2026-05-03T19:24:11.941Z'
source_file_mtime: '2026-05-03T19:23:10.979Z'
source_file_hash: 4cdedbca026824e05d992b1cfb80ca557b1abc530ee66d940b19a35ce0ba9dc3
translation_language: zh-CN
source_file_path: README.md
translation_models:
  - qwen/qwen3-235b-a22b-2507
---
<p align="center">
  <img src="../images/transrewrt_banner.png" alt="Transrewrt Banner"  />
</p>

<p align="center">
  <a href="https://github.com/wsj-br/transrewrt/releases"><img src="https://img.shields.io/badge/version-1.2.1-blue" alt="Version"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-Apache%202.0-green" alt="License: Apache 2.0"></a>
  <img src="https://img.shields.io/badge/platform-Windows%20%7C%20Linux%20%7C%20Docker-lightgrey" alt="Platform">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react" alt="React 19">
  <img src="https://img.shields.io/badge/Electron-41-47848F?logo=electron" alt="Electron 41">
</p>

AI 驱动的文本工具：支持多种语言互译、不同风格的改写以及通过自定义提示词进行转换——使用多个 AI 提供商（OpenRouter、OpenAI、Anthropic、Google Gemini、DeepSeek、Groq、Mistral、xAI 和本地 Ollama）。可作为桌面应用（Electron）或自托管 Web 应用（Docker）运行。

- **翻译** - 在数十种语言之间互译，支持源语言自动检测
- **重写** - 修正语法、提升清晰度、调整正式/非正式语气、缩短、扩展、技术化
- **转换** - 自定义 AI 提示；创建和管理提示，每个提示可选目标语言
- **历史记录** - 完整的执行历史，包含输入/输出文本、过滤功能和导出功能
- **模型与成本** - 可从任意已配置的提供商中选择模型；提供成本与使用情况仪表板，包含日志以及按模型/操作/天汇总的统计信息
- **用户界面** - 多语言界面（支持30多种语言，包含从右到左书写语言支持）、字体等
- **网页模式** - 支持多用户，具备管理员角色管理功能
- **桌面端** - 适用于 Windows 和 Linux 的 Electron 应用
- **自托管** - 提供适用于 amd64 与 arm64 架构的 Docker 镜像（兼容树莓派）

安装后，请参阅 [**用户指南**](USER-GUIDE.zh-CN.md) 以全面了解所有功能。

<small>**阅读其他语言版本：** </small>
<small id="lang-list">[English (GB)](../README.md) · [Português (Brasil)](./README.pt-BR.md) · [العربية](./README.ar.md) · [বাংলা](./README.bn.md) · [Català](./README.ca.md) · [中文 (中国大陆)](./README.zh-CN.md) · [中文 (台灣)](./README.zh-TW.md) · [Hrvatski](./README.hr.md) · [Čeština](./README.cs.md) · [Nederlands](./README.nl.md) · [English (US)](./README.en-US.md) · [Tagalog](./README.tl.md) · [Français](./README.fr.md) · [Deutsch](./README.de.md) · [Ελληνικά](./README.el.md) · [हिन्दी](./README.hi.md) · [Magyar](./README.hu.md) · [Italiano](./README.it.md) · [日本語](./README.ja.md) · [한국어](./README.ko.md) · [Bahasa Melayu](./README.ms.md) · [فارسی](./README.fa.md) · [Polski](./README.pl.md) · [Basa Jawa](./README.jv.md) · [Português](./README.pt.md) · [ਪੰਜਾਬੀ](./README.pa.md) · [Română](./README.ro.md) · [Русский](./README.ru.md) · [Slovenčina](./README.sk.md) · [Español](./README.es.md) · [Kiswahili](./README.sw.md) · [Svenska](./README.sv.md) · [తెలుగు](./README.te.md) · [ไทย](./README.th.md) · [Türkçe](./README.tr.md) · [Українська](./README.uk.md) · [Tiếng Việt](./README.vi.md)</small>

<small>

> **关于用户界面和文档翻译的说明：** 除原始英文（英国）外，
> 所有界面语言均由 AI 模型翻译，措辞可能不够准确或存在错误。

</small>

<br/>

<a id="table-of-contents"></a>
## 目录

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [截图](#screenshots)
- [快速开始](#quick-start)
- [获取 OpenRouter API 密钥](#getting-an-openrouter-api-key)
- [配置与环境](#configuration-and-environment)
- [开发与架构](#development-and-architecture)
- [报告问题](#reporting-issues)
- [免责声明](#disclaimer)
- [许可证](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="screenshots"></a>
## 截图

**语言选择器**

![Language selector](../images/screenshots/zh-CN/language-selector.png)

**翻译**

![Translate](../images/screenshots/zh-CN/translate.png)

**转换 - 提示词编辑器**

![Transform - prompt editor](../images/screenshots/zh-CN/transform-prompt-edit.png)

**仪表盘**

![Dashboard summary - usage](../images/screenshots/zh-CN/dashboard-summary.png)

**历史**

![History](../images/screenshots/zh-CN/history.png)

**设置 - 模型选择**

![Settings - model selection](../images/screenshots/zh-CN/settings-models.png)

<br/><br/>

<a id="quick-start"></a>
## 快速开始

<details>
<summary><b>Docker（推荐用于自托管）</b></summary>

<a id="docker"></a>

<br/>

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest

OPENROUTER_API_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_API_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

将 `sk-or-your-key` 替换为您的 [OpenRouter API 密钥](https://openrouter.ai/keys)（或设置其他提供商密钥；参见 [配置](#configuration-and-environment)）。打开 [http://localhost:5000](http://localhost:5000) 并在暴露服务之前更改默认管理员密码。

通过环境变量设置至少一个提供商密钥（例如用于 OpenRouter 的 `OPENROUTER_API_KEY`）。使用 `-e` 或 `docker compose` / `.env` 传递变量，以确保密钥不会被嵌入镜像中。提供商密钥**不能**在网页界面中输入；服务器会从环境中读取它们。

<br/>

> ℹ️ **注意**<br/>
> 在 Docker 中，LLM 凭据通过环境变量（如 `OPENROUTER_API_KEY`、`OPENAI_API_KEY`、`CEREBRAS_API_KEY` 等）设置（不在网页界面中）。在桌面端（Electron）中，您需在 **设置 → API** 中配置密钥。

<br/>

或者使用 Docker Compose：

```bash
# download the compose file
wget https://github.com/wsj-br/transrewrt/raw/refs/heads/master/production.yml -O transrewrt.yml
# Edit the file to add your API keys (API_KEYs), or uncomment and adjust the `.env` file. Set the timezone (TZ) if necessary.
vi transrewrt.yml
# start the container
docker compose -f transrewrt.yml up -d
```

请参阅 [配置](#configuration-and-environment) 了解所有环境变量，例如 `PORT`、`CONFIG_PATH`、`TZ` 以及 LLM 密钥（`OPENROUTER_API_KEY`、`OPENAI_API_KEY` 等）。

</details>

<br/>

<details>
<summary><b>服务器时区（Docker）</b></summary>

<a id="configuring-the-timezone"></a>

<br/>

应用程序的用户界面日期和时间遵循 **浏览器** 的区域设置和时区。对于 **服务器端** 行为（如日志记录等），容器使用 `TZ` 环境变量。默认值为 `TZ=Europe/London`。

要使用其他时区，请在您的 Compose 文件中设置 `TZ`，例如：

```yaml
environment:
  - TZ=America/Sao_Paulo
```

或者在运行容器时传入（Docker）：

```bash
--env TZ=America/Sao_Paulo
```

在许多 Linux 主机上，您可以使用以下命令复制系统时区名称：

```bash
echo TZ=\"$(</etc/timezone)\"
```

有效时区名称列表可在 [tz 数据库](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones)（维基百科）中找到。

</details>

<br/>

<details>
<summary><b>Windows</b></summary>

<a id="windows-electron"></a>

<br/>

- 从 [发布页面](https://github.com/wsj-br/transrewrt/releases) 下载最新的 `Transrewrt Setup x.y.z.exe`。
- 运行 `.exe` 并按照安装程序操作。
- 首次运行：从开始菜单或桌面快捷方式启动应用程序。
- 在 **设置 → API** 中输入您的 API 密钥。您需要至少配置一个提供商；OpenRouter 常用于免费模型。

<br/>

> ℹ️ **注意**<br/>
> Windows 可能会显示以下安全警告之一（对于未签名/独立应用属正常现象）：
>   - **用户账户控制 (UAC)**："您要允许此来自未知发布者的应用对您的设备进行更改吗？" → 点击 **是**。
>   - **Microsoft Defender SmartScreen**："Windows 保护了您的 PC" → 点击 **更多信息** → **仍然运行**。
>
> 这是因为该应用未由 Microsoft 或主要发布者签名——只要从我们官方的 GitHub 发布页面下载（请在 [发布页面](https://github.com/wsj-br/transrewrt/releases) 每个资源旁核对校验和），就是安全的。

<br/>

</details>

<br/>

<details>
<summary><b>Linux</b></summary>

<a id="linux-electron"></a>

<br/>

从 [Releases](https://github.com/wsj-br/transrewrt/releases) 下载适用于您 CPU 的 `.AppImage`（普通 PC 使用 `x64`，包括树莓派 4+ 在内的许多 ARM 设备使用 `arm64`），然后：

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

在 x86_64/amd64 上使用 `x64` 文件名；在 ARM64 上使用 `...-arm64.AppImage` 文件名。

在 **设置 → API** 中输入您的 API 密钥。您至少需要配置一个提供商；OpenRouter 是免费模型的常见选择。

**控制台消息：** 打包的 Linux 版本（`x64` 和 `arm64` AppImages）会在终端中抑制 Node 的弃用警告（例如内置的 `punycode` 模块）。如果 Chromium 打印出 GPU / EGL 错误（如“GLES3 不受支持”）但程序仍能正常运行，您可以通过禁用硬件加速来消除这些错误：

```bash
TRANSREWRT_DISABLE_GPU=1 ./Transrewrt-x.y.z-arm64.AppImage
```

这在 amd64 上同样适用；请将文件名更改为与您下载的匹配。

在 Debian/Ubuntu 上，您可能需要额外安装 Chromium 所需的 **运行时**库（这些库通常在完整的桌面安装中已存在）。如有需要，请运行以下命令：

```bash
sudo apt update
sudo apt install -y libfuse2 libgtk-3-0 libnotify4 libnss3 libnspr4 libxss1 libxtst6 xdg-utils \
     xauth libatspi2.0-0 libdrm2 libgbm1 libxcb-dri3-0 libcups2 libasound2t64
```

将 `libasound2t64` 替换为 `libasound2` 以适配 `arm64`。最小化或自定义安装可能仍会因缺少 `.so` 文件而失败。请安装错误消息中提到的软件包（常见附加包：`libatk1.0-0`、`libatk-bridge2.0-0`、`libgbm1`、`libdrm2`）。在某些环境中，您可能需要使用 `APPIMAGE_EXTRACT_AND_RUN=1 ./Transrewrt-….AppImage` 来运行该应用。

<br/>

> ℹ️ **注意**<br/>
> 目前不支持 macOS。Transrewrt 可用于 Windows、Linux 和 Docker。

</details>

<br/>

应用运行后，请参阅 [**用户指南**](USER-GUIDE.zh-CN.md) 了解如何翻译、重写和转换文本，管理提示词，以及配置模型。

<br/><br/>

<a id="getting-an-openrouter-api-key"></a>
## 获取 OpenRouter API 密钥

Transrewrt 支持多个 AI 提供商。[OpenRouter](https://openrouter.ai) 是一个流行的选择，因为它将多个模型聚合在同一个密钥下，并提供免费模型。

1. 在 [openrouter.ai](https://openrouter.ai) 注册或登录。
2. 打开 [密钥](https://openrouter.ai/keys) 页面并创建一个新密钥（为其命名，并可选设置信用额度限制）。您无需添加信用即可使用免费模型。
3. **桌面版 (Electron)：** 在 **设置 → API** 中粘贴密钥。**Docker：** 设置环境变量如 `OPENROUTER_API_KEY`（参见 [快速开始](#quick-start)）。

请勿使用 OpenRouter 的 **Body Builder** 模型（[`openrouter/bodybuilder`](https://openrouter.ai/openrouter/bodybuilder)）进行翻译、改写或转换：它返回的是 JSON 请求负载，而不是这些任务所需的完整文本。请参阅用户指南中的 [设置 → 模型](USER-GUIDE.zh-CN.md#models)。

您也可以使用其他提供商（OpenAI、Anthropic、Google Gemini、DeepSeek、Groq、Mistral、xAI、Cerebras）或使用 [Ollama](https://ollama.com) 在本地运行模型。有关支持的提供商和环境变量的完整列表，请参阅 [配置](#configuration-and-environment)。

</br>

> ⚠️ **警告**<br/>
> 如果您从其他设备、容器或服务使用 Ollama，请记得配置 Ollama 以允许外部连接（而非仅限本地主机）。

<br/><br/>

<a id="configuration-and-environment"></a>
## 配置与环境

</br>

**配置文件位置**

| 部署方式         | 配置文件位置                                   |
| ------------------ | ------------------------------------------------- |
| Electron (Windows) | `%APPDATA%\transrewrt\`                           |
| Electron (Linux)   | `~/.config/transrewrt/`                           |
| 网页版 / Docker       | `/app/data/config.json` (使用卷以持久化数据) |

<br/>

**环境变量** (仅限 Web / Docker；Electron 使用本地配置文件)

| 变量             | 说明                                                                  |
|----------------------|------------------------------------------------------------------------------|
| `PORT`               | 服务器监听端口（默认为 `5000`）                                  |
| `CONFIG_PATH`        | 配置文件的路径（默认为 `/app/data/config.json`）                |
| `TZ`                 | 服务器端时区（用于日志等，默认为 `Europe/London`） |
| `HISTORY_DISABLED`   | 强制关闭执行历史记录（可选，默认为 `false`）                  |
| `OPENROUTER_API_KEY` | OpenRouter API 密钥                                                           |
| `OPENAI_API_KEY`     | OpenAI API 密钥                                                               |
| `CEREBRAS_API_KEY`   | Cerebras API 密钥                                                             |
| `ANTHROPIC_API_KEY`  | Anthropic API 密钥                                                            |
| `GOOGLE_API_KEY`     | Google Gemini API 密钥                                                        |
| `DEEPSEEK_API_KEY`   | DeepSeek API 密钥                                                             |
| `GROQ_API_KEY`       | Groq API 密钥                                                                 |
| `MISTRAL_API_KEY`    | Mistral API 密钥                                                              |
| `OLLAMA_URL`         | Ollama 基础 URL（例如 `http://host.docker.internal:11434`）                   |
| `XAI_API_KEY`        | xAI API 密钥                                                                  |

**隐私模式：** 若要强制关闭历史记录跟踪，无论 `config.json` 或每个用户的偏好设置如何，请将 `HISTORY_DISABLED` 设置为 `true` 或 `1`（不区分大小写），适用于 **web/Docker 服务器进程** 和/或 **Electron 桌面主进程**（例如系统或启动器环境 —— 而不仅仅是渲染进程）。这将禁用输入/输出历史记录的存储，锁定 **设置 → 常规设置 → 历史记录**，并阻止与历史记录相关的 API。

仅配置您使用的提供商。模型 ID 是带命名空间的（`openrouter/…`、`openai/…`、`cerebras/…`、`ollama/…` 等）。

**费用显示：** OpenRouter 在适用时返回确切的计费费用。其他提供商在提供 OpenRouter 密钥时，使用 OpenRouter 公开的模型定价中的 **估计** 费用；若无 OpenRouter 密钥，非 OpenRouter 费用可能显示为 `0`。估算值并非账单。

<br/>

**数据与持久化：** 对于 Docker，请在 `/app/data` 挂载一个卷，以便 `config.json` 和 SQLite 数据库在容器重启后仍保留。若无卷，容器停止时所有数据将丢失。

<br/>

**网页认证：**

- 默认管理员： `admin` / `transrewrt26`。
- 在 **设置 → 用户** 中管理用户。
- 重置密码： `docker exec <container> reset-web-password '<username>' '<new-password>'`

<br/>

> ⚠️ **警告**<br/>
> 在任何可网络访问的主机上，请立即更改默认管理员密码。

<br/>

关键设置（字体、模型、语言等）可在应用程序的设置中找到。

<br/><br/>

<a id="development-and-architecture"></a>
## 开发与架构

- **开发：** 设置、构建、测试和部署（Electron、Web、Docker）— 请参阅 [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)。
- **架构与系统概述：** 文件夹结构、技术栈、设计决策 — 请参阅 [dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)。

<br/><br/>

<a id="reporting-issues"></a>
## 报告问题

在 [GitHub](https://github.com/wsj-br/transrewrt/issues) 上提交问题。请包含您的平台（Windows / Linux / Docker）和应用程序版本（在关于对话框或发布页面中显示）。

<br/><br/>

<a id="disclaimer"></a>
## 免责声明

产品名称和图标归其各自所有者所有，仅用于识别目的。本软件与上述任何品牌无关联，也未获其认可。

<br/><br/>

<a id="license"></a>
## 许可

版权所有 © 2026 小瓦尔德马尔·斯库德勒。

[Apache License 2.0](../LICENSE)
