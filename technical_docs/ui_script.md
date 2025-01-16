---
layout: doc
outline: deep
---

# RB UI Script v6.10

### 1. Variable Types and Declaration

The UI Script of Rainbow Robotics supports the following data types.

- **var** : Stores a single number.
- **arr** : Stores the multiple number array. (up to 20 lengths)
- **str** : Stores string element.
- **point, pnt** : Stores posture (x, y, z, Rx, Ry, Rz) information.
- **joint, jnt** : Stores joint angles (J0, J1, J2, J3, J4, J5).
- **vec** : A vector that manages numbers.<br>
  (Please refer to **Chapter 10** separately for number / string vectors.)

An example of a variable declaration is shown below.

#### 1.1 var

Example :

```
var my_val          # Assign variable without initial value (initial value is 0)
var my_val = 1      # Assign variable with initial value
```

#### 1.2 arr

Example :

```
arr my_arr              # Assign array without initial value (initial value is {0, 0, … , 0})
arr my_arr = {1, 2, 3}  # Assign array with initial value
```

#### 1.3 str

Example :

```
str my_str              # Assign string without initial value (initial value is “”)
str my_str = “Hello”    # Assign string with initial value
```

#### 1.4 point, pnt

Example :

```
point my_point          # Assign point without initial value (initial value is {0, 0, 0, 0, 0, 0})
point my_point = {100, 200, 300, 90, 0, 90}   # Assign point with initial value
pnt my_point = {50, 100, 100, 90, 0, 0}       # Assign point with initial value
```

#### 1.5 joint, jnt

Example :

```
joint my_joint          # Assign joint without initial value (initial value is {0, 0, 0, 0, 0, 0})
joint my_joint = {0, 0, 0, 90, 0, 0}    # Assign joint with initial value
jnt my_joint = {30,0,0,90,0,0}          # Assign joint with initial value
```

#### 1.6 Abbreviations

Abbreviations used in this document are as follows.

<div class="center-align th-align">
   <table>
      <tr>
         <th>Abbreviation</th>
         <th></th>
      </tr>
      <tr>
         <th>v</th>
         <td>variable type (var)</td>
      </tr>
      <tr>
         <th>a</th>
         <td>Array type (arr)</td>
      </tr>
      <tr>
         <th>s</th>
         <td>String type (str)</td>
      </tr>
      <tr>
         <th>P</th>
         <td>Point type (pnt)</td>
      </tr>
      <tr>
         <th>J</th>
         <td>Joint type (jnt)</td>
      </tr>
   </table>
</div>

#### 1.7 Point type and Joint type

Point type and Joint type variables can be used as temporary variables without names.

- Temporary Point type : pnt[x, y, z, Rx, Ry, Rz]
- Temporary Joint type : jnt[J0, J1, J2, J3, J4, J5]

These temporary variables can be used immediately without a separate name declaration, and can be
utilized as follows.

- **Method 1** : This is an example of declaring a separate variable and using it in a function.
- **Method 2** : This is an example of using the temporary variable as a function call argument without declaring a variable separately.

Method 1 :

```
jnt my_angle = {0,0,90,0,90,0}  # Assign joint type with name ‘my_angle’.
move_j(my_angle, 60, 80)        # Use ‘my_angle’ as an input argument of function ‘move_j’.

pnt my_point = {100, 200, 300, 90, 0, 0}  # Assign point type with name ‘my_point’.
move_l(my_point, 20, 5)                   # Use ‘my_point’ as an input argument of function ‘move_l’
```

Method 2 :

```
move_j(jnt[0,0,90,0,90,0], 60, 80)       # temporary joint type is used as an input argument of function ‘move_j’.
move_l(pnt[100,200,300,90,0,0], 60, 80)  # temporary point type is used as an input argument of function ‘move_l’.
```

The above examples are examples using move_j(J, v, v) and move_l(P, v, v) functions.<br>
For more information about these functions, see Chapter 7. Motion Functions.

#### 1.8 UI Script examples

Rainbow UI Script can be used as follows

Example 1. Simple math operation

```
var a = 1                # Assign variable, name is ‘a’ and init-value 1
var b = 2                # Assign variable, name is ‘b’ and init-value 2
var c                    # Assign variable, name is ‘c’
c = a *b + 5 + sqrt(4)   # ‘c’ stores the result value of 9
```

Example 2. Basic movement

```
joint target_angle = {0, 0, 90, 0, 90, 0}   # Assign joint type, name is ‘target_angle’

move_j(target_angle, 60, 80)                # move arm with ‘move_j’, speed/acceleration = 60/80
target_angle[0] = target_angle[0] + 45      # Add 45 degrees to the axis-0 value from the previous value.
move_j(target_angle, 60, 80)                # move arm with ‘move_j’, speed/acceleration = 60/80
target_angle[0] = target_angle[0] + 45      # Add 45 degrees to the axis-0 value from the previous value.
move_j(target_angle, 60, 80)                # move arm with ‘move_j’, speed/acceleration = 60/80

move_j(jnt[0, 0, 0, 0, 0, 0], 60, 80)       # move arm with ‘move_j’ to zero-home posture
```

Example 3. String function

```
str my_text = “123.78”                  # Assign string with name ‘my_text’

var result_1 = to_num_int(my_text)      # 123 is stored in variable ‘result_1’
var result_2 = to_num(my_text)          # 123.78 is stored in variable ‘result_2’
var result_3 = round( to_num(my_text) ) # 124 is stored in variable ‘result_3’

str my_text2 = “abc”                    # Assign string with name ‘my_text2’
str my_text3 = my_text + my_text2       # “123.78abc” is stored in string ‘my_text3’
```

#### 1.9 Operators

The following comparison operators and logical operators can be used.

##### 1.9.1 Comparison operators

1. A >= B
   - 1 (True) if the left side is greater than or equal to the right side, otherwise 0 (False)
2. A <= B
   - 1 (True) if the right side is greater than or equal to the left side, otherwise 0 (False)
3. A == B
   - 1 (True) if the left and right sides are equal, otherwise 0 (False)
4. A != B
   -1 (True) if the left and right sides are not-equal, otherwise 0 (False)

##### 1.9.2 Logical operators

A && B<br>
A and B<br>
A AND B<br>
A And B

- 1 (True) only if both the left and right sides are True, otherwise 0 (False)

A || B<br>
A or B<br>
A OR B<br>
A Or B

- 1 (True) if either of the left and right sides is True, 0 (False) if both values are False

##### 1.9.3

TRUE and FALSE used in comparison/logical operation are matched with the following values.

True = TRUE = true = 1<br>
False = FALSE = false = 0

Therefore, the following two examples become the **same expression**.

Example 1.

```
if (SD_SOCK_IS_OPEN_0 == True){
    // something to do
}
```

Example 2.

```
if (SD_SOCK_IS_OPEN_0 == 1){
    // something to do
}
```

#### 1.10 Units

The Script grammar of Rainbow Robotics uses the following units.

- Angle : Degree
- Position : mm (0.001m)

The following rotation notation is used in the script grammar and notation of Rainbow Robotics.

- Z-Y’-X’’ Euler angle (Degree)

![missing](/technical_docs/common/ui_script/1-10.png)

### 2. Math Functions

<br>

#### 2.1 v = cos(v)

Trigonometric function Cosine operation function.

- Input :<br>
  Single variable type or constant number<br>
  v: variable type or number (Unit: radian)<br>

- Return :<br>
  v : return single number

Example :

```
var my_result = cos(45*D2R)     # my_result = 0.7071
```

#### 2.2 v = cosd(v)

Trigonometric function Cosine operation function.

- Input :<br>
  Single variable type or constant number<br>
  v: variable type or number **(Unit: degree)**

- Return :<br>
  v : return single number

Example :

```
var my_result = cosd(45)    # my_result= 0.7071
```

#### 2.3 v = sin(v)

Trigonometric function Sine operation function.

- Input :<br>
  Single variable type or constant number<br>
  v: variable type or number **(Unit: radian)**

- Return :<br>
  v : return single number

Example :

```
var my_result = sin(30*D2R)   # my_result= 0.5
```

#### 2.4 v = sind(v)

Trigonometric function Sine operation function.

- Input :<br>
  Single variable type or constant number<br>
  v: variable type or number **(Unit: degree)**

- Return :<br>
  v : return single number

Example :

```
var my_result = sind(30)    # my_result= 0.5
```

#### 2.5 v = tan(v)

Trigonometric function Tangent operation function.

- Input :<br>
  Single variable type or constant number<br>
  v: variable type or number **(Unit: radian)**

- Return :<br>
  v : return single number

Example :

```
var my_result = tan(45*D2R)   # my_result=1
```

#### 2.6 v = tand(v)

Trigonometric function Tangent operation function.

- Input :<br>
  Single variable type or constant number<br>
  v: variable type or number **(Unit: degree)**

- Return :<br>
  v : return single number

Example :

```
var my_result = tand(45)    # my_result=1
```

#### 2.7 v = acos(v)

Trigonometric function Inverse-Cosine operation function.

- Input :<br>
  Single variable type or constant number<br>
  v: variable type or number

- Return :<br>
  v : return single number **(Unit: radian)**

Example :

```
var my_result = acos(-1)    # my_result= PI (3.141592)
```

#### 2.8 v = acosd(v)

Trigonometric function Inverse-Cosine operation function.

- Input :<br>
  Single variable type or constant number<br>
  v: variable type or number

- Return :<br>
  v : return single number **(Unit: degree)**

Example :

```
var my_result = acosd(-1)    # my_result=180
```

#### 2.9 v = asin(v)

Trigonometric function Inverse-Sine operation function.

- Input :<br>
  Single variable type or constant number<br>
  v: variable type or number

- Return :<br>
  v : return single number **(Unit: radian)**

Example :

```
var my_result = asin(1)    # my_result= 1.5708
```

#### 2.10 v = asind(v)

Trigonometric function Inverse-Sine operation function.

- Input :<br>
  Single variable type or constant number<br>
  v: variable type or number

- Return :<br>
  v : return single number **(Unit: degree)**

Example :

```
var my_result = asind(1)    # my_result= 90
```

#### 2.11 v = atan(v)

Trigonometric function Inverse-Tangent operation function.

- Input :<br>
  Single variable type or constant number<br>
  v: variable type or number

- Return :<br>
  v : return single number **(Unit: radian)**

Example :

```
var my_result = atan(1)    # my_result= 0.7854
```

#### 2.12 v = atand(v)

Trigonometric function Inverse-Tangent operation function.

- Input :<br>
  Single variable type or constant number<br>
  v: variable type or number

- Return :<br>
  v : return single number **(Unit: degree)**

Example :

```
var my_result = atand(1)    # my_result= 45
```

#### 2.13 v = atan2(v, v)

Inverse trigonometric function that calculates the quadrant arc tangent.

- Input :<br>
  Two variable types or constant numbers<br>
  v: y direction variable type or number<br>
  v: x direction variable type or number

- Return :<br>
  v : return single number **(Unit: radian)**

Example :

```
var my_result = atan2(1, 1)    # my_result= 0.7854
```

#### 2.14 v = atan2d(v, v)

Inverse trigonometric function that calculates the quadrant arc tangent.

- Input :<br>
  Two variable types or constant numbers<br>
  v: y direction variable type or number<br>
  v: x direction variable type or number

- Return :<br>
  v : return single number **(Unit: degree)**

Example :

```
var my_result = atan2d(1, 1)    # my_result= 45
```

#### 2.15 PI

It is a constant representing the circumference (π).

Example :

```
var my_val = PI    # my_val = 3.142
```

#### 2.16 R2D

Operation constant (180/PI) to convert from radian to degree.

Example :

```
var my_val= PI*R2D    # my_val=180
```

#### 2.17 D2R

Operation constant (PI/180) for converting degree to radian.

Example :

```
var my_val= 180*D2R    # my_val=3.142
```

#### 2.18 v = abs(v)

Calculate absolute value of input argument

- Input :<br>
  Single variable type or constant number<br>
  v: variable type or number

- Return :<br>
  v : return single number

Example :

```
var my_result = abs(-5.2)    # my_result= 5.2
```

#### 2.19 v = sqrt(v)

Square root operation function.

- Input :<br>
  Single variable type or constant number<br>
  v: variable type or number

- Return :<br>
  v : return single number

Example :

```
var my_result = sqrt(4)    # my_result= 2
```

#### 2.20 v = cell(v)

Rounding-up operation function.

- Input :<br>
  Single variable type or constant number<br>
  v: variable type or number

- Return :<br>
  v : return single number

Example :

```
var my_result = cell(4.2)    # my_result= 5
```

#### 2.21 v = floor(v)

Rounding-down operation function.

- Input :<br>
  Single variable type or constant number<br>
  v: variable type or number

- Return :<br>
  v : return single number

Example :

```
var my_result = floor(4.8)    # my_result= 4
```

#### 2.22 v = round(v)

Rounding operation function.

- Input :<br>
  Single variable type or constant number<br>
  v: variable type or number

- Return :<br>
  v : return single number

Example :

```
var my_result = round(4.2)    # my_result= 4
var my_result = round (4.8)   # my_result= 5
```

#### 2.23 v = log(v)

Natural logarithm (ln) operation function.

- Input :<br>
  Single variable type or constant number<br>
  v: variable type or number

- Return :<br>
  v : return single number

Example :

```
var my_result = log(4)  # my_result= 1.3862
```

#### 2.24 v = log10(v)

Logarithm (log10) operation function.

- Input :<br>
  Single variable type or constant number<br>
  v: variable type or number

- Return :<br>
  v : return single number

Example :

```
var my_result = log10(3)    # my_result= 0.4771
```

#### 2.25 v = pow(v, v)

Power operation function.

- Input :<br>
  Two variable types or constant numbers<br>
  v: variable or constant that is a base of a power<br>
  v: variable or constant that is an exponent of a power

- Return :<br>
  v : return single number

Example :

```
var my_result = pow(2,3)    # my_result= 8
```

#### 2.26 v = rand()

Random number generator function with a uniform distribution between 0 and 1.

- Input :<br>
  None.

- Return :<br>
  v : return single number

Example :

```
var my_result = rand()    # my_result= 0.1315
var my_result = rand()    # my_result= 0.7869
var my_result = rand()    # my_result= 0.4277
```

#### 2.27 v = arr_size(a)

Return size of array variable

- Input :<br>
  a: target array variable

- Return :<br>
  v: return single number

Example :

```
var my_size
arr my_arr = {1,2,3,4}
my_size = arr_size(my_arr)    # my_size= 4
```

