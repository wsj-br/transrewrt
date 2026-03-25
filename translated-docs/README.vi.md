---
translated_at: "2026-03-25T22:43:40.941Z"
source_hash: "7b3703140b5006a6bfb0700c530b1afcc6e9b0fc364d69c57960ab4609dccbd9"
source_mtime: 1774475429145.525
model: "qwen/qwen3-235b-a22b-2507"
---
<p align="center">
  <img src="../images/transrewrt_logo.svg" alt="Biểu tượng Transrewrt" width="120" />
</p>

<h1 align="center">Transrewrt</h1>

<p align="center">
  <a href="https://github.com/wsj-br/transrewrt/releases"><img src="https://img.shields.io/badge/version-1.0.15-blue" alt="Phiên bản"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-Apache%202.0-green" alt="Giấy phép: Apache 2.0"></a>
  <img src="https://img.shields.io/badge/platform-Windows%20%7C%20Linux%20%7C%20Docker-lightgrey" alt="Nền tảng">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react" alt="React 19">
  <img src="https://img.shields.io/badge/Electron-41-47848F?logo=electron" alt="Electron 41">
</p>

Công cụ xử lý văn bản tích hợp trí tuệ nhân tạo: dịch thuật giữa các ngôn ngữ, viết lại theo nhiều phong cách khác nhau, và biến đổi văn bản với các hướng dẫn tùy chỉnh — sử dụng nhiều nền tảng AI (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI và Ollama cục bộ). Chạy dưới dạng ứng dụng máy tính để bàn (Electron) hoặc ứng dụng web tự lưu trữ (Docker).

- **Dịch thuật** — giữa hàng chục ngôn ngữ, tự động nhận diện ngôn ngữ nguồn
- **Viết lại** — sửa lỗi ngữ pháp, cải thiện sự rõ ràng, chuyển đổi văn phong (trang trọng/thân mật), rút ngắn, mở rộng, chuyên môn hóa
- **Biến đổi** — các hướng dẫn AI tùy chỉnh; tạo và quản lý hướng dẫn, có thể chọn ngôn ngữ đích riêng cho từng hướng dẫn
- **Lịch sử** — lịch sử thực hiện đầy đủ với nội dung đầu vào/đầu ra, lọc và xuất dữ liệu
- **Mô hình & chi phí** — chọn mô hình từ bất kỳ nhà cung cấp nào đã cấu hình; bảng điều khiển theo dõi chi phí và sử dụng kèm nhật ký, báo cáo tổng hợp theo mô hình/thao tác/ngày
- **Giao diện người dùng** — giao diện đa ngôn ngữ (trên 30 ngôn ngữ, hỗ trợ RTL), phông chữ, ...
- **Chế độ web** — hỗ trợ nhiều người dùng với các vai trò quản trị viên
- **Phiên bản máy để bàn** — ứng dụng Electron cho Windows và Linux
- **Tự lưu trữ** — hình ảnh Docker cho amd64 & arm64 (tương thích Raspberry Pi)

Sau khi cài đặt, hãy xem **[Hướng dẫn sử dụng](USER-GUIDE.vi.md)** để tìm hiểu chi tiết tất cả các tính năng.

