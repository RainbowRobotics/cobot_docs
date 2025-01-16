---
layout: doc
outline: deep
---

# Tool Flange Digital Input

<div class="warning custom-block">
    <p class="custom-block-title">Warning</p>
    <ul>
        <li>
            Before connecting RB Tool Flange I / O input port, the power should be cut off.
        </li>
        <li>
            The electrical drawing below is for Non-E type only.
        </li>
    </ul>
</div>

### 1. Digital input internal circuit diagram

![missing](/manual/en/appendix/d-3/1-1.png)

Device configuration for Tool Flange Digital input.

<div style="display: flex;">
    <div>
        <img src="/manual/en/appendix/d-3/1-2.png" />
        <br>
        <figcaption style="text-align: center;">(1) Non-E Version Robot</figcaption>
    </div>
    <div>
        <img src="/manual/en/appendix/d-3/1-3.png" />
        <br>
        <figcaption style="text-align: center;">(2) E Version Robot</figcaption>
    </div>
</div>

Exposed connector wiring diagram. The wiring diagram will be divided as shown above according to the robot version.

### 2. Digital input characteristics

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
        <th>DIA, ... , DIF</th>
        <td>Voltage</td>
        <td>0</td>
        <td>-</td>
        <td>24</td>
        <td>V</td>
    </tr>
    <tr>
        <th>DIA, ... , DIF</th>
        <td>OFF region</td>
        <td>0</td>
        <td>-</td>
        <td>9</td>
        <td>V</td>
    </tr>
    <tr>
        <th>DIA, ... , DIF</th>
        <td>ON region</td>
        <td>0</td>
        <td>-</td>
        <td>24</td>
        <td>V</td>
    </tr>
</table>

<u>This is a specification that applies only to Tool Flange Digital input <br>
(At this time, only DIA and DIB for Non-E version Robot are applied.)</u>

### 3. Test environment

Digital input device test was conducted using power supply, and the following configuration was tested.

![missing](/manual/en/appendix/d-3/3-1.png)

<div style="display: flex;">
    <div>
        <img src="/manual/en/appendix/d-3/3-2.png" />
        <br>
        <figcaption style="text-align: center;">Non-E Version</figcaption>
    </div>
    <div>
        <img src="/manual/en/appendix/d-3/3-3.png" />
        <br>
        <figcaption style="text-align: center;">E Version</figcaption>
    </div>
</div>

### 4. How to use PNP sensor

(Ex source: https://blog.naver.com/mjg5080/97380010)

![missing](/manual/en/appendix/d-3/4.png)

PNP sensor can be used in the same way as the above connection.<br>
<u>This applies equally to the Control Box Digital input.</u>
