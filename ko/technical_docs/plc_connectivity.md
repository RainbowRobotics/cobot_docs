---
layout: doc
outline: deep
---

# PLC/HMI 통신 연결 가이드 v3.2

### PLC 통신 연결 가이드

Rainbow Robotics 의 제품과 PLC/HMI 제품 연동 시, 다음과 같은 통신 방식들을 사용할 수 있습니다.<br>
지원 가능한 통신은 시스템 업데이트에 따라서 늘어날 수 있습니다.

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
