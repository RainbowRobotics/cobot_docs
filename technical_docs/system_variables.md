---
layout: doc
outline: deep
---

# System Variables v220801

<br>

#### 1. GLOB_PIN_0 ~ GLOB_PIN_39

Variables that store the position and orientation (location and rotation) of global Points saved in the system.<br>
(Type: Point)

#### 2. GLOB_PIN_0_J ~ GLOB_PIN_39_J

Variables that store the joint angle values of global Point saved in the system (Unit: Degree).<br>
(Type: Joint)

#### 3. \_ROM_0~9

Non-volatile data stored in the system, meaning the values are retained even if the program ends or the controller power is turned off.

#### 4. \_GDATA_0~19 (\_GLOBAL_0~19)

Default global variables set in the system that can be used across all programs.<br>
\_GDATA_0~19and \_GLOBAL_0~19 are the same variables stored in the same area.

#### 5. SD_MOD_USER_0~127 (SD_MOD_ADDR_128~255)

When the robot acts as a ModbusTCP server, this is the area available for user usage.<br>
This variable is in the Word (16-bit) area and can represent values up to 65,536 (216).<br>
SD_MOD_USER_0~127 and SD_MOD_ADDR_128~255 are the same variables stored in the same area.<br>
For example, the value at address 128 corresponds to SD_MOD_USER_0 or SD_MOD_ADDR_128.

#### 6. SD_MODBUS_CLIENT_NUM

When the robot acts as a ModbusTCP server, this variable indicates the number of connected clients.

#### 7. SD_TIMER_0~9

Variables representing time, allowing control of up to 9 separate timers.<br>
Timers can be selected and initialized through the Set-Timer Setting in the Make window.<br>
During program execution, the time increases automatically and is mainly used for timer functions.

#### 8. EIP_INT_R2P_0~19 (EIP_R2P_INT_0~19)

Variables used to transmit integer data to a PLC via Ethernet/IP communication.<br>
EIP_INT_R2P_0~19 and EIP_R2P_INT_0~19 are the same variables stored in the same area.

#### 9. EIP_INT_P2R_0~19 (EIP_P2R_INT_0~19)

Variables used to receive integer data from a PLC via Ethernet/IP communication.<br>
EIP_INT_P2R_0~19 and EIP_P2R_INT_0~19 are the same variables stored in the same area.

#### 10. EIP_REAL_R2P_0~19 (EIP_R2P_REAL_0~19)

Variables used to transmit floating-point data to a PLC via Ethernet/IP communication.<br>
EIP_REAL_R2P_0~19 and EIP_R2P_REAL_0~19 are the same variables stored in the same area.

#### 11. EIP_REAL_P2R_0~19 (EIP_P2R_REAL_0~19)

Variables used to receive floating-point data from a PLC via Ethernet/IP communication.<br>
EIP_REAL_P2R_0~19 and EIP_P2R_REAL_0~19 are the same variables stored in the same area.

#### 12. SD_J#\_ANG

SD_J0_ANG<br>
SD_J1_ANG<br>
SD_J2_ANG<br>
SD_J3_ANG<br>
SD_J4_ANG<br>
SD_J5_ANG<br>

Variables representing the encoder angle values of the robot arm's joints.<br>
(Unit: degree)

#### 13. SD_J#\_CUR

SD_J0_CUR<br>
SD_J1_CUR<br>
SD_J2_CUR<br>
SD_J3_CUR<br>
SD_J4_CUR<br>
SD_J5_CUR<br>

Variables representing the current values of the robot arm's joints.<br>
(Unit: A)

#### 14. SD_EXT_AXIS\_\#

SD_EXT_AXIS_0<br>
SD_EXT_AXIS_1<br>
SD_EXT_AXIS_2<br>
SD_EXT_AXIS_3<br>
SD_EXT_AXIS_4<br>
SD_EXT_AXIS_5<br>

Variables representing the command values for the external axis joints.<br>
(Unit: degree)

#### 15. SD_EXJ#\_ANG

SD_EXJ0_ANG<br>
SD_EXJ1_ANG<br>
SD_EXJ2_ANG<br>
SD_EXJ3_ANG<br>
SD_EXJ4_ANG<br>
SD_EXJ5_ANG<br>

Variables representing the encoder angle values of the external axis joints.<br>
(Unit: degree)

#### 16. SD_BEGIN_J\#

SD_BEGIN_J0<br>
SD_BEGIN_J1<br>
SD_BEGIN_J2<br>
SD_BEGIN_J3<br>
SD_BEGIN_J4<br>
SD_BEGIN_J5<br>

Variables representing the joint angle values set at the Begin position.<br>
(Unit: degree)

#### 17. SD_TCP_X

SD_TCP_X<br>
SD_TCP_Y<br>
SD_TCP_Z<br>
SD_TCP_RX<br>
SD_TCP_RY<br>
SD_TCP_RZ<br>

Variables representing the position and orientation of the TCP (Tool Center Point) relative to the base (global) coordinate system.<br>
(Unit: mm & degree)

#### 18. SD_TCP_X_REF

SD_TCP_X_REF<br>
SD_TCP_Y_REF<br>
SD_TCP_Z_REF<br>
SD_TCP_RX_REF<br>
SD_TCP_RY_REF<br>
SD_TCP_RZ_REF<br>

Variables representing the position and orientation of the TCP relative to the base (global) coordinate system.<br>
(Unit: mm & degree)

