---
layout: doc
outline: deep
---

# 가상 로봇 제어박스 운용 v7.2

## 1. 버추얼박스 플랫폼 설치하기

**사용자 PC에 버추얼 박스 프로그램 설치하기**

(1) 다음 링크(https://www.virtualbox.org/wiki/Downloads)에서 Windows hosts 버튼을 클릭하여 설치파일을 다운로드 합니다.<br>
가상 로봇 제어박스 프로그램을 운용하기 위해서는 가상 리눅스 시스템이 요구되기 때문에, 위와 같은 프로그램을 설치해야 합니다.

![missing](/technical_docs/common/virtual_box_7.2/1-1.png)

(2) 별도의 추가 설정 없이 Next/Yes 버튼을 통해 이 프로그램을 설치합니다.

![missing](/technical_docs/common/virtual_box_7.2/1-2.png)

(3) 설치가 완료되면 프로그램을 실행합니다.

## 2. 시뮬레이터 프로그램 설치 및 실행하기

**버추얼박스를 통해 시뮬레리터 실행하기**

(1) **도구 → 네트워크** 설정으로 진입합니다.

![missing](/technical_docs/common/virtual_box_7.2/1-3.png)

(2)	도구(Tool) -> 네트워크(Network) 하단 어댑터(Adaper)에 네트워크 주소를 다음과 같이 설정합니다. 예를 들어 ‘_10.0.2.100_’을 입력합니다. 
만약 _10.0.2.100_ 대역대의 IP 주소를 사용 하고 계신다면 겹치지 않은 다른 대역대의 IP를 설정 해주셔도 무방합니다. 작성 이후 하단의 ‘OK’ (확인)  버튼을 눌러야 합니다.
 
![missing](/technical_docs/common/virtual_box_7.2/1-4.png)

(3)	RainbowRobotics 공식홈페이지에서 __기술지원-> 협동로봇__ 기술자료를 클릭합니다. 

![missing](/technical_docs/common/virtual_box_7.2/1-5.png)

(4)	RainbowRobotics 협동로봇 기술자료실의 상단 다운로드탭을 클릭합니다.

![missing](/technical_docs/common/virtual_box_7.2/1-6.png)

(5)	다운로드탭을 클릭하시면 새로운 창으로 One Drive 페이지가 열립니다.
아래 첨부된 사진과 같이 [4_Other_Resource] 폴더로 이동해주세요.

![missing](/technical_docs/common/virtual_box_7.2/1-7.png)

(6)	[4_Other_Resource] – [4.6_Window_Simulator_OVA] 의 최신 버전 시뮬레이터를 다운받아주세요.

![missing](/technical_docs/common/virtual_box_7.2/1-8.png)


(7)	다시 버추얼박스로 돌아가서, 파일 – 가상 시스템 가져오기를 합니다.

![missing](/technical_docs/common/virtual_box_7.2/1-9.png)

(8)	(6)번에서 다운로드 된 RBVirtualSimulator.ova를 불러옵니다. 

![missing](/technical_docs/common/virtual_box_7.2/1-10.png)

(9)	하단의 설정 부분에서 아래 사진과 같이 되어있는지 확인하고 하단의 완료를 클릭합니다. 

![missing](/technical_docs/common/virtual_box_7.2/1-11.png)

(10) 우측에 가상시스템이 추가가 완료되면, 좌측에 RBVirtualSimulator가 등록됩니다. 

![missing](/technical_docs/common/virtual_box_7.2/1-12.png)

(11) 실행 시 만약 다음과 같은 에러가 발생한다면, 네트워크 설정 변경 버튼을 클릭합니다. 

![missing](/technical_docs/common/virtual_box_7.2/1-13.png)

(12) 좌측의 RBVirtualSimulator를 클릭해주시고 상단 설정 클릭 후, 네트워크를 클릭합니다. 어댑터1의 “다음에 연결됨: ” 에 ‘호스트 전용 어댑터’, 를 넣어주시고, 아래 칸 “이름:” 에 ‘VirtualBox-  Host-Only Ethernet Adapter’ 로 설정한 후, 하단의 확인을 클릭합니다.

![missing](/technical_docs/common/virtual_box_7.2/1-14.png)

(13) 설정을 완료 후 다시 RBVirtualSimulator를 실행시키면 정상적으로 가상 제어박스가 부팅되는 것을 확인할 수 있습니다. 다음 화면에서 아래의 **\* daemon started successfully** 라는 메시지가 나올 때까지 기다립니다.

![missing](/technical_docs/common/virtual_box_7.2/1-15.png)

## 3. RB 가상제어박스 - RB WindowUI 설치 및 실행하기

**RB 가상제어박스-RB Window UI 프로그램 실행 및 연결**

(1) RB 기술자료 Onedrive에서 RB_window_###(버전) 중 다운로드 되어진RB_window.exe를 실행합니다.  

<p style="display:flex; align-items:center; white-space:pre">
    (2)	RB Window UI 실행 후 네트워크 ( 
    <img src="/technical_docs/common/virtual_box_7.2/3-16.png"/>
    )버튼을 클릭합니다.</p> 
태블릿 연결 설정에서 모드는 TCP/IP 연결로 설정하고, IP 주소는 10.0.2.7을 입력합니다. 
(버추얼박스의 IP 대역대가 10.0.2.100 이기 때문에 10.0.2.7을 넣어주었습니다. 이 부분은 사용자가 넣어주신 대역대를 맞춰서 기입하시면 됩니다.)

![missing](/technical_docs/common/virtual_box_7.2/3-17.png)

(3)	정상적으로 연결되었다면, 다음과 같이 네트워크 연결됨에 초록불이 들어옵니다.  

![missing](/technical_docs/common/virtual_box_7.2/3-18.png)

(4)	시뮬레이션 모드에서 원하는 로봇 자세를 테스트할 수 있습니다.<br> 
(가상 제어 박스이기 때문에 Real Robot 모드는 사용불가)  

![missing](/technical_docs/common/virtual_box_7.2/3-19.png)

(5)	만약 RB Window UI가 가상제어박스와 연결되지 않는다면, 개인PC 네트워크의 ‘VirtualBox-Host-Only Ethernet Adapter’의 고정 할당된 IP 주소를 확인해주세요.  

![missing](/technical_docs/common/virtual_box_7.2/3-20.png)


