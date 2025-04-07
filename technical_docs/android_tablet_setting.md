---
layout: doc
outline: deep
---

# Android Tablet Setting v7.4

### 1. Android Tablet Settings for Using Rainbow UI

<div class="warning custom-block">
    <p class="custom-block-title">CAUTION</p>
    <ol>
        <li>
            Before using Rainbow Robotics' Android tablet UI program, the following tablet settings are required.
        </li>
        <li>
            The screen shot below may differ depending on the Android tablet manufacturer and OS version.
        </li>
    </ol>
</div>

1. Goto Setting section of the Android.

![missing](/technical_docs/en/android_tablet_setting/a1.png)

2. If the Developer Options tab does not appear in the tablet settings, please follow Step 3~4. If Developer Options is already enabled, you may skip Step 3~4.

![missing](/technical_docs/en/android_tablet_setting/a2.png)

3. Goto “About tablet” -> “Software information”.

![missing](/technical_docs/en/android_tablet_setting/a3.png)

4. Muti-click (7 or more times) “Build number” of tablet information.

![missing](/technical_docs/en/android_tablet_setting/a4.png)

5.	A menu called “Developer option” will appear under “About tablet” as shown below.

![missing](/technical_docs/en/android_tablet_setting/a5.png)

6.	Activate "USB Debugging" in "Developer Options".

![missing](/technical_docs/en/android_tablet_setting/a6.png)

7.	Run the APK distributed by Rainbow Robotics to install the UI program on your tablet.

8. When connecting the Android tablet and the robot control box for the first time (via USB cable), the message **‘Allow USB debugging?’** is displayed.<br>
   Check <u>'Always allow from this computer'</u> and click '_Allow_'.<br>
   After that, you need to physically disconnect/connect the USB cable once.

![missing](/technical_docs/en/android_tablet_setting/1-7.png)


### 2. How to  Resolve USB Connection Failure

::: warning

If the USB connection fails, please follow the steps below to resolve the issue.

:::

![missing](/technical_docs/en/android_tablet_setting/b1.png)

1.	Disable and then re-enable "USB debugging", and click "OK" on the prompt message at the bottom of the screen.

![missing](/technical_docs/en/android_tablet_setting/b2.png)

2.	Locate and tap on "Default USB configuration", then select "MIDI" on the following screen.

![missing](/technical_docs/en/android_tablet_setting/b3.png)

![missing](/technical_docs/en/android_tablet_setting/b4.png)

3.	Disconnect and reconnect the USB cable from the pendant, and repeat Step 1 two to three times. This should establish a successful connection.

4.	If the issue persists, please proceed with "Revoke USB debugging authorizations" and repeat Steps 1 through 3. Alternatively, try using a different USB cable. If none of the above methods resolve the issue, please contact the Rainbow Robotics Technical Support Team.

![missing](/technical_docs/en/android_tablet_setting/b5.png)