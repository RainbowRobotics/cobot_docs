---
layout: doc
outline: deep
---

# Set-up (Log/Utility)

### 1. Log
You can check the system log status of the robot arm.

![missing](/manual/en/setup/l1.png)

1. - Import the LOG file from the control box to the tablet PC.<br>
   - Load the LOG file that was imported from the control box to the tablet PC for output.<br>
2. - All : Output all logs.<br>
   - Output only the informational logs.<br>
   - Output only the warning logs.<br>
   - Output only the error logs.<br>
   - Output only the system-related logs.<br>
   - Output only the logs related to errors that are directly associated with a failure of  the robot.<br>
   - Output only the logs related to the logs specified by the user.<br>
   - Send the logs to Rainbow Robotics' customer support email account. Wi-Fi must be connected for this action.<br>
3. - Backup internal files of the control box: Backup the files stored in the control box to the tablet PC.<br>
   - Operating time of the robot arm: Output the time the robot arm has been operated.<br>
   - Copy control box settings: Copy the settings of the control box.<br>
   - Restore control box settings: Restore the previous settings of the control box.
4. - Control box time zone: Displays the time zone currently recognized by the control box.<br>
   - System Ver. : Output the current UI version being used by the control box.

### 2. Utility

Provides features regarding the robot's packaging and emergency recovery.

<div class="warning custom-block">
    <p class="custom-block-title">Caution</p>
    <ol>
        <li>
            Before using the Emergency Joint Recovery mode, understand the characteristics and operation of this function accurately before using it.
        </li>
        <li>
            When transporting or shipping the robot, it must be placed in the packaging box provided by the manufacturer in the specified orientation.
        </li>
    </ol>
</div>

![missing](/manual/en/setup/l2.png)

1. You can create the position for packaging the robot.<br>
   Before using this function, ensure that the robot arm is activated.<br>
   Remove all attachments from the robot arm prior to using this function.<br>
   While holding the button, the robot arm will move to the packaging position.<br>
   Once the packaging position is reached, an alarm will indicate that the robot has reached the packaging position.
2. You can set the axis reference point to the factory initialization state.<br>
   This function is intended for recovery in case of abnormal operation, so it should be used with caution.<br>

   Step1. Select the axis to reset.<br>
   Step2. Press the Release button to release the brake and make it free.<br>
   Step3. Align the marked groove on the axis and press the reset button to initialize the axis.
