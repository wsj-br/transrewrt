---
translated_at: "2026-03-24T01:08:08.367Z"
source_hash: "718acd12f14755cd75ebf7d09b86d9a1df37ebe1898710080fa8e80c1221d58b"
source_mtime: 1774311390366.3484
model: "qwen/qwen3-235b-a22b-2507"
---
<p align="center">
  <img src="../images/transrewrt_logo.svg" alt="Transrewrt 標誌" width="120" />
</p>

<h1 align="center">Transrewrt</h1>

<p align="center">
  <a href="https://github.com/wsj-br/transrewrt/releases"><img src="https://img.shields.io/badge/version-1.0.14-blue" alt="版本"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-Apache%202.0-green" alt="授權：Apache 2.0"></a>
  <img src="https://img.shields.io/badge/platform-Windows%20%7C%20Linux%20%7C%20Docker-lightgrey" alt="平台">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react" alt="React 19">
  <img src="https://img.shields.io/badge/Electron-41-47848F?logo=electron" alt="Electron 41">
</p>

AI 驅動的文字工具：支援多語言翻譯、不同風格的改寫，以及自訂提示變換內容——可使用多種 AI 供應商（OpenRouter、OpenAI、Anthropic、Google Gemini、DeepSeek、Groq、Mistral、xAI 和本地 Ollama）。可作為桌面應用程式（Electron）或自行託管的網頁應用程式（Docker）運行。

- **翻譯** — 支援數十種語言之間的翻譯，具備自動偵測原始語言功能
- **改寫** — 修正文法、提升清晰度、正式／非正式轉換、縮短、擴展、技術性調整
- **變換** — 自訂 AI 提示；可建立與管理提示，每項提示可選特定目標語言
- **歷史紀錄** — 完整的操作紀錄包含輸入／輸出文字，支援篩選與匯出
- **模型與成本** — 從任何設定的供應商中選擇模型；具備成本儀表板與 SQLite 日誌，依模型／操作／每日彙總
- **使用者介面** — 多語系介面（30+ 種語言，支援由右至左顯示）、字型等
- **網頁模式** — 支援多用戶與管理員角色；API 金鑰儲存於伺服器端，不會暴露至瀏覽器
- **桌面應用** — 適用於 Windows 和 Linux 的 Electron 應用程式
- **自行託管** — 支援 amd64 與 arm64 的 Docker 映像（適用於 Raspberry Pi）

安裝後，請參閱 **[使用者指南](USER-GUIDE.zh-TW.md)** 以獲得所有功能的詳細說明。

