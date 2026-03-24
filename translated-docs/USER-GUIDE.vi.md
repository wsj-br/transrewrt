---
translated_at: "2026-03-24T04:10:13.356Z"
source_hash: "fc671c16dd34a2c355752935670712beb8abd2ae65453de44983a2f2f0701696"
source_mtime: 1774306679773.736
model: "qwen/qwen3-235b-a22b-2507"
---
![Transrewrt banner](../images/transrewrt_banner.png)


<a id="transrewrt-user-guide"></a>
# Hướng dẫn người dùng

<br/>

<a id="introduction"></a>
## Giới thiệu

Transrewrt giúp bạn xử lý văn bản theo ba cách chính:

- **Dịch** - chuyển đổi văn bản từ một ngôn ngữ sang ngôn ngữ khác.
- **Viết lại** - diễn đạt lại văn bản theo phong cách khác, ví dụ như rõ ràng hơn, ngắn gọn hơn hoặc trang trọng hơn.
- **Chuyển đổi** - xử lý văn bản bằng các hướng dẫn AI tùy chỉnh gọi là các lời nhắc.

<br/>

Hướng dẫn này mô tả cách sử dụng ứng dụng sau khi đã cài đặt và chạy. Để biết các bước cài đặt, vui lòng xem phần **[README](README.vi.md)** chính.

<br/>

> ℹ️ **LƯU Ý**<br/>
> Transrewrt có sẵn dưới dạng ứng dụng máy tính để bàn dành cho Windows và Linux, và dưới dạng ứng dụng web tự lưu trữ. Hướng dẫn này tập trung vào việc sử dụng hàng ngày của ứng dụng. Những nội dung chỉ áp dụng cho một phiên bản cụ thể sẽ được đánh dấu rõ ràng.

<small>**Đọc bằng các ngôn ngữ khác:** [English (UK)](USER-GUIDE.vi.md) · [Português (BR)](USER-GUIDE.pt-BR.md) · [العربية](USER-GUIDE.ar.md) · [বাংলা](USER-GUIDE.bn.md) · [Català](USER-GUIDE.ca.md) · [简体中文](USER-GUIDE.zh-CN.md) · [繁體中文](USER-GUIDE.zh-TW.md) · [Hrvatski](USER-GUIDE.hr.md) · [Čeština](USER-GUIDE.cs.md) · [Nederlands](USER-GUIDE.nl.md) · [English (US)](USER-GUIDE.en-US.md) · [Filipino](USER-GUIDE.tl.md) · [Français](USER-GUIDE.fr.md) · [Deutsch](USER-GUIDE.de.md) · [Ελληνικά](USER-GUIDE.el.md) · [हिन्दी](USER-GUIDE.hi.md) · [Magyar](USER-GUIDE.hu.md) · [Italiano](USER-GUIDE.it.md) · [日本語](USER-GUIDE.ja.md) · [Basa Jawa](USER-GUIDE.jv.md) · [한국어](USER-GUIDE.ko.md) · [Bahasa Melayu](USER-GUIDE.ms.md) · [فارسی](USER-GUIDE.fa.md) · [Polski](USER-GUIDE.pl.md) · [Português (PT)](USER-GUIDE.pt.md) · [ਪੰਜਾਬੀ](USER-GUIDE.pa.md) · [Română](USER-GUIDE.ro.md) · [Русский](USER-GUIDE.ru.md) · [Slovenčina](USER-GUIDE.sk.md) · [Español](USER-GUIDE.es.md) · [Kiswahili](USER-GUIDE.sw.md) · [Svenska](USER-GUIDE.sv.md) · [తెలుగు](USER-GUIDE.te.md) · [ภาษาไทย](USER-GUIDE.th.md) · [Türkçe](USER-GUIDE.tr.md) · [Українська](USER-GUIDE.uk.md) · [Tiếng Việt](USER-GUIDE.vi.md)</small>

<br/>

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Mục lục** 

