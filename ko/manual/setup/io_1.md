---
layout: doc
outline: deep
---

# Set-up (I/O 1)

컨트롤 박스의 GPIO포트의 기능을 설정할 수 있는 곳입니다.

### 1. 제어박스 디지털 입력 기능 정의

![missing](/manual/ko/setup/7-1.png)

1. 기능을 변경할 입력 포트를 선택합니다.
2. - **R** : 임의의 디지털 입력 포트에 적용한 기능은 디지털 입력 펄스가 Rising Edge에 기능이 활성화 됩니다.<br>
   - **H** : 임의의 디지털 입력 포트에 적용한 기능은 디지털 입력 펄스가 High State에 기능이 활성화 됩니다.<br>
   - **F** : 임의의 디지털 입력 포트에 적용한 기능은 디지털 입력 펄스가 Falling Edge에 기능이 활성화 됩니다.<br>
   - **L** : 임의의 디지털 입력 포트에 적용한 기능은 디지털 입력 펄스가 Low State에 기능이 활성화 됩니다.
3. 16개의 디지털 입력 포트에 적용된 기능을 표시합니다.

### 2. 제어박스 디지털 출력 기능 정의

![missing](/manual/ko/setup/7-2.png)

4. 기능을 변경할 출력 포트를 선택합니다.
5. - **R** : 임의의 디지털 출력 포트에 적용한 기능은 디지털 출력 펄스가 Rising Edge에 기능이 활성화 됩니다.<br>
   - **H** : 임의의 디지털 출력 포트에 적용한 기능은 디지털 출력 펄스가 High State에 기능이 활성화 됩니다.<br>
   - **F** : 임의의 디지털 출력 포트에 적용한 기능은 디지털 출력 펄스가 Falling Edge에 기능이 활성화 됩니다.<br>
   - **L** : 임의의 디지털 출력 포트에 적용한 기능은 디지털 출력 펄스가 Low State에 기능이 활성화 됩니다.
6. 16개의 디지털 출력 포트에 적용된 기능을 표시합니다.

### 3. 제어박스 입력 라벨

![missing](/manual/ko/setup/7-3.png)

7. 사용할 이름을 입력합니다.
8. 이름을 설정할 입력 포트를 선택합니다.

### 4. 제어박스 출력 라벨

![missing](/manual/ko/setup/7-4.png)

9. 사용할 이름을 입력합니다.
10. 이름을 설정할 출력 포트를 선택합니다.

### 5. 컨트롤 박스 입력 포트 기능

컨트롤 박스의 입력 포트(Din 0 ~ Din 15)의 기능은 아래와 같은 특수 기능으로 설정 가능합니다(R = Rising Edge, F = Falling Edge, H = High State).

<div class="warning custom-block">
    <p class="custom-block-title">주의</p>
    <ul>
        <li>
            Digital 입력을 사용하기 전에 제조사가 제공하는 디지털 입력 포트의 전기적 특성을 충분히 숙지하고 사용하시기 바랍니다.
        </li>
    </ul>
</div>

0. 기본 모드(GPIO)
1. 프로그램 시작 1회 모드(Rising Edge)
2. 프로그램 중지(Rising Edge)
3. 프로그램 일시정지(Rising Edge)
4. R = 직접 교시 모드 켜기 / F = 직접 교시 모드 끄기
5. R = 속도 100% / F = 속도 0%
6. R = 리얼 모드로 전환 / F = 시뮬레이션 모드로 전환
7. R = 로봇 초기화
8. H = High State인 경우 충돌 기능 끄기
9. H = 자동 초기화 키 (Auto-Initialization Key)
10. R = 외부 충돌로 인한 일시 정지 상태 해제
11. R = UI 프로그램에 Point 기능 추가 (Rising Edge)
12. R = 프로그램 시작 반복 모드 (Rising Edge)
13. R = Begin 위치로 이동
14. R = 프로그램 재개
15. H = Quick Freedrive Change
16. R = 프로그램 일시 정지 / F = 프로그램 재개
17. F = 프로그램 일시 정지 / R = 프로그램 재개
18. H = 속도 조절 바 100% / L = 속도 조절 바 0%
19. R = 기본 설정 프로그램 로드
20. F = 로봇 팔 전원 끄기
21. R = Touch Sensing
22. F = Touch Sensing
23. H = No Arc
24. H = Program Start Block
25. R = Ext.Joint0 Plus / F = stop
26. R = Ext.Joint0 Minus / F = stop
27. R = Ext.Joint1 Plus / F = stop
28. R = Ext.Joint1 Minus / F = stop
29. R = Ext.Joint2 Plus / F = stop
30. R = Ext.Joint2 Minus / F = stop
31. H = Safety Speed
32. F = UserCoord0 ←TCP frame
33. F = UserCoord1 ←TCP frame
34. F = UserCoord2 ←TCP frame
35. F = Load & Run Program Table
36. R = Start Prog.(Once) / F = Stop Prog.
37. R = Start Prog.(Repeat) / F = Stop Prog.
38. F = Change Global Pinpoint #’s Prog.
39. R = EXT. Joint 0 Slow Plus / F = Stop
40. R = EXT. Joint 0 Slow Minus / F = Stop
41. R = EXT. Joint 1 Slow Plus / F = Stop
42. R = EXT. Joint 1 Slow Minus / F = Stop
43. R = EXT. Joint 2 Slow Plus / F = Stop
44. R = EXT. Joint 2 Slow Minus / F = Stop
45. R = Reset SOS
46. F = Reset SOS
47. R = Delete Point
48. R = Add ARC-ON
49. R = Add ARC-Off
50. H = Speed 75% / L = 0%
51. H = Speed 50% / L = 0%
52. H = Speed 25% / L = 0%
53. H = Speed 10% / L = 0%
54. F = Pause Program
55. H = Block Freedrive Button
56. L = Block Freedrive Button
57. Duplex for Safety
58. F = Stop Program

