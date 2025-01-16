---
layout: doc
outline: deep
---

# System Update

<div class="warning custom-block">
  <p class="custom-block-title">WARNING</p>
  <ul>
    <li>
      It is recommended to back up the program files (.wsl) inside the tablet UI before the system update.
    </li>
  </ul>
</div>

### 1. Overview

Rainbow Robotics' system update is a two-step process.

<div style="padding: 8px 8px 8px 16px; background-color: rgba(0, 0, 255, 0.1); border-radius: 8px;">
  <p>UI update through APK install > System software (control box) update</p>
</div>

### 2. Backup Program file

Connect the tablet and personal/business PC and obtain the program file (.wsl) from the path below and back it up.<br>

- It is recommended that you back up the acquired files before proceeding to the next step.

<div style="padding: 8px 8px 8px 16px; background-color: rgba(0, 0, 255, 0.1); border-radius: 8px;">
  <p>Tablet > Android > data > com.rainbow.cobot > files > work > GET .wsl files</p>
</div>

### 3. UI Update

Rainbow Robotics' tablet UI program is distributed in the form of APK.

This is the same installation file as a regular Android application.<br>
Therefore, UI program is updated by moving the installation APK file to the tablet and installing it.

- Rainbow Robotics recommends installing after deleting an existing application.
- When deleting an existing application, the program file (.wsl) is deleted together. Back up the program file in step 1 and proceed with this process.

<div style="padding: 8px 8px 8px 16px; background-color: rgba(0, 0, 255, 0.1); border-radius: 8px;">
  <p>Copy the distributed APK file into Table > APK install</p>
</div>

### 4. Connection between Tablet PC and Control Box

Connect the tablet to the control box and access the UI program. After connecting, connect the control box communication with the tablet.

- If the communication between the tablet and the control box is normal, the first box will be lit blue. For safety reasons, it is recommended not to initialize the robot.

<div style="padding: 8px 8px 8px 16px; background-color: rgba(0, 0, 255, 0.1); border-radius: 8px;">
  <p style="display:flex; align-items:center; white-space:pre">
    UI Home > Make > Click 'State' <img src="/technical_docs/common/tcp_wireless/4-1.png" /> button > Connect</p>    
</div>

### 5. Go to and activate the system software update

Navigate to the system software update path as shown below.

<div style="padding: 8px 8px 8px 16px; background-color: rgba(0, 0, 255, 0.1); border-radius: 8px;">
  <p>UI Home > Setup > System Tab</p>
</div>

![missing](/manual/en/appendix/j/5-1.png)

In the “Software Update” section on the right, click the Activate checkbox.

![missing](/manual/en/appendix/j/5-2.png)

### 6. Progress System Software Update

The Update button will appear, and click this button to open a popup window.

![missing](/manual/en/appendix/j/6.png)

Press “OK” button to update the software.

If the update is completed normally after clicking the OK button, the PC of the control box (controller) will automatically restart within 5~15 seconds.

During the restart process, “Please Wait…” is displayed on the LCD of the control box. Is displayed temporarily. This indicates that the control box is rebooting.<br>
After the reboot is completed, “Normal Operation” is displayed on the LCD of the control box.

### 7. Check the Update

Reconnect the UI tablet and control box.

<div style="padding: 8px 8px 8px 16px; background-color: rgba(0, 0, 255, 0.1); border-radius: 8px;">
  <p style="display:flex; align-items:center; white-space:pre">
    UI Home > Top Left</p>   
</div>

When you go back to the home screen of the UI, the software version is displayed on the upper left.<br>
In this context, "System Version" refers to the software version of the control box, while "UI Version" refers to the software version of the tablet PC.

![missing](/manual/en/appendix/j/7.png)
