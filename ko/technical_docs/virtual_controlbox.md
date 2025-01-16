---
layout: doc
outline: deep
---

# 가상 로봇 제어박스 운용 v1.5

### 1. 사용자 PC에 버추얼 박스 프로그램 설치하기

다음 링크(https://www.virtualbox.org/wiki/Downloads)에서 Windows hosts 버튼을 클릭하여 설치파일을 다운로드 합니다.<br>
가상 로봇 제어박스 프로그램을 운용하기 위해서는 가상 리눅스 시스템이 요구되기 때문에, 위와 같은 프로그램을 설치해야 합니다.

![missing](/technical_docs/common/virtual_box/1-1.png)

별도의 추가 설정 없이 Next/Yes 버튼을 통해 이 프로그램을 설치합니다.

![missing](/technical_docs/common/virtual_box/1-2.png)

설치가 완료되면 프로그램을 실행합니다.

### 2. 버추얼 박스를 통해 시뮬레이터 프로그램 설치 및 실행하기

**도구 → 네트워크** 설정으로 진입합니다.

![missing](/technical_docs/common/virtual_box/2-1.png)

네트워크 주소를 다음과 같이 설정합니다.<br>
**반드시** ‘**_10.0.2.1_**’을 입력 합니다.<br>
작성 이후 ‘적용’ 버튼을 눌러야 합니다.

![missing](/technical_docs/common/virtual_box/2-2.png)

**파일 → 가상 시스템 가져오기**

![missing](/technical_docs/common/virtual_box/2-3.png)

배포한 압축 파일을 미리 압축 해제해 놓습니다.<br>
첨부된 RBVirtualSimulator.ova 를 선택하고, 다음을 누릅니다.

![missing](/technical_docs/common/virtual_box/2-4.png)

가져오기를 눌러 설정을 마무리합니다.

![missing](/technical_docs/common/virtual_box/2-5.png)

설정이 끝나면 프로그램 좌측에 RBVirtualSimulator가 추가됩니다.<br>
이를 더블 클릭하여 가상 로봇 제어박스를 실행합니다.

![missing](/technical_docs/common/virtual_box/2-6.png)

실행 시 만약 다음과 같은 에러가 발생한다면, 네트워크 설정 변경 버튼을 누릅니다.

![missing](/technical_docs/common/virtual_box/2-7.png)

어댑터 1에 다음에 연결됨을 ‘호스트 전용 어댑터’, 이름에 ‘VirtualBox-Host-Only Ethernet Adapter’로 설정합니다.

![missing](/technical_docs/common/virtual_box/2-8.png)

설정 완료 후 다시 RBVirtualSimulator 실행시키면, 정상적으로 가상 제어박스가 부팅되는 것을 확인할 수 있습니다.<br>
다음 화면에서 아래의 **\* daemon started successfully** 라는 메시지가 나올 때까지 기다립니다.

![missing](/technical_docs/common/virtual_box/2-9.png)

### 3. Rainbow-RB Window UI 프로그램 실행 및 연결하기

첨부된 파일 중 RB_window\_\#\#\# 폴더의 Rainbow-RB.exe 를 실행합니다.

![missing](/technical_docs/common/virtual_box/3-1.png)

Make 페이지로 이동합니다.<br>
상단의 네트워크 버튼을 누릅니다 (![missing](/technical_docs/common/tcp_wireless/4-1.png)).<br>
태블릿 연결 설정에서 모드는 TCP/IP 연결로 설정하고, IP 주소로는 10.0.2.7을 입력합니다.

![missing](/technical_docs/common/virtual_box/3-2.png)

정상적으로 연결 되었다면, 다음과 같이 네트워크 연결됨에 초록불이 들어옵니다.

![missing](/technical_docs/common/virtual_box/3-3.png)

시뮬레이션 모드에서 원하는 로봇 자세를 테스트 할 수 있습니다.

![missing](/technical_docs/common/virtual_box/3-4.png)
