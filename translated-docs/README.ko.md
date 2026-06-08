<p align="center">
  <img src="../images/transrewrt_banner.png" alt="Transrewrt Banner"  />
</p>

<p align="center">
  <a href="https://github.com/wsj-br/transrewrt/releases"><img src="https://img.shields.io/badge/version-1.4.0-blue" alt="Version"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-Apache%202.0-green" alt="License: Apache 2.0"></a>
  <img src="https://img.shields.io/badge/platform-Windows%20%7C%20Linux%20%7C%20Docker-lightgrey" alt="Platform">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react" alt="React 19">
  <img src="https://img.shields.io/badge/Electron-41-47848F?logo=electron" alt="Electron 41">
</p>

AI 기반 텍스트 도구: 여러 AI 제공업체(OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI 및 로컬 Ollama)를 사용하여 언어 간 번역, 다양한 스타일로 재작성 및 사용자 정의 프롬프트로 변환 - 데스크톱 앱(Electron) 또는 자체 호스팅 웹 앱(Docker)으로 실행.

- **번역** - 수십 가지 언어 간 번역 및 소스 언어 자동 감지
- **다시 작성** - 문법 수정, 명확성 향상, 격식/비격식 조정, 축약, 확장, 기술적 표현 변환
- **변환** - 사용자 정의 AI 프롬프트; 프롬프트 생성 및 관리, 프롬프트별 선택적 대상 언어 지정 가능
- **기록** - 입력/출력 텍스트, 필터링 및 내보내기 기능을 포함한 전체 실행 기록
- **쉬움 및 고급** - 쉬운 모드(기본값): 제공업체별로 선정된 사전 설정(**무료(OpenRouter)**, **표준**, **고급**, **기술적**; 선택된 제공업체에 매핑된 사전 설정만 표시됨)으로 모델 ID를 직접 선택하지 않음; 고급 모드: 구성된 제공업체의 전체 모델 목록 표시
- **모델 및 비용** - 비용 및 사용 현황 대시보드(요약, 모델 기준, 모든 호출) 내보내기 기능 포함; OpenRouter는 실제 지출을 표시하고, 다른 제공업체는 추정치 사용
- **UI** - 다국어 인터페이스(30개 이상의 언어, RTL 지원), 폰트 등
- **웹 모드** - 관리자 역할을 포함한 다중 사용자 지원
- **데스크톱** - Windows 및 Linux용 Electron 앱
- **자체 호스팅** - amd64 및 arm64용 Docker 이미지(Raspberry Pi 지원)

설치 후 모든 기능에 대한 자세한 설명은 [**사용자 안내서**](USER-GUIDE.ko.md)를 참조하세요.

<small>**다른 언어로 읽기:** </small>
<small id="lang-list">[English (GB)](../README.md) · [Português (Brasil)](./README.pt-BR.md) · [العربية](./README.ar.md) · [বাংলা](./README.bn.md) · [Català](./README.ca.md) · [中文 (中国大陆)](./README.zh-CN.md) · [中文 (台灣)](./README.zh-TW.md) · [Hrvatski](./README.hr.md) · [Čeština](./README.cs.md) · [Nederlands](./README.nl.md) · [English (US)](./README.en-US.md) · [Tagalog](./README.tl.md) · [Français](./README.fr.md) · [Deutsch](./README.de.md) · [Ελληνικά](./README.el.md) · [हिन्दी](./README.hi.md) · [Magyar](./README.hu.md) · [Italiano](./README.it.md) · [日本語](./README.ja.md) · [한국어](./README.ko.md) · [Bahasa Melayu](./README.ms.md) · [فارسی](./README.fa.md) · [Polski](./README.pl.md) · [Basa Jawa](./README.jv.md) · [Português](./README.pt.md) · [ਪੰਜਾਬੀ](./README.pa.md) · [Română](./README.ro.md) · [Русский](./README.ru.md) · [Slovenčina](./README.sk.md) · [Español](./README.es.md) · [Kiswahili](./README.sw.md) · [Svenska](./README.sv.md) · [తెలుగు](./README.te.md) · [ไทย](./README.th.md) · [Türkçe](./README.tr.md) · [Українська](./README.uk.md) · [Tiếng Việt](./README.vi.md)</small>

