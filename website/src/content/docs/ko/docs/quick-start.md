---
title: 빠른 시작
description: Windows 또는 Linux에 Transrewrt를 설치하거나, 자체 호스팅 Docker 웹 앱을 실행하세요.
---



본인에게 맞는 방법을 선택하세요. 모두 무료이며 오픈 소스(Apache 2.0)입니다.

## Docker (자체 호스팅 웹)

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest

PROVIDER_API_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e PROVIDER_API_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

`PROVIDER_API_KEY=sk-or-your-key`을(를) 선택한 제공자의 API 키로 교체하세요(지원되는 옵션은 [구성](/docs/configuration/) 참조).

그런 다음 [http://localhost:5000](http://localhost:5000)을 열고 서비스를 외부에 노출하기 전에 **기본 관리자 비밀번호를 변경**하세요.

:::caution
Docker에서 LLM 자격 증명은 환경 변수(예: `PROVIDER_API_KEY`)로 설정됩니다. 웹 UI에 **입력하지** 않습니다. 데스크톱에서는 **설정 → API**에서 키를 구성합니다.
:::

### Docker Compose

```bash
wget https://github.com/wsj-br/transrewrt/raw/refs/heads/master/production.yml -O transrewrt.yml
# Edit the file to add your API keys, or use a `.env` file. Set TZ if needed.
docker compose -f transrewrt.yml up -d
```

## Windows

1. [Releases](https://github.com/wsj-br/transrewrt/releases)에서 최신 `Transrewrt Setup x.y.z.exe`을(를) 다운로드하세요.
2. 설치 프로그램을 실행하세요.
3. 앱을 열고 **설정 → API**에서 API 키를 입력하세요. 최소 한 개의 제공자를 구성하세요. 무료 모델에는 OpenRouter가 일반적인 선택입니다.

:::note
Windows는 서명되지 않은 인디 앱에 대해 UAC 또는 SmartScreen 경고를 표시할 수 있습니다. 공식 GitHub Releases 페이지에서 다운로드하는 것을 권장하며, 체크섬이 게시된 경우 확인하세요.
:::

## Linux

[Releases](https://github.com/wsj-br/transrewrt/releases)에서 CPU에 맞는 `.AppImage`을(를) 다운로드하세요 (`x64` 또는 `arm64`, Raspberry Pi 4+ 포함):

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

**설정 → API**에서 API 키를 입력하세요.

Chromium이 GPU / EGL 오류를 출력하지만 앱이 정상 작동한다면, 하드웨어 가속을 비활성화할 수 있습니다:

```bash
TRANSREWRT_DISABLE_GPU=1 ./Transrewrt-x.y.z-arm64.AppImage
```

:::note
현재 macOS는 지원되지 않습니다. Transrewrt는 Windows, Linux, Docker에서 사용할 수 있습니다.
:::

## 다음 단계

1. [API 키 받기](/docs/api-key/)
2. 간단한 번역을 실행하여 모든 것이 정상적으로 작동하는지 확인하세요
3. [번역](/docs/translate/), [재작성](/docs/rewrite/), [변환](/docs/transform/) 가이드 읽기