#### 2.28 a = arr_sub(a, v)

Trims the source array to a given length, counting from the front.

- Input :<br>
  a: target array variable<br>
  v: target size

- Return :<br>
  a: trimmed array

#### 2.29 a = arr_sub(a, v, v)

Trims the source array to a given length, counting from given starting point.

- Input :<br>
  a: target array variable<br>
  v: starting point index<br>
  v: target size

- Return :<br>
  a: trimmed array

#### 2.30 a = zyzE_to_zyxE(a), a = xyzE_to_zyxE(a), a = xyxE_to_zyxE(a), a = xzxE_to_zyxE(a), a = yzyE_to_zyxE(a), a = yxyE_to_zyxE(a), a = zxzE_to_zyxE(a)

Convert Euler angles in 3by1 to Euler angles in 3by1 ZY'X''.

- Input :<br>
  a: Source Euler angle array (length should be 3)

- Return :<br>
  a: Converted Euler angle array (ZY’X’’) (length = 3)

#### 2.31 a = zyzE_to_R(a), a = xyzE_to_R(a), a = xyxE_to_R(a), a = xzxE_to_R(a), a = yzyE_to_R(a), a = yxyE_to_R(a), a = zxzE_to_R(a), a = zyxE_to_R(a)

Convert Euler angles of 3by1 to Rotation Matrix.

- Input :<br>
  a: Source Euler angle array (length should be 3)

- Return :<br>
  a: Converted Rotation Matrix (length = 9)

#### 2.32 a = RxMat(v), a = RyMat(v), a = RzMat(v)

Generates a Rotation Matrix based on the input angles. Rx, Ry, and Rz represent the respective rotation axes.

- Input :<br>
  v: angle in degree unit

- Return :<br>
  a: Converted Rotation Matrix (length = 9)

#### 2.33 a = R_TCP

Returns the current TCP's Rotation Matrix.

- Input :<br>
  None.

- Return :<br>
  a: Converted Rotation Matrix (length = 9)

#### 2.34 a = point_to_R(P, v)

Extracts the Rotation Matrix from the input Point variable.

- Input :<br>
  P: target Point variable<br>
  v: Option<br>

  - 0 : X,Y,Z,Rx,Ry,Rz Point -> R
  - 1 : X,Y,Z,Rz,Ry,Rx Point -> R

- Return :<br>
  a: Converted Rotation Matrix (length = 9)

#### 2.35 a = Rinverse(a), a = Rtranspose(a)

Finds the Inverse (Transpose) of the Rotation Matrix.

- Input :<br>
  a: Source Rotation Matrix Array (length should be 9)

- Return :<br>
  a: Converted Rotation Matrix (length = 9)

#### 2.36 a = R_x_R(a, a)

Rotation Matrix Multiplication

- Input :<br>
  a: Source Rotation Matrix Array (length should be 9)<br>
  a: Source Rotation Matrix Array (length should be 9)

- Return :<br>
  a: Converted Rotation Matrix (length = 9)

#### 2.37 a = R_x_V(a, a)

Rotation Matrix and Vector (3by1) Multiplication

- Input :<br>
  a: Source Rotation Matrix Array (length should be 9)<br>
  a: Source Vector (length should be 3)

- Return :<br>
  a: Multiplied Vector (length = 3)

#### 2.38 a = R_to_zyxE(a)

Convert Rotation Matrix into ZY’X’’ Euler angle

- Input :<br>
  a: Source Rotation Matrix Array (length should be 9)

- Return :<br>
  a: Converted Euler angle array (length = 3)

### 3. String Functions

<br>

#### 3.1 v = str_empty(s)

This function returns the presence or absence of data in a string.

- Input :<br>
  Single string type variable or constant string.<br>
  s: string type variable or constant string

- Return :<br>
  v : return single number 0 or 1 **(if string is empty 1, if it is not empty 0)**

Example :

```
string my_str1 = “rainbow”
string my_str2

var my_result1 = str_empty(my_str1)    # my_result1= 0
var my_result2 = str_empty(my_str2)    # my_result2= 1
```

#### 3.2 v = str_find(s, s)

A function that returns the index of a string's position within another string.

- Input :<br>
  Two string type variables or constant strings.<br>
  s: reference string<br>
  s: string to find (target)

- Return :<br>
  v: Returns a single number corresponding to the index.<br>
  : If it does not exist, it returns -1.

Example :

```
string my_str1 = “rainbow_robotics”
string my_str2 = “robotics”

var my_result = str_find(my_str1, my_str2)  # my_result= 8
```

#### 3.3 v = str_len(s)

A function that returns the length of a string.

- Input :<br>
  Single string type variable or constant string.<br>
  s: string type variable or constant string

- Return :<br>
  v: return single number (length of the string)

Example :

```
string my_str = “rainbow_robotics”
var my_result = str_len(my_str)    # my_result= 16
```

#### 3.4 s = str_sub(s, v, v)

A function that truncates a string and returns part of it.

- Input :<br>
  Single string type variable or constant string, and two variable types.<br>
  s: reference string<br>
  v: starting index for truncation (variable type or number)<br>
  v: length for truncation (variable type or number)

- Return :<br>
  s: return truncated string

Example :

```
string my_str = “rainbow_robotics”
string my_result = str_sub(my_str, 3, 7)    # my_result= “nbow_ro”
```

#### 3.5 s = str_cat(s, s)

A function that concatenates strings together.

- Input :<br>
  Two string type variables or constant strings.<br>
  s: First string<br>
  s: Second string

- Return :<br>
  s: return added string

Example :

```
string my_str1 = “hi”
string my_str2 = “rainbow”

string my_res = str_cat(my_str1, my_str2)     # my_res= “hirainbow”
string my_res2 = my_str1 + my_str2            # ’+’ operator returns same result
string my_res3 = “My name” + “ is “ + “RB!”   # my_res3= “My name is RB!”
```

#### 3.6 v = str_cmp(s, s)

A function that compares strings with each other.

- Input :<br>
  Two string type variables or constant strings.<br>
  s: single string for reference<br>
  s: single string for comparing target

- Return :<br>
  v: Returns 0 if the strings are equal, or a single non-zero number if they are different.<br>
  If the strings are not equal, compares the first unequal character and returns a single number with a value greater
  than zero if the base string is greater than the comparison string and less than zero if the string is less than.

Example :

```
string my_str1 = “hello”
string my_str2 = “hello”
string my_str3 = “hgello”
string my_str4 = “Hello”

var my_result1 = str_cmp(my_str1, my_str2)  # my_result1= 0
var my_result2 = str_cmp(my_str2, my_str3)  # my_result2= -2  … compare e(101) and g(103)
var my_result3 = str_cmp(my_str3, my_str2)  # my_result3= 2   … compare g(103) and e(101)
var my_result4 = str_cmp(my_str1, my_str4)  # my_result4= 32  … compare h(104) and (72)
```

#### 3.7 v = to_num(s)

Convert character (string) numbers to real-number

- Input :<br>
  Single string type variable or constant string.<br>
  s: string type variable or constant string

- Return :<br>
  v: return single number

Example :

```
str my_string = “123.45”
var my_result = to_num(my_string)   # my_result= 123.45
```

#### 3.8 s = to_str (v), s = to_str (a), s = to_str (P), s = to_str (J)

#### s = to_str_raw (v), s = to_str_raw (a), s = to_str_raw (P), s = to_str_raw (J)

Convert variable/point/joint types to string type expression

- Input :<br>
  Single variable type or array type or point type or joint type<br>
  v/a/P/J: variable type or array type or number or point type or joint type

- Return :<br>
  s: return string

Example :

```
var my_value = 123.45
str my_result = to_str(my_value)        # my_result= “123.45”

point my_point = {100,200,300,90,0,0}
str my_result = to_str(my_point)        # my_result=“{100,200,300,90,0,0}”

joint my_joint = {90,0,0,90,0,0}
str my_result = to_str(my_joint)        # my_result= “{90,0,0,90,0,0}”

point my_point = {100,200,300,90,0,0}
str my_result = to_str_raw(my_point)    # my_result=“100,200,300,90,0,0”

joint my_joint = {90,0,0,90,0,0}
str my_result = to_str_raw(my_joint)    # my_result= “90,0,0,90,0,0”
```

#### 3.9 s = to_str_int(v)

Converts a single number to a string of integers.

- Input :<br>
  Single string type variable or constant string.<br>
  s: string type variable or constant string

- Return :<br>
  s: return string

Example :

```
var my_value = 123.45
str my_result = to_str_int(my_value)    # my_result= “123”
```

#### 3.10 a = str_parse(s, s, s, s)

Parses a string containing header and tail and stores it in the form of a numeric array.

- Input :<br>
  s: Source string. string type variable or constant string<br>
  s: Header string. string type variable or constant string<br>
  s: Tail string. string type variable or constant string<br>
  s: Separator string. string type variable or constant string

- Return :<br>
  a: return array type

Example :

```
str my_source_str = “S43,22,31,44,-5”
var my_result = str_parse(my_source_str, “S”, “”, “,”)
# my_result[0] = 5 // number of elements
# my_result[1] = 43, my_result[2] = 22, my_result[3] = 31, my_result[4] = 44, my_result[5] = -5

str my_source_str = “S{43/22/31/44}E”
var my_result = str_parse(my_source_str, “S{”, “}E”, “/”)
# my_result[0] = 4 // number of elements
# my_result[1] = 43, my_result[2] = 22, my_result[3] = 31, my_result[4] = 44

str my_source_str = “-100,200,-300”
var my_result = str_parse(my_source_str, “”, “”, “,”)
# my_result[0] = 3 // number of elements
# my_result[1] = -100, my_result[2] = 200, my_result[3] = -300

str my_source_str = “STX-100$200$-300ETX”
var my_result = str_parse(my_source_str, “STX”, “ETX”, “$”)
# my_result[0] = 3 // number of elements
# my_result[1] = -100, my_result[2] = 200, my_result[3] = -300
```

### 4. Bit Functions

<br>

#### 4.1 v = get_bit(v, v)

A function that obtains the bit of a specific bit position from a variable or constant.

- Input :<br>
  Two variable types or constant numbers<br>
  v: Target variable or number for the bit aquisition.<br>
  v: Target bit index (position). Bit index is starting from 0.

- Return :<br>
  v: Bit value (0 or 1)

Example :

```
                                # 1234 = 0b10011010010
var my_bit = get_bit(1234, 3)   # my_bit= 0
```

#### 4.2 set_bit(v, v)

This is a function that changes the bit at a specific bit position in variable to 1.

- Input :<br>
  Two variable types or constant numbers<br>
  v: Target variable or number for the bit set<br>
  v: Target bit index (position). Bit index is starting from 0.

- Return :<br>
  None.

Example :

```
var my_var = 1234    # 1234 = 0b10011010010
set_bit(my_var, 3)   # my_var= 1242
```

#### 4.3 clear_bit(v, v)

This is a function that changes the bit at a specific bit position in variable to 0.

- Input :<br>
  Two variable types or constant numbers<br>
  v: Target variable or number for the bit clear<br>
  v: Target bit index (position). Bit index is starting from 0.

- Return :<br>
  None.

Example :

```
var my_var = 1234       # 1234 = 0b10011010010
clear_bit(my_var, 1)    # my_var= 1232
```

#### 4.4 <<, >>, &, |

Bit shift operators, Bit and / or operators<br>
Can use when bit-shifting or bit and/or operation.

Example :

```
Var my_num = 12             # my_num = 0b1100
Var my_num2 = my_num << 2   # my_num2 = 48 (0b110000)
```

### 5. System Functions

<br>

#### 5.1 halt

Stop any program flow or action/movement.

Example :

```
halt
```

#### 5.2 task stop

Stop any program flow or action/movement.

Example :

```
task stop
```

#### 5.3 mc jall init

Apply DC power to the robot arm and turn the servo-on to activate it. (Activation)

#### 5.4 pgmode real

Switch the robot's operating mode to 'Real-Robot'.

#### 5.5 pgmode simulation

Switch the robot's operating mode to Simulation'.

#### 5.6 program_load_and_run(s)

Load and Run the target project/program

- Input :<br>
  s: Name of the target project in string type.

- Return :<br>
  None.

Example :

```
program_load_and_run(“my_project”)
program_load_and_run(“hello_world_v90”)
```

#### 5.7 task load your_project_name

Load saved project file

- Input :<br>
  Name of project/program wsl name

- Return :<br>
  None.

Example :

```
task load hello_world
task load my_project_123
```

#### 5.8 task play once

Run/execute the loaded-program.

#### 5.9 task stop

Stop any program flow or action/movement.

#### 5.10 task pause

Pause the program/motion running.

#### 5.11 task resume_a

Resume from “general pause condition”

#### 5.12 task resume_b

Resume from “collision detection situation”

#### 5.13 v = pattern_get_count(v)

A function to obtain the current index of the grid that is being performed by the pattern function.

- Input :<br>
  Single variable type or constant number<br>
  v: Pattern number (Confirmation of assigned number is required.)<br>
  : The pattern unique number is set in the pattern action.

- Return :<br>
  v: Returns the current index of the grid.

Example :

```
var current_count = pattern_get_count(6691)   # Get the current grid index of pattern number 6691.
```

#### 5.14 pattern_set_count(v, v)

A function that forcibly sets the index of the grid that does the work in the pattern function.

- Input :<br>
  Two variable types or constant numbers<br>
  v: Pattern number (Confirmation of assigned number is required.)<br>
  : The pattern unique number is set in the pattern action.<br>
  v: Desired grid index<br>
  : If the pattern is a 2D flat pattern, and there are grid points of 3x5 = 15, the configurable indices are 0 to 14.

- Return :<br>
  None.

Example :

```
pattern_set_count(6691, 3)  # Set the grid index of pattern number 6691 to 3.
```

#### 5.15 P = calc_fk_tcp(v, v, v, v, v, v), P = calc_fk_tcp(J)

Calculate TCP posture w.r.t. global (base) coordinate from six joint angles.

- Input type 1:<br>
  Six variable types or constant numbers.<br>
  v, v, v, v, v, v: six joint angles (Unit: Degree)

- Input type 2:<br>
  J: Single joint type variable which contains six joint-angles.

- Return :<br>
  P: Point type variable which contains TCP posture w.r.t. global (base) coordinate

Example :

```
joint my_joint = {0,0,0,0,0,0}
point my_result = calc_fk_tcp(my_joint)     # my_result= {0, -207.62, 1100.59, 0, 0, 0}
                                            # Depending on the TCP setting or robot model, the result may be different.

point my_result = calc_fk_tcp(0,0,0,0,0,0)  # Same result will be return to ‘my_result’
```

