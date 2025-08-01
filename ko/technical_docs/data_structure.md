---
layout: doc
outline: deep
---

# 데이터 구조 (reqdata) v6.10

<div class="warning custom-block">
  <p class="custom-block-title">CAUTION</p>
  <ul>
    <li>
      이 문서는 포트 5001을 통해 획득 가능한 상태 데이터의 구조를 설명한 자료입니다.
    </li>
    <li>
      내용은 소프트웨어 버전에 따라 변경될 수 있으며, 본 문서는 버전 4.3.1을 기준으로 작성되었습니다.
    </li>
  </ul>
</div>

```C++
// --------------------------------------------------------------------
// Based on Software Version 4.3.1
// --------------------------------------------------------------------
#define MAX_SHARED_DATA 145
// --------------------------------------------------------------------

typedef union{
  struct{
    char header[4];
    // Byte count ~: 4
    float time;
    float jnt_ref[6];
    float jnt_ang[6];
    float jnt_cur[6];
    // Byte count ~: 80
    float tcp_ref[6];
    float tcp_pos[6];
    // Byte count ~: 128
    float analog_in[4];
    float analog_out[4];
    int digital_in[16];
    int digital_out[16];
    // Byte count ~: 288
    float jnt_temperature[6];
    // Byte count ~: 312
    int task_pc;
    int task_repeat;
    int task_run_id;
    int task_run_num;
    int task_run_time;
    int task_state;
    // Byte count ~: 336
    float default_speed;
    int robot_state;
    int information_chunk_1;  // information bit combination
    // Byte count ~: 348
    float reserved_1[6];
    int jnt_info[6];
    // Byte count ~: 396
    int collision_detect_onoff;
    int is_freedrive_mode;
    int real_vs_simulation_mode;
    // Byte count ~: 408
    int init_state_info;
    int init_error;
    // Byte count ~: 416
    float tfb_analog_in[2];
    int tfb_digital_in[2];
    int tfb_digital_out[2];
    float tfb_voltage_out;
    // Byte count ~: 444

    int op_stat_collision_occur;
    int op_stat_sos_flag;
    int op_stat_self_collision;
    int op_stat_soft_estop_occur;
    int op_stat_ems_flag;
    // Byte count ~: 464
    int information_chunk_2;
    int information_chunk_3;
    // Byte count ~: 472
    int inbox_trap_flag[2];
    int inbox_check_mode[2];
    // Byte count ~: 488
    float eft_fx;
    float eft_fy;
    float eft_fz;
    float eft_mx;
    float eft_my;
    float eft_mz;
    // Byte count ~: 512
    int information_chunk_4;
    // Byte count ~: 516
    float extend_io1_analog_in[4];
    float extend_io1_analog_out[4];
    unsigned int extend_io1_digital_info;
    // Byte count ~: 552
    float aa_joint_ref[6];
    // Byte count ~: 576
    unsigned int safety_board_stat_info;
    // Byte count ~: 580

  }sdata;
  float fdata[MAX_SHARED_DATA];
  int idata[MAX_SHARED_DATA];
}systemSTAT;
```

#### 1. <span style="color:purple">char</span> header[4]

이 데이터 구조의 헤더

```C++
header[0] = 0x24
header[1] = size & 0xFF
header[2] = (size >> 8) & 0xFF
header[3] = 0x03; // Type of this data
```

#### 2. <span style="color:purple">float</span> time

기본 타이머 (단위: 초)

#### 3. <span style="color:purple">float</span> jnt_ref[6]

각 관절의 기준 각도 (단위: 도)

> 0 = Base<br>
> 1 = Shoulder<br>
> 2 = Elbow<br>
> 3 = Wrist 1<br>
> 4 = Wrist 2<br>
> 5 = Wrist 3

#### 4. <span style="color:purple">float</span> jnt_ang[6]

각 관절의 실측 엔코더 각도 (단위: 도)

> 0 = Base<br>
> 1 = Shoulder<br>
> 2 = Elbow<br>
> 3 = Wrist 1<br>
> 4 = Wrist 2<br>
> 5 = Wrist 3

#### 5. <span style="color:purple">float</span> jnt_cur[6]

각 관절의 실측 전류 (단위: 암페어)

> 0 = Base<br>
> 1 = Shoulder<br>
> 2 = Elbow<br>
> 3 = Wrist 1<br>
> 4 = Wrist 2<br>
> 5 = Wrist 3

