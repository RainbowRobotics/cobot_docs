---
layout: doc
outline: deep
---

# Rainbow x Robotiq Gripper/Sensor v1.2

### 1. 하드웨어 결선

<div class="warning custom-block">
<p class="custom-block-title">주의</p>
<ul>
<li>
결선 재구성 시, 시스템 전원이 꺼진 상태에서 진행하세요.
</li>
</ul>
</div>

#### 1.1 제어 박스와 연결할 경우

![missing](/technical_docs/common/device_robotiq/1-1.png)

- Robotiq 제품의 전원 케이블을 컨트롤 박스 I/O 터미널 블록의 24V에 연결하세요.
- Robotiq 제품의 접지 케이블을 컨트롤 박스 I/O 터미널 블록의 GND에 연결하세요.
- Robotiq 제품의 통신 USB 케이블을 컨트롤 박스의 USB 포트에 연결하세요.

::: tip
지원 장치 유형 : 2F-85 / 2F-140 / Hand-E / FT300 / EPick
:::

#### 1.2 로봇 툴 플랜지에 연결할 경우

![missing](/technical_docs/common/device_robotiq/1-2.png)

- Robotiq 제품의 전원 케이블을 Tool-Flange I/O 단자의 24V에 연결하세요.
- Robotiq 제품의 접지 케이블을 Tool-Flange I/O 단자의 GND에 연결하세요.
- Robotiq 제품의 RS485 D+, D-(A/B) 케이블을 Tool-Flange I/O 단자의 RS485에 연결하세요.

::: tip
지원 장치 유형 : 2F-85 / 2F-140 / Hand-E / EPick
:::

### 2. 소프트웨어 사용

<div class="warning custom-block">
<p class="custom-block-title">주의</p>
<ol>
<li>
결선 재구성 시, 시스템 전원이 꺼진 상태에서 진행하세요.
</li>
<li>
소프트웨어 버전에 따라 UI 화면 구성은 상이할 수 있습니다.
</li>
</ol>
</div>

#### 2.1 Robotiq Hand-E

Make 페이지 > Command Actions > Gripper

![missing](/technical_docs/common/device_robotiq/2-1.png)

#### 2.2 Robotiq 2F-85

Make 페이지 > Command Actions > Gripper

![missing](/technical_docs/common/device_robotiq/2-2.png)

#### 2.3 Robotiq 2F-140

Make 페이지 > Command Actions > Gripper

![missing](/technical_docs/common/device_robotiq/2-3.png)

#### 2.4 Robotiq EPick

Make 페이지 > Command Actions > Gripper

![missing](/technical_docs/common/device_robotiq/2-4.png)

#### 2.5 FT300 캘리브레이션

Make 페이지 > 오른쪽 사이드 바 > Setting

![missing](/technical_docs/common/device_robotiq/2-5.png)

#### 2.6 FT300 을 활용한 자동 COM (COG) 찾기

Make 페이지 > 오른쪽 사이드 바 > Setting

![missing](/technical_docs/common/device_robotiq/2-6.png)

#### 2.7 FT300 을 활용한 힘 제어

Make 페이지 > Command Actions > Force

![missing](/technical_docs/common/device_robotiq/2-7.png)
