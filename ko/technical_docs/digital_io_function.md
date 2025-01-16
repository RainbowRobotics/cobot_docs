---
layout: doc
outline: deep
---

# 제어박스 디지털 I/O 특수 기능 v221004

### 1. 제어박스 디지털 입력 기능 정의

<br>

#### 1.1 R=Start Program (Once)

Idle 상황: 현재 제어 박스에 로드되어 있는 프로그램을 1회 실행합니다.<br>
일시 정지 상황: 프로그램을 재시작 합니다.<br>
(Rising Edge)

#### 1.2 R=Stop Program

재생 중인 동작 및 프로그램을 정지합니다.<br>
(Rising Edge)

#### 1.3 R=Pause Program

재생 중인 프로그램을 일시 정지합니다.<br>
(Rising Edge)

#### 1.4 R=FreeDriveOn / F=Off

R=직접 교시 모드를 시작합니다.<br>
F=직접 교시 모드를 종료합니다.

#### 1.5 R=Speed 100% / F=0%

R=속도 바를 100% 로 설정합니다.<br>
F=속도 바를 0% 로 설정합니다.

#### 1.6 R=Real mode / F=simulation

R=리얼 로봇 모드로 전환합니다.<br>
F=시뮬레이션 모드로 전환합니다.

#### 1.7 R=Initialize Robot

로봇 팔을 활성화 (서보 온) 및 리얼 로봇 모드 전환합니다.<br>
(Rising Edge)

#### 1.8 H=Temporary Collision off

외부 충돌 감지 기능을 Off 합니다.<br>
(High State)

#### 1.9 H=Auto-Initialize Key

‘자동 활성화 with Key’ 설정의 사용을 위한 Key 포트 입니다.<br>
(High State)

#### 1.10 R=Resume from Out Coll. Stop

외부 충돌 감지로 인한 정지 상태를 해제합니다.<br>
(Rising Edge)

#### 1.11 R=Point Add

로봇 팔의 현재 자세/위치 정보를 Move 기능 하위에 포인트로 추가합니다.<br>
(Rising Edge)

#### 1.12 R=Start Program (Repeat)

Idle 상황: 현재 제어 박스에 로드되어 있는 프로그램을 반복 실행합니다.<br>
일시 정지 상황: 프로그램을 재시작 합니다.<br>
(Rising Edge)

#### 1.13 R=Approach to Begin

현재 제어 박스에 로드된 프로젝트에서 정의된 시작 위치 (홈 위치)로 이동합니다.<br>
(Rising Edge)

#### 1.14 R=Program Resume

일시 정지되어 있는 프로그램을 재시작 합니다.<br>
(Rising Edge)

#### 1.15 H=Quick Freedrive Change

직접 교시 모드를 종료할 때 빠르게 Servo 락을 잡는 기능입니다.<br>
(High State)

#### 1.16 R=Pause / F=Resume Program

R=프로그램 일시 정지 합니다.<br>
F=프로그램 재시작 합니다.

#### 1.17 F=Pause / R=Resume Program

F=프로그램 일시 정지 합니다.<br>
R=프로그램 재시작 합니다.

#### 1.18 H=Speed 100% / F=0%

H=속도 바를 100% 로 설정합니다.<br>
F=속도 바를 0%로 설정합니다.

#### 1.19 R=Load Default Program

제어 박스에 기본 프로그램으로 설정된 프로그램을 로드합니다.<br>
(Rising Edge)

#### 1.20 F=Robot Arm Power Down

로봇 팔에 인가되는 DC전원을 Off 합니다.<br>
(Falling Edge)

#### 1.21 R=Touch Sensing

터치 센싱 기능 사용 시, 용접기에서 출력되는 터치 센싱 신호 선을 결선하는 포트입니다.<br>
(Rising Edge)

#### 1.22 F=Touch Sensing

터치 센싱 기능 사용 시, 용접기에서 출력되는 터치 센싱 신호 선을 결선하는 포트입니다.<br>
(Falling Edge)

#### 1.23 H=No Arc

신호가 들어오면 (High-state 이면) No-Arc 기능을 활성화 합니다.<br>
(High State)

#### 1.24 H=Program Start Block

해당 신호가 High-state 동안 프로그램 시작을 할 수 없습니다.<br>
(High State)

#### 1.25 R=Ext.Joint 0 Plus / F=stop

R=부가 축 0번을 (+) 방향으로 이동 / F=정지

#### 1.26 R=Ext.Joint 0 Minus / F=stop

R=부가 축 0번을 (-) 방향으로 이동 / F=정지

#### 1.27 R=Ext.Joint 1 Plus / F=stop

R=부가 축 1번을 (+) 방향으로 이동 / F=정지

#### 1.28 R=Ext.Joint 1 Minus / F=stop

R=부가 축 1번을 (-) 방향으로 이동 / F=정지

#### 1.29 R=Ext.Joint 2 Plus / F=stop

R=부가 축 2번을 (+) 방향으로 이동 / F=정지

