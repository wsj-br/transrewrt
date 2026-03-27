---
translated_at: "2026-03-27T23:16:37.981Z"
source_hash: "076eff841a5f0e4f5c43a00dd28f2702bd2dde0602a830890285b5ffdc38ad5a"
source_mtime: "2026-03-27T20:34:13.877Z"
model: "qwen/qwen3-235b-a22b-2507"
---
<p align="center">
  <img src="../images/transrewrt_logo.svg" alt="โลโก้ Transrewrt" width="120" />
</p>

<h1 align="center">Transrewrt</h1>

<p align="center">
  <a href="https://github.com/wsj-br/transrewrt/releases"><img src="https://img.shields.io/badge/version-1.0.15-blue" alt="รุ่น"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-Apache%202.0-green" alt="ลิขสิทธิ์: Apache 2.0"></a>
  <img src="https://img.shields.io/badge/platform-Windows%20%7C%20Linux%20%7C%20Docker-lightgrey" alt="แพลตฟอร์ม">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react" alt="React 19">
  <img src="https://img.shields.io/badge/Electron-41-47848F?logo=electron" alt="Electron 41">
</p>

เครื่องมือข้อความที่ขับเคลื่อนด้วยปัญญาประดิษฐ์: แปลภาษา ปรับข้อความในรูปแบบต่าง ๆ และแปลงโดยใช้พร้อมต์ที่กำหนดเองได้ — รองรับผู้ให้บริการ AI หลายราย (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI และ Ollama แบบท้องถิ่น) ใช้งานได้ทั้งในฐานะแอปเดสก์ท็อป (Electron) หรือแอปเว็บแบบโฮสต์เอง (Docker)

- **แปลภาษา** — ระหว่างภาษาต่าง ๆ กว่าหลายสิบภาษา พร้อมตรวจจับภาษาต้นทางอัตโนมัติ
- **เขียนใหม่** — แก้ไขไวยากรณ์ เพิ่มความชัดเจน ปรับเป็นสำนวนทางการ/ไม่เป็นทางการ ย่อ ขยาย หรือปรับให้ดูเป็นทางเทคนิค
- **แปลง** — ใช้พร้อมต์ AI ที่สร้างเองได้; จัดการและจัดเก็บพร้อมต์ ตั้งภาษาปลายทางได้ต่อพร้อมต์
- **ประวัติการใช้งาน** — บันทึกเต็มรูปแบบจากการป้อนและแสดงผลข้อความ เรียงลำดับ ค้นหา และส่งออกข้อมูลได้
- **โมเดลและต้นทุน** — เลือกใช้โมเดลจากรายที่ตั้งค่าไว้; แสดงแดชบอร์ดค่าใช้จ่ายและการใช้งาน พร้อมบันทึกย่อ สรุปตามโมเดล/คำสั่ง/วัน
- **อินเตอร์เฟซผู้ใช้ (UI)** — รองรับหลายภาษา (มากกว่า 30 ภาษา) รองรับภาษาเขียนจากขวาไปซ้าย, ตัวอักษร, ...
- **โหมดเว็บ** — รองรับการใช้งานหลายคน พร้อมบทบาทผู้ดูแลระบบ
- **เดสก์ท็อป** — แอปพลิเคชันบน Electron สำหรับ Windows และ Linux
- **โฮสต์เอง** — รูปภาพ Docker สำหรับ amd64 & arm64 (ใช้งานกับ Raspberry Pi ได้)

หลังติดตั้งเสร็จแล้ว โปรดดู **[คู่มือผู้ใช้](USER-GUIDE.th.md)** เพื่อรับทราบรายละเอียดทั้งหมดของฟีเจอร์ทุกอย่าง

