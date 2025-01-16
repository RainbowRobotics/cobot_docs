---
layout: doc
outline: deep
---

# Rainbow x Icevan v1.1

### 1. 구성 기초

![missing](/technical_docs/common/device_icevan/1-1.png)

- 상용 USB-RS232 (USB-serial) 장치를 RB 의 제어박스에 연결
- Icevan 장비와 통신 선은 cross 연결 / Gnd (그라운드)는 통일
- Icevan 장비는 Serial 통신 속도로, Baud rate 9600 bps 를 사용하기 때문에, 레인보우 제어 박스도 이에 맞게 설정.

![missing](/technical_docs/common/device_icevan/1-2.png)

### 2. 변수 설명

::: warning

- 아래 표에서 노란색 영역의 정보는 Icevan (제빙기)가 전송하는 정보입니다.
- 노란색 영역 변수에 저장된 값들은 제빙기가 통신을 통해 레인보우로 전송하는 정보를 변수에 담아두는 것이며, 레인보우 시스템에서는 별도의 조작을 하지 않는 변수들 입니다.
  :::

<table class="th-align">
    <tr>
        <th>변수 명</th>
        <th>설명</th>
        <th>Icevan 매뉴얼 참조</th>
    </tr>
    <tr>
        <td class="bg-none">ICE_INFO_CONNECTED</td>
        <td>제빙기와 통신 중인지 여부</td>
        <td></td>
    </tr>
    <tr>
        <td class="bg-none">ICE_INFO_REQUESTING</td>
        <td>*RB 개발자용</td>
        <td></td>
    </tr>
    <tr>
        <td class="bg-none">ICE_INFO_USING</td>
        <td>*RB 개발자용</td>
        <td></td>
    </tr>
    <tr>
        <td class="bg-none">ICE_INFO_VECSIZE</td>
        <td>*RB 개발자용</td>
        <td></td>
    </tr>
    <tr>
        <td>ICE_INFO_MODE_COMM</td>
        <td>1:통신모드 / 0:일반모드</td>
        <td>1장</td>
    </tr>
    <tr>
        <td>ICE_INFO_MODE_CUP</td>
        <td>1:컵 이탈 무시 / 0:컵 이탈시 출빙 중지</td>
        <td>1장</td>
    </tr>
    <tr>
        <td>ICE_INFO_TIME_ICE</td>
        <td>마지막 출빙 시간</td>
        <td></td>
    </tr>
    <tr>
        <td>ICE_INFO_TIME_WATER</td>
        <td>마지막 출수 시간</td>
        <td></td>
    </tr>
    <tr>
        <td>ICE_INFO_AMBI_LOW</td>
        <td>주변온도 설정 값 하단</td>
        <td>4장</td>
    </tr>
    <tr>
        <td>ICE_INFO_AMBI_HIGH</td>
        <td>주변온도 설정 값 상단</td>
        <td>4장</td>
    </tr>
    <tr>
        <td>ICE_INFO_TEMP_AMBI</td>
        <td>온도 정보 : 주변</td>
        <td>5장</td>
    </tr>
    <tr>
        <td>ICE_INFO_TEMP_EVAPO</td>
        <td>온도 정보 : Evaporator</td>
        <td>5-1장</td>
    </tr>
    <tr>
        <td>ICE_INFO_TEMP_CONDEN</td>
        <td>온도 정보 : Condensor</td>
        <td>5-1 장</td>
    </tr>
    <tr>
        <td>ICE_STATE_LAST_ICE_NO</td>
        <td>직전출빙에서 얼음 미감지된 경우</td>
        <td>무시하라 되어 있음</td>
    </tr>
    <tr>
        <td>ICE_STATE_LAST_ICE_YES</td>
        <td>직전출빙에서 얼음 감지된 경우</td>
        <td>무시하라 되어 있음</td>
    </tr>
    <tr>
        <td>ICE_STATE_COMP_WORK</td>
        <td>콤프레서 작동 여부 (작동 중이면 1)</td>
        <td>페이지 3 위쪽 표</td>
    </tr>
    <tr>
        <td>ICE_STATE_MOTOR_WORK</td>
        <td>기어모터 작동 여부 (작동 중이면 1)</td>
        <td>페이지 3 위쪽 표</td>
    </tr>
    <tr>
        <td>ICE_STATE_OUT_SOL</td>
        <td>출빙 SOL 감지 (감지되면 1)</td>
        <td>페이지 3 위쪽 표</td>
    </tr>
    <tr>
        <td>ICE_STATE_CUP_LEVEL</td>
        <td>컵 레버 감지 (감지되면 1)</td>
        <td>페이지 3 위쪽 표</td>
    </tr>
    <tr>
        <td>ICE_STATE_COMM_MODE</td>
        <td>통신 모드 면 1</td>
        <td>페이지 3 위쪽 표</td>
    </tr>
    <tr>
        <td>ICE_STATE_FULL_ICE</td>
        <td>얼음이 만빙 (가득이면 1)</td>
        <td>페이지 3 위쪽 표</td>
    </tr>
    <tr>
        <td>ICE_STATE_ERR_1</td>
        <td>*RB 개발자용</td>
        <td></td>
    </tr>
    <tr>
        <td>ICE_STATE_ERR_2</td>
        <td>*RB 개발자용</td>
        <td></td>
    </tr>
    <tr>
        <td>ICE_STATE_ERR_3</td>
        <td>*RB 개발자용</td>
        <td></td>
    </tr>
    <tr>
        <td>ICE_STATE_ERR_4</td>
        <td>*RB 개발자용</td>
        <td></td>
    </tr>
    <tr>
        <td>ICE_STATE_ERR_CODE</td>
        <td>에러코드 (0 이 정상)</td>
        <td>페이지 3 아래 표</td>
    </tr>
    <tr>
        <td>ICE_STATE_RD</td>
        <td>"1" 출빙명령대기 / "0" 출빙완료 or 타임아웃</td>
        <td>페이지 3 중간 표</td>
    </tr>
