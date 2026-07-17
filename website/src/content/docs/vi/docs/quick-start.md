---
title: Bắt đầu nhanh
description: >-
  Cài đặt Transrewrt trên Windows hoặc Linux, hoặc chạy ứng dụng web Docker tự
  lưu trữ.
---



Chọn đường dẫn phù hợp với bạn. Tất cả đều miễn phí và mã nguồn mở (Apache 2.0).

## Docker (web tự lưu trữ)

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest

PROVIDER_API_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e PROVIDER_API_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

Thay thế `PROVIDER_API_KEY=sk-or-your-key` bằng khóa API của bạn từ nhà cung cấp đã chọn (xem các tùy chọn được hỗ trợ trong [Cấu hình](/docs/configuration/)).

Sau đó mở [http://localhost:5000](http://localhost:5000) và **thay đổi mật khẩu quản trị mặc định** trước khi hiển thị dịch vụ.

:::caution
Trong Docker, thông tin xác thực LLM được đặt bằng các biến môi trường (ví dụ: `PROVIDER_API_KEY`). Chúng **không** được nhập vào giao diện người dùng web. Trên máy tính để bàn, bạn định cấu hình khóa trong **Cài đặt → API**.
:::

### Docker Compose

```bash
wget https://github.com/wsj-br/transrewrt/raw/refs/heads/master/production.yml -O transrewrt.yml
# Edit the file to add your API keys, or use a `.env` file. Set TZ if needed.
docker compose -f transrewrt.yml up -d
```

## Windows

1. Tải xuống `Transrewrt Setup x.y.z.exe` mới nhất từ [Bản phát hành](https://github.com/wsj-br/transrewrt/releases).
2. Chạy trình cài đặt.
3. Mở ứng dụng và nhập khóa API trong **Cài đặt → API**. Định cấu hình ít nhất một nhà cung cấp; OpenRouter là một lựa chọn phổ biến cho các mô hình miễn phí.

:::note
Windows có thể hiển thị cảnh báo UAC hoặc SmartScreen cho các ứng dụng độc lập không có chữ ký. Ưu tiên tải xuống từ trang GitHub Releases chính thức và xác minh tổng kiểm tra khi được xuất bản.
:::

## Linux

Tải xuống `.AppImage` cho CPU của bạn từ [Bản phát hành](https://github.com/wsj-br/transrewrt/releases) (`x64` hoặc `arm64`, bao gồm Raspberry Pi 4+):

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

Nhập khóa API trong **Cài đặt → API**.

Nếu Chromium in lỗi GPU / EGL nhưng ứng dụng vẫn hoạt động, bạn có thể tắt tăng tốc phần cứng:

```bash
TRANSREWRT_DISABLE_GPU=1 ./Transrewrt-x.y.z-arm64.AppImage
```

:::note
macOS hiện không được hỗ trợ. Transrewrt có sẵn cho Windows, Linux và Docker.
:::

## Các bước tiếp theo

1. [Lấy khóa API](/docs/api-key/)
2. Chạy bản dịch đơn giản để xác nhận mọi thứ hoạt động
3. Đọc các hướng dẫn [Dịch](/docs/translate/), [Viết lại](/docs/rewrite/) và [Chuyển đổi](/docs/transform/)
