---
translated_at: "2026-03-26T01:10:49.247Z"
source_hash: "d5d19d18eadc9060d8db2f32f47dc8174ee783feea992030f3c686debc714a88"
source_mtime: 1774482559451.2136
model: "qwen/qwen3-235b-a22b-2507"
---
<p align="center">
  <img src="../images/transrewrt_logo.svg" alt="โลโก้ Transrewrt" width="120" />
</p>

<h1 align="center">Transrewrt</h1>

<p align="center">
  <a href="https://github.com/wsj-br/transrewrt/releases"><img src="https://img.shields.io/badge/version-1.0.15-blue" alt="เวอร์ชัน"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-Apache%202.0-green" alt="ลิขสิทธิ์: Apache 2.0"></a>
  <img src="https://img.shields.io/badge/platform-Windows%20%7C%20Linux%20%7C%20Docker-lightgrey" alt="แพลตฟอร์ม">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react" alt="React 19">
  <img src="https://img.shields.io/badge/Electron-41-47848F?logo=electron" alt="Electron 41">
</p>

เครื่องมือข้อความที่ขับเคลื่อนด้วยปัญญาประดิษฐ์: แปลระหว่างภาษาต่างๆ เขียนใหม่ในรูปแบบที่ต่างกัน และเปลี่ยนแปลงด้วยพรอมต์ที่กำหนดเอง — โดยใช้ผู้ให้บริการปัญญาประดิษฐ์หลายราย (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI และ Ollama แบบท้องถิ่น) ใช้งานได้ทั้งในรูปแบบแอปเดสก์ท็อป (Electron) หรือเว็บแอปที่ติดตั้งเอง (Docker)

- **แปล** — ระหว่างหลายสิบภาษา พร้อมการตรวจจับแหล่งภาษาโดยอัตโนมัติ
- **เขียนใหม่** — แก้ไขแกรมม่า ปรับความชัดเจน รูปแบบทางการ/ไม่เป็นทางการ ย่อหรือขยายข้อความ โปรแกรมทางเทคนิค
- **เปลี่ยนแปลง** — ใช้พรอมต์ปัญญาประดิษฐ์แบบกำหนดเอง; สร้างและจัดการพรอมต์ กำหนดภาษาเป้าหมายต่อพรอมต์ได้
- **ประวัติการใช้งาน** — บันทึกประวัติทั้งหมดของข้อความที่ป้อนและผลลัพธ์ พร้อมฟิลเตอร์และการส่งออก
- **โมเดลและค่าใช้จ่าย** — เลือกโมเดลจากผู้ให้บริการที่ตั้งค่าไว้; แดชบอร์ดติดตามค่าใช้จ่ายและการใช้งาน พร้อมรายงาน สรุปตามโมเดล/การดำเนินการ/แต่ละวัน
- **ส่วนติดต่อผู้ใช้ (UI)** — อินเตอร์เฟซหลายภาษา (30+ ภาษา รองรับการเขียนจากขวาไปซ้าย), ฟอนต์, ...
- **โหมดเว็บ** — รองรับผู้ใช้งานหลายคนพร้อมบทบาทผู้ดูแลระบบ
- **เดสก์ท็อป** — แอป Electron สำหรับ Windows และ Linux
- **ติดตั้งเองได้** — อิมเมจ Docker สำหรับ amd64 และ arm64 (พร้อมใช้บน Raspberry Pi)

หลังติดตั้งแล้ว โปรดดูที่ **[คู่มือการใช้งาน](USER-GUIDE.th.md)** เพื่อดูคำแนะนำการใช้งานฟีเจอร์ทั้งหมด

