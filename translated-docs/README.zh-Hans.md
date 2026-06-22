<p align="center">
  <img src="../images/transrewrt_banner.png" alt="Transrewrt Banner"  />
</p>

<p align="center">
  <a href="https://github.com/wsj-br/transrewrt/releases"><img src="https://img.shields.io/badge/version-1.6.1-blue" alt="Version"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-Apache%202.0-green" alt="License: Apache 2.0"></a>
  <img src="https://img.shields.io/badge/platform-Windows%20%7C%20Linux%20%7C%20Docker-lightgrey" alt="Platform">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react" alt="React 19">
  <img src="https://img.shields.io/badge/Electron-41-47848F?logo=electron" alt="Electron 41">
</p>

AI 驱动的文本工具：在语言之间进行翻译、以不同风格改写，并使用自定义提示进行转换 - 使用多个 AI 提供商（OpenRouter、OpenAI、Anthropic、Google Gemini、DeepSeek、Groq、Mistral、xAI、Cerebras、NVIDIA、阿里云、apikey.fun、任何 OpenAI 兼容提供商以及本地 Ollama）。可作为桌面应用程序（Electron）或自托管的 Web 应用程序（Docker）运行。

- **翻译** - 在几十种语言之间进行翻译，并自动检测源语言
- **改写** - 修复语法、提高清晰度、正式/非正式、缩短、扩展、技术性
- **转换** - 自定义 AI 提示；创建和管理提示，每个提示可选目标语言
- **术语表** - 存储每对语言的源/目标术语对，并在翻译时应用它们，以保持所选术语的一致性；在设置中管理术语（添加/编辑/删除、CSV/XLSX 导入和模板导出）
- **历史记录** - 完整的执行历史记录，包括输入/输出文本、过滤和导出
- **简易和高级** - 简易模式（默认）：每个提供商的精选预设（**免费 (OpenRouter)**、**标准**、**高级**、**技术**；仅显示与所选提供商有映射的预设），无需选择模型 ID；高级模式：显示已配置提供商的完整模型列表
- **模型和成本** - 成本和使用情况仪表板（摘要、按模型、所有调用）以及导出功能；OpenRouter 显示实际支出，其他提供商使用估算值
- **UI** - 多语言界面（30 多种语言，支持 RTL）、字体等
- **Web 模式** - 支持多用户和管理员角色
- **桌面** - 适用于 Windows 和 Linux 的 Electron 应用
- **自托管** - 适用于 amd64 和 arm64 的 Docker 镜像（支持 Raspberry Pi）

安装后，请参阅 [**用户指南**](USER-GUIDE.zh-Hans.md) 以获取所有功能的完整演练。

<small>**以其他语言阅读：** </small>
<small id="lang-list">[English (UK)](../README.md) · [Português (Brasil)](./README.pt-BR.md) · [العربية](./README.ar.md) · [বাংলা](./README.bn.md) · [Català](./README.ca.md) · [简体中文](./README.zh-Hans.md) · [繁體中文](./README.zh-Hant.md) · [Hrvatski](./README.hr.md) · [Čeština](./README.cs.md) · [Nederlands](./README.nl.md) · [English (US)](./README.en-US.md) · [Tagalog](./README.tl.md) · [Français](./README.fr.md) · [Deutsch](./README.de.md) · [Ελληνικά](./README.el.md) · [Hindi (Roman)](./README.hi-Latn.md) · [Magyar](./README.hu.md) · [Italiano](./README.it.md) · [日本語](./README.ja.md) · [한국어](./README.ko.md) · [Bahasa Melayu](./README.ms.md) · [فارسی](./README.fa.md) · [Polski](./README.pl.md) · [Basa Jawa](./README.jv.md) · [Português](./README.pt.md) · [پنجابی](./README.pa-PK.md) · [Română](./README.ro.md) · [Русский](./README.ru.md) · [Slovenčina](./README.sk.md) · [Español](./README.es.md) · [Kiswahili](./README.sw.md) · [Svenska](./README.sv.md) · [తెలుగు](./README.te.md) · [ไทย](./README.th.md) · [Türkçe](./README.tr.md) · [Українська](./README.uk.md) · [Tiếng Việt](./README.vi.md)</small>

<small>

> **关于 UI 和文档翻译的说明：** 除原始英语（英国）外的所有界面语言
> 均使用 AI 模型翻译；措辞可能不精确或包含错误。

</small>

<br/>

