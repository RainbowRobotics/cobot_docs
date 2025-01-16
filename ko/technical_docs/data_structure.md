---
layout: doc
outline: deep
---

# Data Structure (reqdata) v6.10

<div class="warning custom-block">
  <p class="custom-block-title">CAUTION</p>
  <ul>
    <li>
      This document is a structure description of status data that can be acquired through port 5001.
    </li>
    <li>
      The contents may be updated depending on the software version, and this document is based on version 4.3.1.
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

Header of this data structure

```C++
header[0] = 0x24
header[1] = size & 0xFF
header[2] = (size >> 8) & 0xFF
header[3] = 0x03; // Type of this data
```

#### 2. <span style="color:purple">float</span> time

Basic Timer (unit: second)

#### 3. <span style="color:purple">float</span> jnt_ref[6]

Reference angle of each joint. (unit: degree)

> 0 = Base<br>
> 1 = Shoulder<br>
> 2 = Elbow<br>
> 3 = Wrist 1<br>
> 4 = Wrist 2<br>
> 5 = Wrist 3

#### 4. <span style="color:purple">float</span> jnt_ang[6]

Real-encoder (measured) angle of each joint. (unit: degree)

> 0 = Base<br>
> 1 = Shoulder<br>
> 2 = Elbow<br>
> 3 = Wrist 1<br>
> 4 = Wrist 2<br>
> 5 = Wrist 3

#### 5. <span style="color:purple">float</span> jnt_cur[6]

Measured current of each joint. (unit: Ampere)

> 0 = Base<br>
> 1 = Shoulder<br>
> 2 = Elbow<br>
> 3 = Wrist 1<br>
> 4 = Wrist 2<br>
> 5 = Wrist 3

#### 6. <span style="color:purple">float</span> tcp_ref[6]

TCP posture info based on reference-joint-angles (unit: mm & degree)

> 0 = X<br>
> 1 = Y<br>
> 2 = Z<br>
> 3 = Rx<br>
> 4 = Ry<br>
> 5 = Rz

#### 7. <span style="color:purple">float</span> tcp_pos[6]

TCP posture info based on encoder-joint-angles (unit: mm & degree)

> 0 = X<br>
> 1 = Y<br>
> 2 = Z<br>
> 3 = Rx<br>
> 4 = Ry<br>
> 5 = Rz<br>
>
> - It is being transmitted overwritten based on the current reference.

#### 8. <span style="color:purple">float</span> analog_in[4]

Control box analog input measurement information of each channel (unit: Voltage)

> Channel number: 0 ~ 3

#### 9. <span style="color:purple">float</span> analog_out[4]

Control box analog output information of each channel (unit: Voltage)

> Channel number: 0 ~ 3

#### 10. <span style="color:purple">int</span> digital_in[16]

Control box digital input measurement information of each channel (value: 0 or 1)

> Channel number: 0 ~ 15

#### 11. <span style="color:purple">int</span> digital_out[16]

Control box digital output information of each channel (value: 0 or 1)

> Channel number: 0 ~ 15

#### 12. <span style="color:purple">float</span> jnt_temperature[6]

Measured temperature of each joint. (unit: celsius)

> 0 = X<br>
> 1 = Y<br>
> 2 = Z<br>
> 3 = Rx<br>
> 4 = Ry<br>
> 5 = Rz

#### 13. <span style="color:purple">int</span> task_pc **<span style="color:red">(Not for user)</span>**

Target program counter position during STEP function.

#### 14. <span style="color:purple">int</span> task_repeat **<span style="color:red">(Not for user)</span>**

Target program execution number in PLAY page.

#### 15. <span style="color:purple">int</span> task_run_id **<span style="color:red">(Not for user)</span>**

Running program counter position.

#### 16. <span style="color:purple">int</span> task_run_num **<span style="color:red">(Not for user)</span>**

Current program execution number in PLAY page.

#### 17. <span style="color:purple">int</span> task_run_time **<span style="color:red">(Not for user)</span>**

Time since the program started (unit: second)

#### 18. <span style="color:purple">int</span> task_state

Basic state of ‘Program Execution’

> 1 = Program not run / Idle<br>
> 3 = Program is running<br>
> 2 = Program is running + but ‘Paused’ state

#### 19. <span style="color:purple">float</span> default_speed

Default speed multiplier value of robot motion (=speed bar in UI) (value: 0 ~ 1)

#### 20. <span style="color:purple">int</span> robot_state

Move (motion) state

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

Information chunk to deliver various state information (power and others)<br>
It consists of a combination of bits.

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

Reserved / Not used

#### 23. <span style="color:purple">int</span> jnt_info[6]

Basic state of each joint.

> 0 = Base<br>
> 1 = Shoulder<br>
> 2 = Elbow<br>
> 3 = Wrist 1<br>
> 4 = Wrist 2<br>
> 5 = Wrist 3

Each int (4byte) consists of a combination of bits.

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

Example :

```
In position control mode: RUN = 1 / MODE = 0
In direct teaching (current control mode): RUN = 0 / MODE = 1
```

#### 24. <span style="color:purple">int</span> collision_detect_onoff

Out collision detection On/Off State

> 0 = Off<br>
> 1 = On

#### 25. <span style="color:purple">int</span> is_free_drive_mode

Free-drive (Gravity-compensation) On/Off State<br>
It consists of a combination of bits.

