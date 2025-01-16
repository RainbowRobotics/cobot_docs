---
layout: doc
outline: deep
---

# Icons and Action Screen

### Make

Description of components in Make screen display

<div class="center-align th-align">
  <img src="/manual/en/programming_guide/1-1.png" />
  <table>
    <tr>
      <th>Num</th>
      <th>Description</th>
    </tr>
    <tr>
      <th>①</th>
      <td>Show the program list in tree form.</td>
    </tr>
    <tr>
      <th>②</th>
      <td>Shows the angle of each joint of the robot arm and the Cartesian coordinate position of the TCP.</td>
    </tr>
    <tr>
      <th>③</th>
      <td>TCP Jog: can change the Cartesian coordinate position. (base/tool/user defined coordinate system Selectable)<br>
          Joint: Jog: can change the angle of each joint.</td>
    </tr>
    <tr>
      <th>④</th>
      <td>Button to switch to Simulation or Real mode.<br>
          ※Real mode must be selected to drive the real robot arm.</td>
    </tr>
    <tr>
      <th>⑤</th>
      <td>Can import saved projects and create new projects.</td>
    </tr>
    <tr>
      <th>⑥</th>
      <td>Starts or stops the program and exists Motion Speed Adjustment Bar.</td>
    </tr>
    <tr>
      <th>⑦</th>
      <td>Various editing tools are located, such as Copy/Paste/Annotations.</td>
    </tr>
    <tr>
      <th>⑧</th>
      <td>Various program functions (command/action) are deployed.<br>
          Click the arrow on the right to include more functions.</td>
    </tr>
    <tr>
      <th>⑨</th>
      <td>Determines Jog Method – either Smooth Mode or Tick Mode.</td>
    </tr>
  </table>
</div>

:::tip

- Teaching: programming RB’s motion by means of moving the robot by hand
- TCP (Tool Center Point): The point defined for the tool center point within the robot’s base coordinate system. It may also be the origin of the end-effector.

:::

<div class="center-align">
  <figure>
    <img src='/manual/en/programming_guide/1-2.png' alt='missing' />
    <br>
    <figcaption style="text-align: center;">[ Basic View Mode ]</figcaption>
  </figure>
  <br>
  <figure>
    <img src='/manual/en/programming_guide/1-3.png' alt='missing' />
    <br>
    <figcaption style="text-align: center;">[ Icon Extended View Mode ]</figcaption>
  </figure>
  <br>
  <figure>
    <img src='/manual/en/programming_guide/1-4.png' alt='missing' />
    <br>
    <figcaption style="text-align: center;">[ Program-only Mode ]</figcaption>
  </figure>
</div>

<br>

#### 1. Teaching Icon (Function Icon, Make screen)