#### 5.16 P = calc_fk_tfc(v, v, v, v, v, v), P = calc_fk_tfc(J)

Calculate TFC (Tool Flange Center) posture w.r.t. global (base) coordinate from six joint angles.<br>
**※ The tool flange is where the gripper/tool is mounted on the robot.**

- Input type 1:<br>
  Six variable types or constant numbers.<br>
  v, v, v, v, v, v: six joint angles (Unit: Degree)

- Input type 2:<br>
  J: Single joint type variable which contains six joint-angles.

- Return :<br>
  P: Point type variable which contains TFC posture w.r.t. global (base) coordinate

Example :

```
joint my_joint = {0,0,0,0,0,0}
point my_result = calc_fk_tfc(my_joint)     # my_result= {0, -207.62,1100.59,0,0,0}

point my_result = calc_fk_tfc(0,0,0,0,0,0)  # Same result will be return to ‘my_result’
```

#### 5.17 v = point_dist(P, P)

Calculates the distance between two points.

- Input :<br>
  Two Point type variables.<br>
  P: Target point 1<br>
  P: Target point 2

- Return :<br>
  v: return single number (distance).

Example :

```
point my_ptr1 = {100, 200, 300, 0, 0, 0}
point my_ptr2 = {100, 200, 200, 0, 0, 0}

var my_result = point_dist(my_ptr1, my_ptr2)   # my_result= 100
```

#### 5.18 P = point_add(P, P)

Calculates the addition of two points.

- Input :<br>
  Two Point type variables.<br>
  P: Target point 1<br>
  P: Target point 2

- Return :<br>
  v: Returns point, which is the result of adding two points.

Example :

```
point my_ptr1 = {100, 0, 300, 150, 0, 30}
point my_ptr2 = {100, 200, 300, 90, 0, 90}

point my_result = point_add(my_ptr1, my_ptr2)

# my_result= {200, 200, 600, -90, -30, -60}
# x,y,z Distance values are treated as simple arithmetic operations.
# Rx,Ry,Rz Rotation values are treated as rotation matrix operations.
```

#### 5.19 P = point_sub(P, P)

Calculates the subtraction of two points.

- Input :<br>
  Two Point type variables.<br>
  P: Target point 1<br>
  P: Target point 2

- Return :<br>
  v: Returns point, which is the result of subtraction of two points.

Example :

```
point my_ptr1 = {100, 0, 300, 150, 0, 30}
point my_ptr2 = {100, 200, 300, 90, 0, 90}

point my_result = point_sub(my_ptr1, my_ptr2)

# my_result= {0, -200, 0, 0, 60, -60}
# x,y,z Distance values are treated as simple arithmetic operations.
# Rx,Ry,Rz Rotation values are treated as rotation matrix operations.
```

#### 5.20 P = point_mid(P, P)

Calculates the midpoint between two points.

- Input :<br>
  Two Point type variables.<br>
  P: Target point 1<br>
  P: Target point 2

- Return :<br>
  P: Returns the point that is the midpoint between two points.

Example :

```
point my_ptr1 = {100, 0, 300, 150, 0, 30}
point my_ptr2 = {100, 200, 300, 90, 0, 90}

point my_result = point_mid(my_ptr1, my_ptr2)

# my_result= {100, 100, 300, 120, -8.21, 60}
# x,y,z Distance values are treated as simple arithmetic operations.
# Rx,Ry,Rz Rotation values are treated as rotation matrix operations.
```

#### 5.21 P = point_interpolate(P, P, v)

Computes the interpolation point between two points.

- Input :<br>
  Two Point type variables and single variable/number are required<br>
  P: Target point 1<br>
  P: Target point 2<br>
  v: Weight factor for interpolation (0 ~ 1)

- Return :<br>
  P: Returns a point that is the result of interpolation between two points.

Example :

```
point my_ptr1 = {100, 0, 300, 150, 0, 30}
point my_ptr2 = {100, 200, 300, 90, 0, 90}

point my_result = point_interpolate(my_ptr1, my_ptr2, 0.1)

# my_result= {100, 20, 300, 144.43, -2.86, 35.37}
# x,y,z Distance values are treated as simple arithmetic operations.
# Rx,Ry,Rz Rotation values are treated as rotation matrix operations.
```

#### 5.22 P = point_trans_g2u(P, v)

Converts the attitude value stored in the Point variable from the global (base) coordinate system to the user coordinate system.

- Input :<br>
  Single Point type variable and single number.<br>
  P: Target point<br>
  v: User coordinate number **(User coordinate: 0, 1, 2)**

- Return :<br>
  P: Returns the converted point coordinate value.

Example :

```
point my_global_p
point my_local_p = point_trans_g2u(my_global_p, 0)
```

#### 5.23 P = point_trans_u2g(P, v)

Converts the attitude value stored in the Point variable from the user coordinate system to the global (base) coordinate system.

- Input :<br>
  Single Point type variable and single number.<br>
  P: Target point<br>
  v: User coordinate number **(User coordinate: 0, 1, 2)**

- Return :<br>
  P: Returns the converted point coordinate value.

Example :

```
point my_local_p
point my_global_p = point_trans_u2g(my_local_p, 0)
```

#### 5.24 P = get_tcp_info()

This function returns the TCP information of the current robot.

- Input :<br>
  None.

- Return :<br>
  P: Returns the TCP of the current robot based on the global coordinate system. **(Unit: mm & degree)**

Example :

```
point my_result = get_tcp_info()   # TCP posture information will be stored in ‘my_result’
```

#### 5.25 P = get_tfc_info()

This function returns the TFC (Tool flange center) information of the current robot.

- Input :<br>
  None.

- Return :<br>
  P: Returns the TFC of the current robot based on the global coordinate system. **(Unit: mm & degree)**

Example :

```
point my_result = get_tfc_info()   # TFC posture information will be stored in ‘my_result’
```

#### 5.26 J = joint_add(J, J)

Calculates the addition of the angles of two Joints.

- Input :<br>
  Two Joint type variables<br>
  J: Target joint 1<br>
  J: Target joint 2

- Return :<br>
  J: Returns the joint, which is the result of the addition operation of two joints.

Example :

```
joint my_joint1 = {45, 15, 0, 0, 0, 90}
joint my_joint2 = {0, 45, 45, 15, 0, 0}

joint my_result = joint_add(my_joint1, my_joint2)   # my_result= {45,60,45,15,0,90}
```

#### 5.27 J = joint_sub(J, J)

This function calculates the subtraction of two joint angles.

- Input :<br>
  Two Joint type variables<br>
  J: Target joint 1<br>
  J: Target joint 2

- Return :<br>
  J: Returns the joint, which is the result of the subtraction operation of two joints.

Example :

```
joint my_joint1 = {45, 15, 0, 0, 0, 90}
joint my_joint2 = {0, 45, 45, 15, 0, 0}

joint my_result = joint_sub(my_joint1, my_joint2)   # my_result= {45,-30,-45,-15,0,90}
```

#### 5.28 J = joint_mid(J, J)

Computes the intermediate joint between two joint angles.

- Input :<br>
  Two Joint type variables.<br>
  J: Target joint 1<br>
  J: Target joint 2

- Return :<br>
  J: Returns the joint that is the result of the intermediate joint operation of two joints.

Example :

```
joint my_joint1 = {45, 15, 0, 15, 0, 90}
joint my_joint2 = {45, 15, 0, 15, 0, 0}

joint my_result = joint_mid(my_joint1, my_joint2)   # my_result= {45, 15, 0, 15, 0, 45}
```

#### 5.29 J = joint_interpolate(J, J, v)

Computes the interpolation joint between two joint angles.

- Input :<br>
  Two Joint type variables and single variable/number are required<br>
  J: Target joint 1<br>
  J: Target joint 2<br>
  v: Weight factor for interpolation (0 ~ 1)

- Return :<br>
  J: Returns a joint that is the result of interpolation between two joints.

Example :

```
joint my_joint1 = {45, 15, 0, 15, 0, 90}
joint my_joint2 = {45, 15, 0, 15, 0, 0}

joint my_result = joint_interpolate(my_joint1, my_joint2, 0.1)
# my_result= {45, 15, 0, 15, 0, 81}
```

#### 5.30 J = get_joint_info()

Returns the current joint angle information.

- Input :<br>
  None.

- Return :<br>
  J: It returns the joint information of the current robot based on the joint coordinate system. **(Unit: degree)**

Example :

```
joint my_result = get_joint_info()  # current robot’s joint angles will be return to ‘my_result’
```

#### 5.31 set_payload_info(v, v, v, v)

Set the tool payload w.r.t. the manufacturer’s default tool coordinate system.

<div class="warning custom-block">
    <p class="custom-block-title">CAUTION</p>
    <ol>
        <li>
            The value set in this function returns to the default value after the program ends.
        </li>
        <li>
            If this function is not called in program-flow, the value set in the Setup page is used.
        </li>
        <li>
            During program flow, the value set in this function is maintained until this function is called again.
        </li>
    </ol>
</div>

- Input :<br>
  Four variable types or constant numbers.<br>
  v: payload weight **(Unit: kg)**<br>
  v: payload Center of mass x-axis value **(Unit: mm)**<br>
  v: payload Center of mass y-axis value **(Unit: mm**)<br>
  v: payload Center of mass z-axis value **(Unit: mm)**

  - Three values entered are based on the manufacturer's default tool coordinate system.

- Return :<br>
  None.

Example :

```
set_payload_info(3, 0, -50, 0)  # Set payload as 3kg, and center-of-mass as (0mm,-50mm, 0mm).
```

#### 5.32 set_tcp_info(v, v, v, v, v, v)

Set the TCP position and orientation w.r.t. the manufacturer’s default tool coordinate system.

<div class="warning custom-block">
    <p class="custom-block-title">CAUTION</p>
    <ol>
        <li>
            The value set in this function returns to the default value after the program ends.
        </li>
        <li>
            If this function is not called in program-flow, the value set in the Setup page is used.
        </li>
        <li>
            During program flow, the value set in this function is maintained until this function is called again.
        </li>
    </ol>
</div>

- Input :<br>
  Six variable types or constant numbers.<br>
  v: TCP’s x-value **(Unit: mm)**<br>
  v: TCP’s y-value **(Unit: mm)**<br>
  v: TCP’s z-value **(Unit: mm)**<br>
  v: TCP’s Rx-value **(Unit: degree)**<br>
  v: TCP’s Ry-value **(Unit: degree)**<br>
  v: TCP’s Rz-value **(Unit: degree)**

  - Six values entered are based on the manufacturer's default tool coordinate system.

- Return :<br>
  None.

Example :

```
set_tcp_info(0, -100, 0, 0, 0, 0)  # Set TCP position as (0mm,-100mm, 0mm).
```

#### 5.33 set_collision_onoff(v)

This function turns on/off the collision detection function.

<div class="warning custom-block">
    <p class="custom-block-title">CAUTION</p>
    <ol>
        <li>
            The value set in this function returns to the default value after the program ends.
        </li>
        <li>
            If this function is not called in program-flow, the value set in the Setup page is used.
        </li>
        <li>
            During program flow, the value set in this function is maintained until this function is called again.
        </li>
    </ol>
</div>

- Input :<br>
  Single variable type or constant number<br>
  v: 0 is off , 1 is on.

- Return :<br>
  None.

Example :

```
set_collision_onoff(1)  # Turn on the collision detection function.
```

#### 5.34 set_collision_th(v)

Sets the collision sensitivity (threshold).

<div class="warning custom-block">
    <p class="custom-block-title">CAUTION</p>
    <ol>
        <li>
            The value set in this function returns to the default value after the program ends.
        </li>
        <li>
            If this function is not called in program-flow, the value set in the Setup page is used.
        </li>
        <li>
            During program flow, the value set in this function is maintained until this function is called again.
        </li>
    </ol>
</div>

- Input :<br>
  Single variable type or constant number<br>
  v: Value between 0 ~ 1. The lower the value, the more sensitive to collision. (0 ~ 1)

- Return :<br>
  None.

Example :

```
set_collision_th(0.1)   # Set the collision threshold as 10%.
```

#### 5.35 set_collision_mode(v)

Set the stop-mode after the collision detection.

<div class="warning custom-block">
    <p class="custom-block-title">CAUTION</p>
    <ol>
        <li>
            The value set in this function returns to the default value after the program ends.
        </li>
        <li>
            If this function is not called in program-flow, the value set in the Setup page is used.
        </li>
        <li>
            During program flow, the value set in this function is maintained until this function is called again.
        </li>
    </ol>
</div>

- Input :<br>
  Single variable type or constant number<br>
  v: Stop mode.

  - 0 = General Stop
  - 1 = Evasion Stop

- Return :<br>
  None.

Example :

```
set_collision_mode(1)
# After detecting a collision, the robot moves a little in the direction to avoid external force and then stops the movement.
```

#### 5.36 set_collision_after(v)

Set the program flow direction after the collision detection.

<div class="warning custom-block">
    <p class="custom-block-title">CAUTION</p>
    <ol>
        <li>
            The value set in this function returns to the default value after the program ends.
        </li>
        <li>
            During program flow, the value set in this function is maintained until this function is called again.
        </li>
    </ol>
</div>

- Input :<br>
  Single variable type or constant number<br>
  v: Stop mode

  - 0 = Pause the Program flow **(default)**
  - 1 = Halt/Stop the Program flow

- Return :<br>
  None.

Example :

```
set_collision_after(1)  # After detecting an external collision, the program flow stops (ends).
```

#### 5.37 set_speed_multiply(v)

Sets the overall speed (velocity) multiplier.

<div class="warning custom-block">
    <p class="custom-block-title">CAUTION</p>
    <ol>
        <li>
            The value set in this function returns to the default value after the program ends.
        </li>
        <li>
            During program flow, the value set in this function is maintained until this function is called again.
        </li>
    </ol>
</div>

- Input :<br>
  Single variable type or constant number<br>
  v: Multiply value **(0 ~ 2) (default: 1)**

- Return :<br>
  None.

Example :

```
var speed_override = 1.5
set_speed_multiply(speed_override)  # Desired-speed = 1.5 x original-speed
```

#### 5.38 set_acc_multiply(v)

Sets the overall acceleration multiplier.

<div class="warning custom-block">
    <p class="custom-block-title">CAUTION</p>
    <ol>
        <li>
            The value set in this function returns to the default value after the program ends.
        </li>
        <li>
            During program flow, the value set in this function is maintained until this function is called again.
        </li>
    </ol>
