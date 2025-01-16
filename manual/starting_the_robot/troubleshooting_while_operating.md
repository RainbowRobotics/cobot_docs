---
layout: doc
outline: deep
---

# Troubleshooting While Operating

Various problems can occur while the robot is in operation. Below are some of those problems and ways to troubleshoot.

### 1. Out Collision

![missing](/manual/en/start_robot/3-1-1.png)

![missing](/manual/en/start_robot/3-1-2.png)

![missing](/manual/en/start_robot/3-1-3.png)

The robot will stop immediately when a collision is detected.<br>
Looking at the figures above, there are external collision codes, each meaning the following:

- OUT : When an overcurrent due to a collision is detected by the current sensor in each joint.
- ACC, GYR : When sudden rapid vibrations caused by a collision are detected by the robot.

First, remove the external collision factors. Then, there are two options:<br>
To stop the robot’s task and proceed with maintenance, press the Halt button to end the task.<br>
To continue the robot's task, press the Resume button to resume the task.

**cf) TOK TOK**<br>
When temporarily paused due to an external collision, lightly tapping the end of the robot arm twice will recover it from the paused state (same effect as pressing the Resume button).

### 2. Self Collision

<br>

<div class="flex-center-align">
  <img src="/manual/en/start_robot/3-2-1.png" />
  <img src="/manual/en/start_robot/3-2-2.png" style="margin-left: 20px;" />
</div>

As shown in the first image, when part of the robot moves outside the designated working area, or as shown in the second image, when the robot approaches a motion that poses a collision risk, the robot will stop working.<br>
You must use the teaching button to manually adjust the robot's position to a normal state. Afterward, review the taught motion and the set work range.

If this occurs in Simulation mode on the Make screen, you can recover using the following methods:

- Use the motion-related buttons to recover the robot from a self-collision situation.
- Temporarily switch to Real mode to receive actual joint information from the robot and recover.
- Press the teaching button to receive actual joint information from the robot and recover.

### 3. Alarm Message

![missing](/manual/en/start_robot/3-3.png)

When an ‘Alarm’ is set in the current program, the robot will pause once the ‘Alarm’ command is reached. A dialog will then pop up.<br>
Press ‘Resume’ to continue the task or ‘Halt’ to stop.

### 4. Tablet PC Disconnection

![missing](/manual/en/start_robot/3-4.png)

Occurs when the control box (controller) and the tablet PC are disconnected or forcibly shut off the main power (220V) of the robot control box.<br>
If the USB cable is damaged, it needs to be replaced, and if the connection is not consistent, try a different USB port.

### 5. Interruption of external power supply

![missing](/manual/en/start_robot/3-5.png)

Occurs when the power to the robot arm is interrupted. Appears when the emergency stop switch is pressed.<br>
After the emergency stop switch is restored normally, initialize the robot again and use it.

### 6. Joint Controller Errors

The robot will stop automatically when one of its joint controllers experiences one of the following errors:

<div class="flex-center-align th-align">
  <table>
    <tr>
      <th>BIG Error</th>
      <td>The difference between the reference input and encoder value exceeds the factory specified threshold.</td>
    </tr>
    <tr>
      <th>JAM Error</th>
      <td>The encoder value does not change, but a current is supplied that is over the factory specified threshold.</td>
    </tr>
    <tr>
      <th>CUR Error</th>
      <td>The current exceeds the maximum current threshold.</td>
    </tr>
    <tr>
      <th>Temperature Error</th>
      <td>The temperature exceeds the maximum temperature threshold.</td>
    </tr>
    <tr>
      <th>Mode Error</th>
      <td>The version of software in the main controller is different from the version in the joint controller.</td>
    </tr>
  </table>
</div>
