---
layout: doc
outline: deep
---

# Set-up (Socket/Serial)

This is the section where you can configure the serial communication between the robot's tool and the control box.

![missing](/manual/en/setup/6.png)

1. You can assign a unique IP address to the control box.<br>
   The default IP address of the control box is set to 10.0.2.7.<br>
   When connecting the tablet PC wirelessly to the control box or using a LAN cable to connect a PC to the control box, ensure that the bandwidth of the IP address matches.<br>
   For the Ping test, enter the IP address of the device connected to the control box and press the test button to check the connection status.
2. - **High-speed External Script Mode** : While the usual control cycle for external script control is 10ms, the high-speed external script mode supports 1.8ms.
   - **Command Port(5000)** : This port is used when an external device sends commands to the control box during external script control (refer to Appendix E for more details).
   - **Data Port(5001)** : This port is used when an external device receives data from the control box (refer to the Data Structure for more details).
   - **Modbus Server Port(502)** : This port is used for Modbus communication.
3. - **Tool Flange** : You can configure the communication speed, parity bit, and other settings for the RS485 on the tool flange side.
   - **Control Box** : You can configure the communication speed, parity bit, and other settings for the RS485 on the control box side.
4. Save the modified settings.
