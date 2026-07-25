---
title: Khóa API
description: >-
  Kết nối Transrewrt với nhà cung cấp AI bạn chọn bằng cách thêm khóa API hoặc
  sử dụng mô hình cục bộ thay thế.
---



Transrewrt không bao gồm AI riêng của mình — nó gửi văn bản của bạn đến một nhà cung cấp AI mà bạn chọn. Để kết nối nhà cung cấp, bạn thêm một **khóa API**: một mã riêng tư, do nhà cung cấp cấp, hoạt động như một mật khẩu cho dịch vụ của họ. Bạn chỉ cần **một** nhà cung cấp để bắt đầu và bạn không cần phải trả tiền: một số nhà cung cấp cung cấp các mô hình miễn phí hoặc các gói miễn phí, và bạn cũng có thể chạy các mô hình trên máy tính của mình mà không cần bất kỳ khóa nào.

Các nhà cung cấp được hỗ trợ bao gồm OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras, NVIDIA, Alibaba Cloud, apikey.fun, bất kỳ điểm cuối tương thích OpenAI nào và các máy chủ tương thích OpenAI cục bộ (Ollama, LM Studio, llama.cpp, và các loại tương tự).

## Bước 1 — Chọn nhà cung cấp

Bất kỳ nhà cung cấp được hỗ trợ nào cũng hoạt động. Nếu bạn không chắc chắn nên chọn cái nào:

- **Miễn phí để bắt đầu**: OpenRouter, Google Gemini, Groq, Mistral, Cerebras và NVIDIA đều cung cấp các mô hình miễn phí hoặc các gói miễn phí.
- **Đã có tài khoản?** Nếu bạn đã sử dụng OpenAI, Anthropic hoặc một nhà cung cấp được hỗ trợ khác, bạn có thể đơn giản sử dụng lại tài khoản đó.
- **Thích giữ mọi thứ trên máy tính của riêng bạn?** Bỏ qua hoàn toàn khóa và sử dụng [mô hình cục bộ](#using-a-local-model-instead-no-api-key) thay thế.

## Bước 2 — Tạo khóa API

Các bước chính xác hơi khác nhau tùy theo nhà cung cấp, nhưng mẫu chung thì giống nhau ở mọi nơi:

1. Đăng ký hoặc đăng nhập trên trang web của nhà cung cấp. Trong **Cài đặt → Cấu hình API** của Transrewrt, mỗi nhà cung cấp có một liên kết **Mở trang web nhà cung cấp** đưa bạn đến đúng nơi.
2. Tìm trang **Khóa API** (đôi khi nằm trong cài đặt tài khoản, bảng điều khiển hoặc nhà phát triển) và tạo một khóa mới. Một số nhà cung cấp yêu cầu bạn đặt tên cho khóa hoặc đặt giới hạn chi tiêu — cả hai đều là tùy chọn.
3. Sao chép khóa. Đó là một chuỗi dài các chữ cái và số, thường bắt đầu bằng một cái gì đó như `sk-`.

:::note
Hãy coi khóa API như một mật khẩu: không chia sẻ, đăng tải hoặc gửi cho bất kỳ ai. Nếu khóa bị lộ, hãy xóa khóa đó trên trang web của nhà cung cấp và tạo một khóa mới.
:::

## Bước 3 — Thêm và kiểm tra khóa (máy tính để bàn)

1. Trong Transrewrt, mở **Cài đặt → Cấu hình API**.
2. Dán khóa vào trường dành cho nhà cung cấp của bạn (ví dụ: **Khóa API Google Gemini**) và lưu lại.
3. Nhấp vào **Kiểm tra** bên cạnh trường để xác nhận khóa hoạt động.

Khi kiểm tra thành công, bạn đã sẵn sàng — chọn nhà cung cấp đó trên màn hình chính và bắt đầu dịch.

## Sử dụng mô hình cục bộ thay thế (không có khóa API)

Bạn có thể chạy các mô hình trên máy tính của riêng mình với Ollama, LM Studio, llama.cpp hoặc một máy chủ tương thích OpenAI khác (ví dụ: `google/gemma-4-e2b` qua LM Studio). Không có gì rời khỏi máy của bạn và không cần khóa API.

Để kết nối một cái, hãy đặt URL cơ sở LLM cục bộ thành cơ sở API đầy đủ, bao gồm cả đường dẫn — ví dụ: `http://localhost:11434/v1`. Trên máy tính để bàn, đặt cái này trong **Cài đặt → Cấu hình API**; trên Docker, đặt biến môi trường `LOCAL_LLM_URL` thay thế.

:::tip
Nếu bạn sử dụng máy chủ LLM cục bộ từ một thiết bị hoặc vùng chứa khác, hãy định cấu hình máy chủ đó để cho phép các kết nối bên ngoài (không chỉ localhost).
:::

## Docker / web

Nếu bạn sử dụng Transrewrt trong trình duyệt, các khóa được quản lý bởi người chạy máy chủ, không được nhập vào giao diện người dùng trình duyệt. Quản trị viên đặt các khóa nhà cung cấp làm **biến môi trường** trên máy chủ (ví dụ: `PROVIDER_API_KEY`) — xem [Cấu hình](/docs/configuration/).

## Danh sách kiểm tra chạy lần đầu

1. Mở ứng dụng và đặt **Ngôn ngữ giao diện** nếu cần.
2. Thêm và kiểm tra ít nhất một khóa nhà cung cấp — hoặc cấu hình một mô hình cục bộ (máy tính để bàn), hoặc xác nhận máy chủ có khóa môi trường (web).
3. Ở chế độ **Dễ**, chọn **Nhà cung cấp** trong Cài đặt chung; ở chế độ **Nâng cao**, thêm mô hình trong **Cài đặt → Mô hình** — xem [Cài đặt](/docs/settings/#general-settings) cho hai chế độ.
4. Trên **Dịch**, chọn một cài đặt trước hoặc mô hình và chạy một thử nghiệm ngắn — xem [Dịch văn bản](/docs/translate/).

## Nếu có gì đó không hoạt động

- **Kiểm tra khóa không thành công**: hãy kiểm tra xem khóa đã được sao chép hoàn chỉnh (không có khoảng trắng ở trước hoặc sau) và chưa bị xóa hoặc vô hiệu hóa trên trang web của nhà cung cấp.
- **Bản dịch không thành công do lỗi hạn mức hoặc tín dụng**: các gói miễn phí có giới hạn hàng ngày hoặc hàng tháng; hãy đợi, chuyển sang nhà cung cấp miễn phí khác hoặc thêm tín dụng.
- **Không có nhà cung cấp nào xuất hiện trong chế độ Dễ**: hãy mở **Cài đặt → Cấu hình API** và xác nhận rằng ít nhất một khóa (hoặc URL LLM cục bộ) đã được cấu hình và kiểm tra.

Trợ giúp thêm: [Các sự cố thường gặp](/docs/common-issues/).
