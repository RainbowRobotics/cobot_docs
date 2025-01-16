---
layout: doc
outline: deep
---

# 툴 플랜지 디지털 입력

<div class="warning custom-block">
    <p class="custom-block-title">주의</p>
    <ul>
        <li>
            RB Series Tool Flange I/O 입력 포트 결선 이전에, 전원 차단이 되어야 합니다.
        </li>
        <li>
            하단의 전기 도면은 Non-E 타입에만 해당합니다.
        </li>
    </ul>
</div>

### 1. Digital 입력 내부 회로도

![missing](/manual/ko/appendix/d-3/1-1.png)

Tool Flange Digital 입력을 하는 소자 구성입니다.

<div style="display: flex;">
    <div>
        <img src="/manual/ko/appendix/d-3/1-2.png" />
        <br>
        <figcaption style="text-align: center;">(1) Non-E Version Robot</figcaption>
    </div>
    <div>
        <img src="/manual/ko/appendix/d-3/1-3.png" />
        <br>
        <figcaption style="text-align: center;">(2) E Version Robot</figcaption>
    </div>
</div>

외부 노출된 커넥터 결선도입니다. 로봇 버전에 따라 결선도가 위와 같이 나뉘게 됩니다.

### 2. Digital 입력 특성

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
        <th>DIA, ... , DIF</th>
        <td>Voltage</td>
        <td>0</td>
        <td>-</td>
        <td>24</td>
        <td>V</td>
    </tr>
    <tr>
        <th>DIA, ... , DIF</th>
        <td>OFF region</td>
        <td>0</td>
        <td>-</td>
        <td>9</td>
        <td>V</td>
    </tr>
    <tr>
        <th>DIA, ... , DIF</th>
        <td>ON region</td>
        <td>0</td>
        <td>-</td>
        <td>24</td>
        <td>V</td>
    </tr>
</table>

<u>이는 Tool Flange Digital 입력에만 적용되는 사양입니다(이때, Non-E version Robot은 DIA, DIB만 적용됩니다.)</u>

### 3. 테스트 환경

Digital 입력 소자 테스트는 파워 서플라이를 사용하여 진행하였으며, 아래와 같은 구성으로 테스트 하였습니다.

![missing](/manual/ko/appendix/d-3/3-1.png)

<div style="display: flex;">
    <div>
        <img src="/manual/ko/appendix/d-3/3-2.png" />
        <br>
        <figcaption style="text-align: center;">Non-E Version</figcaption>
    </div>
    <div>
        <img src="/manual/ko/appendix/d-3/3-3.png" />
        <br>
        <figcaption style="text-align: center;">E Version</figcaption>
    </div>
</div>

### 4. PNP 방식 센서 사용 방법

(출처: https://blog.naver.com/mjg5080/97380010)

![missing](/manual/ko/appendix/d-3/4.png)

PNP 방식 센서의 경우 위 결선과 동일하게 사용 가능합니다.<br>
<u>이는 Control Box Digital 입력에 동일하게 적용되는 사양입니다.</u>
