---
layout: doc
outline: deep
---

# Control Box Digital I/O Dedicated Function v221004

### 1. Control Box Digital Input Function Definition

<br>

#### 1.1 R=Start Program (Once)

Idle: Run the program currently loaded once.<br>
Pause: Restart the program.<br>
(Rising Edge)

#### 1.2 R=Stop Program

Stops actions and running programs.<br>
(Rising Edge)

#### 1.3 R=Pause Program

Pause the running program.<br>
(Rising Edge)

#### 1.4 R=FreeDriveOn / F=Off

R=Use direct teaching mode.<br>
F=Don’t use direct teaching mode.

#### 1.5 R=Speed 100% / F=0%

R=Set the speed bar to 100%.<br>
F=Set the speed bar to 0%.

#### 1.6 R=Real mode / F=simulation

R=Change to real robot mode.<br>
F=Change to simulation mode.

#### 1.7 R=Initialize Robot

Activate robot arm (Servo on) and switch to real robot mode.<br>
(Rising Edge)

#### 1.8 H=Temporary Collision off

Turns off external crash detection.<br>
(High State)

#### 1.9 H=Auto-Initialize Key

Key port for using the 'Automatic Activation with Key' setting.<br>
(High State)

#### 1.10 R=Resume from Out Coll. Stop

Release the stop due to external collision detection.<br>
(Rising Edge)

#### 1.11 R=Point Add

Add the current position-information of the robot arm as a point under the Move function.<br>
(Rising Edge)

#### 1.12 R=Start Program (Repeat)

Idle: Repeat starting the program currently loaded.<br>
Pause: Restart the program.<br>
(Rising Edge)

#### 1.13 R=Approach to Begin

Move to the starting position (Home-pos) defined in the program currently loaded.<br>
(Rising Edge)

#### 1.14 R=Program Resume

Restart the paused program.<br>
(Rising Edge)

#### 1.15 H=Quick Freedrive Change

It's a function to grab the Servo-lock when exit the direct teaching mode.<br>
(High State)

#### 1.16 R=Pause / F=Resume Program

R=Pause the program.<br>
F=Restart the program.

#### 1.17 F=Pause / R=Resume Program

F=Pause the program.<br>
R=Restart the program.

#### 1.18 H=Speed 100% / F=0%

H=Set the speed bar to 100%.<br>
F=Set the speed bar to 0%.

#### 1.19 R=Load Default Program

Loads a program set as the default program.<br>
(Rising Edge)

#### 1.20 F=Robot Arm Power Down

Turn off the DC power applied to the robot's arm.<br>
(Falling Edge)

#### 1.21 R=Touch Sensing

When using the touch sensing function, this is the port that connects the touch sensing signal output-line from the welding machine.<br>
(Rising Edge)

#### 1.22 F=Touch Sensing

When using the touch sensing function, this is the port that connects the touch sensing signal output-line from the welding machine.<br>
(Falling Edge)

#### 1.23 H=No Arc

When a signal is on (if high-state), activate the No-Arc function.<br>
(High State)

#### 1.24 H=Program Start Block

The signal cannot start the program while it is in the high-state.<br>
(High State)

#### 1.25 R=Ext.Joint 0 Plus / F=stop

R=Additional axis 0 moves in the (+) direction / F=stop

#### 1.26 R=Ext.Joint 0 Minus / F=stop

R=Additional axis 0 moves in the (-) direction / F=stop

#### 1.27 R=Ext.Joint 1 Plus / F=stop

R=Additional axis 1 moves in the (+) direction / F=stop

#### 1.28 R=Ext.Joint 1 Minus / F=stop

R=Additional axis 1 moves in the (-) direction / F=stop

#### 1.29 R=Ext.Joint 2 Plus / F=stop

R=Additional axis 2 moves in the (+) direction / F=stop

#### 1.30 R=Ext.Joint 2 Minus / F=stop

R=Additional axis 2 moves in the (-) direction / F=stop

#### 1.31 H=Safety Speed

Switch the robot arm's motion speed to the safe speed range.<br>
(High State)

#### 1.32 F=User Coord 0 ← TCP frame

