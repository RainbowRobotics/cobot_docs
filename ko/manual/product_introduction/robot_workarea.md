---
layout: doc
outline: deep
---

# 로봇의 작업영역

로봇 팔이 최대로 뻗은 상태에서 회전할 수 있는 반경은

- RB5-850E Series는 927.7mm
- RB10-1300E Series는 1300mm
- RB3-1200E Series는 1200mm
- RB16-900E Series는 900mm
- RB3-730ES Series는 730mm
- RB6-920ES Series는 920mm
- RB20-1900ES Series는 1900mm

입니다. 로봇 베이스 바로 아래 또는 바로 윗부분(아래 그림의 A 영역과 그 주변)은 제한된 작업 영역입니다.<br>
관절 좌표계를 사용하는 동작(예: Move J)에서는 문제가 없지만, 관성 좌표계를 사용하는 동작(예: Move L)에서는 이 영역을 통과하는 것은 제한됩니다.<br>
이 영역은 기구적인 특이점 영역(singular area)으로써, 관성 좌표계를 사용하여 이동시, 빠른 관절 속도를 발생시키거나 정지할 수 있습니다.

![missing](/manual/common/product_introduction/7-1.png)

A. 특이점(Singular point) 영역(직교 좌표계 움직임 시 움직임이 제한되는 영역)<br>
B. 협동로봇이 작동 가능한 작업영역

![missing](/manual/common/product_introduction/7-2.png)
