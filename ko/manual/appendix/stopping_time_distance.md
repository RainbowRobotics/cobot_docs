---
layout: doc
outline: deep
---

# 정지 시간 및 정지 거리

RB Series 협동 로봇에서는 로봇 정지시간 및 정지 거리가 안전 모니터링 기능에 의해 생성됩니다.

아래 그래프는 Joint 0(Base 축), Joint 1(Shoulder 축), Joint 2(Elbow 축)에 대한 정지 카테고리 1의 정지 시간과 정지 거리를 나타냅니다.<br>
측정은 각 Joint에 가반하중(Payload)을 장착하여 이루어졌습니다.

<div class="warning custom-block">
    <p class="custom-block-title">주의</p>
    <ul>
        <li>
            상황에 따라 실제 정지 움직임은 아래의 결과와는 상이할 수 있습니다.
        </li>        
        <li>
            Joint 0의 경우 수평 움직임에 대해 측정된 결과이며, Joint 1과 2의 경우는 수직 하강 움직임 상황에서 측정된 결과입니다.
        </li>        
        <li>
            팔의 길이의 경우 최대 거리가 적용되었습니다.
        </li>
    </ul>
</div>

### 1. RB5-850E Series

<div class="center-align th-align td-align">
    <table>
        <tr>
            <th colspan="3">Base (Joint 0)</th>
        </tr>
        <tr>
            <th></th>
            <th>Stop Distance (mm)</th>
            <th>Stop Time (sec)</th>
        </tr>
        <tr>
            <th class="sub-title">Test 1</th>
            <td>150.91</td>
            <td>0.3</td>
        </tr>
        <tr>
            <th class="sub-title">Test 2</th>
            <td>149.68</td>
            <td>0.28</td>
        </tr>
        <tr>
            <th class="sub-title">Test 3</th>
            <td>148.5</td>
            <td>0.3</td>
        </tr>
        <tr>
            <th class="sub-title">Maximum</th>
            <td>150.91</td>
            <td>0.3</td>
        </tr>
        <tr>
            <th class="sub-title">Average</th>
            <td>149.7</td>
            <td>0.29</td>
        </tr>
        <tr>
            <th class="sub-title">Condition</th>
            <td colspan="2">Max. Reach / Max. Velocity / Horizontal Motion</td>
        </tr>
    </table>
    <table>
        <tr>
            <th colspan="3">Shoulder (Joint 1)</th>
        </tr>
        <tr>
            <th></th>
            <th>Stop Distance (mm)</th>
            <th>Stop Time (sec)</th>
        </tr>
        <tr>
            <th class="sub-title">Test 1</th>
            <td>193.77</td>
            <td>0.28</td>
        </tr>
        <tr>
            <th class="sub-title">Test 2</th>
            <td>220.46</td>
            <td>0.32</td>
        </tr>
        <tr>
            <th class="sub-title">Test 3</th>
            <td>198.28</td>
            <td>0.29</td>
        </tr>
        <tr>
            <th class="sub-title">Maximum</th>
            <td>220.46</td>
            <td>0.32</td>
        </tr>
        <tr>
            <th class="sub-title">Average</th>
            <td>204.17</td>
            <td>0.3</td>
        </tr>
        <tr>
            <th class="sub-title">Condition</th>
            <td colspan="2">Max. Reach / Max. Velocity / Vertical Downward Motion</td>
        </tr>
    </table>
    <table>
        <tr>
            <th colspan="3">Elbow (Joint 2)</th>
        </tr>
        <tr>
            <th></th>
            <th>Stop Distance (mm)</th>
            <th>Stop Time (sec)</th>
        </tr>
        <tr>
            <th class="sub-title">Test 1</th>
            <td>168.52</td>
            <td>0.31</td>
        </tr>
        <tr>
            <th class="sub-title">Test 2</th>
            <td>165.34</td>
            <td>0.3</td>
        </tr>
        <tr>
            <th class="sub-title">Test 3</th>
            <td>141.02</td>
            <td>0.23</td>
        </tr>
        <tr>
            <th class="sub-title">Maximum</th>
            <td>168.52</td>
            <td>0.31</td>
        </tr>
        <tr>
            <th class="sub-title">Average</th>
            <td>158.29</td>
            <td>0.28</td>
        </tr>
        <tr>
            <th class="sub-title">Condition</th>
            <td colspan="2">Max. Reach / Max. Velocity / Vertical Downward Motion</td>
        </tr>
    </table>
