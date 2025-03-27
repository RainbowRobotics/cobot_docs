---
layout: doc
outline: deep
---

# Set-up (I/O 2)

Setting I/O Values to Always Execute Before/After Program Start.

### 1. Pre/Post Program I/O

![missing](/manual/en/setup/io5.png)

1. Set I/O Outputs to Execute Before/After Program Start (Playback)<br>
   - The ports set here will output the specified values as soon as the program starts.
   - The ports set here will output the specified values as soon as the program ends.
2. **Control Box Side An.out** : You can set the voltage for analog output ports 0 to 3. The voltage can be set between 0V to 10V.
3. **Tool Flange Side Voltage / D.out** : You can configure the digital output of the tool flange.<br>
   Each port can be set to Bypass/0V/12V/24V.
4. Save Settings.

### 2. Boot-up Output/Action

![missing](/manual/en/setup/io6.png)

5. After the Control Box is first booted up, select the digital output options for the Control Box.<br>
   The ports configured here will output the specified values immediately after the program ends.<br>
6. - Just after ControlBox Boot-Up: Select the User Script to run immediately after the Control Box boots up.<br>
   - Just after Activation Done: Select the User Script to run immediately after the robot program ends. <br>
   - Just after Real-Mode: Select the User Script to run immediately after switching to Real Mode. <br>
7. Save the modified settings.
   
### 3. Tool I/O SpecialFunction

![missing](/manual/en/setup/io7.png)

8. Assign the desired functions to Tool Out 0 and 1.
9. Assign the desired functions to Tool Inputs 0 through 5.
