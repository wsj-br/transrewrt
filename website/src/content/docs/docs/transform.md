---
title: Transform with prompts
description: Run custom AI instructions — create, edit, test, and manage Transform prompts.
---

Use **Transform** when you want the AI to follow custom instructions — summarise, polish an email, extract key points, reformat text, or any workflow you define.

![Transform workspace](/images/screenshots/en-GB/transform.png)

## Run an existing prompt

1. Open **Transform**.
2. Choose a prompt from the list.
3. If a **From** language box appears, set a language if you want one.
4. Type or paste text into **Input**.
5. Click **Transform**.
6. Read the result in **Output**.

## Load sample prompts

If the list is empty, click **Load sample prompts** in the Transform workspace (also available under [Settings → Transform](/docs/settings/#transform)). Samples are in English; after loading, edit a prompt and use **Translate prompt** if needed.

## Create a prompt

1. Click **New prompt**.
2. Click **Generate prompt**.
3. Describe what you want the prompt to do.
4. Choose a preset (Easy) or model (Advanced).
5. Review the draft and click **Save**.

## Edit a prompt

The editor is on the left; a test area is on the right.

![Transform prompt editor](/images/screenshots/en-GB/transform-prompt-edit.png)

Main fields:

- **Prompt name** — shown in the prompt list
- **Prompt instructions (optional)** — short hint when running the prompt
- **Model Role** — overall role for the AI
- **Model Instructions (one per line)** — rules to follow
- **Output description** — short label for the result (e.g. summarised)
- **Temperature (0.0 → 1.0)** — lower is steadier; higher is more varied
- **Ask for target language** — adds a language selector when running

Helpers: **Generate prompt**, **Improve prompt**, **Translate prompt** (Easy uses presets; Advanced uses the model list).

:::caution
Click **Save** before **Back to Run**. Going back without saving discards edits.
:::

## Test before everyday use

Use the right-hand test panel with sample text when building or comparing prompts.

Export and import prompts in bulk under [Settings → Transform](/docs/settings/#transform).

## Next steps

- [Settings](/docs/settings/)
- [Browse History](/docs/history/)
- [Common issues](/docs/common-issues/)
