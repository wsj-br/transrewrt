---
translated_at: "2026-03-24T02:05:18.615Z"
source_hash: "718acd12f14755cd75ebf7d09b86d9a1df37ebe1898710080fa8e80c1221d58b"
source_mtime: 1774311390366.3484
model: "qwen/qwen3-235b-a22b-2507"
---
<p align="center">
  <img src="../images/transrewrt_logo.svg" alt="Transrewrt 로고" width="120" />
</p>

<h1 align="center">Transrewrt</h1>

<p align="center">
  <a href="https://github.com/wsj-br/transrewrt/releases"><img src="https://img.shields.io/badge/version-1.0.14-blue" alt="버전"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-Apache%202.0-green" alt="라이선스: Apache 2.0"></a>
  <img src="https://img.shields.io/badge/platform-Windows%20%7C%20Linux%20%7C%20Docker-lightgrey" alt="플랫폼">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react" alt="React 19">
  <img src="https://img.shields.io/badge/Electron-41-47848F?logo=electron" alt="Electron 41">
</p>

AI 기반 텍스트 도구: 여러 언어 간 번역, 다양한 스타일로 재작성, 커스텀 프롬프트를 통한 변환 — 다수의 AI 제공업체(OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI 및 로컬 Ollama) 사용 가능. 데스크탑 앱(Electron) 또는 자체 호스팅 웹 앱(Docker) 형태로 실행 가능.

- **번역** — 수십 개 언어 간 번역, 원문 언어 자동 감지 포함
- **재작성** — 문법 수정, 가독성 향상, 격식/비격식 변환, 줄이기/확장하기, 기술적 스타일로 변경
- **변환** — 커스텀 AI 프롬프트; 프롬프트 생성 및 관리, 각 프롬프트당 선택적으로 대상 언어 지정 가능
- **기록** — 입력/출력 텍스트 포함한 전체 실행 기록, 필터링 및 내보내기 기능 제공
- **모델 및 비용** — 설정된 제공업체의 모델 중 선택 가능; SQLite 로그 기반 비용 대시보드, 모델/운용/일자별 요약 제공
- **UI** — 다국어 인터페이스(30개 이상 언어, RTL 지원), 폰트 등
- **웹 모드** — 관리자 역할을 갖춘 다중 사용자 지원; API 키는 서버 측에 보관되어 브라우저에 노출되지 않음
- **데스크탑** — Windows 및 Linux용 Electron 앱
- **자체 호스팅** — amd64 및 arm64(Raspberry Pi 호환)용 Docker 이미지

설치 후, 모든 기능에 대한 자세한 안내는 **[사용자 가이드](USER-GUIDE.ko.md)** 를 참조하세요.

