<p align="center">
  <img src="../images/transrewrt_banner.png" alt="Transrewrt Banner"  />
</p>

<p align="center">
  <a href="https://github.com/wsj-br/transrewrt/releases"><img src="https://img.shields.io/badge/version-1.6.1-blue" alt="Version"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-Apache%202.0-green" alt="License: Apache 2.0"></a>
  <img src="https://img.shields.io/badge/platform-Windows%20%7C%20Linux%20%7C%20Docker-lightgrey" alt="Platform">
</p>

Công cụ văn bản được hỗ trợ bởi AI: **dịch**, **chỉnh sửa lại** và **chuyển đổi** bằng các lời nhắc tùy chỉnh — sử dụng các nhà cung cấp AI của riêng bạn (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras, NVIDIA, Alibaba Cloud, apikey.fun, các điểm cuối tương thích với OpenAI và các máy chủ tương thích với OpenAI cục bộ như Ollama, LM Studio hoặc llama.cpp). Ứng dụng máy tính để bàn (Windows / Linux) hoặc ứng dụng web tự lưu trữ (Docker). Không cần tài khoản đám mây Transrewrt.

| | |
| --- | --- |
| **Dịch** | Hàng chục ngôn ngữ, tự động phát hiện, bảng thuật ngữ, tinh chỉnh bằng cách Diễn giải lại |
| **Viết lại** | Rõ ràng, giọng điệu, độ dài, chính tả & ngữ pháp — cùng ngôn ngữ |
| **Chuyển đổi** | Các lời nhắc AI tùy chỉnh mà bạn tạo, chỉnh sửa và sử dụng lại |
| **Triển khai** | Máy tính để bàn Electron hoặc web Docker (amd64 & arm64) |
| **Khóa** | Các nhà cung cấp của bạn, máy chủ của bạn — Cài đặt sẵn dễ dàng hoặc danh sách mô hình nâng cao |

![Dịch](../images/screenshots/vi/translate.png)

<small>**Đọc bằng các ngôn ngữ khác:** </small>
<small id="lang-list">[English (UK)](../README.md) · [العربية](./README.ar.md) · [简体中文](./README.zh-Hans.md) · [繁體中文](./README.zh-Hant.md) · [Čeština](./README.cs.md) · [Nederlands](./README.nl.md) · [Français](./README.fr.md) · [Deutsch](./README.de.md) · [Ελληνικά](./README.el.md) · [हिन्दी](./README.hi.md) · [Magyar](./README.hu.md) · [Italiano](./README.it.md) · [日本語](./README.ja.md) · [한국어](./README.ko.md) · [فارسی](./README.fa.md) · [Polski](./README.pl.md) · [Português (Brasil)](./README.pt-BR.md) · [Română](./README.ro.md) · [Русский](./README.ru.md) · [Slovenčina](./README.sk.md) · [Español](./README.es.md) · [Svenska](./README.sv.md) · [ไทย](./README.th.md) · [Türkçe](./README.tr.md) · [Українська](./README.uk.md) · [Tiếng Việt](./README.vi.md)</small>

## Bắt đầu nhanh

**Docker**

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest

OPENROUTER_API_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_API_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

Mở [http://localhost:5000](http://localhost:5000) và thay đổi mật khẩu quản trị viên mặc định. Khóa nhà cung cấp được đặt qua các biến môi trường (không phải giao diện người dùng web).

**Windows** — Tải xuống `Transrewrt Setup x.y.z.exe` từ [Bản phát hành](https://github.com/wsj-br/transrewrt/releases), cài đặt, sau đó thêm khóa trong **Cài đặt → API**.

**Linux** — Tải xuống `.AppImage` từ [Bản phát hành](https://github.com/wsj-br/transrewrt/releases), sau đó:

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

Chi tiết nền tảng (Compose, SmartScreen, apt libs, cờ GPU, múi giờ): [Tài liệu bắt đầu nhanh](https://wsj-br.github.io/transrewrt/docs/quick-start/).

## Tài liệu

Tài liệu sản phẩm đầy đủ (cài đặt, khóa API, hướng dẫn, cài đặt, khắc phục sự cố):

**[https://wsj-br.github.io/transrewrt/docs/](https://wsj-br.github.io/transrewrt/docs/)**

- [Khóa API](https://wsj-br.github.io/transrewrt/docs/api-key/)
- [Cấu hình](https://wsj-br.github.io/transrewrt/docs/configuration/)
- [Dịch](https://wsj-br.github.io/transrewrt/docs/translate/) · [Viết lại](https://wsj-br.github.io/transrewrt/docs/rewrite/) · [Chuyển đổi](https://wsj-br.github.io/transrewrt/docs/transform/)
- [Các vấn đề thường gặp](https://wsj-br.github.io/transrewrt/docs/common-issues/)

## Phát triển

- Thiết lập, xây dựng, kiểm tra, triển khai: [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)
- Tổng quan kiến trúc: [dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)

## Hỗ trợ

Mở một vấn đề trên [GitHub](https://github.com/wsj-br/transrewrt/issues). Bao gồm nền tảng của bạn (Windows / Linux / Docker) và phiên bản ứng dụng (hộp thoại Giới thiệu hoặc trang Bản phát hành).

## Giấy phép

Bản quyền © 2026 Waldemar Scudeller Jr.

[Apache License 2.0](../LICENSE)

Tên sản phẩm và biểu tượng thuộc về chủ sở hữu tương ứng và chỉ được sử dụng để nhận dạng. Phần mềm này không liên kết hoặc được xác nhận bởi các thương hiệu đó.

<small>

> **Lưu ý về bản dịch giao diện người dùng và tài liệu:** Tất cả các ngôn ngữ giao diện và tài liệu, ngoại trừ tiếng Anh gốc, đều được dịch bằng các mô hình AI sử dụng [ai-i18n-tools](https://wsj-br.github.io/ai-i18n-tools/); 
> cách diễn đạt có thể không chính xác hoặc chứa lỗi.

</small>
