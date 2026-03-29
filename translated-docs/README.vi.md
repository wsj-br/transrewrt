---
translated_at: "2026-03-28T23:09:14.205Z"
source_hash: "e9ea44c8ee71135cfaa88417e93be66dde6feae3d1970ce7c2ff555de1fc3376"
source_mtime: "2026-03-28T22:34:35.283Z"
model: "qwen/qwen3-235b-a22b-2507"
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

Công cụ xử lý văn bản dựa trên AI: dịch giữa các ngôn ngữ, viết lại theo nhiều phong cách khác nhau và biến đổi văn bản bằng lời nhắc tùy chỉnh — sử dụng nhiều nhà cung cấp AI (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI và Ollama cục bộ). Chạy dưới dạng ứng dụng máy tính để bàn (Electron) hoặc ứng dụng web tự lưu trữ (Docker).

- **Dịch** — giữa hàng chục ngôn ngữ, có phát hiện ngôn ngữ nguồn tự động  
- **Viết lại** — sửa ngữ pháp, cải thiện tính rõ ràng, trang trọng/thân mật, rút gọn, mở rộng, kỹ thuật  
- **Biến đổi** — lời nhắc AI tùy chỉnh; tạo và quản lý lời nhắc, ngôn ngữ đích tùy chọn theo từng lời nhắc  
- **Lịch sử** — lịch sử thực thi đầy đủ với văn bản đầu vào/đầu ra, lọc và xuất dữ liệu  
- **Mô hình & chi phí** — chọn mô hình từ bất kỳ nhà cung cấp nào đã cấu hình; bảng điều khiển chi phí và mức sử dụng kèm nhật ký, tóm tắt theo mô hình/thao tác/ngày  
- **Giao diện người dùng** — giao diện đa ngôn ngữ (hơn 30 ngôn ngữ, hỗ trợ RTL), phông chữ, ...  
- **Chế độ web** — hỗ trợ nhiều người dùng với vai trò quản trị viên  
- **Bản dành cho máy tính để bàn** — ứng dụng Electron cho Windows và Linux  
- **Tự lưu trữ** — hình ảnh Docker dành cho amd64 & arm64 (sẵn sàng dùng với Raspberry Pi)  

Sau khi cài đặt, hãy xem **[Hướng dẫn người dùng](USER-GUIDE.vi.md)** để tìm hiểu chi tiết toàn bộ các tính năng.

