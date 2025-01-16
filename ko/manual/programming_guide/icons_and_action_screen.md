---
layout: doc
outline: deep
---

# 아이콘 및 작업 화면 설명

### Make

화면을 구성하고 있는 요소들을 설명합니다.

<div class="center-align th-align">
  <img src="/manual/ko/programming_guide/1-1.png" />
  <table>
    <tr>
      <th>번호</th>
      <th>설명</th>
    </tr>
    <tr>
      <th>①</th>
      <td>프로그램 된 리스트를 트리형식으로 보여줍니다.</td>
    </tr>
    <tr>
      <th>②</th>
      <td>로봇 팔의 각 관절의 각도와TCP의 Cartesian(직교) 좌표 위치를 보여줍니다.</td>
    </tr>
    <tr>
      <th>③</th>
      <td>TCP 조그: Cartesian 좌표 위치를 변경할 수 있습니다. (베이스/툴/사용자 좌표계 선택 가능)<br>
          Joint: 조그: 각 조인트의 각도를 변경할 수 있습니다.</td>
    </tr>
    <tr>
      <th>④</th>
      <td>Simulation 또는 Real 모드로 변환할 수 있는 버튼입니다.<br>
          ※실제 로봇 팔을 구동하기 위해서는 Real모드를 선택하여야 합니다.</td>
    </tr>
    <tr>
      <th>⑤</th>
      <td>저장된 프로젝트를 불러올 수 있고, 새로운 프로젝트를 생성할 수 있습니다.</td>
    </tr>
    <tr>
      <th>⑥</th>
      <td>티칭된 프로그램을 실행 또는 멈출 수 있는 버튼이 있고, 속도조절 바가 존재합니다.</td>
    </tr>
    <tr>
      <th>⑦</th>
      <td>복사/붙여넣기/주석 등 각종 편집 도구가 위치합니다.</td>
    </tr>
    <tr>
      <th>⑧</th>
      <td>각종 프로그램 기능 (명령어/액션) 등이 배치되어 있습니다.<br>
          우측의 화살표를 클릭하면 더 많은 기능들이 포함되어 있습니다.</td>
    </tr>
    <tr>
      <th>⑨</th>
      <td>조그의 모드를 Smooth 모드와 Tick 모드 중 선택하는 버튼입니다.</td>
    </tr>
  </table>
</div>

:::tip

- 티칭: 사용자가 원하는 대로 로봇 팔을 움직일 수 있도록 프로그램 하는 것을 뜻함.
- TCP(Tool Center Point): 공구중심점으로 주어진 응용에 대하여 기계접속 좌표계에 대해 정의된 점으로, 말단장치(end-effector)의 원점이 됩니다.

:::

<div class="center-align">
  <figure>
    <img src='/manual/ko/programming_guide/1-2.png' alt='missing' />
    <br>
    <figcaption style="text-align: center;">[ 기본 뷰 모드 ]</figcaption>
  </figure>
 <br>
  <figure>
    <img src='/manual/ko/programming_guide/1-3.png' alt='missing' />
    <br>
    <figcaption style="text-align: center;">[ 아이콘 확장 뷰 모드 ]</figcaption>
  </figure>
 <br>
  <figure>
    <img src='/manual/ko/programming_guide/1-4.png' alt='missing' />
    <br>
    <figcaption style="text-align: center;">[ 프로그램 전용 모드 ]</figcaption>
  </figure>
</div>

<br>

#### 1. 티칭 아이콘(기능 아이콘, Make 화면)

