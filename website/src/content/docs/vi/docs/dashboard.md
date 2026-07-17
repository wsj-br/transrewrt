---
title: Sử dụng Bảng điều khiển
description: >-
  Xem lại nhật ký sử dụng, chi phí và cuộc gọi — lọc, xuất và quản lý các bản
  ghi đã lưu.
translation_last_updated: '2026-07-17T21:14:51.015Z'
source_file_mtime: '2026-07-17T11:53:39.333Z'
source_file_hash: 689c93c2517f806f7976d570b4fc86d30ca048ce906d982429b985ad06dd9250
translation_language: vi
source_file_path: src/content/docs/docs/dashboard.md
translation_models:
  - google/gemini-2.5-flash
---



Sử dụng **Bảng điều khiển** để xem bạn đang sử dụng ứng dụng bao nhiêu và chi phí là bao nhiêu (đối với các mô hình trả phí).

![Tóm tắt Bảng điều khiển](/images/screenshots/vi/dashboard-summary.png)

:::note
Nếu bạn chỉ sử dụng các mô hình **miễn phí**, số tiền chi phí có thể bằng không. Các KPI về số lượng cuộc gọi trên **Tóm tắt** vẫn cần hoạt động trong khoảng thời gian đã chọn.
:::

## Lọc dữ liệu

Sử dụng các nút bộ lọc ở trên cùng để thay đổi phạm vi thời gian.

:::note
Bộ lọc **Người dùng** chỉ hiển thị với quản trị viên trong phiên bản web. Nó không có sẵn trên máy tính để bàn.
:::

## Các tab

- **Tóm tắt** — KPI: tổng chi phí, các mô hình đã sử dụng, số lượng cuộc gọi và chi phí trên mỗi chế độ, chi phí trung bình trên mỗi cuộc gọi, TPS trung bình, các mô hình hàng đầu theo số lượng cuộc gọi
- **Theo mô hình** — số lượng cuộc gọi, chi phí và TPS trên mỗi mô hình; mở rộng một hàng để xem chi tiết chế độ
- **Tất cả cuộc gọi** — nhật ký cuộc gọi đầy đủ (phân trang hoặc thẻ) với xuất

## Xuất dữ liệu

Xuất bảng dưới dạng **JSON**, **CSV** hoặc **XLSX**.

## Xóa các bản ghi đã lưu cho một mô hình

Trong **Theo mô hình** hoặc **Tất cả cuộc gọi**, sử dụng biểu tượng thùng rác để xóa các bản ghi cho một mô hình.

:::caution
Việc xóa không thể hoàn tác. Để xóa theo tuổi hoặc xóa tất cả dữ liệu chi phí, hãy sử dụng [Cài đặt → Theo dõi chi phí](/docs/settings/#cost-tracking).
:::

## Các bước tiếp theo

- [Duyệt lịch sử](/docs/history/)
- [Cài đặt](/docs/settings/)
- [Các vấn đề thường gặp](/docs/common-issues/)