<small>**Đọc bằng ngôn ngữ khác:** [English (UK)](README.vi.md) · [Português (BR)](README.pt-BR.md) · [العربية](README.ar.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [Hrvatski](README.hr.md) · [Čeština](README.cs.md) · [Nederlands](README.nl.md) · [English (US)](README.en-US.md) · [Filipino](README.tl.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [हिन्दी](README.hi.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [Basa Jawa](README.jv.md) · [한국어](README.ko.md) · [Bahasa Melayu](README.ms.md) · [فارسی](README.fa.md) · [Polski](README.pl.md) · [Português (PT)](README.pt.md) · [ਪੰਜਾਬੀ](README.pa.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [Slovenčina](README.sk.md) · [Español](README.es.md) · [Kiswahili](README.sw.md) · [Svenska](README.sv.md) · [తెలుగు](README.te.md) · [ภาษาไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Tiếng Việt](README.vi.md)</small>

<small>

> **Lưu ý về bản dịch giao diện và tài liệu hướng dẫn:** Tất cả các ngôn ngữ giao diện, ngoại trừ tiếng Anh (UK) bản gốc,  
> đều được dịch bằng các mô hình AI; vì vậy cách diễn đạt có thể chưa chính xác hoặc chứa lỗi.

</small>

<br/>

<a id="screenshots"></a>
## Hình ảnh minh họa

**Bộ chọn ngôn ngữ**

![Bộ chọn ngôn ngữ](../images/screenshots/vi/language-selector.png)

**Dịch thuật**

![Dịch thuật](../images/screenshots/vi/translate.png)

**Biến đổi - trình soạn thảo hướng dẫn**

![Biến đổi - trình soạn thảo hướng dẫn](../images/screenshots/vi/transform-prompt-edit.png)

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
- [Phát hành và các thẻ](#releases-and-tags)
- [Đóng góp](#contributing)
- [Tuyên bố từ chối trách nhiệm](#disclaimer)
- [Giấy phép](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="quick-start"></a>
## Bắt đầu nhanh

**Docker (khuyên dùng nếu tự lưu trữ)**

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest

OPENROUTER_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

Thay `sk-or-your-key` bằng [khóa API OpenRouter](https://openrouter.ai/keys) của bạn (hoặc cài đặt khóa nhà cung cấp khác; xem [Cấu hình](#configuration-and-environment)). Mở [http://localhost:5000](http://localhost:5000) và đổi mật khẩu quản trị mặc định trước khi công khai dịch vụ.

<br/>

> ℹ️ **LƯU Ý**<br/>
> Với Docker, các thông tin đăng nhập LLM được đặt qua biến môi trường như `OPENROUTER_KEY`, `OPENAI_KEY`, `CEREBRAS_KEY`, … (không đặt qua giao diện web). Với bản desktop (Electron), bạn cấu hình các khóa này trong **Cài đặt → API**.

<br/>

**Windows**

Tải về file `Transrewrt Setup x.y.z.exe` mới nhất từ [Phát hành](https://github.com/wsj-br/transrewrt/releases), chạy trình cài đặt, rồi khởi chạy từ menu Start hoặc lối tắt trên màn hình. Nhập khóa API của bạn tại **Cài đặt → API**. Bạn cần cấu hình ít nhất một nhà cung cấp, OpenRouter thường được dùng cho các mô hình miễn phí.

<br/>

**Linux**

Tải file `.AppImage` phù hợp với CPU của bạn từ [Phát hành](https://github.com/wsj-br/transrewrt/releases) (`x64` cho PC thông thường, `arm64` cho các thiết bị ARM, bao gồm Raspberry Pi 4+), sau đó:

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

Nhập khóa API của bạn tại **Cài đặt → API**. Bạn cần cấu hình ít nhất một nhà cung cấp, OpenRouter thường được dùng cho các mô hình miễn phí.

Trên Debian/Ubuntu, bạn có thể cần cài thêm các gói phụ thuộc trước:

```bash
sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth
```

Xem [Cài đặt → Linux](#linux-electron) để biết thêm chi tiết.

<br/>

> ℹ️ **LƯU Ý**<br/>
> Hiện tại macOS chưa được hỗ trợ. Transrewrt hiện khả dụng cho Windows, Linux và Docker.

<br/>

Sau khi ứng dụng đã chạy, hãy xem **[Hướng dẫn người dùng](USER-GUIDE.vi.md)** để tìm hiểu cách dịch, viết lại và biến đổi văn bản, quản lý hướng dẫn (prompt), và cấu hình mô hình.

<br/><br/>

<a id="installation"></a>
## Cài đặt

<a id="windows-electron"></a>
### Windows (Electron)

- Tải trình cài đặt mới nhất từ [Phát hành](https://github.com/wsj-br/transrewrt/releases).
- Chạy file `.exe` và làm theo hướng dẫn cài đặt.
- Lần đầu tiên chạy: khởi động ứng dụng từ menu Start hoặc lối tắt trên màn hình.

<br/>

<a id="linux-electron"></a>
### Linux (Electron)

- Tải file `.AppImage` phù hợp (`x64` hoặc `arm64`) từ [Phát hành](https://github.com/wsj-br/transrewrt/releases).
- Chạy: `chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage` trên x86_64/amd64, hoặc dùng tên file `...-arm64.AppImage` trên ARM64.
- Các gói phụ thuộc thêm (Debian/Ubuntu): `sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth`
- Xem [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) để biết thêm chi tiết.

<br/>

<a id="docker"></a>
### Docker

- Kéo hình ảnh: `docker pull ghcr.io/wsj-br/transrewrt:latest`
- Thiết lập ít nhất một khóa nhà cung cấp qua biến môi trường (ví dụ `OPENROUTER_KEY` cho OpenRouter). Truyền các biến này bằng `-e` hoặc qua `docker compose` / `.env` để tránh lưu mật khẩu trong hình ảnh.
- Các khóa nhà cung cấp **không** được nhập trong giao diện web; máy chủ đọc chúng từ biến môi trường.

Ví dụ - dùng volume có tên để lưu dữ liệu (khóa OpenRouter qua biến môi trường):

```bash
OPENROUTER_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

<br/>

| Tùy chọn   | Mô tả                                                                                                   |
| -------- | ------------------------------------------------------------------------------------------------------------- |
| Cổng     | `5000` (khai báo bằng `-p 5000:5000`)                                                                              |
| Volume   | Gắn `/app/data` để lưu cấu hình và cơ sở dữ liệu                                                              |
| Biến môi trường | `PORT`, `CONFIG_PATH`, và các khóa LLM (`OPENROUTER_KEY`, `OPENAI_KEY`, …) - xem [Cấu hình](#configuration-and-environment) |

Để tự build và chạy từ mã nguồn: `docker compose up --build -d` hoặc `pnpm docker:up` - xem [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md).

<br/><br/>

<a id="getting-an-openrouter-api-key"></a>

## Lấy khóa API OpenRouter

Transrewrt hỗ trợ nhiều nhà cung cấp AI. [OpenRouter](https://openrouter.ai) là lựa chọn phổ biến vì tích hợp nhiều mô hình dưới một khóa duy nhất và cung cấp các mô hình miễn phí.

1. Đăng ký hoặc đăng nhập tại [openrouter.ai](https://openrouter.ai).
2. Mở trang [Keys](https://openrouter.ai/keys) và tạo khóa mới (đặt tên, và tùy chọn giới hạn tín dụng). Bạn có thể dùng các mô hình miễn phí mà không cần thêm tín dụng.
3. **Phiên bản Desktop (Electron):** dán khóa vào **Settings → API**. **Docker:** thiết lập các biến môi trường như `OPENROUTER_KEY` (xem [Bắt đầu nhanh](#quick-start)).

Không dùng mô hình **Body Builder** của OpenRouter ([`openrouter/bodybuilder`](https://openrouter.ai/openrouter/bodybuilder)) để dịch, viết lại hoặc chuyển đổi: nó trả về các gói yêu cầu JSON, chứ không phải văn bản đã hoàn thành cho các tác vụ đó. Xem [Settings → Models](USER-GUIDE.vi.md#models) trong Hướng dẫn sử dụng để biết chi tiết.

Bạn cũng có thể dùng các nhà cung cấp khác (OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras) hoặc chạy mô hình cục bộ với [Ollama](https://ollama.com). Xem mục [Cấu hình](#configuration-and-environment) để biết danh sách đầy đủ các nhà cung cấp được hỗ trợ và các biến môi trường.

> ⚠️ **CẢNH BÁO**<br/>
> Nếu bạn dùng Ollama từ một thiết bị, container hoặc dịch vụ khác, hãy nhớ cấu hình Ollama cho phép kết nối từ bên ngoài (không chỉ giới hạn localhost).

Để biết về giới hạn, BYOK (Bring Your Own Key), và nhiều thông tin hơn, xem [OpenRouter authentication](https://openrouter.ai/docs/api/reference/authentication).

<br/><br/>

<a id="configuration-and-environment"></a>
## Cấu hình và môi trường

**Vị trí tệp cấu hình**

| Triển khai         | Vị trí cấu hình                                 |
| ------------------ | ----------------------------------------------- |
| Electron (Windows) | `%APPDATA%\transrewrt\`                         |
| Electron (Linux)   | `~/.config/transrewrt/`                         |
| Web / Docker       | `/app/data/config.json` (dùng volume để lưu dữ liệu) |

<br/>

**Biến môi trường** (chỉ dành cho web/Docker; Electron dùng tệp cấu hình cục bộ)

| Biến               | Mặc định                | Mô tả |
| ------------------ | ----------------------- | ----- |
| `PORT`             | `5000`                  | Cổng lắng nghe của máy chủ |
| `CONFIG_PATH`      | `/app/data/config.json` | Đường dẫn tới tệp cấu hình |
| `OPENROUTER_KEY`   | *(trống)*               | Khóa API OpenRouter |
| `OPENAI_KEY`       | *(trống)*               | Khóa API OpenAI |
| `CEREBRAS_KEY`     | *(trống)*               | Khóa API Cerebras |
| `ANTHROPIC_KEY`    | *(trống)*               | Khóa API Anthropic |
| `GOOGLE_KEY`       | *(trống)*               | Khóa API Google Gemini |
| `DEEPSEEK_KEY`     | *(trống)*               | Khóa API DeepSeek |
| `GROQ_KEY`         | *(trống)*               | Khóa API Groq |
| `MISTRAL_KEY`      | *(trống)*               | Khóa API Mistral |
| `OLLAMA_URL`       | *(trống)*               | URL gốc Ollama (ví dụ: `http://host.docker.internal:11434`) |
| `XAI_KEY`          | *(trống)*               | Khóa API xAI |

Chỉ cần cấu hình những nhà cung cấp bạn sử dụng. ID mô hình được phân theo không gian tên (`openrouter/…`, `openai/…`, `cerebras/…`, `ollama/…`, v.v.).

**Hiển thị chi phí:** OpenRouter trả về chi phí chính xác khi có thể. Các nhà cung cấp khác sử dụng **chi phí ước tính** dựa trên bảng giá công khai của mô hình OpenRouter nếu có sẵn khóa OpenRouter; nếu không, chi phí từ các nhà cung cấp khác có thể hiện là `0`. Các giá trị ước tính không phải là hóa đơn.

<br/>

**Dữ liệu và lưu trữ:** Đối với Docker, hãy gắn một volume tại `/app/data` để `config.json` và cơ sở dữ liệu SQLite được lưu lại sau mỗi lần khởi động lại container. Nếu không có volume, mọi dữ liệu sẽ bị mất khi container dừng.

**Lập trình viên:** Sau khi kéo các thay đổi thay thế cấu hình khóa đơn cũ, hãy đặt lại hoặc gộp `data/config.json` với cấu trúc mặc định mới từ `src/config-defaults/config_default.json` nếu tệp cục bộ của bạn vẫn còn dùng các trường đã bị xóa (`api_key`, `api_url`, tùy chọn proxy).

<br/>

**Xác thực web:**

- Quản trị viên mặc định: `admin` / `transrewrt26`.
- Quản lý người dùng trong **Settings → Users**.
- Đặt lại mật khẩu: `docker exec <container> reset-web-password '<username>' '<new-password>'`
  (từ mã nguồn: `pnpm run reset-web-password -- <username> <new-password>`)

<br/>

> ⚠️ **CẢNH BÁO**<br/>
> Hãy thay đổi mật khẩu quản trị viên mặc định ngay lập tức trên mọi máy chủ có thể truy cập qua mạng.

<br/>

Các thiết lập chính (font chữ, mô hình, ngôn ngữ, v.v.) có thể được điều chỉnh trong phần Cài đặt của ứng dụng.

<br/><br/>

<a id="development-and-architecture"></a>

## Phát triển và kiến trúc

- **Phát triển:** Thiết lập, xây dựng, kiểm thử và triển khai (Electron, Web, Docker) - xem **[dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)**.
- **Kiến trúc và tổng quan hệ thống:** Cấu trúc thư mục, công nghệ sử dụng, các quyết định thiết kế - xem **[dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)**.

<br/><br/>

<a id="releases-and-tags"></a>
## Phát hành và các tag

- **Các tag Git** bắt đầu bằng `v*` (ví dụ: `v1.0.10`) sẽ kích hoạt [quy trình phát hành](.github/workflows/release.yml). **GitHub Releases** đính kèm tập tin cài đặt cho Windows (`.exe`) và các AppImage của Linux (**x64** và **arm64**).
- **Các hình ảnh Docker** được đăng tải lên `ghcr.io/wsj-br/transrewrt`. Các tag của hình ảnh phù hợp với phiên bản Git (ví dụ: `v1.0.10` → `ghcr.io/wsj-br/transrewrt:1.0.10`) cùng với tag `latest`. Đa kiến trúc: `linux/amd64` và `linux/arm64` (ví dụ: Raspberry Pi).

<br/><br/>

<a id="contributing"></a>
## Đóng góp

1. Fork kho lưu trữ.
2. Tạo một nhánh tính năng: `git checkout -b feature/my-feature`.
3. Commit các thay đổi của bạn với thông điệp rõ ràng.
4. Đẩy lên và mở một Pull Request tới nhánh `main`.

Vui lòng tuân theo phong cách mã hiện có và kiểm tra các thay đổi của bạn ở cả chế độ Electron và web trước khi gửi. Xem [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) để biết hướng dẫn xây dựng và kiểm thử.

<br/>

**Báo lỗi:** Hãy tạo một issue trên [GitHub](https://github.com/wsj-br/transrewrt/issues). Hãy cung cấp nền tảng của bạn (Windows / Linux / Docker) và phiên bản ứng dụng (hiển thị trong hộp thoại Giới thiệu hoặc trên trang Phát hành).

<br/><br/>

<a id="disclaimer"></a>
## Miễn trừ trách nhiệm

Tên sản phẩm và biểu tượng thuộc về chủ sở hữu tương ứng và chỉ được sử dụng để nhận dạng. Phần mềm này không liên kết hoặc được bảo trợ bởi bất kỳ thương hiệu nào được đề cập.

<br/><br/>

<a id="license"></a>
## Giấy phép

Copyright © 2026 Waldemar Scudeller Jr.

[Giấy phép Apache 2.0](LICENSE)