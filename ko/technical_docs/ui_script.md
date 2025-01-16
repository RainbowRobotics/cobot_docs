---
layout: doc
outline: deep
---

# RB UI Script v6.10

### 1. 변수 선언 및 기초

레인보우 로보틱스의 UI Script 에서는 아래와 같은 형태의 데이터 형을 지원합니다.

- **var** : 단일 숫자를 저장합니다.
- **arr** : 배열을 저장합니다. (최대 길이 20 개)
- **str** : 문자열을 저장합니다.
- **point, pnt** : 자세 정보(x, y, z, Rx, Ry, Rz)를 저장합니다.
- **joint, jnt** : 관절 정보(J0, J1, J2, J3, J4, J5)를 저장합니다.
- **vec** : 숫자를 관리하는 벡터 입니다.<br>
  (숫자 / 문자열 벡터는 **10장**을 별도 참고하세요.)

변수 선언의 예시는 아래와 같습니다.

#### 1.1 var

Example :

```
var my_val          # 초기화 없이 할당합니다
var my_val = 1      # 초기화 하여 할당합니다
```

#### 1.2 arr

Example :

```
arr my_arr              # 초기화 없이 할당합니다
arr my_arr = {1, 2, 3}  # 초기화 하여 할당합니다
```

#### 1.3 str

Example :

```
str my_str              # 초기화 없이 할당합니다
str my_str = “Hello”    # 초기화 하여 할당합니다
```

#### 1.4 point, pnt

Example :

```
point my_point                                # 초기화 없이 할당합니다
point my_point = {100, 200, 300, 90, 0, 90}   # 초기화 하여 할당합니다
pnt my_point = {50, 100, 100, 90, 0, 0}
```

#### 1.5 joint, jnt

Example :

```
joint my_joint                          # 초기화 없이 할당합니다
joint my_joint = {0, 0, 0, 90, 0, 0}    # 초기화 하여 할당합니다
jnt my_joint = {30,0,0,90,0,0}
```

#### 1.6 약어

본 문서에서 사용하는 약어는 아래와 같습니다.

<div class="center-align th-align">
   <table>
      <tr>
         <th>약어</th>
         <th>의미</th>
      </tr>
      <tr>
         <th>v</th>
         <td>var 타입 변수 또는 상수를 지칭</td>
      </tr>
      <tr>
         <th>a</th>
         <td>arr 타입 변수를 지칭</td>
      </tr>
      <tr>
         <th>s</th>
         <td>str 타입 변수 또는 문자열을 지칭</td>
      </tr>
      <tr>
         <th>P</th>
         <td>point 타입 변수를 지칭</td>
      </tr>
      <tr>
         <th>J</th>
         <td>joint 타입 변수를 지칭</td>
      </tr>
   </table>
</div>

#### 1.7 point 타입과 joint 타입

앞서 설명한 point 타입과 joint 타입은 임시 변수를 활용할 수 있습니다.

- point 임시 변수 : pnt[x, y, z, Rx, Ry, Rz]
- joint 임시 변수 : jnt[J0, J1, J2, J3, J4, J5]

이러한 임시 변수는 별도의 이름 선언 없이 바로 사용할 수 있으며, 아래와 같이 활용될 수 있습니다.

- **방법 1**은 별도의 변수를 선언하고, 함수에서 사용하는 구조입니다.
- **방법 2**는 변수를 별도로 선언하지 않고, 임시 변수 기능을 활용하여 함수 호출 인자로 바로 넘겨주는 구조입니다.

방법 1 :

```
jnt my_angle = {0,0,90,0,90,0}  # my_angle 이라는 joint 형 변수를 선언합니다.
move_j(my_angle, 60, 80)        # my_angle 이라는 변수를 move_j 의 인자로 전달합니다.

pnt my_point = {100, 200, 300, 90, 0, 0}  # my_point 이라는 point 형 변수를 선언합니다.
move_l(my_point, 20, 5)                   # my_point 라는 변수를 move_l 의 인자로 전달합니다.
```

방법 2 :

```
move_j(jnt[0,0,90,0,90,0], 60, 80)       # 별도의 변수 선언 없이 바로 move_j 의 인자로 전달합니다.
move_l(pnt[100,200,300,90,0,0], 60, 80)  # 별도의 변수 선언 없이 바로 move_l 의 인자로 전달합니다.
```

위의 예시는 move_j(J, v, v)와 move_l(P, v, v)를 활용한 예시이며, 해당 함수와 관련된 자세한 내용은 <u>7.동작 함수</u>에서 확인할 수 있습니다.

#### 1.8 UI Script 예시

RB UI Script 는 아래와 같이 사용됩니다.

예시 1. 단순 산술 연산

```
var a = 1                # a 라는 variable 선언, 초기값 1
var b = 2                # b 라는 variable 선언, 초기값 2
var c                    # c 라는 variable 선언
c = a *b + 5 + sqrt(4)   # c 값이 9 가 대입됨.
```

예시 2. 기본 동작

```
joint target_angle = {0, 0, 90, 0, 90, 0}   # target_j 라는 joint 타입 변수 선언

move_j(target_angle, 60, 80)                # move_j 로 이동, 속도/가속도 = 60/80
target_angle[0] = target_angle[0] + 45      # 0 번축 각도 값, 기존 값 + 45
move_j(target_angle, 60, 80)                # move_j 로 이동, 속도/가속도 = 60/80
target_angle[0] = target_angle[0] + 45       # 0 번축 각도 값, 기본 값 + 45
move_j(target_angle, 60, 80)                # move_j 로 이동, 속도/가속도 = 60/80

move_j(jnt[0, 0, 0, 0, 0, 0], 60, 80)       # 모든 관절 0 도로 이동
```

예시 3. 문자열 함수

```
str my_text = “123.78”                  # my_text 라는 문자열 선언

var result_1 = to_num_int(my_text)      # result_1 에는 123 이 저장
var result_2 = to_num(my_text)          # result_2 에는 123.78 이 저장
var result_3 = round( to_num(my_text) ) # result_3 에는 124 가 저장

str my_text2 = “abc”                    # my_text2 라는 문자열 선언
str my_text3 = my_text + my_text2       # my_text3 에는 “123.78abc”
```

#### 1.9 연산자

아래와 같은 비교 연산자, 논리 연산자를 사용할 수 있습니다.

##### 1.9.1 비교 연산자

1. A >= B
   - 좌변이 우변보다 같거나 크면 1 (True), 작으면 0 (False)
2. A <= B
   - 우변이 좌변보다 같거나 크면 1 (True), 작으면 0 (False)
3. A == B
   - 좌변과 우변이 같으면 1 (True), 다르면 0 (False)
4. A != B
   - 좌변과 우변이 다르면 1 (True), 같으면 0 (False)

##### 1.9.2 논리 연산자

A && B<br>
A and B<br>
A AND B<br>
A And B

- 좌변과 우변이 모두 True 일 경우만 1 (True), 아니면 0 (False)

A || B<br>
A or B<br>
A OR B<br>
A Or B

- 좌변과 우변 중 하나라도 True 일 경우 1 (True), 두 값 모두 False 일 경우 0 (False)

##### 1.9.3

비교/논리 연산에서 사용되는 참과 거짓은 아래와 같은 값으로 대응됩니다.

참 : True = TRUE = true = 1<br>
거짓 : False = FALSE = false = 0

따라서 다음과 같은 예시 2개는 **같은 표현**이 됩니다.

예 1.

```
if (SD_SOCK_IS_OPEN_0 == True){
    // something to do
}
```

예 2.

```
if (SD_SOCK_IS_OPEN_0 == 1){
    // something to do
}
```

#### 1.10 단위

Rainbow Robotics 의 Script 문법에서는 아래와 같은 단위를 사용합니다.

- 각도 : Degree (도)
- 위치 : mm (미리미터, 0.001m)

Rainbow Robotics 의 Script 문법 및 표기에서는 아래와 같은 회전 표기법을 사용합니다.

- Z-Y’-X’’ Euler angle (Degree)

![missing](/technical_docs/common/ui_script/1-10.png)

### 2. 수학 함수 및 상수

<br>

#### 2.1 v = cos(v)

삼각함수 코사인 연산 함수입니다.

- Input :<br>
  하나의 variable 또는 상수를 입력 인자로 가집니다.<br>
  v: variable 또는 상수 (단위: radian)<br>

- Return :<br>
  v : 코사인 함수 값인 단일 숫자를 return 합니다.

Example :

```
var my_result = cos(45*D2R)     # my_result 에는 0.7071이 저장됩니다.
```

#### 2.2 v = cosd(v)

삼각함수 코사인 연산 함수입니다.

- Input :<br>
  하나의 variable 또는 상수를 입력 인자로 가집니다.<br>
  v: variable 또는 상수 **(단위: degree)**

- Return :<br>
  v : 코사인 함수 값인 단일 숫자를 return 합니다.

Example :

```
var my_result = cosd(45)    # my_result 에는 0.7071이 저장됩니다.
```

#### 2.3 v = sin(v)

삼각함수 사인 연산 함수입니다.

- Input :<br>
  하나의 variable 또는 상수를 입력 인자로 가집니다.<br>
  v: variable 또는 상수 **(단위: radian)**

- Return :<br>
  v : 사인 함수 값인 단일 숫자를 return 합니다.

Example :

```
var my_result = sin(30*D2R)   # my_result 에는 0.5가 저장됩니다.
```

#### 2.4 v = sind(v)

삼각함수 사인 연산 함수입니다.

- Input :<br>
  하나의 variable 또는 상수를 입력 인자로 가집니다.<br>
  v: variable 또는 상수 **(단위: degree)**

- Return :<br>
  v : 사인 함수 값인 단일 숫자를 return 합니다.

Example :

```
var my_result = sind(30)    # my_result 에는 0.5가 저장됩니다.
```

#### 2.5 v = tan(v)

삼각함수 탄젠트 연산 함수입니다.

- Input :<br>
  하나의 variable 또는 상수를 입력 인자로 가집니다.<br>
  v: variable 또는 상수 **(단위: radian)**

- Return :<br>
  v : 탄젠트 함수 값인 단일 숫자를 return 합니다.

Example :

```
var my_result = tan(45*D2R)   # my_result 에는 1이 저장됩니다.
```

#### 2.6 v = tand(v)

삼각함수 탄젠트 연산 함수입니다.

- Input :<br>
  하나의 variable 또는 상수를 입력 인자로 가집니다.<br>
  v: variable 또는 상수 **(단위: degree)**

- Return :<br>
  v : 탄젠트 함수 값인 단일 숫자를 return 합니다.

Example :

```
var my_result = tand(45)    # my_result 에는 1이 저장됩니다.
```

#### 2.7 v = acos(v)

역삼각함수 아크 코사인 연산 함수입니다.

- Input :<br>
  하나의 variable 또는 상수를 입력 인자로 가집니다.<br>
  v: variable 또는 상수

- Return :<br>
  v : 단일 숫자를 return 합니다. **(단위: radian)**

Example :

```
var my_result = acos(-1)    # my_result 에는 원주율 PI가 저장됩니다.
```

#### 2.8 v = acosd(v)

역삼각함수 아크 코사인 연산 함수입니다.

- Input :<br>
  하나의 variable 또는 상수를 입력 인자로 가집니다.<br>
  v: variable 또는 상수

- Return :<br>
  v : 단일 숫자를 return 합니다. **(단위: degree)**

Example :

```
var my_result = acosd(-1)    # my_result 에는 180이 저장됩니다.
```

#### 2.9 v = asin(v)

역삼각함수 아크 사인 연산 함수입니다.

- Input :<br>
  하나의 variable 또는 상수를 입력 인자로 가집니다.<br>
  v: variable 또는 상수

- Return :<br>
  v : 단일 숫자를 return 합니다. **(단위: radian)**

Example :

```
var my_result = asin(1)    # my_result 에는 1.5708이 저장됩니다.
```

#### 2.10 v = asind(v)

역삼각함수 아크 사인 연산 함수입니다.

- Input :<br>
  하나의 variable 또는 상수를 입력 인자로 가집니다.<br>
  v: variable 또는 상수

- Return :<br>
  v : 단일 숫자를 return 합니다. **(단위: degree)**

Example :

```
var my_result = asind(1)    # my_result 에는 90이 저장됩니다.
```

#### 2.11 v = atan(v)

역삼각함수 아크 탄젠트 연산 함수입니다.

- Input :<br>
  하나의 variable 또는 상수를 입력 인자로 가집니다.<br>
  v: variable 또는 상수

- Return :<br>
  v : 단일 숫자를 return 합니다. **(단위: radian)**

Example :

```
var my_result = atan(1)    # my_result 에는 0.7854가 저장됩니다.
```

#### 2.12 v = atand(v)

역삼각함수 아크 탄젠트 연산 함수입니다.

- Input :<br>
  하나의 variable 또는 상수를 입력 인자로 가집니다.<br>
  v: variable 또는 상수

- Return :<br>
  v : 단일 숫자를 return 합니다. **(단위: degree)**

Example :

```
var my_result = atand(1)    # my_result 에는 45가 저장됩니다.
```

#### 2.13 v = atan2(v, v)

역삼각함수 4 사분면 아크 탄젠트 연산 함수 입니다.

- Input :<br>
  두 개의 variable 또는 상수를 입력 인자로 가집니다.<br>
  v: y 방향 variable 또는 상수<br>
  v: x 방향 variable 또는 상수

- Return :<br>
  v : 단일 숫자를 return 합니다. **(단위: radian)**

Example :

```
var my_result = atan2(1, 1)    # my_result 에는 0.7854가 저장됩니다.
```

#### 2.14 v = atan2d(v, v)

역삼각함수 4 사분면 아크 탄젠트 연산 함수 입니다.

- Input :<br>
  두 개의 variable 또는 상수를 입력 인자로 가집니다.<br>
  v: y 방향 variable 또는 상수<br>
  v: x 방향 variable 또는 상수

- Return :<br>
  v : 단일 숫자를 return 합니다. **(단위: degree)**

Example :

```
var my_result = atan2d(1, 1)    # my_result 에는 45가 저장됩니다.
```

#### 2.15 PI

원주율(𝜋)을 나타내는 상수 입니다.

Example :

```
var my_val = PI    # my_val 에는 3.142가 저장됩니다.
```

#### 2.16 R2D

radian 에서 degree 로 변환하기 위한 연산 상수 **(180/PI)** 입니다.

Example :

```
var my_val= PI*R2D    # my_val 에는 180이 저장됩니다.
```

#### 2.17 D2R

degree 에서 radian 으로 변환하기 위한 연산 상수 **(PI/180)** 입니다.

Example :

```
var my_val= 180*D2R    # my_val 에는 3.142가 저장됩니다.
```

#### 2.18 v = abs(v)

절대값 연산 함수입니다.

- Input :<br>
  하나의 variable 또는 상수를 입력 인자로 가집니다.<br>
  v: variable 또는 상수

- Return :<br>
  v : 단일 숫자를 return 합니다.

Example :

```
var my_result = abs(-5.2)    # my_result 에는 5.2가 저장됩니다.
```

#### 2.19 v = sqrt(v)

제곱근 연산 함수입니다.

- Input :<br>
  하나의 variable 또는 상수를 입력 인자로 가집니다.<br>
  v: variable 또는 상수

- Return :<br>
  v : 단일 숫자를 return 합니다.

Example :

```
var my_result = sqrt(4)    # my_result 에는 2가 저장됩니다.
```

#### 2.20 v = cell(v)

올림 연산 함수입니다.

- Input :<br>
  하나의 variable 또는 상수를 입력 인자로 가집니다.<br>
  v: variable 또는 상수

- Return :<br>
  v : 단일 숫자를 return 합니다.

Example :

```
var my_result = cell(4.2)    # my_result 에는 5가 저장됩니다.
```

#### 2.21 v = floor(v)

내림 연산 함수입니다.

- Input :<br>
  하나의 variable 또는 상수를 입력 인자로 가집니다.<br>
  v: variable 또는 상수

- Return :<br>
  v : 단일 숫자를 return 합니다.

Example :

```
var my_result = floor(4.8)    # my_result 에는 4가 저장됩니다.
```

#### 2.22 v = round(v)

반올림 연산 함수입니다.

- Input :<br>
  하나의 variable 또는 상수를 입력 인자로 가집니다.<br>
  v: variable 또는 상수

- Return :<br>
  v : 단일 숫자를 return 합니다.

Example :

```
var my_result = round(4.2)    # my_result 에는 4가 저장됩니다.
var my_result = round (4.8)   # my_result 에는 5가 저장됩니다.
```

#### 2.23 v = log(v)

자연 로그(ln) 연산 함수입니다.

- Input :<br>
  하나의 variable 또는 상수를 입력 인자로 가집니다.<br>
  v: variable 또는 상수

- Return :<br>
  v : 단일 숫자를 return 합니다.

Example :

```
var my_result = log(4)  # my_result 에는 1.3862가 저장됩니다.
```

#### 2.24 v = log10(v)

상용 로그(log10) 연산 함수입니다.

- Input :<br>
  하나의 variable 또는 상수를 입력 인자로 가집니다.<br>
  v: variable 또는 상수

- Return :<br>
  v : 단일 숫자를 return 합니다.

Example :

```
var my_result = log10(3)    # my_result 에는 0.4771이 저장됩니다.
```

#### 2.25 v = pow(v, v)

거듭 제곱 연산 함수입니다.

- Input :<br>
  두 개의 variable 또는 상수를 입력 인자로 가집니다.<br>
  v: 거듭 제곱의 밑이 되는 variable 또는 상수<br>
  v: 거듭 제곱의 지수가 되는 variable 또는 상수

- Return :<br>
  v : 단일 숫자를 return 합니다.

Example :

```
var my_result = pow(2,3)    # my_result 에는 8이 저장됩니다.
```

#### 2.26 v = rand()

0 과 1 사이의 균등 분포(uniform distribution)를 따르는 난수 생성 함수입니다.

- Input :<br>
  없음.

