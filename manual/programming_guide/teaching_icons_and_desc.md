---
layout: doc
outline: deep
---

# Teaching Icons and Description

In the previous section 6.3, only the basic teaching functions (Move and Point functions) are described.<br>
This section is dedicated to the other teaching functions.

### 1. Circle Function

![missing](/manual/en/programming_guide/icons/3.png)

The Circle Function provides a movement method for circular motion.<br>
There is a type that draws an arc that passes three points by taking a starting point and two points, and there is a type that can draw a circle by setting the center point and the axis of rotation.

![missing](/manual/en/programming_guide/4.teaching_icons_detail/1.png)

1. Three Point Circle Type : A mode of drawing an arc with three points of information
2. Axis/Center Circle Type: Mode of drawing an arc/circle with rotation center and rotation axis information

Apart from the type of circle drawing, the original operation feature provides four rotation options as follows.

![missing](/manual/en/programming_guide/4.teaching_icons_detail/2.png)

- Constant: Maintains the initial TCP orientation (Rx, Ry, and Rz) of the TCP through the movements.
- Intended: The TCP rotation set by the user is followed.
<!-- - Radial: Rotates the TCP orientation with respect to the center point of rotation. -->
- Smooth: The turn changes immediately from the start point to the destination point. The rotation information of the waypoint is ignored.

#### 1.1 Three Point Circle Type

The Three Point Circle method draws an arc connecting three points: the starting point, the intermediate waypoint, and the arrival point.

![missing](/manual/en/programming_guide/4.teaching_icons_detail/3.png)
![missing](/manual/en/programming_guide/4.teaching_icons_detail/4.png)

① Circular Motion type selection (3-point setting type)<br>
② Point type (Absolute / Variable / Relative / UserCoord.)<br>
③ Orientation option (Constant / Radial / Intended / Smooth)<br>
④ Via Point information<br>
⑤ Destination Point information

#### 1.2 Axis/Center Circle Type

Set the center point for the circular motion, the axis of rotation, and the angle to rotate.

![missing](/manual/en/programming_guide/4.teaching_icons_detail/5.png)
![missing](/manual/en/programming_guide/4.teaching_icons_detail/6.png)

① Circular motion selection (axis / center setting type)<br>
② Point type (Absolute / Variable / Relative / UserCoord.)<br>
③ Orientation option (Constant / Radial / Intended / Smooth)<br>
④ Center point information<br>
⑤ Axis information<br>
⑥ Rotation angle information

### 2. PinPoint Function

![missing](/manual/en/programming_guide/icons/4.png)

![missing](/manual/en/programming_guide/4.teaching_icons_detail/7.png)

This is a special function for storing posture information only. This is a function to save information of a specific posture/position as a Point variable.<br>
If you create a PinPoint while teaching a specific posture and give it a PinPoint name, the posture information is converted into a Point variable.<br>
The information saved as Point variable can be used in other operation commands/settings.

### 3. PinJoint Function

![missing](/manual/en/programming_guide/icons/5.png)

![missing](/manual/en/programming_guide/4.teaching_icons_detail/8.png)

This is a function to save information of a specific posture/position as a Joint variable.<br>
If you create a PinJoint while teaching a specific posture and give it a PinJoint name, the posture information is converted into a Joint variable.<br>
The information saved as Joint variable can be used in other operation commands/settings.

### 4. Home Function

![missing](/manual/en/programming_guide/icons/6.png)

![missing](/manual/en/programming_guide/4.teaching_icons_detail/9.png)

Home function is a function to move the robot with Project Home Posture or Joint Zero Posture. At this time, user can select the movement type.<br>
When going to the Project Home Posture, user can select Project Home Posture of the main program and Project Home Posture of the subprogram.

The diagram below shows the difference between the case of going to the Project Home Posture of the main project and the case of going to the Project Home Posture of the subproject when using the home function within the subprogram.

![missing](/manual/en/programming_guide/4.teaching_icons_detail/10.png)

![missing](/manual/en/programming_guide/4.teaching_icons_detail/11.png)

### 5. Wait Function

![missing](/manual/en/programming_guide/icons/7.png)

Waits for either a specified condition or a specific amount of time.<br>
There are five modes:

1. Wait for a specified amount of time
2. Wait while a condition is true
3. Wait until the condition evaluates to true
4. Ability to wait while input conditions are true
5. The ability to end the wait if the input conditions are true

#### 5.1 Wait for a specified amount of time (Time Condition)

![missing](/manual/en/programming_guide/4.teaching_icons_detail/12.png)

- Ex) waits for specified amount of time (i.e. 3.0 seconds), then executes the next command<br>
  When using ‘sync speed control bar’ function in Sync, the waiting time is adjusted in inverse proportion to the speed control bar value.

#### 5.2 Wait while a condition is true (Holding Condition)

![missing](/manual/en/programming_guide/4.teaching_icons_detail/13.png)

- Ex) if the condition is true, the function waits indefinitely<br>
  The Time Out function is a function to prevent the condition from continuing to wait until it becomes False in a situation where it cannot be False.<br>
  Escape the wait after the written time has elapsed.

#### 5.3 Wait until the condition evaluates to true (Exit Condition)

![missing](/manual/en/programming_guide/4.teaching_icons_detail/14.png)

- Ex) If the condition is true, the process exits the wait function and then executes the next task.<br>
  The Time Out function is a function to prevent the condition from continuing to wait until it becomes True in a situation where it cannot be True.<br>
  Escape the wait after the written time has elapsed.

#### 5.4 Ability to wait while input conditions are true (Holding Condition(for Digital Input))

![missing](/manual/en/programming_guide/4.teaching_icons_detail/15.png)

- Ex) Continues waiting while the digital input conditions in the digital input window are true.<br>
  The Time Out function is used to prevent an indefinite wait if the input conditions can never become false.<br>
  Once the specified time has elapsed, the wait is exited.

  In the logical operator function, you can use both And and Or conditions.<br>
  (In the situation shown in the image above, since it is an And condition, the system waits only when digital input 0 is in a High state and digital input 1 is in a Low state.)

#### 5.5 The ability to end the wait if the input conditions are true (Exit Condition(for Digital Input))

![missing](/manual/en/programming_guide/4.teaching_icons_detail/16.png)

- Ex) Stops waiting and proceeds to the next command when the digital input conditions in the digital input window become true.<br>
  The Time Out function is used to prevent an indefinite wait if the condition can never become true.<br>
  Once the specified time has elapsed, the wait is exited.

  In the logical operator function, you can use both And and Or conditions.<br>
  (In the situation shown in the image above, since it is an And condition, the system stops waiting and executes the next command when digital input 0 is in a High state and digital input 1 is in a Low state.)

### 6. Folder Function

![missing](/manual/en/programming_guide/icons/8.png)

The Folder function helps to organize commands and manage them as modules.<br>
Each Folder can contain commands as sub-items, helping with the flow of the program. Each folder can then be renamed to help provide details to the flow of the program.<br>
By clicking the Folder icon, it will be added to the program tree. Commands can then be added, as shown below.

![missing](/manual/en/programming_guide/4.teaching_icons_detail/17.png)

To rename the folder, click on the new Folder in the program tree.

![missing](/manual/en/programming_guide/4.teaching_icons_detail/18.png)

The program tree will now show the folder with its new name.

![missing](/manual/en/programming_guide/4.teaching_icons_detail/19.png)

The Finish at function is available for use. It is not a mandatory input, and if you choose not to use the Finish at function, it will not affect the functionality of the program, similar to the Text function.<br>
It serves as a tool to help manage modules and groupings of functions during teaching.

### 7. Text Function

![missing](/manual/en/programming_guide/icons/9.png)

The Text Function allows users to make notes/comments in the program list tree.<br>
The text function is displayed as green text in the program tree and does not affect the functionality of the program.<br>
Click the Text icon to add it to the Program Tree.

![missing](/manual/en/programming_guide/4.teaching_icons_detail/20.png)

![missing](/manual/en/programming_guide/4.teaching_icons_detail/21.png)

### 8. Alarm/Halt Function

![missing](/manual/en/programming_guide/icons/10.png)

#### 8.1 Alarm

The Alarm function allows you to display a popup message. You can insert an alarm message at specific conditions or sections of the program to prompt the user for confirmation.<br>
When you insert the alarm function into the program and click on it, a setup window like the one below will appear.

![missing](/manual/en/programming_guide/4.teaching_icons_detail/22.png)

You can enter the title and content of the alarm message.<br>
After setting it up as shown above and running the program, a popup like the one below will appear the moment the alarm command is executed.

![missing](/manual/en/programming_guide/4.teaching_icons_detail/23.png)

- Resume: Continues with the next command.
- Halt: Stops the program at this point.

While the alarm function is active, the program flow is paused.<br>
If you click the Resume button in the popup window, the next command will be executed, and if you click Halt, the program will stop running at that point.

When the alarm function is used, the main program is temporarily paused, and any threads that are running are also paused at the same time.

#### 8.2 Halt

The Halt function is used to stop the program.<br>
You can use this function when you need to terminate the program under specific conditions.<br>
The Halt function is divided into Halt, Sub.P Halt (Sub Program Halt), and Folder Halt.

- Halt: Terminates the main program, regardless of whether it is executed from the main or sub-program.
- Sub.P Halt: Must be used within a sub-program. It terminates the sub-program and returns to the main program.
- Folder Halt: Must be used within a folder. It terminates the folder and then executes the commands below the folder.

Please refer to the diagram below for clarification.

![missing](/manual/en/programming_guide/4.teaching_icons_detail/24.png)

In the example below, an If condition checks whether a certain condition is true. If the condition is met, the program is set to call the Halt function.<br>
If the condition is true, the program will stop at that point, and the following commands will not be executed.

![missing](/manual/en/programming_guide/4.teaching_icons_detail/25.png)

<div class="warning custom-block">
    <p class="custom-block-title">Warning</p>
    <ul>
      <li>
        When the Halt function is executed, the main program will terminate – this includes any additional Thread functions.
      </li>
    </ul>
</div>

### 9. Debug Function

![missing](/manual/en/programming_guide/icons/11.png)

Function for debugging internal values. Users can make a pop-up display the value of a variable or internal parameter, similar to an Alarm.<br>
Debugging is for observing internal variables. It is mainly used to check the value of variables used in the program during program teaching / development.

![missing](/manual/en/programming_guide/4.teaching_icons_detail/26.png)

After adding the debug function to the program tree, click Debug to see the popup window as above.<br>
Enter the variable name in the Name field to view how variables change. To observe several variables within the same popup, press the (Add) button to add another variable.

The follow is an example on using Debug.<br>
Declare one variable type variable (my_var = 3.14) and one array type variable (my_arr = {100,200,300}) using the Assign function as shown below.

![missing](/manual/en/programming_guide/4.teaching_icons_detail/27.png)

Add a Debug Function below it.<br>
Set the variables in the Debug window to observe the two previously declared variables as shown below.

![missing](/manual/en/programming_guide/4.teaching_icons_detail/28.png)

Once the setting is complete, run the program (the tablet PC and the control box must be connected before execution),<br>
and the following pop-up window will appear when the Debug command is executed. The pop-up will allow the user to observe the specified variable values.

![missing](/manual/en/programming_guide/4.teaching_icons_detail/29.png)

- Resume: Continues to the next command.
- Halt: Terminates the program.

### 10. User Input Function

![missing](/manual/en/programming_guide/icons/12.png)