#### 19. SD_EFT_FX

SD_EFT_FX<br>
SD_EFT_FY<br>
SD_EFT_FZ<br>
SD_EFT_MX<br>
SD_EFT_MY<br>
SD_EFT_MZ<br>

Variables representing the sensor values received from the External Force Torque sensor.<br>
FX, FY, FZ indicate force (N), while MX, MY, MZ represent torque (Nm).<br>
The reference axes for X, Y, Z values follow the coordinate system of the sensor manufacturer.<br>
(Unit: N, Nm)

#### 20. SD_EFT_F_SIZE

Variables representing the magnitude of force (sum of the three axes) as measured by the External Force Transducer. (N)

#### 21. SD_EFT_M_SIZE

This variable represents the magnitude of the moment torque (sum of the three axes) from the External Force Transducer (Nm).

#### 22. SD_TEMPERATURE_MC#

SD_TEMPERATURE_MC0<br>
SD_TEMPERATURE_MC1<br>
SD_TEMPERATURE_MC2<br>
SD_TEMPERATURE_MC3<br>
SD_TEMPERATURE_MC4<br>
SD_TEMPERATURE_MC5<br>

This variable indicates the current temperature values of each joint in the robot.<br>
(Unit: Celsius)

#### 23. SD_POWER_STATE

This variable manages the power management information of the controller at the bit level.

- SD_POWER_STATE >> 0 & 0x01 : Indicates whether the 48V SMPS is operational.
- SD_POWER_STATE >> 1 & 0x01 : Power switching circuit operation information.
- SD_POWER_STATE >> 2 & 0x01 : Indicates whether the 24V SMPS is operational.
- SD_POWER_STATE >> 3 & 0x01 : 48V switching-line status.
- SD_POWER_STATE >> 4 & 0x01 : PC power switching operation status.
- SD_POWER_STATE >> 5 & 0x01 : E-stop switching operation status.

#### 24. SD_DEFAULT_SPEED

This variable represents the default speed ratio. The UI speed control bar displays values between 0 and 1.

#### 25. SD_ROBOT_STATE

This variable indicates whether the robot is executing a motion command.

- 1 = Idle
- Others = Moving

#### 26. SD_TASK_RUN_STATE

This variable indicates the basic state when a program is running.

- 1 = Program not run / Idle
- 2 = Program is running
- 3 = Program I running + but ‘Paused’ state

#### 27. SD_COLLISION_DETECT_STATE

This variable represents the on/off status of the external collision detection feature.

- 0 = External collision detection is off.
- 1 = External collision detection is on.

#### 28. SD_COLL_DURING_MOVE

This variable indicates whether a collision occurred during movement.<br>
If there was a collision history during motion, the value of this variable will be 1.

#### 29. SD_IS_FREE_DRIVE_MODE

This variable represents the status of the direct teaching mode.

- 0 = Direct teaching is off.
- 1 = Direct teaching is on.

#### 30. SD_TFB_BUTTON

This variable represents the status of the direct teaching button on the tool flange.

#### 31. SD_PG_MODE

This variable represents the robot's operation mode.

- 0 = Real mode
- 1 = Simulation mode

#### 32. SD_INIT_STATE_INFO

This system variable indicates the activation stage information of the robot.

- 0 = default
- 1 = Power check
- 2 = Device check
- 3 = Servo Initialization check
- 4 = Parameter check
- 5 = Payload check
- 6 = Activation done

#### 33. SD_INIT_ERR

This system variable displays the activation error information of the robot.

#### 34. SD_OP_STAT_COLLISION_OCCUR

This variable indicates whether a collision has occurred with the robot.

- 0 = Idle
- 1 = External collision occurred

#### 35. SD_OP_STAT_SOS_FLAG

This variable indicates whether there is an issue with the controller power, robot joint controller, or other problems.

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

This variable represents whether the robot has entered the self-collision range during operation.

- 0 = Idle
- 1 = Entered self-collision range

#### 37. SD_OP_STAT_SOFT_ESTOP_OCCUR

This variable indicates whether the robot (program) is in a pause state.

- 0 = Idle
- 1 = Paused state

#### 38. SD_OP_STAT_EMS_FLAG

This variable indicates when there is no answer from the robot position calculation algorithm or when the joint limit range has been reached.

- 0 = None
- 1 = Arm Stretch
- 2 = Cartesian Limit
- 3 = Joint Limit
- 4 = Un-solvable

#### 39. SD_DIGITAL_IN_CONFIG_0, SD_DIGITAL_IN_CONFIG_1

These two variables represent the information of the two safety stop terminals (Din 16 & 17).

#### 40. SD_INBOX_TRAP_FLAG_0~1

This variable indicates whether an event set in Inbox mode has occurred.

#### 41. SD_INBOX_CHECK_MODE_0~1

This variable represents the Inbox mode set when using the Inbox feature.

- 0: No checking
- 1: Check Tool Flange Center (Monitors whether the center of the tool flange enters a specific area)
- 2: Check Tool Center Point (Monitors whether the set TCP enters a specific area)
- 3: Check Tool Box (Monitors whether a virtually set box enters a specific area)
- 4: Check All (Monitors whether the robot’s settings for the above three conditions enter a specific area)

#### 42. SD_ANALOG_IN_0~3

This variable represents the values (0~10V) of the 4 analog input ports on the controller box.

