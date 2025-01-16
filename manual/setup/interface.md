---
layout: doc
outline: deep
---

# Set-up (Interface)

Perform the settings required for the user to operate the robot and UI.

### 1. General

![missing](/manual/en/setup/10-1.png)

1. Enter the number of repetitions on the Play screen.
2. Select whether to use the safety slider function on the Make screen.<br>
   When the safety slider function is enabled, if the user removes their hand from the screen, the speed adjustment bar will return to 0.<br>
   When the safety slider function is disabled, the user can set the speed adjustment bar to the desired level, and even after removing their hand from the screen, the speed setting will remain as it is.
3. Set the speed to use when the Smooth option is enabled in the Jog function on the Make screen.
4. Choose whether to visualize the auto-rotation alignment button at the bottom of the Jog function on the Make screen.
5. Set the movement amount when the Tick option is enabled in the Jog function on the Make screen.
6. Limit the upper value of the speed adjustment bar in the UI.
7. Set the direct teaching sensitivity for each joint. The higher the sensitivity, the less force is needed to operate the robot manually.
8. Define the role of the play button on the dedicated jog/emergency stop interface device provided by the manufacturer.
9. Set the default settings for operations on the Make screen.
10. Choose whether to visualize the auto-rotation alignment button at the bottom of the Jog function on the Make screen.
11. Enable or disable the No Arc button on the Make screen.
12. Save the modified settings.

### 2. HandController Function

<div class="warning custom-block">
    <p class="custom-block-title">Caution</p>
    <ul>
        <li>
            For safety reasons, use the mounted(Connected) state of the hand controller as much as possible.
        </li>
    </ul>
</div>

![missing](/manual/en/setup/10-2.png)

13. Check the setting values of the additional function buttons below the emergency stop button.<br>
    When you press the additional function button, the corresponding button number lights up. This allows you to check if the UI is functioning properly.
14. - **Change Button Functions** : You can assign functions to each button.
    - **Hand Controller Attachment Status** : When the robot arm is activated, you can configure whether to use the hand controller or not.

### 3. EtherNet/IP, ProfiNet, OPC-UA

![missing](/manual/en/setup/10-3.png)

15. Enable or disable the Ethernet/IP Adapter function and check its current status.
16. Enable or disable the ProfiNet Device function and check its current status.
17. Enable or disable the OPC-UA Server function.

### 4. OnRobot Box

![missing](/manual/en/setup/10-4.png)

18. Set the IP address for configuring the On-Robot Box.
