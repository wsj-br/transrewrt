---
translated_at: "2026-03-15T22:02:51.451Z"
source_hash: "69732149de931f2a0059ecf9073871caedaa431362e32c010e7d93bd3cbd76bc"
source_mtime: 1773611603946.006
model: "stepfun/step-3.5-flash:free"
---
<a id="transrewrt-user-guide"></a>
# Transrewrt 用户指南

<br />

<a id="introduction"></a>
## 简介

Transrewrt 可通过三种主要方式帮助您处理文本：

*   **翻译** - 将文本从一种语言转换为另一种语言。
*   **改写** - 以不同的风格重述文本，例如更清晰、更简短或更正式。
*   **转换** - 使用自定义的 AI 指令（称为提示词）处理文本。

<br />

本指南说明了如何在安装并运行应用程序后使用它。有关安装步骤，请参阅主 [README](../README.md) 文件。

<br />

> ℹ️ **注意**<br/>
> Transrewrt 提供适用于 Windows 和 Linux 的桌面应用，以及一个自托管的 Web 应用。本指南侧重于应用程序的日常使用。如果某些内容仅适用于特定版本，将会明确标注。

<small>**以其他语言阅读：** [English (UK)](../USER-GUIDE.md) · [Português (BR)](USER-GUIDE.pt-BR.md) · [العربية](USER-GUIDE.ar.md) · [বাংলা](USER-GUIDE.bn.md) · [Català](USER-GUIDE.ca.md) · [简体中文](USER-GUIDE.zh-CN.md) · [繁體中文](USER-GUIDE.zh-TW.md) · [Hrvatski](USER-GUIDE.hr.md) · [Čeština](USER-GUIDE.cs.md) · [Nederlands](USER-GUIDE.nl.md) · [English (US)](USER-GUIDE.en-US.md) · [Filipino](USER-GUIDE.tl.md) · [Français](USER-GUIDE.fr.md) · [Deutsch](USER-GUIDE.de.md) · [Ελληνικά](USER-GUIDE.el.md) · [हिन्दी](USER-GUIDE.hi.md) · [Magyar](USER-GUIDE.hu.md) · [Italiano](USER-GUIDE.it.md) · [日本語](USER-GUIDE.ja.md) · [Basa Jawa](USER-GUIDE.jv.md) · [한국어](USER-GUIDE.ko.md) · [Bahasa Melayu](USER-GUIDE.ms.md) · [فارسی](USER-GUIDE.fa.md) · [Polski](USER-GUIDE.pl.md) · [Português (PT)](USER-GUIDE.pt.md) · [ਪੰਜਾਬੀ](USER-GUIDE.pa.md) · [Română](USER-GUIDE.ro.md) · [Русский](USER-GUIDE.ru.md) · [Slovenčina](USER-GUIDE.sk.md) · [Español](USER-GUIDE.es.md) · [Kiswahili](USER-GUIDE.sw.md) · [Svenska](USER-GUIDE.sv.md) · [తెలుగు](USER-GUIDE.te.md) · [ภาษาไทย](USER-GUIDE.th.md) · [Türkçe](USER-GUIDE.tr.md) · [Українська](USER-GUIDE.uk.md) · [Tiếng Việt](USER-GUIDE.vi.md)</small>

<br />

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**目录**

