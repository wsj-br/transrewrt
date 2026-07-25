---
title: API 키
description: Transrewrt를 원하는 AI 제공자에 연결하려면 API 키를 추가하거나, 대신 로컬 모델을 사용하세요.
---



Transrewrt에는 자체 AI가 포함되어 있지 않으며, 사용자가 선택한 AI 제공자에게 텍스트를 전송합니다. 제공자를 연결하려면 **API 키**를 추가합니다. 이는 제공자가 발급하는 비공개 코드로, 해당 서비스의 비밀번호 역할을 합니다. 시작하려면 **하나의** 제공자만 있으면 되며 비용을 지불할 필요도 없습니다. 여러 제공자에서 무료 모델이나 무료 등급을 제공하며, 키 없이도 자신의 컴퓨터에서 모델을 실행할 수 있습니다.

지원되는 제공자로는 OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras, NVIDIA, Alibaba Cloud, apikey.fun, 모든 OpenAI 호환 엔드포인트, 그리고 로컬 OpenAI 호환 서버(Ollama, LM Studio, llama.cpp 등)가 있습니다.

## 1단계 — 제공자 선택

지원되는 제공자라면 모두 사용할 수 있습니다. 어떤 것을 선택할지 확신이 없다면:

- **무료로 시작**: OpenRouter, Google Gemini, Groq, Mistral, Cerebras, NVIDIA 모두 무료 모델이나 무료 등급을 제공합니다.
- **이미 계정이 있나요?** 이미 OpenAI, Anthropic 또는 다른 지원되는 제공자를 사용 중이라면 해당 계정을 그대로 재사용하면 됩니다.
- **모든 것을 자신의 컴퓨터에서 처리하고 싶나요?** 키를 완전히 생략하고 대신 [로컬 모델](#using-a-local-model-instead-no-api-key)을 사용하세요.

## 2단계 — API 키 생성

정확한 단계는 제공자마다 약간씩 다르지만, 패턴은 모두 동일합니다:

1. 제공자 웹사이트에서 가입하거나 로그인합니다. Transrewrt의 **Settings → API Config**에서 각 제공자에는 올바른 위치로 이동하는 **Open provider website** 링크가 있습니다.
2. **API keys** 페이지(계정, 대시보드 또는 개발자 설정 아래에 있는 경우도 있음)를 찾아 새 키를 생성합니다. 일부 제공자는 키 이름을 지정하거나 지출 한도를 설정하도록 요구할 수 있으며, 둘 다 선택 사항입니다.
3. 키를 복사합니다. 키는 긴 문자와 숫자의 조합이며, 보통 `sk-`와(과) 같은 것으로 시작합니다.

:::note
API 키는 비밀번호처럼 취급하세요. 공유하거나 게시하거나 다른 사람에게 보내지 마세요. 키가 유출된 경우 제공업체 웹사이트에서 삭제하고 새로 만드세요.
:::

## 3단계 — 키 추가 및 테스트(데스크톱)

1. Transrewrt에서 **Settings → API Config**를 엽니다.
2. 키를 해당 제공자의 필드(예: **Google Gemini API key**)에 붙여넣고 저장합니다.
3. 필드 옆의 **Test**를 클릭하여 키가 작동하는지 확인합니다.

테스트가 성공하면 준비가 완료된 것입니다. 메인 화면에서 해당 제공자를 선택하고 번역을 시작하세요.

## 대신 로컬 모델 사용(API 키 없음)

Ollama, LM Studio, llama.cpp 또는 다른 OpenAI 호환 서버(예: LM Studio를 통한 `google/gemma-4-e2b`)를 사용하여 자신의 컴퓨터에서 모델을 실행할 수 있습니다. 어떤 것도 컴퓨터를 떠나지 않으며 API 키가 필요하지 않습니다.

연결하려면 Local LLM base URL을 경로를 포함한 전체 API 베이스로 설정하세요(예: `http://localhost:11434/v1`). 데스크톱에서는 **Settings → API Config**에서 설정하고, Docker에서는 대신 `LOCAL_LLM_URL` 환경 변수를 설정합니다.

:::tip
다른 기기나 컨테이너에서 로컬 LLM 서버를 사용하는 경우, 외부 연결을 허용하도록(localhost 전용이 아님) 구성하세요.
:::

## Docker / 웹

브라우저에서 Transrewrt를 사용하는 경우, 키는 브라우저 UI에 입력하는 것이 아니라 서버를 실행하는 사람이 관리합니다. 관리자는 서버에서 **환경 변수**로 제공자 키를 설정합니다(예: `PROVIDER_API_KEY`). [Configuration](/docs/configuration/)을 참조하세요.

## 첫 실행 체크리스트

1. 앱을 열고 필요한 경우 **Interface language**를 설정합니다.
2. 하나 이상의 제공자 키를 추가하고 테스트하거나, 로컬 모델을 구성(데스크톱)하거나, 서버에 환경 변수 키가 있는지 확인(웹)합니다.
3. **Easy** 모드에서는 General Settings에서 **Provider**를 선택하고, **Advanced**에서는 **Settings → Models**에서 모델을 추가합니다. 두 모드에 대한 자세한 내용은 [Settings](/docs/settings/#general-settings)를 참조하세요.
4. **Translate**에서 프리셋이나 모델을 선택하고 짧은 테스트를 실행하세요. [Translate text](/docs/translate/)를 참조하세요.

## 문제가 발생하는 경우

- **키 테스트 실패**: 키가 완전히 복사되었는지(앞뒤에 공백 없음) 확인하고, 제공자 웹사이트에서 삭제되거나 비활성화되지 않았는지 확인하세요.
- **할당량 또는 크레딧 오류로 번역 실패**: 무료 버전에는 일일 또는 월간 한도가 있습니다. 대기하거나, 다른 무료 제공자로 전환하거나, 크레딧을 추가하세요.
- **Easy 모드에 제공자가 표시되지 않음**: **설정 → API 설정**을 열고 하나 이상의 키(또는 로컬 LLM URL)가 구성 및 테스트되었는지 확인하세요.

추가 도움말: [일반적인 문제](/docs/common-issues/).
