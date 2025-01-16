---
layout: doc
outline: deep
---

# Tool Flange Digital Output

<div class="warning custom-block">
    <p class="custom-block-title">Warning</p>
    <ul>
        <li>
            Before connecting the Tool Flange I/O output port, the power should be cut off.
        </li>
        <li>
            The electrical drawing below is for Non-E type only.
        </li>
    </ul>
</div>

### 1. Digital output internal circuit diagram

![missing](/manual/en/appendix/d-4/1-1.png)

Device composition for Tool Flange Digital output [DOA, DOB].

<div style="display: flex;">
    <div>
        <img src="/manual/en/appendix/d-4/1-2.png" />
        <br>
        <figcaption style="text-align: center;">(1) Non-E Version Robot</figcaption>
    </div>
    <div>
        <img src="/manual/en/appendix/d-4/1-3.png" />
        <br>
        <figcaption style="text-align: center;">(2) E Version Robot</figcaption>
    </div>
</div>

External connector wiring diagram. The wiring diagram will be divided as shown above according to the robot version.

### 2. Digital output characteristics

<table>
    <tr>
        <th>Terminals</th>
        <th>Parameter</th>
        <th>Min</th>
        <th>Typ</th>
        <th>Max</th>
        <th>Unit</th>
    </tr>
    <tr>
        <th>DOA, DOB</th>
        <td>Voltage</td>
        <td>0</td>
        <td>12/24</td>
        <td>24</td>
        <td>V</td>
    </tr>
    <tr>
        <th>DOA, DOB</th>
        <td>Current Ver 1.</td>
        <td>0</td>
        <td>150</td>
        <td>700*</td>
        <td>mA</td>
    </tr>
    <tr>
        <th>DOA, DOB</th>
        <td>Current Ver 2.</td>
        <td>0</td>
        <td>2000</td>
        <td>2000</td>
        <td>mA</td>
    </tr>
</table>
*Tsp = 25ºC; pulsed; tp <= 10µs<br>

<u>This specification applies only to Tool Flange Digital outputs A and B.</u><br>
<u>As of July 24, 2019, version of RB5 shipped out is Current Ver 1.</u>

### 3. Test Environment

Digital output device test was conducted using 24V dc LED and the following configuration was tested.

![missing](/manual/en/appendix/d-4/3-1.png)

<div style="display: flex;">
    <div>
        <img src="/manual/en/appendix/d-4/3-2.png" />
        <br>
        <figcaption style="text-align: center;">Non-E Version</figcaption>
    </div>
    <div>
        <img src="/manual/en/appendix/d-4/3-3.png" />
        <br>
        <figcaption style="text-align: center;">E Version</figcaption>
    </div>
</div>

The following example is shown in this manual.

![missing](/manual/en/appendix/d-4/3-4.png)

### 4. Precautions when using

Digital output device is NPN type but has internal 10K pullup resistor.<br>

Most devices (LEDs, solenoid valves, relays) can be used in the test environment No. 3 or with the digital signal application function on commercial grippers.<br>
However, they may not work in the environment using the same voltage distribution as Rainbow Robotics’ tool flange digital input devices.

<div class="center-align">
    <img src="/manual/en/appendix/d-4/4-1.png" />
    <br>
    <figcaption><u>When Rainbow Robotics’ digital output is connected to the digital input</u></figcaption>
</div>

<br>

<div class="center-align">
    <img src="/manual/en/appendix/d-4/4-2.png" />
    <br>
    <figcaption><u>Low Digital output</u></figcaption>
</div>

<br>
Digital input is output low with 0V input.

<div class="center-align">
    <br>
    <img src="/manual/en/appendix/d-4/4-3.png" />
    <br>
    <figcaption><u>Digital output High</u></figcaption>
</div>

<u>Digital input may not be recognized depending on the resistance value.</u><br>
For the diagram above, if the voltage applied to MCU is EVCC 24Vdc, about 2V is applied to it and is detected as Low.<br>

If users MUST operate as above diagram, digital input stage resistance ratio adjustment is necessary.
