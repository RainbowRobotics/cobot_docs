---
layout: doc
outline: deep
---

# Set-up (Cobot)

You can set the basic environment for the robot arm.

![missing](/manual/en/setup/1.png)

1. Set collision sensitivity. The lower the sensitivity, the more the robot will stop at weak impacts.<br>
   The collision detection function can be turned on or off.
2. Set robot activity area. When you enable the Workspace, the activity limits will be displayed in 3D.<br>
   If the robot exceeds the activity area, it will recognize this as a self-collision and stop.<br>
   This function can also be turned on or off.
3. - **Collision Detection Protection Mode**: After detecting a collision, the robot can either stop immediately (General Stop) or move in the opposite direction of the previous motion before stopping (Evasion Stop), which can be set step by step. The robot can also switch to direct teaching mode for a certain period after a collision (Free Drive Stop).
   - **Pause Deceleration Amount**: If a pause is made during program playback, it will stop after a certain period of playback. This time can be set step by step.
   - **Droop Compensation**: If an object is attached to the tool flange and the position value droops downwards, this function compensates for the droop.
   - **Control Box Robot Model**: Displays the currently stored robot model in the control box.
4. Set the installation angle of the robot. If there is a matching installation angle among the example images provided, click on the corresponding image. To enter it manually, input the direction vector of gravitational acceleration based on the Global coordinate system.
5. - **Tool Flange Default Output Voltage**: Select the default output voltage for the tool flange (can choose from 0V, 12V, or 24V).
   - **Tool Flange Direct Teaching Button**: Choose whether to use the direct teaching button on the tool flange.
   - **Tool Flange Vibration Sensor**: Choose to turn the vibration detection on or off.
6. Save the Changed Settings.
