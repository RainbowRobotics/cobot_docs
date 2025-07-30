---
layout: doc
outline: deep
---

# 시작 사용자 가이드 v240227

### 가이드 내 안전표기

::: danger
이 표기가 있는 지침을 준수하지 않을 경우, 작업자 또는 사용자의 사망이나 중대한 부상으로 이어질 수 있는 심각한 사고가 발생할 수 있습니다. 
:::

::: warning
이 표기가 있는 지침을 준수하지 않을 경우, 작업자 또는 사용자에게 중대한 부상을 유발할 수 있는 사고가 발생할 수 있습니다. 
:::

<div class="warning custom-block">
    <p class="custom-block-title">CAUTION</p>
    <p>이 표기가 있는 지침을 준수하지 않을 경우, 제품이 손상되거나 작업자 또는 사용자가 부상을 입을 수 있습니다.</p>
</div>

### 일반 안전 경고 및 주의 사항 

:::warning

1. 로봇 응용 시스템 제조업체 또는 로봇 사용자는 본 가이드와 사용자 매뉴얼의 내용을 숙지하고, 반드시 작동 교육을 이수해야 합니다.
2. 로봇 암이 자유롭게 움직일 수 있도록 충분한 공간을 확보해야 합니다.
3. 로봇을 사용할 때에는 헐렁한 옷이나 액세서리를 착용하지 마십시오. 머리카락이 긴 경우, 로봇의 관절이나 기타 부위에 끼이지 않도록 반드시 묶어 주십시오.
4. 손상된 로봇은 절대로 사용하지 마십시오.
5. 소프트웨어에 치명적인 오류가 발생한 경우, 즉시 **비상 정지(E-Stop)**를 작동시키고 제품 공급업체 또는 Rainbow Robotics에 문의하십시오.
6. 로봇 설치 각도, 툴 설정, 안전 지침 등의 값이 정확히 입력되었는지 반드시 확인하십시오.
7. 안전 장비는 일반 I/O 포트에 연결하지 마십시오. 안전 장비는 반드시 안전 관련 I/O 포트에만 연결해야 합니다.
8. 태블릿 PC로 로봇을 티칭할 때에는 로봇의 움직임에 주의하십시오.
9. 로봇이 작동 중일 때에는 작동 범위 내에 들어가지 말고, 로봇을 손으로 만지지 마십시오.
10. 로봇을 임의로 개조하거나 수정하지 마십시오. 제조사인 Rainbow Robotics는 사용자가 제품을 임의로 변경하거나 개조하여 발생하는 문제에 대해 책임지지 않습니다.
11. 로봇 암과 컨트롤러는 장시간 사용 시 열이 발생합니다. 장시간 사용 후 로봇을 손으로 만지지 마십시오. 로봇을 만져야 할 경우, 컨트롤러 전원을 차단하고 충분히 냉각된 후 작업하십시오.
12. 로봇이 외부 물체와 충돌할 경우, 속도와 페이로드에 비례하여 큰 충격이 발생합니다.
13. 권장 설치 조건을 사용하고 있는지 확인하십시오. 로봇 암의 설치 방향, 툴의 무게, 무게 중심, 길이, 안전성 등을 정확히 입력하지 않으면, 직접 교시(Direct Teaching) 또는 충돌 감지 기능이 제대로 작동하지 않을 수 있습니다.
14. 직접 교시 기능은 반드시 안전한 환경에서 사용해야 합니다. 툴이나 주변 고정물, 부품에 날카로운 부분이 있거나 끼임이 발생할 수 있는 경우에는 사용하지 마십시오.
15. 직접 교시 기능을 사용하기 전에, 툴의 길이, 무게, 무게 중심 등 툴 관련 정보가 실제와 일치하도록 정확히 입력되어 있는지 확인하십시오. 잘못된 정보를 입력할 경우, 직접 교시 기능 사용 중 오작동이 발생할 수 있습니다.
16. 직접 교시 기능 사용 중 일정 속도를 초과하여 조작할 경우, 사용자 안전을 위해 관절이 비상 정지될 수 있습니다.
17. 로봇 암과 제어박스는 작동 중 열을 발생시킵니다. 작동 중이거나 작동 직후 로봇 암을 계속 접촉하면 오작동의 원인이 될 수 있으므로, 손으로 만지지 마십시오. 로봇 암을 조작하거나 만지기 전에는 UI 화면에서 온도를 확인하거나 로봇 전원을 차단한 후, 1시간 이상 충분히 냉각되었는지 확인하십시오.
<!-- 여기 꼭 한줄 띄울것!!!! 안그러면 아래 caution 블럭이 이 warning 블럭 안쪽으로 들어와버림. -->

