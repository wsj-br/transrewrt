---
title: 대시보드 사용
description: 사용량, 비용 및 호출 로그 검토 — 필터링, 내보내기 및 저장된 레코드 관리.
---



**Dashboard**를 사용하여 앱 사용량과 비용(유료 모델의 경우)을 확인합니다.

![대시보드 요약](/images/screenshots/ko/dashboard-summary.png)

:::note
**무료** 모델만 사용하는 경우 비용이 0일 수 있습니다. **Summary**의 호출 수 KPI는 선택한 기간 내 활동이 있어야 표시됩니다.
:::

## 데이터 필터링

상단의 필터 버튼을 사용하여 시간 범위를 변경합니다.

:::note
**User** 필터는 웹 버전에서 관리자에게만 표시됩니다. 데스크톱에서는 사용할 수 없습니다.
:::

## 탭

- **Summary** — KPI: 총 비용, 사용된 모델, 모드별 호출 수 및 비용, 호출당 평균 비용, 평균 TPS, 호출 수 기준 상위 모델
- **By Model** — 모델별 호출, 비용 및 TPS; 행을 확장하면 모드별 분석 표시
- **All Calls** — 전체 호출 로그(페이지네이션 또는 카드) 및 내보내기

## 데이터 내보내기

테이블을 **JSON**, **CSV** 또는 **XLSX**로 내보내기.

## 모델의 저장된 레코드 삭제

**By Model** 또는 **All Calls**에서 휴지통 아이콘을 사용하여 모델의 레코드를 삭제합니다.

:::caution
삭제는 취소할 수 없습니다. 기간별 삭제 또는 모든 비용 데이터 삭제는 [Settings → Cost Tracking](/docs/settings/#cost-tracking)을 사용하세요.
:::

## 다음 단계

- [Browse History](/docs/history/)
- [Settings](/docs/settings/)
- [Common issues](/docs/common-issues/)