User input is used to change the value of a declared variable during program execution.<br>
As shown in the figure below, a variable is declared above the user input, and when user input is executed, a value is entered in the "Applied Value" field.<br>
At this point, if "Skip" is selected, the program continues without entering a value. If "Apply and Continue" is selected, the value entered in the "Applied Value" field is reflected in the variable, and the program proceeds.

![missing](/manual/en/programming_guide/4.teaching_icons_detail/30.png)

### 11. External Axis (Ext.Axis) Function

![missing](/manual/en/programming_guide/icons/13.png)

![missing](/manual/en/programming_guide/4.teaching_icons_detail/31.png)

You can control up to 6 external axes, and the axes can be moved based on the settings configured in the Device section of the Setup.<br>
Target values can be set for each axis, and speed and acceleration values should be input between 0 and 1.

- For the option "Multi-Axis Operation," you can decide whether to finish all the external axis movements simultaneously or to complete each axis individually when multiple axes are operating.
- For the option "Command Completion Condition," you can choose whether to wait for the command to finish executing before continuing or to proceed without waiting for the motion to complete.

### 12. If Function

![missing](/manual/en/programming_guide/icons/14.png)

The If Function allows the users to insert a conditional ‘if’ statement.<br>
Depending on the conditions, branches can be set up so that the robot can perform different commands. Users can set the If / else if / else statement.<br>
After adding the If function to the program tree and clicking the added If function, the following popup window appears.
Users can enter the conditional statement they would like to use in the If statement.

![missing](/manual/en/programming_guide/4.teaching_icons_detail/32.png)

Else if (+ Add else if) or Else functionality (+ Add else) can be created along with branch of conditional statements.

### 13. Switch Function

![missing](/manual/en/programming_guide/icons/15.png)

Switch statement. Depending on the conditions, branches can be set up so that the robot can perform different commands. Switch / case statements are available.<br>
The following popup window appears by clicking the added switch function in the program tree. Users than can enter the criteria arguments for the Switch statement to work.

![missing](/manual/en/programming_guide/4.teaching_icons_detail/33.png)

When first creating a Switch statement, ‘default’ will automatically be created. Additional case statements can then be added using the (+ Add case) button.<br>
After clicking the (+ Add case) button, the following window will appear. Enter the conditional argument in the field, then press the Set button to save.

![missing](/manual/en/programming_guide/4.teaching_icons_detail/34.png)

### 14. Pre/Post Program Function

![missing](/manual/en/programming_guide/icons/16.png)

You can define functions that are executed only once before starting the program (Pre-Program) and functions for wrap-up tasks after the program ends (Post-Program).<br>
When a program continuously runs, like in Play mode, the content declared under the Pre-Program function is executed only once at the beginning.<br>
One-time commands, such as variable declarations or communication connections, can be managed under the Pre-Program section.

The diagram below shows the normal flow of command execution when the Pre-Program function is not used:

![missing](/manual/en/programming_guide/4.teaching_icons_detail/35.png)

<figcaption style="text-align:center;">[ (L) Make screen / (R) Play screen ]</figcaption>

The left side shows the program execution in the Make screen, while the right side shows it in the Play screen.<br>
In the Make screen, the program between Begin and End is executed once. In the Play screen, the program between Begin and End is repeated.

The next diagram shows the flow of command execution when the Pre-Program function is used:

![missing](/manual/en/programming_guide/4.teaching_icons_detail/36.png)

<figcaption style="text-align:center;">[ (L) Make screen / (R) Play screen ]</figcaption>

In the Make screen, the commands between Begin and End are executed sequentially, regardless of whether the Pre-Program function is used.<br>
In the Play screen, the program between Begin and End is repeated, but the commands declared under the Pre-Program section are executed only once.

Operations that need to be performed only once, such as variable declarations or communication connections, can be configured using the Pre-Program function.

Below is an example of how the Pre-Program function is inserted into an actual project.<br>
Due to its nature, the Pre-Program function is only inserted below Begin and cannot be copied and pasted elsewhere.

![missing](/manual/en/programming_guide/4.teaching_icons_detail/37.png)

<div class="warning custom-block">
  <p class="custom-block-title">Warning</p>
  <ul>
    <li>
      If a sub-program called through the Sub.P function uses the Pre-Program function, the Pre-Program commands will only be applied in the main program.
    </li>
    <li>
      The Post-Program function allows you to define commands that will be executed after the program ends. It is intended for wrap-up tasks after the program finishes.<br>
      - The commands declared under the Post-Program section are executed sequentially after the program ends.<br>
      - The execution of the Post-Program follows the diagram below:<br>
      <br>
      <img src="/manual/en/programming_guide/4.teaching_icons_detail/38.png" />
    </li>
  </ul>
</div>

- Post-Program Execution Example 1:<br>
  The following example shows the use of the Post-Program function. As soon as the program starts (below Begin), a High signal is sent to port 1 using the D.Output function.<br>
  Even though the D.Output for port 1 to turn off was not added before the end of the program, port 1 automatically sends a Low signal when the program ends, thanks to the use of D.Output 1=L in the Post-Program section.

  ![missing](/manual/en/programming_guide/4.teaching_icons_detail/39.png)

As shown in the example, the Post-Program function can be used for safety features.

- Post-Program Execution Example 2:<br>
  This example shows how the Post-Program function is used. When the program ends normally, the beacon light (connected to D.Output 0) does not turn on. However, if the program ends abnormally, the beacon light is turned on.

  ![missing](/manual/en/programming_guide/4.teaching_icons_detail/40.png)

  In this example, the variable SD_IS_INTENDED_STOP is a system internal variable that is always initialized to 0 (false) when the program starts.<br>
  When the program is stopped intentionally by the user, this variable is set to 1 (true).<br>
  If the program stops abnormally for any reason, this variable remains false.

  Normal terminations include clicking the UI stop button, I/O stop signals, or other user-triggered stop signals (SD_IS_INTENDED_STOP = true).<br>
  Abnormal terminations include stopping due to approaching a singularity or syntax errors (SD_IS_INTENDED_STOP = false).

  - Even if the program ends abnormally (e.g., by pressing Halt in an Alarm), the Post-Program functions will still be executed.
  - Commands related to robot arm movement, such as Move J or Move L, cannot be used under the Post-Program section.
  - The Post-Program function only works in the top-level program. If used in a subroutine, it will not be executed.

### 15. Set Function

![missing](/manual/en/programming_guide/icons/17.png)

The Set function allows users to temporarily change parameter settings, regardless of the default values contained within the Setup menu. While the settings in the Setup menu are applied as defaults to all projects, the Set function allows users to temporarily override these parameters.

The various parameters that you change on the Setup screen are applied as default values for all projects that use that control box.<br>
If you need to use certain parameters separately for a particular project, you can manage parameter settings by project by adding the Set function to the top of the project (for example, Pre.P. sub).

The Set function is a temporary setting, not a permanent setting. When a new Set function is called for the same parameter setting, the parameter is reflected based on the new Set function.<br>
When the program ends, the parameter settings will return to the default values as defined within the Setup menu.

The parameters that can be changed via the Set function are as follows:

- Time
- Collision Threshold
- Payload
- Linear Move Offset
- Inbox
- TCP Position
- Tool Collision Box
- Global Workspace
- Inbox Size
- Collision On/Off
- Speed Override
- Acceleration Override
- Serial Configuration
- Fixed Vel/Acc
- Spiral Circle Mode
- Speed Bar Control
- Collision Stop Mode
- User Coordinate Shift
- After Collision Detect
- Disable Box D.out
- Move L type XYZ Projection
- Move L type Orientation Align
- User Coordinate Config
- XYZ Shift
- XYZ Shift2
- Vibration sensor On/Off
- Digital Input Simulation
- Program Flow Control
- High acceleration Mode
- Motion Time Constraints
- High Sensitivity Coll.Detect
- Micro offset value
- User Coordinate Shift 6D
- User Coordinate Auto Alignment
- Timer Setting
- No-Arc Move speed
- Manual User Coordinate 6D
- Jacobian based Speed Control
- External F/T sensor signal
- Joint => Point
- Point => Joint
- TCP Linear Speed Limit
- Force Control Displacement Limit
- Motion Break
- Vibrating Motion
- Move L Deadzone Avoidance
- Axis Aligned Posture Calculation
- Position Control Signal Smoothing
- Disable Control Box Designated Input
- Robot Self Vibration
- PFL Mode
- Gravity Compensation Mode (Current Control)
- Landmark based Fitting

<div class="warning custom-block">
  <p class="custom-block-title">Warning</p>
  <ol>
    <li>
      The value set in the Set function is a temporary value. When the program exits, it automatically returns to the default values set from the Setup Menu.
    </li>
    <li>
      The functions provided by the Set function allow you to change the setting value to another value in the middle of the program flow.<br>
      For example, you can use Set's ‘Collision On / Off’ feature to selectively turn on/off collision detection in the middle of a program flow.
    </li>
  </ol>
</div>

#### 15.1 Time

![missing](/manual/en/programming_guide/4.teaching_icons_detail/set/1.png)

Starts the timer and sets the initial value. Starting with the value entered, the value of the timer increases.

#### 15.2 Collision Threshold

![missing](/manual/en/programming_guide/4.teaching_icons_detail/set/2.png)

Temporarily sets the collision detection sensitivity. The lower the value, the more sensitive the robot is to collision. This has the same functionality as the Collision Threshold option within the Setup-Cobot Menu.

#### 15.3 Payload

![missing](/manual/en/programming_guide/4.teaching_icons_detail/set/3.png)

Temporarily set the tool's weight and center of gravity. This has the same functionality as the Payload option within the Setup Menu.

#### 15.4 Linear Move Offset

![missing](/manual/en/programming_guide/4.teaching_icons_detail/set/4.png)

Gives a slight offset relative to the base coordinate system. This function allows users to temporarily set an offset of up to 20 mm.

#### 15.5 Inbox

![missing](/manual/en/programming_guide/4.teaching_icons_detail/set/5.png)

Allows the user to enable the Inbox Checking feature. The Inbox Checking feature checks whether a certain part of the robot is in a predefined area (either in the Setup screen or the using the Set function). The parts of the robot that can be checked are as follows.

- Check Tool Flange Center : Verify that the set TCP at the robot arm end has entered a specific area.
- Check Tool Center Point : Determine if the center of the tool flange at the end of the robot arm has entered a specific area.
- Check Tool Box : Verify that the box set virtually on the robot arm end has entered a specific area.
- Check All : All the above.

The size and position of the box can be set in the Inbox screen using Setup mode (or through the Set function).<br>
A total of 2 Inboxes can be set, and based on the above settings, whether or not they are in a specific area can be used through SD_INBOX_TRAP_FLAG_0 or SD_INBOX_TRAP_FLAG_1 in the Shared Data type data, respectively.

![missing](/manual/en/programming_guide/4.teaching_icons_detail/set/6.png)

#### 15.6 TCP Position

![missing](/manual/en/programming_guide/4.teaching_icons_detail/set/7.png)

Temporarily set a relative offset of the tool's TCP position. It has the same functionality as the End Effector menu in Setup-Tool.

#### 15.7 Tool Collision Box

![missing](/manual/en/programming_guide/4.teaching_icons_detail/set/8.png)

Temporarily set the size and position of a virtual box surrounding the gripper for self-collision prevention. It has the same functionality as Tool Setting for Collision Check in Setup-Tool.

#### 15.8 Global Workspace

![missing](/manual/en/programming_guide/4.teaching_icons_detail/set/9.png)

