---
title: 프롬프트로 변환
description: 사용자 지정 AI 명령 실행 — Transform 프롬프트 생성, 편집, 테스트 및 관리.
translation_last_updated: '2026-07-17T14:59:00.436Z'
source_file_mtime: '2026-07-17T11:53:39.333Z'
source_file_hash: 07b5d140803063510c7c9fecf67a2f99e3aab3040116733a3126939b0c82e16e
translation_language: ko
source_file_path: src/content/docs/docs/transform.md
translation_models:
  - z-ai/glm-5.2
---



AI가 사용자 지정 명령을 따르도록 하려면 **Transform**을 사용하세요 — 요약, 이메일 다듬기, 핵심 포인트 추출, 텍스트 서식 변경 또는 정의한 모든 워크플로우.

![Transform 작업 공간](/images/screenshots/ko/transform.png)

## 기존 프롬프트 실행

1. **Transform**을 엽니다.
2. 목록에서 프롬프트를 선택합니다.
3. **From** 언어 상자가 나타나면 원하는 언어를 설정합니다.
4. **Input**에 텍스트를 입력하거나 붙여넣습니다.
5. **Transform**을 클릭합니다.
6. **Output**에서 결과를 확인합니다.

## 샘플 프롬프트 불러오기

목록이 비어 있으면 Transform 작업 공간에서 **Load sample prompts**를 클릭합니다([Settings → Transform](/docs/settings/#transform)에서도 사용 가능). 샘플은 영어로 제공되며, 불러온 후 필요에 따라 프롬프트를 편집하고 **Translate prompt**를 사용합니다.

## 프롬프트 생성

1. **New prompt**를 클릭합니다.
2. **Generate prompt**를 클릭합니다.
3. 프롬프트가 수행할 작업을 설명합니다.
4. 사전 설정(Easy) 또는 모델(Advanced)을 선택합니다.
5. 초안을 검토하고 **Save**를 클릭합니다.

## 프롬프트 편집

편집기는 왼쪽에 있고 테스트 영역은 오른쪽에 있습니다.

![Transform 프롬프트 편집기](/images/screenshots/ko/transform-prompt-edit.png)

기본 필드:

- **Prompt name** — 프롬프트 목록에 표시됨
- **Prompt instructions (optional)** — 프롬프트 실행 시 간단한 힌트
- **Model Role** — AI의 전반적인 역할
- **Model Instructions (one per line)** — 따라야 할 규칙
- **Output description** — 결과에 대한 간단한 레이블(예: 요약됨)
- **Temperature (0.0 → 1.0)** — 낮을수록 안정적, 높을수록 다양함
- **Ask for target language** — 실행 시 언어 선택기를 추가함

도우미: **Generate prompt**, **Improve prompt**, **Translate prompt** (Easy는 사전 설정을 사용하고 Advanced는 모델 목록을 사용함).

:::caution
**Back to Run** 전에 **Save**를 클릭하세요. 저장하지 않고 돌아가면 편집 내용이 삭제됩니다.
:::

## 일상 사용 전 테스트

프롬프트를 작성하거나 비교할 때 오른쪽 테스트 패널과 샘플 텍스트를 사용하세요.

[설정 → 변환](/docs/settings/#transform)에서 프롬프트를 일괄적으로 내보내고 가져올 수 있습니다.

## 다음 단계

- [설정](/docs/settings/)
- [기록 탐색](/docs/history/)
- [자주 발생하는 문제](/docs/common-issues/)
