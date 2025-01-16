---
layout: doc
outline: deep
---

# Wi-Fi 연결을 통한 Ui 프로그램 운용 안내

### 1. 소프트웨어를 최신으로 업데이트

<div class="warning custom-block">
    <p class="custom-block-title">주의</p>
    <ul>
        <li>
            시스템 업데이트는 항상 <span style="color:red"><b>USB 연결</b></span>을 통해서 진행해야 합니다.
        </li>
        <li>
            자세한 소프트웨어 업데이트 방법은 소프트웨어 업데이트 문서를 참고하세요.
        </li>
    </ul>
</div>

(1) 소프트웨어 버전은 UI 버전 6.6.# 이상의 버전과 호환되는 버전을 사용해야 합니다. 소프트웨어 버전의 확인은 아래 그림에서 보이는 것과 같이 확인할 수 있습니다.
![missing](/technical_docs/common/ui_connection_wifi/ui1.png)
<br>

(2)	UI 버전과 제어 박스의 버전이 맞지 않을 경우 다음과 같이 소프트웨어 업데이트 권장 팝업이 보입니다.
![missing](/technical_docs/common/ui_connection_wifi/ui2.png)
<br>

(3)	아래 그림과 같이 ‘Setup > System’으로 이동합니다.
![missing](/technical_docs/common/ui_connection_wifi/ui3.png)
<br>

(4) 소프트웨어 업데이트의 활성화를 누르고 업데이트를 진행합니다.
![missing](/technical_docs/common/ui_connection_wifi/ui4.png)
<br>

### 2. Wireless UI 연결 설정 절차

- 태블릿 UI를 통한 Wireless UI 연결

(1) 제어박스의 LAN 포트와 Wi-Fi 공유기의 LAN 포트를 LAN선으로 연결합니다.

(2) 태블릿에서 공유기가 전파하는 Wi-Fi에 연결해 IP 대역을 확인합니다.
<br>Ex) 태블릿에 할당된 IP 주소가 111.222.333.☆ 이면 Wi-fi의 IP 대역은 111.222.333 입니다. 이때 ☆은 공유기가 태블릿에 할당한 ‘1이 아닌 254 이하의 임의의 숫자’ 입니다.

(3) 제어박스의 IP 주소를 Wi-Fi의 IP대역과 맞추어 설정합니다.
<br>Ex) 111.222.333.★, 이때 마지막 자리 ★은 ‘ 1과 ☆이 아닌 254 이하의 임의의 숫자로 설정합니다.

(4) 서브넷 마스크를 255.255.255.0으로 설정합니다.

(5) 게이트웨이를 설정합니다.
<br>Ex) 111.222.333.1, 게이트웨이는 IP대역의 1번 주소를 사용합니다.

(6) 태블릿에서 설정 > 개발자 옵션 > MIDI로 설정합니다.

(7) 태블릿에서 설정 > 개발자 옵션 > USB 디버깅을 활성화합니다.

(8) 제어박스가 Please wait 상태가 아님을 확인 후 UI를 통해 제어박스와 연결합니다.

(9) (8)에서 연결에 실패할 경우 UI를 종료하고 다시 실행합니다.
<br><br>

- PC UI를 통한 Wireless UI 연결

(1) 제어박스의 LAN 포트와 Wi-Fi 공유기의 LAN 포트를 LAN선으로 연결합니다.

(2) PC에서 공유기가 전파하는 Wi-Fi에 연결해 IP 대역을 확인합니다.
<br>Ex) PC에 할당된 IP 주소가 111.222.333.☆ 이면 Wi-fi의 IP 대역은 111.222.333 입니다. 이때 ☆은 공유기가 PC에 할당한 ‘1이 아닌 254 이하의 임의의 숫자’ 입니다.

(3) 제어박스의 IP 주소를 Wi-Fi의 IP대역과 맞추어 설정합니다.
<br>Ex) 111.222.333.★, 이때 마지막 자리 ★은 ‘ 1과 ☆이 아닌 254 이하의 임의의 숫자로 설정합니다.

(4) 서브넷 마스크를 255.255.255.0으로 설정합니다.

(5) 게이트웨이를 설정합니다.
<br>Ex) 111.222.333.1, 게이트웨이는 IP대역의 1번 주소를 사용합니다.

(6) 태블릿에서 설정 > 개발자 옵션 > MIDI로 설정합니다.

(7) 태블릿에서 설정 > 개발자 옵션 > USB 디버깅을 활성화 합니다.

(8) 제어박스가 Please wait 상태가 아님을 확인 후 UI를 통해 제어박스와 연결합니다.

(9) (8)에서 연결에 실패할 경우 UI를 종료하고 다시 실행합니다.


### 2.1 IP 주소 세팅 (안드로이드 OS 태블릿UI)

- 공유기와 로봇을 1:1로 사용하는 것을 권장합니다.

(1)	아래 그림과 같이 공유기를 제어 박스와 직접 연결합니다. (권장 사항)
![missing](/technical_docs/common/ui_connection_wifi/ui5.png)
<br>

(2)	아래 그림과 같이 제어 박스와 연결된 공유기의 Wi-Fi를 연결합니다.<br>(예시를 위해 RB_SW_Team이라는 Wi-Fi에 연결)
![missing](/technical_docs/common/ui_connection_wifi/ui6.png)
<br>

(3)	공유기와 제어 박스를 직접 연결한 경우 다음과 같은 메시지가 나오고 이때 ‘Wi-Fi 연결 유지’를 누릅니다.
![missing](/technical_docs/common/ui_connection_wifi/ui7.png)
<br>

