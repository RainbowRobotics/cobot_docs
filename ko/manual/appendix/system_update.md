---
layout: doc
outline: deep
---

# 시스템 업데이트

<div class="warning custom-block">
  <p class="custom-block-title">주의</p>
  <ul>
    <li>
      시스템 업데이트 이전에 태블릿 UI 내부의 프로그램 파일 (.wsl)을 백업해 두는 것을 권장합니다.
    </li>
  </ul>
</div>

### 1. 개요

시스템 업데이트는 크게 두 단계로 이루어집니다.

<div style="padding: 8px 8px 8px 16px; background-color: rgba(0, 0, 255, 0.1); border-radius: 8px;">
  <p>APK 설치를 통한 UI 프로그램 업데이트 > 시스템 소프트웨어 업데이트</p>
</div>

### 2. 작업 프로그램 백업

태블릿과 개인/업무용PC를 연결하여 아래의 경로에서 프로그램 파일 (.wsl)을 획득 후 백업합니다.<br>

- 다음 단계 진행 전 획득한 파일을 백업해 두는 것을 권장합니다.

<div style="padding: 8px 8px 8px 16px; background-color: rgba(0, 0, 255, 0.1); border-radius: 8px;">
  <p>Tablet > Android > data > com.rainbow.cobot > files > work > 작업할 .wsl 획득</p>
</div>

### 3. UI 프로그램 업데이트

태블릿 UI/메인 시스템 프로그램은 APK 형태로 배포됩니다.

이는 일반 안드로이드 어플리케이션과 동일한 형태의 설치 파일입니다.<br>
따라서 설치 APK 파일을 태블릿으로 이동 후 설치하면 UI 프로그램이 업데이트 됩니다.

- 레인보우로보틱스에서는 기존의 어플리케이션을 삭제 후 설치를 권장.
- 기존의 어플리케이션 삭제 시 프로그램 파일(.wsl)이 같이 삭제되기 때문에, 1과정에서 프로그램 파일을 백업 후 본 과정을 진행하기 바람.

<div style="padding: 8px 8px 8px 16px; background-color: rgba(0, 0, 255, 0.1); border-radius: 8px;">
  <p>배포된 APK 파일을 태블릿으로 이동 > APK 설치</p>
</div>

### 4. 태블릿과 컨트롤 박스 연결

태블릿을 컨트롤 박스에 연결하고 UI프로그램에 접속합니다. 접속 후 태블릿과 컨트롤 박스 통신을 연결합니다.

- 태블릿과 컨트롤 박스 사이 통신이 정상 연결되면 첫 번째 칸에 파란 불이 들어옵니다. 안전상, 로봇 초기화는 진행하지 않는 것을 권장합니다.

<div style="padding: 8px 8px 8px 16px; background-color: rgba(0, 0, 255, 0.1); border-radius: 8px;">
  <p style="display:flex; align-items:center; white-space:pre">
    UI 홈 화면 > Make > 우측 상단 ‘State’ 버튼 <img src="/technical_docs/common/tcp_wireless/4-1.png" /> 클릭 > Connect</p>    
</div>

### 5. 시스템 소프트웨어 업데이트 영역으로 이동 및 활성화

아래와 같이 시스템 소프트웨어 경로로 이동합니다.

<div style="padding: 8px 8px 8px 16px; background-color: rgba(0, 0, 255, 0.1); border-radius: 8px;">
  <p>UI 홈 화면 > Setup > System 탭으로 이동</p>
</div>

![missing](/manual/ko/appendix/j/5-1.png)

우측에 있는 “Software Update” 구역에서 Activate(활성화) 체크박스를 클릭합니다.

![missing](/manual/ko/appendix/j/5-2.png)

### 6. 시스템 소프트웨어 업데이트 진행

“Update” 버튼이 나타나고, 이 버튼을 클릭하면 팝업 창이 뜹니다.

![missing](/manual/ko/appendix/j/6.png)

“OK” 버튼을 누르고 기다리면 소프트웨어가 업데이트 됩니다.

OK 버튼 클릭 이후, 정상적으로 업데이트가 완료되면, 5~15초 이내에 컨트롤 박스 (제어기)의 PC (프로그램)이 자동으로 재시작 됩니다.

재시작 과정에서 컨트롤 박스의 LCD 창에 “Please Wait…”가 일시적으로 표시됩니다. 이는 컨트롤 박스가 다시 부팅 중임을 알려줍니다.<br>
이후, 최종적으로 재부팅이 완료되면 컨트롤 박스의 LCD에 “Normal Operation”이 표시됩니다.

### 7. 소프트웨어 업데이트 확인

UI 태블릿과 컨트롤 박스를 다시 연결합니다.

<div style="padding: 8px 8px 8px 16px; background-color: rgba(0, 0, 255, 0.1); border-radius: 8px;">
  <p style="display:flex; align-items:center; white-space:pre">
    UI 홈 화면 > 좌측 상단</p>   
</div>

UI의 홈 화면에서 좌측 상단을 확인하면, System Version과 UI Version이 표기되어 있습니다.<br>
여기서 System Version은 제어박스 소프트웨어 버전, UI Version은 태블릿 PC의 소프트웨어 버전을 의미합니다.

![missing](/manual/ko/appendix/j/7.png)
