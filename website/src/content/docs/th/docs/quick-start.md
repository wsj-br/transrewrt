---
title: เริ่มต้นใช้งานอย่างรวดเร็ว
description: >-
  ติดตั้ง Transrewrt บน Windows หรือ Linux หรือเรียกใช้เว็บแอป Docker
  ที่โฮสต์ด้วยตนเอง
translation_last_updated: '2026-07-17T14:59:03.890Z'
source_file_mtime: '2026-07-17T14:55:54.211Z'
source_file_hash: 6eb0ab579b445d9c4d39567ef44ee3333f57285c5c2b8dd072de6355182f849f
translation_language: th
source_file_path: src/content/docs/docs/quick-start.md
translation_models:
  - google/gemini-2.5-flash
---



เลือกเส้นทางที่เหมาะกับคุณ ทั้งหมดนี้ฟรีและเป็นโอเพนซอร์ส (Apache 2.0)

## Docker (เว็บที่โฮสต์ด้วยตนเอง)

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest

PROVIDER_API_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e PROVIDER_API_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

แทนที่ `PROVIDER_API_KEY=sk-or-your-key` ด้วยคีย์ API ของคุณจากผู้ให้บริการที่คุณเลือก (ดูตัวเลือกที่รองรับใน [การกำหนดค่า](/docs/configuration/))

จากนั้นเปิด [http://localhost:5000](http://localhost:5000) และ **เปลี่ยนรหัสผ่านผู้ดูแลระบบเริ่มต้น** ก่อนเปิดเผยบริการ

:::caution
ใน Docker ข้อมูลประจำตัว LLM จะถูกตั้งค่าด้วยตัวแปรสภาพแวดล้อม (เช่น `PROVIDER_API_KEY`) โดยจะ **ไม่** ถูกป้อนใน UI ของเว็บ บนเดสก์ท็อป คุณกำหนดค่าคีย์ใน **การตั้งค่า → API**
:::

### Docker Compose

```bash
wget https://github.com/wsj-br/transrewrt/raw/refs/heads/master/production.yml -O transrewrt.yml
# Edit the file to add your API keys, or use a `.env` file. Set TZ if needed.
docker compose -f transrewrt.yml up -d
```

## Windows

1. ดาวน์โหลด `Transrewrt Setup x.y.z.exe` ล่าสุดจาก [Releases](https://github.com/wsj-br/transrewrt/releases)
2. เรียกใช้โปรแกรมติดตั้ง
3. เปิดแอปและป้อนคีย์ API ใน **การตั้งค่า → API** กำหนดค่าผู้ให้บริการอย่างน้อยหนึ่งราย OpenRouter เป็นตัวเลือกทั่วไปสำหรับโมเดลฟรี

:::note
Windows อาจแสดงคำเตือน UAC หรือ SmartScreen สำหรับแอปอิสระที่ไม่ได้ลงชื่อ ควรดาวน์โหลดจากหน้า GitHub Releases อย่างเป็นทางการและตรวจสอบผลรวมแฮชเมื่อเผยแพร่
:::

## Linux

ดาวน์โหลด `.AppImage` สำหรับ CPU ของคุณจาก [Releases](https://github.com/wsj-br/transrewrt/releases) (`x64` หรือ `arm64` รวมถึง Raspberry Pi 4+):

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

ป้อนคีย์ API ใน **การตั้งค่า → API**

หาก Chromium พิมพ์ข้อผิดพลาด GPU / EGL แต่แอปทำงาน คุณสามารถปิดใช้งานการเร่งฮาร์ดแวร์ได้:

```bash
TRANSREWRT_DISABLE_GPU=1 ./Transrewrt-x.y.z-arm64.AppImage
```

:::note
macOS ไม่รองรับในขณะนี้ Transrewrt พร้อมใช้งานสำหรับ Windows, Linux และ Docker
:::

## ขั้นตอนต่อไป

1. [รับคีย์ API](/docs/api-key/)
2. เรียกใช้การแปลแบบง่ายเพื่อยืนยันว่าทุกอย่างทำงานได้
3. อ่านคู่มือ [แปล](/docs/translate/), [เขียนใหม่](/docs/rewrite/) และ [แปลง](/docs/transform/)
