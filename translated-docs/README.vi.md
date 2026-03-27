---
translated_at: "2026-03-26T01:19:26.475Z"
source_hash: "d5d19d18eadc9060d8db2f32f47dc8174ee783feea992030f3c686debc714a88"
source_mtime: 1774482559451.2136
model: "stepfun/step-3.5-flash:free"
---
<p align="center">
  <img src="../images/transrewrt_logo.svg" alt="Transrewrt logo" width="120" />
</p>

<h1 align="center">Transrewrt</h1>

<p align="center">
  <a href="https://github.com/wsj-br/transrewrt/releases"><img src="https://img.shields.io/badge/version-1.0.15-blue" alt="Version"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-Apache%202.0-green" alt="License: Apache 2.0"></a>
  <img src="https://img.shields.io/badge/platform-Windows%20%7C%20Linux%20%7C%20Docker-lightgrey" alt="Platform">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react" alt="React 19">
  <img src="https://img.shields.io/badge/Electron-41-47848F?logo=electron" alt="Electron 41">
</p>

Công cụ văn bản hỗ trợ AI: dịch giữa các ngôn ngữ, viết lại với các phong cách khác nhau và biến đổi với các lời nhPrompt tùy chỉnh — sử dụng nhiều nhà cung cấp AI (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI và Ollama cục bộ). Chạy dưới dạng ứng dụng desktop (Electron) hoặc ứng dụng web tự host (Docker).

- **Dịch** — giữa hàng chục ngôn ngữ, với tự động phát hiện ngôn ngữ nguồn
- **Viết lại** — sửa ngữ pháp, cải thiện rõ ràng, trang trọng/casual, rút gọn, mở rộng, kỹ thuật
- **Biến đổi** — lời nhPrompt AI tùy chỉnh; tạo và quản lý các prompt, ngôn ngữ đích tùy chọn cho mỗi prompt
- **Lịch sử** — toàn bộ lịch sử thực thi với văn bản đầu vào/đầu ra, lọc và xuất
- **Mô hình & chi phí** — chọn mô hình từ bất kỳ nhà cung cấp nào đã cấu hình; bảng điều khiển chi phí và sử dụng với nhật ký, tóm tắt theo mô hình/hoạt động/ngày
- **Giao diện** — đa ngôn ngữ (30+ ngôn ngữ, hỗ trợ RTL), font chữ, ...
- **Chế độ web** — hỗ trợ đa người dùng với vai trò quản trị viên
- **Desktop** — ứng dụng Electron cho Windows và Linux
- **Tự host** — hình ảnh Docker cho amd64 & arm64 (tương thích Raspberry Pi)

Sau khi cài đặt, xem **[Hướng dẫn người dùng](USER-GUIDE.vi.md)** để biết hướng dẫn chi tiết về tất cả các tính năng.

