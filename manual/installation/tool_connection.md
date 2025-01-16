---
layout: doc
outline: deep
---

# Tool Connection

Secure the tool to the tool flange using four M6 bolts(Standard: ISO 9409-1-50-4-M6).

- Tools and M6 bolts are not included in the product.
- The connection methods may be different between tools. Please contact the tool manufacturer for further details.

![missing](/manual/common/installation/5-1.png)

- After fixing the tool to the tool flange, connect the necessary cables to the I/O ports on either the tool I/O or the control box I/O.
- The specifications of the I/O connector located in the tool flange vary depending on the robot model.

### 1. Non-E, E Version

![missing](/manual/common/installation/5-2.png)

- I/O connector A : Sam Woo Electronics/M12 x P0.5 female circular connector, 12pin/SW-10W-12(P)

<div class="center-align th-align td-align">
  <table>
    <tr>
      <th>Port</th>
      <th>Layout<br>(Robot Side)</th>
      <th>Pin No.</th>
      <th>Signal<br>(Non-E Version)</th>
      <th>Color<br>(Thickness)</th>
      <th>Signal<br>(E Version)</th>
      <th>Color<br>(Thickness)</th>
    </tr>
    <tr>
      <td rowspan=12>Tool I/O</td>
      <td rowspan=12>
        <img src="/manual/common/installation/5-3.png" />
      </td>
      <td>1</td>
      <td>Digital Output A</td>
      <td>Brown (AWG22)</td>
      <td>Digital Output A</td>
      <td>White (AWG25)</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Digital Output B</td>
      <td>Blue (AWG22)</td>
      <td>Digital Output B</td>
      <td>Black (AWG25)</td>
    </tr>
    <tr>
      <td>3</td>
      <td>0/12/24 VCC</td>
      <td>Red (AWG22)</td>
      <td>0/12/24 VCC</td>
      <td>Red (AWG25)</td>
    </tr>
    <tr>
      <td>4</td>
      <td>Ground</td>
      <td>Black (AWG22)</td>
      <td>Ground</td>
      <td>Green (AWG25)</td>
    </tr>
    <tr>
      <td>5</td>
      <td>Digital Input A</td>
      <td>White (AWG22)</td>
      <td>Digital Input A</td>
      <td>Yellow (AWG25)</td>
    </tr>
    <tr>
      <td>6</td>
      <td>Digital Input B</td>
      <td>Blue (AWG26)</td>
      <td>Digital Input B</td>
      <td>Brown (AWG25)</td>
    </tr>
    <tr>
      <td>7</td>
      <td>Analog Input A</td>
      <td>Yellow (AWG26)</td>
      <td>Digital Input C</td>
      <td>Blue (AWG25)</td>
    </tr>
    <tr>
      <td>8</td>
      <td>Analog Input B</td>
      <td>Red (AWG26)</td>
      <td>Digital Input D</td>
      <td>Gray (AWG25)</td>
    </tr>
    <tr>
      <td>9</td>
      <td>RS485+</td>
      <td>Gray (AWG26)</td>
      <td>RS485+</td>
      <td>Orange (AWG25)</td>
    </tr>
    <tr>
      <td>10</td>
      <td>RS485-</td>
      <td>Purple (AWG26)</td>
      <td>RS485-</td>
      <td>Purple (AWG25)</td>
    </tr>
    <tr>
      <td>11</td>
      <td>Common Ground</td>
      <td>Black (AWG26)</td>
      <td>Digital Input E</td>
      <td>Pink (AWG25)</td>
    </tr>
    <tr>
      <td>12</td>
      <td>Common Ground</td>
      <td>Green (AWG26)</td>
      <td>Digital Input F</td>
      <td>Natural Color (AWG25)</td>
    </tr>
  </table>
</div>

### 2. U Version

![missing](/manual/common/installation/5-2-2.png)

- I/O connector A : Binder / M8 male panel mount connector, 8pin / 76 6319 1111 00008-0200
- I/O connector B : Binder / M8 female panel mount connector, 8pin / 76 6618 1111 00008-0200

