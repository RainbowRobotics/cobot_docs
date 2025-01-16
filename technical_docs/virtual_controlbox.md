---
layout: doc
outline: deep
---

# Virtual Control Box Installation v1.5

### 1. Installing the Virtual-Box program on user PC

Click the Windows hosts button from the following link (https://www.virtualbox.org/wiki/Downloads) to download the installation file.<br>
In order to operate the virtual robot control box program, a virtual Linux system is required, so the above program is required to install.

![missing](/technical_docs/common/virtual_box/1-1.png)

Install this program through the Next/Yes button without any additional settings.

![missing](/technical_docs/common/virtual_box/1-2.png)

When the installation is complete, run the program.

### 2. Install and Run the simulator program through Virtual-Box

**Tool → Network**

![missing](/technical_docs/common/virtual_box/2-1.png)

Set the network address as follows.<br>
IP address <u>**_should be ‘10.0.2.1’_**</u><br>
After writing, ‘Apply’ button should be clicked.

![missing](/technical_docs/common/virtual_box/2-2.png)

**File → Import Virtual System**

![missing](/technical_docs/common/virtual_box/2-3.png)

Decompress (un-zip) the distributed compressed file in advance.<br>
Select the attached RBVirtualSimulator.ova and click ‘Next’.

![missing](/technical_docs/common/virtual_box/2-4.png)

Click ‘Import’ to finalize the setup.

![missing](/technical_docs/common/virtual_box/2-5.png)

After setting, RBVirtualSimulator is added to the left side of the program.<br>
Double-click on it to launch the virtual robot control box.

![missing](/technical_docs/common/virtual_box/2-6.png)

If the following error occurs during execution, click the <u>Change Network Settings</u> button.

![missing](/technical_docs/common/virtual_box/2-7.png)

In Adapter 1 tab window, set the connection point to ‘Host-only adapter’ and ‘VirtualBox-Host-Only Ethernet Adapter’ as the name.

![missing](/technical_docs/common/virtual_box/2-8.png)

After completing the previous settings, if you run RBVirtualSimulator again, you can see that the virtual-robot-control-box boots normally.<br>
Wait until the message **\* daemon started successfully** appears in the console window as shown in the screen below.

![missing](/technical_docs/common/virtual_box/2-9.png)

### 3. Launch and connect the Rainbow-RB Window UI program

Run Rainbow-Robotics Window UI program (Rainbow-RB.exe).

![missing](/technical_docs/common/virtual_box/3-1.png)

Enter to ‘Make Page’.<br>
Click the ‘Network’ button (![missing](/technical_docs/common/tcp_wireless/4-1.png)).<br>
In the tablet connection settings, set the mode to ‘TCP/IP’, and enter 10.0.2.7 as the IP address.

![missing](/technical_docs/common/virtual_box/3-2.png)

If UI program is connected with virtual box, the network status icon becomes green.

![missing](/technical_docs/common/virtual_box/3-3.png)

Through the simulation mode, user can simulate the robot.

![missing](/technical_docs/common/virtual_box/3-4.png)