<small>**อ่านเป็นภาษาอื่น:** </small>
<small id="lang-list"> [English (UK)](../README.md) · [Português (BR)](README.pt-BR.md) · [العربية](README.ar.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [Hrvatski](README.hr.md) · [Čeština](README.cs.md) · [Nederlands](README.nl.md) · [English (US)](README.en-US.md) · [Filipino](README.tl.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [हिन्दी](README.hi.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [Basa Jawa](README.jv.md) · [한국어](README.ko.md) · [Bahasa Melayu](README.ms.md) · [فارسی](README.fa.md) · [Polski](README.pl.md) · [Português (PT)](README.pt.md) · [ਪੰਜਾਬੀ](README.pa.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [Slovenčina](README.sk.md) · [Español](README.es.md) · [Kiswahili](README.sw.md) · [Svenska](README.sv.md) · [తెలుగు](README.te.md) · [ภาษาไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Tiếng Việt](README.vi.md)</small>

<small>

> **หมายเหตุเกี่ยวกับการแปลอินเตอร์เฟซและเอกสาร:** ภาษาทั้งหมดยกเว้นภาษาอังกฤษ (UK) ต้นฉบับ ได้รับการแปลโดยใช้โมเดลปัญญาประดิษฐ์ อาจมีถ้อยคำคลาดเคลื่อนหรือข้อผิดพลาดได้

</small>

<br/>

<a id="screenshots"></a>
## ภาพหน้าจอ

**ตัวเลือกภาษา**

![ตัวเลือกภาษา](../images/screenshots/th/language-selector.png)

**การแปล**

![การแปล](../images/screenshots/th/translate.png)

**เปลี่ยนแปลง - ตัวแก้ไขพรอมต์**

![เปลี่ยนแปลง - ตัวแก้ไขพรอมต์](../images/screenshots/th/transform-prompt-edit.png)

**แดชบอร์ด**

![แดชบอร์ดค่าใช้จ่าย](../images/screenshots/th/dashboard-summary.png)

**ประวัติการใช้งาน**

![ประวัติการใช้งาน](../images/screenshots/th/history.png)

**ตการตั้งค่า - การเลือกโมเดล**

![ตั้งค่า - การเลือกโมเดล](../images/screenshots/th/settings-models.png)

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
- [การรับคีย์ OpenRouter API](#getting-an-openrouter-api-key)
- [การตั้งค่าและสภาพแวดล้อม](#configuration-and-environment)
- [การพัฒนาและสถาปัตยกรรม](#development-and-architecture)
- [รีลีสและแท็ก](#releases-and-tags)
- [การมีส่วนร่วม](#contributing)
- [ข้อจำกัดความรับผิดชอบ](#disclaimer)
- [ใบอนุญาต](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="quick-start"></a>
## เริ่มต้นอย่างรวดเร็ว

**Docker (แนะนำสำหรับการโฮสต์ด้วยตัวเอง)**

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest

OPENROUTER_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

แทนที่ `sk-or-your-key` ด้วย [คีย์ OpenRouter API](https://openrouter.ai/keys) ของคุณ (หรือตั้งค่าคีย์ผู้ให้บริการอื่น ๆ เข้าดูที่ [การตั้งค่า](#configuration-and-environment)) เปิด [http://localhost:5000](http://localhost:5000) และเปลี่ยนรหัสผ่านผู้ดูแลระบบค่าเริ่มต้นก่อนเปิดใช้บริการ

<br/>

> ℹ️ **หมายเหตุ**<br/>
> ใน Docker ข้อมูลรับรองของ LLM จะถูกตั้งค่าผ่านตัวแปรสภาพแวดล้อม เช่น `OPENROUTER_KEY`, `OPENAI_KEY`, `CEREBRAS_KEY`, … (ไม่ใช่ทางเว็บยูไอ) ส่วนบนเดสก์ท็อป (Electron) คุณตั้งค่าคีย์ภายใต้ **Settings → API**

<br/>

**Windows**

ดาวน์โหลดไฟล์ติดตั้งล่าสุด `Transrewrt Setup x.y.z.exe` จาก [Releases](https://github.com/wsj-br/transrewrt/releases) รันตัวติดตั้ง จากนั้นเปิดใช้ผ่านเมนูเริ่มต้นหรือทางลัดบนเดสก์ท็อป ป้อนคีย์ API ของคุณภายใต้ **Settings → API** คุณต้องตั้งค่าผู้ให้บริการอย่างน้อยหนึ่งราย OpenRouter เป็นตัวเลือกยอดนิยมสำหรับโมเดลฟรี

<br/>

**Linux**

ดาวน์โหลดไฟล์ `.AppImage` ที่ตรงกับ CPU ของคุณจาก [Releases](https://github.com/wsj-br/transrewrt/releases) (`x64` สำหรับพีซีทั่วไป `arm64` สำหรับอุปกรณ์ ARM ส่วนใหญ่ รวมถึง Raspberry Pi 4+) จากนั้น:

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

ป้อนคีย์ API ของคุณภายใต้ **Settings → API** คุณต้องตั้งค่าผู้ให้บริการอย่างน้อยหนึ่งราย OpenRouter เป็นตัวเลือกยอดนิยมสำหรับโมเดลฟรี

บน Debian/Ubuntu อาจต้องติดตั้ง dependencies เพิ่มเติมก่อน:

```bash
sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth
```

ดูรายละเอียดเพิ่มเติมได้ที่ [Installation → Linux](#linux-electron)

<br/>

> ℹ️ **หมายเหตุ**<br/>
> macOS ยังไม่ได้รับการสนับสนุนในขณะนี้ Transrewrt รองรับ Windows, Linux และ Docker เท่านั้น

<br/>

เมื่อแอปเริ่มทำงานแล้ว กรุณาดู **[คู่มือผู้ใช้](USER-GUIDE.th.md)** เพื่อเรียนรู้วิธีแปล ปรับเรียบเรียง และแปลงข้อความ จัดการพรอมต์ และตั้งค่าโมเดล

<br/><br/>

<a id="installation"></a>
## การติดตั้ง

<a id="windows-electron"></a>
### Windows (Electron)

- ดาวน์โหลดตัวติดตั้งล่าสุดจาก [Releases](https://github.com/wsj-br/transrewrt/releases)
- รันไฟล์ `.exe` และทำตามขั้นตอนของตัวติดตั้ง
- การรันครั้งแรก: เริ่มต้นแอปผ่านเมนูเริ่มต้นหรือทางลัดบนเดสก์ท็อป

<br/>

<a id="linux-electron"></a>
### Linux (Electron)

- ดาวน์โหลดไฟล์ `.AppImage` ที่ตรงกัน (`x64` หรือ `arm64`) จาก [Releases](https://github.com/wsj-br/transrewrt/releases)
- รันคำสั่ง: `chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage` สำหรับ x86_64/amd64 หรือใช้ไฟล์ชื่อ `...-arm64.AppImage` สำหรับ ARM64
- Dependencies เพิ่มเติม (Debian/Ubuntu): `sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth`
- ดู [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) เพื่อข้อมูลเพิ่มเติม

<br/>

<a id="docker"></a>
### Docker

- ดึงไฟล์: `docker pull ghcr.io/wsj-br/transrewrt:latest`
- ตั้งค่าอย่างน้อยหนึ่งคีย์ผู้ให้บริการผ่าน environment (ตัวอย่างเช่น `OPENROUTER_KEY` สำหรับ OpenRouter) ผ่านตัวแปรด้วย `-e` หรือ `docker compose` / `.env` เพื่อไม่ให้รหัสลับถูกฝังไว้ในภาพ
- คีย์ผู้ให้บริการจะ **ไม่** ถูกป้อนผ่านเว็บยูไอ; เซิร์ฟเวอร์จะอ่านค่าจาก environment โดยตรง

ตัวอย่าง - ใช้ volume ชื่อนามเพื่อเก็บข้อมูลคงที่ (ใช้คีย์ OpenRouter ผ่าน env):

```bash
OPENROUTER_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

<br/>

| ตัวเลือก   | คำอธิบาย                                                                                                   |
| -------- | ------------------------------------------------------------------------------------------------------------- |
| พอร์ต     | `5000` (แมปด้วย `-p 5000:5000`)                                                                              |
| เวอร์ชัน   | ติดตั้ง `/app/data` เพื่อเก็บข้อมูลการตั้งค่าและฐานข้อมูลให้คงที่                                                         |
| ตัวแปรสภาพแวดล้อม | `PORT`, `CONFIG_PATH`, และคีย์ LLM (`OPENROUTER_KEY`, `OPENAI_KEY`, …) - ดูเพิ่มเติมได้ที่ [การตั้งค่า](#configuration-and-environment) |

ในการสร้างและรันจากซอร์สโค้ด: `docker compose up --build -d` หรือ `pnpm docker:up` - ดู [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)

<br/><br/>

<a id="getting-an-openrouter-api-key"></a>

## การรับคีย์ OpenRouter API

Transrewrt รองรับผู้ให้บริการ AI หลายราย โดย [OpenRouter](https://openrouter.ai) เป็นตัวเลือกยอดนิยม เพราะรวมโมเดลต่าง ๆ ไว้ภายใต้คีย์เดียวและมีโมเดลให้ใช้งานฟรี

1. สมัครหรือเข้าสู่ระบบที่ [openrouter.ai](https://openrouter.ai)
2. เปิดหน้า [Keys](https://openrouter.ai/keys) และสร้างคีย์ใหม่ (ตั้งชื่อ และตั้งวงเงินได้ตามต้องการ) คุณสามารถใช้โมเดลฟรีโดยไม่ต้องเติมเครดิต
3. **เดสก์ท็อป (Electron):** วางคีย์ในส่วน **Settings → API** **Docker:** ตั้งตัวแปรสภาพแวดล้อม เช่น `OPENROUTER_KEY` (ดูเพิ่มเติมที่ [เริ่มต้นอย่างรวดเร็ว](#quick-start))

ห้ามใช้โมเดล **Body Builder** ของ OpenRouter ([`openrouter/bodybuilder`](https://openrouter.ai/openrouter/bodybuilder)) สำหรับการแปล เขียนใหม่ หรือเปลี่ยนรูปแบบ: เพราะคืนข้อมูลโหลดคำร้องขอในรูปแบบ JSON ไม่ใช่รูปแบบข้อความที่เสร็จสมบูรณ์สำหรับงานดังกล่าว ดูเพิ่มเติมที่ [Settings → Models](USER-GUIDE.th.md#models) ในคู่มือผู้ใช้

คุณยังสามารถใช้ผู้ให้บริการอื่น ๆ (OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras) หรือรันโมเดลแบบท้องถิ่นด้วย [Ollama](https://ollama.com) ดูหัวข้อ [การตั้งค่าและการจัดการสภาพแวดล้อม](#configuration-and-environment) สำหรับรายการผู้ให้บริการที่รองรับและตัวแปรสภาพแวดล้อมทั้งหมด

> ⚠️ **คำเตือน**<br/>
> หากคุณใช้ Ollama จากอุปกรณ์ คอนเทนเนอร์ หรือบริการอื่น ต้องตั้งค่า Ollama ให้อนุญาตการเชื่อมต่อจากภายนอก (ไม่ใช่เฉพาะ localhost)

สำหรับข้อมูลเกี่ยวกับขีดจำกัด การใช้คีย์ของตัวเอง (BYOK) และอื่น ๆ เพิ่มเติม ดูที่ [OpenRouter authentication](https://openrouter.ai/docs/api/reference/authentication)

<br/><br/>

<a id="configuration-and-environment"></a>
## การตั้งค่าและการจัดการสภาพแวดล้อม

**ตำแหน่งไฟล์กำหนดค่า**

| การติดตั้ง          | ตำแหน่งไฟล์กำหนดค่า                           |
| ------------------ | ------------------------------------------------- |
| Electron (Windows) | `%APPDATA%\transrewrt\`                           |
| Electron (Linux)   | `~/.config/transrewrt/`                           |
| Web / Docker       | `/app/data/config.json` (ใช้ volume เพื่อคงข้อมูล) |

<br/>

**ตัวแปรสภาพแวดล้อม** (สำหรับ web / Docker เท่านั้น; Electron ใช้ไฟล์กำหนดค่าแบบท้องถิ่น)

| ตัวแปร             | ค่าตั้งต้น               | คำอธิบาย |
| ------------------ | ----------------------- | ----------- |
| `PORT`             | `5000`                  | พอร์ตที่เซิร์ฟเวอร์ใช้รับฟัง |
| `CONFIG_PATH`      | `/app/data/config.json` | เส้นทางไปยังไฟล์กำหนดค่า |
| `OPENROUTER_KEY`   | *(ว่าง)*                 | คีย์ OpenRouter API |
| `OPENAI_KEY`       | *(ว่าง)*                 | คีย์ OpenAI API |
| `CEREBRAS_KEY`     | *(ว่าง)*                 | คีย์ Cerebras API |
| `ANTHROPIC_KEY`    | *(ว่าง)*                 | คีย์ Anthropic API |
| `GOOGLE_KEY`       | *(ว่าง)*                 | คีย์ Google Gemini API |
| `DEEPSEEK_KEY`     | *(ว่าง)*                 | คีย์ DeepSeek API |
| `GROQ_KEY`         | *(ว่าง)*                 | คีย์ Groq API |
| `MISTRAL_KEY`      | *(ว่าง)*                 | คีย์ Mistral API |
| `OLLAMA_URL`       | *(ว่าง)*                 | URL พื้นฐานของ Ollama (เช่น `http://host.docker.internal:11434`) |
| `XAI_KEY`          | *(ว่าง)*                 | คีย์ xAI API |

กรุณาตั้งค่าเฉพาะผู้ให้บริการที่คุณใช้งานเท่านั้น รหัสโมเดลจะมีการจัดชื่อในลักษณะที่มี namespace (`openrouter/…`, `openai/…`, `cerebras/…`, `ollama/…`, เป็นต้น)

**การแสดงต้นทุน:** OpenRouter จะคืนค่าต้นทุนที่เรียกเก็บจริงหากสามารถทำได้ ผู้ให้บริการอื่นจะใช้ต้นทุน **โดยประมาณ** จากการตั้งราคาโมเดลสาธารณะของ OpenRouter เมื่อมีการใส่คีย์ OpenRouter; แต่ถ้าไม่มี ต้นทุนของผู้ให้บริการอื่นอาจแสดงเป็น `0` โดยที่ตัวประมาณการดังกล่าวไม่ถือเป็นใบแจ้งหนี้

<br/>

**ข้อมูลและการเก็บรักษาข้อมูล:** สำหรับ Docker ให้ผูกตัว volume เข้ากับ `/app/data` เพื่อให้ไฟล์ `config.json` และฐานข้อมูล SQLite คงอยู่ตลอดการเริ่มใหม่ของคอนเทนเนอร์ หากไม่มี volume ข้อมูลทั้งหมดจะสูญหายเมื่อคอนเทนเนอร์หยุดทำงาน

**นักพัฒนา:** หลังจากดึงการเปลี่ยนแปลงที่แทนที่การตั้งค่าคีย์เดิมแบบเดี่ยว ให้รีเซ็ตหรือรวม `data/config.json` เข้ากับโครงสร้างเริ่มต้นใหม่จาก `src/config-defaults/config_default.json` หากไฟล์ท้องถิ่นของคุณยังใช้ฟิลด์เดิมที่ถูกลบไปแล้ว เช่น (`api_key`, `api_url`, ตัวเลือก proxy)

<br/>

**การรับรองความถูกต้องบนเว็บ:**

- ผู้ดูแลเริ่มต้น: `admin` / `transrewrt26`
- จัดการผู้ใช้ในเมนู **Settings → Users**
- รีเซ็ตรหัสผ่าน: `docker exec <container> reset-web-password '<username>' '<new-password>'`
  (จากต้นทาง: `pnpm run reset-web-password -- <username> <new-password>`)

<br/>

> ⚠️ **คำเตือน**<br/>
> เปลี่ยนรหัสผ่านผู้ดูแลเริ่มต้นทันทีในทุกโฮสต์ที่สามารถเข้าถึงผ่านเครือข่าย

<br/>

ตัวตั้งค่าสำคัญ (แบบอักษร โมเดล ภาษา เป็นต้น) สามารถตั้งค่าได้ในเมนู Settings ของแอปพลิเคชัน

<br/><br/>

<a id="development-and-architecture"></a>

## การพัฒนาและสถาปัตยกรรม

- **การพัฒนา:** การตั้งค่า อีบิลด์ ทดสอบ และการจัดวาง (Electron, Web, Docker) - ดู **[dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)**.
- **ภาพรวมของสถาปัตยกรรมและระบบ:** โครงสร้างโฟลเดอร์ เทคโนโลยีที่ใช้ การตัดสินใจทางการออกแบบ - ดู **[dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)**.

<br/><br/>

<a id="releases-and-tags"></a>
## การออกรุ่นและการติดแท็ก

- **แท็ก Git** `v`* (เช่น `v1.0.10`) จะเรียกใช้ [เวิร์กโฟลว์การออกรุ่น](.github/workflows/release.yml) **GitHub Releases** จะแนบตัวติดตั้งสำหรับ Windows (`.exe`) และไฟล์ Linux AppImages (**x64** และ **arm64**) มาด้วย
- **Docker images** จะถูกเผยแพร่ไปที่ `ghcr.io/wsj-br/transrewrt` แท็กของภาพจะตรงกับเวอร์ชัน Git (เช่น `v1.0.10` → `ghcr.io/wsj-br/transrewrt:1.0.10`) รวมถึง `latest` รองรับหลายแพลตฟอร์ม: `linux/amd64` และ `linux/arm64` (เช่น Raspberry Pi)

<br/><br/>

<a id="contributing"></a>
## การมีส่วนร่วม

1. ทำฟอร์กจากรีโพซิทอรี
2. สร้าง branch สำหรับคุณลักษณะ: `git checkout -b feature/my-feature`
3. Commit การเปลี่ยนแปลงของคุณโดยมีข้อความที่ชัดเจน
4. ส่งเนื้อหาขึ้นและสร้าง Pull Request ไปยัง `main`

กรุณาปฏิบัติตามรูปแบบการเขียนโค้ดที่มีอยู่และทดสอบการเปลี่ยนแปลงของคุณทั้งในโหมด Electron และเว็บก่อนส่ง ดู [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) สำหรับคำแนะนำเกี่ยวกับการบิลด์และการทดสอบ

<br/>

**การรายงานปัญหา:** เปิดปัญหาที่ [GitHub](https://github.com/wsj-br/transrewrt/issues) กรุณาแนบระบบที่คุณใช้ (Windows / Linux / Docker) และเวอร์ชันแอป (แสดงอยู่ในช่อง About หรือหน้า Releases)

<br/><br/>

<a id="disclaimer"></a>
## ข้อจำกัดความรับผิดชอบ

ชื่อผลิตภัณฑ์และไอคอนเป็นของเจ้าของที่เกี่ยวข้องทั้งหมด และใช้เพื่อวัตถุประสงค์ในการระบุเท่านั้น ซอฟต์แวร์นี้ไม่ได้มีความเกี่ยวข้องหรือได้รับการรับรองจากแบรนด์ใด ๆ ที่กล่าวถึง

<br/><br/>

<a id="license"></a>
## ใบอนุญาต

Copyright © 2026 Waldemar Scudeller Jr.

[Apache License 2.0](LICENSE)