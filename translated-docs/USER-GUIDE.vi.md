---
translated_at: "2026-03-28T23:09:39.032Z"
source_hash: "8a4de9e99d68da9a3c641f91e2ae19c21861832981859dbe8cc904fc8ca702ed"
source_mtime: "2026-03-28T22:43:41.258Z"
model: "qwen/qwen3-235b-a22b-2507"
---
![Transrewrt banner](../images/transrewrt_banner.png)


<a id="transrewrt-user-guide"></a>

# Hướng dẫn người dùng

<br/>

<a id="introduction"></a>

## Giới thiệu

Transrewrt giúp bạn làm việc với văn bản theo ba cách chính:

- **Dịch** - chuyển đổi văn bản từ một ngôn ngữ sang ngôn ngữ khác.
- **Viết lại** - diễn đạt lại văn bản theo phong cách khác, ví dụ như rõ ràng hơn, ngắn gọn hơn hoặc trang trọng hơn.
- **Chuyển đổi** - xử lý văn bản bằng các hướng dẫn trí tuệ nhân tạo (AI) tùy chỉnh gọi là lời nhắc (prompts).

<br/>

Hướng dẫn này mô tả cách sử dụng ứng dụng sau khi đã được cài đặt và chạy. Để biết các bước cài đặt, xem **[README](README.vi.md)** chính.

<br/>

> ℹ️ **LƯU Ý**<br/>
> Transrewrt có sẵn dưới dạng ứng dụng máy tính để bàn cho Windows và Linux, và dưới dạng ứng dụng web tự lưu trữ. Hướng dẫn này tập trung vào việc sử dụng hằng ngày. Những nội dung chỉ áp dụng cho một phiên bản cụ thể sẽ được đánh dấu rõ ràng.

<small>**Đọc bằng các ngôn ngữ khác:** </small>

<small id="lang-list"> [English (UK)](../USER-GUIDE.md) · [Português (BR)](USER-GUIDE.pt-BR.md) · [العربية](USER-GUIDE.ar.md) · [বাংলা](USER-GUIDE.bn.md) · [Català](USER-GUIDE.ca.md) · [简体中文](USER-GUIDE.zh-CN.md) · [繁體中文](USER-GUIDE.zh-TW.md) · [Hrvatski](USER-GUIDE.hr.md) · [Čeština](USER-GUIDE.cs.md) · [Nederlands](USER-GUIDE.nl.md) · [English (US)](USER-GUIDE.en-US.md) · [Filipino](USER-GUIDE.tl.md) · [Français](USER-GUIDE.fr.md) · [Deutsch](USER-GUIDE.de.md) · [Ελληνικά](USER-GUIDE.el.md) · [हिन्दी](USER-GUIDE.hi.md) · [Magyar](USER-GUIDE.hu.md) · [Italiano](USER-GUIDE.it.md) · [日本語](USER-GUIDE.ja.md) · [Basa Jawa](USER-GUIDE.jv.md) · [한국어](USER-GUIDE.ko.md) · [Bahasa Melayu](USER-GUIDE.ms.md) · [فارسی](USER-GUIDE.fa.md) · [Polski](USER-GUIDE.pl.md) · [Português (PT)](USER-GUIDE.pt.md) · [ਪੰਜਾਬੀ](USER-GUIDE.pa.md) · [Română](USER-GUIDE.ro.md) · [Русский](USER-GUIDE.ru.md) · [Slovenčina](USER-GUIDE.sk.md) · [Español](USER-GUIDE.es.md) · [Kiswahili](USER-GUIDE.sw.md) · [Svenska](USER-GUIDE.sv.md) · [తెలుగు](USER-GUIDE.te.md) · [ภาษาไทย](USER-GUIDE.th.md) · [Türkçe](USER-GUIDE.tr.md) · [Українська](USER-GUIDE.uk.md) · [Tiếng Việt](USER-GUIDE.vi.md)</small>

<small>

> **Lưu ý về bản dịch giao diện và tài liệu hướng dẫn:** Tất cả các ngôn ngữ giao diện ngoại trừ tiếng Anh (Anh Quốc) - ngôn ngữ gốc
> đều được dịch bằng mô hình trí tuệ nhân tạo; cách diễn đạt có thể chưa chính xác hoặc chứa lỗi.

</small>

<br/>


<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Mục lục** 

