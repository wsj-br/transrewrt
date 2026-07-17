---
title: 개요
description: Transrewrt란 무엇이며 설치, 가이드 및 설정 문서를 어디서 찾을 수 있는지 안내합니다.
translation_last_updated: '2026-07-17T21:14:46.477Z'
source_file_mtime: '2026-07-17T14:36:51.471Z'
source_file_hash: 6dfcf9cb19e3422d75511ecc06eda72e014214c3e34d95f7fec6d8a05c01896f
translation_language: ko
source_file_path: src/content/docs/docs/index.md
translation_models:
  - z-ai/glm-5.2
---



**Transrewrt**는 다음을 위한 오픈소스 AI 기반 텍스트 도구입니다:

- **Translate** — 수십 개 언어 간 번역, 자동 소스 감지 및 용어집 지원
- **Rewrite** — 문법 수정, 명확성 개선, 어조 또는 길이 변경
- **Transform** — 모든 텍스트에 사용자 정의 AI 프롬프트 실행

다양한 AI 제공자(OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras, NVIDIA, Alibaba Cloud, apikey.fun, OpenAI 호환 엔드포인트 및 Ollama, LM Studio, llama.cpp와 같은 로컬 OpenAI 호환 서버)를 지원합니다. **데스크톱 앱**(Windows / Linux) 또는 **자체 호스팅 웹 앱**(Docker)으로 실행할 수 있습니다.

사용자의 키, 사용자의 모델, 사용자의 호스트 — Transrewrt 클라우드 계정은 없습니다.

## 창 구성

- **사이드바** — 번역, 다시쓰기, 변환, 대시보드, 기록, 설정(웹에서는 로그인한 사용자 포함)
- **툴바** — 페이지 제목, **프리셋** (쉬운 모드) 또는 **모델** (고급 모드) 선택기, **인터페이스 언어** (지구본 아이콘, 번역 출발/도착 언어는 변경하지 않음)
- **작업 영역** — 입력 및 출력 패널(글자 수, 소요 시간, TPS, 선택적 비용 포함)

기본적으로 앱은 **쉬운** 모드로 실행됩니다: 설정에서 **프리셋**과 **제공자**를 선택하세요. 전체 모델 목록을 보려면 [설정 → 일반 설정](/docs/settings/#general-settings)에서 **고급**으로 전환하세요.

## 시작하기

1. [빠른 시작](/docs/quick-start/) — 데스크톱 설치 또는 Docker로 실행
2. [API 키](/docs/api-key/) — 무료 OpenRouter 키 또는 다른 제공자 연결
3. [구성](/docs/configuration/) — 환경 변수, 구성 경로, 웹 인증

## 가이드

- [텍스트 번역](/docs/translate/)
- [텍스트 다시쓰기](/docs/rewrite/)
- [프롬프트로 변환](/docs/transform/)
- [대시보드 사용](/docs/dashboard/)
- [기록 탐색](/docs/history/)

## 참조 및 도움말

- [설정](/docs/settings/)
- [일반적인 문제](/docs/common-issues/)

[Download releases](https://github.com/wsj-br/transrewrt/releases) · [GitHub repository](https://github.com/wsj-br/transrewrt)
