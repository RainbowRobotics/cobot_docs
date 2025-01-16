---
layout: doc
outline: deep
---

# 주요 티칭 아이콘 상세설명

앞서 6.3에서는 로봇 티칭의 기본이 되는 동작 기능과 포인트 기능을 서술하였습니다.<br>
본 섹션에서는 기타 티칭 아이콘 / 기능 아이콘들에 대한 설명입니다.

### 1. 원 동작(Circle) 기능

![missing](/manual/ko/programming_guide/icons/3.png)

동작과는 별도로 원형 동작을 위한 기능을 제공합니다.<br>
시작점과 두 점을 찍어서 3점을 지나는 호(arc)를 그리는 타입이 존재하고, 중심점과 회전축을 설정하여 원을 그릴 수 있는 타입이 있습니다.

![missing](/manual/ko/programming_guide/4.teaching_icons_detail/1.png)

1. 3-Point 기반 원 동작 : 3점의 정보를 가지고 호를 그리는 모드
2. Axis 기반 원 동작: 회전 중심과 회전 축 정보를 가지고 호/원을 그리는 모드

원을 그리는 타입과 별도로, 원 동작 기능에서는 아래와 같이 4가지 회전 옵션(Orientation Option)이 제공됩니다.

![missing](/manual/ko/programming_guide/4.teaching_icons_detail/2.png)

- Constant: 회전 동작을 하면서 말단(TCP)의 회전 자세를 유지합니다.
- Intended: 유저가 저장한 회전 자세를 그대로 따라갑니다.
- Radial: 회전 중심점을 기준으로 TCP 방향을 회전합니다.
- Smooth: 시작점에서 도착지점으로 회전이 바로 바뀝니다. 경유지점의 회전 정보는 무시됩니다.

#### 1.1 3-Point 기반 원 동작

시작점과 중간 경유점 그리고 도착점, 세 점의 정보를 바탕으로 3점을 연결하는 호(arc)를 그리는 타입입니다.

![missing](/manual/ko/programming_guide/4.teaching_icons_detail/3.png)
![missing](/manual/ko/programming_guide/4.teaching_icons_detail/4.png)

① 원형 동작을 위한 타입(3점 설정 타입)<br>
② 점의 속성 (Absolute / Variable / Relative / UserCoord.)<br>
③ 회전 옵션 (Constant / Radial / Intended / Smooth)<br>
④ 경유점(Via Point)에 대한 정보<br>
⑤ 목표점(Destination Point)에 대한 정보

#### 1.2 Axis 기반 원 동작

원형 동작을 위한 중심점과 회전 축, 그리고 회전할 각도를 설정하면 원형 동작을 하는 타입입니다.

![missing](/manual/ko/programming_guide/4.teaching_icons_detail/5.png)
![missing](/manual/ko/programming_guide/4.teaching_icons_detail/6.png)

① 원형 동작을 위한 타입(축/중심 설정 타입)<br>
② 점의 속성 (Absolute / Variable / Relative / UserCoord)<br>
③ 회전 옵션 (Constant / Radial / Intended / Smooth)<br>
④ 중심점(Center Point)에 대한 정보<br>
⑤ 회전축(Axis)에 대한 정보<br>
⑥ 회전 각도(degree)에 대한 정보

### 2. 핀포인트 기능

![missing](/manual/ko/programming_guide/icons/4.png)

![missing](/manual/ko/programming_guide/4.teaching_icons_detail/7.png)

특정 자세/위치의 정보를 포인트 변수로 저장하기 위한 기능입니다.<br>
특정 자세를 티칭해둔 상태에서 핀포인트를 생성하고 핀포인트의 이름을 부여하면, 해당 자세 정보는 포인트 변수 형태로 변수화 됩니다.<br>
포인트 변수로 저장된 정보는 다른 동작 명령어/설정 등에서 사용 가능합니다.

### 3. 핀조인트 기능

![missing](/manual/ko/programming_guide/icons/5.png)

![missing](/manual/ko/programming_guide/4.teaching_icons_detail/8.png)

특정 자세/위치의 정보를 조인트 변수로 저장하기 위한 기능입니다.<br>
특정 자세를 티칭해둔 상태에서 핀조인트를 생성하고 핀조인트의 이름을 부여하면, 해당 자세 정보는 조인트 변수 형태로 변수화 됩니다.<br>
조인트 변수로 저장된 정보는 다른 동작 명령어/설정 등에서 사용 가능합니다.

### 4. 홈 기능

![missing](/manual/ko/programming_guide/icons/6.png)

![missing](/manual/ko/programming_guide/4.teaching_icons_detail/9.png)

홈 기능은 프로젝트 시작 위치 또는 관절 영점 자세로 로봇을 동작시키는 기능입니다. 이때, J타입과 L타입 동작을 선택할 수 있습니다.<br>
프로젝트 시작 위치로 가는 경우 메인 프로그램의 시작 위치와 서브 프로그램의 시작 위치를 선택할 수 있습니다.<br>
아래 다이어그램을 통해 서브 프로그램 내에서 홈 기능을 사용할 때 메인 프로젝트의 시작 위치로 가는 경우와 서브 프로젝트의 시작 위치로 가는 경우의 차이를 알 수 있습니다.

![missing](/manual/ko/programming_guide/4.teaching_icons_detail/10.png)

![missing](/manual/ko/programming_guide/4.teaching_icons_detail/11.png)

### 5. 대기(Wait) 기능

![missing](/manual/ko/programming_guide/icons/7.png)

지정된 조건이나 시간만큼 기다리는 기능입니다.<br>
5가지 모드가 존재합니다.

1. 지정된 시간만큼 기다리는 기능
2. 조건이 참일 동안 기다리는 기능
3. 조건이 참이면 기다림을 종료하는 기능
4. 입력조건이 참일 동안 기다리는 기능
5. 입력 조건이 참이면 기다림을 종료하는 기능

#### 5.1 지정된 시간만큼 기다리는 기능(Time Condition)

![missing](/manual/ko/programming_guide/4.teaching_icons_detail/12.png)

- 예) 지정된 시간(3초) 만큼 기다리고 다음 명령어 실행<br>
  Sync에서 속도 조절바 동기화 기능을 사용할 경우, 속도 조절바 값에 반비례하게 대기 시간이 조절됩니다.

#### 5.2 지정된 조건이 참일 동안 기다리는 기능(Holding Condition)

![missing](/manual/ko/programming_guide/4.teaching_icons_detail/13.png)

- 예) 조건(Condition)에 입력한 조건문이 참이면 계속 기다림.<br>
  Time Out 기능은 조건문이 거짓이 될 수 없는 상황에서 거짓이 될 때까지 계속 기다리는 것을 방지하기 위한 기능입니다.<br>
  작성한 시간이 지나면 대기를 탈출합니다.

#### 5.3 지정된 조건이 참이면 기다림을 종료하는 기능(Exit Condition)

![missing](/manual/ko/programming_guide/4.teaching_icons_detail/14.png)

- 예) Condition에 입력한 조건문이 참일 때 기다림을 멈추고 다음 명령어 수행.<br>
  Time Out 기능은 조건문이 참이 될 수 없는 상황에서 참이 될 때까지 계속 기다리는 것을 방지하기 위한 기능입니다.<br>
  작성한 시간이 지나면 대기를 탈출합니다.

#### 5.4 입력조건이 참일 동안 기다리는 기능(Holding Condition(for Digital Input))

![missing](/manual/ko/programming_guide/4.teaching_icons_detail/15.png)

- 예) 디지털 입력 창의 디지털 입력 조건들이 참이면 계속 기다림<br>
  Time Out 기능은 입력조건이 거짓이 될 수 없는 상황에서 거짓이 될 때까지 계속 기다리는 것을 방지하기 위한 기능입니다.<br>
  작성한 시간이 지나면 대기를 탈출합니다.

  논리 연산자 기능에서 And 조건과 Or 조건을 사용할 수 있습니다.<br>
  (위의 그림 상황에서는 And 조건이므로, 디지털 입력 0번이 High 상태 이면서 디지털 입력 1번이 Low 상태 일 때만 기다립니다.)

#### 5.5 입력조건이 참이면 기다림을 종료하는 기능(Exit Condition(for Digital Input))

![missing](/manual/ko/programming_guide/4.teaching_icons_detail/16.png)

- 예) 디지털 입력 창의 디지털 입력 조건들이 참일 때 기다림을 멈추고 다음 명령어 수행.<br>
  Time Out 기능은 조건문이 참이 될 수 없는 상황에서 참이 될 때까지 계속 기다리는 것을 방지 하기 위한 기능입니다.<br>
  작성한 시간이 지나면 대기를 탈출합니다.

  논리 연산자 기능에서 And 조건과 Or 조건을 사용할 수 있습니다.<br>
  (위의 그림 상황에서는 And 조건이므로, 디지털 입력 0번이 High 상태 이면서 디지털 입력 1번이 Low 상태 일 때 기다림을 멈추고 다음 명령어를 수행합니다.)

### 6. 폴더(Folder) 기능

![missing](/manual/ko/programming_guide/icons/8.png)

작성된 프로그램 명령들을 폴더의 하위항목으로 묶어서 모듈로 관리할 수 있도록 도와주는 폴더 기능입니다.<br>
폴더 기능 마다 이름을 다르게 부여하여 관리를 도와주는 도구입니다.<br>
프로그램 Tree에 Folder 기능을 추가하고, 하위 항목에 다양한 기능을 아래와 같이 넣을 수 있습니다.

![missing](/manual/ko/programming_guide/4.teaching_icons_detail/17.png)

여기서 Folder의 이름을 변경하고 싶다면 Folder 아이콘을 클릭하여 이름을 변경합니다.

![missing](/manual/ko/programming_guide/4.teaching_icons_detail/18.png)

이름 변경 후, Tree 상에서 변경된 이름의 폴더를 볼 수 있습니다.

![missing](/manual/ko/programming_guide/4.teaching_icons_detail/19.png)

Finish at 기능을 사용할 수 있습니다. Finish at 기능은 필수 입력 항목이 아니며, Finish at 기능을 사용하지 않는다면 Text 기능과 같이 프로그램의 기능에는 영향을 미치지 않습니다.<br>
티칭 시 기능의 모듈 별 관리, 묶음 관리 등을 도와주는 기능입니다.

### 7. 메모(Text) 기능

![missing](/manual/ko/programming_guide/icons/9.png)

프로그램 리스트 트리에 주석과 같이 필요한 부분에 간단한 메모를 할 수 있습니다.<br>
메모(Text) 기능은 프로그램 Tree 안에서 초록색으로 표기되며, 프로그램의 기능에 어떠한 영향을 주지 않습니다.<br>
프로그램 Tree에 메모(Text) 아이콘을 클릭하여 메모(Text) 기능을 삽입하면 아래와 같이 추가됩니다.

![missing](/manual/ko/programming_guide/4.teaching_icons_detail/20.png)

![missing](/manual/ko/programming_guide/4.teaching_icons_detail/21.png)

### 8. 알람(Alarm/Halt) 기능

![missing](/manual/ko/programming_guide/icons/10.png)

#### 8.1 Alarm

알람 (Alarm) 팝업 메시지를 띄울 수 있는 기능입니다. 특정 조건이나 구간에 알람 메시지를 넣어서 사용자의 확인을 요청할 수 있습니다.<br>
알람 기능을 프로그램에 삽입 후, 클릭해보면 아래와 같은 설정 창이 나타납니다.

![missing](/manual/ko/programming_guide/4.teaching_icons_detail/22.png)

알람 창의 제목과 내용을 사용자가 직접 입력할 수 있습니다.<br>
위와 같이 설정 후, 프로그램을 실행하여 보면, Alarm 명령어가 실행되는 순간 아래와 같은 팝업이 나타납니다.

![missing](/manual/ko/programming_guide/4.teaching_icons_detail/23.png)

- 계속(Resume): 다음 명령어를 계속 수행합니다.
- 정지(Halt): 이 시점에서 프로그램을 종료합니다.

Alarm 기능이 수행되는 동안 프로그램 흐름은 일시 정지됩니다.<br>
팝업 창에서 계속(Resume) 버튼을 누르면 다음 명령어를 수행하고, 정지(Halt) 버튼을 누르면 이 시점에서 프로그램 구동이 정지됩니다.

Alarm 기능 사용시 메인 프로그램이 일시정지 되고, 동시에 쓰레드에서 사용중인 흐름도 동시에 일시정지 됩니다.

#### 8.2 Halt

프로그램을 종료하는 종료(Halt) 기능입니다.<br>
특정 조건이 발생했을 때 프로그램을 종료해야 한다면 이 기능을 사용하면 됩니다.<br>
종료(Halt)는 종료(Halt), 서브 프로그램 종료(Sub.P Halt), 폴더 종료(Folder Halt)로 나뉘게 됩니다.

종료(Halt)는 메인 프로그램, 서브 프로그램 어디에서 실행되든 메인 프로그램을 종료하는 기능입니다.<br>
서브 프로그램 종료(Sub.P Halt)는 서브 프로그램 내에서 사용해야 하며, 실행되는 순간 서브 프로그램을 종료하고 메인 프로그램으로 돌아가게 됩니다.<br>
폴더 종료(Folder Halt)는 폴더 내에서 사용해야 하며, 실행되는 순간 폴더 기능을 종료하고 폴더 기능 하위의 명령어를 실행하게 됩니다.<br>

아래의 다이어그램을 참고 바랍니다.

![missing](/manual/ko/programming_guide/4.teaching_icons_detail/24.png)

아래의 예시에서는 If 조건문을 검사하여 해당 조건문이 참일 경우 Halt 기능을 호출하도록 프로그램을 구성하였습니다.<br>
해당 조건 문이 참일 경우, 프로그램은 해당 위치에서 종료되고, 다음 명령어들을 수행하지 않습니다.

![missing](/manual/ko/programming_guide/4.teaching_icons_detail/25.png)

<div class="warning custom-block">
    <p class="custom-block-title">주의</p>
    <ul>
      <li>
        정지(Halt) 기능이 수행되면, 메인 프로그램 뿐만 아니라 쓰레드(Thread) 기능도 함께 종료됩니다.
      </li>
    </ul>
</div>

### 9. 디버그(Debug) 기능

![missing](/manual/ko/programming_guide/icons/11.png)

내부 값 디버깅을 위한 디버그 기능입니다. 원하는 변수 값이나 내부 파라미터를 요청하면 팝업 형식으로 해당 값을 확인할 수 있습니다.<br>
디버그 기능은 내부의 변수를 관찰하기 위한 기능입니다. 주로 프로그램 티칭/개발시에 프로그램에서 사용중인 변수 값을 확인하는 용도로 사용됩니다.

![missing](/manual/ko/programming_guide/4.teaching_icons_detail/26.png)

디버그 기능을 프로그램 Tree에 추가한 후, 디버그를 클릭하여 보면 위와 같은 팝업 창이 뜹니다.<br>
변수 이름(Name) 항목에 원하는 변수명을 넣으면 됩니다. 만약 여러 변수를 동시에 관찰하고 싶을 경우(추가, Add) 버튼을 눌러서 항목을 추가합니다.

예시를 통해 디버그 기능을 알아보겠습니다.<br>
아래와 같이 변수 기능을 통해 하나의 variable 타입 변수(my_var = 3.14)와 하나의 array 타입 변수(my_arr = {100,200,300})를 선언합니다.

![missing](/manual/ko/programming_guide/4.teaching_icons_detail/27.png)

그 아래에 디버그 기능을 추가합니다.<br>
디버그 속성창에서 아래와 같이 앞서 선언된 두 변수를 관찰한다고 설정합니다.

![missing](/manual/ko/programming_guide/4.teaching_icons_detail/28.png)

설정을 완료 후 프로그램을 실행(실행 전 태블릿 PC와 컨트롤 박스는 연결되어야 합니다)하면,<br>
디버그 명령어가 실행되는 순간 아래와 같은 팝업창이 뜨면서 지정한 변수 값들을 관찰할 수 있습니다.

![missing](/manual/ko/programming_guide/4.teaching_icons_detail/29.png)

- 계속(Resume): 다음 명령어를 계속 수행합니다.
- 정지(Halt): 이 시점에서 프로그램을 종료합니다.

### 10. 유저 입력(User Input) 기능

![missing](/manual/ko/programming_guide/icons/12.png)

