---
layout: doc
outline: deep
---

# 시스템 변수 v220801

<br>

#### 1. GLOB_PIN_0 ~ GLOB_PIN_39

시스템에 저장되는 글로벌 Point의 자세 값(위치 및 회전)을 저장하고 있는 변수입니다.<br>
(타입: Point)

#### 2. GLOB_PIN_0_J ~ GLOB_PIN_39_J

시스템에 저장되는 글로벌 Point의 관절 각도 값 (단위: 도)을 저장하고 있는 변수입니다.<br>
(타입: Joint)

#### 3. \_ROM_0~9

시스템에 저장되는 비휘발성 데이터로써, 프로그램이 종료되거나 컨트롤러 전원이 Off 되더라도 값을 기억하는 변수입니다.

#### 4. \_GDATA_0~19 (\_GLOBAL_0~19)

시스템에 설정된 기본 전역변수로써 모든 프로그램에서 사용 가능한 변수입니다.<br>
\_GDATA_0~19와 \_GLOBAL_0~19는 동일한 변수로써 같은 영역에 저장됩니다.

#### 5. SD_MOD_USER_0~127 (SD_MOD_ADDR_128~255)

로봇이 ModbusTCP 서버로 역할 시 유저가 사용 가능한 영역입니다.<br>
해당 변수는 Word(16bit) 영역이며 65,536(216)까지 표현 가능합니다.<br>
SD_MOD_USER_0~127와 SD_MOD_ADDR_128~255는 동일한 변수로써 같은 영역에 저장됩니다.<br>
예를 들어 128번 주소의 값은 SD_MOD_USER_0 또는 SD_MOD_ADDR_128에 해당합니다.

#### 6. SD_MODBUS_CLIENT_NUM

로봇이 ModbusTCP 서버로 역할 시 연결된 Client이 수를 나태나는 변수입니다.

#### 7. SD_TIMER_0~9

시간을 나타내는 변수로, 총 9개의 별도 시간제어를 할 수 있습니다.<br>
Make창의 Set-Timer Setting을 통하여 타이머 선택 및 초기값 설정이 가능합니다.<br>
프로그램 Run시 자동으로 시간이 증가하며, 주로 타이머 기능으로 사용됩니다.

#### 8. EIP_INT_R2P_0~19 (EIP_R2P_INT_0~19)

Ethernet/IP 통신을 이용하여 PLC에게 정수(Integer) 데이터를 전송할 때 사용하는 변수입니다.<br>
EIP_INT_R2P_0~19와 EIP_R2P_INT_0~19는 동일한 변수로써 같은 영역에 저장됩니다.

#### 9. EIP_INT_P2R_0~19 (EIP_P2R_INT_0~19)

Ethernet/IP 통신을 이용하여 PLC에서 정수(Integer) 데이터를 받을 때 사용하는 변수입니다.<br>
EIP_INT_P2R_0~19와 EIP_P2R_INT_0~19는 동일한 변수로써 같은 영역에 저장됩니다.

#### 10. EIP_REAL_R2P_0~19 (EIP_R2P_REAL_0~19)

Ethernet/IP 통신을 이용하여 PLC에게 부동소수점 데이터를 전송할 때 사용하는 변수입니다.<br>
EIP_REAL_R2P_0~19와 EIP_R2P_REAL_0~19는 동일한 변수로써 같은 영역에 저장됩니다.

#### 11. EIP_REAL_P2R_0~19 (EIP_P2R_REAL_0~19)

Ethernet/IP 통신을 이용하여 PLC에서 부동소수점 데이터를 받을 때 사용하는 변수입니다.<br>
EIP_REAL_P2R_0~19와 EIP_P2R_REAL_0~19는 동일한 변수로써 같은 영역에 저장됩니다.

#### 12. SD_J#\_ANG

SD_J0_ANG<br>
SD_J1_ANG<br>
SD_J2_ANG<br>
SD_J3_ANG<br>
SD_J4_ANG<br>
SD_J5_ANG<br>

로봇 팔의 관절 엔코더 각도 값을 나타내는 변수입니다.<br>
(단위: degree)

#### 13. SD_J#\_CUR

SD_J0_CUR<br>
SD_J1_CUR<br>
SD_J2_CUR<br>
SD_J3_CUR<br>
SD_J4_CUR<br>
SD_J5_CUR<br>

로봇 팔의 관절 전류 값을 나타내는 변수입니다. <br>
(단위: A)

#### 14. SD_EXT_AXIS\_\#

SD_EXT_AXIS_0<br>
SD_EXT_AXIS_1<br>
SD_EXT_AXIS_2<br>
SD_EXT_AXIS_3<br>
SD_EXT_AXIS_4<br>
SD_EXT_AXIS_5<br>

부가축의 관절 지령 값을 나타내는 변수입니다.<br>
(단위: degree)

#### 15. SD_EXJ#\_ANG

SD_EXJ0_ANG<br>
SD_EXJ1_ANG<br>
SD_EXJ2_ANG<br>
SD_EXJ3_ANG<br>
SD_EXJ4_ANG<br>
SD_EXJ5_ANG<br>

부가축의 관절 엔코더 각도 값을 나타내는 변수입니다.<br>
(단위: degree)

#### 16. SD_BEGIN_J\#

SD_BEGIN_J0<br>
SD_BEGIN_J1<br>
SD_BEGIN_J2<br>
SD_BEGIN_J3<br>
SD_BEGIN_J4<br>
SD_BEGIN_J5<br>

Begin 위치에 설정된 각 관절 각도 값을 나타내는 변수입니다.<br>
(단위: degree)

#### 17. SD_TCP_X

SD_TCP_X<br>
SD_TCP_Y<br>
SD_TCP_Z<br>
SD_TCP_RX<br>
SD_TCP_RY<br>
SD_TCP_RZ<br>

베이스 (글로벌) 좌표계를 기준으로 TCP의 위치/회전 값을 나타냅니다.<br>
(단위: mm & degree)

#### 18. SD_TCP_X_REF

SD_TCP_X_REF<br>
SD_TCP_Y_REF<br>
SD_TCP_Z_REF<br>
SD_TCP_RX_REF<br>
SD_TCP_RY_REF<br>
SD_TCP_RZ_REF<br>

베이스 (글로벌) 좌표계를 기준으로 TCP의 위치/회전 값을 나타냅니다.<br>
(단위: mm & degree)

#### 19. SD_EFT_FX

SD_EFT_FX<br>
SD_EFT_FY<br>
SD_EFT_FZ<br>
SD_EFT_MX<br>
SD_EFT_MY<br>
SD_EFT_MZ<br>

외부 힘 센서(External Force Torque sensor)에서 전달받은 센서 값을 나타내는 변수입니다.<br>
FX, FY, FZ는 힘 (N)을 나타내며, MX, MY, MZ는 토크 (Nm)를 의미합니다.<br>
각 X, Y, Z 값들의 기준 축은 센서 제조사의 좌표계를 기준으로 합니다.<br>
(단위: N, Nm)