#### 43. SD_ANALOG_OUT_0~3

This variable represents the values (0~10V) of the 4 analog output ports on the controller box.

#### 44. SD_DIGITAL_IN_0~15

This variable represents the values (0 or 1) of the 16 digital input ports on the controller box.

#### 45. SD_DIGITAL_OUT_0~15

This variable represents the values (0 or 1) of the 16 digital output ports on the controller box.

#### 46. SD_DIGITAL_IN_0_LOW_TIME ~ SD_DIGITAL_IN_15_LOW_TIME

#### 46. DIN_0_LOW_TIME ~ DIN_15_LOW_TIME

This variable records the time for which a given signal (Digital IN 0~15) remains at 0 (Low).<br>
The timer resets when the signal goes from 1 (High) to 0 (Low) and can be used for timing purposes.

- SD_DIGITAL_IN_0_LOW_TIME and DIN_0_LOW_TIME are the same variables stored in the same region.

#### 47. SD_DIGITAL_IN_0_HIGH_TIME ~ SD_DIGITAL_IN_15_HIGH_TIME

#### 47. DIN_0_HIGH_TIME ~ DIN_15_HIGH_TIME

This variable records the time for which a given signal (Digital IN 0~15) remains at 1 (High).<br>
The timer resets when the signal goes from 0 (Low) to 1 (High) and can be used for timing purposes.

- SD_DIGITAL_IN_0_HIGH_TIME and DIN_0_HIGH_TIME are the same variables stored in the same region.

#### 48. SD_EX_ANALOG_IN_0~3

This variable represents the values (0~10V) of the 4 analog input ports on the expansion IO board.

#### 49. SD_EX_ANALOG_OUT_0~3

This variable represents the values (0~10V) of the 4 analog output ports on the expansion IO board.

#### 50. SD_EX_DIGITAL_IN_0~15

This variable represents the values (0 or 1) of the 16 digital input ports on the expansion IO board.

#### 51. SD_EX_DIGITAL_OUT_0~15

This variable represents the values (0 or 1) of the 16 digital output ports on the expansion IO board.

#### 52. SD_TFB_ANALOG_IN_0~1

This variable represents the values (0~10V) of the 2 analog input ports on the tool flange board (TFB).

#### 53. SD_TFB_DIGITAL_IN_0~1

This variable represents the values (0 or 1) of the 2 digital input ports on the tool flange board (TFB).

#### 54. SD_TFB_DIGITAL_OUT_0~1

This variable represents the values (0 or 1) of the 2 digital output ports on the tool flange board (TFB).

#### 55. SD_TFB_VOLTAGE_OUT

This variable represents the voltage output information of the tool flange board (TFB).

- Controls 3 output voltage values: 0V, 12V, 24V

#### 56. SD_HAND_TOKTOK

This variable indicates whether an external "tapping" action on the robot occurred.

#### 57. SD_FINISH_AT_EVENT

This is the condition for finishing the movement (Finish At feature), indicating whether the robot has completed its movement.<br>
When a new movement begins, this variable automatically resets to 0.

- 0: When the movement is completed by reaching the target point.
- 1: When the movement is completed due to satisfying the FinishAt condition.

#### 58. SD_TCP_VEL_REF

This variable represents the commanded linear velocity of the current TCP. (mm/s)

#### 59. SD_MOTION_TIME

This variable stores the elapsed time after the motion is executed. It resets when the next motion begins. (seconds)

#### 60. SD_SOCK_IS_OPEN_0~4

When the robot system is used as a client, this variable indicates whether the corresponding socket number (0 ~ 4) has been successfully opened (connected to the server).<br>
When the robot system is used as a server, it indicates whether a client is connected to the server.

#### 61. SD_SOCK_LAST_READ_0~4

This variable indicates the success or failure of the last read operation performed on the corresponding socket number (0~4).

#### 62. SD_ARM_POWER

This variable represents the power consumed by the robot arm.

#### 63. SD_ARM_POWER_AMP

This variable represents the current being used by the robot arm.

#### 64. SD_IS_TPU_CONNECT

This variable indicates the connection status between the Teaching Pendant Unit (TPU) / tablet and the controller box.

#### 65. SD_IS_RUN_IN_MAKE

This variable indicates whether the current program run was initiated from the "Make" window.

- 1: Program run from the Make window.

#### 66. SD_IS_RUN_IN_PLAY

This variable indicates whether the current program run was initiated from the "Play" window.

- 1: Program run from the Play window.

#### 67. SD_IS_INTENDED_STOP

This variable indicates whether the program stop was intentional.

#### 68. SD_MOVE_INDEX

This variable indicates the waypoint number being passed through when executing continuous movement commands such as Move PB, ITPL, or PRO. (Integer value)

#### 69. SD_MOVE_INDEX_F

This variable indicates the waypoint number being passed through during continuous movement commands such as Move PB, ITPL, or PRO, including decimal values for fractional progress.

#### 70. SD_MOVE_PROPERTY

This variable represents the current movement type being executed (e.g., J, L, PB, PRO, etc.).

#### 71. SD_CURRENT_DELTA

This variable represents the magnitude of the difference between the predicted current and the actual current measured in each joint of the robot arm. (mA)

#### 72. SD_FORCE_TRAVEL_DIS

When using the force control feature, this variable indicates the magnitude of the trajectory deviation caused by the force control algorithm. (mm)

