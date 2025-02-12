---
layout: doc
outline: deep
---

# 안전 입력 구성

사용시 안전을 위해, 안전과 관련된 모든 I/O는 중복으로 구성해야 합니다. 안전 장치 및 장비는 2장 안전 및 3장 설치의 지시 사항을 준수하여 설치해야 합니다. 안전 입력에는 안전 보호 정지가 있습니다. 비상 정지 입력은 로봇의 비상 정지를 위한 것이며, 안전 보호 정지 입력은 로봇의 모든 안전 등급 보호를 위한 것입니다.

<div class="danger custom-block">
  <p class="custom-block-title">경고</p>
  <ul>
    <li>안전 PLC 가 아닌 PLC 에는 <b>절대로</b> 안전 신호를 연결하지 않습니다.</li>
    <li>해당 경고를 따르지 않으면, 안전 정지 기능이 정상적으로 작동되지 않을 수 있으므로 심각한 부상 또는 사망에 이를 수 있습니다.</li>
    <li>안전 신호와 일반 I/O 신호는 분리되어야 합니다.</li>
  </ul>
</div>

<div class="warning custom-block">
  <p class="custom-block-title">주의</p>
  <ul>
    <li>모든 안전 등급의 입출력은 이중화 되어 있습니다.</li>
    <li>해당 채널을 분리하여 신호 장애로 안전 기능이 작동되지 않도록 하여야 합니다.</li>
    <li>안전 기능은 로봇을 설치하기 전, 반드시 확인을 해야 합니다. 또한 해당 기능은 정기적으로 이상유무를 점검해야 합니다.</li>
  </ul>
</div>

### 1. 초기 안전 구성

로봇은 초기 안전 구성이 기본 값으로 설정이 되어 배송이 되므로 추가 설정 없이 구성할 수 있습니다. 초기 안전 구성은 다음과 같습니다.

![missing](/manual/common/installation/8-1.png)

### 2. 안전 보호 정지 및 자동 재시작

기본적인 안전 보호 정지 장치의 예로 도어가 열릴 경우 로봇을 정지하는 도어 스위치가 있습니다. 해당 기능을 구성하는 방법은 다음과 같습니다.

![missing](/manual/common/installation/8-2.png)

### 3. Enabling Device 입력(Option)

사용자는 3위치 활성화 스위치를 사용하여 활성화 장치 입력 인터페이스를 연결할 수 있습니다.<br>
3 위치 활성화 스위치가 작동 위치(중간 위치)에 있을 때 로봇이 움직이기 시작하며, 사용자가 3 위치 활성화 스위치를 놓거나 누를 때 3 위치 활성화 스위치는 비작동 위치에 있고 로봇 팔은 움직이지 않습니다.<br>
제조사는 Enabling Device를 제공하지 않으며, 사용자가 Enabling Device를 사용하고자 하는 경우에 옵션으로 사용할 수 있습니다. 해당 기능을 구성하는 방법은 다음과 같습니다.

![missing](/manual/common/installation/8-3.png)
