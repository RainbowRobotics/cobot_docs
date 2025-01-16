---
layout: doc
outline: deep
---

# Set-up (I/O 1)

Here is where you can configure the functions of the GPIO ports on the control box.

### 1. Control Box Digital Input Function Definition

![missing](/manual/en/setup/7-1.png)

1. Select the input port for which you want to change the function.
2. - **R** : The function applied to the selected digital input port is activated when the digital input pulse is at the Rising Edge.<br>
   - **H** : The function applied to the selected digital input port is activated when the digital input pulse is at the High State.<br>
   - **F** : The function applied to the selected digital input port is activated when the digital input pulse is at the Falling Edge.<br>
   - **L** : The function applied to the selected digital input port is activated when the digital input pulse is at the Low State.
3. The functions applied to the 16 digital input ports are displayed.

### 2. Control Box Digital Output Function Definition

![missing](/manual/en/setup/7-2.png)

4. Select the output port for which you want to change the function.
5. - **R** : The function applied to the selected digital output port is activated when the digital output pulse is at the Rising Edge.<br>
   - **H** : The function applied to the selected digital output port is activated when the digital output pulse is at the High State.<br>
   - **F** : The function applied to the selected digital output port is activated when the digital output pulse is at the Falling Edge.<br>
   - **L** : The function applied to the selected digital output port is activated when the digital output pulse is at the Low State.
6. The functions applied to the 16 digital output ports are displayed.

### 3. Control Box Input Labels

![missing](/manual/en/setup/7-3.png)

7. Enter the desired name.
8. Select the input port for which you want to set the name.

### 4. Control Box Output Labels

![missing](/manual/en/setup/7-4.png)

9. Enter the desired name.
10. Select the output port for which you want to set the name.

### 5. Control box input port functionality

The functions of the input ports (Din 0 to Din 15) in the control box can be set to the following special functions (R = Rising Edge, F = Falling Edge, H = High State).

<div class="warning custom-block">
    <p class="custom-block-title">Caution</p>
    <ul>
        <li>
            Before using Digital Input, be sure to fully understand the electrical characteristics of the digital input port provided by the manufacturer.
        </li>
    </ul>
</div>

0. Basic Mode (GPIO)
1. Start Program Once Mode (Rising Edge)
2. Stop Program (Rising Edge)
3. Pause Program (Rising Edge)
4. R = Turn on Direct Teaching Mode / F = Turn off Direct Teaching Mode
5. R = Set Speed to 100% / F = Set Speed to 0%
6. R = Switch to Real Mode / F = Switch to Simulation Mode
7. R = Reset Robot
8. H = Disable Collision Function when in High State
9. H = Auto Initialization Key
10. R = Release Pause due to External Collision
11. R = Add Point Function to UI Program (Rising Edge)
12. R = Start Program in Repeat Mode (Rising Edge)
13. R = Move to Begin Position
14. R = Resume Program
15. H = Quick Freedrive Change
16. R = Pause Program / F = Resume Program
17. F = Pause Program / R = Resume Program
18. H = Speed Slider at 100% / L = Speed Slider at 0%
19. R = Load Default Program
20. F = Turn Off Robot Arm Power
21. R = Touch Sensing
22. F = Touch Sensing
23. H = No Arc
24. H = Program Start Block
25. R = Ext.Joint0 Plus / F = stop
26. R = Ext.Joint0 Minus / F = stop
27. R = Ext.Joint1 Plus / F = stop
28. R = Ext.Joint1 Minus / F = stop
29. R = Ext.Joint2 Plus / F = stop
30. R = Ext.Joint2 Minus / F = stop
31. H = Safety Speed
32. F = UserCoord0 ←TCP frame
33. F = UserCoord1 ←TCP frame
34. F = UserCoord2 ←TCP frame
35. F = Load & Run Program Table
36. R = Start Prog.(Once) / F = Stop Prog.
37. R = Start Prog.(Repeat) / F = Stop Prog.
38. F = Change Global Pinpoint #’s Prog.
39. R = EXT. Joint 0 Slow Plus / F = Stop
40. R = EXT. Joint 0 Slow Minus / F = Stop
41. R = EXT. Joint 1 Slow Plus / F = Stop
42. R = EXT. Joint 1 Slow Minus / F = Stop
43. R = EXT. Joint 2 Slow Plus / F = Stop
44. R = EXT. Joint 2 Slow Minus / F = Stop
45. R = Reset SOS
46. F = Reset SOS
47. R = Delete Point
48. R = Add ARC-ON
49. R = Add ARC-Off
50. H = Speed 75% / L = 0%
51. H = Speed 50% / L = 0%
52. H = Speed 25% / L = 0%
53. H = Speed 10% / L = 0%
54. F = Pause Program
55. H = Block Freedrive Button
56. L = Block Freedrive Button
57. Duplex for Safety
58. F = Stop Program

