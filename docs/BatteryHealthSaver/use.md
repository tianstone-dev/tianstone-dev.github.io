import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 使用方法
在 `Windows` 环境下下载并解压release，打开 `BatteryHealthSaver.exe`即可享用。

## 开机自启

将 `BatteryHealthSaver.exe` 的快捷方式拖到 下列位置即可：
<Tabs>
  <TabItem value="currentuser" label="为本用户启用" default>
    ```
    C:\Users\{{username}}\Appdata\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\
    ```
  </TabItem>
  <TabItem value="alluser" label="为本计算机启用">
    ```
    C:\ProgramData\Windows\Start Menu\Programs\Startup\
    ```
  </TabItem>
</Tabs>


## 设置中心

新在欢迎界面点击“设置…”，进入设置中心。在设置中心中按提示输入。
::::warning 注意
### 设置中心使用常见错误
- 输入百分号（`%`）和其他不该出现的字符，**将导致设置中心出现*难以预料*的错误**
- 未出现“设置成功”就关闭窗口。
  :::danger 特别提醒
  未出现“设置成功”关闭窗口将导致保存失败！
  :::
::::

## 关闭应用
由于种种原因，本程序无法直接关闭。如需关闭请在终端输入以下指令：
```sh
taskkill /im power.exe /f /t
taskkill /im BatteryHealthSaver.exe /f /t
```