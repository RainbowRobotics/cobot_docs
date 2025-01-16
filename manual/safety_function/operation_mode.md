---
layout: doc
outline: deep
---

# Operation Mode

The operation mode of the collaborative robot RB Series is composed as follows.<br>
When entering the automatic mode, you must access it through a password.

![missing](/manual/common/safety_function/6-1.png)

![missing](/manual/common/safety_function/6-2.png)

<div class="warning custom-block">
  <p class="custom-block-title">Caution</p>
  <ol>
    <li>
      The password for entering automatic mode is not set at the time of shipment. Set up and use a password so that no one else can access it.
    </li>
    <li>
      Before entering Auto Mode, the user must remove the dangerous situation and check the status of the emergency stop switch and the protective stop device.
    </li>
    <li>
      In any case, the user must correctly grasp the installation state of the robot and complete the setting before operating the robot.
    </li>
  </ol>
</div>

- **Initialize Mode (Set-up)**<br>
  Peripheral device settings or robot status can be set before the robot moves.<br>
  Overall settings for robot motion such as workspace, TCP offset, and payload can be made.<br>
  At this time, power is not supplied to the motor. The motor can be powered through the activation action.

- **Auto Mode (Play)**<br>
  The robot is in a state where only predefined tasks are performed without user intervention. At this time, power is supplied to the motor.<br>
  The motion of the robot programmed through the simulation function can be verified through simulation, and the robot can be driven by the verified program by converting it to a real state.<br>
  At this time, the robot is performing pre-set safety functions, and the user can monitor the status of the robot and peripheral devices through the Play window.

- **Manual Mode (Make)**<br>
  It is a state in which the robot is operated through direct actions of the user. At this time, power is supplied to the motor.<br>
  Direct teaching, program creation and modification, and manual operation of peripheral devices can be performed, and the robot can only be operated at the moment the user operates the tablet through the safe speed slide bar.<br>
  When you release your hand from the safety slide, the robot will stop moving immediately.

<div class="warning custom-block">
  <p class="custom-block-title">Caution</p>
  <ol>
    <li>
      In case of manual operation, the safety slide function must be set.
    </li>
    <li>
      At initial shipment, the safety slide function is deactivated.
    </li>
    <li>
      In addition, when using a 3-position enabling device, it must be used in accordance with 5.8.3 of ISO 10218-1.
    </li>
  </ol>
</div>
