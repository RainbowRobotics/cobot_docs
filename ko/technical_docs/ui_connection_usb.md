---
layout: doc
outline: deep
---

# USB 연결을 통한 UI 프로그램 운용 안내

### 1. 소프트웨어를 최신으로 업데이트

<div class="warning custom-block">
    <p class="custom-block-title">주의</p>
    <ul>
        <li>
            시스템 업데이트는 항상 <b>USB 연결</b>을 통해서 진행해야 합니다.
        </li>
        <li>
            자세한 소프트웨어 업데이트 방법은 소프트웨어 업데이트 문서를 참고하세요.
        </li>
    </ul>
</div>

(1) 소프트웨어 버전은 UI 버전 6.6.# 이상의 버전과 호환되는 버전을 사용해야 합니다. 소프트웨어 버전의 확인은 아래 그림에서 보이는 것과 같이 확인할 수 있습니다.

![missing](/technical_docs/common/ui_connection_usb/ui1.png)

(2) UI 버전과 제어 박스의 버전이 맞지 않을 경우 다음과 같이 소프트웨어 업데이트 권장 팝업이 보입니다.

![missing](/technical_docs/common/ui_connection_usb/ui2.png)

(3) 아래 그림과 같이 ‘Setup > System’으로 이동합니다.

![missing](/technical_docs/common/ui_connection_usb/ui3.png)

(4) 소프트웨어 업데이트의 활성화를 누르고 업데이트를 진행합니다.

![missing](/technical_docs/common/ui_connection_usb/ui4.png)


### 2. USB 연결 설정 절차

(1) 안드로이드 OS 태블릿의 설정에서 개발자 옵션 메뉴를 활성화합니다. <br>

(2) ‘설정 > 개발자 옵션 > 기본 USB 구성’에서 MIDI를 선택합니다.

(3) USB 디버깅을 활성화합니다.

(4) 태블릿과 제어박스를 USB A to C 케이블로 연결합니다.

(5) ‘태블릿 데이터에 접근 허용’ 메시지에서 ‘허용’을 선택합니다.

(6) 태블릿과 제어박스를 최초로 연결한 경우, ‘USB 디버깅을 허용하시겠습니까?’ 메시지에서 ‘이 컴퓨터에서 항상 허용’을 체크한 후 ‘허용’을 선택합니다.

(7) USB A to C 케이블을 태블릿에서 제거 후 다시 연결합니다.

<p style="display:flex; align-items:center; white-space:pre">
    (8) Rainbow Robotics UI를 실행하고, 오른쪽 상단의 연결 아이콘( 
    <img src="/technical_docs/common/tcp_wireless/4-1.png" />
    )을 클릭합니다.</p>

(9) 태블릿 연결 설정의 모드를 ‘USB 연결’로 설정합니다.

(10) 제어박스가 Please Wait 상태가 아님을 확인 후 연결 버튼을 눌러 제어박스와 UI를 연결합니다.

(11) (10)에서 실패한 경우 UI를 종료한 후 (7) ~ (10) 과정을 반복합니다.


### 3. 상세 가이드
(1) 안드로이드 OS 태블릿의 설정에서 개발자 옵션 메뉴를 활성화합니다.

![missing](/technical_docs/common/ui_connection_usb/ui5.png)

(2) ‘설정 > 개발자 옵션 > 기본 USB 구성’에서 MIDI를 선택합니다.

![missing](/technical_docs/common/ui_connection_usb/ui6.png)

![missing](/technical_docs/common/ui_connection_usb/ui7.png)


(3) USB 디버깅을 활성화합니다.

![missing](/technical_docs/common/ui_connection_usb/ui8.png)

(4) 태블릿과 제어박스를 USB A to C 케이블로 연결합니다.

(5) ‘태블릿 데이터에 접근 허용’ 메시지에서 ‘허용’을 선택합니다.

![missing](/technical_docs/common/ui_connection_usb/ui9.png)

(6) 태블릿과 제어박스를 최초로 연결한 경우, ‘USB 디버깅을 허용하시겠습니까?’ 메시지에서 ‘이 컴퓨터에서 항상 허용’을 체크한 후 ‘허용’을 선택합니다.

![missing](/technical_docs/common/ui_connection_usb/ui10.png)

(7) USB A to C 케이블을 태블릿에서 제거 후 다시 연결합니다.

<p style="display:flex; align-items:center; white-space:pre">
    (8) Rainbow Robotics UI를 실행하고, 오른쪽 상단의 연결 아이콘( 
    <img src="/technical_docs/common/tcp_wireless/4-1.png" />
    )을 클릭합니다.</p>

![missing](/technical_docs/common/ui_connection_usb/ui11.png)

(9) 태블릿 연결 설정의 모드를 ‘USB 연결’로 설정합니다.

![missing](/technical_docs/common/ui_connection_usb/ui12.png)

(10) 제어박스가 Please Wait 상태가 아님을 확인 후 연결 버튼을 눌러 제어박스와 UI를 연결합니다.

![missing](/technical_docs/common/ui_connection_usb/ui13.png)

(11) (10)에서 실패한 경우 UI를 종료한 후 (7) ~ (10) 과정을 반복합니다.

(12) 제어박스와 정상적으로 연결되었음을 확인합니다. UI 버전과 제어박스 버전이 다를 시 이와 관련된 알림 메시지가 나타납니다. 사용에는 이상이 없습니다.

![missing](/technical_docs/common/ui_connection_usb/ui14.png)