:::

<div class="warning custom-block">
    <p class="custom-block-title">CAUTION</p>
    <ol>
        <li>
            로봇을 기계 또는 기타 로봇과 함께 사용하여 로봇에 손상이 발생할 가능성이 있는 경우, 모든 기능을 사전에 개별적으로 테스트한 후 사용하는 것을 권장합니다. 프로그래밍 오류 또는 로봇의 오작동으로 인해 다른 기계나 로봇에 손상이 발생하더라도, 제조사는 이에 대한 책임을 지지 않습니다.
        </li>
        <li>
            로봇을 강한 자기장에 노출시키지 마십시오. (로봇이 손상될 수 있습니다.)
        </li>
    </ol>
</div>

:::warning

1. 감전 위험이 있는 전기 장치가 설치된 위치에는 경고 표지판을 부착하십시오.
2. 표지판을 찢거나 훼손하거나 제거하지 마십시오.
3. 표지판이 부착된 부품 또는 장치 및 그 주변 부품을 다룰 때에는 각별히 주의하십시오.
4. 전기 부품 내부는 절대로 손으로 접촉하지 마십시오.

:::

### 1. 구성요소소

로봇 및 시스템 구성 요소가 포함된 총 2개의 박스가 제공되며, 각 박스에 포함된 시스템 구성 요소는 다음과 같습니다.

- 로봇 팔

![missing](/technical_docs/common/start_user_guide/1-1.png)

※ 괄호 ( )로 표시된 항목은 옵션 제품입니다.

<table class="th-align td-align">
    <tr>
        <th>Robot</th>
        <th>1</th>
        <td>로봇 팔</td>
    </tr>
    <tr>
        <th rowspan=3>Tool Box</th>
        <th>2</th>
        <td>볼트, 와샤, 렌치</td>
    </tr>
    <tr>
        <th>(3)</th>
        <td>※ NSF 모델 전용 툴 – 베이스 고정용 툴</td>
    </tr>
    <tr>
        <th>(4)</th>
        <td>툴 I/O 케이블</td>
    </tr>
</table>

:::tip
※ NSF 모델 전용 툴은 NSF 모델의 구성품에만 적용됩니다.<br>
※ 구성품은 로봇의 사양에 따라 달라질 수 있습니다.<br>
※ 본 매뉴얼에 사용된 제품 이미지는 이해를 돕기 위한 예시이며, 실제 제품과 다를 수 있습니다.
:::

- 제어 박스

![missing](/technical_docs/common/start_user_guide/1-2.png)

※ 괄호 ( )로 표시된 항목은 옵션 제품입니다.

<table class="th-align">
    <tr>
        <th>System Components</th>
        <th>1</th>
        <td>제어 박스스</td>
    </tr>
    <tr>
        <th rowspan=7>Accessory Box</th>
        <th>2</th>
        <td>AC 전원 케이블</td>
    </tr>
    <tr>
        <th>3</th>
        <td>로봇 - 제어 박스 연결 케이블</td>
    </tr>
    <tr>
        <th>4</th>
        <td>비상 정지/조그 인터페이스</td>
    </tr>
    <tr>
        <th>5</th>
        <td>제어 박스 열쇠 (일부 모델에 해당됨됨)</td>
    </tr>
    <tr>
        <th>6</th>
        <td>I/O 터미널 단자대 (여분), 휴즈</td>
    </tr>
    <tr>
        <th>(7)</th>
        <td>태블릿, 짧은 USB 케이블, 긴 USB 케이블</td>
    </tr>
    <tr>
        <th>8</th>
        <td>서비스 제공용 (예: USB, 외부 케이블 고정을 위한 벨크로 등)</td>
    </tr>
</table>

:::tip
※ 위에 표시된 제어박스의 외형은 로봇의 사양에 따라 변경될 수 있습니다.<br>
※ 전원 케이블 및 로봇 팔팔–제어박스 간 케이블은 제조사에서 제공하는 **5m 케이블** 사용을 권장합니다.
비상 정지/조그 인터페이스 케이블은 제조사에서 제공하는 3m 미만의 케이블 사용을 권장합니다.<br>
※ 차폐 LAN 케이블, I/O 포트 연결 케이블, USB 케이블, 및 관통형 모델용 외부 배선은 **3m 미만의 케이블** 사용을 권장합니다.<br>
※ 서비스 제공용 항목 및 구성은 사전 예고 없이 변경될 수 있습니다.
:::

### 2. 로봇 설치하기