</div>

### 2. RB3-1200E Series

<div class="center-align th-align td-align">
    <table>
        <tr>
            <th colspan="3">Base (Joint 0)</th>
        </tr>
        <tr>
            <th></th>
            <th>Stop Distance (mm)</th>
            <th>Stop Time (sec)</th>
        </tr>
        <tr>
            <th class="sub-title">Test 1</th>
            <td>253.3</td>
            <td>0.33</td>
        </tr>
        <tr>
            <th class="sub-title">Test 2</th>
            <td>252.63</td>
            <td>0.27</td>
        </tr>
        <tr>
            <th class="sub-title">Test 3</th>
            <td>249.27</td>
            <td>0.24</td>
        </tr>
        <tr>
            <th class="sub-title">Maximum</th>
            <td>252.63</td>
            <td>0.33</td>
        </tr>
        <tr>
            <th class="sub-title">Average</th>
            <td>251.73</td>
            <td>0.28</td>
        </tr>
        <tr>
            <th class="sub-title">Condition</th>
            <td colspan="2">Max. Reach / Max. Velocity / Horizontal Motion</td>
        </tr>
    </table>
    <table>
        <tr>
            <th colspan="3">Shoulder (Joint 1)</th>
        </tr>
        <tr>
            <th></th>
            <th>Stop Distance (mm)</th>
            <th>Stop Time (sec)</th>
        </tr>
        <tr>
            <th class="sub-title">Test 1</th>
            <td>283.08</td>
            <td>0.3</td>
        </tr>
        <tr>
            <th class="sub-title">Test 2</th>
            <td>285.88</td>
            <td>0.29</td>
        </tr>
        <tr>
            <th class="sub-title">Test 3</th>
            <td>303.28</td>
            <td>0.34</td>
        </tr>
        <tr>
            <th class="sub-title">Maximum</th>
            <td>303.28</td>
            <td>0.34</td>
        </tr>
        <tr>
            <th class="sub-title">Average</th>
            <td>290.75</td>
            <td>0.31</td>
        </tr>
        <tr>
            <th class="sub-title">Condition</th>
            <td colspan="2">Max. Reach / Max. Velocity / Vertical Downward Motion</td>
        </tr>
    </table>
    <table>
        <tr>
            <th colspan="3">Elbow (Joint 2)</th>
        </tr>
        <tr>
            <th></th>
            <th>Stop Distance (mm)</th>
            <th>Stop Time (sec)</th>
        </tr>
        <tr>
            <th class="sub-title">Test 1</th>
            <td>195.68</td>
            <td>0.31</td>
        </tr>
        <tr>
            <th class="sub-title">Test 2</th>
            <td>200.94</td>
            <td>0.31</td>
        </tr>
        <tr>
            <th class="sub-title">Test 3</th>
            <td>190.95</td>
            <td>0.3</td>
        </tr>
        <tr>
            <th class="sub-title">Maximum</th>
            <td>200.94</td>
            <td>0.31</td>
        </tr>
        <tr>
            <th class="sub-title">Average</th>
            <td>195.86</td>
            <td>0.306</td>
        </tr>
        <tr>
            <th class="sub-title">Condition</th>
            <td colspan="2">Max. Reach / Max. Velocity / Vertical Downward Motion</td>
        </tr>
    </table>
</div>

### 3. RB10-1300E Series

