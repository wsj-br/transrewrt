---
title: 設定
description: 設定檔位置、Docker 環境變數、隱私模式與網頁驗證。
---



## 設定檔位置

| 部署方式 | 設定檔位置 |
| --- | --- |
| Electron (Windows) | `%APPDATA%\transrewrt\` |
| Electron (Linux) | `~/.config/transrewrt/` |
| Web / Docker | `/app/data/config.json` (使用磁碟區以持久化) |

## 環境變數 (web / Docker)

Electron 使用本地設定檔。僅適用於 web/Docker 伺服器：

| 變數 | 描述 |
| --- | --- |
| `PORT` | 伺服器監聽連接埠 (預設 `5000`) |
| `CONFIG_PATH` | 設定檔路徑 (預設 `/app/data/config.json`) |
| `TZ` | 伺服器端時間的時區 (預設 `Europe/London`) |
| `HISTORY_DISABLED` | 強制關閉執行歷史 (`true` / `1`) |
| `OPENROUTER_API_KEY` | OpenRouter API 金鑰 |
| `OPENAI_API_KEY` | OpenAI API 金鑰 |
| `CEREBRAS_API_KEY` | Cerebras API 金鑰 |
| `ANTHROPIC_API_KEY` | Anthropic API 金鑰 |
| `GOOGLE_API_KEY` | Google Gemini API 金鑰 |
| `DEEPSEEK_API_KEY` | DeepSeek API 金鑰 |
| `GROQ_API_KEY` | Groq API 金鑰 |
| `MISTRAL_API_KEY` | Mistral API 金鑰 |
| `LOCAL_LLM_URL` | 本地伺服器的完整 OpenAI 相容 API 基礎 URL（包含路徑，例如 Ollama `http://host.docker.internal:11434/v1`、LM Studio `http://host.docker.internal:1234/v1`） |
| `XAI_API_KEY` | xAI API 金鑰 |
| `NVIDIA_API_KEY` | NVIDIA API 金鑰 |
| `ALIBABA_API_KEY` | 阿里雲 (DashScope) API 金鑰 |
| `APIFUN_API_KEY` | apikey.fun API 金鑰 |
| `CUSTOM_PROVIDER_NAME` | 自訂 OpenAI 相容供應商的顯示名稱 |
| `CUSTOM_PROVIDER_URL` | 自訂 OpenAI 相容供應商的基礎 URL |
| `CUSTOM_PROVIDER_API_KEY` | 自訂供應商的 API 金鑰 |

使用自訂端點時，這三個 `CUSTOM_PROVIDER_*` 變數皆為必填。模型會以 `{providerName}/…` 的形式出現在**進階**模式中。

## 隱私模式

在 web/Docker 伺服器處理序和/或 Electron 主處理序上將 `HISTORY_DISABLED` 設為 `true` 或 `1`，以強制關閉歷史記錄，無論 `config.json` 或個別使用者偏好設定為何。這會停用輸入/輸出歷史記錄的儲存、鎖定**設定 → 一般設定 → 歷史記錄**，並封鎖與歷史記錄相關的 API。

## 資料持續性 (Docker)

在 `/app/data` 掛載磁碟區，讓 `config.json` 和 SQLite 資料庫在容器重啟後得以保留。若未掛載磁碟區，容器停止時資料將會遺失。

## Web 驗證

- 預設管理員：`admin` / `transrewrt26`
- 在**設定 → 使用者**中管理使用者
- 重設密碼：

```bash
docker exec <container> reset-web-password '<username>' '<new-password>'
```

:::danger
在任何可從網絡存取的主機上立即變更預設管理員密碼。
:::

## 成本顯示

OpenRouter 會在適用時傳回確切的計費成本。其他供應商則在可用 OpenRouter 金鑰時，使用來自 OpenRouter 公開模型定價的**估計**成本。估計值並非發票。

關於設定 UI（字型、模型、歷史記錄、備份），請參閱[設定](/docs/settings/)。
