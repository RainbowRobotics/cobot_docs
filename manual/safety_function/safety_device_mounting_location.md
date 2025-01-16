---
layout: doc
outline: deep
---

# Safety Device Mounting Location

In addition to the basic emergency stop switch, the RB Series can be equipped with additional safety devices required by the system integrator through risk assessment.

The safety-dedicated contact terminal consists of 16 ports. This terminal is a redundant dedicated contact input terminal.

![missing](/manual/common/safety_function/4-1.png)

The additional ports can be equipped with 4 equipment. The robot is delivered with a default configuration, which enables operation without any additional safety equipment.

When using without connecting an external safety device, connect and use the basic contact input as shown below.

![missing](/manual/common/safety_function/4-2.png)

Safety device port specifications are as follows.

- **EMO**<br>
  This port is used when it is necessary to install an extra emergency stop switch through risk assessment.<br>
  The emergency stop switch should be used as a product conforming to IEC 60947-5-5.<br>
  Emergency stop generated through EMO is designated as stop category 1.

- **PRS**<br>
  This port is used to connect one or more protective stop devices through risk assessment.<br>
  Protective stop devices must be used in accordance with 5.3.8.3 of ISO 10218-2.<br>
  Protection stops occurring through PRS are designated as stop category 1.

- **HSS**<br>
  This port is used to connect one or more protective stop devices through risk assessment.<br>
  Protective stop devices must be used in accordance with 5.3.8.3 of ISO 10218-2.<br>
  Protection stops occurring through HSS are designated as stop category 0.

- **SSS**<br>
  This port is used to connect one or more protective stop devices through risk assessment.<br>
  Protective stop devices must be used in accordance with 5.3.8.3 of ISO 10218-2.<br>
  Protective stops that occur through SSS are designated as stop category 2.