Temporarily set the limits of the workspace for collision prevention. It has the same functionality as the Workspace Limits menu in Setup-Cobot.

#### 15.9 Inbox Size

![missing](/manual/en/programming_guide/4.teaching_icons_detail/set/10.png)

Temporarily set the position and size of the Inbox. It has the same functionality as the Inbox settings in Setup-Inbox.

#### 15.10 Collision On/Off

![missing](/manual/en/programming_guide/4.teaching_icons_detail/set/11.png)

Temporarily sets the use of external collision detection mode. It has the same functionality as the Enable Collision box in Setup-Cobot.

#### 15.11 Speed Override

![missing](/manual/en/programming_guide/4.teaching_icons_detail/set/12.png)

Allows the user to temporarily to change the base scaled speed used by the Move and Point functions. Users can either enter a value between 0 and 2.0, or a predefined variable.

![missing](/manual/en/programming_guide/4.teaching_icons_detail/set/13.png)

In the example above, Set-Speed ​​Override 1.5 is set in front of Move J.<br>
Therefore, the Move J operation has the same effect as if a speed of 1.5 times the set speed was set.<br>
Set-Speed ​​Override 0.70 was used between Move J and Move L. Therefore, Move L operates with the same effect as if a speed of 0.70 times the set speed is set.

#### 15.12 Acceleration Override

![missing](/manual/en/programming_guide/4.teaching_icons_detail/set/15.png)

Allows the user to temporarily to change the base scaled acceleration used by the Move and Point functions. Users can either enter a value between 0 and 2.0, or a predefined variable.

![missing](/manual/en/programming_guide/4.teaching_icons_detail/set/15.png)

Through the code below, you can see how the speed and acceleration change when Speed Override and Acceleration Override are used.<br>
The initial speed and acceleration are set to 45% and 30%, respectively, and change depending on the setting scale.

#### 15.13 Serial Configuration

![missing](/manual/en/programming_guide/4.teaching_icons_detail/set/16.png)

The baud rate and stop bit / parity of the serial communication are temporarily set. It has the same meaning as set in Setup-Serial.

#### 15.14 Fixed Velocity/Acceleration

![missing](/manual/en/programming_guide/4.teaching_icons_detail/set/17.png)

This function is used when you want to use a fixed value, ignoring the set speed / acceleration for each Move point. There are two sub options: Joint Movement and Linear Movement.

The velocity (deg/s) and acceleration (deg/s^2) set in the Joint Movement affect the movement speed and acceleration of the Joint movement types Move J and Move JB.<br>
The velocity (mm/s) and acceleration (mm/s^2) set in Linear Movement affect the movement speed and acceleration of the linear movement types Move L, Move PB (Formerly Move LB), Move JL, Move ITPL, Move Pro and Circle.<br>
If you do not want to force speed/acceleration through this function, clear the check box. In this case, it follows the speed/acceleration value set for each point during operation.<br>

Ex) If you need to keep a certain speed and acceleration during operation, you can use this Set function as in the code below.

![missing](/manual/en/programming_guide/4.teaching_icons_detail/set/18.png)

#### 15.15 Spiral Circle Mode

![missing](/manual/en/programming_guide/4.teaching_icons_detail/set/19.png)

This function is used to change the circular motion into spiral motion. Draw a circle / arc when using the Circle function.<br>
If Set-Spiral mode is used over the Circle function, the existing circle / arc will be changed to spiral motion. Therefore, to implement spiral motion, this function should be inserted above the Circle function.<br>
In the property, Distance sets how much a helix moves relative to the starting point when implementing a spiral circular motion, and Rate moves by applying a ratio to the radius of the circle or arc. Therefore, 1 is 100% when using Rate.

Ex 1) Only Circle is used: Create a general circle / arc trajectory

![missing](/manual/en/programming_guide/4.teaching_icons_detail/set/20.png)

<img src="/manual/en/programming_guide/4.teaching_icons_detail/set/21.png" width=200 />

Ex 2) Set-Spiral Mode + Circle: Spiral trajectory

![missing](/manual/en/programming_guide/4.teaching_icons_detail/set/22.png)

<img src="/manual/en/programming_guide/4.teaching_icons_detail/set/23.png" width=200 />
<br>

#### 15.16 Speed Bar Control

![missing](/manual/en/programming_guide/4.teaching_icons_detail/set/24.png)

The speed control bar (bottom right) of the UI can be adjusted with the program. You can change the UI speed control bar by using this function in the desired section.

#### 15.17 Collision Stop Mode

![missing](/manual/en/programming_guide/4.teaching_icons_detail/set/25.png)

Select the robot's motion type when after detecting an external collision. There are three options.

- General Stop: After the collision is detected, the trajectory movement is paused on the spot.
- Evasion Stop: After the collision is detected, the robot moves a small amount away from the external force, then pauses the trajectory movement.
  The degree of Evasion Stop is divided into Normal, Smallest, Small, Big, and Biggest.
- Free Drive Stop : After detecting the collision, the robot arm switches directly to the teaching state for a certain period of time. The time to stop the direct teaching is divided into 0.8 seconds and 1.6 seconds, respectively.
  It has the same meaning as Setup-Cobot's "Action after Collision".

#### 15.18 User Coordinate Shift

![missing](/manual/en/programming_guide/4.teaching_icons_detail/set/26.png)

This function is to move the origin of user coordinate system temporarily.<br>
can set the user coordinate system number and shift distance you want to shift and choose which coordinate system to shift the shift distance.

#### 15.19 After Collision Detect

![missing](/manual/en/programming_guide/4.teaching_icons_detail/set/27.png)

The program flow can be selected after external collision detection. Our default setting is to pause the program after detecting an external collision.<br>
After detecting a collision, a collision detection alert pops up and the program and threads are paused. If you want to terminate the program after collision detection, you can use this function to select the option as Program Stop state.

- Program Pause State : Program flow is paused after external collision detection.
- Program Stop State : Program flow stops after external collision detection.

#### 15.20 Disable Box D.out

![missing](/manual/en/programming_guide/4.teaching_icons_detail/set/28.png)

This function temporarily disables the digital output of the control box. Even if the digital output command inserted in the program is not erased, this set command can be used to ignore the digital output command in a specific section.<br>
It can be used for development testing, etc., and by selecting an option, the output can be deactivated/activated according to the program section.

#### 15.21 Move L type XYZ Projection

![missing](/manual/en/programming_guide/4.teaching_icons_detail/set/29.png)

This is a function to fix the target position coordinate value of L series movement (eg Move L. Move PB, Circle etc). If you select the value to be fixed and the reference coordinate system, the position coordinate value of the target point or set point is fixed to the value of the selected axis of the selected coordinate system.

For example, if the base coordinate system (Global) is selected as the coordinate system and Z Projection 100mm is selected/written, the Z height of all moving target values/set coordinate values is applied collectively as 100mm.<br>
This function is also a set function, which can be activated/deactivated for each section of the program. If you want to disable it, select None in the coordinate system.

#### 15.22 Move L type Orientation Align

![missing](/manual/en/programming_guide/4.teaching_icons_detail/set/30.png)

This function is to fix the target rotation coordinate value of L series movement (eg Move L. Move PB, Circle etc). Fix the rotation of L series motions with the rotation value of the selected Point.<br>
As a sub-function of the Set function, this function can be turned on or off depending on the program section. This function can be used when you want to uniformly rotate the TCP rotation at a time.

#### 15.23 User Coordinate Config

![missing](/manual/en/programming_guide/4.teaching_icons_detail/set/31.png)

This function allows you to temporarily change the user coordinate system settings. By selecting three points in the middle of the program flow, the user coordinate system setting can be arbitrarily changed in the middle of the program.<br>
Because it is a sub-function of Set, the user coordinate system setting returns to the default value when the program ends.

#### 15.24 XYZ Shift

![missing](/manual/en/programming_guide/4.teaching_icons_detail/set/32.png)

This function allows you to temporarily shift the target point. User can select a base/tool/user coordinate Config and enter shift values from the target point.<br>
At this time, select whether to apply this shift only to L type or to both L type and J type. Because it is a sub-function of Set, it returns to the default value when the program ends.

#### 15.25 XYZ Shift2

![missing](/manual/en/programming_guide/4.teaching_icons_detail/set/33.png)

This function allows you to temporarily shift the target point. User can select a base/tool/user coordinate Config and enter shift values from the target point.<br>
At this point, this shift is only applicable to L series operation, and both the XYZ position value and the rotation value can be entered. Because it is a sub-function of Set, it returns to the default value when the program ends.

#### 15.26 Vibration sensor On/Off

![missing](/manual/en/programming_guide/4.teaching_icons_detail/set/34.png)

This function allows you to temporarily exclude collision detection by vibration during collision detection. Because it is a sub-function of Set, it returns to the default value when the program ends.

#### 15.27 Digital Input Simulation

![missing](/manual/en/programming_guide/4.teaching_icons_detail/set/35.png)

This function allows you to simulate Digital input signal. Create the desired input by setting the state of the port to which you want to input.<br>
Because it is a sub-function of Set, it returns to the default value when the program ends.

#### 15.28 Program Flow Control

![missing](/manual/en/programming_guide/4.teaching_icons_detail/set/36.png)

This function allows you to pause and restart without using alarms and I/O when a program is running.<br>
Because it is a sub-function of Set, it returns to the default value when the program ends.

#### 15.29 High Acceleration Mode

![missing](/manual/en/programming_guide/4.teaching_icons_detail/set/37.png)

High acceleration mode reduces the time the robot's operating speed reaches the desired operating speed through changes in the reduction/acceleration profile.<br>
Because it is a sub-function of Set, it returns to the default value when the program ends.

#### 15.30 Motion Time Constraints

![missing](/manual/en/programming_guide/4.teaching_icons_detail/set/38.png)

Motion Time Constraint is a function that constrains the time taken to move a point to point by the time entered.<br>
At this time, it is possible to increase time but not to reduce it. Time must be a value greater than or equal to zero.<br>
Because it is a sub-function of Set, it returns to the default value when the program ends.

#### 15.31 High Sensitivity Coll.Detect

![missing](/manual/en/programming_guide/4.teaching_icons_detail/set/39.png)

High sensitivity Coll.Detect allows the detection of collision to be 30% more sensitive than the existing sensitivity.<br>
In Setup, the sensitivity that made collision detection the most sensitive is also 30% more sensitive than 0%.<br>
Because it is a sub-function of Set, it returns to the default value when the program ends.

#### 15.32 Micro offset value

![missing](/manual/en/programming_guide/4.teaching_icons_detail/set/40.png)

User can give a slight offset based on the desired coordinate system. This function enables temporary offset settings of up to 20mm.<br>
Because it is a sub-function of Set, it returns to the default value when the program ends.

#### 15.33 User Coordinate Shift 6D

![missing](/manual/en/programming_guide/4.teaching_icons_detail/set/41.png)

The user can temporarily shift the user coordinate. This function allows the user to temporarily change the position, rotation of the user's coordinate.<br>
Because it is a sub-function of Set, it returns to the default value when the program ends.

#### 15.34 User Coordinate Auto Alignment

![missing](/manual/en/programming_guide/4.teaching_icons_detail/set/42.png)

This function allows the user to change the user coordinate to the last TCP frame. It is also possible to return to the default user coordinate.<br>
Because it is a sub-function of Set, it returns to the default value when the program ends.

#### 15.35 Timer Setting

![missing](/manual/en/programming_guide/4.teaching_icons_detail/set/43.png)

