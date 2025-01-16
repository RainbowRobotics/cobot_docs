---
layout: doc
outline: deep
---

# Modbus TCP Server

<div class="warning custom-block">
    <p class="custom-block-title">WARNING</p>
    <ul>
        <li>
            This manual describes the Modbus server (slave controller).
        </li>
        <li>
            See Section 6 for a description of the Modbus client features.
        </li>
    </ul>
</div>

### 1. Overview

RB's Modbus TCP server (slave controller) is fixed at port number 502.<br>
The IP address changes depending on the network settings through the UI. (The initial IP address is 10.0.2.7.)

RB's Modbus server allows the connection of multiple clients and executes the following operation commands.

<div class="center-align last-child-align th-align td-align">
   <table>
      <tr>
         <th></th>
         <th>Function Code</th>
         <th>Function Name</th>
      </tr>
      <tr>
         <th rowspan="4">Bit Address</th>
         <td>2</td>
         <td>Read Discrete Inputs</td>
      </tr>
      <tr>
         <td>1</td>
         <td>Read Coils</td>
      </tr>
      <tr>
         <td>5</td>
         <td>Write Single Coil</td>
      </tr>
      <tr>
         <td>15</td>
         <td>Write Multiple Coils</td>
      </tr>
      <tr>
         <th rowspan="4">16-bit (Word) Address</th>
         <td>4</td>
         <td>Read Input Registers</td>
      </tr>
      <tr>
         <td>3</td>
         <td>Read Multiple Holding Registers</td>
      </tr>
      <tr>
         <td>6</td>
         <td>Write Single Holding Register</td>
      </tr>
      <tr>
         <td>16</td>
         <td>Write Multiple Holding Registers</td>
      </tr>
   </table>
</div>

### 2. Exception Code

The following error message is returned when accessing the wrong address, incorrect range of values, or invalid command sent.

<div class="center-align th-align td-align">
   <table>
      <tr>
         <th>Exception Code</th>
         <th>Exception Name</th>
      </tr>
      <tr>
         <td>1</td>
         <td>Illegal Function</td>
      </tr>
      <tr>
         <td>2</td>
         <td>Illegal Data Address</td>
      </tr>
      <tr>
         <td>3</td>
         <td>Illegal Value</td>
      </tr>
   </table>
</div>

### 3. Bit Address Map