<small id="lang-list"> [English (UK)](../README.md) · [Português (BR)](README.pt-BR.md) · [العربية](README.ar.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [Hrvatski](README.hr.md) · [Čeština](README.cs.md) · [Nederlands](README.nl.md) · [English (US)](README.en-US.md) · [Filipino](README.tl.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [हिन्दी](README.hi.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [Basa Jawa](README.jv.md) · [한국어](README.ko.md) · [Bahasa Melayu](README.ms.md) · [فارسی](README.fa.md) · [Polski](README.pl.md) · [Português (PT)](README.pt.md) · [ਪੰਜਾਬੀ](README.pa.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [Slovenčina](README.sk.md) · [Español](README.es.md) · [Kiswahili](README.sw.md) · [Svenska](README.sv.md) · [తెలుగు](README.te.md) · [ภาษาไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Tiếng Việt](README.vi.md)</small>

<small id="lang-list"> [English (UK)](../README.md) · [Português (BR)](README.pt-BR.md) · [العربية](README.ar.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [Hrvatski](README.hr.md) · [Čeština](README.cs.md) · [Nederlands](README.nl.md) · [English (US)](README.en-US.md) · [Filipino](README.tl.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [हिन्दी](README.hi.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [Basa Jawa](README.jv.md) · [한국어](README.ko.md) · [Bahasa Melayu](README.ms.md) · [فارسی](README.fa.md) · [Polski](README.pl.md) · [Português (PT)](README.pt-PT.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [Slovenčina](README.sk.md) · [Srpski](README.sr-Cyrl.md) · [Español](README.es.md) · [Svenska](README.sv.md) · [Kiswahili](README.sw.md) · [ไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Tiếng Việt](README.vi.md) · [Zulu](README.zu.md) </small>

E.pl.md) · [Português (PT)](README.pt.md) · [ਪੰਜਾਬੀ](README.pa.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [Slovenčina](README.sk.md) · [Español](README.es.md) · [Kiswahili](README.sw.md) · [Svenska](README.sv.md) · [తెలుగు](README.te.md) · [ภาษาไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Tiếng Việt](README.vi.md)</small>

<small>

> **Lưu ý về bản dịch giao diện người dùng và tài liệu hướng dẫn:** Tất cả các ngôn ngữ giao diện ngoại trừ tiếng Anh (Anh Quốc) gốc đều được dịch bằng các mô hình trí tuệ nhân tạo; cách diễn đạt có thể không chính xác hoặc chứa lỗi.

</small>

<br/>

<a id="screenshots"></a>

## Hình ảnh chụp màn hình

**Bộ chọn ngôn ngữ**

![Bộ chọn ngôn ngữ](../images/screenshots/vi/language-selector.png)

**Dịch**

![Dịch](../images/screenshots/vi/translate.png)

**Chuyển đổi - trình soạn thảo lời nhắc**

![Chuyển đổi - trình soạn thảo lời nhắc](../images/screenshots/vi/transform-prompt-edit.png)

**Bảng điều khiển**

![Bảng điều khiển - tổng quan sử dụng](../images/screenshots/vi/dashboard-summary.png)

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
- [Báo cáo sự cố](#reporting-issues)
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
> Khi dùng Docker, thông tin đăng nhập LLM được thiết lập thông qua các biến môi trường như `OPENROUTER_API_KEY`, `OPENAI_API_KEY`, `CEREBRAS_API_KEY`, … (không đặt trong giao diện web). Trên máy tính (Electron), bạn cấu hình khóa tại **Cài đặt → API**.

<br/>

**Windows**

Tải xuống tệp cài đặt mới nhất `Transrewrt Setup x.y.z.exe` từ [Phát hành](https://github.com/wsj-br/transrewrt/releases), chạy chương trình cài đặt, sau đó khởi chạy từ menu Bắt đầu hoặc biểu tượng lối tắt trên màn hình desktop. Nhập khóa API của bạn vào **Cài đặt → API**. Bạn cần cấu hình ít nhất một nhà cung cấp, OpenRouter là lựa chọn phổ biến cho các mô hình miễn phí.

<br/>

**Linux**

Tải xuống tệp `.AppImage` phù hợp với bộ vi xử lý của bạn từ [Phát hành](https://github.com/wsj-br/transrewrt/releases) (`x64` cho máy tính cá nhân thông thường, `arm64` cho nhiều thiết bị ARM, bao gồm Raspberry Pi 4+), sau đó thực hiện:

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

Nhập khóa API của bạn vào **Cài đặt → API**. Bạn cần cấu hình ít nhất một nhà cung cấp, OpenRouter là lựa chọn phổ biến cho các mô hình miễn phí.

Trên Debian/Ubuntu, bạn có thể cần cài đặt các gói phụ trợ trước:

```bash
sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth
```

Xem phần [Cài đặt → Linux](#linux-electron) để biết thêm chi tiết.

<br/>

> ℹ️ **LƯU Ý**<br/>

> macOS hiện chưa được hỗ trợ. Transrewrt có sẵn cho Windows, Linux và Docker.

<br/>

Sau khi ứng dụng đã chạy, hãy xem phần **[Hướng dẫn sử dụng](USER-GUIDE.vi.md)** để tìm hiểu cách dịch, viết lại và biến đổi văn bản, quản lý lời nhắc (prompt), cũng như cấu hình các mô hình.

<br/><br/>

<a id="installation"></a>

## Cài đặt

<a id="windows-electron"></a>

### Windows (Electron)

- Tải xuống trình cài đặt mới nhất từ [Phát hành](https://github.com/wsj-br/transrewrt/releases).
- Chạy tệp `.exe` và làm theo hướng dẫn cài đặt.
- Lần chạy đầu tiên: khởi động ứng dụng từ menu Bắt đầu hoặc biểu tượng lối tắt trên màn hình桌面.

<br/>

> ℹ️ **LƯU Ý**<br/>
> Windows có thể hiển thị một trong các cảnh báo bảo mật sau (bình thường với các ứng dụng không ký hoặc độc lập):
>   - **Kiểm soát Tài khoản Người dùng (UAC)**: "Bạn có muốn cho phép ứng dụng này từ nhà xuất bản không xác định thực hiện thay đổi trên thiết bị của bạn không?" → Nhấp **Có**.
>   - **Microsoft Defender SmartScreen**: "Windows đã bảo vệ PC của bạn" → Nhấp **Thông tin thêm** → **Vẫn chạy**.
>
> Điều này xảy ra vì ứng dụng chưa được ký bởi Microsoft hoặc nhà xuất bản lớn — ứng dụng là an toàn nếu bạn tải xuống từ trang phát hành chính thức trên GitHub của chúng tôi
> (xác minh mã băm SHA256 bên dưới).

<br/>

<a id="linux-electron"></a>

### Linux (Electron)

- Tải tệp `.AppImage` phù hợp (`x64` hoặc `arm64`) từ [Releases](https://github.com/wsj-br/transrewrt/releases).
- Chạy lệnh: `chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage` trên x86_64/amd64, hoặc sử dụng tên tệp `...-arm64.AppImage` trên ARM64.
- Các phụ thuộc bổ sung (Debian/Ubuntu): `sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth`
- Xem thêm tại [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md).

<br/>

<a id="docker"></a>

### Docker

- Tải về: `docker pull ghcr.io/wsj-br/transrewrt:latest`
- Thiết lập ít nhất một khóa nhà cung cấp qua biến môi trường (ví dụ: `OPENROUTER_API_KEY` cho OpenRouter). Truyền các biến này bằng `-e` hoặc `docker compose` / `.env` để đảm bảo bí mật không bị nhúng vào trong image.
- Các khóa nhà cung cấp **không** được nhập vào giao diện người dùng web; máy chủ sẽ đọc chúng từ môi trường.

Ví dụ - sử dụng volume có tên để lưu trữ dữ liệu (khóa OpenRouter qua biến môi trường):

```bash
OPENROUTER_API_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_API_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

hoặc nếu bạn muốn dùng Docker Compose, hãy dùng:

```bash
# tải file compose về
wget https://github.com/wsj-br/transrewrt/raw/refs/heads/master/production.yml -O transrewrt.yml
# chỉnh sửa file để thêm API_KEYS
vi transrewrt.yml
# khởi động container
docker compose -f transrewrt.yml up -d
```

<br/>

| Tùy chọn | Mô tả                                                                                                                            |
|----------|----------------------------------------------------------------------------------------------------------------------------------------|
| Cổng     | `5000` (ánh xạ bằng `-p 5000:5000`)                                                                                                       |
| Volume   | Gán thư mục `/app/data` để lưu cấu hình và cơ sở dữ liệu                                                                               |
| Biến môi trường | `PORT`, `CONFIG_PATH`, và các khóa LLM (`OPENROUTER_API_KEY`, `OPENAI_API_KEY`, …) - xem [Cấu hình](#configuration-and-environment) |

Để biên dịch và chạy từ mã nguồn: `docker compose up --build -d` hoặc `pnpm docker:up` - xem [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md).

<br/><br/>

<a id="getting-an-openrouter-api-key"></a>

## Lấy khóa API OpenRouter

Transrewrt hỗ trợ nhiều nhà cung cấp AI. [OpenRouter](https://openrouter.ai) là một lựa chọn phổ biến vì dịch vụ này tích hợp nhiều mô hình dưới một khóa duy nhất và cung cấp các mô hình miễn phí.

1. Đăng ký hoặc đăng nhập tại [openrouter.ai](https://openrouter.ai).
2. Truy cập trang [Keys](https://openrouter.ai/keys) và tạo một khóa mới (đặt tên, và tùy chọn thiết lập giới hạn tín dụng). Bạn có thể sử dụng các mô hình miễn phí mà không cần thêm tín dụng.
3. **Bản máy tính (Electron):** dán khóa vào **Cài đặt → API**. **Docker:** đặt các biến môi trường như `OPENROUTER_API_KEY` (xem [Bắt đầu nhanh](#quick-start)).

Không sử dụng mô hình **Body Builder** của OpenRouter ([`openrouter/bodybuilder`](https://openrouter.ai/openrouter/bodybuilder)) cho các tác vụ dịch, viết lại hoặc chuyển đổi: mô hình này trả về nội dung yêu cầu dưới dạng JSON, chứ không phải văn bản hoàn chỉnh cho các tác vụ đó. Xem mục [Cài đặt → Mô hình](USER-GUIDE.vi.md#models) trong Hướng dẫn người dùng.

Bạn cũng có thể sử dụng các nhà cung cấp khác (OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras) hoặc chạy mô hình cục bộ bằng [Ollama](https://ollama.com). Xem [Cấu hình](#configuration-and-environment) để biết danh sách đầy đủ các nhà cung cấp được hỗ trợ và các biến môi trường.

> ⚠️ **CẢNH BÁO**<br/>
> Nếu bạn đang sử dụng Ollama từ một thiết bị, container hoặc dịch vụ khác, hãy nhớ cấu hình Ollama để cho phép kết nối từ bên ngoài (không chỉ localhost).

Để biết về giới hạn, BYOK và các thông tin khác, hãy xem [xác thực OpenRouter](https://openrouter.ai/docs/api/reference/authentication).

<br/><br/>

<a id="configuration-and-environment"></a>

## Cấu hình và môi trường

**Vị trí tệp cấu hình**

| Triển khai          | Vị trí cấu hình                                   |
| ------------------ | ------------------------------------------------- |
| Electron (Windows) | `%APPDATA%\transrewrt\`                           |
| Electron (Linux)   | `~/.config/transrewrt/`                           |
| Web / Docker       | `/app/data/config.json` (sử dụng volume để lưu trữ) |

<br/>

**Biến môi trường** (chỉ dùng cho web/Docker; Electron sử dụng tệp cấu hình cục bộ)

| Biến               | Mặc định                | Mô tả |
| ------------------ | ----------------------- | ----- |
| `PORT`             | `5000`                  | Cổng lắng nghe của máy chủ |
| `CONFIG_PATH`      | `/app/data/config.json` | Đường dẫn đến tệp cấu hình |
| `OPENROUTER_API_KEY` | *(trống)*                | Khóa API OpenRouter |
| `OPENAI_API_KEY`     | *(trống)*                | Khóa API OpenAI |
| `CEREBRAS_API_KEY`   | *(trống)*                | Khóa API Cerebras |

| `ANTHROPIC_API_KEY`  | *(trống)*               | Khóa API Anthropic |
| `GOOGLE_API_KEY`     | *(trống)*               | Khóa API Google Gemini |
| `DEEPSEEK_API_KEY`   | *(trống)*               | Khóa API DeepSeek |
| `GROQ_API_KEY`       | *(trống)*               | Khóa API Groq |
| `MISTRAL_API_KEY`    | *(trống)*               | Khóa API Mistral |
| `OLLAMA_URL`         | *(trống)*               | URL gốc của Ollama (ví dụ: `http://host.docker.internal:11434`) |
| `XAI_API_KEY`        | *(trống)*               | Khóa API xAI |

Chỉ cấu hình những nhà cung cấp bạn sử dụng. Các ID mô hình được phân biệt theo namespace (`openrouter/…`, `openai/…`, `cerebras/…`, `ollama/…`, v.v.).

**Hiển thị chi phí:** OpenRouter trả về chi phí tính chính xác khi có thể. Các nhà cung cấp khác sử dụng chi phí **ước tính** từ bảng giá mô hình công khai của OpenRouter nếu có sẵn khóa OpenRouter; nếu không, chi phí của nhà cung cấp không phải OpenRouter có thể hiển thị là `0`. Các ước tính này không phải là hóa đơn.

<br/>

**Dữ liệu và lưu trữ:** Đối với Docker, hãy gắn một volume tại `/app/data` để `config.json` và cơ sở dữ liệu SQLite có thể được lưu trữ qua các lần khởi động lại container. Nếu không có volume, toàn bộ dữ liệu sẽ bị mất khi container dừng.

**Lập trình viên:** Sau khi lấy các thay đổi thay thế cấu hình đơn key cũ, hãy đặt lại hoặc gộp `data/config.json` với cấu trúc mặc định mới từ `src/config-defaults/config_default.json` nếu tập tin cục bộ của bạn vẫn đang dùng các trường đã bị xóa (`api_key`, `api_url`, các tùy chọn proxy).

<br/>

**Xác thực web:**

- Quản trị viên mặc định: `admin` / `transrewrt26`.
- Quản lý người dùng tại **Cài đặt → Người dùng**.
- Đặt lại mật khẩu: `docker exec <container> reset-web-password '<username>' '<new-password>'`  
  (từ mã nguồn: `pnpm run reset-web-password -- <username> <new-password>`)

<br/>

> ⚠️ **CẢNH BÁO**<br/>
> Hãy thay đổi mật khẩu quản trị mặc định ngay lập tức trên mọi máy chủ có khả năng truy cập mạng.

<br/>

Các cài đặt quan trọng (phông chữ, mô hình, ngôn ngữ, v.v.) có thể được cấu hình trong phần Cài đặt của ứng dụng.

<br/><br/>

<a id="development-and-architecture"></a>

## Phát triển và kiến trúc

- **Phát triển:** Thiết lập, xây dựng, kiểm thử và triển khai (Electron, Web, Docker) - xem **[dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)**.
- **Kiến trúc và tổng quan hệ thống:** Cấu trúc thư mục, công nghệ sử dụng, các quyết định thiết kế - xem **[dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)**.

<br/><br/>

<a id="reporting-issues"></a>

## Báo cáo sự cố

Tạo một vấn đề trên [GitHub](https://github.com/wsj-br/transrewrt/issues). Vui lòng cung cấp hệ điều hành của bạn (Windows / Linux / Docker) và phiên bản ứng dụng (hiển thị trong hộp thoại Giới thiệu hoặc trên trang Phát hành).

<br/><br/>

<a id="disclaimer"></a>

## Thông báo miễn trừ trách nhiệm

Tên sản phẩm và biểu tượng thuộc về chủ sở hữu tương ứng và chỉ được sử dụng nhằm mục đích nhận dạng. Phần mềm này không liên kết hay được sự bảo trợ bởi bất kỳ thương hiệu nào được đề cập ở đây.

<br/><br/>

<a id="license"></a>

## Giấy phép

Bản quyền © 2026 Waldemar Scudeller Jr.

[Giấy phép Apache 2.0](LICENSE)