- Return :<br>
  v : 단일 숫자를 return 합니다.

Example :

```
var my_result = rand()    # my_result 에는 0.1315 가 저장됩니다.
var my_result = rand()    # my_result 에는 0.7869 가 저장됩니다.
var my_result = rand()    # my_result 에는 0.4277 가 저장됩니다.
```

#### 2.27 v = arr_size(a)

입력된 배열 변수의 사이즈를 반환합니다.

- Input :<br>
  a: target array variable.

- Return :<br>
  v: return single number.

Example :

```
var my_size
arr my_arr = {1,2,3,4}
my_size = arr_size(my_arr)    # my_size= 4
```

#### 2.28 a = arr_sub(a, v)

입력된 배열 변수를 첫번째 인덱스부터 주어진 길이 만큼 잘라서 새로운 배열을 만듭니다.

- Input :<br>
  a: target array variable<br>
  v: target size

- Return :<br>
  a: trimmed array

#### 2.29 a = arr_sub(a, v, v)

입력된 배열 변수를 주어진 인덱스부터 주어진 길이 만큼 잘라서 새로운 배열을 만듭니다.

- Input :<br>
  a: target array variable<br>
  v: starting point index<br>
  v: target size

- Return :<br>
  a: trimmed array

#### 2.30 a = zyzE_to_zyxE(a), a = xyzE_to_zyxE(a), a = xyxE_to_zyxE(a), a = xzxE_to_zyxE(a), a = yzyE_to_zyxE(a), a = yxyE_to_zyxE(a), a = zxzE_to_zyxE(a)

3by1의 Euler 각도를 3by1의 ZY'X''의 Euler 각도로 변환합니다.

- Input :<br>
  a: Source Euler angle array (length should be 3)

- Return :<br>
  a: Converted Euler angle array (ZY’X’’) (length = 3)

#### 2.31 a = zyzE_to_R(a), a = xyzE_to_R(a), a = xyxE_to_R(a), a = xzxE_to_R(a), a = yzyE_to_R(a), a = yxyE_to_R(a), a = zxzE_to_R(a), a = zyxE_to_R(a)

3by1의 Euler 각도를 Rotation Matrix로 변환합니다.

- Input :<br>
  a: Source Euler angle array (length should be 3)

- Return :<br>
  a: Converted Rotation Matrix (length = 9)

#### 2.32 a = RxMat(v), a = RyMat(v), a = RzMat(v)

입력된 각도를 기반으로 Rotation Matrix를 생성합니다. Rx, Ry, Rz는 각 회전 축을 의미합니다.

- Input :<br>
  v: angle in degree unit

- Return :<br>
  a: Converted Rotation Matrix (length = 9)

#### 2.33 a = R_TCP

현재 TCP의 Rotation Matrix를 반환합니다.

- Input :<br>
  None.

- Return :<br>
  a: Converted Rotation Matrix (length = 9)

#### 2.34 a = point_to_R(P, v)

입력된 포인트 변수에서 Rotation Matrix룰 추출합니다.

- Input :<br>
  P: target Point variable<br>
  v: Option<br>

  - 0 : X,Y,Z,Rx,Ry,Rz Point -> R
  - 1 : X,Y,Z,Rz,Ry,Rx Point -> R

- Return :<br>
  a: Converted Rotation Matrix (length = 9)

#### 2.35 a = Rinverse(a), a = Rtranspose(a)

Rotation Matrix의 Inverse (Transpose)를 구합니다.

- Input :<br>
  a: Source Rotation Matrix Array (length should be 9)

- Return :<br>
  a: Converted Rotation Matrix (length = 9)

#### 2.36 a = R_x_R(a, a)

Rotation Matrix 곱셈 연산

- Input :<br>
  a: Source Rotation Matrix Array (length should be 9)<br>
  a: Source Rotation Matrix Array (length should be 9)

- Return :<br>
  a: Converted Rotation Matrix (length = 9)

#### 2.37 a = R_x_V(a, a)

Rotation Matrix 와Vector (3by1) 의 곱셈 연산

- Input :<br>
  a: Source Rotation Matrix Array (length should be 9)<br>
  a: Source Vector (length should be 3)

- Return :<br>
  a: Multiplied Vector (length = 3)

#### 2.38 a = R_to_zyxE(a)

Rotation Matrix를 ZY’X’’오일러 각도로 변환합니다.

- Input :<br>
  a: Source Rotation Matrix Array (length should be 9)

- Return :<br>
  a: Converted Euler angle array (length = 3)

### 3. 문자열 함수

<br>

#### 3.1 v = str_empty(s)

문자열의 데이터 유무를 반환하는 함수입니다.

- Input :<br>
  하나의 string 또는 문자열을 입력 인자로 가집니다.<br>
  s: string 또는 문자열

- Return :<br>
  v : 단일 숫자 0 또는 1을 return 합니다. **(데이터가 없을 때 1, 있을 때 0)**

Example :

```
string my_str1 = “rainbow”
string my_str2

var my_result1 = str_empty(my_str1)    # my_result1 에는 0이 저장됩니다.
var my_result2 = str_empty(my_str2)    # my_result2 에는 1이 저장됩니다.
```

#### 3.2 v = str_find(s, s)

다른 문자열 내에서 문자열을 위치 인덱스를 반환하는 함수입니다.

- Input :<br>
  두 개의 string 또는 문자열을 입력 인자로 가집니다.<br>
  s: 검색 범위가 되는 string 또는 문자열<br>
  s: 검색어가 되는 string 또는 문자열

- Return :<br>
  v: 인덱스에 해당하는 단일 숫자를 return 합니다.<br>
  : 존재하지 않을 경우 -1 을 return 합니다.

Example :

```
string my_str1 = “rainbow_robotics”
string my_str2 = “robotics”

var my_result = str_find(my_str1, my_str2)  # my_result 에는 8이 저장됩니다.
```

#### 3.3 v = str_len(s)

문자열의 길이를 반환하는 함수입니다.

- Input :<br>
  하나의 string 또는 문자열을 입력 인자로 가집니다.<br>
  s: string 또는 문자열

- Return :<br>
  v: 길이에 해당하는 단일 숫자를 return 합니다.

Example :

```
string my_str = “rainbow_robotics”
var my_result = str_len(my_str)    # my_result 에는 16이 저장됩니다.
```

#### 3.4 s = str_sub(s, v, v)

문자열을 잘라내어 일부를 반환하는 함수입니다.

- Input :<br>
  하나의 string 또는 문자열과 두 개의 variable 또는 상수를 입력 인자로 가집니다.<br>
  s: string 또는 문자열<br>
  v: 문자열의 시작 인덱스를 나타내는 variable 또는 상수<br>
  v: 문자열의 길이를 나타내는 variable 또는 상수

- Return :<br>
  s: 잘라낸 문자열을 return 합니다.

Example :

```
string my_str = “rainbow_robotics”
string my_result = str_sub(my_str, 3, 7)    # my_result 에는 “nbow_ro”가 저장됩니다.
```

#### 3.5 s = str_cat(s, s)

문자열을 서로 결합하는 함수입니다.

- Input :<br>
  두 개의 string 또는 문자열을 입력 인자로 가집니다.<br>
  s: 왼쪽에 붙이고자 하는 string 또는 문자열<br>
  s: 오른쪽에 붙이고자 하는 string 또는 문자열

- Return :<br>
  s: 결합된 문자열을 return 합니다.

Example :

```
string my_str1 = “hi”
string my_str2 = “rainbow”

string my_res = str_cat(my_str1, my_str2)  # my_res 에는 “hirainbow”가 저장됩니다.
                                           # my_res = my_str1 + my_str2 도 지원합니다.
```

#### 3.6 v = str_cmp(s, s)

문자열을 서로 비교하는 함수입니다.

- Input :<br>
  두 개의 string 또는 문자열을 입력 인자로 가집니다.<br>
  s: 기준이 되는 string 또는 문자열<br>
  s: 비교하고자 하는 string 또는 문자열

- Return :<br>
  v: 문자열이 동일하면 0, 다르면 0 이 아닌 단일 숫자를 return 합니다.<br>
  문자열이 동일하지 않은 경우, 동일하지 않은 첫 번째 문자를 비교해 기준 문자열이 비교 문자열 보다 크면 0 보다 큰 값, 작으면 0 보다 작은 값의 단일 숫자를 return 합니다.

Example :

```
string my_str1 = “hello”
string my_str2 = “hello”
string my_str3 = “hgello”
string my_str4 = “Hello”

var my_result1 = str_cmp(my_str1, my_str2)  # my_result1 에는 0 이 저장됩니다.
var my_result2 = str_cmp(my_str2, my_str3)  # my_result2 에는 -2 가 저장됩니다. e(101)와 g(103)를 비교.
var my_result3 = str_cmp(my_str3, my_str2)  # my_result3 에는 2 가 저장됩니다. g(103)와 e(101)를 비교.
var my_result4 = str_cmp(my_str1, my_str4)  # my_result4 에는 32 가 저장됩니다. h(104) H(72)를 비교.
```

#### 3.7 v = to_num(s)

문자열을 단일 숫자로 변환하는 함수입니다.

- Input :<br>
  하나의 string 또는 문자열을 입력 인자로 가집니다.<br>
  s: string 또는 문자열

- Return :<br>
  v: 문자열에서 변환된 단일 숫자를 return 합니다.

Example :

```
str my_string = “123.45”
var my_result = to_num(my_string)   # my_result 에는 123.45가 저장됩니다.
```

#### 3.8 s = to_str (v), s = to_str (a), s = to_str (P), s = to_str (J)

#### s = to_str_raw (v), s = to_str_raw (a), s = to_str_raw (P), s = to_str_raw (J)

variable(point, joint)를 문자열로 변환하는 함수입니다.

- Input :<br>
  하나의 variable 또는 상수를 입력 인자로 가집니다. (array 변수, point 변수, joint 변수)<br>
  v/a/P/J: variable 또는 상수 (array 변수, point 변수, joint 변수)

- Return :<br>
  s: 문자열을 return 합니다.

Example :

```
var my_value = 123.45
str my_result = to_str(my_value)        # my_result에는 “123.45”가 저장됩니다.

point my_point = {100,200,300,90,0,0}
str my_result = to_str(my_point)        # my_result에는 “{100,200,300,90,0,0}”가 저장됩니다.

joint my_joint = {90,0,0,90,0,0}
str my_result = to_str(my_joint)        # my_result에는 “{90,0,0,90,0,0}”가 저장됩니다.

point my_point = {100,200,300,90,0,0}
str my_result = to_str_raw(my_point)    # my_result에는 “100,200,300,90,0,0”가 저장

joint my_joint = {90,0,0,90,0,0}
str my_result = to_str_raw(my_joint)    # my_result에는 “90,0,0,90,0,}”가 저장
```

#### 3.9 s = to_str_int(v)

단일 숫자를 정수 문자열로 변환하는 함수입니다.

- Input :<br>
  하나의 variable 또는 상수를 입력 인자로 가집니다.<br>
  v: variable 또는 상수

- Return :<br>
  s: 문자열을 return 합니다.

Example :

```
var my_value = 123.45
str my_result = to_str_int(my_value)    # my_result 에는 “123”이 저장됩니다.
```

#### 3.10 a = str_parse(s, s, s, s)

헤더 및 테일이 포함된 문자열을 파싱하여 숫자 배열 형태로 저장합니다.

- Input :<br>
  s: 소스 문자열 변수 혹은 문자열<br>
  s: 헤더 문자열 변수 혹은 문자열<br>
  s: 테일 문자열 변수 혹은 문자열<br>
  s: 구분자 문자열 변수 혹은 문자열

- Return :<br>
  a: 배열 변수를 return 합니다.

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

### 4. 비트 함수

<br>

#### 4.1 v = get_bit(v, v)

variable 또는 상수에서 특정 비트 자리의 비트를 획득하는 함수입니다.

- Input :<br>
  두 개의 variable 또는 상수를 입력 인자로 가집니다.<br>
  v: bit 를 획득하고자 하는 variable/상수<br>
  v: 원하는 bit 자리, 비트는 0부터 시작됩니다.

- Return :<br>
  v: 단일 숫자 0 또는 1을 return 합니다.

Example :

```
var my_bit = get_bit(1234, 3)   # my_bit 에는 0 이 저장됩니다.
                                # 1234 = 0b10011010010
```

#### 4.2 set_bit(v, v)

variable 에서 특정 비트 자리의 비트를 1 로 변경하는 함수입니다.

- Input :<br>
  두 개의 variable 또는 상수를 입력 인자로 가집니다.<br>
  v: bit 를 바꾸고자 하는 variable<br>
  v: 원하는 bit 자리, 비트는 0 부터 시작됩니다.

- Return :<br>
  없음.

Example :

```
var my_var = 1234    # 1234 = 0b10011010010
set_bit(my_var, 3)   # my_var 에는 1242가 저장됩니다.
```

#### 4.3 clear_bit(v, v)

variable 에서 특정 비트 자리의 비트를 0 으로 변경하는 함수입니다.

- Input :<br>
  두 개의 variable 또는 상수를 입력 인자로 가집니다.<br>
  v: bit 를 바꾸고자 하는 variable<br>
  v: 원하는 bit 자리, 비트는 0 부터 시작됩니다.

- Return :<br>
  없음.

Example :

```
var my_var = 1234       # 1234 = 0b10011010010
clear_bit(my_var, 1)    # my_var 에는 1232가 저장됩니다.
```

#### 4.4 <<, >>, &, |

비트 시프트 연산자, 비트 and / or 연산자<br>
비트 시프트 연산 및 논리 연산을 지원합니다.

Example :

```
Var my_num = 12             # my_num = 0b1100
Var my_num2 = my_num << 2   # my_num2 = 48 (0b110000)
```

### 5. 시스템 함수

<br>

#### 5.1 halt

모든 프로그램 흐름 및 동작을 정지합니다.

Example :

```
halt
```

#### 5.2 task stop

모든 프로그램 흐름 및 동작을 정지합니다.

Example :

```
task stop
```

#### 5.3 mc jall init

로봇 팔에 DC 전원을 인가하고, 서보 온을 하여 활성화 시킵니다. (로봇 활성화)

#### 5.4 pgmode real

로봇의 운용 모드를 ‘Real-Robot’으로 전환합니다.

#### 5.5 pgmode simulation

로봇의 운용 모드를 ‘Simulation’으로 전환합니다.

#### 5.6 program_load_and_run(s)

제어박스에 저장된 프로그램을 불러오고 재생까지 수행합니다.

- Input :<br>
  s: 불러오기 및 재생을 하고자 하는 프로그램 이름을 문자열 형식으로 표기.

- Return :<br>
  None.

Example :

```
program_load_and_run(“my_project”)
program_load_and_run(“hello_world_v90”)
```

#### 5.7 task load your_project_name

로봇 제어박스에 저장된 프로젝트를 불러옵니다.

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

현재 로드 되어있는 프로그램을 재생합니다.

#### 5.9 task stop

프로그램 흐름 및 동작을 완전히 종료합니다.

#### 5.10 task pause

프로그램 및 동작을 일시정지 합니다.

#### 5.11 task resume_a

일시정지 상태에서 흐름을 다시 진행합니다.

#### 5.12 task resume_b

충돌감지 상황에서 멈춘 흐름을 다시 진행합니다.

#### 5.13 v = pattern_get_count(v)

패턴 기능에서 수행 중인 그리드의 현재 인덱스를 획득하는 함수입니다.

- Input :<br>
  하나의 variable 또는 상수를 입력 인자로 가집니다.<br>
  v: 패턴 번호 (할당된 번호의 확인이 필요합니다.)<br>
  : 패턴 고유 번호는 패턴 액션에 설정되어 있습니다.

- Return :<br>
  v: 그리드의 현재 인덱스를 return 합니다.

Example :

```
var current_count = pattern_get_count(6691)   # 패턴 번호 6691의 현재 그리드 인덱스를 획득합니다.
```

#### 5.14 pattern_set_count(v, v)

패턴 기능에서 작업을 수행하는 그리드의 인덱스를 강제로 설정하는 함수입니다.

- Input :<br>
  두 개의 variable 또는 상수를 입력 인자로 가집니다.<br>
  v: 패턴 번호 (할당된 번호의 확인이 필요합니다.)<br>
  : 패턴 고유 번호는 패턴 액션에 설정되어 있습니다.<br>
  v: 수행하려는 그리드 인덱스<br>
  : 만약 패턴이 2 차원 평면 패턴이고, 3x5 = 15 의 그리드 포인트가 있다면, 설정 가능한 인덱스는 0 ~ 14입니다.

- Return :<br>
  없음.

Example :

```
pattern_set_count(6691, 3)  # 패턴 번호 6691의 그리드 인덱스를 3으로 설정합니다.
```

#### 5.15 P = calc_fk_tcp(v, v, v, v, v, v), P = calc_fk_tcp(J)

주어진 관절 정보로, TCP 의 직교 좌표 값을 연산합니다.

- Input type 1:<br>
  여섯 개의 variable 또는 상수를 입력 인자로 가집니다.<br>
  v, v, v, v, v, v: 각 관절 각도 (단위: Degree)

- Input type 2:<br>
  J: 각 관절 정보 (joint 타입 변수)

- Return :<br>
  P: 베이스 좌표계를 기준으로 TCP 의 직교 좌표 값을 return 합니다.

Example :

```
joint my_joint = {0,0,0,0,0,0}
point my_result = calc_fk_tcp(my_joint)     # my_result 에는 {0, -207.62,1100.59,0,0,0}가 저장됩니다.
                                            # TCP 를 변경하면 예제와 다르게 출력될 수 있습니다.

point my_result = calc_fk_tcp(0,0,0,0,0,0)  # 위와 동일한 동작을 수행합니다.
```

#### 5.16 P = calc_fk_tfc(v, v, v, v, v, v), P = calc_fk_tfc(J)

