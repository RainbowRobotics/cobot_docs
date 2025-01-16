---
layout: doc
outline: deep
---

# Safety Input Configuration

For the safety of users, all safety-related I/O must be configured with multiple backups. Safety devices and equipment must be installed in accordance with the instructions in Chapter 2 Safety and Chapter 3 Installation.<br>
The safety input has a safety protection stop. Emergency stop input is for emergency stop of the robot and safety stop input is for all safety level protection of the robot.

<div class="danger custom-block">
  <p class="custom-block-title">Danger</p>
  <ul>
    <li><b>Never</b> connect a safety signal to a PLC other than a safety PLC.</li>
    <li>Failure to follow these warnings could result in unsafe operation, resulting in serious injury or casualty.</li>
    <li>The safety signal and general I/O signal must be separated.</li>
  </ul>
</div>

<div class="warning custom-block">
  <p class="custom-block-title">Warning</p>
  <ul>
    <li>Inputs and outputs of all safety classes are redundant.</li>
    <li>It is necessary to isolate the channel so that the safety function is not activated due to signal failure.</li>
    <li>The safety functionality must be confirmed before installing the robot. The safety functionality should also be checked periodically for abnormalities.</li>
  </ul>
</div>

### 1. Initial Safety Configuration

The robot will be shipped with the initial safety configuration set to default, so that the users can use it without further configuration. The initial safety configuration is as follows.

![missing](/manual/common/installation/8-1.png)

### 2. Safety protection stop and automatic restart

An example of a safety protection device would be a door switch that stops the robot when the door is opened. The figure shows how to configure these features:

![missing](/manual/common/installation/8-2.png)

### 3. Enabling Device Input (Option)

Connect the active device input interface using the 3-position switch.<br>
When the position activation switch is in the operating position (middle position), the robot starts moving. If the 3-position activation switch is pressed, the switch is in the inoperative position and the robot arm will not move.<br>
Rainbow Robotics does not provide an Enabling Device. An Enabling Device is available as an option if the user needs. To configure the feature, refer to the following configuration:

![missing](/manual/common/installation/8-3.png)
