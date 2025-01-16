---
layout: doc
outline: deep
---

# Teaching (Programming)

### 1. Ways to Move the Robot

There are two ways to drive the robot.

- Direct-Teaching: When a user manually rotates each joint to change the pose of the robot.
- Jogging: When a user uses the jog buttons in the UI to move the robot.

### 2. Direct-teaching / Gravity Compensation

![missing](/manual/en/programming_guide/3.create_user_program/1.png)

For ‘Direct-Teaching’, a user must press and hold the mechanical button located on the tool flange.<br>
Pressing this button allows each joint to move freely.

<div class="warning custom-block">
  <p class="custom-block-title">Warning</p>
  <ol>
    <li>
      ‘Direct-Teaching’ can be used only when the robot is initialized and activated.
    </li>
    <li>
      The load value in ‘Setup-Tool’ should be set prior to using ‘Direct-Teaching’ when a tool is installed at the tool flange.
      Without a proper value of the load, ‘Direct-Teaching’ may not work properly.
    </li>
    <li>
      In ‘Setup-Interface’, the sensitivity of joint reaction can be adjusted.
    </li>
    <li>
      Please ensure that the robot is not moving before using ‘Direct-Teaching’.
    </li>
  </ol>
</div>

### 3. Jogging

![missing](/manual/en/programming_guide/3.create_user_program/2.png)

There are four modes of jogging.

<div class="center-align th-align">
  <table>
    <tr>
      <th style="display: flex; align-items: center; white-space: pre">
        Mode 1 <img src="/manual/en/programming_guide/icons/57.png" />
      </th>
      <td>
        TCP Movement in the Cartesian coordinate system with respect to the base (global) frame.
      </td>
    </tr>
    <tr>
      <th style="display: flex; align-items: center; white-space: pre">
        Mode 2 <img src="/manual/en/programming_guide/icons/58.png" />
      </th>
      <td>
        TCP Movement in the Cartesian coordinate system with respect to the tool (local) frame.
      </td>
    </tr>
    <tr>
      <th style="display: flex; align-items: center; white-space: pre">
        Mode 3 <img src="/manual/en/programming_guide/icons/59.png" />
      </th>
      <td>
        TCP Movement in the Cartesian coordinate system with respect to the user coordinate frame.
      </td>
    </tr>
    <tr>
      <th style="display: flex; align-items: center; white-space: pre">
        Mode 4 <img src="/manual/en/programming_guide/icons/60.png" />
      </th>
      <td>
        Angular joint movement.
      </td>
    </tr>
  </table>
</div>

![missing](/manual/en/programming_guide/3.create_user_program/3.png)

There two ways to control jogging:

- Smooth: Use for continuous motion of the robot. When the ‘+’ or the ‘-‘ button is pressed and held, the robot moves continuously until the button is released.
- Tick: Use for discontinuous motion of the robot. The robot will move a specific amount as defined by the user each button click.

:::tip

- The control method for jogging can be selected via a toggle button located in the top right in ‘Make’ screen.<br>
- In ‘Setup-Interface’, a user can specify the amount of movement for each ‘Tick’ button press.<br>
  Or it can be directly changed in pop-up window as below.

![missing](/manual/en/programming_guide/3.create_user_program/4.png)

:::

:::warning

1. Make sure that there are no obstacles or people in the robot’s workspace before the use of jogging.
2. It is highly recommended to use the ‘Safety Slider’ feature in ‘Setup-Interface’. This feature is activated as a factory default.
   :::

<div class="center-align">
  <img src="/manual/en/programming_guide/3.create_user_program/5.png" />
  <br>
  <label>[ Jog Mode 1: TCP jog w/ Global coordinate ]</label>
  <br>
  <img src="/manual/en/programming_guide/3.create_user_program/6.png" />
  <br>
  <label>[ Jog Mode 2: TCP jog w/ Local coordinate ]</label>
  <br>
  <img src="/manual/en/programming_guide/3.create_user_program/7.png" />
  <br>
  <label>[ Jog Mode 3: TCP jog w/ User coordinate ]</label>
  <br>
  <img src="/manual/en/programming_guide/3.create_user_program/8.png" />
  <br>
  <label>[ Jog Mode 4: Joint jog w/ joint coordinates ]</label>
</div>

