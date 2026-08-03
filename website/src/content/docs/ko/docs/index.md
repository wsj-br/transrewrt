---
title: 개요
description: Transrewrt가 무엇인지와 설치 가이드, 설정 문서를 찾는 방법을 설명합니다.
---



**Transrewrt**는 AI 기반 오픈소스 텍스트 도구로, 다음과 같은 기능을 제공합니다:

- **번역(Translate)** — 수십 개 언어 간 자동 소스 감지 및 용어집을 지원하는 번역
- **재작성(Rewrite)** — 문법 수정, 명확성 향상, 어조 또는 길이 변경
- **변환(Transform)** — 모든 텍스트에 사용자 정의 AI 프롬프트 실행

다양한 AI 제공자(OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras, NVIDIA, Alibaba Cloud, apikey.fun, OpenAI 호환 엔드포인트 및 Ollama, LM Studio, llama.cpp와 같은 로컬 OpenAI 호환 서버)를 지원합니다. **데스크톱 앱**(Windows / Linux) 또는 **Docker 웹 앱**으로 실행할 수 있습니다.

사용자의 키, 사용자의 모델, 사용자의 호스트 — Transrewrt 클라우드 계정이 없습니다.

## 창 구성 방법

![번역 작업 공간](/images/screenshots/ko/translate.png)

- **사이드바** — 기본 탐색: 번역, 다시 쓰기, 변환, 대시보드, 기록, 설정(및 웹에서 로그인한 사용자).
- **툴바** — 페이지 제목, **사전 설정**(쉬움) 또는 **모델**(고급) 선택기, **인터페이스 언어**(지구본 아이콘; 번역 원본/대상을 변경하지 않음), 그리고 이 문서로 연결되는 도움말(**?**). 사전 설정/모델 메뉴는 설정 열기 위에 있는 **쉬움/고급 모드로 전환**도 가능합니다.
- **작업 영역** — 개수, 시간, TPS 및 선택적 비용이 표시되는 입력 및 출력 패널. 작업 표시줄에는 GitHub Pages 사이트로 연결되는 작은 앱 **버전** 링크(오른쪽 하단)가 표시됩니다.

기본적으로 앱은 **간단** 모드로 실행됩니다: 설정에서 **프리셋**과 **제공자**를 선택하세요. [설정 → 일반 설정](/docs/settings/#general-settings)에서 전체 모델 목록을 보려면 **고급**으로 전환하거나, 도구 모음의 프리셋/모델 메뉴에서 스위치를 사용하세요.

## 시작하기

1. [빠른 시작](/docs/quick-start/) — 데스크톱 설치 또는 Docker로 실행
2. [API 키](/docs/api-key/) — 무료 OpenRouter 키 또는 다른 제공자 연결
3. [구성](/docs/configuration/) — 환경 변수, 구성 경로, 웹 인증

## 가이드

- [텍스트 번역](/docs/translate/)
- [텍스트 재작성](/docs/rewrite/)
- [프롬프트로 변환](/docs/transform/)
- [대시보드 사용](/docs/dashboard/)
- [히스토리 찾아보기](/docs/history/)

## 참조 및 도움말

- [설정](/docs/settings/)
- [일반적인 문제](/docs/common-issues/)

[Download releases](https://github.com/wsj-br/transrewrt/releases) · [GitHub repository](https://github.com/wsj-br/transrewrt)