### 6. 컨트롤 박스 출력 포트 기능

컨트롤 박스의 출력 포트(Dout 0 ~ Dout 15)의 기능은 아래와 같은 특수 기능으로 설정 가능합니다(R = Rising Edge, F = Falling Edge, H = High State).<br>
특수 기능으로 설정된 출력 포트는 티칭 프로그램에서 일반적인 용도로 사용하지 못합니다.

<div class="warning custom-block">
    <p class="custom-block-title">주의</p>
    <ul>
        <li>
            Digital 출력을 사용하기 전에 제조사가 제공하는 디지털 출력 포트의 전기적 특성을 충분히 숙지하고 사용하시기 바랍니다.
        </li>
    </ul>
</div>

0. 기본 모드(GPIO)
1. H = 프로그램/로봇 실행 중 / L = Idle 상태
2. L = 프로그램/로봇 실행 중/ H = Idle 상태
3. H = 외부충격 감지
4. H = 직접 교시 모드 실행 상태
5. 선택 포트와 같은 번호의 디지털 입력 신호 전달
6. 툴 플랜지 입력 포트 0번 신호 전달
7. 툴 플랜지 입력 포트 1번 신호 전달
8. H = 로봇 활성화 상태 / L = 활성화되지 않음
9. H = 리얼 모드 상태 / L = 시뮬레이션 모드 상태
10. H = 로봇 동작 중 / L = Idle 상태
11. L = 로봇 동작 중 / H = Idle 상태
12. H = 로봇 초기화 (활성화) 실패 상태
13. H = 로봇 팔에 전원 인가 상태 / L = 팔에 전원 비인가 상태
14. H = 충돌 감지 켜져있는 상태 / L = 충돌 감지 기능 꺼져있는 상태
15. H = 일시 정지 상태
16. H = Inbox 0번에 Trap이 발생한 상태
17. H = Inbox 1번에 Trap이 발생한 상태
18. PWM 모듈로 사용
19. H = 티칭팬던트가 연결됨
20. H = 프로그램이 MAKE 창에서 실행됨
21. H = 프로그램이 PLAY 창에서 실행됨
22. H = 컨베이어 모드 실행 중
23. H = 컨트롤 박스 부팅 완료
24. H = 힘 제어 모드 실행 중
25. PC Alive Pulse
26. H = 속도 조절 바 100%
27. H = 최근 프로그램 불러오기 성공
28. H = TCP is in InBox 0
29. H = TCP is in InBox 1
30. H = Is Alarm
31. H = Robot posture is Begin posture
32. H = Emergency Teaching Enable
33. H = Prog. Run in Sub.P area
34. H = Normal Program Run / L = Others
35. H = Normal Program Run / H = Others
36. H = Hand Controller F1 pressed
37. H = Hand Controller F2 pressed
38. H = Hand Controller F3 pressed
39. H = Hand Controller F4 pressed
40. L = TCP is in InBox 0
41. L = TCP is in InBox 1
42. Sync with Dout 0
43. Sync with Dout 1
44. Sync with Dout 2
45. Sync with Dout 3
46. Sync with Dout 4
47. Sync with Dout 5
48. Sync with Dout 6
49. Sync with Dout 7
50. Sync with Dout 8
51. Sync with Dout 9
52. Sync with Dout 10
53. Sync with Dout 11
54. Sync with Dout 12
55. Sync with Dout 13
56. Sync with Dout 14
57. Sync with Dout 15
58. H = Is SOS State
59. L = Is SOS State
60. H = EMG Button Released / L = Pressed
61. L = EMG Button Released / H = Pressed
62. L = Robot Speed under 250mm/s
63. H = Robot Speed under 250mm/s
64. H = Near Joint Limit
65. H = Robot Arm under Activating
66. H = Under Program Loading
