---
title: 설정
description: 구성 파일 위치, Docker 환경 변수, 개인정보 보호 모드 및 웹 인증.
---



## 구성 파일 위치

| 배포 | 데이터 폴더 |
| --- | --- |
| Electron (Windows) | `%APPDATA%\transrewrt\` |
| Electron (Linux) | `~/.config/transrewrt/` |
| 웹 / Docker | `/app/data/` (볼륨을 사용하여 유지) |

데이터 폴더에는 백업할 가치가 있는 모든 것이 저장됩니다:

- `config.json` — 설정 및 (데스크톱) 암호화된 API 키
- `state.json` — 마지막으로 사용한 언어, 모델 및 보기 상태
- `presets.json` — 캐시된 간편 모드 프리셋 카탈로그
- `transrewrt.db` — 기록, 비용, 프롬프트, 용어집 및 (웹) 사용자가 포함된 SQLite 데이터베이스

앱에서도 포터블 백업 ZIP을 생성할 수 있습니다 — [설정 → 일반 설정](/docs/settings/#general-settings)을 참조하세요.

## 환경 변수 (웹 / Docker)

Electron은 로컬 구성 파일을 사용합니다. 웹/Docker 서버에만 해당됩니다:

| 변수 | 설명 |
| --- | --- |
| `PORT` | 서버 수신 대기 포트 (기본값 `5000`) |
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
| `LOCAL_LLM_URL` | 로컬 서버의 전체 OpenAI 호환 API 기본 URL(경로 포함, 예: Ollama `http://host.docker.internal:11434/v1`, LM Studio `http://host.docker.internal:1234/v1`) |
| `XAI_API_KEY` | xAI API 키 |
| `NVIDIA_API_KEY` | NVIDIA API 키 |
| `ALIBABA_API_KEY` | 알리바바 클라우드(DashScope) API 키 |
| `APIFUN_API_KEY` | apikey.fun API 키 |
| `CUSTOM_PROVIDER_NAME` | 사용자 정의 OpenAI 호환 제공자의 표시 이름 |
| `CUSTOM_PROVIDER_URL` | 사용자 정의 OpenAI 호환 제공자의 기본 URL |
| `CUSTOM_PROVIDER_API_KEY` | 사용자 정의 제공자의 API 키 |

사용자 정의 엔드포인트를 사용할 때는 세 가지 `CUSTOM_PROVIDER_*` 변수가 모두 필요합니다. 모델은 **고급** 모드에서 `{providerName}/…`로 표시됩니다.

## 환경 변수(데스크톱)

| 변수 | 설명 |
| --- | --- |
| `TRANSREWRT_DISABLE_GPU` | `1`로 설정하여 하드웨어 가속 비활성화(Linux에서 Chromium이 GPU / EGL 오류를 출력할 때 유용) |
| `HISTORY_DISABLED` | 실행 기록 강제 비활성화(`true` / `1`) — [프라이버시 모드](#privacy-mode) 참조 |

## 프라이버시 모드

웹/Docker 서버 프로세스 및/또는 Electron 메인 프로세스에서 `HISTORY_DISABLED`을(를) `true` 또는 `1`로 설정하여 `config.json` 또는 사용자별 설정과 관계없이 기록을 강제로 비활성화합니다. 이렇게 하면 입력/출력 기록 저장이 비활성화되고, **설정 → 일반 설정 → 기록**이 잠기며, 기록 관련 API가 차단됩니다.

## 데이터 영속성(Docker)

`/app/data`에 볼륨을 마운트하여 컨테이너 재시작 시 구성 파일과 SQLite 데이터베이스([구성 파일 위치](#config-file-locations) 참조)가 유지되도록 합니다. 볼륨이 없으면 컨테이너가 중지될 때 데이터가 손실됩니다.

## 웹 인증

- 기본 관리자: `admin` / `transrewrt26`
- **Settings → Users**에서 사용자, 세션 시간 초과 및 세션 취소를 관리하세요 — [Settings](/docs/settings/#users) 참조
- 로그인한 각 사용자는 사이드바 하단의 사용자 메뉴에서 자신의 비밀번호를 변경하거나 로그아웃할 수 있습니다
- 비밀번호 재설정:

```bash
docker exec <container> reset-web-password '<username>' '<new-password>'
```

:::danger
네트워크에 접근 가능한 모든 호스트에서 기본 관리자 비밀번호를 즉시 변경하세요.
:::

:::caution
서버는 일반 HTTP로 통신합니다. localhost나 신뢰할 수 있는 네트워크 외부로 노출시키는 경우, 비밀번호와 텍스트가 평문으로 전송되지 않도록 HTTPS가 포함된 역방향 프록시(예: Caddy, nginx 또는 Traefik) 뒤에 배치하세요.
:::

## 비용 표시

OpenRouter는 해당되는 경우 정확한 청구 비용을 반환합니다. 다른 제공업체는 OpenRouter 키를 사용할 수 있을 때 OpenRouter의 공개 모델 가격 책정에서 **estimated** 비용을 사용합니다. 예상 비용은 청구서가 아닙니다.

Settings UI(글꼴, 모델, 기록, 백업)에 대해서는 [Settings](/docs/settings/)를 참조하세요.
