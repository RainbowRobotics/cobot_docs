---
layout: doc
outline: deep
---

# 로그 데이터 백업하기

### 로그 데이터

::: tip
매뉴얼 제작시에 사용한 제어박스와 Ui 버전은 7.7.4 입니다. <br>
제어박스와 Ui를 **USB 연결**을 할 경우 최대 **10일**정도의 로그를 확인할 수 있습니다.<br>
**TCP/IP로 연결**을 할 경우 **하루** 분량의 로그를 확인할 수 있습니다. 
:::
![missing](/technical_docs/common/backup_log/1.png)

Set-up > Log/Utility > Log 에서 Get 을 클릭합니다. 
![missing](/technical_docs/common/backup_log/1_2.png)

Get을 클릭한 후, 좌측 사진과 같은 팝업이 나타났다면 성공적으로 로그를 불러올 수 있습니다. 
![missing](/technical_docs/common/backup_log/3.png)

Get 아래에 Load 를 클릭하면, 우측 사진과 같이 최대 10일 가량의 로그 데이터를 확인할 수 있습니다. 
![missing](/technical_docs/common/backup_log/1_4.png)

확인하고 싶은 일자의 로그를 선택하면, 좌측 사진과 같이 로그를 확인 할 수 있습니다. 
![missing](/technical_docs/common/backup_log/1_5.png)

우측 All~User 까지 원하는 부분만을 추출하여 확인 할 수도 있습니다. 
![missing](/technical_docs/common/backup_log/1_6.png)

우측의 Mail 버튼을 클릭하고 메일 제목을 입력한 후, 하단의 Send를 클릭하면 기술지원팀 메일로 로그가 손쉽게 전송 됩니다. 단, 태블릿에 **인터넷 연결**이 되어 있어야 합니다. 
![missing](/technical_docs/common/backup_log/1_7.png)

### 로그 데이터 파일 위치

태블릿을 PC와 연결하여 **파일 탐색기 -> Tablet 이름 -> Android -> data** 를 들어갑니다. 
![missing](/technical_docs/common/backup_log/1_8.png)

**com.rainbow.cobot -> files** 에 들어갑니다.  
![missing](/technical_docs/common/backup_log/1_9.png)

**Log -> _SysLog** 에 들어가서 백업 받은 로그 파일을 확인할 수 있습니다. 
![missing](/technical_docs/common/backup_log/1_10.png)
