---
translated_at: "2026-03-29T01:54:33.976Z"
source_hash: "f26a12ca888393b55a064bfcf8fe2b74a425c383f1ad6f7ecbb32b67b7c9f897"
source_mtime: "2026-03-29T01:54:18.655Z"
model: "qwen/qwen3-235b-a22b-2507"
---
<p align="center">
  <img src="../images/transrewrt_banner.png" alt="Transrewrt 標語"  />
</p>

<p align="center">
  <a href="https://github.com/wsj-br/transrewrt/releases"><img src="https://img.shields.io/badge/version-1.1.1-blue" alt="版本"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-Apache%202.0-green" alt="授權: Apache 2.0"></a>
  <img src="https://img.shields.io/badge/platform-Windows%20%7C%20Linux%20%7C%20Docker-lightgrey" alt="平台">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react" alt="React 19">
  <img src="https://img.shields.io/badge/Electron-41-47848F?logo=electron" alt="Electron 41">
</p>

AI 驅動的文字工具：支援多語言翻譯、不同風格改寫，以及透過自訂提示進行文字轉換，並可使用多個 AI 提供商（OpenRouter、OpenAI、Anthropic、Google Gemini、DeepSeek、Groq、Mistral、xAI 以及本地 Ollama）。可作為桌面應用程式（Electron）或自行託管的網頁應用程式（Docker）運行。

- **翻譯** — 支援數十種語言之間的互譯，具備自動偵測來源語言功能
- **重寫** — 修正文法、提升清晰度、調整正式/非正式語氣、縮短或擴展內容、技術性轉換
- **轉換** — 自訂 AI 提示；可建立與管理提示，並可為每個提示選擇目標語言
- **歷史記錄** — 完整的執行歷史，包含輸入/輸出文字、過濾功能與匯出選項
- **模型與成本** — 從任何設定的供應商中選擇模型；提供成本與使用量儀表板，包含按模型/操作/日期的紀錄與彙總
- **使用者介面** — 多語言介面（支援30多種語言，包含由右至左顯示），字型設定等
- **網頁模式** — 支援多使用者，具備管理員角色功能
- **桌面應用** — 適用於 Windows 與 Linux 的 Electron 應用程式
- **自架部署** — 提供 amd64 與 arm64（支援 Raspberry Pi）的 Docker 映像檔

安裝完成後，請參閱 **[使用者指南](USER-GUIDE.zh-TW.md)** 以取得所有功能的完整操作說明。

