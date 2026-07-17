---
title: ภาพรวม
description: Transrewrt คืออะไร และจะค้นหาเอกสารการติดตั้ง คู่มือ และการตั้งค่าได้อย่างไร
translation_last_updated: '2026-07-17T14:59:03.633Z'
source_file_mtime: '2026-07-17T14:36:51.471Z'
source_file_hash: 6dfcf9cb19e3422d75511ecc06eda72e014214c3e34d95f7fec6d8a05c01896f
translation_language: th
source_file_path: src/content/docs/docs/index.md
translation_models:
  - google/gemini-2.5-flash
---



**Transrewrt** เป็นเครื่องมือข้อความที่ขับเคลื่อนด้วย AI แบบโอเพนซอร์สสำหรับ:

- **แปล** — ระหว่างหลายสิบภาษา พร้อมการตรวจจับแหล่งที่มาอัตโนมัติและอภิธานศัพท์
- **เขียนใหม่** — แก้ไขไวยากรณ์ ปรับปรุงความชัดเจน เปลี่ยนโทนเสียงหรือความยาว
- **แปลง** — เรียกใช้พร้อมท์ AI ที่กำหนดเองของคุณเองกับข้อความใดๆ

รองรับผู้ให้บริการ AI หลายราย (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras, NVIDIA, Alibaba Cloud, apikey.fun, ปลายทางที่เข้ากันได้กับ OpenAI และเซิร์ฟเวอร์ที่เข้ากันได้กับ OpenAI ในเครื่อง เช่น Ollama, LM Studio หรือ llama.cpp) เรียกใช้เป็น **แอปเดสก์ท็อป** (Windows / Linux) หรือ **เว็บแอปที่โฮสต์เอง** (Docker)

คีย์ของคุณ โมเดลของคุณ โฮสต์ของคุณ — ไม่มีบัญชีคลาวด์ Transrewrt

## การจัดระเบียบหน้าต่าง

- **แถบด้านข้าง** — แปล, เขียนใหม่, แปลง, แดชบอร์ด, ประวัติ, การตั้งค่า (และผู้ใช้ที่เข้าสู่ระบบบนเว็บ)
- **แถบเครื่องมือ** — ชื่อหน้า, ตัวเลือก**ค่าที่ตั้งไว้ล่วงหน้า** (ง่าย) หรือ**โมเดล** (ขั้นสูง) และ**ภาษาของอินเทอร์เฟซ** (ไอคอนรูปโลก; ไม่เปลี่ยน แปลจาก/เป็น)
- **พื้นที่ทำงาน** — แผงอินพุตและเอาต์พุตพร้อมจำนวน, เวลา, TPS และค่าใช้จ่ายเสริม

โดยค่าเริ่มต้น แอปจะทำงานในโหมด **Easy**: เลือก **preset** และ **Provider** ใน Settings หากต้องการดูรายการโมเดลทั้งหมด ให้เปลี่ยนเป็น **Advanced** ใต้ [Settings → General Settings](/docs/settings/#general-settings)

## เริ่มต้นใช้งาน

1. [เริ่มต้นอย่างรวดเร็ว](/docs/quick-start/) — ติดตั้งบนเดสก์ท็อปหรือเรียกใช้ด้วย Docker
2. [คีย์ API](/docs/api-key/) — เชื่อมต่อคีย์ OpenRouter ฟรีหรือผู้ให้บริการอื่น
3. [การกำหนดค่า](/docs/configuration/) — ตัวแปรสภาพแวดล้อม, เส้นทางการกำหนดค่า, การรับรองความถูกต้องบนเว็บ

## คู่มือ

- [แปลข้อความ](/docs/translate/)
- [เขียนข้อความใหม่](/docs/rewrite/)
- [แปลงด้วยพร้อมต์](/docs/transform/)
- [ใช้แดชบอร์ด](/docs/dashboard/)
- [เรียกดูประวัติ](/docs/history/)

## การอ้างอิงและความช่วยเหลือ

- [การตั้งค่า](/docs/settings/)
- [ปัญหาที่พบบ่อย](/docs/common-issues/)

[Download releases](https://github.com/wsj-br/transrewrt/releases) · [GitHub repository](https://github.com/wsj-br/transrewrt)
