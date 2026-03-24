---
translated_at: "2026-03-24T01:11:33.812Z"
source_hash: "fc671c16dd34a2c355752935670712beb8abd2ae65453de44983a2f2f0701696"
source_mtime: 1774306679773.736
model: "qwen/qwen3-235b-a22b-2507"
---
![Transrewrt 横幅](../images/transrewrt_banner.png)


<a id="transrewrt-user-guide"></a>
# 用户指南

<br/>

<a id="introduction"></a>
## 简介

Transrewrt 从三个方面帮助您处理文本：

- **翻译** - 将文本从一种语言转换为另一种语言。
- **重写** - 以不同风格重新表述文本，例如更清晰、更简短或更正式。
- **转换** - 使用称为“提示”的自定义 AI 指令处理文本。

<br/>

本指南介绍应用安装并运行后如何使用。有关安装步骤，请参阅主 **[README](README.zh-CN.md)**。

<br/>

> ℹ️ **注意**<br/>
> Transrewrt 可作为 Windows 和 Linux 的桌面应用程序，以及自托管的 Web 应用程序使用。本指南主要关注应用的日常使用。若某些内容仅适用于某一版本，将明确标注。

<small>**以其他语言阅读：** [English (UK)](USER-GUIDE.zh-CN.md) · [Português (BR)](USER-GUIDE.pt-BR.md) · [العربية](USER-GUIDE.ar.md) · [বাংলা](USER-GUIDE.bn.md) · [Català](USER-GUIDE.ca.md) · [简体中文](USER-GUIDE.zh-CN.md) · [繁體中文](USER-GUIDE.zh-TW.md) · [Hrvatski](USER-GUIDE.hr.md) · [Čeština](USER-GUIDE.cs.md) · [Nederlands](USER-GUIDE.nl.md) · [English (US)](USER-GUIDE.en-US.md) · [Filipino](USER-GUIDE.tl.md) · [Français](USER-GUIDE.fr.md) · [Deutsch](USER-GUIDE.de.md) · [Ελληνικά](USER-GUIDE.el.md) · [हिन्दी](USER-GUIDE.hi.md) · [Magyar](USER-GUIDE.hu.md) · [Italiano](USER-GUIDE.it.md) · [日本語](USER-GUIDE.ja.md) · [Basa Jawa](USER-GUIDE.jv.md) · [한국어](USER-GUIDE.ko.md) · [Bahasa Melayu](USER-GUIDE.ms.md) · [فارسی](USER-GUIDE.fa.md) · [Polski](USER-GUIDE.pl.md) · [Português (PT)](USER-GUIDE.pt.md) · [ਪੰਜਾਬੀ](USER-GUIDE.pa.md) · [Română](USER-GUIDE.ro.md) · [Русский](USER-GUIDE.ru.md) · [Slovenčina](USER-GUIDE.sk.md) · [Español](USER-GUIDE.es.md) · [Kiswahili](USER-GUIDE.sw.md) · [Svenska](USER-GUIDE.sv.md) · [తెలుగు](USER-GUIDE.te.md) · [ภาษาไทย](USER-GUIDE.th.md) · [Türkçe](USER-GUIDE.tr.md) · [Українська](USER-GUIDE.uk.md) · [Tiếng Việt](USER-GUIDE.vi.md)</small>

<br/>

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**目录**