#### 73. SD_EMG_BUTTON_STATE

This variable shows the state of the emergency stop button.

#### 74. SD_IS_IN_MAIN

This variable indicates whether the program is running the main program (= 1) or a subprogram (= 0).

#### 75. SD_IS_HOME

This variable indicates whether the robot is in the home (BEGIN) position.

#### 76. SD_IS_BEGIN

This variable also indicates whether the robot is in the home (BEGIN) position.

#### 77. SD_ID_NUMBER

This variable represents the system ID, which can be changed in the setup.

#### 78. SD_TF_LRF_DISTANCE

This variable represents the distance measured by the TF laser range sensor. (mm)

#### 79. SD_BIT\_\#\_\#

SD_BIT_0_3<br>
SD_BIT_4_7<br>
SD_BIT_8_11<br>
SD_BIT_12_15<br>

This variable represents a number created by combining four digital input ports of the controller box in a binary combination.

- Combining four digital outputs: Can represent values from 0 to 15 (2⁴-1).

#### 80. SD_BIT_0_7

This variable represents a number created by combining eight digital input ports (ports 0 to 7) of the controller box in a binary combination.

- Combining eight digital outputs: Can represent values from 0 to 255 (2⁸-1).

#### 81. SD_BIT_0_11

This variable represents a number created by combining twelve digital input ports (ports 0 to 11) of the controller box in a binary combination.

- Combining twelve digital outputs: Can represent values from 0 to 4,095 (2¹²-1).

#### 82. SD_BIT_0_15

This variable represents a number created by combining sixteen digital input ports (ports 0 to 15) of the controller box in a binary combination.

- Combining sixteen digital outputs: Can represent values from 0 to 65,535 (2¹⁶-1).

#### 83. OR_2FG7_STATE

This variable represents the state of the OnRobot 2FG7 model gripper.

- 1: Busy
- 2: Grip detected
- 3: Error (Not Calibrated)
- 4: Error (Linear sensor)

#### 84. OR_2FG7_POS_EXT

This variable represents the current position of the gripper when gripping externally in the OnRobot 2FG7 model.

#### 85. OR_2FG7_POS_INT

This variable represents the current position of the gripper when gripping internally in the OnRobot 2FG7 model.

#### 86. OR_2FG7_MIN_EXT

This variable represents the minimum position value of the gripper when gripping externally in the OnRobot 2FG7 model.

#### 87. OR_2FG7_MAX_EXT

This variable represents the maximum position value of the gripper when gripping externally in the OnRobot 2FG7 model.

#### 88. OR_2FG7_MIN_INT

This variable represents the minimum position value of the gripper when gripping internally in the OnRobot 2FG7 model.

#### 89. OR_2FG7_MAX_INT

This variable represents the maximum position value of the gripper when gripping internally in the OnRobot 2FG7 model.

#### 90. OR_RG_BUSY

This variable represents the operational state of the OnRobot RG model gripper.

- 0: The gripper is not active and can receive the next command.
- 1: The gripper is currently active and cannot receive the next command.

#### 91. OR_RG_GRIP

This variable indicates whether the gripper is currently gripping a product.

- 0: Grip undetected.
- 1: Grip detected.

#### 92. OR_RG_S1_PUSHED

This variable shows whether safety switch 1 on the OnRobot RG model is pressed.

- 0: safety switch 1 is not pushed.
- 1: safety switch 1 is pushed.

#### 93. OR_RG_S1_TRIGGERED

This variable indicates whether safety circuit 1 on the OnRobot RG model is activated.

- 0: safety circuit 1 is not activated.
- 1: safety circuit 1 is activated.

#### 94. OR_RG_S2_PUSHED

This variable shows whether safety switch 2 on the OnRobot RG model is pressed.

- 0: safety switch 2 is not pushed.
- 1: safety switch 2 is pushed.

#### 95. OR_RG_S2_TRIGGERED

This variable indicates whether safety circuit 2 on the OnRobot RG model is activated.

- 0: safety circuit 2 is not activated.
- 1: safety circuit 2 is activated.

#### 96. OR_RG_ERROR

This variable shows whether any safety-related error has occurred in the OnRobot RG model.

#### 97. OR_RG_WIDTH

This variable represents the distance between the gripper fingers in the OnRobot RG model.

#### 98. OR_3FG_MIN_D

This variable indicates the minimum achievable diameter based on the position, length, and diameter of the fingers in the OnRobot 3FG model.

#### 99. OR_3FG_MAX_D

This variable indicates the maximum achievable diameter based on the position, length, and diameter of the fingers in the OnRobot 3FG model.

#### 100. OR_3FG_RAW_D

This variable represents the diameter size of the fingers in the OnRobot 3FG model.

#### 101. OR_3FG_REAL_D

This variable represents the diameter size, taking into account the offset of the finger thickness in the OnRobot 3FG model.

#### 102. OR_3FG_FORCE

This variable shows the current force value being applied by the OnRobot 3FG model.

#### 103. OR_3FG_BUSY

This variable indicates whether the OnRobot 3FG model gripper is currently operating.

#### 104. OR_3FG_GRIP

This variable indicates whether the gripper in the OnRobot 3FG model has gripped an object.

#### 105. OR_3FG_FORCE_GRIP

This variable shows whether the OnRobot 3FG model gripper is gripping an object using force control.