<small id="lang-list"> [English (UK)](../README.md) · [Português (BR)](README.pt-BR.md) · [العربية](README.ar.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [Hrvatski](README.hr.md) · [Čeština](README.cs.md) · [Nederlands](README.nl.md) · [English (US)](README.en-US.md) · [Filipino](README.tl.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [हिन्दी](README.hi.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [Basa Jawa](README.jv.md) · [한국어](README.ko.md) · [Bahasa Melayu](README.ms.md) · [فارسی](README.fa.md) · [Polski](README.pl.md) · [Português (PT)](README.pt.md) · [ਪੰਜਾਬੀ](README.pa.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [Slovenčina](README.sk.md) · [Español](README.es.md) · [Kiswahili](README.sw.md) · [Svenska](README.sv.md) · [తెలుగు](README.te.md) · [ภาษาไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Tiếng Việt](README.vi.md)</small>

<small id="lang-list"> [English (UK)](../README.md) · [Português (BR)](README.pt-BR.md) · [العربية](README.ar.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [Hrvatski](README.hr.md) · [Čeština](README.cs.md) · [Nederlands](README.nl.md) · [English (US)](README.en-US.md) · [Filipino](README.tl.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [हिन्दी](README.hi.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [Basa Jawa](README.jv.md) · [한국어](README.ko.md) · [Bahasa Melayu](README.ms.md) · [فارسی](README.fa.md) · [Polski](translated-docs/READM

E.pl.md) · [葡萄牙文 (PT)](README.pt.md) · [旁遮普語](README.pa.md) · [羅馬尼亞文](README.ro.md) · [俄文](README.ru.md) · [斯洛伐克文](README.sk.md) · [西班牙文](README.es.md) · [斯瓦希里文](README.sw.md) · [瑞典文](README.sv.md) · [泰盧固文](README.te.md) · [泰文](README.th.md) · [土耳其文](README.tr.md) · [烏克蘭文](README.uk.md) · [越南文](README.vi.md)</small>

<small>

> **關於介面與文件翻譯的注意事項：** 除了原始英文（英國）以外，所有介面語言皆使用人工智慧模型翻譯，因此用詞可能不夠精確或包含錯誤。

</small>

<br/>

<a id="screenshots"></a>

## 畫面截圖

**語言選擇器**

![語言選擇器](../images/screenshots/zh-TW/language-selector.png)

**翻譯**

![翻譯](../images/screenshots/zh-TW/translate.png)

**轉換 - 提示編輯器**

![轉換 - 提示編輯器](../images/screenshots/zh-TW/transform-prompt-edit.png)

**儀表板**

![儀表板摘要 — 使用量](../images/screenshots/zh-TW/dashboard-summary.png)

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
  - [設定時區](#configuring-the-timezone)
- [取得 OpenRouter API 金鑰](#getting-an-openrouter-api-key)
- [設定與環境](#configuration-and-environment)
- [開發與架構](#development-and-architecture)
- [回報問題](#reporting-issues)
- [免責聲明](#disclaimer)
- [授權條款](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="quick-start"></a>

## 快速開始

**Docker（推薦用於自行架設）**

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest

OPENROUTER_API_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_API_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

將 `sk-or-your-key` 取代為您的 [OpenRouter API 金鑰](https://openrouter.ai/keys)（或設定其他提供商的金鑰；參見[設定與環境](#configuration-and-environment)）。開啟 [http://localhost:5000](http://localhost:5000) 並在公開服務之前變更預設的管理員密碼。

<br/>

> ℹ️ **注意**<br/>
> 在 Docker 中，LLM 憑證需透過環境變數設定，例如 `OPENROUTER_API_KEY`、`OPENAI_API_KEY`、`CEREBRAS_API_KEY` 等（不在網頁介面中設定）。若使用桌面版（Electron），您需於 **設定 → API** 中設定金鑰。

<br/>

**Windows**

從 [Releases](https://github.com/wsj-br/transrewrt/releases) 下載最新的 `Transrewrt Setup x.y.z.exe`，執行安裝程式，然後透過開始功能表或桌面捷徑啟動。於 **設定 → API** 中輸入您的 API 金鑰。您至少需要設定一個服務提供者，OpenRouter 是免費模型的常見選擇。

<br/>

**Linux**

從 [Releases](https://github.com/wsj-br/transrewrt/releases) 下載適用於您 CPU 的 `.AppImage` 檔案（普通電腦選擇 `x64`，許多 ARM 裝置如 Raspberry Pi 4 以上則選擇 `arm64`），然後執行：

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

於 **設定 → API** 中輸入您的 API 金鑰。您至少需要設定一個服務提供者，OpenRouter 是免費模型的常見選擇。

在 Debian/Ubuntu 系統上，您可能需要先安裝額外的依賴套件：

```bash
sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth
```

詳細資訊請參閱 [安裝 → Linux](#linux-electron)。

<br/>

> ℹ️ **注意**<br/>

> 目前不支援 macOS。Transrewrt 可用於 Windows、Linux 和 Docker。

<br/>

應用程式啟動後，請參閱 **[使用者指南](USER-GUIDE.zh-TW.md)**，了解如何翻譯、重寫和轉換文字，管理提示詞，以及設定模型。

<br/><br/>

<a id="installation"></a>

## 安裝

<a id="windows-electron"></a>

### Windows (Electron)

- 從 [發行版本](https://github.com/wsj-br/transrewrt/releases) 下載最新的安裝程式。
- 執行 `.exe` 檔案並按照安裝精靈的指示進行安裝。
- 首次執行：從開始功能表或桌面捷徑啟動應用程式。

<br/>

> ℹ️ **注意**<br/>
> Windows 可能會顯示以下其中一種安全性警告（對於未簽署或獨立開發的應用程式屬正常現象）：
>   - **使用者帳戶控制 (UAC)**：「您要允許這項未知發行者應用程式對您的裝置進行變更嗎？」→ 點選 **是**。
>   - **Microsoft Defender SmartScreen**：「Windows 保護了您的電腦」→ 點選 **更多資訊** → **仍要執行**。
>
> 此情況發生的原因是該應用程式未經 Microsoft 或主要發行商簽署 — 只要從我們官方的 GitHub 發行版本下載即是安全的
> （請驗證下方的 SHA256 校驗碼）。

<br/>

<a id="linux-electron"></a>

### Linux（Electron）

- 從 [Releases](https://github.com/wsj-br/transrewrt/releases) 下載對應的 `.AppImage` 檔案（`x64` 或 `arm64`）。
- 執行：在 x86_64/amd64 上使用 `chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage`，或在 ARM64 上使用 `...-arm64.AppImage` 檔名。
- 额外依賴套件（Debian/Ubuntu）：`sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth`
- 更多資訊請參閱 [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)。

<br/>

<a id="docker"></a>

### Docker

- 拉取映像：`docker pull ghcr.io/wsj-br/transrewrt:latest`
- 透過環境變數設定至少一個供應商金鑰（例如，OpenRouter 使用 `OPENROUTER_API_KEY`）。使用 `-e` 參數或 `docker compose` / `.env` 檔案傳遞變數，以確保密鑰不會被嵌入映像中。
- **不需**在 Web 介面中輸入供應商金鑰；伺服器會直接從環境變數讀取。

範例 — 使用命名資料卷以持久儲存（透過環境變數設定 OpenRouter 金鑰）：

```bash
OPENROUTER_APIMargins=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_API_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

或者，若您偏好使用 Docker Compose，請使用以下指令：

```
# 下載 compose 檔案
wget https://github.com/wsj-br/transrewrt/raw/refs/heads/master/production.yml -O transrewrt.yml
# 編輯檔案以加入 API_KEYS 並調整時區 (TZ)
vi transrewrt.yml
# 啟動容器
docker compose -f transrewrt.yml up -d

請參閱[設定](#configuration-and-environment)以取得所有環境變數的詳細資訊，例如 `PORT`、`CONFIG_PATH`、`TZ` 以及 LLM 金鑰（`OPENROUTER_API_KEY`、`OPENAI_API_KEY` 等）。

<a id="configuring-the-timezone"></a>

### 設定時區

應用程式的使用者介面日期與時間遵循**瀏覽器**的地區設定與時區。至於**伺服器端**的行為（如記錄等），容器則使用 `TZ` 環境變數。預設值為 `TZ=Europe/London`。

若要使用其他時區，可以在您的 Compose 檔案中設定 `TZ`，例如：

```yaml
environment:
  - TZ=America/Sao_Paulo
```

或者在執行容器時傳入該變數（Docker）：

```bash
--env TZ=America/Sao_Paulo
```

在許多 Linux 主機上，您可以使用以下指令複製系統時區名稱：

```bash
echo TZ=\"$(</etc/timezone)\"
```

有效的時區名稱清單維護於 [tz 資料庫](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones)（維基百科）。

<br/><br/>

<a id="getting-an-openrouter-api-key"></a>

## 取得 OpenRouter API 金鑰

Transrewrt 支援多種 AI 服務供應商。[OpenRouter](https://openrouter.ai) 是一個熱門的選擇，因為它將多種模型整合於單一金鑰之下，並提供免費使用的模型。

1. 前往 [openrouter.ai](https://openrouter.ai) 註冊或登入。
2. 打開 [金鑰頁面](https://openrouter.ai/keys) 並建立新的金鑰（可命名，並可選擇性設定信用額度）。使用免費模型時，無需添加信用點數。
3. **桌面版 (Electron)：** 在 **設定 → API** 中貼上金鑰。**Docker 版：** 請設定環境變數，例如 `OPENROUTER_API_KEY`（參見 [快速開始](#quick-start)）。

請勿使用 OpenRouter 的 **Body Builder** 模型（[`openrouter/bodybuilder`](https://openrouter.ai/openrouter/bodybuilder)）來進行翻譯、改寫或轉換：該模型僅回傳 JSON 請求內容，而非任務所需的完成文本。詳情請見使用者指南中的 [設定 → 模型](USER-GUIDE.zh-TW.md#models)。

您也可以使用其他提供商（OpenAI、Anthropic、Google Gemini、DeepSeek、Groq、Mistral、xAI、Cerebras）或使用 [Ollama](https://ollama.com) 在本機執行模型。完整支援的提供商清單及環境變數設定請見[設定](#configuration-and-environment)。

> ⚠️ **警告**<br/>
> 若您正從另一裝置、容器或服務使用 Ollama，請記得設定 Ollama 以允許外部連線（不可僅限於本機連線）。

關於使用限制、自攜金鑰（BYOK）等更多資訊，請參閱 [OpenRouter 身分驗證](https://openrouter.ai/docs/api/reference/authentication)。

<br/><br/>

<a id="configuration-and-environment"></a>

## 設定與環境

**設定檔位置**

| 部署方式          | 設定檔位置                                      |
| ----------------- | ----------------------------------------------- |
| Electron (Windows) | `%APPDATA%\transrewrt\`                         |
| Electron (Linux)   | `~/.config/transrewrt/`                         |
| 網頁版 / Docker    | `/app/data/config.json` (請使用儲存體來保留資料) |

<br/>

**環境變數**（僅限網頁版／Docker 版；Electron 使用本地設定檔）

| 變數 | 預設值 | 說明 |
| ---- | ------ | ---- |
| `PORT` | `5000` | 伺服器監聽埠號 |
| `CONFIG_PATH` | `/app/data/config.json` | 設定檔路徑 |
| `TZ` | `Europe/London` | 伺服器端 IANA 時區（用於記錄等）；使用者介面仍遵循瀏覽器時區。詳見 [Docker → 時區](#docker-timezone) |
| `OPENROUTER_API_KEY` | *(空)* | OpenRouter API 金鑰 |
| `OPENAI_API_KEY` | *(空)* | OpenAI API 金鑰 |
| `CEREBRAS_API_KEY` | *(空)* | Cerebras API 金鑰 |
| `ANTHROPIC_API_KEY` | *(空)* | Anthropic API 金鑰 |
| `GOOGLE_API_KEY` | *(空)* | Google Gemini API 金鑰 |
| `DEEPSEEK_API_KEY` | *(空)* | DeepSeek API 金鑰 |
| `GROQ_API_KEY` | *(空)* | Groq API 金鑰 |
| `MISTRAL_API_KEY` | *(空)* | Mistral API 金鑰 |
| `OLLAMA_URL` | *(空)* | Ollama 基本 URL（例如 `http://host.docker.internal:11434`） |
| `XAI_API_KEY` | *(空)* | xAI API 金鑰 |

僅設定您使用的提供者。模型 ID 具有命名空間（例如 `openrouter/...`、`openai/...`、`cerebras/...`、`ollama/...` 等）。

**費用顯示：** OpenRouter 在適用情況下會回傳確切的計費金額。其他提供者若具有 OpenRouter 金鑰，則使用 OpenRouter 公開模型定價的**估算**成本；若無 OpenRouter 金鑰，非 OpenRouter 的成本可能會顯示為 `0`。這些估算並非正式發票。

<br/>

**資料與持續性：** 使用 Docker 時，請在 `/app/data` 掛載一個儲存區，以確保 `config.json` 與 SQLite 資料庫能在容器重啟時持續保留。若未使用儲存區，當容器停止時所有資料將遺失。

**開發人員注意：** 當您拉取取代舊有單一金鑰設定的變更後，若您本機的設定檔案仍使用已移除的欄位（如 `api_key`、`api_url`、proxy 選項），請將 `data/config.json` 重新設定或合併為 `src/config-defaults/config_default.json` 中的新預設結構。

<br/>

**網頁驗證：**

- 預設管理員：`admin` / `transrewrt26`。
- 可於 **設定 → 使用者** 中管理使用者。

- 重設密碼：`docker exec <容器> reset-web-password '<使用者名稱>' '<新密碼>'`  
  （從原始碼執行：`pnpm run reset-web-password -- <使用者名稱> <新密碼>`）

<br/>

> ⚠️ **警告**<br/>
> 請立即變更任何可從網路存取的主機上的預設管理員密碼。

<br/>

主要設定（字型、模型、語言等）均可於應用程式的「設定」中進行調整。

<br/><br/>

<a id="development-and-architecture"></a>

## 開發與架構

- **開發：** 設定、建置、測試與部署（Electron、Web、Docker）— 請參閱 **[dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)**。
- **架構與系統概覽：** 資料夾結構、技術堆疊、設計決策 — 請參閱 **[dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)**。

<br/><br/>

<a id="reporting-issues"></a>

## 問題回報

請在 [GitHub](https://github.com/wsj-br/transrewrt/issues) 上提報問題。請註明您的平台（Windows / Linux / Docker）以及應用程式版本（可在「關於」對話框或「發行版本」頁面中找到）。

<br/><br/>

<a id="disclaimer"></a>

## 免責聲明

產品名稱和圖示歸其各自所有者所有，僅供辨識之用。本軟體與任何上述提及的品牌無關聯，亦未獲得其認可。

<br/><br/>

<a id="license"></a>

## 授權條款

版權所有 © 2026 Waldemar Scudeller Jr.

[Apache 授權條款 2.0 版](LICENSE)