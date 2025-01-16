---
layout: doc
outline: deep
---

# Rainbow x Robotous FT-Sensor v1.3

### 1. Hardware Connection

<div class="warning custom-block">
  <p class="custom-block-title">CAUTION</p>
  <ul>
    <li>
      When configuring the wiring, proceed with the system power off.
    </li>
    <li>
      For more information about the sensor, refer to the sensor manufacturer's website.
    </li>
    <li>
      <a href="http://www.robotous.com/main" target="_blank">
        http://www.robotous.com/main
      </a>
    </li>
  </ul>
</div>

![missing](/technical_docs/common/device_robotous_ft/1-1.png)

- The sensor should be powered by a stable DC 5V power supply.
- The CAN communication line must use a twisted/shielded cable.
- Before using with RB product, CAN communication of Robotous should be preset as follows.

  > CAN baud rate : 1Mbit/s<br>
  > Command CAN ID (Robot > Sensor) : 0xF0 (=240)<br>
  > Data CAN ID (Sensor > Robot) : 0xF1 (=241) & 0xF2 (=242)<br>

### 2. Software Usage

<div class="warning custom-block">
  <p class="custom-block-title">CAUTION</p>
  <ul>
    <li>
      When configuring the wiring, proceed with the system power off.
    </li>
  </ul>
</div>

After connecting the device, set the external F/T sensor to Robotous RFT806A in Setup > Interface through the Ui program.

![missing](/technical_docs/common/device_robotous_ft/2-1.png)

After completing the setting, reboot the system. If the hardware wiring and software settings are well done, you can check the sensor value at the bottom of the Make page.

![missing](/technical_docs/common/device_robotous_ft/2-2.png)

The received sensor value can be used for various judgments or used for Force control, etc.<br>
The screenshot below is part of the Force Control screen.

![missing](/technical_docs/common/device_robotous_ft/2-3.png)