#### 106. OR_3FG_CALIB

This variable shows the calibration status of the OnRobot 3FG model gripper.

#### 107. OR_SD_STATUS

This variable indicates the status of the OnRobot Sander model.

#### 108. OR_SD_WARNING

This variable represents the state of the warning flag for the OnRobot Sander model.<br>
It is composed of bit combinations, with the numbers representing the bit combination offsets.

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

This variable shows the current rotational speed in RPM (Revolutions Per Minute) for the OnRobot Sander model.

#### 110. OR_SD_RPM_DEV

This variable indicates the amount of RPM deviation during operation in the OnRobot Sander model.

#### 111. OR_SD_VIBRATION

This variable measures the vibration magnitude in G-force units for the OnRobot Sander model.

#### 112. OR_SD_ERROR

This variable represents the error that caused the motor to stop in the OnRobot Sander model.<br>
It is reset by a new start command and is composed of bit combinations, with the numbers representing bit combination offsets.

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

This variable shows the target RPM value for the OnRobot Sander model.

#### 114. OR_SD_MOTOR_STOPPED

This flag indicates whether the motor in the OnRobot Sander model has stopped.

#### 115. OR_SD_MOTOR_RUNNING

This flag indicates whether the motor in the OnRobot Sander model is currently running.

#### 116. OR_SD_RAMP_UP

This variable indicates whether the motor is accelerating for the OnRobot Sander model.

#### 117. OR_SD_RAMP_DW

This variable indicates whether the motor is decelerating for the OnRobot Sander model.

#### 118. OR_SD_BUTTON

This variable shows whether the button on the side of the Sander is pressed for the OnRobot Sander model.

#### 119. OR_VG_A

This variable represents the pressure value of channel A for the OnRobot VG10/VGC10 model.

#### 120. OR_VG_B

This variable represents the pressure value of channel B for the OnRobot VG10/VGC10 model.

#### 121. OR_VGP20_A

This variable represents the pressure value of channel A for the OnRobot VGP20 model.

#### 122. OR_VGP20_B

This variable represents the pressure value of channel B for the OnRobot VGP20 model.

#### 123. OR_VGP20_C

This variable represents the pressure value of channel C for the OnRobot VGP20 model.

#### 124. OR_VGP20_D

This variable represents the pressure value of channel D for the OnRobot VGP20 model.

#### 125. OR_VGP20_A_GRIP

This variable indicates the grip state of channel A for the OnRobot VGP20 model.

#### 126. OR_VGP20_A_RELEASE

This variable indicates the release state of channel A for the OnRobot VGP20 model.

#### 127. OR_VGP20_B_GRIP

This variable indicates the grip state of channel B for the OnRobot VGP20 model.

#### 128. OR_VGP20_B_RELEASE

This variable indicates the release state of channel B for the OnRobot VGP20 model.

#### 129. OR_VGP20_C_GRIP

This variable indicates the grip state of channel C for the OnRobot VGP20 model.

#### 130. OR_VGP20_C_RELEASE

This variable indicates the release state of channel C for the OnRobot VGP20 model.

#### 131. OR_VGP20_D_GRIP

This variable indicates the grip state of channel D for the OnRobot VGP20 model.

#### 132. OR_VGP20_D_RELEASE

This variable indicates the release state of channel D for the OnRobot VGP20 model.

#### 133. OR_VGP20_BUSY

This variable indicates whether the gripper is in operation for the OnRobot VGP20 model.

#### 134. OR_VGP20_ERROR

This variable represents the error state of the gripper for the OnRobot VGP20 model.

#### 135. OR_MG10_STATUS

This variable indicates the current status of the gripper for the OnRobot MG10 model. It is a bit combination, and the numbers below refer to the bit combination offsets.

- 0: Part gripped
- 1: Near part
- 2: Busy
- 3: Magnet strength not reached
- 4: Smart grip available
- 5: Smart grip failed
- 6: Part dropped
- 7: Internal temperature warning

#### 136. OR_MG10_ERROR

This variable represents the current error state of the gripper for the OnRobot MG10 model. It is a bit combination, and the numbers below refer to the bit combination offsets.

- 0: Over-heating
- 1: Sensor target mismatch
- 2: No motor calibration
- 3: No magnet calibration
- 4: No hall calibration
- 5: Over current
- 6: Position error

#### 137. OR_MG10_STRENGTH

This variable represents the magnet strength of the current gripper for the OnRobot MG10 model, expressed as a percentage.

#### 138. OR_SG_WIDTH

This variable represents the width of the current gripper for the OnRobot Soft-gripper model.

#### 139. OR_SG_MAX_WIDTH

This variable represents the maximum width of the current gripper for the OnRobot Soft-gripper model.

#### 140. OR_SG_MIN_WIDTH

This variable represents the minimum width of the current gripper for the OnRobot Soft-gripper model.

#### 141. OR_SG_STATUS

This variable indicates the current status of the gripper for the OnRobot MG10 model. It is a bit combination variable.

- 0: Busy
- 1: Initialized
- 4-6: Error

#### 142. OR_EYE_POS

This variable stores the object position value received from the OnRobot Eye vision camera.<br>
(Type: Point)

#### 143. OR_EYE_ERROR

This variable represents the error state of the vision system for the OnRobot Eye model.

#### 144. OR_EYE_COUNT

This variable indicates the number of objects found by the vision system for the OnRobot Eye model.

