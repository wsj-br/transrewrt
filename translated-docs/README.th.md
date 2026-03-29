---
translated_at: "2026-03-28T23:08:15.010Z"
source_hash: "e9ea44c8ee71135cfaa88417e93be66dde6feae3d1970ce7c2ff555de1fc3376"
source_mtime: "2026-03-28T22:34:35.283Z"
model: "qwen/qwen3-235b-a22b-2507"
---
<p align="center">
  <img src="../images/transrewrt_banner.png" alt="สัญลักษณ์ Transrewrt"  />
</p>

<p align="center">
  <a href="https://github.com/wsj-br/transrewrt/releases"><img src="https://img.shields.io/badge/version-1.1.1-blue" alt="เวอร์ชัน"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-Apache%202.0-green" alt="สัญญาอนุญาต: Apache 2.0"></a>
  <img src="https://img.shields.io/badge/platform-Windows%20%7C%20Linux%20%7C%20Docker-lightgrey" alt="แพลตฟอร์ม">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react" alt="React 19">
  <img src="https://img.shields.io/badge/Electron-41-47848F?logo=electron" alt="Electron 41">
</p>

เครื่องมือข้อความขับเคลื่อนด้วยปัญญาประดิษฐ์: แปลภาษาต่างๆ ได้ ปรับเปลี่ยนข้อความในรูปแบบต่างๆ และเปลี่ยนรูปแบบข้อความตามคำสั่งเฉพาะ — โดยใช้ผู้ให้บริการ AI หลายราย (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI และ Ollama แบบท้องถิ่น) ใช้งานได้ทั้งในรูปแบบแอปเดสก์ท็อป (Electron) หรือแอปเว็บที่ติดตั้งใช้งานเอง (Docker)

- **แปล** — ระหว่างหลายสิบภาษา พร้อมตรวจจับภาษาต้นทางโดยอัตโนมัติ  
- **เขียนใหม่** — แก้ไขแกรมม่า เพิ่มความชัดเจน ปรับระดับทางการ/ไม่ทางการ ย่อหรือขยายข้อความ หรือทำให้เป็นเชิงเทคนิค  
- **แปลง** — พร้อมตั้งรายการคำสั่ง AI เองได้; สร้างและจัดการคำสั่งได้ พร้อมเลือกภาษาเป้าหมายสำหรับแต่ละคำสั่งได้ (ไม่บังคับ)  
- **ประวัติ** — ประวัติการใช้งานครบถ้วน พร้อมข้อความนำเข้า/ส่งออก การกรอง และการส่งออกข้อมูล  
- **โมเดลและค่าใช้จ่าย** — เลือกโมเดลจากผู้ให้บริการที่ตั้งค่าไว้ได้; แดชบอร์ดแสดงค่าใช้จ่ายและการใช้งาน พร้อมบันทึกข้อมูล สรุปตามโมเดล/การทำงาน/วัน  
- **อินเตอร์เฟซ** — อินเตอร์เฟซหลายภาษา (มากกว่า 30 ภาษา รองรับภาษาที่เขียนจากขวาไปซ้าย), ฟอนต์, ...  
- **โหมดเว็บ** — รองรับผู้ใช้หลายคน พร้อมบทบาทผู้ดูแลระบบ  
- **เดสก์ทอป** — แอปพลิเคชัน Electron สำหรับ Windows และ Linux  
- **โฮสต์เอง** — รูปภาพ Docker สำหรับ amd64 และ arm64 (พร้อมใช้งานกับ Raspberry Pi)  

เมื่อติดตั้งแล้ว ให้ดู **[คู่มือผู้ใช้](USER-GUIDE.th.md)** เพื่อศึกษาการใช้งานคุณลักษณะทั้งหมดอย่างละเอียด

<small>**อ่านภาษาอื่น:** </small>

