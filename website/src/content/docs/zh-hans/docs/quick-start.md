---
title: 快速开始
description: 在 Windows 或 Linux 上安装 Transrewrt，或运行自托管的 Docker Web 应用。
---



选择适合你的方式。所有方式均免费且开源（Apache 2.0）。

## Docker（自托管 Web）

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest

PROVIDER_API_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e PROVIDER_API_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

将 `PROVIDER_API_KEY=sk-or-your-key` 替换为您所选提供商的 API 密钥（请在[配置](/docs/configuration/)中查看支持的选项）。

然后打开 [http://localhost:5000](http://localhost:5000)，并在公开服务之前**更改默认管理员密码**。

:::caution
在 Docker 中，LLM 凭据通过环境变量设置（例如 `PROVIDER_API_KEY`）。它们**不会**在 Web UI 中输入。在桌面版中，您可以在**设置 → API**中配置密钥。
:::

### Docker Compose

```bash
wget https://github.com/wsj-br/transrewrt/raw/refs/heads/master/production.yml -O transrewrt.yml
# Edit the file to add your API keys, or use a `.env` file. Set TZ if needed.
docker compose -f transrewrt.yml up -d
```

## Windows

1. 从 [Releases](https://github.com/wsj-br/transrewrt/releases) 下载最新的 `Transrewrt Setup x.y.z.exe`。
2. 运行安装程序。
3. 打开应用并在**设置 → API**中输入 API 密钥。至少配置一个提供商；OpenRouter 是免费模型的常见选择。

:::note
Windows 可能会对未签名的独立开发者应用显示 UAC 或 SmartScreen 警告。请优先从官方 GitHub Releases 页面下载，并在发布时校验校验和。
:::

## Linux

从 [Releases](https://github.com/wsj-br/transrewrt/releases) 下载适合你 CPU 的 `.AppImage`（`x64` 或 `arm64`，包括 Raspberry Pi 4+）：

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

在**设置 → API**中输入 API 密钥。

如果 Chromium 输出 GPU / EGL 错误但应用仍能正常工作，你可以禁用硬件加速：

```bash
TRANSREWRT_DISABLE_GPU=1 ./Transrewrt-x.y.z-arm64.AppImage
```

:::note
目前不支持 macOS。Transrewrt 可在 Windows、Linux 和 Docker 上使用。
:::

## 后续步骤

1. [获取 API 密钥](/docs/api-key/)
2. 运行一次简单的翻译以确认一切正常
3. 阅读 [翻译](/docs/translate/)、[重写](/docs/rewrite/) 和 [转换](/docs/transform/) 指南