Change the setting value of user coordinate 0 to the position/rotation of the TCP coordinate system of the current robot arm.<br>
(Falling Edge)

#### 1.33 F=User Coord 1 ← TCP frame

Change the setting value of user coordinate 1 to the position/rotation of the TCP coordinate system of the current robot arm.<br>
(Falling Edge)

#### 1.34 F=User Coord 2 ← TCP frame

Change the setting value of user coordinate 2 to the position/rotation of the TCP coordinate system of the current robot arm.<br>
(Falling Edge)

#### 1.35 F=Load & Run Program Table

Loads and plays the program set at the number of the corresponding input port in the Program Table.<br>
(Falling Edge)

#### 1.36 R=Start Prog. (Once) / F=Stop Prog.

R=Run the loaded program once / F=Stop the program

#### 1.37 R=Start Prog. (Repeat) / F=Stop Prog.

R=Run the loaded program repeatedly / F=Stop the program

#### 1.38 F=Change Global Pinpoint #’s Pos

Save the global pin-point as the current point value of the robot arm.<br>
(Falling Edge)

#### 1.39 R=EXT.Joint 0 Slow Plus / F=stop

R=Additional axis 0 slowly moves in the (+) direction / F=stop

#### 1.40 R=EXT.Joint 0 Slow Minus / F=stop

R=Additional axis 0 slowly moves in the (-) direction / F=stop

#### 1.41 R=EXT.Joint 1 Slow Plus / F=stop

R=Additional axis 1 slowly moves in the (+) direction / F=stop

#### 1.42 R=EXT.Joint 1 Slow Minus / F=stop

R=Additional axis 1 slowly moves in the (-) direction / F=stop

#### 1.43 R=EXT.Joint 2 Slow Plus / F=stop

R=Additional axis 2 slowly moves in the (+) direction / F=stop

#### 1.44 R=EXT.Joint 2 Slow Minus / F=stop

R=Additional axis 2 slowly moves in the (-) direction / F=stop

#### 1.45 R=Reset SOS

Initialize (reset) the SOS state.<br>
(Rising Edge)

#### 1.46 F=Reset SOS

Initialize (reset) the SOS state.<br>
(Falling Edge)

#### 1.47 R=Delete Point

Deletes the taught point.<br>
(Rising Edge)

#### 1.48 R=Add ARC-On

Adds the Arc-On function.

#### 1.49 R=Add ARC-Off

Adds the Arc-Off function.

#### 1.50 H=Speed 75% / L=0%

H = Speed 75% / L = Speed 0%

#### 1.51 H=Speed 50% / L=0%

H = Speed 50% / L = Speed 0%

#### 1.52 H=Speed 25% / L=0%

H = Speed 25% / L = Speed 0%

#### 1.53 H=Speed 10% / L=0%

H = Speed 10% / L = Speed 0%

#### 1.54 F=Pause Program

Pauses the program.<br>
(Falling Edge)

#### 1.55 H=Block Freedrive Button

Blocks direct teaching when High.

#### 1.56 L=Block Freedrive Button

Blocks direct teaching when Low.

#### 1.57 Duplex for Safety

Implements a redundant input function. The input is recognized only when both input signals are High.

#### 1.58 F=Stop Program

Stops the program.<br>
(Falling Edge)

#### 1.59 F=Reset SOS / EMS State

Resets the SOS alarm. <br> The robot arm power is cut off, the same as when the emergency stop switch is activated.

#### 1.60 F=Reset Modbus Server

Resets the Modbus server.

#### 1.61 R=Run User Script 0

Executes User Script 0.

#### 1.62 R=Run User Script 1

Executes User Script 1.

#### 1.63 R=Run User Script 2

Executes User Script 2.

#### 1.64 R=Run User Script 3

Executes User Script 3.

#### 1.65 R=Run User Script 4

Executes User Script 4.

#### 1.66 R=Run User Script 5

Executes User Script 5.

#### 1.67 R=Run User Script 6

Executes User Script 6.

#### 1.68 R=Run User Script 7

Executes User Script 7.

#### 1.69 R=Run User Script 8

Executes User Script 8.

#### 1.70 R=Run User Script 9

Executes User Script 9.