<div class="center-align th-align td-align">
    <table>
        <tr>
            <th colspan="3">Base (Joint 0)</th>
        </tr>
        <tr>
            <th></th>
            <th>Stop Distance (mm)</th>
            <th>Stop Time (sec)</th>
        </tr>
        <tr>
            <th class="sub-title">Test 1</th>
            <td>132.97</td>
            <td>0.3</td>
        </tr>
        <tr>
            <th class="sub-title">Test 2</th>
            <td>136.53</td>
            <td>0.32</td>
        </tr>
        <tr>
            <th class="sub-title">Test 3</th>
            <td>142.1</td>
            <td>0.34</td>
        </tr>
        <tr>
            <th class="sub-title">Maximum</th>
            <td>142.1</td>
            <td>0.34</td>
        </tr>
        <tr>
            <th class="sub-title">Average</th>
            <td>137.2</td>
            <td>0.32</td>
        </tr>
        <tr>
            <th class="sub-title">Condition</th>
            <td colspan="2">Max. Reach / Max. Velocity / Horizontal Motion</td>
        </tr>
    </table>
    <table>
        <tr>
            <th colspan="3">Shoulder (Joint 1)</th>
        </tr>
        <tr>
            <th></th>
            <th>Stop Distance (mm)</th>
            <th>Stop Time (sec)</th>
        </tr>
        <tr>
            <th class="sub-title">Test 1</th>
            <td>260.51</td>
            <td>0.36</td>
        </tr>
        <tr>
            <th class="sub-title">Test 2</th>
            <td>246.79</td>
            <td>0.35</td>
        </tr>
        <tr>
            <th class="sub-title">Test 3</th>
            <td>252.54</td>
            <td>0.35</td>
        </tr>
        <tr>
            <th class="sub-title">Maximum</th>
            <td>260.51</td>
            <td>0.36</td>
        </tr>
        <tr>
            <th class="sub-title">Average</th>
            <td>253.28</td>
            <td>0.353</td>
        </tr>
        <tr>
            <th class="sub-title">Condition</th>
            <td colspan="2">Max. Reach / Max. Velocity / Vertical Downward Motion</td>
        </tr>
    </table>
    <table>
        <tr>
            <th colspan="3">Elbow (Joint 2)</th>
        </tr>
        <tr>
            <th></th>
            <th>Stop Distance (mm)</th>
            <th>Stop Time (sec)</th>
        </tr>
        <tr>
            <th class="sub-title">Test 1</th>
            <td>267.73</td>
            <td>0.32</td>
        </tr>
        <tr>
            <th class="sub-title">Test 2</th>
            <td>269.61</td>
            <td>0.32</td>
        </tr>
        <tr>
            <th class="sub-title">Test 3</th>
            <td>252.86</td>
            <td>0.3</td>
        </tr>
        <tr>
            <th class="sub-title">Maximum</th>
            <td>269.61</td>
            <td>0.32</td>
        </tr>
        <tr>
            <th class="sub-title">Average</th>
            <td>263.4</td>
            <td>0.31</td>
        </tr>
        <tr>
            <th class="sub-title">Condition</th>
            <td colspan="2">Max. Reach / Max. Velocity / Vertical Downward Motion</td>
        </tr>
    </table>
</div>

### 4. RB16-900E Series