<small>**อ่านเป็นภาษาอื่น ๆ ได้ที่:** </small>
<small id="lang-list"> [English (UK)](../README.md) · [Português (BR)](README.pt-BR.md) · [العربية](README.ar.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [Hrvatski](README.hr.md) · [Čeština](README.cs.md) · [Nederlands](README.nl.md) · [English (US)](README.en-US.md) · [Filipino](README.tl.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [हिन्दी](README.hi.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [Basa Jawa](README.jv.md) · [한국어](README.ko.md) · [Bahasa Melayu](README.ms.md) · [فارسی](README.fa.md) · [Polski](README.pl.md) · [Português (PT)](README.pt.md) · [ਪੰਜਾਬੀ](README.pa.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [Slovenčina](README.sk.md) · [Español](README.es.md) · [Kiswahili](README.sw.md) · [Svenska](README.sv.md) · [తెలుగు](README.te.md) · [ภาษาไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Tiếng Việt](README.vi.md)</small>

<small>

> **หมายเหตุเกี่ยวกับการแปลอินเตอร์เฟซและเอกสาร:** ภาษาอินเตอร์เฟซทั้งหมดยกเว้นภาษาอังกฤษ (UK) ต้นฉบับ
> ได้รับการแปลโดยใช้โมเดล AI ดังนั้นถ้อยคำอาจคลาดเคลื่อนหรือมีข้อผิดพลาด

</small>

<br/>

<a id="screenshots"></a>

## ภาพหน้าจอ

**ตัวเลือกภาษา**

![ตัวเลือกภาษา](../images/screenshots/th/language-selector.png)

**แปล**

![แปล](../images/screenshots/th/translate.png)

**แปลง - ตัวแก้ไขพรอมต์**

![แปลง - ตัวแก้ไขพรอมต์](../images/screenshots/th/transform-prompt-edit.png)

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

- [เริ่มต้นอย่างรวดเร็ว](#quick-start)
- [การติดตั้ง](#installation)
  - [Windows (Electron)](#windows-electron)
  - [Linux (Electron)](#linux-electron)
  - [Docker](#docker)
- [การรับคีย์ API ของ OpenRouter](#getting-an-openrouter-api-key)
- [การตั้งค่าและการกำหนดสภาพแวดล้อม](#configuration-and-environment)
- [การพัฒนาและสถาปัตยกรรม](#development-and-architecture)
- [รีลีสและแท็ก](#releases-and-tags)
- [การมีส่วนร่วม](#contributing)
- [ข้อจำกัดความรับผิดชอบ](#disclaimer)
- [สัญญาอนุญาต](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="quick-start"></a>

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

แทนที่ `sk-or-your-key` ด้วย [คีย์ API ของ OpenRouter](https://openrouter.ai/keys) ของคุณ (หรือตั้งคีย์ของผู้ให้บริการรายอื่น; ดู [การตั้งค่าและสภาพแวดล้อม](#configuration-and-environment)) เปิด [http://localhost:5000](http://localhost:5000) และเปลี่ยนรหัสผ่านผู้ดูแลระบบเริ่มต้นก่อนที่จะเปิดเผยบริการนี้ให้ภายนอกใช้งาน

<br/>

> ℹ️ **บันทึก**<br/>
> ในระบบที่ใช้ Docker ข้อมูลรับรองของโมเดลภาษา (LLM) ต้องตั้งผ่านตัวแปรสภาพแวดล้อม เช่น `OPENROUTER_API_KEY`, `OPENAI_API_KEY`, `CEREBRAS_API_KEY`, … (ไม่ใช่ผ่านเว็บยูไอ) ส่วนบนเดสก์ท็อป (Electron) คุณตั้งค่าคีย์ผ่านเมนู **การตั้งค่า → API**

<br/>

**Windows**

ดาวน์โหลดไฟล์ `Transrewrt Setup x.y.z.exe` เวอร์ชันล่าสุดจาก [การเผยแพร่](https://github.com/wsj-br/transrewrt/releases) รันตัวติดตั้ง จากนั้นเปิดโปรแกรมผ่านเมนูเริ่มต้นหรือทางลัดบนเดสก์ท็อป ป้อนคีย์ API ของคุณในส่วน **การตั้งค่า → API** คุณจำเป็นต้องตั้งค่าผู้ให้บริการอย่างน้อยหนึ่งราย โดย OpenRouter มักใช้กันสำหรับโมเดลที่ให้บริการฟรี

<br/>

**Linux**

ดาวน์โหลดไฟล์ `.AppImage` ที่เหมาะสมกับซีพียูของคุณจาก [การเผยแพร่](https://github.com/wsj-br/transrewrt/releases) (`x64` ใช้กับพีซีทั่วไป, `arm64` สำหรับอุปกรณ์ ARM หลายรุ่นรวมถึง Raspberry Pi 4 ขึ้นไป) จากนั้น:

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

ป้อนคีย์ API ของคุณในส่วน **การตั้งค่า → API** คุณจำเป็นต้องตั้งค่าผู้ให้บริการอย่างน้อยหนึ่งราย โดย OpenRouter มักใช้กันสำหรับโมเดลที่ให้บริการฟรี

ในระบบที่ใช้ Debian/Ubuntu คุณอาจต้องติดตั้งไลบรารีเพิ่มเติมก่อน:

```bash
sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth
```

ดูรายละเอียดเพิ่มเติมที่ [การติดตั้ง → Linux](#linux-electron)

<br/>

> ℹ️ **บันทึก**<br/>
> ขณะนี้ยังไม่รองรับ macOS Transrewrt มีให้ใช้งานกับ Windows, Linux และ Docker

<br/>

เมื่อแอปพลิเคชันเริ่มทำงานแล้ว โปรดดูที่ **[คู่มือผู้ใช้](USER-GUIDE.th.md)** เพื่อเรียนรู้วิธีการแปล เขียนใหม่ และแปลงข้อความ จัดการพรอมต์ และตั้งค่าโมเดล

<br/><br/>

<a id="installation"></a>

## การติดตั้ง

<a id="windows-electron"></a>
### วินโดวส์ (Electron)

- ดาวน์โหลดตัวติดตั้งรุ่นล่าสุดจาก [Releases](https://github.com/wsj-br/transrewrt/releases)
- รันไฟล์ `.exe` แล้วทำตามขั้นตอนในตัวติดตั้ง
- การรันครั้งแรก: เริ่มต้นแอปพลิเคชันจากเมนู Start หรือทางลัดบนเดสก์ท็อป

<br/>

<a id="linux-electron"></a>
### ลินุกซ์ (Electron)

- ดาวน์โหลดไฟล์ `.AppImage` ที่ตรงกับระบบของคุณ (`x64` หรือ `arm64`) จาก [Releases](https://github.com/wsj-br/transrewrt/releases)
- รันคำสั่ง: `chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage` บน x86_64/amd64 หรือใช้ชื่อไฟล์ `...-arm64.AppImage` บน ARM64
- แพคเกจเสริม (Debian/Ubuntu): `sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth`
- ดูเพิ่มเติมได้ที่ [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)

<br/>

<a id="docker"></a>
### Docker

- ดึงภาพ: `docker pull ghcr.io/wsj-br/transrewrt:latest`
- ตั้งค่าอย่างน้อยหนึ่งคีย์ของผู้ให้บริการผ่าน environment (ตัวอย่างเช่น `OPENROUTER_API_KEY` สำหรับ OpenRouter) ผ่านตัวแปรด้วย `-e` หรือใช้ `docker compose` / `.env` เพื่อไม่ให้รหัสลับถูกฝังลงในภาพ
- คีย์ของผู้ให้บริการจะ **ไม่** ถูกป้อนในเว็บ UI; เซิร์ฟเวอร์จะอ่านค่าจาก environment โดยตรง

ตัวอย่าง - ใช้ named volume เพื่อเก็บข้อมูลถาวร (ใช้คีย์ OpenRouter ผ่าน env):

```bash
OPENROUTER_API_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_API_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

หรือถ้าคุณต้องการใช้ Docker Compose ให้ใช้:

# ดาวน์โหลดไฟล์ compose
wget https://github.com/wsj-br/transrewrt/raw/refs/heads/master/production.yml -O transrewrt.yml
# แก้ไขไฟล์เพื่อเพิ่ม API_KEYS
vi transrewrt.yml
# เริ่มต้นคอนเทนเนอร์
docker compose -f transrewrt.yml up -d
```

<br/>

| ตัวเลือก   | รายละเอียด                                                                                                                            |
|----------|----------------------------------------------------------------------------------------------------------------------------------------|
| พอร์ต     | `5000` (แมปกับ `-p 5000:5000`)                                                                                                       |
| เล่มข้อมูล (Volume)   | ติดตั้ง (Mount) `/app/data` สำหรับการเก็บรักษาค่าการตั้งค่าและฐานข้อมูล                                                                                  |
| ตัวแปรสภาพแวดล้อม | `PORT`, `CONFIG_PATH`, รวมถึงกุญแจ LLM (`OPENROUTER_API_KEY`, `OPENAI_API_KEY`, …) - ดู [การกำหนดค่า](#configuration-and-environment) |

ในการสร้างและเรียกใช้จากซอร์ส: `docker compose up --build -d` หรือ `pnpm docker:up` - ดูที่ [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)

<br/><br/>

<a id="getting-an-openrouter-api-key"></a>

## วิธีรับคีย์ API จาก OpenRouter

Transrewrt รองรับผู้ให้บริการ AI หลายราย [OpenRouter](https://openrouter.ai) เป็นตัวเลือกยอดนิยม เพราะรวมโมเดลหลายตัวภายใต้คีย์เดียวและมีโมเดลให้ใช้งานฟรี

1. ลงทะเบียนหรือเข้าสู่ระบบที่ [openrouter.ai](https://openrouter.ai)  
2. เข้าไปที่หน้า [Keys](https://openrouter.ai/keys) และสร้างคีย์ใหม่ (ตั้งชื่อได้ และตั้งวงเงินค่าใช้จ่ายได้ตามต้องการ) คุณสามารถใช้โมเดลฟรีได้โดยไม่ต้องเติมเงิน  
3. **เดสก์ท็อป (Electron):** วางคีย์ในส่วน **Settings → API** **Docker:** ตั้งค่าตัวแปรสภาพแวดล้อม เช่น `OPENROUTER_API_KEY` (ดูรายละเอียดที่ [เริ่มต้นใช้งานอย่างรวดเร็ว](#quick-start))

ห้ามใช้โมเดล **Body Builder** ของ OpenRouter ([`openrouter/bodybuilder`](https://openrouter.ai/openrouter/bodybuilder)) สำหรับงานแปล เขียนใหม่ หรือแปลงข้อความ เพราะจะคืนผลลัพธ์เป็น payload JSON แทนข้อความที่ประมวลผลเสร็จเรียบร้อยสำหรับงานดังกล่าว ดูรายละเอียดเพิ่มเติมได้ที่ [Settings → Models](USER-GUIDE.th.md#models) ในคู่มือผู้ใช้

คุณยังสามารถใช้ผู้ให้บริการรายอื่น เช่น OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras หรือเรียกใช้โมเดลในเครื่องด้วย [Ollama](https://ollama.com) ดูรายชื่อผู้ให้บริการทั้งหมดและตัวแปรสภาพแวดล้อมได้ที่ [Configuration](#configuration-and-environment)

> ⚠️ **คำเตือน**<br/>
> ถ้าคุณใช้งาน Ollama จากอุปกรณ์ คอนเทนเนอร์ หรือบริการอื่น อย่าลืมตั้งค่า Ollama ให้อนุญาตการเชื่อมต่อจากภายนอก (ไม่จำกัดเฉพาะ localhost)

สำหรับข้อมูลเพิ่มเติมเกี่ยวกับขีดจำกัด, การนำคีย์มาใช้ (BYOK) ฯลฯ ดูที่ [OpenRouter authentication](https://openrouter.ai/docs/api/reference/authentication)

<br/><br/>

<a id="configuration-and-environment"></a>

## การกำหนดค่าและสภาพแวดล้อม

**ตำแหน่งไฟล์กำหนดค่า**

| การติดตั้ง | ตำแหน่งไฟล์กำหนดค่า |
| ------------------ | ------------------------------------------------- |
| Electron (Windows) | `%APPDATA%\transrewrt\`                           |
| Electron (Linux)   | `~/.config/transrewrt/`                           |
| Web / Docker       | `/app/data/config.json` (ใช้ volume เพื่อเก็บข้อมูลถาวร) |

<br/>

**ตัวแปรสภาพแวดล้อม** (สำหรับ Web/Docker เท่านั้น; Electron ใช้ไฟล์กำหนดค้าท้องถิ่น)

| ตัวแปร | ค่าเริ่มต้น | คำอธิบาย |
| ---------------- | ----------------------- | ----------- |
| `PORT`           | `5000`                  | พอร์ตที่เซิร์ฟเวอร์ใช้ฟัง |
| `CONFIG_PATH`    | `/app/data/config.json` | เส้นทางไปยังไฟล์กำหนดค่า |
| `OPENROUTER_API_KEY` | *(ว่าง)*               | รหัส API สำหรับ OpenRouter |
| `OPENAI_API_KEY`     | *(ว่าง)*               | รหัส API สำหรับ OpenAI |
| `CEREBRAS_API_KEY`   | *(ว่าง)*               | รหัส API สำหรับ Cerebras |
| `ANTHROPIC_API_KEY`  | *(ว่าง)*               | รหัส API สำหรับ Anthropic |
| `GOOGLE_API_KEY`     | *(ว่าง)*               | รหัส API สำหรับ Google Gemini |
| `DEEPSEEK_API_KEY`   | *(ว่าง)*               | รหัส API สำหรับ DeepSeek |
| `GROQ_API_KEY`       | *(ว่าง)*               | รหัส API สำหรับ Groq |
| `MISTRAL_API_KEY`    | *(ว่าง)*               | รหัส API สำหรับ Mistral |
| `OLLAMA_URL`     | *(ว่าง)*               | URL พื้นฐานของ Ollama (เช่น `http://host.docker.internal:11434`) |
| `XAI_API_KEY`        | *(ว่าง)*               | รหัส API สำหรับ xAI |

ให้กำหนดค่าเฉพาะผู้ให้บริการที่ท่านใช้งานเท่านั้น ชื่อโมเดลจะถูกจัดอยู่ใน namespace (`openrouter/…`, `openai/…`, `cerebras/…`, `ollama/…`, ฯลฯ)

**การแสดงค่าใช้จ่าย:** OpenRouter จะแสดงต้นทุนที่ถูกเรียกเก็บจริงหากมีข้อมูล ในกรณีผู้ให้บริการอื่น จะใช้ค่าใช้จ่าย **โดยประมาณ** จากอัตราค่าบริการโมเดลแบบสาธารณะของ OpenRouter เมื่อมีการตั้งค่า OpenRouter key ไว้ หากไม่มี key นี้ ต้นทุนของผู้ให้บริการที่ไม่ใช่ OpenRouter อาจแสดงเป็น `0` โดยต้นทุนที่ประมาณนี้ไม่ใช่ใบแจ้งหนี้

<br/>

**ข้อมูลและการเก็บข้อมูลถาวร:** สำหรับ Docker ให้ตั้ง volume ไว้ที่ `/app/data` เพื่อให้ไฟล์ `config.json` และฐานข้อมูล SQLite ยังคงมีอยู่หลังจากที่ container รีสตาร์ท หากไม่มี volume ข้อมูลทั้งหมดจะสูญหายเมื่อ container หยุดทำงาน

**นักพัฒนา:** หลังจากดึงการเปลี่ยนแปลงที่เลิกใช้ไฟล์ config แบบใช้กุญแจเดิม ให้รีเซ็ตหรือผสานรวม `data/config.json` เข้ากับโครงสร้างตัวอย่างใหม่ใน `src/config-defaults/config_default.json` หากไฟล์ท้องถิ่นของคุณยังใช้ฟิลด์ที่ถูกลบไปแล้ว (`api_key`, `api_url`, ตัวเลือก proxy)

<br/>

**การพิสูจน์ตัวตนเว็บไซต์:**

- ผู้ดูแลระบบเริ่มต้น: `admin` / `transrewrt26`
- จัดการผู้ใช้ได้ที่ **ตั้งค่า → ผู้ใช้**
- ตั้งรหัสผ่านใหม่ได้โดย: `docker exec <container> reset-web-password '<username>' '<new-password>'`
  (จากต้นทาง: `pnpm run reset-web-password -- <username> <new-password>`)

<br/>

> ⚠️ **คำเตือน**<br/>
> กรุณาเปลี่ยนรหัสผ่านผู้ดูแลระบบเริ่มต้นโดยทันที หากใช้ในโฮสต์ที่สามารถเข้าถึงผ่านเครือข่าย

<br/>

ตั้งค่าพื้นฐาน (แบบอักษร โมเดล ภาษา ฯลฯ) สามารถตั้งค่าได้ผ่านเมนูการตั้งค่าภายในแอปพลิเคชัน

<br/><br/>

<a id="development-and-architecture"></a>

## การพัฒนาและการออกแบบระบบ

- **การพัฒนา:** การตั้งค่า การสร้าง การทดสอบ และการนำออกใช้ (Electron, Web, Docker) - ดูที่ **[dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)**  
- **ภาพรวมของสถาปัตยกรรมและระบบ:** โครงสร้างโฟลเดอร์ ชุดเทคโนโลยี และการตัดสินใจด้านการออกแบบ - ดูที่ **[dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)**

<br/><br/>

<a id="releases-and-tags"></a>
## เวอร์ชันที่เผยแพร่และแท็ก

- **แท็ก Git** `v`* (เช่น `v1.0.10`) จะเปิดใช้ [ชุดขั้นตอนการเผยแพร่](.github/workflows/release.yml) **GitHub Releases** จะแนบติดตั้งสำหรับ Windows (`.exe`) และ AppImages สำหรับ Linux (**x64** และ **arm64**)  
- **อิมเมจ Docker** จะถูกเผยแพร่ไปยัง `ghcr.io/wsj-br/transrewrt` ชื่อแท็กของอิมเมจจะตรงกับเวอร์ชันของ Git (เช่น `v1.0.10` → `ghcr.io/wsj-br/transrewrt:1.0.10`) พร้อมกับแท็ก `latest` รองรับหลายแพลตฟอร์ม: `linux/amd64` และ `linux/arm64` (เช่น Raspberry Pi)

<br/><br/>

<a id="contributing"></a>
## การมีส่วนร่วม

1. Fork เครื่องเสมือน (repository)  
2. สร้าง branch สำหรับฟีเจอร์: `git checkout -b feature/my-feature`  
3. Commit การเปลี่ยนแปลงของคุณพร้อมข้อความที่ชัดเจน  
4. Push แล้วสร้าง Pull Request เข้าสู่ `main`  

โปรดปฏิบัติตามรูปแบบการเขียนโค้ดที่มีอยู่ และทดสอบการเปลี่ยนแปลงของคุณทั้งในโหมด Electron และเว็บก่อนส่ง ดูที่ [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) สำหรับคำแนะนำการสร้างและการทดสอบ

<br/>

**การรายงานปัญหา:** เปิดรายงานปัญหาผ่าน [GitHub](https://github.com/wsj-br/transrewrt/issues) โปรดระบุแพลตฟอร์มที่คุณใช้ (Windows / Linux / Docker) และรุ่นของแอป (แสดงในหน้าต่างเกี่ยวกับ/About หรือในหน้า Releases)

<br/><br/>

<a id="disclaimer"></a>

## ข้อจำกัดความรับผิดชอบ

ชื่อผลิตภัณฑ์และไอคอนเป็นของเจ้าของที่เกี่ยวข้อง และใช้เพื่อจุดประสงค์ในการระบุตัวตนเท่านั้น ซอฟต์แวร์นี้ไม่มีความเกี่ยวข้องหรือไม่ได้รับการรับรองจากยี่ห้อที่กล่าวถึงแต่อย่างใด

<br/><br/>

<a id="license"></a>
## ใบอนุญาต

ลิขสิทธิ์ © 2026 วัลเดอมาร์ สกูเดลเลอร์ จูเนียร์

[ใบอนุญาต Apache รุ่น 2.0](LICENSE)