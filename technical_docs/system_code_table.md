---
layout: doc
outline: deep
---

# RB System Code Table v6.10

### 1. Activation Message Code (A)

<div class="center-align th-align">
  <table>
    <tr>
      <th>A1</th>
      <td>
        <b>Power Checking Fail</b><br>
        Please check the Control Box.
      </td>
    </tr>
    <tr>
      <th>A2</th>
      <td>
        <b>Power Checking Fail</b><br>
        Please check the EMG switch. Or check the Reset button status. Or check the robot-control box cable connection.
      </td>
    </tr>
    <tr>
      <th>A3</th>
      <td>
        <b>Power Checking Fail</b><br>
        Please check the Control Box.
      </td>
    </tr>
    <tr>
      <th>A4</th>
      <td>
        <b>Power Checking Fail</b><br>
        Please check the Control Box.
      </td>
    </tr>
    <tr>
      <th>A5</th>
      <td>
        <b>Device (MC) Checking Fail</b><br>
        Motor Controller check fail. Please check the Robot Connection.
      </td>
    </tr>
    <tr>
      <th>A6</th>
      <td>
        <b>Initialization Fail</b><br>
        Please re-boot the system and try again.
      </td>
    </tr>
    <tr>
      <th>A7</th>
      <td>
        <b>Robot arm Joint Load (torque) Checking failure</b><br>
        Failure in the process of checking the load applied to the robotic arm joint. Check if the load setting is set similar to the actual situation in the Tool menu of the Setup page. Or inspect the robot arm to see if there is a stuck situation with the external environment. When a stuck situation occurs, the situation must be resolved by manually releasing the joint brake.
      </td>
    </tr>
    <tr>
      <th>A8</th>
      <td>
        <b>Device (TPB) Checking Fail</b><br>
        Tool Flange Check Fail! Please check the Robot Connection.
      </td>
    </tr>
    <tr>
      <th>A9</th>
      <td>
        <b>Angle Sync Checking Fail</b><br>
        Please check the Robot mounting settings in the 'Cobot' setup menu.
      </td>
    </tr>
    <tr>
      <th>A10</th>
      <td>
        <b>Error Code (MT_ERR)</b><br>
        Please execute the 'Joint Maintenance/Recovery' function in the 'Utility' setup menu.
      </td>
    </tr>
    <tr>
      <th>A11</th>
      <td>
        <b>System Error (CODE: NONI_ERR)</b><br>
        Contact the manufacturer.
      </td>
    </tr>
    <tr>
      <th>A12</th>
      <td>
        <b>System Error (CODE: GPSW_ERR)</b><br>
        Please check DIN 16/17 (Protective Stop Switch) connection.
      </td>
    </tr>
    <tr>
      <th>A13</th>
      <td>
        <b>Fatal Error (CODE: 48SW_ERR)</b><br>
        Please check 48V Switch (Control box front side) Status.
      </td>
    </tr>
    <tr>
      <th>A14</th>
      <td>
        <b>Initialization Stop (CODE: TCH_ERR)</b><br>
        Don't touch robot during initialization process Do not press direct-teaching button during initialization.
      </td>
    </tr>
    <tr>
      <th>A15</th>
      <td>
        <b>Fail to read Robot Arm information</b><br>
        Perform the robot arm activation process again. The connected robot arm and the robot model information set in the control box do not match. If the problem persists, contact the manufacturer.
      </td>
    </tr>
    <tr>
      <th>A16</th>
      <td>
        <b>Unable to activate (initiate) Robot ARM</b><br>
        Re-start the whole system. Re-boot the Control Box.
      </td>
    </tr>
    <tr>
      <th>A17</th>
      <td>
        <b>Unable to activate (initiate) Robot ARM</b><br>
        Joint encoder angle is not in the boundary. Check the joint angle status.
      </td>
    </tr>
    <tr>
      <th>A18</th>
      <td>
        <b>Unable to run Robot Activation</b><br>
        Activation process is under-going by other process !!
      </td>
    </tr>
    <tr>
      <th>A19</th>
      <td>
        <b>Activation is not required</b><br>
        Robot Arm is already activated !!
      </td>
    </tr>
    <tr>
      <th>A20</th>
      <td>
        <b>Unable to activate (initiate) Robot ARM</b><br>
        Joint 0 (Base) encoder angle is not in the boundary. Angle is over than positive (+) limit. Release the joint brake and turn it to negative (-) direction ! You can check the current angle value in Log.
      </td>
    </tr>
    <tr>
      <th>A21</th>
      <td>
        <b>Unable to activate (initiate) Robot ARM</b><br>
        Joint 1 (Shoulder) encoder angle is not in the boundary. Angle is over than positive (+) limit. Release the joint brake and turn it to negative (-) direction ! You can check the current angle value in Log.
      </td>
    </tr>
    <tr>
      <th>A22</th>
      <td>
        <b>Unable to activate (initiate) Robot ARM</b><br>
        Joint 2 (Elbow) encoder angle is not in the boundary. Angle is over than positive (+) limit. Release the joint brake and turn it to negative (-) direction ! You can check the current angle value in Log.
      </td>
    </tr>
    <tr>
      <th>A23</th>
      <td>
        <b>Unable to activate (initiate) Robot ARM</b><br>
        Joint 3 (Wrist 1) encoder angle is not in the boundary. Angle is over than positive (+) limit. Release the joint brake and turn it to negative (-) direction ! You can check the current angle value in Log.
      </td>
    </tr>
    <tr>
      <th>A24</th>
      <td>
        <b>Unable to activate (initiate) Robot ARM</b><br>
        Joint 4 (Wrist 2) encoder angle is not in the boundary. Angle is over than positive (+) limit. Release the joint brake and turn it to negative (-) direction ! You can check the current angle value in Log.
      </td>
    </tr>
    <tr>
      <th>A25</th>
      <td>
        <b>Unable to activate (initiate) Robot ARM</b><br>
        Joint 5 (Wrist 3) encoder angle is not in the boundary. Angle is over than positive (+) limit. Release the joint brake and turn it to negative (-) direction ! You can check the current angle value in Log.
      </td>
    </tr>
    <tr>
      <th>A26</th>
      <td>
        <b>Unable to activate (initiate) Robot ARM</b><br>
        Joint 0 (Base) encoder angle is not in the boundary. Angle is over than negative (-) limit. Release the joint brake and turn it to positive (+) direction ! You can check the current angle value in Log.
      </td>
    </tr>
    <tr>
      <th>A27</th>
      <td>
        <b>Unable to activate (initiate) Robot ARM</b><br>
        Joint 1 (Shoulder) encoder angle is not in the boundary. Angle is over than negative (-) limit. Release the joint brake and turn it to positive (+) direction ! You can check the current angle value in Log.
      </td>
    </tr>
    <tr>
      <th>A28</th>
      <td>
        <b>Unable to activate (initiate) Robot ARM</b><br>
        Joint 2 (Elbow) encoder angle is not in the boundary. Angle is over than negative (-) limit. Release the joint brake and turn it to positive (+) direction ! You can check the current angle value in Log.
      </td>
    </tr>
    <tr>
      <th>A29</th>
      <td>
        <b>Unable to activate (initiate) Robot ARM</b><br>
        Joint 3 (Wrist 1) encoder angle is not in the boundary. Angle is over than negative (-) limit. Release the joint brake and turn it to positive (+) direction ! You can check the current angle value in Log.
      </td>
    </tr>
    <tr>
      <th>A30</th>
      <td>
        <b>Unable to activate (initiate) Robot ARM</b><br>
        Joint 4 (Wrist 2) encoder angle is not in the boundary. Angle is over than negative (-) limit. Release the joint brake and turn it to positive (+) direction ! You can check the current angle value in Log.
      </td>
    </tr>
    <tr>
      <th>A31</th>
      <td>
        <b>Unable to activate (initiate) Robot ARM</b><br>
        Joint 5 (Wrist 3) encoder angle is not in the boundary. Angle is over than megative (-) limit. Release the joint brake and turn it to positive (+) direction ! You can check the current angle value in Log.
      </td>
    </tr>
    <tr>
      <th>A32</th>
      <td>
        <b>System Check Fail: Error Code (MT_ERR)</b><br>
        Joint 0 (Base) issue MT/PVL ERR. Please execute the 'Joint Maintenance/Recovery' function in the 'Utility' setup menu.
      </td>
    </tr>
    <tr>
      <th>A33</th>
      <td>
        <b>System Check Fail: Error Code (MT_ERR)</b><br>
        Joint 1 (Shoulder) issue MT/PVL ERR. Please execute the 'Joint Maintenance/Recovery' function in the 'Utility' setup menu.
      </td>
    </tr>
    <tr>
      <th>A34</th>
      <td>
        <b>System Check Fail: Error Code (MT_ERR)</b><br>
        Joint 2 (Elbow) issue MT/PVL ERR. Please execute the 'Joint Maintenance/Recovery' function in the 'Utility' setup menu.
      </td>
    </tr>
    <tr>
      <th>A35</th>
      <td>
        <b>System Check Fail: Error Code (MT_ERR)</b><br>
        Joint 3 (Wrist 1) issue MT/PVL ERR. Please execute the 'Joint Maintenance/Recovery' function in the 'Utility' setup menu.
      </td>
    </tr>
    <tr>
      <th>A36</th>
      <td>
        <b>System Check Fail: Error Code (MT_ERR)</b><br>
        Joint 4 (Wrist 2) issue MT/PVL ERR. Please execute the 'Joint Maintenance/Recovery' function in the 'Utility' setup menu.
      </td>
    </tr>
    <tr>
      <th>A37</th>
      <td>
        <b>System Check Fail: Error Code (MT_ERR)</b><br>
        Joint 5 (Wrist 3) issue MT/PVL ERR. Please execute the 'Joint Maintenance/Recovery' function in the 'Utility' setup menu.
      </td>
    </tr>
    <tr>
      <th>A38</th>
      <td>
        <b>Robot Arm Activation Fail: Device (MC) Checking Fail</b><br>
        Motor Controller check fail. Fail to check Joint 0 (Base) status. Please check the Robot Connection.
      </td>
    </tr>
    <tr>
      <th>A39</th>
      <td>
        <b>Robot Arm Activation Fail: Device (MC) Checking Fail</b><br>
        Motor Controller check fail. Fail to check Joint 1 (Shoulder) status. Please check the Robot Connection.
      </td>
    </tr>
    <tr>
      <th>A40</th>
      <td>
        <b>Robot Arm Activation Fail: Device (MC) Checking Fail</b><br>
        Motor Controller check fail. Fail to check Joint 2 (Elbow) status. Please check the Robot Connection.
      </td>
    </tr>
    <tr>
      <th>A41</th>
      <td>
        <b>Robot Arm Activation Fail: Device (MC) Checking Fail</b><br>
        Motor Controller check fail. Fail to check Joint 3 (Wrist 1) status. Please check the Robot Connection.
      </td>
    </tr>
    <tr>
      <th>A42</th>
      <td>
        <b>Robot Arm Activation Fail: Device (MC) Checking Fail</b><br>
        Motor Controller check fail. Fail to check Joint 4 (Wrist 2) status. Please check the Robot Connection.
      </td>
    </tr>
    <tr>
      <th>A43</th>
      <td>
        <b>Robot Arm Activation Fail: Device (MC) Checking Fail</b><br>
        Motor Controller check fail. Fail to check Joint 5 (Wrist 3) status. Please check the Robot Connection.
      </td>
    </tr>
    <tr>
      <th>A44</th>
      <td>
        <b>Robot Arm Activation Fail: Device Servo On fail</b><br>
        Motor Controller servo-on fail. Fail to run Joint 0 (Base). Re-start the robot initialization process.
      </td>
    </tr>
    <tr>
      <th>A45</th>
      <td>
        <b>Robot Arm Activation Fail: Device Servo On fail</b><br>
        Motor Controller servo-on fail. Fail to run Joint 1 (Shoulder). Re-start the robot initialization process.
      </td>
    </tr>
    <tr>
      <th>A46</th>
      <td>
        <b>Robot Arm Activation Fail: Device Servo On fail</b><br>
        Motor Controller servo-on fail. Fail to run Joint 2 (Elbow). Re-start the robot initialization process.
      </td>
    </tr>
    <tr>
      <th>A47</th>
      <td>
        <b>Robot Arm Activation Fail: Device Servo On fail</b><br>
        Motor Controller servo-on fail. Fail to run Joint 3 (Wrist 1). Re-start the robot initialization process.
      </td>
    </tr>
    <tr>
      <th>A48</th>
      <td>
        <b>Robot Arm Activation Fail: Device Servo On fail</b><br>
        Motor Controller servo-on fail. Fail to run Joint 4 (Wrist 2). Re-start the robot initialization process.
      </td>
    </tr>
    <tr>
      <th>A49</th>
      <td>
        <b>Robot Arm Activation Fail: Device Servo On fail</b><br>
        Motor Controller servo-on fail. Fail to run Joint 5 (Wrist 3). Re-start the robot initialization process.
      </td>
    </tr>
    <tr>
      <th>A50</th>
      <td>
        <b>Robot Arm Activation Fail: Internal Communication Error</b><br>
        Control Box L2C Error Check the LAN cable between the Control-PC and the communication-interface-board
      </td>
    </tr>
    <tr>
      <th>A51</th>
      <td>
        <b>Robot Arm Activation Fail: Internal Communication Error</b><br>
        Control Box SafetyMCU connection error Contact the manufacturer.
      </td>
    </tr>
    <tr>
      <th>A52</th>
      <td>
        <b>Robot Arm Activation Fail: SMPS Power checking Fail (48)</b><br>
        Control Box 48 SMPS Error. Check cable connection Fuse may have been disconnected.
      </td>
    </tr>
    <tr>
      <th>A53</th>
      <td>
        <b>Robot Arm Activation Fail: SMPS Power checking Fail (24)</b><br>
        Control Box 24 SMPS Error. Check cable connection Fuse may have been disconnected.
      </td>
    </tr>
    <tr>
      <th>A54</th>
      <td>
        <b>Robot Arm Activation Fail: SMPS Power checking Fail (12)</b><br>
        Control Box 12 SMPS Error. Check cable connection Fuse may have been disconnected.
      </td>
    </tr>
    <tr>
      <th>A55</th>
      <td>
        <b>Robot Arm Activation Fail: SMPS Power checking Fail (5)</b><br>
        Control Box 5 SMPS Error. Check cable connection Fuse may have been disconnected.
      </td>
    </tr>
    <tr>
      <th>A56</th>
      <td>
        <b>Robot Arm Activation Fail: Protection Lock ID 101</b><br>
        Robot Arm motor Controller Protection: ID check error type 101
      </td>
    </tr>
    <tr>
      <th>A57</th>
      <td>
        <b>Robot Arm Activation Fail: Protection Lock ID 102</b><br>
        Robot Arm motor Controller Protection: ID check error type 102
      </td>
    </tr>
    <tr>
      <th>A58</th>
      <td>
        <b>Robot Arm Activation Fail: Safety Board Configuration Err</b><br>
        Safety Board Configuration process was not finished...!!! Try to re-boot the control-box
      </td>
    </tr>
    <tr>
      <th>A59</th>
      <td>
        <b>Safety TPL test error</b><br>
        Robot Arm's TCP or body is out of the Safety-boundary. [TPL]
      </td>
    </tr>
    <tr>
      <th>A60</th>
      <td>
        <b>Robot joint controller status check error [UVW]</b><br>
        Error occurred during the UVW inspection of joint 0.
      </td>
    </tr>
    <tr>
      <th>A61</th>
      <td>
        <b>Robot joint controller status check error [UVW]</b><br>
        Error occurred during the UVW inspection of joint 1.
      </td>
    </tr>
    <tr>
      <th>A62</th>
      <td>
        <b>Robot joint controller status check error [UVW]</b><br>
        Error occurred during the UVW inspection of joint 2.
      </td>
    </tr>
    <tr>
      <th>A63</th>
      <td>
        <b>Robot joint controller status check error [UVW]</b><br>
        Error occurred during the UVW inspection of joint 3.
      </td>
    </tr>
    <tr>
      <th>A64</th>
      <td>
        <b>Robot joint controller status check error [UVW]</b><br>
        Error occurred during the UVW inspection of joint 4.
      </td>
    </tr>
    <tr>
      <th>A65</th>
      <td>
        <b>Robot joint controller status check error [UVW]</b><br>
        Error occurred during the UVW inspection of joint 5.
      </td>
    </tr>
    <tr>
      <th>A66</th>
      <td>
        <b>Robot joint controller status check error [CUR]</b><br>
        Error occurred during the CUR inspection of joint 0.
      </td>
    </tr>
    <tr>
      <th>A67</th>
      <td>
        <b>Robot joint controller status check error [CUR]</b><br>
        Error occurred during the CUR inspection of joint 1.
      </td>
    </tr>
    <tr>
      <th>A68</th>
      <td>
        <b>Robot joint controller status check error [CUR]</b><br>
        Error occurred during the CUR inspection of joint 2.
      </td>
    </tr>
    <tr>
      <th>A69</th>
      <td>
        <b>Robot joint controller status check error [CUR]</b><br>
        Error occurred during the CUR inspection of joint 3.
      </td>
    </tr>
    <tr>
      <th>A70</th>
      <td>
        <b>Robot joint controller status check error [CUR]</b><br>
        Error occurred during the CUR inspection of joint 4.
      </td>
    </tr>
    <tr>
      <th>A71</th>
      <td>
        <b>Robot joint controller status check error [CUR]</b><br>
        Error occurred during the CUR inspection of joint 5.
      </td>
    </tr>
    <tr>
      <th>A72</th>
      <td>
        <b>Robot joint controller status check error [MUL]</b><br>
        Error occurred during the MUL inspection of joint 0.
      </td>
    </tr>
    <tr>
      <th>A73</th>
      <td>
        <b>Robot joint controller status check error [MUL]</b><br>
        Error occurred during the MUL inspection of joint 1.
      </td>
    </tr>
    <tr>
      <th>A74</th>
      <td>
        <b>Robot joint controller status check error [MUL]</b><br>
        Error occurred during the MUL inspection of joint 2.
      </td>
    </tr>
    <tr>
      <th>A75</th>
      <td>
        <b>Robot joint controller status check error [MUL]</b><br>
        Error occurred during the MUL inspection of joint 3.
      </td>
    </tr>
    <tr>
      <th>A76</th>
      <td>
        <b>Robot joint controller status check error [MUL]</b><br>
        Error occurred during the MUL inspection of joint 4.
      </td>
    </tr>
    <tr>
      <th>A77</th>
      <td>
        <b>Robot joint controller status check error [MUL]</b><br>
        Error occurred during the MUL inspection of joint 5.
      </td>
    </tr>
    <tr>
      <th>A78</th>
      <td>
        <b>External Axis Device Check Fail</b><br>
        Fail to check External Axis #0 Device signal.
      </td>
    </tr>
    <tr>
      <th>A79</th>
      <td>
        <b>External Axis Device Check Fail</b><br>
        Fail to check External Axis #1 Device signal.
      </td>
    </tr>
    <tr>
      <th>A80</th>
      <td>
        <b>External Axis Device Check Fail</b><br>
        Fail to check External Axis #2 Device signal.
      </td>
    </tr>
    <tr>
      <th>A81</th>
      <td>
        <b>External Axis Device Check Fail</b><br>
        Fail to check External Axis #3 Device signal.
      </td>
    </tr>
    <tr>
      <th>A82</th>
      <td>
        <b>External Axis Device Check Fail</b><br>
        Fail to check External Axis #4 Device signal.
      </td>
    </tr>
    <tr>
      <th>A83</th>
      <td>
        <b>External Axis Device Check Fail</b><br>
        Fail to check External Axis #5 Device signal.
      </td>
    </tr>
    <tr>
      <th>A84</th>
      <td>
        <b>External Axis Motor Initialization Fail</b><br>
        Fail to initial External Axis #0 Device.
      </td>
    </tr>
    <tr>
      <th>A85</th>
      <td>
        <b>External Axis Motor Initialization Fail</b><br>
        Fail to initial External Axis #1 Device.
      </td>
    </tr>
    <tr>
      <th>A86</th>
      <td>
        <b>External Axis Motor Initialization Fail</b><br>
        Fail to initial External Axis #2 Device.
      </td>
    </tr>
    <tr>
      <th>A87</th>
      <td>
        <b>External Axis Motor Initialization Fail</b><br>
        Fail to initial External Axis #3 Device.
      </td>
    </tr>
    <tr>
      <th>A88</th>
      <td>
        <b>External Axis Motor Initialization Fail</b><br>
        Fail to initial External Axis #4 Device.
      </td>
    </tr>
    <tr>
      <th>A89</th>
      <td>
        <b>External Axis Motor Initialization Fail</b><br>
        Fail to initial External Axis #5 Device.
      </td>
    </tr>
    <tr>
      <th>A90</th>
      <td>
        <b>Safety switch (button) is not released. (EMS1)</b><br>
        Unable to activate robot-arm. EMS1 switch is not released yet.
      </td>
    </tr>
    <tr>
      <th>A91</th>
      <td>
        <b>Safety switch (button) is not released. (EMS2)</b><br>
        Unable to activate robot-arm. EMS2 switch is not released yet.
      </td>
    </tr>
    <tr>
      <th>A92</th>
      <td>
        <b>Safety switch (button) is not released. (PRS)</b><br>
        Unable to activate robot-arm. PRS switch is not released yet.
      </td>
    </tr>
    <tr>
      <th>A93</th>
      <td>
        <b>Safety switch (button) is not released. (HSS)</b><br>
        Unable to activate robot-arm. HSS switch is not released yet.
      </td>
    </tr>
    <tr>
      <th>A94</th>
      <td>
        <b>Safety switch (button) is not released. (SSS)</b><br>
        Unable to activate robot-arm. SSS switch is not released yet.
      </td>
    </tr>
    <tr>
      <th>A95</th>
      <td>
        <b>SMPS switching signal checking fail type A</b><br>
        Error is detected during SMPS switching signal checking. [A]
      </td>
    </tr>
    <tr>
      <th>A96</th>
      <td>
        <b>SMPS switching signal checking fail type B</b><br>
        Error is detected during SMPS switching signal checking. [B]
      </td>
    </tr>
    <tr>
      <th>A97</th>
      <td>
        <b>SMPS abnormal operation history detected</b><br>
        The history of overcurrent or undervoltage remains in the control box SMPS power supply. A control box reboot is required. If the problem persists, contact the manufacturer.
      </td>
    </tr>
    <tr>
      <th>A98</th>
      <td>
        <b>Brake Release fail in Joint 0</b><br>
        The brake release operation test for joint 0 failed
      </td>
    </tr>
    <tr>
      <th>A99</th>
      <td>
        <b>Brake Release fail in Joint 1</b><br>
        The brake release operation test for joint 1 failed
      </td>
    </tr>
    <tr>
      <th>A100</th>
      <td>
        <b>Brake Release fail in Joint 2</b><br>
        The brake release operation test for joint 2 failed
      </td>
    </tr>
    <tr>
      <th>A101</th>
      <td>
        <b>Brake Release fail in Joint 3</b><br>
        The brake release operation test for joint 3 failed
      </td>
    </tr>
    <tr>
      <th>A102</th>
      <td>
        <b>Brake Release fail in Joint 4</b><br>
        The brake release operation test for joint 4 failed
      </td>
    </tr>
    <tr>
      <th>A103</th>
      <td>
        <b>Brake Release fail in Joint 5</b><br>
        The brake release operation test for joint 5 failed
      </td>
    </tr>
    <tr>
      <th>A104</th>
      <td>
        <b>Abnormality in phase current sensor of Joint 0</b><br>
        An abnormality of the phase current sensor of joint 0 is detected.
      </td>
    </tr>
    <tr>
      <th>A105</th>
      <td>
        <b>Abnormality in phase current sensor of Joint 1</b><br>
        An abnormality of the phase current sensor of joint 1 is detected.
      </td>
    </tr>
    <tr>
      <th>A106</th>
      <td>
        <b>Abnormality in phase current sensor of Joint 2</b><br>
        An abnormality of the phase current sensor of joint 2 is detected.
      </td>
    </tr>
    <tr>
      <th>A107</th>
      <td>
        <b>Abnormality in phase current sensor of Joint 3</b><br>
        An abnormality of the phase current sensor of joint 3 is detected.
      </td>
    </tr>
    <tr>
      <th>A108</th>
      <td>
        <b>Abnormality in phase current sensor of Joint 4</b><br>
        An abnormality of the phase current sensor of joint 4 is detected.
      </td>
    </tr>
    <tr>
      <th>A109</th>
      <td>
        <b>Abnormality in phase current sensor of Joint 5</b><br>
        An abnormality of the phase current sensor of joint 5 is detected.
      </td>
    </tr>
    <tr>
      <th>A110</th>
      <td>
        <b>Stop the robot arm activation function</b><br>
        Since there was a problem with the activation of the robotic arm in succession the use of this function was prohibited. Reboot the entire system.
      </td>
    </tr>
    <tr>
      <th>A111</th>
      <td>
        <b>Board 0 is in the BootLoader mode.</b><br>
        Normal activation is not possible because board 0 is in the boot loader state. The board needs a firmware update.
      </td>
    </tr>
    <tr>
      <th>A112</th>
      <td>
        <b>Board 1 is in the BootLoader mode.</b><br>
        Normal activation is not possible because board 1 is in the boot loader state. The board needs a firmware update.
      </td>
    </tr>
    <tr>
      <th>A113</th>
      <td>
        <b>Board 2 is in the BootLoader mode.</b><br>
        Normal activation is not possible because board 2 is in the boot loader state. The board needs a firmware update.
      </td>
    </tr>
    <tr>
      <th>A114</th>
      <td>
        <b>Board 3 is in the BootLoader mode.</b><br>
        Normal activation is not possible because board 3 is in the boot loader state. The board needs a firmware update.
      </td>
    </tr>
    <tr>
      <th>A115</th>
      <td>
        <b>Board 4 is in the BootLoader mode.</b><br>
        Normal activation is not possible because board 4 is in the boot loader state. The board needs a firmware update.
      </td>
    </tr>
    <tr>
      <th>A116</th>
      <td>
        <b>Board 5 is in the BootLoader mode.</b><br>
        Normal activation is not possible because board 5 is in the boot loader state. The board needs a firmware update.
      </td>
    </tr>
    <tr>
      <th>A117</th>
      <td>
        <b>Board 6 is in the BootLoader mode.</b><br>
        Normal activation is not possible because board 6 is in the boot loader state. The board needs a firmware update.
      </td>
    </tr>
    <tr>
      <th>A118</th>
      <td>
        <b>Board 7 is in the BootLoader mode.</b><br>
        Normal activation is not possible because board 7 is in the boot loader state. The board needs a firmware update.
      </td>
    </tr>
    <tr>
      <th>A119</th>
      <td>
        <b>Board 8 is in the BootLoader mode.</b><br>
        Normal activation is not possible because board 8 is in the boot loader state. The board needs a firmware update.
      </td>
    </tr>
    <tr>
      <th>A120</th>
      <td>
        <b>Board 9 is in the BootLoader mode.</b><br>
        Normal activation is not possible because board 9 is in the boot loader state. The board needs a firmware update.
      </td>
    </tr>
    <tr>
      <th>A121</th>
      <td>
        <b>Channel check error joint 0</b><br>
        Robot joint 0 is recognized, but the channel information is incorrect.
      </td>
    </tr>
    <tr>
      <th>A122</th>
      <td>
        <b>Channel check error joint 1</b><br>
        Robot joint 1 is recognized, but the channel information is incorrect.
      </td>
    </tr>
    <tr>
      <th>A123</th>
      <td>
        <b>Channel check error joint 2</b><br>
        Robot joint 2 is recognized, but the channel information is incorrect.
      </td>
    </tr>
    <tr>
      <th>A124</th>
      <td>
        <b>Channel check error joint 3</b><br>
        Robot joint 3 is recognized, but the channel information is incorrect.
      </td>
    </tr>
    <tr>
      <th>A125</th>
      <td>
        <b>Channel check error joint 4</b><br>
        Robot joint 4 is recognized, but the channel information is incorrect.
      </td>
    </tr>
    <tr>
      <th>A126</th>
      <td>
        <b>Channel check error joint 5</b><br>
        Robot joint 5 is recognized, but the channel information is incorrect.
      </td>
    </tr>
    <tr>
      <th>A127</th>
      <td>
        <b>SMPS SWE12 abnormal operation history detected</b><br>
        The history of overcurrent or undervoltage remains in the control box SMPS SWE12. There may be a problem with the control box grounding. If the problem persists, contact the manufacturer.
      </td>
    </tr>
    <tr>
      <th>A128</th>
      <td>
        <b>SMPS SWE1 abnormal operation history detected</b><br>
        The history of overcurrent or undervoltage remains in the control box SMPS SWE1. There may be a problem with the control box grounding. If the problem persists, contact the manufacturer.
      </td>
    </tr>
    <tr>
      <th>A129</th>
      <td>
        <b>SMPS SWE2 abnormal operation history detected</b><br>
        The history of overcurrent or undervoltage remains in the control box SMPS SWE2. There may be a problem with the control box grounding. If the problem persists, contact the manufacturer.
      </td>
    </tr>
    <tr>
      <th>A130</th>
      <td>
        <b>Failure to receive communication from robot arm</b><br>
        Check Cable-connection (between Robot and ControlBox) status.
      </td>
    </tr>
    <tr>
      <th>A131</th>
      <td>
        <b>Robot arm joint overload history detection</b><br>
        The history of the robot arm being turned off due to overload remains. Check the situation and reboot the control box.
      </td>
    </tr>
    <tr>
      <th>A132</th>
      <td>
        <b>Fail to get IO Board state data</b><br>
        Fail to get IO Board state data. Check IO board cable connection state. 24V IO Fuse may have been disconnected or broken. Control Box 24V SMPS may be damaged.
      </td>
    </tr>
    <tr>
      <th>A133</th>
      <td>
        <b>Control box type setting value error CB Type Error</b><br>
        The set control box type and the actual control box type are different. Contact the manufacturer.
      </td>
    </tr>
    <tr>
      <th>A134</th>
      <td>
        <b>Failed to receive the bottom communication channel of the robot arm</b><br>
        Information reception of joint 0 1 2 was not performed normally. There is a problem with the bottom communication channel. Check the connection status of the main cable of the robot arm.
      </td>
    </tr>
    <tr>
      <th>A135</th>
      <td>
        <b>Failed to receive the top communication channel of the robot arm</b><br>
        Information reception of joint 3 4 5 was not performed normally. There is a problem with the top communication channel. Check the connection status of the main cable of the robot arm.
      </td>
    </tr>
    <tr>
      <th>A136</th>
      <td>
        <b>Joint module model number recognition error</b><br>
        The module model number of robot arm joint 0 does not match the information set in the control box.
      </td>
    </tr>
    <tr>
      <th>A137</th>
      <td>
        <b>Joint module model number recognition error</b><br>
        The module model number of robot arm joint 1 does not match the information set in the control box.
      </td>
    </tr>
    <tr>
      <th>A138</th>
      <td>
        <b>Joint module model number recognition error</b><br>
        The module model number of robot arm joint 2 does not match the information set in the control box.
      </td>
    </tr>
    <tr>
      <th>A139</th>
      <td>
        <b>Joint module model number recognition error</b><br>
        The module model number of robot arm joint 3 does not match the information set in the control box.
      </td>
    </tr>
    <tr>
      <th>A140</th>
      <td>
        <b>Joint module model number recognition error</b><br>
        The module model number of robot arm joint 4 does not match the information set in the control box.
      </td>
    </tr>
    <tr>
      <th>A141</th>
      <td>
        <b>Joint module model number recognition error</b><br>
        The module model number of robot arm joint 5 does not match the information set in the control box.
      </td>
    </tr>
    <tr>
      <th>A142</th>
      <td>
        <b>Joint current sensor initial inspection error</b><br>
        A deviation in the current sensor value is detected during the initial booting of joint 0. Check the system grounding status.
      </td>
    </tr>
    <tr>
      <th>A143</th>
      <td>
        <b>Joint current sensor initial inspection error</b><br>
        A deviation in the current sensor value is detected during the initial booting of joint 1. Check the system grounding status.
      </td>
    </tr>
    <tr>
      <th>A144</th>
      <td>
        <b>Joint current sensor initial inspection error</b><br>
        A deviation in the current sensor value is detected during the initial booting of joint 2. Check the system grounding status.
      </td>
    </tr>
    <tr>
      <th>A145</th>
      <td>
        <b>Joint current sensor initial inspection error</b><br>
        A deviation in the current sensor value is detected during the initial booting of joint 3. Check the system grounding status.
      </td>
    </tr>
    <tr>
      <th>A146</th>
      <td>
        <b>Joint current sensor initial inspection error</b><br>
        A deviation in the current sensor value is detected during the initial booting of joint 4. Check the system grounding status.
      </td>
    </tr>
    <tr>
      <th>A147</th>
      <td>
        <b>Joint current sensor initial inspection error</b><br>
        A deviation in the current sensor value is detected during the initial booting of joint 5. Check the system grounding status.
      </td>
    </tr>
    <tr>
      <th>A148</th>
      <td>
        <b>Unstable movement occurs during the robot initialization process</b><br>
        A movement error is detected during the initialization process of robot arm joint 0.
      </td>
    </tr>
    <tr>
      <th>A149</th>
      <td>
        <b>Unstable movement occurs during the robot initialization process</b><br>
        A movement error is detected during the initialization process of robot arm joint 1.
      </td>
    </tr>
    <tr>
      <th>A150</th>
      <td>
        <b>Unstable movement occurs during the robot initialization process</b><br>
        A movement error is detected during the initialization process of robot arm joint 2.
      </td>
    </tr>
    <tr>
      <th>A151</th>
      <td>
        <b>Unstable movement occurs during the robot initialization process</b><br>
        A movement error is detected during the initialization process of robot arm joint 3.
      </td>
    </tr>
    <tr>
      <th>A152</th>
      <td>
        <b>Unstable movement occurs during the robot initialization process</b><br>
        A movement error is detected during the initialization process of robot arm joint 4.
      </td>
    </tr>
    <tr>
      <th>A153</th>
      <td>
        <b>Unstable movement occurs during the robot initialization process</b><br>
        A movement error is detected during the initialization process of robot arm joint 5.
      </td>
    </tr>
    <tr>
      <th>A154</th>
      <td>
        <b>The model identification numbers do not match</b><br>
        The model unique numbers stored in the control box and the robot arm do not match.
      </td>
    </tr>
    <tr>
      <th>A155</th>
      <td>
        <b>Power cut during robot arm activation process</b><br>
        During the robot arm activation process, the power applied to the robot arm was cut off.
      </td>
    </tr>
    <tr>
      <th>A156</th>
      <td>
        <b>Power cut occurs</b><br>
        During the robot arm activation process, the emergency switch was activated.
      </td>
    </tr>
    <tr>
      <th>A157</th>
      <td>
        <b>Power cut occurs</b><br>
        During the robot arm activation process, EMS1 switch was activated.
      </td>
    </tr>
    <tr>
      <th>A158</th>
      <td>
        <b>Power cut occurs</b><br>
        During the robot arm activation process, EMS2 switch was activated.
      </td>
    </tr>
    <tr>
      <th>A159</th>
      <td>
        <b>Power cut occurs</b><br>
        During the robot arm activation process, PRS switch was activated.
      </td>
    </tr>
    <tr>
      <th>A160</th>
      <td>
        <b>Power cut occurs</b><br>
        During the robot arm activation process, HSS switch was activated.
      </td>
    </tr>
    <tr>
      <th>A161</th>
      <td>
        <b>Power cut occurs</b><br>
        During the robot arm activation process, SSS switch was activated.
      </td>
    </tr>
    <tr>
      <th>A162</th>
      <td>
        <b>Joint protection warning type B</b><br>
        During the robot arm activation process, protection warning B occurred at joint 0.
      </td>
    </tr>
    <tr>
      <th>A163</th>
      <td>
        <b>Joint protection warning type B</b><br>
        During the robot arm activation process, protection warning B occurred at joint 1.
      </td>
    </tr>
    <tr>
      <th>A164</th>
      <td>
        <b>Joint protection warning type B</b><br>
        During the robot arm activation process, protection warning B occurred at joint 2.
      </td>
    </tr>
    <tr>
      <th>A165</th>
      <td>
        <b>Joint protection warning type B</b><br>
        During the robot arm activation process, protection warning B occurred at joint 3.
      </td>
    </tr>
    <tr>
      <th>A166</th>
      <td>
        <b>Joint protection warning type B</b><br>
        During the robot arm activation process, protection warning B occurred at joint 4.
      </td>
    </tr>
    <tr>
      <th>A167</th>
      <td>
        <b>Joint protection warning type B</b><br>
        During the robot arm activation process, protection warning B occurred at joint 5.
      </td>
    </tr>
    <tr>
      <th>A168</th>
      <td>
        <b>Joint protection warning type C</b><br>
        During the robot arm activation process, protection warning C occurred at joint 0.
      </td>
    </tr>
    <tr>
      <th>A169</th>
      <td>
        <b>Joint protection warning type C</b><br>
        During the robot arm activation process, protection warning C occurred at joint 1.
      </td>
    </tr>
    <tr>
      <th>A170</th>
      <td>
        <b>Joint protection warning type C</b><br>
        During the robot arm activation process, protection warning C occurred at joint 2.
      </td>
    </tr>
    <tr>
      <th>A171</th>
      <td>
        <b>Joint protection warning type C</b><br>
        During the robot arm activation process, protection warning C occurred at joint 3.
      </td>
    </tr>
    <tr>
      <th>A172</th>
      <td>
        <b>Joint protection warning type C</b><br>
        During the robot arm activation process, protection warning C occurred at joint 4.
      </td>
    </tr>
    <tr>
      <th>A173</th>
      <td>
        <b>Joint protection warning type C</b><br>
        During the robot arm activation process, protection warning C occurred at joint 5.
      </td>
    </tr>
    <tr>
      <th>A174</th>
      <td>
        <b>Joint protection warning type M</b><br>
        During the robot arm activation process, protection warning M occurred at joint 0.
      </td>
    </tr>
    <tr>
      <th>A175</th>
      <td>
        <b>Joint protection warning type M</b><br>
        During the robot arm activation process, protection warning M occurred at joint 1.
      </td>
    </tr>
    <tr>
      <th>A176</th>
      <td>
        <b>Joint protection warning type M</b><br>
        During the robot arm activation process, protection warning M occurred at joint 2.
      </td>
    </tr>
    <tr>
      <th>A177</th>
      <td>
        <b>Joint protection warning type M</b><br>
        During the robot arm activation process, protection warning M occurred at joint 3.
      </td>
    </tr>
    <tr>
      <th>A178</th>
      <td>
        <b>Joint protection warning type M</b><br>
        During the robot arm activation process, protection warning M occurred at joint 4.
      </td>
    </tr>
    <tr>
      <th>A179</th>
      <td>
        <b>Joint protection warning type M</b><br>
        During the robot arm activation process, protection warning M occurred at joint 5.
      </td>
    </tr>
    <tr>
      <th>A180</th>
      <td>
        <b>Robot Joint Signal Loss</b><br>
        During the robot arm activation process, communication with joint 0 is unstable.
      </td>
    </tr>
    <tr>
      <th>A181</th>
      <td>
        <b>Robot Joint Signal Loss</b><br>
        During the robot arm activation process, communication with joint 1 is unstable.
      </td>
    </tr>
    <tr>
      <th>A182</th>
      <td>
        <b>Robot Joint Signal Loss</b><br>
        During the robot arm activation process, communication with joint 2 is unstable.
      </td>
    </tr>
    <tr>
      <th>A183</th>
      <td>
        <b>Robot Joint Signal Loss</b><br>
        During the robot arm activation process, communication with joint 3 is unstable.
      </td>
    </tr>
    <tr>
      <th>A184</th>
      <td>
        <b>Robot Joint Signal Loss</b><br>
        During the robot arm activation process, communication with joint 4 is unstable.
      </td>
    </tr>
    <tr>
      <th>A185</th>
      <td>
        <b>Robot Joint Signal Loss</b><br>
        During the robot arm activation process, communication with joint 5 is unstable.
      </td>
    </tr>
    <tr>
      <th>A186</th>
      <td>
        <b>Tool Flange Signal Loss</b><br>
        During the robot arm activation process, communication with Tool Flange is unstable.
      </td>
    </tr>
    <tr>
      <th>default</th>
      <td>
        <b>Unknown Activation Fail error code</b><br>
        Check the system version.
      </td>
    </tr>
  </table>
