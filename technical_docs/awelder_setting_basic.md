---
layout: doc
outline: deep
---

# Basic Guide to use Analog Welder v2.0

### 1. Connections and Settings

When connecting the robot product of Rainbow Robotics and the analog welding machine, the following items should be set first in the [Devices] section of the [Setup] page.

![missing](/technical_docs/common/awelder_setting_basic/1-1.png)

#### ① Arc Welding start signal

- It is the output signal setting to turn on/off welding. Set the digital output port that sends the welding start/end signal from the robot control box to the welding machine.

#### ② Arc generation feedback signal

- Set the input port to receive from the welding machine whether welding has started and arc has normally occurred (generated).
- Through the signal coming into the set input port, the robot can check whether welding started and welding-arc is normally generated.
- Depending on the welding machine, the corresponding signal may not exist. In this case, choose None option.

#### ③ Wire forward signal (Inching)

- This is a setting for moving the welding wire forward during the teaching and setting process. If the setting is set, the wire can be moved forward through the robot Ui during the teaching process.
- Depending on the welding machine, the corresponding signal may not exist. In this case, choose None option.

#### ④ Wire reverse signal (Back/Re-Inching)

- This is a setting for moving the welding wire backward during the teaching and setting process. If the setting is set, the wire can be moved backward through the robot Ui during the teaching process.
- Depending on the welding machine, the corresponding signal may not exist. In this case, choose None option.

#### ⑤ Welding current setting analog port

- The robot control box has 4 analog outputs (A.Out 0 ~ A.Out 3). Select which port to use for welding current setting among them.
- If the welding conditions (current, etc.) are manually operated by the welding machine (i.e. hand dial), this setting is not necessary.

#### ⑥ Welding voltage setting analog port

- The robot control box has 4 analog outputs (A.Out 0 ~ A.Out 3). Select which port to use for welding voltage setting among them.
- If the welding conditions (current strength) etc. are manually operated by the welding machine, this setting is not necessary.

#### ⑦ Welding current characteristic graph setting

- The analog output of the robot control box is 0~10V level. This is a function to map how many volts the analog output is output when the user inputs the desired welding current.
- The value entered here depends on the characteristics and specifications of the welding machine.
- If the welding conditions (current strength) etc. are manually operated by the welding machine, this setting is not necessary.

#### ⑧ Welding voltage characteristic graph setting

- The analog output of the robot control box is 0~10V level. This is a function to map how many volts the analog output will be output when the user inputs the desired welding voltage.
- The value entered here depends on the characteristics and specifications of the welding machine.
- If the welding conditions (current strength) etc. are manually operated by the welding machine, this setting is not necessary.

#### ⑨ User Input Assistant

- When using the welding function during teaching, it is a setting to put default values in the welding function Ui.<br>
  For example, if the robot and the welding machine are connected as shown below, the settings are as follows.

  ![missing](/technical_docs/common/awelder_setting_basic/1-9-1.png)
  ![missing](/technical_docs/common/awelder_setting_basic/1-9-2.png)

- In the example above, it is set to output 10V at a welding current of 350A.
- For example, when the user sets welding to 200A, about 5.7V is output from the analog output of the robot. (10V x 200 / 350 = 5.7V)

### 2. Simple Example

After setting the basic settings for the welding machine as in Chapter 1, let's look at a simple straight line welding example.<br>
A simple robot movement was created as shown in the figure below.

<!-- 마크다운 문법 (-) 사용해서 작성하면 에러남. 이유불명... -->
<!-- 바꾸지 말것. -->
<ul>
  <li>
    Move from the starting point to the {500, 100, 0} point using [Move J]
  </li>
  <li>
    From then on, move in a straight line using [Move L] until {500, 400, 0}
  </li>
  <li>
    Finally, return to the starting position using [Move J] or [Home]
  </li>
</ul>

![missing](/technical_docs/common/awelder_setting_basic/2-1.png)

If user write the program as above, the TCP trajectory of the robot will move as follows.

![missing](/technical_docs/common/awelder_setting_basic/2-2.png)

In the above program, put the welding on/off command before and after the desired welding section (straight section) as follows.

![missing](/technical_docs/common/awelder_setting_basic/2-3.png)

At this time, the welding start (Arc On) command is set as follows.

![missing](/technical_docs/common/awelder_setting_basic/2-4.png)

In this case, the result is as follows.

![missing](/technical_docs/common/awelder_setting_basic/2-5.png)

1. Since the Arc On command is entered just before the straight line welding section [Move L], welding starts just before the straight line motion.
2. Since the Arc Off command was entered immediately after the straight welding section [Move L], the welding ends immediately after the straight line motion.
3. Therefore, in the figure above, welding is performed in the section with the red dotted line.

- In the welding section, since the welding current is set to 100A, 2.85V (10V \* 100 / 350) is output in the analog output.
- Since the robot speed is set to 10mm/s in the [Arc On] setting, the TCP of the robot moves at a speed of 10mm/s in the welding section.

<style scoped>
</style>
