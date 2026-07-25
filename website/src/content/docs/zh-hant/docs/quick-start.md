---
title: 快速開始
description: 在 Windows 或 Linux 上安裝 Transrewrt，或執行自託管的 Docker 網頁應用程式。
---



選擇適合您的方式。所有方式皆免費且開源 (Apache 2.0)。

## Docker (自託管網頁)

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest

docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e PROVIDER_API_KEY=your-api-key \
  --name transrewrt \
  ghcr.io/wsj-br/transrewrt:latest
```

將 `PROVIDER_API_KEY` 替換為您的供應商變數（例如 `OPENROUTER_API_KEY`、`OPENAI_API_KEY`、`ANTHROPIC_API_KEY`、`XIA_API_KEY`、...）並設定其值。請在[設定](/docs/configuration/#environment-variables-web--docker)中查看完整列表。

然後開啟 [http://localhost:5000](http://localhost:5000) 並在公開服務前**更改預設管理員密碼**。

:::tip
在 Docker 中，LLM 憑證是透過環境變數設定的（例如 `PROVIDER_API_KEY`）。它們 **不**會在 Web UI 中輸入。在桌面版中，請在 **設定 → API 設定** 中設定金鑰。
:::

### Docker Compose

```bash
wget https://github.com/wsj-br/transrewrt/raw/refs/heads/master/production.yml -O transrewrt.yml
# Edit the file to add your API keys, or use a `.env` file. Set TZ if needed.
docker compose -f transrewrt.yml up -d
```

## Windows

1. 從[發行版本](https://github.com/wsj-br/transrewrt/releases)下載最新的 `Transrewrt Setup x.y.z.exe`。
2. 執行安裝程式。
3. 開啟應用程式並在**設定 → API 設定**中輸入 API 金鑰。至少設定一個供應商；OpenRouter 是免費模型的常見選擇。

:::note
安裝應用程式時，Windows 可能會顯示 UAC 或 SmartScreen 警告。如果您是從官方 GitHub Releases 頁面下載，則可以安全安裝。點擊「其他資訊」和「仍要執行」進行安裝。
:::

## Linux

從[發行版本](https://github.com/wsj-br/transrewrt/releases)下載適用於您 CPU 的 `.AppImage` (`x64` 或 `arm64`，包含 Raspberry Pi 4+)：

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

在**設定 → API 設定**中輸入 API 金鑰。

如果 Chromium 輸出 GPU / EGL 錯誤但應用程式運作正常，您可以停用硬體加速：

```bash
TRANSREWRT_DISABLE_GPU=1 ./Transrewrt-x.y.z-arm64.AppImage
```

:::note
目前不支援 macOS。Transrewrt 適用於 Windows、Linux 和 Docker。
:::

## 更新

- **Windows** — 從[發行版本](https://github.com/wsj-br/transrewrt/releases)下載較新的 `Transrewrt Setup x.y.z.exe` 並執行。設定與資料會保留。
- **Linux** — 下載較新的 `.AppImage` 並取代舊檔案。設定與資料會保留。
- **Docker** — 拉取新映像檔並重新建立容器。資料會保存在 `/app/data` 磁碟區中：

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest
docker stop transrewrt && docker rm transrewrt
# then run the same `docker run` command as above
# or, with Docker Compose:
docker compose -f transrewrt.yml pull && docker compose -f transrewrt.yml up -d
```

## 後續步驟

1. [取得 API 金鑰](/docs/api-key/)
2. 執行一次簡單的翻譯以確認一切運作正常
3. 閱讀[翻譯](/docs/translate/)、[重寫](/docs/rewrite/)與[轉換](/docs/transform/)指南