</table>

### 3. 함수 설명

<br>

#### 3.1 icevan_update_start(#)

- icevan_update_start(#)<br>

  제빙기에게 상태/설정 정보 요청 시작

  Input : 1 또는 0

  > 1: 데이터 요청 시작<br>
  > 0: 데이터 요청 종료

  Example :

  ```
  icevan_update_start(1)
  ```

#### 3.2 icevan_set_mode(#, #)

- icevan_set_mode(#, #)<br>

  제빙기의 동작 모드를 선택 (제빙기 매뉴얼 1장 참조)

  Input :

  > 첫번 째 인자:<br>
  > 1: 통신 모드 (RS232 통신에 의한 제어)<br>
  > 0: 일반 모드 (일반 모드로 동작)<br>

  > 두번째 인자:<br>
  > 1: 컵 이탈 무시 (컵 이탈시에도 설정시간 동안 출빙)<br>
  > 0: 컵 이탈시 출빙 중지

  Example :

  ```
  icevan_set_mode(1, 1) # 제빙기의 동작 모드를 통신 모드로 설정
  ```

#### 3.3 icevan_set_timeout(#)

- icevan_set_timeout(#)<br>

  얼음 투출 타임아웃 설정(얼음을 빼가지 않았을 때 타임아웃) (제빙기 매뉴얼 6장 참조)

  Input :

  > 초 단위 시간

  Example :

  ```
  icevan_set_timeout(600)
  ```

#### 3.4 icevan_set_airtemp(#, #)

- icevan_set_airtemp(#, #)<br>

  분위기 설정값 쓰기, 저온&고온 (제빙기 매뉴얼 8장 참조)

  Input :

  > 첫번째 인자 : 저온 값 (0~10)<br>
  > 두번째 인자 : 고온 값 (40~70)

  Example :

  ```
  icevan_set_airtemp(5, 65)
  ```

#### 3.5 icevan_out(#, #)

- icevan_out(#, #)<br>

  가장 핵심 함수. 얼음 / 물 뽑기 함수(제빙기 매뉴얼 2장 참조)

  Input :<br>

  > 첫번째 인자 : 얼음을 뽑을 시간 (초)<br>
  > 두번째 인자 : 물을 뽑을 시간 (초)

  Example :

  ```
  icevan_out(5.7, 0) # 얼음은 5.7 초 물은 0 초 뽑기
  ```

#### 3.6 icevan_reset()

- icevan_reset()<br>

  제빙기 리셋(제빙기 매뉴얼 7장 참조)

  Input :

  > 없음

  Example :

  ```
  icevan_reset()
  ```

#### 3.7 icevan_clear()

- icevan_clear()<br>

  정보 클리어 (아이스 반 측 설명으로, 이 함수는 존재 하지만 작동하지 않는다고 함.)

  Input :

  > 없음

  Example :

  ```
  icevan_clear()
  ```

<style scoped>
tr > td:first-child:not(.bg-none) {
  background-color: #f1b840;
}
</style>
