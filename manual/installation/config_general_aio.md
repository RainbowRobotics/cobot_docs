---
layout: doc
outline: deep
---

# General Purpose Analog I/O Configuration

The following methods are recommended for high reliability.

- Use analog GND closest to I/O.
- Equipment and control box use the same GND. Analog I/O is not isolated from the robot control box.
- Use shielded or twisted-pair cable. Connect to the GND shield on the Power (J12) terminal.

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
      <th colspan=6>Voltage mode Input</th>
    </tr>
    <tr>
      <td>AIx - AG</td>
      <td>Voltage</td>
      <td>0</td>
      <td>-</td>
      <td>10</td>
      <td>V</td>
    </tr>
    <tr>
      <td>AIx - AG</td>
      <td>Resolution</td>
      <td>-</td>
      <td>16</td>
      <td>-</td>
      <td>Bit</td>
    </tr>
    <tr>
      <th colspan=6>Voltage mode Output</th>
    </tr>
    <tr>
      <td>AOx – AG</td>
      <td>Voltage</td>
      <td>0</td>
      <td>-</td>
      <td>10</td>
      <td>V</td>
    </tr>
    <tr>
      <td>AOx – AG</td>
      <td>Resolution</td>
      <td>-</td>
      <td>16</td>
      <td>-</td>
      <td>Bit</td>
    </tr>
  </table>
</div>

### 1. Analog output

The analog output can be used to control speed of conveyor. The figure below illustrates a simple demonstration.

![missing](/manual/common/installation/10-1.png)

### 2. Analog input

The output value of the analog sensor can be used by the control box as analog input. The figure shown below illustrates a simple connection to an analog sensor.

![missing](/manual/common/installation/10-2.png)

### 3. LCD Status Display

![missing](/manual/common/installation/10-3.png)

1. Display Box(1): Displays information about system status.<br>
   - Please Wait: The main PC in the control box is booting up.<br>
   - default: The main PC in the control box is ready.
2. Display Box(2): Displays information about robot operation and status.
3. <span style="display:flex; align-items:center; white-space:pre">Action Icon:
   Definition lock(<img src="/manual/common/installation/10-4.png" />) or
   release(<img src="/manual/common/installation/10-5.png" />) state,
   play(<img src="/manual/common/installation/10-6.png" />) or
   stop(<img src="/manual/common/installation/10-7.png" />) state,
   crash(<img src="/manual/common/installation/10-8.png" />) or
   safe(<img src="/manual/common/installation/10-9.png" />)</span><br>
   state.
4. Power Consumption: Indicates the total power consumption in watts (W).
5. System Version Information: System version information.