<div class="center-align th-align td-align">
  <table>
    <tr>
      <th>Port</th>
      <th>Layout<br>(Robot Side)</th>
      <th>Pin No.</th>
      <th>U Version<br>A Port</th>
      <th>U Version<br>B Port</th>
      <th>Color (A=B)</th>
    </tr>
    <tr>
      <td rowspan=8>Tool I/O</td>
      <td rowspan=8>
        <div class="center-align">
          <img src="/manual/common/installation/5-4.png" />
          <label>A: Robot=Male</label>
          <img src="/manual/common/installation/5-5.png" />
          <label>B: Robot=Female</label>
        </div>
      </td>
      <td>1</td>
      <td>D+(RS485+)</td>
      <td>NC</td>
      <td>White</td>
    </tr>
    <tr>
      <td>2</td>
      <td>D-(RS485-)</td>
      <td>NC</td>
      <td>Brown</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Digital Input 1 (PNP)</td>
      <td>Digital Input 3 (PNP)</td>
      <td>Green</td>
    </tr>
    <tr>
      <td>4</td>
      <td>Digital Input 0 (PNP)</td>
      <td>Digital Input 2 (PNP)</td>
      <td>Yellow</td>
    </tr>
    <tr>
      <td>5</td>
      <td>Power(+)</td>
      <td>Power(+)</td>
      <td>Grey</td>
    </tr>
    <tr>
      <td>6</td>
      <td>Digital Output 1 (PNP)</td>
      <td>Digital Input 5 (PNP)</td>
      <td>Pink</td>
    </tr>
    <tr>
      <td>7</td>
      <td>Digital Output 0 (PNP)</td>
      <td>Digital Input 4 (PNP)</td>
      <td>Blue</td>
    </tr>
    <tr>
      <td>8</td>
      <td>Ground (-)</td>
      <td>Ground (-)</td>
      <td>Red</td>
    </tr>
  </table>
</div>

- Non-E version, E Version, and U Version have different tool flange specifications.
- [Common Content] Internal power supply can be set to 0V, 12V, and 24V on the I/O tab of the GUI.
  <div class="center-align th-align td-align">
    <table>
      <tr>
        <th>-</th>
        <th>Min</th>
        <th>Nominal</th>
        <th>Max</th>
        <th>Unit</th>
      </tr>
      <tr>
        <th>Supply voltage in 24V mode</th>
        <td>-</td>
        <td>24</td>
        <td>-</td>
        <td>V</td>
      </tr>
      <tr>
        <th>Supply voltage in 12V mode</th>
        <td>-</td>
        <td>12</td>
        <td>-</td>
        <td>V</td>
      </tr>
      <tr>
        <th>Supply current in both modes</th>
        <td>-</td>
        <td>-</td>
        <td>2000</td>
        <td>mA</td>
      </tr>
    </table>
  </div>

- [Non-E Version] The tool digital output is applied in the NPN method, when the digital output is enabled, the connection of the port leads to a ground (GND).<br>
  When disabled, the output port is open (open-collector/open-drain), the electrical specifications are as follows.
  <div class="center-align th-align td-align">
    <table>
      <tr>
        <th>Non-E Version</th>
        <th>Min</th>
        <th>Nominal</th>
        <th>Max</th>
        <th>Unit</th>
      </tr>
      <tr>
        <th>Open voltage</th>
        <td>0</td>
        <td>-</td>
        <td>24</td>
        <td>V</td>
      </tr>
      <tr>
        <th>Current via GND</th>
        <td>0</td>
        <td>-</td>
        <td>2000</td>
        <td>mA</td>
      </tr>
    </table>
  </div>
- [E, U Version] The tool digital output is applied in the NPN method, when the digital output is enabled, the connection of the port leads to the VCC.<br>
  When disabled, the output port is open (open-collector/open-drain), the electrical specifications are as follows.
  <div class="center-align th-align td-align">
    <table>
      <tr>
        <th>E, U Version</th>
        <th>Min</th>
        <th>Nominal</th>
        <th>Max</th>
        <th>Unit</th>
      </tr>
      <tr>
        <th>Open voltage</th>
        <td>0</td>
        <td>-</td>
        <td>24</td>
        <td>V</td>
      </tr>
      <tr>
        <th>Current via VCC</th>
        <td>0</td>
        <td>-</td>
        <td>50</td>
        <td>mA</td>
      </tr>
    </table>
  </div>

### 3. Non-E Version Usage Examples

- The image shown below illustrates how to turn on/off a load with 12V or 24V. The voltage level can be specified in the Tool Out block.

![missing](/manual/common/installation/5-6.png)

