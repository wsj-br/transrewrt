---
title: API 키
description: 무료 OpenRouter API 키를 받아 다른 AI 제공자를 Transrewrt에 연결하세요.
---



Transrewrt는 최소 하나의 AI 제공자에 액세스해야 합니다. 시작하기 위해 유료 모델이 **필요하지** 않습니다. 키를 추가하면 OpenRouter에서 무료 모델을 제공하며, 다른 여러 제공자도 무료 티어를 제공합니다.

지원되는 제공자로는 [OpenRouter](https://openrouter.ai), OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras, NVIDIA, Alibaba Cloud, apikey.fun, 모든 OpenAI 호환 엔드포인트, 그리고 로컬 OpenAI 호환 서버(Ollama, LM Studio, llama.cpp 등)가 있습니다.

## 간편 vs 고급

- **Easy** 모드(기본값): **제공자**에 매핑된 **프리셋**(Free (OpenRouter), Standard, Advanced 또는 Technical)을 선택합니다. 현재 제공자에 대한 매핑이 있는 프리셋만 표시됩니다.
- **Advanced** 모드: 모델을 직접 선택합니다. 모델 ID는 제공자 접두사를 사용합니다(예: `openrouter/…`, `openai/…`, `local/…`).

## 무료 OpenRouter 키(데스크톱)

1. [openrouter.ai](https://openrouter.ai)로 이동하여 가입하거나 로그인합니다.
2. [Keys](https://openrouter.ai/keys) 페이지를 열고 새 키를 생성합니다(이름 지정, 선택적 크레딧 한도). 크레딧을 추가하지 않고도 무료 모델을 사용할 수 있습니다.
3. Transrewrt에서 **Settings → API Config**를 열고, 키를 **OpenRouter API key**에 붙여넣은 다음 **Test OpenRouter key**를 클릭합니다.

:::caution
번역, 재작성 또는 변환에 OpenRouter의 **Body Builder** 모델(`openrouter/bodybuilder`)을 사용하지 마세요. 이 모델은 완성된 텍스트가 아닌 JSON 요청 페이로드를 반환합니다.
:::

## 기타 무료 옵션

Cerebras, Google, Groq, Mistral AI 또는 [NVIDIA](https://build.nvidia.com/)(OpenAI 호환 API)에서 무료 API 키를 얻거나, Ollama, LM Studio, llama.cpp 또는 다른 OpenAI 호환 서버(예: Ollama를 통한 `translategemma:4b`)를 사용하여 로컬에서 모델을 실행할 수도 있습니다. 설정(데스크톱) 또는 `LOCAL_LLM_URL`(Docker)에서 Local LLM base URL을 전체 API 베이스(경로 포함, 예: `http://localhost:11434/v1`)로 설정하세요.

:::caution
다른 기기나 컨테이너에서 로컬 LLM 서버를 사용하는 경우, 외부 연결(localhost 전용이 아님)을 허용하도록 구성하세요.
:::

## Docker / 웹

서버에서 공급자 키를 **환경 변수**로 설정합니다(예: `PROVIDER_API_KEY`). 사용자는 브라우저 UI에 키를 입력할 수 없습니다. [구성](/docs/configuration/)을 참조하세요.

## 첫 실행 체크리스트

1. 앱을 열고 필요한 경우 **인터페이스 언어**를 설정합니다.
2. 하나 이상의 제공자 키를 추가하고 테스트하거나(데스크톱), 서버에 환경 변수 키가 있는지 확인합니다(웹).
3. **간편** 모드에서는 일반 설정에서 **제공자**를 선택하고, **고급** 모드에서는 **설정 → 모델** 아래에 모델을 추가합니다.
4. **번역**에서 사전 설정 또는 모델을 선택하고 간단한 테스트를 실행하세요 — [텍스트 번역](/docs/translate/)을 참조하세요.
