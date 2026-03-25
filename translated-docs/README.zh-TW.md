---
translated_at: "2026-03-25T22:06:12.781Z"
source_hash: "7b3703140b5006a6bfb0700c530b1afcc6e9b0fc364d69c57960ab4609dccbd9"
source_mtime: 1774475429145.525
model: "qwen/qwen3-235b-a22b-2507"
---
<p align="center">
  <img src="../images/transrewrt_logo.svg" alt="Transrewrt 標誌" width="120" />
</p>

<h1 align="center">Transrewrt</h1>

<p align="center">
  <a href="https://github.com/wsj-br/transrewrt/releases"><img src="https://img.shields.io/badge/version-1.0.15-blue" alt="版本"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-Apache%202.0-green" alt="授權：Apache 2.0"></a>
  <img src="https://img.shields.io/badge/platform-Windows%20%7C%20Linux%20%7C%20Docker-lightgrey" alt="平台">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react" alt="React 19">
  <img src="https://img.shields.io/badge/Electron-41-47848F?logo=electron" alt="Electron 41">
</p>

AI 驅動的文字工具：支援多語言翻譯、不同風格重寫，並透過自訂提示進行文字轉換——可搭配多種 AI 提供商（OpenRouter、OpenAI、Anthropic、Google Gemini、DeepSeek、Groq、Mistral、xAI 以及本機 Ollama）。可作為桌面應用程式（Electron）或自建的網路應用程式（Docker）運行。

- **翻譯** — 在數十種語言之間互相翻譯，並自動偵測來源語言
- **重寫** — 修正文法、提升清晰度、正式／非正式語氣轉換、縮短、擴展、技術性轉換
- **轉換** — 自訂 AI 提示；建立與管理提示，每個提示可選擇目標語言
- **歷史記錄** — 完整的執行歷史，包含輸入／輸出文字、篩選功能與匯出功能
- **模型與成本** — 從任一設定的提供者中選擇模型；具備成本與使用量儀表板，可依模型、操作、日期查看日誌與摘要
- **使用者介面** — 多語言介面（超過 30 種語言，支援由右至左顯示 RTL）、字型等
- **網頁模式** — 支援多用戶與管理員角色
- **桌面版** — Windows 與 Linux 平台的 Electron 應用程式
- **自建部署** — 提供 amd64 與 arm64（支援 Raspberry Pi）的 Docker 映像檔

安裝完成後，請參閱 **[使用者指南](USER-GUIDE.zh-TW.md)**，全面了解所有功能的使用方式。