</div>

- Input :<br>
  Single variable type or constant number<br>
  v: Multiply value **(0 ~ 2) (default: 1)**

- Return :<br>
  None.

Example :

```
var acc_override = 0.5
set_acc_multiply(acc_override)  # Desired-acceleration = 0.5 x original-acceleration
```

#### 5.39 set_speed_acc_j(v, v)

Sets fixed joint velocity/acceleration for J-series motions (Move J, Move JB, Move JL).

<div class="warning custom-block">
    <p class="custom-block-title">CAUTION</p>
    <ol>
        <li>
            The value set in this function returns to the default value after the program ends.
        </li>
        <li>
            During program flow, the value set in this function is maintained until this function is called again.
        </li>
    </ol>
</div>

- Input :<br>
  Two variable types or constant numbers<br>
  v: Speed/ Velocity (Unit: 𝒅𝒆𝒈/𝒔)<br>
  Does not lock the speed for negative input.<br>
  v: Acceleration (Unit: 𝒅𝒆𝒈/𝒔𝟐)<br>
  Does not lock the acceleration for negative input.

- Return :<br>
  None.

Example :

```
set_speed_acc_j(10, 3)  # Ignoring the speed/acceleration set for each point of Move,
                        # set speed as 10 𝑑𝑒𝑔/𝑠, and acceleration as 3 𝑑𝑒𝑔/𝑠2.

set_speed_acc_j(-1, 5)  # Ignoring the acceleration set for each point of Move,
                        # set acceleration as 5𝑑𝑒𝑔/𝑠2.
```

#### 5.40 set_speed_acc_l(v, v)

Sets fixed linear velocity/acceleration for L-series motions (Move L, Move PB, Move LB, Move ITPL).

<div class="warning custom-block">
    <p class="custom-block-title">CAUTION</p>
    <ol>
        <li>
            The value set in this function returns to the default value after the program ends.
        </li>
        <li>
            During program flow, the value set in this function is maintained until this function is called again.
        </li>
    </ol>
</div>

- Input :<br>
  Two variable types or constant numbers<br>
  v: Speed/ Velocity (Unit: 𝒎𝒎/𝒔)<br>
  Does not lock the speed for negative input.<br>
  v: Acceleration (Unit: 𝒎𝒎/𝒔𝟐)<br>
  Does not lock the acceleration for negative input.

- Return :<br>
  None.

Example :

```
set_speed_acc_l(15, 5)  # Ignoring the speed/acceleration set for each point of Move,
                        # set speed as 15 𝑚𝑚/𝑠, and acceleration as 5 𝑚𝑚/𝑠2.

set_speed_acc_l(5, -1)  # Ignoring the speed set for each point of Move,
                        # set speed as 5𝑚𝑚/𝑠.
```

#### 5.41 set_speed_bar(v)

Set the overall speed control bar. (bottom speed control bar in UI).

<div class="warning custom-block">
    <p class="custom-block-title">CAUTION</p>
    <ul>
        <li>
            When running a program on the UI Make page, this function does not work if the safety slide bar option is turned on.
        </li>
    </ul>
</div>

- Input :<br>
  Single variable type or constant number<br>
  v: Desired speed control bar position **(0 ~ 1)**

- Return :<br>
  None.

Example :

```
set_speed_bar(0.5)  # Set the speed control bar to 50%.
```

#### 5.42 set_box_dout(v, v)

Set the digital output of the control box.

- Input :<br>
  Two variable types or constant numbers.<br>
  v: Port number for the digital-output **(0 ~ 15)**<br>
  v: Output mode selection **(-1 = Bypass, 0 = Low, 1 = High)**

- Return :<br>
  None.

Example :

```
set_box_dout(0, 0)     # Low output from port 0
set_box_dout(0, -1)    # Keep low on port 0
set_box_dout(0, 1)     # High output from port 0
set_box_dout(0, -1)    # Keep high on port 0
```

#### 5.43 set_box_aout(v, v)

Set the analog output of the control box.

- Input :<br>
  Two variable types or constant numbers<br>
  v: Port number for the analog output **(0 ~ 3)**<br>
  v: Desired output voltage **(0 ~ 10V)**

- Return :<br>
  None.

Example :

```
set_box_aout(3, 7)  # set 7V for the analog output port 3.
```

#### 5.44 set_box_dout_toggle(v)

Toggles the current digital output of the control box.

- Input :<br>
  Single variable type or constant number<br>
  v: Port number for the digital-output **(0 ~ 15)**

- Return :<br>
  None.

Example :

```
set_box_dout (1, 1)         # High output from port 1
set_box_dout_toggle (1)     # Toggle the output port 1 ( Low signal will be out)
repeat (1 times){           # Port 3 blinks every second
    set_box_dout_toggle(3)
    wait (1 sec)
}
```

#### 5.45 set_serial_tool(v, v, v)

Set the serial communication (RS232/485) provided by the Tool Flange of the robot arm.

<div class="warning custom-block">
    <p class="custom-block-title">CAUTION</p>
    <ol>
        <li>
            The value set in this function returns to the default value after the program ends.
        </li>
        <li>
            If this function is not called in program-flow, the value set in the Setup page is used.
        </li>
        <li>
            During program flow, the value set in this function is maintained until this function is called again.
        </li>
    </ol>
</div>

- Input :<br>
  Three variable types or constant numbers.<br>
  v: Communication speed(Baud rate)<br>
  v: Stop bit, (0 or 1, **Default 1**)<br>
  v: Parity bit, (0 : none, 1 : odd, 2 : even, **Default 0**)

- Return :<br>
  None.

Example :

```
set_serial_tool(115200, 1, 0)
# Set tool-flange serial comm. : baud rate = 115200 / stop bit = 1 / parity = none
```

#### 5.46 set_serial_box(v, v, v)

Set the serial communication (RS232/485) provided by the control box.

<div class="warning custom-block">
    <p class="custom-block-title">CAUTION</p>
    <ol>
        <li>
            The value set in this function returns to the default value after the program ends.
        </li>
        <li>
            If this function is not called in program-flow, the value set in the Setup page is used.
        </li>
        <li>
            During program flow, the value set in this function is maintained until this function is called again.
        </li>
    </ol>
</div>

- Input :<br>
  Three variable types or constant numbers.<br>
  v: Communication speed(Baud rate)<br>
  v: Stop bit, (0 or 1, **Default 1**)<br>
  v: Parity bit, (0 : none, 1 : odd, 2 : even, **Default 0**)

- Return :<br>
  None.

Example :

```
set_serial_box(9600, 1, 0)
# Set control-box serial comm. : baud rate = 9600 / stop bit = 1 / parity = none
```

#### 5.47 arm_powerdown()

Turn off the power supply for the robot arm.

<div class="warning custom-block">
    <p class="custom-block-title">CAUTION</p>
    <ul>
        <li>
            The robot arm powers down. Be careful with use. The control box does not turn off.
        </li>
    </ul>
</div>

- Input :<br>
  None.

- Return :<br>
  None.

Example :

```
arm_powerdown()
```

#### 5.48 freedrive_teach_on()

Turn on direct teaching mode (Free drive mode).

<div class="warning custom-block">
    <p class="custom-block-title">CAUTION</p>
    <ul>
        <li>
            When this function is executed, the control mode of the robot arm is changed. Use with caution.
        </li>
    </ul>
</div>

#### 5.49 freedrive_teach_off()

Turn off direct teaching mode (Free drive mode).

<div class="warning custom-block">
    <p class="custom-block-title">CAUTION</p>
    <ul>
        <li>
            When this function is executed, the control mode of the robot arm is changed. Use with caution.
        </li>
    </ul>
</div>

#### 5.50 db_write(s, v)

Write variable into the DataBase

- Input :<br>
  s: name of database<br>
  v: target value for writing.

- Return :<br>
  None.

Example :

```
db_write(“my_data”, 1)
```

#### 5.51 db_write(s, s)

Write string into the DataBase

- Input :<br>
  s: name of database<br>
  s: target value for writing.

- Return :<br>
  None.

Example :

```
db_write(“my_name”, “rainbow”)
```

#### 5.52 v = db_read(s), s = db_read(s)

Read variable or string data from the DataBase

- Input :<br>
  s: name of database

- Return :<br>
  Variable or String

Example :

```
var saved_value
str saved_name

saved_valued = db_read(“my_data”)
saved_name = db_read(“my_name”)
```

#### 5.53 jump_to(v)

Program execution is not executed until a specific address value.

- Input :<br>
  Single variable type or the constant number.<br>
  v: Address value (0~99999)

- Return :<br>
  None.

Example :

```
# Jumps through the program flow to the point where jump_here(1234) appears.
jump_to(1234)
```

#### 5.54 jump_here(v)

Execute the program again from this point.

<div class="warning custom-block">
    <p class="custom-block-title">CAUTION</p>
    <ul>
        <li>
            This function should be located at the top line (left) of the program.
        </li>
    </ul>
</div>

- Input :<br>
  Single variable type or the constant number.<br>
  v: Address value (0~99999)

- Return :<br>
  None.

Example :

```
# In the example below, the middle two ‘wait’ lines will be ignored.
jump_to(1234)
wait (1.0 sec)
wait (2.0 sec)
jump_here(1234)
```

#### 5.55 jump_to_line(v)

Jump to a specific line.

- Input :<br>
  Single variable type or the constant number.<br>
  v: Address value (0~99999)

  - The line number is the number of the top line (left) of the program.
  - Begin is numbered in line 0, followed by line 1, in that order.

- Return :<br>
  None.

Example :

```
# Go to line number 2.
jump_to_line(2)
```

#### 5.56 jump_to_begin()

Move to the first starting line. Same effect as jump_to_line(0).

- Input :<br>
  None.

- Return :<br>
  None.

Example :

```
jump_to_begin()
```

### 6. System Variables

<br>

#### 6.1 SD_TIME

SD_TIME<br>
SD_TIMER_0, SD_TIMER_1, …, SD_TIMER_9<br>

A variable representing time.<br>
It can be changed to the desired value in the Set function.<br>
Used as a timer function.

Time automatically increments with the flow of program time.
**(Unit: Second)**

#### 6.2 SD_J#\_REF

SD_J0_REF<br>
SD_J1_REF<br>
SD_J2_REF<br>
SD_J3_REF<br>
SD_J4_REF<br>
SD_J5_REF<br>

Joint reference angles. **(Unit: degree)**

#### 6.3 SD_J#\_ANG

SD_J0_ANG<br>
SD_J1_ANG<br>
SD_J2_ANG<br>
SD_J3_ANG<br>
SD_J4_ANG<br>
SD_J5_ANG<br>

Joint encoder angles. **(Unit: degree)**

#### 6.4 SD_J#\_CUR

SD_J0_CUR<br>
SD_J1_CUR<br>
SD_J2_CUR<br>
SD_J3_CUR<br>
SD_J4_CUR<br>
SD_J5_CUR<br>

Joint phase current. **(Unit: A)**

#### 6.5 SD_BEGIN_J#

SD_BEGIN_J0<br>
SD_BEGIN_J1<br>
SD_BEGIN_J2<br>
SD_BEGIN_J3<br>
SD_BEGIN_J4<br>
SD_BEGIN_J5<br>

Variable representing the joint angles set in Begin. **(Unit: degree)**

#### 6.6 SD_TEMPERATURE_MC#

SD_TEMPERATURE_MC0<br>
SD_TEMPERATURE_MC1<br>
SD_TEMPERATURE_MC2<br>
SD_TEMPERATURE_MC3<br>
SD_TEMPERATURE_MC4<br>
SD_TEMPERATURE_MC5<br>

Joint motor controller temperature. **(Unit: celsius)**

#### 6.7 SD_TCP_X

SD_TCP_X<br>
SD_TCP_Y<br>
SD_TCP_Z<br>
SD_TCP_RX<br>
SD_TCP_RY<br>
SD_TCP_RZ<br>

TCP values (position and orientation) with respect to the base (global) coordinate.

#### 6.8 SD_DEFAULT_SPEED

Representing the default speed bar. The UI speed control bar value is displayed between 0 and 1.

#### 6.9 SD_ROBOT_STATE

Indicates whether the robot motion command is being executed.<br>

- 1 = Idle
- 3 = Moving

#### 6.10 SD_POWER_STATE

Power information of the control box.

- SD_POWER_STATE >> 0 & 0x01 : 48V SMPS State
- SD_POWER_STATE >> 1 & 0x01 : Power switching information
- SD_POWER_STATE >> 2 & 0x01 : 24V SMPS State
- SD_POWER_STATE >> 3 & 0x01 : 48V switching information
- SD_POWER_STATE >> 4 & 0x01 : User (PC) power selection information
- SD_POWER_STATE >> 5 & 0x01 : Estop switch state

#### 6.11 SD_COLLISION_DETECT_STATE

Whether the external collision detection function is on/off

- 0 = Collision detection mode off
- 1 = Collision detection mode on

#### 6.12 SD_IS_FREE_DRIVE_MODE

Whether to use direct teaching

- 0 = Free-drive (Direct teaching) off
- 1 = Free-drive (Direct teaching) on

#### 6.13 SD_PG_MODE

Indicates the robot's operation mode.

- 0 = Real mode
- 1 = Simulation mode

#### 6.14 SD_INIT_STATE_INFO

This is a system variable representing the activation phase information of the robot.

#### 6.15 SD_INIT_ERR

This is a system variable that indicates the robot activation error information.

#### 6.16 SD_TFB_ANALOG_IN\_\#

SD_TFB_ANALOG_IN_0<br>
SD_TFB_ANALOG_IN_1

Variable with analog value (0~10V) of two analog input ports of tool flange board (TFB).

#### 6.17 SD_TFB_DIGITAL_IN\_\#

SD_TFB_DIGITAL_IN_0<br>
SD_TFB_DIGITAL_IN_1

A variable with a digital value (0 or 1) of the two digital input ports on the tool flange board (TFB).

#### 6.18 SD_TFB_DIGITAL_OUT\_\#

SD_TFB_DIGITAL_OUT_0<br>
SD_TFB_DIGITAL_OUT_1

A variable with an output value (0 or 1) of the two digital output ports of the tool flange board (TFB).

#### 6.19 SD_TFB_VOLTAGE_OUT

It is a variable indicating the voltage output information (0 or 12 or 24V) of the tool flange board (TFB).

#### 6.20 SD_OP_STAT_COLLISION_OCCUR

A variable indicating whether an external collision detected.

- 0 = Idle
- 1 = External collision detected

#### 6.21 SD_OP_STAT_SOS_FLAG

