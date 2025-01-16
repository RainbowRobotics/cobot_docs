---
layout: doc
outline: deep
---

# Socket Communication Basic Usage Guide v2.0

### 1. Basic Concept Description

There are two main methods for application development using TCP/IP socket communication provided by Rainbow Robotics.

#### 1.1 Data Exchange based on General TCP communication

- The Rainbow Robotics system can be either a server or a client of TCP/IP.
- This is a method of sending and receiving only valid data (numbers, arrays, character strings, etc.) with the other PC/system.
- The user configures the program using the UI program of Rainbow Robotics.
- If specific data is sent from the other party's PC/system, it is possible to perform an action/program using that data.

![missing](/technical_docs/common/socket_communication/1-1.png)

#### 1.2 Robot control via External Script command

- Rainbow Robotics system acts as a server for TCP/IP. (using ports 5000/5001)
- Rather than using Rainbow Robotics' UI program, it is a way for users to create their own operating programs in their preferred development language.
- In accordance with the dedicated script grammar stipulated by Rainbow Robotics, the user just needs to send a string.
- User development language is irrelevant. (Java, C++, Python, etc.)
- All user need to do is to send the script string that conforms to the RB grammar. (to the specified port.)

![missing](/technical_docs/common/socket_communication/1-2-1.png)

For TCP/IP socket communication, the IP address of the Rainbow Robotics control box must be set in advance.<br>
IP address and Netmask can be set through UI Program.<br>
It can be set and checked in the ‘System’ menu of the ‘Setup’ page.

![missing](/technical_docs/common/socket_communication/1-2-2.png)

### 2. [Method 1] Data Exchange Based on General TCP Communication

![missing](/technical_docs/common/socket_communication/2-1-1.png)

- RB system can be either a server or a client of TCP/IP.
- If RB system is the server, the user system is the client and if the RB system is a client, user can make user’s system act as a server.<br>
  User can choose which one to use as a server according to user’s convenience.
- This is a method of sending and receiving only valid data (numbers, arrays, character strings, etc.) with the other party's PC/system.
- User configures the robot program using RB's UI program.
- If the other party's PC/system sends specific data, the operation/program can be executed using that data.
- The format of data exchanged is basically Ascii String.
- Both systems send and receive data in the form of strings. If necessary, string functions can be utilized to convert a string data into a number or an array, etc.
- IP addresses of both systems are configurable by the user.
- For communication ports, all numbers are available except for reserved port numbers (ports less than 1000, 2000, 2001, 5000, 5001).

<br>

The example below is a simple example of robot program configuration when [**Method 1**] is used.<br>
This guide does not separately explain the examples below and the functions used in the examples.<br>
For a description of each function and various examples, refer to the separate <u>‘Socket Communication Example Document’</u>.

![missing](/technical_docs/common/socket_communication/2-1-2.png)

<figcaption style="text-align: center;">[ Example: when using the RB system as a TCP client ]</figcaption>

![missing](/technical_docs/common/socket_communication/2-1-3.png)

<figcaption style="text-align: center;">[ Example: when using the RB system as a TCP server ]</figcaption>

### 3. [Method 2] Robot Control via External Script Command

![missing](/technical_docs/common/socket_communication/3-1.png)

- RB system operates as a TCP/IP server. (Port 5000 & 5001)
- Rather than using RB's UI program, it is a way for users to create their own operating programs in their preferred development language.
- According to the dedicated script syntax stipulated by RB, users just need to send a string.
- User’s development language is irrelevant. (JAVA, C#, C/C++, Python, etc.)
- Regardless of the user's development language, just send a script string that matches the grammar. (to specific ports)
- Port 5000 is used to send user commands to the RB system. (movement command, etc.)
- Port 5001 is used to deliver the status information of the RB system to the user. (joint information, movement state information, etc.)

![missing](/technical_docs/common/socket_communication/3-2.png)

<br>

The external control script is described in <u>“Manual Appendix E”</u>.
There are two types of robot motion command script.

- Descriptive script (described in the ‘Product manual-Appen.E’)
- Function-type script (described in the ‘UI script manual’)

It doesn't matter which type user use. Just send a command to port 5000.

#### 3.1 Example 1 - Move J

The example below is an example of both descriptive and functional type for moving 6 joints to 0,45,90,0,90,0 degrees with Move J.

##### 3.1.1 Descriptive script Type:

```
“jointall 0.3, 0.1, 0, 45, 90, 0, 90, 0”
```

##### 3.1.2 Functional-type script Type:

```
“move_j(jnt[0, 45, 90, 0, 90, 0], 60, 80)”
```

#### 3.2 Example 2 - Move L

The example below is an example of both descriptive and functional type for moving TCP to 100,200,300,0,90,0 with Move L.

##### 3.2.1 Descriptive script Type:

```
“movetcp 0.2, 0.1, 100, 200, 300, 0, 90, 0”
```

##### 3.2.2 Functional-type script Type:

```
“move_l(pnt[100, 200, 300, 0, 90, 0], 100, 300)”
```

### 4. ETC

Rainbow Robotics provides an example program for 'External Control Script'.

- The description of the example program is described in Appendix E of the product manual.
- Example programs are available in two languages. (C++ & C#)
- The example program consists of C++ and C#, but as described above, the user-developed language is irrelevant.

#### 4.1 Example Program 1

1. C++ Language<br>
2. Qt (IDE Program) 5.8 environment.
   - Get v5.8 from https://www.qt.io/

#### 4.2 Example Program 2

1. C# Language
2. Microsoft Visual Studio (VS) environment

<style scoped>
</style>
