<p align="center">
  <img src="../images/transrewrt_banner.png" alt="Transrewrt Banner"  />
</p>

<p align="center">
  <a href="https://github.com/wsj-br/transrewrt/releases"><img src="https://img.shields.io/badge/version-1.6.1-blue" alt="Version"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-Apache%202.0-green" alt="License: Apache 2.0"></a>
  <img src="https://img.shields.io/badge/platform-Windows%20%7C%20Linux%20%7C%20Docker-lightgrey" alt="Platform">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react" alt="React 19">
  <img src="https://img.shields.io/badge/Electron-41-47848F?logo=electron" alt="Electron 41">
</p>

由 AI 驅動的文字工具：可在不同語言之間進行翻譯、以不同風格重寫，並透過自訂提示進行轉換——使用多個 AI 提供者（OpenRouter、OpenAI、Anthropic、Google Gemini、DeepSeek、Groq、Mistral、xAI、Cerebras、NVIDIA、Alibaba Cloud、apikey.fun、任何 OpenAI 相容提供者，以及本機 Ollama）。可作為桌面應用程式（Electron）或自行託管的 Web 應用程式（Docker）執行。

- **翻譯** - 在數十種語言之間翻譯，並自動偵測來源語言
- **重寫** - 修正文法、改善清晰度、正式/非正式、縮短、擴展、技術性
- **轉換** - 自訂 AI 提示；建立和管理提示，每個提示可選用目標語言
- **詞彙** - 儲存每個語言對的來源/目標術語對，並在翻譯時套用，以確保所選術語保持一致；在「設定」中管理術語（新增/編輯/刪除、CSV/XLSX 匯入和範本匯出）
- **歷史** - 完整的執行歷史，包含輸入/輸出文字、篩選和匯出
- **簡易與進階** - 簡易模式（預設）：每個提供者都有精選預設（**免費 (OpenRouter)**、**標準**、**進階**、**技術**；僅顯示與所選提供者有對應的預設），無需選擇模型 ID；進階模式：顯示您已設定的提供者的完整模型清單
- **模型與成本** - 成本和使用情況儀表板（摘要、依模型、所有通話）並可匯出；OpenRouter 顯示實際花費，其他提供者使用估計值
- **UI** - 多語言介面（30 多種語言，支援 RTL）、字體等
- **網路模式** - 支援多使用者，並具有管理員角色
- **桌面** - 適用於 Windows 和 Linux 的 Electron 應用程式
- **自託管** - 適用於 amd64 和 arm64 的 Docker 映像（支援 Raspberry Pi）

安裝後，請參閱 [**使用者指南**](USER-GUIDE.zh-Hant.md)，以全面了解所有功能。

<small>**以其他語言閱讀：** </small>
<small id="lang-list">[English (UK)](../README.md) · [Português (Brasil)](./README.pt-BR.md) · [العربية](./README.ar.md) · [বাংলা](./README.bn.md) · [Català](./README.ca.md) · [简体中文](./README.zh-Hans.md) · [繁體中文](./README.zh-Hant.md) · [Hrvatski](./README.hr.md) · [Čeština](./README.cs.md) · [Nederlands](./README.nl.md) · [English (US)](./README.en-US.md) · [Tagalog](./README.tl.md) · [Français](./README.fr.md) · [Deutsch](./README.de.md) · [Ελληνικά](./README.el.md) · [Hindi (Roman)](./README.hi-Latn.md) · [Magyar](./README.hu.md) · [Italiano](./README.it.md) · [日本語](./README.ja.md) · [한국어](./README.ko.md) · [Bahasa Melayu](./README.ms.md) · [فارسی](./README.fa.md) · [Polski](./README.pl.md) · [Basa Jawa](./README.jv.md) · [Português](./README.pt.md) · [پنجابی](./README.pa-PK.md) · [Română](./README.ro.md) · [Русский](./README.ru.md) · [Slovenčina](./README.sk.md) · [Español](./README.es.md) · [Kiswahili](./README.sw.md) · [Svenska](./README.sv.md) · [తెలుగు](./README.te.md) · [ไทย](./README.th.md) · [Türkçe](./README.tr.md) · [Українська](./README.uk.md) · [Tiếng Việt](./README.vi.md)</small>

