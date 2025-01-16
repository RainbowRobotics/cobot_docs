---
layout: doc
outline: deep
---

# User Interface Customizing v1.1

### UI App Program User Customization

<div class="warning custom-block">
  <p class="custom-block-title">CAUTION</p>
  <ol>
    <li>
      This procedure is for customizing and decorating Rainbow Robotics' collaborative robot UI app program.
    </li>
    <li>
      This feature is effective from the official update version available after June 2020.
    </li>
  </ol>
</div>

1. Install or update the UI app.<br>
   For installation / update method, please refer to the update procedure manual separately.

2. After installation, the Loading screen / Home screen / Make screen configuration is as follows.

<div class="center-align">
  <img src="/technical_docs/common/ui_customizing/2-1.png" />
  <p style="text-align: center;">[ Loading screen – Basic ]</p>
</div>

<div class="center-align">
  <img src="/technical_docs/common/ui_customizing/2-2.png" />
  <p style="text-align: center;">[ Home screen – Basic ]</p>
</div>

<div class="center-align">
  <img src="/technical_docs/common/ui_customizing/2-3.png" />
  <p style="text-align: center;">[ Make screen – Basic ]</p>
</div>

3. Let's customize the screen from now on.

- 3 Files are required for customization.
- For file names, only the file names defined below can be recognized.
- If the image size is too large, the UI loading speed will be slow..
- We recommend a size smaller than the recommended size for loading speed.
- A ‘png’ type with a transparent background is recommended.

<table class="th-align">
    <tr>
        <th>File name</th>
        <th>Purpose</th>
        <th>Format / Recommended Size</th>
    </tr>
    <tr>
        <td>Intro.png</td>
        <td>Loading screen image</td>
        <td>png, (height 120px ex: 450x120 pixel)</td>
    </tr>
    <tr>
        <td>Home.png</td>
        <td>Logo for left-upper corner</td>
        <td>png, (height 70px ex: 70x70 pixel)</td>
    </tr>
    <tr>
        <td>HomeTitle.txt</td>
        <td>Home screen message</td>
        <td>txt</td>
    </tr>
</table>

1. Connect your tablet to your work PC to access the path below.

```
Android/data/com.rainbow.cobot/files/Images
```

5. Currently there are no files in that path.

- If no file exists, the default value (logo and message) of Rainbow Robotics is applied.

![missing](/technical_docs/common/ui_customizing/5.png)

6. Put the 3 files prepared in step 3 in this path.

![missing](/technical_docs/common/ui_customizing/6.png)

7. Customization is complete. If you run the UI app again, you will see a screen like the one below.

<div class="center-align">
  <img src="/technical_docs/common/ui_customizing/7-1.png" />
  <p style="text-align: center;">[ ‘Intro.png’ is applied to Loading screen ]</p>
</div>

<div class="center-align">
  <img src="/technical_docs/common/ui_customizing/7-2.png" />
  <p style="text-align: center;">[ ‘HomeTitle.txt’ is applied to Home screen ]</p>
</div>

<div class="center-align">
  <img src="/technical_docs/common/ui_customizing/7-3.png" />
  <p style="text-align: center;">[ ‘Home.png’ is applied to Left-Upper icon ]</p>
</div>
