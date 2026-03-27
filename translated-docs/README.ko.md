---
translated_at: "2026-03-27T23:10:34.711Z"
source_hash: "076eff841a5f0e4f5c43a00dd28f2702bd2dde0602a830890285b5ffdc38ad5a"
source_mtime: "2026-03-27T20:34:13.877Z"
model: "qwen/qwen3-235b-a22b-2507"
---
<p align="center">
  <img src="../images/transrewrt_logo.svg" alt="Transrewrt 로고" width="120" />
</p>

<h1 align="center">Transrewrt</h1>

<p align="center">
  <a href="https://github.com/wsj-br/transrewrt/releases"><img src="https://img.shields.io/badge/version-1.0.15-blue" alt="버전"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-Apache%202.0-green" alt="라이선스: Apache 2.0"></a>
  <img src="https://img.shields.io/badge/platform-Windows%20%7C%20Linux%20%7C%20Docker-lightgrey" alt="플랫폼">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react" alt="React 19">
  <img src="https://img.shields.io/badge/Electron-41-47848F?logo=electron" alt="Electron 41">
</p>

AI 기반 텍스트 도구: 번역, 스타일 변경, 맞춤형 프롬프트로 변환 — 다수의 AI 공급자(OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI 및 로컬 Ollama)를 사용합니다. 데스크톱 앱(Electron) 또는 셀프호스팅 웹 앱(Docker)으로 실행됩니다.

- **번역** — 수십 개 언어 간 번역, 원문 언어 자동 감지 가능
- **다시 작성** — 문법 수정, 명료도 향상, 격식 있는/격식 없는 표현, 축약, 확장, 기술적인 표현 등
- **변환** — 사용자 정의 AI 프롬프트; 프롬프트 생성 및 관리, 각 프롬프트당 선택적 대상 언어 설정
- **기록** — 입력/출력 텍스트를 포함한 전체 실행 기록, 필터링 및 내보내기 기능
- **모델 및 비용** — 설정된 공급자 중 원하는 모델 선택; 로그, 모델/작업/일별 요약을 포함한 비용 및 사용량 대시보드
- **UI** — 다국어 인터페이스(30+ 언어, RTL 지원), 폰트, ...
- **웹 모드** — 관리자 역할이 있는 다중 사용자 지원
- **데스크톱** — Windows 및 Linux용 Electron 앱
- **셀프호스팅** — amd64 및 arm64(Raspberry Pi 호환)용 Docker 이미지

설치 후 모든 기능에 대한 자세한 안내는 **[사용자 안내서](USER-GUIDE.ko.md)** 를 참조하세요.