<div class="center-align th-align td-align">
    <table>
        <tr>
            <th colspan="3">Base (Joint 0)</th>
        </tr>
        <tr>
            <th></th>
            <th>Stop Distance (mm)</th>
            <th>Stop Time (sec)</th>
        </tr>
        <tr>
            <th class="sub-title">Test 1</th>
            <td>63.69</td>
            <td>0.27</td>
        </tr>
        <tr>
            <th class="sub-title">Test 2</th>
            <td>67.113</td>
            <td>0.29</td>
        </tr>
        <tr>
            <th class="sub-title">Test 3</th>
            <td>60.864</td>
            <td>0.31</td>
        </tr>
        <tr>
            <th class="sub-title">Maximum</th>
            <td>67.113</td>
            <td>0.31</td>
        </tr>
        <tr>
            <th class="sub-title">Average</th>
            <td>63.89</td>
            <td>0.29</td>
        </tr>
        <tr>
            <th class="sub-title">Condition</th>
            <td colspan="2">Max. Reach / Max. Velocity / Horizontal Motion</td>
        </tr>
    </table>
    <table>
        <tr>
            <th colspan="3">Shoulder (Joint 1)</th>
        </tr>
        <tr>
            <th></th>
            <th>Stop Distance (mm)</th>
            <th>Stop Time (sec)</th>
        </tr>
        <tr>
            <th class="sub-title">Test 1</th>
            <td>140.06</td>
            <td>0.33</td>
        </tr>
        <tr>
            <th class="sub-title">Test 2</th>
            <td>135.55</td>
            <td>0.31</td>
        </tr>
        <tr>
            <th class="sub-title">Test 3</th>
            <td>143.88</td>
            <td>0.33</td>
        </tr>
        <tr>
            <th class="sub-title">Maximum</th>
            <td>143.88</td>
            <td>0.33</td>
        </tr>
        <tr>
            <th class="sub-title">Average</th>
            <td>139.83</td>
            <td>0.32</td>
        </tr>
        <tr>
            <th class="sub-title">Condition</th>
            <td colspan="2">Max. Reach / Max. Velocity / Vertical Downward Motion</td>
        </tr>
    </table>
    <table>
        <tr>
            <th colspan="3">Elbow (Joint 2)</th>
        </tr>
        <tr>
            <th></th>
            <th>Stop Distance (mm)</th>
            <th>Stop Time (sec)</th>
        </tr>
        <tr>
            <th class="sub-title">Test 1</th>
            <td>270.96</td>
            <td>0.32</td>
        </tr>
        <tr>
            <th class="sub-title">Test 2</th>
            <td>266.4</td>
            <td>0.32</td>
        </tr>
        <tr>
            <th class="sub-title">Test 3</th>
            <td>252.93</td>
            <td>0.31</td>
        </tr>
        <tr>
            <th class="sub-title">Maximum</th>
            <td>270.96</td>
            <td>0.32</td>
        </tr>
        <tr>
            <th class="sub-title">Average</th>
            <td>263.43</td>
            <td>0.316</td>
        </tr>
        <tr>
            <th class="sub-title">Condition</th>
            <td colspan="2">Max. Reach / Max. Velocity / Vertical Downward Motion</td>
        </tr>
    </table>
</div>

### 5. RB3-730ES Series

<div class="center-align th-align td-align">
    <table>
        <tr>
            <th colspan="3">Base (Joint 0)</th>
        </tr>
        <tr>
            <th></th>
            <th>Stop Distance (mm)</th>
            <th>Stop Time (sec)</th>
        </tr>
        <tr>
            <th class="sub-title">Test 1</th>
            <td>122.8</td>
            <td>0.28</td>
        </tr>
        <tr>
            <th class="sub-title">Test 2</th>
            <td>118.11</td>
            <td>0.27</td>
        </tr>
        <tr>
            <th class="sub-title">Test 3</th>
            <td>125.99</td>
            <td>0.28</td>
        </tr>
        <tr>
            <th class="sub-title">Maximum</th>
            <td>125.99</td>
            <td>0.28</td>
        </tr>
        <tr>
            <th class="sub-title">Average</th>
            <td>122.3</td>
            <td>0.276</td>
        </tr>
        <tr>
            <th class="sub-title">Condition</th>
            <td colspan="2">Max. Reach / Max. Velocity / Horizontal Motion</td>
        </tr>
    </table>
    <table>
        <tr>
            <th colspan="3">Shoulder (Joint 1)</th>
        </tr>
        <tr>
            <th></th>
            <th>Stop Distance (mm)</th>
            <th>Stop Time (sec)</th>
        </tr>
        <tr>
            <th class="sub-title">Test 1</th>
            <td>182.17</td>
            <td>0.3</td>
        </tr>
        <tr>
            <th class="sub-title">Test 2</th>
            <td>190.41</td>
            <td>0.35</td>
        </tr>
        <tr>
            <th class="sub-title">Test 3</th>
            <td>182.64</td>
            <td>0.3</td>
        </tr>
        <tr>
            <th class="sub-title">Maximum</th>
            <td>190.41</td>
            <td>0.35</td>
        </tr>
        <tr>
            <th class="sub-title">Average</th>
            <td>185.07</td>
            <td>0.32</td>
        </tr>
        <tr>
            <th class="sub-title">Condition</th>
            <td colspan="2">Max. Reach / Max. Velocity / Vertical Downward Motion</td>
        </tr>
    </table>
    <table>
        <tr>
            <th colspan="3">Elbow (Joint 2)</th>
        </tr>
        <tr>
            <th></th>
            <th>Stop Distance (mm)</th>
            <th>Stop Time (sec)</th>
        </tr>
        <tr>
            <th class="sub-title">Test 1</th>
            <td>151.06</td>
            <td>0.24</td>
        </tr>
        <tr>
            <th class="sub-title">Test 2</th>
            <td>147.56</td>
            <td>0.23</td>
        </tr>
        <tr>
            <th class="sub-title">Test 3</th>
            <td>156.75</td>
            <td>0.28</td>
        </tr>
        <tr>
            <th class="sub-title">Maximum</th>
            <td>156.75</td>
            <td>0.28</td>
        </tr>
        <tr>
            <th class="sub-title">Average</th>
            <td>151.79</td>
            <td>0.25</td>
        </tr>
        <tr>
            <th class="sub-title">Condition</th>
            <td colspan="2">Max. Reach / Max. Velocity / Vertical Downward Motion</td>
        </tr>
    </table>
