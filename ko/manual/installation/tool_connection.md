---
layout: doc
outline: deep
---

# 로봇과 툴 연결하기

M6 볼트 4 개를 이용하여 툴 플랜지에 툴을 고정합니다(규격: ISO 9409-1-50-4-M6).

- 툴과 고정용 M6 볼트는 제품에 포함되지 않습니다.
- 툴을 결합하는 방법은 툴마다 다를 수 있습니다. 자세한 방법은 툴 제조사에서 제공하는 사용설명서를 참조하십시오.

![missing](/manual/common/installation/5-1.png)

- 툴을 고정한 후 툴 I/O 또는 컨트롤 박스에 있는 I/O 포트에 필요한 케이블을 연결하십시오.
- 툴 플랜지에 위치한 I/O커넥터의 사양은 로봇 모델에 따라 상이합니다.

### 1. Non-E, E Version

![missing](/manual/common/installation/5-2.png)

- I/O connector A : Sam Woo Electronics/M12 x P0.5 female circular connector, 12pin/SW-10W-12(P)

<div class="center-align th-align td-align">
  <table>
    <tr>
      <th>포트</th>
      <th>레이아웃<br>(로봇 측)</th>
      <th>핀번호</th>
      <th>시그널<br>(Non-E Version)</th>
      <th>색상<br>(Thickness)</th>
      <th>시그널<br>(E Version)</th>
      <th>색상<br>(Thickness)</th>
    </tr>
    <tr>
      <td rowspan=12>Tool I/O</td>
      <td rowspan=12>
        <img src="/manual/common/installation/5-3.png" />
      </td>
      <td>1</td>
      <td>Digital Output A</td>
      <td>갈색 (AWG22)</td>
      <td>Digital Output A</td>
      <td>백색 (AWG25)</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Digital Output B</td>
      <td>청색 (AWG22)</td>
      <td>Digital Output B</td>
      <td>흑색 (AWG25)</td>
    </tr>
    <tr>
      <td>3</td>
      <td>0/12/24 VCC</td>
      <td>적색 (AWG22)</td>
      <td>0/12/24 VCC</td>
      <td>적색 (AWG25)</td>
    </tr>
    <tr>
      <td>4</td>
      <td>Ground</td>
      <td>흑색 (AWG22)</td>
      <td>Ground</td>
      <td>녹색 (AWG25)</td>
    </tr>
    <tr>
      <td>5</td>
      <td>Digital Input A</td>
      <td>백색 (AWG22)</td>
      <td>Digital Input A</td>
      <td>황색 (AWG25)</td>
    </tr>
    <tr>
      <td>6</td>
      <td>Digital Input B</td>
      <td>청색 (AWG26)</td>
      <td>Digital Input B</td>
      <td>갈색 (AWG25)</td>
    </tr>
    <tr>
      <td>7</td>
      <td>Analog Input A</td>
      <td>황색 (AWG26)</td>
      <td>Digital Input C</td>
      <td>청색 (AWG25)</td>
    </tr>
    <tr>
      <td>8</td>
      <td>Analog Input B</td>
      <td>적색 (AWG26)</td>
      <td>Digital Input D</td>
      <td>회색 (AWG25)</td>
    </tr>
    <tr>
      <td>9</td>
      <td>RS485+</td>
      <td>회색 (AWG26)</td>
      <td>RS485+</td>
      <td>주황색 (AWG25)</td>
    </tr>
    <tr>
      <td>10</td>
      <td>RS485-</td>
      <td>보라색 (AWG26)</td>
      <td>RS485-</td>
      <td>보라색 (AWG25)</td>
    </tr>
    <tr>
      <td>11</td>
      <td>Common Ground</td>
      <td>흑색 (AWG26)</td>
      <td>Digital Input E</td>
      <td>핑크색 (AWG25)</td>
    </tr>
    <tr>
      <td>12</td>
      <td>Common Ground</td>
      <td>녹색 (AWG26)</td>
      <td>Digital Input F</td>
      <td>내추럴색 (AWG25)</td>
    </tr>
  </table>
</div>

### 2. U Version

![missing](/manual/common/installation/5-2-2.png)

- I/O connector A : Binder / M8 male panel mount connector, 8pin / 76 6319 1111 00008-0200
- I/O connector B : Binder / M8 female panel mount connector, 8pin / 76 6618 1111 00008-0200