<small>**다른 언어로 읽기:** </small>
<small id="lang-list"> [English (UK)](../README.md) · [Português (BR)](README.pt-BR.md) · [العربية](README.ar.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [Hrvatski](README.hr.md) · [Čeština](README.cs.md) · [Nederlands](README.nl.md) · [English (US)](README.en-US.md) · [Filipino](README.tl.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [हिन्दी](README.hi.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [Basa Jawa](README.jv.md) · [한국어](README.ko.md) · [Bahasa Melayu](README.ms.md) · [فارسی](README.fa.md) · [Polski](README.pl.md) · [Português (PT)](README.pt.md) · [ਪੰਜਾਬੀ](README.pa.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [Slovenčina](README.sk.md) · [Español](README.es.md) · [Kiswahili](README.sw.md) · [Svenska](README.sv.md) · [తెలుగు](README.te.md) · [ภาษาไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Tiếng Việt](README.vi.md)</small>

<small>

> **UI 및 문서 번역에 대한 참고사항:** 영어(영국) 원문을 제외한 모든 인터페이스 언어는 AI 모델을 사용해 번역되었으며, 표현이 부정확하거나 오류가 포함되었을 수 있습니다.

</small>

<br/>

<a id="screenshots"></a>

## 스크린샷

**언어 선택기**

![언어 선택기](../images/screenshots/ko/language-selector.png)

**번역**

![번역](../images/screenshots/ko/translate.png)

**변환 - 프롬프트 편집기**

![변환 - 프롬프트 편집기](../images/screenshots/ko/transform-prompt-edit.png)

**대시보드**

![비용 대시보드](../images/screenshots/ko/dashboard-summary.png)

**기록**

![기록](../images/screenshots/ko/history.png)

**설정 - 모델 선택**

![설정 - 모델 선택](../images/screenshots/ko/settings-models.png)

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
- [OpenRouter API 키 발급받기](#getting-an-openrouter-api-key)
- [구성 및 환경](#configuration-and-environment)
- [개발 및 아키텍처](#development-and-architecture)
- [릴리스 및 태그](#releases-and-tags)
- [기여하기](#contributing)
- [면책 조항](#disclaimer)
- [라이선스](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="quick-start"></a>

## 빠른 시작

**Docker (자체 호스팅에 권장)**

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest

OPENROUTER_API_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_API_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

`sk-or-your-key` 부분을 [OpenRouter API 키](https://openrouter.ai/keys)로 변경하세요(또는 다른 제공업체의 키를 설정할 수 있음. [설정 및 환경](#configuration-and-environment) 섹션 참조). [http://localhost:5000](http://localhost:5000)에 접속하여 서비스를 공개하기 전에 기본 관리자 비밀번호를 변경하세요.

<br/>

> ℹ️ **참고**<br/>
> Docker에서는 OpenRouter_API_KEY, OPENAI_API_KEY, CEREBRAS_API_KEY 등 환경 변수를 통해 LLM 자격 증명을 설정합니다(웹 UI에서는 설정하지 않음). 데스크톱(Electron)의 경우 **설정 → API** 메뉴에서 키를 설정합니다.

<br/>

**Windows**

[릴리스](https://github.com/wsj-br/transrewrt/releases) 페이지에서 최신 `Transrewrt Setup x.y.z.exe` 파일을 다운로드하고 설치 프로그램을 실행한 뒤 시작 메뉴 또는 바탕화면 바로가기에서 실행하세요. **설정 → API**에서 API 키를 입력하시기 바랍니다. 최소한 하나 이상의 제공업체를 설정해야 하며, 무료 모델의 경우 OpenRouter를 사용하는 것이 일반적입니다.

<br/>

**Linux**

[릴리스](https://github.com/wsj-br/transrewrt/releases) 페이지에서 CPU에 맞는 `.AppImage` 파일을 다운로드하세요(`x64`는 일반적인 PC용, `arm64`는 라즈베리 파이 4 이상을 포함한 대부분의 ARM 기기용). 그런 다음 다음 명령어를 실행하세요:

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

실행 후 **설정 → API**에서 API 키를 입력하세요. 최소한 하나 이상의 제공업체를 설정해야 하며, 무료 모델의 경우 OpenRouter를 사용하는 것이 일반적입니다.

Debian/Ubuntu 사용자라면 먼저 다음 추가 종속성을 설치해야 할 수 있습니다:

```bash
sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth
```

자세한 내용은 [설치 → Linux](#linux-electron) 를 참조하세요.

<br/>

> ℹ️ **참고**<br/>
> 현재 macOS는 지원되지 않습니다. Transrewrt는 Windows, Linux, Docker용으로 제공됩니다.

<br/>

앱 실행 후 사용법을 익히려면 **[사용자 안내서](USER-GUIDE.ko.md)** 를 참고해 주세요. 텍스트 번역, 재작성 및 변환, 프롬프트 관리, 모델 구성 방법 등을 안내합니다.

<br/><br/>

<a id="installation"></a>

## 설치

<a id="windows-electron"></a>
### Windows (Electron)

- [릴리스 페이지](https://github.com/wsj-br/transrewrt/releases)에서 최신 설치 프로그램을 다운로드하세요.
- `.exe` 파일을 실행하고 설치 마법사의 지시를 따르세요.
- 처음 실행 시: 시작 메뉴 또는 바탕화면 바로가기를 통해 앱을 시작하세요.

<br/>

<a id="linux-electron"></a>
### Linux (Electron)

- [릴리스 페이지](https://github.com/wsj-br/transrewrt/releases)에서 올바른 `.AppImage` 파일(`x64` 또는 `arm64`)을 다운로드하세요.
- 실행: x86_64/amd64 시스템에서는 `chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage` 명령을, ARM64 시스템에서는 `...-arm64.AppImage` 파일 이름을 사용하세요.
- 추가 종속성 (Debian/Ubuntu): `sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth`
- 더 자세한 정보는 [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)를 참고하세요.

<br/>

<a id="docker"></a>
### Docker

- 가져오기: `docker pull ghcr.io/wsj-br/transrewrt:latest`
- 최소한 하나 이상의 공급자 키를 환경 변수로 설정하세요 (예: OpenRouter의 경우 `OPENROUTER_API_KEY`). `-e` 옵션이나 `docker compose` / `.env` 파일을 사용하여 변수를 전달하여 민감 정보가 이미지에 포함되지 않도록 하세요.
- 공급자 키는 **웹 UI에 입력하지 않습니다**. 서버가 환경 변수에서 설정값을 읽어옵니다.

예시 - 지속성을 위해 명명된 볼륨 사용 (환경 변수로 OpenRouter 키 전달):

```bash
OPENROUTER_API_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_API_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

또는 Docker Compose를 사용하고 싶다면 다음을 사용하세요:

# compose 파일 다운로드
wget https://github.com/wsj-br/transrewrt/raw/refs/heads/master/production.yml -O transrewrt.yml
# API_KEYS를 추가하기 위해 파일 편집
vi transrewrt.yml
# 컨테이너 시작
docker compose -f transrewrt.yml up -d
```

<br/>

| 옵션     | 설명                                                                                                                            |
|----------|----------------------------------------------------------------------------------------------------------------------------------------|
| 포트     | `5000` (`-p 5000:5000`로 매핑)                                                                                                       |
| 볼륨   | 설정 및 데이터베이스 영속성을 위해 `/app/data` 마운트                                                                                  |
| 환경 변수 | `PORT`, `CONFIG_PATH`, 그리고 LLM 키(`OPENROUTER_API_KEY`, `OPENAI_API_KEY`, …) - [설정](#configuration-and-environment) 참고 |

소스에서 빌드하여 실행하려면: `docker compose up --build -d` 또는 `pnpm docker:up` - [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) 참고.

<br/><br/>

<a id="getting-an-openrouter-api-key"></a>

## OpenRouter API 키 발급 받기

Transrewrt는 여러 AI 제공업체를 지원합니다. [OpenRouter](https://openrouter.ai)는 다양한 모델을 하나의 키로 이용할 수 있고 무료 모델도 제공하기 때문에 인기 있는 선택지입니다.

1. [openrouter.ai](https://openrouter.ai)에서 회원 가입하거나 로그인하세요.
2. [Keys](https://openrouter.ai/keys) 페이지를 열고 새 키를 생성하세요 (이름을 입력하고, 선택적으로 크레딧 한도를 설정할 수 있음). 크레딧을 충전하지 않아도 무료 모델을 사용할 수 있습니다.
3. **데스크톱(Electron)의 경우:** 키를 **설정 → API** 에 붙여넣으세요. **도커(Docker)의 경우:** `OPENROUTER_API_KEY` 와 같은 환경 변수를 설정하세요 (자세한 내용은 [빠른 시작](#quick-start) 참조).

번역, 재작성, 변환 작업을 위해서는 OpenRouter의 **Body Builder** 모델 ([`openrouter/bodybuilder`](https://openrouter.ai/openrouter/bodybuilder))을 사용하지 마세요. 이 모델은 완성된 텍스트가 아닌 JSON 요청 페이로드를 반환합니다. 자세한 내용은 사용자 설명서의 [설정 → 모델](USER-GUIDE.ko.md#models)을 참조하세요.

또한 OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras와 같은 다른 제공업체를 사용하거나, [Ollama](https://ollama.com)을 통해 로컬에서 모델을 실행할 수도 있습니다. 지원되는 제공업체와 환경 변수의 전체 목록은 [구성 및 환경 설정](#configuration-and-environment)을 참조하세요.

> ⚠️ **경고**<br/>
> 다른 장치, 컨테이너 또는 서비스에서 Ollama를 사용하는 경우, localhost 전용이 아닌 외부 연결을 허용하도록 Ollama를 설정해야 한다는 점을 기억하세요.

제한 사항, 사용자 키(BYOK) 등 자세한 정보는 [OpenRouter 인증](https://openrouter.ai/docs/api/reference/authentication) 문서를 참고하세요.

<br/><br/>

<a id="configuration-and-environment"></a>

## 구성 및 환경

**설정 파일 위치**

| 배포 방식         | 설정 위치                                   |
| ------------------ | ------------------------------------------------- |
| Electron (Windows) | `%APPDATA%\transrewrt\`                           |
| Electron (Linux)   | `~/.config/transrewrt/`                           |
| 웹 / 도커       | `/app/data/config.json` (볼륨 사용하여 영구 저장) |

<br/>

**환경 변수** (웹/도커 전용; Electron은 로컬 설정 파일 사용)

| 변수               | 기본값                  | 설명 |
| ---------------- | ----------------------- | ----------- |
| `PORT`           | `5000`                  | 서버 수신 포트 |
| `CONFIG_PATH`    | `/app/data/config.json` | 설정 파일 경로 |
| `OPENROUTER_API_KEY` | *(없음)*               | OpenRouter API 키 |
| `OPENAI_API_KEY`     | *(없음)*               | OpenAI API 키 |
| `CEREBRAS_API_KEY`   | *(없음)*               | Cerebras API 키 |
| `ANTHROPIC_API_KEY`  | *(없음)*               | Anthropic API 키 |
| `GOOGLE_API_KEY`     | *(없음)*               | Google Gemini API 키 |
| `DEEPSEEK_API_KEY`   | *(없음)*               | DeepSeek API 키 |
| `GROQ_API_KEY`       | *(없음)*               | Groq API 키 |
| `MISTRAL_API_KEY`    | *(없음)*               | Mistral API 키 |
| `OLLAMA_URL`     | *(없음)*               | Ollama 기본 URL (예: `http://host.docker.internal:11434`) |
| `XAI_API_KEY`        | *(없음)*               | xAI API 키 |

사용하는 제공업체만 설정하세요. 모델 ID는 이름공간이 지정됩니다 (`openrouter/…`, `openai/…`, `cerebras/…`, `ollama/…` 등).

**비용 표시:** OpenRouter는 적용 가능한 경우 정확한 청구 비용을 반환합니다. 다른 제공업체는 OpenRouter 키가 있는 경우 OpenRouter의 공개 가격정보를 기반으로 **추정** 비용을 사용합니다. 키가 없으면 OpenRouter 외부 제공업체의 비용이 `0`으로 표시될 수 있습니다. 추정치는 청구서가 아닙니다.

<br/>

**데이터 및 영구 저장:** 도커의 경우, `/app/data`에 볼륨을 마운트하여 `config.json`과 SQLite 데이터베이스가 컨테이너 재시작 시에도 유지되도록 하세요. 볼륨이 없으면 컨테이너 종료 시 모든 데이터가 소실됩니다.

**개발자:** 기존 단일 키 설정을 대체하는 변경 사항을 풀링한 후, 로컬 설정 파일이 제거된 필드(`api_key`, `api_url`, 프록시 옵션)를 아직 사용 중이라면 `data/config.json`을 `src/config-defaults/config_default.json`의 새로운 기본 형식으로 재설정하거나 병합해야 합니다.

<br/>

**웹 인증:**

- 기본 관리자: `admin` / `transrewrt26`.
- 사용자 관리는 **설정 → 사용자**에서 가능.
- 비밀번호 재설정: `docker exec <컨테이너> reset-web-password '<사용자명>' '<새비밀번호>'`
  (소스에서 실행: `pnpm run reset-web-password -- <사용자명> <새비밀번호>`)

<br/>

> ⚠️ **경고**<br/>
> 네트워크로 접근 가능한 모든 호스트에서 기본 관리자 비밀번호를 즉시 변경하세요.

<br/>

주요 설정(글꼴, 모델, 언어 등)은 애플리케이션 설정에서 확인할 수 있습니다.

<br/><br/>

<a id="development-and-architecture"></a>

## 개발 및 아키텍처

- **개발:** 설정, 빌드, 테스트, 배포 (Electron, 웹, Docker) - **[dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)** 참조.
- **아키텍처 및 시스템 개요:** 폴더 구조, 기술 스택, 설계 결정 사항 - **[dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)** 참조.

<br/><br/>

<a id="releases-and-tags"></a>
## 릴리스 및 태그

- **Git 태그** `v`* (예: `v1.0.10`)는 [릴리스 워크플로우](.github/workflows/release.yml)를 트리거합니다. **GitHub 릴리스**에는 Windows 설치 파일(`.exe`)과 Linux AppImage(**x64** 및 **arm64**)가 첨부됩니다.
- **Docker 이미지**는 `ghcr.io/wsj-br/transrewrt`에 게시됩니다. 이미지 태그는 Git 버전과 일치합니다 (예: `v1.0.10` → `ghcr.io/wsj-br/transrewrt:1.0.10`) 및 `latest` 태그도 포함됩니다. 멀티 아키텍처 지원: `linux/amd64` 및 `linux/arm64` (예: 라즈베리 파이).

<br/><br/>

<a id="contributing"></a>
## 기여 방법

1. 저장소를 포크합니다.
2. 기능 브랜치 생성: `git checkout -b feature/my-feature`
3. 변경 사항을 명확한 메시지와 함께 커밋하세요.
4. 푸시하고 `main` 브랜치에 풀 리퀘스트를 엽니다.

제출 전 기존 코드 스타일을 따라야 하며, Electron 및 웹 두 모드에서 변경 사항을 테스트해 주세요. 빌드 및 테스트 지침은 [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)를 참고하세요.

<br/>

**이슈 보고:** [GitHub](https://github.com/wsj-br/transrewrt/issues)에서 이슈를 등록하세요. 사용 중인 플랫폼(Windows / Linux / Docker)과 앱 버전(정보 대화상자 또는 릴리스 페이지에 표시됨)을 포함해 주세요.

<br/><br/>

<a id="disclaimer"></a>

## 공지 사항

제품 이름과 아이콘은 각각의 소유권자에게 속하며, 식별 목적으로만 사용됩니다. 본 소프트웨어는 언급된 브랜드와 관련이 없으며, 해당 브랜드의 인정이나 후원을 받지 않습니다.

<br/><br/>

<a id="license"></a>
## 라이선스

저작권 © 2026 월더마르 스쿠델러 주니어.

[Apache 라이선스 2.0](LICENSE)