주어진 관절 정보로, 툴 플랜지 중심점 (TFC, Tool Flange Center)의 직교 좌표 값을 연산합니다.<br>
**※ 툴 플랜지는 로봇에 그리퍼/툴이 장착되는 부분입니다.**

- Input type 1:<br>
  여섯개의 variable 또는 상수를 입력인자로 가집니다.<br>
  v, v, v, v, v, v: 각 관절 정보

- Input type 2:<br>
  J: 각 관절 정보 (joint 타입 변수)

- Return :<br>
  P: 베이스 좌표계를 기준으로 TFC 의 직교 좌표 값을 return 합니다.

Example :

```
joint my_joint = {0,0,0,0,0,0}
point my_result = calc_fk_tfc(my_joint)     # my_result 에는 {0, -207.62,1100.59,0,0,0}가 저장됩니다.

point my_result = calc_fk_tfc(0,0,0,0,0,0)  # 위와 동일한 동작을 수행합니다.
```

#### 5.17 v = point_dist(P, P)

두 점 사이의 거리를 연산하는 함수입니다.

- Input :<br>
  두 개의 point 를 입력 인자로 가집니다.<br>
  P: 거리를 계산하고자 하는 point 1<br>
  P: 거리를 계산하고자 하는 point 2

- Return :<br>
  v: 두 점 사이의 거리 값인 단일 숫자를 return 합니다.

Example :

```
point my_ptr1 = {100, 200, 300, 0, 0, 0}
point my_ptr2 = {100, 200, 200, 0, 0, 0}

var my_result = point_dist(my_ptr1, my_ptr2)   # my_result 에는 100 이 저장됩니다.
```

#### 5.18 P = point_add(P, P)

두 점의 덧셈을 연산하는 함수입니다.

- Input :<br>
  두 개의 point 를 입력 인자로 가집니다.<br>
  P: 덧셈을 수행하고자 하는 point 1<br>
  P: 덧셈을 수행하고자 하는 point 2

- Return :<br>
  v: 두 점의 덧셈 연산 결과 값인 point 를 return 합니다.

Example :

```
point my_ptr1 = {100, 0, 300, 150, 0, 30}
point my_ptr2 = {100, 200, 300, 90, 0, 90}

point my_result = point_add(my_ptr1, my_ptr2)

# my_result 에는 {200, 200, 600, -90, -30, -60}이 저장됩니다.
# x,y,z 거리 값들은 단순 산술 연산으로 처리됩니다.
# Rx,Ry,Rz 회전 값들은 회전 행렬 연산으로 처리됩니다.
```

#### 5.19 P = point_sub(P, P)

두 점의 뺄셈을 연산하는 함수입니다.

- Input :<br>
  두 개의 point 를 입력 인자로 가집니다.<br>
  P: 뺄셈을 수행하고자 하는 point 1<br>
  P: 뺄셈을 수행하고자 하는 point 2

- Return :<br>
  v: 두 점의 뺄셈 연산 결과 값인 point 를 return 합니다.

Example :

```
point my_ptr1 = {100, 0, 300, 150, 0, 30}
point my_ptr2 = {100, 200, 300, 90, 0, 90}

point my_result = point_sub(my_ptr1, my_ptr2)

# my_result 에는 {0, -200, 0, 0, 60, -60}이 저장됩니다.
# x,y,z 거리 값들은 단순 산술 연산으로 처리됩니다.
# Rx,Ry,Rz 회전 값들은 회전 행렬 연산으로 처리됩니다.
```

#### 5.20 P = point_mid(P, P)

두 점 사이의 중점을 연산하는 함수입니다.

- Input :<br>
  두 개의 point 를 입력 인자로 가집니다.<br>
  P: 중점을 구하고자 하는 point 1<br>
  P: 중점을 구하고자 하는 point 2

- Return :<br>
  P: 두 점 사이의 중점인 point 를 return 합니다.

Example :

```
point my_ptr1 = {100, 0, 300, 150, 0, 30}
point my_ptr2 = {100, 200, 300, 90, 0, 90}

point my_result = point_mid(my_ptr1, my_ptr2)

# my_result 에는 {100, 100, 300, 120, -8.21, 60}이 저장됩니다.
# x,y,z 거리 값들은 단순 산술 연산으로 처리됩니다.
# Rx,Ry,Rz 회전 값들은 회전 행렬 연산으로 처리됩니다.
```

#### 5.21 P = point_interpolate(P, P, v)

두 점 사이의 보간 점을 연산하는 함수입니다.

- Input :<br>
  두 개의 point, 하나의 variable 또는 상수를 입력 인자로 가집니다.<br>
  P: 보간 하고자 하는 point 1<br>
  P: 보간 하자고 하는 point 2<br>
  v: 보간에 이용할 점의 가중치 **(0 에서 1 사이의 값)**

- Return :<br>
  두 점 사이의 보간 결과인 point 를 return 합니다.

Example :

```
point my_ptr1 = {100, 0, 300, 150, 0, 30}
point my_ptr2 = {100, 200, 300, 90, 0, 90}

point my_result = point_interpolate(my_ptr1, my_ptr2, 0.1)

# my_result 에는 {100, 20, 300, 144.43, -2.86, 35.37}이 저장됩니다.
# x,y,z 거리 값들은 단순 산술 연산으로 처리됩니다.
# Rx,Ry,Rz 회전 값들은 회전 행렬 연산으로 처리됩니다.
```

#### 5.22 P = point_trans_g2u(P, v)

글로벌 좌표계에서 사용자 정의 좌표계로 변환을 수행하는 함수입니다.

- Input :<br>
  하나의 point, 하나의 variable 또는 상수를 입력 인자로 가집니다.<br>
  P: 변환하고자 하는 point<br>
  v: 사용자 좌표계 번호 **(사용자 좌표계: 0, 1, 2)**

- Return :<br>
  P: 글로벌 좌표계에서 사용자 정의 좌표계로 변환된 point 좌표 값을 return 합니다.

Example :

```
point my_global_p
point my_local_p = point_trans_g2u(my_global_p, 0)
```

#### 5.23 P = point_trans_u2g(P, v)

사용자 정의 좌표계에서 글로벌 좌표계로 변환을 수행하는 함수입니다.

- Input :<br>
  하나의 point, 하나의 variable 또는 상수를 입력 인자로 가집니다.<br>
  P: 변환하고자 하는 point<br>
  v: 사용자 좌표계 번호 **(사용자 좌표계 : 0, 1, 2)**

- Return :<br>
  P: 사용자 정의 좌표계에서 글로벌 좌표계로 변환된 point 좌표 값을 return 합니다.

Example :

```
point my_local_p
point my_global_p = point_trans_u2g(my_local_p, 0)
```

#### 5.24 P = get_tcp_info()

현재 로봇의 TCP 정보를 획득하는 함수입니다.

- Input :<br>
  없음.

- Return :<br>
  P: 직교 좌표계 기준 현재 로봇의 TCP 를 return 합니다. **(단위: mm & degree)**

Example :

```
point my_result = get_tcp_info()   # my_result 에는 현재 TCP 정보가 저장됩니다.
```

#### 5.25 P = get_tfc_info()

현재 로봇의 툴 플랜지 중심 정보를 획득하는 함수입니다.

- Input :<br>
  없음.

- Return :<br>
  P: 직교 좌표계 기준 현재 로봇의 툴 플랜지 중심을 return 합니다. **(단위: mm & degree)**

Example :

```
point my_result = get_tfc_info()   # my_result 에는 현재 툴 플랜지 중심 정보가 저장됩니다.
```

#### 5.26 J = joint_add(J, J)

두 관절의 덧셈을 연산하는 함수입니다.

- Input :<br>
  두 개의 joint 를 입력 인자로 가집니다.<br>
  J: 덧셈을 수행하고자 하는 joint 1<br>
  J: 덧셈을 수행하고자 하는 joint 2

- Return :<br>
  J: 두 관절의 덧셈 연산 결과 값인 joint 를 return 합니다.

Example :

```
joint my_joint1 = {45, 15, 0, 0, 0, 90}
joint my_joint2 = {0, 45, 45, 15, 0, 0}

joint my_result = joint_add(my_joint1, my_joint2)   # my_result 에는 {45,60,45,15,0,90}이 저장됩니다.
```

#### 5.27 J = joint_sub(J, J)

두 관절의 뺄셈을 연산하는 함수입니다.

- Input :<br>
  두 개의 joint 를 입력 인자로 가집니다.<br>
  J: 뺄셈을 수행하고자 하는 joint 1<br>
  J: 뺄셈을 수행하고자 하는 joint 2

- Return :<br>
  J: 두 관절의 뺄셈 연산 결과 값인 joint 를 return 합니다.

Example :

```
joint my_joint1 = {45, 15, 0, 0, 0, 90}
joint my_joint2 = {0, 45, 45, 15, 0, 0}

joint my_result = joint_sub(my_joint1, my_joint2)   # my_result 에는 {45,-30,-45,-15,0,90}이 저장됩니다.
```

#### 5.28 J = joint_mid(J, J)

두 관절 사이의 중간 관절을 연산하는 함수입니다.

- Input :<br>
  두 개의 joint 를 입력 인자로 가집니다.<br>
  J: 중간 관절 구하고자 joint 1<br>
  J: 중간 관절 구하고자 joint 2

- Return :<br>
  J: 두 관절의 중간 관절 연산 결과 값인 joint 를 return 합니다.

Example :

```
joint my_joint1 = {45, 15, 0, 15, 0, 90}
joint my_joint2 = {45, 15, 0, 15, 0, 0}

joint my_result = joint_mid(my_joint1, my_joint2)   # my_result 에는 {45, 15, 0, 15, 0, 45}이 저장됩니다.
```

#### 5.29 J = joint_interpolate(J, J, v)

두 관절 사이의 보간 관절을 연산하는 함수입니다.

- Input :<br>
  두 개의 joint, 하나의 variable 또는 상수를 입력 인자로 가집니다.<br>
  J: 보간 관절 구하고자 joint 1<br>
  J: 보간 관절 구하고자 joint 2<br>
  v: 보간에 이용할 관절의 가중치 (0 에서 1 사이의 값)

- Return :<br>
  J: 두 관절의 보간 관절 연산 결과 값인 joint 를 return 합니다.

Example :

```
joint my_joint1 = {45, 15, 0, 15, 0, 90}
joint my_joint2 = {45, 15, 0, 15, 0, 0}

joint my_result = joint_interpolate(my_joint1, my_joint2, 0.1)
# my_result 에는 {45, 15, 0, 15, 0, 81}이 저장됩니다.
```

#### 5.30 J = get_joint_info()

관절 각도 정보를 획득합니다.

- Input :<br>
  없음.

- Return :<br>
  J: 관절 좌표계 기준 현재 로봇의 관절 정보를 return 합니다. **(단위: degree)**

Example :

```
joint my_result = get_joint_info()  # my_result 에는 현재 관절 각도 정보가 저장됩니다.
```

#### 5.31 set_payload_info(v, v, v, v)

툴 payload 를 설정합니다.

<div class="warning custom-block">
    <p class="custom-block-title">주의</p>
    <ol>
        <li>
            이 함수에서 설정된 값은 프로그램 종료 후, 기본 값으로 돌아옵니다.
        </li>
        <li>
            이 함수를 별도로 호출하지 않을 경우, Setup 페이지에서 설정한 값이 사용됩니다.
        </li>
        <li>
            프로그램 흐름 중, 다시 이 함수가 호출되기 전까지 이 함수에서 설정된 값이 유지됩니다.
        </li>
    </ol>
</div>

- Input :<br>
  네 개의 variable 또는 상수를 입력 인자로 가집니다.<br>
  v: payload 무게 **(단위: kg)**<br>
  v: payload 무게중심의 x 좌표 **(단위: mm)**<br>
  v: payload 무게중심의 y 좌표 **(단위: mm**)<br>
  v: payload 무게중심의 z 좌표 **(단위: mm)**

  - 입력되는 3 개의 값들은 제조사 기본 툴 좌표계를 기준으로 합니다.

- Return :<br>
  없음.

Example :

```
set_payload_info(3, 0, -50, 0)  # payload 의 무게는 3kg, 무게 중심은 0mm,-50mm, 0mm 으로 설정합니다.
```

#### 5.32 set_tcp_info(v, v, v, v, v, v)

로봇 말단(TCP) 위치 및 회전을 설정합니다.

<div class="warning custom-block">
    <p class="custom-block-title">주의</p>
    <ol>
        <li>
            이 함수에서 설정된 값은 프로그램 종료 후, 기본 값으로 돌아옵니다.
        </li>
        <li>
            이 함수를 별도로 호출하지 않을 경우, Setup 페이지에서 설정한 값이 사용됩니다.
        </li>
        <li>
            프로그램 흐름 중, 다시 이 함수가 호출되기 전까지 이 함수에서 설정된 값이 유지됩니다.
        </li>
    </ol>
</div>

- Input :<br>
  여섯 개의 variable 또는 상수를 입력 인자로 가집니다.<br>
  v: TCP 의 x 좌표 **(단위: mm)**<br>
  v: TCP 의 y 좌표 **(단위: mm)**<br>
  v: TCP 의 z 좌표 **(단위: mm)**<br>
  v: TCP 의 Rx 각도 **(단위: degree)**<br>
  v: TCP 의 Ry 각도 **(단위: degree)**<br>
  v: TCP 의 Rz 각도 **(단위: degree)**

  - 입력되는 6개의 값들은 제조사 기본 툴 좌표계를 기준으로 합니다.

- Return :<br>
  없음.

Example :

```
set_tcp_info(0, -100, 0, 0, 0, 0)  # TCP 의 위치가 기본 툴 좌표계 대비 y로 -100mm에 있다고 설정합니다.
```

#### 5.33 set_collision_onoff(v)

충돌 감지 기능을 on/off 하는 함수입니다.

<div class="warning custom-block">
    <p class="custom-block-title">주의</p>
    <ol>
        <li>
            이 함수에서 설정된 값은 프로그램 종료 후, 기본 값으로 돌아옵니다.
        </li>
        <li>
            이 함수를 별도로 호출하지 않을 경우, Setup 페이지에서 설정한 값이 사용됩니다.
        </li>
        <li>
            프로그램 흐름 중, 다시 이 함수가 호출되기 전까지 이 함수에서 설정된 값이 유지됩니다.
        </li>
    </ol>
</div>

- Input :<br>
  하나의 variable 또는 상수를 입력 인자로 가집니다.<br>
  v: 0 이면 off, 1 이면 on.

- Return :<br>
  없음.

Example :

```
set_collision_onoff(1)  # 충돌 감지 기능을 사용합니다.
```

#### 5.34 set_collision_th(v)

충돌 감도를 설정합니다.

<div class="warning custom-block">
    <p class="custom-block-title">주의</p>
    <ol>
        <li>
            이 함수에서 설정된 값은 프로그램 종료 후, 기본 값으로 돌아옵니다.
        </li>
        <li>
            이 함수를 별도로 호출하지 않을 경우, Setup 페이지에서 설정한 값이 사용됩니다.
        </li>
        <li>
            프로그램 흐름 중, 다시 이 함수가 호출되기 전까지 이 함수에서 설정된 값이 유지됩니다.
        </li>
    </ol>
</div>

- Input :<br>
  하나의 variable 또는 상수를 입력 인자로 가집니다.<br>
  v: 충돌 감도로 0 에서 1 사이의 값. 낮은 값일수록 약한 충격에 민감함. (0~1)

- Return :<br>
  없음.

Example :

```
set_collision_th(0.1)   # 충돌 감도를 10%로 설정합니다.
```

#### 5.35 set_collision_mode(v)

충돌 후 정지 모드를 설정합니다.

<div class="warning custom-block">
    <p class="custom-block-title">주의</p>
    <ol>
        <li>
            이 함수에서 설정된 값은 프로그램 종료 후, 기본 값으로 돌아옵니다.
        </li>
        <li>
            이 함수를 별도로 호출하지 않을 경우, Setup 페이지에서 설정한 값이 사용됩니다.
        </li>
        <li>
            프로그램 흐름 중, 다시 이 함수가 호출되기 전까지 이 함수에서 설정된 값이 유지됩니다.
        </li>
    </ol>
</div>

- Input :<br>
  하나의 variable 또는 상수를 입력 인자로 가집니다.<br>
  v: 정지 모드.

  - 0 = 제자리 정지(General Stop)
  - 1 = 회피 정지(Evasion Stop)

- Return :<br>
  없음.

Example :

```
set_collision_mode(1)
# 충돌 감지 후, 외부 힘을 피하는 방향으로 로봇이 조금 이동 후 궤적 움직임을 정지합니다.
```

#### 5.36 set_collision_after(v)

충돌 후 정지 모드 시 프로그램 흐름을 설정합니다.

<div class="warning custom-block">
    <p class="custom-block-title">주의</p>
    <ol>
        <li>
            이 함수에서 설정된 값은 프로그램 종료 후, 기본 값으로 돌아옵니다.
        </li>
        <li>
            프로그램 흐름 중, 다시 이 함수가 호출되기 전까지 이 함수에서 설정된 값이 유지됩니다.
        </li>
    </ol>
</div>

- Input :<br>
  하나의 variable 또는 상수를 입력 인자로 가집니다.<br>
  v: 정지 모드.

  - 0 = 프로그램 흐름 일시 정지 (Pause) **(기본값)**
  - 1 = 프로그램 흐름 정지/종료 (Stop / Halt)

- Return :<br>
  없음.

Example :

```
set_collision_after(1)  # 외부 충돌 감지 후 프로그램 흐름이 정지(종료) 됩니다.
```

#### 5.37 set_speed_multiply(v)

전체 속도 배율 기능을 설정합니다.

<div class="warning custom-block">
    <p class="custom-block-title">주의</p>
    <ol>
        <li>
            이 함수에서 설정된 값은 프로그램 종료 후, 기본 값으로 돌아옵니다.
        </li>
        <li>
            프로그램 흐름 중, 다시 이 함수가 호출되기 전까지 이 함수에서 설정된 값이 유지됩니다.
        </li>
    </ol>