### 4. Real Robot and Simulation Modes

Two Modes are available for testing the robot’s movement.

![missing](/manual/en/programming_guide/3.create_user_program/9.png)

- Simulation Mode:<br>
  Allows the user to virtually move the robot arm on the UI screen without moving the actual robot.<br>
  It is recommended to run simulation mode first for safety reasons before teaching a new motion.
- Real Robot Mode:<br>
  Drives the real robot as displayed on the UI screen.

<div class="warning custom-block">
  <p class="custom-block-title">Warning</p>
  <ol>
    <li>
      Real Robot mode is only available when the robot is connected and activated.
    </li>
    <li>
      Simulation mode only requires the provided tablet and the control box. It does not require the robot arm.
    </li>
    <li>
      When using Real Robot mode, please make sure that the nearby environment is clear & safe before operating, as the robot will move.
    </li>
  </ol>
</div>

### 5. Teaching Robot Movement

<p style="display:flex; align-items:center; white-space:pre">
    The basic robot teaching functions are
     <img src="/manual/en/programming_guide/icons/1.png" width=50 /> <b> Move</b> and
     <img src="/manual/en/programming_guide/icons/2.png" width=50 /> <b> Point.</b></p>

Both icons are on the top bar when using the **Make** screen.

- **Move**: Defines motion property for the robot arm.
- **Point**: A sub-function of **Move**. Defines a destination position for each movement.

After using the **Move** and **Point** functions in an empty program, the script field in the UI will look like the following.

![missing](/manual/en/programming_guide/3.create_user_program/10.png)

### 6. Move Function

![missing](/manual/en/programming_guide/3.create_user_program/11.png)

Move sets the robot arm's motion properties.<br>
The two primary types of movements are **Joint** and **Linear**.<br>
These types are further broken down into commands, as shown in the figure above.

#### 6.1 Joint Movement Type

The Joint Movement Commands generate movement by setting the angular value of each individual joint (in degrees). The sub-elements are Move J and Move JB.

- Move J (Move Joint):<br>
  Sets each joint angle to the values contained within the target Point.<br>
  The movement speeds for all joints are slowed relative to the joint that requires the most movement time.

- Move JB (Move Joint Blend):<br>
  Starting from the initial arm configuration, the arm will move smoothly between each Point without stopping by using the Move J method.<br>
  Move JB has two modes: time-based blend and direction-based blend.

#### 6.2 Linear Movement Type

The Linear Movement Commands generate movement by setting the position of the TCP in the Cartesian coordinate system.<br>
These commands use Cartesian coordinates (x,y,z coordinate values and rotations) as the target values for the movement.<br>
Sub-elements include Move L, Move PB (formerly Move LB), Move JL, Move ITPL, and Move Pro.

- Move L (Move Linear):<br>
  The TCP moves in a straight line from the starting point (current position) to the target point (set position).<br>
  The tool's orientation rotates with the least possible angle.<br>
  For tasks where the TCP movement and orientation change take a significant amount of time, the speed of other tasks is adjusted accordingly.

- Move PB (Move Point Blend, Old Move LB):<br>
  The TCP moves smoothly from the starting point (current position) between points using the Move L method without stopping.<br>
  A blend distance is assigned to each point, cutting and connecting the previous and next paths with an arc, allowing the TCP to follow a smooth trajectory.<br>
  If the designated blend distance is larger than half the length of the adjacent paths, it is automatically adjusted to half the length of the shorter path.<br>
  The blend ratio at each via point can be set in distance units or as a percentage (%). Additionally, the speed can be configured individually for each via point.

  Move PB has three modes:<br>
  Constant Mode: The tool’s orientation remains the same as it was at the starting point (current position) during movement.<br>
  Intended Mode: The tool’s orientation changes according to the saved orientation at each point.<br>
  Smooth Mode: Unlike Intended Mode, where the rate of change in X, Y, Z, and orientation remains constant, Smooth Mode has a lower rate of change in orientation as it approaches the start and end points.

- Move JL (Move J with Linear Input):<br>
  Like Move L, the Cartesian value of the target point is used as input.<br>
  However, instead of going straight to the point, it uses Move J's method.<br>
  When the Cartesian coordinate system input is received, it is converted into the target joint angle through inverse kinematics and inputted again to Move J.