#### 6. <span style="color:purple">float</span> tcp_ref[6]

기준 관절 각도 기반의 TCP 자세 정보 (단위: mm 및 도)

> 0 = X<br>
> 1 = Y<br>
> 2 = Z<br>
> 3 = Rx<br>
> 4 = Ry<br>
> 5 = Rz

#### 7. <span style="color:purple">float</span> tcp_pos[6]

엔코더 관절 각도 기반의 TCP 자세 정보 (단위: mm 및 도)

> 0 = X<br>
> 1 = Y<br>
> 2 = Z<br>
> 3 = Rx<br>
> 4 = Ry<br>
> 5 = Rz<br>
>
> - 현재 기준값을 기반으로 덮어쓰는 방식으로 전송되고 있습니다.

#### 8. <span style="color:purple">float</span> analog_in[4]

제어박스 아날로그 입력 각 채널의 측정 정보 (단위: 전압)

> Channel number: 0 ~ 3

#### 9. <span style="color:purple">float</span> analog_out[4]

제어박스 아날로그 출력 각 채널의 정보 (단위: 전압)

> Channel number: 0 ~ 3

#### 10. <span style="color:purple">int</span> digital_in[16]

제어박스 디지털 입력 각 채널의 측정 정보 (값: 0 또는 1)

> Channel number: 0 ~ 15

#### 11. <span style="color:purple">int</span> digital_out[16]

제어박스 디지털 출력 각 채널의 정보 (값: 0 또는 1)

> Channel number: 0 ~ 15

#### 12. <span style="color:purple">float</span> jnt_temperature[6]

각 관절의 실측 온도 (단위: 섭씨 °C)

> 0 = X<br>
> 1 = Y<br>
> 2 = Z<br>
> 3 = Rx<br>
> 4 = Ry<br>
> 5 = Rz

#### 13. <span style="color:purple">int</span> task_pc **<span style="color:red">(Not for user)</span>**

STEP 기능 수행 중의 목표 프로그램 카운터 위치

#### 14. <span style="color:purple">int</span> task_repeat **<span style="color:red">(Not for user)</span>**

PLAY 페이지에서의 대상 프로그램 실행 번호

#### 15. <span style="color:purple">int</span> task_run_id **<span style="color:red">(Not for user)</span>**

현재 실행 중인 프로그램의 카운터 위치

#### 16. <span style="color:purple">int</span> task_run_num **<span style="color:red">(Not for user)</span>**

PLAY 페이지에서 현재 실행 중인 프로그램 번호

#### 17. <span style="color:purple">int</span> task_run_time **<span style="color:red">(Not for user)</span>**

프로그램 시작 이후 경과 시간 (단위: 초)

#### 18. <span style="color:purple">int</span> task_state

‘프로그램 실행’의 기본 상태

> 1 = Program not run / Idle<br>
> 3 = Program is running<br>
> 2 = Program is running + but ‘Paused’ state

#### 19. <span style="color:purple">float</span> default_speed

로봇 동작의 기본 속도 배율 값 (= UI의 속도 바) (값 범위: 0 ~ 1)

#### 20. <span style="color:purple">int</span> robot_state

이동(모션) 상태

```C++
if (robot_state == 1) {
  // no motion command, idle
} else {
  // robot motion command is executing
}

1 = No motion command / Idle
3 = Executing motion command(s)
5 = No motion (Move) command + but executing Conveyor or Force control mode
60 + index = Under Move PB/ITPL/Pro command / index is passing waypoint number
560 + index = Under MoveXB command / index is passing waypoint number
```

#### 21. <span style="color:purple">int</span> information_chunk_1

전원 등 다양한 상태 정보를 전달하는 정보 청크입니다.<br>
비트 조합으로 구성되어 있습니다.

