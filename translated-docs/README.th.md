<p align="center">
  <img src="../images/transrewrt_banner.png" alt="Transrewrt Banner"  />
</p>

<p align="center">
  <a href="https://github.com/wsj-br/transrewrt/releases"><img src="https://img.shields.io/badge/version-1.6.2-blue" alt="Version"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-Apache%202.0-green" alt="License: Apache 2.0"></a>
  <img src="https://img.shields.io/badge/platform-Windows%20%7C%20Linux%20%7C%20Docker-lightgrey" alt="Platform">
</p>

เครื่องมือข้อความที่ขับเคลื่อนด้วย AI: **แปล**, **เขียนใหม่** และ **แปลง** ด้วยพร้อมต์ที่กำหนดเอง — โดยใช้ผู้ให้บริการ AI ของคุณเอง (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras, NVIDIA, Alibaba Cloud, apikey.fun, ปลายทางที่เข้ากันได้กับ OpenAI และเซิร์ฟเวอร์ที่เข้ากันได้กับ OpenAI ในเครื่อง เช่น Ollama, LM Studio หรือ llama.cpp) แอปเดสก์ท็อป (Windows / Linux) หรือเว็บแอปที่โฮสต์เอง (Docker) ไม่มีบัญชีคลาวด์ Transrewrt

| | |
| --- | --- |
| **แปล** | หลายสิบภาษา, ตรวจจับอัตโนมัติ, อภิธานศัพท์, ปรับปรุงด้วยการแก้ไขใหม่ |
| **การแก้ไขใหม่** | ความชัดเจน, โทนเสียง, ความยาว, การสะกดและไวยากรณ์ — ภาษาเดียวกัน |
| **การแปลง** | พร้อมต์ AI ที่กำหนดเองที่คุณสร้าง, แก้ไข และนำกลับมาใช้ใหม่ |
| **ปรับใช้** | เดสก์ท็อป Electron หรือเว็บ Docker (amd64 & arm64) |
| **คีย์** | ผู้ให้บริการของคุณ, โฮสต์ของคุณ — ค่าที่ตั้งไว้ล่วงหน้าแบบง่าย หรือรายการโมเดลขั้นสูง |

![แปล](../images/screenshots/th/translate.png)

<small>**อ่านเป็นภาษาอื่น:** </small>
<small id="lang-list">[English (UK)](../README.md) · [العربية](./README.ar.md) · [简体中文](./README.zh-Hans.md) · [繁體中文](./README.zh-Hant.md) · [Čeština](./README.cs.md) · [Nederlands](./README.nl.md) · [Français](./README.fr.md) · [Deutsch](./README.de.md) · [Ελληνικά](./README.el.md) · [हिन्दी](./README.hi.md) · [Magyar](./README.hu.md) · [Italiano](./README.it.md) · [日本語](./README.ja.md) · [한국어](./README.ko.md) · [فارسی](./README.fa.md) · [Polski](./README.pl.md) · [Português (Brasil)](./README.pt-BR.md) · [Română](./README.ro.md) · [Русский](./README.ru.md) · [Slovenčina](./README.sk.md) · [Español](./README.es.md) · [Svenska](./README.sv.md) · [ไทย](./README.th.md) · [Türkçe](./README.tr.md) · [Українська](./README.uk.md) · [Tiếng Việt](./README.vi.md)</small>

## เริ่มต้นอย่างรวดเร็ว

**Docker**

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest

docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e PROVIDER_API_KEY=your-key \
  --name transrewrt \
  ghcr.io/wsj-br/transrewrt:latest
