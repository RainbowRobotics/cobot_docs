---
layout: doc
outline: deep
---

# Set-up (Program Table)

### Function DescriptionFunction Description

You can set up the programs to be triggered by each digital input.

![missing](/manual/en/setup/p1.png)

1. Import the existing settings.
2. Select the digital input port to be used.
3. Choose the function to use. The functions are categorized as Load, Load + Play (Once), and Load + Play (Repeat).
4. Select the project to be used via the digital input.
5. Save the configured settings.

The existing Start Program function under ‘Setup > I/O1’ in Control Box Digital Input Function Definition can only utilize one digital input and can only execute the main program currently uploaded to the control box.<br>
In contrast, Setup > Program Table allows you to load different programs for different digital inputs, enabling program execution and other functionalities.<br>

You can see the differences between the two functions in the diagram below.

![missing](/manual/en/setup/15-2.png)


### How to Set the Program Table

![missing](/technical_docs/common/program_table/1.png)

1. You can choose one of the following options: Load the program file only, Load and execute the,  program once, Load and continuously execute the program in a loop

![missing](/technical_docs/common/program_table/2.png)

![missing](/technical_docs/common/program_table/3.png)

2. After selecting an option, choose the .wsl file you want to execute. Register the desired program file to the desired program number slot.
   
### How to set Digital Input 

![missing](/technical_docs/common/program_table/4.png)

3. If the program table has been registered to slot 0, go to Set-up > I/O1, and assign one of the available functions to Din 0 as shown above.

![missing](/technical_docs/common/program_table/5.png)

4. The program table entry “my_project” registered in slot 0 will be executed on the falling edge of Digital Input 0 to which it has been assigned.