(4)	Wi-Fi 공유기의 IP 주소 설정을 확인하기 위해 다음 그림과 같이 설정을 누릅니다. (사전에 공유기 IP 설정에 대해 알고 있을 경우, (4) ~ (5) 과정은 생략합니다.)
![missing](/technical_docs/common/ui_connection_wifi/ui8.png)
<br>

(5)	IP 주소를 확인합니다. 아래 예시에서는 공유기에 연결된 태블릿 PC의 IP가 192.168.0.4 로 설정된 것을 볼 수 있습니다. 이는 192.168.0 대역에서 4번 주소가 할당되었음을 의미합니다.
![missing](/technical_docs/common/ui_connection_wifi/ui9.png)

![missing](/technical_docs/common/ui_connection_wifi/ui10.png)
<br>

(6)	제어 박스와 태블릿을 USB 케이블로 연결한 후 ‘Setup > Socket/Serial으로 이동합니다.
![missing](/technical_docs/common/ui_connection_wifi/ui11.png)
<br>

(7)	IP/Netmask/Gateway를 앞서 확인한 공유기 주소의 대역에 맞게 수정합니다. 이때, IP대역을 의미하는 앞의 세 칸은 공유기와 같은 값으로 맞추고, 마지막 칸의 주소는 4번 이외의 주소로 설정합니다(이 예시에서는 4번에 태블릿 PC가 할당되었기 때문). Gateway의 앞 3개의 숫자를 동일하게 맞추고 마지막 숫자를 1로 설정하면 됩니다. 이 예제에서의 경우, Ping Test는 태블릿에 할당된 192.168.0.4를 입력 후 Test 버튼을 눌러 시도할 수 있습니다. 3~5초 후 테스트 결과 팝업이 나타납니다.
![missing](/technical_docs/common/ui_connection_wifi/ui12.png)
<br>

### 2.2 IP 주소 세팅 (윈도우 OS PC UI)

- PC와 제어 박스 사이에 직접 연결을 예시로 진행합니다.

(1) 아래 그림과 같이 공유기를 제어 박스와 직접 연결합니다. (권장 사항)
![missing](/technical_docs/common/ui_connection_wifi/ui13.png)
<br>

(2)	아래 그림과 같이 제어 박스와 연결된 공유기의 Wi-Fi를 연결합니다.<br>(예시를 위해 RB_SW_Team이라는 Wi-Fi에 연결)
![missing](/technical_docs/common/ui_connection_wifi/ui14.png)
<br>

(3)	‘속성’을 눌러 설정 창이 열리면 최하단으로 내려 IPv4 주소를 확인합니다.
아래 예시에서는 공유기에 연결된 PC의 IP가 192.168.0.5 로 설정된 것을 볼 수 있습니다. 이는 192.168.0 대역에서5번 주소가 할당되었음을 의미합니다
![missing](/technical_docs/common/ui_connection_wifi/ui15.png)
<br>

(4)	제어 박스와 태블릿을 USB 케이블로 연결한 후 ‘Setup > Socket/Serial으로 이동합니다.
![missing](/technical_docs/common/ui_connection_wifi/ui16.png)
<br>

(5)	IP/Netmask/Gateway를 앞서 확인한 공유기 주소의 대역에 맞게 수정합니다. 이때, IP대역을 의미하는 앞의 세 칸은 공유기와 같은 값으로 맞추고, 마지막 칸의 주소는 5번 이외의 주소로 설정합니다(이 예시에서는 5번에 PC가 할당되었기 때문). Gateway의 앞 3개의 숫자를 동일하게 맞추고 마지막 숫자를 1로 설정하면 됩니다. <br>이 예제에서의 경우, Ping Test는 PC에 할당된 192.168.0.5를 입력 후 Test 버튼을 눌러 시도할 수 있습니다. 3~5초 후 테스트 결과 팝업이 나타납니다.
![missing](/technical_docs/common/ui_connection_wifi/ui17.png)
<br>

### 3. UI를 TCP/IP 통신을 통해 제어 박스와 연결

<p style="display:flex; align-items:center; white-space:pre">
    (1)	Rainbow Robotics UI를 실행하고, 오른쪽 상단의 연결 아이콘(
    <img src="/technical_docs/common/tcp_wireless/4-1.png" />
    )을 클릭합니다. </p>

(2)	태블릿 연결 설정 모드에서 ‘TCP/IP 연결’을 선택합니다.
![missing](/technical_docs/common/ui_connection_wifi/ui18.png)
<br>

(3)	앞서 유선으로 설정한 제어 박스의 IP 주소를 입력 후 연결 클릭합니다.
![missing](/technical_docs/common/ui_connection_wifi/ui19.png)
<br>

(4)	제어 박스와 정상적으로 연결되었음을 확인합니다. UI 버전과 제어박스 버전이 다를 시 이와 관련된 알림 메시지가 나타납니다. 사용에는 이상이 없습니다.
![missing](/technical_docs/common/ui_connection_wifi/ui20.png)
<br>

<p style="display:flex; align-items:center; white-space:pre">
    (5) 정상적으로 연결되었을 경우 연결 아이콘(<img src="/technical_docs/common/tcp_wireless/4-1.png" />)이 변경되고 활성화 버튼이 나타납니다. </p>

![missing](/technical_docs/common/ui_connection_wifi/ui21.png)
<br>    