---
layout: doc
outline: deep
---

# 운용 유틸리티

Make 화면 우측에는 조그(Jog) 기능 이외에 시스템 운용을 위한 기타 유틸리티 기능들이 있습니다.

![missing](/manual/ko/programming_guide/7.utility/1.png)

1. 설정 : Setup에서 설정하는 내용 중, 조그와 함께 사용하면 편리한 몇몇 설정 기능이 있습니다.
2. 유틸리티 : 자주 사용하는 자세 저장 기능, 시스템 입/출력 정보 보기 기능, 시스템 출력 테스트 기능 등, 주요 편의 기능들이 모여 있습니다.
3. 모니터링 : 실시간 변수 모니터링 창 및 시스템 변수 모니터링 기능을 제공합니다.
4. UI 모드 : 사용자의 수준, 사용자의 목적에 따라 UI 모드를 선택할 수 있습니다.

### Utility 하위 기능

<br>

#### 1. 자세

![missing](/manual/ko/programming_guide/7.utility/2.png)

자주 사용하는 자세를 최대 20개까지 UI 태블릿에 저장해 놓고 사용 가능합니다.<br>
‘현재 자세 정보 가져오기’ 버튼을 눌러서 현재 자세 정보를 가져오고, Set 버튼을 눌러서 저장합니다.<br>
‘설정된 자세로 이동’ 버튼을 계속 누르고 있으면 저장된 자세로 이동합니다.

#### 2. 관절을 원점으로 이동

![missing](/manual/ko/programming_guide/7.utility/3.png)

각 관절을 로봇 팔에 표시된 기구적 원점으로 이동시킵니다.

#### 3. 회전구속 직접 교시

![missing](/manual/ko/programming_guide/7.utility/4.png)

해당 모드는 Real Robot모드에서만 사용 가능합니다.

#### 4. 입력 신호 뷰어

![missing](/manual/ko/programming_guide/7.utility/5.png)

컨트롤 박스와 툴 플랜지의 입력 신호 모니터링 창입니다.

#### 5. 출력 신호 뷰어

![missing](/manual/ko/programming_guide/7.utility/6.png)

컨트롤 박스와 툴 플랜지의 출력 신호 모니터링 창입니다.

#### 6. 관절 정보

![missing](/manual/ko/programming_guide/7.utility/7.png)

로봇 팔의 온도 전류 모니터링 및 유저 좌표계 시각화 설정 창입니다.

#### 7. 직접교시 스냅기능

![missing](/manual/ko/programming_guide/7.utility/8.png)

직접 교시 모드 사용시 적용될 스냅(snap) 모드 선택 창입니다.

#### 8. 제어박스 출력 테스트

![missing](/manual/ko/programming_guide/7.utility/9.png)

컨트롤 박스의 출력을 테스트할 수 있는 창입니다.

#### 9. 툴 플랜지 출력 테스트

![missing](/manual/ko/programming_guide/7.utility/10.png)

툴 플랜지의 출력을 테스트할 수 있는 창입니다.

#### 10. I/O 확장 보드

![missing](/manual/ko/programming_guide/7.utility/11.png)

I/O 확장 모듈의 입출력 신호 모니터링 창입니다.

![missing](/manual/ko/programming_guide/7.utility/12.png)

I/O 확장 모듈의 출력을 테스트할 수 있는 창입니다.

### Setting 하위 기능

<br>

#### 1. 툴 List 선택

![missing](/manual/ko/programming_guide/7.utility/13.png)

미리 저장한 TCP 목록에서 사용할 TCP를 설정하는 툴 List 선택 기능이 있습니다. 툴 리스트는 총 4개까지 설정 가능합니다.

#### 2. 조이스틱 사용

![missing](/manual/ko/programming_guide/7.utility/14.png)

유/무선 조이스틱을 활용하여 로봇을 티칭 시, 조이스틱 연결 설정 기능이 있습니다.<br>
조이스틱은 아래 호환 가능 모델이 기입되어 있고, 초기설정을 해야 합니다.<br>
모든 설정이 완료되면, 우측 상단의 새로 고침 표시의 버튼을 누르면 연결이 됩니다.

#### 3. 사용자 좌표계

![missing](/manual/ko/programming_guide/7.utility/15.png)

사용자 정의 좌표계를 세팅합니다. 활성화 버튼을 누르면 세 점을 선택하는 화면이 나옵니다.<br>
3점 설정 모드입니다(7.7 Setup-Coordinate 참고).

#### 4. 사용자 좌표계 중심점

![missing](/manual/ko/programming_guide/7.utility/16.png)

기존에 설정한 사용자 좌표계의 XYZ축과 회전방향은 유지하고 원점만 이동시킵니다.

#### 5. 자동 TCP 설정

![missing](/manual/ko/programming_guide/7.utility/17.png)

자동으로 로봇 말단(TCP)의 위치를 찾아주는 기능입니다.<br>
설정하고자 하는 TCP 포인트를 3차원 공간상에 같은 지점으로 유지하는 4개의 다른 자세를 입력하면 자동으로 TCP 위치 값을 계산합니다.<br>
그림과 같이 각 자세를 취하고, 해당 번호에 있는 ‘가져오기’ 를 누릅니다.

