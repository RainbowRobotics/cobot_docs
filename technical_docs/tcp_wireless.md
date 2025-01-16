---
layout: doc
outline: deep
---

# UI Program usage via LAN / Wireless v2.1

### 1. Update the software-s (UI and ControlBox software) to the latest version

<div class="warning custom-block">
    <p class="custom-block-title">CAUTION</p>
    <ol>
        <li>
            System updates should always be performed via USB connection.
        </li>
        <li>
        For more information on how to update the software, refer to the software update document.
        </li>
    </ol>
</div>

Must be used with UI software version 3.7.X or later.<br>
UI software version can be checked as shown in the figure below.

![missing](/technical_docs/common/tcp_wireless/1-1.png)

If the UI software version and the control box software version do not match, a software update recommendation pop-up appears as follows.

![missing](/technical_docs/common/tcp_wireless/1-2.png)

Go-to ‘Setup > System’ as shown in below.

![missing](/technical_docs/common/tcp_wireless/1-3.png)

Click ‘Software update’ button.

![missing](/technical_docs/common/tcp_wireless/1-4.png)

### 2. RB Driver Installation

RB Driver installation is required to connect the UI program with the control box through TCP/wireless communication.

Install the RB Driver application on the android-tablet in the order shown below.<br>
(get RB Driver.apk through distributor or manufacturer)

![missing](/technical_docs/common/tcp_wireless/2-1-1.png)<br>
![missing](/technical_docs/common/tcp_wireless/2-1-2.png)<br>
![missing](/technical_docs/common/tcp_wireless/2-1-3.png)

If you run the RB Driver app, you can see the following screen.

![missing](/technical_docs/common/tcp_wireless/2-3.png)

Connect the robot-control box and the tablet by pressing the Step 1.<br>
If the color of the Step 1 icon changes after connection, it is normally connected.

![missing](/technical_docs/common/tcp_wireless/2-4.png)<br>
![missing](/technical_docs/common/tcp_wireless/2-5.png)

Select TCP/IP in Step 2.

![missing](/technical_docs/common/tcp_wireless/2-6.png)

Click the download button in Step 3 to transfer the driver file in the RB Driver app to the robot Control box.

![missing](/technical_docs/common/tcp_wireless/2-7.png)

If it is pressed normally, the following message appears. (1~5 second)

![missing](/technical_docs/common/tcp_wireless/2-8.png)

Click ‘OK’ after waiting until the following pop-up appears. (1~5 second)

![missing](/technical_docs/common/tcp_wireless/2-9.png)

Click the Install button in Step 4 to install the downloaded driver file in the control box.

![missing](/technical_docs/common/tcp_wireless/2-10.png)

If it is pressed normally, the following message appears. (3~8 second)

![missing](/technical_docs/common/tcp_wireless/2-11.png)

Click ‘OK’ after waiting until the following pop-up appears. (3~8 second)

![missing](/technical_docs/common/tcp_wireless/2-12.png)

If OK is displayed, the driver installation is complete. Reboot the entire system.

### 3.1 IP Address Setting (Android OS UI)

It is recommended to use the router **_exclusively for robots._**

Connect the router directly to the control box as shown below. _(Recommended)._

![missing](/technical_docs/common/tcp_wireless/3-1-1.png)

Connect the Android tablet wifi to the installed router as shown below.<br>
(in the example, AP (router) name is rainbow_software_team).

![missing](/technical_docs/common/tcp_wireless/3-1-2.png)

If the AP (router) and the robot control box are directly connected, the following message can be appeared, and at this time, click ‘Keep Wi-Fi connection’.

![missing](/technical_docs/common/tcp_wireless/3-1-3.png)

Click the button below to check the IP setting/status of the Wifi AP router.<br>
(If you know the IP address of the AP device in advance, you can skip this step.)

![missing](/technical_docs/common/tcp_wireless/3-1-4.png)

Check the IP address. In the example below, you can see that the IP of the tablet PC is set to 192.168.0.8.<br>
Through this, it can be estimated that the operating IP band of the router is 192.168.0.X.<br>
(If you have set the IP of the router separately, this process is not necessary.)

![missing](/technical_docs/common/tcp_wireless/3-1-5.png)

After connecting the control box and the tablet with a USB cable, go to ‘Setup > System’.

Modify the IP/Netmask/Gateway inside the red box to match the range of the AP-router address you checked earlier.<br>
At this time, to match the band, the first three numbers of IP are the same and the last number is set differently.

![missing](/technical_docs/common/tcp_wireless/3-1-7.png)

### 3.2 IP Address Setting (Window OS UI)

This is an example of a direct connection between the user PC and the robot control box.

Connect the user PC and the robot control box directly with a LAN cable.<br>
PC > ‘Start > Settings’

![missing](/technical_docs/common/tcp_wireless/3-2-2.png)

Select ‘Network / Internet’

![missing](/technical_docs/common/tcp_wireless/3-2-3.png)

Click ‘Advanced Network Setting > Adapter option change’

![missing](/technical_docs/common/tcp_wireless/3-2-4.png)

Go to Property of the network driver

![missing](/technical_docs/common/tcp_wireless/3-2-5.png)

Select ‘Internet Protocol Version 4(TCP/IPv4)’ > Property

![missing](/technical_docs/common/tcp_wireless/3-2-6.png)

Select ‘Manual IP Setting’.

![missing](/technical_docs/common/tcp_wireless/3-2-7.png)

Type the desired IP address.

![missing](/technical_docs/common/tcp_wireless/3-2-8.png)

In case of IP setting of robot control box, proceed in the same way as 3.1.6 ~ 3.1.7.

### 4. Connect UI Program and Robot-Control-Box via TCP/IP communication

Run Rainbow Robotics UI, and click the State/Connection button(![missing](/technical_docs/common/tcp_wireless/4-1.png)).

In the ‘Connection Setting’, select ‘TCP/IP mode’.

![missing](/technical_docs/common/tcp_wireless/4-2.png)

Type the IP address of the robot-control-box that was previously set. And click ‘Connect’ button.

![missing](/technical_docs/common/tcp_wireless/4-3.png)

Check that UI program is properly connected to the control-box.

![missing](/technical_docs/common/tcp_wireless/4-4.png)

When the UI program is connected with Control-Box through TCP/IP mode, you can see that there is the word ‘TCP’ inside the connection icon as shown in the following figure.

![missing](/technical_docs/common/tcp_wireless/4-5.png)
