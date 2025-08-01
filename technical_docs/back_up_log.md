---
layout: doc
outline: deep
---

# How To Log Data Back-up v7.7

### Log Data extraction

::: tip
This manual was created based on Control Box and UI version 7.7.4.<br>
When the Control Box and UI are connected via USB, **up to 10 days** of log data can be accessed.<br>
If connected via TCP/IP, **only one day’s** worth of log data is available. 
:::
![missing](/technical_docs/common/backup_log/1.png)

To retrieve the log data, go to Set-up > Log/Utility > Log and click the Get button.
![missing](/technical_docs/common/backup_log/1_2.png)

After clicking the Get button, if a popup window like the one shown on the bottom appears, the log data has been successfully retrieved.
![missing](/technical_docs/common/backup_log/3.png)

By clicking the Load button below Get, you can view up to 10 days of log data, as shown in the image on the bottom.
![missing](/technical_docs/common/backup_log/1_4.png)

By selecting the desired date, you can view the log data for that day, as shown in the image on the bottom.
![missing](/technical_docs/common/backup_log/1_5.png)

On the right, you can selectively extract and view only the desired items by using the All ~ User options.
![missing](/technical_docs/common/backup_log/1_6.png)

Click the Mail button on the right, enter the email subject, and then click Send at the bottom to easily send the log file to the technical support team. <br>
※ Please ensure that the tablet is **connected to the internet**. 
![missing](/technical_docs/common/backup_log/1_7.png)

### Location Log Data file

After connecting the tablet to the PC, navigate to the following path:<br>
**File Explorer > [Tablet Name] > Android > data**
![missing](/technical_docs/common/backup_log/1_8.png)

Go to the **com.rainbow.cobot > files folder**. 
![missing](/technical_docs/common/backup_log/1_9.png)

Navigate to the **Log > _SysLog folder** to check the backed-up log files.
![missing](/technical_docs/common/backup_log/1_10.png)