---
translation_last_updated: '2026-03-30T00:46:35.747Z'
source_file_mtime: '2026-03-29T23:51:36.506Z'
source_file_hash: fa17b974cbf42a93
translation_language: vi
source_file_path: README.md
---
<p align="center">
  <img src="../images/transrewrt_banner.png" alt="Transrewrt Banner"  />
</p>

<p align="center">
  <a href="https://github.com/wsj-br/transrewrt/releases"><img src="https://img.shields.io/badge/version-1.1.1-blue" alt="Phiên bản"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-Apache%202.0-green" alt="Giấy phép: Apache 2.0"></a>
  <img src="https://img.shields.io/badge/platform-Windows%20%7C%20Linux%20%7C%20Docker-lightgrey" alt="Nền tảng">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react" alt="React 19">
  <img src="https://img.shields.io/badge/Electron-41-47848F?logo=electron" alt="Electron 41">
</p>

Công cụ xử lý văn bản tích hợp AI: dịch giữa các ngôn ngữ, viết lại theo các phong cách khác nhau và chuyển đổi bằng lời nhắc tùy chỉnh — sử dụng nhiều nhà cung cấp AI (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI và Ollama cục bộ). Chạy dưới dạng ứng dụng máy tính để bàn (Electron) hoặc ứng dụng web tự lưu trữ (Docker).

- **Dịch** — giữa hàng chục ngôn ngữ, với phát hiện nguồn tự động  
- **Viết lại** — sửa ngữ pháp, cải thiện độ rõ ràng, trang trọng/thân mật, rút gọn, mở rộng, kỹ thuật  
- **Chuyển đổi** — lời nhắc AI tùy chỉnh; tạo và quản lý lời nhắc, ngôn ngữ đích tùy chọn theo từng lời nhắc  
- **Lịch sử** — lịch sử thực hiện đầy đủ với văn bản đầu vào/đầu ra, lọc và xuất dữ liệu  
- **Mô hình & chi phí** — chọn mô hình từ bất kỳ nhà cung cấp nào đã cấu hình; bảng điều khiển chi phí và sử dụng với nhật ký, tóm tắt theo mô hình/thao tác/ngày  
- **Giao diện người dùng** — giao diện đa ngôn ngữ (trên 30 ngôn ngữ, hỗ trợ RTL), phông chữ, ...  
- **Chế độ Web** — hỗ trợ nhiều người dùng với các vai trò quản trị viên  
- **Máy tính để bàn** — ứng dụng Electron cho Windows và Linux  
- **Tự lưu trữ** — hình ảnh Docker cho amd64 & arm64 (sẵn sàng dùng với Raspberry Pi)

Sau khi cài đặt, hãy xem **[Hướng dẫn Người dùng](USER-GUIDE.vi.md)** để tìm hiểu chi tiết tất cả các tính năng.