#### 1.30 R=Ext.Joint 2 Minus / F=stop

R=부가 축 2번을 (-) 방향으로 이동 / F=정지

#### 1.31 H=Safety Speed

로봇 팔의 동작 속도를 안전 속도 범위로 전환합니다.<br>
(High State)

#### 1.32 F=User Coord 0 ← TCP frame

사용자 좌표계 0번의 설정 값을 현재 로봇 팔의 TCP 좌표계의 위치/회전과 동일하게 변경합니다.<br>
(Falling Edge)

#### 1.33 F=User Coord 1 ← TCP frame

사용자 좌표계 1번의 설정 값을 현재 로봇 팔의 TCP 좌표계의 위치/회전과 동일하게 변경합니다.<br>
(Falling Edge)

#### 1.34 F=User Coord 2 ← TCP frame

사용자 좌표계 2번의 설정 값을 현재 로봇 팔의 TCP 좌표계의 위치/회전과 동일하게 변경합니다.<br>
(Falling Edge)

#### 1.35 F=Load & Run Program Table

Program Table의 해당 입력 포트의 번호에 설정된 프로젝트를 로드하고 재생합니다.<br>
(Falling Edge)

#### 1.36 R=Start Prog. (Once) / F=Stop Prog.

R=제어박스에 로드된 프로그램을 1회 실행 / F=프로그램 정지

#### 1.37 R=Start Prog. (Repeat) / F=Stop Prog.

R=제어박스에 로드된 프로그램을 반복 실행 / F=프로그램 정지

#### 1.38 F=Change Global Pinpoint #’s Pos

글로벌 핀-포인트의 자세 값을 로봇 팔의 현 자세 값으로 저장합니다.<br>
(Falling Edge)

#### 1.39 R=EXT.Joint 0 Slow Plus / F=stop

R=부가 축 0번을 느리게 (+) 방향으로 이동 / F=정지

#### 1.40 R=EXT.Joint 0 Slow Minus / F=stop

R=부가 축 0번을 느리게 (-) 방향으로 이동 / F=정지

#### 1.41 R=EXT.Joint 1 Slow Plus / F=stop

R=부가 축 1번을 느리게 (+) 방향으로 이동 / F=정지

#### 1.42 R=EXT.Joint 1 Slow Minus / F=stop

R=부가 축 1번을 느리게 (-) 방향으로 이동 / F=정지

#### 1.43 R=EXT.Joint 2 Slow Plus / F=stop

R=부가 축 2번을 느리게 (+) 방향으로 이동 / F=정지

#### 1.44 R=EXT.Joint 2 Slow Minus / F=stop

R=부가 축 2번을 느리게 (-) 방향으로 이동 / F=정지

#### 1.45 R=Reset SOS

SOS 상태를 초기화 (리셋) 합니다.<br>
(Rising Edge)

#### 1.46 F=Reset SOS

SOS 상태를 초기화 (리셋) 합니다.<br>
(Falling Edge)

### 2. 제어박스 디지털 출력 기능 정의

<br>

#### 2.1 H=Program Run / L=Idle

H=프로그램 실행 중 or 동작 명령 실행 중<br>
L=Idle 상황

#### 2.2 L=Program Run / H=Idle

L=프로그램 실행 중 or 동작 명령 실행 중<br>
H=Idle 상황

#### 2.3 H=Collision Detected

외부 충돌 (Out-Collision) 혹은 자가 충돌 (Self-Collision)이 감지되었는지 여부를 나타냅니다.<br>
(High State)

#### 2.4 H=Direct Teaching mode

직접 교시 모드 실행 중임을 나타냅니다.<br>
(High State)

#### 2.5 Bypass Din \#

선택 포트와 동일한 번호의 디지털 입력 신호를 전달합니다.

#### 2.6 Bypass Tool Din 0

툴 플랜지 입력 포트 0번 신호 전달합니다.

#### 2.7 Bypass Tool Din 1

툴 플랜지 입력 포트 1번 신호 전달합니다.

#### 2.8 H=Robot Ready / L=Not Init.

H=로봇 팔 활성화 상태<br>
L=로봇 팔 비활성화 상태

#### 2.9 H=Real mode / L=Simulation

H=리얼 로봇 모드 상태<br>
L=시뮬레이션 모드 상태

#### 2.10 H=Robot Moving / L=Idle

H=로봇 팔이 움직이고 있을 때<br>
L=로봇 팔이 정지 상태 일 때

#### 2.11 L=Robot Moving / H=Idle

L=로봇 팔이 움직이고 있을 때<br>
H=로봇 팔이 정지 상태 일 때

#### 2.12 H=Robot Initialize Fail

로봇 팔 활성화 과정 중에 실패하였을 때<br>
(High State)

#### 2.13 H=Robot Power On / L=Off

H=로봇 팔에 DC 전원 인가 상태<br>
L=전원 비인가 상태

#### 2.14 H=Coll. Detection On / L=Off