<div class="center-align second-child-align th-align td-align">
   <table>
      <tr>
         <th colspan="4">Bit Address</th>
      </tr>
      <tr>
         <th>Address</th>
         <th>Function</th>
         <th>Read</th>
         <th>Write</th>
      </tr>
      <tr>
         <td>0</td>
         <td>Box digital input 0</td>
         <td>O</td>
         <td>X</td>
      </tr>
      <tr>
         <td>1</td>
         <td>Box digital input 1</td>
         <td>O</td>
         <td>X</td>
      </tr>
      <tr>
         <td>2</td>
         <td>Box digital input 2</td>
         <td>O</td>
         <td>X</td>
      </tr>
      <tr>
         <td>3</td>
         <td>Box digital input 3</td>
         <td>O</td>
         <td>X</td>
      </tr>
      <tr>
         <td>4</td>
         <td>Box digital input 4</td>
         <td>O</td>
         <td>X</td>
      </tr>
      <tr>
         <td>5</td>
         <td>Box digital input 5</td>
         <td>O</td>
         <td>X</td>
      </tr>
      <tr>
         <td>6</td>
         <td>Box digital input 6</td>
         <td>O</td>
         <td>X</td>
      </tr>
      <tr>
         <td>7</td>
         <td>Box digital input 7</td>
         <td>O</td>
         <td>X</td>
      </tr>
      <tr>
         <td>8</td>
         <td>Box digital input 8</td>
         <td>O</td>
         <td>X</td>
      </tr>
      <tr>
         <td>9</td>
         <td>Box digital input 9</td>
         <td>O</td>
         <td>X</td>
      </tr>
      <tr>
         <td>10</td>
         <td>Box digital input 10</td>
         <td>O</td>
         <td>X</td>
      </tr>
      <tr>
         <td>11</td>
         <td>Box digital input 11</td>
         <td>O</td>
         <td>X</td>
      </tr>
      <tr>
         <td>12</td>
         <td>Box digital input 12</td>
         <td>O</td>
         <td>X</td>
      </tr>
      <tr>
         <td>13</td>
         <td>Box digital input 13</td>
         <td>O</td>
         <td>X</td>
      </tr>
      <tr>
         <td>14</td>
         <td>Box digital input 14</td>
         <td>O</td>
         <td>X</td>
      </tr>
      <tr>
         <td>15</td>
         <td>Box digital input 15</td>
         <td>O</td>
         <td>X</td>
      </tr>
      <tr>
         <td>16</td>
         <td>Box digital output 0</td>
         <td>O</td>
         <td>O</td>
      </tr>
      <tr>
         <td>17</td>
         <td>Box digital output 1</td>
         <td>O</td>
         <td>O</td>
      </tr>
      <tr>
         <td>18</td>
         <td>Box digital output 2</td>
         <td>O</td>
         <td>O</td>
      </tr>
      <tr>
         <td>19</td>
         <td>Box digital output 3</td>
         <td>O</td>
         <td>O</td>
      </tr>
      <tr>
         <td>20</td>
         <td>Box digital output 4</td>
         <td>O</td>
         <td>O</td>
      </tr>
      <tr>
         <td>21</td>
         <td>Box digital output 5</td>
         <td>O</td>
         <td>O</td>
      </tr>
      <tr>
         <td>22</td>
         <td>Box digital output 6</td>
         <td>O</td>
         <td>O</td>
      </tr>
      <tr>
         <td>23</td>
         <td>Box digital output 7</td>
         <td>O</td>
         <td>O</td>
      </tr>
      <tr>
         <td>24</td>
         <td>Box digital output 8</td>
         <td>O</td>
         <td>O</td>
      </tr>
      <tr>
         <td>25</td>
         <td>Box digital output 9</td>
         <td>O</td>
         <td>O</td>
      </tr>
      <tr>
         <td>26</td>
         <td>Box digital output 10</td>
         <td>O</td>
         <td>O</td>
      </tr>
      <tr>
         <td>27</td>
         <td>Box digital output 11</td>
         <td>O</td>
         <td>O</td>
      </tr>
      <tr>
         <td>28</td>
         <td>Box digital output 12</td>
         <td>O</td>
         <td>O</td>
      </tr>
      <tr>
         <td>29</td>
         <td>Box digital output 13</td>
         <td>O</td>
         <td>O</td>
      </tr>
      <tr>
         <td>30</td>
         <td>Box digital output 14</td>
         <td>O</td>
         <td>O</td>
      </tr>
      <tr>
         <td>31</td>
         <td>Box digital output 15</td>
         <td>O</td>
         <td>O</td>
      </tr>
      <tr>
         <td>32</td>
         <td>Tool digital input 0</td>
         <td>O</td>
         <td>X</td>
      </tr>
      <tr>
         <td>33</td>
         <td>Tool digital input 1</td>
         <td>O</td>
         <td>X</td>
      </tr>
      <tr>
         <td>34</td>
         <td>Tool digital output 0</td>
         <td>O</td>
         <td>O</td>
      </tr>
      <tr>
         <td>35</td>
         <td>Tool digital output 1</td>
         <td>O</td>
         <td>O</td>
      </tr>
      <tr>
         <td>36</td>
         <td>Extend I/O digital input 0</td>
         <td>O</td>
         <td>X</td>
      </tr>
      <tr>
         <td>37</td>
         <td>Extend I/O digital input 1</td>
         <td>O</td>
         <td>X</td>
      </tr>
      <tr>
         <td>38</td>
         <td>Extend I/O digital input 2</td>
         <td>O</td>
         <td>X</td>
      </tr>
      <tr>
         <td>39</td>
         <td>Extend I/O digital input 3</td>
         <td>O</td>
         <td>X</td>
      </tr>
      <tr>
         <td>40</td>
         <td>Extend I/O digital input 4</td>
         <td>O</td>
         <td>X</td>
      </tr>
      <tr>
         <td>41</td>
         <td>Extend I/O digital input 5</td>
         <td>O</td>
         <td>X</td>
      </tr>
      <tr>
         <td>42</td>
         <td>Extend I/O digital input 6</td>
         <td>O</td>
         <td>X</td>
      </tr>
      <tr>
         <td>43</td>
         <td>Extend I/O digital input 7</td>
         <td>O</td>
         <td>X</td>
      </tr>
      <tr>
         <td>44</td>
         <td>Extend I/O digital input 8</td>
         <td>O</td>
         <td>X</td>
      </tr>
      <tr>
         <td>45</td>
         <td>Extend I/O digital input 9</td>
         <td>O</td>
         <td>X</td>
      </tr>
      <tr>
         <td>46</td>
         <td>Extend I/O digital input 10</td>
         <td>O</td>
         <td>X</td>
      </tr>
      <tr>
         <td>47</td>
         <td>Extend I/O digital input 11</td>
         <td>O</td>
         <td>X</td>
      </tr>
      <tr>
         <td>48</td>
         <td>Extend I/O digital input 12</td>
         <td>O</td>
         <td>X</td>
      </tr>
      <tr>
         <td>49</td>
         <td>Extend I/O digital input 13</td>
         <td>O</td>
         <td>X</td>
      </tr>
      <tr>
         <td>50</td>
         <td>Extend I/O digital input 14</td>
         <td>O</td>
         <td>X</td>
      </tr>
      <tr>
         <td>51</td>
         <td>Extend I/O digital input 15</td>
         <td>O</td>
         <td>X</td>
      </tr>
      <tr>
         <td>52</td>
         <td>Extend I/O digital output 0</td>
         <td>O</td>
         <td>O</td>
      </tr>
      <tr>
         <td>53</td>
         <td>Extend I/O digital output 1</td>
         <td>O</td>
         <td>O</td>
      </tr>
      <tr>
         <td>54</td>
         <td>Extend I/O digital output 2</td>
         <td>O</td>
         <td>O</td>
      </tr>
      <tr>
         <td>55</td>
         <td>Extend I/O digital output 3</td>
         <td>O</td>
         <td>O</td>
      </tr>
      <tr>
         <td>56</td>
         <td>Extend I/O digital output 4</td>
         <td>O</td>
         <td>O</td>
      </tr>
      <tr>
         <td>57</td>
         <td>Extend I/O digital output 5</td>
         <td>O</td>
         <td>O</td>
      </tr>
      <tr>
         <td>58</td>
         <td>Extend I/O digital output 6</td>
         <td>O</td>
         <td>O</td>
      </tr>
      <tr>
         <td>59</td>
         <td>Extend I/O digital output 7</td>
         <td>O</td>
         <td>O</td>
      </tr>
      <tr>
         <td>60</td>
         <td>Extend I/O digital output 8</td>
         <td>O</td>
         <td>O</td>
      </tr>
      <tr>
         <td>61</td>
         <td>Extend I/O digital output 9</td>
         <td>O</td>
         <td>O</td>
      </tr>
      <tr>
         <td>62</td>
         <td>Extend I/O digital output 10</td>
         <td>O</td>
         <td>O</td>
      </tr>
      <tr>
         <td>63</td>
         <td>Extend I/O digital output 11</td>
         <td>O</td>
         <td>O</td>
      </tr>
      <tr>
         <td>64</td>
         <td>Extend I/O digital output 12</td>
         <td>O</td>
         <td>O</td>
      </tr>
      <tr>
         <td>65</td>
         <td>Extend I/O digital output 13</td>
         <td>O</td>
         <td>O</td>
      </tr>
      <tr>
         <td>66</td>
         <td>Extend I/O digital output 14</td>
         <td>O</td>
         <td>O</td>
      </tr>
      <tr>
         <td>67</td>
         <td>Extend I/O digital output 15</td>
         <td>O</td>
         <td>O</td>
      </tr>
      <tr>
         <td>68</td>
         <td>Tool digital input 2</td>
         <td>O</td>
         <td>X</td>
      </tr>
      <tr>
         <td>69</td>
         <td>Tool digital input 3</td>
         <td>O</td>
         <td>X</td>
      </tr>
      <tr>
         <td>70</td>
         <td>Tool digital input 4</td>
         <td>O</td>
         <td>X</td>
      </tr>
      <tr>
         <td>71</td>
         <td>Tool digital input 5</td>
         <td>O</td>
         <td>X</td>
      </tr>
   </table>
</div>

### 4. Word(16 bit) Address Map