<div class="center-align th-align td-align">
  <table>
    <tr>
      <th>포트</th>
      <th>레이아웃<br>(로봇 측)</th>
      <th>핀번호</th>
      <th>U Version<br>A Port</th>
      <th>U Version<br>B Port</th>
      <th>색상 (A, B 동일)</th>
    </tr>
    <tr>
      <td rowspan=8>Tool I/O</td>
      <td rowspan=8>
        <div class="center-align">
          <img src="/manual/common/installation/5-4.png" />
          <label>A: Robot=Male</label>
          <img src="/manual/common/installation/5-5.png" />
          <label>B: Robot=Female</label>
        </div>
      </td>
      <td>1</td>
      <td>D+(RS485+)</td>
      <td>NC</td>
      <td>흰색 (White)</td>
    </tr>
    <tr>
      <td>2</td>
      <td>D-(RS485-)</td>
      <td>NC</td>
      <td>갈색 (Brown)</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Digital Input 1 (PNP)</td>
      <td>Digital Input 3 (PNP)</td>
      <td>녹색 (Green)</td>
    </tr>
    <tr>
      <td>4</td>
      <td>Digital Input 0 (PNP)</td>
      <td>Digital Input 2 (PNP)</td>
      <td>노란색 (Yellow)</td>
    </tr>
    <tr>
      <td>5</td>
      <td>Power(+)</td>
      <td>Power(+)</td>
      <td>회색 (Grey)</td>
    </tr>
    <tr>
      <td>6</td>
      <td>Digital Output 1 (PNP)</td>
      <td>Digital Input 5 (PNP)</td>
      <td>분홍색 (Pink)</td>
    </tr>
    <tr>
      <td>7</td>
      <td>Digital Output 0 (PNP)</td>
      <td>Digital Input 4 (PNP)</td>
      <td>파랑색 (Blue)</td>
    </tr>
    <tr>
      <td>8</td>
      <td>Ground (-)</td>
      <td>Ground (-)</td>
      <td>빨강색 (Red)</td>
    </tr>
  </table>
</div>

- Non-E Version 과 E Version, U Version은 서로 툴 플랜지의 사양이 다릅니다.
- [공통 내용] 내부 전원 공급은 GUI의 I/O 탭에서 0V, 12V, 24V로 설정할 수 있습니다.
  <div class="center-align th-align td-align">
    <table>
      <tr>
        <th>-</th>
        <th>최소</th>
        <th>형식</th>
        <th>최대</th>
        <th>단위</th>
      </tr>
      <tr>
        <th>24V 모드의 공급전압</th>
        <td>-</td>
        <td>24</td>
        <td>-</td>
        <td>V</td>
      </tr>
      <tr>
        <th>12V 모드의 공급전압</th>
        <td>-</td>
        <td>12</td>
        <td>-</td>
        <td>V</td>
      </tr>
      <tr>
        <th>두 모드의 공급전류</th>
        <td>-</td>
        <td>-</td>
        <td>2000</td>
        <td>mA</td>
      </tr>
    </table>
  </div>

- [Non-E Version] 툴 디지털 출력은 NPN 방식으로 적용되어 있습니다. 디지털 출력을 활성화하면, 해당 포트의 연결은 GND(ground)로 이어집니다.<br>
  비활성화 시, 해당 출력 포트는 개방됩니다(오픈-컬렉터/오픈-드레인). 전기 사양은 다음과 같습니다.
  <div class="center-align th-align td-align">
    <table>
      <tr>
        <th>Non-E Version</th>
        <th>최소</th>
        <th>형식</th>
        <th>최대</th>
        <th>단위</th>
      </tr>
      <tr>
        <th>개방 시 전압</th>
        <td>0</td>
        <td>-</td>
        <td>24</td>
        <td>V</td>
      </tr>
      <tr>
        <th>GND를 통한 전류</th>
        <td>0</td>
        <td>-</td>
        <td>2000</td>
        <td>mA</td>
      </tr>
    </table>
  </div>
- [E, U Version] 툴 디지털 출력은 NPN 방식으로 적용되어 있습니다. 디지털 출력을 활성화하면, 해당 포트의 연결은 VCC로 이어집니다.<br>
  비활성화 시, 해당 출력 포트는 개방됩니다(오픈-컬렉터/오픈-드레인). 전기 사양은 다음과 같습니다.
  <div class="center-align th-align td-align">
    <table>
      <tr>
        <th>E, U Version</th>
        <th>최소</th>
        <th>형식</th>
        <th>최대</th>
        <th>단위</th>
      </tr>
      <tr>
        <th>개방 시 전압</th>
        <td>0</td>
        <td>-</td>
        <td>24</td>
        <td>V</td>
      </tr>
      <tr>
        <th>VCC를 통한 전류</th>
        <td>0</td>
        <td>-</td>
        <td>50</td>
        <td>mA</td>
      </tr>
    </table>
  </div>

### 3. Non-E Version 사용 예시

- 툴 디지털 출력을 사용하기 위해서는 아래 그림과 같이 12V 또는 24V 전원 공급을 사용하여 부하를 켜는 것을 보여줍니다. Tool Out 블록에서 출력 전압을 정의할 수 있습니다.

![missing](/manual/common/installation/5-6.png)

:::tip
아래 그림에 표시된 대로 유도 부하에 대하여 보호 다이오드를 사용하시길 <u>적극 권장</u>합니다.
:::

![missing](/manual/common/installation/5-7.png)

