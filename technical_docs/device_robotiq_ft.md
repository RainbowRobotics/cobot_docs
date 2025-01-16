---
layout: doc
outline: deep
---

# Rainbow x Robotiq FT-Sensor v1.4

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
      <a href="https://robotiq.com/products/ft-300-force-torque-sensor" target="_blank">
        https://robotiq.com/products/ft-300-force-torque-sensor
      </a>
    </li>
  </ul>
</div>

![missing](/technical_docs/common/device_robotiq_ft/1-1.png)

- Plug the Robotiq product's power cable into 24V on the Control-box I/O terminal block.
- Plug the Robotiq product's ground cable into GND on the Control-box I/O terminal block.
- Plug the Robotiq product's communication USB cable into the USB port of the Control-box.
- As shown in the example installation picture below, note the relative mounting-direction between the sensor cable and the robot's direct-teaching-button.

![missing](/technical_docs/common/device_robotiq_ft/1-2.png)

### 2. Software Usage

<div class="warning custom-block">
  <p class="custom-block-title">CAUTION</p>
  <ul>
    <li>
      When configuring the wiring, proceed with the system power off.
    </li>
  </ul>
</div>

After connecting the device, set the external F/T sensor to Robotiq F/T300 in Setup > Interface through the Ui program.

![missing](/technical_docs/common/device_robotiq_ft/2-1.png)

After completing the setting, reboot the system. If the hardware wiring and software settings are well done, you can check the sensor value at the bottom of the Make page.

![missing](/technical_docs/common/device_robotiq_ft/2-2.png)

The received sensor value can be used for various judgments or used for Force control, etc.<br>
The screenshot below is part of the Force Control screen.

![missing](/technical_docs/common/device_robotiq_ft/2-3.png)
