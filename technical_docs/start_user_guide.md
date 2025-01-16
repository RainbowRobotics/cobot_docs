---
layout: doc
outline: deep
---

# Start User Guide v240227

### Safety marks in this guide

::: danger
Failure to comply with instructions marked with this symbol can lead to serious accidents, potentially resulting in the death or severe injury of operators or users.
:::

:::warning
Noncompliance with instructions marked with this symbol can lead to accidents, potentially causing serious injury to operators or users.
:::

<div class="warning custom-block">
    <p class="custom-block-title">CAUTION</p>
    <p>Failure to comply with instructions marked with this symbol may damage the product or injure operators or users.</p>
</div>

### General safety warnings and precautions

:::warning

1. Robot application system manufacturers or robot users should familiarize themselves with the contents of this guide and the user manual and complete operational training.
2. You must secure enough space for the robot arm to move freely.
3. Do not wear loose clothing or jewelry when using the robot. If you have long hair, take care not to get it caught in the robot's joints or other parts by tying it back.
4. Never use a damaged robot.
5. If a critical error occurs in the software, immediately activate emergency stop and contact the product supplier or Rainbow Robotics.
6. Check whether the values for robot installation angle, tool settings, safety instructions, etc., have been correctly entered.
7. Do not connect safety equipment to general I/O ports. Safety equipment should only be used with safety-related I/O ports.
8. Pay attention to the robot's movements when using a tablet PC for teaching.
9. Do not enter the robot's operating range while in use or touch the robot.
10. Never modify a robot. Rainbow Robotics (“manufacturer”) is not responsible for any issues arising from changes or modifications made arbitrarily by the user to the product.
11. The robot arm and controller generate heat when used for a long time. Do not touch the robot with your hands after using it for a long time. If you need to touch the robot, turn off the controller's power and wait for it to cool down sufficiently before handling it.
12. When the robot collides with an external object, a significant level of impact occurs in proportion to speed and payload.
13. Verify that you are using the recommended settings for the robot installation. If you do not accurately enter the direction of installation of the robot arm, weight of the tool, center of gravity, length, safety of the tool, etc., the direct teaching or collision detection function may not work properly.
14. The direct teaching function should be used in a safe environment. Do not use it if the tool or surrounding fixtures or parts have sharp edges or if they can cause pinching.
15. Before using the direct teaching function, make sure that all tool-related information (such as the tool's length, weight, and center of gravity) are accurately entered. Entering information different from the actual tool specifications can cause malfunctions when using the direct teaching function.
16. When using the direct teaching function, the joints may be emergency-stopped for the user's safety if operated above a certain speed.
17. The robot arm and control box generate heat during operation. Continuous contact with the robot arm can cause malfunctions, so do not handle or touch the robot arm with your hands during or immediately after the operation. Before manipulating or touching the robot arm, check the temperature on the UI screen or turn off the power of the robot arm and wait for more than one hour to allow it to cool sufficiently before handling.
<!-- 여기 꼭 한줄 띄울것!!!! 안그러면 아래 caution 블럭이 이 warning 블럭 안쪽으로 들어와버림. -->

:::

<div class="warning custom-block">
    <p class="custom-block-title">CAUTION</p>
    <ol>
        <li>
            When using the robot with machines or other robots that could potentially cause damage to the robot, we recommend testing all functions separately before use.
            The manufacturer is not responsible for any damage to other machines or robots caused by an error in programming or a robot malfunction.
        </li>
        <li>
            Do not expose the robot to strong magnetic fields (may damage the robot).
        </li>
    </ol>
</div>

:::warning

1. Attach warning signs in places with risk of electric shock due to electrical devices.
2. Do not tear, damage, or remove the signs. Be careful when handling the parts or devices to which the signs are attached and the surrounding parts.
3. Do not touch the electrical components inside.

:::

### 1. Components

A total of two boxes containing the robot and system components are provided, and the system components provided within them are as follows.

- Robot Arm

![missing](/technical_docs/common/start_user_guide/1-1.png)

※ Items marked with ( ) are optional products.

<table class="th-align td-align">
    <tr>
        <th>Robot</th>
        <th>1</th>
        <td>Robot Arm</td>
    </tr>
    <tr>
        <th rowspan=3>Tool Box</th>
        <th>2</th>
        <td>Bolt, washers, wrenches</td>
    </tr>
    <tr>
        <th>(3)</th>
        <td>※ Tools dedicated to NSF models – Base fixing tool</td>
    </tr>
    <tr>
        <th>(4)</th>
        <td>Tool I/O Cable</td>
    </tr>
</table>

:::tip
※ Tools specific to the NSF model are only applicable to the components of the NSF model.<br>
※ The components may vary depending on the robot's specifications.<br>
※ Product images in this manual are for illustration purposes only and may be different from the actual product.
:::

- Control Box

![missing](/technical_docs/common/start_user_guide/1-2.png)

※ Items marked with ( ) are optional products.

<table class="th-align">
    <tr>
        <th>System Components</th>
        <th>1</th>
        <td>Control Box</td>
    </tr>
    <tr>
        <th rowspan=7>Accessory Box</th>
        <th>2</th>
        <td>AC Power Cable</td>
    </tr>
    <tr>
        <th>3</th>
        <td>Robot - Control Box Connection Cable</td>
    </tr>
    <tr>
        <th>4</th>
        <td>Emergency stop/jog interface</td>
    </tr>
    <tr>
        <th>5</th>
        <td>Control box key (included in some models)</td>
    </tr>
    <tr>
        <th>6</th>
        <td>I/O terminal block (spare), Fuse</td>
    </tr>
    <tr>
        <th>(7)</th>
        <td>Tablet, Short USB Cable, Long USB Cable</td>
    </tr>
    <tr>
        <th>8</th>
        <td>For Service Provision (Examples: USB, Velcro for external cable fixing, etc.)</td>
    </tr>
</table>

:::tip
※ Regarding the control box above, its appearance may change depending on the robot's specifications.<br>
※ It is recommended to use the **5m cables** provided by the manufacturer for the power cable and robot arm-control box. For the emergency stop/jog interface cable, it is recommended to use the cable less than 3m provided by the manufacturer.<br>
※ For shielded LAN cables, I/O port connection cables, USB cables, and external wire lines for use with the through-wire model, it is recommended to use **the wire less than 3m.**<br>
※ The items and configuration for service provision are subject to change without notice.
:::

### 2. Installing the Robot

<br>

#### 2.1 Installing the Robot

1. After unboxing the robot, place it aligned to the hole position of the bolt that will secure the robot.

![missing](/technical_docs/common/start_user_guide/2-1-1.png)

2. Secure the robot using the provided wrench and bolts.

![missing](/technical_docs/common/start_user_guide/2-1-2.png)

:::warning

1. When securing the robot, make sure that the bolts are tightly fastened to prevent them from loosening.
2. Install the robot on a sturdy surface that can withstand its weight and the load that occurs when it operates.
3. Make sure that the robot mounting surface is fully in contact with the base surface.
4. Never arbitrarily disassemble the bolts assembled on the robot. Before operating the robot arm, make sure that all bolts are securely fastened.
5. Using the robot with the bolts disassembled or installing brackets or other components using the bolt assembly area may cause product damage or seriously affect safety.

:::

#### 2.2 Connecting the Control Box

Connect the cables included in the components to the respective connectors at the bottom of the control box.

:::tip
※ The control box below may change in appearance depending on your robot's specifications.
:::

![missing](/technical_docs/common/start_user_guide/2-2-1.png)

1. **AC Power Cable**<br>
   Plug the AC power cable into the correct position on the control box. **(AC Power)**
   - The power supply should be <u>**AC220/110V**</u> single-phase.

![missing](/technical_docs/common/start_user_guide/2-2-2.png)

2. **Emergency Stop/Jog Interface (Male)**<br>
   Plug the emergency stop/jog interface into the correct position on the control box and then turn clockwise to tighten. (**E-STOP/JOG**)

![missing](/technical_docs/common/start_user_guide/2-2-3.png)

3. **Robot-Control Box Connection Cable (Male)**<br>
   Plug the robot - control box connection cable (male) into the correct position on the control box. (ROBOT)

![missing](/technical_docs/common/start_user_guide/2-2-4.png)

4. **Robot-Control Box Connection Cable (Female)**<br>
   Plug the robot - control box connection cable (female) into the correct position on the robot.
   - **When plugging the cable, take note of the direction of the pin.**

![missing](/technical_docs/common/start_user_guide/2-2-5.png)

<div class="warning custom-block">
    <p class="custom-block-title">CAUTION</p>
    <ol>
        <li>
            Do not unplug the AC power cable, robot-control box connection cable, tablet PC connector, etc., while the robot is powered on.
        </li>
        <li>
            The AC power must be grounded.
        </li>
    </ol>
</div>

### 3. Operating the Robot

<br>

#### 3.1 Powering On

1. Turn on the AC power switch on the control box.

![missing](/technical_docs/common/start_user_guide/3-1-1.png)

2. Press the power button on top of the control box to boot up the main PC.

※ While the main PC is booting, “Please Wait” will be displayed on the LCD panel. Once the main PC is ready to operate, “default” (or the name of the basic operation program file) will be displayed on the LCD panel.

![missing](/technical_docs/common/start_user_guide/3-1-2.png)

3. Unlock the emergency switch of the emergency stop/jog interface by turning clockwise.

![missing](/technical_docs/common/start_user_guide/3-1-3.png)

4. Connect the tablet PC to the control box.

![missing](/technical_docs/common/start_user_guide/3-1-4.png)

#### 3.2 Connecting the UI Robot

1. Click the “Rainbow-RB” app on the pendant to execute the UI.

![missing](/technical_docs/common/start_user_guide/3-2-1.png)

With three(3) menus on the main screen, you can enter three stages: creating the robot's movements (Make), actually moving it (Play), and setting up the work environment (Set-up).

2. Click the “Make” button.

![missing](/technical_docs/common/start_user_guide/3-2-2.png)

3. Click the icon in the red box shown in the picture.

![missing](/technical_docs/common/start_user_guide/3-2-3.png)

4. Press the “Connect” button to connect the control box and the tablet PC when the Robot State screen appears.

![missing](/technical_docs/common/start_user_guide/3-2-4.png)

<div class="warning custom-block">
    <p class="custom-block-title">CAUTION</p>
    <ol>
        <li>
            Make sure that the control box is turned on and the emergency stop switch is turned off before attempting to connect. If the control box is not turned on, the “Device Off” lights up in red, and the screen returns to the screen above.
        </li>
    </ol>
</div>

5. When it is properly connected to the robot, the LED indicator in the red box will change to green as shown in the picture.

![missing](/technical_docs/common/start_user_guide/3-2-5.png)

:::tip
※ If you encounter network connection problems while connecting to the network, please refer to **Appendix A**
:::

![missing](/technical_docs/common/start_user_guide/3-2-6.png)

6. Click “Control” to manipulate the robot physically.<br>
   Clicking the “Control” button will initialize the robot arm to a controllable state.<br>
   At this time, the brakes in the joints are released, and sounds are sequentially made from the robot arm.

![missing](/technical_docs/common/start_user_guide/3-2-7.png)

:::tip
※ If you encounter problems while activating the robot, please refer to **Appendix B**
:::

![missing](/technical_docs/common/start_user_guide/3-2-8.png)

7. All LED indicators must be green (otherwise, an error code will be displayed), then click the “Close” button.

![missing](/technical_docs/common/start_user_guide/3-2-9.png)

8. Click “Real Robot” in the red box shown in the picture.<br>
   “Real Robot” mode is a mode that moves not only the robot on the UI screen but also the actual robot.

![missing](/technical_docs/common/start_user_guide/3-2-10.png)

9. When a message box appears, click the “Yes” button.

![missing](/technical_docs/common/start_user_guide/3-2-11.png)

10. You can move the robot using the jog in the red box shown in the picture. Please refer to the user manual for more information.

![missing](/technical_docs/common/start_user_guide/3-2-12.png)

:::warning

1. When moving the robot using the emergency stop/jog interface, make sure that there are no obstacles or people around you before operating.

:::

#### 3.3 Powering Off

1. Click the icon in the red box shown in the picture.

![missing](/technical_docs/common/start_user_guide/3-3-1.png)

2. Click “Powerdown” to turn off the robot. At this time, the joint brakes are applied, and sounds are sequentially made from the robot arm.

![missing](/technical_docs/common/start_user_guide/3-3-2.png)

3. Click the “Disconnect” button.

![missing](/technical_docs/common/start_user_guide/3-3-3.png)

※ If you want to shut down the robot and the UI simultaneously, click the power button at the bottom right, followed by the UI+Robot Shut Down button.

![missing](/technical_docs/common/start_user_guide/3-3-4.png)
![missing](/technical_docs/common/start_user_guide/3-3-5.png)

4. Press and hold down the power button at the top of the control box for more than 3 seconds to turn off the main PC.

![missing](/technical_docs/common/start_user_guide/3-3-6.png)

5. Press the AC power switch at the bottom of the control box to turn off power.

![missing](/technical_docs/common/start_user_guide/3-3-7.png)

### 4. Appendix (Troubleshooting)

<br>

#### A. Network Connection Issues

1. Disconnect the USB-C type cable connected to the tablet.

![missing](/technical_docs/common/start_user_guide/4-1-1.png)

2. Go to tablet settings.

![missing](/technical_docs/common/start_user_guide/4-1-2.png)

3. Go to Tablet Information at the bottom -> Software Information.

![missing](/technical_docs/common/start_user_guide/4-1-3.png)

4. Click the build number in succession.

![missing](/technical_docs/common/start_user_guide/4-1-4.png)

5. When the following pop-up appears, turning on developer mode is complete.

![missing](/technical_docs/common/start_user_guide/4-1-5.png)

6. Shift to Developer mode.

![missing](/technical_docs/common/start_user_guide/4-1-6.png)

7. If USB debugging is on, turn it of.

![missing](/technical_docs/common/start_user_guide/4-1-7.png)

8. Go to the debugging section at the bottom and select Revoke USB debugging authorizations.

![missing](/technical_docs/common/start_user_guide/4-1-8.png)

9. Click the “OK” button.

![missing](/technical_docs/common/start_user_guide/4-1-9.png)

10. Turn on the USB debugging function again.

![missing](/technical_docs/common/start_user_guide/4-1-10.png)

11. Click the "OK" button and reconnect the USB-C type cab.

![missing](/technical_docs/common/start_user_guide/4-1-11.png)

12. Click the “Allow” button.

![missing](/technical_docs/common/start_user_guide/4-1-12.png)

13. Select the “Always allow from the computer” checkbox and click the “Allow” button.

![missing](/technical_docs/common/start_user_guide/4-1-13.png)

14. Unplug and reconnect the USB-C type cable connected to the tablet.

![missing](/technical_docs/common/start_user_guide/4-1-14.png)

15. Click the “Allow” button.

![missing](/technical_docs/common/start_user_guide/4-1-15.png)

※ If the issue above persists, please get in touch with **Rainbow Robotics.**

#### B. Activation Issues

<br>

##### a. In case of Error code A2 problem

![missing](/technical_docs/common/start_user_guide/4-2-1.png)

1. Check whether the emergency stop/jog interface switch is pressed.
2. Make sure that the robot and control box connection cables are plugged in properly.

##### b. In case of Error code A4 problem

![missing](/technical_docs/common/start_user_guide/4-2-2.png)

1. Check whether the cable connecting the robot and the control box is properly connected.

##### c. In case of Error code A12 problem

![missing](/technical_docs/common/start_user_guide/4-2-3.png)

1. Check whether the short bars are inserted into the EMO and PRS areas of the terminal block.

##### d. In case of Error code A53 problem

![missing](/technical_docs/common/start_user_guide/4-2-4.png)

1. Check whether the short bars are inserted into the fuse and external power area of the terminal block.
2. Check whether the fuse is blown.

##### e. In case of Error code A93 problem

![missing](/technical_docs/common/start_user_guide/4-2-5.png)

1. Check whether the short bars are inserted into the HSS and SSS areas of the terminal block.

:::tip
※ If the problem above persists, please contact Rainbow Robotics Inc.<br>
※ If any other error code occurs, please refer to this user guide.
:::