#### 1.71 H=Ignore Self Collision

Ignores self-collision when High.

#### 1.72 H=Conditional Script Exe Key

Executes the function assigned to the User Script when High.

#### 1.73 R=Speed 50% / F=100%

R = Speed 50% / F = Speed 100%

#### 1.74 R=Speed 25% / F=100%

R = Speed 25% / F = Speed 100%

#### 1.75 H=Speed 100% / L=75%

H = Speed 100% / L = Speed 75%

#### 1.76 H=Speed 100% / L=50%

H = Speed 100% / L = Speed 50%

#### 1.77 H=Speed 100% / L=25%

H = Speed 100% / L = Speed 25%

#### 1.78 R=Reset UI Connection

Disconnects the RB UI connection between the control box and the currently connected tablet.

#### 1.79 H=Block SSS Function

Prevents the alarm generated when the SSS key is released by setting the SSS key to the shorted state.

#### 1.80 H=Auto SSS Resume Key

Restarts the function that was paused when the SSS key was released.<br>
(In this case, the SSS must be shorted again.)

#### 1.81 R=Robot Arm PowerDown

Turns off the robot power.

#### 1.82 H=Block D.In Special Functions

Disables Digital Input special functions on Digital ports with lower numbers than the assigned port when High.<br>
(If this function is assigned to DI 8, the functions assigned to DI 0 to 7 are disabled.)

#### 1.83 L=Block D.In Special Functions

Disables Digital Input special functions on Digital ports with lower numbers than the assigned port when Low.<br>
(If this function is assigned to DI 8, the functions assigned to DI 0 to 7 are disabled.)

#### 1.84 R=Global Speed Bar +

Increases the speed control bar by 10%.

#### 1.85 R=Global Speed Bar -

Decreases the speed control bar by 10%.

#### 1.86 R=Robot Jog Joint 0 +

Moves Joint 0 in the positive direction.

#### 1.87 R=Robot Jog Joint 0 -

Moves Joint 0 in the negative direction.

#### 1.88 R=Robot Jog Joint 1 +

Moves Joint 1 in the positive direction.

#### 1.89 R=Robot Jog Joint 1 -

Moves Joint 1 in the negative direction.

#### 1.90 R=Robot Jog Joint 2 +

Moves Joint 2 in the positive direction.

#### 1.91 R=Robot Jog Joint 2 -

Moves Joint 2 in the negative direction.

#### 1.92 R=Robot Jog Joint 3 +

Moves Joint 3 in the positive direction.

#### 1.93 R=Robot Jog Joint 3 -

Moves Joint 3 in the negative direction.

#### 1.94 R=Robot Jog Joint 4 +

Moves Joint 4 in the positive direction.

#### 1.95 R=Robot Jog Joint 4 -

Moves Joint 4 in the negative direction.

#### 1.96 R=Robot Jog Joint 5 +

Moves Joint 5 in the positive direction.

#### 1.97 R=Robot Jog Joint 5 -

Moves Joint 5 in the negative direction.

#### 1.98 R=Robot Jog Global X +

Moves in the positive X direction in the Global coordinate system.

#### 1.99 R=Robot Jog Global X -

Moves in the negative X direction in the Global coordinate system.

#### 1.100 R=Robot Jog Global Y +

Moves in the positive Y direction in the Global coordinate system.

#### 1.101 R=Robot Jog Global Y -

Moves in the negative Y direction in the Global coordinate system.

#### 1.102 R=Robot Jog Global Z +

Moves in the positive Z direction in the Global coordinate system.

#### 1.103 R=Robot Jog Global Z -

Moves in the negative Z direction in the Global coordinate system.

#### 1.104 R=Robot Jog Global RX +

Moves in the positive RX direction in the Global coordinate system.

#### 1.105 R=Robot Jog Global RX -

Moves in the negative RX direction in the Global coordinate system.

#### 1.106 R=Robot Jog Global RY +

Moves in the positive RY direction in the Global coordinate system.

#### 1.107 R=Robot Jog Global RY -

Moves in the negative RY direction in the Global coordinate system.

#### 1.108 R=Robot Jog Global RZ +