</div>

- Input :<br>
  하나의 variable 또는 상수를 입력 인자로 가집니다.<br>
  v: 배율 설정 **(0 에서 2 사이의 값) (기본값: 1)**

- Return :<br>
  없음.

Example :

```
var speed_override = 1.5
set_speed_multiply(speed_override)  # 현재 설정한 속도에 1.5배 하여 속도를 설정합니다.
```

#### 5.38 set_acc_multiply(v)

전체 가속도 배율 기능을 설정합니다.

<div class="warning custom-block">
    <p class="custom-block-title">주의</p>
    <ol>
        <li>
            이 함수에서 설정된 값은 프로그램 종료 후, 기본 값으로 돌아옵니다.
        </li>
        <li>
            프로그램 흐름 중, 다시 이 함수가 호출되기 전까지 이 함수에서 설정된 값이 유지됩니다.
        </li>
    </ol>
</div>

- Input :<br>
  하나의 variable 또는 상수를 입력 인자로 가집니다.<br>
  v: 배율 설정 **(0 에서 2 사이의 값) (기본값: 1)**

- Return :<br>
  없음.

Example :

```
var acc_override = 0.5
set_acc_multiply(acc_override)  # 현재 설정한 가속도에 0.5배 하여 가속도를 설정합니다.
```

#### 5.39 set_speed_acc_j(v, v)

J 계열 동작(Move J, Move JB, Move JL)의 고정된 관절 속도/가속도를 설정합니다.

<div class="warning custom-block">
    <p class="custom-block-title">주의</p>
    <ol>
        <li>
            이 함수에서 설정된 값은 프로그램 종료 후, 기본 값으로 돌아옵니다.
        </li>
        <li>
            프로그램 흐름 중, 다시 이 함수가 호출되기 전까지 이 함수에서 설정된 값이 유지됩니다.
        </li>
    </ol>
</div>

- Input :<br>
  두 개의 variable 또는 상수를 입력 인자로 가집니다.<br>
  v: 속도 (단위: 𝒅𝒆𝒈/𝒔)<br>
  음수 입력 시, 속도를 고정하지 않습니다.<br>
  v: 가속도 (단위: 𝒅𝒆𝒈/𝒔𝟐)<br>
  음수 입력 시, 가속도를 고정하지 않습니다.

- Return :<br>
  없음.

Example :

```
set_speed_acc_j(10, 3)  # Move 의 point 마다 설정된 속도/가속도를 무시하고,
                        # 속도 10𝑑𝑒𝑔/𝑠, 가속도 3𝑑𝑒𝑔/𝑠2 로 동작합니다.

set_speed_acc_j(-1, 5)  # Move 의 point 마다 설정된 속도만 이용하고,
                        # 가속도는 5𝑑𝑒𝑔/𝑠2 로 동작합니다.
```

#### 5.40 set_speed_acc_l(v, v)

L 계열 동작(Move L, Move PB, Move LB, Move ITPL)의 선형 속도/가속도를 설정합니다.

<div class="warning custom-block">
    <p class="custom-block-title">주의</p>
    <ol>
        <li>
            이 함수에서 설정된 값은 프로그램 종료 후, 기본 값으로 돌아옵니다.
        </li>
        <li>
            프로그램 흐름 중, 다시 이 함수가 호출되기 전까지 이 함수에서 설정된 값이 유지됩니다.
        </li>
    </ol>
</div>

- Input :<br>
  두 개의 variable 또는 상수를 입력 인자로 가집니다.<br>
  v: 속도 (단위: 𝒎𝒎/𝒔)<br>
  음수 입력 시, 속도를 고정하지 않습니다.<br>
  v: 가속도 (단위: 𝒎𝒎/𝒔𝟐)<br>
  음수 입력 시, 가속도를 고정하지 않습니다.

- Return :<br>
  없음.

Example :

```
set_speed_acc_l(15, 5)  # Move 의 point 마다 설정된 속도/가속도를 무시하고,
                        # 속도 15𝑚𝑚/𝑠, 가속도 5𝑚𝑚/𝑠2 로 동작합니다.

set_speed_acc_l(5, -1)  # Move 의 point 마다 설정된 가속도만 이용하고,
                        # 속도는 5𝑚𝑚/𝑠 로 동작합니다.
```

#### 5.41 set_speed_bar(v)

전체 속도 조절 바를 설정합니다. (UI 하단의 속도 조절 바)

<div class="warning custom-block">
    <p class="custom-block-title">주의</p>
    <ul>
        <li>
            UI Make 페이지에서 프로그램 구동 시, 안전슬라이드 바 옵션이 켜져 있을 경우 이 함수는 작동하지 않습니다.
        </li>
    </ul>
</div>

- Input :<br>
  하나의 variable 또는 상수를 입력 인자로 가집니다.<br>
  v: 속도 제어 바 위치 **(0 에서 1 사이의 값)**

- Return :<br>
  없음.

Example :

```
set_speed_bar(0.5)  # 속도 제어 바를 50%로 설정합니다.
```

#### 5.42 set_box_dout(v, v)

제어 박스의 디지털 출력을 설정합니다.

- Input :<br>
  두 개의 variable 변수 또는 상수를 입력 인자로 가집니다.<br>
  v: 제어 박스의 디지털 출력 포트 번호 **(0 ~ 15번)**<br>
  v: 디지털 출력 동작 **(-1 = Bypass, 0 = Low, 1 = High)**

- Return :<br>
  없음.

Example :

```
set_box_dout(0, 0)     # 0번 포트에서 low 출력
set_box_dout(0, -1)    # 0번 포트에서 low 유지
set_box_dout(0, 1)     # 0번 포트에서 high 출력
set_box_dout(0, -1)    # 0번 포트에서 high 유지
```

#### 5.43 set_box_aout(v, v)

제어 박스의 아날로그 출력을 설정합니다.

- Input :<br>
  두 개의 variable 또는 상수를 입력 인자로 가집니다.<br>
  v: 제어 박스의 아날로그 출력 포트 번호 **(0 ~ 3번)**<br>
  v: 아날로그 출력 전압 **(0 ~ 10V)**

- Return :<br>
  없음.

Example :

```
set_box_aout(3, 7)  # 3번 포트에서 7V를 출력합니다.
```

#### 5.44 set_box_dout_toggle(v)

제어 박스의 현재 디지털 출력을 토글하여 설정합니다.

- Input :<br>
  하나의 variable 또는 상수를 입력 인자로 가집니다.<br>
  v: 제어 박스의 디지털 출력 포트 번호 **(0 ~ 15번)**

- Return :<br>
  없음.

Example :

```
set_box_dout (1, 1)         # 1번 포트에서 high 출력
set_box_dout_toggle (1)     # 1번 포트를 토글하여 low 출력
repeat (1 times){           # 3번 포트 1초마다 깜빡
    set_box_dout_toggle(3)
    wait (1 sec)
}
```

#### 5.45 set_serial_tool(v, v, v)

로봇의 툴 플랜지에서 제공되는 serial 통신 (RS232/485)을 설정합니다.

<div class="warning custom-block">
    <p class="custom-block-title">주의</p>
    <ol>
        <li>
            이 함수에서 설정된 값은 프로그램 종료 후, 기본 값으로 돌아옵니다.
        </li>
        <li>
            이 함수를 별도로 호출하지 않을 경우, Setup 페이지에서 설정한 값이 사용됩니다.
        </li>
        <li>
            프로그램 흐름 중, 다시 이 함수가 호출되기 전까지 이 함수에서 설정된 값이 유지됩니다.
        </li>
    </ol>
</div>

- Input :<br>
  세 개의 variable 또는 상수를 입력 인자로 가집니다.<br>
  v: 통신 속도(Baud rate)<br>
  v: 스탑 비트(Stop bit), (0 or 1, **권장 1**)<br>
  v: 패리티 비트(Parity bit), (0 : none, 1 : odd, 2 : even, **권장 0**)

- Return :<br>
  없음.

Example :

```
set_serial_tool(115200, 1, 0)
# 툴플랜지 serial 통신 속도는 115200bps, 스탑 비트는 1, 패리티 비트는 none 으로 설정합니다.
```

#### 5.46 set_serial_box(v, v, v)

제어 박스에서 제공되는 serial 통신 (RS232/485)을 설정합니다.

<div class="warning custom-block">
    <p class="custom-block-title">주의</p>
    <ol>
        <li>
            이 함수에서 설정된 값은 프로그램 종료 후, 기본 값으로 돌아옵니다.
        </li>
        <li>
            이 함수를 별도로 호출하지 않을 경우, Setup 페이지에서 설정한 값이 사용됩니다.
        </li>
        <li>
            프로그램 흐름 중, 다시 이 함수가 호출되기 전까지 이 함수에서 설정된 값이 유지됩니다.
        </li>
    </ol>
</div>

- Input :<br>
  세 개의 variable 또는 상수를 입력 인자로 가집니다.<br>
  v: 통신 속도(Baud rate)<br>
  v: 스탑 비트(Stop bit), (0 or 1, **권장 1**)<br>
  v: 패리티 비트(Parity bit), (0 : none, 1 : odd, 2 : even, **권장 0**)

- Return :<br>
  없음.

Example :

```
set_serial_box(9600, 1, 0)
# 제어박스와 serial 통신 속도는 9600bps, 스탑 비트는 1, 패리티 비트는 none 으로 설정합니다.
```

#### 5.47 arm_powerdown()

로봇 팔 전력 공금을 중단합니다.

<div class="warning custom-block">
    <p class="custom-block-title">주의</p>
    <ul>
        <li>
            로봇 팔의 전원이 내려 갑니다. 사용에 주의하세요. 제어 박스는 꺼지지 않습니다.
        </li>
    </ul>
</div>

- Input :<br>
  없음.

- Return :<br>
  없음.

Example :

```
arm_powerdown()   # 에러 메시지와 함께 로봇 팔이 정지합니다.
```

#### 5.48 freedrive_teach_on()

직접 교시 모드를 켭니다.

<div class="warning custom-block">
    <p class="custom-block-title">주의</p>
    <ul>
        <li>
            본 함수를 수행 시 로봇 팔의 제어 모드가 변경됩니다. 주의하여 사용하세요.
        </li>
    </ul>
</div>

#### 5.49 freedrive_teach_off()

직접 교시 모드를 종료합니다.

<div class="warning custom-block">
    <p class="custom-block-title">주의</p>
    <ul>
        <li>
            본 함수를 수행 시 로봇 팔의 제어 모드가 변경됩니다. 주의하여 사용하세요.
        </li>
    </ul>
</div>

#### 5.50 db_write(s, v)

DataBase에 숫자 값을 저장합니다.

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

DataBase에 문자열을 저장합니다.

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

DataBase로부터 숫자 혹은 문자열을 읽어옵니다.

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

특정 주소 값까지 프로그램 실행을 하지 않습니다.

- Input :<br>
  하나의 주소 값 숫자를 입력으로 받습니다.<br>
  v: 주소 값 (0~99999)

- Return :<br>
  None.

Example :

```
# jump_here(1234)가 등장하는 지점까지 프로그램 흐름을 뛰어 넘습니다.
jump_to(1234)
```

#### 5.54 jump_here(v)

해당 시점부터 다시 프로그램을 수행합니다.

<div class="warning custom-block">
    <p class="custom-block-title">주의</p>
    <ul>
        <li>
            본 함수는 프로그램 최 상단 라인 (왼쪽)에 위치해야 합니다.
        </li>
    </ul>
</div>

- Input :<br>
  하나의 주소 값 숫자를 입력으로 받습니다.<br>
  v: 주소 값 (0~99999)

- Return :<br>
  없음.

Example :

```
# 아래의 예시에서 가운데 두 wait 줄은 무시 됩니다.
jump_to(1234)
wait (1.0 sec)
wait (2.0 sec)
jump_here(1234)
```

#### 5.55 jump_to_line(v)

특정 라인 (줄) 까지 이동합니다.

- Input :<br>
  하나의 라인 줄 번호를 입력으로 받습니다.<br>
  v: 줄 번호 (0~99999)

  - 줄 번호는 프로그램 최 상단 라인 (왼쪽)의 번호 입니다.
  - Begin은 0번줄, 그 아래는 1번줄 , 순으로 번호가 매겨집니다.

- Return :<br>
  없음.

Example :

```
# 줄 번호 2라인 으로 이동합니다.
jump_to_line(2)
```

#### 5.56 jump_to_begin()

첫 시작 점까지 이동합니다. jump_to_line(0)과 같은 효과 입니다.

- Input :<br>
  없음.

- Return :<br>
  없음.

Example :

```
# 프로그램 첫 줄로 이동합니다.
jump_to_begin()
```

### 6. 시스템 변수

<br>

#### 6.1 SD_TIME

SD_TIME<br>
SD_TIMER_0, SD_TIMER_1, …, SD_TIMER_9<br>

시간을 나타내는 변수입니다.<br>
Set 기능에서 원하는 값으로 변경 가능합니다.<br>
타이머 기능으로 사용됩니다.

프로그램 시간 흐름에 따라 자동으로 시간이 증가합니다.

#### 6.2 SD_J#\_REF

SD_J0_REF<br>
SD_J1_REF<br>
SD_J2_REF<br>
SD_J3_REF<br>
SD_J4_REF<br>
SD_J5_REF<br>

관절 지령 각도를 나타내는 변수입니다. **(단위: degree)**

#### 6.3 SD_J#\_ANG

SD_J0_ANG<br>
SD_J1_ANG<br>
SD_J2_ANG<br>
SD_J3_ANG<br>
SD_J4_ANG<br>
SD_J5_ANG<br>

관절 엔코더 각도를 나타내는 변수입니다. **(단위: degree)**

#### 6.4 SD_J#\_CUR

SD_J0_CUR<br>
SD_J1_CUR<br>
SD_J2_CUR<br>
SD_J3_CUR<br>
SD_J4_CUR<br>
SD_J5_CUR<br>

관절 전류 값을 나타내는 변수입니다. **(단위: A)**

#### 6.5 SD_BEGIN_J#

SD_BEGIN_J0<br>
SD_BEGIN_J1<br>
SD_BEGIN_J2<br>
SD_BEGIN_J3<br>
SD_BEGIN_J4<br>
SD_BEGIN_J5<br>

Begin 에서 설정한 관절 각도를 나타내는 변수입니다. **(단위: degree)**

#### 6.6 SD_TEMPERATURE_MC#

SD_TEMPERATURE_MC0<br>
SD_TEMPERATURE_MC1<br>
SD_TEMPERATURE_MC2<br>
SD_TEMPERATURE_MC3<br>
SD_TEMPERATURE_MC4<br>
SD_TEMPERATURE_MC5<br>

관절 온도를 나타내는 변수입니다. **(단위: celsius)**

#### 6.7 SD_TCP_X

SD_TCP_X<br>
SD_TCP_Y<br>
SD_TCP_Z<br>
SD_TCP_RX<br>
SD_TCP_RY<br>
SD_TCP_RZ<br>

TCP 기준 현재 직교 좌표계에서의 위치를 나타내는 변수입니다.

#### 6.8 SD_DEFAULT_SPEED

기본 속도 배율을 나타내는 변수입니다. UI 속도 조절 바 값이 0~1 사이로 표기 됩니다.

#### 6.9 SD_ROBOT_STATE

로봇 동작 명령 수행 중 여부를 나타냅니다.<br>

- 1 = Idle
- 3 = Moving

#### 6.10 SD_POWER_STATE

제어 박스의 파워 관리 정보를 비트 단위로 가지고 있습니다.

- SD_POWER_STATE >> 0 & 0x01 : 48V SMPS 작동 여부
- SD_POWER_STATE >> 1 & 0x01 : 파워 스위칭 회로 작동 정보
- SD_POWER_STATE >> 2 & 0x01 : 24V SMPS 작동 여부
- SD_POWER_STATE >> 3 & 0x01 : 48V 스위치 라인 여부
- SD_POWER_STATE >> 4 & 0x01 : PC 파워 스위칭 작동 여부
- SD_POWER_STATE >> 5 & 0x01 : 비상정지 스위치 작동 여부

#### 6.11 SD_COLLISION_DETECT_STATE

외부 충돌 감지 기능 on/off 여부

- 0 = 외부 충돌 감지 off 설정 상태
- 1 = 외부 충돌 감지 on 설정 상태

#### 6.12 SD_IS_FREE_DRIVE_MODE

직접 교시 사용 여부

- 0 = 직접 교시 off
- 1 = 직접 교시 on

#### 6.13 SD_PG_MODE

로봇의 동작 모드를 나타내는 변수입니다.

- 0 = 리얼 모드
- 1 = 시뮬레이션 모드

#### 6.14 SD_INIT_STATE_INFO

로봇의 활성화 단계 정보를 나타내는 시스템 변수입니다.

#### 6.15 SD_INIT_ERR

로봇의 활성화 에러 정보를 나타내는 시스템 변수입니다.

#### 6.16 SD_TFB_ANALOG_IN\_\#

SD_TFB_ANALOG_IN_0<br>
SD_TFB_ANALOG_IN_1

툴 플랜지 보드(TFB)의 아날로그 입력 포트 2개의 아날로그 값 (0 ~ 10V)을 가진 변수입니다.

#### 6.17 SD_TFB_DIGITAL_IN\_\#

SD_TFB_DIGITAL_IN_0<br>
SD_TFB_DIGITAL_IN_1

툴 플랜지 보드(TFB)의 디지털 입력 포트 2개의 디지털 값 (0 또는 1)을 가진 변수입니다.

#### 6.18 SD_TFB_DIGITAL_OUT\_\#

SD_TFB_DIGITAL_OUT_0<br>
SD_TFB_DIGITAL_OUT_1

툴 플랜지 보드(TFB)의 디지털 출력 포트 2개의 출력 값 (0 또는 1)을 가진 변수입니다.

#### 6.19 SD_TFB_VOLTAGE_OUT