```

แทนที่ `PROVIDER_API_KEY` ด้วยตัวแปรผู้ให้บริการของคุณ (เช่น `OPENROUTER_API_KEY`, `OPENAI_API_KEY`, `GROQ_API_KEY`) เปิด [http://localhost:5000](http://localhost:5000) และเปลี่ยนรหัสผ่านผู้ดูแลระบบเริ่มต้น คีย์จะถูกตั้งค่าผ่านตัวแปรสภาพแวดล้อม (ไม่ใช่ UI บนเว็บ)

**Windows** — ดาวน์โหลด `Transrewrt Setup x.y.z.exe` จาก [Releases](https://github.com/wsj-br/transrewrt/releases) ติดตั้ง จากนั้นเพิ่มคีย์ใน **การตั้งค่า → API**

**Linux** — ดาวน์โหลด `.AppImage` จาก [Releases](https://github.com/wsj-br/transrewrt/releases) จากนั้น:

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

รายละเอียดแพลตฟอร์ม (Compose, SmartScreen, apt libs, GPU flags, เขตเวลา): [เอกสารเริ่มต้นอย่างรวดเร็ว](https://wsj-br.github.io/transrewrt/docs/quick-start/)

## เอกสารประกอบ

เอกสารผลิตภัณฑ์ฉบับเต็ม (การติดตั้ง, คีย์ API, คู่มือ, การตั้งค่า, การแก้ไขปัญหา):

**[https://wsj-br.github.io/transrewrt/docs/](https://wsj-br.github.io/transrewrt/docs/)**

- [คีย์ API](https://wsj-br.github.io/transrewrt/docs/api-key/)
- [การกำหนดค่า](https://wsj-br.github.io/transrewrt/docs/configuration/)
- [แปล](https://wsj-br.github.io/transrewrt/docs/translate/) · [การแก้ไขใหม่](https://wsj-br.github.io/transrewrt/docs/rewrite/) · [การแปลง](https://wsj-br.github.io/transrewrt/docs/transform/)
- [ปัญหาทั่วไป](https://wsj-br.github.io/transrewrt/docs/common-issues/)

## การพัฒนา

- การตั้งค่า, สร้าง, ทดสอบ, ปรับใช้: [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)
- ภาพรวมสถาปัตยกรรม: [dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)

## การสนับสนุน

เปิดปัญหาบน [GitHub](https://github.com/wsj-br/transrewrt/issues) ระบุแพลตฟอร์มของคุณ (Windows / Linux / Docker) และเวอร์ชันแอป (กล่องโต้ตอบเกี่ยวกับ หรือหน้า Releases)

## กิตติกรรมประกาศ

คำแนะนำค่าตั้งล่วงหน้าโหมดง่ายในตัวแก้ไขค่าตั้งล่วงหน้าใช้ข้อมูลการประเมินสาธารณะจาก:

- [languagebench](https://huggingface.co/spaces/fair-forward/languagebench) (CC BY-SA 4.0)
- [Artificial Analysis](https://artificialanalysis.ai/) (ต้องระบุแหล่งที่มาสำหรับข้อมูล API)

ใบอนุญาตการพึ่งพาจากบุคคลที่สามและประกาศแหล่งที่มาของข้อมูลเหล่านี้แสดงอยู่ใน [NOTICES](../NOTICES)

## ใบอนุญาต

ลิขสิทธิ์ © 2026 วัลเดอมาร์ สกูเดลเลอร์ จูเนียร์

[Apache License 2.0](../LICENSE)

ชื่อผลิตภัณฑ์และไอคอนเป็นของเจ้าของที่เกี่ยวข้อง และใช้เพื่อการระบุตัวตนเท่านั้น ซอฟต์แวร์นี้ไม่มีส่วนเกี่ยวข้องหรือรับรองโดยแบรนด์เหล่านั้น

<small>

> **หมายเหตุเกี่ยวกับการแปล UI และเอกสาร:** ภาษาของอินเทอร์เฟซและเอกสารทั้งหมด ยกเว้นภาษาอังกฤษต้นฉบับ ได้รับการแปลโดยใช้โมเดล AI โดยใช้ [ai-i18n-tools](https://wsj-br.github.io/ai-i18n-tools/); 
> การใช้ถ้อยคำอาจไม่แม่นยำหรือมีข้อผิดพลาด

</small>