- [开始之前](#before-you-start)
  - [如何获取免费的 OpenRouter API 密钥（桌面应用）](#how-to-get-a-free-openrouter-api-key-desktop-app)
- [快速入门](#getting-started)
- [窗口主要部分](#main-parts-of-the-window)
  - [侧边栏](#sidebar)
  - [工具栏](#toolbar)
  - [输入和输出面板](#input-and-output-panels)
- [翻译](#translate)
  - [翻译文本](#translate-text)
  - [语言选择](#language-selection)
  - [有用的翻译设置](#helpful-translation-settings)
  - [键盘快捷键](#keyboard-shortcuts)
- [重写](#rewrite)
  - [重写文本](#rewrite-text)
- [转换](#transform)
  - [运行现有提示](#run-an-existing-prompt)
  - [若尚未有提示](#if-you-have-no-prompts-yet)
  - [快速创建提示](#create-a-prompt-quickly)
  - [编辑提示](#edit-a-prompt)
  - [在使用前测试提示](#test-a-prompt-before-using-it)
  - [管理已保存的提示](#manage-saved-prompts)
- [仪表板](#dashboard)
  - [筛选数据](#filter-the-data)
  - [仪表板标签页](#dashboard-tabs)
  - [导出数据](#export-data)
  - [删除某个模型的存储记录](#delete-stored-records-for-a-model)
- [历史记录](#history)
  - [筛选数据](#filter-the-data-1)
  - [导出历史记录数据](#export-history-data)
- [设置](#settings)
  - [常规设置](#general-settings)
  - [模型](#models)
  - [语言](#languages)
  - [成本追踪](#cost-tracking)
  - [转换提示](#transform-prompts)
  - [用户](#users)
  - [API 配置](#api-config)
  - [关于](#about)
- [常见问题](#common-issues)
  - [应用无法翻译、重写或转换文本](#the-app-will-not-translate-rewrite-or-transform-text)
  - [模型列表为空](#the-model-list-is-empty)
  - [结果过慢或成本过高](#the-result-is-too-slow-or-too-expensive)
  - [界面显示语言错误](#the-interface-is-in-the-wrong-language)
  - [文本太小或难以阅读](#the-text-is-too-small-or-hard-to-read)
  - [仪表板图表为空](#dashboard-charts-are-empty)
  - [成本显示“不可用”或似乎有误](#cost-shows-not-available-or-seems-wrong)
  - [总成本与供应商账单不符](#total-cost-does-not-match-my-provider-bill)
  - [侧边栏缺少历史记录页面](#the-history-page-is-missing-from-the-sidebar)
  - [Web 应用：意外重定向至登录页面](#web-app-redirected-to-the-login-page-unexpectedly)
  - [仪表板未显示其他用户数据（Web）](#dashboard-shows-no-data-for-other-users-web)
  - [我修改了一个提示但丢失了编辑内容](#i-changed-a-prompt-and-lost-the-edits)
- [快速提示](#quick-tips)
- [免责声明](#disclaimer)
- [许可证](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="before-you-start"></a>

## 开始之前

要使用 Transrewrt，您需要至少接入一个 AI 提供商。支持的提供商包括：[OpenRouter](https://openrouter.ai)（聚合多种模型）、OpenAI、Anthropic、Google Gemini、DeepSeek、Groq、Mistral、xAI，以及用于本地模型的 [Ollama](https://ollama.com)。

您无需选择付费模型即可开始使用。一旦添加了您的 OpenRouter API 密钥，应用程序将自动启用内置的 **免费** OpenRouter 选项。这能让您立即开始文本翻译、改写和转换。

简单来说：

- **模型** 是执行任务的 AI 引擎。模型名称会带有 **提供商前缀**（例如 `openrouter/…`、`openai/…`、`ollama/…`）。
- **API 密钥**（对 Ollama 而言则是 **基础 URL**）是应用程序连接该提供商的方式。

如果您使用的是 **桌面应用程序**，请在 [**设置** > **API 配置**](#api-config) 中为您使用的每个提供商添加密钥。如果仅使用 OpenRouter，请参阅下方的[如何获取 API 密钥](#how-to-get-an-api-key-desktop-app)。若您不想使用 API 密钥，也可以安装 Ollama（来自 [ollama.com](https://ollama.com)）并使用本地模型替代。

如果您使用的是 **网页版**，则由服务器管理员通过环境变量配置提供商，因此通常您无需自行输入 API 密钥。

<br/>

<a id="how-to-get-an-api-key-desktop-app"></a>
### 如何获取免费的 OpenRouter API 密钥（桌面应用程序）

如果您正在使用桌面应用程序，请按照以下步骤操作：

1. 在浏览器中访问 [OpenRouter](https://openrouter.ai)。
2. 创建账户或登录。
3. 打开 [密钥页面](https://openrouter.ai/keys)。
4. 点击按钮创建一个新的 API 密钥。
5. 为密钥命名，以便日后识别。
6. 复制新生成的 API 密钥。
7. 返回 Transrewrt，打开 **设置** > **API 配置**。
8. 将密钥粘贴到 **OpenRouter API 密钥** 字段（位于 **设置** > **API 配置** 中）。
9. 点击 **测试 OpenRouter 密钥** 以确认其正常工作。

<br/>

> ℹ️ **注意**<br/>
> 您可以使用 OpenRouter 的免费通道或其他可用的免费模型开始使用，无需绑定信用卡。在大多数情况下，这已足够让您在不选择付费模型的情况下使用 Transrewrt。另外，您也可以使用 Ollama 在本地运行模型，而无需任何 API 密钥。

<br/><br/>

<a id="getting-started"></a>
## 快速入门

如果是您第一次使用 Transrewrt，请按以下顺序操作：

1. 打开应用程序。
2. 如有需要，点击地球图标选择您的 **界面语言**。
3. 如果您使用的是 **桌面应用程序**，请打开 [**设置** > **API 配置**](#api-config)，为至少一个提供商（例如 OpenRouter）添加 API 密钥，并点击 **测试** 以验证其可用性。
4. 打开 [**设置** > **模型**](#models)，将一个或多个模型添加到 **已选模型** 列表中。
5. 打开 [**设置** > **语言**](#languages)，设置您的 **首选语言**，以便常用语言优先显示。
6. 进入 **翻译** 功能，执行一次简单翻译以确认一切正常。
7. 成功后，尝试使用 **改写** 和 **转换** 功能。

此顺序很重要。它可以避免最常见的首次使用问题：在尚未建立有效 API 连接或未选择模型时就尝试执行任务。

<br/><br/>

<a id="main-parts-of-the-window"></a>
## 窗口的主要组成部分

应用程序界面分为三个主要区域：

- 左侧的 **侧边栏**。
- 顶部的 **工具栏**。
- 中间的 **工作区**。

<br/>

<a id="sidebar"></a>
### 侧边栏

使用侧边栏可在应用程序内进行导航。您可以通过点击应用标志旁的图标来收起侧边栏以获得更大的空间。

<br/>

<table>
  <tr>
    <td valign="top">
       <img src="../images/screenshots/zh-CN/sidebar.png" alt="应用程序侧边栏" style="max-width: 100%; border: 1px solid #ddd; border-radius: 4px;">
    </td>
    <td valign="top">
      <br/><br/>
      <ul>
        <li><strong>翻译</strong> 打开翻译工作区。</li><br/>
        <li><strong>改写</strong> 打开文本改写工作区。</li><br/>
        <li><strong>转换</strong> 打开自定义提示词工作区。</li><br/>
        <li><strong>仪表盘</strong> 显示使用情况和成本信息。</li><br/>
        <li><strong>设置</strong> 打开设置面板。</li><br/>
        <li><strong>历史记录</strong> 显示包含输入和输出文本的使用历史。</li><br/>
        <li><strong>用户</strong> 显示当前登录用户的用户名（仅限网页版）。</li>
      </ul>
    </td>
  </tr>
</table>

<br/>

<a id="toolbar"></a>

### 工具栏

工具栏会根据您在应用程序中的位置略有变化。

- 左侧显示当前页面名称。
- 右侧显示**模型选择器**和**界面语言**控制项。

**模型选择器**允许您为当前任务选择使用的 AI 引擎。

  ![模型选择器](../images/screenshots/zh-CN/model-selector.png)

> ℹ️ **注意**<br/>
> 某些免费模型可能并非始终可用——有时它们处于离线状态或有使用限制。如果出现这种情况，应用程序会自动将该模型从您的可用列表中移除。<br/>
> 要控制显示哪些模型，请前往[**设置** > **模型**](#models)并编辑您的模型列表。
> 您也可以通过点击工具栏中模型名称左侧的提供商图标，直接打开模型设置。

<br/>

**地球图标 + 语言代码**用于更改应用程序界面语言（如菜单和按钮文本）。它**不会**更改**翻译**功能中使用的翻译语言。

  ![界面语言选择器](../images/screenshots/zh-CN/language-selector.png)

<br/>

<a id="input-and-output-panels"></a>
### 输入和输出面板

大多数工作区采用左侧的**输入**面板和右侧的**输出**面板。

**输入**面板显示：

- 字符数
- 单词数
- 段落数

**输出**面板可显示：

- 任务耗时
- 本次任务的成本（如果可获取）
- 当前累计成本
- **TPS**（每秒处理的令牌数）
- 字符、单词和段落计数
- 使用的模型

如果您对技术术语有疑问：

- **令牌 (Token)** 指一小段文本，可以理解为一个词的一部分或一个短词。
- **TPS** 指模型每秒处理的文本片段数量。

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="translate"></a>
## 翻译

当您需要将文本从一种语言转换为另一种语言时，请使用**翻译**功能。

![翻译工作区](../images/screenshots/zh-CN/translate.png)

<br/>

<a id="translate-text"></a>
### 翻译文本

1. 打开**翻译**功能。
2. 在**源语言**中选择一种语言。
3. 在**目标语言**中选择一种语言。
4. 在工具栏中选择一个模型。
5. 在**输入**框中键入或粘贴文本。
6. 点击**翻译**按钮。
7. 在**输出**框中查看结果。
8. 如果需要复制结果，可使用复制按钮。

<br/>

<a id="language-selection"></a>
### 语言选择

- **源语言**可以是特定语言，也可以选择**自动检测语言**。
- **目标语言**是您希望输出结果所使用的语言。

您设置的**常用语言**会显示在列表顶部。您可在[**设置** > **语言**](#languages)中进行设置。

<br/>

<a id="helpful-translation-settings"></a>
### 实用的翻译设置

在[**设置** > **常规设置**](#general-settings)中，您可以调整翻译功能的行为：

- **粘贴时自动翻译**：在您粘贴文本后立即执行翻译。
- **自动复制结果到剪贴板**：在翻译成功后自动将结果复制到剪贴板。
- **实时翻译（输入时）**：在您输入文本的同时进行翻译。
- **超时时间（毫秒）**：控制应用程序在执行实时翻译前的等待时间。

<br/>

<a id="keyboard-shortcuts"></a>
### 快捷键

在[**设置** > **常规设置**](#general-settings)中，“回车键行为”控制按下 `Enter` 键时的操作：

- **Enter** 键执行任务，**Shift+Enter** 键换行；
- 或者反过来操作。

当前模式也会在**翻译**按钮上显示。

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="rewrite"></a>
## 改写

当您希望优化文本表达但不改变其主要含义时，请使用**改写**功能。

![改写工作区](../images/screenshots/zh-CN/rewrite.png)

此功能适用于：

- 修正拼写和语法错误
- 使文本更清晰
- 使文本更正式或更口语化
- 缩短或扩展文本
- 使文本更具专业性

<br/>

<a id="rewrite-text"></a>

### 重写文本

1. 打开 **重写** 功能。
2. 选择一个 **模式**。
3. 在工具栏中选择一个模型。
4. 在 **输入** 框中键入或粘贴文本。
5. 点击 **重写**。
6. 在 **输出** 框中查看结果。

此处的回车键行为与[**翻译**](#keyboard-shortcuts)中描述的行为一致。

<br/>

> 💡 **提示**<br/>
> 使用“**检查拼写和语法**”模式时，输出面板中会出现一个 `显示更改` 按钮。  
> 点击该按钮可切换修正内容的显示，以查看或隐藏对您文本所做的具体修改。

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="transform"></a>
## 变换

当您希望 AI 遵循自定义指令集时，请使用 **变换** 功能。

![变换工作区](../images/screenshots/zh-CN/transform.png)

这是本应用最灵活的功能区域，可用于执行以下任务：

- 摘要笔记内容
- 将草稿文字转换为润色后的邮件
- 提取关键要点
- 将文本转换为特定格式

<br/>

<a id="run-an-existing-prompt"></a>
### 运行已存在的提示

1. 打开 **变换** 功能。
2. 从提示列表中选择一个提示。
3. 如果出现 **目标语言** 选项框，请根据需要选择一种语言。
4. 在 **输入** 框中键入或粘贴文本。
5. 点击 **变换**。
6. 在 **输出** 框中查看结果。

<br/>

<a id="if-you-have-no-prompts-yet"></a>
### 如果尚未有提示

如果您的提示列表为空，请点击 **加载示例提示**。系统将添加内置示例，帮助您快速开始使用。

<br/>

> ℹ️ **注意**<br/>
> 示例提示以英文提供。加载后，您可以编辑任一提示，并使用 **翻译提示** 功能将其翻译成您的语言。

<br/>

<a id="create-a-prompt-quickly"></a>
### 快速创建提示

快速创建提示的最佳方式是：

1. 点击 **新建提示**。
2. 点击 **生成提示**。
3. 描述您希望该提示实现的功能。
4. 选择一个模型。
5. 让应用程序为您生成草稿。
6. 审核草稿并点击 **保存**。

![生成提示](../images/screenshots/zh-CN/transform-generate.png)


<br/>

<a id="edit-a-prompt"></a>
### 编辑提示

创建或编辑提示时，左侧面板将显示编辑器，右侧面板将出现测试区域。

![变换提示编辑器](../images/screenshots/zh-CN/transform-prompt-edit.png)

主要字段包括：

- **提示名称**：在提示列表中显示的名称。
- **提示说明（可选）**：运行提示时向用户显示的简短提示。
- **模型角色**：分配给 AI 的整体角色，例如“你是一个有用的助手”。
- **模型指令（每行一条）**：您希望 AI 遵循的具体规则。
- **输出描述**：用于简要描述结果的词语，例如“摘要”或“重写”。
- **温度（0.0 → 1.0）**：控制模型行为的参数；详见下文。
- **请求目标语言**：运行提示时将添加目标语言选择器。

如果您不熟悉“**温度**”这一技术术语，可以这样理解：

- **较低** 的温度产生更稳定、更可预测的结果。
- **较高** 的温度产生更多样化和更具创造性。

您还可以使用：

- **`生成提示`**：根据简单描述创建新草稿
- **`优化提示`**：改进现有提示
- **`翻译提示`**：翻译提示中的各个字段

<br/>

> ⚠️ **警告**<br/>
> 在点击 **`返回运行`** 之前，请务必先点击 **`保存`**。如果未保存直接返回，您的更改将会丢失。

<br/>

<a id="test-a-prompt-before-using-it"></a>
### 使用前测试提示

右侧的测试面板允许您在正式使用前，用示例文本测试提示效果。

这在以下情况下非常有用：

- 创建新提示时
- 对比两个提示版本时
- 想检查语气、长度或输出格式时

<br/>

<a id="manage-saved-prompts"></a>
### 管理已保存的提示

要集中管理已保存的提示，请打开 [**设置** > **变换提示**](#transform-prompts)。

在该界面中您可以：

- 列出并删除提示
- 将提示导出为 **JSON**、**CSV** 或 **XLSX** 格式
- 从文件导入提示

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="dashboard"></a>

## 仪表板

使用**仪表板**查看您使用该应用程序的程度以及相应的花费情况（适用于付费模型）。

![仪表板概览](../images/screenshots/zh-CN/dashboard-summary.png)


<br/>

> ℹ️ **注意**<br/>
> 如果您仅使用免费模型，与成本相关的图表将为空。

<br/>

<a id="filter-the-data"></a>
### 筛选数据

使用顶部的筛选按钮更改时间范围。

![仪表板筛选器](../images/screenshots/zh-CN/dashboard-filter.png)

<br/>

> ℹ️ **注意**<br/>
> **用户**筛选器仅对网页版中的管理员可见。普通用户不会看到此筛选器，且桌面应用程序中也不提供该功能。

<br/>

<a id="dashboard-tabs"></a>
### 仪表板标签页

- **概览**：为您提供使用情况和成本的总体信息。
- **按使用情况**：按翻译语言、重写模式和转换提示分解活动详情。
- **按模型**：显示您使用的模型及其花费。
- **按天**：展示每日总计数据。
- **全部调用**：显示完整的调用历史记录，并允许您导出数据。

<br/>

<a id="export-data"></a>
### 导出数据

仪表板表格支持以下格式导出数据：

- **JSON**
- **CSV**
- **XLSX**

此功能适用于您希望在应用外部查看活动记录或共享报告的情况。

<br/>

<a id="delete-stored-records-for-a-model"></a>
### 删除某个模型的存储记录

在**按模型**或**全部调用**页面中，点击“垃圾桶”图标即可删除某个模型的存储记录。

> ⚠️ **警告**<br/>
> 删除的记录无法恢复。请仅在确认不再需要该历史数据时进行操作。

如需删除所有数据或根据记录的时间删除旧数据，请前往 [**设置** > **费用跟踪**](#cost-tracking)。在那里您可以选择删除所有存储的数据，或仅删除早于特定日期的数据。

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="history"></a>
## 历史记录

点击**历史记录**，查看您在 **Transrewrt** 中的操作历史，包括每次操作的输入和输出内容。

![历史记录页面](../images/screenshots/zh-CN/history.png)

<br/>

<a id="filter-the-history"></a>
### 筛选历史记录

**历史记录**使用与**仪表板**页面相同的筛选器。使用它们来选择时间范围。

![仪表板筛选器](../images/screenshots/zh-CN/dashboard-filter.png)

<br/>

> ℹ️ **注意**<br/>
> **用户**筛选器仅对网页版中的管理员可见。普通用户不会看到此筛选器，且桌面应用程序中也不提供该功能。

<br/>

<a id="export-history-data"></a>
### 导出历史记录数据

历史记录页面可将筛选后的数据导出为以下格式：

- **JSON**
- **CSV**
- **XLSX**

此功能适用于您希望在应用外部查看活动记录或共享报告的情况。

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="settings"></a>
## 设置

从侧边栏打开**设置**，以自定义应用程序的行为方式。

可用的标签页取决于您的平台和用户角色：

  | 标签页             | 桌面版 | 网页版（管理员） | 网页版（普通用户） |
  |-------------------|:-------:|:---------------:|:------------------:|
  | 常规设置          |   是   |       是        |         是         |
  | 模型              |   是   |       是        |         是         |
  | 语言              |   是   |       是        |         是         |
  | 费用跟踪          |   是   |       是        |         —          |
  | 转换提示          |   是   |       是        |         是         |
  | 用户              |   —    |       是        |         —          |
  | API 配置          |   是   |       是        |         —          |
  | 关于              |   是   |       是        |         是         |

<br/>

> ℹ️ **注意**<br/>
> 在网页版中，每个用户拥有独立的配置。所选模型、语言、通用选项和转换提示等设置均按用户存储。您所做的更改不会影响其他用户。

<br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="general-settings"></a>

### 一般设置

使用**一般设置**来控制输入行为、是否保存执行记录到**历史记录**以及界面外观。

**行为**

- **回车键行为**：选择按下 `Enter` 键是运行任务还是插入新行。
- **粘贴时自动翻译**：粘贴文本后自动开始翻译。
- **自动复制结果到剪贴板**：成功的结果将自动复制到剪贴板。
- **实时翻译（输入时）**：在您输入的同时进行翻译。
- **超时时间（毫秒）**：设置实时翻译的等待时间。

**历史记录**

- **保留执行历史记录**：控制每次翻译、改写和转换是否将**输入和输出文本**保存到侧边栏的[**历史记录**](#history)视图中。关闭此选项会提示确认；若确认，已保存的历史记录文本将从数据库中删除。
- **删除历史数据**：可通过**删除数据**按时间删除存储的文本（例如几个月前的数据，或**全部数据（清空）**）。这只会影响用于**历史记录**视图的已保存执行文本，**不会**删除成本或使用量统计。如需删除或清理**成本**数据，请使用[**设置** > **成本跟踪**](#cost-tracking)。

**外观**

- **成本小数位数**：更改成本显示的小数位数。
- **仅限网页版**：**在应用周围显示边距**，可在界面周围添加额外空间。
- **字体族**：更改文本面板中的字体。
- **大小**：更改字体大小。

<br/>

<a id="models"></a>
### 模型

使用**设置** > **模型**来选择工具栏中显示的模型。

![设置模型选项卡](../images/screenshots/zh-CN/settings-models.png)

该页面包含两个列表：

- 左侧的 **可用模型**
- 右侧的 **已选模型**

常用控件包括：

- **搜索模型...**：按名称查找模型
- **提供商**标签：将列表缩小为某个引擎（如 OpenRouter、OpenAI、Ollama 等）
- **仅显示免费模型**：仅显示免费模型
- **刷新**：重新加载模型列表
- **全部展开** 和 **全部收起**：按提供商排序时使用

模型 ID 包含提供商前缀（例如 `openrouter/…` 与 `openai/…`）。标签如 **OpenAI (OpenRouter)** 与 **OpenAI (直连)** 表示流量的路由方式。

操作说明：

- 添加模型：点击 **添加** 按钮，或点击任意可用模型条目中的任意位置。
- 删除模型：在**已选模型**列表中点击其旁边的 **X**，或在“可用模型”条目上点击 **已选** 按钮。
- 清空列表：点击 **全部取消选择**。必需的免费模型将保留在列表中。

<br/>

> ℹ️ **注意**<br/>
> 如果您不想立即为 OpenRouter 充值，请先启用 **仅显示免费模型** 并选择免费模型（无需信用卡）。您也可以使用 Ollama 在本地运行模型，无需任何 API 密钥。

<br/>

<a id="languages"></a>
### 语言

使用**设置** > **语言**来管理应用中使用的语言列表。

- **常用语言**：在**翻译**和**转换**功能的语言列表顶部固定显示这些语言。
- **自定义语言**：允许您添加一个不在内置列表中的语言。

添加自定义语言后，它将与内置选项一起出现在语言选择器中。

<br/>

<a id="cost-tracking"></a>
### 成本跟踪

使用**设置** > **成本跟踪**来管理费用信息。

- **总成本**：显示累计总额。
- **复制数值**：将总成本复制到剪贴板。
- **重置成本**：将已存储的总成本重置为零。
- **与 API 密钥使用情况同步**：将总成本设置为与 OpenRouter 账户报告的使用情况一致（仅限 OpenRouter）。
- **API 密钥使用情况**：显示 OpenRouter 的使用详情（如有）。
- **删除成本数据**：删除所有数据，或仅删除早于指定日期的条目。

**成本跟踪说明**：当您使用 OpenRouter 模型时，应用会根据 OpenRouter 提供的数据显示实际使用量与支出。对于其他所有提供商，应用会基于 OpenRouter 公布的价格进行成本估算；如果无法获取价格，估算值可能为零。

<br/>

> ℹ️ **注意**<br/>
> 所有成本数据仅为参考估算，**非官方账单凭证**。

<br/>

> ⚠️ **警告**<br/>
> 数据删除操作不可撤销。删除前请务必备份数据，或通过[**仪表板** > **全部调用**](#dashboard-tabs)导出，否则数据将永久丢失。  
> 每个 API 调用条目的相关历史记录也将一并删除。

<br/>

<a id="transform-prompts"></a>

### 转换提示词

使用 **设置** > **转换提示词** 可批量管理提示词。

您可以：

- 查看已保存的提示词
- 删除提示词
- 从文件导入提示词
- 导出提示词以备份或分享

<br/>

<a id="users"></a>
### 用户

**网页版：仅管理员可用**

在网页版本中，使用 **用户** 功能来管理用户账户。您可以添加用户、更新其信息、重置密码以及删除账户。

<br/>

<a id="api-config"></a>
### API 配置

支持的提供商包括：OpenRouter、OpenAI、Anthropic、Google Gemini、DeepSeek、Groq、Mistral、xAI 和 **Ollama**（通过基础 URL 使用本地模型）。您只需配置您实际使用的提供商。

**网页应用：仅管理员可用**

API 密钥通过系统或 Docker 环境变量进行配置——不会在网页界面中输入。此页面会显示哪些提供商已配置了密钥，并允许您点击 **`测试`** 按钮测试每个提供商的连接。

<br/>

> ℹ️ **注意**<br/>
> 若要更改 API 密钥，请在您的系统或 Docker 配置中更新环境变量，然后重启服务器或容器。

<br/>

**桌面应用程序**

使用 **API 配置** 为每个您使用的提供商存储 API 密钥。对于 Ollama，请输入 **基础 URL** 而非 API 密钥。

<br/>

> 💡 **提示** <br/>
> 如果您不想使用 API 密钥或支付费用，可以 [下载 Ollama](https://ollama.com) 并在您的设备上免费运行本地模型。或者，您也可以注册一个免费的 OpenRouter 账户（无需信用卡），使用其提供的免费模型。

- 仅添加您需要的提供商。在 **设置** > **模型** 中，每个模型 ID 都以提供商开头（例如 `openrouter/openrouter/free`、`openai/gpt-4o`、`ollama/llama3`）。

要添加 API 密钥，请在文本框中输入密钥值并点击 **`保存`**。要替换现有密钥，请点击 **`编辑`**。要检查密钥是否有效，请点击 **`测试`**。

<br/>

> ℹ️ **注意**<br/>
> 您无法查看当前的 API 密钥值，仅可通过 **`编辑`** 按钮替换它。  
> API 密钥在配置文件中以加密形式存储。

<br/>

有关获取 OpenRouter 密钥的详细步骤，请参见上方的 [如何获取 API 密钥](#how-to-get-an-api-key-desktop-app)。

<br/>

<a id="about"></a>
### 关于

**关于** 标签页显示以下内容：

- 应用名称
- 版本号
- 构建日期
- 项目仓库链接

<br/><br/>

<a id="common-issues"></a>
## 常见问题

如果某些功能未按预期工作，请首先检查以下几点。

<br/>

<a id="the-app-will-not-translate-rewrite-or-transform-text"></a>
### 应用无法翻译、重写或转换文本

请检查以下事项：

- 您已在工具栏中选择了一个模型
- 在 [**设置** > **模型**](#models) 中至少列出一个模型
- 您的 API 配置正常工作

如果您使用的是桌面应用：

1. 打开 [**设置** > **API 配置**](#api-config)
2. 确保至少保存了一个 API 密钥
3. 点击提供商旁边的 **测试** 按钮，确认密钥是否有效

<br/>

<a id="the-model-list-is-empty"></a>
### 模型列表为空

打开 [**设置** > **模型**](#models) 并点击 **刷新**。

如有需要：

- 搜索特定模型
- 开启 **仅限免费**
- 在 **已选模型** 中添加一个或多个模型

<br/>

<a id="the-result-is-too-slow-or-too-expensive"></a>
### 结果生成太慢或成本过高

请尝试以下一项或多项操作：

- 选择其他模型
- 使用更短的输入内容
- 在 [**设置** > **常规设置**](#general-settings) 中关闭 **实时翻译（输入时翻译）**
- 对简单任务使用免费模型（参见 [模型](#models)）

<br/>

<a id="the-interface-is-in-the-wrong-language"></a>
### 界面语言不正确

点击 [工具栏](#toolbar) 中的地球图标，并选择您偏好的 **界面语言**。

<br/>

<a id="the-text-is-too-small-or-hard-to-read"></a>
### 文本太小或难以阅读

打开 [**设置** > **常规设置**](#general-settings)，修改以下选项：

- **字体**
- **大小**

<br/>

<a id="dashboard-charts-are-empty"></a>
### 仪表板图表为空

如果出现以下情况，图表为空属于正常现象：

- 您仅使用 **免费模型**（费用图表将为空）
- 所选的 **时间筛选器** 未覆盖实际调用的时间段 — 请尝试选择 **全部** 查看

如果选择 **全部** 后图表仍为空，请确认调用记录是否出现在 [**历史记录**](#history) 或 **全部调用** 标签页中。

<br/>

<a id="cost-shows-not-available-or-seems-wrong"></a>

### 费用显示为“不可用”或数值错误

当你通过 **OpenRouter** 使用模型时，应用中显示的是 OpenRouter 报告的实际花费。

对于 **其他提供商**（如直接使用 OpenAI、Anthropic 等），费用是根据 OpenRouter 公开的定价数据估算的。如果某个模型没有找到对应的定价信息，费用将显示为 **不可用**，并且不会计入你的累计总额。

<br/>

<a id="total-cost-does-not-match-my-provider-bill"></a>
### 总费用与服务商账单不符

应用中的所有费用数据均为**估算值，仅供参阅**，并非正式账单。

若要使总费用更接近你实际在 OpenRouter 的支出，可打开 [**设置** > **费用跟踪**](#cost-tracking) 并点击 **与 API 密钥用量同步**。

<br/>

<a id="the-history-page-is-missing-from-the-sidebar"></a>
### 侧边栏中缺少历史记录页面

可能 **已关闭执行历史记录功能**。请打开 [**设置** > **常规设置**](#general-settings) 并启用该选项。请注意，开启后无法恢复之前已被删除的历史数据。

<br/>

<a id="web-app-session-expired"></a>
### 网页应用：意外跳转至登录页面

你的会话可能已超时，请重新登录。如果频繁发生此问题，请检查服务器配置中的会话有效期设置。

<br/>

<a id="dashboard-shows-no-data-for-other-users"></a>
### 仪表板未显示其他用户的数据（网页端）

只有 **管理员** 才能通过 **用户** 筛选器查看所有用户的数据。普通用户默认只能查看自己的活动记录。

<br/>

<a id="i-changed-a-prompt-and-lost-the-edits"></a>
### 我修改了提示词但丢失了编辑内容

编辑提示词时，请务必先点击 **保存**，然后再点击 **返回运行**。

<br/><br/>

<a id="quick-tips"></a>
## 快速提示

- 建议先使用 [**翻译**](#translate) 功能，确认配置正常后再尝试 [**重写**](#rewrite) 或 [**转换**](#transform)。
- 日常文本优化可使用 [**重写**](#rewrite) 功能。
- 当你需要为特定任务建立可重复的工作流程时，请使用 [**转换**](#transform)。
- 如需监控使用情况和费用，请使用 [**仪表板**](#dashboard)。
- 使用 [**历史记录**](#history) 来回顾以往的操作及其完整的输入/输出内容。
- 如果你在构建一个想要长期保存的提示词库，或希望与他人共享，请定期导出提示词（参见 [转换提示词](#transform-prompts)）。

<br/><br/>

<a id="disclaimer"></a>
## 免责声明

产品名称和图标归各自所有者所有，此处仅用于识别目的。本软件与所提及的任何品牌均无关联，亦未获得其认可。

<br/><br/>

<a id="license"></a>
## 许可证

版权所有 © 2026 Waldemar Scudeller Jr.

[Apache 许可证 2.0](LICENSE)