<small>**以其他語言閱讀：** [English (UK)](../README.md) · [Português (BR)](README.pt-BR.md) · [العربية](README.ar.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [Hrvatski](README.hr.md) · [Čeština](README.cs.md) · [Nederlands](README.nl.md) · [English (US)](README.en-US.md) · [Filipino](README.tl.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [हिन्दी](README.hi.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [Basa Jawa](README.jv.md) · [한국어](README.ko.md) · [Bahasa Melayu](README.ms.md) · [فارسی](README.fa.md) · [Polski](README.pl.md) · [Português (PT)](README.pt.md) · [ਪੰਜਾਬੀ](README.pa.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [Slovenčina](README.sk.md) · [Español](README.es.md) · [Kiswahili](README.sw.md) · [Svenska](README.sv.md) · [తెలుగు](README.te.md) · [ภาษาไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Tiếng Việt](README.vi.md)</small>

<small>

> **關於介面與文件翻譯的說明：** 除了原始英文（英國）之外，所有介面語言皆由 AI 模型翻譯而成，文字表述可能不精確或含有錯誤。

</small>

<br/>

<a id="screenshots"></a>
## 截圖

**語言選擇器**

![語言選擇器](../images/screenshots/zh-TW/language-selector.png)

**翻譯**

![翻譯](../images/screenshots/zh-TW/translate.png)

**轉換 - 提示編輯器**

![轉換 - 提示編輯器](../images/screenshots/zh-TW/transform-prompt-edit.png)

**儀表板**

![成本儀表板](../images/screenshots/zh-TW/dashboard-summary.png)

**歷史記錄**

![歷史記錄](../images/screenshots/zh-TW/history.png)

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
- [版本釋出與標籤](#releases-and-tags)
- [貢獻方式](#contributing)
- [免責聲明](#disclaimer)
- [授權條款](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="quick-start"></a>
## 快速開始

**Docker（建議用於自我託管）**

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest

OPENROUTER_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

將 `sk-or-your-key` 替換為您的 [OpenRouter API 金鑰](https://openrouter.ai/keys)（或設定其他供應商的金鑰；詳見 [設定](#configuration-and-environment)）。開啟 [http://localhost:5000](http://localhost:5000) 並在公開服務前變更預設管理員密碼。

<br/>

> ℹ️ **注意**<br/>
> 在 Docker 中，LLM 憑證是透過 `OPENROUTER_KEY`、`OPENAI_KEY`、`CEREBRAS_KEY` 等環境變數設定（而非在 Web UI 中設定）。在桌面端（Electron）中，您可在 **設定 → API** 中設定金鑰。

<br/>

**Windows**

從 [版本釋出頁面](https://github.com/wsj-br/transrewrt/releases) 下載最新的 `Transrewrt Setup x.y.z.exe`，執行安裝程式，然後透過開始功能表或桌面捷徑啟動。在 **設定 → API** 中輸入您的 API 金鑰。您至少需設定一個供應商，OpenRouter 是免費模型的常見選擇。

<br/>

**Linux**

從 [版本釋出頁面](https://github.com/wsj-br/transrewrt/releases) 下載適合您 CPU 的 `.AppImage` 檔案（一般 PC 使用 `x64`，許多 ARM 裝置包括 Raspberry Pi 4+ 使用 `arm64`），然後執行：

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

在 **設定 → API** 中輸入您的 API 金鑰。您至少需設定一個供應商，OpenRouter 是免費模型的常見選擇。

在 Debian/Ubuntu 中，您可能需要先安裝額外依賴：

```bash
sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth
```

詳情請見 [安裝 → Linux](#linux-electron)。

<br/>

> ℹ️ **注意**<br/>
> macOS 目前不受支援。Transrewrt 可用於 Windows、Linux 和 Docker。

<br/>

應用程式啟動後，請參閱 **[使用者指南](USER-GUIDE.zh-TW.md)** 以學習如何翻譯、改寫和轉換文字、管理提示詞、設定模型等操作。

<br/><br/>

<a id="installation"></a>
## 安裝

<a id="windows-electron"></a>
### Windows (Electron)

- 從 [版本釋出頁面](https://github.com/wsj-br/transrewrt/releases) 下載最新安裝程式。
- 執行 `.exe` 檔案並依照安裝程式指示操作。
- 首次執行：透過開始功能表或桌面捷徑啟動應用程式。

<br/>

<a id="linux-electron"></a>
### Linux (Electron)

- 從 [版本釋出頁面](https://github.com/wsj-br/transrewrt/releases) 下載對應的 `.AppImage` 檔案（`x64` 或 `arm64`）。
- 執行：在 x86_64/amd64 上使用 `chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage`，在 ARM64 上使用 `...-arm64.AppImage` 檔名。
- 風險依賴（Debian/Ubuntu）：`sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth`
- 更多資訊請見 [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)。

<br/>

<a id="docker"></a>
### Docker

- 拉取映像檔：`docker pull ghcr.io/wsj-br/transrewrt:latest`
- 透過環境變數設定至少一個供應商金鑰（例如 OpenRouter 使用 `OPENROUTER_KEY`）。使用 `-e` 或 `docker compose` / `.env` 傳遞變數，以避免將機密資訊嵌入映像檔中。
- **不會**在 Web UI 中輸入供應商金鑰；伺服器會直接從環境變數讀取。

範例 - 使用命名資料夾以保留資料（透過環境變數提供 OpenRouter 金鑰）：

```bash
OPENROUTER_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

<br/>

| 選項      | 說明                                                                                                   |
| -------- | ------------------------------------------------------------------------------------------------------------- |
| 通訊埠     | `5000`（使用 `-p 5000:5000` 對應）                                                                              |
| 資料夾     | 掛載 `/app/data` 以持久儲存設定與資料庫                                                         |
| 環境變數 | `PORT`、`CONFIG_PATH` 及 LLM 金鑰（`OPENROUTER_KEY`、`OPENAI_KEY`、…） - 詳見 [設定](#configuration-and-environment) |

如需從原始碼建置並執行：使用 `docker compose up --build -d` 或 `pnpm docker:up` - 請見 [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)。

<br/><br/>

<a id="getting-an-openrouter-api-key"></a>

## 取得 OpenRouter API 金鑰

Transrewrt 支援多種 AI 服務供應商。[OpenRouter](https://openrouter.ai) 是一個熱門選擇，因為它將多種模型整合在單一金鑰下，並提供免費可用的模型。

1. 前往 [openrouter.ai](https://openrouter.ai) 註冊帳號或登入。
2. 打開 [金鑰頁面](https://openrouter.ai/keys) 並建立新金鑰（為其命名，也可選擇設定信用額度上限）。即使不添加信用額度，您仍可使用免費模型。
3. **桌面版 (Electron)：** 在 **設定 → API** 中貼上金鑰。**Docker 版：** 設定環境變數，例如 `OPENROUTER_KEY`（參見 [快速開始](#quick-start)）。

請勿使用 OpenRouter 的 **Body Builder** 模型（[`openrouter/bodybuilder`](https://openrouter.ai/openrouter/bodybuilder)）來進行翻譯、重寫或轉換作業：該模型僅回傳 JSON 請求載體，而非這些任務所需的完成文字。詳情請見使用者指南中的 [設定 → 模型](USER-GUIDE.zh-TW.md#models)。

您也可以使用其他供應商（如 OpenAI、Anthropic、Google Gemini、DeepSeek、Groq、Mistral、xAI、Cerebras），或使用 [Ollama](https://ollama.com) 在本機執行模型。完整支援的供應商列表與環境變數，請見下方 [設定與環境](#configuration-and-environment)。

> ⚠️ **警告**<br/>
> 若您從其他裝置、容器或服務使用 Ollama，請記得設定 Ollama 以允許外部連線（不能僅限於 localhost）。

關於額度限制、BYOK 等更多資訊，請參見 [OpenRouter 驗證文件](https://openrouter.ai/docs/api/reference/authentication)。

<br/><br/>

<a id="configuration-and-environment"></a>
## 設定與環境

**設定檔位置**

| 部署方式         | 設定檔位置                                   |
| ------------------ | ------------------------------------------------- |
| Electron (Windows) | `%APPDATA%\transrewrt\`                           |
| Electron (Linux)   | `~/.config/transrewrt/`                           |
| 網頁版 / Docker    | `/app/data/config.json` （建議使用資料卷以保留資料） |

<br/>

**環境變數**（僅限網頁版 / Docker 使用；Electron 使用本機設定檔）

| 變數名稱         | 預設值                 | 說明 |
| ---------------- | ----------------------- | ----------- |
| `PORT`           | `5000`                  | 伺服器監聽埠號 |
| `CONFIG_PATH`    | `/app/data/config.json` | 設定檔路徑 |
| `OPENROUTER_KEY` | *(空白)*               | OpenRouter API 金鑰 |
| `OPENAI_KEY`     | *(空白)*               | OpenAI API 金鑰 |
| `CEREBRAS_KEY`   | *(空白)*               | Cerebras API 金鑰 |
| `ANTHROPIC_KEY`  | *(空白)*               | Anthropic API 金鑰 |
| `GOOGLE_KEY`     | *(空白)*               | Google Gemini API 金鑰 |
| `DEEPSEEK_KEY`   | *(空白)*               | DeepSeek API 金鑰 |
| `GROQ_KEY`       | *(空白)*               | Groq API 金鑰 |
| `MISTRAL_KEY`    | *(空白)*               | Mistral API 金鑰 |
| `OLLAMA_URL`     | *(空白)*               | Ollama 基底 URL（例如 `http://host.docker.internal:11434`） |
| `XAI_KEY`        | *(空白)*               | xAI API 金鑰 |

僅需設定您實際使用的供應商。模型 ID 使用命名空間（`openrouter/…`、`openai/…`、`cerebras/…`、`ollama/…` 等）。

**費用顯示：** OpenRouter 會在適用時回傳實際計費金額。其他供應商在有設定 OpenRouter 金鑰的情況下，會使用 OpenRouter 公開的模型定價計算**估算費用**；若未設定 OpenRouter 金鑰，非 OpenRouter 服務的費用可能顯示為 `0`。這些估算僅供參考，並非正式帳單。

<br/>

**資料與持久化：** 使用 Docker 時，請將資料卷掛載於 `/app/data`，以確保 `config.json` 和 SQLite 資料庫在容器重新啟動後仍然保留。若未使用資料卷，容器停止時所有資料都將遺失。

**開發人員注意：** 若拉取的更新取代了舊的單一金鑰設定，且您的本機 `data/config.json` 仍使用已移除的欄位（如 `api_key`、`api_url`、proxy 選項），請重設或將 `data/config.json` 與 `src/config-defaults/config_default.json` 中的新預設結構合併。

<br/>

**網頁端驗證：**

- 預設管理員帳號：`admin` / `transrewrt26`。
- 可於 **設定 → 使用者** 中管理使用者。
- 重設密碼指令：`docker exec <container> reset-web-password '<username>' '<new-password>'`  
  （從原始碼執行：`pnpm run reset-web-password -- <username> <new-password>`）

<br/>

> ⚠️ **警告**<br/>
> 請立刻更改任何可從網路存取的主機上的預設管理員密碼。

<br/>

主要設定項目（字型、模型、語言等）均可在應用程式的「設定」中調整。

<br/><br/>

<a id="development-and-architecture"></a>

## 開發與架構

- **開發：** 設定、建置、測試與部署（Electron、Web、Docker）－請見 **[dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)**。
- **架構與系統概述：** 資料夾結構、技術堆疊、設計決策－請見 **[dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)**。

<br/><br/>

<a id="releases-and-tags"></a>
## 版本發布與標籤

- **Git 標籤** `v`*（例如 `v1.0.10`）會觸發 [發行流程](.github/workflows/release.yml)。**GitHub Releases** 會附加 Windows 安裝程式（`.exe`）和 Linux AppImages（**x64** 與 **arm64**）。
- **Docker 映像檔** 發布至 `ghcr.io/wsj-br/transrewrt`。映像檔標籤對應 Git 版本（例如 `v1.0.10` → `ghcr.io/wsj-br/transrewrt:1.0.10`）以及 `latest`。支援多種架構：`linux/amd64` 與 `linux/arm64`（例如 Raspberry Pi）。

<br/><br/>

<a id="contributing"></a>
## 貢獻方式

1. 分叉此倉儲。
2. 建立功能分支：`git checkout -b feature/my-feature`
3. 提交變更時附上清楚的訊息。
4. 推送並針對 `main` 分支建立拉取請求（Pull Request）。

請遵循現有的程式碼風格，並在提交前於 Electron 和網頁模式下測試您的變更。建置與測試步驟詳見 [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)。

<br/>

**回報問題：** 請於 [GitHub](https://github.com/wsj-br/transrewrt/issues) 上建立問題回報。請提供您的平台資訊（Windows / Linux / Docker）以及應用程式版本（可於「關於」對話框或「版本發布」頁面中查看）。

<br/><br/>

<a id="disclaimer"></a>
## 免責聲明

產品名稱與圖示皆歸其各自所有者所有，僅供識別用途。本軟體與所述任何品牌均無關聯，亦未經其認可。

<br/><br/>

<a id="license"></a>
## 授權條款

著作權 © 2026 Waldemar Scudeller Jr.

[Apache 授權條款 2.0 版](LICENSE)