#### 20. SD_EFT_F_SIZE

외부 힘 센서(External Force Transducer)에서 힘의 크기 (3축의 합)를 나타내는 변수입니다. (N)

#### 21. SD_EFT_M_SIZE

외부 힘 센서(External Force Transducer)에서 모멘트 토크의 크기 (3축의 합)를 나타내는 변수입니다. (Nm)

#### 22. SD_TEMPERATURE_MC#

SD_TEMPERATURE_MC0<br>
SD_TEMPERATURE_MC1<br>
SD_TEMPERATURE_MC2<br>
SD_TEMPERATURE_MC3<br>
SD_TEMPERATURE_MC4<br>
SD_TEMPERATURE_MC5<br>

현재 로봇 각 관절 온도 값을 나타내는 변수입니다.<br>
(단위: Celsius)

#### 23. SD_POWER_STATE

컨트롤러의 전원 관리 정보를 비트 단위로 관리합니다.

- SD_POWER_STATE >> 0 & 0x01 : 48V SMPS 작동여부
- SD_POWER_STATE >> 1 & 0x01 : Power switching 회로 작동정보
- SD_POWER_STATE >> 2 & 0x01 : 24V SMPS 작동여부
- SD_POWER_STATE >> 3 & 0x01 : 48V switching-line 여부
- SD_POWER_STATE >> 4 & 0x01 : PC Power switching 작동여부
- SD_POWER_STATE >> 5 & 0x01 : E-stop switching 작동여부

#### 24. SD_DEFAULT_SPEED

기본 속도배율을 나타내는 변수입니다. UI 속도 조절바 값이 0~1 사이로 표기됩니다.

#### 25. SD_ROBOT_STATE

로봇 동작명령 수행여부를 나타냅니다.

- 1 = Idle
- Others = Moving

#### 26. SD_TASK_RUN_STATE

프로그램 실행 시의 기본 상태

- 1 = Program not run / Idle
- 2 = Program is running
- 3 = Program I running + but ‘Paused’ state

#### 27. SD_COLLISION_DETECT_STATE

외부충돌감지기능 On / Off 설정 상태를 나타냅니다.

- 0 = 외부충돌감지 Off 설정 상태
- 1 = 외부충돌감지 On 설정 상태

#### 28. SD_COLL_DURING_MOVE

동작 중에 충돌 발생 여부를 나타내는 변수입니다.<br>
동작 중 충돌이 발생했던 이력이 있을 경우 이 변수 값은 1이 됩니다.

#### 29. SD_IS_FREE_DRIVE_MODE

직접 교시 사용 여부 상태를 나타냅니다.

- 0 = 직접 교시 Off 설정 상태
- 1 = 직접 교시 On 설정 상태

#### 30. SD_TFB_BUTTON

툴 플랜지의 직접 교시 버튼 상태를 나타냅니다.

#### 31. SD_PG_MODE

로봇 동작 모드 상태를 나타냅니다.

- 0 = 리얼 모드
- 1 = 시뮬레이션 모드

#### 32. SD_INIT_STATE_INFO

로봇의 활성화 단계 정보를 나타내는 시스템 변수입니다.

- 0 = default
- 1 = Power check
- 2 = Device check
- 3 = Servo Initialization check
- 4 = Parameter check
- 5 = Payload check
- 6 = Activation done

#### 33. SD_INIT_ERR

로봇의 활성화 에러 정보를 나타내는 시스템 변수입니다.

#### 34. SD_OP_STAT_COLLISION_OCCUR

로봇 충돌 여부를 나태내는 변수입니다.

- 0 = Idle
- 1 = 외부 충돌 발생

#### 35. SD_OP_STAT_SOS_FLAG

컨트롤러 전원 / 로봇관절 제어기 / 기타 문제 발생 여부를 나타내는 변수입니다.

- 0 = None
- 1 = Encoder err (PVL)
- 2 = CPU err
- 3 = Big err
- 4 = Input err
- 5 = Jam eerr
- 6 = Over current err
- 7 = Position bound err
- 8 = Mode err
- 9 = Match err
- 10 = Over current/Low Voltage err
- 11 = Temperature err
- 12 = Speed over err

#### 36. SD_OP_STAT_SELF_COLLISION

로봇동작 중 자가충돌 범위 진입 여부를 나타내는 변수입니다.

- 0 = Idle
- 1 = 자가 충돌 범위 진입

#### 37. SD_OP_STAT_SOFT_ESTOP_OCCUR

로봇(프로그램)의 일시정지 상태여부를 나타내는 변수입니다.

- 0 = Idle
- 1 = 일시 정지 상태

#### 38. SD_OP_STAT_EMS_FLAG

로봇 위치 연산 알고리즘으로 답이 없거나, 관절 제한 범위에 도달했을 경우를 표시하는 변수입니다.

- 0 = None
- 1 = Arm Stretch
- 2 = Cartesian Limit
- 3 = Joint Limit
- 4 = Un-solvable

#### 39. SD_DIGITAL_IN_CONFIG_0, SD_DIGITAL_IN_CONFIG_1

2개의 보호정지 단자(Din 16 & 17)의 정보를 나타냅니다.

#### 40. SD_INBOX_TRAP_FLAG_0~1

Inbox 모드로 설정된 사건이 발생했는지 여부를 나타내는 변수입니다.

#### 41. SD_INBOX_CHECK_MODE_0~1

Inbox 기능 사용시, 설정된 Inbox 모드를 나타내는 변수입니다.

- 0: No checking
- 1: Check Tool Flange Center (툴 플랜지의 중심 특정영역 진입여부 감시)
- 2: Check Tool Center Point (설정된 TCP 특정영역 진입여부 감시)
- 3: Check Tool Box (가상으로 설정한 Box 특정영역 진입여부 감시)
- 4: Check All (위 3개의 로봇 설정 값이 특정영역 진입여부 감시)

#### 42. SD_ANALOG_IN_0~3

4개의 컨트롤러 BOX 아날로그 입력포트 값(0~10V)을 나타내는 변수입니다.

#### 43. SD_ANALOG_OUT_0~3

4개의 컨트롤러 BOX 아날로그 출력포트 값(0~10V)을 나타내는 변수입니다.

#### 44. SD_DIGITAL_IN_0~15

16개의 컨트롤러 BOX 디지털 입력포트 값(0 또는 1)을 나타내는 변수입니다.

#### 45. SD_DIGITAL_OUT_0~15

16개의 컨트롤러 BOX 디지털 출력포트 값(0 또는 1)을 나타내는 변수입니다.

#### 46. SD_DIGITAL_IN_0_LOW_TIME ~ SD_DIGITAL_IN_15_LOW_TIME

