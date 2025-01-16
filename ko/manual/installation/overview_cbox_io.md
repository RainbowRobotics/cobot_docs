---
layout: doc
outline: deep
---

# 로봇 컨트롤 박스 I/O 개요

외부의 다른 장비를 로봇 컨트롤 박스와 연결하려면 로봇 컨트롤 박스 안에 있는 I/O와 해당 장비를 연결합니다.<br>
로봇 컨트롤 박스의 I/O는 매우 유연하므로 릴레이, PLC, 비상 정지 버튼 등 다양한 장비와 연결하여 사용할 수 있습니다.<br>
로봇 컨트롤 박스 내부의 전기 인터페이스 레이아웃은 다음과 같습니다.

![missing](/manual/common/installation/7.png)

컨트롤 박스에서 제공하는 전원과 디지털 I/O의 사양은 다음과 같습니다.<br>
모든 디지털 I/O는 IEC 61131-2 규격에 호환됩니다.

- IEC 61131-2: 프로그래머블 컨트롤러를 위한 IEC 표준

<div class="center-align th-align td-align">
  <table>
    <tr>
      <th>터미널</th>
      <th>매개변수</th>
      <th>최소</th>
      <th>형식</th>
      <th>최대</th>
      <th>단위</th>
    </tr>
    <tr>
      <th colspan=6>디지털 출력</th>
    </tr>
    <tr>
      <td>[ DOx ]</td>
      <td>전류</td>
      <td>0</td>
      <td>-</td>
      <td>1</td>
      <td>A</td>
    </tr>
    <tr>
      <td>[ DOx ]</td>
      <td>전압 강하</td>
      <td>0</td>
      <td>-</td>
      <td>0.5</td>
      <td>V</td>
    </tr>
    <tr>
      <td>[ DOx ]</td>
      <td>누설 전류</td>
      <td>0</td>
      <td>-</td>
      <td>0.1</td>
      <td>mA</td>
    </tr>
    <tr>
      <td>[ DOx ]</td>
      <td>장치 형태</td>
      <td>-</td>
      <td>PNP</td>
      <td>-</td>
      <td>Type</td>
    </tr>
    <tr>
      <td>[ DOx ]</td>
      <td>IEC 61131-2</td>
      <td>-</td>
      <td>1A</td>
      <td>-</td>
      <td>Type</td>
    </tr>
    <tr>
      <th colspan=6>디지털 입력</th>
    </tr>
    <tr>
      <td>[ DIx ]</td>
      <td>전압</td>
      <td>-3</td>
      <td>-</td>
      <td>30</td>
      <td>V</td>
    </tr>
    <tr>
      <td>[ DIx ]</td>
      <td>OFF 범위</td>
      <td>-3</td>
      <td>-</td>
      <td>5</td>
      <td>V</td>
    </tr>
    <tr>
      <td>[ DIx ]</td>
      <td>ON 범위</td>
      <td>11</td>
      <td>-</td>
      <td>30</td>
      <td>V</td>
    </tr>
    <tr>
      <td>[ DIx ]</td>
      <td>전류 (11-30V)</td>
      <td>2</td>
      <td>-</td>
      <td>15</td>
      <td>mA</td>
    </tr>
    <tr>
      <td>[ DIx ]</td>
      <td>장치 형태</td>
      <td>-</td>
      <td>PNP+</td>
      <td>-</td>
      <td>Type</td>
    </tr>
    <tr>
      <td>[ DIx ]</td>
      <td>IEC 61131-2</td>
      <td>-</td>
      <td>1</td>
      <td>-</td>
      <td>Type</td>
    </tr>
  </table>
</div>

<div class="warning custom-block">
  <p class="custom-block-title">주의</p>
  <ul>
    <li>I/O 배선 체결 시, 컨트롤 박스 전원을 끄고 I/O 커넥터에 미리 작업하도록 합니다.</li>
    <li>사용자의 부주의(24V 전원 쇼트 및 잘못된 배선 등)로 인한 제품 손상은 제품의 <b>무상 보증을 받으실 수 <u>없습니다.</u></b></li>
  </ul>
</div>
