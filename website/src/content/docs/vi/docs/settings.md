---
title: Cài đặt
description: >-
  Tài liệu tham khảo ngắn gọn về Chung, Mô hình, Ngôn ngữ, Thuật ngữ, Chi phí,
  Chuyển đổi, Người dùng, API và Giới thiệu.
translation_last_updated: '2026-07-17T14:59:05.914Z'
source_file_mtime: '2026-07-17T14:37:21.849Z'
source_file_hash: 492e5fd37f4a6b282502282d4f2728047a0d09ae8c30334b3c8388a5ce6e9f68
translation_language: vi
source_file_path: src/content/docs/docs/settings.md
translation_models:
  - google/gemini-2.5-flash
---



Mở **Cài đặt** từ thanh bên để tùy chỉnh cách ứng dụng hoạt động.

| Thẻ | Máy tính để bàn | Web (quản trị viên) | Web (người dùng) | Ghi chú |
| --- | :---: | :---: | :---: | --- |
| Cài đặt chung | có | có | có | Bao gồm **Trải nghiệm AI** (Dễ / Nâng cao) |
| Mô hình | có | có | có | Chỉ khi **Trải nghiệm AI** là **Nâng cao** |
| Ngôn ngữ | có | có | có | |
| Theo dõi chi phí | có | có | — | |
| Chuyển đổi | có | có | có | Nhập/xuất hàng loạt lời nhắc |
| Thuật ngữ | có | có | có | Cặp thuật ngữ để dịch |
| Người dùng | — | có | — | |
| Cấu hình API | có | có | — | |
| Giới thiệu | có | có | có | |

Ở chế độ **Dễ**, chọn AI thông qua các cài đặt trước trên thanh công cụ và **Nhà cung cấp** trong Cài đặt chung; thẻ **Mô hình** bị ẩn.

:::note
Trong phiên bản web, mỗi người dùng có cấu hình riêng (trải nghiệm AI, nhà cung cấp, mô hình/cài đặt trước, ngôn ngữ, tùy chọn, lời nhắc). Các thay đổi không ảnh hưởng đến những người dùng khác.
:::

## Cài đặt chung

**Trải nghiệm AI**