- 툴 디지털 입력은 PNP 및 풀 다운저항이 적용되어 있습니다. 따라서 입력 단자에 연결이 없을 경우(floating), 해당 입력 포트는 로우(Low, 0)로 읽힙니다. 전기 사양은 다음과 같습니다.
  <div class="center-align th-align td-align">
    <table>
      <tr>
        <th>-</th>
        <th>최소</th>
        <th>형식</th>
        <th>최대</th>
        <th>단위</th>
      </tr>
      <tr>
        <th>입력전압</th>
        <td>0</td>
        <td>-</td>
        <td>24</td>
        <td>V</td>
      </tr>
      <tr>
        <th>논리적 저 전압</th>
        <td>-</td>
        <td>-</td>
        <td>9</td>
        <td>V</td>
      </tr>
      <tr>
        <th>논리적 고 전압</th>
        <td>10</td>
        <td>-</td>
        <td>-</td>
        <td>V</td>
      </tr>
    </table>
  </div>

- 툴 디지털 입력을 사용하기 위하여 아래의 그림은 간단한 버튼을 연결하는 방법을 보여줍니다.

  ![missing](/manual/common/installation/5-8.png)

- 툴 아날로그 입력은 비차등(non-differential) 방식으로 전압을 측정하며, 측정 범주는 아래와 같습니다.
  <div class="center-align th-align td-align">
    <table>
      <tr>
        <th>-</th>
        <th>최소</th>
        <th>형식</th>
        <th>최대</th>
        <th>단위</th>
      </tr>
      <tr>
        <th>전압모드의 입력전압</th>
        <td>0</td>
        <td>-</td>
        <td>10</td>
        <td>V</td>
      </tr>
      <tr>
        <th>분해능</th>
        <td>-</td>
        <td>12</td>
        <td>-</td>
        <td>bit</td>
      </tr>
    </table>
  </div>

- 아래의 그림은 비차등(non-differential) 전압 출력 특성을 가진 아날로그 센서를 툴 플랜지에 연결하는 방법을 보여줍니다. (비차등 방식)

  ![missing](/manual/common/installation/5-9.png)

- 아래의 그림은 차등(differential) 전압 출력 특성을 가진 아날로그 센서를 툴 플랜지에 연결하는 방법을 보여줍니다.<br>
  센서의 음출력부(negative output part)를 GND(ground)에 연결하면 비차등 센서와 동일하게 작동됩니다.

  ![missing](/manual/common/installation/5-10.png)

### 4. E Version, U Version 사용 예시

- 툴 디지털 출력을 사용하기 위해서는 아래 그림과 같이 12V 또는 24V 전원 공급을 사용하여 부하를 켜는 것을 보여줍니다.<br>
  Tool Out 블록에서 출력 전압을 정의할 수 있습니다.

  ![missing](/manual/common/installation/5-11.png)

:::tip
아래 그림에 표시된 대로 유도 부하에 대하여 보호 다이오드를 사용하시길 <u>적극 권장</u>합니다.
:::

![missing](/manual/common/installation/5-12.png)

- 툴 디지털 입력은 PNP 방식으로 적용되어 있습니다. 따라서 입력 단자에 연결이 없을 경우(floating) 해당 입력 포트는 로우(Low, 0)로 읽힙니다. 전기 사양은 다음과 같습니다.
  <div class="center-align th-align td-align">
    <table>
      <tr>
        <th>-</th>
        <th>최소</th>
        <th>형식</th>
        <th>최대</th>
        <th>단위</th>
      </tr>
      <tr>
        <th>입력전압</th>
        <td>0</td>
        <td>-</td>
        <td>24</td>
        <td>V</td>
      </tr>
      <tr>
        <th>논리적 저 전압</th>
        <td>-</td>
        <td>-</td>
        <td>3</td>
        <td>V</td>
      </tr>
      <tr>
        <th>논리적 고 전압</th>
        <td>4</td>
        <td>-</td>
        <td>-</td>
        <td>V</td>
      </tr>
    </table>
  </div>

- 툴 디지털 입력을 사용하기 위하여 아래의 그림은 간단한 버튼을 연결하는 방법을 보여줍니다.

  ![missing](/manual/common/installation/5-13.png)

- E Version, U Version 에서는 툴 아날로그 입력을 지원하지 않습니다.

<div class="warning custom-block">
  <p class="custom-block-title">주의</p>
  <ol>
    <li>자세한 기술 사양과 결선 예시는 부록 D에 표기되어 있습니다.</li>
    <li>툴 플랜지의 단면도에 관한 사항은 부록 C를 참조하시기 바랍니다.</li>
  </ol>
  <p>툴 플랜지에서는 RS485 시리얼 통신을 지원하며, 아래와 같은 시리얼 통신 규격을 지원합니다.</p>
  <table class="th-align td-align">
    <tr>
      <th>전송속도</th>
      <td>9600, 19200, 38400, 57600, 115200, 1M</td>
    </tr>
    <tr>
      <th>정지비트</th>
      <td>1,2</td>
    </tr>
    <tr>
      <th>패리티</th>
      <td>없음, 홀수, 짝수</td>
    </tr>
  </table>
</div>
