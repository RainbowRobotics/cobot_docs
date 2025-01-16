---
layout: doc
outline: deep
---

# 사용자 인터페이스 커스터마이징 v1.1

### UI 앱 프로그램 사용자 임의 꾸미기

<div class="warning custom-block">
  <p class="custom-block-title">주의</p>
  <ol>
    <li>
      본 절차는 ㈜레인보우 로보틱스의 협동로봇 UI 앱 프로그램을 커스터마이즈 하여 꾸미기 위한 방법 입니다.
    </li>
    <li>
      해당 기능은 2020년 6월 이후 제공되는 공식 업데이트 버전부터 유효합니다.
    </li>
  </ol>
</div>

1. 앱을 설치 또는 업데이트 합니다.<br>
   설치 / 업데이트 방법은 업데이트 절차서를 별도로 참조 바랍니다.

2. 기본 설치 이후, 3D 화면 구성은 아래와 같습니다.

<div class="center-align">
  <img src="/technical_docs/common/ui_customizing/2-1.png" />
  <p style="text-align: center;">[ 로딩 화면 – 기본 ]</p>
</div>

<div class="center-align">
  <img src="/technical_docs/common/ui_customizing/2-2.png" />
  <p style="text-align: center;">[ 홈 화면 – 기본 ]</p>
</div>

<div class="center-align">
  <img src="/technical_docs/common/ui_customizing/2-3.png" />
  <p style="text-align: center;">[ Make 화면 – 기본 ]</p>
</div>

3. 지금부터 해당 화면을 커스터마이즈 해보겠습니다.

- 3가지 파일이 필요합니다.
- 파일 이름은 아래에서 정의된 파일 명만 인식됩니다.
- 그림 사이즈가 너무 클 경우 UI 로딩 속도가 느려집니다.
- 로딩 속도를 위하여 권장 사이즈 이하의 사이즈를 권합니다.
- 그림 배경은 투명한 png 타입을 권장합니다.

<table class="th-align">
    <tr>
        <th>파일 이름</th>
        <th>목적</th>
        <th>권장 사이즈/형식</th>
    </tr>
    <tr>
        <td>Intro.png</td>
        <td>앱 로딩 시 로고</td>
        <td>png, (세로 120px 예: 450x120 pixel)</td>
    </tr>
    <tr>
        <td>Home.png</td>
        <td>화면 좌측 상단 로고</td>
        <td>png, (세로 70px 예: 70x70 pixel)</td>
    </tr>
    <tr>
        <td>HomeTitle.txt</td>
        <td>홈 화면 멘트</td>
        <td>txt</td>
    </tr>
</table>

1. 태블릿을 업무용 PC에 연결하여 아래의 경로에 접근합니다.

```
Android/data/com.rainbow.cobot/files/Images
```

5. 현재 해당 경로 안에는 아무 파일도 존재하지 않습니다.

- 아무 파일도 존재하지 않을 경우, 레인보우 로보틱스의 기본 값이 적용됩니다.

![missing](/technical_docs/common/ui_customizing/5.png)

6. 이 경로에 3단계에서 준비된 3 가지 파일을 넣어줍니다.

![missing](/technical_docs/common/ui_customizing/6.png)

7. 커스터마이즈가 끝났습니다. 앱을 다시 실행해보면 아래와 같은 화면을 볼 수 있습니다.

<div class="center-align">
  <img src="/technical_docs/common/ui_customizing/7-1.png" />
  <p style="text-align: center;">[ Intro.png 적용됨 ]</p>
</div>

<div class="center-align">
  <img src="/technical_docs/common/ui_customizing/7-2.png" />
  <p style="text-align: center;">[ HomeTitle.txt 안의 내용이 적용됨 ]</p>
</div>

<div class="center-align">
  <img src="/technical_docs/common/ui_customizing/7-3.png" />
  <p style="text-align: center;">[ Home.png 적용됨 ]</p>
</div>