<div class="center-align th-align">  
  <table>
    <tr>
      <th>Icon</th>
      <th>Description</th>
    </tr>
    <tr>
      <th><img src="/manual/en/programming_guide/icons/1.png" /></th>
      <td>
        You can set the movement methods for the robot arm for teaching.<br>
        There are two types of movements: Move J,<br>
        which moves each joint to the specified target joint angles,<br>
        and Move L, which moves the TCP linearly to the specified target TCP values.<br>
        Additionally, there are four other movements that can be applied based on<br>
        these two basic movements: Move JB, Move PB, Move JL,<br>
        Move ITPL, and Move Pro, making a total of seven built-in movements.
      </td>
    </tr>
    <tr>
      <th><img src="/manual/en/programming_guide/icons/2.png" /></th>
      <td>
        This feature allows you to input the target values as sub-items of the movements.<br>
        For Move J and Move JB, the target values are the joint angle values.<br>
        For Move L, Move PB, Move JL, Move Pro, and Move ITPL, the target values are<br>
        the orthogonal coordinates of the TCP (x, y, z, rx, ry, rz).
      </td>
    </tr>
    <tr>
      <th><img src="/manual/en/programming_guide/icons/3.png" /></th>
      <td>
        In addition to the Move, there is a feature specifically for circular motion.<br>
        It includes a mode for drawing an arc by specifying a starting point<br>
        and two additional points, forming an arc that passes through all three points.<br>
        There is also a mode that allows you to draw a circle by setting a center point<br>
        and a rotation axis.
      </td>
    </tr>
    <tr>
      <th><img src="/manual/en/programming_guide/icons/4.png" /></th>
      <td>
        This is a function that can be used by storing certain posture/position information<br>
        as a variable and then referring to (calling) another motion function.<br>
        However, this function itself does not move to that position.
      </td>
    </tr>
    <tr>
      <th><img src="/manual/en/programming_guide/icons/5.png" /></th>
      <td>
        This is the pin joint feature used to store and assign specific joint angle values as variables.<br>
        It does not move to the specified location.<br>
        Instead, the joint angle values are saved as variables and can be referenced (called)<br>
        in other motion functions for use.
      </td>
    </tr>
    <tr>
      <th><img src="/manual/en/programming_guide/icons/6.png" /></th>
      <td>
        This function moves the robot to either the starting position of the program or<br>
        the zero position of the robot's joints.<br>
        The movement method can be chosen between Move J and Move L.
      </td>
    </tr>
    <tr>
      <th><img src="/manual/en/programming_guide/icons/7.png" /></th>
      <td>
        This function allows the robot to wait for a specified condition or amount of time.<br>
        There are 5 modes available:<br>
        waiting for a specified time, waiting while a condition is true,<br>
        ending the wait when a condition becomes true,<br>
        waiting while an input condition is true, and<br>
        ending the wait when an input condition becomes true.
      </td>
    </tr>
    <tr>
      <th><img src="/manual/en/programming_guide/icons/8.png" /></th>
      <td>
        This feature helps organize program commands into modules by grouping them under sub-items.<br>
        Each folder can be named differently, making it easier to manage the program.
      </td>
    </tr>
    <tr>
      <th><img src="/manual/en/programming_guide/icons/9.png" /></th>
      <td>
        This icon allows a user to add a comment or memo to the program.
      </td>
    </tr>
    <tr>
      <th><img src="/manual/en/programming_guide/icons/10.png" /></th>
      <td>
        This function allows for program termination and the display of an alarm pop-up message.<br>
        There are four options: terminate the program, terminate only the sub-program,<br>
        terminate only the folder's sub-programs, and display an alarm pop-up message.
      </td>
    </tr>
    <tr>
      <th><img src="/manual/en/programming_guide/icons/11.png" /></th>
      <td>
        This is the Debug function for internal value debugging.<br>
        There are two options: Debug Pop-up and User Log.<br>
        The Debug Pop-up allows you to check specific variable values or<br>
        internal parameters by requesting them in a pop-up format.<br>
        The User Log lets you leave a string or string variable in the log system.<br>
        However, logging too frequently may affect the system.
      </td>
    </tr>
    <tr>
      <th><img src="/manual/en/programming_guide/icons/12.png" /></th>
      <td>
        The user input function pauses during program execution to allow users to change<br>
        the value of a variable/arrangement/point/character/global/ROM by entering it.<br>
        You can change the value, ignore it, and skip it, depending on your situation.
      </td>
    </tr>
    <tr>
      <th><img src="/manual/en/programming_guide/icons/13.png" /></th>
      <td>
        This function is for controlling external axis in addition to the robot.<br>
        Up to 6 can be added.
      </td>
    </tr>
    <tr>
      <th><img src="/manual/en/programming_guide/icons/14.png" /></th>
      <td>
        This icon is used to create a conditional statement.<br>
        A user can generate separate motion program branches depending on conditions using If, Else if, and Else.
      </td>
    </tr>
    <tr>
      <th><img src="/manual/en/programming_guide/icons/15.png" /></th>
      <td>
        This icon is used to create another type of conditional statement. For the Switch statement, a user defines each case.
      </td>
    </tr>
    <tr>
      <th><img src="/manual/en/programming_guide/icons/16.png" /></th>
      <td>
        This feature includes the Pre Program, which executes the contents only once at the beginning, and the Post Program,<br>
        which defines functions to be performed after the program ends.<br>
        In cases where the program runs continuously, such as in Play mode, the Pre Program content is executed only once.<br>
        For one-time commands like variable declaration or communication setup, you can manage them under the Pre Program.<br>
        The functions declared under the Post Program are executed sequentially after the program ends.<br>
        Motion-related commands cannot be used in the Post Program.
      </td>
    </tr>
    <tr>
      <th><img src="/manual/en/programming_guide/icons/17.png" /></th>
      <td>
        This is the Set function. It allows you to configure various setting parameters<br>
        that are typically set in the Setup menu directly within the program.<br>
        You can change specific setting parameters during program execution.
      </td>
    </tr>
    <tr>
      <th><img src="/manual/en/programming_guide/icons/18.png" /></th>
      <td>
        The TCP setting function allows you to temporarily change the TCP value<br>
        during program execution by loading a pre-saved TCP value.<br>
        TCP values can be saved in advance in the Tool List on the Setup page.
      </td>
    </tr>
    <tr>
      <th><img src="/manual/en/programming_guide/icons/19.png" /></th>
      <td>
        This manual operation feature allows you to pause the program and<br>
        perform direct teaching during its execution.
      </td>
    </tr>
    <tr>
      <th><img src="/manual/en/programming_guide/icons/20.png" /></th>
      <td>
        It is a function to operate the robot joint and the external axis at the same time.
      </td>
    </tr>
    <tr>
      <th><img src="/manual/en/programming_guide/icons/21.png" /></th>
      <td>
        This is a loop function. It repeats the sub-program based on a specified condition or number of times.<br>
        There are four modes:<br>
        repeating a set number of times, repeating while a condition is true,<br>
        the Do While function (executes at least once and continues while the condition is true),<br>
        and ending the loop when the condition becomes true.
      </td>
    </tr>
    <tr>
      <th><img src="/manual/en/programming_guide/icons/22.png" /></th>
      <td>
        This function forcefully breaks out of a loop. It is used under the repeat function,<br>
        and even if a specific condition is declared for the loop,<br>
        using the break function allows you to exit the loop early.<br>
        Additionally, the continue function moves the program flow to the top of the loop,<br>
        the program logic jump function allows you to jump to a logic point marked with Here,<br>
        and there is also a function to jump to a folder or the logic jump destination.
      </td>
    </tr>
    <tr>
      <th><img src="/manual/en/programming_guide/icons/23.png" /></th>
      <td>
        This is the thread function, which includes two options:<br>
        adding a general/non-stop thread and calling an event thread.<br>
        There are five thread properties: general thread, non-stop thread, non-stop thread 2,<br>
        event general thread, and event non-stop thread.<br>
        The sub-items of the thread function run in parallel with the main program.<br>
        However, motion-related commands cannot be placed under the thread function.
      </td>
    </tr>
    <tr>
      <th><img src="/manual/en/programming_guide/icons/24.png" /></th>
      <td>
        The G-code function is available when a G-code file is placed in the specified folder.<br>
        The robot will execute the path defined by the G-code.
      </td>
    </tr>
    <tr>
      <th><img src="/manual/en/programming_guide/icons/25.png" /></th>
      <td>
        This is a function to replay a recorded motion using the motion recording feature.<br>
        The motion recorded via direct teaching can be replayed using either the J or L type with this feature.
      </td>
    </tr>
    <tr>
      <th><img src="/manual/en/programming_guide/icons/26.png" /></th>
      <td>
        This function adjusts the TCP position based on feedback from the welding current via analog input signals.<br>
        The user must adjust the current/voltage signal according to the analog input range (0~10V) provided by Rainbow.
      </td>
    </tr>
    <tr>
      <th><img src="/manual/en/programming_guide/icons/27.png" /></th>
      <td>
        This function automatically generates predefined motions.<br>
        Multiple predefined motions are available, and you can modify the parameters to create the desired motion.
      </td>
    </tr>
    <tr>
      <th><img src="/manual/en/programming_guide/icons/28.png" /></th>
      <td>
        This command controls the digital output of the control box. There are seven functions:<br>
        individual output, bit combination output, signal toggle output, full signal output,<br>
        unit pulse output, pulse width modulation (PWM), and condition-based output.<br>
        The selected signal is output through the chosen port among the 16 ports available.<br>
        Each port can be set to High, Low, or Bypass signals.
      </td>
    </tr>
    <tr>
      <th><img src="/manual/en/programming_guide/icons/29.png" /></th>
      <td>
        This command controls the analog output of the control box.<br>
        The selected voltage is output through the chosen port among the four analog ports available.<br>
        Each port can output a voltage range of 0~10V.<br>
        There are two functions: individual analog output and speed-based analog output.
      </td>
    </tr>
    <tr>
      <th><img src="/manual/en/programming_guide/icons/30.png" /></th>
      <td>
        The tool flange has two digital outputs. You can assign signals to these two digital outputs.<br>
        Additionally, the voltage level (0V, 12V, or 24V) for the output from the tool flange can be adjusted.
      </td>
    </tr>
    <tr>
      <th><img src="/manual/en/programming_guide/icons/31.png" /></th>
      <td>
        This is the gripper function. Functions for third-party grippers are pre-installed.<br>
        By selecting the gripper you wish to use and the function provided by that gripper,<br>
        the system helps you easily operate the gripper automatically.
      </td>
    </tr>
    <tr>
      <th><img src="/manual/en/programming_guide/icons/32.png" /></th>
      <td>
        This function is available when an I/O expansion module is added.<br>
        You can configure the digital/analog outputs of the I/O expansion module,<br>
        which works similarly to the existing digital and analog output functions.
      </td>
    </tr>
    <tr>
      <th><img src="/manual/en/programming_guide/icons/33.png" /></th>
      <td>
        This is a dedicated macro function for arc welding.<br>
        It groups functions that can be implemented through common D.out or Wait functions<br>
        into a macro format for quick use.<br>
        Settings for the arc welder are performed in Setup > Device.
      </td>
    </tr>
    <tr>
      <th><img src="/manual/en/programming_guide/icons/34.png" /></th>
      <td>
        This function is for using digital welders.<br>
        After selecting the brand of digital welder to be used,<br>
        you can choose the mode and options to easily operate the digital welder.
      </td>
    </tr>
    <tr>
      <th><img src="/manual/en/programming_guide/icons/35.png" /></th>
      <td>
        This is a script function that allows the user to write custom scripts.<br>
        It can be used for specific calculations, variable substitution,<br>
        and assignment beyond the basic functions.
      </td>
    </tr>
    <tr>
      <th><img src="/manual/en/programming_guide/icons/36.png" /></th>
      <td>
        This is the Assign function for declaring variables, with five types available.<br>
        The types include variable for storing single numbers,<br>
        array for storing arrays of numbers,<br>
        point for storing positional information (x, y, z, rx, ry, rz),<br>
        joint for storing joint angle information, and string for storing text.
      </td>
    </tr>
    <tr>
      <th><img src="/manual/en/programming_guide/icons/37.png" /></th>
      <td>
        This function declares variables (single variables, arrays, point variables, etc.)<br>
        for real-time monitoring during program execution.<br> 
        Variables declared in the monitoring function can be observed in real-time<br>
        during program execution by clicking the monitor icon on the right side of the Make/Play page.
      </td>
    </tr>
    <tr>
      <th><img src="/manual/en/programming_guide/icons/38.png" /></th>
      <td>
        This function enables RS485/232 output via the tool flange/control box.<br> 
        You can output in ASCII mode or hex mode.<br> 
        The communication protocol is set in the Setup > Socket/Serial menu.
      </td>
    </tr>
    <tr>
      <th><img src="/manual/en/programming_guide/icons/39.png" /></th>
      <td>
        This is a socket communication function.<br>
        It allows you to open a socket, connect to a specific server, send request messages,<br>
        and receive specific data from the server.<br>
        Up to five different servers can be connected simultaneously.
      </td>
    </tr>
    <tr>
      <th><img src="/manual/en/programming_guide/icons/40.png" /></th>
      <td>
        This is a Modbus client function.<br>
        It allows requesting data from a specific IP/address and retrieving the returned data.<br> 
        The request interval and format can be specified.<br> 
        A separate protocol is provided for the Modbus server included with this product.
      </td>
    </tr>
    <tr>
      <th><img src="/manual/en/programming_guide/icons/41.png" /></th>
      <td>
        This function integrates features for using external products like HMI and PLC easily.<br> 
        You can select the desired product and its specific features for use.
      </td>
    </tr>
    <tr>
      <th><img src="/manual/en/programming_guide/icons/42.png" /></th>
      <td>
        This function allows you to insert a pre-created program file (teaching file) into the current project.<br> 
        There are three options: sub-program call, copy command content, and switch program.<br> 
        The sub-program call allows viewing the sub-project without modification.<br> 
        If modification is necessary, the sub-project must be opened separately.<br> 
        The copy command content option lets you insert another program file into the current document in an editable form.<br> 
        Unlike sub-program call, which simply calls the program,<br>
        copy command content copies the program in a modifiable format.<br> 
        The switch program option is used when you want to replace the main program with another project.
      </td>
    </tr>
    <tr>
      <th><img src="/manual/en/programming_guide/icons/43.png" /></th>
      <td>
        This function defines repetitive actions.<br> 
        It defines the space where the repeated actions will be performed and the actions at each location.<br> 
        The same actions will be performed at all defined points.<br> 
        This function is useful for implementing palletizing.
      </td>
    </tr>
    <tr>
      <th><img src="/manual/en/programming_guide/icons/44.png" /></th>
      <td>
        This is a conveyor tracking function.<br> 
        Once the conveyor speed and direction are set, the sub-actions (L, PB, ITPL, Pro, Circle)<br>
        of the conveyor function will be added to the conveyor flow.
      </td>
    </tr>
    <tr>
      <th><img src="/manual/en/programming_guide/icons/45.png" /></th>
      <td>
        This is a force control function.<br> 
        You can select the direction and coordinate system for the desired force.<br>
        Sub-actions under force control will have this force control feature applied automatically.
      </td>
    </tr>
    <tr>
      <th><img src="/manual/en/programming_guide/icons/46.png" /></th>
      <td>
        This is a dedicated function for weaving movements.<br>
        Movements like L-series and Circle under weaving are combined with the set weaving options.<br> 
        The available weaving patterns are Trapezoidal, SineWave, Triangle, C-Wave, and Circle.
      </td>
    </tr>
    <tr>
      <th><img src="/manual/en/programming_guide/icons/47.png" /></th>
      <td>
        This is a dedicated function for weaving movements.<br> 
        Unlike the existing weaving functions, the reference for weaving is through the TCP coordinate system.<br> 
        Movements like L-series and Circle under weaving are combined with the set weaving options.<br> 
        The available weaving patterns are Trapezoidal, SineWave, Triangle, C-Wave, and Circle.
      </td>
    </tr>
    <tr>
      <th><img src="/manual/en/programming_guide/icons/48.png" /></th>
      <td>
        This function is used for welding applications.<br> 
        It detects the movement of the base material and reflects the movement and direction to proceed with welding.
      </td>
    </tr>
  </table>
