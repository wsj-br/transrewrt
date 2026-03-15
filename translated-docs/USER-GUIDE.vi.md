---
translated_at: "2026-03-15T22:35:25.166Z"
source_hash: "69732149de931f2a0059ecf9073871caedaa431362e32c010e7d93bd3cbd76bc"
source_mtime: 1773611603946.006
model: "stepfun/step-3.5-flash:free"
---
<a id="transrewrt-user-guide"></a>
# Hướng dẫn sử dụng Transrewrt

<br />

<a id="introduction"></a>
## Giới thiệu

Transrewrt giúp bạn làm việc với văn bản theo ba cách chính:

- **Dịch** - chuyển văn bản từ ngôn ngữ này sang ngôn ngữ khác.
- **Viết lại** - diễn đạt lại văn bản theo phong cách khác, chẳng hạn rõ ràng hơn, ngắn gọn hơn hoặc trang trọng hơn.
- **Biến đổi** - xử lý văn bản bằng các hướng dẫn AI tùy chỉnh được gọi là prompt.

<br />

Hướng dẫn này giải thích cách sử dụng ứng dụng sau khi đã cài đặt và chạy. Đối với các bước cài đặt, xem [README](../README.md) chính.

<br />

> ℹ️ **LƯU Ý**<br/>
> Transrewrt có sẵn dưới dạng ứng dụng desktop cho Windows và Linux, và dưới dạng ứng dụng web tự host. Hướng dẫn này tập trung vào việc sử dụng hàng ngày của ứng dụng. Nếu một tính năng chỉ áp dụng cho một phiên bản, nó sẽ được đánh dấu rõ ràng.

<small>**Đọc bằng các ngôn ngữ khác:** [Tiếng Anh (UK)](../USER-GUIDE.md) · [Tiếng Bồ Đào Nha (BR)](USER-GUIDE.pt-BR.md) · [Tiếng Ả Rập](USER-GUIDE.ar.md) · [Tiếng Bengal](USER-GUIDE.bn.md) · [Tiếng Catalan](USER-GUIDE.ca.md) · [Tiếng Trung (Giản thể)](USER-GUIDE.zh-CN.md) · [Tiếng Trung (Phồn thể)](USER-GUIDE.zh-TW.md) · [Tiếng Croatia](USER-GUIDE.hr.md) · [Tiếng Séc](USER-GUIDE.cs.md) · [Tiếng Hà Lan](USER-GUIDE.nl.md) · [Tiếng Anh (US)](USER-GUIDE.en-US.md) · [Tiếng Philippines](USER-GUIDE.tl.md) · [Tiếng Pháp](USER-GUIDE.fr.md) · [Tiếng Đức](USER-GUIDE.de.md) · [Tiếng Hy Lạp](USER-GUIDE.el.md) · [Tiếng Hindi](USER-GUIDE.hi.md) · [Tiếng Hungary](USER-GUIDE.hu.md) · [Tiếng Ý](USER-GUIDE.it.md) · [Tiếng Nhật](USER-GUIDE.ja.md) · [Tiếng Java](USER-GUIDE.jv.md) · [Tiếng Hàn](USER-GUIDE.ko.md) · [Tiếng Malay](USER-GUIDE.ms.md) · [Tiếng Ba Tư](USER-GUIDE.fa.md) · [Tiếng Ba Lan](USER-GUIDE.pl.md) · [Tiếng Bồ Đào Nha (PT)](USER-GUIDE.pt.md) · [Tiếng Punjab](USER-GUIDE.pa.md) · [Tiếng Romania](USER-GUIDE.ro.md) · [Tiếng Nga](USER-GUIDE.ru.md) · [Tiếng Slovakia](USER-GUIDE.sk.md) · [Tiếng Tây Ban Nha](USER-GUIDE.es.md) · [Tiếng Swahili](USER-GUIDE.sw.md) · [Tiếng Thụy Điển](USER-GUIDE.sv.md) · [Tiếng Telugu](USER-GUIDE.te.md) · [Tiếng Thái](USER-GUIDE.th.md) · [Tiếng Thổ Nhĩ Kỳ](USER-GUIDE.tr.md) · [Tiếng Ukraine](USER-GUIDE.uk.md) · [Tiếng Việt](USER-GUIDE.vi.md)</small>

<br />

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Mục lục** 