- [Trước khi bắt đầu](#before-you-start)
  - [Cách lấy khóa API OpenRouter miễn phí (dành cho ứng dụng để bàn)](#how-to-get-a-free-openrouter-api-key-desktop-app)
- [Bắt đầu](#getting-started)
- [Các thành phần chính của cửa sổ](#main-parts-of-the-window)
  - [Thanh bên](#sidebar)
  - [Thanh công cụ](#toolbar)
  - [Các khu vực nhập và xuất nội dung](#input-and-output-panels)
- [Dịch](#translate)
  - [Dịch văn bản](#translate-text)
  - [Chọn ngôn ngữ](#language-selection)
  - [Các cài đặt hữu ích cho dịch](#helpful-translation-settings)
  - [Phím tắt](#keyboard-shortcuts)
- [Viết lại](#rewrite)
  - [Viết lại văn bản](#rewrite-text)
- [Chuyển đổi](#transform)
  - [Chạy một lời nhắc đã có](#run-an-existing-prompt)
  - [Nếu bạn chưa có lời nhắc nào](#if-you-have-no-prompts-yet)
  - [Tạo lời nhắc nhanh chóng](#create-a-prompt-quickly)
  - [Chỉnh sửa lời nhắc](#edit-a-prompt)
  - [Thử lời nhắc trước khi sử dụng](#test-a-prompt-before-using-it)
  - [Quản lý các lời nhắc đã lưu](#manage-saved-prompts)
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
  - [Các mô hình](#models)
  - [Ngôn ngữ](#languages)
  - [Theo dõi chi phí](#cost-tracking)
  - [Các lời nhắc chuyển đổi](#transform-prompts)
  - [Người dùng](#users)
  - [Cấu hình API](#api-config)
  - [Giới thiệu](#about)
- [Các sự cố thường gặp](#common-issues)
  - [Ứng dụng không thể dịch, viết lại hoặc chuyển đổi văn bản](#the-app-will-not-translate-rewrite-or-transform-text)
  - [Danh sách mô hình trống](#the-model-list-is-empty)
  - [Kết quả quá chậm hoặc quá đắt](#the-result-is-too-slow-or-too-expensive)
  - [Giao diện hiển thị bằng ngôn ngữ sai](#the-interface-is-in-the-wrong-language)
  - [Văn bản quá nhỏ hoặc khó đọc](#the-text-is-too-small-or-hard-to-read)
  - [Biểu đồ bảng điều khiển trống](#dashboard-charts-are-empty)
  - [Chi phí hiển thị "không khả dụng" hoặc sai](#cost-shows-not-available-or-seems-wrong)
  - [Tổng chi phí không khớp với hóa đơn của nhà cung cấp](#total-cost-does-not-match-my-provider-bill)
  - [Trang Lịch sử không hiện ra ở thanh bên](#the-history-page-is-missing-from-the-sidebar)
  - [Ứng dụng web: bị chuyển hướng về trang đăng nhập một cách bất ngờ](#web-app-redirected-to-the-login-page-unexpectedly)
  - [Bảng điều khiển không hiển thị dữ liệu của người dùng khác (web)](#dashboard-shows-no-data-for-other-users-web)
  - [Tôi đã chỉnh sửa lời nhắc nhưng bị mất thay đổi](#i-changed-a-prompt-and-lost-the-edits)
- [Mẹo nhanh](#quick-tips)
- [Thông báo miễn trừ trách nhiệm](#disclaimer)
- [Giấy phép](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="before-you-start"></a>

## Trước khi bắt đầu

Để sử dụng Transrewrt, bạn cần truy cập vào ít nhất một nhà cung cấp AI. Các nhà cung cấp được hỗ trợ bao gồm: [OpenRouter](https://openrouter.ai) (tích hợp nhiều mô hình), OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, và [Ollama](https://ollama.com) dành cho mô hình cục bộ.

Bạn không cần phải chọn mô hình trả phí để bắt đầu. Ngay khi bạn thêm khóa API OpenRouter, ứng dụng sẽ tự động kích hoạt tùy chọn **miễn phí** tích hợp của OpenRouter. Điều này cho phép bạn bắt đầu dịch, viết lại và biến đổi văn bản ngay lập tức.

Nói một cách đơn giản:

- Một **mô hình** là động cơ AI thực hiện công việc. Các mô hình được liệt kê kèm theo **tiền tố nhà cung cấp** (ví dụ: `openrouter/…`, `openai/…`, `ollama/…`).
- Một **khóa API** (hoặc với Ollama là **URL gốc**) là cách ứng dụng kết nối đến nhà cung cấp đó.

Nếu bạn đang sử dụng **ứng dụng máy tính để bàn**, hãy thêm khóa trong mục [**Cài đặt** > **Cấu hình API**](#api-config) cho từng nhà cung cấp bạn sử dụng. Nếu chỉ dùng OpenRouter, xem phần [Cách lấy khóa API](#how-to-get-an-api-key-desktop-app) bên dưới. Nếu bạn không muốn dùng khóa API, bạn có thể cài đặt Ollama (từ [ollama.com](https://ollama.com)) và dùng các mô hình cục bộ thay thế.

Nếu bạn đang sử dụng **phiên bản web**, người quản trị máy chủ sẽ cấu hình các nhà cung cấp thông qua các biến môi trường, vì vậy thông thường bạn sẽ không cần tự nhập khóa API.

<br/>

<a id="how-to-get-an-api-key-desktop-app"></a>
### Cách lấy khóa API miễn phí OpenRouter (ứng dụng máy tính để bàn)

Nếu bạn đang dùng ứng dụng máy tính để bàn, hãy làm theo các bước sau:

1. Truy cập [OpenRouter](https://openrouter.ai) bằng trình duyệt web.
2. Tạo tài khoản hoặc đăng nhập.
3. Mở trang [Keys](https://openrouter.ai/keys).
4. Nhấp vào nút để tạo khóa API mới.
5. Đặt tên cho khóa để bạn nhận biết dễ dàng sau này.
6. Sao chép khóa API vừa tạo.
7. Quay lại Transrewrt và mở **Cài đặt** > **Cấu hình API**.
8. Dán khóa vào ô **OpenRouter API key** (trong mục **Cài đặt** > **Cấu hình API**).
9. Nhấp vào **Test OpenRouter key** để kiểm tra khóa hoạt động.

<br/>

> ℹ️ **LƯU Ý**<br/>
> Bạn có thể bắt đầu với tuyến đường miễn phí của OpenRouter hoặc bất kỳ mô hình miễn phí nào khác mà không cần thêm thẻ tín dụng. Trong nhiều trường hợp, điều này là đủ để bắt đầu sử dụng Transrewrt mà không cần chọn mô hình trả phí. Ngoài ra, bạn có thể dùng Ollama để chạy mô hình cục bộ mà không cần khóa API.

<br/><br/>

<a id="getting-started"></a>
## Bắt đầu

Nếu đây là lần đầu tiên bạn sử dụng Transrewrt, hãy làm theo thứ tự sau:

1. Mở ứng dụng.
2. Nếu cần, hãy chọn **Ngôn ngữ giao diện** bằng cách nhấn vào biểu tượng quả địa cầu.
3. Nếu bạn dùng **ứng dụng máy tính để bàn**, hãy mở [**Cài đặt** > **Cấu hình API**](#api-config), thêm khóa API cho ít nhất một nhà cung cấp (ví dụ: OpenRouter), sau đó nhấn **Test** để kiểm tra.
4. Mở [**Cài đặt** > **Mô hình**](#models), thêm một hoặc nhiều mô hình vào phần **Mô hình đã chọn**.
5. Mở [**Cài đặt** > **Ngôn ngữ**](#languages) và chọn **Ngôn ngữ ưa thích** nếu bạn muốn các ngôn ngữ thường dùng xuất hiện đầu tiên.
6. Chuyển sang mục **Dịch** và thực hiện một bản dịch đơn giản để xác nhận mọi thứ hoạt động.
7. Sau khi thành công, thử dùng **Viết lại** rồi đến **Biến đổi**.

Thứ tự này rất quan trọng. Nó giúp tránh vấn đề thường gặp khi dùng lần đầu: cố gắng thực hiện tác vụ trước khi ứng dụng có kết nối API hoặc chưa chọn mô hình.

<br/><br/>

<a id="main-parts-of-the-window"></a>
## Các phần chính của cửa sổ

Ứng dụng được chia thành ba khu vực chính:

- **Bảng điều hướng** ở bên trái.
- **Thanh công cụ** ở phía trên.
- **Khu vực làm việc** ở giữa.

<br/>

<a id="sidebar"></a>
### Bảng điều hướng

Sử dụng bảng điều hướng để di chuyển trong ứng dụng. Bạn có thể thu gọn bảng điều hướng để tiết kiệm không gian bằng cách nhấp vào biểu tượng cạnh logo ứng dụng.

<br/>

<table>
  <tr>
    <td valign="top">
       <img src="../images/screenshots/vi/sidebar.png" alt="Thanh bên ứng dụng" style="max-width: 100%; border: 1px solid #ddd; border-radius: 4px;">
    </td>
    <td valign="top">
      <br/><br/>
      <ul>
        <li><strong>Dịch</strong> mở không gian làm việc dịch.</li><br/>
        <li><strong>Viết lại</strong> mở không gian làm việc viết lại nội dung.</li><br/>
        <li><strong>Biến đổi</strong> mở không gian làm việc với lời nhắc tùy chỉnh.</li><br/>
        <li><strong>Bảng điều khiển</strong> hiển thị thông tin sử dụng và chi phí.</li><br/>
        <li><strong>Cài đặt</strong> mở bảng cài đặt.</li><br/>
        <li><strong>Lịch sử</strong> hiển thị lịch sử sử dụng cùng văn bản đầu vào và đầu ra.</li><br/>
        <li><strong>Người dùng</strong> hiển thị tên người dùng đã đăng nhập (chỉ ở phiên bản web).</li>
      </ul>
    </td>
  </tr>
</table>

<br/>

<a id="toolbar"></a>

### Thanh công cụ

Thanh công cụ thay đổi đôi chút tùy theo vị trí bạn đang ở trong ứng dụng.

- Bên trái, thanh hiển thị tên trang hiện tại.
- Bên phải, than palp hiển thị **trình chọn mô hình** và điều khiển **Ngôn ngữ giao diện**.

**Trình chọn mô hình** cho phép bạn chọn công cụ AI nào sẽ sử dụng cho nhiệm vụ hiện tại.

  ![Trình chọn mô hình](../images/screenshots/vi/model-selector.png)

> ℹ️ **LƯU Ý**<br/>
> Một số mô hình miễn phí có thể không luôn sẵn sàng — đôi khi chúng ngoại tuyến hoặc có giới hạn sử dụng. Nếu điều này xảy ra, ứng dụng sẽ tự động loại mô hình đó khỏi danh sách khả dụng của bạn.<br/>
> Để kiểm soát các mô hình xuất hiện, hãy vào [**Cài đặt** > **Mô hình**](#models) và chỉnh sửa danh sách mô hình của bạn. 
> Bạn cũng có thể mở cài đặt mô hình trực tiếp bằng cách nhấn vào biểu tượng nhà cung cấp bên trái tên mô hình trên thanh công cụ.

<br/>

Biểu tượng **hình quả địa cầu + mã ngôn ngữ** thay đổi ngôn ngữ giao diện của ứng dụng, như menu và các nút. Nó **không thay đổi** ngôn ngữ dịch được sử dụng trong phần **Dịch**.

  ![Trình chọn ngôn ngữ giao diện](../images/screenshots/vi/language-selector.png)

<br/>

<a id="input-and-output-panels"></a>
### Bảng nhập và xuất

Hầu hết các không gian làm việc đều sử dụng bảng **Nhập** ở bên trái và bảng **Xuất** ở bên phải.

Bảng **Nhập** hiển thị:

- Số lượng ký tự
- Số lượng từ
- Số lượng đoạn văn

Bảng **Xuất** có thể hiển thị:

- Thời gian hoàn thành tác vụ
- Chi phí cho tác vụ đó (nếu có)
- Tổng chi phí đang tích lũy
- **TPS** (số token mỗi giây)
- Số lượng ký tự, từ, đoạn văn
- Mô hình được sử dụng

Nếu bạn thắc mắc về các thuật ngữ kỹ thuật:

- **Token** là một đoạn văn bản nhỏ. Bạn có thể hiểu đó là một phần của từ hoặc một từ ngắn.
- **TPS** là số lượng đoạn văn bản như vậy mà mô hình xử lý mỗi giây.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="translate"></a>
## Dịch

Sử dụng **Dịch** khi bạn muốn chuyển văn bản từ một ngôn ngữ sang ngôn ngữ khác.

![Không gian làm việc Dịch](../images/screenshots/vi/translate.png)

<br/>

<a id="translate-text"></a>
### Dịch văn bản

1. Mở **Dịch**.
2. Chọn một ngôn ngữ ở mục **Từ**.
3. Chọn một ngôn ngữ ở mục **Sang**.
4. Chọn một mô hình trong thanh công cụ.
5. Nhập hoặc dán văn bản vào ô **Nhập**.
6. Nhấn **Dịch**.
7. Đọc kết quả ở ô **Xuất**.
8. Sử dụng nút sao chép nếu bạn muốn chép kết quả ra bộ nhớ tạm.

<br/>

<a id="language-selection"></a>
### Chọn ngôn ngữ

- **Từ** có thể là một ngôn ngữ cụ thể hoặc **Nhận diện ngôn ngữ**.
- **Sang** là ngôn ngữ bạn muốn kết quả hiển thị.

Các **Ngôn ngữ hàng đầu** đã chọn của bạn sẽ xuất hiện ở đầu danh sách. Bạn có thể thiết lập chúng tại [**Cài đặt** > **Ngôn ngữ**](#languages).

<br/>

<a id="helpful-translation-settings"></a>
### Các cài đặt dịch hữu ích

Trong [**Cài đặt** > **Cài đặt chung**](#general-settings), bạn có thể thay đổi cách thức hoạt động của tính năng dịch:

- **Tự động dịch khi dán** sẽ thực hiện dịch ngay khi bạn dán văn bản.
-.
- **Tự động sao chép kết quả vào bộ nhớ tạm** sẽ tự động sao chép kết quả sau khi dịch thành công.
- **Dịch thời gian thực (trong khi gõ)** sẽ thực hiện dịch trong lúc bạn gõ.
- **Thời gian chờ (ms)** quy định thời gian ứng dụng chờ trước khi thực hiện dịch thời gian thực.

<br/>

<a id="keyboard-shortcuts"></a>
### Phím tắt

Trong [**Cài đặt** > **Cài đặt chung**](#general-settings), tùy chọn **Hành vi của phím ENTER** kiểm soát điều sẽ xảy ra khi bạn nhấn phím `Enter`:

- **Enter** có thể thực hiện tác vụ và **Shift+Enter** để xuống dòng.
- Hoặc ứng dụng có thể đảo ngược chức năng.

Chế độ hiện tại cũng được hiển thị trên nút **Dịch**.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="rewrite"></a>
## Viết lại

Sử dụng **Viết lại** khi bạn muốn cải thiện cách diễn đạt mà không thay đổi ý nghĩa chính.

![Không gian làm việc Viết lại](../images/screenshots/vi/rewrite.png)

Tính năng này hữu ích để:

- Sửa lỗi chính tả và ngữ pháp
- Làm cho văn bản rõ ràng hơn
- Làm cho văn bản trang trọng hơn hoặc thân mật hơn
- Rút ngắn hoặc mở rộng văn bản
- Làm cho văn bản mang âm hưởng kỹ thuật hơn

<br/>

<a id="rewrite-text"></a>

### Viết lại văn bản

1. Mở **Viết lại**.
2. Chọn một **Chế độ**.
3. Chọn mô hình trong thanh công cụ.
4. Gõ hoặc dán văn bản vào ô **Đầu vào**.
5. Nhấp vào **Viết lại**.
6. Xem lại kết quả ở ô **Đầu ra**.

Hành vi tương tự của phím Enter như đã mô tả trong phần [**Dịch**](#keyboard-shortcuts) cũng áp dụng tại đây.

<br/>

> 💡 **MẸO**<br/>
> Khi bạn sử dụng chế độ "**Kiểm tra chính tả & ngữ pháp**", một nút `Hiển thị thay đổi` sẽ xuất hiện trong bảng kết quả.
> Nhấp vào nút này để bật/tắt việc hiển thị các sửa đổi, cho phép hiện hoặc ẩn các thay đổi cụ thể đối với văn bản của bạn.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="transform"></a>
## Biến đổi

Sử dụng **Biến đổi** khi bạn muốn AI tuân theo một tập hướng dẫn do bạn tự tạo.

![Không gian làm việc Biến đổi](../images/screenshots/vi/transform.png)

Đây là khu vực linh hoạt nhất trong ứng dụng. Bạn có thể dùng nó cho các tác vụ như:

- tóm tắt ghi chú
- biến văn bản thô thành email hoàn chỉnh
- trích xuất các điểm chính
- chuyển đổi văn bản sang định dạng cụ thể

<br/>

<a id="run-an-existing-prompt"></a>
### Chạy một lời nhắc có sẵn

1. Mở **Biến đổi**.
2. Chọn một lời nhắc từ danh sách lời nhắc.
3. Nếu xuất hiện ô chọn ngôn ngữ **Mục tiêu**, hãy chọn ngôn ngữ nếu bạn cần.
4. Gõ hoặc dán văn bản vào ô **Đầu vào**.
5. Nhấp **Biến đổi**.
6. Đọc kết quả trong ô **Đầu ra**.

<br/>

<a id="if-you-have-no-prompts-yet"></a>
### Nếu bạn chưa có lời nhắc nào

Nếu danh sách lời nhắc của bạn trống, hãy nhấp vào **Tải lời nhắc mẫu**. Thao tác này sẽ thêm vào các ví dụ tích hợp sẵn để bạn có thể bắt đầu nhanh chóng.

<br/>

> ℹ️ **LƯU Ý**<br/>
> Các lời nhắc mẫu được cung cấp bằng tiếng Anh. Sau khi tải xong, bạn có thể chỉnh sửa lời nhắc và sử dụng chức năng **Dịch lời nhắc** để chuyển sang ngôn ngữ của mình.

<br/>

<a id="create-a-prompt-quickly"></a>
### Tạo lời nhắc nhanh chóng

Cách nhanh nhất để tạo một lời nhắc là:

1. Nhấp vào **Lời nhắc mới**.
2. Nhấp vào **Tạo lời nhắc**.
3. Mô tả điều bạn muốn lời nhắc thực hiện.
4. Chọn mô hình.
5. Để ứng dụng tạo bản nháp cho bạn.
6. Xem lại bản nháp và nhấp **Lưu**.

![Tạo lời nhắc](../images/screenshots/vi/transform-generate.png)


<br/>

<a id="edit-a-prompt"></a>
### Chỉnh sửa lời nhắc

Khi bạn tạo hoặc chỉnh sửa một lời nhắc, khu vực soạn thảo xuất hiện ở bên trái và một khu vực kiểm thử xuất hiện ở bên phải.

![Trình soạn thảo lời nhắc Biến đổi](../images/screenshots/vi/transform-prompt-edit.png)

Các trường chính gồm:

- **Tên lời nhắc**: tên hiển thị trong danh sách lời nhắc.
- **Hướng dẫn lời nhắc (tùy chọn)**: gợi ý ngắn được hiển thị cho người dùng khi chạy lời nhắc.
- **Vai trò mô hình**: vai trò tổng thể được gán cho AI, ví dụ: 'Bạn là trợ lý hữu ích.'
- **Hướng dẫn mô hình (mỗi dòng một hướng dẫn)**: những quy tắc cụ thể mà bạn muốn AI tuân theo.
- **Mô tả đầu ra**: một từ ngắn mô tả kết quả, như 'tóm tắt' hoặc 'viết lại'.
- **Nhiệt độ (0.0 → 1.0)**: cách mô hình hành xử; xem giải thích bên dưới.
- **Yêu cầu ngôn ngữ mục tiêu**: thêm bộ chọn ngôn ngữ khi thực thi lời nhắc.

Nếu thuật ngữ kỹ thuật **Nhiệt độ** còn mới mẻ với bạn, hãy hiểu theo cách sau:

- **Nhiệt độ thấp** hơn mang lại kết quả ổn định và dễ dự đoán hơn.
- **Nhiệt độ cao** hơn mang lại sự đa dạng và sáng tạo hơn.

Bạn cũng có thể sử dụng:

- **`Tạo lời nhắc`** để tạo một bản nháp mới từ mô tả đơn giản
- **`Cải thiện lời nhắc`** để tinh chỉnh lời nhắc hiện có
- **`Dịch lời nhắc`** để dịch các trường của lời nhắc

<br/>

> ⚠️ **CẢNH BÁO**<br/>
> Nhấp **`Lưu`** trước khi nhấp **`Quay lại để chạy`**. Nếu bạn quay lại mà chưa lưu, các thay đổi sẽ bị mất.

<br/>

<a id="test-a-prompt-before-using-it"></a>
### Kiểm thử lời nhắc trước khi sử dụng

Bảng kiểm thử ở bên phải cho phép bạn thử lời nhắc với văn bản mẫu trước khi dùng vào công việc hàng ngày.

Tính năng này hữu ích khi:

- bạn đang tạo một lời nhắc mới
- bạn đang so sánh hai phiên bản lời nhắc
- bạn muốn kiểm tra giọng điệu, độ dài hay định dạng đầu ra

<br/>

<a id="manage-saved-prompts"></a>
### Quản lý các lời nhắc đã lưu

Để quản lý các lời nhắc đã lưu tại một nơi duy nhất, hãy mở [**Cài đặt** > **Lời nhắc Biến đổi**](#transform-prompts).

Tại đây bạn có thể:

- liệt kê và xóa lời nhắc
- xuất lời nhắc dưới dạng **JSON**, **CSV** hoặc **XLSX**
- nhập lời nhắc từ một tệp

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="dashboard"></a>

## Bảng điều khiển

Sử dụng **Bảng điều khiển** để xem bạn đang sử dụng ứng dụng bao nhiêu và chi phí hiện tại (đối với các mô hình có phí).

![Tóm tắt Bảng điều khiển](../images/screenshots/vi/dashboard-summary.png)


<br/>

> ℹ️ **LƯU Ý**<br/>
> Nếu bạn chỉ sử dụng các mô hình miễn phí, các biểu đồ liên quan đến chi phí sẽ trống.

<br/>

<a id="filter-the-data"></a>
### Lọc dữ liệu

Sử dụng các nút lọc ở phía trên để thay đổi phạm vi thời gian.

![Các bộ lọc Bảng điều khiển](../images/screenshots/vi/dashboard-filter.png)

<br/>

> ℹ️ **LƯU Ý**<br/>
> Bộ lọc **Người dùng** chỉ hiển thị với quản trị viên trong phiên bản web. Người dùng thông thường sẽ không thấy bộ lọc này, và nó cũng không khả dụng trong ứng dụng máy tính để bàn.

<br/>

<a id="dashboard-tabs"></a>
### Các tab Bảng điều khiển

- **Tóm tắt** cung cấp cái nhìn tổng quan về lượng sử dụng và chi phí.
- **Theo sử dụng** phân tích hoạt động theo ngôn ngữ dịch, chế độ viết lại và lời nhắc chuyển đổi.
- **Theo mô hình** cho biết các mô hình bạn đã sử dụng và chi phí tương ứng.
- **Theo ngày** hiển thị tổng lượng sử dụng hàng ngày.
- **Tất cả các yêu cầu** hiển thị toàn bộ lịch sử yêu cầu và cho phép bạn xuất dữ liệu.

<br/>

<a id="export-data"></a>
### Xuất dữ liệu

Các bảng trong bảng điều khiển có thể xuất dữ liệu ở định dạng:

- **JSON**
- **CSV**
- **XLSX**

Tính năng này hữu ích nếu bạn muốn xem lại hoạt động bên ngoài ứng dụng hoặc chia sẻ báo cáo.

<br/>

<a id="delete-stored-records-for-a-model"></a>
### Xóa bản ghi đã lưu cho một mô hình

Trong tab **Theo mô hình** hoặc **Tất cả các yêu cầu**, bạn có thể xóa các bản ghi đã lưu cho một mô hình bằng cách nhấp vào biểu tượng "thùng rác".

> ⚠️ **CẢNH BÁO**<br/>
> Việc xóa các bản ghi đã lưu là không thể hoàn tác. Chỉ thực hiện khi bạn chắc chắn rằng không cần lưu lịch sử đó nữa.

Để xóa toàn bộ dữ liệu hoặc xóa các bản ghi dựa trên thời gian lưu trữ, hãy vào mục [**Cài đặt** > **Theo dõi chi phí**](#cost-tracking). Tại đây, bạn sẽ thấy các tùy chọn để xóa tất cả dữ liệu đã lưu hoặc chỉ xóa những dữ liệu cũ hơn một ngày nhất định.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="history"></a>
## Lịch sử

Nhấp vào **Lịch sử** để xem lịch sử các thao tác của bạn trong **Transrewrt**, bao gồm đầu vào và đầu ra của từng thao tác.

![Trang Lịch sử](../images/screenshots/vi/history.png)

<br/>

<a id="filter-the-history"></a>
### Lọc dữ liệu lịch sử

**Lịch sử** sử dụng cùng các bộ lọc như trang **Bảng điều khiển**. Hãy dùng chúng để chọn phạm vi thời gian.

![Các bộ lọc Bảng điều khiển](../images/screenshots/vi/dashboard-filter.png)

<br/>

> ℹ️ **LƯU Ý**<br/>
> Bộ lọc **Người dùng** chỉ hiển thị với quản trị viên trong phiên bản web. Người dùng thông thường sẽ không thấy bộ lọc này, và nó cũng không khả dụng trong ứng dụng máy tính để bàn.

<br/>

<a id="export-history-data"></a>
### Xuất dữ liệu lịch sử

Trang lịch sử có thể xuất dữ liệu đã lọc ở các định dạng sau:

- **JSON**
- **CSV**
- **XLSX**

Tính năng này hữu ích nếu bạn muốn xem lại hoạt động bên ngoài ứng dụng hoặc chia sẻ báo cáo.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="settings"></a>
## Cài đặt

Mở **Cài đặt** từ thanh bên để tùy chỉnh cách hoạt động của ứng dụng.

Các tab khả dụng phụ thuộc vào nền tảng và vai trò của bạn:

  | Tab                       | Máy tính để bàn | Web (quản trị viên) | Web (người dùng thường) |
  |---------------------------|:---------------:|:-------------------:|:----------------------:|
  | Cài đặt chung             |      có         |         có          |           có           |
  | Mô hình                   |      có         |         có          |           có           |
  | Ngôn ngữ                  |      có         |         có          |           có           |
  | Theo dõi chi phí          |      có         |         có          |            —           |
  | Lời nhắc chuyển đổi       |      có         |         có          |           có           |
  | Người dùng                |       —         |         có          |            —           |
  | Cấu hình API              |      có         |         có          |            —           |
  | Giới thiệu                |      có         |         có          |           có           |

<br/>

> ℹ️ **LƯU Ý**<br/>
> Trên phiên bản web, mỗi người dùng có cấu hình riêng. Các cài đặt như mô hình được chọn, ngôn ngữ, tùy chọn chung và lời nhắc chuyển đổi được lưu riêng theo từng người dùng. Những thay đổi bạn thực hiện sẽ không ảnh hưởng đến những người dùng khác.

<br/>


[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="general-settings"></a>

### Cài đặt chung

Sử dụng **Cài đặt chung** để điều chỉnh hành vi gõ phím, việc lưu trữ chi tiết thực thi cho **Lịch sử**, và giao diện người dùng.

**Hành vi**

- **Hành vi của phím ENTER** chọn việc phím `Enter` sẽ thực thi tác vụ hay chèn dòng mới.
- **Tự động dịch khi dán** bắt đầu dịch ngay khi bạn dán văn bản.
- **Tự động sao chép kết quả vào bộ nhớ tạm** tự động sao chép các kết quả thành công.
- **Dịch thời gian thực (khi đang gõ)** dịch trong khi bạn gõ văn bản.
- **Thời gian chờ (ms)** đặt khoảng thời gian chờ cho dịch thời gian thực.

**Lịch sử**

- **Giữ lịch sử thực thi** quyết định việc có lưu **văn bản đầu vào và đầu ra** cho chế độ xem [**Lịch sử**](#history) ở thanh bên hay không. Tắt chức năng này sẽ yêu cầu xác nhận; nếu bạn xác nhận, dữ liệu lịch sử đã lưu sẽ bị xóa khỏi cơ sở dữ liệu.
- **Xóa dữ liệu lịch sử** cho phép bạn xóa văn bản đã lưu theo độ tuổi (ví dụ: lâu hơn vài tháng, hoặc **tất cả dữ liệu (dọn sạch)**) bằng cách sử dụng **Xóa dữ liệu**. Thao tác này chỉ ảnh hưởng đến văn bản thực thi đã lưu cho chế độ xem **Lịch sử**, và **không** xóa tổng chi phí hay dữ liệu sử dụng. Để xóa hoặc thu gọn dữ liệu **chi phí**, hãy sử dụng [**Cài đặt** > **Theo dõi chi phí**](#cost-tracking).

**Giao diện**

- **Số chữ số phần thập phân chi phí** thay đổi cách hiển thị số thập phân chi phí.
- **Chỉ trên Web:** **hiển thị lề xung quanh ứng dụng** thêm khoảng trống xung quanh giao diện.
- **Phông chữ** thay đổi phông chữ viết trong các bảng văn bản.
- **Kích cỡ** thay đổi kích thước phông chữ.

<br/>

<a id="models"></a>
### Các mô hình

Sử dụng **Cài đặt** > **Mô hình** để chọn những mô hình sẽ xuất hiện trên thanh công cụ.

![Tab Mô hình trong Cài đặt](../images/screenshots/vi/settings-models.png)

Trang này có hai danh sách:

- **Các mô hình khả dụng** ở bên trái
- **Các mô hình đã chọn** ở bên phải

Các điều khiển hữu ích bao gồm:

- **Tìm kiếm mô hình...** để tìm mô hình theo tên
- Các thẻ **Nhà cung cấp** để thu hẹp danh sách theo một nền tảng (OpenRouter, OpenAI, Ollama, …)
- **Chỉ mô hình miễn phí** để chỉ hiển thị các mô hình miễn phí
- **Tải lại** để làm mới danh sách
- **Mở rộng tất cả** và **Thu gọn tất cả** khi bạn sắp xếp theo nhà cung cấp

ID mô hình bao gồm tiền tố nhà cung cấp (ví dụ `openrouter/…` so với `openai/…`). Các nhãn như **OpenAI (OpenRouter)** hay **OpenAI (trực tiếp)** cho biết cách định tuyến lưu lượng truy cập.

Các hành động:

 - Để thêm một mô hình, nhấn vào **Thêm** hoặc bất kỳ đâu trong mục đó.

 - Để xóa một mô hình, nhấn vào **X** kế bên nó trong **Các mô hình đã chọn** hoặc **Đã chọn** trên mục trong Danh sách mô hình khả dụng.

 - Để dọn sạch danh sách, nhấn **Bỏ chọn tất cả**. Mô hình miễn phí bắt buộc sẽ vẫn được giữ lại.

<br/>

> ℹ️ **LƯU Ý**<br/>
> Nếu bạn không muốn nạp tiền vào tài khoản OpenRouter ngay lập tức, hãy bắt đầu bằng cách bật **Chỉ mô hình miễn phí** và chọn các mô hình miễn phí (không yêu cầu thẻ tín dụng). Bạn cũng có thể sử dụng Ollama để chạy mô hình cục bộ mà không cần bất kỳ khóa API nào.

<br/>

<a id="languages"></a>
### Ngôn ngữ

Sử dụng **Cài đặt** > **Ngôn ngữ** để sắp xếp lại danh sách ngôn ngữ được dùng trong ứng dụng.

- **Ngôn ngữ thường dùng** sẽ được ghim gần đầu danh sách ngôn ngữ trong **Dịch** và **Biến đổi**.
- **Ngôn ngữ tùy chỉnh** cho phép bạn thêm một ngôn ngữ không có trong danh sách mặc định.

Nếu bạn thêm một ngôn ngữ tùy chỉnh, nó sẽ xuất hiện trong các trình chọn ngôn ngữ cùng với các tùy chọn mặc định.

<br/>

<a id="cost-tracking"></a>
### Theo dõi chi phí

Sử dụng **Cài đặt** > **Theo dõi chi phí** để quản lý thông tin về chi phí.

- **Tổng chi phí** hiển thị tổng số tích lũy.
- **Sao chép giá trị** sao chép tổng số vào bộ nhớ tạm.
- **Đặt lại chi phí** đặt lại tổng số đã lưu về không.
- **Đồng bộ với mức sử dụng khóa API** đặt tổng số bằng với mức sử dụng ghi nhận bởi tài khoản OpenRouter của bạn (chỉ dành cho OpenRouter).
- **Sử dụng khóa API** hiển thị chi tiết mức sử dụng OpenRouter, nếu có sẵn.
- **Xóa dữ liệu chi phí** xóa tất cả dữ liệu, hoặc chỉ những mục cũ hơn ngày đã chọn.

**Theo dõi chi phí:** Khi bạn sử dụng các mô hình OpenRouter, ứng dụng sẽ hiển thị mức sử dụng và chi tiêu thực tế dựa trên dữ liệu từ OpenRouter. Với tất cả nhà cung cấp khác, ứng dụng ước tính chi phí bằng giá do OpenRouter công bố; nếu giá không khả dụng, mức ước tính có thể bằng không.

<br/>

> ℹ️ **LƯU Ý**<br/>
> **Tất cả các con số chi phí chỉ mang tính chất tham khảo, không phải là sao kê chính thức.**


<br/>

> ⚠️ **CẢNH BÁO**<br/>
> Việc xóa dữ liệu là không thể hoàn tác. Trước khi xóa, hãy sao lưu dữ liệu hoặc xuất ra thông qua [**Bảng điều khiển** > **Tất cả yêu cầu**](#dashboard-tabs), nếu không dữ liệu sẽ bị mất vĩnh viễn. <br/>
> Tất cả lịch sử liên quan đến từng yêu cầu API cũng sẽ bị xóa.


<br/>

<a id="transform-prompts"></a>

### Chuyển đổi lời nhắc

Sử dụng **Cài đặt** > **Chuyển đổi lời nhắc** để quản lý các lời nhắc theo nhóm.

Bạn có thể:

- xem lại các lời nhắc đã lưu
- xóa lời nhắc
- nhập lời nhắc từ tệp
- xuất lời nhắc để sao lưu hoặc chia sẻ

<br/>

<a id="users"></a>
### Người dùng

**Web: chỉ dành cho quản trị viên**

Sử dụng **Người dùng** để quản lý tài khoản người dùng trong phiên bản web. Bạn có thể thêm người dùng, cập nhật thông tin chi tiết, đặt lại mật khẩu và xóa tài khoản.

<br/>

<a id="api-config"></a>
### Cấu hình API

Các nhà cung cấp được hỗ trợ bao gồm: OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI và **Ollama** (mô hình cục bộ thông qua URL gốc). Bạn chỉ cần cấu hình những nhà cung cấp mà bạn sử dụng.

**Ứng dụng web: chỉ dành cho quản trị viên**

Khóa API được cấu hình thông qua biến môi trường hệ thống hoặc Docker — chúng không được nhập vào giao diện web. Trang này hiển thị các nhà cung cấp đã cấu hình khóa và cho phép bạn kiểm tra từng nhà cung cấp bằng cách nhấn vào nút **`Kiểm tra`**.

<br/>

> ℹ️ **LƯU Ý**<br/>
> Để thay đổi khóa API, hãy cập nhật biến môi trường trong cấu hình hệ thống hoặc Docker của bạn rồi khởi động lại máy chủ hoặc bộ chứa.

<br/>

**Ứng dụng máy tính để bàn**

Sử dụng **Cấu hình API** để lưu trữ khóa API cho từng nhà cung cấp bạn sử dụng. Đối với Ollama, nhập **URL gốc** thay vì khóa API.


<br/>

> 💡 **Mẹo** <br/>
> Nếu bạn không muốn sử dụng khóa API hay trả phí sử dụng, bạn có thể [tải Ollama](https://ollama.com) và chạy mô hình trên máy tính của bạn miễn phí. Ngoài ra, bạn cũng có thể tạo tài khoản OpenRouter miễn phí (không cần thẻ tín dụng) để sử dụng các mô hình miễn phí của họ.

- Chỉ thêm các nhà cung cấp mà bạn cần. Trong phần **Cài đặt** > **Mô hình**, từng mã định danh mô hình đều bắt đầu bằng tên nhà cung cấp (ví dụ: `openrouter/openrouter/free`, `openai/gpt-4o`, `ollama/llama3`).

Để thêm khóa API, gõ giá trị vào ô nhập liệu và nhấn **`Lưu`**. Để thay thế khóa hiện có, nhấn **`Sửa`**. Để kiểm tra khóa có hoạt động hay không, nhấn **`Kiểm tra`**.

<br/>

> ℹ️ **LƯU Ý**<br/>
> Bạn không thể xem giá trị hiện tại của một khóa API. Bạn chỉ có thể thay thế nó bằng cách sử dụng nút **`Sửa`**.
> Các khóa API được lưu theo dạng mã hóa trong tập tin cấu hình.

<br/>

Để biết các bước chi tiết về cách lấy khóa OpenRouter, xem phần [Cách lấy khóa API](#how-to-get-an-api-key-desktop-app) ở trên.



<br/>

<a id="about"></a>
### Giới thiệu

Tab **Giới thiệu** hiển thị:

- tên ứng dụng
- số phiên bản
- ngày xây dựng
- liên kết đến kho dự án

<br/><br/>

<a id="common-issues"></a>
## Các vấn đề thường gặp

Nếu một điều gì đó không hoạt động như mong đợi, hãy kiểm tra các điểm sau trước tiên.

<br/>

<a id="the-app-will-not-translate-rewrite-or-transform-text"></a>
### Ứng dụng không dịch, viết lại hoặc biến đổi văn bản

Kiểm tra xem:

- bạn đã chọn một mô hình trên thanh công cụ chưa
- ít nhất một mô hình được liệt kê trong phần [**Cài đặt** > **Mô hình**](#models)
- thiết lập API của bạn đang hoạt động

Nếu bạn đang sử dụng ứng dụng máy tính:

1. Mở [**Cài đặt** > **Cấu hình API**](#api-config).
2. Kiểm tra xem ít nhất một khóa API đã được lưu chưa.
3. Nhấn **Kiểm tra** bên cạnh nhà cung cấp để xác nhận khóa có hoạt động không.

<br/>

<a id="the-model-list-is-empty"></a>
### Danh sách mô hình trống

Mở [**Cài đặt** > **Mô hình**](#models) và nhấn **Làm mới**.

Nếu cần:

- tìm kiếm mô hình
- bật **Chỉ miễn phí**
- thêm một hoặc nhiều mô hình vào **Mô hình đã chọn**

<br/>

<a id="the-result-is-too-slow-or-too-expensive"></a>
### Kết quả quá chậm hoặc quá tốn kém

Hãy thử một hoặc nhiều cách sau:

- chọn mô hình khác
- sử dụng văn bản đầu vào ngắn hơn
- tắt **Dịch thời gian thực (trong khi nhập)** trong [**Cài đặt** > **Cài đặt chung**](#general-settings)
- dùng các mô hình miễn phí cho các tác vụ đơn giản (xem [Mô hình](#models))

<br/>

<a id="the-interface-is-in-the-wrong-language"></a>
### Giao diện hiển thị ngôn ngữ không đúng

Nhấp vào biểu tượng quả địa cầu trên [thanh công cụ](#toolbar) và chọn **Ngôn ngữ giao diện** bạn muốn.

<br/>

<a id="the-text-is-too-small-or-hard-to-read"></a>
### Văn bản quá nhỏ hoặc khó đọc

Mở [**Cài đặt** > **Cài đặt chung**](#general-settings) và thay đổi:

- **Họ phông chữ**
- **Cỡ chữ**

<br/>

<a id="dashboard-charts-are-empty"></a>
### Biểu đồ trên bảng điều khiển trống

Điều này là bình thường nếu:

- bạn chỉ sử dụng **mô hình miễn phí** (biểu đồ chi phí sẽ trống)
- **bộ lọc thời gian** đã chọn không bao gồm khoảng thời gian thực hiện các yêu cầu — hãy thử chọn **Tất cả** để kiểm tra

Nếu biểu đồ vẫn trống sau khi chọn **Tất cả**, hãy xác nhận các yêu cầu xuất hiện trong phần [**Lịch sử**](#history) hoặc tab **Tất cả yêu cầu**.

<br/>

<a id="cost-shows-not-available-or-seems-wrong"></a>

### Chi phí hiển thị là "không khả dụng" hoặc có vẻ sai

Khi bạn sử dụng các mô hình thông qua **OpenRouter**, ứng dụng sẽ hiển thị chi phí thực tế mà OpenRouter báo cáo.

Đối với **các nhà cung cấp khác** (OpenAI trực tiếp, Anthropic trực tiếp, v.v.), chi phí được ước tính dựa trên dữ liệu giá công bố bởi OpenRouter. Nếu không tìm thấy mức giá phù hợp cho một mô hình, chi phí sẽ hiển thị là **không khả dụng** và sẽ không được cộng vào tổng chi phí của bạn.

<br/>

<a id="total-cost-does-not-match-my-provider-bill"></a>
### Tổng chi phí không khớp với hóa đơn của nhà cung cấp

Tất cả các con số chi phí trong ứng dụng đều là **ước tính để tham khảo**, không phải hóa đơn chính thức.

Để làm cho tổng chi phí gần đúng hơn với chi phí thực tế trên OpenRouter, hãy mở [**Cài đặt** > **Theo dõi chi phí**](#cost-tracking) và nhấn **Đồng bộ với việc sử dụng khóa API**.

<br/>

<a id="the-history-page-is-missing-from-the-sidebar"></a>
### Trang Lịch sử bị mất trong thanh bên

Tính năng **giữ lịch sử thực thi** có thể đã bị tắt. Hãy mở [**Cài đặt** > **Cài đặt chung**](#general-settings) và bật nó lên. Lưu ý rằng việc bật lên không thể khôi phục dữ liệu lịch sử đã bị xóa trước đó.

<br/>

<a id="web-app-session-expired"></a>
### Ứng dụng web: bị chuyển về trang đăng nhập một cách bất ngờ

Phiên làm việc của bạn có thể đã hết hạn. Vui lòng đăng nhập lại. Nếu hiện tượng này xảy ra thường xuyên, hãy kiểm tra cấu hình máy chủ về thời gian sống của phiên.

<br/>

<a id="dashboard-shows-no-data-for-other-users"></a>
### Bảng điều khiển không hiển thị dữ liệu của người dùng khác (web)

Chỉ **quản trị viên** mới có thể xem dữ liệu của tất cả người dùng thông qua bộ lọc **Người dùng**. Người dùng thông thường chỉ có thể xem hoạt động của chính họ theo thiết kế.

<br/>

<a id="i-changed-a-prompt-and-lost-the-edits"></a>
### Tôi đã thay đổi một lời nhắc nhưng mất các chỉnh sửa

Khi chỉnh sửa lời nhắc, hãy luôn nhấn **Lưu** trước khi nhấn **Quay lại Chạy**.

<br/><br/>

<a id="quick-tips"></a>
## Mẹo nhanh

- Bắt đầu với [**Dịch**](#translate) để đảm bảo cấu hình của bạn hoạt động trước khi chuyển sang [**Viết lại**](#rewrite) hoặc [**Chuyển đổi**](#transform).
- Sử dụng [**Viết lại**](#rewrite) để cải thiện văn phong hằng ngày.
- Sử dụng [**Chuyển đổi**](#transform) khi bạn cần một quy trình lặp lại cho một nhiệm vụ cụ thể.
- Sử dụng [**Bảng điều khiển**](#dashboard) nếu bạn muốn theo dõi việc sử dụng và chi phí.
- Sử dụng [**Lịch sử**](#history) để xem lại các thao tác trước đây cùng toàn bộ văn bản đầu vào/đầu ra.
- Xuất lời nhắc thường xuyên nếu bạn đang xây dựng một thư viện lời nhắc mà bạn muốn duy trì an toàn (xem phần [Chuyển đổi lời nhắc](#transform-prompts)) hoặc nếu bạn muốn chia sẻ với người khác.

<br/><br/>

<a id="disclaimer"></a>
## Từ chối trách nhiệm

Các tên sản phẩm và biểu tượng thuộc về chủ sở hữu tương ứng và chỉ được sử dụng để nhận dạng. Phần mềm này không liên kết hoặc được cấp phép bởi bất kỳ thương hiệu nào được đề cập.

<br/><br/>

<a id="license"></a>
## Giấy phép

Bản quyền © 2026 Waldemar Scudeller Jr.

[Giấy phép Apache 2.0](LICENSE)