---
layout: doc
outline: deep
---

# Rainbow x Icevan v1.1

### 1. Configuration & Setting

![missing](/technical_docs/common/device_icevan/1-1.png)

- Connect a commercial USB-RS232 (USB-serial) device to the control box of Rainbow Robot
- Communication lines between devices should be cross-connected / Connect the GND (ground) wires on both sides. (Common ground)
- Icevan equipment uses serial communication speed/Baud rate as 9600 bps, so set the rainbow control box accordingly.

![missing](/technical_docs/common/device_icevan/1-2.png)

### 2. Variable Description

::: warning

- In the table below, the information in the yellow area is the information transmitted by Icevan (ice machine).
- The values stored in the variables in the yellow area contain the information that the Icevan transmits to the Rainbow-ControlBox through communication.
  :::

<table class="th-align">
    <tr>
        <th>Variable Name</th>
        <th>Description</th>
        <th>Ref. Icevan Manual</th>
    </tr>
    <tr>
        <td class="bg-none">ICE_INFO_CONNECTED</td>
        <td>Whether it is communicating with the Icevan</td>
        <td></td>
    </tr>
    <tr>
        <td class="bg-none">ICE_INFO_REQUESTING</td>
        <td>*RB developer only</td>
        <td></td>
    </tr>
    <tr>
        <td class="bg-none">ICE_INFO_USING</td>
        <td>*RB developer only</td>
        <td></td>
    </tr>
    <tr>
        <td class="bg-none">ICE_INFO_VECSIZE</td>
        <td>*RB developer only</td>
        <td></td>
    </tr>
    <tr>
        <td>ICE_INFO_MODE_COMM</td>
        <td>1:Communication mode / 0:Normal mode</td>
        <td>Chap. 1</td>
    </tr>
    <tr>
        <td>ICE_INFO_MODE_CUP</td>
        <td>1:Ignore Cup depart / 0: Stop Ice-out if Cupdepart</td>
        <td>Chap. 1</td>
    </tr>
    <tr>
        <td>ICE_INFO_TIME_ICE</td>
        <td>Last Ice-out time</td>
        <td></td>
    </tr>
    <tr>
        <td>ICE_INFO_TIME_WATER</td>
        <td>Last Water-out time</td>
        <td></td>
    </tr>
    <tr>
        <td>ICE_INFO_AMBI_LOW</td>
        <td>Lower limit for ambient temperature setting</td>
        <td>Chap. 4</td>
    </tr>
    <tr>
        <td>ICE_INFO_AMBI_HIGH</td>
        <td>Upper limit for ambient temperature setting</td>
        <td>Chap. 4</td>
    </tr>
    <tr>
        <td>ICE_INFO_TEMP_AMBI</td>
        <td>Temperature : Ambient</td>
        <td>Chap. 5</td>
    </tr>
    <tr>
        <td>ICE_INFO_TEMP_EVAPO</td>
        <td>Temperature : Evaporator</td>
        <td>Chap. 5-1</td>
    </tr>
    <tr>
        <td>ICE_INFO_TEMP_CONDEN</td>
        <td>Temperature : Condensor</td>
        <td>Chap. 5-1</td>
    </tr>
    <tr>
        <td>ICE_STATE_LAST_ICE_NO</td>
        <td>If ice is not detected in the previous ice-out</td>
        <td>Manual: ignore this</td>
    </tr>
    <tr>
        <td>ICE_STATE_LAST_ICE_YES</td>
        <td>If ice is detected in the previous ice-out</td>
        <td>Manual: ignore this</td>
    </tr>
    <tr>
        <td>ICE_STATE_COMP_WORK</td>
        <td>Whether the compressor works (1=working)</td>
        <td>Page 3 upper table</td>
    </tr>
    <tr>
        <td>ICE_STATE_MOTOR_WORK</td>
        <td>Whether the gear-motor works (1=working)</td>
        <td>Page 3 upper table</td>
    </tr>
    <tr>
        <td>ICE_STATE_OUT_SOL</td>
        <td>Ice-out SOL detection (1=detected)</td>
        <td>Page 3 upper table</td>
    </tr>
    <tr>
        <td>ICE_STATE_CUP_LEVEL</td>
        <td>Cup lever detection (1=detected)</td>
        <td>Page 3 upper table</td>
    </tr>
    <tr>
        <td>ICE_STATE_COMM_MODE</td>
        <td>1 if communication mode</td>
        <td>Page 3 upper table</td>
    </tr>
    <tr>
        <td>ICE_STATE_FULL_ICE</td>
        <td>Ice-Full signal (1 = Full Ice)</td>
        <td>Page 3 upper table</td>
    </tr>
    <tr>
        <td>ICE_STATE_ERR_1</td>
        <td>*RB developer only</td>
        <td></td>
    </tr>
    <tr>
        <td>ICE_STATE_ERR_2</td>
        <td>*RB developer only</td>
        <td></td>
    </tr>
    <tr>
        <td>ICE_STATE_ERR_3</td>
        <td>*RB developer only</td>
        <td></td>
    </tr>
    <tr>
        <td>ICE_STATE_ERR_4</td>
        <td>*RB developer only</td>
        <td></td>
    </tr>
    <tr>
        <td>ICE_STATE_ERR_CODE</td>
        <td>Error code (0 = Normal)</td>
        <td>Page 3 lower table</td>
    </tr>
    <tr>
        <td>ICE_STATE_RD</td>
        <td>1=Ready to IceOut / 0=IceOut done or Timeout</td>
        <td>Page 3 middle table</td>
    </tr>