유저입력은 선언한 변수의 값을 프로그램 진행 도중 변경하는 용도로 사용합니다.<br>
아래 그림과 같이 유저입력 위에 변수선언을 하고, 유저입력이 실행되면 적용 값에 값을 입력합니다.<br>
이 때 건너뛰기를 선택하면 값을 입력하지 않고 진행하게 되고, 반영 후 계속을 선택하면 적용 값에 입력한 값을 해당 변수에 반영하고 진행하게 됩니다.

![missing](/manual/ko/programming_guide/4.teaching_icons_detail/30.png)

### 11. 부가축(Ext.Axis) 기능

![missing](/manual/ko/programming_guide/icons/13.png)

![missing](/manual/ko/programming_guide/4.teaching_icons_detail/31.png)

최대 6개까지 부가축을 제어할 수 있으며 Set-up의 Device에서 설정한 내용을 기반으로 부가축을 움직일 수 있습니다.<br>
각 축에 대한 목표 값을 설정할 수 있으며 속도 및 가속도는 0 ~ 1 의 값을 집어 넣습니다.

- ‘옵션 : 다축 동작’의 경우, 동작하고자 하는 축이 여러 개 있을 경우 동시에 작업을 종료할지 각각 개별적으로 종료할지를 결정합니다.
- ‘옵션 : 명령어 종료 조건’의 경우, 해당 명령어가 실행된 후 동작이 종료 될 때까지 대기할지 계속 진행할지 등에 대한 선택이 가능합니다.

### 12. 조건문(If) 기능

![missing](/manual/ko/programming_guide/icons/14.png)

조건문입니다. 조건에 따라 로봇이 다른 명령을 수행할 수 있도록 분기를 설정할 수 있습니다. If/else if /else 문을 사용할 수 있습니다.<br>
조건문 기능을 프로그램 트리에 추가 후, 추가된 조건문 기능을 클릭해보면 아래와 같은 팝업 창이 뜹니다. 여기서 조건문에서 사용할 조건문을 직접 입력합니다.

![missing](/manual/ko/programming_guide/4.teaching_icons_detail/32.png)

Else if 또는 Else 기능이 필요한 경우 추가 버튼을 눌러서 조건문의 분기를 만들 수 있습니다.

### 13. 스위치(Switch) 기능

![missing](/manual/ko/programming_guide/icons/15.png)

스위치문입니다. 조건에 따라 로봇이 다른 명령을 수행할 수 있도록 분기를 설정할 수 있습니다. Switch/case 문을 이용할 수 있습니다.<br>
스위치문 기능을 프로그램 Tree에 추가 후, 추가된 Switch 기능을 클릭해보면 아래와 같은 팝업 창이 뜹니다. 여기서 Switch 문이 동작할 기준 인자를 입력합니다.

![missing](/manual/ko/programming_guide/4.teaching_icons_detail/33.png)

최초로 스위치문 생성시 default는 자동으로 생성됩니다. Case 문이 추가로 필요한 경우(Case 추가) 버튼을 이용하여 Case 문을 추가할 수 있습니다.<br>
추가된 Case 문을 클릭해 보면 아래와 같은 창이 뜨게 되고, Switch 문에 넣은 기준 인자를 판별하여 들어갈 Case 문 인자를 이 창에 입력하면 됩니다.

![missing](/manual/ko/programming_guide/4.teaching_icons_detail/34.png)

### 14. 구동 전/후(Pre/Post Program) 기능

![missing](/manual/ko/programming_guide/icons/16.png)

하위의 내용을 최초 한 번만 실행하는 시작 전 기능과 프로그램 종료 후 마무리 작업으로 수행할 기능을 정의하는 종료 후 기능입니다.<br>
Play 모드와 같이, 프로그램이 계속 돌아가는 경우, 시작전의 하위에 선언된 내용은 최초 한 번만 실행됩니다.<br>
변수 선언이나 통신 연결과 같이, 단발성 명령어의 경우 시작 전 하위에서 관리하면 됩니다.

아래의 그림은 시작 전 기능을 사용하지 않은 경우의 일반적인 명령어 실행 흐름을 보여줍니다.

![missing](/manual/ko/programming_guide/4.teaching_icons_detail/35.png)

<figcaption style="text-align:center;">[ (좌) Make 화면 / (우) Play 화면 ]</figcaption>

좌측은 Make 화면에서 프로그램을 실행한 경우이고, 우측은 Play 화면에서 프로그램을 실행한 경우입니다.<br>
Make에서는 Begin과 End 사이의 프로그램을 1회 실행합니다. Play에서는 Begin과 End 사이의 프로그램을 반복합니다.

아래의 그림은 시작 전 기능을 사용한 경우의 프로그램 명령어 실행 흐름을 보여줍니다.

![missing](/manual/ko/programming_guide/4.teaching_icons_detail/36.png)

<figcaption style="text-align:center;">[ (좌) Make 화면 / (우) Play 화면 ]</figcaption>

Make 화면에서는 시작전의 유무와 상관없이 Begin과 End 사이의 명령어를 순차적으로 수행합니다.<br>
Play 화면에서는 Begin과 End 사이의 프로그램을 반복하지만, 시작 전(Pre Program) 하위에 선언된 명령어는 1회성으로 한 번만 수행합니다.

최초로 한 번만 수행하면 되는 동작이나, 변수 선언, 통신 연결과 같은 기능 및 흐름은 시작 전 기능을 활용하여 구성하면 됩니다.

아래의 그림은 실제 프로젝트에 시작 전 기능이 삽입된 모습입니다.<br>
시작 전 기능은 기능의 특성상 시작(Begin) 아래에만 삽입되며, 시작 전을 통째로 복사해서 다른 곳에 붙여넣기 할 수 없습니다.

![missing](/manual/ko/programming_guide/4.teaching_icons_detail/37.png)

<div class="warning custom-block">
  <p class="custom-block-title">주의</p>
  <ul>
    <li>
      메인 프로그램에서 Sub.P 기능을 통해 호출된 프로젝트에 시작 전 기능이 사용되는 경우, 시작 전 기능은 메인 프로그램에서만 적용됩니다.
    </li>
    <li>
      종료 후 기능은 프로그램 종료 후 실행되는 명령어를 넣는 기능입니다. 프로그램 종료 후 마무리 작업으로 수행할 기능을 정의합니다.<br>
      - 종료 후 하위에 선언된 명령어는 프로그램 종료 후 순차적으로 수행됩니다.<br>
      - 종료 후의 실행은 아래 다이어그램과 같이 진행됩니다.<br>
      <br>
      <img src="/manual/ko/programming_guide/4.teaching_icons_detail/38.png" />
    </li>
  </ul>
</div>

- 종료 후 수행(Post Program) 예시 1)<br>
  아래의 예시는 종료 후 수행을 사용한 예시입니다. 프로그램 시작과 동시에 (Begin 하단에) D.출력 기능을 통하여 1번 포트에 High 신호를 송출합니다.<br>
  프로그램 종료 전에 (End 이전에) D.출력 1번을 끄는 것을 넣지 않았지만, 프로그램이 종료되면 1번 포트는 자동으로 Low 신호를 송출하게 됩니다.<br>
  이는 종료 후 수행기능에 D.출력 1=L를 사용했기 때문입니다.

  ![missing](/manual/ko/programming_guide/4.teaching_icons_detail/39.png)

위의 예시와 같이, 종료 후 수행 기능은 안전 기능 등에 활용할 수 있습니다.

- 종료 후 수행(Post Program) 예시 2)<br>
  아래의 예시는 종료 후 수행을 사용한 예시입니다. 프로그램이 정상 종료되면 경광등 (D.출력 0번에 연결)을 켜지 않고, 비정상 종료되면 경광 등을 키는 예시입니다.

  ![missing](/manual/ko/programming_guide/4.teaching_icons_detail/40.png)

  본 예시에서 사용된 SD_IS_INTENDED_STOP은 시스템 내부 변수로써, 프로그램 시작 시 항상 0 (거짓, false)으로 초기화 됩니다.<br>
  사용자 의도에 의해 정상적으로 프로그램이 멈출 경우 이 변수는 1 (참, true)이 됩니다.<br>
  만약, 여러 이유에 의해서 프로그램이 비정상으로 멈출 경우 이 변수는 거짓으로 남아 있습니다.

  UI 종료 버튼 클릭에 의한 종료, I/O Stop 신호에 의한 종료, 기타 통신을 통한 종료 신호, 등 사용자 선택에 의한 종료 신호는 정상 종료로 판별합니다(SD_IS_INTENDED_STOP = 참).<br>
  만약 특이점 접근으로 인한 프로그램 종료, 명령어 문법 문제로 인한 종료 등, 사용자 의도가 아닌 종료는 비정상 종료로 판별합니다(SD_IS_INTENDED_STOP = 거짓).

  - 프로그램이 정상 종료되지 않은 경우(예: Alarm에서 정지(Halt)를 누른 경우)에도 종료 후 수행에 정의된 기능은 수행됩니다.
  - 동작J, 동작L 등 로봇 팔의 동작에 관한 명령어는 종료 후 수행의 하위에서 사용하지 못합니다.
  - 종료 후 수행 기능은 최상위 프로그램에서만 작동합니다. 서브루틴 기능을 통하여 호출된 하위 프로그램에서 종료 후 수행 기능을 사용할 경우 해당 부분은 실행되지 않습니다.

### 15. 설정(Set) 기능

![missing](/manual/ko/programming_guide/icons/17.png)

설정 기능은 Setup 메뉴에서 세팅하는 각종 설정 파라미터를 프로그램 내부에서 별도로 설정이 가능합니다. 또한 일부 설정 파라미터를 프로그램 실행 중에 변경할 수 있는 기능을 가지고 있습니다.

Setup 설정 화면에서 변경하는 각종 파라미터들은 해당 컨트롤 박스를 사용하는 모든 프로젝트에 기본 값으로 적용됩니다.<br>
만약 특정 프로젝트에 특정 파라미터를 별도로 사용해야 한다면, 설정 기능을 프로젝트 상단에 추가하여(예: Pre.P 하위) 프로젝트 별로 파라미터 설정을 관리할 수 있습니다.

설정 기능은 영구 세팅이 아닌 임시 세팅입니다. 같은 파라미터 설정에 대하여 새로운 설정 기능이 호출되면 새로운 설정 기능을 기준으로 파라미터가 반영됩니다.<br>
프로그램이 종료되면, Setup에서 설정한 기본 값으로 파라미터 세팅이 돌아옵니다.

설정 기능에서 제공되는 하위 기능은 아래와 같습니다.

- 타이머 리셋
- 충돌 감지 감도 조절
- TCP 하중 설정
- 동작 오프셋
- 인박스 기능 설정
- TCP 위치 임시 설정
- 툴 안전 영역 설정
- 작업 안전 영역 설정
- 인박스 영역 설정
- 충돌 감지 On/Off
- 속도 배율 일괄 조정
- 가속도 배율 일괄 조정
- 시리얼 통신 설정
- 동작 속도 직접 설정
- 나선 원형 동작 설정
- 속도 조절 바 제어
- 충돌 감지 후 로봇 정지 모드
- 사용자 좌표계 시프팅
- 충돌 감지 후 프로그램 흐름
- 제어박스 출력 임시 제어
- L계열 동작 XYZ 위치 값 고정
- L계열 동작 회전 값 고정
- 사용자 좌표계 임시 설정
- 목표 지점 위치 값 시프트
- 목표 지점 위치 값 시프트2
- 진동 센서 감지 On/Off
- 디지털 입력 신호 시뮬레이션
- 프로그램 흐름 제어
- 고속 가속도 모드
- 동작 시간 구속
- 고 민감도 충돌감지
- 오프셋 미세 조정
- 사용자 좌표계 시프팅 6D
- 사용자 좌표계 자동 정렬
- 타이머 설정
- 노아크 동작 속도
- 수동 사용자 좌표계 6D
- 자코비안 기반 속도 조절
- 외부 F/T 센서 신호
- Joint => Point
- Point => Joint
- TCP 선형 속도 제한
- 힘 제어 이동 변위 제한
- 동작 강제 종료
- 진동 모션
- 동작L 데드존 회피
- 축 정렬 자세 계산
- 위치 제어 신호 Smoothing
- 제어박스 input 비활성화
- 로봇 자가 진동
- PFL 모드
- 중력 보상 모드(전류 제어)
- 랜드마크 기반 피팅

<div class="warning custom-block">
  <p class="custom-block-title">주의</p>
  <ol>
    <li>
      설정(Set) 기능에서 설정된 값은 임시 값이므로, 프로그램이 종료되면 Setup에서 설정된 기본 값으로 자동으로 돌아옵니다.
    </li>
    <li>
      설정(Set) 기능에서 제공되는 기능들은 프로그램 흐름 중간에서 다른 값으로 변경 가능합니다.<br>
      예를 들어 Set의 ‘Collision On/Off’기능을 사용하면, 프로그램 흐름 중간에 충돌 감지를 끄고 싶을 경우 선택적으로 끌 수 있습니다.
    </li>
  </ol>
</div>

#### 15.1 타이머 리셋(Time)

![missing](/manual/ko/programming_guide/4.teaching_icons_detail/set/1.png)

타이머를 시작하며 초기 시작 값을 설정합니다. 또한 입력한 값부터 타이머의 값이 증가합니다.

#### 15.2 충돌 감지 감도 조절(Collision Threshold)

![missing](/manual/ko/programming_guide/4.teaching_icons_detail/set/2.png)

충돌 감지 감도를 임시 설정합니다. 낮을수록 민감한 감지 기능으로 설정합니다. Setup-Cobot에서 설정하는 것과 같은 물리적 의미를 갖습니다.

#### 15.3 TCP 하중 설정(Tool Payload)

![missing](/manual/ko/programming_guide/4.teaching_icons_detail/set/3.png)

툴의 무게와 무게 중심을 임시 설정합니다. Setup-Tool에서 설정하는 것과 같은 물리적 의미를 갖습니다.

#### 15.4 동작 오프셋(Linear Move Offset)

![missing](/manual/ko/programming_guide/4.teaching_icons_detail/set/4.png)

로봇 팔의 베이스 좌표계를 기준으로 TCP 위치에 약간의 오프셋을 줄 수 있습니다. 이 기능을 통해 최대 20 mm의 오프셋 임시 설정이 가능합니다.

#### 15.5 인박스 기능 설정(Inbox)

![missing](/manual/ko/programming_guide/4.teaching_icons_detail/set/5.png)

인박스 기능 설정은 Inbox 기능의 옵션을 선택합니다. Inbox 기능은 로봇의 특정 부위가 특정 영역 안에 들어와 있는지 아닌지를 자동으로 체크해주는 기능입니다(Worldzone Trap 기능). 체크할 수 있는 부위는 아래와 같습니다.

- Check Tool Flange Center : 로봇 팔 말단의 설정된 TCP가 특정 영역에 들어왔는지 확인.
- Check Tool Center Point : 로봇 팔 말단의 툴플랜지 중심이 특정 영역에 들어왔는지 확인.
- Check Tool Box : 로봇 팔 말단에 가상으로 설정한 Box 가 특정 영역에 들어왔는지 확인.
- Check All : 위의 3 경우 중 하나라도 특정 영역에 들어왔는지 확인.

특정 영역을 설정하는 Inbox의 크기와 위치는 Setup-Inbox에서 설정할 수 있습니다.<br>
Inbox는 총 2개를 설정할 수 있으며, 위의 설정을 바탕으로 특정 영역에 들어와 있는지 여부는 Shared Data 타입의 데이터에서 각각 SD_INBOX_TRAP_FLAG_0 또는 SD_INBOX_TRAP_FLAG_1을 통해 사용할 수 있습니다.

![missing](/manual/ko/programming_guide/4.teaching_icons_detail/set/6.png)

#### 15.6 TCP 위치 임시 설정(TCP Position)

![missing](/manual/ko/programming_guide/4.teaching_icons_detail/set/7.png)

TCP 좌표계를 임시로 설정합니다. Setup-Tool에서 설정하는 것과 같은 물리적 의미를 갖습니다.

#### 15.7 툴 안전 영역 설정(Tool Collision Box)

![missing](/manual/ko/programming_guide/4.teaching_icons_detail/set/8.png)

자가 충돌 방지 기능을 위한 툴 가상 박스의 크기와 위치를 임시로 설정합니다. Setup-Tool에서 설정하는 것과 같은 물리적 의미를 갖습니다.

#### 15.8 작업 안전 영역 설정(Global Workspace)

