---
layout: doc
outline: deep
---

# 툴 플랜지 디지털 출력

<div class="warning custom-block">
    <p class="custom-block-title">주의</p>
    <ul>
        <li>
            Tool Flange I/O 출력 포트 결선 이전에, 전원 차단이 되어야 합니다.
        </li>
        <li>
            하단의 전기 도면은 Non-E 타입에만 해당합니다.
        </li>
    </ul>
</div>

### 1. Digital 출력 내부 회로도

![missing](/manual/ko/appendix/d-4/1-1.png)

Tool Flange Digital 출력[DOA, DOB]을 하는 소자 구성입니다.

<div style="display: flex;">
    <div>
        <img src="/manual/ko/appendix/d-4/1-2.png" />
        <br>
        <figcaption style="text-align: center;">(1) Non-E Version Robot</figcaption>
    </div>
    <div>
        <img src="/manual/ko/appendix/d-4/1-3.png" />
        <br>
        <figcaption style="text-align: center;">(2) E Version Robot</figcaption>
    </div>
</div>

외부 노출된 커넥터 결선도입니다. 로봇 버전에 따라 결선도가 위와 같이 나뉘게 됩니다.

### 2. Digital 출력 특성

<table>
    <tr>
        <th>Terminals</th>
        <th>Parameter</th>
        <th>Min</th>
        <th>Typ</th>
        <th>Max</th>
        <th>Unit</th>
    </tr>
    <tr>
        <th>DOA, DOB</th>
        <td>Voltage</td>
        <td>0</td>
        <td>12/24</td>
        <td>24</td>
        <td>V</td>
    </tr>
    <tr>
        <th>DOA, DOB</th>
        <td>Current Ver 1.</td>
        <td>0</td>
        <td>150</td>
        <td>700*</td>
        <td>mA</td>
    </tr>
    <tr>
        <th>DOA, DOB</th>
        <td>Current Ver 2.</td>
        <td>0</td>
        <td>2000</td>
        <td>2000</td>
        <td>mA</td>
    </tr>
</table>
*Tsp = 25ºC; pulsed; tp <= 10µs<br>

<u>이는 Tool Flange Digital 출력 A, B만 적용되는 사양입니다.</u><br>
<u>2019. 07. 24. 일 기준 납품된 협동로봇은 Current Ver 1. 입니다.</u>

### 3. 테스트 환경

Digital 출력 소자 테스트는 24V dc LED를 사용하여 진행하였으며, 아래와 같은 구성으로 테스트 하였습니다.

![missing](/manual/ko/appendix/d-4/3-1.png)

<div style="display: flex;">
    <div>
        <img src="/manual/ko/appendix/d-4/3-2.png" />
        <br>
        <figcaption style="text-align: center;">Non-E Version</figcaption>
    </div>
    <div>
        <img src="/manual/ko/appendix/d-4/3-3.png" />
        <br>
        <figcaption style="text-align: center;">E Version</figcaption>
    </div>
</div>

자사 매뉴얼에 아래와 같은 예시가 정의되어 있습니다.

![missing](/manual/ko/appendix/d-4/3-4.png)

### 4. 사용시 주의 사항

Digital 출력 소자의 경우 NPN 방식이지만 내부 10K 풀업 저항이 내장되어 있습니다.<br>

대부분 소자(LED, 솔레노이드 밸브, 릴레이)는 3번 테스트 환경 혹은, 상용 Gripper에 디지털 신호 인가 기능과 같이 사용이 가능하지만, 자사 Tool Flange Digital 입력 소자와 같은 전압 분배를 사용하는 환경에서는 동작이 안될 수 있습니다.

<div class="center-align">
    <img src="/manual/ko/appendix/d-4/4-1.png" />
    <br>
    <figcaption><u>자사 Digital 출력을 Digital 입력에 연결한 경우</u></figcaption>
</div>

<br>

<div class="center-align">
    <img src="/manual/ko/appendix/d-4/4-2.png" />
    <br>
    <figcaption><u>Digital 출력 Low</u></figcaption>
</div>

<br>
Digital 입력은 0V가 입력되어 Low로 출력 됩니다.

<div class="center-align">
    <br>
    <img src="/manual/ko/appendix/d-4/4-3.png" />
    <br>
    <figcaption><u>Digital 출력 High</u></figcaption>
</div>

<u>Digital 입력은 저항 값에 따라 인식이 안될 경우가 생깁니다.</u><br>
위의 경우 MCU에 인가되는 전압이 EVCC 24Vdc일 경우 약 2V가 인가되며, 이는 Low로 인식이 됩니다.<br>

부득이하게 위 상황으로 운용해야 할 경우, Digital 입력단 저항비 조절이 필요합니다.
