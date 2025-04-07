---
layout: doc
outline: deep
---

# 안드로이드 태블릿 설정 v7.4

### 1. Rainbow UI 사용을 위한 안드로이드 태블릿 기본 설정

<div class="warning custom-block">
    <p class="custom-block-title">주의</p>
    <ol>
        <li>
            Rainbow Robotics 의 안드로이드 태블릿 UI 프로그램 사용 이전에, 다음과 같은 태블릿 설정이 요구됩니다.
        </li>
        <li>
            안드로이드 태블릿 제조사 및 OS 버전에 따라 하기 스크린 샷이 상이할 수 있습니다.
        </li>
    </ol>
</div>

1. 안드로이드 “설정”으로 이동합니다.

![missing](/technical_docs/en/android_tablet_setting/a1.png)

2. 만약 태블릿 설정에서 개발자 옵션이 보이지 않는다면, 3~4번 과정을 진행해주세요. 만약 개발자 모드가 이미 활성화가 되어진 상태라면 3~4번 과정을 건너뛰셔도 됩니다.

![missing](/technical_docs/en/android_tablet_setting/a2.png)

3. 태블릿 정보 -> 소프트웨어 정보로 이동합니다. 

![missing](/technical_docs/en/android_tablet_setting/a3.png)

4. 태블릿 정보 중 “빌드 번호” 다중 클릭 (7회 이상)합니다.

![missing](/technical_docs/en/android_tablet_setting/a4.png)

5. 그럼 아래와 같이 “태블릿 정보” 아래에 “개발자 옵션” 이라는 메뉴가 등장합니다.

![missing](/technical_docs/en/android_tablet_setting/a5.png)

6. “개발자 옵션”중, “USB 디버깅”을 활성화 시켜줍니다.

![missing](/technical_docs/en/android_tablet_setting/a6.png)

7. 레인보우 로보틱스에서 배포한 APK 를 실행하여 UI 프로그램을 태블릿에 설치합니다.

8. 안드로이드 태블릿과 로봇 제어 박스를 최초로 연결 시 (USB 선을 통하여),<br>
   아래와 같은 **‘USB 디버깅을 허용하시겠습니까?’** 라는 메시지가 뜹니다.<br>
   _‘이 컴퓨터에서 항상 허용’을_ 체크한 후, _‘허용’을_ 눌러주세요.<br>
   이후, 물리적으로 USB 케이블을 1회 탈착 시켜줘야 합니다.

![missing](/technical_docs/ko/android_tablet_setting/1-7.png)

<style scoped>
</style>

### 2. USB 연결 실패 해결 방법

<div class="warning custom-block">
    <p class="custom-block-title">주의</p>
    <ol>
        <li>
            USB 연결이 실패한 경우, 아래 단계를 따라 문제를 해결해 주세요.
        </li>
    </ol>
</div>

![missing](/technical_docs/en/android_tablet_setting/b1.png)

1. "USB 디버깅" 을 비활성화 했다가 다시 활성화 해주신 후, 화면 하단에 나오는 알람창의 "확인"을 클릭합니다. 
   
![missing](/technical_docs/en/android_tablet_setting/b2.png)

2. 개발자 옵션 탭의 아래로 스크롤을 내리시면 보이는 "기본 USB 구성"을 들어가서 "MIDI" 모드로 되어있는지 확인합니다. 만약 이미 "MIDI" 모드라면, 다른 곳을 선택했다가 다시 "MIDI" 로 바꿔줍니다. 
   
![missing](/technical_docs/en/android_tablet_setting/b3.png)

![missing](/technical_docs/en/android_tablet_setting/b4.png)

3. USB 케이블을 팬던트로부터 뺐다가 다시 꼽아줍니다. 그리고 1번 과정을 2~3회 반복해주세요. 위 과정을 반복하게 되면 연결 오류가 해결 될 것 입니다. 

4. 만약 위 과정을 반복하여도 해결이 되지 않았다면, "USB 디버깅 권한 승인 취소"를 진행한 후 1번부터 3번 과정을 반복해줍니다. 추가적으로 다른 USB 케이블로도 교체하여 시도해주세요. <br> 만약 위 과정으로도 해결되지 않는다면, 레인보우로보틱스 기술지원팀으로 문의 부탁드립니다. 

![missing](/technical_docs/en/android_tablet_setting/b5.png)