![missing](/manual/ko/programming_guide/4.teaching_icons_detail/set/9.png)

자가 충돌 방지 기능을 위한 Workspace 공간의 범주를 임시로 설정합니다. Setup-Cobot에서 설정하는 것과 같은 물리적 의미를 갖습니다.

#### 15.9 인박스 영역 설정(Inbox Size)

![missing](/manual/ko/programming_guide/4.teaching_icons_detail/set/10.png)

Inbox의 위치와 크기를 임시로 설정합니다. Setup-Inbox에서 설정하는 것과 같은 물리적 의미를 갖습니다.

#### 15.10 충돌 감지 On/Off(Collision On/Off)

![missing](/manual/ko/programming_guide/4.teaching_icons_detail/set/11.png)

외부 충돌 감지 모드의 사용 유무를 임시로 설정합니다. Setup-Cobot에서 설정하는 것과 같은 물리적 의미를 갖습니다.

#### 15.11 속도 배율 일괄 조정(Speed Override)

![missing](/manual/ko/programming_guide/4.teaching_icons_detail/set/12.png)

티칭 시 동작기능 하위의 포인트 기능에 설정된 속도 값을 한꺼번에 바꾸는 기능입니다.<br>
0~2.0 사이 값을 넣을 수 있으며, 변수에 값을 저장하여 입력할 수 있습니다. 예시는 아래와 같습니다.

![missing](/manual/ko/programming_guide/4.teaching_icons_detail/set/13.png)

위의 예시에서는 동작J 앞에서 Set-Speed-Override 1.5가 되어 있습니다.<br>
따라서 동작J 쪽 동작에서는 설정한 속도의 1.5 배의 속도가 설정된 것과 같은 효과로 동작합니다.<br>
동작J와 동작L사이에는 Set-Speed-Override 0.70이 사용 되었습니다. 따라서 동작L에서는 설정한 속도의 0.70 배의 속도가 설정된 것과 같은 효과로 동작합니다.

#### 15.12 가속도 배율 일괄 조정(Acceleration Override)

![missing](/manual/ko/programming_guide/4.teaching_icons_detail/set/15.png)

티칭 시 동작기능 하위의 포인트에 기능에 설정된 가속도 값을 한꺼번에 바꾸는 기능입니다.<br>
0~2.0 사이 값을 넣을 수 있으며, 변수에 저장된 값을 지정할 수 있습니다.

![missing](/manual/ko/programming_guide/4.teaching_icons_detail/set/15.png)

위 예시를 통해 Speed Override, Acceleration Override를 사용할 경우 속도와 가속도가 어떻게 변화하는지 확인할 수 있습니다.<br>
초기 속도와 가속도는 각각 45%, 30%로 설정되어 있고, 설정의 배율에 따라 변합니다.

#### 15.13 시리얼 통신 설정(Serial Configuration)

![missing](/manual/ko/programming_guide/4.teaching_icons_detail/set/16.png)

시리얼 통신의 통신 속도 (Baud Rate)와 규약(Stop bit / Parity)을 임시 설정합니다. Setup-Serial에서 설정하는 것과 같은 의미를 가집니다.

#### 15.14 동작 속도 직접 설정(Fixed Vel/Acc)

![missing](/manual/ko/programming_guide/4.teaching_icons_detail/set/17.png)

동작의 포인트 마다 비율로 설정된 속도/가속도를 무시하고, 고정된 값을 사용하고 싶을 때 사용하는 기능입니다. 동작J와 동작L, 2가지 하위 옵션이 존재합니다.

동작J에서 설정된 각속도 (deg/s)와 각가속도 (deg/s2)는 동작J 타입인 동작J와 동작JB의 동작 속도와 가속도에 영향을 미칩니다.<br>
동작L에서 설정된 선속도 (mm/s)와 선가속도 (mm/s2)는 동작L 타입인 동작L, 동작PB(구 동작LB), 동작JL, 동작ITPL 그리고 원 동작의 동작 선속도와 선가속도에 영향을 미칩니다.<br>
이 기능을 통해서 선속도/선가속도를 강제하고 싶지 않을 경우, 체크 박스를 해제하면 됩니다. 이 경우, 동작 시 포인트마다 설정된 선속도/선가속도 값을 따릅니다.<br>

예) 동작 시 특정 선속도와 선가속도를 지켜야 하는 경우, 이 설정(Set) 기능을 아래 코드와 같이 사용하면 됩니다.

![missing](/manual/ko/programming_guide/4.teaching_icons_detail/set/18.png)

#### 15.15 나선 원형 동작 설정(Spiral Circle Mode)

![missing](/manual/ko/programming_guide/4.teaching_icons_detail/set/19.png)

원형 동작을 나선형 (Spiral) 동작으로 바꾸기 위한 기능입니다. 원 동작 기능만 사용할 경우 원/호를 그립니다.<br>
원 동작 기능 위에 Set-Spiral mode가 적용되면, 기존의 원/호는 나선형 동작으로 변경됩니다. 따라서 나선형 동작을 구현하기 위해서는 이 기능을 원 동작 기능 위에 삽입해야 합니다.<br>
속성에서 Distance는 나선 원형 동작을 구현할 때 한 나선이 시작점을 기준하여 얼만큼 이동시킬 것인지를 설정하는 것이고, Rate는 원이나 호의 반지름에 비율을 적용하여 이동 시킵니다. 따라서 Rate를 사용할 시 1은 100%에 해당합니다.

예 1) Circle만 사용된 경우: 일반적인 원/호 궤적

![missing](/manual/ko/programming_guide/4.teaching_icons_detail/set/20.png)

<img src="/manual/ko/programming_guide/4.teaching_icons_detail/set/21.png" width=200 />

예 2) Set-Spiral Mode + Circle 기능: 나선형 궤적

![missing](/manual/ko/programming_guide/4.teaching_icons_detail/set/22.png)

<img src="/manual/ko/programming_guide/4.teaching_icons_detail/set/23.png" width=200 />
<br>

#### 15.16 속도 조절 바 제어(Speed Bar Control)

![missing](/manual/ko/programming_guide/4.teaching_icons_detail/set/24.png)

UI의 속도 조절 바 (화면 하단 우측)를 프로그램으로 조절할 수 있는 기능입니다. 원하는 구간에서 이 기능을 사용함으로써 UI 속도 조절 바를 바꿀 수 있습니다.

#### 15.17 충돌 감지 후 로봇 정지 모드(Collision Stop Mode)

![missing](/manual/ko/programming_guide/4.teaching_icons_detail/set/25.png)

외부 충돌 감지 시 로봇의 동작 유형을 선택합니다. 이는 세 가지 옵션이 존재합니다.

- 일반 정지(General Stop) : 충돌 감지 후, 그 자리에서 궤적 움직임을 일시 정지합니다.
- 회피 정지(Evasion Stop) : 충돌 감지 후, 외부 힘을 피하는 방향으로 로봇이 조금 이동 후 궤적 움직임을 일시 정지합니다.
  회피정지의 정도는 각각 Normal, Smallest, Small, Big, Biggest로 나뉩니다.
- 직접 교시 정지(Free Drive Stop) : 충돌 감지 후 로봇 팔이 일정 시간 동안 직접 교시 상태로 전환합니다. 직접 교시 정지의 시간은 각각 0.8초, 1.6초로 나뉩니다.
  이는 Setup-Cobot의 ‘충돌 감지 보호모드’(Action after Collision)와 같은 물리적 의미를 가집니다.

#### 15.18 사용자 좌표계 시프트(User Coordinate Shift)

![missing](/manual/ko/programming_guide/4.teaching_icons_detail/set/26.png)

사용자 좌표계의 원점을 임시로 이동 (Shift)할 수 있는 기능입니다.<br>
Shift 시키고자 하는 사용자 좌표계 번호와 Shift 거리를 설정하고, Shift 거리를 어떤 좌표계를 기준으로 움직일 지를 선택할 수 있습니다.

#### 15.19 충돌 감지 후 프로그램 흐름(After Collision Detect)

![missing](/manual/ko/programming_guide/4.teaching_icons_detail/set/27.png)

외부 충돌 감지 후 프로그램 흐름을 선택할 수 있습니다. 당사의 기본 설정은 외부 충돌 감지 후, 프로그램이 일시정지 하는 형태입니다.<br>
충돌 감지 후 충돌 감지 알림 창이 뜨며 프로그램 및 쓰레드가 일시 정지되는 것이 기본 형태입니다. 만약 충돌 감지 후 프로그램을 종료하고 싶다면, 이 기능을 사용하여 옵션을 Program Stop State로 선택하면 됩니다.

- Program Pause State : 외부 충돌 감지 후 프로그램 흐름이 일시정지 됩니다.
- Program Stop State : 외부 충돌 감지 후 프로그램 흐름이 정지됩니다.

#### 15.20 제어박스 출력 임시 제어(Disable Box D.out)

![missing](/manual/ko/programming_guide/4.teaching_icons_detail/set/28.png)

임시로 제어 박스의 디지털 출력을 비활성화 하는 기능입니다. 프로그램에 삽입한 디지털 출력 명령어를 지우지 않아도 이 Set 명령어를 사용하면, 특정 구간의 디지털 출력 명령을 무시할 수 있습니다.<br>
개발 테스트 등의 목적으로 사용 가능하며 옵션 선택을 통하여, 프로그램 구간에 따라 출력을 비활성/활성 시킬 수 있습니다.

#### 15.21 L계열 동작 XYZ 위치 값 고정(XYZ Projection)

![missing](/manual/ko/programming_guide/4.teaching_icons_detail/set/29.png)

동작L 계열 동작 (예 : 동작L, 동작PB, 원 동작 등)의 목표 위치 좌표 값을 고정하는 기능입니다. 고정시킬 값과 기준 좌표계를 선택하면, 해당 설정으로 모든 동작L 계열의 설정값이 고정됩니다.

예를 들어, 좌표계를 베이스 좌표계 (Global)을 선택하고, Z축으로 100mm를 선택/기입할 경우, 모든 이동 목표값/설정 좌표 값들의 Z 높이는 100mm로 일괄 적용됩니다.<br>
이 기능 또한 설정(Set)의 기능으로써 프로그램 각 구간 마다 활성화/비활성화 가능합니다. 비활성화 하고 싶을 경우 좌표계에서 None을 선택하면 됩니다.

#### 15.22 L계열 동작 회전 값 고정(Orientation Align)

![missing](/manual/ko/programming_guide/4.teaching_icons_detail/set/30.png)

동작L 계열 동작 (예 : 동작L, 동작PB, 원 동작 등)의 목표 회전 좌표 값(RX, RY, RZ)을 고정시키는 기능입니다. 선택한 포인트의 회전 값으로 동작L 계열 회전을 고정시킵니다.<br>
설정(Set)기능의 하위 기능으로써 프로그램 구간에 따라 이 기능을 켜거나 끌 수 있으며, TCP의 회전을 일정하게 한 번에 통일시키고 싶을 때 사용할 수 있는 기능입니다.

#### 15.23 사용자 좌표계 임시 설정(User Coordinate Config)

![missing](/manual/ko/programming_guide/4.teaching_icons_detail/set/31.png)

사용자 좌표계 설정을 임시로 바꿀 수 있는 기능입니다. 프로그램 흐름 중간에 3점을 선택함으로써 사용자 좌표계 설정을 프로그램 중간에 임의로 변경 가능합니다.<br>
설정(Set)의 하위 기능이기 때문에, 프로그램이 끝나면, 사용자 좌표계 설정은 기본 값으로 돌아옵니다.

#### 15.24 목표 지점 위치 값 시프트(XYZ Shift)

![missing](/manual/ko/programming_guide/4.teaching_icons_detail/set/32.png)

목표 지점을 임시로 바꿀 수 있는 기능입니다. 각각 베이스/툴/사용자 좌표계를 선택할 수 있고 목표 지점으로부터 시프트 값을 입력합니다.<br>
이때 값의 변경을 동작L 계열에만 적용할지, 동작L 계열과 동작J 계열 동작 모두 적용할지 선택합니다. 설정(Set)의 하위 기능이기 때문에, 프로그램이 끝나면 기본 값으로 돌아옵니다.

#### 15.25 목표 지점 위치 값 시프트(XYZ Shift2)

![missing](/manual/ko/programming_guide/4.teaching_icons_detail/set/33.png)

목표 지점을 임시로 바꿀 수 있는 기능입니다. 각각 베이스/툴/사용자 좌표계를 선택할 수 있고 목표 지점으로부터 시프트 값을 입력합니다.<br>
이때, 이 시프트는 동작L 계열에만 적용되며 XYZ 위치 값과 회전 값 모두 시프트 값을 입력할 수 있습니다. 설정(Set)의 하위 기능이기 때문에, 프로그램이 끝나면 기본 값으로 돌아옵니다.

#### 15.26 진동 센서 감지 On/Off(Vibration sensor)

![missing](/manual/ko/programming_guide/4.teaching_icons_detail/set/34.png)

충돌 감지 시 진동에 의한 충돌 감지는 제외하도록 하는 기능입니다. 설정(Set)의 하위 기능이기 때문에, 프로그램이 끝나면 기본 값으로 돌아옵니다.

#### 15.27 디지털 입력 신호 시뮬레이션(Digital Input Simulation)

![missing](/manual/ko/programming_guide/4.teaching_icons_detail/set/35.png)

시뮬레이션을 통해 가상의 신호를 입력하는 기능입니다. 입력 받고자 하는 포트의 상태를 설정하여 원하는 입력을 구성합니다.<br>
설정(Set)의 하위 기능이기 때문에, 프로그램이 끝나면 기본 값으로 돌아옵니다.

#### 15.28 프로그램 흐름 제어(Program Flow Control)

![missing](/manual/ko/programming_guide/4.teaching_icons_detail/set/36.png)

프로그램이 실행되고 있을 경우 알람 및 I/O 특수기능을 사용하지 않고 일시 정지 및 재시작 할 수 있도록 하는 기능입니다.<br>
설정(Set)의 하위 기능이기 때문에, 프로그램이 끝나면 기본 값으로 돌아옵니다.

#### 15.29 고속 가속도 모드(High Acceleration Mode)

![missing](/manual/ko/programming_guide/4.teaching_icons_detail/set/37.png)

고속 가속도 모드는 감/가속 프로파일의 변화를 통해 로봇의 동작 속도가 원하는 동작 속도에 도달하는 시간을 줄여주는 기능입니다.<br>
설정(Set)의 하위 기능이기 때문에, 프로그램이 끝나면 기본 값으로 돌아옵니다.

#### 15.30 동작 시간 구속(Motion Time Constraints)

![missing](/manual/ko/programming_guide/4.teaching_icons_detail/set/38.png)

동작 시간 구속은 동작기능 하위의 포인트에서 포인트로 이동 시에 걸리는 시간을 입력한 시간으로 구속하는 기능입니다.<br>
이때 시간을 늘리는 것은 가능하지만 줄이는 것은 불가능 합니다. 시간은 0 이상의 값을 입력해야 합니다.<br>
설정(Set)의 하위 기능이기 때문에, 프로그램이 끝나면 기본 값으로 돌아옵니다.

#### 15.31 고 민감도 충돌 감지(High Sensitivity Coll. Detect)

![missing](/manual/ko/programming_guide/4.teaching_icons_detail/set/39.png)

고민감도 충돌 감지는 기존의 민감도에 30%p를 추가하여 더 민감하게 충돌의 감지가 가능하도록 한 기능입니다.<br>
Setup에서 충돌감지를 가장 민감하게 한 둔감도 0%보다도 추가로 30% 민감해지게 됩니다.<br>
설정(Set)의 하위 기능이기 때문에, 프로그램이 끝나면 기본 값으로 돌아옵니다.

#### 15.32 오프셋 미세 조정(Micro offset value)

![missing](/manual/ko/programming_guide/4.teaching_icons_detail/set/40.png)

원하는 좌표계를 기준으로 약간의 오프셋을 줄 수 있습니다. 이 기능을 통해 최대 20 mm의 오프셋 임시 설정이 가능합니다.<br>
설정(Set)의 하위 기능이기 때문에, 프로그램이 끝나면 기본 값으로 돌아옵니다.

#### 15.33 사용자 좌표계 시프트 6D(User Coordinate Shift 6D)

![missing](/manual/ko/programming_guide/4.teaching_icons_detail/set/41.png)