<div class="center-align th-align">  
  <table>
    <tr>
      <th>아이콘</th>
      <th>설명</th>
    </tr>
    <tr>
      <th><img src="/manual/ko/programming_guide/icons/1.png" /></th>
      <td>
        티칭을 위한 로봇 팔의 이동방식을 설정할 수 있습니다.<br>
        지정된 목표 관절 각도로 각 관절을 움직이는 동작J,<br>
        지정된 목표 TCP 값으로 TCP를 선형적으로 움직이는 동작L이 있습니다.<br>
        이외에도 두 가지 기본 움직임을 응용할 수 있는 동작JB, 동작PB, 동작JL, 동작ITPL, 동작Pro 등<br>
        총 7개의 움직임이 내장되어 있습니다.
      </td>
    </tr>
    <tr>
      <th><img src="/manual/ko/programming_guide/icons/2.png" /></th>
      <td>
        동작의 하위항목으로서 가고자 하는 목표 값을 넣을 수 있는 기능입니다.<br>
        동작J와 동작JB의 경우 목표 값으로 관절의 각도 값을 넣습니다.<br>
        동작L, 동작PB, 동작JL, 동작Pro 그리고 동작ITPL의 경우 목표 값으로<br>
        TCP의 직교 좌표 값(x, y, z, rx, ry, rz)을 넣습니다.
      </td>
    </tr>
    <tr>
      <th><img src="/manual/ko/programming_guide/icons/3.png" /></th>
      <td>
        동작과는 별도로 원형 동작을 위한 기능을 제공합니다.<br>
        시작점과 두 점을 찍어서 3점을 지나는 호(arc)를 그리는 모드가 존재하고,<br>
        중심점과 회전축을 설정하여 원을 그릴 수 있는 모드가 있습니다.
      </td>
    </tr>
    <tr>
      <th><img src="/manual/ko/programming_guide/icons/4.png" /></th>
      <td>
        특정 자세/위치 정보를 저장하고 변수화 하기 위한 핀포인트 기능입니다.<br>
        해당 위치로 움직이지 않습니다. 특정 자세의 위치/자세 값을 변수로 저장해 두었다가,<br>
        다른 모션 기능에서 참조 (호출)하여 사용 가능합니다.
      </td>
    </tr>
    <tr>
      <th><img src="/manual/ko/programming_guide/icons/5.png" /></th>
      <td>
        특정 관절 각도 값을 저장하고 변수화 하기 위한 핀조인트 기능입니다.<br>
        해당 위치로 움직이지 않습니다. 관절 각도 값을 변수로 저장해 두었다가,<br>
        다른 모션 기능에서 참조 (호출)하여 사용 가능합니다.
      </td>
    </tr>
    <tr>
      <th><img src="/manual/ko/programming_guide/icons/6.png" /></th>
      <td>
        프로그램의 시작 위치 또는 로봇의 관절 0점 위치로 로봇을 이동시키는 기능입니다.<br>
        이동 방식은 동작J, 동작L 중 선택 가능합니다.
      </td>
    </tr>
    <tr>
      <th><img src="/manual/ko/programming_guide/icons/7.png" /></th>
      <td>
        지정된 조건이나 시간만큼 기다리는 기능입니다. 5가지 모드가 존재합니다.<br>
        지정된 시간만큼 기다리는 기능, 조건이 참일 동안 기다리는 기능,<br>
        조건이 참이면 기다림을 종료하는 기능, 입력조건이 참일동안 기다리는 기능,<br>
        그리고 입력조건이 참이면 기다림을 종료하는 기능이 있습니다.
      </td>
    </tr>
    <tr>
      <th><img src="/manual/ko/programming_guide/icons/8.png" /></th>
      <td>
        작성된 프로그램 명령들을 하위항목으로 묶어 모듈로 관리할 수 있도록 도와주는 기능입니다.<br>
        폴더 기능마다 이름을 다르게 부여하여 관리를 도와주는 도구입니다. 
      </td>
    </tr>
    <tr>
      <th><img src="/manual/ko/programming_guide/icons/9.png" /></th>
      <td>
        프로그램 리스트 트리에 주석과 같이 필요한 부분에 간단한 메모를 할 수 있습니다.
      </td>
    </tr>
    <tr>
      <th><img src="/manual/ko/programming_guide/icons/10.png" /></th>
      <td>
        프로그램을 종료하는 기능과 알람(alarm) 팝업 메시지를 띄울 수 있는 기능입니다.<br>
        4가지 옵션이 존재합니다.<br>
        프로그램을 종료할 수 있는 종료, 서브 프로그램만 종료할 수 있는 서브 프로그램 종료,<br>
        폴더 하위 프로그램만 종료할 수 있는 폴더 종료, 그리고 알람(alarm) 팝업 메시지를 띄울 수 있는 알람 기능이 있습니다.
      </td>
    </tr>
    <tr>
      <th><img src="/manual/ko/programming_guide/icons/11.png" /></th>
      <td>
        내부 값 디버깅을 위한 Debug 기능입니다. 디버그 팝업과 사용자 로그 2가지 옵션이 있습니다.<br>
        디버그 팝업은 원하는 변수 값이나 내부 파라미터를 요청하면 팝업 형식으로 해당 값을 확인할 수 있습니다.<br>
        사용자 로그는 로그 시스템에 기록하고 싶은 문자열 또는 문자열 변수를 남길 수 있습니다.<br>
        사용자 로그를 너무 자주 저장할 시, 시스템에 영향을 줄 수 있습니다.
      </td>
    </tr>
    <tr>
      <th><img src="/manual/ko/programming_guide/icons/12.png" /></th>
      <td>
        유저 입력 기능은 프로그램 실행 중 일시정지 하여 변수/배열/포인트/조인트/문자열/Global/ROM의 값을 사용자가 입력하여 변경 가능하도록 하는 기능입니다.<br>
        사용자의 상황에 따라 값을 변경할 수도, 무시하고 건너뛰는 것도 가능합니다.
      </td>
    </tr>
    <tr>
      <th><img src="/manual/ko/programming_guide/icons/13.png" /></th>
      <td>
        로봇 이외에 부가축(추가적인 모터)를 제어하기 위한 기능입니다. 최대 6개까지 추가 가능합니다.
      </td>
    </tr>
    <tr>
      <th><img src="/manual/ko/programming_guide/icons/14.png" /></th>
      <td>
        If문입니다. 조건에 따라 로봇이 다른 명령을 수행할 수 있도록 분기를 설정할 수 있습니다. If/else if/else 문을 사용할 수 있습니다.
      </td>
    </tr>
    <tr>
      <th><img src="/manual/ko/programming_guide/icons/15.png" /></th>
      <td>
        Switch문입니다. 조건에 따라 로봇이 다른 명령을 수행할 수 있도록 분기를 설정할 수 있습니다. Switch/case 문을 이용할 수 있습니다.
      </td>
    </tr>
    <tr>
      <th><img src="/manual/ko/programming_guide/icons/16.png" /></th>
      <td>
        하위의 내용을 최초 한번만 실행하는 Pre Program 기능과 프로그램 종료 후 마무리 작업으로 수행할 기능을 정의하는 Post Program 기능입니다.<br>
        Pre Program기능은 Play 모드와 같이 프로그램이 계속 돌아가는 경우, Pre Program의 하위에 선언된 내용은 최초 한번만 실행됩니다.<br>
        변수 선언이나 통신 연결과 같이 단발성 명령어의 경우 Pre program 하위에서 관리하면 됩니다.<br>
        Post Program의 하위에 선언된 기능들은 프로그램 종료 후 순차적으로 수행됩니다. 동작에 관한 명령어는 하위에서 사용하지 못합니다.
      </td>
    </tr>
    <tr>
      <th><img src="/manual/ko/programming_guide/icons/17.png" /></th>
      <td>
        Set 기능입니다. Setup 메뉴에서 세팅하는 각종 설정 파라미터를 프로그램 내부에서 별도로 세팅 가능합니다.<br>
        특정 설정 파라미터를 프로그램 실행 중에 변경할 수 있는 기능을 가지고 있습니다.
      </td>
    </tr>
    <tr>
      <th><img src="/manual/ko/programming_guide/icons/18.png" /></th>
      <td>
        TCP 설정 기능은 미리 저장한 TCP 값을 프로그램 실행 중에 불러와 한시적으로 TCP 값을 변경하는 기능입니다.<br>
        Setup 페이지의 Tool List에서 TCP 값을 미리 저장할 수 있습니다.
      </td>
    </tr>
    <tr>
      <th><img src="/manual/ko/programming_guide/icons/19.png" /></th>
      <td>
        수동 조작 기능은 프로그램이 실행되는 중에 일시정지하고 직접 교시를 사용할 수 있게 하는 기능입니다.
      </td>
    </tr>
    <tr>
      <th><img src="/manual/ko/programming_guide/icons/20.png" /></th>
      <td>
        로봇 관절과 부가축을 동시에 동작 시키기 위한 기능입니다.
      </td>
    </tr>
    <tr>
      <th><img src="/manual/ko/programming_guide/icons/21.png" /></th>
      <td>
        반복문입니다. 지정된 조건이나 횟수만큼 하위의 프로그램을 반복합니다. 4가지 모드가 존재합니다.<br>
        지정된 횟수만큼 반복 기능, 지정된 조건이 참일 동안 반복하는 기능,<br>
        Do While(지정된 조건이 참일 동안 반복하지만, 조건이 참이 아니어도 최초 1회는 실행하는 기능)<br>
        그리고 조건이 참이면 반복을 끝내는 기능이 있습니다.
      </td>
    </tr>
    <tr>
      <th><img src="/manual/ko/programming_guide/icons/22.png" /></th>
      <td>
        반복문을 강제로 종료하는 기능입니다. 반복문 (repeat 기능) 기능 하위에서 사용되며,<br>
        반복문에 특정 조건이 선언되어 있더라도 break 기능이 사용되면 선행적으로 반복문을 탈출합니다.<br>
        반복중단 외에도 프로그램 흐름이 반복문 최상단으로 이동하는 계속 기능,<br>
        프로그램 로직 점프 Here로 점프할 수 있는 프로그램 로직 점프 To기능,<br>
        프로그램 점프 To의 목적지가 되는 프로그램 로직 점프 Here, 그리고 폴더로 점프할 수 있는 프로그램 로직 점프 기능이 있습니다.
      </td>
    </tr>
    <tr>
      <th><img src="/manual/ko/programming_guide/icons/23.png" /></th>
      <td>
        쓰레드 기능입니다. 일반/비정지 쓰레드 추가 기능과 이벤트 쓰레드 호출 2가지 기능이 있습니다.<br>
        쓰레드 속성은 5가지가 있습니다. 쓰레드 속성에는 일반 쓰레드, 비정지 쓰레드, 비정지 쓰레드2, 이벤트 일반 쓰레드 그리고, 이벤트 비정지 쓰레드가 있습니다.<br>
        쓰레드 기능의 하위 항목은 메인 프로그램과 병렬로 실행됩니다. 단, 로봇 동작에 관한 명령어는 쓰레드 하위에 넣지 못합니다. 
      </td>
    </tr>
    <tr>
      <th><img src="/manual/ko/programming_guide/icons/24.png" /></th>
      <td>
        G코드 기능은 지정된 폴더에 G코드 파일을 위치시킨 경우 사용할 수 있는 기능입니다. 해당 G코드의 경로를 로봇이 구현하게 됩니다.
      </td>
    </tr>
    <tr>
      <th><img src="/manual/ko/programming_guide/icons/25.png" /></th>
      <td>
        모션 레코딩 기능을 통하여 녹화된 모션을 다시 재생하는 기능입니다.<br>
        직접 교시 등을 통하여 녹화된 모션은 이 기능을 통하여 J나 L타입으로 다시 재생 가능합니다.
      </td>
    </tr>
    <tr>
      <th><img src="/manual/ko/programming_guide/icons/26.png" /></th>
      <td>
        아날로그 입력 신호를 통해 용접 전류로부터 피드백을 받아 TCP 위치를 조정하는 기능입니다.<br>
        사용자는 Rainbow에서 제공하는 아날로그 입력 범위(0~10V)에 따라 측정/제어할 전류/전압 신호의 크기를 조정해야 합니다.
      </td>
    </tr>
    <tr>
      <th><img src="/manual/ko/programming_guide/icons/27.png" /></th>
      <td>
        미리 정해져 있는 동작을 자동으로 만들어주는 기능입니다.<br>
        정해져 있는 동작은 여러 개가 있으며, 해당 동작에 대해 파라미터를 수정함으로써 원하는 동작의 생성이 가능합니다.
      </td>
    </tr>
    <tr>
      <th><img src="/manual/ko/programming_guide/icons/28.png" /></th>
      <td>
        컨트롤 박스의 디지털 출력(Digital output)을 제어하는 명령어입니다. 7가지 기능이 있습니다.<br>
        개별 출력, 비트 조합 출력, 신호 토글 출력, 전체신호 출력, 단위 펄스 출력, 펄스 폭 변조(PWM), 그리고 조건 기반 출력 기능이 있습니다.<br>
        16개의 포트 중 선택된 포트를 통해 선택된 신호가 출력되는 기능입니다.<br>
        각 포트에는 High 신호, Low 신호, Bypass 3가지를 설정할 수 있습니다.
      </td>
    </tr>
    <tr>
      <th><img src="/manual/ko/programming_guide/icons/29.png" /></th>
      <td>
        컨트롤 박스의 아날로그 출력(Analog output)을 제어하는 명령어입니다.<br>
        4개의 아날로그 포트 중 선택된 포트를 통해 선택된 전압을 출력하는 기능입니다.<br>
        각 포트는 0~10 V의 전압 범주로 출력할 수 있습니다. 개별 아날로그 출력과 속도기반 아날로그 출력 2가지 기능이 있습니다.
      </td>
    </tr>
    <tr>
      <th><img src="/manual/ko/programming_guide/icons/30.png" /></th>
      <td>
        툴 플랜지에는 2개의 디지털 출력이 있습니다. 2개의 디지털 출력의 신호를 지정할 수 있습니다.<br>
        더불어, 툴 플랜지에서 출력할 전압의 레벨 (0V 또는 12V 또는 24V)을 함께 조절 가능합니다.
      </td>
    </tr>
    <tr>
      <th><img src="/manual/ko/programming_guide/icons/31.png" /></th>
      <td>
        그리퍼 기능입니다. 타사에서 만든 그리퍼 사용에 대한 함수가 미리 내장되어 있습니다.<br>
        사용하고자 하는 그리퍼를 선택하고, 해당 그리퍼가 제공하는 기능을 선택하면 자동으로 손쉽게 그리퍼를 사용할 수 있도록 보조하는 기능입니다.
      </td>
    </tr>
    <tr>
      <th><img src="/manual/ko/programming_guide/icons/32.png" /></th>
      <td>
        I/O 확장 모듈을 추가하였을 때 사용 가능한 기능입니다.<br>
        I/O 확장 모듈의 디지털/아날로그 출력을 설정할 수 있으며 설정 방식은 기존의 D.출력, An.출력과 동일합니다.
      </td>
    </tr>
    <tr>
      <th><img src="/manual/ko/programming_guide/icons/33.png" /></th>
      <td>
        아크 용접을 위한 전용 매크로 기능입니다.<br>
        일반적인 D.out이나 Wait 기능등을 통해 구현 가능한 기능을 매크로 형태로 빠르게 사용 가능하도록 묶어둔 전용 기능입니다.<br>
        아크 용접기에 관한 설정은 Setup > Device에서 수행합니다.
      </td>
    </tr>
    <tr>
      <th><img src="/manual/ko/programming_guide/icons/34.png" /></th>
      <td>
        디지털 용접기를 사용하기 위한 기능입니다.<br>
        사용하고자 하는 브랜드의 디지털 용접기를 선택한 후 모드, 옵션을 선택하면 디지털 용접기를 쉽게 사용할 수 있습니다.
      </td>
    </tr>
    <tr>
      <th><img src="/manual/ko/programming_guide/icons/35.png" /></th>
      <td>
        사용자가 임의의 스크립트를 작성할 수 있는 스크립트 기능입니다.<br>
        기능과 별도로 특정 연산/계산이 필요하거나, 변수 치환, 대입 등의 기능을 스크립트 기능을 사용하여 구현 가능합니다.
      </td>
    </tr>
    <tr>
      <th><img src="/manual/ko/programming_guide/icons/36.png" /></th>
      <td>
        변수 선언을 위한 Assign 기능입니다. 변수 형태는 5타입으로 선언할 수 있습니다.<br>
        단일 숫자를 저장하는 variable 타입,<br>
        배열 숫자를 저장하는 array 타입,<br>
        자세 정보(x, y, z, rx, ry, rz)를 저장하는 point 타입,<br>
        관절 각도 정보를 저장하는 joint, 그리고 문자열을 저장하는 string 타입이 있습니다.
      </td>
    </tr>
    <tr>
      <th><img src="/manual/ko/programming_guide/icons/37.png" /></th>
      <td>
        프로그램 구동 중, 실시간으로 관찰하고 싶은 변수 (단일 변수, 배열, 포인트 변수 등)를 선언하는 기능입니다.<br>
        모니터링 기능에 선언된 변수들은 Make/Play 페이지 우측의 모니터 아이콘을 클릭하면 프로그램 구동 중 실시간으로 변수 값을 관찰 가능합니다.
      </td>
    </tr>
    <tr>
      <th><img src="/manual/ko/programming_guide/icons/38.png" /></th>
      <td>
        툴 플랜지/컨트롤 박스를 통해, RS485/232 출력을 위한 기능입니다.<br>
        아스키(Ascii)모드로 출력을 줄 수도 있고, 16진법(hex) 모드로 출력을 줄 수도 있습니다.<br>
        해당 통신 규약은 Setup-serial 메뉴에서 설정합니다.
      </td>
    </tr>
    <tr>
      <th><img src="/manual/ko/programming_guide/icons/39.png" /></th>
      <td>
        소켓 통신을 위한 기능입니다.<br>
        소켓을 열어서 특정 서버에 접속하고, 서버에 요청 메시지를 보내고 서버로부터 특정 데이터를 받아오는 기능을 제공합니다.<br>
        소켓 통신은 최대 5개까지 별도의 서버와 연결 가능합니다.
      </td>
    </tr>
    <tr>
      <th><img src="/manual/ko/programming_guide/icons/40.png" /></th>
      <td>
        모드버스 클라이언트 기능입니다. 특정 IP/주소에 데이터를 요청하고, 반환된 데이터를 가져올 수 있는 기능을 제공합니다.<br>
        데이터 요청 주기와 형식 등을 지정 가능합니다.<br>
        본 제품에서 제공되는 모드버스 서버에 관련된 프로토콜은 별도로 제공됩니다.
      </td>
    </tr>
    <tr>
      <th><img src="/manual/ko/programming_guide/icons/41.png" /></th>
      <td>
        HMI, PLC 등의 타제품을 쉽게 사용할 수 있도록 기능을 내장한 기능입니다.<br>
        사용하고자 하는 제품을 선택 가능하고 선택한 제품을 사용하기 위한 세부 기능을 선택할 수 있습니다.
      </td>
    </tr>
    <tr>
      <th><img src="/manual/ko/programming_guide/icons/42.png" /></th>
      <td>
        사전에 만들어진 다른 프로그램 파일(티칭 파일)을 현재 프로젝트안에 삽입할 수 있는 기능입니다.<br>
        하위 프로그램 호출, 명령어 내용 복사, 그리고 프로그램 전환 방식으로 호출 기능이 존재합니다.<br>
        하위 프로그램 호출 기능은 하위 프로젝트를 시각적으로 내용을 볼 수는 있으나,<br>
        수정은 불가능합니다. 수정이 필요한 경우 해당 프로젝트를 별도로 열어야 합니다.<br>
        명령어 내용 복사 기능은 사전에 만들어진 다른 프로그램 파일(티칭 파일)을 현재 문서에<br>
        수정 가능한 형태로 삽입하는 기능입니다. 하위 프로그램 호출의 기능과 유사하지만,<br>
        하위 프로그램 호출의 경우 단순히 해당 프로그램을 호출하는 기능이라면<br>
        명령어 내용 복사 기능은 현재 프로그램에서 수정 가능한 형태로 다른 프로그램을<br>
        복사해서 들고 오는 기능입니다. 프로그램 전환 방식으로 호출 기능은 메인 프로그램을<br>
        다른 프로젝트로 바꾸고자 할때 사용하는 기능입니다.
      </td>
    </tr>
    <tr>
      <th><img src="/manual/ko/programming_guide/icons/43.png" /></th>
      <td>
        반복 동작을 정의하는 기능입니다.<br>
        반복 동작을 수행할 공간에 대한 정보를 정의하고, 각 위치에서 수행할 반복 동작을 정의하면<br>
        모든 공간 지점에서 같은 동작을 수행합니다. 팔레타이징을 이 기능을 통하여 구현 가능합니다.
      </td>
    </tr>
    <tr>
      <th><img src="/manual/ko/programming_guide/icons/44.png" /></th>
      <td>
        컨베이어 추적 기능입니다.<br>
        컨베이어 속도와 방향에 관한 설정을 하면, 컨베이어 기능의 하위 동작(동작 L, 동작 PB,<br>
        동작 ITPL, 동작 Pro, Circle)은 컨베이어 흐름에 더해집니다.
      </td>
    </tr>
    <tr>
      <th><img src="/manual/ko/programming_guide/icons/45.png" /></th>
      <td>
        힘 제어를 위한 기능입니다.<br>
        원하는 힘의 작용 방향과 좌표계를 선택합니다. 힘 제어 하위에 포함된 동작들은 힘 제어 기능이<br>자동으로 부여됩니다.
      </td>
    </tr>
    <tr>
      <th><img src="/manual/ko/programming_guide/icons/46.png" /></th>
      <td>
        위빙 동작을 위한 전용 기능입니다. 위빙 동작 하위에 설정된 동작 L계열이나 Circle 등의 동작은<br>
        설정된 위빙 옵션이 합쳐져서 동작됩니다.<br>
        위빙 형상은 Trapezoidal, SineWave, Triangle, C-Wave, 그리고 Circle 5가지가 있습니다.
      </td>
    </tr>
    <tr>
      <th><img src="/manual/ko/programming_guide/icons/47.png" /></th>
      <td>
        위빙 동작을 위한 전용 기능입니다.<br>
        기존 위빙 동작과 달리 위빙의 기준이 TCP 좌표계를 통해 이루어집니다.<br>
        위빙 동작 하위에 설정된 동작L계열이나 Circle 등의 동작은 설정된 위빙 옵션이 합쳐져서 동작됩니다.<br>
        위빙 형상은 Trapezoidal, SineWave, Triangle, C-Wave, 그리고 Circle 5가지가 있습니다.
      </td>
    </tr>
    <tr>
      <th><img src="/manual/ko/programming_guide/icons/48.png" /></th>
      <td>
        용접 어플리케이션에 사용하기 위한 기능입니다.<br>
        모재의 이동을 감지하여 이동 및 이동 방향을 반영해 용접을 진행할 수 있도록 해줍니다.
      </td>
    </tr>
  </table>
