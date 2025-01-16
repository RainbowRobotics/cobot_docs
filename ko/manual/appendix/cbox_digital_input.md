---
layout: doc
outline: deep
---

# 컨트롤 박스 디지털 입력

<div class="warning custom-block">
    <p class="custom-block-title">주의</p>
    <ul>
        <li>
            Control Box Digital 입력 포트 결선 이전에, 전원 차단이 되어야 합니다.
        </li>
    </ul>
</div>

### 1. 디지털 입력[DI00 ~ DI15] 내부 회로도

![missing](/manual/ko/appendix/d-1/1.png)

Control Box Digital 입력(DI00-DI15)을 받는 소자 구성입니다.<br>
내부 24V 공급 단자가 있으며, 외부 24V 공급 시 오동작이 발생합니다.

### 2. Digital 입력[DI00 ~ DI15] 소자 사용 방식

![missing](/manual/ko/appendix/d-1/2-1.png)

RB Control Box Digital 입력 소자(DI00-DI15) 사용 방법입니다.

![missing](/manual/ko/appendix/d-1/2-2.png)

Digital 입력 신호의 전압/전류 특성 곡선입니다.

### 3. Digital 입력[DI00 ~ DI15] 특성

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
        <th>DI00 ~ DI15</th>
        <td>Voltage</td>
        <td>-3</td>
        <td>-</td>
        <td>30</td>
        <td>V</td>
    </tr>
    <tr>
        <th>DI00 ~ DI15</th>
        <td>OFF region</td>
        <td>-3</td>
        <td>-</td>
        <td>5</td>
        <td>V</td>
    </tr>
    <tr>
        <th>DI00 ~ DI15</th>
        <td>ON region</td>
        <td>11</td>
        <td>-</td>
        <td>30</td>
        <td>V</td>
    </tr>
    <tr>
        <th>DI00 ~ DI15</th>
        <td>Current (11-30V)</td>
        <td>2</td>
        <td>-</td>
        <td>15</td>
        <td>mA</td>
    </tr>
    <tr>
        <th>DI00 ~ DI15</th>
        <td>Function</td>
        <td>-</td>
        <td>PNP+</td>
        <td>-</td>
        <td>Type</td>
    </tr>
    <tr>
        <th>DI00 ~ DI15</th>
        <td>IEC 61131-2</td>
        <td>-</td>
        <td>1</td>
        <td>-</td>
        <td>Type</td>
    </tr>
</table>

<u>이는 Digital 입력 0번부터 Digital 입력 15번까지만 적용되는 사양입니다.</u>

### 4. Digital 입력[DI16 - DI17] 내부 회로도

![missing](/manual/ko/appendix/d-1/4.png)

Control Box Digital 입력(DI16-DI17)을 받는 소자 구성입니다.<br>
내부 24V 공급 단자가 있으며, 외부 24V 공급 시 오동작이 발생합니다.

### 5. Digital 입력[DI16 - DI17] 특성

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
        <th>DI16 - DI17</th>
        <td>Voltage</td>
        <td>0</td>
        <td>-</td>
        <td>25</td>
        <td>V</td>
    </tr>
    <tr>
        <th>DI16 - DI17</th>
        <td>OFF region</td>
        <td>0</td>
        <td>-</td>
        <td>7</td>
        <td>V</td>
    </tr>
    <tr>
        <th>DI16 - DI17</th>
        <td>ON region</td>
        <td>7</td>
        <td>-</td>
        <td>25</td>
        <td>V</td>
    </tr>
    <tr>
        <th>DI16 - DI17</th>
        <td>Function</td>
        <td>-</td>
        <td>PNP+</td>
        <td>-</td>
        <td>Type</td>
    </tr>
</table>

<u>이는 Digital 입력 16, 17번만 적용되는 사양입니다.</u>

### 6. 테스트 환경

Digital 입력 소자 테스트는 Toggle 스위치를 사용하여 진행하였으며, 아래와 같은 구성으로 테스트하였습니다.

![missing](/manual/ko/appendix/d-1/6.png)

### 7. PNP 방식 센서 사용 방법

![missing](/manual/ko/appendix/d-1/7.png)

PNP 방식 센서의 경우 위 결선과 동일하게 사용 가능합니다.<br>
<u>이는 모든 Digital 입력에 적용되는 사양입니다.</u>

### 8. 3-Position Enabling Device 결선 방법

![missing](/manual/ko/appendix/d-1/8-1.png)

초기 출하 상태는 위와 같으며, 안전에 의거하여 동작허가 장치 장착이 가능합니다.<br>
(출처: https://www.motionsolutions.com)

![missing](/manual/ko/appendix/d-1/8-2.png)

![missing](/manual/ko/appendix/d-1/8-3.png)

![missing](/manual/ko/appendix/d-1/8-4.png)

<u>이는 ISO 10218, IEC 60204-1에 의거한 동작허가 장치(Enabling Device)에 적용되는 내용입니다.</u>

### 9. 안전 기기 결선 방법

라이트 커튼, 안전 도어 센서 등과 같이 PNP 방식 센서 및 Enabling Device 등 같은 결선을 사용하는 안전 기기 결선은 위 설명과 동일 합니다.
