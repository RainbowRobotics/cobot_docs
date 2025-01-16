---
layout: doc
outline: deep
---

# 통신 포트 보안에 관한 기본 안내서 v2.0

### 1. 통신 포트 개요

Rainbow Robotics (레인보우 로보틱스) 의 로봇 제어 박스 (Robot-Control Box)에서는 아래와 같은 네트워크 통신이 제공됩니다.

<ol>
  <li>
    <span style="font-weight: bold;">
      로봇 제어 및 데이터 수집 등을 위한 네트워크
    </span>
    <ul>
      <li>
        로봇 제어: 5000 번 포트
      </li>
      <li>
        로봇 데이터 수집: 5001 번 포트
      </li>
    </ul>
  </li>
  <li>
    <span style="font-weight: bold;">
      산업용 통신 및 일반 데이더 송수신 용 네트워크
    </span>
    <ul>
      <li>
        Modbus TCP: 502 번 포트
      </li>
      <li>
        Misubishi MC 통신: 사용자 지정 포트
      </li>
      <li>
        LS Elec. XGT 통신: 2004 번 포트
      </li>
      <li>
        OMRON FINS 통신: 사용자 지정 포트
      </li>
      <li>
        SIEMENS S7 통신: 102 번 포트
      </li>
      <li>
        HMI MemLink 통신: 사용자 지정 포트
      </li>
      <li>
        일반 소켓 통신: 사용자 지정 포트
      </li>
    </ul>
  </li>
</ol>

위와 같이 5000, 5001 포트는 _항상_ 열려있으며, 나머지 데이터 네트워크 포트는 사용자의 명시적인 사용여부 설정/프로그램이 있어야만 사용 가능합니다.

### 2. 통신 보안

앞선 1장에서, _보안이 요구되는 포트는 **5000번과 5001번** 포트_ 입니다.<br>
나머지 데이터 포트는 사용자가 명시적으로 해당 기능을 사용 해야지만 사용되는 포트이기 때문입니다.<br>

5000번 5001번 포트는 항상 열려있는 (open) 포트이기 때문에, 아래와 같은 두 가지 방법으로 네트워크 보안 구성을 할 수 있습니다.

#### 2.1 라우터/허브 단계에서 로봇 시스템으로 가는 5000/5001번 포트 차단

- 가장 간단하고, 확실한 방법입니다.
- 자동화 시스템 내부 네트워크와 외부 네트워크를 중계하는 라우터 (Router) 단계에서 포트를 막는 방법입니다. (포트 포워딩 차단)
- 외부에서 들어오는 5000/5001번 포트를 내부로 접근 못하도록 막는 방식입니다.

![missing](/technical_docs/common/socket_security/2-1.png)

#### 2.2 소프트웨어적인 키/문법을 통한 엑세스 차단

- 위의 2.1과 같은 방식으로 포트가 차단되어 있지 않더라도, 5000/5001 포트를 통해 제어/데이터 수신을 하기 위해서는 규정된 키와 문법이 필요합니다.
- 이를 통해서, 허가되지 않은 키 또는 규정되지 않은 문법으로 외부에서 엑세스 할 경우, 로봇은 동작을 멈추고, 해당 통신은 시스템에 영향을 미치지 않습니다.

### 3. 참고 자료

아래의 표는 데이터 송/수신용 기능/네트워크의 사용 범주를 나타냅니다.

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