- Move ITPL (Move Interpolation):<br>
  The TCP moves smoothly from the starting point (current position) between points using the Move L method without stopping.<br>
  While Move PB blends paths without passing through each waypoint exactly, Move ITPL moves along a trajectory that passes through each waypoint precisely, and thus does not require a separate blend setting.<br>

  Move ITPL has six modes:<br>
  Constant Mode: The tool’s orientation remains the same as it was at the starting point (current position) during movement.<br>
  Intended Mode: The tool’s orientation changes according to the saved orientation at each point.<br>
  Smooth Mode: Unlike Intended Mode, where the rate of change in X, Y, Z, and orientation remains constant, Smooth Mode has a lower rate of change in orientation as it approaches the start and end points.<br>
  Additionally, the speed can be configured individually for each intermediate waypoint.

- Move Pro (Move Process):<br>
  The TCP moves smoothly from the starting point (current position) between points using the Move L method without stopping.<br>
  Cartesian coordinate values (X, Y, Z, etc.) are used as input values, and blend radii or blend ratios can be set at intermediate waypoints. The speed can also be configured individually for each waypoint.<br>
  By using general points and corner points, the TCP moves smoothly along a trajectory that precisely passes through each waypoint.<br>
  Move Pro has three modes, similar to Move PB: Constant, Intended, and Smooth Modes.

### 7. Difference between Move J and Move L

![missing](/manual/en/programming_guide/3.create_user_program/12.png)

Move J does not consider the movement trajectory of the terminal (TCP).<br>
It is an operation that only uses the joint angle information of the starting point and the joint angle of the target point.<br>
The driving speed of other joints are adjusted to the joints that require the most driving time.

Move L is a mode that uses inverse kinematics to move the trajectory of the terminal (TCP) linearly from the starting point to the target point.<br>
6 Cartesian coordinate values (x, y, z, Rx, Ry, Rz) are the inputs for the target point value.

### 8. Difference between Move L, Move PB, and Move ITPL

![missing](/manual/en/programming_guide/3.create_user_program/13.png)

Move L moves in a straight, linear path between the start and destination points.<br>
The arm will arrive at each sequential arrival Point, stop, and then continue to the next Point.

Move PB starts at the initial Point, uses each intermediate Point as a waypoint, then stops at the final Point.<br>
The arm will not stop at the specified waypoints.<br>
Instead, it will arc around each point according to the blend distance, and then continue without stopping.

Move ITPL, the points other than the arrival point move to the waypoint, creating a trajectory that passes exactly through the waypoint.<br>
The trajectory is created without stopping and a separate speed setting is possible for each waypoint.

<div class="warning custom-block">
  <p class="custom-block-title">Warning</p>
  <ol>
    <li>
      The five linear motion commands (Move L, Move PB (Formerly Move LB), Move JL, Move ITPL, Move Pro) move the robot using inverse kinematics calculations.<br>
      Therefore, movement may be limited in singularity positions where inverse kinematics calculations are not possible.
    </li>
    <li>
      Certain joints may move faster or be restricted in motion while in the dead zone of the robot.<br>
      Further information about dead zones can be found in Section 1.7.
    </li>
  </ol>
</div>

### 9. Changing Move Function Commands

When the Move Function is used for the first time in a program, the program tree will be created as shown below. By default, the Move function is set to Move J.

![missing](/manual/en/programming_guide/3.create_user_program/14.png)

Click Move J in order to change the Move command type. A popup will appear as shown below.

![missing](/manual/en/programming_guide/3.create_user_program/15.png)

<!-- ※ 위 그림의 각 동작 기능들은 동작의 기능임. -->

Select the desired movement type and click close to change the movement type.<br>
An example of a teaching program is shown below.

![missing](/manual/en/programming_guide/3.create_user_program/16.png)

<table class="th-align">
  <tr>
    <th>Move J, Move JB</th>
  </tr>
  <tr>
    <td>
      The arm moves to the joint angle configuration contained within each Point. Each angle value is relative to the base position.<br>
      ※	Since the robot arm consists of six joints, the Move J and Move JB functions will move all six joints based on the configuration contained within each Point.
    </td>
  </tr>
  <tr>
    <th>Move L, Move PB (formerly Move LB), Move JL, Move ITPL, Move Pro</th>
  </tr>
  <tr>
    <td>
      The arm moves relative to or directly to a target TCP position contained within each Point. Each Point determines a target location within the Cartesian coordinate system for the TCP to pass through.<br>
      ※	Since the Cartesian coordinate system consists of six values (x, y, z, Rx, Ry, Rz), all six values will need to be set as subitems of Move L, Move PB, Move JL, Move ITPL and Move Pro.
    </td>
  </tr>
