---
layout: doc
outline: deep
---

# How to execute a program using Modbus communication v6.5

<div class="center-align th-align td-align">
   <table>
      <tr>
         <th colspan="5">Word Address</th>
      </tr>
      <tr>
         <th>Address</th>
         <th>Function</th>
         <th>Read</th>
         <th>Write</th>
         <th>Comments</th>
      </tr>
      <tr>
         <td>50</td>
         <td>Is Robot Activated</td>
         <td>O</td>
         <td>X</td>
         <td>0 or 1</td>
      </tr>
      <tr>
         <td>51</td>
         <td>Is Real-mode</td>
         <td>O</td>
         <td>X</td>
         <td>0 or 1</td>
      </tr>
      <tr>
         <td>52</td>
         <td>Is Collision Detected</td>
         <td>O</td>
         <td>X</td>
         <td>0 or 1</td>
      </tr>
      <tr>
         <td>53</td>
         <td>Is Robot arm power engaged</td>
         <td>O</td>
         <td>X</td>
         <td>0 or 1</td>
      </tr>
      <tr>
         <td>54</td>
         <td>Is Direct teaching mode</td>
         <td>O</td>
         <td>X</td>
         <td>0 or 1</td>
      </tr>
      <tr>
         <td>55</td>
         <td>Is Robot moving</td>
         <td>O</td>
         <td>X</td>
         <td>0 or 1</td>
      </tr>
      <tr>
         <td>56</td>
         <td>Is Pause state</td>
         <td>O</td>
         <td>X</td>
         <td>0 or 1</td>
      </tr>
      <tr>
         <td>57</td>
         <td>Is Teaching pendant is connected</td>
         <td>O</td>
         <td>X</td>
         <td>0 or 1</td>
      </tr>
      <tr>
         <td>58</td>
         <td>Is Program Run</td>
         <td>O</td>
         <td>X</td>
         <td>0 or 1</td>
      </tr>
      <tr>
         <td>59</td>
         <td>Is No-Arc mode is on</td>
         <td>O</td>
         <td>X</td>
         <td>0 or 1</td>
      </tr>
      <tr>
         <td>60</td>
         <td>Is EMG button released</td>
         <td>O</td>
         <td>X</td>
         <td>0 or 1</td>
      </tr>
      <tr>
         <td>61</td>
         <td>Is First Program Run</td>
         <td>O</td>
         <td>X</td>
         <td>0 or 1</td>
      </tr>
   </table>
   <figcaption>[ State of the robot arm ]</figcaption>
</div>

<br>

<div class="center-align th-align td-align">
   <table>
      <tr>
         <th colspan="5">Word Address</th>
      </tr>
      <tr>
         <th>Address</th>
         <th>Function</th>
         <th>Read</th>
         <th>Write</th>
         <th>Comments</th>
      </tr>
      <tr>
         <td>100</td>
         <td>Command: Start Program Once</td>
         <td>O</td>
         <td>O</td>
         <td>Rising Edge is command</td>
      </tr>
      <tr>
         <td>101</td>
         <td>Command: Start Program Repeat</td>
         <td>O</td>
         <td>O</td>
         <td>Rising Edge is command</td>
      </tr>
      <tr>
         <td>102</td>
         <td>Command: Pause Program</td>
         <td>O</td>
         <td>O</td>
         <td>Rising Edge is command</td>
      </tr>
      <tr>
         <td>103</td>
         <td>Command: Stop Program</td>
         <td>O</td>
         <td>O</td>
         <td>Rising Edge is command</td>
      </tr>
      <tr>
         <td>104</td>
         <td>Command: Resume from pause</td>
         <td>O</td>
         <td>O</td>
         <td>Rising Edge is command</td>
      </tr>
      <tr>
         <td>105</td>
         <td>Command: Resume from collision</td>
         <td>O</td>
         <td>O</td>
         <td>Rising Edge is command</td>
      </tr>
      <tr>
         <td>106</td>
         <td>Command: Load default Program</td>
         <td>O</td>
         <td>O</td>
         <td>Rising Edge is command</td>
      </tr>
      <tr>
         <td>107</td>
         <td>Command: Robot Arm activation</td>
         <td>O</td>
         <td>O</td>
         <td>Rising Edge is command</td>
      </tr>
      <tr>
         <td>108</td>
         <td>Command: Change to Real-mode</td>
         <td>O</td>
         <td>O</td>
         <td>Rising Edge is command</td>
      </tr>
      <tr>
         <td>109</td>
         <td>Command: Power off the robot arm</td>
         <td>O</td>
         <td>O</td>
         <td>Rising Edge is command</td>
      </tr>
   </table>
   <figcaption>[ Basic command for operating the robot arm ]</figcaption>
</div>

1. Activating the robot arm

   - Modbus Address 107(Robot Arm activation) <span style="color: blue">Write</span> <br>
     <span style="color: red"><b>⇒</b></span> Modbus Address 50(Is Robot Activated) <span style="color: orange">Read</span>

2. Converting to Real-mode

   - Modbus Address 108(Change to Real-mode) <span style="color: blue">Write</span> <br>
     <span style="color: red"><b>⇒</b></span> Modbus Address 51(Is Real-mode) <span style="color: orange">Read</span>

3. Start Program

   - Modbus Address 100(Start Program Once) <span style="color: blue">Write</span> (In case of executing the program once) <br>
     <span style="color: red"><b>⇒</b></span> Modbus Address 58(Is Program Run) <span style="color: orange">Read</span>
   - Modbus Address 101(Start Program Repeat) <span style="color: blue">Write</span> (In case of executing the program repeatedly) <br>
     <span style="color: red"><b>⇒</b></span> Modbus Address 58(Is Program Run) <span style="color: orange">Read</span>

4. Stop Program

   - Modbus Address 103(Stop Program) <span style="color: blue">Write</span> <br>
     <span style="color: red"><b>⇒</b></span> Modbus Address 58(Is Program Run) <span style="color: orange">Read</span>

5. Power off the robot arm

   - Modbus Address 109(Power off the robot arm) <span style="color: blue">Write</span> <br>
     <span style="color: red"><b><b>⇒</b></b></span> Modbus Address 50(Is Robot Activated) <span style="color: orange">Read</span>

::: danger
In case of writing addresses 100 to 109, you must write the same value as the address.<br>
In case of re-writing a command that has already been written, it must be overwritten with a different value before sending.
:::

<style scoped>
td:nth-child(2) {
   text-align: left;
}
</style>
