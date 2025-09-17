---
layout: doc
outline: deep
---

# Set-up (Inbox/Frame)

### 1. Inbox
This section is for configuring the size and position of the Inbox for its usage.

![missing](/manual/en/setup/inbox1.png)

1. Displays the Position Information of the Inbox. The position of the Inbox is set based on the robot arm base’s coordinate system as the origin.
2. Set the Center Point and Width for Inbox 0 and Inbox 1. The orientation of the Inbox cannot be set.<br>
   The reference coordinate system for the settings is the manufacturer’s base coordinate system.
3. Save the Modified Settings.
   
### 2. User Coordinate

This section is for configuring a user-defined coordinate system (User-Coordinate).

![missing](/manual/en/setup/inbox2.png)

1. Displays the Current User-Defined Coordinate System Information. The information is displayed relative to the manufacturer’s robot base coordinate system.
2. There are two methods to set the user coordinate system. 
### - Method 1 
   Modify the Settings for User-Defined Coordinate Systems. You can set up to three user-defined coordinate systems.<br>
   Each coordinate is defined with the robot arm base as the origin.<br>
   Set the coordinate system through the 3-point setting.<br>
   - Point 1 (P1): This is the origin of the user-defined coordinate system.<br>
   - Point 2 (P2): This is any point on the X-axis of the user-defined coordinate system. It is recommended to set P2 as far from P1 as possible.<br>
   - Point 3 (P3): This is any point on the XY plane of the user-defined coordinate system. The direction of the Z-axis is determined based on the position of Point 3.
  
### - Method 2
   This feature allows the user to directly input the values of the user coordinate system.<br>
   In other words, the user can apply the desired values directly without teaching the user coordinate system.