<small>**以其他語言閱讀：** [English (UK)](README.zh-TW.md) · [Português (BR)](README.pt-BR.md) · [العربية](README.ar.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [Hrvatski](README.hr.md) · [Čeština](README.cs.md) · [Nederlands](README.nl.md) · [English (US)](README.en-US.md) · [Filipino](README.tl.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [हिन्दी](README.hi.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [Basa Jawa](README.jv.md) · [한국어](README.ko.md) · [Bahasa Melayu](README.ms.md) · [فارسی](README.fa.md) · [Polski](README.pl.md) · [Português (PT)](README.pt.md) · [ਪੰਜਾਬੀ](README.pa.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [Slovenčina](README.sk.md) · [Español](README.es.md) · [Kiswahili](README.sw.md) · [Svenska](README.sv.md) · [తెలుగు](README.te.md) · [ภาษาไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Tiếng Việt](README.vi.md)</small>

<br/>

**關於介面與文件翻譯的說明：** 除英文（英國）外，所有介面語言均由 AI 模型翻譯；措辭可能不精確或含有錯誤。

<a id="screenshots"></a>
## 截圖

**語言選擇器**

![語言選擇器](../images/screenshots/zh-TW/language-selector.png)

**翻譯**

![翻譯](../images/screenshots/zh-TW/translate.png)

**變換 - 提示編輯器**

![變換 - 提示編輯器](../images/screenshots/zh-TW/transform-prompt-edit.png)

**儀表板**

![成本儀表板](../images/screenshots/zh-TW/dashboard-summary.png)

**歷史紀錄**

![歷史紀錄](../images/screenshots/zh-TW/history.png)

**設定 - 模型選擇**

![設定 - 模型選擇](../images/screenshots/zh-TW/settings-models.png)

<br/><br/>

<a id="table-of-contents"></a>

## 目錄

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [快速開始](#quick-start)
- [安裝](#installation)
  - [Windows (Electron)](#windows-electron)
  - [Linux (Electron)](#linux-electron)
  - [Docker](#docker)
- [取得 OpenRouter API 金鑰](#getting-an-openrouter-api-key)
- [設定與環境](#configuration-and-environment)
- [開發與架構](#development-and-architecture)
- [版本發布與標籤](#releases-and-tags)
- [貢獻方式](#contributing)
- [免責聲明](#disclaimer)
- [授權條款](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="quick-start"></a>
## 快速開始

**Docker（推薦用於自行託管）**

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest

OPENROUTER_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

將 `sk-or-your-key` 取代為您的 [OpenRouter API 金鑰](https://openrouter.ai/keys)（或設定其他提供者的金鑰；詳見[設定](#configuration-and-environment)）。開啟 [http://localhost:5000](http://localhost:5000) 並在公開服務前更改預設的管理員密碼。

<br/>

> ℹ️ **注意**<br/>
> 在 Docker 中，LLM 憑證需透過 `OPENROUTER_KEY`、`OPENAI_KEY` 等環境變數設定（而非在 Web 介面中）。在桌面版（Electron）中，您可在 **設定 → API** 中設定金鑰。

<br/>

**Windows**

從 [Releases](https://github.com/wsj-br/transrewrt/releases) 下載最新的 `Transrewrt Setup x.y.z.exe`，執行安裝程式，然後從開始功能表或桌面捷徑啟動。在 **設定 → API** 中輸入您的 API 金鑰。您至少需要設定一個提供者，其中 OpenRouter 是免費模型常見的選擇。

<br/>

**Linux**

從 [Releases](https://github.com/wsj-br/transrewrt/releases) 下載 `.AppImage` 檔案，然後執行：

```bash
chmod +x Transrewrt-x.y.z.AppImage && ./Transrewrt-x.y.z.AppImage
```

在 **設定 → API** 中輸入您的 API 金鑰。您至少需要設定一個提供者，其中 OpenRouter 是免費模型常見的選擇。

在 Debian/Ubuntu 上，您可能需要先安裝額外的依賴套件：

```bash
sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth
```

詳細資訊請見 [安裝 → Linux](#linux-electron)。

<br/>

> ℹ️ **注意**<br/>
> 目前不支援 macOS。Transrewrt 僅支援 Windows、Linux 和 Docker。

<br/>

應用程式啟動後，請參閱 **[使用者指南](USER-GUIDE.zh-TW.md)** 以了解如何翻譯、重寫與轉換文字、管理提示詞（prompts）以及設定模型。

<br/><br/>

<a id="installation"></a>
## 安裝

<a id="windows-electron"></a>
### Windows (Electron)

- 從 [Releases](https://github.com/wsj-br/transrewrt/releases) 下載最新的安裝程式。
- 執行 `.exe` 檔並依照安裝指示操作。
- 首次執行：從開始功能表或桌面捷徑啟動應用程式。

<br/>

<a id="linux-electron"></a>
### Linux (Electron)

- 從 [Releases](https://github.com/wsj-br/transrewrt/releases) 下載 `.AppImage` 檔案。
- 執行：`chmod +x Transrewrt-x.y.z.AppImage && ./Transrewrt-x.y.z.AppImage`
- 風險依賴項目（Debian/Ubuntu）：`sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth`
- 更多資訊請見 [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)。

<br/>

<a id="docker"></a>
### Docker

- 拉取映像檔：`docker pull ghcr.io/wsj-br/transrewrt:latest`
- 至少透過環境變數設定一個提供者金鑰（例如 OpenRouter 的 `OPENROUTER_KEY`）。使用 `-e` 或 `docker compose` / `.env` 傳遞變數，以避免將機密資訊固化到映像檔中。
- 提供者金鑰 **不會** 在 Web 介面中輸入；伺服器會直接從環境變數讀取。

範例 - 使用命名卷保持資料（透過環境變數提供 OpenRouter 金鑰）：

```bash
OPENROUTER_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

<br/>

| 選項 | 說明 |
| ---- | ---- |
| 埠號 | `5000`（使用 `-p 5000:5000` 進行映射） |
| 卷冊 | 掛載 `/app/data` 以持久保存設定與資料庫 |
| 環境變數 | `PORT`、`CONFIG_PATH` 及 LLM 金鑰（`OPENROUTER_KEY`、`OPENAI_KEY` 等）— 詳見 [設定](#configuration-and-environment) |

若要從原始碼建置並執行：`docker compose up --build -d` 或 `pnpm docker:up` — 請參閱 [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)。

<br/><br/>

<a id="getting-an-openrouter-api-key"></a>

## 取得 OpenRouter API 金鑰

Transrewrt 支援多種 AI 服務提供者。[OpenRouter](https://openrouter.ai) 是一個熱門選擇，因為它能透過單一金鑰整合多個模型，並提供免費模型。

1. 前往 [openrouter.ai](https://openrouter.ai) 註冊或登入。
2. 打開 [Keys](https://openrouter.ai/keys) 頁面並建立新的金鑰（可命名，並選擇性設定信用額度上限）。使用免費模型時無需加值。
3. **桌面版 (Electron)**：在 **設定 → API** 中貼上金鑰。**Docker**：設定如 `OPENROUTER_KEY` 的環境變數（參見 [快速開始](#quick-start)）。

您也可使用其他服務提供者（如 OpenAI、Anthropic、Google Gemini、DeepSeek、Groq、Mistral、xAI），或透過 [Ollama](https://ollama.com) 在本地執行模型。完整的支援提供者與環境變數列表，請見 [設定](#configuration-and-environment)。

關於使用限制、BYOK 等更多資訊，請參閱 [OpenRouter 認證文件](https://openrouter.ai/docs/api/reference/authentication)。

<br/><br/>

<a id="configuration-and-environment"></a>
## 設定與環境

**設定檔位置**

| 部署方式         | 設定檔位置                                   |
| ------------------ | ------------------------------------------------- |
| Electron (Windows) | `%APPDATA%\transrewrt\`                           |
| Electron (Linux)   | `~/.config/transrewrt/`                           |
| Web / Docker       | `/app/data/config.json` （建議使用 volume 持久儲存） |

<br/>

**環境變數**（僅限 Web / Docker；Electron 使用本機設定檔）

| 變數             | 預設值                  | 說明 |
| ---------------- | ----------------------- | ----------- |
| `PORT`           | `5000`                  | 伺服器監聽埠號 |
| `CONFIG_PATH`    | `/app/data/config.json` | 設定檔路徑 |
| `OPENROUTER_KEY` | *(空)*                  | OpenRouter API 金鑰 |
| `OPENAI_KEY`     | *(空)*                  | OpenAI API 金鑰 |
| `ANTHROPIC_KEY`  | *(空)*                  | Anthropic API 金鑰 |
| `GOOGLE_KEY`     | *(空)*                  | Google Gemini API 金鑰 |
| `DEEPSEEK_KEY`   | *(空)*                  | DeepSeek API 金鑰 |
| `GROQ_KEY`       | *(空)*                  | Groq API 金鑰 |
| `MISTRAL_KEY`    | *(空)*                  | Mistral API 金鑰 |
| `OLLAMA_URL`     | *(空)*                  | Ollama 基本 URL（例如 `http://host.docker.internal:11434`） |
| `XAI_KEY`        | *(空)*                  | xAI API 金鑰 |

僅需設定您實際使用的服務提供者。模型 ID 採用命名空間格式（`openrouter/…`、`openai/…`、`ollama/…` 等）。

**成本顯示說明**：OpenRouter 在適用情況下會提供實際計費金額。其他提供者則會在存在 OpenRouter 金鑰時，依據 OpenRouter 的公開模型定價顯示**估算成本**；若無 OpenRouter 金鑰，非 OpenRouter 服務的成本可能顯示為 `0`。這些數值僅供估算，非正式帳單。

<br/>

**資料與持久性**：使用 Docker 時，請掛載 `/app/data` 的 volume，以確保 `config.json` 和 SQLite 資料庫能在容器重啟後保留。若未使用 volume，容器停止時所有資料將遺失。

**開發者注意**：若更新後的程式碼取代了舊版的單一金鑰設定，且您的本機 `data/config.json` 仍使用已移除的欄位（如 `api_key`、`api_url`、proxy 選項），請將 `data/config.json` 重設或合併為 `src/config-defaults/config_default.json` 中提供的新預設結構。

<br/>

**網頁驗證（Web authentication）**：

- 預設管理員帳號： `admin` / `transrewrt26`。
- 可於 **設定 → 使用者** 中管理使用者。
- 重設密碼指令：`docker exec <container> reset-web-password '<username>' '<new-password>'`  
  （若從原始碼執行：`pnpm run reset-web-password -- <username> <new-password>`）

<br/>

> ⚠️ **警告**<br/>
> 在任何可透過網路存取的主機上，請立即變更預設管理員密碼。

<br/>

主要設定（字型、模型、語言等）均可於應用程式的「設定」中進行調整。

<br/><br/>

<a id="development-and-architecture"></a>
## 開發與架構

- **開發相關**：安裝、建置、測試與部署（Electron、Web、Docker）－詳見 **[dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)**。
- **架構與系統概覽**：資料夾結構、技術堆疊、設計決策－詳見 **[dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)**。

<br/><br/>

<a id="releases-and-tags"></a>

## 發行版本與標籤

- **Git 標籤** `v`*（例如 `v1.0.10`）將觸發[發行工作流程](.github/workflows/release.yml)。**GitHub 發行版本**會附加 Windows 安裝程式（`.exe`）和 Linux AppImage。
- **Docker 映像檔**將發佈至 `ghcr.io/wsj-br/transrewrt`。映像標籤會與 Git 版本對應（例如 `v1.0.10` → `ghcr.io/wsj-br/transrewrt:1.0.10`），另包含 `latest` 標籤。支援多種架構：`linux/amd64` 和 `linux/arm64`（如 Raspberry Pi）。

<br/><br/>

<a id="contributing"></a>
## 貢獻方式

1. 先複製此儲存庫。
2. 建立功能分支：`git checkout -b feature/my-feature`
3. 提交變更時請附上清晰的訊息。
4. 推送並針對 `main` 分支建立拉取請求（Pull Request）。

提交前請遵循現有的程式碼風格，並在 Electron 和網頁模式下測試您的變更。建置與測試說明，請參見 [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)。

<br/>

**回報問題**：請至 [GitHub](https://github.com/wsj-br/transrewrt/issues) 開啟問題回報。請註明您的平台（Windows / Linux / Docker）以及應用程式版本（可在「關於」對話框或發行頁面中找到）。

<br/><br/>

<a id="disclaimer"></a>
## 免責聲明

產品名稱與圖示屬於各自所有者，僅用於識別目的。本軟體與所提及的任何品牌均無隸屬關係，亦未獲其認可。

<br/><br/>

<a id="license"></a>
## 授權條款

Copyright © 2026 Waldemar Scudeller Jr.

[Apache 授權條款 2.0](LICENSE)