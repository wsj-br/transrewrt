---
translation_last_updated: '2026-05-24T17:52:59.191Z'
source_file_mtime: '2026-05-21T23:07:44.019Z'
source_file_hash: bdcf50f3b9a1f9a07885561062e6c5b1b365e236cff6f7195261529e6bf2ab00
translation_language: zh-CN
source_file_path: USER-GUIDE.md
translation_models:
  - qwen/qwen3-235b-a22b-2507
---
![Transrewrt banner](../images/transrewrt_banner.png)

<a id="transrewrt-user-guide"></a>
# 用户指南

<br/>

<a id="introduction"></a>
## 简介

Transrewrt 可通过以下三种主要方式帮助您处理文本：

- **翻译** - 将文本从一种语言转换为另一种语言。
- **重写** - 以不同的风格重新表述文本，例如更清晰、更简短或更正式。
- **转换** - 使用称为提示的自定义 AI 指令处理文本。

默认情况下，应用以 **简易** 模式运行：您在“设置”中选择一个 **技能**（例如 免费 (OpenRouter)、Lite 或 Technical）和一个 **提供商**，而无需选择模型 ID。如果您想要从 [**设置** > **模型**](#models) 中的经典模型列表，请在 [**设置** > **常规设置**](#general-settings) 中切换到 **高级** 模式。

<br/>

本指南介绍应用安装并运行后如何使用。有关安装步骤，请参阅主 [**README**](README.zh-CN.md)。

<br/>

> ℹ️ **注意**<br/>
> Transrewrt 可作为适用于 Windows 和 Linux 的桌面应用，以及自托管的 Web 应用使用。本指南重点介绍应用的日常使用。若某些内容仅适用于某一版本，会明确标注。

<small>**阅读其他语言版本：** </small>
<small id="lang-list">[English (GB)](../USER-GUIDE.md) · [Português (Brasil)](./USER-GUIDE.pt-BR.md) · [العربية](./USER-GUIDE.ar.md) · [বাংলা](./USER-GUIDE.bn.md) · [Català](./USER-GUIDE.ca.md) · [中文 (中国大陆)](./USER-GUIDE.zh-CN.md) · [中文 (台灣)](./USER-GUIDE.zh-TW.md) · [Hrvatski](./USER-GUIDE.hr.md) · [Čeština](./USER-GUIDE.cs.md) · [Nederlands](./USER-GUIDE.nl.md) · [English (US)](./USER-GUIDE.en-US.md) · [Tagalog](./USER-GUIDE.tl.md) · [Français](./USER-GUIDE.fr.md) · [Deutsch](./USER-GUIDE.de.md) · [Ελληνικά](./USER-GUIDE.el.md) · [हिन्दी](./USER-GUIDE.hi.md) · [Magyar](./USER-GUIDE.hu.md) · [Italiano](./USER-GUIDE.it.md) · [日本語](./USER-GUIDE.ja.md) · [한국어](./USER-GUIDE.ko.md) · [Bahasa Melayu](./USER-GUIDE.ms.md) · [فارسی](./USER-GUIDE.fa.md) · [Polski](./USER-GUIDE.pl.md) · [Basa Jawa](./USER-GUIDE.jv.md) · [Português](./USER-GUIDE.pt.md) · [ਪੰਜਾਬੀ](./USER-GUIDE.pa.md) · [Română](./USER-GUIDE.ro.md) · [Русский](./USER-GUIDE.ru.md) · [Slovenčina](./USER-GUIDE.sk.md) · [Español](./USER-GUIDE.es.md) · [Kiswahili](./USER-GUIDE.sw.md) · [Svenska](./USER-GUIDE.sv.md) · [తెలుగు](./USER-GUIDE.te.md) · [ไทย](./USER-GUIDE.th.md) · [Türkçe](./USER-GUIDE.tr.md) · [Українська](./USER-GUIDE.uk.md) · [Tiếng Việt](./USER-GUIDE.vi.md)</small>

<small>

> **关于用户界面和文档翻译的说明：** 除原始英文（英国）外，
> 所有界面语言均由 AI 模型翻译，措辞可能不够准确或存在错误。

</small>

<br/>

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**目录**

- [开始之前](#before-you-start)
  - [如何获取免费的 OpenRouter API 密钥（桌面应用）](#how-to-get-a-free-openrouter-api-key-desktop-app)
- [入门](#getting-started)
- [窗口的主要部分](#main-parts-of-the-window)
  - [侧边栏](#sidebar)
  - [工具栏](#toolbar)
  - [输入和输出面板](#input-and-output-panels)
- [翻译](#translate)
  - [翻译文本](#translate-text)
  - [语言选择](#language-selection)
  - [有用的翻译设置](#helpful-translation-settings)
- [重写](#rewrite)
- [转换](#transform)
  - [运行现有提示词](#run-an-existing-prompt)
  - [如果您还没有提示词](#if-you-have-no-prompts-yet)
  - [快速创建提示词](#create-a-prompt-quickly)
  - [编辑提示词](#edit-a-prompt)
  - [使用前测试提示词](#test-a-prompt-before-using-it)
- [仪表板](#dashboard)
  - [筛选数据](#filter-the-data)
  - [仪表板标签页](#dashboard-tabs)
  - [导出数据](#export-data)
  - [删除某个模型的存储记录](#delete-stored-records-for-a-model)
- [历史记录](#history)
  - [筛选历史记录](#filter-the-history)
  - [导出历史记录数据](#export-history-data)
- [设置](#settings)
  - [常规设置](#general-settings)
  - [模型](#models)
  - [语言](#languages)
  - [成本跟踪](#cost-tracking)
  - [转换 (设置选项卡)](#transform-settings-tab)
  - [用户](#users)
  - [API 配置](#api-config)
  - [关于](#about)
- [常见问题](#common-issues)
  - [应用无法翻译、重写或转换文本](#the-app-will-not-translate-rewrite-or-transform-text)
  - [模型列表为空](#the-model-list-is-empty)
  - [结果太慢或成本太高](#the-result-is-too-slow-or-too-expensive)
  - [界面语言错误](#the-interface-is-in-the-wrong-language)
  - [文本太小或难以阅读](#the-text-is-too-small-or-hard-to-read)
  - [仪表板摘要显示为空](#dashboard-summary-looks-empty)
  - [费用显示“不可用”或看起来有误](#cost-shows-not-available-or-seems-wrong)
  - [总成本与您的提供商账单不匹配](#total-cost-does-not-match-my-provider-bill)
  - [侧边栏中缺少历史记录页面](#the-history-page-is-missing-from-the-sidebar)
  - [Web 应用：意外重定向到登录页面](#web-app-redirected-to-the-login-page-unexpectedly)
  - [Web 管理员：忘记或丢失密码](#web-admin-forgot-or-lost-a-password)
  - [仪表板未显示其他用户的数据（Web）](#dashboard-shows-no-data-for-other-users-web)
  - [我更改了提示词但编辑内容丢失](#i-changed-a-prompt-and-lost-the-edits)
- [快速提示](#quick-tips)
- [免责声明](#disclaimer)
- [许可证](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="before-you-start"></a>
## 开始之前

要使用 Transrewrt，您需要至少一个 AI 提供商的访问权限。支持的提供商包括：[OpenRouter](https://openrouter.ai)（聚合了多个模型）、OpenAI、Anthropic、Google Gemini、DeepSeek、Groq、Mistral、xAI、Cerebras，以及用于本地模型的 [Ollama](https://ollama.com)。

您无需选择付费模型即可开始使用。一旦添加了您的 OpenRouter API 密钥，应用将自动启用一个内置的 **免费** OpenRouter 选项。这使您可以立即开始翻译、重写和转换文本。或者，您也可以从 Cerebras、Google、Groq 或 Mistral AI 获取免费的 API 密钥。

简单来说：

- 在 **简易** 模式下，**技能** 是预设（免费 (OpenRouter)、Lite、高级 或 Technical），会映射到您所选 **提供商**（OpenRouter、OpenAI、Ollama 等）的某个模型。只有当前提供商支持的技能才会出现在工具栏中。您可在 翻译、重写 和 转换 功能中选择技能。
- 在 **高级** 模式下，**模型** 是您直接选择的 AI 引擎。模型 ID 使用 **提供商前缀**（例如 `openrouter/…`、`openai/…`、`ollama/…`）。
- **API 密钥**（对于 Ollama 则为 **基础 URL**）是应用连接该提供商的方式。

如果您使用的是 **桌面应用**，请在 [**设置** > **API 配置**](#api-config) 中为每个使用的提供商添加密钥。如果仅使用 OpenRouter，请参见下方的 [如何获取免费的 OpenRouter API 密钥](#how-to-get-a-free-openrouter-api-key-desktop-app)。如果您不想使用 API 密钥，可以安装 Ollama（来自 [ollama.com](https://ollama.com)）并改用本地模型，例如 `translategemma:4b`。

如果您使用的是 **网页版**，服务器管理员会通过环境变量配置提供商，因此您无法直接在应用中输入 API 密钥。

<br/>

<a id="how-to-get-a-free-openrouter-api-key-desktop-app"></a>
### 如何获取免费的 OpenRouter API 密钥（桌面应用）

如果您使用的是桌面应用，请按照以下步骤操作：

1. 在您的网页浏览器中访问 [OpenRouter](https://openrouter.ai)。
2. 创建账户或登录。
3. 打开 [密钥](https://openrouter.ai/keys) 页面。
4. 点击按钮创建一个新的 API 密钥。
5. 为密钥命名，以便日后识别。
6. 复制新生成的 API 密钥。
7. 返回 Transrewrt 并打开 **设置** > **API 配置**。
8. 将密钥粘贴到 **OpenRouter API 密钥** 中（位于 **设置** > **API 配置** 下）。
9. 点击 **测试 OpenRouter 密钥** 以确保其正常工作。

<br/><br/>

<a id="getting-started"></a>
## 快速入门

如果您是首次使用 Transrewrt，请按以下顺序操作：

1. 打开应用。
2. 如有需要，点击地球图标选择您的 **界面语言**。
3. 如果您使用的是 **桌面应用**，请打开 [**设置** > **API 配置**](#api-config)，为至少一个提供商（例如 OpenRouter）添加 API 密钥，然后点击 **测试** 以确认其正常工作。
4. 打开 [**设置** > **常规设置**](#general-settings)。在 **简易** 模式（默认）下，选择一个已配置密钥的 **提供商**。在 **高级** 模式下，请打开 [**设置** > **模型**](#models)，并将一个或多个模型添加到 **已选模型** 中。
5. 在 **翻译** 页面，于工具栏中选择一个 **技能**（简易模式）或 **模型**（高级模式）。
6. 打开 [**设置** > **语言**](#languages)，如果希望常用语言优先显示，请设置您的 **首选语言**。
7. 运行一次简单翻译以确认一切正常，然后尝试 **重写** 和 **转换** 功能。

此顺序很重要。它可避免最常见的首次使用问题：在应用尚未建立有效 API 连接或未选择技能/模型前就尝试执行任务。

<br/><br/>

<a id="main-parts-of-the-window"></a>
## 窗口的主要部分

该应用分为三个主要区域：

- 左侧的 **侧边栏**。
- 顶部的 **工具栏**。
- 中间的 **工作区**。

<br/>

<a id="sidebar"></a>
### 侧边栏

使用侧边栏在应用中导航。点击应用标志旁的图标可收起侧边栏，以获得更多的空间。

<br/>

<table>
  <tr>
    <td valign="top">
       <img src="../images/screenshots/zh-CN/sidebar.png" alt="Application Sidebar" style="max-width: 100%; border: 1px solid #ddd; border-radius: 4px;">
    </td>
    <td valign="top">
      <br/><br/>
      <ul>
        <li><strong>翻译</strong> 打开翻译工作区。</li><br/>
        <li><strong>重写</strong> 打开重写工作区。</li><br/>
        <li><strong>转换</strong> 打开自定义提示工作区。</li><br/>
        <li><strong>仪表板</strong> 显示使用情况和费用信息。</li><br/>
        <li><strong>设置</strong> 打开设置面板。</li><br/>
        <li><strong>历史记录</strong> 显示包含输入和输出文本的使用历史。</li><br/>
        <li><strong>用户</strong> 显示已登录用户的用户名（仅限网页版）。</li>
      </ul>
    </td>
  </tr>
</table>

<br/>

<a id="toolbar"></a>
### 工具栏

工具栏会根据您在应用中的位置略有变化。

- 左侧显示当前页面名称。
- 右侧显示 **技能或模型选择器** 和 **界面语言** 控件。

在 **简易** 模式下，工具栏会显示一个 **技能选择器**，包含内置预设 **免费 (OpenRouter)**、**Lite**、**高级** 和 **Technical**。显示哪些技能取决于您在 [**设置** > **常规设置**](#general-settings) 中选择的 **提供商** —— 例如，只有当提供商为 OpenRouter 时，才会列出 **免费 (OpenRouter)**。如果 **提供商** 为 **Ollama**，工具栏将列出您安装的本地模型而非技能。

在 **高级** 模式下，**模型选择器** 允许您为当前任务选择使用的 AI 引擎。

![Model selector](../images/screenshots/zh-CN/model-selector.png)

在高级模式下，某些免费模型可能并非始终可用——它们可能处于离线状态或已达到使用上限。应用可能会自动从您的列表中移除该模型。要控制显示的模型，请前往 [**设置** > **模型**](#models)。您可以通过工具栏中模型名称左侧的提供商图标打开模型设置。

<br/>

使用 **地球图标 + 语言代码** 可更改应用界面语言，例如菜单和按钮。它 **不会** 更改在 **翻译** 中使用的翻译语言。

![Interface language selector](../images/screenshots/zh-CN/language-selector.png)

<br/>

<a id="input-and-output-panels"></a>
### 输入和输出面板

大多数工作区使用左侧的 **输入** 面板和右侧的 **输出** 面板。

每个面板还显示：

| **输入**                                                          | **输出**                                                                                                                  |
|--------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------|
| - 字符数 <br/>- 词数 <br/>- 段落数   <br/> | - 任务耗时<br/>- **TPS**（每秒处理的tokens）<br/>- 字符、词和段落计数<br/>- 使用的模型 |

如果您对这些技术术语感到疑惑：

- **Token** 指一小段文本，可以理解为一个词的一部分或一个短词。
- **TPS** 指模型每秒处理的文本片段数量。

<br/>

您还可以在 [**设置** > **常规设置**](#general-settings) 中启用 `Show cost information on the actions` 选项，以监控每次操作的成本（如可用）和总成本。

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="translate"></a>
## 翻译

当您需要将文本从一种语言转换为另一种语言时，请使用 **翻译**。

![Translate workspace](../images/screenshots/zh-CN/translate.png)

<br/>

<a id="translate-text"></a>
### 翻译文本

1. 打开 **翻译**。
2. 在 **从** 中选择一种语言。
3. 在 **到** 中选择一种语言。
4. 在工具栏中选择一个技能（简易模式）或模型（高级模式）。
5. 在 **输入**中键入或粘贴文本。
6. 点击 **翻译**。
7. 在 **输出**中查看结果。
8. 如果需要复制结果，请使用复制按钮。

<br/>

<a id="language-selection"></a>
### 语言选择

- **从**可以是特定语言或 **检测语言**。
- **到**是你希望结果输出的语言。

你选择的 **常用语言**会显示在列表顶部。你可以在 [**设置** > **语言**](#languages) 中设置这些语言。

<br/>

<a id="helpful-translation-settings"></a>
### 有用的翻译设置

在 [**设置** > **常规设置**](#general-settings) 中，你可以更改翻译的行为方式：

- **粘贴时自动翻译**：粘贴文本后立即执行翻译。
- **自动将结果复制到剪贴板**：成功运行后自动复制结果。
- **实时翻译（输入时）**：在你输入时实时执行翻译。
- **超时时间（毫秒）**：控制应用在执行实时翻译前的等待时间。
- **ENTER 键行为** 控制按下 `Enter` 时的操作：
  - **Enter** 执行翻译或重写（默认）。
  - **Shift + Enter** 执行翻译或重写；纯 **Enter** 插入新行。

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="rewrite"></a>
## 重写

当你希望优化措辞但不改变主要含义时，使用 **重写** 功能。

![Rewrite workspace](../images/screenshots/zh-CN/rewrite.png)

这在以下场景中非常有用：

- 修正拼写和语法（**检查拼写和语法**）
- 提升文本清晰度（**提升清晰度**）
- 一次生成多个不同改写版本（**其他版本**）
- 使文本更正式或更非正式（**转为正式** / **转为非正式**）
- 缩短或扩展文本（**缩短** / **扩展**）
- 使文本更具技术性（**转为技术性**）

<br/>

> 💡 **提示**<br/>
> 使用“**检查拼写和语法**”模式时，输出面板中会出现一个 **显示更改** 开关（位于 **复制** 旁边）。
> 打开或关闭该开关可显示或隐藏对文本所做的具体修改。

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="transform"></a>
## 转换

当你希望 AI 遵循自定义指令时，使用 **转换** 功能。

![Transform workspace](../images/screenshots/zh-CN/transform.png)

这是应用中最灵活的功能区域，可用于以下任务：

- 摘要笔记
- 将草稿文本转化为精炼的邮件
- 提取关键要点
- 将文本转换为特定格式
- 对输入文本执行其他任何自定义操作

<br/>

<a id="run-an-existing-prompt"></a>
### 运行现有提示

1. 打开 **转换**。
2. 从提示列表中选择一个提示。
3. 如果出现 **目标语言** 输入框，可根据需要选择一种语言。
4. 在 **输入** 中键入或粘贴文本。
5. 单击 **转换**。
6. 在 **输出** 中查看结果。

<br/>

<a id="if-you-have-no-prompts-yet"></a>
### 如果您还没有提示

如果您的提示列表为空，请在转换工作区中点击 **加载示例提示**。同一控件始终位于 [**设置** > **转换**](#transform-settings) 的导出/导入行中。两者都会添加内置示例，以便您快速开始。

<br/>

> ℹ️ **注意**<br/>
> 示例提示以英文提供。加载后，您可以编辑提示并使用 **翻译提示** 将其翻译成您的语言。

<br/>

<a id="create-a-prompt-quickly"></a>
### 快速创建提示

快速创建提示的方法如下：

1. 点击 **新建提示**。
2. 点击 **生成提示**。
3. 描述您希望提示完成的任务。
4. 选择一个技能（简易模式）或模型（高级模式）。
5. 让应用程序为您创建草稿。
6. 检查草稿后单击 **保存**。

![Generate prompt](../images/screenshots/zh-CN/transform-generate.png)

<br/>

<a id="edit-a-prompt"></a>
### 编辑提示

创建或编辑提示时，编辑器会显示在左侧，测试区域会显示在右侧。

![Transform prompt editor](../images/screenshots/zh-CN/transform-prompt-edit.png)

主要字段包括：

- **提示名称**：在提示列表中显示的名称。
- **提示说明（可选）**：运行提示时向用户显示的简短提示。
- **模型角色**：分配给AI的总体角色，例如“您是一个有用的助手”。
- **模型指令（每行一条）**：您希望AI遵循的具体规则。
- **输出描述**：描述结果的简短词语，例如“摘要”或“重写”。
- **温度（0.0 → 1.0）**：模型的行为方式；见下文。
- **询问目标语言**：运行提示时添加目标语言选择器。

如果您不熟悉技术术语 **温度**，可以这样理解：

- **较低** 的温度会产生更稳定、更可预测的结果。
- **较高** 的温度会产生更多样化和更具创造性的结果。

您还可以使用：

- `Generate prompt` 根据简短描述创建新草稿
- `Improve prompt` 优化现有提示
- `Translate prompt` 翻译提示字段

<br/>

> ⚠️ **警告**<br/>
> 请先单击 `Save`，再单击 `Back to Run`。如果未保存就返回，您的更改将丢失。

<br/>

<a id="test-a-prompt-before-using-it"></a>
### 在使用前测试提示

右侧的测试面板允许您在日常工作中使用提示之前，先用示例文本进行测试。

以下情况时此功能非常有用：

- 您正在创建新提示
- 您正在比较两个版本的提示
- 您希望检查语气、长度或输出格式

<br/>

> ℹ️ **注意**<br/>
> 您可以在 [**设置** > **转换**](#transform-settings) 中导出和导入已保存的提示。

当您在提示编辑器中使用 **生成提示**、**优化提示** 或 **翻译提示** 时，**简易** 模式提供与翻译和重写相同的技能选择器；**高级** 模式则使用模型列表。

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="dashboard"></a>
## 仪表板

使用**仪表板**查看您对应用程序的使用情况以及产生的费用（针对付费模型）。

![Dashboard summary](../images/screenshots/zh-CN/dashboard-summary.png)

<br/>

> ℹ️ **注意**<br/>
> 如果您仅使用 **免费** 模型，**费用** 金额可能为零，且以成本为重点的 KPI 可能显示为空。当所选时间段内有活动时，**摘要** 选项卡仍会显示翻译、重写和转换的调用次数。

<br/>

<a id="filter-the-data"></a>
### 筛选数据

使用顶部的筛选按钮更改时间范围。

![Dashboard filters](../images/screenshots/zh-CN/dashboard-filter.png)

<br/>

> ℹ️ **注意**<br/>
> **用户** 筛选器仅在网页版中对管理员可见。普通用户不会看到此筛选器，且该筛选器在桌面应用中不可用。

<br/>

<a id="dashboard-tabs"></a>
### 仪表板标签页

- **摘要** 显示 KPI 卡片：总成本、使用的模型、各模式的调用次数和成本（占总调用次数的比例）、每次调用的平均成本、平均 TPS，以及按调用次数排名前三的模型。
- **按模型** 列出每个模型的总调用次数、总成本和平均 TPS；展开某一行可查看翻译、重写和转换的细分情况。
- **所有调用** 显示完整的调用日志（宽布局下分页显示，窄屏幕下以卡片显示），并允许您导出日志。

<br/>

<a id="export-data"></a>
### 导出数据

仪表板表格可将数据导出为：

- **JSON**
- **CSV**
- **XLSX**

如果您希望在应用外审查活动记录或分享报告，此功能非常有用。

<br/>

<a id="delete-stored-records-for-a-model"></a>
### 删除某个模型的存储记录

在**按模型**或**所有调用**中，您可以点击“垃圾桶”图标删除某个模型的存储记录。

> ⚠️ **警告**<br/>
> 删除存储记录无法撤销。请仅在确认不再需要该历史记录时使用此操作。

要删除所有数据或根据记录的创建时间删除记录，请前往 [**设置** > **成本跟踪**](#cost-tracking)。在那里，您可以选择删除所有存储的数据，或仅删除早于特定日期的数据。

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="history"></a>
## 历史记录

点击 **历史记录** 查看您在 **Transrewrt** 中的操作历史，包括每次操作的输入和输出。

![History page](../images/screenshots/zh-CN/history.png)

<br/>

<a id="filter-the-history"></a>
### 筛选历史记录

**历史记录** 使用与 **仪表板** 页面相同的时间范围筛选器。

![Dashboard filters](../images/screenshots/zh-CN/dashboard-filter.png)

<br/>

> ℹ️ **注意**<br/>
> 在 **Web 应用** 中，每个人（包括管理员）只能看到自己的执行历史。**仪表板** 上的 **用户** 筛选器供管理员查看所有账户的使用情况和成本；它不适用于 **历史记录**。

<br/>

<a id="export-history-data"></a>
### 导出历史数据

历史记录页面可将筛选后的数据导出为以下格式：

- **JSON**
- **CSV**
- **XLSX**

如果您希望在应用外审查活动记录或分享报告，此功能非常有用。

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="settings"></a>
## 设置

从侧边栏打开 **设置**，以自定义应用的行为方式。

可用的选项卡取决于平台和您的角色：

| 选项卡 | 桌面端 | 网页端（管理员） | 网页 页端（普通用户） | 备注 |
|------------------|:-------:|:-----------:|:------------------:|----------------------------------------------|
| 常规设置 |   是   |     是     |        是         | 包含 **AI 体验**（简易 / 高级） |
  | 模型 |   是 |     是 |        是 | 仅当 **AI 体验** 为 **高级** 时显示 |
  | 语言         |   是   |     是     |        是         | |
  | 成本跟踪     |   是   |     是     |         -          | |
  | 转换         |   是   |     是     |        是         | 批量导入/导出转换提示词 |
  | 用户             |    -    |     是     |         -          | |
  | API 配置        |   是   |     是     |         -          | |
  | 关于             |   是   |     是     |        是         | |

在 **简易** 模式下，模型选择通过工具栏中的技能和“常规设置”中的 **提供商** 进行；**模型** 选项卡将被隐藏。

<br/>

> ℹ️ **注意**<br/>
> 在 Web 版本中，每个用户都有自己的配置。AI 体验、提供商、已选模型或技能、语言、常规选项以及转换提示等设置均按用户存储。您所做的更改不会影响其他用户。

<br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="general-settings"></a>
### 常规设置

使用 **常规设置** 来控制输入行为、是否为 **历史记录** 保存执行详情、外观，以及您如何为翻译、重写和转换选择 AI。

**AI 体验**

- **简易**（默认）：选择一个 **提供商**（OpenRouter、OpenAI、Anthropic、Google Gemini、DeepSeek、Groq、Mistral、xAI、Cerebras 或 Ollama）。云提供商使用工具栏中的内置技能预设。**Ollama** 则列出您机器上安装的模型而非技能。在简易模式下，**技能目录** 显示目录版本和上次更新时间；点击 **刷新技能目录** 可从项目仓库获取最新的技能列表（应用也会在后台定期自动检查）。
- **高级**：在工具栏中选择单个模型；在 [**设置** > **模型**](#models) 中管理模型列表。

在 **web 应用**中，显示的提供商取决于服务器环境中设置的 API 密钥。在 **桌面应用**中，请在 [**API 配置**](#api-config) 下配置密钥。

**行为**

- **ENTER 键行为** 可选择 `Enter` 是运行任务还是插入新行。
- **粘贴时自动翻译** 在您粘贴文本后立即开始翻译。
- **自动将结果复制到剪贴板** 会自动复制成功的结果。
- **实时翻译（输入时）** 在您输入时即时翻译。
- **超时时间（毫秒）** 设置实时翻译的等待时间。

**历史**

- **保留执行历史** 控制每次翻译、重写和转换操作是否将 **输入和输出文本** 存储到侧边栏的 [**历史记录**](#history) 视图中。关闭此选项会要求确认；确认后，已存储的历史记录文本将从数据库中删除。如果标签显示 *已被管理员禁用*，则表示您的安装在环境中设置了 `HISTORY_DISABLED`（参见 [README](README.zh-CN.md#configuration-and-environment)）；您无法通过用户界面重新启用历史记录。
- **删除历史数据** 允许您按时间（例如几个月前的数据，或 **所有数据（清除）**）使用 **删除数据** 来移除已存储的文本。这仅影响 **历史记录** 视图中保存的执行文本；它 **不会** 删除费用或使用总量。要移除或清理 **费用** 数据，请使用 [**设置** > **成本跟踪**](#cost-tracking)。

**外观**

- **主题** 可在浅色、深色和系统外观之间切换。
- **在操作中显示成本信息** 用于控制是否显示每次操作的费用（如果可用）以及翻译、重写和转换输出面板上的总成本。
- **费用小数位数** 用于更改费用小数的显示方式。
- **仅限网页：** **在应用周围显示边距** 会在界面周围添加额外空间。
- **字体** 更改文本面板中的书写字体。
- **大小** 更改字体大小。

**配置备份**（仅限桌面应用和网页版管理员）

- **在备份中包含使用数据** —— 启用后，ZIP 文件还将包含执行历史和 API 调用数据。
- **备份配置** —— 创建一个 ZIP 文件（默认为 UTC 时间的 `transrewrt-config-backup-YYYY-MM-DD_HHMMSS.zip`），其中包含 `config.json`、`state.json`、可选的加密密钥、用户、偏好设置、自定义提示词，以及（如已启用）使用数据。备份成功后，确认信息将显示已保存的文件名。
- **从备份恢复** —— 首先打开 **确认对话框**。在对话框中选择备份 ZIP 文件（**浏览** / 文件选择器，或在支持的环境中拖放），然后查看选项：
  - **恢复使用数据** —— 当备份 ZIP 文件中包含使用数据时，导入其中的使用/历史记录；如果仅需设置和提示词，请取消勾选。
  - **恢复前清除旧的使用数据** —— 在应用备份前，删除当前安装中的现有使用/历史记录（可选；当您希望完全替换时使用）。

在网页版或桌面版中创建的备份均可在另一版本中恢复。当在网页版中恢复桌面版备份时，数据将恢复到管理员用户。

<br/>

<a id="models"></a>
### 模型

仅当在 [**常规设置**](#general-settings) 中将 **AI 体验** 设置为 **高级** 时，此标签页才可用。使用 **设置** > **模型** 来选择工具栏中显示的模型。

![Settings Models tab](../images/screenshots/zh-CN/settings-models.png)

页面包含两个列表：

- 左侧的 **可用模型**
- 右侧的 **已选模型**

包含的有用控件有：

- **搜索模型...** 按名称查找模型
- 使用 **提供商** 标签按引擎筛选列表（OpenRouter、OpenAI、Ollama 等）
- **仅限免费** 仅显示免费模型
- **刷新** 重新加载列表
- 按提供商排序时，可使用 **全部展开** 和 **全部折叠**

模型 ID 包含提供商前缀（例如 `openrouter/…` 与 `openai/…`）。徽章如 **OpenAI (OpenRouter)** 与 **OpenAI (直接)** 表示流量的路由方式。

> ℹ️ **注意**<br/>
> **OpenRouter Body Builder** (`openrouter/bodybuilder`) 是一个路由模型，而非通用聊天模型：其回复为描述 OpenRouter API 请求体的 JSON（例如包含 `requests` 和 `model` 的 `messages` 数组）。如果将其用于 **翻译**、**重写** 或 **转换**，输出面板将显示该 JSON 而非最终文本。请为这些任务选择普通文本模型。详见 OpenRouter 上的 [Body Builder 模型页面](https://openrouter.ai/openrouter/bodybuilder)。

操作：

- 要添加模型，请点击 **添加** 或可用模型条目中的任意位置。

- 要移除模型，请点击 **已选模型** 中对应模型旁的 **X**，或在可用模型条目中点击 **已选择**。

- 要清除列表，请点击 **取消全选**。必需的免费模型将保留在列表中。

<br/>

> ℹ️ **注意**<br/>
> 如果您不希望立即为 OpenRouter 充值，请先启用 **仅限免费** 并选择免费模型（无需信用卡）。您也可以使用 Ollama 在本地运行模型，无需任何 API 密钥。

<br/>

<a id="languages"></a>
### 语言

使用 **设置** > **语言** 来管理应用中使用的语言列表。

- **常用语言** 会固定在 **翻译** 和 **转换** 语言列表的顶部。
- **自定义语言** 允许您添加内置列表中没有的语言。

添加自定义语言后，它将与内置选项一起出现在语言选择器中。

<br/>

<a id="cost-tracking"></a>
### 成本跟踪

使用 **设置** > **成本跟踪** 来管理费用信息。

- **总成本** 显示累计总额。
- **复制数值** 将总额复制到剪贴板。
- **重置费用** 将存储的总额重置为零。
- **与 API 密钥使用情况同步** 将总额设置为与 OpenRouter 账户报告的使用情况一致（仅限 OpenRouter）。
- **API 密钥使用情况** 显示 OpenRouter 的使用详情（如可用）。
- **删除成本数据** 删除所有数据，或仅删除早于所选日期的条目。

**成本跟踪：** 使用 OpenRouter 模型时，应用会根据 OpenRouter 提供的成本信息显示您的实际使用量和支出。对于其他所有提供商，应用将使用 OpenRouter 公布的价格估算成本；若价格不可用，估算值可能为零。

<br/>

> ℹ️ **注意**<br/>
>  **所有费用数据仅为参考，非官方账单。**

<br/>

> ⚠️ **警告**<br/>
> 数据删除无法撤销。删除前请务必备份数据或通过 [**历史记录**](#history) 
> 或 [**仪表板** > **所有调用**](#dashboard-tabs) 导出，否则数据将永久丢失。
> 与每个 API 调用条目相关的所有输入/输出历史也将被删除。

<br/>

<a id="transform-settings"></a>
### 转换（设置标签页）

使用 **设置** > **转换** 可批量管理提示。

您可以：

- 查看已保存的提示词
- 删除提示词
- 从文件导入提示词
- 导出提示词以备份或分享
- 将示例提示词加载到提示词列表中

<br/>

<a id="users"></a>
### 用户

使用 **用户** 在 Web 版本中管理用户账户。您可以添加用户、更新其详细信息、重置密码以及删除账户。

<br/>

<a id="api-config"></a>
### API 配置

支持的提供商包括：OpenRouter、OpenAI、Anthropic、Google Gemini、DeepSeek、Groq、Mistral、xAI、Cerebras，以及 **Ollama**（通过基础 URL 使用本地模型）。您只需配置您实际使用的提供商。

**Web 应用程序：仅限管理员**

API 密钥通过系统或 Docker 环境变量进行配置——不会在 Web 界面中输入。此页面显示哪些提供商已配置密钥，并允许您通过点击 `Test` 按钮来测试每个提供商。

<br/>

> ℹ️ **注意**<br/>
> 要更改 API 密钥，请在您的系统或 Docker 配置中更新环境变量，然后重启服务器或容器。

<br/>

> ℹ️ **注意**<br/>
> **配置备份**（参见 [**常规设置** → 配置备份](#general-settings)）可以将 **已解析** 的提供商密钥嵌入 ZIP 文件中的 `config.json`。恢复该 ZIP 文件时，**不会** 将这些密钥复制回服务器的持久化配置文件中——运行中的密钥仍来自环境变量和现有文件状态，如文档所述。

<br/>

**桌面应用程序**

使用 **API 配置** 为每个您使用的提供商存储 API 密钥。对于 Ollama，请输入 **基础 URL** 而非 API 密钥。

<br/>

> 💡 **提示** <br/>
> 如果您不想使用 API 密钥或支付费用，可以 [下载 Ollama](https://ollama.com) 并在本地机器上免费运行模型（例如 `translategemma:4b`）。或者，您也可以创建一个免费的 OpenRouter 账户（无需信用卡）来使用其免费模型，或从 Cerebras、Google、Groq 或 Mistral AI 获取免费 API 密钥。

<br/>

- 仅添加您需要的提供商。在 **设置** > **模型** 中，每个模型 ID 都以提供商名称开头（例如 `openrouter/openrouter/free`、`openai/gpt-4o`、`ollama/llama3`）。

要添加 API 密钥，请在文本框中输入值，然后点击 `Save`。要替换现有密钥，请点击 `Edit`。要验证密钥是否有效，请点击 `Test`。对于 Ollama 基础 URL，请始终点击 `Test` 以检查连接。

<br/>

> ℹ️ **注意**<br/>
> 您无法查看当前 API 密钥的值。只能使用 `Edit` 按钮进行替换。
> API 密钥以加密形式存储在配置中。

<br/>

<a id="about"></a>
### 关于

**关于** 选项卡显示：

- 应用名称和标语
- 版本号和构建日期
- 许可证和版权信息，并附有打开 **第三方声明** 的链接
- 项目仓库的链接

<br/><br/>

<a id="common-issues"></a>
## 常见问题

如果某些功能未按预期工作，请先检查以下几点。

<br/>

<a id="the-app-will-not-translate-rewrite-or-transform-text"></a>
### 应用无法翻译、重写或转换文本

请检查：

- 您已在工具栏中选择了一个 **技能**（简易）或 **模型**（高级）
- 在 **简易** 模式下，[**设置** > **常规设置**](#general-settings) 中已设置 **提供商**，并拥有有效密钥（或 Ollama URL），且该提供商至少有一个技能
- 在 **高级** 模式下，[**设置** > **模型**](#models) 中至少列出一个模型
- 您的 API 配置正常工作

如果您使用的是桌面应用：

1. 打开 [**设置** > **API 配置**](#api-config)。
2. 确保至少保存了一个 API 密钥。
3. 点击提供商旁边的 **测试**，确认密钥有效。

<br/>

<a id="the-model-list-is-empty"></a>
### 模型列表为空

在 **简易** 模式下，打开 [**设置** > **常规设置**](#general-settings)，确认已设置 **提供商**，并在 [**API 配置**](#api-config)（桌面端）中添加或测试密钥，或联系您的管理员（web 端）。对于 **Ollama**，请对基础 URL 执行 **测试**，并确保模型已本地安装。

在 **高级** 模式下，打开 [**设置** > **模型**](#models) 并点击 **刷新**。如有需要，搜索模型，启用 **仅限免费**，并将模型添加到 **已选模型**。

<br/>

<a id="the-result-is-too-slow-or-too-expensive"></a>
### 结果太慢或成本太高

尝试以下一项或多项操作：

- 选择其他技能（简易）或模型（高级）
- 使用较短的输入
- 在 [**设置** > **常规设置**](#general-settings) 中关闭 **实时翻译（键入时翻译）**
- 对简单任务使用免费模型（参见 [模型](#models)）

<br/>

<a id="the-interface-is-in-the-wrong-language"></a>
### 界面语言不正确

点击 [工具栏](#toolbar) 中的地球图标，并选择您偏好的 **界面语言**。

<br/>

<a id="the-text-is-too-small-or-hard-to-read"></a>
### 文本太小或难以阅读

打开 [**设置** > **常规设置**](#general-settings) 并更改：

- **字体系列**
- **大小**

<br/>

<a id="dashboard-summary-looks-empty"></a>
### 仪表板摘要显示为空

如果出现以下情况，这属于正常现象：

- 您仅使用 **免费模型**，且正在查看 **费用** 数据（可能为零）；**摘要** 上的调用次数 KPI 仍需所选时间段内的数据
- 所选的 **时间筛选** 未覆盖调用发生的时间段 —— 可尝试 **全部** 进行检查

如果在选择 **全部** 后 KPI 仍为零，请确认调用是否出现在 [**历史记录**](#history) 或 **所有调用** 标签页中。

<br/>

<a id="cost-shows-not-available-or-seems-wrong"></a>
### 费用显示“不可用”或看起来有误

当您通过 **OpenRouter** 使用模型时，应用会显示 OpenRouter 报告的实际花费。

对于 **其他提供商**（如 OpenAI 直连、Anthropic 直连等），费用是根据 OpenRouter 发布的定价数据估算的。如果未找到匹配的模型价格，费用将显示为 **不可用**，并且不会计入您的累计总额。

<br/>

<a id="total-cost-does-not-match-my-provider-bill"></a>
### 总费用与您的提供商账单不符

应用中的所有费用数据均为 **仅供参考的估算值**，并非正式账单。

要使总费用更接近您实际的 OpenRouter 支出，请打开 [**设置** > **成本跟踪**](#cost-tracking) 并点击 **与 API 密钥使用情况同步**。

<br/>

<a id="the-history-page-is-missing-from-the-sidebar"></a>
### 侧边栏中缺少历史记录页面

**保留执行历史** 可能已关闭。请打开 [**设置** > **常规设置**](#general-settings) 并启用该选项，除非历史记录 *已被管理员禁用*（环境中设置了 `HISTORY_DISABLED` —— 参见 [README](README.zh-CN.md#configuration-and-environment)）。启用历史记录不会恢复之前已删除的文本。

<br/>

<a id="web-app-session-expired"></a>
### 网页应用：意外重定向到登录页面

您的会话可能已超时。请重新登录。如果频繁发生，请检查服务器配置中的会话有效期设置。

<br/>

<a id="web-admin-forgot-or-lost-a-password"></a>
### 网页管理员：忘记或丢失密码

此说明适用于 **自托管网页应用**（Docker），不适用于桌面（Electron）应用。

- 如果还有其他管理员可以登录，他们可以打开 [**设置** > **用户**](#users)，选择对应账户，并在那里设置 **新密码**。
- 如果您 **被锁定账户**，但拥有对机器或容器的 **shell 访问权限**，可以使用镜像附带的工具重置密码（如果更改了默认名称，请替换 `transrewrt`；如果密码包含空格或特殊字符，请用引号括起）：

```bash
docker exec transrewrt reset-web-password '<username>' '<new-password>'
```

默认管理员用户名为 `admin`（如果您从未创建其他账户）。当您只传入一个参数时，它将被视为 `admin` 的新密码。

如果您是从 **源码检出** 运行而非使用 Docker，请使用：

```bash
pnpm run reset-web-password -- <username> <new-password>
```

该脚本会更新 SQLite 数据库中的用户记录（如果用户缺失，也可以创建 `admin` 用户）。重置后，请使用新密码登录。

<br/>

<a id="dashboard-shows-no-data-for-other-users"></a>
### 仪表板未显示其他用户的数据（网页端）

只有 **管理员**才能通过 **用户** 筛选器查看所有用户的数据。普通用户默认只能查看自己的活动记录。

<br/>

<a id="i-changed-a-prompt-and-lost-the-edits"></a>
### 我修改了一个提示词，但编辑内容丢失了

编辑提示词时，请务必先点击 **保存**，然后再点击 **返回运行**。

<br/><br/>

<a id="quick-tips"></a>
## 快速提示

- 在尝试 [**重写**](#rewrite) 或 [**转换**](#transform) 之前，请先使用 [**翻译**](#translate) 确保您的设置正常工作。
- 使用 [**重写**](#rewrite) 进行日常的文本优化。
- 当您需要为特定任务建立可重复的工作流程时，请使用 [**转换**](#transform)。
- 如果您想监控使用情况和费用，请使用 [**仪表板**](#dashboard)。
- 使用 [**历史记录**](#history) 查看过去的操作及其完整的输入/输出文本。
- 如果您正在构建希望长期保存的提示库，或希望与他人共享，请定期导出提示（参见 [转换](#transform)）。
- 除非需要对模型 ID 进行细粒度控制，否则请保持在 **简易** 模式；当您已明确所需模型时，再切换至 **高级** 模式。

<br/><br/>

<a id="disclaimer"></a>
## 免责声明

产品名称和图标归其各自所有者所有，仅用于识别目的。本软件与上述任何品牌无关联，也未获其认可。

<br/><br/>

<a id="license"></a>
## 许可

版权所有 © 2026 小瓦尔德马尔·斯库德勒。

[Apache License 2.0](../LICENSE)