:::tip
It is strongly recommended to use a diode to protect the tool using an inductive load.
:::

![missing](/manual/common/installation/5-7.png)

- The tools digital inputs use PNP and pull-down resistors. Therefore, when the input port is not connected (floating), the corresponding input port is read as low (0). Electrical specifications are as follows.
  <div class="center-align th-align td-align">
    <table>
      <tr>
        <th>-</th>
        <th>Min</th>
        <th>Nominal</th>
        <th>Max</th>
        <th>Unit</th>
      </tr>
      <tr>
        <th>Input Voltage</th>
        <td>0</td>
        <td>-</td>
        <td>24</td>
        <td>V</td>
      </tr>
      <tr>
        <th>Logic Low-Voltage</th>
        <td>-</td>
        <td>-</td>
        <td>9</td>
        <td>V</td>
      </tr>
      <tr>
        <th>Logic High-Voltage</th>
        <td>10</td>
        <td>-</td>
        <td>-</td>
        <td>V</td>
      </tr>
    </table>
  </div>

- The figure shown below illustrates how to use the digital input for a simple switch.

  ![missing](/manual/common/installation/5-8.png)

- The tool analog input measures the voltage in a non-differential manner. The measurement categories are as follows.
  <div class="center-align th-align td-align">
    <table>
      <tr>
        <th>-</th>
        <th>Min</th>
        <th>Nominal</th>
        <th>Max</th>
        <th>Unit</th>
      </tr>
      <tr>
        <th>Input Voltage</th>
        <td>0</td>
        <td>-</td>
        <td>10</td>
        <td>V</td>
      </tr>
      <tr>
        <th>Resolution</th>
        <td>-</td>
        <td>12</td>
        <td>-</td>
        <td>bit</td>
      </tr>
    </table>
  </div>

- The figure below shows how to connect an analog sensor with non-differential voltage output characteristics to the tool flange.

  ![missing](/manual/common/installation/5-9.png)

- The figure below shows how to connect an analog sensor with differential voltage output characteristics to the tool flange.<br>
  Connecting the negative output of the sensor to GND (ground) works the same as the non-differential light sensor.

  ![missing](/manual/common/installation/5-10.png)

### 4. E Version, U Version Usage Examples

- To use the tool digital output, the load is turned on using a 12V or 24V power supply as shown below.<br>
  You can define the output voltage in the Tool Out block.

  ![missing](/manual/common/installation/5-11.png)

:::tip
It is strongly recommended to use a diode to protect the tool using an inductive load.
:::

![missing](/manual/common/installation/5-12.png)

- The tool digital input is applied in the PNP manner. Therefore, if there is no connection to the input terminal (floating), the input port is read as Low, 0). The electrical specifications are as follows.
  <div class="center-align th-align td-align">
    <table>
      <tr>
        <th>-</th>
        <th>Min</th>
        <th>Nominal</th>
        <th>Max</th>
        <th>Unit</th>
      </tr>
      <tr>
        <th>Input Voltage</th>
        <td>0</td>
        <td>-</td>
        <td>24</td>
        <td>V</td>
      </tr>
      <tr>
        <th>Logic Low-Voltage</th>
        <td>-</td>
        <td>-</td>
        <td>3</td>
        <td>V</td>
      </tr>
      <tr>
        <th>Logic High-Voltage</th>
        <td>4</td>
        <td>-</td>
        <td>-</td>
        <td>V</td>
      </tr>
    </table>
  </div>

- To use the tool digital input, the figure below shows how to connect simple buttons.

  ![missing](/manual/common/installation/5-13.png)

- E Version and U Version do not support tool analog input.

<div class="warning custom-block">
  <p class="custom-block-title">Caution</p>
  <ol>
    <li>For further details regarding technical specification and wire connection, please refer to Appendix D.</li>
    <li>The cross-sectional view related to the tool flange is illustrated in Appendix C.</li>
  </ol>
  <p>The tool flange supports RS485 serial communication and supports the following serial communication standard.</p>
  <table class="th-align td-align">
    <tr>
      <th>Baud-Rate</th>
      <td>9600, 19200, 38400, 57600, 115200, 1M</td>
    </tr>
    <tr>
      <th>Stop Bit</th>
      <td>1,2</td>
    </tr>
    <tr>
      <th>Parity</th>
      <td>None, Even, Odd</td>
    </tr>
  </table>
</div>
