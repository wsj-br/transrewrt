---
title: 텍스트 다시 쓰기
description: 동일한 언어로 표현 개선 — 명확성, 어조, 길이, 문법 등.
translation_last_updated: '2026-07-17T14:59:00.318Z'
source_file_mtime: '2026-07-17T11:53:39.333Z'
source_file_hash: ca70a1d16518bb9193c83911bfb7be66b19076c48b914b92aba4e9a17f67740f
translation_language: ko
source_file_path: src/content/docs/docs/rewrite.md
translation_models:
  - z-ai/glm-5.2
---



**Rewrite**를 사용하여 주요 의미를 바꾸지 않고 표현을 개선합니다. 텍스트는 동일한 언어로 유지됩니다.

![다시 쓰기 워크스페이스](/images/screenshots/ko/rewrite.png)

모드는 다음과 같습니다:

- **Check Spelling & Grammar**
- **Improve Clarity**
- **Alternative versions** (한 번의 실행으로 여러 가지 표현 제안)
- **Make Formal** / **Make Informal**
- **Shorten** / **Expand**
- **Make Technical**

## 텍스트 다시 쓰기

1. **Rewrite**를 엽니다.
2. **Mode**를 선택합니다.
3. 선택적으로 **From**을 텍스트의 언어로 설정합니다(또는 **Detect Language**로 둡니다).
4. **Input**에 텍스트를 입력하거나 붙여넣습니다.
5. **Rewrite**를 클릭합니다.
6. **Output**에서 결과를 읽습니다.

:::tip
**Check Spelling & Grammar**에서 **Copy** 옆에 **Show changes** 스위치가 나타납니다. 이 스위치를 전환하여 수정 사항을 표시하거나 숨깁니다.
:::

:::note
**Alternative versions**는 `----`로 구분된 여러 가지 표현을 **단일** 실행으로 반환합니다. 이는 시간이 지남에 따라 버전 기록을 구축하는 **Rephrase…** 와 다릅니다.
:::

## 다시 쓰기 결과 다듬기

성공적으로 실행되면 출력 측에 **Rephrase…** 와 버전 드롭다운이 나타납니다([Translate](/docs/translate/#refine-a-translation)와 동일한 개념이지만, 텍스트는 동일한 언어로 유지되고 현재 **Mode**를 유지합니다):

1. **Rephrase…** (선택 없음) — 다른 표현으로 전체를 다시 씁니다. 최대 5개의 버전이 제공됩니다. 취소하려면 **Stop Rewrite**를 클릭합니다.
2. **Word alternatives** — 텍스트를 선택한 다음 마우스 오른쪽 버튼을 클릭하거나 **Rephrase…** 를 선택합니다.
3. 각 요청은 사용 비용을 추가할 수 있습니다.

## 다음 단계

- [텍스트 번역](/docs/translate/)
- [프롬프트로 변환](/docs/transform/)
- [일반적인 문제](/docs/common-issues/)
