---
translated_at: "2026-03-25T22:44:09.391Z"
source_hash: "7b3703140b5006a6bfb0700c530b1afcc6e9b0fc364d69c57960ab4609dccbd9"
source_mtime: 1774475429145.525
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

เครื่องมือข้อความที่ขับเคลื่อนด้วยปัญญาประดิษฐ์: แปลภาษา ปรับแต่งข้อความในรูปแบบต่าง ๆ และเปลี่ยนรูปแบบด้วยพรอมต์ที่กำหนดเอง — โดยใช้บริการปัญญาประดิษฐ์หลายตัว (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI และ Ollama แบบท้องถิ่น) สามารถใช้งานได้ทั้งในรูปแบบแอปพลิเคชันสำหรับเดสก์ท็อป (Electron) หรือเว็บแอปพลิเคชันที่ติดตั้งเอง (Docker)

- **แปล** — ระหว่างหลายสิบภาษา พร้อมการตรวจจับภาษาที่ส่งมาโดยอัตโนมัติ
- **ปรับแต่งใหม่** — แก้ไขไวยากรณ์ พัฒนาความชัดเจน ปรับเป็นรูปทางการหรือไม่เป็นทางการ ย่อหรือขยายข้อความ เปลี่ยนเป็นลักษณะทางเทคนิค
- **เปลี่ยนรูปแบบ** — พรอมต์ AI ที่กำหนดเอง สร้างและจัดการพรอมต์ได้ เลือกภาษาปลายทางต่อแต่ละพรอมต์ได้
- **ประวัติการใช้งาน** — บันทึกรายละเอียดการใช้ทั้งหมด ทั้งข้อความต้นฉบับและผลลัพธ์ พร้อมการกรองและการส่งออกข้อมูล
- **โมเดลและค่าใช้จ่าย** — เลือกโมเดลจากผู้ให้บริการที่ตั้งค่าไว้ เครื่องมือติดตามค่าใช้จ่ายและการใช้งาน พร้อมบันทึก การสรุปตามโมเดล/การดำเนินการ/รายวัน
- **อินเทอร์เฟซผู้ใช้** — อินเทอร์เฟซหลายภาษา (มากกว่า 30 ภาษา รองรับภาษาที่เขียนจากขวาไปซ้าย), แบบอักษร, ...
- **โหมดเว็บ** — รองรับผู้ใช้หลายคน พร้อมบทบาทผู้ดูแลระบบ
- **เดสก์ท็อป** — แอปพลิเคชัน Electron สำหรับ Windows และ Linux
- **ติดตั้งเอง (Self-hosted)** — รูปภาพ Docker สำหรับ amd64 และ arm64 (ใช้งานกับ Raspberry Pi ได้)

เมื่อติดตั้งเรียบร้อยแล้ว โปรดดู **[คู่มือผู้ใช้](USER-GUIDE.th.md)** เพื่อดูคำแนะนำการใช้คุณสมบัติทั้งหมดอย่างละเอียด