#### 145. OR_EYE_INSPECT_RESULT

This variable represents the inspection results of the vision system for the OnRobot Eye model.

#### 146. OR_EYE_INSPECT_MATCH

This variable indicates the percentage match between the object found by the vision system and the actual object data registered in the vision system for the OnRobot Eye model.

#### 147. OR_EYE_X

This variable represents the X-axis data value of the object found by the vision system for the OnRobot Eye model.<br>
(Unit: mm)

#### 148. OR_EYE_Y

This variable represents the Y-axis data value of the object found by the vision system for the OnRobot Eye model.<br>
(Unit: mm)

#### 149. OR_EYE_Z

This variable represents the Z-axis data value of the object found by the vision system for the OnRobot Eye model.<br>
(Unit: mm)

#### 150. OR_EYE_RX

This variable represents the RX-axis data value of the object found by the vision system for the OnRobot Eye model.<br>
(Unit: degree)

#### 151. OR_EYE_RY

This variable represents the RY-axis data value of the object found by the vision system for the OnRobot Eye model.<br>
(Unit: degree)

#### 152. OR_EYE_RZ

This variable represents the RZ-axis data value of the object found by the vision system for the OnRobot Eye model.<br>
(Unit: degree)

#### 153. JRT_ENCODER

This variable represents the encoder value of the current gripper for all models of JuGwang Robotec, expressed in pulse units.

#### 154. JRT_JEGB

This variable represents the position value of the current gripper for the JuGwang Robotec JEGB model, expressed as a percentage.

#### 155. JRT_JEGG

This variable represents the position value of the current gripper for the JuGwang Robotec JEGG model, expressed as a percentage.

#### 156. PICKIT_POS

This variable stores the object position value received from the PICK-IT vision camera.<br>
(Type: Point)

#### 157. RC_PICKIT_NO_COMMAND

This variable sends the position value of the current robot flange to the PICK-IT vision system.<br>
It is used to check the connection status of the robot and update the 3D view on the web interface.

#### 158. RC_PICKIT_CHECK_MODE

This variable indicates the mode of the vision system for the PICK-IT command Robot>PickIt.

#### 159. RC_PICKIT_CAPTURE_IMAGE

Using this variable will capture the current camera image for the PICK-IT command Robot>PickIt.

#### 160. RC_PICKIT_PROCESS_IMAGE

This variable triggers object detection using the camera image captured via **RC_PICKIT_CAPTURE_IMAGE** for the PICK-IT command Robot>PickIt.

#### 161. RC_PICKIT_LOOK_FOR_OBJECTS

This command requests the current screen to look for objects in the PICK-IT command Robot>PickIt.

#### 162. RC_PICKIT_LOOK_FOR_OBJECTS_WITH_RETRIES

This command requests the current screen to look for objects in the PICK-IT command Robot>PickIt.<br>
It is similar to the RC_PICKIT_LOOK_FOR_OBJECTS command but retries after a certain time if no object is found.

#### 163. RC_PICKIT_NEXT_OBJECT

This command requests to return the next detected object to the object table in the PICK-IT command Robot>PickIt.<br>
It is used when multiple objects are detected during a single object search execution.

#### 164. RC_PICKIT_GET_PICK_POINT_DATA

This command requests the pick point ID and offset values of the last requested object in the PICK-IT command Robot>PickIt.<br>
Through this command, the robot can obtain flexible and diverse pick points.

#### 165. RC_PICKIT_CONFIGURE

This command is used to load specific setup information and product configuration information in the PICK-IT command Robot>PickIt.

#### 166. RC_PICKIT_SET_CYLINDER_DIM

This command is used to request cylinder dimensions when using the teach cylinder model in the PICK-IT command Robot>PickIt.

#### 167. RC_SAVE_ACTIVE_PRODUCT

This command is used to save the currently loaded product data in the PICK-IT command Robot>PickIt.

#### 168. RC_SAVE_ACTIVE_SETUP

This command is used to save the currently loaded setup data in the PICK-IT command Robot>PickIt.

#### 169. RC_SAVE_BUILD_BACKGROUND

This command requests to capture the current scene as a background for background removal in the PICK-IT command Robot>PickIt.

#### 170. RC_PICKIT_FIND_CALIB_PLATE

This is a trigger command to localize the calibration plate in the PICK-IT command Robot>PickIt.

#### 171. RC_PICKIT_SAVE_SCENE

This command is used to save the current scene in the PICK-IT command Robot>PickIt.

#### 172. PICKIT_STATUS

This variable indicates the status of the vision system for PICK-IT.

#### 173. PICKIT_VERSION

This variable indicates the version of the PICK-IT protocol being used. (=11)

#### 174. PICKIT_ROBOTTYPE

This variable indicates the type of robot connected to the vision system for PICK-IT. (=Type 5)

#### 175. PICKIT_ROBOT_MODE

This variable indicates that the vision system is in robot mode for the PICK-IT command return value.<br>
(Constant value: 0)

#### 176. PICKIT_IDLE_MODE

This variable indicates that the vision system is in idle mode for the PICK-IT return value.<br>
(Constant value: 1)

#### 177. PICKIT_OBJECT_FOUND

This variable indicates that the vision system has detected one or more objects for the PICK-IT return value.<br>
(Constant value: 20)

#### 178. PICKIT_NO_OBJECTS