</div>

### 6. RB6-920ES Series

<div class="center-align th-align td-align">
    <table>
        <tr>
            <th colspan="3">Base (Joint 0)</th>
        </tr>
        <tr>
            <th></th>
            <th>Stop Distance (mm)</th>
            <th>Stop Time (sec)</th>
        </tr>
        <tr>
            <th class="sub-title">Test 1</th>
            <td>171.72</td>
            <td>0.24</td>
        </tr>
        <tr>
            <th class="sub-title">Test 2</th>
            <td>160.14</td>
            <td>0.18</td>
        </tr>
        <tr>
            <th class="sub-title">Test 3</th>
            <td>165.44</td>
            <td>0.18</td>
        </tr>
        <tr>
            <th class="sub-title">Maximum</th>
            <td>171.72</td>
            <td>0.24</td>
        </tr>
        <tr>
            <th class="sub-title">Average</th>
            <td>165.77</td>
            <td>0.2</td>
        </tr>
        <tr>
            <th class="sub-title">Condition</th>
            <td colspan="2">Max. Reach / Max. Velocity / Horizontal Motion</td>
        </tr>
    </table>
    <table>
        <tr>
            <th colspan="3">Shoulder (Joint 1)</th>
        </tr>
        <tr>
            <th></th>
            <th>Stop Distance (mm)</th>
            <th>Stop Time (sec)</th>
        </tr>
        <tr>
            <th class="sub-title">Test 1</th>
            <td>211.4</td>
            <td>0.31</td>
        </tr>
        <tr>
            <th class="sub-title">Test 2</th>
            <td>211.6</td>
            <td>0.3</td>
        </tr>
        <tr>
            <th class="sub-title">Test 3</th>
            <td>196.8</td>
            <td>0.25</td>
        </tr>
        <tr>
            <th class="sub-title">Maximum</th>
            <td>211.6</td>
            <td>0.31</td>
        </tr>
        <tr>
            <th class="sub-title">Average</th>
            <td>206.6</td>
            <td>0.29</td>
        </tr>
        <tr>
            <th class="sub-title">Condition</th>
            <td colspan="2">Max. Reach / Max. Velocity / Vertical Downward Motion</td>
        </tr>
    </table>
    <table>
        <tr>
            <th colspan="3">Elbow (Joint 2)</th>
        </tr>
        <tr>
            <th></th>
            <th>Stop Distance (mm)</th>
            <th>Stop Time (sec)</th>
        </tr>
        <tr>
            <th class="sub-title">Test 1</th>
            <td>217.3</td>
            <td>0.21</td>
        </tr>
        <tr>
            <th class="sub-title">Test 2</th>
            <td>211.6</td>
            <td>0.21</td>
        </tr>
        <tr>
            <th class="sub-title">Test 3</th>
            <td>215.6</td>
            <td>0.21</td>
        </tr>
        <tr>
            <th class="sub-title">Maximum</th>
            <td>217.3</td>
            <td>0.21</td>
        </tr>
        <tr>
            <th class="sub-title">Average</th>
            <td>214.83</td>
            <td>0.21</td>
        </tr>
        <tr>
            <th class="sub-title">Condition</th>
            <td colspan="2">Max. Reach / Max. Velocity / Vertical Downward Motion</td>
        </tr>
    </table>