사용자 좌표계를 임시로 시프트 시킬 수 있습니다. 이 기능을 통해 사용자 좌표계의 위치, 회전을 임시로 변경할 수 있습니다.<br>
설정(Set)의 하위 기능이기 때문에, 프로그램이 끝나면 기본 값으로 돌아옵니다.

#### 15.34 사용자 좌표계 자동 정렬(User Coordinate Auto Alignment)

![missing](/manual/ko/programming_guide/4.teaching_icons_detail/set/42.png)

선택한 사용자 좌표계를 기존 좌표계에서 현재 로봇의 TCP 좌표계로 변경시킬 수 있습니다. 다시 기존에 세팅해 놓은 사용자 좌표계로의 전환도 가능합니다.<br>
설정(Set)의 하위 기능이기 때문에, 프로그램이 끝나면 기본 값으로 돌아옵니다.

#### 15.35 타이머 세팅(Timer Setting)

![missing](/manual/ko/programming_guide/4.teaching_icons_detail/set/43.png)

사용하고자 하는 타이머의 선택과 타이머의 초기 값을 세팅할 수 있습니다. 타이머는 세팅한 초기 값부터 시작합니다.<br>
설정(Set)의 하위 기능이기 때문에, 프로그램이 끝나면 기본 값으로 돌아옵니다.

#### 15.36 노아크 동작 속도(No-Arc Move speed)

![missing](/manual/ko/programming_guide/4.teaching_icons_detail/set/44.png)

용접을 진행하지 않는 노아크 상태일 때 로봇의 동작 속도를 설정합니다.<br>
설정(Set)의 하위 기능이기 때문에, 프로그램이 끝나면 기본 값으로 돌아옵니다.

#### 15.37 수동 사용자 좌표계 6D(Manual User Coordinate 6D)

![missing](/manual/ko/programming_guide/4.teaching_icons_detail/set/45.png)

프로그램 진행 중에 사용자 좌표계를 변경할 수 있습니다. 방식을 임시 변경으로 하면 해당 프로그램이 실행될 경우만 입력한 사용자 좌표계가 반영되고, 영구 변경으로 하게 되면 해당 값이 영구히 적용됩니다.<br>
아래 그림과 같이 기존의 0번 사용자 좌표계는 Setup-Coordinate에서 X와 Z값이 각각 400mm으로 설정되어 있습니다.<br>
설정(Set)의 하위 기능이기 때문에, 프로그램이 끝나면 기본 값으로 돌아옵니다.

![missing](/manual/ko/programming_guide/4.teaching_icons_detail/set/46.png)

이때 수동 사용자 좌표계 6D를 아래와 같이 설정하고, 프로그램을 실행합니다.

![missing](/manual/ko/programming_guide/4.teaching_icons_detail/set/47.png)

아래와 같이 변경됨을 확인할 수 있습니다.

![missing](/manual/ko/programming_guide/4.teaching_icons_detail/set/48.png)

#### 15.38 자코비안 기반 속도 조절(Jacobian based Speed Control)

![missing](/manual/ko/programming_guide/4.teaching_icons_detail/set/49.png)

기구학적으로 좋지 못한 자세 혹은 진입할 때 자동으로 진행 속도를 가변하는 알고리즘을 On/Off 합니다.

#### 15.39 외부 F/T 센서 신호(External F/T sensor signal)

![missing](/manual/ko/programming_guide/4.teaching_icons_detail/set/50.png)

외부 F/T 센서의 신호를 0(N)으로 재설정합니다.<br>
설정(Set)의 하위 기능이기 때문에, 프로그램이 끝나면 기본 값으로 돌아옵니다.

#### 15.40 Joint ⇒ Point

![missing](/manual/ko/programming_guide/4.teaching_icons_detail/set/51.png)

조인트 변수에 해당하는 좌표 값을 포인트 변수에 지정할 수 있습니다.<br>
기존에 선언한 조인트 변수나 핀조인트를 조인트 이름에 넣고, 사용할 포인트 변수나 핀포인트를 포인트 이름에 넣어 사용합니다.<br>
설정(Set)의 하위 기능이기 때문에, 프로그램이 끝나면 기본 값으로 돌아옵니다.

#### 15.41 Point ⇒ Joint

![missing](/manual/ko/programming_guide/4.teaching_icons_detail/set/52.png)

포인트 변수에 해당하는 관절 각도 값을 조인트 변수에 지정할 수 있습니다.<br>
기존에 선언한 포인트 변수나 핀포인트를 포인트 이름에 넣고, 사용할 조인트 변수나 핀조인트를 조인트 이름에 넣어 사용합니다.<br>
설정(Set)의 하위 기능이기 때문에, 프로그램이 끝나면 기본 값으로 돌아옵니다.

#### 15.42 TCP 선형 속도 제한(TCP Linear Speed Limit)

![missing](/manual/ko/programming_guide/4.teaching_icons_detail/set/53.png)

로봇의 TCP의 선형 속도를 제한할 수 있습니다.<br>
설정(Set)의 하위 기능이기 때문에, 프로그램이 끝나면 기본 값으로 돌아옵니다.

#### 15.43 힘 제어 이동 변위 제한(Force Control Displacement Limit)

![missing](/manual/ko/programming_guide/4.teaching_icons_detail/set/54.png)

힘 제어 사용시 힘 센서에서 힘을 측정하기 위해 일정 방향으로 이동하게 되는데, 이때 움직이는 변위를 제한할 수 있습니다.

#### 15.44 동작 강제 종료(Motion Break)

![missing](/manual/ko/programming_guide/4.teaching_icons_detail/set/55.png)

기본적으로 Finish At 기능과 같으나, 기존 Finish At에서 지원하지 않는 쓰레드에서 통신을 받아 조건을 구성하는 경우 등에 사용할 수 있습니다.

#### 15.45 진동 모션(Vibrating Motion)

![missing](/manual/ko/programming_guide/4.teaching_icons_detail/set/56.png)

축을 설정하고, 진폭과 주파수 위상을 설정하면, 해당 축 방향으로 설정한 값으로 진동하게 됩니다.

#### 15.46 동작L 데드존 회피(Move L Deadzone Avoidance)

![missing](/manual/ko/programming_guide/4.teaching_icons_detail/set/57.png)

로봇 팔 중심부로부터 직경 15cm로 설정된 데드존을 회피하는 기능입니다. 로봇 팔이 데드존으로 진입할 경우 데드존을 피해 이동합니다.

#### 15.47 축 정렬 자세 계산(Axis Aligned Posture Calculation)

![missing](/manual/ko/programming_guide/4.teaching_icons_detail/set/58.png)

지정한 포인트 변수에서 축을 설정하면, 해당 포인트에서 설정한 축방향으로 정렬이 됩니다.

#### 15.48 위치 제어 신호 Smoothing(Position control Signal Smoothing)

![missing](/manual/ko/programming_guide/4.teaching_icons_detail/set/59.png)

로봇 서보 모터로 출력되는 위치 지령 신호에 저주파 필터를 씌웁니다. 필터 값의 수치를 높이면, 원래의 궤적과 조금은 멀어질 수 있으나 부드러운 동작을 구현합니다.

#### 15.49 제어박스 Input 비활성화(Disable Control Box Designated Input)

![missing](/manual/ko/programming_guide/4.teaching_icons_detail/set/60.png)

Setup의 I/O-1 항목에서 제어박스 디지털 입력에 적용한 특수 기능을 활성화/비활성화 하는 기능입니다.<br>
설정(Set)의 하위 기능이기 때문에, 프로그램이 끝나면 기본 값으로 돌아옵니다.

#### 15.50 로봇 자가 진동(Robot Self Vibration)

![missing](/manual/ko/programming_guide/4.teaching_icons_detail/set/61.png)

로봇 자가 진동은 로봇이 설정한 시간, 주파수, 진동 크기로 진동하는 모션을 구현합니다.

#### 15.51 PFL 모드(PFL Mode)

![missing](/manual/ko/programming_guide/4.teaching_icons_detail/set/62.png)

PFL(Power and Force Limit) 모드는 로봇 팔이 동작하는 모션 데이터와 툴의 정보를 이용하여 위치 별 충돌 위험도를 시뮬레이션 하는 기능입니다.

#### 15.52 중력 보상 모드(전류 제어)(Gravity Compensation Mode(Current Control))

![missing](/manual/ko/programming_guide/4.teaching_icons_detail/set/63.png)

중력 보상 모드(전류 제어) 기능을 사용하면 직접 교시 모드로 전환되며, 설정한 힘만큼 직접 교시 중 중력을 보상하기 위한 방향으로 힘이 발생되며 구동됩니다.

#### 15.53 랜드마크 기반 피팅(Landmark Based Fitting)

![missing](/manual/ko/programming_guide/4.teaching_icons_detail/set/64.png)

사용자가 정의한 세 점(기준 랜드마크)의 정보를 바탕으로 로봇 팔 궤적의 오프셋을 자동으로 계산 및 반영하는 기능입니다.<br>
기준점에는 최초에 직접 교시로 지정한 티칭 정보를, 현재 랜드마크에는 비전과 같이 센서를 통해 취득한 위치 값의 정보를 입력합니다.

### 16. TCP 설정(TCP Set) 기능

![missing](/manual/ko/programming_guide/icons/18.png)

![missing](/manual/ko/programming_guide/4.teaching_icons_detail/41.png)

Setup의 Tool List에 미리 저장해 놓은 TCP 값으로 프로그램 실행 중 TCP 값을 변경하는 기능입니다.<br>
총 5개의 툴을 TCP로 설정할 수 있습니다. 다시 TCP 값을 바꾸거나 프로그램이 종료되기 전까지 변경되지 않습니다.

### 17. 수동조작(Manual.D) 기능

![missing](/manual/ko/programming_guide/icons/19.png)

![missing](/manual/ko/programming_guide/4.teaching_icons_detail/42.png)

프로그램 실행 도중 직접 교시 기능을 사용할 가능하게 하는 기능입니다.<br>
구간 직접 교시 켜기를 할 경우 수동 조작 명령 실행 시 프로그램은 일시 정지되며, 아래 그림과 같은 팝업 창이 화면에 나오게 됩니다.

![missing](/manual/ko/programming_guide/4.teaching_icons_detail/43.png)

팝업 창에서 4개의 기능을 선택할 수 있습니다.

1. 프로그램이 일시 정지된 상태에서 직접 교시 기능을 사용.
2. ①에서 직접 교시 기능을 사용했을 경우, 직접 교시 기능을 끄고 프로그램을 재개.
3. 수동 조작 기능을 무시하고 프로그램을 재개.
4. 프로그램을 종료.

### 18. 이동점+(M.Point) 기능

![missing](/manual/ko/programming_guide/icons/20.png)

![missing](/manual/ko/programming_guide/4.teaching_icons_detail/44.png)

이동점+ 기능은 로봇 팔과 부가축의 동기 제어를 위한 기능입니다. 동기 제어를 원한다면 부가축 목표점 우측의 체크 박스를 클릭하면 됩니다.<br>
만약 동기 제어가 아닌 일반 제어를 원한다면 체크 박스를 해제하고 좌측 상단의 동작을 이용하여 로봇 팔만 단독으로 동작시키는 것도 가능합니다.<br>
하단의 스크립트 란에 스크립트 명령어를 넣는 경우 해당 위치를 지날 때 작성된 스크립트 명령어를 실행합니다.

### 19. 반복(Repeat) 기능

![missing](/manual/ko/programming_guide/icons/21.png)

반복문 입니다. 지정된 조건이나 횟수만큼 하위의 프로그램을 반복합니다. 4가지 모드가 존재합니다.

1. 지정된 횟수만큼 반복 기능
2. 지정된 조건이 참일 동안 반복하지만, 조건이 참이 아니어도 최초 1회는 실행하는 Do While 기능
3. 지정된 조건이 참일 동안 반복하는 기능
4. 조건이 참이면 반복을 끝내는 기능

반복(Repeat) 기능을 프로그램에 추가하고, 반복(Repeat)을 클릭해보면 아래와 같이 4가지 옵션이 존재합니다. 원하는 기능을 선택하여 사용합니다.

#### 19.1 지정된 횟수만큼 반복하는 기능(반복 횟수, Time Condition)

![missing](/manual/ko/programming_guide/4.teaching_icons_detail/45.png)

예) 1번 반복합니다.

#### 19.2 지정된 조건이 참일 동안 반복하지만, 참이 아니어도 최초 1회는 반복하는 기능(Do While)

![missing](/manual/ko/programming_guide/4.teaching_icons_detail/46.png)

예) Condition에 입력한 조건문이 참일 동안 반복하지만, 참이 아니어도 최초 1회는 반복합니다.

#### 19.3 지정된 조건이 참일 동안 반복하는 기능(Holding Condition)

![missing](/manual/ko/programming_guide/4.teaching_icons_detail/47.png)

예) Condition에 입력한 조건문이 참이면 계속 반복합니다.

#### 19.4 지정된 조건이 참이면 반복을 끝내는 기능(Exit Condition)

![missing](/manual/ko/programming_guide/4.teaching_icons_detail/48.png)

예) Condition에 입력한 조건문이 참일 때 반복을 멈추고 다음 명령어를 수행합니다.

### 20. 반복중단(Break) 기능

![missing](/manual/ko/programming_guide/icons/22.png)

반복문을 강제로 종료(반복 중단) 또는 반복문의 상단으로 이동(계속)하는 기능입니다.<br>
반복문(repeat) 기능 하위에서 사용되며, break 기능은 반복문에 특정 조건이 선언되어 있더라도 사용되면 선행적으로 반복문을 탈출합니다.<br>
Continue 기능 또한 반복문 기능 하위에서 사용되며, 사용되면 하위 기능을 실행하지 않고 반복문의 상단으로 이동합니다.<br>
반복중단 외에도 프로그램 흐름이 반복문 최상단으로 이동하는 계속 기능, 프로그램 로직 점프Here로 점프할 수 있는 프로그램 로직 점프 To기능, 프로그램 점프 To의 목적지가 되는 프로그램 로직 점프 Here, 그리고 폴더로 점프할 수 있는 프로그램 로직 점프 기능이 있습니다.

반복문(Repeat) 기능의 하위에서만 작동합니다. 다른 구문에서는 프로그램에 영향을 주지 않습니다.

![missing](/manual/ko/programming_guide/4.teaching_icons_detail/49.png)

![missing](/manual/ko/programming_guide/4.teaching_icons_detail/50.png)

반복 중단(break)와 계속(continue)를 사용할 경우 위 그림과 같이 동작하게 됩니다.

- 반복 중단(break) 예시<br>
  아래의 예시에서는 무한대의 반복문이 있습니다. 그리고 하위에 If 조건에 따라 반복중단(Break) 기능이 실행되도록 프로그램을 구성하였습니다.<br>
  조건이 발생하지 않는다면 반복문은 계속해서 반복하게 됩니다. 하지만 조건이 발생하는 순간 반복문을 탈출하고 다음 명령어를 실행합니다.

  ![missing](/manual/ko/programming_guide/4.teaching_icons_detail/51.png)

- 계속(continue) 예시<br>
  아래의 예시에는 무한대의 반복문이 있습니다. 그리고 하위에 If 조건에 따라 계속(Continue) 기능이 실행되도록 프로그램을 구성하였습니다.<br>
  조건이 발생하지 않는다면 반복문은 전체 내용을 반복하게 됩니다. 하지만 조건이 발생하는 계속(Continue) 기능 하단의 내용은 실행하지 않고 계속(Continue) 기능 상단의 명령어를 실행합니다.

  ![missing](/manual/ko/programming_guide/4.teaching_icons_detail/52.png)

- 프로그램 로직 점프 To, Here 예시<br>
  아래의 예시에는 무한대의 반복문이 있습니다. 그리고 하위에 If 조건에 따라 프로그램 로직 점프 To 기능이 실행되도록 프로그램을 구성하였습니다.<br>
  조건이 발생하지 않는다면 반복문은 전체 내용을 반복하게 됩니다. 하지만 조건이 발생하는 프로그램 로직 점프 To 기능 하단의 내용은 실행하지 않고 프로그램 로직 점프 Here기능 하단의 명령어를 실행합니다.

  ![missing](/manual/ko/programming_guide/4.teaching_icons_detail/53.png)