<small>

> **關於 UI 和文件翻譯的注意事項：** 除了原始英文 (UK) 之外的所有介面語言\n> 均使用 AI 模型進行翻譯；措辭可能不精確或包含錯誤。

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
- [授權](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="screenshots"></a>
## 螢幕截圖

**語言選擇器**

![Language selector](../images/screenshots/zh-Hant/language-selector.png)

**翻譯**

![Translate](../images/screenshots/zh-Hant/translate.png)

**轉換 - 提示編輯器**

![Transform - prompt editor](../images/screenshots/zh-Hant/transform-prompt-edit.png)

**儀表板**

![Dashboard summary - usage](../images/screenshots/zh-Hant/dashboard-summary.png)

**歷史**

![History](../images/screenshots/zh-Hant/history.png)

**設定 - 模型選擇**

![Settings - model selection](../images/screenshots/zh-Hant/settings-general.png)

<br/><br/>

<a id="quick-start"></a>
## 快速入門

<details>
<summary><b>Docker (建議用於自行託管)</b></summary>

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

將 `sk-or-your-key` 替換為您的 [OpenRouter API 金鑰](https://openrouter.ai/keys) (或設定其他提供者金鑰；請參閱[設定](#configuration-and-environment))。開啟 [http://localhost:5000](http://localhost:5000) 並在公開服務之前更改預設的管理員密碼。

透過環境設定至少一個提供者金鑰 (例如 OpenRouter 的 `OPENROUTER_API_KEY`)。使用 `-e` 或 `docker compose` / `.env` 傳遞變數，這樣機密就不會被編入映像檔中。提供者金鑰**不會**在網頁使用者介面中輸入；伺服器會從環境中讀取它們。

<br/>

> ℹ️ **注意**<br/>
> 在 Docker 中，LLM 憑證是透過環境變數設定的，例如 `OPENROUTER_API_KEY`、`OPENAI_API_KEY`、`CEREBRAS_API_KEY` 等 (而不是在網頁使用者介面中)。在桌面 (Electron) 上，您可以在**設定 → API** 中設定金鑰。

<br/>

或使用 Docker Compose：

```bash
# download the compose file
wget https://github.com/wsj-br/transrewrt/raw/refs/heads/master/production.yml -O transrewrt.yml
# Edit the file to add your API keys (API_KEYs), or uncomment and adjust the `.env` file. Set the timezone (TZ) if necessary.
vi transrewrt.yml
# start the container
docker compose -f transrewrt.yml up -d
```

請參閱[設定](#configuration-and-environment) 以了解所有環境變數，例如 `PORT`、`CONFIG_PATH`、`TZ` 和 LLM 金鑰 (`OPENROUTER_API_KEY`、`OPENAI_API_KEY` 等)。

</details>

<br/>

<details>
<summary><b>伺服器時區 (Docker)</b></summary>

<a id="configuring-the-timezone"></a>

<br/>

應用程式使用者介面的日期和時間遵循**瀏覽器**的地區設定和時區。對於**伺服器端**行為 (日誌記錄等)，容器使用 `TZ` 環境變數。預設值為 `TZ=Europe/London`。

若要使用其他時區，請在您的 Compose 檔案中設定 `TZ`，例如：

```yaml
environment:
  - TZ=America/Sao_Paulo
```

或在執行容器時傳遞它 (Docker)：

```bash
--env TZ=America/Sao_Paulo
```

在許多 Linux 主機上，您可以使用以下方式複製系統時區名稱：

```bash
echo TZ=\"$(</etc/timezone)\"
```

有效的時區名稱列表維護在 [tz 資料庫](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) (維基百科) 中。

</details>

<br/>

<details>
<summary><b>Windows</b></summary>

<a id="windows-electron"></a>

<br/>

- 從 [發行版本](https://github.com/wsj-br/transrewrt/releases) 下載最新的 `Transrewrt Setup x.y.z.exe`。
- 執行 `.exe` 並依照安裝程式的指示操作。
- 首次執行：從「開始」功能表或桌面捷徑啟動應用程式。
- 在 **設定 → API** 中輸入您的 API 金鑰。您需要至少設定一個提供者；OpenRouter 常用於免費模型。

<br/>

> ℹ️ **注意**<br/>
> Windows 可能會顯示以下其中一個安全性警告（對於未簽署/獨立應用程式而言屬正常現象）：
> - **使用者帳戶控制 (UAC)**：「您是否要允許此來自未知發行者的應用程式對您的裝置進行變更？」→ 按一下 **是**。
> - **Microsoft Defender SmartScreen**：「Windows 已保護您的電腦」→ 按一下 **更多資訊** → **仍要執行**。
>
> 發生此情況是因為應用程式未經 Microsoft 或主要發行者簽署——如果從我們的官方 GitHub 發行版本下載（請在 [發行版本](https://github.com/wsj-br/transrewrt/releases) 頁面上，與每個資產一起驗證校驗和），則它是安全的。

<br/>

</details>

<br/>

<details>
<summary><b>Linux</b></summary>

<a id="linux-electron"></a>

<br/>

從 [發行版本](https://github.com/wsj-br/transrewrt/releases) 下載適用於您 CPU 的 `.AppImage` (`x64` 適用於一般 PC，`arm64` 適用於許多 ARM 裝置，包括 Raspberry Pi 4+)，然後：

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

在 x86_64/amd64 上使用 `x64` 檔案名稱；在 ARM64 上使用 `...-arm64.AppImage` 名稱。

在 **設定 → API** 中輸入您的 API 金鑰。您需要至少設定一個提供者；OpenRouter 常用於免費模型。

**控制台訊息：** 打包的 Linux 版本 (`x64` 和 `arm64` AppImages) 會抑制終端機中的 Node 棄用警告 (例如內建的 `punycode` 模組)。如果 Chromium 列印 GPU / EGL 錯誤，例如「GLES3 不受支援」，但應用程式仍可運作，您可以透過停用硬體加速來使其靜音：

```bash
TRANSREWRT_DISABLE_GPU=1 ./Transrewrt-x.y.z-arm64.AppImage
```

這也適用於 amd64；請變更檔案名稱以符合您的下載。

在 Debian/Ubuntu 上，您可能需要 Chromium 所需的額外 **執行階段** 程式庫（這些程式庫通常已存在於完整的桌面安裝中）。如果需要，請執行以下命令：

```bash
sudo apt update
sudo apt install -y libfuse2 libgtk-3-0 libnotify4 libnss3 libnspr4 libxss1 libxtst6 xdg-utils \
     xauth libatspi2.0-0 libdrm2 libgbm1 libxcb-dri3-0 libcups2 libasound2t64
```

將 `libasound2t64` 替換為 `libasound2` 以用於 `arm64`。最小或自訂安裝仍可能因缺少 `.so` 檔案而失敗。安裝錯誤訊息中指定的套件（常見的額外套件：`libatk1.0-0`、`libatk-bridge2.0-0`、`libgbm1`、`libdrm2`）。在某些環境中，您可能需要使用 `APPIMAGE_EXTRACT_AND_RUN=1 ./Transrewrt-….AppImage` 執行應用程式。

<br/>

> ℹ️ **注意**<br/>
> macOS 目前不支援。Transrewrt 適用於 Windows、Linux 和 Docker。

</details>

<br/>

應用程式執行後，請參閱 [**使用者指南**](USER-GUIDE.zh-Hant.md)，了解如何翻譯、重寫和轉換文字、管理提示以及設定模型。

<br/><br/>

<a id="getting-an-openrouter-api-key"></a>
## 取得 OpenRouter API 金鑰

Transrewrt 支援多種 AI 供應商。[OpenRouter](https://openrouter.ai) 是一個受歡迎的選擇，因為它將許多模型整合在一個金鑰下，並提供免費模型。

1. 在 [openrouter.ai](https://openrouter.ai) 註冊或登入。
2. 開啟 [金鑰](https://openrouter.ai/keys) 頁面並建立新金鑰（命名它，並可選擇設定信用額度）。您無需新增信用即可使用免費模型。
3. **桌面版 (Electron)：** 將金鑰貼到 **設定 → API**。**Docker：** 設定環境變數，例如 `OPENROUTER_API_KEY`（請參閱[快速入門](#quick-start))。

請勿使用 OpenRouter 的 **Body Builder** 模型 ([`openrouter/bodybuilder`](https://openrouter.ai/openrouter/bodybuilder)) 進行翻譯、重寫或轉換：它會傳回 JSON 請求負載，而不是這些任務的完成文字。請參閱使用者指南中的[設定 → 模型](USER-GUIDE.zh-Hant.md#models)。

您也可以使用其他提供者（OpenAI、Anthropic、Google Gemini、DeepSeek、Groq、Mistral、xAI、Cerebras、NVIDIA、Alibaba Cloud、apikey.fun、任何 OpenAI 相容提供者），或使用 [Ollama](https://ollama.com) 在本機執行模型。請參閱 [設定](#configuration-and-environment) 以取得支援的提供者和環境變數的完整列表。

</br>

> ⚠️ **警告**<br/>
> 如果您從其他裝置、容器或服務使用 Ollama，請記得設定 Ollama 以允許外部連線（而非僅限本機）。

<br/><br/>

<a id="configuration-and-environment"></a>
## 設定與環境

</br>

**設定檔位置**

| 部署方式           | 設定檔位置                                   |
| ------------------ | ------------------------------------------------- |
| Electron (Windows) | `%APPDATA%\transrewrt\`                           |
| Electron (Linux)   | `~/.config/transrewrt/`                           |
| Web / Docker       | `/app/data/config.json` (使用卷宗來持久化) |

<br/>

**環境變數** (僅限 Web/Docker；Electron 使用本機設定檔)

| 變數                  | 說明                                                                             |
|---------------------------|-----------------------------------------------------------------------------------------|
| `PORT`                    | 伺服器監聽埠（預設為 `5000`）                                             |
| `CONFIG_PATH`        | 設定檔路徑 (預設為 `/app/data/config.json`)                |
| `TZ`                 | 伺服器端時間的時區 (記錄等) (預設為 `Europe/London`) |
| `HISTORY_DISABLED`   | 強制關閉執行歷史記錄 (選用，預設為 `false`)                  |
| `OPENROUTER_API_KEY` | OpenRouter API 金鑰                                                           |
| `OPENAI_API_KEY`     | OpenAI API 金鑰                                                               |
| `CEREBRAS_API_KEY`   | Cerebras API 金鑰                                                             |
| `ANTHROPIC_API_KEY`  | Anthropic API 金鑰                                                            |
| `GOOGLE_API_KEY`     | Google Gemini API 金鑰                                                        |
| `DEEPSEEK_API_KEY`   | DeepSeek API 金鑰                                                             |
| `GROQ_API_KEY`       | Groq API 金鑰                                                                 |
| `MISTRAL_API_KEY`    | Mistral API 金鑰                                                              |
| `OLLAMA_URL`         | Ollama 基本 URL (例如 `http://host.docker.internal:11434`)                   |
| `XAI_API_KEY`        | xAI API 金鑰                                                                  |
| `NVIDIA_API_KEY`          | NVIDIA API 金鑰                                                                          |
| `ALIBABA_API_KEY`         | Alibaba Cloud (DashScope) API 金鑰                                                       |
| `APIFUN_API_KEY`          | apikey.fun API 金鑰                                                                      |
| `CUSTOM_PROVIDER_NAME` | 自訂 OpenAI 相容提供者的顯示名稱（需要所有三個自訂變數） |
| `CUSTOM_PROVIDER_URL`     | 自訂 OpenAI 相容提供者的基礎 URL（例如 `https://my-llm.example.com/v1`） |
| `CUSTOM_PROVIDER_API_KEY` | 自訂 OpenAI 相容提供者的 API 金鑰                         |

**自訂 OpenAI 相容提供者（Web/Docker）：** 適用於不在上述內建清單中的任何 OpenAI 相容端點（例如自行託管的伺服器或閘道），請設定所有三個 `CUSTOM_PROVIDER_*` 變數——例如 `CUSTOM_PROVIDER_NAME=MyProvider`、`CUSTOM_PROVIDER_URL=https://my-llm.example.com/v1` 以及對應的 API 金鑰。模型會出現在設定 → 模型下的 **進階**模式中，其 ID 類似 `MyProvider/…`（以提供者名稱作為前綴）。

**隱私模式：** 若要強制關閉歷史記錄追蹤，無論 `config.json` 或個別使用者偏好設定為何，請將 `HISTORY_DISABLED` 設定為 `true` 或 `1`（不區分大小寫），適用於**網頁/Docker 伺服器程序**和/或**Electron 桌面主程序**（例如系統或啟動器環境 — 而非僅渲染器）。這會停用儲存輸入/輸出歷史記錄，鎖定**設定 → 一般設定 → 歷史記錄**，並阻止與歷史記錄相關的 API。

僅設定您使用的提供者。模型 ID 具有命名空間（`openrouter/…`、`openai/…`、`cerebras/…`、`ollama/…`、`{providerName}/…` 用於自訂端點等）。

**成本顯示：** OpenRouter 在適用時會傳回確切的計費成本。其他提供者在有 OpenRouter 金鑰時，會使用 OpenRouter 公開模型定價的**估計**成本；如果沒有，非 OpenRouter 成本可能會顯示為 `0`。估計值並非發票。

<br/>

**資料和持久性：** 對於 Docker，請在 `/app/data` 掛載一個卷，以便 `config.json` 和 SQLite 資料庫在容器重新啟動後仍然存在。如果沒有卷，當容器停止時，所有資料都會遺失。

<br/>

**網頁驗證：**

- 預設管理員：`admin` / `transrewrt26`。
- 在**設定 → 使用者**中管理使用者。
- 重設密碼：`docker exec <container> reset-web-password '<username>' '<new-password>'`

<br/>

> ⚠️ **警告**<br/>
> 在任何可網路存取的主機上，請立即更改預設管理員密碼。

<br/>

主要設定（字體、模型、語言等）可在應用程式「設定」中找到。

<br/><br/>

<a id="development-and-architecture"></a>
## 開發與架構

- **開發：** 設定、建置、測試和部署 (Electron、Web、Docker) - 請參閱 [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)。
- **架構和系統概覽：** 資料夾結構、技術堆疊、設計決策 - 請參閱 [dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)。

<br/><br/>

<a id="reporting-issues"></a>
## 回報問題

在 [GitHub](https://github.com/wsj-br/transrewrt/issues) 上提出問題。請包含您的平台 (Windows / Linux / Docker) 和應用程式版本（顯示在「關於」對話方塊或「發行版本」頁面上）。

<br/><br/>

<a id="disclaimer"></a>
## 免責聲明

產品名稱和圖示屬於其各自擁有者，僅用於識別目的。本軟體與提及的任何品牌無關聯或未獲其認可。

<br/><br/>

<a id="license"></a>
## 授權

Copyright © 2026 Waldemar Scudeller Jr.

[Apache License 2.0](../LICENSE)
