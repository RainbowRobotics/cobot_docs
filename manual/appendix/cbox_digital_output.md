---
layout: doc
outline: deep
---

# Control Box Digital Output

<div class="warning custom-block">
    <p class="custom-block-title">Warning</p>
    <ul>
        <li>
            Before connecting the Control Box Digital output port, the power should be turned off.
        </li>
    </ul>
</div>

### 1. Digital output internal circuit diagram [DO00 ~ DO15]

![missing](/manual/en/appendix/d-2/1.png)

Device configuration that performs Control Box Digital output (DO00-DO15).<br>
There is internal GND terminal, and it should be connected to GND of external sensor and equipment to be connected.

### 2. Digital output device usage [DO00 ~ DO15]

![missing](/manual/en/appendix/d-2/2-1.png)

How to use RB Control Box Digital Output Device (DO00-DO15).

![missing](/manual/en/appendix/d-2/2-2.png)

How to use a single digital output.<br>
Vbb power is supplied inside of the control box and its output is the source.

### 3. Digital output characteristics [DO00 ~ DO15]

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
        <th>DO00 ~ DO15</th>
        <td>Voltage</td>
        <td>-</td>
        <td>24</td>
        <td>-</td>
        <td>V</td>
    </tr>
    <tr>
        <th>DO00 ~ DO15</th>
        <td>Current</td>
        <td>0</td>
        <td>-</td>
        <td>1</td>
        <td>A</td>
    </tr>
    <tr>
        <th>DO00 ~ DO15</th>
        <td>Function</td>
        <td>-</td>
        <td>PNP</td>
        <td>-</td>
        <td>Type</td>
    </tr>
</table>

<u>Single channel 1A is possible, but the total current of all channels must be less than 2A</u>

### 4. Test environment

Digital output device test was conducted using 24Vdc LED and the following configuration was tested.

![missing](/manual/en/appendix/d-2/4.png)
