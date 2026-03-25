---
layout: doc
outline: deep
---

# 비상 정지

비상 시 로봇 팔을 긴급히 정지시키기 위해 로봇 컨트롤 박스와 연결되어 있는 비상 정지 스위치를 이용하여 로봇을 정지시킬 수 있습니다.

다음은 컨트롤 박스의 비상 정지 스위치 작동 방법입니다.

- 비상 정지하기<br>
  비상 정지 버튼을 눌러 로봇 팔을 즉시 정지할 수 있습니다.

  ![missing](/manual/common/safety_and_precautions/7-1.png)

- 비상 정지 해제하기<br>
  비상 정지 버튼을 시계 방향으로 돌리면 비상 정지가 해제됩니다.

  ![missing](/manual/common/safety_and_precautions/7-2.png)

## 핸드 컨트롤러 LED 상태

1.	**L1, L2, L3 중 <span style="color:yellowgreen"> L1만 녹색 </span>으로 점등된 경우,**<br> Real Robot 모드 상태를 의미합니다. 

2.	**L1, L2, L3 중 <span style="color:yellowgreen"> L2만 녹색 </span>으로 점등된 경우,**<br> Simulation 모드에서 프로그램이 실행 중인 상태를 의미합니다.  

3.	**L1, L2, L3 중 <span style="color:yellowgreen"> L1과 L2가 녹색 </span>으로 점등된 경우,**<br>
 Real Robot 모드에서 프로그램 실행 중인 상태를 의미합니다.

4.	**L1, L2, L3 중 <span style="color:red"> L3만 적색 </span>으로 점등된 경우,**<br>
 제어박스 부팅이 완료되지 않은 상태를 의미합니다. 

5.	**L1, L2, L3 중 <span style="color:yellowgreen"> L1과 L2는 녹색 </span>으로 점등 되고, <span style="color:red"> L3가 적색 </span>으로 점등된 경우,**<br> 충돌 감지 상황이 발생한 상태를 의미합니다.