<small>**อ่านเอกสารในภาษาอื่น ๆ:** [English (UK)](README.th.md) · [Português (BR)](README.pt-BR.md) · [العربية](README.ar.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [Hrvatski](README.hr.md) · [Čeština](README.cs.md) · [Nederlands](README.nl.md) · [English (US)](README.en-US.md) · [Filipino](README.tl.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [हिन्दी](README.hi.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [Basa Jawa](README.jv.md) · [한국어](README.ko.md) · [Bahasa Melayu](README.ms.md) · [فارسی](README.fa.md) · [Polski](README.pl.md) · [Português (PT)](README.pt.md) · [ਪੰਜਾਬੀ](README.pa.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [Slovenčina](README.sk.md) · [Español](README.es.md) · [Kiswahili](README.sw.md) · [Svenska](README.sv.md) · [తెలుగు](README.te.md) · [ภาษาไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Tiếng Việt](README.vi.md)</small>

<small>

> **หมายเหตุเกี่ยวกับการแปลอินเทอร์เฟซและเอกสาร**: ภาษาทั้งหมดของอินเทอร์เฟซเว้นแต่ภาษาต้นฉบับ (ภาษาอังกฤษแบบอังกฤษ) นั้นได้รับการแปลด้วยโมเดล AI การใช้ถ้อยคำจึงอาจจะไม่แม่นยำหรืออาจมีข้อผิดพลาดได้

</small>

<br/>

<a id="screenshots"></a>
## ภาพตัวอย่าง

**ตัวเลือกภาษา**

![ตัวเลือกภาษา](../images/screenshots/th/language-selector.png)

**แปล**

![แปล](../images/screenshots/th/translate.png)

**เปลี่ยนรูปแบบ - ตัวแก้ไขพรอมต์**

![เปลี่ยนรูปแบบ - ตัวแก้ไขพรอมต์](../images/screenshots/th/transform-prompt-edit.png)

**แดชบอร์ด**

![แดชบอร์ดค่าใช้จ่าย](../images/screenshots/th/dashboard-summary.png)

**ประวัติการใช้งาน**

![ประวัติการใช้งาน](../images/screenshots/th/history.png)

**การตั้งค่า - การเลือกโมเดล**

![การตั้งค่า - การเลือกโมเดล](../images/screenshots/th/settings-models.png)

<br/><br/>

<a id="table-of-contents"></a>

## สารบัญ

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [เริ่มใช้งานอย่างรวดเร็ว](#เริ่มใช้งานอย่างรวดเร็ว)
- [ติดตั้ง](#ติดตั้ง)
  - [Windows (Electron)](#windows-electron)
  - [Linux (Electron)](#linux-electron)
  - [Docker](#docker)
- [การรับคีย์ API จาก OpenRouter](#การรับคีย์-api-จาก-openrouter)
- [การตั้งค่าและสภาพแวดล้อม](#การตั้งค่าและสภาพแวดล้อม)
- [การพัฒนาและสถาปัตยกรรม](#การพัฒนาและสถาปัตยกรรม)
- [การปล่อยและแท็ก](#การปล่อยและแท็ก)
- [การมีส่วนร่วม](#การมีส่วนร่วม)
- [ข้อจำกัดความรับผิดชอบ](#ข้อจำกัดความรับผิดชอบ)
- [ลิขสิทธิ์](#ลิขสิทธิ์)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="quick-start"></a>
## เริ่มใช้งานอย่างรวดเร็ว

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

เปลี่ยน `sk-or-your-key` เป็น [คีย์ API ของ OpenRouter](https://openrouter.ai/keys) ของคุณ (หรือตั้งค่าคีย์ผู้ให้บริการรายอื่น ดูได้ที่ [การตั้งค่า](#การตั้งค่าและสภาพแวดล้อม)) เปิด [http://localhost:5000](http://localhost:5000) และเปลี่ยนรหัสผ่านผู้ดูแลระบบเริ่มต้นก่อนที่จะเปิดการใช้งานในเครือข่าย

<br/>

> ℹ️ **หมายเหตุ**<br/>
> ใน Docker การรับรองตัวตนของ LLM จะตั้งค่าผ่านตัวแปรสภาพแวดล้อม เช่น `OPENROUTER_KEY`, `OPENAI_KEY`, `CEREBRAS_KEY`, ... (ไม่ใช่ในเว็บ UI) สำหรับเดสก์ท็อป (Electron) ให้ตั้งค่าคีย์ใน **การตั้งค่า → API**

<br/>

**Windows**

ดาวน์โหลด `Transrewrt Setup x.y.z.exe` เวอร์ชันล่าสุดได้ที่ [การปล่อย](https://github.com/wsj-br/transrewrt/releases) รันโปรแกรมติดตั้ง แล้วเปิดแอปพลิเคชันจากเมนูเริ่มหรือทางลัดบนเดสก์ท็อป ใส่คีย์ API ของคุณที่ **การตั้งค่า → API** คุณจำเป็นต้องตั้งค่าผู้ให้บริการอย่างน้อยหนึ่งราย โดย OpenRouter มักใช้บ่อยสำหรับโมเดลฟรี

<br/>

**Linux**

ดาวน์โหลด `.AppImage` ที่สอดคล้องกับซีพียูของคุณได้ที่ [การปล่อย](https://github.com/wsj-br/transrewrt/releases) (`x64` สำหรับพีซีทั่วไป, `arm64` สำหรับอุปกรณ์ ARM ส่วนใหญ่ เช่น Raspberry Pi 4+) จากนั้น:

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

ใส่คีย์ API ของคุณที่ **การตั้งค่า → API** คุณจำเป็นต้องตั้งค่าผู้ให้บริการอย่างน้อยหนึ่งราย โดย OpenRouter มักใช้บ่อยสำหรับโมเดลฟรี

ใน Debian/Ubuntu คุณอาจต้องติดตั้งไลบรารีเพิ่มเติมก่อน:

```bash
sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth
```

ดูรายละเอียดที่ [ติดตั้ง → Linux](#linux-electron)

<br/>

> ℹ️ **หมายเหตุ**<br/>
> ขณะนี้ไม่รองรับ macOS Transrewrt พร้อมใช้งานกับ Windows, Linux และ Docker เท่านั้น

<br/>

เมื่อแอปพลิเคชันทำงานแล้ว โปรดดู **[คู่มือผู้ใช้](USER-GUIDE.th.md)** เพื่อเรียนรู้วิธีแปล ปรับเขียน และเปลี่ยนแปลงข้อความ จัดการพรอมต์ และตั้งค่าโมเดล

<br/><br/>

<a id="installation"></a>
## ติดตั้ง

<a id="windows-electron"></a>
### Windows (Electron)

- ดาวน์โหลดตัวติดตั้งรุ่นล่าสุดได้ที่ [การปล่อย](https://github.com/wsj-br/transrewrt/releases)
- รันไฟล์ `.exe` และทำตามขั้นตอนติดตั้ง
- ครั้งแรกที่รัน: เริ่มต้นแอปจากเมนูเริ่มหรือทางลัดบนเดสก์ท็อป

<br/>

<a id="linux-electron"></a>
### Linux (Electron)

- ดาวน์โหลด `.AppImage` ที่ตรงกัน (`x64` หรือ `arm64`) จาก [การปล่อย](https://github.com/wsj-br/transrewrt/releases)
- รันคำสั่ง: `chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage` สำหรับ x86_64/amd64 หรือใช้ไฟล์ชื่อ `...-arm64.AppImage` สำหรับ ARM64
- ไลบรารีเพิ่มเติม (Debian/Ubuntu): `sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth`
- ดู [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) เพิ่มเติม

<br/>

<a id="docker"></a>
### Docker

- ดึง: `docker pull ghcr.io/wsj-br/transrewrt:latest`
- ตั้งค่าอย่างน้อยหนึ่งคีย์ผู้ให้บริการผ่านตัวแปรสภาพแวดล้อม (เช่น `OPENROUTER_KEY` สำหรับ OpenRouter) ผ่านตัวแปรด้วย `-e` หรือใช้ `docker compose` / `.env` เพื่อไม่ให้ข้อมูลลับถูกเก็บไว้ในอิมเมจ
- คีย์ผู้ให้บริการจะ **ไม่** ใส่ในเว็บ UI; ตัวเซิร์ฟเวอร์จะอ่านจากสภาพแวดล้อม

ตัวอย่าง - ใช้ volume ที่ตั้งชื่อเพื่อเก็บข้อมูลคงที่ (คีย์ OpenRouter ผ่าน env):

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
| Port     | `5000` (แมปกับ `-p 5000:5000`)                                                                              |
| Volume   | เชื่อม `/app/data` เพื่อคงการตั้งค่าและฐานข้อมูล                                                            |
| ตัวแปรสภาพแวดล้อม | `PORT`, `CONFIG_PATH`, รวมทั้งคีย์ LLM (`OPENROUTER_KEY`, `OPENAI_KEY`, …) - ดู [การตั้งค่า](#การตั้งค่าและสภาพแวดล้อม) |

เพื่อสร้างและรันจากต้นฉบับ: `docker compose up --build -d` หรือ `pnpm docker:up` - ดูที่ [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)

<br/><br/>

<a id="getting-an-openrouter-api-key"></a>

## วิธีรับคีย์ API ของ OpenRouter

Transrewrt รองรับผู้ให้บริการ AI หลายราย [OpenRouter](https://openrouter.ai) เป็นตัวเลือกยอดนิยมเพราะสามารถใช้งานโมเดลหลายๆ โมเดลภายใต้คีย์เดียวและยังมีโมเดลให้ใช้ฟรี

1. สมัครสมาชิกหรือเข้าสู่ระบบที่ [openrouter.ai](https://openrouter.ai)
2. เข้าไปที่หน้า [Keys](https://openrouter.ai/keys) และสร้างคีย์ใหม่ (ตั้งชื่อ พร้อมกำหนดวงเงินเครดิตแบบไม่บังคับ) คุณสามารถใช้โมเดลฟรีได้โดยไม่ต้องเติมเครดิต
3. **เวอร์ชันเดสก์ท็อป (Electron):** วางคีย์ใน **ตั้งค่า → API** **Docker:** ตั้งค่าตัวแปรสภาพแวดล้อม เช่น `OPENROUTER_KEY` (ดูเพิ่มเติมที่ [เริ่มต้นอย่างรวดเร็ว](#quick-start))

ห้ามใช้โมเดล **Body Builder** ของ OpenRouter ([`openrouter/bodybuilder`](https://openrouter.ai/openrouter/bodybuilder)) สำหรับงานแปล ปรับเขียนใหม่ หรือแปลงข้อความ เพราะมันจะคืนค่า payload ของคำขอในรูปแบบ JSON แทนที่จะเป็นข้อความสำเร็จรูป ดูเพิ่มเติมที่ [การตั้งค่า → โมเดล](USER-GUIDE.th.md#models) ในคู่มือผู้ใช้

คุณยังสามารถใช้ผู้ให้บริการอื่นเช่น OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras หรือรันโมเดลในเครื่องด้วย [Ollama](https://ollama.com) ดูที่ส่วน [การตั้งค่าและการกำหนดสภาพแวดล้อม](#configuration-and-environment) สำหรับรายชื่อผู้ให้บริการที่รองรับและตัวแปรสภาพแวดล้อมทั้งหมด

> ⚠️ **คำเตือน**<br/>
> หากคุณใช้ Ollama จากอุปกรณ์ อิมเมจ หรือบริการอื่น อย่าลืมตั้งค่าให้ Ollama อนุญาตการเชื่อมต่อจากภายนอก (ไม่ใช่แค่ localhost)

ดูเพิ่มเติมเกี่ยวกับข้อจำกัด การใช้คีย์ตัวเอง (BYOK) และข้อมูลอื่นๆ ได้ที่ [การพิสูจน์ตัวตน OpenRouter](https://openrouter.ai/docs/api/reference/authentication)

<br/><br/>

<a id="configuration-and-environment"></a>
## การตั้งค่าและการกำหนดสภาพแวดล้อม

**ตำแหน่งไฟล์กำหนดค่า**

| การติดตั้ง          | ตำแหน่งไฟล์กำหนดค่า                                  |
| ------------------ | ------------------------------------------------- |
| Electron (Windows) | `%APPDATA%\transrewrt\`                           |
| Electron (Linux)   | `~/.config/transrewrt/`                           |
| เว็บ / Docker       | `/app/data/config.json` (ใช้ volume เพื่อเก็บข้อมูลถาวร) |

<br/>

**ตัวแปรสภาพแวดล้อม** (สำหรับเว็บ/Docker เท่านั้น; Electron ใช้ไฟล์กำหนดค่าในเครื่อง)

| ตัวแปร             | ค่าเริ่มต้น              | คำอธิบาย |
| ------------------ | ----------------------- | -------- |
| `PORT`            | `5000`                  | พอร์ตที่เซิร์ฟเวอร์ใช้รับคำขอ |
| `CONFIG_PATH`     | `/app/data/config.json` | เส้นทางไปยังไฟล์กำหนดค่า |
| `OPENROUTER_KEY`  | *(ว่าง)*                 | คีย์ API ของ OpenRouter |
| `OPENAI_KEY`      | *(ว่าง)*                 | คีย์ API ของ OpenAI |
| `CEREBRAS_KEY`    | *(ว่าง)*                 | คีย์ API ของ Cerebras |
| `ANTHROPIC_KEY`   | *(ว่าง)*                 | คีย์ API ของ Anthropic |
| `GOOGLE_KEY`      | *(ว่าง)*                 | คีย์ API ของ Google Gemini |
| `DEEPSEEK_KEY`    | *(ว่าง)*                 | คีย์ API ของ DeepSeek |
| `GROQ_KEY`        | *(ว่าง)*                 | คีย์ API ของ Groq |
| `MISTRAL_KEY`     | *(ว่าง)*                 | คีย์ API ของ Mistral |
| `OLLAMA_URL`      | *(ว่าง)*                 | URL พื้นฐานของ Ollama (เช่น `http://host.docker.internal:11434`) |
| `XAI_KEY`         | *(ว่าง)*                 | คีย์ API ของ xAI |

กรุณาตั้งค่าเฉพาะผู้ให้บริการที่คุณใช้งาน ชื่อโมเดลจะถูกแยกตาม namespace (`openrouter/…`, `openai/…`, `cerebras/…`, `ollama/…`, ฯลฯ)

**การแสดงค่าใช้จ่าย:** OpenRouter จะคืนค่าใช้จ่ายจริงหากมี ในกรณีที่ผู้ให้บริการอื่นๆ ระบบจะใช้ **ค่าประมาณการ** จากตารางราคาโมเดลของ OpenRouter หากมีการตั้งคีย์ OpenRouter ไว้ หากระบบไม่มีคีย์ OpenRouter ค่าใช้จ่ายจากผู้ให้บริการอื่นอาจแสดงเป็น `0` ทั้งนี้ ตัวเลขที่แสดงเป็นเพียงการประมาณ ไม่ใช่ใบแจ้งหนี้

<br/>

**ข้อมูลและการเก็บรักษาข้อมูลอย่างถาวร:** สำหรับ Docker ควรจับคู่ volume กับไดเรกทอรี `/app/data` เพื่อให้ `config.json` และฐานข้อมูล SQLite ไม่หายไปเมื่อคอนเทนเนอร์รีสตาร์ท หากไม่ใช้ volume ข้อมูลทั้งหมดจะหายไปเมื่อคอนเทนเนอร์หยุดทำงาน

**นักพัฒนา:** หลังจากดึงการเปลี่ยนแปลงที่เลิกใช้การตั้งค่าแบบ single-key เดิม ให้รีเซ็ตหรือผสานไฟล์ `data/config.json` กับโครงสร้างเริ่มต้นใหม่ที่ `src/config-defaults/config_default.json` หากไฟล์ในเครื่องยังคงใช้ฟิลด์ที่ถูกลบไปแล้ว เช่น (`api_key`, `api_url`, ตัวเลือกพร็อกซี)

<br/>

**การพิสูจน์ตัวตนสำหรับเว็บ:**

- ผู้ดูแลเริ่มต้น: `admin` / `transrewrt26`
- จัดการผู้ใช้ได้ที่ **ตั้งค่า → ผู้ใช้**
- รีเซ็ตรหัสผ่าน: `docker exec <container> reset-web-password '<username>' '<new-password>'`  
  (หากเรียกจากซอร์ส: `pnpm run reset-web-password -- <username> <new-password>`)

<br/>

> ⚠️ **คำเตือน**<br/>
> ควรเปลี่ยนรหัสผ่านผู้ดูแลเริ่มต้นทันที สำหรับระบบใดๆ ที่เข้าถึงผ่านเครือข่ายได้

<br/>

การตั้งค่าหลักๆ (แบบอักษร โมเดล ภาษา ฯลฯ) สามารถทำได้ผ่านเมนูตั้งค่าในแอปพลิเคชัน

<br/><br/>

<a id="development-and-architecture"></a>

## การพัฒนาและสถาปัตยกรรม

- **การพัฒนา:** การตั้งค่า, การสร้าง, การทดสอบ, และการติดตั้ง (Electron, Web, Docker) — ดู **[dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)**
- **ภาพรวมของสถาปัตยกรรมและระบบ:** โครงสร้างโฟลเดอร์, เทคโนโลยีที่ใช้, การตัดสินใจเชิงการออกแบบ — ดู **[dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)**

<br/><br/>

<a id="releases-and-tags"></a>
## เวอร์ชันและแท็ก

- **แท็ก Git** `v`* (เช่น `v1.0.10`) จะเรียกใช้ [ขั้นตอนการเผยแพร่](.github/workflows/release.yml) **GitHub Releases** จะแนบติดตั้งสำหรับ Windows (ไฟล์ `.exe`) และ Linux AppImages (**x64** และ **arm64**)
- **ภาพ Docker** จะถูกเผยแพร่ไปยัง `ghcr.io/wsj-br/transrewrt` ชื่อแท็กของภาพจะตรงกับเวอร์ชัน Git (เช่น `v1.0.10` → `ghcr.io/wsj-br/transrewrt:1.0.10`) รวมถึงแท็ก `latest` รองรับหลายสถาปัตยกรรม: `linux/amd64` และ `linux/arm64` (เช่น Raspberry Pi)

<br/><br/>

<a id="contributing"></a>
## การมีส่วนร่วม

1. สำเนา (Fork) ที่เก็บโค้ด (repository)
2. สร้างสาขาฟีเจอร์: `git checkout -b feature/my-feature`
3. Commit การเปลี่ยนแปลงของคุณด้วยข้อความที่ชัดเจน
4. ส่ง (Push) และสร้าง Pull Request ไปยัง `main`

โปรดปฏิบัติตามรูปแบบโค้ดที่มีอยู่ และทดสอบการเปลี่ยนแปลงของคุณในทั้งโหมด Electron และเว็บ ก่อนส่ง ดู [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) สำหรับคำแนะนำการสร้างและการทดสอบ

<br/>

**การรายงานปัญหา:** เปิดรายงานปัญหาที่ [GitHub](https://github.com/wsj-br/transrewrt/issues) โปรดระบุระบบปฏิบัติการของคุณ (Windows / Linux / Docker) และเวอร์ชันแอป (แสดงในหน้าต่าง "เกี่ยวกับ" หรือหน้า Releases)

<br/><br/>

<a id="disclaimer"></a>
## ข้อจำกัดความรับผิด

ชื่อผลิตภัณฑ์และไอคอนเป็นของเจ้าของที่เกี่ยวข้อง และใช้เพื่อจุดประสงค์ในการระบุเท่านั้น ซอฟต์แวร์นี้ไม่ได้เกี่ยวข้องหรือได้รับการรับรองจากแบรนด์ใดๆ ที่กล่าวถึง

<br/><br/>

<a id="license"></a>
## ใบอนุญาต

ลิขสิทธิ์ © 2026 Waldemar Scudeller Jr.

[ใบอนุญาต Apache 2.0](LICENSE)