H=외부 충돌 감지 모드가 On 상태<br>
L=외부 충돌 감지 모드가 Off 상태

#### 2.15 H=Pause state

프로그램 및 동작이 일시 정지 상태임을 나타냅니다.<br>
(High State)

#### 2.16 H=Inbox 0 Trap Flag On

인-박스 0번에 트랩이 발생한 상태를 나타냅니다.<br>
(High State)

#### 2.17 H=Inbox 1 Trap Flag On

인-박스 1번에 트랩이 발생한 상태를 나타냅니다.<br>
(High State)

#### 2.18 PWM Module

해당 포트를 PWM 모듈로 사용합니다.

#### 2.19 H=TPU is conndected

티칭 팬던트 (Ui)가 연결된 상태를 나타냅니다.<br>
(High State)

#### 2.20 H=Run in MAKE page

현재 MAKE 창에서 프로그램이 실행중임을 나타냅니다.<br>
(High State)

#### 2.21 H=Run in PLAY page

현재 PLAY 창에서 프로그램이 실행중임을 나타냅니다.<br>
(High State)

#### 2.22 H=Is Conveyor mode

컨베이어 모드 사용중임을 나타냅니다.<br>
(High State)

#### 2.23 H=Control Box Boot

컨트롤 박스 부팅 완료 상태를 나타냅니다.<br>
(High State)

#### 2.24 H=Force Control mode

힘 제어 모드 사용중임을 나타냅니다.<br>
(High State)

#### 2.25 PC Alive Pulse

제어 박스 내 메인 PC가 살아있음을 확인하기 위한 펄스 신호 (Alive signal) 0.5Hz.

#### 2.26 H=Speed Bar 100%

속도 조절 바가 100%임을 나타냅니다.<br>
(High State)

#### 2.27 H=Last Program Load Success

마지막 수행한 ‘프로그램 로드’ (프로그램 불러오기)에 성공했음을 나타냅니다.<br>
만약 작성된 프로그램에 문법적 오류가 있을 경우, 로드에 실패합니다.<br>
(High State)

#### 2.28 H=TCP is in Inbox 0

인-박스 0번 영역에 TCP가 진입하였음을 나타냅니다.<br>
(High State)

#### 2.29 H=TCP is in Inbox 1

인-박스 1번 영역에 TCP가 진입하였음을 나타냅니다.<br>
(High State)

#### 2.30 H=Is Alarm

프로그램 상의 알람 기능이 실행되어 일시정지 중임을 나타냅니다.<br>
(High State)

#### 2.31 H=Robot posture is Begin posture

현재 로봇 팔이 시작 위치 (홈 위치)에 있음을 나타냅니다.<br>
시작 위치 (홈 위치)는 현재 로드된 프로그램에 따라 정의됩니다.<br>
(High State)

#### 2.32 H=Emergency Teaching Enable

비상 직접 교시 모드가 사용 가능한 상태임을 나타냅니다.<br>
(High State)

#### 2.33 H=Prog. Run in Sub.P area

현재 실행 중인 프로그램 구간이 서브-프로그램 (Sub.P) 영역일 경우 High 신호가 출력됩니다.<br>
(High State)

#### 2.34 H=Normal Program Run / L=Others

H=정상적인 프로그램 재생 상태 / L=그 외의 경우<br>
(일시 정지 혹은 외부 충돌 감지로 인한 일시 멈춤이 아닌 경우를 ‘정상’으로 정의합니다)<br>
(High State)

#### 2.35 L=Normal Program Run / H=Others

L=정상적인 프로그램 재생 상태 / H=그 외의 경우<br>
(일시 정지 혹은 외부 충돌 감지로 인한 일시 멈춤이 아닌 경우를 ‘정상’으로 정의합니다)<br>
(Low State)

#### 2.36 H=Hand Controller F1 pressed

핸드 컨트롤러의 F1 버튼이 눌린 상태임을 나타냅니다.

#### 2.37 H=Hand Controller F2 pressed

핸드 컨트롤러의 F2 버튼이 눌린 상태임을 나타냅니다.

#### 2.38 H=Hand Controller F3 pressed

핸드 컨트롤러의 F3 버튼이 눌린 상태임을 나타냅니다.

#### 2.39 H=Hand Controller F4 pressed

핸드 컨트롤러의 F4 버튼이 눌린 상태임을 나타냅니다.

#### 2.40 L=TCP is in Inbox 0

인-박스 0번 영역에 TCP가 진입 하였음을 나타냅니다.<br>
(Low State)

#### 2.41 L=TCP is in Inbox 1

인-박스 1번 영역에 TCP가 진입 하였음을 나타냅니다.<br>
(Low State)

#### 2.42 Sync with Dout 0~15

Dout 0 ~ 15 신호와 동기화하여 신호를 나타냅니다.

#### 2.43 H=Is SOS State

SOS 상태를 나타냅니다.<br>
(High state)

#### 2.44 L=Is SOS State

SOS 상태를 나타냅니다.<br>
(Low state)
