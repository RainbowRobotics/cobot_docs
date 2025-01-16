---
layout: doc
outline: deep
---

# General Purpose Digital I/O Configuration

All Digital I/O can be used as general purpose digital I/O. To use other external equipment with the robot, connect the I/O from the robot control box with the corresponding equipment.<br>
The universal digital I/O can be used to configure devices such as relays or PLC systems.<br>
In this configuration, the output is always LOW unless the program is running. The following subsections are examples.

### 1. Electric load control with digital output

The figure below shows a way to control electric load by using the digital output.

![missing](/manual/common/installation/9-1.png)

### 2. Control of digital input with a button

The figure below shows a simple way of connecting a button to the digital input.

![missing](/manual/common/installation/9-2.png)

### 3. Communication with other system or PLC

If another other system provides PNP and uses a common ground, the digital I/O can be configured to communicate with the other system. Its connection is shown in the figure below.

![missing](/manual/common/installation/9-3.png)

:::tip
For the details in the technical specification and wire connection, please refer to Appendix D.
:::