Moves in the positive RZ direction in the Global coordinate system.

#### 1.109 R=Robot Jog Global RZ -

Moves in the negative RZ direction in the Global coordinate system.

#### 1.110 R=Robot Jog Local X +

Moves in the positive X direction in the Local coordinate system.

#### 1.111 R=Robot Jog Local X -

Moves in the negative X direction in the Local coordinate system.

#### 1.112 R=Robot Jog Local Y +

Moves in the positive Y direction in the Local coordinate system.

#### 1.113 R=Robot Jog Local Y -

Moves in the negative Y direction in the Local coordinate system.

#### 1.114 R=Robot Jog Local Z +

Moves in the positive Z direction in the Local coordinate system.

#### 1.115 R=Robot Jog Local Z -

Moves in the negative Z direction in the Local coordinate system.

#### 1.116 R=Robot Jog Local RX +

Moves in the positive RX direction in the Local coordinate system.

#### 1.117 R=Robot Jog Local RX -

Moves in the negative RX direction in the Local coordinate system.

#### 1.118 R=Robot Jog Local RY +

Moves in the positive RY direction in the Local coordinate system.

#### 1.119 R=Robot Jog Local RY -

Moves in the negative RY direction in the Local coordinate system.

#### 1.120 R=Robot Jog Local RZ +

Moves in the positive RZ direction in the Local coordinate system.

#### 1.121 R=Robot Jog Local RZ -

Moves in the negative RZ direction in the Local coordinate system.

#### 1.122 R=Stop Program & Speed 0%

Stops the program and sets the speed to 0%.


### 2. Control Box Digital Output Function Definition

<br>

#### 2.1 H=Program Run / L=Idle

H=Running a program or executing an action command<br>
L=Idle Situation

#### 2.2 L=Program Run / H=Idle

L=Running a program or executing an action command<br>
H=Idle Situation

#### 2.3 H=Collision Detected

Indicates whether an out-collision or self-collision has been detected.<br>
(High State)

#### 2.4 H=Direct Teaching mode

Indicates that direct instruction mode is running.<br>
(High State)

#### 2.5 Bypass Din

Passes digital input signals of the same number as the selected port.

#### 2.6 Bypass Tool Din 0

Passes tool flange input port 0 signal.

#### 2.7 Bypass Tool Din 1

Passes tool flange input port 1 signal.

#### 2.8 H=Robot Ready / L=Not Init.

H=Robot Arm Activation Status<br>
L=Robot Arm Disabled

#### 2.9 H=Real mode / L=Simulation

H=Real Robot Mode Status<br>
L=Simulation Mode Status

#### 2.10 H=Robot Moving / L=Idle

H=When the robot's arm is moving<br>
L=When the robot arm is stationary

#### 2.11 L=Robot Moving / H=Idle

L=When the robot's arm is moving<br>
H=When the robot arm is stationary

#### 2.12 H=Robot Initialize Fail

When the robot fails during the activation process<br>
(High State)

#### 2.13 H=Robot Power On / L=Off

H=DC power applied to robot arm<br>
L=Power-off Status

#### 2.14 H=Coll. Detection On / L=Off

H=External collision detection mode on<br>
L=External collision detection mode off

#### 2.15 H=Pause state

Indicates that the program and operation are paused.<br>
(High State)

#### 2.16 H=Inbox 0 Trap Flag On

Indicates the status of the trap at in-box 0.<br>
(High State)

#### 2.17 H=Inbox 1 Trap Flag On

Indicates the status of the trap at in-box 1.<br>
(High State)

#### 2.18 PWM Module

Use the port as a PWM module.

#### 2.19 H=TPU is conndected

Indicates that the Teaching Pendant (Ui) is connected.<br>
(High State)

#### 2.20 H=Run in MAKE page

Indicates that the program is currently running in the MAKE window.<br>
(High State)

#### 2.21 H=Run in PLAY page

Indicates that the program is currently running in the PLAY window.<br>
(High State)

#### 2.22 H=Is Conveyor mode

Indicates that conveyor mode is in use.<br>
(High State)

#### 2.23 H=Control Box Boot

Indicates the controller box boot-complete status.<br>
(High State)

