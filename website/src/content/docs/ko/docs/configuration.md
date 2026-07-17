---
title: 구성
description: 구성 파일 위치, Docker 환경 변수, 개인 정보 보호 모드 및 웹 인증.
translation_last_updated: '2026-07-17T21:14:46.102Z'
source_file_mtime: '2026-07-17T14:43:44.727Z'
source_file_hash: 8c3b2c00eddcee7693d66c5f5955c2d2186e55de630886446764bc6b798f05b5
translation_language: ko
source_file_path: src/content/docs/docs/configuration.md
translation_models:
  - z-ai/glm-5.2
---



## 구성 파일 위치

| 배포 | 구성 위치 |
| --- | --- |
| Electron (Windows) | `%APPDATA%\transrewrt\` |
| Electron (Linux) | `~/.config/transrewrt/` |
| Web / Docker | `/app/data/config.json` (볼륨을 사용하여 유지) |

## 환경 변수 (web / Docker)

Electron은 로컬 구성 파일을 사용합니다. web/Docker 서버 전용:

| 변수 | 설명 |
| --- | --- |
| `PORT` | 서버 수신 포트 (기본값 `5000`) |
| `CONFIG_PATH` | 구성 파일 경로 (기본값 `/app/data/config.json`) |
| `TZ` | 서버 측 시간의 시간대 (기본값 `Europe/London`) |
| `HISTORY_DISABLED` | 실행 기록 강제 비활성화 (`true` / `1`) |
| `OPENROUTER_API_KEY` | OpenRouter API 키 |
| `OPENAI_API_KEY` | OpenAI API 키 |
| `CEREBRAS_API_KEY` | Cerebras API 키 |
| `ANTHROPIC_API_KEY` | Anthropic API 키 |
| `GOOGLE_API_KEY` | Google Gemini API 키 |
| `DEEPSEEK_API_KEY` | DeepSeek API 키 |
| `GROQ_API_KEY` | Groq API 키 |
| `MISTRAL_API_KEY` | Mistral API 키 |
| `LOCAL_LLM_URL` | 로컬 서버의 전체 OpenAI 호환 API 기본 URL (경로 포함, 예: Ollama `http://host.docker.internal:11434/v1`, LM Studio `http://host.docker.internal:1234/v1`) |
| `XAI_API_KEY` | xAI API 키 |
| `NVIDIA_API_KEY` | NVIDIA API 키 |
| `ALIBABA_API_KEY` | Alibaba Cloud (DashScope) API 키 |
| `APIFUN_API_KEY` | apikey.fun API 키 |
| `CUSTOM_PROVIDER_NAME` | 커스텀 OpenAI 호환 제공자의 표시 이름 |
| `CUSTOM_PROVIDER_URL` | 커스텀 OpenAI 호환 제공자의 기본 URL |
| `CUSTOM_PROVIDER_API_KEY` | 커스텀 제공자의 API 키 |

커스텀 엔드포인트를 사용할 때는 세 가지 `CUSTOM_PROVIDER_*` 변수가 모두 필요합니다. 모델은 **Advanced** 모드에서 `{providerName}/…`로 표시됩니다.

## 프라이버시 모드

웹/Docker 서버 프로세스 및/또는 Electron 메인 프로세스에서 `HISTORY_DISABLED`를 `true` 또는 `1`로 설정하면 `config.json` 또는 사용자별 설정과 관계없이 기록을 강제로 비활성화합니다. 이렇게 하면 입력/출력 기록 저장이 비활성화되고, **Settings → General Settings → History**가 잠기며, 기록 관련 API가 차단됩니다.

## 데이터 영속성 (Docker)

`/app/data`에 볼륨을 마운트하면 `config.json`와 SQLite 데이터베이스가 컨테이너 재시작 후에도 유지됩니다. 볼륨이 없으면 컨테이너가 중지될 때 데이터가 손실됩니다.

## 웹 인증

- 기본 관리자: `admin` / `transrewrt26`
- **Settings → Users**에서 사용자 관리
- 비밀번호 재설정:

```bash
docker exec <container> reset-web-password '<username>' '<new-password>'
```

:::danger
네트워크에서 접근 가능한 호스트에서는 기본 관리자 비밀번호를 즉시 변경하세요.
:::

## 비용 표시

OpenRouter는 해당하는 경우 정확한 청구 비용을 반환합니다. 다른 제공자는 OpenRouter 키가 있을 때 OpenRouter의 공개 모델 가격을 기준으로 **예상** 비용을 사용합니다. 예상 비용은 청구서가 아닙니다.

설정 UI(글꼴, 모델, 기록, 백업)에 대한 자세한 내용은 [설정](/docs/settings/)을 참조하세요.