```C++
(information_chunk_1 >> 0) & 0b01 = Control Box’s 48V input state
(information_chunk_1 >> 1) & 0b01 = Control Box’s 48V output state
(information_chunk_1 >> 2) & 0b01 = Control Box’s 24V input state
(information_chunk_1 >> 3) & 0b01 = Control Box’s E-Stop state 1
(information_chunk_1 >> 4) & 0b01 = Control Box’s User Switch state
(information_chunk_1 >> 5) & 0b01 = Control Box’s E-Stop state 2
(information_chunk_1 >> 6) & 0b01 = Whether DC power is applied to the robot arm
(information_chunk_1 >> 7) & 0b01 = TFB’s Direct teaching button is pressed
(information_chunk_1 >> 8) & 0b01 = Hand Controller Button A
(information_chunk_1 >> 9) & 0b01 = Hand Controller Button B
(information_chunk_1 >> 10) & 0b01 = Hand Controller Button C
(information_chunk_1 >> 11) & 0b01 = Hand Controller Button D
(information_chunk_1 >> 12) & 0b01 = Is SOS State
(information_chunk_1 >> 13) & 0b01 = Is Lan2Can Connected
(information_chunk_1 >> 14) & 0b01 = GP A Port
(information_chunk_1 >> 15) & 0b01 = GP B Port
(information_chunk_1 >> 16) & 0b111111 = Control Box CPU temperature x 0.5
(information_chunk_1 >> 22) & 0b111111 = Control Box MotherBoard temperature x 0.5
(information_chunk_1 >> 28) & 0b01 = Is ProfiNet Talking
(information_chunk_1 >> 29) & 0b01 = Is EtherNet/IP Talking
(information_chunk_1 >> 30) & 0b01 = Program Load state
                                    (Whenever the Program load process is successful, 1 and 0 are continuously converted.)
(information_chunk_1 >> 31) & 0b01 = Program Transmit state (via TCP/IP Tablet UI, not for user)
```

#### 22. <span style="color:purple">float</span> reserved_1[6]

사용됨 / 미사용

#### 23. <span style="color:purple">int</span> jnt_info[6]

각 관절의 기본 상태

> 0 = Base<br>
> 1 = Shoulder<br>
> 2 = Elbow<br>
> 3 = Wrist 1<br>
> 4 = Wrist 2<br>
> 5 = Wrist 3

각 int형(4바이트)은 비트들의 조합으로 구성되어 있습니다.

```C++
(jnt_info[#] >> 0) & 0b01 = Joint #’s FET state
(jnt_info[#] >> 1) & 0b01 = Joint #’s RUN state
(jnt_info[#] >> 2) & 0b01 = Joint #’s INIT state
(jnt_info[#] >> 3) & 0b01 = Joint #’s MODE state
(jnt_info[#] >> 4) & 0b01 = Joint #’s encoder state (Nonius err)
(jnt_info[#] >> 5) & 0b01 = Joint #’s encoder state (LowBatt err)
(jnt_info[#] >> 6) & 0b01 = Joint #’s encoder state (Calibration mode)
(jnt_info[#] >> 7) & 0b01 = Joint #’s encoder state (Multi-turn err)

(jnt_info[#] >> 8) & 0b01 = Joint #’s Error state (JAM err)
(jnt_info[#] >> 9) & 0b01 = Joint #’s Error state (CUR err)
(jnt_info[#] >> 10) & 0b01 = Joint #’s Error state (BIG err)
(jnt_info[#] >> 11) & 0b01 = Joint #’s Error state (INP err)
(jnt_info[#] >> 12) & 0b01 = Joint #’s Error state (FLT err)
(jnt_info[#] >> 13) & 0b01 = Joint #’s Error state (TMP err)
(jnt_info[#] >> 14) & 0b01 = Joint #’s Error state (PS1 err)
(jnt_info[#] >> 15) & 0b01 = Joint #’s Error state (PS2 err)
```

**bits 16 ~ 31 are reserved.**

예제 :

```
In position control mode: RUN = 1 / MODE = 0
In direct teaching (current control mode): RUN = 0 / MODE = 1
```

#### 24. <span style="color:purple">int</span> collision_detect_onoff

외부 충돌 감지 On/Off 상태

> 0 = Off<br>
> 1 = On

#### 25. <span style="color:purple">int</span> is_free_drive_mode

프리드라이브(중력 보상) On/Off 상태<br>
비트 조합으로 구성되어 있습니다.

```C++
(is_free_drive_mode & 0b11) = Free Drive (Direct Teaching) On/Off 1 or 0
```

#### 26. <span style="color:purple">int</span> real_vs_simulation_mode

운영 모드: 시뮬레이션 모드 = 1 / 실제 로봇 모드 = 0 <br>
비트 조합으로 구성되어 있습니다.

```C++
(real_vs_simulation_mode & 0b1111) = Real vs Simulation : Simulation = 1, Real Robot = 0
```

#### 27. <span style="color:purple">int</span> init_state_info

비트 조합으로 구성되어 있습니다.

(First 6 bits: init_state_info & 0b111111)<br>
Robot arm activation (Initialization) stage info (0 -> 6)

