---
layout: doc
outline: deep
---

# Set-up (Program Table)

### 기능 설명

각각의 디지털 입력을 통해 불러올 프로그램을 설정합니다.

![missing](/manual/ko/setup/table1.png)

1. 기존에 만들어 놓은 설정을 가져옵니다.
2. 사용할 디지털 입력 포트를 의미합니다.
3. 사용할 기능을 선택합니다. 기능은 Load, Load + Play(Once), Load + Play(Repeat)으로 나뉩니다.
4. 디지털 입력을 통해 사용할 프로젝트를 선택합니다.
5. 설정한 내용을 저장합니다.

기존의 ‘Setup > I/O1’의 ‘제어박스 디지털 입력 기능 정의’로 사용하는 Start Program 기능은 한 개의 디지털 입력만 사용 가능하며 프로그램도 제어 박스에 현재 업로드 되어 있는 메인 프로그램만 실행 할 수 있는 기능입니다. ‘Setup > Program Table’은 서로 다른 디지털 입력에 서로 다른 프로그램을 로드, 프로그램 실행 등을 진행할 수 있습니다.<br>

아래 그림을 통해 두 기능의 차이점을 확인할 수 있습니다.

![missing](/manual/ko/setup/15-2.png)

### 프로그램 테이블 설정 방법

![missing](/technical_docs/common/program_table/1.png)

1. 옵션으로는 프로그램 파일을 로드만 수행할지, 로드 후 한 번만 실행할지, 또는 로드 후 반복 실행할지를 선택할 수 있습니다.

![missing](/technical_docs/common/program_table/2.png)

![missing](/technical_docs/common/program_table/3.png)

2. 옵션 선택 후에, 실행되기를 원하는 .wsl 파일을 선택합니다. 원하는 번호에 원하는 프로그램 파일을 등록해줍니다. 

### Digital Input 설정

![missing](/technical_docs/common/program_table/4.png)

3. 0번에 프로그램 테이블을 등록해주었다면, Set-up > I/O1 의 Din 0 에 위 와 같은 기능 목록을 선택해줍니다. 

![missing](/technical_docs/common/program_table/5.png)

4. Digital 0 번에 할당해준 프로그램 테이블 0번의 “my_project” 가 Digital 0 번의 Falling Edge 순간에 실행 됩니다. 
