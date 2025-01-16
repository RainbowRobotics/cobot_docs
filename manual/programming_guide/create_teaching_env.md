---
layout: doc
outline: deep
---

# Create Teaching Environment

Robot teaching (programming) is available only in the Make screen.

<p style="display:flex; align-items:center; white-space:pre">
  Please open the Make screen from the Play or Setup screen via the
  <img src="/manual/en/programming_guide/icons/65.png" width=50 /> button located </p>
at the top of the UI. It is also possible to move to the Make screen from the Home screen.

### Connect Tablet PC to Control Box

<p style="display:flex; align-items:center; white-space:pre">
<img src="/technical_docs/common/tcp_wireless/4-1.png" /> This icon is in the bottom left of each screen.</p>
The robot control box and tablet PC must be connected before teaching.<br>
When this icon is pressed, the following screen is displayed.

![missing](/manual/en/programming_guide/2-1.png)

Press the ‘Connect’ button to link the tablet PC to the robot control box.

- ‘Connect’ button: Will connects the tablet PC to the robot control box.

<div class="warning custom-block">
    <p class="custom-block-title">CAUTION</p>
    <ul>
      <li>Make sure that the control box is turned on and that the emergency stop switch is turned off.</li>
      <li>If the control box is not on, the light beneath ‘Device Off’ will turn red.</li>
    </ul>
</div>

The figure below shows a display when the tablet PC and control box are being connected.

![missing](/manual/en/programming_guide/2-2.png)

‘Network Connecting’ lights yellow when the tablet PC is trying to connect to the control box.

‘Network Connected’ becomes blue when the table PC and control box are connected properly. The ‘Control’ button is also activated once more.

![missing](/manual/en/programming_guide/2-3.png)

After ‘Network Connected’, press the ‘Control’ button to activate the robot control system.

- ‘Control’ button: Will initialize the robot arm for operation.

Pressing the activation button initializes the robot arm, bringing it into a controllable state. During this process, the brakes on each joint will release, producing sequential sounds from the robot arm. Once all systems are powered on and connected, all status indicators will turn blue, as shown on the screen below.

![missing](/manual/en/programming_guide/2-4.png)

:::tip

- If the robot does not show a blue light indicating successful activation and instead displays a red light, please check the emergency stop switch status, tool load settings, and robot installation angle. Follow the instructions in the popup message to review and adjust the settings and operating conditions as necessary.

:::

### Create New Project

To create a new project, click the 'New' button at the bottom of the Make screen. In the 'Create New Project' screen, select 'Start with an empty project,' and a screen will appear where you can assign a file name.

![missing](/manual/en/programming_guide/2-5.png)

The default name of a new project is **my_project**.<br>
Please type a name for the new project and press the ‘Save’ button in the dialog.<br>
Note that the new project is not created if the ‘Save’ button is not clicked.