#### 46. DIN_0_LOW_TIME ~ DIN_15_LOW_TIME

해당 신호(Digital IN 0~15)가 0(Low)이 지속된 시간을 기록하는 변수입니다.<br>
1(High)에서 0(Low)가 된 순간 초기화되며 타이머 기능으로 사용 가능합니다.

- SD_DIGITAL_IN_0_LOW_TIME 와 DIN_0_LOW_TIME는 동일한 변수로써 같은 영역에 저장됩니다.

#### 47. SD_DIGITAL_IN_0_HIGH_TIME ~ SD_DIGITAL_IN_15_HIGH_TIME

#### 47. DIN_0_HIGH_TIME ~ DIN_15_HIGH_TIME

해당 신호(Digital IN 0~15)가 1(High)이 지속된 시간을 기록하는 변수입니다.<br>
0(Low)에서 1(High)가 된 순간 초기화되며 타이머 기능으로 사용 가능합니다.

- SD_DIGITAL_IN_0_HIGH_TIME 와 DIN_0_HIGH_TIME는 동일한 변수로써 같은 영역에 저장됩니다.

#### 48. SD_EX_ANALOG_IN_0~3

4개의 확장 IO보드 아날로그 입력포트 값(0~10V)을 나타내는 변수입니다.

#### 49. SD_EX_ANALOG_OUT_0~3

4개의 확장 IO보드 아날로그 출력포트 값(0~10V)을 나타내는 변수입니다.

#### 50. SD_EX_DIGITAL_IN_0~15

16개의 확장 IO보드 디지털 입력포트 값(0 또는 1)을 나타내는 변수입니다.

#### 51. SD_EX_DIGITAL_OUT_0~15

16개의 확장 IO보드 디지털 출력포트 값(0 또는 1)을 나타내는 변수입니다.

#### 52. SD_TFB_ANALOG_IN_0~1

2개의 툴 플랜지보드(TFB) 아날로그 입력포트 값(0~10V)을 나타내는 변수입니다.

#### 53. SD_TFB_DIGITAL_IN_0~1

2개의 툴 플랜지보드(TFB) 디지털 입력포트 값(0 또는 1)을 나타내는 변수입니다.

#### 54. SD_TFB_DIGITAL_OUT_0~1

2개의 툴 플랜지보드(TFB) 디지털 출력포트 값(0 또는 1)을 나타내는 변수입니다.

#### 55. SD_TFB_VOLTAGE_OUT

툴플랜지보드(TFB)의 전압 출력정보를 나타내는 변수입니다.

- 3개의 출력전압 값 제어: 0V, 12V, 24V

#### 56. SD_HAND_TOKTOK

로봇 외부로부터 톡톡 치는 행위가 발생되었는지 여부를 나타내는 변수입니다.

#### 57. SD_FINISH_AT_EVENT

동작 탈출 조건방식 (Finish At 기능)으로, 로봇 동작이 종료되었는지를 나타내는 변수입니다.<br>
새로운 동작에 진입하면, 이 변수는 자동으로 리셋 (0) 됩니다.

- 0: 목표 지점까지 완전히 도달하여 동작 종료 시
- 1: FinishAt 조건이 만족되어 동작 종료 시

#### 58. SD_TCP_VEL_REF

현 TCP의 지령 선형 속도를 나타내는 변수입니다. (mm/s)

#### 59. SD_MOTION_TIME

동작이 수행된 이후 경과된 시간을 저장하는 변수입니다. 다음 동작이 실행되면 초기화 됩니다. (초)

#### 60. SD_SOCK_IS_OPEN_0~4

로봇 시스템을 클라이언트로 사용시, 해당 번호 (0 ~ 4) 소켓이 정상적으로 오픈(서버와 연결) 되었는지 나타내는 변수입니다.<br>
로봇 시스템을 서버로 사용시, 해당 서버로 클라이언트가 접속하였는지를 나타내는 변수입니다.

#### 61. SD_SOCK_LAST_READ_0~4

해당 번호(0~4) 소켓으로 읽기 기능을 수행한 것에 대한 성공 여부를 나타내는 변수입니다.

#### 62. SD_ARM_POWER

로봇 팔이 사용하고 있는 전력 값을 나타내는 변수입니다.

#### 63. SD_ARM_POWER_AMP

로봇 팔이 사용하고 있는 전류 값을 나타내는 변수입니다.

#### 64. SD_IS_TPU_CONNECT

티칭 팬던트 유닛(TPU) / 태블릿과 컨트롤러 BOX의 연결 상태를 나타내는 변수입니다.

#### 65. SD_IS_RUN_IN_MAKE

현재 프로그램 RUN이 Make 창에서 실행되었는지를 나타내는 변수입니다.

- 1: Make 창에서 프로그램 RUN

#### 66. SD_IS_RUN_IN_PLAY

현재 프로그램 RUN이 Play 창에서 실행되었는지를 나타내는 변수입니다.

- 1: Play 창에서 프로그램 RUN

#### 67. SD_IS_INTENDED_STOP

프로그램의 정지가 의도된 것인지를 나타내는 변수입니다.

#### 68. SD_MOVE_INDEX

Move PB/ITPL/PRO 등 연속동작 명령어로 실행되었을 때, 현재 어느 웨이 포인트를 지나고 있는지 포인트 번호를 나타내는 변수입니다. (정수 형태의 숫자)

#### 69. SD_MOVE_INDEX_F

Move PB/ITPL/PRO 등 연속동작 명령어로 실행되었을 때, 현재 어느 웨이 포인트를 지나고 있는지 포인트 번호를 나타내는 변수입니다. (소수점 비율 변화 까지 포함)

#### 70. SD_MOVE_PROPERTY

현재 동작중인 속성이 무엇인지 (J or L or PB …. or PRO …) 를 나타내는 변수입니다.

#### 71. SD_CURRENT_DELTA

로봇 팔 각 관절의 예측된 전류와 실측 된 전류의 차이 값의 크기를 나타냅니다. (mA)

#### 72. SD_FORCE_TRAVEL_DIS

힘 제어 (Force) 기능을 사용할 때, 힘 제어 알고리즘에 의해 변형된 궤적의 크기를 나타냅니다. (mm)

#### 73. SD_EMG_BUTTON_STATE

비상정지 버튼의 상태를 나타내는 변수입니다.

#### 74. SD_IS_IN_MAIN

프로그램이 메인을 실행(= 1)하고 있는지, 서브 프로그램을 실행(= 0)하고 있는지 나타내는 변수입니다

#### 75. SD_IS_HOME

로봇이 홈(BEGIN)위치에 있는지를 나타내는 변수입니다.

#### 76. SD_IS_BEGIN

로봇이 홈(BEGIN)위치에 있는지를 나타내는 변수입니다.

#### 77. SD_ID_NUMBER

