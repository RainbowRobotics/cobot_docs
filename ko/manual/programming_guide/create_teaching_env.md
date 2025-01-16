---
layout: doc
outline: deep
---

# 티칭 환경 만들기

로봇 티칭(프로그래밍)은 Make 화면에서만 가능합니다.

<p style="display:flex; align-items:center; white-space:pre">
    Play 혹은 Setup 화면이 띄워져 있다면, UI 상단 부분에 있는
     <img src="/manual/ko/programming_guide/icons/65.png" width=50 /> 버튼을 통해 </p>
Make 화면으로 이동하시기 바랍니다. 혹은 Home 화면으로 이동하여 Make 화면으로 이동도 가능합니다.

### 태블릿 PC와 컨트롤 박스 연결하기

<p style="display:flex; align-items:center; white-space:pre">
<img src="/technical_docs/common/tcp_wireless/4-1.png" /> 아이콘을 통해 로봇 컨트롤 박스와 태블릿 PC를 연결해야만 로봇을 티칭할 수 있는 환경이</p>
만들어집니다.<br>
State 아이콘은 각 화면의 우측 상단에 배치되어 있습니다. State 아이콘을 클릭하면 다음과 같은 화면이 나타나게 됩니다.

![missing](/manual/ko/programming_guide/2-1.png)

로봇 상태 화면이 띄워지게 되면 연결(connect) 버튼을 눌러서 컨트롤 박스와 태블릿 PC를 연결합니다.

- 연결 버튼: 컨트롤 박스와 태블릿 PC 사이의 통신을 연결합니다.

<div class="warning custom-block">
    <p class="custom-block-title">주의</p>
    <ul>
      <li>컨트롤 박스의 전원을 켰는지 확인하시고, 비상 정지 스위치도 해제되어 있는지 먼저 확인 후에 연결을 시도하십시오.</li>
      <li>컨트롤 박스가 켜져 있지 않을 경우, 장치 꺼짐에 빨간 불이 켜지고 위와 같은 화면으로 되돌아 가게 됩니다.</li>
    </ul>
</div>

컨트롤 박스와 컴퓨터가 연결 중 일 때는 아래와 같은 화면이 나타나게 됩니다.

![missing](/manual/ko/programming_guide/2-2.png)

연결을 시도 중에는 첫번째 상태 등이 노란색으로 표시됩니다.

연결이 완료되면 아래와 같은 화면이 나타나게 되고, Control 이라는 버튼이 활성화가 됩니다.

![missing](/manual/ko/programming_guide/2-3.png)

컨트롤 박스와 연결을 마치고 난 다음에는 로봇 컨트롤 시스템을 켜야 합니다. 로봇은 활성화 버튼을 누르면 켜지게 됩니다.

- 활성화: 로봇 팔을 구동 가능 상태로 초기화 합니다.

활성화 버튼을 누르게 되면 로봇 팔을 제어 가능한 상태로 초기화를 합니다.<br>
이 때 관절의 브레이크가 해제되면서 로봇 팔에서 순차적으로 소리가 나게 됩니다.<br>
모든 시스템이 다 켜져서 연결이 되면, 아래 화면과 같이 모든 상태 표시등에 파란불이 켜지게 됩니다.

![missing](/manual/ko/programming_guide/2-4.png)

:::tip

- 만약 로봇 기동 성공에 파란불이 들어오지 않고, 빨간 불이 켜지게 되면 비상정지 스위치 개폐 여부 확인, 툴 부하 세팅 확인, 로봇 설치 각도 확인 등, 안내 팝업 메시지에 따라 설정 및 운용 상황을 확인해 보십시오.
  :::

### 새로운 프로젝트 생성하기

새로운 프로젝트를 생성하기 위해서는 Make 화면 하단 부분에 있는 New버튼을 누르고,<br>
새 프로젝트 만들기 화면에서 빈 프로젝트로 시작 버튼을 누르게 되면 파일 이름을 부여할 수 있는 화면이 나타나게 됩니다.

![missing](/manual/ko/programming_guide/2-5.png)

새로 생성되는 모든 프로젝트의 기본 이름은 **my_project**로 되어 있습니다.<br>
이름을 변경하기 위해 기본 이름이 적힌 박스를 선택하면 그림의 화면처럼 가상 키보드가 나타나면서 이름을 변경할 수 있게 됩니다.<br>
이름을 변경한 후에는 반드시 저장 버튼을 눌러야 프로젝트가 생성됩니다.