</div>

### 7. RB20-1900ES Series

<div class="center-align th-align td-align">
    <table>
        <tr>
            <th colspan="3">Base (Joint 0)</th>
        </tr>
        <tr>
            <th></th>
            <th>Stop Distance (mm)</th>
            <th>Stop Time (sec)</th>
        </tr>
        <tr>
            <th class="sub-title">Test 1</th>
            <td>219.67</td>
            <td>0.21</td>
        </tr>
        <tr>
            <th class="sub-title">Test 2</th>
            <td>205.5</td>
            <td>0.2</td>
        </tr>
        <tr>
            <th class="sub-title">Test 3</th>
            <td>217.72</td>
            <td>0.2</td>
        </tr>
        <tr>
            <th class="sub-title">Maximum</th>
            <td>219.67</td>
            <td>0.21</td>
        </tr>
        <tr>
            <th class="sub-title">Average</th>
            <td>214.3</td>
            <td>0.2</td>
        </tr>
        <tr>
            <th class="sub-title">Condition</th>
            <td colspan="2">Max. Reach / Max. Velocity / Horizontal Motion</td>
        </tr>
    </table>
    <table>
        <tr>
            <th colspan="3">Shoulder (Joint 1)</th>
        </tr>
        <tr>
            <th></th>
            <th>Stop Distance (mm)</th>
            <th>Stop Time (sec)</th>
        </tr>
        <tr>
            <th class="sub-title">Test 1</th>
            <td>359.34</td>
            <td>0.28</td>
        </tr>
        <tr>
            <th class="sub-title">Test 2</th>
            <td>355.6</td>
            <td>0.27</td>
        </tr>
        <tr>
            <th class="sub-title">Test 3</th>
            <td>363.33</td>
            <td>0.29</td>
        </tr>
        <tr>
            <th class="sub-title">Maximum</th>
            <td>363.33</td>
            <td>0.29</td>
        </tr>
        <tr>
            <th class="sub-title">Average</th>
            <td>359.42</td>
            <td>0.28</td>
        </tr>
        <tr>
            <th class="sub-title">Condition</th>
            <td colspan="2">Max. Reach / Max. Velocity / Vertical Downward Motion</td>
        </tr>
    </table>
    <table>
        <tr>
            <th colspan="3">Elbow (Joint 2)</th>
        </tr>
        <tr>
            <th></th>
            <th>Stop Distance (mm)</th>
            <th>Stop Time (sec)</th>
        </tr>
        <tr>
            <th class="sub-title">Test 1</th>
            <td>205.35</td>
            <td>0.24</td>
        </tr>
        <tr>
            <th class="sub-title">Test 2</th>
            <td>150.78</td>
            <td>0.2</td>
        </tr>
        <tr>
            <th class="sub-title">Test 3</th>
            <td>210.02</td>
            <td>0.26</td>
        </tr>
        <tr>
            <th class="sub-title">Maximum</th>
            <td>210.02</td>
            <td>0.26</td>
        </tr>
        <tr>
            <th class="sub-title">Average</th>
            <td>188.72</td>
            <td>0.23</td>
        </tr>
        <tr>
            <th class="sub-title">Condition</th>
            <td colspan="2">Max. Reach / Max. Velocity / Vertical Downward Motion</td>
        </tr>
    </table>
</div>

<style scoped>
th,
td {
  padding: 8px;
}
</style>