A variable indicating if a control box power problem / robot joint controller / other problem has occurred.

- 0 = Idle

#### 6.22 SD_OP_STAT_SELF_COLLISION

A variable indicating just before self-collision during robot motion.

- 0 = Idle
- 1 = Entering self-collision range

#### 6.23 SD_OP_STAT_ESTOP_OCCUR

This is a variable indicating whether the program/robot is in the paused state.

- 0 = Idle
- 1 = Pause state

#### 6.24 SD_OP_STAT_EMS_FLAG

This variable tells the user whether or not a singularity (= there is no solution for the robot control algorithm) is present.

- 0 = Idle

#### 6.25 SD_DIGITAL_IN_CONFIG\_\#

SD_DIGITAL_IN_CONFIG_0<br>
SD_DIGITAL_IN_CONFIG_1

Shows the information of the two protective stop terminals. (Din 16/17)

#### 6.26 SD_INBOX_TRAP_FLAG\_\#

SD_INBOX_TRAP_FLAG_0<br>
SD_INBOX_TRAP_FLAG_1

This is a variable that checks whether a specific part of the robot has entered a specific area (Inbox).

#### 6.27 SD_INBOX_CHECK_MODE\_\#

SD_INBOX_CHECK_MODE_0<br>
SD_INBOX_CHECK_MODE_1

Inbox Check mode.

- 0: No checking
- 1: Check Tool Flange Center (check whether the TFC is in the Inbox area)
- 2: Check Tool Center Point (check whether the TCP is in the Inbox area)
- 3: Check Tool Box (Check whether the virtual box set at the end of the robot arm has entered in Inbox area.)
- 4: Check All (1,2,3)

#### 6.28 SD_SOCK_IS_OPEN\_\#

SD_SOCK_IS_OPEN_0<br>
SD_SOCK_IS_OPEN_1<br>
SD_SOCK_IS_OPEN_2<br>
SD_SOCK_IS_OPEN_3<br>
SD_SOCK_IS_OPEN_4<br>