<small>

> **UI 및 문서 번역에 대한 참고:** 영어(영국) 원문을 제외한 모든 인터페이스 언어는 AI 모델을 사용해 번역되었으며, 표현이 부정확하거나 오류가 포함될 수 있습니다.

</small>

<br/>

<a id="table-of-contents"></a>
## 목차

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [스크린샷](#screenshots)
- [빠른 시작](#quick-start)
- [OpenRouter API 키 발급 방법](#getting-an-openrouter-api-key)
- [구성 및 환경 설정](#configuration-and-environment)
- [개발 및 아키텍처](#development-and-architecture)
- [문제 보고](#reporting-issues)
- [면책 조항](#disclaimer)
- [라이선스](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="screenshots"></a>
## 스크린샷

**언어 선택기**

![Language selector](../images/screenshots/ko/language-selector.png)

**번역**

![Translate](../images/screenshots/ko/translate.png)

**변환 - 프롬프트 편집기**

![Transform - prompt editor](../images/screenshots/ko/transform-prompt-edit.png)

**대시보드**

![Dashboard summary - usage](../images/screenshots/ko/dashboard-summary.png)

**기록**

![History](../images/screenshots/ko/history.png)

**설정 - 모델 선택**

![Settings - model selection](../images/screenshots/ko/settings-general.png)

<br/><br/>

<a id="quick-start"></a>
## 빠른 시작

<details>
<summary><b>도커(Docker) (자가 호스팅에 권장)</b></summary>

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

`sk-or-your-key`을(를) [OpenRouter API 키](https://openrouter.ai/keys)로 교체하세요 (또는 다른 제공업체 키를 설정하세요; [구성](#configuration-and-environment) 참조). [http://localhost:5000](http://localhost:5000)을 열고 서비스를 공개하기 전에 기본 관리자 비밀번호를 변경하세요.

환경을 통해 최소한 하나의 제공업체 키를 설정하세요(예: OpenRouter의 경우 `OPENROUTER_API_KEY`). 비밀 정보가 이미지에 포함되지 않도록 하려면 `-e` 또는 `docker compose` / `.env`를 사용하여 변수를 전달하세요. 제공업체 키는 웹 UI에 **입력하지 않으며**, 서버가 환경에서 해당 키를 읽습니다.

<br/>

> ℹ️ **참고**<br/>
> 도커(Docker)에서는 LLM 자격 증명이 `OPENROUTER_API_KEY`, `OPENAI_API_KEY`, `CEREBRAS_API_KEY`, … 와 같은 환경 변수로 설정되며 (웹 UI가 아님). 데스크톱(Electron)에서는 **설정 → API**에서 키를 구성합니다.

<br/>

또는 Docker Compose를 사용하세요:

```bash
# download the compose file
wget https://github.com/wsj-br/transrewrt/raw/refs/heads/master/production.yml -O transrewrt.yml
# Edit the file to add your API keys (API_KEYs), or uncomment and adjust the `.env` file. Set the timezone (TZ) if necessary.
vi transrewrt.yml
# start the container
docker compose -f transrewrt.yml up -d
```

모든 환경 변수(예: `PORT`, `CONFIG_PATH`, `TZ`, 및 LLM 키(`OPENROUTER_API_KEY`, `OPENAI_API_KEY`, …))에 대해서는 [구성](#configuration-and-environment)을 참조하세요.

</details>

<br/>

<details>
<summary><b>서버 시간대 (도커)</b></summary>

<a id="configuring-the-timezone"></a>

<br/>

애플리케이션 사용자 인터페이스의 날짜와 시간은 **브라우저의** 로캘 및 시간대를 따릅니다. **서버 측** 동작(로그 기록 등)의 경우, 컨테이너는 `TZ` 환경 변수를 사용합니다. 기본값은 `TZ=Europe/London`입니다.

다른 시간대를 사용하려면 Compose 파일에서 `TZ`을 설정하세요. 예:

```yaml
environment:
  - TZ=America/Sao_Paulo
```

또는 컨테이너 실행 시 도커(Docker)에서 전달하세요:

```bash
--env TZ=America/Sao_Paulo
```

많은 리눅스(Linux) 호스트에서는 다음 명령으로 시스템 시간대 이름을 복사할 수 있습니다:

```bash
echo TZ=\"$(</etc/timezone)\"
```

유효한 시간대 이름 목록은 [tz 데이터베이스](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) (위키백과)에서 관리됩니다.

</details>

<br/>

<details>
<summary><b>Windows</b></summary>

<a id="windows-electron"></a>

<br/>

- [릴리스(Releases)](https://github.com/wsj-br/transrewrt/releases)에서 최신 `Transrewrt Setup x.y.z.exe`을(를) 다운로드하세요.
- `.exe`을(를) 실행하고 설치 프로그램을 따르세요.
- 첫 실행: 시작 메뉴 또는 데스크톱 바로 가기에서 앱을 시작하세요.
- **설정 → API**에서 API 키를 입력하세요. 최소한 하나의 제공업체를 구성해야 하며, 무료 모델의 경우 OpenRouter가 일반적입니다.

<br/>

> ℹ️ **참고**<br/>
> Windows에서는 서명되지 않은/독립 앱의 경우 다음 보안 경고 중 하나가 표시될 수 있습니다:
>   - **사용자 계정 컨트롤(UAC)**: "알 수 없는 게시자가 제공하는 이 앱이 장치에 변경을 가하도록 허용하시겠습니까?" → **예**를 클릭하세요.
>   - **Microsoft Defender SmartScreen**: "Windows가 PC를 보호했습니다" → **추가 정보** → **어쨌든 실행**을(를) 클릭하세요.
>
> 이는 앱이 Microsoft 또는 주요 게시업체에 의해 서명되지 않았기 때문에 발생합니다. 공식 GitHub 릴리스에서 다운로드한 경우 안전하며 (각 자산 옆의 [릴리스](https://github.com/wsj-br/transrewrt/releases) 페이지에서 체크섬을 확인하세요).

<br/>

</details>

<br/>

<details>
<summary><b>Linux</b></summary>

<a id="linux-electron"></a>

<br/>

[릴리스](https://github.com/wsj-br/transrewrt/releases)에서 CPU에 맞는 `.AppImage`을 다운로드하세요 (일반적인 PC의 경우 `x64`, 라즈베리 파이 4 이상의 ARM 기기에는 `arm64`). 그 후 다음을 수행하세요:

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

x86_64/amd64에서는 `x64` 파일명을 사용하고, ARM64에서는 `...-arm64.AppImage` 이름을 사용하세요.

API 키를 **설정 → API**에서 입력하세요. 최소한 하나의 제공업체를 설정해야 하며, 무료 모델의 경우 OpenRouter를 사용하는 것이 일반적입니다.

**콘솔 메시지:** 패키징된 Linux 빌드(`x64` 및 `arm64` AppImages)는 터미널에서 Node의 사용 중단 경고를 억제합니다(예: 내장 `punycode` 모듈). Chromium에서 'GLES3은 지원되지 않음'과 같은 GPU/EGL 오류가 출력되지만 앱이 정상 작동한다면, 하드웨어 가속을 비활성화하여 이를 무시할 수 있습니다:

```bash
TRANSREWRT_DISABLE_GPU=1 ./Transrewrt-x.y.z-arm64.AppImage
```

이 설정은 amd64에서도 동일하게 적용되며, 다운로드한 파일에 맞게 파일명을 변경하세요.

Debian/Ubuntu에서는 Chromium에 필요한 추가 **런타임** 라이브러리가 필요할 수 있습니다(전체 데스크톱 설치 환경에서는 이미 설치된 경우가 많음). 필요 시 아래 명령을 실행하세요:

```bash
sudo apt update
sudo apt install -y libfuse2 libgtk-3-0 libnotify4 libnss3 libnspr4 libxss1 libxtst6 xdg-utils \
     xauth libatspi2.0-0 libdrm2 libgbm1 libxcb-dri3-0 libcups2 libasound2t64
```

`libasound2t64`을(를) `libasound2`로 바꾸세요, `arm64`의 경우. 최소 설치 또는 사용자 정의 설치 환경에서는 여전히 `.so` 파일이 없어 실패할 수 있습니다. 오류 메시지에 나온 패키지명을 설치하세요(일반적으로 추가 설치가 필요한 패키지: `libatk1.0-0`, `libatk-bridge2.0-0`, `libgbm1`, `libdrm2`). 일부 환경에서는 `APPIMAGE_EXTRACT_AND_RUN=1 ./Transrewrt-….AppImage`을 사용하여 앱을 실행해야 할 수도 있습니다.

<br/>

> ℹ️ **참고**<br/>
> 현재 macOS는 지원되지 않습니다. Transrewrt는 Windows, Linux 및 Docker에서 사용할 수 있습니다.

</details>

<br/>

앱이 실행되면 [**사용자 안내서**](USER-GUIDE.ko.md)를 참고하여 텍스트 번역, 다시 작성, 변환 방법 및 프롬프트 관리, 모델 구성 방법을 알아보세요.

<br/><br/>

<a id="getting-an-openrouter-api-key"></a>
## OpenRouter API 키 발급 방법

Transrewrt는 여러 AI 제공업체를 지원합니다. [OpenRouter](https://openrouter.ai)는 다양한 모델을 하나의 키로 통합하고 무료 모델을 제공하기 때문에 인기 있는 선택지입니다.

1. [openrouter.ai](https://openrouter.ai)에서 회원 가입 또는 로그인하세요.
2. [Keys](https://openrouter.ai/keys) 페이지를 열고 새 키를 생성하세요(이름을 지정하고, 선택적으로 크레딧 한도를 설정할 수 있음). 크레딧 추가 없이도 무료 모델을 사용할 수 있습니다.
3. **데스크탑(Electron):** 키를 **설정 → API**에 붙여넣기하세요. **Docker:** `OPENROUTER_API_KEY`과 같은 환경 변수를 설정하세요([빠른 시작](#quick-start) 참조).

번역, 재작성 또는 변환 작업에는 OpenRouter의 **Body Builder** 모델([`openrouter/bodybuilder`](https://openrouter.ai/openrouter/bodybuilder))을 사용하지 마세요. 이 모델은 완성된 텍스트가 아닌 JSON 요청 페이로드를 반환합니다. [설정 → 모델](USER-GUIDE.ko.md#models)을 참조하세요.

또한 OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras와 같은 다른 제공업체를 사용하거나 [Ollama](https://ollama.com)를 통해 로컬에서 모델을 실행할 수 있습니다. 지원되는 제공업체 및 환경 변수의 전체 목록은 [설정](#configuration-and-environment)을 참조하세요.

</br>

> ⚠️ **경고**<br/>
> 다른 기기, 컨테이너 또는 서비스에서 Ollama를 사용하는 경우, localhost 전용이 아닌 외부 연결을 허용하도록 Ollama를 설정해야 합니다.

<br/><br/>

<a id="configuration-and-environment"></a>
## 설정 및 환경

</br>

**구성 파일 위치**

| 배포 방식         | 설정 위치                                   |
| ------------------ | ------------------------------------------------- |
| Electron (Windows) | `%APPDATA%\transrewrt\`                           |
| Electron (Linux)   | `~/.config/transrewrt/`                           |
| Web / Docker       | `/app/data/config.json` (지속성을 위해 볼륨 사용) |

<br/>

**환경 변수** (웹/Docker 전용; Electron은 로컬 구성 파일 사용)

| 변수             | 설명                                                                  |
|----------------------|------------------------------------------------------------------------------|
| `PORT`               | 서버 리스닝 포트 (기본값: `5000`)                                  |
| `CONFIG_PATH`        | 구성 파일의 경로 (기본값: `/app/data/config.json`)                |
| `TZ`                 | 서버 측 시간대 (로그 등, 기본값: `Europe/London`) |
| `HISTORY_DISABLED`   | 실행 기록을 강제로 끄기 (옵션, 기본값은 `false`)                  |
| `OPENROUTER_API_KEY` | OpenRouter API 키                                                           |
| `OPENAI_API_KEY`     | OpenAI API 키                                                               |
| `CEREBRAS_API_KEY`   | Cerebras API 키                                                             |
| `ANTHROPIC_API_KEY`  | Anthropic API 키                                                            |
| `GOOGLE_API_KEY`     | Google Gemini API 키                                                        |
| `DEEPSEEK_API_KEY`   | DeepSeek API 키                                                             |
| `GROQ_API_KEY`       | Groq API 키                                                                 |
| `MISTRAL_API_KEY`    | Mistral API 키                                                              |
| `OLLAMA_URL`         | Ollama 기본 URL (예: `http://host.docker.internal:11434`)                   |
| `XAI_API_KEY`        | xAI API 키                                                                  |

**개인정보 보호 모드:** `config.json` 또는 사용자별 설정과 관계없이 기록 추적을 강제로 끄려면, **웹/Docker 서버 프로세스** 및/또는 **Electron 데스크탑 메인 프로세스**에서 `HISTORY_DISABLED`을 `true` 또는 `1`(대소문자 구분 없음)로 설정하십시오(예: 시스템 또는 런처 환경 — 렌더러만이 아님). 이 설정은 입력/출력 기록 저장을 비활성화하고, **설정 → 일반 설정 → 기록**을 잠급니다. 또한 기록 관련 API를 차단합니다.

사용하는 제공자만 구성하세요. 모델 ID는 네임스페이스가 지정되어 있습니다 (`openrouter/…`, `openai/…`, `cerebras/…`, `ollama/…`, 등).

**비용 표시:** OpenRouter는 적용 가능한 경우 정확한 청구 비용을 반환합니다. 다른 제공자는 OpenRouter 키가 있는 경우 OpenRouter의 공개 모델 가격 기준 **예상** 비용을 사용합니다. OpenRouter 키가 없으면 비-OpenRouter 비용이 `0`으로 표시될 수 있습니다. 예상치는 청구서가 아닙니다.

<br/>

**데이터 및 영구 저장:** Docker의 경우 `/app/data`에 볼륨을 마운트하여 `config.json` 및 SQLite 데이터베이스가 컨테이너 재시작 시에도 유지되도록 하세요. 볼륨이 없으면 컨테이너가 중지될 때 모든 데이터가 삭제됩니다.

<br/>

**웹 인증:**

- 기본 관리자: `admin` / `transrewrt26`.
- 사용자 관리는 **설정 → 사용자**에서 수행합니다.
- 비밀번호 재설정: `docker exec <container> reset-web-password '<username>' '<new-password>'`

<br/>

> ⚠️ **경고**<br/>
> 네트워크 접근이 가능한 호스트에서는 즉시 기본 관리자 비밀번호를 변경하세요.

<br/>

키 설정(글꼴, 모델, 언어 등)은 애플리케이션 설정에서 사용할 수 있습니다.

<br/><br/>

<a id="development-and-architecture"></a>
## 개발 및 아키텍처

- **개발:** 설정, 빌드, 테스트 및 배포(Electron, Web, Docker) - [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) 참조
- **아키텍처 및 시스템 개요:** 폴더 구조, 기술 스택, 설계 결정 사항 - [dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md) 참조

<br/><br/>

<a id="reporting-issues"></a>
## 문제 보고

[GitHub](https://github.com/wsj-br/transrewrt/issues)에서 이슈를 등록하세요. 사용 중인 플랫폼(Windows / Linux / Docker)과 앱 버전(정보 대화상자 또는 릴리스 페이지에 표시됨)을 포함해 주세요.

<br/><br/>

<a id="disclaimer"></a>
## 면책 조항

제품 이름 및 아이콘은 각 소유자에게 속하며 식별 용도로만 사용됩니다. 이 소프트웨어는 언급된 브랜드와 제휴하거나 승인받지 않았습니다.

<br/><br/>

<a id="license"></a>
## 라이선스

저작권 © 2026 월더마르 스쿠델러 주니어.

[Apache License 2.0](../LICENSE)