```C++
(is_free_drive_mode & 0b11) = Free Drive (Direct Teaching) On/Off 1 or 0
```

#### 26. <span style="color:purple">int</span> real_vs_simulation_mode

Mode of operation: Simulation mode=1 / Real Robot mode=0<br>
It consists of a combination of bits.

```C++
(real_vs_simulation_mode & 0b1111) = Real vs Simulation : Simulation = 1, Real Robot = 0
```

#### 27. <span style="color:purple">int</span> init_state_info

It consists of a combination of bits.

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

Error code during the arm activation (return value for UI)<br>
It consists of a combination of bits.

(First 12 bits: init_error & 0b111111111111)

#### 29. <span style="color:purple">float</span> tfb_analog_in[2]

Robot-Tool-Flange analog input measurement information of each channel (unit: Voltage)

> Channel number: 0 ~ 1

#### 30. <span style="color:purple">int</span> tfb_digital_in[2]

Robot-Tool-Flange digital input measurement information of each channel (value: 0 or 1)<br>
Channel number: 0~1<br>
It consists of a combination of bits.

```C++
(tfb_digital_in[#] & 0b11) = Tool Flange Digital Input # Information
```

#### 31. <span style="color:purple">int</span> tfb_digital_out[2]

Robot-Tool-Flange digital output information of each channel (value: 0 or 1)<br>
Channel number: 0~1<br>
It consists of a combination of bits.

```C++
(tfb_digital_out[#] & 0b11) = Tool Flange Digital Output # Information
```

#### 32. <span style="color:purple">float</span> tfb_voltage_out

Robot-Tool-Flage output voltage level (unit: Voltage)

#### 33. <span style="color:purple">int</span> op_stat_collisioin_occur

Whether out-collision is detected (0 or 1)<br>
※ lower 2bits are valid

#### 34. <span style="color:purple">int</span> op_stat_sos_flag

Robot Arm device error code during operation.

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

※ lower 6bits are valid

#### 35. <span style="color:purple">int</span> op_stat_self_collision

Whether self-collision is detected (0 or 1)<br>
It consists of a combination of bits.

```C++
(op_stat_self_collsion & 0b11) = Whether self-collision is detected (0 or 1)
(op_stat_self_collsion>>2 & 0b11) = Last Out-collision State
                                    1 : Out-Collision caused by motor torque
                                    2 : Out-Collision caused by Accelerometer
                                    3 : Out-Collision caused by Gyro sensor
```

\*\*other 28 bits: control box time zone info

#### 36. <span style="color:purple">int</span> op_stat_soft_estop_occur

Pause state flag (0 or 1)

#### 37. <span style="color:purple">int</span> op_stat_ems_flag

Software (kinematics) emergency stop situation

> 0 = None<br>
> 1 = Arm Stretch<br>
> 2 = Cartesian Limit<br>
> 3 = Joint Limit<br>
> 4 = Un-solvable

※ lower 6bits are valid

#### 38. <span style="color:purple">int</span> information_chunk_2

Information chunk to deliver various state information.<br>
It consists of a combination of bits.

```C++
(information_chunk_2 >> 0) & 0b11 = Config digital input 16 (0 or 1) (Not for user)
(information_chunk_2 >> 2) & 0b1111111111111111 = Target welding voltage * 100
(information_chunk_2 >> 18) & 0b11 = Is Under Robot Arm activating
(information_chunk_2 >> 20) & 0b11 = PFL Mode
(information_chunk_2 >> 22) & 0b11111111 = Robot Components Connection Ino
```

#### 39. <span style="color:purple">int</span> information_chunk_3

Information chunk to deliver various state information.<br>
It consists of a combination of bits.

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

Whether or not detected by the Inbox # check-function. (\# = In Box number: 0 or 1)

※ lower 4bits are valid

#### 41. <span style="color:purple">int</span> inbox_check_mode[2]

Check-function mode of Inbox #. (\# = In Box number: 0 or 1)

> 0 = None<br>
> 1 = Check Tool Flange center<br>
> 2 = Check TCP<br>
> 3 = Check Tool Box<br>
> 4 = Check all

※ lower 4bits are valid

#### 42. <span style="color:purple">float</span> eft_fx, eft_fy, eft_fz, eft_mx, eft_my, eft_mz

External F/T (force/torque) sensor value<br>

> Fx, Fy, Fz (unit: N)<br>
> Mx, My, Mz (unit: Nm)

#### 43. <span style="color:purple">int</span> information_chunk_4

Information chunk to deliver various state information.<br>
It consists of a combination of bits.

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

Extended I/O board analog input measurement information of each channel (unit: Voltage)

> Channel number: 0 ~ 3

#### 45. <span style="color:purple">float</span> extend_io1_analog_out[4]

Extended I/O board analog output information of each channel (unit: Voltage)

> Channel number: 0 ~ 3

#### 46. <span style="color:purple">unsigned int</span> extend_io1_digital_info

Extended I/O board digital input/output information<br>
It consists of a combination of bits.

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

Reference angle of each external-joint (auxiliary joint). (unit: degree)

> Channel number: 0 ~ 5

#### 48. <span style="color:purple">unsigned int</span> safety_board_stat_info **<span style="color:red">(Not for user)</span>**

Data chunk about the control box safety board