<div class="center-align second-child-align last-child-align th-align td-align">
   <table>
      <tr>
         <th colspan="5">Word Address</th>
      </tr>
      <tr>
         <th>Address</th>
         <th>Function</th>
         <th>Read</th>
         <th>Write</th>
         <th>Comments</th>
      </tr>
      <tr>
         <td>0</td>
         <td>Box digital input 0 ~ 15</td>
         <td>O</td>
         <td>X</td>
         <td>[BBBB BBBB BBBB BBBB]</td>
      </tr>
      <tr>
         <td>1</td>
         <td>Box digital output 0 ~ 15</td>
         <td>O</td>
         <td>O</td>
         <td>[BBBB BBBB BBBB BBBB]</td>
      </tr>
      <tr>
         <td>2</td>
         <td>Box analog input 0</td>
         <td>O</td>
         <td>X</td>
         <td>1mV unit</td>
      </tr>
      <tr>
         <td>3</td>
         <td>Box analog input 1</td>
         <td>O</td>
         <td>X</td>
         <td>1mV unit</td>
      </tr>
      <tr>
         <td>4</td>
         <td>Box analog input 2</td>
         <td>O</td>
         <td>X</td>
         <td>1mV unit</td>
      </tr>
      <tr>
         <td>5</td>
         <td>Box analog input 3</td>
         <td>O</td>
         <td>X</td>
         <td>1mV unit</td>
      </tr>
      <tr>
         <td>6</td>
         <td>Box analog output 0</td>
         <td>O</td>
         <td>O</td>
         <td>1mV unit</td>
      </tr>
      <tr>
         <td>7</td>
         <td>Box analog output 1</td>
         <td>O</td>
         <td>O</td>
         <td>1mV unit</td>
      </tr>
      <tr>
         <td>8</td>
         <td>Box analog output 2</td>
         <td>O</td>
         <td>O</td>
         <td>1mV unit</td>
      </tr>
      <tr>
         <td>9</td>
         <td>Box analog output 3</td>
         <td>O</td>
         <td>O</td>
         <td>1mV unit</td>
      </tr>
      <tr>
         <td>10</td>
         <td>Extend digital input 0 ~ 15</td>
         <td>O</td>
         <td>X</td>
         <td>[BBBB BBBB BBBB BBBB]</td>
      </tr>
      <tr>
         <td>11</td>
         <td>Extend digital output 0 ~ 15</td>
         <td>O</td>
         <td>O</td>
         <td>[BBBB BBBB BBBB BBBB]</td>
      </tr>
      <tr>
         <td>12</td>
         <td>Extend analog input 0</td>
         <td>O</td>
         <td>X</td>
         <td>1mV unit</td>
      </tr>
      <tr>
         <td>13</td>
         <td>Extend analog input 1</td>
         <td>O</td>
         <td>X</td>
         <td>1mV unit</td>
      </tr>
      <tr>
         <td>14</td>
         <td>Extend analog input 2</td>
         <td>O</td>
         <td>X</td>
         <td>1mV unit</td>
      </tr>
      <tr>
         <td>15</td>
         <td>Extend analog input 3</td>
         <td>O</td>
         <td>X</td>
         <td>1mV unit</td>
      </tr>
      <tr>
         <td>16</td>
         <td>Extend analog output 0</td>
         <td>O</td>
         <td>O</td>
         <td>1mV unit</td>
      </tr>
      <tr>
         <td>17</td>
         <td>Extend analog output 1</td>
         <td>O</td>
         <td>O</td>
         <td>1mV unit</td>
      </tr>
      <tr>
         <td>18</td>
         <td>Extend analog output 2</td>
         <td>O</td>
         <td>O</td>
         <td>1mV unit</td>
      </tr>
      <tr>
         <td>19</td>
         <td>Extend analog output 3</td>
         <td>O</td>
         <td>O</td>
         <td>1mV unit</td>
      </tr>
      <tr class="reserved">
         <td>20</td>
         <td>Reserved (Box I/O)</td>
         <td>X</td>
         <td>X</td>
         <td></td>
      </tr>
      <tr class="reserved">
         <td>21</td>
         <td>Reserved (Box I/O)</td>
         <td>X</td>
         <td>X</td>
         <td></td>
      </tr>
      <tr class="reserved">
         <td>22</td>
         <td>Reserved (Box I/O)</td>
         <td>X</td>
         <td>X</td>
         <td></td>
      </tr>
      <tr class="reserved">
         <td>23</td>
         <td>Reserved (Box I/O)</td>
         <td>X</td>
         <td>X</td>
         <td></td>
      </tr>
      <tr class="reserved">
         <td>24</td>
         <td>Reserved (Box I/O)</td>
         <td>X</td>
         <td>X</td>
         <td></td>
      </tr>
      <tr class="reserved">
         <td>25</td>
         <td>Reserved (Box I/O)</td>
         <td>X</td>
         <td>X</td>
         <td></td>
      </tr>
      <tr class="reserved">
         <td>26</td>
         <td>Reserved (Box I/O)</td>
         <td>X</td>
         <td>X</td>
         <td></td>
      </tr>
      <tr class="reserved">
         <td>27</td>
         <td>Reserved (Box I/O)</td>
         <td>X</td>
         <td>X</td>
         <td></td>
      </tr>
      <tr class="reserved">
         <td>28</td>
         <td>Reserved (Box I/O)</td>
         <td>X</td>
         <td>X</td>
         <td></td>
      </tr>
      <tr class="reserved">
         <td>29</td>
         <td>Reserved (Box I/O)</td>
         <td>X</td>
         <td>X</td>
         <td></td>
      </tr>
      <tr>
         <td>30</td>
         <td>Tool output voltage</td>
         <td>O</td>
         <td>O</td>
         <td>0, 12, 24</td>
      </tr>
      <tr>
         <td>31</td>
         <td>Tool digital input 0~1 (or 0~5)</td>
         <td>O</td>
         <td>X</td>
         <td>[TTEE EExx xxxx xxxx]</td>
      </tr>
      <tr>
         <td>32</td>
         <td>Tool digital output 0~1</td>
         <td>O</td>
         <td>O</td>
         <td>[TTxx xxxx xxxx xxxx]</td>
      </tr>
      <tr>
         <td>33</td>
         <td>Tool analog input 0</td>
         <td>O</td>
         <td>X</td>
         <td>1mV unit</td>
      </tr>
      <tr>
         <td>34</td>
         <td>Tool analog input 1</td>
         <td>O</td>
         <td>X</td>
         <td>1mV unit</td>
      </tr>
      <tr class="reserved">
         <td>35</td>
         <td>Reserved (Tool I/O)</td>
         <td>X</td>
         <td>X</td>
         <td></td>
      </tr>
      <tr class="reserved">
         <td>36</td>
         <td>Reserved (Tool I/O)</td>
         <td>X</td>
         <td>X</td>
         <td></td>
      </tr>
      <tr class="reserved">
         <td>37</td>
         <td>Reserved (Tool I/O)</td>
         <td>X</td>
         <td>X</td>
         <td></td>
      </tr>
      <tr class="reserved">
         <td>38</td>
         <td>Reserved (Tool I/O)</td>
         <td>X</td>
         <td>X</td>
         <td></td>
      </tr>
      <tr class="reserved">
         <td>39</td>
         <td>Reserved (Tool I/O)</td>
         <td>X</td>
         <td>X</td>
         <td></td>
      </tr>
      <tr class="reserved">
         <td>40</td>
         <td>Reserved (Tool I/O)</td>
         <td>X</td>
         <td>X</td>
         <td></td>
      </tr>
      <tr class="reserved">
         <td>41</td>
         <td>Reserved (Tool I/O)</td>
         <td>X</td>
         <td>X</td>
         <td></td>
      </tr>
      <tr class="reserved">
         <td>42</td>
         <td>Reserved (Tool I/O)</td>
         <td>X</td>
         <td>X</td>
         <td></td>
      </tr>
      <tr class="reserved">
         <td>43</td>
         <td>Reserved (Tool I/O)</td>
         <td>X</td>
         <td>X</td>
         <td></td>
      </tr>
      <tr class="reserved">
         <td>44</td>
         <td>Reserved (Tool I/O)</td>
         <td>X</td>
         <td>X</td>
         <td></td>
      </tr>
      <tr class="reserved">
         <td>45</td>
         <td>Reserved (Tool I/O)</td>
         <td>X</td>
         <td>X</td>
         <td></td>
      </tr>
      <tr class="reserved">
         <td>46</td>
         <td>Reserved (Tool I/O)</td>
         <td>X</td>
         <td>X</td>
         <td></td>
      </tr>
      <tr class="reserved">
         <td>47</td>
         <td>Reserved (Tool I/O)</td>
         <td>X</td>
         <td>X</td>
         <td></td>
      </tr>
      <tr class="reserved">
         <td>48</td>
         <td>Reserved (Tool I/O)</td>
         <td>X</td>
         <td>X</td>
         <td></td>
      </tr>
      <tr class="reserved">
         <td>49</td>
         <td>Reserved (Tool I/O)</td>
         <td>X</td>
         <td>X</td>
         <td></td>
      </tr>
      <tr>
         <td>50</td>
         <td>Is Robot Activated</td>
         <td>O</td>
         <td>X</td>
         <td>0 or 1</td>
      </tr>
      <tr>
         <td>51</td>
         <td>Is Real-mode</td>
         <td>O</td>
         <td>X</td>
         <td>0 or 1</td>
      </tr>
      <tr>
         <td>52</td>
         <td>Is Collision Detected</td>
         <td>O</td>
         <td>X</td>
         <td>0 or 1</td>
      </tr>
      <tr>
         <td>53</td>
         <td>Is Robot arm power engaged</td>
         <td>O</td>
         <td>X</td>
         <td>0 or 1</td>
      </tr>
      <tr>
         <td>54</td>
         <td>Is Direct teaching mode</td>
         <td>O</td>
         <td>X</td>
         <td>0 or 1</td>
      </tr>
      <tr>
         <td>55</td>
         <td>Is Robot moving</td>
         <td>O</td>
         <td>X</td>
         <td>0 or 1</td>
      </tr>
      <tr>
         <td>56</td>
         <td>Is Pause state</td>
         <td>O</td>
         <td>X</td>
         <td>0 or 1</td>
      </tr>
      <tr>
         <td>57</td>
         <td>Is Teaching pendant is connected</td>
         <td>O</td>
         <td>X</td>
         <td>0 or 1</td>
      </tr>
      <tr>
         <td>58</td>
         <td>Is Program Run</td>
         <td>O</td>
         <td>X</td>
         <td>0 or 1</td>
      </tr>
      <tr>
         <td>59</td>
         <td>Is No-Arc mode is on</td>
         <td>O</td>
         <td>X</td>
         <td>0 or 1</td>
      </tr>
      <tr>
         <td>60</td>
         <td>Is EMG button released</td>
         <td>O</td>
         <td>X</td>
         <td>0 or 1</td>
      </tr>
      <tr>
         <td>61</td>
         <td>Is First Program Run</td>
         <td>O</td>
         <td>X</td>
         <td>0 or 1</td>
      </tr>
      <tr>
         <td>62</td>
         <td>Is Last Program Load Done</td>
         <td>O</td>
         <td>X</td>
         <td>0 or 1</td>
      </tr>
      <tr>
         <td>63</td>
         <td>Control Box Amphere</td>
         <td>O</td>
         <td>X</td>
         <td>0.02A unit</td>
      </tr>
      <tr>
         <td>64</td>
         <td>Is Under Activation</td>
         <td>O</td>
         <td>X</td>
         <td>0 or 1</td>
      </tr>
      <tr>
         <td>65</td>
         <td>Collision On/Off State</td>
         <td>O</td>
         <td>X</td>
         <td>0 or 1</td>
      </tr>
      <tr>
         <td>66</td>
         <td>Collision Threshold</td>
         <td>O</td>
         <td>X</td>
         <td>% unit</td>
      </tr>
      <tr>
         <td>67</td>
         <td>TCP Px</td>
         <td>O</td>
         <td>X</td>
         <td>0.1mm unit / Signed</td>
      </tr>
      <tr>
         <td>68</td>
         <td>TCP Py</td>
         <td>O</td>
         <td>X</td>
         <td>0.1mm unit / Signed</td>
      </tr>
      <tr>
         <td>69</td>
         <td>TCP Pz</td>
         <td>O</td>
         <td>X</td>
         <td>0.1mm unit / Signed</td>
      </tr>
      <tr>
         <td>70</td>
         <td>TCP Rx</td>
         <td>O</td>
         <td>X</td>
         <td>0.02deg unit / Signed</td>
      </tr>
      <tr>
         <td>71</td>
         <td>TCP Ry</td>
         <td>O</td>
         <td>X</td>
         <td>0.02deg unit / Signed</td>
      </tr>
      <tr>
         <td>72</td>
         <td>TCP Rz</td>
         <td>O</td>
         <td>X</td>
         <td>0.02deg unit / Signed</td>
      </tr>
      <tr>
         <td>73</td>
         <td>Mass m</td>
         <td>O</td>
         <td>X</td>
         <td>0.1kg unit / Signed</td>
      </tr>
      <tr>
         <td>74</td>
         <td>Is System SOS</td>
         <td>O</td>
         <td>X</td>
         <td>Arm SOS Flag</td>
      </tr>
      <tr>
         <td>75</td>
         <td>Is Home Is Begin</td>
         <td>O</td>
         <td>X</td>
         <td>0 or 1</td>
      </tr>
      <tr>
         <td>76</td>
         <td>Control Box Heart Beat (0 or 1)</td>
         <td>O</td>
         <td>X</td>
         <td>0 or 1 (Every 1 second)</td>
      </tr>
      <tr>
         <td>77</td>
         <td>Speed Bar Value</td>
         <td>O</td>
         <td>X</td>
         <td>% unit</td>
      </tr>
      <tr>
         <td>78</td>
         <td>N/A</td>
         <td>O</td>
         <td>X</td>
         <td></td>
      </tr>
      <tr>
         <td>79</td>
         <td>N/A</td>
         <td>O</td>
         <td>X</td>
         <td></td>
      </tr>
      <tr>
         <td>80</td>
         <td>RB->MBUS Welder Weld Start Cmd</td>
         <td>O</td>
         <td>X</td>
         <td>0 or 1</td>
      </tr>
      <tr>
         <td>81</td>
         <td>RB->MBUS Welder Gas on off</td>
         <td>O</td>
         <td>X</td>
         <td>0 or 1</td>
      </tr>
      <tr>
         <td>82</td>
         <td>RB->MBUS Welder Inching</td>
         <td>O</td>
         <td>X</td>
         <td>0 or 1</td>
      </tr>
      <tr>
         <td>83</td>
         <td>RB->MBUS Welder Re Inching</td>
         <td>O</td>
         <td>X</td>
         <td>0 or 1</td>
      </tr>
      <tr>
         <td>84</td>
         <td>RB->MBUS Welder Touch Start Cmd</td>
         <td>O</td>
         <td>X</td>
         <td>0 or 1</td>
      </tr>
      <tr>
         <td>85</td>
         <td>RB->MBUS Welder Control parameter 1</td>
         <td>O</td>
         <td>X</td>
         <td>-</td>
      </tr>
      <tr>
         <td>86</td>
         <td>RB->MBUS Welder Control parameter 2</td>
         <td>O</td>
         <td>X</td>
         <td>-</td>
      </tr>
      <tr>
         <td>87</td>
         <td>RB->MBUS Welder Control parameter 3</td>
         <td>O</td>
         <td>X</td>
         <td>-</td>
      </tr>
      <tr>
         <td>88</td>
         <td>RB->MBUS Welder Control parameter 4</td>
         <td>O</td>
         <td>X</td>
         <td>-</td>
      </tr>
      <tr>
         <td>89</td>
         <td>RB->MBUS Welder Control parameter 5</td>
         <td>O</td>
         <td>X</td>
         <td>-</td>
      </tr>
      <tr class="reserved">
         <td>90</td>
         <td>Reserved (Future System)</td>
         <td>X</td>
         <td>X</td>
         <td></td>
      </tr>
      <tr class="reserved">
         <td>91</td>
         <td>Reserved (Future System)</td>
         <td>X</td>
         <td>X</td>
         <td></td>
      </tr>
      <tr class="reserved">
         <td>92</td>
         <td>Reserved (Future System)</td>
         <td>X</td>
         <td>X</td>
         <td></td>
      </tr>
      <tr class="reserved">
         <td>93</td>
         <td>Reserved (Future System)</td>
         <td>X</td>
         <td>X</td>
         <td></td>
      </tr>
      <tr class="reserved">
         <td>94</td>
         <td>Reserved (Future System)</td>
         <td>X</td>
         <td>X</td>
         <td></td>
      </tr>
      <tr class="reserved">
         <td>95</td>
         <td>Reserved (Future System)</td>
         <td>X</td>
         <td>X</td>
         <td></td>
      </tr>
      <tr class="reserved">
         <td>96</td>
         <td>Reserved (Future System)</td>
         <td>X</td>
         <td>X</td>
         <td></td>
      </tr>
      <tr class="reserved">
         <td>97</td>
         <td>Reserved (Future System)</td>
         <td>X</td>
         <td>X</td>
         <td></td>
      </tr>
      <tr class="reserved">
         <td>98</td>
         <td>Reserved (Future System)</td>
         <td>X</td>
         <td>X</td>
         <td></td>
      </tr>
      <tr class="reserved">
         <td>99</td>
         <td>Reserved (Future System)</td>
         <td>X</td>
         <td>X</td>
         <td></td>
      </tr>
      <tr>
         <td>100</td>
         <td>Command: Start Program Once</td>
         <td>O</td>
         <td>O</td>
         <td>Rising Edge is command</td>
      </tr>
      <tr>
         <td>101</td>
         <td>Command: Start Program Repeat</td>
         <td>O</td>
         <td>O</td>
         <td>Rising Edge is command</td>
      </tr>
      <tr>
         <td>102</td>
         <td>Command: Pause Program</td>
         <td>O</td>
         <td>O</td>
         <td>Rising Edge is command</td>
      </tr>
      <tr>
         <td>103</td>
         <td>Command: Stop Program</td>
         <td>O</td>
         <td>O</td>
         <td>Rising Edge is command</td>
      </tr>
      <tr>
         <td>104</td>
         <td>Command: Resume from pause</td>
         <td>O</td>
         <td>O</td>
         <td>Rising Edge is command</td>
      </tr>
      <tr>
         <td>105</td>
         <td>Command: Resume from collision</td>
         <td>O</td>
         <td>O</td>
         <td>Rising Edge is command</td>
      </tr>
      <tr>
         <td>106</td>
         <td>Command: Load default Program</td>
         <td>O</td>
         <td>O</td>
         <td>Rising Edge is command</td>
      </tr>
      <tr>
         <td>107</td>
         <td>Command: Robot Arm activation</td>
         <td>O</td>
         <td>O</td>
         <td>Rising Edge is command</td>
      </tr>
      <tr>
         <td>108</td>
         <td>Command: Change to Real-mode</td>
         <td>O</td>
         <td>O</td>
         <td>Rising Edge is command</td>
      </tr>
      <tr>
         <td>109</td>
         <td>Command: Power off the robot arm</td>
         <td>O</td>
         <td>O</td>
         <td>Rising Edge is command</td>
      </tr>
      <tr>
         <td>110</td>
         <td>Command: Load Program Table</td>
         <td>O</td>
         <td>O</td>
         <td>#</td>
      </tr>
      <tr>
         <td>111</td>
         <td>Command: Reset SOS Flag</td>
         <td>O</td>
         <td>O</td>
         <td></td>
      </tr>
      <tr>
         <td>112</td>
         <td>Command: Speed Bar Chage</td>
         <td>O</td>
         <td>O</td>
         <td>% unit</td>
      </tr>
      <tr>
         <td>113</td>
         <td>N/A</td>
         <td>O</td>
         <td>O</td>
         <td></td>
      </tr>
      <tr>
         <td>114</td>
         <td>N/A</td>
         <td>O</td>
         <td>O</td>
         <td></td>
      </tr>
      <tr>
         <td>115</td>
         <td>N/A</td>
         <td>O</td>
         <td>O</td>
         <td></td>
      </tr>
      <tr>
         <td>116</td>
         <td>N/A</td>
         <td>O</td>
         <td>O</td>
         <td></td>
      </tr>
      <tr>
         <td>117</td>
         <td>N/A</td>
         <td>O</td>
         <td>O</td>
         <td></td>
      </tr>
      <tr>
         <td>118</td>
         <td>MBUS Welder->RB Info Arc ON</td>
         <td>O</td>
         <td>O</td>
         <td>0 or 1</td>
      </tr>
      <tr>
         <td>119</td>
         <td>MBUS Welder->RB Welder ERROR</td>
         <td>O</td>
         <td>O</td>
         <td>0 or 1</td>
      </tr>
      <tr>
         <td>120</td>
         <td>MBUS Welder->RB Touch Sensed</td>
         <td>O</td>
         <td>O</td>
         <td>0 or 1</td>
      </tr>
      <tr>
         <td>121</td>
         <td>MBUS Welder->RB INFO parameter 1</td>
         <td>O</td>
         <td>O</td>
         <td>-</td>
      </tr>
      <tr>
         <td>122</td>
         <td>MBUS Welder->RB INFO parameter 2</td>
         <td>O</td>
         <td>O</td>
         <td>-</td>
      </tr>
      <tr>
         <td>123</td>
         <td>MBUS Welder->RB INFO parameter 3</td>
         <td>O</td>
         <td>O</td>
         <td>-</td>
      </tr>
      <tr>
         <td>124</td>
         <td>MBUS Welder->RB INFO parameter 4</td>
         <td>O</td>
         <td>O</td>
         <td>-</td>
      </tr>
      <tr>
         <td>125</td>
         <td>MBUS Welder->RB INFO parameter 5</td>
         <td>O</td>
         <td>O</td>
         <td>-</td>
      </tr>
      <tr>
         <td>126</td>
         <td>N/A</td>
         <td>O</td>
         <td>O</td>
         <td></td>
      </tr>
      <tr>
         <td>127</td>
         <td>N/A</td>
         <td>O</td>
         <td>O</td>
         <td></td>
      </tr>
      <tr style="background-color: orange">
         <td>128 ~ 255</td>
         <td style="text-align:center">User General Purpose Register<br>(User can read/write this area for program)<br>SD_MOD_USER_#</td>
         <td>O</td>
         <td>O</td>
         <td>User Define Area</td>
      </tr>
      <tr>
         <td>256</td>
         <td>Joint reference 0</td>
         <td>O</td>
         <td>X</td>
         <td>0.02deg unit / Signed</td>
      </tr>
      <tr>
         <td>257</td>
         <td>Joint reference 1</td>
         <td>O</td>
         <td>X</td>
         <td>0.02deg unit / Signed</td>
      </tr>
      <tr>
         <td>258</td>
         <td>Joint reference 2</td>
         <td>O</td>
         <td>X</td>
         <td>0.02deg unit / Signed</td>
      </tr>
      <tr>
         <td>259</td>
         <td>Joint reference 3</td>
         <td>O</td>
         <td>X</td>
         <td>0.02deg unit / Signed</td>
      </tr>
      <tr>
         <td>260</td>
         <td>Joint reference 4</td>
         <td>O</td>
         <td>X</td>
         <td>0.02deg unit / Signed</td>
      </tr>
      <tr>
         <td>261</td>
         <td>Joint reference 5</td>
         <td>O</td>
         <td>X</td>
         <td>0.02deg unit / Signed</td>
      </tr>
      <tr>
         <td>262</td>
         <td>Joint angle 0</td>
         <td>O</td>
         <td>X</td>
         <td>0.02deg unit / Signed</td>
      </tr>
      <tr>
         <td>263</td>
         <td>Joint angle 1</td>
         <td>O</td>
         <td>X</td>
         <td>0.02deg unit / Signed</td>
      </tr>
      <tr>
         <td>264</td>
         <td>Joint angle 2</td>
         <td>O</td>
         <td>X</td>
         <td>0.02deg unit / Signed</td>
      </tr>
      <tr>
         <td>265</td>
         <td>Joint angle 3</td>
         <td>O</td>
         <td>X</td>
         <td>0.02deg unit / Signed</td>
      </tr>
      <tr>
         <td>266</td>
         <td>Joint angle 4</td>
         <td>O</td>
         <td>X</td>
         <td>0.02deg unit / Signed</td>
      </tr>
      <tr>
         <td>267</td>
         <td>Joint angle 5</td>
         <td>O</td>
         <td>X</td>
         <td>0.02deg unit / Signed</td>
      </tr>
      <tr>
         <td>268</td>
         <td>Joint current 0</td>
         <td>O</td>
         <td>X</td>
         <td>10mA unit / Signed</td>
      </tr>
      <tr>
         <td>269</td>
         <td>Joint current 1</td>
         <td>O</td>
         <td>X</td>
         <td>10mA unit / Signed</td>
      </tr>
      <tr>
         <td>270</td>
         <td>Joint current 2</td>
         <td>O</td>
         <td>X</td>
         <td>10mA unit / Signed</td>
      </tr>
      <tr>
         <td>271</td>
         <td>Joint current 3</td>
         <td>O</td>
         <td>X</td>
         <td>10mA unit / Signed</td>
      </tr>
      <tr>
         <td>272</td>
         <td>Joint current 4</td>
         <td>O</td>
         <td>X</td>
         <td>10mA unit / Signed</td>
      </tr>
      <tr>
         <td>273</td>
         <td>Joint current 5</td>
         <td>O</td>
         <td>X</td>
         <td>10mA unit / Signed</td>
      </tr>
      <tr>
         <td>274</td>
         <td>Joint information 0</td>
         <td>O</td>
         <td>X</td>
         <td></td>
      </tr>
      <tr>
         <td>275</td>
         <td>Joint information 1</td>
         <td>O</td>
         <td>X</td>
         <td></td>
      </tr>
      <tr>
         <td>276</td>
         <td>Joint information 2</td>
         <td>O</td>
         <td>X</td>
         <td></td>
      </tr>
      <tr>
         <td>277</td>
         <td>Joint information 3</td>
         <td>O</td>
         <td>X</td>
         <td></td>
      </tr>
      <tr>
         <td>278</td>
         <td>Joint information 4</td>
         <td>O</td>
         <td>X</td>
         <td></td>
      </tr>
      <tr>
         <td>279</td>
         <td>Joint information 5</td>
         <td>O</td>
         <td>X</td>
         <td></td>
      </tr>
      <tr>
         <td>280</td>
         <td>Joint temperature 0</td>
         <td>O</td>
         <td>X</td>
         <td>celcius unit</td>
      </tr>
      <tr>
         <td>281</td>
         <td>Joint temperature 1</td>
         <td>O</td>
         <td>X</td>
         <td>celcius unit</td>
      </tr>
      <tr>
         <td>282</td>
         <td>Joint temperature 2</td>
         <td>O</td>
         <td>X</td>
         <td>celcius unit</td>
      </tr>
      <tr>
         <td>283</td>
         <td>Joint temperature 3</td>
         <td>O</td>
         <td>X</td>
         <td>celcius unit</td>
      </tr>
      <tr>
         <td>284</td>
         <td>Joint temperature 4</td>
         <td>O</td>
         <td>X</td>
         <td>celcius unit</td>
      </tr>
      <tr>
         <td>285</td>
         <td>Joint temperature 5</td>
         <td>O</td>
         <td>X</td>
         <td>celcius unit</td>
      </tr>
      <tr>
         <td>286</td>
         <td>Joint 0 Estimated Current</td>
         <td>O</td>
         <td>X</td>
         <td>10mA unit / Signed</td>
      </tr>
      <tr>
         <td>287</td>
         <td>Joint 1 Estimated Current</td>
         <td>O</td>
         <td>X</td>
         <td>10mA unit / Signed</td>
      </tr>
      <tr>
         <td>288</td>
         <td>Joint 2 Estimated Current</td>
         <td>O</td>
         <td>X</td>
         <td>10mA unit / Signed</td>
      </tr>
      <tr>
         <td>289</td>
         <td>Joint 3 Estimated Current</td>
         <td>O</td>
         <td>X</td>
         <td>10mA unit / Signed</td>
      </tr>
      <tr>
         <td>290</td>
         <td>Joint 4 Estimated Current</td>
         <td>O</td>
         <td>X</td>
         <td>10mA unit / Signed</td>
      </tr>
      <tr>
         <td>291</td>
         <td>Joint 5 Estimated Current</td>
         <td>O</td>
         <td>X</td>
         <td>10mA unit / Signed</td>
      </tr>
      <tr>
         <td>292</td>
         <td>Joint 0 Gap(Esti.-Meas.) Current</td>
         <td>O</td>
         <td>X</td>
         <td>10mA unit / Signed</td>
      </tr>
      <tr>
         <td>293</td>
         <td>Joint 1 Gap(Esti.-Meas.) Current</td>
         <td>O</td>
         <td>X</td>
         <td>10mA unit / Signed</td>
      </tr>
      <tr>
         <td>294</td>
         <td>Joint 2 Gap(Esti.-Meas.) Current</td>
         <td>O</td>
         <td>X</td>
         <td>10mA unit / Signed</td>
      </tr>
      <tr>
         <td>295</td>
         <td>Joint 3 Gap(Esti.-Meas.) Current</td>
         <td>O</td>
         <td>X</td>
         <td>10mA unit / Signed</td>
      </tr>
      <tr>
         <td>296</td>
         <td>Joint 4 Gap(Esti.-Meas.) Current</td>
         <td>O</td>
         <td>X</td>
         <td>10mA unit / Signed</td>
      </tr>
      <tr>
         <td>297</td>
         <td>Joint 5 Gap(Esti.-Meas.) Current</td>
         <td>O</td>
         <td>X</td>
         <td>10mA unit / Signed</td>
      </tr>
      <tr>
         <td>298</td>
         <td>Joint 0 Gap(Esti.-Meas.) Curr+LPF</td>
         <td>O</td>
         <td>X</td>
         <td>10mA unit / Signed</td>
      </tr>
      <tr>
         <td>299</td>
         <td>Joint 1 Gap(Esti.-Meas.) Curr+LPF</td>
         <td>O</td>
         <td>X</td>
         <td>10mA unit / Signed</td>
      </tr>
      <tr>
         <td>300</td>
         <td>Joint 2 Gap(Esti.-Meas.) Curr+LPF</td>
         <td>O</td>
         <td>X</td>
         <td>10mA unit / Signed</td>
      </tr>
      <tr>
         <td>301</td>
         <td>Joint 3 Gap(Esti.-Meas.) Curr+LPF</td>
         <td>O</td>
         <td>X</td>
         <td>10mA unit / Signed</td>
      </tr>
      <tr>
         <td>302</td>
         <td>Joint 4 Gap(Esti.-Meas.) Curr+LPF</td>
         <td>O</td>
         <td>X</td>
         <td>10mA unit / Signed</td>
      </tr>
      <tr>
         <td>303</td>
         <td>Joint 5 Gap(Esti.-Meas.) Curr+LPF</td>
         <td>O</td>
         <td>X</td>
         <td>10mA unit / Signed</td>
      </tr>
      <tr>
         <td>304</td>
         <td>External FT Sensor Data FX</td>
         <td>O</td>
         <td>X</td>
         <td>0.02 unit / Signed</td>
      </tr>
      <tr>
         <td>305</td>
         <td>External FT Sensor Data FY</td>
         <td>O</td>
         <td>X</td>
         <td>0.02 unit / Signed</td>
      </tr>
      <tr>
         <td>306</td>
         <td>External FT Sensor Data FZ</td>
         <td>O</td>
         <td>X</td>
         <td>0.02 unit / Signed</td>
      </tr>
      <tr>
         <td>307</td>
         <td>External FT Sensor Data MX</td>
         <td>O</td>
         <td>X</td>
         <td>0.02 unit / Signed</td>
      </tr>
      <tr>
         <td>308</td>
         <td>External FT Sensor Data MY</td>
         <td>O</td>
         <td>X</td>
         <td>0.02 unit / Signed</td>
      </tr>
      <tr>
         <td>309</td>
         <td>External FT Sensor Data MZ</td>
         <td>O</td>
         <td>X</td>
         <td>0.02 unit / Signed</td>
      </tr>
      <tr>
         <td>310</td>
         <td>External Axis Reference 0</td>
         <td>O</td>
         <td>X</td>
         <td>0.5 unit / Signed</td>
      </tr>
      <tr>
         <td>311</td>
         <td>External Axis Reference 1</td>
         <td>O</td>
         <td>X</td>
         <td>0.5 unit / Signed</td>
      </tr>
      <tr>
         <td>312</td>
         <td>External Axis Reference 2</td>
         <td>O</td>
         <td>X</td>
         <td>0.5 unit / Signed</td>
      </tr>
      <tr>
         <td>313</td>
         <td>External Axis Reference 3</td>
         <td>O</td>
         <td>X</td>
         <td>0.5 unit / Signed</td>
      </tr>
      <tr>
         <td>314</td>
         <td>External Axis Reference 4</td>
         <td>O</td>
         <td>X</td>
         <td>0.5 unit / Signed</td>
      </tr>
      <tr>
         <td>315</td>
         <td>External Axis Reference 5</td>
         <td>O</td>
         <td>X</td>
         <td>0.5 unit / Signed</td>
      </tr>
      <tr>
         <td>316</td>
         <td>External Axis Encoder 0</td>
         <td>O</td>
         <td>X</td>
         <td>0.5 unit / Signed</td>
      </tr>
      <tr>
         <td>317</td>
         <td>External Axis Encoder 1</td>
         <td>O</td>
         <td>X</td>
         <td>0.5 unit / Signed</td>
      </tr>
      <tr>
         <td>318</td>
         <td>External Axis Encoder 2</td>
         <td>O</td>
         <td>X</td>
         <td>0.5 unit / Signed</td>
      </tr>
      <tr>
         <td>319</td>
         <td>External Axis Encoder 3</td>
         <td>O</td>
         <td>X</td>
         <td>0.5 unit / Signed</td>
      </tr>
      <tr>
         <td>320</td>
         <td>External Axis Encoder 4</td>
         <td>O</td>
         <td>X</td>
         <td>0.5 unit / Signed</td>
      </tr>
      <tr>
         <td>321</td>
         <td>External Axis Encoder 5</td>
         <td>O</td>
         <td>X</td>
         <td>0.5 unit / Signed</td>
      </tr>
      <tr>
         <td>322</td>
         <td>Reserved (Future System)</td>
         <td>X</td>
         <td>X</td>
         <td></td>
      </tr>
      <tr>
         <td>323</td>
         <td>Reserved (Future System)</td>
         <td>X</td>
         <td>X</td>
         <td></td>
      </tr>
      <tr>
         <td>324</td>
         <td>Reserved (Future System)</td>
         <td>X</td>
         <td>X</td>
         <td></td>
      </tr>
      <tr>
         <td>325</td>
         <td>Reserved (Future System)</td>
         <td>X</td>
         <td>X</td>
         <td></td>
      </tr>
      <tr>
         <td>326</td>
         <td>Reserved (Future System)</td>
         <td>X</td>
         <td>X</td>
         <td></td>
      </tr>
      <tr>
         <td>327</td>
         <td>Reserved (Future System)</td>
         <td>X</td>
         <td>X</td>
         <td></td>
      </tr>
      <tr>
         <td>328</td>
         <td>Reserved (Future System)</td>
         <td>X</td>
         <td>X</td>
         <td></td>
      </tr>
      <tr>
         <td>329</td>
         <td>Reserved (Future System)</td>
         <td>X</td>
         <td>X</td>
         <td></td>
      </tr>
      <tr>
         <td>330</td>
         <td>TCP reference X</td>
         <td>O</td>
         <td>X</td>
         <td>0.1mm unit / Signed</td>
      </tr>
      <tr>
         <td>331</td>
         <td>TCP reference Y</td>
         <td>O</td>
         <td>X</td>
         <td>0.1mm unit / Signed</td>
      </tr>
      <tr>
         <td>332</td>
         <td>TCP reference Z</td>
         <td>O</td>
         <td>X</td>
         <td>0.1mm unit / Signed</td>
      </tr>
      <tr>
         <td>333</td>
         <td>TCP reference RX</td>
         <td>O</td>
         <td>X</td>
         <td>0.02deg unit / Signed</td>
      </tr>
      <tr>
         <td>334</td>
         <td>TCP reference RY</td>
         <td>O</td>
         <td>X</td>
         <td>0.02deg unit / Signed</td>
      </tr>
      <tr>
         <td>335</td>
         <td>TCP reference RZ</td>
         <td>O</td>
         <td>X</td>
         <td>0.02deg unit / Signed</td>
      </tr>
      <tr>
         <td>336</td>
         <td>TCP position X</td>
         <td>O</td>
         <td>X</td>
         <td>0.1mm unit / Signed</td>
      </tr>
      <tr>
         <td>337</td>
         <td>TCP position Y</td>
         <td>O</td>
         <td>X</td>
         <td>0.1mm unit / Signed</td>
      </tr>
      <tr>
         <td>338</td>
         <td>TCP position Z</td>
         <td>O</td>
         <td>X</td>
         <td>0.1mm unit / Signed</td>
      </tr>
      <tr>
         <td>339</td>
         <td>TCP position RX</td>
         <td>O</td>
         <td>X</td>
         <td>0.02deg unit / Signed</td>
      </tr>
      <tr>
         <td>340</td>
         <td>TCP position RY</td>
         <td>O</td>
         <td>X</td>
         <td>0.02deg unit / Signed</td>
      </tr>
      <tr>
         <td>341</td>
         <td>TCP position RZ</td>
         <td>O</td>
         <td>X</td>
         <td>0.02deg unit / Signed</td>
      </tr>
      <tr>
         <td>342</td>
         <td>TCP Speed X</td>
         <td>O</td>
         <td>X</td>
         <td>0.5 unit / Signed</td>
      </tr>
      <tr>
         <td>343</td>
         <td>TCP Speed Y</td>
         <td>O</td>
         <td>X</td>
         <td>0.5 unit / Signed</td>
      </tr>
      <tr>
         <td>344</td>
         <td>TCP Speed Z</td>
         <td>O</td>
         <td>X</td>
         <td>0.5 unit / Signed</td>
      </tr>
      <tr>
         <td>345</td>
         <td>TCP Speed Norm</td>
         <td>O</td>
         <td>X</td>
         <td>0.5 unit / Signed</td>
      </tr>
      <tr>
         <td>346</td>
         <td>Reserved (Future System)</td>
         <td>X</td>
         <td>X</td>
         <td></td>
      </tr>
      <tr>
         <td>347</td>
         <td>Reserved (Future System)</td>
         <td>X</td>
         <td>X</td>
         <td></td>
      </tr>
      <tr>
         <td>348</td>
         <td>Reserved (Future System)</td>
         <td>X</td>
         <td>X</td>
         <td></td>
      </tr>
      <tr>
         <td>349</td>
         <td>Reserved (Future System)</td>
         <td>X</td>
         <td>X</td>
         <td></td>
      </tr>
      <tr>
         <td>350</td>
         <td>Reserved (Future System)</td>
         <td>X</td>
         <td>X</td>
         <td></td>
      </tr>
      <tr>
         <td>351</td>
         <td>Reserved (Future System)</td>
         <td>X</td>
         <td>X</td>
         <td></td>
      </tr>
      <tr>
         <td>352</td>
         <td>Reserved (Future System)</td>
         <td>X</td>
         <td>X</td>
         <td></td>
      </tr>
      <tr>
         <td>353</td>
         <td>Reserved (Future System)</td>
         <td>X</td>
         <td>X</td>
         <td></td>
      </tr>
      <tr>
         <td>354</td>
         <td>Reserved (Future System)</td>
         <td>X</td>
         <td>X</td>
         <td></td>
      </tr>
      <tr>
         <td>355</td>
         <td>Reserved (Future System)</td>
         <td>X</td>
         <td>X</td>
         <td></td>
      </tr>
      <tr>
         <td>356</td>
         <td>Reserved (Future System)</td>
         <td>X</td>
         <td>X</td>
         <td></td>
      </tr>
      <tr>
         <td>357</td>
         <td>Reserved (Future System)</td>
         <td>X</td>
         <td>X</td>
         <td></td>
      </tr>
      <tr>
         <td>358</td>
         <td>Reserved (Future System)</td>
         <td>X</td>
         <td>X</td>
         <td></td>
      </tr>
      <tr>
         <td>359</td>
         <td>Reserved (Future System)</td>
         <td>X</td>
         <td>X</td>
         <td></td>
      </tr>
      <tr>
         <td>360</td>
         <td>Reserved (Future System)</td>
         <td>X</td>
         <td>X</td>
         <td></td>
      </tr>
      <tr>
         <td>361</td>
         <td>Reserved (Future System)</td>
         <td>X</td>
         <td>X</td>
         <td></td>
      </tr>
      <tr>
         <td>362</td>
         <td>Reserved (Future System)</td>
         <td>X</td>
         <td>X</td>
         <td></td>
      </tr>
      <tr>
         <td>363</td>
         <td>Reserved (Future System)</td>
         <td>X</td>
         <td>X</td>
         <td></td>
      </tr>
      <tr>
         <td>364</td>
         <td>Reserved (Future System)</td>
         <td>X</td>
         <td>X</td>
         <td></td>
      </tr>
      <tr>
         <td>365</td>
         <td>Reserved (Future System)</td>
         <td>X</td>
         <td>X</td>
         <td></td>
      </tr>
      <tr>
         <td>366</td>
         <td>Reserved (Future System)</td>
         <td>X</td>
         <td>X</td>
         <td></td>
      </tr>
      <tr>
         <td>367</td>
         <td>Reserved (Future System)</td>
         <td>X</td>
         <td>X</td>
         <td></td>
      </tr>
      <tr>
         <td>368</td>
         <td>Reserved (Future System)</td>
         <td>X</td>
         <td>X</td>
         <td></td>
      </tr>
      <tr>
         <td>369</td>
         <td>Reserved (Future System)</td>
         <td>X</td>
         <td>X</td>
         <td></td>
      </tr>
      <tr>
         <td>370</td>
         <td>Reserved (Future System)</td>
         <td>X</td>
         <td>X</td>
         <td></td>
      </tr>
      <tr>
         <td>371</td>
         <td>Reserved (Future System)</td>
         <td>X</td>
         <td>X</td>
         <td></td>
      </tr>
      <tr>
         <td>372</td>
         <td>Reserved (Future System)</td>
         <td>X</td>
         <td>X</td>
         <td></td>
      </tr>
      <tr>
         <td>373</td>
         <td>Reserved (Future System)</td>
         <td>X</td>
         <td>X</td>
         <td></td>
      </tr>
      <tr>
         <td>374</td>
         <td>Reserved (Future System)</td>
         <td>X</td>
         <td>X</td>
         <td></td>
      </tr>
      <tr>
         <td>375</td>
         <td>Motion Generator: Parameter 0</td>
         <td>O</td>
         <td>O</td>
         <td></td>
      </tr>
      <tr>
         <td>376</td>
         <td>Motion Generator: Parameter 1</td>
         <td>O</td>
         <td>O</td>
         <td></td>
      </tr>
      <tr>
         <td>377</td>
         <td>Motion Generator: Parameter 2</td>
         <td>O</td>
         <td>O</td>
         <td></td>
      </tr>
      <tr>
         <td>378</td>
         <td>Motion Generator: Parameter 3</td>
         <td>O</td>
         <td>O</td>
         <td></td>
      </tr>
      <tr>
         <td>379</td>
         <td>Motion Generator: Parameter 4</td>
         <td>O</td>
         <td>O</td>
         <td></td>
      </tr>
      <tr>
         <td>380</td>
         <td>Motion Generator: Parameter 5</td>
         <td>O</td>
         <td>O</td>
         <td></td>
      </tr>
      <tr>
         <td>381</td>
         <td>Motion Generator: Parameter Speed</td>
         <td>O</td>
         <td>O</td>
         <td></td>
      </tr>
      <tr>
         <td>382</td>
         <td>Motion Generator: Parameter Accel.</td>
         <td>O</td>
         <td>O</td>
         <td></td>
      </tr>
      <tr>
         <td>383</td>
         <td>Motion Generator: -</td>
         <td>O</td>
         <td>O</td>
         <td></td>
      </tr>
      <tr>
         <td>384</td>
         <td>Motion Generator: -</td>
         <td>O</td>
         <td>O</td>
         <td></td>
      </tr>
      <tr>
         <td>385</td>
         <td>Motion Generator: -</td>
         <td>O</td>
         <td>O</td>
         <td></td>
      </tr>
      <tr>
         <td>386</td>
         <td>Motion Generator: -</td>
         <td>O</td>
         <td>O</td>
         <td></td>
      </tr>
      <tr>
         <td>387</td>
         <td>Motion Generator: -</td>
         <td>O</td>
         <td>O</td>
         <td></td>
      </tr>
      <tr>
         <td>388</td>
         <td>Motion Generator: Motion Command</td>
         <td>O</td>
         <td>O</td>
         <td></td>
      </tr>
      <tr>
         <td>389</td>
         <td>Motion Generator: Error Report</td>
         <td>O</td>
         <td>O</td>
         <td></td>
      </tr>
      <tr>
         <td colspan=5 style="text-align:center">EOT</td>
      </tr>
   </table>
</div>

<style scoped>
.last-child-align td:last-child {
   text-align: left;
}
.second-child-align td:nth-child(2) {
   text-align: left;
}
</style>
