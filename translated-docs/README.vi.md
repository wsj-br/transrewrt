---
translated_at: "2026-03-27T23:17:04.902Z"
source_hash: "076eff841a5f0e4f5c43a00dd28f2702bd2dde0602a830890285b5ffdc38ad5a"
source_mtime: "2026-03-27T20:34:13.877Z"
model: "qwen/qwen3-235b-a22b-2507"
---
<p align="center">
  <img src="../images/transrewrt_logo.svg" alt="Biểu trưng Transrewrt" width="120" />
</p>

<h1 align="center">Transrewrt</h1>

<p align="center">
  <a href="https://github.com/wsj-br/transrewrt/releases"><img src="https://img.shields.io/badge/version-1.0.15-blue" alt="Phiên bản"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-Apache%202.0-green" alt="Giấy phép: Apache 2.0"></a>
  <img src="https://img.shields.io/badge/platform-Windows%20%7C%20Linux%20%7C%20Docker-lightgrey" alt="Nền tảng">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react" alt="React 19">
  <img src="https://img.shields.io/badge/Electron-41-47848F?logo=electron" alt="Electron 41">
</p>

Công cụ xử lý văn bản tích hợp AI: dịch qua nhiều ngôn ngữ, viết lại theo nhiều phong cách khác nhau, và biến đổi với các gợi ý tùy chỉnh — sử dụng nhiều nhà cung cấp AI (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI và Ollama cục bộ). Chạy dưới dạng ứng dụng máy tính để bàn (Electron) hoặc ứng dụng web tự lưu trữ (Docker).

- **Dịch** — giữa hàng chục ngôn ngữ, tự động phát hiện ngôn ngữ nguồn
- **Viết lại** — sửa lỗi ngữ pháp, cải thiện độ rõ ràng, trang trọng/thân mật, rút gọn, mở rộng, chuyên môn hóa
- **Biến đổi** — gợi ý AI tùy chỉnh; tạo và quản lý các mẫu gợi ý, có thể chọn ngôn ngữ đích riêng cho từng mẫu
- **Lịch sử** — lịch sử thao tác đầy đủ với văn bản đầu vào/đầu ra, lọc và xuất dữ liệu
- **Mô hình & chi phí** — chọn mô hình từ bất kỳ nhà cung cấp nào đã cấu hình; bảng điều khiển theo dõi chi phí và mức sử dụng, có nhật ký, thống kê theo mô hình/thao tác/ngày
- **Giao diện người dùng** — giao diện đa ngôn ngữ (trên 30 ngôn ngữ, hỗ trợ RTL), phông chữ, ...
- **Chế độ web** — hỗ trợ nhiều người dùng với các vai trò quản trị viên
- **Bản máy tính để bàn** — ứng dụng Electron cho Windows và Linux
- **Tự lưu trữ** — hình ảnh Docker cho amd64 & arm64 (sẵn sàng dùng trên Raspberry Pi)

Sau khi cài đặt, hãy tham khảo **[Hướng dẫn người dùng](USER-GUIDE.vi.md)** để tìm hiểu chi tiết tất cả các tính năng.

