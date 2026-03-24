---
translated_at: "2026-03-24T03:42:55.063Z"
source_hash: "718acd12f14755cd75ebf7d09b86d9a1df37ebe1898710080fa8e80c1221d58b"
source_mtime: 1774311390366.3484
model: "qwen/qwen3-235b-a22b-2507"
---
<p align="center">
  <img src="../images/transrewrt_logo.svg" alt="โลโก้ Transrewrt" width="120" />
</p>

<h1 align="center">Transrewrt</h1>

<p align="center">
  <a href="https://github.com/wsj-br/transrewrt/releases"><img src="https://img.shields.io/badge/version-1.0.14-blue" alt="รุ่น"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-Apache%202.0-green" alt="ใบอนุญาต: Apache 2.0"></a>
  <img src="https://img.shields.io/badge/platform-Windows%20%7C%20Linux%20%7C%20Docker-lightgrey" alt="แพลตฟอร์ม">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react" alt="React 19">
  <img src="https://img.shields.io/badge/Electron-41-47848F?logo=electron" alt="Electron 41">
</p>

เครื่องมือข้อความที่ขับเคลื่อนด้วย AI: แปลระหว่างภาษา ปรับรูปแบบข้อความต่าง ๆ และปรับเปลี่ยนด้วยคำแนะนำเฉพาะ — โดยใช้ผู้ให้บริการ AI หลายราย (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI และ Ollama แบบท้องถิ่น) ใช้งานได้ทั้งในรูปแบบแอปพลิเคชันเดสก์ท็อป (Electron) หรือเว็บแอปพลิเคชันที่จัดโฮสต์เอง (Docker)

- **แปล** — ระหว่างภาษาต่าง ๆ กว่าหลายสิบภาษา พร้อมตรวจจับภาษาต้นทางโดยอัตโนมัติ
- **เขียนใหม่** — แก้ไขไวยากรณ์ เพิ่มความชัดเจน เป็นทางการ/ไม่เป็นทางการ ย่อข้อความ ขยายข้อความ ทางเทคนิค
- **แปลงรูปแบบ** — คำแนะนำ AI แบบกำหนดเอง; สร้างและจัดการคำแนะนำ ระบุภาษาเป้าหมายในแต่ละคำแนะนำได้ (ไม่บังคับ)
- **ประวัติการใช้งาน** — บันทึกการทำงานทั้งหมด พร้อมข้อความต้นฉบับและผลลัพธ์ การกรอง และการส่งออก
- **โมเดลและต้นทุน** — เลือกโมเดลจากผู้ให้บริการที่กำหนดค่าไว้ทั้งหมด; แดชบอร์ดแสดงต้นทุนพร้อมการบันทึกใน SQLite สรุปตามโมเดล/การดำเนินการ/วัน
- **ส่วนติดต่อผู้ใช้ (UI)** — อินเตอร์เฟซหลายภาษา (รองรับมากกว่า 30 ภาษา รวมถึงภาษาจากขวาไปซ้าย), แบบอักษร, ...
- **โหมดเว็บ** — รองรับผู้ใช้หลายคน มีบทบาทผู้ดูแล; กุญแจ API อยู่ด้านเซิร์ฟเวอร์เท่านั้น ไม่ถูกเปิดเผยในเบราว์เซอร์
- **เดสก์ท็อป** — แอปพลิเคชัน Electron สำหรับ Windows และ Linux
- **จัดโฮสต์เอง** — รูปภาพ Docker สำหรับ amd64 และ arm64 (พร้อมใช้งานกับ Raspberry Pi)

หลังติดตั้งเรียบร้อยแล้ว โปรดดู **[คู่มือผู้ใช้](USER-GUIDE.th.md)** เพื่อดูคำอธิบายแบบละเอียดของทุกฟีเจอร์