</table>

### 3. Function Description

<br>

#### 3.1 icevan_update_start(#)

- icevan_update_start(#)<br>

  Start requesting status/setting information from the ice machine

  Input :

  > 1: Data request Start<br>
  > 0: Data request End

  Example :

  ```
  icevan_update_start(1)
  ```

#### 3.2 icevan_set_mode(#, #)

- icevan_set_mode(#, #)<br>

  Select the operation mode of the ice machine (Ref. Icevan Manual Chap.1)

  Input :

  > First value:<br>
  > 1: Communication Mode (via RS232)<br>
  > 0: Normal Mode

  > Second value:<br>
  > 1: Ignore cup-depart (Ice will be out even if the cup is departed)<br>
  > 0: Stop the ice-out when the cup is departed

  Example :

  ```
  icevan_set_mode(1, 1) # Set the operation mode of the ice machine to communication mode
  ```

#### 3.3 icevan_set_timeout(#)

- icevan_set_timeout(#)<br>

  Ice dispensing timeout setting (timeout when ice is not removed) (Ref. Icevan Manual Chap.6)

  Input :

  > Time (Unit: second)

  Example :

  ```
  icevan_set_timeout(600)
  ```

#### 3.4 icevan_set_airtemp(#, #)

- icevan_set_airtemp(#, #)<br>

  Set for the ambient temperature limit (lower/upper settings) (Ref. Icevan Manual Chap.8)

  Input :

  > First value : Lower temperature setting : (0~10)<br>
  > Second value : Upper temperature setting : (40~70)

  Example :

  ```
  icevan_set_airtemp(5, 65)
  ```

#### 3.5 icevan_out(#, #)

- icevan_out(#, #)<br>

  Most core function. Ice/Water output function (Ref. Icevan Manual Chap.2)

  Input :

  > First value : Time for ice-out (Unit: second)<br>
  > Second value : Time for water-out (Unit: second)

  Example :

  ```
  icevan_out(5.7, 0) # Make Ice during 5.7 second and water during 0 second
  ```

#### 3.6 icevan_reset()

- icevan_reset()<br>

  Reset machine (Ref. Icevan Manual Chap.7)

  Input :

  > None

  Example :

  ```
  icevan_reset()
  ```

#### 3.7 icevan_clear()

- icevan_clear()<br>

  Clear all information (As explained by Ice Van manual, this function exists but doesn't work.)

  Input :

  > None

  Example :

  ```
  icevan_clear()
  ```

<style scoped>
tr > td:first-child:not(.bg-none) {
  background-color: #f1b840;
}
</style>