<small id="lang-list"> [English (UK)](../README.md) · [Português (BR)](README.pt-BR.md) · [العربية](README.ar.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [Hrvatski](README.hr.md) · [Čeština](README.cs.md) · [Nederlands](README.nl.md) · [English (US)](README.en-US.md) · [Filipino](README.tl.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [हिन्दी](README.hi.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [Basa Jawa](README.jv.md) · [한국어](README.ko.md) · [Bahasa Melayu](README.ms.md) · [فارسی](README.fa.md) · [Polski](README.pl.md) · [Português (PT)](README.pt.md) · [ਪੰਜਾਬੀ](README.pa.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [Slovenčina](README.sk.md) · [Español](README.es.md) · [Kiswahili](README.sw.md) · [Svenska](README.sv.md) · [తెలుగు](README.te.md) · [ภาษาไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Tiếng Việt](README.vi.md)</small>

<small>

> **หมายเหตุเกี่ยวกับการแปลอินเทอร์เฟซผู้ใช้และเอกสารประกอบ:** ภาษาทั้งหมดในส่วนของอินเทอร์เฟซ ยกเว้นภาษาอังกฤษ (สหราชอาณาจักร) ซึ่งเป็นต้นฉบับ
> ได้รับการแปลโดยใช้โมเดลอัจฉริยะ ดังนั้นคำแปลอาจคลาดเคลื่อนหรือมีข้อผิดพลาดได้

</small>

<br/>

<a id="screenshots"></a>

## ภาพหน้าจอ

**ตัวเลือกภาษา**

![ตัวเลือกภาษา](../images/screenshots/th/language-selector.png)

**แปล**

![แปล](../images/screenshots/th/translate.png)

**แปลง – ตัวแก้ไขพรอมต์**

![แปลง – ตัวแก้ไขพรอมต์](../images/screenshots/th/transform-prompt-edit.png)

**แดชบอร์ด**

![สรุปแดชบอร์ด — การใช้งาน](../images/screenshots/th/dashboard-summary.png)

**ประวัติ**

![ประวัติ](../images/screenshots/th/history.png)

**การตั้งค่า – การเลือกโมเดล**

![การตั้งค่า – การเลือกโมเดล](../images/screenshots/th/settings-models.png)

<br/><br/>

<a id="table-of-contents"></a>

## สารบัญ

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [เริ่มต้นอย่างรวดเร็ว](#quick-start)
- [การติดตั้ง](#installation)
  - [Windows (Electron)](#windows-electron)
  - [Linux (Electron)](#linux-electron)
  - [Docker](#docker)
- [การขอคีย์ API ของ OpenRouter](#getting-an-openrouter-api-key)
- [การตั้งค่าและสภาพแวดล้อม](#configuration-and-environment)
- [การพัฒนาและการจัดโครงสร้าง](#development-and-architecture)
- [การรายงานปัญหา](#reporting-issues)
- [ข้อจำกัดความรับผิด](#disclaimer)
- [ไลเซนส์](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="quick-start"></a>

## เริ่มต้นอย่างรวดเร็ว

**Docker (แนะนำสำหรับการโฮสต์ด้วยตนเอง)**

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest

OPENROUTER_API_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_API_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

แทนที่ `sk-or-your-key` ด้วย [คีย์ API ของ OpenRouter](https://openrouter.ai/keys) ของคุณ (หรือตั้งค่าคีย์ผู้ให้บริการอื่น ๆ; ดูที่ [การตั้งค่าและการแวดล้อม](#configuration-and-environment)) เปิด [http://localhost:5000](http://localhost:5000) และเปลี่ยนรหัสผ่านผู้ดูแลระบบเริ่มต้นก่อนที่จะเปิดใช้บริการ

<br/>

> ℹ️ **หมายเหตุ**<br/>
> ใน Docker การตั้งค่าข้อมูลรับรองของ LLM จะทำผ่านตัวแปรสภาพแวดล้อม เช่น `OPENROUTER_API_KEY`, `OPENAI_API_KEY`, `CEREBRAS_API_KEY`, … (ไม่ได้ตั้งในเว็บ UI) สำหรับการใช้งานบนเดสก์ท็อป (Electron) คุณสามารถตั้งค่าคีย์ได้ที่ **การตั้งค่า → API**

<br/>

**Windows**

ดาวน์โหลดไฟล์ล่าสุด `Transrewrt Setup x.y.z.exe` จาก [Releases](https://github.com/wsj-br/transrewrt/releases) รันตัวติดตั้ง แล้วเปิดโปรแกรมจากเมนูเริ่มต้นหรือช็อตคัตบนเดสก์ท็อป ใส่คีย์ API ของคุณที่ **การตั้งค่า → API** คุณต้องตั้งค่าผู้ให้บริการอย่างน้อยหนึ่งราย โดย OpenRouter มักใช้กันสำหรับโมเดลฟรี

<br/>

**Linux**

ดาวน์โหลดไฟล์ `.AppImage` สำหรับ CPU ของคุณจาก [Releases](https://github.com/wsj-br/transrewrt/releases) (`x64` สำหรับพีซีทั่วไป, `arm64` สำหรับอุปกรณ์ ARM ส่วนใหญ่ เช่น Raspberry Pi 4 ขึ้นไป) แล้วทำตามขั้นตอน:

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

ใส่คีย์ API ของคุณที่ **การตั้งค่า → API** คุณต้องตั้งค่าผู้ให้บริการอย่างน้อยหนึ่งราย โดย OpenRouter มักใช้กันสำหรับโมเดลฟรี

ในระบบ Debian/Ubuntu คุณอาจต้องติดตั้งแพ็กเกจเพิ่มเติมก่อน:

```bash
sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth
```

ดูรายละเอียดเพิ่มเติมได้ที่ [ติดตั้ง → Linux](#linux-electron)

<br/>

> ℹ️ **หมายเหตุ**<br/>

> ขณะนี้ยังไม่รองรับ macOS Transrewrt ใช้งานได้กับ Windows, Linux และ Docker

<br/>

เมื่อแอปพลิเคชันทำงานแล้ว ดูที่ **[คู่มือผู้ใช้](USER-GUIDE.th.md)** เพื่อเรียนรู้วิธีการแปล เขียนใหม่ และแปลงข้อความ การจัดการพรอมต์ และการตั้งค่าโมเดล

<br/><br/>

<a id="installation"></a>

## การติดตั้ง

<a id="windows-electron"></a>

### วินโดวส์ (Electron)

- ดาวน์โหลดตัวติดตั้งเวอร์ชันล่าสุดได้ที่ [รีลีส](https://github.com/wsj-br/transrewrt/releases)
- รันไฟล์ `.exe` และทำตามขั้นตอนในตัวติดตั้ง
- ครั้งแรกที่รัน: เริ่มต้นแอปพลิเคชันจากเมนูเริ่มต้นหรือทางลัดบนเดสก์ท็อป

<br/>

> ℹ️ **หมายเหตุ**<br/>
> วินโดวส์อาจแสดงคำเตือนด้านความปลอดภัยอย่างใดอย่างหนึ่งต่อไปนี้ (ซึ่งเป็นเรื่องปกติสำหรับแอปที่ไม่มีการลงนาม หรือแอปจากผู้พัฒนาอิสระ):
>   - **การควบคุมบัญชีผู้ใช้ (UAC)**: "คุณต้องการอนุญาตให้แอปนี้จากผู้เผยแพร่ที่ไม่รู้จัก ทำการเปลี่ยนแปลงอุปกรณ์ของคุณหรือไม่?" → กดที่ **ใช่**
>   - **ไมโครซอฟท์ ดีเฟนเดอร์ สเมิร์ทสกรีน**: "วินโดวส์ได้ป้องกันพีซีของคุณ" → กดที่ **ข้อมูลเพิ่มเติม** → **รันอยู่ดี**
>
> เหตุการณ์ดังกล่าวเกิดขึ้นเนื่องจากแอปนี้ไม่ได้รับการลงนามโดยไมโครซอฟท์หรือผู้เผยแพร่รายใหญ่—แต่สามารถมั่นใจได้ว่าปลอดภัยหากดาวน์โหลดจากลิงก์รีลีสอย่างเป็นทางการของเราบน GitHub
> (กรุณาตรวจสอบค่าแฮช SHA256 ตามด้านล่าง)

<br/>

<a id="linux-electron"></a>

### Linux (Electron)

- ดาวน์โหลด `.AppImage` ที่ตรงกัน (`x64` หรือ `arm64`) จาก [Releases](https://github.com/wsj-br/transrewrt/releases)
- รันคำสั่ง: `chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage` บน x86_64/amd64 หรือใช้ชื่อไฟล์ `...-arm64.AppImage` บนระบบ ARM64
- ติดตั้งแพ็คเกจเพิ่มเติม (สำหรับ Debian/Ubuntu): `sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth`
- ดูข้อมูลเพิ่มเติมได้ที่ [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)

<br/>

<a id="docker"></a>

### Docker

- รับภาพ: `docker pull ghcr.io/wsj-br/transrewrt:latest`
- ตั้งค่าอย่างน้อยหนึ่งคีย์ผู้ให้บริการผ่านตัวแปรสภาพแวดล้อม (ตัวอย่างเช่น `OPENROUTER_API_KEY` สำหรับ OpenRouter) ใช้ `-e` หรือ `docker compose` / `.env` เพื่อส่งตัวแปรเหล่านี้ โดยที่รหัสลับจะไม่ถูกฝังลงในภาพ
- **ไม่ต้อง** ใส่คีย์ผู้ให้บริการในหน้าเว็บ ตัวเซิร์ฟเวอร์จะอ่านคีย์เหล่านี้จากตัวแปรสภาพแวดล้อมโดยตรง

ตัวอย่าง – สร้าง named volume เพื่อเก็บข้อมูลถาวร (ใช้ OpenRouter key ผ่าน env):

```bash
OPENROUTER_API_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_API_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

หรือหากต้องการใช้ Docker Compose ให้ใช้คำสั่งต่อไปนี้:

```
# ดาวน์โหลดไฟล์ compose
wget https://github.com/wsj-br/transrewrt/raw/refs/heads/master/production.yml -O transrewrt.yml
# แก้ไขไฟล์เพื่อเพิ่ม API_KEYS
vi transrewrt.yml
# เริ่มคอนเทนเนอร์
docker compose -f transrewrt.yml up -d
```

<br/>

| ตัวเลือก | คำอธิบาย |
|---------|---------|
| พอร์ต | `5000` (แมปกับ `-p 5000:5000`) |
| เล่มข้อมูล (Volume) | ติดตั้ง (Mount) `/app/data` สำหรับการจัดเก็บค่าการตั้งค่าและฐานข้อมูล |
| ตัวแปรสภาพแวดล้อม (Env vars) | `PORT`, `CONFIG_PATH`, รวมถึงกุญแจ LLM (`OPENROUTER_API_KEY`, `OPENAI_API_KEY`, …) - ดู [การตั้งค่าและตัวแปรสภาพแวดล้อม](#configuration-and-environment) |

การสร้างและรันจากซอร์ส: `docker compose up --build -d` หรือ `pnpm docker:up` - ดูที่ [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)

<br/><br/>

<a id="getting-an-openrouter-api-key"></a>

## วิธีรับคีย์ API ของ OpenRouter

Transrewrt รองรับผู้ให้บริการ AI หลายราย [OpenRouter](https://openrouter.ai) เป็นตัวเลือกยอดนิยมเพราะรวมโมเดลจำนวนมากไว้ภายใต้คีย์เดียว และมีโมเดลใช้งานฟรี

1. สมัครหรือเข้าสู่ระบบที่ [openrouter.ai](https://openrouter.ai)
2. เข้าไปที่หน้า [Keys](https://openrouter.ai/keys) แล้วสร้างคีย์ใหม่ (ตั้งชื่อ และตั้งวงเงินเครดิตเพิ่มเติมได้ตามต้องการ) โดยคุณสามารถใช้โมเดลฟรีโดยไม่ต้องเติมเครดิต
3. **เดสก์ท็อป (Electron):** วางคีย์ในเมนู **การตั้งค่า → API** **Docker:** ตั้งตัวแปรสภาพแวดล้อม เช่น `OPENROUTER_API_KEY` (ดูรายละเอียดใน [เริ่มต้นอย่างรวดเร็ว](#quick-start))

อย่าใช้โมเดล **Body Builder** ของ OpenRouter ([`openrouter/bodybuilder`](https://openrouter.ai/openrouter/bodybuilder)) สำหรับการแปล เขียนใหม่ หรือการแปลงข้อความ เนื่องจากมันจะส่งกลับ payload รูปแบบ JSON แทนข้อความที่แปลหรือเขียนเรียบร้อยแล้วสำหรับงานเหล่านั้น ดูข้อมูลเพิ่มเติมได้ที่ [การตั้งค่า → โมเดล](USER-GUIDE.th.md#models) ในคู่มือผู้ใช้

คุณยังสามารถใช้ผู้ให้บริการอื่น ๆ (OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras) หรือรันโมเดลในเครื่องได้ด้วย [Ollama](https://ollama.com) ดูที่ [การตั้งค่าและการกำหนดสภาพแวดล้อม](#configuration-and-environment) เพื่อดูรายชื่อผู้ให้บริการที่รองรับและตัวแปรสภาพแวดล้อมทั้งหมด

> ⚠️ **คำเตือน**<br/>
> หากคุณใช้งาน Ollama จากอุปกรณ์ เครื่องเสมือน หรือบริการอื่น ๆ อย่าลืมตั้งค่า Ollama ให้อนุญาตการเชื่อมต่อจากเครือข่ายภายนอก (ไม่จำกัดเฉพาะ localhost)

สำหรับข้อมูลเกี่ยวกับขีดจำกัด การนำกุญแจมาใช้งานเอง (BYOK) และรายละเอียดอื่น ๆ ดูที่ [การพิสูจน์ตัวตน OpenRouter](https://openrouter.ai/docs/api/reference/authentication)

<br/><br/>

<a id="configuration-and-environment"></a>

## การกำหนดค่าและสภาพแวดล้อม

**ตำแหน่งไฟล์การตั้งค่า**

| การติดตั้ง | ตำแหน่งการตั้งค่า |
| ------------------ | ------------------------------------------------- |
| Electron (Windows) | `%APPDATA%\transrewrt\`                           |
| Electron (Linux)   | `~/.config/transrewrt/`                           |
| เว็บ / Docker       | `/app/data/config.json` (ใช้ volume เพื่อเก็บข้อมูลถาวร) |

<br/>

**ตัวแปรสิ่งแวดล้อม** (เฉพาะเว็บ/ด็อกเกอร์; Electron ใช้ไฟล์การตั้งค่าในเครื่อง)

| ตัวแปร | ค่าเริ่มต้น | คำอธิบาย |
| ---------------- | ----------------------- | ----------- |
| `PORT`           | `5000`                  | พอร์ตที่เซิร์ฟเวอร์ใช้ฟัง |
| `CONFIG_PATH`    | `/app/data/config.json` | เส้นทางไปยังไฟล์การตั้งค่า |
| `OPENROUTER_API_KEY` | *(ว่าง)*               | คีย์ API ของ OpenRouter |
| `OPENAI_API_KEY`     | *(ว่าง)*               | คีย์ API ของ OpenAI |
| `CEREBRAS_API_KEY`   | *(ว่าง)*               | คีย์ API ของ Cerebras |

| `ANTHROPIC_API_KEY`  | *(ว่างเปล่า)*               | คีย์ API ของ Anthropic |
| `GOOGLE_API_KEY`     | *(ว่างเปล่า)*               | คีย์ API ของ Google Gemini |
| `DEEPSEEK_API_KEY`   | *(ว่างเปล่า)*               | คีย์ API ของ DeepSeek |
| `GROQ_API_KEY`       | *(ว่างเปล่า)*               | คีย์ API ของ Groq |
| `MISTRAL_API_KEY`    | *(ว่างเปล่า)*               | คีย์ API ของ Mistral |
| `OLLAMA_URL`     | *(ว่างเปล่า)*               | URL พื้นฐานของ Ollama (เช่น `http://host.docker.internal:11434`) |
| `XAI_API_KEY`        | *(ว่างเปล่า)*               | คีย์ API ของ xAI |

กรุณาตั้งค่าเฉพาะผู้ให้บริการที่คุณใช้งานเท่านั้น รหัสโมเดลจะมี namespace นำหน้า (`openrouter/…`, `openai/…`, `cerebras/…`, `ollama/…`, เป็นต้น)

**การแสดงค่าใช้จ่าย:** OpenRouter จะแสดงค่าบริการจริงเมื่อมีข้อมูลที่ถูกต้อง ผู้ให้บริการอื่นจะใช้ **ค่าโดยประมาณ** จากตารางราคาโมเดลสาธารณะของ OpenRouter ในกรณีที่มีคีย์ OpenRouter; หากไม่มีการตั้งคีย์นี้ ค่าบริการของผู้ให้บริการนอก OpenRouter อาจแสดงเป็น `0` ค่าที่แสดงเป็นเพียงการประมาณ ไม่ใช่ใบแจ้งหนี้

<br/>

**ข้อมูลและถาวรภาพ:** สำหรับ Docker ให้ติดตั้ง volume ที่ `/app/data` เพื่อให้ไฟล์ `config.json` และฐานข้อมูล SQLite ยังคงอยู่หลังจากเริ่มต้นคอนเทนเนอร์ใหม่ หากไม่มี volume ข้อมูลทั้งหมดจะสูญหายเมื่อคอนเทนเนอร์หยุดทำงาน

**ผู้พัฒนา:** หลังจากดึงการเปลี่ยนแปลงที่แทนที่การตั้งค่าคีย์เดิมที่ใช้คีย์เดียว ให้รีเซ็ตหรือผสาน `data/config.json` เข้ากับโครงสร้างค่าเริ่มต้นใหม่จาก `src/config-defaults/config_default.json` ถ้าไฟล์ท้องถิ่นของคุณยังใช้ฟิลด์ที่ถูกลบไป (`api_key`, `api_url`, ตัวเลือก proxy)

<br/>

**การพิสูจน์ตัวตนเว็บไซต์:**

- ผู้ดูแลระบบเริ่มต้น: `admin` / `transrewrt26`
- จัดการผู้ใช้ได้ที่ **การตั้งค่า → ผู้ใช้**
- รีเซ็ตรหัสผ่าน: `docker exec <container> reset-web-password '<username>' '<new-password>'`  
  (จากซอร์ส: `pnpm run reset-web-password -- <username> <new-password>`)

<br/>

> ⚠️ **คำเตือน**<br/>
> เปลี่ยนรหัสผ่านผู้ดูแลระบบเริ่มต้นทันที หากโฮสต์นั้นสามารถเข้าถึงผ่านเครือข่าย

<br/>

การตั้งค่าสำคัญ (แบบอักษร โมเดล ภาษา ฯลฯ) มีให้ใช้ได้ภายในส่วนการตั้งค่าของแอปพลิเคชัน

<br/><br/>

<a id="development-and-architecture"></a>

## การพัฒนาและสถาปัตยกรรม

- **การพัฒนา:** การตั้งค่า การสร้าง การทดสอบ และการจัดวาง (Electron, Web, Docker) - ดู **[dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)**.
- **ภาพรวมของสถาปัตยกรรมและระบบ:** โครงสร้างโฟลเดอร์ เทคโนโลยีที่ใช้ การตัดสินใจด้านการออกแบบ - ดู **[dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)**.

<br/><br/>

<a id="reporting-issues"></a>

## การรายงานปัญหา

เปิดรายงานปัญหาที่ [GitHub](https://github.com/wsj-br/transrewrt/issues) โดยระบุแพลตฟอร์มที่คุณใช้ (Windows / Linux / Docker) และเวอร์ชันของแอป (แสดงอยู่ในหน้าต่างเกี่ยวกับหรือในหน้า Releases)

<br/><br/>

<a id="disclaimer"></a>

## ข้อจำกัดความรับผิดชอบ

ชื่อผลิตภัณฑ์และไอคอนเป็นของเจ้าของที่เกี่ยวข้อง และใช้เพื่อจุดประสงค์ในการระบุเท่านั้น ซอฟต์แวร์นี้ไม่มีความเกี่ยวข้องหรือไม่ได้รับการสนับสนุนจากแบรนด์ใดๆ ที่ถูกกล่าวถึง

<br/><br/>

<a id="license"></a>

## ใบอนุญาต

ลิขสิทธิ์ © 2026 วัลเดอมาร์ สกูเดลเลอร์ จูเนียร์

[ใบอนุญาต Apache 2.0](LICENSE)