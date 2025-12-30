---
layout: doc
outline: deep
---

# RB Series Software Update v8.0

:::tip
If the software versions of the RB UI and the control box are different,<br> 
an alarm window may appear during the process of connecting the UI to the control box, as shown below.<br>
This alarm does not affect the normal operation of the robot; however, <br>
to avoid any inconvenience caused by the alarm display, we recommend performing a software update.
:::
![missing](/technical_docs/common/tcp_wireless/swup.jpg)

### How to Update Software

<div class="warning custom-block">
  <p class="custom-block-title">WARNING</p>
  <ul>
    <li>
      It is recommended to back-up the program files (.wsl) inside the tablet UI before the system update.
    </li>
  </ul>
</div>

#### 1. Rainbow Robotics' system update is a two-step process.

<br>

<div style="padding: 8px 8px 8px 16px; background-color: rgba(0, 0, 255, 0.1); border-radius: 8px;">
  <p>UI update through APK install → System software (control box) update</p>
</div>

<br>

#### 2. Backup Program file

Connect the tablet and personal / business PC and obtain the program files (.wsl) from the path below and back them up.<br>

- It is recommended that you back up the acquired files before proceeding to the next step.

<div style="padding: 8px 8px 8px 16px; background-color: rgba(0, 0, 255, 0.1); border-radius: 8px;">
  <p>Tablet > Android > data > com.rainbow.cobot > files > work > GET .wsl files</p>
</div>

<br>

#### 3. UI Program Update

Rainbow Robotics' tablet UI program is distributed in the form of APK.<br>
This is the same installation file as a regular Android application. Therefore, UI program is updated by moving the installation APK file to the tablet and installing it.

:::warning

- Since the program files (.wsl) are also deleted when the existing application is deleted, back up the program file in step 1.2 before proceeding with this process.
- When updating without deleting the existing application, program files (wsl) and other settings are maintained. Nevertheless, it is recommended to back up the 1.2 process
  :::

<div style="padding: 8px 8px 8px 16px; background-color: rgba(0, 0, 255, 0.1); border-radius: 8px;">
  <p>Copy the distributed APK file into Table → APK install</p>
</div>

<br>

#### 4. Connection between Tablet PC and Control Box

Connect the tablet to the control box using a USB cable and run the UI program. After running the UI program, connect the tablet and the control box communication.<br>

- If the communication between the tablet and the control box is normal, the first box will be lit blue. For safety reasons, it is recommended not to initialize the robot arm

<div style="padding: 8px 8px 8px 16px; background-color: rgba(0, 0, 255, 0.1); border-radius: 8px;">
  <p style="display:flex; align-items:center; white-space:pre">
    UI Home → Setup → Click ‘State’ button 
    <img src="/technical_docs/common/tcp_wireless/4-1.png" />
    → Connect</p>
</div>

<br>

#### 5. Go to and activate the system software update

Navigate to the system software update path as shown below.

<div style="padding: 8px 8px 8px 16px; background-color: rgba(0, 0, 255, 0.1); border-radius: 8px;">
  <p>UI Home → Setup → System Tab</p>
</div>

![missing](/technical_docs/common/software_update/8-1.png)

In the [Software Update] section on the left, click the Activate checkbox.

![missing](/technical_docs/common/software_update/8-2.png)

#### 6. Progress Control-Box System Software Update

The Update button will appear and click this button to open a popup window.

At the top of the screen, click **System reboot after software update.**

![missing](/technical_docs/common/tcp_wireless/sw0.jpg)

Press “OK” button to update the control box software.

![missing](/technical_docs/common/tcp_wireless/sw1.jpg)

If the update is completed normally after clicking the OK button, the PC of the control box (controller) will automatically restart within 5 ~ 15 seconds.

![missing](/technical_docs/common/tcp_wireless/sw02.jpg)

- During the restart process, “Please Wait…” is displayed on the LCD of the control box. This indicates that the control box is rebooting.
- After the reboot is completed, “Normal Operation” (or other messages may appear) is displayed on the LCD of the control box.

#### 7. Check the Software Update

Reconnect the UI tablet and control box.

<div style="padding: 8px 8px 8px 16px; background-color: rgba(0, 0, 255, 0.1); border-radius: 8px;">
  <p style="display:flex; align-items:center; white-space:pre">
    UI Home → Make → Click ‘State’ button 
    <img src="/technical_docs/common/tcp_wireless/4-1.png" />
    → Connect</p>
</div>

When you go back to the home screen of the UI, the software version is displayed on the upper right (or lower left). Check if it is updated to the correct version.

![missing](/technical_docs/common/tcp_wireless/swf.png)

<span style="color:red">When the update is completed normally, this update<br>
<b>System Version: 25122404 [8.0.4], Ui Version: 8.0.4</b> should be displayed</span>
