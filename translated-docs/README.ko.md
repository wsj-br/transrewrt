---
translated_at: "2026-03-29T01:55:24.731Z"
source_hash: "f26a12ca888393b55a064bfcf8fe2b74a425c383f1ad6f7ecbb32b67b7c9f897"
source_mtime: "2026-03-29T01:54:18.655Z"
model: "qwen/qwen3-235b-a22b-2507"
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

AI 기반 텍스트 도구: 다중 AI 제공업체(OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI 및 로컬 Ollama)를 사용하여 언어 간 번역, 다양한 스타일로 재작성 및 사용자 지정 프롬프트를 통한 변환을 지원합니다. 데스크탑 앱(Electron) 또는 셀프 호스팅 웹 앱(Docker)으로 실행 가능합니다.

- **번역** — 수많은 언어 사이에서 번역하며, 원문 언어를 자동으로 감지
- **다시 작성** — 문법 교정, 명확성 향상, 격식 있는/격식 없는 표현 전환, 줄이기, 확장, 기술적 문장으로 변환
- **변환** — 사용자 지정 AI 프롬프트; 프롬프트 생성 및 관리, 프롬프트별 선택적 목표 언어 지정 가능
- **기록** — 입력 및 출력 텍스트를 포함한 전체 실행 기록, 필터링 및 내보내기 지원
- **모델 및 비용** — 구성된 공급자 중에서 원하는 모델 선택; 로그, 모델/작업/일별 요약을 포함한 비용 및 사용량 대시보드
- **UI** — 다국어 인터페이스(30개 이상의 언어 지원, RTL 지원), 폰트 등
- **웹 모드** — 관리자 역할을 가진 다중 사용자 지원
- **데스크톱** — Windows 및 Linux용 Electron 앱
- **자체 호스팅** — amd64 및 arm64용 Docker 이미지(Raspberry Pi 호환)

설치 후 모든 기능에 대한 자세한 설명은 **[사용자 안내서](USER-GUIDE.ko.md)** 를 참조하세요.

