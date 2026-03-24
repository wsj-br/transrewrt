---
translated_at: "2026-03-24T04:07:18.261Z"
source_hash: "718acd12f14755cd75ebf7d09b86d9a1df37ebe1898710080fa8e80c1221d58b"
source_mtime: 1774311390366.3484
model: "qwen/qwen3-235b-a22b-2507"
---
<p align="center">
  <img src="../images/transrewrt_logo.svg" alt="Biểu tượng Transrewrt" width="120" />
</p>

<h1 align="center">Transrewrt</h1>

<p align="center">
  <a href="https://github.com/wsj-br/transrewrt/releases"><img src="https://img.shields.io/badge/version-1.0.14-blue" alt="Phiên bản"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-Apache%202.0-green" alt="Giấy phép: Apache 2.0"></a>
  <img src="https://img.shields.io/badge/platform-Windows%20%7C%20Linux%20%7C%20Docker-lightgrey" alt="Nền tảng">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react" alt="React 19">
  <img src="https://img.shields.io/badge/Electron-41-47848F?logo=electron" alt="Electron 41">
</p>

Công cụ xử lý văn bản tích hợp trí tuệ nhân tạo: dịch giữa các ngôn ngữ, viết lại theo nhiều phong cách, biến đổi với các mẫu lệnh tùy chỉnh — sử dụng nhiều nhà cung cấp AI (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI và Ollama cục bộ). Chạy dưới dạng ứng dụng máy tính để bàn (Electron) hoặc ứng dụng web tự quản lý (Docker).

- **Dịch** — giữa hàng chục ngôn ngữ, tự động phát hiện ngôn ngữ nguồn
- **Viết lại** — sửa ngữ pháp, cải thiện độ rõ ràng, trang trọng/thân mật, rút ngắn, mở rộng, kỹ thuật
- **Biến đổi** — các mẫu lệnh AI tùy chỉnh; tạo và quản lý mẫu lệnh, có thể chọn ngôn ngữ đích riêng cho từng mẫu lệnh
- **Lịch sử** — toàn bộ lịch sử thực hiện, lưu lại văn bản đầu vào/đầu ra, lọc và xuất dữ liệu
- **Mô hình & chi phí** — chọn mô hình từ bất kỳ nhà cung cấp nào đã cấu hình; bảng điều khiển chi phí với nhật ký SQLite, tóm tắt theo mô hình/thao tác/ngày
- **Giao diện** — giao diện đa ngôn ngữ (trên 30 ngôn ngữ, hỗ trợ viết từ phải sang trái), phông chữ, ...
- **Chế độ web** — hỗ trợ nhiều người dùng với các vai trò quản trị; khóa API được lưu phía máy chủ, không bao giờ chuyển đến trình duyệt
- **Ứng dụng để bàn** — ứng dụng Electron dành cho Windows và Linux
- **Tự quản lý** — hình ảnh Docker cho amd64 & arm64 (sẵn sàng dùng với Raspberry Pi)

Sau khi cài đặt, hãy xem **[Hướng dẫn sử dụng](USER-GUIDE.vi.md)** để biết đầy đủ về tất cả các tính năng.