> 0: default<br>
> 1: Power check<br>
> 2: Device check<br>
> 3: Servo Initialization check<br>
> 4: Parameter check<br>
> 5: Payload check<br>
> 6: Activation done

#### 28. <span style="color:purple">int</span> init_error **<span style="color:red">(Not for user)</span>**

로봇 팔 활성화(초기화) 중 발생한 에러 코드 (UI에 반환되는 값) <br>
비트 조합으로 구성되어 있습니다.

(First 12 bits: init_error & 0b111111111111)

#### 29. <span style="color:purple">float</span> tfb_analog_in[2]

로봇 툴 플랜지 아날로그 입력 각 채널의 측정 정보 (단위: 전압)

> Channel number: 0 ~ 1

#### 30. <span style="color:purple">int</span> tfb_digital_in[2]

로봇 툴 플랜지 디지털 입력 각 채널의 측정 정보 (값: 0 또는 1) <br>
채널 번호: 0~1 <br>
비트 조합으로 구성되어 있습니다. <br>



```C++
(tfb_digital_in[#] & 0b11) = Tool Flange Digital Input # Information
```

#### 31. <span style="color:purple">int</span> tfb_digital_out[2]

로봇 툴 플랜지 디지털 출력 각 채널의 정보 (값: 0 또는 1) <br>
채널 번호: 0~1 <br>
비트 조합으로 구성되어 있습니다. <br>

```C++
(tfb_digital_out[#] & 0b11) = Tool Flange Digital Output # Information
```

#### 32. <span style="color:purple">float</span> tfb_voltage_out

로봇 툴 플랜지 출력 전압 레벨 (단위: 전압)

#### 33. <span style="color:purple">int</span> op_stat_collisioin_occur

외부 충돌 감지 여부 (값: 0 또는 1) <br>
※ 하위 2비트만 유효합니다.

#### 34. <span style="color:purple">int</span> op_stat_sos_flag

로봇 팔 동작 중 발생한 디바이스 오류 코드

> 0 = None<br>
> 1 = Encoder err (PVL)<br>
> 2 = CPU err<br>
> 3 = Big err<br>
> 4 = Input err<br>
> 5 = JAM err<br>
> 6 = Over current err<br>
> 7 = Position bound err<br>
> 8 = Mode err<br>
> 9 = Match err<br>
> 10 = Over current/Low voltage err<br>
> 11 = Temperature err<br>
> 12 = Speed over err

※ 하위 6비트만 유효합니다.

#### 35. <span style="color:purple">int</span> op_stat_self_collision

자체 충돌(Self-Collision) 감지 여부 (값: 0 또는 1) <br>
비트 조합으로 구성되어 있습니다.

```C++
(op_stat_self_collsion & 0b11) = Whether self-collision is detected (0 or 1)
(op_stat_self_collsion>>2 & 0b11) = Last Out-collision State
                                    1 : Out-Collision caused by motor torque
                                    2 : Out-Collision caused by Accelerometer
                                    3 : Out-Collision caused by Gyro sensor
```

\*\*나머지 28비트: 제어박스의 시간대(Time Zone) 정보

#### 36. <span style="color:purple">int</span> op_stat_soft_estop_occur

일시 정지 상태 플래그 (값: 0 또는 1)

#### 37. <span style="color:purple">int</span> op_stat_ems_flag

소프트웨어(기구학) 기반 비상 정지 상황

> 0 = None<br>
> 1 = Arm Stretch<br>
> 2 = Cartesian Limit<br>
> 3 = Joint Limit<br>
> 4 = Un-solvable

※ 하위 6비트만 유효합니다.

#### 38. <span style="color:purple">int</span> information_chunk_2

다양한 상태 정보를 전달하는 정보 청크입니다. <br>
비트 조합으로 구성되어 있습니다.

```C++
(information_chunk_2 >> 0) & 0b11 = Config digital input 16 (0 or 1) (Not for user)
(information_chunk_2 >> 2) & 0b1111111111111111 = Target welding voltage * 100
(information_chunk_2 >> 18) & 0b11 = Is Under Robot Arm activating
(information_chunk_2 >> 20) & 0b11 = PFL Mode
(information_chunk_2 >> 22) & 0b11111111 = Robot Components Connection Ino
```

#### 39. <span style="color:purple">int</span> information_chunk_3

다양한 상태 정보를 전달하는 정보 블록입니다. <br>
비트 조합으로 구성되어 있습니다.

