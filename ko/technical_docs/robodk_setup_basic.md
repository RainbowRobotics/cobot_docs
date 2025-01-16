---
layout: doc
outline: deep
---

# RoboDK (OLP) 기초 설정법 v1.5

### RoboDK OLP 기초 설정

RoboDK는 상용/무료 로봇 오프라인 프로그래밍 툴 입니다.

#### 1. RoboDK 다운로드

RoboDK 웹 사이트에 접속합니다. (https://robodk.com)<br>
로그인/회원가입 후, 사용하는 PC의 운영체제에 알맞은 버전을 다운로드 받습니다.

#### 2. RoboDK 설치 및 실행

다운받은 RoboDK 설치 파일을 통해 RoboDK를 설치하고, 실행 합니다.

#### 3. 배경/작업환경 3D 파일을 넣기/불러오기

![missing](/technical_docs/common/robodk_setup_basic/3-1.png)
![missing](/technical_docs/common/robodk_setup_basic/3-2.png)

#### 4. 사용하고자 하는 로봇 모델 다운로드 및 불러오기

![missing](/technical_docs/common/robodk_setup_basic/4-1.png)<br>
![missing](/technical_docs/common/robodk_setup_basic/4-2.png)<br>
![missing](/technical_docs/common/robodk_setup_basic/4-3.png)<br>
![missing](/technical_docs/common/robodk_setup_basic/4-4.png)
![missing](/technical_docs/common/robodk_setup_basic/4-5.png)

#### 5. 사용하고자 하는 툴/그리퍼 모델 불러오기

파일을 불러온 이후, 좌측 트리뷰에서 툴 모델링 파일을 로봇 팔의 하위 항목으로 설정합니다.

![missing](/technical_docs/common/robodk_setup_basic/5-1.png)
![missing](/technical_docs/common/robodk_setup_basic/5-2.png)

#### 6. 배경 3D 파일의 위치 및 방향 맞추기

배경 (frame)을 더블클릭하여, X, Y, Z, Rx, Ry, Rz를 조정하여, 작업환경 3D 파일의 위치와 회전을 조정합니다.

![missing](/technical_docs/common/robodk_setup_basic/6-1.png)
![missing](/technical_docs/common/robodk_setup_basic/6-2.png)
![missing](/technical_docs/common/robodk_setup_basic/6-3.png)

#### 7. 로봇 팔의 위치 및 방향 맞추기

로봇 팔 객체를 더블 클릭하여, 원하는 위치와 회전으로 로봇 팔의 부착 위치를 설정합니다.

![missing](/technical_docs/common/robodk_setup_basic/7-1.png)
![missing](/technical_docs/common/robodk_setup_basic/7-2.png)

#### 8. 툴의 위치 및 방향 맞추기

삽입한 툴의 3D 파일을 더블 클릭합니다.

![missing](/technical_docs/common/robodk_setup_basic/8-1.png)

아래와 같은 창이 우측에 표시되며, [More Options]를 클릭합니다.

![missing](/technical_docs/common/robodk_setup_basic/8-2.png)

아래 그림의 우측 설정화면에서 윗쪽 영역은 TCP 좌표계를 설정하는 곳이며, 아래쪽은 툴의 부착 위치 및 방향을 설정하는 란입니다.

![missing](/technical_docs/common/robodk_setup_basic/8-3.png)

아랫쪽 영역을 조절하여 툴의 위치 및 방향을 원하는 모양으로 설정합니다.

![missing](/technical_docs/common/robodk_setup_basic/8-4.png)

윗쪽 영역을 조절하여 원하는 TCP 위치와 방향을 설정합니다.

![missing](/technical_docs/common/robodk_setup_basic/8-5.png)

#### 9. 로봇 조그

앞선 1~8 과정을 끝낸 후, 로봇 모델을 더블 클릭합니다.

![missing](/technical_docs/common/robodk_setup_basic/9-1.png)

아래와 같이 조그 창이 우측에 표시되며, TCP 기준 또는 관절 기준 조그가 가능합니다.

![missing](/technical_docs/common/robodk_setup_basic/9-2.png)
![missing](/technical_docs/common/robodk_setup_basic/9-3.png)

#### 10. RoboDK의 다양한 기능을 활용하여 테스트 하기

기초 설정이 마무리 되었습니다.<br>
RoboDK에는 가상의 목표점 만들기, Move J / Move L 동작 해보기 등 다양한 기능이 내장되어 있습니다.<br>
RoboDK 자체의 자세한 사용법은 RoboDK 사의 홈페이지를 참고하세요.<br>
여러 기능을 활용하여 Offline Programing을 이용하세요.

![missing](/technical_docs/common/robodk_setup_basic/10-1.png)
![missing](/technical_docs/common/robodk_setup_basic/10-2.png)
![missing](/technical_docs/common/robodk_setup_basic/10-3.png)