SYSTEM ID를 나타내는 변수입니다. SETUP에서 변경가능합니다.

#### 78. SD_TF_LRF_DISTANCE

TF 레이저 거리 센서의 거리 결과 값 (mm) 입니다.

#### 79. SD_BIT\_\#\_\#

SD_BIT_0_3<br>
SD_BIT_4_7<br>
SD_BIT_8_11<br>
SD_BIT_12_15<br>

컨트롤러 BOX 디지털 입력포트 4개를 비트 조합 (이진법)하여 만든 숫자를 나타냅니다.

- 디지털 출력 4개 조합: 0~15(2⁴-1)까지 표현 가능

#### 80. SD_BIT_0_7

컨트롤러 BOX 디지털 입력포트 8개 (0~7번 포트)를 비트 조합 (이진법)하여 만든 숫자를 나타냅니다.

- 디지털 출력 8개 조합: 0~255(2⁸-1)까지 표현 가능

#### 81. SD_BIT_0_11

컨트롤러 BOX 디지털 입력포트 12개 (0~11번 포트)를 비트 조합 (이진법)하여 만든 숫자를 나타냅니다.

- 디지털 출력 12개 조합: 0~4,095(2¹²-1)까지 표현 가능

#### 82. SD_BIT_0_15

컨트롤러 BOX 디지털 입력포트 16개 (0~15번 포트)를 비트 조합 (이진법)하여 만든 숫자를 나타냅니다.

- 디지털 출력 16개 조합: 0~65,535(2¹⁶-1)까지 표현 가능

#### 83. OR_2FG7_STATE

(OnRobot사의 2FG7모델) Gripper의 상태를 나타내는 변수입니다.

- 1: Busy
- 2: Grip detected
- 3: Error (Not Calibrated)
- 4: Error (Linear sensor)

#### 84. OR_2FG7_POS_EXT

(OnRobot사의 2FG7모델) Externally grip 방식으로 제품을 집었을 때 현 Gripper의 위치 값을 나타내는 변수입니다.

#### 85. OR_2FG7_POS_INT

(OnRobot사의 2FG7모델) Internally grip 방식으로 제품을 집었을 때 현 Gripper의 위치 값을 나타내는 변수입니다.

#### 86. OR_2FG7_MIN_EXT

(OnRobot사의 2FG7모델) Externally grip 방식으로 제품을 집었을 때 현 Gripper의 최소 위치 값을 나타내는 변수입니다.

#### 87. OR_2FG7_MAX_EXT

(OnRobot사의 2FG7모델) Externally grip 방식으로 제품을 집었을 때 현 Gripper의 최대 위치 값을 나타내는 변수입니다.

#### 88. OR_2FG7_MIN_INT

(OnRobot사의 2FG7모델) Internally grip 방식으로 제품을 집었을 때 현 Gripper의 최소 위치 값을 나타내는 변수입니다.

#### 89. OR_2FG7_MAX_INT

(OnRobot사의 2FG7모델) Internally grip 방식으로 제품을 집었을 때 현 Gripper의 최대 위치 값을 나타내는 변수입니다.

#### 90. OR_RG_BUSY

(OnRobot사의 RG모델) 동상 작상태를 나타내는 변수입니다.

- 0: 현재 Gripper가 비동작 상태이며, 다음 명령을 받을 수 있습니다.
- 1: 현재 Gripper가 동작 상태이며, 다음 명령을 받을 수 없습니다.

#### 91. OR_RG_GRIP

(OnRobot사의 RG모델) 현제 Gripper의 제품을 집고 있는지를 나타내는 변수입니다.

- 0: Grip undetected.
- 1: Grip detected.

#### 92. OR_RG_S1_PUSHED

(OnRobot사의 RG모델) 안전 스위치 1이 눌려 있는지를 나타내는 변수입니다.

- 0: safety switch 1 is not pushed.
- 1: safety switch 1 is pushed.

#### 93. OR_RG_S1_TRIGGERED

(OnRobot사의 RG모델) 안전 회로 1이 활성화되어 있는지를 나타내는 변수입니다.

- 0: safety circuit 1 is not activated.
- 1: safety circuit 1 is activated.

#### 94. OR_RG_S2_PUSHED

(OnRobot사의 RG모델) 안전 스위치 2이 눌려 있는지를 나타내는 변수입니다.

- 0: safety switch 2 is not pushed.
- 1: safety switch 2 is pushed.

#### 95. OR_RG_S2_TRIGGERED

(OnRobot사의 RG모델) 안전 회로 2이 활성화되어 있는지를 나타내는 변수입니다.

- 0: safety circuit 2 is not activated.
- 1: safety circuit 2 is activated.

#### 96. OR_RG_ERROR

(OnRobot사의 RG모델) 안전관련 에러 발생 여부를 나타내는 변수입니다.

#### 97. OR_RG_WIDTH

(OnRobot사의 RG모델) Gripper 사이의 거리 값을 나타내는 변수입니다.

#### 98. OR_3FG_MIN_D

(OnRobot사의 3FG모델) Finger 상태(위치, 길이, 직경)등에 따라 도달 가능한 최소 직경을 나타내는 변수입니다.

#### 99. OR_3FG_MAX_D

(OnRobot사의 3FG모델) Finger 상태(위치, 길이, 직경)등에 따라 도달 가능한 최대 직경을 나타내는 변수입니다.

#### 100. OR_3FG_RAW_D

(OnRobot사의 3FG모델) 손가락들의 직경 크기를 나타냅니다.

#### 101. OR_3FG_REAL_D

(OnRobot사의 3FG모델) 손가락 두께 오프셋을 반영한 직경 크기를 나타냅니다.

#### 102. OR_3FG_FORCE

(OnRobot사의 3FG모델) 작동하고 있는 힘의 값을 나타내는 변수입니다.

#### 103. OR_3FG_BUSY

(OnRobot사의 3FG모델) Gripper의 동작 여부를 나타내는 변수입니다.

#### 104. OR_3FG_GRIP

(OnRobot사의 3FG모델) Gripper가 물체를 잡았는지를 나타내는 변수입니다.

#### 105. OR_3FG_FORCE_GRIP

(OnRobot사의 3FG모델) Gripper가 힘 제어 기반으로 잡고 있는지를 나타내는 변수입니다.

#### 106. OR_3FG_CALIB

(OnRobot사의 3FG모델) Gripper의 Calibration 상태를 나타내는 변수입니다.

#### 107. OR_SD_STATUS

(OnRobot사의 Sander모델) Sander의 상태를 나타내는 변수입니다.

#### 108. OR_SD_WARNING

(OnRobot사의 Sander모델) Warning flag의 상태를 나타내는 변수입니다.<br>
비트 조합으로 구성되어 있으며, 아래 번호는 비트조합 오프셋을 의미합니다.

