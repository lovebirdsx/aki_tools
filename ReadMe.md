# Aki相关的工具

## UpdateUeType.bat

可以将所有UE的声明文件合并成一个
从而可以方便进行ts-watch的操作

注意,需要将Perforce上的Typing目录克隆至此目录
`git p4 clone //aki/development/Source/Client/TypeScript/Typing/`

## WatchForXXEditor

包含以下3个工具

- WatchForFlowEditor.bat
- WatchForTalkerEditor.bat
- WatchForTestEditor.bat

将这些工具拷贝到Aki的TypeScript的Tool下
可以方便进行ts-watch的操作
