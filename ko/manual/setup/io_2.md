---
layout: doc
outline: deep
---

# Set-up (I/O 2)

프로그램 시작 전 / 후에 항상 수행할 I/O 값을 설정합니다.

### 1. Pre/poset Program I/O

![missing](/manual/ko/setup/IO5.png)

1. 프로그램 시작 (재생)전과 시작 (재생) 후에에 수행할 I/O 송출을 설정합니다.<br>
   :small_blue_diamond:Pre: 이곳에서 설정된 포트들은 프로그램 시작과 동시에 해당 설정 값으로 출력을 내보냅니다.<br>
   :small_blue_diamond:Posst: 이곳에서 설정된 포트들은 프로그램 종료 후에도 설정 값으로 출력을 내보냅니다. 
2. **Control Box Side An.out**: 0번부터 3번까지의 아날로그 출력 포트의 전압을 설정할 수 있습니다. 전압은 0V ~ 10V까지 설정할 수 있습니다.
3. **Tool Flange Side Voltage / D.out**: 툴플랜지의 디지털 출력에 대한 설정을 할 수 있습니다. 각 포트에 Bypass/0V/12V/24V를 설정할 수 있습니다.
4. 이 설정을 저장합니다.

### 2. Boot-Up Output/Action

![missing](/manual/ko/setup/IO6.png)

5. 제어 박스가 최초 부팅 직후, 제어 박스의 디지털 출력 옵션을 선택합니다.<br>
   이곳에서 설정된 포트들은 프로그램 종료 동시에 해당 설정 값으로 출력을 내보냅니다.
6. :small_blue_diamond:**Just after ControlBox Boot-Up** : 제어 박스 부팅 직후   실행할 User Script를 선택합니다.<br>
   :small_blue_diamond:**Just after Activation Done** : 로봇 프로그램 종료 직후 실행할 User Script를 선택합니다.<br>
   :small_blue_diamond:**Just after Real-Mode** : 리얼모드 설정 직후 실행할 User Script를 선택합니다.<br>
7. 변경된 세팅을 저장합니다.


### 3. Tool I/O SpecialFuction

![missing](/manual/ko/setup/IO7.png)

8. Tool Out 0번과 1번에 설정하고 싶은 기능을 할당해줍니다.
9. Tool Input 0번~5번에 설정하고 싶은 기능을 할당해줍니다.