- 0: RPM deviation
- 1: Motor voltage
- 2: Motor current
- 3: Temperature
- 4: Vibration
- 5: 30V level
- 6: 24V level
- 7: 12V level
- 8: 5V level
- 9: Motor ramp error
- 10: Motor RPM range error
- 11: Motor missed zero crossing error
- 12: Motor RPM change error
- 13: Motor stopped due to communication error

#### 109. OR_SD_RPM

(OnRobot사의 Sander모델) 현재 회전 속도를 부호 없는 RPM으로 나타내는 변수입니다.

#### 110. OR_SD_RPM_DEV

(OnRobot사의 Sander모델) 작동 구간 중 RPM 변화 량을 표시하는 변수입니다.

#### 111. OR_SD_VIBRATION

(OnRobot사의 Sander모델) G 단위로 진동의 크기를 표시하는 변수입니다.

#### 112. OR_SD_ERROR

(OnRobot사의 Sander모델) 모터가 마지막으로 정지한 원인을 나타내는 에러 변수입니다.<br>
새 기동 명령에 의해 초기화 됩니다. 비트 조합으로 구성되어 있으며, 아래 순서는 비트 조합 오프셋 입니다.

- 0: 30V error
- 1: 24V error
- 2: 12V error
- 3: 5V error
- 4: Current error
- 5: Vibration error
- 6: Temperature error
- 7: Modbus timeout error
- 8: Motor ramp error
- 9: Motor RPM range error
- 10: Motor missed zero cross error
- 11: Motor RPM change error
- 12: Firmware update started during motor run

#### 113. OR_SD_RPM_TAR

(OnRobot사의 Sander모델) 목표 RPM을 나타내는 변수입니다.

#### 114. OR_SD_MOTOR_STOPPED

(OnRobot사의 Sander모델) 모터가 정지했는지를 나타내는 Flag 입니다.

#### 115. OR_SD_MOTOR_RUNNING

(OnRobot사의 Sander모델) 모터가 동작하는지를 나타내는 Flag 입니다.

#### 116. OR_SD_RAMP_UP

(OnRobot사의 Sander모델) 모터가 가속 중인지를 나타내는 Flag 입니다.

#### 117. OR_SD_RAMP_DW

(OnRobot사의 Sander모델) 모터가 감속 중인지를 나타내는 Flag 입니다.

#### 118. OR_SD_BUTTON

(OnRobot사의 Sander모델) Sander 측면의 버튼이 눌렸는지를 나타내는 Flag 입니다.

#### 119. OR_VG_A

(OnRobot사의 VG10/VGC10모델) 채널A의 압력 값을 나타내는 변수입니다.

#### 120. OR_VG_B

(OnRobot사의 VG10/VGC10모델) 채널B의 압력 값을 나타내는 변수입니다

#### 121. OR_VGP20_A

(OnRobot사의 VGP20모델) 채널A의 압력 값을 나타내는 변수입니다.

#### 122. OR_VGP20_B

(OnRobot사의 VGP20모델) 채널B의 압력 값을 나타내는 변수입니다.

#### 123. OR_VGP20_C

(OnRobot사의 VGP20모델) 채널C의 압력 값을 나타내는 변수입니다.

#### 124. OR_VGP20_D

(OnRobot사의 VGP20모델) 채널D의 압력 값을 나타내는 변수입니다.

#### 125. OR_VGP20_A_GRIP

(OnRobot사의 VGP20모델) 채널 A의 그립 상태를 나태내는 Flag 입니다.

#### 126. OR_VGP20_A_RELEASE

(OnRobot사의 VGP20모델) 채널 A의 그립 상태를 나태내는 Flag 입니다.

#### 127. OR_VGP20_B_GRIP

(OnRobot사의 VGP20모델) 채널 B의 그립 상태를 나태내는 Flag 입니다.

#### 128. OR_VGP20_B_RELEASE

(OnRobot사의 VGP20모델) 채널 B의 그립 상태를 나태내는 Flag 입니다.

#### 129. OR_VGP20_C_GRIP

(OnRobot사의 VGP20모델) 채널 C의 그립 상태를 나태내는 Flag 입니다.

#### 130. OR_VGP20_C_RELEASE

(OnRobot사의 VGP20모델) 채널 C의 그립 상태를 나태내는 Flag 입니다.

#### 131. OR_VGP20_D_GRIP

(OnRobot사의 VGP20모델) 채널 D의 그립 상태를 나태내는 Flag 입니다.

#### 132. OR_VGP20_D_RELEASE

(OnRobot사의 VGP20모델) 채널 D의 그립 상태를 나태내는 Flag 입니다.

#### 133. OR_VGP20_BUSY

(OnRobot사의 VGP20모델) 그리퍼가 작동 중인지 여부를 나타내는 변수입니다.

#### 134. OR_VGP20_ERROR

(OnRobot사의 VGP20모델) Gripper의 에러 상태를 나타내는 변수입니다.

#### 135. OR_MG10_STATUS

(OnRobot사의 MG10모델) 현 Gripper의 상태를 나타내는 변수입니다. 비트 조합으로 되어있으며, 아래 번호는 비트조합 오프셋을 의미합니다.

- 0: Part gripped
- 1: Near part
- 2: Busy
- 3: Magnet strength not reached
- 4: Smart grip available
- 5: Smart grip failed
- 6: Part dropped
- 7: Internal temperature warning

#### 136. OR_MG10_ERROR

(OnRobot사의 MG10모델) 현 Gripper의 상태를 나타내는 변수입니다. 비트 조합으로 되어있으며, 아래 번호는 비트조합 오프셋을 의미합니다.

- 0: Over-heating
- 1: Sensor target mismatch
- 2: No motor calibration
- 3: No magnet calibration
- 4: No hall calibration
- 5: Over current
- 6: Position error

#### 137. OR_MG10_STRENGTH

(OnRobot사의 MG10모델) 현 Gripper의 magnet 강도를 %로 나타내는 변수입니다.

#### 138. OR_SG_WIDTH

(OnRobot사의 Soft-gripper모델) 현 Gripper의 폭 나타내는 변수입니다.

#### 139. OR_SG_MAX_WIDTH

(OnRobot사의 Soft-gripper모델) 현 Gripper의 최대 폭 나타내는 변수입니다.

#### 140. OR_SG_MIN_WIDTH

(OnRobot사의 Soft-gripper모델) 현 Gripper의 최소 폭 나타내는 변수입니다.

#### 141. OR_SG_STATUS

(OnRobot사의 MG10모델) 현 Gripper의 상태를 나타내는 변수입니다. 비트조합 변수

- 0: Busy
- 1: Initialized
- 4-6: Error

#### 142. OR_EYE_POS

OnRobot사의 Eye 비전카메라에서 받은 Object 위치 값을 저장하고 있는 Point 변수입니다.<br>
(타입: Point)

#### 143. OR_EYE_ERROR

