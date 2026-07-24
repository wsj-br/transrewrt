---
title: Cấu hình
description: Vị trí tệp cấu hình, biến môi trường Docker, chế độ riêng tư và xác thực web.
---



## Vị trí tệp cấu hình

| Triển khai | Thư mục dữ liệu |
| --- | --- |
| Electron (Windows) | `%APPDATA%\transrewrt\` |
| Electron (Linux) | `~/.config/transrewrt/` |
| Web / Docker | `/app/data/` (sử dụng một volume để duy trì) |

Thư mục dữ liệu chứa mọi thứ đáng sao lưu:

- `config.json` — cài đặt và khóa API được mã hóa (máy tính để bàn)
- `state.json` — ngôn ngữ, mô hình và trạng thái xem được sử dụng gần đây nhất
- `presets.json` — danh mục cài đặt sẵn chế độ Easy được lưu trong bộ nhớ cache
- `transrewrt.db` — cơ sở dữ liệu SQLite với lịch sử, chi phí, lời nhắc, bảng chú giải và người dùng (web)

Bạn cũng có thể tạo bản sao lưu ZIP di động từ ứng dụng — xem [Cài đặt → Cài đặt chung](/docs/settings/#general-settings).

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
| `LOCAL_LLM_URL` | URL cơ sở API tương thích với OpenAI đầy đủ cho máy chủ cục bộ, bao gồm đường dẫn (ví dụ: Ollama `http://host.docker.internal:11434/v1`, LM Studio `http://host.docker.internal:1234/v1`) |
| `XAI_API_KEY` | Khóa API xAI |
| `NVIDIA_API_KEY` | Khóa API NVIDIA |
| `ALIBABA_API_KEY` | Khóa API Alibaba Cloud (DashScope) |
| `APIFUN_API_KEY` | Khóa API apikey.fun |
| `CUSTOM_PROVIDER_NAME` | Tên hiển thị cho nhà cung cấp tương thích OpenAI tùy chỉnh |
| `CUSTOM_PROVIDER_URL` | URL cơ sở cho nhà cung cấp tương thích OpenAI tùy chỉnh |
| `CUSTOM_PROVIDER_API_KEY` | Khóa API cho nhà cung cấp tùy chỉnh |

Cả ba biến `CUSTOM_PROVIDER_*` đều bắt buộc khi sử dụng điểm cuối tùy chỉnh. Các mô hình xuất hiện trong chế độ **Nâng cao** dưới dạng `{providerName}/…`.

## Biến môi trường (máy tính để bàn)

| Biến | Mô tả |
| --- | --- |
| `TRANSREWRT_DISABLE_GPU` | Đặt thành `1` để tắt tăng tốc phần cứng (hữu ích khi Chromium in lỗi GPU / EGL trên Linux) |
| `HISTORY_DISABLED` | Buộc tắt lịch sử thực thi (`true` / `1`) — xem [Chế độ riêng tư](#privacy-mode) |

## Chế độ riêng tư

Đặt `HISTORY_DISABLED` thành `true` hoặc `1` trên tiến trình máy chủ web/Docker và/hoặc tiến trình chính Electron để buộc tắt lịch sử bất kể `config.json` hoặc tùy chọn của từng người dùng. Điều này vô hiệu hóa việc lưu trữ lịch sử nhập/xuất, khóa **Cài đặt → Cài đặt chung → Lịch sử** và chặn các API liên quan đến Lịch sử.

## Duy trì dữ liệu (Docker)

Gắn một ổ đĩa tại `/app/data` để các tệp cấu hình và cơ sở dữ liệu SQLite (xem [Vị trí tệp cấu hình](#config-file-locations)) tồn tại sau khi khởi động lại vùng chứa. Nếu không có ổ đĩa, dữ liệu sẽ bị mất khi vùng chứa dừng.

## Xác thực web

- Quản trị viên mặc định: `admin` / `transrewrt26`
- Quản lý người dùng, thời gian chờ phiên và thu hồi phiên trong **Cài đặt → Người dùng** — xem [Cài đặt](/docs/settings/#users)
- Mỗi người dùng đã đăng nhập có thể thay đổi mật khẩu của mình hoặc đăng xuất khỏi menu người dùng ở cuối thanh bên
- Đặt lại mật khẩu:

```bash
docker exec <container> reset-web-password '<username>' '<new-password>'
```

:::danger
Thay đổi mật khẩu quản trị viên mặc định ngay lập tức trên bất kỳ máy chủ nào có thể truy cập mạng.
:::

:::caution
Máy chủ sử dụng HTTP thuần túy. Nếu bạn để máy chủ hiển thị ra bên ngoài localhost hoặc mạng đáng tin cậy, hãy đặt máy chủ phía sau một proxy ngược với HTTPS (ví dụ: Caddy, nginx hoặc Traefik) để mật khẩu và văn bản không được gửi dưới dạng rõ ràng.
:::

## Hiển thị chi phí

OpenRouter trả về chi phí được lập hóa đơn chính xác khi áp dụng. Các nhà cung cấp khác sử dụng chi phí **ước tính** từ giá mô hình công khai của OpenRouter khi có khóa OpenRouter. Ước tính không phải là hóa đơn.

Để biết giao diện người dùng Cài đặt (phông chữ, mô hình, lịch sử, sao lưu), hãy xem [Cài đặt](/docs/settings/).