</div>

#### 2. 편집 아이콘 (Make 화면 좌측)

<div class="center-align th-align">  
  <table>
    <tr>
      <th>아이콘</th>
      <th>설명</th>
    </tr>
    <tr>
      <th><img src="/manual/ko/programming_guide/icons/49.png" /></th>
      <td>
        명령어를 한 칸씩 위로 올리거나 밑으로 내릴 수 있습니다.
      </td>
    </tr>
    <tr>
      <th><img src="/manual/ko/programming_guide/icons/50.png" /></th>
      <td>
        작업을 한 단계 이전, 이후로 되돌립니다. 최대 50회까지 가능합니다.
      </td>
    </tr>
    <tr>
      <th><img src="/manual/ko/programming_guide/icons/51.png" /></th>
      <td>
        선택된 명령어를 복사합니다. 복사한 명령어는 다른 위치에 붙여 넣을 수 있습니다.
      </td>
    </tr>
    <tr>
      <th><img src="/manual/ko/programming_guide/icons/52.png" /></th>
      <td>
        복사 또는 잘라낸 명령어를 선택한 위치에 붙여 넣습니다.
      </td>
    </tr>
    <tr>
      <th><img src="/manual/ko/programming_guide/icons/53.png" /></th>
      <td>
        선택된 명령어를 잘라냅니다. 잘라낸 명령어는 다른 위치에 붙여 넣을 수 있습니다.
      </td>
    </tr>
    <tr>
      <th><img src="/manual/ko/programming_guide/icons/54.png" /></th>
      <td>
        선택된 명령어를 삭제합니다.
      </td>
    </tr>
    <tr>
      <th><img src="/manual/ko/programming_guide/icons/55.png" /></th>
      <td>
        주석화 (억제) 기능입니다. 선택된 명령어를 실행하지 않도록 만듭니다.<br>
        주석화가 된 명령어는 프로그램에 존재하지만 실행되지 않습니다.<br>
        주석화가 된 명령어에 비활성화 버튼을 한번 더 누르게 되면, 활성화 상태가 됩니다.
      </td>
    </tr>
    <tr>
      <th><img src="/manual/ko/programming_guide/icons/56.png" /></th>
      <td>
        원하는 프로그램 라인에 하이라이트 (마킹)을 표시할 수 있습니다.<br>
        중요한 프로그램 라인에 밑줄을 그리는 기능입니다.<br>
        색상은 파란색, 분홍색 2가지가 있습니다.
      </td>
    </tr>
  </table>
