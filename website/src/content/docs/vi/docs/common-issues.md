---
title: Các vấn đề thường gặp
description: Khắc phục sự cố và các mẹo nhanh cho Transrewrt.
---



Nếu có điều gì đó không hoạt động như mong đợi, hãy kiểm tra những điểm này trước.

## Ứng dụng sẽ không dịch, viết lại hoặc chuyển đổi

Kiểm tra rằng:

- bạn đã chọn một **cài đặt trước** (Dễ) hoặc **mô hình** (Nâng cao) trong thanh công cụ
- ở chế độ **Dễ**, **Cài đặt → Cài đặt chung** có **Nhà cung cấp** với khóa hoạt động (hoặc URL LLM cục bộ)
- ở chế độ **Nâng cao**, một mô hình được chọn trong thanh công cụ (một danh sách trống được cho phép, nhưng bạn cần ít nhất một mô hình trong **Cài đặt → Mô hình** để chạy)
- thiết lập API của bạn đang hoạt động (máy tính để bàn: **Cài đặt → Cấu hình API → Kiểm tra**)

## Danh sách mô hình trống

Ở chế độ **Dễ**, xác nhận **Nhà cung cấp** đã được đặt và các khóa/URL đã được kiểm tra. Đối với **LLM cục bộ**, đảm bảo máy chủ cục bộ của bạn đang chạy và các mô hình đã được tải.

Ở chế độ **Nâng cao**, các mô hình đã chọn có thể trống. Mở **Cài đặt → Mô hình**, nhấp vào **Làm mới** và thêm các mô hình vào **Mô hình đã chọn**. Tùy chọn bật **Chỉ miễn phí**. Xóa mô hình thanh công cụ cuối cùng cũng mở Cài đặt → Mô hình.

## Quá chậm hoặc quá đắt

- Chọn một cài đặt trước hoặc mô hình khác
- Sử dụng đầu vào ngắn hơn
- Tắt **Dịch thời gian thực khi gõ** trong Cài đặt chung
- Sử dụng các mô hình miễn phí cho các tác vụ đơn giản

## Ngôn ngữ giao diện sai

Nhấp vào biểu tượng quả địa cầu trên thanh công cụ và chọn **Ngôn ngữ giao diện** của bạn.

## Văn bản quá nhỏ hoặc khó đọc

**Cài đặt → Cài đặt chung** → thay đổi **Họ phông chữ** và **Kích thước**.

## Tóm tắt bảng điều khiển trông trống

Điều này là bình thường nếu:

- bạn chỉ sử dụng **các mô hình miễn phí** và bạn đang xem các số liệu **chi phí** (chúng có thể bằng không); các KPI số lượng cuộc gọi vẫn cần dữ liệu cho khoảng thời gian đã chọn
- **bộ lọc thời gian** đã chọn không bao gồm thời điểm các cuộc gọi được thực hiện — hãy thử **Tất cả**

Nếu các KPI vẫn bằng không sau khi **Tất cả**, hãy kiểm tra [Lịch sử](/docs/history/) hoặc Bảng điều khiển → **Tất cả cuộc gọi**.

## Chi phí hiển thị "không có sẵn" hoặc có vẻ sai

OpenRouter hiển thị chi phí thực tế khi áp dụng. Đối với các nhà cung cấp khác, chi phí được ước tính từ giá của OpenRouter; nếu không có giá nào khớp, chi phí hiển thị là **không có sẵn** và không được thêm vào tổng.

## Tổng chi phí không khớp với hóa đơn của nhà cung cấp

Các số liệu trong ứng dụng là **ước tính để tham khảo**, không phải hóa đơn. Đối với OpenRouter, hãy sử dụng **Cài đặt → Theo dõi chi phí → Đồng bộ hóa với mức sử dụng khóa API**.

## Trang Lịch sử bị thiếu trên thanh bên

**Giữ lịch sử thực thi** có thể bị tắt. Bật nó trong Cài đặt chung trừ khi lịch sử bị quản trị viên vô hiệu hóa (`HISTORY_DISABLED` — xem [Cấu hình](/docs/configuration/#privacy-mode)).

## Web: bị chuyển hướng đến trang đăng nhập một cách bất ngờ

Phiên của bạn có thể đã hết thời gian. Đăng nhập lại. Nếu điều này xảy ra thường xuyên, hãy yêu cầu quản trị viên tăng **Thời gian chờ phiên** trong [Cài đặt → Người dùng](/docs/settings/#users) (quản trị viên cũng có thể đã thu hồi các phiên của bạn).

## Quản trị viên web: quên mật khẩu

Nếu một quản trị viên khác có thể đăng nhập, họ có thể đặt lại mật khẩu trong **Cài đặt → Người dùng**. Nếu bạn bị khóa nhưng có quyền truy cập shell:

```bash
docker exec transrewrt reset-web-password '<username>' '<new-password>'
```

Tên người dùng quản trị viên mặc định là `admin`. Từ một bản sao nguồn: `pnpm run reset-web-password -- <username> <new-password>`.

## Bảng điều khiển không hiển thị dữ liệu cho người dùng khác (web)

Chỉ **quản trị viên** mới có thể xem người dùng khác thông qua bộ lọc **Người dùng**. Người dùng thông thường chỉ thấy hoạt động của riêng họ.

## Đã thay đổi một lời nhắc và mất các chỉnh sửa

Khi chỉnh sửa lời nhắc Chuyển đổi, hãy nhấp vào **Lưu** trước khi **Quay lại Chạy**.

## Mẹo nhanh

- Bắt đầu với [Dịch](/docs/translate/) để xác nhận thiết lập của bạn trước khi Viết lại hoặc Chuyển đổi
- Sử dụng [Viết lại](/docs/rewrite/) để cải thiện cách diễn đạt hàng ngày
- Sử dụng [Chuyển đổi](/docs/transform/) cho các quy trình làm việc tùy chỉnh có thể lặp lại
- Giữ nguyên chế độ **Dễ** cho đến khi bạn cần các ID mô hình chi tiết
- Xuất lời nhắc thường xuyên nếu bạn đang xây dựng một thư viện lời nhắc
- Sử dụng [Bảng điều khiển](/docs/dashboard/) và [Lịch sử](/docs/history/) để xem lại mức sử dụng và các lần chạy trước đây

[Report an issue](https://github.com/wsj-br/transrewrt/issues)
