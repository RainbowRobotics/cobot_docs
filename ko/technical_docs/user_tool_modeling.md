---
layout: doc
outline: deep
---

# 사용자 툴 모델링 파일 넣기 v1.1

### 사용자 툴 3D 모델링 파일 넣기

<div class="warning custom-block">
  <p class="custom-block-title">주의</p>
  <ol>
    <li>
      본 절차는 ㈜레인보우 로보틱스의 협동로봇 UI 앱 프로그램을 커스터마이즈 하여 꾸미기 위한 방법 입니다.
    </li>
    <li>
      해당 기능은 2021년 9월 이후 제공되는 공식 업데이트 버전부터 유효합니다.
    </li>
  </ol>
</div>

1. 앱을 설치 또는 업데이트 합니다.<br>
   설치 / 업데이트 방법은 업데이트 절차서를 별도로 참조 바랍니다.

2. 기본 설치 이후, 3D 화면 구성은 아래와 같습니다.

![missing](/technical_docs/common/user_tool_modeling/2.png)

3. 지금부터 툴 모델링 파일을 넣어보겠습니다.

::: danger

- **_<span style="color:red;"><u>파일 이름과 확장자는 RB_TOOL.obj 만 가능합니다.</u></span>_**<br>
  이름: RB_TOOL / 확장자: obj
- **파일 <u>사이즈가 너무 클 경우 UI 로딩 속도가 느려집니다.</u> (권장 50KB 미만)**
- 로딩 속도를 위하여 <u>권장 사이즈 이하의 사이즈를 권합니다.</u>
- 3D 파일이 너무 클 경우, 3D 파일의 polygon 수를 줄여서 저용량으로 변환 후 사용하세요.
  :::

::: warning

- 3D 파일 제작 시, 단위는 반드시 mm (milli-meter) 단위를 사용해야 합니다.
- 미터 혹은 인치 등 다른 올바르지 않은 단위를 사용할 경우, 실제 설계 도면과 다르게 3D 화면상에 표기될 수 있습니다.
- 3D 파일 제작 시 아래와 같이 3D 파일의 좌표계 및 중심점을 잡아야 합니다.
- 레인보우 로보틱스의 <u>툴 기본 좌표계</u> 방향에 맞춰서, 3D 파일을 제작해야 합니다.
  :::

![missing](/technical_docs/common/user_tool_modeling/3.png)

4. 태블릿을 업무용 PC에 연결하여 아래의 경로에 접근합니다.

```
Android/data/com.rainbow.cobot/files/Images
```

5. 현재 해당 경로 안에는 아무 파일도 존재하지 않습니다.

![missing](/technical_docs/common/user_tool_modeling/5.png)

6. 이 경로에 3단계에서 준비된 파일 (“RB_TOOL.obj”)을 넣어줍니다.

![missing](/technical_docs/common/user_tool_modeling/6.png)

7. 커스터마이즈가 끝났습니다. 앱을 다시 실행해보면 아래와 같은 화면을 볼 수 있습니다.

![missing](/technical_docs/common/user_tool_modeling/7.png)