</div>

#### 3. 로봇 팔 움직임 및 기타 기능 (Make 화면 우측)

<div class="center-align th-align">  
  <table>
    <tr>
      <th>아이콘</th>
      <th>설명</th>
    </tr>
    <tr>
      <th><img src="/manual/ko/programming_guide/icons/57.png" /></th>
      <td>
        베이스에 고정된 Global 좌표계를 기준으로 TCP의 위치를 움직일 수 있습니다.
      </td>
    </tr>
    <tr>
      <th><img src="/manual/ko/programming_guide/icons/58.png" /></th>
      <td>
        TCP에 고정된 Local 좌표계 (툴 좌표계)를 기준으로 TCP의 위치를 움직일 수 있습니다.
      </td>
    </tr>
    <tr>
      <th><img src="/manual/ko/programming_guide/icons/59.png" /></th>
      <td>
        사용자 정의 좌표계 (User Coordinate)를 기준으로 TCP의 위치를 움직일 수 있습니다.
      </td>
    </tr>
    <tr>
      <th><img src="/manual/ko/programming_guide/icons/60.png" /></th>
      <td>
        로봇 팔의 각 관절을 따로 움직일 수 있습니다.
      </td>
    </tr>
    <tr>
      <th><img src="/manual/ko/programming_guide/icons/61.png" /></th>
      <td>
        유저 좌표계 설정, 자동 TCP 찾기 기능 등, 조그와 함께 사용하면 편리한 설정을 별도로 모아 두었습니다.<br>
        해당 설정들은 기본적으로 Setup 메뉴에서도 설정 가능합니다.
      </td>
    </tr>
    <tr>
      <th><img src="/manual/ko/programming_guide/icons/62.png" /></th>
      <td>
        자주 사용하는 특수 기능들이 모여 있습니다.<br>
        시스템의 입출력 상태 정보, 유저 좌표계 (user-coordinate) 설정 정보,<br>
        로봇의 전류/온도 정보 등 기타 상태 및 설정값을 볼 수 있습니다.
      </td>
    </tr>
    <tr>
      <th><img src="/manual/ko/programming_guide/icons/63.png" /></th>
      <td>
        Monitor 기능을 통해 선택된 변수들의 값을 실시간으로 관찰하는 창입니다.<br>
        선택된 변수뿐만 아니라, 자주 확인해야 되는 시스템 변수도 함께 표시됩니다.
      </td>
    </tr>
    <tr>
      <th><img src="/manual/ko/programming_guide/icons/64.png" /></th>
      <td>
        UI 모드를 선택할 수 있는 기능입니다.<br>
        사용자의 수준, 환경에 맞게 UI 모드를 선택할 수 있습니다.<br>
        모드 옵션은 전문가 모드, 초보자 모드, 용접 모드(아날로그), 용접 모드(디지털) 4가지가 있습니다.
      </td>
    </tr>
  </table>
</div>

#### 4. 시스템 기능 버튼

<div class="center-align th-align">  
  <table>
    <tr>
      <th>아이콘</th>
      <th>설명</th>
    </tr>
    <tr>
      <th><img src="/manual/ko/programming_guide/icons/65.png" /></th>
      <td>
        홈 화면 및 다른 페이지로 이동하는 버튼입니다.<br>
        (좌측 상단에 배치되어 있음).
      </td>
    </tr>
    <tr>
      <th><img src="/manual/ko/programming_guide/icons/66.png" /></th>
      <td>
        UI가 종료됩니다.<br>
        만약 로봇이 활성화되어 있고, UI 태블릿 PC와 연결이 되어 있는 경우,<br>
        로봇의 전원도 함께 내려갑니다.<br>
        스크린 락(lock) 기능이 있습니다. (우측 하단에 배치되어 있음).
      </td>
    </tr>
  </table>
</div>

:::tip

- 각 기능에 대한 자세한 설명은 뒷부분에 설명되어 있습니다.
  :::
