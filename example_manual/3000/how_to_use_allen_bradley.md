---
layout: doc
outline: deep
---

# How to use Allen-Bradley PLC Ethernet IP

<br>

<iframe class="iframe-resources" src="https://rainbowco-my.sharepoint.com/:p:/g/personal/hyoin_rainbow-robotics_com/ES1jynJYxb9IpQ1lEL_bBEYBd23gzMVQC7WEs6z73C7lRA?e=DOi447&amp;action=embedview&amp;wdbipreview=true&amp;wdAr=1.7777777777777777" frameborder="0"></iframe>

\# Allen-Bradley PLC Ethernet IP
\# Allen-Bradley PLC example manual
\# studio5000 connection
\# Allen-Bradley PLC IP set
\# RB address eds
\# monitor tags data
\# RB IP address set
\# RB Ethernet IP set
\# Allen-Bradley PLC example video

### cf. RB EDS Tags Map (I.Data)

<div class="center-align last-child-align th-align td-align">
   <table>
      <tr>
         <th colspan=4>Robot -> PLC(IN) I Data Map</th>
      </tr>
      <tr>
         <th>I.Data(Byte)</th>
         <th>Function</th>
         <th>EDS NAME</th>
         <th>Data Type</th>
      </tr>
      <tr>
         <td>0</td>
         <td rowspan=2>BOX_DIGITAL_IN_0~15</td>
         <td rowspan=40>UINT</td>
         <td rowspan=40>Unsigned INT</td>
      </tr>
      <tr>
         <td>1</td>
      </tr>
      <tr>
         <td>2</td>
         <td rowspan=2>BOX_DIGITAL_OUT_0~15</td>
      </tr>
      <tr>
         <td>3</td>
      </tr>
      <tr>
         <td>4</td>
         <td rowspan=2>BOX_ANALOG_IN_0 * 1000</td>
      </tr>
      <tr>
         <td>5</td>
      </tr>
      <tr>
         <td>6</td>
         <td rowspan=2>BOX_ANALOG_IN_1 * 1000</td>
      </tr>
      <tr>
         <td>7</td>
      </tr>
      <tr>
         <td>8</td>
         <td rowspan=2>BOX_ANALOG_IN_2 * 1000</td>
      </tr>
      <tr>
         <td>9</td>
      </tr>
      <tr>
         <td>10</td>
         <td rowspan=2>BOX_ANALOG_IN_3 * 1000</td>
      </tr>
      <tr>
         <td>11</td>
      </tr>
      <tr>
         <td>12</td>
         <td rowspan=2>BOX_ANALOG_OUT_0 * 1000</td>
      </tr>
      <tr>
         <td>13</td>
      </tr>
      <tr>
         <td>14</td>
         <td rowspan=2>BOX_ANALOG_OUT_1 * 1000</td>
      </tr>
      <tr>
         <td>15</td>
      </tr>
      <tr>
         <td>16</td>
         <td rowspan=2>BOX_ANALOG_OUT_2 * 1000</td>
      </tr>
      <tr>
         <td>17</td>
      </tr>
      <tr>
         <td>18</td>
         <td rowspan=2>BOX_ANALOG_OUT_3 * 1000</td>
      </tr>
      <tr>
         <td>19</td>
      </tr>
      <tr>
         <td>20</td>
         <td rowspan=2>EX_DIGITAL_IN_0~15</td>
      </tr>
      <tr>
         <td>21</td>
      </tr>
      <tr>
         <td>22</td>
         <td rowspan=2>EX_DIGITAL_OUT_0~15</td>
      </tr>
      <tr>
         <td>23</td>
      </tr>
      <tr>
         <td>24</td>
         <td rowspan=2>EX_ANALOG_IN_0 * 1000</td>
      </tr>
      <tr>
         <td>25</td>
      </tr>
      <tr>
         <td>26</td>
         <td rowspan=2>EX_ANALOG_IN_1 * 1000</td>
      </tr>
      <tr>
         <td>27</td>
      </tr>
      <tr>
         <td>28</td>
         <td rowspan=2>EX_ANALOG_IN_2 * 1000</td>
      </tr>
      <tr>
         <td>29</td>
      </tr>
      <tr>
         <td>30</td>
         <td rowspan=2>EX_ANALOG_IN_3 * 1000</td>
      </tr>
      <tr>
         <td>31</td>
      </tr>
      <tr>
         <td>32</td>
         <td rowspan=2>EX_ANALOG_OUT_0 * 1000</td>
      </tr>
      <tr>
         <td>33</td>
      </tr>
      <tr>
         <td>34</td>
         <td rowspan=2>EX_ANALOG_OUT_1 * 1000</td>
      </tr>
      <tr>
         <td>35</td>
      </tr>
      <tr>
         <td>36</td>
         <td rowspan=2>EX_ANALOG_OUT_2 * 1000</td>
      </tr>
      <tr>
         <td>37</td>
      </tr>
      <tr>
         <td>38</td>
         <td rowspan=2>EX_ANALOG_OUT_3 * 1000</td>
      </tr>
      <tr>
         <td>39</td>
      </tr>
      <tr>
         <td>40</td>
         <td>TOOL_VOLTAGE</td>
         <td rowspan=16>USINT</td>
         <td rowspan=16>Unsigned Small INT</td>
      </tr>
      <tr>
         <td>41</td>
         <td>TOOL_DIGITAL_IN_0~5</td>
      </tr>
      <tr>
         <td>42</td>
         <td>TOOL_DIGITAL_OUT_0~1</td>
      </tr>
      <tr>
         <td>43</td>
         <td>STATE_IS_ROBOT_ACTIVATED</td>
      </tr>
      <tr>
         <td>44</td>
         <td>STATE_IS_REAL_MODE</td>
      </tr>
      <tr>
         <td>45</td>
         <td>STATE_IS_COLL_DETECTED</td>
      </tr>
      <tr>
         <td>46</td>
         <td>STATE_IS_ARM_POWER_ENGAGED</td>
      </tr>
      <tr>
         <td>47</td>
         <td>STATE_IS_DIRECT_TEACHING_MODE</td>
      </tr>
      <tr>
         <td>48</td>
         <td>STATE_IS_ROBOT_MOVING</td>
      </tr>
      <tr>
         <td>49</td>
         <td>STATE_IS_PAUSE_STATE</td>
      </tr>
      <tr>
         <td>50</td>
         <td>STATE_IS_TP_CONNECTED</td>
      </tr>
      <tr>
         <td>51</td>
         <td>STATE_IS_PROGRAM_RUN</td>
      </tr>
      <tr>
         <td>52</td>
         <td>STATE_IS_NOARC_ON</td>
      </tr>
      <tr>
         <td>53</td>
         <td>STATE_IS_EMG_BTN_RELEASED</td>
      </tr>
      <tr>
         <td>54</td>
         <td>STATE_IS_FIRST_PROG_RUN</td>
      </tr>
      <tr>
         <td>55</td>
         <td>Robot_Speed_Bar</td>
      </tr>
      <tr>
         <td>56</td>
         <td rowspan=2>Robot_J0_CUR * 100</td>
         <td rowspan=64>SINT</td>
         <td rowspan=64>Signed INT</td>
      </tr>
      <tr>
         <td>57</td>
      </tr>
      <tr>
         <td>58</td>
         <td rowspan=2>Robot_J1_CUR * 100</td>
      </tr>
      <tr>
         <td>59</td>
      </tr>
      <tr>
         <td>60</td>
         <td rowspan=2>Robot_J2_CUR * 100</td>
      </tr>
      <tr>
         <td>61</td>
      </tr>
      <tr>
         <td>62</td>
         <td rowspan=2>Robot_J3_CUR * 100</td>
      </tr>
      <tr>
         <td>63</td>
      </tr>
      <tr>
         <td>64</td>
         <td rowspan=2>Robot_J4_CUR * 100</td>
      </tr>
      <tr>
         <td>65</td>
      </tr>
      <tr>
         <td>66</td>
         <td rowspan=2>Robot_J5_CUR * 100</td>
      </tr>
      <tr>
         <td>67</td>
      </tr>
      <tr>
         <td>68</td>
         <td rowspan=2>Robot_J0_TEMP * 100</td>
      </tr>
      <tr>
         <td>69</td>
      </tr>
      <tr>
         <td>70</td>
         <td rowspan=2>Robot_J1_TEMP * 100</td>
      </tr>
      <tr>
         <td>71</td>
      </tr>
      <tr>
         <td>72</td>
         <td rowspan=2>Robot_J2_TEMP * 100</td>
      </tr>
      <tr>
         <td>73</td>
      </tr>
      <tr>
         <td>74</td>
         <td rowspan=2>Robot_J3_TEMP * 100</td>
      </tr>
      <tr>
         <td>75</td>
      </tr>
      <tr>
         <td>76</td>
         <td rowspan=2>Robot_J4_TEMP * 100</td>
      </tr>
      <tr>
         <td>77</td>
      </tr>
      <tr>
         <td>78</td>
         <td rowspan=2>Robot_J5_TEMP * 100</td>
      </tr>
      <tr>
         <td>79</td>
      </tr>
      <tr>
         <td>80</td>
         <td rowspan=2>USER_SINT_R2P_0</td>
      </tr>
      <tr>
         <td>81</td>
      </tr>
      <tr>
         <td>82</td>
         <td rowspan=2>USER_SINT_R2P_1</td>
      </tr>
      <tr>
         <td>83</td>
      </tr>
      <tr>
         <td>84</td>
         <td rowspan=2>USER_SINT_R2P_2</td>
      </tr>
      <tr>
         <td>85</td>
      </tr>
      <tr>
         <td>86</td>
         <td rowspan=2>USER_SINT_R2P_3</td>
      </tr>
      <tr>
         <td>87</td>
      </tr>
      <tr>
         <td>88</td>
         <td rowspan=2>USER_SINT_R2P_4</td>
      </tr>
      <tr>
         <td>89</td>
      </tr>
      <tr>
         <td>90</td>
         <td rowspan=2>USER_SINT_R2P_5</td>
      </tr>
      <tr>
         <td>91</td>
      </tr>
      <tr>
         <td>92</td>
         <td rowspan=2>USER_SINT_R2P_6</td>
      </tr>
      <tr>
         <td>93</td>
      </tr>
      <tr>
         <td>94</td>
         <td rowspan=2>USER_SINT_R2P_7</td>
      </tr>
      <tr>
         <td>95</td>
      </tr>
      <tr>
         <td>96</td>
         <td rowspan=2>USER_SINT_R2P_8</td>
      </tr>
      <tr>
         <td>97</td>
      </tr>
      <tr>
         <td>98</td>
         <td rowspan=2>USER_SINT_R2P_9</td>
      </tr>
      <tr>
         <td>99</td>
      </tr>
      <tr>
         <td>100</td>
         <td rowspan=2>USER_SINT_R2P_10</td>
      </tr>
      <tr>
         <td>101</td>
      </tr>
      <tr>
         <td>102</td>
         <td rowspan=2>USER_SINT_R2P_11</td>
      </tr>
      <tr>
         <td>103</td>
      </tr>
      <tr>
         <td>104</td>
         <td rowspan=2>USER_SINT_R2P_12</td>
      </tr>
      <tr>
         <td>105</td>
      </tr>
      <tr>
         <td>106</td>
         <td rowspan=2>USER_SINT_R2P_13</td>
      </tr>
      <tr>
         <td>107</td>
      </tr>
      <tr>
         <td>108</td>
         <td rowspan=2>USER_SINT_R2P_14</td>
      </tr>
      <tr>
         <td>109</td>
      </tr>
      <tr>
         <td>110</td>
         <td rowspan=2>USER_SINT_R2P_15</td>
      </tr>
      <tr>
         <td>111</td>
      </tr>
      <tr>
         <td>112</td>
         <td rowspan=2>USER_SINT_R2P_16</td>
      </tr>
      <tr>
         <td>113</td>
      </tr>
      <tr>
         <td>114</td>
         <td rowspan=2>USER_SINT_R2P_17</td>
      </tr>
      <tr>
         <td>115</td>
      </tr>
      <tr>
         <td>116</td>
         <td rowspan=2>USER_SINT_R2P_18</td>
      </tr>
      <tr>
         <td>117</td>
      </tr>
      <tr>
         <td>118</td>
         <td rowspan=2>USER_SINT_R2P_19</td>
      </tr>
      <tr>
         <td>119</td>
      </tr>
      <tr>
         <td>120</td>
         <td rowspan=4>CB_SOFT_VERSION</td>
         <td rowspan=8>DINT</td>
         <td rowspan=8>Double Signed INT</td>
      </tr>
      <tr>
         <td>121</td>
      </tr>
      <tr>
         <td>122</td>
      </tr>
      <tr>
         <td>123</td>
      </tr>
      <tr>
         <td>124</td>
         <td rowspan=4>CB_ROBOT_TYPE_CODE</td>
      </tr>
      <tr>
         <td>125</td>
      </tr>
      <tr>
         <td>126</td>
      </tr>
      <tr>
         <td>127</td>
      </tr>
      <tr>
         <td>128</td>
         <td rowspan=4>Robot_X_REF</td>
         <td rowspan=132>REAL</td>
         <td rowspan=132>Float</td>
      </tr>
      <tr>
         <td>129</td>
      </tr>
      <tr>
         <td>130</td>
      </tr>
      <tr>
         <td>131</td>
      </tr>
      <tr>
         <td>132</td>
         <td rowspan=4>Robot_Y_REF</td>
      </tr>
      <tr>
         <td>133</td>
      </tr>
      <tr>
         <td>134</td>
      </tr>
      <tr>
         <td>135</td>
      </tr>
      <tr>
         <td>136</td>
         <td rowspan=4>Robot_Z_REF</td>
      </tr>
      <tr>
         <td>137</td>
      </tr>
      <tr>
         <td>138</td>
      </tr>
      <tr>
         <td>139</td>
      </tr>
      <tr>
         <td>140</td>
         <td rowspan=4>Robot_RX_REF</td>
      </tr>
      <tr>
         <td>141</td>
      </tr>
      <tr>
         <td>142</td>
      </tr>
      <tr>
         <td>143</td>
      </tr>
      <tr>
         <td>144</td>
         <td rowspan=4>Robot_RY_REF</td>
      </tr>
      <tr>
         <td>145</td>
      </tr>
      <tr>
         <td>146</td>
      </tr>
      <tr>
         <td>147</td>
      </tr>
      <tr>
         <td>148</td>
         <td rowspan=4>Robot_RZ_REF</td>
      </tr>
      <tr>
         <td>149</td>
      </tr>
      <tr>
         <td>150</td>
      </tr>
      <tr>
         <td>151</td>
      </tr>
      <tr>
         <td>152</td>
         <td rowspan=4>Robot_J0_REF</td>
      </tr>
      <tr>
         <td>153</td>
      </tr>
      <tr>
         <td>154</td>
      </tr>
      <tr>
         <td>155</td>
      </tr>
      <tr>
         <td>156</td>
         <td rowspan=4>Robot_J1_REF</td>
      </tr>
      <tr>
         <td>157</td>
      </tr>
      <tr>
         <td>158</td>
      </tr>
      <tr>
         <td>159</td>
      </tr>
      <tr>
         <td>160</td>
         <td rowspan=4>Robot_J2_REF</td>
      </tr>
      <tr>
         <td>161</td>
      </tr>
      <tr>
         <td>162</td>
      </tr>
      <tr>
         <td>163</td>
      </tr>
      <tr>
         <td>164</td>
         <td rowspan=4>Robot_J3_REF</td>
      </tr>
      <tr>
         <td>165</td>
      </tr>
      <tr>
         <td>166</td>
      </tr>
      <tr>
         <td>167</td>
      </tr>
      <tr>
         <td>168</td>
         <td rowspan=4>Robot_J4_REF</td>
      </tr>
      <tr>
         <td>169</td>
      </tr>
      <tr>
         <td>170</td>
      </tr>
      <tr>
         <td>171</td>
      </tr>
      <tr>
         <td>172</td>
         <td rowspan=4>Robot_J5_REF</td>
      </tr>
      <tr>
         <td>173</td>
      </tr>
      <tr>
         <td>174</td>
      </tr>
      <tr>
         <td>175</td>
      </tr>
      <tr>
         <td>176</td>
         <td rowspan=4>Robot_TCP_VEL</td>
      </tr>
      <tr>
         <td>177</td>
      </tr>
      <tr>
         <td>178</td>
      </tr>
      <tr>
         <td>179</td>
      </tr>
      <tr>
         <td>180</td>
         <td rowspan=4>USER_REAL_R2P_0</td>
      </tr>
      <tr>
         <td>181</td>
      </tr>
      <tr>
         <td>182</td>
      </tr>
      <tr>
         <td>183</td>
      </tr>
      <tr>
         <td>184</td>
         <td rowspan=4>USER_REAL_R2P_1</td>
      </tr>
      <tr>
         <td>185</td>
      </tr>
      <tr>
         <td>186</td>
      </tr>
      <tr>
         <td>187</td>
      </tr>
      <tr>
         <td>188</td>
         <td rowspan=4>USER_REAL_R2P_2</td>
      </tr>
      <tr>
         <td>189</td>
      </tr>
      <tr>
         <td>190</td>
      </tr>
      <tr>
         <td>191</td>
      </tr>
      <tr>
         <td>192</td>
         <td rowspan=4>USER_REAL_R2P_3</td>
      </tr>
      <tr>
         <td>193</td>
      </tr>
      <tr>
         <td>194</td>
      </tr>
      <tr>
         <td>195</td>
      </tr>
      <tr>
         <td>196</td>
         <td rowspan=4>USER_REAL_R2P_4</td>
      </tr>
      <tr>
         <td>197</td>
      </tr>
      <tr>
         <td>198</td>
      </tr>
      <tr>
         <td>199</td>
      </tr>
      <tr>
         <td>200</td>
         <td rowspan=4>USER_REAL_R2P_5</td>
      </tr>
      <tr>
         <td>201</td>
      </tr>
      <tr>
         <td>202</td>
      </tr>
      <tr>
         <td>203</td>
      </tr>
      <tr>
         <td>204</td>
         <td rowspan=4>USER_REAL_R2P_6</td>
      </tr>
      <tr>
         <td>205</td>
      </tr>
      <tr>
         <td>206</td>
      </tr>
      <tr>
         <td>207</td>
      </tr>
      <tr>
         <td>208</td>
         <td rowspan=4>USER_REAL_R2P_7</td>
      </tr>
      <tr>
         <td>209</td>
      </tr>
      <tr>
         <td>210</td>
      </tr>
      <tr>
         <td>211</td>
      </tr>
      <tr>
         <td>212</td>
         <td rowspan=4>USER_REAL_R2P_8</td>
      </tr>
      <tr>
         <td>213</td>
      </tr>
      <tr>
         <td>214</td>
      </tr>
      <tr>
         <td>215</td>
      </tr>
      <tr>
         <td>216</td>
         <td rowspan=4>USER_REAL_R2P_9</td>
      </tr>
      <tr>
         <td>217</td>
      </tr>
      <tr>
         <td>218</td>
      </tr>
      <tr>
         <td>219</td>
      </tr>
      <tr>
         <td>220</td>
         <td rowspan=4>USER_REAL_R2P_10</td>
      </tr>
      <tr>
         <td>221</td>
      </tr>
      <tr>
         <td>222</td>
      </tr>
      <tr>
         <td>223</td>
      </tr>
      <tr>
         <td>224</td>
         <td rowspan=4>USER_REAL_R2P_11</td>
      </tr>
      <tr>
         <td>225</td>
      </tr>
      <tr>
         <td>226</td>
      </tr>
      <tr>
         <td>227</td>
      </tr>
      <tr>
         <td>228</td>
         <td rowspan=4>USER_REAL_R2P_12</td>
      </tr>
      <tr>
         <td>229</td>
      </tr>
      <tr>
         <td>230</td>
      </tr>
      <tr>
         <td>231</td>
      </tr>
      <tr>
         <td>232</td>
         <td rowspan=4>USER_REAL_R2P_13</td>
      </tr>
      <tr>
         <td>233</td>
      </tr>
      <tr>
         <td>234</td>
      </tr>
      <tr>
         <td>235</td>
      </tr>
      <tr>
         <td>236</td>
         <td rowspan=4>USER_REAL_R2P_14</td>
      </tr>
      <tr>
         <td>237</td>
      </tr>
      <tr>
         <td>238</td>
      </tr>
      <tr>
         <td>239</td>
      </tr>
      <tr>
         <td>240</td>
         <td rowspan=4>USER_REAL_R2P_15</td>
      </tr>
      <tr>
         <td>241</td>
      </tr>
      <tr>
         <td>242</td>
      </tr>
      <tr>
         <td>243</td>
      </tr>
      <tr>
         <td>244</td>
         <td rowspan=4>USER_REAL_R2P_16</td>
      </tr>
      <tr>
         <td>245</td>
      </tr>
      <tr>
         <td>246</td>
      </tr>
      <tr>
         <td>247</td>
      </tr>
      <tr>
         <td>248</td>
         <td rowspan=4>USER_REAL_R2P_17</td>
      </tr>
      <tr>
         <td>249</td>
      </tr>
      <tr>
         <td>250</td>
      </tr>
      <tr>
         <td>251</td>
      </tr>
      <tr>
         <td>252</td>
         <td rowspan=4>USER_REAL_R2P_18</td>
      </tr>
      <tr>
         <td>253</td>
      </tr>
      <tr>
         <td>254</td>
      </tr>
      <tr>
         <td>255</td>
      </tr>
      <tr>
         <td>256</td>
         <td rowspan=4>USER_REAL_R2P_19</td>
      </tr>
      <tr>
         <td>257</td>
      </tr>
      <tr>
         <td>258</td>
      </tr>
      <tr>
         <td>259</td>
      </tr>
   </table>
