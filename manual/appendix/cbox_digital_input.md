---
layout: doc
outline: deep
---

# Conrtol Box Digital Input

<div class="warning custom-block">
    <p class="custom-block-title">Warning</p>
    <ul>
        <li>
            Before connecting Control Box Digital input port, the power should be cut off.
        </li>
    </ul>
</div>

### 1. Internal Circuit Diagram of Digital Input [DI00 ~ DI15]

![missing](/manual/en/appendix/d-1/1.png)

Device configuration that receives Control Box Digital input (DI00-DI15).<br>
There is an internal 24V supply terminal. A malfunction will occur if an external 24V is supplied.

### 2. How to use digital input elements [DI00 ~ DI15]

![missing](/manual/en/appendix/d-1/2-1.png)

How to use RB Control Box Digital input device (DI00-DI15).

![missing](/manual/en/appendix/d-1/2-2.png)

Voltage / current characteristic curve of digital input signal.

### 3. Digital input characteristics [DI00 ~ DI15]

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
        <th>DI00 ~ DI15</th>
        <td>Voltage</td>
        <td>-3</td>
        <td>-</td>
        <td>30</td>
        <td>V</td>
    </tr>
    <tr>
        <th>DI00 ~ DI15</th>
        <td>OFF region</td>
        <td>-3</td>
        <td>-</td>
        <td>5</td>
        <td>V</td>
    </tr>
    <tr>
        <th>DI00 ~ DI15</th>
        <td>ON region</td>
        <td>11</td>
        <td>-</td>
        <td>30</td>
        <td>V</td>
    </tr>
    <tr>
        <th>DI00 ~ DI15</th>
        <td>Current (11-30V)</td>
        <td>2</td>
        <td>-</td>
        <td>15</td>
        <td>mA</td>
    </tr>
    <tr>
        <th>DI00 ~ DI15</th>
        <td>Function</td>
        <td>-</td>
        <td>PNP+</td>
        <td>-</td>
        <td>Type</td>
    </tr>
    <tr>
        <th>DI00 ~ DI15</th>
        <td>IEC 61131-2</td>
        <td>-</td>
        <td>1</td>
        <td>-</td>
        <td>Type</td>
    </tr>
</table>

<u>This specification applies only to digital input 0 to digital input 15.</u>

### 4. Internal Circuit Diagram of Digital Input [DI16 - DI17]

![missing](/manual/en/appendix/d-1/4.png)

Device configuration that receives Control Box Digital input (DI16-DI17).<br>
There is an internal 24V supply terminal. A malfunction occurs when an external 24V is supplied.

### 5. Digital input characteristics [DI16 - DI17]

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
        <th>DI16 - DI17</th>
        <td>Voltage</td>
        <td>0</td>
        <td>-</td>
        <td>25</td>
        <td>V</td>
    </tr>
    <tr>
        <th>DI16 - DI17</th>
        <td>OFF region</td>
        <td>0</td>
        <td>-</td>
        <td>7</td>
        <td>V</td>
    </tr>
    <tr>
        <th>DI16 - DI17</th>
        <td>ON region</td>
        <td>7</td>
        <td>-</td>
        <td>25</td>
        <td>V</td>
    </tr>
    <tr>
        <th>DI16 - DI17</th>
        <td>Function</td>
        <td>-</td>
        <td>PNP+</td>
        <td>-</td>
        <td>Type</td>
    </tr>
</table>

<u>This applies only to digital inputs 16 and 17.</u>

### 6. Testing environment

Digital input device test was conducted using Toggle switch, and the following configuration was tested.

![missing](/manual/en/appendix/d-1/6.png)

### 7. How to use PNP sensor

![missing](/manual/en/appendix/d-1/7.png)

PNP sensor can be used in the same way as above.<br>
<u>This is a specification that applies to all digital inputs.</u>

### 8. How to connect 3-Position Enabling Device

![missing](/manual/en/appendix/d-1/8-1.png)

The initial factory condition is as above, and it is possible to install the operation.<br>
(Source: https://www.motionsolutions.com)

![missing](/manual/en/appendix/d-1/8-2.png)

![missing](/manual/en/appendix/d-1/8-3.png)

![missing](/manual/en/appendix/d-1/8-4.png)

<u>This applies to Enabling Device in accordance with ISO 10218, IEC 60204-1.</u>

### 9. How to connect safety equipment

Safety device wiring using PNP type sensor and Enabling Device such as light curtain and safety door sensor is same as above.