<small>**Đọc bằng các ngôn ngữ khác:** </small>
<small id="lang-list">[English (UK)](../README.md) · [Português (BR)](README.pt-BR.md) · [العربية](README.ar.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [Hrvatski](README.hr.md) · [Čeština](README.cs.md) · [Nederlands](README.nl.md) · [English (US)](README.en-US.md) · [Filipino](README.tl.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [हिन्दी](README.hi.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [Basa Jawa](README.jv.md) · [한국어](README.ko.md) · [Bahasa Melayu](README.ms.md) · [فارسی](README.fa.md) · [Polski](README.pl.md) · [Português (PT)](README.pt.md) · [ਪੰਜਾਬੀ](README.pa.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [Slovenčina](README.sk.md) · [Español](README.es.md) · [Kiswahili](README.sw.md) · [Svenska](README.sv.md) · [తెలుగు](README.te.md) · [ภาษาไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Tiếng Việt](README.vi.md)</small>

<small>

> **Lưu ý về bản dịch giao diện người dùng và tài liệu:** Tất cả các ngôn ngữ giao diện ngoài tiếng Anh (UK) gốc  
> đều được dịch bằng các mô hình AI; cách diễn đạt có thể không chính xác hoặc chứa lỗi.

</small>

<br/>

<a id="screenshots"></a>
## Ảnh chụp màn hình

**Bộ chọn ngôn ngữ**

![Language selector](../images/screenshots/vi/language-selector.png)

**Dịch**

![Translate](../images/screenshots/vi/translate.png)

**Chuyển đổi - trình soạn thảo lời nhắc**

![Transform - prompt editor](../images/screenshots/vi/transform-prompt-edit.png)

**Bảng điều khiển**

![Dashboard summary — usage](../images/screenshots/vi/dashboard-summary.png)

**Lịch sử**

![History](../images/screenshots/vi/history.png)

**Cài đặt - lựa chọn mô hình**

![Settings - model selection](../images/screenshots/vi/settings-models.png)

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
  - [Cấu hình múi giờ](#configuring-the-timezone)
- [Lấy khóa API OpenRouter](#getting-an-openrouter-api-key)
- [Cấu hình và môi trường](#configuration-and-environment)
- [Phát triển và kiến trúc](#development-and-architecture)
- [Báo cáo sự cố](#reporting-issues)
- [Tuyên bố từ chối trách nhiệm](#disclaimer)
- [Giấy phép](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="quick-start"></a>
## Bắt đầu nhanh

**Docker (khuyến nghị cho tự lưu trữ)**

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest

OPENROUTER_API_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_API_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

Thay thế `sk-or-your-key` bằng khóa API [OpenRouter](https://openrouter.ai/keys) của bạn (hoặc đặt khóa của nhà cung cấp khác; xem [Cấu hình](#configuration-and-environment)). Mở [http://localhost:5000](http://localhost:5000) và thay đổi mật khẩu quản trị viên mặc định trước khi công khai dịch vụ.

<br/>

> ℹ️ **LƯU Ý**<br/>
> Trong Docker, thông tin đăng nhập LLM được thiết lập bằng các biến môi trường như `OPENROUTER_API_KEY`, `OPENAI_API_KEY`, `CEREBRAS_API_KEY`, … (không phải trong giao diện web). Trên máy tính để bàn (Electron), bạn cấu hình khóa trong **Cài đặt → API**.

<br/>

**Windows**

Tải xuống tệp cài đặt mới nhất `Transrewrt Setup x.y.z.exe` từ [Phát hành](https://github.com/wsj-br/transrewrt/releases), chạy trình cài đặt, sau đó khởi chạy từ menu Bắt đầu hoặc lối tắt trên màn hình. Nhập khóa API của bạn vào **Cài đặt → API**. Bạn cần cấu hình ít nhất một nhà cung cấp, OpenRouter là phổ biến cho các mô hình miễn phí.

<br/>

**Linux**

Tải xuống tệp `.AppImage` phù hợp với CPU của bạn từ [Phát hành](https://github.com/wsj-br/transrewrt/releases) (`x64` cho máy tính thông thường, `arm64` cho nhiều thiết bị ARM, bao gồm Raspberry Pi 4+), sau đó:

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

Nhập khóa API của bạn vào **Cài đặt → API**. Bạn cần cấu hình ít nhất một nhà cung cấp, OpenRouter là phổ biến cho các mô hình miễn phí.

Trên Debian/Ubuntu, bạn có thể cần cài đặt thêm các phụ thuộc trước:

```bash
sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth
```

Xem [Cài đặt → Linux](#linux-electron) để biết chi tiết.

<br/>

> ℹ️ **LƯU Ý**<br/>
> Hiện tại chưa hỗ trợ macOS. Transrewrt có sẵn cho Windows, Linux và Docker.

<br/>

Khi ứng dụng đang chạy, hãy xem **[Hướng dẫn Người dùng](USER-GUIDE.vi.md)** để tìm hiểu cách dịch, viết lại và chuyển đổi văn bản, quản lý lời nhắc và cấu hình mô hình.

<br/><br/>

<a id="installation"></a>
## Cài đặt

<a id="windows-electron"></a>
### Windows (Electron)

- Tải xuống trình cài đặt mới nhất từ [Phát hành](https://github.com/wsj-br/transrewrt/releases).
- Chạy tệp `.exe` và làm theo hướng dẫn cài đặt.
- Lần đầu chạy: khởi động ứng dụng từ menu Bắt đầu hoặc lối tắt trên màn hình.

<br/>

> ℹ️ **LƯU Ý**<br/>
> Windows có thể hiển thị một trong các cảnh báo bảo mật sau (bình thường đối với ứng dụng chưa ký hoặc ứng dụng độc lập):
>   - **User Account Control (UAC)**: "Bạn có muốn cho phép ứng dụng này từ nhà xuất bản chưa biết thực hiện thay đổi trên thiết bị của bạn không?" → Nhấp **Có**.
>   - **Microsoft Defender SmartScreen**: "Windows đã bảo vệ PC của bạn" → Nhấp **Thông tin thêm** → **Vẫn chạy**.
>
> Điều này xảy ra vì ứng dụng chưa được ký bởi Microsoft hoặc nhà xuất bản lớn — ứng dụng an toàn nếu tải từ bản phát hành GitHub chính thức của chúng tôi
>  (xác minh mã băm SHA256 bên dưới).

<br/>

<a id="linux-electron"></a>
### Linux (Electron)

- Tải xuống tệp `.AppImage` phù hợp (`x64` hoặc `arm64`) từ [Releases](https://github.com/wsj-br/transrewrt/releases).
- Chạy lệnh: `chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage` trên x86_64/amd64, hoặc sử dụng tên tệp `...-arm64.AppImage` trên ARM64.
- Các phụ thuộc bổ sung (Debian/Ubuntu): `sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth`
- Xem [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) để biết thêm thông tin.

<br/>

<a id="docker"></a>
### Docker

- Pull: `docker pull ghcr.io/wsj-br/transrewrt:latest`
- Thiết lập ít nhất một khóa nhà cung cấp qua biến môi trường (ví dụ: `OPENROUTER_API_KEY` cho OpenRouter). Truyền các biến bằng `-e` hoặc `docker compose` / `.env` để đảm bảo bí mật không bị nhúng vào trong image.
- Các khóa nhà cung cấp **không** được nhập trong giao diện web; máy chủ đọc chúng từ biến môi trường.

Ví dụ - dùng volume có tên để lưu dữ liệu (khóa OpenRouter qua biến môi trường):

```bash
OPENROUTER_API_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_API_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

hoặc nếu bạn thích dùng Docker Compose, hãy dùng:

```
# download the compose file
wget https://github.com/wsj-br/transrewrt/raw/refs/heads/master/production.yml -O transrewrt.yml
# edit the file to add the API_KEYS and adjust the timezone (TZ)
vi transrewrt.yml
# start the container
docker compose -f transrewrt.yml up -d
```

Xem [Configuration](#configuration-and-environment) để biết tất cả các biến môi trường, như `PORT`, `CONFIG_PATH`, `TZ`, và các khóa LLM (`OPENROUTER_API_KEY`, `OPENAI_API_KEY`, …).

<a id="configuring-the-timezone"></a>
### Cấu hình múi giờ

Ngày và giờ trên giao diện người dùng ứng dụng tuân theo múi giờ và khu vực của **trình duyệt**. Đối với **hành vi** ở phía máy chủ (ghi log và các chức năng tương tự), container sử dụng biến môi trường `TZ`. Giá trị mặc định là `TZ=Europe/London`.

Để sử dụng múi giờ khác, hãy thiết lập `TZ` trong tệp Compose của bạn, ví dụ:

```yaml
environment:
  - TZ=America/Sao_Paulo
```

Hoặc truyền khi chạy container (Docker):

```bash
--env TZ=America/Sao_Paulo
```

Trên nhiều máy chủ Linux, bạn có thể sao chép tên múi giờ hệ thống bằng lệnh:

```bash
echo TZ=\"$(</etc/timezone)\"
```

Danh sách các tên múi giờ hợp lệ được duy trì trong [cơ sở dữ liệu tz](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) (Wikipedia).

<br/><br/>

<a id="getting-an-openrouter-api-key"></a>
## Lấy khóa API OpenRouter

Transrewrt hỗ trợ nhiều nhà cung cấp AI. [OpenRouter](https://openrouter.ai) là lựa chọn phổ biến vì tích hợp nhiều mô hình dưới một khóa duy nhất và cung cấp các mô hình miễn phí.

1. Đăng ký hoặc đăng nhập tại [openrouter.ai](https://openrouter.ai).
2. Mở trang [Keys](https://openrouter.ai/keys) và tạo khóa mới (đặt tên, và tùy chọn thiết lập giới hạn tín dụng). Bạn có thể dùng các mô hình miễn phí mà không cần thêm tín dụng.
3. **Desktop (Electron):** dán khóa vào **Cài đặt → API**. **Docker:** thiết lập các biến môi trường như `OPENROUTER_API_KEY` (xem [Quick start](#quick-start)).

Không sử dụng mô hình **Body Builder** của OpenRouter ([`openrouter/bodybuilder`](https://openrouter.ai/openrouter/bodybuilder)) cho các tác vụ dịch, viết lại hoặc chuyển đổi: mô hình này trả về các payload JSON yêu cầu, chứ không phải văn bản hoàn chỉnh cho các tác vụ đó. Xem [Cài đặt → Mô hình](USER-GUIDE.vi.md#models) trong Hướng dẫn Người dùng.

Bạn cũng có thể sử dụng các nhà cung cấp khác (OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras) hoặc chạy mô hình cục bộ bằng [Ollama](https://ollama.com). Xem [Configuration](#configuration-and-environment) để biết danh sách đầy đủ các nhà cung cấp được hỗ trợ và các biến môi trường.

> ⚠️ **CẢNH BÁO**<br/>
> Nếu bạn đang sử dụng Ollama từ một thiết bị, container hoặc dịch vụ khác, hãy nhớ cấu hình Ollama cho phép kết nối từ bên ngoài (không chỉ localhost).

Đối với giới hạn, BYOK và nhiều hơn nữa, hãy xem [xác thực OpenRouter](https://openrouter.ai/docs/api/reference/authentication).

<br/><br/>

<a id="configuration-and-environment"></a>
## Cấu hình và môi trường

**Vị trí tệp cấu hình**

| Triển khai         | Vị trí cấu hình                                   |
| ------------------ | ------------------------------------------------- |
| Electron (Windows) | `%APPDATA%\transrewrt\`                           |
| Electron (Linux)   | `~/.config/transrewrt/`                           |
| Web / Docker       | `/app/data/config.json` (sử dụng volume để lưu trữ) |

<br/>

**Biến môi trường** (chỉ dành cho web/Docker; Electron sử dụng tệp cấu hình cục bộ)

| Biến               | Mặc định                | Mô tả |
| ---------------- | ----------------------- | ----------- |
| `PORT`           | `5000`                  | Cổng lắng nghe của máy chủ |
| `CONFIG_PATH`    | `/app/data/config.json` | Đường dẫn đến tệp cấu hình |
| `TZ`             | `Europe/London`         | Múi giờ IANA cho thời gian phía máy chủ (ghi nhật ký, v.v.); giao diện người dùng vẫn theo trình duyệt. Xem [Docker → múi giờ](#docker-timezone) |
| `OPENROUTER_API_KEY` | *(trống)*               | Khóa API OpenRouter |
| `OPENAI_API_KEY`     | *(trống)*               | Khóa API OpenAI |
| `CEREBRAS_API_KEY`   | *(trống)*               | Khóa API Cerebras |
| `ANTHROPIC_API_KEY`  | *(trống)*               | Khóa API Anthropic |
| `GOOGLE_API_KEY`     | *(trống)*               | Khóa API Google Gemini |
| `DEEPSEEK_API_KEY`   | *(trống)*               | Khóa API DeepSeek |
| `GROQ_API_KEY`       | *(trống)*               | Khóa API Groq |
| `MISTRAL_API_KEY`    | *(trống)*               | Khóa API Mistral |
| `OLLAMA_URL`     | *(trống)*               | URL cơ sở Ollama (ví dụ: `http://host.docker.internal:11434`) |
| `XAI_API_KEY`        | *(trống)*               | Khóa API xAI |

Chỉ cấu hình các nhà cung cấp bạn sử dụng. Các ID mô hình được phân biệt theo không gian tên (`openrouter/…`, `openai/…`, `cerebras/…`, `ollama/…`, v.v.).

**Hiển thị chi phí:** OpenRouter trả về chi phí tính chính xác khi áp dụng. Các nhà cung cấp khác sử dụng **chi phí ước tính** từ bảng giá mô hình công khai của OpenRouter khi có khóa OpenRouter; nếu không, chi phí không phải OpenRouter có thể hiển thị là `0`. Các ước tính không phải là hóa đơn.

<br/>

**Dữ liệu và lưu trữ:** Đối với Docker, gắn một volume vào `/app/data` để `config.json` và cơ sở dữ liệu SQLite được lưu trữ qua các lần khởi động lại container. Nếu không có volume, tất cả dữ liệu sẽ bị mất khi container dừng.

**Lập trình viên:** Sau khi kéo các thay đổi thay thế cấu hình khóa đơn cũ, hãy đặt lại hoặc hợp nhất `data/config.json` với cấu trúc mặc định mới từ `src/config-defaults/config_default.json` nếu tệp cục bộ của bạn vẫn sử dụng các trường đã bị xóa (`api_key`, `api_url`, các tùy chọn proxy).

<br/>

**Xác thực web:**

- Quản trị viên mặc định: `admin` / `transrewrt26`.
- Quản lý người dùng trong **Cài đặt → Người dùng**.
- Đặt lại mật khẩu: `docker exec <container> reset-web-password '<username>' '<new-password>'`
  (từ mã nguồn: `pnpm run reset-web-password -- <username> <new-password>`)

<br/>

> ⚠️ **CẢNH BÁO**<br/>
> Thay đổi mật khẩu quản trị viên mặc định ngay lập tức trên mọi máy chủ có thể truy cập qua mạng.

<br/>

Các cài đặt chính (phông chữ, mô hình, ngôn ngữ, v.v.) có sẵn trong Cài đặt ứng dụng.

<br/><br/>

<a id="development-and-architecture"></a>
## Phát triển và kiến trúc

- **Phát triển:** Thiết lập, xây dựng, thử nghiệm và triển khai (Electron, Web, Docker) - xem **[dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)**.
- **Kiến trúc và tổng quan hệ thống:** Cấu trúc thư mục, công nghệ sử dụng, các quyết định thiết kế - xem **[dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)**.

<br/><br/>

<a id="reporting-issues"></a>
## Báo cáo sự cố

Mở một vấn đề trên [GitHub](https://github.com/wsj-br/transrewrt/issues). Bao gồm nền tảng của bạn (Windows / Linux / Docker) và phiên bản ứng dụng (hiển thị trong hộp thoại Giới thiệu hoặc trên trang Releases).

<br/><br/>

<a id="disclaimer"></a>
## Miễn trừ trách nhiệm

Tên sản phẩm và biểu tượng thuộc về chủ sở hữu tương ứng và chỉ được sử dụng nhằm mục đích nhận dạng. Phần mềm này không liên kết hoặc được bảo trợ bởi bất kỳ thương hiệu nào được đề cập.

<br/><br/>

<a id="license"></a>
## Giấy phép

Bản quyền © 2026 Waldemar Scudeller Jr.

[Apache License 2.0](../LICENSE)