</div>

### cf. RB EDS Tags Map (O.Data)

<div class="center-align last-child-align th-align td-align">
   <table>
      <tr>
         <th colspan=4>PLC -> Robot(OUT) O Data Map</th>
      </tr>
      <tr>
         <th>O.Data(Byte)</th>
         <th>Function</th>
         <th>EDS NAME</th>
         <th>Data Type</th>
      </tr>
      <tr>
         <td>0</td>
         <td rowspan=2>BOX_DIGITAL_OUT_MASK_0~15</td>
         <td rowspan=40>UINT</td>
         <td rowspan=40>Unsigned INT</td>
      </tr>
      <tr>
         <td>1</td>
      </tr>
      <tr>
         <td>2</td>
         <td rowspan=2>BOX_DIGITAL_OUT_0~15</td>
      </tr>
      <tr>
         <td>3</td>
      </tr>
      <tr>
         <td>4</td>
         <td rowspan=2>BOX_ANALOG_OUT_0_MASK</td>
      </tr>
      <tr>
         <td>5</td>
      </tr>
      <tr>
         <td>6</td>
         <td rowspan=2>BOX_ANALOG_OUT_1_MASK</td>
      </tr>
      <tr>
         <td>7</td>
      </tr>
      <tr>
         <td>8</td>
         <td rowspan=2>BOX_ANALOG_OUT_2_MASK</td>
      </tr>
      <tr>
         <td>9</td>
      </tr>
      <tr>
         <td>10</td>
         <td rowspan=2>BOX_ANALOG_OUT_3_MASK</td>
      </tr>
      <tr>
         <td>11</td>
      </tr>
      <tr>
         <td>12</td>
         <td rowspan=2>BOX_ANALOG_OUT_0 * 1000</td>
      </tr>
      <tr>
         <td>13</td>
      </tr>
      <tr>
         <td>14</td>
         <td rowspan=2>BOX_ANALOG_OUT_1 * 1000</td>
      </tr>
      <tr>
         <td>15</td>
      </tr>
      <tr>
         <td>16</td>
         <td rowspan=2>BOX_ANALOG_OUT_2 * 1000</td>
      </tr>
      <tr>
         <td>17</td>
      </tr>
      <tr>
         <td>18</td>
         <td rowspan=2>BOX_ANALOG_OUT_3 * 1000</td>
      </tr>
      <tr>
         <td>19</td>
      </tr>
      <tr>
         <td>20</td>
         <td rowspan=2>EX_DIGITAL_OUT_MASK_0~15</td>
      </tr>
      <tr>
         <td>21</td>
      </tr>
      <tr>
         <td>22</td>
         <td rowspan=2>EX_DIGITAL_OUT_0~15</td>
      </tr>
      <tr>
         <td>23</td>
      </tr>
      <tr>
         <td>24</td>
         <td rowspan=2>EX_ANALOG_OUT_0_MASK</td>
      </tr>
      <tr>
         <td>25</td>
      </tr>
      <tr>
         <td>26</td>
         <td rowspan=2>EX_ANALOG_OUT_1_MASK</td>
      </tr>
      <tr>
         <td>27</td>
      </tr>
      <tr>
         <td>28</td>
         <td rowspan=2>EX_ANALOG_OUT_2_MASK</td>
      </tr>
      <tr>
         <td>29</td>
      </tr>
      <tr>
         <td>30</td>
         <td rowspan=2>EX_ANALOG_OUT_3_MASK</td>
      </tr>
      <tr>
         <td>31</td>
      </tr>
      <tr>
         <td>32</td>
         <td rowspan=2>EX_ANALOG_OUT_0 * 1000</td>
      </tr>
      <tr>
         <td>33</td>
      </tr>
      <tr>
         <td>34</td>
         <td rowspan=2>EX_ANALOG_OUT_1 * 1000</td>
      </tr>
      <tr>
         <td>35</td>
      </tr>
      <tr>
         <td>36</td>
         <td rowspan=2>EX_ANALOG_OUT_2 * 1000</td>
      </tr>
      <tr>
         <td>37</td>
      </tr>
      <tr>
         <td>38</td>
         <td rowspan=2>EX_ANALOG_OUT_3 * 1000</td>
      </tr>
      <tr>
         <td>39</td>
      </tr>
      <tr>
         <td>40</td>
         <td>CTRL_START_PROG_ONCE</td>
         <td rowspan=12>USINT</td>
         <td rowspan=12>Unsigned Small INT</td>
      </tr>
      <tr>
         <td>41</td>
         <td>CTRL_START_PROG_REPEAT</td>
      </tr>
      <tr>
         <td>42</td>
         <td>CTRL_PAUSE_PROG</td>
      </tr>
      <tr>
         <td>43</td>
         <td>CTRL_STOP_PROG</td>
      </tr>
      <tr>
         <td>44</td>
         <td>CTRL_RESUME_PAUSE</td>
      </tr>
      <tr>
         <td>45</td>
         <td>CTRL_RESUME_COLLISION</td>
      </tr>
      <tr>
         <td>46</td>
         <td>CTRL_LOAD_DEFAULT_PROG</td>
      </tr>
      <tr>
         <td>47</td>
         <td>CTRL_ARM_ACTIVATION</td>
      </tr>
      <tr>
         <td>48</td>
         <td>CTRL_CHANGE_TO_REAL</td>
      </tr>
      <tr>
         <td>49</td>
         <td>CTRL_ARM_POWER_OFF</td>
      </tr>
      <tr>
         <td>50</td>
         <td>CTRL_DUMMY_1</td>
      </tr>
      <tr>
         <td>51</td>
         <td>CTRL_DUMMY_2</td>
      </tr>
      <tr>
         <td>52</td>
         <td rowspan=2>USER_SINT_P2R_0</td>
         <td rowspan=40>SINT</td>
         <td rowspan=40>Signed INT</td>
      </tr>
      <tr>
         <td>53</td>
      </tr>
      <tr>
         <td>54</td>
         <td rowspan=2>USER_SINT_P2R_1</td>
      </tr>
      <tr>
         <td>55</td>
      </tr>
      <tr>
         <td>56</td>
         <td rowspan=2>USER_SINT_P2R_2</td>
      </tr>
      <tr>
         <td>57</td>
      </tr>
      <tr>
         <td>58</td>
         <td rowspan=2>USER_SINT_P2R_3</td>
      </tr>
      <tr>
         <td>59</td>
      </tr>
      <tr>
         <td>60</td>
         <td rowspan=2>USER_SINT_P2R_4</td>
      </tr>
      <tr>
         <td>61</td>
      </tr>
      <tr>
         <td>62</td>
         <td rowspan=2>USER_SINT_P2R_5</td>
      </tr>
      <tr>
         <td>63</td>
      </tr>
      <tr>
         <td>64</td>
         <td rowspan=2>USER_SINT_P2R_6</td>
      </tr>
      <tr>
         <td>65</td>
      </tr>
      <tr>
         <td>66</td>
         <td rowspan=2>USER_SINT_P2R_7</td>
      </tr>
      <tr>
         <td>67</td>
      </tr>
      <tr>
         <td>68</td>
         <td rowspan=2>USER_SINT_P2R_8</td>
      </tr>
      <tr>
         <td>69</td>
      </tr>
      <tr>
         <td>70</td>
         <td rowspan=2>USER_SINT_P2R_9</td>
      </tr>
      <tr>
         <td>71</td>
      </tr>
      <tr>
         <td>72</td>
         <td rowspan=2>USER_SINT_P2R_10</td>
      </tr>
      <tr>
         <td>73</td>
      </tr>
      <tr>
         <td>74</td>
         <td rowspan=2>USER_SINT_P2R_11</td>
      </tr>
      <tr>
         <td>75</td>
      </tr>
      <tr>
         <td>76</td>
         <td rowspan=2>USER_SINT_P2R_12</td>
      </tr>
      <tr>
         <td>77</td>
      </tr>
      <tr>
         <td>78</td>
         <td rowspan=2>USER_SINT_P2R_13</td>
      </tr>
      <tr>
         <td>79</td>
      </tr>
      <tr>
         <td>80</td>
         <td rowspan=2>USER_SINT_P2R_14</td>
      </tr>
      <tr>
         <td>81</td>
      </tr>
      <tr>
         <td>82</td>
         <td rowspan=2>USER_SINT_P2R_15</td>
      </tr>
      <tr>
         <td>83</td>
      </tr>
      <tr>
         <td>84</td>
         <td rowspan=2>USER_SINT_P2R_16</td>
      </tr>
      <tr>
         <td>85</td>
      </tr>
      <tr>
         <td>86</td>
         <td rowspan=2>USER_SINT_P2R_17</td>
      </tr>
      <tr>
         <td>87</td>
      </tr>
      <tr>
         <td>88</td>
         <td rowspan=2>USER_SINT_P2R_18</td>
      </tr>
      <tr>
         <td>89</td>
      </tr>
      <tr>
         <td>90</td>
         <td rowspan=2>USER_SINT_P2R_19</td>
      </tr>
      <tr>
         <td>91</td>
      </tr>
      <tr>
         <td>92</td>
         <td rowspan=4>USER_REAL_P2R_0</td>
         <td rowspan=80>REAL</td>
         <td rowspan=80>Float</td>
      </tr>
      <tr>
         <td>93</td>
      </tr>
      <tr>
         <td>94</td>
      </tr>
      <tr>
         <td>95</td>
      </tr>
      <tr>
         <td>96</td>
         <td rowspan=4>USER_REAL_P2R_1</td>
      </tr>
      <tr>
         <td>97</td>
      </tr>
      <tr>
         <td>98</td>
      </tr>
      <tr>
         <td>99</td>
      </tr>
      <tr>
         <td>100</td>
         <td rowspan=4>USER_REAL_P2R_2</td>
      </tr>
      <tr>
         <td>101</td>
      </tr>
      <tr>
         <td>102</td>
      </tr>
      <tr>
         <td>103</td>
      </tr>
      <tr>
         <td>104</td>
         <td rowspan=4>USER_REAL_P2R_3</td>
      </tr>
      <tr>
         <td>105</td>
      </tr>
      <tr>
         <td>106</td>
      </tr>
      <tr>
         <td>107</td>
      </tr>
      <tr>
         <td>108</td>
         <td rowspan=4>USER_REAL_P2R_4</td>
      </tr>
      <tr>
         <td>109</td>
      </tr>
      <tr>
         <td>110</td>
      </tr>
      <tr>
         <td>111</td>
      </tr>
      <tr>
         <td>112</td>
         <td rowspan=4>USER_REAL_P2R_5</td>
      </tr>
      <tr>
         <td>113</td>
      </tr>
      <tr>
         <td>114</td>
      </tr>
      <tr>
         <td>115</td>
      </tr>
      <tr>
         <td>116</td>
         <td rowspan=4>USER_REAL_P2R_6</td>
      </tr>
      <tr>
         <td>117</td>
      </tr>
      <tr>
         <td>118</td>
      </tr>
      <tr>
         <td>119</td>
      </tr>
      <tr>
         <td>120</td>
         <td rowspan=4>USER_REAL_P2R_7</td>
      </tr>
      <tr>
         <td>121</td>
      </tr>
      <tr>
         <td>122</td>
      </tr>
      <tr>
         <td>123</td>
      </tr>
      <tr>
         <td>124</td>
         <td rowspan=4>USER_REAL_P2R_8</td>
      </tr>
      <tr>
         <td>125</td>
      </tr>
      <tr>
         <td>126</td>
      </tr>
      <tr>
         <td>127</td>
      </tr>
      <tr>
         <td>128</td>
         <td rowspan=4>USER_REAL_P2R_9</td>
      </tr>
      <tr>
         <td>129</td>
      </tr>
      <tr>
         <td>130</td>
      </tr>
      <tr>
         <td>131</td>
      </tr>
      <tr>
         <td>132</td>
         <td rowspan=4>USER_REAL_P2R_10</td>
      </tr>
      <tr>
         <td>133</td>
      </tr>
      <tr>
         <td>134</td>
      </tr>
      <tr>
         <td>135</td>
      </tr>
      <tr>
         <td>136</td>
         <td rowspan=4>USER_REAL_P2R_11</td>
      </tr>
      <tr>
         <td>137</td>
      </tr>
      <tr>
         <td>138</td>
      </tr>
      <tr>
         <td>139</td>
      </tr>
      <tr>
         <td>140</td>
         <td rowspan=4>USER_REAL_P2R_12</td>
      </tr>
      <tr>
         <td>141</td>
      </tr>
      <tr>
         <td>142</td>
      </tr>
      <tr>
         <td>143</td>
      </tr>
      <tr>
         <td>144</td>
         <td rowspan=4>USER_REAL_P2R_13</td>
      </tr>
      <tr>
         <td>145</td>
      </tr>
      <tr>
         <td>146</td>
      </tr>
      <tr>
         <td>147</td>
      </tr>
      <tr>
         <td>148</td>
         <td rowspan=4>USER_REAL_P2R_14</td>
      </tr>
      <tr>
         <td>149</td>
      </tr>
      <tr>
         <td>150</td>
      </tr>
      <tr>
         <td>151</td>
      </tr>
      <tr>
         <td>152</td>
         <td rowspan=4>USER_REAL_P2R_15</td>
      </tr>
      <tr>
         <td>153</td>
      </tr>
      <tr>
         <td>154</td>
      </tr>
      <tr>
         <td>155</td>
      </tr>
      <tr>
         <td>156</td>
         <td rowspan=4>USER_REAL_P2R_16</td>
      </tr>
      <tr>
         <td>157</td>
      </tr>
      <tr>
         <td>158</td>
      </tr>
      <tr>
         <td>159</td>
      </tr>
      <tr>
         <td>160</td>
         <td rowspan=4>USER_REAL_P2R_17</td>
      </tr>
      <tr>
         <td>161</td>
      </tr>
      <tr>
         <td>162</td>
      </tr>
      <tr>
         <td>163</td>
      </tr>
      <tr>
         <td>164</td>
         <td rowspan=4>USER_REAL_P2R_18</td>
      </tr>
      <tr>
         <td>165</td>
      </tr>
      <tr>
         <td>166</td>
      </tr>
      <tr>
         <td>167</td>
      </tr>
      <tr>
         <td>168</td>
         <td rowspan=4>USER_REAL_P2R_19</td>
      </tr>
      <tr>
         <td>169</td>
      </tr>
      <tr>
         <td>170</td>
      </tr>
      <tr>
         <td>171</td>
      </tr>
   </table>
</div>
