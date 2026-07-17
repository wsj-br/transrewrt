---
title: 快速開始
description: 在 Windows 或 Linux 上安裝 Transrewrt，或執行自行託管的 Docker 網頁應用程式。
translation_last_updated: '2026-07-17T21:14:43.935Z'
source_file_mtime: '2026-07-17T14:55:54.211Z'
source_file_hash: 6eb0ab579b445d9c4d39567ef44ee3333f57285c5c2b8dd072de6355182f849f
translation_language: zh-Hant
source_file_path: src/content/docs/docs/quick-start.md
translation_models:
  - z-ai/glm-5.2
---



選擇適合您的方式。所有方式均為免費且開源 (Apache 2.0)。

## Docker (自行託管網頁)

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest

PROVIDER_API_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e PROVIDER_API_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

將 `PROVIDER_API_KEY=sk-or-your-key` 替換為您所選供應商的 API 金鑰（請參閱[設定](/docs/configuration/)中的支援選項）。

然後開啟 [http://localhost:5000](http://localhost:5000) 並在公開服務前 **變更預設管理員密碼**。

:::caution
在 Docker 中，LLM 憑證是透過環境變數設定的（例如 `PROVIDER_API_KEY`）。它們 **不會** 在網頁 UI 中輸入。在桌面版中，您可以在 **設定 → API** 中設定金鑰。
:::

### Docker Compose

```bash
wget https://github.com/wsj-br/transrewrt/raw/refs/heads/master/production.yml -O transrewrt.yml
# Edit the file to add your API keys, or use a `.env` file. Set TZ if needed.
docker compose -f transrewrt.yml up -d
```

## Windows

1. 從 [Releases](https://github.com/wsj-br/transrewrt/releases) 下載最新的 `Transrewrt Setup x.y.z.exe`。
2. 執行安裝程式。
3. 開啟應用程式並在 **設定 → API** 中輸入 API 金鑰。至少設定一個供應商；OpenRouter 是免費模型的常見選擇。

:::note
Windows 可能會針對未簽署的獨立應用程式顯示 UAC 或 SmartScreen 警告。請優先從官方 GitHub Releases 頁面下載，並在發佈時驗證總和檢查碼。
:::

## Linux

從 [Releases](https://github.com/wsj-br/transrewrt/releases) 下載適用於您 CPU 的 `.AppImage` (`x64` 或 `arm64`，包含 Raspberry Pi 4+)：

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

在 **設定 → API** 中輸入 API 金鑰。

如果 Chromium 輸出 GPU / EGL 錯誤但應用程式仍能運作，您可以停用硬體加速：

```bash
TRANSREWRT_DISABLE_GPU=1 ./Transrewrt-x.y.z-arm64.AppImage
```

:::note
目前不支援 macOS。Transrewrt 適用於 Windows、Linux 和 Docker。
:::

## 後續步驟

1. [取得 API 金鑰](/docs/api-key/)
2. 執行簡單的翻譯以確認一切運作正常
3. 閱讀[翻譯](/docs/translate/)、[改寫](/docs/rewrite/)與[轉換](/docs/transform/)指南
