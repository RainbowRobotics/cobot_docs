---
layout: doc
outline: deep
---

# D.H. Parameters v1.1

### Denavit Hartenberg (DH) Parameters

<br>

#### 1. Standard D-H Parameter

![missing](/technical_docs/common/dh_parameters/1-1.png)

- A rotation 𝜃<sub>𝑖</sub> about 𝑧<sub>𝑖−1</sub> axis
- A translation 𝑑<sub>𝑖</sub> along the 𝑧<sub>𝑖−1</sub> axis
- A translation 𝑎<sub>𝑖</sub> along the 𝑥<sub>𝑖−1</sub> axis
- A rotation 𝛼<sub>𝑖</sub> about 𝑥<sub>𝑖−1</sub> axis

<div class="center-align th-align td-align">
    <img src="/technical_docs/common/dh_parameters/1-2.png" />    
    <table>
        <tr>
            <th></th>
            <th>d1</th>
            <th>d2</th>
            <th>d3</th>
            <th>d4</th>
            <th>d5</th>
            <th>d6</th>
            <th>a1</th>
            <th>a2</th>
        </tr>
        <tr>
            <th class="sub-title">RB5-850</th>
            <td>169.2</td>
            <td>148.4</td>
            <td>148.4</td>
            <td>110.7</td>
            <td>110.7</td>
            <td>96.7</td>
            <td>425.0</td>
            <td>392.0</td>
        </tr>
        <tr>
            <th class="sub-title">RB3-1200</th>
            <td>169.2</td>
            <td>148.4</td>
            <td>148.4</td>
            <td>110.7</td>
            <td>110.7</td>
            <td>96.7</td>
            <td>566.9</td>
            <td>522.4</td>
        </tr>
        <tr>
            <th class="sub-title">RB10-1300</th>
            <td>197.0</td>
            <td>187.5</td>
            <td>148.4</td>
            <td>117.15</td>
            <td>117.15</td>
            <td>115.3</td>
            <td>612.7</td>
            <td>570.15</td>
        </tr>
    </table>
</div>

<div class="center-align th-align td-align">
    <img src="/technical_docs/common/dh_parameters/1-3.png" style="width: 300px;" />    
    <table>
        <tr>
            <th colspan="5">Standard(Spong)</th>
        </tr>
        <tr>
            <th>link i</th>
            <th>θi</th>
            <th>di</th>
            <th>ai</th>
            <th>αi</th>
        </tr>
        <tr>
            <td>L1</td>
            <td>θ1</td>
            <td>d1</td>
            <td>0</td>
            <td>-90</td>
        </tr>
        <tr>
            <td>L2</td>
            <td>θ2 - 90</td>
            <td>-d2</td>
            <td>0</td>
            <td>0</td>
        </tr>
        <tr>
            <td>L3</td>
            <td>0</td>
            <td>0</td>
            <td>a1</td>
            <td>0</td>
        </tr>
        <tr>
            <td>L4</td>
            <td>θ3</td>
            <td>d3</td>
            <td>0</td>
            <td>0</td>
        </tr>
        <tr>
            <td>L5</td>
            <td>0</td>
            <td>0</td>
            <td>a2</td>
            <td>0</td>
        </tr>
        <tr>
            <td>L6</td>
            <td>θ4 + 90</td>
            <td>-d4</td>
            <td>0</td>
            <td>0</td>
        </tr>
        <tr>
            <td>L7</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>90</td>
        </tr>
        <tr>
            <td>L8</td>
            <td>θ5</td>
            <td>d5</td>
            <td>0</td>
            <td>-90</td>
        </tr>
        <tr>
            <td>L9</td>
            <td>θ6</td>
            <td>-d6</td>
            <td>0</td>
            <td>90</td>
        </tr>
    </table>
</div>

#### 2. Modified D-H Parameter

![missing](/technical_docs/common/dh_parameters/2-1.png)

- A rotation 𝛼<sub>𝑖−1</sub> about 𝑥<sub>𝑖−1</sub> axis
- A translation 𝑎<sub>𝑖−1</sub> along the 𝑥<sub>𝑖−1</sub> axis
- A rotation 𝜃<sub>𝑖</sub> about 𝑧<sub>𝑖</sub> axis
- A translation 𝑑<sub>𝑖</sub> along the 𝑧<sub>𝑖</sub> axis