- 프로그램 로직 점프 To Folder 예시<br>
  아래의 예시에는 무한대의 반복문이 있습니다. 그리고 하위에 If 조건에 따라 프로그램 로직 점프 To Folder 기능이 실행되도록 프로그램을 구성하였습니다.<br>
  조건이 발생하지 않는다면 반복문은 전체 내용을 반복하게 됩니다. 하지만 조건이 발생하는 프로그램 로직 점프 To Folder 기능 하단의 내용은 실행하지 않고 Folder기능 내에 있는 명령어를 실행합니다.

  ![missing](/manual/ko/programming_guide/4.teaching_icons_detail/54.png)

### 21. 쓰레드(Thread) 기능

![missing](/manual/ko/programming_guide/icons/23.png)

쓰레드 기능입니다. 쓰레드 기능의 하위 항목은 메인 프로그램과 병렬로 실행됩니다. 단, 로봇 동작에 관한 명령어는 쓰레드 하위에 넣지 못합니다.

![missing](/manual/ko/programming_guide/4.teaching_icons_detail/55.png)

위의 그림과 같이 쓰레드 기능은 메인 프로그램과 병렬로 구성됩니다.

- 쓰레드는 자동으로 반복되지 않습니다. 반복하는 기능을 구현하고자 한다면, 쓰레드 하위에 반복문(Repeat) 기능을 사용하여야 합니다.<br>
  만약 1초 마다 반복되는 쓰레드를 구현하고 싶을 경우, 쓰레드 하위에 반복문(무한대 옵션)을 넣고, 그 반복문 하위에 wait(1 sec)를 넣어서 구현합니다.
- 쓰레드 기능은 최대 3개까지 지원합니다.
- 쓰레드 기능은 최상위 프로그램에서만 작동됩니다. Sub.P 기능을 통해 호출된 하위 프로그램이 쓰레드를 사용할 경우, 정상적으로 작동하지 않습니다.

쓰레드의 종류는 다음 설명과 같습니다.

- 일반 쓰레드 : 사용자의 의도적인 일시 정지, 알람, 충돌 감지 등에 의해 같이 정지합니다.
- 비정지 쓰레드 : 충돌 감지 이외에는 정지하지 않습니다.
- 비정지 쓰레드2 : 프로그램이 종료되기 전까지 정지하지 않습니다.
- 이벤트 일반 쓰레드 : 메인 프로그램에서 이벤트 쓰레드 호출 기능에 의해 실행되는 일반 쓰레드입니다.
- 이벤트 비정지 쓰레드 : 메인 프로그램에서 이벤트 쓰레드 호출 기능에 의해 실행되는 비정지 쓰레드입니다.

![missing](/manual/ko/programming_guide/4.teaching_icons_detail/56.png)

위의 그림과 같이 이벤트 쓰레드는 메인 프로그램에서 이벤트 쓰레드 호출 기능을 사용하였을 경우 실행되기 시작합니다.

아래의 모습은 실제 프로젝트에 Thread(쓰레드) 기능을 삽입한 모습을 보여줍니다. 아래의 예시에는 2개의 쓰레드가 삽입되어 있습니다.

![missing](/manual/ko/programming_guide/4.teaching_icons_detail/57.png)

<div class="warning custom-block">
  <p class="custom-block-title">주의</p>
  <ol>
    <li>
      프로그램의 안정성을 위해 메인 프로젝트 이외에 Sub.P로 호출되는 프로그램에서는 쓰레드 사용을 권장하지 않습니다. 
    </li>
    <li>
      동작이나 Circle과 같이 로봇 동작에 관한 명령어는 쓰레드 하위에 넣지 못합니다.
    </li>
    <li>
      Pause(일시정지)나 Alarm 기능 사용시 메인 프로그램과 쓰레드, 모두가 일시정지 됩니다. 메인 프로그램이 종료되면 쓰레드도 함께 종료됩니다.
    </li>
  </ol>
</div>

### 22. G 코드(G Code) 기능

![missing](/manual/ko/programming_guide/icons/24.png)

![missing](/manual/ko/programming_guide/4.teaching_icons_detail/58.png)

로봇이 G code에 저장된 경로대로 움직이도록 하는 기능입니다. 지정된 경로의 폴더(\Tablet\Android\data\com.rainbow.cobot\files\work)에 G code 파일을 미리 저장해 놓아야 사용 가능한 기능입니다.<br>
File Name에 저장한 G code 파일의 이름을 입력합니다. 이때 로봇이 움직이는 평면은 사용자 지정 좌표계의 xy, yz, zx 평면을 시작 평면으로 지정할 수 있습니다.

### 23. 리플레이(Replay) 기능

![missing](/manual/ko/programming_guide/icons/25.png)

![missing](/manual/ko/programming_guide/4.teaching_icons_detail/59.png)

녹화된 티칭 모션을 재생하기 위한 기능입니다. 동작 녹화는 Make 페이지의 설정에서 수행합니다. 녹화된 모션의 이름과 동작 속도/속성을 선택하면, 녹화된 모션을 다시 재생합니다.

### 24. 아크센싱(ArcSensing) 기능

![missing](/manual/ko/programming_guide/icons/26.png)

![missing](/manual/ko/programming_guide/4.teaching_icons_detail/60.png)

아크 센싱은 용접을 하는 중 모재의 틀어짐 또는 티칭의 틀어짐으로 인해 생기는 문제를 용접기의 전류를 이용하여 용접의 품질을 유지시키기 위한 기능입니다.<br>
아크 센싱은 단방향 아크 센싱과 다방향 아크 센싱으로 나뉘며, 위빙과 같이 사용하기 위해선 다방향 아크 센싱을 사용해야 합니다.

![missing](/manual/ko/programming_guide/4.teaching_icons_detail/61.png)

단방향 아크 센싱의 경우 아날로그 입력에 들어오는 값의 특정 시간 동안의 평균 또는 목표 값을 설정할 수 있습니다.<br>
입력 값에 따라 어느 방향으로 얼마만큼 보정을 진행할 것인 것 파라미터를 통해 세팅할 수 있습니다.

![missing](/manual/ko/programming_guide/4.teaching_icons_detail/62.png)

다방향 아크 센싱의 경우 아날로그 입력에 들어오는 값의 특정 시간 동안의 평균으로 목표 값을 지정하게 되며 로봇의 진행 방향과 위빙 방향에 대해 각각 얼마만큼 목표 값을 따라가기 위해 보정할지 설정할 수 있습니다.<br>
고급 기능의 경우 아크 센싱의 반응성 및 임의로 편심을 주고 싶을 경우 해당 기능을 세팅해주면 됩니다.

### 25. 모션 매크로(M.Macro) 기능

![missing](/manual/ko/programming_guide/icons/27.png)

![missing](/manual/ko/programming_guide/4.teaching_icons_detail/63.png)

매크로 타입(Flat plane, Rounded Plane(R), Rounded Plane(H), Triangle Plane, 3D Round Plane, Expanding Spiral(M), Expanding Spiral(P), Shrinking Spiral)에 따른 동작을 자동으로 생성 해줍니다.<br>
이때, 각 매크로에 맞게 티칭을 진행해야 하며 사용자가 원하는 형상에 맞게 각각의 파라미터를 설정하게 되면 원하는 동작을 개별 포인트에 대한 티칭 없이 자동으로 생성할 수 있습니다.

### 26. D.출력 (D.Out) 기능

![missing](/manual/ko/programming_guide/icons/28.png)

컨트롤 박스의 디지털 출력(Digital output)을 제어하는 명령어입니다. 16개 (0~15번)의 포트 중 선택된 포트를 통해 선택된 신호가 출력되는 기능입니다. 각 포트에는 High 신호, Low 신호, Bypass 3가지를 설정할 수 있습니다.

프로그램에 D.출력 기능을 추가하고 클릭해보면 아래와 같은 팝업 창이 나타납니다.

![missing](/manual/ko/programming_guide/4.teaching_icons_detail/64.png)

① D.출력 기능에서 사용할 수 있는 세부 기능을 선택합니다.<br>
② 현재 컨트롤 박스에서 출력 중인 Digital Out의 상태를 보여줍니다.<br>
③ 원하는 설정은 선택하는 곳입니다. 3단 토클 버튼을 통해 Bypass, Low, High를 선택 가능합니다.<br>

- Bypass : 이전 출력 신호 상태를 유지합니다 (회색).
- Low : 출력 신호를 Low level로 설정합니다 (붉은색).
- High : 출력 신호를 High level로 설정합니다 (초록색).

④ 3번 항목에서 선택된 설정을 미리 보기로 출력해보는 기능입니다.<br>
⑤ 3번 항목에서 선택된 설정으로 D.출력 기능을 설정합니다.

#### 26.1 개별출력

![missing](/manual/ko/programming_guide/4.teaching_icons_detail/65.png)

컨트롤 박스와 태블릿 PC가 연결된 상태에서, 타겟 신호란을 위의 그림과 같이 설정 후 미리보기 버튼을 누르면 아래와 같이 컨트롤 박스에서 Digital 출력 신호가 출력됩니다.<br>
아래 그림 우측의 현재 신호란이 변경된 것을 볼 수 있습니다.

![missing](/manual/ko/programming_guide/4.teaching_icons_detail/66.png)

#### 26.2 비트 조합 출력

사용하고자 하는 시작 포트와 끝 포트를 선택한 후 원하는 값을 목표값에 입력하면 비트 조합으로 Digital 출력을 내보낼 수 있습니다.<br>
이때 시작 포트와 마지막 포트는 비트의 자릿수를 의미합니다. 예를 들어 시작 포트를 0번 포트로, 마지막 포트를 3번 포트로 설정하면, 이는 곧 4비트 신호와 같은 의미입니다.<br>
그리고 목표값에 10진수를 입력하면, 이에 해당하는 값이 2진수로 변환이 되어 값에 해당하는 포트가 켜지게 됩니다.

![missing](/manual/ko/programming_guide/4.teaching_icons_detail/67.png)

컨트롤 박스와 태블릿 PC가 연결된 상태에서 타겟 신호란을 아래의 그림과 같이 설정 후, 미리보기 버튼을 누르면 아래와 같이 컨트롤 박스에서 Digital 출력 신호가 출력됩니다.

![missing](/manual/ko/programming_guide/4.teaching_icons_detail/68.png)

위 그림과 같이 옵션의 순방향으로 할 경우 0번 포트가 LSB 7번 포트가 MSB가 되어 100을 2진수로 변환하면, 0110 0100이므로 2, 5, 6번 포트가 HIGH로 변환됩니다.<br>
이와 반대로 옵션의 방향을 역방향으로 하면, 0번 포트가 MSB, 7번 포트가 LSB가 되어 1, 2, 5번 포트가 HIGH로 변환됩니다.

#### 26.3 신호 토글 출력

High인 신호는 Low로 Low인 신호는 High로 출력 값을 바꾸어 신호를 출력합니다.

![missing](/manual/ko/programming_guide/4.teaching_icons_detail/69.png)

컨트롤 박스와 태블릿 PC가 연결된 상태에서 타겟 신호란을 위의 그림과 같이 설정 후(토글 출력 신호는 파란색으로 표시), 미리보기 버튼을 누르면 다음 그림과 같이 컨트롤 박스에서 Digital 출력 신호가 Toggle 되어 나갑니다.

![missing](/manual/ko/programming_guide/4.teaching_icons_detail/70.png)

#### 26.4 전체 신호 출력

전체 출력 포트의 신호를 한 번에 High/Low로 전환할 수 있습니다.

![missing](/manual/ko/programming_guide/4.teaching_icons_detail/71.png)

컨트롤 박스와 태블릿 PC가 연결된 상태에서 타겟 신호란을 위의 그림과 같이 설정 후, 미리보기 버튼을 누르면 아래와 같이 컨트롤 박스에서 Digital 출력 신호가 출력됩니다.

다음 그림과 같이 현재 신호가 바뀐 것을 확인할 수 있습니다.

![missing](/manual/ko/programming_guide/4.teaching_icons_detail/72.png)

#### 26.5 단위 펄스 출력

사용하고자 하는 포트를 선택하고 T1~T3에 0~3초 사이의 시간을 입력하면 입력한 시간에 맞게 단위 펄스 신호를 출력합니다.

![missing](/manual/ko/programming_guide/4.teaching_icons_detail/73.png)

컨트롤 박스와 태블릿 PC가 연결된 상태에서, 타겟 신호란을 위의 그림과 같이 설정 후, 미리보기 버튼을 누르면 아래와 같이 컨트롤 박스에서 Digital 출력 신호가 출력됩니다.

![missing](/manual/ko/programming_guide/4.teaching_icons_detail/74.png)

T1을 2초, T2는 3초 그리고 T3는 2초를 설정하고 미리보기를 하면, 각각 설정한 시간만큼 펄스가 생성됩니다.<br>
또한 펄스 모드를 일반 펄스로 하면 우측의 펄스 모양과 같이 순서대로 LOW-HIGH-LOW 신호의 주기를 설정하는 것이고, 반전 모드로 하면 HIGH-LOW-HIGH로 신호가 반전되어 주기가 설정됩니다.<br>
그리고 일반 펄스와 반전 펄스는 각각 별도의 Non-Block 모드를 갖고 있는데, 이는 실행 시 다음 문장을 병렬로 실행하는 기능입니다.<br>
즉 Non-Block 모드가 아닐 경우 설정한 주기만큼 단위 펄스 출력 문구에 머물게 되고, Non-Block 모드의 경우 단위 펄스가 출력되면서 다음 문장을 실행하는 모드입니다.

#### 26.6 펄스 폭 변조(PWM)

PWM (Pulse Width Modulation) 출력 기능입니다. PWM 펄스의 주파수와 듀티 비율을 입력하면 디지털 출력 포트를 통하여 PWM 신호를 송출하는 기능입니다.

PWM 예시 1)

![missing](/manual/ko/programming_guide/4.teaching_icons_detail/75.png)

![missing](/manual/ko/programming_guide/4.teaching_icons_detail/76.png)

PWM 예시 2)

![missing](/manual/ko/programming_guide/4.teaching_icons_detail/77.png)

![missing](/manual/ko/programming_guide/4.teaching_icons_detail/78.png)

#### 26.7 조건 기반 출력

D.출력 기능을 사용하는 것 이외에도 아래와 같이 Script 기능을 사용하여 Digital 출력을 내보내는 명령어를 만들 수 있습니다.

![missing](/manual/ko/programming_guide/4.teaching_icons_detail/79.png)

※ Script 함수: manual_digital_out(포트번호, 출력레벨)

![missing](/manual/ko/programming_guide/4.teaching_icons_detail/80.png)

<div class="warning custom-block">
  <p class="custom-block-title">주의</p>
  <ol>
    <li>
      만약 Setup-I/O에서 특정 Digital 출력 포트에 특수 기능을 할당해 두었다면, 해당 포트는  D.출력 기능을 통해 사용하지 못합니다.
    </li>
    <li>
      특수 기능으로 할당된 포트는 D.출력 창에서 노란색으로 표기됩니다.
    </li>
    <li>
      D.출력 창의 우측 상단에 Memo 기능을 활용하여, 해당 설정에 대한 메모를 남길 수 있습니다.
    </li>
    <li>
      Digital 출력을 사용하기 전에 제조사가 제공하는 디지털 출력 포트의 전기적 특성을 충분히 숙지하고 사용을 권장합니다.
    </li>
  </ol>
</div>

### 27. An.출력(An.Out) 기능

![missing](/manual/ko/programming_guide/icons/29.png)

컨트롤 박스의 아날로그 출력 (Analog output)을 제어하는 명령어 입니다. 4개 (0~3번)의 아날로그 포트 중 선택된 포트를 통해 선택된 전압을 출력하는 기능입니다.<br>
각 포트는 0~10 V의 전압 범주로 출력할 수 있습니다. 프로그램에 An.출력 기능을 추가하고 클릭해보면 아래와 같은 팝업 창이 나타납니다.

![missing](/manual/ko/programming_guide/4.teaching_icons_detail/81.png)

① An.출력에서 제공하는 기능을 설정할 수 있습니다.<br>
② 현재 컨트롤 박스에서 출력 중인 Analog Out의 상태를 보여줍니다.<br>
③ 기존의 전압 출력을 유지하는 설정입니다. 체크 박스에 체크를 하고, 원하는 전압을 0~10V 로 넣으면 전압 세팅이 됩니다.<br>
④ 3번 항목에서 선택된 설정을 미리 보기로 출력해보는 기능입니다.<br>
⑤ 3번 항목에서 선택된 설정으로 An.출력 기능을 설정합니다.

#### 27.1 개별 아날로그 출력

![missing](/manual/ko/programming_guide/4.teaching_icons_detail/82.png)

