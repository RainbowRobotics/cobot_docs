---
layout: doc
outline: deep
---

# Set-up (System)

You can set display units, date and time, system updates, and more.

### 1. General

![missing](/manual/en/setup/s1.png)

1. - **UI Robot Model**: Change the robot model displayed on the UI.<br>
   - **Time Format**: Set the time format to either 12-hour or 24-hour format.<br>
   - **Language**: Set the language for the UI.<br>
   - **Command Icon Language**: Set the language for command icons.<br>
   - **Advanced Program Operation Mode**: Specify the starting position for the program from the beginning.<br>
   - **Software Update**: Install the software from the tablet to the control box. This function allows you to upgrade or downgrade the software version of the control box.<br>

2. - **Robot Auto Activation Feature**: Choose how to activate the robot.<br>
   If set to ‘Disable,’ you will need to press the ‘Activate’ button each time to activate it.<br>
   In ‘Auto Activate with Key’ mode, activation occurs through any digital input.<br>
   In ‘Auto Activate without Key’ mode, the robot activates as soon as the power to the control box is turned on, without any operation.<br>
   - **Default Work File**: Set the initial file to be loaded when the control box boots. If no other file is set, it will default to ‘default.’<br>
   - **System ID(0~3000)**: Assign an ID to the system.<br>
   - **Robot Arm LED Indicator**: Enable or disable the LED on the robot arm link.<br>
   - **SOS Mode**: Simple SOS and SF SOS<br>
   - **Default Joint-Jog Speed**: Set the default joint speed.<br>
   - **Default Linear-Jog Speed**: Set the default linear speed.<br>
   - **External F/T Sensor**: Set the model for the external F/T sensor.<br>
   - **High-Resolution ADC Mode**: Enable or disable high-resolution ADC mode.<br>

3. Save the Changed Settings.

### 2. Software PLC

![missing](/manual/en/setup/s2.png)

1. Set how to use the Software PLC.<br>
   If you want the settings to be applied regardless of whether the program is running **(On(Always))**, apply them only when the program is not running **(On(Idle))**, or apply them only when the program is running **(On(Non-Idle))**.
2. You can construct logic using various parameters such as input signals, system status information, system parameters, and communication data.
3. You can configure the logic of output signals using input signals.

### 3. System Configuration

![missing](/manual/en/setup/s3.png)

1. Control Box Time Zone: You can set the current time of the control box.
2. Inversion of Digital Input Signals / Output Signal Inversion: You can invert the signals of individual ports.
3. System Elements: You can set the usage of the tool flange and I/O board.

### 4. User Script Command

![missing](/manual/en/setup/s4.png)

1. Users can insert their desired functions into the UI_Script.
2. By clicking the 'Save' button, the settings can be saved, and clicking the 'Test' button sends the values to the control box.
3. Even if the input values are deleted, they can be retrieved using the 'Load Settings' button.