- **Dễ** (mặc định): chọn một **Nhà cung cấp**. Các nhà cung cấp đám mây sử dụng các cài đặt sẵn trên thanh công cụ (**Miễn phí (OpenRouter)**, **Tiêu chuẩn**, **Nâng cao**, **Kỹ thuật**). **LLM cục bộ** liệt kê các mô hình cục bộ đã cài đặt. **Làm mới danh mục cài đặt sẵn** tìm nạp danh sách cài đặt sẵn mới nhất từ kho lưu trữ dự án.
- **Nâng cao**: chọn mô hình trên thanh công cụ; quản lý danh sách trong [Mô hình](#models).

**Giao diện** — Chủ đề; **Hiển thị thông tin chi phí trên các hành động**; **Số chữ số thập phân của chi phí**; lề chỉ dành cho web xung quanh ứng dụng; **Họ phông chữ** và **Kích thước**.

**Hành vi** — **Hành vi cho ENTER**; **Tự động thực thi khi dán**; **Tự động sao chép kết quả vào bảng tạm**; **Dịch thời gian thực khi gõ**; **Thời gian chờ (ms)**.

**Lịch sử**

- **Giữ lịch sử thực thi** — lưu trữ đầu vào/đầu ra cho chế độ xem [Lịch sử](/docs/history/). Tắt tính năng này sẽ yêu cầu xác nhận và có thể xóa văn bản đã lưu. Nếu được gắn nhãn *bị quản trị viên vô hiệu hóa*, `HISTORY_DISABLED` được đặt — xem [Cấu hình](/docs/configuration/#privacy-mode).
- **Xóa dữ liệu lịch sử** — xóa văn bản đã lưu theo độ tuổi hoặc xóa tất cả. **Không** xóa tổng chi phí (sử dụng Theo dõi chi phí cho việc đó).

**Sao lưu cấu hình** (quản trị viên máy tính để bàn và web)

- Tùy chọn **Bao gồm dữ liệu sử dụng trong bản sao lưu**
- **Sao lưu cấu hình** — ZIP với cấu hình, trạng thái, người dùng, tùy chọn, lời nhắc và dữ liệu sử dụng tùy chọn
- **Khôi phục từ bản sao lưu** — hộp thoại xác nhận với các tùy chọn để khôi phục và/hoặc xóa dữ liệu sử dụng

Các bản sao lưu có thể di chuyển giữa máy tính để bàn và web; khôi phục bản sao lưu máy tính để bàn trên web sẽ áp dụng dữ liệu cho người dùng quản trị viên.

## Mô hình

Chỉ khả dụng ở chế độ **Nâng cao**.

![Tab Mô hình cài đặt](/images/screenshots/vi/settings-general.png)

- **Mô hình khả dụng** (trái) và **Mô hình đã chọn** (phải)
- Tìm kiếm, chip **Nhà cung cấp**, **Chỉ miễn phí**, **Làm mới**, Mở rộng/Thu gọn tất cả
- ID mô hình sử dụng tiền tố nhà cung cấp (`openrouter/…`, `openai/…`, `local/…`, …)

:::caution
Không sử dụng OpenRouter **Body Builder** (`openrouter/bodybuilder`) để Dịch, Viết lại hoặc Chuyển đổi — nó trả về các tải trọng yêu cầu JSON, không phải văn bản hoàn chỉnh.
:::

Thêm bằng **Thêm**; xóa bằng **X**. **Bỏ chọn tất cả** giữ lại mô hình miễn phí bắt buộc.

## Ngôn ngữ

- **Ngôn ngữ hàng đầu** — được ghim gần đầu danh sách ngôn ngữ trong Dịch và Chuyển đổi
- **Ngôn ngữ tùy chỉnh** — thêm ngôn ngữ bị thiếu trong danh sách tích hợp sẵn

## Theo dõi chi phí

- **Tổng chi phí**, **Sao chép giá trị**, **Đặt lại chi phí**
- **Đồng bộ hóa với mức sử dụng khóa API** — điều chỉnh theo mức sử dụng tài khoản OpenRouter (chỉ OpenRouter)
- **Mức sử dụng khóa API** — Chi tiết OpenRouter khi có sẵn
- **Xóa dữ liệu chi phí** — tất cả dữ liệu hoặc các mục cũ hơn một ngày

OpenRouter hiển thị chi phí thực tế đã thanh toán khi áp dụng; các nhà cung cấp khác sử dụng ước tính từ giá của OpenRouter. Ước tính không phải là hóa đơn.

:::caution
Việc xóa dữ liệu chi phí không thể hoàn tác. Xuất qua Lịch sử hoặc Bảng điều khiển → Tất cả cuộc gọi trước nếu bạn cần sao lưu. Lịch sử đầu vào/đầu ra liên quan cho các cuộc gọi API đó cũng bị xóa.
:::

## Chuyển đổi

Quản lý hàng loạt lời nhắc: xem xét, xóa, nhập, xuất và tải các lời nhắc mẫu.

## Bảng chú giải

Quản lý các cặp thuật ngữ được áp dụng trong quá trình [dịch](/docs/translate/#use-the-glossary). Mỗi thuật ngữ có ngôn ngữ nguồn/đích và văn bản nguồn/đích.

- Thêm thông qua hàng dưới cùng và **+**
- Lọc theo ngôn ngữ hoặc văn bản
- Nhập/xuất CSV hoặc XLSX; tải xuống các mẫu trống

Máy tính để bàn lưu trữ bảng chú giải cục bộ; web lưu trữ theo từng người dùng.

## Người dùng

Chỉ dành cho web (quản trị viên): thêm người dùng, cập nhật chi tiết, đặt lại mật khẩu, xóa tài khoản.

## Cấu hình API

Chỉ định cấu hình cho các nhà cung cấp bạn sử dụng: OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras, NVIDIA, Alibaba Cloud, apikey.fun, **LLM cục bộ** (URL cơ sở cho Ollama, LM Studio, llama.cpp hoặc tương tự) và một nhà cung cấp tương thích OpenAI tùy chỉnh tùy chọn.

**Web (quản trị viên):** khóa đến từ các biến môi trường — trang này hiển thị những khóa nào được đặt và cho phép bạn **Kiểm tra**. Khởi động lại sau khi thay đổi biến môi trường. Xem [Cấu hình](/docs/configuration/).

**Máy tính để bàn:** nhập khóa (hoặc URL LLM cục bộ) và **Lưu** / **Chỉnh sửa** / **Kiểm tra**. Khóa được lưu trữ mã hóa; bạn không thể xem giá trị hiện tại, chỉ có thể thay thế nó.

:::tip
Không cần khóa trả phí để bắt đầu: sử dụng các mô hình OpenRouter miễn phí, các nhà cung cấp tầng miễn phí khác hoặc một máy chủ tương thích OpenAI cục bộ như [Ollama](https://ollama.com), LM Studio hoặc llama.cpp (ví dụ: `translategemma:4b`).
:::

## Giới thiệu

Tên ứng dụng, phiên bản, ngày xây dựng, giấy phép, thông báo của bên thứ ba và liên kết kho lưu trữ.