컨트롤 박스와 태블릿 PC가 연결된 상태에서, 목표 신호(Target Signal) 란을 위의 그림과 같이 설정 후, Preview(미리보기) 버튼을 누르면 아래와 같이 컨트롤 박스에서 Analog출력 신호가 출력됩니다. 아래 그림 좌측의 Current Signal 란이 변경된 것을 볼 수 있습니다.

#### 27.2 속도 기반 아날로그 출력

![missing](/manual/ko/programming_guide/4.teaching_icons_detail/83.png)

채널 번호에 해당하는 아날로그 출력 채널에 속도 기반 아날로그 출력을 설정합니다.<br>
On/Off에서 On을 설정하면 TCP의 속도가 Speed Low에 설정한 속도보다 작은 범위에서는 Voltage_1에 설정한 전압을 출력하고, TCP의 속도가 Speed Low에 설정한 속도보다 크고 Speed High에 설정한 속도보다 작은 구간에서는 TCP의 속도에 비례하여 Voltage_2에 설정한 전압까지 출력 전압이 증가합니다.<br>
TCP의 속도에 비례하여 증가하는 출력 전압은 Voltage_2에 설정한 전압으로 제한됩니다.

An.출력 기능을 사용하는 것 이외에도 아래와 같이 Script 기능을 사용하여 Analog 출력을 내보내는 명령어를 만들 수 있습니다.

※ Script 함수: manual_analog_out(포트번호, 출력전압)

![missing](/manual/ko/programming_guide/4.teaching_icons_detail/84.png)

<div class="warning custom-block">
  <p class="custom-block-title">주의</p>
  <ol>
    <li>
      An.출력 창의 우측 상단에 Memo 기능을 활용하여, 해당 설정에 대한 메모를 남길 수 있습니다.
    </li>
    <li>
      Analog 출력을 사용하기 전에 제조사가 제공하는 아날로그 출력 포트의 전기적 특성을 충분히 숙지하고 사용하시기 바랍니다.
    </li>
  </ol>
</div>

### 28. 툴 출력(Tool.Out) 기능

![missing](/manual/ko/programming_guide/icons/30.png)

툴 플랜지에는 2개의 디지털 출력이 있습니다. 2개의 디지털 출력의 신호를 지정할 수 있습니다.<br>
더불어, 툴 플랜지에서 출력할 전압의 레벨(0V 또는 12V 또는 24V)을 함께 조절 가능합니다.<br>
프로그램에 Tool 기능을 추가하고 클릭해보면 아래와 같은 팝업 창이 나타납니다.

![missing](/manual/ko/programming_guide/4.teaching_icons_detail/85.png)

① 현재 로봇 말단에서 출력 중인 툴플랜지의 상태를 나타냅니다.<br>
② 원하는 출력 전압 및 digital 출력 설정을 합니다. 출력 전압은 Bypass, 0V, 12V, 24V 중에서 선택합니다. 디지털 출력은 3단 토글 버튼으로 Bypass, Low, High 중 선택합니다. <br>
③ 2번 항목에서 선택된 설정을 미리 보기로 출력해보는 기능입니다.<br>
④ 2번 항목에서 선택된 설정으로 Tool 기능을 설정합니다.

![missing](/manual/ko/programming_guide/4.teaching_icons_detail/86.png)

컨트롤 박스와 태블릿 PC가 연결된 상태에서, 로봇 활성화 이후 목표 신호(Target Signal) 란을 위의 그림과 같이 설정 후 Preview(미리보기) 버튼을 누르면, 아래와 같이 툴플랜지 출력 신호가 출력됩니다. 아래 그림 좌측의 Current Signal 란이 변경된 것을 볼 수 있습니다.

![missing](/manual/ko/programming_guide/4.teaching_icons_detail/87.png)

<div class="warning custom-block">
  <p class="custom-block-title">주의</p>
  <ol>
    <li>
      툴 출력 창의 좌측 상단에 Memo 기능을 활용하여, 해당 설정에 대한 메모를 남길 수 있습니다.
    </li>
    <li>
      툴 플랜지 출력을 사용하기 전에 제조사가 제공하는 포트의 전기적 특성을 충분히 숙지하고 사용하시기 바랍니다.
    </li>
  </ol>
</div>

### 29. 그리퍼(Gripper) 기능

![missing](/manual/ko/programming_guide/icons/31.png)

협동 로봇 전용 그리퍼를 위한 전용 기능입니다. Robotiq사의 그리퍼 등 다양한 회사의 협동 로봇 그리퍼를 편리하게 테스트하고 사용 및 프로그램에 삽입 가능합니다.<br>
단순 I/O 방식이 아닌, RS485 등의 시리얼 통신을 사용하거나 CRC 사용 등, 사용자가 프로그래밍해서 쓰기에 번거로운 그리퍼 사용을 편리하게 도와주는 기능입니다.<br>

그리퍼 기능을 프로그램 Tree에 추가합니다. 추가된 그리퍼를 클릭해보면 아래와 같습니다.

![missing](/manual/ko/programming_guide/4.teaching_icons_detail/88.png)

① 선택한 제조사에서 제공되는 그리퍼 제품군을 선택합니다.<br>
② 그리퍼가 연결되는 부분을 선택합니다(Control Box, Tool Flange).<br>
③ 그리퍼로 사용할 기능을 선택합니다.

<div class="warning custom-block">
  <p class="custom-block-title">주의</p>
  <ul>
    <li>
      그리퍼 기능에서 제공되는 제품 목록은 사용자 피드백을 통해 업데이트 됩니다.
    </li>
  </ul>
</div>

### 30. I/O 확장(I/O Extend) 기능

![missing](/manual/ko/programming_guide/icons/32.png)

<div class="flex-center-align">
  <img src="/manual/ko/programming_guide/4.teaching_icons_detail/89.png" />
  <img src="/manual/ko/programming_guide/4.teaching_icons_detail/90.png" style="margin-left: 10px" />
</div>

확장 I/O 모듈을 구매하여 사용할 경우 디지털/아날로그 출력을 제어하는 기능입니다. 기존의 D.출력, An.출력과 사용 방법은 동일합니다.

### 31. 아크용접(ArcWeld) 기능

![missing](/manual/ko/programming_guide/icons/33.png)

![missing](/manual/ko/programming_guide/4.teaching_icons_detail/91.png)

아크 용접을 위한 특수 기능입니다. Wait / D.출력 등을 이용하여 구현 가능한 기능을 빠르게 사용 가능하도록 만들어진 특수 매크로 기능입니다.<br>
이 기능을 사용하기 위해서는 Setup 페이지의 Device란에서 용접기에 관한 파라미터 및 연결 정보 설정이 선행 되어야 합니다.<br>
위의 그림처럼, 이 기능을 사용하면 용접 시 사용할 용접 속도/용접 전류/전압 설정/안전 신호 처리 옵션 등을 빠르고 쉽게 프로그램에 삽입 가능합니다.

### 32. 용접기(D.Weld) 기능

![missing](/manual/ko/programming_guide/icons/34.png)

![missing](/manual/ko/programming_guide/4.teaching_icons_detail/92.png)

디지털 용접기를 사용할 수 있는 기능입니다. 사용하는 용접기를 선택한 후 용접 시작 조건, 용접 종료 조건, 용접 세팅 등을 진행할 수 있습니다.

### 33. 스크립트(Script) 기능

![missing](/manual/ko/programming_guide/icons/35.png)

사용자가 임의의 스크립트를 작성할 수 있는 스크립트(Script) 기능입니다.<br>
기능과 별도로 특정 연산/계산이 필요하거나, 변수 치환, 대입 등의 기능을 스크립트(Script) 기능을 사용하여 구현 가능합니다. 단일 입력 모드와 다중 입력 모드 2가지 모드가 있습니다.

스크립트(Script) 기능을 프로그램 Tree에 추가하고, 추가된 스크립트(Script) 기능을 클릭하면 아래와 같은 팝업창이 나타납니다.

![missing](/manual/ko/programming_guide/4.teaching_icons_detail/93.png)

이곳에 사용자가 원하는 스크립트를 자유롭게 입력 가능합니다. 변수 연산, 변수 치환, 변수 대입 등 다양한 기능을 키보드를 이용하여 자유롭게 입력 가능합니다.<br>
동시에 여러 줄의 Script 기능을 사용하기 원하는 경우 팝업 창 하단의(추가, Add) 버튼을 이용하여 사용할 수 있습니다.

모드 선택을 다중 입력으로 선택하게 되면, 아래와 같은 팝업창이 나타납니다.

![missing](/manual/ko/programming_guide/4.teaching_icons_detail/94.png)

별도의 추가 버튼 없이 다중의 스크립트를 사용할 수 있습니다.

아래의 예시는 1초마다 반복하는 반복문(Repeat)을 생성하고, 반복할 때 마다 Assign 기능을 통해 선언한 counter라는 변수를 Script 기능을 활용하여 1씩 증가시키는 프로그램 예시입니다.

![missing](/manual/ko/programming_guide/4.teaching_icons_detail/95.png)

아래의 예시는 동작J 기능을 통해 특정 자세로 이동하고, 해당 자세의 이름을 start_point라고 지정 하였습니다(포인트의 이름 정하기 기능 사용).<br>
그리고 반복문 (Repeat 기능)을 사용하여 동작L로 동작을 4번하는 기능입니다.

- 이때, 동작L은 Relative 포인트 기능을 활용하여, 앞서 선언된 start_point 대비 delta_z 만큼 z 방향으로 이동합니다. (포인트 기능의 Linear movement 계열의 relative 포인트 기능을 참고하세요)
- 이때, 반복문의 마지막에는 Script 기능을 활용하여 delta_z를 50씩 증가시키도록 하였습니다. (delta_z는 프로그램 상당에서 변수선언, Assign 기능을 통해 미리 선언해 두었습니다.)

결론적으로 로봇은 동작J로 처음 위치로 이동 후, 해당 위치를 start_point라고 저장한 이후, 반복문에서 4번 아래로 50mm씩 동작L로 움직입니다.

![missing](/manual/ko/programming_guide/4.teaching_icons_detail/96.png)

<div class="warning custom-block">
  <p class="custom-block-title">주의</p>
  <ol>
    <li>
      스크립트 기능은 사용자가 자유롭게 스크립트를 작성하여 실행하는 영역입니다.
    </li>
    <li>
      만약 문법에 맞지 않는 스크립트 작성시, 프로그램이 오작동하거나 멈출 수 있습니다. 본 기능을 사용할 때 알맞은 문법을 사용하였는지 주의하세요.
    </li>
  </ol>
</div>

### 34. 변수선언(Assign) 기능

![missing](/manual/ko/programming_guide/icons/36.png)

변수화 기능을 사용하기 위해, 초기 변수 선언을 위한 Assign 기능입니다. 변수 형태는 4타입으로 선언할 수 있습니다.<br>
단일 숫자를 저장하는 variable 타입, 배열 숫자를 저장하는 array 타입, 자세 정보(x, y, z, rx, ry, rz)를 저장하는 Point 타입, 관절 각도 정보를 저장하는 Joint 타입, 그리고 문자열을 저장하는 string 타입이 있습니다.

- Variable 타입: 단일 숫자 형태입니다.
- Array 타입: 배열을 저장합니다(배열의 최대 길이는 10개입니다).
- Point 타입: 자세 정보를 저장합니다(x, y, z, Rx, Ry, Rz를 저장합니다).
- Joint 타입: 관절 각도 정보를 저장합니다(J0, J1, J2, J3, J4, J5를 저장합니다).
- String 타입: 문자열을 저장합니다.

변수선언(Assign) 기능을 프로그램 Tree에 추가하면 아래와 같이 추가됩니다.

![missing](/manual/ko/programming_guide/4.teaching_icons_detail/97.png)

추가된 Assign을 클릭하면 아래와 같은 팝업이 뜹니다. 여기서 선언하고 싶은 변수를 선언할 수 있습니다.<br>
한 번에 여러 변수를 선언하고 싶을 경우(추가, Add) 버튼을 클릭하여 한 번에 여러 개 / 여러 타입의 변수를 선언할 수 있습니다.<br>
변수 선언이 끝나면 Tree 상에 어떤 형태의 변수를 몇 개씩 선언했는지 나타납니다.<br>
만약 선언을 하나만 하면, Tree 상에 아래와 같이 변수 이름과 초기값이 같이 뜹니다.

![missing](/manual/ko/programming_guide/4.teaching_icons_detail/98.png)

변수선언 (Assign) 기능의 팝업 창 구성은 아래와 같습니다.

![missing](/manual/ko/programming_guide/4.teaching_icons_detail/99.png)

① 변수의 형태를 선택합니다(Variable, Array, Point, Joint, String 중 택 1).<br>
② 변수의 이름을 정합니다.<br>
③ 선언 시 초기값을 설정하는 부분입니다.

- Variable 형태의 경우 단일 숫자로 초기값을 넣습니다(예: 1).
- Array 형태의 경우 배열 형태로, 중괄호를 사용하여 초기값을 넣습니다(예: {100, 200, 300}).
- Point, Joint 형태의 경우 중괄호를 사용하여 6개 길이의 배열 형태로 초기값을 넣습니다(예: {300, 300, 300, 0, 90, 0}).
- String 형태의 경우 따옴표를 사용하여 문자열을 초기값으로 넣습니다(예: “hello_rb5”).

④ Point, Joint 형태에만 있는 버튼입니다.<br>
현재 로봇의 6개 자세 값(Point : x,y,z,Rx,Ry,Rz / Joint : J0, J1, J2, J3, J4, J5)를 자동으로 초기값에 넣어줍니다.

### 35. 모니터(Monitor) 기능

![missing](/manual/ko/programming_guide/icons/37.png)

프로그램 구동 중, 실시간으로 관찰하고 싶은 변수 (단일 변수, 배열, 포인트 변수 등)를 선언하는 기능입니다.<br>
모니터 기능에 선언된 변수들은 Make/Play 페이지 우측의 모니터 아이콘을 클릭하면, 프로그램 구동 중 실시간으로 변수 값을 관찰 가능합니다.

![missing](/manual/ko/programming_guide/4.teaching_icons_detail/100.png)

위의 프로그램 예시에서는 my_count라는 이름의 변수를 하나 선언하고, 반복문(Repeat)을 통하여 초당 1씩 my_count를 증가시키는 기능을 구현합니다.<br>
그리고 모니터 기능을 사용하여 관찰할 대상으로 my_count를 지정합니다. 모니터 기능에는 관찰하고자 하는 변수의 이름을 넣으면 됩니다.<br>

프로그램 구동 중, 모니터에 지정한 변수의 값을 실시간으로 관찰하고 싶을 경우 화면 우측의 모니터링 아이콘을 클릭하면 됩니다.

![missing](/manual/ko/programming_guide/4.teaching_icons_detail/101.png)

이후, 프로그램을 재생 (Run, ▷)하면, 아래 그림과 같이 1초마다 my_count의 값이 증가되는 모습을 실시간으로 관찰할 수 있습니다.

![missing](/manual/ko/programming_guide/4.teaching_icons_detail/102.png)

### 36. 직렬통신(RS485) 기능

![missing](/manual/ko/programming_guide/icons/38.png)

툴 플랜지를 통해 RS485 출력을 위한 기능입니다. 아스키(Ascii)모드로 출력을 줄 수도 있고, 16진법(hex) 모드로 출력을 줄 수도 있습니다.<br>
UI 태블릿을 통해서는 RS485 Tx만 지원합니다. 구성된 통신은 팝업 창 우측의 Preview 버튼을 통해 미리 전송해 볼 수 있습니다.

<div class="center-align">
    <img src="/manual/ko/programming_guide/4.teaching_icons_detail/103.png" />
    <br>
    <figcaption>[ ASCII mode ]</figcaption>
    <br>
    <img src="/manual/ko/programming_guide/4.teaching_icons_detail/104.png" />
    <br>
    <figcaption>[ HEX mode ]</figcaption>
</div>

RS485에서 사용할 통신 속도(Baud Rate), 기타 규약(Parity bit, Stop bit)은 Setup-serial 메뉴에서 설정합니다.<br>
또는 프로젝트 상단에 Set-Serial_Configuration 옵션을 사용하여 설정 가능합니다.<br>
박스 (Box side)에서 시리얼 통신을 사용하기 위해서는 상용 USB-Serial (RS232/422/485) 장치를 USB 포트에 꼽아 사용하면 됩니다.