### 6. Control box output port functionality

The functions of the output ports (Dout 0 to Dout 15) of the control box can be set to the following special functions (R = Rising Edge, F = Falling Edge, H = High State).<br>
Output ports set to special features are not available for general use in teaching programs.

<div class="warning custom-block">
    <p class="custom-block-title">Caution</p>
    <ul>
        <li>
            Before using the digital output, be sure to fully understand the electrical characteristics of the digital output port provided by the manufacturer.
        </li>
    </ul>
</div>

0. Basic Mode (GPIO)
1. H = Program/Robot Running / L = Idle State
2. L = Program/Robot Running / H = Idle State
3. H = External Impact Detected
4. H = Direct Teaching Mode Active
5. Transmit the digital input signal with the same number as the selected port
6. Transmit Tool Flange Input Port 0 Signal
7. Transmit Tool Flange Input Port 1 Signal
8. H = Robot Active / L = Not Active
9. H = Real Mode / L = Simulation Mode
10. H = Robot in Operation / L = Idle
11. L = Robot in Operation / H = Idle
12. H = Robot Initialization (Activation) Failed
13. H = Power Supplied to Robot Arm / L = No Power to Arm
14. H = Collision Detection On / L = Collision Detection Off
15. H = Pause State
16. H = Trap Occurred in Inbox 0
17. H = Trap Occurred in Inbox 1
18. Used as PWM Module
19. H = Teaching Pendant Connected
20. H = Program Running in MAKE Screen
21. H = Program Running in PLAY Screen
22. H = Conveyor Mode Active
23. H = Control Box Boot Complete
24. H = Force Control Mode Active
25. PC Alive Pulse
26. H = Speed Slider at 100%
27. H = Last Program Load Successful
28. H = TCP is in InBox 0
29. H = TCP is in InBox 1
30. H = Is Alarm
31. H = Robot posture is Begin posture
32. H = Emergency Teaching Enable
33. H = Prog. Run in Sub.P area
34. H = Normal Program Run / L = Others
35. H = Normal Program Run / H = Others
36. H = Hand Controller F1 pressed
37. H = Hand Controller F2 pressed
38. H = Hand Controller F3 pressed
39. H = Hand Controller F4 pressed
40. L = TCP is in InBox 0
41. L = TCP is in InBox 1
42. Sync with Dout 0
43. Sync with Dout 1
44. Sync with Dout 2
45. Sync with Dout 3
46. Sync with Dout 4
47. Sync with Dout 5
48. Sync with Dout 6
49. Sync with Dout 7
50. Sync with Dout 8
51. Sync with Dout 9
52. Sync with Dout 10
53. Sync with Dout 11
54. Sync with Dout 12
55. Sync with Dout 13
56. Sync with Dout 14
57. Sync with Dout 15
58. H = Is SOS State
59. L = Is SOS State
60. H = EMG Button Released / L = Pressed
61. L = EMG Button Released / H = Pressed
62. L = Robot Speed under 250mm/s
63. H = Robot Speed under 250mm/s
64. H = Near Joint Limit
65. H = Robot Arm under Activating
66. H = Under Program Loading