<div class="center-align th-align td-align">
    <img src="/technical_docs/common/dh_parameters/2-2.png" />    
    <table>
        <tr>
            <th></th>
            <th>d1</th>
            <th>d2</th>
            <th>d3</th>
            <th>d4</th>
            <th>d5</th>
            <th>d6</th>
            <th>a1</th>
            <th>a2</th>
        </tr>
        <tr>
            <th class="sub-title">RB5-850</th>
            <td>169.2</td>
            <td>148.4</td>
            <td>148.4</td>
            <td>110.7</td>
            <td>110.7</td>
            <td>96.7</td>
            <td>425.0</td>
            <td>392.0</td>
        </tr>
        <tr>
            <th class="sub-title">RB3-1200</th>
            <td>169.2</td>
            <td>148.4</td>
            <td>148.4</td>
            <td>110.7</td>
            <td>110.7</td>
            <td>96.7</td>
            <td>566.9</td>
            <td>522.4</td>
        </tr>
        <tr>
            <th class="sub-title">RB10-1300</th>
            <td>197.0</td>
            <td>187.5</td>
            <td>148.4</td>
            <td>117.15</td>
            <td>117.15</td>
            <td>115.3</td>
            <td>612.7</td>
            <td>570.15</td>
        </tr>
    </table>
</div>

<div class="center-align th-align td-align">
    <img src="/technical_docs/common/dh_parameters/2-3.png" style="width: 300px;" />    
    <table>
        <tr>
            <th colspan="5">Modified(Craig)</th>
        </tr>
        <tr>
            <th>link i</th>
            <th>θi</th>
            <th>di</th>
            <th>a(i-1)</th>
            <th>α(i-1)</th>
        </tr>
        <tr>
            <td>L1</td>
            <td>θ1</td>
            <td>d1</td>
            <td>0</td>
            <td>0</td>
        </tr>
        <tr>
            <td>L2</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>-90</td>
        </tr>
        <tr>
            <td>L3</td>
            <td>θ2 - 90</td>
            <td>-d2</td>
            <td>0</td>
            <td>0</td>
        </tr>
        <tr>
            <td>L4</td>
            <td>0</td>
            <td>0</td>
            <td>a1</td>
            <td>0</td>
        </tr>
        <tr>
            <td>L5</td>
            <td>θ3</td>
            <td>d3</td>
            <td>0</td>
            <td>0</td>
        </tr>
        <tr>
            <td>L6</td>
            <td>0</td>
            <td>0</td>
            <td>a2</td>
            <td>0</td>
        </tr>
        <tr>
            <td>L7</td>
            <td>θ4 + 90</td>
            <td>-d4</td>
            <td>0</td>
            <td>0</td>
        </tr>
        <tr>
            <td>L8</td>
            <td>θ5</td>
            <td>d5</td>
            <td>0</td>
            <td>90</td>
        </tr>
        <tr>
            <td>L9</td>
            <td>θ6</td>
            <td>-d6</td>
            <td>0</td>
            <td>-90</td>
        </tr>
        <tr>
            <td>L10</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>90</td>
        </tr>
    </table>
</div>

#### 3. Standard D-H Parameter For S-pipe Type

![missing](/technical_docs/common/dh_parameters/3-1.png)

- A rotation 𝜃<sub>𝑖</sub> about 𝑧<sub>𝑖−1</sub> axis
- A translation 𝑑<sub>𝑖</sub> along the 𝑧<sub>𝑖−1</sub> axis
- A translation 𝑎<sub>𝑖</sub> along the 𝑥<sub>𝑖−1</sub> axis
- A rotation 𝛼<sub>𝑖</sub> about 𝑥<sub>𝑖−1</sub> axis

![missing](/technical_docs/common/dh_parameters/3-2.png)

<div class="center-align th-align td-align">
    <img src="/technical_docs/common/dh_parameters/3-3.png" style="width: 300px;" />
    <table>
        <tr>
            <th colspan="5">Standard(Spong)</th>
        </tr>
        <tr>
            <th>link i</th>
            <th>θi</th>
            <th>di</th>
            <th>ai</th>
            <th>αi</th>
        </tr>
        <tr>
            <td>L1</td>
            <td>θ1</td>
            <td>d1</td>
            <td>0</td>
            <td>-90</td>
        </tr>
        <tr>
            <td>L2</td>
            <td>θ2 - 90</td>
            <td>-d2</td>
            <td>0</td>
            <td>0</td>
        </tr>
        <tr>
            <td>L3</td>
            <td>0</td>
            <td>0</td>
            <td>a1</td>
            <td>0</td>
        </tr>
        <tr>
            <td>L4</td>
            <td>θ3 + 90</td>
            <td>d3</td>
            <td>0</td>
            <td>0</td>
        </tr>
        <tr>
            <td>L5</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>90</td>
        </tr>
        <tr>
            <td>L6</td>
            <td>θ4</td>
            <td>d4</td>
            <td>0</td>
            <td>-90</td>
        </tr>
        <tr>
            <td>L7</td>
            <td>0</td>
            <td>-d5</td>
            <td>0</td>
            <td>0</td>
        </tr>
        <tr>
            <td>L8</td>
            <td>θ5</td>
            <td>d6</td>
            <td>0</td>
            <td>90</td>
        </tr>
        <tr>
            <td>L9</td>
            <td>θ6</td>
            <td>d7</td>
            <td>0</td>
            <td>0</td>
        </tr>
    </table>
</div>

<style scoped>
.sub-title {
    text-align: left;
}

td {
    min-width: 60px;
}
</style>
