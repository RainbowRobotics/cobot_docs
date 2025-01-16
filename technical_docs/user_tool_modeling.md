---
layout: doc
outline: deep
---

# Import user Tool-Modeling file v1.1

### Import user Tool 3D Modeling file

<div class="warning custom-block">
  <p class="custom-block-title">CAUTION</p>
  <ol>
    <li>
      This procedure is for customizing and decorating Rainbow Robotics' collaborative robot UI app program.
    </li>
    <li>
      This feature is effective from the official update version available after Sep. 2021.
    </li>
  </ol>
</div>

1. Install or update the UI app.<br>
   For installation / update method, please refer to the update procedure manual separately.

2. After installation, the 3D screen view is as follows.

![missing](/technical_docs/common/user_tool_modeling/2.png)

3. Let's customize the screen from now on.

::: danger

- **_<span style="color:red;"><u>The file name and the format should be RB_TOOL.obj</u></span>_**<br>
  Name : RB_TOOL / Format : .obj
- **<u>If the 3D file size is too large, the UI loading speed will be slow.</u> (recommended: <50KB)**
- We recommend <u>a size smaller than the recommended size</u> for loading speed.
- If the 3D file is too large, reduce the number of polygons in the 3D file and convert it to a smaller size before use.
  :::

::: warning

- When making a 3D file, the unit must be mm (milli-meter).
- If you use other incorrect units such as meters or inches, it may be displayed on the 3D screen differently from the actual design drawing.
- When creating a 3D file, the coordinate system and center point of the 3D file must be set as shown below.
- The 3D file must be created according to the direction of the default coordinate system of the tool of Rainbow Robotics (Default-Tool-Coordinate).
  :::

![missing](/technical_docs/common/user_tool_modeling/3.png)

4. Connect your tablet to your work PC to access the path below.

```
Android/data/com.rainbow.cobot/files/Images
```

5. Currently there are no files in that path.

![missing](/technical_docs/common/user_tool_modeling/5.png)

6. Put the 3D-object file (RB_TOOL.obj) prepared in step 3 in this path.

![missing](/technical_docs/common/user_tool_modeling/6.png)

7. Customization is complete. If you run the UI app again, you will see a screen like the one below.

![missing](/technical_docs/common/user_tool_modeling/7.png)
