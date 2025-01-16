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
