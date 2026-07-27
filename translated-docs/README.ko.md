<p align="center">
  <img src="../images/transrewrt_banner.png" alt="Transrewrt Banner"  />
</p>

<h1 align="center">Transrewrt</h1>

<p align="center">
  <a href="https://github.com/wsj-br/transrewrt/releases"><img src="https://img.shields.io/badge/version-1.6.2-blue" alt="Version"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-Apache%202.0-green" alt="License: Apache 2.0"></a>
  <img src="https://img.shields.io/badge/platform-Windows%20%7C%20Linux%20%7C%20Docker-lightgrey" alt="Platform">
</p>

사용자 정의 프롬프트로 **번역**, **다시 쓰기**, **변환**을 수행하는 AI 기반 텍스트 도구입니다. 자체 AI 제공자(OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras, NVIDIA, Alibaba Cloud, apikey.fun, OpenAI 호환 엔드포인트, Ollama, LM Studio, llama.cpp 등 로컬 서버)를 사용하세요. 데스크톱 앱(Windows / Linux) 또는 자체 호스팅 웹 앱(Docker)으로 실행할 수 있습니다. Transrewrt 클라우드 계정이 필요 없습니다.

## 기능

| 기능 | 설명 |
| --- | --- |
| **번역** | 수십 개 언어, 자동 감지, 용어집, Rephrase로 다듬기 |
| **다시 쓰기** | 명확성, 어조, 길이, 맞춤법 및 문법 — 동일 언어 |
| **변환** | 생성, 편집, 재사용 가능한 사용자 지정 AI 프롬프트 |
| **배포** | Electron 데스크톱 또는 Docker 웹(amd64 & arm64) |
| **키** | 자체 공급자, 자체 호스트 — 쉬움 프리셋 또는 고급 모델 목록 |

![번역](../images/screenshots/ko/translate.png)

<small>**다른 언어로 읽기:** </small>
<small id="lang-list">[English (UK)](../README.md) · [العربية](./README.ar.md) · [简体中文](./README.zh-Hans.md) · [繁體中文](./README.zh-Hant.md) · [Čeština](./README.cs.md) · [Nederlands](./README.nl.md) · [Français](./README.fr.md) · [Deutsch](./README.de.md) · [Ελληνικά](./README.el.md) · [हिन्दी](./README.hi.md) · [Magyar](./README.hu.md) · [Italiano](./README.it.md) · [日本語](./README.ja.md) · [한국어](./README.ko.md) · [فارسی](./README.fa.md) · [Polski](./README.pl.md) · [Português (Brasil)](./README.pt-BR.md) · [Română](./README.ro.md) · [Русский](./README.ru.md) · [Slovenčina](./README.sk.md) · [Español](./README.es.md) · [Svenska](./README.sv.md) · [ไทย](./README.th.md) · [Türkçe](./README.tr.md) · [Українська](./README.uk.md) · [Tiếng Việt](./README.vi.md)</small>

## 빠른 시작

**Docker**

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest

docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e PROVIDER_API_KEY=your-key \
  --name transrewrt \
  ghcr.io/wsj-br/transrewrt:latest
```

`PROVIDER_API_KEY`를 공급자 변수(예: `OPENROUTER_API_KEY`, `OPENAI_API_KEY`, `GROQ_API_KEY`)로 교체하세요. [http://localhost:5000](http://localhost:5000)를 열고 기본 관리자 비밀번호를 변경하세요. 키는 환경 변수를 통해 설정됩니다(웹 UI가 아님).

**Windows** — [Releases](https://github.com/wsj-br/transrewrt/releases)에서 `Transrewrt Setup x.y.z.exe`를 다운로드하고, 설치한 후 **설정 → API**에서 키를 추가하세요.

**Linux** — [Releases](https://github.com/wsj-br/transrewrt/releases)에서 `.AppImage`를 다운로드한 후:

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

플랫폼 세부 정보(Compose, SmartScreen, apt 라이브러리, GPU 플래그, 시간대): [빠른 시작 문서](https://wsj-br.github.io/transrewrt/docs/quick-start/).

## 문서

전체 제품 문서(설치, API 키, 가이드, 설정, 문제 해결):

**[https://wsj-br.github.io/transrewrt/docs/](https://wsj-br.github.io/transrewrt/docs/)**

- [API 키](https://wsj-br.github.io/transrewrt/docs/api-key/)
- [구성](https://wsj-br.github.io/transrewrt/docs/configuration/)
- [번역](https://wsj-br.github.io/transrewrt/docs/translate/) · [다시 쓰기](https://wsj-br.github.io/transrewrt/docs/rewrite/) · [변환](https://wsj-br.github.io/transrewrt/docs/transform/)
- [일반적인 문제](https://wsj-br.github.io/transrewrt/docs/common-issues/)

## 개발

- 설정, 빌드, 테스트, 배포: [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)
- 아키텍처 개요: [dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)

## 지원

[GitHub](https://github.com/wsj-br/transrewrt/issues)에 이슈를 열어주세요. 플랫폼(Windows / Linux / Docker)과 앱 버전(정보 대화상자 또는 Releases 페이지)을 포함해 주세요.

## 감사의 말

사전 설정 편집기의 쉬움 모드 사전 설정 제안은 다음의 공개 평가 데이터를 사용합니다:

- [languagebench](https://huggingface.co/spaces/fair-forward/languagebench) (CC BY-SA 4.0)
- [Artificial Analysis](https://artificialanalysis.ai/) (API 데이터에 대한 출처 표시 필요)

서드파티 종속성 라이선스 및 이러한 데이터 소스 공지는 [NOTICES](../NOTICES)에 나열되어 있습니다.

## 라이선스

저작권 © 2026 월더마르 스쿠델러 주니어.

[Apache License 2.0](../LICENSE)

제품명과 아이콘은 해당 소유자의 재산이며 식별 목적으로만 사용됩니다. 이 소프트웨어는 해당 브랜드와 제휴 관계가 없으며 해당 브랜드의 보증을 받지 않습니다.

<small>

> **UI 및 문서 번역 참고:** 영국 영어를 제외한 모든 인터페이스 및 문서 언어는 [ai-i18n-tools](https://wsj-br.github.io/ai-i18n-tools/)를 사용하여 AI로 번역되었습니다. 표현이 부정확하거나 오류가 포함되어 있을 수 있습니다.

</small>