### 37. 소켓통신(Socket) 기능

![missing](/manual/ko/programming_guide/icons/39.png)

소켓 통신을 위한 기능입니다 소켓을 열어서 특정 서버에 접속하고, 서버에 요청 메시지를 보내고, 서버로부터 특정 데이터를 받아오는 기능을 제공합니다.<br>
소켓 통신은 최대 5개까지 별도의 서버와 연결 가능합니다. 소켓 통신을 위한 컨트롤 박스의 IP 설정은 Setup 화면의 Socket/Serial 탭에서 설정 가능합니다.<br>
소켓 기능에서는 아래와 같이 6가지의 기능이 제공됩니다.

![missing](/manual/ko/programming_guide/4.teaching_icons_detail/105.png)

![missing](/manual/ko/programming_guide/4.teaching_icons_detail/106.png)

- Close: 소켓을 닫습니다.
- Open : 소켓을 열고, 서버와 연결합니다.
- Read ASCII Variable : 서버로부터 온 문자열에서 숫자를 읽어 variable 타입 변수에 저장합니다.
- Read ASCII Array : 서버로부터 온 문자열에서 배열을 읽어 array 타입 변수에 저장합니다.
- Read String : 서버로 온 문자열을 읽어 string 타입 변수에 저장합니다.
- Send String : 서버로 지정된 문자열을 전송합니다.
- Clear Buffer : 버퍼를 비웁니다.

#### 37.1 Close

![missing](/manual/ko/programming_guide/4.teaching_icons_detail/107.png)

선택된 번호의 소켓 기능을 닫는 기능입니다.

#### 37.2 Open

![missing](/manual/ko/programming_guide/4.teaching_icons_detail/108.png)

선택된 번호의 소켓 기능을 활성화하고, 상대 서버에 접속하는 기능입니다 접속하고자 하는 상대 서버의 IP주소와 포트 번호를 설정합니다.<br>
위 그림에 설명되어 있는 바와 같이 모드선택을 통해 서버/클라이언트 모드의 상황을 설정할 수 있습니다.

#### 37.3 Read ASCII Variable

![missing](/manual/ko/programming_guide/4.teaching_icons_detail/109.png)

앞서 Assign 등을 통해 선언된 Variable 타입 변수 중 하나를 골라 서버로부터 받은 문자열에서 숫자를 읽어서, 앞서 선언된 Variable 타입 변수에 넣는 기능입니다.<br>
성공 시까지 계속 읽기를 사용으로 놓고 설정하면 타임아웃 시간을 설정하게 되는데, 해당 시간이 지나게 되면 읽기를 중지합니다.

#### 37.4 Read ASCII Array

![missing](/manual/ko/programming_guide/4.teaching_icons_detail/110.png)

앞서 Assign 등을 통해 선언된 Array 타입 변수 중 하나를 골라 서버로부터 받은 문자열에서 배열을 읽어서, 앞서 선언된 Array 타입 변수에 넣는 기능입니다.

#### 37.5 Read String

![missing](/manual/ko/programming_guide/4.teaching_icons_detail/111.png)

앞서 Assign 등을 통해 선언된 String 타입 변수 중 하나를 골라 서버로부터 받은 문자열을 읽어서, 앞서 선언된 String 타입 변수에 넣는 기능입니다.

#### 37.6 Send String

![missing](/manual/ko/programming_guide/4.teaching_icons_detail/112.png)

서버로 특정 문자열을 보낼 때 사용하는 기능입니다. 직접 문자열을 입력하거나(예 “req_data”) 앞서 선언된 String 타입 변수를 보낼 수 있습니다.

#### 37.7 Clear Buffer

![missing](/manual/ko/programming_guide/4.teaching_icons_detail/113.png)

해당 번호의 버퍼의 내용을 모두 비웁니다.

<div class="warning custom-block">
  <p class="custom-block-title">주의</p>
  <ul>
    <li>
      서버가 준수해야 할 문법:<br>
        로봇 제조사에서 제공하는 Read ASCII Variable, Read ASCII Array, Read String 기능을 사용하기 위해서는 서버가 회신하는 데이터 형식은 아래와 같아야 합니다.<br>
        아래 문법 이외에 특수한 통신 문법이 요구되는 경우 제조사와 협의하시기 바랍니다.
    </li>
    <li>
      <b>Read ASCII Variable</b><br>
        서버는 숫자를 보낼 때, 숫자만을 작성하여 보내고자 하는 숫자를 보내야 합니다. (i.e. 따옴표 사이에 숫자를 적어 문자열로 숫자를 보내면 안됩니다.)<br>
        (e.g. 123, 4567)
    </li>
    <li>
      <b>Read ASCII Array</b><br>
        서버는 배열을 보내고 싶을 때, 중괄호 {} 안에 숫자를 입력해서 보내야 합니다.<br>
        숫자를 입력할 때, 숫자 사이에 쉼표(,)를 넣어 각 숫자를 구분해주어야 합니다. (i.e. 따옴표 사이에 배열을 적어 문자열로 배열을 보내면 안 됨.)<br>
        (e.g. {100,200,300})
    </li>
    <li>
      <b>Read String</b><br>
        서버는 “this_is_string_from_server”형식으로 따옴표를 포함한 문자열을 보내야 합니다.<br>
        소켓 통신의 연결 여부/회신 여부 등을 알기 위해 내부 변수가 아래와 같이 존재합니다.<br>
        아래의 두 내부 변수 모두 Shared Date 타입에서 선택 사용 가능합니다.<br><br>
          - <b>SD_SOCK_IS_OPEN_#</b> (#은 소켓 번호 0~4)<br>
            해당 번호의 소켓이 정상적으로 Open 되었는지, 서버와 정상 연결되었는지 여부를 저장한 변수입니다.<br>
            Socket-Open 이후 If(SD_SOCK_IS_OPEN_0)과 같은 식으로 소켓이 정상적으로 연결되었는지 체크할 수 있습니다.<br><br>
          - <b>SD_SOCK_LAST_READ_#</b> (#은 소켓 번호 0~4)<br>
            해당 번호의 소켓으로 Read 기능이 정상적으로 수행되었는지 여부를 저장한 변수입니다.<br>
            예를 들어 Socket-ReadAsciiVariable 이후에, If(SD_SOCK_LAST_READ_0) 과 같은 식으로 마지막으로 수행한 Read 기능이 정상적으로 수행되었는지 체크할 수 있습니다.<br>
            서버로부터 들어온 데이터가 없을 경우 이 변수는 0값을 갖습니다.
    </li>
  </ul>
</div>

아래 그림은 소켓 통신 예제입니다.

![missing](/manual/ko/programming_guide/4.teaching_icons_detail/114.png)

### 38. 모드버스(Modbus) 기능

![missing](/manual/ko/programming_guide/icons/40.png)

모드버스 클라이언트 기능입니다. 특정 IP/주소에 데이터를 요청하고, 반환된 데이터를 가져올 수 있는 기능을 제공합니다.<br>
데이터 요청 주기와 형식 등을 지정 가능합니다. 모드버스 TCP의 포트 번호는 **502**로 고정되어 있습니다 (Modbus 표준).<br>
모드버스 TCP 서버와 관련된 프로토콜 및 형식은 부록 I에 정리되어 있으며, 모드버스 TCP 클라이언트 기능은 프로그램 최 상단의 Pre.P 하위에 추가하여야 합니다.

![missing](/manual/ko/programming_guide/4.teaching_icons_detail/115.png)

① 모드버스 클라이언트로 접속할 서버의 IP 주소 입력란<br>
② 구분을 위한 ID 입력란<br>
③ 신호 타입 Read bit(1bit), Read word(16bit), Write bit(1bit), Write word(16bit) 중 하나를 선택합니다.<br>
④ 서버에서 접근할 주소 값을 입력하는 란<br>
⑤ Read/Write를 수행할 주기를 선택하는 란(Hz 단위)<br>
⑥ Read의 경우 읽은 값을 저장할 변수명을 선언합니다. Write의 경우 출력할 변수명을 설정합니다.<br>
⑦ 5번에서 설정한 변수의 초기값<br>
⑧ 사용할 신호를 추가하는 버튼

아래는 모드버스 클라이언트 기능 설정에 대한 예시입니다.

![missing](/manual/ko/programming_guide/4.teaching_icons_detail/116.png)

- 예시 1)<br>
  서버 (IP: 192.168.0.100)의 주소 100에 있는 word 타입 정보를 읽어서 mod_return_value라는 변수에 넣는 기능. 정보를 읽는 주기는 1Hz 구성.
- 예시 2)<br>
  서버 (IP: 192.168.0.100)의 주소 200에 mod_write_bit에 저장된 값을 쓰는 기능. 100Hz의 주기로 mod_write_bit의 값을 서버로 전송.

### 39. 인터페이스(Interface) 기능

![missing](/manual/ko/programming_guide/icons/41.png)

인터페이스 기능은 PLC, HMI, PC 등과 같은 외부 기기를 제어 박스와 연결하기 위한 기능입니다. 인터페이스를 이용하여 사용할 수 있는 외부 기기의 리스트는 다음과 같습니다.

- HMI(MemLink) - Proface, TOP
- PLC(MC Protocol) – 미쯔비시 PLC
- Mulic Player
- PLC(XGT Protocol) - LS Electric PLC
- CSV File
- Pickit
- Modbus Client(Interrupt)
- OMRON PLC(FINS Protocol)
- Siemens PLC(S7 Protocol)
- OnRobot Eye

각각의 외부 기기에 따라 사용할 수 있는 세부 기능이 다르기 때문에 하기 내용을 참고하여 사용해야 합니다.

#### 39.1 HMI(MemLink)

<br>

##### 1. 연결설정

![missing](/manual/ko/programming_guide/4.teaching_icons_detail/117.png)

HMI와 RB 시스템 사이에 통신을 연결하는 창입니다. 소켓 번호, IP 주소 및 포트를 입력해주게 됩니다.<br>
또한, 연결 실패, 통신 에러 발생시 알람 팝업을 띄울지 무시할지를 결정할 수 있고 통신 타임 아웃 시간을 정할 수 있습니다.

##### 2. 단일 변수 쓰기

![missing](/manual/ko/programming_guide/4.teaching_icons_detail/118.png)

HMI의 1개의 주소에 값을 입력하는 기능입니다. 이때 전송 값은 숫자 또는 변수(Variable)의 이름을 입력합니다.

##### 3. 단일 변수 읽기

![missing](/manual/ko/programming_guide/4.teaching_icons_detail/119.png)

HMI의 1개의 주소에서 값을 읽어오는 기능입니다. 이때 읽은 값은 지정한 변수(Variable)에 저장합니다.

##### 4. 다중 숫자(배열) 쓰기

![missing](/manual/ko/programming_guide/4.teaching_icons_detail/120.png)

HMI의 시작 주소부터 지정한 개수의 주소까지 숫자를 입력하는 기능입니다. 이때 미리 선언한 배열을 Array Name에 적어줘야 하고, 길이는 배열의 최대 길이인 20을 넘지 않아야 합니다.

##### 5. 다중 숫자(배열) 읽기

![missing](/manual/ko/programming_guide/4.teaching_icons_detail/121.png)

HMI의 시작 주소부터 지정한 개수의 주소까지 데이터를 읽어오는 기능입니다. 이때 미리 선언한 배열을 Array Name에 적어줘야 하고, 길이는 배열의 최대 길이인 20을 넘지 않아야 합니다.

#### 39.2 PLC(MC Protocol)

<br>

##### 1. 연결설정

![missing](/manual/ko/programming_guide/4.teaching_icons_detail/122.png)

미쯔비시 PLC와 RB 시스템 사이에 통신을 연결하는 창입니다. 소켓 번호, IP 주소 및 포트를 입력합니다.<br>
또한 프로토콜 타입, 연결 실패, 통신 에러 발생시 알람 팝업을 띄울지 무시할지를 결정할 수 있고 통신 타임 아웃 시간을 정할 수 있습니다.

##### 2. 단일 변수 쓰기

![missing](/manual/ko/programming_guide/4.teaching_icons_detail/123.png)

PLC의 1개의 주소에 값을 입력하는 기능입니다. 이때 전송 값은 숫자 또는 변수(Variable)의 이름을 입력합니다.

##### 3. 단일 변수 읽기

![missing](/manual/ko/programming_guide/4.teaching_icons_detail/124.png)

PLC의 1개의 주소에서 값을 읽어오는 기능입니다. 이때 읽은 값은 지정한 변수(Variable)에 저장합니다.

##### 4. 다중 숫자(배열) 쓰기

![missing](/manual/ko/programming_guide/4.teaching_icons_detail/125.png)

PLC의 시작 주소부터 지정한 개수의 주소까지 숫자를 입력하는 기능입니다. 이때 미리 선언한 배열을 Array Name에 적어줘야 하고, 길이는 배열의 최대 길이인 20을 넘지 않아야 합니다.

##### 5. 다중 숫자(배열) 읽기

![missing](/manual/ko/programming_guide/4.teaching_icons_detail/126.png)

PLC의 시작 주소부터 지정한 개수의 주소까지 데이터를 읽어오는 기능입니다. 이때 미리 선언한 배열을 Array Name에 적어줘야 하고, 길이는 배열의 최대 길이인 20을 넘지 않아야 합니다.

#### 39.3 Music Player

![missing](/manual/ko/programming_guide/4.teaching_icons_detail/127.png)

프로그램 재생 중에 mp3 파일을 재생하는 기능입니다. RB Driver를 통해 Music 드라이버를 설치해야 하고, 재생하고자 하는 mp3 파일이 정해진 경로 내에 존재해야 합니다.

#### 39.4 PLC(XGT Protocol)

<br>

##### 1. 연결설정

![missing](/manual/ko/programming_guide/4.teaching_icons_detail/128.png)

LS Electric PLC와 RB 시스템 사이에 통신을 연결하는 기능입니다. 소켓 번호, IP 주소 및 포트를 입력해주게 됩니다.<br>
또한, 프로토콜 타입, 연결 실패, 통신 에러 발생시 알람 팝업을 띄울지 무시할지를 결정할 수 있고 통신 타임 아웃 시간을 정할 수 있습니다.

##### 2. 단일 변수 쓰기

![missing](/manual/ko/programming_guide/4.teaching_icons_detail/129.png)

PLC의 1개의 주소에 값을 입력하는 기능입니다. 이때 전송 값은 숫자 또는 변수(Variable)의 이름을 입력합니다.

##### 3. 단일 변수 읽기

![missing](/manual/ko/programming_guide/4.teaching_icons_detail/130.png)

PLC의 1개의 주소에서 값을 읽어오는 기능입니다. 이때 읽은 값은 지정한 변수(Variable)에 저장합니다.

##### 4. 다중 숫자(배열) 쓰기

![missing](/manual/ko/programming_guide/4.teaching_icons_detail/131.png)

PLC의 시작 주소부터 지정한 개수의 주소까지 숫자를 입력하는 기능입니다. 이때 미리 선언한 배열을 Array Name에 적어줘야 하고, 길이는 배열의 최대 길이인 20을 넘지 않아야 합니다.

##### 5. 다중 숫자(배열) 읽기

![missing](/manual/ko/programming_guide/4.teaching_icons_detail/132.png)

PLC의 시작 주소부터 지정한 개수의 주소까지 데이터를 읽어오는 기능입니다. 이때 미리 선언한 배열을 Array Name에 적어줘야 하고, 길이는 배열의 최대 길이인 20을 넘지 않아야 합니다.

#### 39.5 CSV File

<br>

##### 1. 문자열 읽기

![missing](/manual/ko/programming_guide/4.teaching_icons_detail/133.png)

CSV File로부터 문자열을 읽어오는 기능입니다. 해당 CSV File은 지정한 경로 내에 저장되어 있어야 합니다.

##### 2. 단일 숫자 읽기

![missing](/manual/ko/programming_guide/4.teaching_icons_detail/134.png)

CSV File로부터 단일 숫자를 읽어오는 기능입니다. 해당 CSV File은 지정한 경로 내에 저장되어 있어야 합니다.

#### 39.6 Pickit

<br>

##### 1. 연결설정

![missing](/manual/ko/programming_guide/4.teaching_icons_detail/135.png)

Pickit과 RB 시스템 사이에 통신을 연결하는 기능입니다. 소켓 번호, IP 주소를 입력해주게 됩니다.<br>
또한, 연결 실패, 통신 에러 발생시 알람 팝업을 띄울지 무시할지를 결정할 수 있습니다.

