---
title: 프롬프트로 변환하기
description: 맞춤 AI 명령어 실행 — Transform 프롬프트를 생성, 편집, 테스트 및 관리합니다.
---



AI가 맞춤 명령어를 따르게 하려면 **Transform**을 사용하세요 — 요약, 이메일 다듬기, 핵심 사항 추출, 텍스트 재서식 지정 또는 정의한 모든 워크플로에 사용할 수 있습니다.

![Transform 워크스페이스](/images/screenshots/ko/transform.png)

## 기존 프롬프트 실행

1. **Transform**을 엽니다.
2. 목록에서 프롬프트를 선택합니다.
3. **From** 언어 상자가 나타나면, 원하는 언어를 설정합니다.
4. **Input**에 텍스트를 입력하거나 붙여넣습니다.
5. **Transform**을 클릭합니다.
6. **Output**에서 결과를 확인합니다.

[레이아웃 전환 및 키보드 단축키](/docs/translate/#layout-and-keyboard)는 번역과 동일하게 작동합니다.

## 샘플 프롬프트 불러오기

목록이 비어 있으면 Transform 워크스페이스에서 **Load sample prompts**를 클릭합니다 ([Settings → Transform](/docs/settings/#transform)에서도 사용 가능). 샘플은 영어로 제공됩니다. 불러온 후 필요에 따라 프롬프트를 편집하고 **Translate prompt**를 사용하세요.

## 프롬프트 생성

1. **New prompt**를 클릭합니다.
2. **Generate prompt**를 클릭합니다.
3. 프롬프트가 수행할 작업을 설명합니다.
4. 프리셋(Easy) 또는 모델(Advanced)을 선택합니다.
5. 초안을 검토하고 **Save**를 클릭합니다.

## 프롬프트 편집

편집기는 왼쪽에, 테스트 영역은 오른쪽에 있습니다.

![Transform 프롬프트 편집기](/images/screenshots/ko/transform-prompt-edit.png)

주요 필드:

- **Prompt name** — 프롬프트 목록에 표시됩니다
- **Prompt instructions (optional)** — 프롬프트 실행 시 간단한 힌트
- **Model Role** — AI의 전체적인 역할
- **Model Instructions (one per line)** — 따라야 할 규칙
- **Output description** — 결과에 대한 간단한 라벨(예: 요약됨)
- **Temperature (0.0 → 1.0)** — 낮을수록 안정적, 높을수록 다양함
- **Ask for target language** — 실행 시 언어 선택기를 추가합니다

헬퍼: **Generate prompt**, **Improve prompt**, **Translate prompt** (Easy는 프리셋 사용, Advanced는 모델 목록 사용).

:::caution
**Back to Run** 전에 **Save**를 클릭하세요. 저장하지 않고 돌아가면 편집 내용이 삭제됩니다.
:::

## 일상 사용 전 테스트

프롬프트를 작성하거나 비교할 때 오른쪽 테스트 패널에서 샘플 텍스트를 사용하세요.

[설정 → 변환](/docs/settings/#transform)에서 프롬프트를 일괄 내보내기 및 가져오기할 수 있습니다.

## 다음 단계

- [설정](/docs/settings/)
- [기록 탐색](/docs/history/)
- [일반적인 문제](/docs/common-issues/)
