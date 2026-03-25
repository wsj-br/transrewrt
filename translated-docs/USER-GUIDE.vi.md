---
translated_at: "2026-03-25T22:45:08.134Z"
source_hash: "6ca7b21e820e8ee121cd93bbf98806547c5c3ce7914799891d923201bd2c4466"
source_mtime: 1774468804877.8855
model: "qwen/qwen3-235b-a22b-2507"
---
![Biểu ngữ Transrewrt](../images/transrewrt_banner.png)


<a id="transrewrt-user-guide"></a>
# Hướng dẫn người dùng

<br/>

<a id="introduction"></a>
## Giới thiệu

Transrewrt hỗ trợ bạn làm việc với văn bản theo ba cách chính:

- **Dịch** - chuyển đổi văn bản từ một ngôn ngữ sang ngôn ngữ khác.
- **Viết lại** - diễn đạt lại văn bản theo phong cách khác, ví dụ như rõ ràng hơn, ngắn gọn hơn hoặc trang trọng hơn.
- **Biến đổi** - xử lý văn bản bằng các chỉ thị AI tuỳ chỉnh gọi là các lời nhắc (prompt).

<br/>

Hướng dẫn này giải thích cách sử dụng ứng dụng sau khi đã cài đặt và chạy. Để biết các bước cài đặt, hãy xem tệp **[README](README.vi.md)** chính.

<br/>

> ℹ️ **LƯU Ý**<br/>
> Transrewrt có sẵn dưới dạng ứng dụng máy tính để bàn dành cho Windows và Linux, và dưới dạng ứng dụng web tự lưu trữ. Hướng dẫn này tập trung vào việc sử dụng hàng ngày. Những nội dung chỉ áp dụng cho một phiên bản cụ thể sẽ được ghi rõ.

<small>**Đọc bằng ngôn ngữ khác:** [English (UK)](USER-GUIDE.vi.md) · [Português (BR)](USER-GUIDE.pt-BR.md) · [العربية](USER-GUIDE.ar.md) · [বাংলা](USER-GUIDE.bn.md) · [Català](USER-GUIDE.ca.md) · [简体中文](USER-GUIDE.zh-CN.md) · [繁體中文](USER-GUIDE.zh-TW.md) · [Hrvatski](USER-GUIDE.hr.md) · [Čeština](USER-GUIDE.cs.md) · [Nederlands](USER-GUIDE.nl.md) · [English (US)](USER-GUIDE.en-US.md) · [Filipino](USER-GUIDE.tl.md) · [Français](USER-GUIDE.fr.md) · [Deutsch](USER-GUIDE.de.md) · [Ελληνικά](USER-GUIDE.el.md) · [हिन्दी](USER-GUIDE.hi.md) · [Magyar](USER-GUIDE.hu.md) · [Italiano](USER-GUIDE.it.md) · [日本語](USER-GUIDE.ja.md) · [Basa Jawa](USER-GUIDE.jv.md) · [한국어](USER-GUIDE.ko.md) · [Bahasa Melayu](USER-GUIDE.ms.md) · [فارسی](USER-GUIDE.fa.md) · [Polski](USER-GUIDE.pl.md) · [Português (PT)](USER-GUIDE.pt.md) · [ਪੰਜਾਬੀ](USER-GUIDE.pa.md) · [Română](USER-GUIDE.ro.md) · [Русский](USER-GUIDE.ru.md) · [Slovenčina](USER-GUIDE.sk.md) · [Español](USER-GUIDE.es.md) · [Kiswahili](USER-GUIDE.sw.md) · [Svenska](USER-GUIDE.sv.md) · [తెలుగు](USER-GUIDE.te.md) · [ภาษาไทย](USER-GUIDE.th.md) · [Türkçe](USER-GUIDE.tr.md) · [Українська](USER-GUIDE.uk.md) · [Tiếng Việt](USER-GUIDE.vi.md)</small>

<small>

> **Lưu ý về bản dịch giao diện và tài liệu:** Tất cả các ngôn ngữ giao diện ngoại trừ tiếng Anh (UK) là bản gốc
> đều được dịch bằng các mô hình AI; có thể từ ngữ không chính xác hoặc chứa lỗi.

</small>

<br/>


<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Mục lục** 