툴 플랜지 보드(TFB)의 전압 출력 정보 (0 or 12 or 24V)를 나타내는 변수입니다.

#### 6.20 SD_OP_STAT_COLLISION_OCCUR

충돌이 발생했는지 나타내는 변수입니다.

- 0 = Idle
- 1 = 외부 충돌 발생

#### 6.21 SD_OP_STAT_SOS_FLAG

제어 박스 전원 문제 / 로봇 관절 제어기 / 기타 문제가 발생했는지 나타내는 변수입니다.

- 0 = Idle

#### 6.22 SD_OP_STAT_SELF_COLLISION

로봇 동작 중 자가 충돌 직전을 나타내는 변수입니다.

- 0 = Idle
- 1 = 자가 충돌 범위 진입

#### 6.23 SD_OP_STAT_ESTOP_OCCUR

프로그램 / 로봇의 일시정지 상태 여부를 나타내는 변수입니다.

- 0 = Idle
- 1 = 일시 정지 상태

#### 6.24 SD_OP_STAT_EMS_FLAG

로봇 제어 알고리즘 상의 솔루션이 없는 입력이 들어왔을 때를 나타내는 변수입니다.

- 0 = Idle

#### 6.25 SD_DIGITAL_IN_CONFIG\_\#

SD_DIGITAL_IN_CONFIG_0<br>
SD_DIGITAL_IN_CONFIG_1

보호 정지 단자 두 개의 정보를 나타냅니다. (Din 16/17)

#### 6.26 SD_INBOX_TRAP_FLAG\_\#

SD_INBOX_TRAP_FLAG_0<br>
SD_INBOX_TRAP_FLAG_1

로봇의 특정 부위가 특정 영역(Inbox)내에 들어왔는지 확인하는 변수입니다.

#### 6.27 SD_INBOX_CHECK_MODE\_\#

SD_INBOX_CHECK_MODE_0<br>
SD_INBOX_CHECK_MODE_1

Inbox 체크 모드에 대한 변수입니다.

- 0: No checking
- 1: Check Tool Flange Center (로봇 팔 말단의 툴 플랜지 중심이 특정 영역에 들어왔는지)
- 2: Check Tool Center Point (로봇 팔 말단의 설정된 TCP 가 특정 영역에 들어왔는지)
- 3: Check Tool Box (로봇 팔 말단에 가상으로 설정한 Box 가 특정 영역에 들어왔는지)
- 4: Check All (1,2,3 중에 하나라도 들어온 경우)

#### 6.28 SD_SOCK_IS_OPEN\_\#

SD_SOCK_IS_OPEN_0<br>
SD_SOCK_IS_OPEN_1<br>
SD_SOCK_IS_OPEN_2<br>
SD_SOCK_IS_OPEN_3<br>
SD_SOCK_IS_OPEN_4<br>

해당 번호의 소켓이 정상으로 open 되었는지, 서버와 정상 연결되었는지 여부를 나타내는 변수입니다. **(소켓 번호 : 0~4)**

#### 6.29 SD_SOCK_LAST_READ\_\#

SD_SOCK_LAST_READ_0<br>
SD_SOCK_LAST_READ_1<br>
SD_SOCK_LAST_READ_2<br>
SD_SOCK_LAST_READ_3<br>
SD_SOCK_LAST_READ_4<br>

해당 번호의 소켓으로 read 기능이 정상적으로 수행되었는지 여부를 나타내는 변수입니다 **(소켓 번호 : 0~4)**

#### 6.30 SD_HAND_TOKTOK

로봇 외부로부터 톡톡 치는 행위가 발생되었는지 여부를 나타내는 변수입니다.

#### 6.31 SD_FINISH_AT_EVENT

로봇의 동작 탈출 조건 방식으로 동작이 끝났는지 여부를 저장합니다.<br>

만약 동작 목표 지점까지 도달해서 동작이 끝난 것이라면 이 변수는 0, 만약 FinishAt 조건이 만족되어 동작이 끝난 것이라면 이 변수는 1 이 됩니다.

#### 6.32 SD_TCP_VEL_REF

현재 TCP 의 지령 선형 속도를 나타내는 변수입니다.

#### 6.33 SD_MOTION_TIME

단위 동작의 시간을 저장하는 변수입니다. 다음 동작이 실행되면 다시 0부터 시작됩니다.

#### 6.34 SD_ARM_POWER

로봇이 사용중인 파워를 나타내는 변수입니다.

#### 6.35 SD_IS_TPU_CONNECT

TPU 티칭 팬던트 유닛 태블릿 PC 의 연결 여부를 알려주는 변수입니다.

#### 6.36 SD_IS_RUN_IN_MAKE

현재 프로그램 운용이 Make 페이지에서 실행된 것이면 1이 저장됩니다.

#### 6.37 SD_IS_RUN_IN_PLAY

현재 프로그램 운용이 Play 페이지에서 실행된 것이면 1이 저장됩니다.

#### 6.38 SD_IS_INTENDED_STOP

사용자가 의도한 정지인지 나타내는 변수입니다.

#### 6.39 SD_MOVE_INDEX

Move PB / ITPL 등의 연속 동작에서 어느 지점을 통과 중 인지 번호를 알려줍니다.

### 7. 동작 함수

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

현재 수행 중인 동작이 완료될 때까지 기다리는 함수입니다.

- Input :<br>
  없음.

- Return :<br>
  없음.

Example :

```
# Move L 방식으로 my_destination 까지 움직임이 완료될 때까지 기다립니다.
point my_destination = {100,200,300,0,0,0}
move_l(my_destination, 20, 5, 0)
move_finish_wait()
```

#### 7.2 move_l(P, v, v, v=1)

TCP 가 목표 지점까지 직선으로 이동하는 함수입니다.

- Input :<br>
  하나의 point, 세 개의 variable 또는 상수를 입력 인자로 가집니다.<br>
  P: 목표 TCP 자세<br>
  v: 속도 (𝒎𝒎/𝒔)<br>
  v: 가속도 (𝒎𝒎/𝒔𝟐)<br>
  v: Wait flag (기본값: 1)

  - 0 = 기다리지 않음.
  - 1 = 동작 완료를 기다림.

- Return :<br>
  없음.

Example :

```
point my_point1 = {100,200,300,0,0,0}
point my_point2= {100,150,100,0,90,0}

move_l(my_point1, 20, 5)    # Move L 방식으로 my_point1 까지 움직입니다.
move_l(my_point2, 20, 5)    # Move L 방식으로 my_point2 까지 움직입니다.
```

#### 7.3 move_l_rel(P, v, v, v, v=1)

TCP 가 목표 지점까지 직선으로 이동하는 함수입니다. 목표 지점은 현재 TCP 값에 대한 상대 값으로 입력합니다.

- Input :<br>
  하나의 point, 네 개의 variable 또는 상수를 입력 인자로 가집니다.<br>
  P: 현재 TCP 에서 상대 이동할 TCP 량<br>
  v: 속도 (𝒎𝒎/𝒔)<br>
  v: 가속도 (𝒎𝒎/𝒔𝟐)<br>
  v: 상대 이동의 기준 좌표계

  - 0: 베이스 좌표계
  - 1: 툴 좌표계
  - 2: 사용자 좌표계 0
  - 3: 사용자 좌표계 1
  - 4: 사용자 좌표계 2

    v: Wait flag (기본값: 1)

  - 0 = 기다리지 않음.
  - 1 = 동작 완료를 기다림.

- Return :<br>
  없음.

Example :

```
# Base 좌표계 기준 y 로 100 z 로 -200 보내고 싶을 경우, 속도는 300mm/s 가속도는 400mm/ss
move_l_rel(pnt[0,100,-200,0,0,0], 300, 400, 0)

# 사용자 좌표계 2 기준 x 로 50 보내고 싶을 경우 (속도/가속도는 100 / 300)
move_l_rel(pnt[50,0,0,0,0,0], 100, 300, 4)
```

#### 7.4 move_j(J, v, v, v=1)

관절의 목표 지점까지 이동하는 함수입니다.

- Input :<br>
  하나의 joint, 세 개의 variable 또는 상수를 입력 인자로 가집니다.<br>
  J: 관절의 목표 지점<br>
  v: 속도 (단위: 𝒅𝒆𝒈/𝒔)<br>
  v: 가속도 (단위: 𝒅𝒆𝒈/𝒔𝟐)<br>
  v: Wait flag (기본값: 1)

  - 0 = 기다리지 않음.
  - 1 = 동작 완료를 기다림.

- Return :<br>
  없음.

Example :

```
move_j (jnt[0,0,90,0,90,0], 60, 80)   # Move J 방식으로 특정 각도 까지 움직입니다.

jnt my_joint_angle = {0,0,90,0,90,0}
move_j (my_joint_angle, 60, 80)       # Move J 방식으로 특정 각도 까지 움직입니다.
```

#### 7.5 move_j_rel(J, v, v, v=1)

현재 관절 자세에서 주어진 변위 만큼 상대적으로 이동하는 함수입니다.

- Input :<br>
  하나의 joint, 세 개의 variable 또는 상수를 입력 인자로 가집니다.<br>
  J: 관절의 상대 이동 각도<br>
  v: 속도 (단위: 𝒅𝒆𝒈/𝒔)<br>
  v: 가속도 (단위: 𝒅𝒆𝒈/𝒔𝟐)<br>
  v: Wait flag (기본값: 1)

  - 0 = 기다리지 않음.
  - 1 = 동작 완료를 기다림.

- Return :<br>
  없음.

Example :

```
# Move J 방식으로 현재 자세에서 주어진 양만큼 상대적으로 움직입니다.
move_j_rel (jnt[0,0,90,0,90,0], 60, 80)

# Move J 방식으로 현재 자세에서 주어진 양만큼 상대적으로 움직입니다.
jnt del_joint_angle = {0,0,90,0,90,0}
move_j_rel (del_joint_angle, 60, 80)
```

#### 7.6 move_jl(P, v, v, v=1)

목표 지점까지 직선이 아닌 move_j 방식을 이용하여 이동하는 함수입니다.

- Input :<br>
  하나의 point, 세 개의 variable 또는 상수를 입력 인자로 가집니다.<br>
  P: 목표점 TCP 자세<br>
  v: 속도 (단위: 𝒅𝒆𝒈/𝒔)<br>
  v: 가속도 (단위: 𝒅𝒆𝒈/𝒔𝟐)<br>
  v: Wait flag (기본값: 1)

  - 0 = 기다리지 않음.
  - 1 = 동작 완료를 기다림.

- Return :<br>
  없음.

Example :

```
point my_point1 = {100,200,300,0,0,0}
point my_point2 = {100,150,100,0,90,0}

move_jl(my_point1, 20, 5)   # Move J 방식으로 my_point1 까지 움직입니다.
move_jl(my_point2, 20, 5)   # Move J 방식으로 my_point2 까지 움직입니다.
```

#### 7.7 move_pb_clear()

Move PB 에 사용되는 포인트 리스트를 초기화 하는 함수입니다.

- Input :<br>
  없음.

- Return :<br>
  없음.

Example :

```
move_pb_clear()   # Move PB 에 사용되기 위한 포인트들을 초기화 합니다.
```

#### 7.8 move_pb_add(P, v, v, v)

Move PB 에 사용되는 포인트를 리스트에 추가하는 함수입니다.

- Input :<br>
  하나의 point, 세 개의 variable 또는 상수를 입력 인자로 가집니다.<br>
  P: 목표 TCP 자세<br>
  v: 속도 (단위: 𝒎𝒎/𝒔)<br>
  v: 블랜딩 옵션

  - 0 = 비율 기준 블랜딩.
  - 1 = 거리 기준 블랜딩.

  v: 블랜딩 양 (0~1 사이 값 / 또는 거리 (mm) )

- Return :<br>
  없음.

Example :

```
point my_point1 = {100,200,0,0,0,0}
point my_point2 = {150,0,50,0,0,0}

# Move PB 포인트로 my_point1 을 속도 50𝑚𝑚/𝑠, 50% 블랜딩 설정으로 추가합니다.
move_pb_add(my_point1, 50, 0, 0.5)

# Move PB 포인트로 my_point2 를 속도 100𝑚𝑚/𝑠, 50mm 블랜딩 설정으로 추가합니다.
move_pb_add(my_point2, 100, 1, 50)
```

#### 7.9 move_pb_run(v, v, v=1)

move_pb_add 에서 추가된 포인트를 이용하여 Move PB 를 실행하는 함수입니다.

- Input :<br>
  세 개의 variable 변수 또는 상수를 입력 인자로 가집니다.<br>
  v: 가속도 (단위: 𝒎𝒎/𝒔𝟐 )<br>
  v: 회전옵션

  - 0 = Intended (사용자가 티칭한 회전 값을 추종함)
  - 1 = Constant (시작 위치의 회전 값을 유지함)

  v: Wait flag **(기본값: 1)**

  - 0 = 기다리지 않음.
  - 1 = 동작 완료를 기다림.

- Return :<br>
  없음.

Example :

```
point my_point1 = {100,200,0,0,0,0}
point my_point2 = {150,0,50,0,0,0}

move_pb_clear()                     # Move PB 에 사용되기 위한 포인트들을 초기화 합니다.
move_pb_add(my_point1, 50, 0, 0.5)  # Move PB 포인트로 my_point1 을 속도 50𝑚𝑚/𝑠, 50% 블랜딩 설정으로 추가합니다.
move_pb_add(my_point2, 100, 1, 50)  # Move PB 포인트로 my_point2 를 속도 100𝑚𝑚/𝑠, 50mm 블랜딩 설정으로 추가합니다.

move_pb_run(200, 1)                 # 앞서 설정된 블랜딩 옵션을 이용하여 my_point2 까지 이동합니다.
                                    # 이 때, 회전 값은 시작위치와 같은 값을 유지합니다.
```

#### 7.10 move_itpl_clear()

Move ITPL 에 사용되는 포인트 리스트를 초기화 하는 함수입니다.

- Input :<br>
  없음.

- Return :<br>
  없음.

Example :

```
move_itpl_clear()   # Move ITPL 에 사용되기 위한 포인트들을 초기화 합니다.
```

#### 7.11 move_itpl_add(P, v)

Move ITPL 에 사용되는 포인트를 리스트에 추가하는 함수입니다.

- Input :<br>
  하나의 point, 하나의 variable 또는 상수를 입력 인자로 가집니다.<br>
  P: 목표 TCP 자세<br>
  v: 속도 (단위: 𝒎𝒎/𝒔)

- Return :<br>
  없음.

Example :

```
point my_point1 = {100,200,0,0,0,0}
point my_point2 = {150,0,50,0,0,0}

# Move ITPL 포인트로 my_point1 을 속도 50𝑚𝑚/𝑠로 추가합니다.
move_itpl_add(my_point1, 50)

# Move ITPL 포인트로 my_point2 를 속도 100𝑚𝑚/𝑠로 추가합니다.
move_itpl_add(my_point2, 100)
```

#### 7.12 move_itpl_run(v, v, v=1)

move_itpl_add 에서 추가된 포인트를 이용하여 Move ITPL 을 실행하는 함수입니다.

- Input :<br>
  세 개의 variable 변수 또는 상수를 입력 인자로 가집니다.<br>
  v: 가속도<br>
  v: 회전옵션

  - 0 = Intended (사용자가 티칭한 회전 값을 추종함)
  - 1 = Constant (시작 위치의 회전 값을 유지함)
  - 2 = Reserved (사용하지 않음)
  - 3 = Smooth (Intended 와 유사하지만, 회전 변화율이 부드럽게 변함)
  - 4 = Reserved (사용하지 않음)
  - 5 = CA-Intended (CA 모드로 Intended 를 수행함)
  - 6 = CA-Constant (CA 모드로 Constant 를 수행함)
  - 7 = Reserved (사용하지 않음)
  - 8 = CA-Smooth (CA 모드로 Smooth 를 수행함)<br>
    CA: Combined Arc 모드

  v: Wait flag **(기본값: 1)**

  - 0 = 기다리지 않음.
  - 1 = 동작 완료를 기다림.

- Return :<br>
  없음.

Example :

```
point my_point1 = {100,200,0,0,0,0}
point my_point2 = {150,0,50,0,0,0}

move_itpl_clear()               # Move ITPL 에 사용되기 위한 포인트들을 초기화 합니다.

move_itpl_add(my_point1, 50)    # Move ITPL 포인트로 my_point1 을 속도 50𝑚𝑚/𝑠로 추가합니다.
move_itpl_add(my_point2, 100)   # Move ITPL 포인트로 my_point2 을 속도 100𝑚𝑚/𝑠로 추가합니다.

move_itpl_run(200, 1)           # Interpolation 동작으로 my_point2 까지 이동합니다.
                                # 이 때 회전 값은 사용자가 티칭한 회전 값을 사용합니다.
```

#### 7.13 move_pro_clear()

Move Pro에 사용되는 포인트 리스트를 초기화 하는 함수입니다.

- Input :<br>
  없음.

- Return :<br>
  없음.

Example :

```
# Move Pro에 사용되기 위한 포인트들을 초기화 합니다.
move_pro_clear()
```

#### 7.14 move_pro_add(P, v, v, v)

Move Pro에 사용되는 포인트를 리스트에 추가하는 함수입니다.

- Input :<br>
  하나의 point, 세 개의 variable 또는 상수를 입력 인자로 가집니다.<br>
  P: 목표 TCP 자세<br>
  v: 속도 (단위: 𝒎𝒎/𝒔)<br>
  v: 포인트 타입

  - 0 = 직선
  - 1 = 코너 (원호)
  - 2 = 블랜드 (거리 기반)
  - 3 = 블랜드 (% 기반)

  v: 블랜딩 양 (타입 2 또는 3에서 사용)

- Return :<br>
  없음.

Example :

```
point my_point1 = {100,200,0,0,0,0}
point my_point2 = {150,0,50,0,0,0}

# Move Pro 포인트로 my_point1을 속도 50𝑚𝑚/𝑠, 에 직선-웨이포인트로 추가합니다.
move_pro_add(my_point1, 50, 0, 0)

# Move Pro 포인트로 my_point2를 속도 100𝑚𝑚/𝑠, 에 원호-웨이포인트로 추가합니다.
move_pro_add(my_point2, 100, 1, 0)
```