User can select the timer their want to use and set the initial value of the timer. The timer starts from the initial value set by the user.<br>
Because it is a sub-function of Set, it returns to the default value when the program ends.

#### 15.36 No-Arc Move speed

![missing](/manual/en/programming_guide/4.teaching_icons_detail/set/44.png)

Set the move speed of the robot in the no-arc state where welding is not performed.<br>
Because it is a sub-function of Set, it returns to the default value when the program ends.

#### 15.37 Manual User Coordinate 6D

![missing](/manual/en/programming_guide/4.teaching_icons_detail/set/45.png)

You can change the user coordinate system during program execution.
If you choose temporary change mode, the specified user coordinate system will only be applied when the program is running. If you choose permanent change mode, the value will be applied permanently.<br>
As shown in the image below, the current user coordinate system (No. 0) is set with X and Z values of 400mm in Setup-Coordinate.<br>
Because it is a sub-function of Set, it returns to the default value when the program ends.

![missing](/manual/en/programming_guide/4.teaching_icons_detail/set/46.png)

At this point, the manual user coordinate system 6D is set as shown below, and the program is executed.

![missing](/manual/en/programming_guide/4.teaching_icons_detail/set/47.png)

The change can be confirmed as shown below.

![missing](/manual/en/programming_guide/4.teaching_icons_detail/set/48.png)

#### 15.38 Jacobian based Speed Control

![missing](/manual/en/programming_guide/4.teaching_icons_detail/set/49.png)

This feature allows you to turn on or off an algorithm that automatically adjusts the speed when the robot approaches an undesirable posture or configuration.

#### 15.39 External F/T sensor signal

![missing](/manual/en/programming_guide/4.teaching_icons_detail/set/50.png)

This function resets the external F/T sensor signal to 0 (N).<br>
Because it is a sub-function of Set, it returns to the default value when the program ends.

#### 15.40 Joint ⇒ Point

![missing](/manual/en/programming_guide/4.teaching_icons_detail/set/51.png)

This function allows you to assign the coordinate values corresponding to a joint variable to a point variable.<br>
You can use a previously declared joint variable or pin joint and assign it to the joint name, and use a point variable or pin point for the point name.<br>
Because it is a sub-function of Set, it returns to the default value when the program ends.

#### 15.41 Point ⇒ Joint

![missing](/manual/en/programming_guide/4.teaching_icons_detail/set/52.png)

This function allows you to assign the joint angle corresponding to a point variable to a joint variable.<br>
You can use a previously declared point variable or pin point for the point name and a joint variable or pin joint for the joint name.<br>
Because it is a sub-function of Set, it returns to the default value when the program ends.

#### 15.42 TCP Linear Speed Limit

![missing](/manual/en/programming_guide/4.teaching_icons_detail/set/53.png)

This function allows you to limit the linear speed of the robot's TCP.<br>
Because it is a sub-function of Set, it returns to the default value when the program ends.

#### 15.43 Force Control Displacement Limit

![missing](/manual/en/programming_guide/4.teaching_icons_detail/set/54.png)

When using force control, the robot moves in a certain direction to measure the force with the sensor. This function limits the displacement during such movement.

#### 15.44 Motion Break

![missing](/manual/en/programming_guide/4.teaching_icons_detail/set/55.png)

This function is similar to the "Finish At" function but can be used in cases where communication is received from a thread that is not supported by the "Finish At" function to set conditions.

#### 15.45 Vibrating Motion

![missing](/manual/en/programming_guide/4.teaching_icons_detail/set/56.png)

By setting an axis and specifying amplitude and frequency phase, this function makes the robot vibrate in the specified axis direction.

#### 15.46 Move L Deadzone Avoidance

![missing](/manual/en/programming_guide/4.teaching_icons_detail/set/57.png)

This feature enables the robot to avoid a deadzone with a diameter of 15cm from the center of the robot arm. If the robot arm approaches the deadzone, it will move to avoid it.

#### 15.47 Axis Aligned Posture Calculation

![missing](/manual/en/programming_guide/4.teaching_icons_detail/set/58.png)

This function aligns the posture in the direction of the specified axis based on the point variable you designate.

#### 15.48 Position Control Signal Smoothing

![missing](/manual/en/programming_guide/4.teaching_icons_detail/set/59.png)

This function applies a low-pass filter to the position control signal outputted to the robot's servo motor.<br>
Increasing the filter value can make the movement smoother, though it may deviate slightly from the original trajectory.

#### 15.49 Disable Control Box Designated Input

![missing](/manual/en/programming_guide/4.teaching_icons_detail/set/60.png)

This function enables or disables special functions assigned to digital inputs on the control box under the I/O-1 section of the Setup.<br>
Because it is a sub-function of Set, it returns to the default value when the program ends.

#### 15.50 Robot Self Vibration

![missing](/manual/en/programming_guide/4.teaching_icons_detail/set/61.png)

Robot self-vibration implements a motion where the robot vibrates according to the specified time, frequency, and vibration intensity settings.

#### 15.51 PFL Mode

![missing](/manual/en/programming_guide/4.teaching_icons_detail/set/62.png)

PFL (Power and Force Limit) Mode uses the robot's motion data and tool information to simulate the collision risk at various positions.

#### 15.52 Gravity Compensation Mode (Current Control)

![missing](/manual/en/programming_guide/4.teaching_icons_detail/set/63.png)

Enabling Gravity Compensation Mode (current control) switches the robot to direct teaching mode.<br>
In this mode, the robot generates force in the direction necessary to compensate for gravity according to the amount of force set during direct teaching.

#### 15.53 Landmark based Fitting

![missing](/manual/en/programming_guide/4.teaching_icons_detail/set/64.png)

This function automatically calculates and applies an offset to the robot's trajectory based on three user-defined landmarks.<br>
For reference points, input the teaching information defined initially during direct teaching. For current landmarks, input the positional information acquired through sensors, such as vision systems.

### 16. TCP Set Function

![missing](/manual/en/programming_guide/icons/18.png)

![missing](/manual/en/programming_guide/4.teaching_icons_detail/41.png)

The ability to change the TCP value during program execution with the TCP value pre-saved in Setup-Tool List.<br>
A total of five tools can be set to TCP. It does not change again until the TCP value is replaced or the program is shut down.

### 17. Manual Direct Teaching (Manual.D) Function

![missing](/manual/en/programming_guide/icons/19.png)

![missing](/manual/en/programming_guide/4.teaching_icons_detail/42.png)

A feature that enables direct teaching during program execution.<br>
When mode On, the program pauses when the manual direct teaching command is executed and a pop-up window as shown below appears on the screen.

![missing](/manual/en/programming_guide/4.teaching_icons_detail/43.png)

You can select four features in the pop-up window.

1. Use the direct teaching feature while the program is paused.
2. If you used the direct teaching feature in ①, turn off the direct contact function and resume the program.
3. Ignore the manual operation and resume the program.
4. Exit the program.

### 18. Moving Point (M.Point) Function

![missing](/manual/en/programming_guide/icons/20.png)

![missing](/manual/en/programming_guide/4.teaching_icons_detail/44.png)

The M.Point function is designed for synchronized control between the robot arm and external axes. If you want synchronized control, you can click the checkbox to the right of the target point for the external axis.<br>
If you prefer standard control instead of synchronized control, you can uncheck the box and use the controls in the top-left to operate only the robot arm independently.<br>
If a script command is entered in the script field below, the specified script will be executed when the robot reaches that position.

### 19. Repeat Function

![missing](/manual/en/programming_guide/icons/21.png)

Repetition statement. Repeat the program below the specified condition or number of times. There are four modes.

1. Repeat a specified number of times
2. Do While functionality that repeats the specified condition for a true period of time, but runs the first time, even if the condition is not true
3. Repeat while the specified condition is true
4. End repeat if the condition is true

After clicking the Repeat button, a popup menu containing the four modes will appear. Once it opens, select and use the desired function.

#### 19.1 Repeat a specified number of times (Time Condition)

![missing](/manual/en/programming_guide/4.teaching_icons_detail/45.png)

Ex) The above example will repeat a subprogram 1 times.

#### 19.2 Do While Function

![missing](/manual/en/programming_guide/4.teaching_icons_detail/46.png)

Ex) The conditional statement you entered in Condition repeats for a true period of time, but it repeats the first time, even if it is not true.

#### 19.3 Repeat while the specified condition is true (Holding Condition)

![missing](/manual/en/programming_guide/4.teaching_icons_detail/47.png)

Ex) If the conditional statement entered in Condition is true, repeat it again and again.

#### 19.4 End repeat if the condition is true (Exit Condition)

![missing](/manual/en/programming_guide/4.teaching_icons_detail/48.png)

Ex) If the conditional statement you entered in Condition is true, stop repeating and execute the following command.

### 20. Break Function

![missing](/manual/en/programming_guide/icons/22.png)

This is a function to forcibly terminate the Repeat (break) or move to the top of the Repeat (continue).<br>
Even if the Repeat condition determines that the subprogram should continue, the Break function can be used to escape the Repeat.<br>
The Continue function is used into the Repeat function, and when used, it moves to the top of the Repeat without executing the subprogram.

In addition to the break function, there are other features for controlling program flow, such as the Continue function, which moves the program flow back to the top of a loop; the Program Logic Jump To function, which allows you to jump to a specific point marked by Program Logic Jump Here; and the Program Logic Jump to Folder function, which allows you to jump to a folder in the program.

It can only be used as a subitem of the Repeat function – it cannot affect any other part of the program.

![missing](/manual/en/programming_guide/4.teaching_icons_detail/49.png)

![missing](/manual/en/programming_guide/4.teaching_icons_detail/50.png)

If a repeat break and continue are used, it will behave as shown in the figure above.

- Example of break function<br>
  In the example below, there is an infinite loop, and the program is set to execute the break function based on an If condition.<br>
  If the condition is not met, the loop will continue indefinitely. However, once the condition is met, the loop will exit, and the next command will be executed.

  ![missing](/manual/en/programming_guide/4.teaching_icons_detail/51.png)

- Example of continue function<br>
  In the example below, there is an infinite loop, and the program is set to execute the continue function based on an If condition.<br>
  If the condition is not met, the loop will repeat all its contents. However, once the condition is met, the program will skip the instructions below the continue function and jump to the instructions above it.

  ![missing](/manual/en/programming_guide/4.teaching_icons_detail/52.png)

- Example of Program Logic Jump To and Here<br>
  In the example below, there is an infinite loop, and the program is set to execute the Program Logic Jump To function based on an If condition.<br>
  If the condition is not met, the loop will repeat all its contents. However, once the condition is met, the program will skip the instructions below the Program Logic Jump To function and execute the commands after the Program Logic Jump Here function.

  ![missing](/manual/en/programming_guide/4.teaching_icons_detail/53.png)

- Example of Program Logic Jump To Folder<br>
  In the example below, there is an infinite loop, and the program is set to execute the Program Logic Jump To Folder function based on an If condition.<br>
  If the condition is not met, the loop will repeat all its contents. However, once the condition is met, the program will skip the instructions below the Program Logic Jump To Folder function and execute the commands inside the folder.

  ![missing](/manual/en/programming_guide/4.teaching_icons_detail/54.png)

### 21. Thread Function

![missing](/manual/en/programming_guide/icons/23.png)

Will create a separate program tree called “Thread.”<br>
This program will run in parallel (at the same time) with the main program. However, the thread program tree is limited to using functions that do NOT control robot operation.<br>
In other words, the user cannot put a Move, Point, or Circle function in the thread program tree.

