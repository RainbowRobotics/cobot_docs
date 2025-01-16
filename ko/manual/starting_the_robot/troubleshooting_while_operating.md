---
layout: doc
outline: deep
---

# 로봇 운용 중 발생한 특이사항 대처방법

로봇 운용 중에는 여러가지 문제 상황이 발생할 수 있고 그에 따른 대처법들이 있습니다.

### 1. 외부 충돌(Out Collision)

![missing](/manual/ko/start_robot/3-1-1.png)

![missing](/manual/ko/start_robot/3-1-2.png)

![missing](/manual/ko/start_robot/3-1-3.png)

로봇이 작동 중에 외부의 물체와 충돌했을 때 로봇이 작업을 일시정지 합니다.<br>
각 위 그림을 보면 외부 충돌 코드가 있는데, 각각의 의미는 아래와 같습니다.

- OUT : 충돌에 의한 과전류가 각 관절의 전류 센서에서 측정 될 때
- ACC, GYR : 충돌에 의해 순간 빠른 진동이 로봇에 측정 될 때

우선 외부 충돌 요인을 제거합니다. 이후 두가지의 선택지가 있습니다.<br>
로봇이 하던 작업을 중단하고 정비를 하려면 Halt 버튼을 눌러 작업을 종료합니다.<br>
로봇이 하던 작업을 계속하기 위해서는 Resume 버튼을 눌러 작업을 재개합니다.

**cf) TOK TOK 회복법**<br>
외부 충돌로 인한 일시 정지 시 로봇 팔의 말단부를 가볍게 2회 두드리면 일시정지 상태가 회복됩니다(Resume 버튼과 동일 효과).

### 2. 자가 충돌 (Self Collision)

<br>

<div class="flex-center-align">
  <img src="/manual/ko/start_robot/3-2-1.png" />
  <img src="/manual/ko/start_robot/3-2-2.png" style="margin-left: 20px;" />
</div>

첫번째 그림과 같이 로봇의 일부분이 지정된 작업 범위를 벗어나거나, 두번째 그림과 같이 로봇 자체적으로 충돌 위험이 있는 모션에 근접했을 때 로봇이 작업을 정지합니다.<br>
티칭 버튼을 사용하여 직접 교시 기능을 통해 로봇의 상태를 정상상태로 만들어야 합니다. 이후 티칭한 모션 및 작업 범위 설정을 검토합니다.

Make 화면의 Simulation 모드에서 발생시 다음과 같은 방법으로 복구할 수 있습니다.

- 로봇의 모션 관련 버튼을 통해 로봇을 자가충돌상황에서 회복.
- Real 모드로 일시적으로 변경해 실제 로봇의 관절 정보를 받아 회복.
- 티칭 버튼을 눌러 실제 로봇의 관절 정보를 받아 회복.

### 3. 알람 메시지

![missing](/manual/ko/start_robot/3-3.png)

프로그램이 진행되는 중 Alarm 메시지 기능이 실행될 때 로봇이 작업을 일시 정지합니다.<br>
Resume 버튼을 눌러 작업을 진행하거나, Halt 버튼을 눌러 작업을 정지 시킵니다.

### 4. 태블릿 PC 분리

![missing](/manual/ko/start_robot/3-4.png)

컨트롤 박스(컨트롤러)와 태블릿 PC가 분리되거나 강제로 로봇 컨트롤 박스의 주전원(220V)을 차단 하였을 때 발생합니다.<br>
USB 케이블이 손상되었을 경우 교체가 필요하며, 연결이 지속적으로 이루어 지지 않는다면, 다른 USB 포트로 시도해 보세요.

### 5. 외부 전력공급 중단

![missing](/manual/ko/start_robot/3-5.png)

로봇 팔에 공급되는 전력이 중단될 때 발생합니다. 비상 정지 스위치를 누를 경우 나타납니다.<br>
비상 정지 스위치를 정상적으로 복구한 후, 다시 로봇을 초기화 한 이후 사용합니다.

### 6. 관절 제어기 에러 검출

관절제어기에서 로봇을 제어하기 어렵다고 판단되는 경우에 로봇을 정지합니다.

다음과 같은 항목이 존재합니다.

<div class="flex-center-align th-align">
  <table>
    <tr>
      <th>BIG Error</th>
      <td>입력 레퍼런스와 엔코더의 차이가 특정 값 이상 벌어졌을 때 발생</td>
    </tr>
    <tr>
      <th>JAM Error</th>
      <td>엔코더 값이 변화가 없으나 특정 값 이상의 전류가 특정 시간 이상 흐를 때 발생</td>
    </tr>
    <tr>
      <th>CUR Error</th>
      <td>특정 값 이상의 전류가 특정시간 이상 흐를 때 발생</td>
    </tr>
    <tr>
      <th>Temperature Error</th>
      <td>제어보드의 온도가 특정 값 이상일 때 발생</td>
    </tr>
    <tr>
      <th>Mode Error</th>
      <td>메인 제어기에서 명령한 제어모드가<br>현재 관절제어기의 모드와 일치하지 않을 때 발생</td>
    </tr>
  </table>
</div>
