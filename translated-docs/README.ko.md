---
translated_at: "2026-03-25T22:20:29.458Z"
source_hash: "7b3703140b5006a6bfb0700c530b1afcc6e9b0fc364d69c57960ab4609dccbd9"
source_mtime: 1774475429145.525
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

AI 기반 텍스트 도구: 여러 AI 제공자(OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI 및 로컬 Ollama)를 활용하여 언어 간 번역, 다양한 스타일로 재작성 및 사용자 지정 프롬프트를 통한 변환 — 데스크톱 앱(Electron) 또는 자체 호스팅 웹 앱(Docker)으로 실행.

- **번역** — 수십 가지 언어 간 번역, 출처 언어 자동 감지 기능 포함
- **재작성** — 문법 수정, 명확도 개선, 격식 있는/비격식 표현, 축약, 확장, 기술적 표현 등
- **변환** — 사용자 지정 AI 프롬프트; 프롬프트 생성 및 관리, 프롬프트별 대상 언어 선택 가능
- **기록** — 입력/출력 텍스트를 포함한 전체 실행 기록, 필터링 및 내보내기 기능
- **모델 및 비용** — 설정된 제공자 중에서 모델 선택 가능; 비용 및 사용량 대시보드 제공(로그, 모델/작업/일별 요약)
- **UI** — 다국어 인터페이스(30+ 언어, RTL 지원), 폰트 등
- **웹 모드** — 관리자 역할을 포함한 다중 사용자 지원
- **데스크톱** — Windows 및 Linux용 Electron 앱
- **자체 호스팅** — amd64 및 arm64용 Docker 이미지 (라즈베리 파이 호환)

설치 후 모든 기능에 대한 상세 사용법은 **[사용자 안내서](USER-GUIDE.ko.md)** 를 참조하세요.

