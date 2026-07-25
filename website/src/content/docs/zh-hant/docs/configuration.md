---
title: 設定
description: 設定檔位置、Docker 環境變數、隱私模式與網頁驗證。
---



## 設定檔位置

| 部署方式 | 資料夾 |
| --- | --- |
| Electron (Windows) | `%APPDATA%\transrewrt\` |
| Electron (Linux) | `~/.config/transrewrt/` |
| Web / Docker | `/app/data/`（使用磁碟區以保留資料） |

資料夾包含了所有值得備份的內容：

- `config.json` — 設定與（桌面版）加密的 API 金鑰
- `state.json` — 上次使用的語言、模型與檢視狀態
- `presets.json` — 快取的簡易模式預設目錄
- `transrewrt.db` — 包含歷史記錄、成本、提示、詞彙表與（網頁版）使用者的 SQLite 資料庫

你也可以從應用程式建立可攜式備份 ZIP — 請參閱[設定 → 一般設定](/docs/settings/#general-settings)。

## 資料持久性（Docker）

在 `/app/data` 掛載磁碟區，讓設定檔和 SQLite 資料庫（請參閱[設定檔位置](#config-file-locations)）在容器重新啟動後依然存在。若未掛載磁碟區，容器停止時資料將會遺失。

## 環境變數（web / Docker）

Electron 使用本機設定檔。僅適用於 web/Docker 伺服器：

| 變數 | 說明 |
| --- | --- |
| `PORT` | 伺服器監聽連接埠（預設 `5000`） |
| `CONFIG_PATH` | 設定檔路徑（預設 `/app/data/config.json`） |
| `TZ` | 伺服器端時間的時區（預設 `Europe/London`） |
| `HISTORY_DISABLED` | 強制關閉執行歷史記錄（`true` / `1`） |
| `OPENROUTER_API_KEY` | OpenRouter API 金鑰 |
| `OPENAI_API_KEY` | OpenAI API 金鑰 |
| `CEREBRAS_API_KEY` | Cerebras API 金鑰 |
| `ANTHROPIC_API_KEY` | Anthropic API 金鑰 |
| `GOOGLE_API_KEY` | Google Gemini API 金鑰 |
| `DEEPSEEK_API_KEY` | DeepSeek API 金鑰 |
| `GROQ_API_KEY` | Groq API 金鑰 |
| `MISTRAL_API_KEY` | Mistral API 金鑰 |
| `LOCAL_LLM_URL` | 本地伺服器的完整 OpenAI 相容 API 基礎 URL，包含路徑（例如 Ollama `http://host.docker.internal:11434/v1`、LM Studio `http://host.docker.internal:1234/v1`） |
| `XAI_API_KEY` | xAI API 金鑰 |
| `NVIDIA_API_KEY` | NVIDIA API 金鑰 |
| `ALIBABA_API_KEY` | 阿里雲（DashScope）API 金鑰 |
| `APIFUN_API_KEY` | apikey.fun API 金鑰 |
| `CUSTOM_PROVIDER_NAME` | 自訂 OpenAI 相容提供者的顯示名稱 |
| `CUSTOM_PROVIDER_URL` | 自訂 OpenAI 相容提供者的基底 URL |
| `CUSTOM_PROVIDER_API_KEY` | 自訂提供者的 API 金鑰 |

使用自訂端點時需要這三個 `CUSTOM_PROVIDER_*` 變數。模型會在 **Advanced** 模式中顯示為 `{providerName}/…`。

## 環境變數（桌面版）

| 變數 | 說明 |
| --- | --- |
| `TRANSREWRT_DISABLE_GPU` | 設為 `1` 可停用硬體加速（在 Linux 上 Chromium 輸出 GPU / EGL 錯誤時很有用） |
| `HISTORY_DISABLED` | 強制關閉執行歷史記錄（`true` / `1`）— 請參閱[隱私模式](#privacy-mode) |

## 隱私模式

在網頁/Docker 伺服器程序及/或 Electron 主程序上將 `HISTORY_DISABLED` 設為 `true` 或 `1`，即可不論 `config.json` 或每位使用者的偏好設定，強制關閉歷史記錄。這會停用輸入/輸出歷史記錄的儲存、鎖定 **設定 → 一般設定 → 歷史記錄**，並封鎖歷史記錄相關 API。

## 網頁驗證

- 預設管理員：`admin` / `transrewrt26`
- 在 **設定 → 使用者** 中管理使用者、工作階段逾時與工作階段撤銷 — 請參閱[設定](/docs/settings/#users)
- 每位已登入的使用者皆可從側邊欄底部的使用者選單變更自己的密碼或登出
- 重設密碼：

```bash
docker exec <container> reset-web-password '<username>' '<new-password>'
```

:::danger
在任何可透過網絡存取的主機上立即變更預設管理員密碼。
:::

:::caution
伺服器使用純 HTTP 通訊。若您將其暴露於 localhost 或受信任網絡之外，請將其置於具有 HTTPS 的反向代理（例如 Caddy、nginx 或 Traefik）之後，以免密碼與文字以明文傳送。
:::

## 費用顯示

OpenRouter 會在適用時回傳確切的計費金額。其他供應商則在具備 OpenRouter 金鑰時，使用來自 OpenRouter 公開模型定價的**預估**費用。預估值並非發票。

關於設定介面（字型、模型、歷史記錄、備份），請參閱[設定](/docs/settings/)。