```C++
(information_chunk_3 >> 0) & 0b11 = Config digital input 17 (0 or 1) (Not for user)
(information_chunk_3 >> 2) & 0b1111111111111111 = TCP Speed(Velocity) * 10
(information_chunk_3 >> 18) & 0b11 = Task Load Flag
(information_chunk_3 >> 20) & 0b11 = LAN Cable Connection Info
(information_chunk_3 >> 22) & 0b01 = is Safety EMS2 Pressed
(information_chunk_3 >> 23) & 0b01 = is Safety PRS Pressed
(information_chunk_3 >> 24) & 0b01 = is Safety HSS Pressed
(information_chunk_3 >> 25) & 0b01 = is Safety SSS Pressed
```

#### 40. <span style="color:purple">int</span> inbox_trap_flag[2]

Inbox # 확인 기능에 의해 감지되었는지 여부 (\# = In Box number: 0 or 1)

※ 하위 4비트만 유효합니다.

#### 41. <span style="color:purple">int</span> inbox_check_mode[2]

Inbox #의 확인 기능 모드 (\# = In Box number: 0 or 1)

> 0 = None<br>
> 1 = Check Tool Flange center<br>
> 2 = Check TCP<br>
> 3 = Check Tool Box<br>
> 4 = Check all

※ 하위 4비트만 유효합니다.

#### 42. <span style="color:purple">float</span> eft_fx, eft_fy, eft_fz, eft_mx, eft_my, eft_mz

외부 F/T (force/torque) 센서 값<br>

> Fx, Fy, Fz (unit: N)<br>
> Mx, My, Mz (unit: Nm)

#### 43. <span style="color:purple">int</span> information_chunk_4

다양한 상태 정보를 전달하는 정보 블록입니다.<br>
비트 조합으로 구성되어 있습니다.

```C++
(information_chunk_4 >> 0) & 0b11 = No-Arc Function On/Off (0 or 1)
(information_chunk_4 >> 2) & 0b111111 = Selected Tool List number
(information_chunk_4 >> 8) & 0b11 = External Joint (External axis) Jog On/Off (0 or 1)
(information_chunk_4 >> 10) & 0b01 = Tool Flange Digital Input 2
(information_chunk_4 >> 11) & 0b01 = Tool Flange Digital Input 3
(information_chunk_4 >> 12) & 0b01 = Tool Flange Digital Input 4
(information_chunk_4 >> 13) & 0b01 = Tool Flange Digital Input 5
(information_chunk_4 >> 14) & 0b01 = Arc Light On state (Not for user)
(information_chunk_4 >> 15) & 0b1111111111111 = Target welding current * 10
(information_chunk_4 >> 28) & 0b11 = Target welding voltage option (0 or 1)
(information_chunk_4 >> 30) & 0b01 = Is Program intended stop
(information_chunk_4 >> 31) & 0b01 = Is Home Posture
```

#### 44. <span style="color:purple">float</span> extend_io1_analog_in[4]

확장 I/O 보드의 채널별 아날로그 입력 측정 정보 (단위: 전압)

> Channel number: 0 ~ 3

#### 45. <span style="color:purple">float</span> extend_io1_analog_out[4]

확장 I/O 보드의 채널별 아날로그 출력 정보 (단위: 전압)

> Channel number: 0 ~ 3

#### 46. <span style="color:purple">unsigned int</span> extend_io1_digital_info

확장 I/O 보드의 디지털 입출력 정보<br>
비트 조합으로 구성되어 있습니다.

```C++
(extend_io1_digital_info >> 0) & 0b01 = Extend I/O digital input # 0
(extend_io1_digital_info >> 1) & 0b01 = Extend I/O digital input # 1
.
.
(extend_io1_digital_info >> 15) & 0b01 = Extend I/O digital input # 15
(extend_io1_digital_info >> 16) & 0b01 = Extend I/O digital output # 0
(extend_io1_digital_info >> 17) & 0b01 = Extend I/O digital output # 1
.
.
(extend_io1_digital_info >> 31) & 0b01 = Extend I/O digital input # 15
```

#### 47. <span style="color:purple">float</span> aa_joint_ref[6]

각 외부 관절(보조 관절)의 기준 각도 (단위: 도)

> Channel number: 0 ~ 5

#### 48. <span style="color:purple">unsigned int</span> safety_board_stat_info **<span style="color:red">(Not for user)</span>**

제어박스의 세이프티 보드에 관한 데이터 블록