</table>

### 10. Point Function

![missing](/manual/en/programming_guide/3.create_user_program/10.png)

As explained earlier, the Point function is a sub-function of the Move function.<br>
Move specifies the properties of the motion, whereas Point is responsible for setting the target position.

In the Point function, the target value will vary depending on the command type of the Move function.

- Joint Movement Type(Move J, Move JB) Point:<br>
  Contains the target joint angle values (in degrees) for all six joints

- Linear Movement Type(Move L, Move PB (formerly Move LB), Move JL, Move ITPL, Move Pro) Point:<br>
  Contains the target destination point (in Cartesian coordinates) for the TCP.

When a user taps on a Point in the program tree, the Point function popup window will appear. The window contains the following fields:

![missing](/manual/en/programming_guide/3.create_user_program/18.png)

Each area is described in the table below.

<table class="th-align">
  <tr>
    <th>Section</th>
    <th>Description</th>
  </tr>
  <tr>
    <th>①</th>
    <td>
      Sets the name of the point (not required).<br>
      After setting the name, the location information of the point can be used as a variable later.
    </td>
  </tr>
  <tr>
    <th>②</th>
    <td>
      Allows a user to select the setting type of the point function.<br>
      - The Joint Move has three setting options.<br>
      - The Linear Move has four setting options.<br>
      - The default type when creating a Point is ‘Absolute’.
    </td>
  </tr>
  <tr>
    <th>③</th>
    <td>Sets the speed and acceleration of arm movements to the location.</td>
  </tr>
  <tr>
    <th>④</th>
    <td>
      Updates the Point information with the current robot position.<br>
      - After moving the robot to the desired position/posture, press Get to store the information.<br>
      - To save the Point at the current position/posture, press the Set button (Section 8).<br>
      Depending on the Point type (Section 2), the Get button may or may not supported.
    </td>
  </tr>
  <tr>
    <th>⑤</th>
    <td>
      Moves the arm to the specified Point.<br>
      - Must hold down the button to move the arm to the saved position.<br>
      - The movement is a joint movement type. When the movement is completed, a pop up message will be shown.<br>
      Depending on the Point type (Section 2), button may or may not supported.
    </td>
  </tr>
  <tr>
    <th>⑥</th>
    <td>
      Moves the arm to the specified Point.<br>
      - Must hold down the button to move the arm to the saved position.<br>
      - The movement is a linear movement type. When the movement is completed, a pop up message will be shown.<br>
      Depending on the Point type (Section 2), button may or may not supported.
    </td>
  </tr>
  <tr>
    <th>⑦</th>
    <td>
      Specify an escape condition (Finish At) and an escape time (Stopping Time) for the action. Not a required input.<br>
      - If the input is left blank, the operation will end normally after reaching the target point.<br>
      - Once the escape condition is satisfied, the operation stops according to the escape time and continues to the next action.<br>
      The minimum escape time is 0 seconds.
    </td>
  </tr>
  <tr>
    <th>⑧</th>
    <td>Saves the changed settings.</td>
  </tr>
  <tr>
    <th>⑨</th>
    <td>Closes the Settings window. Will not save user input without pressing the Set button (Section 8).</td>
  </tr>
</table>

※ An example using the Get function (Section 4) is shown below.

1. Use the jog / direct teach function to move to the desired posture / position

   ![missing](/manual/en/programming_guide/3.create_user_program/19.png)

2. Get current posture / location information by pressing Get button

   ![missing](/manual/en/programming_guide/3.create_user_program/20.png)

3. Save after confirming reflection

   ![missing](/manual/en/programming_guide/3.create_user_program/21.png)

※ An example using the Finish at/Stopping time option (Section 6) is shown below.

1. When not using the Finish at function (If left blank)<br>
   End of motion after arrival to original set target point, execute next command

   ![missing](/manual/en/programming_guide/3.create_user_program/22.png)