#### 7.15 move_pro_run(v, v, v=1)

move_pro_add 에서 추가된 포인트를 이용하여 Move Pro를 실행하는 함수입니다.

- Input :<br>
  세 개의 variable 변수 또는 상수를 입력 인자로 가집니다.<br>
  v: 가속도 (단위: 𝒎𝒎/𝒔𝟐)<br>
  v: 회전옵션

  - 0 = Intended (사용자가 티칭한 회전 값을 추종함)
  - 1 = Constant (시작 위치의 회전 값을 유지함)

  v: Wait flag (기본값: 1)

  - 0 = 기다리지 않음.
  - 1 = 동작 완료를 기다림.

- Return :<br>
  없음.

Example :

```
point my_point1 = {100,200,0,0,0,0}
point my_point2 = {150,0,50,0,0,0}

# Move Pro에 사용되기 위한 포인트들을 초기화 합니다.
move_pro_clear()

# Move Pro 포인트로 my_point1을 속도 50𝑚𝑚/𝑠 + 선형 지점 웨이포인트
move_pro_add(my_point1, 50, 0, 0)

# Move Pro 포인트로 my_point2를 속도 100𝑚𝑚/𝑠, + 코너 (원호) 지점 웨이포인트
move_pro_add(my_point2, 100, 1, 0)

# Move Pro 포인트 추가 + 선형 지점 웨이포인트
move_pro_add(pnt[150, 0, 400,0,0,0], 50, 0, 0.5)

move_pro_run(200, 1)
```

#### 7.16 move_xb_clear()

MoveXB(L타입과 J타입 블랜드)에 사용되는 포인트 리스트를 초기화 하는 함수입니다.

- Input :<br>
  없음.

- Return :<br>
  없음.

Example :

```
# MoveXB에 사용되기 위한 포인트들을 초기화 합니다.
move_xb_clear()
```

#### 7.17 move_xb_add(P, v, v, v, v)

MoveXB에 사용되는 포인트를 리스트에 추가하는 함수입니다. (L-타입 동작 추가)

- Input :<br>
  P: 목표 TCP 자세<br>
  v: 속도 (단위: 𝒎𝒎/𝒔)<br>
  v: 가속도 (단위: 𝒎𝒎/𝒔𝟐)<br>
  v: 블랜드 타입 (0 = % 기반 블랜드, 1 = mm거리 기반 블랜드)<br>
  v: 블랜드 값 (블랜드 타입에 따라 % 혹은 mm)

- Return :<br>
  없음.

Example :

```
move_xb_add(pnt[100,200,300,90,0,90], 100, 400, 0, 100)
```

#### 7.18 move_xb_add(J, v, v, v, v)

MoveXB에 사용되는 포인트를 리스트에 추가하는 함수입니다. (J-타입 동작 추가)

- Input :<br>
  J: 목표 관절각도 자세<br>
  v: 속도 (단위: %)<br>
  v: 가속도 (단위: %)<br>
  v: 블랜드 타입 (0 = % 기반 블랜드, 1 = mm거리 기반 블랜드)<br>
  v: 블랜드 값 (블랜드 타입에 따라 % 혹은 mm)

- Return :<br>
  없음.

Example :

```
move_xb_add(jnt[0,0, 90,0,90,0], 50, 40, 0, 100)
```

#### 7.19 move_xb_run(v, v=1)

move_xb_add 에서 추가된 포인트를 이용하여 MoveXB를 실행하는 함수입니다.

- Input :<br>
  v: 궤적 블랜딩 옵션

  - 0 = 속도 기반 블랜딩
  - 1 = 위치 기반 블랜딩

  v: Wait flag (기본값: 1)

  - 0 = 기다리지 않음.
  - 1 = 동작 완료를 기다림.

- Return :<br>
  없음.

Example :

```
move_xb_clear()

move_xb_add(pnt[100,200,300,90,0,90], 100, 400, 0, 100)
move_xb_add(jnt[0,0, 90,0,90,0], 50, 40, 0, 100)

move_xb_run(0, 0)
```

#### 7.20 move_lc_clear()

Move LC 에 사용되는 포인트 리스트를 초기화 하는 함수입니다.

- Input :<br>
  없음.

- Return :<br>
  없음.

Example :

```
move_lc_clear()   # Move LC 에 사용되기 위한 포인트들을 초기화 합니다.
```

#### 7.21 move_lc_add(P, v, v)

Move LC 에 사용되는 포인트를 리스트에 추가하는 함수입니다.

- Input :<br>
  하나의 point, 두 개의 variable 또는 상수를 입력 인자로 가집니다.<br>
  P: 목표 TCP 자세<br>
  v: 속도 (단위: 𝒎𝒎/𝒔)<br>
  v: 해당 포인트의 속성 (0 또는 1)

  - 0 = 직선 통과
  - 1 = 원형으로 통과

- Return :<br>
  없음.

Example :

```
point my_point1 = {100,200,0,0,0,0}
point my_point2 = {150,0,50,0,0,0}

move_lc_add(my_point1, 50, 1)   # Move LC 포인트로 my_point1 을 속도 50𝑚𝑚/𝑠로 추가합니다.
move_lc_add(my_point2, 100, 0)  # Move LC 포인트로 my_point2 를 속도 100𝑚𝑚/𝑠로 추가합니다.
```

#### 7.22 move_lc_run(v, v, v=1)

move_lc_add 에서 추가된 포인트를 이용하여 Move LC 을 실행하는 함수입니다.

- Input :<br>
  세 개의 variable 또는 상수를 입력 인자로 가집니다.<br>
  v: 가속도<br>
  v: 회전옵션

  - 0 = Intended (사용자가 티칭한 회전 값을 추종함)
  - 1 = Constant (시작 위치의 회전 값을 유지함)
  - 2 = Reserved (사용하지 않음)
  - 3 = Smooth (Intended 와 유사하지만, 회전 변화율이 부드럽게 변함)
  - 4 = Reserved (사용하지 않음)

  v: Wait flag **(기본값: 1)**

  - 0 = 기다리지 않음.
  - 1 = 동작 완료를 기다림.

- Return :<br>
  없음.

Example :

```
point my_point1 = {100,200,0,0,0,0}
point my_point2 = {150,0,50,0,0,0}

move_lc_clear()  # Move LC 에 사용되기 위한 포인트들을 초기화 합니다.

move_lc_add(my_point1, 50, 1)   # Move LC 포인트로 my_point1 을 속도 50𝑚𝑚/𝑠로 추가합니다.
move_lc_add(my_point2, 100, 0)  # Move LC 포인트로 my_point2 을 속도 100𝑚𝑚/𝑠로 추가합니다.

move_lc_run(200, 1)   # Linear & Cicle 동작을 사용하여 my_point2 까지 이동합니다.
                      # 이 때 회전 값은 사용자가 티칭한 회전 값을 사용합니다.
```

#### 7.23 move_lb_clear()

Move LB 에 사용되는 포인트 리스트를 초기화 하는 함수입니다.

- Input :<br>
  없음.

- Return :<br>
  없음.

Example :

```
move_lb_clear()   # Move LB 에 사용되기 위한 포인트들을 초기화 합니다.
```

#### 7.24 move_lb_add(P, v)

Move LB 에 사용되는 포인트를 리스트에 추가하는 함수입니다.

- Input :<br>
  하나의 point, 하나의 variable 또는 상수를 입력 인자로 가집니다.<br>
  P: 목표 TCP 자세<br>
  v: 블랜딩 양(거리 (mm))<br>
  **※ Move PB 와 달리 비율 블랜딩은 지원하지 않습니다.**

- Return :<br>
  없음.

Example :

```
point my_point1 = {100,200,0,0,0,0}
point my_point2 = {150,0,50,0,0,0}

move_lb_add(my_point1, 20)  # Move LB 포인트로 my_point1 을 거리 20 mm 블랜딩으로 추가합니다.
move_lb_add(my_point2, 20)  # Move LB 포인트로 my_point2 를 거리 20 mm 블랜딩으로 추가합니다.
```

#### 7.25 move_lb_run(v, v, v, v=1)

move_lb_add 에서 추가된 포인트를 이용하여 Move LB 를 실행하는 함수입니다.

- Input :<br>
  네 개의 variable 또는 상수를 입력 인자로 가집니다.<br>
  v: 속도 (단위: 𝒎𝒎/𝒔)<br>
  v: 가속도 (단위: 𝒎𝒎/𝒔𝟐)<br>
  v: 회전옵션

  - 0 = Intended (사용자가 티칭한 회전 값을 추종함)
  - 1 = Constant (시작 위치의 회전 값을 유지함)

  v: Wait flag **(기본값: 1)**

  - 0 = 기다리지 않음.
  - 1 = 동작 완료를 기다림.

- Return :<br>
  없음.

Example :

```
point my_point1 = {100,200,0,0,0,0}
point my_point2 = {150,0,50,0,0,0}

move_lb_clear()  # Move LB 에 사용되기 위한 포인트들을 초기화 합니다.

move_lb_add(my_point1, 20)   # Move LB 포인트로 my_point1을 거리 20 mm 블랜딩으로 추가합니다.
move_lb_add(my_point2, 20)   # Move LB 포인트로 my_point2를 거리 20 mm 블랜딩으로 추가합니다.

move_lb_run(50, 20, 1)  # 앞서 설정된 거리 20mm 블랜딩 옵션을 이용하여 my_point2 까지 이동합니다.
                        # 이 때 회전 값은 시작위치와 같은 값을 유지합니다.
```

#### 7.26 move_c_points(P, P, v, v, v, v=1)

목표 지점을 지나는 호를 그리는 움직임을 수행하는 함수입니다.

- Input :<br>
  두 개의 point, 네 개의 variable 또는 상수를 입력 인자로 가집니다.<br>
  P: 경유 지점<br>
  P: 목표 지점<br>
  v: 속도 (단위: 𝒎𝒎/𝒔)<br>
  v: 가속도 (단위: 𝒎𝒎/𝒔𝟐)<br>
  v: 회전옵션

  - 0 = Intended (사용자가 티칭한 회전 값을 추종함)
  - 1 = Constant (시작 위치의 회전 값을 유지함)
  - 2 = Radial (원의 회전에 따라 TCP 를 회전함)
  - 3 = Smooth (Intended 와 유사하지만 경유 지점의 회전 설정은 무시함)

  v: Wait flag **(기본값: 1)**

  - 0 = 기다리지 않음.
  - 1 = 동작 완료를 기다림.

- Return :<br>
  없음.

Example :

```
point my_point1 = {100,100,300,0,90,0}
point my_point2 = {200,200,200,0,90,45}

move_c_points(my_point, my_point2, 50, 10, 2)
# my_point1 을 경유지점으로 하여 my_point2 까지 호를 그리며 움직입니다.
# 회전 동작의 중심점을 기준으로 TCP 의 회전 자세를 함께 이동합니다.
```

#### 7.27 move_c_axis(P, v, v, v, v, v, v, v, v=1)

회전 중심과 회전 축 정보를 이용하여 호를 그리는 움직임을 수행하는 함수입니다.

- Input :<br>
  하나의 point, 일곱 개의 variable 또는 상수를 입력 인자로 가집니다.<br>
  P: 회전 중심점 **(단위: mm)**<br>
  v: x 축 벡터<br>
  v: y 축 벡터<br>
  v: z 축 벡터<br>
  v: 회전 각도 **(단위: deg)**<br>
  v: 속도 **(단위: 𝒎𝒎/𝒔)**<br>
  v: 가속도 **(단위: 𝒎𝒎/𝒔𝟐)**<br>
  v: 회전옵션

  - 0 = Intended **(아래의 Constant 와 동일하게 움직임)**
  - 1 = Constant (시작 위치의 회전 값을 유지함)
  - 2 = Radial (원의 회전에 따라 TCP 를 회전함)

  v: Wait flag **(기본값: 1)**

  - 0 = 기다리지 않음.
  - 1 = 동작 완료를 기다림.

- Return :<br>
  없음.

Example :

```
point my_point = {200,200,200,0,0,0}

move_c_axis(my_point, 1, 0, 0, 180, 50, 10, 2)
# my_point1 을 중심으로 하여 x 축 방향으로 180 도 움직입니다.
# 회전 동작의 중심점을 기준으로 TCP 의 회전 자세를 함께 이동합니다.
```

#### 7.28 move_jb_clear()

Move JB 에 사용되는 관절을 정보 리스트를 초기화 하는 함수입니다.

- Input :<br>
  없음.

- Return :<br>
  없음.

Example :

```
move_jb_clear()   # Move JB 에 사용되기 위한 관절들을 초기화 합니다.
```

#### 7.29 move_jb_add(J)

Move JB 에 사용되는 관절 정보를 리스트에 추가하는 함수입니다.

- Input :<br>
  하나의 joint 를 입력 인자로 가집니다.<br>
  J: 목표 관절

- Return :<br>
  없음.

Example :

```
jnt my_joint1 = {0, 0,0,0,0,0}
jnt my_joint2 = {90,30,15,0,0,0}

move_jb_add(my_joint1)  # Move JB 관절로 my_joint1 을 추가합니다.
move_jb_add(my_joint2)  # Move JB 관절로 my_joint2 를 추가합니다.
```

#### 7.30 move_jb_run(v, v, v=1)

move_jb_add 에서 추가된 포인트를 이용하여 Move JB 를 실행하는 함수입니다.

- Input :<br>
  세 개의 variable 또는 상수를 입력 인자로 가집니다.<br>
  v: 속도 (𝒅𝒆𝒈/𝒔)<br>
  v: 가속도 (𝒅𝒆𝒈/𝒔𝟐)<br>
  v: Wait flag **(기본값: 1)**

  - 0 = 기다리지 않음.
  - 1 = 동작 완료를 기다림.

- Return :<br>
  없음.

Example :

```
jnt my_joint1 = {0, 0,0,0,0,0}
jnt my_joint2 = {90,30,15,0,0,0}

move_jb_clear()         # Move JB 에 사용되기 위한 관절들을 초기화 합니다.

move_jb_add(my_joint1)  # Move JB 관절로 my_joint1 을 추가합니다.
move_jb_add(my_joint2)  # Move JB 관절로 my_joint2 를 추가합니다.

move_jb_run(50, 20)     # 앞서 설정된 관절들 위치로 정지없이 부드럽게 이동합니다
```

#### 7.31 move_jb2_clear()

Move JB2(시간 기반블랜딩)에 사용되는 관절을 정보 리스트를 초기화 하는 함수입니다.

- Input :<br>
  없음.

- Return :<br>
  없음.

Example :

```
# Move JB2에 사용되기 위한 관절들을 초기화 합니다.
move_jb2_clear()
```

#### 7.32 move_jb2_add(J, v, v, 0, v)

Move JB2에 사용되는 관절 정보를 리스트에 추가하는 함수입니다.

- Input :<br>
  하나의 joint를 입력 인자로 가집니다.<br>
  J: Target joint angles<br>
  v: 속도 (𝒅𝒆𝒈/𝒔)<br>
  v: 가속도 (𝒅𝒆𝒈/𝒔𝟐)<br>
  0: 더미<br>
  v: 블랜드 율 (%)

- Return :<br>
  없음.

Example :

```
jnt my_joint1 = {0, 0,0,0,0,0}
jnt my_joint2 = {90,30,15,0,0,0}

# Move JB2 관절로 my_joint1을 추가합니다. 블랜드 율 50%
move_jb2_add(my_joint1, 60, 80, 0, 50)

# Move JB2 관절로 my_joint2를 추가합니다. 블랜드 율 100%
move_jb2_add(my_joint2, 90, 100, 0, 100)
```

#### 7.33 move_jb2_run( v=1)

move_jb_add2 에서 추가된 포인트를 이용하여 Move JB2를 실행하는 함수입니다.

- Input :<br>
  v: Wait flag (기본값: 1)

  - 0 = 기다리지 않음.
  - 1 = 동작 완료를 기다림.

- Return :<br>
  없음.

Example :

```
jnt my_joint1 = {0, 0,0,0,0,0}
jnt my_joint2 = {90,30,15,0,0,0}

# Move JB2에 사용되기 위한 관절들을 초기화 합니다.
move_jb2_clear()

# Move JB2 관절로 my_joint1을 추가합니다.
move_jb2_add(my_joint1, 10, 20, 0, 100)
# Move JB2 관절로 my_joint2를 추가합니다.
move_jb2_add(my_joint2, 60, 80, 0, 80)

# 앞서 설정된 관절들 위치로 정지없이 부드럽게 이동합니다.
move_jb2_run()
```

#### 7.34 Servo J

move_servo_j(jnt[j0, j1, j2, j3, j4, j5], t1, t2, gain, alpha)

- j0 ~ j5 : Desired Joint angle in degree (-360 ~ 360)
- t1 : 목표 지점까지 도착 시간 (t1 >= 0.002)
- t2 : 도착한 후, 해당 동작을 유지할 시간 (0.02 < t2 < 0.2)
- gain : 속도 추종률 (gain > 0)
- alpha : low-pass-filter gain. 작을수록 동작이 부드러워짐 (0 < alpha < 1)

#### 7.35 Servo L

move_servo_l(pnt[x, y, z, rx, ry, rz], t1, t2, gain, alpha)