This variable indicates that the vision system has not detected any objects for the PICK-IT return value.<br>
(Constant value: 21)

#### 179. PICKIT_IMAGE_CAPTURED

This variable indicates that the vision system has captured a camera image for the PICK-IT return value.<br>
(Constant value: 26)

#### 180. PICKIT_NO_IMAGE_CAPTURED

This variable indicates that the vision system has not captured any camera image for the PICK-IT return value.<br>
(Constant value: 22)

#### 181. PICKIT_EMPTY_ROI

This variable indicates that the vision system has detected an empty ROI (Region of Interest) for the PICK-IT return value.<br>
(Constant value: 23)

#### 182. PICKIT_GET_PICK_POINT_DATA_OK

This variable indicates that the vision system has successfully retrieved pick point data for the PICK-IT return value.<br>
(Constant value: 70)

#### 183. PICKIT_GET_PICK_POINT_DATA_FAILED

This variable indicates that the vision system has failed to retrieve the selected pick point data for the PICK-IT return value.<br>
(Constant value: 71)

#### 184. PICKIT_CONFIG_OK

This variable indicates that the specified configuration has been successfully loaded for the PICK-IT return value.<br>
(Constant value: 40)

#### 185. PICKIT_CONFIG_FAILED

This variable indicates that the specified configuration could not be successfully loaded for the PICK-IT return value.<br>
(Constant value: 41)

#### 186. PICKIT_BUILD_BKG_CLOUD_OK

This variable indicates that the background scene has been successfully constructed for the PICK-IT return value.<br>
(Constant value: 60)

#### 187. PICKIT_BUILD_BKG_CLOUD_FAILED

This variable indicates that the background scene could not be successfully constructed for the PICK-IT return value.<br>
(Constant value: 61)

#### 188. PICKIT_FIND_CALIB_PLATE_OK

This variable indicates that the calibration plate has been successfully localized for the PICK-IT return value.<br>
(Constant value: 10)

#### 189. PICKIT_FIND_CALIB_PLATE_FAILED

This variable indicates that the calibration plate could not be successfully localized for the PICK-IT return value.<br>
(Constant value: 11)

#### 190. PICKIT_SAVE_SNAPSHOT_OK

This variable indicates that the snapshot has been successfully saved for the PICK-IT return value.<br>
(Constant value: 50)

#### 191. PICKIT_SAVE_SNAPSHOT_FAILED

This variable indicates that the snapshot could not be successfully saved for the PICK-IT return value.<br>
(Constant value: 51)

#### 192. PICKIT_UNKNOWN_COMMAND

This variable means that the robot has sent an incorrect command to the vision system for the PICK-IT return value.<br>
(Constant value: -99)

#### 193. PICKIT_TYPE_SQUARE

This variable indicates the square information of the detected object for the PICK-IT return value.<br>
(Constant value: 21)

#### 194. PICKIT_TYPE_RECTANGLE

This variable indicates the rectangle information of the detected object for the PICK-IT return value.<br>
(Constant value: 22)

#### 195. PICKIT_TYPE_CIRCLE

This variable indicates the circle information of the detected object for the PICK-IT return value.<br>
(Constant value: 23)

#### 196. PICKIT_TYPE_ELLIPSE

This variable indicates the ellipse information of the detected object for the PICK-IT return value.<br>
(Constant value: 24)

#### 197. PICKIT_TYPE_CYLINDER

This variable indicates the cylinder information of the detected object for the PICK-IT return value.<br>
(Constant value: 32)

#### 198. PICKIT_TYPE_SPHERE

This variable indicates the sphere information of the detected object for the PICK-IT return value.<br>
(Constant value: 33)

#### 199. PICKIT_TYPE_POINTCLOUD

This variable indicates the point cloud information of the detected object for the PICK-IT return value.<br>
(Constant value: 35)

#### 200. PICKIT_TYPE_BLOB

This variable indicates the blob information of the detected object for the PICK-IT return value.<br>
(Constant value: 50)

#### 201. PICKIT_X

This variable indicates the X-axis value of the detected object for the PICK-IT return value.

#### 202. PICKIT_Y

This variable indicates the Y-axis value of the detected object for the PICK-IT return value.

#### 203. PICKIT_Z

This variable indicates the Z-axis value of the detected object for the PICK-IT return value.

#### 204. PICKIT_RX

This variable indicates the RX-axis value of the detected object for the PICK-IT return value.

#### 205. PICKIT_RY

This variable indicates the RY-axis value of the detected object for the PICK-IT return value.

#### 206. PICKIT_RZ

This variable indicates the RZ-axis value of the detected object for the PICK-IT return value.

#### 207. PICKIT_P#

PICKIT_P0<br>
PICKIT_P1<br>
PICKIT_P2<br>
PICKIT_P3<br>
PICKIT_P4<br>
PICKIT_P5<br>

This variable represents the integer data of Payload # (0 to 5) received from the PickIt system for the PICK-IT return value.

#### 208. PICKIT_P#F

PICKIT_P0F<br>
PICKIT_P1F<br>
PICKIT_P2F<br>
PICKIT_P3F<br>
PICKIT_P4F<br>
PICKIT_P5F<br>

This variable represents the float data of Payload # (0 to 5) received from the PickIt system for the PICK-IT return value.

#### 209. PICKIT_M0

This variable represents the metadata 0 received from the PickIt system for the PICK-IT return value.