<small>**Đọc bằng ngôn ngữ khác:** [English (UK)](README.vi.md) · [Português (BR)](README.pt-BR.md) · [العربية](README.ar.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [Hrvatski](README.hr.md) · [Čeština](README.cs.md) · [Nederlands](README.nl.md) · [English (US)](README.en-US.md) · [Filipino](README.tl.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [हिन्दी](README.hi.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [Basa Jawa](README.jv.md) · [한국어](README.ko.md) · [Bahasa Melayu](README.ms.md) · [فارسی](README.fa.md) · [Polski](README.pl.md) · [Português (PT)](README.pt.md) · [ਪੰਜਾਬੀ](README.pa.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [Slovenčina](README.sk.md) · [Español](README.es.md) · [Kiswahili](README.sw.md) · [Svenska](README.sv.md) · [తెలుగు](README.te.md) · [ภาษาไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Tiếng Việt](README.vi.md)</small>

<br/>

**Ghi chú về bản dịch giao diện và tài liệu:** Tất cả các ngôn ngữ giao diện trừ tiếng Anh (UK) đều được dịch bằng các mô hình trí tuệ nhân tạo; cách diễn đạt có thể chưa chính xác hoặc chứa lỗi.

<a id="screenshots"></a>
## Ảnh chụp màn hình

**Bộ chọn ngôn ngữ**

![Bộ chọn ngôn ngữ](../images/screenshots/vi/language-selector.png)

**Dịch**

![Dịch](../images/screenshots/vi/translate.png)

**Biến đổi - trình soạn thảo mẫu lệnh**

![Biến đổi - trình soạn thảo mẫu lệnh](../images/screenshots/vi/transform-prompt-edit.png)

**Bảng điều khiển**

![Bảng điều khiển chi phí](../images/screenshots/vi/dashboard-summary.png)

**Lịch sử**

![Lịch sử](../images/screenshots/vi/history.png)

**Cài đặt - lựa chọn mô hình**

![Cài đặt - lựa chọn mô hình](../images/screenshots/vi/settings-models.png)

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
- [Phát hành và các thẻ](#releases-and-tags)
- [Đóng góp](#contributing)
- [Tuyên bố từ chối trách nhiệm](#disclaimer)
- [Giấy phép](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="quick-start"></a>
## Bắt đầu nhanh

**Docker (khuyên dùng cho tự lưu trữ)**

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest

OPENROUTER_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

Thay `sk-or-your-key` bằng [khóa API OpenRouter](https://openrouter.ai/keys) của bạn (hoặc đặt khóa nhà cung cấp khác; xem phần [Cấu hình](#configuration-and-environment)). Mở [http://localhost:5000](http://localhost:5000) và thay đổi mật khẩu quản trị mặc định trước khi công bố dịch vụ.

<br/>

> ℹ️ **LƯU Ý**<br/>
> Trong Docker, thông tin xác thực LLM được thiết lập qua các biến môi trường như `OPENROUTER_KEY`, `OPENAI_KEY`, … (không phải trên giao diện web). Trên máy tính để bàn (Electron), bạn cấu hình khóa tại **Cài đặt → API**.

<br/>

**Windows**

Tải xuống tệp cài đặt mới nhất `Transrewrt Setup x.y.z.exe` từ [Các bản phát hành](https://github.com/wsj-br/transrewrt/releases), chạy trình cài đặt, sau đó khởi chạy từ menu Bắt đầu hoặc phím tắt trên màn hình. Nhập khóa API của bạn tại **Cài đặt → API**. Bạn cần cấu hình ít nhất một nhà cung cấp; OpenRouter thường được dùng cho các mô hình miễn phí.

<br/>

**Linux**

Tải xuống tệp `.AppImage` từ [Các bản phát hành](https://github.com/wsj-br/transrewrt/releases), sau đó:

```bash
chmod +x Transrewrt-x.y.z.AppImage && ./Transrewrt-x.y.z.AppImage
```

Nhập khóa API của bạn tại **Cài đặt → API**. Bạn cần cấu hình ít nhất một nhà cung cấp; OpenRouter thường được dùng cho các mô hình miễn phí.

Trên Debian/Ubuntu, bạn có thể cần cài đặt thêm các phụ thuộc:

```bash
sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth
```

Xem phần [Cài đặt → Linux](#linux-electron) để biết thêm chi tiết.

<br/>

> ℹ️ **LƯU Ý**<br/>
> macOS hiện chưa được hỗ trợ. Transrewrt có sẵn cho Windows, Linux và Docker.

<br/>

Khi ứng dụng đã chạy, xem **[Hướng dẫn sử dụng](USER-GUIDE.vi.md)** để tìm hiểu cách dịch, viết lại và biến đổi văn bản, quản lý nhắc lệnh (prompt), cũng như cấu hình mô hình.

<br/><br/>

<a id="installation"></a>
## Cài đặt

<a id="windows-electron"></a>
### Windows (Electron)

- Tải xuống trình cài đặt mới nhất từ [Các bản phát hành](https://github.com/wsj-br/transrewrt/releases).
- Chạy tệp `.exe` và làm theo hướng dẫn cài đặt.
- Lần chạy đầu tiên: khởi động ứng dụng từ menu Bắt đầu hoặc phím tắt trên màn hình.

<br/>

<a id="linux-electron"></a>
### Linux (Electron)

- Tải xuống tệp `.AppImage` từ [Các bản phát hành](https://github.com/wsj-br/transrewrt/releases).
- Chạy: `chmod +x Transrewrt-x.y.z.AppImage && ./Transrewrt-x.y.z.AppImage`
- Các phụ thuộc bổ sung (Debian/Ubuntu): `sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth`
- Xem [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) để biết thêm.

<br/>

<a id="docker"></a>
### Docker

- Kéo (pull): `docker pull ghcr.io/wsj-br/transrewrt:latest`
- Thiết lập ít nhất một khóa nhà cung cấp qua biến môi trường (ví dụ: `OPENROUTER_KEY` cho OpenRouter). Truyền các biến này bằng `-e` hoặc qua `docker compose` / `.env` để đảm bảo mật khẩu không bị nhúng vào hình ảnh.
- Các khóa nhà cung cấp **không** được nhập trong giao diện web; máy chủ sẽ đọc chúng từ môi trường.

Ví dụ - dùng volume được đặt tên để lưu trạng thái (khóa OpenRouter qua biến môi trường):

```bash
OPENROUTER_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

<br/>

| Tùy chọn | Mô tả |
|--------|-------|
| Cổng (Port) | `5000` (gán bằng `-p 5000:5000`) |
| Volume | Gắn `/app/data` để lưu cấu hình và cơ sở dữ liệu |
| Biến môi trường | `PORT`, `CONFIG_PATH`, cộng thêm các khóa LLM (`OPENROUTER_KEY`, `OPENAI_KEY`, …) - xem thêm [Cấu hình](#configuration-and-environment) |

Để xây dựng và chạy từ mã nguồn: `docker compose up --build -d` hoặc `pnpm docker:up` - xem [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md).

<br/><br/>

<a id="getting-an-openrouter-api-key"></a>

## Lấy khóa API OpenRouter

Transrewrt hỗ trợ nhiều nhà cung cấp AI. [OpenRouter](https://openrouter.ai) là lựa chọn phổ biến vì nó tích hợp nhiều mô hình dưới một khóa duy nhất và cung cấp các mô hình miễn phí.

1. Đăng ký hoặc đăng nhập tại [openrouter.ai](https://openrouter.ai).
2. Mở trang [Keys](https://openrouter.ai/keys) và tạo khóa mới (đặt tên và tùy chọn thiết lập giới hạn tín dụng). Bạn có thể sử dụng các mô hình miễn phí mà không cần thêm tín dụng.
3. **Bản máy tính để bàn (Electron):** dán khóa vào **Settings → API**. **Docker:** thiết lập các biến môi trường như `OPENROUTER_KEY` (xem [Bắt đầu nhanh](#quick-start)).

Bạn cũng có thể sử dụng các nhà cung cấp khác (OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI) hoặc chạy mô hình cục bộ với [Ollama](https://ollama.com). Xem mục [Cấu hình](#configuration-and-environment) để biết danh sách đầy đủ các nhà cung cấp được hỗ trợ và các biến môi trường.

Về giới hạn, BYOK và các thông tin chi tiết khác, xem [Xác thực OpenRouter](https://openrouter.ai/docs/api/reference/authentication).

<br/><br/>

<a id="configuration-and-environment"></a>
## Cấu hình và môi trường

**Vị trí tệp cấu hình**

| Triển khai         | Vị trí cấu hình                                   |
| ------------------ | ------------------------------------------------- |
| Electron (Windows) | `%APPDATA%\transrewrt\`                           |
| Electron (Linux)   | `~/.config/transrewrt/`                           |
| Web / Docker       | `/app/data/config.json` (sử dụng volume để lưu dữ liệu) |

<br/>

**Các biến môi trường** (chỉ dùng cho Web/Docker; Electron dùng tệp cấu hình cục bộ)

| Biến               | Mặc định                | Mô tả |
| ------------------ | ----------------------- | ----- |
| `PORT`             | `5000`                  | Cổng lắng nghe của máy chủ |
| `CONFIG_PATH`      | `/app/data/config.json` | Đường dẫn đến tệp cấu hình |
| `OPENROUTER_KEY`   | *(trống)*               | Khóa API OpenRouter |
| `OPENAI_KEY`       | *(trống)*               | Khóa API OpenAI |
| `ANTHROPIC_KEY`    | *(trống)*               | Khóa API Anthropic |
| `GOOGLE_KEY`       | *(trống)*               | Khóa API Google Gemini |
| `DEEPSEEK_KEY`     | *(trống)*               | Khóa API DeepSeek |
| `GROQ_KEY`         | *(trống)*               | Khóa API Groq |
| `MISTRAL_KEY`      | *(trống)*               | Khóa API Mistral |
| `OLLAMA_URL`       | *(trống)*               | URL gốc Ollama (ví dụ: `http://host.docker.internal:11434`) |
| `XAI_KEY`          | *(trống)*               | Khóa API xAI |

Chỉ cần cấu hình các nhà cung cấp bạn sử dụng. Các ID mô hình được phân vùng tên (`openrouter/…`, `openai/…`, `ollama/…`, v.v.).

**Hiển thị chi phí:** OpenRouter trả về chi phí được tính chính xác khi áp dụng. Các nhà cung cấp khác sử dụng chi phí **ước tính** từ bảng giá công khai của OpenRouter nếu có khóa OpenRouter; nếu không, chi phí của nhà cung cấp khác có thể hiển thị là `0`. Các giá trị ước tính không phải là hóa đơn.

<br/>

**Dữ liệu và lưu trữ:** Với Docker, hãy gắn một volume vào `/app/data` để tệp `config.json` và cơ sở dữ liệu SQLite được lưu lại sau các lần khởi động lại container. Nếu không có volume, mọi dữ liệu sẽ bị mất khi container dừng.

**Lập trình viên:** Sau khi cập nhật mã mới thay thế cấu hình khóa đơn cũ, hãy thiết lập lại hoặc hợp nhất `data/config.json` với cấu trúc mặc định mới từ `src/config-defaults/config_default.json` nếu tệp cục bộ của bạn vẫn sử dụng các trường đã bị loại bỏ (`api_key`, `api_url`, các tùy chọn proxy).

<br/>

**Xác thực web:**

- Quản trị viên mặc định: `admin` / `transrewrt26`.
- Quản lý người dùng trong **Settings → Users**.
- Đặt lại mật khẩu: `docker exec <container> reset-web-password '<username>' '<new-password>'`  
  (từ mã nguồn: `pnpm run reset-web-password -- <username> <new-password>`)

<br/>

> ⚠️ **CẢNH BÁO**<br/>
> Hãy thay đổi mật khẩu quản trị viên mặc định ngay lập tức trên bất kỳ máy chủ nào có thể truy cập qua mạng.

<br/>

Các cài đặt chính (phông chữ, mô hình, ngôn ngữ, v.v.) có sẵn trong phần Cài đặt của ứng dụng.

<br/><br/>

<a id="development-and-architecture"></a>
## Phát triển và kiến trúc

- **Phát triển:** Thiết lập, biên dịch, kiểm thử và triển khai (Electron, Web, Docker) - xem **[dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)**.
- **Tổng quan về kiến trúc và hệ thống:** Cấu trúc thư mục, công nghệ sử dụng, các quyết định thiết kế - xem **[dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)**.

<br/><br/>

<a id="releases-and-tags"></a>

## Bản phát hành và thẻ (tags)

- **Thẻ Git** bắt đầu bằng `v`* (ví dụ: `v1.0.10`) sẽ kích hoạt [quy trình phát hành](.github/workflows/release.yml). **Các bản phát hành trên GitHub** sẽ đính kèm tệp cài đặt cho Windows (`.exe`) và tệp AppImage cho Linux.
- **Hình ảnh Docker** được đăng lên `ghcr.io/wsj-br/transrewrt`. Các thẻ hình ảnh phù hợp với phiên bản Git (ví dụ: `v1.0.10` → `ghcr.io/wsj-br/transrewrt:1.0.10`) và cả thẻ `latest`. Hỗ trợ đa nền tảng: `linux/amd64` và `linux/arm64` (ví dụ: Raspberry Pi).

<br/><br/>

<a id="contributing"></a>
## Đóng góp

1. Sao chép kho mã nguồn về tài khoản của bạn.
2. Tạo nhánh chức năng: `git checkout -b feature/my-feature`
3. Commit các thay đổi với thông điệp rõ ràng.
4. Đẩy lên và tạo yêu cầu Pull Request vào nhánh `main`.

Vui lòng tuân theo phong cách lập trình hiện tại và kiểm thử các thay đổi của bạn ở cả chế độ Electron và chế độ web trước khi gửi. Xem [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) để biết hướng dẫn xây dựng và kiểm thử.

<br/>

**Báo cáo lỗi:** Tạo báo cáo tại [GitHub](https://github.com/wsj-br/transrewrt/issues). Vui lòng cung cấp thông tin nền tảng đang dùng (Windows / Linux / Docker) và phiên bản ứng dụng (hiển thị trong hộp thoại Giới thiệu hoặc trang Bản phát hành).

<br/><br/>

<a id="disclaimer"></a>
## Miễn trừ trách nhiệm

Các tên sản phẩm và biểu tượng thuộc về chủ sở hữu tương ứng và chỉ được sử dụng nhằm mục đích nhận dạng. Phần mềm này không liên quan hoặc được sự bảo trợ bởi bất kỳ thương hiệu nào đã nêu.

<br/><br/>

<a id="license"></a>
## Giấy phép

Bản quyền © 2026 Waldemar Scudeller Jr.

[Giấy phép Apache 2.0](LICENSE)