(OnRobot사의 Eye모델) 비전 시스템의 에러 상태를 나타내는 변수입니다.

#### 144. OR_EYE_COUNT

(OnRobot사의 Eye모델) 비전 시스템 찾은 Object의 수를 나타내는 변수입니다.

#### 145. OR_EYE_INSPECT_RESULT

(OnRobot사의 Eye모델) 비전 시스템 검사 결과를 나타내는 변수입니다.

#### 146. OR_EYE_INSPECT_MATCH

(OnRobot사의 Eye모델) 비전 시스템이 찾은 Object가 실제 비전 시스템 등록된 Object 데이터와 일치하는지 %지로 나타내는 변수입니다.

#### 147. OR_EYE_X

(OnRobot사의 Eye모델) 비전 시스템이 찾은 Object의 X축 데이터 값을 나타내는 변수입니다.<br>
(단위: mm)

#### 148. OR_EYE_Y

(OnRobot사의 Eye모델) 비전 시스템이 찾은 Object의 Y축 데이터 값을 나타내는 변수입니다.<br>
(단위: mm)

#### 149. OR_EYE_Z

(OnRobot사의 Eye모델) 비전 시스템이 찾은 Object의 Z축 데이터 값을 나타내는 변수입니다.<br>
(단위: mm)

#### 150. OR_EYE_RX

(OnRobot사의 Eye모델) 비전 시스템이 찾은 Object의 RX축 데이터 값을 나타내는 변수입니다.<br>
(단위: degree)

#### 151. OR_EYE_RY

(OnRobot사의 Eye모델) 비전 시스템이 찾은 Object의 RY축 데이터 값을 나타내는 변수입니다.<br>
(단위: degree)

#### 152. OR_EYE_RZ

(OnRobot사의 Eye모델) 비전 시스템이 찾은 Object의 RZ축 데이터 값을 나타내는 변수입니다.<br>
(단위: degree)

#### 153. JRT_ENCODER

(주광로보테크사의 전모델) 현 Gripper의 엔코더 값을 펄스 단위로 나타내는 변수입니다.

#### 154. JRT_JEGB

(주광로보테크사의 JEGB모델) 현 Gripper의 위치 값을 % 단위로 나타내는 변수입니다.

#### 155. JRT_JEGG

(주광로보테크사의 JEGG모델) 현 Gripper의 위치 값을 % 단위로 나타내는 변수입니다.

#### 156. PICKIT_POS

(PICK-IT사) 비전카메라에서 받은 Object 위치 값을 저장하고 있는 Point 변수입니다.<br>
(타입: Point)

#### 157. RC_PICKIT_NO_COMMAND

(PICK-IT사 명령어 Robot>PickIt) 현 로봇 플렌지의 위치 값을 PICK-IT 비전시스템에 보내는 변수입니다.<br>
로봇의 연결상태를 확인하고 웹 인터페이스 상의 3D 보기를 업데이트 하기 위해 사용됩니다.

#### 158. RC_PICKIT_CHECK_MODE

(PICK-IT사 명령어 Robot>PickIt) 비전 시스템의 모드를 나타내는 변수입니다.

#### 159. RC_PICKIT_CAPTURE_IMAGE

(PICK-IT사 명령어 Robot>PickIt) 해당 변수를 사용하면 현 카메라 이미지를 캡처합니다.

#### 160. RC_PICKIT_PROCESS_IMAGE

(PICK-IT사 명령어 Robot>PickIt) **RC_PICKIT_CAPTURE_IMAGE**를 통해 캡처한 카메라 이미지를 개체 감지를 트리거 합니다.

#### 161. RC_PICKIT_LOOK_FOR_OBJECTS

(PICK-IT사 명령어 Robot>PickIt) 현재 스크린에서 Object를 찾기 요청을 하기 위한 명령어입니다.

#### 162. RC_PICKIT_LOOK_FOR_OBJECTS_WITH_RETRIES

(PICK-IT사 명령어 Robot>PickIt) 현재 스크린에서 Object를 찾기 요청을 하기 위한 명령어입니다.<br>
RC_PICKIT_LOOK_FOR_OBJECTS 명령어와 유사하나 Object를 못 찾았을 경우 일정 시간 후에 재시도 합니다.

#### 163. RC_PICKIT_NEXT_OBJECT

(PICK-IT사 명령어 Robot>PickIt) 다음으로 감지된 Object를 Object 테이블로 리턴 하도록 요청하는 명령어입니다.<br>
단일 Object 검색 실행으로 여러 개체가 검색된 경우에 사용되는 명령어입니다.

#### 164. RC_PICKIT_GET_PICK_POINT_DATA

(PICK-IT사 명령어 Robot>PickIt) 마지막으로 요청된 Object의 Pick point ID와 Offset 값을 요청하는 명령어입니다.<br>
이 명령어를 통해 로봇은 유연하고 다양한 Pick point들을 얻을 수 있습니다.

#### 165. RC_PICKIT_CONFIGURE

(PICK-IT사 명령어 Robot>PickIt) 특정 set-up information 및 product configuration 정보를 로드하기 위해 사용하는 명령어입니다.

#### 166. RC_PICKIT_SET_CYLINDER_DIM

(PICK-IT사 명령어 Robot>PickIt) Teach cylinder model 이용 시 cylinder dimensions를 요청하기 위해 사용하는 명령어입니다.

#### 167. RC_SAVE_ACTIVE_PRODUCT

(PICK-IT사 명령어 Robot>PickIt) 현재 load 되어있는 product 데이터를 저장하기 위해 사용하는 명령어입니다.

#### 168. RC_SAVE_ACTIVE_SETUP

(PICK-IT사 명령어 Robot>PickIt) 현재 load 되어있는 SETUP 데이터를 저장하기 위해 사용하는 명령어입니다.

#### 169. RC_SAVE_BUILD_BACKGROUND

(PICK-IT사 명령어 Robot>PickIt) 배경 제거를 위하여 현재 장면을 배경으로 캡처하도록 요청하는 명령어입니다.

#### 170. RC_PICKIT_FIND_CALIB_PLATE

(PICK-IT사 명령어 Robot>PickIt) Calibration-plate를 localize 하기위한 트리거 명령입니다.

#### 171. RC_PICKIT_SAVE_SCENE

(PICK-IT사 명령어 Robot>PickIt) 현 장면을 저장하기 위해 사용하는 명령어입니다.

#### 172. PICKIT_STATUS

(PICK-IT사) 비전 시스템의 상태를 나타내는 변수입니다.

#### 173. PICKIT_VERSION

(PICK-IT사) 사용중인 PICKIT 프로토콜 버전을 나타냅니다. (=11)

#### 174. PICKIT_ROBOTTYPE

(PICK-IT사) 비전시스템과 연결된 로봇타입을 나타내는 변수입니다. (=5번 타입)

