---
layout: doc
outline: deep
---

# Introduction

This chapter contains important safety information, which must be read and understood by the integrator of the RB Series collaborative robots before the robot is powered on for the first time.<br>
RB Series can protect users and devices by providing various safety functions and safety device interfaces.<br>
Safety functions and interfaces meet Category 3, Performance Level d (PL d) as described in ISO 13849-1 and Hardware Fault Tolerance 1, Safety Integrity Level 2 (SIL 2) as described in IEC 62061.

<div class="warning custom-block">
  <p class="custom-block-title">Caution</p>
  <ol>
    <li>
      Depending on the case of the robot installation, the system integrator must perform a risk assessment, and accordingly, the workspace must be configured using safety monitoring functions and interfaces.
    </li>
    <li>
      If a fault is found in the robot's safety function or interface, Stop Category 0 is initiated.
    </li>
    <li>
      Examples of defects include broken cables in the emergency stop circuit, incorrect wiring of additional safety devices, and non-overlapping wiring of additional safety devices (refer to Section 5 of this chapter).
    </li>
    <li>
      System integrators and operators must be aware that there is a safety monitoring function that the robot performs internally, and the safety detection function is not only the operation of the emergency stop switch, the operation of the protective stop device, but also the position of the robot arm during task execution. The robot can be stopped in the designated stop mode even for movements above the physical limit, such as speed, momentum, etc. (See Section 3 of this chapter for the safety monitoring function).
    </li>
    <li>
      System integrators and operators should consider the time and stopping distance between the robot stopping due to the operation of the error and safety monitoring functions described above. The system integrator must conduct a risk assessment considering the stopping distance and time (see Section 4 of this chapter).
    </li>
    <li>
      System integrators and operators are aware of the fact that there is a safety monitoring function to limit the movement of the robot's joints and the robot/TCP, and must select the range of motion of the robot. TCP refers to the position to which the offset is added from the center point of the end of the robot arm.
    </li>
  </ol>
</div>

<div class="danger custom-block">
  <p class="custom-block-title">Danger</p>
  <ol>
    <li>
      The system integrator must conduct a risk assessment before applying power to the robot, and if it is used differently from that determined by the risk assessment or if different parameters are used, a risk that is not sufficiently reduced may occur.
    </li>
    <li>
      When connecting additional safety devices, the power of both the robot and the control panel must be cut off.
    </li>
    <li>
      When installing an additional safety device, measures must be taken to ensure that there is no problem when using it mechanically. 
      For example, when using a light curtain, it must be firmly fixed to the floor/fixture, and movement and vibration must not occur during robot operation.
    </li>
    <li>
      All safety function interfaces are set to 24V. Be careful when connecting devices with different voltages as it may cause equipment damage and fire.
    </li>
    <li>
      The signal from the device mounted on the Tool Flange is not included in the safety function. Do not connect the safety device to the Tool Flange cable.
    </li>
  </ol>
</div>