<small>**다른 언어로 읽기:** [English (UK)](../README.md) · [Português (BR)](README.pt-BR.md) · [العربية](README.ar.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [Hrvatski](README.hr.md) · [Čeština](README.cs.md) · [Nederlands](README.nl.md) · [English (US)](README.en-US.md) · [Filipino](README.tl.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [हिन्दी](README.hi.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [Basa Jawa](README.jv.md) · [한국어](README.ko.md) · [Bahasa Melayu](README.ms.md) · [فارسی](README.fa.md) · [Polski](README.pl.md) · [Português (PT)](README.pt.md) · [ਪੰਜਾਬੀ](README.pa.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [Slovenčina](README.sk.md) · [Español](README.es.md) · [Kiswahili](README.sw.md) · [Svenska](README.sv.md) · [తెలుగు](README.te.md) · [ภาษาไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Tiếng Việt](README.vi.md)</small>

<small>

> **UI 및 문서 번역 주의사항:** 원본 영어(영국)을 제외한 모든 인터페이스 언어는 AI 모델을 사용하여 번역되었으며, 표현이 부정확하거나 오류가 있을 수 있습니다.

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
- [설정 및 환경](#configuration-and-environment)
- [개발 및 아키텍처](#development-and-architecture)
- [릴리스 및 태그](#releases-and-tags)
- [기여하기](#contributing)
- [면책조항](#disclaimer)
- [라이선스](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="quick-start"></a>
## 빠른 시작

**Docker (자체 호스팅 시 권장)**

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest

OPENROUTER_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

`sk-or-your-key`를 [OpenRouter API 키](https://openrouter.ai/keys)로 대체하세요 (또는 다른 제공업체 키를 설정할 수 있음. [설정](#configuration-and-environment) 참조). [http://localhost:5000](http://localhost:5000)을 열고 서비스를 외부에 공개하기 전에 기본 관리자 암호를 변경하세요.

<br/>

> ℹ️ **참고**<br/>
> Docker에서는 OpenRouter, OpenAI, Cerebras 등 LLM 자격 증명을 환경 변수(`OPENROUTER_KEY`, `OPENAI_KEY`, `CEREBRAS_KEY` 등)를 통해 설정하며, 웹 UI에서는 설정하지 않습니다. 데스크톱 버전(Electron)은 **설정 → API** 메뉴에서 키를 구성합니다.

<br/>

**Windows**

[릴리스](https://github.com/wsj-br/transrewrt/releases) 페이지에서 최신 `Transrewrt Setup x.y.z.exe`를 다운로드하고 설치 프로그램을 실행한 후 시작 메뉴 또는 바탕화면 바로가기에서 실행합니다. **설정 → API**에서 API 키를 입력하세요. 최소한 하나 이상의 제공업체를 설정해야 하며, 무료 모델 사용 시 OpenRouter가 일반적입니다.

<br/>

**Linux**

[릴리스](https://github.com/wsj-br/transrewrt/releases) 페이지에서 CPU에 맞는 `.AppImage` 파일을 다운로드하세요 (일반적인 PC는 `x64`, Raspberry Pi 4 이상의 ARM 장비는 `arm64`). 이후 아래 명령을 실행하세요:

```bash
chmod +x Transrewrt-x.y.z-x64.App Judiciary && ./Transrewrt-x.y.z-x64.AppImage
```

**설정 → API**에서 API 키를 입력하세요. 최소한 하나의 제공업체를 구성해야 하며, 무료 모델을 사용하려면 OpenRouter가 일반적입니다.

Debian/Ubuntu의 경우 다음 추가 종속성을 먼저 설치해야 할 수 있습니다:

```bash
sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth
```

자세한 내용은 [설치 → Linux](#linux-electron)를 참조하세요.

<br/>

> ℹ️ **참고**<br/>
> macOS는 현재 지원되지 않습니다. Transrewrt는 Windows, Linux, Docker에서 사용할 수 있습니다.

<br/>

앱이 실행된 후에는 **[사용자 가이드](USER-GUIDE.ko.md)** 를 참고하여 텍스트 번역, 재작성, 변환, 프롬프트 관리, 모델 설정 방법을 익히세요.

<br/><br/>

<a id="installation"></a>
## 설치

<a id="windows-electron"></a>
### Windows (Electron)

- [릴리스](https://github.com/wsj-br/transrewrt/releases) 페이지에서 최신 설치 프로그램을 다운로드하세요.
- `.exe` 파일을 실행하고 설치 프로그램 안내를 따르세요.
- 첫 실행: 시작 메뉴 또는 바탕화면 바로가기를 통해 앱을 실행하세요.

<br/>

<a id="linux-electron"></a>
### Linux (Electron)

- [릴리스](https://github.com/wsj-br/transrewrt/releases) 페이지에서 해당하는 `.AppImage` 파일(`x64` 또는 `arm64`)을 다운로드하세요.
- 실행: x86_64/amd64 시스템에서는 `chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage`, ARM64 시스템에서는 `...-arm64.AppImage` 파일 이름을 사용하세요.
- 추가 종속성(Debian/Ubuntu): `sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth`
- 더 자세한 내용은 [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)를 참조하세요.

<br/>

<a id="docker"></a>
### Docker

- 가져오기: `docker pull ghcr.io/wsj-br/transrewrt:latest`
- 최소 하나 이상의 제공업체 키를 환경 변수를 통해 설정하세요 (예: OpenRouter는 `OPENROUTER_KEY`). `-e` 또는 `docker compose` / `.env`를 통해 변수를 전달하여 민감 정보가 이미지에 직접 포함되지 않도록 하세요.
- 제공업체 키는 **웹 UI에 입력하지 않습니다.** 서버가 환경 변수에서 읽어옵니다.

예 - 영구 저장을 위한 명명된 볼륨 사용 (환경 변수로 OpenRouter 키 제공):

```bash
OPENROUTER_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

<br/>

| 옵션     | 설명                                                                                                   |
| -------- | ------------------------------------------------------------------------------------------------------------- |
| 포트     | `5000` (`-p 5000:5000`으로 매핑)                                                                           |
| 볼륨     | 설정과 데이터베이스 영구 저장을 위해 `/app/data` 마운트                                                      |
| 환경 변수 | `PORT`, `CONFIG_PATH`, LLM 키(`OPENROUTER_KEY`, `OPENAI_KEY` 등) - [설정](#configuration-and-environment) 참조 |

소스에서 직접 빌드 및 실행: `docker compose up --build -d` 또는 `pnpm docker:up` - [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) 참조.

<br/><br/>

<a id="getting-an-openrouter-api-key"></a>

## OpenRouter API 키 발급 방법

Transrewrt는 여러 AI 제공업체를 지원합니다. [OpenRouter](https://openrouter.ai)는 여러 모델을 하나의 키로 통합하고 무료 모델도 제공하기 때문에 인기 있는 선택지입니다.

1. [openrouter.ai](https://openrouter.ai)에서 가입 또는 로그인합니다.
2. [Keys](https://openrouter.ai/keys) 페이지를 열고 새 키를 생성합니다(이름을 지정하고, 선택적으로 크레딧 한도를 설정할 수 있음). 크레딧 추가 없이도 무료 모델을 사용할 수 있습니다.
3. **데스크톱 (Electron):** **설정 → API**에서 키를 붙여넣습니다. **도커(Docker):** `OPENROUTER_KEY`와 같은 환경 변수를 설정합니다 (자세한 내용은 [빠른 시작](#quick-start) 참조).

번역, 재작성 또는 변환 작업에는 OpenRouter의 **Body Builder** 모델 ([`openrouter/bodybuilder`](https://openrouter.ai/openrouter/bodybuilder))을 사용하지 마십시오. 이 모델은 완성된 텍스트가 아닌 JSON 요청 페이로드를 반환합니다. 자세한 내용은 사용자 안내서의 [설정 → 모델](USER-GUIDE.ko.md#models)을 참조하세요.

또한 OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras와 같은 다른 제공업체를 사용하거나 [Ollama](https://ollama.com)로 로컬에서 모델을 실행할 수도 있습니다. 지원되는 제공업체와 환경 변수 목록은 [구성](#configuration-and-environment) 항목을 참조하세요.

> ⚠️ **경고**<br/>
> 다른 장치, 컨테이너 또는 서비스에서 Ollama를 사용하는 경우, localhost 전용이 아닌 외부 연결을 허용하도록 Ollama를 구성하는 것을 잊지 마세요.

<br/><br/>

<a id="configuration-and-environment"></a>
## 구성 및 환경 설정

**설정 파일 위치**

| 배포 방식        | 설정 위치                                    |
| ---------------- | -------------------------------------------- |
| Electron (Windows) | `%APPDATA%\transrewrt\`                    |
| Electron (Linux)   | `~/.config/transrewrt/`                     |
| 웹 / 도커        | `/app/data/config.json` (볼륨을 사용해 영구 저장) |

<br/>

**환경 변수** (웹/도커 전용; Electron은 로컬 설정 파일 사용)

| 변수             | 기본값                 | 설명 |
| ---------------- | ---------------------- | ---- |
| `PORT`           | `5000`                 | 서버 수신 포트 |
| `CONFIG_PATH`    | `/app/data/config.json` | 설정 파일 경로 |
| `OPENROUTER_KEY` | *(비어 있음)*           | OpenRouter API 키 |
| `OPENAI_KEY`     | *(비어 있음)*           | OpenAI API 키 |
| `CEREBRAS_KEY`   | *(비어 있음)*           | Cerebras API 키 |
| `ANTHROPIC_KEY`  | *(비어 있음)*           | Anthropic API 키 |
| `GOOGLE_KEY`     | *(비어 있음)*           | Google Gemini API 키 |
| `DEEPSEEK_KEY`   | *(비어 있음)*           | DeepSeek API 키 |
| `GROQ_KEY`       | *(비어 있음)*           | Groq API 키 |
| `MISTRAL_KEY`    | *(비어 있음)*           | Mistral API 키 |
| `OLLAMA_URL`     | *(비어 있음)*           | Ollama 기본 URL (예: `http://host.docker.internal:11434`) |
| `XAI_KEY`        | *(비어 있음)*           | xAI API 키 |

사용하는 제공업체만 구성하세요. 모델 ID는 네임스페이스가 적용됩니다 (`openrouter/…`, `openai/…`, `cerebras/…`, `ollama/…` 등).

**비용 표시:** OpenRouter는 해당 시 적용 가능한 정확한 청구 비용을 반환합니다. 그 외 제공업체는 OpenRouter 키가 있는 경우 OpenRouter의 공개된 모델 가격을 기반으로 **추정 비용**을 사용합니다. OpenRouter 키가 없으면, OpenRouter 외 비용이 `0`로 표시될 수 있습니다. 추정 비용은 청구서가 아닙니다.

<br/>

**데이터 및 영구 저장:** 도커 사용 시, 컨테이너 재시작 후에도 `config.json` 및 SQLite 데이터베이스가 유지되도록 `/app/data`에 볼륨을 마운트하세요. 볼륨 없이 실행하면 컨테이너 종료 시 모든 데이터가 삭제됩니다.

**개발자:** 오래된 단일 키 설정을 새 설정으로 업데이트한 경우, 로컬 설정 파일에 `api_key`, `api_url`, 프록시 옵션과 같은 제거된 필드가 여전히 남아 있다면 `data/config.json`을 `src/config-defaults/config_default.json`의 새 기본 형식과 함께 재설정하거나 병합하세요.

<br/>

**웹 인증:**

- 기본 관리자: `admin` / `transrewrt26`.
- 사용자 관리는 **설정 → 사용자**에서 진행합니다.
- 비밀번호 재설정: `docker exec <container> reset-web-password '<username>' '<new-password>'`
  (소스에서 실행 시: `pnpm run reset-web-password -- <username> <new-password>`)

<br/>

> ⚠️ **경고**<br/>
> 네트워크로 접근 가능한 모든 호스트에서 기본 관리자 비밀번호를 즉시 변경하세요.

<br/>

폰트, 모델, 언어 등 주요 설정은 앱의 설정 메뉴에서 조정할 수 있습니다.

<br/><br/>

<a id="development-and-architecture"></a>

## 개발 및 아키텍처

- **개발:** 설정, 빌드, 테스트 및 배포 (Electron, 웹, Docker) - **[dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)** 참조.
- **아키텍처 및 시스템 개요:** 폴더 구조, 기술 스택, 설계 결정 사항 - **[dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)** 참조.

<br/><br/>

<a id="releases-and-tags"></a>
## 릴리스 및 태그

- **Git 태그** `v`* (예: `v1.0.10`)는 [릴리스 워크플로](.github/workflows/release.yml)를 실행합니다. **GitHub 릴리스**에는 Windows 설치 파일(`.exe`)과 Linux AppImage(**x64** 및 **arm64**)가 첨부됩니다.
- **Docker 이미지**는 `ghcr.io/wsj-br/transrewrt`에 게시됩니다. 이미지 태그는 Git 버전과 일치합니다(예: `v1.0.10` → `ghcr.io/wsj-br/transrewrt:1.0.10`)이며, `latest` 태그도 포함됩니다. 멀티 아키텍처 지원: `linux/amd64` 및 `linux/arm64` (예: 라즈베리 파이).

<br/><br/>

<a id="contributing"></a>
## 기여 방법

1. 저장소를 포크하세요.
2. 기능 브랜치 생성: `git checkout -b feature/my-feature`
3. 명확한 메시지와 함께 변경 사항을 커밋하세요.
4. 푸시한 후 `main` 브랜치에 대한 풀 리퀘스트를 생성하세요.

기존 코드 스타일을 따르고 제출 전 Electron 및 웹 모드에서 변경 사항을 테스트해 주세요. 빌드 및 테스트 지침은 [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)를 참조하세요.

<br/>

**문제 보고:** [GitHub](https://github.com/wsj-br/transrewrt/issues)에서 이슈를 등록하세요. 사용 중인 플랫폼(Windows / Linux / Docker)과 앱 버전(정보 대화상자 또는 릴리스 페이지에 표시)을 포함해 주세요.

<br/><br/>

<a id="disclaimer"></a>
## 책임 부인

제품 이름 및 아이콘은 각각의 소유권자에게 속하며, 식별 목적으로만 사용됩니다. 본 소프트웨어는 언급된 브랜드와 소속 관계가 없으며 그 어떤 브랜드로부터의 공식 인정도 받지 않았습니다.

<br/><br/>

<a id="license"></a>
## 라이선스

저작권 © 2026 Waldemar Scudeller Jr.

[Apache License 2.0](LICENSE)