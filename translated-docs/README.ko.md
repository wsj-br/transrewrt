---
translation_last_updated: '2026-03-29T20:53:30.361Z'
source_file_mtime: '2026-03-29T01:54:18.655Z'
source_file_hash: 27ed6c4cec02f5e6
translation_language: ko
source_file_path: README.md
---
<p align="center">
  <img src="../images/transrewrt_banner.png" alt="Transrewrt 배너"  />
</p>

<p align="center">
  <a href="https://github.com/wsj-br/transrewrt/releases"><img src="https://img.shields.io/badge/version-1.1.1-blue" alt="버전"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-Apache%202.0-green" alt="라이선스: Apache 2.0"></a>
  <img src="https://img.shields.io/badge/platform-Windows%20%7C%20Linux%20%7C%20Docker-lightgrey" alt="플랫폼">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react" alt="React 19">
  <img src="https://img.shields.io/badge/Electron-41-47848F?logo=electron" alt="Electron 41">
</p>

AI 기반 텍스트 도구: 여러 AI 제공업체(OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI 및 로컬 Ollama)를 사용하여 다양한 언어 간 번역, 스타일에 따른 재작성, 사용자 정의 프롬프트로 변환 가능 — 데스크톱 앱(Electron) 또는 자체 호스팅 웹 앱(Docker)으로 실행.

- **번역** — 수십 개 언어 간 번역, 자동 원문 감지 지원
- **재작성** — 문법 수정, 명확성 개선, 격식/비격식, 축약, 확장, 기술적 표현 등
- **변환** — 사용자 정의 AI 프롬프트; 프롬프트 생성 및 관리, 프롬프트별 선택적 대상 언어 지정 가능
- **기록** — 입력/출력 텍스트, 필터링, 내보내기 기능을 포함한 전체 실행 기록
- **모델 및 비용** — 구성된 제공업체의 모델 선택 가능; 로그, 모델/작업/일별 요약을 포함한 비용 및 사용량 대시보드
- **UI** — 다국어 인터페이스(30개 이상 언어, RTL 지원), 폰트, ...
- **웹 모드** — 관리자 역할을 포함한 다중 사용자 지원
- **데스크톱** — Windows 및 Linux용 Electron 앱
- **자체 호스팅** — amd64 및 arm64(Raspberry Pi 호환)용 Docker 이미지

설치 후 모든 기능에 대한 자세한 안내는 **[사용자 가이드](USER-GUIDE.ko.md)** 를 참조하세요.

