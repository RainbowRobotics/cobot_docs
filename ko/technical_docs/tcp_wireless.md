---
layout: doc
outline: deep
---

# TCP/무선 통신을 통한 UI 프로그램 운용 v2.1

### 1. 소프트웨어를 최신으로 업데이트

<div class="warning custom-block">
    <p class="custom-block-title">주의</p>
    <ol>
        <li>
            시스템 업데이트는 항상 USB 연결을 통해서 진행해야 합니다.
        </li>
        <li>
            자세한 소프트웨어 업데이트 방법은 소프트웨어 업데이트 문서를 참고하세요.
        </li>
    </ol>
</div>

소프트웨어 버전은 UI 버전 3.7.# 이상의 버전과 호환되는 버전을 사용해야합니다.<br>
소프트웨어 버전의 확인은 아래의 그림에서 보이는 것과 같이 확인할 수 있습니다.

![missing](/technical_docs/common/tcp_wireless/1-1.png)

UI 버전과 제어 박스의 버전이 맞지 않을 경우 다음과 같이 소프트웨어 업데이트 권장 팝업이 보입니다.

![missing](/technical_docs/common/tcp_wireless/1-2.png)

아래 그림과 같이 ‘Setup > System’으로 이동합니다.

![missing](/technical_docs/common/tcp_wireless/1-3.png)

소프트웨어 업데이트의 활성화를 누르고 업데이트를 진행합니다.

![missing](/technical_docs/common/tcp_wireless/1-4.png)

### 2. RB Driver 설치

TCP 연결을 위한 드라이버를 제어 박스에 설치.

태블릿에 RB Driver 어플리케이션을 아래 그림의 순서로 설치합니다.<br>
(RB Driver apk 파일 제공)

![missing](/technical_docs/common/tcp_wireless/2-1-1.png)<br>
![missing](/technical_docs/common/tcp_wireless/2-1-2.png)<br>
![missing](/technical_docs/common/tcp_wireless/2-1-3.png)

RB Driver 앱을 실행하면 다음과 같은 화면을 확인할 수 있습니다.

![missing](/technical_docs/common/tcp_wireless/2-3.png)

Step 1 의 빨간 박스 내부를 눌러 제어 박스와 태블릿을 연결합니다.<br>
연결 후 Step 1 아이콘의 색깔이 변했다면 정상적으로 연결된 것 입니다.

![missing](/technical_docs/common/tcp_wireless/2-4.png)<br>
![missing](/technical_docs/common/tcp_wireless/2-5.png)

Step 2 에서 TCP/IP 를 선택 합니다.

![missing](/technical_docs/common/tcp_wireless/2-6.png)

Step 3 에서 아래 빨간 박스 내부 아이콘을 클릭합니다.

![missing](/technical_docs/common/tcp_wireless/2-7.png)

정상적으로 눌렸을 경우 다음과 같은 안내문이 나옵니다. (1~5초 소요)

![missing](/technical_docs/common/tcp_wireless/2-8.png)

다음과 같은 팝업이 뜰 때까지 대기한 후 ‘OK’를 클릭합니다. (1~5초 소요)

![missing](/technical_docs/common/tcp_wireless/2-9.png)

Step 4 에서 아래 빨간 박스 내부 아이콘을 클릭합니다.

![missing](/technical_docs/common/tcp_wireless/2-10.png)

정상적으로 눌렸을 경우 다음과 같은 안내문이 나옵니다. (3~8초 소요)

![missing](/technical_docs/common/tcp_wireless/2-11.png)

다음과 같은 팝업이 뜰 때까지 대기한 후 ‘OK’를 클릭하면 드라이버 설치가 완료됩니다. (3~8초 소요)

![missing](/technical_docs/common/tcp_wireless/2-12.png)

전체 시스템을 재부팅 하세요.

### 3.1 IP 주소 셋팅 (안드로이드 OS UI)

공유기를 **_로봇 전용_** 으로 사용하는 것을 권장합니다.

아래 그림과 같이 공유기를 제어 박스와 직접 연결합니다 _(권장 사항)_.

![missing](/technical_docs/common/tcp_wireless/3-1-1.png)

아래 그림과 같이 제어 박스와 연결된 공유기의 Wi-Fi를 연결합니다.<br>
(예시를 위해 rainbow_software_team 이라는 Wi-Fi에 연결).

![missing](/technical_docs/common/tcp_wireless/3-1-2.png)

공유기와 제어 박스를 직접 연결한 경우 다음과 같은 메시지가 나오고 이때 ’Wi-Fi 연결 유지’를 누릅니다.