<small id="lang-list"> [English (UK)](../README.md) · [Português (BR)](README.pt-BR.md) · [العربية](README.ar.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [Hrvatski](README.hr.md) · [Čeština](README.cs.md) · [Nederlands](README.nl.md) · [English (US)](README.en-US.md) · [Filipino](README.tl.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [हिन्दी](README.hi.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [Basa Jawa](README.jv.md) · [한국어](README.ko.md) · [Bahasa Melayu](README.ms.md) · [فارسی](README.fa.md) · [Polski](README.pl.md) · [Português (PT)](README.pt.md) · [ਪੰਜਾਬੀ](README.pa.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [Slovenčina](README.sk.md) · [Español](README.es.md) · [Kiswahili](README.sw.md) · [Svenska](README.sv.md) · [తెలుగు](README.te.md) · [ภาษาไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Tiếng Việt](README.vi.md)</small>

<small id="lang-list"> [영어 (영국)](README.ko.md) · [포르투갈어 (브라질)](README.pt-BR.md) · [아랍어](README.ar.md) · [벵골어](README.bn.md) · [카탈루냐어](README.ca.md) · [중국어 간체](README.zh-CN.md) · [중국어 번체](README.zh-TW.md) · [크로아티아어](README.hr.md) · [체코어](README.cs.md) · [네덜란드어](README.nl.md) · [영어 (미국)](README.en-US.md) · [필리핀어](README.tl.md) · [프랑스어](README.fr.md) · [독일어](README.de.md) · [그리스어](README.el.md) · [힌디어](README.hi.md) · [헝가리어](README.hu.md) · [이탈리아어](README.it.md) · [일본어](README.ja.md) · [자와어](README.jv.md) · [한국어](README.ko.md) · [말레이어](README.ms.md) · [페르시아어](README.fa.md) · [폴란드어](translated-docs/READM

E.pl.md) · [포르투갈어(PT)](README.pt.md) · [펀잡어](README.pa.md) · [루마니아어](README.ro.md) · [러시아어](README.ru.md) · [슬로바키아어](README.sk.md) · [스페인어](README.es.md) · [스와힐리어](README.sw.md) · [스웨덴어](README.sv.md) · [텔루구어](README.te.md) · [타이어](README.th.md) · [터키어](README.tr.md) · [우크라이나어](README.uk.md) · [베트남어](README.vi.md)</small>

<small>

> **UI 및 문서 번역에 대한 참고 사항:** 원문인 영어(영국)를 제외한 모든 인터페이스 언어는 AI 모델을 사용해 번역되었습니다.  
> 따라서 표현이 부정확하거나 오류가 포함되어 있을 수 있습니다.

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

![대시보드 요약 — 사용 내역](../images/screenshots/ko/dashboard-summary.png)

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
  - [타임존 설정](#configuring-the-timezone)
- [OpenRouter API 키 받기](#getting-an-openrouter-api-key)
- [환경 설정 및 구성](#configuration-and-environment)
- [개발 및 아키텍처](#development-and-architecture)
- [문제 보고](#reporting-issues)
- [면책 조항](#disclaimer)
- [라이선스](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="quick-start"></a>

## 빠른 시작

**도커 (자체 호스팅 시 권장)**

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest

OPENROUTER_API_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_API_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

`sk-or-your-key`를 [OpenRouter API 키](https://openrouter.ai/keys)로 바꾸세요. (또는 다른 제공업체의 키를 설정할 수 있음. [설정 및 환경](#configuration-and-environment) 참조) 서비스를 외부에 노출하기 전에 [http://localhost:5000](http://localhost:5000)에 접속하여 기본 관리자 암호를 변경하세요.

<br/>

> ℹ️ **참고**<br/>
> 도커 환경에서는 OpenRouter, OpenAI, Cerebras 등의 LLM 인증 정보를 웹 UI가 아닌 `OPENROUTER_API_KEY`, `OPENAI_API_KEY`, `CEREBRAS_API_KEY` 같은 환경 변수로 설정합니다. 데스크톱 앱(Electron)에서는 **설정 → API** 메뉴에서 키를 설정합니다.

<br/>

**Windows**

최신 `Transrewrt Setup x.y.z.exe`를 [릴리스 페이지](https://github.com/wsj-br/transrewrt/releases)에서 다운로드한 후 설치 프로그램을 실행하고, 시작 메뉴 또는 바탕화면 바로가기에서 프로그램을 실행하세요. **설정 → API**에서 API 키를 입력하세요. 하나 이상의 제공업체를 설정해야 하며, 무료 모델의 경우 OpenRouter를 사용하는 것이 일반적입니다.

<br/>

**Linux**

[릴리스 페이지](https://github.com/wsj-br/transrewrt/releases)에서 사용 중인 CPU에 맞는 `.AppImage` 파일을 다운로드하세요 (`x64`는 일반적인 PC용, `arm64`는 Raspberry Pi 4 이상의 ARM 장치용). 이후 다음 명령어를 실행하세요:

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

**설정 → API**에서 API 키를 입력하세요. 하나 이상의 제공업체를 설정해야 하며, 무료 모델의 경우 OpenRouter를 사용하는 것이 일반적입니다.

Debian/Ubuntu 사용자는 먼저 다음 의존성 패키지를 설치해야 할 수 있습니다:

```bash
sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth
```

자세한 내용은 [설치 → Linux](#linux-electron)를 참조하세요.

<br/>

> ℹ️ **참고**<br/>

> macOS는 현재 지원되지 않습니다. Transrewrt는 Windows, Linux 및 Docker용으로 제공됩니다.

<br/>

앱이 실행되면, **[사용자 안내서](USER-GUIDE.ko.md)** 를 참고하여 텍스트를 번역하고, 재작성하며, 변환하는 방법과 프롬프트 관리, 모델 설정 방법을 알아보세요.

<br/><br/>

<a id="installation"></a>

## 설치

<a id="windows-electron"></a>

### Windows(일렉트론)

- [릴리스](https://github.com/wsj-br/transrewrt/releases)에서 최신 설치 프로그램을 다운로드합니다.
- `.exe` 파일을 실행하고 설치 안내를 따르세요.
- 첫 실행 시: 시작 메뉴나 바탕화면 바로가기에서 앱을 시작합니다.

<br/>

> ℹ️ **참고**<br/>
> Windows에서는 서명되지 않았거나 독립 개발자가 제작한 앱의 특성상 다음 중 하나의 보안 경고가 표시될 수 있습니다:
>   - **사용자 계정 컨트롤(UAC)**: "알 수 없는 게시자로부터의 이 앱이 장치에 변경을 가하도록 허용하시겠습니까?" → **예**를 클릭하세요.
>   - **마이크로소프트 디펜더 스마트스크린**: "Windows가 PC를 보호했습니다" → **추가 정보** 클릭 → ** anyway 실행** 선택.
>
> 이는 앱이 마이크로소프트나 대형 게시업체로부터 서명되지 않았기 때문에 발생하는 현상이며, 당사의 공식 GitHub 릴리스에서 다운로드한 경우 안전합니다. 
> (아래에 있는 SHA256 체크섬을 확인하세요).

<br/>

<a id="linux-electron"></a>

### 리눅스 (Electron)

- [릴리즈](https://github.com/wsj-br/transrewrt/releases)에서 일치하는 `.AppImage` 파일(`x64` 또는 `arm64`)을 다운로드하십시오.
- x86_64/amd64 시스템에서는 다음 명령어로 실행: `chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage`, ARM64 시스템에서는 `...-arm64.AppImage` 파일명을 사용하십시오.
- 추가 의존성 설치 (Debian/Ubuntu): `sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth`
- 더 자세한 내용은 [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)를 참고하십시오.

<br/>

<a id="docker"></a>

### Docker

- 가져오기: `docker pull ghcr.io/wsj-br/transrewrt:latest`
- 환경 변수를 통해 최소한 하나의 제공자 키를 설정하세요 (예: OpenRouter의 경우 `OPENROUTER_API_KEY`). `-e` 또는 `docker compose` / `.env` 파일을 사용하여 변수를 전달하므로, 보안 정보가 이미지에 포함되지 않도록 하세요.
- 제공자 키는 **웹 UI에 입력하지 않으며**, 서버가 환경 변수에서 직접 읽어옵니다.

예시 - 지속성을 위한 명명된 볼륨 사용 (환경 변수로 OpenRouter 키 제공):

```bash
OPENROUTER_API_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_API_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

또는 Docker Compose를 사용하고 싶다면 다음을 사용하세요:

```bash
# compose 파일 다운로드
wget https://github.com/wsj-br/transrewrt/raw/refs/heads/master/production.yml -O transrewrt.yml
# API_KEYS를 추가하고 타임존(TZ)을 조정하기 위해 파일 편집
vi transrewrt.yml
# 컨테이너 시작
docker compose -f transrewrt.yml up -d

모든 환경 변수(예: `PORT`, `CONFIG_PATH`, `TZ`, LLM 키(`OPENROUTER_API_KEY`, `OPENAI_API_KEY`, …))는 [설정](#configuration-and-environment)을 참조하세요.

<a id="configuring-the-timezone"></a>

### 타임존 설정

애플리케이션 사용자 인터페이스의 날짜와 시간은 **브라우저의** 로케일 및 타임존을 따릅니다. **서버 측** 동작(로그 기록 등)의 경우 컨테이너는 `TZ` 환경 변수를 사용합니다. 기본값은 `TZ=Europe/London`입니다.

다른 타임존을 사용하려면 Compose 파일에서 `TZ`를 설정하세요. 예를 들어:

```yaml
environment:
  - TZ=America/Sao_Paulo
```

또는 컨테이너 실행 시(Docker) 전달할 수 있습니다:

```bash
--env TZ=America/Sao_Paulo
```

많은 리눅스 호스트에서는 다음 명령으로 시스템 타임존 이름을 복사할 수 있습니다:

```bash
echo TZ=\"$(</etc/timezone)\"
```

유효한 타임존 이름 목록은 [tz 데이터베이스](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) (위키백과)에서 관리되고 있습니다.

<br/><br/>

<a id="getting-an-openrouter-api-key"></a>

## OpenRouter API 키 발급받기

Transrewrt는 여러 AI 제공업체를 지원합니다. [OpenRouter](https://openrouter.ai)는 다양한 모델을 하나의 키로 통합하여 제공하고 무료 모델도 포함하고 있어 인기 있는 선택입니다.

1. [openrouter.ai](https://openrouter.ai)에서 가입하거나 로그인하세요.
2. [Keys](https://openrouter.ai/keys) 페이지로 이동하여 새 키를 생성하세요 (이름을 지정하고, 필요 시 크레딧 한도를 설정할 수 있음). 크레딧을 추가하지 않아도 무료 모델을 사용할 수 있습니다.
3. **데스크톱(Electron) 사용자:** 키를 **설정 → API**에서 붙여넣으세요. **도커(Docker) 사용자:** `OPENROUTER_API_KEY`와 같은 환경 변수를 설정하세요 ([빠른 시작](#quick-start) 참조).

번역, 교정 또는 변환 작업에는 OpenRouter의 **Body Builder** 모델 ([`openrouter/bodybuilder`](https://openrouter.ai/openrouter/bodybuilder))을 사용하지 마세요. 이 모델은 완료된 텍스트가 아닌 JSON 요청 페이로드를 반환합니다. 자세한 내용은 사용자 안내서의 [설정 → 모델](USER-GUIDE.ko.md#models)을 확인하세요.

다른 제공업체(OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras)를 사용하거나 [Ollama](https://ollama.com)로 모델을 로컬에서 실행할 수도 있습니다. 지원되는 제공업체와 환경 변수의 전체 목록은 [구성 및 환경](#configuration-and-environment)을 참조하세요.

> ⚠️ **주의**<br/>
다른 기기, 컨테이너 또는 서비스에서 Ollama를 사용하는 경우, 로컬호스트 전용이 아닌 외부 연결을 허용하도록 Ollama를 구성해야 합니다.

할당량, BYOK(자체 키 사용) 및 기타 내용은 [OpenRouter 인증](https://openrouter.ai/docs/api/reference/authentication)을 참조하세요.

<br/><br/>

<a id="configuration-and-environment"></a>

## 설정 및 환경

**설정 파일 위치**

| 배포 방식          | 설정 위치                                          |
| ------------------ | ------------------------------------------------- |
| Electron (Windows) | `%APPDATA%\transrewrt\`                           |
| Electron (Linux)   | `~/.config/transrewrt/`                           |
| Web / Docker       | `/app/data/config.json` (볼륨을 사용하여 영속화) |

<br/>

**환경 변수** (웹/Docker 전용; Electron은 로컬 설정 파일 사용)

| 변수 | 기본값 | 설명 |
| ---------------- | ----------------------- | ----------- |
| `PORT` | `5000` | 서버 수신 포트 |
| `CONFIG_PATH` | `/app/data/config.json` | 설정 파일 경로 |
| `TZ` | `Europe/London` | 서버 측 시간(로그 등)을 위한 IANA 시간대; UI는 여전히 브라우저 설정을 따름. [도커 → 타임존](#docker-timezone) 참조 |
| `OPENROUTER_API_KEY` | *(비어 있음)* | OpenRouter API 키 |
| `OPENAI_API_KEY` | *(비어 있음)* | OpenAI API 키 |
| `CEREBRAS_API_KEY` | *(비어 있음)* | Cerebras API 키 |
| `ANTHROPIC_API_KEY` | *(비어 있음)* | Anthropic API 키 |
| `GOOGLE_API_KEY` | *(비어 있음)* | Google Gemini API 키 |
| `DEEPSEEK_API_KEY` | *(비어 있음)* | DeepSeek API 키 |
| `GROQ_API_KEY` | *(비어 있음)* | Groq API 키 |
| `MISTRAL_API_KEY` | *(비어 있음)* | Mistral API 키 |
| `OLLAMA_URL` | *(비어 있음)* | Ollama 기본 URL (예: `http://host.docker.internal:11434`) |
| `XAI_API_KEY` | *(비어 있음)* | xAI API 키 |

사용하는 제공자만 구성하세요. 모델 ID는 네임스페이스가 적용됩니다(`openrouter/…`, `openai/…`, `cerebras/…`, `ollama/…` 등).

**비용 표시:** OpenRouter는 적용 가능한 경우 청구된 정확한 비용을 반환합니다. 그 외 제공자들은 OpenRouter 키가 사용 가능한 경우 OpenRouter의 공개 모델 가격 기준으로 **예상 비용**을 표시합니다. OpenRouter 키가 없을 경우, OpenRouter 외 제공자의 비용은 `0`으로 표시될 수 있습니다. 이 예상치는 청구서가 아닙니다.

<br/>

**데이터 및 영속성:** Docker의 경우, `/app/data`에 볼륨을 마운트하여 `config.json`과 SQLite 데이터베이스가 컨테이너 재시작 시에도 유지되도록 하세요. 볼륨이 없으면 컨테이너가 중지될 때 모든 데이터가 소실됩니다.

**개발자 안내:** 기존의 단일 키 구성 방식을 대체하는 변경 사항을 받은 후에는, 로컬의 `data/config.json` 파일에 제거된 필드(`api_key`, `api_url`, 프록시 옵션 등)가 여전히 존재한다면, `src/config-defaults/config_default.json`의 새 기본 형식으로 `data/config.json`을 재설정하거나 병합해야 합니다.

<br/>

**웹 인증:**

- 기본 관리자 계정: `admin` / `transrewrt26`
- **설정 → 사용자** 메뉴에서 사용자를 관리하세요.

- 비밀번호 재설정: `docker exec <컨테이너> reset-web-password '<사용자이름>' '<새 비밀번호>'`  
  (소스 기준: `pnpm run reset-web-password -- <사용자이름> <새 비밀번호>`)

<br/>

> ⚠️ **경고**<br/>
> 네트워크로 접근 가능한 호스트에서는 기본 관리자 비밀번호를 즉시 변경하십시오.

<br/>

키 설정들(글꼴, 모델, 언어 등)은 애플리케이션의 설정 메뉴에서 변경할 수 있습니다.

<br/><br/>

<a id="development-and-architecture"></a>

## 개발 및 아키텍처

- **개발:** 설정, 빌드, 테스트 및 배포 (Electron, Web, Docker) - 자세한 내용은 **[dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)** 를 참조하세요.
- **아키텍처 및 시스템 개요:** 폴더 구조, 기술 스택, 설계 결정 사항 - 자세한 내용은 **[dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)** 를 참조하세요.

<br/><br/>

<a id="reporting-issues"></a>

## 문제 보고

[GitHub](https://github.com/wsj-br/transrewrt/issues)에서 이슈를 등록하세요. 사용 중인 플랫폼(Windows / Linux / Docker)과 앱 버전(정보 대화상자 또는 릴리스 페이지에 표시됨)을 함께 포함해 주세요.

<br/><br/>

<a id="disclaimer"></a>

## 책임 제한

제품 이름과 아이콘은 각각의 소유권자에게 속하며 단지 식별 목적으로 사용됩니다. 본 소프트웨어는 언급된 브랜드들과 관련이 없으며, 그들로부터 승인을 받지 않았습니다.

<br/><br/>

<a id="license"></a>

## 라이선스

저작권 © 2026 월데마르 스쿠델러 주니어.

[아파치 라이선스 2.0](LICENSE)