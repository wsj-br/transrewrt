---
title: 使用提示词转换
description: 运行自定义 AI 指令——创建、编辑、测试和管理转换提示词。
---



当你希望 AI 遵循自定义指令时，请使用 **Transform**——总结、润色电子邮件、提取要点、重新排版文本，或任何你定义的工作流。

![转换工作区](/images/screenshots/zh-Hans/transform.png)

## 运行现有提示词

1. 打开 **Transform**。
2. 从列表中选择一个提示词。
3. 如果出现 **From** 语言框，请根据需要设置一种语言。
4. 在 **Input** 中输入或粘贴文本。
5. 点击 **Transform**。
6. 在 **Output** 中查看结果。

[布局切换和键盘快捷键](/docs/translate/#layout-and-keyboard) 的使用方式与翻译相同。

## 加载示例提示词

如果列表为空，请在转换工作区中点击 **Load sample prompts**（也可在 [设置 → 转换](/docs/settings/#transform) 中找到）。示例为英文；加载后，如有需要，可编辑提示词并使用 **Translate prompt**。

## 创建提示词

1. 点击 **New prompt**。
2. 点击 **Generate prompt**。
3. 描述你希望该提示词执行的操作。
4. 选择预设（简易）或模型（高级）。
5. 查看草稿并点击 **Save**。

## 编辑提示词

编辑器位于左侧；测试区位于右侧。

![转换提示词编辑器](/images/screenshots/zh-Hans/transform-prompt-edit.png)

主要字段：

- **Prompt name** —— 显示在提示词列表中
- **Prompt instructions (optional)** —— 运行提示词时的简短提示
- **Model Role** —— AI 的整体角色
- **Model Instructions (one per line)** —— 要遵循的规则
- **Output description** —— 结果的简短标签（例如：已总结）
- **Temperature (0.0 → 1.0)** —— 越低越稳定；越高越发散
- **Ask for target language** —— 运行时添加语言选择器

辅助工具：**Generate prompt**、**Improve prompt**、**Translate prompt**（简易使用预设；高级使用模型列表）。

:::caution
在 **Back to Run** 之前点击 **Save**。未保存返回将丢弃编辑内容。
:::

## 日常使用前测试

在构建或比较提示词时，使用右侧的测试面板和示例文本。

在[设置 → 转换](/docs/settings/#transform)下批量导出和导入提示词。

## 后续步骤

- [设置](/docs/settings/)
- [浏览历史](/docs/history/)
- [常见问题](/docs/common-issues/)