#### 2.24 H=Force Control mode

Indicates that force control mode is in use.<br>
(High State)

#### 2.25 PC Alive Pulse

A pulse signal (Alive signal) 0.5 Hz to confirm that the main PC in the control box is alive.

#### 2.26 H=Speed Bar 100%

Indicates that the speed control bar is 100%.<br>
(High State)

#### 2.27 H=Last Program Load Success

Indicates that the last run of 'Load a program' was successful.<br>
If there is a grammatical error in the written program, the load fails.<br>
(High State)

#### 2.28 H=TCP is in Inbox 0

Indicates that TCP has entered the in-box area 0.<br>
(High State)

#### 2.29 H=TCP is in Inbox 1

Indicates that TCP has entered the in-box area 1.<br>
(High State)

#### 2.30 H=Is Alarm

Indicates that the alarm function on the program has been turned on and program is paused.<br>
(High State)

#### 2.31 H=Robot posture is Begin posture

Indicates that the robot arm is currently in the start position (home position).<br>
The starting position (home position) is defined based on the currently loaded program.<br>
(High State)

#### 2.32 H=Emergency Teaching Enable

Indicates that emergency direct teaching mode is enabled.<br>
(High State)

#### 2.33 H=Prog. Run in Sub.P area

When the currently running program section is a sub-program (Sub.P ), High signal is output.<br>
(High State)

#### 2.34 H=Normal Program Run / L=Others

H=Normal program play status / L=Other cases<br>
(A case that is not a pause due to pause or external collision detection is defined as 'normal')<br>
(High State)

#### 2.35 L=Normal Program Run / H=Others

L=Normal program play status / H=Other cases<br>
(A case that is not a pause due to pause or external collision detection is defined as 'normal')<br>
(Low State)

#### 2.36 H=Hand Controller F1 pressed

Indicates that the F1 button on the hand controller is pressed.

#### 2.37 H=Hand Controller F2 pressed

Indicates that the F2 button on the hand controller is pressed.

#### 2.38 H=Hand Controller F3 pressed

Indicates that the F3 button on the hand controller is pressed.

#### 2.39 H=Hand Controller F4 pressed

Indicates that the F4 button on the hand controller is pressed.

#### 2.40 L=TCP is in Inbox 0

Indicates that TCP has entered the in-box area 0.<br>
(Low State)

#### 2.41 L=TCP is in Inbox 1

Indicates that TCP has entered the in-box area 1.<br>
(Low State)

#### 2.42 Sync with Dout 0~15

Indicates the signal in synchronization with the signal from 0 to 15.

#### 2.43 H=Is SOS State

Indicates the SOS status.<br>
(High state)

#### 2.44 L=Is SOS State

Indicates the SOS status.<br>
(Low state)

#### 2.45 H=EMG Button Released / L=Pressed

Outputs High when the emergency switch is released.

#### 2.46 L=EMG Button Released / H=Pressed

Outputs Low when the emergency switch is released.

#### 2.47 L=Robot Speed under 250mm/s

Outputs Low when the robot arm speed is below 250 mm/s.

#### 2.48 H=Robot Speed under 250mm/s

Outputs High when the robot arm speed is below 250 mm/s.

#### 2.49 H=Near Joint Limit

Outputs High when the robot arm reaches a singularity.

#### 2.50 H=Robot Arm under Activationg

Outputs High when the robot arm power is being supplied.

#### 2.51 H=Under program Loading

Indicates the program loading state.

#### 2.52 H=TeleOperation Master

Indicates TeleOperation Master state.

#### 2.53 H=TeleOperation Slave

Indicates TeleOperation Slave state.

#### 2.54 H=Servo Mode & Idle

Indicates Servo Mode (Idle state).

#### 2.55 H=Safety EMS2 Pressed

Outputs High when the EMS2 wiring is not in a shorted state.

#### 2.56 H=Safety PRS Pressed

Outputs High when the PRS wiring is not in a shorted state.

#### 2.57 H=Safety HSS Pressed

Outputs High when the HSS wiring is not in a shorted state.

#### 2.58 H=Safety SSS Pressed

Outputs High when the SSS wiring is not in a shorted state.
