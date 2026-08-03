---
title: 快速开始
description: 在 Windows 或 Linux 上安装 Transrewrt，或运行 Docker Web 应用。
---



选择适合你的方式。所有方式均免费且开源（Apache 2.0）。

## Docker（Web 应用）

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest

docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e PROVIDER_API_KEY=your-api-key \
  --name transrewrt \
  ghcr.io/wsj-br/transrewrt:latest
```

将 `PROVIDER_API_KEY` 替换为你的提供商对应的变量（例如 `OPENROUTER_API_KEY`、`OPENAI_API_KEY`、`ANTHROPIC_API_KEY`、`XIA_API_KEY` 等），并设置其值。完整列表请参见[配置](/docs/configuration/#environment-variables-web--docker)。

然后打开 [http://localhost:5000](http://localhost:5000)，在公开服务之前**修改默认管理员密码**。

:::tip
在 Docker 中，LLM 凭据通过环境变量设置（例如 `PROVIDER_API_KEY`）。它们**不**在 Web UI 中输入。在桌面版中，您可以在**设置 → API 配置**中配置密钥。
:::

### Docker Compose

```bash
wget https://github.com/wsj-br/transrewrt/raw/refs/heads/master/production.yml -O transrewrt.yml
# Edit the file to add your API keys, or use a `.env` file. Set TZ if needed.
docker compose -f transrewrt.yml up -d
```

## Windows

1. 从[发布页面](https://github.com/wsj-br/transrewrt/releases)下载最新的 `Transrewrt Setup x.y.z.exe`。
2. 运行安装程序。
3. 打开应用并在**设置 → API 配置**中输入 API 密钥。至少配置一个提供商；OpenRouter 是获取免费模型的常用选择。

:::note
安装本应用时，Windows 可能会显示 UAC 或 SmartScreen 警告。如果您是从官方 GitHub Releases 页面下载的，则可以放心安装。请点击"更多信息"和"仍然运行"以完成安装。
:::

## Linux

从[发布页面](https://github.com/wsj-br/transrewrt/releases)下载适合你 CPU 的 `.AppImage`（`x64` 或 `arm64`，包括 Raspberry Pi 4+）：

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

在**设置 → API 配置**中输入 API 密钥。

如果 Chromium 输出 GPU / EGL 错误但应用仍能正常运行，你可以禁用硬件加速：

```bash
TRANSREWRT_DISABLE_GPU=1 ./Transrewrt-x.y.z-arm64.AppImage
```

:::note
目前不支持 macOS。Transrewrt 可在 Windows、Linux 和 Docker 上使用。
:::

## 更新

- **Windows** — 从[发布页面](https://github.com/wsj-br/transrewrt/releases)下载较新的 `Transrewrt Setup x.y.z.exe` 并运行。设置和数据会保留。
- **Linux** — 下载较新的 `.AppImage` 并替换旧文件。设置和数据会保留。
- **Docker** — 拉取新镜像并重新创建容器。数据保存在 `/app/data` 卷中：

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest
docker stop transrewrt && docker rm transrewrt
# then run the same `docker run` command as above
# or, with Docker Compose:
docker compose -f transrewrt.yml pull && docker compose -f transrewrt.yml up -d
```

## 后续步骤

1. [获取 API 密钥](/docs/api-key/)
2. 运行一次简单的翻译以确认一切正常
3. 阅读[翻译](/docs/translate/)、[改写](/docs/rewrite/)和[转换](/docs/transform/)指南
