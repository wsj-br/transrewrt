---
title: Dịch văn bản
description: >-
  Chuyển đổi văn bản giữa các ngôn ngữ, sử dụng bảng thuật ngữ và tinh chỉnh kết
  quả bằng cách Diễn giải lại.
translation_last_updated: '2026-07-17T14:59:05.992Z'
source_file_mtime: '2026-07-17T11:53:39.333Z'
source_file_hash: ace9ad02a7dc82bf08090597c56e7cc82324e6250beab93fc2dbeaeed8b91675
translation_language: vi
source_file_path: src/content/docs/docs/translate.md
translation_models:
  - google/gemini-2.5-flash
---



Sử dụng **Dịch** để chuyển đổi văn bản từ ngôn ngữ này sang ngôn ngữ khác.

![Dịch không gian làm việc](/images/screenshots/vi/translate.png)

## Điều kiện tiên quyết

- Ít nhất một khóa nhà cung cấp (máy tính để bàn) hoặc khóa môi trường máy chủ (web) — xem [khóa API](/docs/api-key/)
- Một **cài đặt trước** (Dễ) hoặc **mô hình** (Nâng cao) được chọn trong thanh công cụ

## Dịch văn bản

1. Mở **Dịch** trong thanh bên.
2. Chọn một ngôn ngữ trong **Từ** (hoặc **Phát hiện ngôn ngữ**).
3. Chọn một ngôn ngữ trong **Đến**.
4. Chọn một cài đặt trước hoặc mô hình trong thanh công cụ.
5. Nhập hoặc dán văn bản vào **Đầu vào**.
6. Nhấp vào **Dịch**.
7. Đọc kết quả trong **Đầu ra**, sau đó sao chép nếu cần.

**Các ngôn ngữ hàng đầu** xuất hiện đầu tiên trong danh sách — đặt chúng trong [Cài đặt → Ngôn ngữ](/docs/settings/#languages).

## Cài đặt hữu ích

Trong [Cài đặt → Cài đặt chung](/docs/settings/#general-settings):

- **Tự động thực thi khi dán** — chạy ngay sau khi bạn dán
- **Tự động sao chép kết quả vào khay nhớ tạm** — sao chép sau khi chạy thành công
- **Dịch thời gian thực khi gõ** — chạy trong khi bạn gõ (có thể tăng chi phí)
- **Thời gian chờ (ms)** — đợi trước khi chạy thời gian thực
- **Hành vi cho ENTER** — liệu Enter có chạy tác vụ hay chèn một dòng mới

## Tinh chỉnh bản dịch

Sau khi chạy thành công, **Diễn giải lại…** và một menu thả xuống phiên bản sẽ xuất hiện bên cạnh bộ chọn **Đến:**:

1. **Diễn giải lại…** (không chọn) — một bản dịch đầy đủ khác của cùng một đầu vào. Tối đa **năm** phiên bản; mô hình xem các phiên bản trước đó để cách diễn đạt có thể khác nhau. Nhấp vào **Dừng dịch** để hủy một lần diễn giải lại đang chạy.
2. **Các từ thay thế** — chọn các từ hoặc một cụm từ ngắn, sau đó nhấp chuột phải hoặc **Diễn giải lại…**. Chọn một từ thay thế để thay thế khoảng (có thể mở rộng một chút cho ngữ pháp). Ở năm phiên bản, chỉ phiên bản 5 được cập nhật.
3. Mỗi yêu cầu diễn giải lại hoặc thay thế đều sử dụng lại mô hình và có thể làm tăng chi phí.

## Sử dụng bảng thuật ngữ

Một **bảng thuật ngữ** là các cặp thuật ngữ nguồn/đích cho một cặp ngôn ngữ. Khi được bật, các thuật ngữ khớp sẽ được gửi đến mô hình để cách diễn đạt ưa thích luôn nhất quán.

1. Bật **Bảng thuật ngữ** trong bảng nhập.
2. Dịch như bình thường — các thuật ngữ cho cặp **Từ** / **Đến** đó sẽ tự động được áp dụng.
3. Nhấp vào **Thêm vào Bảng thuật ngữ** (bên cạnh **Từ:**) để nhanh chóng thêm một cặp mới.
4. Quản lý tất cả các thuật ngữ trong [Cài đặt → Bảng thuật ngữ](/docs/settings/#glossary).

:::note
Các thuật ngữ trong bảng chú giải được khớp theo cặp ngôn ngữ. Chúng không thể được sử dụng với **Phát hiện ngôn ngữ** làm nguồn.
:::

## Các bước tiếp theo

- [Viết lại văn bản](/docs/rewrite/)
- [Chuyển đổi bằng lời nhắc](/docs/transform/)
- [Các vấn đề thường gặp](/docs/common-issues/)