![missing](/technical_docs/common/tcp_wireless/3-1-3.png)

Wi-Fi 공유기의 IP 주소 설정을 확인하기 위해 다음 그림과 같이 설정을 누릅니다.<br>
(사전에 공유기 IP 설정에 대해 알고 있을 경우, 이 과정은 생략합니다.)

![missing](/technical_docs/common/tcp_wireless/3-1-4.png)

IP 주소를 확인합니다. 아래 예시에서는 공유기에 연결된 태블릿 PC의 IP가 192.168.0.8로 설정된 것을 볼 수 있습니다.<br>
이를 통하여, 공유기의 운용 IP 대역이 192.168.0.X 인 것을 추정할 수 있습니다.<br>
만약, 별도로 공유기의 IP를 설정하였다면, 이 과정은 필요하지 않습니다.

![missing](/technical_docs/common/tcp_wireless/3-1-5.png)

제어 박스와 태블릿을 USB 케이블로 연결한 후 ‘Setup > System’으로 이동합니다.

빨간 박스 내부의 IP/Netmask/Gateway 를 앞서 확인한 공유기 주소의 대역에 맞게 수정합니다.<br>
이때, 대역을 맞추기 위해 IP의 앞 3 개의 숫자를 동일하게 하고 마지막 숫자를 다르게 설정합니다.<br>
Gateway의 앞 3개의 숫자를 동일하게 맞추고 마지막 숫자를 1로 설정하면 됩니다.

![missing](/technical_docs/common/tcp_wireless/3-1-7.png)

### 3.2 IP 주소 셋팅 (윈도우 OS UI)

PC와 제어 박스 사이에 직접 연결을 예시로 진행합니다.

PC 와 제어 박스를 직접 랜선으로 연결합니다.<br>
PC 에서 좌측 하단에 ‘시작 > 설정’으로 들어갑니다.

![missing](/technical_docs/common/tcp_wireless/3-2-2.png)

‘네트워크 및 인터넷’ 선택

![missing](/technical_docs/common/tcp_wireless/3-2-3.png)

‘고급 네트워크 설정 > 어댑터 옵션 변경’ 클릭

![missing](/technical_docs/common/tcp_wireless/3-2-4.png)

새로운 창에서 ‘이더넷 # - 식별되지 않은 네트워크’를 우클릭 후 ‘속성’ 클릭

![missing](/technical_docs/common/tcp_wireless/3-2-5.png)

‘인터넷 프로토콜 버전 4(TCP/IPv4) 선택 > 속성’ 클릭.

![missing](/technical_docs/common/tcp_wireless/3-2-6.png)

‘자동으로 IP 주소 받기 → 다음 IP 주소 사용’ 변경.

![missing](/technical_docs/common/tcp_wireless/3-2-7.png)

사용하고자 하는 IP 주소 입력.

![missing](/technical_docs/common/tcp_wireless/3-2-8.png)

이때, ‘IP 주소’에는 원하는 값을 넣어주고 ‘서브넷 마스크’에는 255.255.255.0이 자동으로 입력됩니다. 입력되지 않으면 255.255.255.0으로 작성합니다.<br>
‘기본 게이트웨이’는 ‘IP 주소’와 3번째 숫자 까지는 동일하게 진행하고 마지막 숫자는 1로 정하면 됩니다.

로봇 제어박스의 IP 설정의 경우 3.1.6 ~ 3.1.7과 동일하게 진행합니다.

### 4. TCP/IP 통신을 통해 UI를 제어 박스와 연결

Rainbow Robotics UI 를 실행하고, 오른쪽 상단의 연결 아이콘(![missing](/technical_docs/common/tcp_wireless/4-1.png))을
클릭합니다.

태블릿 연결 설정 모드에서 ‘TCP/IP 연결’을 선택합니다.

![missing](/technical_docs/common/tcp_wireless/4-2.png)

앞서 유선으로 설정한 제어 박스의 IP 주소를 입력한 후 연결을 클릭합니다.

![missing](/technical_docs/common/tcp_wireless/4-3.png)

제어 박스와 정상적으로 연결 되었음을 확인합니다.

![missing](/technical_docs/common/tcp_wireless/4-4.png)

TCP/IP 통신을 통해 연결되었을 경우 연결 아이콘 내부에 다음 그림과 같이 TCP 라는 글자가 있음을 확인할 수 있습니다.

![missing](/technical_docs/common/tcp_wireless/4-5.png)