<br>

#### 2.1 로봇 설치하기기

1. 로봇의 포장을 해제한 후, 로봇을 고정할 볼트의 홀 위치에 맞추어 정렬하여 배치하십시오.

![missing](/technical_docs/common/start_user_guide/2-1-1.png)

2. 제공된 렌치와 볼트를 사용하여 로봇을 고정하십시오.

![missing](/technical_docs/common/start_user_guide/2-1-2.png)

:::warning
1. 로봇을 고정할 때, 볼트가 풀리지 않도록 단단히 조여졌는지 반드시 확인하십시오.
2. 로봇은 자체 중량 및 작동 시 발생하는 하중을 충분히 견딜 수 있는 견고한 표면에 설치하십시오.
3. 로봇 설치 면과 베이스 표면이 완전히 밀착되도록 설치해야 합니다.
4. 로봇에 조립된 볼트를 임의로 분해하지 마십시오. 로봇 팔팔을 작동하기 전에 모든 볼트가 제대로 고정되어 있는지 확인하십시오.
5. 볼트가 분해된 상태에서 로봇을 사용하거나, 해당 볼트 조립 부위를 이용하여 브래킷이나 기타 부품을 설치하는 경우, 제품이 손상되거나 안전에 심각한 영향을 줄 수 있습니다.
:::

#### 2.2 제어박스 연결하기

구성품에 포함된 케이블을 제어박스 하단의 해당 커넥터에 연결하십시오.

:::tip
※ 아래에 표시된 제어박스의 외형은 로봇의 사양에 따라 변경될 수 있습니다.
:::

![missing](/technical_docs/common/start_user_guide/2-2-1.png)

1. **AC 전원 케이블**<br>
   AC 전원 케이블을 제어박스의 올바른 위치에 연결하십시오. **(AC 전원)**
   - 전원 공급은 단상 <u>**AC220/110V**</u> 이어야 합니다.

![missing](/technical_docs/common/start_user_guide/2-2-2.png)

2. **비상 정지 / 조그 인터페이스 (Male)**<br>
   **비상 정지/조그 인터페이스(E-STOP/JOG)** 를 제어박스의 올바른 위치에 연결한 후, 시계 방향으로 돌려 고정하십시오.

![missing](/technical_docs/common/start_user_guide/2-2-3.png)

3. **로봇-제어박스 연결 케이블 (Male)**<br>
   로봇–제어박스 연결 케이블(수 커넥터)을 제어박스의 올바른 위치에 연결하십시오.

![missing](/technical_docs/common/start_user_guide/2-2-4.png)

1. **로봇-제어박스 연결 케이블 (Female)**<br>
   로봇–제어박스 연결 케이블(암 커넥터)을 로봇의 올바른 위치에 연결하십시오.
   - **케이블을 연결할 때에는 핀 방향을 정확히 확인하십시오.**

![missing](/technical_docs/common/start_user_guide/2-2-5.png)

<div class="warning custom-block">
    <p class="custom-block-title">CAUTION</p>
    <ol>
        <li>
            로봇의 전원이 켜진 상태에서는 AC 전원 케이블, 로봇–제어박스 연결 케이블, 태블릿 PC 커넥터 등을 분리하지 마십시오.
        </li>
        <li>
            AC 전원은 반드시 접지되어야 합니다.
        </li>
    </ol>
</div>

### 3. 로봇 운용하기

<br>

#### 3.1 전원 켜기

1. 제어박스의 AC 전원 스위치를 켜십시오.

![missing](/technical_docs/common/start_user_guide/3-1-1.png)

2. 제어박스 상단의 전원 버튼을 눌러 메인 PC를 부팅하십시오.

※ 메인 PC가 부팅되는 동안, LCD 패널에는 “Please Wait” 문구가 표시됩니다.<br>
메인 PC가 정상적으로 구동되면, LCD 패널에 “default” 또는 기본 동작 프로그램 파일명이 표시됩니다.

![missing](/technical_docs/common/start_user_guide/3-1-2.png)

3. 비상 정지/조그 인터페이스의 비상 정지 스위치를 시계 방향으로 돌려 해제하십시오.

![missing](/technical_docs/common/start_user_guide/3-1-3.png)

4. 태블릿 PC를 제어박스에 연결하십시오.

![missing](/technical_docs/common/start_user_guide/3-1-4.png)

#### 3.2 Ui와 로봇 연결

1. 팬팬던트에서 “Rainbow-RB” 앱을 클릭하여 UI를 실행하십시오.

![missing](/technical_docs/common/start_user_guide/3-2-1.png)