#### 210. PICKIT_M1

This variable represents the metadata 1 received from the PickIt system for the PICK-IT return value.

#### 211. ICE_INFO_CONNECTED

This variable is used to check whether communication with the ice maker is active.

#### 212. ICE_INFO_REQUESTING

This variable is for internal developer use in RB.

#### 213. ICE_INFO_USING

This variable is for internal developer use in RB.

#### 214. ICE_INFO_VECSIZE

This variable is for internal developer use in RB.

#### 215. ICE_INFO_MODE_COMM

This variable is used to check the communication mode with the ice maker.

- 0: Normal mode
- 1: Communication mode

#### 216. ICE_INFO_MODE_CUP

This variable is used to respond to cup dislodgement.

- 0: Prevent ice dispensing when cup is dislodged
- 1: Ignore cup dislodgement

#### 217. ICE_INFO_TIME_ICE

This variable indicates the last ice dispensing time.

#### 218. ICE_INFO_TIME_WATER

This variable indicates the last water dispensing time.

#### 219. ICE_INFO_AMBI_LOW

This variable is used to check the lower limit of ambient temperature.

#### 220. ICE_INFO_AMBI_HIGH

This variable is used to check the upper limit of ambient temperature.

#### 221. ICE_INFO_TMEP_AMBI

This variable is used to check the current ambient temperature.

#### 222. ICE_INFO_TMEP_EVAPO

This variable is used to check the current evaporator temperature.

#### 223. ICE_INFO_TMEP_CONDEN

This variable is used to check the current condenser temperature.

#### 224. ICE_STATE_LAST_ICE_NO

This variable indicates that no ice was detected during the last dispensing.

#### 225. ICE_STATE_LAST_ICE_YES

This variable indicates that ice was detected during the last dispensing.

#### 226. ICE_STATE_COMP_WORK

This variable indicates that the compressor is operating normally.

#### 227. ICE_STATE_MOTOR_WORK

This variable indicates that the gear motor is operating normally.

#### 228. ICE_STATE_OUT_SOL

This variable indicates that the dispensing solenoid is detected normally.

#### 229. ICE_STATE_CUP_LEVEL

This variable indicates that the cup level is detected normally.

#### 230. ICE_STATE_COMM_MODE

This variable indicates that the system is in communication mode.

#### 231. ICE_STATE_FULL_ICE

This variable indicates that the ice bin is full.

#### 232. ICE_STATE_ERR_1~4

This variable is for internal developer use in RB.

#### 233. ICE_STATE_ERR_CODE

This variable represents the error code, where 0 indicates normal operation.

#### 234. ICE_STATE_RD

This variable indicates the state of the ice maker.

- 0: Dispensing complete & timeout
- 1: Waiting for dispensing command

#### 235. SETECH_RDY

This variable indicates the readiness state of the nut runner.

#### 236. SETECH_ALM

This variable indicates the presence of an alarm in the nut runner.

#### 237. SETECH_BUSY

This variable indicates that the nut runner is currently fastening.

#### 238. SETECH_COMP

This variable indicates that fastening by the nut runner has been completed.

#### 239. SETECH_OK

This variable indicates that the fastening has been completed successfully.

#### 240. SETECH_NG_TRQH

This variable indicates a NG (No Good) condition if the fastening torque exceeds the upper limit after completion.

#### 241. SETECH_NG_TRQL

This variable indicates a NG condition if the fastening torque is below the lower limit after completion.

#### 242. SETECH_NG_ANGH

This variable indicates a NG condition if the angle judgment result does not meet the upper range requirement after completion.

#### 243. SETECH_NG_ANGL

This variable indicates a NG condition if the angle judgment result does not meet the lower range requirement after completion.

#### 244. SETECH_NG_TIME

This variable indicates a NG condition if the fastening time does not meet the upper or lower range requirement after completion.

#### 245. SETECH_NG_MONI

This variable indicates a NG condition if the monitored torque judgment result does not meet the upper range requirement after completion.

#### 246. SETECH_NG_CH1

This variable indicates a NG condition when the channel selection input signal matches the current state.

#### 247. SETECH_NG_CH2

This variable indicates a NG condition when the channel selection input signal matches the current state.

#### 248. SETECH_NG_CH4

This variable indicates a NG condition when the channel selection input signal matches the current state.

#### 249. SETECH_NG_CH8

This variable indicates a NG condition when the channel selection input signal matches the current state.

#### 250. SETECH_NG_CH16

This variable indicates a NG condition when the channel selection input signal matches the current state.

#### 251. SD_NO_ARC_STATE

This variable indicates whether the NO_ARC function is enabled during welding operations.

#### 252. SD_DWELD_ARC

This variable indicates the state of arc generation in the digital welder.

#### 253. SD_DWELD_TOUCH

This variable indicates the touch state of the digital welder.

#### 254. SD_DWELD_A

This variable indicates the current value of the digital welder.

#### 255. SD_DWELD_V

This variable indicates the voltage value of the digital welder.

#### 256. SD_DWELD_F

This variable indicates the feeder speed value of the digital welder.

#### 257. SD_DWELD_SET_A

This variable indicates the set current value of the digital welder.

#### 258. SD_CONV_POS_TICK

This variable indicates the position tick of the conveyor.

#### 259. SD_CONV_VEL_TICK

This variable indicates the speed tick of the conveyor.
