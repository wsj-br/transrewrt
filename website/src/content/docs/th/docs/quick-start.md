---
title: เริ่มต้นใช้งานด่วน
description: >-
  ติดตั้ง Transrewrt บน Windows หรือ Linux หรือเรียกใช้เว็บแอป Docker
  ที่โฮสต์ด้วยตนเอง
---



เลือกเส้นทางที่เหมาะกับคุณ ทั้งหมดนี้ฟรีและเป็นโอเพนซอร์ส (Apache 2.0)

## Docker (เว็บที่โฮสต์ด้วยตนเอง)

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest

docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e PROVIDER_API_KEY=your-api-key \
  --name transrewrt \
  ghcr.io/wsj-br/transrewrt:latest
```

แทนที่ `PROVIDER_API_KEY` ด้วยตัวแปรสำหรับผู้ให้บริการของคุณ (เช่น `OPENROUTER_API_KEY`, `OPENAI_API_KEY`, `ANTHROPIC_API_KEY`, `XIA_API_KEY`, ...) และกำหนดค่า ดูรายการทั้งหมดได้ที่ [การกำหนดค่า](/docs/configuration/#environment-variables-web--docker)

จากนั้นเปิด [http://localhost:5000](http://localhost:5000) และ **เปลี่ยนรหัสผ่านผู้ดูแลระบบเริ่มต้น** ก่อนเปิดเผยบริการ

:::tip
ใน Docker ข้อมูลประจำตัวของ LLM จะถูกตั้งค่าด้วยตัวแปรสภาพแวดล้อม (เช่น `PROVIDER_API_KEY`) โดยจะ **ไม่** ถูกป้อนใน UI ของเว็บ บนเดสก์ท็อป คุณสามารถกำหนดค่าคีย์ได้ใน **การตั้งค่า → การกำหนดค่า API**
:::

### Docker Compose

```bash
wget https://github.com/wsj-br/transrewrt/raw/refs/heads/master/production.yml -O transrewrt.yml
# Edit the file to add your API keys, or use a `.env` file. Set TZ if needed.
docker compose -f transrewrt.yml up -d
```

## Windows

1. ดาวน์โหลด `Transrewrt Setup x.y.z.exe` ล่าสุดจาก [Releases](https://github.com/wsj-br/transrewrt/releases)
2. เรียกใช้ตัวติดตั้ง
3. เปิดแอปและป้อนคีย์ API ใน **การตั้งค่า → การกำหนดค่า API** กำหนดค่าผู้ให้บริการอย่างน้อยหนึ่งราย OpenRouter เป็นตัวเลือกทั่วไปสำหรับโมเดลฟรี

:::note
Windows อาจแสดงคำเตือน UAC หรือ SmartScreen เมื่อติดตั้งแอปพลิเคชัน การติดตั้งจะปลอดภัยหากคุณดาวน์โหลดจากหน้า GitHub Releases อย่างเป็นทางการ คลิก "ข้อมูลเพิ่มเติม" และ "เรียกใช้ต่อไป" เพื่อติดตั้ง
:::

## Linux

ดาวน์โหลด `.AppImage` สำหรับ CPU ของคุณจาก [Releases](https://github.com/wsj-br/transrewrt/releases) (`x64` หรือ `arm64` รวมถึง Raspberry Pi 4+):

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

ป้อนคีย์ API ใน **การตั้งค่า → การกำหนดค่า API**

หาก Chromium พิมพ์ข้อผิดพลาด GPU / EGL แต่แอปทำงานได้ คุณสามารถปิดใช้งานการเร่งฮาร์ดแวร์ได้:

```bash
TRANSREWRT_DISABLE_GPU=1 ./Transrewrt-x.y.z-arm64.AppImage
```

:::note
macOS ไม่รองรับในขณะนี้ Transrewrt มีให้สำหรับ Windows, Linux และ Docker
:::

## การอัปเดต

- **Windows** — ดาวน์โหลด `Transrewrt Setup x.y.z.exe` ที่ใหม่กว่าจาก [Releases](https://github.com/wsj-br/transrewrt/releases) และเรียกใช้ การตั้งค่าและข้อมูลจะถูกเก็บไว้
- **Linux** — ดาวน์โหลด `.AppImage` ที่ใหม่กว่าและแทนที่ไฟล์เก่า การตั้งค่าและข้อมูลจะถูกเก็บไว้
- **Docker** — ดึงอิมเมจใหม่และสร้างคอนเทนเนอร์ใหม่ ข้อมูลยังคงอยู่ในวอลุ่ม `/app/data`:

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest
docker stop transrewrt && docker rm transrewrt
# then run the same `docker run` command as above
# or, with Docker Compose:
docker compose -f transrewrt.yml pull && docker compose -f transrewrt.yml up -d
```

## ขั้นตอนถัดไป

1. [รับคีย์ API](/docs/api-key/)
2. เรียกใช้การแปลอย่างง่ายเพื่อยืนยันว่าทุกอย่างทำงานได้
3. อ่านคู่มือ [แปล](/docs/translate/), [เขียนใหม่](/docs/rewrite/) และ [แปลง](/docs/transform/)
