---
layout: doc
outline: deep
---

# 컨트롤 박스 디지털 출력

<div class="warning custom-block">
    <p class="custom-block-title">주의</p>
    <ul>
        <li>
            Control Box Digital 출력 포트 결선 이전에, 전원 차단이 되어야 합니다.
        </li>
    </ul>
</div>

### 1. Digital 출력[DO00 ~ DO15] 내부 회로도

![missing](/manual/ko/appendix/d-2/1.png)

Control Box Digital 출력(DO00-DO15)을 하는 소자 구성입니다.<br>
내부 GND 단자가 있으며, 연결하고자 하는 외부 센서, 장비의 GND와 연결이 되어야 합니다.

### 2. Digital 출력[DO00 ~ DO15] 소자 사용 방식

![missing](/manual/ko/appendix/d-2/2-1.png)

RB Control Box Digital 출력 소자(DO00-DO15) 사용 방법입니다.

![missing](/manual/ko/appendix/d-2/2-2.png)

단일 Digital 출력의 사용 방법입니다.<br>
Control Box 내부에 Vbb 전원이 공급되고 있으며 소스 방식으로 출력 됩니다.

### 3. Digital 출력[DI00 ~ DI15] 특성

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
        <th>DO00 ~ DO15</th>
        <td>Voltage</td>
        <td>-</td>
        <td>24</td>
        <td>-</td>
        <td>V</td>
    </tr>
    <tr>
        <th>DO00 ~ DO15</th>
        <td>Current</td>
        <td>0</td>
        <td>-</td>
        <td>1</td>
        <td>A</td>
    </tr>
    <tr>
        <th>DO00 ~ DO15</th>
        <td>Function</td>
        <td>-</td>
        <td>PNP</td>
        <td>-</td>
        <td>Type</td>
    </tr>
</table>

<u>단일 채널 1A 사용 가능하지만, 모든 채널의 총 전류량이 2A 이하가 되어야 합니다.</u>

### 4. 테스트 환경

Digital 출력 소자 테스트는 24Vdc LED를 사용하여 진행하였으며, 아래와 같은 구성으로 테스트 하였습니다.

![missing](/manual/ko/appendix/d-2/4.png)
