---
translation_last_updated: '2026-04-02T12:38:54.454Z'
source_file_mtime: '2026-04-02T12:36:37.805Z'
source_file_hash: 0826245f792850f3
translation_language: zh-TW
source_file_path: README.md
---
<p align="center">
  <img src="../images/transrewrt_banner.png" alt="Transrewrt Banner"  />
</p>

<p align="center">
  <a href="https://github.com/wsj-br/transrewrt/releases"><img src="https://img.shields.io/badge/version-1.1.1-blue" alt="版本"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-Apache%202.0-green" alt="授權：Apache 2.0"></a>
  <img src="https://img.shields.io/badge/platform-Windows%20%7C%20Linux%20%7C%20Docker-lightgrey" alt="平台">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react" alt="React 19">
  <img src="https://img.shields.io/badge/Electron-41-47848F?logo=electron" alt="Electron 41">
</p>

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

<small>**以其他語言閱讀：** </small>
<small id="lang-list">[English (UK)](../README.md) · [Português (BR)](README.pt-BR.md) · [العربية](README.ar.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [Hrvatski](README.hr.md) · [Čeština](README.cs.md) · [Nederlands](README.nl.md) · [English (US)](README.en-US.md) · [Filipino](README.tl.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [हिन्दी](README.hi.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [Basa Jawa](README.jv.md) · [한국어](README.ko.md) · [Bahasa Melayu](README.ms.md) · [فارسی](README.fa.md) · [Polski](README.pl.md) · [Português (PT)](README.pt.md) · [ਪੰਜਾਬੀ](README.pa.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [Slovenčina](README.sk.md) · [Español](README.es.md) · [Kiswahili](README.sw.md) · [Svenska](README.sv.md) · [తెలుగు](README.te.md) · [ภาษาไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Tiếng Việt](README.vi.md)</small>

<small>

> **關於使用者介面與文件翻譯的說明：** 除了原始的英語（英國）之外，所有介面語言皆由 AI 模型翻譯；文字可能不精確或包含錯誤。

</small>

<br/>

<a id="table-of-contents"></a>
## 目錄

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [螢幕截圖](#screenshots)
- [快速入門](#quick-start)
- [取得 OpenRouter API 金鑰](#getting-an-openrouter-api-key)
- [設定與環境](#configuration-and-environment)
- [開發與架構](#development-and-architecture)
- [回報問題](#reporting-issues)
- [免責聲明](#disclaimer)
- [授權條款](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="screenshots"></a>
## 截圖

**語言選擇器**

![Language selector](../images/screenshots/zh-TW/language-selector.png)

**翻譯**

![Translate](../images/screenshots/zh-TW/translate.png)

**轉換 - 提示詞編輯器**

![Transform - prompt editor](../images/screenshots/zh-TW/transform-prompt-edit.png)

**儀表板**

![Dashboard summary — usage](../images/screenshots/zh-TW/dashboard-summary.png)

**歷史**

![History](../images/screenshots/zh-TW/history.png)

**設定 - 模型選擇**

![Settings - model selection](../images/screenshots/zh-TW/settings-models.png)

<br/><br/>

<a id="quick-start"></a>
## 快速開始

<details>
<summary><b>Docker（推薦用於自行託管）</b></summary>

<a id="docker"></a>

<br/>

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

至少透過環境變數設定一個供應商金鑰（例如 OpenRouter 的 `OPENROUTER_API_KEY`）。使用 `-e` 或 `docker compose` / `.env` 傳遞變數，以確保機密不會被嵌入映像中。**不會**在 Web 介面中輸入供應商金鑰；伺服器會從環境中讀取它們。

<br/>

> ℹ️ **注意**<br/>
> 在 Docker 中，LLM 憑證是透過環境變數（例如 `OPENROUTER_API_KEY`、`OPENAI_API_KEY`、`CEREBRAS_API_KEY` 等）設定的（不在網頁介面中設定）。在桌面端（Electron）中，您可以在 **設定 → API** 中設定金鑰。

<br/>

或使用 Docker Compose：

```
# download the compose file
wget https://github.com/wsj-br/transrewrt/raw/refs/heads/master/production.yml -O transrewrt.yml
# Edit the file to add your API keys (API_KEYs), or uncomment and adjust the `.env` file. Set the timezone (TZ) if necessary.
vi transrewrt.yml
# start the container
docker compose -f transrewrt.yml up -d
```

請參閱 [Configuration](#configuration-and-environment) 以取得所有環境變數的詳細資訊，例如 `PORT`、`CONFIG_PATH`、`TZ` 以及 LLM 金鑰（`OPENROUTER_API_KEY`、`OPENAI_API_KEY` 等）。

</details>

<br/>

<details>
<summary><b>伺服器時區（Docker）</b></summary>

<a id="configuring-the-timezone"></a>

<br/>

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

</details>

<br/>

<details>
<summary><b>Windows</b></summary>

<a id="windows-electron"></a>

<br/>

- 從 [發行版本](https://github.com/wsj-br/transrewrt/releases) 下載最新的 `Transrewrt Setup x.y.z.exe`。
- 執行 `.exe` 並依照安裝程式指示操作。
- 首次執行：從「開始」功能表或桌面捷徑啟動應用程式。
- 在 **設定 → API** 中輸入您的 API 金鑰。您需要至少設定一個供應商；OpenRouter 是免費模型的常見選擇。

<br/>

> ℹ️ **注意**<br/>
> Windows 可能會顯示以下其中一個安全性警告（對於未簽署/獨立應用程式屬正常現象）：
>   - **使用者帳戶控制 (UAC)**：「您要允許這個來自未知發行者的應用程式對您的裝置進行變更嗎？」→ 按一下 **是**。
>   - **Microsoft Defender SmartScreen**：「Windows 保護了您的電腦」→ 按一下 **更多資訊** → **仍然執行**。
>
> 此情況發生是因為該應用程式未經 Microsoft 或主要發行者簽署——只要從我們官方的 GitHub 發行版本下載即屬安全（請在 [發行版本](https://github.com/wsj-br/transrewrt/releases) 頁面驗證每個資源旁的校驗和）。

<br/>

</details>

<br/>

<details>
<summary><b>Linux</b></summary>

<a id="linux-electron"></a>

<br/>

從 [發行版本](https://github.com/wsj-br/transrewrt/releases) 下載適用於您 CPU 的 `.AppImage` 檔案（一般 PC 使用 `x64`，許多 ARM 裝置包括 Raspberry Pi 4+ 使用 `arm64`），然後：

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

在 x86_64/amd64 上使用 `x64` 檔名；在 ARM64 上使用 `...-arm64.AppImage` 檔名。

在 **設定 → API** 中輸入您的 API 金鑰。您需要至少設定一個供應商；OpenRouter 是免費模型的常見選擇。

**主控台訊息：** 封裝的 Linux 版本（`x64` 和 `arm64` AppImages）會在終端機中抑制 Node 的棄用警告（例如內建的 `punycode` 模組）。如果 Chromium 印出 GPU / EGL 錯誤（例如「GLES3 不受支援」），但應用程式仍可正常運作，您可以透過停用硬體加速來消除這些錯誤訊息：

```bash
TRANSREWRT_DISABLE_GPU=1 ./Transrewrt-x.y.z-arm64.AppImage
```

這也適用於 amd64；請根據您的下載更改檔名。

在 Debian/Ubuntu 上，您可能需要額外的 **執行階段** 函式庫（由 Chromium 所需；這些通常已存在於完整的桌面安裝中）。如有需要，請執行以下命令：

```bash
sudo apt update
sudo apt install -y libfuse2 libgtk-3-0 libnotify4 libnss3 libnspr4 libxss1 libxtst6 xdg-utils \
     xauth libatspi2.0-0 libdrm2 libgbm1 libxcb-dri3-0 libcups2 libasound2t64
```

將 `libasound2t64` 替換為 `libasound2` 以適用於 `arm64`。最小化或自訂安裝仍可能因缺少 `.so` 檔案而失敗。請安裝錯誤訊息中指出的套件（常見附加套件：`libatk1.0-0`、`libatk-bridge2.0-0`、`libgbm1`、`libdrm2`）。在某些環境中，您可能需要使用 `APPIMAGE_EXTRACT_AND_RUN=1 ./Transrewrt-….AppImage` 來執行應用程式。

<br/>

> ℹ️ **注意**<br/>
> 目前不支援 macOS。Transrewrt 可用於 Windows、Linux 和 Docker。

</details>

<br/>

應用程式啟動後，請參閱 **[使用者指南](USER-GUIDE.zh-TW.md)** 以了解如何翻譯、重寫和轉換文字，管理提示詞，以及設定模型。

<br/><br/>

<a id="getting-an-openrouter-api-key"></a>
## 取得 OpenRouter API 金鑰

Transrewrt 支援多種 AI 供應商。[OpenRouter](https://openrouter.ai) 是一個熱門選擇，因其整合多種模型於單一金鑰下，並提供免費模型。

1. 前往 [openrouter.ai](https://openrouter.ai) 註冊或登入。
2. 開啟 [Keys](https://openrouter.ai/keys) 頁面並建立新金鑰（可命名，並可選擇設定信用額度上限）。即使不加值，您仍可使用免費模型。
3. **桌面版 (Electron)**：將金鑰貼上至 **設定 → API**。**Docker**：設定環境變數如 `OPENROUTER_API_KEY`（詳見 [快速入門](#quick-start)）。

請勿使用 OpenRouter 的 **Body Builder** 模型（[`openrouter/bodybuilder`](https://openrouter.ai/openrouter/bodybuilder)）進行翻譯、重寫或轉換：它會回傳 JSON 請求載體，而非這些任務所需的完成文字。詳情請見使用者指南中的 [設定 → 模型](USER-GUIDE.zh-TW.md#models)。

您也可以使用其他供應商（OpenAI、Anthropic、Google Gemini、DeepSeek、Groq、Mistral、xAI、Cerebras）或透過 [Ollama](https://ollama.com) 在本地執行模型。完整支援的供應商與環境變數清單請見 [Configuration](#configuration-and-environment)。

</br>

> ⚠️ **警告**<br/>
> 如果您從其他裝置、容器或服務使用 Ollama，請記得設定 Ollama 以允許外部連線（不能僅限於 localhost）。

<br/><br/>

<a id="configuration-and-environment"></a>
## 設定與環境

</br>

**設定檔位置**

| 部署方式         | 設定檔位置                                   |
| ------------------ | ------------------------------------------------- |
| Electron (Windows) | `%APPDATA%\transrewrt\`                           |
| Electron (Linux)   | `~/.config/transrewrt/`                           |
| Web / Docker       | `/app/data/config.json` (請使用 volume 來持久儲存) |

<br/>

**環境變數** (僅限 Web / Docker；Electron 使用 local 設定檔)

| 變數                 | 說明                                                                  |
|----------------------|------------------------------------------------------------------------------|
| `PORT`               | 伺服器監聽埠（預設為 `5000`）                                  |
| `CONFIG_PATH`        | 設定檔路徑（預設為 `/app/data/config.json)`                 |
| `TZ`                 | 伺服器端時區（用於記錄等，預設為 `Europe/London`） |
| `OPENROUTER_API_KEY` | OpenRouter API 金鑰                                                           |
| `OPENAI_API_KEY`     | OpenAI API 金鑰                                                               |
| `CEREBRAS_API_KEY`   | Cerebras API 金鑰                                                             |
| `ANTHROPIC_API_KEY`  | Anthropic API 金鑰                                                            |
| `GOOGLE_API_KEY`     | Google Gemini API 金鑰                                                        |
| `DEEPSEEK_API_KEY`   | DeepSeek API 金鑰                                                             |
| `GROQ_API_KEY`       | Groq API 金鑰                                                                 |
| `MISTRAL_API_KEY`    | Mistral API 金鑰                                                              |
| `OLLAMA_URL`         | Ollama 基本 URL（例如 `http://host.docker.internal:11434`）                   |
| `XAI_API_KEY`        | xAI API 金鑰                                                                  |

僅設定您使用的供應商。模型 ID 是命名空間化的（例如 `openrouter/…`、`openai/…`、`cerebras/…`、`ollama/…` 等）。

**費用顯示：** 當適用時，OpenRouter 會回傳確切的計費成本。其他供應商在有 OpenRouter 金鑰時，會使用 OpenRouter 公開模型定價的**估計**成本；若無 OpenRouter 金鑰，非 OpenRouter 的成本可能顯示為 `0`。這些估計值並非正式帳單。

<br/>

**資料與持久性：** 對於 Docker，請在 `/app/data` 掛載一個 volume，以確保 `config.json` 和 SQLite 資料庫在容器重新啟動時仍能保留。若無 volume，容器停止時所有資料將遺失。

<br/>

**Web 認證：**

- 預設管理員：`admin` / `transrewrt26`。
- 在 **設定 → 使用者** 中管理使用者。
- 重設密碼：`docker exec <container> reset-web-password '<username>' '<new-password>'`

<br/>

> ⚠️ **警告**<br/>
> 在任何可透過網路存取的主機上，請立即變更預設的管理員密碼。

<br/>

主要設定（字型、模型、語言等）可在應用程式的「設定」中進行。

<br/><br/>

<a id="development-and-architecture"></a>
## 開發與架構

- **開發：** 設定、建置、測試與部署 (Electron、Web、Docker) - 請參閱 **[dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)**。
- **架構與系統概覽：** 資料夾結構、技術堆疊、設計決策 - 請參閱 **[dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)**。

<br/><br/>

<a id="reporting-issues"></a>
## 回報問題

在 [GitHub](https://github.com/wsj-br/transrewrt/issues) 上提出問題。請包含您的平台（Windows / Linux / Docker）以及應用程式版本（顯示於「關於」對話框或「發行版本」頁面中）。

<br/><br/>

<a id="disclaimer"></a>
## 免責聲明

產品名稱與圖示屬於其各自擁有者，僅供識別用途使用。本軟體未經任何提及品牌之授權或背書。

<br/><br/>

<a id="license"></a>
## 授權條款

版權所有 © 2026 Waldemar Scudeller Jr.

[Apache License 2.0](../LICENSE)
