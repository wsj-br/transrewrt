---
translation_last_updated: '2026-03-31T22:58:19.404Z'
source_file_mtime: '2026-03-31T22:20:13.182Z'
source_file_hash: bf6416a9ca259a19
translation_language: th
source_file_path: README.md
---
<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**สารบัญ**

- [ภาพหน้าจอ](#screenshots)
- [สารบัญ](#table-of-contents)
- [เริ่มต้นอย่างรวดเร็ว](#quick-start)
- [การติดตั้ง](#installation)
  - [Windows (Electron)](#windows-electron)
  - [Linux (Electron)](#linux-electron)
  - [Docker](#docker)
  - [การตั้งค่าเขตเวลา](#configuring-the-timezone)
- [การรับคีย์ API ของ OpenRouter](#getting-an-openrouter-api-key)
- [การกำหนดค่าและสภาพแวดล้อม](#configuration-and-environment)
- [การพัฒนาและสถาปัตยกรรม](#development-and-architecture)
- [การรายงานปัญหา](#reporting-issues)
- [ข้อจำกัดความรับผิดชอบ](#disclaimer)
- [ใบอนุญาต](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

เครื่องมือข้อความที่ขับเคลื่อนด้วย AI: แปลระหว่างภาษา เขียนใหม่ในรูปแบบต่าง ๆ และแปลงด้วยคำสั่งที่กำหนดเอง — โดยใช้ผู้ให้บริการ AI หลายราย (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, และ Ollama ท้องถิ่น) ทำงานได้ทั้งในรูปแบบแอปเดสก์ท็อป (Electron) หรือแอปเว็บที่โฮสต์เอง (Docker)

- **แปล** — ระหว่างภาษาต่าง ๆ กว่าหลายสิบภาษา พร้อมการตรวจจับภาษาต้นทางโดยอัตโนมัติ
- **เขียนใหม่** — แก้ไขไวยากรณ์ ปรับให้ชัดเจนขึ้น รูปแบบทางการ/ไม่เป็นทางการ ทำให้สั้นลง ทำให้ยาวขึ้น เทคนิค
- **แปลง** — คำสั่ง AI ที่กำหนดเอง; สร้างและจัดการคำสั่ง สามารถเลือกภาษาเป้าหมายต่อคำสั่งได้
- **ประวัติ** — ประวัติการดำเนินการทั้งหมดที่มีข้อมูลนำเข้า/ข้อความนำออก การกรอง และการส่งออก
- **โมเดลและค่าใช้จ่าย** — เลือกโมเดลจากผู้ให้บริการที่ตั้งค่าไว้; แดชบอร์ดค่าใช้จ่ายและการใช้งาน พร้อมบันทึก สรุปตามโมเดล/การดำเนินการ/วัน
- **UI** — อินเตอร์เฟซหลายภาษา (มากกว่า 30 ภาษา รองรับ RTL), แบบอักษร, ...
- **โหมดเว็บ** — รองรับผู้ใช้หลายคน พร้อมบทบาทผู้ดูแลระบบ
- **เดสก์ท็อป** — แอปพลิเคชัน Electron สำหรับ Windows และ Linux
- **โฮสต์เอง** — รูปภาพ Docker สำหรับ amd64 และ arm64 (พร้อมใช้งานกับ Raspberry Pi)

หลังติดตั้งแล้ว โปรดดู **[คู่มือผู้ใช้](USER-GUIDE.th.md)** เพื่อเรียนรู้การใช้งานคุณลักษณะทั้งหมดอย่างละเอียด

**อ่านในภาษาอื่น:**
[อังกฤษ (สหราชอาณาจักร)](../README.md) · [โปรตุเกส (บราซิล)](README.pt-BR.md) · [อาหรับ](README.ar.md) · [เบงกาลี](README.bn.md) · [คาตาลัน](README.ca.md) · [จีนตัวย่อ](README.zh-CN.md) · [จีนตัวเต็ม](README.zh-TW.md) · [โครเอเชีย](README.hr.md) · [เช็ก](README.cs.md) · [ดัตช์](README.nl.md) · [อังกฤษ (สหรัฐ)](README.en-US.md) · [ฟิลิปปินส์](README.tl.md) · [ฝรั่งเศส](README.fr.md) · [เยอรมัน](README.de.md) · [กรีก](README.el.md) · [ฮินดี](README.hi.md) · [ฮังการี](README.hu.md) · [อิตาลี](README.it.md) · [ญี่ปุ่น](README.ja.md) · [ชวา](README.jv.md) · [เกาหลี](README.ko.md) · [มาเลย์](README.ms.md) · [เปอร์เซีย](README.fa.md) · [โปแลนด์](README.pl.md) · [โปรตุเกส (โปรตุเกส)](README.pt.md) · [ปัญจาบ](README.pa.md) · [โรมาเนีย](README.ro.md) · [รัสเซีย](README.ru.md) · [สโลวัก](README.sk.md) · [สเปน](README.es.md) · [สวาฮีลี](README.sw.md) · [สวีเดน](README.sv.md) · [เตลูกู](README.te.md) · [ภาษาไทย](README.th.md) · [ตุรกี](README.tr.md) · [ยูเครน](README.uk.md) · [เวียดนาม](README.vi.md)

> **หมายเหตุเกี่ยวกับการแปลอินเตอร์เฟซผู้ใช้และเอกสาร:** ภาษาอินเตอร์เฟซทั้งหมด ยกเว้นภาษาอังกฤษ (สหราชอาณาจักร) ต้นฉบับ
> ได้รับการแปลโดยใช้โมเดล AI; คำศัพท์อาจคลาดเคลื่อนหรือมีข้อผิดพลาด

## ภาพหน้าจอ

**ตัวเลือกภาษา**

ตัวเลือกภาษา

**แปล**

แปล

**แปลง - ตัวแก้ไขคำสั่ง**

แปลง - ตัวแก้ไขคำสั่ง

**แดชบอร์ด**

สรุปแดชบอร์ด — การใช้งาน

**ประวัติ**

ประวัติ

**ตั้งค่า - การเลือกโมเดล**

ตั้งค่า - การเลือกโมเดล

## สารบัญ

- [เริ่มต้นอย่างรวดเร็ว](#quick-start)
- [การติดตั้ง](#installation)
  - [Windows (Electron)](#windows-electron)
  - [Linux (Electron)](#linux-electron)
  - [Docker](#docker)
  - [การตั้งค่าเขตเวลา](#configuring-the-timezone)
- [การรับคีย์ API ของ OpenRouter](#getting-an-openrouter-api-key)
- [การตั้งค่าและสภาพแวดล้อม](#configuration-and-environment)
- [การพัฒนาและสถาปัตยกรรม](#development-and-architecture)
- [การรายงานปัญหา](#reporting-issues)
- [ข้อจำกัดความรับผิดชอบ](#disclaimer)
- [ลิขสิทธิ์](#license)

## เริ่มต้นอย่างรวดเร็ว

**Docker (แนะนำสำหรับการโฮสต์ด้วยตัวเอง)**

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest

OPENROUTER_API_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_API_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

แทนที่ `sk-or-your-key` ด้วย [กุญแจ API ของ OpenRouter](https://openrouter.ai/keys) ของคุณ (หรือตั้งกุญแจผู้ให้บริการอื่น ๆ; ดูที่ [การตั้งค่า](#configuration-and-environment)) เปิด [http://localhost:5000](http://localhost:5000) และเปลี่ยนรหัสผ่านผู้ดูแลระบบเริ่มต้นก่อนเปิดให้บริการภายนอก

> ℹ️ **หมายเหตุ**  
>
> ใน Docker ข้อมูลรับรอง LLM จะถูกตั้งค่าด้วยตัวแปรสภาพแวดล้อม เช่น `OPENROUTER_API_KEY`, `OPENAI_API_KEY`, `CEREBRAS_API_KEY`, … (ไม่ใช่ในเว็บ UI) สำหรับเดสก์ท็อป (Electron) คุณตั้งค่าคีย์ใน **ตั้งค่า → API**

**Windows**

ดาวน์โหลด `Transrewrt Setup x.y.z.exe` ล่าสุดจาก [Releases](https://github.com/wsj-br/transrewrt/releases) รันตัวติดตั้ง แล้วเปิดผ่านเมนูเริ่มต้นหรือทางลัดบนเดสก์ท็อป ใส่กุญแจ API ของคุณใน **ตั้งค่า → API** คุณต้องตั้งค่าผู้ให้บริการอย่างน้อยหนึ่งราย โดย OpenRouter เป็นที่นิยมสำหรับโมเดลฟรี

**Linux**

ดาวน์โหลดไฟล์ `.AppImage` สำหรับ CPU ของคุณจาก [Releases](https://github.com/wsj-br/transrewrt/releases) (`x64` สำหรับพีซีทั่วไป, `arm64` สำหรับอุปกรณ์ ARM ส่วนใหญ่ เช่น Raspberry Pi 4+) จากนั้น:

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

ใส่กุญแจ API ของคุณใน **ตั้งค่า → API** คุณต้องตั้งค่าผู้ให้บริการอย่างน้อยหนึ่งราย โดย OpenRouter เป็นที่นิยมสำหรับโมเดลฟรี

**ข้อความคอนโซล:** การสร้างสำหรับ Linux แบบแพ็คเกจ (`x64` และ `arm64` AppImages) จะปิดการแจ้งเตือนการเลิกใช้ของ Node ในเทอร์มินัล (เช่น โมดูลในตัว `punycode`) หาก Chromium พิมพ์ข้อผิดพลาด GPU / EGL เช่น “GLES3 ไม่รองรับ” แต่แอปทำงานได้ คุณสามารถปิดเสียงเหล่านี้ได้โดยปิดการใช้งานการเร่งฮาร์ดแวร์:

```bash
TRANSREWRT_DISABLE_GPU=1 ./Transrewrt-x.y.z-arm64.AppImage
```

นี่ใช้กับ amd64 เช่นกัน; เปลี่ยนชื่อไฟล์ให้ตรงกับไฟล์ที่คุณดาวน์โหลด ดู [การติดตั้ง → Linux (Electron)](#linux-electron) เพื่อดูรายละเอียดเพิ่มเติม

ใน Debian/Ubuntu คุณอาจต้องการไลบรารีรันไทม์เพิ่มเติมที่ Chromium ต้องการ (มักจะมีอยู่แล้วในเดสก์ท็อปเต็มรูปแบบ) ใช้ **`libnotify4`** สำหรับการแจ้งเตือนเดสก์ท็อป — **ไม่ใช่** `libnotify-dev` (ตัวนี้ใช้สำหรับการสร้างซอฟต์แวร์ ไม่ใช่สำหรับรัน AppImage ที่แพ็คเกจไว้):

```bash
sudo apt install libgtk-3-0 libnotify4 libnss3 libxss1 libasound2 libxtst6 xauth
```

ภาพขั้นต่ำหรือแบบกำหนดเองอาจยังล้มเหลวเนื่องจากไฟล์ `.so` หายไป ให้ติดตั้งแพ็คเกจที่ชื่อในข้อผิดพลาดระบุ (ส่วนเสริมที่พบบ่อย: `libatk1.0-0`, `libatk-bridge2.0-0`, `libgbm1`, `libdrm2`) สิ่งแวดล้อมบางอย่างต้องการ FUSE เพื่อรัน AppImages (เช่น `libfuse2` บน Ubuntu 22.04+) หรือใช้ `APPIMAGE_EXTRACT_AND_RUN=1 ./Transrewrt-….AppImage`

ดู [การติดตั้ง → Linux](#linux-electron) เพื่อดูคำอธิบายสรุปเดียวกัน

> ℹ️ **หมายเหตุ**  
>
> ขณะนี้ไม่รองรับ macOS Transrewrt มีให้ใช้งานสำหรับ Windows, Linux และ Docker

เมื่อแอปทำงานแล้ว ดูที่ **[คู่มือผู้ใช้](USER-GUIDE.th.md)** เพื่อเรียนรู้วิธีแปล แก้ไขใหม่ และแปลงข้อความ จัดการพรอมต์ และตั้งค่าโมเดล

## การติดตั้ง

### Windows (Electron)

- ดาวน์โหลดตัวติดตั้งล่าสุดจาก [Releases](https://github.com/wsj-br/transrewrt/releases)
- รันไฟล์ `.exe` และทำตามขั้นตอนการติดตั้ง
- การรันครั้งแรก: เริ่มต้นแอปจากเมนูเริ่มต้นหรือทางลัดบนเดสก์ท็อป

> ℹ️ **หมายเหตุ**  
>
> Windows อาจแสดงคำเตือนด้านความปลอดภัยหนึ่งในข้อต่อไปนี้ (ซึ่งเป็นเรื่องปกติสำหรับแอปที่ไม่มีการลงนามหรือแอปจากนักพัฒนาอิสระ):
>
> - **การควบคุมบัญชีผู้ใช้ (User Account Control - UAC)**: "คุณต้องการให้แอปจากผู้เผยแพร่ที่ไม่รู้จักนี้ทำการเปลี่ยนแปลงอุปกรณ์ของคุณหรือไม่?" → คลิก **ใช่**
> - **Microsoft Defender SmartScreen**: "Windows ป้องกันพีซีของคุณ" → คลิก **ข้อมูลเพิ่มเติม** → **เรียกใช้ทั้งๆ ที่มีความเสี่ยง**
>
> เหตุการณ์นี้เกิดขึ้นเนื่องจากแอปไม่ได้รับการลงนามโดย Microsoft หรือผู้เผยแพร่รายใหญ่ — แอปจะปลอดภัยหากคุณดาวน์โหลดจากเพจ Releases อย่างเป็นทางการของเราบน GitHub
>  (โปรดตรวจสอบค่า checksum SHA256 ด้านล่าง)

### Linux (Electron)

- ดาวน์โหลดไฟล์ `.AppImage` ที่ตรงกับระบบของคุณ (`x64` หรือ `arm64`) จาก [Releases](https://github.com/wsj-br/transrewrt/releases)
- รันคำสั่ง: `chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage` บน x86_64/amd64 หรือใช้ชื่อไฟล์ `...-arm64.AppImage` บนระบบ ARM64
- **ไลบรารีรันไทม์สำหรับ Debian/Ubuntu** (Electron/Chromium; เช่นเดียวกับ [เริ่มต้นใช้งานอย่างรวดเร็ว → Linux](#quick-start)): `sudo apt install libgtk-3-0 libnotify4 libnss3 libxss1 libasound2 libxtst6 xauth` — ใช้ **`libnotify4`** แทน `libnotify-dev` บนระบบขั้นต่ำ ให้ติดตั้งไฟล์ `.so` ที่ขาดหายไปซึ่งแสดงในเทอร์มินัล; ส่วนเสริมอย่าง `libatk1.0-0`, `libatk-bridge2.0-0`, `libgbm1`, `libdrm2` มักจำเป็น สำหรับ AppImage อาจต้องการ `libfuse2` (Ubuntu 22.04+) หรือใช้ `APPIMAGE_EXTRACT_AND_RUN=1 ./….AppImage`
- **ข้อความเกี่ยวกับ GPU:** Chromium อาจบันทึกข้อผิดพลาดการเริ่มต้นใช้งาน GPU หรือ EGL บนบางระบบ (โดยเฉพาะ ARM); แอปยังสามารถทำงานได้ตามปกติ เพื่อหลีกเลี่ยงข้อความเหล่านี้ ให้เปิดใช้งานโดยปิดการเร่งฮาร์ดแวร์: `TRANSREWRT_DISABLE_GPU=1 ./Transrewrt-x.y.z-x64.AppImage` (หรือชื่อไฟล์ `arm64` ของคุณ)

### Docker

- ดึง (Pull): `docker pull ghcr.io/wsj-br/transrewrt:latest`
- ตั้งค่าอย่างน้อยหนึ่ง provider key ผ่าน environment (เช่น `OPENROUTER_API_KEY` สำหรับ OpenRouter) ผ่านตัวแปรด้วย `-e` หรือ `docker compose` / `.env` เพื่อไม่ให้ข้อมูลลับถูกบันทึกไว้ใน image
- ข้อมูล key ของผู้ให้บริการ **จะไม่ถูกป้อน** ในเว็บ UI; เซิร์ฟเวอร์จะอ่านจาก environment โดยตรง

ตัวอย่าง - ใช้ named volume เพื่อเก็บข้อมูลถาวร (ใช้ OpenRouter key ผ่าน env):

```bash
OPENROUTER_API_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_API_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

หรือหากคุณต้องการใช้ Docker Compose ให้ใช้:

```
# download the compose file
wget https://github.com/wsj-br/transrewrt/raw/refs/heads/master/production.yml -O transrewrt.yml
# edit the file to add the API_KEYS and adjust the timezone (TZ)
vi transrewrt.yml
# start the container
docker compose -f transrewrt.yml up -d
```

ดูที่ [Configuration](#configuration-and-environment) เพื่อดูตัวแปร environment ทั้งหมด เช่น `PORT`, `CONFIG_PATH`, `TZ`, และ LLM keys (`OPENROUTER_API_KEY`, `OPENAI_API_KEY`, …)

### การตั้งค่าเขตเวลา

การแสดงวันที่และเวลาในส่วนติดต่อผู้ใช้จะอ้างอิงตาม locale และเขตเวลาของ **เว็บเบราว์เซอร์** ส่วนพฤติกรรมด้าน **เซิร์ฟเวอร์** (เช่น การบันทึก log) คอนเทนเนอร์จะใช้ตัวแปร environment `TZ` โดยค่าเริ่มต้นคือ `TZ=Europe/London`

หากต้องการใช้เขตเวลาอื่น ให้ตั้งค่า `TZ` ในไฟล์ Compose ตัวอย่างเช่น:

```yaml
environment:
  - TZ=America/Sao_Paulo
```

หรือส่งผ่านเมื่อรันคอนเทนเนอร์ (Docker):

```bash
--env TZ=America/Sao_Paulo
```

ในโฮสต์ Linux ส่วนใหญ่ คุณสามารถคัดลอกชื่อเขตเวลาของระบบได้ด้วยคำสั่ง:

```bash
echo TZ=\"$(</etc/timezone)\"
```

รายชื่อเขตเวลาที่ถูกต้องมีการอัปเดตอยู่ใน [tz database](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) (Wikipedia)

## การรับคีย์ API ของ OpenRouter

Transrewrt รองรับผู้ให้บริการ AI หลายราย [OpenRouter](https://openrouter.ai) เป็นตัวเลือกยอดนิยมเนื่องจากรวบรวมโมเดลหลายตัวไว้ภายใต้ key เดียว และมีโมเดลฟรีให้ใช้งาน

1. สมัครสมาชิกหรือเข้าสู่ระบบที่ [openrouter.ai](https://openrouter.ai)
2. เข้าสู่หน้า [Keys](https://openrouter.ai/keys) และสร้าง key ใหม่ (ตั้งชื่อ และตั้งวงเงินเครดิตได้ตามต้องการ) คุณสามารถใช้โมเดลฟรีได้โดยไม่ต้องเติมเครดิต
3. **เดสก์ท็อป (Electron):** วาง key ที่ **ตั้งค่า → API** **Docker:** ตั้งค่า env vars เช่น `OPENROUTER_API_KEY` (ดูที่ [Quick start](#quick-start))

อย่าใช้โมเดล **Body Builder** ของ OpenRouter (`[openrouter/bodybuilder](https://openrouter.ai/openrouter/bodybuilder)`) สำหรับการแปล หรือเขียนใหม่ หรือแปลง: เนื่องจากโมเดลนี้จะคืนค่าเพย์โหลด JSON ของคำขอ ไม่ใช่ข้อความที่เสร็จสมบูรณ์สำหรับงานเหล่านั้น ดูเพิ่มเติมที่ [ตั้งค่า → โมเดล](USER-GUIDE.th.md#models) ในคู่มือผู้ใช้

คุณยังสามารถใช้ผู้ให้บริการอื่น ๆ (OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras) หรือรันโมเดลในเครื่องด้วย [Ollama](https://ollama.com) ดูที่ [Configuration](#configuration-and-environment) เพื่อดูรายชื่อผู้ให้บริการที่รองรับทั้งหมดและตัวแปร environment

> ⚠️ **คำเตือน**  
>
> หากคุณใช้ Ollama จากอุปกรณ์ คอนเทนเนอร์ หรือบริการอื่น อย่าลืมตั้งค่า Ollama ให้อนุญาตการเชื่อมต่อจากภายนอก (ไม่ใช่เฉพาะ localhost เท่านั้น)

สำหรับขีดจำกัด การใช้ BYOK และข้อมูลเพิ่มเติม ดูที่ [การพิสูจน์ตัวตนของ OpenRouter](https://openrouter.ai/docs/api/reference/authentication)

## การตั้งค่าและการกำหนดสภาพแวดล้อม

**ตำแหน่งไฟล์การตั้งค่า**

| การติดตั้ง | ตำแหน่งการตั้งค่า |
| ------------------ | ------------------------------------------------- |
| Electron (Windows) | `%APPDATA%\transrewrt\` |
| Electron (Linux) | `~/.config/transrewrt/` |
| Web / Docker | `/app/data/config.json` (ใช้ volume เพื่อคงข้อมูลไว้)

**ตัวแปรสภาพแวดล้อม** (เฉพาะเว็บ/ดอคเกอร์; Electron ใช้ไฟล์การตั้งค่าท้องถิ่น)

| ตัวแปร             | ค่าเริ่มต้น                 | คำอธิบาย                                                                                                                 |
| -------------------- | ----------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| `PORT`               | `5000`                  | พอร์ตที่เซิร์ฟเวอร์ฟังคำร้องขอ                                                                                                       |
| `CONFIG_PATH`        | `/app/data/config.json` | เส้นทางไปยังไฟล์การตั้งค่า                                                                                                     |
| `TZ`                 | `Europe/London`         | เขตเวลา IANA สำหรับเวลาฝั่งเซิร์ฟเวอร์ (การบันทึกข้อมูล ฯลฯ); ส่วนติดต่อผู้ใช้ยังคงตามเบราว์เซอร์ ดูที่ [Docker → timezone](#docker-timezone) |
| `OPENROUTER_API_KEY` | *(ว่างเปล่า)*               | คีย์ API ของ OpenRouter                                                                                                          |
| `OPENAI_API_KEY`     | *(ว่างเปล่า)*               | คีย์ API ของ OpenAI                                                                                                              |
| `CEREBRAS_API_KEY`   | *(ว่างเปล่า)*               | คีย์ API ของ Cerebras                                                                                                            |
| `ANTHROPIC_API_KEY`  | *(ว่างเปล่า)*               | คีย์ API ของ Anthropic                                                                                                           |
| `GOOGLE_API_KEY`     | *(ว่างเปล่า)*               | คีย์ API ของ Google Gemini                                                                                                       |
| `DEEPSEEK_API_KEY`   | *(ว่างเปล่า)*               | คีย์ API ของ DeepSeek                                                                                                            |
| `GROQ_API_KEY`       | *(ว่างเปล่า)*               | คีย์ API ของ Groq                                                                                                                |
| `MISTRAL_API_KEY`    | *(ว่างเปล่า)*               | คีย์ API ของ Mistral                                                                                                             |
| `OLLAMA_URL`         | *(ว่างเปล่า)*               | URL พื้นฐานของ Ollama (เช่น `http://host.docker.internal:11434`)                                                                  |
| `XAI_API_KEY`        | *(ว่างเปล่า)*               | คีย์ API ของ xAI                                                                                                                 |

กรุณาตั้งค่าเฉพาะผู้ให้บริการที่คุณใช้งานเท่านั้น รหัสโมเดลจะถูกจัดกลุ่มตาม namespace (`openrouter/…`, `openai/…`, `cerebras/…`, `ollama/…`, ฯลฯ)

**การแสดงค่าใช้จ่าย:** OpenRouter จะคืนค่าค่าใช้จ่ายที่เรียกเก็บจริงเมื่อสามารถทำได้ ผู้ให้บริการอื่นจะใช้ค่าใช้จ่าย **โดยประมาณ** จากการตั้งราคาโมเดลสาธารณะของ OpenRouter เมื่อมีคีย์ OpenRouter; หากไม่มี ค่าใช้จ่ายจากผู้ให้บริการที่ไม่ใช่ OpenRouter อาจแสดงเป็น `0` ค่าประมาณไม่ใช่ใบแจ้งหนี้

**ข้อมูลและการเก็บรักษาข้อมูล:** สำหรับ Docker ให้ติดตั้ง volume ที่ `/app/data` เพื่อให้ `config.json` และฐานข้อมูล SQLite ยังคงอยู่หลังจากรีสตาร์ทคอนเทนเนอร์ หากไม่มี volume ข้อมูลทั้งหมดจะหายไปเมื่อคอนเทนเนอร์หยุดทำงาน

**นักพัฒนา:** หลังจากดึงการเปลี่ยนแปลงที่แทนที่การตั้งค่าแบบ single-key เดิม ให้รีเซ็ตหรือผสาน `data/config.json` เข้ากับรูปแบบเริ่มต้นใหม่จาก `src/config-defaults/config_default.json` หากไฟล์ท้องถิ่นของคุณยังใช้ฟิลด์ที่ถูกลบไปแล้ว (`api_key`, `api_url`, ตัวเลือกพร็อกซี)

**การพิสูจน์ตัวตนเว็บ:**

- ผู้ดูแลระบบเริ่มต้น: `admin` / `transrewrt26`
- จัดการผู้ใช้ใน **ตั้งค่า → ผู้ใช้**
- รีเซ็ตรหัสผ่าน: `docker exec <container> reset-web-password '<username>' '<new-password>'`
  (จากซอร์ส: `pnpm run reset-web-password -- <username> <new-password>`)

> ⚠️ **คำเตือน**  
>
> เปลี่ยนรหัสผ่านผู้ดูแลระบบเริ่มต้นทันทีในโฮสต์ที่สามารถเข้าถึงผ่านเครือข่ายได้

การตั้งค่าหลัก (แบบอักษร โมเดล ภาษา ฯลฯ) มีให้ในส่วนตั้งค่าของแอปพลิเคชัน

## การพัฒนาและสถาปัตยกรรม

- **การพัฒนา:** การตั้งค่า การสร้าง การทดสอบ และการติดตั้ง (Electron, Web, Docker) - ดูที่ **[dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)**
- **สถาปัตยกรรมและภาพรวมระบบ:** โครงสร้างโฟลเดอร์ เทคโนโลยีที่ใช้ การตัดสินใจด้านการออกแบบ - ดูที่ **[dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)**

## การรายงานปัญหา

เปิดปัญหาที่ [GitHub](https://github.com/wsj-br/transrewrt/issues) โปรดระบุแพลตฟอร์มของคุณ (Windows / Linux / Docker) และเวอร์ชันแอป (แสดงในกล่องโต้ตอบเกี่ยวกับ หรือในหน้า Releases)

## ข้อจำกัดความรับผิดชอบ

ชื่อผลิตภัณฑ์และไอคอนเป็นของเจ้าของที่เกี่ยวข้อง และใช้เพื่อวัตถุประสงค์ในการระบุเท่านั้น ซอฟต์แวร์นี้ไม่เกี่ยวข้องหรือได้รับการรับรองจากแบรนด์ที่ระบุใด ๆ

## ใบอนุญาต

ลิขสิทธิ์ © 2026 Waldemar Scudeller Jr.

[Apache License 2.0](../LICENSE)