<small>**다른 언어로 읽기:** [English (UK)](README.ko.md) · [Português (BR)](README.pt-BR.md) · [العربية](README.ar.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [Hrvatski](README.hr.md) · [Čeština](README.cs.md) · [Nederlands](README.nl.md) · [English (US)](README.en-US.md) · [Filipino](README.tl.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [हिन्दी](README.hi.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [Basa Jawa](README.jv.md) · [한국어](README.ko.md) · [Bahasa Melayu](README.ms.md) · [فارسی](README.fa.md) · [Polski](README.pl.md) · [Português (PT)](README.pt.md) · [ਪੰਜਾਬੀ](README.pa.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [Slovenčina](README.sk.md) · [Español](README.es.md) · [Kiswahili](README.sw.md) · [Svenska](README.sv.md) · [తెలుగు](README.te.md) · [ภาษาไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Tiếng Việt](README.vi.md)</small>

<br/>

**UI 및 문서 번역에 대한 참고 사항:** 영어(UK)를 제외한 모든 인터페이스 언어는 AI 모델을 사용해 번역되었으므로, 표현이 부정확하거나 오류가 포함되어 있을 수 있습니다.

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

**Docker (자체 호스팅에 권장)**

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest

OPENROUTER_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

`sk-or-your-key`를 [OpenRouter API 키](https://openrouter.ai/keys)로 바꾸세요(또는 다른 제공자 키를 사용할 수 있음; [설정](#configuration-and-environment) 참조). [http://localhost:5000](http://localhost:5000)에 접속하여 서비스를 외부에 노출하기 전에 기본 관리자 비밀번호를 변경하세요.

<br/>

> ℹ️ **참고**<br/>
> Docker에서는 LLM 자격증명은 웹 UI가 아닌 `OPENROUTER_KEY`, `OPENAI_KEY` 등 환경 변수로 설정됩니다. 데스크톱(Electron)에서는 **설정 → API** 메뉴에서 키를 설정합니다.

<br/>

**Windows**

[릴리스](https://github.com/wsj-br/transrewrt/releases)에서 최신 `Transrewrt Setup x.y.z.exe`를 다운로드하여 설치 프로그램을 실행하고 시작 메뉴 또는 데스크톱 바로가기에서 실행하세요. **설정 → API**에서 API 키를 입력하세요. 최소한 하나 이상의 제공자를 설정해야 하며, 무료 모델을 사용하려면 OpenRouter가 일반적입니다.

<br/>

**Linux**

[릴리스](https://github.com/wsj-br/transrewrt/releases)에서 `.AppImage` 파일을 다운로드한 후 다음을 실행하세요:

```bash
chmod +x Transrewrt-x.y.z.AppImage && ./Transrewrt-x.y.z.AppImage
```

**설정 → API**에서 API 키를 입력하세요. 최소한 하나 이상의 제공자를 설정해야 하며, 무료 모델을 사용하려면 OpenRouter가 일반적입니다.

Debian/Ubuntu에서는 먼저 추가 의존성을 설치해야 할 수 있습니다:

```bash
sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth
```

자세한 내용은 [설치 → Linux](#linux-electron)를 참조하세요.

<br/>

> ℹ️ **참고**<br/>
> macOS는 현재 지원되지 않습니다. Transrewrt는 Windows, Linux 및 Docker에서 사용할 수 있습니다.

<br/>

앱이 실행된 후, **[사용자 가이드](USER-GUIDE.ko.md)** 를 참고하여 텍스트 번역, 재작성 및 변환, 프롬프트 관리, 모델 설정 방법을 알아보세요.

<br/><br/>

<a id="installation"></a>
## 설치

<a id="windows-electron"></a>
### Windows (Electron)

- [릴리스](https://github.com/wsj-br/transrewrt/releases)에서 최신 설치 프로그램을 다운로드하세요.
- `.exe` 파일을 실행하고 설치 안내를 따르세요.
- 첫 실행: 시작 메뉴 또는 데스크톱 바로가기에서 앱을 시작하세요.

<br/>

<a id="linux-electron"></a>
### Linux (Electron)

- [릴리스](https://github.com/wsj-br/transrewrt/releases)에서 `.AppImage` 파일을 다운로드하세요.
- 실행: `chmod +x Transrewrt-x.y.z.AppImage && ./Transrewrt-x.y.z.AppImage`
- 추가 의존성 (Debian/Ubuntu): `sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth`
- 더 자세한 내용은 [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)를 참조하세요.

<br/>

<a id="docker"></a>
### Docker

- 다운로드: `docker pull ghcr.io/wsj-br/transrewrt:latest`
- 적어도 하나의 제공자 키를 환경 변수를 통해 설정하세요(예: OpenRouter의 경우 `OPENROUTER_KEY`). `-e` 또는 `docker compose`, `.env`를 사용해 변수를 전달함으로써 보안 정보가 이미지에 고정되는 것을 방지하세요.
- 제공자 키는 웹 UI에서 입력되는 것이 **아닌**, 서버가 환경 변수에서 읽습니다.

예시 - 영구 저장을 위한 명명된 볼륨 (환경 변수로 OpenRouter 키 전달):

```bash
OPENROUTER_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

<br/>

| 옵션   | 설명                                                                                                   |
| ------ | ----------------------------------------------------------------------------------------------------- |
| 포트   | `5000` (`-p 5000:5000`로 매핑)                                                                       |
| 볼륨   | 설정과 데이터베이스 영구 저장을 위해 `/app/data` 마운트                                             |
| 환경 변수 | `PORT`, `CONFIG_PATH`, LLM 키(`OPENROUTER_KEY`, `OPENAI_KEY`, …) - [설정](#configuration-and-environment) 참조 |

소스에서 직접 빌드 및 실행하려면: `docker compose up --build -d` 또는 `pnpm docker:up` - [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) 참조.

<br/><br/>

<a id="getting-an-openrouter-api-key"></a>

## OpenRouter API 키 발급받기

Transrewrt는 여러 AI 제공업체를 지원합니다. [OpenRouter](https://openrouter.ai)는 다양한 모델을 한 키로 통합하고 무료 모델도 제공하기 때문에 인기 있는 선택지입니다.

1. [openrouter.ai](https://openrouter.ai)에서 회원 가입 또는 로그인하세요.
2. [Keys](https://openrouter.ai/keys) 페이지를 열고 새 키를 생성하세요 (이름을 지정하고, 선택적으로 크레딧 한도를 설정할 수 있음). 크레딧 추가 없이도 무료 모델을 사용할 수 있습니다.
3. **데스크탑 (Electron)**: **설정 → API**에서 키를 붙여넣으세요. **도커(Docker)**: `OPENROUTER_KEY`와 같은 환경 변수를 설정하세요 (자세한 내용은 [빠른 시작](#quick-start) 참조).

OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI와 같은 다른 제공업체를 사용하거나 [Ollama](https://ollama.com)을 사용하여 로컬에서 모델을 실행할 수도 있습니다. 지원되는 제공업체와 환경 변수 목록은 [설정 및 환경](#configuration-and-environment)을 참고하세요.

요금 한도, 사용자 키(BYOK) 설정 및 기타 정보는 [OpenRouter 인증 문서](https://openrouter.ai/docs/api/reference/authentication)를 확인하세요.

<br/><br/>

<a id="configuration-and-environment"></a>
## 설정 및 환경 변수

**설정 파일 위치**

| 배포 방식          | 설정 위치                                       |
| ------------------ | ----------------------------------------------- |
| Electron (Windows) | `%APPDATA%\transrewrt\`                         |
| Electron (Linux)   | `~/.config/transrewrt/`                         |
| 웹 / 도커          | `/app/data/config.json` (볼륨 사용 시 지속 가능) |

<br/>

**환경 변수** (웹/도커 전용; Electron은 로컬 설정 파일 사용)

| 변수명             | 기본값                 | 설명 |
| ------------------ | ---------------------- | ---- |
| `PORT`             | `5000`                 | 서버 수신 포트 |
| `CONFIG_PATH`      | `/app/data/config.json` | 설정 파일 경로 |
| `OPENROUTER_KEY`   | *(공백)*               | OpenRouter API 키 |
| `OPENAI_KEY`       | *(공백)*               | OpenAI API 키 |
| `ANTHROPIC_KEY`    | *(공백)*               | Anthropic API 키 |
| `GOOGLE_KEY`       | *(공백)*               | Google Gemini API 키 |
| `DEEPSEEK_KEY`     | *(공백)*               | DeepSeek API 키 |
| `GROQ_KEY`         | *(공백)*               | Groq API 키 |
| `MISTRAL_KEY`      | *(공백)*               | Mistral API 키 |
| `OLLAMA_URL`       | *(공백)*               | Ollama 기본 URL (예: `http://host.docker.internal:11434`) |
| `XAI_KEY`          | *(공백)*               | xAI API 키 |

사용할 제공업체만 설정하세요. 모델 ID는 네임스페이스가 구분됩니다 (`openrouter/…`, `openai/…`, `ollama/…` 등).

**비용 표시:** OpenRouter는 적용 가능한 경우 정확한 청구 금액을 반환합니다. 그 외 제공업체는 OpenRouter 키가 있는 경우 공개된 OpenRouter 모델 가격 기준 **추정 비용**을 표시하고, OpenRouter 키가 없을 경우 비용이 `0`으로 표시될 수 있습니다. 추정치는 청구서가 아닙니다.

<br/>

**데이터 및 지속성:** 도커 배포 시, `/app/data`에 볼륨을 마운트하여 `config.json` 및 SQLite 데이터베이스가 컨테이너 재시작 간에도 유지되도록 하세요. 볼륨 없이 운영 시 컨테이너 종료 시 모든 데이터가 삭제됩니다.

**개발자:** 이전의 단일 키 설정을 새 구조로 변경하는 업데이트를 풀링한 후, 로컬 `data/config.json` 파일에 더 이상 사용되지 않는 필드(`api_key`, `api_url`, 프록시 옵션)가 남아 있다면, `src/config-defaults/config_default.json`의 최신 기본 구조와 파일을 재설정하거나 병합하세요.

<br/>

**웹 인증:**

- 기본 관리자 계정: `admin` / `transrewrt26`.
- 사용자 관리는 **설정 → 사용자**에서 관리합니다.
- 비밀번호 재설정: `docker exec <컨테이너> reset-web-password '<사용자명>' '<새 비밀번호>'`  
  (소스에서 실행 시: `pnpm run reset-web-password -- <사용자명> <새 비밀번호>`)

<br/>

> ⚠️ **경고**<br/>
> 네트워크로 접근 가능한 모든 호스트에서 기본 관리자 비밀번호를 즉시 변경하세요.

<br/>

폰트, 모델, 언어 등의 주요 설정은 애플리케이션의 **설정** 메뉴에서 조정할 수 있습니다.

<br/><br/>

<a id="development-and-architecture"></a>
## 개발 및 아키텍처

- **개발 환경:** 설정, 빌드, 테스트 및 배포 (Electron, 웹, 도커) 관련 내용은 **[dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)** 참고.
- **아키텍처 및 시스템 개요:** 폴더 구조, 기술 스택, 설계 결정 사항은 **[dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)** 참조.

<br/><br/>

<a id="releases-and-tags"></a>

## 릴리스 및 태그

- **Git 태그** `v`* (예: `v1.0.10`)는 [릴리스 워크플로](.github/workflows/release.yml)를 실행합니다. **GitHub 릴리스**에는 Windows 설치 파일(`.exe`)과 Linux AppImage가 첨부됩니다.
- **Docker 이미지**는 `ghcr.io/wsj-br/transrewrt`에 게시됩니다. 이미지 태그는 Git 버전과 일치합니다(예: `v1.0.10` → `ghcr.io/wsj-br/transrewrt:1.0.10`)이며, `latest` 태그도 포함됩니다. 멀티 아키텍처 지원: `linux/amd64` 및 `linux/arm64` (예: 라즈베리 파이).

<br/><br/>

<a id="contributing"></a>
## 기여 방법

1. 저장소를 포크하세요.
2. 기능 브랜치를 생성하세요: `git checkout -b feature/my-feature`
3. 변경 사항을 명확한 커밋 메시지와 함께 커밋하세요.
4. 푸시한 후 `main` 브랜치에 대한 풀 리퀘스트를 열어주세요.

기여 전 기존 코드 스타일을 준수하고 Electron 및 웹 모드 모두에서 변경 사항을 테스트해 주세요. 빌드 및 테스트 안내는 [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)를 참조하세요.

<br/>

**문제 보고 방법:** [GitHub](https://github.com/wsj-br/transrewrt/issues)에서 이슈를 등록해 주세요. 사용하는 플랫폼(Windows / Linux / Docker)과 앱 버전(정보 대화상자 또는 릴리스 페이지에 표시됨)을 포함해 주시기 바랍니다.

<br/><br/>

<a id="disclaimer"></a>
## 책임 부인

제품 이름과 아이콘은 각각의 소유권자에게 속하며 식별 목적으로만 사용됩니다. 본 소프트웨어는 언급된 브랜드와 제휴 관계가 없으며, 그 어떤 브랜드의 공식적인 승인도 받지 않았습니다.

<br/><br/>

<a id="license"></a>
## 라이선스

저작권 © 2026 월데마르 스쿠델러 주니어.

[Apache License 2.0](LICENSE)