#### 175. PICKIT_ROBOT_MODE

(PICK-IT사 Return 값) 비전 시스템이 Robot 모드임을 나타내는 변수입니다.<br>
(상수값: 0)

#### 176. PICKIT_IDLE_MODE

(PICK-IT사 Return 값) 비전 시스템이 IDLE 모드임을 나타내는 변수입니다.<br>
(상수값: 1)

#### 177. PICKIT_OBJECT_FOUND

(PICK-IT사 Return 값) 비전 시스템이 하나 이상의 Object를 감지함을 나타내는 변수입니다.<br>
(상수값: 20)

#### 178. PICKIT_NO_OBJECTS

(PICK-IT사 Return 값) 비전 시스템이 Object를 감지하지 못함을 나타내는 변수입니다.<br>
(상수값: 21)

#### 179. PICKIT_IMAGE_CAPTURED

(PICK-IT사 Return 값) 비전 시스템이 카메라 이미지를 캡처함을 나타내는 변수입니다.<br>
(상수값: 26)

#### 180. PICKIT_NO_IMAGE_CAPTURED

(PICK-IT사 Return 값) 비전 시스템이 카메라 이미지를 캡처하지 못함을 나타내는 변수입니다.<br>
(상수값: 22)

#### 181. PICKIT_EMPTY_ROI

(PICK-IT사 Return 값) 비전 시스템이 빈 ROI를 감지함을 나타내는 변수입니다.<br>
(상수값: 23)

#### 182. PICKIT_GET_PICK_POINT_DATA_OK

(PICK-IT사 Return 값) 비전 시스템이 빈 ROI를 감지함을 나타내는 변수입니다.<br>
(상수값: 70)

#### 183. PICKIT_GET_PICK_POINT_DATA_FAILED

(PICK-IT사 Return 값) 선택 지점 데이터를 성공적으로 검색함을 나타내는 변수입니다.<br>
(상수값: 71)

#### 184. PICKIT_CONFIG_OK

(PICK-IT사 Return 값) 지정된 구성을 성공적으로 로드 함을 나타내는 변수입니다.<br>
(상수값: 40)

#### 185. PICKIT_CONFIG_FAILED

(PICK-IT사 Return 값) 지정된 구성을 성공적으로 로드 하지 못함을 나타내는 변수입니다.<br>
(상수값: 41)

#### 186. PICKIT_BUILD_BKG_CLOUD_OK

(PICK-IT사 Return 값) 배경장면을 성공적으로 구축함을 나타내는 변수입니다.<br>
(상수값: 60)

#### 187. PICKIT_BUILD_BKG_CLOUD_FAILED

(PICK-IT사 Return 값) 배경장면을 성공적으로 구축하지 못함을 나타내는 변수입니다.<br>
(상수값: 61)

#### 188. PICKIT_FIND_CALIB_PLATE_OK

(PICK-IT사 Return 값) Calibration-plate를 성공적으로 localize 함을 나타내는 변수입니다.<br>
(상수값: 10)

#### 189. PICKIT_FIND_CALIB_PLATE_FAILED

(PICK-IT사 Return 값) Calibration-plate를 성공적으로 localize 하지 못함을 나타내는 변수입니다.<br>
(상수값: 11)

#### 190. PICKIT_SAVE_SNAPSHOT_OK

(PICK-IT사 Return 값) 스냅샷을 성공적으로 저장함을 나타내는 변수입니다.<br>
(상수값: 50)

#### 191. PICKIT_SAVE_SNAPSHOT_FAILED

(PICK-IT사 Return 값) 스냅샷을 성공적으로 저장하지 못함을 나타내는 변수입니다.<br>
(상수값: 51)

#### 192. PICKIT_UNKNOWN_COMMAND

(PICK-IT사 Return 값) 로봇이 비전시스템에 보낸 잘못된 명령어를 보냈음을 의미하는 변수입니다.<br>
(상수값: -99)

#### 193. PICKIT_TYPE_SQUARE

(PICK-IT사 Return 값) 감지된 Object의 Square 정보를 나타내는 변수입니다.<br>
(상수값: 21)

#### 194. PICKIT_TYPE_RECTANGLE

(PICK-IT사 Return 값) 감지된 Object의 RECTANGLE 정보를 나타내는 변수입니다.<br>
(상수값: 22)

#### 195. PICKIT_TYPE_CIRCLE

(PICK-IT사 Return 값) 감지된 Object의 CIRCLE 정보를 나타내는 변수입니다.<br>
(상수값: 23)

#### 196. PICKIT_TYPE_ELLIPSE

(PICK-IT사 Return 값) 감지된 Object의 ELLIPSE 정보를 나타내는 변수입니다.<br>
(상수값: 24)

#### 197. PICKIT_TYPE_CYLINDER

(PICK-IT사 Return 값) 감지된 Object의 CYLINDER 정보를 나타내는 변수입니다.<br>
(상수값: 32)

#### 198. PICKIT_TYPE_SPHERE

(PICK-IT사 Return 값) 감지된 Object의 SPHERE 정보를 나타내는 변수입니다.<br>
(상수값: 33)

#### 199. PICKIT_TYPE_POINTCLOUD

(PICK-IT사 Return 값) 감지된 Object의 POINTCLOUD 정보를 나타내는 변수입니다.<br>
(상수값: 35)

#### 200. PICKIT_TYPE_BLOB

(PICK-IT사 Return 값) 감지된 Object의 BLOB 정보를 나타내는 변수입니다.<br>
(상수값: 50)

#### 201. PICKIT_X

(PICK-IT사 Return 값) 감지된 Object의 X축 값을 나타내는 변수입니다.

#### 202. PICKIT_Y

(PICK-IT사 Return 값) 감지된 Object의 Y축 값을 나타내는 변수입니다.

#### 203. PICKIT_Z

(PICK-IT사 Return 값) 감지된 Object의 Z축 값을 나타내는 변수입니다.

#### 204. PICKIT_RX

(PICK-IT사 Return 값) 감지된 Object의 RX축 값을 나타내는 변수입니다.

#### 205. PICKIT_RY

(PICK-IT사 Return 값) 감지된 Object의 RY축 값을 나타내는 변수입니다.

#### 206. PICKIT_RZ

(PICK-IT사 Return 값) 감지된 Object의 RZ축 값을 나타내는 변수입니다.

#### 207. PICKIT_P#

PICKIT_P0<br>
PICKIT_P1<br>
PICKIT_P2<br>
PICKIT_P3<br>
PICKIT_P4<br>
PICKIT_P5<br>

(PICK-IT사 Return 값) PickIt 시스템에서 수신된 Payload #(0 ~ 5)번의 Int형 데이터 입니다.

#### 208. PICKIT_P#F

PICKIT_P0F<br>
PICKIT_P1F<br>
PICKIT_P2F<br>
PICKIT_P3F<br>
PICKIT_P4F<br>
PICKIT_P5F<br>