![missing](/manual/en/programming_guide/4.teaching_icons_detail/55.png)

As shown above, the Thread Function is configured in parallel with the main program

- Threads do not repeat automatically and will end when the main program ends – even if the thread has not completed. To implement a Repeat Function, highlight a command within the Thread program tree and press the Repeat icon.<br>
  To implement a thread that repeats every second, use the Thread icon, use the Repeat Function within that thread, then place a one second Wait Function within the Repeat.
- The Thread Function will support only up to 3 different threads.
- Thread functionality works only in the current running program. If a subprogram called through a Sub.P function uses a thread, it will not work properly.

Thread types are as follows:

- General Thread : It stops with the user's intentional pause, alarm, collision detection, etc.
- Non-Stop Thread : It does not stop except for collision detection.
- Non-Stop Thread2 : It doesn't stop until the program Halt.
- Event General Thread : This is a General thread executed by the event thread call function in the main program.
- Event Non-Stop Thread : It is a non-stop thread that is executed by the event thread call function in the main program.

![missing](/manual/en/programming_guide/4.teaching_icons_detail/56.png)

As shown in the figure above, the event thread starts running when the event thread call function is used in the main program.

The figure below is an example of how the Thread function can be inserted into an actual project. In the example below, two threads are inserted.

![missing](/manual/en/programming_guide/4.teaching_icons_detail/57.png)

<div class="warning custom-block">
  <p class="custom-block-title">Warning</p>
  <ol>
    <li>
      For the stability of the program, the use of threads is not recommended within any program called by Sub.P.
    </li>
    <li>
      Commands such as Move or Circle Functions cannot be placed within a thread.
    </li>
    <li>
      When using Pause or Alarm function, both main program and thread are paused. When the main program exits, the thread will also exit – even if the thread has not yet finished executing.
    </li>
  </ol>
</div>

### 22. G Code Function

![missing](/manual/en/programming_guide/icons/24.png)

![missing](/manual/en/programming_guide/4.teaching_icons_detail/58.png)

This function allows the robot to move to the path stored in the G code.<br>
The G code file must be stored in a folder at the specified path (\Tablet\Android\data\com.rainbow.cobot\files\work) in advance to be available.<br>
Enter the name of the G code file that user saved in File Name. The plane in which the robot moves can then specify the xy, yz, and zx planes of the user-specified coordinate system as the starting planes.

### 23. Replay Function

![missing](/manual/en/programming_guide/icons/25.png)

![missing](/manual/en/programming_guide/4.teaching_icons_detail/59.png)

This function is to play the recorded teaching motion. Motion recording is performed in the settings of the Make page.<br>
If you select the name and motion speed/property of the recorded motion, the recorded motion is played again.

### 24. ArcSensing Function

![missing](/manual/en/programming_guide/icons/26.png)

![missing](/manual/en/programming_guide/4.teaching_icons_detail/60.png)

Arc sensing is a function designed to maintain welding quality by using the current of the welding machine to compensate for issues caused by the misalignment of the workpiece or inaccuracies in teaching during welding.<br>
Arc sensing is divided into unidirectional arc sensing and multidirectional arc sensing. For use with weaving, multidirectional arc sensing should be applied.

![missing](/manual/en/programming_guide/4.teaching_icons_detail/61.png)

In unidirectional arc sensing, you can set the average or target value of the input coming from the analog input over a specific time period.<br>
Based on the input values, parameters can be adjusted to determine the direction and degree of correction.

![missing](/manual/en/programming_guide/4.teaching_icons_detail/62.png)

In multidirectional arc sensing, the target value is set as the average of the input from the analog input over a specific time period. You can configure how much correction is needed to follow the target value in both the robot’s movement direction and the weaving direction.<br>
For advanced functions, you can adjust the responsiveness of arc sensing and add intentional offsets by configuring the corresponding settings.

### 25. Motion Macro (M.Macro) Function

![missing](/manual/en/programming_guide/icons/27.png)

![missing](/manual/en/programming_guide/4.teaching_icons_detail/63.png)

The system automatically generates actions based on the type of macro. (Flat plane, Rounded Plane(R), Rounded Plane(H), Triangle Plane, 3D Round Plane, Expanding Spiral(M), Expanding Spiral(P), Shrinking Spiral)<br>
At this time, teaching must be performed according to each macro, and once the user sets the parameters to match the desired shape, the desired actions can be automatically generated without needing to teach individual points.

### 26. D.Out (Digital out) Function

![missing](/manual/en/programming_guide/icons/28.png)

Allows the user to set the digital output of the control box. The user can set the digital output signal of whichever port (0~15) they would like.<br>
Each port has three possible settings: high signal, low signal, and bypass.

After adding the D.Out function to the program, click on D.Out in the program tree to have the following pop-up window appear.

![missing](/manual/en/programming_guide/4.teaching_icons_detail/64.png)

① Selection the detailed features available in the D.out function.<br>
② Shows the status of the current Digital Out output from the control box.<br>
③ Allows the user to set their desired setting for a port (0~15). The three setting toggles are Bypass, Low and High.<br>

- Bypass : Maintains the previous output signal state (gray).
- Low : Sets the output signal to the low (0) level (red).
- High : Sets the output signal to the high (1) level (green).

④ Allows the user to review the settings selected within the target signal menu. A further explanation is shown below.<br>
⑤ Saves the settings specified within target signal menu.

#### 26.1 General output

![missing](/manual/en/programming_guide/4.teaching_icons_detail/65.png)

With the control box connected to the teaching pendant, set the Target Signal menu as shown above (to the right). Then, press the Preview button.<br>
As shown above, the Current Signal menu will change to match the settings that the user has put in the Target Signal menu.

![missing](/manual/en/programming_guide/4.teaching_icons_detail/66.png)

#### 26.2 Bit Combination

You can select the start and end ports, then input the desired value into the target field to output a digital signal using a bit combination.<br>
Here, the start and end ports represent the bit positions. For example, if you set the start port to port 0 and the end port to port 3, it corresponds to a 4-bit signal.<br>
When you input a decimal value in the target field, it will be converted into its binary equivalent, and the corresponding ports will turn on based on the value.

![missing](/manual/en/programming_guide/4.teaching_icons_detail/67.png)

When the control box is connected to the tablet PC, you can configure the target signal field as shown in the figure below, and by pressing the preview button, the control box will output the digital signal as displayed.

![missing](/manual/en/programming_guide/4.teaching_icons_detail/68.png)

As shown in the above figure, if you choose the "forward" option, port 0 will be the LSB and port 7 will be the MSB. Converting the decimal value 100 to binary gives 0110 0100, which means ports 2, 5, and 6 will turn HIGH.<br>
Conversely, if you choose the "reverse" option, port 0 will be the MSB and port 7 will be the LSB, resulting in ports 1, 2, and 5 turning HIGH.

#### 26.3 Signal Toggle

The signal will be toggled, meaning signals that are HIGH will become LOW, and those that are LOW will become HIGH.

![missing](/manual/en/programming_guide/4.teaching_icons_detail/69.png)

With the control box connected to the tablet PC, you can configure the target signal field as shown in the figure above (toggled signals are displayed in blue). By pressing the Preview button, the digital output signal from the control box will be toggled, as shown in the following figure.

![missing](/manual/en/programming_guide/4.teaching_icons_detail/70.png)

#### 26.4 Whole port control

You can switch all output ports to HIGH or LOW at once.

<img src="/manual/en/programming_guide/4.teaching_icons_detail/71.png" width=340 />
<!-- ![missing](/manual/en/programming_guide/4.teaching_icons_detail/71.png) -->

When the control box is connected to the tablet PC, set the target signal field as shown in the figure above, and press the Preview button. The control box will output the digital signal, and you will be able to see that the signal has changed, as shown in the figure below.

![missing](/manual/en/programming_guide/4.teaching_icons_detail/72.png)

#### 26.5 Unit Pulse shot

You can select the port you want to use and input a time between 0 and 3 seconds for T1 to T3. The pulse signal will be output according to the set time.

![missing](/manual/en/programming_guide/4.teaching_icons_detail/73.png)

When the control box is connected to the tablet PC, configure the target signal field as shown in the figure above and press the Preview button. The control box will then output a digital signal.

![missing](/manual/en/programming_guide/4.teaching_icons_detail/74.png)

If you set T1 to 2 seconds, T2 to 3 seconds, and T3 to 2 seconds, the pulse will be generated for each set time when previewed.<br>
Additionally, if you set the pulse mode to "normal pulse," the LOW-HIGH-LOW signal cycle will be set, as shown on the right. In "inverted pulse" mode, the HIGH-LOW-HIGH signal cycle will be set.<br>
Both normal and inverted pulses have a separate Non-Block mode. In Non-Block mode, the next command will be executed in parallel while the pulse is being output.<br>
If Non-Block mode is not used, the unit pulse output process will wait for the full cycle to complete before proceeding to the next command.

#### 26.6 Pulse Width Modulation(PWM)

This is the PWM (Pulse Width Modulation) output function. By inputting the frequency and duty cycle of the PWM pulse, you can send a PWM signal through the digital output port.

PWM Ex 1)

![missing](/manual/en/programming_guide/4.teaching_icons_detail/75.png)

![missing](/manual/en/programming_guide/4.teaching_icons_detail/76.png)

PWM Ex 2)

![missing](/manual/en/programming_guide/4.teaching_icons_detail/77.png)

![missing](/manual/en/programming_guide/4.teaching_icons_detail/78.png)

#### 26.7 Condition Based out

In addition to using the D.Out function, you can create commands to send digital outputs using the script function, as shown below.

![missing](/manual/en/programming_guide/4.teaching_icons_detail/79.png)

※ Script function: manual_digital_out(port number, output level)

![missing](/manual/en/programming_guide/4.teaching_icons_detail/80.png)

<div class="warning custom-block">
  <p class="custom-block-title">Warning</p>
  <ol>
    <li>
      If a special function is assigned to a specific digital output port in Setup-I/O, that port is not available through the D.out function.
    </li>
    <li>
      If a special function is assigned to a specific digital output port, it will be indicated in color yellow.
    </li>
    <li>
      If you want to leave a comment about the D.out function you set, you can use the memo function at the top right of the popup window.
    </li>
    <li>
      Before using the digital output, please fully understand the electrical properties of the digital output port provided by the manufacturer.
    </li>
  </ol>
</div>

### 27. An.out (Analog out) Function

![missing](/manual/en/programming_guide/icons/29.png)

The Analog Out Function controls the analog output of the control box. Outputs the selected voltage through the target (0~3) analog ports. Each port can output a voltage range of 0~10V.

After adding An.Out to the program, click on An.out in the program tree to open the following popup window.

![missing](/manual/en/programming_guide/4.teaching_icons_detail/81.png)

① You can configure the features provided in An.Out.<br>
② Displays the current status of the Analog Out being output by the control box.<br>
③ This setting maintains the existing voltage output. Check the checkbox and input the desired voltage (0-10V) to set the voltage.<br>
④ This function allows you to preview the settings selected in item 3.<br>
⑤ This configures the An. Output function with the settings selected in item 3.

#### 27.1 General Analog output

![missing](/manual/en/programming_guide/4.teaching_icons_detail/82.png)

When the control box is connected to the tablet PC, set the Target Signal field as shown in the figure above, and press the Preview button. The control box will output the analog signal, as shown below. You can see that the Current Signal field on the left side of the image has changed.