- [Trước khi bắt đầu](#before-you-start)
  - [Làm thế nào để lấy API key (ứng dụng desktop)](#how-to-get-an-api-key-desktop-app)
- [Bắt đầu](#getting-started)
- [Các phần chính của cửa sổ](#main-parts-of-the-window)
  - [Thanh bên](#sidebar)
  - [Thanh công cụ](#toolbar)
  - [Bảng nhập liệu và xuất](#input-and-output-panels)
- [Dịch](#translate)
  - [Dịch văn bản](#translate-text)
  - [Lựa chọn ngôn ngữ](#language-selection)
  - [Cài đặt dịch hữu ích](#helpful-translation-settings)
  - [Phím tắt](#keyboard-shortcuts)
- [Viết lại](#rewrite)
  - [Viết lại văn bản](#rewrite-text)
- [Biến đổi](#transform)
  - [Chạy một prompt đã lưu](#run-an-existing-prompt)
  - [Nếu bạn chưa có prompt nào](#if-you-have-no-prompts-yet)
  - [Tạo prompt nhanh chóng](#create-a-prompt-quickly)
  - [Chỉnh sửa prompt](#edit-a-prompt)
  - [Kiểm tra prompt trước khi sử dụng](#test-a-prompt-before-using-it)
  - [Quản lý các prompt đã lưu](#manage-saved-prompts)
- [Bảng điều khiển](#dashboard)
  - [Lọc dữ liệu](#filter-the-data)
  - [Các thẻ bảng điều khiển](#dashboard-tabs)
  - [Xuất dữ liệu](#export-data)
  - [Xóa các bản ghi đã lưu cho một mô hình](#delete-stored-records-for-a-model)
- [Cài đặt](#settings)
  - [Cài đặt chung](#general-settings)
  - [Mô hình](#models)
  - [Ngôn ngữ](#languages)
  - [Theo dõi chi phí](#cost-tracking)
  - [Prompt biến đổi](#transform-prompts)
  - [Người dùng](#users)
  - [Cấu hình API](#api-config)
  - [Giới thiệu](#about)
- [Các vấn đề thường gặp](#common-issues)
  - [Ứng dụng không dịch, viết lại hoặc biến đổi văn bản](#the-app-will-not-translate-rewrite-or-transform-text)
  - [Danh sách mô hình trống](#the-model-list-is-empty)
  - [Kết quả quá chậm hoặc quá đắt](#the-result-is-too-slow-or-too-expensive)
  - [Giao diện ở ngôn ngữ sai](#the-interface-is-in-the-wrong-language)
  - [Văn bản quá nhỏ hoặc khó đọc](#the-text-is-too-small-or-hard-to-read)
  - [Tôi đã thay đổi prompt và mất các chỉnh sửa](#i-changed-a-prompt-and-lost-the-edits)
- [Mẹo nhanh](#quick-tips)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br /><br />

<a id="before-you-start"></a>

## Trước khi bắt đầu

Để sử dụng Transrewrt, bạn cần có quyền truy cập vào dịch vụ AI thông qua OpenRouter.

Bạn không cần phải chọn một mô hình trả phí trước khi bắt đầu. Ứng dụng luôn bao gồm một **mô hình miễn phí** tích hợp sẵn, vì vậy với mục đích sử dụng thông thường, điều đó là đủ để bắt đầu dịch, viết lại và biến đổi văn bản.

Nói một cách đơn giản:

- Một **mô hình** là công cụ AI thực hiện công việc.
- Một **khóa API** là thông tin xác thực truy cập cá nhân của bạn cho dịch vụ đó.

Nếu bạn đang sử dụng **ứng dụng dành cho máy tính**, bạn sẽ cần một khóa API. Để biết các bước chi tiết, hãy xem [Cách lấy khóa API](#how-to-get-an-api-key-desktop-app) bên dưới. Tóm lại: tạo tài khoản tại [OpenRouter](https://openrouter.ai), mở trang [Keys](https://openrouter.ai/keys), tạo một khóa mới và dán nó vào [**Cài đặt** > **Cấu hình API**](#api-config) trong Transrewrt.

Nếu bạn đang sử dụng **phiên bản web**, chủ sở hữu máy chủ thường sẽ thiết lập điều này cho bạn, do đó bạn thường không cần tự mình nhập khóa API.

<br />

<a id="how-to-get-an-api-key-desktop-app"></a>
### Cách lấy khóa API (ứng dụng dành cho máy tính)

Nếu bạn đang sử dụng ứng dụng dành cho máy tính, hãy làm theo các bước sau:

1. Truy cập [OpenRouter](https://openrouter.ai) trong trình duyệt web của bạn.
2. Tạo tài khoản hoặc đăng nhập.
3. Mở trang [Keys](https://openrouter.ai/keys).
4. Nhấp vào nút để tạo một khóa API mới.
5. Đặt tên cho khóa để bạn có thể nhận diện nó sau này.
6. Sao chép khóa API mới.
7. Quay lại Transrewrt và mở **Cài đặt** > **Cấu hình API**.
8. Dán khóa vào ô **OpenRouter API Key**.
9. Nhấp vào **Kiểm tra cấu hình API** để đảm bảo nó hoạt động.

> ℹ️ **GHI CHÚ**<br/>
> Bạn có thể bắt đầu với đường dẫn miễn phí của OpenRouter hoặc bất kỳ mô hình miễn phí nào khác có sẵn. Trong nhiều trường hợp, điều đó là đủ để bắt đầu sử dụng Transrewrt mà không cần chọn mô hình trả phí.

<br /><br />

<a id="getting-started"></a>
## Bắt đầu

Nếu đây là lần đầu tiên bạn sử dụng Transrewrt, hãy làm theo thứ tự này:

1. Mở ứng dụng.
2. Chọn **Ngôn ngữ giao diện** của bạn từ biểu tượng hình quả cầu nếu cần.
3. Nếu bạn đang dùng **ứng dụng dành cho máy tính**, hãy mở [**Cài đặt** > **Cấu hình API**](#api-config), dán khóa OpenRouter API của bạn và nhấp vào **Kiểm tra cấu hình API**.
4. Mở [**Cài đặt** > **Mô hình**](#models) và thêm một hoặc nhiều mô hình vào **Mô hình đã chọn**.
5. Mở [**Cài đặt** > **Ngôn ngữ**](#languages) và chọn **Ngôn ngữ hàng đầu** của bạn nếu bạn muốn các ngôn ngữ được sử dụng thường xuyên nhất xuất hiện đầu tiên.
6. Chuyển sang **Dịch** và chạy một bản dịch đơn giản để xác nhận mọi thứ đều hoạt động.
7. Một khi nó hoạt động, hãy thử **Viết lại** rồi đến **Biến đổi**.

Thứ tự này rất quan trọng. Nó ngăn chặn vấn đề phổ biến nhất khi sử dụng lần đầu: cố gắng chạy một tác vụ trước khi ứng dụng có kết nối API hoạt động hoặc một mô hình đã chọn.

<br /><br />

<a id="main-parts-of-the-window"></a>
## Các phần chính của cửa sổ

Ứng dụng được chia thành ba khu vực chính:

- **Thanh bên** ở bên trái.
- **Thanh công cụ** ở phía trên.
- **Khu vực làm việc** ở giữa.

<br />

<a id="sidebar"></a>
### Thanh bên

Sử dụng thanh bên để di chuyển xung quanh ứng dụng:

<br />

<table>
  <tr>
    <td valign="top">
       <img src="../images/screenshots/vi/sidebar.png" alt="Thanh bên ứng dụng" style="max-width: 100%; border: 1px solid #ddd; border-radius: 4px;">
    </td>
    <td valign="top">
      <br />
      <ul>
        <li><strong>Dịch</strong> mở không gian làm việc dịch thuật.</li>
        <li><strong>Viết lại</strong> mở không gian làm việc viết lại.</li>
        <li><strong>Biến đổi</strong> mở không gian nhắc lệnh tùy chỉnh.</li>
        <li><strong>Bảng điều khiển</strong> hiển thị thông tin về mức độ sử dụng và chi phí.</li>
        <li><strong>Cài đặt</strong> mở bảng cài đặt.</li>
        <li><strong>Người dùng</strong> hiển thị tên người dùng đã đăng nhập (chỉ trên web).</li>
      </ul>
      <br />
      <p>Bạn cũng có thể thu gọn thanh bên để có thêm không gian bằng cách nhấp vào biểu tượng bên cạnh logo ứng dụng.</p>
    </td>
  </tr>
</table>

<br />

<a id="toolbar"></a>
### Thanh công cụ

Thanh công cụ thay đổi một chút tùy thuộc vào vị trí của bạn trong ứng dụng.

- Ở bên trái, nó hiển thị tên trang hiện tại.
- Ở bên phải, nó hiển thị **bộ chọn mô hình** và điều khiển **Ngôn ngữ giao diện**.

**Bộ chọn mô hình** cho phép bạn chọn công cụ AI nào sẽ được sử dụng cho tác vụ hiện tại.

  ![Bộ chọn mô hình](../images/screenshots/vi/model-selector.png)

> ℹ️ **GHI CHÚ**<br/>
> Một số mô hình miễn phí có thể tạm ngừng hoạt động nếu chúng không khả dụng hoặc đã đạt đến giới hạn sử dụng. Nếu điều đó xảy ra, ứng dụng sẽ tự động xóa mô hình đó khỏi danh sách của bạn.


**Biểu tượng hình quả cầu + mã ngôn ngữ** thay đổi ngôn ngữ giao diện của ứng dụng, chẳng hạn như menu và nút bấm. Nó **không** thay đổi các ngôn ngữ dịch được sử dụng trong **Dịch**.

  ![Bộ chọn ngôn ngữ giao diện](../images/screenshots/vi/language-selector.png)

<br />

<a id="input-and-output-panels"></a>

### Các bảng đầu vào và đầu ra

Hầu hết các không gian làm việc sử dụng bảng **Đầu vào** ở bên trái và bảng **Đầu ra** ở bên phải.

Bảng **Đầu vào** hiển thị:

- Số ký tự
- Số từ
- Số đoạn văn

Bảng **Đầu ra** có thể hiển thị:

- Thời gian thực hiện tác vụ
- Chi phí của tác vụ đó
- Tổng chi phí tích lũy của bạn
- **TPS** (token trên mỗi giây), là một đo lường tốc độ đơn giản
- Số ký tự, từ và đoạn văn
- Mô hình được sử dụng

Nếu bạn phân vân về các thuật ngữ kỹ thuật:

- **Token** có nghĩa là một phần nhỏ văn bản. Bạn có thể nghĩ đến nó như một phần của từ hoặc một từ ngắn.
- **TPS** có nghĩa là số phần văn bản đó mà mô hình xử lý mỗi giây.

<br /><br />

<a id="translate"></a>
## Dịch

Sử dụng **Dịch** khi bạn muốn chuyển đổi văn bản từ ngôn ngữ này sang ngôn ngữ khác.

![Không gian làm việc Dịch](../images/screenshots/vi/translate.png)

<br />

<a id="translate-text"></a>
### Dịch văn bản

1. Mở **Dịch**.
2. Chọn ngôn ngữ trong **Từ**.
3. Chọn ngôn ngữ trong **Đến**.
4. Chọn một mô hình trên thanh công cụ.
5. Gõ hoặc dán văn bản vào **Đầu vào**.
6. Nhấp vào **Dịch**.
7. Đọc kết quả trong **Đầu ra**.
8. Sử dụng nút sao chép nếu bạn muốn sao chép kết quả.

<br />

<a id="language-selection"></a>
### Lựa chọn ngôn ngữ

- **Từ** có thể là một ngôn ngữ cụ thể hoặc **Phát hiện ngôn ngữ**.
- **Đến** là ngôn ngữ bạn muốn kết quả đầu ra.

Các **Ngôn ngữ hàng đầu** đã chọn của bạn sẽ xuất hiện ở đầu danh sách. Bạn có thể đặt chúng trong [**Cài đặt** > **Ngôn ngữ**](#languages).

<br />

<a id="helpful-translation-settings"></a>
### Cài đặt dịch hữu ích

Trong [**Cài đặt** > **Cài đặt chung**](#general-settings), bạn có thể thay đổi cách thức dịch hoạt động:

- **Tự động dịch khi dán** chạy một bản dịch ngay khi bạn dán văn bản.
- **Tự động sao chép kết quả vào bảng nhớ tạm** sao chép kết quả tự động sau khi chạy thành công.
- **Dịch theo thời gian thực (trong khi gõ)** chạy các bản dịch trong khi bạn gõ.
- **Thời gian chờ (ms)** kiểm soát thời gian ứng dụng chờ trước khi chạy bản dịch theo thời gian thực.

<br />

<a id="keyboard-shortcuts"></a>
### Phím tắt

Trong [**Cài đặt** > **Cài đặt chung**](#general-settings), **Hành vi cho PHẼ** kiểm soát điều gì xảy ra khi bạn nhấn Enter:

- **Enter** có thể chạy tác vụ và **Shift+Enter** có thể thêm một dòng mới.
- Hoặc ứng dụng có thể làm ngược lại.

Phím tắt hiện tại cũng được hiển thị trên nút **Dịch**.

<br /><br />

<a id="rewrite"></a>
## Viết lại

Sử dụng **Viết lại** khi bạn muốn cải thiện cách diễn đạt mà không thay đổi ý chính.

![Không gian làm việc Viết lại](../images/screenshots/vi/rewrite.png)

Điều này hữu ích để:

- sửa lỗi chính tả và ngữ pháp
- làm văn bản rõ ràng hơn
- làm văn bản trang trọng hơn hoặc thân mật hơn
- rút ngắn hoặc mở rộng văn bản
- làm cho văn bản nghe có vẻ kỹ thuật hơn

<br />

<a id="rewrite-text"></a>
### Viết lại văn bản

1. Mở **Viết lại**.
2. Chọn một **Chế độ**.
3. Chọn một mô hình trên thanh công cụ.
4. Gõ hoặc dán văn bản vào **Đầu vào**.
5. Nhấp vào **Viết lại**.
6. Xem xét kết quả trong **Đầu ra**.


Hành vi phím Enter tương tự được mô tả trong [**Dịch**](#keyboard-shortcuts) cũng áp dụng ở đây.

<br /><br />

<a id="transform"></a>
## Biến đổi

Sử dụng **Biến đổi** khi bạn muốn AI tuân theo một bộ hướng dẫn tùy chỉnh.

![Không gian làm việc Biến đổi](../images/screenshots/vi/transform.png)

Đây là khu vực linh hoạt nhất của ứng dụng. Bạn có thể sử dụng nó cho các tác vụ như:

- tóm tắt ghi chú
- biến văn bản thô thành email tinh tế
- trích xuất các điểm chính
- chuyển đổi văn bản thành một định dạng cụ thể

<br />

<a id="run-an-existing-prompt"></a>
### Chạy một lời nhắc hiện có

1. Mở **Biến đổi**.
2. Chọn một lời nhắc từ danh sách lời nhắc.
3. Nếu hộp ngôn ngữ **Đích** xuất hiện, hãy chọn một ngôn ngữ nếu bạn muốn.
4. Gõ hoặc dán văn bản vào **Đầu vào**.
5. Nhấp vào **Biến đổi**.
6. Đọc kết quả trong **Đầu ra**.

<br />

<a id="if-you-have-no-prompts-yet"></a>
### Nếu bạn chưa có lời nhắc nào

Nếu danh sách lời nhắc của bạn trống, hãy nhấp vào **Tải lời nhắc mẫu**. Điều này thêm các ví dụ có sẵn để bạn có thể bắt đầu nhanh chóng.

> ℹ️ **GHI CHÚ**<br/>
> Các lời nhắc mẫu được cung cấp bằng tiếng Anh. Sau khi tải chúng, bạn có thể chỉnh sửa một lời nhắc và sử dụng **Dịch lời nhắc** nếu bạn muốn thích nghi văn bản lời nhắc cho ngôn ngữ khác.

<br />

<a id="create-a-prompt-quickly"></a>

### Tạo lời nhắc nhanh chóng

Cách nhanh nhất để tạo lời nhắc là:

1. Nhấp vào **Lời nhắc mới**.
2. Nhấp vào **Tạo lời nhắc**.
3. Mô tả những gì bạn muốn lời nhắc thực hiện.
4. Chọn một mô hình.
5. Để ứng dụng tự tạo bản nháp cho bạn.
6. Xem xét bản nháp và nhấp vào **Lưu**.

![Tạo lời nhắc](../images/screenshots/vi/transform-generate.png)


<br />

### Chỉnh sửa lời nhắc

Khi bạn tạo hoặc chỉnh sửa một lời nhắc, trình chỉnh sửa sẽ xuất hiện bên trái và khu vực kiểm tra xuất hiện bên phải.

![Trình chỉnh sửa lời nhắc Transform](../images/screenshots/vi/transform-prompt-edit.png)

Các trường chính là:

- **Tên lời nhắc**: tên được hiển thị trong danh sách lời nhắc.
- **Hướng dẫn lời nhắc (tùy chọn)**: một gợi ý ngắn hiển thị cho người dùng khi chạy lời nhắc.
- **Vai trò mô hình**: vai trò tổng thể được gán cho AI, chẳng hạn như 'Bạn là một trợ lý hữu ích.'
- **Hướng dẫn mô hình (mỗi dòng một cái)**: các quy tắc cụ thể bạn muốn AI tuân theo.
- **Mô tả đầu ra**: một từ ngắn mô tả kết quả, chẳng hạn như 'tóm tắt' hoặc 'viết lại'.
- **Nhiệt độ (0.0 → 1.0)**: thanh trượt sự sáng tạo.

Nếu thuật ngữ kỹ thuật **Nhiệt độ** là mới với bạn, hãy nghĩ về nó như thế này:

- Một **nhiệt độ thấp hơn** cho kết quả ổn định và có thể dự đoán hơn.
- Một **nhiệt độ cao hơn** cho sự đa dạng và sáng tạo hơn.

Bạn cũng có thể sử dụng:

- **`Tạo lời nhắc`** để tạo một bản nháp mới từ một mô tả đơn giản
- **`Cải thiện lời nhắc`** để hoàn thiện một lời nhắc hiện có
- **`Dịch lời nhắc`** để dịch các trường lời nhắc

> ⚠️ **CẢNH BÁO**<br/>
> Nhấp **`Lưu`** trước khi bạn nhấp **`Quay lại để chạy`**. Nếu bạn quay lại mà không lưu, các thay đổi của bạn sẽ bị mất.

<br />

<a id="test-a-prompt-before-using-it"></a>
### Kiểm tra lời nhắc trước khi sử dụng

Bảng kiểm tra bên phải cho phép bạn thử lời nhắc của mình với văn bản mẫu trước khi sử dụng nó trong công việc hàng ngày.

Điều này hữu ích khi:

- bạn đang xây dựng một lời nhắc mới
- bạn đang so sánh hai phiên bản của một lời nhắc
- bạn muốn kiểm tra giọng điệu, độ dài hoặc định dạng đầu ra

<br />

<a id="manage-saved-prompts"></a>
### Quản lý các lời nhắc đã lưu

Để quản lý các lời nhắc đã lưu tại một nơi, mở [**Cài đặt** > **Lời nhắc Transform**](#transform-prompts).

Tại đó bạn có thể:

- liệt kê và xóa các lời nhắc của mình
- xuất lời nhắc dưới dạng **JSON**, **CSV**, hoặc **XLSX**
- nhập lời nhắc từ một tệp

<br /><br />

## Bảng điều khiển

Sử dụng **Bảng điều khiển** để xem mức độ bạn sử dụng ứng dụng và chi phí của nó là bao nhiêu.

![Tóm tắt bảng điều khiển](../images/screenshots/vi/dashboard-summary.png)

<br />

<a id="filter-the-data"></a>
### Lọc dữ liệu

Sử dụng các nút lọc ở trên cùng để thay đổi khoảng thời gian.

![Bộ lọc bảng điều khiển](../images/screenshots/vi/dashboard-filter.png)

> ℹ️ **GHI CHÚ**<br/>
> Trong phiên bản web, các quản trị viên cũng có thể thấy bộ lọc **Người dùng**. Điều này cho phép họ chuyển đổi giữa **Tất cả người dùng** và một người dùng riêng lẻ.

<br />

<a id="dashboard-tabs"></a>
### Các thẻ bảng điều khiển

- **Tóm tắt** cung cấp cho bạn cái nhìn tổng quan về mức độ sử dụng và chi phí.
- **Theo mức sử dụng** phân chia hoạt động theo ngôn ngữ dịch thuật, chế độ viết lại và lời nhắc transform.
- **Theo mô hình** cho thấy bạn đã sử dụng các mô hình nào và chúng tốn bao nhiêu chi phí.
- **Theo ngày** hiển thị tổng hàng ngày.
- **Tất cả cuộc gọi** hiển thị lịch sử cuộc gọi đầy đủ và cho phép bạn xuất nó.

<br />

<a id="export-data"></a>
### Xuất dữ liệu

Các bảng bảng điều khiển có thể xuất dữ liệu dưới dạng:

- **JSON**
- **CSV**
- **XLSX**

Điều này hữu ích nếu bạn muốn xem xét hoạt động bên ngoài ứng dụng hoặc chia sẻ một báo cáo.

<br />

<a id="delete-stored-records-for-a-model"></a>
### Xóa các bản ghi đã lưu cho một mô hình

Trong **Theo mô hình** hoặc **Tất cả cuộc gọi**, bạn có thể xóa các bản ghi đã lưu cho một mô hình.

> ⚠️ **CẢNH BÁO**<br/>
> Việc xóa các bản ghi đã lưu không thể phục hồi. Chỉ sử dụng tính năng này nếu bạn chắc chắn rằng bạn không còn cần lịch sử đó nữa.

Để xóa tất cả dữ liệu hoặc xóa các bản ghi dựa trên tuổi tác của chúng, hãy truy cập [**Cài đặt** > **Theo dõi chi phí**](#cost-tracking). Tại đó bạn sẽ thấy các tùy chọn để xóa tất cả dữ liệu đã lưu hoặc chỉ xóa dữ liệu cũ hơn một ngày nhất định.

<br /><br />

<a id="settings"></a>
## Cài đặt

Mở **Cài đặt** từ thanh bên để tùy chỉnh cách ứng dụng hoạt động.

Các thẻ có sẵn có thể khác nhau:

- **Cấu hình API** chỉ có sẵn trong ứng dụng desktop.
- **Người dùng** chỉ có sẵn trong ứng dụng web, và chỉ dành cho quản trị viên.

<br />

<a id="general-settings"></a>

### Cài đặt chung

Sử dụng **Cài đặt chung** để kiểm soát hành vi gõ và giao diện.

**Hành vi**

- **Hành vi cho ENTER** chọn xem phím Enter sẽ thực thi tác vụ hay chèn dòng mới.
- **Dịch tự động khi dán** bắt đầu dịch ngay khi bạn dán văn bản.
- **Sao chép kết quả tự động vào clipboard** tự động sao chép kết quả thành công.
- **Dịch thời gian thực (trong khi gõ)** dịch trong khi bạn gõ.
- **Thời gian chờ (ms)** đặt thời gian chờ cho dịch thời gian thực.

**Giao diện**

- **Chữ số phần thập phân chi phí** thay đổi cách hiển thị số thập phân chi phí.
- **Font Family** thay đổi phông chữ trong các bảng văn bản.
- **Cỡ chữ** thay đổi kích thước phông chữ.
- **Chỉ web:** **hiển thị lề xung quanh ứng dụng** thêm không gian xung quanh giao diện.

<br />

<a id="models"></a>
### Mô hình

Sử dụng **Cài đặt** > **Mô hình** để chọn các mô hình xuất hiện trên thanh công cụ.

![Tab Mô hình trong Cài đặt](../images/screenshots/vi/settings-models.png)

Trang gồm hai danh sách:

- **Mô hình có sẵn** bên trái
- **Mô hình đã chọn** bên phải

Các điều khiển hữu ích bao gồm:

- **Tìm kiếm mô hình...** để tìm mô hình theo tên
- **Chỉ miễn phí** để chỉ hiển thị các mô hình miễn phí
- **Làm mới** để tải lại danh sách
- **Mở rộng tất cả** và **Thu gọn tất cả** khi bạn đang sắp xếp theo nhà cung cấp

Để thêm mô hình, hãy nhấp vào **Thêm**.

Để xóa mô hình, nhấp vào **X** bên cạnh nó trong **Mô hình đã chọn**.

Để xóa danh sách, nhấp vào **Bỏ chọn tất cả**. Mô hình miễn phí bắt buộc sẽ vẫn còn trong danh sách.

> ℹ️ **GHI CHÚ**<br/>
> Nếu bạn không muốn nạp tiền vào OpenRouter ngay lập tức, hãy bắt đầu bằng việc bật **Chỉ miễn phí** và chọn các mô hình miễn phí.

<br />

<a id="languages"></a>
### Ngôn ngữ

Sử dụng **Cài đặt** > **Ngôn ngữ** để tổ chức các danh sách ngôn ngữ được sử dụng trong ứng dụng.

- **Ngôn ngữ hàng đầu** được ghim gần đầu các danh sách ngôn ngữ trong **Dịch** và **Biến đổi**.
- **Ngôn ngữ tùy chỉnh** cho phép bạn thêm ngôn ngữ không có trong danh sách có sẵn.

Nếu bạn thêm ngôn ngữ tùy chỉnh, nó sẽ xuất hiện trong bộ chọn ngôn ngữ cùng với các tùy chọn có sẵn.

<br />

<a id="cost-tracking"></a>
### Theo dõi chi phí

Sử dụng **Cài đặt** > **Theo dõi chi phí** để quản lý thông tin chi phí.

- **Tổng chi phí** hiển thị tổng tích lũy.
- **Sao chép giá trị** sao chép tổng vào clipboard.
- **Đặt lại chi phí** đặt tổng đã lưu về 0.
- **Đồng bộ với mức sử dụng khóa API** đặt tổng khớp với mức sử dụng được báo cáo bởi OpenRouter.
- **Mức sử dụng khóa API** hiển thị chi tiết sử dụng, nếu có.
- **Xóa dữ liệu chi phí** xóa tất cả dữ liệu, hoặc chỉ các mục cũ hơn ngày đã chọn.

> ⚠️ **CẢNH BÁO**<br/>
> Việc xóa dữ liệu không thể hoàn tác. Trước khi xóa, hãy đảm bảo sao lưu dữ liệu hoặc xuất dữ liệu thông qua [**Bảng điều khiển** > **Tất cả các cuộc gọi**](#dashboard-tabs), nếu không dữ liệu sẽ bị mất vĩnh viễn.

<br />

<a id="transform-prompts"></a>
### Lời nhắc biến đổi

Sử dụng **Cài đặt** > **Lời nhắc biến đổi** để quản lý lời nhắc theo lô.

Bạn có thể:

- xem xét các lời nhắc đã lưu
- xóa lời nhắc
- nhập lời nhắc từ tệp
- xuất lời nhắc để sao lưu hoặc chia sẻ

<br />

<a id="users"></a>
### Người dùng

**Chỉ web - chỉ quản trị viên**

Sử dụng **Người dùng** để quản lý tài khoản người dùng trong phiên bản web. Bạn có thể thêm người dùng, cập nhật thông tin của họ, đặt lại mật khẩu và xóa tài khoản.

<br />

<a id="api-config"></a>
### Cấu hình API

**Chỉ máy tính để bàn**

Sử dụng **Cấu hình API** để kết nối ứng dụng máy tính để bàn với OpenRouter hoặc với proxy Transrewrt.

- **Khóa API OpenRouter** là nơi bạn dán khóa của mình.
- **URL API** là địa chỉ dịch vụ. Giữ nguyên mặc định trừ khi bạn được cung cấp địa chỉ khác.
- **Sử dụng Proxy Transrewrt** định tuyến yêu cầu thông qua dịch vụ proxy thay vì trực tiếp đến OpenRouter.
- **Seed khóa** xuất hiện khi tùy chọn proxy được bật.
- **Kiểm tra cấu hình API** kiểm tra xem thiết lập hiện tại có hoạt động không.

Để biết các bước chi tiết về việc lấy khóa API, hãy xem [Cách lấy khóa API](#how-to-get-an-api-key-desktop-app) ở trên.

> ℹ️ **GHI CHÚ**<br/>
> Nếu bạn không chắc **URL API**, **Sử dụng Proxy Transrewrt**, hay **Seed khóa** là gì, hãy giữ nguyên chúng và sử dụng thiết lập mặc định OpenRouter. Thông tin thêm về proxy có sẵn trong kho lưu trữ [Transrewrt Proxy](https://github.com/wsj-br/transrewrt-proxy).

<br />

<a id="about"></a>

### Về

Tab **Về** hiển thị:

- tên ứng dụng
- số phiên bản
- ngày build
- liên kết đến kho lưu trữ dự án

<br /><br />

<a id="common-issues"></a>
## Vấn đề thường gặp

Nếu có điều gì đó không hoạt động như mong đợi, hãy kiểm tra các điểm sau trước tiên.

<br />

<a id="the-app-will-not-translate-rewrite-or-transform-text"></a>
### Ứng dụng không dịch, viết lại hoặc biến đổi văn bản

Kiểm tra xem:

- bạn đã chọn một mô hình trên thanh công cụ
- ít nhất một mô hình được liệt kê trong [**Cài đặt** > **Mô hình**](#models)
- cấu hình API của bạn đang hoạt động

Nếu bạn đang sử dụng ứng dụng desktop:

1. Mở [**Cài đặt** > **Cấu hình API**](#api-config).
2. Kiểm tra xem khóa API của bạn đã được lưu.
3. Nhấp vào **Kiểm tra Cấu hình API**.

<br />

<a id="the-model-list-is-empty"></a>
### Danh sách mô hình trống

Mở [**Cài đặt** > **Mô hình**](#models) và nhấp vào **Làm mới**.

Nếu cần:

- tìm kiếm một mô hình
- bật **Chỉ miễn phí**
- thêm một hoặc nhiều mô hình vào **Mô hình Đã chọn**

<br />

<a id="the-result-is-too-slow-or-too-expensive"></a>
### Kết quả quá chậm hoặc quá tốn kém

Hãy thử một hoặc nhiều cách sau:

- chọn một mô hình khác
- sử dụng đầu vào ngắn hơn
- tắt **Dịch thuật thời gian thực (trong khi gõ)** trong [**Cài đặt** > **Cài đặt Chung**](#general-settings)
- sử dụng các mô hình miễn phí cho các tác vụ đơn giản (xem [Mô hình](#models))

<br />

<a id="the-interface-is-in-the-wrong-language"></a>
### Giao diện ở ngôn ngữ sai

Nhấp vào biểu tượng quả cầu trên [thanh công cụ](#toolbar) và chọn **Ngôn ngữ giao diện** bạn muốn.

<br />

<a id="the-text-is-too-small-or-hard-to-read"></a>
### Văn bản quá nhỏ hoặc khó đọc

Mở [**Cài đặt** > **Cài đặt Chung**](#general-settings) và thay đổi:

- **Họ font chữ**
- **Cỡ**

<br />

<a id="i-changed-a-prompt-and-lost-the-edits"></a>
### Tôi đã thay đổi một lời nhắc và mất các chỉnh sửa

Khi chỉnh sửa một lời nhắc, luôn nhấp vào **Lưu** trước khi nhấp vào **Quay lại để Chạy**.

<br /><br />

<a id="quick-tips"></a>
## Mẹo nhanh

- Bắt đầu với [**Dịch**](#translate) để đảm bảo cấu hình của bạn hoạt động trước khi chuyển sang [**Viết lại**](#rewrite) hoặc [**Biến đổi**](#transform).
- Sử dụng [**Viết lại**](#rewrite) cho các cải thiện cách diễn đạt hàng ngày.
- Sử dụng [**Biến đổi**](#transform) khi bạn cần một quy trình có thể lặp lại cho một tác vụ cụ thể.
- Sử dụng [**Bảng điều khiển**](#dashboard) nếu bạn muốn theo dõi mức độ sử dụng và chi phí.
- Xuất các lời nhắc định kỳ nếu bạn xây dựng một thư viện lời nhắc muốn bảo vệ (xem [Lời nhắc Biến đổi](#transform-prompts)).

<br /><br />

<a id="disclaimer"></a>
## Tuyên bố miễn trừ trách nhiệm

Các tên sản phẩm và biểu tượng thuộc về các chủ sở hữu tương ứng và chỉ được sử dụng cho mục đích nhận dạng. Phần mềm này không liên kết hoặc được hỗ trợ bởi bất kỳ thương hiệu nào được đề cập.

<br /><br />

<a id="license"></a>
## Giấy phép

Bản quyền © 2026 Waldemar Scudeller Jr.

[Giấy phép Apache 2.0](LICENSE)