</div>

### 2. General Message Code (M)

<div class="center-align th-align">
  <table>
    <tr>
      <th>M0</th>
      <td>
        Power Down Detected. Re-initialize the robot!
      </td>
    </tr>
    <tr>
      <th>M1</th>
      <td>
        Too Fast motion for Conveyor tracking!
      </td>
    </tr>
    <tr>
      <th>M2</th>
      <td>
        Condition fail for TCP orientation auto-alignment.
      </td>
    </tr>
    <tr>
      <th>M3</th>
      <td>
        Program is Stopped because of Collision-Detection.
      </td>
    </tr>
    <tr>
      <th>M4</th>
      <td>
        Weaving path calculation Fail (type: AMP)
      </td>
    </tr>
    <tr>
      <th>M5</th>
      <td>
        Weaving path calculation Fail (type: VEL)
      </td>
    </tr>
    <tr>
      <th>M6</th>
      <td>
        Weaving path calculation Fail (type: TPA)
      </td>
    </tr>
    <tr>
      <th>M7</th>
      <td>
        Weaving path calculation Fail (type: DRG)
      </td>
    </tr>
    <tr>
      <th>M8</th>
      <td>
        Weaving path calculation Fail (type: OFF)
      </td>
    </tr>
    <tr>
      <th>M9</th>
      <td>
        Weaving path calculation Fail (type: SCA)
      </td>
    </tr>
    <tr>
      <th>M10</th>
      <td>
        Weaving path calculation Fail (type: UND)
      </td>
    </tr>
    <tr>
      <th>M11</th>
      <td>
        Weaving Setting Error: Cannot run this Command.
      </td>
    </tr>
    <tr>
      <th>M12</th>
      <td>
        Weaving Setting Error: Out of bounds (amplitude)
      </td>
    </tr>
    <tr>
      <th>M13</th>
      <td>
        Weaving Setting Error: Out of bounds (velocity)
      </td>
    </tr>
    <tr>
      <th>M14</th>
      <td>
        Weaving Setting Error: Out of bounds (time)
      </td>
    </tr>
    <tr>
      <th>M15</th>
      <td>
        Weaving Setting Error: Out of bounds (distortion rate)
      </td>
    </tr>
    <tr>
      <th>M16</th>
      <td>
        Weaving Setting Error: Set-points are too close.
      </td>
    </tr>
    <tr>
      <th>M17</th>
      <td>
        Brake is opened. Check the selected joint is released !
      </td>
    </tr>
    <tr>
      <th>M18</th>
      <td>
        Selected Joint is Initialized. Reboot All system !
      </td>
    </tr>
    <tr>
      <th>M19</th>
      <td>
        Jog Button Get Info Fail (Out of index bound)
      </td>
    </tr>
    <tr>
      <th>M20</th>
      <td>
        Jog Button Set Info Fail (Out of bound)
      </td>
    </tr>
    <tr>
      <th>M21</th>
      <td>
        Pattern internal count is over its bound.
      </td>
    </tr>
    <tr>
      <th>M22</th>
      <td>
        Control Box Files are copied into (TabletStorage/Android/data/com.rainbow.cobot/files/CopyFrom_ControlBox)
      </td>
    </tr>
    <tr>
      <th>M23</th>
      <td>
        Software Update Fail (type 1) Check whether the UI App program is full version Please try again.
      </td>
    </tr>
    <tr>
      <th>M24</th>
      <td>
        Software Update Fail (type 2) Internal files copy failure Please try again.
      </td>
    </tr>
    <tr>
      <th>M25</th>
      <td>
        Software Update Fail (type 3) File system checking failure Please try again.
      </td>
    </tr>
    <tr>
      <th>M26</th>
      <td>
        Software Update Success !!! System will be re-boot automatically Please Wait...
      </td>
    </tr>
    <tr>
      <th>M27</th>
      <td>
        Saved motion called does not exist.
      </td>
    </tr>
    <tr>
      <th>M28</th>
      <td>
        Grammar Error: Recorded Path Run.
      </td>
    </tr>
    <tr>
      <th>M29</th>
      <td>
        Selected Orientation option is not supported.
      </td>
    </tr>
    <tr>
      <th>M30</th>
      <td>
        Move JB Error: Command cannot be executed.
      </td>
    </tr>
    <tr>
      <th>M31</th>
      <td>
        Move JB Error: Too Low Point number.
      </td>
    </tr>
    <tr>
      <th>M32</th>
      <td>
        Move JB Error: Joint Limit over.
      </td>
    </tr>
    <tr>
      <th>M33</th>
      <td>
        Move JB Error: Impossible to adjust Set-Offset.
      </td>
    </tr>
    <tr>
      <th>M34</th>
      <td>
        Move JB Error: Too Low Acceleration is set.
      </td>
    </tr>
    <tr>
      <th>M35</th>
      <td>
        Move JB Error: N/D
      </td>
    </tr>
    <tr>
      <th>M36</th>
      <td>
        Move JB Error: N/D
      </td>
    </tr>
    <tr>
      <th>M37</th>
      <td>
        Move JB Error: N/D
      </td>
    </tr>
    <tr>
      <th>M38</th>
      <td>
        Joy-Stick is connected.
      </td>
    </tr>
    <tr>
      <th>M39</th>
      <td>
        Joy-Stick is not connected !!
      </td>
    </tr>
    <tr>
      <th>M40</th>
      <td>
        Wrong Password !!!
      </td>
    </tr>
    <tr>
      <th>M41</th>
      <td>
        All Settings are initialized. Re-boot All systems.
      </td>
    </tr>
    <tr>
      <th>M42</th>
      <td>
        Save Done !
      </td>
    </tr>
    <tr>
      <th>M43</th>
      <td>
        Do previous procedure first.
      </td>
    </tr>
    <tr>
      <th>M44</th>
      <td>
        Calculation Error !!!
      </td>
    </tr>
    <tr>
      <th>M45</th>
      <td>
        Cannot run this command. Other motion or program is running!
      </td>
    </tr>
    <tr>
      <th>M46</th>
      <td>
        Robot is Activated !! De-activate robot first.
      </td>
    </tr>
    <tr>
      <th>M47</th>
      <td>
        Wrong BNO (Board Number) input.
      </td>
    </tr>
    <tr>
      <th>M48</th>
      <td>
        Input Parameters are out of bound.
      </td>
    </tr>
    <tr>
      <th>M49</th>
      <td>
        CAN Data Read Time-out !!!
      </td>
    </tr>
    <tr>
      <th>M50</th>
      <td>
        Wrong Model-Key number !!!
      </td>
    </tr>
    <tr>
      <th>M51</th>
      <td>
        Control Gains are changed !!! Please double check !!!!
      </td>
    </tr>
    <tr>
      <th>M52</th>
      <td>
        Exceeds the maximum number of Threads that can be supported.
      </td>
    </tr>
    <tr>
      <th>M53</th>
      <td>
        Sub Program called too deeply !!!
      </td>
    </tr>
    <tr>
      <th>M54</th>
      <td>
        Sub Program called too much !!!
      </td>
    </tr>
    <tr>
      <th>M55</th>
      <td>
        Brake is opened & DQ alignment is performed. Make sure whether Brake is opened and DQ is well-aligned.
      </td>
    </tr>
    <tr>
      <th>M56</th>
      <td>
        DQ Save done !! Make sure whether DQ is well-aligned.
      </td>
    </tr>
    <tr>
      <th>M57</th>
      <td>
        Current Sensor Nulling done :)
      </td>
    </tr>
    <tr>
      <th>M58</th>
      <td>
        Control Box SMPS Error Check cable connection. Fuse may have been disconnected.
      </td>
    </tr>
    <tr>
      <th>M59</th>
      <td>
        Control Box 48V Switch Error Check whether the supplied 48V switch terminal block is connected.
      </td>
    </tr>
    <tr>
      <th>M60</th>
      <td>
        Control Box GP Switch Error Check Protective stop connector (Din 16/17)
      </td>
    </tr>
    <tr>
      <th>M61</th>
      <td>
        Control Box Power-switching Error If the problem persists, contact the manufacturer.
      </td>
    </tr>
    <tr>
      <th>M62</th>
      <td>
        Control Box FET switching Error If the problem persists, contact the manufacturer.
      </td>
    </tr>
    <tr>
      <th>M63</th>
      <td>
        Check EMG (EMO) Switch or Reset Switch status.
      </td>
    </tr>
    <tr>
      <th>M64</th>
      <td>
        Check Cable-connection (between Robot and ControlBox) status.
      </td>
    </tr>
    <tr>
      <th>M65</th>
      <td>
        Robot Motor Controller connection check Fail.
      </td>
    </tr>
    <tr>
      <th>M66</th>
      <td>
        Robot Tool Flange Board (TFB) connection check Fail.
      </td>
    </tr>
    <tr>
      <th>M67</th>
      <td>
        Robot Tool Flange DAQ time out.
      </td>
    </tr>
    <tr>
      <th>M68</th>
      <td>
        Control Box 48 SMPS Error Check cable connection. Fuse may have been disconnected.
      </td>
    </tr>
    <tr>
      <th>M69</th>
      <td>
        Control Box 24 SMPS Error Check cable connection. Fuse may have been disconnected.
      </td>
    </tr>
    <tr>
      <th>M70</th>
      <td>
        Control Box 12 SMPS Error Check cable connection. Fuse may have been disconnected.
      </td>
    </tr>
    <tr>
      <th>M71</th>
      <td>
        Control Box 5 SMPS Error Check cable connection. Fuse may have been disconnected.
      </td>
    </tr>
    <tr>
      <th>M72</th>
      <td>
        Control Box L2C Error Check the LAN cable between the Control-PC and the communication-interface-board.
      </td>
    </tr>
    <tr>
      <th>M73</th>
      <td>
        Control Box SafetyMCU connection error. Contact the manufacturer.
      </td>
    </tr>
    <tr>
      <th>M74</th>
      <td>
        Robot Arm motor Controller Protection: ID check error type 101
      </td>
    </tr>
    <tr>
      <th>M75</th>
      <td>
        Robot Arm motor Controller Protection: ID check error type 102
      </td>
    </tr>
    <tr>
      <th>M76</th>
      <td>
        Not supported Function.
      </td>
    </tr>
    <tr>
      <th>M77</th>
      <td>
        Not supported Function Available after Firmware upgrade. Contact the manufacturer.
      </td>
    </tr>
    <tr>
      <th>M78</th>
      <td>
        Laser Range Finder data time out.
      </td>
    </tr>
    <tr>
      <th>M79</th>
      <td>
        Another special function already exists on the port for which you want to use the pulse function.
      </td>
    </tr>
    <tr>
      <th>M80</th>
      <td>
        Wrong setting values are saved. Contact the manufacturer.
      </td>
    </tr>
    <tr>
      <th>M81</th>
      <td>
        Collision detection motion setting: General stop
      </td>
    </tr>
    <tr>
      <th>M82</th>
      <td>
        Collision detection motion setting: Evasion stop
      </td>
    </tr>
    <tr>
      <th>M83</th>
      <td>
        Collision detection motion setting: N/A
      </td>
    </tr>
    <tr>
      <th>M84</th>
      <td>
        Collision detection motion setting: N/A
      </td>
    </tr>
    <tr>
      <th>M85</th>
      <td>
        RB5 Accuracy setting is changed. Re-boot all system. Re-make all motions !!!
      </td>
    </tr>
    <tr>
      <th>M86</th>
      <td>
        AutoCOG: External F/T sensor is not attached.
      </td>
    </tr>
    <tr>
      <th>M87</th>
      <td>
        AutoCOG: Current posture is saved.
      </td>
    </tr>
    <tr>
      <th>M88</th>
      <td>
        AutoCOG: More data should be saved.
      </td>
    </tr>
    <tr>
      <th>M89</th>
      <td>
        AutoCOG: Fail to calculate-mounting angle is changed during DAQ.
      </td>
    </tr>
    <tr>
      <th>M90</th>
      <td>
        AutoCOG: Fail to calculate-sensor type is changed during DAQ.
      </td>
    </tr>
    <tr>
      <th>M91</th>
      <td>
        AutoCOG: N/A
      </td>
    </tr>
    <tr>
      <th>M92</th>
      <td>
        AutoCOG: N/A
      </td>
    </tr>
    <tr>
      <th>M93</th>
      <td>
        Robotiq FT: Try Nulling again about this axis !!!
      </td>
    </tr>
    <tr>
      <th>M94</th>
      <td>
        Robotiq FT: Ok- Nulling about selected axis.
      </td>
    </tr>
    <tr>
      <th>M95</th>
      <td>
        Robotiq FT: FT300 is selected for the external F/T sensor. Re-boot all systems.
      </td>
    </tr>
    <tr>
      <th>M96</th>
      <td>
        Robotiq FT: N/A
      </td>
    </tr>
    <tr>
      <th>M97</th>
      <td>
        Robotiq FT: N/A
      </td>
    </tr>
    <tr>
      <th>M98</th>
      <td>
        Robotiq FT: N/A
      </td>
    </tr>
    <tr>
      <th>M99</th>
      <td>
        Conveyor: Encoder data is not detected.
      </td>
    </tr>
    <tr>
      <th>M100</th>
      <td>
        Conveyor: Direction (Axis) settings have problem.
      </td>
    </tr>
    <tr>
      <th>M101</th>
      <td>
        Conveyor: N/A
      </td>
    </tr>
    <tr>
      <th>M102</th>
      <td>
        Conveyor: N/A
      </td>
    </tr>
    <tr>
      <th>M103</th>
      <td>
        Conveyor: N/A
      </td>
    </tr>
    <tr>
      <th>M104</th>
      <td>
        Conveyor: N/A
      </td>
    </tr>
    <tr>
      <th>M105</th>
      <td>
        Conveyor: N/A
      </td>
    </tr>
    <tr>
      <th>M106</th>
      <td>
        EMS Status: Unsolvable posture<br>
        - Inverse kinematics calculation is not possible at this point.<br>
        - It may be too close to the singularity / dead zone.<br>
        - The set speed/acceleration may be excessively fast.<br>
        - Require to re-generate the motion to avoid this condition.
      </td>
    </tr>
    <tr>
      <th>M107</th>
      <td>
        EMS Status: Inverse kinematics numeric error<br>
        - Inverse kinematics calculation error during cartesian motion.<br>
        - It may be too close to the singularity / dead zone.<br>
        - The set speed/acceleration may be excessively fast.<br>
        - Require to re-generate the motion to avoid this condition.
      </td>
    </tr>
    <tr>
      <th>M108</th>
      <td>
        EMS Status: Arm-strech condition<br>
        - Cartesian motion reached out a limit of reachable workspace.<br>
        - It may be too close to the singularity / dead zone.<br>
        - Require to re-generate the motion to avoid this condition.
      </td>
    </tr>
    <tr>
      <th>M109</th>
      <td>
        EMS Status: Joint angle limit over<br>
        - Joint angle is over its limits.
      </td>
    </tr>
    <tr>
      <th>M110</th>
      <td>
        EMS Status: N/A
      </td>
    </tr>
    <tr>
      <th>M111</th>
      <td>
        EMS Status: N/A
      </td>
    </tr>
    <tr>
      <th>M112</th>
      <td>
        EMS Status: N/A
      </td>
    </tr>
    <tr>
      <th>M113</th>
      <td>
        EMS Status: N/A
      </td>
    </tr>
    <tr>
      <th>M114</th>
      <td>
        EMS Status: N/A
      </td>
    </tr>
    <tr>
      <th>M115</th>
      <td>
        Rainbow FT: HWSFT sensor is not connected.
      </td>
    </tr>
    <tr>
      <th>M116</th>
      <td>
        Rainbow FT: HWSFT sensor nulling is done.
      </td>
    </tr>
    <tr>
      <th>M117</th>
      <td>
        Rainbow FT: HWSFT is selected for the external F/T sensor. Re-boot all systems.
      </td>
    </tr>
    <tr>
      <th>M118</th>
      <td>
        Rainbow FT: N/A
      </td>
    </tr>
    <tr>
      <th>M119</th>
      <td>
        Rainbow FT: N/A
      </td>
    </tr>
    <tr>
      <th>M120</th>
      <td>
        Rainbow FT: N/A
      </td>
    </tr>
    <tr>
      <th>M121</th>
      <td>
        Motion Record: Recording done. Press Save button if you want to save this record.
      </td>
    </tr>
    <tr>
      <th>M122</th>
      <td>
        Motion Record: File save done :)
      </td>
    </tr>
    <tr>
      <th>M123</th>
      <td>
        Motion Record: Please enter file name.
      </td>
    </tr>
    <tr>
      <th>M124</th>
      <td>
        Motion Record: Maximum Record time (100 sec) over.
      </td>
    </tr>
    <tr>
      <th>M125</th>
      <td>
        Motion Record: Start Recording.
      </td>
    </tr>
    <tr>
      <th>M126</th>
      <td>
        Motion Record: N/A
      </td>
    </tr>
    <tr>
      <th>M127</th>
      <td>
        Motion Record: N/A
      </td>
    </tr>
    <tr>
      <th>M128</th>
      <td>
        Robot TCP has arrived at that location.
      </td>
    </tr>
    <tr>
      <th>M129</th>
      <td>
        Robot Joint angles have arrived at that location.
      </td>
    </tr>
    <tr>
      <th>M130</th>
      <td>
        Too Long String !!
      </td>
    </tr>
    <tr>
      <th>M131</th>
      <td>
        Too Long Monitoring String !!
      </td>
    </tr>
    <tr>
      <th>M132</th>
      <td>
        No Serial Communication Device !!
      </td>
    </tr>
    <tr>
      <th>M133</th>
      <td>
        Fail to get Begin Angles !! [NO FILE]
      </td>
    </tr>
    <tr>
      <th>M134</th>
      <td>
        Fail to get Begin Angles !! [WRONG SIZE]
      </td>
    </tr>
    <tr>
      <th>M135</th>
      <td>
        Fail to get Begin Angles !! [WRONG FORMAT]
      </td>
    </tr>
    <tr>
      <th>M136</th>
      <td>
        Fail to get Begin Angles !! [CRASHED]
      </td>
    </tr>
    <tr>
      <th>M137</th>
      <td>
        Fail to get Begin Angles !! [N/A]
      </td>
    </tr>
    <tr>
      <th>M138</th>
      <td>
        Fail to get Begin Angles !! [N/A]
      </td>
    </tr>
    <tr>
      <th>M139</th>
      <td>
        Fine Zero Point for selected joint is RESET !!!! Turn Off and On again the power to adjust new angle.
      </td>
    </tr>
    <tr>
      <th>M140</th>
      <td>
        Fine Zero Fail: Condition is not permitted.
      </td>
    </tr>
    <tr>
      <th>M141</th>
      <td>
        Number of function parameter is wrong.
      </td>
    </tr>
    <tr>
      <th>M142</th>
      <td>
        Force Control: Tracking value bound over.
      </td>
    </tr>
    <tr>
      <th>M143</th>
      <td>
        Force Control: Speed limit bound over.
      </td>
    </tr>
    <tr>
      <th>M144</th>
      <td>
        Force Control: Sensor is not detected.
      </td>
    </tr>
    <tr>
      <th>M145</th>
      <td>
        Force Control: Wrong sensor selection.
      </td>
    </tr>
    <tr>
      <th>M146</th>
      <td>
        Force Control: Wrong frame selection.
      </td>
    </tr>
    <tr>
      <th>M147</th>
      <td>
        Force Control: Cannot run this mode in Singular point.
      </td>
    </tr>
    <tr>
      <th>M148</th>
      <td>
        Force Control: N/A
      </td>
    </tr>
    <tr>
      <th>M149</th>
      <td>
        Force Control: N/A
      </td>
    </tr>
    <tr>
      <th>M150</th>
      <td>
        This command cannot be used when both analog and digital welding machines are set.
      </td>
    </tr>
    <tr>
      <th>M151</th>
      <td>
        Direct Teaching: Cannot run this function.
      </td>
    </tr>
    <tr>
      <th>M152</th>
      <td>
        Arc: Time-out about the input signal checking.
      </td>
    </tr>
    <tr>
      <th>M153</th>
      <td>
        Arc: Input value exceeds the setting boundary defined in Setup/Device.
      </td>
    </tr>
    <tr>
      <th>M154</th>
      <td>
        Arc: Analog welding machine setting is not set in Setup/Device.
      </td>
    </tr>
    <tr>
      <th>M155</th>
      <td>
        Arc: Wrong Time parameter.
      </td>
    </tr>
    <tr>
      <th>M156</th>
      <td>
        Arc: Initialization failure code appears in the control box voltage generator (DAC).
      </td>
    </tr>
    <tr>
      <th>M157</th>
      <td>
        You cannot put the same value for wire forward port and reverse port number.
      </td>
    </tr>
    <tr>
      <th>M158</th>
      <td>
        The signal port for the selected wire control command is not set.
      </td>
    </tr>
    <tr>
      <th>M159</th>
      <td>
        Robotous FT: RFT806A is selected for the external F/T sensor. Re-boot all systems.
      </td>
    </tr>
    <tr>
      <th>M160</th>
      <td>
        Check whether the selected F/T sensor is connected.
      </td>
    </tr>
    <tr>
      <th>M161</th>
      <td>
        AutoTCP: Calculation Done. Check the calculated values !
      </td>
    </tr>
    <tr>
      <th>M162</th>
      <td>
        AutoTCP: Fail to calculate TCP! Check follows: You shouldn't have the same posture out of the 4 setup postures. Of the four setting postures, there should be no postures near the singularity/dead zone.
      </td>
    </tr>
    <tr>
      <th>M163</th>
      <td>
        TCP info change fail: TCP information changes are called at the same time. Check the program architecture.
      </td>
    </tr>
    <tr>
      <th>M164</th>
      <td>
        TCP info change fail: TCP information changes are called during the motion. Check the program architecture.
      </td>
    </tr>
    <tr>
      <th>M165</th>
      <td>
        TCP info change fail: No matching data in Tool-List.
      </td>
    </tr>
    <tr>
      <th>M166</th>
      <td>
        TCP info change fail: Over payload (mass) input.
      </td>
    </tr>
    <tr>
      <th>M167</th>
      <td>
        TCP info change fail: Input parameter(s) is over its bound.
      </td>
    </tr>
    <tr>
      <th>M168</th>
      <td>
        Bit Combination: Un-available port number is entered.
      </td>
    </tr>
    <tr>
      <th>M169</th>
      <td>
        Bit Combination: End-port number must not be less than the Start-port number.
      </td>
    </tr>
    <tr>
      <th>M170</th>
      <td>
        Bit Combination: Target value should be positive number (or zero).
      </td>
    </tr>
    <tr>
      <th>M171</th>
      <td>
        Bit Combination: A value exceeded the possible range for the port combination.
      </td>
    </tr>
    <tr>
      <th>M172</th>
      <td>
        Bit Combination: One or more ports in the port range are already set as special function(s)
      </td>
    </tr>
    <tr>
      <th>M173</th>
      <td>
        Signal Toggle: Wrong command input.
      </td>
    </tr>
    <tr>
      <th>M174</th>
      <td>
        Signal Toggle: One or more ports you selected are already set as special function(s)
      </td>
    </tr>
    <tr>
      <th>M175</th>
      <td>
        Unit Pulse: Un-available port number is entered.
      </td>
    </tr>
    <tr>
      <th>M176</th>
      <td>
        Unit Pulse: One or more ports you selected are already set as special function(s)
      </td>
    </tr>
    <tr>
      <th>M177</th>
      <td>
        Unit Pulse: Wrong command input.
      </td>
    </tr>
    <tr>
      <th>M178</th>
      <td>
        Unit Pulse: Time parameter should be in 0~2 second range.
      </td>
    </tr>
    <tr>
      <th>M179</th>
      <td>
        Name/String length exceeds the supported range. Or too short.
      </td>
    </tr>
    <tr>
      <th>M180</th>
      <td>
        Name/String contains special characters/spaces that are not allowed.
      </td>
    </tr>
    <tr>
      <th>M181</th>
      <td>
        This setting cannot be changed during program/robot operation.
      </td>
    </tr>
    <tr>
      <th>M182</th>
      <td>
        Communication Err: Robot internal communication or Motor controller can be damaged.
      </td>
    </tr>
    <tr>
      <th>M183</th>
      <td>
        Communication Err: Check the I/O-Extension Board Connection.
      </td>
    </tr>
    <tr>
      <th>M184</th>
      <td>
        Fail to get Loaded project file information.
      </td>
    </tr>
    <tr>
      <th>M185</th>
      <td>
        Program playback has been stopped.<br>
        - The length of the program currently loaded in the 'Control box' is too short.<br>
        - Check if the desired program is correctly loaded in the 'Control box'.
      </td>
    </tr>
    <tr>
      <th>M186</th>
      <td>
        Real/Simulation Mode conversion Fail !<br>
        - Fail to convert operation mode. Check the system operating status.<br>
        - 'Real Mode' is only available when the robot arm is activated.
      </td>
    </tr>
    <tr>
      <th>M187</th>
      <td>
        Failed to load the program through digital input. The load is not possible now (robot is operating, executing program, etc.).
      </td>
    </tr>
    <tr>
      <th>M188</th>
      <td>
        The program is loaded into the Control box via digital input. It may not match the program loaded on the tablet UI.
      </td>
    </tr>
    <tr>
      <th>M189</th>
      <td>
        Failure to reach the motion time constraint! Desired motion cannot be performed within the set time duration. You need to increase the time or increase velocity/acceleration.
      </td>
    </tr>
    <tr>
      <th>M190</th>
      <td>
        This is a beta version feature. This feature is currently not available.
      </td>
    </tr>
    <tr>
      <th>M191</th>
      <td>
        MU-offset value of the selected joint is re-set !!!. Whole system reboot is required for the robot arm activation.
      </td>
    </tr>
    <tr>
      <th>M192</th>
      <td>
        Touch Sensing: Configured searching-speed is too fast.
      </td>
    </tr>
    <tr>
      <th>M193</th>
      <td>
        Touch Sensing: Configured searching-acceleration is too low.
      </td>
    </tr>
    <tr>
      <th>M194</th>
      <td>
        Touch Sensing: Configured searching-distance is too short or long.
      </td>
    </tr>
    <tr>
      <th>M195</th>
      <td>
        Touch Sensing: Some of configuration points are too close.
      </td>
    </tr>
    <tr>
      <th>M196</th>
      <td>
        Touch Sensing: Check the outer/perpendicular point setting.
      </td>
    </tr>
    <tr>
      <th>M197</th>
      <td>
        Touch Sensing: Other motion or program is executing.
      </td>
    </tr>
    <tr>
      <th>M198</th>
      <td>
        Touch Sensing: Searching should be start at the searching-start-position.
      </td>
    </tr>
    <tr>
      <th>M199</th>
      <td>
        Touch Sensing: Sensor signal is detected. 'Get' the current posture information.
      </td>
    </tr>
    <tr>
      <th>M200</th>
      <td>
        Touch Sensing: Sensor signal is not detected during the searching process.
      </td>
    </tr>
    <tr>
      <th>M201</th>
      <td>
        Touch Sensing: To use this function, the 'Touch-sensing configuration' has to be prioritized.
      </td>
    </tr>
    <tr>
      <th>M202</th>
      <td>
        Touch Sensing: To use this function, the 'Touch-sensing configuration & Search' have to be prioritized.
      </td>
    </tr>
    <tr>
      <th>M203</th>
      <td>
        Touch Sensing: Object movement is detected larger than the specified range.
      </td>
    </tr>
    <tr>
      <th>M204</th>
      <td>
        Direct-Teaching Mode: This function is only available at Real-Robot mode.
      </td>
    </tr>
    <tr>
      <th>M205</th>
      <td>
        Direct-Teaching Mode: This function is for the program execution section. It is not available in the current state.
      </td>
    </tr>
    <tr>
      <th>M206</th>
      <td>
        Direct-Teaching Mode: Currently, Direct teaching mode is not available. (Robot arm is not activated or executing another command)
      </td>
    </tr>
    <tr>
      <th>M207</th>
      <td>
        Direct-Teaching Mode: This function (resume or halt) cannot be performed before exiting the Direct-Teaching mode.
      </td>
    </tr>
    <tr>
      <th>M208</th>
      <td>
        Functions that cannot be used in the Thread (Parallel-Program) section are called.
      </td>
    </tr>
    <tr>
      <th>M209</th>
      <td>
        G code: Selected user coordinate system number is out of range.
      </td>
    </tr>
    <tr>
      <th>M210</th>
      <td>
        G code: Entered speed value exceeds the maximum.
      </td>
    </tr>
    <tr>
      <th>M211</th>
      <td>
        G code: Selected initial plane type is out of range.
      </td>
    </tr>
    <tr>
      <th>M212</th>
      <td>
        G code: Selected file-format is not supporting.
      </td>
    </tr>
    <tr>
      <th>M213</th>
      <td>
        G code: Cannot run this function in non-program execution state.
      </td>
    </tr>
    <tr>
      <th>M214</th>
      <td>
        G code: Other motion or command is executing.
      </td>
    </tr>
    <tr>
      <th>M215</th>
      <td>
        G code: Entered code file does not exist.
      </td>
    </tr>
    <tr>
      <th>M216</th>
      <td>
        G code: Number of lines (blocks) is less than or equal to zero.
      </td>
    </tr>
    <tr>
      <th>M217</th>
      <td>
        G code: Entered offset values are out of ranges.
      </td>
    </tr>
    <tr>
      <th>M218</th>
      <td>
        G code: It contains a G code format that is not supported.
      </td>
    </tr>
    <tr>
      <th>M219</th>
      <td>
        G code: There is an instruction part (Chunk) that is not supported.
      </td>
    </tr>
    <tr>
      <th>M220</th>
      <td>
        G code: There is a problem performing the robot motion. It may contain unsupported grammar.
      </td>
    </tr>
    <tr>
      <th>M221</th>
      <td>
        G code: Dummy
      </td>
    </tr>
    <tr>
      <th>M222</th>
      <td>
        Safety Parameter: Save Done...!!! Please double check these parameters!!
      </td>
    </tr>
    <tr>
      <th>M223</th>
      <td>
        Safety Parameter: Save Fail ...!! Cross-checking process with SF board is fail ...!!!
      </td>
    </tr>
    <tr>
      <th>M224</th>
      <td>
        Safety Parameter: Save Fail ...!! Some input parameter is over its bound.
      </td>
    </tr>
    <tr>
      <th>M225</th>
      <td>
        Safety Parameter: Saved parameters are updated in UI.
      </td>
    </tr>
    <tr>
      <th>M226</th>
      <td>
        Digital Welding: Welding Machine is not selected. Select the welder in Setup menu.
      </td>
    </tr>
    <tr>
      <th>M227</th>
      <td>
        Digital Welding: Welder information in Setup and Command is not matching.
      </td>
    </tr>
    <tr>
      <th>M228</th>
      <td>
        Digital Welding: Sync between welder and robot control box is not done.
      </td>
    </tr>
    <tr>
      <th>M229</th>
      <td>
        Digital Welding: Arc generation signal time-out !!!
      </td>
    </tr>
    <tr>
      <th>M230</th>
      <td>
        Digital Welding: Power ready signal was not come.
      </td>
    </tr>
    <tr>
      <th>M231</th>
      <td>
        Digital Welding: Machine ready signal was not come.
      </td>
    </tr>
    <tr>
      <th>M232</th>
      <td>
        Digital Welding: Error signal is coming from the welder.
      </td>
    </tr>
    <tr>
      <th>M233</th>
      <td>
        Digital Welding: Cannot check the welder's touch sensing mode.
      </td>
    </tr>
    <tr>
      <th>M234</th>
      <td>
        Other motion or program command is still executing...!! Cannot run this function.
      </td>
    </tr>
    <tr>
      <th>M235</th>
      <td>
        No-arc option cannot be changed during program flow or during robot operation. It can be changed in stop or pause state.
      </td>
    </tr>
    <tr>
      <th>M236</th>
      <td>
        Safety Wall: Wall number is over its bound.
      </td>
    </tr>
    <tr>
      <th>M237</th>
      <td>
        Safety Wall: Option parameter is over its bound.
      </td>
    </tr>
    <tr>
      <th>M238</th>
      <td>
        Safety Wall: Set Normal vector size is too small.... cannot make plane.
      </td>
    </tr>
    <tr>
      <th>M239</th>
      <td>
        Safety Wall: Set Points are too close... cannot make plane.
      </td>
    </tr>
    <tr>
      <th>M240</th>
      <td>
        Safety Wall: Configuration is done!
      </td>
    </tr>
    <tr>
      <th>M241</th>
      <td>
        Extended Axis: Configuration information of the selected motor is not set.
      </td>
    </tr>
    <tr>
      <th>M242</th>
      <td>
        Extended Axis: Data of the selected motor is not receiving.
      </td>
    </tr>
    <tr>
      <th>M243</th>
      <td>
        Extended Axis: A new motion command is input to the motor that is still running.
      </td>
    </tr>
    <tr>
      <th>M244</th>
      <td>
        Extended Axis: Velocity or acceleration value is too small.
      </td>
    </tr>
    <tr>
      <th>M245</th>
      <td>
        Extended Axis: Velocity or acceleration value exceeds the maximum.
      </td>
    </tr>
    <tr>
      <th>M246</th>
      <td>
        Extended Axis: Target position value exceeds the maximum.
      </td>
    </tr>
    <tr>
      <th>M247</th>
      <td>
        Extended Axis: Configuration is saved.
      </td>
    </tr>
    <tr>
      <th>M248</th>
      <td>
        Music Interface: Input media-file is not loaded in the system.
      </td>
    </tr>
    <tr>
      <th>M249</th>
      <td>
        Music Interface: Wrong file format is selected.
      </td>
    </tr>
    <tr>
      <th>M250</th>
      <td>
        Music Interface: Wrong setting parameters.
      </td>
    </tr>
    <tr>
      <th>M251</th>
      <td>
        Music Interface: Wrong volume setting parameter.
      </td>
    </tr>
    <tr>
      <th>M252</th>
      <td>
        Today is a public holiday. Have a nice day.
      </td>
    </tr>
    <tr>
      <th>M253</th>
      <td>
        Check whether the Safety switches are open or closed.
      </td>
    </tr>
    <tr>
      <th>M254</th>
      <td>
        Check whether the Safety EMS 1 switch is open or closed.
      </td>
    </tr>
    <tr>
      <th>M255</th>
      <td>
        Check whether the Safety EMS 2 switch is open or closed.
      </td>
    </tr>
    <tr>
      <th>M256</th>
      <td>
        Check whether the Safety PRS switch is open or closed.
      </td>
    </tr>
    <tr>
      <th>M257</th>
      <td>
        Check whether the Safety HSS switch is open or closed.
      </td>
    </tr>
    <tr>
      <th>M258</th>
      <td>
        Check whether the Safety SSS switch is open or closed.
      </td>
    </tr>
    <tr>
      <th>M259</th>
      <td>
        Already using the emergency direct teach mode function.
      </td>
    </tr>
    <tr>
      <th>M260</th>
      <td>
        Robot arm activation process is being carried out by another process.
      </td>
    </tr>
    <tr>
      <th>M261</th>
      <td>
        There is a history of the joint angle initialization process. A full system reboot is required.
      </td>
    </tr>
    <tr>
      <th>M262</th>
      <td>
        Unidentified ID is detected during joint communication check process. Type 6
      </td>
    </tr>
    <tr>
      <th>M263</th>
      <td>
        Unidentified ID is detected during joint communication check process. Type 7
      </td>
    </tr>
    <tr>
      <th>M264</th>
      <td>
        During joint communication check process joint 0 is not recognized normally.
      </td>
    </tr>
    <tr>
      <th>M265</th>
      <td>
        During joint communication check process joint 1 is not recognized normally.
      </td>
    </tr>
    <tr>
      <th>M266</th>
      <td>
        During joint communication check process joint 2 is not recognized normally.
      </td>
    </tr>
    <tr>
      <th>M267</th>
      <td>
        During joint communication check process joint 3 is not recognized normally.
      </td>
    </tr>
    <tr>
      <th>M268</th>
      <td>
        During joint communication check process joint 4 is not recognized normally.
      </td>
    </tr>
    <tr>
      <th>M269</th>
      <td>
        During joint communication check process joint 5 is not recognized normally.
      </td>
    </tr>
    <tr>
      <th>M270</th>
      <td>
        Joint communication check process failed.
      </td>
    </tr>
    <tr>
      <th>M271</th>
      <td>
        Tool flange communication check process failed.
      </td>
    </tr>
    <tr>
      <th>M272</th>
      <td>
        Joint No.0 requests the user's angle confirmation and initialization. [PVL]
      </td>
    </tr>
    <tr>
      <th>M273</th>
      <td>
        Joint No.1 requests the user's angle confirmation and initialization. [PVL]
      </td>
    </tr>
    <tr>
      <th>M274</th>
      <td>
        Joint No.2 requests the user's angle confirmation and initialization. [PVL]
      </td>
    </tr>
    <tr>
      <th>M275</th>
      <td>
        Joint No.3 requests the user's angle confirmation and initialization. [PVL]
      </td>
    </tr>
    <tr>
      <th>M276</th>
      <td>
        Joint No.4 requests the user's angle confirmation and initialization. [PVL]
      </td>
    </tr>
    <tr>
      <th>M277</th>
      <td>
        Joint No.5 requests the user's angle confirmation and initialization. [PVL]
      </td>
    </tr>
    <tr>
      <th>M278</th>
      <td>
        Joint encoder requests the user's angle confirmation and initialization. [PVL]
      </td>
    </tr>
    <tr>
      <th>M279</th>
      <td>
        An unstable signal is received from the joint encoder. [NONI]
      </td>
    </tr>
    <tr>
      <th>M280</th>
      <td>
        The angle of joint 0 is out of the maximum + range. You must manually release the brake to turn the joint in the - direction.
      </td>
    </tr>
    <tr>
      <th>M281</th>
      <td>
        The angle of joint 1 is out of the maximum + range. You must manually release the brake to turn the joint in the - direction.
      </td>
    </tr>
    <tr>
      <th>M282</th>
      <td>
        The angle of joint 2 is out of the maximum + range. You must manually release the brake to turn the joint in the - direction.
      </td>
    </tr>
    <tr>
      <th>M283</th>
      <td>
        The angle of joint 3 is out of the maximum + range. You must manually release the brake to turn the joint in the - direction.
      </td>
    </tr>
    <tr>
      <th>M284</th>
      <td>
        The angle of joint 4 is out of the maximum + range. You must manually release the brake to turn the joint in the - direction.
      </td>
    </tr>
    <tr>
      <th>M285</th>
      <td>
        The angle of joint 5 is out of the maximum + range. You must manually release the brake to turn the joint in the - direction.
      </td>
    </tr>
    <tr>
      <th>M286</th>
      <td>
        The angle of joint 0 is out of the maximum - range. You must manually release the brake to turn the joint in the + direction.
      </td>
    </tr>
    <tr>
      <th>M287</th>
      <td>
        The angle of joint 1 is out of the maximum - range. You must manually release the brake to turn the joint in the + direction.
      </td>
    </tr>
    <tr>
      <th>M288</th>
      <td>
        The angle of joint 2 is out of the maximum - range. You must manually release the brake to turn the joint in the + direction.
      </td>
    </tr>
    <tr>
      <th>M289</th>
      <td>
        The angle of joint 3 is out of the maximum - range. You must manually release the brake to turn the joint in the + direction.
      </td>
    </tr>
    <tr>
      <th>M290</th>
      <td>
        The angle of joint 4 is out of the maximum - range. You must manually release the brake to turn the joint in the + direction.
      </td>
    </tr>
    <tr>
      <th>M291</th>
      <td>
        The angle of joint 5 is out of the maximum - range. You must manually release the brake to turn the joint in the + direction.
      </td>
    </tr>
    <tr>
      <th>M292</th>
      <td>
        Joint angle is outside the maximum range of use. You must manually release the brakes to turn the joint into range.
      </td>
    </tr>
    <tr>
      <th>M293</th>
      <td>
        There is a problem with the joint encoder angle or installation angle setting or sensor. Angle synchronization error.
      </td>
    </tr>
    <tr>
      <th>M294</th>
      <td>
        There is a problem in the process of receiving the calibration correction value of the robot arm.
      </td>
    </tr>
    <tr>
      <th>M295</th>
      <td>
        Do not press and hold the direct teach button during the robotic arm preparation process.
      </td>
    </tr>
    <tr>
      <th>M296</th>
      <td>
        Failed to change the mode of the joint motor controller.
      </td>
    </tr>
    <tr>
      <th>M297</th>
      <td>
        Ready for emergency direct teaching use. Emergency operation of the robot arm is possible by pressing the direct teaching button. Be sure to turn off the power after use.
      </td>
    </tr>
    <tr>
      <th>M298</th>
      <td>
        AutoTCP: Fail to calculate TCP! Check follows: You shouldn't have the same posture out of the 8 setup postures. Of the eight setting postures, there should be no postures near the singularity/dead zone.
      </td>
    </tr>
    <tr>
      <th>M299</th>
      <td>
        The history of overcurrent or undervoltage remains in the control box SMPS power supply. A control box reboot is required. If the problem persists, contact the manufacturer.
      </td>
    </tr>
    <tr>
      <th>M300</th>
      <td>
        ROS: Motion is called when the size of the received trajectory is 0.
      </td>
    </tr>
    <tr>
      <th>M301</th>
      <td>
        ROS: Size of the received trajectory and the size specified in the motion command do not match.
      </td>
    </tr>
    <tr>
      <th>M302</th>
      <td>
        ROS: Time parameter value must always be received as a positive number.
      </td>
    </tr>
    <tr>
      <th>M303</th>
      <td>
        ROS: Time parameter must increase in ascending order.
      </td>
    </tr>
    <tr>
      <th>M304</th>
      <td>
        ROS: The starting point of the trajectory should coincide with the last position of the robot.
      </td>
    </tr>
    <tr>
      <th>M305</th>
      <td>
        Program Convert: Same operation is already being performed.
      </td>
    </tr>
    <tr>
      <th>M306</th>
      <td>
        Program Convert: Incorrect option number has been entered.
      </td>
    </tr>
    <tr>
      <th>M307</th>
      <td>
        Program Convert: This function cannot be called while the robot is in motion.
      </td>
    </tr>
    <tr>
      <th>M308</th>
      <td>
        Program Convert: Timeout occurred in the process of confirming the end of the existing program.
      </td>
    </tr>
    <tr>
      <th>M309</th>
      <td>
        Program Convert: Timeout occurred while loading a new program.
      </td>
    </tr>
    <tr>
      <th>M310</th>
      <td>
        Program Convert: Another LOAD function is already being performed.
      </td>
    </tr>
    <tr>
      <th>M311</th>
      <td>
        Program Convert: The called program does not exist or is damaged in the control box.
      </td>
    </tr>
    <tr>
      <th>M312</th>
      <td>
        Program Convert: The called program exists in the control box, but it is damaged.
      </td>
    </tr>
    <tr>
      <th>M313</th>
      <td>
        CAN transmission: ID or DLC or channel is out of range.
      </td>
    </tr>
    <tr>
      <th>M314</th>
      <td>
        External Axis: An incorrect auxiliary axis number has been received.
      </td>
    </tr>
    <tr>
      <th>M315</th>
      <td>
        External Axis: At least 4 points of information are required for axis calibration.
      </td>
    </tr>
    <tr>
      <th>M316</th>
      <td>
        External Axis: The axis of the selected number is an unset axis. Check the Setup page.
      </td>
    </tr>
    <tr>
      <th>M317</th>
      <td>
        External Axis: During the axis calibration process, the information must be saved for the same axis.
      </td>
    </tr>
    <tr>
      <th>M318</th>
      <td>
        External Axis: Among the saved data for axis calibration, there are duplicate data/too close data.
      </td>
    </tr>
    <tr>
      <th>M319</th>
      <td>
        External Axis: Information has been added to axis calibration.
      </td>
    </tr>
    <tr>
      <th>M320</th>
      <td>
        External Axis: Calibration of the selected axis is complete.
      </td>
    </tr>
    <tr>
      <th>M321</th>
      <td>
        External Axis: The calibration process for the selected axis has failed. The error is more than the allowable range.
      </td>
    </tr>
    <tr>
      <th>M322</th>
      <td>
        External Axis: During other operation/program operation.
      </td>
    </tr>
    <tr>
      <th>M323</th>
      <td>
        External Axis: Start Calibration ... !!!
      </td>
    </tr>
    <tr>
      <th>M324</th>
      <td>
        Robot motion speed or acceleration is outside the usable range.
      </td>
    </tr>
    <tr>
      <th>M325</th>
      <td>
        External axis speed or acceleration is outside the usable range.
      </td>
    </tr>
    <tr>
      <th>M326</th>
      <td>
        External axis target value is out of the usable range.
      </td>
    </tr>
    <tr>
      <th>M327</th>
      <td>
        It is the point where the mathematical operation of the offset or shift function is impossible.
      </td>
    </tr>
    <tr>
      <th>M328</th>
      <td>
        The program to be loaded through the input signal is not set.
      </td>
    </tr>
    <tr>
      <th>M329</th>
      <td>
        This is the name of the project (.wsl) that is not saved in the control box.
      </td>
    </tr>
    <tr>
      <th>M330</th>
      <td>
        A grammatical error exists in the set project.
      </td>
    </tr>
    <tr>
      <th>M331</th>
      <td>
        The called file information does not exist in the Control box.
      </td>
    </tr>
    <tr>
      <th>M332</th>
      <td>
        The format of the row of the called CSV file is not supported.
      </td>
    </tr>
    <tr>
      <th>M333</th>
      <td>
        The position of the called row is outside the length of the file.
      </td>
    </tr>
    <tr>
      <th>M334</th>
      <td>
        The position of the called column is outside the length of the file.
      </td>
    </tr>
    <tr>
      <th>M335</th>
      <td>
        Failed to get information from the referenced index.
      </td>
    </tr>
    <tr>
      <th>M336</th>
      <td>
        Non-numeric information is stored in the called location.
      </td>
    </tr>
    <tr>
      <th>M337</th>
      <td>
        The previously executed nutrunner command did not end.
      </td>
    </tr>
    <tr>
      <th>M338</th>
      <td>
        Nutrunner instruction exit check timeout.
      </td>
    </tr>
    <tr>
      <th>M339</th>
      <td>
        The called thread is not the event thread.
      </td>
    </tr>
    <tr>
      <th>M340</th>
      <td>
        The called thread has no content.
      </td>
    </tr>
    <tr>
      <th>M341</th>
      <td>
        The event thread that has not yet finished executing the command is called.
      </td>
    </tr>
    <tr>
      <th>M342</th>
      <td>
        This function is only available during program playback.
      </td>
    </tr>
    <tr>
      <th>M343</th>
      <td>
        This feature is not available in TCP/IP UI connection mode.
      </td>
    </tr>
    <tr>
      <th>M344</th>
      <td>
        Joint Protection Error: Big Error 0
      </td>
    </tr>
    <tr>
      <th>M345</th>
      <td>
        Joint Protection Error: Big Error 1
      </td>
    </tr>
    <tr>
      <th>M346</th>
      <td>
        Joint Protection Error: Big Error 2
      </td>
    </tr>
    <tr>
      <th>M347</th>
      <td>
        Joint Protection Error: Big Error 3
      </td>
    </tr>
    <tr>
      <th>M348</th>
      <td>
        Joint Protection Error: Big Error 4
      </td>
    </tr>
    <tr>
      <th>M349</th>
      <td>
        Joint Protection Error: Big Error 5
      </td>
    </tr>
    <tr>
      <th>M350</th>
      <td>
        Joint Protection Error: Communication Input Error 0
      </td>
    </tr>
    <tr>
      <th>M351</th>
      <td>
        Joint Protection Error: Communication Input Error 1
      </td>
    </tr>
    <tr>
      <th>M352</th>
      <td>
        Joint Protection Error: Communication Input Error 2
      </td>
    </tr>
    <tr>
      <th>M353</th>
      <td>
        Joint Protection Error: Communication Input Error 3
      </td>
    </tr>
    <tr>
      <th>M354</th>
      <td>
        Joint Protection Error: Communication Input Error 4
      </td>
    </tr>
    <tr>
      <th>M355</th>
      <td>
        Joint Protection Error: Communication Input Error 5
      </td>
    </tr>
    <tr>
      <th>M356</th>
      <td>
        Joint Protection Error: Motor Rotor JAM Error 0
      </td>
    </tr>
    <tr>
      <th>M357</th>
      <td>
        Joint Protection Error: Motor Rotor JAM Error 1
      </td>
    </tr>
    <tr>
      <th>M358</th>
      <td>
        Joint Protection Error: Motor Rotor JAM Error 2
      </td>
    </tr>
    <tr>
      <th>M359</th>
      <td>
        Joint Protection Error: Motor Rotor JAM Error 3
      </td>
    </tr>
    <tr>
      <th>M360</th>
      <td>
        Joint Protection Error: Motor Rotor JAM Error 4
      </td>
    </tr>
    <tr>
      <th>M361</th>
      <td>
        Joint Protection Error: Motor Rotor JAM Error 5
      </td>
    </tr>
    <tr>
      <th>M362</th>
      <td>
        Joint Protection Error: Motor Current Over Error 0
      </td>
    </tr>
    <tr>
      <th>M363</th>
      <td>
        Joint Protection Error: Motor Current Over Error 1
      </td>
    </tr>
    <tr>
      <th>M364</th>
      <td>
        Joint Protection Error: Motor Current Over Error 2
      </td>
    </tr>
    <tr>
      <th>M365</th>
      <td>
        Joint Protection Error: Motor Current Over Error 3
      </td>
    </tr>
    <tr>
      <th>M366</th>
      <td>
        Joint Protection Error: Motor Current Over Error 4
      </td>
    </tr>
    <tr>
      <th>M367</th>
      <td>
        Joint Protection Error: Motor Current Over Error 5
      </td>
    </tr>
    <tr>
      <th>M368</th>
      <td>
        Joint Protection Error: Motor Position Limit Error 0
      </td>
    </tr>
    <tr>
      <th>M369</th>
      <td>
        Joint Protection Error: Motor Position Limit Error 1
      </td>
    </tr>
    <tr>
      <th>M370</th>
      <td>
        Joint Protection Error: Motor Position Limit Error 2
      </td>
    </tr>
    <tr>
      <th>M371</th>
      <td>
        Joint Protection Error: Motor Position Limit Error 3
      </td>
    </tr>
    <tr>
      <th>M372</th>
      <td>
        Joint Protection Error: Motor Position Limit Error 4
      </td>
    </tr>
    <tr>
      <th>M373</th>
      <td>
        Joint Protection Error: Motor Position Limit Error 5
      </td>
    </tr>
    <tr>
      <th>M374</th>
      <td>
        Joint Protection Error: Board Mode Error 0
      </td>
    </tr>
    <tr>
      <th>M375</th>
      <td>
        Joint Protection Error: Board Mode Error 1
      </td>
    </tr>
    <tr>
      <th>M376</th>
      <td>
        Joint Protection Error: Board Mode Error 2
      </td>
    </tr>
    <tr>
      <th>M377</th>
      <td>
        Joint Protection Error: Board Mode Error 3
      </td>
    </tr>
    <tr>
      <th>M378</th>
      <td>
        Joint Protection Error: Board Mode Error 4
      </td>
    </tr>
    <tr>
      <th>M379</th>
      <td>
        Joint Protection Error: Board Mode Error 5
      </td>
    </tr>
    <tr>
      <th>M380</th>
      <td>
        Joint Protection Error: Board Temperature Error 0
      </td>
    </tr>
    <tr>
      <th>M381</th>
      <td>
        Joint Protection Error: Board Temperature Error 1
      </td>
    </tr>
    <tr>
      <th>M382</th>
      <td>
        Joint Protection Error: Board Temperature Error 2
      </td>
    </tr>
    <tr>
      <th>M383</th>
      <td>
        Joint Protection Error: Board Temperature Error 3
      </td>
    </tr>
    <tr>
      <th>M384</th>
      <td>
        Joint Protection Error: Board Temperature Error 4
      </td>
    </tr>
    <tr>
      <th>M385</th>
      <td>
        Joint Protection Error: Board Temperature Error 5
      </td>
    </tr>
    <tr>
      <th>M386</th>
      <td>
        Joint Protection Error: Tracking match Error 0
      </td>
    </tr>
    <tr>
      <th>M387</th>
      <td>
        Joint Protection Error: Tracking match Error 1
      </td>
    </tr>
    <tr>
      <th>M388</th>
      <td>
        Joint Protection Error: Tracking match Error 2
      </td>
    </tr>
    <tr>
      <th>M389</th>
      <td>
        Joint Protection Error: Tracking match Error 3
      </td>
    </tr>
    <tr>
      <th>M390</th>
      <td>
        Joint Protection Error: Tracking match Error 4
      </td>
    </tr>
    <tr>
      <th>M391</th>
      <td>
        Joint Protection Error: Tracking match Error 5
      </td>
    </tr>
    <tr>
      <th>M392</th>
      <td>
        This function is only available during welding.
      </td>
    </tr>
    <tr>
      <th>M393</th>
      <td>
        Referenceable index range in array information is out of range.
      </td>
    </tr>
    <tr>
      <th>M394</th>
      <td>
        Modbus Client: Failed to connect to the server.
      </td>
    </tr>
    <tr>
      <th>M395</th>
      <td>
        Failed to send mail.
      </td>
    </tr>
    <tr>
      <th>M396</th>
      <td>
        Shut off robot power supply: The robot base is tilted excessively.
      </td>
    </tr>
    <tr>
      <th>M397</th>
      <td>
        Pattern: The number of patterns available in the program is exceeded.
      </td>
    </tr>
    <tr>
      <th>M398</th>
      <td>
        Pattern: When configuring a pattern, at least 2 must be entered on each side.
      </td>
    </tr>
    <tr>
      <th>M399</th>
      <td>
        Pattern: Failed to retrieve the entered pattern ID.
      </td>
    </tr>
    <tr>
      <th>M400</th>
      <td>
        Pattern: There are patterns using the same pattern ID.
      </td>
    </tr>
    <tr>
      <th>M401</th>
      <td>
        Robotous FT: RFT64SB is selected for the external F/T sensor. Re-boot all systems.
      </td>
    </tr>
    <tr>
      <th>M402</th>
      <td>
        This function is only available after the robot arm is activated.
      </td>
    </tr>
    <tr>
      <th>M403</th>
      <td>
        OnRobot HEX FT: OnRobot HEX is selected for the external F/T sensor. Re-boot all systems.
      </td>
    </tr>
    <tr>
      <th>M404</th>
      <td>
        Socket number 0 to be used in the Interface has already been set with another special function.
      </td>
    </tr>
    <tr>
      <th>M405</th>
      <td>
        Socket number 1 to be used in the Interface has already been set with another special function.
      </td>
    </tr>
    <tr>
      <th>M406</th>
      <td>
        Socket number 2 to be used in the Interface has already been set with another special function.
      </td>
    </tr>
    <tr>
      <th>M407</th>
      <td>
        Socket number 3 to be used in the Interface has already been set with another special function.
      </td>
    </tr>
    <tr>
      <th>M408</th>
      <td>
        Socket number 4 to be used in the Interface has already been set with another special function.
      </td>
    </tr>
    <tr>
      <th>M409</th>
      <td>
        The socket number 0 you want to use is already set with another special function.
      </td>
    </tr>
    <tr>
      <th>M410</th>
      <td>
        The socket number 1 you want to use is already set with another special function.
      </td>
    </tr>
    <tr>
      <th>M411</th>
      <td>
        The socket number 2 you want to use is already set with another special function.
      </td>
    </tr>
    <tr>
      <th>M412</th>
      <td>
        The socket number 3 you want to use is already set with another special function.
      </td>
    </tr>
    <tr>
      <th>M413</th>
      <td>
        The socket number 4 you want to use is already set with another special function.
      </td>
    </tr>
    <tr>
      <th>M414</th>
      <td>
        The program cannot be started during the robot arm activation process.
      </td>
    </tr>
    <tr>
      <th>M415</th>
      <td>
        The program cannot be started because the digital input special function Program Start Block signal is being received.
      </td>
    </tr>
    <tr>
      <th>M416</th>
      <td>
        The control box network settings have been changed. Be sure to reboot the robot control box for normal operation.
      </td>
    </tr>
    <tr>
      <th>M417</th>
      <td>
        The function definition for the jog button on the hand controller has been changed.
      </td>
    </tr>
    <tr>
      <th>M418</th>
      <td>
        For the settings related to operation, the button functions when pressed and released are fixed for safety.
      </td>
    </tr>
    <tr>
      <th>M419</th>
      <td>
        In order to use the interface communication function, the process of connecting and setting with the server must be preceded.
      </td>
    </tr>
    <tr>
      <th>M420</th>
      <td>
        Failed to connect to PLC-HMI-Vision server using socket 0 in the Interface.
      </td>
    </tr>
    <tr>
      <th>M421</th>
      <td>
        Failed to connect to PLC-HMI-Vision server using socket 1 in the Interface.
      </td>
    </tr>
    <tr>
      <th>M422</th>
      <td>
        Failed to connect to PLC-HMI-Vision server using socket 2 in the Interface.
      </td>
    </tr>
    <tr>
      <th>M423</th>
      <td>
        Failed to connect to PLC-HMI-Vision server using socket 3 in the Interface.
      </td>
    </tr>
    <tr>
      <th>M424</th>
      <td>
        Failed to connect to PLC-HMI-Vision server using socket 4 in the Interface.
      </td>
    </tr>
    <tr>
      <th>M425</th>
      <td>
        Failed to write a single variable through socket 0 of the Interface. A normal ACK signal did not arrive from the server.
      </td>
    </tr>
    <tr>
      <th>M426</th>
      <td>
        Failed to write a single variable through socket 1 of the Interface. A normal ACK signal did not arrive from the server.
      </td>
    </tr>
    <tr>
      <th>M427</th>
      <td>
        Failed to write a single variable through socket 2 of the Interface. A normal ACK signal did not arrive from the server.
      </td>
    </tr>
    <tr>
      <th>M428</th>
      <td>
        Failed to write a single variable through socket 3 of the Interface. A normal ACK signal did not arrive from the server.
      </td>
    </tr>
    <tr>
      <th>M429</th>
      <td>
        Failed to write a single variable through socket 4 of the Interface. A normal ACK signal did not arrive from the server.
      </td>
    </tr>
    <tr>
      <th>M430</th>
      <td>
        Failed to read a single variable through socket 0 of the Interface. A normal ACK signal did not arrive from the server.
      </td>
    </tr>
    <tr>
      <th>M431</th>
      <td>
        Failed to read a single variable through socket 1 of the Interface. A normal ACK signal did not arrive from the server.
      </td>
    </tr>
    <tr>
      <th>M432</th>
      <td>
        Failed to read a single variable through socket 2 of the Interface. A normal ACK signal did not arrive from the server.
      </td>
    </tr>
    <tr>
      <th>M433</th>
      <td>
        Failed to read a single variable through socket 3 of the Interface. A normal ACK signal did not arrive from the server.
      </td>
    </tr>
    <tr>
      <th>M434</th>
      <td>
        Failed to read a single variable through socket 4 of the Interface. A normal ACK signal did not arrive from the server.
      </td>
    </tr>
    <tr>
      <th>M435</th>
      <td>
        Failed to write array numbers through socket 0 of the Interface. A normal ACK signal did not arrive from the server.
      </td>
    </tr>
    <tr>
      <th>M436</th>
      <td>
        Failed to write array numbers through socket 1 of the Interface. A normal ACK signal did not arrive from the server.
      </td>
    </tr>
    <tr>
      <th>M437</th>
      <td>
        Failed to write array numbers through socket 2 of the Interface. A normal ACK signal did not arrive from the server.
      </td>
    </tr>
    <tr>
      <th>M438</th>
      <td>
        Failed to write array numbers through socket 3 of the Interface. A normal ACK signal did not arrive from the server.
      </td>
    </tr>
    <tr>
      <th>M439</th>
      <td>
        Failed to write array numbers through socket 4 of the Interface. A normal ACK signal did not arrive from the server.
      </td>
    </tr>
    <tr>
      <th>M440</th>
      <td>
        Failed to read array numbers through socket 0 of the Interface. A normal ACK signal did not arrive from the server.
      </td>
    </tr>
    <tr>
      <th>M441</th>
      <td>
        Failed to read array numbers through socket 1 of the Interface. A normal ACK signal did not arrive from the server.
      </td>
    </tr>
    <tr>
      <th>M442</th>
      <td>
        Failed to read array numbers through socket 2 of the Interface. A normal ACK signal did not arrive from the server.
      </td>
    </tr>
    <tr>
      <th>M443</th>
      <td>
        Failed to read array numbers through socket 3 of the Interface. A normal ACK signal did not arrive from the server.
      </td>
    </tr>
    <tr>
      <th>M444</th>
      <td>
        Failed to read array numbers through socket 4 of the Interface. A normal ACK signal did not arrive from the server.
      </td>
    </tr>
    <tr>
      <th>M445</th>
      <td>
        The temperature of the robot arm is outside the recommended operating environment. Be careful when using.
      </td>
    </tr>
    <tr>
      <th>M446</th>
      <td>
        Weaving Setting Error: The axis selection is incorrect. The same axis cannot be selected.
      </td>
    </tr>
    <tr>
      <th>M447</th>
      <td>
        Weaving Setting Error: The scale value is outside the acceptable range.
      </td>
    </tr>
    <tr>
      <th>M448</th>
      <td>
        Weaving Setting Error: The offset value cannot be set beyond the maximum amplitude.
      </td>
    </tr>
    <tr>
      <th>M449</th>
      <td>
        EtherNet IP Adapter On settings have been saved. A full system reboot is required for the settings to take effect.
      </td>
    </tr>
    <tr>
      <th>M450</th>
      <td>
        EtherNet IP Adapter Off settings have been saved. A full system reboot is required for the settings to take effect.
      </td>
    </tr>
    <tr>
      <th>M451</th>
      <td>
        EtherNet IP Adapter module is installed.
      </td>
    </tr>
    <tr>
      <th>M452</th>
      <td>
        EtherNet IP Adpator module is removed.
      </td>
    </tr>
    <tr>
      <th>M453</th>
      <td>
        Communication connection with OnRobot Compute Box failed.
      </td>
    </tr>
    <tr>
      <th>M454</th>
      <td>
        Failed to receive ACK for initial setup from OnRobot Compute Box.
      </td>
    </tr>
    <tr>
      <th>M455</th>
      <td>
        Failed to receive ACK for motion command from OnRobot Compute Box.
      </td>
    </tr>
    <tr>
      <th>M456</th>
      <td>
        To connect to the Onrobot Compute Box, user must first perform the gripper initial settings first.
      </td>
    </tr>
    <tr>
      <th>M457</th>
      <td>
        Data reception from the Side IO Board is cut off. Communication noise may be coming from outside. The communication line inside the control box may be unstable. The fuse of the IO Board may be broken.
      </td>
    </tr>
    <tr>
      <th>M458</th>
      <td>
        A low voltage output of DC 48V SMPS is detected. Check ACtoDC48V SMPS status. There may be external AC noise. If the problem persists, disconnect the AC cable for at least 15 minutes and reuse it.
      </td>
    </tr>
    <tr>
      <th>M459</th>
      <td>
        Point with the same name as a string does not exist.
      </td>
    </tr>
    <tr>
      <th>M460</th>
      <td>
        Joint with the same name as a string does not exist.
      </td>
    </tr>
    <tr>
      <th>M461</th>
      <td>
        Control box POWER SWE error. The SMPS part may be operating abnormally or the control box may not be grounded.
      </td>
    </tr>
    <tr>
      <th>M462</th>
      <td>
        Communication error: The communication of joint 0 of the robot arm is unstable.
      </td>
    </tr>
    <tr>
      <th>M463</th>
      <td>
        Communication error: The communication of joint 1 of the robot arm is unstable.
      </td>
    </tr>
    <tr>
      <th>M464</th>
      <td>
        Communication error: The communication of joint 2 of the robot arm is unstable.
      </td>
    </tr>
    <tr>
      <th>M465</th>
      <td>
        Communication error: The communication of joint 3 of the robot arm is unstable.
      </td>
    </tr>
    <tr>
      <th>M466</th>
      <td>
        Communication error: The communication of joint 4 of the robot arm is unstable.
      </td>
    </tr>
    <tr>
      <th>M467</th>
      <td>
        Communication error: The communication of joint 5 of the robot arm is unstable.
      </td>
    </tr>
    <tr>
      <th>M468</th>
      <td>
        Communication error: The communication of tool flange of the robot arm is unstable.
      </td>
    </tr>
    <tr>
      <th>M469</th>
      <td>
        Extended Axis: The difference between the command position of joint 0 and the encoder position of AC servo is out of range.
      </td>
    </tr>
    <tr>
      <th>M470</th>
      <td>
        Extended Axis: The difference between the command position of joint 1 and the encoder position of AC servo is out of range.
      </td>
    </tr>
    <tr>
      <th>M471</th>
      <td>
        Extended Axis: The difference between the command position of joint 2 and the encoder position of AC servo is out of range.
      </td>
    </tr>
    <tr>
      <th>M472</th>
      <td>
        Extended Axis: The difference between the command position of joint 3 and the encoder position of AC servo is out of range.
      </td>
    </tr>
    <tr>
      <th>M473</th>
      <td>
        Extended Axis: The difference between the command position of joint 4 and the encoder position of AC servo is out of range.
      </td>
    </tr>
    <tr>
      <th>M474</th>
      <td>
        Extended Axis: The difference between the command position of joint 5 and the encoder position of AC servo is out of range.
      </td>
    </tr>
    <tr>
      <th>M475</th>
      <td>
        Extended Axis: An error is detected in the AC servo driver of joint 0.
      </td>
    </tr>
    <tr>
      <th>M476</th>
      <td>
        Extended Axis: An error is detected in the AC servo driver of joint 1.
      </td>
    </tr>
    <tr>
      <th>M477</th>
      <td>
        Extended Axis: An error is detected in the AC servo driver of joint 2.
      </td>
    </tr>
    <tr>
      <th>M478</th>
      <td>
        Extended Axis: An error is detected in the AC servo driver of joint 3.
      </td>
    </tr>
    <tr>
      <th>M479</th>
      <td>
        Extended Axis: An error is detected in the AC servo driver of joint 4.
      </td>
    </tr>
    <tr>
      <th>M480</th>
      <td>
        Extended Axis: An error is detected in the AC servo driver of joint 5.
      </td>
    </tr>
    <tr>
      <th>M481</th>
      <td>
        Execution of the previous command is not finished in the selected digital output port and buffer number.
      </td>
    </tr>
    <tr>
      <th>M482</th>
      <td>
        ProfiNet On settings have been saved. A full system reboot is required for the settings to take effect.
      </td>
    </tr>
    <tr>
      <th>M483</th>
      <td>
        ProfiNet Off settings have been saved. A full system reboot is required for the settings to take effect.
      </td>
    </tr>
    <tr>
      <th>M484</th>
      <td>
        Variable with the same name as a string does not exist.
      </td>
    </tr>
    <tr>
      <th>M485</th>
      <td>
        Robot arm has been powered off by the EMS 2 Safety switch.
      </td>
    </tr>
    <tr>
      <th>M486</th>
      <td>
        Robot arm has been powered off by the PRS Safety switch.
      </td>
    </tr>
    <tr>
      <th>M487</th>
      <td>
        Robot arm has been powered off by the HSS Safety switch.
      </td>
    </tr>
    <tr>
      <th>M488</th>
      <td>
        Robot arm has been powered off by the SSS Safety switch.
      </td>
    </tr>
    <tr>
      <th>M489</th>
      <td>
        Music Interface: The driver required to play music is not installed.
      </td>
    </tr>
    <tr>
      <th>M490</th>
      <td>
        The robot arm is activated in emergency mode or recovery mode. In this case, the program cannot be played.
      </td>
    </tr>
    <tr>
      <th>M491</th>
      <td>
        This function cannot be used in Tool I/O.
      </td>
    </tr>
    <tr>
      <th>M492</th>
      <td>
        Fail to get IO Board state data. Check IO board cable connection state. 24V IO Fuse may have been disconnected or broken. Control Box 24V SMPS may be damaged.
      </td>
    </tr>
    <tr>
      <th>M493</th>
      <td>
        Motion macro: Identical points exist among corner points.
      </td>
    </tr>
    <tr>
      <th>M494</th>
      <td>
        Motion macro: For the number of intervals, a number greater than 1 must be entered.
      </td>
    </tr>
    <tr>
      <th>M495</th>
      <td>
        Motion macro: Arc fitting failed. Please check that the set point information is correct.
      </td>
    </tr>
    <tr>
      <th>M496</th>
      <td>
        It is out of the safety plane area. Robot arm motion is limited.
      </td>
    </tr>
    <tr>
      <th>M497</th>
      <td>
        The joint angle of the robot arm is outside the Safety Limit range. Robot arm motion is limited.
      </td>
    </tr>
    <tr>
      <th>M498</th>
      <td>
        The CPU temperature inside the control box is high. Check if there is any problem with the CPU fan coupling or the control box main ventilation system.
      </td>
    </tr>
    <tr>
      <th>M499</th>
      <td>
        The temperature of the motherboard inside the control box is high. Make sure there are no problems with the main ventilation system.
      </td>
    </tr>
    <tr>
      <th>M500</th>
      <td>
        The set speed value is too small.
      </td>
    </tr>
    <tr>
      <th>M501</th>
      <td>
        The set acceleration value is too small.
      </td>
    </tr>
    <tr>
      <th>M502</th>
      <td>
        To run the program from the middle, you must select a line within the main program area.
      </td>
    </tr>
    <tr>
      <th>M503</th>
      <td>
        A divide by zero exists during an arithmetic operation, stopping program operation.
      </td>
    </tr>
    <tr>
      <th>M504</th>
      <td>
        Information stored in the system does not exist.
      </td>
    </tr>
    <tr>
      <th>M505</th>
      <td>
        Duplex pins can only be configured on odd-numbered pins. This function works with the pin of the previous number.
      </td>
    </tr>
    <tr>
      <th>M506</th>
      <td>
        The port defined in the IO special function cannot be assigned to the software PLC port.
      </td>
    </tr>
    <tr>
      <th>M507</th>
      <td>
        Ports used for Software PLC functions cannot be designated as IO special functions.
      </td>
    </tr>
    <tr>
      <th>M508</th>
      <td>
        The IO special function has been saved. If the software PLC uses the same I/O port, be aware that unintended situations may occur.
      </td>
    </tr>
    <tr>
      <th>M509</th>
      <td>
        Software PLC settings have been saved. If the same I/O port is used in the IO special function settings, be careful as unintended situations may occur.
      </td>
    </tr>
    <tr>
      <th>M510</th>
      <td>
        MUL Error. The angle of joint 0 has moved more than 90 degrees from the last used value in the no-power state. Release the brake with your hand and return the joint to its original position.
      </td>
    </tr>
    <tr>
      <th>M511</th>
      <td>
        MUL Error. The angle of joint 1 has moved more than 90 degrees from the last used value in the no-power state. Release the brake with your hand and return the joint to its original position.
      </td>
    </tr>
    <tr>
      <th>M512</th>
      <td>
        MUL Error. The angle of joint 2 has moved more than 90 degrees from the last used value in the no-power state. Release the brake with your hand and return the joint to its original position.
      </td>
    </tr>
    <tr>
      <th>M513</th>
      <td>
        MUL Error. The angle of joint 3 has moved more than 90 degrees from the last used value in the no-power state. Release the brake with your hand and return the joint to its original position.
      </td>
    </tr>
    <tr>
      <th>M514</th>
      <td>
        MUL Error. The angle of joint 4 has moved more than 90 degrees from the last used value in the no-power state. Release the brake with your hand and return the joint to its original position.
      </td>
    </tr>
    <tr>
      <th>M515</th>
      <td>
        MUL Error. The angle of joint 5 has moved more than 90 degrees from the last used value in the no-power state. Release the brake with your hand and return the joint to its original position.
      </td>
    </tr>
    <tr>
      <th>M516</th>
      <td>
        Settings have been changed. Reboot the control box.
      </td>
    </tr>
    <tr>
      <th>M517</th>
      <td>
        AIDIN FT : AIDIN AFT is selected for the external F/T sensor. Re-boot all systems.
      </td>
    </tr>
    <tr>
      <th>M518</th>
      <td>
        The file transfer driver for the TCP IP connection method is not installed in the control box.
      </td>
    </tr>
    <tr>
      <th>M519</th>
      <td>
        The maximum number of variables supported by the Modbus client polling function has been exceeded.
      </td>
    </tr>
    <tr>
      <th>M520</th>
      <td>
        Safety polygon area has been violated. Robotic arm movements are limited.
      </td>
    </tr>
    <tr>
      <th>M521</th>
      <td>
        Unable to set safety polygon. A minimum of 3 points is required. Each side of a polygon must not overlap.
      </td>
    </tr>
    <tr>
      <th>M522</th>
      <td>
        There is a problem with the remaining RAM of the PC inside the control box. Check your system.
      </td>
    </tr>
    <tr>
      <th>M523</th>
      <td>
        The temperature of the HDD inside the control box is high. Make sure there are no problems with the main ventilation system.
      </td>
    </tr>
    <tr>
      <th>M524</th>
      <td>
        Protector FLT error persists at robot arm joint 0. Problems may arise when operating the robot arm.
      </td>
    </tr>
    <tr>
      <th>M525</th>
      <td>
        Protector FLT error persists at robot arm joint 1. Problems may arise when operating the robot arm.
      </td>
    </tr>
    <tr>
      <th>M526</th>
      <td>
        Protector FLT error persists at robot arm joint 2. Problems may arise when operating the robot arm.
      </td>
    </tr>
    <tr>
      <th>M527</th>
      <td>
        Protector FLT error persists at robot arm joint 3. Problems may arise when operating the robot arm.
      </td>
    </tr>
    <tr>
      <th>M528</th>
      <td>
        Protector FLT error persists at robot arm joint 4. Problems may arise when operating the robot arm.
      </td>
    </tr>
    <tr>
      <th>M529</th>
      <td>
        Protector FLT error persists at robot arm joint 5. Problems may arise when operating the robot arm.
      </td>
    </tr>
    <tr>
      <th>M530</th>
      <td>
        Fitting: The number of input points must be 3 or more.
      </td>
    </tr>
    <tr>
      <th>M531</th>
      <td>
        Fitting: The number of reference points and the number of data points are different.
      </td>
    </tr>
    <tr>
      <th>M532</th>
      <td>
        Fitting: This function cannot be performed.
      </td>
    </tr>
    <tr>
      <th>M533</th>
      <td>
        Fitting: A problem occurred during numerical calculation.
      </td>
    </tr>
    <tr>
      <th>M534</th>
      <td>
        Fitting: The calculated result exceeds the allowed error range.
      </td>
    </tr>
    <tr>
      <th>M535</th>
      <td>
        Fitting: There are points that are too close.
      </td>
    </tr>
    <tr>
      <th>M536</th>
      <td>
        Fitting: The points used in the calculation lie on a straight line.
      </td>
    </tr>
    <tr>
      <th>M537</th>
      <td>
        Fitting: Calculation failed.
      </td>
    </tr>
    <tr>
      <th>M538</th>
      <td>
        Fitting: This function cannot be performed during operation.
      </td>
    </tr>
    <tr>
      <th>M539</th>
      <td>
        Fitting: The point spacing difference between the reference point and the data point exceeds the standard.
      </td>
    </tr>
    <tr>
      <th>M540</th>
      <td>
        Communication error: The communication of joint 0 of the robot arm is unstable. L2C communication line is unstable.
      </td>
    </tr>
    <tr>
      <th>M541</th>
      <td>
        Communication error: The communication of joint 1 of the robot arm is unstable. L2C communication line is unstable.
      </td>
    </tr>
    <tr>
      <th>M542</th>
      <td>
        Communication error: The communication of joint 2 of the robot arm is unstable. L2C communication line is unstable.
      </td>
    </tr>
    <tr>
      <th>M543</th>
      <td>
        Communication error: The communication of joint 3 of the robot arm is unstable. L2C communication line is unstable.
      </td>
    </tr>
    <tr>
      <th>M544</th>
      <td>
        Communication error: The communication of joint 4 of the robot arm is unstable. L2C communication line is unstable.
      </td>
    </tr>
    <tr>
      <th>M545</th>
      <td>
        Communication error: The communication of joint 5 of the robot arm is unstable. L2C communication line is unstable.
      </td>
    </tr>
    <tr>
      <th>M546</th>
      <td>
        Communication error: The communication of tool flange of the robot arm is unstable. L2C communication line is unstable.
      </td>
    </tr>
    <tr>
      <th>M547</th>
      <td>
        Failure to receive IO board status data due to L2C communication line instability.
      </td>
    </tr>
    <tr>
      <th>M548</th>
      <td>
        The gripper initialization process timed out. No normal data was received from the gripper.
      </td>
    </tr>
    <tr>
      <th>M549</th>
      <td>
        Joint Protection Error : Motor Stator Temperature Error at Joint 0
      </td>
    </tr>
    <tr>
      <th>M550</th>
      <td>
        Joint Protection Error : Motor Stator Temperature Error at Joint 1
      </td>
    </tr>
    <tr>
      <th>M551</th>
      <td>
        Joint Protection Error : Motor Stator Temperature Error at Joint 2
      </td>
    </tr>
    <tr>
      <th>M552</th>
      <td>
        Joint Protection Error : Motor Stator Temperature Error at Joint 3
      </td>
    </tr>
    <tr>
      <th>M553</th>
      <td>
        Joint Protection Error : Motor Stator Temperature Error at Joint 4
      </td>
    </tr>
    <tr>
      <th>M554</th>
      <td>
        Joint Protection Error : Motor Stator Temperature Error at Joint 5
      </td>
    </tr>
    <tr>
      <th>M555</th>
      <td>
        Joint Protection Error : Current Sensing Biasing Error at Joint 0
      </td>
    </tr>
    <tr>
      <th>M556</th>
      <td>
        Joint Protection Error : Current Sensing Biasing Error at Joint 1
      </td>
    </tr>
    <tr>
      <th>M557</th>
      <td>
        Joint Protection Error : Current Sensing Biasing Error at Joint 2
      </td>
    </tr>
    <tr>
      <th>M558</th>
      <td>
        Joint Protection Error : Current Sensing Biasing Error at Joint 3
      </td>
    </tr>
    <tr>
      <th>M559</th>
      <td>
        Joint Protection Error : Current Sensing Biasing Error at Joint 4
      </td>
    </tr>
    <tr>
      <th>M560</th>
      <td>
        Joint Protection Error : Current Sensing Biasing Error at Joint 5
      </td>
    </tr>
    <tr>
      <th>M561</th>
      <td>
        A new operation command was received at a point where the previous operation had not yet concluded.
      </td>
    </tr>
    <tr>
      <th>M562</th>
      <td>
        Joint angle of the target posture exceeds the specified range.
      </td>
    </tr>
    <tr>
      <th>M563</th>
      <td>
        XYZ position of the target point is beyond the specified range.
      </td>
    </tr>
    <tr>
      <th>M564</th>
      <td>
        To utilize this feature, the high-resolution ADC mode must be configured.
      </td>
    </tr>
    <tr>
      <th>M565</th>
      <td>
        Undefined model code number. Check the number or update the control box software to the latest.
      </td>
    </tr>
    <tr>
      <th>M566</th>
      <td>
        Failed to create motion speed profile. Please reduce the target speed or increase the target acceleration.
      </td>
    </tr>
    <tr>
      <th>M567</th>
      <td>
        The predicted temperature of the power system of the control box is outside the threshold.
      </td>
    </tr>
    <tr>
      <th>M568</th>
      <td>
        The Servo J parameters entered are outside the available range.
      </td>
    </tr>
    <tr>
      <th>M569</th>
      <td>
        The Servo L parameters entered are outside the available range.
      </td>
    </tr>
    <tr>
      <th>M570</th>
      <td>
        The Servo T parameters entered are outside the available range.
      </td>
    </tr>
    <tr>
      <th>M571</th>
      <td>
        Collision detection motion setting: Mode to release joint torque for 0.8 seconds
      </td>
    </tr>
    <tr>
      <th>M572</th>
      <td>
        Collision detection motion setting: Mode to release joint torque for 1.6 seconds
      </td>
    </tr>
    <tr>
      <th>M573</th>
      <td>
        The central axis settings for circular motion are incorrect.
      </td>
    </tr>
    <tr>
      <th>M574</th>
      <td>
        The points set for circular motion are too close. A circular trajectory cannot be created.
      </td>
    </tr>
    <tr>
      <th>M575</th>
      <td>
        Numerical problems arise during the trajectory generation stage.
      </td>
    </tr>
    <tr>
      <th>M576</th>
      <td>
        Because certain points exist on a straight line, it is impossible to create the desired trajectory.
      </td>
    </tr>
    <tr>
      <th>M577</th>
      <td>
        At least two points must be set to perform the motion.
      </td>
    </tr>
    <tr>
      <th>M578</th>
      <td>
        The set Modbus ID is outside the available range.
      </td>
    </tr>
    <tr>
      <th>M579</th>
      <td>
        The socket number entered is outside the range of available handlers.
      </td>
    </tr>
    <tr>
      <th>M580</th>
      <td>
        The data table has been sent.
      </td>
    </tr>
    <tr>
      <th>M581</th>
      <td>
        The data table has been saved.
      </td>
    </tr>
    <tr>
      <th>M582</th>
      <td>
        The serial number has been saved.
      </td>
    </tr>
    <tr>
      <th>M583</th>
      <td>
        Failed to save serial number.
      </td>
    </tr>
    <tr>
      <th>M584</th>
      <td>
        An ID setting command has been sent. Reboot the entire system.
      </td>
    </tr>
    <tr>
      <th>M585</th>
      <td>
        The selected drivers have been transferred. Proceed with the installation process.
      </td>
    </tr>
    <tr>
      <th>M586</th>
      <td>
        Installation of the selected driver is complete. Reboot the entire system.
      </td>
    </tr>
    <tr>
      <th>M587</th>
      <td>
        External Axis: A mathematical problem arises during the calibration calculation process. Check the entered posture information.
      </td>
    </tr>
    <tr>
      <th>M588</th>
      <td>
        The IP address entered is not in an available range.
      </td>
    </tr>
    <tr>
      <th>M589</th>
      <td>
        This feature is only available in Real Robot mode.
      </td>
    </tr>
    <tr>
      <th>M590</th>
      <td>
        The control box time zone has been set.
      </td>
    </tr>
    <tr>
      <th>M591</th>
      <td>
        An inappropriate value was entered in the control box time zone setting.
      </td>
    </tr>
    <tr>
      <th>M592</th>
      <td>
        The command has been executed. The control box will automatically reboot within a few seconds.
      </td>
    </tr>
    <tr>
      <th>M593</th>
      <td>
        A timeout occurred during the Modbus ASCII writing process.
      </td>
    </tr>
    <tr>
      <th>M594</th>
      <td>
        A normal ACK signal was not received during the Modbus ASCII writing process.
      </td>
    </tr>
    <tr>
      <th>M595</th>
      <td>
        A bus error occurred during the Modbus ASCII writing process.
      </td>
    </tr>
    <tr>
      <th>M596</th>
      <td>
        A timeout occurred during the Modbus ASCII reading process.
      </td>
    </tr>
    <tr>
      <th>M597</th>
      <td>
        A normal ACK signal was not received during the Modbus ASCII reading process.
      </td>
    </tr>
    <tr>
      <th>M598</th>
      <td>
        A bus error occurred during the Modbus ASCII reading process.
      </td>
    </tr>
    <tr>
      <th>M599</th>
      <td>
        A format error occurred during the Modbus ASCII reading process.
      </td>
    </tr>
    <tr>
      <th>M600</th>
      <td>
        Joint reducer protection error 0: A load exceeding the allowable torque of the gear occurs.
      </td>
    </tr>
    <tr>
      <th>M601</th>
      <td>
        Joint reducer protection error 1: A load exceeding the allowable torque of the gear occurs.
      </td>
    </tr>
    <tr>
      <th>M602</th>
      <td>
        Joint reducer protection error 2: A load exceeding the allowable torque of the gear occurs.
      </td>
    </tr>
    <tr>
      <th>M603</th>
      <td>
        Joint reducer protection error 3: A load exceeding the allowable torque of the gear occurs.
      </td>
    </tr>
    <tr>
      <th>M604</th>
      <td>
        Joint reducer protection error 4: A load exceeding the allowable torque of the gear occurs.
      </td>
    </tr>
    <tr>
      <th>M605</th>
      <td>
        Joint reducer protection error 5: A load exceeding the allowable torque of the gear occurs.
      </td>
    </tr>
    <tr>
      <th>M606</th>
      <td>
        The wrist joint lock function can be used only when the wrist joint 1 is at 0 degrees, 180 degrees, or -180 degrees.
      </td>
    </tr>
    <tr>
      <th>M607</th>
      <td>
        This function is only available for Yaw-Pitch-Yaw type robots with S-pipe structure.
      </td>
    </tr>
    <tr>
      <th>M608</th>
      <td>
        There is a problem with the special folder usage structure for MoveXB.
      </td>
    </tr>
    <tr>
      <th>M609</th>
      <td>
        During the MoveXB point addition process, a point where inverse kinematics calculation is not possible is discovered.
      </td>
    </tr>
    <tr>
      <th>M610</th>
      <td>
        During MoveXB operation, a singularity section has been reached where inverse kinematics calculation is not possible.
      </td>
    </tr>
    <tr>
      <th>M611</th>
      <td>
        Pattern counter variables must be of the global Variable type. Variable names must begin with _V_.
      </td>
    </tr>
    <tr>
      <th>M612</th>
      <td>
        A pattern counter variable with the same name exists. Each pattern must use a variable with a different name.
      </td>
    </tr>
    <tr>
      <th>M613</th>
      <td>
        DB read failure. This is a system where DB cannot be used.
      </td>
    </tr>
    <tr>
      <th>M614</th>
      <td>
        DB read failure. DB query statement is incorrect.
      </td>
    </tr>
    <tr>
      <th>M615</th>
      <td>
        DB read failure. Data with the same name does not exist.
      </td>
    </tr>
    <tr>
      <th>M616</th>
      <td>
        DB read failure. Other errors.
      </td>
    </tr>
    <tr>
      <th>M617</th>
      <td>
        DB write failure. This is a system where DB cannot be used.
      </td>
    </tr>
    <tr>
      <th>M618</th>
      <td>
        DB write failure. DB query statement is incorrect.
      </td>
    </tr>
    <tr>
      <th>M619</th>
      <td>
        DB write failure. Other errors.
      </td>
    </tr>
    <tr>
      <th>M620</th>
      <td>
        A movement error is detected during the initialization process of robot arm joint 0.
      </td>
    </tr>
    <tr>
      <th>M621</th>
      <td>
        A movement error is detected during the initialization process of robot arm joint 1.
      </td>
    </tr>
    <tr>
      <th>M622</th>
      <td>
        A movement error is detected during the initialization process of robot arm joint 2.
      </td>
    </tr>
    <tr>
      <th>M623</th>
      <td>
        A movement error is detected during the initialization process of robot arm joint 3.
      </td>
    </tr>
    <tr>
      <th>M624</th>
      <td>
        A movement error is detected during the initialization process of robot arm joint 4.
      </td>
    </tr>
    <tr>
      <th>M625</th>
      <td>
        A movement error is detected during the initialization process of robot arm joint 5.
      </td>
    </tr>
    <tr>
      <th>M626</th>
      <td>
        ModbusTCP communication connection with the gripper failed.
      </td>
    </tr>
    <tr>
      <th>M627</th>
      <td>
        Normal ModbusTCP ACK was not received from the gripper during initialization process.
      </td>
    </tr>
    <tr>
      <th>M628</th>
      <td>
        Normal ModbusTCP ACK was not received from the gripper during command TX process.
      </td>
    </tr>
    <tr>
      <th>M629</th>
      <td>
        Normal ModbusTCP ACK was not received from the gripper during data RX process.
      </td>
    </tr>
    <tr>
      <th>M630</th>
      <td>
        You can use the ModbusTCP gripper only after the gripper initialization process.
      </td>
    </tr>
    <tr>
      <th>M631</th>
      <td>
        Flange communication error: Section between robot arm joint number 5 and flange
      </td>
    </tr>
    <tr>
      <th>M632</th>
      <td>
        Flange communication error: Section between robot arm joints 4 and 5
      </td>
    </tr>
    <tr>
      <th>M633</th>
      <td>
        Flange communication error: undefined section 1
      </td>
    </tr>
    <tr>
      <th>M634</th>
      <td>
        Flange communication error: undefined section 2
      </td>
    </tr>
    <tr>
      <th>M635</th>
      <td>
        Flange communication error: Section between robot arm joints 3 and 4
      </td>
    </tr>
    <tr>
      <th>M636</th>
      <td>
        Flange communication error: undefined section 3
      </td>
    </tr>
    <tr>
      <th>M637</th>
      <td>
        Flange communication error: undefined section 4
      </td>
    </tr>
    <tr>
      <th>M638</th>
      <td>
        Flange communication error: A communication problem occurs with modules connected to the upper channel.
      </td>
    </tr>
    <tr>
      <th>M639</th>
      <td>
        Joint communication error: There is a problem communicating with joint 0. undefined section 1
      </td>
    </tr>
    <tr>
      <th>M640</th>
      <td>
        Joint communication error: There is a problem communicating with joint 0. undefined section 2
      </td>
    </tr>
    <tr>
      <th>M641</th>
      <td>
        Joint communication error: There is a problem communicating with joint 0. undefined section 3
      </td>
    </tr>
    <tr>
      <th>M642</th>
      <td>
        Joint communication error: There is a problem communicating with joint 0. Communication problems occur with modules connected to the lower channel.
      </td>
    </tr>
    <tr>
      <th>M643</th>
      <td>
        Joint communication error: There is a problem communicating with joint number 1. undefined section 1
      </td>
    </tr>
    <tr>
      <th>M644</th>
      <td>
        Joint communication error: There is a problem communicating with joint number 1. The section between joint 0 and joint 1
      </td>
    </tr>
    <tr>
      <th>M645</th>
      <td>
        Joint communication error: There is a problem communicating with joint number 1. undefined section 2
      </td>
    </tr>
    <tr>
      <th>M646</th>
      <td>
        Joint communication error: There is a problem communicating with joint number 1. Communication problems occur with modules connected to the lower channel.
      </td>
    </tr>
    <tr>
      <th>M647</th>
      <td>
        Joint communication error: There is a problem communicating with joint number 2. Section between joint 1 and joint 2
      </td>
    </tr>
    <tr>
      <th>M648</th>
      <td>
        Joint communication error: There is a problem communicating with joint number 2. Section between joint 0 and joint 1
      </td>
    </tr>
    <tr>
      <th>M649</th>
      <td>
        Joint communication error: There is a problem communicating with joint number 2. undefined section 1
      </td>
    </tr>
    <tr>
      <th>M650</th>
      <td>
        Joint communication error: There is a problem communicating with joint number 2. Communication problems occur with modules connected to the lower channel.
      </td>
    </tr>
    <tr>
      <th>M651</th>
      <td>
        Joint communication error: There is a problem communicating with joint number 3. undefined section 1
      </td>
    </tr>
    <tr>
      <th>M652</th>
      <td>
        Joint communication error: There is a problem communicating with joint number 3. undefined section 2
      </td>
    </tr>
    <tr>
      <th>M653</th>
      <td>
        Joint communication error: There is a problem communicating with joint number 3. undefined section 3
      </td>
    </tr>
    <tr>
      <th>M654</th>
      <td>
        Joint communication error: There is a problem communicating with joint number 3. undefined section 4
      </td>
    </tr>
    <tr>
      <th>M655</th>
      <td>
        Joint communication error: There is a problem communicating with joint number 3. undefined section 5
      </td>
    </tr>
    <tr>
      <th>M656</th>
      <td>
        Joint communication error: There is a problem communicating with joint number 3. undefined section 6
      </td>
    </tr>
    <tr>
      <th>M657</th>
      <td>
        Joint communication error: There is a problem communicating with joint number 3. undefined section 7
      </td>
    </tr>
    <tr>
      <th>M658</th>
      <td>
        Joint communication error: There is a problem communicating with joint number 3. Communication problems occur with modules connected to the upper channel.
      </td>
    </tr>
    <tr>
      <th>M659</th>
      <td>
        Joint communication error: There is a problem communicating with joint number 4. undefined section 1
      </td>
    </tr>
    <tr>
      <th>M660</th>
      <td>
        Joint communication error: There is a problem communicating with joint number 4. undefined section 2
      </td>
    </tr>
    <tr>
      <th>M661</th>
      <td>
        Joint communication error: There is a problem communicating with joint number 4. undefined section 3
      </td>
    </tr>
    <tr>
      <th>M662</th>
      <td>
        Joint communication error: There is a problem communicating with joint number 4. undefined section 4
      </td>
    </tr>
    <tr>
      <th>M663</th>
      <td>
        Joint communication error: There is a problem communicating with joint number 4. Section between joint 3 and joint 4
      </td>
    </tr>
    <tr>
      <th>M664</th>
      <td>
        Joint communication error: There is a problem communicating with joint number 4. undefined section 5
      </td>
    </tr>
    <tr>
      <th>M665</th>
      <td>
        Joint communication error: There is a problem communicating with joint number 4. undefined section 6
      </td>
    </tr>
    <tr>
      <th>M666</th>
      <td>
        Joint communication error: There is a problem communicating with joint number 4. Communication problems occur with modules connected to the upper channel.
      </td>
    </tr>
    <tr>
      <th>M667</th>
      <td>
        Joint communication error: There is a problem communicating with joint number 5. undefined section 1
      </td>
    </tr>
    <tr>
      <th>M668</th>
      <td>
        Joint communication error: There is a problem communicating with joint number 5. Section between joint 4 and joint 5
      </td>
    </tr>
    <tr>
      <th>M669</th>
      <td>
        Joint communication error: There is a problem communicating with joint number 5. undefined section 2
      </td>
    </tr>
    <tr>
      <th>M670</th>
      <td>
        Joint communication error: There is a problem communicating with joint number 5. undefined section 3
      </td>
    </tr>
    <tr>
      <th>M671</th>
      <td>
        Joint communication error: There is a problem communicating with joint number 5. Section between joint 3 and joint 4
      </td>
    </tr>
    <tr>
      <th>M672</th>
      <td>
        Joint communication error: There is a problem communicating with joint number 5. undefined section 4
      </td>
    </tr>
    <tr>
      <th>M673</th>
      <td>
        Joint communication error: There is a problem communicating with joint number 5. undefined section 5
      </td>
    </tr>
    <tr>
      <th>M674</th>
      <td>
        Joint communication error: There is a problem communicating with joint number 5. Communication problems occur with modules connected to the upper channel.
      </td>
    </tr>
    <tr>
      <th>M675</th>
      <td>
        A mode P2C conversion error occurred at joint 0. Check the log for details.
      </td>
    </tr>
    <tr>
      <th>M676</th>
      <td>
        A mode P2C conversion error occurred at joint 1. Check the log for details.
      </td>
    </tr>
    <tr>
      <th>M677</th>
      <td>
        A mode P2C conversion error occurred at joint 2. Check the log for details.
      </td>
    </tr>
    <tr>
      <th>M678</th>
      <td>
        A mode P2C conversion error occurred at joint 3. Check the log for details.
      </td>
    </tr>
    <tr>
      <th>M679</th>
      <td>
        A mode P2C conversion error occurred at joint 4. Check the log for details.
      </td>
    </tr>
    <tr>
      <th>M680</th>
      <td>
        A mode P2C conversion error occurred at joint 5. Check the log for details.
      </td>
    </tr>
    <tr>
      <th>M681</th>
      <td>
        A mode C2P conversion error occurred at joint 0. Check the log for details.
      </td>
    </tr>
    <tr>
      <th>M682</th>
      <td>
        A mode C2P conversion error occurred at joint 1. Check the log for details.
      </td>
    </tr>
    <tr>
      <th>M683</th>
      <td>
        A mode C2P conversion error occurred at joint 2. Check the log for details.
      </td>
    </tr>
    <tr>
      <th>M684</th>
      <td>
        A mode C2P conversion error occurred at joint 3. Check the log for details.
      </td>
    </tr>
    <tr>
      <th>M685</th>
      <td>
        A mode C2P conversion error occurred at joint 4. Check the log for details.
      </td>
    </tr>
    <tr>
      <th>M686</th>
      <td>
        A mode C2P conversion error occurred at joint 5. Check the log for details.
      </td>
    </tr>
    <tr>
      <th>M687</th>
      <td>
        A quick software update is in progress. All communications are temporarily suspended.
      </td>
    </tr>
    <tr>
      <th>M688</th>
      <td>
        Software update file has been sent. This will be reflected the next time the control box reboots.
      </td>
    </tr>
    <tr>
      <th>M689</th>
      <td>
        Write/read commands are called when Socket 0 communication is not connected.
      </td>
    </tr>
    <tr>
      <th>M690</th>
      <td>
        Write/read commands are called when Socket 1 communication is not connected.
      </td>
    </tr>
    <tr>
      <th>M691</th>
      <td>
        Write/read commands are called when Socket 2 communication is not connected.
      </td>
    </tr>
    <tr>
      <th>M692</th>
      <td>
        Write/read commands are called when Socket 3 communication is not connected.
      </td>
    </tr>
    <tr>
      <th>M693</th>
      <td>
        Write/read commands are called when Socket 4 communication is not connected.
      </td>
    </tr>
    <tr>
      <th>M694</th>
      <td>
        Additional Axis: The absolute encoder of joint 0 is not functioning properly.
      </td>
    </tr>
    <tr>
      <th>M695</th>
      <td>
        Additional Axis: The absolute encoder of joint 1 is not functioning properly.
      </td>
    </tr>
    <tr>
      <th>M696</th>
      <td>
        Additional Axis: The absolute encoder of joint 2 is not functioning properly.
      </td>
    </tr>
    <tr>
      <th>M697</th>
      <td>
        Additional Axis: The absolute encoder of joint 3 is not functioning properly.
      </td>
    </tr>
    <tr>
      <th>M698</th>
      <td>
        Additional Axis: The absolute encoder of joint 4 is not functioning properly.
      </td>
    </tr>
    <tr>
      <th>M699</th>
      <td>
        Additional Axis: The absolute encoder of joint 5 is not functioning properly.
      </td>
    </tr>
    <tr>
      <th>M700</th>
      <td>
        Additional Axis: AC servo of joint 0 is not in normal ServoOn state.
      </td>
    </tr>
    <tr>
      <th>M701</th>
      <td>
        Additional Axis: AC servo of joint 1 is not in normal ServoOn state.
      </td>
    </tr>
    <tr>
      <th>M702</th>
      <td>
        Additional Axis: AC servo of joint 2 is not in normal ServoOn state.
      </td>
    </tr>
    <tr>
      <th>M703</th>
      <td>
        Additional Axis: AC servo of joint 3 is not in normal ServoOn state.
      </td>
    </tr>
    <tr>
      <th>M704</th>
      <td>
        Additional Axis: AC servo of joint 4 is not in normal ServoOn state.
      </td>
    </tr>
    <tr>
      <th>M705</th>
      <td>
        Additional Axis: AC servo of joint 5 is not in normal ServoOn state.
      </td>
    </tr>
  </table>
</div>