#### 27.2 Speed based Analog output

![missing](/manual/en/programming_guide/4.teaching_icons_detail/83.png)

Sets speed-based analog output for the analog output channel corresponding to the channel number.<br>
When you set On in the On/Off setting, the output voltage is based on the TCP speed. If the TCP speed is lower than the speed set in Speed Low, the output voltage is set to the value in Voltage_1. If the TCP speed is between Speed Low and Speed High, the output voltage increases proportionally to the TCP speed, up to the value set in Voltage_2.<br>
The output voltage, increasing proportionally with TCP speed, is limited by the voltage set in Voltage_2.

In addition to using the An.Out function, you can also create commands to send analog output using the script function, as shown below.

※ Script function: manual_analog_out(port number, output voltage)

![missing](/manual/en/programming_guide/4.teaching_icons_detail/84.png)

<div class="warning custom-block">
  <p class="custom-block-title">Warning</p>
  <ol>
    <li>
      If you want to leave a comment about the A.out function you set, you can use the memo function at the top right of the popup window.
    </li>
    <li>
      Before using the analog output, please fully understand the electrical properties of the analog output port provided by the manufacturer.
    </li>
  </ol>
</div>

### 28. Tool Out Function

![missing](/manual/en/programming_guide/icons/30.png)

The tool flange has two digital outputs. Signals from two digital outputs can be specified.<br>
In addition, the level of voltage to be output from the tool flange (0V or 12V or 24V) can be adjusted together.<br>
Click the Tool Icon to add it to the program. Click on Tool in the program tree to have the following pop-up window appear.

![missing](/manual/en/programming_guide/4.teaching_icons_detail/85.png)

① Shows the current status of the tool flange output at the end of the robot.<br>
② Sets desired voltage and digital output. The output voltage can be selected between 0V, 12V, and 24V. There is also an option to Bypass. The digital output can be toggled between Bypass, Low, and High.<br>
③ Allows the user to preview the settings selected within the target signal menu. A further explanation is shown below.<br>
④ Saves the settings specified within target signal menu.

![missing](/manual/en/programming_guide/4.teaching_icons_detail/86.png)

With the control box connected to the teaching pendant, and after activating the robot, set the Target Signal menu as shown above. Then press the Preview button to preview the tool flange output signal. The Current Signal menu will change to match the settings that the user has put in the Target Signal menu.

![missing](/manual/en/programming_guide/4.teaching_icons_detail/87.png)

<div class="warning custom-block">
  <p class="custom-block-title">Warning</p>
  <ol>
    <li>
      The user can add a comment about the Tool.out function by using the memo function at the top left of the popup window.
    </li>
    <li>
      Before using the tool flange output, please fully understand the electrical properties of the port provided by the manufacturer.
    </li>
  </ol>
</div>

### 29. Gripper Function

![missing](/manual/en/programming_guide/icons/31.png)

This is a dedicated function for the gripper dedicated to cooperative robots. It is possible to conveniently test and insert into the program and use of cooperative robot grippers from various companies such as Robotiq's grippers.<br>
It is not a simple I/O method, but it is a function that helps users to use a gripper that is cumbersome to write by using serial communication such as RS485 or using CRC.

Add the gripper function to the program tree and click the added Gripper as below.

![missing](/manual/en/programming_guide/4.teaching_icons_detail/88.png)

① Select the gripper product.<br>
② Select gripper connection point(Control Box, Tool Flange).<br>
③ Select the function to be used as the gripper.

<div class="warning custom-block">
  <p class="custom-block-title">Warning</p>
  <ul>
    <li>
      The product list provided in the gripper function will be updated through user request.
    </li>
  </ul>
</div>

### 30. Extension Board (I/O Extend) Function

![missing](/manual/en/programming_guide/icons/32.png)

<div class="flex-center-align">
  <img src="/manual/en/programming_guide/4.teaching_icons_detail/89.png" />
  <img src="/manual/en/programming_guide/4.teaching_icons_detail/90.png" style="margin-left: 10px" />
</div>

A feature that controls digital/analog output when purchasing and using an extended I/O module. The method of use is the same as the existing D.output and An.output.

### 31. ArcWeld Function

![missing](/manual/en/programming_guide/icons/33.png)

![missing](/manual/en/programming_guide/4.teaching_icons_detail/91.png)

This is a special function for arc welding. A special macro function designed to quickly enable implementable functions, such as Wait/D.out.<br>
To use this function, the Device field on the Setup page must precede setting the parameters and connection information for the welder.<br>
As illustrated above, this feature allows quick and easy insertion of weld speed/weld current / voltage settings / safety signal processing options into the program to be used for welding.

### 32. D.Weld Function

![missing](/manual/en/programming_guide/icons/34.png)

![missing](/manual/en/programming_guide/4.teaching_icons_detail/92.png)

It is a function that can use the digital weld machine. After selecting the weld machine to be used, user can proceed with ‘Weld Start’, ‘Weld Off’, and ‘Weld Setting’.

### 33. Script Function

![missing](/manual/en/programming_guide/icons/35.png)

Allows the user to write custom scripts.<br>
These scripts allow for custom operations/calculations. The Script Function also allows for functions such as variable substitution and assignment. There are two modes: single-input mode and multi-input mode.

Add the script function to the program tree and click the added script function. The following popup window will appear.

![missing](/manual/en/programming_guide/4.teaching_icons_detail/93.png)

You can freely input the desired script here. Functions such as variable operations, variable replacement, and variable assignment can be freely entered using the keyboard.<br>
If you want to use multiple lines of the script function at the same time, you can use the Add button at the bottom of the popup window.

When you select the mode as Multiple Input, a popup window like the one below will appear.

![missing](/manual/en/programming_guide/4.teaching_icons_detail/94.png)

You can use multiple scripts without needing an additional button.

The example below shows a program that creates a loop (Repeat) that runs every 1 second. During each repetition, a variable called counter is incremented by 1 using the Assign function within the script.

![missing](/manual/en/programming_guide/4.teaching_icons_detail/95.png)

In the example below, the robot moves to a specific pose using the Move J function, and the name start_point is assigned to this pose (using the function to name points).<br>
Then, a loop (Repeat) is used to move with the Move L function four times.

- Here, the Move L function uses the Relative Point feature to move by delta_z in the z-direction relative to the previously declared start_point (refer to the relative point function of the linear movement family in the point functions).
- At the end of the loop, the delta_z value is increased by 50 using the Script function (the delta_z variable is declared earlier in the program using the Assign function).

In conclusion, the robot moves to the initial position with Move J, saves that position as start_point, and then moves down by 50mm four times using Move L in the loop.

![missing](/manual/en/programming_guide/4.teaching_icons_detail/96.png)

<div class="warning custom-block">
  <p class="custom-block-title">Warning</p>
  <ol>
    <li>
      The script function is an area where the user can freely write and execute a script.
    </li>
    <li>
      If the users write a script that doesn't match the syntax, the program may malfunction or stop. Be mindful and use the proper syntax when using this feature.
    </li>
  </ol>
</div>

### 34. Assign Function

![missing](/manual/en/programming_guide/icons/36.png)

Declare and designate the value of a variable. Variables can be changed through the program to allow for greater flexibility with conditionals.<br>
A variable can be one of the 5 following types:

- Variable Type: Saves a single numerical (float) variable.
- Array Type: Saves multiple values in a list. The maximum length of the array is 10.
- Point Type: Saves position information (saves x, y, z, Rx, Ry, Rz).
- Joint Type: Saves joint angle information(saves J0, J1, J2, J3, J4, J5).
- String Type: Saves a string (alphabetic and numerical characters – e.g. “ASDF1234”)

When the Assign function is added to the program tree, it will look as shown below.

![missing](/manual/en/programming_guide/4.teaching_icons_detail/97.png)

To assign a variable, click on Assign and a popup will appear. Then, the variable can then be assigned within the popup.<br>
Multiple variables can be declared by clicking the Add button. To save the variable, click on the Set button.<br>
If multiple declarations are made, the program tree will show how many variables of each type were declared.<br>
If a declaration is made, the variable name and initial value will be displayed on the tree as shown below.

![missing](/manual/en/programming_guide/4.teaching_icons_detail/98.png)

An example popup window of the Assign function is shown below.

![missing](/manual/en/programming_guide/4.teaching_icons_detail/99.png)

① Declares the type of variable(Variable, Array, Point, Joint, String).<br>
② Sets the name of the variable.<br>
③ Sets the initial value during the declaration.

- For the Variable Type, the initial value is set as a single number (e.g. 1).
- For the Array type, place initial values within curly braces (e.g., {100, 200, 300}).
- For the Point, Joint type, use curly braces around the initial values, which will be in the form of an array of six lengths, (e.g., {300, 300, 300, 0, 90, 0}).
- For the String type, put use quotations around the string for the initial value (e.g., “hello_rb5”).

④ Button for the Point/Joint type.<br>
The six coordinates (Point : x,y,z,Rx,Ry,Rz / Joint : J0, J1, J2, J3, J4, J5) of the current robot configuration are imported as initial values.

### 35. Monitor Function

![missing](/manual/en/programming_guide/icons/37.png)

This function is used to select variables (single variables, arrays, point variables, etc.) that the user wants to observe in real time while the program is running.<br>
Variables declared in the Monitor function can be viewed by clicking the monitor icon on the right side of the Make / Play page.

![missing](/manual/en/programming_guide/4.teaching_icons_detail/100.png)

In the program example above, a variable named ‘my_count’ is declared. The Repeat function increments ‘my_count’ by 1 every second.<br>
By using the Monitor function, the user can select the ‘my_count’ variable as the object to observe. As shown in the above image, in the Monitoring window, the user can enter the name of the variable to be observed.

If the user wants to observe the value of the monitored variable, they can click the Monitor icon on the right side of the screen.

![missing](/manual/en/programming_guide/4.teaching_icons_detail/101.png)

After that, if the user presses the play (▷) button, they can observe the value of ‘my_count’ increasing every second.

![missing](/manual/en/programming_guide/4.teaching_icons_detail/102.png)

### 36. RS485 Function

![missing](/manual/en/programming_guide/icons/38.png)

This function allows the user to set the RS485/232 output for the tool flange or the control Box. Users can output in ASCII mode, or in HEX mode.<br>
The UI Tablet (Teaching pendant) only supports UI485 Tx. The configuration can be previewed through the Preview button on the right side of the popup window.

<div class="center-align">
    <img src="/manual/en/programming_guide/4.teaching_icons_detail/103.png" />
    <br>
    <figcaption>[ ASCII mode ]</figcaption>
    <br>
    <img src="/manual/en/programming_guide/4.teaching_icons_detail/104.png" />
    <br>
    <figcaption>[ HEX mode ]</figcaption>
</div>

Baud rate and other protocols (Parity bit, Stop bit) for use in Serial-Communication can be set in Setup-Socket/Serial menu. Alternatively, the user can use the Set-Serial Configuration option at the top of the project.<br>
To use serial communication on the box side, plug a commercially available USB-Serial (RS232 / 422/485) device into the USB port.

### 37. Socket Function

![missing](/manual/en/programming_guide/icons/39.png)

The Socket Function allows for socket communication. It provides the user the ability to open sockets to connect, send request messages, and retrieve data to/from specific server.<br>
Socket communication can be connected to at most 5 separate servers. The Socket Function uses the IP settings as defined in the Setup screen. A user that would like to change the IP settings can go to the Setup-Socket/Serial screen.<br>
The Socket Function provides six different options as follows.

