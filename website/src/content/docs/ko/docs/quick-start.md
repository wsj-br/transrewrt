---
title: 빠른 시작
description: Windows 또는 Linux에 Transrewrt를 설치하거나, 자체 호스팅 Docker 웹 앱을 실행하세요.
---



본인에게 맞는 방법을 선택하세요. 모두 무료이며 오픈 소스(Apache 2.0)입니다.

## Docker(자체 호스팅 웹)

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest

docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e PROVIDER_API_KEY=your-api-key \
  --name transrewrt \
  ghcr.io/wsj-br/transrewrt:latest
```

`PROVIDER_API_KEY`를 사용 중인 공급자의 변수(예: `OPENROUTER_API_KEY`, `OPENAI_API_KEY`, `ANTHROPIC_API_KEY`, `XIA_API_KEY`, ...)로 교체하고 값을 설정하세요. 전체 목록은 [구성](/docs/configuration/#environment-variables-web--docker)을 참조하세요.

그 다음 [http://localhost:5000](http://localhost:5000)을 열고, 서비스를 노출하기 전에 **기본 관리자 비밀번호를 변경**하세요.

:::tip
Docker에서 LLM 자격 증명은 환경 변수(예: `PROVIDER_API_KEY`)로 설정됩니다. 웹 UI에 입력하지 **않습니다**. 데스크톱에서는 **Settings → API Config**에서 키를 구성합니다.
:::

### Docker Compose

```bash
wget https://github.com/wsj-br/transrewrt/raw/refs/heads/master/production.yml -O transrewrt.yml
# Edit the file to add your API keys, or use a `.env` file. Set TZ if needed.
docker compose -f transrewrt.yml up -d
```

## Windows

1. [릴리스](https://github.com/wsj-br/transrewrt/releases)에서 최신 `Transrewrt Setup x.y.z.exe`을 다운로드하세요.
2. 설치 프로그램을 실행하세요.
3. 앱을 열고 **설정 → API 구성**에서 API 키를 입력하세요. 최소 한 개의 제공자를 구성해야 합니다. OpenRouter는 무료 모델을 위한 일반적인 선택입니다.

:::note
앱을 설치할 때 Windows에서 UAC 또는 SmartScreen 경고가 표시될 수 있습니다. 공식 GitHub Releases 페이지에서 다운로드한 경우 안전하게 설치할 수 있습니다. 설치하려면 "추가 정보"와 "그래도 실행"을 클릭하세요.
:::

## Linux

[릴리스](https://github.com/wsj-br/transrewrt/releases)에서 CPU에 맞는 `.AppImage`을 다운로드하세요(`x64` 또는 `arm64`, Raspberry Pi 4+ 포함):

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

**설정 → API 구성**에서 API 키를 입력하세요.

Chromium이 GPU / EGL 오류를 출력하지만 앱이 정상 작동한다면, 하드웨어 가속을 비활성화할 수 있습니다:

```bash
TRANSREWRT_DISABLE_GPU=1 ./Transrewrt-x.y.z-arm64.AppImage
```

:::note
현재 macOS는 지원되지 않습니다. Transrewrt는 Windows, Linux, Docker에서 사용할 수 있습니다.
:::

## 업데이트

- **Windows** — [릴리스](https://github.com/wsj-br/transrewrt/releases)에서 최신 `Transrewrt Setup x.y.z.exe`을 다운로드하여 실행하세요. 설정과 데이터는 유지됩니다.
- **Linux** — 최신 `.AppImage`을 다운로드하고 기존 파일을 교체하세요. 설정과 데이터는 유지됩니다.
- **Docker** — 새 이미지를 풀하고 컨테이너를 재생성하세요. 데이터는 `/app/data` 볼륨에 유지됩니다:

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest
docker stop transrewrt && docker rm transrewrt
# then run the same `docker run` command as above
# or, with Docker Compose:
docker compose -f transrewrt.yml pull && docker compose -f transrewrt.yml up -d
```

## 다음 단계

1. [API 키 받기](/docs/api-key/)
2. 간단한 번역을 실행하여 모든 것이 정상 작동하는지 확인하세요
3. [번역](/docs/translate/), [재작성](/docs/rewrite/), [변환](/docs/transform/) 가이드를 읽어보세요