메인 화면에는 3개의 메뉴(Make, Play, Set-up)가 있으며, 이를 통해 로봇 동작 생성(Make), 실제 동작 실행(Play), 작업 환경 설정(Set-up)의 세 단계로 진입할 수 있습니다.

2. “Make” 버튼을 클릭하십시오.

![missing](/technical_docs/common/start_user_guide/3-2-2.png)

3. 그림에 표시된 빨간색 상자의 아이콘을 클릭하십시오.

![missing](/technical_docs/common/start_user_guide/3-2-3.png)

4. Robot State 화면이 나타나면, “Connect” 버튼을 눌러 제어박스와 태블릿 PC를 연결하십시오.

![missing](/technical_docs/common/start_user_guide/3-2-4.png)

<div class="warning custom-block">
    <p class="custom-block-title">CAUTION</p>
    <ol>
        <li>
            연결을 시도하기 전에 제어박스의 전원이 켜져 있고, 비상 정지 스위치가 해제되어 있는지 확인하십시오. 제어박스의 전원이 꺼져 있는 경우, “Device Off” 문구가 빨간색으로 표시되며 화면이 이전 화면으로 되돌아갑니다.
        </li>
    </ol>
</div>

5. 로봇과 정상적으로 연결되면, 그림에 표시된 빨간색 상자의 LED 표시등이 녹색으로 변경됩니다.

![missing](/technical_docs/common/start_user_guide/3-2-5.png)

:::tip
※ 네트워크 연결 중 문제가 발생한 경우, **[부록 A]**를 참고하십시오.
:::

![missing](/technical_docs/common/start_user_guide/3-2-6.png)

6. “Control”을 클릭하면 로봇을 직접 조작할 수 있는 상태로 전환됩니다.<br>
   “Control” 버튼을 클릭하면 로봇 팔이 제어 가능한 상태로 초기화됩니다.<br>
   이때 관절의 브레이크가 해제되며, 로봇 팔팔에서 순차적으로 작동음이 발생합니다.

![missing](/technical_docs/common/start_user_guide/3-2-7.png)

:::tip
※ 로봇 활성화 중 문제가 발생한 경우, **[부록 B]**를 참고하십시오.
:::

![missing](/technical_docs/common/start_user_guide/3-2-8.png)

7. 모든 LED 표시등이 녹색이어야 합니다 (그렇지 않으면 에러 코드가 표시됩니다). 이후 “Close” 버튼을 클릭하십시오.

![missing](/technical_docs/common/start_user_guide/3-2-9.png)

8. 그림에 표시된 빨간색 상자 내의 “Real Robot”을 클릭하십시오.<br> “Real Robot” 모드는 Ui 화면상의 로봇뿐만 아니라 실제 로봇까지 함께 동작하는 모드입니다.

![missing](/technical_docs/common/start_user_guide/3-2-10.png)

9. 메시지 박스가 표시되면, “Yes” 버튼을 클릭하십시오.

![missing](/technical_docs/common/start_user_guide/3-2-11.png)

10. 그림에 표시된 빨간색 상자의 조그 기능을 사용하여 로봇을 이동시킬 수 있습니다. 자세한 내용은 사용자 매뉴얼을 참고하십시오.

![missing](/technical_docs/common/start_user_guide/3-2-12.png)

:::warning

비상 정지/조그 인터페이스를 사용하여 로봇을 이동시키기 전에, 주변에 사람이나 장애물이 없는지 반드시 확인하십시오.

:::

#### 3.3 전원 끄기

1. 그림에 표시된 빨간색 상자의 아이콘을 클릭하십시오.

![missing](/technical_docs/common/start_user_guide/3-3-1.png)

2. 로봇을 종료하려면 “Powerdown”을 클릭하십시오. 이때 관절 브레이크가 작동되며, 로봇 팔에서 순차적으로 작동음이 발생합니다.

![missing](/technical_docs/common/start_user_guide/3-3-2.png)

3. “Disconnect” 버튼을 클릭하십시오.

![missing](/technical_docs/common/start_user_guide/3-3-3.png)

※ 로봇과 UI를 동시에 종료하려면, 우측 하단의 전원 버튼을 클릭한 후 “UI+Robot Shut Down” 버튼을 선택하십시오.

![missing](/technical_docs/common/start_user_guide/3-3-4.png)
![missing](/technical_docs/common/start_user_guide/3-3-5.png)

4. 제어박스 상단의 전원 버튼을 3초 이상 길게 눌러 메인 PC를 종료하십시오.

![missing](/technical_docs/common/start_user_guide/3-3-6.png)