![missing](/manual/en/programming_guide/4.teaching_icons_detail/105.png)

![missing](/manual/en/programming_guide/4.teaching_icons_detail/106.png)

- Close: Closes the socket.
- Open : Opens socket and connects with server.
- Read ASCII Variable : Reads a value sent from the server. The user will need to choose a variable to be overwritten with the received value.
- Read ASCII Array : Reads an array sent from the server and puts it into an array type.
- Read String : Reads a string from the server and puts it into a string type.
- Send String : Send the specified string to the server.
- Clear Buffer : Empty the buffer.

#### 37.1 Close

![missing](/manual/en/programming_guide/4.teaching_icons_detail/107.png)

This option closes the selected socket (0~4).

#### 37.2 Open

![missing](/manual/en/programming_guide/4.teaching_icons_detail/108.png)

Opens the selected socket (0~4) and connects to the partner server. This option requires the user to set the IP address and port number of the server they would like to connect to.

#### 37.3 Read ASCII Variable

![missing](/manual/en/programming_guide/4.teaching_icons_detail/109.png)

Allows the user to select one predefined variable (from the Assign Function) and overwrite the value of that variable with a value received from the server.<br>
If you set Continue Read to Enable until successful, you will set a timeout time, which will stop reading after that time.

#### 37.4 Read ASCII Array

![missing](/manual/en/programming_guide/4.teaching_icons_detail/110.png)

Allows the user to select one predefined array (from the Assign Function) and overwrite the values contained within that array with the values of an array sent by the server.

#### 37.5 Read String

![missing](/manual/en/programming_guide/4.teaching_icons_detail/111.png)

This is the function to put the ASCII string received through Socket communication into the selected string variable.

#### 37.6 Send String

![missing](/manual/en/programming_guide/4.teaching_icons_detail/112.png)

Allows the user to send a specific string to the server. Users can enter a string directly in the field or send a predefined string type variable.

#### 37.7 Clear Buffer

![missing](/manual/en/programming_guide/4.teaching_icons_detail/113.png)

Empty all the contents of the buffer for that number.

<div class="warning custom-block">
  <p class="custom-block-title">Warning</p>
  <ul>
    <li>
      The syntax that needs to be followed:<br>
        In order to use the Read ASCII Variable, ASCII Array, and String options provided by the robot manufacturer, the data format received from the server MUST follow the following format.<br>
        If a special communication grammar/syntax is required, please consult with the manufacturer.
    </li>
    <li>
      <b>Read ASCII Variable</b><br>
        When receiving a value from the server, the value must be sent as a numerical value. (i.e. the numerical value hasn’t to be contained within quotation marks)<br>
        (e.g. 123, 4567)
    </li>
    <li>
      <b>Read ASCII Array</b><br>
        When the server wants to send an array, it must send the numbers enclosed in curly braces {}.<br>
        To separate the numbers, a comma (,) must be placed between each number. (i.e. the array must not be sent as a string inside quotes).<br>
        (e.g. {100,200,300})
    </li>
    <li>
      <b>Read String</b><br>
        When the server sends a string, it must be in the format "this_is_string_from_server", including the quotation marks.<br>
        To check the connection status of socket communication or whether a reply has been received, two internal variables are available as shown below.<br>
        Both internal variables can be optionally used in the Shared Data type.<br><br>
          - <b>SD_SOCK_IS_OPEN_#</b> (# represents socket number 0~4)<br>
            This variable stores whether the socket with the corresponding number is successfully opened and connected to the server.<br>
            After Socket-Open, you can check if the socket is properly connected using a condition like If(SD_SOCK_IS_OPEN_0).<br><br>
          - <b>SD_SOCK_LAST_READ_#</b> (# represents socket number 0~4)<br>
            This variable stores whether the Read function has been successfully executed for the corresponding socket number.<br>
            For example, after Socket-ReadAsciiVariable, you can check if the last Read function was successful with a condition like If(SD_SOCK_LAST_READ_0).<br>
            If no data is received from the server, this variable will have a value of 0.
    </li>
  </ul>
</div>

The figure below shows an example of the Socket Function.

![missing](/manual/en/programming_guide/4.teaching_icons_detail/114.png)

### 38. Modbus TCP (Client) Function

![missing](/manual/en/programming_guide/icons/40.png)

Provides the ability to request and receive data from a specific IP / address. Data request frequency and format can be specified.<br>
The port number for Modbus TCP is fixed at 502 (Modbus standard).<br>
The protocols and formats associated with Modbus TCP servers are listed in the Appendix I. The Modbus TCP client function must be added at the top of the program under Pre.P.

![missing](/manual/en/programming_guide/4.teaching_icons_detail/115.png)

① Field for entering the IP address of the server to connect as a Modbus client<br>
② Field for entering an ID for identification<br>
③ Field to select the signal type: Choose one from Read bit (1-bit), Read word (16-bit), Write bit (1-bit), or Write word (16-bit)<br>
④ Field for entering the address value to access on the server<br>
⑤ Field to select the cycle frequency for Read/Write operations (Unit: Hz)<br>
⑥ Field to declare the variable name where the read value will be stored (for Read) or the variable name for output (for Write)<br>
⑦ Initial value of the variable set in step 5<br>
⑧ Button to add the signal to be used

Below is an example of the Modbus Function settings.

![missing](/manual/en/programming_guide/4.teaching_icons_detail/116.png)

- Example 1)<br>
  The ability to read word type information in address 100 of the server (IP: 192.168.0.100) and put it in a variable called mod_return_value. The reading cycle of information is 1 Hz.
- Example 2)<br>
  The ability to write the value stored in mod_write_bit to the address 200 of the server (IP: 192.168.0.100). Send the value of mod_write_bit to the server at a cycle of 100 Hz.

### 39. Interface Function

![missing](/manual/en/programming_guide/icons/41.png)

The interface function is for connecting external devices such as PLC, HMI, and PC with the control box. The list of external devices that can be used using the interface is as follows.

- HMI(MemLink) - Proface, TOP
- PLC(MC Protocol) – Mitsubishi PLC
- Music Player
- PLC(XGT Protocol) - LS Electric PLC
- CSV File
- Pickit
- Modbus Client(Interrupt)
- OMRON PLC(FINS Protocol)
- Siemens PLC(S7 Protocol)
- OnRobot Eye

Because each external device has different detailed features available, you should refer to the following information.

#### 39.1 HMI(MemLink)

<br>

##### 1. Connection Configure

![missing](/manual/en/programming_guide/4.teaching_icons_detail/117.png)

A function that connects communications between the HMI and the RB system. User will enter the socket number, IP address, and port.<br>
User can also decide whether to turn on or ignore alarm pop-up in the event of a connection failure or communication error and set a communication timeout time.

##### 2. Write Single variable

![missing](/manual/en/programming_guide/4.teaching_icons_detail/118.png)

The ability to enter values for one address of HMI. Enter a number or variable name for the transfer value.

##### 3. Read Single variable

![missing](/manual/en/programming_guide/4.teaching_icons_detail/119.png)

The ability to read values from one address in HMI. The read values are stored in the variable you specify (Variable).

##### 4. Write Array

![missing](/manual/en/programming_guide/4.teaching_icons_detail/120.png)

The ability to enter numbers from the starting address of the HMI to the specified number of addresses. The pre-declared array must be written to Array Name and should not exceed the maximum length of the array, 20.

##### 5. Read Array

![missing](/manual/en/programming_guide/4.teaching_icons_detail/121.png)

The ability to read data from the starting address of HMI to the specified number of addresses. The pre-declared array must be written to Array Name and should not exceed the maximum length of the array, 20.

#### 39.2 PLC(MC Protocol)

<br>

##### 1. Connection Configure

![missing](/manual/en/programming_guide/4.teaching_icons_detail/122.png)

A function that connects communications between the Mitsubishi PLC and the RB system. User will enter the socket number, IP address, and port.<br>
User can also decide whether to turn on or ignore alarm pop-up in the event of a connection failure or communication error and set a communication timeout time.

##### 2. Write Single variable

![missing](/manual/en/programming_guide/4.teaching_icons_detail/123.png)

The ability to enter values for one address of PLC. Enter a number or variable name for the transfer value.

##### 3. Read Single variable

![missing](/manual/en/programming_guide/4.teaching_icons_detail/124.png)

The ability to read values from one address in PLC. The read values are stored in the variable you specify (Variable).

##### 4. Write Array

![missing](/manual/en/programming_guide/4.teaching_icons_detail/125.png)

The ability to enter numbers from the starting address of the PLC to the specified number of addresses. The pre-declared array must be written to Array Name and should not exceed the maximum length of the array, 20

##### 5. Read Array

![missing](/manual/en/programming_guide/4.teaching_icons_detail/126.png)

The ability to read data from the starting address of PLC to the specified number of addresses. The pre-declared array must be written to Array Name and should not exceed the maximum length of the array, 20.

#### 39.3 Music Player

![missing](/manual/en/programming_guide/4.teaching_icons_detail/127.png)

This function plays an mp3 file while the program is running. The Music driver must be installed through the RB Driver, and the mp3 file you want to play must exist in the specified path.

#### 39.4 PLC(XGT Protocol)

<br>

##### 1. Connection Configure

![missing](/manual/en/programming_guide/4.teaching_icons_detail/128.png)

A function that connects communications between the LS Electric PLC and the RB system. User will enter the socket number, IP address, and port.<br>
User can also decide whether to turn on or ignore alarm pop-up in the event of a connection failure or communication error and set a communication timeout time.

##### 2. Write Single variable

![missing](/manual/en/programming_guide/4.teaching_icons_detail/129.png)

The ability to enter values for one address of PLC. Enter a number or variable name for the transfer value.

##### 3. Read Single variable

![missing](/manual/en/programming_guide/4.teaching_icons_detail/130.png)

The ability to read values from one address in PLC. The read values are stored in the variable you specify (Variable).

##### 4. Write Array

![missing](/manual/en/programming_guide/4.teaching_icons_detail/131.png)

The ability to enter numbers from the starting address of the PLC to the specified number of addresses. The pre-declared array must be written to Array Name and should not exceed the maximum length of the array, 20

##### 5. Read Array

![missing](/manual/en/programming_guide/4.teaching_icons_detail/132.png)

The ability to read data from the starting address of PLC to the specified number of addresses. The pre-declared array must be written to Array Name and should not exceed the maximum length of the array, 20.

#### 39.5 CSV File

<br>

##### 1. Read String

![missing](/manual/en/programming_guide/4.teaching_icons_detail/133.png)

This function reads a string from a CSV file. The CSV file must be saved within the specified path.

##### 2. Read Variable

![missing](/manual/en/programming_guide/4.teaching_icons_detail/134.png)

This function reads a single number from a CSV file. The CSV file must be saved within the specified path.

#### 39.6 Pickit

<br>

##### 1. Connection Configure

![missing](/manual/en/programming_guide/4.teaching_icons_detail/135.png)

A function that connects communications between the Pickit and the RB system. User will enter the socket number, IP address, and port.<br>
User can also decide whether to turn on or ignore alarm pop-up in the event of a connection failure or communication error.

##### 2. Send Command

![missing](/manual/en/programming_guide/4.teaching_icons_detail/136.png)

Set the command to be sent to Pickit and the data according to the command.

#### 39.7 Modbus Client(Interrupt)

<br>

##### 1. Connection Configure

![missing](/manual/en/programming_guide/4.teaching_icons_detail/137.png)

