---
translated_at: "2026-03-26T01:22:52.985Z"
source_hash: "87f5e7618cbfd3084efeecba28440ecccb03450da2ae8fe4c6f91c75cb7f4981"
source_mtime: 1774482557035.2158
model: "stepfun/step-3.5-flash:free"
---
![Transrewrt banner](../images/transrewrt_banner.png)


<a id="transrewrt-user-guide"></a>
# Hướng dẫn sử dụng

<br/>

<a id="introduction"></a>
## Giới thiệu

Transrewrt giúp bạn làm việc với văn bản theo ba cách chính:

- **Dịch thuật** - chuyển đổi văn bản từ ngôn ngữ này sang ngôn ngữ khác.
- **Viết lại** - diễn đạt lại văn bản theo phong cách khác, chẳng hạn như rõ ràng hơn, ngắn gọn hơn hoặc trang trọng hơn.
- **Biến đổi** - xử lý văn bản bằng các chỉ dẫn AI tùy chỉnh được gọi là prompt.

<br/>

Hướng dẫn này giải thích cách sử dụng ứng dụng sau khi nó đã được cài đặt và chạy. Để biết các bước cài đặt, xem **[README](README.vi.md)** chính.

<br/>

> ℹ️ **LƯU Ý**<br/>
> Transrewrt có sẵn dưới dạng ứng dụng máy tính để bàn cho Windows và Linux, và dưới dạng ứng dụng web tự host. Hướng dẫn này tập trung vào việc sử dụng hàng ngày của ứng dụng. Nếu có điều gì chỉ áp dụng cho một phiên bản cụ thể, nó sẽ được đánh dấu rõ ràng.

<small>**Đọc bằng các ngôn ngữ khác:** </small>
<small id="lang-list"> [English (UK)](../USER-GUIDE.md) · [Português (BR)](USER-GUIDE.pt-BR.md) · [العربية](USER-GUIDE.ar.md) · [বাংলা](USER-GUIDE.bn.md) · [Català](USER-GUIDE.ca.md) · [简体中文](USER-GUIDE.zh-CN.md) · [繁體中文](USER-GUIDE.zh-TW.md) · [Hrvatski](USER-GUIDE.hr.md) · [Čeština](USER-GUIDE.cs.md) · [Nederlands](USER-GUIDE.nl.md) · [English (US)](USER-GUIDE.en-US.md) · [Filipino](USER-GUIDE.tl.md) · [Français](USER-GUIDE.fr.md) · [Deutsch](USER-GUIDE.de.md) · [Ελληνικά](USER-GUIDE.el.md) · [हिन्दी](USER-GUIDE.hi.md) · [Magyar](USER-GUIDE.hu.md) · [Italiano](USER-GUIDE.it.md) · [日本語](USER-GUIDE.ja.md) · [Basa Jawa](USER-GUIDE.jv.md) · [한국어](USER-GUIDE.ko.md) · [Bahasa Melayu](USER-GUIDE.ms.md) · [فارسی](USER-GUIDE.fa.md) · [Polski](USER-GUIDE.pl.md) · [Português (PT)](USER-GUIDE.pt.md) · [ਪੰਜਾਬੀ](USER-GUIDE.pa.md) · [Română](USER-GUIDE.ro.md) · [Русский](USER-GUIDE.ru.md) · [Slovenčina](USER-GUIDE.sk.md) · [Español](USER-GUIDE.es.md) · [Kiswahili](USER-GUIDE.sw.md) · [Svenska](USER-GUIDE.sv.md) · [తెలుగు](USER-GUIDE.te.md) · [ภาษาไทย](USER-GUIDE.th.md) · [Türkçe](USER-GUIDE.tr.md) · [Українська](USER-GUIDE.uk.md) · [Tiếng Việt](USER-GUIDE.vi.md)</small>

<small>

> **Lưu ý về bản dịch giao diện và tài liệu:** Tất cả các ngôn ngữ giao diện ngoại trừ tiếng Anh (UK) gốc 
> đã được dịch bằng các mô hình AI; cách diễn đạt có thể không chính xác hoặc chứa lỗi.

</small>

<br/>


<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Mục lục** 

