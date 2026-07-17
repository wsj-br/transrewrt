---
title: Khóa API
description: >-
  Nhận khóa API OpenRouter miễn phí và kết nối các nhà cung cấp AI khác với
  Transrewrt.
translation_last_updated: '2026-07-17T14:59:05.585Z'
source_file_mtime: '2026-07-17T14:58:48.569Z'
source_file_hash: 540c5b2b785355828a421293195b23c2fec98502888d607638fbb33f93970a2a
translation_language: vi
source_file_path: src/content/docs/docs/api-key.md
translation_models:
  - google/gemini-2.5-flash
  - meta-llama/llama-3.3-70b-instruct
---



Transrewrt cần truy cập ít nhất một nhà cung cấp AI. Bạn **không** cần mô hình trả phí để bắt đầu: OpenRouter cung cấp các mô hình miễn phí sau khi bạn thêm khóa và một số nhà cung cấp khác cũng cung cấp các gói miễn phí.

Các nhà cung cấp được hỗ trợ bao gồm [OpenRouter](https://openrouter.ai), OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras, NVIDIA, Alibaba Cloud, apikey.fun, bất kỳ điểm cuối tương thích OpenAI nào và các máy chủ tương thích OpenAI cục bộ (Ollama, LM Studio, llama.cpp và các máy chủ tương tự).

## Dễ dàng so với Nâng cao

- Chế độ **Dễ** (mặc định): chọn một **cài đặt trước** (Miễn phí (OpenRouter), Tiêu chuẩn, Nâng cao hoặc Kỹ thuật) được ánh xạ tới một **nhà cung cấp**. Chỉ các cài đặt trước có ánh xạ cho nhà cung cấp hiện tại mới xuất hiện.
- Chế độ **Nâng cao**: chọn trực tiếp các mô hình. ID mô hình sử dụng tiền tố nhà cung cấp (ví dụ: `openrouter/…`, `openai/…`, `local/…`).

## Khóa OpenRouter miễn phí (máy tính để bàn)

1. Truy cập [openrouter.ai](https://openrouter.ai) và đăng ký hoặc đăng nhập.
2. Mở trang [Khóa](https://openrouter.ai/keys) và tạo khóa mới (đặt tên; giới hạn tín dụng tùy chọn). Bạn có thể sử dụng các mô hình miễn phí mà không cần thêm tín dụng.
3. Trong Transrewrt, mở **Cài đặt → Cấu hình API**, dán khóa vào **Khóa API OpenRouter** và nhấp vào **Kiểm tra khóa OpenRouter**.

:::caution
Không sử dụng mô hình **Body Builder** của OpenRouter (`openrouter/bodybuilder`) để dịch, viết lại hoặc chuyển đổi — nó trả về các tải trọng yêu cầu JSON, không phải văn bản đã hoàn thành.
:::

## Các tùy chọn miễn phí khác

Bạn cũng có thể nhận khóa API miễn phí từ Cerebras, Google, Groq, Mistral AI hoặc [NVIDIA](https://build.nvidia.com/) (API tương thích với OpenAI) hoặc chạy các mô hình cục bộ bằng Ollama, LM Studio, llama.cpp hoặc một máy chủ tương thích với OpenAI khác (ví dụ: `translategemma:4b` qua Ollama). Đặt URL cơ sở LLM cục bộ thành cơ sở API đầy đủ (bao gồm đường dẫn, ví dụ: `http://localhost:11434/v1`) trong Cài đặt (máy tính để bàn) hoặc `LOCAL_LLM_URL` (Docker).

:::caution
Nếu bạn sử dụng máy chủ LLM cục bộ từ một thiết bị hoặc vùng chứa khác, hãy cấu hình nó để cho phép các kết nối bên ngoài (không chỉ localhost).
:::

## Docker / web

Đặt khóa nhà cung cấp làm **biến môi trường** trên máy chủ (ví dụ: `PROVIDER_API_KEY`). Người dùng không thể nhập khóa vào giao diện người dùng trình duyệt. Xem [Cấu hình](/docs/configuration/).

## Danh sách kiểm tra lần chạy đầu tiên

1. Mở ứng dụng và đặt **Ngôn ngữ giao diện** nếu cần.
2. Thêm và kiểm tra ít nhất một khóa nhà cung cấp (máy tính để bàn) hoặc xác nhận máy chủ có các khóa môi trường (web).
3. Trong chế độ **Dễ**, chọn một **Nhà cung cấp** trong Cài đặt chung; trong **Nâng cao**, thêm mô hình dưới **Cài đặt → Mô hình**.
4. Trên **Dịch**, chọn một thiết lập sẵn hoặc mô hình và chạy một thử nghiệm ngắn — xem [Dịch văn bản](/docs/translate/).