<small>**다른 언어로 읽기:** </small>
<small id="lang-list"> [English (UK)](../README.md) · [Português (BR)](README.pt-BR.md) · [العربية](README.ar.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [Hrvatski](README.hr.md) · [Čeština](README.cs.md) · [Nederlands](README.nl.md) · [English (US)](README.en-US.md) · [Filipino](README.tl.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [हिन्दी](README.hi.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [Basa Jawa](README.jv.md) · [한국어](README.ko.md) · [Bahasa Melayu](README.ms.md) · [فارسی](README.fa.md) · [Polski](README.pl.md) · [Português (PT)](README.pt.md) · [ਪੰਜਾਬੀ](README.pa.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [Slovenčina](README.sk.md) · [Español](README.es.md) · [Kiswahili](README.sw.md) · [Svenska](README.sv.md) · [తెలుగు](README.te.md) · [ภาษาไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Tiếng Việt](README.vi.md)</small>

<small>

> **UI 및 문서 번역에 대한 참고 사항:** 원본인 영어 (영국)을 제외한 모든 인터페이스 언어는 AI 모델을 사용하여 번역되었으며, 표현이 부정확하거나 오류가 포함될 수 있습니다.

</small>

<br/>

<a id="screenshots"></a>
## 스크린샷

**언어 선택기**

![Language selector](../images/screenshots/ko/language-selector.png)

**번역**

![Translate](../images/screenshots/ko/translate.png)

**변환 - 프롬프트 편집기**

![Transform - prompt editor](../images/screenshots/ko/transform-prompt-edit.png)

**대시보드**

![Dashboard summary — usage](../images/screenshots/ko/dashboard-summary.png)

**기록**

![History](../images/screenshots/ko/history.png)

**설정 - 모델 선택**

![Settings - model selection](../images/screenshots/ko/settings-models.png)

<br/><br/>

<a id="table-of-contents"></a>
## 목차

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [빠른 시작](#quick-start)
- [설치](#installation)
  - [Windows (Electron)](#windows-electron)
  - [Linux (Electron)](#linux-electron)
  - [Docker](#docker)
  - [타임존 설정](#configuring-the-timezone)
- [OpenRouter API 키 발급 방법](#getting-an-openrouter-api-key)
- [구성 및 환경](#configuration-and-environment)
- [개발 및 아키텍처](#development-and-architecture)
- [문제 보고](#reporting-issues)
- [면책 조항](#disclaimer)
- [라이선스](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="quick-start"></a>
## 빠른 시작

**도커 (자가 호스팅 시 도커 사용을 권장)**

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest

OPENROUTER_API_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_API_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

`sk-or-your-key`를 [OpenRouter API 키](https://openrouter.ai/keys)로 바꾸거나 다른 제공업체의 키를 설정하세요([구성](#configuration-and-environment) 참조). [http://localhost:5000](http://localhost:5000)에 접속하여 서비스를 공개하기 전에 기본 관리자 비밀번호를 변경하세요.

<br/>

> ℹ️ **참고**<br/>
> 도커에서는 LLM 자격 증명을 웹 UI가 아닌 `OPENROUTER_API_KEY`, `OPENAI_API_KEY`, `CEREBRAS_API_KEY` 등의 환경 변수로 설정합니다. 데스크톱(Electron)에서는 **설정 → API**에서 키를 구성합니다.

<br/>

**Windows**

[릴리스](https://github.com/wsj-br/transrewrt/releases)에서 최신 `Transrewrt Setup x.y.z.exe`를 다운로드하고 설치 프로그램을 실행한 후 시작 메뉴 또는 바탕화면 바로가기에서 실행하세요. **설정 → API**에서 API 키를 입력하세요. 최소한 하나 이상의 제공업체를 설정해야 하며, 무료 모델의 경우 OpenRouter를 사용하는 것이 일반적입니다.

<br/>

**Linux**

[릴리스](https://github.com/wsj-br/transrewrt/releases)에서 CPU에 맞는 `.AppImage` 파일을 다운로드하세요(일반적인 PC는 `x64`, 라즈베리 파이 4 이상과 같은 많은 ARM 기기는 `arm64`). 그런 다음:

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

**설정 → API**에서 API 키를 입력하세요. 최소한 하나 이상의 제공업체를 설정해야 하며, 무료 모델의 경우 OpenRouter를 사용하는 것이 일반적입니다.

데비안/우분투에서는 추가 종속성을 먼저 설치해야 할 수 있습니다:

```bash
sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth
```

자세한 내용은 [설치 → Linux](#linux-electron)를 참조하세요.

<br/>

> ℹ️ **참고**<br/>
> 현재 macOS는 지원되지 않습니다. Transrewrt는 Windows, Linux 및 도커에서 사용할 수 있습니다.

<br/>

앱이 실행되면 **[사용자 가이드](USER-GUIDE.ko.md)** 를 참고하여 텍스트 번역, 재작성, 변환, 프롬프트 관리 및 모델 구성 방법을 알아보세요.

<br/><br/>

<a id="installation"></a>
## 설치

<a id="windows-electron"></a>
### Windows (Electron)

- [릴리스](https://github.com/wsj-br/transrewrt/releases)에서 최신 설치 프로그램을 다운로드하세요.
- `.exe` 파일을 실행하고 설치 안내를 따르세요.
- 첫 실행 시: 시작 메뉴 또는 바탕화면 바로가기에서 앱을 시작하세요.

<br/>

> ℹ️ **참고**<br/>
> Windows에서는 서명되지 않았거나 독립 개발자가 만든 앱의 경우 다음 보안 경고 중 하나가 표시될 수 있습니다:
>   - **사용자 계정 컨트롤(UAC)**: "알 수 없는 게시자가 개발한 이 앱이 장치에 변경을 가하도록 허용하시겠습니까?" → **예**를 클릭하세요.
>   - **Microsoft Defender SmartScreen**: "Windows가 PC를 보호했습니다" → **추가 정보** 클릭 → **그래도 실행** 클릭하세요.
>
> 이는 앱이 Microsoft나 주요 게시업체에 의해 서명되지 않았기 때문에 발생합니다. 공식 GitHub 릴리스에서 다운로드한 경우 안전하며, 아래의 SHA256 체크섬을 확인하세요.

<br/>

<a id="linux-electron"></a>
### Linux (Electron)

- [릴리스](https://github.com/wsj-br/transrewrt/releases)에서 일치하는 `.AppImage` 파일(`x64` 또는 `arm64`)을 다운로드합니다.
- x86_64/amd64 시스템에서는 다음 명령어를 실행합니다: `chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage`. ARM64 시스템에서는 `...-arm64.AppImage` 파일명을 사용합니다.
- 추가 종속성 (Debian/Ubuntu): `sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth`
- 자세한 내용은 [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)를 참조하세요.

<br/>

<a id="docker"></a>
### Docker

- 가져오기: `docker pull ghcr.io/wsj-br/transrewrt:latest`
- 하나 이상의 제공업체 키를 환경 변수로 설정하세요 (예: OpenRouter의 경우 `OPENROUTER_API_KEY`). `-e` 옵션 또는 `docker compose` / `.env` 파일을 사용하여 변수를 전달하면 비밀 정보가 이미지에 포함되지 않습니다.
- 제공업체 키는 **웹 UI에 입력하지 않습니다**. 서버가 환경 변수에서 키를 읽어옵니다.

예시 - 영구 저장을 위한 명명된 볼륨 사용 (환경 변수로 OpenRouter 키 설정):

```bash
OPENROUTER_API_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_API_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

또는 Docker Compose를 선호한다면 다음을 사용하세요:

```
# download the compose file
wget https://github.com/wsj-br/transrewrt/raw/refs/heads/master/production.yml -O transrewrt.yml
# edit the file to add the API_KEYS and adjust the timezone (TZ)
vi transrewrt.yml
# start the container
docker compose -f transrewrt.yml up -d
```

모든 환경 변수(`PORT`, `CONFIG_PATH`, `TZ`, LLM 키(`OPENROUTER_API_KEY`, `OPENAI_API_KEY` 등)에 대해서는 [설정](#configuration-and-environment)을 참조하세요.

<a id="configuring-the-timezone"></a>
### 시간대 설정

애플리케이션의 사용자 인터페이스 날짜 및 시간은 **브라우저의** 로케일과 시간대를 따릅니다. **서버 측** 동작(로그 기록 등)의 경우, 컨테이너는 `TZ` 환경 변수를 사용합니다. 기본값은 `TZ=Europe/London`입니다.

다른 시간대를 사용하려면 Compose 파일에서 `TZ`를 설정하세요. 예를 들어:

```yaml
environment:
  - TZ=America/Sao_Paulo
```

또는 컨테이너 실행 시 Docker에서 직접 전달할 수 있습니다:

```bash
--env TZ=America/Sao_Paulo
```

많은 Linux 호스트에서 시스템 시간대 이름을 다음 명령어로 복사할 수 있습니다:

```bash
echo TZ=\"$(</etc/timezone)\"
```

유효한 시간대 이름 목록은 [tz 데이터베이스](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) (위키백과)에서 관리됩니다.

<br/><br/>

<a id="getting-an-openrouter-api-key"></a>
## OpenRouter API 키 발급 방법

Transrewrt는 여러 AI 제공업체를 지원합니다. [OpenRouter](https://openrouter.ai)는 여러 모델을 하나의 키로 통합하고 무료 모델도 제공하기 때문에 인기 있는 선택지입니다.

1. [openrouter.ai](https://openrouter.ai)에서 회원 가입 또는 로그인합니다.
2. [Keys](https://openrouter.ai/keys) 페이지를 열고 새 키를 생성합니다 (이름을 지정하고, 선택적으로 크레딧 한도를 설정할 수 있음). 크레딧 추가 없이도 무료 모델을 사용할 수 있습니다.
3. **데스크탑(Electron)**: 키를 **설정 → API** 에 붙여넣습니다. **Docker**: `OPENROUTER_API_KEY` 와 같은 환경 변수를 설정하세요 ([빠른 시작](#quick-start) 참조).

번역, 재작성, 변환 작업에는 OpenRouter의 **Body Builder** 모델([`openrouter/bodybuilder`](https://openrouter.ai/openrouter/bodybuilder))을 사용하지 마세요. 이 모델은 완성된 텍스트가 아닌 JSON 요청 페이로드를 반환합니다. 자세한 내용은 사용자 안내서의 [설정 → 모델](USER-GUIDE.ko.md#models)을 참조하세요.

또한 OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras 등의 다른 제공업체를 사용하거나 [Ollama](https://ollama.com)를 사용해 로컬에서 모델을 실행할 수도 있습니다. 지원되는 제공업체 및 환경 변수 전체 목록은 [설정](#configuration-and-environment)을 참조하세요.

> ⚠️ **경고**<br/>
> 다른 장치, 컨테이너 또는 서비스에서 Ollama를 사용하는 경우, Ollama가 외부 연결(localhost 전용이 아님)을 허용하도록 설정해야 합니다.

제한 사항, BYOK 및 기타 자세한 내용은 [OpenRouter 인증](https://openrouter.ai/docs/api/reference/authentication)을 참조하세요.

<br/><br/>

<a id="configuration-and-environment"></a>
## 구성 및 환경

**설정 파일 위치**

| 배포 방식         | 설정 위치                                   |
| ------------------ | ------------------------------------------------- |
| Electron (Windows) | `%APPDATA%\transrewrt\`                           |
| Electron (Linux)   | `~/.config/transrewrt/`                           |
| Web / Docker       | `/app/data/config.json` (볼륨을 사용하여 영구 저장) |

<br/>

**환경 변수** (웹/Docker 전용; Electron은 로컬 설정 파일 사용)

| 변수               | 기본값                  | 설명 |
| ---------------- | ----------------------- | ----------- |
| `PORT`           | `5000`                  | 서버 리스닝 포트 |
| `CONFIG_PATH`    | `/app/data/config.json` | 설정 파일 경로 |
| `TZ`             | `Europe/London`         | 서버 측 시간(로그 등)을 위한 IANA 시간대; UI는 여전히 브라우저 설정 따름. [Docker → 시간대](#docker-timezone) 참조 |
| `OPENROUTER_API_KEY` | *(비어 있음)*           | OpenRouter API 키 |
| `OPENAI_API_KEY`     | *(비어 있음)*           | OpenAI API 키 |
| `CEREBRAS_API_KEY`   | *(비어 있음)*           | Cerebras API 키 |
| `ANTHROPIC_API_KEY`  | *(비어 있음)*           | Anthropic API 키 |
| `GOOGLE_API_KEY`     | *(비어 있음)*           | Google Gemini API 키 |
| `DEEPSEEK_API_KEY`   | *(비어 있음)*           | DeepSeek API 키 |
| `GROQ_API_KEY`       | *(비어 있음)*           | Groq API 키 |
| `MISTRAL_API_KEY`    | *(비어 있음)*           | Mistral API 키 |
| `OLLAMA_URL`     | *(비어 있음)*           | Ollama 기본 URL (예: `http://host.docker.internal:11434`) |
| `XAI_API_KEY`        | *(비어 있음)*           | xAI API 키 |

사용하는 제공자만 구성하세요. 모델 ID는 네임스페이스가 지정됩니다 (`openrouter/…`, `openai/…`, `cerebras/…`, `ollama/…` 등).

**비용 표시:** OpenRouter는 적용 가능한 경우 정확한 청구 비용을 반환합니다. 다른 제공자는 OpenRouter 키가 있는 경우 OpenRouter의 공개 모델 가격에서 **예상** 비용을 사용합니다. 키가 없으면 OpenRouter가 아닌 제공자의 비용이 `0`으로 표시될 수 있습니다. 예상치는 청구서가 아닙니다.

<br/>

**데이터 및 영구 저장:** Docker의 경우, `/app/data`에 볼륨을 마운트하여 `config.json`과 SQLite 데이터베이스가 컨테이너 재시작 시에도 유지되도록 하세요. 볼륨이 없으면 컨테이너가 중지될 때 모든 데이터가 삭제됩니다.

**개발자:** 이전의 단일 키 설정을 대체하는 변경 사항을 풀한 후, 로컬 파일이 제거된 필드(`api_key`, `api_url`, 프록시 옵션)를 여전히 사용 중이라면 `data/config.json`을 `src/config-defaults/config_default.json`의 새 기본 형식으로 재설정하거나 병합하세요.

<br/>

**웹 인증:**

- 기본 관리자: `admin` / `transrewrt26`.
- 사용자 관리는 **설정 → 사용자**에서 수행하세요.
- 비밀번호 재설정: `docker exec <container> reset-web-password '<username>' '<new-password>'`
  (소스에서 실행 시: `pnpm run reset-web-password -- <username> <new-password>`)

<br/>

> ⚠️ **경고**<br/>
> 네트워크 접근이 가능한 호스트에서는 즉시 기본 관리자 비밀번호를 변경하세요.

<br/>

폰트, 모델, 언어 등의 주요 설정은 애플리케이션의 설정에서 확인할 수 있습니다.

<br/><br/>

<a id="development-and-architecture"></a>
## 개발 및 아키텍처

- **개발:** 설정, 빌드, 테스트 및 배포(Electron, Web, Docker) - **[dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)** 참조.
- **아키텍처 및 시스템 개요:** 폴더 구조, 기술 스택, 설계 결정 사항 - **[dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)** 참조.

<br/><br/>

<a id="reporting-issues"></a>
## 문제 보고

[GitHub](https://github.com/wsj-br/transrewrt/issues)에서 이슈를 등록하세요. 사용 중인 플랫폼(Windows / Linux / Docker) 및 앱 버전(정보 대화상자 또는 릴리스 페이지에 표시됨)을 포함해 주세요.

<br/><br/>

<a id="disclaimer"></a>
## 책임의 면제

제품 이름 및 아이콘은 각 소유자에게 속하며 식별 용도로만 사용됩니다. 이 소프트웨어는 언급된 브랜드와 제휴하거나 승인받지 않았습니다.

<br/><br/>

<a id="license"></a>
## 라이선스

Copyright © 2026 Waldemar Scudeller Jr.

[Apache License 2.0](LICENSE)
