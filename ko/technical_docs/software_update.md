---
layout: doc
outline: deep
---

# RB 시리즈 소프트웨어 업데이트 v8.0

:::tip
RB UI와 제어박스의 소프트웨어 버전이 서로 다른 경우,<br> 
UI와 제어박스를 연결하는 과정에서 아래와 같은 알람 창이 표시될 수 있습니다. <br>
해당 알람은 로봇의 정상적인 동작에는 영향을 미치지 않으나, <br>
알람 표시로 인한 불편을 방지하기 위해 소프트웨어 업데이트를 권장드립니다.
:::
![missing](/technical_docs/common/tcp_wireless/swup.jpg)


### 소프트웨어 업데이트 방법

<div class="warning custom-block">
  <p class="custom-block-title">WARNING</p>
  <ul>
    <li>
      시스템 업데이트 전에 태블릿 UI 내의 프로그램 파일(.wsl)을 백업하는 것을 권장합니다.
    </li>
  </ul>
</div>

#### 1. 레인보우로보틱스의 시스템 업데이트는 2단계로 진행됩니다.

<br>

<div style="padding: 8px 8px 8px 16px; background-color: rgba(0, 0, 255, 0.1); border-radius: 8px;">
  <p>APK 설치를 통한 UI 업데이트 → 시스템 소프트웨어(제어박스) 업데이트</p>
</div>

<br>

#### 2. 프로그램 파일 백업

태블릿과 개인용 또는 업무용 PC를 연결한 후, 아래 경로에서 프로그램 파일(.wsl)을 복사하여 백업하십시오.<br>

- 다음 단계로 진행하기 전에, 저장되어 있는 파일을 반드시 백업해두는 것을 권장합니다..

<div style="padding: 8px 8px 8px 16px; background-color: rgba(0, 0, 255, 0.1); border-radius: 8px;">
  <p>Tablet > Android > data > com.rainbow.cobot > files > work > .wsl files 가져오기</p>
</div>

<br>

#### 3. UI 프로그램 업데이트

레인보우로보틱스의 태블릿 UI 프로그램은 APK 형태로 배포됩니다.<br>
이는 일반적인 안드로이드 애플리케이션과 동일한 설치 파일입니다.
따라서, UI 프로그램은 설치용 APK 파일을 태블릿으로 이동한 후 설치하는 방식으로 업데이트됩니다.

:::warning

- 기존 애플리케이션을 삭제하면 프로그램 파일(.wsl)도 함께 삭제되므로, 본 과정을 진행하기 전에 1.2단계에서 프로그램 파일을 반드시 백업하십시오.
- 기존 애플리케이션을 삭제하지 않고 업데이트하는 경우, 프로그램 파일(.wsl) 및 기타 설정은 유지됩니다. 그럼에도 불구하고, 1.2단계의 백업 절차를 수행하는 것을 권장합니다.
  :::

<div style="padding: 8px 8px 8px 16px; background-color: rgba(0, 0, 255, 0.1); border-radius: 8px;">
  <p>배포된 APK 파일을 태블릿에 복사한 후 → 설치를 진행하십시오.</p>
</div>

<br>

#### 4. 태블릿 PC와 제어박스 간 연결

USB 케이블을 사용하여 태블릿을 제어박스에 연결한 후, UI 프로그램을 실행하십시오.
UI 프로그램 실행 후, 태블릿과 제어박스 간 통신을 연결하십시오.<br>

- 태블릿과 제어박스 간 통신이 정상적으로 연결되면, 첫 번째 상자가 파란색으로 점등됩니다. 안전상의 이유로 로봇 팔을 초기화하지 않는 것을 권장합니다.



<div style="padding: 8px 8px 8px 16px; background-color: rgba(0, 0, 255, 0.1); border-radius: 8px;">
  <p style="display:flex; align-items:center; white-space:pre">
    UI Home → Setup → ‘State’ 버튼 클릭 하기 
    <img src="/technical_docs/common/tcp_wireless/4-1.png" />
    → 연결</p>
</div>

<br>

#### 5. 시스템 소프트웨어 업데이트 항목으로 이동하여 업데이트를 활성화하십시오.

아래에 표시된 경로를 따라 시스템 소프트웨어 업데이트 메뉴로 이동하십시오.

<div style="padding: 8px 8px 8px 16px; background-color: rgba(0, 0, 255, 0.1); border-radius: 8px;">
  <p>UI Home → Setup → System </p>
</div>

![missing](/technical_docs/common/software_update/8-1.png)

좌측의 [소프트웨어 업데이트] 섹션에서 Activate 체크박스를 클릭하십시오.

![missing](/technical_docs/common/software_update/8-2.png)

#### 6. 제어박스 시스템 소프트웨어 업데이트 진행

“Update” 버튼이 표시되며, 이 버튼을 클릭하면 팝업 창이 열립니다.

가장 상단 **소프트웨어 업데이트 이후, 시스템 재부팅**를 클릭하세요.

![missing](/technical_docs/common/tcp_wireless/sw0.jpg)

제어박스 소프트웨어를 업데이트하려면 “OK” 버튼을 클릭하세요.

![missing](/technical_docs/common/tcp_wireless/sw1.jpg)

“OK” 버튼을 클릭한 후 업데이트가 정상적으로 완료되면, 약 5~15초 이내에 제어박스(컨트롤러)의 PC가 자동으로 재시작됩니다.

![missing](/technical_docs/common/tcp_wireless/sw02.jpg)


- 재시작 과정 중에는 제어박스 LCD에 “Please Wait…” 문구가 표시됩니다. 이는 제어박스가 재부팅 중임을 나타냅니다.
- 재부팅이 완료되면, 제어박스 LCD에 “USB CONNECTED” 문구(또는 기타 메시지)가 표시됩니다.

#### 7. 소프트웨어 업데이트 확인

UI 태블릿과 제어박스를 다시 연결하십시오.

<div style="padding: 8px 8px 8px 16px; background-color: rgba(0, 0, 255, 0.1); border-radius: 8px;">
  <p style="display:flex; align-items:center; white-space:pre">
    UI Home → Make → ‘State’ 버튼 클릭하기
    <img src="/technical_docs/common/tcp_wireless/4-1.png" />
    → 연결</p>
</div>

UI 홈 화면으로 돌아가면, 소프트웨어 버전이 우측 상단(또는 좌측 하단)에 표시됩니다. 정상적으로 업데이트되었는지 해당 버전 정보를 확인하십시오.

![missing](/technical_docs/common/tcp_wireless/swf.png)

<span style="color:red">업데이트가 정상적으로 완료되면, <br>
<b>System Version: 25122404 [8.0.4], Ui Version: 8.0.4</b>  버전이 나타나게 됩니다.</span>