<a id="table-of-contents"></a>
## 目录

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [屏幕截图](#screenshots)
- [快速入门](#quick-start)
- [获取 OpenRouter API 密钥](#getting-an-openrouter-api-key)
- [配置和环境](#configuration-and-environment)
- [开发和架构](#development-and-architecture)
- [报告问题](#reporting-issues)
- [免责声明](#disclaimer)
- [许可证](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="screenshots"></a>
## 屏幕截图

**语言选择器**

![Language selector](../images/screenshots/zh-Hans/language-selector.png)

**翻译**

![Translate](../images/screenshots/zh-Hans/translate.png)

**转换 - 提示编辑器**

![Transform - prompt editor](../images/screenshots/zh-Hans/transform-prompt-edit.png)

**仪表板**

![Dashboard summary - usage](../images/screenshots/zh-Hans/dashboard-summary.png)

**历史记录**

![History](../images/screenshots/zh-Hans/history.png)

**设置 - 模型选择**

![Settings - model selection](../images/screenshots/zh-Hans/settings-general.png)

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

将 `sk-or-your-key` 替换为您的 [OpenRouter API 密钥](https://openrouter.ai/keys)（或设置其他提供商密钥；请参阅[配置](#configuration-and-environment))。打开 [http://localhost:5000](http://localhost:5000) 并在服务公开之前更改默认管理员密码。

通过环境变量设置至少一个提供商密钥（例如 OpenRouter 的 `OPENROUTER_API_KEY`）。使用 `-e` 或 `docker compose` / `.env` 传递变量，这样密钥就不会嵌入到镜像中。提供商密钥**不会**在 Web UI 中输入；服务器会从环境中读取它们。

<br/>

> ℹ️ **注意**<br/>
> 在 Docker 中，LLM 凭据通过环境变量设置，例如 `OPENROUTER_API_KEY`、`OPENAI_API_KEY`、`CEREBRAS_API_KEY` 等（而不是在 Web UI 中）。在桌面（Electron）上，您可以在**设置 → API**中配置密钥。

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

有关所有环境变量，例如 `PORT`、`CONFIG_PATH`、`TZ` 和 LLM 密钥（`OPENROUTER_API_KEY`、`OPENAI_API_KEY` 等），请参阅[配置](#configuration-and-environment)。

</details>

<br/>

<details>
<summary><b>服务器时区 (Docker)</b></summary>

<a id="configuring-the-timezone"></a>

<br/>

应用程序用户界面日期和时间遵循**浏览器**的区域设置和时区。对于**服务器端**行为（日志记录等），容器使用 `TZ` 环境变量。默认值为 `TZ=Europe/London`。

要使用其他时区，请在您的 Compose 文件中设置 `TZ`，例如：

```yaml
environment:
  - TZ=America/Sao_Paulo
```

或者在运行容器时传递它 (Docker)：

```bash
--env TZ=America/Sao_Paulo
```

在许多 Linux 主机上，您可以使用以下命令复制系统时区名称：

```bash
echo TZ=\"$(</etc/timezone)\"
```

有效的时区名称列表保存在 [tz 数据库](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones)（维基百科）中。

</details>

<br/>

<details>
<summary><b>Windows</b></summary>

<a id="windows-electron"></a>

<br/>

- 从 [Releases](https://github.com/wsj-br/transrewrt/releases) 下载最新的 `Transrewrt Setup x.y.z.exe`。
- 运行 `.exe` 并按照安装程序进行操作。
- 首次运行：从“开始”菜单或桌面快捷方式启动应用程序。
- 在 **设置 → API** 中输入您的 API 密钥。您需要至少配置一个提供商；OpenRouter 通常用于免费模型。

<br/>

> ℹ️ **注意**<br/>
> Windows 可能会显示以下安全警告之一（对于未签名/独立应用程序来说是正常的）：
> - **用户账户控制 (UAC)**：“您想允许此来自未知发布者的应用对您的设备进行更改吗？” → 点击 **是**。
> - **Microsoft Defender SmartScreen**：“Windows 已保护你的电脑” → 点击 **更多信息** → **仍要运行**。
>
> 发生这种情况是因为该应用程序未由 Microsoft 或主要发布商签名——如果从我们的官方 GitHub 版本下载（请在 [Releases](https://github.com/wsj-br/transrewrt/releases) 页面上验证每个资产的校验和），它是安全的。

<br/>

</details>

<br/>

<details>
<summary><b>Linux</b></summary>

<a id="linux-electron"></a>

<br/>

从 [Releases](https://github.com/wsj-br/transrewrt/releases) 下载适用于您 CPU 的 `.AppImage`（`x64` 适用于典型 PC，`arm64` 适用于许多 ARM 设备，包括 Raspberry Pi 4+），然后：

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

在 x86_64/amd64 上使用 `x64` 文件名；在 ARM64 上使用 `...-arm64.AppImage` 名称。

在 **设置 → API** 中输入您的 API 密钥。您需要至少配置一个提供商；OpenRouter 通常用于免费模型。

**控制台消息：** 打包的 Linux 构建（`x64` 和 `arm64` AppImages）会抑制终端中的 Node 弃用警告（例如内置的 `punycode` 模块）。如果 Chromium 打印 GPU / EGL 错误（例如“GLES3 不受支持”）但应用程序可以正常工作，您可以通过禁用硬件加速来消除这些错误：

```bash
TRANSREWRT_DISABLE_GPU=1 ./Transrewrt-x.y.z-arm64.AppImage
```

这也适用于 amd64；更改文件名以匹配您的下载。

在 Debian/Ubuntu 上，您可能需要 Chromium 所需的额外 **运行时** 库（这些库通常已存在于完整的桌面安装中）。如果需要，请运行以下命令：

```bash
sudo apt update
sudo apt install -y libfuse2 libgtk-3-0 libnotify4 libnss3 libnspr4 libxss1 libxtst6 xdg-utils \
     xauth libatspi2.0-0 libdrm2 libgbm1 libxcb-dri3-0 libcups2 libasound2t64
```

对于 `arm64`，将 `libasound2t64` 替换为 `libasound2`。最小化或自定义安装仍可能因缺少 `.so` 文件而失败。安装错误消息中提到的软件包（常见附加项：`libatk1.0-0`、`libatk-bridge2.0-0`、`libgbm1`、`libdrm2`）。在某些环境中，您可能需要使用 `APPIMAGE_EXTRACT_AND_RUN=1 ./Transrewrt-….AppImage` 运行应用程序。

<br/>

> ℹ️ **注意**<br/>
> macOS 目前不受支持。Transrewrt 可用于 Windows、Linux 和 Docker。

</details>

<br/>

应用程序运行后，请参阅 [**用户指南**](USER-GUIDE.zh-Hans.md) 了解如何翻译、改写和转换文本、管理提示以及配置模型。

<br/><br/>

<a id="getting-an-openrouter-api-key"></a>
## 获取 OpenRouter API 密钥

Transrewrt 支持多种 AI 提供商。[OpenRouter](https://openrouter.ai) 是一个热门选择，因为它在一个密钥下聚合了许多模型，并提供免费模型。

1. 在 [openrouter.ai](https://openrouter.ai) 注册或登录。
2. 打开 [密钥](https://openrouter.ai/keys) 页面并创建新密钥（命名，并可选择设置信用额度）。您无需添加信用即可使用免费模型。
3. **桌面版 (Electron)：** 将密钥粘贴到 **设置 → API** 中。**Docker：** 设置环境变量，例如 `OPENROUTER_API_KEY`（请参阅 [快速入门](#quick-start)）。

请勿使用 OpenRouter 的 **Body Builder** 模型（[`openrouter/bodybuilder`](https://openrouter.ai/openrouter/bodybuilder)）进行翻译、改写或转换：它返回的是 JSON 请求负载，而不是这些任务的完成文本。请参阅用户指南中的 [设置 → 模型](USER-GUIDE.zh-Hans.md#models)。

您还可以使用其他提供商（OpenAI、Anthropic、Google Gemini、DeepSeek、Groq、Mistral、xAI、Cerebras、NVIDIA、阿里云、apikey.fun、任何 OpenAI 兼容提供商）或使用 [Ollama](https://ollama.com) 在本地运行模型。请参阅 [配置](#configuration-and-environment) 以获取支持的提供商和环境变量的完整列表。

</br>

> ⚠️ **警告**<br/>
> 如果您从其他设备、容器或服务使用 Ollama，请记住配置 Ollama 以允许外部连接（而非仅限本地主机）。

<br/><br/>

<a id="configuration-and-environment"></a>
## 配置和环境

</br>

**配置文件位置**

| 部署             | 配置位置                                          |
| ---------------- | ------------------------------------------------- |
| Electron (Windows) | `%APPDATA%\transrewrt\`                           |
| Electron (Linux)   | `~/.config/transrewrt/`                           |
| Web / Docker     | `/app/data/config.json`（使用卷进行持久化） |

<br/>

**环境变量**（仅限 Web/Docker；Electron 使用本地配置文件）

| 变量                  | 描述                                                                             |
|---------------------------|-----------------------------------------------------------------------------------------|
| `PORT`                    | 服务器监听端口（默认为 `5000`）                                             |
| `CONFIG_PATH`        | 配置文件路径（默认为 `/app/data/config.json`）                |
| `TZ`                 | 服务器端时间（日志等）的时区（默认为 `Europe/London`） |
| `HISTORY_DISABLED`   | 强制关闭执行历史记录（可选，默认为 `false`）                  |
| `OPENROUTER_API_KEY` | OpenRouter API 密钥                                                          |
| `OPENAI_API_KEY`     | OpenAI API 密钥                                                               |
| `CEREBRAS_API_KEY`   | Cerebras API 密钥                                                             |
| `ANTHROPIC_API_KEY`  | Anthropic API 密钥                                                            |
| `GOOGLE_API_KEY`     | Google Gemini API 密钥                                                        |
| `DEEPSEEK_API_KEY`   | DeepSeek API 密钥                                                             |
| `GROQ_API_KEY`       | Groq API 密钥                                                                 |
| `MISTRAL_API_KEY`    | Mistral API 密钥                                                              |
| `OLLAMA_URL`         | Ollama 基本 URL（例如 `http://host.docker.internal:11434`）                   |
| `XAI_API_KEY`        | xAI API 密钥                                                                  |
| `NVIDIA_API_KEY`          | NVIDIA API 密钥                                                                          |
| `ALIBABA_API_KEY`         | 阿里云（DashScope）API 密钥                                                       |
| `APIFUN_API_KEY`          | apikey.fun API 密钥                                                                      |
| `CUSTOM_PROVIDER_NAME` | 自定义 OpenAI 兼容提供商的显示名称（需要所有三个自定义变量） |
| `CUSTOM_PROVIDER_URL`     | 自定义 OpenAI 兼容提供商的基 URL（例如 `https://my-llm.example.com/v1`） |
| `CUSTOM_PROVIDER_API_KEY` | 自定义 OpenAI 兼容提供商的 API 密钥                         |

**自定义 OpenAI 兼容提供商（Web/Docker）：** 用于内置列表上方未列出的任何 OpenAI 兼容终结点（例如自托管服务器或网关），请设置所有三个 `CUSTOM_PROVIDER_*` 变量 — 例如 `CUSTOM_PROVIDER_NAME=MyProvider`、`CUSTOM_PROVIDER_URL=https://my-llm.example.com/v1` 以及匹配的 API 密钥。模型将出现在设置 → 模型下的 **高级**模式中，其 ID 类似于 `MyProvider/…`（提供商名称作为前缀）。

**隐私模式：** 要强制关闭历史记录跟踪，无论 `config.json` 或每个用户的偏好如何，请将 `HISTORY_DISABLED` 设置为 `true` 或 `1`（不区分大小写），用于 **Web/Docker 服务器进程** 和/或 **Electron 桌面主进程**（例如系统或启动器环境 — 而不是仅渲染器）。这将禁用存储输入/输出历史记录，锁定 **设置 → 常规设置 → 历史记录**，并阻止与历史记录相关的 API。

仅配置您使用的提供商。模型 ID 采用命名空间（`openrouter/…`、`openai/…`、`cerebras/…`、`ollama/…`、`{providerName}/…` 用于自定义端点等）。

**成本显示：** OpenRouter 在适用时返回确切的计费成本。其他提供商在 OpenRouter 密钥可用时使用 OpenRouter 公开模型定价中的**估算**成本；如果没有，非 OpenRouter 成本可能显示为 `0`。估算值并非发票。

<br/>

**数据和持久性：** 对于 Docker，在 `/app/data` 处挂载一个卷，以便 `config.json` 和 SQLite 数据库在容器重启后仍然存在。如果没有卷，则在容器停止时所有数据都将丢失。

<br/>

**Web 身份验证：**

- 默认管理员：`admin` / `transrewrt26`。
- 在 **设置 → 用户** 中管理用户。
- 重置密码：`docker exec <container> reset-web-password '<username>' '<new-password>'`

<br/>

> ⚠️ **警告**<br/>
> 在任何可网络访问的主机上立即更改默认管理员密码。

<br/>

关键设置（字体、模型、语言等）可在应用程序“设置”中找到。

<br/><br/>

<a id="development-and-architecture"></a>
## 开发与架构

- **开发：** 设置、构建、测试和部署（Electron、Web、Docker）- 请参阅 [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)。
- **架构和系统概述：** 文件夹结构、技术栈、设计决策 - 请参阅 [dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)。

<br/><br/>

<a id="reporting-issues"></a>
## 报告问题

在 [GitHub](https://github.com/wsj-br/transrewrt/issues) 上提交问题。请提供您的平台（Windows / Linux / Docker）和应用程序版本（在“关于”对话框或“发布”页面中显示）。

<br/><br/>

<a id="disclaimer"></a>
## 免责声明

产品名称和图标属于其各自所有者，仅用于识别目的。本软件不隶属于任何提及的品牌，也未得到其认可。

<br/><br/>

<a id="license"></a>
## 许可证

版权所有 © 2026 Waldemar Scudeller Jr.

[Apache License 2.0](../LICENSE)