2. When using the Finish at function (When entering a specific conditional expression)<br>
   Even if the target point is not reached, the operation is terminated when the Finish at condition occurs and the next command is executed.<br>
   If condition does not occur during operation, execute the next command after reaching the target point normally.

   ![missing](/manual/en/programming_guide/3.create_user_program/23.png)

#### 10.1 Setting options by Move type

The following setting options exist for each type of move function.

<table class="th-align">
  <tr>
    <th colspan=3>Joint Move Type’s sub Point</th>
  </tr>
  <tr>
    <th rowspan=3>Option</th>
    <th>Absolute</th>
    <td>
      Sets the Points for Move J by using fixed, user defined joint angles.<br>
      Requires the user to set the desired posture/joint angle configuration through the Get function.
    </td>
  </tr>
  <tr>
    <th>Variable</th>
    <td>
      Sets the Points for Move J by using one of several methods.<br>
      Allows the user to set the desired posture/joint angle configuration through the Get function.<br>
      The user can also change a joint angle by setting it to a variable or a mathematical operation.
    </td>
  </tr>
  <tr>
    <th>Relative</th>
    <td>
      Sets the Points for Move J by changing the joint angles relative to the previous angle position.<br>
      If a joint movement is set to zero, then that joint will not move.<br>
      If all are set to zero, then the robot will not move.<br>
      The user can also change a joint angle by entering a variable or mathematical operation
    </td>
  </tr>
</table>

