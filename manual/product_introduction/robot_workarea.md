---
layout: doc
outline: deep
---

# Robot Work Area

The maximum reach radius when the robot arm is fully extended is as follows:

- RB5-850E Series: 927.7mm
- RB10-1300E Series: 1300mm
- RB3-1200E Series: 1200mm
- RB16-900E Series: 900mm
- RB3-730ES Series: 730mm
- RB6-920ES Series: 920mm
- RB20-1900ES Series: 1900mm

The area directly below or above the robot base (the A area and its surroundings in the diagram below) is a restricted work area.<br>
There is no issue when using joint coordinate system movements (e.g., Move J), but in movements using the Cartesian coordinate system (e.g., Move L), passing through this area is restricted.<br>
This area is a mechanical singularity point, and using the Cartesian coordinate system in this region can generate rapid joint speeds or cause the robot to stop.

![missing](/manual/common/product_introduction/7-1.png)

A. Singularity point area (a restricted area for movement when using Cartesian coordinates)<br>
B. Robot's operable work area

![missing](/manual/common/product_introduction/7-2.png)
