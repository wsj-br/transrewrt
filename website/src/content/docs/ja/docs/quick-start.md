---
title: クイックスタート
description: WindowsまたはLinuxにTransrewrtをインストールするか、セルフホスト型のDocker Webアプリを実行します。
---



ご自身に合った方法を選んでください。いずれも無料でオープンソース（Apache 2.0）です。

## Docker（セルフホスト型Web）

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest

docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e PROVIDER_API_KEY=your-api-key \
  --name transrewrt \
  ghcr.io/wsj-br/transrewrt:latest
```

`PROVIDER_API_KEY` をプロバイダーの変数（例えば `OPENROUTER_API_KEY`、`OPENAI_API_KEY`、`ANTHROPIC_API_KEY`、`XIA_API_KEY`、...）に置き換え、その値を設定します。完全なリストは[設定](/docs/configuration/#environment-variables-web--docker)を参照してください。

次に、[http://localhost:5000](http://localhost:5000)を開き、サービスを公開する前に**デフォルトの管理者パスワードを変更**してください。

:::tip
Dockerでは、LLMの認証情報は環境変数（例えば `PROVIDER_API_KEY`）で設定します。これらはWeb UIには入力し**ません**。デスクトップ版では、**Settings → API Config**でキーを設定します。
:::

### Docker Compose

```bash
wget https://github.com/wsj-br/transrewrt/raw/refs/heads/master/production.yml -O transrewrt.yml
# Edit the file to add your API keys, or use a `.env` file. Set TZ if needed.
docker compose -f transrewrt.yml up -d
```

## Windows

1. [Releases](https://github.com/wsj-br/transrewrt/releases)から最新の`Transrewrt Setup x.y.z.exe`をダウンロードします。
2. インストーラーを実行します。
3. アプリを開き、**Settings → API Config**でAPIキーを入力します。少なくとも1つのプロバイダーを設定してください。OpenRouterは無料モデルの一般的な選択肢です。

:::note
アプリのインストール時に、WindowsでUACまたはSmartScreenの警告が表示されることがあります。公式のGitHub Releasesページからダウンロードしたものであれば、安全にインストールできます。インストールするには、「詳細情報」をクリックし、「そのまま実行」を選択してください。
:::

## Linux

[Releases](https://github.com/wsj-br/transrewrt/releases)から、お使いのCPUに合った`.AppImage`をダウンロードしてください（`x64`または`arm64`、Raspberry Pi 4+を含む）:

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

**Settings → API Config**でAPIキーを入力します。

ChromiumがGPU / EGLエラーを出力してもアプリが動作する場合は、ハードウェアアクセラレーションを無効にできます:

```bash
TRANSREWRT_DISABLE_GPU=1 ./Transrewrt-x.y.z-arm64.AppImage
```

:::note
現在、macOSはサポートされていません。TransrewrtはWindows、Linux、およびDockerで利用できます。
:::

## アップデート

- **Windows** — [Releases](https://github.com/wsj-br/transrewrt/releases)から新しい`Transrewrt Setup x.y.z.exe`をダウンロードして実行します。設定とデータは保持されます。
- **Linux** — 新しい`.AppImage`をダウンロードし、古いファイルを置き換えます。設定とデータは保持されます。
- **Docker** — 新しいイメージをプルし、コンテナを再作成します。データは`/app/data`ボリュームに保持されます:

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest
docker stop transrewrt && docker rm transrewrt
# then run the same `docker run` command as above
# or, with Docker Compose:
docker compose -f transrewrt.yml pull && docker compose -f transrewrt.yml up -d
```

## 次のステップ

1. [APIキーを取得する](/docs/api-key/)
2. 簡単な翻訳を実行して、すべてが機能することを確認します
3. [翻訳](/docs/translate/)、[リライト](/docs/rewrite/)、[変換](/docs/transform/)のガイドを読む