<table class="th-align">
  <tr>
    <th colspan=3>Linear Move Type’s sub Point</th>
  </tr>
  <tr>
    <th rowspan=4>Option</th>
    <th>Absolute</th>
    <td>
      Sets the Points for Move L by using fixed, user defined Cartesian coordinate values.<br>
      After moving the robot's TCP, Cartesian coordinate values through the Get function can be set.<br>
      The default Cartesian coordinate system for the Absolute Point Type is the base coordinate system of the robot arm (manufacturer's default coordinate system).
    </td>
  </tr>
  <tr>
    <th>Variable</th>
    <td>
      Sets the Points for Move L by using one of several methods. target Cartesian coordinate value.<br>
      Allows the user to set the Points for Move L by using fixed, user defined Cartesian coordinate values.<br>
      The user can also change the TCP Point by setting it to a variable or a mathematical operation.
    </td>
  </tr>
  <tr>
    <th>Relative</th>
    <td>
      Sets the Points for Move L by setting the relative distance/offset from the previous Point.<br>
      The user can also choose a user defined Reference Point from which to move. The default value is PT_LAST_TCP, which indicates the last arrival point.<br>
      In Reference Frame, the user can specify which coordinate system use for relative movement.<br>
      The default value is Frame_Base, which represents the base coordinate system of the robot arm.<br>
      The user can choose change s to the user coordinate system or the tool's local coordinate system.<br>
      In addition, the user can set a point by using a variable or a mathematical operation.
    </td>
  </tr>
  <tr>
    <th>User<br>Coordinate</th>
    <td>
      Similar to Variable, but sets a target point based on a user defined coordinate system.<br>
      Allows the user to select the user coordinate system as a reference by setting the Reference Frame.<br>
      Select the desired reference coordinate system and use the Get function to automatically enter the robot's pose/position information based on the selected coordinate system.<br>
      For example, if the user’s coordinate system 0 is selected and 0 is entered in all Cartesian coordinate values, TCP moves to the origin of the user coordinate system.<br>
      In addition, the user can set a point by using a variable or a mathematical operation.
    </td>
  </tr>
</table>

The figure below shows each different type of Point as it displays in the UI.

#### 10.2 Joint Move Type UI Configuration

- Joint Type - Absolute point

  ![missing](/manual/en/programming_guide/3.create_user_program/24.png)

  ① Absolute Option point.<br>
  ② The robot's posture/angle value is saved through Get button.

- Joint Type - Variable point

  ![missing](/manual/en/programming_guide/3.create_user_program/25.png)

  ① Variable Option point.<br>
  ② Allows the user to enter the joint angle for the target posture or enter the parameterized information as an equation.

- Joint Type - Relative point

  ![missing](/manual/en/programming_guide/3.create_user_program/26.png)

  ① Relative Option point.<br>
  ② Allows the user to enter how much each joint should move relative to the previous joint angle.
  All angles are in degrees. In addition, it allows the user to enter parameterized information or formulas.

#### 10.3 Linear Move Type UI Configuration

- Linear Type - Absolute point

  ![missing](/manual/en/programming_guide/3.create_user_program/27.png)

  ① Absolute Option point.<br>
  ② Allows the user to save a posture/position by using the Get/Save button. The reference coordinate system of the Cartesian coordinate system value is the robot base coordinate system.

- Linear Type - Variable point

  ![missing](/manual/en/programming_guide/3.create_user_program/28.png)

  ① Variable Option point.<br>
  ② Allows the user to enter the target Cartesian coordinate values. The user can also enter parameterized information as formulas. The reference coordinate system of the set Cartesian coordinate values is the base coordinate system of the robot arm.

- Linear Type - Relative point

  ![missing](/manual/en/programming_guide/3.create_user_program/29.png)

  ① Relative Option point.<br>
  ② Requires the user to enter the distance/angle offset relative to the reference point. Also allows users to enter variable information.<br>
  ③ Allows a user to select a user defined point from which to move. The default value is PT_LAST_TCP, which indicates the last arrival point.<br>
  ④ Chooses a coordinate system to specify relative movement. The default value is Frame_Base, which represents the base coordinate system of the robot arm.
  The user is also able to choose the user coordinate system or the tool's local coordinate system.

- Linear Type - User coordinate point

  ![missing](/manual/en/programming_guide/3.create_user_program/30.png)

  ① User Coordinate Option point.<br>
  ② The User Coordinate Option is similar to Variable, but it allows the user to set the target point based on a previously defined user coordinate system.
  Users can also enter variable information.<br>
  ③ Selection box for the user coordinate system that the user would like to use as a reference.<br>
  ④ The Get button will load in the robot's current posture/position information based on the selected coordinate system.

<div class="warning custom-block">
    <p class="custom-block-title">Warning</p>
    <ol>
      <li>
        A user coordinate system can be set through the Coordinate menu in the Setup screen or by using the Setting function in the Make screen.
      </li>
      <li>
        Up to 3 user coordinate systems can be set and used.
      </li>
      <li>
        The factory default user coordinate system is the same coordinate system as the robot base coordinate system.
      </li>
    </ol>
</div>

### 11. Changing Movement Properties

The following conditions apply when changing the action properties (type of move) of a configured action.

- Switching in the same series can be done without any restrictions.
- Switching to another types (Move Joint types -> Move Linear types / Move Linear types -> Move joint types), can be done only when the type (option) of Point function is used as Absolute.

![missing](/manual/en/programming_guide/3.create_user_program/31.png)

### 12. Example of Basic Program Creation

The following is an example of creating and running a simple program based on the above Move and Point functions.

1. **[Step 1]** Create a new project.

   ![missing](/manual/en/programming_guide/3.create_user_program/32.png)

2. **[Step 2]** Click the Move function to add a Move command to the program tree.<br>
   The default command will be Move J. A Point function will also be added to the tree as shown below.

   ![missing](/manual/en/programming_guide/3.create_user_program/33.png)

3. **[Step 3]** Using the Jog button, move the robot to its intended position.<br>
   In this example, the robot was moved to the following joint angle: [Base:0’, Shoulder:0’, Elbow:90’, Wrist1:-90’, Wrist2:90’, Wrist3:0’].<br>
   Click on a Point in the program tree to display the Point setting popup window as shown below.

   ![missing](/manual/en/programming_guide/3.create_user_program/34.png)

4. **[Step 4]** In the Point popup window, click the Get button to update the fields with the current robot posture/angles.<br>
   The posture angle that was moved at the end is taken. Press Set to save this Point.

   ![missing](/manual/en/programming_guide/3.create_user_program/35.png)

5. **[Step 5]** After saving the point, the UI will look as follows.

   ![missing](/manual/en/programming_guide/3.create_user_program/36.png)

6. **[Step 6]** Repeat steps 1~4 several times to teach the robot the desired motion.<br>
   Our completed example program will look like the following.

   ![missing](/manual/en/programming_guide/3.create_user_program/37.png)

7. **[Step 7]** After the program is finished, run it on the work screen by pressing the play (▷) button.<br>
   To run the movements using the simulation arm, use the Simulation mode. To run the movements using the real robot arm, use Real Robot mode.

   After clicking the play button (▷), the robot will move to its initial position as shown below.

   ![missing](/manual/en/programming_guide/3.create_user_program/38.png)

   By holding down the Approach button, the robot arm will move to the initial position for the program.<br>
   Once the robot reaches its starting position, a pop-up message will confirm to the user that the robot has reached its starting position.

   ![missing](/manual/en/programming_guide/3.create_user_program/39.png)

8. **[Step 8]** After receiving the popup in Step 7, the program is ready to run.<br>
   Click the play button at the bottom again to run the program.

   ![missing](/manual/en/programming_guide/3.create_user_program/40.png)

   The image below shows the program running.

   ![missing](/manual/en/programming_guide/3.create_user_program/41.png)

<div class="warning custom-block">
  <p class="custom-block-title">Warning</p>
  <ul>
    <li>
      The Point that the robot is current moving towards will be displayed as yellow in the program tree.
    </li>
  </ul>
</div>

### 13. Initial Movement Position

The initial position can be modified in the Begin section of the program.<br>
When running a robot using the tablet UI, before running a program that contains movement, the robot must return to the initial position.<br>
The initial position can be changed by the following way.

1.  Move the robot to the desired starting position using either the Jog or teaching button.
2.  Click Begin in the Program Tree to open the Begin menu.
3.  Click the Get button to record the current posture, then click the Set button to save the position.
4.  You can also start the program without moving to the Begin position using the disable function in the lower right corner.

![missing](/manual/en/programming_guide/3.create_user_program/42.png)

<div class="warning custom-block">
  <p class="custom-block-title">Warning</p>
  <ol>
    <li>
      When the program is first created, the default starting angles will all be set to zero.
    </li>
    <li>
      The Home Position Disable feature should be used with care as it allows you to start the program in any position.
    </li>
  </ol>
</div>

### 14. Collision detection during operation

The RB Series has two built-in collision detection functions:

- External Collision Detection (Out-Collision Detection)
- Internal Collision Detection (Self-Collision Detection)

![missing](/manual/en/programming_guide/3.create_user_program/43.png)

<figcaption style="text-align:center;">[ (L) External Collision / (R) Internal Collision ]</figcaption>

<br>

#### 14.1 External Collision (Out Collision Detection)

- Detects unplanned external collisions.
- Detects unexpected collisions with the environment, including people.
- Collision sensitivity can be changed in the Setup.
- The user can change the collision sensitivity in real time while the program is running through the Set function.
- For accurate collision detection, the load / center of mass of the tool should be set accurately.
- When operating with high sensitivity collision detection setting, a regular motion could be recognized as a collision due to the sudden acceleration / deceleration of the robot.

If the robot arm detects an external collision while in real mode, the following pop-up will appear.

![missing](/manual/en/programming_guide/3.create_user_program/44.png)

- Resume: Checks the status and continues robot operation.
- Halt: Exits the program.

Alternatively, tap (hit) on the robot arm twice to continue the operation. This will perform the same function as the Resume button.

![missing](/manual/en/programming_guide/3.create_user_program/45.png)

#### 14.2 Internal Collision Detection (Self-Collision Detection)

- Occurs when the robot predicts that it will collide with itself.
- If the robot extends beyond the preset Workspace limits, it will stop by itself. The setup for the surrounding environment area is done in the Setup screen.
- Users can also set a virtual box for collision detection. This will cause the robot to stop itself if either the virtual box is expected to collide with itself or it goes out of the Workspace. The virtual box is configured in the Setup-Tool.

The image below shows a situation where the user caused the robot to crash into itself. Just before colliding into itself, the robot will stop, prompting the UI to display a warning in red.

![missing](/manual/en/programming_guide/3.create_user_program/46.png)

The image below shows a situation where the robot is about to leave the user-defined Workspace. Just before leaving the Workspace, the robot will stop, prompting the UI to display a warning in red.

![missing](/manual/en/programming_guide/3.create_user_program/47.png)

The image below shows a situation where the virtual collision box set up by the user detects / predicts a collision. The robot will stop, prompting the UI to display a warning in red.

![missing](/manual/en/programming_guide/3.create_user_program/48.png)

If the robot stops during operation in real mode, please move the robot arm to a safe position before continuing work.
