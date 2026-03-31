---
translation_last_updated: '2026-03-31T22:56:58.987Z'
source_file_mtime: '2026-03-31T22:20:13.182Z'
source_file_hash: bf6416a9ca259a19
translation_language: zh-TW
source_file_path: README.md
---
<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**目錄**

- [螢幕截圖](#screenshots)
- [目錄](#table-of-contents)
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

AI 驅動的文字工具：支援多種語言翻譯、不同風格重寫，以及自訂提示詞轉換 — 使用多種 AI 供應商（OpenRouter、OpenAI、Anthropic、Google Gemini、DeepSeek、Groq、Mistral、xAI 和 local Ollama）。可作為桌面應用程式（Electron）或自託管網頁應用程式（Docker）運行。

- **翻譯** — 支援數十種語言之間的翻譯，並具備自動偵測原始語言功能
- **重寫** — 修正文法、提升清晰度、正式／非正式語氣切換、縮短、擴充、技術性調整
- **轉換** — 自訂 AI 提示詞；建立與管理提示詞，每項提示詞可選擇性設定目標語言
- **歷史** — 完整的執行紀錄，包含輸入／輸出文字、過濾功能與匯出選項
- **模型與費用** — 從任一設定的供應商中選擇模型；提供費用與使用量儀表板，包含日誌、依模型／操作／日期的摘要
- **使用者介面** — 多語言介面（30+ 種語言，支援由右至左顯示）、字型設定等
- **網頁模式** — 支援多使用者與管理員角色
- **桌面版** — 適用於 Windows 和 Linux 的 Electron 應用程式
- **自託管** — 提供 amd64 與 arm64 的 Docker 映像檔（支援 Raspberry Pi）

安裝後，請參閱 **[使用者指南](USER-GUIDE.zh-TW.md)** 以全面了解所有功能。

**以其他語言閱讀：**
[英語（英國）](../README.md) · [葡萄牙語（巴西）](README.pt-BR.md) · [阿拉伯語](README.ar.md) · [孟加拉語](README.bn.md) · [加泰隆尼亞語](README.ca.md) · [簡體中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [克羅埃西亞語](README.hr.md) · [捷克語](README.cs.md) · [荷蘭語](README.nl.md) · [英語（美國）](README.en-US.md) · [菲律賓語](README.tl.md) · [法語](README.fr.md) · [德語](README.de.md) · [希臘語](README.el.md) · [印地語](README.hi.md) · [匈牙利語](README.hu.md) · [義大利語](README.it.md) · [日語](README.ja.md) · [爪哇語](README.jv.md) · [韓語](README.ko.md) · [馬來語](README.ms.md) · [波斯語](README.fa.md) · [波蘭語](README.pl.md) · [葡萄牙語（葡萄牙）](README.pt.md) · [旁遮普語](README.pa.md) · [羅馬尼亞語](README.ro.md) · [俄語](README.ru.md) · [斯洛伐克語](README.sk.md) · [西班牙語](README.es.md) · [斯瓦希里語](README.sw.md) · [瑞典語](README.sv.md) · [泰盧固語](README.te.md) · [泰語](README.th.md) · [土耳其語](README.tr.md) · [烏克蘭語](README.uk.md) · [越南語](README.vi.md)

> **關於使用者介面與文件翻譯的說明：** 除了原始的英語（英國）之外，所有介面語言皆由 AI 模型翻譯；文字可能不精確或包含錯誤。

## 螢幕截圖

**語言選擇器**

語言選擇器

**翻譯**

翻譯

**轉換 - 提示詞編輯器**

轉換 - 提示詞編輯器

**儀表板**

儀表板摘要 — 使用量

**歷史**

歷史

**設定 - 模型選擇**

設定 - 模型選擇

## 目錄

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
- [授權](#license)

## 快速開始

**Docker（推薦用於自托管）**

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest

OPENROUTER_API_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_API_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

將 `sk-or-your-key` 替換為您的 [OpenRouter API 金鑰](https://openrouter.ai/keys)（或設定其他供應商金鑰；請參閱 [設定](#configuration-and-environment)）。開啟 [http://localhost:5000](http://localhost:5000) 並在公開服務前變更預設的管理員密碼。

> ℹ️ **注意**  
>
> 在 Docker 中，LLM 憑證是使用環境變數（例如 `OPENROUTER_API_KEY`、`OPENAI_API_KEY`、`CEREBRAS_API_KEY` 等）設定的（而非在 Web 介面中設定）。在桌面版（Electron）中，您可在 **設定 → API** 中設定金鑰。

**Windows**

從 [發行版本](https://github.com/wsj-br/transrewrt/releases) 下載最新的 `Transrewrt Setup x.y.z.exe`，執行安裝程式，然後從開始功能表或桌面捷徑啟動。在 **設定 → API** 中輸入您的 API 金鑰。您至少需要設定一個供應商，OpenRouter 是免費模型的常見選擇。

**Linux**

從 [發行版本](https://github.com/wsj-br/transrewrt/releases) 下載適用於您 CPU 的 `.AppImage` 檔案（一般 PC 使用 `x64`，許多 ARM 裝置包括 Raspberry Pi 4+ 使用 `arm64`），然後：

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

在 **設定 → API** 中輸入您的 API 金鑰。您至少需要設定一個供應商，OpenRouter 是免費模型的常見選擇。

**主控台訊息：** 封裝的 Linux 版本（`x64` 和 `arm64` AppImages）會在終端機中抑制 Node 的棄用警告（例如內建的 `punycode` 模組）。如果 Chromium 印出 GPU / EGL 錯誤（例如「GLES3 不受支援」），但應用程式仍可正常運作，您可以透過停用硬體加速來消除這些錯誤訊息：

```bash
TRANSREWRT_DISABLE_GPU=1 ./Transrewrt-x.y.z-arm64.AppImage
```

這同樣適用於 amd64；請根據您的下載內容更改檔案名稱。更多細節請參閱 [安裝 → Linux (Electron)](#linux-electron)。

在 Debian/Ubuntu 上，您可能需要額外的 **執行階段** 函式庫，以滿足 Chromium 的需求（通常完整桌面環境已包含）。請使用 **`libnotify4`** 來支援桌面通知——**不要**使用 `libnotify-dev`（那是用於建置軟體，而非執行封裝的 AppImage）：

```bash
sudo apt install libgtk-3-0 libnotify4 libnss3 libxss1 libasound2 libxtst6 xauth
```

最小化或自訂映像可能仍會因缺少 `.so` 檔案而失敗；請安裝錯誤訊息中提到的套件（常見的額外套件：`libatk1.0-0`、`libatk-bridge2.0-0`、`libgbm1`、`libdrm2`）。某些環境需要 FUSE 才能執行 AppImages（例如 Ubuntu 22.04+ 上的 `libfuse2`），或使用 `APPIMAGE_EXTRACT_AND_RUN=1 ./Transrewrt-….AppImage`。

相同摘要請參閱 [安裝 → Linux](#linux-electron)。

> ℹ️ **注意**  
>
> 目前不支援 macOS。Transrewrt 可用於 Windows、Linux 和 Docker。

應用程式啟動後，請參閱 **[使用者指南](USER-GUIDE.zh-TW.md)** 以了解如何翻譯、重寫和轉換文字，管理提示詞，以及設定模型。

## 安裝

### Windows (Electron)

- 從 [發行版本](https://github.com/wsj-br/transrewrt/releases) 下載最新的安裝程式。
- 執行 `.exe` 並依照安裝程式指示操作。
- 首次執行：從開始功能表或桌面捷徑啟動應用程式。

> ℹ️ **注意**  
> 
> Windows 可能會顯示以下其中一個安全性警告（對於未簽署/獨立應用程式來說是正常的）：
> 
> - **使用者帳戶控制 (UAC)**：「您要允許這項來自未知發行者的應用程式對您的裝置進行變更嗎？」→ 按一下 **是**。
> - **Microsoft Defender SmartScreen**：「Windows 保護了您的電腦」→ 按一下 **更多資訊** → **仍然執行**。
> 
> 此情況發生的原因是此應用程式未經 Microsoft 或主要發行者簽署——只要從我們官方的 GitHub 發行版下載即是安全的
> （請驗證下方的 SHA256 校驗碼）。

### Linux (Electron)

- 從 [發行版](https://github.com/wsj-br/transrewrt/releases) 下載對應的 `.AppImage` 檔案（`x64` 或 `arm64`）。
- 執行：在 x86_64/amd64 上使用 `chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage`，在 ARM64 上則使用 `...-arm64.AppImage` 檔名。
- **Debian/Ubuntu 執行階段函式庫**（Electron/Chromium；與 [快速入門 → Linux](#quick-start) 相同）：`sudo apt install libgtk-3-0 libnotify4 libnss3 libxss1 libasound2 libxtst6 xauth` — 請使用 **`libnotify4`**，而非 `libnotify-dev`。在精簡系統上，請安裝終端機中報告缺失的任何 `.so` 檔案；通常需要 `libatk1.0-0`、`libatk-bridge2.0-0`、`libgbm1`、`libdrm2` 等附加元件。AppImage 可能需要 `libfuse2`（Ubuntu 22.04+）或使用 `APPIMAGE_EXTRACT_AND_RUN=1 ./….AppImage`。
- **GPU 訊息**：在某些系統（特別是 ARM）上，Chromium 可能會記錄 GPU 或 EGL 初始化錯誤；應用程式仍可正常運行。若要避免這些訊息，可關閉硬體加速啟動：`TRANSREWRT_DISABLE_GPU=1 ./Transrewrt-x.y.z-x64.AppImage`（或您的 `arm64` 檔名）。

### Docker

- 拉取映像檔：`docker pull ghcr.io/wsj-br/transrewrt:latest`
- 至少設定一個供應商金鑰作為環境變數（例如 OpenRouter 使用 `OPENROUTER_API_KEY`）。使用 `-e` 或 `docker compose` / `.env` 傳遞變數，以避免機密資訊被嵌入映像檔中。
- 供應商金鑰**不需**在 Web 介面中輸入；伺服器會直接從環境變數讀取。

範例 - 使用命名資料卷以保留資料（透過環境變數設定 OpenRouter 金鑰）：

```bash
OPENROUTER_API_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_API_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

或者，若您偏好使用 Docker Compose，請使用：

```
# download the compose file
wget https://github.com/wsj-br/transrewrt/raw/refs/heads/master/production.yml -O transrewrt.yml
# edit the file to add the API_KEYS and adjust the timezone (TZ)
vi transrewrt.yml
# start the container
docker compose -f transrewrt.yml up -d
```

請參閱 [Configuration](#configuration-and-environment) 以取得所有環境變數的詳細資訊，例如 `PORT`、`CONFIG_PATH`、`TZ` 以及 LLM 金鑰（`OPENROUTER_API_KEY`、`OPENAI_API_KEY` 等）。

### 設定時區

應用程式的使用者介面日期與時間會遵循**瀏覽器**的地區與時區設定。對於**伺服器端**的行為（如記錄日誌等），容器則會使用 `TZ` 環境變數。預設值為 `TZ=Europe/London`。

若要使用其他時區，請在您的 Compose 檔案中設定 `TZ`，例如：

```yaml
environment:
  - TZ=America/Sao_Paulo
```

或者在執行容器時傳入（Docker）：

```bash
--env TZ=America/Sao_Paulo
```

在許多 Linux 主機上，您可以使用以下指令複製系統時區名稱：

```bash
echo TZ=\"$(</etc/timezone)\"
```

有效時區名稱列表可於 [tz database](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones)（維基百科）中查閱。

## 取得 OpenRouter API 金鑰

Transrewrt 支援多種 AI 供應商。[OpenRouter](https://openrouter.ai) 是一個熱門選擇，因其整合多種模型於單一金鑰下，並提供免費模型。

1. 前往 [openrouter.ai](https://openrouter.ai) 註冊或登入。
2. 開啟 [Keys](https://openrouter.ai/keys) 頁面並建立新金鑰（可命名，並可選擇設定信用額度上限）。即使不加值，您仍可使用免費模型。
3. **桌面版 (Electron)**：將金鑰貼上至 **設定 → API**。**Docker**：設定環境變數如 `OPENROUTER_API_KEY`（詳見 [快速入門](#quick-start)）。

請勿使用 OpenRouter 的 **Body Builder** 模型（`[openrouter/bodybuilder](https://openrouter.ai/openrouter/bodybuilder)`）進行翻譯、重寫或轉換：它會回傳 JSON 請求載體，而非這些任務所需的完成文字。詳情請見使用者指南中的 [設定 → 模型](USER-GUIDE.zh-TW.md#models)。

您也可以使用其他供應商（OpenAI、Anthropic、Google Gemini、DeepSeek、Groq、Mistral、xAI、Cerebras）或透過 [Ollama](https://ollama.com) 在本地執行模型。完整支援的供應商與環境變數清單請見 [Configuration](#configuration-and-environment)。

> ⚠️ **警告**  
> 
> 如果您從其他裝置、容器或服務使用 Ollama，請記得設定 Ollama 以允許外部連線（不要僅限於 localhost）。

關於限制、BYOK 等更多資訊，請參閱 [OpenRouter 認證](https://openrouter.ai/docs/api/reference/authentication)。

## 設定與環境

**設定檔位置**

| 部署方式         | 設定檔位置                                   |
| ------------------ | ------------------------------------------------- |
| Electron (Windows) | `%APPDATA%\transrewrt\`                           |
| Electron (Linux)   | `~/.config/transrewrt/`                           |
| Web / Docker       | `/app/data/config.json` (請使用 volume 來持久儲存) |

**環境變數** (僅限 Web / Docker；Electron 使用 local 設定檔)

| 變數                 | 預設值                    | 說明                                                                                                                 |
| -------------------- | ----------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| `PORT`               | `5000`                  | 伺服器監聽埠                                                                                                       |
| `CONFIG_PATH`        | `/app/data/config.json` | 設定檔路徑                                                                                                     |
| `TZ`                 | `Europe/London`         | 伺服器端時間的 IANA 時區（用於記錄等）；UI 仍遵循瀏覽器設定。詳見 [Docker → 時區](#docker-timezone) |
| `OPENROUTER_API_KEY` | *(空白)*               | OpenRouter API 金鑰                                                                                                          |
| `OPENAI_API_KEY`     | *(空白)*               | OpenAI API 金鑰                                                                                                              |
| `CEREBRAS_API_KEY`   | *(空白)*               | Cerebras API 金鑰                                                                                                            |
| `ANTHROPIC_API_KEY`  | *(空白)*               | Anthropic API 金鑰                                                                                                           |
| `GOOGLE_API_KEY`     | *(空白)*               | Google Gemini API 金鑰                                                                                                       |
| `DEEPSEEK_API_KEY`   | *(空白)*               | DeepSeek API 金鑰                                                                                                            |
| `GROQ_API_KEY`       | *(空白)*               | Groq API 金鑰                                                                                                                |
| `MISTRAL_API_KEY`    | *(空白)*               | Mistral API 金鑰                                                                                                             |
| `OLLAMA_URL`         | *(空白)*               | Ollama 基本 URL（例如 `http://host.docker.internal:11434`）                                                                  |
| `XAI_API_KEY`        | *(空白)*               | xAI API 金鑰                                                                                                                 |

僅設定您使用的供應商。模型 ID 是命名空間化的（例如 `openrouter/…`、`openai/…`、`cerebras/…`、`ollama/…` 等）。

**費用顯示：** 當適用時，OpenRouter 會回傳確切的計費成本。其他供應商在有 OpenRouter 金鑰時，會使用 OpenRouter 公開模型定價的**估計**成本；若無 OpenRouter 金鑰，非 OpenRouter 的成本可能顯示為 `0`。這些估計值並非正式帳單。

**資料與持久性：** 對於 Docker，請在 `/app/data` 掛載一個 volume，以確保 `config.json` 和 SQLite 資料庫在容器重新啟動時仍能保留。若無 volume，容器停止時所有資料將遺失。

**開發者：** 當拉取取代舊有單一金鑰設定的變更後，若您本地的 `data/config.json` 仍使用已移除的欄位（`api_key`、`api_url`、proxy 選項），請將其重設或合併為 `src/config-defaults/config_default.json` 中的新預設結構。

**Web 認證：**

- 預設管理員：`admin` / `transrewrt26`。
- 在 **設定 → 使用者** 中管理使用者。
- 重設密碼：`docker exec <container> reset-web-password '<username>' '<new-password>'`
  (從原始碼執行：`pnpm run reset-web-password -- <username> <new-password>`)

> ⚠️ **警告**  
>
> 在任何可透過網路存取的主機上，請立即變更預設的管理員密碼。

主要設定（字型、模型、語言等）可在應用程式的「設定」中進行。

## 開發與架構

- **開發：** 設定、建置、測試與部署 (Electron、Web、Docker) - 請參閱 **[dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)**。
- **架構與系統概覽：** 資料夾結構、技術堆疊、設計決策 - 請參閱 **[dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)**。

## 回報問題

在 [GitHub](https://github.com/wsj-br/transrewrt/issues) 上提出問題。請包含您的平台（Windows / Linux / Docker）以及應用程式版本（顯示於「關於」對話框或「發行版本」頁面中）。

## 免責聲明

產品名稱與圖示屬於其各自擁有者，僅供識別用途使用。本軟體未經任何提及品牌之授權或背書。

## 授權條款

版權所有 © 2026 Waldemar Scudeller Jr.

[Apache License 2.0](../LICENSE)
