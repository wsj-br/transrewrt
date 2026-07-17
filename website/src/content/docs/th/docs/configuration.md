---
title: การกำหนดค่า
description: >-
  ตำแหน่งไฟล์กำหนดค่า, ตัวแปรสภาพแวดล้อม Docker, โหมดความเป็นส่วนตัว
  และการรับรองความถูกต้องของเว็บ
translation_last_updated: '2026-07-17T14:59:02.984Z'
source_file_mtime: '2026-07-17T14:43:44.727Z'
source_file_hash: 8c3b2c00eddcee7693d66c5f5955c2d2186e55de630886446764bc6b798f05b5
translation_language: th
source_file_path: src/content/docs/docs/configuration.md
translation_models:
  - google/gemini-2.5-flash
  - meta-llama/llama-3.3-70b-instruct
---



## ตำแหน่งไฟล์กำหนดค่า

| การปรับใช้ | ตำแหน่งการกำหนดค่า |
| --- | --- |
| Electron (Windows) | `%APPDATA%\transrewrt\` |
| Electron (Linux) | `~/.config/transrewrt/` |
| เว็บ / Docker | `/app/data/config.json` (ใช้โวลุ่มเพื่อคงอยู่) |

## ตัวแปรสภาพแวดล้อม (เว็บ / Docker)

Electron ใช้ไฟล์กำหนดค่าภายในเครื่อง สำหรับเซิร์ฟเวอร์เว็บ/Docker เท่านั้น:

| ตัวแปร | คำอธิบาย |
| --- | --- |
| `PORT` | พอร์ตการฟังของเซิร์ฟเวอร์ (ค่าเริ่มต้น `5000`) |
| `CONFIG_PATH` | พาธไปยังไฟล์กำหนดค่า (ค่าเริ่มต้น `/app/data/config.json`) |
| `TZ` | เขตเวลาสำหรับเวลาฝั่งเซิร์ฟเวอร์ (ค่าเริ่มต้น `Europe/London`) |
| `HISTORY_DISABLED` | บังคับปิดประวัติการดำเนินการ (`true` / `1`) |
| `OPENROUTER_API_KEY` | คีย์ API ของ OpenRouter |
| `OPENAI_API_KEY` | คีย์ API ของ OpenAI |
| `CEREBRAS_API_KEY` | คีย์ API ของ Cerebras |
| `ANTHROPIC_API_KEY` | คีย์ API ของ Anthropic |
| `GOOGLE_API_KEY` | คีย์ API ของ Google Gemini |
| `DEEPSEEK_API_KEY` | คีย์ API ของ DeepSeek |
| `GROQ_API_KEY` | คีย์ API ของ Groq |
| `MISTRAL_API_KEY` | คีย์ API ของ Mistral |
| `LOCAL_LLM_URL` | URL พื้นฐานของ API ที่เข้ากันได้กับ OpenAI สำหรับเซิร์ฟเวอร์ในเครื่อง (รวมพาธ เช่น Ollama `http://host.docker.internal:11434/v1`, LM Studio `http://host.docker.internal:1234/v1`) |
| `XAI_API_KEY` | คีย์ API xAI |
| `NVIDIA_API_KEY` | คีย์ API NVIDIA |
| `ALIBABA_API_KEY` | คีย์ API Alibaba Cloud (DashScope) |
| `APIFUN_API_KEY` | คีย์ API apikey.fun |
| `CUSTOM_PROVIDER_NAME` | ชื่อแสดงสำหรับผู้ให้บริการ OpenAI ที่กำหนดเอง |
| `CUSTOM_PROVIDER_URL` | URL ฐานสำหรับผู้ให้บริการ OpenAI ที่กำหนดเอง |
| `CUSTOM_PROVIDER_API_KEY` | คีย์ API สำหรับผู้ให้บริการที่กำหนดเอง |

ทั้งสามตัวแปร `CUSTOM_PROVIDER_*` จำเป็นต้องใช้เมื่อใช้จุดสิ้นสุดแบบกำหนดเอง โมเดลจะปรากฏในโหมด **Advanced** เป็น `{providerName}/…`

## โหมดความเป็นส่วนตัว

ตั้งค่า `HISTORY_DISABLED` เป็น `true` หรือ `1` บนกระบวนการเซิร์ฟเวอร์เว็บ/Docker และ/หรือกระบวนการหลัก Electron เพื่อบังคับให้ประวัติออกโดยไม่คำนึงถึง `config.json` หรือการตั้งค่าผู้ใช้แบบต่อผู้ใช้ สิ่งนี้จะปิดการใช้งานการเก็บประวัติข้อมูลเข้า/ออก, ล็อก **การตั้งค่า → การตั้งค่าทั่วไป → ประวัติ** และบล็อก API ที่เกี่ยวข้องกับประวัติ

## ความคงอยู่ของข้อมูล (Docker)

ติดตั้งโวลุ่มที่ `/app/data` เพื่อให้ `config.json` และฐานข้อมูล SQLite อยู่รอดหลังจากการรีสตาร์ทคอนเทนเนอร์ หากไม่มีโวลุ่ม ข้อมูลจะสูญหายเมื่อคอนเทนเนอร์หยุด

## การรับรองความถูกต้องบนเว็บ

- ผู้ดูแลระบบเริ่มต้น: `admin` / `transrewrt26`
- จัดการผู้ใช้ใน **การตั้งค่า → ผู้ใช้**
- รีเซ็ตรหัสผ่าน:

```bash
docker exec <container> reset-web-password '<username>' '<new-password>'
```

:::danger
เปลี่ยนรหัสผ่านผู้ดูแลระบบเริ่มต้นในทันทีบนโฮสต์ที่สามารถเข้าถึงเครือข่ายได้
:::

## การแสดงต้นทุน

OpenRouter ส่งกลับต้นทุนที่เรียกเก็บเงินจริงเมื่อใช้ได้ ผู้ให้บริการอื่นใช้ต้นทุนที่ **ประมาณการ** จากการกำหนดราคาแบบเปิดของ OpenRouter เมื่อคีย์ OpenRouter มีอยู่ การประมาณการไม่ใช่ใบเรียกเก็บเงิน

สำหรับ UI การตั้งค่า (แบบอักษร, โมเดล, ประวัติ, การสำรองข้อมูล) โปรดดูที่ [การตั้งค่า](/docs/settings/)
