---
layout: doc
outline: deep
---

# Basic Guide to Communication Port Security v2.0

### 1. Communication Ports Overview

The following network communication is provided in Rainbow Robotics' Robot-Control Box.

<ol>
    <li>
        <span style="font-weight: bold;">
            Networks for robot control and data collection, etc.
        </span>
        <ul>
            <li>
                Robot Control: Port number 5000
            </li>
            <li>
                Robot Data/Status Acquisition: Port number 5001
            </li>
        </ul>
    </li>
    <li>
        <span style="font-weight: bold;">
            Network for industrial communication and general data transmission and reception
        </span>
        <ul>
            <li>
                Modbus TCP: Port number 502
            </li>
            <li>
                Misubishi MC Comm.: User defined port number
            </li>
            <li>
                LS Elec. XGT Comm.: Port number 2004
            </li>
            <li>
                OMRON FINS Comm.: User defined port number
            </li>
            <li>
                SIEMENS S7 Comm.: Port number 102
            </li>
            <li>
                HMI MemLink Comm.: User defined port number
            </li>
            <li>
                General TCP/IP Comm.: User defined port number
            </li>
        </ul>
    </li>
</ol>

As mentioned above, ports 5000 and 5001 are _always_ open, and the rest of the data network ports are available only when the user explicitly configures/programs them.

### 2. Communication Security

In Chapter 1, the ports required for security are ports **5000 and 5001.**<br>
This is because the rest of the data ports are used only if the user has to explicitly use that function.<br>

Since ports 5000 and 5001 are always open ports, user can configure network security in the following two ways.

#### 2.1 Block ports 5000/5001 from router/hub level to robot system

- This is the simplest and surest way.
- This is a method of blocking ports at the router level that relays the internal network and external network of the automation system. (Block port forwarding)
- This is a method that blocks the 5000/5001 ports coming from the outside.

![missing](/technical_docs/common/socket_security/2-1.png)

#### 2.2 Block access through software key/grammar

- Even if the port is not blocked in the same way as in 1) above, a prescribed key and grammar are required to receive control/data through the 5000/5001 port.
- Through this, if an unauthorized key or unspecified grammar is accessed from the outside, the robot stops working and the communication does not affect the system.

### 3. Others

The table below shows the usage categories of functions/networks for sending/receiving data.

<!-- rowspan="5" 세로 셀 병합 -->
<!-- colspan="5" 가로 셀 병합 -->
<table class="th-align">
    <tr>
        <th>Manufacturer</th>
        <th>Communication</th>
        <th>Feature</th>
    </tr>
    <tr>
        <td class="sub-title" rowspan="5">SIEMENS</td>
        <td>S7 Protocol</td>
        <td>Server = PLC, Client = Robot</td>
    </tr>
    <tr>
        <td>Modbus TCP Master</td>
        <td>Client(Master) = Robot, Server(Slave) = PLC</td>
    </tr>
    <tr>
        <td>Modbus TCP Slave</td>
        <td>Client(Master) = PLC, Server(Slave) = Robot</td>
    </tr>
    <tr>
        <td>RS232/485</td>
        <td>General Serial communication</td>
    </tr>
    <tr>
        <td>TCP/IP</td>
        <td>General TCP/IP communication</td>
    </tr>
    <tr>
        <td class="sub-title" rowspan="5">OMRON</td>
        <td>FINS</td>
        <td>Server = PLC, Client = Robot</td>
    </tr>
    <tr>
        <td>Modbus TCP Master</td>
        <td>Client(Master) = Robot, Server(Slave) = PLC</td>
    </tr>
    <tr>
        <td>Modbus TCP Slave</td>
        <td>Client(Master) = PLC, Server(Slave) = Robot</td>
    </tr>
    <tr>
        <td>RS232/485</td>
        <td>General Serial communication</td>
    </tr>
    <tr>
        <td>TCP/IP</td>
        <td>General TCP/IP communication</td>
    </tr>
    <tr>
        <td class="sub-title" rowspan="6">MITSUBISHI</td>
        <td>MC Protocol 1E-Binary</td>
        <td>Server = PLC, Client = Robot</td>
    </tr>
    <tr>
        <td>MC Protocol 3E-Binary</td>
        <td>Server = PLC, Client = Robot</td>
    </tr>
    <tr>
        <td>Modbus TCP Master</td>
        <td>Client(Master) = Robot, Server(Slave) = PLC</td>
    </tr>
    <tr>
        <td>Modbus TCP Slave</td>
        <td>Client(Master) = PLC, Server(Slave) = Robot</td>
    </tr>
    <tr>
        <td>RS232/485</td>
        <td>General Serial communication</td>
    </tr>
    <tr>
        <td>TCP/IP</td>
        <td>General TCP/IP communication</td>
    </tr>
    <tr>
        <td class="sub-title" rowspan="5">LS ELEC.</td>
        <td>XGT Protocol</td>
        <td>Server = PLC, Client = Robot</td>
    </tr>
    <tr>
        <td>Modbus TCP Master</td>
        <td>Client(Master) = Robot, Server(Slave) = PLC</td>
    </tr>
    <tr>
        <td>Modbus TCP Slave</td>
        <td>Client(Master) = PLC, Server(Slave) = Robot</td>
    </tr>
    <tr>
        <td>RS232/485</td>
        <td>General Serial communication</td>
    </tr>
    <tr>
        <td>TCP/IP</td>
        <td>General TCP/IP communication</td>
    </tr>
    <tr>
        <td class="sub-title">PROFACE</td>
        <td>Memory Link</td>
        <td>Server = HMI, Client = Robot</td>
    </tr>
    <tr>
        <td class="sub-title">M2I-TOP</td>
        <td>Memory Link</td>
        <td>Server = HMI, Client = Robot</td>
    </tr>
</table>

<style scoped>
th,
td {
  padding: 5px;
}

.sub-title {
  text-align: center;
}
</style>