This is a function that connects the RB system as a client in Modbus communication. User will enter the socket number, IP address, and port.<br>
User can also decide whether to turn on or ignore alarm pop-up in the event of a connection failure or communication error and set a communication timeout time.

##### 2. Write Single variable

![missing](/manual/en/programming_guide/4.teaching_icons_detail/138.png)

This is a function to input word type data to one address through Modbus communication. At this time, enter the name of a number or variable for the transfer value.

##### 3. Read Single variable

![missing](/manual/en/programming_guide/4.teaching_icons_detail/139.png)

This is a function to read the value of one word type data from the address through Modbus communication. At this time, the read value is saved in the assigned variable.

##### 4. Write Array

![missing](/manual/en/programming_guide/4.teaching_icons_detail/140.png)

This is a function to input word data from the start address to the specified number of addresses through Modbus communication.<br>
At this time, the previously declared array should be written in ‘Array Name’ and the length should not exceed 20, the maximum length of the array.

##### 5. Read Array

![missing](/manual/en/programming_guide/4.teaching_icons_detail/141.png)

This function reads data from the start address to the specified number of addresses through Modbus communication.<br>
At this time, the previously declared array should be written in ‘Array Name’ and the length should not exceed 20, the maximum length of the array.

#### 39.8 OMRON PLC(FINS Protocol)

<br>

##### 1. Connection Configure

![missing](/manual/en/programming_guide/4.teaching_icons_detail/142.png)

A function that connects communications between the OMRON PLC and the RB system. User will enter the socket number, IP address, and port.<br>
User can also decide whether to turn on or ignore alarm pop-up in the event of a connection failure or communication error and set a communication timeout time.

##### 2. Write Single variable

![missing](/manual/en/programming_guide/4.teaching_icons_detail/143.png)

The ability to enter values for one address of PLC. Enter a number or variable name for the transfer value.

##### 3. Read Single variable

![missing](/manual/en/programming_guide/4.teaching_icons_detail/144.png)

The ability to read values from one address in PLC. The read values are stored in the variable you specify (Variable).

##### 4. Write Array

![missing](/manual/en/programming_guide/4.teaching_icons_detail/145.png)

The ability to enter numbers from the starting address of the PLC to the specified number of addresses.<br>
The pre-declared array must be written to Array Name and should not exceed the maximum length of the array, 20

##### 5. Read Array

![missing](/manual/en/programming_guide/4.teaching_icons_detail/146.png)

The ability to read data from the starting address of PLC to the specified number of addresses.<br>
The pre-declared array must be written to Array Name and should not exceed the maximum length of the array, 20

#### 39.9 Siemens PLC(S7 Protocol)

<br>

##### 1. Connection Configure

![missing](/manual/en/programming_guide/4.teaching_icons_detail/147.png)

A function that connects communications between the Siemens PLC and the RB system. User will enter the socket number, IP address, and port.<br>
User can also decide whether to turn on or ignore alarm pop-up in the event of a connection failure or communication error and set a communication timeout time.

##### 2. Write Single variable

![missing](/manual/en/programming_guide/4.teaching_icons_detail/148.png)

The ability to enter values for one address of PLC. Enter a number or variable name for the transfer value.

##### 3. Read Single variable

![missing](/manual/en/programming_guide/4.teaching_icons_detail/149.png)

The ability to read values from one address in PLC. The read values are stored in the variable you specify (Variable).

##### 4. Write Array

![missing](/manual/en/programming_guide/4.teaching_icons_detail/150.png)

The ability to enter numbers from the starting address of the PLC to the specified number of addresses.<br>
The pre-declared array must be written to Array Name and should not exceed the maximum length of the array, 20

##### 5. Read Array

![missing](/manual/en/programming_guide/4.teaching_icons_detail/151.png)

The ability to read data from the starting address of PLC to the specified number of addresses.<br>
The pre-declared array must be written to Array Name and should not exceed the maximum length of the array, 20

#### 39.10 OnRobot Eye

<br>

##### 1. Connection Configure

![missing](/manual/en/programming_guide/4.teaching_icons_detail/152.png)

A function that connects communications between the OnRobot Eye and the RB system. User will enter the socket number, IP address, and port.<br>
User can also decide whether to turn on or ignore alarm pop-up in the event of a connection failure or communication error and set a communication timeout time.

##### 2. Send Command

![missing](/manual/en/programming_guide/4.teaching_icons_detail/153.png)

You can send commands to the OnRobot Eye. When you send commands, you can set the timeout by communication timeout.

##### 3. Detect Object

![missing](/manual/en/programming_guide/4.teaching_icons_detail/154.png)

![missing](/manual/en/programming_guide/4.teaching_icons_detail/155.png)

The OnRobot Eye's task number must be pre-set and is intended to execute the set task.<br>
For data obtained through the feature, you can select the properties on the keyboard as Devices and use them in the list.

### 40. Sub.P (Sub Program) Function

![missing](/manual/en/programming_guide/icons/42.png)

This function allows you to insert a pre-made program file (teaching file) into the current document in an editable format.<br>
The "Call as Sub-Program" simply calls another program, while "Copy Command Content" copies the commands from another program and adds them to the main program.<br>
The "Call by program switching method" allows the sub-program to switch to the sub-program's window at the moment it is called and execute it.

![missing](/manual/en/programming_guide/4.teaching_icons_detail/156.png)

For example, you create a file named "sample_prog" as shown below.

![missing](/manual/en/programming_guide/4.teaching_icons_detail/157.png)

Example 1: Calling sample_prog as a sub-program in a new program.

![missing](/manual/en/programming_guide/4.teaching_icons_detail/158.png)

Example 2: Calling sample_prog using the "Copy Command Content" function in a new program.

![missing](/manual/en/programming_guide/4.teaching_icons_detail/159.png)

Example 3: Calling sample_prog using the "Call as Program Switch" function in a new program.

![missing](/manual/en/programming_guide/4.teaching_icons_detail/160.png)

In Example 1, when sample_prog is called as a sub-program, it will be executed, but it will not be editable in the main program.<br>
Additionally, if the called sub-program is modified, the execution of the main program will also be affected.

In Example 2, when using the "Copy Command Content" function, the sub-program is called in an editable format within the main program.<br>
Once copied, any changes made to the original sub-program will not affect the copied content in the main program.

In Example 3, using the "Call as Program Switch" function, you can specify the number of repetitions for the sub-program's execution, and the UI will switch to the sub-program and display the code being executed.

<div class="warning custom-block">
  <p class="custom-block-title">Warning</p>
  <ol>
    <li>
      The contents of a subprogram called by the Sub.P function can be seen by the user, but they cannot be modified. If modifications are required, the project must be opened separately.
    </li>
    <li>
      The Sub.P function can be called up to 10 levels deep. It is not recommended to use recursion with the Sub.P function.
    </li>
  </ol>
</div>

### 41. Pattern Function

![missing](/manual/en/programming_guide/icons/43.png)

This function allows the user to define repetitive behavior.<br>
By defining information about the operation space, and by defining which actions to be performed at each location, the user can set the robot to perform the same action at every point in space.<br>
The user can implement palletizing through this function. There are three sub settings.

- Pattern Property:
  Define the target space for the repetitive motion.
  The property supports various shapes such as straight line, plane, 3D cube, and arbitrary point.
- Pattern Anchor:
  The Reference point of the action defined in the Pattern Action.
- Pattern Action:
  This setting defines the motion relative to the reference point set in the Pattern Anchor. The defined relative behavior is repeated at every pattern point set in the Pattern Property.

1. **[Step 1]** Set the Pattern Property as shown below.

<img src="/manual/en/programming_guide/4.teaching_icons_detail/161.png" width=400 />
<!-- ![missing](/manual/en/programming_guide/4.teaching_icons_detail/161.png) -->

With the above settings, the following repeat points are formed in space.

<div class="center-align">
  <img src="/manual/en/programming_guide/4.teaching_icons_detail/162.png" />
</div>
<!-- ![missing](/manual/en/programming_guide/4.teaching_icons_detail/162.png) -->

2. **[Step 2]** Using the Pattern Anchor and the Pattern Action, define the relative movement as below.

<div class="center-align">
  <img src="/manual/en/programming_guide/4.teaching_icons_detail/163.png" />
</div>
<!-- ![missing](/manual/en/programming_guide/4.teaching_icons_detail/163.png) -->

3. **[Step 3]** Finally, the relative movement set in Step-2 is reflected in all of the pattern points set in Step-1, completing the action of repeating the same action.

![missing](/manual/en/programming_guide/4.teaching_icons_detail/164.png)

### 42. Conveyor Function

![missing](/manual/en/programming_guide/icons/44.png)

Allows the user to use the robot as a conveyor by generating movement at a consistent speed in a specified direction. The user can also place their own desired movement into the conveyor flow by using the Move L, Move PB, or Circle functions.<br>
Joint movement (Move J, Move JB, etc.) cannot be used as a subitem of Conveyor. Move L, Move PB(Formerly Move LB), Move JL, Move ITPL, Circle are supported.

Add the conveyor function to the program tree and click the function to see the options.

![missing](/manual/en/programming_guide/4.teaching_icons_detail/165.png)

① Set the move type and speed of the conveyor.<br>
② Set the direction for the conveyor movement (x, y, z value is based on robot arm base coordinate system).

An example program tree using the Conveyor Function will look as follows:

![missing](/manual/en/programming_guide/4.teaching_icons_detail/166.png)

### 43. Force Function

![missing](/manual/en/programming_guide/icons/45.png)

This is a function for force control. The movements below the force control function automatically change the trajectory to give the set force.

![missing](/manual/en/programming_guide/4.teaching_icons_detail/167.png)

Select and input the desired force control mode, the sensor to be used for force control, and the force control target value.

The left side of the figure below is for normal operation only. The motion starts in the air above the plane and ends in the air.<br>
If you put this action as a sub-item of force control as it is, it will change to the action of pressing the ground with a certain force (when setting the force control to the ground).

![missing](/manual/en/programming_guide/4.teaching_icons_detail/168.png)

<figcaption style="text-align:center;">[(L) Before applying force control / (R) After applying force control]</figcaption>

### 44. Weaving Function

![missing](/manual/en/programming_guide/icons/46.png)

It is a special function for welding weaving. TCP trajectories are automatically changed to set the weaving actions included under the weaving function.<br>
Simply select and enter the desired weaving shape and weaving options.

![missing](/manual/en/programming_guide/4.teaching_icons_detail/169.png)

The left side of the figure below is for normal operation only. If this motion is put as a sub-item of weaving, TCP trajectory reflecting the weaving trajectory is drawn (in the example on the right, in the case of triangle wave weaving).

![missing](/manual/en/programming_guide/4.teaching_icons_detail/170.png)

### 45. Weaving2 Function

![missing](/manual/en/programming_guide/icons/47.png)

![missing](/manual/en/programming_guide/4.teaching_icons_detail/171.png)

The difference between weaving and weaving 2 is that in the case of weaving, the surface to be welded and the surface to be welded are set as set points, and weaving 2 implements weaving motion based on the frame of the TCP.

### 46. Touch Sensing (TouchSen.) Function

![missing](/manual/en/programming_guide/icons/48.png)

Touch sensing is intended to utilize welding applications. Detects the movement of the base material and reflects the direction of movement of the base material and is used for welding.<br>
A detailed description of this feature is provided in a separate manual.

![missing](/manual/en/programming_guide/4.teaching_icons_detail/172.png)