- [Trước khi bắt đầu](#before-you-start)
  - [Cách lấy khóa API OpenRouter miễn phí (ứng dụng máy tính)](#how-to-get-a-free-openrouter-api-key-desktop-app)
- [Bắt đầu sử dụng](#getting-started)
- [Các thành phần chính của cửa sổ](#main-parts-of-the-window)
  - [Thanh bên](#sidebar)
  - [Thanh công cụ](#toolbar)
  - [Các bảng nhập và xuất](#input-and-output-panels)
- [Dịch](#translate)
  - [Dịch văn bản](#translate-text)
  - [Lựa chọn ngôn ngữ](#language-selection)
  - [Các cài đặt hữu ích khi dịch](#helpful-translation-settings)
- [Viết lại](#rewrite)
- [Chuyển đổi](#transform)

- [Chạy một nhắc nhở hiện có](#run-an-existing-prompt)
- [Nếu bạn chưa có nhắc nhở nào](#if-you-have-no-prompts-yet)
- [Tạo nhanh một nhắc nhở](#create-a-prompt-quickly)
- [Chỉnh sửa một nhắc nhở](#edit-a-prompt)
- [Kiểm thử nhắc nhở trước khi sử dụng](#test-a-prompt-before-using-it)
- [Bảng điều khiển](#dashboard)
  - [Lọc dữ liệu](#filter-the-data)
  - [Các tab bảng điều khiển](#dashboard-tabs)
  - [Xuất dữ liệu](#export-data)
  - [Xóa các bản ghi đã lưu cho một mô hình](#delete-stored-records-for-a-model)
- [Lịch sử](#history)
  - [Lọc dữ liệu](#filter-the-data-1)
  - [Xuất dữ liệu lịch sử](#export-history-data)
- [Cài đặt](#settings)
  - [Cài đặt chung](#general-settings)
  - [Mô hình](#models)
  - [Ngôn ngữ](#languages)
  - [Theo dõi chi phí](#cost-tracking)
  - [Chuyển đổi nhắc nhở](#transform-prompts)
  - [Người dùng](#users)
  - [Cấu hình API](#api-config)
  - [Giới thiệu](#about)
- [Các sự cố thường gặp](#common-issues)

- [Ứng dụng sẽ không dịch, viết lại hoặc biến đổi văn bản](#the-app-will-not-translate-rewrite-or-transform-text)
  - [Danh sách mô hình trống](#the-model-list-is-empty)
  - [Kết quả quá chậm hoặc quá tốn kém](#the-result-is-too-slow-or-too-expensive)
  - [Giao diện đang ở ngôn ngữ sai](#the-interface-is-in-the-wrong-language)
  - [Văn bản quá nhỏ hoặc khó đọc](#the-text-is-too-small-or-hard-to-read)
  - [Biểu đồ bảng điều khiển trống](#dashboard-charts-are-empty)
  - [Chi phí hiển thị "không khả dụng" hoặc có vẻ sai](#cost-shows-not-available-or-seems-wrong)
  - [Tổng chi phí không khớp với hóa đơn của nhà cung cấp](#total-cost-does-not-match-my-provider-bill)
  - [Trang Lịch sử bị thiếu trong thanh bên](#the-history-page-is-missing-from-the-sidebar)
  - [Ứng dụng web: bị chuyển hướng về trang đăng nhập một cách bất ngờ](#web-app-redirected-to-the-login-page-unexpectedly)
  - [Quản trị web: quên hoặc mất mật khẩu](#web-admin-forgot-or-lost-a-password)

- [Bảng điều khiển không hiển thị dữ liệu cho các người dùng khác (web)](#dashboard-shows-no-data-for-other-users-web)
  - [Tôi đã thay đổi một lời nhắc và mất các chỉnh sửa](#i-changed-a-prompt-and-lost-the-edits)
- [Mẹo nhanh](#quick-tips)
- [Tuyên bố miễn trừ trách nhiệm](#disclaimer)
- [Giấy phép](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="before-you-start"></a>

## Trước khi bắt đầu

Để sử dụng Transrewrt, bạn cần có quyền truy cập vào ít nhất một nhà cung cấp AI. Các nhà cung cấp được hỗ trợ bao gồm: [OpenRouter](https://openrouter.ai) (tổng hợp nhiều mô hình), OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras và [Ollama](https://ollama.com) cho các mô hình chạy cục bộ.

Bạn không cần chọn mô hình trả phí để bắt đầu. Ngay khi bạn thêm khóa API OpenRouter, ứng dụng sẽ tự động kích hoạt tùy chọn OpenRouter **miễn phí** tích hợp sẵn. Điều này cho phép bạn bắt đầu dịch, viết lại và chuyển đổi văn bản ngay lập tức. Ngoài ra, bạn cũng có thể lấy khóa API miễn phí từ Cerebras, Google, Groq hoặc Mistral AI.

Diễn giải đơn giản:

- Một **mô hình** là động cơ AI thực hiện công việc. Các mô hình được liệt kê với **tiền tố nhà cung cấp** (ví dụ như `openrouter/…`, `openai/…`, `ollama/…`).
- Một **khóa API** (hoặc với Ollama, một **URL gốc**) là cách ứng dụng kết nối đến nhà cung cấp đó.

Nếu bạn đang sử dụng **ứng dụng desktop**, hãy thêm khóa trong mục [**Cài đặt** > **Cấu hình API**](#api-config) cho từng nhà cung cấp mà bạn sử dụng. Đối với trường hợp chỉ sử dụng OpenRouter, hãy xem phần [Cách lấy khóa API](#how-to-get-an-api-key-desktop-app) dưới đây. Nếu bạn không muốn sử dụng khóa API, bạn có thể cài đặt Ollama (từ [ollama.com](https://ollama.com)) và dùng các mô hình cục bộ thay thế, ví dụ như `translategemma:4b`.

Nếu bạn đang sử dụng **phiên bản web**, thì chủ sở hữu máy chủ sẽ cấu hình các nhà cung cấp thông qua các biến môi trường, do đó bạn không thể nhập trực tiếp khóa API trong ứng dụng.

<br/>

<a id="how-to-get-an-api-key-desktop-app"></a>

### Cách lấy khóa API OpenRouter miễn phí (ứng dụng dành cho máy tính)

Nếu bạn đang sử dụng ứng dụng máy tính, hãy làm theo các bước sau:

1. Truy cập [OpenRouter](https://openrouter.ai) bằng trình duyệt web của bạn.
2. Tạo tài khoản hoặc đăng nhập.
3. Mở trang [Keys](https://openrouter.ai/keys).
4. Nhấn vào nút để tạo khóa API mới.
5. Đặt tên cho khóa để bạn có thể nhận biết nó sau này.
6. Sao chép khóa API mới này.
7. Quay lại Transrewrt và mở mục **Cài đặt** > **Cấu hình API**.
8. Dán khóa vào ô **Khóa API OpenRouter** (trong phần **Cài đặt** > **Cấu hình API**).
9. Nhấn **Kiểm tra khóa OpenRouter** để đảm bảo khóa hoạt động.

<br/><br/>

<a id="getting-started"></a>

## Bắt đầu

Nếu đây là lần đầu tiên bạn sử dụng Transrewrt, hãy làm theo các bước sau:

1. Mở ứng dụng.
2. Nếu cần, chọn **ngôn ngữ giao diện** của bạn bằng cách nhấn vào biểu tượng quả địa cầu.
3. Nếu bạn đang dùng **ứng dụng máy tính**, hãy mở mục [**Cài đặt** > **Cấu hình API**](#api-config), thêm khóa API cho ít nhất một nhà cung cấp (ví dụ: OpenRouter), rồi nhấn **Kiểm tra** để xác minh khóa hoạt động.
4. Mở [**Cài đặt** > **Mô hình**](#models) và thêm một hoặc nhiều mô hình vào phần **Các mô hình đã chọn**.
5. Mở [**Cài đặt** > **Ngôn ngữ**](#languages) và chọn **Các ngôn ngữ chính** nếu bạn muốn các ngôn ngữ hay dùng nhất hiển thị đầu tiên.
6. Chuyển sang **Dịch** và thực hiện một bản dịch đơn giản để xác nhận mọi thứ hoạt động.
7. Khi đã xong, hãy thử dùng **Viết lại** và sau đó là **Chuyển đổi**.

Thứ tự này rất quan trọng. Nó giúp tránh vấn đề phổ biến nhất khi mới dùng: cố thực hiện tác vụ trước khi ứng dụng có kết nối API hoạt động hay chưa chọn mô hình.

<br/><br/>

<a id="main-parts-of-the-window"></a>

## Các phần chính của cửa sổ

Ứng dụng được chia thành ba khu vực chính:

- **Thanh bên** ở bên trái.
- **Thanh công cụ** ở phía trên.
- **Khu vực làm việc** ở trung tâm.

<br/>

<a id="sidebar"></a>

### Thanh bên

Sử dụng thanh bên để di chuyển trong ứng dụng. Bạn có thể thu gọn thanh bên để lấy thêm không gian bằng cách nhấp vào biểu tượng kế bên logo ứng dụng.

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
        <li><strong>Chuyển đổi</strong> mở không gian làm việc với hướng dẫn tùy chỉnh.</li><br/>
        <li><strong>Bảng điều khiển</strong> hiển thị thông tin sử dụng và chi phí.</li><br/>
        <li><strong>Cài đặt</strong> mở bảng cài đặt.</li><br/>
        <li><strong>Lịch sử</strong> hiển thị lịch sử sử dụng cùng với văn bản đầu vào và đầu ra.</li><br/>
        <li><strong>Người dùng</strong> hiển thị tên người dùng đã đăng nhập (chỉ trên nền web).</li>
      </ul>

</td>
  </tr>
</table>

<br/>

<a id="toolbar"></a>

### Thanh công cụ

Thanh công cụ thay đổi nhẹ tùy vào vị trí bạn đang dùng trong ứng dụng.

- Ở bên trái, thanh này hiển thị tên trang hiện tại.
- Ở bên phải, thanh này hiển thị **bộ chọn mô hình** và điều khiển **Ngôn ngữ giao diện**.

**Bộ chọn mô hình** cho phép bạn chọn công cụ AI nào sẽ sử dụng cho tác vụ hiện tại.

  ![Bộ chọn mô hình](../images/screenshots/vi/model-selector.png)

Một số mô hình miễn phí có thể không luôn sẵn sàng—đôi khi chúng ngoại tuyến hoặc đã đạt giới hạn sử dụng. Nếu điều này xảy ra, ứng dụng sẽ tự động loại bỏ mô hình đó khỏi danh sách khả dụng. Để kiểm soát các mô hình hiển thị, hãy vào [**Cài đặt** > **Mô hình**](#models) và chỉnh sửa danh sách mô hình của bạn.  
Bạn cũng có thể mở cài đặt mô hình trực tiếp bằng cách nhấp vào biểu tượng nhà cung cấp nằm bên trái tên mô hình trên thanh công cụ.

<br/>

**Biểu tượng quả địa cầu + mã ngôn ngữ** dùng để thay đổi ngôn ngữ giao diện ứng dụng, ví dụ như các menu và nút bấm. Tính năng này **không** thay đổi các ngôn ngữ dịch được sử dụng trong mục **Translate (Dịch)**.

![Trình chọn ngôn ngữ giao diện](../images/screenshots/vi/language-selector.png)

<br/>

<a id="input-and-output-panels"></a>

### Bảng nhập liệu và xuất liệu

Hầu hết các không gian làm việc đều sử dụng bảng **Nhập liệu** bên trái và bảng **Xuất liệu** bên phải.

Mỗi bảng cũng hiển thị:

| **Nhập liệu**                                                          | **Xuất liệu**                                                                                                                  |
|------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------|
| - Số lượng ký tự <br/>- Số lượng từ <br/>- Số lượng đoạn văn     <br/> | - Thời gian xử lý tác vụ <br/>- **TPS** (token mỗi giây) <br/>- Số lượng ký tự, từ và đoạn văn <br/>- Mô hình được sử dụng |


Nếu bạn thắc mắc về các thuật ngữ kỹ thuật:

- **Token** nghĩa là một đoạn văn bản nhỏ. Bạn có thể hiểu đó là một phần của từ hoặc một từ ngắn.
- **TPS** nghĩa là số lượng đoạn văn bản như vậy mà mô hình xử lý được mỗi giây.

<br/>

Bạn cũng có thể theo dõi chi phí của từng thao tác (nếu có) và tổng chi phí, bằng cách bật tùy chọn `Hiển thị thông tin chi phí trên các hành động` tại [**Cài đặt** > **Cài đặt chung**](#general-settings).

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="translate"></a>

## Dịch

Sử dụng **Dịch** khi bạn muốn chuyển đổi văn bản từ một ngôn ngữ sang một ngôn ngữ khác.

![Màn hình làm việc Dịch](../images/screenshots/vi/translate.png)

<br/>

<a id="translate-text"></a>

### Dịch văn bản

1. Mở **Dịch**.
2. Chọn ngôn ngữ trong **Từ**.
3. Chọn ngôn ngữ trong **Sang**.
4. Chọn một mô hình trong thanh công cụ.
5. Gõ hoặc dán văn bản vào phần **Đầu vào**.
6. Nhấn **Dịch**.
7. Đọc kết quả ở phần **Đầu ra**.
8. Sử dụng nút sao chép nếu bạn muốn sao chép kết quả.

<br/>

<a id="language-selection"></a>

### Chọn ngôn ngữ

- **Từ** có thể là một ngôn ngữ cụ thể hoặc **Nhận diện ngôn ngữ**.
- **Sang** là ngôn ngữ bạn muốn kết quả hiển thị.

Các ngôn ngữ **Ưa thích** bạn chọn sẽ hiển thị ở đầu danh sách. Bạn có thể thiết lập các ngôn ngữ này tại phần [**Cài đặt** > **Ngôn ngữ**](#languages).

<br/>

<a id="helpful-translation-settings"></a>

### Cài đặt dịch hữu ích

Trong mục [**Cài đặt** > **Cài đặt chung**](#general-settings), bạn có thể thay đổi cách thức hoạt động của chức năng dịch:

- **Tự động dịch khi dán** sẽ thực hiện dịch ngay lập tức khi bạn dán văn bản.
- **Tự động sao chép kết quả vào bộ nhớ tạm** sẽ tự động sao chép kết quả sau khi quá trình dịch thành công.
- **Dịch theo thời gian thực (trong khi gõ)** sẽ thực hiện dịch ngay khi bạn đang gõ.
- **Thời gian chờ (ms)** điều chỉnh khoảng thời gian ứng dụng chờ trước khi thực hiện dịch thời gian thực.
- **Enter** điều khiển hành động xảy ra khi bạn nhấn phím `Enter`:

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="rewrite"></a>

## Viết lại

Sử dụng tính năng **Viết lại** khi bạn muốn cải thiện cách diễn đạt mà không làm thay đổi ý nghĩa chính.

![Không gian làm việc Viết lại](../images/screenshots/vi/rewrite.png)

Tính năng này hữu ích để:

- sửa lỗi chính tả và ngữ pháp (**Kiểm tra chính tả & ngữ pháp**)
- làm cho văn bản rõ ràng hơn (**Cải thiện độ rõ ràng**)
- đưa ra nhiều cách viết lại khác nhau trong một lần thực hiện (**Các phiên bản thay thế**)
- làm cho văn bản trang trọng hơn hoặc thân mật hơn (**Trang trọng** / **Thân mật**)
- rút ngắn hoặc mở rộng văn bản (**Rút gọn** / **Mở rộng**)
- làm cho văn bản mang âm hưởng kỹ thuật hơn (**Tăng tính kỹ thuật**)

<br/>

> 💡 **MẸO**<br/>
> Khi bạn sử dụng chế độ "**Kiểm tra chính tả & ngữ pháp**", một công tắc **Hiển thị thay đổi** sẽ xuất hiện trong bảng kết quả (bên cạnh nút **Sao chép**).  
> Bật hoặc tắt để xem hoặc ẩn các chỉnh sửa cụ thể được áp dụng cho văn bản của bạn.


<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="transform"></a>

## Biến đổi

Sử dụng **Biến đổi** khi bạn muốn AI tuân theo một tập hợp hướng dẫn tùy chỉnh.

![Màn làm việc Biến đổi](../images/screenshots/vi/transform.png)

Đây là khu vực linh hoạt nhất của ứng dụng. Bạn có thể sử dụng nó cho các tác vụ như:

- tóm tắt ghi chú
- biến văn bản thô thành một email chỉnh chu
- trích xuất các điểm chính
- chuyển đổi văn bản sang một định dạng cụ thể
- bất kỳ hoạt động tùy chỉnh nào khác với văn bản đầu vào

<br/>

<a id="run-an-existing-prompt"></a>

### Chạy một prompt hiện có

1. Mở **Chuyển đổi**.
2. Chọn một prompt từ danh sách prompt.
3. Nếu xuất hiện hộp **Ngôn ngữ đích**, hãy chọn một ngôn ngữ nếu bạn muốn.
4. Gõ hoặc dán văn bản vào ô **Đầu vào**.
5. Nhấn **Chuyển đổi**.
6. Đọc kết quả ở ô **Đầu ra**.

<br/>

<a id="if-you-have-no-prompts-yet"></a>

### Nếu bạn chưa có prompt nào

Nếu danh sách prompt của bạn trống, hãy nhấp vào **Tải prompt mẫu** trong không gian làm việc Transform. Điều khiển này luôn có sẵn tại mục [**Cài đặt** > **Prompt Transform**](#transform-prompts) ở hàng xuất/nhập. Cả hai tùy chọn đều thêm các ví dụ tích hợp sẵn để bạn có thể bắt đầu nhanh chóng.

<br/>

> ℹ️ **LƯU Ý**<br/>
> Các prompt mẫu được cung cấp bằng tiếng Anh. Sau khi tải xong, bạn có thể chỉnh sửa prompt và sử dụng **Dịch prompt** để chuyển sang ngôn ngữ của mình.

<br/>

<a id="create-a-prompt-quickly"></a>

### Tạo một nhắc nhanh chóng

Cách nhanh nhất để tạo một nhắc là:

1. Nhấp vào **Nhắc mới**.
2. Nhấp vào **Tạo nhắc**.
3. Mô tả những gì bạn muốn nhắc thực hiện.
4. Chọn một mô hình.
5. Để ứng dụng tạo bản nháp cho bạn.
6. Xem lại bản nháp và nhấp vào **Lưu**.

![Tạo nhắc](../images/screenshots/vi/transform-generate.png)


<br/>

<a id="edit-a-prompt"></a>

### Chỉnh sửa một nhắc nhở

Khi bạn tạo hoặc chỉnh sửa một nhắc nhở, trình soạn thảo sẽ xuất hiện bên trái và khu vực kiểm thử sẽ hiện ra bên phải.

![Trình soạn thảo nhắc nhở Transform](../images/screenshots/vi/transform-prompt-edit.png)

Các trường chính là:

- **Tên nhắc nhở**: tên hiển thị trong danh sách nhắc nhở.
- **Hướng dẫn nhắc nhở (tùy chọn)**: một gợi ý ngắn hiển thị cho người dùng khi thực hiện nhắc nhở.
- **Vai trò mô hình**: vai trò tổng thể được giao cho trí tuệ nhân tạo, ví dụ: 'Bạn là trợ lý hữu ích.'
- **Hướng dẫn mô hình (mỗi dòng một hướng dẫn)**: các quy tắc cụ thể mà bạn muốn trí tuệ nhân tạo tuân theo.
- **Mô tả đầu ra**: một từ ngắn mô tả kết quả, ví dụ như 'tóm tắt' hoặc 'viết lại'.
- **Nhiệt độ (0.0 → 1.0)**: cách thức hoạt động của mô hình; xem bên dưới.
- **Yêu cầu ngôn ngữ đích**: thêm bộ chọn ngôn ngữ đích mỗi khi nhắc nhở được thực hiện.

Nếu thuật ngữ kỹ thuật **Nhiệt độ** là mới với bạn, hãy hình dung nó như sau:

- Nhiệt độ **thấp hơn** sẽ cho kết quả ổn định và dễ dự đoán hơn.

- Nhiệt độ **cao hơn** sẽ mang lại sự đa dạng và sáng tạo hơn.

Bạn cũng có thể sử dụng:

- **`Tạo prompt`** để tạo bản nháp mới từ một mô tả đơn giản
- **`Cải thiện prompt`** để tinh chỉnh prompt hiện có
- **`Dịch prompt`** để dịch các trường prompt

<br/>

> ⚠️ **CẢNH BÁO**<br/>
> Nhấp vào **`Lưu`** trước khi nhấp vào **`Quay lại Chạy`**. Nếu bạn quay lại mà chưa lưu, các thay đổi của bạn sẽ bị mất.

<br/>

<a id="test-a-prompt-before-using-it"></a>

### Kiểm thử prompt trước khi sử dụng

Bảng kiểm thử bên phải cho phép bạn thử prompt của mình với văn bản mẫu trước khi sử dụng trong công việc hằng ngày.

Tính năng này hữu ích khi:

- bạn đang tạo một prompt mới
- bạn đang so sánh hai phiên bản prompt
- bạn muốn kiểm tra giọng điệu, độ dài hoặc định dạng kết quả đầu ra

<br/>

> ℹ️ **LƯU Ý**<br/>
> Bạn có thể xuất và nhập các prompt đã lưu tại [**Cài đặt** > **Biến đổi Prompt**](#transform-prompts).

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="dashboard"></a>

## Bảng điều khiển

Sử dụng **Bảng điều khiển** để theo dõi mức độ sử dụng ứng dụng và chi phí phát sinh (đối với các mô hình tính phí).

![Tóm tắt bảng điều khiển](../images/screenshots/vi/dashboard-summary.png)


<br/>

> ℹ️ **LƯU Ý**<br/>
> Nếu bạn chỉ sử dụng các mô hình **miễn phí**, các khoản **chi phí** có thể bằng không và các bản tóm tắt tập trung vào chi phí có thể trống. Trên phần **Tóm tắt**, **Sử dụng theo thời gian** và **Sử dụng theo mô hình**, vẫn hiển thị **số lần gọi** (dịch, viết lại và chuyển đổi) khi bạn có hoạt động trong khoảng thời gian đã chọn.

<br/>

<a id="filter-the-data"></a>

### Lọc dữ liệu

Sử dụng các nút lọc ở phía trên để thay đổi khoảng thời gian.

![Các bộ lọc bảng điều khiển](../images/screenshots/vi/dashboard-filter.png)

<br/>

> ℹ️ **LƯU Ý**<br/>
> Bộ lọc **Người dùng** chỉ hiển thị với quản trị viên trong phiên bản web. Người dùng thông thường sẽ không nhìn thấy bộ lọc này và nó cũng không có sẵn trong ứng dụng máy tính để bàn.

<br/>

<a id="dashboard-tabs"></a>

### Các tab Bảng điều khiển

- **Tổng quan** cung cấp cái nhìn tổng thể về mức sử dụng và chi phí. Bao gồm **Sử dụng theo thời gian** (biểu đồ tích lũy xếp chồng theo ngày về **số lần gọi** cho dịch, viết lại và biến đổi) và **Sử dụng theo mô hình** (**số lần gọi cho từng mô hình**, bao gồm biến đổi).
- **Theo mức sử dụng** phân tích hoạt động theo ngôn ngữ dịch, chế độ viết lại và câu nhắc biến đổi.
- **Theo mô hình** hiển thị các mô hình bạn đã sử dụng và chi phí tương ứng.
- **Theo ngày** hiển thị tổng kết theo từng ngày.
- **Tất cả các lần gọi** hiển thị toàn bộ lịch sử gọi và cho phép bạn xuất dữ liệu.

<br/>

<a id="export-data"></a>

### Xuất dữ liệu

Các bảng điều khiển có thể xuất dữ liệu dưới các định dạng:

- **JSON**
- **CSV**
- **XLSX**

Tính năng này hữu ích nếu bạn muốn xem hoạt động bên ngoài ứng dụng hoặc chia sẻ báo cáo.

<br/>

<a id="delete-stored-records-for-a-model"></a>

### Xóa bản ghi đã lưu cho một mô hình

Trong mục **Theo mô hình** hoặc **Tất cả cuộc gọi**, bạn có thể xóa bản ghi đã lưu cho một mô hình bằng cách nhấp vào biểu tượng "thùng rác".

> ⚠️ **CẢNH BÁO**<br/>
> Việc xóa bản ghi đã lưu không thể hoàn tác. Chỉ sử dụng tùy chọn này nếu bạn chắc chắn rằng không cần đến lịch sử đó nữa.

Để xóa tất cả dữ liệu hoặc loại bỏ các bản ghi dựa trên độ tuổi của chúng, hãy truy cập [**Cài đặt** > **Theo dõi chi phí**](#cost-tracking). Tại đó bạn sẽ thấy các tùy chọn để xóa tất cả dữ liệu đã lưu hoặc chỉ những dữ liệu cũ hơn một ngày nhất định.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="history"></a>

## Lịch sử

Nhấp vào **Lịch sử** để xem lịch sử các thao tác của bạn trong **Transrewrt**, bao gồm phần đầu vào và đầu ra của từng thao tác.

![Trang Lịch sử](../images/screenshots/vi/history.png)

<br/>

<a id="filter-the-history"></a>

### Lọc dữ liệu

**Lịch sử** sử dụng các bộ lọc giống như ở trang **Bảng điều khiển**. Hãy sử dụng chúng để chọn khoảng thời gian.

![Bộ lọc bảng điều khiển](../images/screenshots/vi/dashboard-filter.png)

<br/>

> ℹ️ **LƯU Ý**<br/>
> Bộ lọc **Người dùng** chỉ hiển thị với quản trị viên trong phiên bản web. Người dùng thông thường sẽ không nhìn thấy bộ lọc này, và nó cũng không khả dụng trong ứng dụng máy tính để bàn.

<br/>

<a id="export-history-data"></a>

###  Xuất dữ liệu lịch sử

Trang lịch sử có thể xuất dữ liệu đã lọc theo các định dạng:

- **JSON**
- **CSV**
- **XLSX**

Tính năng này hữu ích nếu bạn muốn xem lại hoạt động bên ngoài ứng dụng hoặc chia sẻ báo cáo.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="settings"></a>

## Cài đặt

Mở **Cài đặt** từ thanh bên để tùy chỉnh cách ứng dụng hoạt động.

Các tab sẵn có phụ thuộc vào nền tảng và vai trò của bạn:

  | Tab                   | Máy tính để bàn | Trang web (quản trị viên) | Trang web (người dùng thông thường) |
  |-----------------------|:---------------:|:------------------------:|:----------------------------------:|
  | Cài đặt chung         |       có        |            có            |                  có                |
  | Mô hình               |       có        |            có            |                  có                |
  | Ngôn ngữ              |       có        |            có            |                  có                |
  | Theo dõi chi phí      |       có        |            có            |                   —                |
  | Gợi ý chuyển đổi      |       có        |            có            |                  có                |
  | Người dùng            |        —        |            có            |                   —                |
  | Cấu hình API          |       có        |            có            |                   —                |
  | Thông tin             |       có        |            có            |                  có                |

<br/>

> ℹ️ **LƯU Ý**<br/>

> Ở phiên bản web, mỗi người dùng có cấu hình riêng của họ. Các cài đặt như mô hình được chọn, ngôn ngữ, tùy chọn chung và nhắc chuyển đổi sẽ được lưu theo từng người dùng. Những thay đổi bạn thực hiện sẽ không ảnh hưởng đến người dùng khác.

<br/>


[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="general-settings"></a>

### Cài đặt chung

Sử dụng **Cài đặt chung** để điều chỉnh hành vi gõ phím, việc lưu trữ chi tiết thực thi cho mục **Lịch sử**, cũng như giao diện.

**Hành vi**

- **Hành vi của phím ENTER** chọn lựa giữa việc nhấn `Enter` để thực hiện tác vụ hay chèn dòng mới.
- **Tự động dịch khi dán** bắt đầu dịch ngay khi bạn dán văn bản.
- **Tự động sao chép kết quả vào bộ nhớ tạm** sao chép kết quả thành công một cách tự động.
- **Dịch theo thời gian thực (khi đang gõ)** dịch văn bản trong lúc bạn gõ.
- **Thời gian chờ (ms)** thiết lập khoảng thời gian chờ cho chức năng dịch thời gian thực.

**Lịch sử**

- **Giữ lịch sử thực thi** xác định việc có lưu lại **văn bản đầu vào và đầu ra** cho mỗi lần dịch, viết lại và chuyển đổi vào khung nhìn [**Lịch sử**](#history) bên cạnh hay không. Tắt tùy chọn này sẽ yêu cầu xác nhận; nếu bạn đồng ý, văn bản lịch sử đã lưu sẽ bị xóa khỏi cơ sở dữ liệu.

- **Xóa dữ liệu lịch sử** cho phép bạn xóa văn bản đã lưu theo độ tuổi (ví dụ: dữ liệu cũ hơn vài tháng, hoặc **tất cả dữ liệu (xóa)**) bằng cách sử dụng **Xóa dữ liệu**. Tính năng này chỉ ảnh hưởng đến văn bản thực thi đã lưu trong chế độ xem **Lịch sử**; nó **không** xóa tổng chi phí hoặc dữ liệu sử dụng. Để xóa hoặc cắt bớt dữ liệu **chi phí**, hãy sử dụng [**Cài đặt** > **Theo dõi chi phí**](#cost-tracking).

**Giao diện**

- **Hiển thị thông tin chi phí trên các thao tác** điều khiển việc hiển thị chi phí cho mỗi thao tác (nếu có sẵn) và tổng chi phí trên các bảng kết quả Dịch, Viết lại và Chuyển đổi.
- **Số chữ số phần thập phân của chi phí** thay đổi cách hiển thị các số thập phân của chi phí.
- **Chỉ trên web:** **hiển thị lề xung quanh ứng dụng** thêm khoảng trống xung quanh giao diện.
- **Phông chữ** thay đổi kiểu chữ trong các bảng văn bản.
- **Cỡ chữ** thay đổi kích cỡ phông chữ.

**Sao lưu cấu hình**

- **Bao gồm dữ liệu sử dụng trong bản sao lưu** — khi được bật, tệp ZIP cũng sẽ chứa dữ liệu lịch sử thực thi và dữ liệu gọi API.

- **Sao lưu cấu hình** — tạo một tệp ZIP duy nhất (`transrewrt-config-backup-YYYY-MM-DD_HHMMSS.zip` theo múi giờ UTC theo mặc định), bao gồm `config.json`, `state.json`, khóa mã hóa (nếu có), người dùng, tùy chọn, lời nhắc tùy chỉnh và dữ liệu sử dụng (nếu bạn đã chọn bao gồm). Sau khi sao lưu thành công, thông báo xác nhận sẽ hiển thị tên tệp đã lưu.
- **Khôi phục từ bản sao lưu** — trước tiên sẽ mở một **hộp thoại xác nhận**. Chọn tệp ZIP sao lưu trong hộp thoại (**Duyệt** / công cụ chọn tệp hoặc kéo-thả nếu được hỗ trợ), sau đó xem lại các tùy chọn:
  - **Khôi phục dữ liệu sử dụng** — nhập dữ liệu/lịch sử sử dụng từ tệp ZIP khi bản sao lưu đó được tạo với tùy chọn bao gồm sử dụng; bỏ chọn nếu bạn chỉ muốn khôi phục cài đặt và lời nhắc.
  - **Xóa dữ liệu sử dụng cũ trước khi khôi phục** — xóa dữ liệu/lịch sử hiện có trên bản cài đặt này trước khi áp dụng bản sao lưu (tùy chọn; sử dụng khi bạn muốn thay thế hoàn toàn).

Bản sao lưu được tạo trong phiên bản web hoặc máy tính để bàn đều có thể được khôi phục trên phiên bản còn lại. Khi khôi phục bản sao lưu từ phiên bản máy tính để bàn trên phiên bản web, dữ liệu sẽ được khôi phục vào tài khoản người dùng quản trị.

<br/>

<a id="models"></a>

### Mô hình

Sử dụng **Cài đặt** > **Mô hình** để chọn các mô hình hiển thị trên thanh công cụ.

![Tab Mô hình trong Cài đặt](../images/screenshots/vi/settings-models.png)

Trang này có hai danh sách:

- **Các mô hình sẵn có** ở bên trái
- **Các mô hình đã chọn** ở bên phải

Các điều khiển hữu ích bao gồm:

- **Tìm kiếm mô hình...** để tìm mô hình theo tên
- Các nhãn **Nhà cung cấp** để thu hẹp danh sách theo một nền tảng cụ thể (OpenRouter, OpenAI, Ollama, …)
- **Chỉ miễn phí** để chỉ hiển thị các mô hình miễn phí
- **Làm mới** để tải lại danh sách
- **Mở rộng tất cả** và **Thu gọn tất cả** khi sắp xếp theo nhà cung cấp

Các ID mô hình bao gồm tiền tố nhà cung cấp (ví dụ: `openrouter/…` hay `openai/…`). Các thẻ như **OpenAI (OpenRouter)** hoặc **OpenAI (trực tiếp)** cho biết cách định tuyến lưu lượng truy cập.

> ℹ️ **LƯU Ý**<br/>

> **OpenRouter Body Builder** (`openrouter/bodybuilder`) là một mô hình định tuyến, không phải mô hình trò chuyện tổng quát: phản hồi của nó là dạng JSON mô tả thân yêu cầu API OpenRouter (ví dụ như một mảng `requests` chứa `model` và `messages`). Nếu bạn sử dụng nó cho các tác vụ **Dịch**, **Viết lại**, hoặc **Chuyển đổi**, bảng kết quả sẽ hiển thị JSON đó thay vì văn bản hoàn chỉnh. Hãy chọn một mô hình văn bản thông thường cho các tác vụ này. Xem thêm trang [mô hình Body Builder](https://openrouter.ai/openrouter/bodybuilder) trên OpenRouter.

Hành động:

 - Để thêm một mô hình, nhấp vào **Thêm** hoặc nhấp vào bất kỳ nơi nào trong dòng nhập.

 - Để xóa một mô hình, nhấp vào **X** kế bên nó trong phần **Các mô hình đã chọn** hoặc **Đã chọn** trên dòng nhập trong Danh sách mô hình khả dụng.

 - Để xóa toàn bộ danh sách, nhấp vào **Bỏ chọn tất cả**. Mô hình miễn phí bắt buộc sẽ vẫn được giữ lại trong danh sách.

<br/>

> ℹ️ **LƯU Ý**<br/>

> Nếu bạn không muốn thêm tín dụng vào OpenRouter ngay lập tức, hãy bắt đầu bằng cách bật tùy chọn **Chỉ miễn phí** và chọn các mô hình miễn phí (không cần thẻ tín dụng). Bạn cũng có thể sử dụng Ollama để chạy mô hình cục bộ mà không cần khóa API.

<br/>

<a id="languages"></a>

### Ngôn ngữ

Sử dụng **Cài đặt** > **Ngôn ngữ** để sắp xếp các danh sách ngôn ngữ được dùng trong ứng dụng.

- **Ngôn ngữ ưa thích** được ghim gần đầu danh sách ngôn ngữ trong **Dịch** và **Chuyển đổi**.
- **Ngôn ngữ tùy chỉnh** cho phép bạn thêm một ngôn ngữ không có trong danh sách tích hợp sẵn.

Nếu bạn thêm ngôn ngữ tùy chỉnh, nó sẽ xuất hiện trong các trình chọn ngôn ngữ cùng với các tùy chọn tích hợp.

<br/>

<a id="cost-tracking"></a>

### Theo dõi chi phí

Sử dụng **Cài đặt** > **Theo dõi chi phí** để quản lý thông tin chi phí.

- **Tổng chi phí** hiển thị tổng số đang được tích lũy.
- **Sao chép giá trị** sao chép tổng số vào bộ nhớ tạm.
- **Đặt lại chi phí** đặt lại tổng số đã lưu về không.
- **Đồng bộ với mức sử dụng khóa API** đặt tổng số bằng với mức sử dụng được báo cáo từ tài khoản OpenRouter của bạn (chỉ áp dụng với OpenRouter).
- **Sử dụng khóa API** hiển thị chi tiết mức sử dụng OpenRouter, nếu có sẵn.
- **Xóa dữ liệu chi phí** xóa toàn bộ dữ liệu, hoặc chỉ những mục cũ hơn ngày được chọn.

**Theo dõi chi phí:** Khi bạn sử dụng các mô hình OpenRouter, ứng dụng sẽ hiển thị mức sử dụng và chi tiêu thực tế dựa trên thông tin chi phí từ OpenRouter. Đối với tất cả các nhà cung cấp khác, ứng dụng sẽ ước tính chi phí dựa trên giá do OpenRouter công bố. Nếu không có sẵn giá, mức ước tính có thể bằng không.

<br/>

> ℹ️ **LƯU Ý**<br/>
> **Tất cả các con số chi phí chỉ mang tính chất tham khảo, không phải là hóa đơn chính thức.**

<br/>

> ⚠️ **CẢNH BÁO**<br/>

> Việc xóa dữ liệu không thể được hoàn tác. Trước khi xóa, hãy chắc chắn sao lưu dữ liệu hoặc xuất dữ liệu thông qua [**Lịch sử**](#history)
> hoặc [**Bảng điều khiển** > **Tất cả các lần gọi**](#dashboard-tabs), nếu không dữ liệu sẽ bị mất vĩnh viễn.
> Toàn bộ lịch sử đầu vào/đầu ra liên quan đến mỗi mục gọi API cũng sẽ bị xóa.


<br/>

<a id="transform-prompts"></a>

### Biến đổi lời nhắc

Sử dụng **Cài đặt** > **Biến đổi lời nhắc** để quản lý các lời nhắc theo nhóm.

Bạn có thể:

- Xem lại các lời nhắc đã lưu
- Xóa lời nhắc
- Nhập lời nhắc từ một tệp
- Xuất lời nhắc để sao lưu hoặc chia sẻ
- Tải các lời nhắc mẫu vào danh sách lời nhắc

<br/>

<a id="users"></a>

### Người dùng

Sử dụng **Người dùng** để quản lý các tài khoản người dùng trong phiên bản web. Bạn có thể thêm người dùng, cập nhật thông tin chi tiết, đặt lại mật khẩu và xóa tài khoản.

<br/>

<a id="api-config"></a>

### Cấu hình API

Các nhà cung cấp được hỗ trợ bao gồm: OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras và **Ollama** (mô hình cục bộ thông qua URL gốc). Bạn chỉ cần cấu hình những nhà cung cấp mà bạn sử dụng.

**Ứng dụng web: chỉ dành cho quản trị viên**

Khóa API được cấu hình thông qua các biến môi trường hệ thống hoặc Docker — chúng không được nhập trực tiếp trên giao diện web. Trang này hiển thị những nhà cung cấp đã được cấu hình khóa và cho phép bạn kiểm tra từng nhà cung cấp bằng cách nhấn vào nút **`Kiểm tra`**.

<br/>

> ℹ️ **LƯU Ý**<br/>
> Để thay đổi khóa API, hãy cập nhật biến môi trường trong cấu hình hệ thống hoặc Docker của bạn và khởi động lại máy chủ hoặc bộ chứa.

> ℹ️ **LƯU Ý**<br/>

> **Sao lưu cấu hình** (xem mục [**Cài đặt chung** → Sao lưu cấu hình](#general-settings)) có thể nhúng các khóa nhà cung cấp đã được **giải mã** vào tập tin `config.json` bên trong tệp ZIP. Việc khôi phục tệp ZIP này **không** sao chép lại các khóa này vào tệp cấu hình được lưu trữ trên máy chủ — các khóa đang hoạt động vẫn được lấy từ môi trường và trạng thái tệp hiện có như đã mô tả ở phần đó.

<br/>

**Ứng dụng máy tính để bàn**

Sử dụng **Cấu hình API** để lưu các khóa API cho từng nhà cung cấp mà bạn sử dụng. Với Ollama, hãy nhập **URL gốc** thay vì khóa API.

<br/>

> 💡 **Mẹo** <br/>
> Nếu bạn không muốn sử dụng khóa API hoặc không muốn trả phí cho việc sử dụng, bạn có thể [tải Ollama](https://ollama.com) về và chạy các mô hình (ví dụ như `translategemma:4b`) cục bộ trên máy tính của mình hoàn toàn miễn phí. Ngoài ra, bạn có thể tạo một tài khoản OpenRouter miễn phí (không cần thẻ tín dụng) để sử dụng các mô hình miễn phí của họ, hoặc lấy khóa API miễn phí từ Cerebras, Google, Groq hoặc Mistral AI.

<br/>

- Chỉ thêm các nhà cung cấp mà bạn cần. Trong **Cài đặt** > **Mô hình**, mỗi ID mô hình bắt đầu bằng tên nhà cung cấp (ví dụ: `openrouter/openrouter/free`, `openai/gpt-4o`, `ollama/llama3`).

Để thêm một khóa API, nhập giá trị vào ô văn bản và nhấp **`Lưu`**. Để thay thế khóa hiện có, nhấp **`Chỉnh sửa`**. Để xác minh khóa API có hoạt động hay không, nhấp **`Kiểm tra`**. Với URL cơ sở của Ollama, hãy luôn nhấp **`Kiểm tra`** để kiểm tra kết nối.

<br/>

> ℹ️ **LƯU Ý**<br/>
> Bạn không thể xem giá trị hiện tại của một khóa API. Bạn chỉ có thể thay thế nó bằng cách sử dụng nút **`Chỉnh sửa`**.
> Các khóa API được lưu trữ dưới dạng mã hóa trong cấu hình.

<br/>

<a id="about"></a>

### Giới thiệu

Tab **Giới thiệu** hiển thị:

- tên ứng dụng
- số phiên bản
- ngày xây dựng
- liên kết đến kho mã nguồn dự án

<br/><br/>

<a id="common-issues"></a>

## Vấn đề thường gặp

Nếu một thứ gì đó không hoạt động như mong đợi, hãy kiểm tra các điểm sau trước tiên.

<br/>

<a id="the-app-will-not-translate-rewrite-or-transform-text"></a>

### Ứng dụng sẽ không dịch, viết lại hoặc chuyển đổi văn bản

Hãy kiểm tra:

- bạn đã chọn một mô hình trong thanh công cụ
- ít nhất một mô hình được liệt kê trong [**Cài đặt** > **Mô hình**](#models)
- cấu hình API của bạn đang hoạt động

Nếu bạn đang dùng ứng dụng máy tính:

1. Mở [**Cài đặt** > **Cấu hình API**](#api-config).
2. Kiểm tra xem ít nhất một khóa API đã được lưu chưa.
3. Nhấp vào **Kiểm tra** cạnh nhà cung cấp để xác nhận khóa đang hoạt động.

<br/>

<a id="the-model-list-is-empty"></a>

### Danh sách mô hình bị trống

Mở [**Cài đặt** > **Mô hình**](#models) và nhấp vào **Làm mới**.

Nếu cần:

- tìm kiếm một mô hình
- bật **Chỉ miễn phí**
- thêm một hoặc nhiều mô hình vào **Mô hình đã chọn**

<br/>

<a id="the-result-is-too-slow-or-too-expensive"></a>

### Kết quả quá chậm hoặc quá tốn kém

Hãy thử một hoặc nhiều cách sau:

- chọn một mô hình khác
- sử dụng đầu vào ngắn hơn
- tắt **Dịch thời gian thực (khi đang nhập)** trong [**Cài đặt** > **Cài đặt chung**](#general-settings)
- sử dụng các mô hình miễn phí cho các tác vụ đơn giản (xem [Mô hình](#models))

<br/>

<a id="the-interface-is-in-the-wrong-language"></a>

### Giao diện đang ở ngôn ngữ sai

Nhấp vào biểu tượng quả địa cầu trong thanh [công cụ](#toolbar) và chọn **Ngôn ngữ giao diện** ưa thích của bạn.

<br/>

<a id="the-text-is-too-small-or-hard-to-read"></a>

### Văn bản quá nhỏ hoặc khó đọc

Mở [**Cài đặt** > **Cài đặt chung**](#general-settings) và thay đổi:

- **Phông chữ**
- **Kích cỡ**

<br/>

<a id="dashboard-charts-are-empty"></a>

### Biểu đồ trên bảng điều khiển trống

Điều này là bình thường nếu:

- bạn chỉ sử dụng các **mô hình miễn phí** và đang xem các số liệu về **chi phí** (các giá trị này có thể bằng không); các biểu đồ số lần gọi về **sử dụng** trong phần **Tóm tắt** vẫn cần dữ liệu từ khoảng thời gian đã chọn
- **bộ lọc thời gian** đã chọn không bao gồm khoảng thời gian thực hiện các lần gọi — hãy thử chọn **Tất cả** để kiểm tra

Nếu biểu đồ vẫn trống sau khi chọn **Tất cả**, hãy xác nhận rằng các lần gọi có xuất hiện trong mục [**Lịch sử**](#history) hoặc trong tab **Tất cả các cuộc gọi**.

<br/>

<a id="cost-shows-not-available-or-seems-wrong"></a>

### Chi phí hiển thị là "không khả dụng" hoặc dường như sai

Khi bạn sử dụng các mô hình thông qua **OpenRouter**, ứng dụng sẽ hiển thị khoản chi tiêu thực tế do OpenRouter báo cáo.

Đối với **các nhà cung cấp khác** (OpenAI trực tiếp, Anthropic trực tiếp, v.v.), chi phí được ước tính dựa trên dữ liệu giá cả do OpenRouter công bố. Nếu không tìm thấy giá phù hợp cho một mô hình, chi phí sẽ hiển thị là **không khả dụng** và sẽ không được cộng vào tổng chi phí hiện tại của bạn.

<br/>

<a id="total-cost-does-not-match-my-provider-bill"></a>

### Tổng chi phí không khớp với hóa đơn của nhà cung cấp

Tất cả các con số chi phí trong ứng dụng đều là **ước tính tham khảo**, không phải là hóa đơn chính thức.

Để đưa tổng chi phí gần hơn với số tiền thực tế bạn đã chi tiêu trên OpenRouter, hãy mở [**Cài đặt** > **Theo dõi chi phí**](#cost-tracking) và nhấp vào **Đồng bộ với mức sử dụng khóa API**.

<br/>

<a id="the-history-page-is-missing-from-the-sidebar"></a>

### Trang Lịch sử bị thiếu trong thanh bên

Tùy chọn **Giữ lại lịch sử thực thi** có thể đã bị tắt. Mở [**Cài đặt** > **Cài đặt chung**](#general-settings) và bật nó lên. Lưu ý rằng việc bật tùy chọn này sẽ không khôi phục dữ liệu lịch sử đã bị xóa trước đó.

<br/>

<a id="web-app-session-expired"></a>

### Ứng dụng web: bị điều hướng về trang đăng nhập một cách bất ngờ

Phiên làm việc của bạn có thể đã hết hạn. Hãy đăng nhập lại. Nếu sự cố xảy ra thường xuyên, hãy kiểm tra cấu hình máy chủ về thiết lập thời gian tồn tại của phiên làm việc.

<br/>

<a id="web-admin-forgot-or-lost-a-password"></a>

### Quản trị web: quên hoặc mất mật khẩu

Điều này áp dụng cho **ứng dụng web tự lưu trữ** (Docker), không áp dụng cho ứng dụng máy tính để bàn (Electron).

- Nếu một quản trị viên khác vẫn có thể đăng nhập, họ có thể mở mục [**Cài đặt** > **Người dùng**](#users), chọn tài khoản và đặt **mật khẩu mới** tại đó.
- Nếu bạn bị **khóa tài khoản** nhưng vẫn có **quyền truy cập shell** vào máy hoặc container, hãy đặt lại mật khẩu bằng công cụ hỗ trợ được cung cấp kèm theo image (thay `transrewrt` nếu bạn đổi tên mặc định, và đặt dấu ngoặc kép quanh mật khẩu nếu chứa khoảng trắng hoặc ký tự đặc biệt):

```bash
docker exec transrewrt reset-web-password '<tên-người-dùng>' '<mật-khẩu-mới>'
```

Tên người dùng mặc định của quản trị viên là `admin` nếu bạn chưa bao giờ tạo tài khoản khác. Khi bạn chỉ cung cấp một tham số, tham số đó sẽ được coi là mật khẩu mới cho tài khoản `admin`.

Nếu bạn chạy từ **bộ mã nguồn** thay vì dùng Docker, hãy dùng lệnh:

```bash
pnpm run reset-web-password -- <tên-người-dùng> <mật-khẩu-mới>

Cập nhật đoạn mã cập nhật bản ghi người dùng trong cơ sở dữ liệu SQLite (và có thể tạo người dùng `admin` nếu bị thiếu). Sau khi đặt lại, hãy đăng nhập bằng mật khẩu mới.


<br/>

<a id="dashboard-shows-no-data-for-other-users"></a>

### Bảng điều khiển không hiển thị dữ liệu cho người dùng khác (web)

Chỉ có **quản trị viên** mới có thể xem dữ liệu từ tất cả người dùng thông qua bộ lọc **Người dùng**. Người dùng thông thường theo thiết kế chỉ có thể xem hoạt động của chính họ.

<br/>

<a id="i-changed-a-prompt-and-lost-the-edits"></a>

### Tôi đã thay đổi một lời nhắc nhưng bị mất các chỉnh sửa

Khi chỉnh sửa lời nhắc, hãy luôn nhấn **Lưu** trước khi nhấn **Quay lại để chạy**.

<br/><br/>

<a id="quick-tips"></a>

## Mẹo nhanh

- Bắt đầu bằng [**Dịch**](#translate) để đảm bảo rằng thiết lập của bạn hoạt động được trước khi chuyển sang [**Viết lại**](#rewrite) hoặc [**Chuyển đổi**](#transform).
- Sử dụng [**Viết lại**](#rewrite) để cải thiện văn phong trong các văn bản hàng ngày.
- Sử dụng [**Chuyển đổi**](#transform) khi bạn cần một quy trình lặp lại cho một nhiệm vụ cụ thể.
- Sử dụng [**Bảng điều khiển**](#dashboard) nếu bạn muốn theo dõi mức sử dụng và chi phí.
- Sử dụng [**Lịch sử**](#history) để xem lại các thao tác trước đó cùng toàn bộ nội dung đầu vào/đầu ra của chúng.
- Thường xuyên xuất các prompt nếu bạn đang xây dựng một thư viện prompt cần được lưu giữ an toàn (xem [Prompt chuyển đổi](#transform-prompts)) hoặc muốn chia sẻ với người khác.

<br/><br/>

<a id="disclaimer"></a>

## Miễn trừ trách nhiệm

Tên sản phẩm và biểu tượng thuộc về chủ sở hữu tương ứng của chúng và chỉ được sử dụng nhằm mục đích nhận dạng. Phần mềm này không liên kết với bất kỳ thương hiệu nào được đề cập và cũng không được các thương hiệu đó bảo trợ.

<br/><br/>

<a id="license"></a>

## Giấy phép

Bản quyền © 2026 Waldemar Scudeller Jr.

[Giấy phép Apache 2.0](LICENSE)