<small>**Đọc bằng các ngôn ngữ khác:** </small>
<small id="lang-list"> [English (UK)](../README.md) · [Português (BR)](README.pt-BR.md) · [العربية](README.ar.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [Hrvatski](README.hr.md) · [Čeština](README.cs.md) · [Nederlands](README.nl.md) · [English (US)](README.en-US.md) · [Filipino](README.tl.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [हिन्दी](README.hi.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [Basa Jawa](README.jv.md) · [한국어](README.ko.md) · [Bahasa Melayu](README.ms.md) · [فارسی](README.fa.md) · [Polski](README.pl.md) · [Português (PT)](README.pt.md) · [ਪੰਜਾਬੀ](README.pa.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [Slovenčina](README.sk.md) · [Español](README.es.md) · [Kiswahili](README.sw.md) · [Svenska](README.sv.md) · [తెలుగు](README.te.md) · [ภาษาไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Tiếng Việt](README.vi.md)</small>

<small>

> **Ghi chú về bản dịch giao diện và tài liệu:** Tất cả các ngôn ngữ giao diện ngoại trừ tiếng Anh (UK) gốc
> đã được dịch bằng các mô hình AI; cách diễn đạt có thể không chính xác hoặc chứa lỗi.

</small>

<br/>

<a id="screenshots"></a>
## Ảnh chụp màn hình

**Bộ chọn ngôn ngữ**

![Bộ chọn ngôn ngữ](../images/screenshots/vi/language-selector.png)

**Dịch**

![Dịch](../images/screenshots/vi/translate.png)

**Biến đổi - trình chỉnh sửa prompt**

![Biến đổi - trình chỉnh sửa prompt](../images/screenshots/vi/transform-prompt-edit.png)

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
- [Bản phát hành và thẻ](#releases-and-tags)
- [Đóng góp](#contributing)
- [Tuyên bố miễn trừ trách nhiệm](#disclaimer)
- [Giấy phép](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="quick-start"></a>
## Bắt đầu nhanh

**Docker (khuyến nghị để tự host)**

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest

OPENROUTER_API_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_API_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

Thay `sk-or-your-key` bằng [khóa API OpenRouter](https://openrouter.ai/keys) của bạn (hoặc đặt khóa nhà cung cấp khác; xem [Cấu hình](#configuration-and-environment)). Mở [http://localhost:5000](http://localhost:5000) và đổi mật khẩu admin mặc định trước khi công khai dịch vụ.

<br/>

> ℹ️ **LƯU Ý**<br/>
> Trong Docker, thông tin xác thực LLM được đặt bằng biến môi trường như `OPENROUTER_API_KEY`, `OPENAI_API_KEY`, `CEREBRAS_API_KEY`, … (không trong giao diện web). Trên máy tính để bàn (Electron), bạn cấu hình khóa trong **Cài đặt → API**.

<br/>

**Windows**

Tải xuống `Transrewrt Setup x.y.z.exe` mới nhất từ [Bản phát hành](https://github.com/wsj-br/transrewrt/releases), chạy trình cài đặt, sau đó khởi động từmenu Start hoặc lối tắt Desktop. Nhập khóa API của bạn trong **Cài đặt → API**. Bạn cần cấu hình ít nhất một nhà cung cấp, OpenRouter thường dùng cho các mô hình miễn phí.

<br/>

**Linux**

Tải xuống `.AppImage` cho CPU của bạn từ [Bản phát hành](https://github.com/wsj-br/transrewrt/releases) (`x64` cho PC thông thường, `arm64` cho nhiều thiết bị ARM, bao gồm Raspberry Pi 4+), sau đó:

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

Nhập khóa API của bạn trong **Cài đặt → API**. Bạn cần cấu hình ít nhất một nhà cung cấp, OpenRouter thường dùng cho các mô hình miễn phí.

Trên Debian/Ubuntu, bạn có thể cần cài đặt các phụ thuộc bổ sung trước:

```bash
sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth
```

Xem [Cài đặt → Linux](#linux-electron) để biết chi tiết.

<br/>

> ℹ️ **LƯU Ý**<br/>
> Hiện tại không hỗ trợ macOS. Transrewrt có sẵn cho Windows, Linux và Docker.

<br/>

Một khi ứng dụng đang chạy, xem **[Hướng dẫn người dùng](USER-GUIDE.vi.md)** để học cách dịch, viết lại và biến đổi văn bản, quản lý lời nhắc và cấu hình mô hình.

<br/><br/>

<a id="installation"></a>
## Cài đặt

<a id="windows-electron"></a>
### Windows (Electron)

- Tải xuống trình cài đặt mới nhất từ [Bản phát hành](https://github.com/wsj-br/transrewrt/releases).
- Chạy file `.exe` và làm theo trình cài đặt.
- Lần chạy đầu tiên: khởi động ứng dụng từ menu Start hoặc lối tắt Desktop.

<br/>

<a id="linux-electron"></a>
### Linux (Electron)

- Tải xuống `.AppImage` phù hợp (`x64` hoặc `arm64`) từ [Bản phát hành](https://github.com/wsj-br/transrewrt/releases).
- Chạy: `chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage` trên x86_64/amd64, hoặc dùng tên file `...-arm64.AppImage` trên ARM64.
- Phụ thuộc bổ sung (Debian/Ubuntu): `sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth`
- Xem [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) để biết thêm.

<br/>

<a id="docker"></a>
### Docker

- Kéo: `docker pull ghcr.io/wsj-br/transrewrt:latest`
- Đặt ít nhất một khóa nhà cung cấp qua môi trường (ví dụ `OPENROUTER_API_KEY` cho OpenRouter). Truyền biến với `-e` hoặc `docker compose` / `.env` để bí mật không được đóng gói vào image.
- Khóa nhà cung cấp **không** được nhập trong giao diện web; máy chủ đọc chúng từ môi trường.

Ví dụ - volume đặt tên để lưu trữ (khóa OpenRouter qua env):

```bash
OPENROUTER_API_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_API_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

<br/>

| Tùy chọn   | Mô tả                                                                                                   |
| ---------- | ------------------------------------------------------------------------------------------------------- |
| Cổng       | `5000` (ánh xạ với `-p 5000:5000`)                                                                      |
| Volume     | Gắn `/app/data` để cấu hình và cơ sở dữ liệu lưu trữ                                                  |
| Biến env   | `PORT`, `CONFIG_PATH`, cùng khóa LLM (`OPENROUTER_API_KEY`, `OPENAI_API_KEY`, …) - xem [Cấu hình](#configuration-and-environment) |

Để build và chạy từ mã nguồn: `docker compose up --build -d` hoặc `pnpm docker:up` - xem [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md).

<br/><br/>

<a id="getting-an-openrouter-api-key"></a>

## Lấy khóa API OpenRouter

Transrewrt hỗ trợ nhiều nhà cung cấp AI. [OpenRouter](https://openrouter.ai) là lựa chọn phổ biến vì nó gộp nhiều mô hình dưới một khóa và cung cấp các mô hình miễn phí.

1. Đăng ký hoặc đăng nhập tại [openrouter.ai](https://openrouter.ai).
2. Mở trang [Keys](https://openrouter.ai/keys) và tạo một khóa mới (đặt tên, và tùy chọn đặt giới hạn tín dụng). Bạn có thể sử dụng các mô hình miễn phí mà không cần thêm tín dụng.
3. **Desktop (Electron):** dán khóa trong **Cài đặt → API**. **Docker:** đặt biến môi trường như `OPENROUTER_API_KEY` (xem [Bắt đầu nhanh](#quick-start)).

Không sử dụng mô hình **Body Builder** của OpenRouter ([`openrouter/bodybuilder`](https://openrouter.ai/openrouter/bodybuilder)) để dịch, viết lại hoặc biến đổi: nó trả về payload yêu cầu JSON, không phải văn bản hoàn thành cho các tác vụ đó. Xem [Cài đặt → Mô hình](USER-GUIDE.vi.md#models) trong Hướng dẫn Người dùng.

Bạn cũng có thể sử dụng các nhà cung cấp khác (OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras) hoặc chạy mô hình cục bộ bằng [Ollama](https://ollama.com). Xem [Cấu hình](#configuration-and-environment) để có danh sách đầy đủ các nhà cung cấp và biến môi trường được hỗ trợ.

> ⚠️ **CẢNH BÁO**<br/>
> Nếu bạn đang sử dụng Ollama từ thiết bị, container hoặc dịch vụ khác, hãy nhớ cấu hình Ollama để cho phép kết nối từ bên ngoài (không chỉ localhost).


Để biết giới hạn, BYOK và thêm thông tin, xem [Xác thực OpenRouter](https://openrouter.ai/docs/api/reference/authentication).

<br/><br/>

<a id="configuration-and-environment"></a>
## Cấu hình và môi trường

**Vị trí file cấu hình**

| Triển khai         | Vị trí cấu hình                                   |
| ------------------ | ------------------------------------------------- |
| Electron (Windows) | `%APPDATA%\transrewrt\`                           |
| Electron (Linux)   | `~/.config/transrewrt/`                           |
| Web / Docker       | `/app/data/config.json` (dùng volume để lưu trữ) |

<br/>

**Biến môi trường** (chỉ web/Docker; Electron dùng file cấu hình cục bộ)

| Biến môi trường         | Mặc định                 | Mô tả |
| ----------------------- | ------------------------ | ----- |
| `PORT`                  | `5000`                   | Cổng lắng nghe của máy chủ |
| `CONFIG_PATH`           | `/app/data/config.json`  | Đường dẫn tới file cấu hình |
| `OPENROUTER_API_KEY`        | *(trống)*                | Khóa API OpenRouter |
| `OPENAI_API_KEY`            | *(trống)*                | Khóa API OpenAI |
| `CEREBRAS_API_KEY`          | *(trống)*                | Khóa API Cerebras |
| `ANTHROPIC_API_KEY`         | *(trống)*                | Khóa API Anthropic |
| `GOOGLE_API_KEY`            | *(trống)*                | Khóa API Google Gemini |
| `DEEPSEEK_API_KEY`          | *(trống)*                | Khóa API DeepSeek |
| `GROQ_API_KEY`              | *(trống)*                | Khóa API Groq |
| `MISTRAL_API_KEY`           | *(trống)*                | Khóa API Mistral |
| `OLLAMA_URL`            | *(trống)*                | URL cơ sở Ollama (ví dụ: `http://host.docker.internal:11434`) |
| `XAI_API_KEY`               | *(trống)*                | Khóa API xAI |

Chỉ cấu hình các nhà cung cấp bạn sử dụng. ID mô hình có không gian tên (`openrouter/…`, `openai/…`, `cerebras/…`, `ollama/…`, v.v.).

**Hiển thị chi phí:** OpenRouter trả về chi phí chính xác được tính toán khi có thể. Các nhà cung cấp khác sử dụng chi phí **ước tính** từ bảng giá mô hình công khai của OpenRouter khi có khóa OpenRouter; nếu không, chi phí không phải OpenRouter có thể hiển thị là `0`. Ước tính không phải là hóa đơn.

<br/>

**Dữ liệu và tính bền vững:** Đối với Docker, gắn một volume tại `/app/data` để `config.json` và cơ sở dữ liệu SQLite tồn tại qua các lần khởi động lại container. Nếu không có volume, tất cả dữ liệu sẽ bị mất khi container dừng.

**Nhà phát triển:** Sau khi kéo các thay đổi thay thế cấu hình khóa đơn cũ, hãy đặt lại hoặc hợp nhất `data/config.json` với hình dạng mặc định mới từ `src/config-defaults/config_default.json` nếu file cục bộ của bạn vẫn sử dụng các trường đã bị xóa (`api_key`, `api_url`, các tùy chọn proxy).

<br/>

**Xác thực web:**

- Mặc định admin: `admin` / `transrewrt26`.
- Quản lý người dùng trong **Cài đặt → Người dùng**.
- Đặt lại mật khẩu: `docker exec <container> reset-web-password '<tên-đăng-nhập>' '<mật-khẩu-mới>'`
  (từ mã nguồn: `pnpm run reset-web-password -- <tên-đăng-nhập> <mật-khẩu-mới>`)

<br/>

> ⚠️ **CẢNH BÁO**<br/>
> Thay đổi mật khẩu admin mặc định ngay lập tức trên bất kỳ máy chủ nào có thể truy cập qua mạng.

<br/>

Các cài đặt chính (phông chữ, mô hình, ngôn ngữ, v.v.) có sẵn trong Cài đặt của ứng dụng.

<br/><br/>

<a id="development-and-architecture"></a>

## Phát triển và kiến trúc

- **Phát triển:** Cài đặt, xây dựng, kiểm tra và triển khai (Electron, Web, Docker) - xem **[dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)**.
- **Tổng quan kiến trúc và hệ thống:** Cấu trúc thư mục, công nghệ, quyết định thiết kế - xem **[dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)**.

<br/><br/>

<a id="releases-and-tags"></a>
## Bản phát hành và thẻ

- **Git tags** `v`* (ví dụ `v1.0.10`) kích hoạt [luồng phát hành](.github/workflows/release.yml). **GitHub Releases** đính kèm bộ cài đặt Windows (`.exe`) và Linux AppImages (**x64** và **arm64**).
- **Hình ảnh Docker** được xuất bản đến `ghcr.io/wsj-br/transrewrt`. Thẻ hình ảnh khớp với phiên bản Git (ví dụ `v1.0.10` → `ghcr.io/wsj-br/transrewrt:1.0.10`) cộng với `latest`. Đa nền tảng: `linux/amd64` và `linux/arm64` (ví dụ Raspberry Pi).

<br/><br/>

<a id="contributing"></a>
## Đóng góp

1. Fork kho lưu trữ.
2. Tạo nhánh tính năng: `git checkout -b feature/my-feature`
3. Commit các thay đổi với thông điệp rõ ràng.
4. Đẩy và mở Pull Request vào `main`.

Vui lòng tuân theo phong cách mã nguồn hiện có và kiểm tra thay đổi của bạn ở cả chế độ Electron và web trước khi gửi. Xem [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) để biết hướng dẫn xây dựng và kiểm tra.

<br/>

**Báo cáo vấn đề:** Mở vấn đề trên [GitHub](https://github.com/wsj-br/transrewrt/issues). Bao gồm nền tảng của bạn (Windows / Linux / Docker) và phiên bản ứng dụng (hiển thị trong hộp thoại Giới thiệu hoặc trên trang Bản phát hành).

<br/><br/>

<a id="disclaimer"></a>
## Tuyên bố miễn trừ trách nhiệm

Tên sản phẩm và biểu tượng thuộc về chủ sở hữu tương ứng và chỉ được sử dụng cho mục đích nhận dạng. Phần mềm này không liên kết hoặc được xác nhận bởi bất kỳ thương hiệu nào được đề cập.

<br/><br/>

<a id="license"></a>
## Giấy phép

Bản quyền © 2026 Waldemar Scudeller Jr.

[Giấy phép Apache 2.0](LICENSE)