- [Trước khi bắt đầu](#before-you-start)
  - [Cách lấy khóa API OpenRouter miễn phí (ứng dụng máy tính)](#how-to-get-a-free-openrouter-api-key-desktop-app)
- [Bắt đầu](#getting-started)
- [Các phần chính của cửa sổ](#main-parts-of-the-window)
  - [Thanh bên](#sidebar)
  - [Thanh công cụ](#toolbar)
  - [Các bảng nhập và xuất nội dung](#input-and-output-panels)
- [Dịch](#translate)
  - [Dịch văn bản](#translate-text)
  - [Chọn ngôn ngữ](#language-selection)
  - [Các thiết lập dịch hữu ích](#helpful-translation-settings)
- [Viết lại](#rewrite)
- [Biến đổi](#transform)
  - [Chạy một lời nhắc hiện tại](#run-an-existing-prompt)
  - [Nếu bạn chưa có lời nhắc nào](#if-you-have-no-prompts-yet)
  - [Tạo lời nhắc nhanh chóng](#create-a-prompt-quickly)
  - [Chỉnh sửa lời nhắc](#edit-a-prompt)
  - [Thử lời nhắc trước khi sử dụng](#test-a-prompt-before-using-it)
- [Bảng điều khiển](#dashboard)
  - [Lọc dữ liệu](#filter-the-data)
  - [Các tab bảng điều khiển](#dashboard-tabs)
  - [Xuất dữ liệu](#export-data)
  - [Xóa các bản ghi đã lưu cho một mô hình](#delete-stored-records-for-a-model)
- [Lịch sử](#history)
  - [Lọc dữ liệu](#filter-the-data-1)
  - [Xuất dữ liệu lịch sử](#export-history-data)
- [Thiết lập](#settings)
  - [Thiết lập chung](#general-settings)
  - [Mô hình](#models)
  - [Ngôn ngữ](#languages)
  - [Theo dõi chi phí](#cost-tracking)
  - [Lời nhắc Biến đổi](#transform-prompts)
  - [Người dùng](#users)
  - [Cấu hình API](#api-config)
  - [Giới thiệu](#about)
- [Các sự cố thường gặp](#common-issues)
  - [Ứng dụng không dịch, viết lại hoặc biến đổi văn bản](#the-app-will-not-translate-rewrite-or-transform-text)
  - [Danh sách mô hình trống](#the-model-list-is-empty)
  - [Kết quả quá chậm hoặc quá tốn kém](#the-result-is-too-slow-or-too-expensive)
  - [Giao diện hiển thị sai ngôn ngữ](#the-interface-is-in-the-wrong-language)
  - [Văn bản quá nhỏ hoặc khó đọc](#the-text-is-too-small-or-hard-to-read)
  - [Biểu đồ bảng điều khiển trống](#dashboard-charts-are-empty)
  - [Chi phí hiển thị "không khả dụng" hoặc sai](#cost-shows-not-available-or-seems-wrong)
  - [Tổng chi phí không khớp với hóa đơn của nhà cung cấp](#total-cost-does-not-match-my-provider-bill)
  - [Trang Lịch sử bị thiếu trong thanh bên](#the-history-page-is-missing-from-the-sidebar)
  - [Ứng dụng web: bị chuyển hướng về trang đăng nhập bất ngờ](#web-app-redirected-to-the-login-page-unexpectedly)
  - [Bảng điều khiển không hiển thị dữ liệu cho người dùng khác (web)](#dashboard-shows-no-data-for-other-users-web)
  - [Tôi đã thay đổi lời nhắc và mất các chỉnh sửa](#i-changed-a-prompt-and-lost-the-edits)
- [Mẹo nhanh](#quick-tips)
- [Tuyên bố miễn trừ trách nhiệm](#disclaimer)
- [Giấy phép](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="before-you-start"></a>

## Trước khi bắt đầu

Để sử dụng Transrewrt, bạn cần truy cập vào ít nhất một nhà cung cấp AI. Các nhà cung cấp được hỗ trợ bao gồm: [OpenRouter](https://openrouter.ai) (tổng hợp nhiều mô hình), OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras, và [Ollama](https://ollama.com) cho mô hình cục bộ.

Bạn không cần chọn mô hình trả phí để bắt đầu. Ngay khi bạn thêm khóa API OpenRouter, ứng dụng tự động bật một tùy chọn **miễn phí** tích hợp sẵn của OpenRouter. Điều này giúp bạn bắt đầu dịch, viết lại và biến đổi văn bản ngay lập tức. Ngoài ra, bạn cũng có thể lấy khóa API miễn phí từ Cerebras, Google, Groq hoặc Mistral AI.

Hiểu đơn giản:

- Một **mô hình** là động cơ AI thực hiện công việc. Các mô hình được liệt kê với **tiền tố nhà cung cấp** (ví dụ như `openrouter/…`, `openai/…`, `ollama/…`).
- Một **khóa API** (hoặc với Ollama là **URL gốc**) là cách ứng dụng kết nối tới nhà cung cấp đó.

Nếu bạn đang dùng **ứng dụng dành cho máy tính để bàn**, hãy thêm khóa ở mục [**Cài đặt** > **Cấu hình API**](#api-config) cho từng nhà cung cấp bạn sử dụng. Nếu chỉ dùng OpenRouter, hãy xem phần [Cách lấy khóa API](#how-to-get-an-api-key-desktop-app) ở dưới đây. Nếu bạn không muốn dùng khóa API, bạn có thể cài đặt Ollama (từ [ollama.com](https://ollama.com)) và dùng mô hình cục bộ thay thế, ví dụ như `translategemma:4b`.

Nếu bạn đang dùng **phiên bản web**, người quản trị máy chủ sẽ cấu hình các nhà cung cấp thông qua các biến môi trường, do đó bạn không thể nhập trực tiếp khóa API trong ứng dụng.

<br/>

<a id="how-to-get-an-api-key-desktop-app"></a>
### Cách lấy khóa API OpenRouter miễn phí (ứng dụng máy tính để bàn)

Nếu bạn đang dùng ứng dụng máy tính để bàn, hãy làm theo các bước sau:

1. Truy cập [OpenRouter](https://openrouter.ai) bằng trình duyệt web.
2. Tạo tài khoản hoặc đăng nhập.
3. Mở trang [Keys](https://openrouter.ai/keys).
4. Bấm nút để tạo khóa API mới.
5. Đặt tên cho khóa để bạn có thể nhận diện dễ dàng sau này.
6. Sao chép khóa API mới này.
7. Quay lại Transrewrt và mở mục **Cài đặt** > **Cấu hình API**.
8. Dán khóa vào ô **OpenRouter API key** (dưới mục **Cài đặt** > **Cấu hình API**).
9. Bấm **Test OpenRouter key** để kiểm tra xem khóa có hoạt động không.

<br/><br/>

<a id="getting-started"></a>
## Bắt đầu sử dụng

Nếu đây là lần đầu tiên bạn dùng Transrewrt, hãy làm theo thứ tự sau:

1. Mở ứng dụng.
2. Nếu cần, chọn **ngôn ngữ giao diện** bằng cách nhấn vào biểu tượng hình quả địa cầu.
3. Nếu đang dùng **ứng dụng máy tính để bàn**, hãy mở mục [**Cài đặt** > **Cấu hình API**](#api-config), thêm khóa API cho ít nhất một nhà cung cấp (ví dụ như OpenRouter), rồi bấm **Test** để kiểm tra.
4. Mở mục [**Cài đặt** > **Mô hình**](#models) và thêm một hoặc nhiều mô hình vào danh sách **Mô hình đã chọn**.
5. Mở mục [**Cài đặt** > **Ngôn ngữ**](#languages), chọn **Ngôn ngữ thường dùng** nếu bạn muốn những ngôn ngữ bạn dùng nhiều nhất hiện lên đầu.
6. Vào **Dịch** và thực hiện một phép dịch đơn giản để xác nhận mọi thứ hoạt động.
7. Khi đã ổn, hãy thử chức năng **Viết lại** sau đó đến **Biến đổi**.

Thứ tự này rất quan trọng. Nó sẽ ngăn ngừa vấn đề phổ biến nhất khi mới dùng: cố thực hiện nhiệm vụ trước khi ứng dụng có kết nối API hoạt động hoặc chưa chọn mô hình nào.

<br/><br/>

<a id="main-parts-of-the-window"></a>
## Các phần chính của cửa sổ

Ứng dụng được chia thành ba khu vực chính:

- **Thanh bên** ở phía trái.
- **Thanh công cụ** ở phía trên.
- **Khu vực làm việc** ở trung tâm.

<br/>

<a id="sidebar"></a>
### Thanh bên

Dùng thanh bên để di chuyển giữa các phần trong ứng dụng. Bạn có thể thu gọn thanh bên để có thêm không gian bằng cách nhấn vào biểu tượng bên cạnh logo ứng dụng.

<br/>

<table>
  <tr>
    <td valign="top">
       <img src="../images/screenshots/vi/sidebar.png" alt="Thanh bên ứng dụng" style="max-width: 100%; border: 1px solid #ddd; border-radius: 4px;">
    </td>
    <td valign="top">
      <br/><br/>
      <ul>
        <li><strong>Dịch</strong> mở không gian làm việc dịch thuật.</li><br/>
        <li><strong>Viết lại</strong> mở không gian làm việc viết lại văn bản.</li><br/>
        <li><strong>Biến đổi</strong> mở không gian làm việc với lời nhắc tùy chỉnh.</li><br/>
        <li><strong>Bảng điều khiển</strong> hiển thị thông tin sử dụng và chi phí.</li><br/>
        <li><strong>Cài đặt</strong> mở bảng cài đặt.</li><br/>
        <li><strong>Lịch sử</strong> hiển thị lịch sử sử dụng kèm theo văn bản đầu vào và đầu ra.</li><br/>
        <li><strong>Người dùng</strong> hiển thị tên người dùng đã đăng nhập (chỉ có trên web).</li>
      </ul>
    </td>
  </tr>
</table>

<br/>

<a id="toolbar"></a>

### Thanh công cụ

Thanh công cụ thay đổi một chút tuỳ theo vị trí bạn đang ở trong ứng dụng.

- Bên trái, thanh hiển thị tên trang hiện tại.
- Bên phải, thanh hiển thị **bộ chọn mô hình** và điều khiển **ngôn ngữ giao diện**.

**Bộ chọn mô hình** cho phép bạn chọn công cụ AI nào sử dụng cho công việc hiện tại.

  ![Bộ chọn mô hình](../images/screenshots/vi/model-selector.png)

Một số mô hình miễn phí có thể không luôn sẵn có — thỉnh thoảng chúng ngoại tuyến hoặc có giới hạn sử dụng. Nếu điều này xảy ra, ứng dụng sẽ tự động loại mô hình đó khỏi danh sách khả dụng của bạn. Để kiểm soát các mô hình xuất hiện, hãy truy cập [**Cài đặt** > **Mô hình**](#models) và chỉnh sửa danh sách mô hình của bạn. 
Bạn cũng có thể mở cài đặt mô hình trực tiếp bằng cách nhấn vào biểu tượng nhà cung cấp ở bên trái tên mô hình trên thanh công cụ.

<br/>

**Biểu tượng hình quả địa cầu + mã ngôn ngữ** thay đổi ngôn ngữ giao diện của ứng dụng, như các menu và nút bấm. Nó **không** thay đổi các ngôn ngữ dịch được sử dụng trong mục **Dịch**.

  ![Bộ chọn ngôn ngữ giao diện](../images/screenshots/vi/language-selector.png)

<br/>

<a id="input-and-output-panels"></a>
### Bảng nhập và xuất

Hầu hết các không gian làm việc sử dụng bảng **Nhập** bên tay trái và bảng **Xuất** bên tay phải.

Mỗi bảng cũng hiển thị:

| **Nhập**                                                          | **Xuất**                                                                                                                  |
|--------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------|
| - Số lượng ký tự <br/>- Số lượng từ <br/>- Số lượng đoạn văn   <br/> | - Thời gian xử lý tác vụ <br/>- **TPS** (số token mỗi giây) <br/>- Số lượng ký tự, từ và đoạn văn <br/>- Mô hình đã sử dụng |


Nếu bạn thắc mắc về các thuật ngữ kỹ thuật:

- **Token** là một đoạn văn bản nhỏ. Bạn có thể nghĩ đó là một phần của từ hoặc một từ ngắn.
- **TPS** là số lượng mảnh văn bản đó mô hình xử lý mỗi giây.

<br/>

Bạn cũng có thể theo dõi chi phí cho mỗi thao tác (nếu có) và tổng chi phí, bằng cách bật tuỳ chọn `Hiển thị thông tin chi phí trên các hành động` tại [**Cài đặt** > **Cài đặt chung**](#general-settings). 
 
<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="translate"></a>
## Dịch

Sử dụng **Dịch** khi bạn muốn chuyển văn bản từ ngôn ngữ này sang ngôn ngữ khác.

![Không gian làm việc Dịch](../images/screenshots/vi/translate.png)

<br/>

<a id="translate-text"></a>
### Dịch văn bản

1. Mở **Dịch**.
2. Chọn một ngôn ngữ ở mục **Từ**.
3. Chọn một ngôn ngữ ở mục **Sang**.
4. Chọn một mô hình trên thanh công cụ.
5. Nhập hoặc dán văn bản vào ô **Nhập**.
6. Nhấn **Dịch**.
7. Đọc kết quả ở ô **Xuất**.
8. Sử dụng nút sao chép nếu bạn muốn sao chép kết quả.

<br/>

<a id="language-selection"></a>
### Chọn ngôn ngữ

- **Từ** có thể là một ngôn ngữ cụ thể hoặc **Tự động nhận diện ngôn ngữ**.
- **Sang** là ngôn ngữ mà bạn muốn kết quả được dịch ra.

Các ngôn ngữ **Ưa thích** đã chọn của bạn sẽ xuất hiện ở đầu danh sách. Bạn có thể thiết lập chúng tại mục [**Cài đặt** > **Ngôn ngữ**](#languages).

<br/>

<a id="helpful-translation-settings"></a>
### Các cài đặt dịch hữu ích

Tại [**Cài đặt** > **Cài đặt chung**](#general-settings), bạn có thể thay đổi cách thức dịch hoạt động:

- **Tự động dịch khi dán** sẽ thực hiện dịch ngay khi bạn dán văn bản.
- **Tự động sao chép kết quả vào clipboard** sẽ tự động sao chép kết quả sau khi tác vụ hoàn tất.
- **Dịch thời gian thực (trong lúc nhập)** sẽ dịch khi bạn đang nhập.
- **Thời gian chờ (ms)** quyết định khoảng thời gian ứng dụng chờ trước khi thực hiện dịch thời gian thực.
- **Enter** quy định điều gì xảy ra khi bạn nhấn phím `Enter`:

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="rewrite"></a>
## Viết lại

Sử dụng **Viết lại** khi bạn muốn cải thiện cách diễn đạt mà không làm thay đổi ý chính.

![Không gian làm việc Viết lại](../images/screenshots/vi/rewrite.png)

Tính năng này hữu ích cho:

- sửa lỗi chính tả và ngữ pháp
- làm cho văn bản rõ ràng hơn
- làm cho văn bản trang trọng hoặc thân mật hơn
- rút ngắn hoặc mở rộng văn bản
- làm cho văn bản mang tính kỹ thuật hơn

<br/>

> 💡 **GỢI Ý**<br/>
> Khi bạn sử dụng chế độ "**Kiểm tra Chính tả và Ngữ pháp**", một nút `Hiển thị thay đổi` sẽ xuất hiện ở bảng xuất.
> Nhấn nút này để bật/tắt hiển thị các chỉnh sửa, cho phép xem hoặc ẩn các thay đổi cụ thể được thực hiện trên văn bản của bạn.


<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="transform"></a>

## Biến đổi

Sử dụng **Biến đổi** khi bạn muốn AI tuân theo một tập hợp hướng dẫn do bạn tự đặt.

![Môi trường làm việc Biến đổi](../images/screenshots/vi/transform.png)

Đây là khu vực linh hoạt nhất trong ứng dụng. Bạn có thể dùng nó cho các nhiệm vụ như:

- tóm tắt ghi chú
- biến nội dung thô thành một email hoàn chỉnh
- trích xuất các điểm chính
- chuyển đổi văn bản sang định dạng cụ thể
- bất kỳ hoạt động tuỳ chỉnh nào khác với văn bản đầu vào

<br/>

<a id="run-an-existing-prompt"></a>
### Chạy một hướng dẫn đã có

1. Mở **Biến đổi**.
2. Chọn một hướng dẫn từ danh sách hướng dẫn.
3. Nếu xuất hiện ô **Ngôn ngữ đích**, hãy chọn một ngôn ngữ nếu cần.
4. Gõ hoặc dán văn bản vào phần **Đầu vào**.
5. Nhấp **Biến đổi**.
6. Đọc kết quả ở phần **Đầu ra**.

<br/>

<a id="if-you-have-no-prompts-yet"></a>
### Nếu bạn chưa có hướng dẫn nào

Nếu danh sách hướng dẫn của bạn trống, hãy nhấp **Tải hướng dẫn mẫu**. Thao tác này sẽ thêm các ví dụ tích hợp sẵn để bạn có thể bắt đầu nhanh chóng.

<br/>

> ℹ️ **LƯU Ý**<br/>
> Các hướng dẫn mẫu được cung cấp bằng tiếng Anh. Sau khi tải xong, bạn có thể sửa một hướng dẫn và sử dụng **Dịch hướng dẫn** để dịch nó sang ngôn ngữ của bạn.

<br/>

<a id="create-a-prompt-quickly"></a>
### Tạo nhanh một hướng dẫn

Cách nhanh nhất để tạo một hướng dẫn là:

1. Nhấp **Hướng dẫn mới**.
2. Nhấp **Tạo hướng dẫn**.
3. Mô tả điều bạn muốn hướng dẫn đó làm.
4. Chọn một mô hình.
5. Để ứng dụng tạo bản nháp cho bạn.
6. Kiểm tra bản nháp và nhấp **Lưu**.

![Tạo hướng dẫn](../images/screenshots/vi/transform-generate.png)


<br/>

<a id="edit-a-prompt"></a>
### Chỉnh sửa một hướng dẫn

Khi tạo hoặc chỉnh sửa một hướng dẫn, phần soạn thảo sẽ hiện bên trái và khu vực thử nghiệm hiện bên phải.

![Trình soạn thảo hướng dẫn Biến đổi](../images/screenshots/vi/transform-prompt-edit.png)

Các trường chính gồm có:

- **Tên hướng dẫn**: tên hiển thị trong danh sách hướng dẫn.
- **Hướng dẫn cho hướng dẫn (tùy chọn)**: gợi ý ngắn hiển thị cho người dùng khi chạy hướng dẫn.
- **Vai trò mô hình**: vai trò tổng thể được gán cho AI, ví dụ như 'Bạn là trợ lý hữu ích.'
- **Hướng dẫn mô hình (mỗi dòng một hướng dẫn)**: các quy tắc cụ thể mà bạn muốn AI tuân theo.
- **Mô tả đầu ra**: từ ngắn mô tả kết quả, ví dụ như 'tóm tắt' hay 'viết lại'.
- **Temperature (0,0 → 1,0)**: cách mô hình hành xử; xem phần dưới.
- **Yêu cầu ngôn ngữ đích**: thêm bộ chọn ngôn ngữ đích khi chạy hướng dẫn.

Nếu bạn chưa quen với thuật ngữ kỹ thuật **Temperature**, hãy tưởng tượng như sau:

- **Temperature thấp hơn** cho kết quả ổn định và dễ đoán hơn.
- **Temperature cao hơn** cho kết quả đa dạng và sáng tạo hơn.

Bạn cũng có thể sử dụng:

- **`Tạo hướng dẫn`** để tạo bản nháp mới từ mô tả đơn giản
- **`Cải thiện hướng dẫn`** để tinh chỉnh hướng dẫn hiện có
- **`Dịch hướng dẫn`** để dịch các trường trong hướng dẫn

<br/>

> ⚠️ **CẢNH BÁO**<br/>
> Nhấp **`Lưu`** trước khi nhấp **`Quay lại để chạy`**. Nếu bạn quay lại mà chưa lưu, các thay đổi sẽ bị mất.

<br/>

<a id="test-a-prompt-before-using-it"></a>
### Thử nghiệm hướng dẫn trước khi sử dụng

Bảng thử nghiệm bên phải cho phép bạn thử hướng dẫn với văn bản mẫu trước khi dùng trong công việc hằng ngày.

Tính năng này hữu ích khi:

- bạn đang tạo một hướng dẫn mới
- bạn đang so sánh hai phiên bản hướng dẫn
- bạn muốn kiểm tra sắc thái, độ dài hoặc định dạng đầu ra

<br/>

> ℹ️ **LƯU Ý**<br/>
> Bạn có thể xuất và nhập các hướng dẫn đã lưu tại mục [**Cài đặt** > **Hướng dẫn Biến đổi**](#transform-prompts).

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="dashboard"></a>
## Bảng điều khiển

Dùng **Bảng điều khiển** để xem mức độ sử dụng ứng dụng và chi phí (đối với các mô hình có phí).

![Tóm tắt Bảng điều khiển](../images/screenshots/vi/dashboard-summary.png)


<br/>

> ℹ️ **LƯU Ý**<br/>
> Nếu bạn chỉ dùng các mô hình miễn phí, các biểu đồ liên quan đến chi phí sẽ trống.

<br/>

<a id="filter-the-data"></a>
### Lọc dữ liệu

Sử dụng các nút lọc ở đầu trang để thay đổi phạm vi thời gian.

![Các bộ lọc Bảng điều khiển](../images/screenshots/vi/dashboard-filter.png)

<br/>

> ℹ️ **LƯU Ý**<br/>
> Bộ lọc **Người dùng** chỉ hiển thị với quản trị viên trong phiên bản web. Người dùng thông thường sẽ không thấy bộ lọc này, và nó cũng không khả dụng trong ứng dụng máy tính để bàn.

<br/>

<a id="dashboard-tabs"></a>

### Các tab Bảng điều khiển

- **Tổng quan** cung cấp cái nhìn tổng thể về việc sử dụng và chi phí.
- **Theo sử dụng** phân tích hoạt động theo ngôn ngữ dịch, chế độ viết lại và lời nhắc chuyển đổi.
- **Theo mô hình** cho biết bạn đã dùng mô hình nào và chi phí của chúng.
- **Theo ngày** hiển thị tổng số liệu hàng ngày.
- **Tất cả các yêu cầu** hiển thị toàn bộ lịch sử yêu cầu và cho phép bạn xuất dữ liệu.

<br/>

<a id="export-data"></a>
### Xuất dữ liệu

Các bảng trong bảng điều khiển có thể xuất dữ liệu thành:

- **JSON**
- **CSV**
- **XLSX**

Tính năng này hữu ích nếu bạn muốn xem lại hoạt động bên ngoài ứng dụng hoặc chia sẻ báo cáo.

<br/>

<a id="delete-stored-records-for-a-model"></a>
### Xóa bản ghi đã lưu cho một mô hình

Trong **Theo mô hình** hoặc **Tất cả các yêu cầu**, bạn có thể xóa bản ghi đã lưu cho một mô hình bằng cách nhấn vào biểu tượng "thùng rác".

> ⚠️ **CẢNH BÁO**<br/>
> Việc xóa bản ghi đã lưu là không thể hoàn tác. Hãy chỉ sử dụng tính năng này nếu bạn chắc chắn rằng bạn không còn cần lịch sử đó nữa.

Để xóa tất cả dữ liệu hoặc xóa bản ghi dựa theo độ tuổi của chúng, hãy chuyển đến mục [**Cài đặt** > **Theo dõi chi phí**](#cost-tracking). Tại đó, bạn sẽ tìm thấy các tùy chọn để xóa toàn bộ dữ liệu đã lưu hoặc chỉ dữ liệu cũ hơn một ngày nhất định.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="history"></a>
## Lịch sử

Nhấn vào **Lịch sử** để xem lịch sử các thao tác của bạn bên trong **Transrewrt**, bao gồm nội dung đầu vào và đầu ra của mỗi hoạt động.

![Trang Lịch sử](../images/screenshots/vi/history.png)

<br/>

<a id="filter-the-history"></a>
### Lọc dữ liệu

**Lịch sử** sử dụng các bộ lọc giống như trang **Bảng điều khiển**. Sử dụng chúng để chọn khoảng thời gian.

![Bộ lọc Bảng điều khiển](../images/screenshots/vi/dashboard-filter.png)

<br/>

> ℹ️ **LƯU Ý**<br/>
> Bộ lọc **Người dùng** chỉ hiển thị với quản trị viên trong phiên bản web. Người dùng thông thường sẽ không thấy bộ lọc này, và nó cũng không có trong ứng dụng máy tính để bàn.

<br/>

<a id="export-history-data"></a>
### Xuất dữ liệu lịch sử

Trang lịch sử có thể xuất dữ liệu đã lọc ra định dạng:

- **JSON**
- **CSV**
- **XLSX**

Tính năng này hữu ích nếu bạn muốn xem lại hoạt động bên ngoài ứng dụng hoặc chia sẻ báo cáo.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="settings"></a>
## Cài đặt

Mở **Cài đặt** từ thanh bên để tùy chỉnh cách ứng dụng hoạt động.

Các tab có sẵn phụ thuộc vào nền tảng và vai trò của bạn:

  | Tab                   | Máy để bàn | Web (quản trị viên) | Web (người dùng thường) |
  |-----------------------|:----------:|:-------------------:|:----------------------:|
  | Cài đặt chung         |     có     |         có          |           có           |
  | Mô hình               |     có     |         có          |           có           |
  | Ngôn ngữ              |     có     |         có          |           có           |
  | Theo dõi chi phí      |     có     |         có          |            —           |
  | Lời nhắc chuyển đổi   |     có     |         có          |           có           |
  | Người dùng            |     —      |         có          |            —           |
  | Cấu hình API          |     có     |         có          |            —           |
  | Giới thiệu            |     có     |         có          |           có           |

<br/>

> ℹ️ **LƯU Ý**<br/>
> Trong phiên bản web, mỗi người dùng có cấu hình riêng. Các cài đặt như mô hình đã chọn, ngôn ngữ, tùy chọn chung và lời nhắc chuyển đổi được lưu riêng cho từng người dùng. Những thay đổi bạn thực hiện sẽ không ảnh hưởng đến người dùng khác.

<br/>


[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="general-settings"></a>
### Cài đặt chung

Sử dụng **Cài đặt chung** để điều chỉnh hành vi gõ phím, việc lưu chi tiết thực thi cho **Lịch sử**, và giao diện.

**Hành vi**

- **Hành vi của phím ENTER** cho phép chọn xem phím `Enter` thực hiện tác vụ hay chèn dòng mới.
- **Tự động dịch khi dán** bắt đầu dịch ngay khi bạn dán văn bản.
- **Tự động sao chép kết quả vào bộ nhớ tạm** sẽ sao chép kết quả thành công một cách tự động.
- **Dịch thời gian thực (khi đang gõ)** dịch văn bản khi bạn đang nhập.
- **Thời gian chờ (ms)** đặt thời gian chờ cho tính năng dịch thời gian thực.

**Lịch sử**

- **Giữ lịch sử thực thi** kiểm soát việc có lưu **văn bản đầu vào và đầu ra** cho mục [**Lịch sử**](#history) trên thanh bên hay không. Nếu tắt tùy chọn này, hệ thống sẽ yêu cầu xác nhận; nếu bạn xác nhận, toàn bộ văn bản lịch sử đã lưu sẽ bị xóa khỏi cơ sở dữ liệu.
- **Xóa dữ liệu lịch sử** cho phép bạn xóa văn bản đã lưu theo thời gian (ví dụ: cũ hơn vài tháng, hoặc **tất cả dữ liệu (xóa toàn bộ)**) bằng chức năng **Xóa dữ liệu**. Tính năng này chỉ ảnh hưởng đến văn bản thực thi đã lưu dùng cho chế độ xem **Lịch sử**; nó **không** xóa dữ liệu chi phí hoặc thống kê sử dụng. Để xóa hoặc hạn chế dữ liệu **chi phí**, hãy sử dụng [**Cài đặt** > **Theo dõi chi phí**](#cost-tracking).

**Giao diện**

- **Hiển thị thông tin chi phí trên các hành động** điều chỉnh việc hiển thị chi phí cho mỗi thao tác (nếu có) và tổng chi phí trên các bảng đầu ra Dịch, Viết lại và Chuyển đổi.
- **Số chữ số phần thập phân của chi phí** thay đổi cách hiển thị số thập phân của chi phí.
- **Chỉ trên web:** **hiển thị khoảng viền xung quanh ứng dụng** thêm không gian trống xung quanh giao diện.
- **Họ phông chữ** thay đổi phông chữ viết trong các bảng văn bản.
- **Kích cỡ** thay đổi kích thước phông chữ.


<br/>

<a id="models"></a>

### Mô hình

Sử dụng **Cài đặt** > **Mô hình** để chọn các mô hình hiển thị trên thanh công cụ.

![Tab Cài đặt Mô hình](../images/screenshots/vi/settings-models.png)

Trang này có hai danh sách:

- **Các mô hình có sẵn** ở bên trái
- **Các mô hình đã chọn** ở bên phải

Các điều khiển hữu ích bao gồm:

- **Tìm kiếm mô hình...** để tìm mô hình theo tên
- Các nhãn **Nhà cung cấp** để thu hẹp danh sách theo một nền tảng (OpenRouter, OpenAI, Ollama, …)
- **Chỉ dùng miễn phí** để chỉ hiển thị các mô hình miễn phí
- **Làm mới** để tải lại danh sách
- **Mở rộng tất cả** và **Thu gọn tất cả** khi sắp xếp theo nhà cung cấp

ID mô hình bao gồm tiền tố nhà cung cấp (ví dụ `openrouter/…` so với `openai/…`). Các nhãn như **OpenAI (OpenRouter)** so với **OpenAI (trực tiếp)** cho biết cách định tuyến lưu lượng truy cập.

> ℹ️ **LƯU Ý**<br/>
> **Mô hình OpenRouter Body Builder** (`openrouter/bodybuilder`) là mô hình định tuyến, không phải mô hình trò chuyện thông thường: phản hồi của nó là dữ liệu JSON mô tả nội dung yêu cầu API OpenRouter (ví dụ một mảng `requests` với `model` và `messages`). Nếu bạn dùng mô hình này cho các tác vụ **Dịch**, **Viết lại** hoặc **Chuyển đổi**, bảng kết quả sẽ hiển thị JSON thay vì văn bản hoàn chỉnh. Hãy chọn mô hình văn bản thông thường để thực hiện những công việc này. Xem thêm [trang mô hình Body Builder](https://openrouter.ai/openrouter/bodybuilder) trên OpenRouter.

Các thao tác:

- Để thêm mô hình, bấm **Thêm** hoặc nhấp vào bất kỳ đâu trong mục đó.

- Để xóa mô hình, nhấp vào **X** bên cạnh nó trong danh sách **Đã chọn** hoặc bấm **Đã chọn** trên mục trong danh sách Mô hình khả dụng.

- Để xóa toàn bộ danh sách, nhấp vào **Bỏ chọn tất cả**. Mô hình miễn phí bắt buộc sẽ vẫn được giữ lại.

<br/>

> ℹ️ **LƯU Ý**<br/>
> Nếu bạn chưa muốn nạp tiền vào tài khoản OpenRouter ngay, hãy bắt đầu bằng cách bật **Chỉ dùng miễn phí** và chọn các mô hình miễn phí (không yêu cầu thẻ tín dụng). Bạn cũng có thể dùng Ollama để chạy mô hình cục bộ mà không cần API key nào.

<br/>

<a id="languages"></a>
### Ngôn ngữ

Sử dụng **Cài đặt** > **Ngôn ngữ** để sắp xếp danh sách ngôn ngữ được dùng trong ứng dụng.

- **Ngôn ngữ ưa thích** sẽ được ghim vào đầu danh sách ngôn ngữ trong các công cụ **Dịch** và **Chuyển đổi**.
- **Ngôn ngữ tùy chỉnh** cho phép bạn thêm ngôn ngữ không có trong danh sách mặc định.

Nếu bạn thêm một ngôn ngữ tùy chỉnh, nó sẽ xuất hiện trong trình chọn ngôn ngữ cùng với các lựa chọn tích hợp.

<br/>

<a id="cost-tracking"></a>
### Theo dõi chi phí

Sử dụng **Cài đặt** > **Theo dõi chi phí** để quản lý thông tin chi phí.

- **Tổng chi phí** hiển thị tổng số đang tích lũy.
- **Sao chép giá trị** giúp sao chép tổng chi phí vào bộ nhớ tạm.
- **Đặt lại chi phí** đặt lại tổng số đã lưu về 0.
- **Đồng bộ với mức sử dụng API key** đặt tổng chi phí theo đúng mức sử dụng được báo cáo bởi tài khoản OpenRouter của bạn (chỉ áp dụng cho OpenRouter).
- **Sử dụng API Key** hiển thị chi tiết mức sử dụng OpenRouter (nếu có).
- **Xóa dữ liệu chi phí** xóa tất cả dữ liệu hoặc chỉ các mục cũ hơn một ngày được chọn.

**Theo dõi chi phí:** Khi bạn dùng các mô hình OpenRouter, ứng dụng sẽ hiển thị mức sử dụng và chi phí thực tế dựa trên dữ liệu từ OpenRouter. Với các nền tảng khác, ứng dụng sẽ ước tính chi phí dựa trên giá công bố bởi OpenRouter; nếu giá không khả dụng, chi phí ước tính có thể là 0.

<br/>

> ℹ️ **LƯU Ý**<br/>
> **Tất cả các con số chi phí đều chỉ mang tính ước lượng cho mục đích tham khảo, không phải hóa đơn chính thức.**


<br/>

> ⚠️ **CẢNH BÁO**<br/>
> Việc xóa dữ liệu là KHÔNG THỂ hoàn tác. Trước khi xóa, hãy sao lưu hoặc xuất dữ liệu qua [**Lịch sử**](#history) 
> hoặc [**Bảng điều khiển** > **Tất cả các lần gọi**](#dashboard-tabs), nếu không dữ liệu sẽ bị mất vĩnh viễn. 
> Toàn bộ lịch sử đầu vào/đầu ra liên quan đến từng lần gọi API cũng sẽ bị xóa.

<br/>

<a id="transform-prompts"></a>
### Câu nhắc chuyển đổi

Sử dụng **Cài đặt** > **Câu nhắc chuyển đổi** để quản lý các câu nhắc theo dạng khối.

Bạn có thể:

- xem lại các câu nhắc đã lưu
- xóa các câu nhắc
- nhập câu nhắc từ tệp
- xuất câu nhắc để sao lưu hoặc chia sẻ

<br/>

<a id="users"></a>
### Người dùng

Sử dụng **Người dùng** để quản lý tài khoản trong phiên bản web. Bạn có thể thêm người dùng, cập nhật thông tin, đặt lại mật khẩu và xóa tài khoản.

<br/>

<a id="api-config"></a>
### Cấu hình API

Các nhà cung cấp được hỗ trợ: OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras và **Ollama** (mô hình cục bộ qua URL gốc). Bạn chỉ cần cấu hình những nhà cung cấp bạn sử dụng.

**Ứng dụng web: chỉ dành cho quản trị viên**

Các khóa API được cấu hình qua biến môi trường hệ thống hoặc Docker — không được nhập trong giao diện web. Trang này hiển thị những nhà cung cấp đã có khóa cấu hình và cho phép bạn thử nghiệm từng khóa bằng cách nhấn nút **`Kiểm tra`**.

<br/>

> ℹ️ **LƯU Ý**<br/>
> Để thay đổi khóa API, hãy cập nhật biến môi trường trong cấu hình hệ thống hoặc Docker rồi khởi động lại máy chủ hoặc container.

<br/>

**Ứng dụng máy tính để bàn**

Sử dụng **Cấu hình API** để lưu trữ khóa API cho từng nhà cung cấp bạn dùng. Với Ollama, hãy nhập **URL gốc** thay vì nhập khóa API.

<br/>

> 💡 **Mẹo** <br/>
> Nếu bạn không muốn dùng khóa API hay trả phí sử dụng, bạn có thể [tải Ollama](https://ollama.com) và chạy các mô hình (ví dụ như `translategemma:4b`) cục bộ trên máy tính hoàn toàn miễn phí. Ngoài ra, bạn có thể tạo tài khoản OpenRouter miễn phí (không cần thẻ tín dụng) để dùng các mô hình miễn phí, hoặc lấy khóa API miễn phí từ Cerebras, Google, Groq, hay Mistral AI.

<br/>

- Chỉ thêm các nhà cung cấp bạn cần dùng. Trong **Cài đặt** > **Mô hình**, mỗi ID mô hình bắt đầu bằng tên nhà cung cấp (ví dụ: `openrouter/openrouter/free`, `openai/gpt-4o`, `ollama/llama3`).

Để thêm khóa API, nhập giá trị vào ô văn bản và nhấn **`Lưu`**. Để thay thế khóa hiện tại, nhấn **`Sửa`**. Để kiểm tra khóa có hoạt động, nhấn **`Kiểm tra`**. Với URL gốc Ollama, luôn nhấn **`Kiểm tra`** để xác minh kết nối.

<br/>

> ℹ️ **LƯU Ý**<br/>
> Bạn không thể xem giá trị hiện tại của một khóa API. Bạn chỉ có thể thay thế nó bằng nút **`Sửa`**.
> Khóa API được lưu ở dạng mã hóa trong cấu hình.

<br/>

<a id="about"></a>

### Giới thiệu

Tab **Giới thiệu** hiển thị:

- tên ứng dụng
- số phiên bản
- ngày xây dựng
- một liên kết đến kho mã nguồn dự án

<br/><br/>

<a id="common-issues"></a>
## Các sự cố thường gặp

Nếu có điều gì không hoạt động như mong đợi, hãy kiểm tra các điểm sau đây trước tiên.

<br/>

<a id="the-app-will-not-translate-rewrite-or-transform-text"></a>
### Ứng dụng không dịch, viết lại hoặc biến đổi văn bản

Vui lòng kiểm tra rằng:

- bạn đã chọn một mô hình trong thanh công cụ
- ít nhất một mô hình được liệt kê trong [**Cài đặt** > **Mô hình**](#models)
- thiết lập API của bạn đang hoạt động

Nếu bạn đang sử dụng ứng dụng bản dành cho máy tính để bàn:

1. Mở [**Cài đặt** > **Cấu hình API**](#api-config).
2. Kiểm tra ít nhất một khóa API đã được lưu.
3. Nhấp **Kiểm tra** bên cạnh nhà cung cấp để xác nhận khóa đang hoạt động.

<br/>

<a id="the-model-list-is-empty"></a>
### Danh sách mô hình trống

Mở [**Cài đặt** > **Mô hình**](#models) và nhấn **Làm mới**.

Nếu cần thiết:

- tìm kiếm một mô hình
- bật **Chỉ miễn phí**
- thêm một hoặc nhiều mô hình vào **Mô hình đã chọn**

<br/>

<a id="the-result-is-too-slow-or-too-expensive"></a>
### Kết quả quá chậm hoặc quá tốn kém

Thử một hay nhiều cách sau:

- chọn một mô hình khác
- sử dụng đầu vào ngắn hơn
- tắt **Dịch thời gian thực (khi đang nhập)** trong [**Cài đặt** > **Cài đặt chung**](#general-settings)
- sử dụng các mô hình miễn phí cho các tác vụ đơn giản (xem [Mô hình](#models))

<br/>

<a id="the-interface-is-in-the-wrong-language"></a>
### Giao diện hiển thị bằng ngôn ngữ sai

Nhấp vào biểu tượng hình quả địa cầu trên [thanh công cụ](#toolbar) và chọn **Ngôn ngữ giao diện** mong muốn.

<br/>

<a id="the-text-is-too-small-or-hard-to-read"></a>
### Văn bản quá nhỏ hoặc khó đọc

Mở [**Cài đặt** > **Cài đặt chung**](#general-settings) và thay đổi:

- **Phông chữ**
- **Cỡ chữ**

<br/>

<a id="dashboard-charts-are-empty"></a>
### Biểu đồ trên Bảng điều khiển trống

Điều này là bình thường nếu:

- bạn chỉ sử dụng **mô hình miễn phí** (biểu đồ chi phí sẽ trống)
- **bộ lọc thời gian** đã chọn không bao gồm khoảng thời gian các yêu cầu được thực hiện — hãy thử chọn **Tất cả** để kiểm tra

Nếu biểu đồ vẫn trống sau khi chọn **Tất cả**, hãy xác nhận xem các yêu cầu có xuất hiện trong [**Lịch sử**](#history) hoặc trong tab **Tất cả các yêu cầu** hay không.

<br/>

<a id="cost-shows-not-available-or-seems-wrong"></a>
### Chi phí hiển thị "không khả dụng" hoặc có vẻ sai

Khi bạn sử dụng mô hình thông qua **OpenRouter**, ứng dụng sẽ hiển thị số tiền thực tế mà OpenRouter báo cáo.

Đối với **các nhà cung cấp khác** (trực tiếp OpenAI, trực tiếp Anthropic, v.v.), chi phí được ước tính dựa trên dữ liệu giá cả mà OpenRouter công bố. Nếu không tìm thấy giá tương ứng cho một mô hình, chi phí sẽ hiển thị là **không khả dụng** và không được cộng vào tổng chi phí của bạn.

<br/>

<a id="total-cost-does-not-match-my-provider-bill"></a>
### Tổng chi phí không khớp với hóa đơn của nhà cung cấp

Tất cả các con số chi phí trong ứng dụng đều chỉ là **ước tính để tham khảo**, không phải báo cáo thanh toán chính thức.

Để đưa tổng chi phí gần hơn với số liệu thực tế từ OpenRouter, hãy mở [**Cài đặt** > **Theo dõi chi phí**](#cost-tracking) và nhấp **Đồng bộ với mức sử dụng khóa API**.

<br/>

<a id="the-history-page-is-missing-from-the-sidebar"></a>
### Trang Lịch sử bị thiếu trong thanh bên

Tùy chọn **Giữ lịch sử thực thi** có thể đã bị tắt. Hãy mở [**Cài đặt** > **Cài đặt chung**](#general-settings) và bật nó lên. Lưu ý rằng việc bật tùy chọn này sẽ không khôi phục dữ liệu lịch sử đã bị xóa trước đó.

<br/>

<a id="web-app-session-expired"></a>
### Ứng dụng web: bị chuyển hướng về trang đăng nhập một cách bất ngờ

Phiên đăng nhập của bạn có thể đã hết hạn. Hãy đăng nhập lại. Nếu sự cố xảy ra thường xuyên, hãy kiểm tra cấu hình máy chủ về thiết lập thời gian tồn tại của phiên.

<br/>

<a id="dashboard-shows-no-data-for-other-users"></a>
### Bảng điều khiển không hiển thị dữ liệu cho người dùng khác (trên web)

Chỉ **quản trị viên** mới có thể xem dữ liệu từ tất cả người dùng thông qua bộ lọc **Người dùng**. Người dùng thông thường theo thiết kế chỉ có thể xem hoạt động của chính họ.

<br/>

<a id="i-changed-a-prompt-and-lost-the-edits"></a>
### Tôi đã chỉnh sửa lời nhắc nhưng mất các thay đổi

Khi đang chỉnh sửa lời nhắc, hãy luôn nhấp **Lưu** trước khi nhấp **Trở lại Chạy**.

<br/><br/>

<a id="quick-tips"></a>
## Mẹo nhanh

- Bắt đầu với [**Dịch**](#translate) để đảm bảo thiết lập của bạn hoạt động trước khi chuyển sang [**Viết lại**](#rewrite) hay [**Biến đổi**](#transform).
- Sử dụng [**Viết lại**](#rewrite) để cải thiện văn phong hàng ngày.
- Sử dụng [**Biến đổi**](#transform) khi bạn cần một quy trình có thể lặp lại cho một nhiệm vụ cụ thể.
- Sử dụng [**Bảng điều khiển**](#dashboard) nếu bạn muốn theo dõi việc sử dụng và chi phí.
- Sử dụng [**Lịch sử**](#history) để xem lại các thao tác trước đó cùng toàn bộ nội dung đầu vào/đầu ra.
- Xuất lời nhắc thường xuyên nếu bạn đang xây dựng một thư viện lời nhắc muốn giữ an toàn (xem [Biến đổi lời nhắc](#transform-prompts)) hoặc nếu bạn muốn chia sẻ với người khác.

<br/><br/>

<a id="disclaimer"></a>

## Miễn trừ trách nhiệm

Tên sản phẩm và biểu tượng thuộc sở hữu của các chủ thể tương ứng và chỉ được sử dụng nhằm mục đích nhận dạng. Phần mềm này không liên kết hoặc được sự bảo trợ bởi bất kỳ thương hiệu nào được đề cập.

<br/><br/>

<a id="license"></a>
## Giấy phép

Bản quyền © 2026 Waldemar Scudeller Jr.

[Giấy phép Apache 2.0](LICENSE)