<small>**อ่านเป็นภาษาอื่น:** [English (UK)](README.th.md) · [Português (BR)](README.pt-BR.md) · [العربية](README.ar.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [Hrvatski](README.hr.md) · [Čeština](README.cs.md) · [Nederlands](README.nl.md) · [English (US)](README.en-US.md) · [Filipino](README.tl.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [हिन्दी](README.hi.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [Basa Jawa](README.jv.md) · [한국어](README.ko.md) · [Bahasa Melayu](README.ms.md) · [فارسی](README.fa.md) · [Polski](README.pl.md) · [Português (PT)](README.pt.md) · [ਪੰਜਾਬੀ](README.pa.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [Slovenčina](README.sk.md) · [Español](README.es.md) · [Kiswahili](README.sw.md) · [Svenska](README.sv.md) · [తెలుగు](README.te.md) · [ภาษาไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Tiếng Việt](README.vi.md)</small>

<br/>

**หมายเหตุเกี่ยวกับการแปลส่วนติดต่อผู้ใช้และเอกสารประกอบ:** ภาษาอินเตอร์เฟซทั้งหมด ยกเว้นภาษาอังกฤษ (UK) ถูกแปลโดยใช้โมเดล AI คำแปลอาจคลาดเคลื่อนหรือมีข้อผิดพลาดได้

<a id="screenshots"></a>
## ภาพหน้าจอ

**ตัวเลือกภาษา**

![ตัวเลือกภาษา](../images/screenshots/th/language-selector.png)

**แปล**

![แปล](../images/screenshots/th/translate.png)

**แปลงรูปแบบ - ตัวแก้ไขคำแนะนำ**

![แปลงรูปแบบ - ตัวแก้ไขคำแนะนำ](../images/screenshots/th/transform-prompt-edit.png)

**แดชบอร์ด**

![แดชบอร์ดต้นทุน](../images/screenshots/th/dashboard-summary.png)

**ประวัติการใช้งาน**

![ประวัติการใช้งาน](../images/screenshots/th/history.png)

**การตั้งค่า - การเลือกโมเดล**

![การตั้งค่า - การเลือกโมเดล](../images/screenshots/th/settings-models.png)

<br/><br/>

<a id="table-of-contents"></a>

## สารบัญ

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [รวดเร็วในการเริ่มต้น](#quick-start)
- [การติดตั้ง](#installation)
  - [Windows (Electron)](#windows-electron)
  - [Linux (Electron)](#linux-electron)
  - [Docker](#docker)
- [การรับคีย์ OpenRouter API](#getting-an-openrouter-api-key)
- [การตั้งค่าและสภาพแวดล้อม](#configuration-and-environment)
- [การพัฒนาและสถาปัตยกรรม](#development-and-architecture)
- [รุ่นและแท็ก](#releases-and-tags)
- [การมีส่วนร่วม](#contributing)
- [ข้อจำกัดความรับผิดชอบ](#disclaimer)
- [ลิขสิทธิ์](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="quick-start"></a>
## รวดเร็วในการเริ่มต้น

**Docker (แนะนำสำหรับการโฮสต์เอง)**

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest

OPENROUTER_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

แทนที่ `sk-or-your-key` ด้วย [คีย์ OpenRouter API](https://openrouter.ai/keys) ของคุณ (หรือตั้งคีย์ผู้ให้บริการรายอื่น; ดู [การตั้งค่า](#configuration-and-environment)) เปิดที่ [http://localhost:5000](http://localhost:5000) และเปลี่ยนรหัสผ่านผู้ดูแลเริ่มต้นก่อนที่จะเปิดบริการให้เข้าถึงได้

<br/>

> ℹ️ **หมายเหตุ**<br/>
> ใน Docker ข้อมูลประจำตัว LLM ถูกตั้งผ่านตัวแปรสภาพแวดล้อม เช่น `OPENROUTER_KEY`, `OPENAI_KEY`, … (ไม่ใช่ในเว็บ UI) ส่วนบนเดสก์ท็อป (Electron) คุณตั้งค่าคีย์ใน **ตั้งค่า → API**

<br/>

**Windows**

ดาวน์โหลด `Transrewrt Setup x.y.z.exe` ล่าสุดจาก [รุ่นต่าง ๆ](https://github.com/wsj-br/transrewrt/releases) เรียกใช้ตัวติดตั้ง จากนั้นเปิดผ่านเมนูเริ่มต้นหรือทางลัดบนเดสก์ท็อป ป้อนคีย์ API ของคุณใน **ตั้งค่า → API** คุณจำเป็นต้องตั้งค่าผู้ให้บริการอย่างน้อยหนึ่งราย โดย OpenRouter มักนิยมใช้กับโมเดลฟรี

<br/>

**Linux**

ดาวน์โหลดไฟล์ `.AppImage` จาก [รุ่นต่าง ๆ](https://github.com/wsj-br/transrewrt/releases) แล้ว:

```bash
chmod +x Transrewrt-x.y.z.AppImage && ./Transrewrt-x.y.z.AppImage
```

ป้อนคีย์ API ของคุณใน **ตั้งค่า → API** คุณจำเป็นต้องตั้งค่าผู้ให้บริการอย่างน้อยหนึ่งราย โดย OpenRouter มักนิยมใช้กับโมเดลฟรี

ใน Debian/Ubuntu คุณอาจต้องติดตั้งส่วนประกอบเพิ่มเติมก่อน:

```bash
sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth
```

ดู [การติดตั้ง → Linux](#linux-electron) สำหรับรายละเอียดเพิ่มเติม

<br/>

> ℹ️ **หมายเหตุ**<br/>
> ปัจจุบันยังไม่รองรับ macOS Transrewrt ใช้งานได้กับ Windows, Linux และ Docker

<br/>

เมื่อเปิดแอปแล้ว ดู [คู่มือผู้ใช้](USER-GUIDE.th.md)** เพื่อเรียนรู้วิธีแปล แก้ไข และเปลี่ยนรูปแบบข้อความ การจัดการพรอมต์ และการตั้งค่าโมเดล

<br/><br/>

<a id="installation"></a>
## การติดตั้ง

<a id="windows-electron"></a>
### Windows (Electron)

- ดาวน์โหลดตัวติดตั้งล่าสุดจาก [รุ่นต่าง ๆ](https://github.com/wsj-br/transrewrt/releases)
- เรียกใช้ไฟล์ `.exe` และทำตามขั้นตอนการติดตั้ง
- ครั้งแรกที่รัน: เริ่มต้นแอปจากเมนูเริ่มต้นหรือทางลัดบนเดสก์ท็อป

<br/>

<a id="linux-electron"></a>
### Linux (Electron)

- ดาวน์โหลดไฟล์ `.AppImage` จาก [รุ่นต่าง ๆ](https://github.com/wsj-br/transrewrt/releases)
- เรียกใช้: `chmod +x Transrewrt-x.y.z.AppImage && ./Transrewrt-x.y.z.AppImage`
- ส่วนประกอบเพิ่มเติม (Debian/Ubuntu): `sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth`
- ดู [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) สำหรับข้อมูลเพิ่มเติม

<br/>

<a id="docker"></a>
### Docker

- ดึง: `docker pull ghcr.io/wsj-br/transrewrt:latest`
- ตั้งค่าคีย์ผู้ให้บริการอย่างน้อยหนึ่งคีย์ผ่านตัวแปรสภาพแวดล้อม (เช่น `OPENROUTER_KEY` สำหรับ OpenRouter) ผ่านตัวแปรด้วย `-e` หรือ `docker compose` / `.env` เพื่อไม่ให้ข้อมูลลับถูกบันทึกในอิมเมจ
- คีย์ผู้ให้บริการ **ไม่ได้** ป้อนผ่านเว็บ UI; เซิร์ฟเวอร์จะอ่านจากสภาพแวดล้อม

ตัวอย่าง - ปริมาณชื่อเพื่อคงข้อมูล (คีย์ OpenRouter ผ่าน env):

```bash
OPENROUTER_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

<br/>

| ตัวเลือก | คำอธิบาย |
| ------- | -------- |
| พอร์ต | `5000` (แมปด้วย `-p 5000:5000`) |
| ปริมาณ | ติดตั้ง `/app/data` เพื่อรักษาการตั้งค่าและฐานข้อมูล |
| ตัวแปรสภาพแวดล้อม | `PORT`, `CONFIG_PATH`, พร้อมคีย์ LLM (`OPENROUTER_KEY`, `OPENAI_KEY`, …) - ดู [การตั้งค่า](#configuration-and-environment) |

ในการสร้างและรันจากซอร์ส: `docker compose up --build -d` หรือ `pnpm docker:up` - ดู [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)

<br/><br/>

<a id="getting-an-openrouter-api-key"></a>

## วิธีรับคีย์ API ของ OpenRouter

Transrewrt รองรับผู้ให้บริการ AI หลายราย โดย [OpenRouter](https://openrouter.ai) เป็นตัวเลือกยอดนิยม เนื่องจากสามารถใช้งานโมเดลต่าง ๆ ได้หลากหลายภายใต้คีย์เดียว และยังมีโมเดลให้ใช้งานฟรี

1. สมัครสมาชิกหรือเข้าสู่ระบบที่ [openrouter.ai](https://openrouter.ai)
2. เข้าไปที่หน้า [Keys](https://openrouter.ai/keys) และสร้างคีย์ใหม่ (ตั้งชื่อและตั้งวงเงินเครดิตเพิ่มได้ตามต้องการ) โดยสามารถใช้โมเดลที่ให้บริการฟรีได้โดยไม่ต้องเติมเครดิต
3. **เวอร์ชันเดสก์ท็อป (Electron):** วางคีย์ที่ได้ในเมนู **การตั้งค่า → API** **Docker:** ตั้งค่าตัวแปรสภาพแวดล้อม เช่น `OPENROUTER_KEY` (ดูเพิ่มเติมที่ [เริ่มต้นอย่างรวดเร็ว](#quick-start))

นอกจากนี้ คุณยังสามารถใช้ผู้ให้บริการอื่น ๆ ได้ เช่น OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI หรือรันโมเดลบนเครื่องของคุณเองโดยใช้ [Ollama](https://ollama.com) ดูรายชื่อผู้ให้บริการที่รองรับและตัวแปรสภาพแวดล้อมทั้งหมดได้ที่หัวข้อ [การตั้งค่าและการกำหนดค่า](#configuration-and-environment)

สำหรับข้อมูลเพิ่มเติมเรื่องโควต้า การใช้ BYOK และอื่น ๆ ดูได้ที่ [การยืนยันตัวตนของ OpenRouter](https://openrouter.ai/docs/api/reference/authentication)

<br/><br/>

<a id="configuration-and-environment"></a>
## การตั้งค่าและการกำหนดค่า

**ตำแหน่งไฟล์การตั้งค่า**

| วิธีติดตั้ง         | ตำแหน่งไฟล์การตั้งค่า                                 |
| ------------------ | ------------------------------------------------- |
| Electron (Windows) | `%APPDATA%\transrewrt\`                           |
| Electron (Linux)   | `~/.config/transrewrt/`                           |
| เว็บ / Docker       | `/app/data/config.json` (ควรใช้ volume เพื่อเก็บข้อมูลถาวร) |

<br/>

**ตัวแปรสภาพแวดล้อม** (ใช้กับเว็บ/Docker เท่านั้น; เวอร์ชัน Electron ใช้ไฟล์การตั้งค่าในเครื่อง)

| ตัวแปร         | ค่าเริ่มต้น          | คำอธิบาย |
| ---------------- | ----------------------- | ----------- |
| `PORT`           | `5000`                  | พอร์ตที่เซิร์ฟเวอร์ใช้รับคำร้อง |
| `CONFIG_PATH`    | `/app/data/config.json` | เส้นทางไปยังไฟล์การตั้งค่า |
| `OPENROUTER_KEY` | *(ว่างเปล่า)*               | คีย์ API ของ OpenRouter |
| `OPENAI_KEY`     | *(ว่างเปล่า)*               | คีย์ API ของ OpenAI |
| `ANTHROPIC_KEY`  | *(ว่างเปล่า)*               | คีย์ API ของ Anthropic |
| `GOOGLE_KEY`     | *(ว่างเปล่า)*               | คีย์ API ของ Google Gemini |
| `DEEPSEEK_KEY`   | *(ว่างเปล่า)*               | คีย์ API ของ DeepSeek |
| `GROQ_KEY`       | *(ว่างเปล่า)*               | คีย์ API ของ Groq |
| `MISTRAL_KEY`    | *(ว่างเปล่า)*               | คีย์ API ของ Mistral |
| `OLLAMA_URL`     | *(ว่างเปล่า)*               | URL พื้นฐานของ Ollama (เช่น `http://host.docker.internal:11434`) |
| `XAI_KEY`        | *(ว่างเปล่า)*               | คีย์ API ของ xAI |

กรุณาตั้งค่าเฉพาะผู้ให้บริการที่คุณต้องการใช้งานเท่านั้น สำหรับโมเดล จะใช้ระบบชื่อที่ถูกจัดกลุ่มแยกกัน (`openrouter/…`, `openai/…`, `ollama/…`, เป็นต้น)

**การแสดงค่าใช้จ่าย:** OpenRouter จะส่งกลับค่าใช้จ่ายจริงเมื่อเหมาะสม ในขณะที่ผู้ให้บริการรายอื่นจะใช้ **ค่าประมาณการ** จากราคาโมเดลสาธารณะของ OpenRouter หากมีการกำหนดคีย์ OpenRouter ไว้ หากไม่มี ค่าใช้จ่ายจากผู้ให้บริการอื่นอาจแสดงเป็น `0` ทั้งนี้ ค่าประมาณการไม่ใช่ใบแจ้งหนี้

<br/>

**ข้อมูลและข้อมูลถาวร (Persistence):** สำหรับการใช้งานผ่าน Docker ควรสร้าง volume ที่ตำแหน่ง `/app/data` เพื่อให้ไฟล์ `config.json` และฐานข้อมูล SQLite ยังคงมีอยู่แม้จะรีสตาร์ทคอนเทนเนอร์ หากไม่ใช้ volume ข้อมูลทั้งหมดจะหายไปเมื่อคอนเทนเนอร์หยุดทำงาน

**สำหรับนักพัฒนา:** หลังจากดึงการเปลี่ยนแปลงที่เปลี่ยนโครงสร้างการตั้งค่าแบบคีย์เดิม ควรรีเซ็ตหรือรวมไฟล์ `data/config.json` ของคุณกับโครงสร้างเริ่มต้นใหม่จาก `src/config-defaults/config_default.json` หากไฟล์การตั้งค่าของคุณยังใช้ฟิลด์ที่ถูกลบไปแล้ว เช่น (`api_key`, `api_url`, ตัวเลือก proxy)

<br/>

**การยืนยันตัวตนสำหรับเว็บ:**

- ผู้ดูแลเริ่มต้น: `admin` / `transrewrt26`
- จัดการผู้ใช้ในเมนู **การตั้งค่า → ผู้ใช้**
- รีเซ็ตรหัสผ่าน: `docker exec <container> reset-web-password '<username>' '<new-password>'`  
  (หากรันจากซอร์ส: `pnpm run reset-web-password -- <username> <new-password>`)

<br/>

> ⚠️ **คำเตือน**<br/>
> กรุณาเปลี่ยนรหัสผ่านผู้ดูแลเริ่มต้นทันที สำหรับโฮสต์ใดก็ตามที่สามารถเข้าถึงได้ผ่านเครือข่าย

<br/>

ตัวเลือกการตั้งค่าหลัก (ฟอนต์ โมเดล ภาษา ฯลฯ) สามารถตั้งค่าได้ผ่านเมนูการตั้งค่าของแอปพลิเคชัน

<br/><br/>

<a id="development-and-architecture"></a>
## การพัฒนาและสถาปัตยกรรมของระบบ

- **การพัฒนา:** การติดตั้ง การสร้าง การทดสอบ และการปรับใช้ (Electron, Web, Docker) - ดูเพิ่มเติมที่ **[dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)**
- **ภาพรวมสถาปัตยกรรมและระบบ:** โครงสร้างโฟลเดอร์ เทคโนโลยีที่ใช้ และแนวทางการตัดสินใจในการออกแบบ - ดูเพิ่มเติมที่ **[dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)**

<br/><br/>

<a id="releases-and-tags"></a>

## การอัปเดตและป้ายกำกับ

- **ป้ายกำกับ Git** ที่ขึ้นต้นด้วย `v`* (เช่น `v1.0.10`) จะเป็นตัวเรียกใช้ [เวิร์กโฟลว์การเผยแพร่](.github/workflows/release.yml) **GitHub Releases** จะมีไฟล์ติดตั้งสำหรับ Windows (`.exe`) และ Linux AppImage แนบมาด้วย
- **ภาพ Docker** จะถูกเผยแพร่ไปยัง `ghcr.io/wsj-br/transrewrt` ชื่อป้ายกำกับของภาพจะตรงกับเวอร์ชัน Git (ตัวอย่างเช่น `v1.0.10` → `ghcr.io/wsj-br/transrewrt:1.0.10`) และเพิ่มเติมด้วย `latest` รองรับหลายสถาปัตยกรรม: `linux/amd64` และ `linux/arm64` (ตัวอย่างเช่น Raspberry Pi)

<br/><br/>

<a id="contributing"></a>
## การมีส่วนร่วม

1. โคลนที่เก็บ (repository)
2. สร้างสาขาสำหรับคุณลักษณะ: `git checkout -b feature/my-feature`
3. บันทึกการเปลี่ยนแปลงของคุณโดยมีข้อความอธิบายที่ชัดเจน
4. อัปโหลดและสร้างคำขอ Pull Request เข้าสู่สาขา `main`

กรุณาทำตามรูปแบบการเขียนโค้ดที่มีอยู่และทดสอบการเปลี่ยนแปลงของคุณในโหมด Electron และเว็บก่อนส่งดู [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) สำหรับคำแนะนำการสร้างและทดสอบ

<br/>

**รายงานปัญหา:** เปิดปัญหาที่ [GitHub](https://github.com/wsj-br/transrewrt/issues) โปรดระบุแพลตฟอร์มที่คุณใช้ (Windows / Linux / Docker) และรุ่นแอป (แสดงในหน้าต่างเกี่ยวกับหรือหน้า Releases)

<br/><br/>

<a id="disclaimer"></a>
## ข้อจำกัดความรับผิดชอบ

ชื่อผลิตภัณฑ์และไอคอนต่าง ๆ เป็นของเจ้าของที่เกี่ยวข้อง และใช้เพื่อจุดประสงค์ในการระบุตัวเท่านั้น ซอฟต์แวร์นี้ไม่มีความเกี่ยวข้องหรือได้รับการรับรองจากแบรนด์ใด ๆ ที่กล่าวถึง

<br/><br/>

<a id="license"></a>
## ใบอนุญาต

ลิขสิทธิ์ © 2026 Waldemar Scudeller Jr.

[Apache License 2.0](LICENSE)