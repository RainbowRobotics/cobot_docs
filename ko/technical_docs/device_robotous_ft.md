---
layout: doc
outline: deep
---

# Rainbow x Robotous FT-Sensor v1.3

### 1. 하드웨어 결선

<div class="warning custom-block">
  <p class="custom-block-title">주의</p>
  <ul>
    <li>
      결선 재구성 시, 시스템 전원이 꺼진 상태에서 진행하세요.
    </li>
    <li>
      센서에 관한 자세한 정보는 센서 제조사 홈페이지를 참고하세요.
    </li>
    <li>
      <a href="http://www.robotous.com/main" target="_blank">
        http://www.robotous.com/main
      </a>
    </li>
  </ul>
</div>

![missing](/technical_docs/common/device_robotous_ft/1-1.png)

- 센서의 전원은 안정적인 DC 5V 전원이 공급되어야 합니다.
- CAN 통신 선은 트위스트/쉴드 캐이블을 사용해야 합니다.
- RB 제품과 사용 전, Robotous의 CAN 통신은 아래와 같이 사전 설정되어야 합니다.

  > CAN baud rate : 1Mbit/s<br>
  > Command CAN ID (Robot > Sensor) : 0xF0 (=240)<br>
  > Data CAN ID (Sensor > Robot) : 0xF1 (=241) & 0xF2 (=242)<br>

  위의 세 가지 CAN ID 설정은, 센서 사용 전에 센서에 세팅 되어야 합니다.

### 2. 소프트웨어 사용

<div class="warning custom-block">
<p class="custom-block-title">주의</p>
<ul>
<li>
결선 재구성 시, 시스템 전원이 꺼진 상태에서 진행하세요.
</li>
</ul>
</div>

장치 연결 이후, UI 프로그램을 통하여 Setup > Interface 에서 외부 F/T 센서를 Robotous RFT806A 로 설정합니다.

![missing](/technical_docs/common/device_robotous_ft/2-1.png)

설정 완료 후, 시스템을 재부팅 합니다. 하드웨어 결선과 소프트웨어 설정이 잘 되어 있다면, Make 페이지 하단에서 센서 값 확인이 가능합니다.

![missing](/technical_docs/common/device_robotous_ft/2-2.png)

수신된 센서 값을 이용하여 각종 판단에 사용하거나, 힘 제어 등에서 사용할 수 있습니다.<br>
아래의 스크린샷은 힘 제어 화면의 일부 입니다.

![missing](/technical_docs/common/device_robotous_ft/2-3.png)