This is a variable indicating whether the socket of the corresponding number was normally opened and whether it was normally connected to the server.<br>
1 (true) if creation and connection were performed normally. **(# : 0 ~ 4)**

#### 6.29 SD_SOCK_LAST_READ\_\#

SD_SOCK_LAST_READ_0<br>
SD_SOCK_LAST_READ_1<br>
SD_SOCK_LAST_READ_2<br>
SD_SOCK_LAST_READ_3<br>
SD_SOCK_LAST_READ_4<br>

A variable indicating whether the read function was performed normally with the socket of the corresponding number.<br>
1 (true) if the read was performed normally. **(# : 0 ~ 4)**

#### 6.30 SD_HAND_TOKTOK

This is a variable indicating whether or not an act of tapping (tok tok) from outside the robot has occurred.

#### 6.31 SD_FINISH_AT_EVENT

Stores whether the motion has ended in a way that the robot's FinishAt (motion escape) condition.<br>

If the motion is finished by reaching the motion target point, this variable is 0.<br>
If the FinishAt condition is satisfied and the operation is finished, this variable becomes 1.

#### 6.32 SD_TCP_VEL_REF

TCP reference velocity.

#### 6.33 SD_MOTION_TIME

It is a variable that stores the time of unit movement. When the next movement is executed, it starts from 0 again.

#### 6.34 SD_ARM_POWER

A variable representing the power the robot is using.

#### 6.35 SD_IS_TPU_CONNECT

This is a variable that indicates whether the TPU (Teaching Pendant Unit, Tablet PC) is connected.

#### 6.36 SD_IS_RUN_IN_MAKE

1 is saved if the current program operation is executed in the Make page.

#### 6.37 SD_IS_RUN_IN_PLAY

1 is saved if the current program operation is executed in the Play page.

#### 6.38 SD_IS_INTENDED_STOP

Indicates whether the program termination is an intentional termination or an emergency termination.

#### 6.39 SD_MOVE_INDEX

In a continuous motion such as Move PB / ITPL, it tells which point the robot is passing through.

### 7. Movement Functions

![missing](/technical_docs/common/ui_script/7.png)

Pre-Defined Motion Primitives

- Move J
- Move L
- Move JB
- Move JB2
- Move LB
- Move PB
- Move ITPL
- Move PRO
- Move XB
- Move Circle

User-Generate-RT Motion

- Servo J
- Servo L
- Servo T
- Speed J
- Speed L

#### 7.1 move_finish_wait()

A function that waits for the currently executing movement to complete.

- Input :<br>
  None.

- Return :<br>
  None.

Example :

```
# Wait for the movement to complete until my_destination.
point my_destination = {100,200,300,0,0,0}
move_l(my_destination, 20, 5, 0)
move_finish_wait()
```

#### 7.2 move_l(P, v, v, v=1)

A function that makes TCP to move in a straight line to the target point.

- Input :<br>
  P: Target TCP posture<br>
  v: Speed (𝒎𝒎/𝒔)<br>
  v: Acceleration (𝒎𝒎/𝒔𝟐)<br>
  v: Wait flag (default: 1)

  - 0 = No Wait (Non-Block).
  - 1 = Wait for the movement to complete (Block).

- Return :<br>
  None.

Example :

```
point my_point1 = {100,200,300,0,0,0}
point my_point2= {100,150,100,0,90,0}

move_l(my_point1, 20, 5)    # Move L method to move to my_point1.
move_l(my_point2, 20, 5)    # Move L method to move to my_point2.
```

#### 7.3 move_l_rel(P, v, v, v, v=1)

A function that makes TCP to move in a straight line to the target point.<br>
Enter the target point as a value relative to the current TCP value.

- Input :<br>
  P: Relative position & orientation value.<br>
  v: Speed (𝒎𝒎/𝒔)<br>
  v: Acceleration (𝒎𝒎/𝒔𝟐)<br>
  v: reference frame for the relative P value.

  - 0: Base (Global) coordinate.
  - 1: Tool (Local) coordinate.
  - 2: User coordinate 0
  - 3: User coordinate 1
  - 4: User coordinate 2

    v: Wait flag (default: 1)

  - 0 = No Wait (Non-Block).
  - 1 = Wait for the movement to complete (Block).

- Return :<br>
  None.

Example :

```
# move TCP (0,100,-200) w.r.t. Base coordinate (speed/acceleration = 300 / 400)
move_l_rel(pnt[0,100,-200,0,0,0], 300, 400, 0)

# move TCP 50 mm w.r.t. x axis of User coordinate 2 (speed/acceleration = 100 / 300)
move_l_rel(pnt[50,0,0,0,0,0], 100, 300, 4)
```

#### 7.4 move_j(J, v, v, v=1)

Move the robot arm to the target joint angle.

- Input :<br>
  J: Target joint angles<br>
  v: Speed (Unit: 𝒅𝒆𝒈/𝒔)<br>
  v: Acceleration (Unit: 𝒅𝒆𝒈/𝒔𝟐)<br>
  v: Wait flag (default: 1)

  - 0 = No Wait (Non-Block).
  - 1 = Wait for the movement to complete (Block).

- Return :<br>
  None.

Example :

```
move_j (jnt[0,0,90,0,90,0], 60, 80)   # move joint angles to (0,0,90,0,90,0) degree with speed/acceleration = 60/80.

jnt my_joint_angle = {0,0,90,0,90,0}
move_j (my_joint_angle, 60, 80)       # move joint angles to (0,0,90,0,90,0) degree with speed/acceleration = 60/80.
```

#### 7.5 move_j_rel(J, v, v, v=1)

Relatively move joints from its current posture.

- Input :<br>
  J: Delta Target joint angles<br>
  v: Speed (Unit: 𝒅𝒆𝒈/𝒔)<br>
  v: Acceleration (Unit: 𝒅𝒆𝒈/𝒔𝟐)<br>
  v: Wait flag (default: 1)

  - 0 = No Wait (Non-Block).
  - 1 = Wait for the movement to complete (Block).

- Return :<br>
  None.

Example :

```
# move joints (0,0,90,0,90,0) degree with speed/acceleration = 60/80. w.r.t. current posture
move_j_rel (jnt[0,0,90,0,90,0], 60, 80)

# move joints (0,0,90,0,90,0) degree with speed/acceleration = 60/80. w.r.t. current posture
jnt del_joint_angle = {0,0,90,0,90,0}
move_j_rel (del_joint_angle, 60, 80)
```

#### 7.6 move_jl(P, v, v, v=1)

(move joint with linear input)<br>
This function moves to the target point using the move_j method rather than a straight line.

- Input :<br>
  P: Target TCP posture<br>
  v: Speed (Unit: 𝒅𝒆𝒈/𝒔)<br>
  v: Acceleration (Unit: 𝒅𝒆𝒈/𝒔𝟐)<br>
  v: Wait flag (default: 1)

  - 0 = No Wait (Non-Block).
  - 1 = Wait for the movement to complete (Block).

- Return :<br>
  None.

Example :

```
point my_point1 = {100,200,300,0,0,0}
point my_point2 = {100,150,100,0,90,0}

move_jl(my_point1, 20, 5)   # Move TCP to ‘my_point1’ via Move J method.
move_jl(my_point2, 20, 5)   # Move TCP to ‘my_point2’ via Move J method.
```

#### 7.7 move_pb_clear()

Initialize (Clear) the point list to be used in Move PB.

- Input :<br>
  None.

- Return :<br>
  None.

Example :

```
move_pb_clear()   # Initialize (Clear) the point list to be used in Move PB.
```

#### 7.8 move_pb_add(P, v, v, v)

This function adds the points used in Move PB to the list.

- Input :<br>
  P: Target TCP posture<br>
  v: Speed (Unit: 𝒎𝒎/𝒔)<br>
  v: Blending option

  - 0 = Blend based on Ratio.
  - 1 = Blend based on Distance.

  v: Blending value (0 ~ 1 / distance (mm))

- Return :<br>
  None.

Example :

```
point my_point1 = {100,200,0,0,0,0}
point my_point2 = {150,0,50,0,0,0}

# add ‘my_point1’ to the Move PB list with speed=50mm + 50% blending option
move_pb_add(my_point1, 50, 0, 0.5)

# add ‘my_point2’ to the Move PB list with speed=100mm + 50mm blending option
move_pb_add(my_point2, 100, 1, 50)
```

#### 7.9 move_pb_run(v, v, v=1)

This function executes Move PB using the points added in move_pb_add.

- Input :<br>
  v: Acceleration (Unit: 𝒎𝒎/𝒔𝟐 )<br>
  v: Orientation option

  - 0 = Intended (Follows the rotation value taught by the user)
  - 1 = Constant (Keep the rotation value of the starting position)

  v: Wait flag **(default: 1)**

  - 0 = No Wait (Non-Block).
  - 1 = Wait for the movement to complete (Block).

- Return :<br>
  None.

Example :

```
point my_point1 = {100,200,0,0,0,0}
point my_point2 = {150,0,50,0,0,0}

move_pb_clear()                     # Clear the Move PB list.
move_pb_add(my_point1, 50, 0, 0.5)  # add the desired point to the list (my_point1)
move_pb_add(my_point2, 100, 1, 50)  # add the desired point to the list (my_point2)

move_pb_run(200, 1)                 # Move to my_point2 using the previously set blending options.
                                    # At this time, the rotation value maintains the same value as the starting position.
```

#### 7.10 move_itpl_clear()

Initialize (Clear) the point list to be used in Move ITPL.

- Input :<br>
  None.

- Return :<br>
  None.

Example :

```
move_itpl_clear()   # Initialize (Clear) the point list to be used in Move ITPL.
```

#### 7.11 move_itpl_add(P, v)

This function adds the points used in Move ITPL to the list.

- Input :<br>
  P: Target TCP posture.<br>
  v: Speed (Unit: 𝒎𝒎/𝒔)

- Return :<br>
  None.

Example :

```
point my_point1 = {100,200,0,0,0,0}
point my_point2 = {150,0,50,0,0,0}

# add ‘my_point1’ to the Move ITPL list with speed=50mm
move_itpl_add(my_point1, 50)

# add ‘my_point2’ to the Move ITPL list with speed=100mm
move_itpl_add(my_point2, 100)
```

#### 7.12 move_itpl_run(v, v, v=1)

This function executes Move ITPL using the points added in move_itpl_add.

- Input :<br>
  v: Acceleration<br>
  v: Orientation/motion option

  - 0 = Intended (Follows the rotation value taught by the user)
  - 1 = Constant (Keep the rotation value of the starting position)
  - 2 = Reserved (N/A)
  - 3 = Smooth (Similar to Intended, but with a smooth rate of rotation change)
  - 4 = Reserved (N/A)
  - 5 = CA-Intended (CA mode Intended)
  - 6 = CA-Constant (CA mode Constant)
  - 7 = Reserved (N/A)
  - 8 = CA-Smooth (CA mode Smooth)<br>
    CA: Combined Arc mode

  v: Wait flag **(default: 1)**

  - 0 = No Wait (Non-Block).
  - 1 = Wait for the movement to complete (Block).

- Return :<br>
  None.

Example :

```
point my_point1 = {100,200,0,0,0,0}
point my_point2 = {150,0,50,0,0,0}

move_itpl_clear()               # Clear the Move ITPL list

move_itpl_add(my_point1, 50)    # add ‘my_point1’ to the Move ITPL list with speed = 50mm/s
move_itpl_add(my_point2, 100)   # add ‘my_point2’ to the Move ITPL list with speed = 100mm/s

move_itpl_run(200, 1)           # Move to ‘my_point2’ with move_itpl type movement.
                                # In this case, the rotation value taught by the user is used.
```

#### 7.13 move_pro_clear()

Initialize (Clear) the point list to be used in Move Pro.

- Input :<br>
  None.

- Return :<br>
  None.

Example :

```
# Initialize (Clear) the point list to be used in Move Pro.
move_pro_clear()
```

#### 7.14 move_pro_add(P, v, v, v)

This function adds the points used in Move Pro to the list.

- Input :<br>
  P: Target TCP posture<br>
  v: Speed (Unit: 𝒎𝒎/𝒔)<br>
  v: Point Type

  - 0 = Linear
  - 1 = Corner (Circle)
  - 2 = Blend(dist)
  - 3 = Blend (%)

  v: Blending value (used for type 2 and 3)

- Return :<br>
  None.

Example :

```
point my_point1 = {100,200,0,0,0,0}
point my_point2 = {150,0,50,0,0,0}

# add ‘my_point1’ to the Move Pro list with speed=50mm as Linear-Waypoint
move_pro_add(my_point1, 50, 0, 0)

# add ‘my_point2’ to the Move PB list with speed=100mm as Circular(Corner)-Waypoint
move_pro_add(my_point2, 100, 1, 0)
```

#### 7.15 move_pro_run(v, v, v=1)

This function executes Move Pro using the points added in move_pro_add.

- Input :<br>
  v: Acceleration (Unit: 𝒎𝒎/𝒔𝟐 )<br>
  v: Orientation option

  - 0 = Intended (Follows the rotation value taught by the user)
  - 1 = Constant (Keep the rotation value of the starting position)

  v: Wait flag (default: 1)

  - 0 = No Wait (Non-Block).
  - 1 = Wait for the movement to complete (Block).

- Return :<br>
  None.

Example :

```
point my_point1 = {100,200,0,0,0,0}
point my_point2 = {150,0,50,0,0,0}

# Clear the Move Pro list.
move_pro_clear()

# add the desired point to the list (my_point1) - Linear
move_pro_add(my_point1, 50, 0, 0)

# add the desired point to the list (my_point2) - Circular (Corner)
move_pro_add(my_point2, 100, 1, 0)

# add the desired point to the list - Linear
move_pro_add(pnt[150, 0, 400,0,0,0], 100, 0, 0)

move_pro_run(200, 0)
```

#### 7.16 move_xb_clear()

Initialize (Clear) the point list to be used in MoveXB (Blend L and J).

- Input :<br>
  None.

- Return :<br>
  None.

Example :

```
# Initialize (Clear) the point list to be used in MoveXB.
move_xb_clear()
```

#### 7.17 move_xb_add(P, v, v, v, v)

This function adds the points used in MoveXB to the list. (L-Type Movement)

- Input :<br>
  P: Target TCP posture<br>
  v: Speed (Unit: 𝒎𝒎/𝒔)<br>
  v: Acceleration (Unit: 𝒎𝒎/𝒔𝟐)<br>
  v: Blend Type (0 = Blend in %, 1 = Blend in mm)<br>
  v: Blending value (based on Blend Type % or mm)

- Return :<br>
  None.

Example :

```
move_xb_add(pnt[100,200,300,90,0,90], 100, 400, 0, 100)
```

#### 7.18 move_xb_add(J, v, v, v, v)

This function adds the points used in MoveXB to the list. (J-Type Movement)

- Input :<br>
  J: Target Joint posture<br>
  v: Speed (Unit: %)<br>
  v: Acceleration (Unit: %)<br>
  v: Blend Type (0 = Blend in %, 1 = Blend in mm)<br>
  v: Blending value (based on Blend Type % or mm)

- Return :<br>
  None.

Example :

```
move_xb_add(jnt[0,0, 90,0,90,0], 50, 40, 0, 100)
```

#### 7.19 move_xb_run(v, v=1)

This function executes MoveXB using the points added in move_xb_add.

- Input :<br>
  v: Trajectory Blending Option

  - 0 = Speed blending
  - 1 = Position blending

  v: Wait flag (default: 1)

  - 0 = No Wait (Non-Block).
  - 1 = Wait for the movement to complete (Block).

- Return :<br>
  None.

Example :

```
move_xb_clear()

move_xb_add(pnt[100,200,300,90,0,90], 100, 400, 0, 100)
move_xb_add(jnt[0,0, 90,0,90,0], 50, 40, 0, 100)

move_xb_run(0, 0)
```

#### 7.20 move_lc_clear()

Initialize (Clear) the point list to be used in Move LC.

- Input :<br>
  None.

- Return :<br>
  None.

Example :

```
move_lc_clear()   # Initialize (Clear) the point list to be used in Move LC.
```

#### 7.21 move_lc_add(P, v, v)

This function adds the points used in Move LC to the list.

- Input :<br>
  P: Target TCP posture.<br>
  v: Speed (Unit: 𝒎𝒎/𝒔)<br>
  v: Property (0 or 1)

  - 0 = Pass through linear motion
  - 1 = Pass through circular motion

- Return :<br>
  None.

Example :

```
point my_point1 = {100,200,0,0,0,0}
point my_point2 = {150,0,50,0,0,0}

move_lc_add(my_point1, 50, 1)   # add ‘my_point1’ to the Move LC list with velocity 50mm/s.
move_lc_add(my_point2, 100, 0)  # add ‘my_point2’ to the Move LC list with velocity 100mm/s.
```

#### 7.22 move_lc_run(v, v, v=1)

This function executes Move LC using the points added in move_lc_add.

- Input :<br>
  v: Acceleration<br>
  v: Orientation options

  - 0 = Intended (Follows the rotation value taught by the user)
  - 1 = Constant (Keep the rotation value of the starting position)
  - 2 = Reserved (N/A)
  - 3 = Smooth (Similar to Intended, but with a smooth rate of rotation change)
  - 4 = Reserved (N/A)

  v: Wait flag **(default: 1)**

  - 0 = No Wait (Non-Block).
  - 1 = Wait for the movement to complete (Block).

- Return :<br>
  None.

Example :

```
point my_point1 = {100,200,0,0,0,0}
point my_point2 = {150,0,50,0,0,0}

move_lc_clear()  # clear the Move LC list

move_lc_add(my_point1, 50, 1)   # add ‘my_point1’ to the list
move_lc_add(my_point2, 100, 0)  # add ‘my_point2’ to the list

move_lc_run(200, 1)   # Use the linear & circular motion to move up to my_point2.
                      # In this case, the rotation value taught by the user is used for the rotation value.
```

#### 7.23 move_lb_clear()

Initialize (Clear) the point list to be used in Move LB.

- Input :<br>
  None.

- Return :<br>
  None.

Example :

```
move_lb_clear()   # Initialize (Clear) the point list to be used in Move LB.
```

#### 7.24 move_lb_add(P, v)

This function adds the points used in Move LB to the list.

- Input :<br>
  P: Target TCP posture.<br>
  v: Blend distance (Unit (mm))<br>
  **※ Unlike Move PB, it does not support ratio blending.**

- Return :<br>
  None.

Example :

```
point my_point1 = {100,200,0,0,0,0}
point my_point2 = {150,0,50,0,0,0}

move_lb_add(my_point1, 20)  # add ‘my_point1’ to the Move LB list + blending distance = 20mm
move_lb_add(my_point2, 20)  # add ‘my_point2’ to the Move LB list + blending distance = 20mm
```

#### 7.25 move_lb_run(v, v, v, v=1)

This function executes Move LB using the points added in move_lb_add.

- Input :<br>
  v: Speed (Unit: 𝒎𝒎/𝒔)<br>
  v: Acceleration (Unit: 𝒎𝒎/𝒔𝟐)<br>
  v: Orientation options

  - 0 = Intended (Follows the rotation value taught by the user)
  - 1 = Constant (Keep the rotation value of the starting position)

  v: Wait flag **(default: 1)**

  - 0 = No Wait (Non-Block).
  - 1 = Wait for the movement to complete (Block).

- Return :<br>
  None.

Example :

```
point my_point1 = {100,200,0,0,0,0}
point my_point2 = {150,0,50,0,0,0}

move_lb_clear()  # clear Move LB list.

move_lb_add(my_point1, 20)   # add ‘my_point1’ to the Move LB list.
move_lb_add(my_point2, 20)   # add ‘my_point2’ to the Move LB list.

move_lb_run(50, 20, 1)  # Move to ‘my_point2’ using the previously set distance 20mm blending option.
                        # At this time, the rotation value maintains the same value as the starting position.
```

#### 7.26 move_c_points(P, P, v, v, v, v=1)

This function performs a movement that draws an arc through via & target points.

- Input :<br>
  P: via Point TCP posture<br>
  P: target Point TCP posture<br>
  v: Speed (Unit: 𝒎𝒎/𝒔)<br>
  v: Acceleration (Unit: 𝒎𝒎/𝒔𝟐)<br>
  v: Orientation options

  - 0 = Intended (Follows the rotation value taught by the user)
  - 1 = Constant (Keep the rotation value of the starting position)
  - 2 = Radial (Rotate the TCP according to the rotation of the circle)
  - 3 = Smooth (Similar to Intended, but with a smooth rate of rotation change)

  v: Wait flag **(default: 1)**

  - 0 = No Wait (Non-Block).
  - 1 = Wait for the movement to complete (Block).

- Return :<br>
  None.

Example :

```
point my_point1 = {100,100,300,0,90,0}
point my_point2 = {200,200,200,0,90,45}

move_c_points(my_point, my_point2, 50, 10, 2)
# Using ‘my_point1’ as a via-waypoint, it moves in an arc to ‘my_point2’.
# Based on the center point of the rotation, the orientation of the TCP is changed together.
```

#### 7.27 move_c_axis(P, v, v, v, v, v, v, v, v=1)

This function performs an arc movement using the rotation center and rotation axis information.

- Input :<br>
  P: Center of the rotation **(Unit: mm)**<br>
  v: rotation axis’s x axis vector<br>
  v: rotation axis’s y axis vector<br>
  v: rotation axis’s z axis vector<br>
  v: rotation angle **(Unit: deg)**<br>
  v: Speed **(Unit: 𝒎𝒎/𝒔)**<br>
  v: Acceleration **(Unit: 𝒎𝒎/𝒔𝟐)**<br>
  v: Rotation options

  - 0 = Intended **(rotate the same way as the Constant below.)**
  - 1 = Constant (Keep the rotation value of the starting position)
  - 2 = Radial (Rotate the TCP according to the rotation of the circle)

  v: Wait flag **(default: 1)**

  - 0 = No Wait (Non-Block).
  - 1 = Wait for the movement to complete (Block).

- Return :<br>
  None.

Example :

```
point my_point = {200,200,200,0,0,0}

move_c_axis(my_point, 1, 0, 0, 180, 50, 10, 2)
# Rotate 180 degrees around the x-axis. Center of rotation is ‘my_point’.
# Based on the center point of the rotation, the orientation of the TCP is changed together.
```

#### 7.28 move_jb_clear()

Initialize (Clear) the point list to be used in Move JB.

- Input :<br>
  None.

- Return :<br>
  None.

Example :

```
move_jb_clear()   # Initialize (Clear) the point list to be used in Move JB.
```

#### 7.29 move_jb_add(J)

This function adds the joint-angles used in Move JB to the list.

- Input :<br>
  J: Target joint angles

- Return :<br>
  None.

Example :

```
jnt my_joint1 = {0, 0,0,0,0,0}
jnt my_joint2 = {90,30,15,0,0,0}

move_jb_add(my_joint1)  # add ‘my_joint1’ to the Move JB list.
move_jb_add(my_joint2)  # add ‘my_joint2’ to the Move JB list.
```

#### 7.30 move_jb_run(v, v, v=1)

This function executes Move JB using the points added in move_jb_add.

- Input :<br>
  v: Speed (𝒅𝒆𝒈/𝒔)<br>
  v: Acceleration (𝒅𝒆𝒈/𝒔𝟐)<br>
  v: Wait flag **(default: 1)**

  - 0 = No Wait (Non-Block).
  - 1 = Wait for the movement to complete (Block).

- Return :<br>
  None.

Example :

```
jnt my_joint1 = {0, 0,0,0,0,0}
jnt my_joint2 = {90,30,15,0,0,0}

move_jb_clear()         # Clear the Move JB list.

move_jb_add(my_joint1)  # add ‘my_joint1’ to the Move JB list.
move_jb_add(my_joint2)  # add ‘my_joint2’ to the Move JB list.

move_jb_run(50, 20)     # Moves smoothly without stopping to the previously set joint angles.
```

#### 7.31 move_jb2_clear()

Initialize (Clear) the point list to be used in Move JB2 (Time-based Blending).

- Input :<br>
  None.

- Return :<br>
  None.

Example :

```
# Initialize (Clear) the point list to be used in Move JB2.
move_jb2_clear()
```

#### 7.32 move_jb2_add(J, v, v, 0, v)

This function adds the joint-angles used in Move JB2 to the list.

- Input :<br>
  J: Target joint angles<br>
  v: Speed (𝒅𝒆𝒈/𝒔)<br>
  v: Acceleration (𝒅𝒆𝒈/𝒔𝟐)<br>
  0: dummy<br>
  v: Blending Rate (%)

- Return :<br>
  None.

Example :

```
jnt my_joint1 = {0, 0,0,0,0,0}
jnt my_joint2 = {90,30,15,0,0,0}

# add ‘my_joint1’ to the Move JB2 list. (with 50% blend rate)
move_jb2_add(my_joint1, 60, 80, 0, 50)

# add ‘my_joint2’ to the Move JB2 list. (with 100% blend rate)
move_jb2_add(my_joint2, 90, 100, 0, 100)
```

#### 7.33 move_jb2_run( v=1)

This function executes Move JB2 using the points added in move_jb_add2.

- Input :<br>
  v: Wait flag (default: 1)

  - 0 = No Wait (Non-Block).
  - 1 = Wait for the movement to complete (Block).

- Return :<br>
  None.

Example :

```
jnt my_joint1 = {0, 0,0,0,0,0}
jnt my_joint2 = {90,30,15,0,0,0}

# Clear the Move JB2 list.
move_jb2_clear()

# add ‘my_joint1’ to the Move JB2 list.
move_jb2_add(my_joint1, 10, 20, 0, 100)
# add ‘my_joint2’ to the Move JB2 list.
move_jb2_add(my_joint2, 60, 80, 0, 80)

# Moves smoothly without stopping to the previously set joint angles.
move_jb2_run()
```

#### 7.34 Servo J

move_servo_j(jnt[j0, j1, j2, j3, j4, j5], t1, t2, gain, alpha)

- j0 ~ j5 : Desired Joint angle in degree (-360 ~ 360)
- t1 : Time to arrive at target point (t1 >= 0.002)
- t2 : Time to maintain the motion after arrival (0.02 < t2 < 0.2)
- gain : Velocity tracking rate (gain > 0)
- alpha : low-pass-filter gain. Smaller gain makes the motion smoother (0 < alpha < 1)

#### 7.35 Servo L

move_servo_l(pnt[x, y, z, rx, ry, rz], t1, t2, gain, alpha)

- x,y,z,rx,ry,rz : Desired Cartesian posture in mm,deg unit (ZY'X'' Euler)
- t1 : Time to arrive at target point (t1 >= 0.002)
- t2 : Time to maintain the motion after arrival (0.02 < t2 < 0.2)
- gain : Velocity tracking rate (gain > 0)
- alpha : low-pass-filter gain. Smaller gain makes the motion smoother (0 < alpha < 1)

#### 7.36 Servo T

move_servo_t(jnt[jt0, jt1, jt2, jt3, jt4, jt5], t1, t2, mode)

- jt0 ~ jt5 : Torque values in Nm unit
- t1 : Time to arrive at target point (t1 >= 0.002)
- t2 : Time to maintain the motion after arrival (0.02 < t2 < 0.3)
- mode :<br>
  0 = Absolute mode : Control torque = Input torque<br>
  1 = Relative mode 1 : Control torque = Input torque + Robot arm weight<br>
  2 = Relative mode 2 : Control torque = Input torque + Friction compensation 30%<br>
  3 = Relative mode 3 : Control torque = Input code + Robot arm weight + Friction compensation 30%

#### 7.37 Speed J

move_speed_j(jnt[dj0, dj1, dj2, dj3, dj4, dj5], t1, t2, gain, alpha)

- dj0 ~ dj5 : Desired Joint angle speed in degree / sec(deg/s)
- t1 : Time to arrive at target point (t1 >= 0.002)
- t2 : Time to maintain the motion after arrival (0.02 < t2 < 0.2)
- gain : Speed tracking rate (gain = 1)
- alpha : Low-pass-filter gain. Smaller gain makes the motion smoother (0 < alpha < 1)

#### 7.38 Speed L

move_speed_l(pnt[dx, dy, dz, drx, dry, drz], t1, t2, gain, alpha)

- dx,dy,dz,drx,dry,drz : Desired Cartesian posture speed in mm/s, deg/s unit (ZY'X'' Euler)
- t1 : Time to arrive at target point (t1 >= 0.002)
- t2 : Time to maintain the motion after arrival (0.02 < t2 < 0.2)
- gain : Speed tracking rate (gain > 0)
- alpha : low-pass-filter gain. Smaller gain makes the motion smoother (0 < alpha < 1)

#### 7.39 Jog-L

jog_robot_l(mode, x speed, y speed, z speed, rx speed, ry speed, rz speed)<br>
jog_robot_l(mode, x speed, y speed, z speed, rx speed, ry speed, rz speed, acc_rate, dec_rate)

- Mode<br>
  0: Stop<br>
  1: Global coordinate system<br>
  2: Tool coordinate system<br>
  3 ~ 5: User coordinate system 0~2
- x,y,z speed<br>
  mm/s unit (-250 ~ 250)
- rx,ry,rz speed<br>
  deg/s unit (-45 ~ 45)
- Acceleration/deceleration rate<br>
  Default value 1.0<br>
  Range: 0~10.0<br>
  Larger value means faster acceleration/deceleration, smaller value means slower acceleration/deceleration

#### 7.40 Jog-J

jog_robot_j(mode, 0 speed, 1 speed, 2 speed, 3 speed, 4 speed, 5 speed)<br>
jog_robot_j(mode, 0 speed, 1 speed, 2 speed, 3 speed, 4 speed, 5 speed, acc_rate, dec_rate)

- Mode<br>
  0: Stop<br>
  1: Robot arm joint<br>
  2: Additional axis
- Speed 0~5<br>
  Unit: deg/s (depending on the speed limit range of each axis)
- Acceleration/deceleration rate<br>
  Default 1.0<br>
  Range: 0~10.0<br>
  If it is large, it accelerates/decelerates faster, if it is small, it accelerates/decelerates slowly

### 8. Grippers and Sensors

<br>

#### 8.1 gripper_rtq_hande_init(v)

Robotiq - Hand-E gripper initialization.

- Input :<br>
  v: Connection port for the Gripper/Sensor.

  - 0 = RS485 of the Tool Flange board.
  - 1 = RS485 of the Control Box.

- Return :<br>
  None.

Example :

```
gripper_rtq_hande_init(1)  # When the gripper communication line is connected to the control box
```

#### 8.2 gripper_rtq_hande_reset(v)

Robotiq - Hand-E gripper reset.

- Input :<br>
  v: Connection port for the Gripper/Sensor.

  - 0 = RS485 of the Tool Flange board.
  - 1 = RS485 of the Control Box.

- Return :<br>
  None.

Example :

```
gripper_rtq_hande_reset(1)  # When the gripper communication line is connected to the control box
```

#### 8.3 gripper_rtq_hande_go(v, v, v, v)

Robotiq - Hand-E gripper movement.

- Input :<br>
  v: Connection port for the Gripper/Sensor.

  - 0 = RS485 of the Tool Flange board.
  - 1 = RS485 of the Control Box.

  v: Target position % (Range: 0~100)<br>
  v: Target Velocity % (Range: 0~100)<br>
  v: Target Force % (Range: 0~100)

- Return :<br>
  None.

Example :

```
gripper_rtq_hande_go(1, 100, 50, 100)
# Move the gripper connected to the control box to position 100%. (with speed 50%, force 100%)
```

#### 8.4 gripper_rtq_2f85_init(v)

Robotiq – 2F85 gripper initialization.

- Input :<br>
  v: Connection port for the Gripper/Sensor.

  - 0 = RS485 of the Tool Flange board.
  - 1 = RS485 of the Control Box.

- Return :<br>
  None.

Example :

```
gripper_rtq_2f85_init(1)  # When the gripper communication line is connected to the control box
```

#### 8.5 gripper_rtq_2f85_reset(v)

Robotiq – 2F85 gripper reset.

- Input :<br>
  v: Connection port for the Gripper/Sensor.

  - 0 = RS485 of the Tool Flange board.
  - 1 = RS485 of the Control Box.

- Return :<br>
  None.

Example :

```
gripper_rtq_2f85_reset(1)  # When the gripper communication line is connected to the control box
```

#### 8.6 gripper_rtq_2f85_go(v, v, v, v)

Robotiq – 2F85 gripper movement.

- Input :<br>
  v: Connection port for the Gripper/Sensor.

  - 0 = RS485 of the Tool Flange board.
  - 1 = RS485 of the Control Box.

  v: Target position % (Range: 0~100)<br>
  v: Target Velocity % (Range: 0~100)<br>
  v: Target Force % (Range: 0~100)

- Return :<br>
  None.

Example :

```
gripper_rtq_2f85_go(1, 100, 50, 100)
# Move the gripper connected to the control box to position 100%. (with speed 50%, force 100%)
```

#### 8.7 gripper_rtq_2f140_init(v)

Robotiq – 2F140 gripper initialization.

- Input :<br>
  v: Connection port for the Gripper/Sensor.

  - 0 = RS485 of the Tool Flange board.
  - 1 = RS485 of the Control Box.

- Return :<br>
  None.

Example :

```
gripper_rtq_2f140_init(1)   # When the gripper communication line is connected to the control box
```

#### 8.8 gripper_rtq_2f140_reset(v)

Robotiq – 2F140 gripper reset.

- Input :<br>
  v: Connection port for the Gripper/Sensor.

  - 0 = RS485 of the Tool Flange board.
  - 1 = RS485 of the Control Box.

- Return :<br>
  None.

Example :

```
gripper_rtq_2f140_reset(1)   # When the gripper communication line is connected to the control box
```

#### 8.9 gripper_rtq_2f140_go(v, v, v, v)

Robotiq – 2F140 gripper movement.

- Input :<br>
  v: Connection port for the Gripper/Sensor.

  - 0 = RS485 of the Tool Flange board.
  - 1 = RS485 of the Control Box.

  v: Target position % (Range: 0~100)<br>
  v: Target Velocity % (Range: 0~100)<br>
  v: Target Force % (Range: 0~100)

- Return :<br>
  None.

Example :

```
gripper_rtq_2f140_go(1, 100, 50, 100)
# Move the gripper connected to the control box to position 100%. (with speed 50%, force 100%)
```

#### 8.10 gripper_rtq_epick_reset(v)

Robotiq – E-pick gripper reset.

- Input :<br>
  v: Connection port for the Gripper/Sensor.

  - 0 = RS485 of the Tool Flange board.
  - 1 = RS485 of the Control Box.

- Return :<br>
  None.

Example :

```
gripper_rtq_epick_reset(1)  # When the gripper communication line is connected to the control box
```

#### 8.11 gripper_rtq_epick_suction(v)

Robotiq – E-pick gripper suction.

- Input :<br>
  v: Connection port for the Gripper/Sensor.

  - 0 = RS485 of the Tool Flange board.
  - 1 = RS485 of the Control Box.

- Return :<br>
  None.

Example :

```
gripper_rtq_epick_suction(1)  # When the gripper communication line is connected to the control box
```

#### 8.12 gripper_rtq_epick_release(v)

Robotiq – E-pick gripper release.

- Input :<br>
  v: Connection port for the Gripper/Sensor.

  - 0 = RS485 of the Tool Flange board.
  - 1 = RS485 of the Control Box.

- Return :<br>
  None.

Example :

```
gripper_rtq_epick_release(1)  # When the gripper communication line is connected to the control box
```

#### 8.13 gripper_rtq_epick_hold(v)

Robotiq – E-pick gripper hold.

- Input :<br>
  v: Connection port for the Gripper/Sensor.

  - 0 = RS485 of the Tool Flange board.
  - 1 = RS485 of the Control Box.

- Return :<br>
  None.

Example :

```
gripper_rtq_epick_hold(1)  # When the gripper communication line is connected to the control box
```

#### 8.14 gripper_rts_rhp12rn_init(v)

Robotis – RHP12RN gripper initialization.

- Input :<br>
  v: Connection port for the Gripper/Sensor.

  - 0 = RS485 of the Tool Flange board.
  - 1 = RS485 of the Control Box.

- Return :<br>
  None.

Example :

```
gripper_rts_rhp12rn_init(1)  # When the gripper communication line is connected to the control box
```

#### 8.15 gripper_rts_rhp12rn_go(v, v)

Robotis – RHP12RN gripper movement.

- Input :<br>
  v: Connection port for the Gripper/Sensor.

  - 0 = RS485 of the Tool Flange board.
  - 1 = RS485 of the Control Box.

  v: Target position % (Range: 0~100)

- Return :<br>
  None.

Example :

```
gripper_rts_rhp12rn_go(1, 100)  # Move the gripper connected to the control box to 100% position.
```

#### 8.16 gripper_jrt_jegb485_init(v)

JRT – JEGB485 gripper initialization.

- Input :<br>
  v: Connection port for the Gripper/Sensor.

  - 0 = RS485 of the Tool Flange board.
  - 1 = RS485 of the Control Box.

- Return :<br>
  None.

Example :

```
gripper_jrt_jegb485_init(1)  # When the gripper communication line is connected to the control box
```

#### 8.17 gripper_jrt_jegb485_go(v, v)

JRT – JEGB485 gripper movement.

- Input :<br>
  v: Connection port for the Gripper/Sensor.

  - 0 = RS485 of the Tool Flange board.
  - 1 = RS485 of the Control Box.

  v: Target position % (Range: 0~100)

- Return :<br>
  None.

Example :

```
gripper_jrt_jegb485_go(1, 100)  # Move the gripper connected to the control box to 100% position.
```

#### 8.18 gripper_jrt_jegb485_go(v, v, v, v)

JRT – JEGB485 gripper movement with advanced setting.

- Input :<br>
  v: Connection port for the Gripper/Sensor.

  - 0 = RS485 of the Tool Flange board.
  - 1 = RS485 of the Control Box.

  v: Target position % (Range: 0~100)<br>
  v: Target Velocity % (Range: 0~100)<br>
  v: Target acceleration % (Range: 0~100)

- Return :<br>
  None.

Example :

```
gripper_jrt_jegb485_go(1, 100, 50, 50)
# Move the gripper connected to the control box to 100% position. (with speed & acceleration 50%)
```

#### 8.19 gripper_jrt_jegb485_set(v, v, v, v)

JRT – JEGB485 gripper setting.

- Input :<br>
  v: Connection port for the Gripper/Sensor.

  - 0 = RS485 of the Tool Flange board.
  - 1 = RS485 of the Control Box.

  v: Target Velocity % (Range: 0~100)<br>
  v: Target acceleration % (Range: 0~100)<br>
  v: Target Force % (Range: 0~100)

- Return :<br>
  None.

Example :

```
gripper_jrt_jegb485_set(1, 50, 30, 20)
# Set the motion properties speed/acceleration/force of the gripper connected to the control box to 50, 30, and 20%, respectively
```

#### 8.20 gripper_jrt_jegb4140_init(v)

JRT – JEGB4140 gripper initialization.

- Input :<br>
  v: Connection port for the Gripper/Sensor.

  - 0 = RS485 of the Tool Flange board.
  - 1 = RS485 of the Control Box.

- Return :<br>
  None.

Example :

```
gripper_jrt_jegb4140_init(1)  # When the gripper communication line is connected to the control box
```

#### 8.21 gripper_jrt_jegb4140_go(v, v)

JRT – JEGB4140 gripper movement.

- Input :<br>
  v: Connection port for the Gripper/Sensor.

  - 0 = RS485 of the Tool Flange board.
  - 1 = RS485 of the Control Box.

  v: Target position % (Range: 0~100)

- Return :<br>
  None.

Example :

```
gripper_jrt_jegb4140_go(1, 100)  # Move the gripper connected to the control box to 100% position.
```

#### 8.22 gripper_jrt_jegb4140_go(v, v, v, v)

JRT – JEGB4140 gripper movement with advanced setting.

- Input :<br>
  v: Connection port for the Gripper/Sensor.

  - 0 = RS485 of the Tool Flange board.
  - 1 = RS485 of the Control Box.

  v: Target position % (Range: 0~100)<br>
  v: Target Velocity % (Range: 0~100)<br>
  v: Target acceleration % (Range: 0~100)

- Return :<br>
  None.

Example :

```
gripper_jrt_jegb4140_go(1, 100, 50, 50)
# Move the gripper connected to the control box to 100% position. (with speed & acceleration 50%)
```

#### 8.23 gripper_jrt_jegb4140_set(v, v, v, v)

JRT – JEGB4140 gripper setting.

- Input :<br>
  v: Connection port for the Gripper/Sensor.

  - 0 = RS485 of the Tool Flange board.
  - 1 = RS485 of the Control Box.

  v: Target Velocity % (Range: 0~100)<br>
  v: Target acceleration % (Range: 0~100)<br>
  v: Target Force % (Range: 0~100)

- Return :<br>
  None.

Example :

```
gripper_jrt_jegb4140_set(1, 50, 30, 20)
# Set the motion properties speed/acceleration/force of the gripper connected to the control box to 50, 30, and 20%, respectively
```

#### 8.24 gripper_dh_ag95_init(v)

DH Robotics – AG95 gripper initialization.

- Input :<br>
  v: Connection port for the Gripper/Sensor.

  - 0 = RS485 of the Tool Flange board.
  - 1 = RS485 of the Control Box.

- Return :<br>
  None.

Example :

```
gripper_dh_ag95_init(1)  # When the gripper communication line is connected to the control box
```

#### 8.25 gripper_dh_ag95_gripforce(v, v)

DH Robotics – AG95 gripper grip-force setting.

- Input :<br>
  v: Connection port for the Gripper/Sensor.

  - 0 = RS485 of the Tool Flange board.
  - 1 = RS485 of the Control Box.

  v: Gripping force % (20 ~ 100 %)

- Return :<br>
  None.

Example :

```
gripper_dh_ag95_gripforce(1, 30)
# Set the gripping force limit of the gripper connected to the control box to 30%.
```

#### 8.26 gripper_dh_ag95_openforce(v, v)

DH Robotics – AG95 gripper open-force setting.

- Input :<br>
  v: Connection port for the Gripper/Sensor.

  - 0 = RS485 of the Tool Flange board.
  - 1 = RS485 of the Control Box. or USB

  v: Opening force % (20 ~ 100 %)

- Return :<br>
  None.

Example :

```
gripper_dh_ag95_openforce(1, 70)
# Set the opening force limit of the gripper connected to the control box to 70%.
```

#### 8.27 gripper_dh_ag95_go(v, v)

DH Robotics – AG95 gripper movement.

- Input :<br>
  v: Connection port for the Gripper/Sensor.

  - 0 = RS485 of the Tool Flange board.
  - 1 = RS485 of the Control Box. or USB

  v: Target position % (0 ~ 100 %)

- Return :<br>
  None.

Example :

```
gripper_dh_ag95_go(1, 50)   # Move the gripper connected to the control box to the 50% position.
```

#### 8.28 gripper_setech_cmd(v)

Setech –NutRunner

- Input :<br>
  v: Command number

  - 0 = Stop
  - 1 = Reset
  - 2 = Quick Start
  - 3 = First stage
  - 4 = Second stage
  - 5 = Reverse

- Return :<br>
  None.

Example :

```
gripper_setech_cmd(#)
```

### 9. Communication Functions

<br>

#### 9.1 mc_comm_set_bit(v, S, v, v=1)

It sends the desired bit data (1 bit) to the desired address value of the PLC equipment. (via MC Protocol provided by Mitsubishi)

- Input :<br>
  v: Index of Socket-Handler. (0 ~ 4)<br>
  S: address of the PLC (string type)

  - address value is in the form of D...., X...., etc.<br>

  v: Desired bit data (0 or 1)<br>
  v: Handshake signal Timeout **(Unit: second) (default: 1)**

- Return :<br>
  v: Whether or not a valid (Handshake) signal is received from the PLC
  - 0: Receive Fail
  - 1: Receive Success

Example :

```
str target_address = “D2000”
var target_write_value = 1
var is_tx_success = mc_comm_set_bit(0, target_address, target_write_value)
# Using socket 0, send value 1 to PLC address D2000.

# Same meaning can be written as below.
var is_tx_success = mc_comm_set_bit(0, “D2000”, 1)
```

#### 9.2 mc_comm_set_word(v, S, v, v=1)

It sends the desired word data (16 bits) to the desired address value of the PLC equipment. (via MC Protocol provided by Mitsubishi)

- Input :<br>
  v: Index of Socket-Handler. (0 ~ 4)<br>
  S: address of the PLC (string type)

  - address value is in the form of D...., X...., etc.<br>

  v: Desired word data<br>
  v: Handshake signal Timeout **(Unit: second) (default: 1)**

- Return :<br>
  v: Whether or not a valid (Handshake) signal is received from the PLC
  - 0: Receive Fail
  - 1: Receive Success

Example :

```
str target_address = “D2000”
var target_write_value = 150
var is_tx_success = mc_comm_set_word(0, target_address, target_write_value)
# Using socket 0, send value 150 to PLC address D2000.

# Same meaning can be written as below.
var is_tx_success = mc_comm_set_word(0, “D2000”, 150)
```

#### 9.3 mc_comm_req_bit(v, S, v=1)

It reads the desired bit data (1 bit) from the desired address value of the PLC equipment. (via MC Protocol provided by Mitsubishi)

- Input :<br>
  v: Index of Socket-Handler. (0 ~ 4)<br>
  S: address of the PLC (string type)

  - address value is in the form of D...., X...., etc.<br>

  v: Handshake signal Timeout **(Unit: second) (default: 1)**

- Return :<br>
  v: Bit data value received from PLC.
  - -1: Receive Fail
  - 0 or 1: Received bit value

Example :

```
str target_address = “D2000”
var rx_data = mc_comm_req_bit(0, target_address)
# Using socket 0, read bit value from the PLC address D2000.

# Same meaning can be written as below.
var rx_data = mc_comm_req_bit(0, “D2000”)
```

#### 9.4 mc_comm_req_word(v, S, v=1)

It reads the desired word data (16 bits) from the desired address value of the PLC equipment. (via MC Protocol provided by Mitsubishi)

- Input :<br>
  v: Index of Socket-Handler. (0~4)<br>
  S: address of the PLC (string type)

  - address value is in the form of D...., X...., etc.<br>

  v: Handshake signal Timeout **(Unit: second) (default: 1)**

- Return :<br>
  v: Word data value received from PLC.
  - -1: Receive Fail

Example :

```
str target_address = “D2000”
var rx_data = mc_comm_req_word(0, target_address)
# Using socket 0, read word value from the PLC address D2000.

# Same meaning can be written as below.
var rx_data = mc_comm_req_word(0, “D2000”)
```

#### 9.5 socket_connect(v, S, v)

Opens a socket port for TCP/IP communication and connects to the server.

- Input :<br>
  v: Index of Socket-Handler. (0 ~ 4)<br>
  S: IP address of the target server (string type)

  - i.e. ”192.168.0.10”

- Return :<br>
  None.

Example :

```
socket_connect(0, “192.168.0.10”, 5678)
# Using socket 0, connect to port 5678 of the server address “192.168.0.10”
```

#### 9.6 socket_disconnect(v)

Closes the socket port for TCP/IP communication and disconnects.

- Input :<br>
  v: Index of Socket-Handler. (0 ~ 4)

- Return :<br>
  None.

Example :

```
socket_disconnect(0)    # Disconnect opened communication on socket 0 and exit.
```

#### 9.7 socket_send_str(v, S)

Transmits a string to the server through TCP/IP communication.

- Input :<br>
  v: Index of Socket-Handler. (0 ~ 4)<br>
  S: Target string for the transmission.

- Return :<br>
  None.

Example :

```
socket_send_str(0, “hello world”)   # Send “hello world” to the server where socket 0 is connected.

var my_var = 1234
socket_send_str(0, to_str(my_var))  # Transmit the variable value as a string to the server connected to socket 0
```

#### 9.8 socket_read_str(v)

Returns the string received from the server through TCP/IP communication.

- Input :<br>
  v: Index of Socket-Handler. (0 ~ 4)

- Return :<br>
  S: Received string from the server

Example :

```
str receive_str = socket_read_str(0)
if (SD_SOCKET_LAST_READ_0){
    debug “receive_str”
}

# Receives a string from the server connected to socket 0, and if there is a received string, it is displayed in the alarm window.
# When the server sends “rainbow”, “rainbow” is stored in the receivce_str string variable.
```

#### 9.9 socket_read_var(v)

If the string received from the server through TCP/IP communication is in the form of a number, it is returned as a number.

- Input :<br>
  v: Index of Socket-Handler. (0 ~ 4)

- Return :<br>
  v: Received number from the server

Example :

```
var receive_var = socket_read_var(0)
if (SD_SOCKET_LAST_READ_0){
    debug “receive_var”
}

# Receives a string from the server connected to socket 0, and converts the received string into a numeric variable. And if there is a reception, it is displayed in the alarm window.
# When the server sends “123.456”, 123.456 is stored in the receivce_var.
```

#### 9.10 hmi_set_one_word (v, v, v, v=1)

It sends the desired word data (16 bits) to the desired address value of the HMI equipment. (via Memory-Link by Proface/TOP)

- Input :<br>
  v: Index of Socket-Handler. (0 ~ 4)<br>
  v: HMI address value (0 ~ 9999)<br>
  v: desired value for transmission (variable)<br>
  v: Handshake signal Timeout **(Unit: second) (default: 1)**

- Return :<br>
  v: Whether or not a valid (Handshake) signal is received from the HMI.
  - 0: Receive Fail
  - 1: Receive Success

Example :

```
var target_address = 6000
var target_write_value = 150
var is_tx_success = hmi_set_one_word(0, target_address, target_write_value)
# Using socket 0, send the value 150 to HMI address 6000.

# Same meaning can be written as below.
var is_tx_success = hmi_set_one_word(0, 6000, 150)
```

#### 9.11 hmi_set_multi_word (v, v, v, v=1, A)

It sends the desired word data-s (16 bits x desired length) to the desired address area of the HMI equipment. (via Memory-Link by Proface/TOP)

- Input :<br>
  v: Index of Socket-Handler. (0 ~ 4)<br>
  v: starting HMI address value (0 ~ 9999) 시작 값<br>
  v: Number of data to send to HMI device (Max 20)<br>
  v: Handshake signal Timeout **(Unit: second) (default: 1)**
  A: Array name to send

- Return :<br>
  v: Whether or not a valid (Handshake) signal is received from the HMI.
  - 0: Receive Fail
  - 1: Receive Success

Example :

```
arr my_arr = {150, 160, 200, 210}
var is_tx_success = hmi_set_multi_word(0, 6000, 4, my_arr)

# Using socket 0, send the 4 values (150, 160, 200, 210) stored in the array to the 4 address values (6000 ~ 6003) of the HMI.
```

#### 9.12 hmi_req_one_word (v, v, v=1)

It reads the desired word data (16 bits) from the desired address value of the HMI equipment. (via Memory-Link provided by Proface/TOP)

- Input :<br>
  v: Index of Socket-Handler. (0 ~ 4)<br>
  v: HMI address value (0 ~ 9999)<br>
  v: Handshake signal Timeout **(Unit: second) (default: 1)**

- Return :<br>
  v: Value stored in the corresponding address value of the HMI

Example :

```
var my_num
my_num = hmi_req_one_word(0, 7000)
# Using socket 0, read the value of HMI address 7000 and store it in the variable my_num.
```

#### 9.13 hmi_req_multi_word (v, v, v, v=1)

It reads the desired word data-s (16 bits x desired length) from the desired address area of the HMI equipment. (via Memory-Link provided by Proface/TOP)

- Input :<br>
  v: Index of Socket-Handler. (0 ~ 4)<br>
  v: starting HMI address value (0 ~ 9999)<br>
  v: Number of data to read from HMI device (Max 20)<br>
  v: Handshake signal Timeout **(Unit: second) (default: 1)**

- Return :<br>
  A: Handshake signal Timeout (array)

Example :

```
arr my_array
my_array = hmi_req_multi_word(0, 7000, 10)
# Using socket 0, read 10 values (address values 7000~7009) from HMI and store them in the array ‘my_array’.
```

### 10. Vector

A vector refers to a dynamically allocated variable type. An array of unspecified length.<br>

Often, in languages like C++, they are declared in the form vector\<float\> or vector\<string\>.<br>
Rainbow Robotics' script system supports both numeric vectors and string vectors, each corresponding to the C++ standard, vector\<float\> and vector\<string\>.

#### 10.1 Number Vector

```
# The declaration uses the declarator vec.
vec hello_world

# Initialization is possible at the same time as declaration.
vec hello_world = {10, 20, 30}

# The length of the vector can be obtained with the vec_length (or vec_leng) function.
# In this case, the input argument of the function is the name of the vector.
var num = vec_length( hello_world)

# To add an argument to a vector, use the vec_push (or vec_push_back, or vec_add) function.
# In this case, the input argument of the function is the name of vector and the number to be added.
vec_push( hello_world, 40)
vec_push( hello_world, 50)

# Vector can be cleared through the vec_clear (or vec_clr) function.
# In this case, the input argument of the function is the name of the vector.
vec_clear(hello_world)

# If you want to refer to the value stored in the vector, use the vec_at function.
# In this case, the input parameters of the function are the name of the vector and the index to be referenced.
# Index references are also possible through the [] operator.
var value = vec_at(hello_world, 2)
var value = hello_world[2]
```

Example :

```
vec mung = {10, 20}             # declare vector. Name = mung, initial values are 10 and 20
var my_num = vec_length(mung)   # my_num = 2 (length of the vector)
vec_push( mung, 30)             # Add the number 30 to the end of the mung vector
vec_push( mung, 40)             # Add the number 40 to the end of the mung vector
var my_num = vec_length(mung)   # my_num = 4 (length of the vector)
var a = vec_at(mung, 1)         # a = 20 (value saved in the index 1 of the vector mung)
var b = mung[3]                 # b = 40 (value saved in the index 3 of the vector mung)
vec_clear(mung)                 # clear the vector mung
var my_num = vec_length(mung)   # my_num = 0 (length of the vector)
```

#### 10.2 String Vector

For string vectors, the usage of functions is the same as for numeric vectors.<br>

However, due to system memory limitations, only predefined names can be used for string vectors.<br>
There are 10 string vectors defined in the system as shown below. Users can use the string vector with the name immediately below without having to declare it.<br>

Predefined string vectors : **str_vec_0, str_vec_1, … , str_vec_9**<br>

The functions used for vectors are the same as for numeric vectors introduced in the previous chapter.

Example :

```
vec_push(str_vec_3, “hello”)        # add “hello” to the string vector ‘str_vec_3’
vec_push(str_vec_3, “world”)        # add “world” to the string vector ‘str_vec_3’
var my_num = vec_length(str_vec_3)  # my_num = 2 (length of the vector)
vec_push(str_vec_3, “aa”)           # add “aa” to the string vector ‘str_vec_3’
vec_push(str_vec_3, “bb”)           # add “bb” to the string vector ‘str_vec_3’
var my_num = vec_length(str_vec_3)  # my_num = 4 (length of the vector)
str sa = vec_at(str_vec_3, 1)       # “world” is stored in ‘sa’ with reference to str_vec_3 vector index 1.
str sb = str_vec_3[3]               # “bb” is stored in ‘sb’ with reference to str_vec_3 vector index 3.
vec_clear(str_vec_3)                # clear the string vector ‘str_vec_3’
var my_num = vec_length(str_vec_3)  # my_num = 0 (length of the vector)
```