- [Trước khi bắt đầu](#trước-khi-bắt-đầu)
  - [Cách lấy API key OpenRouter miễn phí (ứng dụng máy tính để bàn)](#cách-lấy-api-key-openrouter-miễn-phí-ứng-dụng-máy-tính-để-bàn)
- [Bắt đầu](#bắt-đầu)
- [Các phần chính của cửa sổ](#các-phần-chính-của-cửa-sổ)
  - [Thanh bên](#thanh-bên)
  - [Thanh công cụ](#thanh-công-cụ)
  - [Bảng nhập liệu và xuất](#bảng-nhập-liệu-và-xuất)
- [Dịch thuật](#dịch-thuật)
  - [Dịch văn bản](#dịch-văn-bản)
  - [Lựa chọn ngôn ngữ](#lựa-chọn-ngôn-ngữ)
  - [Cài đặt dịch thuật hữu ích](#cài-đặt-dịch-thuật-hữu-ích)
- [Viết lại](#viết-lại)
- [Biến đổi](#biến-đổi)
  - [Chạy một prompt có sẵn](#chạy-một-prompt-có-sẵn)
  - [Nếu bạn chưa có prompt nào](#nếu-bạn-chưa-có-prompt-nào)
  - [Tạo prompt nhanh chóng](#tạo-prompt-nhanh-chóng)
  - [Chỉnh sửa một prompt](#chỉnh-sửa-một-prompt)
  - [Kiểm tra prompt trước khi sử dụng](#kiểm-tra-prompt-trước-khi-sử dụng)
- [Bảng điều khiển](#bảng-điều-khiển)
  - [Lọc dữ liệu](#lọc-dữ-liệu)
  - [Các tab bảng điều khiển](#các-tab-bảng-điều-khiển)
  - [Xuất dữ liệu](#xuất-dữ-liệu)
  - [Xóa bản ghi đã lưu cho một mô hình](#xóa-bản-ghi-đã-lưu-cho-một-mô-hình)
- [Lịch sử](#lịch-sử)
  - [Lọc dữ liệu](#lọc-dữ-liệu-1)
  - [Xuất dữ liệu lịch sử](#xuất-dữ-liệu-lịch-sử)
- [Cài đặt](#cài-đặt)
  - [Cài đặt chung](#cài-đặt-chung)
  - [Mô hình](#mô-hình)
  - [Ngôn ngữ](#ngôn-ngữ)
  - [Theo dõi chi phí](#theo-dõi-chi-phí)
  - [Prompt biến đổi](#prompt-biến-đổi)
  - [Người dùng](#người-dùng)
  - [Cấu hình API](#cấu-hình-api)
  - [Giới thiệu](#giới-thiệu)
- [Vấn đề thường gặp](#vấn đề-thường-gặp)
  - [Ứng dụng không dịch, viết lại hoặc biến đổi văn bản](#ứng-dụng-không-dịch-viết-lại-hoặc-biến-đổi-văn-bản)
  - [Danh sách mô hình trống](#danh-sách-mô-hình-trống)
  - [Kết quả quá chậm hoặc quá đắt](#kết-quả-quá-chậm-hoặc-quá-đắt)
  - [Giao diện bằng ngôn ngữ sai](#giao-diện-bằng-ngôn-ngữ-sai)
  - [Văn bản quá nhỏ hoặc khó đọc](#văn-bản-quá-nhỏ-hoặc-khó-đọc)
  - [Biểu đồ bảng điều khiển trống](#biểu-đồ-bảng-điều-khiển-trống)
  - [Chi phí hiển thị "không có sẵn" hoặc có vẻ sai](#chi-phí-hiển-thị-không-có-sẵn-hoặc-có-vẻ-sai)
  - [Tổng chi phí không khớp với hóa đơn nhà cung cấp của tôi](#tổng-chi-phí-không-khớp-với-hóa-đơn-nhà-cung-cấp-của-tôi)
  - [Trang Lịch sử bị mất khỏi thanh bên](#trang-lịch-sử-bị-mất-khỏi-thanh-bên)
  - [Ứng dụng web: chuyển hướng đến trang đăng nhập bất ngờ](#ứng-dụng-web-chuyển-hướng-đến-trang-đăng-nhập-bất-ngờ)
  - [Bảng điều khiển không hiển thị dữ liệu cho người dùng khác (web)](#bảng-điều-khiển-không-hiển-thị-dữ-liệu-cho-người-dùng-khác-web)
  - [Tôi đã thay đổi một prompt và mất các chỉnh sửa](#tôi-đã-thay-đổi-một-prompt-và-mất-các-chỉnh-sửa)
- [Mẹo nhanh](#mẹo-nhanh)
- [Tuyên bố miễn trừ trách nhiệm](#tuyên-bố-miễn-trừ-trách-nhiệm)
- [Giấy phép](#giấy-phép)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="before-you-start"></a>

## Trước khi bắt đầu

Để sử dụng Transrewrt, bạn cần có quyền truy cập vào ít nhất một nhà cung cấp AI. Các nhà cung cấp được hỗ trợ bao gồm: [OpenRouter](https://openrouter.ai) (tổng hợp nhiều mô hình), OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras và [Ollama](https://ollama.com) cho các mô hình chạy cục bộ.

Bạn không cần chọn một mô hình trả phí để bắt đầu. Ngay khi bạn thêm khóa API OpenRouter, ứng dụng sẽ tự động kích hoạt tùy chọn **miễn phí** của OpenRouter. Điều này cho phép bạn ngay lập tức bắt đầu dịch, viết lại và biến đổi văn bản. Ngoài ra, bạn có thể lấy khóa API miễn phí từ Cerebras, Google, Groq hoặc Mistral AI.

Nói một cách đơn giản:

- Một **mô hình** là công cụ AI thực hiện công việc. Các mô hình được liệt kê với một **tiền tố nhà cung cấp** (ví dụ: `openrouter/…`, `openai/…`, `ollama/…`).
- Một **khóa API** (hoặc đối với Ollama, một **URL cơ sở**) là cách ứng dụng kết nối đến nhà cung cấp đó.

Nếu bạn đang sử dụng **ứng dụng desktop**, hãy thêm khóa trong [**Cài đặt** > **Cấu hình API**](#api-config) cho từng nhà cung cấp bạn dùng. Nếu chỉ dùng OpenRouter, xem [Cách lấy khóa API](#how-to-get-an-api-key-desktop-app) bên dưới. Nếu bạn không muốn dùng khóa API, bạn có thể cài đặt Ollama (từ [ollama.com](https://ollama.com)) và sử dụng các mô hình chạy cục bộ thay thế, chẳng hạn như `translategemma:4b`.

Nếu bạn đang sửùng **phiên bản web**, chủ server cấu hình các nhà cung cấp bằng biến môi trường, do đó bạn không thể nhập khóa API trực tiếp trong ứng dụng.

<br/>

<a id="how-to-get-an-api-key-desktop-app"></a>
### Cách lấy khóa API OpenRouter miễn phí (ứng dụng desktop)

Nếu bạn dùng ứng dụng desktop, hãy làm theo các bước sau:

1. Truy cập [OpenRouter](https://openrouter.ai) trong trình duyệt web.
2. Tạo tài khoản hoặc đăng nhập.
3. Mở trang [Keys](https://openrouter.ai/keys).
4. Nhấn nút để tạo khóa API mới.
5. Đặt tên cho khóa để bạn nhận biết sau này.
6. Sao chép khóa API mới.
7. Quay lại Transrewrt và mở **Cài đặt** > **Cấu hình API**.
8. Dán khóa vào ô **API Key của OpenRouter** (dưới **Cài đặt** > **Cấu hình API**).
9. Nhấn **Kiểm tra khóa OpenRouter** để đảm bảo nó hoạt động.

<br/><br/>

<a id="getting-started"></a>
## Bắt đầu

Nếu đây là lần đầu bạn sử dụng Transrewrt, hãy làm theo thứ tự này:

1. Mở ứng dụng.
2. Chọn **Ngôn ngữ giao diện** từ biểu tượng hình quả cầu nếu cần.
3. Nếu bạn dùng **ứng dụng desktop**, mở [**Cài đặt** > **Cấu hình API**](#api-config), thêm khóa API cho ít nhất một nhà cung cấp (ví dụ OpenRouter) và nhấn **Kiểm tra** để xác nhận nó hoạt động.
4. Mở [**Cài đặt** > **Mô hình**](#models) và thêm một hoặc nhiều mô hình vào **Mô hình đã chọn**.
5. Mở [**Cài đặt** > **Ngôn ngữ**](#languages) và chọn **Ngôn ngữ ưu tiên** nếu bạn muốn ngôn ngữ dùng nhiều nhất xuất hiện đầu tiên.
6. Vào **Dịch** và chạy một bản dịch đơn giản để xác nhận mọi thứ hoạt động.
7. Khi đó hoạt động, hãy thử **Viết lại** rồi **Biến đổi**.

Thứ tự này rất quan trọng. Nó ngăn chặn vấn đề phổ biến nhất khi dùng lần đầu: cố gắng chạy một tác vụ trước khi ứng dụng có kết nối API hoạt động hoặc mô hình đã chọn.

<br/><br/>

<a id="main-parts-of-the-window"></a>
## Các phần chính của cửa sổ

Ứng dụng được chia thành ba khu vực chính:

- **Thanh bên** ở bên trái.
- **Thanh công cụ** ở phía trên.
- **Khu vực làm việc** ở giữa.

<br/>

<a id="sidebar"></a>
### Thanh bên

Sử dụng thanh bên để di chuyển trong ứng dụng. Bạn có thể thu gọn thanh bên để có thêm không gian bằng cách nhấn biểu tượng bên cạnh logo ứng dụng.

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
        <li><strong>Viết lại</strong> mở không gian làm việc viết lại.</li><br/>
        <li><strong>Biến đổi</strong> mở không gian làm việc với lời nhắc tùy chỉnh.</li><br/>
        <li><strong>Bảng điều khiển</strong> hiển thị thông tin sử dụng và chi phí.</li><br/>
        <li><strong>Cài đặt</strong> mở bảng cài đặt.</li><br/>
        <li><strong>Lịch sử</strong> hiển thị lịch sử sử dụng cùng văn bản đầu vào và đầu ra</li><br/>
        <li><strong>Người dùng</strong> hiển thị tên người dùng đã đăng nhập (chỉ web).</li>
      </ul>
    </td>
  </tr>
</table>

<br/>

<a id="toolbar"></a>

### Thanh công cụ

Thanh công cụ thay đổi một chút tùy theo nơi bạn đang ở trong ứng dụng.

- Ở bên trái, nó hiển thị tên trang hiện tại.
- Ở bên phải, nó hiển thị **bộ chọn mô hình** và phần điều khiển **Ngôn ngữ giao diện**.

**Bộ chọn mô hình** cho phép bạn chọn công cụ AI nào sẽ được sử dụng cho nhiệm vụ hiện tại.

  ![Bộ chọn mô hình](../images/screenshots/vi/model-selector.png)

 Một số mô hình miễn phí có thể không luôn khả dụng—đôi khi chúng ngoại tuyến hoặc bị giới hạn sử dụng. Nếu điều này xảy ra, ứng dụng sẽ tự động loại bỏ mô hình đó khỏi danh sách khả dụng của bạn. Để kiểm soệt mô hình nào xuất hiện, hãy truy cập [**Cài đặt** > **Mô hình**](#models) và chỉnh sửa danh sách mô hình của bạn.
 Bạn cũng có thể mở trực tiếp cài đặt mô hình bằng cách nhấp vào biểu tượng nhà cung cấp bên trái tên mô hình trên thanh công cụ.

<br/>

**Biểu tượng bản đồ + mã ngôn ngữ** thay đổi ngôn ngữ giao diện của ứng dụng, chẳng hạn như menu và nút bấm. Nó **không** thay đổi các ngôn ngữ dịch được sử dụng trong **Dịch**.

  ![Bộ chọn ngôn ngữ giao diện](../images/screenshots/vi/language-selector.png)

<br/>

<a id="input-and-output-panels"></a>
### Các bảng đầu vào và đầu ra

Hầu hết các không gian làm việc sử dụng bảng **Đầu vào** bên trái và bảng **Đầu ra** bên phải.

Mỗi bảng cũng hiển thị:

| **Đầu vào**                                                          | **Đầu ra**                                                                                                                  |
|--------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------|
| - Số ký tự <br/>- Số từ <br/>- Số đoạn văn   <br/> | - Thời gian thực hiện nhiệm vụ<br/>- **TPS** (mảnh văn bản/giây)<br/>- Số ký tự, từ và đoạn văn<br/>- Mô hình được sử dụng |


Nếu bạn đang thắc mắc về các thuật ngữ kỹ thuật:

- **Token (mảnh văn bản)** nghĩa là một mảnh nhỏ văn bản. Bạn có thể nghĩ về nó như một phần của từ hoặc một từ ngắn.
- **TPS** nghĩa là số mảnh văn bản như vậy mà mô hình xử lý mỗi giây.

<br/>

Bạn cũng có thể theo dõi chi phí của mỗi hoạt động (nếu có) và tổng chi phí bằng cách kích hoạt tùy chọn `Hiển thị thông tin chi phí trên các hành động` tại [**Cài đặt** > **Cài đặt chung**](#general-settings). 
 
<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="translate"></a>
## Dịch

Sử dụng **Dịch** khi bạn muốn chuyển đổi văn bản từ ngôn ngữ này sang ngôn ngữ khác.

![Không gian làm việc Dịch](../images/screenshots/vi/translate.png)

<br/>

<a id="translate-text"></a>
### Dịch văn bản

1. Mở **Dịch**.
2. Chọn một ngôn ngữ trong **Từ**.
3. Chọn một ngôn ngữ trong **Đến**.
4. Chọn một mô hình trên thanh công cụ.
5. Gõ hoặc dán văn bản vào **Đầu vào**.
6. Nhấp vào **Dịch**.
7. Đọc kết quả trong **Đầu ra**.
8. Sử dụng nút sao chép nếu bạn muốn sao chép kết quả.

<br/>

<a id="language-selection"></a>
### Lựa chọn ngôn ngữ

- **Từ** có thể là một ngôn ngữ cụ thể hoặc **Tự động phát hiện ngôn ngữ**.
- **Đến** là ngôn ngữ bạn muốn kết quả bằng đó.

Các **Ngôn ngữ hàng đầu** bạn đã chọn sẽ xuất hiện ở đầu danh sách. Bạn có thể thiết lập chúng tại [**Cài đặt** > **Ngôn ngữ**](#languages).

<br/>

<a id="helpful-translation-settings"></a>
### Cài đặt dịch hữu ích

Trong [**Cài đặt** > **Cài đặt chung**](#general-settings), bạn có thể thay đổi cách thức hoạt động của chức năng dịch:

- **Tự động dịch khi dán** chạy một bản dịch ngay sau khi bạn dán văn bản.
- **Tự động sao chép kết quả vào bảng nhớ tạm** sao chép kết quả tự động sau khi chạy thành công.
- **Dịch thời gian thực (trong khi gõ)** chạy các bản dịch trong khi bạn gõ.
- **Thời gian chờ (ms)** kiểm soát thời gian ứng dụng chờ trước khi chạy một bản dịch thời gian thực.
- **Enter** kiểm soát điều gì xảy ra khi bạn nhấn `Enter`:

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="rewrite"></a>
## Viết lại

Sử dụng **Viết lại** khi bạn muốn cải thiện cách diễn đạt mà không làm thay đổi ý chính.

![Không gian làm việc Viết lại](../images/screenshots/vi/rewrite.png)

Điều này hữu ích cho:

- sửa lỗi chính tả và ngữ pháp
- làm cho văn bản rõ ràng hơn
- làm cho văn bản trang trọng hơn hoặc thân mật hơn
- rút ngắn hoặc mở rộng văn bản
- làm cho văn bản nghe có vẻ kỹ thuật hơn

<br/>

> 💡 **Mẹo**<br/>
> Khi bạn sử dụng chế độ "**Kiểm tra chính tả & ngữ pháp**", một nút `Hiển thị thay đổi` sẽ xuất hiện trong bảng đầu ra.
> Nhấp vào nút này để chuyển đổi hiển thị của các chỉnh sửa, hiển thị hoặc ẩn các thay đổi cụ thể được thực hiện với văn bản của bạn.


<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="transform"></a>

## Transform

Sử dụng **Transform** khi bạn muốn AI tuân theo một bộ chỉ dẫn tùy chỉnh.

![Khu vực làm việc Transform](../images/screenshots/vi/transform.png)

Đây là khu vực linh hoạt nhất của ứng dụng. Bạn có thể sử dụng nó cho các tác vụ như:

- tóm tắt ghi chú
- biến văn bản thô thành email được hoàn thiện
- trích xuất các điểm chính
- chuyển đổi văn bản thành một định dạng cụ thể
- bất kỳ hoạt động tùy chỉnh nào khác với văn bản đầu vào

<br/>

<a id="run-an-existing-prompt"></a>
### Chạy một lời nhắc hiện có

1. Mở **Transform**.
2. Chọn một lời nhắc từ danh sách lời nhắc.
3. Nếu hộp **Ngôn ngữ đích** xuất hiện, hãy chọn ngôn ngữ nếu bạn muốn.
4. Nhập hoặc dán văn bản vào **Đầu vào**.
5. Nhấp vào **Transform**.
6. Đọc kết quả trong **Đầu ra**.

<br/>

<a id="if-you-have-no-prompts-yet"></a>
### Nếu bạn chưa có lời nhắc nào

Nếu danh sách lời nhắc của bạn trống, hãy nhấp vào **Tải lời nhắc mẫu**. Điều này thêm các ví dụ có sẵn để bạn có thể bắt đầu nhanh chóng.

<br/>

> ℹ️ **LƯU Ý**<br/>
> Các lời nhắc mẫu được cung cấp bằng tiếng Anh. Sau khi tải chúng, bạn có thể chỉnh sửa một lời nhắc và sử dụng **Dịch lời nhắc** để dịch nó sang ngôn ngữ của bạn.

<br/>

<a id="create-a-prompt-quickly"></a>
### Tạo lời nhắc nhanh chóng

Cách nhanh nhất để tạo một lời nhắc là:

1. Nhấp vào **Lời nhắc mới**.
2. Nhấp vào **Tạo lời nhắc**.
3. Mô tả quello bạn muốn lời nhắc làm.
4. Chọn một mô hình.
5. Để ứng dụng tạo một bản nháp cho bạn.
6. Xem xét bản nháp và nhấp vào **Lưu**.

![Tạo lời nhắc](../images/screenshots/vi/transform-generate.png)


<br/>

<a id="edit-a-prompt"></a>
### Chỉnh sửa một lời nhắc

Khi bạn tạo hoặc chỉnh sửa một lời nhắc, trình chỉnh sửa sẽ xuất hiện ở bên trái và khu vực kiểm tra xuất hiện ở bên phải.

![Trình chỉnh sửa lời nhắc Transform](../images/screenshots/vi/transform-prompt-edit.png)

Các trường chính là:

- **Tên lời nhắc**: tên được hiển thị trong danh sách lời nhắc.
- **Chỉ dẫn lời nhắc (tùy chọn)**: một gợi ý ngắn được hiển thị cho người dùng khi chạy lời nhắc.
- **Vai trò Mô hình**: vai trò tổng thể được gán cho AI, chẳng hạn như 'Bạn là một trợ lý hữu ích.'
- **Chỉ dẫn Mô hình (mỗi dòng một cái)**: các quy tắc cụ thể mà bạn muốn AI tuân theo.
- **Mô tả đầu ra**: một từ ngắn mô tả kết quả, chẳng hạn như 'tóm tắt' hoặc 'viết lại'.
- **Nhiệt độ (0.0 → 1.0)**: cách mô hình sẽ hành xử; xem bên dưới.
- **Yêu cầu ngôn ngữ đích**: thêm bộ chọn ngôn ngữ đích khi lời nhắc được chạy.

Nếu thuật ngữ kỹ thuật **Nhiệt độ** mới với bạn, hãy nghĩ về nó như thế này:

- Một **nhiệt độ** **thấp hơn** cho kết quả ổn định hơn, dự đoán được hơn.
- Một **nhiệt độ** **cao hơn** cho nhiều sự đa dạng và sáng tạo hơn.

Bạn cũng có thể sử dụng:

- **`Tạo lời nhắc`** để tạo một bản nháp mới từ một mô tả đơn giản
- **`Cải thiện lời nhắc`** để tinh chỉnh một lời nhắc hiện có
- **`Dịch lời nhắc`** để dịch các trường lời nhắc

<br/>

> ⚠️ **CẢNH BÁO**<br/>
> Nhấp vào **`Lưu`** trước khi bạn nhấp vào **`Trở về Chạy`**. Nếu bạn quay lại mà không lưu, các thay đổi của bạn sẽ bị mất.

<br/>

<a id="test-a-prompt-before-using-it"></a>
### Kiểm tra một lời nhắc trước khi sử dụng

Bảng kiểm tra ở bên phải cho phép bạn thử lời nhắc của mình với văn bản mẫu trước khi sử dụng nó trong công việc hàng ngày.

Điều này hữu ích khi:

- bạn đang xây dựng một lời nhắc mới
- bạn đang so sánh hai phiên bản của một lời nhắc
- bạn muốn kiểm tra giọng điệu, độ dài hoặc định dạng đầu ra

<br/>

> ℹ️ **LƯU Ý**<br/>
> Bạn có thể xuất và nhập các lời nhắc đã lưu trong [**Cài đặt** > **Lời nhắc Transform**](#transform-prompts).

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="dashboard"></a>
## Bảng điều khiển

Sử dụng **Bảng điều khiển** để xem bạn đang sử dụng ứng dụng như thế nào và nó tốn bao nhiêu chi phí (cho các mô hình trả phí).

![Tóm tắt Bảng điều khiển](../images/screenshots/vi/dashboard-summary.png)


<br/>

> ℹ️ **LƯU Ý**<br/>
> Nếu bạn chỉ sử dụng các mô hình miễn phí, các biểu đồ liên quan đến chi phí sẽ để trống.

<br/>

<a id="filter-the-data"></a>
### Lọc dữ liệu

Sử dụng các nút lọc ở trên cùng để thay đổi khoảng thời gian.

![Bộ lọc Bảng điều khiển](../images/screenshots/vi/dashboard-filter.png)

<br/>

> ℹ️ **LƯU Ý**<br/>
> Bộ lọc **Người dùng** chỉ hiển thị cho các quản trị viên trong phiên bản web. Người dùng thông thường sẽ không thấy bộ lọc này, và nó không có sẵn trong ứng dụng máy tính để bàn.

<br/>

<a id="dashboard-tabs"></a>

### Các tab bảng điều khiển

- **Tóm tắt** cung cấp cái nhìn tổng quan về mức sử dụng và chi phí.
- **T theo mức sử dụng** phân chia hoạt động theo ngôn ngữ dịch, chế độ viết lại và lời nhắc biến đổi.
- **T theo mô hình** cho thấy bạn đã sử dụng các mô hình nào và chi phí cho chúng.
- **T theo ngày** hiển thị tổng số hàng ngày.
- **Tất cả các cuộc gọi** hiển thị lịch sử cuộc gọi đầy đủ và cho phép xuất chúng.

<br/>

<a id="export-data"></a>
### Xuất dữ liệu

Các bảng bảng điều khiển có thể xuất dữ liệu dưới dạng:

- **JSON**
- **CSV**
- **XLSX**

Điều này hữu ích nếu bạn muốn xem xét hoạt động bên ngoài ứng dụng hoặc chia sẻ báo cáo.

<br/>

<a id="delete-stored-records-for-a-model"></a>
### Xóa bản ghi đã lưu cho một mô hình

Trong **T theo mô hình** hoặc **Tất cả các cuộc gọi**, bạn có thể xóa các bản ghi đã lưu cho một mô hình bằng cách nhấp vào biểu tượng "thùng rác".

> ⚠️ **CẢNH BÁO**<br/>
> Việc xóa các bản ghi đã lưu không thể khôi phục. Chỉ sử dụng nếu bạn chắc chắn rằng bạn không còn cần lịch sử đó nữa.

Để xóa tất cả dữ liệu hoặc xóa các bản ghi dựa trên tuổi của chúng, hãy truy cập [**Cài đặt** > **Theo dõi chi phí**](#cost-tracking). Tại đó bạn sẽ tìm thấy các tùy chọn để xóa tất cả dữ liệu đã lưu hoặc chỉ dữ liệu cũ hơn một ngày nhất định.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="history"></a>
## Lịch sử

Nhấp vào **Lịch sử** để xem lịch sử các hành động của bạn bên trong **Transrewrt**, bao gồm đầu vào và đầu ra của mỗi thao tác.

![Trang lịch sử](../images/screenshots/vi/history.png)

<br/>

<a id="filter-the-history"></a>
### Lọc dữ liệu

**Lịch sử** sử dụng cùng các bộ lọc với trang **Bảng điều khiển**. Sử dụng chúng để chọn khoảng thời gian.

![Bộ lọc bảng điều khiển](../images/screenshots/vi/dashboard-filter.png)

<br/>

> ℹ️ **GHI CHÚ**<br/>
> Bộ lọc **Người dùng** chỉ hiển thị cho quản trị viên trong phiên bản web. Người dùng thông thường sẽ không thấy bộ lọc này, và nó không có sẵn trong ứng dụng máy tính để bàn.

<br/>

<a id="export-history-data"></a>
###  Xuất dữ liệu lịch sử

Trang lịch sử có thể xuất dữ liệu đã lọc dưới dạng:

- **JSON**
- **CSV**
- **XLSX**

Điều này hữu ích nếu bạn muốn xem xét hoạt động bên ngoài ứng dụng hoặc chia sẻ báo cáo.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="settings"></a>
## Cài đặt

Mở **Cài đặt** từ thanh bên để tùy chỉnh cách ứng dụng hoạt động.

Các tab có sẵn phụ thuộc vào nền tảng và vai trò của bạn:

  | Tab               | Máy tính để bàn | Web (quản trị) | Web (người dùng thông thường) |
  |-------------------|:-------:|:-----------:|:------------------:|
  | Cài đặt chung     |   có   |     có     |        có         |
  | Mô hình           |   có   |     có     |        có         |
  | Ngôn ngữ          |   có   |     có     |        có         |
  | Theo dõi chi phí  |   có   |     có     |         —          |
  | Lời nhắc biến đổi |   có   |     có     |        có         |
  | Người dùng        |    —    |     có     |         —          |
  | Cấu hình API      |   có   |     có     |         —          |
  | Về                |   có   |     có     |        có         |

<br/>

> ℹ️ **GHI CHÚ**<br/>
> Trong phiên bản web, mỗi người dùng có cấu hình riêng của mình. Các cài đặt như mô hình được chọn, ngôn ngữ, tùy chọn chung và lời nhắc biến đổi được lưu cho từng người dùng. Những thay đổi bạn thực hiện không ảnh hưởng đến người dùng khác.

<br/>


[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="general-settings"></a>
### Cài đặt chung

Sử dụng **Cài đặt chung** để kiểm soát hành vi gõ, việc lưu trữ chi tiết thực thi cho **Lịch sử** và giao diện.

**Hành vi**

- **Hành vi cho phím ENTER** chọn liệu `Enter` sẽ thực hiện tác vụ hay chèn dòng mới.
- **Dịch tự động khi dán** bắt đầu dịch ngay khi bạn dán văn bản.
- **Sao chép kết quả tự động vào bộ nhớ tạm** sao chép kết quả thành công một cách tự động.
- **Dịch thời gian thực (khi gõ)** dịch trong khi bạn gõ.
- **Thời gian chờ (ms)** đặt thời gian chờ cho dịch thời gian thực.

**Lịch sử**

- **Giữ lịch sử thực thi** kiểm soát việc mỗi lần dịch, viết lại và biến đổi có lưu trữ **văn bản đầu vào và đầu ra** cho chế độ xem [**Lịch sử**](#history) ở thanh bên. Tắt nó sẽ yêu cầu xác nhận; nếu bạn xác nhận, văn bản lịch sử đã lưu sẽ bị xóa khỏi cơ sở dữ liệu.
- **Xóa dữ liệu lịch sử** cho phép bạn xóa văn bản đã lưu dựa trên tuổi (ví dụ cũ hơn vài tháng, hoặc **tất cả dữ liệu (xóa)**) bằng cách sử dụng **Xóa dữ liệu**. Điều đó chỉ ảnh hưởng đến văn bản thực thi đã lưu cho chế độ xem **Lịch sử**; nó **không** xóa tổng chi phí hoặc tổng mức sử dụng. Để xóa hoặc cắt bớt dữ liệu **chi phí**, hãy sử dụng [**Cài đặt** > **Theo dõi chi phí**](#cost-tracking).

**Giao diện**

- **Hiển thị thông tin chi phí trên các hành động** kiểm soát việc hiển thị chi phí trên mỗi thao tác (nếu có sẵn) và tổng chi phí trên các bảng đầu ra Dịch, Viết lại và Biến đổi.
- **Chữ số phần thập phân chi phí** thay đổi cách hiển thị số thập phân chi phí.
- **Chỉ web:** **hiển thị lề xung quanh ứng dụng** thêm không gian xung quanh giao diện.
- **Họ font** thay đổi font chữ trong các bảng văn bản.
- **Kích thước** thay đổi kích thước font.

<br/>

<a id="models"></a>

### Mô hình

Sử dụng **Cài đặt** > **Mô hình** để chọn các mô hình xuất hiện trên thanh công cụ.

![Thẻ Mô hình trong Cài đặt](../images/screenshots/vi/settings-models.png)

Trang có hai danh sách:

- **Mô hình khả dụng** ở bên trái
- **Mô hình đã chọn** ở bên phải

Các điều khiển hữu ích bao gồm:

- **Tìm kiếm mô hình...** để tìm một mô hình theo tên
- **Chip nhà cung cấp** để thu hẹp danh sách về một công cụ (OpenRouter, OpenAI, Ollama, …)
- **Chỉ miễn phí** để chỉ hiển thị các mô hình miễn phí
- **Làm mới** để tải lại danh sách
- **Mở rộng tất cả** và **Thu gọn tất cả** khi bạn đang sắp xếp theo nhà cung cấp

ID mô hình bao gồm tiền tố nhà cung cấp (ví dụ `openrouter/…` so với `openai/…`). Các huy hiệu như **OpenAI (OpenRouter)** so với **OpenAI (trực tiếp)** cho thấy lưu lượng được định tuyến như thế nào.

> ℹ️ **GHI CHÚ**<br/>
> **OpenRouter Body Builder** (`openrouter/bodybuilder`) là một mô hình định tuyến, không phải mô hình trò chuyện chung: phản hồi của nó là JSON mô tả các thân yêu cầu API OpenRouter (ví dụ một mảng `requests` với `model` và `messages`). Nếu bạn sử dụng nó cho **Dịch**, **Viết lại**, hoặc **Biến đổi**, bảng đầu ra sẽ hiển thị JSON đó thay vì văn bản hoàn tất. Hãy chọn một mô hình văn bản bình thường cho các tác vụ đó. Xem trang [mô hình Body Builder](https://openrouter.ai/openrouter/bodybuilder) trên OpenRouter.

Các hành động:

 - Để thêm một mô hình, hãy nhấp vào **Thêm** hoặc bất kỳ đâu trong mục nhập.

 - Để xóa một mô hình, hãy nhấp vào **X** bên cạnh nó trong **Mô hình đã chọn** hoặc **Đã chọn** trên mục nhập trong Mô hình khả dụng.

 - Để xóa toàn bộ danh sách, hãy nhấp vào **Bỏ chọn tất cả**. Mô hình miễn phí bắt buộc sẽ vẫn còn trong danh sách.

<br/>

> ℹ️ **GHI CHÚ**<br/>
> Nếu bạn không muốn nạp tiền ngay lập tức vào OpenRouter, hãy bắt đầu bằng việc bật **Chỉ miễn phí** và chọn các mô hình miễn phí (không cần thẻ tín dụng). Bạn cũng có thể sử dụng Ollama để chạy các mô hình cục bộ mà không cần khóa API.

<br/>

<a id="languages"></a>
### Ngôn ngữ

Sử dụng **Cài đặt** > **Ngôn ngữ** để tổ chức các danh sách ngôn ngữ được sử dụng trong ứng dụng.

- **Ngôn ngữ hàng đầu** được ghim gần đầu các danh sách ngôn ngữ trong **Dịch** và **Biến đổi**.
- **Ngôn ngữ tùy chỉnh** cho phép bạn thêm một ngôn ngữ không có trong danh sách tích hợp sẵn.

Nếu bạn thêm một ngôn ngữ tùy chỉnh, nó sẽ xuất hiện trong các bộ chọn ngôn ngữ cùng với các tùy chọn tích hợp sẵn.

<br/>

<a id="cost-tracking"></a>
### Theo dõi chi phí

Sử dụng **Cài đặt** > **Theo dõi chi phí** để quản lý thông tin chi phí.

- **Tổng chi phí** hiển thị tổng tích lũy.
- **Sao chép giá trị** sao chép tổng vào clipboard.
- **Đặt lại chi phí** đặt tổng đã lưu về 0.
- **Đồng bộ với mức sử dụng khóa API** đặt tổng khớp với mức sử dụng được báo cáo bởi tài khoản OpenRouter của bạn (chỉ OpenRouter).
- **Mức sử dụng khóa API** hiển thị chi tiết mức sử dụng OpenRouter, nếu có.
- **Xóa dữ liệu chi phí** xóa tất cả dữ liệu, hoặc chỉ các mục cũ hơn một ngày được chọn.

 **Theo dõi chi phí:** Khi bạn sử dụng các mô hình OpenRouter, ứng dụng hiển thị mức sử dụng và chi tiêu thực tế của bạn dựa trên thông tin chi phí từ OpenRouter. Đối với tất cả các nhà cung cấp khác, ứng dụng ước tính chi phí bằng cách sử dụng giá được công bố bởi OpenRouter, nếu giá không khả dụng, ước tính có thể là 0.

<br/>

> ℹ️ **GHI CHÚ**<br/>
>  **Tất cả các con số chi phí là ước tính để bạn tham khảo, không phải là bảng kê khai chính thức.**


<br/>

> ⚠️ **CẢNH BÁO**<br/>
> Xóa dữ liệu không thể hoàn tác. Trước khi xóa, hãy đảm bảo sao lưu dữ liệu hoặc xuất nó thông qua [**Lịch sử**](#history) 
> hoặc [**Bảng điều khiển** > **Tất cả các cuộc gọi**](#dashboard-tabs), nếu không nó sẽ bị mất vĩnh viễn. 
> Tất cả lịch sử đầu vào/đầu ra liên quan đến mỗi mục cuộc gọi API cũng sẽ bị xóa.


<br/>

<a id="transform-prompts"></a>
### Lời nhắc biến đổi

Sử dụng **Cài đặt** > **Lời nhắc biến đổi** để quản lý các lời nhắc hàng loạt.

Bạn có thể:

- xem lại các lời nhắc đã lưu
- xóa các lời nhắc
- nhập các lời nhắc từ một tệp
- xuất các lời nhắc để sao lưu hoặc chia sẻ

<br/>

<a id="users"></a>
### Người dùng

Sử dụng **Người dùng** để quản lý tài khoản người dùng trong phiên bản web. Bạn có thể thêm người dùng, cập nhật thông tin của họ, đặt lại mật khẩu và xóa tài khoản.

<br/>

<a id="api-config"></a>
### Cấu hình API

Các nhà cung cấp được hỗ trợ là: OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras, và **Ollama** (các mô hình cục bộ thông qua URL cơ sở). Bạn chỉ cần cấu hình các nhà cung cấp bạn sử dụng.

**Ứng dụng web: chỉ quản trị viên**

Khóa API được cấu hình thông qua các biến môi trường hệ thống hoặc Docker — chúng không được nhập vào giao diện web. Trang này hiển thị những nhà cung cấp nào đã có khóa được cấu hình và cho phép bạn kiểm tra từng cái bằng cách nhấp vào nút **`Kiểm tra`**.

<br/>

> ℹ️ **GHI CHÚ**<br/>
> Để thay đổi khóa API, hãy cập nhật biến môi trường trong cấu hình hệ thống hoặc Docker của bạn và khởi động lại máy chủ hoặc container.

<br/>

**Ứng dụng máy tính để bàn**

Sử dụng **Cấu hình API** để lưu trữ khóa API cho từng nhà cung cấp bạn sử dụng. Đối với Ollama, hãy nhập **URL cơ sở** thay vì khóa API.


<br/>

> 💡 **Mẹo** <br/>
> Nếu bạn không muốn sử dụng khóa API hoặc trả phí cho việc sử dụng, bạn có thể [tải xuống Ollama](https://ollama.com) và chạy các mô hình (chẳng hạn `translategemma:4b`) cục bộ trên máy của bạn miễn phí. Ngoài ra, bạn có thể tạo tài khoản OpenRouter miễn phí (không cần thẻ tín dụng) để sử dụng các mô hình miễn phí của họ, hoặc có được khóa API miễn phí từ Cerebras, Google, Groq, hoặc Mistral AI.

<br/>

- Chỉ thêm các nhà cung cấp bạn cần. Trong **Cài đặt** > **Mô hình**, mỗi ID mô hình bắt đầu bằng nhà cung cấp (ví dụ `openrouter/openrouter/free`, `openai/gpt-4o`, `ollama/llama3`).

Để thêm một khóa API, hãy nhập giá trị vào trường văn bản và nhấp vào **`Lưu`**. Để thay thế khóa hiện có, hãy nhấp vào **`Sửa`**. Để xác minh rằng một khóa đang hoạt động, hãy nhấp vào **`Kiểm tra`**. Đối với URL cơ sở Ollama, luôn nhấp vào **`Kiểm tra`** để kiểm tra kết nối.

<br/>

> ℹ️ **GHI CHÚ**<br/>
> Bạn không thể xem giá trị hiện tại của một khóa API. Bạn chỉ có thể thay thế nó bằng cách sử dụng nút **`Sửa`**.
> Các khóa API được lưu trữ được mã hóa trong cấu hình.

<br/>

<a id="about"></a>

### Giới thiệu

Thẻ **Giới thiệu** hiển thị:

- tên ứng dụng
- số phiên bản
- ngày build
- liên kết đến kho lưu trữ dự án

<br/><br/>

<a id="common-issues"></a>
## Các vấn đề thường gặp

Nếu một số thứ không hoạt động như mong đợi, hãy kiểm tra các điểm sau trước tiên.

<br/>

<a id="the-app-will-not-translate-rewrite-or-transform-text"></a>
### Ứng dụng không dịch, viết lại hoặc chuyển đổi văn bản

Kiểm tra xem:

- bạn đã chọn một mô hình trong thanh công cụ
- ít nhất một mô hình được liệt kê trong [**Cài đặt** > **Mô hình**](#models)
- cấu hình API của bạn đang hoạt động

Nếu bạn đang sử dụng ứng dụng desktop:

1. Mở [**Cài đặt** > **Cấu hình API**](#api-config).
2. Kiểm tra xem ít nhất một khóa API đã được lưu.
3. Nhấp vào **Kiểm tra** bên cạnh nhà cung cấp để xác nhận khóa hoạt động.

<br/>

<a id="the-model-list-is-empty"></a>
### Danh sách mô hình trống

Mở [**Cài đặt** > **Mô hình**](#models) và nhấp **Làm mới**.

Nếu cần:

- tìm kiếm một mô hình
- bật **Chỉ miễn phí**
- thêm một hoặc nhiều mô hình vào **Mô hình đã chọn**

<br/>

<a id="the-result-is-too-slow-or-too-expensive"></a>
### Kết quả quá chậm hoặc quá đắt

Hãy thử một hoặc nhiều cách sau:

- chọn một mô hình khác
- sử dụng đầu vào ngắn hơn
- tắt **Dịch thời gian thực (trong khi gõ)** trong [**Cài đặt** > **Cài đặt chung**](#general-settings)
- sử dụng mô hình miễn phí cho các tác vụ đơn giản (xem [Mô hình](#models))

<br/>

<a id="the-interface-is-in-the-wrong-language"></a>
### Giao diện đang ở ngôn ngữ sai

Nhấp vào biểu tượng quả cầu ở [thanh công cụ](#toolbar) và chọn **Ngôn ngữ giao diện** mong muốn.

<br/>

<a id="the-text-is-too-small-or-hard-to-read"></a>
### Văn bản quá nhỏ hoặc khó đọc

Mở [**Cài đặt** > **Cài đặt chung**](#general-settings) và thay đổi:

- **Phông chữ**
- **Cỡ chữ**

<br/>

<a id="dashboard-charts-are-empty"></a>
### Biểu đồ Bảng điều khiển trống

Điều này bình thường nếu:

- bạn chỉ sử dụng **mô hình miễn phí** (biểu đồ chi phí sẽ để trống)
- **bộ lọc thời gian** đã chọn không bao gồm khoảng thời gian các cuộc gọi được thực hiện — hãy thử **Tất cả** để kiểm tra

Nếu biểu đồ vẫn trống sau khi chọn **Tất cả**, hãy xác nhận rằng các cuộc gọi xuất hiện trong [**Lịch sử**](#history) hoặc trong thẻ **Tất cả các cuộc gọi**.

<br/>

<a id="cost-shows-not-available-or-seems-wrong"></a>
### Chi phí hiển thị "không có sẵn" hoặc có vẻ sai

Khi bạn sử dụng các mô hình thông qua **OpenRouter**, ứng dụng hiển thị số tiền thực tế bạn chi được báo cáo bởi OpenRouter.

Đối với **các nhà cung cấp khác** (OpenAI trực tiếp, Anthropic trực tiếp, v.v.), chi phí được ước tính từ dữ liệu giá được xuất bản bởi OpenRouter. Nếu không tìm thấy giá khớp cho một mô hình, chi phí sẽ hiển thị là **không có sẵn** và sẽ không được cộng dồn vào tổng đang chạy.

<br/>

<a id="total-cost-does-not-match-my-provider-bill"></a>
### Tổng chi phí không khớp với hóa đơn của nhà cung cấp

Tất cả số liệu chi phí trong ứng dụng là **ước tính để tham khảo**, không phải là hóa đơn chính thức.

Để đưa tổng chi phí gần hơn với số tiền thực tế trên OpenRouter, hãy mở [**Cài đặt** > **Theo dõi chi phí**](#cost-tracking) và nhấp **Đồng bộ với việc sử dụng API key**.

<br/>

<a id="the-history-page-is-missing-from-the-sidebar"></a>
### Trang Lịch sử bị mất khỏi thanh bên

**Giữ lại lịch sử thực thi** có thể đã bị tắt. Mở [**Cài đặt** > **Cài đặt chung**](#general-settings) và bật nó. Lưu ý rằng bật nó không khôi phục dữ liệu lịch sử đã bị xóa trước đó.

<br/>

<a id="web-app-session-expired"></a>
### Ứng dụng web: bị chuyển hướng đến trang đăng nhập một cách bất ngờ

Phiên của bạn có thể đã hết hạn. Đăng nhập lại. Nếu nó xảy ra thường xuyên, hãy kiểm tra cấu hình máy chủ cho cài đặt thời gian sống phiên.

<br/>

<a id="dashboard-shows-no-data-for-other-users"></a>
### Bảng điều khiển không hiển thị dữ liệu cho người dùng khác (web)

Chỉ **quản trị viên** có thể xem dữ liệu từ tất cả người dùng thông qua bộ lọc **Người dùng**. Người dùng thông thường chỉ thấy hoạt động của chính họ theo thiết kế.

<br/>

<a id="i-changed-a-prompt-and-lost-the-edits"></a>
### Tôi đã thay đổi một lời nhắc và mất các chỉnh sửa

Khi chỉnh sửa một lời nhắc, luôn nhấp **Lưu** trước khi nhấp **Quay lại để Chạy**.

<br/><br/>

<a id="quick-tips"></a>
## Mẹo nhanh

- Bắt đầu với [**Dịch**](#translate) để đảm bảo cấu hình của bạn hoạt động trước khi chuyển sang [**Viết lại**](#rewrite) hoặc [**Chuyển đổi**](#transform).
- Sử dụng [**Viết lại**](#rewrite) cho việc cải thiện cách diễn đạt hàng ngày.
- Sử dụng [**Chuyển đổi**](#transform) khi bạn cần một quy trình có thể lặp lại cho một tác vụ cụ thể.
- Sử dụng [**Bảng điều khiển**](#dashboard) nếu bạn muốn theo dõi mức độ sử dụng và chi phí.
- Sử dụng [**Lịch sử**](#history) để xem lại các hoạt động trước đó và văn bản đầu vào/đầu ra đầy đủ.
- Xuất các lời nhắc thường xuyên nếu bạn đang xây dựng một thư viện lời nhắc muốn giữ an toàn (xem [Lời nhắc Chuyển đổi](#transform-prompts)) hoặc nếu bạn muốn chia sẻ nó với người khác.

<br/><br/>

<a id="disclaimer"></a>

## Tuyên bố miễn trừ trách nhiệm

Các tên sản phẩm và biểu tượng thuộc về các chủ sở hữu tương ứng và chỉ được sử dụng cho mục đích nhận dạng. Phần mềm này không liên kết hoặc được hỗ trợ bởi bất kỳ thương hiệu nào đã đề cập.

<br/><br/>

<a id="license"></a>
## Giấy phép

Bản quyền © 2026 Waldemar Scudeller Jr.

[Giấy phép Apache 2.0](LICENSE)