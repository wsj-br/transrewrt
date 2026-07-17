---
title: 텍스트 번역
description: 언어 간 텍스트를 변환하고, 용어집을 사용하며, 바꾸어 쓰기(Rephrase)로 결과를 다듬습니다.
translation_last_updated: '2026-07-17T14:59:00.524Z'
source_file_mtime: '2026-07-17T11:53:39.333Z'
source_file_hash: ace9ad02a7dc82bf08090597c56e7cc82324e6250beab93fc2dbeaeed8b91675
translation_language: ko
source_file_path: src/content/docs/docs/translate.md
translation_models:
  - z-ai/glm-5.2
---



**Translate**를 사용하여 텍스트를 한 언어에서 다른 언어로 변환합니다.

![번역 워크스페이스](/images/screenshots/ko/translate.png)

## 필수 조건

- 하나 이상의 제공자 키(데스크톱) 또는 서버 환경 키(웹) — [API 키](/docs/api-key/) 참조
- 툴바에서 선택된 **preset** (쉬움) 또는 **model** (고급)

## 텍스트 번역

1. 사이드바에서 **Translate**를 엽니다.
2. **From**에서 언어를 선택합니다(또는 **Detect Language**).
3. **To**에서 언어를 선택합니다.
4. 툴바에서 프리셋 또는 모델을 선택합니다.
5. **Input**에 텍스트를 입력하거나 붙여넣습니다.
6. **Translate**를 클릭합니다.
7. **Output**에서 결과를 읽고, 필요하면 복사합니다.

**Top languages**가 목록 맨 위에 표시됩니다 — [Settings → Languages](/docs/settings/#languages)에서 설정합니다.

## 유용한 설정

[Settings → General Settings](/docs/settings/#general-settings)에서:

- **Auto-execute on paste** — 붙여넣는 즉시 실행
- **Auto-copy result to clipboard** — 성공적으로 실행된 후 복사
- **Real-time translation while typing** — 입력하는 동안 실행 (비용이 증가할 수 있음)
- **Timeout (ms)** — 실시간 실행 전 대기 시간
- **Behaviour for ENTER** — Enter 키가 작업을 실행할지 새 줄을 삽입할지 여부

## 번역 다듬기

성공적으로 실행된 후 **To:** 선택기 옆에 **Rephrase…** 와 버전 드롭다운이 나타납니다:

1. **Rephrase…** (선택 없음) — 동일한 입력에 대한 또 다른 전체 번역입니다. 최대 **five**개 버전까지 가능하며, 모델이 이전 버전을 보므로 표현이 달라질 수 있습니다. 실행 중인 바꾸어 쓰기를 취소하려면 **Stop Translate**를 클릭합니다.
2. **Word alternatives** — 단어나 짧은 구를 선택한 다음, 마우스 오른쪽 버튼을 클릭하거나 **Rephrase…** 를 선택합니다. 대체어를 선택하여 해당 영역을 교체합니다(문법을 위해 약간 넓어질 수 있음). 버전이 5개인 경우 버전 5만 업데이트됩니다.
3. 각 바꾸어 쓰기 또는 대체어 요청은 모델을 다시 사용하므로 비용이 추가될 수 있습니다.

## 용어집 사용

**glossary**는 언어 쌍에 대한 원본/대상 용어 쌍입니다. 활성화하면 일치하는 용어가 모델로 전송되어 선호하는 표현이 일관되게 유지됩니다.

1. 입력 패널에서 **Glossary**를 켭니다.
2. 평소처럼 번역합니다 — 해당 **From** / **To** 쌍의 용어가 자동으로 적용됩니다.
3. 새 쌍을 빠르게 추가하려면 (**From:** 옆에 있는) **Add to Glossary**를 클릭합니다.
4. [Settings → Glossary](/docs/settings/#glossary)에서 모든 용어를 관리합니다.

:::note
용어집 용어는 언어 쌍별로 매칭됩니다. 소스가 **언어 감지**인 경우에는 사용할 수 없습니다.
:::

## 다음 단계

- [텍스트 다시 작성](/docs/rewrite/)
- [프롬프트로 변환](/docs/transform/)
- [일반적인 문제](/docs/common-issues/)