5. 제어박스 하단의 AC 전원 스위치를 눌러 전원을 차단하십시오.

![missing](/technical_docs/common/start_user_guide/3-3-7.png)

### 4. 부록 (문제 해결)

<br>

#### A. 네트워크 연결 문제

1. 태블릿에 연결된 USB-C 타입 케이블을 분리하십시오.

![missing](/technical_docs/common/start_user_guide/4-1-1.png)

2. 태블릿 설정으로 이동하십시오.

![missing](/technical_docs/common/start_user_guide/4-1-2.png)

3. 하단의 ‘태블릿 정보’로 이동한 후 → ‘소프트웨어 정보’를 선택하십시오.

![missing](/technical_docs/common/start_user_guide/4-1-3.png)

4. “빌드 번호”를 여러 번 연속해서 클릭하십시오.

![missing](/technical_docs/common/start_user_guide/4-1-4.png)

5. 다음과 같은 팝업이 표시되면, 개발자 모드가 정상적으로 활성화된 것입니다.

![missing](/technical_docs/common/start_user_guide/4-1-5.png)

6. 개발자 모드로 전환하십시오.

![missing](/technical_docs/common/start_user_guide/4-1-6.png)

7. USB 디버깅이 활성화되어 있는 경우, 이를 비활성화하십시오.

![missing](/technical_docs/common/start_user_guide/4-1-7.png)

8. 하단의 디버깅 섹션으로 이동하여 “USB 디버깅 권한 취소”를 선택하십시오.

![missing](/technical_docs/common/start_user_guide/4-1-8.png)

9. “OK” 버튼을 클릭하십시오.

![missing](/technical_docs/common/start_user_guide/4-1-9.png)

10. USB 디버깅 기능을 다시 활성화하십시오.

![missing](/technical_docs/common/start_user_guide/4-1-10.png)

11. “OK” 버튼을 클릭한 후, USB-C 타입 케이블을 다시 연결하십시오.

![missing](/technical_docs/common/start_user_guide/4-1-11.png)

12. “Allow” 버튼을 클릭하십시오.

![missing](/technical_docs/common/start_user_guide/4-1-12.png)

13. “이 컴퓨터에서 항상 허용” 체크박스를 선택한 후, “Allow” 버튼을 클릭하십시오.

![missing](/technical_docs/common/start_user_guide/4-1-13.png)

14. 태블릿에 연결된 USB-C 타입 케이블을 분리한 후 다시 연결하십시오.

![missing](/technical_docs/common/start_user_guide/4-1-14.png)

15. “Allow” 버튼을 클릭하십시오.

![missing](/technical_docs/common/start_user_guide/4-1-15.png)

※ 위 문제가 지속될 경우, **Rainbow Robotics**로 문의해 주십시오.

#### B. 활성화 오류

<br>

##### a. 오류 코드 A2 문제가 발생한 경우

![missing](/technical_docs/common/start_user_guide/4-2-1.png)

1. 비상 정지/조그 인터페이스 스위치가 눌려 있는지 확인하십시오.
2. 로봇과 제어박스 간 연결 케이블이 올바르게 연결되어 있는지 확인하십시오.

##### b. 오류 코드 A4 문제가 발생한 경우

![missing](/technical_docs/common/start_user_guide/4-2-2.png)

1. 로봇과 제어박스를 연결하는 케이블이 올바르게 연결되어 있는지 확인하십시오.

##### c. 오류 코드 A12 문제가 발생한 경우

![missing](/technical_docs/common/start_user_guide/4-2-3.png)

1. 단자대의 EMO 및 PRS 영역에 쇼트바(Short Bar)가 삽입되어 있는지 확인하십시오.

##### d. 오류 코드 A53 문제가 발생한 경우

![missing](/technical_docs/common/start_user_guide/4-2-4.png)

1. 단자대의 퓨즈(Fuse) 및 외부 전원 영역에 쇼트바(Short Bar)가 삽입되어 있는지 확인하십시오.
2. 퓨즈가 끊어지지 않았는지(단선 여부)를 확인하십시오.

##### e. 오류 코드 A93 문제가 발생한 경우

![missing](/technical_docs/common/start_user_guide/4-2-5.png)

1. 단자대의 HSS 및 SSS 영역에 쇼트바(Short Bar)가 삽입되어 있는지 확인하십시오.

:::tip
※ 위 문제가 계속 발생할 경우, (주)레인보우로보틱스에 문의하십시오.<br>
※ 기타 오류 코드가 발생한 경우, 본 사용자 가이드를 참고하십시오.
:::
