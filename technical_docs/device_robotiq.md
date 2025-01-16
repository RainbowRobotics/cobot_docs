---
layout: doc
outline: deep
---

# Rainbow x Robotiq Gripper/Sensor v1.2

### 1. Hardware Connection

<div class="warning custom-block">
    <p class="custom-block-title">CAUTION</p>
    <ul>
        <li>
            Before connecting the device, proceed with the connection process with the power off state.
        </li>
    </ul>
</div>

#### 1.1 Connection with Control Box

![missing](/technical_docs/common/device_robotiq/1-1.png)

- Plug the Robotiq product's power cable into 24V on the Control-box I/O terminal block.
- Plug the Robotiq product's ground cable into GND on the Control-box I/O terminal block.
- Plug the Robotiq product's communication USB cable into the USB port of the Control-box.

::: tip
Supporting Devices : 2F-85 / 2F-140 / Hand-E / FT300 / EPick
:::

#### 1.2 Connection with End Tool Flange

![missing](/technical_docs/common/device_robotiq/1-2.png)

- Plug the Robotiq product's power cable into 24V on the Tool-Flange I/O terminal.
- Plug the Robotiq product's ground cable into GND on the Tool-Flange I/O terminal.
- Plug the Robotiq product's RS485 D+, D- (A/B) cables into RS485 on the Tool-Flange I/O terminals.

::: tip
Supporting Devices : 2F-85 / 2F-140 / Hand-E / EPick
:::

### 2. Software Usage

<div class="warning custom-block">
    <p class="custom-block-title">CAUTION</p>
    <ol>
        <li>
            Before connecting the device, proceed with the connection process with the power off state.
        </li>
        <li>
            The UI screen configuration may differ depending on the software version.
        </li>
    </ol>
</div>

#### 2.1 Robotiq Hand-E

Make screen > Command Actions > Gripper

![missing](/technical_docs/common/device_robotiq/2-1.png)

#### 2.2 Robotiq 2F-85

Make screen > Command Actions > Gripper

![missing](/technical_docs/common/device_robotiq/2-2.png)

#### 2.3 Robotiq 2F-140

Make screen > Command Actions > Gripper

![missing](/technical_docs/common/device_robotiq/2-3.png)

#### 2.4 Robotiq EPick

Make screen > Command Actions > Gripper

![missing](/technical_docs/common/device_robotiq/2-4.png)

#### 2.5 FT300 Calibration

Make screen > Right Sidebar > Setting

![missing](/technical_docs/common/device_robotiq/2-5.png)

#### 2.6 Auto COM with FT300

Make screen > Right Sidebar > Setting

![missing](/technical_docs/common/device_robotiq/2-6.png)

#### 2.7 Force-Control with FT300

Make screen > Command Actions > Force

![missing](/technical_docs/common/device_robotiq/2-7.png)