<small>**Đọc bằng các ngôn ngữ khác:** </small>
<small id="lang-list"> [English (UK)](../README.md) · [Português (BR)](README.pt-BR.md) · [العربية](README.ar.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [Hrvatski](README.hr.md) · [Čeština](README.cs.md) · [Nederlands](README.nl.md) · [English (US)](README.en-US.md) · [Filipino](README.tl.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [हिन्दी](README.hi.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [Basa Jawa](README.jv.md) · [한국어](README.ko.md) · [Bahasa Melayu](README.ms.md) · [فارسی](README.fa.md) · [Polski](README.pl.md) · [Português (PT)](README.pt.md) · [ਪੰਜਾਬੀ](README.pa.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [Slovenčina](README.sk.md) · [Español](README.es.md) · [Kiswahili](README.sw.md) · [Svenska](README.sv.md) · [తెలుగు](README.te.md) · [ภาษาไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Tiếng Việt](README.vi.md)</small>

<small>

> **Lưu ý về bản dịch giao diện và tài liệu hướng dẫn:** Tất cả các ngôn ngữ giao diện, ngoại trừ tiếng Anh (UK) gốc,  
> đều được dịch bằng các mô hình AI; cách diễn đạt có thể chưa chính xác hoặc chứa lỗi.

</small>

<br/>

<a id="screenshots"></a>

## Màn hình chụp

**Trình chọn ngôn ngữ**

![Trình chọn ngôn ngữ](../images/screenshots/vi/language-selector.png)

**Dịch**

![Dịch](../images/screenshots/vi/translate.png)

**Chuyển đổi - trình soạn thảo nhắc nhở**

![Chuyển đổi - trình soạn thảo nhắc nhở](../images/screenshots/vi/transform-prompt-edit.png)

**Bảng điều khiển**

![Bảng điều khiển chi phí](../images/screenshots/vi/dashboard-summary.png)

**Lịch sử**

![Lịch sử](../images/screenshots/vi/history.png)

**Cài đặt - chọn mô hình**

![Cài đặt - chọn mô hình](../images/screenshots/vi/settings-models.png)

<br/><br/>

<a id="table-of-contents"></a>
## Mục lục

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Bắt đầu nhanh](#quick-start)
- [Cài đặt](#installation)
  - [Windows (Electron)](#windows-electron)
  - [Linux (Electron)](#linux-electron)
  - [Docker](#docker)
- [Lấy khóa API OpenRouter](#getting-an-openrouter-api-key)
- [Cấu hình và môi trường](#configuration-and-environment)
- [Phát triển và kiến trúc](#development-and-architecture)
- [Các bản phát hành và thẻ](#releases-and-tags)
- [Đóng góp](#contributing)
- [Tuyên bố miễn trừ trách nhiệm](#disclaimer)
- [Giấy phép](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="quick-start"></a>

## Bắt đầu nhanh

**Docker (khuyên dùng nếu tự lưu trữ)**

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest

OPENROUTER_API_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_API_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

Thay `sk-or-your-key` bằng khóa API [OpenRouter](https://openrouter.ai/keys) của bạn (hoặc đặt khóa nhà cung cấp khác; xem [Cấu hình](#configuration-and-environment)). Mở [http://localhost:5000](http://localhost:5000) và thay đổi mật khẩu quản trị mặc định trước khi công khai dịch vụ.

<br/>

> ℹ️ **LƯU Ý**<br/>
> Trong Docker, thông tin đăng nhập LLM được thiết lập qua các biến môi trường như `OPENROUTER_API_KEY`, `OPENAI_API_KEY`, `CEREBRAS_API_KEY`, … (không phải trên giao diện web). Trên máy tính để bàn (Electron), bạn cấu hình khóa trong **Cài đặt → API**.

<br/>

**Windows**

Tải về tệp `Transrewrt Setup x.y.z.exe` mới nhất từ [Phát hành](https://github.com/wsj-br/transrewrt/releases), chạy trình cài đặt, sau đó khởi động từ menu Start hoặc lối tắt trên màn hình. Nhập khóa API của bạn vào **Cài đặt → API**. Bạn cần cấu hình ít nhất một nhà cung cấp, OpenRouter là lựa chọn phổ biến cho các mô hình miễn phí.

<br/>

**Linux**

Tải về tệp `.AppImage` phù hợp với bộ vi xử lý của bạn từ [Phát hành](https://github.com/wsj-br/transrewrt/releases) (`x64` cho PC thông thường, `arm64` cho nhiều thiết bị ARM, bao gồm Raspberry Pi 4+), sau đó thực hiện:

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

Nhập khóa API của bạn trong **Cài đặt → API**. Bạn cần cấu hình ít nhất một nhà cung cấp, OpenRouter là lựa chọn phổ biến cho các mô hình miễn phí.

Trên Debian/Ubuntu, bạn có thể cần cài đặt thêm các gói phụ thuộc:

```bash
sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth
```

Xem phần [Cài đặt → Linux](#linux-electron) để biết chi tiết.

<br/>

> ℹ️ **LƯU Ý**<br/>
> Hiện tại chưa hỗ trợ macOS. Transrewrt dành cho Windows, Linux và Docker.

<br/>

Khi ứng dụng đã chạy, tham khảo **[Hướng dẫn người dùng](USER-GUIDE.vi.md)** để tìm hiểu cách dịch, viết lại và biến đổi văn bản, quản lý lời nhắc (prompt), cũng như cấu hình mô hình.

<br/><br/>

<a id="installation"></a>

## Cài đặt

<a id="windows-electron"></a>
### Windows (Electron)

- Tải xuống trình cài đặt mới nhất từ [Releases](https://github.com/wsj-br/transrewrt/releases).
- Chạy tập tin `.exe` và làm theo hướng dẫn cài đặt.
- Lần chạy đầu tiên: khởi động ứng dụng từ menu Start hoặc biểu tượng lối tắt trên màn hình desktop.

<br/>

<a id="linux-electron"></a>
### Linux (Electron)

- Tải xuống tập tin `.AppImage` phù hợp (`x64` hoặc `arm64`) từ [Releases](https://github.com/wsj-br/transrewrt/releases).
- Thực thi: `chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage` trên x86_64/amd64, hoặc sử dụng tên tệp `...-arm64.AppImage` trên nền tảng ARM64.
- Các phụ thuộc bổ sung (Debian/Ubuntu): `sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth`
- Xem thêm tại [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md).

<br/>

<a id="docker"></a>
### Docker

- Kéo hình ảnh: `docker pull ghcr.io/wsj-br/transrewrt:latest`
- Thiết lập ít nhất một khóa nhà cung cấp thông qua biến môi trường (ví dụ: `OPENROUTER_API_KEY` cho OpenRouter). Truyền các biến bằng `-e` hoặc dùng `docker compose` / `.env` để đảm bảo các khóa bí mật không bị nhúng vào hình ảnh.
- Các khóa nhà cung cấp **không** được nhập qua giao diện web; máy chủ sẽ đọc chúng từ môi trường.

Ví dụ - sử dụng volume có tên để lưu trữ dữ liệu (khóa OpenRouter qua biến môi trường):

```bash
OPENROUTER_API_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_API_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

hoặc nếu bạn thích dùng Docker Compose, hãy sử dụng:

# tải tệp compose
wget https://github.com/wsj-br/transrewrt/raw/refs/heads/master/production.yml -O transrewrt.yml
# chỉnh sửa tệp để thêm API_KEYS
vi transrewrt.yml
# khởi động container
docker compose -f transrewrt.yml up -d
```

<br/>

| Tùy chọn | Mô tả                                                                                                                            |
|----------|----------------------------------------------------------------------------------------------------------------------------------------|
| Cổng     | `5000` (ánh xạ bằng `-p 5000:5000`)                                                                                                       |
| Volume   | Gắn kết `/app/data` để lưu cấu hình và cơ sở dữ liệu bền vững                                                                                  |
| Biến môi trường | `PORT`, `CONFIG_PATH`, và các khóa LLM (`OPENROUTER_API_KEY`, `OPENAI_API_KEY`, …) - xem [Cấu hình](#configuration-and-environment) |

Để xây dựng và chạy từ mã nguồn: `docker compose up --build -d` hoặc `pnpm docker:up` - xem [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md).

<br/><br/>

<a id="getting-an-openrouter-api-key"></a>

## Lấy khóa API OpenRouter

Transrewrt hỗ trợ nhiều nhà cung cấp AI. [OpenRouter](https://openrouter.ai) là lựa chọn phổ biến vì nó tổng hợp nhiều mô hình vào một khóa duy nhất và cung cấp các mô hình miễn phí.

1. Đăng ký hoặc đăng nhập tại [openrouter.ai](https://openrouter.ai).
2. Mở trang [Keys](https://openrouter.ai/keys) và tạo khóa mới (đặt tên, và tùy chọn đặt giới hạn tín dụng). Bạn có thể dùng các mô hình miễn phí mà không cần thêm tín dụng.
3. **Phiên bản máy tính (Electron):** dán khóa vào mục **Settings → API**. **Docker:** thiết lập các biến môi trường như `OPENROUTER_API_KEY` (xem [Bắt đầu nhanh](#quick-start)).

Không nên dùng mô hình **Body Builder** của OpenRouter ([`openrouter/bodybuilder`](https://openrouter.ai/openrouter/bodybuilder)) cho các tác vụ dịch, viết lại hoặc biến đổi: mô hình này trả về dữ liệu JSON yêu cầu chứ không trả về văn bản hoàn chỉnh cho các tác vụ đó. Xem [Settings → Models](USER-GUIDE.vi.md#models) trong phần Hướng dẫn người dùng để biết thêm chi tiết.

Bạn cũng có thể sử dụng các nhà cung cấp khác (OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras) hoặc chạy mô hình cục bộ với [Ollama](https://ollama.com). Xem phần [Cấu hình](#configuration-and-environment) để biết danh sách đầy đủ các nhà cung cấp được hỗ trợ và các biến môi trường.

> ⚠️ **CẢNH BÁO**<br/>
> Nếu bạn sử dụng Ollama từ thiết bị, container hoặc dịch vụ khác, hãy nhớ cấu hình Ollama cho phép kết nối từ bên ngoài (không chỉ giới hạn localhost).


Để biết thêm thông tin về giới hạn, BYOK và các chi tiết khác, xem [OpenRouter authentication](https://openrouter.ai/docs/api/reference/authentication).

<br/><br/>

<a id="configuration-and-environment"></a>

## Cấu hình và môi trường

**Vị trí file cấu hình**

| Triển khai         | Vị trí cấu hình                                   |
| ------------------ | ------------------------------------------------- |
| Electron (Windows) | `%APPDATA%\transrewrt\`                           |
| Electron (Linux)   | `~/.config/transrewrt/`                           |
| Web / Docker       | `/app/data/config.json` (sử dụng volume để lưu trữ) |

<br/>

**Biến môi trường** (chỉ dành cho web/Docker; Electron sử dụng file cấu hình cục bộ)

| Biến               | Mặc định                | Mô tả |
| ------------------ | ----------------------- | ----- |
| `PORT`             | `5000`                  | Cổng lắng nghe của máy chủ |
| `CONFIG_PATH`      | `/app/data/config.json` | Đường dẫn đến file cấu hình |
| `OPENROUTER_API_KEY` | *(trống)*               | Khóa API OpenRouter |
| `OPENAI_API_KEY`     | *(trống)*               | Khóa API OpenAI |
| `CEREBRAS_API_KEY`   | *(trống)*               | Khóa API Cerebras |
| `ANTHROPIC_API_KEY`  | *(trống)*               | Khóa API Anthropic |
| `GOOGLE_API_KEY`     | *(trống)*               | Khóa API Google Gemini |
| `DEEPSEEK_API_KEY`   | *(trống)*               | Khóa API DeepSeek |
| `GROQ_API_KEY`       | *(trống)*               | Khóa API Groq |
| `MISTRAL_API_KEY`    | *(trống)*               | Khóa API Mistral |
| `OLLAMA_URL`         | *(trống)*               | URL gốc Ollama (ví dụ: `http://host.docker.internal:11434`) |
| `XAI_API_KEY`        | *(trống)*               | Khóa API xAI |

Chỉ cấu hình những nhà cung cấp bạn sử dụng. Các mã model có không gian tên (`openrouter/…`, `openai/…`, `cerebras/…`, `ollama/…`, v.v.).

**Hiển thị chi phí:** OpenRouter trả về chi phí chính xác khi áp dụng. Các nhà cung cấp khác sử dụng **chi phí ước tính** từ bảng giá công khai của OpenRouter nếu có sẵn khóa OpenRouter; nếu không, chi phí từ nhà cung cấp không phải OpenRouter có thể hiển thị là `0`. Các ước tính không phải là hóa đơn.

<br/>

**Dữ liệu và lưu trữ:** Với Docker, hãy gắn một volume vào `/app/data` để file `config.json` và cơ sở dữ liệu SQLite được lưu trữ sau mỗi lần khởi động lại container. Nếu không có volume, mọi dữ liệu sẽ bị mất khi container dừng hoạt động.

**Lập trình viên:** Sau khi cập nhật các thay đổi thay thế cấu hình khóa đơn cũ, hãy đặt lại hoặc gộp `data/config.json` với cấu trúc mặc định mới từ `src/config-defaults/config_default.json` nếu file cục bộ của bạn vẫn sử dụng các trường đã bị xóa (`api_key`, `api_url`, tùy chọn proxy).

<br/>

**Xác thực web:**

- Người quản trị mặc định: `admin` / `transrewrt26`.
- Quản lý người dùng tại **Settings → Users**.
- Đặt lại mật khẩu: `docker exec <container> reset-web-password '<tên-người-dùng>' '<mật-khẩu-mới>'`
  (từ mã nguồn: `pnpm run reset-web-password -- <tên-người-dùng> <mật-khẩu-mới>`)

<br/>

> ⚠️ **CẢNH BÁO**<br/>
> Hãy thay đổi mật khẩu người quản trị mặc định ngay lập tức trên mọi máy chủ có thể truy cập qua mạng.

<br/>

Các cài đặt chính (phông chữ, mô hình, ngôn ngữ, v.v.) có thể được cấu hình trong mục Cài đặt (Settings) của ứng dụng.

<br/><br/>

<a id="development-and-architecture"></a>

## Phát triển và kiến trúc

- **Phát triển:** Thiết lập, build, kiểm thử và triển khai (Electron, Web, Docker) - xem **[dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)**.
- **Kiến trúc và tổng quan hệ thống:** Cấu trúc thư mục, stack công nghệ, các quyết định thiết kế - xem **[dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)**.

<br/><br/>

<a id="releases-and-tags"></a>
## Phát hành và thẻ (tags)

- Các **thẻ Git** bắt đầu bằng `v` (ví dụ: `v1.0.10`) sẽ kích hoạt [workflow phát hành](.github/workflows/release.yml). **Các bản phát hành trên GitHub** bao gồm trình cài đặt cho Windows (`.exe`) và các AppImage cho Linux (**x64** và **arm64**).
- **Các hình ảnh Docker** được đăng lên `ghcr.io/wsj-br/transrewrt`. Các thẻ hình ảnh tương ứng với phiên bản Git (ví dụ: `v1.0.10` → `ghcr.io/wsj-br/transrewrt:1.0.10`) và thêm phiên bản `latest`. Hỗ trợ đa nền tảng: `linux/amd64` và `linux/arm64` (ví dụ: Raspberry Pi).

<br/><br/>

<a id="contributing"></a>
## Đóng góp

1. Sao chép repository.
2. Tạo nhánh tính năng: `git checkout -b feature/my-feature`
3. Commit các thay đổi với thông điệp rõ ràng.
4. Đẩy lên và tạo Pull Request vào nhánh `main`.

Vui lòng tuân thủ phong cách mã hiện tại và kiểm thử thay đổi của bạn ở cả chế độ Electron lẫn chế độ web trước khi gửi. Xem [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) để biết hướng dẫn build và kiểm thử.

<br/>

**Báo cáo lỗi:** Hãy mở một issue trên [GitHub](https://github.com/wsj-br/transrewrt/issues). Vui lòng cung cấp hệ điều hành của bạn (Windows / Linux / Docker) và phiên bản ứng dụng (có trong hộp thoại Giới thiệu hoặc trang Releases).

<br/><br/>

<a id="disclaimer"></a>

## Từ chối trách nhiệm

Tên sản phẩm và biểu tượng thuộc về chủ sở hữu tương ứng của chúng và chỉ được sử dụng nhằm mục đích nhận dạng. Phần mềm này không có liên kết hay được bảo trợ bởi bất kỳ thương hiệu nào được đề cập ở đây.

<br/><br/>

<a id="license"></a>
## Giấy phép

Bản quyền © 2026 Waldemar Scudeller Jr.

[Giấy phép Apache 2.0](LICENSE)