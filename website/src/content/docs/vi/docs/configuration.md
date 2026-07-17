---
title: Cấu hình
description: Vị trí tệp cấu hình, biến môi trường Docker, chế độ riêng tư và xác thực web.
translation_last_updated: '2026-07-17T21:14:50.993Z'
source_file_mtime: '2026-07-17T14:43:44.727Z'
source_file_hash: 8c3b2c00eddcee7693d66c5f5955c2d2186e55de630886446764bc6b798f05b5
translation_language: vi
source_file_path: src/content/docs/docs/configuration.md
translation_models:
  - google/gemini-2.5-flash
---



## Vị trí tệp cấu hình

| Triển khai | Vị trí cấu hình |
| --- | --- |
| Electron (Windows) | `%APPDATA%\transrewrt\` |
| Electron (Linux) | `~/.config/transrewrt/` |
| Web / Docker | `/app/data/config.json` (sử dụng một volume để duy trì) |

## Biến môi trường (web / Docker)

Electron sử dụng tệp cấu hình cục bộ. Chỉ dành cho máy chủ web/Docker:

| Biến | Mô tả |
| --- | --- |
| `PORT` | Cổng nghe của máy chủ (mặc định `5000`) |
| `CONFIG_PATH` | Đường dẫn đến tệp cấu hình (mặc định `/app/data/config.json`) |
| `TZ` | Múi giờ cho thời gian phía máy chủ (mặc định `Europe/London`) |
| `HISTORY_DISABLED` | Buộc tắt lịch sử thực thi (`true` / `1`) |
| `OPENROUTER_API_KEY` | Khóa API OpenRouter |
| `OPENAI_API_KEY` | Khóa API OpenAI |
| `CEREBRAS_API_KEY` | Khóa API Cerebras |
| `ANTHROPIC_API_KEY` | Khóa API Anthropic |
| `GOOGLE_API_KEY` | Khóa API Google Gemini |
| `DEEPSEEK_API_KEY` | Khóa API DeepSeek |
| `GROQ_API_KEY` | Khóa API Groq |
| `MISTRAL_API_KEY` | Khóa API Mistral |
| `LOCAL_LLM_URL` | URL cơ sở API tương thích OpenAI đầy đủ cho máy chủ cục bộ (bao gồm đường dẫn, ví dụ: Ollama `http://host.docker.internal:11434/v1`, LM Studio `http://host.docker.internal:1234/v1`) |
| `XAI_API_KEY` | Khóa API xAI |
| `NVIDIA_API_KEY` | Khóa API NVIDIA |
| `ALIBABA_API_KEY` | Khóa API Alibaba Cloud (DashScope) |
| `APIFUN_API_KEY` | Khóa API apikey.fun |
| `CUSTOM_PROVIDER_NAME` | Tên hiển thị cho nhà cung cấp tương thích OpenAI tùy chỉnh |
| `CUSTOM_PROVIDER_URL` | URL cơ sở cho nhà cung cấp tương thích OpenAI tùy chỉnh |
| `CUSTOM_PROVIDER_API_KEY` | Khóa API cho nhà cung cấp tùy chỉnh |

Cả ba biến `CUSTOM_PROVIDER_*` đều bắt buộc khi sử dụng một điểm cuối tùy chỉnh. Các mô hình xuất hiện trong chế độ **Nâng cao** dưới dạng `{providerName}/…`.

## Chế độ riêng tư

Đặt `HISTORY_DISABLED` thành `true` hoặc `1` trên tiến trình máy chủ web/Docker và/hoặc tiến trình chính của Electron để buộc tắt lịch sử bất kể `config.json` hoặc tùy chọn của từng người dùng. Điều này vô hiệu hóa việc lưu trữ lịch sử nhập/xuất, khóa **Cài đặt → Cài đặt chung → Lịch sử** và chặn các API liên quan đến Lịch sử.

## Duy trì dữ liệu (Docker)

Gắn một ổ đĩa tại `/app/data` để `config.json` và cơ sở dữ liệu SQLite tồn tại sau khi khởi động lại vùng chứa. Nếu không có ổ đĩa, dữ liệu sẽ bị mất khi vùng chứa dừng.

## Xác thực web

- Quản trị viên mặc định: `admin` / `transrewrt26`
- Quản lý người dùng trong **Cài đặt → Người dùng**
- Đặt lại mật khẩu:

```bash
docker exec <container> reset-web-password '<username>' '<new-password>'
```

:::danger
Thay đổi mật khẩu quản trị viên mặc định ngay lập tức trên bất kỳ máy chủ nào có thể truy cập mạng.
:::

## Hiển thị chi phí

OpenRouter trả về chi phí được lập hóa đơn chính xác khi áp dụng. Các nhà cung cấp khác sử dụng chi phí **ước tính** từ giá mô hình công khai của OpenRouter khi có khóa OpenRouter. Ước tính không phải là hóa đơn.

Để biết về Giao diện người dùng Cài đặt (phông chữ, mô hình, lịch sử, sao lưu), hãy xem [Cài đặt](/docs/settings/).
