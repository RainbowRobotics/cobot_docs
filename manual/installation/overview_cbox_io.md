---
layout: doc
outline: deep
---

# Robot Control Box I/O Overview

To connect other external devices to the robot control box, please connect the I/O from the control box to the corresponding device.<br>
The I/O of the control box is very flexible, so it can be used to connect with various equipment such as relays, PLCs, and emergency stop buttons.<br>
The layout of the electrical interface inside the robot control box is as follows.

![missing](/manual/common/installation/7.png)

The specifications of the power and digital I / O provided by the control box are as follows.<br>
All digital I/O is compliant with the IEC 61131-2 standard.

- IEC 61131-2: IEC standard for programmable controllers

<div class="center-align th-align td-align">
  <table>
    <tr>
      <th>Terminal</th>
      <th>Parameter</th>
      <th>Min</th>
      <th>Type</th>
      <th>Max</th>
      <th>Unit</th>
    </tr>
    <tr>
      <th colspan=6>Digital Output</th>
    </tr>
    <tr>
      <td>[ DOx ]</td>
      <td>Current</td>
      <td>0</td>
      <td>-</td>
      <td>1</td>
      <td>A</td>
    </tr>
    <tr>
      <td>[ DOx ]</td>
      <td>Voltage Drop</td>
      <td>0</td>
      <td>-</td>
      <td>0.5</td>
      <td>V</td>
    </tr>
    <tr>
      <td>[ DOx ]</td>
      <td>Current Leak</td>
      <td>0</td>
      <td>-</td>
      <td>0.1</td>
      <td>mA</td>
    </tr>
    <tr>
      <td>[ DOx ]</td>
      <td>Type</td>
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
      <th colspan=6>Digital Input</th>
    </tr>
    <tr>
      <td>[ DIx ]</td>
      <td>Voltage</td>
      <td>-3</td>
      <td>-</td>
      <td>30</td>
      <td>V</td>
    </tr>
    <tr>
      <td>[ DIx ]</td>
      <td>OFF Range</td>
      <td>-3</td>
      <td>-</td>
      <td>5</td>
      <td>V</td>
    </tr>
    <tr>
      <td>[ DIx ]</td>
      <td>ON Range</td>
      <td>11</td>
      <td>-</td>
      <td>30</td>
      <td>V</td>
    </tr>
    <tr>
      <td>[ DIx ]</td>
      <td>Current (11-30V)</td>
      <td>2</td>
      <td>-</td>
      <td>15</td>
      <td>mA</td>
    </tr>
    <tr>
      <td>[ DIx ]</td>
      <td>Type</td>
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
  <p class="custom-block-title">Caution</p>
  <ul>
    <li>When tightening the I/O wiring, please turn off the power to the control box in advance.</li>
    <li>Any damage to the product caused by the user's carelessness (24V power shorts, incorrect wiring, etc.) is <b><u>not covered</u> by the product's warranty.</b></li>
  </ul>
</div>
