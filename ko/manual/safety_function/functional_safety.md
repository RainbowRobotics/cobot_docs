---
layout: doc
outline: deep
---

# 기능 안전

제조업체는 설치 위치에 대해 다음 조건을 충족할 것을 권장합니다. 협동로봇 RB Series의 안전 기능은 위험성 평가에 의해 결정된 로봇 시스템의 위험을 줄이기 위해 사용됩니다.

안전기능의 파라미터는 초기 출하 시 설정되어 있으며, 시스템 통합자는 위험성 평가에 따라 일부 항목을 변경할 수 있습니다. 위치와 속도 항목은 로봇의 Base를 기준으로 합니다.

다음은 RB Series가 제공하는 안전 기능 사양입니다.

<table class="th-align td-align">
  <tr>
    <th></th>
    <th>안전 기능</th>
    <th>PL & Category</th>
  </tr>
  <tr>
    <th rowspan=3>안전 정지 기능</th>
    <td>SF.1 STO (Safe Torque Off)</td>
    <td>PL d, Category 3</td>
  </tr>
  <tr>
    <td>SF.2 SS1 (Safe Stop 1)</td>
    <td>PL d, Category 3</td>
  </tr>
  <tr>
    <td>SF.3 SS2 (Safe Stop 2)</td>
    <td>PL d, Category 3</td>
  </tr>
  <tr>
    <th rowspan=9>안전 모니터링 기능</th>
    <td>SF.4 SOS (Safe Operating Stop)</td>
    <td>PL d, Category 3</td>
  </tr>
  <tr>
    <td>SF.5 SLP (Safely-Limited Position)</td>
    <td>PL d, Category 3</td>
  </tr>
  <tr>
    <td>SF.6 SLS (Safely-Limited Speed)</td>
    <td>PL d, Category 3</td>
  </tr>
  <tr>
    <td>SF.7 SLA (Safely-Limited Acceleration)</td>
    <td>PL d, Category 3</td>
  </tr>
  <tr>
    <td>SF.8 SLI (Safely-Limited Increment)</td>
    <td>PL d, Category 3</td>
  </tr>
  <tr>
    <td>SF.9 SLT (Safely-Limited Torque)</td>
    <td>PL d, Category 3</td>
  </tr>
  <tr>
    <td>SF.10 RPL (Robot Position Limit)</td>
    <td>PL d, Category 3</td>
  </tr>
  <tr>
    <td>SF.11 TSL (TCP Speed Limit)</td>
    <td>PL d, Category 3</td>
  </tr>
  <tr>
    <td>SF.12 CBPL (Control Box Power Limit)</td>
    <td>PL d, Category 3</td>
  </tr>
  <tr>
    <th rowspan=2>비상 정지</th>
    <td>SF.13 EMS1 (Emergency Stop1)</td>
    <td>PL d, Category 3</td>
  </tr>
  <tr>
    <td>SF.14 EMS2 (Emergency Stop2)</td>
    <td>PL d, Category 3</td>
  </tr>
  <tr>
    <th rowspan=3>보호 정지</th>
    <td>SF.15 PRS (Protective Stop)</td>
    <td>PL d, Category 3</td>
  </tr>
  <tr>
    <td>SF.16 HSS (Hard Safeguard Stop)</td>
    <td>PL d, Category 3</td>
  </tr>
  <tr>
    <td>SF.17 SSS (Soft Safeguard Stop)</td>
    <td>PL d, Category 3</td>
  </tr>
</table>

- **STO(Safe Torque Off)**: 이 기능은 힘을 발생시키는 동력이 모터에 공급되는 것을 방지합니다. 회전을 유발할 수 있는 전원은 모터에 공급되지 않습니다. 이 안전 관련 하부 기능은 IEC 60204-1의 정지 카테고리 0에 따른 제어되지 않은 정지에 해당합니다.
- **SS1(Safe Stop 1)**: 이 기능은 다음 중 하나로 지정됩니다.<br>
  a) SS1-d (Safe-Stop 1 감속 제어)는 모터를 정지하기 위해 선택한 한계 내에서 모터 감속 속도를 시작 및 제어하고 모터 속도가 지정된 한계 미만일 때 STO 기능을 수행합니다. 또는 b) SS1-r (안전 정지 1 램프 모니터링)는 모터를 정지하기 위해 선택한 한계 내에서 모터 감속 속도를 시작 및 모니터링하고 모터 속도가 지정된 한계 미만일 때 STO 기능을 수행합니다.
  또는 c) SS1-t (안전 정지 1 시간 제어)는 모터 감속을 시작하고 애플리케이션 특정 시간 지연 후 STO 기능을 수행합니다. 이 안전 관련 하부 기능은 IEC 60204-1의 정지 카테고리 1에 따라 제어된 정지에 해당합니다. 우리 시스템은 SS1-t를 사용합니다.
