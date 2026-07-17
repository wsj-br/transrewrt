---
title: クイックスタート
description: Windows または Linux に Transrewrt をインストールするか、セルフホスト型の Docker Web アプリを実行します。
translation_last_updated: '2026-07-17T21:14:46.150Z'
source_file_mtime: '2026-07-17T14:55:54.211Z'
source_file_hash: 6eb0ab579b445d9c4d39567ef44ee3333f57285c5c2b8dd072de6355182f849f
translation_language: ja
source_file_path: src/content/docs/docs/quick-start.md
translation_models:
  - z-ai/glm-5.2
---



ご自身に合った方法をお選びください。いずれも無料でオープンソース (Apache 2.0) です。

## Docker (セルフホスト Web)

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest

PROVIDER_API_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e PROVIDER_API_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

`PROVIDER_API_KEY=sk-or-your-key`を選択したプロバイダーのAPIキーに置き換えてください（サポートされているオプションについては[設定](/docs/configuration/)を参照してください）。

その後、[http://localhost:5000](http://localhost:5000) を開き、サービスを公開する前に **デフォルトの管理者パスワードを変更**してください。

:::caution
Dockerでは、LLMの認証情報は環境変数（例えば `PROVIDER_API_KEY`）で設定されます。これらはWeb UIには入力**されません**。デスクトップ版では、**設定 → API**でキーを設定します。
:::

### Docker Compose

```bash
wget https://github.com/wsj-br/transrewrt/raw/refs/heads/master/production.yml -O transrewrt.yml
# Edit the file to add your API keys, or use a `.env` file. Set TZ if needed.
docker compose -f transrewrt.yml up -d
```

## Windows

1. [Releases](https://github.com/wsj-br/transrewrt/releases) から最新の `Transrewrt Setup x.y.z.exe` をダウンロードします。
2. インストーラーを実行します。
3. アプリを開き、**設定 → API** で API キーを入力します。少なくとも 1 つのプロバイダーを構成してください。OpenRouter は無料モデルの一般的な選択肢です。

:::note
署名されていないインディーアプリの場合、Windows で UAC または SmartScreen の警告が表示されることがあります。公式の GitHub Releases ページからのダウンロードを推奨し、公開されている場合はチェックサムを検証してください。
:::

## Linux

[Releases](https://github.com/wsj-br/transrewrt/releases) からお使いの CPU に合った `.AppImage` をダウンロードします (`x64` または `arm64`、Raspberry Pi 4+ を含む):

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

**設定 → API** で API キーを入力します。

Chromium が GPU / EGL エラーを出力してもアプリが動作する場合は、ハードウェア アクセラレーションを無効にできます:

```bash
TRANSREWRT_DISABLE_GPU=1 ./Transrewrt-x.y.z-arm64.AppImage
```

:::note
現在 macOS はサポートされていません。Transrewrt は Windows、Linux、Docker で利用できます。
:::

## 次のステップ

1. [APIキーを取得する](/docs/api-key/)
2. 簡単な翻訳を実行して、すべてが正常に動作することを確認する
3. [翻訳](/docs/translate/)、[リライト](/docs/rewrite/)、[変換](/docs/transform/) の各ガイドを読む