- [开始之前](#before-you-start)
  - [如何获取 API 密钥（桌面应用）](#how-to-get-an-api-key-desktop-app)
- [入门指南](#getting-started)
- [窗口的主要部分](#main-parts-of-the-window)
  - [侧边栏](#sidebar)
  - [工具栏](#toolbar)
  - [输入和输出面板](#input-and-output-panels)
- [翻译](#translate)
  - [翻译文本](#translate-text)
  - [语言选择](#language-selection)
  - [有用的翻译设置](#helpful-translation-settings)
  - [键盘快捷键](#keyboard-shortcuts)
- [改写](#rewrite)
  - [改写文本](#rewrite-text)
- [转换](#transform)
  - [运行现有提示词](#run-an-existing-prompt)
  - [如果还没有提示词](#if-you-have-no-prompts-yet)
  - [快速创建提示词](#create-a-prompt-quickly)
  - [编辑提示词](#edit-a-prompt)
  - [使用前测试提示词](#test-a-prompt-before-using-it)
  - [管理已保存的提示词](#manage-saved-prompts)
- [仪表板](#dashboard)
  - [筛选数据](#filter-the-data)
  - [仪表板选项卡](#dashboard-tabs)
  - [导出数据](#export-data)
  - [删除某个模型的存储记录](#delete-stored-records-for-a-model)
- [设置](#settings)
  - [常规设置](#general-settings)
  - [模型](#models)
  - [语言](#languages)
  - [成本追踪](#cost-tracking)
  - [转换提示词](#transform-prompts)
  - [用户](#users)
  - [API 配置](#api-config)
  - [关于](#about)
- [常见问题](#common-issues)
  - [应用无法翻译、改写或转换文本](#the-app-will-not-translate-rewrite-or-transform-text)
  - [模型列表为空](#the-model-list-is-empty)
  - [结果太慢或太贵](#the-result-is-too-slow-or-too-expensive)
  - [界面语言错误](#the-interface-is-in-the-wrong-language)
  - [文本太小或难以阅读](#the-text-is-too-small-or-hard-to-read)
  - [我修改了提示词并丢失了编辑内容](#i-changed-a-prompt-and-lost-the-edits)
- [快速提示](#quick-tips)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br /><br />

<a id="before-you-start"></a>

## 开始之前

要使用 Transrewrt，你需要通过 OpenRouter 访问 AI 服务。

你无需在选择付费模型后才能开始。该应用始终包含一个内置的**免费**模型，因此对于常规使用来说，这足以开始翻译、重写和转换文本。

通俗来说：

- **模型** 是执行工作的 AI 引擎。
- **API 密钥** 是你访问该服务的个人凭证。

如果你使用的是**桌面应用**，则需要一个 API 密钥。详细步骤请参阅下面的[如何获取 API 密钥](#how-to-get-an-api-key-desktop-app)。简而言之：在 [OpenRouter](https://openrouter.ai) 创建一个账户，打开 [密钥](https://openrouter.ai/keys) 页面，创建一个新密钥，然后将其粘贴到 Transrewrt 的[**设置** > **API 配置**](#api-config)中。

如果你使用的是**网页版**，服务器所有者通常会为你设置好，因此你通常无需自行输入 API 密钥。

<br />

<a id="how-to-get-an-api-key-desktop-app"></a>
### 如何获取 API 密钥（桌面应用）

如果你使用的是桌面应用，请按照以下步骤操作：

1. 在浏览器中访问 [OpenRouter](https://openrouter.ai)。
2. 创建账户或登录。
3. 打开 [密钥](https://openrouter.ai/keys) 页面。
4. 点击按钮创建新的 API 密钥。
5. 为密钥命名，以便以后识别。
6. 复制新的 API 密钥。
7. 返回 Transrewrt 并打开 **设置** > **API 配置**。
8. 将密钥粘贴到 **OpenRouter API 密钥** 中。
9. 点击 **测试 API 配置** 以确保其正常工作。

> ℹ️ **注意**<br/>
> 你可以从 OpenRouter 的免费路由或其他可用的免费模型开始。在许多情况下，这足以开始使用 Transrewrt，而无需选择付费模型。

<br /><br />

<a id="getting-started"></a>
## 快速入门

如果你是首次使用 Transrewrt，请按以下顺序操作：

1. 打开应用。
2. 如有需要，从地球图标选择你的**界面语言**。
3. 如果你使用的是**桌面应用**，请打开[**设置** > **API 配置**](#api-config)，粘贴你的 OpenRouter API 密钥，然后点击 **测试 API 配置**。
4. 打开[**设置** > **模型**](#models)，将一个或多个模型添加到**已选模型**中。
5. 打开[**设置** > **语言**](#languages)，如果你希望最常用的语言排在前面，请选择你的**首选语言**。
6. 转到**翻译**，执行一个简单的翻译以确认一切正常。
7. 一旦成功，尝试**重写**，然后**转换**。

这个顺序很重要。它可以防止最常见的首次使用问题：在应用拥有有效的 API 连接或已选模型之前尝试运行任务。

<br /><br />

<a id="main-parts-of-the-window"></a>
## 窗口的主要部分

该应用分为三个主要区域：

- 左侧的**侧边栏**。
- 顶部的**工具栏**。
- 中央的**工作区**。

<br />

<a id="sidebar"></a>
### 侧边栏

使用侧边栏在应用中导航：

<br />

<table>
  <tr>
    <td valign="top">
       <img src="../images/screenshots/zh-CN/sidebar.png" alt="应用程序侧边栏" style="max-width: 100%; border: 1px solid #ddd; border-radius: 4px;">
    </td>
    <td valign="top">
      <br />
      <ul>
        <li><strong>翻译</strong> 打开翻译工作区。</li>
        <li><strong>重写</strong> 打开重写工作区。</li>
        <li><strong>转换</strong> 打开自定义提示工作区。</li>
        <li><strong>仪表板</strong> 显示使用情况和成本信息。</li>
        <li><strong>设置</strong> 打开设置面板。</li>
        <li><strong>用户</strong> 显示已登录用户的用户名（仅限网页版）。</li>
      </ul>
      <br />
      <p>你还可以通过点击应用图标旁边的图标来折叠侧边栏，以腾出更多空间。</p>
    </td>
  </tr>
</table>

<br />

<a id="toolbar"></a>
### 工具栏

工具栏会根据你在应用中的位置略有变化。

- 左侧显示当前页面名称。
- 右侧显示**模型选择器**和**界面语言**控件。

**模型选择器** 允许你选择用于当前任务的 AI 引擎。

  ![模型选择器](../images/screenshots/zh-CN/model-selector.png)

> ℹ️ **注意**<br/>
> 某些免费模型可能会因不可用或达到使用限制而暂时停止工作。如果发生这种情况，应用会自动将该模型从你的列表中移除。

**地球图标 + 语言代码** 更改应用界面语言，如菜单和按钮。它**不会**更改**翻译**中使用的翻译语言。

  ![界面语言选择器](../images/screenshots/zh-CN/language-selector.png)

<br />

<a id="input-and-output-panels"></a>

### 输入和输出面板

大多数工作区使用左侧的 **输入** 面板和右侧的 **输出** 面板。

**输入** 面板显示：

- 字符数
- 单词数
- 段落数

**输出** 面板可以显示：

- 任务耗时
- 该任务的成本
- 累计总成本
- **词元/秒 (TPS)**，这是一个简单的速度指标
- 字符、单词和段落计数
- 使用的模型

如果您对术语有疑问：

- **词元** 是指一小段文本。您可以将其理解为一个单词的一部分或一个短单词。
- **TPS** 表示模型每秒处理的文本片段数量。

<br /><br />

<a id="translate"></a>
## 翻译

当您想将文本从一种语言转换为另一种语言时，请使用 **翻译**。

![翻译工作区](../images/screenshots/zh-CN/translate.png)

<br />

<a id="translate-text"></a>
### 翻译文本

1. 打开 **翻译**。
2. 在 **源语言** 中选择一种语言。
3. 在 **目标语言** 中选择一种语言。
4. 在工具栏中选择一个模型。
5. 在 **输入** 框中输入或粘贴文本。
6. 点击 **翻译**。
7. 在 **输出** 框中阅读结果。
8. 如果需要，可使用复制按钮复制结果。

<br />

<a id="language-selection"></a>
### 语言选择

- **源语言** 可以是特定语言或 **自动检测语言**。
- **目标语言** 是您希望结果呈现的语言。

您选择的 **常用语言** 会显示在列表顶部。您可以在 [**设置** > **语言**](#languages) 中配置这些语言。

<br />

<a id="helpful-translation-settings"></a>
### 有用的翻译设置

在 [**设置** > **常规设置**](#general-settings) 中，您可以更改翻译行为：

- **粘贴时自动翻译** 会在您粘贴文本后立即运行翻译。
- **自动将结果复制到剪贴板** 会在成功运行后自动复制结果。
- **实时翻译（打字时）** 会在您输入时运行翻译。
- **超时（毫秒）** 控制应用在运行实时翻译前等待的时间。

<br />

<a id="keyboard-shortcuts"></a>
### 键盘快捷键

在 [**设置** > **常规设置**](#general-settings) 中，**Enter 键行为** 控制按下 Enter 键时发生的情况：

- **Enter** 键可运行任务，而 **Shift+Enter** 可添加新行。
- 或者，应用的行为可以相反。

当前快捷键也会显示在 **翻译** 按钮上。

<br /><br />

<a id="rewrite"></a>
## 重写

当您想在不改变核心含义的情况下改进措辞时，请使用 **重写**。

![重写工作区](../images/screenshots/zh-CN/rewrite.png)

这适用于：

- 纠正拼写和语法
- 使文本更清晰
- 使文本更正式或更随意
- 缩短或扩展文本
- 使文本听起来更专业

<br />

<a id="rewrite-text"></a>
### 重写文本

1. 打开 **重写**。
2. 选择一个 **模式**。
3. 在工具栏中选择一个模型。
4. 在 **输入** 框中输入或粘贴文本。
5. 点击 **重写**。
6. 在 **输出** 框中查看结果。

在 [**翻译**](#keyboard-shortcuts) 中描述的相同 Enter 键行为也适用于此处。

<br /><br />

<a id="transform"></a>
## 转换

当您希望 AI 遵循自定义指令集时，请使用 **转换**。

![转换工作区](../images/screenshots/zh-CN/transform.png)

这是应用中最灵活的领域。您可以使用它执行以下任务：

- 总结笔记
- 将草稿文本转换为精美的电子邮件
- 提取关键点
- 将文本转换为特定格式

<br />

<a id="run-an-existing-prompt"></a>
### 运行现有提示

1. 打开 **转换**。
2. 从提示列表中选择一个提示。
3. 如果出现 **目标语言** 框，请选择一种语言（如果需要）。
4. 在 **输入** 框中输入或粘贴文本。
5. 点击 **转换**。
6. 在 **输出** 框中阅读结果。

<br />

<a id="if-you-have-no-prompts-yet"></a>
### 如果您还没有任何提示

如果您的提示列表为空，请点击 **加载示例提示**。这会将内置示例添加进去，以便您可以快速开始。

> ℹ️ **注意**<br/>
> 示例提示以英文提供。加载后，您可以编辑提示，并使用 **翻译提示** 将其适配为其他语言。

<br />

<a id="create-a-prompt-quickly"></a>

### 快速创建提示

创建提示的最快方式：

1. 点击 **新建提示**。
2. 点击 **生成提示**。
3. 描述您希望提示执行的操作。
4. 选择一个模型。
5. 让应用程序为您创建草稿。
6. 查看草稿并点击 **保存**。

![生成提示](../images/screenshots/zh-CN/transform-generate.png)


<br />

### 编辑提示

创建或编辑提示时，编辑器将显示在左侧，测试区域将显示在右侧。

![变换提示编辑器](../images/screenshots/zh-CN/transform-prompt-edit.png)

主要字段包括：

- **提示名称**：在提示列表中显示的名称。
- **提示说明（可选）**：运行提示时向用户显示的简短提示。
- **模型角色**：分配给 AI 的整体角色，例如“你是一个乐于助人的助手。”
- **模型说明（每行一条）**：您希望 AI 遵循的具体规则。
- **输出描述**：描述结果的简短短语，例如“总结”或“重写”。
- **温度值（0.0 → 1.0）**：创造力滑块。
- **要求目标语言**：在运行提示时添加目标语言选择器。

如果您不熟悉 **温度** 这一技术术语，可以这样理解：

- **较低** 的温度会产生更稳定、更可预测的结果。
- **较高** 的温度会产生更多样化和更有创意的结果。

您还可以使用：

- **`生成提示`** 根据简单描述创建新草稿
- **`优化提示`** 改进现有提示
- **`翻译提示`** 翻译提示字段

> ⚠️ **警告**<br/>
> 在点击 **`返回运行`** 之前，请先点击 **`保存`**。如果未保存就返回，您的更改将会丢失。

<br />

<a id="test-a-prompt-before-using-it"></a>
### 使用前测试提示

右侧的测试面板允许您在日常工作使用提示之前，先用示例文本进行尝试。

这在以下情况下非常有用：

- 您正在构建新提示
- 您正在比较提示的两个版本
- 您想检查语气、长度或输出格式

<br />

<a id="manage-saved-prompts"></a>
### 管理已保存的提示

要在一个位置管理已保存的提示，请打开 [**设置** > **变换提示**](#transform-prompts)。

在那里您可以：

- 列出并删除您的提示
- 将提示导出为 **JSON**、**CSV** 或 **XLSX**
- 从文件导入提示

<br /><br />

## 仪表板

使用 **仪表板** 查看您使用应用程序的情况及其相关费用。

![仪表板摘要](../images/screenshots/zh-CN/dashboard-summary.png)

<br />

<a id="filter-the-data"></a>
### 筛选数据

使用顶部的筛选按钮更改时间范围。

![仪表板筛选器](../images/screenshots/zh-CN/dashboard-filter.png)

> ℹ️ **注意**<br/>
> 在网络版本中，管理员可能还会看到 **用户** 筛选器。这允许他们在 **所有用户** 和单个用户之间切换。

<br />

<a id="dashboard-tabs"></a>
### 仪表板选项卡

- **摘要** 提供使用情况和费用的概览。
- **按使用情况** 按翻译语言、重写模式和变换提示细分活动。
- **按模型** 显示您使用的模型及其费用。
- **按日** 显示每日总计。
- **所有调用** 显示完整的调用历史记录并允许您导出。

<br />

<a id="export-data"></a>
### 导出数据

仪表板表格可以以下格式导出数据：

- **JSON**
- **CSV**
- **XLSX**

如果您想在应用程序外查看活动或共享报告，这会很有用。

<br />

<a id="delete-stored-records-for-a-model"></a>
### 删除模型的存储记录

在 **按模型** 或 **所有调用** 中，您可以删除模型的存储记录。

> ⚠️ **警告**<br/>
> 删除存储记录无法撤消。仅当您确定不再需要该历史记录时才使用此功能。

要删除所有数据或根据数据年龄删除记录，请转到 [**设置** > **费用跟踪**](#cost-tracking)。在那里您将找到删除所有存储数据或仅删除特定日期之前的数据的选项。

<br /><br />

<a id="settings"></a>
## 设置

从侧边栏打开 **设置** 以自定义应用程序的行为。

可用的选项卡可能有所不同：

- **API 配置** 仅在桌面应用程序中可用。
- **用户** 仅在 Web 应用程序中可用，且仅对管理员开放。

<br />

<a id="general-settings"></a>

### 通用设置

使用**通用设置**来控制打字行为和外观。

**行为**

- **ENTER 键行为** 选择回车是执行任务还是插入新行。
- **粘贴时自动翻译** 粘贴文本后立即开始翻译。
- **自动将结果复制到剪贴板** 自动复制成功的结果。
- **实时翻译（打字时）** 在打字时进行翻译。
- **超时时间（毫秒）** 设置实时翻译的等待时间。

**外观**

- **成本小数位数** 更改成本小数的显示方式。
- **字体** 更改文本面板中的字体。
- **大小** 更改字体大小。
- **仅限 Web：** **在应用周围显示边距** 在界面周围添加额外空间。

<br />

<a id="models"></a>
### 模型

使用**设置** > **模型** 选择在工具栏中显示的模型。

![设置模型选项卡](../images/screenshots/zh-CN/settings-models.png)

该页面有两个列表：

- 左侧的**可用模型**
- 右侧的**所选模型**

有用的控制包括：

- **搜索模型...** 按名称查找模型
- **仅限免费** 仅显示免费模型
- **刷新** 重新加载列表
- **全部展开** 和 **全部折叠** 当按提供程序排序时

要添加模型，请点击**添加**。

要删除模型，请在**所选模型**中点击其旁边的 **X**。

要清除列表，请点击**取消全选**。所需的免费模型将保留在列表中。

> ℹ️ **注意**<br/>
> 如果您不想立即向 OpenRouter 充值，请先启用**仅限免费**并选择免费模型。

<br />

<a id="languages"></a>
### 语言

使用**设置** > **语言** 组织应用程序中使用的语言列表。

- **常用语言** 固定在**翻译**和**转换**中语言列表的顶部。
- **自定义语言** 让您添加内置列表中不存在的语言。

如果添加自定义语言，它将与内置选项一起出现在语言选择器中。

<br />

<a id="cost-tracking"></a>
### 成本追踪

使用**设置** > **成本追踪** 管理成本信息。

- **总成本** 显示累计总额。
- **复制值** 将总额复制到剪贴板。
- **重置成本** 将存储的总计重置为零。
- **与 API 密钥使用情况同步** 将总额与 OpenRouter 报告的使用情况匹配。
- **API 密钥使用情况** 显示使用详情（如果可用）。
- **删除成本数据** 删除所有数据或仅删除早于选定日期的条目。

> ⚠️ **警告**<br/>
> 数据删除无法撤销。删除前，请确保备份您的数据或通过[**仪表板** > **所有调用**](#dashboard-tabs)导出，否则将永久丢失。

<br />

<a id="transform-prompts"></a>
### 转换提示词

使用**设置** > **转换提示词** 批量管理提示词。

您可以：

- 查看已保存的提示词
- 删除提示词
- 从文件导入提示词
- 导出提示词以进行备份或共享

<br />

<a id="users"></a>
### 用户

**仅限 Web - 仅限管理员**

使用**用户** 管理 Web 版本中的用户帐户。您可以添加用户、更新其详细信息、重置密码和删除帐户。

<br />

<a id="api-config"></a>
### API 配置

**仅限桌面版**

使用 **API 配置** 将桌面应用程序连接到 OpenRouter 或 Transrewrt 代理。

- **OpenRouter API 密钥** 在此处粘贴您的密钥。
- **API URL** 是服务地址。除非您被给予不同的地址，否则保持默认设置。
- **使用 Transrewrt 代理** 通过代理服务路由请求，而不是直接到 OpenRouter。
- **密钥种子** 在启用代理选项时出现。
- **测试 API 配置** 检查当前设置是否正常工作。

有关获取 API 密钥的详细步骤，请参见上面的[如何获取 API 密钥](#how-to-get-an-api-key-desktop-app)。

> ℹ️ **注意**<br/>
> 如果您不确定 **API URL**、**使用 Transrewrt 代理** 或 **密钥种子** 的含义，请保持更改并使用默认的 OpenRouter 设置。有关代理的更多信息，请访问 [Transrewrt Proxy 仓库](https://github.com/wsj-br/transrewrt-proxy)。

<br />

<a id="about"></a>

### 关于

**关于** 选项卡显示：

- 应用名称
- 版本号
- 编译日期
- 项目仓库链接

<br /><br />

<a id="common-issues"></a>
## 常见问题

如果某些功能未按预期运行，请首先检查以下几点。

<br />

<a id="the-app-will-not-translate-rewrite-or-transform-text"></a>
### 应用无法翻译、改写或转换文本

请检查：

- 您是否已在工具栏中选择了一个模型
- [**设置** > **模型**](#models) 中至少列出了一个模型
- 您的 API 设置是否正常工作

如果您使用的是桌面应用：

1. 打开 [**设置** > **API 配置**](#api-config)。
2. 检查您的 API 密钥是否已保存。
3. 点击 **测试 API 配置**。

<br />

<a id="the-model-list-is-empty"></a>
### 模型列表为空

打开 [**设置** > **模型**](#models) 并点击 **刷新**。

如果需要：

- 搜索模型
- 开启 **仅显示免费**
- 将一个或多个模型添加到 **已选模型**

<br />

<a id="the-result-is-too-slow-or-too-expensive"></a>
### 结果太慢或太贵

请尝试以下一项或多项操作：

- 选择不同的模型
- 使用更短的输入
- 在 [**设置** > **常规设置**](#general-settings) 中关闭 **实时翻译（输入时）**
- 对简单任务使用免费模型（请参阅 [模型](#models)）

<br />

<a id="the-interface-is-in-the-wrong-language"></a>
### 界面语言错误

点击 [工具栏](#toolbar) 中的地球图标，选择您偏好的 **界面语言**。

<br />

<a id="the-text-is-too-small-or-hard-to-read"></a>
### 文字太小或难以阅读

打开 [**设置** > **常规设置**](#general-settings) 并更改：

- **字体系列**
- **大小**

<br />

<a id="i-changed-a-prompt-and-lost-the-edits"></a>
### 我更改了提示词并丢失了编辑内容

编辑提示词时，请务必在点击 **返回运行** 之前点击 **保存**。

<br /><br />

<a id="quick-tips"></a>
## 快速提示

- 先从 [**翻译**](#translate) 开始，以确保设置正常工作，然后再进行 [**改写**](#rewrite) 或 [**转换**](#transform)。
- 使用 [**改写**](#rewrite) 进行日常措辞改进。
- 当您需要为特定任务建立可重复的工作流时，请使用 [**转换**](#transform)。
- 如果您想监控使用情况和成本，请使用 [**仪表板**](#dashboard)。
- 如果您要构建并保存提示词库，请定期导出提示词（请参阅 [转换提示词](#transform-prompts)）。

<br /><br />

<a id="disclaimer"></a>
## 免责声明

产品名称和图标归各自所有者所有，仅用于标识目的。本软件与任何提及的品牌均无关联或得到其认可。

<br /><br />

<a id="license"></a>
## 许可证

版权所有 © 2026 Waldemar Scudeller Jr.

[Apache License 2.0](LICENSE)