- x,y,z,rx,ry,rz : Desired Cartesian posture in mm,deg unit (ZY'X'' Euler)
- t1 : 목표 지점까지 도착 시간 (t1 >= 0.002)
- t2 : 도착한 후, 해당 동작을 유지할 시간 (0.02 < t2 < 0.2)
- gain : 속도 추종률 (gain > 0)
- alpha : low-pass-filter gain. 작을수록 동작이 부드러워짐 (0 < alpha < 1)

#### 7.36 Servo T

move_servo_t(jnt[jt0, jt1, jt2, jt3, jt4, jt5], t1, t2, mode)

- jt0 ~ jt5 : Torque values in Nm unit
- t1 : 목표 지점까지 도착 시간 (t1 >= 0.002)
- t2 : 도착한 후, 해당 동작을 유지할 시간 (0.02 < t2 < 0.3)
- mode :<br>
  0 = 절대값 모드 : 제어 토크 = 입력된 토크<br>
  1 = 상대값 모드 1 : 제어 토크 = 입력된 토크 + 로봇 팔 자중<br>
  2 = 상대값 모드 2 : 제어 토크 = 입력된 토크 + 마찰보상30%<br>
  3 = 상대값 모드 3 : 제어 토크 = 입력된 코드 + 로봇 팔 자중 + 마찰보상30%

#### 7.37 Speed J

move_speed_j(jnt[dj0, dj1, dj2, dj3, dj4, dj5], t1, t2, gain, alpha)

- dj0 ~ dj5 : Desired Joint angle speed in degree / sec(deg/s)
- t1 : 목표 지점까지 도착 시간 (t1 >= 0.002)
- t2 : 도착한 후, 해당 동작을 유지할 시간 (0.02 < t2 < 0.2)
- gain : 속도 추종률 (gain = 1)
- alpha : Low-pass-filter gain. 작을수록 동작이 부드러워짐 (0 < alpha < 1)

#### 7.38 Speed L

move_speed_l(pnt[dx, dy, dz, drx, dry, drz], t1, t2, gain, alpha)

- dx,dy,dz,drx,dry,drz : Desired Cartesian posture speed in mm/s, deg/s unit (ZY'X'' Euler)
- t1 : 목표 지점까지 도착 시간 (t1 >= 0.002)
- t2 : 도착한 후, 해당 동작을 유지할 시간 (0.02 < t2 < 0.2)
- gain : 속도 추종률 (gain > 0)
- alpha : low-pass-filter gain. 작을수록 동작이 부드러워짐 (0 < alpha < 1)

#### 7.39 Jog-L

jog_robot_l(모드, x속도, y속도, z속도, rx속도, ry속도, rz속도)<br>
jog_robot_l(모드, x속도, y속도, z속도, rx속도, ry속도, rz속도, 가속비율, 감속비율)

- 모드<br>
  0: 정지<br>
  1: Global 좌표계<br>
  2: Tool 좌표계<br>
  3 ~ 5: User 좌표계 0~2
- x,y,z 속도<br>
  mm/s 단위 (-250 ~ 250)
- rx,ry,rz 속도<br>
  deg/s 단위 (-45 ~ 45)
- 가/감속비율<br>
  기본값1.0<br>
  범위: 0~10.0<br>
  크게주면 더 빠르게 가/감속, 작은값주면 천천히 가/감속

#### 7.40 Jog-J

jog_robot_j(모드, 0속도, 1속도, 2속도, 3속도, 4속도, 5속도)<br>
jog_robot_j(모드, 0속도, 1속도, 2속도, 3속도, 4속도, 5속도, 가속비율, 감속비율)

- 모드<br>
  0: 정지<br>
  1: 로봇 팔 관절<br>
  2: 부가축
- 0~5 속도<br>
  deg/s 단위 (각 축의 속도 제한 범위에 따라 다름)
- 가/감속비율<br>
  기본값1.0<br>
  범위: 0~10.0<br>
  크게주면 더 빠르게 가/감속, 작은값주면 천천히 가/감속

### 8. 그리퍼 및 센서 함수

<br>

#### 8.1 gripper_rtq_hande_init(v)

Robotiq 사의 Hand-E 그리퍼 초기화 함수

- Input :<br>
  v: 그리퍼/센서의 연결 포트입니다.

  - 0 = 툴 플랜지의 RS485
  - 1 = 제어 박스의 RS485

- Return :<br>
  없음.

Example :

```
gripper_rtq_hande_init(1)  # 그리퍼 통신선이 제어박스에 연결되었을 경우
```

#### 8.2 gripper_rtq_hande_reset(v)

Robotiq 사의 Hand-E 그리퍼 리셋 함수

- Input :<br>
  v: 그리퍼/센서의 연결 포트입니다

  - 0 = 툴 플랜지의 RS485
  - 1 = 제어 박스의 RS485

- Return :<br>
  없음.

Example :

```
gripper_rtq_hande_reset(1)  # 그리퍼 통신선이 제어박스에 연결되었을 경우
```

#### 8.3 gripper_rtq_hande_go(v, v, v, v)

Robotiq 사의 Hand-E 그리퍼 이동 함수.

- Input :<br>
  v: 그리퍼/센서의 연결 포트입니다

  - 0 = 툴 플랜지의 RS485
  - 1 = 제어 박스의 RS485

  v: 목표 위치 % 값 (범주: 0~100)<br>
  v: 목표 속도 % 값 (범주: 0~100)<br>
  v: 목표 힘 % 값 (범주: 0~100)

- Return :<br>
  없음.

Example :

```
gripper_rtq_hande_go(1, 100, 50, 100)
# 제어박스에 연결된 그리퍼를 위치 100%로 움직이다. (with 속도 50%, 힘 100%)
```

#### 8.4 gripper_rtq_2f85_init(v)

Robotiq 사의 2f85 그리퍼 초기화 함수.

- Input :<br>
  v: 그리퍼/센서의 연결 포트입니다

  - 0 = 툴 플랜지의 RS485
  - 1 = 제어 박스의 RS485

- Return :<br>
  없음.

Example :

```
gripper_rtq_2f85_init(1)  # 그리퍼 통신선이 제어박스에 연결되었을 경우
```

#### 8.5 gripper_rtq_2f85_reset(v)

Robotiq 사의 2f85 그리퍼 초기화 함수.

- Input :<br>
  v: 그리퍼/센서의 연결 포트입니다

  - 0 = 툴 플랜지의 RS485
  - 1 = 제어 박스의 RS485

- Return :<br>
  없음.

Example :

```
gripper_rtq_2f85_reset(1)  # 그리퍼 통신선이 제어박스에 연결되었을 경우
```

#### 8.6 gripper_rtq_2f85_go(v, v, v, v)

Robotiq 사의 2f85 그리퍼 이동 함수.

- Input :<br>
  v: 그리퍼/센서의 연결 포트입니다

  - 0 = 툴 플랜지의 RS485
  - 1 = 제어 박스의 RS485

  v: 목표 위치 % 값 (범주: 0~100)<br>
  v: 목표 속도 % 값 (범주: 0~100)<br>
  v: 목표 힘 % 값 (범주: 0~100)

- Return :<br>
  없음.

Example :

```
gripper_rtq_2f85_go(1, 100, 50, 100)
# 제어박스에 연결된 그리퍼를 위치 100%로 움직이다. (with 속도 50%, 힘 100%)
```

#### 8.7 gripper_rtq_2f140_init(v)

Robotiq 사의 2f140 그리퍼 초기화 함수.

- Input :<br>
  v: 그리퍼/센서의 연결 포트입니다

  - 0 = 툴 플랜지의 RS485
  - 1 = 제어 박스의 RS485

- Return :<br>
  없음.

Example :

```
gripper_rtq_2f140_init(1)   # 그리퍼 통신선이 제어박스에 연결되었을 경우
```

#### 8.8 gripper_rtq_2f140_reset(v)

Robotiq 사의 2f140 그리퍼 리셋 함수.

- Input :<br>
  v: 그리퍼/센서의 연결 포트입니다

  - 0 = 툴 플랜지의 RS485
  - 1 = 제어 박스의 RS485

- Return :<br>
  없음.

Example :

```
gripper_rtq_2f140_reset(1)   # 그리퍼 통신선이 제어박스에 연결되었을 경우
```

#### 8.9 gripper_rtq_2f140_go(v, v, v, v)

Robotiq 사의 2f140 그리퍼 이동 함수.

- Input :<br>
  v: 그리퍼/센서의 연결 포트입니다

  - 0 = 툴 플랜지의 RS485
  - 1 = 제어 박스의 RS485

  v: 목표 위치 % 값 (범주: 0~100)<br>
  v: 목표 속도 % 값 (범주: 0~100)<br>
  v: 목표 힘 % 값 (범주: 0~100)

- Return :<br>
  없음.

Example :

```
gripper_rtq_2f140_go(1, 100, 50, 100)
# 제어박스에 연결된 그리퍼를 위치 100%로 움직이다. (with 속도 50%, 힘 100%)
```

#### 8.10 gripper_rtq_epick_reset(v)

Robotiq 사의 epick 그리퍼 리셋 함수.

- Input :<br>
  v: 그리퍼/센서의 연결 포트입니다

  - 0 = 툴 플랜지의 RS485
  - 1 = 제어 박스의 RS485

- Return :<br>
  없음.

Example :

```
gripper_rtq_epick_reset(1)  # 그리퍼 통신선이 제어박스에 연결되었을 경우
```

#### 8.11 gripper_rtq_epick_suction(v)

Robotiq 사의 epick 그리퍼 공압 흡입 함수.

- Input :<br>
  v: 그리퍼/센서의 연결 포트입니다

  - 0 = 툴 플랜지의 RS485
  - 1 = 제어 박스의 RS485

- Return :<br>
  없음.

Example :

```
gripper_rtq_epick_suction(1)  # 제어박스에 연결된 공압 그리퍼를 흡입
```

#### 8.12 gripper_rtq_epick_release(v)

Robotiq 사의 epick 그리퍼 공압 배출 함수.

- Input :<br>
  v: 그리퍼/센서의 연결 포트입니다

  - 0 = 툴 플랜지의 RS485
  - 1 = 제어 박스의 RS485

- Return :<br>
  없음.

Example :

```
gripper_rtq_epick_release(1)  # 제어박스에 연결된 공압 그리퍼를 배출
```

#### 8.13 gripper_rtq_epick_hold(v)

Robotiq 사의 epick 그리퍼 공압 유지 함수.

- Input :<br>
  v: 그리퍼/센서의 연결 포트입니다

  - 0 = 툴 플랜지의 RS485
  - 1 = 제어 박스의 RS485

- Return :<br>
  없음.

Example :

```
gripper_rtq_epick_hold(1)  # 제어박스에 연결된 공압 그리퍼를 유지
```

#### 8.14 gripper_rts_rhp12rn_init(v)

ROBOTIS 사의 rhp12rn 그리퍼 초기화 함수.

- Input :<br>
  v: 그리퍼/센서의 연결 포트입니다

  - 0 = 툴 플랜지의 RS485
  - 1 = 제어 박스의 RS485

- Return :<br>
  없음.

Example :

```
gripper_rts_rhp12rn_init(1)  # 제어박스에 연결된 그리퍼 초기화
```

#### 8.15 gripper_rts_rhp12rn_go(v, v)

ROBOTIS 사의 rhp12rn 그리퍼 이동 함수.

- Input :<br>
  v: 그리퍼/센서의 연결 포트입니다

  - 0 = 툴 플랜지의 RS485
  - 1 = 제어 박스의 RS485

  v: 목표 위치 % 값 (범주: 0~100)

- Return :<br>
  없음.

Example :

```
gripper_rts_rhp12rn_go(1, 100)  # 제어박스에 연결된 그리퍼를 위치 100%로 움직임.
```

#### 8.16 gripper_jrt_jegb485_init(v)

주강로보테크 사의 jegb485 그리퍼 초기화 함수.

- Input :<br>
  v: 그리퍼/센서의 연결 포트입니다

  - 0 = 툴 플랜지의 RS485
  - 1 = 제어 박스의 RS485

- Return :<br>
  없음.

Example :

```
gripper_jrt_jegb485_init(1)  # 제어박스에 연결된 그리퍼 초기화
```

#### 8.17 gripper_jrt_jegb485_go(v, v)

주강로보테크 사의 jegb485 그리퍼 이동 함수.

- Input :<br>
  v: 그리퍼/센서의 연결 포트입니다

  - 0 = 툴 플랜지의 RS485
  - 1 = 제어 박스의 RS485

  v: 목표 위치 % 값 (범주: 0~100)

- Return :<br>
  없음.

Example :

```
gripper_jrt_jegb485_go(1, 100)  # 제어박스에 연결된 그리퍼를 위치 100%로 움직임.
```

#### 8.18 gripper_jrt_jegb485_go(v, v, v, v)

주강로보테크 사의 jegb485 그리퍼 이동 함수.

- Input :<br>
  v: 그리퍼/센서의 연결 포트입니다

  - 0 = 툴 플랜지의 RS485
  - 1 = 제어 박스의 RS485

  v: 목표 위치 % 값 (범주: 0~100)<br>
  v: 목표 속도 % 값 (범주: 0~100)<br>
  v: 목표 가속도 % 값 (범주: 0~100)

- Return :<br>
  없음.

Example :

```
gripper_jrt_jegb485_go(1, 100, 50, 50)
# 제어박스에 연결된 그리퍼를 위치 100%로 움직이다. (with 속도 & 가속도 50%)
```

#### 8.19 gripper_jrt_jegb485_set(v, v, v, v)

주강로보테크 사의 jegb485 그리퍼 설정 함수.

- Input :<br>
  v: 그리퍼/센서의 연결 포트입니다

  - 0 = 툴 플랜지의 RS485
  - 1 = 제어 박스의 RS485

  v: 목표 속도 % 값 (범주: 0~100)<br>
  v: 목표 가속도 % 값 (범주: 0~100)<br>
  v: 목표 힘 % 값 (범주: 0~100)

- Return :<br>
  없음.

Example :

```
gripper_jrt_jegb485_set(1, 50, 30, 20)
# 제어박스에 연결된 그리퍼의 운동 속성 속도/가속도/힘을 각각 50, 30, 20%로 설정
```

#### 8.20 gripper_jrt_jegb4140_init(v)

주강로보테크 사의 jegb4140 그리퍼 초기화 함수.

- Input :<br>
  v: 그리퍼/센서의 연결 포트입니다

  - 0 = 툴 플랜지의 RS485
  - 1 = 제어 박스의 RS485

- Return :<br>
  없음.

Example :

```
gripper_jrt_jegb4140_init(1)  # 제어박스에 연결된 그리퍼 초기화
```

#### 8.21 gripper_jrt_jegb4140_go(v, v)

주강로보테크 사의 jegb4140 그리퍼 이동 함수.

- Input :<br>
  v: 그리퍼/센서의 연결 포트입니다

  - 0 = 툴 플랜지의 RS485
  - 1 = 제어 박스의 RS485

  v: 목표 위치 % 값 (범주: 0~100)

- Return :<br>
  없음.

Example :

```
gripper_jrt_jegb4140_go(1, 100)  # 제어박스에 연결된 그리퍼를 위치 100%로 움직이다.
```

#### 8.22 gripper_jrt_jegb4140_go(v, v, v, v)

주강로보테크 사의 jegb4140 그리퍼 이동 함수.

- Input :<br>
  v: 그리퍼/센서의 연결 포트입니다

  - 0 = 툴 플랜지의 RS485
  - 1 = 제어 박스의 RS485

  v: 목표 위치 % 값 (범주: 0~100)<br>
  v: 목표 속도 % 값 (범주: 0~100)<br>
  v: 목표 가속도 % 값 (범주: 0~100)

- Return :<br>
  없음.

Example :

```
gripper_jrt_jegb4140_go(1, 100, 50, 50)
# 제어박스에 연결된 그리퍼를 위치 100%로 움직이다. (with 속도&가속도 50%)
```

#### 8.23 gripper_jrt_jegb4140_set(v, v, v, v)

주강로보테크 사의 jegb4140 그리퍼 설정 함수.

- Input :<br>
  v: 그리퍼/센서의 연결 포트입니다

  - 0 = 툴 플랜지의 RS485
  - 1 = 제어 박스의 RS485

  v: 목표 속도 % 값 (범주: 0~100)<br>
  v: 목표 가속도 % 값 (범주: 0~100)<br>
  v: 목표 힘 % 값 (범주: 0~100)

- Return :<br>
  없음.

Example :

```
gripper_jrt_jegb4140_set(1, 50, 30, 20)
# 제어박스에 연결된 그리퍼의 운동 속성 속도/가속도/힘을 각각 50, 30, 20%로 설정
```

#### 8.24 gripper_dh_ag95_init(v)

DH Robotics 사의 AG-95 그리퍼 초기화 함수.

- Input :<br>
  v: 그리퍼/센서의 연결 포트입니다

  - 0 = 툴 플랜지의 RS485
  - 1 = 제어 박스의 RS485 / 또는 USB

- Return :<br>
  없음.

Example :

```
gripper_dh_ag95_init(1)  # 제어박스에 연결된 그리퍼 초기화
```

#### 8.25 gripper_dh_ag95_gripforce(v, v)

DH Robotics 사의 AG-95 그리퍼 안쪽 잡는 힘 제한 설정.

- Input :<br>
  v: 그리퍼/센서의 연결 포트입니다

  - 0 = 툴 플랜지의 RS485
  - 1 = 제어 박스의 RS485 / 또는 USB

  v: 그리퍼 안쪽 물체를 잡는 힘을 제한합니다. (20 ~ 100 %)

- Return :<br>
  없음.

Example :

```
gripper_dh_ag95_gripforce(1, 30)
# 제어박스에 연결된 그리퍼의 잡는 힘 제한을 30%로 설정합니다.
```

#### 8.26 gripper_dh_ag95_openforce(v, v)

DH Robotics 사의 AG-95 그리퍼 바깥쪽 펴는 힘 제한 설정.

- Input :<br>
  v: 그리퍼/센서의 연결 포트입니다

  - 0 = 툴 플랜지의 RS485
  - 1 = 제어 박스의 RS485 / 또는 USB

  v: 그리퍼 바깥쪽 펴는 힘을 제한합니다. (20 ~ 100 %)

- Return :<br>
  없음.

Example :

```
gripper_dh_ag95_openforce(1, 70)
# 제어박스에 연결된 그리퍼의 펴는 힘 제한을 70%로 설정합니다.
```

#### 8.27 gripper_dh_ag95_go(v, v)

DH Robotics 사의 AG-95 그리퍼 이동 함수.

- Input :<br>
  v: 그리퍼/센서의 연결 포트입니다

  - 0 = 툴 플랜지의 RS485
  - 1 = 제어 박스의 RS485 / 또는 USB

  v: 그리퍼의 이동 목표 위치를 설정합니다. (0 ~ 100 %)

- Return :<br>
  없음.

Example :

```
gripper_dh_ag95_go(1, 50)   # 제어박스에 연결된 그리퍼를 50% 위치로 보냅니다.
```

#### 8.28 gripper_setech_cmd(v)

Setech 사의 너트러너 장치 구동

- Input :<br>
  v: 명령어 번호

  - 0 = Stop
  - 1 = Reset
  - 2 = Quick Start
  - 3 = First stage
  - 4 = Second stage
  - 5 = Reverse

- Return :<br>
  없음.

Example :

```
gripper_setech_cmd(#)
```

### 9. 통신 함수

<br>

#### 9.1 mc_comm_set_bit(v, S, v, v=1)

Mitsubishi 등의 PLC 장비에서 제공하는 MC 통신 포멧으로 원하는 비트 데이터 (1 bit)를 원하는 주소 값에 보냅니다.

- Input :<br>
  v: 소켓 통신 핸들러 번호 입니다. (0 ~ 4)<br>
  S: PLC 장비의 메모리 주소 값 (string 형태)

  - 주소값은 D..., X... 등의 형태로, PLC 장비가 제공하는 범주의 주소 값<br>

  v: PLC 메모리에 보내고 싶은 값 (0 또는 1)<br>
  v: Handshake 시그널 수신 대기 최대 시간 / Timeout 시간 **(단위: 초) (기본값: 1)**

- Return :<br>
  v: PLC 로부터 유효 (Handshake) 시그널 수신 여부
  - 0: 수신 실패
  - 1: 수신 성공

Example :

```
str target_address = “D2000”
var target_write_value = 1
var is_tx_success = mc_comm_set_bit(0, target_address, target_write_value)
# 0 번 소켓을 사용하여, PLC 주소 D2000 에 값 1 를 보냅니다.

# 또는 아래와 같이 쓸 수 있습니다.
var is_tx_success = mc_comm_set_bit(0, “D2000”, 1)
```

#### 9.2 mc_comm_set_word(v, S, v, v=1)

Mitsubishi 등의 PLC 장비에서 제공하는 MC 통신 포멧으로 원하는 워드 데이터 (1 word = 16 bit)를 원하는 주소 값에 보냅니다.

- Input :<br>
  v: 소켓 통신 핸들러 번호 입니다. (0 ~ 4)<br>
  S: PLC 장비의 메모리 주소 값 (string 형태)

  - 주소값은 D..., X... 등의 형태로, PLC 장비가 제공하는 범주의 주소 값<br>

  v: PLC 메모리에 보내고 싶은 값<br>
  v: Handshake 시그널 수신 대기 최대 시간 / Timeout 시간 **(단위: 초) (기본값: 1)**

- Return :<br>
  v: PLC 로부터 유효 (Handshake) 시그널 수신 여부
  - 0: 수신 실패
  - 1: 수신 성공

Example :

```
str target_address = “D2000”
var target_write_value = 150
var is_tx_success = mc_comm_set_word(0, target_address, target_write_value)
# 0 번 소켓을 사용하여, PLC 주소 D2000 에 값 150 을 보냅니다.

# 또는 아래와 같이 쓸 수 있습니다.
var is_tx_success = mc_comm_set_word(0, “D2000”, 150)
```

#### 9.3 mc_comm_req_bit(v, S, v=1)

Mitsubishi 등의 PLC 장비의 특정 주소 값의 비트 데이터(1 bit)를 요청 및 수신합니다.

- Input :<br>
  v: 소켓 통신 핸들러 번호 입니다. (0 ~ 4)<br>
  S: PLC 장비의 메모리 주소 값 (string 형태)

  - 주소값은 D..., X... 등의 형태로, PLC 장비가 제공하는 범주의 주소 값<br>

  v: Handshake 시그널 수신 대기 최대 시간 / Timeout 시간 **(단위: 초) (기본값: 1)**

- Return :<br>
  v: PLC 로부터 받은 비트 데이터 값 입니다.
  - -1: 수신 실패
  - 0 또는 1: 수신된 비트 데이터 값

Example :

```
str target_address = “D2000”
var rx_data = mc_comm_req_bit(0, target_address)
# 0 번 소켓을 사용하여, PLC 주소 D2000 의 비트 값을 요청/수신 합니다.

# 또는 아래와 같이 쓸 수 있습니다.
var rx_data = mc_comm_req_bit(0, “D2000”)
```

#### 9.4 mc_comm_req_word(v, S, v=1)

Mitsubishi 등의 PLC 장비의 특정 주소 값의 워드 데이터(1 word = 1 bit)를 요청 및 수신합니다.

- Input :<br>
  v: 소켓 통신 핸들러 번호 입니다. (0~4)<br>
  S: PLC 장비의 메모리 주소 값 (string 형태)

  - 주소값은 D..., X... 등의 형태로, PLC 장비가 제공하는 범주의 주소 값<br>

  v: Handshake 시그널 수신 대기 최대 시간 / Timeout 시간 **(단위: 초) (기본값: 1)**

- Return :<br>
  v: PLC 로부터 받은 비트 데이터 값 입니다.
  - -1: 수신 실패

Example :

```
str target_address = “D2000”
var rx_data = mc_comm_req_word(0, target_address)
# 0 번 소켓을 사용하여, PLC 주소 D2000 의 워드 값을 요청/수신 합니다.

# 또는 아래와 같이 쓸 수 있습니다.
var rx_data = mc_comm_req_word(0, “D2000”)
```

#### 9.5 socket_connect(v, S, v)

TCP/IP 통신을 위하여 소켓 포트를 열고 상대방 서버에 접속하는 함수 입니다.

- Input :<br>
  v: 소켓 통신 핸들러 번호 입니다. (0 ~ 4)<br>
  S: 서버의 IP 주소 (string 형태)

  - “192.168.0.10” 과 같은 형태로 입력

- Return :<br>
  없음.

Example :

```
socket_connect(0, “192.168.0.10”, 5678)
# 0 번 소켓을 사용하여, 서버 주소 “192.168.0.10”의 포트 5678 에 접속
```

#### 9.6 socket_disconnect(v)

TCP/IP 통신의 소켓 포트를 닫고 연결을 끊습니다.

- Input :<br>
  v: 소켓 통신 핸들러 번호 입니다. (0 ~ 4)

- Return :<br>
  없음.

Example :

```
socket_disconnect(0)    # 0 번 소켓 핸들러로 열려 있는 통신을 끊고 종료합니다.
```

#### 9.7 socket_send_str(v, S)

TCP/IP 통신을 통하여 문자열을 서버로 전송합니다.

- Input :<br>
  v: 소켓 통신 핸들러 번호 입니다. (0 ~ 4)<br>
  S: 서버로 전송할 문자열

- Return :<br>
  없음.

Example :

```
socket_send_str(0, “hello world”)   # 0 번 소켓이 연결되어 있는 서버로 “hello world”전송

var my_var = 1234
socket_send_str(0, to_str(my_var))  # 0 번 소켓이 연결되어 있는 서버로 변수 값을 문자열로 전송
```

#### 9.8 socket_read_str(v)

TCP/IP 통신을 통하여 서버로부터 수신한 문자열을 리턴 합니다.

- Input :<br>
  v: 소켓 통신 핸들러 번호 입니다. (0 ~ 4)

- Return :<br>
  S: 서버로부터 수신한 문자열

Example :

```
str receive_str = socket_read_str(0)
if (SD_SOCKET_LAST_READ_0){
    debug “receive_str”
}

# 0 번 소켓이 연결된 서버로부터 문자열을 수신하고, 수신된 문자열이 있을 경우 이를 알람창에 표시.
# 서버에서 “rainbow”라고 보낼 시, receivce_str 문자열 변수에는 “rainbow”가 저장됩니다.
```

#### 9.9 socket_read_var(v)

TCP/IP 통신을 통하여 서버로부터 수신한 아스키문자열 숫자 변수 형태로 리턴 합니다.

- Input :<br>
  v: 소켓 통신 핸들러 번호 입니다. (0 ~ 4)

- Return :<br>
  v: 서버로부터 수신한 숫자

Example :

```
var receive_var = socket_read_var(0)
if (SD_SOCKET_LAST_READ_0){
    debug “receive_var”
}

# 0 번 소켓이 연결된 서버로부터 문자열을 수신하고, 수신된 문자열을 숫자 변수 형태로 변환, 그리고 수신이 있을 경우 이를 알람창에 표시.
# 서버에서 “123.456”을 보낼 시, receivce_var 숫자 변수에는 123.456 이 저장됩니다.
```

#### 9.10 hmi_set_one_word (v, v, v, v=1)

Proface/TOP 등의 HMI 장비에서 제공하는 메모리 링크(Memory-link) 통신 포멧으로 원하는 워드 데이터 (1 word = 16 bit)를 원하는 주소 값에 보냅니다.

- Input :<br>
  v: 소켓 통신 핸들러 번호 입니다. (0 ~ 4)<br>
  v: HMI 장비의 메모리 주소 값 (0 ~ 9999)<br>
  v: HMI 메모리에 보내고 싶은 값 또는 변수(variable)<br>
  v: Handshake 시그널 수신 대기 최대 시간 / Timeout 시간 **(단위: 초) (기본값: 1)**

- Return :<br>
  v: HMI 로부터 유효 (Handshake) 시그널 수신 여부
  - 0: 수신 실패
  - 1: 수신 성공

Example :

```
var target_address = 6000
var target_write_value = 150
var is_tx_success = hmi_set_one_word(0, target_address, target_write_value)
# 0 번 소켓을 사용하여, HMI 주소 6000 에 값 150 을 보냅니다.

# 또는 아래와 같이 쓸 수 있습니다.
var is_tx_success = hmi_set_one_word(0, 6000, 150)
```

#### 9.11 hmi_set_multi_word (v, v, v, v=1, A)

Proface/TOP 등의 HMI 장비에서 제공하는 메모리 링크(Memory-link) 통신 포멧으로 원하는 워드 데이터 (1 word = 16 bit) 배열을 원하는 주소 값부터 지정된 길이까지 보냅니다.

- Input :<br>
  v: 소켓 통신 핸들러 번호 입니다. (0 ~ 4)<br>
  v: HMI 장비의 메모리 주소 값 (0 ~ 9999) 시작 값<br>
  v: HMI 장비에 보낼 데이터 개수 (최대 20개)<br>
  v: Handshake 시그널 수신 대기 최대 시간 / Timeout 시간 **(단위: 초) (기본값: 1)**
  A: 보내고자 하는 배열 데이터

- Return :<br>
  v: HMI 로부터 유효 (Handshake) 시그널 수신 여부
  - 0: 수신 실패
  - 1: 수신 성공

Example :

```
arr my_arr = {150, 160, 200, 210}
var is_tx_success = hmi_set_multi_word(0, 6000, 4, my_arr)

# 0번 소켓을 사용하여, HMI 주소 6000 부터 4개 주소 값(6000 ~ 6003)에 배열에 저장된 값 4개
(150, 160, 200, 210)를 각각 보냅니다.
```

#### 9.12 hmi_req_one_word (v, v, v=1)

Proface/TOP 등의 HMI 장비에서 제공하는 메모리 링크(Memory-link) 통신 포멧으로 원하는 주소 값의 워드 데이터 (1 word = 16 bit)를 읽어옵니다.

- Input :<br>
  v: 소켓 통신 핸들러 번호 입니다. (0 ~ 4)<br>
  v: HMI 장비의 메모리 주소 값 (0 ~ 9999)<br>
  v: Handshake 시그널 수신 대기 최대 시간 / Timeout 시간 **(단위: 초) (기본값: 1)**

- Return :<br>
  v: HMI 로부터 수신한 해당 주소 값에 저장된 값

Example :

```
var my_num
my_num = hmi_req_one_word(0, 7000)
# 0번 소켓을 사용하여, HMI 주소 7000의 값을 읽어서 변수 my_num 에 저장합니다.
```

#### 9.13 hmi_req_multi_word (v, v, v, v=1)

Proface/TOP 등의 HMI 장비에서 제공하는 메모리 링크(Memory-link) 통신 포멧으로 원하는 주소 값들의 워드 데이터 (1 word = 16 bit)를 배열 형태로 읽어옵니다.

- Input :<br>
  v: 소켓 통신 핸들러 번호 입니다. (0 ~ 4)<br>
  v: HMI 장비의 메모리 주소 값 (0 ~ 9999)<br>
  v: HMI 장비로부터 읽을 데이터 개수 (최대 20 개)<br>
  v: Handshake 시그널 수신 대기 최대 시간 / Timeout 시간 **(단위: 초) (기본값: 1)**

- Return :<br>
  A: HMI 로부터 수신한 데이터를 저장할 배열 변수 (array)

Example :

```
arr my_array
my_array = hmi_req_multi_word(0, 7000, 10)
# 0번 소켓을 사용하여, HMI 주소 7000부터 10개의 값 (주소값 7000~7009)을 읽어서 배열 변수 my_array 에 저장합니다.
```

### 10. 벡터 (VECTOR)

벡터 란, 동적 할당되는 변수 형태를 지칭합니다. 길이가 지정되지 않은 배열의 형태입니다.<br>

흔히, C++와 같은 언어에서 vector\<float\> 또는 vector\<string\> 과 같은 형태로 선언됩니다.<br>
Rainbow Robotics 의 스크립트 시스템에서는 숫자 벡터와, 문자열 벡터, 두 가지가 지원되며, 각각은 C++ 기준, vector\<float\>과 vector\<string\>에 대응됩니다.

#### 10.1 숫자 벡터

```
# 선언은 vec 이라는 선언자를 사용합니다.
vec hello_world

# 선언과 동시에 초기화도 가능합니다.
vec hello_world = {10, 20, 30}

# 벡터의 길이는 vec_length (혹은 vec_leng) 함수로 획득 가능합니다.
# 이때 함수의 입력 인자는 벡터 형태의 변수 명 입니다.
var num = vec_length( hello_world)

# 벡터에 인자를 추가하고 자 할 때는 vec_push (혹은 vec_push_back, 혹은 vec_add) 함수를
사용합니다.
# 이때 함수의 입력 인자는 벡터 형태의 변수 명과 추가하고 싶은 숫자 입니다.
vec_push( hello_world, 40)
vec_push( hello_world, 50)

# 벡터를 비우고 (초기화) 싶을 경우 vec_clear (혹은 vec_clr) 함수를 사용합니다.
# 이 때 함수의 입력 인자는 벡터 형태의 변수 명 입니다.
vec_clear(hello_world)

# 벡터에 저장되어 있는 값을 참조 하고 싶을 경우 vec_at 함수 를 사용합니다.
# 이 때 함수의 입력 인자는 벡터 형태의 변수 명과, 참조하고 싶은 인덱스 입니다.
# [] 연산자를 통해서도 인덱스 참조가 가능합니다.
var value = vec_at(hello_world, 2)
var value = hello_world[2]
```

Example :

```
vec mung = {10, 20}             # mung 이라는 이름으로 벡터 선언, 초기값 10 과 20
var my_num = vec_length(mung)   # my_num 에는 벡터 길이 2 가 리턴
vec_push( mung, 30)             # mung 벡터 가장 뒤에 숫자 30 추가
vec_push( mung, 40)             # mung 벡터 가장 뒤에 숫자 40 추가
var my_num = vec_length(mung)   # my_num 에는 벡터 길이 4 가 리턴
var a = vec_at(mung, 1)         # mung 벡터 인덱스 1 을 참조 하여 a 에는 20 이 리턴
var b = mung[3]                 # mung 벡터 인덱스 3 을 참조 하여 b 에는 40 이 리턴
vec_clear(mung)                 # mung 벡터 비우기
var my_num = vec_length(mung)   # my_num 에는 벡터 길이 0 이 리턴
```

#### 10.2 문자열 벡터

문자열 벡터의 경우, 숫자 벡터와 함수 사용법은 동일 합니다.<br>

다만, 시스템 메모리 제한 상, 문자열 벡터는 사전에 정의된 이름만 사용 가능합니다.<br>
아래와 같이 10 개의 문자열 벡터가 시스템에 정의되어 있습니다. 사용자는 선언할 필요 없이, 바로 아래의 이름의 문자열 벡터를 사용 가능합니다.<br>

사전 정의된 문자열 벡터 : str_vec_0, str_vec_1, … , str_vec_9<br>

벡터에 관한 사용 함수는, 앞장에 소개된 숫자 벡터와 동일합니다.

Example :

```
vec_push(str_vec_3, “hello”)        # str_vec_3 벡터 에 “hello” 라는 문자열 추가
vec_push(str_vec_3, “world”)        # str_vec_3 벡터 에 “world” 라는 문자열 추가
var my_num = vec_length(str_vec_3)  # my_num 에는 벡터 길이 2 가 리턴
vec_push(str_vec_3, “aa”)           # str_vec_3 벡터 에 “aa” 라는 문자열 추가
vec_push(str_vec_3, “bb”)           # str_vec_3 벡터 에 “bb” 라는 문자열 추가
var my_num = vec_length(str_vec_3)  # my_num 에는 벡터 길이 4 가 리턴
str sa = vec_at(str_vec_3, 1)       # str_vec_3 벡터 인덱스 1 을 참조 하여 sa 에는 “world”이 리턴
str sb = str_vec_3[3]               # str_vec_3 벡터 인덱스 3 을 참조 하여 sb 에는 “bb”이 리턴
vec_clear(str_vec_3)                # str_vec_3 벡터 비우기
var my_num = vec_length(str_vec_3)  # my_num 에는 벡터 길이 0 가 리턴
```