- **SS2(Safe Stop 2)**: 이 기능은 a) SS2-d (안전 정지 2 감속 제어)가 선택한 한계 내에서 모터 감속 속도를 시작 및 제어하여 모터를 정지하고 모터 속도가 지정된 한계 미만일 때 안전 작동 정지 기능을 수행합니다. 또는 b) SS2-r (안전 정지 2 램프 모니터링)는 모터를 정지하기 위해 선택한 한계 내에서 모터 감속 속도를 시작 및 모니터링하고 모터 속도가 지정된 한계 미만일 때 안전 작동 정지 기능을 수행합니다. 또는 c) SS2-t (안전 정지 2 시간 제어)는 모터 감속을 시작하고 애플리케이션 특정 시간 지연 후 안전 작동 정지 기능을 수행합니다. 이 안전 관련 하부 기능 SS2는 IEC 60204-1의 정지 카테고리 2에 따라 제어된 정지에 해당합니다. 우리 시스템은 SS2-t를 사용합니다.
- **SOS(Safe Operating Stop)**: 이 기능은 모터가 정지 위치에서 정의된 양 이상 벗어나는 것을 방지합니다. PDS (SR)는 모터에 에너지를 제공하여 외부 힘에 저항할 수 있도록 합니다. 작동 중지 기능에 대한 이 설명은 외부 (예: 기계) 브레이크 없이 PDS (SR)를 통한 구현을 기반으로 합니다.
- **SLP(Safely-Limited Position)**: 이 기능은 모터 shaft (또는 리니어 모터를 사용하는 경우 이동기)가 지정된 위치 제한을 초과하는 것을 방지합니다.
- **SLS(Safely-Limited Speed)**: 이 기능은 모터가 지정된 속도 제한을 초과하는 것을 방지합니다.
- **SLA(Safely-Limited Acceleration)**: 이 기능은 모터가 지정된 가속 또는 감속 한계를 초과하는 것을 방지합니다.
- **SLI(Safely-Limited Increment)**: 이 기능은 모터 축이 지정된 시간 내에 지정된 위치 증가 한계를 초과하는 것을 방지합니다.
- **SLT(Safely-Limited Torque)**: 이 기능은 모터가 지정된 토크 (또는 리니어 모터를 사용하는 경우 힘) 제한을 초과하는 것을 방지합니다.
- **RPL(Robot Position Limit)**: 이 기능은 로봇 팔의 TCP (공구 중심점) 또는 몸체 프레임이 지정된 공간 영역을 초과하는 것을 방지합니다.
- **TSL(TCP Speed Limit)**: 이 기능은 로봇 팔의 TCP 속도가 지정된 속도를 초과하는 것을 방지합니다.
- **CBPL(Control Box Power Limit)**: 이 기능은 컨트롤 박스의 전력 소비가 지정된 제한을 초과하는 것을 방지합니다.
- **EMS1(Emergency Stop1)**: 이 기능은 티칭 펜던트 장치의 비상 정지 스위치가 활성화될 때 정지 모드를 활성화합니다. 정지 모드는 SF.2입니다.
- **EMS2(Emergency Stop2)**: 이 기능은 컨트롤 박스의 특수 I/O 포트가 활성화되면 정지 모드를 활성화합니다. 이러한 포트는 사용자가 자신의 스위치 장치를 연결할 수 있도록 제공됩니다. 정지 모드는 SF.2입니다.
- **PRS(Protective Stop)**: 이 기능은 컨트롤 박스의 특수 I/O 포트가 활성화되면 정지 모드를 활성화합니다. 이러한 포트는 사용자가 자신의 보호 장치를 연결할 수 있도록 제공됩니다. 정지 모드는 SF.2입니다.
- **HSS(Hard Safeguard Stop)**: 이 기능은 컨트롤 박스의 특수 I/O 포트가 활성화되면 정지 모드를 활성화합니다. 이러한 포트는 사용자가 자신의 보호 장치를 연결할 수 있도록 제공됩니다. 정지 모드는 SF.1입니다.
- **SSS(Soft Safeguard Stop)**: 이 기능은 컨트롤 박스의 특수 I/O 포트가 활성화되면 정지 모드를 활성화합니다. 이러한 포트는 사용자가 자신의 보호 장치를 연결할 수 있도록 제공됩니다. 정지 모드는 SF.3입니다.
