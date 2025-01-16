---
layout: doc
outline: deep
---

# 범용 아날로그 I/O구성

높은 신뢰성을 위하여 다음과 같은 방법을 권장합니다.

- I/O에 가장 가까운 아날로그 GND를 사용합니다.
- 장비 및 로봇 컨트롤 박스는 동일한 GND를 사용합니다. 아날로그 I/O는 로봇 컨트롤 박스에서 절연되지 않습니다.
- 쉴드 또는 트위스트 페어 처리된 케이블을 사용합니다. Power(J12) 터미널의 GND 쉴드에 연결합니다.

<div class="center-align th-align td-align">
  <table>
    <tr>
      <th>터미널</th>
      <th>매개변수</th>
      <th>최소</th>
      <th>형식</th>
      <th>최대</th>
      <th>단위</th>
    </tr>
    <tr>
      <th colspan=6>전압모드 입력</th>
    </tr>
    <tr>
      <td>AIx - AG</td>
      <td>전압</td>
      <td>0</td>
      <td>-</td>
      <td>10</td>
      <td>V</td>
    </tr>
    <tr>
      <td>AIx - AG</td>
      <td>분해능</td>
      <td>-</td>
      <td>16</td>
      <td>-</td>
      <td>비트</td>
    </tr>
    <tr>
      <th colspan=6>전압모드 출력</th>
    </tr>
    <tr>
      <td>AOx – AG</td>
      <td>전압</td>
      <td>0</td>
      <td>-</td>
      <td>10</td>
      <td>V</td>
    </tr>
    <tr>
      <td>AOx – AG</td>
      <td>분해능</td>
      <td>-</td>
      <td>16</td>
      <td>-</td>
      <td>비트</td>
    </tr>
  </table>
</div>

### 1. 아날로그 출력

아날로그 출력을 컨베이어 벨트의 속도 컨트롤 입력으로 사용할 수 있습니다. 구성 방법은 다음과 같습니다.

![missing](/manual/common/installation/10-1.png)

### 2. 아날로그 입력

아날로그 센서의 출력 값을 아날로그 입력으로 사용할 수 있습니다. 구성 방법은 다음과 같습니다.

![missing](/manual/common/installation/10-2.png)

### 3. LCD 상태 표시창 설명

![missing](/manual/common/installation/10-3.png)

1. 알림 박스(1): 시스템 상태에 관한 알림 박스입니다.<br>
   - Please Wait: 컨트롤 박스 내부 PC가 준비가 되지 않았음을 나타냅니다.<br>
   - default: 컨트롤 박스 내부 PC가 준비가 끝났음을 나타냅니다.
2. 알림 박스(2): 로봇 동작 및 상태에 관한 알림 박스입니다.
3. <span style="display:flex; align-items:center; white-space:pre">동작 아이콘:
   브레이크 잠김(<img src="/manual/common/installation/10-4.png" />) 또는
   해제(<img src="/manual/common/installation/10-5.png" />) 상태,
   재생(<img src="/manual/common/installation/10-6.png" />) 또는
   정지(<img src="/manual/common/installation/10-7.png" />) 상태,
   충돌(<img src="/manual/common/installation/10-8.png" />) 또는
   안전(<img src="/manual/common/installation/10-9.png" />)</span><br>
   상태를 나타냅니다.
4. 전력 사용량: 와트(W) 단위의 총 전력 사용량을 나타냅니다.
5. 시스템 버전 정보: 시스템 버전 정보입니다.
