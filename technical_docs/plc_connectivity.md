---
layout: doc
outline: deep
---

# Communication with PLC/HMI v3.2

### Communication with PLC/HMI

When connecting Rainbow Robotics products and PLC/HMI products, the following communication methods can be used.<br>
Supported communications may increase with system updates.

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