##### 2. 명령어 전송

![missing](/manual/ko/programming_guide/4.teaching_icons_detail/136.png)

Pickit으로 전송할 명령, 명령에 따른 데이터를 설정합니다.

#### 39.7 Modbus Client(Interrupt)

<br>

##### 1. 연결설정

![missing](/manual/ko/programming_guide/4.teaching_icons_detail/137.png)

모드버스 통신에서 RB 시스템을 클라이언트로 연결하는 기능입니다. 소켓 번호, IP 주소를 입력해주게 됩니다.<br>
또한, 연결 실패, 통신 에러 발생시 알람 팝업을 띄울지 무시할지를 결정할 수 있습니다.

##### 2. 단일 변수 쓰기

![missing](/manual/ko/programming_guide/4.teaching_icons_detail/139.png)

모드버스 통신을 통해 워드 타입 데이터를 1개의 주소에 값을 입력하는 기능입니다. 이때 전송 값은 숫자 또는 변수(Variable)의 이름을 입력합니다.

##### 3. 단일 숫자 읽기

![missing](/manual/ko/programming_guide/4.teaching_icons_detail/139.png)

모드버스 통신을 통해 워드 타입 데이터 1개의 값을 해당 주소에서 읽어오는 기능입니다. 이때 읽은 값은 지정한 변수(Variable)에 저장하게 됩니다.

##### 4. 다중 숫자(배열) 쓰기

![missing](/manual/ko/programming_guide/4.teaching_icons_detail/140.png)

모드버스 통신을 통해 워드 타입 숫자 데이터를 시작 주소부터 지정한 개수의 주소까지 입력하는 기능입니다.<br>
이때 미리 선언한 배열을 Array Name에 적어줘야 하고, 길이는 배열의 최대 길이인 20을 넘지 않아야 합니다.

##### 5. 다중 숫자(배열) 읽기

![missing](/manual/ko/programming_guide/4.teaching_icons_detail/141.png)

모드버스 통신을 통해 시작 주소부터 지정한 개수의 주소까지 데이터를 읽어오는 기능입니다.<br>
이때 미리 선언한 배열을 Array Name에 적어줘야 하고, 길이는 배열의 최대 길이인 20을 넘지 않아야 합니다.

#### 39.8 OMRON PLC(FINS Protocol)

<br>

##### 1. 연결설정

![missing](/manual/ko/programming_guide/4.teaching_icons_detail/142.png)

Omron PLC와 RB 시스템 사이에 통신을 연결하는 기능입니다. 소켓 번호, IP 주소 및 포트를 입력해주게 됩니다.<br>
또한, 연결 실패, 통신 에러 발생시 알람 팝업을 띄울지 무시할지를 결정할 수 있고 통신 타임 아웃 시간을 정할 수 있습니다.

##### 2. 단일 변수 쓰기

![missing](/manual/ko/programming_guide/4.teaching_icons_detail/143.png)

PLC의 1개의 주소에 값을 입력하는 기능입니다. 이때 전송 값은 숫자 또는 변수(Variable)의 이름을 입력합니다.

##### 3. 단일 변수 읽기

![missing](/manual/ko/programming_guide/4.teaching_icons_detail/144.png)

PLC의 1개의 주소에서 값을 읽어오는 기능입니다. 이때 읽은 값은 지정한 변수(Variable)에 저장합니다.

##### 4. 다중 숫자(배열) 쓰기

![missing](/manual/ko/programming_guide/4.teaching_icons_detail/145.png)

PLC의 시작 주소부터 지정한 개수의 주소까지 숫자를 입력하는 기능입니다.<br>
이때 미리 선언한 배열을 Array Name에 적어줘야 하고, 길이는 배열의 최대 길이인 20을 넘지 않아야 합니다.

##### 5. 다중 숫자(배열) 읽기

![missing](/manual/ko/programming_guide/4.teaching_icons_detail/146.png)

PLC의 시작 주소부터 지정한 개수의 주소까지 데이터를 읽어오는 기능입니다.<br>
이때 미리 선언한 배열을 Array Name에 적어줘야 하고, 길이는 배열의 최대 길이인 20을 넘지 않아야 합니다.

#### 39.9 Siemens PLC(S7 Protocol)

<br>

##### 1. 연결설정

![missing](/manual/ko/programming_guide/4.teaching_icons_detail/147.png)

Siemens PLC와 RB 시스템 사이에 통신을 연결하는 기능입니다. 소켓 번호, IP 주소를 입력해주게 됩니다.<br>
또한, 연결 실패, 통신 에러 발생시 알람 팝업을 띄울지 무시할지를 결정할 수 있고 통신 타임 아웃 시간을 정할 수 있습니다.

##### 2. 단일 변수 쓰기

![missing](/manual/ko/programming_guide/4.teaching_icons_detail/148.png)

PLC의 1개의 주소에 값을 입력하는 기능입니다. 이때 전송 값은 숫자 또는 변수(Variable)의 이름을 입력합니다.

##### 3. 단일 숫자 읽기

![missing](/manual/ko/programming_guide/4.teaching_icons_detail/149.png)

PLC의 1개의 주소에서 값을 읽어오는 기능입니다. 이때 읽은 값은 지정한 변수(Variable)에 저장합니다.

##### 4. 다중 숫자(배열) 쓰기

![missing](/manual/ko/programming_guide/4.teaching_icons_detail/150.png)

PLC의 시작 주소부터 지정한 개수의 주소까지 숫자를 입력하는 기능입니다.<br>
이때 미리 선언한 배열을 Array Name에 적어줘야 하고, 길이는 배열의 최대 길이인 20을 넘지 않아야 합니다.

##### 5. 다중 숫자(배열) 읽기

![missing](/manual/ko/programming_guide/4.teaching_icons_detail/151.png)

PLC의 시작 주소부터 지정한 개수의 주소까지 데이터를 읽어오는 기능입니다.<br>
이때 미리 선언한 배열을 Array Name에 적어줘야 하고, 길이는 배열의 최대 길이인 20을 넘지 않아야 합니다.

#### 39.10 OnRobot Eye

<br>

##### 1. 연결설정

![missing](/manual/ko/programming_guide/4.teaching_icons_detail/152.png)

OnRobot Eye와 통신하기 위한 기능입니다. 소켓 번호, IP 주소를 입력해주게 됩니다.<br>
또한, 연결 실패, 통신 에러 발생시 알람 팝업을 띄울지 무시할지를 결정할 수 있습니다.

##### 2. 명령어 전송

![missing](/manual/ko/programming_guide/4.teaching_icons_detail/153.png)

OnRobot Eye에 정해진 명령을 보낼 수 있습니다. 명령을 보냈을 때 통신 타임 아웃을 통해 타임 아웃 시간을 설정할 수 있습니다.

##### 3. 물체 감지

![missing](/manual/ko/programming_guide/4.teaching_icons_detail/154.png)

![missing](/manual/ko/programming_guide/4.teaching_icons_detail/155.png)

OnRobot Eye의 작업 번호는 미리 설정되어 있어야 하며 설정된 작업을 실행하기 위한 기능입니다.<br>
해당 기능을 통해 얻어진 데이터의 경우 키보드의 속성을 Devices로 선택한 후 목록에서 사용할 수 있습니다.

### 40. 서브루틴(Sub.P) 기능

![missing](/manual/ko/programming_guide/icons/42.png)

사전에 만들어진 다른 프로그램 파일(티칭 파일)을 현재 문서에 수정 가능한 형태로 삽입하는 기능입니다.<br>
‘하위 프로그램 호출’은 단순히 다른 프로그램을 호출하는 기능이고, ‘명령어 내용 복사’의 경우 다른 프로그램의 명령어를 복사하여 메인 프로그램에 추가하는 기능입니다.<br>
‘프로그램 전환 방식으로 호출’은 해당 서브 프로그램을 호출하는 순간 서브 프로그램으로 창이 전환 되어 실행되는 기능입니다.

![missing](/manual/ko/programming_guide/4.teaching_icons_detail/156.png)

아래와 같이 “sample_prog”라는 이름의 파일을 생성합니다.

![missing](/manual/ko/programming_guide/4.teaching_icons_detail/157.png)

예시 1) 새 프로그램에서 sample_prog를 하위 프로그램으로 호출 기능으로 불러올 경우.

![missing](/manual/ko/programming_guide/4.teaching_icons_detail/158.png)

예시 2) 새 프로그램에서 sample_prog를 명령어 내용 복사 기능으로 불러올 경우.

![missing](/manual/ko/programming_guide/4.teaching_icons_detail/159.png)

예시 3) 새 프로그램에서 sample_prog를 프로그램 전환 방식으로 호출 기능으로 불러올 경우.

![missing](/manual/ko/programming_guide/4.teaching_icons_detail/160.png)

예시 1)에 나타난 것처럼 하위 프로그램으로 호출 기능으로 불러올 경우, 해당 프로젝트를 수행은 하지만 상위 프로그램에서 수정이 불가능 형태가 됩니다.<br>
또한, 불러온 하위 프로젝트가 변경되게 되면 상위 프로그램의 구동도 바뀌게 됩니다.

예시 2)와 같이 명령어 내용 복사 기능으로 불러온 경우, 상위 프로그램에서 수정이 가능한 형태로 불러옵니다.<br>
한번 명령어 내용 복사로 복사되어 들어온 내용은 원본 하위 프로그램이 수정되어도 바뀌지 않습니다.

예시 3)과 같이 **프로그램 전환 방식**으로 호출 기능으로 불러온 경우, 해당 서브 프로그램의 실행 여부 및 반복 횟수를 지정할 수 있으며, UI 상에서 해당 서브 프로그램으로 진입하여 실행되는 코드를 출력합니다.

<div class="warning custom-block">
  <p class="custom-block-title">주의</p>
  <ol>
    <li>
      현재 프로젝트에서 Sub.P 기능으로 호출된 하위 프로젝트는 시각적으로 내용을 볼 수는 있으나, 수정은 불가능합니다. 수정이 필요한 경우 해당 프로젝트를 별도로 열어야 합니다.
    </li>
    <li>
      Sub.P 기능은 최대 10단계 깊이까지 호출할 수 있으며, 재귀호출 방식으로 티칭 트리를 구성하는 것을 권장하지 않습니다.
    </li>
  </ol>
</div>

### 41. 패턴(Pattern) 기능

![missing](/manual/ko/programming_guide/icons/43.png)

반복 동작을 정의하는 기능입니다. 반복 동작을 수행할 공간에 대한 정보를 정의하고, 각 위치에서 수행할 반복 동작을 정의하면 모든 공간 지점에서 같은 동작을 수행합니다.<br>
이 기능을 통하여 팔래타이징(palletizing)을 구현 가능합니다. 3가지의 하위 설정이 있습니다.

- Pattern Property:
  반복 동작을 수행할 대상 면/공간을 정의합니다.
  직선, 평면, 3차원큐브, 임의의 지점 등 다양한 형태를 지원합니다.
- Pattern Anchor:
  Pattern Action에서 정의할 동작의 기준점을 정의합니다.
- Pattern Action:
  Pattern Anchor에서 설정된 기준점에 대비하여 상대적인 동작을 정의하는 구역입니다. 정의된 상대적인 동작은, Pattern Property에서 설정한 모든 패턴 지점에서 마다 반복됩니다.

1. **[Step 1]** Pattern Property를 아래와 같이 세팅합니다.

![missing](/manual/ko/programming_guide/4.teaching_icons_detail/161.png)

이 설정을 통해 아래와 반복 지점들이 공간상에 형성됩니다.

<div class="center-align">
  <img src="/manual/ko/programming_guide/4.teaching_icons_detail/162.png" />
</div>
<!-- ![missing](/manual/ko/programming_guide/4.teaching_icons_detail/162.png) -->

2. **[Step 2]** Pattern Anchor와 Pattern Action을 통해 아래와 같은 상대 움직임을 정의합니다.

<div class="center-align">
  <img src="/manual/ko/programming_guide/4.teaching_icons_detail/163.png" />
</div>
<!-- ![missing](/manual/ko/programming_guide/4.teaching_icons_detail/163.png) -->

3. **[Step 3]** 최종적으로 Step-2에서 설정한 상대움직임이 Step-1에서 설정된 패턴 지점들 모두에게 반영되면서 같은 동작을 반복하는 동작이 완성됩니다.

![missing](/manual/ko/programming_guide/4.teaching_icons_detail/164.png)

### 42. 컨베이어(Conveyor) 기능

![missing](/manual/ko/programming_guide/icons/44.png)

컨베이어 추적 기능입니다. 컨베이어 속도와 방향에 관한 설정을 하면 컨베이어 기능의 하위 동작 (동작L, 동작PB, 원 동작 등)은 컨베이어 흐름에 더해집니다.<br>
동작J, 동작JB등 동작J계열의 동작은 컨베이어의 하위 동작에 넣지 못합니다. 동작L, 동작PB(구 동작LB), 동작JL, 동작ITPL, 원 동작만 지원됩니다.

컨베이어 기능을 프로그램 Tree에 추가하고, 이 기능을 클릭하여 옵션을 보면 아래와 같습니다.

![missing](/manual/ko/programming_guide/4.teaching_icons_detail/165.png)

① 컨베이어의 형태와 속도, 트래킹 대상 등을 설정합니다.<br>
② 컨베이어 진행 방향에 대한 벡터입니다(x,y,z 값은 로봇 팔 베이스 좌표계 기준).

이를 바탕으로 프로그램을 구성하면 아래와 같습니다.

![missing](/manual/ko/programming_guide/4.teaching_icons_detail/166.png)

### 43. 힘(Force) 기능

![missing](/manual/ko/programming_guide/icons/45.png)

힘 제어를 위한 기능입니다. 힘 제어 기능 하위에 포함된 동작들은 설정된 힘을 주도록 궤적이 자동으로 변경됩니다.

![missing](/manual/ko/programming_guide/4.teaching_icons_detail/167.png)

원하는 힘 제어 모드, 힘 제어에 사용할 센서, 그리고 힘 제어 대상 값을 선택 및 입력하면 됩니다.

아래 그림의 좌측은 일반적인 동작만 할 경우입니다. 평면 위 공중에서 동작이 시작되어 공중에서 끝나는 동작입니다.<br>
이 동작을 그대로 힘 제어의 하위 항목으로 넣으면, 일정 힘으로 지면을 누르는 동작으로 변경됩니다(힘 제어 세팅을 지면 방향으로 할 경우).

![missing](/manual/ko/programming_guide/4.teaching_icons_detail/168.png)

<figcaption style="text-align:center;">[(좌) 힘 제어 적용 전 / (우) 힘 제어를 함께 사용할 경우]</figcaption>

### 44. 위빙(Weaving) 기능

![missing](/manual/ko/programming_guide/icons/46.png)

용접 위빙을 위한 특수 기능입니다. 위빙 기능 하위에 포함된 동작들은 설정된 위빙을 하도록 TCP 궤적이 자동으로 변경됩니다.<br>
원하는 위빙의 형상과, 위빙 옵션을 선택 및 입력하면 됩니다.

![missing](/manual/ko/programming_guide/4.teaching_icons_detail/169.png)

아래 그림의 좌측은 일반적인 동작만 할 경우입니다. 이 동작을 그대로 위빙의 하위 항목으로 넣으면, 위빙 궤적이 반영된 TCP 궤적이 그려집니다(우측 그림 예시는 삼각파 위빙의 경우).

![missing](/manual/ko/programming_guide/4.teaching_icons_detail/170.png)

### 45. 위빙2(Weaving2) 기능

![missing](/manual/ko/programming_guide/icons/47.png)

![missing](/manual/ko/programming_guide/4.teaching_icons_detail/171.png)

위빙과 위빙2의 차이점은 위빙의 경우 용접할 면과 면을 set point로 설정하여 기준을 정하는 것이라면, 위빙2는 TCP의 프레임을 기준으로 위빙하는 모션을 구현합니다.

### 46. 터치 센싱(TouchSen.) 기능

![missing](/manual/ko/programming_guide/icons/48.png)

터치 센싱 기능은 용접 어플리케이션 활용을 위한 기능입니다. 모재의 이동을 감지해서 모재의 이동 방향을 반영하여 용접 시에 활용됩니다.<br>
이 기능에 대한 자세한 설명은 별도의 매뉴얼로 제공됩니다.

![missing](/manual/ko/programming_guide/4.teaching_icons_detail/172.png)