</div>

#### 2. Editing Icon (Left side in Make screen)

<div class="center-align th-align">  
  <table>
    <tr>
      <th>Icon</th>
      <th>Description</th>
    </tr>
    <tr>
      <th><img src="/manual/en/programming_guide/icons/49.png" /></th>
      <td>
        You can raise or lower commands one space at a time.
      </td>
    </tr>
    <tr>
      <th><img src="/manual/en/programming_guide/icons/50.png" /></th>
      <td>
        Revert the operation to a step before, after, up to 50 times.
      </td>
    </tr>
    <tr>
      <th><img src="/manual/en/programming_guide/icons/51.png" /></th>
      <td>
        It can copy the selected command and you can the copied command to a different location.
      </td>
    </tr>
    <tr>
      <th><img src="/manual/en/programming_guide/icons/52.png" /></th>
      <td>
        It can paste the copied or cut command into the selected location.
      </td>
    </tr>
    <tr>
      <th><img src="/manual/en/programming_guide/icons/53.png" /></th>
      <td>
        It can cut the selected command. This command can be pasted to a different location.
      </td>
    </tr>
    <tr>
      <th><img src="/manual/en/programming_guide/icons/54.png" /></th>
      <td>
        It can delete the selected command.
      </td>
    </tr>
    <tr>
      <th><img src="/manual/en/programming_guide/icons/55.png" /></th>
      <td>
        This is Annotation function. It prevents the selected command from running.<br>
        Annotated commands exist in the program but not executed.<br>
        If you press the disable button on the annotated command, it is activated.
      </td>
    </tr>
    <tr>
      <th><img src="/manual/en/programming_guide/icons/56.png" /></th>
      <td>
        It can mark the highlight (marking) in the desired program line.<br>
        Therefore, you can underline important program lines.<br>
        There are two colors, blue and pink.
      </td>
    </tr>
  </table>