(PICK-IT사 Return 값) PickIt 시스템에서 수신된 Payload #(0 ~ 5)번의 Float형 데이터 입니다.

#### 209. PICKIT_M0

(PICK-IT사 Return 값) PickIt 시스템에서 수신된 Meta데이터 0번 입니다.

#### 210. PICKIT_M1

(PICK-IT사 Return 값) PickIt 시스템에서 수신된 Meta데이터 1번 입니다.

#### 211. ICE_INFO_CONNECTED

제빙기와 통신 중 여부를 확인하기 위한 변수입니다.

#### 212. ICE_INFO_REQUESTING

RB 내부 개발자용 변수입니다.

#### 213. ICE_INFO_USING

RB 내부 개발자용 변수입니다.

#### 214. ICE_INFO_VECSIZE

RB 내부 개발자용 변수입니다.

#### 215. ICE_INFO_MODE_COMM

제빙기와 통신 모드를 확인하기 위한 변수입니다.

- 0: 일반 모드
- 1: 통신 모드

#### 216. ICE_INFO_MODE_CUP

컵 이탈시 대응을 위한 변수입니다.

- 0: 컵 이탈시 출빙 금지
- 1: 컵 이탈 무시

#### 217. ICE_INFO_TIME_ICE

마지막 출빙 시간을 나타내는 변수입니다.

#### 218. ICE_INFO_TIME_WATER

마지막 출수 시간을 나타내는 변수입니다.

#### 219. ICE_INFO_AMBI_LOW

주변온도 하단을 확인하기 위한 변수입니다.

#### 220. ICE_INFO_AMBI_HIGH

주변온도 상단을 확인하기 위한 변수입니다.

#### 221. ICE_INFO_TMEP_AMBI

현 주변온도 확인하기 위한 변수입니다.

#### 222. ICE_INFO_TMEP_EVAPO

현 Evaporator온도 확인하기 위한 변수입니다.

#### 223. ICE_INFO_TMEP_CONDEN

현 Condensor온도 확인하기 위한 변수입니다.

#### 224. ICE_STATE_LAST_ICE_NO

직전 출빙에서 얼음이 감지되지 않았음을 나타내는 변수입니다.

#### 225. ICE_STATE_LAST_ICE_YES

직전 출빙에서 얼음이 감지되었음을 나타내는 변수입니다.

#### 226. ICE_STATE_COMP_WORK

컴프레셔가 정상 동작하였음을 나타내는 변수입니다.

#### 227. ICE_STATE_MOTOR_WORK

기어모터가 정상 동작하였음을 나타내는 변수입니다.

#### 228. ICE_STATE_OUT_SOL

출빙 Sol이 정상 감지되었음을 나타내는 변수입니다.

#### 229. ICE_STATE_CUP_LEVEL

컵 레벨이 정상 감지되었음을 나타내는 변수입니다.

#### 230. ICE_STATE_COMM_MODE

통신 모드임을 나타내는 변수입니다.

#### 231. ICE_STATE_FULL_ICE

얼음이 가득참을 나타내는 변수입니다.

#### 232. ICE_STATE_ERR_1~4

RB 개발자용 변수입니다.

#### 233. ICE_STATE_ERR_CODE

에러코드를 나타내며 변수입니다. 정상이면 0을 나타냅니다.

#### 234. ICE_STATE_RD

제빙기의 상태를 나타내는 변수입니다.

- 0: 출빙완료 & 타임아웃
- 1: 출빙명령 대기

#### 235. SETECH_RDY

너트 러너의 준비 상태를 나타내는 변수입니다.

#### 236. SETECH_ALM

너트 러너의 알람 유무를 나타내는 변수입니다.

#### 237. SETECH_BUSY

너트 러너의 체결 동작 중임을 나타내는 변수입니다.

#### 238. SETECH_COMP

너트 러너가 체결이 종료 되었음을 나타내는 변수입니다.

#### 239. SETECH_OK

체결 완료 후 정상적으로 체결 되었음을 나타내는 변수입니다.

#### 240. SETECH_NG_TRQH

체결 완료 후 체결 토크가 상한 토크를 초과하였을 경우를 나타내는 NG 변수입니다.

#### 241. SETECH_NG_TRQL

체결 완료 후 체결 토크가 한한 토크를 이내일 경우를 나타내는 NG 변수입니다.

#### 242. SETECH_NG_ANGH

체결 완료 후 각도 판정 결과가 상한 범위를 불만족함을 나타내는 NG 변수입니다.

#### 243. SETECH_NG_ANGL

체결 완료 후 각도 판정 결과가 하한 범위를 불만족함을 나타내는 NG 변수입니다.

#### 244. SETECH_NG_TIME

체결 완료 후 체결 시간이 상하한 범위를 불만족함을 나타내는 NG 변수입니다.

#### 245. SETECH_NG_MONI

체결 완료 후 모니터 토크 판정 결과가 상한 범위를 불만족함을 나타내는 NG 변수입니다.

#### 246. SETECH_NG_CH1

채널선택 입력신호와 같은 상태로 채널이 되었을 때 나타나는 NG 변수입니다.

#### 247. SETECH_NG_CH2

채널선택 입력신호와 같은 상태로 채널이 되었을 때 나타나는 NG 변수입니다.

#### 248. SETECH_NG_CH4

채널선택 입력신호와 같은 상태로 채널이 되었을 때 나타나는 NG 변수입니다.

#### 249. SETECH_NG_CH8

채널선택 입력신호와 같은 상태로 채널이 되었을 때 나타나는 NG 변수입니다.

#### 250. SETECH_NG_CH16

채널선택 입력신호와 같은 상태로 채널이 되었을 때 나타나는 NG 변수입니다.

#### 251. SD_NO_ARC_STATE

용접 기능 사용시 NO_ARC 기능이 켜져있는지 여부를 나타내는 변수입니다.

#### 252. SD_DWELD_ARC

디지털 용접기의 아크 발생 여부 상태를 나타내는 변수입니다.

#### 253. SD_DWELD_TOUCH

디지털 용접기의 터치 상태를 나타내는 변수입니다.

#### 254. SD_DWELD_A

디지털 용접기의 전류 값을 나타내는 변수입니다.

#### 255. SD_DWELD_V

디지털 용접기의 전압 값을 나타내는 변수입니다.

#### 256. SD_DWELD_F

디지털 용접기의 피더 속도 값을 나타내는 변수입니다.

#### 257. SD_DWELD_SET_A

디지털 용접기의 설정 전류 값을 나타내는 변수입니다.

#### 258. SD_CONV_POS_TICK

컨베이어의 위치 Tick을 나타내는 변수입니다.

#### 259. SD_CONV_VEL_TICK

컨베이어의 속도 Tick을 나타내는 변수입니다.