#### 6. 고정밀 자동 TCP 설정

![missing](/manual/ko/programming_guide/7.utility/18.png)

자동으로 로봇 말단(TCP)과 마찬가지로 말단의 위치를 찾아주는 기능입니다. 하지만 자세가 더 많아 더욱 정밀한 TCP를 찾습니다.

#### 7. 외부 F/T 센서

![missing](/manual/ko/programming_guide/7.utility/19.png)

외부 F/T 센서 (예: Robotiq F/T센서) 값을 확인하고 캘리브레이션 할 수 있는 창입니다.

#### 8. 자동 부하 / 무게 설정

![missing](/manual/ko/programming_guide/7.utility/20.png)

내부 / 외부 F/T센서를 사용해서 툴에 부착된 무게와 무게 중심을 찾아주는 기능입니다.

#### 9. 직접교시 동작 녹화

![missing](/manual/ko/programming_guide/7.utility/21.png)

직접 교시 (중력 보상) 기능을 통해 동작을 녹화하는 기능입니다. 이 기능을 통해서 녹화된 동작은 Replay 기능을 통해서 프로그램에서 사용 가능합니다.

#### 10. I/O 로깅

![missing](/manual/ko/programming_guide/7.utility/22.png)

![missing](/manual/ko/programming_guide/7.utility/23.png)

하나의 디지털 입출력을 정해 그 입출력의 값의 변화를 기록하고 이를 그래프로 보여주는 기능입니다.

#### 11. 용접기 와이어 조작

![missing](/manual/ko/programming_guide/7.utility/24.png)

용접기의 와이어를 제어할 수 있는 기능입니다.

#### 12. TCP 회전 설정(프레임)

![missing](/manual/ko/programming_guide/7.utility/25.png)

선택한 좌표계와 일치하도록 현재 로봇 자세를 기반으로 기본 TCP 좌표계의 회전 방향을 설정합니다.

#### 13. 사용자 좌표계 자동 정렬

![missing](/manual/ko/programming_guide/7.utility/26.png)

로봇의 현재 TCP 좌표계를 사용자 좌표계로 설정합니다.

#### 14. 부가축 캘리브레이션

![missing](/manual/ko/programming_guide/7.utility/27.png)

로봇 팔에 부가축의 회전축 및 회전 반경을 알려주기 위한 과정입니다. 해당 캘리브레이션을 진행함으로써 로봇과 부가축의 동기 제어가 가능해집니다.

#### 15. 안전 Plane

![missing](/manual/ko/programming_guide/7.utility/28.png)

안전을 위해 로봇 팔이 넘어가지 못하는 평면을 설정합니다. 설정된 면을 넘어가는 경우 로봇 팔이 정지됩니다.

#### 16. 안전 관절 범위

![missing](/manual/ko/programming_guide/7.utility/29.png)

로봇 팔의 각 관절마다 동작하는 각도의 범위를 지정할 수 있습니다. 지정한 관절 각도 값 이상의 각도는 동작하지 않습니다.

#### 17. 글로벌 핀포인트

![missing](/manual/ko/programming_guide/7.utility/30.png)

글로벌 핀포인트를 설정하는 기능입니다. 위 그림과 같이 글로벌 핀포인트를 설정하여 복수의 프로그램에서 해당 변수를 공유할 수 있습니다.

#### 18. 회전 정렬

![missing](/manual/ko/programming_guide/7.utility/31.png)

로봇 팔의 선택된 TCP의 축이 특정 축과 정렬 되도록 회전 시킵니다.

#### 19. 최신 시스템 로그 확인

![missing](/manual/ko/programming_guide/7.utility/32.png)

시스템 상에서 최신 로그 파일의 10줄에 대한 내용을 UI 상에 표시합니다.

#### 20. 관절 0점 현장 캘리브레이션

![missing](/manual/ko/programming_guide/7.utility/33.png)

해당 기능은 관절 0점에 대한 캘리브레이션을 현장에서 진행하기 위한 기능입니다. 자세한 사항은 제조사에 문의 부탁드립니다.

### 모니터링 기능

![missing](/manual/ko/programming_guide/7.utility/34.png)

6단원의 Monitor 명령어와 함께 사용하는 기능으로써, 시스템 기본 변수 및 사용자가 설정한 변수들의 값을 실시간으로 관찰할 수 있는 창입니다.

우측 상단의 녹화 기능을 켜면, 3차원 뷰어에서 로봇 툴의 TCP 궤적이 3차원 뷰어에 녹화가 됩니다 (노란 실선).<br>
녹화 시간은 최대 30초입니다.

![missing](/manual/ko/programming_guide/7.utility/35.png)

### 3D View 기능

![missing](/manual/ko/programming_guide/7.utility/36.png)

사용 빈도가 높은 3차원 시야 각도가 지정되어 있습니다. 3차원 뷰어의 시각을 빠르게 바꾸고 싶은 경우 사용 가능합니다.