</div>

#### 3. Jog and other utilities (Right side of Make screen)

<div class="center-align th-align">  
  <table>
    <tr>
      <th>Icon</th>
      <th>Description</th>
    </tr>
    <tr>
      <th><img src="/manual/en/programming_guide/icons/57.png" /></th>
      <td>
        It can move TCP’s position relative to a global coordinate system fixed to the base.
      </td>
    </tr>
    <tr>
      <th><img src="/manual/en/programming_guide/icons/58.png" /></th>
      <td>
        It can move the position of TCP based on the local coordinate system<br>
        (tool coordinate system) fixed to TCP.
      </td>
    </tr>
    <tr>
      <th><img src="/manual/en/programming_guide/icons/59.png" /></th>
      <td>
        It can move the position of TCP based on the user-defined coordinate system<br>
        (User Coordinate).
      </td>
    </tr>
    <tr>
      <th><img src="/manual/en/programming_guide/icons/60.png" /></th>
      <td>
        It can allow to move each joint of the robot arm separately.
      </td>
    </tr>
    <tr>
      <th><img src="/manual/en/programming_guide/icons/61.png" /></th>
      <td>
        This is a collection of settings such as User coordinate system settings,<br>
        automatic TCP find, and other easy-to-use settings with a Jog.<br>
        These settings can also be set in the Setup menu by default.
      </td>
    </tr>
    <tr>
      <th><img src="/manual/en/programming_guide/icons/62.png" /></th>
      <td>
        This is a collection of special features which can view status and set-up values<br>
        such as I/O status information of the system,<br>
        user-coordinate Setting information and current/temperature information of the robot.
      </td>
    </tr>
    <tr>
      <th><img src="/manual/en/programming_guide/icons/63.png" /></th>
      <td>
        It is a window for real-time observation of the values selected variables through<br>
        the Monitor function.<br>
        In addition to the selected variables, system variables that need to be checked<br>
        frequently are also displayed.
      </td>
    </tr>
    <tr>
      <th><img src="/manual/en/programming_guide/icons/64.png" /></th>
      <td>
        This function allows the user to select the UI mode.<br>
        Users can select UI mode according to their level and environment.<br>
        There are four mode options: Expert Mode, Beginner Mode,<br>
        Welding Mode (Analog), and Welding Mode (Digital).
      </td>
    </tr>
  </table>
</div>

#### 4. System function button

<div class="center-align th-align">  
  <table>
    <tr>
      <th>Icon</th>
      <th>Description</th>
    </tr>
    <tr>
      <th><img src="/manual/en/programming_guide/icons/65.png" /></th>
      <td>
        This icon is used to move to home screen & another page.<br>
        (It is located in the top left.).
      </td>
    </tr>
    <tr>
      <th><img src="/manual/en/programming_guide/icons/66.png" /></th>
      <td>
        This icon is used to power off the UI.<br>
        When the tablet PC is connected to the robot,<br>
        the robot will also be turned off.<br>
        Screen Lock function is included in here. (It is located in the bottom right.).
      </td>
    </tr>
  </table>
</div>

:::tip

- A detailed description of each function is described later.
  :::
